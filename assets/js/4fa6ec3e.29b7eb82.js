"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[976],{3905:(n,t,e)=>{e.d(t,{Zo:()=>m,kt:()=>g});var r=e(67294);function a(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function o(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function l(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?o(Object(e),!0).forEach((function(t){a(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function i(n,t){if(null==n)return{};var e,r,a=function(n,t){if(null==n)return{};var e,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a}var p=r.createContext({}),c=function(n){var t=r.useContext(p),e=t;return n&&(e="function"==typeof n?n(t):l(l({},t),n)),e},m=function(n){var t=c(n.components);return r.createElement(p.Provider,{value:t},n.children)},s="mdxType",u={inlineCode:"code",wrapper:function(n){var t=n.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(n,t){var e=n.components,a=n.mdxType,o=n.originalType,p=n.parentName,m=i(n,["components","mdxType","originalType","parentName"]),s=c(e),f=a,g=s["".concat(p,".").concat(f)]||s[f]||u[f]||o;return e?r.createElement(g,l(l({ref:t},m),{},{components:e})):r.createElement(g,l({ref:t},m))}));function g(n,t){var e=arguments,a=t&&t.mdxType;if("string"==typeof n||a){var o=e.length,l=new Array(o);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=n,i[s]="string"==typeof n?n:a,l[1]=i;for(var c=2;c<o;c++)l[c]=e[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,e)}f.displayName="MDXCreateElement"},53602:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=e(87462),a=(e(67294),e(3905));const o={},l="Golang \u5faa\u73af",i={unversionedId:"Skill/Golang/\u57fa\u7840\u77e5\u8bc6/\u5faa\u73af",id:"Skill/Golang/\u57fa\u7840\u77e5\u8bc6/\u5faa\u73af",title:"Golang \u5faa\u73af",description:"\u5f62\u5f0f\u4e00\uff1afor init; condition; post { }",source:"@site/docs/Skill/Golang/1-\u57fa\u7840\u77e5\u8bc6/02-\u5faa\u73af.md",sourceDirName:"Skill/Golang/1-\u57fa\u7840\u77e5\u8bc6",slug:"/Skill/Golang/\u57fa\u7840\u77e5\u8bc6/\u5faa\u73af",permalink:"/docs/Skill/Golang/\u57fa\u7840\u77e5\u8bc6/\u5faa\u73af",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"docsSidebar",previous:{title:"Golang \u6761\u4ef6\u5224\u65ad",permalink:"/docs/Skill/Golang/\u57fa\u7840\u77e5\u8bc6/\u6761\u4ef6\u5224\u65ad"},next:{title:"Golang \u7b97\u672f\u8fd0\u7b97\u7b26",permalink:"/docs/Skill/Golang/\u57fa\u7840\u77e5\u8bc6/\u8fd0\u7b97\u7b26"}},p={},c=[{value:"\u63a7\u5236\u8bed\u53e5",id:"\u63a7\u5236\u8bed\u53e5",level:2}],m={toc:c};function s(n){let{components:t,...e}=n;return(0,a.kt)("wrapper",(0,r.Z)({},m,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"golang-\u5faa\u73af"},"Golang \u5faa\u73af"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5f62\u5f0f\u4e00\uff1afor init; condition; post { }")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"sum := 0\nfor i := 0; i < 5; i++ {\n    sum += i\n}\nfmt.Println(sum) // 10\n\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5f62\u5f0f\u4e8c\uff1afor condition { }"),"\uff0cgolang\u6ca1\u6709while\uff0c\u8fd9\u79cd\u7528\u6cd5\u76f8\u5f53\u4e8e while"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"i := 0\nsum := 0\nfor i < 5 {\n    sum += i\n    i++\n}\nfmt.Println(sum) // 10\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5f62\u5f0f\u4e09\uff1afor { }"),"\uff0c\u65e0\u9650\u5faa\u73af\uff0c\u4e5f\u53ef\u4ee5\u7528 for true {}"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'cnt := 0\nfor {\n    fmt.Println("in loop")\n    cnt++\n    if cnt > 5 {\n        break\n    }\n}\nfmt.Println("end")\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5f62\u5f0f\u56db\uff1afor \u5faa\u73af\u7684 range \u683c\u5f0f\u53ef\u4ee5\u5bf9 slice\u3001map\u3001\u6570\u7ec4\u3001\u5b57\u7b26\u4e32\u7b49\u8fdb\u884c\u8fed\u4ee3\u5faa\u73af")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'str := "abc"\nnums := []int{1, 2, 3}\nhash := map[string]int{"a": 1, "b": 2, "c": 3}\nfor i, v := range str {\n    fmt.Println(i, v) //0 97, 1 98, 2 99\n}\nfor i, v := range nums {\n    fmt.Println(i, v) // 0 1, 1 2, 2 3\n}\nfor k, v := range hash {\n    fmt.Println(k, v) // a 1, b 2, c 3\n}\n')),(0,a.kt)("h2",{id:"\u63a7\u5236\u8bed\u53e5"},"\u63a7\u5236\u8bed\u53e5"),(0,a.kt)("p",null,"break \u548c continue \u540e\u9762\u8bb0\u5f97\u8981\u5e26\u4e0a\u300c\u5206\u53f7\u300d"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u63a7\u5236\u8bed\u53e5"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"break;"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u7ecf\u5e38\u7528\u4e8e\u4e2d\u65ad\u5f53\u524d for \u5faa\u73af\u6216\u8df3\u51fa switch \u8bed\u53e5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"continue;"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u8df3\u8fc7\u5f53\u524d\u5faa\u73af\u7684\u5269\u4f59\u8bed\u53e5\uff0c\u7136\u540e\u7ee7\u7eed\u8fdb\u884c\u4e0b\u4e00\u8f6e\u5faa\u73af\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"goto"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5c06\u63a7\u5236\u8f6c\u79fb\u5230\u88ab\u6807\u8bb0\u7684\u8bed\u53e5\u3002")))),(0,a.kt)("p",null,"goto: \u540e\u9762\u53ef\u4ee5\u8ddf\u4efb\u4f55\u8bed\u53e5\uff0c\u751a\u81f3\u53c8\u4e00\u4e2a\u5faa\u73af"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    cnt := 0\n    for {\n        cnt++\n        fmt.Println("in loop", cnt)\n        if cnt > 3 {\n            goto POINT\n        }\n    }\nPOINT:\n    fmt.Println("goto point")\n}\n/*\nin loop 1\nin loop 2\nin loop 3\nin loop 4\ngoto point\n*/\n')))}s.isMDXComponent=!0}}]);