(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[908],{4184:function(e,t){var r;!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var i=n.apply(null,r);i&&e.push(i)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var l in r)o.call(r,l)&&r[l]&&e.push(l);else e.push(r.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},2962:function(e,t,r){"use strict";r.d(t,{lX:function(){return p},PB:function(){return c}});var o=r(9008),n=r(7294);const a={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},i=(e,t=[],{defaultWidth:r,defaultHeight:o}={})=>t.reduce(((t,a,i)=>(t.push(n.createElement("meta",{key:`og:${e}:0${i}`,property:`og:${e}`,content:a.url})),a.alt&&t.push(n.createElement("meta",{key:`og:${e}:alt0${i}`,property:`og:${e}:alt`,content:a.alt})),a.secureUrl&&t.push(n.createElement("meta",{key:`og:${e}:secure_url0${i}`,property:`og:${e}:secure_url`,content:a.secureUrl.toString()})),a.type&&t.push(n.createElement("meta",{key:`og:${e}:type0${i}`,property:`og:${e}:type`,content:a.type.toString()})),a.width?t.push(n.createElement("meta",{key:`og:${e}:width0${i}`,property:`og:${e}:width`,content:a.width.toString()})):r&&t.push(n.createElement("meta",{key:`og:${e}:width0${i}`,property:`og:${e}:width`,content:r.toString()})),a.height?t.push(n.createElement("meta",{key:`og:${e}:height${i}`,property:`og:${e}:height`,content:a.height.toString()})):o&&t.push(n.createElement("meta",{key:`og:${e}:height${i}`,property:`og:${e}:height`,content:o.toString()})),t)),[]),l=e=>{const t=[];e.titleTemplate&&(a.templateTitle=e.titleTemplate);let r="";e.title?(r=e.title,a.templateTitle&&(r=a.templateTitle.replace(/%s/g,(()=>r)))):e.defaultTitle&&(r=e.defaultTitle),r&&t.push(n.createElement("title",{key:"title"},r));const o=e.noindex||a.noindex||e.dangerouslySetAllPagesToNoIndex,l=e.nofollow||a.nofollow||e.dangerouslySetAllPagesToNoFollow;let p="";if(e.robotsProps){const{nosnippet:t,maxSnippet:r,maxImagePreview:o,maxVideoPreview:n,noarchive:a,noimageindex:i,notranslate:l,unavailableAfter:c}=e.robotsProps;p=`${t?",nosnippet":""}${r?`,max-snippet:${r}`:""}${o?`,max-image-preview:${o}`:""}${a?",noarchive":""}${c?`,unavailable_after:${c}`:""}${i?",noimageindex":""}${n?`,max-video-preview:${n}`:""}${l?",notranslate":""}`}if(o||l?(e.dangerouslySetAllPagesToNoIndex&&(a.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(a.nofollow=!0),t.push(n.createElement("meta",{key:"robots",name:"robots",content:`${o?"noindex":"index"},${l?"nofollow":"follow"}${p}`}))):t.push(n.createElement("meta",{key:"robots",name:"robots",content:`index,follow${p}`})),e.description&&t.push(n.createElement("meta",{key:"description",name:"description",content:e.description})),e.mobileAlternate&&t.push(n.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach((e=>{t.push(n.createElement("link",{rel:"alternate",key:`languageAlternate-${e.hrefLang}`,hrefLang:e.hrefLang,href:e.href}))})),e.twitter&&(e.twitter.cardType&&t.push(n.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&t.push(n.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&t.push(n.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&t.push(n.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),(e.openGraph?.title||r)&&t.push(n.createElement("meta",{key:"og:title",property:"og:title",content:e.openGraph?.title||r})),(e.openGraph?.description||e.description)&&t.push(n.createElement("meta",{key:"og:description",property:"og:description",content:e.openGraph?.description||e.description})),e.openGraph){if((e.openGraph.url||e.canonical)&&t.push(n.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){const r=e.openGraph.type.toLowerCase();t.push(n.createElement("meta",{key:"og:type",property:"og:type",content:r})),"profile"===r&&e.openGraph.profile?(e.openGraph.profile.firstName&&t.push(n.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&t.push(n.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&t.push(n.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&t.push(n.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===r&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach(((e,r)=>{t.push(n.createElement("meta",{key:`book:author:0${r}`,property:"book:author",content:e}))})),e.openGraph.book.isbn&&t.push(n.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&t.push(n.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach(((e,r)=>{t.push(n.createElement("meta",{key:`book:tag:0${r}`,property:"book:tag",content:e}))}))):"article"===r&&e.openGraph.article?(e.openGraph.article.publishedTime&&t.push(n.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&t.push(n.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&t.push(n.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach(((e,r)=>{t.push(n.createElement("meta",{key:`article:author:0${r}`,property:"article:author",content:e}))})),e.openGraph.article.section&&t.push(n.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach(((e,r)=>{t.push(n.createElement("meta",{key:`article:tag:0${r}`,property:"article:tag",content:e}))}))):"video.movie"!==r&&"video.episode"!==r&&"video.tv_show"!==r&&"video.other"!==r||!e.openGraph.video||(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach(((e,r)=>{e.profile&&t.push(n.createElement("meta",{key:`video:actor:0${r}`,property:"video:actor",content:e.profile})),e.role&&t.push(n.createElement("meta",{key:`video:actor:role:0${r}`,property:"video:actor:role",content:e.role}))})),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach(((e,r)=>{t.push(n.createElement("meta",{key:`video:director:0${r}`,property:"video:director",content:e}))})),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach(((e,r)=>{t.push(n.createElement("meta",{key:`video:writer:0${r}`,property:"video:writer",content:e}))})),e.openGraph.video.duration&&t.push(n.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&t.push(n.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach(((e,r)=>{t.push(n.createElement("meta",{key:`video:tag:0${r}`,property:"video:tag",content:e}))})),e.openGraph.video.series&&t.push(n.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(a.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(a.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&t.push(...i("image",e.openGraph.images,{defaultWidth:a.defaultOpenGraphImageWidth,defaultHeight:a.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(a.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(a.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&t.push(...i("video",e.openGraph.videos,{defaultWidth:a.defaultOpenGraphVideoWidth,defaultHeight:a.defaultOpenGraphVideoHeight})),e.openGraph.locale&&t.push(n.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),e.openGraph.site_name&&t.push(n.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.site_name}))}return e.canonical&&t.push(n.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach((e=>{t.push(n.createElement("meta",{key:`meta:${e.keyOverride??e.name??e.property??e.httpEquiv}`,...e}))})),e.additionalLinkTags?.length&&e.additionalLinkTags.forEach((e=>{t.push(n.createElement("link",{key:`link${e.keyOverride??e.href}${e.rel}`,...e}))})),t};class p extends n.Component{render(){const{title:e,titleTemplate:t,defaultTitle:r,dangerouslySetAllPagesToNoIndex:a=!1,dangerouslySetAllPagesToNoFollow:i=!1,description:p,canonical:c,facebook:s,openGraph:u,additionalMetaTags:h,twitter:d,defaultOpenGraphImageWidth:f,defaultOpenGraphImageHeight:m,defaultOpenGraphVideoWidth:g,defaultOpenGraphVideoHeight:y,mobileAlternate:v,languageAlternates:k,additionalLinkTags:G,robotsProps:b}=this.props;return n.createElement(o.default,null,l({title:e,titleTemplate:t,defaultTitle:r,dangerouslySetAllPagesToNoIndex:a,dangerouslySetAllPagesToNoFollow:i,description:p,canonical:c,facebook:s,openGraph:u,additionalMetaTags:h,twitter:d,defaultOpenGraphImageWidth:f,defaultOpenGraphImageHeight:m,defaultOpenGraphVideoWidth:g,defaultOpenGraphVideoHeight:y,mobileAlternate:v,languageAlternates:k,additionalLinkTags:G,robotsProps:b}))}}class c extends n.Component{render(){const{title:e,noindex:t=!1,nofollow:r,robotsProps:a,description:i,canonical:p,openGraph:c,facebook:s,twitter:u,additionalMetaTags:h,titleTemplate:d,mobileAlternate:f,languageAlternates:m,additionalLinkTags:g}=this.props;return n.createElement(o.default,null,l({title:e,noindex:t,nofollow:r,robotsProps:a,description:i,canonical:p,facebook:s,openGraph:c,additionalMetaTags:h,twitter:u,titleTemplate:d,mobileAlternate:f,languageAlternates:m,additionalLinkTags:g}))}}},8418:function(e,t,r){"use strict";function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],o=!0,n=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(o=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);o=!0);}catch(p){n=!0,a=p}finally{try{o||null==l.return||l.return()}finally{if(n)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var n,a=(n=r(7294))&&n.__esModule?n:{default:n},i=r(6273),l=r(387),p=r(7190);var c={};function s(e,t,r,o){if(e&&i.isLocalURL(t)){e.prefetch(t,r,o).catch((function(e){0}));var n=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;c[t+"%"+r+(n?"%"+n:"")]=!0}}var u=function(e){var t,r=!1!==e.prefetch,n=l.useRouter(),u=a.default.useMemo((function(){var t=o(i.resolveHref(n,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?i.resolveHref(n,e.as):a||r}}),[n,e.href,e.as]),h=u.href,d=u.as,f=e.children,m=e.replace,g=e.shallow,y=e.scroll,v=e.locale;"string"===typeof f&&(f=a.default.createElement("a",null,f));var k=(t=a.default.Children.only(f))&&"object"===typeof t&&t.ref,G=o(p.useIntersection({rootMargin:"200px"}),2),b=G[0],E=G[1],w=a.default.useCallback((function(e){b(e),k&&("function"===typeof k?k(e):"object"===typeof k&&(k.current=e))}),[k,b]);a.default.useEffect((function(){var e=E&&r&&i.isLocalURL(h),t="undefined"!==typeof v?v:n&&n.locale,o=c[h+"%"+d+(t?"%"+t:"")];e&&!o&&s(n,h,d,{locale:t})}),[d,h,E,v,r,n]);var $={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,o,n,a,l,p){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),null==l&&o.indexOf("#")>=0&&(l=!1),t[n?"replace":"push"](r,o,{shallow:a,locale:p,scroll:l}))}(e,n,h,d,m,g,y,v)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(h)&&s(n,h,d,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var x="undefined"!==typeof v?v:n&&n.locale,O=n&&n.isLocaleDomain&&i.getDomainLocale(d,x,n&&n.locales,n&&n.domainLocales);$.href=O||i.addBasePath(i.addLocale(d,x,n&&n.defaultLocale))}return a.default.cloneElement(t,$)};t.default=u},7190:function(e,t,r){"use strict";function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],o=!0,n=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(o=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);o=!0);}catch(p){n=!0,a=p}finally{try{o||null==l.return||l.return()}finally{if(n)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!i,p=n.useRef(),c=o(n.useState(!1),2),s=c[0],u=c[1],h=n.useCallback((function(e){p.current&&(p.current(),p.current=void 0),r||s||e&&e.tagName&&(p.current=function(e,t,r){var o=function(e){var t=e.rootMargin||"",r=l.get(t);if(r)return r;var o=new Map,n=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(t,r={id:t,observer:n,elements:o}),r}(r),n=o.id,a=o.observer,i=o.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),l.delete(n))}}(e,(function(e){return e&&u(e)}),{rootMargin:t}))}),[r,t,s]);return n.useEffect((function(){if(!i&&!s){var e=a.requestIdleCallback((function(){return u(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[s]),[h,s]};var n=r(7294),a=r(9311),i="undefined"!==typeof IntersectionObserver;var l=new Map},9008:function(e,t,r){e.exports=r(5443)},1664:function(e,t,r){e.exports=r(8418)},1163:function(e,t,r){e.exports=r(387)},7219:function(e,t,r){"use strict";r.d(t,{Ao2:function(){return u},uOf:function(){return h},qOw:function(){return d},Imn:function(){return f}});var o=r(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=o.createContext&&o.createContext(n),i=function(){return(i=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},l=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r};function p(e){return e&&e.map((function(e,t){return o.createElement(e.tag,i({key:t},e.attr),p(e.child))}))}function c(e){return function(t){return o.createElement(s,i({attr:i({},e.attr)},t),p(e.child))}}function s(e){var t=function(t){var r,n=e.attr,a=e.size,p=e.title,c=l(e,["attr","size","title"]),s=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),o.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,c,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),p&&o.createElement("title",null,p),e.children)};return void 0!==a?o.createElement(a.Consumer,null,(function(e){return t(e)})):t(n)}function u(e){return c({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"19",y1:"12",x2:"5",y2:"12"}},{tag:"polyline",attr:{points:"12 19 5 12 12 5"}}]})(e)}function h(e){return c({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}}]})(e)}function d(e){return c({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}},{tag:"rect",attr:{x:"2",y:"9",width:"4",height:"12"}},{tag:"circle",attr:{cx:"4",cy:"4",r:"2"}}]})(e)}function f(e){return c({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}},{tag:"polyline",attr:{points:"22,6 12,13 2,6"}}]})(e)}}}]);