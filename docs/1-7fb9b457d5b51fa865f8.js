(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{427:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(2),o=n.n(r),l=n(22),m=n(435),c=n.n(m),s=n(429),d=n(432),f=n(3),p=n(15),h=n(431),u=l.d.main.withConfig({displayName:"Layout__Main",componentId:"twoqhg-0"})(["position:relative;z-index:1;margin:0 auto;width:100%;padding:10em 0;opacity:1;transition:0.5s opacity ease-in-out;max-width:",";&.page-content-enter{opacity:0;}&.page-content-enter-active,&.page-content-leave{opacity:1;}&.page-content-leave-active{opacity:0;}"],function(e){return e.theme.dimensions.contentWidth}),g=l.d.div.withConfig({displayName:"Layout__PageLoaderContainer",componentId:"twoqhg-1"})(["opacity:1;transition:0.5s opacity ease-in-out;&.page-content-enter{opacity:0;}&.page-content-enter-active,&.page-content-leave{opacity:1;}&.page-content-leave-active{opacity:0;}"]),b=function(e){var t=e.children,n=e.pageLoading,r=Object(a.useState)(null),o=r[0],l=r[1],m=Object(a.useState)(null),s=m[0],f=m[1];return Object(a.useEffect)(function(){var e;return n?(l(!1),f(!0)):(f(!1),e=setTimeout(function(){l(!0)},500)),function(){clearTimeout(e)}},[n]),i.a.createElement(c.a,{transitionName:"page-content",transitionEnterTimeout:500,transitionLeaveTimeout:500},(null===s&&n||s)&&i.a.createElement(g,{key:"page_loader_"+Object(p.d)()},i.a.createElement(d.a,null)),(null===o&&!n||o)&&i.a.createElement(u,{key:"page_content_"+Object(p.d)()},t))};b.propTypes={children:o.a.node,pageLoading:o.a.bool};var A=function(e){var t=e.children,n=e.headData,r=void 0===n?null:n;return i.a.createElement(f.i,null,function(e){var n=e.loading;return i.a.createElement(a.Fragment,null,i.a.createElement(s.a,r),i.a.createElement(b,{pageLoading:n},t),i.a.createElement(h.a,null))})};A.propTypes={children:b.propTypes.children,headData:o.a.object},t.a=A},428:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(22),o=n(438),l=n(2),m=n.n(l),c=n(3),s=n(83),d=n(433),f=n(73),p=(n(47),function(e){var t,n=Object(a.useState)(""),r=n[0],o=n[1],l="abcdefghijklmnopqrstuvxyz ,.ěščřžýáíéúů 0123456789",m=e.children,c="",s=0,d=0,f=[],p=l.split(""),h=m.split("");function u(){if(d<m.length){c="",++s>=p.length&&(s=0),h[d].toLowerCase()==p[s].toLowerCase()&&d++;for(var e=0;e<d;e++)c+=h[e];o(c+p[s]),t=requestAnimationFrame(u)}else d==m.length&&o(c),cancelAnimationFrame(t)}return Object(a.useEffect)(function(){return function(){for(var e=0;e<h.length;e++)f[e]=Math.round(Math.random()*h.length);u()}(),function(){}},[]),i.a.createElement(a.Fragment,null,r)});p.propTypes={children:m.a.children};var h=p,u=r.d.div.withConfig({displayName:"Item__Container",componentId:"sc-16ne94t-0"})(["text-align:center;h1{margin:0 0 1rem 0;filter:blur(1px);animation:blur1 8s cubic-bezier(0.68,-0.6,0.32,1.6) 0s infinite;-webkit-animation:blur1 8s cubic-bezier(0.68,-0.6,0.32,1.6) 0s infinite;-moz-animation:blur1 8s cubic-bezier(0.68,-0.6,0.32,1.6) 0s infinite;@keyframes blur1{0%{-webkit-filter:blur(1px);-moz-filter:blur(1px);-o-filter:blur(1px);-ms-filter:blur(1px);}10%,100%{-webkit-filter:blur(0px);-moz-filter:blur(0px);-o-filter:blur(0px);-ms-filter:blur(0px);}}}.desc{padding:2em 0 4em 0;max-width:760px;margin:auto;@media screen and (max-width:","px){padding-left:1em;padding-right:1em;}}.media{padding:.8rem 0 1rem 0;color:#999;animation:blur2 5s cubic-bezier(0.68,-0.6,0.32,1.6) 0s infinite;-webkit-animation:blur2 5s cubic-bezier(0.68,-0.6,0.32,1.6) 0s infinite;-moz-animation:blur2 5s cubic-bezier(0.68,-0.6,0.32,1.6) 0s infinite;@keyframes blur2{0%,40%,50%{-webkit-filter:blur(0px);-moz-filter:blur(0px);-o-filter:blur(0px);-ms-filter:blur(0px);}45%{-webkit-filter:blur(1px);-moz-filter:blur(1px);-o-filter:blur(1px);-ms-filter:blur(1px);}}}small{text-transform:uppercase;filter:blur(1px);animation:blur3 4s ease 0s infinite;-webkit-animation:blur3 4s ease 0s infinite;-moz-animation:blur3 4s ease 0s infinite;@keyframes blur3{0%,10%{-webkit-filter:blur(1px);-moz-filter:blur(1px);-o-filter:blur(1px);-ms-filter:blur(1px);}15%,100%{-webkit-filter:blur(0px);-moz-filter:blur(0px);-o-filter:blur(0px);-ms-filter:blur(0px);}}}.images{img{padding:0  0 10rem;animation:blurimg 1s ease;-webkit-animation:blurimg 1s ease;-moz-animation:blurimg 1s ease;@keyframes blurimg{0%{-webkit-filter:blur(50px);-moz-filter:blur(50px);-o-filter:blur(50px);-ms-filter:blur(50px);}0%,10%,20%,30%,40%,60%,80%{opacity:0;}5%{opacity:.1;}15%{opacity:.3;}25%{opacity:.5;}35%{opacity:.6;}50%{opacity:.5;}70%{opacity:.6;}100%{opacity:1;-webkit-filter:blur(0px);-moz-filter:blur(0px);-o-filter:blur(0px);-ms-filter:blur(0px);}}@media screen and (max-width:","px){padding:0  0 3rem;}}}.cooperation{font-weight:400;font-size:85%;margin:1rem 0 0 0;animation:blur4 10s cubic-bezier(0.68,-0.6,0.32,1.6) 0s infinite;-webkit-animation:blur4 10s cubic-bezier(0.68,-0.6,0.32,1.6) 0s infinite;-moz-animation:blur4 10s cubic-bezier(0.68,-0.6,0.32,1.6) 0s infinite;@keyframes blur4{0%,50%,65%{-webkit-filter:blur(0px);-moz-filter:blur(0px);-o-filter:blur(0px);-ms-filter:blur(0px);}60%{-webkit-filter:blur(1px);-moz-filter:blur(1px);-o-filter:blur(1px);-ms-filter:blur(1px);}}div{font-size:75%;text-transform:uppercase;}}"],function(e){return e.theme.dimensions.mobileBreakpoint-1},function(e){return e.theme.dimensions.mobileBreakpoint-1}),g=function(e){var t=e.content.year+", "+e.content.type+", "+e.content.location;return i.a.createElement(s.a,{render:function(n){var a=n.frontmatter;return i.a.createElement(c.g,null,function(n){n.navActive;var r=n.updateNavActive;return i.a.createElement(u,null,r(e.content.parent),i.a.createElement("div",{className:"top"},i.a.createElement(d.a,{large:!0,rewrite:e.content.subtitle&&e.content.subtitle},e.content.title),i.a.createElement("small",null,i.a.createElement(h,null,t)),e.content.cooperation&&i.a.createElement("div",{className:"cooperation"},i.a.createElement("div",null,i.a.createElement(f.a,null,a.others.cooperation)),i.a.createElement(f.a,null,e.content.cooperation)),i.a.createElement("div",{className:"media"},i.a.createElement(f.a,null,e.content.media),e.content.width&&i.a.createElement("span",null," (",e.content.width,"×",e.content.height,")")),i.a.createElement("div",{className:"desc"},i.a.createElement(f.a,{introVal:50,method:"quicktype",delay:1e3},e.content.description))),i.a.createElement("div",{className:"images"},e.content.images.map(function(t,n){return i.a.createElement("img",{key:"img-"+n,src:t.src,alt:e.content.image})})),i.a.createElement(o.a,{title:a.others.back,href:e.content.parent,back:!0}))})}})};g.propTypes={content:m.a.object};t.a=g},429:function(e,t,n){"use strict";n(60),n(97),n(195),n(82),n(61),n(42),n(41),n(74);var a=n(430),i=n(0),r=n.n(i),o=n(2),l=n.n(o),m=n(436),c=n(59),s=n(3),d=n(15),f=["og:locale:alternate"];var p=function(e){var t=e.title,n=e.meta;return r.a.createElement(s.c,null,function(e){var i=e.lang,o=e.availableLocales,l=e.locale;return r.a.createElement(c.b,{query:"8840273",render:function(e){var a=e.siteHeadData,c=e.pageHeadData,s="/"===Object(d.e)(i)?"index":Object(d.e)(i).replace(/^\//,"").replace(/\/$/,"").replace(/\//g,"___"),p=c.nodes.filter(function(e){return e.relativePath==="content/meta/"+s+"."+i+".md"}).shift(),h=a.nodes.filter(function(e){return e.relativePath==="content/meta/__site."+i+".md"}).shift(),u=function(e){var t=e.componentHeadData,n=e.pageHeadData,a=e.siteHeadData,i=e.availableLocales,r=e.locale,o={};Object.keys(n).forEach(function(e){n[e]&&(o[e]=n[e])});var l=[],m=[];return[].concat(function(e,t){var n=[].concat(e);return n.splice(e.indexOf(t),1),n.map(function(e){return{name:"og:locale:alternate",content:e}})}(i,r),t.meta||[],o.meta||[],a.meta||[]).forEach(function(e){(e.content||e.file)&&(!f.includes(e.name)&&l.includes(e.name)||m.push({name:e.name,content:e.content||Object(d.c)(e.file)}),l.push(e.name))}),{title:t.title||o.title||a.title,meta:m.map(function(e){return e.name.match(/^og:/)?{property:e.name,content:e.content}:e})}}({componentHeadData:{title:t,meta:n},pageHeadData:p&&p.childMarkdownRemark.frontmatter&&p.childMarkdownRemark.frontmatter.head||{},siteHeadData:h&&h.childMarkdownRemark.frontmatter&&h.childMarkdownRemark.frontmatter.head||{},availableLocales:o,locale:l});return r.a.createElement(m.Helmet,{title:u.title,meta:u.meta},r.a.createElement("html",{lang:i}))},data:a})})};p.propTypes={title:l.a.string,meta:l.a.arrayOf(l.a.shape({name:l.a.string.isRequired,content:l.a.string,file:l.a.string}))},t.a=p},430:function(e){e.exports={data:{siteHeadData:{nodes:[{relativePath:"content/meta/__site.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter",meta:[{name:"description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"language",content:"en",file:""},{name:"twitter:card",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"twitter:site",content:"TV Gatsby Starter",file:""},{name:"twitter:creator",content:"TV Gatsby Starter",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-en.png"},{name:"og:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"og:type",content:"website",file:""},{name:"og:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"og:site_name",content:"TV Gatsby Starter",file:""},{name:"og:image",content:"",file:"/images/uploads/share-en.png"},{name:"robots",content:"index,follow",file:""}]}}}},{relativePath:"content/meta/__site.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter",meta:[{name:"description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"language",content:"en",file:""},{name:"twitter:card",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"twitter:site",content:"TV Gatsby Starter",file:""},{name:"twitter:creator",content:"TV Gatsby Starter",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-en.png"},{name:"og:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"og:type",content:"website",file:""},{name:"og:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"og:site_name",content:"TV Gatsby Starter",file:""},{name:"og:image",content:"",file:"/images/uploads/share-en.png"},{name:"robots",content:"index,follow",file:""}]}}}}]},pageHeadData:{nodes:[{relativePath:"content/meta/404.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter - Error 404 not found",meta:[{name:"description",content:"Error page not found",file:""},{name:"twitter:card",content:"Error page not found",file:""},{name:"twitter:title",content:"Error page not found",file:""},{name:"twitter:description",content:"Error page not found",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-404-en.png"},{name:"og:title",content:"Error page not found",file:""},{name:"og:description",content:"Error page not found",file:""},{name:"og:image",content:"",file:"/images/uploads/share-404-en.png"}]}}}},{relativePath:"content/meta/__site.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter",meta:[{name:"description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"language",content:"en",file:""},{name:"twitter:card",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"twitter:site",content:"TV Gatsby Starter",file:""},{name:"twitter:creator",content:"TV Gatsby Starter",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-en.png"},{name:"og:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"og:type",content:"website",file:""},{name:"og:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"og:site_name",content:"TV Gatsby Starter",file:""},{name:"og:image",content:"",file:"/images/uploads/share-en.png"},{name:"robots",content:"index,follow",file:""}]}}}},{relativePath:"content/meta/__site.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter",meta:[{name:"description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"language",content:"en",file:""},{name:"twitter:card",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"twitter:site",content:"TV Gatsby Starter",file:""},{name:"twitter:creator",content:"TV Gatsby Starter",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-en.png"},{name:"og:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"og:type",content:"website",file:""},{name:"og:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"og:site_name",content:"TV Gatsby Starter",file:""},{name:"og:image",content:"",file:"/images/uploads/share-en.png"},{name:"robots",content:"index,follow",file:""}]}}}},{relativePath:"content/meta/404.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter - Error 404 not found",meta:[{name:"description",content:"Error page not found",file:""},{name:"twitter:card",content:"Error page not found",file:""},{name:"twitter:title",content:"Error page not found",file:""},{name:"twitter:description",content:"Error page not found",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-404-en.png"},{name:"og:title",content:"Error page not found",file:""},{name:"og:description",content:"Error page not found",file:""},{name:"og:image",content:"",file:"/images/uploads/share-404-en.png"}]}}}},{relativePath:"content/meta/attraction.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TURISTICKÁ ATRAKCE - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/attraction.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TOURIST ATTRACTION - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/cube.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"KOSTKA - TOMÁŠ VRÁNA",meta:[{name:"description",content:"KOSTKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/cube.en.md",childMarkdownRemark:{frontmatter:{head:{title:"CUBE - TOMAS VRANA",meta:[{name:"description",content:"CUBE - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/duracel.en.md",childMarkdownRemark:{frontmatter:{head:{title:"DURACEL - TOMAS VRANA",meta:[{name:"description",content:"SPACES - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/duracel.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"DURACEL - TOMÁŠ VRÁNA",meta:[{name:"description",content:"PROSTOR - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/hospital.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"NEMOCNICE - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/hospital.en.md",childMarkdownRemark:{frontmatter:{head:{title:"HOSPITAL - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/images.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"OBRAZY - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/images.en.md",childMarkdownRemark:{frontmatter:{head:{title:"IMAGES - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/index.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TOMÁŠ VRÁNA PRÁCE",meta:[{name:"description",content:"TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/information.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"INFORMACE - TOMÁŠ VRÁNA",meta:[{name:"description",content:"INFORMACE - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/information.en.md",childMarkdownRemark:{frontmatter:{head:{title:"INFORMATION - TOMAS VRANA",meta:[{name:"description",content:"INFORMATION - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/index.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TOMAS VRANA WORKS",meta:[{name:"description",content:"TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/islam.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"VYSLÁN ISLÁM - TOMÁŠ VRÁNA",meta:[{name:"description",content:"VYSLÁN ISLÁM - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/kolos-of-ostrava.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"KOLOS OF OSTRAVA - TV PRESENTS - TOMÁŠ VRÁNA",meta:[{name:"description",content:"KOLOS OF OSTRAVA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/kolos-of-ostrava.en.md",childMarkdownRemark:{frontmatter:{head:{title:"KOLOS OF OSTRAVA - TV PRESENTS - TOMAS VRANA",meta:[{name:"description",content:"KOLOS OF OSTRAVA - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/islam.en.md",childMarkdownRemark:{frontmatter:{head:{title:"ISLAM COMING - TOMAS VRANA",meta:[{name:"description",content:"ISLAM COMING - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/konevmen.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"KONĚVMEN - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/konevmen.en.md",childMarkdownRemark:{frontmatter:{head:{title:"KONEVMEN - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/maniac.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"MANIAK - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/maniac.en.md",childMarkdownRemark:{frontmatter:{head:{title:"MANIAC - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/messenger.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"POSLÍČEK - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/mother.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"MATKA - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/mother.en.md",childMarkdownRemark:{frontmatter:{head:{title:"MOTHER - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/nepu.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"NEPÚ - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/nepu.en.md",childMarkdownRemark:{frontmatter:{head:{title:"NEPU - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/progress.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"POKROK - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/messenger.en.md",childMarkdownRemark:{frontmatter:{head:{title:"MESSENGER - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/progress.en.md",childMarkdownRemark:{frontmatter:{head:{title:"PROGRESS - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/rainbowball.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"DUHOVKA - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/spaces.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"PROSTOR - TOMÁŠ VRÁNA",meta:[{name:"description",content:"PROSTOR - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/rainbowball.en.md",childMarkdownRemark:{frontmatter:{head:{title:"RAINBOW BALL - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/spaces.en.md",childMarkdownRemark:{frontmatter:{head:{title:"SPACES - TOMAS VRANA",meta:[{name:"description",content:"SPACES - TOMAS VRANA",file:""}]}}}}]}}}},431:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(22),o=n(2),l=n.n(o),m=n(3),c=n(98),s=n(83),d=n(81),f=n(73),p=n(135),h=n(434),u=r.d.footer.withConfig({displayName:"Footer__Container",componentId:"a1f04j-0"})(["width:100%;max-width:",";padding:0 2rem;margin:0 auto;display:block;letter-spacing:0.08em;margin-top:15rem;margin-bottom:3rem;text-transform:uppercase;font-size:60%;letter-spacing:.2rem;img{margin:0;}.left{text-align:left;float:left;}.right{text-align:right;}.menu{display:none;list-style-type:none;text-align:center;}&.home,&.nav-toggled{position:fixed;bottom:0;left:0;max-width:100%;width:100%;color:white;z-index:15;.left,.right{opacity:.5;}}.lang-picker{margin-bottom:4rem;font-size:180%;display:none;animation:langin 6s ease;}@keyframes langin{0%,60%{opacity:0}100%{opacity:1}}@media screen and (max-width:","px){.left{text-align:center;float:none;}.right{text-align:center;}.lang-picker{display:block;text-align:center;}&.home,&.nav-toggled{.menu{display:block;margin:-1rem 0 3rem 0;li{display:none;&.item-2{display:block;font-size:160%;a{color:white}}}}}}"],function(e){return e.theme.dimensions.contentWidth},function(e){return e.theme.dimensions.mobileBreakpoint-1}),g=function(e){return i.a.createElement(m.e,null,function(t){var n=t.toggle;return i.a.createElement(a.Fragment,null,i.a.createElement(s.a,{render:function(t){var r=t.frontmatter;return i.a.createElement(u,{className:(e.home?"home":"")+" "+(n?"nav-toggled":"")},(e.home||n)&&i.a.createElement(a.Fragment,null,i.a.createElement(c.a,null),i.a.createElement(p.a,null)),i.a.createElement("div",{className:"left"},i.a.createElement(f.a,null,"2022")," © ",i.a.createElement(f.a,null,r.footer.left)," ",i.a.createElement(d.a,{href:"https://github.com/tomasvrana/tomasvrana.com",target:"_blank"},i.a.createElement(h.b,null))),i.a.createElement("div",{className:"right"},i.a.createElement(f.a,null,r.footer.rights)))}}))})};g.propTypes={home:l.a.bool},t.a=g},432:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(2),o=n.n(r),l=n(22),m=Object(l.e)(["0%{width:0;padding-bottom:0;opacity:1;}100%{width:100%;padding-bottom:100%;opacity:0;}"]),c=l.d.div.withConfig({displayName:"Loader__Container",componentId:"sc-1m03rig-0"})(["position:relative;display:inline-block;width:","rem;height:","rem;> div{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:","rem;border:4px solid ",";opacity:1;border-radius:50%;animation:"," 1.6s cubic-bezier(0,0.2,0.8,1) infinite;box-sizing:content-box;&:nth-of-type(2){animation-delay:-0.33s;}&:last-of-type{animation-delay:-0.66s;}}"],function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.theme.colors.interactive},m),s=function(e){var t=e.size;return i.a.createElement(c,{size:t},i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null))};s.propTypes={size:o.a.number},s.defaultProps={size:10};var d=s,f=l.d.div.withConfig({displayName:"PageLoader__Container",componentId:"sc-1jv81q3-0"})(["display:inline-block;left:50%;position:relative;transform:translateX(-50%);"]);t.a=function(){return i.a.createElement(f,null,i.a.createElement(d,null))}},433:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(22),o=n(2),l=n.n(o),m=n(73),c=r.d.h1.withConfig({displayName:"Title__PageTitle",componentId:"sc-1bb0yxx-0"})(["text-align:center;margin:1em 0 2em 0;filter:blur(2px);text-transform:uppercase;&.large{text-transform:none;font-size:270%;}animation:blur 16s ease 0s infinite;-webkit-animation:blur 16s ease 0s infinite;-moz-animation:blur 16s ease 0s infinite;@keyframes blur{0%,39%,41%,43%,45%,100%{-webkit-filter:blur(0px);-moz-filter:blur(0px);-o-filter:blur(0px);-ms-filter:blur(0px);}40%,42%,44%,46%{-webkit-filter:blur(2px);-moz-filter:blur(2px);-o-filter:blur(2px);-ms-filter:blur(2px);}}"]),s=function(e){return i.a.createElement(c,{className:e.large?"large":""},i.a.createElement(m.a,{rewrite:e.rewrite},e.children))};s.propTypes={rewrite:l.a.string,large:l.a.bool,children:l.a.node},t.a=s},438:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(22),o=n(2),l=n.n(o),m=n(81),c=n(73),s=r.d.div.withConfig({displayName:"Go__Container",componentId:"zp5ssx-0"})([".go{display:inline-block;opacity:.7;color:black;padding:1rem 0 1.5rem 0;text-transform:uppercase;font-weight:bold;font-size:65%;letter-spacing:.4rem;border-bottom:.2rem solid #fff;&:hover{border-bottom:.2rem solid #000;opacity:1;}.arrow{font-size:130%;}}"]),d=function(e){return i.a.createElement(s,null,i.a.createElement(m.a,{className:"go",href:e.href},e.back&&i.a.createElement("span",{className:"arrow"},"< "),i.a.createElement(c.a,null,e.title),!e.back&&i.a.createElement("span",{className:"arrow"}," >")))};d.propTypes={title:l.a.string,href:l.a.string,back:l.a.bool},t.a=d}}]);
//# sourceMappingURL=1-7fb9b457d5b51fa865f8.js.map