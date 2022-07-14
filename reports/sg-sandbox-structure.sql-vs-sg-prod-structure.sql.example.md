# Comparison report





## Diff structs

### account_groups_accounts_associations
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_49dc9611c1&quot;:{&quot;reference&quot;:{}},&quot;fk_rails_5ffc160125&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_49dc9611c1&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}},&quot;fk_rails_5ffc160125&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### account_shards
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_6baf6bac5e&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_6baf6bac5e&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### account_token_addresses
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_122327571d&quot;:{&quot;reference&quot;:{}},&quot;fk_rails_ae35319a5c&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_122327571d&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}},&quot;fk_rails_ae35319a5c&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### accounts
<b>sg-sandbox-structure.sql</b>

{&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB8324&quot;}}

<b>sg-prod-structure.sql</b>

{&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB&quot;}}

### accounts_service_providers
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_6b563ae092&quot;:{&quot;columns&quot;:[{&quot;column&quot;:&quot;service_provider_id&quot;}],&quot;reference&quot;:{&quot;table&quot;:&quot;service_providers&quot;,&quot;columns&quot;:[{&quot;column&quot;:&quot;id&quot;}]},&quot;name&quot;:&quot;fk_rails_6b563ae092&quot;},&quot;fk_rails_ee568016d5&quot;:{&quot;columns&quot;:[{&quot;column&quot;:&quot;account_id&quot;}],&quot;reference&quot;:{&quot;table&quot;:&quot;accounts&quot;,&quot;columns&quot;:[{&quot;column&quot;:&quot;id&quot;}]},&quot;name&quot;:&quot;fk_rails_ee568016d5&quot;}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_fc47dcb027&quot;:{&quot;columns&quot;:[{&quot;column&quot;:&quot;account_id&quot;}],&quot;reference&quot;:{&quot;table&quot;:&quot;accounts&quot;,&quot;columns&quot;:[{&quot;column&quot;:&quot;id&quot;}]},&quot;name&quot;:&quot;fk_rails_fc47dcb027&quot;},&quot;fk_rails_fc48dcb028&quot;:{&quot;columns&quot;:[{&quot;column&quot;:&quot;service_provider_id&quot;}],&quot;reference&quot;:{&quot;table&quot;:&quot;service_providers&quot;,&quot;columns&quot;:[{&quot;column&quot;:&quot;id&quot;}]},&quot;name&quot;:&quot;fk_rails_fc48dcb028&quot;}}}

### address_risk_scores
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_54075c68d7&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_54075c68d7&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### admin_permissions
<b>sg-sandbox-structure.sql</b>

{&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB49&quot;}}

<b>sg-prod-structure.sql</b>

{&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB&quot;}}

### admin_permissions_roles_mappings
<b>sg-sandbox-structure.sql</b>

{&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB33&quot;}}

<b>sg-prod-structure.sql</b>

{&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB&quot;}}

### admin_sms_whitelistings
<b>sg-sandbox-structure.sql</b>

{&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB4&quot;}}

<b>sg-prod-structure.sql</b>

{&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB&quot;}}

### aml_checks
<b>sg-sandbox-structure.sql</b>

{&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB1&quot;}}

<b>sg-prod-structure.sql</b>

{&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB&quot;}}

### analytic_exclusions
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_94b9a31fba&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_94b9a31fba&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### ar_internal_metadata
<b>sg-sandbox-structure.sql</b>

{&quot;columns&quot;:{&quot;key&quot;:{&quot;options&quot;:{&quot;charset&quot;:&quot;utf8&quot;,&quot;collation&quot;:&quot;utf8_general_ci&quot;}}}}

<b>sg-prod-structure.sql</b>

{&quot;columns&quot;:{&quot;key&quot;:{&quot;options&quot;:{&quot;charset&quot;:&quot;utf8mb4&quot;,&quot;collation&quot;:&quot;utf8mb4_general_ci&quot;}}}}

### audit_trails
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_a1d6a627c5&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_a1d6a627c5&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### bank_instructions
<b>sg-sandbox-structure.sql</b>

{&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB109&quot;}}

<b>sg-prod-structure.sql</b>

{&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB&quot;}}

### bank_row_errors
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_14a78514ce&quot;:{&quot;reference&quot;:{}},&quot;fk_rails_54b26211be&quot;:{&quot;columns&quot;:[{&quot;column&quot;:&quot;replacement_row_id&quot;}],&quot;reference&quot;:{&quot;table&quot;:&quot;bank_rows&quot;,&quot;columns&quot;:[{&quot;column&quot;:&quot;id&quot;}]},&quot;name&quot;:&quot;fk_rails_54b26211be&quot;}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_14a78514ce&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}},&quot;fk_rails_61db3a3940&quot;:{&quot;columns&quot;:[{&quot;column&quot;:&quot;replacement_row_id&quot;}],&quot;reference&quot;:{&quot;table&quot;:&quot;bank_rows&quot;,&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}],&quot;columns&quot;:[{&quot;column&quot;:&quot;id&quot;}]},&quot;name&quot;:&quot;fk_rails_61db3a3940&quot;}}}

### bank_rows
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_2397a86601&quot;:{&quot;reference&quot;:{}},&quot;fk_rails_9d72810c92&quot;:{&quot;columns&quot;:[{&quot;column&quot;:&quot;bank_statement_id&quot;}],&quot;reference&quot;:{&quot;table&quot;:&quot;bank_statements&quot;,&quot;columns&quot;:[{&quot;column&quot;:&quot;id&quot;}]},&quot;name&quot;:&quot;fk_rails_9d72810c92&quot;}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_2397a86601&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}},&quot;fk_rails_36ff7dfa43&quot;:{&quot;columns&quot;:[{&quot;column&quot;:&quot;bank_statement_id&quot;}],&quot;reference&quot;:{&quot;table&quot;:&quot;bank_statements&quot;,&quot;columns&quot;:[{&quot;column&quot;:&quot;id&quot;}]},&quot;name&quot;:&quot;fk_rails_36ff7dfa43&quot;}}}

### batch_withdrawal_request_log_relations
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_7428f45284&quot;:{&quot;reference&quot;:{}},&quot;fk_rails_9a79baee5c&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_7428f45284&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}},&quot;fk_rails_9a79baee5c&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### beneficial_owners
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_bf01f3c2bf&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_bf01f3c2bf&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### binance_mock_ledgers
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_bc83ea51df&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_bc83ea51df&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### bitcoin_users
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_6813a8f5b9&quot;:{&quot;reference&quot;:{}}},&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB5&quot;}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_6813a8f5b9&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}},&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB&quot;}}

### blockchain_events
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_1c3f9e3a7b&quot;:{&quot;reference&quot;:{}},&quot;fk_rails_1f517a39a6&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_1c3f9e3a7b&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}},&quot;fk_rails_1f517a39a6&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### blockchain_synchronizations
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_146b2d133c&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_146b2d133c&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### cards
<b>sg-sandbox-structure.sql</b>

{&quot;columns&quot;:{&quot;last4&quot;:{&quot;type&quot;:{&quot;datatype&quot;:&quot;varchar&quot;}}}}

<b>sg-prod-structure.sql</b>

{&quot;columns&quot;:{&quot;last4&quot;:{&quot;type&quot;:{&quot;datatype&quot;:&quot;char&quot;}}}}

### charges
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_53fece2652&quot;:{&quot;reference&quot;:{}},&quot;fk_rails_962058d655&quot;:{&quot;reference&quot;:{}},&quot;fk_rails_aabc49110f&quot;:{&quot;reference&quot;:{}}},&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB6012&quot;}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_53fece2652&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}},&quot;fk_rails_962058d655&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}},&quot;fk_rails_aabc49110f&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}},&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB&quot;}}

### cimb_api_withdrawal_logs
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_bb9a73be2f&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_bb9a73be2f&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### client_cold_storages
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_2047dab726&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_2047dab726&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### contracts
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_4b0e4df295&quot;:{&quot;reference&quot;:{}},&quot;fk_rails_5e13421bdb&quot;:{&quot;reference&quot;:{}},&quot;fk_rails_eac3c65c08&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_4b0e4df295&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}},&quot;fk_rails_5e13421bdb&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}},&quot;fk_rails_eac3c65c08&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### corebanking_payment_methods
<b>sg-sandbox-structure.sql</b>

{&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB53&quot;}}

<b>sg-prod-structure.sql</b>

{&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB&quot;}}

### corebanking_payment_requests
<b>sg-sandbox-structure.sql</b>

{&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB20&quot;}}

<b>sg-prod-structure.sql</b>

{&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB&quot;}}

### corebanking_statements
<b>sg-sandbox-structure.sql</b>

{&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB0&quot;}}

<b>sg-prod-structure.sql</b>

{&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB&quot;}}

### corporates
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_9aa09b8bd0&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_9aa09b8bd0&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### credit_card_charges
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_9d85b10d95&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_9d85b10d95&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### credit_card_errors
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_15b26ae206&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_15b26ae206&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### crypto_transaction_reports
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_6c2f6538cc&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_6c2f6538cc&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### customer_profile_metadata
<b>sg-sandbox-structure.sql</b>

{&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB5433&quot;}}

<b>sg-prod-structure.sql</b>

{&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB&quot;}}

### dashboard_banners
<b>sg-sandbox-structure.sql</b>

{&quot;columns&quot;:{&quot;title&quot;:{&quot;options&quot;:{}},&quot;tag&quot;:{&quot;options&quot;:{}},&quot;content&quot;:{&quot;options&quot;:{}},&quot;site&quot;:{&quot;options&quot;:{}}},&quot;options&quot;:{&quot;collation&quot;:&quot;utf8mb4_0900_ai_ci&quot;}}

<b>sg-prod-structure.sql</b>

{&quot;columns&quot;:{&quot;title&quot;:{&quot;options&quot;:{&quot;collation&quot;:&quot;utf8mb4_general_ci&quot;}},&quot;tag&quot;:{&quot;options&quot;:{&quot;collation&quot;:&quot;utf8mb4_general_ci&quot;}},&quot;content&quot;:{&quot;options&quot;:{&quot;collation&quot;:&quot;utf8mb4_general_ci&quot;}},&quot;site&quot;:{&quot;options&quot;:{&quot;collation&quot;:&quot;utf8mb4_general_ci&quot;}}},&quot;options&quot;:{&quot;collation&quot;:&quot;utf8mb4_general_ci&quot;}}

### digital_wallet_topups
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_703533c59e&quot;:{&quot;reference&quot;:{}},&quot;fk_rails_9095c96ee0&quot;:{&quot;reference&quot;:{}}},&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB6&quot;}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_703533c59e&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}},&quot;fk_rails_9095c96ee0&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}},&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB&quot;}}

### elliptic_analyses
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_5c64530c48&quot;:{&quot;reference&quot;:{}},&quot;fk_rails_f3401521c0&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_5c64530c48&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}},&quot;fk_rails_f3401521c0&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### external_actions
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_1bfe0a5357&quot;:{&quot;columns&quot;:[{&quot;column&quot;:&quot;payment_instruction_id&quot;}],&quot;reference&quot;:{&quot;table&quot;:&quot;payment_instructions&quot;,&quot;columns&quot;:[{&quot;column&quot;:&quot;id&quot;}]},&quot;name&quot;:&quot;fk_rails_1bfe0a5357&quot;}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_1415d3409b&quot;:{&quot;columns&quot;:[{&quot;column&quot;:&quot;payment_instruction_id&quot;}],&quot;reference&quot;:{&quot;table&quot;:&quot;payment_instructions&quot;,&quot;columns&quot;:[{&quot;column&quot;:&quot;id&quot;}]},&quot;name&quot;:&quot;fk_rails_1415d3409b&quot;}}}

### fas_pay_customer_tokens
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_8ba62b2708&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_8ba62b2708&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### feature_permission_groups_xfer_api_tokens
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_700b2039f6&quot;:{&quot;reference&quot;:{}},&quot;fk_rails_b6eb6c3457&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_700b2039f6&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}},&quot;fk_rails_b6eb6c3457&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### full_audit_failures
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_f6cb80ce88&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_f6cb80ce88&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### fx_rates
<b>sg-sandbox-structure.sql</b>

{&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB43&quot;}}

<b>sg-prod-structure.sql</b>

{&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB&quot;}}

### gate_keepers
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_0ceb6f4f8a&quot;:{&quot;reference&quot;:{}}},&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB1&quot;}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_0ceb6f4f8a&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}},&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB&quot;}}

### google_authenticators
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_0be7b18853&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_0be7b18853&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### identifier_assignments
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_13810fcec9&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_13810fcec9&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### intent_notifications
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_cd8e8f047a&quot;:{&quot;reference&quot;:{}}},&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB381&quot;}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_cd8e8f047a&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}},&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB&quot;}}

### intents
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_13ede21c9e&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_13ede21c9e&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### last_seens
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_747b7d3453&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_747b7d3453&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### ledgers
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_d507e9f687&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_d507e9f687&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### loan_repayment_response_logs
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_cef5771c09&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_cef5771c09&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### loan_repayments
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_b1961071d5&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_b1961071d5&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### loans
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_bf81595a18&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_bf81595a18&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### location_check_infos
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_0098c3f1a2&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_0098c3f1a2&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### merchant_fee_change_logs
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_d16267fd1e&quot;:{&quot;reference&quot;:{}},&quot;fk_rails_fe1ba2b671&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_d16267fd1e&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}},&quot;fk_rails_fe1ba2b671&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### merchant_notification_alert_emails
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_5bdd079977&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_5bdd079977&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### merchant_notification_alerts
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_1a1bf0c9d5&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_1a1bf0c9d5&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### merchant_settlement_reports
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_0863c418a8&quot;:{&quot;columns&quot;:[{&quot;column&quot;:&quot;xfers_send_contract_id&quot;}],&quot;reference&quot;:{&quot;table&quot;:&quot;contracts&quot;,&quot;columns&quot;:[{&quot;column&quot;:&quot;id&quot;}]},&quot;name&quot;:&quot;fk_rails_0863c418a8&quot;}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_b58d04ef00&quot;:{&quot;columns&quot;:[{&quot;column&quot;:&quot;xfers_send_contract_id&quot;}],&quot;reference&quot;:{&quot;table&quot;:&quot;contracts&quot;,&quot;columns&quot;:[{&quot;column&quot;:&quot;id&quot;}]},&quot;name&quot;:&quot;fk_rails_b58d04ef00&quot;}}}

### merchant_settlements
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_b4483b992a&quot;:{&quot;columns&quot;:[{&quot;column&quot;:&quot;xfers_send_contract_id&quot;}],&quot;reference&quot;:{&quot;table&quot;:&quot;contracts&quot;,&quot;columns&quot;:[{&quot;column&quot;:&quot;id&quot;}]},&quot;name&quot;:&quot;fk_rails_b4483b992a&quot;}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_5bbb68cc2c&quot;:{&quot;columns&quot;:[{&quot;column&quot;:&quot;xfers_send_contract_id&quot;}],&quot;reference&quot;:{&quot;table&quot;:&quot;contracts&quot;,&quot;columns&quot;:[{&quot;column&quot;:&quot;id&quot;}]},&quot;name&quot;:&quot;fk_rails_5bbb68cc2c&quot;}}}

### nicepay_batch_settlement_details
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_e4553a7528&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_e4553a7528&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### nicepay_batch_settlements
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_2fe107969a&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_2fe107969a&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### nine_pay_payment_method_data
<b>sg-sandbox-structure.sql</b>

{&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB8&quot;}}

<b>sg-prod-structure.sql</b>

{&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB&quot;}}

### notification_settings
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_0c95e91db7&quot;:{&quot;reference&quot;:{}},&quot;fk_rails_193c26c4bf&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_0c95e91db7&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}},&quot;fk_rails_193c26c4bf&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### ocbc_xveria_bank_transaction_logs
<b>sg-sandbox-structure.sql</b>

{&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB31&quot;}}

<b>sg-prod-structure.sql</b>

{&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB&quot;}}

### ocr_results
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_f2bf2afa58&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_f2bf2afa58&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### pay_mongo_payment_method_data
<b>sg-sandbox-structure.sql</b>

{&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB9&quot;}}

<b>sg-prod-structure.sql</b>

{&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB&quot;}}

### pay_now_qr_codes
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_1bf161e7e2&quot;:{&quot;columns&quot;:[{&quot;column&quot;:&quot;customer_profile_id&quot;}],&quot;reference&quot;:{&quot;table&quot;:&quot;customer_profiles&quot;,&quot;columns&quot;:[{&quot;column&quot;:&quot;id&quot;}]},&quot;name&quot;:&quot;fk_rails_1bf161e7e2&quot;}}}

### payment_instructions
<b>sg-sandbox-structure.sql</b>

{&quot;columns&quot;:{&quot;currency&quot;:{&quot;type&quot;:{&quot;datatype&quot;:&quot;varchar&quot;}}},&quot;foreignKeys&quot;:{&quot;fk_rails_5f9ccaa4bd&quot;:{&quot;columns&quot;:[{&quot;column&quot;:&quot;accounts_service_provider_id&quot;}],&quot;reference&quot;:{&quot;table&quot;:&quot;accounts_service_providers&quot;,&quot;columns&quot;:[{&quot;column&quot;:&quot;id&quot;}]},&quot;name&quot;:&quot;fk_rails_5f9ccaa4bd&quot;},&quot;fk_rails_c4dbad8871&quot;:{&quot;columns&quot;:[{&quot;column&quot;:&quot;contract_id&quot;}],&quot;reference&quot;:{&quot;table&quot;:&quot;contracts&quot;,&quot;columns&quot;:[{&quot;column&quot;:&quot;id&quot;}]},&quot;name&quot;:&quot;fk_rails_c4dbad8871&quot;}}}

<b>sg-prod-structure.sql</b>

{&quot;columns&quot;:{&quot;currency&quot;:{&quot;type&quot;:{&quot;datatype&quot;:&quot;char&quot;}}},&quot;foreignKeys&quot;:{&quot;fk_rails_2ed3e5c4e7&quot;:{&quot;columns&quot;:[{&quot;column&quot;:&quot;contract_id&quot;}],&quot;reference&quot;:{&quot;table&quot;:&quot;contracts&quot;,&quot;columns&quot;:[{&quot;column&quot;:&quot;id&quot;}]},&quot;name&quot;:&quot;fk_rails_2ed3e5c4e7&quot;},&quot;fk_rails_6438f8c5b3&quot;:{&quot;columns&quot;:[{&quot;column&quot;:&quot;accounts_service_provider_id&quot;}],&quot;reference&quot;:{&quot;table&quot;:&quot;accounts_service_providers&quot;,&quot;columns&quot;:[{&quot;column&quot;:&quot;id&quot;}]},&quot;name&quot;:&quot;fk_rails_6438f8c5b3&quot;}}}

### payment_instructions_cards
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_aee418261f&quot;:{&quot;columns&quot;:[{&quot;column&quot;:&quot;payment_instruction_id&quot;}],&quot;reference&quot;:{&quot;table&quot;:&quot;payment_instructions&quot;,&quot;columns&quot;:[{&quot;column&quot;:&quot;id&quot;}]},&quot;name&quot;:&quot;fk_rails_aee418261f&quot;},&quot;fk_rails_f144b0855c&quot;:{&quot;columns&quot;:[{&quot;column&quot;:&quot;card_id&quot;}],&quot;reference&quot;:{&quot;table&quot;:&quot;cards&quot;,&quot;columns&quot;:[{&quot;column&quot;:&quot;id&quot;}]},&quot;name&quot;:&quot;fk_rails_f144b0855c&quot;}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_784a54bc87&quot;:{&quot;columns&quot;:[{&quot;column&quot;:&quot;card_id&quot;}],&quot;reference&quot;:{&quot;table&quot;:&quot;cards&quot;,&quot;columns&quot;:[{&quot;column&quot;:&quot;id&quot;}]},&quot;name&quot;:&quot;fk_rails_784a54bc87&quot;},&quot;fk_rails_fe1246c0a6&quot;:{&quot;columns&quot;:[{&quot;column&quot;:&quot;payment_instruction_id&quot;}],&quot;reference&quot;:{&quot;table&quot;:&quot;payment_instructions&quot;,&quot;columns&quot;:[{&quot;column&quot;:&quot;id&quot;}]},&quot;name&quot;:&quot;fk_rails_fe1246c0a6&quot;}}}

### payment_link_items
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_1251f111d3&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_1251f111d3&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### payment_link_transactions
<b>sg-sandbox-structure.sql</b>

{&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB617&quot;}}

<b>sg-prod-structure.sql</b>

{&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB&quot;}}

### payout_detail_reports
<b>sg-sandbox-structure.sql</b>

{}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:[{&quot;columns&quot;:[{&quot;column&quot;:&quot;payout_identifier&quot;,&quot;length&quot;:191}],&quot;reference&quot;:{&quot;table&quot;:&quot;payout_reports&quot;,&quot;columns&quot;:[{&quot;column&quot;:&quot;payout_identifier&quot;}]},&quot;name&quot;:&quot;fk_rails_786d02422e&quot;}]}

### privy_esignatures
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_0a44c7a0f1&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_0a44c7a0f1&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### reseller_transaction_fees
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_1e1198019b&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_1e1198019b&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### schema_migrations
<b>sg-sandbox-structure.sql</b>

{&quot;columns&quot;:{&quot;version&quot;:{&quot;type&quot;:{&quot;length&quot;:191},&quot;options&quot;:{&quot;charset&quot;:&quot;utf8&quot;,&quot;collation&quot;:&quot;utf8_general_ci&quot;}}},&quot;primaryKey&quot;:{&quot;columns&quot;:[{&quot;column&quot;:&quot;version&quot;}]}}

<b>sg-prod-structure.sql</b>

{&quot;columns&quot;:{&quot;version&quot;:{&quot;type&quot;:{&quot;length&quot;:255},&quot;options&quot;:{&quot;collation&quot;:&quot;utf8mb4_general_ci&quot;}}}}

### sessions
<b>sg-sandbox-structure.sql</b>

{&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB097386&quot;}}

<b>sg-prod-structure.sql</b>

{&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB&quot;}}

### sobatku_transfers
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_562b949cbf&quot;:{&quot;reference&quot;:{}},&quot;fk_rails_d8d2498acd&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_562b949cbf&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}},&quot;fk_rails_d8d2498acd&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### sobatku_virtual_accounts
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_f796e40761&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_f796e40761&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### stripe_customer_tokens
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_182f07e821&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_182f07e821&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### tier_logs
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_0e89848b4b&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_0e89848b4b&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### transaction_integrity_stages
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_22f0b4cc7f&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_22f0b4cc7f&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### user_audit_records
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_5fc533065a&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_5fc533065a&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### user_bank_account_notifications
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_1db1ce12f2&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_1db1ce12f2&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### user_bank_account_requests
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_421cd3b94b&quot;:{&quot;reference&quot;:{}}},&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB413&quot;}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_421cd3b94b&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}},&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB&quot;}}

### user_bank_accounts
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_18fcb16a64&quot;:{&quot;reference&quot;:{}}},&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB253&quot;}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_18fcb16a64&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}},&quot;options&quot;:{&quot;engine&quot;:&quot;InnoDB&quot;}}

### user_bank_infos
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_976a80e3b5&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_976a80e3b5&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### user_escalations
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_31589c00ec&quot;:{&quot;reference&quot;:{}},&quot;fk_rails_e63cd70966&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_31589c00ec&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}},&quot;fk_rails_e63cd70966&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### user_privy_infos
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_2b665dd02d&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_2b665dd02d&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### user_report_pending_users
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_abaeb0179f&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_abaeb0179f&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### user_terminations
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_8564137103&quot;:{&quot;reference&quot;:{}},&quot;fk_rails_c58a38d745&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_8564137103&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}},&quot;fk_rails_c58a38d745&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### user_verification_requests
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_ca3d400c1b&quot;:{&quot;reference&quot;:{}},&quot;fk_rails_dca9132d59&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_ca3d400c1b&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}},&quot;fk_rails_dca9132d59&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### user_virtual_accounts
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_3de79575b3&quot;:{&quot;reference&quot;:{}},&quot;fk_rails_3f49edef9d&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_3de79575b3&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}},&quot;fk_rails_3f49edef9d&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### verification_module_configs
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_18f9eee007&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_18f9eee007&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### wc1_case_matches
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_be76c92e85&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_be76c92e85&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### wc1_case_resolutions
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_193cf9ef09&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_193cf9ef09&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### webhook_attempts
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_782a894817&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_782a894817&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### webhook_subscriptions
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_b8c95dbd2b&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_b8c95dbd2b&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### webhooks
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_fbdeb55c8d&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_fbdeb55c8d&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### withdrawal_requests
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_03050114a5&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_03050114a5&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### xfers_api_tokens
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_35cf0b2c21&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_35cf0b2c21&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}

### xfers_transactions
<b>sg-sandbox-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_d56312f0a2&quot;:{&quot;reference&quot;:{}}}}

<b>sg-prod-structure.sql</b>

{&quot;foreignKeys&quot;:{&quot;fk_rails_83e3486bdd&quot;:{&quot;columns&quot;:[{&quot;column&quot;:&quot;instruction_id&quot;}],&quot;reference&quot;:{&quot;table&quot;:&quot;corebanking_instructions&quot;,&quot;columns&quot;:[{&quot;column&quot;:&quot;id&quot;}]},&quot;name&quot;:&quot;fk_rails_83e3486bdd&quot;},&quot;fk_rails_d56312f0a2&quot;:{&quot;reference&quot;:{&quot;on&quot;:[{&quot;trigger&quot;:&quot;delete&quot;,&quot;action&quot;:&quot;restrict&quot;},{&quot;trigger&quot;:&quot;update&quot;,&quot;action&quot;:&quot;restrict&quot;}]}}}}


