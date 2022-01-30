"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[869],{7518:function(A,e,t){var a=t(5893);e.Z=function(A){var e=A.children;return(0,a.jsx)("div",{className:"container mx-auto",children:e})}},9371:function(A,e,t){var a=t(5893),n=t(4184),r=t.n(n),i=t(1664),g=t(5229);e.Z=function(A){var e=A.title,t=A.imagePath,n=A.slug,s=(0,a.jsx)(g.Z,{className:r()("shadow-sm",{"hover:shadow-lg transition-shadow duration-200":n}),alt:"Cover Image for ".concat(e),imagePath:t});return n?(0,a.jsx)(i.default,{as:"/blog/".concat(n),href:"/blog/[slug]",children:(0,a.jsx)("a",{"aria-label":e,children:s})}):s}},3797:function(A,e,t){var a=t(5893),n=t(3855),r=t(4797);e.Z=function(A){var e=A.dateString,t=(0,n.Z)(e);return(0,a.jsx)("time",{dateTime:e,children:(0,r.Z)(t,"LLLL\td, yyyy")})}},5229:function(A,e,t){t.d(e,{Z:function(){return g}});var a=t(5893),n=(t(7294),function(A){var e=A.className,t=A.alt,n=A.oneX,r=A.twoX;return(0,a.jsx)("img",{className:e,alt:t,src:n.src,srcSet:"".concat(n.src," 1x,").concat(r.src," 2x"),width:n.width,height:n.height})}),r=t(5712);function i(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}var g=function(A){var e=A.className,t=A.alt,g=A.imagePath;return(0,a.jsx)(n,function(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(A){return Object.getOwnPropertyDescriptor(t,A).enumerable})))),a.forEach((function(e){i(A,e,t[e])}))}return A}({className:e,alt:t},r.s2[g]))}},8782:function(A,e,t){t.d(e,{Z:function(){return u}});var a=t(5893),n=function(){return(0,a.jsx)("footer",{className:"py-8",children:"Tim Leung 2022"})},r=t(9008),i=function(){return(0,a.jsxs)(r.default,{children:[(0,a.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/assets/favicon/apple-touch-icon.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/assets/favicon/favicon-32x32.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/assets/favicon/favicon-16x16.png"}),(0,a.jsx)("link",{rel:"manifest",href:"/assets/favicon/site.webmanifest"}),(0,a.jsx)("meta",{name:"description",content:"Profile and blog for tzyl"}),(0,a.jsx)("meta",{property:"og:title",content:"tzyl.dev"}),(0,a.jsx)("meta",{property:"og:description",content:"Profile and blog for tzyl"}),(0,a.jsx)("meta",{property:"og:image",content:"/assets/favicon/android-chrome-512x512.png"},"og:image")]})},g=t(1664),s=t(1163),o=t(7219),l=function(A){var e=A.iconComponent,t=A.href,n=A.title;return(0,a.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:e({size:20,title:n,className:"mx-1 hover:text-green-300 transition-all duration-100"})})},c=t(4184),f=t.n(c),h=function(A){var e=A.text,t=A.href,n=A.active;return(0,a.jsx)(g.default,{href:t,children:(0,a.jsx)("a",{className:f()("inline-flex px-3 py-2 font-bold hover:text-green-300 transition-all duration-100",n&&"underline underline-offset-8 decoration-4"),children:e})})},E=function(){var A=(0,s.useRouter)();return(0,a.jsxs)("nav",{className:"flex items-center flex-wrap pt-8 pb-8",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(g.default,{href:"/",children:(0,a.jsx)("a",{className:"font-bold mr-2",children:"tzyl"})}),(0,a.jsx)(l,{iconComponent:o.uOf,href:"https://github.com/tzyl",title:"GitHub"}),(0,a.jsx)(l,{iconComponent:o.qOw,href:"https://www.linkedin.com/in/timothyleung95",title:"LinkedIn"}),(0,a.jsx)(l,{iconComponent:o.Imn,href:"mailto:me@tzyl.dev",title:"Email"})]}),(0,a.jsxs)("div",{className:"flex flex-row ml-auto items-center",children:[(0,a.jsx)(h,{text:"Home",href:"/",active:"/"===A.pathname}),(0,a.jsx)(h,{text:"Blog",href:"/blog",active:A.pathname.startsWith("/blog")})]})]})},u=function(A){var e=A.children;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i,{}),(0,a.jsxs)("div",{className:"flex flex-col min-h-screen max-w-screen-lg mx-auto px-5 text-gray-800",children:[(0,a.jsx)(E,{}),(0,a.jsx)("main",{className:"flex-grow",children:e}),(0,a.jsx)(n,{})]})]})}},1524:function(A,e,t){var a=t(5893);e.Z=function(A){var e=A.children;return(0,a.jsx)("h1",{className:"text-5xl md:text-7xl lg:text-8xl font-bold md:leading-none mb-12 text-center md:text-left",children:e})}},5712:function(A,e,t){t.d(e,{s2:function(){return i},J2:function(){return r},eu:function(){return g}});function a(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}var n,r={PROFILE:"/assets/profile/profile.jpg",AOC_2021_REFLECTIONS_COVER:"/assets/blog/aoc-2021-reflections/tzyl-aoc2021.png",RAMSEY_THEORY_PARTY_PROBLEM_K3_GRAPH_BLUE:"/assets/blog/ramsey-theory-party-problem/k3-graph-blue.png",RAMSEY_THEORY_PARTY_PROBLEM_K3_GRAPH_RED:"/assets/blog/ramsey-theory-party-problem/k3-graph-red.png",RAMSEY_THEORY_PARTY_PROBLEM_K5_COUNTEREXAMPLE:"/assets/blog/ramsey-theory-party-problem/k5-counterexample.png",RAMSEY_THEORY_PARTY_PROBLEM_K6_GRAPH:"/assets/blog/ramsey-theory-party-problem/k6-graph.png",RAMSEY_THEORY_PARTY_PROBLEM_K6_PIGEONHOLE:"/assets/blog/ramsey-theory-party-problem/k6-pigeonhole.png",RAMSEY_THEORY_PARTY_PROBLEM_K6_RED_OR_BLUE_TRIANGLE:"/assets/blog/ramsey-theory-party-problem/k6-red-or-blue-triangle.png"},i=(a(n={},r.PROFILE,{oneX:{src:"/_next/static/media/profile@1x.c5d361fd.jpg",height:128,width:128,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAgT/2gAMAwEAAhADEAAAALQjP//EABwQAAICAgMAAAAAAAAAAAAAAAEDAhEABBMxcf/aAAgBAQABPwBLkHaYyOxOgsREBXH6DXef/8QAGhEAAgIDAAAAAAAAAAAAAAAAAQIAAwQTIf/aAAgBAgEBPwDMXS1YUnqz/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAIBA1H/2gAIAQMBAT8AW55w/9k="},twoX:{src:"/_next/static/media/profile@2x.d07b27fd.jpg",height:256,width:256,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAgT/2gAMAwEAAhADEAAAALQjP//EABwQAAICAgMAAAAAAAAAAAAAAAEDAhEABBMxcf/aAAgBAQABPwBLUnaYyOxOgsREBXH6DXef/8QAGhEAAgIDAAAAAAAAAAAAAAAAAQIAAwQTIf/aAAgBAgEBPwDMXS1YUnqz/8QAGBEAAgMAAAAAAAAAAAAAAAAAAQIAA0H/2gAIAQMBAT8AW5yMn//Z"}}),a(n,r.AOC_2021_REFLECTIONS_COVER,{oneX:{src:"/_next/static/media/tzyl-aoc2021@1x.5365f200.png",height:64,width:256,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAIAAADq9gq6AAAAOUlEQVR42mPQ1TW3tXUxMrK2sHCSk1MLD9eLjjYwM1Nn0NQ0cXLydHX1MTd3kJZWB0pERuqbmqoDAAs8Ctrf17vlAAAAAElFTkSuQmCC"},twoX:{src:"/_next/static/media/tzyl-aoc2021@2x.05a03fe1.png",height:128,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAIAAADq9gq6AAAAOklEQVR42mPQ07Ows3M1MbGxtHRSUFCLidGPizOwtNRg0NQ0cXPz8fT0t7BwlJVVj4rSi4kxMDdXBwATPwsxyN98ywAAAABJRU5ErkJggg=="}}),a(n,r.RAMSEY_THEORY_PARTY_PROBLEM_K3_GRAPH_BLUE,{oneX:{src:"/_next/static/media/k3-graph-blue@1x.5aa4484a.png",height:256,width:256,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAQlBMVEX///////7+/v/+/v78/P/8/P36+v/6+vv5+fn39//4+Pf29v/19f/29vX09P/x8f7y8vHw8Pbu7vbt7e7s7PTr6/Kgn06JAAAAOklEQVR42h3JSRZAMBQAwf46iAQx3v+qnixqVYjwU8qGgpwPBjLtdenXhmgjcLxrvW4h55TmIkIE8AEqlwFFGyEQrAAAAABJRU5ErkJggg=="},twoX:{src:"/_next/static/media/k3-graph-blue@2x.2c763b8f.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEX///////7+/v/+/v78/P/8/P36+v/6+vv5+fn4+Pj39//4+Pf29v/19f/29vX09P/y8v7z8/Lx8ffv7/Du7vft7fTs7POX+YqxAAAAOklEQVR42h3JSRZAMBQAwf46CIIY739UTxa1KkT4KcuGgpwPBjLsZW5Xu6g9cLxruS8h55TGSYQI4AMsowFTfl+ktAAAAABJRU5ErkJggg=="}}),a(n,r.RAMSEY_THEORY_PARTY_PROBLEM_K3_GRAPH_RED,{oneX:{src:"/_next/static/media/k3-graph-red@1x.58a42af5.png",height:256,width:256,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAQlBMVEX////+/////v7+/v7//Pz9/Pz/+vr7+vr/9/f5+fn/9vb/9fX3+Pj/9PT19vb+8fH28PDx8vL27u707Ozu7e3y6+sAO3xNAAAAOklEQVR42h3JyRGAIBAAwVkHDxDFM/9ULXn0qxHhp9QdBTluDGTaytKvDdFG4HzXcj1CzinNVYQI4AMqoQFHcl2tNAAAAABJRU5ErkJggg=="},twoX:{src:"/_next/static/media/k3-graph-red@2x.e7ed02a7.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEX////+/////v7+/v7//Pz9/Pz/+vr7+vr/9/f5+fn/9vb4+Pj/9fX3+Pj/9PT19vb+8vL38fHy8/P37u7w7+/07e3z7OzkhZ8SAAAAOklEQVR42h3JRxKAIBAAwVkHA5gw/v+plhz61IjwU9YdBTkeDGTYytSudlF74HyXct1CzimNswgRwAcsZAFSaOKWWwAAAABJRU5ErkJggg=="}}),a(n,r.RAMSEY_THEORY_PARTY_PROBLEM_K5_COUNTEREXAMPLE,{oneX:{src:"/_next/static/media/k5-counterexample@1x.b1f8d0f8.png",height:256,width:256,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAY1BMVEX////+///+/v79/f38/f39/Pv8/P38/Pz7/Pz/+vj8+/r/+ff/+Pb++Pb19vf19vb98PDz9PTz8/Py7+7z6fby6fbq6//o6//u6+vt5vbs5vbs6Ovs5vXr5vfr5+vl4vbk4vdM2f0TAAAAQUlEQVR42g3ExwGAIBAAwb0zgBlFAbP9VynzGFSxljzgPUAxuftwo2LSF8KbSqTbYlwbgfbZr7MCzNIPcw0KIqA/XXsCl7jM/pAAAAAASUVORK5CYII="},twoX:{src:"/_next/static/media/k5-counterexample@2x.7d2b475d.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAWlBMVEX////+///+/v7+/f38/f39/Pv8/Pz8+/v/+vj/+ff++Pb29/f98vH98fD09PTz8PDz8O/t7v/s7f/06vbz6vfv7e3v7ezp7P/t6Pfu5/bt5/ft6ezn5fjn5ff0QzpYAAAAQUlEQVR42g3IWwJAIBBA0TsjQyJvSex/m/o5HwdVzKgCywzQhOm5x1D/etftOx3ij5T2XqArOZcWsOiH6EBBBPQHUYMCRrHF1OsAAAAASUVORK5CYII="}}),a(n,r.RAMSEY_THEORY_PARTY_PROBLEM_K6_GRAPH,{oneX:{src:"/_next/static/media/k6-graph@1x.e4e9f258.png",height:256,width:256,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAAAAADhZOFXAAAAQElEQVR42jWLMQ7AIAzE8v9PHlRqyhCyR6Fc04HNkm3hTjI3hWu621uQF9CSEqPfihEFTRVPlOoA8o9tui3K2T+J7jyx3E9XbAAAAABJRU5ErkJggg=="},twoX:{src:"/_next/static/media/k6-graph@2x.761cf9c1.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAAAAADhZOFXAAAAQElEQVR42jXLMRbAIAgEUe5/SoUG8p5Qm03caJFuij/CBRKLwierxrsD1pqBMi9zt5hyh3qcILR3xcEjKzf+9w+RCTzmrNMuJwAAAABJRU5ErkJggg=="}}),a(n,r.RAMSEY_THEORY_PARTY_PROBLEM_K6_PIGEONHOLE,{oneX:{src:"/_next/static/media/k6-pigeonhole@1x.20b3fdfa.png",height:256,width:256,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAYFBMVEX///////7+/////v7+/v/+/v7++fn6+vr/9vb4+P74+ff3+fn39/f39/b29/f29vX/8vH19vb48/ny9P/+7Ozr7P/u7Ozt7Ozt6+vr6+7/4uDz5uft6Ojo6Ozp4/no5fE1l3vlAAAAQUlEQVR42j3JNwKAMAzAQCXYhBbTe/v/L4EFDVqOv2BmVYyB9limeT1rfDo03Zg7ErLt6p2gyn5/90pZoC8pIE4eW+wCT6Koc+IAAAAASUVORK5CYII="},twoX:{src:"/_next/static/media/k6-pigeonhole@2x.a6eb4e3a.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAYFBMVEX///////7+/////v7+/v/+/v7++fn6+vr5+fj/9vb4+P73+fn3+Pj49/f39/f29/f/8/H29vbz9f/48/n+7e3s7f/v7e3u7e7t7e/v7Oz06Oj/4+Lu6urq6u7p5vLq5PnEo0JTAAAAQUlEQVR42j3JNwKAMAzAQMXEhGp6b///JbBEg5YjFqwyqy3QnNu8rFeHpGM7TIUjIT+e3nlU2e//opQZ+pEC4vwLXFgCTvPUp3wAAAAASUVORK5CYII="}}),a(n,r.RAMSEY_THEORY_PARTY_PROBLEM_K6_RED_OR_BLUE_TRIANGLE,{oneX:{src:"/_next/static/media/k6-red-or-blue-triangle@1x.f38587f8.png",height:256,width:256,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAVFBMVEX////+/////v7+/v7//f38/Pz7/Pz8+/v7+/v/9/f/9vb5+Pj29vb29fX19fX09fX19PTz9PTy9PT87u756+v76ur56ur76enu6urv6enu6ent6el4/6VQAAAAPElEQVR42hWHBw6AMACEqOeuq9bt///pmRACMM1NmwZgear6HUHkGDNCobuvPvxR7GfpMNvhRSKt2AhbfE/KAdwZPFZXAAAAAElFTkSuQmCC"},twoX:{src:"/_next/static/media/k6-red-or-blue-triangle@2x.006d2e1d.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAQlBMVEX////+/////v7+/v78/Pz7/Pz7+/v/9/f5+fn39/f29vb29fX19fX09fXz9fX87+/67Oz86+v66+v86urw6+vv6+uRBzqaAAAAO0lEQVR42hWHiQ2AIADECoeCouAD+6/qmTRNC/uR1nMD6kzLrCB6KR2hkMfI4Y94v9FhrseLRGvYCFt8PvkBgMygYjQAAAAASUVORK5CYII="}}),n),g=function(A){if(!s(A))throw new Error("Invalid known image path ".concat(A));return A},s=function(A){return null!=A&&Object.values(r).includes(A)}}}]);