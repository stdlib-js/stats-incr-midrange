// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";function e(){var e,i=n,r=t;return function(t){if(0===arguments.length)return void 0===e?null:e/2;s(t)&&(r=t,i=t);t>i&&(i=t);t<r&&(r=t);return(e=i+r)/2}}export{e as default};
//# sourceMappingURL=index.mjs.map
