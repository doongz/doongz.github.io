"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[15318],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(n),m=l,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:l,i[1]=a;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96108:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var r=n(87462),l=(n(67294),n(3905));const o={},i=void 0,a={unversionedId:"Skill/\u5e38\u7528CLI/\u5f85\u6574\u7406-linux\u547d\u4ee4/\u538b\u6d4b\u547d\u4ee4",id:"Skill/\u5e38\u7528CLI/\u5f85\u6574\u7406-linux\u547d\u4ee4/\u538b\u6d4b\u547d\u4ee4",title:"\u538b\u6d4b\u547d\u4ee4",description:"\u63a5\u53e3\u538b\u6d4b",source:"@site/docs/Skill/\u5e38\u7528CLI/\u5f85\u6574\u7406-linux\u547d\u4ee4/\u538b\u6d4b\u547d\u4ee4.md",sourceDirName:"Skill/\u5e38\u7528CLI/\u5f85\u6574\u7406-linux\u547d\u4ee4",slug:"/Skill/\u5e38\u7528CLI/\u5f85\u6574\u7406-linux\u547d\u4ee4/\u538b\u6d4b\u547d\u4ee4",permalink:"/docs/Skill/\u5e38\u7528CLI/\u5f85\u6574\u7406-linux\u547d\u4ee4/\u538b\u6d4b\u547d\u4ee4",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"sed",permalink:"/docs/Skill/\u5e38\u7528CLI/\u5f85\u6574\u7406-linux\u547d\u4ee4/sed"},next:{title:"\u73af\u5883\u53d8\u91cfPATH",permalink:"/docs/Skill/\u5e38\u7528CLI/\u5f85\u6574\u7406-linux\u547d\u4ee4/\u73af\u5883\u53d8\u91cfPATH"}},c={},p=[],u={toc:p};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u63a5\u53e3\u538b\u6d4b\napt-get install apache2-utils\nab -r -t 120 -c 500 ",(0,l.kt)("a",{parentName:"p",href:"http://10.143.110.221:5000/"},"http://10.143.110.221:5000/")),(0,l.kt)("p",null,"for i in ",(0,l.kt)("inlineCode",{parentName:"p"},'seq 1 $(cat /proc/cpuinfo |grep "physical id" |wc -l)'),"; do dd if=/dev/zero of=/dev/null & done"),(0,l.kt)("p",null,"for i in ",(0,l.kt)("inlineCode",{parentName:"p"},"seq 1 10"),"; do dd if=/dev/zero of=/dev/null & done"),(0,l.kt)("p",null,"\u8bf4\u660e:"),(0,l.kt)("p",null,'cat /proc/cpuinfo |grep "physical id" | wc -l \u53ef\u4ee5\u83b7\u5f97CPU\u7684\u4e2a\u6570, \u6211\u4eec\u5c06\u5176\u8868\u793a\u4e3aN.'),(0,l.kt)("p",null,"seq 1 N \u7528\u6765\u751f\u6210\uff11\u5230\uff2e\u4e4b\u95f4\u7684\u6570\u5b57"),(0,l.kt)("p",null,"for i in ",(0,l.kt)("inlineCode",{parentName:"p"},"seq 1 N"),"; \u5c31\u662f\u5faa\u73af\u6267\u884c\u547d\u4ee4,\u4ece\uff11\u5230\uff2e"),(0,l.kt)("p",null,"dd if=/dev/zero of=/dev/null \u6267\u884cdd\u547d\u4ee4, \u8f93\u51fa\u5230/dev/null, \u5b9e\u9645\u4e0a\u53ea\u5360\u7528CPU, \u6ca1\u6709IO\u64cd\u4f5c."),(0,l.kt)("p",null,"\u7531\u4e8e\u8fde\u7eed\u6267\u884c\uff2e\u4e2a(\uff2e\u662f\uff23\uff30\uff35\u4e2a\u6570)\u7684dd \u547d\u4ee4, \u4e14\u4f7f\u7528\u7387\u4e3a\uff11\uff10\uff10%, \u8fd9\u65f6\u8c03\u5ea6\u5668\u4f1a\u8c03\u5ea6\u6bcf\u4e2add\u547d\u4ee4\u5728\u4e0d\u540c\u7684CPU\u4e0a\u5904\u7406."),(0,l.kt)("p",null,"\u6700\u7ec8\u5c31\u5b9e\u73b0\u6240\u6709\uff23\uff30\uff35\u5360\u7528\u7387\uff11\uff10\uff10%"),(0,l.kt)("p",null,"\u53e6\u5916\uff0c\u4e0a\u8ff0\u7a0b\u5e8f\u7684\u7ed3\u675f\u53ef\u4ee5\u4f7f\u7528\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"fg \u540e\u6309 ctrl + C (\u56e0\u4e3a\u8be5\u547d\u4ee4\u662f\u653e\u5728\u540e\u53f0\u6267\u884c)"),(0,l.kt)("li",{parentName:"ol"},"pkill -9 dd")),(0,l.kt)("p",null,"\u6765\u81ea ",(0,l.kt)("a",{parentName:"p",href:"https://blog.csdn.net/chongzi865458/article/details/99638342?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1.control"},"https://blog.csdn.net/chongzi865458/article/details/99638342?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1.control")))}d.isMDXComponent=!0}}]);