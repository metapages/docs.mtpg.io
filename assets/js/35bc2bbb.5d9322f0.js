"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[9857],{9613:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var r=a(9496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(a),d=n,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return a?r.createElement(f,o(o({ref:t},u),{},{components:a})):r.createElement(f,o({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3022:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(1163),n=(a(9496),a(9613));const i={title:"metapage URL schema",sidebar_position:5,slug:"/7965915b-b0e5-401d-b5ad-246e4812aa97"},o="Metapage URL schema",l={permalink:"/blog/7965915b-b0e5-401d-b5ad-246e4812aa97",source:"@site/blog/metapage-URL-schema.mdx",title:"metapage URL schema",description:"The way URLs are constructed:",date:"2023-10-01T00:46:57.964Z",formattedDate:"October 1, 2023",tags:[],readingTime:.615,hasTruncateMarker:!1,authors:[],frontMatter:{title:"metapage URL schema",sidebar_position:5,slug:"/7965915b-b0e5-401d-b5ad-246e4812aa97"},nextItem:{title:"How to get SharedArrayBuffer and cross-domain isolation with metapage.io",permalink:"/blog/590e31dd-740b-43ce-9667-a2879651a392"}},p={authorsImageUrls:[]},s=[{value:"Solution",id:"7c09073f222448ad8bcac4b0402f6281",level:2}],u={toc:s},c="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The way URLs are constructed:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Need to be consistent with current and future planned behaviour"),(0,n.kt)("li",{parentName:"ul"},"Simple to understand"),(0,n.kt)("li",{parentName:"ul"},"Work with different methods of showing metapages",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The official editor: app.metapage.io"),(0,n.kt)("li",{parentName:"ul"},"The standalone viewer"),(0,n.kt)("li",{parentName:"ul"},"Others"))),(0,n.kt)("li",{parentName:"ul"},"Allow arbitrary path names",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"E.g. users can name a metapage ",(0,n.kt)("inlineCode",{parentName:"li"},"foo/bar/thing")," and it shows up as ",(0,n.kt)("inlineCode",{parentName:"li"},"https://app.metapage.io/<user>/foo/bar/thing")),(0,n.kt)("li",{parentName:"ul"},"Then path hierarchies can be show to users")))),(0,n.kt)("p",null,"The last part is important as  (currently) arbitrary path names do not work as ",(0,n.kt)("strong",{parentName:"p"},"operations")," are also specified in the path:  ",(0,n.kt)("inlineCode",{parentName:"p"},"https://app.metapage.io/<user>/<name>/edit")),(0,n.kt)("h2",{id:"7c09073f222448ad8bcac4b0402f6281"},"Solution"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"foo/bar/thing")," is a valid metapage name"),(0,n.kt)("li",{parentName:"ul"},"Anything after ",(0,n.kt)("inlineCode",{parentName:"li"},"/<user>/")," is the metapage name"),(0,n.kt)("li",{parentName:"ul"},"Operations use query parameters",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"?view=edit"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"?view=default"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"?view=minimal")," or whatever"))),(0,n.kt)("li",{parentName:"ul"},"State is hash parameters")))}m.isMDXComponent=!0}}]);