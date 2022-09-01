// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;function u(r){return r!=r}function t(){var t,e=n,I=r;return function(r){if(0===arguments.length)return void 0===t?null:t/2;u(r)&&(I=r,e=r);r>e&&(e=r);r<I&&(I=r);return(t=e+I)/2}}export{t as default};
//# sourceMappingURL=mod.js.map
