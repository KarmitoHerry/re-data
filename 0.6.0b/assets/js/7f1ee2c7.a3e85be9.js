"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[662],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return p}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(r),p=o,m=f["".concat(l,".").concat(p)]||f[p]||d[p]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9555:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={sidebar_position:3},l="Notify",s={unversionedId:"reference/cli/notify",id:"reference/cli/notify",isDocsHomePage:!1,title:"Notify",description:"redata notify command is used to send notifications relating to redata alerts.",source:"@site/docs/reference/cli/notify.md",sourceDirName:"reference/cli",slug:"/reference/cli/notify",permalink:"/0.6.0b/docs/reference/cli/notify",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/reference/cli/notify.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Run",permalink:"/0.6.0b/docs/reference/cli/run"},next:{title:"Overview",permalink:"/0.6.0b/docs/reference/metrics/overview_metric"}},u=[{value:"slack",id:"slack",children:[]}],d={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"notify"},"Notify"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"re_data notify")," command is used to send notifications relating to re_data alerts."),(0,a.kt)("h3",{id:"slack"},"slack"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'re_data notify slack \\\n--start-date 2021-01-01 \\\n--end-date 2021-01-31 \\\n--webhook-url https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX \\\n--subtitle="[Optional] Markdown text to be added as a subtitle in the slack message generated"\n')),(0,a.kt)("p",null,"Running this command would generate a slack message from the alerts re_data detected."),(0,a.kt)("p",null,"Supported arguments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"start-date (default: today - 7 days) - start date of the period for which you want to generate alerts"),(0,a.kt)("li",{parentName:"ul"},"end-date (default: today - 7 days) - end date of the period for which you want to generate alerts"),(0,a.kt)("li",{parentName:"ul"},"webhook-url - ",(0,a.kt)("a",{parentName:"li",href:"https://api.slack.com/messaging/webhooks"},"incoming webhook")," gotten from a slack app."),(0,a.kt)("li",{parentName:"ul"},"subtitle (optional) - extra markdown text passed to the generated message. Often used to add some more context to the message generated.")))}f.isMDXComponent=!0}}]);