(function(e){var p=/\/(?![/*])|\/\/.*[\r\n]|\/\*[^*]*(?:\*(?!\/)[^*]*)*\*\//.source,d=/@(?!")|"(?:[^\r\n\\"]|\\.)*"|@"(?:[^\\"]|""|\\[\s\S])*"(?!")/.source+"|"+/'(?:(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'|(?=[^\\](?!')))/.source;function a(o,v){for(var i=0;i<v;i++)o=o.replace(/<self>/g,function(){return"(?:"+o+")"});return o.replace(/<self>/g,"[^\\s\\S]").replace(/<str>/g,"(?:"+d+")").replace(/<comment>/g,"(?:"+p+")")}var r=a(/\((?:[^()'"@/]|<str>|<comment>|<self>)*\)/.source,2),m=a(/\[(?:[^\[\]'"@/]|<str>|<comment>|<self>)*\]/.source,1),s=a(/\{(?:[^{}'"@/]|<str>|<comment>|<self>)*\}/.source,2),h=a(/<(?:[^<>'"@/]|<comment>|<self>)*>/.source,1),n=/@/.source+/(?:await\b\s*)?/.source+"(?:"+/(?!await\b)\w+\b/.source+"|"+r+")(?:"+/[?!]?\.\w+\b/.source+"|(?:"+h+")?"+r+"|"+m+")*"+/(?![?!\.(\[]|<(?!\/))/.source,f=/@(?![\w()])/.source+"|"+n,l="(?:"+/"[^"@]*"|'[^'@]*'|[^\s'"@>=]+(?=[\s>])/.source+`|["'][^"'@]*(?:(?:`+f+`)[^"'@]*)+["'])`,t=/(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*<tagAttrValue>|(?=[\s/>])))+)?/.source.replace(/<tagAttrValue>/,l),c=/(?!\d)[^\s>\/=$<%]+/.source+t+/\s*\/?>/.source,w=/\B@?/.source+"(?:"+/<([a-zA-Z][\w:]*)/.source+t+/\s*>/.source+"(?:"+(/[^<]/.source+"|"+/<\/?(?!\1\b)/.source+c+"|"+a(/<\1/.source+t+/\s*>/.source+"(?:"+(/[^<]/.source+"|"+/<\/?(?!\1\b)/.source+c+"|<self>")+")*"+/<\/\1\s*>/.source,2))+")*"+/<\/\1\s*>/.source+"|"+/</.source+c+")";e.languages.cshtml=e.languages.extend("markup",{});var b=e.languages.insertBefore("csharp","string",{html:{pattern:RegExp(w),greedy:!0,inside:e.languages.cshtml}},{csharp:e.languages.extend("csharp",{})}),u={pattern:/\S[\s\S]*/,alias:"language-csharp",inside:b},g={pattern:RegExp(/(^|[^@])/.source+n),lookbehind:!0,greedy:!0,alias:"variable",inside:{keyword:/^@/,csharp:u}};e.languages.cshtml.tag.pattern=RegExp(/<\/?/.source+c),e.languages.cshtml.tag.inside["attr-value"].pattern=RegExp(/=\s*/.source+l),e.languages.insertBefore("inside","punctuation",{value:g},e.languages.cshtml.tag.inside["attr-value"]),e.languages.insertBefore("cshtml","prolog",{"razor-comment":{pattern:/@\*[\s\S]*?\*@/,greedy:!0,alias:"comment"},block:{pattern:RegExp(/(^|[^@])@/.source+"(?:"+[s,/(?:code|functions)\s*/.source+s,/(?:for|foreach|lock|switch|using|while)\s*/.source+r+/\s*/.source+s,/do\s*/.source+s+/\s*while\s*/.source+r+/(?:\s*;)?/.source,/try\s*/.source+s+/\s*catch\s*/.source+r+/\s*/.source+s+/\s*finally\s*/.source+s,/if\s*/.source+r+/\s*/.source+s+"(?:"+/\s*else/.source+"(?:"+/\s+if\s*/.source+r+")?"+/\s*/.source+s+")*",/helper\s+\w+\s*/.source+r+/\s*/.source+s].join("|")+")"),lookbehind:!0,greedy:!0,inside:{keyword:/^@\w*/,csharp:u}},directive:{pattern:/^([ \t]*)@(?:addTagHelper|attribute|implements|inherits|inject|layout|model|namespace|page|preservewhitespace|removeTagHelper|section|tagHelperPrefix|using)(?=\s).*/m,lookbehind:!0,greedy:!0,inside:{keyword:/^@\w+/,csharp:u}},value:g,"delegate-operator":{pattern:/(^|[^@])@(?=<)/,lookbehind:!0,alias:"operator"}}),e.languages.razor=e.languages.cshtml})(Prism);
