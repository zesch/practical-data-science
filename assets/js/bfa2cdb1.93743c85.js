(self.webpackChunkmissing_semester=self.webpackChunkmissing_semester||[]).push([[860],{3278:function(e,t,n){"use strict";n.d(t,{m:function(){return a},O:function(){return u}});var i=n(2122),r=n(7294),o=n(210),a=function(e){var t=e.code,n=e.codeLang,a=e.question,u=e.children,s=(0,r.useState)(u.map((function(e){return!1}))),d=s[0],l=s[1],m=(0,r.useState)(u.map((function(e){return!1}))),v=m[0],p=m[1],h=function(e){var t=[].concat(d);t[e]=!t[e],l(t)};return r.createElement("div",{className:"quiz multiple-choice"},r.createElement("h3",null,a),t&&r.createElement(o.Z,{className:"language-"+n},t),u.map((function(e,t){var n=Object.assign({index:t,checked:d[t],showExplanation:v[t]},e.props);return r.createElement(c,(0,i.Z)({clickHandler:h},n))})),r.createElement("button",{class:"button button--primary",onClick:function(){p([].concat(d))}},"Submit"))},c=function(e){var t=e.clickHandler,n=e.text,i=e.explanation,o=e.correct,a=e.showExplanation,c=e.index,u=e.checked;return r.createElement("div",{className:"answer",onClick:function(){return t(c)}},r.createElement("input",{type:"checkbox",id:"checkbox",checked:u,onChange:function(){return t(c)}}),r.createElement("label",{for:"checkbox"},n),a&&r.createElement("div",{className:"alert alert--"+(o?"success":"danger"),role:"alert"},i))},u=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")}},8215:function(e,t,n){"use strict";n(7294)},5064:function(e,t,n){"use strict";n(7294),n(9443)},2924:function(e,t,n){"use strict";var i=n(7294).createContext(void 0);t.Z=i},9443:function(e,t,n){"use strict";var i=(0,n(7294).createContext)(void 0);t.Z=i},5350:function(e,t,n){"use strict";var i=n(7294),r=n(2924);t.Z=function(){var e=(0,i.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},6202:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return l},default:function(){return v}});var i=n(2122),r=n(9756),o=(n(7294),n(3905)),a=n(3278),c=(n(210),n(5064),n(8215),["components"]),u={title:"Surviving without a GUI (Advanced)"},s=void 0,d={unversionedId:"02 Surviving without a Gui Advanced",id:"02 Surviving without a Gui Advanced",isDocsHomePage:!1,title:"Surviving without a GUI (Advanced)",description:"<MultipleChoice",source:"@site/docs/02 Surviving without a Gui Advanced.mdx",sourceDirName:".",slug:"/02 Surviving without a Gui Advanced",permalink:"/advanced-data-science/docs/02 Surviving without a Gui Advanced",version:"current",frontMatter:{title:"Surviving without a GUI (Advanced)"},sidebar:"tutorialSidebar",previous:{title:"Surviving without a GUI",permalink:"/advanced-data-science/docs/"},next:{title:"Working with remote servers",permalink:"/advanced-data-science/docs/03 Working with remote servers"}},l=[],m={toc:l};function v(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.m,{question:"Was ist der Output des folgenden Codes?",code:"let x = 1+1\nconsole.log(x)\n",mdxType:"MultipleChoice"},(0,o.kt)(a.O,{correct:!0,text:"1",explanation:"Bruder willst du hardward scholarship?",mdxType:"Answer"}),(0,o.kt)(a.O,{text:"0",explanation:"lmao. nah u dumb as hell",mdxType:"Answer"})))}v.isMDXComponent=!0}}]);