(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3759],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return u}});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach(function(t){s(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var i=a.createContext({}),c=function(e){var t,n=a.useContext(i),s=n;return e&&(s="function"==typeof(t=e)?e(n):o(o({},n),e)),s},l=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef(function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,l=function(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}(e,["components","mdxType","originalType","parentName"]),d=c(n),u=d["".concat(i,".").concat(s)]||d[s]||p[s]||r;return n?a.createElement(u,o(o({ref:t},l),{},{components:n})):a.createElement(u,o({ref:t},l))});function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=Array(r);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33594:function(e,t,n){"use strict";n.d(t,{EL:function(){return l}});var a,s=n(67294),r=["bottom","height","left","right","top","width"],o=new Map,i=function e(){var t=[];o.forEach(function(e,n){var a,s,o=n.getBoundingClientRect();a=o,s=e.rect,void 0===a&&(a={}),void 0===s&&(s={}),r.some(function(e){return a[e]!==s[e]})&&(e.rect=o,t.push(e))}),t.forEach(function(e){e.callbacks.forEach(function(t){return t(e.rect)})}),a=window.requestAnimationFrame(e)},c="undefined"!=typeof window&&window.document&&window.document.createElement?s.useLayoutEffect:s.useEffect;function l(e,t,n){"boolean"==typeof(r=t)?p=t:(p=null==(u=null==t?void 0:t.observe)||u,d=null==t?void 0:t.onChange),(l=n)&&"[object Function]"==({}).toString.call(l)&&(d=n);var r,l,p,d,u,m=(0,s.useState)(e.current),g=m[0],f=m[1],k=(0,s.useRef)(!1),b=(0,s.useRef)(!1),h=(0,s.useState)(null),N=h[0],v=h[1],x=(0,s.useRef)(d);return c(function(){x.current=d,e.current!==g&&f(e.current)}),c(function(){g&&!k.current&&(k.current=!0,v(g.getBoundingClientRect()))},[g]),c(function(){if(p){var t=g;if(b.current||(b.current=!0,t=e.current),t){var n,s,r=(n=t,s=function(e){null==x.current||x.current(e),v(e)},{observe:function(){var e=0===o.size;o.has(n)?o.get(n).callbacks.push(s):o.set(n,{rect:void 0,hasRectChanged:!1,callbacks:[s]}),e&&i()},unobserve:function(){var e=o.get(n);if(e){var t=e.callbacks.indexOf(s);t>=0&&e.callbacks.splice(t,1),e.callbacks.length||o.delete(n),o.size||cancelAnimationFrame(a)}}});return r.observe(),function(){r.unobserve()}}}},[p,g,e]),N}},65122:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/ring-offset-width",function(){return n(44026)}])},44026:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var a=n(99534);n(67294);var s,r=n(3905),o=n(41664),i=n.n(o),c=n(59533),l=n(5679),p=n(83434),d=n(53339),u=n(74296),m=n(39822),g=n(75774),f=n(34879),k=d.L,b=function(e){return console.warn("Component Heading was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",Object.assign({},e))},h={Layout:k,classes:{utilities:{".ring-offset-0":{"--tw-ring-offset-width":"0px"},".ring-offset-1":{"--tw-ring-offset-width":"1px"},".ring-offset-2":{"--tw-ring-offset-width":"2px"},".ring-offset-4":{"--tw-ring-offset-width":"4px"},".ring-offset-8":{"--tw-ring-offset-width":"8px"}},transformProperties:function(e){e.selector;var t=e.properties;return t["box-shadow"]="0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow)",t}},meta:{title:"Ring Offset Width",description:"Utilities for simulating an offset when adding outline rings."},slug:"ring-offset-width",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Setting the ring offset width",slug:"setting-the-ring-offset-width",children:[]},{title:"Changing the offset color",slug:"changing-the-offset-color",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]},N=u.X_;function v(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,r.kt)(N,Object.assign({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.X,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3}},"Basic usage"),(0,r.kt)(l.X,{level:3,id:"setting-the-ring-offset-width",nextElement:{type:"paragraph"}},"Setting the ring offset width"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ring-offset-{width}")," utilities to simulate an offset by adding solid white box-shadow and increasing the thickness of the accompanying outline ring to accommodate the offset."),(0,r.kt)(p.e,{containerClassName:"mt-4 -mb-3",html:'\n  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white text-sm text-center font-bold leading-6">\n    <div class="flex flex-col items-center shrink-0">\n      <p class="font-medium text-sm font-mono text-slate-500 text-center mb-3 dark:text-slate-400">ring-offset-0</p>\n      <button class="px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm ring-2 ring-offset-slate-50 ring-pink-500 ring-offset-0 dark:bg-slate-700 dark:text-slate-200 dark:border-transparent dark:ring-offset-slate-900">Button A</button>\n    </div>\n    <div class="flex flex-col items-center shrink-0">\n      <p class="font-medium text-sm font-mono text-slate-500 text-center mb-3 dark:text-slate-400">ring-offset-2</p>\n      <button class="px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm ring-2 ring-offset-slate-50 ring-pink-500 ring-offset-2 dark:bg-slate-700 dark:text-slate-200 dark:border-transparent dark:ring-offset-slate-900">Button B</button>\n    </div>\n    <div class="flex flex-col items-center shrink-0">\n      <p class="font-medium text-sm font-mono text-slate-500 text-center mb-3 dark:text-slate-400">ring-offset-4</p>\n      <button class="px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm ring-2 ring-offset-slate-50 ring-pink-500 ring-offset-4 dark:bg-slate-700 dark:text-slate-200 dark:border-transparent dark:ring-offset-slate-900">Button C</button>\n    </div>\n  </div>\n'}),(0,r.kt)("pre",Object.assign({},{className:"language-html"}),(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"... ring ring-pink-500 ",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"ring-offset-0"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"Button A",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"button"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"... ring ring-pink-500 ",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"ring-offset-2"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"Button B",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"button"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"... ring ring-pink-500 ",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"ring-offset-4"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"Button C",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"button"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,r.kt)(l.X,{level:3,id:"changing-the-offset-color",nextElement:{type:"paragraph"}},"Changing the offset color"),(0,r.kt)("p",null,"You can’t actually offset a box-shadow in CSS, so we have to fake it using a solid color shadow that matches the parent background color. We use white by default, but if you are adding a ring offset over a different background color, you should use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ring-offset-{color}")," utilities to match the parent background color:"),(0,r.kt)(p.e,{containerClassName:"mt-4 -mb-3",html:'\n  <div class="grid place-content-center text-white text-sm text-center font-bold leading-6">\n    <div class="flex flex-col items-center shrink-0">\n      <p class="font-medium text-sm font-mono text-slate-500 text-center mb-3 dark:text-slate-400">\n        <span class="dark:hidden">ring-offset-slate-50</span>\n        <span class="hidden dark:inline">dark:ring-offset-slate-900</span>\n      </p>\n      <button class="px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm ring-2 ring-offset-4 ring-offset-slate-50 ring-pink-500 dark:bg-slate-700 dark:text-slate-200 dark:border-transparent dark:ring-offset-slate-900">Save Changes</button>\n    </div>\n  </div>\n'}),(0,r.kt)("pre",Object.assign({},{className:"language-html"}),(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"ring ring-pink-500 ",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"ring-offset-2")," ",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"ring-offset-slate-50")," ",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"dark:ring-offset-slate-900")," ...",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  Save Changes\n",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"button"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,r.kt)("p",null,"For more information, see the ",(0,r.kt)(i(),{href:"/docs/ring-offset-color",passHref:!0},(0,r.kt)("a",null,"ring offset color"))," documentation."),(0,r.kt)("hr",null),(0,r.kt)(b,{level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},ignore:!0,mdxType:"Heading"},"Applying conditionally"),(0,r.kt)(b,{level:3,id:"hover-focus-and-other-states",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Hover, focus, and other states"),(0,r.kt)(f.k,{defaultClass:"ring-2 ring-offset-2",featuredClass:"ring-offset-4",element:"button",mdxType:"HoverFocusAndOtherStates"}),(0,r.kt)(b,{level:3,id:"breakpoints-and-media-queries",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Breakpoints and media queries"),(0,r.kt)(g.p,{defaultClass:"ring-2 ring-offset-2",featuredClass:"ring-offset-4",element:"button",mdxType:"BreakpointsAndMediaQueries"}),(0,r.kt)("hr",null),(0,r.kt)(l.X,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3}},"Using custom values"),(0,r.kt)(l.X,{level:3,id:"customizing-your-theme",nextElement:{type:"paragraph"}},"Customizing your theme"),(0,r.kt)("p",null,"To customize which ring offset width utilities are generated, add your custom values under ",(0,r.kt)("inlineCode",{parentName:"p"},"ringOffsetWidth")," key in the ",(0,r.kt)("inlineCode",{parentName:"p"},"theme")," section of your ",(0,r.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),(0,r.kt)(c.M,{filename:"tailwind.config.js"},(0,r.kt)("pre",Object.assign({},{className:"language-js"}),(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"module",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token property-access"}),"exports")," ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token literal-property property"}),"theme"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token literal-property property"}),"extend"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n      ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token literal-property property"}),"ringOffsetWidth"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token string-property property"}),"'3'"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'3px'"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n        ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token string-property property"}),"'6'"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'6px'"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n        ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token string-property property"}),"'10'"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'10px'"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n      ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n    ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")))),(0,r.kt)("p",null,"Learn more about customizing the default theme in the ",(0,r.kt)(i(),{href:"/docs/theme#customizing-the-default-theme",passHref:!0},(0,r.kt)("a",null,"theme customization"))," documentation."),(0,r.kt)(l.X,{level:3,id:"arbitrary-values",nextElement:{type:"jsx"}},"Arbitrary values"),(0,r.kt)(m.k,{property:"ring-offset",featuredClass:"ring-offset-[3px]",mdxType:"ArbitraryValues"}))}v.isMDXComponent=!0,v.layoutProps=h},59533:function(e,t,n){"use strict";n.d(t,{M:function(){return r}});var a=n(85893),s=n(6774);function r(e){var t=e.filename,n=e.children;return(0,a.jsxs)("div",{className:"mt-5 mb-8 first:mt-0 last:mb-0 pt-2 bg-slate-800 rounded-xl shadow-lg overflow-hidden dark:ring-1 dark:ring-white/10 dark:ring-inset",children:[(0,a.jsx)(s.n,{primary:{name:t},showTabMarkers:!1}),(0,a.jsx)("div",{className:"children:my-0 children:!shadow-none children:bg-transparent",children:n})]})}},83434:function(e,t,n){"use strict";n.d(t,{e:function(){return p}});var a=n(26042),s=n(85893),r=n(86010),o=n(2008),i=n(67294),c={none:"",md:"p-8"};function l(e){var t=e.as,n=e.style,o=e.padding,i=e.p,l=e.className,p=e.containerClassName,d=e.html,u=e.children,m=e.hint,g=e.hintClassName,f=e.lightOnly,k=void 0!==f&&f,b=null!=o?o:void 0===i?"md":i,h=c[b];if(void 0===h)throw Error("Invalid padding value: ".concat(JSON.stringify(b)));return(0,s.jsxs)("div",{className:p,children:[void 0!==m&&(0,s.jsx)("div",{className:(0,r.Z)(g,"not-prose mb-4"),children:(0,s.jsxs)("div",{className:"flex space-x-2",children:[(0,s.jsxs)("svg",{className:"flex-none w-5 h-5",viewBox:"0 0 20 20",fill:"none",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,s.jsx)("path",{d:"m9.813 9.25.346-5.138a1.276 1.276 0 0 0-2.54-.235L6.75 11.25 5.147 9.327a1.605 1.605 0 0 0-2.388-.085.018.018 0 0 0-.004.019l1.98 4.87a5 5 0 0 0 4.631 3.119h3.885a4 4 0 0 0 4-4v-1a3 3 0 0 0-3-3H9.813Z",className:"stroke-slate-400 dark:stroke-slate-300"}),(0,s.jsx)("path",{d:"M3 5s.35-.47 1.25-.828m9.516-.422c2.078.593 3.484 1.5 3.484 1.5",className:"stroke-slate-400 dark:stroke-sky-400"})]}),(0,s.jsx)("p",{className:"text-slate-700 text-sm font-medium dark:text-slate-200",children:m})]})}),(0,s.jsxs)(void 0===t?"div":t,{style:n,className:(0,r.Z)("not-prose relative bg-slate-50 rounded-xl overflow-hidden",!k&&"dark:bg-slate-800/25"),children:[(0,s.jsx)("div",{style:{backgroundPosition:"10px 10px"},className:(0,r.Z)("absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]",!k&&"dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]")}),(0,s.jsx)("div",(0,a.Z)({className:(0,r.Z)("relative rounded-xl overflow-auto",h,l)},d?{dangerouslySetInnerHTML:{__html:d}}:{children:u})),(0,s.jsx)("div",{className:(0,r.Z)("absolute inset-0 pointer-events-none border border-black/5 rounded-xl",!k&&"dark:border-white/5")})]})]})}function p(e){return e.resizable?(0,s.jsx)(d,(0,a.Z)({},e)):(0,s.jsx)(l,(0,a.Z)({},e))}function d(e){var t=(0,i.useRef)(),n=(0,o.c$)(0),r=(0,i.useRef)(),c=(0,i.useRef)();return(0,i.useEffect)(function(){var e=new window.ResizeObserver(function(){n.set(0)});return e.observe(t.current),function(){e.disconnect()}},[]),(0,i.useEffect)(function(){c.current.onselectstart=function(){return!1}},[]),(0,s.jsxs)("div",{ref:t,className:"relative",children:[(0,s.jsx)(l,(0,a.Z)({as:o.ww.div,style:{marginRight:(0,o.Hm)(n,function(e){return-e})}},e)),(0,s.jsx)("div",{ref:r,className:"absolute inset-y-0 right-[-1.375rem] left-80 ml-4 pointer-events-none",children:(0,s.jsx)(o.ww.div,{ref:c,drag:"x",_dragX:n,dragMomentum:!1,dragElastic:0,dragConstraints:r,className:"pointer-events-auto absolute top-1/2 right-0 -mt-6 p-2 hidden md:block cursor-ew-resize",style:{x:n},onDragStart:function(){document.documentElement.classList.add("dragging-ew")},onDragEnd:function(){document.documentElement.classList.remove("dragging-ew")},children:(0,s.jsx)("div",{className:"w-1.5 h-8 bg-slate-500/60 rounded-full"})})})]})}},6774:function(e,t,n){"use strict";n.d(t,{n:function(){return r}});var a=n(85893),s=n(86010);function r(e){var t=e.primary,n=e.secondary,r=e.showTabMarkers,o=e.side,i=e.translucent,c=e.children;return(0,a.jsxs)("div",{className:"flex text-slate-400 text-xs leading-6",children:[(0,a.jsxs)("div",{className:"flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center",children:[t.name,(void 0===r||r)&&(t.saved?(0,a.jsx)("svg",{viewBox:"0 0 4 4",className:"ml-2.5 flex-none w-1 h-1 text-slate-500 overflow-visible",children:(0,a.jsx)("path",{d:"M-1 -1L5 5M5 -1L-1 5",fill:"none",stroke:"currentColor",strokeLinecap:"round"})}):(0,a.jsx)("div",{className:"ml-2.5 flex-none w-1 h-1 rounded-full bg-current"}))]}),(0,a.jsxs)("div",{className:(0,s.Z)("flex-auto flex items-center bg-slate-700/50 border border-slate-500/30","left"===o?"rounded-tl lg:rounded-tr":"rounded-tl",void 0!==i&&i&&"dark:bg-slate-800/50"),children:[(void 0===n?[]:n).map(function(e){var t=e.name,n=e.open,r=e.className;return(0,a.jsx)("div",{className:(0,s.Z)("px-4 py-1 border-r border-slate-200/5",r,{italic:!(void 0===n||n)}),children:t},t)}),c&&(0,a.jsx)("div",{className:"flex-auto flex items-center justify-end px-4 space-x-4",children:c})]})]})}},29815:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a=n(20943),s=n(13375),r=n(91566);function o(e){return function(e){if(Array.isArray(e))return(0,a.Z)(e)}(e)||(0,s.Z)(e)||(0,r.Z)(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(e){e.O(0,[3430,8401,8555,2474,4713,4851,9774,2888,179],function(){return e(e.s=65122)}),_N_E=e.O()}]);