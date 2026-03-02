"use strict";var q=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var x=q(function(G,y){
var b=require('@stdlib/math-base-special-absf/dist'),p=require('@stdlib/math-base-assert-is-nanf/dist');function O(r,e,s,o,u,f,m){var i,n,t,v,a;if(r<=0)return NaN;for(n=o,t=m,a=0;a<r&&u[t]!==0;a++)n+=s,t+=f;if(a===r)return NaN;if(i=b(e[n]),p(i))return i;for(a+=1,a;a<r;a++)if(n+=s,t+=f,!u[t]){if(v=b(e[n]),p(v))return v;v>i&&(i=v)}return i}y.exports=O
});var k=q(function(H,d){
var j=require('@stdlib/strided-base-stride2offset/dist'),g=x();function h(r,e,s,o,u){var f=j(r,s),m=j(r,u);return g(r,e,s,f,o,u,m)}d.exports=h
});var _=q(function(I,R){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=k(),z=x();w(l,"ndarray",z);R.exports=l
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=_(),c,E=B(A(__dirname,"./native.js"));C(E)?c=D:c=E;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
