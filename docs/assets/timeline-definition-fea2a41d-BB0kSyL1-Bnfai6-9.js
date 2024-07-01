import{aE as yt,z as gt,c as ft,l as S,h as V,t as mt,aF as xt,aG as bt,aH as kt}from"./mermaid.core-CrY0-6Yn-BGdF6UP6.js";import"./index-BnnC3cqK.js";import{v as G}from"./arc-DEemon36-DtLaNHCi.js";import"./step-CFLd_UlD-CAA9ZoWn.js";import"./path-H8vhG2aR-T6_P2E4R.js";var Q=function(){var n=function(f,i,o,h){for(o=o||{},h=f.length;h--;o[f[h]]=i);return o},t=[6,8,10,11,12,14,16,17,20,21],e=[1,9],a=[1,10],r=[1,11],l=[1,12],c=[1,13],p=[1,16],y=[1,17],u={trace:function(){},yy:{},symbols_:{error:2,start:3,timeline:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,title:11,acc_title:12,acc_title_value:13,acc_descr:14,acc_descr_value:15,acc_descr_multiline_value:16,section:17,period_statement:18,event_statement:19,period:20,event:21,$accept:0,$end:1},terminals_:{2:"error",4:"timeline",6:"EOF",8:"SPACE",10:"NEWLINE",11:"title",12:"acc_title",13:"acc_title_value",14:"acc_descr",15:"acc_descr_value",16:"acc_descr_multiline_value",17:"section",20:"period",21:"event"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,1],[18,1],[19,1]],performAction:function(f,i,o,h,d,s,g){var b=s.length-1;switch(d){case 1:return s[b-1];case 2:this.$=[];break;case 3:s[b-1].push(s[b]),this.$=s[b-1];break;case 4:case 5:this.$=s[b];break;case 6:case 7:this.$=[];break;case 8:h.getCommonDb().setDiagramTitle(s[b].substr(6)),this.$=s[b].substr(6);break;case 9:this.$=s[b].trim(),h.getCommonDb().setAccTitle(this.$);break;case 10:case 11:this.$=s[b].trim(),h.getCommonDb().setAccDescription(this.$);break;case 12:h.addSection(s[b].substr(8)),this.$=s[b].substr(8);break;case 15:h.addTask(s[b],0,""),this.$=s[b];break;case 16:h.addEvent(s[b].substr(2)),this.$=s[b];break}},table:[{3:1,4:[1,2]},{1:[3]},n(t,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:e,12:a,14:r,16:l,17:c,18:14,19:15,20:p,21:y},n(t,[2,7],{1:[2,1]}),n(t,[2,3]),{9:18,11:e,12:a,14:r,16:l,17:c,18:14,19:15,20:p,21:y},n(t,[2,5]),n(t,[2,6]),n(t,[2,8]),{13:[1,19]},{15:[1,20]},n(t,[2,11]),n(t,[2,12]),n(t,[2,13]),n(t,[2,14]),n(t,[2,15]),n(t,[2,16]),n(t,[2,4]),n(t,[2,9]),n(t,[2,10])],defaultActions:{},parseError:function(f,i){if(i.recoverable)this.trace(f);else{var o=new Error(f);throw o.hash=i,o}},parse:function(f){var i=this,o=[0],h=[],d=[null],s=[],g=this.table,b="",T=0,C=0,z=2,I=1,B=s.slice.call(arguments,1),x=Object.create(this.lexer),$={yy:{}};for(var N in this.yy)Object.prototype.hasOwnProperty.call(this.yy,N)&&($.yy[N]=this.yy[N]);x.setInput(f,$.yy),$.yy.lexer=x,$.yy.parser=this,typeof x.yylloc>"u"&&(x.yylloc={});var A=x.yylloc;s.push(A);var v=x.options&&x.options.ranges;typeof $.yy.parseError=="function"?this.parseError=$.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function H(){var O;return O=h.pop()||x.lex()||I,typeof O!="number"&&(O instanceof Array&&(h=O,O=h.pop()),O=i.symbols_[O]||O),O}for(var k,E,w,D,j={},W,L,Y,R;;){if(E=o[o.length-1],this.defaultActions[E]?w=this.defaultActions[E]:((k===null||typeof k>"u")&&(k=H()),w=g[E]&&g[E][k]),typeof w>"u"||!w.length||!w[0]){var q="";R=[];for(W in g[E])this.terminals_[W]&&W>z&&R.push("'"+this.terminals_[W]+"'");x.showPosition?q="Parse error on line "+(T+1)+`:
`+x.showPosition()+`
Expecting `+R.join(", ")+", got '"+(this.terminals_[k]||k)+"'":q="Parse error on line "+(T+1)+": Unexpected "+(k==I?"end of input":"'"+(this.terminals_[k]||k)+"'"),this.parseError(q,{text:x.match,token:this.terminals_[k]||k,line:x.yylineno,loc:A,expected:R})}if(w[0]instanceof Array&&w.length>1)throw new Error("Parse Error: multiple actions possible at state: "+E+", token: "+k);switch(w[0]){case 1:o.push(k),d.push(x.yytext),s.push(x.yylloc),o.push(w[1]),k=null,C=x.yyleng,b=x.yytext,T=x.yylineno,A=x.yylloc;break;case 2:if(L=this.productions_[w[1]][1],j.$=d[d.length-L],j._$={first_line:s[s.length-(L||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(L||1)].first_column,last_column:s[s.length-1].last_column},v&&(j._$.range=[s[s.length-(L||1)].range[0],s[s.length-1].range[1]]),D=this.performAction.apply(j,[b,C,T,$.yy,w[1],d,s].concat(B)),typeof D<"u")return D;L&&(o=o.slice(0,-1*L*2),d=d.slice(0,-1*L),s=s.slice(0,-1*L)),o.push(this.productions_[w[1]][0]),d.push(j.$),s.push(j._$),Y=g[o[o.length-2]][o[o.length-1]],o.push(Y);break;case 3:return!0}}return!0}},m=function(){var f={EOF:1,parseError:function(i,o){if(this.yy.parser)this.yy.parser.parseError(i,o);else throw new Error(i)},setInput:function(i,o){return this.yy=o||this.yy||{},this._input=i,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var i=this._input[0];this.yytext+=i,this.yyleng++,this.offset++,this.match+=i,this.matched+=i;var o=i.match(/(?:\r\n?|\n).*/g);return o?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),i},unput:function(i){var o=i.length,h=i.split(/(?:\r\n?|\n)/g);this._input=i+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-o),this.offset-=o;var d=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),h.length-1&&(this.yylineno-=h.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:h?(h.length===d.length?this.yylloc.first_column:0)+d[d.length-h.length].length-h[0].length:this.yylloc.first_column-o},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-o]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(i){this.unput(this.match.slice(i))},pastInput:function(){var i=this.matched.substr(0,this.matched.length-this.match.length);return(i.length>20?"...":"")+i.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var i=this.match;return i.length<20&&(i+=this._input.substr(0,20-i.length)),(i.substr(0,20)+(i.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var i=this.pastInput(),o=new Array(i.length+1).join("-");return i+this.upcomingInput()+`
`+o+"^"},test_match:function(i,o){var h,d,s;if(this.options.backtrack_lexer&&(s={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(s.yylloc.range=this.yylloc.range.slice(0))),d=i[0].match(/(?:\r\n?|\n).*/g),d&&(this.yylineno+=d.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:d?d[d.length-1].length-d[d.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+i[0].length},this.yytext+=i[0],this.match+=i[0],this.matches=i,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(i[0].length),this.matched+=i[0],h=this.performAction.call(this,this.yy,this,o,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),h)return h;if(this._backtrack){for(var g in s)this[g]=s[g];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var i,o,h,d;this._more||(this.yytext="",this.match="");for(var s=this._currentRules(),g=0;g<s.length;g++)if(h=this._input.match(this.rules[s[g]]),h&&(!o||h[0].length>o[0].length)){if(o=h,d=g,this.options.backtrack_lexer){if(i=this.test_match(h,s[g]),i!==!1)return i;if(this._backtrack){o=!1;continue}else return!1}else if(!this.options.flex)break}return o?(i=this.test_match(o,s[d]),i!==!1?i:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var i=this.next();return i||this.lex()},begin:function(i){this.conditionStack.push(i)},popState:function(){var i=this.conditionStack.length-1;return i>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(i){return i=this.conditionStack.length-1-Math.abs(i||0),i>=0?this.conditionStack[i]:"INITIAL"},pushState:function(i){this.begin(i)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(i,o,h,d){switch(h){case 0:break;case 1:break;case 2:return 10;case 3:break;case 4:break;case 5:return 4;case 6:return 11;case 7:return this.begin("acc_title"),12;case 8:return this.popState(),"acc_title_value";case 9:return this.begin("acc_descr"),14;case 10:return this.popState(),"acc_descr_value";case 11:this.begin("acc_descr_multiline");break;case 12:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:return 17;case 15:return 21;case 16:return 20;case 17:return 6;case 18:return"INVALID"}},rules:[/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:timeline\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?::\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,9,11,14,15,16,17,18],inclusive:!0}}};return f}();u.lexer=m;function _(){this.yy={}}return _.prototype=u,u.Parser=_,new _}();Q.parser=Q;const _t=Q;let P="",nt=0;const X=[],U=[],F=[],it=()=>yt,rt=function(){X.length=0,U.length=0,P="",F.length=0,gt()},st=function(n){P=n,X.push(n)},at=function(){return X},ot=function(){let n=J();const t=100;let e=0;for(;!n&&e<t;)n=J(),e++;return U.push(...F),U},ct=function(n,t,e){const a={id:nt++,section:P,type:P,task:n,score:t||0,events:e?[e]:[]};F.push(a)},lt=function(n){F.find(t=>t.id===nt-1).events.push(n)},ht=function(n){const t={section:P,type:P,description:n,task:n,classes:[]};U.push(t)},J=function(){const n=function(e){return F[e].processed};let t=!0;for(const[e,a]of F.entries())n(e),t=t&&a.processed;return t},wt={clear:rt,getCommonDb:it,addSection:st,getSections:at,getTasks:ot,addTask:ct,addTaskOrg:ht,addEvent:lt},vt=Object.freeze(Object.defineProperty({__proto__:null,addEvent:lt,addSection:st,addTask:ct,addTaskOrg:ht,clear:rt,default:wt,getCommonDb:it,getSections:at,getTasks:ot},Symbol.toStringTag,{value:"Module"})),St=12,Z=function(n,t){const e=n.append("rect");return e.attr("x",t.x),e.attr("y",t.y),e.attr("fill",t.fill),e.attr("stroke",t.stroke),e.attr("width",t.width),e.attr("height",t.height),e.attr("rx",t.rx),e.attr("ry",t.ry),t.class!==void 0&&e.attr("class",t.class),e},$t=function(n,t){const e=n.append("circle").attr("cx",t.cx).attr("cy",t.cy).attr("class","face").attr("r",15).attr("stroke-width",2).attr("overflow","visible"),a=n.append("g");a.append("circle").attr("cx",t.cx-15/3).attr("cy",t.cy-15/3).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),a.append("circle").attr("cx",t.cx+15/3).attr("cy",t.cy-15/3).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666");function r(p){const y=G().startAngle(Math.PI/2).endAngle(3*(Math.PI/2)).innerRadius(7.5).outerRadius(6.8181818181818175);p.append("path").attr("class","mouth").attr("d",y).attr("transform","translate("+t.cx+","+(t.cy+2)+")")}function l(p){const y=G().startAngle(3*Math.PI/2).endAngle(5*(Math.PI/2)).innerRadius(7.5).outerRadius(6.8181818181818175);p.append("path").attr("class","mouth").attr("d",y).attr("transform","translate("+t.cx+","+(t.cy+7)+")")}function c(p){p.append("line").attr("class","mouth").attr("stroke",2).attr("x1",t.cx-5).attr("y1",t.cy+7).attr("x2",t.cx+5).attr("y2",t.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}return t.score>3?r(a):t.score<3?l(a):c(a),e},Et=function(n,t){const e=n.append("circle");return e.attr("cx",t.cx),e.attr("cy",t.cy),e.attr("class","actor-"+t.pos),e.attr("fill",t.fill),e.attr("stroke",t.stroke),e.attr("r",t.r),e.class!==void 0&&e.attr("class",e.class),t.title!==void 0&&e.append("title").text(t.title),e},dt=function(n,t){const e=t.text.replace(/<br\s*\/?>/gi," "),a=n.append("text");a.attr("x",t.x),a.attr("y",t.y),a.attr("class","legend"),a.style("text-anchor",t.anchor),t.class!==void 0&&a.attr("class",t.class);const r=a.append("tspan");return r.attr("x",t.x+t.textMargin*2),r.text(e),a},It=function(n,t){function e(r,l,c,p,y){return r+","+l+" "+(r+c)+","+l+" "+(r+c)+","+(l+p-y)+" "+(r+c-y*1.2)+","+(l+p)+" "+r+","+(l+p)}const a=n.append("polygon");a.attr("points",e(t.x,t.y,50,20,7)),a.attr("class","labelBox"),t.y=t.y+t.labelMargin,t.x=t.x+.5*t.labelMargin,dt(n,t)},At=function(n,t,e){const a=n.append("g"),r=K();r.x=t.x,r.y=t.y,r.fill=t.fill,r.width=e.width,r.height=e.height,r.class="journey-section section-type-"+t.num,r.rx=3,r.ry=3,Z(a,r),ut(e)(t.text,a,r.x,r.y,r.width,r.height,{class:"journey-section section-type-"+t.num},e,t.colour)};let tt=-1;const Ht=function(n,t,e){const a=t.x+e.width/2,r=n.append("g");tt++;const l=300+5*30;r.append("line").attr("id","task"+tt).attr("x1",a).attr("y1",t.y).attr("x2",a).attr("y2",l).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),$t(r,{cx:a,cy:300+(5-t.score)*30,score:t.score});const c=K();c.x=t.x,c.y=t.y,c.fill=t.fill,c.width=e.width,c.height=e.height,c.class="task task-type-"+t.num,c.rx=3,c.ry=3,Z(r,c),t.x+14,ut(e)(t.task,r,c.x,c.y,c.width,c.height,{class:"task"},e,t.colour)},Lt=function(n,t){Z(n,{x:t.startx,y:t.starty,width:t.stopx-t.startx,height:t.stopy-t.starty,fill:t.fill,class:"rect"}).lower()},Ot=function(){return{x:0,y:0,fill:void 0,"text-anchor":"start",width:100,height:100,textMargin:0,rx:0,ry:0}},K=function(){return{x:0,y:0,width:100,anchor:"start",height:100,rx:0,ry:0}},ut=function(){function n(r,l,c,p,y,u,m,_){const f=l.append("text").attr("x",c+y/2).attr("y",p+u/2+5).style("font-color",_).style("text-anchor","middle").text(r);a(f,m)}function t(r,l,c,p,y,u,m,_,f){const{taskFontSize:i,taskFontFamily:o}=_,h=r.split(/<br\s*\/?>/gi);for(let d=0;d<h.length;d++){const s=d*i-i*(h.length-1)/2,g=l.append("text").attr("x",c+y/2).attr("y",p).attr("fill",f).style("text-anchor","middle").style("font-size",i).style("font-family",o);g.append("tspan").attr("x",c+y/2).attr("dy",s).text(h[d]),g.attr("y",p+u/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),a(g,m)}}function e(r,l,c,p,y,u,m,_){const f=l.append("switch"),i=f.append("foreignObject").attr("x",c).attr("y",p).attr("width",y).attr("height",u).attr("position","fixed").append("xhtml:div").style("display","table").style("height","100%").style("width","100%");i.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(r),t(r,f,c,p,y,u,m,_),a(i,m)}function a(r,l){for(const c in l)c in l&&r.attr(c,l[c])}return function(r){return r.textPlacement==="fo"?e:r.textPlacement==="old"?n:t}}(),Tt=function(n){n.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")};function pt(n,t){n.each(function(){var e=V(this),a=e.text().split(/(\s+|<br>)/).reverse(),r,l=[],c=1.1,p=e.attr("y"),y=parseFloat(e.attr("dy")),u=e.text(null).append("tspan").attr("x",0).attr("y",p).attr("dy",y+"em");for(let m=0;m<a.length;m++)r=a[a.length-1-m],l.push(r),u.text(l.join(" ").trim()),(u.node().getComputedTextLength()>t||r==="<br>")&&(l.pop(),u.text(l.join(" ").trim()),r==="<br>"?l=[""]:l=[r],u=e.append("tspan").attr("x",0).attr("y",p).attr("dy",c+"em").text(r))})}const Ct=function(n,t,e,a){const r=e%St-1,l=n.append("g");t.section=r,l.attr("class",(t.class?t.class+" ":"")+"timeline-node "+("section-"+r));const c=l.append("g"),p=l.append("g"),y=p.append("text").text(t.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(pt,t.width).node().getBBox(),u=a.fontSize&&a.fontSize.replace?a.fontSize.replace("px",""):a.fontSize;return t.height=y.height+u*1.1*.5+t.padding,t.height=Math.max(t.height,t.maxHeight),t.width=t.width+2*t.padding,p.attr("transform","translate("+t.width/2+", "+t.padding/2+")"),Mt(c,t,r),t},Nt=function(n,t,e){const a=n.append("g"),r=a.append("text").text(t.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(pt,t.width).node().getBBox(),l=e.fontSize&&e.fontSize.replace?e.fontSize.replace("px",""):e.fontSize;return a.remove(),r.height+l*1.1*.5+t.padding},Mt=function(n,t,e){n.append("path").attr("id","node-"+t.id).attr("class","node-bkg node-"+t.type).attr("d",`M0 ${t.height-5} v${-t.height+2*5} q0,-5 5,-5 h${t.width-2*5} q5,0 5,5 v${t.height-5} H0 Z`),n.append("line").attr("class","node-line-"+e).attr("x1",0).attr("y1",t.height).attr("x2",t.width).attr("y2",t.height)},M={drawRect:Z,drawCircle:Et,drawSection:At,drawText:dt,drawLabel:It,drawTask:Ht,drawBackgroundRect:Lt,getTextObj:Ot,getNoteRect:K,initGraphics:Tt,drawNode:Ct,getVirtualNodeHeight:Nt},zt=function(n,t,e,a){var r,l,c,p,y;const u=ft(),m=(r=u.leftMargin)!=null?r:50;S.debug("timeline",a.db);const _=u.securityLevel;let f;_==="sandbox"&&(f=V("#i"+t));const i=(_==="sandbox"?V(f.nodes()[0].contentDocument.body):V("body")).select("#"+t);i.append("g");const o=a.db.getTasks(),h=a.db.getCommonDb().getDiagramTitle();S.debug("task",o),M.initGraphics(i);const d=a.db.getSections();S.debug("sections",d);let s=0,g=0,b=0,T=0,C=50+m,z=50;T=50;let I=0,B=!0;d.forEach(function(A){const v={number:I,descr:A,section:I,width:150,padding:20,maxHeight:s},H=M.getVirtualNodeHeight(i,v,u);S.debug("sectionHeight before draw",H),s=Math.max(s,H+20)});let x=0,$=0;S.debug("tasks.length",o.length);for(const[A,v]of o.entries()){const H={number:A,descr:v,section:v.section,width:150,padding:20,maxHeight:g},k=M.getVirtualNodeHeight(i,H,u);S.debug("taskHeight before draw",k),g=Math.max(g,k+20),x=Math.max(x,v.events.length);let E=0;for(let w=0;w<v.events.length;w++){const D={descr:v.events[w],section:v.section,number:v.section,width:150,padding:20,maxHeight:50};E+=M.getVirtualNodeHeight(i,D,u)}$=Math.max($,E)}S.debug("maxSectionHeight before draw",s),S.debug("maxTaskHeight before draw",g),d&&d.length>0?d.forEach(A=>{const v=o.filter(w=>w.section===A),H={number:I,descr:A,section:I,width:200*Math.max(v.length,1)-50,padding:20,maxHeight:s};S.debug("sectionNode",H);const k=i.append("g"),E=M.drawNode(k,H,I,u);S.debug("sectionNode output",E),k.attr("transform",`translate(${C}, ${T})`),z+=s+50,v.length>0&&et(i,v,I,C,z,g,u,x,$,s,!1),C+=200*Math.max(v.length,1),z=T,I++}):(B=!1,et(i,o,I,C,z,g,u,x,$,s,!0));const N=i.node().getBBox();S.debug("bounds",N),h&&i.append("text").text(h).attr("x",N.width/2-m).attr("font-size","4ex").attr("font-weight","bold").attr("y",20),b=B?s+g+150:g+100,i.append("g").attr("class","lineWrapper").append("line").attr("x1",m).attr("y1",b).attr("x2",N.width+3*m).attr("y2",b).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)"),mt(void 0,i,(l=(p=u.timeline)==null?void 0:p.padding)!=null?l:50,(c=(y=u.timeline)==null?void 0:y.useMaxWidth)!=null?c:!1)},et=function(n,t,e,a,r,l,c,p,y,u,m){var _;for(const f of t){const i={descr:f.task,section:e,number:e,width:150,padding:20,maxHeight:l};S.debug("taskNode",i);const o=n.append("g").attr("class","taskWrapper"),h=M.drawNode(o,i,e,c).height;if(S.debug("taskHeight after draw",h),o.attr("transform",`translate(${a}, ${r})`),l=Math.max(l,h),f.events){const d=n.append("g").attr("class","lineWrapper");let s=l;r+=100,s=s+jt(n,f.events,e,a,r,c),r-=100,d.append("line").attr("x1",a+190/2).attr("y1",r+l).attr("x2",a+190/2).attr("y2",r+l+(m?l:u)+y+120).attr("stroke-width",2).attr("stroke","black").attr("marker-end","url(#arrowhead)").attr("stroke-dasharray","5,5")}a=a+200,m&&!((_=c.timeline)!=null&&_.disableMulticolor)&&e++}r=r-10},jt=function(n,t,e,a,r,l){let c=0;const p=r;r=r+100;for(const y of t){const u={descr:y,section:e,number:e,width:150,padding:20,maxHeight:50};S.debug("eventNode",u);const m=n.append("g").attr("class","eventWrapper"),_=M.drawNode(m,u,e,l).height;c=c+_,m.attr("transform",`translate(${a}, ${r})`),r=r+10+_}return r=p,c},Pt={setConf:()=>{},draw:zt},Ft=n=>{let t="";for(let e=0;e<n.THEME_COLOR_LIMIT;e++)n["lineColor"+e]=n["lineColor"+e]||n["cScaleInv"+e],xt(n["lineColor"+e])?n["lineColor"+e]=bt(n["lineColor"+e],20):n["lineColor"+e]=kt(n["lineColor"+e],20);for(let e=0;e<n.THEME_COLOR_LIMIT;e++){const a=""+(17-3*e);t+=`
    .section-${e-1} rect, .section-${e-1} path, .section-${e-1} circle, .section-${e-1} path  {
      fill: ${n["cScale"+e]};
    }
    .section-${e-1} text {
     fill: ${n["cScaleLabel"+e]};
    }
    .node-icon-${e-1} {
      font-size: 40px;
      color: ${n["cScaleLabel"+e]};
    }
    .section-edge-${e-1}{
      stroke: ${n["cScale"+e]};
    }
    .edge-depth-${e-1}{
      stroke-width: ${a};
    }
    .section-${e-1} line {
      stroke: ${n["cScaleInv"+e]} ;
      stroke-width: 3;
    }

    .lineWrapper line{
      stroke: ${n["cScaleLabel"+e]} ;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `}return t},Dt=n=>`
  .edge {
    stroke-width: 3;
  }
  ${Ft(n)}
  .section-root rect, .section-root path, .section-root circle  {
    fill: ${n.git0};
  }
  .section-root text {
    fill: ${n.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .eventWrapper  {
   filter: brightness(120%);
  }
`,Bt=Dt,qt={db:vt,renderer:Pt,parser:_t,styles:Bt};export{qt as diagram};
