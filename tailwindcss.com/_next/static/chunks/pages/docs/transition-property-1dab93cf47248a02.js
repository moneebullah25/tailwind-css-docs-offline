(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6846],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return m}});var a=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach(function(n){s(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var o=a.createContext({}),c=function(e){var n,t=a.useContext(o),s=t;return e&&(s="function"==typeof(n=e)?e(t):i(i({},t),e)),s},l=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef(function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,l=function(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}(e,["components","mdxType","originalType","parentName"]),u=c(t),m=u["".concat(o,".").concat(s)]||u[s]||p[s]||r;return t?a.createElement(m,i(i({ref:n},l),{},{components:t})):a.createElement(m,i({ref:n},l))});function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,i=Array(r);i[0]=u;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var l=2;l<r;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},33594:function(e,n,t){"use strict";t.d(n,{EL:function(){return l}});var a,s=t(67294),r=["bottom","height","left","right","top","width"],i=new Map,o=function e(){var n=[];i.forEach(function(e,t){var a,s,i=t.getBoundingClientRect();a=i,s=e.rect,void 0===a&&(a={}),void 0===s&&(s={}),r.some(function(e){return a[e]!==s[e]})&&(e.rect=i,n.push(e))}),n.forEach(function(e){e.callbacks.forEach(function(n){return n(e.rect)})}),a=window.requestAnimationFrame(e)},c="undefined"!=typeof window&&window.document&&window.document.createElement?s.useLayoutEffect:s.useEffect;function l(e,n,t){"boolean"==typeof(r=n)?p=n:(p=null==(m=null==n?void 0:n.observe)||m,u=null==n?void 0:n.onChange),(l=t)&&"[object Function]"==({}).toString.call(l)&&(u=t);var r,l,p,u,m,d=(0,s.useState)(e.current),g=d[0],k=d[1],b=(0,s.useRef)(!1),N=(0,s.useRef)(!1),f=(0,s.useState)(null),h=f[0],j=f[1],v=(0,s.useRef)(u);return c(function(){v.current=u,e.current!==g&&k(e.current)}),c(function(){g&&!b.current&&(b.current=!0,j(g.getBoundingClientRect()))},[g]),c(function(){if(p){var n=g;if(N.current||(N.current=!0,n=e.current),n){var t,s,r=(t=n,s=function(e){null==v.current||v.current(e),j(e)},{observe:function(){var e=0===i.size;i.has(t)?i.get(t).callbacks.push(s):i.set(t,{rect:void 0,hasRectChanged:!1,callbacks:[s]}),e&&o()},unobserve:function(){var e=i.get(t);if(e){var n=e.callbacks.indexOf(s);n>=0&&e.callbacks.splice(n,1),e.callbacks.length||i.delete(t),i.size||cancelAnimationFrame(a)}}});return r.observe(),function(){r.unobserve()}}}},[p,g,e]),h}},92189:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/transition-property",function(){return t(47558)}])},47558:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return j}});var a=t(99534);t(67294);var s,r=t(3905),i=t(41664),o=t.n(i),c=t(59533),l=t(5679),p=t(83434),u=t(53339),m=t(74296),d=t(68517),g=t(1637),k=t(76098),b=u.L,N=function(e){return console.warn("Component Heading was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",Object.assign({},e))},f={Layout:b,classes:{utilities:{".transition-none":{"transition-property":"none"},".transition-all":{"transition-property":"all","transition-timing-function":"cubic-bezier(0.4, 0, 0.2, 1)","transition-duration":"150ms"},".transition":{"transition-property":"color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter","transition-timing-function":"cubic-bezier(0.4, 0, 0.2, 1)","transition-duration":"150ms"},".transition-colors":{"transition-property":"color, background-color, border-color, text-decoration-color, fill, stroke","transition-timing-function":"cubic-bezier(0.4, 0, 0.2, 1)","transition-duration":"150ms"},".transition-opacity":{"transition-property":"opacity","transition-timing-function":"cubic-bezier(0.4, 0, 0.2, 1)","transition-duration":"150ms"},".transition-shadow":{"transition-property":"box-shadow","transition-timing-function":"cubic-bezier(0.4, 0, 0.2, 1)","transition-duration":"150ms"},".transition-transform":{"transition-property":"transform","transition-timing-function":"cubic-bezier(0.4, 0, 0.2, 1)","transition-duration":"150ms"}}},meta:{title:"Transition Property",description:"Utilities for controlling which CSS properties transition."},slug:"transition-property",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Controlling transitioned properties",slug:"controlling-transitioned-properties",children:[]},{title:"Prefers-reduced-motion",slug:"prefers-reduced-motion",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]},h=m.X_;function j(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,r.kt)(h,Object.assign({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(l.X,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3}},"Basic usage"),(0,r.kt)(l.X,{level:3,id:"controlling-transitioned-properties",nextElement:{type:"paragraph"}},"Controlling transitioned properties"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"transition-{properties}")," utilities to specify which properties should transition when they change."),(0,r.kt)(p.e,{hint:"Hover the button to see the expected behaviour",containerClassName:"mt-4 -mb-3",html:'\n  <div class="flex justify-around text-white text-sm font-bold leading-6">\n    <button class="px-4 py-2 font-semibold text-sm bg-blue-500 text-white rounded-md shadow-sm hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ease-in-out delay-150 duration-300">\n      Save Changes\n    </button>\n  </div>\n'}),(0,r.kt)("pre",Object.assign({},{className:"language-html"}),(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"transition")," ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  Save Changes\n",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"button"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,r.kt)(l.X,{level:3,id:"prefers-reduced-motion",nextElement:{type:"paragraph"}},"Prefers-reduced-motion"),(0,r.kt)("p",null,"For situations where the user has specified that they prefer reduced motion, you can conditionally apply animations and transitions using the ",(0,r.kt)("inlineCode",{parentName:"p"},"motion-safe")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"motion-reduce")," variants:"),(0,r.kt)("pre",Object.assign({},{className:"language-html"}),(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"transition transform hover:-translate-y-1 ",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"motion-reduce:transition-none motion-reduce:hover:transform-none")," ...",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  Hover me\n",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"button"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,r.kt)("hr",null),(0,r.kt)(N,{level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},ignore:!0,mdxType:"Heading"},"Applying conditionally"),(0,r.kt)(N,{level:3,id:"hover-focus-and-other-states",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Hover, focus, and other states"),(0,r.kt)(k.k,{featuredClass:"transition-all",mdxType:"HoverFocusAndOtherStates"}),(0,r.kt)(N,{level:3,id:"breakpoints-and-media-queries",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Breakpoints and media queries"),(0,r.kt)(g.p,{featuredClass:"transition-all",mdxType:"BreakpointsAndMediaQueries"}),(0,r.kt)("hr",null),(0,r.kt)(l.X,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3}},"Using custom values"),(0,r.kt)(l.X,{level:3,id:"customizing-your-theme",nextElement:{type:"paragraph"}},"Customizing your theme"),(0,r.kt)("p",null,"By default, Tailwind provides transition-property utilities for seven common property combinations. You can customize these values by editing ",(0,r.kt)("inlineCode",{parentName:"p"},"theme.transitionProperty")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"theme.extend.transitionProperty")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),(0,r.kt)(c.M,{filename:"tailwind.config.js"},(0,r.kt)("pre",Object.assign({},{className:"language-diff-js"}),(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-diff-js"}),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"module"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"."),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token property-access"}),"exports"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),"="),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token literal-property property"}),"theme"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"    "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token literal-property property"}),"extend"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token literal-property property"}),"transitionProperty"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"        "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token string-property property"}),"'height'"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'height'"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),","),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"        "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token string-property property"}),"'spacing'"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'margin, padding'"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),","),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"    "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),"\n")))),(0,r.kt)("p",null,"Learn more about customizing the default theme in the ",(0,r.kt)(o(),{href:"/docs/theme#customizing-the-default-theme",passHref:!0},(0,r.kt)("a",null,"theme customization"))," documentation."),(0,r.kt)(l.X,{level:3,id:"arbitrary-values",nextElement:{type:"jsx"}},"Arbitrary values"),(0,r.kt)(d.k,{property:"transition-property",featuredClass:"transition-[height]",mdxType:"ArbitraryValues"}))}j.isMDXComponent=!0,j.layoutProps=f},59533:function(e,n,t){"use strict";t.d(n,{M:function(){return r}});var a=t(85893),s=t(6774);function r(e){var n=e.filename,t=e.children;return(0,a.jsxs)("div",{className:"mt-5 mb-8 first:mt-0 last:mb-0 pt-2 bg-slate-800 rounded-xl shadow-lg overflow-hidden dark:ring-1 dark:ring-white/10 dark:ring-inset",children:[(0,a.jsx)(s.n,{primary:{name:n},showTabMarkers:!1}),(0,a.jsx)("div",{className:"children:my-0 children:!shadow-none children:bg-transparent",children:t})]})}},83434:function(e,n,t){"use strict";t.d(n,{e:function(){return p}});var a=t(26042),s=t(85893),r=t(86010),i=t(10332),o=t(67294),c={none:"",md:"p-8"};function l(e){var n=e.as,t=e.style,i=e.padding,o=e.p,l=e.className,p=e.containerClassName,u=e.html,m=e.children,d=e.hint,g=e.hintClassName,k=e.lightOnly,b=void 0!==k&&k,N=null!=i?i:void 0===o?"md":o,f=c[N];if(void 0===f)throw Error("Invalid padding value: ".concat(JSON.stringify(N)));return(0,s.jsxs)("div",{className:p,children:[void 0!==d&&(0,s.jsx)("div",{className:(0,r.Z)(g,"not-prose mb-4"),children:(0,s.jsxs)("div",{className:"flex space-x-2",children:[(0,s.jsxs)("svg",{className:"flex-none w-5 h-5",viewBox:"0 0 20 20",fill:"none",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,s.jsx)("path",{d:"m9.813 9.25.346-5.138a1.276 1.276 0 0 0-2.54-.235L6.75 11.25 5.147 9.327a1.605 1.605 0 0 0-2.388-.085.018.018 0 0 0-.004.019l1.98 4.87a5 5 0 0 0 4.631 3.119h3.885a4 4 0 0 0 4-4v-1a3 3 0 0 0-3-3H9.813Z",className:"stroke-slate-400 dark:stroke-slate-300"}),(0,s.jsx)("path",{d:"M3 5s.35-.47 1.25-.828m9.516-.422c2.078.593 3.484 1.5 3.484 1.5",className:"stroke-slate-400 dark:stroke-sky-400"})]}),(0,s.jsx)("p",{className:"text-slate-700 text-sm font-medium dark:text-slate-200",children:d})]})}),(0,s.jsxs)(void 0===n?"div":n,{style:t,className:(0,r.Z)("not-prose relative bg-slate-50 rounded-xl overflow-hidden",!b&&"dark:bg-slate-800/25"),children:[(0,s.jsx)("div",{style:{backgroundPosition:"10px 10px"},className:(0,r.Z)("absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]",!b&&"dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]")}),(0,s.jsx)("div",(0,a.Z)({className:(0,r.Z)("relative rounded-xl overflow-auto",f,l)},u?{dangerouslySetInnerHTML:{__html:u}}:{children:m})),(0,s.jsx)("div",{className:(0,r.Z)("absolute inset-0 pointer-events-none border border-black/5 rounded-xl",!b&&"dark:border-white/5")})]})]})}function p(e){return e.resizable?(0,s.jsx)(u,(0,a.Z)({},e)):(0,s.jsx)(l,(0,a.Z)({},e))}function u(e){var n=(0,o.useRef)(),t=(0,i.c$)(0),r=(0,o.useRef)(),c=(0,o.useRef)();return(0,o.useEffect)(function(){var e=new window.ResizeObserver(function(){t.set(0)});return e.observe(n.current),function(){e.disconnect()}},[]),(0,o.useEffect)(function(){c.current.onselectstart=function(){return!1}},[]),(0,s.jsxs)("div",{ref:n,className:"relative",children:[(0,s.jsx)(l,(0,a.Z)({as:i.ww.div,style:{marginRight:(0,i.Hm)(t,function(e){return-e})}},e)),(0,s.jsx)("div",{ref:r,className:"absolute inset-y-0 right-[-1.375rem] left-80 ml-4 pointer-events-none",children:(0,s.jsx)(i.ww.div,{ref:c,drag:"x",_dragX:t,dragMomentum:!1,dragElastic:0,dragConstraints:r,className:"pointer-events-auto absolute top-1/2 right-0 -mt-6 p-2 hidden md:block cursor-ew-resize",style:{x:t},onDragStart:function(){document.documentElement.classList.add("dragging-ew")},onDragEnd:function(){document.documentElement.classList.remove("dragging-ew")},children:(0,s.jsx)("div",{className:"w-1.5 h-8 bg-slate-500/60 rounded-full"})})})]})}},6774:function(e,n,t){"use strict";t.d(n,{n:function(){return r}});var a=t(85893),s=t(86010);function r(e){var n=e.primary,t=e.secondary,r=e.showTabMarkers,i=e.side,o=e.translucent,c=e.children;return(0,a.jsxs)("div",{className:"flex text-slate-400 text-xs leading-6",children:[(0,a.jsxs)("div",{className:"flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center",children:[n.name,(void 0===r||r)&&(n.saved?(0,a.jsx)("svg",{viewBox:"0 0 4 4",className:"ml-2.5 flex-none w-1 h-1 text-slate-500 overflow-visible",children:(0,a.jsx)("path",{d:"M-1 -1L5 5M5 -1L-1 5",fill:"none",stroke:"currentColor",strokeLinecap:"round"})}):(0,a.jsx)("div",{className:"ml-2.5 flex-none w-1 h-1 rounded-full bg-current"}))]}),(0,a.jsxs)("div",{className:(0,s.Z)("flex-auto flex items-center bg-slate-700/50 border border-slate-500/30","left"===i?"rounded-tl lg:rounded-tr":"rounded-tl",void 0!==o&&o&&"dark:bg-slate-800/50"),children:[(void 0===t?[]:t).map(function(e){var n=e.name,t=e.open,r=e.className;return(0,a.jsx)("div",{className:(0,s.Z)("px-4 py-1 border-r border-slate-200/5",r,{italic:!(void 0===t||t)}),children:n},n)}),c&&(0,a.jsx)("div",{className:"flex-auto flex items-center justify-end px-4 space-x-4",children:c})]})]})}},29815:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var a=t(20943),s=t(13375),r=t(91566);function i(e){return function(e){if(Array.isArray(e))return(0,a.Z)(e)}(e)||(0,s.Z)(e)||(0,r.Z)(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(e){e.O(0,[3430,4021,8555,2474,4713,5531,9774,2888,179],function(){return e(e.s=92189)}),_N_E=e.O()}]);