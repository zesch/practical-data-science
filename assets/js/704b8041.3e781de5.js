(self.webpackChunkmissing_semester=self.webpackChunkmissing_semester||[]).push([[88],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8069:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var a=r(2122),n=r(9756),o=(r(7294),r(3905)),i=["components"],s={title:"Jupyter Notebooks",slug:"/04/02"},l={unversionedId:"04 Visualization & Analysis/4.2 Jupyter Notebooks",id:"04 Visualization & Analysis/4.2 Jupyter Notebooks",isDocsHomePage:!1,title:"Jupyter Notebooks",description:"Getting Started",source:"@site/docs/04 Visualization & Analysis/4.2 Jupyter Notebooks.mdx",sourceDirName:"04 Visualization & Analysis",slug:"/04/02",permalink:"/practical-data-science/docs/04/02",version:"current",frontMatter:{title:"Jupyter Notebooks",slug:"/04/02"},sidebar:"tutorialSidebar",previous:{title:"Visualisation",permalink:"/practical-data-science/docs/04/01"},next:{title:"Streamlit",permalink:"/practical-data-science/docs/04/03"}},u=[{value:"Getting Started",id:"getting-started",children:[{value:"What&#39;s Jupyter Notebooks?",id:"whats-jupyter-notebooks",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"How to read Dataframes in jupyter",id:"how-to-read-dataframes-in-jupyter",children:[]},{value:"How to visualize in jupyter",id:"how-to-visualize-in-jupyter",children:[]}]}],p={toc:u};function c(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("h3",{id:"whats-jupyter-notebooks"},"What's Jupyter Notebooks?"),(0,o.kt)("p",null,"Jupyter Notebook (formerly IPython Notebooks) is a web-based interactive computational environment for creating notebook documents."),(0,o.kt)("p",null,'Notebook documents are used for literate programming, a method of writing computer programs. Modular notebooks may connect to a variety of computational back ends, called "kernels". Notebook interfaces are widely used for statistics, data science, machine learning, and computer algebra. ',(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Notebook_interface"},"source_notebook")),(0,o.kt)("p",null,"Jupyter Notebook can connect to many kernels to allow programming in different languages. A Jupyter kernel is a program responsible for handling various types of requests (code execution, code completions, inspection), and providing a reply.\nBy default Jupyter Notebook ships with the IPython kernel. As of the 2.3 release (October 2014), there are 49 Jupyter-compatible kernels for many programming languages, including Python, R, Julia and Haskell.\n",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Project_Jupyter"},"source_jupyter")),(0,o.kt)("p",null,"In this lecture, we will use the default Python kernel."),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To follow along with this lecture you need"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://zesch.github.io/practical-data-science/docs/03/02"},"requirements for dataframes")," (we will use the same data set as well)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://jupyter.org/install"},"jupyter"))),(0,o.kt)("h3",{id:"how-to-read-dataframes-in-jupyter"},"How to read Dataframes in jupyter"),(0,o.kt)("p",null,"After having installed jupyter, you invoke it with "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cmd"},"jupyter notebook\n")),(0,o.kt)("p",null,'If it does not automatically open in your browser, look for the address in your terminal (it contains "localhost") and manually copy it into your browser.\nYou may also have to create a new (python kernel) file, if it does not open automatically.'),(0,o.kt)("p",null,"To get aquainted with jupyter, let's just repeat the first steps as described in ",(0,o.kt)("a",{parentName:"p",href:"https://zesch.github.io/practical-data-science/docs/03/02"},"Dataframes-basics"),"\nFirst, import pandas, then read in the .csv file and look at the top 5 lines:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jupyter"},"import pandas as pd\n\nvgs = pd.read_csv(''vgsales.csv')  #the general code is df = pd.read_csv('data.csv') \n# returns the first 5 rows\nvgs.head(5)\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://zesch.github.io/practical-data-science/assets/images/3.2_head_table-08841885797b1c98df38d5d55e17ec25.png",alt:"df.head(5)"})),(0,o.kt)("p",null,"Overall, all the methods used in ",(0,o.kt)("a",{parentName:"p",href:"https://zesch.github.io/practical-data-science/docs/03/02"},"Dataframes-basics")," can be nicely displayed using jupyter.\nBut you can do even more to present and visualize your data and certain results."),(0,o.kt)("h3",{id:"how-to-visualize-in-jupyter"},"How to visualize in jupyter"),(0,o.kt)("p",null,"Now let's re-create the excercises presented in ",(0,o.kt)("a",{parentName:"p",href:"https://zesch.github.io/practical-data-science/docs/03/02"},"Dataframes-basics")," using graph visualizations."),(0,o.kt)("p",null,"2.) Select the 10 Publishers with the most unique games published"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"vgs.groupby('Publisher')['Name'].nunique().nlargest(10)\n")),(0,o.kt)("p",null,"Using this dataframe, we create a bar chart displaying the same information:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jupyter"},"sn.barplot(x= df.groupby('Publisher')['Name'].nunique().nlargest(10).index, # Put the indices of the 10 largest companies on the x-axis\n           y=df.groupby('Publisher')['Name'].nunique().nlargest(10))        # Put the number of sold games of the 10 largest companies on the y-axis\n #These parameters are optional\nplt.rcParams[\"figure.figsize\"] = (5,5)                                      # Set the figure size\nplt.xticks(rotation=90)                                                     # Rotate the labels on the x-axis\nplt.title('Number of unique games in 10 most frequent publishers',          # Set title\n          fontsize=15, fontweight='bold')\nplt.xlabel('Publishers')                                                    # Set x-axis label\nplt.ylabel(\"Number of games\")                                               # Set y-axis label\nplt.show()\n")),(0,o.kt)("p",null,"3.) Rank all Publishers by their total Global_Sales"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"ranked = vgs.groupby('Publisher')['Global_Sales'].sum().sort_values(ascending=False)\n")),(0,o.kt)("p",null,":::\nFrom here needs to be revised\n:::"))}c.isMDXComponent=!0}}]);