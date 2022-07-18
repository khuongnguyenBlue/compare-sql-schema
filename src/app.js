import Comparator from "./comparator.js";

const filePaths = process.argv.slice(2);
const comparator = new Comparator(...filePaths);
comparator.compare();
