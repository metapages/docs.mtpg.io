"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[8529],{9703:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=t(1527),s=t(3703);const r={title:"The Internet Archive and URL configured websites",sidebar_position:9,slug:"/internet-archive-url-configured-websites"},o="The Internet Archive and Deep-Time {#141c30a529cd48358db20933014bda26}",a={permalink:"/blog/internet-archive-url-configured-websites",source:"@site/blog/internet-archive-url-configured-websites.mdx",title:"The Internet Archive and URL configured websites",description:"2023-12-05",date:"2024-04-10T00:48:16.401Z",formattedDate:"April 10, 2024",tags:[],readingTime:2.11,hasTruncateMarker:!1,authors:[],frontMatter:{title:"The Internet Archive and URL configured websites",sidebar_position:9,slug:"/internet-archive-url-configured-websites"},unlisted:!1,nextItem:{title:"Blob storage is a solved problem- what about compute?",permalink:"/blog/blob-storage-is-solved-but-what-about-compute"}},c={authorsImageUrls:[]},l=[];function h(e){const n={a:"a",admonition:"admonition",h1:"h1",hr:"hr",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"2023-12-05"}),"\n",(0,i.jsx)(n.h1,{id:"d0cc4a9c4f8440aeaeaecb38513f4e2f",children:"Links are critical to deep-time knowledge preservation"}),"\n",(0,i.jsx)(n.mermaid,{value:'flowchart\n\tn1["knowledge"]\n\tn2["is NOT"]\n\tn3["here"]\n\tn1 --\x3e  n2  --\x3e  n3 --\x3e n1\n\n\tk1["_"]\n\tk2["_"]\n\tk3["_"]\n\tk1 --\x3e |"knowledge"| k3  --\x3e |"exists"| k2 --\x3e |"here"| k1\n\n'}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://archive.org/",children:"Internet Archive"})," is a critical piece of the internet. By recording the past, it allows us to understand the past and therefore the future, preventing deception and allowing culture to grow and develop in deep time."]}),"\n",(0,i.jsxs)(n.p,{children:["A critical part of the ",(0,i.jsx)(n.a,{href:"https://archive.org/",children:"Internet Archive"})," is recording and preserving links. When a link to a website dies for whatever reason, but then is preserved, we keep the underlying knowledge, since knowledge is distributed, just like how awareness of the environment is somehow kept in the patterns of neuron connections, not stored someone inside specific neurons."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Digital neurons store information patterns in the connections. Biological neurons are more complex, storing information in connections, cellular state, frequency of activation, hormones, among other places. But likely the most important part is the connections between neurons."})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"This is a massive simplification, since there are many examples e.g. snail neurons that store information in the neuronal cells in complex ways [1]"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h1,{id:"4803fc7e4b88415c8143298a44c6f42b",children:"Links that store state in the URL help preserve websites through deep time"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"The more state is stored in the URL directly, the more the website is able to be preserved and also retain functionality."})}),"\n",(0,i.jsx)(n.p,{children:"This has a number of advantages:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The user state is stored in the URL and is:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"user editable (in the future)"}),"\n",(0,i.jsx)(n.li,{children:"machine readable"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"The origin can be modified dynamically to reroute to domains that are active, without modifying the core state (in the hash parameters of the URL)"}),"\n",(0,i.jsxs)(n.li,{children:["Much easier to store, since a URL is just a string","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Assuming that the core libraries, assets, and modules are preserved, but that\u2019s a separate concern"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["More complex applications can be preserved as ",(0,i.jsx)(n.a,{href:"https://docs.metapage.io/docs",children:"metapages"}),", therefore allowing someone in the future to access a complex workflow, and use it immediately"]}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"6c6abb081ad445869f6b26cb57d1640c",children:"References:"}),"\n",(0,i.jsxs)(n.p,{children:["[1] ",(0,i.jsx)(n.strong,{children:"Snails reveal how two brain cells can hold the key to decision making"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://www.sciencedaily.com/releases/2016/06/160603071655.htm",children:"https://www.sciencedaily.com/releases/2016/06/160603071655.htm"})}),"\n",(0,i.jsx)(n.p,{children:"END PAGE"}),"\n",(0,i.jsx)(n.mermaid,{value:'flowchart LR\n\tst["cloud data"]\n\tc["compute"]\n  urls["workflows as URLs"]\n  sims["sharable simulations"]\n\tdt["preserved through deep time"]\n  what["What is a metapage"]\n\n\tst --\x3e urls\n\tc --\x3e urls --\x3e sims --\x3e dt\n\twhat --\x3e sims\n\turls --\x3e dt\n  click st "/blog/blob-storage-is-solved-but-what-about-compute"\n  click urls "/blog/url-configured-websites"\n  click c "/blog/cloud-compute-too-complicated"\n  click dt "/blog/internet-archive-url-configured-websites"\n  style dt fill:#fff,stroke:#999999,stroke-width:2px,color:#000\n  click sims "/blog/shareable-simulations"\n  click what "/blog/what-is-a-metapage"\n\n\n\n'})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},3703:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var i=t(959);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);