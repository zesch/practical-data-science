(self.webpackChunkmissing_semester=self.webpackChunkmissing_semester||[]).push([[189],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return p}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),p=r,h=d["".concat(l,".").concat(p)]||d[p]||m[p]||s;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6742:function(e,t,a){"use strict";a.d(t,{Z:function(){return m}});var n=a(9756),r=a(7294),s=a(3727),o=a(3919),i=a(412),l=(0,r.createContext)({collectLink:function(){}}),c=a(4996),u=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var m=function(e){var t,a,m,d=e.isNavLink,p=e.to,h=e.href,f=e.activeClassName,g=e.isActive,v=e["data-noBrokenLinkCheck"],k=e.autoAddBaseUrl,N=void 0===k||k,w=(0,n.Z)(e,u),b=(0,c.C)().withBaseUrl,y=(0,r.useContext)(l),_=p||h,P=(0,o.Z)(_),x=null==_?void 0:_.replace("pathname://",""),E=void 0!==x?(a=x,N&&function(e){return e.startsWith("/")}(a)?b(a):a):void 0,Z=(0,r.useRef)(!1),C=d?s.OL:s.rU,D=i.Z.canUseIntersectionObserver;(0,r.useEffect)((function(){return!D&&P&&null!=E&&window.docusaurus.prefetch(E),function(){D&&m&&m.disconnect()}}),[E,D,P]);var S=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,O=!E||!P||S;return E&&P&&!S&&!v&&y.collectLink(E),O?r.createElement("a",Object.assign({href:E},_&&!P&&{target:"_blank",rel:"noopener noreferrer"},w)):r.createElement(C,Object.assign({},w,{onMouseEnter:function(){Z.current||null==E||(window.docusaurus.preload(E),Z.current=!0)},innerRef:function(e){var t,a;D&&e&&P&&(t=e,a=function(){null!=E&&window.docusaurus.prefetch(E)},(m=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(m.unobserve(t),m.disconnect(),a())}))}))).observe(t))},to:E||""},d&&{isActive:g,activeClassName:f}))}},3919:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,{b:function(){return n},Z:function(){return r}})},4996:function(e,t,a){"use strict";a.d(t,{C:function(){return s},Z:function(){return o}});var n=a(2263),r=a(3919);function s(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,s=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var s=void 0===n?{}:n,o=s.forcePrependBaseUrl,i=void 0!==o&&o,l=s.absolute,c=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(i)return t+a;var u=a.startsWith(t)?a:t+a.replace(/^\//,"");return c?e+u:u}(s,a,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,s().withBaseUrl)(e,t)}},2924:function(e,t,a){"use strict";var n=a(7294).createContext(void 0);t.Z=n},8465:function(e,t,a){"use strict";a.d(t,{Z:function(){return m}});var n=a(2122),r=a(9756),s=a(7294),o=a(6010),i=a(2263),l=a(5350),c={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"},u=["sources","className","alt"],m=function(e){var t=(0,i.Z)().isClient,a=(0,l.Z)().isDarkTheme,m=e.sources,d=e.className,p=e.alt,h=void 0===p?"":p,f=(0,r.Z)(e,u),g=t?a?["dark"]:["light"]:["light","dark"];return s.createElement(s.Fragment,null,g.map((function(e){return s.createElement("img",(0,n.Z)({key:e,src:m[e],alt:h,className:(0,o.Z)(c.themedImage,c["themedImage--"+e],d)},f))})))}},5350:function(e,t,a){"use strict";var n=a(7294),r=a(2924);t.Z=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},1425:function(e,t,a){"use strict";a.d(t,{W:function(){return o},o:function(){return i}});var n=a(7294),r=a(6742);function s(e){return e.replace(/^.*[\\\/]/,"")}var o=function(e){var t=e.path,a=e.text,o=e.name,i=o||s(t);return n.createElement(r.Z,{download:i,to:t,target:"_blank"},a||i,n.createElement("i",{class:"fas fa-download margin-left--xs"}))},i=function(e){var t=e.path,a=e.text,o=e.name,i=o||s(t);return n.createElement(r.Z,{download:i,to:t,target:"_blank"},n.createElement("button",{class:"button button--outline button--primary padding-left--md margin-bottom--md"},n.createElement("i",{class:"fas fa-download margin-right--sm"}),a||i))}},546:function(e,t,a){"use strict";a.d(t,{Z:function(){return k}});var n=a(2122),r=a(9756),s=a(7294),o=a(6010),i=a(6742),l=a(9732),c=a(4996),u="footerLogoLink_qW4Z",m="footer__bottom_2Ihm",d="footer__bottom_el_2YGO",p="footer__copyright_T59d",h=a(8465),f=["to","href","label","prependBaseUrlToHref"];function g(e){var t=e.to,a=e.href,o=e.label,l=e.prependBaseUrlToHref,u=(0,r.Z)(e,f),m=(0,c.Z)(t),d=(0,c.Z)(a,{forcePrependBaseUrl:!0});return s.createElement(i.Z,(0,n.Z)({className:"footer__link-item"},a?{href:l?d:a}:{to:m},u),o)}var v=function(e){var t=e.sources,a=e.alt;return s.createElement(h.Z,{className:"footer__logo",alt:a,sources:t})};var k=function(){var e=(0,l.LU)().footer,t=e||{},a=t.copyright,n=t.links,r=void 0===n?[]:n,h=t.logo,f=void 0===h?{}:h,k={light:(0,c.Z)(f.src),dark:(0,c.Z)(f.srcDark||f.src)},N={light:(0,c.Z)("img/GitHub-Mark-Light-64px.png"),dark:(0,c.Z)("img/GitHub-Mark-Light-64px.png")};return e?s.createElement("footer",{className:(0,o.Z)("footer",{"footer--dark":"dark"===e.style})},s.createElement("div",{className:"container"},r&&r.length>0&&s.createElement("div",{className:"row footer__links"},r.map((function(e,t){return s.createElement("div",{key:t,className:"col footer__col"},null!=e.title?s.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?s.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?s.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):s.createElement("li",{key:e.href||e.to,className:"footer__item"},s.createElement(g,e))}))):null)}))),(f||a)&&s.createElement("div",{className:(0,o.Z)("footer__bottom","text--center",m)},f&&(f.src||f.srcDark)&&s.createElement("div",{className:d},f.href?s.createElement(i.Z,{href:f.href,className:u},s.createElement(v,{alt:f.alt,sources:k})):s.createElement(v,{alt:f.alt,sources:k})),s.createElement("div",{className:d},s.createElement(i.Z,{href:"https://github.com/zesch/practical-data-science",className:u},s.createElement(v,{alt:"shheeeesh",sources:N}))),a?s.createElement("div",{className:(0,o.Z)("footer__copyright",d,p),dangerouslySetInnerHTML:{__html:a}}):null))):null}},5605:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=a(2122),r=a(9756),s=(a(7294),a(3905)),o=(a(6742),a(546),a(1425)),i=["components"],l={title:"Data Frames - basics",slug:"/03/02"},c={unversionedId:"03 Data handling with scripts/3.2 Data Frames - Basics",id:"03 Data handling with scripts/3.2 Data Frames - Basics",isDocsHomePage:!1,title:"Data Frames - basics",description:"Getting Started",source:"@site/docs/03 Data handling with scripts/3.2 Data Frames - Basics.mdx",sourceDirName:"03 Data handling with scripts",slug:"/03/02",permalink:"/practical-data-science/docs/03/02",version:"current",frontMatter:{title:"Data Frames - basics",slug:"/03/02"},sidebar:"tutorialSidebar",previous:{title:"Data access & manipulation",permalink:"/practical-data-science/docs/03/01"},next:{title:"Data Frames - Advanced",permalink:"/practical-data-science/docs/03/03"}},u=[{value:"Getting Started",id:"getting-started",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"How to read Dataframes",id:"how-to-read-dataframes",children:[]},{value:"head",id:"head",children:[]}]},{value:"Selecting Stuff",id:"selecting-stuff",children:[{value:"By Column",id:"by-column",children:[]},{value:"By Row",id:"by-row",children:[]},{value:"By Both",id:"by-both",children:[]}]},{value:"Usefull methods",id:"usefull-methods",children:[]},{value:"Groups",id:"groups",children:[]},{value:"Exercise",id:"exercise",children:[]}],m={toc:u};function d(e){var t=e.components,l=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"getting-started"},"Getting Started"),(0,s.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("p",null,"To follow along with this lecture you need"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.python.org/downloads/"},"python")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://pypi.org/project/pandas/"},"pandas")," "),(0,s.kt)("li",{parentName:"ul"},"the Dataset we are going to use: ",(0,s.kt)(o.W,{path:"/datasets/vgsales.csv",mdxType:"DownloadLink"})," ")),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Please download the Dataset and follow along as you read this lecture"))),(0,s.kt)("h3",{id:"how-to-read-dataframes"},"How to read Dataframes"),(0,s.kt)("p",null,"Dataframes in pandas are basically just tables. The most common way to create a Dataframe is by reading a csv file"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"df = pd.read_csv('data.csv')\n")),(0,s.kt)("h3",{id:"head"},"head"),(0,s.kt)("p",null,"To get a sense of what our Dataset looks like we can take a lot at the first rows with ",(0,s.kt)("inlineCode",{parentName:"p"},"df.head()")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"# returns the first 5 rows (5 is default)\ndf.head()\n\n# You can also pass in the desired amount of rows\n\n# returns the first 10 rows\ndf.head(10)\n")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"df.head(10)",src:a(656).Z})),(0,s.kt)("h2",{id:"selecting-stuff"},"Selecting Stuff"),(0,s.kt)("h3",{id:"by-column"},"By Column"),(0,s.kt)("p",null,"If we are only interested in some of the columns we can select them as follows"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"# select a single column\ngenres = vgs['Genre']\npublishers = vgs['Publisher']\n\n# select multiple columns\ngenres_and_publishers = vgs[['Genre', 'Publisher']]\nyears_and_sales = vgs[['Year', 'Global_Sales']]\n\n# select rows based on condition\ngames_from_2008 = vgs[vgs.Year == 2008]\nracing_games = vgs[vgs.Genre == 'Racing']\n")),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"If you are unsure about the exact spelling of a column then you can always check the column names with ",(0,s.kt)("inlineCode",{parentName:"p"},"print(df.columns)")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"print(list(df))")))),(0,s.kt)("h3",{id:"by-row"},"By Row"),(0,s.kt)("p",null,"We can select a subset of rows if we pass in a boolean.\nIf we want to chain multiple booleans together we have to use the ",(0,s.kt)("a",{parentName:"p",href:"https://www.geeksforgeeks.org/python-bitwise-operators/"},"bitwise operators"),"\n",(0,s.kt)("inlineCode",{parentName:"p"},"&, |, ~, ^")," instead of ",(0,s.kt)("inlineCode",{parentName:"p"},"and, or, not")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"# Select all Wii games\nwii_games = vgs[vgs.Platform == 'Wii']\n# Select all Wii racing games\nwii_racing_games = vgs[(vgs.Platform == 'Wii') & (vgs.Genre == 'Racing')]\n")),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},'You can also select Columns with the "dot Notation"\nE.g ',(0,s.kt)("inlineCode",{parentName:"p"},"vgs.Name")," and ",(0,s.kt)("inlineCode",{parentName:"p"},'vgs["Name"]')," are both equivalent."))),(0,s.kt)("h3",{id:"by-both"},"By Both"),(0,s.kt)("p",null,"If we want to select a subset of both rows and columns we could just chain the row and column selectors together"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"# Select Publishers of Puzzle Games\npuzzle_publishers = vgs[vgs.Genre == 'Puzzle']['Publisher']\n# Select Names of Playstation 2 Games\nps2game_names = vgs[vgs.Platform == 'PS2']['Name']\n")),(0,s.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Do not do this because it can lead to chained assignments. Use ",(0,s.kt)("inlineCode",{parentName:"p"},"DataFrame.loc")," instead"))),(0,s.kt)("p",null,"If we use ",(0,s.kt)("inlineCode",{parentName:"p"},"vgs.loc[<rowsSelector>, <columnsSelector>]")," our code would look like this"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"# Select Publishers of Puzzle Games\npuzzle_publishers = vgs.loc[vgs.Genre == 'Puzzle', 'Publisher']\n# Select Names of Playstation 2 Games\nps2game_names = vgs.loc[vgs.Platform == 'PS2', 'Name']\n")),(0,s.kt)("h2",{id:"usefull-methods"},"Usefull methods"),(0,s.kt)("h4",{id:"seriesunique"},"Series.unique"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"# list all unique Publishers\nvgs['Publisher'].unique()\n# list all unique Genres\nvgs['Genre'].unique()\n")),(0,s.kt)("h4",{id:"seriesvalue_counts"},"Series.value_counts"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"# Number of Games per Year\nvgs['Year'].value_counts()\n# Number of Games for each Genre\nvgs['Genre'].value_counts()\n")),(0,s.kt)("h4",{id:"dataframeidxmax"},"DataFrame.idxmax"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"# Year with the most Games\nvgs['Year'].value_counts().idxmax()\n")),(0,s.kt)("h4",{id:"dataframenlargest"},"DataFrame.nlargest"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"# Select the 5 Publishers who have released the most games\nvgs['Publisher']value_counts().nlargest(5)\n# Select the 3 Years with most video games released\nvgs['Year']value_counts().nlargest(3)\n")),(0,s.kt)("h2",{id:"groups"},"Groups"),(0,s.kt)("p",null,"For more complex relations we can group the DataFrame by one or more columns."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"")),(0,s.kt)("h2",{id:"exercise"},"Exercise"),(0,s.kt)("p",null,"0) Find out which game has the greatest number of Platforms it was released on"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"name = vgs.groupby('Name')['Platform'].nunique().idxmax()\nprint(name)\nvgs.loc[vgs.Name == name, 'Platform'].unique()\n")),(0,s.kt)("p",null,"1.) Select the 5 most freqeuent Genres for the Publisher Nintendo"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"nintendo = vgs.loc[vgs.Publisher == 'Nintendo', 'Genre'].value_counts().nlargest(5)\n")),(0,s.kt)("p",null,"2.) Select the 10 Publishers with the most unique games published"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"vgs.groupby('Publisher')['Name'].nunique().nlargest(10)\n")),(0,s.kt)("p",null,"3.) Rank all Publishers by their total Global_Sales"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"ranked = vgs.groupby('Publisher')['Global_Sales'].sum().sort_values(ascending=False)\n")))}d.isMDXComponent=!0},656:function(e,t,a){"use strict";t.Z=a.p+"assets/images/3.2_head_table-08841885797b1c98df38d5d55e17ec25.png"}}]);