(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6551],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach(function(t){s(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var o=a.createContext({}),c=function(e){var t,n=a.useContext(o),s=n;return e&&(s="function"==typeof(t=e)?e(n):i(i({},n),e)),s},l=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef(function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,l=function(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}(e,["components","mdxType","originalType","parentName"]),p=c(n),m=p["".concat(o,".").concat(s)]||p[s]||u[s]||r;return n?a.createElement(m,i(i({ref:t},l),{},{components:n})):a.createElement(m,i({ref:t},l))});function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=Array(r);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},33594:function(e,t,n){"use strict";n.d(t,{EL:function(){return l}});var a,s=n(67294),r=["bottom","height","left","right","top","width"],i=new Map,o=function e(){var t=[];i.forEach(function(e,n){var a,s,i=n.getBoundingClientRect();a=i,s=e.rect,void 0===a&&(a={}),void 0===s&&(s={}),r.some(function(e){return a[e]!==s[e]})&&(e.rect=i,t.push(e))}),t.forEach(function(e){e.callbacks.forEach(function(t){return t(e.rect)})}),a=window.requestAnimationFrame(e)},c="undefined"!=typeof window&&window.document&&window.document.createElement?s.useLayoutEffect:s.useEffect;function l(e,t,n){"boolean"==typeof(r=t)?u=t:(u=null==(m=null==t?void 0:t.observe)||m,p=null==t?void 0:t.onChange),(l=n)&&"[object Function]"==({}).toString.call(l)&&(p=n);var r,l,u,p,m,d=(0,s.useState)(e.current),g=d[0],A=d[1],f=(0,s.useRef)(!1),h=(0,s.useRef)(!1),k=(0,s.useState)(null),b=k[0],w=k[1],N=(0,s.useRef)(p);return c(function(){N.current=p,e.current!==g&&A(e.current)}),c(function(){g&&!f.current&&(f.current=!0,w(g.getBoundingClientRect()))},[g]),c(function(){if(u){var t=g;if(h.current||(h.current=!0,t=e.current),t){var n,s,r=(n=t,s=function(e){null==N.current||N.current(e),w(e)},{observe:function(){var e=0===i.size;i.has(n)?i.get(n).callbacks.push(s):i.set(n,{rect:void 0,hasRectChanged:!1,callbacks:[s]}),e&&o()},unobserve:function(){var e=i.get(n);if(e){var t=e.callbacks.indexOf(s);t>=0&&e.callbacks.splice(t,1),e.callbacks.length||i.delete(n),i.size||cancelAnimationFrame(a)}}});return r.observe(),function(){r.unobserve()}}}},[u,g,e]),b}},47941:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/editor-setup",function(){return n(37355)}])},98650:function(e,t){"use strict";t.Z={src:"/_next/static/media/intellisense.c22de782.png",height:672,width:1344,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAD1BMVEUVHS0PFiYcJjcgLD8sOk3ECnHnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIUlEQVQImRXHsQEAMAzCMGP4/+Y2m0QqoOC2S7AlOYSPBwO/AC/8Up7PAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4}},80521:function(e,t){"use strict";t.Z={src:"/_next/static/media/prettier-banner.79c40690.jpg",height:819,width:2400,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAADAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAaEAADAAMBAAAAAAAAAAAAAAAAAQIDBBEx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/xAAXEQADAQAAAAAAAAAAAAAAAAAAATEC/9oADAMBAAIRAxEAPwCb61usNxXHK8XAAXZgCrP/2Q==",blurWidth:8,blurHeight:3}},37355:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var a=n(99534);n(67294);var s,r=n(3905),i=n(41664),o=n.n(i),c=n(5679),l=n(53339),u=n(74296),p={Layout:l.L,meta:{title:"Editor Setup",description:"Plugins and configuration settings that can improve the developer experience when working with Tailwind CSS."},slug:"editor-setup",tableOfContents:[{title:"Syntax support",slug:"syntax-support",children:[]},{title:"IntelliSense for VS Code",slug:"intelli-sense-for-vs-code",children:[]},{title:"Automatic class sorting with Prettier",slug:"automatic-class-sorting-with-prettier",children:[]},{title:"JetBrains IDEs",slug:"jet-brains-id-es",children:[]}]},m=u.X_;function d(e){var t=e.components,s=(0,a.Z)(e,["components"]);return(0,r.kt)(m,Object.assign({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(c.X,{level:2,id:"syntax-support",nextElement:{type:"paragraph"}},"Syntax support"),(0,r.kt)("p",null,"Tailwind CSS uses a lot of custom CSS at-rules like ",(0,r.kt)("inlineCode",{parentName:"p"},"@tailwind"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@apply"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"@screen"),", and in many editors this can trigger warnings or errors where these rules aren’t recognized."),(0,r.kt)("p",null,"The solution to this is almost always to install a plugin for your editor/IDE for PostCSS language support instead of regular CSS."),(0,r.kt)("p",null,"If you’re using VS Code, our official ",(0,r.kt)("a",Object.assign({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss"}),"Tailwind CSS IntelliSense")," plugin includes a dedicated Tailwind CSS language mode that has support for all of the custom at-rules and functions Tailwind uses."),(0,r.kt)("p",null,"In some cases, you may need to disable native CSS linting/validations if your editor is very strict about the syntax it expects in your CSS files."),(0,r.kt)(c.X,{level:2,id:"intelli-sense-for-vs-code",nextElement:{type:"paragraph"}},"IntelliSense for VS Code"),(0,r.kt)("p",null,"The official ",(0,r.kt)("a",Object.assign({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss"}),"Tailwind CSS IntelliSense")," extension for Visual Studio Code enhances the Tailwind development experience by providing users with advanced features such as autocomplete, syntax highlighting, and linting."),(0,r.kt)("img",{src:n(98650).Z.src,alt:"Tailwind CSS IntelliSense extension for Visual Studio Code",width:1344,height:672,className:"rounded-lg"}),(0,r.kt)("ul",Object.assign({},{role:"list"}),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Autocomplete"),". Intelligent suggestions for class names, as well as ",(0,r.kt)(o(),{href:"/docs/functions-and-directives",passHref:!0},(0,r.kt)("a",null,"CSS functions and directives")),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Linting"),". Highlights errors and potential bugs in both your CSS and your markup."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Hover Previews"),". See the complete CSS for a Tailwind class name by hovering over it."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Syntax Highlighting"),". Provides syntax definitions so that Tailwind features are highlighted correctly.")),(0,r.kt)("p",null,"Check out the project ",(0,r.kt)("a",Object.assign({parentName:"p"},{href:"https://github.com/tailwindcss/intellisense"}),"on GitHub")," to learn more, or ",(0,r.kt)("a",Object.assign({parentName:"p"},{href:"vscode:extension/bradlc.vscode-tailwindcss"}),"add it to Visual Studio Code")," to get started now."),(0,r.kt)(c.X,{level:2,id:"automatic-class-sorting-with-prettier",nextElement:{type:"paragraph"}},"Automatic class sorting with Prettier"),(0,r.kt)("p",null,"We maintain an official ",(0,r.kt)("a",Object.assign({parentName:"p"},{href:"https://github.com/tailwindlabs/prettier-plugin-tailwindcss"}),"Prettier plugin")," for Tailwind CSS that automatically sorts your classes following our ",(0,r.kt)("a",Object.assign({parentName:"p"},{href:"https://tailwindcss.com/blog/automatic-class-sorting-with-prettier#how-classes-are-sorted"}),"recommended class order"),"."),(0,r.kt)("img",{src:n(80521).Z.src,alt:"",width:2400,height:819,className:"rounded-lg"}),(0,r.kt)("p",null,"It works seamlessly with custom Tailwind configurations, and because it’s just a Prettier plugin, it works anywhere Prettier works — including every popular editor and IDE, and of course on the command line."),(0,r.kt)("pre",Object.assign({},{className:"language-html"}),(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- Before -->"),"\n",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"...",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"button"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n\n",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- After -->"),"\n",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"...",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"button"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,r.kt)("p",null,"Check out the plugin ",(0,r.kt)("a",Object.assign({parentName:"p"},{href:"https://github.com/tailwindlabs/prettier-plugin-tailwindcss"}),"on GitHub")," learn more and get started."),(0,r.kt)(c.X,{level:2,id:"jet-brains-id-es",nextElement:{type:"paragraph"}},"JetBrains IDEs"),(0,r.kt)("p",null,"JetBrains IDEs like WebStorm, PhpStorm, and others include support for intelligent Tailwind CSS completions in your HTML and when using ",(0,r.kt)("inlineCode",{parentName:"p"},"@apply"),"."),(0,r.kt)("p",null,(0,r.kt)("a",Object.assign({parentName:"p"},{href:"https://www.jetbrains.com/help/webstorm/tailwind-css.html"}),"Learn more about Tailwind CSS support in JetBrains IDEs ","→")))}d.isMDXComponent=!0,d.layoutProps=p},53339:function(e,t,n){"use strict";n.d(t,{L:function(){return c}});var a=n(26042),s=n(85893),r=n(21744),i=n(99440),o=n(54713);function c(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.Dx,{children:e.layoutProps.meta.metaTitle||e.layoutProps.meta.title}),(0,s.jsx)(r.C,(0,a.Z)({nav:o.u},e))]})}c.nav=o.u},29815:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(20943),s=n(13375),r=n(91566);function i(e){return function(e){if(Array.isArray(e))return(0,a.Z)(e)}(e)||(0,s.Z)(e)||(0,r.Z)(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(e){e.O(0,[8555,2474,4713,9774,2888,179],function(){return e(e.s=47941)}),_N_E=e.O()}]);