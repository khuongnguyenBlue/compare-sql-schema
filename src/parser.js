import { Parser } from "sql-ddl-to-json-schema";

const parser = new Parser("mysql");
export function compactJson(ddl) {
  parser.feed(ddl);
  return parser.toCompactJson(parser.results);
}

// clean the DDL content before feeding in parser
const nonDDLRegex = /(--.*(\n)?)|(\/\*.*(\n?))|(DELIMITER.*(\n.*)*\nDELIMITER.*(\n)?)|(CONSTRAINT.*CHECK.*\n)|(INSERT INTO.*(\n.*)*)/g;
const edgeCasesRegex = /((?<!((PRIMARY|FOREIGN) )|\S)KEY.*\n)|(UNIQUE KEY.*\n)/g;
const cleanupRegex = /,\n\s*(?=\))/g
export function cleanedDDL(ddl) {
  return ddl.replace(nonDDLRegex, "").replace(edgeCasesRegex, "").replace(cleanupRegex, "");
}