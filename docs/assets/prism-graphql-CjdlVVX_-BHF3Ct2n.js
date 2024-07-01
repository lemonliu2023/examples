Prism.languages.graphql={comment:/#.*/,description:{pattern:/(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,greedy:!0,alias:"string",inside:{"language-markdown":{pattern:/(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,lookbehind:!0,inside:Prism.languages.markdown}}},string:{pattern:/"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,boolean:/\b(?:false|true)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:"function"},"attr-name":{pattern:/\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,greedy:!0},"atom-input":{pattern:/\b[A-Z]\w*Input\b/,alias:"class-name"},scalar:/\b(?:Boolean|Float|ID|Int|String)\b/,constant:/\b[A-Z][A-Z_\d]*\b/,"class-name":{pattern:/(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,lookbehind:!0},fragment:{pattern:/(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-mutation":{pattern:/(\bmutation\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-query":{pattern:/(\bquery\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},keyword:/\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,operator:/[!=|&]|\.{3}/,"property-query":/\w+(?=\s*\()/,object:/\w+(?=\s*\{)/,punctuation:/[!(){}\[\]:=,]/,property:/\w+/};Prism.hooks.add("after-tokenize",function(d){if(d.language!=="graphql")return;var i=d.tokens.filter(function(t){return typeof t!="string"&&t.type!=="comment"&&t.type!=="scalar"}),e=0;function o(t){return i[e+t]}function m(t,a){a=a||0;for(var n=0;n<t.length;n++){var r=o(n+a);if(!r||r.type!==t[n])return!1}return!0}function g(t,a){for(var n=1,r=e;r<i.length;r++){var w=i[r],b=w.content;if(w.type==="punctuation"&&typeof b=="string"){if(t.test(b))n++;else if(a.test(b)&&(n--,n===0))return r}}return-1}function u(t,a){var n=t.alias;n?Array.isArray(n)||(t.alias=n=[n]):t.alias=n=[],n.push(a)}for(;e<i.length;){var y=i[e++];if(y.type==="keyword"&&y.content==="mutation"){var s=[];if(m(["definition-mutation","punctuation"])&&o(1).content==="("){e+=2;var p=g(/^\($/,/^\)$/);if(p===-1)continue;for(;e<p;e++){var l=o(0);l.type==="variable"&&(u(l,"variable-input"),s.push(l.content))}e=p+1}if(m(["punctuation","property-query"])&&o(0).content==="{"&&(e++,u(o(0),"property-mutation"),s.length>0)){var v=g(/^\{$/,/^\}$/);if(v===-1)continue;for(var c=e;c<v;c++){var f=i[c];f.type==="variable"&&s.indexOf(f.content)>=0&&u(f,"variable-input")}}}}});
