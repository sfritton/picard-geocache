(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"5LqJ":function(e,a,t){e.exports={container:"nav-module--container--3jZss",navButton:"nav-module--navButton--2QilU"}},"8Rtz":function(e,a,t){"use strict";var r=t("q1tI"),o=t.n(r),n=t("Wbzz"),l=t("eqM9"),c=t.n(l);a.a=function(e){var a=e.children,t=e.color,r=void 0===t?"orange":t,l=e.isRound,d=void 0!==l&&l,u=e.className,i=void 0===u?"":u,s=e.href;return o.a.createElement(n.a,{"data-color":r,"data-is-round":d,className:c.a.button+" "+i,to:s},a)}},B3q3:function(e,a,t){"use strict";var r=t("q1tI"),o=t.n(r),n=t("eqM9"),l=t.n(n);a.a=function(e){var a=e.children,t=e.color,r=void 0===t?"orange":t,n=e.isRound,c=void 0!==n&&n,d=e.className,u=void 0===d?"":d,i=e.onClick,s=e.disabled,m=void 0!==s&&s;return o.a.createElement("button",{"data-color":r,"data-is-round":c,className:l.a.button+" "+u,type:"button",onClick:i,disabled:m},a)}},BBSZ:function(e,a,t){e.exports={grid:"grid-module--grid--1JMZY"}},"Ng2+":function(e,a,t){"use strict";var r=t("q1tI"),o=t.n(r),n=t("qhky"),l=t("a+Yq"),c=t.n(l),d=function(e){var a=e.title,t=e.stardate;return o.a.createElement("div",{className:c.a.headerBorder},o.a.createElement(n.a,null,o.a.createElement("link",{rel:"shortcut icon",type:"image/svg",href:"/picard-geocache/images/starfleet.svg"}),o.a.createElement("title",null,a)),o.a.createElement("div",{className:c.a.header},o.a.createElement("h1",null,a)),o.a.createElement("div",{className:c.a.borderBlockLeft},t),o.a.createElement("div",{className:c.a.borderBlock+" "+c.a.borderBlock1}),o.a.createElement("div",{className:c.a.borderBlock+" "+c.a.borderBlock2}),o.a.createElement("div",{className:c.a.borderBlock+" "+c.a.borderBlock3}),o.a.createElement("div",{className:c.a.borderBlock+" "+c.a.borderBlock4}))},u=t("B3q3"),i=o.a.createContext({currentTool:"log",setCurrentTool:function(){}}),s=t("5LqJ"),m=t.n(s),b=function(e){var a=e.label,t=e.value,n=Object(r.useContext)(i),l=n.currentTool,c=n.setCurrentTool;return o.a.createElement(u.a,{color:t===l?"blue":"orange-light",className:m.a.navButton,onClick:function(){return c(t)}},a)},v=function(){return o.a.createElement("nav",{className:m.a.container},o.a.createElement(b,{label:"Captain's Log",value:"log"}),o.a.createElement(b,{label:"Universal Translator",value:"translator"}),o.a.createElement(b,{label:"Personal Library",value:"library"}),o.a.createElement(b,{label:"Subspace Comms",value:"subspace"}),o.a.createElement(b,{label:"Ship-to-Ship Comms",value:"comms"}))},B=t("cGpK"),k=t.n(B),h=function(e){var a=e.children,t=e.disableNav,r=void 0!==t&&t;return o.a.createElement("div",{className:k.a.contentBorder},o.a.createElement("div",{className:k.a.content},!r&&o.a.createElement(v,null),a),o.a.createElement("div",{className:k.a.borderBlock+" "+k.a.borderBlock1}),o.a.createElement("div",{className:k.a.borderBlock+" "+k.a.borderBlock2}),o.a.createElement("div",{className:k.a.borderBlock+" "+k.a.borderBlock3}),o.a.createElement("div",{className:k.a.borderBlock+" "+k.a.borderBlock4}))},E=t("BBSZ"),p=t.n(E),f={Header:d,Content:h,Grid:function(e){var a=e.children,t=Object(r.useState)("log"),n=t[0],l=t[1];return o.a.createElement(i.Provider,{value:{currentTool:n,setCurrentTool:l}},o.a.createElement("div",{className:p.a.grid},a))},ToolContainer:function(e){var a=e.children;return e.tool!==Object(r.useContext)(i).currentTool?null:o.a.createElement("div",null,a)}};a.a=f},"a+Yq":function(e,a,t){e.exports={headerBorder:"header-module--headerBorder--z2eHC",header:"header-module--header--1CvJg",borderBlockLeft:"header-module--borderBlockLeft--3nb-y",borderBlock:"header-module--borderBlock--2lewp",borderBlock1:"header-module--borderBlock1--266fE",borderBlock2:"header-module--borderBlock2--3yGoL",borderBlock3:"header-module--borderBlock3--2EIPU",borderBlock4:"header-module--borderBlock4--o2TKz"}},cGpK:function(e,a,t){e.exports={contentBorder:"content-module--contentBorder--1b391",content:"content-module--content--otnGh",borderBlock:"content-module--borderBlock--1X4To",borderBlock1:"content-module--borderBlock1--fAfxv",borderBlock2:"content-module--borderBlock2--3b3vF",borderBlock3:"content-module--borderBlock3--xSiO_",borderBlock4:"content-module--borderBlock4--mxwfv"}},eqM9:function(e,a,t){e.exports={button:"button-module--button--1AP7e"}},"i6+/":function(e,a,t){"use strict";t.r(a);var r=t("q1tI"),o=t.n(r),n=t("Ng2+"),l=t("8Rtz"),c=t("nG6W"),d=t.n(c);a.default=function(){return o.a.createElement(n.a.Grid,null,o.a.createElement(n.a.Header,{title:"Page not found",stardate:"46251.3"}),o.a.createElement(n.a.Content,{disableNav:!0},o.a.createElement("div",{className:d.a.wrapper},o.a.createElement("h2",null,"Hmm, that page doesn't exist"),"Try going back to the homepage or restarting the puzzle.",o.a.createElement("div",{className:d.a.buttonWrapper},o.a.createElement(l.a,{href:"/",isRound:!0},"Go to the homepage"),o.a.createElement(l.a,{href:"/01-distress-signal",color:"blue",isRound:!0},"Restart the puzzle")))))}},nG6W:function(e,a,t){e.exports={buttonWrapper:"home-module--buttonWrapper--1aqMF",wrapper:"home-module--wrapper--22I46",sectionWithButton:"home-module--sectionWithButton--1dKt8",section:"home-module--section--Qe9bB"}}}]);
//# sourceMappingURL=component---src-pages-404-tsx-c1b12dff6e3783cac0e1.js.map