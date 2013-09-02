/*
 * Rule: Prevent usage of em variables
 */
/*global CSSLint*/
CSSLint.addRule({

    //rule information
    id: "em-variables",
    name: "Disallow the usage of em variables",
    desc: "Probably you want to use rem instead",
    browsers: "All",

    //initialization
    init: function(parser, reporter){
        var rule = this;

        parser.addListener("property", function(event){
            var parts = event.value.parts,
                i = 0,
                len = parts.length;

            while(i < len){

                // reporter.report("Em is discouraged, use rem instead.", parts[i], parts[i].line, parts[i].col, rule);
                if (parts[i].units == "em"){
                    reporter.report("Em is discouraged, use rem instead.", parts[i].line, parts[i].col, rule);
                }
                i++;
            }

        });

    }

});
