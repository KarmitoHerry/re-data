(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[790],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return _}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(a),_=r,p=m["".concat(d,".").concat(_)]||m[_]||u[_]||i;return a?n.createElement(p,o(o({ref:t},c),{},{components:a})):n.createElement(p,o({ref:t},c))}));function _(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3628:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),o=["components"],l={sidebar_position:2},d="Models",s={unversionedId:"reference/models",id:"reference/models",isDocsHomePage:!1,title:"Models",description:"Models created by re_data.",source:"@site/docs/reference/models.md",sourceDirName:"reference",slug:"/reference/models",permalink:"/re-data/docs/reference/models",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/reference/models.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Config",permalink:"/re-data/docs/reference/config"},next:{title:"Macros",permalink:"/re-data/docs/reference/macros"}},c=[{value:"re_data_tables",id:"re_data_tables",children:[]},{value:"re_data_columns",id:"re_data_columns",children:[]},{value:"re_data_freshness",id:"re_data_freshness",children:[]},{value:"re_data_row_count",id:"re_data_row_count",children:[]},{value:"re_data_count_nulls",id:"re_data_count_nulls",children:[]},{value:"re_data_count_missing",id:"re_data_count_missing",children:[]},{value:"re_data_min",id:"re_data_min",children:[]},{value:"re_data_max",id:"re_data_max",children:[]},{value:"re_data_avg",id:"re_data_avg",children:[]},{value:"re_data_min_length",id:"re_data_min_length",children:[]},{value:"re_data_max_length",id:"re_data_max_length",children:[]},{value:"re_data_avg_length",id:"re_data_avg_length",children:[]},{value:"re_data_base_metrics",id:"re_data_base_metrics",children:[]}],u={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"models"},"Models"),(0,i.kt)("p",null,"Models created by re_data."),(0,i.kt)("h3",{id:"re_data_tables"},"re_data_tables"),(0,i.kt)("p",null,"Information about all monitored tables. This is currently only table which is supposed to be edited (you can think of it as a configuration table)\n2 columns can be changed there:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Change ",(0,i.kt)("inlineCode",{parentName:"li"},"actively_monitored")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"false")," to start/stop monitoring table and computing stats for it, ",(0,i.kt)("inlineCode",{parentName:"li"},"(default: false)")),(0,i.kt)("li",{parentName:"ul"},"Change ",(0,i.kt)("inlineCode",{parentName:"li"},"time_filter")," to name of column you would like to use as time filter\nTime filter is important thing in ",(0,i.kt)("inlineCode",{parentName:"li"},"re_data"),", it's used in all filters computing metrics (to filter records added in a given day)\nOn the start some educated guess \ud83d\ude42 is assigned as this field, but quite often it may require to be changed. ",(0,i.kt)("inlineCode",{parentName:"li"},"(default: first timestamp type column)"))),(0,i.kt)("h3",{id:"re_data_columns"},"re_data_columns"),(0,i.kt)("p",null,"Information about all monitored columns, this contains information about columns similar to this\nwhat you can find in ",(0,i.kt)("inlineCode",{parentName:"p"},"information_schema"),". This table is not supposed to be edited and new columns will be added and old removed\nin case of schema changes for your tables."),(0,i.kt)("h3",{id:"re_data_freshness"},"re_data_freshness"),(0,i.kt)("p",null,"Information about time (in seconds) since last data was added to each table. ",(0,i.kt)("inlineCode",{parentName:"p"},"time_filter")," column is used to find about\ntime record was added. If ",(0,i.kt)("inlineCode",{parentName:"p"},"time_filter")," column is updated, update time will also be taken into account, but be warned that in this case\nall stats computed will also take into account updated time (This maybe good or bad thing depeneding on your use case)."),(0,i.kt)("h3",{id:"re_data_row_count"},"re_data_row_count"),(0,i.kt)("p",null,"Numbers of rows added to table in specific time range."),(0,i.kt)("h3",{id:"re_data_count_nulls"},"re_data_count_nulls"),(0,i.kt)("p",null,"Number of nulls in a given column for specific time range."),(0,i.kt)("h3",{id:"re_data_count_missing"},"re_data_count_missing"),(0,i.kt)("p",null,"Number of nulls and empty string values in a given column for specific time range."),(0,i.kt)("h3",{id:"re_data_min"},"re_data_min"),(0,i.kt)("p",null,"Minimal value appearing in a given column for specific time range."),(0,i.kt)("h3",{id:"re_data_max"},"re_data_max"),(0,i.kt)("p",null,"Maximal value appearing in a given column for specific time range."),(0,i.kt)("h3",{id:"re_data_avg"},"re_data_avg"),(0,i.kt)("p",null,"Average of all values appearing in a given column for specific time range."),(0,i.kt)("h3",{id:"re_data_min_length"},"re_data_min_length"),(0,i.kt)("p",null,"Minimal length of all strings appearing in a given column for specific time range."),(0,i.kt)("h3",{id:"re_data_max_length"},"re_data_max_length"),(0,i.kt)("p",null,"Maximal length of all strings appearing in a given column for specific time range."),(0,i.kt)("h3",{id:"re_data_avg_length"},"re_data_avg_length"),(0,i.kt)("p",null,"Average length of all strings appearing in a given column for specific time range."),(0,i.kt)("h3",{id:"re_data_base_metrics"},"re_data_base_metrics"),(0,i.kt)("p",null,"Internal table containing most of described metrics (apart from ",(0,i.kt)("inlineCode",{parentName:"p"},"re_data_freshness"),"). To really access\nmetrics it's usually better to use view for specific metric."),(0,i.kt)("h4",{id:"re_data_z_score"},"re_data_z_score"),(0,i.kt)("p",null,"Computed z_score for metric. ",(0,i.kt)("inlineCode",{parentName:"p"},"re_data")," looks back on what where metrics values in last 30 days and compute z_score for newest value."),(0,i.kt)("h4",{id:"re_data_alerting"},"re_data_alerting"),(0,i.kt)("p",null,"View computed on top of ",(0,i.kt)("inlineCode",{parentName:"p"},"re_data_z_score")," table to contain metrics which look alerting. Alerting threshold is controled by var ",(0,i.kt)("inlineCode",{parentName:"p"},"re_data:alerting_z_score"),"\nwhich is equal to 3 by default, but can be changed and adjusted."))}m.isMDXComponent=!0}}]);