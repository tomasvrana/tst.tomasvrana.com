(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{410:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(2),o=a.n(r),l=a(22),m=a(435),c=a.n(m),d=a(429),s=a(432),f=a(3),h=a(15),p=a(431),g=l.d.main.withConfig({displayName:"Home__Main",componentId:"hx3q39-0"})(["position:relative;z-index:1;margin:0;width:100%;padding:0;opacity:1;transition:0.5s opacity ease-in-out;&.page-content-enter{opacity:0;}&.page-content-enter-active,&.page-content-leave{opacity:1;}&.page-content-leave-active{opacity:0;}"]),A=l.d.div.withConfig({displayName:"Home__PageLoaderContainer",componentId:"hx3q39-1"})(["opacity:1;transition:0.5s opacity ease-in-out;&.page-content-enter{opacity:0;}&.page-content-enter-active,&.page-content-leave{opacity:1;}&.page-content-leave-active{opacity:0;}"]),u=function(e){var t=e.children,a=e.pageLoading,r=Object(n.useState)(null),o=r[0],l=r[1],m=Object(n.useState)(null),d=m[0],f=m[1];return Object(n.useEffect)(function(){var e;return a?(l(!1),f(!0)):(f(!1),e=setTimeout(function(){l(!0)},500)),function(){clearTimeout(e)}},[a]),i.a.createElement(c.a,{transitionName:"page-content",transitionEnterTimeout:500,transitionLeaveTimeout:500},(null===d&&a||d)&&i.a.createElement(A,{key:"page_loader_"+Object(h.d)()},i.a.createElement(s.a,null)),(null===o&&!a||o)&&i.a.createElement(g,{key:"page_content_"+Object(h.d)()},t))};u.propTypes={children:o.a.node,pageLoading:o.a.bool};var R=function(e){var t=e.children,a=e.headData,r=void 0===a?null:a;return i.a.createElement(f.i,null,function(e){var a=e.loading;return i.a.createElement(n.Fragment,null,i.a.createElement(d.a,r),i.a.createElement(u,{pageLoading:a},t),i.a.createElement(p.a,{home:!0}))})};R.propTypes={children:u.propTypes.children,headData:o.a.object};var T=R,M=a(460),b=a(59),k=function(e){var t=e.render;return i.a.createElement(f.c,null,function(e){var a=e.lang;return i.a.createElement(b.b,{query:"343462196",render:function(e){var n=e.allFile.nodes.filter(function(e){return e.relativePath==="content/pages/index/"+a+".md"}).shift();if(!n)throw new Error("No content found for home page using language "+a);return t(n.childMarkdownRemark)},data:M})})};k.propTypes={render:o.a.func.isRequired};a(196),a(98);var O=l.d.div.withConfig({displayName:"Noise__Container",componentId:"c7dpqf-0"})(["@keyframes gradient{0%{background-position:0% 100%;}50%{background-position:0% 0%;}100%{background-position:0% 100%;}}@keyframes barsmove{0%{background-position:0% 0%;}100%{background-position:100% 0%;}}.grad{position:absolute;width:100%;height:100%;background:linear-gradient(-3deg,rgba(0,0,0,0) 20%,rgba(0,0,20,.3) 50%,rgba(0,0,0,0) 80%);animation:gradient 10s ease infinite;background-size:200% 200%;}.bars{position:absolute;opacity:.05;width:100%;height:100%;background:linear-gradient(91deg,#fff 0%,#fff 6%,#ff0 7%,#ff0 14%,#0ff 15%,#0ff 21%,#0f0 22%,#0f0 28%,#f0f 29%,#f0f 35%,#f00 36%,#f00 42%,#00f 43%,#00f 49%,#fff 50%,#fff 56%,#ff0 57%,#ff0 63%,#0ff 64%,#0ff 70%,#0f0 71%,#0f0 77%,#f0f 78%,#f0f 84%,#f00 85%,#f00 93%,#00f 94%,#00f 100%);animation:barsmove 7s linear infinite;background-size:215% 215%;}.bars.fast{animation:barsmove 1s linear infinite;}.bars.in{opacity:.04;}.barsback{position:absolute;opacity:.04;width:100%;height:100%;background:linear-gradient(-90deg,#fff 0%,#fff 6%,#ff0 7%,#ff0 14%,#0ff 15%,#0ff 21%,#0f0 22%,#0f0 28%,#f0f 29%,#f0f 35%,#f00 36%,#f00 42%,#00f 43%,#00f 49%,#fff 50%,#fff 56%,#ff0 57%,#ff0 63%,#0ff 64%,#0ff 70%,#0f0 71%,#0f0 77%,#f0f 78%,#f0f 84%,#f00 85%,#f00 93%,#00f 94%,#00f 100%);animation:barsmove 3s linear infinite;background-size:215% 215%;}.barsback.fast{animation:barsmove .5s linear infinite;}.barsback.in{opacity:.1;}#canvas{width:100%;height:100%;}#info{position:absolute;font-size:3rem;top:10rem;left:10rem;color:red}#info2{position:absolute;font-size:3rem;top:14rem;left:10rem;color:red}"]),v=function(){var e,t,a,r=Object(n.useState)(!0),o=r[0],l=r[1],m=Object(n.useState)(!0),c=m[0],d=m[1],s=Object(n.useState)(!0),h=s[0],p=s[1],g=Object(n.useState)(!0),A=g[0],u=g[1],R=!0,T=0,M=300,b=!0,k=0,v=500,w=!0,V=0,S=100,N=!0,y=0,E=400,P=!0;var C=function n(){k++,V++,y++,++T>M&&(M=Math.floor(1e3*Math.random()),l(b=!b),T=0),k>v&&(v=Math.floor(1e3*Math.random()),d(w=!w),k=0),V>S&&(S=Math.floor(1e3*Math.random()),p(N=!N),V=0),y>E&&(E=Math.floor(1e3*Math.random()),u(P=!P),y=0),(R=!R)?a=requestAnimationFrame(n):(!function(t){e.width=window.innerWidth,e.height=window.innerHeight;for(var a=t.canvas.width,n=t.canvas.height,i=t.createImageData(a,n),r=new Uint32Array(i.data.buffer),o=r.length,l=0;l<o;)r[l++]=(250*Math.random()|180)<<24;t.putImageData(i,0,0)}(t),a=requestAnimationFrame(n))};return Object(n.useEffect)(function(){return e=document.getElementById("canvas"),t=e.getContext("2d"),C(),function(){cancelAnimationFrame(a)}},[]),i.a.createElement(f.g,null,function(e){var t=e.updateNavActive;return i.a.createElement(O,null,t(""),i.a.createElement("div",{className:"bars "+(o?"fast":"")+" "+(h?"in":"")}),i.a.createElement("div",{className:"barsback "+(c?"fast":"")+" "+(A?"in":"")}),i.a.createElement("div",{className:"grad"}),i.a.createElement("canvas",{id:"canvas"}))})};t.default=function(){return i.a.createElement(T,null,i.a.createElement(v,null))}},429:function(e,t,a){"use strict";a(60),a(97),a(195),a(82),a(61),a(42),a(41),a(74);var n=a(430),i=a(0),r=a.n(i),o=a(2),l=a.n(o),m=a(436),c=a(59),d=a(3),s=a(15),f=["og:locale:alternate"];var h=function(e){var t=e.title,a=e.meta;return r.a.createElement(d.c,null,function(e){var i=e.lang,o=e.availableLocales,l=e.locale;return r.a.createElement(c.b,{query:"8840273",render:function(e){var n=e.siteHeadData,c=e.pageHeadData,d="/"===Object(s.e)(i)?"index":Object(s.e)(i).replace(/^\//,"").replace(/\/$/,"").replace(/\//g,"___"),h=c.nodes.filter(function(e){return e.relativePath==="content/meta/"+d+"."+i+".md"}).shift(),p=n.nodes.filter(function(e){return e.relativePath==="content/meta/__site."+i+".md"}).shift(),g=function(e){var t=e.componentHeadData,a=e.pageHeadData,n=e.siteHeadData,i=e.availableLocales,r=e.locale,o={};Object.keys(a).forEach(function(e){a[e]&&(o[e]=a[e])});var l=[],m=[];return[].concat(function(e,t){var a=[].concat(e);return a.splice(e.indexOf(t),1),a.map(function(e){return{name:"og:locale:alternate",content:e}})}(i,r),t.meta||[],o.meta||[],n.meta||[]).forEach(function(e){(e.content||e.file)&&(!f.includes(e.name)&&l.includes(e.name)||m.push({name:e.name,content:e.content||Object(s.c)(e.file)}),l.push(e.name))}),{title:t.title||o.title||n.title,meta:m.map(function(e){return e.name.match(/^og:/)?{property:e.name,content:e.content}:e})}}({componentHeadData:{title:t,meta:a},pageHeadData:h&&h.childMarkdownRemark.frontmatter&&h.childMarkdownRemark.frontmatter.head||{},siteHeadData:p&&p.childMarkdownRemark.frontmatter&&p.childMarkdownRemark.frontmatter.head||{},availableLocales:o,locale:l});return r.a.createElement(m.Helmet,{title:g.title,meta:g.meta},r.a.createElement("html",{lang:i}))},data:n})})};h.propTypes={title:l.a.string,meta:l.a.arrayOf(l.a.shape({name:l.a.string.isRequired,content:l.a.string,file:l.a.string}))},t.a=h},430:function(e){e.exports={data:{siteHeadData:{nodes:[{relativePath:"content/meta/__site.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter",meta:[{name:"description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"language",content:"en",file:""},{name:"twitter:card",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"twitter:site",content:"TV Gatsby Starter",file:""},{name:"twitter:creator",content:"TV Gatsby Starter",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-en.png"},{name:"og:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"og:type",content:"website",file:""},{name:"og:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"og:site_name",content:"TV Gatsby Starter",file:""},{name:"og:image",content:"",file:"/images/uploads/share-en.png"},{name:"robots",content:"index,follow",file:""}]}}}},{relativePath:"content/meta/__site.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter",meta:[{name:"description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"language",content:"en",file:""},{name:"twitter:card",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"twitter:site",content:"TV Gatsby Starter",file:""},{name:"twitter:creator",content:"TV Gatsby Starter",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-en.png"},{name:"og:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"og:type",content:"website",file:""},{name:"og:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"og:site_name",content:"TV Gatsby Starter",file:""},{name:"og:image",content:"",file:"/images/uploads/share-en.png"},{name:"robots",content:"index,follow",file:""}]}}}}]},pageHeadData:{nodes:[{relativePath:"content/meta/404.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter - Error 404 not found",meta:[{name:"description",content:"Error page not found",file:""},{name:"twitter:card",content:"Error page not found",file:""},{name:"twitter:title",content:"Error page not found",file:""},{name:"twitter:description",content:"Error page not found",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-404-en.png"},{name:"og:title",content:"Error page not found",file:""},{name:"og:description",content:"Error page not found",file:""},{name:"og:image",content:"",file:"/images/uploads/share-404-en.png"}]}}}},{relativePath:"content/meta/404.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter - Error 404 not found",meta:[{name:"description",content:"Error page not found",file:""},{name:"twitter:card",content:"Error page not found",file:""},{name:"twitter:title",content:"Error page not found",file:""},{name:"twitter:description",content:"Error page not found",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-404-en.png"},{name:"og:title",content:"Error page not found",file:""},{name:"og:description",content:"Error page not found",file:""},{name:"og:image",content:"",file:"/images/uploads/share-404-en.png"}]}}}},{relativePath:"content/meta/__site.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter",meta:[{name:"description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"language",content:"en",file:""},{name:"twitter:card",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"twitter:site",content:"TV Gatsby Starter",file:""},{name:"twitter:creator",content:"TV Gatsby Starter",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-en.png"},{name:"og:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"og:type",content:"website",file:""},{name:"og:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"og:site_name",content:"TV Gatsby Starter",file:""},{name:"og:image",content:"",file:"/images/uploads/share-en.png"},{name:"robots",content:"index,follow",file:""}]}}}},{relativePath:"content/meta/__site.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter",meta:[{name:"description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"language",content:"en",file:""},{name:"twitter:card",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"twitter:site",content:"TV Gatsby Starter",file:""},{name:"twitter:creator",content:"TV Gatsby Starter",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-en.png"},{name:"og:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"og:type",content:"website",file:""},{name:"og:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"og:site_name",content:"TV Gatsby Starter",file:""},{name:"og:image",content:"",file:"/images/uploads/share-en.png"},{name:"robots",content:"index,follow",file:""}]}}}},{relativePath:"content/meta/attraction.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TOURIST ATTRACTION - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/attraction.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TURISTICKÁ ATRAKCE - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/duracel.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"DURACEL - TOMÁŠ VRÁNA",meta:[{name:"description",content:"PROSTOR - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/cube.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"KOSTKA - TOMÁŠ VRÁNA",meta:[{name:"description",content:"KOSTKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/cube.en.md",childMarkdownRemark:{frontmatter:{head:{title:"CUBE - TOMAS VRANA",meta:[{name:"description",content:"CUBE - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/duracel.en.md",childMarkdownRemark:{frontmatter:{head:{title:"DURACEL - TOMAS VRANA",meta:[{name:"description",content:"SPACES - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/hospital.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"NEMOCNICE - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/images.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"OBRAZY - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/images.en.md",childMarkdownRemark:{frontmatter:{head:{title:"IMAGES - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/hospital.en.md",childMarkdownRemark:{frontmatter:{head:{title:"HOSPITAL - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/index.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TOMÁŠ VRÁNA PRÁCE",meta:[{name:"description",content:"TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/information.en.md",childMarkdownRemark:{frontmatter:{head:{title:"INFORMATION - TOMAS VRANA",meta:[{name:"description",content:"INFORMATION - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/index.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TOMAS VRANA WORKS",meta:[{name:"description",content:"TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/information.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"INFORMACE - TOMÁŠ VRÁNA",meta:[{name:"description",content:"INFORMACE - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/islam.en.md",childMarkdownRemark:{frontmatter:{head:{title:"ISLAM COMING - TOMAS VRANA",meta:[{name:"description",content:"ISLAM COMING - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/islam.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"VYSLÁN ISLÁM - TOMÁŠ VRÁNA",meta:[{name:"description",content:"VYSLÁN ISLÁM - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/kolos-of-ostrava.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"KOLOS OF OSTRAVA - TV PRESENTS - TOMÁŠ VRÁNA",meta:[{name:"description",content:"KOLOS OF OSTRAVA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/kolos-of-ostrava.en.md",childMarkdownRemark:{frontmatter:{head:{title:"KOLOS OF OSTRAVA - TV PRESENTS - TOMAS VRANA",meta:[{name:"description",content:"KOLOS OF OSTRAVA - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/konevmen.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"KONĚVMEN - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/konevmen.en.md",childMarkdownRemark:{frontmatter:{head:{title:"KONEVMEN - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/maniac.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"MANIAK - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/maniac.en.md",childMarkdownRemark:{frontmatter:{head:{title:"MANIAC - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/messenger.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"POSLÍČEK - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/mother.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"MATKA - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/mother.en.md",childMarkdownRemark:{frontmatter:{head:{title:"MOTHER - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/messenger.en.md",childMarkdownRemark:{frontmatter:{head:{title:"MESSENGER - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/nepu.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"NEPÚ - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/progress.en.md",childMarkdownRemark:{frontmatter:{head:{title:"PROGRESS - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/progress.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"POKROK - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/nepu.en.md",childMarkdownRemark:{frontmatter:{head:{title:"NEPU - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/rainbowball.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"DUHOVKA - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/rainbowball.en.md",childMarkdownRemark:{frontmatter:{head:{title:"RAINBOW BALL - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/spaces.en.md",childMarkdownRemark:{frontmatter:{head:{title:"SPACES - TOMAS VRANA",meta:[{name:"description",content:"SPACES - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/spaces.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"PROSTOR - TOMÁŠ VRÁNA",meta:[{name:"description",content:"PROSTOR - TOMÁŠ VRÁNA",file:""}]}}}}]}}}},431:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(22),o=a(2),l=a.n(o),m=a(3),c=a(98),d=a(83),s=a(81),f=a(73),h=a(135),p=a(434),g=r.d.footer.withConfig({displayName:"Footer__Container",componentId:"a1f04j-0"})(["width:100%;max-width:",";padding:0 2rem;margin:0 auto;display:block;letter-spacing:0.08em;margin-top:15rem;margin-bottom:3rem;text-transform:uppercase;font-size:60%;letter-spacing:.2rem;img{margin:0;}.left{text-align:left;float:left;line-height:1;.github{font-size:150%;line-height:.1;vertical-align:middle;}}.right{text-align:right;}.menu{display:none;list-style-type:none;text-align:center;}&.home,&.nav-toggled{position:fixed;bottom:0;left:0;max-width:100%;width:100%;color:white;z-index:15;.left,.right{opacity:.5;}}.lang-picker{margin-bottom:4rem;font-size:180%;display:none;animation:langin 6s ease;}@keyframes langin{0%,60%{opacity:0}100%{opacity:1}}@media screen and (max-width:","px){.left{text-align:center;float:none;}.right{text-align:center;}.lang-picker{display:block;text-align:center;}&.home,&.nav-toggled{.menu{display:block;margin:-1rem 0 3rem 0;li{display:none;&.item-2{display:block;font-size:160%;a{color:white}}}}}}"],function(e){return e.theme.dimensions.contentWidth},function(e){return e.theme.dimensions.mobileBreakpoint-1}),A=function(e){return i.a.createElement(m.e,null,function(t){var a=t.toggle;return i.a.createElement(n.Fragment,null,i.a.createElement(d.a,{render:function(t){var r=t.frontmatter;return i.a.createElement(g,{className:(e.home?"home":"")+" "+(a?"nav-toggled":"")},(e.home||a)&&i.a.createElement(n.Fragment,null,i.a.createElement(c.a,null),i.a.createElement(h.a,null)),i.a.createElement("div",{className:"left"},i.a.createElement(f.a,null,"2022")," © ",i.a.createElement(f.a,null,r.footer.left)," ",i.a.createElement(s.a,{href:"https://github.com/tomasvrana/tomasvrana.com",className:"github",target:"_blank"},i.a.createElement(p.b,null))),i.a.createElement("div",{className:"right"},i.a.createElement(f.a,null,r.footer.rights)))}}))})};A.propTypes={home:l.a.bool},t.a=A},432:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(2),o=a.n(r),l=a(22),m=Object(l.e)(["0%{width:0;padding-bottom:0;opacity:1;}100%{width:100%;padding-bottom:100%;opacity:0;}"]),c=l.d.div.withConfig({displayName:"Loader__Container",componentId:"sc-1m03rig-0"})(["position:relative;display:inline-block;width:","rem;height:","rem;> div{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:","rem;border:4px solid ",";opacity:1;border-radius:50%;animation:"," 1.6s cubic-bezier(0,0.2,0.8,1) infinite;box-sizing:content-box;&:nth-of-type(2){animation-delay:-0.33s;}&:last-of-type{animation-delay:-0.66s;}}"],function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.theme.colors.interactive},m),d=function(e){var t=e.size;return i.a.createElement(c,{size:t},i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null))};d.propTypes={size:o.a.number},d.defaultProps={size:10};var s=d,f=l.d.div.withConfig({displayName:"PageLoader__Container",componentId:"sc-1jv81q3-0"})(["display:inline-block;left:50%;position:relative;transform:translateX(-50%);"]);t.a=function(){return i.a.createElement(f,null,i.a.createElement(s,null))}},460:function(e){e.exports={data:{allFile:{nodes:[{relativePath:"content/pages/index/cz.md",childMarkdownRemark:{frontmatter:{content:{title:"Let me thing!"}}}},{relativePath:"content/pages/index/en.md",childMarkdownRemark:{frontmatter:{content:{title:"Let me thing!"}}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-de1f992cecaced6f198d.js.map