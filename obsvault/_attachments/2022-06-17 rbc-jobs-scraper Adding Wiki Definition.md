---
created: 2022-08-14T18:50:22-06:00
updated: 2022-08-14T18:50:22-06:00
---



```pq
/**

 * SkillsWikiDefinition

 *

 * Find a definition for a [[Skill]] from the Web.

 * Using Wikipedia but it could be anywhere.

 * Swap out me for something else in [[Skills]]

 *

 * #DevNote RE: Wiki-style Linking

 * - Example: `...for a [[Skill]] from the Web...`

 * -  Double square brackets are for Wiki-style linking within the www.Obsidian.md vault.

 * - All the Queries source code can be **SO EASILY COPIED** by clicking on the very first item at the top of the Queries left-side panel,

  

 *

 * @since 2022-06-17

 */

let

    Source = Skills,

    #"Added Custom" = Table.AddColumn(Source, "SummaryAPIURL", each "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=" & [SkillsList]),

    #"Added Custom1" = Table.AddColumn(#"Added Custom", "SummaryAPIResponse", each Web.Contents([SummaryAPIURL])),

    #"Filtered Hidden Files1" = Table.SelectRows(#"Added Custom1", each [Attributes]?[Hidden]? <> true),

    #"Invoke Custom Function1" = Table.AddColumn(#"Filtered Hidden Files1", "Transform File", each #"Transform File"([SummaryAPIResponse])),

    #"Renamed Columns" = Table.RenameColumns(#"Invoke Custom Function1",{{"Transform File", "Response"}}),

    #"Expanded Response" = Table.ExpandTableColumn(#"Renamed Columns", "Response", {"Name", "Value"}, {"Response.Name", "Response.Value"}),

    #"Filtered Rows" = Table.SelectRows(#"Expanded Response", each ([Response.Name] = "query")),

    #"Expanded Response.Value" = Table.ExpandRecordColumn(#"Filtered Rows", "Response.Value", {"normalized", "pages"}, {"Response.Value.normalized", "Response.Value.pages"}),

    #"Expanded Response.Value.pages" = Table.ExpandRecordColumn(#"Expanded Response.Value", "Response.Value.pages", {"1060901", "5177"}, {"Response.Value.pages.1060901", "Response.Value.pages.5177"}),

    #"Inserted Text Length" = Table.AddColumn(#"Expanded Response.Value.pages", "Length", each Text.Length(Text.From([SummaryAPIResponse], "en-CA")), Int64.Type),

    #"Reordered Columns" = Table.ReorderColumns(#"Inserted Text Length",{"Length", "SkillsList", "Count", "SummaryAPIURL", "SummaryAPIResponse", "Response.Name", "Response.Value.normalized", "Response.Value.pages.1060901", "Response.Value.pages.5177"}),

    #"Sorted Rows" = Table.Sort(#"Reordered Columns",{{"Length", Order.Descending}}),

    #"Parsed JSON" = Table.AddColumn(

        #"Sorted Rows",

        "ParsedJSON",

        each Json.Document([SummaryAPIResponse])[query] ?? null

    ),

    #"Expanded ParsedJSON" = Table.ExpandRecordColumn(#"Parsed JSON", "ParsedJSON", {"normalized", "pages"}, {"ParsedJSON.normalized", "ParsedJSON.pages"}),

    #"Expanded ParsedJSON.normalized" = Table.ExpandListColumn(#"Expanded ParsedJSON", "ParsedJSON.normalized"),

    #"Renamed Columns1" = Table.RenameColumns(#"Expanded ParsedJSON.normalized",{{"ParsedJSON.normalized", "apiStyledSkillName"}}),

    #"Grab Corrected Name" = Table.TransformColumns(

        #"Renamed Columns1",

        {

          {

            "apiStyledSkillName",

            // Get [apiStyledSkillName][to]

            each [to]

          }

        }

    ),

    #"Transform Record with Unique Key to Definition" = Table.TransformColumns(

      #"Grab Corrected Name",

      {

        {

          "ParsedJSON.pages",

          each

            /*

            #Tricky #EILI5

  

            - `ParsedJSON.pages` is a single record.,

            - Each Record has a single [Field](https://docs.microsoft.com/en-us/powerquery-m/record-functions)

            - Each Field appears to be a different number.

            - Likely unique number.

            - Pretend that number is `1086547` (value for `Test automation` #maybe)

            - use `_` to refer to self, the single record

            - then use `_[...]`, the array reference syntax #NotSureOfWording

            -

          */

            _[

            List.First(Record.FieldNames(_))]

          0

        }

      }

    )

  

    // #"Transform Record with Unique Key to Definition"

  

    //#"Expanded ParsedJSON.pages" = Table.ExpandRecordColumn(#"Grab Corrected Name", "ParsedJSON.pages", {"1086547"}, {"ParsedJSON.pages.1086547"}),

    // #"ParsedJSON pages 1086547" = #"Expanded ParsedJSON.pages"{0}[ParsedJSON.pages.1086547]

in

    #"Transform Record with Unique Key to Definition"
```