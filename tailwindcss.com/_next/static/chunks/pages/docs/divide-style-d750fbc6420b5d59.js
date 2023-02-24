(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2680],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return u}});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach(function(t){s(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var o=a.createContext({}),c=function(e){var t,n=a.useContext(o),s=n;return e&&(s="function"==typeof(t=e)?e(n):i(i({},n),e)),s},l=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef(function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,l=function(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}(e,["components","mdxType","originalType","parentName"]),p=c(n),u=p["".concat(o,".").concat(s)]||p[s]||d[s]||r;return n?a.createElement(u,i(i({ref:t},l),{},{components:n})):a.createElement(u,i({ref:t},l))});function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=Array(r);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},33594:function(e,t,n){"use strict";n.d(t,{EL:function(){return l}});var a,s=n(67294),r=["bottom","height","left","right","top","width"],i=new Map,o=function e(){var t=[];i.forEach(function(e,n){var a,s,i=n.getBoundingClientRect();a=i,s=e.rect,void 0===a&&(a={}),void 0===s&&(s={}),r.some(function(e){return a[e]!==s[e]})&&(e.rect=i,t.push(e))}),t.forEach(function(e){e.callbacks.forEach(function(t){return t(e.rect)})}),a=window.requestAnimationFrame(e)},c="undefined"!=typeof window&&window.document&&window.document.createElement?s.useLayoutEffect:s.useEffect;function l(e,t,n){"boolean"==typeof(r=t)?d=t:(d=null==(u=null==t?void 0:t.observe)||u,p=null==t?void 0:t.onChange),(l=n)&&"[object Function]"==({}).toString.call(l)&&(p=n);var r,l,d,p,u,m=(0,s.useState)(e.current),g=m[0],f=m[1],h=(0,s.useRef)(!1),k=(0,s.useRef)(!1),v=(0,s.useState)(null),b=v[0],N=v[1],y=(0,s.useRef)(p);return c(function(){y.current=p,e.current!==g&&f(e.current)}),c(function(){g&&!h.current&&(h.current=!0,N(g.getBoundingClientRect()))},[g]),c(function(){if(d){var t=g;if(k.current||(k.current=!0,t=e.current),t){var n,s,r=(n=t,s=function(e){null==y.current||y.current(e),N(e)},{observe:function(){var e=0===i.size;i.has(n)?i.get(n).callbacks.push(s):i.set(n,{rect:void 0,hasRectChanged:!1,callbacks:[s]}),e&&o()},unobserve:function(){var e=i.get(n);if(e){var t=e.callbacks.indexOf(s);t>=0&&e.callbacks.splice(t,1),e.callbacks.length||i.delete(n),i.size||cancelAnimationFrame(a)}}});return r.observe(),function(){r.unobserve()}}}},[d,g,e]),b}},25622:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/divide-style",function(){return n(61334)}])},61334:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var a=n(99534),s=n(67294),r=n(3905);n(41664);var i,o=n(5679),c=n(83434),l=n(53339),d=n(74296),p=n(75774),u=n(34879),m=l.L,g=function(e){return console.warn("Component Heading was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",Object.assign({},e))},f={Layout:m,classes:{utilities:{".divide-solid > :not([hidden]) ~ :not([hidden])":{"border-style":"solid"},".divide-dashed > :not([hidden]) ~ :not([hidden])":{"border-style":"dashed"},".divide-dotted > :not([hidden]) ~ :not([hidden])":{"border-style":"dotted"},".divide-double > :not([hidden]) ~ :not([hidden])":{"border-style":"double"},".divide-none > :not([hidden]) ~ :not([hidden])":{"border-style":"none"}},transformSelector:function(e){return(0,r.kt)(s.Fragment,null,e.split(">").shift().trim().replace(/^\./,"").replace(/\\/g,"")," ",(0,r.kt)("span",{className:"ml-1 text-purple-300"},"> * + *"))}},meta:{title:"Divide Style",description:"Utilities for controlling the border style between elements."},slug:"divide-style",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Set the divide style",slug:"set-the-divide-style",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]}]},h=d.X_;function k(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,r.kt)(h,Object.assign({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.X,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3}},"Basic usage"),(0,r.kt)(o.X,{level:3,id:"set-the-divide-style",nextElement:{type:"paragraph"}},"Set the divide style"),(0,r.kt)("p",null,"Control the border style between elements using the ",(0,r.kt)("inlineCode",{parentName:"p"},"divide-{style}")," utilities."),(0,r.kt)(c.e,{p:"none",containerClassName:"mt-4 -mb-3",html:'\n  <div class="grid grid-cols-1 divide-dashed divide-y font-mono text-sm text-center font-bold leading-6 shadow-lg overflow-hidden max-w-sm mx-auto dark:divide-slate-700">\n    <div class="p-4 text-slate-400 bg-white dark:bg-slate-800">01</div>\n    <div class="p-4 text-slate-400 bg-white dark:bg-slate-800">02</div>\n    <div class="p-4 text-slate-400 bg-white dark:bg-slate-800">03</div>\n  </div>\n'}),(0,r.kt)("pre",Object.assign({},{className:"language-html"}),(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"divide-y ",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"divide-dashed"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"01",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"02",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"03",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,r.kt)("hr",null),(0,r.kt)(g,{level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},ignore:!0,mdxType:"Heading"},"Applying conditionally"),(0,r.kt)(g,{level:3,id:"hover-focus-and-other-states",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Hover, focus, and other states"),(0,r.kt)(u.k,{defaultClass:"divide-y divide-dashed",featuredClass:"divide-solid",mdxType:"HoverFocusAndOtherStates"}),(0,r.kt)(g,{level:3,id:"breakpoints-and-media-queries",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Breakpoints and media queries"),(0,r.kt)(p.p,{defaultClass:"divide-y divide-dashed",featuredClass:"divide-solid",mdxType:"BreakpointsAndMediaQueries"}))}k.isMDXComponent=!0,k.layoutProps=f},75774:function(e,t,n){"use strict";n.d(t,{p:function(){return s}});var a=n(85893);function s(e){var t=e.defaultClass,n=e.featuredClass,s=e.element,r=e.children;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{children:["You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use ",(0,a.jsxs)("code",{children:["md:",n]})," to apply the ",(0,a.jsx)("code",{children:n})," utility at only medium screen sizes and above."]}),r||(0,a.jsx)("pre",{className:"language-html",children:(0,a.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">md:{featuredClass}</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,void 0===s?"div":s).replace("{defaultClass} ",t?"".concat(t," "):"").replace("{featuredClass}",n)}})}),(0,a.jsxs)("p",{children:["To learn more, check out the documentation on"," ",(0,a.jsx)("a",{href:"/docs/responsive-design",children:"Responsive Design"}),","," ",(0,a.jsx)("a",{href:"/docs/dark-mode",children:"Dark Mode"})," and"," ",(0,a.jsx)("a",{href:"/docs/hover-focus-and-other-states#media-queries",children:"other media query modifiers"}),"."]})]})}},83434:function(e,t,n){"use strict";n.d(t,{e:function(){return d}});var a=n(26042),s=n(85893),r=n(86010),i=n(2008),o=n(67294),c={none:"",md:"p-8"};function l(e){var t=e.as,n=e.style,i=e.padding,o=e.p,l=e.className,d=e.containerClassName,p=e.html,u=e.children,m=e.hint,g=e.hintClassName,f=e.lightOnly,h=void 0!==f&&f,k=null!=i?i:void 0===o?"md":o,v=c[k];if(void 0===v)throw Error("Invalid padding value: ".concat(JSON.stringify(k)));return(0,s.jsxs)("div",{className:d,children:[void 0!==m&&(0,s.jsx)("div",{className:(0,r.Z)(g,"not-prose mb-4"),children:(0,s.jsxs)("div",{className:"flex space-x-2",children:[(0,s.jsxs)("svg",{className:"flex-none w-5 h-5",viewBox:"0 0 20 20",fill:"none",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,s.jsx)("path",{d:"m9.813 9.25.346-5.138a1.276 1.276 0 0 0-2.54-.235L6.75 11.25 5.147 9.327a1.605 1.605 0 0 0-2.388-.085.018.018 0 0 0-.004.019l1.98 4.87a5 5 0 0 0 4.631 3.119h3.885a4 4 0 0 0 4-4v-1a3 3 0 0 0-3-3H9.813Z",className:"stroke-slate-400 dark:stroke-slate-300"}),(0,s.jsx)("path",{d:"M3 5s.35-.47 1.25-.828m9.516-.422c2.078.593 3.484 1.5 3.484 1.5",className:"stroke-slate-400 dark:stroke-sky-400"})]}),(0,s.jsx)("p",{className:"text-slate-700 text-sm font-medium dark:text-slate-200",children:m})]})}),(0,s.jsxs)(void 0===t?"div":t,{style:n,className:(0,r.Z)("not-prose relative bg-slate-50 rounded-xl overflow-hidden",!h&&"dark:bg-slate-800/25"),children:[(0,s.jsx)("div",{style:{backgroundPosition:"10px 10px"},className:(0,r.Z)("absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]",!h&&"dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]")}),(0,s.jsx)("div",(0,a.Z)({className:(0,r.Z)("relative rounded-xl overflow-auto",v,l)},p?{dangerouslySetInnerHTML:{__html:p}}:{children:u})),(0,s.jsx)("div",{className:(0,r.Z)("absolute inset-0 pointer-events-none border border-black/5 rounded-xl",!h&&"dark:border-white/5")})]})]})}function d(e){return e.resizable?(0,s.jsx)(p,(0,a.Z)({},e)):(0,s.jsx)(l,(0,a.Z)({},e))}function p(e){var t=(0,o.useRef)(),n=(0,i.c$)(0),r=(0,o.useRef)(),c=(0,o.useRef)();return(0,o.useEffect)(function(){var e=new window.ResizeObserver(function(){n.set(0)});return e.observe(t.current),function(){e.disconnect()}},[]),(0,o.useEffect)(function(){c.current.onselectstart=function(){return!1}},[]),(0,s.jsxs)("div",{ref:t,className:"relative",children:[(0,s.jsx)(l,(0,a.Z)({as:i.ww.div,style:{marginRight:(0,i.Hm)(n,function(e){return-e})}},e)),(0,s.jsx)("div",{ref:r,className:"absolute inset-y-0 right-[-1.375rem] left-80 ml-4 pointer-events-none",children:(0,s.jsx)(i.ww.div,{ref:c,drag:"x",_dragX:n,dragMomentum:!1,dragElastic:0,dragConstraints:r,className:"pointer-events-auto absolute top-1/2 right-0 -mt-6 p-2 hidden md:block cursor-ew-resize",style:{x:n},onDragStart:function(){document.documentElement.classList.add("dragging-ew")},onDragEnd:function(){document.documentElement.classList.remove("dragging-ew")},children:(0,s.jsx)("div",{className:"w-1.5 h-8 bg-slate-500/60 rounded-full"})})})]})}},34879:function(e,t,n){"use strict";n.d(t,{k:function(){return s}});var a=n(85893);function s(e){e.property,e.utility;var t=e.variant,n=void 0===t?"hover":t,s=e.defaultClass,r=e.featuredClass,i=e.element,o=e.children;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{children:["Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use"," ",(0,a.jsxs)("code",{children:[n,":",r]})," ","to only apply the ",(0,a.jsx)("code",{children:r})," utility on ",n,"."]}),o||(0,a.jsx)("pre",{className:"language-html",children:(0,a.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">{variant}:{featuredClass}</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,void 0===i?"div":i).replace("{defaultClass} ",s?"".concat(s," "):"").replace("{variant}",n).replace("{featuredClass}",r)}})}),(0,a.jsxs)("p",{children:["For a complete list of all available state modifiers, check out the"," ",(0,a.jsx)("a",{href:"/docs/hover-focus-and-other-states",children:"Hover, Focus, & Other States"})," documentation."]})]})}},53339:function(e,t,n){"use strict";n.d(t,{L:function(){return c}});var a=n(26042),s=n(85893),r=n(21744),i=n(99440),o=n(54713);function c(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.Dx,{children:e.layoutProps.meta.metaTitle||e.layoutProps.meta.title}),(0,s.jsx)(r.C,(0,a.Z)({nav:o.u},e))]})}c.nav=o.u},29815:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(20943),s=n(13375),r=n(91566);function i(e){return function(e){if(Array.isArray(e))return(0,a.Z)(e)}(e)||(0,s.Z)(e)||(0,r.Z)(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(e){e.O(0,[3430,8401,8555,2474,4713,9774,2888,179],function(){return e(e.s=25622)}),_N_E=e.O()}]);