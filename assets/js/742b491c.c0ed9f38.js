"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[8609],{6124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var o=n(1527),i=n(3703);const a={title:"Running Python with Pyodide",sidebar_position:2,slug:"/python-pyodide-walkthrough",authors:"karl"},s=void 0,r={id:"Getting-Started/python-pyodide-walkthrough",title:"Running Python with Pyodide",description:"Pyodide is a python package that allows you to run lightweight python code directly in the browser. This makes it perfect for simple applications where we want to run python code in a metaframe without having to use a docker container. In this walkthrough we will use python with pyodide to generate a plot and display the image it generates.",source:"@site/docs/Getting-Started/python-pyodide-walkthrough.mdx",sourceDirName:"Getting-Started",slug:"/python-pyodide-walkthrough",permalink:"/docs/python-pyodide-walkthrough",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Running Python with Pyodide",sidebar_position:2,slug:"/python-pyodide-walkthrough",authors:"karl"},sidebar:"tutorialSidebar",previous:{title:"Creating your first metapage",permalink:"/docs/your-first-metapage"}},d={},h=[];function l(e){const t={code:"code",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Pyodide is a python package that allows you to run lightweight python code directly in the browser. This makes it perfect for simple applications where we want to run python code in a metaframe without having to use a docker container. In this walkthrough we will use python with pyodide to generate a plot and display the image it generates."}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.strong,{children:"Create a new metapage using the Search bar and giving the metapage a name. We call it \u201cPyodide metapage\u201d here."})}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(871).Z+"",width:"627",height:"165"})}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.strong,{children:"Let\u2019s add the \u201cPython with Pyodide\u201d metaframe. First go into Edit mode, then use the search bar to find this metaframe. Use the \u201cAdd\u201d button to the right of the metaframe to add it to your metapage."})}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(2923).Z+"",width:"483",height:"135"})}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.strong,{children:"Switch back to View mode then click on the menu button at the top right corner of the pyodide metaframe to view the python code, options, and docs for this metaframe. You will see some basic code importing packages and comments with instructions for installing and importing packages is already included."})}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(2615).Z+"",width:"1794",height:"930"})}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Let\u2019s write some python code now. Any code entered is dynamically run and the output is shown in the panel to the right. Try typing"})," print(\u201dHello world!\u201d) ",(0,o.jsx)(t.strong,{children:"into the bottom of the script. You should see the text \u201cHello world!\u201d appear in the right panel."})]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(8169).Z+"",width:"1117",height:"475"})}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.strong,{children:"Let\u2019s try another simple example. Create a for loop to print the numbers 0 to 9."})}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(8867).Z+"",width:"1116",height:"473"})}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.strong,{children:"Now that you\u2019ve tried some simple examples, let\u2019s do something a little more complex. We will generate some noisy data, export a plot and then view that plot with the \u201cShow Image\u201d frame. Enter the code below into the python editor of the pydide metaframe. Here we install and import the necessary packages, generate data points on a line with some noise added, create a plot of these points with matplotlib, and finally map the generated image to the metaframe\u2019s output."})}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'import pyodide\nimport micropip\nfrom js import metaframe, log\n\n# To install a package (numpy) in pyodide use\n# await micropip.install("numpy")\n\n# Then import the package before using it\n# import numpy as np\n\n# For a list of packages supported by micropip/pyodide see\n# https://pyodide.org/en/stable/usage/packages-in-pyodide.html\n\nawait micropip.install("matplotlib")\nawait micropip.install("numpy")\n\nimport matplotlib.pyplot as plt\nimport io, base64\nimport numpy as np\n\n# Generate data from a y=x line with noise\nx_line = np.linspace(0, 1, 20)\ny_line = x_line + np.random.normal(scale=0.1, size=x_line.shape)\n#print(x_line, y_line)\n\n# Create a scatter plot for the y=x line with noise\nplt.figure(figsize=(10, 6))\nplt.scatter(x_line, y_line, color=\'blue\')\n\n# Add labels and title\nplt.title("Noisy Line Scatterplot (y = x + noise)")\nplt.xlabel("X-axis")\nplt.ylabel("Y-axis")\n\n# Save the figure to a buffer and convert to base64\nbuf = io.BytesIO()\nplt.savefig(buf, format=\'png\')\nbuf.seek(0)\nimg_str = \'data:image/png;base64,\' + base64.b64encode(buf.read()).decode(\'UTF-8\')\n\n# Send the image to metaframe output\nmetaframe.setOutput("image1.png", img_str)\nlog("Sent image1.png!")\n\n# Close the current active figure\nplt.close()\n'})}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"If the code runs correctly you should see"})," Sent image1.png! ",(0,o.jsx)(t.strong,{children:"to the right of the code. Now if we want to actually view the image we need to create a \u201cShow Image\u201d metaframe and perform a data connection. To do this return to Edit mode, use the search bar to find the \u201cShow Image\u201d metaframe, and add it using the \u201cAdd\u201d button next to the result."})]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(2709).Z+"",width:"1129",height:"741"})}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.strong,{children:"Let\u2019s make the data connection by going to the \u201cData Flow\u201d tab, then clicking on \u201cShow Image\u201d to bring up the Data flow editor."})}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(4496).Z+"",width:"1146",height:"868"})}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"We need to create a connection for the image. Click on Add under outputs and type"})," image1.png ",(0,o.jsx)(t.strong,{children:"followed by Enter. Then click on"})," image1.png ",(0,o.jsx)(t.strong,{children:"below inputs and the new connection will appear. Click OK to finalize."})]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(6742).Z+"",width:"659",height:"192"})}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.strong,{children:"Return to View mode and you should now see the plot displayed in your \u201cShow Image\u201d metaframe."})}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(8266).Z+"",width:"972",height:"748"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Congratulations on creating your first metapage that runs python code and displays a plot of its output! As we mentioned earlier, running docker containers in metaframes allow for a greater efficiency and range of applications. We will demonstrate how to use these in the next walkthrough."})}),"\n",(0,o.jsx)(t.p,{children:"Notes for Dion:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"I wanted to do this walkthrough from scratch, but there is a problem with the pyodide metaframe from the create new metaframe interface. If you create a pyodide metaframe this way, it\u2019s impossible to edit the code unless you open the metaframe in a new window or tab with the url. By default the hamburger icon doesn\u2019t appear\u2026 however, even when you edit the code by opening the url in a new tab, it seems the changes you make don\u2019t persist."}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},2923:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/python-pyodide-walkthrough.0df8dc7c-a5ac-4d7e-9d7e-db45665c1e6c-d0dc52c4d244fcc53422bdae392098f2.png"},6742:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/python-pyodide-walkthrough.2ee1820f-6879-4250-b65d-15a4c3801f9a-1b5362b262998c77d1284c57c767cf8c.png"},871:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/python-pyodide-walkthrough.2f3cddbf-d633-4c4e-88b0-1b4e50d00f23-97b0c440d6a64d6532031b2cac5afc75.png"},2709:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/python-pyodide-walkthrough.68c9bb12-7fe5-49c7-90a2-e68e76aef6b3-f560636ed7227495101160c0d1c852b3.png"},4496:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/python-pyodide-walkthrough.716b5a7d-e220-4785-816d-c6c5d35f3282-cda0f91ae7d7c789a896f5a188d73b2f.png"},2615:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/python-pyodide-walkthrough.8c2d2efa-b977-4e77-aca4-2f3a4a9df408-ddf356ab99c3e3fd2b31158bacfe785e.png"},8169:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/python-pyodide-walkthrough.91d89dec-617d-41b7-b962-1e5f71a5313c-57bd85f83702f51abc372ab100026d62.png"},8266:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/python-pyodide-walkthrough.cd74e20f-ddbf-4227-a6df-dbd70ca81bb4-6b68ed49bae888f0227158b3bbc3b045.png"},8867:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/python-pyodide-walkthrough.f552623a-13b6-4390-815c-9d5ec681ac4c-2be971913a286caec61aec786fe2ffe5.png"},3703:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var o=n(959);const i={},a=o.createContext(i);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);