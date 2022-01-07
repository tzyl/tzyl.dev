(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{2912:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(5199)}])},7518:function(e,t,n){"use strict";var s=n(5893);t.Z=function(e){var t=e.children;return(0,s.jsx)("div",{className:"container mx-auto",children:t})}},9371:function(e,t,n){"use strict";var s=n(5893),r=n(4184),i=n.n(r),a=n(1664);t.Z=function(e){var t=e.title,n=e.imageMetadata,r=n.src,l=n.width,c=n.height,o=e.slug,d=(0,s.jsx)("img",{src:r,width:l,height:c,alt:"Cover Image for ".concat(t),className:i()("shadow-sm",{"hover:shadow-lg transition-shadow duration-200":o})});return o?(0,s.jsx)(a.default,{as:"/blog/".concat(o),href:"/blog/[slug]",children:(0,s.jsx)("a",{"aria-label":t,children:d})}):d}},3797:function(e,t,n){"use strict";var s=n(5893),r=n(3855),i=n(4797);t.Z=function(e){var t=e.dateString,n=(0,r.Z)(t);return(0,s.jsx)("time",{dateTime:t,children:(0,i.Z)(n,"LLLL\td, yyyy")})}},8782:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var s=n(5893),r=function(){return(0,s.jsx)("footer",{className:"py-8",children:"Tim Leung 2022"})},i=n(9008),a=function(){return(0,s.jsxs)(i.default,{children:[(0,s.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/assets/favicon/apple-touch-icon.png"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/assets/favicon/favicon-32x32.png"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/assets/favicon/favicon-16x16.png"}),(0,s.jsx)("link",{rel:"manifest",href:"/assets/favicon/site.webmanifest"}),(0,s.jsx)("meta",{name:"description",content:"Profile and blog for tzyl"}),(0,s.jsx)("meta",{property:"og:title",content:"tzyl.dev"}),(0,s.jsx)("meta",{property:"og:description",content:"Profile and blog for tzyl"}),(0,s.jsx)("meta",{property:"og:image",content:"/assets/favicon/android-chrome-512x512.png"})]})},l=n(1664),c=n(1163),o=n(7219),d=function(e){var t=e.iconComponent,n=e.href,r=e.title;return(0,s.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:t({size:20,title:r,className:"mx-1 hover:text-green-300 transition-all duration-100"})})},x=n(4184),u=n.n(x),h=function(e){var t=e.text,n=e.href,r=e.active;return(0,s.jsx)(l.default,{href:n,children:(0,s.jsx)("a",{className:u()("inline-flex px-3 py-2 font-bold hover:text-green-300 transition-all duration-100",r&&"underline underline-offset-8 decoration-4"),children:t})})},f=function(){var e=(0,c.useRouter)();return(0,s.jsxs)("nav",{className:"flex items-center flex-wrap pt-8 pb-8",children:[(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)(l.default,{href:"/",children:(0,s.jsx)("a",{className:"font-bold mr-2",children:"tzyl"})}),(0,s.jsx)(d,{iconComponent:o.uOf,href:"https://github.com/tzyl",title:"GitHub"}),(0,s.jsx)(d,{iconComponent:o.qOw,href:"https://www.linkedin.com/in/timothyleung95",title:"LinkedIn"}),(0,s.jsx)(d,{iconComponent:o.Imn,href:"mailto:me@tzyl.dev",title:"Email"})]}),(0,s.jsxs)("div",{className:"flex flex-row ml-auto items-center",children:[(0,s.jsx)(h,{text:"Home",href:"/",active:"/"===e.pathname}),(0,s.jsx)(h,{text:"Blog",href:"/blog",active:e.pathname.startsWith("/blog")})]})]})},m=function(e){var t=e.children;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a,{}),(0,s.jsxs)("div",{className:"flex flex-col min-h-screen max-w-screen-lg mx-auto px-5 text-gray-800",children:[(0,s.jsx)(f,{}),(0,s.jsx)("main",{className:"flex-grow",children:t}),(0,s.jsx)(r,{})]})]})}},1524:function(e,t,n){"use strict";var s=n(5893);t.Z=function(e){var t=e.children;return(0,s.jsx)("h1",{className:"text-5xl md:text-7xl lg:text-8xl font-bold md:leading-none mb-12 text-center md:text-left",children:t})}},5199:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return h},default:function(){return f}});var s=n(5893),r=n(9008),i=n(7518),a=n(8782),l=n(1524),c=n(1664),o=n(9371),d=n(3797),x=function(e){var t=e.title,n=e.coverImage,r=e.date,i=e.excerpt,a=e.slug;return(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"mb-5",children:(0,s.jsx)(o.Z,{slug:a,title:t,imageMetadata:n})}),(0,s.jsx)("h3",{className:"text-3xl mb-3 leading-snug",children:(0,s.jsx)(c.default,{as:"/blog/".concat(a),href:"/blog/[slug]",children:(0,s.jsx)("a",{className:"hover:underline",children:t})})}),(0,s.jsx)("div",{className:"text-lg mb-4",children:(0,s.jsx)(d.Z,{dateString:r})}),(0,s.jsx)("p",{className:"text-lg leading-relaxed mb-4",children:i})]})},u=function(e){var t=e.posts;return(0,s.jsx)("div",{className:"grid grid-cols-1 gap-y-8 md:gap-y-16",children:t.map((function(e){return(0,s.jsx)(x,{title:e.title,coverImage:e.coverImage,date:e.date,slug:e.slug,excerpt:e.excerpt},e.slug)}))})},h=!0,f=function(e){var t=e.posts;return(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(r.default,{children:(0,s.jsx)("title",{children:"Blog - tzyl"})}),(0,s.jsxs)(i.Z,{children:[(0,s.jsx)(l.Z,{children:"Blog"}),(0,s.jsxs)("section",{className:"mb-16",children:[(0,s.jsx)("p",{className:"mb-16",children:"My latest thoughts on topics such as programming and mathematics."}),(0,s.jsx)(u,{posts:t})]})]})]})}}},function(e){e.O(0,[211,106,774,888,179],(function(){return t=2912,e(e.s=t);var t}));var t=e.O();_N_E=t}]);