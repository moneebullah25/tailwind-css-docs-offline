"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[511],{3905:function(r,e,a){a.d(e,{Zo:function(){return b},kt:function(){return t}});var n=a(67294);function o(r,e,a){return e in r?Object.defineProperty(r,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[e]=a,r}function c(r,e){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),a.push.apply(a,n)}return a}function i(r){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach(function(e){o(r,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(a,e))})}return r}var p=n.createContext({}),s=function(r){var e,a=n.useContext(p),o=a;return r&&(o="function"==typeof(e=r)?r(a):i(i({},a),r)),o},b=function(r){var e=s(r.components);return n.createElement(p.Provider,{value:e},r.children)},d={inlineCode:"code",wrapper:function(r){var e=r.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef(function(r,e){var a=r.components,o=r.mdxType,c=r.originalType,p=r.parentName,b=function(r,e){if(null==r)return{};var a,n,o=function(r,e){if(null==r)return{};var a,n,o={},c=Object.keys(r);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||(o[a]=r[a]);return o}(r,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);for(n=0;n<c.length;n++)a=c[n],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(r,a)&&(o[a]=r[a])}return o}(r,["components","mdxType","originalType","parentName"]),g=s(a),t=g["".concat(p,".").concat(o)]||g[o]||d[o]||c;return a?n.createElement(t,i(i({ref:e},b),{},{components:a})):n.createElement(t,i({ref:e},b))});function t(r,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof r||o){var c=a.length,i=Array(c);i[0]=g;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=r,p.mdxType="string"==typeof r?r:o,i[1]=p;for(var b=2;b<c;b++)i[b]=a[b];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},33594:function(r,e,a){a.d(e,{EL:function(){return b}});var n,o=a(67294),c=["bottom","height","left","right","top","width"],i=new Map,p=function r(){var e=[];i.forEach(function(r,a){var n,o,i=a.getBoundingClientRect();n=i,o=r.rect,void 0===n&&(n={}),void 0===o&&(o={}),c.some(function(r){return n[r]!==o[r]})&&(r.rect=i,e.push(r))}),e.forEach(function(r){r.callbacks.forEach(function(e){return e(r.rect)})}),n=window.requestAnimationFrame(r)},s="undefined"!=typeof window&&window.document&&window.document.createElement?o.useLayoutEffect:o.useEffect;function b(r,e,a){"boolean"==typeof(c=e)?d=e:(d=null==(t=null==e?void 0:e.observe)||t,g=null==e?void 0:e.onChange),(b=a)&&"[object Function]"==({}).toString.call(b)&&(g=a);var c,b,d,g,t,w=(0,o.useState)(r.current),v=w[0],y=w[1],x=(0,o.useRef)(!1),m=(0,o.useRef)(!1),u=(0,o.useState)(null),l=u[0],f=u[1],h=(0,o.useRef)(g);return s(function(){h.current=g,r.current!==v&&y(r.current)}),s(function(){v&&!x.current&&(x.current=!0,f(v.getBoundingClientRect()))},[v]),s(function(){if(d){var e=v;if(m.current||(m.current=!0,e=r.current),e){var a,o,c=(a=e,o=function(r){null==h.current||h.current(r),f(r)},{observe:function(){var r=0===i.size;i.has(a)?i.get(a).callbacks.push(o):i.set(a,{rect:void 0,hasRectChanged:!1,callbacks:[o]}),r&&p()},unobserve:function(){var r=i.get(a);if(r){var e=r.callbacks.indexOf(o);e>=0&&r.callbacks.splice(e,1),r.callbacks.length||i.delete(a),i.size||cancelAnimationFrame(n)}}});return c.observe(),function(){c.unobserve()}}}},[d,v,r]),l}},48364:function(r,e){e.Z={".border-spacing-0":{"--tw-border-spacing-x":"0px","--tw-border-spacing-y":"0px","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-1":{"--tw-border-spacing-x":"0.25rem","--tw-border-spacing-y":"0.25rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-2":{"--tw-border-spacing-x":"0.5rem","--tw-border-spacing-y":"0.5rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-3":{"--tw-border-spacing-x":"0.75rem","--tw-border-spacing-y":"0.75rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-4":{"--tw-border-spacing-x":"1rem","--tw-border-spacing-y":"1rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-5":{"--tw-border-spacing-x":"1.25rem","--tw-border-spacing-y":"1.25rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-6":{"--tw-border-spacing-x":"1.5rem","--tw-border-spacing-y":"1.5rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-7":{"--tw-border-spacing-x":"1.75rem","--tw-border-spacing-y":"1.75rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-8":{"--tw-border-spacing-x":"2rem","--tw-border-spacing-y":"2rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-9":{"--tw-border-spacing-x":"2.25rem","--tw-border-spacing-y":"2.25rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-10":{"--tw-border-spacing-x":"2.5rem","--tw-border-spacing-y":"2.5rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-11":{"--tw-border-spacing-x":"2.75rem","--tw-border-spacing-y":"2.75rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-12":{"--tw-border-spacing-x":"3rem","--tw-border-spacing-y":"3rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-14":{"--tw-border-spacing-x":"3.5rem","--tw-border-spacing-y":"3.5rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-16":{"--tw-border-spacing-x":"4rem","--tw-border-spacing-y":"4rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-20":{"--tw-border-spacing-x":"5rem","--tw-border-spacing-y":"5rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-24":{"--tw-border-spacing-x":"6rem","--tw-border-spacing-y":"6rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-28":{"--tw-border-spacing-x":"7rem","--tw-border-spacing-y":"7rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-32":{"--tw-border-spacing-x":"8rem","--tw-border-spacing-y":"8rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-36":{"--tw-border-spacing-x":"9rem","--tw-border-spacing-y":"9rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-40":{"--tw-border-spacing-x":"10rem","--tw-border-spacing-y":"10rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-44":{"--tw-border-spacing-x":"11rem","--tw-border-spacing-y":"11rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-48":{"--tw-border-spacing-x":"12rem","--tw-border-spacing-y":"12rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-52":{"--tw-border-spacing-x":"13rem","--tw-border-spacing-y":"13rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-56":{"--tw-border-spacing-x":"14rem","--tw-border-spacing-y":"14rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-60":{"--tw-border-spacing-x":"15rem","--tw-border-spacing-y":"15rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-64":{"--tw-border-spacing-x":"16rem","--tw-border-spacing-y":"16rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-72":{"--tw-border-spacing-x":"18rem","--tw-border-spacing-y":"18rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-80":{"--tw-border-spacing-x":"20rem","--tw-border-spacing-y":"20rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-96":{"--tw-border-spacing-x":"24rem","--tw-border-spacing-y":"24rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-px":{"--tw-border-spacing-x":"1px","--tw-border-spacing-y":"1px","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-0\\.5":{"--tw-border-spacing-x":"0.125rem","--tw-border-spacing-y":"0.125rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-1\\.5":{"--tw-border-spacing-x":"0.375rem","--tw-border-spacing-y":"0.375rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-2\\.5":{"--tw-border-spacing-x":"0.625rem","--tw-border-spacing-y":"0.625rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-3\\.5":{"--tw-border-spacing-x":"0.875rem","--tw-border-spacing-y":"0.875rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-x-0":{"--tw-border-spacing-x":"0px","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-x-1":{"--tw-border-spacing-x":"0.25rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-x-2":{"--tw-border-spacing-x":"0.5rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-x-3":{"--tw-border-spacing-x":"0.75rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-x-4":{"--tw-border-spacing-x":"1rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-x-5":{"--tw-border-spacing-x":"1.25rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-x-6":{"--tw-border-spacing-x":"1.5rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-x-7":{"--tw-border-spacing-x":"1.75rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-x-8":{"--tw-border-spacing-x":"2rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-x-9":{"--tw-border-spacing-x":"2.25rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-x-10":{"--tw-border-spacing-x":"2.5rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-x-11":{"--tw-border-spacing-x":"2.75rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-x-12":{"--tw-border-spacing-x":"3rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-x-14":{"--tw-border-spacing-x":"3.5rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-x-16":{"--tw-border-spacing-x":"4rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-x-20":{"--tw-border-spacing-x":"5rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-x-24":{"--tw-border-spacing-x":"6rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-x-28":{"--tw-border-spacing-x":"7rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-x-32":{"--tw-border-spacing-x":"8rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-x-36":{"--tw-border-spacing-x":"9rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-x-40":{"--tw-border-spacing-x":"10rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-x-44":{"--tw-border-spacing-x":"11rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-x-48":{"--tw-border-spacing-x":"12rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-x-52":{"--tw-border-spacing-x":"13rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-x-56":{"--tw-border-spacing-x":"14rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-x-60":{"--tw-border-spacing-x":"15rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-x-64":{"--tw-border-spacing-x":"16rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-x-72":{"--tw-border-spacing-x":"18rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-x-80":{"--tw-border-spacing-x":"20rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-x-96":{"--tw-border-spacing-x":"24rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-x-px":{"--tw-border-spacing-x":"1px","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-x-0\\.5":{"--tw-border-spacing-x":"0.125rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-x-1\\.5":{"--tw-border-spacing-x":"0.375rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-x-2\\.5":{"--tw-border-spacing-x":"0.625rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-x-3\\.5":{"--tw-border-spacing-x":"0.875rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-y-0":{"--tw-border-spacing-y":"0px","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-y-1":{"--tw-border-spacing-y":"0.25rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-y-2":{"--tw-border-spacing-y":"0.5rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-y-3":{"--tw-border-spacing-y":"0.75rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-y-4":{"--tw-border-spacing-y":"1rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-y-5":{"--tw-border-spacing-y":"1.25rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-y-6":{"--tw-border-spacing-y":"1.5rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-y-7":{"--tw-border-spacing-y":"1.75rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-y-8":{"--tw-border-spacing-y":"2rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-y-9":{"--tw-border-spacing-y":"2.25rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-y-10":{"--tw-border-spacing-y":"2.5rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-y-11":{"--tw-border-spacing-y":"2.75rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-y-12":{"--tw-border-spacing-y":"3rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-y-14":{"--tw-border-spacing-y":"3.5rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-y-16":{"--tw-border-spacing-y":"4rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-y-20":{"--tw-border-spacing-y":"5rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-y-24":{"--tw-border-spacing-y":"6rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-y-28":{"--tw-border-spacing-y":"7rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-y-32":{"--tw-border-spacing-y":"8rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-y-36":{"--tw-border-spacing-y":"9rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-y-40":{"--tw-border-spacing-y":"10rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-y-44":{"--tw-border-spacing-y":"11rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-y-48":{"--tw-border-spacing-y":"12rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-y-52":{"--tw-border-spacing-y":"13rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-y-56":{"--tw-border-spacing-y":"14rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-y-60":{"--tw-border-spacing-y":"15rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-y-64":{"--tw-border-spacing-y":"16rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-y-72":{"--tw-border-spacing-y":"18rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-y-80":{"--tw-border-spacing-y":"20rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-y-96":{"--tw-border-spacing-y":"24rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-y-px":{"--tw-border-spacing-y":"1px","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-y-0\\.5":{"--tw-border-spacing-y":"0.125rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-y-1\\.5":{"--tw-border-spacing-y":"0.375rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-y-2\\.5":{"--tw-border-spacing-y":"0.625rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"},".border-spacing-y-3\\.5":{"--tw-border-spacing-y":"0.875rem","border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"}}},29815:function(r,e,a){a.d(e,{Z:function(){return i}});var n=a(20943),o=a(13375),c=a(91566);function i(r){return function(r){if(Array.isArray(r))return(0,n.Z)(r)}(r)||(0,o.Z)(r)||(0,c.Z)(r)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);