const { Comparator } = require("./comparator");

const filePaths = process.argv.slice(2);
const comparator = new Comparator(...filePaths);
comparator.compare();
