"use strict";var q=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(i){throw (e=0, i)}};};var x=q(function(G,y){
var b=require('@stdlib/math-base-special-absf/dist'),p=require('@stdlib/math-base-assert-is-nanf/dist');function O(r,e,i,o,u,f,m){var s,n,t,v,a;if(r<=0)return NaN;for(n=o,t=m,a=0;a<r&&u[t]!==0;a++)n+=i,t+=f;if(a===r)return NaN;if(s=b(e[n]),p(s))return s;for(a+=1,a;a<r;a++)if(n+=i,t+=f,!u[t]){if(v=b(e[n]),p(v))return v;v>s&&(s=v)}return s}y.exports=O
});var k=q(function(H,d){
var j=require('@stdlib/strided-base-stride2offset/dist'),g=x();function h(r,e,i,o,u){var f=j(r,i),m=j(r,u);return g(r,e,i,f,o,u,m)}d.exports=h
});var _=q(function(I,R){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=k(),z=x();w(l,"ndarray",z);R.exports=l
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=_(),c,E=B(A(__dirname,"./native.js"));C(E)?c=D:c=E;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
