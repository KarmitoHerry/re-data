"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[797],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},891:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={sidebar_position:3},l="Observability UI \ud83d\udc40",c={unversionedId:"getting_started/toy_shop/generate_ui",id:"getting_started/toy_shop/generate_ui",isDocsHomePage:!1,title:"Observability UI \ud83d\udc40",description:"Now let's investigate generated data in re_data UI. We first generate HTML/JSON from the data warehouse and then serve files.",source:"@site/docs/getting_started/toy_shop/generate_ui.md",sourceDirName:"getting_started/toy_shop",slug:"/getting_started/toy_shop/generate_ui",permalink:"/feature-delete-old-static-files/docs/getting_started/toy_shop/generate_ui",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/getting_started/toy_shop/generate_ui.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Observability data",permalink:"/feature-delete-old-static-files/docs/getting_started/toy_shop/compute_monitoring"},next:{title:"Notifications",permalink:"/feature-delete-old-static-files/docs/getting_started/toy_shop/notifications"}},p=[{value:"Alerts",id:"alerts",children:[]},{value:"Graph",id:"graph",children:[]},{value:"Use cases",id:"use-cases",children:[]},{value:"Want to learn more?",id:"want-to-learn-more",children:[]}],u={toc:p};function d(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"observability-ui-"},"Observability UI \ud83d\udc40"),(0,o.kt)("p",null,"Now let's investigate generated data in re_data UI. We first generate HTML/JSON from the data warehouse and then serve files."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"re_data overview generate --start-date 2021-01-01 --end-date 2021-01-30 --interval days:1\nre_data overview serve\n")),(0,o.kt)("p",null,"After running these commands you should be able to see views similar to those:"),(0,o.kt)("h2",{id:"alerts"},"Alerts"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"GraphExample",src:r(842).Z})),(0,o.kt)("p",null,"Alerts view lets you see if there are any problems currently detected in your data.\nre_data compares past & current metric computed using ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/Standard_score"},"z_score"))," to determinate if value is suspicious. It also shows any schema changes detected here."),(0,o.kt)("p",null,"From the alerts view, you can go to learn more details about specific alerts in the graph view."),(0,o.kt)("h2",{id:"graph"},"Graph"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"GraphExample",src:r(5661).Z})),(0,o.kt)("p",null,"Graph view lets you investigate anomalies, metrics & schema changes on top of the dbt lineage graph."),(0,o.kt)("h2",{id:"use-cases"},"Use cases"),(0,o.kt)("p",null,"re_data observability UI meant to help you:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"gain more confidence in data produced \ud83d\ude0a"),(0,o.kt)("li",{parentName:"ul"},"know first if any problems are appearing in the data"),(0,o.kt)("li",{parentName:"ul"},"analyse anomaly & schema change impact on other tables"),(0,o.kt)("li",{parentName:"ul"},"find the root cause for the problems appearing"),(0,o.kt)("li",{parentName:"ul"},"share information with team members & other teams easily")),(0,o.kt)("h2",{id:"want-to-learn-more"},"Want to learn more?"),(0,o.kt)("p",null,"Check out the rest of re_data docs, or ask as on ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://www.getre.io/slack"},"Slack! \ud83d\ude0a"))," (we are very responsive there)"))}d.isMDXComponent=!0},842:function(e,t,r){t.Z=r.p+"assets/images/alerts-e2b7d7de32aab69e1714c66d7d8dbcc6.png"},5661:function(e,t,r){t.Z=r.p+"assets/images/graph-d1e01ec8b594600fe5f1483af6c06f02.png"}}]);