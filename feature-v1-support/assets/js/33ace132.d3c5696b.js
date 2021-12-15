"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[886],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,_=u["".concat(l,".").concat(d)]||u[d]||p[d]||a;return n?r.createElement(_,s(s({ref:t},m),{},{components:n})):r.createElement(_,s({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7637:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return m},default:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],i={sidebar_position:6},l="Checking for anomalies",c={unversionedId:"getting_started/toy_shop/generate_data/compute_anomalies",id:"getting_started/toy_shop/generate_data/compute_anomalies",isDocsHomePage:!1,title:"Checking for anomalies",description:"Now we will compute metrics for the whole last month and check if there are any anomalies present.",source:"@site/docs/getting_started/toy_shop/generate_data/compute_anomalies.md",sourceDirName:"getting_started/toy_shop/generate_data",slug:"/getting_started/toy_shop/generate_data/compute_anomalies",permalink:"/re-data/feature-v1-support/docs/getting_started/toy_shop/generate_data/compute_anomalies",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/getting_started/toy_shop/generate_data/compute_anomalies.md",version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Specifying custom metrics",permalink:"/re-data/feature-v1-support/docs/getting_started/toy_shop/generate_data/compute_custom_metrics"},next:{title:"Checking for schema changes",permalink:"/re-data/feature-v1-support/docs/getting_started/toy_shop/generate_data/checking_for_schema_changes"}},m=[],p={toc:m};function u(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"checking-for-anomalies"},"Checking for anomalies"),(0,a.kt)("p",null,"Now we will compute metrics for the whole last month and check if there are any anomalies present."),(0,a.kt)("p",null,"But before we do that let's make sure that after playing with custom metrics we do have following setup in ",(0,a.kt)("inlineCode",{parentName:"p"},"dbt_project.yml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="monitored tables"',title:'"monitored','tables"':!0},"vars:\n  re_data:alerting_z_score: 3\n  re_data:schemas:\n    - toy_shop\n  re_data:monitored:\n    - tables:\n        - name: customers\n          time_filter: joined_at\n        - name: order_items\n          time_filter: added_at\n        - name: orders\n          time_filter: created_at\n      actively_monitored: true\n")),(0,a.kt)("p",null,"We could compute anomalies using just a dbt command. In production you most likely will have airflow job or dbt cloud job computing it daily."),(0,a.kt)("p",null,"Here, for simplicity, we will use the ",(0,a.kt)("inlineCode",{parentName:"p"},"re_data run")," command, which is just calling dbt with proper vars:"),(0,a.kt)("p",null,"Assuming this completed successfully, let's query the alerts table:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="toy_shop_re.re_data_alerting"',title:'"toy_shop_re.re_data_alerting"'},'select table_name, column_name, metric, z_score_value, time_window_end from toy_shop_re.re_data_alerting;\n\n             table_name              | column_name |    metric     |    z_score_value    |   time_window_end\n-------------------------------------+-------------+---------------+---------------------+---------------------\n "postgres"."toy_shop"."customers"   | id          | max           | -3.0571164943755322 | 2021-01-15 00:00:00\n "postgres"."toy_shop"."order_items" |             | row_count     | -3.0530445968041606 | 2021-01-24 00:00:00\n "postgres"."toy_shop"."orders"      |             | row_count     | -3.2576351652461364 | 2021-01-24 00:00:00\n "postgres"."toy_shop"."orders"      | status      | min_length    |   4.799999999199999 | 2021-01-27 00:00:00\n "postgres"."toy_shop"."orders"      | status      | max_length    |       -4.7999999976 | 2021-01-27 00:00:00\n "postgres"."toy_shop"."customers"   | id          | nulls_count   |   5.003702330376757 | 2021-01-28 00:00:00\n "postgres"."toy_shop"."customers"   | age         | nulls_count   |   5.003702330376757 | 2021-01-28 00:00:00\n "postgres"."toy_shop"."customers"   | first_name  | nulls_count   |   5.003702330376757 | 2021-01-28 00:00:00\n "postgres"."toy_shop"."customers"   | first_name  | missing_count |   5.003702330376757 | 2021-01-28 00:00:00\n "postgres"."toy_shop"."customers"   | last_name   | nulls_count   |   5.003702330376757 | 2021-01-28 00:00:00\n "postgres"."toy_shop"."customers"   | last_name   | missing_count |   5.003702330376757 | 2021-01-28 00:00:00\n "postgres"."toy_shop"."customers"   | first_name  | min_length    |   5.102520382924569 | 2021-01-29 00:00:00\n')),(0,a.kt)("p",null,"We can see a couple of alerting things here (some things look like false alerts, but most seem to be real problems with data). For example for this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:"anomalies example",anomalies:!0,example:!0},'select * from toy_shop_re.re_data_alerting where metric = \'row_count\';\n\n               table_name               | column_name |  metric   |    z_score_value    | last_value |      last_avg      |    last_stddev     |   time_window_end\n----------------------------------------+-------------+-----------+---------------------+------------+--------------------+--------------------+---------------------\n "postgres"."toy_shop"."order_items"    |             | row_count | -3.0530445968041606 |          0 |  59.47826086956522 | 19.481622027899643 | 2021-01-24 00:00:00\n "postgres"."toy_shop"."orders"         |             | row_count | -3.2576351652461364 |          0 | 23.608695652173914 |  7.247188360352917 | 2021-01-24 00:00:00\n')),(0,a.kt)("p",null,"It seems on 2021-01-23 we didn't get any orders. With an average of more than 23 orders per day, that seems really odd."),(0,a.kt)("p",null,"You can use the re_data_alerting table as a warning generator that something is not right with your data."),(0,a.kt)("p",null,"Now let's to move final part of tutorial and let's check how ",(0,a.kt)("inlineCode",{parentName:"p"},"re_data")," can help with detecting changes in current database schema."))}u.isMDXComponent=!0}}]);