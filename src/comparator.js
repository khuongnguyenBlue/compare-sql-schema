const _ = require("lodash")
const { render } = require("mustache")
const fs = require("fs")
const { compactJson, cleanedDDL } = require("./parser")

class Comparator {
  constructor(firstPath, secPath) {
    let pieces = firstPath.split("/")
    this.firstLabel = pieces[pieces.length-1]

    pieces = secPath.split("/")
    this.secLabel = pieces[pieces.length-1]

    this.firstStruct = this.jsonStruct(firstPath)
    this.secStruct = this.jsonStruct(secPath)
  }

  jsonStruct(filePath) {
    const buffer = fs.readFileSync(filePath);
    const ddl = cleanedDDL(buffer.toString());

    const jsonMap = new Map();
    const subDDLs = ddl.split(/\n{2,}/);
    for (const subDDL of subDDLs) {
      if (subDDL === "") {
        continue;
      }

      try {
        const jsonObject = compactJson(subDDL)[0];
        jsonMap.set(jsonObject.name, jsonObject);
      }
      catch(err) {
        console.log("*******ERR*******");
        console.log(err);
      }
    }

    return jsonMap
  }

  compare() {
    const diffStructs = [];
    const firstExtraStructs = []
    for (const [key, firstVal] of this.firstStruct) {
      const secVal = this.secStruct.get(key)
      if (secVal === undefined) {
        firstExtraStructs.push(key)
        continue
      }

      const [first, sec] = this.getDiffStructs(firstVal, secVal)
      if (first || sec) {
        diffStructs.push({ key: key, first: JSON.stringify(first), sec: JSON.stringify(sec) })
      }
      this.secStruct.delete(key)
    }

    const secExtraStructs = []
    for (const key of this.secStruct.keys()) {
      secExtraStructs.push(key)
    }

    this.print_log(firstExtraStructs, secExtraStructs, diffStructs)
    this.create_report(firstExtraStructs, secExtraStructs, diffStructs)
  }

  print_log(firstExtraStructs, secExtraStructs, diffStructs) {
    console.log("###################################################")
    console.log("Extra structs:")
    console.log(this.firstLabel)
    console.log(firstExtraStructs)
    console.log(this.secLabel)
    console.log(secExtraStructs)

    console.log("###################################################")
    console.log("Diff structs:")
    for (const diff of diffStructs) {
      console.log(diff.key)
      console.log(this.firstLabel)
      console.log(JSON.stringify(diff.first))
      console.log(this.secLabel)
      console.log(JSON.stringify(diff.sec))
    }
  }

  create_report(firstExtraStructs, secExtraStructs, diffStructs) {
    const template = fs.readFileSync("./reports/template.md").toString()
    const extraCount = firstExtraStructs.length + secExtraStructs.length
    const diffCount = diffStructs.length

    const output = render(template, {
      label: {
        first: this.firstLabel,
        sec: this.secLabel,
      },
      extra: {
        exist: extraCount > 0,
        first: firstExtraStructs,
        sec: secExtraStructs,
      },
      diff: diffStructs,
      diffExist: diffCount > 0,
      perfect: extraCount + diffCount === 0,
    })
    fs.writeFileSync(`./reports/${this.firstLabel}-vs-${this.secLabel}.md`, output)
  }

  getDiffStructs(first, sec) {
    if (_.isEqual(first, sec)) {
      return [null, null]
    }

    if (typeof first !== typeof sec) {
      return [first, sec]
    }

    if (_.isArray(first)) {
      let firstObj = first.reduce((prev, curr) => ({...prev, [curr.name]: curr}), {});
      let secObj = sec.reduce((prev, curr) => ({...prev, [curr.name]: curr}), {});

      return this.getDiffStructs(firstObj, secObj)
    }

    if (_.isObject(first)) {
      for (const property in first) {
        if (!_.isEqual(first[property], sec[property])) {
          const [firstProp, secProp] = this.getDiffStructs(first[property], sec[property])

          if (firstProp || secProp) {
            first[property] = firstProp
            sec[property] = secProp
            continue
          }
        }

        delete first[property]
        delete sec[property]
      }

      if (Object.keys(first).length === 0 && Object.keys(sec).length === 0) {
        return [null, null]
      }
    }

    return [first, sec]
  }
}

module.exports = {
  Comparator: Comparator
}