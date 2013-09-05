/**
 *
 * Rule: Disallow the usage of filter
 *
 * See: http://msdn.microsoft.com/en-us/library/ie/hh801215(v=vs.85).aspx
 */
/*global CSSLint*/
CSSLint.addRule({

    //rule information
    id: "ms-filter",
    name: "Disallow the usage of MSIE filter",
    desc: "Disallow the usage of MSIE filter",
    browsers: "All",

    //initialization
    init: function(parser, reporter){
        var rule = this;

        parser.addListener("property", function(event){

            var parts = event.value.parts;

            // Not future proof for the "real" filters, but not necessary for now (limited support anyway)
            if(event.property.text  === "filter" || event.property.text === "-ms-filter"){
                reporter.report("Do not use filter.", parts[0].line, parts[0].col, rule);
            }
        });

    }

});