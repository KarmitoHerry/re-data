"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[606],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),d=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=d(t.components);return n.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),c=d(r),f=a,g=c["".concat(l,".").concat(f)]||c[f]||p[f]||o;return r?n.createElement(g,i(i({ref:e},u),{},{components:r})):n.createElement(g,i({ref:e},u))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=c;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2246:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return u},default:function(){return c}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={sidebar_position:1},l="Installation for dbt users",d={unversionedId:"getting_started/installation/for_dbt_users",id:"getting_started/installation/for_dbt_users",isDocsHomePage:!1,title:"Installation for dbt users",description:"If you are already using dbt in your company, you can install re_data by adding our dbthub package to your project.",source:"@site/docs/getting_started/installation/for_dbt_users.md",sourceDirName:"getting_started/installation",slug:"/getting_started/installation/for_dbt_users",permalink:"/re-data/feature-v1-support/docs/getting_started/installation/for_dbt_users",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/getting_started/installation/for_dbt_users.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Supported data warehouses",permalink:"/re-data/feature-v1-support/docs/introduction/supported_warehouses"},next:{title:"Installation for starters",permalink:"/re-data/feature-v1-support/docs/getting_started/installation/new_to_dbt"}},u=[{value:"Adding re_data to packages used",id:"adding-re_data-to-packages-used",children:[]},{value:"Adding re_data python package for observability UI",id:"adding-re_data-python-package-for-observability-ui",children:[]}],p={toc:u};function c(t){var e=t.components,r=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation-for-dbt-users"},"Installation for dbt users"),(0,o.kt)("p",null,"If you are already using dbt in your company, you can install re_data by adding our dbthub package to your project."),(0,o.kt)("h2",{id:"adding-re_data-to-packages-used"},"Adding re_data to packages used"),(0,o.kt)("p",null,"Simply update your ",(0,o.kt)("inlineCode",{parentName:"p"},"packages.yml")," file with re_data package"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="packages.yml"',title:'"packages.yml"'},'\npackages:\n    ***\n    \n    - package: re-data/re_data\n      version: [">=0.4.0", "<0.5.0"]\n\n')),(0,o.kt)("p",null,"And run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"dbt deps\n")),(0,o.kt)("h2",{id:"adding-re_data-python-package-for-observability-ui"},"Adding re_data python package for observability UI"),(0,o.kt)("p",null,"To generate re_data observability UI you need to install re_data python packge. You can do it simply like that:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pip install re_data\n")))}c.isMDXComponent=!0}}]);