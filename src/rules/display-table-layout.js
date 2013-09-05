/**
 *
 * Rule: Disallow the usage of table layout
 */
/*global CSSLint*/
CSSLint.addRule({

    //rule information
    id: "display-table-layout",
    name: "Disallow the usage of tables",
    desc: "Disallow the usage of tables",
    browsers: "All",

    //initialization
    init: function(parser, reporter){
        var rule = this;

        parser.addListener("property", function(event){

            var parts = event.value.parts;

            if(event.property.text  === "display" && event.value.text.indexOf("table") === 0){
                reporter.report("Do not use table layout", parts[0].line, parts[0].col, rule);
            }
        });

    }

});