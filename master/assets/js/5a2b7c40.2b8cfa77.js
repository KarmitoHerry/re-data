"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[845],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6088:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],s={sidebar_position:5},l="Q&A",u={unversionedId:"qa",id:"qa",isDocsHomePage:!1,title:"Q&A",description:"Is re_data similar to Great Expectations?",source:"@site/docs/qa.md",sourceDirName:".",slug:"/qa",permalink:"/re-data/master/docs/qa",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/qa.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Metabase",permalink:"/re-data/master/docs/bi_integration/examples/metabase"}},c=[{value:"Is re_data similar to Great Expectations?",id:"is-re_data-similar-to-great-expectations",children:[]},{value:"Can I compute business metrics in re_data?",id:"can-i-compute-business-metrics-in-re_data",children:[]},{value:"How do I run re_data?",id:"how-do-i-run-re_data",children:[]}],d={toc:c};function p(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"qa"},"Q&A"),(0,o.kt)("h3",{id:"is-re_data-similar-to-great-expectations"},"Is re_data similar to Great Expectations?"),(0,o.kt)("p",null,"Yes, it's similar, we believe at least in a couple of ways it's better \ud83d\ude0a"),(0,o.kt)("p",null,"The thing re_data does well is letting you create time-based metrics about your data quality instead of just tests (a lot of the tests can be rewritten to that).\nThat allows you to do a couple of things more than GE tests:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"you can visualize your metrics"),(0,o.kt)("li",{parentName:"ul"},"automatically look for anomalies (in hundreds of your tables)")),(0,o.kt)("p",null,"You can often also compute tests much more efficiently (on metrics, not raw data)"),(0,o.kt)("p",null,"Apart from that re_data is definitely more convenient when you are already using dbt and don't want to set up a separate workflow assessing data quality when it can be done with dbt inside your data warehouse."),(0,o.kt)("p",null,"Research about computing metrics as a good way of doing data quality was actually done by the team behind deequ: ",(0,o.kt)("a",{parentName:"p",href:"http://www.vldb.org/pvldb/vol11/p1781-schelter.pdf"},"http://www.vldb.org/pvldb/vol11/p1781-schelter.pdf")),(0,o.kt)("h3",{id:"can-i-compute-business-metrics-in-re_data"},"Can I compute business metrics in re_data?"),(0,o.kt)("p",null,"re_data is meant for metrics which inform you about the problems in data. Monthly revenue dropping by 30% will definitely be seen as a problem for many people.\nSo we think it's good to track it with re_data in your data warehouse. In general metrics which can be pre-computed and stored in DWH are good candiates\nfor metrics to add to re_data."),(0,o.kt)("p",null,"Still a lot of business metrics aren't like that, BI tools enable users choose different dimensions & filters and investigate metrics this way. This type of metrics are not good candidates to using with re_data and storing with DWH, as you would need to pre-compute everything user can actually query (and it quickly grows exponentially)."),(0,o.kt)("h3",{id:"how-do-i-run-re_data"},"How do I run re_data?"),(0,o.kt)("p",null,"re_data doesn't have any internal scheduler and it's leaving the operation of regularly computing metrics for you to set up. We believe it's best to use existing scheduling tools your company has and we are not trying to build one. "),(0,o.kt)("p",null,"As re_data is a dbt package, you can (and we have installations of that) run re_data using just dbt cloud & set up jobs for computing metrics there. But definitely others methods like running it in Airflow dag are also possible."),(0,o.kt)("h4",{id:"other-questions"},"Other questions?"),(0,o.kt)("p",null,"Have more questions? Ask as on ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://join.slack.com/t/re-data/shared_invite/zt-vkauq1y8-tL4R4_H5nZoVvyXyy0hdug"},"Slack! \ud83d\ude0a"))," (we are very responsive there)"))}p.isMDXComponent=!0}}]);