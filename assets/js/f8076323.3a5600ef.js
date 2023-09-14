"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[7217],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=m(n),f=r,g=u["".concat(p,".").concat(f)]||u[f]||l[f]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var a=n(1163),r=(n(9496),n(9613));const o={title:"metapage.json",sidebar_position:0,slug:"/metapage-json"},i=void 0,s={unversionedId:"API-Reference/metapage-json",id:"API-Reference/metapage-json",title:"metapage.json",description:"The metapage configuration is used to define the layout and the data flow of the metapage. The configuration can also be encoded in the URL, allowing URLs to define complex applications.",source:"@site/docs/API-Reference/metapage-json.mdx",sourceDirName:"API-Reference",slug:"/metapage-json",permalink:"/docs/metapage-json",draft:!1,editUrl:"https://github.com/metapages/docs.metapage.io/tree/main/packages/create-docusaurus/templates/shared/docs/API-Reference/metapage-json.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"metapage.json",sidebar_position:0,slug:"/metapage-json"},sidebar:"tutorialSidebar",previous:{title:"Browser iframe javascript libraries",permalink:"/docs/npm-modules"},next:{title:"NPM modules",permalink:"/docs/npm-metapage"}},p={},m=[],c={toc:m},u="wrapper";function l(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The metapage configuration is used to define the layout and the data flow of the metapage. The configuration can also be ",(0,r.kt)("a",{parentName:"p",href:"https://app.metapages.org/"},"encoded in the URL"),", allowing ",(0,r.kt)("a",{parentName:"p",href:"https://app.metapages.org/"},"URLs to define complex applications"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const metapageDefinition = {\n    ...// see below for structure\n}\nconst metapage = Metapage.from(metapageDefinition);\n")),(0,r.kt)("p",null,"The structure of metapage configuration is a simple JSON strucure:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/metapages/metapage/blob/398f097815d43401a21691204aa253bc47fb9906/app/libs/src/metapage/v0_4/metapage.ts#L25"},"Git Source")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'// Example metapage JSON\nvar metapageDefinition = {\n    // Currenly only version "0.3" is supported. We are getting closer to a stable "1.0" version\n    "version": "0.3",\n    // The "meta" field is ignored when computing differences between metapages\n    // The "meta" field contains name, author, layout, and any other data used for display\n    //                  that does not affect execution of the data flow.\n    "meta": {\n        "layouts": {\n            "react-grid-layout": {\n                "docs": "https://www.npmjs.com/package/react-grid-layout",\n                "props": {\n                    "cols": 12,\n                    "margin": [\n                        10,\n                        20\n                    ],\n                    "rowHeight": 200,\n                    "containerPadding": [\n                        5,\n                        5\n                    ]\n                },\n                "layout": [\n                    {\n                        "i": "random-data-generator",\n                        "x": 0,\n                        "y": 0,\n                        "w": 6,\n                        "h": 3\n                    },\n                    {\n                        "i": "graph-dynamic",\n                        "x": 6,\n                        "y": 0,\n                        "w": 6,\n                        "h": 4\n                    },\n                    {\n                        "i": "editor",\n                        "x": 0,\n                        "y": 1,\n                        "w": 6,\n                        "h": 2\n                    }\n                ]\n            }\n        }\n    },\n    // The "metaframes" field is a simple key value object containing the metaframes\n    // where the metaframes are URLs and the inputs\n    "metaframes": {\n        // name of the metaframe, unique to the metapage\n        "random-data-generator": {\n            // url pointing to the metaframe content\n            // metaframes run a little bit of javascript allowing connected data pipes\n            "url": "https://metapages.org/metaframes/random-data-generator/?frequency=1000"\n        },\n        // name of the metaframe, unique to the metapage\n        "graph-dynamic": {\n            // url pointing to the metaframe content\n            "url": "https://metapages.org/metaframes/graph-dynamic/",\n            // array of metaframe inputs, defining which output from which metaframe\n            // is then piped into the input for this metaframe\n            // The metaframe gets the data via postMessage updates\n            "inputs": [\n                {\n                    "metaframe": "random-data-generator",\n                    "source": "y",\n                    "target": "y"\n                }\n            ]\n        },\n        // name of the metaframe, unique to the metapage\n        "editor": {\n            // url pointing to the metaframe content\n            "url": "https://editor.mtfm.io/",\n            // array of metaframe inputs, defining which output from which metaframe\n            // is then piped into the input for this metaframe\n            // The metaframe gets the data via postMessage updates\n            "inputs": [\n                {\n                    "metaframe": "random-data-generator",\n                    "source": "y",\n                    "target": "value"\n                }\n            ]\n        }\n    },\n    // plugins define special metaframes, where instead of listening to\n    // configured inputs, instead each plugin can get the entire state of the\n    // metaframe (this JSON) and also modify it, and/or get state updates:\n    // (all outputs)\n    // NB: in the future plugins will be defined with JSON: https://github.com/metapages/metapage/issues/126\n    "plugins": [\n        "https://metapages.org/metaframes/mermaid.js/?TITLE=0",\n        "https://editor.mtfm.io/"\n    ]\n};\n')))}l.isMDXComponent=!0}}]);