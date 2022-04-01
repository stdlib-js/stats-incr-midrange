// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;var u=r,t=n,e=function(r){return r!=r};var I=function(){var r,n=t,I=u;return function(u){if(0===arguments.length)return void 0===r?null:r/2;e(u)&&(I=u,n=u);u>n&&(n=u);u<I&&(I=u);return(r=n+I)/2}};export{I as default};
//# sourceMappingURL=mod.js.map
