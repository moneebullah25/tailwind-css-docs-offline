(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1218],{3905:function(a,t,e){"use strict";e.d(t,{Zo:function(){return p},kt:function(){return m}});var n=e(67294);function s(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function c(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})),e.push.apply(e,n)}return e}function o(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?c(Object(e),!0).forEach(function(t){s(a,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))})}return a}var r=n.createContext({}),i=function(a){var t,e=n.useContext(r),s=e;return a&&(s="function"==typeof(t=a)?a(e):o(o({},e),a)),s},p=function(a){var t=i(a.components);return n.createElement(r.Provider,{value:t},a.children)},l={inlineCode:"code",wrapper:function(a){var t=a.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef(function(a,t){var e=a.components,s=a.mdxType,c=a.originalType,r=a.parentName,p=function(a,t){if(null==a)return{};var e,n,s=function(a,t){if(null==a)return{};var e,n,s={},c=Object.keys(a);for(n=0;n<c.length;n++)e=c[n],t.indexOf(e)>=0||(s[e]=a[e]);return s}(a,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(a);for(n=0;n<c.length;n++)e=c[n],!(t.indexOf(e)>=0)&&Object.prototype.propertyIsEnumerable.call(a,e)&&(s[e]=a[e])}return s}(a,["components","mdxType","originalType","parentName"]),u=i(e),m=u["".concat(r,".").concat(s)]||u[s]||l[s]||c;return e?n.createElement(m,o(o({ref:t},p),{},{components:e})):n.createElement(m,o({ref:t},p))});function m(a,t){var e=arguments,s=t&&t.mdxType;if("string"==typeof a||s){var c=e.length,o=Array(c);o[0]=u;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=a,r.mdxType="string"==typeof a?a:s,o[1]=r;for(var p=2;p<c;p++)o[p]=e[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,e)}u.displayName="MDXCreateElement"},33594:function(a,t,e){"use strict";e.d(t,{EL:function(){return p}});var n,s=e(67294),c=["bottom","height","left","right","top","width"],o=new Map,r=function a(){var t=[];o.forEach(function(a,e){var n,s,o=e.getBoundingClientRect();n=o,s=a.rect,void 0===n&&(n={}),void 0===s&&(s={}),c.some(function(a){return n[a]!==s[a]})&&(a.rect=o,t.push(a))}),t.forEach(function(a){a.callbacks.forEach(function(t){return t(a.rect)})}),n=window.requestAnimationFrame(a)},i="undefined"!=typeof window&&window.document&&window.document.createElement?s.useLayoutEffect:s.useEffect;function p(a,t,e){"boolean"==typeof(c=t)?l=t:(l=null==(m=null==t?void 0:t.observe)||m,u=null==t?void 0:t.onChange),(p=e)&&"[object Function]"==({}).toString.call(p)&&(u=e);var c,p,l,u,m,g=(0,s.useState)(a.current),d=g[0],k=g[1],N=(0,s.useRef)(!1),b=(0,s.useRef)(!1),f=(0,s.useState)(null),h=f[0],j=f[1],O=(0,s.useRef)(u);return i(function(){O.current=u,a.current!==d&&k(a.current)}),i(function(){d&&!N.current&&(N.current=!0,j(d.getBoundingClientRect()))},[d]),i(function(){if(l){var t=d;if(b.current||(b.current=!0,t=a.current),t){var e,s,c=(e=t,s=function(a){null==O.current||O.current(a),j(a)},{observe:function(){var a=0===o.size;o.has(e)?o.get(e).callbacks.push(s):o.set(e,{rect:void 0,hasRectChanged:!1,callbacks:[s]}),a&&r()},unobserve:function(){var a=o.get(e);if(a){var t=a.callbacks.indexOf(s);t>=0&&a.callbacks.splice(t,1),a.callbacks.length||o.delete(e),o.size||cancelAnimationFrame(n)}}});return c.observe(),function(){c.unobserve()}}}},[l,d,a]),h}},40712:function(a,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/touch-action",function(){return e(46881)}])},46881:function(a,t,e){"use strict";e.r(t),e.d(t,{default:function(){return N}});var n=e(99534);e(67294);var s=e(3905);e(41664);var c=e(5679),o=e(83434),r=e(53339),i=e(74296);e(68517);var p,l=e(1637),u=e(76098),m=r.L,g=function(a){return console.warn("Component Heading was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",Object.assign({},a))},d={Layout:m,classes:{utilities:{".touch-auto":{"touch-action":"auto"},".touch-none":{"touch-action":"none"},".touch-pan-x":{"touch-action":"pan-x"},".touch-pan-left":{"touch-action":"pan-left"},".touch-pan-right":{"touch-action":"pan-right"},".touch-pan-y":{"touch-action":"pan-y"},".touch-pan-up":{"touch-action":"pan-up"},".touch-pan-down":{"touch-action":"pan-down"},".touch-pinch-zoom":{"touch-action":"pinch-zoom"},".touch-manipulation":{"touch-action":"manipulation"}}},meta:{title:"Touch Action",description:"Utilities for controlling how an element can be scrolled and zoomed on touchscreens."},slug:"touch-action",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Setting the touch action",slug:"setting-the-touch-action",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]}]},k=i.X_;function N(a){var t=a.components,e=(0,n.Z)(a,["components"]);return(0,s.kt)(k,Object.assign({},d,e,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(c.X,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3}},"Basic usage"),(0,s.kt)(c.X,{level:3,id:"setting-the-touch-action",nextElement:{type:"paragraph"}},"Setting the touch action"),(0,s.kt)("p",null,"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"touch-{action}")," utilities to control how an element can be scrolled (panned) and zoomed (pinched) on touchscreens."),(0,s.kt)(o.e,{hint:"Try panning these images on a touchscreen",containerClassName:"mt-4 -mb-3",html:'\n  <div class="grid sm:grid-cols-2 gap-x-6 gap-y-14 font-mono font-bold">\n    <div class="flex flex-col items-center">\n      <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">touch-auto</p>\n      <div class="grid w-full h-48 overflow-auto touch-auto rounded-lg shadow-lg">\n        <img class="col-span-1 col-start-1 col-end-1 w-[150%] max-w-none" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80" />\n      </div>\n    </div>\n    <div class="flex flex-col items-center">\n      <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">touch-none</p>\n      <div class="w-full h-48 overflow-auto touch-none rounded-lg shadow-lg">\n        <img class="w-[150%] max-w-none" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80" />\n      </div>\n    </div>\n    <div class="flex flex-col items-center">\n      <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">touch-pan-x</p>\n      <div class="w-full h-48 overflow-auto touch-pan-x rounded-lg shadow-lg">\n        <img class="w-[150%] max-w-none" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80" />\n      </div>\n    </div>\n    <div class="flex flex-col items-center">\n      <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">touch-pan-y</p>\n      <div class="w-full h-48 overflow-auto touch-pan-y rounded-lg shadow-lg">\n        <img class="w-[150%] max-w-none" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80" />\n      </div>\n    </div>\n  </div>\n'}),(0,s.kt)("pre",Object.assign({},{className:"language-html"}),(0,s.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"w-full h-48 ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"overflow-auto touch-auto")," ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"img")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"w-[150%] max-w-none h-auto",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'))," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"src"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'))," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"/>")),"\n",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"w-full h-48 ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"overflow-auto touch-none")," ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"img")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"w-[150%] max-w-none h-auto",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'))," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"src"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'))," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"/>")),"\n",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"w-full h-48 ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"overflow-auto touch-pan-x")," ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"img")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"w-[150%] max-w-none h-auto",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'))," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"src"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'))," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"/>")),"\n",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"w-full h-48 ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"overflow-auto touch-pan-y")," ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"img")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"w-[150%] max-w-none h-auto",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'))," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"src"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'))," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"/>")),"\n",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,s.kt)("hr",null),(0,s.kt)(g,{level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},ignore:!0,mdxType:"Heading"},"Applying conditionally"),(0,s.kt)(g,{level:3,id:"hover-focus-and-other-states",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Hover, focus, and other states"),(0,s.kt)(u.k,{featuredClass:"touch-pan-x",variant:"focus",mdxType:"HoverFocusAndOtherStates"}),(0,s.kt)(g,{level:3,id:"breakpoints-and-media-queries",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Breakpoints and media queries"),(0,s.kt)(l.p,{featuredClass:"touch-pan-x",mdxType:"BreakpointsAndMediaQueries"}))}N.isMDXComponent=!0,N.layoutProps=d},83434:function(a,t,e){"use strict";e.d(t,{e:function(){return l}});var n=e(26042),s=e(85893),c=e(86010),o=e(10332),r=e(67294),i={none:"",md:"p-8"};function p(a){var t=a.as,e=a.style,o=a.padding,r=a.p,p=a.className,l=a.containerClassName,u=a.html,m=a.children,g=a.hint,d=a.hintClassName,k=a.lightOnly,N=void 0!==k&&k,b=null!=o?o:void 0===r?"md":r,f=i[b];if(void 0===f)throw Error("Invalid padding value: ".concat(JSON.stringify(b)));return(0,s.jsxs)("div",{className:l,children:[void 0!==g&&(0,s.jsx)("div",{className:(0,c.Z)(d,"not-prose mb-4"),children:(0,s.jsxs)("div",{className:"flex space-x-2",children:[(0,s.jsxs)("svg",{className:"flex-none w-5 h-5",viewBox:"0 0 20 20",fill:"none",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,s.jsx)("path",{d:"m9.813 9.25.346-5.138a1.276 1.276 0 0 0-2.54-.235L6.75 11.25 5.147 9.327a1.605 1.605 0 0 0-2.388-.085.018.018 0 0 0-.004.019l1.98 4.87a5 5 0 0 0 4.631 3.119h3.885a4 4 0 0 0 4-4v-1a3 3 0 0 0-3-3H9.813Z",className:"stroke-slate-400 dark:stroke-slate-300"}),(0,s.jsx)("path",{d:"M3 5s.35-.47 1.25-.828m9.516-.422c2.078.593 3.484 1.5 3.484 1.5",className:"stroke-slate-400 dark:stroke-sky-400"})]}),(0,s.jsx)("p",{className:"text-slate-700 text-sm font-medium dark:text-slate-200",children:g})]})}),(0,s.jsxs)(void 0===t?"div":t,{style:e,className:(0,c.Z)("not-prose relative bg-slate-50 rounded-xl overflow-hidden",!N&&"dark:bg-slate-800/25"),children:[(0,s.jsx)("div",{style:{backgroundPosition:"10px 10px"},className:(0,c.Z)("absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]",!N&&"dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]")}),(0,s.jsx)("div",(0,n.Z)({className:(0,c.Z)("relative rounded-xl overflow-auto",f,p)},u?{dangerouslySetInnerHTML:{__html:u}}:{children:m})),(0,s.jsx)("div",{className:(0,c.Z)("absolute inset-0 pointer-events-none border border-black/5 rounded-xl",!N&&"dark:border-white/5")})]})]})}function l(a){return a.resizable?(0,s.jsx)(u,(0,n.Z)({},a)):(0,s.jsx)(p,(0,n.Z)({},a))}function u(a){var t=(0,r.useRef)(),e=(0,o.c$)(0),c=(0,r.useRef)(),i=(0,r.useRef)();return(0,r.useEffect)(function(){var a=new window.ResizeObserver(function(){e.set(0)});return a.observe(t.current),function(){a.disconnect()}},[]),(0,r.useEffect)(function(){i.current.onselectstart=function(){return!1}},[]),(0,s.jsxs)("div",{ref:t,className:"relative",children:[(0,s.jsx)(p,(0,n.Z)({as:o.ww.div,style:{marginRight:(0,o.Hm)(e,function(a){return-a})}},a)),(0,s.jsx)("div",{ref:c,className:"absolute inset-y-0 right-[-1.375rem] left-80 ml-4 pointer-events-none",children:(0,s.jsx)(o.ww.div,{ref:i,drag:"x",_dragX:e,dragMomentum:!1,dragElastic:0,dragConstraints:c,className:"pointer-events-auto absolute top-1/2 right-0 -mt-6 p-2 hidden md:block cursor-ew-resize",style:{x:e},onDragStart:function(){document.documentElement.classList.add("dragging-ew")},onDragEnd:function(){document.documentElement.classList.remove("dragging-ew")},children:(0,s.jsx)("div",{className:"w-1.5 h-8 bg-slate-500/60 rounded-full"})})})]})}},29815:function(a,t,e){"use strict";e.d(t,{Z:function(){return o}});var n=e(20943),s=e(13375),c=e(91566);function o(a){return function(a){if(Array.isArray(a))return(0,n.Z)(a)}(a)||(0,s.Z)(a)||(0,c.Z)(a)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(a){a.O(0,[3430,4021,8555,2474,4713,5531,9774,2888,179],function(){return a(a.s=40712)}),_N_E=a.O()}]);