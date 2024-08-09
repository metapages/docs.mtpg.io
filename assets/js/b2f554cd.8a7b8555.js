"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/comparison-with-other-tools-binder","metadata":{"permalink":"/blog/comparison-with-other-tools-binder","source":"@site/blog/comparison-with-other-tools-binder.mdx","title":"Metapages vs Binder","description":"Documentation","date":"2024-08-09T16:59:44.562Z","formattedDate":"August 9, 2024","tags":[],"readingTime":0.83,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Metapages vs Binder","sidebar_position":13,"slug":"/comparison-with-other-tools-binder"},"unlisted":false,"nextItem":{"title":"Comparison with other products/services/tools","permalink":"/blog/comparison-with-other-tools"}},"content":"![](./1503191761.png)\\n\\n\\n[_Documentation_](https://mybinder.readthedocs.io/en/latest/index.html)\\n\\n\\nBinder is a way to share Jupyter notebooks. That means all the advantages and disadvantages of Jupyter notebooks.\\n\\n\\n> [Binder](https://mybinder.readthedocs.io/en/latest/about/user-guidelines.html) is meant for interactive and ephemeral interactive coding\\n\\n\\n> BinderHub is a kubernetes-based cloud service that allows users to share reproducible interactive computing environments from code repositories. \\n\\n\\nBinder is a way to create reproducible interactive single compute environments, that serve Jupyter notebooks. You can share links to your binder instance, so that others can interact with your environment\\n\\n\\nHowever, there is no state management, so every binder instance is it\u2019s own, since the source is the github repo. \\n\\n\\nThere is no searchable catalogue of shared binders, and binders are not composable, they are single stand-alone instances.\\n\\n\\nThe backend is built for kubernetes, which is the largest cluster manager by far, which is good, but you cannot simply plug in your own computer easily. Kubernetes is complex, so you need to have the support of a organization or highly technical individual to implement your own."},{"id":"/comparison-with-other-tools","metadata":{"permalink":"/blog/comparison-with-other-tools","source":"@site/blog/comparison-with-other-tools.mdx","title":"Comparison with other products/services/tools","description":"|                                                | Metapages | Binder                                      |","date":"2024-08-09T16:59:43.136Z","formattedDate":"August 9, 2024","tags":[],"readingTime":0.645,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Comparison with other products/services/tools","sidebar_position":12,"slug":"/comparison-with-other-tools"},"unlisted":false,"prevItem":{"title":"Metapages vs Binder","permalink":"/blog/comparison-with-other-tools-binder"},"nextItem":{"title":"The Internet Archive and URL configured websites","permalink":"/blog/internet-archive-url-configured-websites"}},"content":"|                                                | Metapages | [Binder](/blog/comparison-with-other-tools-binder)                                      |\\n| ---------------------------------------------- | --------- | -------------------------------------------------------------------------------- |\\n| Any docker images                              | \u2705\xa0        | \ud83e\udde9\xa0Only compatible with Jupyter Notebooks                                        |\\n| Multiple connected compute                     | \u2705\xa0        | \u274c\xa0Single compute node                                                            |\\n| Shareable                                      | \u2705\xa0        | \u2705\xa0                                                                               |\\n| Build from a repo                              | \ud83c\udfd7\ufe0f       | \u2705                                                                                |\\n| Composable                                     | \u2705         | \u274c                                                                                |\\n| Searchable Catalogue                           | \u2705         | \u274c                                                                                |\\n| Mix frontend visualization and backend compute | \u2705         | \ud83e\udde9: only within the Jupyter environment                                          |\\n| Use your own computer                          | \u2705         | \ud83e\udde9: kubernetes only, but you can run the Jupyter notebooks on your own computer. |\\n\\n\\n\u2705: Supported\\n\\n\\n\ud83e\udde9: Partial\\n\\n\\n\u274c: Not supported\\n\\n\\n\u2753: Unknown\\n\\n\\n\ud83c\udfd7\ufe0f: Planned to support\\n\\n\\n## Detailed Comparisons {#837061433fab4aca9bf6abb716f0d17f}\\n\\n- [vs binder](/blog/comparison-with-other-tools-binder)"},{"id":"/internet-archive-url-configured-websites","metadata":{"permalink":"/blog/internet-archive-url-configured-websites","source":"@site/blog/internet-archive-url-configured-websites.mdx","title":"The Internet Archive and URL configured websites","description":"2023-12-05","date":"2024-08-09T16:59:39.634Z","formattedDate":"August 9, 2024","tags":[],"readingTime":1.815,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"The Internet Archive and URL configured websites","sidebar_position":9,"slug":"/internet-archive-url-configured-websites"},"unlisted":false,"prevItem":{"title":"Comparison with other products/services/tools","permalink":"/blog/comparison-with-other-tools"},"nextItem":{"title":"Blob storage is a solved problem- what about compute?","permalink":"/blog/blob-storage-is-solved-but-what-about-compute"}},"content":"2023-12-05 \\n\\n\\n# The Internet Archive and Deep-Time {#141c30a529cd48358db20933014bda26}\\n\\n\\n# Links are critical to deep-time knowledge preservation {#d0cc4a9c4f8440aeaeaecb38513f4e2f}\\n\\n\\n```mermaid\\nflowchart\\n\\tn1[\\"knowledge\\"]\\n\\tn2[\\"is NOT\\"]\\n\\tn3[\\"here\\"]\\n\\tn1 --\x3e  n2  --\x3e  n3 --\x3e n1\\n\\n\\tk1[\\"_\\"]\\n\\tk2[\\"_\\"]\\n\\tk3[\\"_\\"]\\n\\tk1 --\x3e |\\"knowledge\\"| k3  --\x3e |\\"exists\\"| k2 --\x3e |\\"here\\"| k1\\n\\n\\n```\\n\\n\\nThe [Internet Archive](https://archive.org/) is a critical piece of the internet. By recording the past, it allows us to understand the past and therefore the future, preventing deception and allowing culture to grow and develop in deep time.\\n\\n\\nA critical part of the [Internet Archive](https://archive.org/) is recording and preserving links. When a link to a website dies for whatever reason, but then is preserved, we keep the underlying knowledge, since knowledge is distributed, just like how awareness of the environment is somehow kept in the patterns of neuron connections, not stored someone inside specific neurons.\\n\\n\\n:::note\\n\\nDigital neurons store information patterns in the connections. Biological neurons are more complex, storing information in connections, cellular state, frequency of activation, hormones, among other places. But likely the most important part is the connections between neurons.\\n\\n:::\\n\\n\\n\\n\\n:::note\\n\\nThis is a massive simplification, since there are many examples e.g. snail neurons that store information in the neuronal cells in complex ways [1]\\n\\n:::\\n\\n\\n\\n\\n---\\n\\n\\n# Links that store state in the URL help preserve websites through deep time {#4803fc7e4b88415c8143298a44c6f42b}\\n\\n\\n**The more state is stored in the URL directly, the more the website is able to be preserved and also retain functionality.**\\n\\n\\nThis has a number of advantages:\\n\\n- The user state is stored in the URL and is:\\n\\t- user editable (in the future)\\n\\t- machine readable\\n- The origin can be modified dynamically to reroute to domains that are active, without modifying the core state (in the hash parameters of the URL)\\n- Much easier to store, since a URL is just a string\\n\\t- Assuming that the core libraries, assets, and modules are preserved, but that\u2019s a separate concern\\n- More complex applications can be preserved as [metapages](https://docs.metapage.io/docs), therefore allowing someone in the future to access a complex workflow, and use it immediately\\n\\n# References: {#6c6abb081ad445869f6b26cb57d1640c}\\n\\n\\n[1] **Snails reveal how two brain cells can hold the key to decision making**\\n\\n\\n[https://www.sciencedaily.com/releases/2016/06/160603071655.htm](https://www.sciencedaily.com/releases/2016/06/160603071655.htm)"},{"id":"/blob-storage-is-solved-but-what-about-compute","metadata":{"permalink":"/blog/blob-storage-is-solved-but-what-about-compute","source":"@site/blog/blob-storage-is-solved-but-what-about-compute.mdx","title":"Blob storage is a solved problem- what about compute?","description":"2023-11-26","date":"2024-08-09T16:59:36.199Z","formattedDate":"August 9, 2024","tags":[],"readingTime":2.36,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Blob storage is a solved problem- what about compute?","sidebar_position":2,"slug":"/blob-storage-is-solved-but-what-about-compute"},"unlisted":false,"prevItem":{"title":"The Internet Archive and URL configured websites","permalink":"/blog/internet-archive-url-configured-websites"},"nextItem":{"title":"URL Configured Websites","permalink":"/blog/url-configured-websites"}},"content":"2023-11-26 \\n\\n\\n## Storage is a solved problem {#391abf3711fb4cdc989cd95a352c95d3}\\n\\n\\nStoring blobs of data for your web application used to be more involved, I had to _think_ about it. Now I don\u2019t (much): when I build an app or website, that needs some blob storage my thoughts are:\\n\\n1. create a bucket or whatever it\u2019s called in one of some cloud provider, doesn\u2019t have to be the biggest name, they\u2019re all very reliable\\n2. put stuff in\\n3. get stuff out\\n\\nI don\u2019t care where much it is. Why? Because it\u2019s a **solved problem**. Remote blob storage is:\\n\\n- very cheap, and getting cheaper\\n- reliable [1]\\n\\nAt scale however, yes, you do have to think about cost, but those calculations are pretty straightforward business calculations. At anything below very large data, you don\u2019t have to think much about it, and this makes it a **solved problem**.\\n\\n\\nIt\u2019s a solved problem in a similar way that nature has solved storing information: replication, with automated mechanisms for damage repair/reconciliation [2].\\n\\n\\n## Compute is not a solved problem {#7998c587d99540c98564ff6646cb9977}\\n\\n\\nBecause you have to think about it. What I want: \\n\\n\\nI give you some application, some workflow, for example, a machine learning agent, some program I have created, some tool, and it requires from time to time, some level of computing power. You are able to automatically, safely, connect that application to the right level of compute resources as needed.\\n\\n- If the program is in the browser, I might be able to use the GPU, while the tab is open and running.\\n- If the program is downloaded and installed program, I have access to your entire computer, but due to that, security and parasitic programs become a problem.\\n- If I make available some cloud computing, it suddenly becomes complex, with lots of decisions, but with lots of scalable compute resources of different useful types.\\n\\nComputing resources are inherently valuable, and often able to be converted to $$ efficiently via automation.\\n\\n\\nObviously `storage !== compute` but if it were as easy, then I could distribute complex scientific simulations, and revive them years later, and they would \u201cjust work\u201d.\\n\\n\\nThe team at [https://metapage.io](https://metapage.io/) aim to solve that problem: compute as a simple commodity.\\n\\n\\nWhen we can treat compute as a commodity, we have more power over the compute providers. When they manage to get their system to be difficult to move from, you lose bargaining power.\\n\\n\\nPersonally, I default to [https://www.digitalocean.com/](https://www.digitalocean.com/). This isn\u2019t a paid plug! They just do a great job of making plenty of options, at the right complexity/resolution, not too many, not too few.\\n\\n\\nFor my full stacks, I\u2019m using AWS but not directly, and I would prefer not to, but \\n\\n\\n## References {#f72739ff70d843c7b655beb4d3c9c218}\\n\\n\\n### [1] **How data is lost in the cloud** {#5ff5b92126b14c0cb53ba25f3a9f00d3}\\n\\n\\n[https://spanning.com/blog/how-data-is-lost-in-the-cloud/](https://spanning.com/blog/how-data-is-lost-in-the-cloud/)\\n\\n\\n### [2] **Mechanisms of ionizing-radiation resistance** {#7d4f1319505a45ddb4c4b1a2e8c47ceb}\\n\\n\\n[https://en.wikipedia.org/wiki/Deinococcus_radiodurans](https://en.wikipedia.org/wiki/Deinococcus_radiodurans)"},{"id":"/url-configured-websites","metadata":{"permalink":"/blog/url-configured-websites","source":"@site/blog/url-configured-websites.mdx","title":"URL Configured Websites","description":"2023-12-05","date":"2024-08-09T16:59:35.239Z","formattedDate":"August 9, 2024","tags":[],"readingTime":2.59,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"URL Configured Websites","sidebar_position":8,"slug":"/url-configured-websites"},"unlisted":false,"prevItem":{"title":"Blob storage is a solved problem- what about compute?","permalink":"/blog/blob-storage-is-solved-but-what-about-compute"}},"content":"2023-12-05 \\n\\n\\n## Use URL hash parameters to store code / config / state {#99468beeddb741dfae03c3cdade858ed}\\n\\n\\n:::tip\\n\\nIt gives users much more control and creativity over websites\\n\\n:::\\n\\n\\n\\n\\nURLs can [safely and effectively store credentials](https://neilmadden.blog/2019/01/16/can-you-ever-safely-include-credentials-in-a-url/) [1] (access to things). URLs can also store user created code or configuration. This allows anyone with the link to not only view the created resources but also to **edit.**\\n\\n\\n### Example: diagrams stored in the URL {#f45e2af1ccc34c4ea68ba2de23983d02}\\n\\n\\n**The url defines how it\u2019s stored parameters as displayed**\\n\\n\\nor: **I can show simple things in complex powerful ways**\\n\\n\\nor: **Grown seeds express their powerful complexity**\\n\\n\\n[https://mermaid.live/](https://mermaid.live/) is an excellent example. As soon as you go to that link, the link looks long: that\u2019s because it has encoded the diagram it displays completely in the URL hash parameters:\\n\\n\\n![](./1164251445.png)\\n\\n\\nURL:\\n\\n\\n[https://mermaid.live/edit#pako:eNpVjk2Lg0AMhv9KyGkL9Q94WGh1t5fCFurN6SFo7AztfDBGpKj_fcd62c0pvM_zhkzY-JYxx-7px0ZTFKhK5SDNoS50NL1Y6m](https://mermaid.live/edit#pako:eNpVjk2Lg0AMhv9KyGkL9Q94WGh1t5fCFurN6SFo7AztfDBGpKj_fcd62c0pvM_zhkzY-JYxx-7px0ZTFKhK5SDNoS50NL1Y6m-QZZ_ziQWsd_ya4fhx8tBrH4Jx993mH1cJium8agyijXssGyre_R_HM5T1mYL4cPtLqtHP8FWbi07n_xMdObW-647yjrKGIhQU3wru0XK0ZNr0_rQmCkWzZYV5WlvuaHiKQuWWpNIg_vpyDeYSB97jEFoSLg3dI9ktXH4B_cJWqw)\u2026 (I cut it for readability)\\n\\n\\nWhat is happening?\\n\\n- The code that describes the diagram is encoded and store in the hash parameters (after the `#`) of the URL.\\n- That URL can now be shared and directly edited\\n- No backend server is involved in storing the data, only for serving the assets (a _**static**_ website)\\n- Everything after the `#` is **NOT** sent to the server\\n\\n### Example 2: rich contextual and specific error messages when developing software {#1d532f2929214d90a333b147c9c0b770}\\n\\n\\n![](./2099585714.png)\\n\\n\\nUnfortunately I cannot include the link here becuase\\n\\n\\nThe above is an error message given as a URL in javascript react. It\u2019s great because the error specific to my code is embedded in further help and full documentation. \\n\\n\\n## Modern browsers can handle very large URLs {#d32c6439fe384d90b342350311b68d89}\\n\\n\\nIn 2006, [IE8s URL limit was 2083 characters](https://support.microsoft.com/en-us/kb/208427). [IE9 has a similar limit](https://stackoverflow.com/questions/3721034/how-long-of-a-url-can-internet-explorer-9-take). \\n\\n\\n[The original HTTP/1.1 specification put no limit on the length of the URL](http://www.faqs.org/rfcs/rfc2616.html)\\n\\n\\nIn 2022, a new update was published [and says](https://www.rfc-editor.org/rfc/rfc9110#section-4.1-5):\\n\\n\\n> It is RECOMMENDED that all senders and recipients support, at a minimum, URIs with lengths of 8000 octets in protocol elements. Note that this implies some structures and on-wire representations (for example, the request line in HTTP/1.1) will necessarily be larger in some cases.\\n\\n\\nHowever, this is talking about URLs over the wire. For the browser address bar itself, limits are much much higher:\\n\\n\\n```text\\nBrowser     Address bar   document.location\\n                          or anchor tag\\n------------------------------------------\\nChrome          32779           >64k\\nAndroid          8192           >64k\\nFirefox          >64k           >64k\\nSafari           >64k           >64k\\nIE11             2047           5120\\nEdge 16          2047          10240\\n```\\n\\n\\nSource: [https://stackoverflow.com/questions/417142/what-is-the-maximum-length-of-a-url-in-different-browsers](https://stackoverflow.com/questions/417142/what-is-the-maximum-length-of-a-url-in-different-browsers)\\n\\n\\n## You can store large amounts of code in the hash parameters, and allow users to configure complex websites {#852ea18949cc47ad9c89488cf81019ce}\\n\\n\\nSingle metaframe pinned\\n\\n\\n\\n<iframe scrolling=\\"no\\" allow=\\"fullscreen *; camera *; speaker *;\\" style={{width:\\"100%\\",height:\\"370px\\",overflow:\\"hidden\\"}} src=\\"https://app.metapage.io/mf?mfk=CRCyFFm29e\\"></iframe>\\n\\n\\n\\nIn the example above, enough code was embedded in the link to describe a 3D with a bunch of complex behaviour. Someone else can take that URL, and directly modify it, run it, then share the modified URL. \\n\\n\\nThis way, apps can be both self-contained, but also highly configurable and shareable, allowing a high degree of direct collaboration not under centralized control.\\n\\n\\n**Edit:**  click the top right in the embed above: \\n\\n\\n![](./1690007555.png)\\n\\n\\nand you will be able to directly edit the code running, and copy and reuse it yourself.\\n\\n\\n# References {#bfe0a74a53c3401e80a39b6baa8ce923}\\n\\n\\n[https://neilmadden.blog/2019/01/16/can-you-ever-safely-include-credentials-in-a-url/](https://neilmadden.blog/2019/01/16/can-you-ever-safely-include-credentials-in-a-url/)"}]}')}}]);