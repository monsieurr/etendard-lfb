(self.webpackChunkthomaslfb=self.webpackChunkthomaslfb||[]).push([[853],{1144:function(e,t,a){"use strict";a.d(t,{Z:function(){return L}});var l=a(7294),n=a(5444),i=(a(5186),a.p+"static/icon-ec6908885935a1f3c0397c5eb13b8952.png"),r=a.p+"static/icondark-e22d336259208406a93c7e84fb50add6.png",c=a(4156),o=function(){return"undefined"!=typeof window},m={display:"grid"},s={width:"96px",height:"96px",alignSelf:"center"},u=function(){var e=(0,l.useState)("dark"),t=e[0],a=e[1],n=localStorage.getItem("theme");if((0,l.useEffect)((function(){"theme-dark"===localStorage.getItem("theme")?a("dark"):"theme-light"===localStorage.getItem("theme")&&a("light")}),[n]),o){var u=function(){"theme-dark"===localStorage.getItem("theme")?((0,c.setTheme)("theme-light"),a("light")):((0,c.setTheme)("theme-dark"),a("dark"))};return l.createElement("div",{className:"persoImage",style:m},"light"===t?l.createElement("img",{src:i,alt:"my Image",style:s,onClick:u,checked:!0}):l.createElement("img",{src:r,alt:"my Image",style:s,onClick:u}))}return l.createElement("h1",null,"ok")},d={textDecoration:"none"},h={borderBottom:"1px solid var(--link-text)",marginBottom:"0.2rem",fontFamily:"Lato",display:"flex",flexDirection:"row",alignItems:"center",maxWidth:"960px",margin:"0 auto",flexWrap:"no-wrap",justifyContent:"space-around"},f={listStyleType:"none"},p={display:"flex",flexWrap:"wrap",gap:"10px 20px",paddingInlineStart:"0px"},g=function(e){var t=e.siteTitle;return l.createElement("header",{style:h},l.createElement("section",{className:"siteHeaderText"},l.createElement("h1",null,l.createElement(n.Link,{to:"/",style:d},t)),l.createElement("ul",{style:p},l.createElement("li",{style:f},l.createElement(n.Link,{to:"/",className:"navLinkText",activeClassName:"active"},"HOME")),l.createElement("li",{style:f},l.createElement(n.Link,{to:"/blog",className:"navLinkText",activeClassName:"active"},"BLOG")),l.createElement("li",{style:f},l.createElement(n.Link,{to:"/projects",className:"navLinkText",activeClassName:"active"},"PROJECTS")),l.createElement("li",{style:f},l.createElement(n.Link,{to:"/now",className:"navLinkText",activeClassName:"active"},"NOW")))),l.createElement("section",{className:"siteHeaderImage"},l.createElement(u,null)))};g.defaultProps={siteTitle:""};var y=g,E=a(6050),k=a.n(E),v=a(914),x=a.n(v),w=a(1499),b=a.n(w),N=[{text:"LinkedIn",url:"https://www.linkedin.com/in/thomas-lefebvre-199bb8107/",description:"A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",color:"#E95800",icon:l.createElement(b(),{height:"32px",className:"filter-bw"})},{text:"Github",url:"https://github.com/monsieurr",description:"Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",color:"#1099A8",icon:l.createElement(k(),{height:"32px",className:"filter-bw"})},{text:"Gitlab",url:"https://gitlab.com/monsieurr",description:"Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",color:"#BC027F",icon:l.createElement(x(),{height:"32px",className:"filter-bw"})}],L=function(e){var t,a=e.children,i=(0,n.useStaticQuery)("3649515864");return l.createElement(l.Fragment,null,l.createElement(y,{siteTitle:(null===(t=i.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),l.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem",fontFamily:"Lato"}},l.createElement("main",null,a),l.createElement("footer",{style:{marginTop:"2rem",borderTop:"1px solid var(--link-text)"}},l.createElement("ul",{style:{display:"flex",gap:"0.3em",justifyContent:"center"},className:"socialLinkList"},N.map((function(e){return l.createElement("li",{key:e.url,style:{listStyleType:"none"}},l.createElement("span",null,l.createElement("a",{href:e.url+"?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter"},e.icon),e.badge&&l.createElement("span",{"aria-label":"New Badge"},"NEW!")))}))))))}},7744:function(e,t,a){"use strict";a.r(t);var l=a(7294),n=a(1144),i=a(6179);t.default=function(){return l.createElement(n.Z,null,l.createElement(i.Z,{title:"Projects"}),l.createElement("h2",null,"COMING SOON"),l.createElement("p",null,"I will put in details the projects I have been making during these past years."),l.createElement("p",null,"Feel free to check my Github page linked below to see my past projects in the meantime."))}},4156:function(e){function t(e){window.localStorage.setItem("theme",e),document.documentElement.className=e}e.exports={setTheme:t,keepTheme:function(){window.localStorage.getItem("theme")&&"undefined"!=typeof window?"theme-dark"===window.localStorage.getItem("theme")?t("theme-dark"):"theme-light"===window.localStorage.getItem("theme")&&t("theme-light"):t("theme-dark")}}},6050:function(e,t,a){var l=a(7294);function n(e){return l.createElement("svg",e,[l.createElement("rect",{width:"512",height:"512",rx:"15%",fill:"#1B1817",key:0}),l.createElement("path",{fill:"#fff",d:"M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-50c-71 16-86-28-86-28-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z",key:1})])}n.defaultProps={"aria-label":"GitHub",role:"img",viewBox:"0 0 512 512"},e.exports=n,n.default=n},914:function(e,t,a){var l=a(7294);function n(e){return l.createElement("svg",e,[l.createElement("rect",{width:"512",height:"512",rx:"15%",fill:"#30353e",key:0}),l.createElement("path",{fill:"#e24329",d:"M84 215l43-133c2-7 12-7 14 0l115 353L371 82c2-7 12-7 14 0l43 133",key:1}),l.createElement("path",{fill:"#fc6d26",d:"M256 435L84 215h100.4zm71.7-220H428L256 435l71.6-220z",key:2}),l.createElement("path",{fill:"#fca326",d:"M84 215l-22 67c-2 6 0 13 6 16l188 137zm344 0l22 67c2 6 0 13-6 16L256 435z",key:3})])}n.defaultProps={"aria-label":"GitLab",role:"img",viewBox:"0 0 512 512"},e.exports=n,n.default=n},1499:function(e,t,a){var l=a(7294);function n(e){return l.createElement("svg",e,[l.createElement("rect",{width:"512",height:"512",rx:"15%",fill:"#0077b5",key:0}),l.createElement("circle",{cx:"142",cy:"138",r:"37",key:1}),l.createElement("path",{stroke:"#fff",strokeWidth:"66",d:"M244 194v198M142 194v198",key:2}),l.createElement("path",{d:"M276 282c0-20 13-40 36-40 24 0 33 18 33 45v105h66V279c0-61-32-89-76-89-34 0-51 19-59 32",key:3})])}n.defaultProps={"aria-label":"LinkedIn",role:"img",viewBox:"0 0 512 512",fill:"#fff"},e.exports=n,n.default=n}}]);
//# sourceMappingURL=component---src-pages-projects-js-2b8695cdff87c8722e3c.js.map