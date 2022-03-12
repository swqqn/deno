/* esm.sh - esbuild bundle(path-browserify@1.0.1) deno production */
import __process$ from "/v43/node_process.js";__process$.env.NODE_ENV="production";var y=Object.create;var m=Object.defineProperty;var S=Object.getOwnPropertyDescriptor;var L=Object.getOwnPropertyNames;var P=Object.getPrototypeOf,_=Object.prototype.hasOwnProperty;var z=l=>m(l,"__esModule",{value:!0});var D=(l,e)=>()=>(e||l((e={exports:{}}).exports,e),e.exports);var T=(l,e,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of L(e))!_.call(l,i)&&i!=="default"&&m(l,i,{get:()=>e[i],enumerable:!(r=S(e,i))||r.enumerable});return l},C=l=>T(z(m(l!=null?y(P(l)):{},"default",l&&l.__esModule&&"default"in l?{get:()=>l.default,enumerable:!0}:{value:l,enumerable:!0})),l);var A=D((q,k)=>{"use strict";function c(l){if(typeof l!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(l))}function h(l,e){for(var r="",i=0,t=-1,s=0,n,f=0;f<=l.length;++f){if(f<l.length)n=l.charCodeAt(f);else{if(n===47)break;n=47}if(n===47){if(!(t===f-1||s===1))if(t!==f-1&&s===2){if(r.length<2||i!==2||r.charCodeAt(r.length-1)!==46||r.charCodeAt(r.length-2)!==46){if(r.length>2){var a=r.lastIndexOf("/");if(a!==r.length-1){a===-1?(r="",i=0):(r=r.slice(0,a),i=r.length-1-r.lastIndexOf("/")),t=f,s=0;continue}}else if(r.length===2||r.length===1){r="",i=0,t=f,s=0;continue}}e&&(r.length>0?r+="/..":r="..",i=2)}else r.length>0?r+="/"+l.slice(t+1,f):r=l.slice(t+1,f),i=f-t-1;t=f,s=0}else n===46&&s!==-1?++s:s=-1}return r}function R(l,e){var r=e.dir||e.root,i=e.base||(e.name||"")+(e.ext||"");return r?r===e.root?r+i:r+l+i:i}var g={resolve:function(){for(var e="",r=!1,i,t=arguments.length-1;t>=-1&&!r;t--){var s;t>=0?s=arguments[t]:(i===void 0&&(i=__process$.cwd()),s=i),c(s),s.length!==0&&(e=s+"/"+e,r=s.charCodeAt(0)===47)}return e=h(e,!r),r?e.length>0?"/"+e:"/":e.length>0?e:"."},normalize:function(e){if(c(e),e.length===0)return".";var r=e.charCodeAt(0)===47,i=e.charCodeAt(e.length-1)===47;return e=h(e,!r),e.length===0&&!r&&(e="."),e.length>0&&i&&(e+="/"),r?"/"+e:e},isAbsolute:function(e){return c(e),e.length>0&&e.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var e,r=0;r<arguments.length;++r){var i=arguments[r];c(i),i.length>0&&(e===void 0?e=i:e+="/"+i)}return e===void 0?".":g.normalize(e)},relative:function(e,r){if(c(e),c(r),e===r||(e=g.resolve(e),r=g.resolve(r),e===r))return"";for(var i=1;i<e.length&&e.charCodeAt(i)===47;++i);for(var t=e.length,s=t-i,n=1;n<r.length&&r.charCodeAt(n)===47;++n);for(var f=r.length,a=f-n,v=s<a?s:a,u=-1,o=0;o<=v;++o){if(o===v){if(a>v){if(r.charCodeAt(n+o)===47)return r.slice(n+o+1);if(o===0)return r.slice(n+o)}else s>v&&(e.charCodeAt(i+o)===47?u=o:o===0&&(u=0));break}var b=e.charCodeAt(i+o),w=r.charCodeAt(n+o);if(b!==w)break;b===47&&(u=o)}var d="";for(o=i+u+1;o<=t;++o)(o===t||e.charCodeAt(o)===47)&&(d.length===0?d+="..":d+="/..");return d.length>0?d+r.slice(n+u):(n+=u,r.charCodeAt(n)===47&&++n,r.slice(n))},_makeLong:function(e){return e},dirname:function(e){if(c(e),e.length===0)return".";for(var r=e.charCodeAt(0),i=r===47,t=-1,s=!0,n=e.length-1;n>=1;--n)if(r=e.charCodeAt(n),r===47){if(!s){t=n;break}}else s=!1;return t===-1?i?"/":".":i&&t===1?"//":e.slice(0,t)},basename:function(e,r){if(r!==void 0&&typeof r!="string")throw new TypeError('"ext" argument must be a string');c(e);var i=0,t=-1,s=!0,n;if(r!==void 0&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var f=r.length-1,a=-1;for(n=e.length-1;n>=0;--n){var v=e.charCodeAt(n);if(v===47){if(!s){i=n+1;break}}else a===-1&&(s=!1,a=n+1),f>=0&&(v===r.charCodeAt(f)?--f==-1&&(t=n):(f=-1,t=a))}return i===t?t=a:t===-1&&(t=e.length),e.slice(i,t)}else{for(n=e.length-1;n>=0;--n)if(e.charCodeAt(n)===47){if(!s){i=n+1;break}}else t===-1&&(s=!1,t=n+1);return t===-1?"":e.slice(i,t)}},extname:function(e){c(e);for(var r=-1,i=0,t=-1,s=!0,n=0,f=e.length-1;f>=0;--f){var a=e.charCodeAt(f);if(a===47){if(!s){i=f+1;break}continue}t===-1&&(s=!1,t=f+1),a===46?r===-1?r=f:n!==1&&(n=1):r!==-1&&(n=-1)}return r===-1||t===-1||n===0||n===1&&r===t-1&&r===i+1?"":e.slice(r,t)},format:function(e){if(e===null||typeof e!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return R("/",e)},parse:function(e){c(e);var r={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return r;var i=e.charCodeAt(0),t=i===47,s;t?(r.root="/",s=1):s=0;for(var n=-1,f=0,a=-1,v=!0,u=e.length-1,o=0;u>=s;--u){if(i=e.charCodeAt(u),i===47){if(!v){f=u+1;break}continue}a===-1&&(v=!1,a=u+1),i===46?n===-1?n=u:o!==1&&(o=1):n!==-1&&(o=-1)}return n===-1||a===-1||o===0||o===1&&n===a-1&&n===f+1?a!==-1&&(f===0&&t?r.base=r.name=e.slice(1,a):r.base=r.name=e.slice(f,a)):(f===0&&t?(r.name=e.slice(1,n),r.base=e.slice(1,a)):(r.name=e.slice(f,n),r.base=e.slice(f,a)),r.ext=e.slice(n,a)),f>0?r.dir=e.slice(0,f-1):t&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};g.posix=g;k.exports=g});var E=C(A()),x=C(A()),{relative:B,dirname:F,win32:G,resolve:H,basename:K,extname:M,posix:Q,join:U,format:V,parse:W,sep:X,delimiter:Y,_makeLong:Z,isAbsolute:$,normalize:j}=E;var export_default=x.default;export{Z as _makeLong,K as basename,export_default as default,Y as delimiter,F as dirname,M as extname,V as format,$ as isAbsolute,U as join,j as normalize,W as parse,Q as posix,B as relative,H as resolve,X as sep,G as win32};