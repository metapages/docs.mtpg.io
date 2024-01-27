"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[9803],{9568:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>o});var i=s(1527),a=s(3703);const r={title:"metapage URL schema design",sidebar_position:7,slug:"/7965915b-b0e5-401d-b5ad-246e4812aa97"},l="Design a good URL schema for metapages {#7fc756d516ce426fbeee4dd32afdf677}",t={permalink:"/blog/7965915b-b0e5-401d-b5ad-246e4812aa97",source:"@site/blog/metapage-URL-schema-design.mdx",title:"metapage URL schema design",description:"- good for humans",date:"2024-01-27T00:46:45.862Z",formattedDate:"January 27, 2024",tags:[],readingTime:1.785,hasTruncateMarker:!1,authors:[],frontMatter:{title:"metapage URL schema design",sidebar_position:7,slug:"/7965915b-b0e5-401d-b5ad-246e4812aa97"},unlisted:!1,prevItem:{title:"Shareable Simulations",permalink:"/blog/shareable-simulations"},nextItem:{title:"How to get SharedArrayBuffer and cross-domain isolation with metapage.io",permalink:"/blog/590e31dd-740b-43ce-9667-a2879651a392"}},d={authorsImageUrls:[]},o=[{value:"Things I don\u2019t like",id:"dd1e48b5e0214584826681e1826841e4",level:2},{value:"Solutions?",id:"9068e91409924d9dade8d17d9db6670d",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"good for humans"}),"\n",(0,i.jsx)(n.li,{children:"takes into account future features"}),"\n",(0,i.jsx)(n.li,{children:"also good for machines"}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"6562e6a9391e47459c62b51ca4705542",children:"Links to resources"}),"\n",(0,i.jsx)(n.p,{children:"The blogs and articles are actually good and readable:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://blog.jim-nielsen.com/2023/examples-of-great-urls/",children:"https://blog.jim-nielsen.com/2023/examples-of-great-urls/"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://warpspire.com/posts/url-design/",children:"https://warpspire.com/posts/url-design/"})," (referenced by above)"]}),"\n",(0,i.jsxs)(n.li,{children:["Github issue: ",(0,i.jsx)(n.a,{href:"https://github.com/metapages/app.metapage.io/issues/323",children:"https://github.com/metapages/app.metapage.io/issues/323"})]}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"77709f69ac084f029b0dd2039e7667d0",children:"Current metapages URL schema"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["metapages:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"/<user>/<metapage name>"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["metaframes:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"/mf/<metaframe key>"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"96d4bc5e782344d9b87e60d4a5feaadc",children:"Requirements"}),"\n",(0,i.jsx)(n.p,{children:"The way URLs are constructed:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Need to be consistent with current and future planned behaviour"}),"\n",(0,i.jsx)(n.li,{children:"Simple to understand"}),"\n",(0,i.jsxs)(n.li,{children:["Work with different methods of showing metapages","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The official editor: ",(0,i.jsx)(n.code,{children:"app.metapage.io"})]}),"\n",(0,i.jsx)(n.li,{children:"The standalone viewer"}),"\n",(0,i.jsx)(n.li,{children:"Others"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Allow arbitrary path names","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["E.g. users can name a metapage ",(0,i.jsx)(n.code,{children:"foo/bar/thing"})," and it shows up as ",(0,i.jsx)(n.code,{children:"https://app.metapage.io/<user>/foo/bar/thing"})]}),"\n",(0,i.jsx)(n.li,{children:"Then path hierarchies can be show to users"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The last part is important as  (currently) arbitrary path names do not work as ",(0,i.jsx)(n.strong,{children:"operations"})," are also specified in the path:  ",(0,i.jsx)(n.code,{children:"https://app.metapage.io/<user>/<name>/edit"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"I think this method is NOT GOOD, since it mixes up views and locations?"}),"\n",(0,i.jsxs)(n.li,{children:["Should be ",(0,i.jsx)(n.code,{children:"/<user>/<name>/?view=edit"})," ?"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"dd1e48b5e0214584826681e1826841e4",children:"Things I don\u2019t like"}),"\n",(0,i.jsx)(n.p,{children:"upper-case mixed with lower case:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(8260).Z+"",width:"1402",height:"272"})}),"\n",(0,i.jsx)(n.p,{children:"It looks ugly? So subjective"}),"\n",(0,i.jsx)(n.h2,{id:"9068e91409924d9dade8d17d9db6670d",children:"Solutions?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"foo/bar/thing"})," is a valid metapage name? Or at least, resource","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"foo/bar/thing/metapage.json"})," ?"]}),"\n",(0,i.jsx)(n.li,{children:"This is NOT a good idea since later one we want to access metapage pipes via URLs and allowing any slash path will not I th"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Anything after ",(0,i.jsx)(n.code,{children:"/<user>/"})," is the metapage name"]}),"\n",(0,i.jsxs)(n.li,{children:["Operations use query parameters","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"?view=edit"}),", ",(0,i.jsx)(n.code,{children:"?view=default"}),", ",(0,i.jsx)(n.code,{children:"?view=minimal"})," or whatever"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"State is hash parameters"}),"\n",(0,i.jsxs)(n.li,{children:["Use notion ID format","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"https://app.metapage.io/<user>/some-long-ignored-name-id/"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["ONLY THE ",(0,i.jsx)(n.code,{children:"id"})," is pulled and used, the name is arbitrary, and for humans"]}),"\n",(0,i.jsx)(n.li,{children:"That way, we don\u2019t have to worry about \u201ccorrectness\u201d of the name"}),"\n",(0,i.jsxs)(n.li,{children:["Then why have the user id?","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"https://app.metapage.io/<some-long-ignored-name>-<id>/"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"d4162bf5b1384581bc237b1f06abf2a2",children:"Solution Final (still in progress though)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["user metapages:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"https://mtpg.io/<user>/<some-long-ignored-name>-<id>"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"https://mtpg.io/<some-long-ignored-name>-<id>"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"(both work)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["navigation/modes:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"?view=edit"}),", ",(0,i.jsx)(n.code,{children:"?view=full"}),", etc. These are the tabs"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"What about the search overlay?"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["metaframes:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"https://mtpg.io/mf/<mfk>"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Users do not create metaframe keys, we generate them"}),"\n",(0,i.jsxs)(n.li,{children:["Friendly user facing names? Like notion urls, considered above?","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"https://mtpg.io/mf/<some-ignored-string>-<mfk>"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8260:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/232744531-92c23b25d03c9a360a394e67e4808f41.png"},3703:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>l});var i=s(959);const a={},r=i.createContext(a);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);