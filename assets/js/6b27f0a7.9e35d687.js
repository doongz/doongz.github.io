"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[79416],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(t),m=l,g=s["".concat(c,".").concat(m)]||s[m]||f[m]||o;return t?r.createElement(g,a(a({ref:n},u),{},{components:t})):r.createElement(g,a({ref:n},u))}));function g(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,a=new Array(o);a[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[s]="string"==typeof e?e:l,a[1]=i;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},84484:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(87462),l=(t(67294),t(3905));const o={},a="Golang \u5143\u7ec4",i={unversionedId:"Skill/Golang/\u57fa\u7840\u77e5\u8bc6/\u5143\u7ec4-\u975e\u539f\u751f",id:"Skill/Golang/\u57fa\u7840\u77e5\u8bc6/\u5143\u7ec4-\u975e\u539f\u751f",title:"Golang \u5143\u7ec4",description:"golang \u672c\u8eab\u65e0\u5143\u7ec4\uff0c\u53ef\u4ee5\u7528\u7a7a\u63a5\u53e3\u5b9e\u73b0\u4e2a\u5143\u7ec4",source:"@site/docs/Skill/Golang/1-\u57fa\u7840\u77e5\u8bc6/05-\u5143\u7ec4-\u975e\u539f\u751f.md",sourceDirName:"Skill/Golang/1-\u57fa\u7840\u77e5\u8bc6",slug:"/Skill/Golang/\u57fa\u7840\u77e5\u8bc6/\u5143\u7ec4-\u975e\u539f\u751f",permalink:"/docs/Skill/Golang/\u57fa\u7840\u77e5\u8bc6/\u5143\u7ec4-\u975e\u539f\u751f",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"skillSidebar",previous:{title:"Golang \u5b57\u7b26\u4e32 string",permalink:"/docs/Skill/Golang/\u57fa\u7840\u77e5\u8bc6/\u5b57\u7b26\u4e32-string"},next:{title:"Golang \u5207\u7247 slice",permalink:"/docs/Skill/Golang/\u57fa\u7840\u77e5\u8bc6/\u5207\u7247-slice"}},c={},p=[],u={toc:p};function s(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"golang-\u5143\u7ec4"},"Golang \u5143\u7ec4"),(0,l.kt)("p",null,"golang \u672c\u8eab\u65e0\u5143\u7ec4\uff0c\u53ef\u4ee5\u7528\u7a7a\u63a5\u53e3\u5b9e\u73b0\u4e2a\u5143\u7ec4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5b9e\u73b0\u5728\u4e00\u4e2a\u6570\u7ec4\u4e2d\u5b58\u653e\u591a\u79cd\u4e0d\u540c\u7684\u6570\u636e\u7c7b\u578b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\ntype Tuple interface {\n}\n\nfunc main() {\n    tuple := [...]Tuple{1, "hello", true}\n    a := tuple[0]\n    b := tuple[1]\n    c := tuple[2]\n\n    fmt.Printf("%v: %T\\n", tuple, tuple) // [4 hello true]: [3]main.Tuple\n    fmt.Printf("%v: %T\\n", a, a)         // 1: int\n    fmt.Printf("%v: %T\\n", b, b)         //hello: string\n    fmt.Printf("%v: %T\\n", c, c)         //true: bool\n}\n\n')))}s.isMDXComponent=!0}}]);