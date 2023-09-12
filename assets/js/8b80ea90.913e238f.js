"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[14],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3880:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(1163),a=(n(9496),n(9613));const o={title:"Introduction",sidebar_position:0,slug:"/"},i=void 0,l={unversionedId:"Introduction",id:"Introduction",title:"Introduction",description:"I added this recently, testing auto-deployment",source:"@site/docs/Introduction.mdx",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/metapages/docs.metapage.io/tree/main/packages/create-docusaurus/templates/shared/docs/Introduction.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Introduction",sidebar_position:0,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Embed",permalink:"/docs/Embed"}},s={},c=[],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"I added this recently, testing auto-deployment"),(0,a.kt)("mermaid",{value:'flowchart LR\n  subgraph page [Your website]\n      js("Your website javascript")\n      metapage ---\x3e |"JSON messages (any output changes)"| js\n      js ---\x3e |"set any inputs"| metapage\n      subgraph metapage [Metapage]\n      direction LR\n      mf1["Metaframe A (iframe)"]\n      mf2["Metaframe B (iframe)"]\n      mf3["Metaframe C (iframe)"]\n\n      mf1 --\x3e mf2\n      mf1 --\x3e mf3\n      mf2 --\x3e mf3\n      end\n  end'}),(0,a.kt)("p",null,"A metapage is a set of websites connected together with data pipes. Metapages are hybrid apps, workflows, dashboards."),(0,a.kt)("p",null,"You can create, share, embed, and customize at ",(0,a.kt)("a",{parentName:"p",href:"https://metapage.io/"},"metapage.io")),(0,a.kt)("p",null,"Problems they solve:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Velocity"),": accelerate web development by ",(0,a.kt)("a",{parentName:"li",href:"/docs/Embed"},"embedding entire workflows or tools")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Dashboards"),": create powerful dashboards, connecting ",(0,a.kt)("em",{parentName:"li"},"any")," web app, library, or data source"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Collaboration"),": scientific and data-heavy workflows can be shared and worked on collaboratively"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Data Science / Machine Learning / AI"),": Rapidly iterate, develop, test and even deploy machine learning code, models, and pipelines"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Publish"),": share your app, code, or data for others to instantly and easily (no-code) integrate with their app/tools/website")))}u.isMDXComponent=!0}}]);