(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{422:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(434),o=a(492),l=a(2),m=a.n(l),c=a(41),d=a(7),s=function(e){var t=e.render;return r.a.createElement(d.d,null,function(e){var a=e.lang;return r.a.createElement(c.b,{query:"2098321533",render:function(e){var n=e.allFile.nodes.filter(function(e){return e.relativePath==="content/pages/spaces/"+a+".md"}).shift();if(!n)throw new Error("No content found for home page using language "+a);return t(n.childMarkdownRemark)},data:o})})};s.propTypes={render:m.a.func.isRequired};var f=s,p=a(437),h=a(435),g=function(){return r.a.createElement(f,{render:function(e){var t=e.frontmatter;return r.a.createElement(n.Fragment,null,r.a.createElement(h.a,{title:t.content.title}),r.a.createElement(p.a,{more:t.content.more,href:t.content.href},t.content.projects))}})};t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(g,null))}},423:function(e,t,a){"use strict";a(59),a(94),a(192),a(80),a(60),a(43),a(42),a(73);var n=a(424),r=a(0),i=a.n(r),o=a(2),l=a.n(o),m=a(432),c=a(41),d=a(7),s=a(11),f=["og:locale:alternate"];var p=function(e){var t=e.title,a=e.meta;return i.a.createElement(d.d,null,function(e){var r=e.lang,o=e.availableLocales,l=e.locale;return i.a.createElement(c.b,{query:"8840273",render:function(e){var n=e.siteHeadData,c=e.pageHeadData,d="/"===Object(s.e)(r)?"index":Object(s.e)(r).replace(/^\//,"").replace(/\/$/,"").replace(/\//g,"___"),p=c.nodes.filter(function(e){return e.relativePath==="content/meta/"+d+"."+r+".md"}).shift(),h=n.nodes.filter(function(e){return e.relativePath==="content/meta/__site."+r+".md"}).shift(),g=function(e){var t=e.componentHeadData,a=e.pageHeadData,n=e.siteHeadData,r=e.availableLocales,i=e.locale,o={};Object.keys(a).forEach(function(e){a[e]&&(o[e]=a[e])});var l=[],m=[];return[].concat(function(e,t){var a=[].concat(e);return a.splice(e.indexOf(t),1),a.map(function(e){return{name:"og:locale:alternate",content:e}})}(r,i),t.meta||[],o.meta||[],n.meta||[]).forEach(function(e){(e.content||e.file)&&(!f.includes(e.name)&&l.includes(e.name)||m.push({name:e.name,content:e.content||Object(s.c)(e.file)}),l.push(e.name))}),{title:t.title||o.title||n.title,meta:m.map(function(e){return e.name.match(/^og:/)?{property:e.name,content:e.content}:e})}}({componentHeadData:{title:t,meta:a},pageHeadData:p&&p.childMarkdownRemark.frontmatter&&p.childMarkdownRemark.frontmatter.head||{},siteHeadData:h&&h.childMarkdownRemark.frontmatter&&h.childMarkdownRemark.frontmatter.head||{},availableLocales:o,locale:l});return i.a.createElement(m.Helmet,{title:g.title,meta:g.meta},i.a.createElement("html",{lang:r}))},data:n})})};p.propTypes={title:l.a.string,meta:l.a.arrayOf(l.a.shape({name:l.a.string.isRequired,content:l.a.string,file:l.a.string}))},t.a=p},424:function(e){e.exports={data:{siteHeadData:{nodes:[{relativePath:"content/meta/__site.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter",meta:[{name:"description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"language",content:"en",file:""},{name:"twitter:card",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"twitter:site",content:"TV Gatsby Starter",file:""},{name:"twitter:creator",content:"TV Gatsby Starter",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-en.png"},{name:"og:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"og:type",content:"website",file:""},{name:"og:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"og:site_name",content:"TV Gatsby Starter",file:""},{name:"og:image",content:"",file:"/images/uploads/share-en.png"},{name:"robots",content:"index,follow",file:""}]}}}},{relativePath:"content/meta/__site.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter",meta:[{name:"description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"language",content:"en",file:""},{name:"twitter:card",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"twitter:site",content:"TV Gatsby Starter",file:""},{name:"twitter:creator",content:"TV Gatsby Starter",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-en.png"},{name:"og:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"og:type",content:"website",file:""},{name:"og:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"og:site_name",content:"TV Gatsby Starter",file:""},{name:"og:image",content:"",file:"/images/uploads/share-en.png"},{name:"robots",content:"index,follow",file:""}]}}}}]},pageHeadData:{nodes:[{relativePath:"content/meta/404.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter - Error 404 not found",meta:[{name:"description",content:"Error page not found",file:""},{name:"twitter:card",content:"Error page not found",file:""},{name:"twitter:title",content:"Error page not found",file:""},{name:"twitter:description",content:"Error page not found",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-404-en.png"},{name:"og:title",content:"Error page not found",file:""},{name:"og:description",content:"Error page not found",file:""},{name:"og:image",content:"",file:"/images/uploads/share-404-en.png"}]}}}},{relativePath:"content/meta/__site.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter",meta:[{name:"description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"language",content:"en",file:""},{name:"twitter:card",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"twitter:site",content:"TV Gatsby Starter",file:""},{name:"twitter:creator",content:"TV Gatsby Starter",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-en.png"},{name:"og:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"og:type",content:"website",file:""},{name:"og:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"og:site_name",content:"TV Gatsby Starter",file:""},{name:"og:image",content:"",file:"/images/uploads/share-en.png"},{name:"robots",content:"index,follow",file:""}]}}}},{relativePath:"content/meta/__site.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter",meta:[{name:"description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"language",content:"en",file:""},{name:"twitter:card",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"twitter:site",content:"TV Gatsby Starter",file:""},{name:"twitter:creator",content:"TV Gatsby Starter",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-en.png"},{name:"og:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"og:type",content:"website",file:""},{name:"og:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"og:site_name",content:"TV Gatsby Starter",file:""},{name:"og:image",content:"",file:"/images/uploads/share-en.png"},{name:"robots",content:"index,follow",file:""}]}}}},{relativePath:"content/meta/attraction.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"OBRAZY - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/404.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter - Error 404 not found",meta:[{name:"description",content:"Error page not found",file:""},{name:"twitter:card",content:"Error page not found",file:""},{name:"twitter:title",content:"Error page not found",file:""},{name:"twitter:description",content:"Error page not found",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-404-en.png"},{name:"og:title",content:"Error page not found",file:""},{name:"og:description",content:"Error page not found",file:""},{name:"og:image",content:"",file:"/images/uploads/share-404-en.png"}]}}}},{relativePath:"content/meta/cube.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"OBRAZY - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/cube.en.md",childMarkdownRemark:{frontmatter:{head:{title:"IMAGES - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/attraction.en.md",childMarkdownRemark:{frontmatter:{head:{title:"IMAGES - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/hospital.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"OBRAZY - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/images.en.md",childMarkdownRemark:{frontmatter:{head:{title:"IMAGES - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/images.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"OBRAZY - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/hospital.en.md",childMarkdownRemark:{frontmatter:{head:{title:"IMAGES - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/index.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TV - TOMÁŠ VRÁNA",meta:[{name:"description",content:"TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/index.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TV - TOMAS VRANA",meta:[{name:"description",content:"TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/information.en.md",childMarkdownRemark:{frontmatter:{head:{title:"INFORMATION - TOMAS VRANA",meta:[{name:"description",content:"INFORMATION - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/information.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"INFORMACE - TOMÁŠ VRÁNA",meta:[{name:"description",content:"INFORMACE - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/islam.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"OBRAZY - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/kolos-of-ostrava.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"KOLOS OF OSTRAVA - TV PRESENTS - TOMÁŠ VRÁNA",meta:[{name:"description",content:"KOLOS OF OSTRAVA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/kolos-of-ostrava.en.md",childMarkdownRemark:{frontmatter:{head:{title:"KOLOS OF OSTRAVA - TV PRESENTS - TOMAS VRANA",meta:[{name:"description",content:"KOLOS OF OSTRAVA - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/islam.en.md",childMarkdownRemark:{frontmatter:{head:{title:"IMAGES - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/konevmen.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"OBRAZY - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/konevmen.en.md",childMarkdownRemark:{frontmatter:{head:{title:"IMAGES - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/maniak.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"OBRAZY - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/maniak.en.md",childMarkdownRemark:{frontmatter:{head:{title:"IMAGES - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/messenger.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"OBRAZY - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/messenger.en.md",childMarkdownRemark:{frontmatter:{head:{title:"IMAGES - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/mother.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"OBRAZY - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/mother.en.md",childMarkdownRemark:{frontmatter:{head:{title:"IMAGES - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/nepu.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"OBRAZY - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/nepu.en.md",childMarkdownRemark:{frontmatter:{head:{title:"IMAGES - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/progress.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"OBRAZY - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/progress.en.md",childMarkdownRemark:{frontmatter:{head:{title:"IMAGES - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/rainbowball.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"OBRAZY - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/spaces.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"PROSTOR - TOMÁŠ VRÁNA",meta:[{name:"description",content:"PROSTOR - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/rainbowball.en.md",childMarkdownRemark:{frontmatter:{head:{title:"IMAGES - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/spaces.en.md",childMarkdownRemark:{frontmatter:{head:{title:"SPACES - TOMAS VRANA",meta:[{name:"description",content:"SPACES - TOMAS VRANA",file:""}]}}}}]}}}},425:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(2),o=a.n(i),l=a(27),m=Object(l.e)(["0%{width:0;padding-bottom:0;opacity:1;}100%{width:100%;padding-bottom:100%;opacity:0;}"]),c=l.d.div.withConfig({displayName:"Loader__Container",componentId:"sc-1m03rig-0"})(["position:relative;display:inline-block;width:","rem;height:","rem;> div{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:","rem;border:4px solid ",";opacity:1;border-radius:50%;animation:"," 1.6s cubic-bezier(0,0.2,0.8,1) infinite;box-sizing:content-box;&:nth-of-type(2){animation-delay:-0.33s;}&:last-of-type{animation-delay:-0.66s;}}"],function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.theme.colors.interactive},m),d=function(e){var t=e.size;return r.a.createElement(c,{size:t},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))};d.propTypes={size:o.a.number},d.defaultProps={size:10};var s=d,f=l.d.div.withConfig({displayName:"PageLoader__Container",componentId:"sc-1jv81q3-0"})(["display:inline-block;left:50%;position:relative;transform:translateX(-50%);"]);t.a=function(){return r.a.createElement(f,null,r.a.createElement(s,null))}},426:function(e){e.exports={data:{allFile:{nodes:[{relativePath:"content/footer/cz.md",childMarkdownRemark:{html:"",frontmatter:{title:"En (English) footer content",content:{left:"Tomáš Vrána",rights:"Všechna práva vyhrazena"}}}},{relativePath:"content/footer/en.md",childMarkdownRemark:{html:"",frontmatter:{title:"En (English) footer content",content:{left:"TOMAS VRANA",rights:"All rights reserved"}}}}]}}}},427:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(27),o=(a(44),a(426)),l=a(2),m=a.n(l),c=a(41),d=a(7),s=function(e){var t=e.render;return r.a.createElement(d.d,null,function(e){var a=e.lang;return r.a.createElement(c.b,{query:"1139629735",render:function(e){var n=e.allFile.nodes.filter(function(e){return e.relativePath==="content/footer/"+a+".md"}).shift();if(!n||!n.childMarkdownRemark)throw new Error("No footer translations found for language "+a);return t(Object.assign({},n.childMarkdownRemark.frontmatter,{html:n.childMarkdownRemark.html}))},data:o})})};s.propTypes={render:m.a.func.isRequired};var f=s,p=i.d.footer.withConfig({displayName:"Footer__Container",componentId:"a1f04j-0"})(["width:100%;max-width:",";padding:0 2rem;margin:0 auto;display:block;letter-spacing:0.08em;margin-top:15rem;margin-bottom:3rem;text-transform:uppercase;font-size:60%;letter-spacing:.2rem;img{margin:0;}.left{text-align:left;float:left;}.right{text-align:right;}"],function(e){return e.theme.dimensions.contentWidth});t.a=function(){return r.a.createElement(p,null,r.a.createElement(f,{render:function(e){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"left"},"2022 © ",e.content.left),r.a.createElement("div",{className:"right"},e.content.rights))}}))}},428:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(27),o=a(2),l=a.n(o),m=a(95),c=i.d.div.withConfig({displayName:"Go__Container",componentId:"zp5ssx-0"})([".go{display:inline-block;opacity:.7;color:black;padding:1rem 0 1.5rem 0;text-transform:uppercase;font-weight:bold;font-size:65%;letter-spacing:.4rem;border-bottom:.2rem solid #fff;&:hover{border-bottom:.2rem solid #000;opacity:1;}span{font-size:130%;}}"]),d=function(e){return r.a.createElement(c,null,r.a.createElement(m.a,{className:"go",href:e.href},e.back&&r.a.createElement("span",null,"< "),e.title,!e.back&&r.a.createElement("span",null," >")))};d.propTypes={title:l.a.string,href:l.a.string,back:l.a.bool},t.a=d},434:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(2),o=a.n(i),l=a(27),m=a(431),c=a.n(m),d=a(423),s=a(425),f=a(7),p=a(11),h=a(427),g=l.d.main.withConfig({displayName:"Narrow__Main",componentId:"or0qr0-0"})(["position:relative;z-index:1;margin:0 auto;width:100%;padding:13rem 0;opacity:1;transition:0.5s opacity ease-in-out;max-width:650px;&.page-content-enter{opacity:0;}&.page-content-enter-active,&.page-content-leave{opacity:1;}&.page-content-leave-active{opacity:0;}"]),u=l.d.div.withConfig({displayName:"Narrow__PageLoaderContainer",componentId:"or0qr0-1"})(["opacity:1;transition:0.5s opacity ease-in-out;&.page-content-enter{opacity:0;}&.page-content-enter-active,&.page-content-leave{opacity:1;}&.page-content-leave-active{opacity:0;}"]),A=function(e){var t=e.children,a=e.pageLoading,i=Object(n.useState)(null),o=i[0],l=i[1],m=Object(n.useState)(null),d=m[0],f=m[1];return Object(n.useEffect)(function(){var e;return a?(l(!1),f(!0)):(f(!1),e=setTimeout(function(){l(!0)},500)),function(){clearTimeout(e)}},[a]),r.a.createElement(c.a,{transitionName:"page-content",transitionEnterTimeout:500,transitionLeaveTimeout:500},(null===d&&a||d)&&r.a.createElement(u,{key:"page_loader_"+Object(p.d)()},r.a.createElement(s.a,null)),(null===o&&!a||o)&&r.a.createElement(g,{key:"page_content_"+Object(p.d)()},t))};A.propTypes={children:o.a.node,pageLoading:o.a.bool};var R=function(e){var t=e.children,a=e.headData,i=void 0===a?null:a;return r.a.createElement(f.h,null,function(e){var a=e.loading;return r.a.createElement(n.Fragment,null,r.a.createElement(d.a,i),r.a.createElement(A,{pageLoading:a},t),r.a.createElement(h.a,null))})};R.propTypes={children:A.propTypes.children,headData:o.a.object},t.a=R},435:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(27),o=a(2),l=a.n(o),m=i.d.h1.withConfig({displayName:"Title__PageTitle",componentId:"fn83pj-0"})(["text-align:center;margin:1em 0 2em 0;filter:blur(2px);animation:blur 4s ease 0s infinite;-webkit-animation:blur 8s ease 0s infinite;-moz-animation:blur 8s ease 0s infinite;@keyframes blur{0%,80%{-webkit-filter:blur(2px);-moz-filter:blur(2px);-o-filter:blur(2px);-ms-filter:blur(2px);}40%{-webkit-filter:blur(0px);-moz-filter:blur(0px);-o-filter:blur(0px);-ms-filter:blur(0px);}}"]),c=function(e){return r.a.createElement(m,null,e.title)};c.propTypes={title:l.a.string},t.a=c},437:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(27),o=a(95),l=a(428),m=a(2),c=a.n(m),d=a(7),s=i.d.ul.withConfig({displayName:"List__Ul",componentId:"sc-4clhnn-0"})(["list-style-type:none;text-align:center;li{margin:0 auto 6em auto;h2{margin:0 0 .9rem 0;}small{margin:0 0 1rem 0;display:block;}a{color:black;}.desc{max-width:600px;margin:0 auto 2.5rem auto;color:#666;}}"]),f=function(e){return r.a.createElement(d.f,null,function(t){var a=t.updateNavActive;return r.a.createElement(s,null,a(e.href),e.children.map(function(t,a){return r.a.createElement("li",null,r.a.createElement("h2",null,r.a.createElement(o.a,{href:t.href},t.title)),r.a.createElement("small",null,r.a.createElement(o.a,{href:t.href},t.year)),r.a.createElement("div",{className:"desc"},t.description),r.a.createElement("div",{className:"img"},r.a.createElement(o.a,{href:t.href,className:"block"},r.a.createElement("img",{src:t.image,alt:t.title}))),r.a.createElement(l.a,{title:e.more,href:t.href}))}))})};f.propTypes={title:c.a.string,more:c.a.string,href:c.a.string,children:c.a.oneOfType([c.a.node,c.a.arrayOf(c.a.node)]).isRequired},t.a=f},492:function(e){e.exports={data:{allFile:{nodes:[{relativePath:"content/pages/spaces/cz.md",childMarkdownRemark:{frontmatter:{content:{title:"PROSTOR",more:"Vidět více",href:"/spaces/",projects:[{title:"Konevmen",href:"/konevmen/",description:null,year:2020,image:"/images/konevmen/1.jpg"},{title:"Kolos of Ostrava",href:"/kolos-of-ostrava/",description:null,year:2019,image:"/images/kolos/1.jpg"},{title:"Turistická atrakce",href:"/attraction/",description:null,year:2020,image:"/images/attraction/1.jpg"},{title:"Duhovka",href:"/rainbowball/",description:null,year:2011,image:"/images/duhovka/1.jpg"},{title:"Vyslán islám",href:"/islam/",description:null,year:2011,image:"/images/islam/1.jpg"},{title:"Kostka",href:"/cube/",description:null,year:2011,image:"/images/kostka/1.jpg"}]}}}},{relativePath:"content/pages/spaces/en.md",childMarkdownRemark:{frontmatter:{content:{title:"SPACES",more:"See more",href:"/spaces/",projects:[{title:"Konevmen",href:"/konevmen/",description:null,year:2020,image:"/images/konevmen/1.jpg"},{title:"Kolos of Ostrava",href:"/kolos-of-ostrava/",description:null,year:2019,image:"/images/kolos/1.jpg"},{title:"Tourist attraction",href:"/attraction/",description:null,year:2020,image:"/images/attraction/1.jpg"},{title:"Rainbow ball",href:"/rainbowball/",description:null,year:2011,image:"/images/duhovka/1.jpg"},{title:"Islam coming",href:"/islam/",description:null,year:2011,image:"/images/islam/1.jpg"},{title:"Cube",href:"/cube/",description:null,year:2011,image:"/images/kostka/1.jpg"}]}}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-spaces-js-ecf433637970763ff558.js.map