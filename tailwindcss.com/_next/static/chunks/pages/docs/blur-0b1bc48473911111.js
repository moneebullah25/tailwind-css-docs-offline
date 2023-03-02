(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1475],{77140:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/blur",function(){return t(29078)}])},29078:function(a,e,t){"use strict";t.r(e),t.d(e,{default:function(){return O}});var n=t(99534),s=t(828);t(67294);var r,p=t(3905),i=t(41664),l=t.n(i),c=t(59533),o=t(5679),m=t(83434),u=t(53339),g=t(74296),k=t(68517),b=t(1637),N=t(76098),d=t(63316),v=u.L,j=function(a){return console.warn("Component Heading was not imported, exported, or provided by MDXProvider as global scope"),(0,p.kt)("div",Object.assign({},a))},h={Layout:v,classes:{utilities:{".blur-0":{"--tw-blur":"blur(0)",filter:"var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"},".blur-none":{"--tw-blur":"blur(0)",filter:"var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"},".blur-sm":{"--tw-blur":"blur(4px)",filter:"var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"},".blur":{"--tw-blur":"blur(8px)",filter:"var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"},".blur-md":{"--tw-blur":"blur(12px)",filter:"var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"},".blur-lg":{"--tw-blur":"blur(16px)",filter:"var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"},".blur-xl":{"--tw-blur":"blur(24px)",filter:"var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"},".blur-2xl":{"--tw-blur":"blur(40px)",filter:"var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"},".blur-3xl":{"--tw-blur":"blur(64px)",filter:"var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"}},filterRules:function(a){return".blur-0"!==(0,s.Z)(a,1)[0]},transformProperties:function(a){return{filter:a.properties["--tw-blur"]}}},meta:{title:"Blur",description:"Utilities for applying blur filters to an element."},slug:"blur",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Blurring elements",slug:"blurring-elements",children:[]},{title:"Removing filters",slug:"removing-filters",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]},w=g.X_;function O(a){var e=a.components,t=(0,n.Z)(a,["components"]);return(0,p.kt)(w,Object.assign({},h,t,{components:e,mdxType:"MDXLayout"}),(0,p.kt)(o.X,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3}},"Basic usage"),(0,p.kt)(o.X,{level:3,id:"blurring-elements",nextElement:{type:"paragraph"}},"Blurring elements"),(0,p.kt)("p",null,"Use the ",(0,p.kt)("inlineCode",{parentName:"p"},"blur-{amount?}")," utilities to blur an element."),(0,p.kt)(m.e,{p:"none",containerClassName:"mt-4 -mb-3",html:'\n  <div class="flex sm:block overflow-scroll sm:overflow-visible scroll-p-8">\n    <div class="flex items-center justify-around gap-12 sm:gap-4 font-mono font-bold shrink-0 p-8">\n      <div class="flex flex-col items-center shrink-0">\n        <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">blur-none</p>\n        <div class="relative blur-none">\n          <img class="w-24 h-24 object-cover rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80" />\n          <div class="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>\n        </div>\n      </div>\n      <div class="flex flex-col items-center shrink-0">\n        <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">blur-sm</p>\n        <div class="relative blur-sm">\n          <img class="w-24 h-24 object-cover rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80" />\n          <div class="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>\n        </div>\n      </div>\n      <div class="flex flex-col items-center shrink-0">\n        <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">blur-lg</p>\n        <div class="relative blur-lg">\n          <img class="w-24 h-24 object-cover rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80" />\n          <div class="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>\n        </div>\n      </div>\n      <div class="flex flex-col items-center shrink-0">\n        <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">blur-2xl</p>\n        <div class="relative blur-2xl">\n          <img class="w-24 h-24 object-cover rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80" />\n          <div class="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n'}),(0,p.kt)("pre",Object.assign({},{className:"language-html"}),(0,p.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"blur-none")," ...",(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n",(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"blur-sm")," ...",(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n",(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"blur-lg")," ...",(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n",(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"blur-2xl")," ...",(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n",(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,p.kt)(o.X,{level:3,id:"removing-filters",nextElement:{type:"jsx"}},"Removing filters"),(0,p.kt)(d.R,{defaultClass:"blur-md invert brightness-150",mdxType:"RemovingFilters"}),(0,p.kt)("hr",null),(0,p.kt)(j,{level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},ignore:!0,mdxType:"Heading"},"Applying conditionally"),(0,p.kt)(j,{level:3,id:"hover-focus-and-other-states",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Hover, focus, and other states"),(0,p.kt)(N.k,{defaultClass:"blur",featuredClass:"blur-lg",mdxType:"HoverFocusAndOtherStates"}),(0,p.kt)(j,{level:3,id:"breakpoints-and-media-queries",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Breakpoints and media queries"),(0,p.kt)(b.p,{defaultClass:"blur",featuredClass:"blur-lg",mdxType:"BreakpointsAndMediaQueries"}),(0,p.kt)("hr",null),(0,p.kt)(o.X,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3}},"Using custom values"),(0,p.kt)(o.X,{level:3,id:"customizing-your-theme",nextElement:{type:"paragraph"}},"Customizing your theme"),(0,p.kt)("p",null,"By default, Tailwind includes a handful of general purpose ",(0,p.kt)("inlineCode",{parentName:"p"},"blur")," utilities. You can customize these values by editing ",(0,p.kt)("inlineCode",{parentName:"p"},"theme.blur")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"theme.extend.blur")," in your ",(0,p.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),(0,p.kt)(c.M,{filename:"tailwind.config.js"},(0,p.kt)("pre",Object.assign({},{className:"language-diff-js"}),(0,p.kt)("code",Object.assign({parentName:"pre"},{className:"language-diff-js"}),(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"module"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"."),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token property-access"}),"exports"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),"="),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  "),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token literal-property property"}),"theme"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"    "),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token literal-property property"}),"extend"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      "),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token literal-property property"}),"blur"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"        "),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token literal-property property"}),"xs"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'2px'"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),","),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      "),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"    "),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  "),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),"\n")))),(0,p.kt)("p",null,"Learn more about customizing the default theme in the ",(0,p.kt)(l(),{href:"/docs/theme#customizing-the-default-theme",passHref:!0},(0,p.kt)("a",null,"theme customization"))," documentation."),(0,p.kt)(o.X,{level:3,id:"arbitrary-values",nextElement:{type:"jsx"}},"Arbitrary values"),(0,p.kt)(k.k,{property:"blur",featuredClass:"blur-[2px]",mdxType:"ArbitraryValues"}))}O.isMDXComponent=!0,O.layoutProps=h}},function(a){a.O(0,[3430,4021,8555,2474,4713,5531,8930,9774,2888,179],function(){return a(a.s=77140)}),_N_E=a.O()}]);