(self.webpackChunkthomaslfb=self.webpackChunkthomaslfb||[]).push([[7],{3493:function(e,t,l){"use strict";l.d(t,{Z:function(){return L}});var a=l(7294),n=l(5444),r=(l(5186),l.p+"static/icon-ec6908885935a1f3c0397c5eb13b8952.png"),i=l.p+"static/icondark-e22d336259208406a93c7e84fb50add6.png",c=l(4156),o={display:"grid"},s={width:"96px",height:"96px",alignSelf:"center"},m=function(){var e=(0,a.useState)("dark"),t=e[0],l=e[1];try{var n=localStorage.getItem("theme"),m=function(){"theme-dark"===localStorage.getItem("theme")?((0,c.setTheme)("theme-light"),l("light")):((0,c.setTheme)("theme-dark"),l("dark"))};return(0,a.useEffect)((function(){"theme-dark"===localStorage.getItem("theme")?l("dark"):"theme-light"===localStorage.getItem("theme")&&l("light")}),[n]),a.createElement("div",{className:"persoImage",style:o},"light"===t?a.createElement("img",{src:r,alt:"my Image",style:s,onClick:m,checked:!0}):a.createElement("img",{src:i,alt:"my Image",style:s,onClick:m}))}catch(d){console.log(d)}},d={textDecoration:"none"},u={borderBottom:"1px solid var(--link-text)",marginBottom:"0.2rem",fontFamily:"Lato",display:"flex",flexDirection:"row",alignItems:"center",maxWidth:"960px",margin:"0 auto",flexWrap:"no-wrap",justifyContent:"space-around"},h={listStyleType:"none"},f={display:"flex",flexWrap:"wrap",gap:"10px 20px",paddingInlineStart:"0px"},g=function(e){var t=e.siteTitle;return a.createElement("header",{style:u},a.createElement("section",{className:"siteHeaderText"},a.createElement("h1",null,a.createElement(n.Link,{to:"/",style:d},t)),a.createElement("ul",{style:f},a.createElement("li",{style:h},a.createElement(n.Link,{to:"/",className:"navLinkText",activeClassName:"active"},"HOME")),a.createElement("li",{style:h},a.createElement(n.Link,{to:"/blog",className:"navLinkText",activeClassName:"active"},"BLOG")),a.createElement("li",{style:h},a.createElement(n.Link,{to:"/projects",className:"navLinkText",activeClassName:"active"},"PROJECTS")),a.createElement("li",{style:h},a.createElement(n.Link,{to:"/now",className:"navLinkText",activeClassName:"active"},"NOW")))),a.createElement("section",{className:"siteHeaderImage"},a.createElement(m,null)))};g.defaultProps={siteTitle:""};var p=g,y=l(6050),E=l.n(y),k=l(914),v=l.n(k),x=l(1499),b=l.n(x),w=[{text:"LinkedIn",url:"https://www.linkedin.com/in/thomas-lefebvre-199bb8107/",description:"A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",color:"#E95800",icon:a.createElement(b(),{height:"32px",class:"filter-bw"})},{text:"Github",url:"https://github.com/monsieurr",description:"Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",color:"#1099A8",icon:a.createElement(E(),{height:"32px",class:"filter-bw"})},{text:"Gitlab",url:"https://gitlab.com/monsieurr",description:"Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",color:"#BC027F",icon:a.createElement(v(),{height:"32px",class:"filter-bw"})}],L=function(e){var t,l=e.children,r=(0,n.useStaticQuery)("3649515864");return a.createElement(a.Fragment,null,a.createElement(p,{siteTitle:(null===(t=r.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem",fontFamily:"Lato"}},a.createElement("main",null,l),a.createElement("footer",{style:{marginTop:"2rem",borderTop:"1px solid var(--link-text)"}},a.createElement("ul",{style:{display:"flex",gap:"0.3em",justifyContent:"center"},className:"socialLinkList"},w.map((function(e){return a.createElement("li",{key:e.url,style:{listStyleType:"none"}},a.createElement("span",null,a.createElement("a",{href:e.url+"?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter"},e.icon),e.badge&&a.createElement("span",{"aria-label":"New Badge"},"NEW!")))}))))))}},223:function(e,t,l){"use strict";l.r(t);var a=l(7294),n=l(3493),r=l(5444),i=l(6179),c={color:"#5c5c5c",padding:"10px"},o={color:"var(--link-text)",textDecoration:"none"},s={fontWeight:"normal"},m={color:"rgb(170 170 170)"},d={color:"var(--content-text)"};t.default=function(e){var t,l=e.data,u=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title";return a.createElement(n.Z,{title:u},a.createElement(i.Z,{title:"Blog"}),a.createElement("div",null,l.allMdx.nodes.map((function(e){var t=e.excerpt,l=e.frontmatter,n=e.fields;return a.createElement("div",{style:c},a.createElement(r.Link,{to:n.slug,style:o},a.createElement("h2",{style:s,className:"blogPostTitle"},l.title)),a.createElement("p",{style:m},l.date),a.createElement("section",null,a.createElement("p",{dangerouslySetInnerHTML:{__html:l.description||t},itemProp:"description",style:d})))}))))}},4156:function(e){function t(e){window.localStorage.setItem("theme",e),document.documentElement.className=e}e.exports={setTheme:t,keepTheme:function(){window.localStorage.getItem("theme")&&"undefined"!=typeof window?"theme-dark"===window.localStorage.getItem("theme")?t("theme-dark"):"theme-light"===window.localStorage.getItem("theme")&&t("theme-light"):t("theme-dark")}}},6050:function(e,t,l){var a=l(7294);function n(e){return a.createElement("svg",e,[a.createElement("rect",{width:"512",height:"512",rx:"15%",fill:"#1B1817",key:0}),a.createElement("path",{fill:"#fff",d:"M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-50c-71 16-86-28-86-28-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z",key:1})])}n.defaultProps={"aria-label":"GitHub",role:"img",viewBox:"0 0 512 512"},e.exports=n,n.default=n},914:function(e,t,l){var a=l(7294);function n(e){return a.createElement("svg",e,[a.createElement("rect",{width:"512",height:"512",rx:"15%",fill:"#30353e",key:0}),a.createElement("path",{fill:"#e24329",d:"M84 215l43-133c2-7 12-7 14 0l115 353L371 82c2-7 12-7 14 0l43 133",key:1}),a.createElement("path",{fill:"#fc6d26",d:"M256 435L84 215h100.4zm71.7-220H428L256 435l71.6-220z",key:2}),a.createElement("path",{fill:"#fca326",d:"M84 215l-22 67c-2 6 0 13 6 16l188 137zm344 0l22 67c2 6 0 13-6 16L256 435z",key:3})])}n.defaultProps={"aria-label":"GitLab",role:"img",viewBox:"0 0 512 512"},e.exports=n,n.default=n},1499:function(e,t,l){var a=l(7294);function n(e){return a.createElement("svg",e,[a.createElement("rect",{width:"512",height:"512",rx:"15%",fill:"#0077b5",key:0}),a.createElement("circle",{cx:"142",cy:"138",r:"37",key:1}),a.createElement("path",{stroke:"#fff",strokeWidth:"66",d:"M244 194v198M142 194v198",key:2}),a.createElement("path",{d:"M276 282c0-20 13-40 36-40 24 0 33 18 33 45v105h66V279c0-61-32-89-76-89-34 0-51 19-59 32",key:3})])}n.defaultProps={"aria-label":"LinkedIn",role:"img",viewBox:"0 0 512 512",fill:"#fff"},e.exports=n,n.default=n}}]);
//# sourceMappingURL=component---src-pages-blog-js-c59d44fe841b5140f562.js.map