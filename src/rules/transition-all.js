/*
 * Rule: Prevents the usage of transition all
 */
/*global CSSLint*/
CSSLint.addRule({

    //rule information
    id: "transition-all",
    name: "Disallow the usage of transition all",
    desc: "Don't allow the usage of transition all - be more specific instead",
    browsers: "All",

    //initialization
    init: function(parser, reporter){
        var rule = this;

        parser.addListener("property", function(event){

            var parts = event.value.parts,
                i = 0,
                len = parts.length;
            if("|transition|-webkit-transition|-moz-transition|-ms-transition|-o-transition|".indexOf("|" + event.property + "|") > -1){


                while(i < len){
                    if(parts[i] === "all"){
                        reporter.report("Using all for the transition property is too ambiguous, please be more specific:" + parts[i].type + parts[i], parts[i].line, parts[i].col, rule);
                    }

                    i++;
                }

            }

        });

    }

});