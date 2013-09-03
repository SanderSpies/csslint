/*global CSSLint*/
/*
 * Rule: Disallow selecting on elements
 */
CSSLint.addRule({

    //rule information
    id: "element-selectors",
    name: "Disallow element selectors",
    desc: "Disallow element selectors",
    browsers: "All",

    //initialization
    init: function(parser, reporter){
        var rule = this;
        parser.addListener("startrule", function(event){
            var selectors = event.selectors,
                selector,
                part,
                i,
                j;

            for (i=0; i < selectors.length; i++){
                selector = selectors[i];
                for (j=0; j < selector.parts.length; j++){
                    part = selector.parts[j];
                    if(part.elementName){
                        reporter.report("Do not select on HTML elements", part.line, part.col, rule);
                    }
                }
            }
        });
    }

});
