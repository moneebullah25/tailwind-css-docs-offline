(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2560],{3905:function(a,e,t){"use strict";t.d(e,{Zo:function(){return l},kt:function(){return u}});var n=t(67294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})),t.push.apply(t,n)}return t}function o(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach(function(e){s(a,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))})}return a}var c=n.createContext({}),i=function(a){var e,t=n.useContext(c),s=t;return a&&(s="function"==typeof(e=a)?a(t):o(o({},t),a)),s},l=function(a){var e=i(a.components);return n.createElement(c.Provider,{value:e},a.children)},p={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef(function(a,e){var t=a.components,s=a.mdxType,r=a.originalType,c=a.parentName,l=function(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)t=r[n],!(e.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}(a,["components","mdxType","originalType","parentName"]),d=i(t),u=d["".concat(c,".").concat(s)]||d[s]||p[s]||r;return t?n.createElement(u,o(o({ref:e},l),{},{components:t})):n.createElement(u,o({ref:e},l))});function u(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var r=t.length,o=Array(r);o[0]=d;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=a,c.mdxType="string"==typeof a?a:s,o[1]=c;for(var l=2;l<r;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},33594:function(a,e,t){"use strict";t.d(e,{EL:function(){return l}});var n,s=t(67294),r=["bottom","height","left","right","top","width"],o=new Map,c=function a(){var e=[];o.forEach(function(a,t){var n,s,o=t.getBoundingClientRect();n=o,s=a.rect,void 0===n&&(n={}),void 0===s&&(s={}),r.some(function(a){return n[a]!==s[a]})&&(a.rect=o,e.push(a))}),e.forEach(function(a){a.callbacks.forEach(function(e){return e(a.rect)})}),n=window.requestAnimationFrame(a)},i="undefined"!=typeof window&&window.document&&window.document.createElement?s.useLayoutEffect:s.useEffect;function l(a,e,t){"boolean"==typeof(r=e)?p=e:(p=null==(u=null==e?void 0:e.observe)||u,d=null==e?void 0:e.onChange),(l=t)&&"[object Function]"==({}).toString.call(l)&&(d=t);var r,l,p,d,u,b=(0,s.useState)(a.current),m=b[0],k=b[1],g=(0,s.useRef)(!1),v=(0,s.useRef)(!1),f=(0,s.useState)(null),N=f[0],h=f[1],j=(0,s.useRef)(d);return i(function(){j.current=d,a.current!==m&&k(a.current)}),i(function(){m&&!g.current&&(g.current=!0,h(m.getBoundingClientRect()))},[m]),i(function(){if(p){var e=m;if(v.current||(v.current=!0,e=a.current),e){var t,s,r=(t=e,s=function(a){null==j.current||j.current(a),h(a)},{observe:function(){var a=0===o.size;o.has(t)?o.get(t).callbacks.push(s):o.set(t,{rect:void 0,hasRectChanged:!1,callbacks:[s]}),a&&c()},unobserve:function(){var a=o.get(t);if(a){var e=a.callbacks.indexOf(s);e>=0&&a.callbacks.splice(e,1),a.callbacks.length||o.delete(t),o.size||cancelAnimationFrame(n)}}});return r.observe(),function(){r.unobserve()}}}},[p,m,a]),N}},80929:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/backdrop-blur",function(){return t(76902)}])},76902:function(a,e,t){"use strict";t.r(e),t.d(e,{default:function(){return w}});var n=t(99534),s=t(828);t(67294);var r,o=t(3905),c=t(41664),i=t.n(c),l=t(59533),p=t(5679),d=t(83434),u=t(53339),b=t(74296),m=t(39822),k=t(75774),g=t(34879),v=t(73599),f=u.L,N=function(a){return console.warn("Component Heading was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",Object.assign({},a))},h={Layout:f,classes:{utilities:{".backdrop-blur-0":{"--tw-backdrop-blur":"blur(0)","backdrop-filter":"var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)"},".backdrop-blur-none":{"--tw-backdrop-blur":"blur(0)","backdrop-filter":"var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)"},".backdrop-blur-sm":{"--tw-backdrop-blur":"blur(4px)","backdrop-filter":"var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)"},".backdrop-blur":{"--tw-backdrop-blur":"blur(8px)","backdrop-filter":"var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)"},".backdrop-blur-md":{"--tw-backdrop-blur":"blur(12px)","backdrop-filter":"var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)"},".backdrop-blur-lg":{"--tw-backdrop-blur":"blur(16px)","backdrop-filter":"var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)"},".backdrop-blur-xl":{"--tw-backdrop-blur":"blur(24px)","backdrop-filter":"var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)"},".backdrop-blur-2xl":{"--tw-backdrop-blur":"blur(40px)","backdrop-filter":"var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)"},".backdrop-blur-3xl":{"--tw-backdrop-blur":"blur(64px)","backdrop-filter":"var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)"}},filterRules:function(a){return".backdrop-blur-0"!==(0,s.Z)(a,1)[0]},transformProperties:function(a){return{"backdrop-filter":a.properties["--tw-backdrop-blur"]}}},meta:{title:"Backdrop Blur",description:"Utilities for applying backdrop blur filters to an element."},slug:"backdrop-blur",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Blurring behind an element",slug:"blurring-behind-an-element",children:[]},{title:"Removing backdrop filters",slug:"removing-backdrop-filters",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]},j=b.X_;function w(a){var e=a.components,t=(0,n.Z)(a,["components"]);return(0,o.kt)(j,Object.assign({},h,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(p.X,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3}},"Basic usage"),(0,o.kt)(p.X,{level:3,id:"blurring-behind-an-element",nextElement:{type:"paragraph"}},"Blurring behind an element"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"backdrop-blur-{amount?}")," utilities to control an element’s backdrop blur."),(0,o.kt)(d.e,{p:"none",containerClassName:"mt-4 -mb-3",html:'\n  <div class="flex justify-start sm:block overflow-scroll sm:overflow-visible scroll-p-8">\n  <div class="flex items-center justify-around gap-6 sm:gap-4 font-mono font-bold shrink-0 p-8">\n    <div class="flex flex-col items-center shrink-0">\n      <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">backdrop-blur-sm</p>\n      <div class="relative">\n        <div class="absolute inset-6 backdrop-blur-sm h-20 w-20 bg-white/30"></div>\n        <img class="w-32 h-32 object-cover rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80" />\n        <div class="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>\n      </div>\n    </div>\n    <div class="flex flex-col items-center shrink-0">\n      <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">backdrop-blur-md</p>\n      <div class="relative">\n        <div class="absolute inset-6 backdrop-blur-md h-20 w-20 bg-white/30"></div>\n        <img class="w-32 h-32 object-cover rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80" />\n        <div class="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>\n      </div>\n    </div>\n    <div class="flex flex-col items-center shrink-0">\n      <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">backdrop-blur-xl</p>\n      <div class="relative">\n        <div class="absolute inset-6 backdrop-blur-xl h-20 w-20 bg-white/30"></div>\n        <img class="w-32 h-32 object-cover rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80" />\n        <div class="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>\n      </div>\n    </div>\n  </div>\n  </div>\n'}),(0,o.kt)("pre",Object.assign({},{className:"language-html"}),(0,o.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,o.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"backdrop-blur-sm")," bg-white/30 ...",(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,o.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n",(0,o.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,o.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"backdrop-blur-md")," bg-white/30 ...",(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,o.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n",(0,o.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,o.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"backdrop-blur-xl")," bg-white/30 ...",(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,o.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n",(0,o.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,o.kt)(p.X,{level:3,id:"removing-backdrop-filters",nextElement:{type:"jsx"}},"Removing backdrop filters"),(0,o.kt)(v.I,{defaultClass:"backdrop-blur-md backdrop-brightness-150",mdxType:"RemovingBackdropFilters"}),(0,o.kt)("hr",null),(0,o.kt)(N,{level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},ignore:!0,mdxType:"Heading"},"Applying conditionally"),(0,o.kt)(N,{level:3,id:"hover-focus-and-other-states",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Hover, focus, and other states"),(0,o.kt)(g.k,{defaultClass:"backdrop-blur-sm",featuredClass:"backdrop-blur-lg",mdxType:"HoverFocusAndOtherStates"}),(0,o.kt)(N,{level:3,id:"breakpoints-and-media-queries",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Breakpoints and media queries"),(0,o.kt)(k.p,{defaultClass:"backdrop-blur-sm",featuredClass:"backdrop-blur-lg",mdxType:"BreakpointsAndMediaQueries"}),(0,o.kt)("hr",null),(0,o.kt)(p.X,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3}},"Using custom values"),(0,o.kt)(p.X,{level:3,id:"customizing-your-theme",nextElement:{type:"paragraph"}},"Customizing your theme"),(0,o.kt)("p",null,"By default, Tailwind includes a handful of general purpose ",(0,o.kt)("inlineCode",{parentName:"p"},"backdrop-blur")," utilities. You can customize these values by editing ",(0,o.kt)("inlineCode",{parentName:"p"},"theme.backdropBlur")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"theme.extend.backdropBlur")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),(0,o.kt)(l.M,{filename:"tailwind.config.js"},(0,o.kt)("pre",Object.assign({},{className:"language-diff-js"}),(0,o.kt)("code",Object.assign({parentName:"pre"},{className:"language-diff-js"}),(0,o.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"module"),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"."),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token property-access"}),"exports"),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),"="),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,o.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  "),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token literal-property property"}),"theme"),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,o.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"    "),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token literal-property property"}),"extend"),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,o.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      "),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token literal-property property"}),"backdropBlur"),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,o.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"        "),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token literal-property property"}),"xs"),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'2px'"),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),","),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,o.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      "),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,o.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"    "),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,o.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  "),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,o.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),(0,o.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),"\n")))),(0,o.kt)("p",null,"Learn more about customizing the default theme in the ",(0,o.kt)(i(),{href:"/docs/theme#customizing-the-default-theme",passHref:!0},(0,o.kt)("a",null,"theme customization"))," documentation."),(0,o.kt)(p.X,{level:3,id:"arbitrary-values",nextElement:{type:"jsx"}},"Arbitrary values"),(0,o.kt)(m.k,{property:"backdrop-blur",featuredClass:"backdrop-blur-[2px]",mdxType:"ArbitraryValues"}))}w.isMDXComponent=!0,w.layoutProps=h},59533:function(a,e,t){"use strict";t.d(e,{M:function(){return r}});var n=t(85893),s=t(6774);function r(a){var e=a.filename,t=a.children;return(0,n.jsxs)("div",{className:"mt-5 mb-8 first:mt-0 last:mb-0 pt-2 bg-slate-800 rounded-xl shadow-lg overflow-hidden dark:ring-1 dark:ring-white/10 dark:ring-inset",children:[(0,n.jsx)(s.n,{primary:{name:e},showTabMarkers:!1}),(0,n.jsx)("div",{className:"children:my-0 children:!shadow-none children:bg-transparent",children:t})]})}},83434:function(a,e,t){"use strict";t.d(e,{e:function(){return p}});var n=t(26042),s=t(85893),r=t(86010),o=t(2008),c=t(67294),i={none:"",md:"p-8"};function l(a){var e=a.as,t=a.style,o=a.padding,c=a.p,l=a.className,p=a.containerClassName,d=a.html,u=a.children,b=a.hint,m=a.hintClassName,k=a.lightOnly,g=void 0!==k&&k,v=null!=o?o:void 0===c?"md":c,f=i[v];if(void 0===f)throw Error("Invalid padding value: ".concat(JSON.stringify(v)));return(0,s.jsxs)("div",{className:p,children:[void 0!==b&&(0,s.jsx)("div",{className:(0,r.Z)(m,"not-prose mb-4"),children:(0,s.jsxs)("div",{className:"flex space-x-2",children:[(0,s.jsxs)("svg",{className:"flex-none w-5 h-5",viewBox:"0 0 20 20",fill:"none",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,s.jsx)("path",{d:"m9.813 9.25.346-5.138a1.276 1.276 0 0 0-2.54-.235L6.75 11.25 5.147 9.327a1.605 1.605 0 0 0-2.388-.085.018.018 0 0 0-.004.019l1.98 4.87a5 5 0 0 0 4.631 3.119h3.885a4 4 0 0 0 4-4v-1a3 3 0 0 0-3-3H9.813Z",className:"stroke-slate-400 dark:stroke-slate-300"}),(0,s.jsx)("path",{d:"M3 5s.35-.47 1.25-.828m9.516-.422c2.078.593 3.484 1.5 3.484 1.5",className:"stroke-slate-400 dark:stroke-sky-400"})]}),(0,s.jsx)("p",{className:"text-slate-700 text-sm font-medium dark:text-slate-200",children:b})]})}),(0,s.jsxs)(void 0===e?"div":e,{style:t,className:(0,r.Z)("not-prose relative bg-slate-50 rounded-xl overflow-hidden",!g&&"dark:bg-slate-800/25"),children:[(0,s.jsx)("div",{style:{backgroundPosition:"10px 10px"},className:(0,r.Z)("absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]",!g&&"dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]")}),(0,s.jsx)("div",(0,n.Z)({className:(0,r.Z)("relative rounded-xl overflow-auto",f,l)},d?{dangerouslySetInnerHTML:{__html:d}}:{children:u})),(0,s.jsx)("div",{className:(0,r.Z)("absolute inset-0 pointer-events-none border border-black/5 rounded-xl",!g&&"dark:border-white/5")})]})]})}function p(a){return a.resizable?(0,s.jsx)(d,(0,n.Z)({},a)):(0,s.jsx)(l,(0,n.Z)({},a))}function d(a){var e=(0,c.useRef)(),t=(0,o.c$)(0),r=(0,c.useRef)(),i=(0,c.useRef)();return(0,c.useEffect)(function(){var a=new window.ResizeObserver(function(){t.set(0)});return a.observe(e.current),function(){a.disconnect()}},[]),(0,c.useEffect)(function(){i.current.onselectstart=function(){return!1}},[]),(0,s.jsxs)("div",{ref:e,className:"relative",children:[(0,s.jsx)(l,(0,n.Z)({as:o.ww.div,style:{marginRight:(0,o.Hm)(t,function(a){return-a})}},a)),(0,s.jsx)("div",{ref:r,className:"absolute inset-y-0 right-[-1.375rem] left-80 ml-4 pointer-events-none",children:(0,s.jsx)(o.ww.div,{ref:i,drag:"x",_dragX:t,dragMomentum:!1,dragElastic:0,dragConstraints:r,className:"pointer-events-auto absolute top-1/2 right-0 -mt-6 p-2 hidden md:block cursor-ew-resize",style:{x:t},onDragStart:function(){document.documentElement.classList.add("dragging-ew")},onDragEnd:function(){document.documentElement.classList.remove("dragging-ew")},children:(0,s.jsx)("div",{className:"w-1.5 h-8 bg-slate-500/60 rounded-full"})})})]})}},73599:function(a,e,t){"use strict";t.d(e,{I:function(){return s}});var n=t(85893);function s(a){var e=a.defaultClass,t=a.element,s=a.children;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["To remove all of the backdrop filters on an element at once, use the"," ",(0,n.jsx)("code",{children:"backdrop-filter-none"})," utility:"]}),s||(0,n.jsx)("pre",{className:"language-html",children:(0,n.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">md:backdrop-filter-none</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,void 0===t?"div":t).replace("{defaultClass} ",e?"".concat(e," "):"")}})}),(0,n.jsx)("p",{children:"This can be useful when you want to remove backdrop filters conditionally, such as on hover or at a particular breakpoint."})]})}},6774:function(a,e,t){"use strict";t.d(e,{n:function(){return r}});var n=t(85893),s=t(86010);function r(a){var e=a.primary,t=a.secondary,r=a.showTabMarkers,o=a.side,c=a.translucent,i=a.children;return(0,n.jsxs)("div",{className:"flex text-slate-400 text-xs leading-6",children:[(0,n.jsxs)("div",{className:"flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center",children:[e.name,(void 0===r||r)&&(e.saved?(0,n.jsx)("svg",{viewBox:"0 0 4 4",className:"ml-2.5 flex-none w-1 h-1 text-slate-500 overflow-visible",children:(0,n.jsx)("path",{d:"M-1 -1L5 5M5 -1L-1 5",fill:"none",stroke:"currentColor",strokeLinecap:"round"})}):(0,n.jsx)("div",{className:"ml-2.5 flex-none w-1 h-1 rounded-full bg-current"}))]}),(0,n.jsxs)("div",{className:(0,s.Z)("flex-auto flex items-center bg-slate-700/50 border border-slate-500/30","left"===o?"rounded-tl lg:rounded-tr":"rounded-tl",void 0!==c&&c&&"dark:bg-slate-800/50"),children:[(void 0===t?[]:t).map(function(a){var e=a.name,t=a.open,r=a.className;return(0,n.jsx)("div",{className:(0,s.Z)("px-4 py-1 border-r border-slate-200/5",r,{italic:!(void 0===t||t)}),children:e},e)}),i&&(0,n.jsx)("div",{className:"flex-auto flex items-center justify-end px-4 space-x-4",children:i})]})]})}},29815:function(a,e,t){"use strict";t.d(e,{Z:function(){return o}});var n=t(20943),s=t(13375),r=t(91566);function o(a){return function(a){if(Array.isArray(a))return(0,n.Z)(a)}(a)||(0,s.Z)(a)||(0,r.Z)(a)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(a){a.O(0,[3430,8401,8555,2474,4713,4851,9774,2888,179],function(){return a(a.s=80929)}),_N_E=a.O()}]);