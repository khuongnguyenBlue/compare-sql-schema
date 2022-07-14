# Comparison report

{{#extra.exist}}
## Extra structs


### {{label.first}}
{{/extra.exist}}

{{#extra.first}}
* `{{.}}`
{{/extra.first}}

{{#extra.exist}}
### {{label.sec}}
{{/extra.exist}}

{{#extra.sec}}
* `{{.}}`
{{/extra.sec}}

{{#diffExist}}
## Diff structs
{{/diffExist}}

{{#diff}}
### {{key}}
<b>{{label.first}}</b>

{{first}}

<b>{{label.sec}}</b>

{{sec}}

{{/diff}}

{{#perfect}}
<b>All Good! :100: </b>
{{/perfect}}