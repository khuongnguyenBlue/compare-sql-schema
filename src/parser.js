const { Parser } = require("sql-ddl-to-json-schema");

const parser = new Parser("mysql");
module.exports.compactJson = (ddl) => {
  parser.feed(ddl);
  return parser.toCompactJson(parser.results);
}

// clean the DDL content before feeding in parser
const nonDDLRegex = /(--.*(\n)?)|(\/\*.*(\n?))|(DELIMITER.*(\n.*)*\nDELIMITER.*(\n)?)|(INSERT INTO.*(\n.*)*)/g;
const edgeCasesRegex = /((?<!((PRIMARY|FOREIGN) )|\S)KEY.*\n)|(UNIQUE KEY.*\n)|(CONSTRAINT.*CHECK.*\n)/g;
const cleanupRegex = /,\n\s*(?=\))/g
module.exports.cleanedDDL = (ddl) => ddl.replace(nonDDLRegex, "").replace(edgeCasesRegex, "").replace(cleanupRegex, "");