"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[394],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return f}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(t),f=a,v=p["".concat(c,".").concat(f)]||p[f]||s[f]||o;return t?n.createElement(v,i(i({ref:r},d),{},{components:t})):n.createElement(v,i({ref:r},d))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8704:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={sidebar_position:0},c="Overview",u={unversionedId:"reference/cli/overview",id:"reference/cli/overview",isDocsHomePage:!1,title:"Overview",description:"re_data overview cli command is used to generate & serve observability UI.",source:"@site/docs/reference/cli/overview.md",sourceDirName:"reference/cli",slug:"/reference/cli/overview",permalink:"/feature-update-ui-build/docs/reference/cli/overview",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/reference/cli/overview.md",version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Tests",permalink:"/feature-update-ui-build/docs/reference/data_monitoring/tests"},next:{title:"Run",permalink:"/feature-update-ui-build/docs/reference/cli/run"}},d=[{value:"generate",id:"generate",children:[]},{value:"serve",id:"serve",children:[]}],s={toc:d};function p(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"re_data overview")," cli command is used to generate & serve observability UI. "),(0,o.kt)("h3",{id:"generate"},"generate"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"re_data overview generate --start-date 2021-01-01 --end-date 2021-01-30 --interval days:1\n")),(0,o.kt)("p",null,"Generates overview as HTML and JSON files and saves them in ",(0,o.kt)("inlineCode",{parentName:"p"},"target/re_data")," folder of your dbt project. "),(0,o.kt)("p",null,"Supported argments:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"start-date (",(0,o.kt)("em",{parentName:"li"},"default: today - 7 days"),") - start date of period for which you generate overview"),(0,o.kt)("li",{parentName:"ul"},"end-date (",(0,o.kt)("em",{parentName:"li"},"default: today"),") - end date of period for which you generate overview"),(0,o.kt)("li",{parentName:"ul"},"interval (",(0,o.kt)("em",{parentName:"li"},"default: days:1"),") - basic time grain for the overview, supported values - ",(0,o.kt)("em",{parentName:"li"},"days"),", ",(0,o.kt)("em",{parentName:"li"},"hours"),", example: ",(0,o.kt)("strong",{parentName:"li"},"days:7"),", ",(0,o.kt)("strong",{parentName:"li"},"hours:1"),".")),(0,o.kt)("p",null,"For this command to generate HTLL/JSON with data, you need to have already re_data models for chosen dates/intervals in your data warehouse. ",(0,o.kt)("inlineCode",{parentName:"p"},"re_data run")," command or just bare ",(0,o.kt)("inlineCode",{parentName:"p"},"dbt run")," for re_data package (can be called in your dbt Cloud env) are command to use for that."),(0,o.kt)("h3",{id:"serve"},"serve"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"re_data overview serve\n")),(0,o.kt)("p",null,"Starts simple python server that serves HTML/JSON files generated & opens your browser \ud83d\ude0a"))}p.isMDXComponent=!0}}]);