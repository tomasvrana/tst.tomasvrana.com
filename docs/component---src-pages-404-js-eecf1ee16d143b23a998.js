(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{408:function(e,t,n){"use strict";n.r(t);var a=n(444),r=n(0),i=n.n(r),o=n(2),l=n.n(o),m=n(41),c=n(431),d=n(20),s=n(7);function f(){return Math.round(150*Math.random())/10+"rem"}function h(e){for(var t=[],n=0;n<=e;n++){var a=Object(d.c)(["","%{clip:rect(",",999.9rem,",",0);}"],n/e*100,f(),f());t=[].concat(t,[a])}return t}var p=Object(d.e)(["",""],h(30)),g=Object(d.e)(["",""],h(12)),A=d.d.p.withConfig({displayName:"sc-404__Info",componentId:"sc-10phstk-0"})(["",";"],function(e){return e.theme.colors.secondaryText}),u=Object(d.e)(["0%{opacity:0;}20%{opacity:1;}60%{opacity:1;}80%{opacity:0;}100%{opacity:0;}"]),R=d.d.div.withConfig({displayName:"sc-404__Title",componentId:"sc-10phstk-1"})(["h1{span{margin:0 0.4rem;position:relative;&.blink{animation:"," 1s linear infinite;}&.glitch{&:before,&:after{content:attr(data-text);position:absolute;width:100%;height:100%;top:0;left:0;}&:before{left:0.2rem;text-shadow:-0.2rem 0 red;clip:rect(2.4rem,55rem,9rem,0);animation:"," 3s infinite linear alternate-reverse;}&:after{left:-0.2.rem;text-shadow:-0.2rem 0 blue;clip:rect(8.5rem,55rem,14rem,0);animation:"," 2.5s infinite linear alternate-reverse;}}}}"],u,p,g),T=function(e){var t=e.render;return i.a.createElement(s.c,null,function(e){var n=e.lang;return i.a.createElement(m.b,{query:"3050870841",render:function(e){var a=e.allFile.nodes.filter(function(e){return e.relativePath==="content/pages/404/"+n+".md"}).shift();if(!a)throw new Error("No content found for 404 page using language "+n);return t(a.childMarkdownRemark)},data:a})})};T.propTypes={render:l.a.func.isRequired},t.default=function(){return i.a.createElement(c.a,{headData:{meta:[{name:"robots",content:"noindex,nofollow"}]}},i.a.createElement(T,{render:function(e){var t=e.frontmatter;return i.a.createElement(r.Fragment,null,i.a.createElement(R,{className:"text-align-center"},i.a.createElement("h1",null,i.a.createElement("span",{className:"glitch","data-text":t.content.title.toUpperCase()},t.content.title.toUpperCase()),i.a.createElement("span",{className:"blink"}," _ "),i.a.createElement("span",{className:"glitch","data-text":"404"},"404")),i.a.createElement("h2",null,t.content.subtitle)),i.a.createElement(A,null,t.content.description))}}))}},425:function(e,t,n){"use strict";n(59),n(96),n(194),n(80),n(60),n(44),n(43),n(73);var a=n(426),r=n(0),i=n.n(r),o=n(2),l=n.n(o),m=n(434),c=n(41),d=n(7),s=n(16),f=["og:locale:alternate"];var h=function(e){var t=e.title,n=e.meta;return i.a.createElement(d.c,null,function(e){var r=e.lang,o=e.availableLocales,l=e.locale;return i.a.createElement(c.b,{query:"8840273",render:function(e){var a=e.siteHeadData,c=e.pageHeadData,d="/"===Object(s.e)(r)?"index":Object(s.e)(r).replace(/^\//,"").replace(/\/$/,"").replace(/\//g,"___"),h=c.nodes.filter(function(e){return e.relativePath==="content/meta/"+d+"."+r+".md"}).shift(),p=a.nodes.filter(function(e){return e.relativePath==="content/meta/__site."+r+".md"}).shift(),g=function(e){var t=e.componentHeadData,n=e.pageHeadData,a=e.siteHeadData,r=e.availableLocales,i=e.locale,o={};Object.keys(n).forEach(function(e){n[e]&&(o[e]=n[e])});var l=[],m=[];return[].concat(function(e,t){var n=[].concat(e);return n.splice(e.indexOf(t),1),n.map(function(e){return{name:"og:locale:alternate",content:e}})}(r,i),t.meta||[],o.meta||[],a.meta||[]).forEach(function(e){(e.content||e.file)&&(!f.includes(e.name)&&l.includes(e.name)||m.push({name:e.name,content:e.content||Object(s.c)(e.file)}),l.push(e.name))}),{title:t.title||o.title||a.title,meta:m.map(function(e){return e.name.match(/^og:/)?{property:e.name,content:e.content}:e})}}({componentHeadData:{title:t,meta:n},pageHeadData:h&&h.childMarkdownRemark.frontmatter&&h.childMarkdownRemark.frontmatter.head||{},siteHeadData:p&&p.childMarkdownRemark.frontmatter&&p.childMarkdownRemark.frontmatter.head||{},availableLocales:o,locale:l});return i.a.createElement(m.Helmet,{title:g.title,meta:g.meta},i.a.createElement("html",{lang:r}))},data:a})})};h.propTypes={title:l.a.string,meta:l.a.arrayOf(l.a.shape({name:l.a.string.isRequired,content:l.a.string,file:l.a.string}))},t.a=h},426:function(e){e.exports={data:{siteHeadData:{nodes:[{relativePath:"content/meta/__site.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter",meta:[{name:"description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"language",content:"en",file:""},{name:"twitter:card",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"twitter:site",content:"TV Gatsby Starter",file:""},{name:"twitter:creator",content:"TV Gatsby Starter",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-en.png"},{name:"og:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"og:type",content:"website",file:""},{name:"og:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"og:site_name",content:"TV Gatsby Starter",file:""},{name:"og:image",content:"",file:"/images/uploads/share-en.png"},{name:"robots",content:"index,follow",file:""}]}}}},{relativePath:"content/meta/__site.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter",meta:[{name:"description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"language",content:"en",file:""},{name:"twitter:card",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"twitter:site",content:"TV Gatsby Starter",file:""},{name:"twitter:creator",content:"TV Gatsby Starter",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-en.png"},{name:"og:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"og:type",content:"website",file:""},{name:"og:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"og:site_name",content:"TV Gatsby Starter",file:""},{name:"og:image",content:"",file:"/images/uploads/share-en.png"},{name:"robots",content:"index,follow",file:""}]}}}}]},pageHeadData:{nodes:[{relativePath:"content/meta/404.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter - Error 404 not found",meta:[{name:"description",content:"Error page not found",file:""},{name:"twitter:card",content:"Error page not found",file:""},{name:"twitter:title",content:"Error page not found",file:""},{name:"twitter:description",content:"Error page not found",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-404-en.png"},{name:"og:title",content:"Error page not found",file:""},{name:"og:description",content:"Error page not found",file:""},{name:"og:image",content:"",file:"/images/uploads/share-404-en.png"}]}}}},{relativePath:"content/meta/404.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter - Error 404 not found",meta:[{name:"description",content:"Error page not found",file:""},{name:"twitter:card",content:"Error page not found",file:""},{name:"twitter:title",content:"Error page not found",file:""},{name:"twitter:description",content:"Error page not found",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-404-en.png"},{name:"og:title",content:"Error page not found",file:""},{name:"og:description",content:"Error page not found",file:""},{name:"og:image",content:"",file:"/images/uploads/share-404-en.png"}]}}}},{relativePath:"content/meta/__site.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter",meta:[{name:"description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"language",content:"en",file:""},{name:"twitter:card",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"twitter:site",content:"TV Gatsby Starter",file:""},{name:"twitter:creator",content:"TV Gatsby Starter",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-en.png"},{name:"og:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"og:type",content:"website",file:""},{name:"og:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"og:site_name",content:"TV Gatsby Starter",file:""},{name:"og:image",content:"",file:"/images/uploads/share-en.png"},{name:"robots",content:"index,follow",file:""}]}}}},{relativePath:"content/meta/__site.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter",meta:[{name:"description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"language",content:"en",file:""},{name:"twitter:card",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"twitter:site",content:"TV Gatsby Starter",file:""},{name:"twitter:creator",content:"TV Gatsby Starter",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-en.png"},{name:"og:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"og:type",content:"website",file:""},{name:"og:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"og:site_name",content:"TV Gatsby Starter",file:""},{name:"og:image",content:"",file:"/images/uploads/share-en.png"},{name:"robots",content:"index,follow",file:""}]}}}},{relativePath:"content/meta/attraction.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TURISTICKÁ ATRAKCE - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/attraction.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TOURIST ATTRACTION - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/cube.en.md",childMarkdownRemark:{frontmatter:{head:{title:"CUBE - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/cube.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"KOSTKA - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/images.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"OBRAZY - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/hospital.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"NEMOCNICE - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/hospital.en.md",childMarkdownRemark:{frontmatter:{head:{title:"HOSPITAL - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/images.en.md",childMarkdownRemark:{frontmatter:{head:{title:"IMAGES - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/index.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TOMÁŠ VRÁNA PRÁCE",meta:[{name:"description",content:"TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/index.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TOMAS VRANA WORKS",meta:[{name:"description",content:"TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/information.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"INFORMACE - TOMÁŠ VRÁNA",meta:[{name:"description",content:"INFORMACE - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/information.en.md",childMarkdownRemark:{frontmatter:{head:{title:"INFORMATION - TOMAS VRANA",meta:[{name:"description",content:"INFORMATION - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/islam.en.md",childMarkdownRemark:{frontmatter:{head:{title:"ISLAM COMING - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/konevmen.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"KONĚVMEN - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/islam.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"VYSLÁN ISLÁM - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/kolos-of-ostrava.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"KOLOS OF OSTRAVA - TV PRESENTS - TOMÁŠ VRÁNA",meta:[{name:"description",content:"KOLOS OF OSTRAVA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/kolos-of-ostrava.en.md",childMarkdownRemark:{frontmatter:{head:{title:"KOLOS OF OSTRAVA - TV PRESENTS - TOMAS VRANA",meta:[{name:"description",content:"KOLOS OF OSTRAVA - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/konevmen.en.md",childMarkdownRemark:{frontmatter:{head:{title:"KONEVMEN - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/maniac.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"MANIAK - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/maniac.en.md",childMarkdownRemark:{frontmatter:{head:{title:"MANIAC - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/messenger.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"POSLÍČEK - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/messenger.en.md",childMarkdownRemark:{frontmatter:{head:{title:"MESSENGER - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/progress.en.md",childMarkdownRemark:{frontmatter:{head:{title:"PROGRESS - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/mother.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"MATKA - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/nepu.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"NEPÚ - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/mother.en.md",childMarkdownRemark:{frontmatter:{head:{title:"MOTHER - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/rainbowball.en.md",childMarkdownRemark:{frontmatter:{head:{title:"RAINBOW BALL - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/nepu.en.md",childMarkdownRemark:{frontmatter:{head:{title:"NEPU - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/rainbowball.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"DUHOVKA - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/progress.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"POKROK - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/spaces.en.md",childMarkdownRemark:{frontmatter:{head:{title:"SPACES - TOMAS VRANA",meta:[{name:"description",content:"SPACES - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/spaces.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"PROSTOR - TOMÁŠ VRÁNA",meta:[{name:"description",content:"PROSTOR - TOMÁŠ VRÁNA",file:""}]}}}}]}}}},427:function(e){e.exports={data:{allFile:{nodes:[{relativePath:"content/footer/en.md",childMarkdownRemark:{html:"",frontmatter:{title:"En (English) footer content",content:{left:"TOMAS VRANA",rights:"All rights reserved",info:"Information",infolink:"/information/"}}}},{relativePath:"content/footer/cz.md",childMarkdownRemark:{html:"",frontmatter:{title:"En (English) footer content",content:{left:"Tomáš Vrána",rights:"Všechna práva vyhrazena",info:"Informace",infolink:"/information/"}}}}]}}}},428:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(2),o=n.n(i),l=n(20),m=Object(l.e)(["0%{width:0;padding-bottom:0;opacity:1;}100%{width:100%;padding-bottom:100%;opacity:0;}"]),c=l.d.div.withConfig({displayName:"Loader__Container",componentId:"sc-1m03rig-0"})(["position:relative;display:inline-block;width:","rem;height:","rem;> div{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:","rem;border:4px solid ",";opacity:1;border-radius:50%;animation:"," 1.6s cubic-bezier(0,0.2,0.8,1) infinite;box-sizing:content-box;&:nth-of-type(2){animation-delay:-0.33s;}&:last-of-type{animation-delay:-0.66s;}}"],function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.theme.colors.interactive},m),d=function(e){var t=e.size;return r.a.createElement(c,{size:t},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))};d.propTypes={size:o.a.number},d.defaultProps={size:10};var s=d,f=l.d.div.withConfig({displayName:"PageLoader__Container",componentId:"sc-1jv81q3-0"})(["display:inline-block;left:50%;position:relative;transform:translateX(-50%);"]);t.a=function(){return r.a.createElement(f,null,r.a.createElement(s,null))}},429:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(20),o=(n(42),n(427)),l=n(2),m=n.n(l),c=n(41),d=n(7),s=function(e){var t=e.render;return r.a.createElement(d.c,null,function(e){var n=e.lang;return r.a.createElement(c.b,{query:"2761180160",render:function(e){var a=e.allFile.nodes.filter(function(e){return e.relativePath==="content/footer/"+n+".md"}).shift();if(!a||!a.childMarkdownRemark)throw new Error("No footer translations found for language "+n);return t(Object.assign({},a.childMarkdownRemark.frontmatter,{html:a.childMarkdownRemark.html}))},data:o})})};s.propTypes={render:m.a.func.isRequired};var f=s,h=n(133),p=i.d.footer.withConfig({displayName:"Footer__Container",componentId:"a1f04j-0"})(["width:100%;max-width:",";padding:0 2rem;margin:0 auto;display:block;letter-spacing:0.08em;margin-top:15rem;margin-bottom:3rem;text-transform:uppercase;font-size:60%;letter-spacing:.2rem;img{margin:0;}.left{text-align:left;float:left;}.right{text-align:right;}@media screen and (max-width:","px){.left{text-align:center;float:none;}.right{text-align:center;}}&.home{position:absolute;bottom:0;left:0;width:100%;color:white;z-index:88;opacity:.5}"],function(e){return e.theme.dimensions.contentWidth},function(e){return e.theme.dimensions.mobileBreakpoint-1}),g=function(e){return r.a.createElement(a.Fragment,null,r.a.createElement(f,{render:function(t){return r.a.createElement(p,{className:e.home?"home":""},e.home&&r.a.createElement(h.a,null),r.a.createElement("div",{className:"left"},"2022 © ",t.content.left),r.a.createElement("div",{className:"right"},t.content.rights))}}))};g.propTypes={home:m.a.bool};t.a=g},431:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(2),o=n.n(i),l=n(20),m=n(433),c=n.n(m),d=n(425),s=n(428),f=n(7),h=n(16),p=n(429),g=l.d.main.withConfig({displayName:"Layout__Main",componentId:"twoqhg-0"})(["position:relative;z-index:1;margin:0 auto;width:100%;padding:10em 0;opacity:1;transition:0.5s opacity ease-in-out;max-width:",";&.page-content-enter{opacity:0;}&.page-content-enter-active,&.page-content-leave{opacity:1;}&.page-content-leave-active{opacity:0;}"],function(e){return e.theme.dimensions.contentWidth}),A=l.d.div.withConfig({displayName:"Layout__PageLoaderContainer",componentId:"twoqhg-1"})(["opacity:1;transition:0.5s opacity ease-in-out;&.page-content-enter{opacity:0;}&.page-content-enter-active,&.page-content-leave{opacity:1;}&.page-content-leave-active{opacity:0;}"]),u=function(e){var t=e.children,n=e.pageLoading,i=Object(a.useState)(null),o=i[0],l=i[1],m=Object(a.useState)(null),d=m[0],f=m[1];return Object(a.useEffect)(function(){var e;return n?(l(!1),f(!0)):(f(!1),e=setTimeout(function(){l(!0)},500)),function(){clearTimeout(e)}},[n]),r.a.createElement(c.a,{transitionName:"page-content",transitionEnterTimeout:500,transitionLeaveTimeout:500},(null===d&&n||d)&&r.a.createElement(A,{key:"page_loader_"+Object(h.d)()},r.a.createElement(s.a,null)),(null===o&&!n||o)&&r.a.createElement(g,{key:"page_content_"+Object(h.d)()},t))};u.propTypes={children:o.a.node,pageLoading:o.a.bool};var R=function(e){var t=e.children,n=e.headData,i=void 0===n?null:n;return r.a.createElement(f.g,null,function(e){var n=e.loading;return r.a.createElement(a.Fragment,null,r.a.createElement(d.a,i),r.a.createElement(u,{pageLoading:n},t),r.a.createElement(p.a,null))})};R.propTypes={children:u.propTypes.children,headData:o.a.object},t.a=R},444:function(e){e.exports={data:{allFile:{nodes:[{relativePath:"content/pages/404/cz.md",childMarkdownRemark:{frontmatter:{content:{title:"Error Code",description:"The requested page cannot be found. It may have been removed or the link can be broken. If you entered a web address please check it was correct and try again.",subtitle:"PAGE NOT FOUND"}}}},{relativePath:"content/pages/404/en.md",childMarkdownRemark:{frontmatter:{content:{title:"Error Code",description:"The requested page cannot be found. It may have been removed or the link can be broken. If you entered a web address please check it was correct and try again.",subtitle:"PAGE NOT FOUND"}}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-eecf1ee16d143b23a998.js.map