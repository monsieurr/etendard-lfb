(self.webpackChunkthomaslfb=self.webpackChunkthomaslfb||[]).push([[436],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9100:function(e,t,r){var n=r(9489),a=r(7067);function l(t,r,o){return a()?(e.exports=l=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=l=function(e,t,r){var a=[null];a.push.apply(a,t);var l=new(Function.bind.apply(e,a));return r&&n(l,r.prototype),l},e.exports.default=e.exports,e.exports.__esModule=!0),l.apply(null,arguments)}e.exports=l,e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var n=r(3646),a=r(6860),l=r(379),o=r(8206);e.exports=function(e){return n(e)||a(e)||l(e)||o()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},1274:function(e,t,r){var n=r(1048);e.exports={MDXRenderer:n}},1048:function(e,t,r){var n=r(9100),a=r(319),l=r(9713),o=r(7316),i=["scope","children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=r(7294),m=r(3497).mdx,p=r(3191).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,l=o(e,i),c=p(t),f=u.useMemo((function(){if(!r)return null;var e=s({React:u,mdx:m},c),t=Object.keys(e),l=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(a(t),[""+r])).apply(void 0,[{}].concat(a(l)))}),[r,t]);return u.createElement(f,s({},l))}},7814:function(e,t,r){"use strict";r.r(t);var n=r(1274),a=r(7294),l=r(1144),o=r(6179);t.default=function(e){var t=e.data.mdx,r=t.frontmatter,i=t.body;return a.createElement(l.Z,null,a.createElement(o.Z,{title:r.title,description:r.description}),a.createElement("h1",null,r.title),a.createElement("p",null,r.date),a.createElement(n.MDXRenderer,null,i))}},1144:function(e,t,r){"use strict";r.d(t,{Z:function(){return O}});var n=r(7294),a=r(5444),l=(r(5186),r.p+"static/icon-ec6908885935a1f3c0397c5eb13b8952.png"),o=r.p+"static/icondark-e22d336259208406a93c7e84fb50add6.png",i=r(4156),c=function(){return"undefined"!=typeof window},s={display:"grid"},u={width:"96px",height:"96px",alignSelf:"center"},m=function(){var e=(0,n.useState)("dark"),t=e[0],r=e[1],a=localStorage.getItem("theme");if((0,n.useEffect)((function(){"theme-dark"===localStorage.getItem("theme")?r("dark"):"theme-light"===localStorage.getItem("theme")&&r("light")}),[a]),c){var m=function(){"theme-dark"===localStorage.getItem("theme")?((0,i.setTheme)("theme-light"),r("light")):((0,i.setTheme)("theme-dark"),r("dark"))};return n.createElement("div",{className:"persoImage",style:s},"light"===t?n.createElement("img",{src:l,alt:"my Image",style:u,onClick:m,checked:!0}):n.createElement("img",{src:o,alt:"my Image",style:u,onClick:m}))}return n.createElement("h1",null,"ok")},p={textDecoration:"none"},f={borderBottom:"1px solid var(--link-text)",marginBottom:"0.2rem",fontFamily:"Lato",display:"flex",flexDirection:"row",alignItems:"center",maxWidth:"960px",margin:"0 auto",flexWrap:"no-wrap",justifyContent:"space-around"},d={listStyleType:"none"},h={display:"flex",flexWrap:"wrap",gap:"10px 20px",paddingInlineStart:"0px"},y=function(e){var t=e.siteTitle;return n.createElement("header",{style:f},n.createElement("section",{className:"siteHeaderText"},n.createElement("h1",null,n.createElement(a.Link,{to:"/",style:p},t)),n.createElement("ul",{style:h},n.createElement("li",{style:d},n.createElement(a.Link,{to:"/",className:"navLinkText",activeClassName:"active"},"HOME")),n.createElement("li",{style:d},n.createElement(a.Link,{to:"/blog",className:"navLinkText",activeClassName:"active"},"BLOG")),n.createElement("li",{style:d},n.createElement(a.Link,{to:"/projects",className:"navLinkText",activeClassName:"active"},"PROJECTS")),n.createElement("li",{style:d},n.createElement(a.Link,{to:"/now",className:"navLinkText",activeClassName:"active"},"NOW")))),n.createElement("section",{className:"siteHeaderImage"},n.createElement(m,null)))};y.defaultProps={siteTitle:""};var x=y,g=r(6050),b=r.n(g),v=r(914),E=r.n(v),k=r(1499),w=r.n(k),M=[{text:"LinkedIn",url:"https://www.linkedin.com/in/thomas-lefebvre-199bb8107/",description:"A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",color:"#E95800",icon:n.createElement(w(),{height:"32px",className:"filter-bw"})},{text:"Github",url:"https://github.com/monsieurr",description:"Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",color:"#1099A8",icon:n.createElement(b(),{height:"32px",className:"filter-bw"})},{text:"Gitlab",url:"https://gitlab.com/monsieurr",description:"Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",color:"#BC027F",icon:n.createElement(E(),{height:"32px",className:"filter-bw"})}],O=function(e){var t,r=e.children,l=(0,a.useStaticQuery)("3649515864");return n.createElement(n.Fragment,null,n.createElement(x,{siteTitle:(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),n.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem",fontFamily:"Lato"}},n.createElement("main",null,r),n.createElement("footer",{style:{marginTop:"2rem",borderTop:"1px solid var(--link-text)"}},n.createElement("ul",{style:{display:"flex",gap:"0.3em",justifyContent:"center"},className:"socialLinkList"},M.map((function(e){return n.createElement("li",{key:e.url,style:{listStyleType:"none"}},n.createElement("span",null,n.createElement("a",{href:e.url+"?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter"},e.icon),e.badge&&n.createElement("span",{"aria-label":"New Badge"},"NEW!")))}))))))}},4156:function(e){function t(e){window.localStorage.setItem("theme",e),document.documentElement.className=e}e.exports={setTheme:t,keepTheme:function(){window.localStorage.getItem("theme")&&"undefined"!=typeof window?"theme-dark"===window.localStorage.getItem("theme")?t("theme-dark"):"theme-light"===window.localStorage.getItem("theme")&&t("theme-light"):t("theme-dark")}}},6050:function(e,t,r){var n=r(7294);function a(e){return n.createElement("svg",e,[n.createElement("rect",{width:"512",height:"512",rx:"15%",fill:"#1B1817",key:0}),n.createElement("path",{fill:"#fff",d:"M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-50c-71 16-86-28-86-28-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z",key:1})])}a.defaultProps={"aria-label":"GitHub",role:"img",viewBox:"0 0 512 512"},e.exports=a,a.default=a},914:function(e,t,r){var n=r(7294);function a(e){return n.createElement("svg",e,[n.createElement("rect",{width:"512",height:"512",rx:"15%",fill:"#30353e",key:0}),n.createElement("path",{fill:"#e24329",d:"M84 215l43-133c2-7 12-7 14 0l115 353L371 82c2-7 12-7 14 0l43 133",key:1}),n.createElement("path",{fill:"#fc6d26",d:"M256 435L84 215h100.4zm71.7-220H428L256 435l71.6-220z",key:2}),n.createElement("path",{fill:"#fca326",d:"M84 215l-22 67c-2 6 0 13 6 16l188 137zm344 0l22 67c2 6 0 13-6 16L256 435z",key:3})])}a.defaultProps={"aria-label":"GitLab",role:"img",viewBox:"0 0 512 512"},e.exports=a,a.default=a},1499:function(e,t,r){var n=r(7294);function a(e){return n.createElement("svg",e,[n.createElement("rect",{width:"512",height:"512",rx:"15%",fill:"#0077b5",key:0}),n.createElement("circle",{cx:"142",cy:"138",r:"37",key:1}),n.createElement("path",{stroke:"#fff",strokeWidth:"66",d:"M244 194v198M142 194v198",key:2}),n.createElement("path",{d:"M276 282c0-20 13-40 36-40 24 0 33 18 33 45v105h66V279c0-61-32-89-76-89-34 0-51 19-59 32",key:3})])}a.defaultProps={"aria-label":"LinkedIn",role:"img",viewBox:"0 0 512 512",fill:"#fff"},e.exports=a,a.default=a}}]);
//# sourceMappingURL=component---src-components-blog-post-js-776f3ce06b6d661a8298.js.map