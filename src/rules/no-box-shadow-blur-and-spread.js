/*
 * Rule: Disallow the usage of box-shadow blur and spread due to performance reasons
 */
/*global CSSLint*/
CSSLint.addRule({

    //rule information
    id: "no-box-shadow-blur-and-spread",
    name: "Disallow the usage of box-shadow blur and spread.",
    desc: "Disallow the usage of box-shadow blur and spread due to performance reasons (esp. mobile)",
    browsers: "All",

    //initialization
    init: function(parser, reporter){
        var rule = this;

        parser.addListener("property", function(event){
            var parts = event.value.parts,
                i = 0,
                len = parts.length;

            if("|box-shadow|-webkit-box-shadow|-moz-box-shadow|-ms-box-shadow|-o-box-shadow|".indexOf("|" + event.property + "|") > -1){
                if(len > 2){
                    if(parts[2].units){
                        reporter.report("Please do not use box-shadow blur and spread as this reduces performance (esp. mobile)", parts[2].line, parts[2].col, rule);
                    }
                }
            }


        });

    }

});
