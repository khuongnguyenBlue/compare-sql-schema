# compare-sql-schema
## Objective
As its name, this tool is implemented mainly to compare SQL schemas.

## Usage
```shell
node src/app.js first_path sec_path
```

## Output
Markdown file is exported. Check `./reports` folders for example.

## Caveat

We use this `sql-ddl-to-json-schema` lib as a parser, but it is not perfect. We have to clean the input before feeding it in
the parser. Here are some regexps that we use to ignore some sections of the input file
```js
const nonDDLRegex = /(--.*(\n)?)|(\/\*.*(\n?))|(DELIMITER.*(\n.*)*\nDELIMITER.*(\n)?)|(CONSTRAINT.*CHECK.*\n)|(INSERT INTO.*(\n.*)*)/g;
```
- Ignore comments
```sql
  --
  -- Table structure for table `corebanking_fx_requests`
  --
```
```sql
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
```
- Ignore functions (usually start and end with `DELIMITER`
```sql
DELIMITER ;;
CREATE FUNCTION `DATE_TRUNC`(...
END ;;
DELIMITER ;
```
- Ignore constraint with check
```sql
CONSTRAINT `token_address_check` CHECK (regexp_like(`token_address`,_utf8mb4'^0x[0-9a-fA-F]{40}$')),
CONSTRAINT `wallet_address_check` CHECK (regexp_like(`wallet_address`,_utf8mb4'^0x[0-9a-fA-F]{40}$'))
```
- Ignore data generation part
```sql
INSERT INTO `schema_migrations` (version) VALUES
('20120129231330'),
('20120705005644'),
('20120711033715'),
('20120711044839'),
('20120711054138'),
...
```
```js
const edgeCasesRegex = /((?<!((PRIMARY|FOREIGN) )|\S)KEY.*\n)|(UNIQUE KEY.*\n)/g;
```
- **Ignore normal keys and unique keys (keep primary and foreign keys). If we parse these keys, the parser will take forever.
This is probably a tool bug.**
```sql
PRIMARY KEY (`id`),
UNIQUE KEY `index_xfers_transitions_on_sort_key_and_xfers_transaction_id` (`sort_key`,`xfers_transaction_id`), -- ignore
UNIQUE KEY `index_xfers_transitions_parent_most_recent` (`xfers_transaction_id`,`most_recent`), -- ignore
KEY `index_xfers_transitions_on_xfers_transaction_id` (`xfers_transaction_id`) -- ignore
```