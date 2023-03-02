(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6317],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach(function(t){s(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var o=a.createContext({}),i=function(e){var t,n=a.useContext(o),s=n;return e&&(s="function"==typeof(t=e)?e(n):c(c({},n),e)),s},p=function(e){var t=i(e.components);return a.createElement(o.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef(function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,p=function(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}(e,["components","mdxType","originalType","parentName"]),m=i(n),d=m["".concat(o,".").concat(s)]||m[s]||l[s]||r;return n?a.createElement(d,c(c({ref:t},p),{},{components:n})):a.createElement(d,c({ref:t},p))});function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,c=Array(r);c[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:s,c[1]=o;for(var p=2;p<r;p++)c[p]=n[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33594:function(e,t,n){"use strict";n.d(t,{EL:function(){return p}});var a,s=n(67294),r=["bottom","height","left","right","top","width"],c=new Map,o=function e(){var t=[];c.forEach(function(e,n){var a,s,c=n.getBoundingClientRect();a=c,s=e.rect,void 0===a&&(a={}),void 0===s&&(s={}),r.some(function(e){return a[e]!==s[e]})&&(e.rect=c,t.push(e))}),t.forEach(function(e){e.callbacks.forEach(function(t){return t(e.rect)})}),a=window.requestAnimationFrame(e)},i="undefined"!=typeof window&&window.document&&window.document.createElement?s.useLayoutEffect:s.useEffect;function p(e,t,n){"boolean"==typeof(r=t)?l=t:(l=null==(d=null==t?void 0:t.observe)||d,m=null==t?void 0:t.onChange),(p=n)&&"[object Function]"==({}).toString.call(p)&&(m=n);var r,p,l,m,d,u=(0,s.useState)(e.current),k=u[0],g=u[1],N=(0,s.useRef)(!1),b=(0,s.useRef)(!1),j=(0,s.useState)(null),f=j[0],O=j[1],h=(0,s.useRef)(m);return i(function(){h.current=m,e.current!==k&&g(e.current)}),i(function(){k&&!N.current&&(N.current=!0,O(k.getBoundingClientRect()))},[k]),i(function(){if(l){var t=k;if(b.current||(b.current=!0,t=e.current),t){var n,s,r=(n=t,s=function(e){null==h.current||h.current(e),O(e)},{observe:function(){var e=0===c.size;c.has(n)?c.get(n).callbacks.push(s):c.set(n,{rect:void 0,hasRectChanged:!1,callbacks:[s]}),e&&o()},unobserve:function(){var e=c.get(n);if(e){var t=e.callbacks.indexOf(s);t>=0&&e.callbacks.splice(t,1),e.callbacks.length||c.delete(n),c.size||cancelAnimationFrame(a)}}});return r.observe(),function(){r.unobserve()}}}},[l,k,e]),f}},73857:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/customizing-spacing",function(){return n(21992)}])},21992:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var a=n(99534);n(67294);var s=n(3905),r=n(41664),c=n.n(r),o=n(59533),i=n(5679),p=n(53339),l=n(74296),m=n(85893),d=n(6681),u=Object.keys(d.Z.theme.spacing).map(function(e){return{name:e,size:d.Z.theme.spacing[e],pixels:parseFloat(d.Z.theme.spacing[e])*(String(d.Z.theme.spacing[e]).endsWith("rem")?16:1)}}).sort(function(e,t){return e.pixels-t.pixels});function k(){return(0,m.jsx)("div",{className:"prose prose-slate dark:prose-dark",children:(0,m.jsxs)("table",{children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{children:"Name"}),(0,m.jsx)("th",{children:"Size"}),(0,m.jsx)("th",{children:"Pixels"}),(0,m.jsx)("th",{className:"hidden sm:table-cell",children:(0,m.jsx)("span",{className:"sr-only",children:"Preview"})})]})}),(0,m.jsx)("tbody",{children:u.map(function(e){var t=e.name,n=e.size,a=e.pixels;return(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{children:t}),(0,m.jsx)("td",{children:n}),(0,m.jsxs)("td",{children:[a,"px"]}),(0,m.jsx)("td",{className:"hidden sm:table-cell",children:(0,m.jsx)("div",{className:"h-4 bg-cyan-400",style:{width:n}})})]},t)})})]})})}var g,N={Layout:p.L,meta:{title:"Customizing Spacing",shortTitle:"Spacing",description:"Customizing the default spacing and sizing scale for your project."},slug:"customizing-spacing",tableOfContents:[{title:"Extending the default spacing scale",slug:"extending-the-default-spacing-scale",children:[]},{title:"Overriding the default spacing scale",slug:"overriding-the-default-spacing-scale",children:[]},{title:"Default spacing scale",slug:"default-spacing-scale",children:[]}]},b=l.X_;function j(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,s.kt)(b,Object.assign({},N,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"spacing")," key in the ",(0,s.kt)("inlineCode",{parentName:"p"},"theme")," section of your ",(0,s.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file to customize Tailwind’s ",(0,s.kt)("a",Object.assign({parentName:"p"},{href:"#default-spacing-scale"}),"default spacing/sizing scale"),"."),(0,s.kt)(o.M,{filename:"tailwind.config.js"},(0,s.kt)("pre",Object.assign({},{className:"language-js"}),(0,s.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"module",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token property-access"}),"exports")," ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token literal-property property"}),"theme"),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token literal-property property"}),"spacing"),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n      ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token string-property property"}),"'1'"),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'8px'"),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n      ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token string-property property"}),"'2'"),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'12px'"),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n      ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token string-property property"}),"'3'"),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'16px'"),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n      ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token string-property property"}),"'4'"),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'24px'"),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n      ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token string-property property"}),"'5'"),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'32px'"),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n      ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token string-property property"}),"'6'"),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'48px'"),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")))),(0,s.kt)("p",null,"By default the spacing scale is inherited by the ",(0,s.kt)("inlineCode",{parentName:"p"},"padding"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"margin"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"width"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"height"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"maxHeight"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"gap"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"inset"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"space"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"translate")," core plugins."),(0,s.kt)("hr",null),(0,s.kt)(i.X,{level:2,id:"extending-the-default-spacing-scale",nextElement:{type:"paragraph"}},"Extending the default spacing scale"),(0,s.kt)("p",null,"As described in the ",(0,s.kt)(c(),{href:"/docs/theme#extending-the-default-theme",passHref:!0},(0,s.kt)("a",null,"theme documentation")),", if you’d like to extend the default spacing scale, you can do so using the ",(0,s.kt)("inlineCode",{parentName:"p"},"theme.extend.spacing")," section of your ",(0,s.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file:"),(0,s.kt)(o.M,{filename:"tailwind.config.js"},(0,s.kt)("pre",Object.assign({},{className:"language-js"}),(0,s.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"module",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token property-access"}),"exports")," ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token literal-property property"}),"theme"),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token literal-property property"}),"extend"),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n      ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token literal-property property"}),"spacing"),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token string-property property"}),"'13'"),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'3.25rem'"),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n        ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token string-property property"}),"'15'"),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'3.75rem'"),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n        ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token string-property property"}),"'128'"),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'32rem'"),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n        ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token string-property property"}),"'144'"),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'36rem'"),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n      ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n    ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")))),(0,s.kt)("p",null,"This will generate classes like ",(0,s.kt)("inlineCode",{parentName:"p"},"p-13"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"m-15"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"h-128")," in addition to all of Tailwind’s default spacing/sizing utilities."),(0,s.kt)("hr",null),(0,s.kt)(i.X,{level:2,id:"overriding-the-default-spacing-scale",nextElement:{type:"paragraph"}},"Overriding the default spacing scale"),(0,s.kt)("p",null,"As described in the ",(0,s.kt)(c(),{href:"/docs/theme#overriding-the-default-theme",passHref:!0},(0,s.kt)("a",null,"theme documentation")),", if you’d like to override the default spacing scale, you can do so using the ",(0,s.kt)("inlineCode",{parentName:"p"},"theme.spacing")," section of your ",(0,s.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file:"),(0,s.kt)(o.M,{filename:"tailwind.config.js"},(0,s.kt)("pre",Object.assign({},{className:"language-js"}),(0,s.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"module",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token property-access"}),"exports")," ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token literal-property property"}),"theme"),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token literal-property property"}),"spacing"),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n      ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token literal-property property"}),"sm"),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'8px'"),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n      ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token literal-property property"}),"md"),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'12px'"),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n      ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token literal-property property"}),"lg"),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'16px'"),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n      ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token literal-property property"}),"xl"),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'24px'"),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")))),(0,s.kt)("p",null,"This will disable Tailwind’s default spacing scale and generate classes like ",(0,s.kt)("inlineCode",{parentName:"p"},"p-sm"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"m-md"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"w-lg"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"h-xl")," instead."),(0,s.kt)("hr",null),(0,s.kt)(i.X,{level:2,id:"default-spacing-scale",nextElement:{type:"paragraph"}},"Default spacing scale"),(0,s.kt)("p",null,"By default, Tailwind includes a generous and comprehensive numeric spacing scale. The values are proportional, so ",(0,s.kt)("inlineCode",{parentName:"p"},"16")," is twice as much spacing as ",(0,s.kt)("inlineCode",{parentName:"p"},"8")," for example. One spacing unit is equal to ",(0,s.kt)("inlineCode",{parentName:"p"},"0.25rem"),", which translates to ",(0,s.kt)("inlineCode",{parentName:"p"},"4px")," by default in common browsers."),(0,s.kt)(k,{mdxType:"SpacingScale"}))}j.isMDXComponent=!0,j.layoutProps=N},59533:function(e,t,n){"use strict";n.d(t,{M:function(){return r}});var a=n(85893),s=n(6774);function r(e){var t=e.filename,n=e.children;return(0,a.jsxs)("div",{className:"mt-5 mb-8 first:mt-0 last:mb-0 pt-2 bg-slate-800 rounded-xl shadow-lg overflow-hidden dark:ring-1 dark:ring-white/10 dark:ring-inset",children:[(0,a.jsx)(s.n,{primary:{name:t},showTabMarkers:!1}),(0,a.jsx)("div",{className:"children:my-0 children:!shadow-none children:bg-transparent",children:n})]})}},6774:function(e,t,n){"use strict";n.d(t,{n:function(){return r}});var a=n(85893),s=n(86010);function r(e){var t=e.primary,n=e.secondary,r=e.showTabMarkers,c=e.side,o=e.translucent,i=e.children;return(0,a.jsxs)("div",{className:"flex text-slate-400 text-xs leading-6",children:[(0,a.jsxs)("div",{className:"flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center",children:[t.name,(void 0===r||r)&&(t.saved?(0,a.jsx)("svg",{viewBox:"0 0 4 4",className:"ml-2.5 flex-none w-1 h-1 text-slate-500 overflow-visible",children:(0,a.jsx)("path",{d:"M-1 -1L5 5M5 -1L-1 5",fill:"none",stroke:"currentColor",strokeLinecap:"round"})}):(0,a.jsx)("div",{className:"ml-2.5 flex-none w-1 h-1 rounded-full bg-current"}))]}),(0,a.jsxs)("div",{className:(0,s.Z)("flex-auto flex items-center bg-slate-700/50 border border-slate-500/30","left"===c?"rounded-tl lg:rounded-tr":"rounded-tl",void 0!==o&&o&&"dark:bg-slate-800/50"),children:[(void 0===n?[]:n).map(function(e){var t=e.name,n=e.open,r=e.className;return(0,a.jsx)("div",{className:(0,s.Z)("px-4 py-1 border-r border-slate-200/5",r,{italic:!(void 0===n||n)}),children:t},t)}),i&&(0,a.jsx)("div",{className:"flex-auto flex items-center justify-end px-4 space-x-4",children:i})]})]})}},53339:function(e,t,n){"use strict";n.d(t,{L:function(){return i}});var a=n(26042),s=n(85893),r=n(21744),c=n(99440),o=n(54713);function i(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.Dx,{children:e.layoutProps.meta.metaTitle||e.layoutProps.meta.title}),(0,s.jsx)(r.C,(0,a.Z)({nav:o.u},e))]})}i.nav=o.u}},function(e){e.O(0,[8844,8555,2474,4713,9774,2888,179],function(){return e(e.s=73857)}),_N_E=e.O()}]);