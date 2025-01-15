"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[6246],{5954:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=o(1527),a=o(3703);const i={title:"Working with docker metaframes",sidebar_position:3,slug:"/working-with-docker-metaframes",authors:"karl"},r=void 0,s={id:"Getting-Started/working-with-docker-metaframes",title:"Working with docker metaframes",description:"Now that you know how to create simple metapages, we will learn how to use one of the most powerful tools in metapages, the Docker or container metaframe. In basic terms, Docker is a technology that allows you to create and run virtual computer systems within any other system. This is powerful because in this system, called a container, you can install exactly the software needed to run code, and the same docker container is identical no matter what system it is run on, so your code will always work, no matter where or when you run it. This powerful technology can be leveraged in metaframes with custom docker containers or configurations, allowing you to run virtually any code you can imagine enabling endless applications! To get you started with Docker in metaframes, let\u2019s go through a simple example of creating a word cloud with python.",source:"@site/docs/Getting-Started/working-with-docker-metaframes.mdx",sourceDirName:"Getting-Started",slug:"/working-with-docker-metaframes",permalink:"/docs/working-with-docker-metaframes",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Working with docker metaframes",sidebar_position:3,slug:"/working-with-docker-metaframes",authors:"karl"},sidebar:"tutorialSidebar",previous:{title:"Running Python with Pyodide",permalink:"/docs/python-pyodide-walkthrough"},next:{title:"Connect Outputs \u2192 Inputs",permalink:"/docs/connect-inputs-outputs"}},c={},l=[];function d(e){const t={a:"a",code:"code",em:"em",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Now that you know how to create simple metapages, we will learn how to use one of the most powerful tools in metapages, the Docker or container metaframe. In basic terms, Docker is a technology that allows you to create and run virtual computer systems within any other system. This is powerful because in this system, called a container, you can install exactly the software needed to run code, and the same docker container is identical no matter what system it is run on, so your code will always work, no matter where or when you run it. This powerful technology can be leveraged in metaframes with custom docker containers or configurations, allowing you to run virtually any code you can imagine enabling endless applications! To get you started with Docker in metaframes, let\u2019s go through a simple example of creating a word cloud with python."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Step 1:"})," As done in the previous tutorials, create a new metapage. We will call ours \u201cWord Cloud with Docker\u201d"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:o(6036).Z+"",width:"1690",height:"336"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Step 2:"})," We will use four metaframes to construct this metapage. Two \u201cText Editor\u201d metaframes, one \u201cShow Image\u201d, and one \u201cDocker\u201d metaframe. To add these, use the search bar to find them (the official versions should have the \u201cbase\u201d tag), and add them to the metapage with the Add button. Feel free to resize and rearrange the metaframes according to your preferences."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:o(3903).Z+"",width:"2316",height:"1506"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Step 3:"})," We will use the \u201dText Editor\u201d metaframe for the word cloud text input and \u201cText Editor-1\u201d for the python code to create the word cloud. The \u201cDocker\u201d metaframe will run the python code in a docker container using the input text and produce a word cloud image which will be displayed in the \u201cShow Image\u201d metaframe. Let\u2019s now create the necessary data connections between the metaframes. To do this, click on \u201cData flow\u201d, and then follow the steps below."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:o(7937).Z+"",width:"623",height:"503"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Step 3a:"})," We first want to connect the input text from \u201cText Editor\u201d to \u201cDocker\u201d. To do this, first click on Docker to open the connection dialog box. We will provide the text to Docker as an input file called \u201cinput.txt\u201d.  Under Source Metaframe click \u201cText Editor\u201d to select it. Then under outputs click on the box labeled \u201ctext\u201d. Under inputs, click Add, then type \u201cinput.txt\u201d (without the quotes) followed by Enter. Click OK to proceed."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:o(8041).Z+"",width:"498",height:"309"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Step 3b:"})," Repeat the procedure from 3a to provide the text from \u201cText Editor-1\u201d to docker as a file called \u201cgenerate_wordcloud.py\u201d. It should look like the image below when finished."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:o(5504).Z+"",width:"568",height:"295"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Step 3c:"})," Finally, connect the output image from Docker to the \u201cShow Image\u201d metaframe. Click on \u201cShow Image\u201d, ensure \u201cDocker\u201d is listed as the Source Metaframe, then add \u201cwordcloud.png\u201d as the output as input. It should now look like this."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:o(290).Z+"",width:"996",height:"202"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Step 4 - Add the text content:"})," Now that we\u2019ve added our metaframes and connected them together let\u2019s begin adding the content and configuring our metaframes. First we need some content to create our word cloud. This can be whatever you want, but for this example we\u2019ve taken the first few paragraphs from the Docker Wikipedia page. First return to View mode, and then add your content to the \u201cText Editor\u201d metaframe."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:o(4631).Z+"",width:"783",height:"524"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Step 5 - Add the python code:"})," To provide the python code that the docker container will run, you can simply copy the contents of the code block below and paste it into the \u201cText Editor-1\u201d metaframe. You may optionally want to adjust the options of this editor to use a dark theme or provide python keyword coloring by selecting python under the Editor code mode dropdown."]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"import os\nfrom wordcloud import WordCloud\nimport matplotlib.pyplot as plt\n\n# Read the text from the file\nwith open('/inputs/input.txt', 'r') as file:\n    text = file.read()\n\n# Generate the word cloud\nwordcloud = WordCloud(width=800, height=400, background_color='white').generate(text)\n\n# Save the word cloud as an image file\nwordcloud.to_file('/outputs/wordcloud.png')\n\nprint(\"Word cloud image generated as 'wordcloud.png'\")\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Step 6 - Configure Docker:"})," Finally, now that we\u2019ve laid all the groundwork, we will configure our Docker metaframe in order to actually create our word cloud. In configuring the Docker metaframe it is important to know that any inputs can be accessed in the /inputs/ folder and any outputs need to be routed to the /outputs/ folder. You may have already noticed this reflected in the python code from the last step. There are two main things that we need to do to configure the Docker metaframe. You need to specify how to set up the container, and then specify what it will run. To do this, click on the gear icon at the top right of the metaframe and follow the steps below."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:o(5874).Z+"",width:"309",height:"145"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Step 6a - Configure Image:"})," Access the Docker Image configuration by clicking on the \u201cDocker Image\u201d tab. There are two main ways to specify how to create your docker image. You can use an existing published image by specifying the ",(0,n.jsx)(t.a,{href:"https://hub.docker.com/",children:"Docker Hub"})," container identifier under \u201cUse Existing Image\u201d or you can create a custom image with \u201cBuild Image from Repo\u201d. We will do the latter. After selecting \u201cBuild Image from Repo\u201d, click Edit next to Dockerfile. You can then paste in the code below and click \u201cSave\u201d."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-docker",children:"# Use an official Python runtime as the base image\nFROM python:3.10-slim\n\n# Install system dependencies required for wordcloud (gcc and font libraries)\nRUN apt-get update && apt-get install -y \\\n    gcc \\\n    libfreetype6-dev \\\n    libpng-dev \\\n    && rm -rf /var/lib/apt/lists/*\n\n# Install Python dependencies directly\nRUN pip install wordcloud matplotlib\n"})}),"\n",(0,n.jsx)(t.p,{children:"You can leave all the other Docker Image options blank and click Save again."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:o(2944).Z+"",width:"643",height:"710"})}),"\n",(0,n.jsx)(t.p,{children:"Note: A Dockerfile includes all the commands which will be run in setting up the Docker container. In our Dockerfile we use a lightweight version of python as the base image, install some system dependencies, and then finally install the python packages we will use."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Step 6b - Configure Job:"})," In the last step we specified what to install in our container and now we need to tell it what to run. Go to the ",(0,n.jsx)(t.em,{children:"Configure Job"})," tab and under ",(0,n.jsx)(t.em,{children:"Command"})," type \u201cpython /inputs/generate_wordcloud.py\u201d. This will instruct Docker to use python to run the ",(0,n.jsx)(t.em,{children:"generate_wordcloud.py"})," script file in the ",(0,n.jsx)(t.em,{children:"/inputs/"})," folder. All other boxes here can be left blank. Click Save."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:o(7857).Z+"",width:"493",height:"914"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Step 7 - Run the Job:"})," Everything is now set up. Just click \u201cRun Job\u201d in the Docker metaframe to build the Docker container, run the python code, and generate your word cloud."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:o(4730).Z+"",width:"1282",height:"878"})}),"\n",(0,n.jsx)(t.p,{children:"Congratulations! You now have a very powerful tool at your disposal. We\u2019ve gone through a simple example here, but you can adapt the principles learned here to run any code you like inside the Docker metaframe. This can be leveraged to create arbitrarily complex pipelines for data processing, analysis, and visualization for a wide range of applications in drug discovery, computational biology, bioinformatics, machine learning, and beyond. The only limit is your imagination."}),"\n",(0,n.jsx)(t.p,{children:"This concludes our Getting Started tutorials on metapages, but there are many more applications to learn and discover. To learn more and get inspired, please explore the application-specific Examples and Walkthroughs sections of the docs as well as our Gallery of Metapages and Metaframes."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://app.metapage.io/Karl%20Lundquist/word-cloud-with-docker-0fe5ce6b511d440dba3f50389eeba3f2",children:"Solution"})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},2944:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/working-with-docker-metaframes.243ecbc8-90c1-4995-a6b2-a2a36a86fdd6-f732658e6b7865de60d330063a755ef4.png"},8041:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/working-with-docker-metaframes.28bb4c31-a836-47d6-bbd0-ee6fb57ff888-c03831237c556e9a72b89017c320ebf6.png"},6036:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/working-with-docker-metaframes.5d1db17c-0a22-493c-b791-e73bb2ea7325-9a0603e483558fc4b1a15c70233f66a1.png"},3903:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/working-with-docker-metaframes.6b8d98c6-496c-45d6-8e68-b65bf07f8780-7b32f0351951e3be22b752579740469a.png"},5504:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/working-with-docker-metaframes.8fd7dbd4-f319-4757-b41e-2e90e94852e0-be6174c624240a891611c8849328955d.png"},5874:(e,t,o)=>{o.d(t,{Z:()=>n});const n="data:image/png;base64,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"},7937:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/working-with-docker-metaframes.aceabc76-229d-4e46-a366-4aca3f96c619-bae2cba53b59d24de08846a98a1be339.png"},290:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/working-with-docker-metaframes.ce52cf3d-7e78-431a-81d3-6a3840ab9fd3-cbe5a36a3f828293ba00da3b1d1f5df1.png"},4730:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/working-with-docker-metaframes.ce9fbe8c-b5ff-4c9e-a3da-0ffa2951205c-6ecd95e93d99a4df555a545737d47cb0.png"},4631:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/working-with-docker-metaframes.d56ed3d2-0ad9-4354-8ee3-b896ef568597-5e83192f0ccf517c539333f5ae72f616.png"},7857:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/working-with-docker-metaframes.e8d3ff15-f2a7-4acb-abac-99acdc0ce2c9-72eb41422beaf1d296b6744752c8610f.png"},3703:(e,t,o)=>{o.d(t,{Z:()=>s,a:()=>r});var n=o(959);const a={},i=n.createContext(a);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);