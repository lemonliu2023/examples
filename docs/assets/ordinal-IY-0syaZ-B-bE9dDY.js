import{a as p}from"./init-DxzjmxYy-KazIMvGC.js";class a extends Map{constructor(e,n=h){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),e!=null)for(const[r,s]of e)this.set(r,s)}get(e){return super.get(o(this,e))}has(e){return super.has(o(this,e))}set(e,n){return super.set(l(this,e),n)}delete(e){return super.delete(f(this,e))}}class m extends Set{constructor(e,n=h){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),e!=null)for(const r of e)this.add(r)}has(e){return super.has(o(this,e))}add(e){return super.add(l(this,e))}delete(e){return super.delete(f(this,e))}}function o({_intern:t,_key:e},n){const r=e(n);return t.has(r)?t.get(r):n}function l({_intern:t,_key:e},n){const r=e(n);return t.has(r)?t.get(r):(t.set(r,n),n)}function f({_intern:t,_key:e},n){const r=e(n);return t.has(r)&&(n=t.get(r),t.delete(r)),n}function h(t){return t!==null&&typeof t=="object"?t.valueOf():t}const c=Symbol("implicit");function d(){var t=new a,e=[],n=[],r=c;function s(u){let i=t.get(u);if(i===void 0){if(r!==c)return r;t.set(u,i=e.push(u)-1)}return n[i%n.length]}return s.domain=function(u){if(!arguments.length)return e.slice();e=[],t=new a;for(const i of u)t.has(i)||t.set(i,e.push(i)-1);return s},s.range=function(u){return arguments.length?(n=Array.from(u),s):n.slice()},s.unknown=function(u){return arguments.length?(r=u,s):r},s.copy=function(){return d(e,n).unknown(r)},p.apply(s,arguments),s}export{c,d,m};
