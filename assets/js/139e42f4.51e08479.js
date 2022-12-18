"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8750],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>p});var r=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var o=r.createContext({}),c=function(n){var e=r.useContext(o),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},u=function(n){var e=c(n.components);return r.createElement(o.Provider,{value:e},n.children)},m="mdxType",f={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,o=n.parentName,u=s(n,["components","mdxType","originalType","parentName"]),m=c(t),g=a,p=m["".concat(o,".").concat(g)]||m[g]||f[g]||i;return t?r.createElement(p,l(l({ref:e},u),{},{components:t})):r.createElement(p,l({ref:e},u))}));function p(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,l=new Array(i);l[0]=g;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=n,s[m]="string"==typeof n?n:a,l[1]=s;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},38491:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const i={},l="Golang \u6761\u4ef6\u5224\u65ad",s={unversionedId:"Skill/Golang/\u57fa\u7840\u77e5\u8bc6/\u6761\u4ef6\u5224\u65ad",id:"Skill/Golang/\u57fa\u7840\u77e5\u8bc6/\u6761\u4ef6\u5224\u65ad",title:"Golang \u6761\u4ef6\u5224\u65ad",description:"if",source:"@site/docs/Skill/Golang/1-\u57fa\u7840\u77e5\u8bc6/01-\u6761\u4ef6\u5224\u65ad.md",sourceDirName:"Skill/Golang/1-\u57fa\u7840\u77e5\u8bc6",slug:"/Skill/Golang/\u57fa\u7840\u77e5\u8bc6/\u6761\u4ef6\u5224\u65ad",permalink:"/docs/Skill/Golang/\u57fa\u7840\u77e5\u8bc6/\u6761\u4ef6\u5224\u65ad",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"docsSidebar",previous:{title:"\u5e38\u7528\u51fd\u6570",permalink:"/docs/Skill/C++/\u5e38\u7528\u51fd\u6570"},next:{title:"Golang \u5faa\u73af",permalink:"/docs/Skill/Golang/\u57fa\u7840\u77e5\u8bc6/\u5faa\u73af"}},o={},c=[{value:"if",id:"if",level:2},{value:"switch",id:"switch",level:2},{value:"select-\u7406\u89e3\u4e0d\u6df1\u523b",id:"select-\u7406\u89e3\u4e0d\u6df1\u523b",level:2}],u={toc:c};function m(n){let{components:e,...t}=n;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"golang-\u6761\u4ef6\u5224\u65ad"},"Golang \u6761\u4ef6\u5224\u65ad"),(0,a.kt)("h2",{id:"if"},"if"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'num := 5\n\nif num > 1 {\n    fmt.Println("case 1: \u5927\u4e8e1")\n}\n\nif num > 10 {\n    fmt.Println("case 2: \u5927\u4e8e10")\n} else if num < 1 {\n    fmt.Println("case 2: \u5c0f\u4e8e10")\n} else {\n    fmt.Println("case 2: \u4e0d\u5c0f\u4e8e10\u4e5f\u4e0d\u5c0f\u4e8e1")\n}\n\nif a := 5; a > 3 {\n    fmt.Println("case 3: ", a)\n}\n')),(0,a.kt)("h2",{id:"switch"},(0,a.kt)("a",{parentName:"h2",href:"https://www.runoob.com/go/go-switch-statement.html"},"switch")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"switch \u8bed\u53e5\u6267\u884c\u7684\u8fc7\u7a0b\u4ece\u4e0a\u81f3\u4e0b\uff0c\u76f4\u5230\u627e\u5230\u5339\u914d\u9879\uff0c\u5339\u914d\u6210\u529f\u540e\u5c31\u4e0d\u4f1a\u6267\u884c\u5176\u4ed6 case"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u6211\u4eec\u9700\u8981\u6267\u884c\u540e\u9762\u7684 case\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"li"},"fallthrough")," "),(0,a.kt)("li",{parentName:"ul"},"fallthrough \u4f1a\u5f3a\u5236\u6267\u884c\u540e\u9762\u7684 case \u8bed\u53e5\uff0cfallthrough \u4e0d\u4f1a\u5224\u65ad\u4e0b\u4e00\u6761 case \u7684\u8868\u8fbe\u5f0f\u7ed3\u679c\u662f\u5426\u4e3a true")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\n// \u5199\u6cd5\u4e00\nfunc test1(marks int) string {\n    var grade string = ""\n\n    switch marks {\n    case 90:\n        grade = "A"\n    case 80:\n        grade = "B"\n    case 50, 60, 70:\n        grade = "C"\n    default:\n        grade = "D"\n    }\n\n    return grade\n}\n\n// \u5199\u6cd5\u4e8c\nfunc test2(marks int) string {\n    var grade string = ""\n\n    switch {\n    case marks == 90:\n        grade = "A"\n    case marks == 80:\n        grade = "B"\n    case 50 <= marks && marks <= 70:\n        grade = "C"\n    default:\n        grade = "D"\n    }\n\n    return grade\n}\n\n// fallthrough\nfunc test3(marks int) string {\n    var grade string = ""\n\n    switch {\n    case marks == 90:\n        grade = "A"\n        fmt.Println("grade is", grade)\n        fallthrough\n    case marks == 80:\n        grade = "B"\n    case 50 <= marks && marks <= 70:\n        grade = "C"\n    default:\n        grade = "D"\n    }\n\n    return grade\n}\n\nfunc main() {\n\n    fmt.Printf("\u4f60\u7684\u7b49\u7ea7\u662f %s\\n", test1(80)) // \u4f60\u7684\u7b49\u7ea7\u662f B\n    fmt.Printf("\u4f60\u7684\u7b49\u7ea7\u662f %s\\n", test1(60)) // \u4f60\u7684\u7b49\u7ea7\u662f C\n    fmt.Printf("\u4f60\u7684\u7b49\u7ea7\u662f %s\\n", test1(40)) // \u4f60\u7684\u7b49\u7ea7\u662f D\n\n    fmt.Printf("\u4f60\u7684\u7b49\u7ea7\u662f %s\\n", test2(80)) // \u4f60\u7684\u7b49\u7ea7\u662f B\n    fmt.Printf("\u4f60\u7684\u7b49\u7ea7\u662f %s\\n", test2(60)) // \u4f60\u7684\u7b49\u7ea7\u662f C\n    fmt.Printf("\u4f60\u7684\u7b49\u7ea7\u662f %s\\n", test2(40)) // \u4f60\u7684\u7b49\u7ea7\u662f D\n\n    fmt.Printf("\u4f60\u7684\u7b49\u7ea7\u662f %s\\n", test3(90))\n    // \u5148\u6253\u5370 grade is A\n    // \u518d\u6253\u5370 \u4f60\u7684\u7b49\u7ea7\u662f B\n}\n\n')),(0,a.kt)("h2",{id:"select-\u7406\u89e3\u4e0d\u6df1\u523b"},"select-\u7406\u89e3\u4e0d\u6df1\u523b"),(0,a.kt)("p",null,"golang\u7684select\u4e0echannel\u914d\u5408\u4f7f\u7528\u3002\u5b83\u7528\u4e8e\u7b49\u5f85\u4e00\u4e2a\u6216\u8005\u591a\u4e2achannel\u7684\u8f93\u51fa\u3002"),(0,a.kt)("p",null,"\u5e94\u7528\u573a\u666f\uff1a\u4e3bgoroutine\u7b49\u5f85\u5b50goroutine\u5b8c\u6210\uff0c\u4f46\u662f\u5b50goroutine\u65e0\u9650\u8fd0\u884c\uff0c\u5bfc\u81f4\u4e3bgoroutine\u4f1a\u4e00\u76f4\u7b49\u5f85\u4e0b\u53bb\u3002\u800c\u4e3b\u7ebf\u7a0b\u60f3\u5047\u5982\u8d85\u8fc7\u4e86\u4e00\u5b9a\u7684\u65f6\u6ca1\u6709\u8fd4\u56de\u7684\u8bdd\uff0c\u8fdb\u884c\u8d85\u65f6\u5224\u65ad\u7136\u540e\u7ee7\u7eed\u8fd0\u884c\u4e0b\u53bb\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "time"\n)\n\nvar chs chan int = make(chan int, 1)\n\nfunc write() {\n    time.Sleep(3 * time.Second)\n    chs <- 1\n}\n\nfunc read() {\n    select {\n    case ch1 := <-chs:\n        fmt.Println(ch1)\n        return\n    case <-time.After(10 * time.Second):\n        fmt.Println("read time out")\n        return\n    }\n}\n\nfunc main() {\n    go write()\n    read()\n}\n')))}m.isMDXComponent=!0}}]);