"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[662],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=u(n),f=o,y=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(y,i(i({ref:e},c),{},{components:n})):r.createElement(y,i({ref:e},c))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6791:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:2},s="Installation for starters",u={unversionedId:"getting_started/installation/new_to_dbt",id:"getting_started/installation/new_to_dbt",isDocsHomePage:!1,title:"Installation for starters",description:"You are not using dbt (yet?) in your company but would like to try to re_data",source:"@site/docs/getting_started/installation/new_to_dbt.md",sourceDirName:"getting_started/installation",slug:"/getting_started/installation/new_to_dbt",permalink:"/feature-generate-ui-other-dbs/docs/getting_started/installation/new_to_dbt",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/getting_started/installation/new_to_dbt.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation for dbt users",permalink:"/feature-generate-ui-other-dbs/docs/getting_started/installation/for_dbt_users"},next:{title:"Welcome to a toy shop!",permalink:"/feature-generate-ui-other-dbs/docs/getting_started/toy_shop/toy_shop_data"}},c=[{value:"Install re_data package &amp; init your project",id:"install-re_data-package--init-your-project",children:[]},{value:"Setup you db connection",id:"setup-you-db-connection",children:[]},{value:"You are done",id:"you-are-done",children:[]}],p={toc:c};function d(t){var e=t.components,n=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation-for-starters"},"Installation for starters"),(0,a.kt)("p",null,"You are not using dbt (yet?) in your company but would like to try to re_data"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Excellent choice!")," re_data can help you with data quality and is a good way to start using dbt in your organization, even if you are: not yet ready to switch, or happy with the current way of transforming data. "),(0,a.kt)("h2",{id:"install-re_data-package--init-your-project"},"Install re_data package & init your project"),(0,a.kt)("p",null,"For new users we recommend installing re_data package:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip install re_data\n")),(0,a.kt)("p",null,"re_data includes dbt in dependencies so after this step you will already have it installed in your system."),(0,a.kt)("p",null,"Then initialize your dbt project with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"re_data init project_name\n")),(0,a.kt)("h2",{id:"setup-you-db-connection"},"Setup you db connection"),(0,a.kt)("p",null,"Dbt stores connection details for you db in ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.dbt/profiles.yml"),". Example setup for postgres below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title=~/.dbt/profiles.yml",title:"~/.dbt/profiles.yml"},"project_name:\n  target: dev\n  outputs:\n    dev:\n      type: postgres\n      host: xxx\n      user: xxx\n      password: xxx\n      port: 5432\n      dbname: xxx\n      schema: project_name\n      threads: 4\n")),(0,a.kt)("p",null,"More details on how to set up a profile file for your DB can be found in ",(0,a.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/dbt-cli/configure-your-profile"},"dbt docs")),(0,a.kt)("h2",{id:"you-are-done"},"You are done"),(0,a.kt)("p",null,"You are done, check out next chapter about example data quality project."))}d.isMDXComponent=!0}}]);