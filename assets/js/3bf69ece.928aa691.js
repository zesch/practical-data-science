(self.webpackChunkmissing_semester=self.webpackChunkmissing_semester||[]).push([[328],{3278:function(e,t,n){"use strict";n.d(t,{m:function(){return a},O:function(){return s}});var r=n(2122),o=n(7294),c=n(210),a=function(e){var t=e.code,n=e.codeLang,a=e.question,s=e.children,u=(0,o.useState)(s.map((function(e){return!1}))),l=u[0],d=u[1],m=(0,o.useState)(s.map((function(e){return!1}))),h=m[0],p=m[1],f=function(e){var t=[].concat(l);t[e]=!t[e],d(t)};return o.createElement("div",{className:"quiz multiple-choice-quiz card margin-bottom--md"},o.createElement("div",{className:"card__header"},o.createElement("h3",null,a)),o.createElement("div",{className:"card__body"},t&&o.createElement(c.Z,{className:"language-"+n},t),s.map((function(e,t){var n=Object.assign({index:t,checked:l[t],showExplanation:h[t]},e.props);return o.createElement(i,(0,r.Z)({key:t,clickHandler:f},n))}))),o.createElement("div",{className:"card__footer"},o.createElement("button",{className:"button button--primary",onClick:function(){p([].concat(l))}},"Submit")))},i=function(e){var t=e.clickHandler,n=e.text,r=e.explanation,c=e.correct,a=e.showExplanation,i=e.index,s=e.checked;return o.createElement("div",{className:"answer",onClick:function(){return t(i)}},o.createElement("input",{type:"checkbox",id:"checkbox",checked:s,onChange:function(){return t(i)}}),o.createElement("label",{htmlFor:"checkbox"},n),a&&o.createElement("div",{className:"alert alert--"+(c?"success":"danger"),role:"alert"},r))},s=function(){throw new Error("The `Answer` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `MultipleChoice` Component. ")}},8215:function(e,t,n){"use strict";n(7294)},1395:function(e,t,n){"use strict";n(7294),n(944)},2924:function(e,t,n){"use strict";var r=n(7294).createContext(void 0);t.Z=r},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},5350:function(e,t,n){"use strict";var r=n(7294),o=n(2924);t.Z=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},944:function(e,t,n){"use strict";var r=n(7294),o=n(9443);t.Z=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},2659:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var r=n(2122),o=n(9756),c=(n(7294),n(3905)),a=n(3278),i=(n(210),n(1395),n(8215),["components"]),s={title:"Advanced Shell",slug:"/01/02"},u={unversionedId:"01 Surviving without a GUI/2.2 Advanced Shell",id:"01 Surviving without a GUI/2.2 Advanced Shell",isDocsHomePage:!1,title:"Advanced Shell",description:"<MultipleChoice",source:"@site/docs/01 Surviving without a GUI/2.2 Advanced Shell.mdx",sourceDirName:"01 Surviving without a GUI",slug:"/01/02",permalink:"/docs/01/02",version:"current",frontMatter:{title:"Advanced Shell",slug:"/01/02"},sidebar:"tutorialSidebar",previous:{title:"schmacis schell",permalink:"/docs/01/01"},next:{title:"Servers",permalink:"/docs/01/03"}},l=[],d={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)(a.m,{question:"Was ist der Output des folgenden Codes?",code:"let x = 1+1\nconsole.log(x)\n",mdxType:"MultipleChoice"},(0,c.kt)(a.O,{correct:!0,text:"1",explanation:"Bruder willst du hardward scholarship?",mdxType:"Answer"}),(0,c.kt)(a.O,{text:"0",explanation:"lmao. nah u dumb as hell",mdxType:"Answer"})))}m.isMDXComponent=!0}}]);