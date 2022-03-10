/* esm.sh - esbuild bundle(ms@2.1.3) deno production */
var m=Object.create;var o=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var l=Object.getOwnPropertyNames;var v=Object.getPrototypeOf,w=Object.prototype.hasOwnProperty;var g=e=>o(e,"__esModule",{value:!0});var p=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var M=(e,r,s)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of l(r))!w.call(e,a)&&a!=="default"&&o(e,a,{get:()=>r[a],enumerable:!(s=y(r,a))||s.enumerable});return e},b=e=>M(g(o(e!=null?m(v(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var f=p((E,d)=>{var t=1e3,c=t*60,u=c*60,n=u*24,k=n*7,x=n*365.25;d.exports=function(e,r){r=r||{};var s=typeof e;if(s==="string"&&e.length>0)return S(e);if(s==="number"&&isFinite(e))return r.long?F(e):A(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))};function S(e){if(e=String(e),!(e.length>100)){var r=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(!!r){var s=parseFloat(r[1]),a=(r[2]||"ms").toLowerCase();switch(a){case"years":case"year":case"yrs":case"yr":case"y":return s*x;case"weeks":case"week":case"w":return s*k;case"days":case"day":case"d":return s*n;case"hours":case"hour":case"hrs":case"hr":case"h":return s*u;case"minutes":case"minute":case"mins":case"min":case"m":return s*c;case"seconds":case"second":case"secs":case"sec":case"s":return s*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}}}function A(e){var r=Math.abs(e);return r>=n?Math.round(e/n)+"d":r>=u?Math.round(e/u)+"h":r>=c?Math.round(e/c)+"m":r>=t?Math.round(e/t)+"s":e+"ms"}function F(e){var r=Math.abs(e);return r>=n?i(e,r,n,"day"):r>=u?i(e,r,u,"hour"):r>=c?i(e,r,c,"minute"):r>=t?i(e,r,t,"second"):e+" ms"}function i(e,r,s,a){var h=r>=s*1.5;return Math.round(e/s)+" "+a+(h?"s":"")}});var L=b(f());var export_default=L.default;export{export_default as default};
