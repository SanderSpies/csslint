/*global CSSLint*/
/*
 * Rule: Allow a maximum of 3 class selectors
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
                classCount,
                i,
                j,
                k;

            for (i=0; i < selectors.length; i++){
                selector = selectors[i];
                for (j=0; j < selector.parts.length; j++){
                    part = selector.parts[j];

                    if (part.type == parser.SELECTOR_PART_TYPE){
                        classCount = 0;

                        for (k=0; k < part.modifiers.length; k++){
                            modifier = part.modifiers[k];
                            if (modifier.type == "class"){
                                classCount++;
                                break;
                            }
                        }

                        classCount++;
                        if(classCount > 3){
                            reporter.report("Exceeding 3 classes:" + classCount, part.line, part.col, rule);
                        }
                    }
                }
            }
        });
    }

});
