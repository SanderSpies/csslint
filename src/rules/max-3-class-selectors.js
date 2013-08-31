
/*global CSSLint*/
/*
 * Rule: Allow a maximum of 3 class selectors and disallow elements (*, and id's can be done via other properties)
 */
CSSLint.addRule({

    //rule information
    id: "max-3-class-selectors",
    name: "Allow a maximum of 3 class selectors",
    desc: "Allow a maximum of 3 class selectors due to performance",
    browsers: "All",

    //initialization
    init: function(parser, reporter){
        var rule = this;
        parser.addListener("startrule", function(event){
            var selectors = event.selectors,
                selector,
                part,
                modifier,
                classCount,
                i,
                j,
                k,
                partCount = 0;
            for (i=0; i < selectors.length; i++){
                selector = selectors[i];
                for (j=0; j < selector.parts.length; j++){
                    part = selector.parts[j];
                    if(part.elementName){
                        reporter.report("Only use classes:" + modifier, part.line, part.col, rule);
                    }
                    if (part.type == parser.SELECTOR_PART_TYPE){
                        classCount = 0;

                        partCount++;
                        if(partCount > 3){
                            reporter.report("Exceeding 3 classes:" + partCount, part.line, part.col, rule);
                        }
                    }
                }
            }
        });
    }

});
