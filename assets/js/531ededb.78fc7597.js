"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[33655],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>g});var o=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function a(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},l=Object.keys(n);for(o=0;o<l.length;o++)t=l[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(o=0;o<l.length;o++)t=l[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var u=o.createContext({}),c=function(n){var e=o.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},p=function(n){var e=c(n.components);return o.createElement(u.Provider,{value:e},n.children)},k="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},s=o.forwardRef((function(n,e){var t=n.components,r=n.mdxType,l=n.originalType,u=n.parentName,p=a(n,["components","mdxType","originalType","parentName"]),k=c(t),s=r,g=k["".concat(u,".").concat(s)]||k[s]||m[s]||l;return t?o.createElement(g,i(i({ref:e},p),{},{components:t})):o.createElement(g,i({ref:e},p))}));function g(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var l=t.length,i=new Array(l);i[0]=s;var a={};for(var u in e)hasOwnProperty.call(e,u)&&(a[u]=e[u]);a.originalType=n,a[k]="string"==typeof n?n:r,i[1]=a;for(var c=2;c<l;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}s.displayName="MDXCreateElement"},31212:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var o=t(87462),r=(t(67294),t(3905));const l={},i="\u9501",a={unversionedId:"Skill/Golang/Go\u8bed\u8a00\u5e76\u53d1/\u9501",id:"Skill/Golang/Go\u8bed\u8a00\u5e76\u53d1/\u9501",title:"\u9501",description:"\u53c2\u80031\uff1aGo\u57fa\u7840\u4e4b\u9501\u7684\u521d\u8bc6",source:"@site/docs/Skill/Golang/2-Go\u8bed\u8a00\u5e76\u53d1/3-\u9501.md",sourceDirName:"Skill/Golang/2-Go\u8bed\u8a00\u5e76\u53d1",slug:"/Skill/Golang/Go\u8bed\u8a00\u5e76\u53d1/\u9501",permalink:"/docs/Skill/Golang/Go\u8bed\u8a00\u5e76\u53d1/\u9501",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"skillSidebar",previous:{title:"Go runtime\u7684\u8c03\u5ea6\u5668",permalink:"/docs/Skill/Golang/Go\u8bed\u8a00\u5e76\u53d1/goroutine\u8c03\u5ea6\u5668"},next:{title:"Golang GC",permalink:"/docs/Skill/Golang/\u8fdb\u9636\u77e5\u8bc6/\u5783\u573e\u56de\u6536"}},u={},c=[{value:"\u4e00\u3001\u4ec0\u4e48\u65f6\u5019\u9700\u8981\u7528\u5230\u9501\uff1f",id:"\u4e00\u4ec0\u4e48\u65f6\u5019\u9700\u8981\u7528\u5230\u9501",level:2},{value:"\u4e8c\u3001\u4e92\u65a5\u9501 sync.Mutex",id:"\u4e8c\u4e92\u65a5\u9501-syncmutex",level:2},{value:"\u4e92\u65a5\u9501\u6ce8\u610f\u4e8b\u9879",id:"\u4e92\u65a5\u9501\u6ce8\u610f\u4e8b\u9879",level:3},{value:"\u4e09\u3001\u8bfb\u5199\u4e92\u65a5\u9501 sync.RWMutex",id:"\u4e09\u8bfb\u5199\u4e92\u65a5\u9501-syncrwmutex",level:2},{value:"\u793a\u4f8b\u4e00\uff1a\u53ea\u4f7f\u7528\u5199\u9501",id:"\u793a\u4f8b\u4e00\u53ea\u4f7f\u7528\u5199\u9501",level:3},{value:"\u793a\u4f8b\u4e8c\uff1a\u8bfb\u9501",id:"\u793a\u4f8b\u4e8c\u8bfb\u9501",level:3},{value:"\u8bfb\u5199\u9501\u6ce8\u610f\u4e8b\u9879",id:"\u8bfb\u5199\u9501\u6ce8\u610f\u4e8b\u9879",level:3},{value:"\u56db\u3001\u539f\u5b50\u64cd\u4f5c atomic",id:"\u56db\u539f\u5b50\u64cd\u4f5c-atomic",level:2},{value:"\u4e94\u3001\u6b7b\u9501",id:"\u4e94\u6b7b\u9501",level:2},{value:"1\u3001\u6b7b\u9501\u53d1\u751f\u7684\u6761\u4ef6",id:"1\u6b7b\u9501\u53d1\u751f\u7684\u6761\u4ef6",level:3},{value:"1\uff09\u4e92\u65a5\u6761\u4ef6",id:"1\u4e92\u65a5\u6761\u4ef6",level:4},{value:"2\uff09\u8bf7\u6c42\u548c\u4fdd\u6301\u6761\u4ef6",id:"2\u8bf7\u6c42\u548c\u4fdd\u6301\u6761\u4ef6",level:4},{value:"3\uff09\u4e0d\u5265\u593a\u6761\u4ef6",id:"3\u4e0d\u5265\u593a\u6761\u4ef6",level:4},{value:"4\uff09\u73af\u8def\u7b49\u5f85\u6761\u4ef6",id:"4\u73af\u8def\u7b49\u5f85\u6761\u4ef6",level:4},{value:"2\u3001\u6b7b\u9501\u89e3\u51b3\u529e\u6cd5",id:"2\u6b7b\u9501\u89e3\u51b3\u529e\u6cd5",level:3},{value:"3\u3001\u6b7b\u9501\u793a\u4f8b",id:"3\u6b7b\u9501\u793a\u4f8b",level:3},{value:"\u516d\u3001\u6d3b\u9501",id:"\u516d\u6d3b\u9501",level:2},{value:"1\u3001\u53d1\u751f\u573a\u666f",id:"1\u53d1\u751f\u573a\u666f",level:3},{value:"2\u3001\u6d3b\u9501\u793a\u4f8b",id:"2\u6d3b\u9501\u793a\u4f8b",level:3},{value:"\u4e03\u3001\u9965\u997f",id:"\u4e03\u9965\u997f",level:2},{value:"1\u3001\u9965\u997f\u793a\u4f8b",id:"1\u9965\u997f\u793a\u4f8b",level:3}],p={toc:c};function k(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u9501"},"\u9501"),(0,r.kt)("p",null,"\u53c2\u80031\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/zhaof/p/8636384.html"},"Go\u57fa\u7840\u4e4b\u9501\u7684\u521d\u8bc6")),(0,r.kt)("h2",{id:"\u4e00\u4ec0\u4e48\u65f6\u5019\u9700\u8981\u7528\u5230\u9501"},"\u4e00\u3001\u4ec0\u4e48\u65f6\u5019\u9700\u8981\u7528\u5230\u9501\uff1f"),(0,r.kt)("p",null,"\u5f53\u7a0b\u5e8f\u4e2d\u5c31\u4e00\u4e2a\u7ebf\u7a0b\u7684\u65f6\u5019\uff0c\u662f\u4e0d\u9700\u8981\u52a0\u9501\u7684\uff0c\u4f46\u662f\u901a\u5e38\u5b9e\u9645\u7684\u4ee3\u7801\u4e0d\u4f1a\u53ea\u662f\u5355\u7ebf\u7a0b\uff0c\u6240\u4ee5\u8fd9\u4e2a\u65f6\u5019\u5c31\u9700\u8981\u7528\u5230\u9501\u4e86\uff0c\u90a3\u4e48\u5173\u4e8e\u9501\u7684\u4f7f\u7528\u573a\u666f\u4e3b\u8981\u6d89\u53ca\u5230\u54ea\u4e9b\u5462\uff1f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u591a\u4e2a\u7ebf\u7a0b\u5728\u8bfb\u76f8\u540c\u7684\u6570\u636e\u65f6"),(0,r.kt)("li",{parentName:"ul"},"\u591a\u4e2a\u7ebf\u7a0b\u5728\u5199\u76f8\u540c\u7684\u6570\u636e\u65f6"),(0,r.kt)("li",{parentName:"ul"},"\u540c\u4e00\u4e2a\u8d44\u6e90\uff0c\u6709\u8bfb\u53c8\u6709\u5199")),(0,r.kt)("p",null,"Go\u8bed\u8a00\u5305\u4e2d\u7684 sync \u5305\u63d0\u4f9b\u4e86\u4e24\u79cd\u9501\u7c7b\u578b\uff1async.Mutex \u548c sync.RWMutex\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e92\u65a5\u9501\uff1aMutex")," \u662f\u6700\u7b80\u5355\u7684\u4e00\u79cd\u9501\u7c7b\u578b\uff0c\u540c\u65f6\u4e5f\u6bd4\u8f83\u66b4\u529b\uff0c\u5f53\u4e00\u4e2a goroutine \u83b7\u5f97\u4e86 Mutex \u540e\uff0c\u5176\u4ed6 goroutine \u5c31\u53ea\u80fd\u7b49\u8fd9\u4e2a goroutine \u91ca\u653e\u8be5 Mutex\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bfb\u5199\u4e92\u65a5\u9501\uff1aRWMutex")," \u76f8\u5bf9\u53cb\u597d\u4e9b\uff0c\u662f\u7ecf\u5178\u7684\u5355\u5199\u591a\u8bfb\u6a21\u578b\u3002\u5728\u8bfb\u9501\u5360\u7528\u7684\u60c5\u51b5\u4e0b\uff0c\u4f1a\u963b\u6b62\u5199\uff0c\u4f46\u4e0d\u963b\u6b62\u8bfb\uff0c\u4e5f\u5c31\u662f\u591a\u4e2a goroutine \u53ef\u540c\u65f6\u83b7\u53d6\u8bfb\u9501\uff08\u8c03\u7528 RLock() \u65b9\u6cd5\uff1b\u800c\u5199\u9501\uff08\u8c03\u7528 Lock() \u65b9\u6cd5\uff09\u4f1a\u963b\u6b62\u4efb\u4f55\u5176\u4ed6 goroutine\uff08\u65e0\u8bba\u8bfb\u548c\u5199\uff09\u8fdb\u6765\uff0c\u6574\u4e2a\u9501\u76f8\u5f53\u4e8e\u7531\u8be5 goroutine \u72ec\u5360\u3002\u4ece RWMutex \u7684\u5b9e\u73b0\u770b\uff0cRWMutex \u7c7b\u578b\u5176\u5b9e\u7ec4\u5408\u4e86 Mutex\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5c3d\u91cf\u4f7f\u7528\u8bfb\u5199\u4e92\u65a5\u9501 RWMutex")," \uff0c\u56e0\u4e3a\u6027\u80fd\u66f4\u9ad8**"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u8fd9\u4e24\u79cd\u9501\u7c7b\u578b\uff0c\u4efb\u4f55\u4e00\u4e2a Lock() \u6216 RLock() \u5747\u9700\u8981\u4fdd\u8bc1\u5bf9\u5e94\u6709 Unlock() \u6216 RUnlock() \u8c03\u7528\u4e0e\u4e4b\u5bf9\u5e94\uff0c\u5426\u5219\u53ef\u80fd\u5bfc\u81f4\u7b49\u5f85\u8be5\u9501\u7684\u6240\u6709 goroutine \u5904\u4e8e\u9965\u997f\u72b6\u6001\uff0c\u751a\u81f3\u53ef\u80fd\u5bfc\u81f4\u6b7b\u9501\u3002"),(0,r.kt)("p",null,"\u793a\u4f8b\u4e00\uff1a\u4e0d\u52a0\u9501\u573a\u666f\uff0c\u5982\u679c\u5f53\u591a\u4e2a\u7ebf\u7a0b\u540c\u65f6\u66f4\u6539\u4e00\u4e2a\u53d8\u91cf\uff0c\u7ed3\u679c\u4f1a\u662f\u600e\u4e48\u6837"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "sync"\n)\n\nvar (\n    count int\n    wg    sync.WaitGroup\n)\n\nfunc main() {\n    for i := 0; i < 2; i++ {\n        wg.Add(1)\n        go func() {\n            for i := 1000000; i > 0; i-- {\n                count++\n            }\n            fmt.Println(count)\n            wg.Done()\n        }()\n    }\n    wg.Wait()\n    fmt.Println(count)\n}\n\n// 879002\n// 1083013\n// 1083013\n')),(0,r.kt)("h2",{id:"\u4e8c\u4e92\u65a5\u9501-syncmutex"},"\u4e8c\u3001\u4e92\u65a5\u9501 sync.Mutex"),(0,r.kt)("p",null,"\u4e92\u65a5\u9501\u662f\u4e00\u79cd\u5e38\u7528\u7684\u63a7\u5236\u5171\u4eab\u8d44\u6e90\u8bbf\u95ee\u7684\u65b9\u6cd5\uff0c\u5b83\u80fd\u591f\u4fdd\u8bc1\u540c\u65f6\u53ea\u6709\u4e00\u4e2a goroutine \u53ef\u4ee5\u8bbf\u95ee\u5230\u5171\u4eab\u8d44\u6e90"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u540c\u4e00\u4e2a\u65f6\u523b\u53ea\u6709\u4e00\u4e2a\u7ebf\u7a0b\u80fd\u591f\u62ff\u5230\u9501")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "sync"\n)\n\nvar (\n    count int\n    wg    sync.WaitGroup\n    lock  sync.Mutex\n)\n\nfunc main() {\n    for i := 0; i < 2; i++ {\n        wg.Add(1)\n        go func() {\n            for i := 1000000; i > 0; i-- {\n                lock.Lock()\n                count++\n                lock.Unlock()\n            }\n            fmt.Println(count)\n            wg.Done()\n        }()\n    }\n    wg.Wait()\n    fmt.Println(count)\n}\n\n// 1634605\n// 2000000\n// 2000000\n')),(0,r.kt)("h3",{id:"\u4e92\u65a5\u9501\u6ce8\u610f\u4e8b\u9879"},"\u4e92\u65a5\u9501\u6ce8\u610f\u4e8b\u9879"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u91cd\u590d\u9501\u5b9a\u4e92\u65a5\u9501"),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u5fd8\u8bb0\u89e3\u9501\u4e92\u65a5\u9501\uff0c \u5fc5\u8981\u65f6\u4f7f\u7528defer\u8bed\u53e5"),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u5bf9\u5c1a\u672a\u9501\u5b9a\u6216\u8005\u5df2\u89e3\u9501\u7684\u4e92\u65a5\u9501\u89e3\u9501"),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u5bf9\u5728\u591a\u4e2a\u51fd\u6570\u4e4b\u95f4\u76f4\u63a5\u4f20\u9012\u4e92\u65a5\u9501")),(0,r.kt)("p",null,"\u5bf9\u5df2\u7ecf\u9501\u5b9a\u7684\u4e92\u65a5\u9501\u8fdb\u884c\u9501\u5b9a\uff0c\u4f1a\u7acb\u5373\u963b\u585e\u5f53\u524d\u7684goroutine \u8fd9\u4e2agoroutine\u6240\u6267\u884c\u7684\u6d41\u7a0b\u4f1a\u4e00\u76f4\u505c\u6ede\u5728\u8be5\u8c03\u7528\u4e92\u65a5\u9501\u7684Lock\u65b9\u6cd5\u7684\u90a3\u884c\u4ee3\u7801"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6240\u8c13\u6b7b\u9501\uff1a \u5f53\u524d\u7a0b\u5e8f\u4e2d\u7684\u4e3bgoroutine\u4ee5\u53ca\u6211\u4eec\u542f\u7528\u7684\u90a3\u4e9bgoroutine \u90fd\u5df2\u7ecf\u88ab\u963b\u585e\uff0c\u8fd9\u4e9bgoroutine\u53ef\u4ee5\u88ab\u79f0\u4e3a\u7528\u6237\u7ea7\u7684goroutine \u8fd9\u5c31\u76f8\u5f53\u4e8e\u6574\u4e2a\u7a0b\u5e8f\u5df2\u7ecf\u505c\u6ede\u4e0d\u524d\u4e86"),"\uff0c\u5e76\u4e14\u8fd9\u4e2a\u65f6\u5019go\u7a0b\u5e8f\u4f1a\u629b\u51fa\u5982\u4e0b\u7684panic:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"fatal error: all goroutines are asleep - deadlock!")),(0,r.kt)("p",null,"\u5e76\u4e14go\u8bed\u8a00\u8fd0\u884c\u65f6\u7cfb\u7edf\u629b\u51fa\u81ea\u884c\u629b\u51fa\u7684panic\u90fd\u5c5e\u4e8e\u81f4\u547d\u6027\u9519\u8bef\uff0c\u90fd\u662f\u65e0\u6cd5\u88ab\u6062\u590d\u7684\uff0c\u8c03\u7528recover\u51fd\u6570\u5bf9\u4ed6\u4eec\u8d77\u4e0d\u5230\u4efb\u4f55\u4f5c\u7528"),(0,r.kt)("p",null,"Go\u8bed\u8a00\u4e2d\u7684\u4e92\u65a5\u9501\u662f\u5f00\u7bb1\u5373\u7528\u7684\uff0c\u4e5f\u5c31\u662f\u6211\u4eec\u58f0\u660e\u4e00\u4e2async.Mutex \u7c7b\u578b\u7684\u53d8\u91cf\uff0c\u5c31\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u5b83\u4e86\uff0c"),(0,r.kt)("p",null,"\u9700\u8981\u6ce8\u610f\uff1a\u8be5\u7c7b\u578b\u662f\u4e00\u4e2a\u7ed3\u6784\u4f53\u7c7b\u578b\uff0c\u5c5e\u4e8e\u503c\u7c7b\u578b\u7684\u4e00\u79cd\uff0c\u628a\u5b83\u4f20\u7ed9\u4e00\u4e2a\u51fd\u6570\uff0c\u5c06\u5b83\u4ece\u51fd\u6570\u4e2d\u8fd4\u56de\uff0c\u628a\u5b83\u8d4b\u503c\u7ed9\u5176\u4ed6\u53d8\u91cf\uff0c\u8ba9\u5b83\u8fdb\u5165\u67d0\u4e2a\u901a\u9053\u90fd\u4f1a\u5bfc\u81f4\u4ed6\u7684\u526f\u672c\u7684\u4ea7\u751f\u3002\u5e76\u4e14\u539f\u503c\u548c\u526f\u672c\u4ee5\u53ca\u591a\u4e2a\u526f\u672c\u4e4b\u95f4\u662f\u5b8c\u5168\u72ec\u7acb\u7684\uff0c\u4ed6\u4eec\u90fd\u662f\u4e0d\u540c\u7684\u4e92\u65a5\u9501"),(0,r.kt)("p",null,"\u6240\u4ee5\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u5c06\u9501\u901a\u8fc7\u6307\u9488\u4f20\u9012"),"\uff0c\u4e0d\u5e94\u8be5\u901a\u8fc7\u51fd\u6570\u53c2\u6570\u4f20\u9012"),(0,r.kt)("h2",{id:"\u4e09\u8bfb\u5199\u4e92\u65a5\u9501-syncrwmutex"},"\u4e09\u3001\u8bfb\u5199\u4e92\u65a5\u9501 sync.RWMutex"),(0,r.kt)("p",null,"\u5728\u8bfb\u591a\u5199\u5c11\u7684\u73af\u5883\u4e2d\uff0c\u53ef\u4ee5\u4f18\u5148\u4f7f\u7528\u8bfb\u5199\u4e92\u65a5\u9501\uff08sync.RWMutex\uff09\uff0c\u5b83\u6bd4\u4e92\u65a5\u9501\u66f4\u52a0\u9ad8\u6548\u3002sync \u5305\u4e2d\u7684 RWMutex \u63d0\u4f9b\u4e86\u8bfb\u5199\u4e92\u65a5\u9501\u7684\u5c01\u88c5"),(0,r.kt)("p",null,"\u8bfb\u5199\u9501\u5206\u4e3a\uff1a\u8bfb\u9501\u548c\u5199\u9501"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u8bbe\u7f6e\u4e86\u4e00\u4e2a\u5199\u9501\uff0c\u90a3\u4e48\u5176\u5b83\u8bfb\u7684\u7ebf\u7a0b\u4ee5\u53ca\u5199\u7684\u7ebf\u7a0b\u90fd\u62ff\u4e0d\u5230\u9501\uff0c\u8fd9\u4e2a\u65f6\u5019\uff0c\u4e0e\u4e92\u65a5\u9501\u7684\u529f\u80fd\u76f8\u540c"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u8bbe\u7f6e\u4e86\u4e00\u4e2a\u8bfb\u9501\uff0c\u90a3\u4e48\u5176\u5b83\u5199\u7684\u7ebf\u7a0b\u662f\u62ff\u4e0d\u5230\u9501\u7684\uff0c\u4f46\u662f\u5176\u5b83\u8bfb\u7684\u7ebf\u7a0b\u662f\u53ef\u4ee5\u62ff\u5230\u9501")),(0,r.kt)("h3",{id:"\u793a\u4f8b\u4e00\u53ea\u4f7f\u7528\u5199\u9501"},"\u793a\u4f8b\u4e00\uff1a\u53ea\u4f7f\u7528\u5199\u9501"),(0,r.kt)("p",null,"\u8f93\u51fa\u7684\u7ed3\u679c\u53ef\u770b\u51fa\uff0c\u5199\u662f\u53ea\u5199\u7684\uff0c\u8bfb\u662f\u591a\u8bfb\u7684"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "sync"\n)\n\nvar (\n    count  int\n    wg     sync.WaitGroup\n    rwlock sync.RWMutex\n)\n\nfunc main() {\n    for i := 0; i < 2; i++ {\n        wg.Add(1)\n        go func() {\n            for i := 1000000; i > 0; i-- {\n                rwlock.Lock() // \u4f7f\u7528\u5199\u9501\n                count++\n                rwlock.Unlock() // \u91ca\u653e\u5199\u9501\n            }\n            wg.Done()\n        }()\n    }\n\n    for i := 0; i < 10; i++ {\n        wg.Add(1)\n        go func() {\n            // rwlock.RLock() // \u4f7f\u7528\u8bfb\u9501\n            fmt.Println(count)\n            // rwlock.RUnlock() // \u91ca\u653e\u8bfb\u9501\n            wg.Done()\n        }()\n    }\n    wg.Wait()\n    fmt.Println(count)\n}\n\n// 933\n// 670\n// 749\n// 820\n// 103\n// 1961\n// 2138\n// 2223\n// 260\n// 2148\n// 2000000\n')),(0,r.kt)("h3",{id:"\u793a\u4f8b\u4e8c\u8bfb\u9501"},"\u793a\u4f8b\u4e8c\uff1a\u8bfb\u9501"),(0,r.kt)("p",null,"\u8f93\u51fa\u7684\u7ed3\u679c\u53ef\u770b\u51fa\uff0c\u5199\u662f\u53ea\u5199\u7684\uff0c\u8bfb\u4e5f\u662f\u53ea\u8bfb\u7684"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "sync"\n)\n\nvar (\n    count  int\n    wg     sync.WaitGroup\n    rwlock sync.RWMutex\n)\n\nfunc main() {\n    for i := 0; i < 2; i++ {\n        wg.Add(1)\n        go func() {\n            for i := 1000000; i > 0; i-- {\n                rwlock.Lock() // \u4f7f\u7528\u5199\u9501\n                count++\n                rwlock.Unlock() // \u91ca\u653e\u5199\u9501\n            }\n            wg.Done()\n        }()\n    }\n\n    for i := 0; i < 10; i++ {\n        wg.Add(1)\n        go func() {\n            rwlock.RLock() // \u4f7f\u7528\u8bfb\u9501\n            fmt.Println(count)\n            rwlock.RUnlock() // \u91ca\u653e\u8bfb\u9501\n            wg.Done()\n        }()\n    }\n    wg.Wait()\n    fmt.Println(count)\n}\n\n// 0\n// 0\n// 0\n// 0\n// 0\n// 1\n// 1\n// 1\n// 1\n// 1\n// 2000000\n')),(0,r.kt)("h3",{id:"\u8bfb\u5199\u9501\u6ce8\u610f\u4e8b\u9879"},"\u8bfb\u5199\u9501\u6ce8\u610f\u4e8b\u9879"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u5199\u9501\u5df2\u88ab\u9501\u5b9a\u7684\u60c5\u51b5\u4e0b\u518d\u6b21\u8bd5\u56fe\u9501\u5b9a\u5199\u9501\uff0c\u4f1a\u963b\u585e\u5f53\u524d\u7684goroutine"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u5199\u9501\u5df2\u88ab\u9501\u5b9a\u7684\u60c5\u51b5\u4e0b\u518d\u6b21\u8bd5\u56fe\u9501\u5b9a\u8bfb\u9501\uff0c\u4e5f\u4f1a\u963b\u585e\u5f53\u524d\u7684goroutine"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u8bfb\u9501\u5df2\u88ab\u9501\u5b9a\u7684\u60c5\u51b5\u4e0b\u8bd5\u56fe\u9501\u5b9a\u5199\u9501\uff0c\u540c\u6837\u4f1a\u963b\u585e\u5f53\u524d\u7684goroutine"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u8bfb\u9501\u5df2\u88ab\u9501\u5b9a\u7684\u60c5\u51b5\u4e0b\u518d\u8bd5\u56fe\u9501\u5b9a\u8bfb\u9501\uff0c\u5e76\u4e0d\u4f1a\u963b\u585e\u5f53\u524d\u7684goroutine")),(0,r.kt)("p",null,"\u5bf9\u4e8e\u67d0\u4e2a\u53d7\u5230\u8bfb\u5199\u9501\u4fdd\u62a4\u7684\u5171\u4eab\u8d44\u6e90\uff0c\u591a\u4e2a\u5199\u64cd\u4f5c\u4e0d\u80fd\u540c\u65f6\u8fdb\u884c\uff0c\u591a\u4e2a\u8bfb\u64cd\u4f5c\u53ef\u4ee5\u540c\u65f6\u8fdb\u884c\uff08\u4f46\u5199\u64cd\u4f5c\u548c\u8bfb\u64cd\u4f5c\u4e0d\u80fd\u540c\u65f6\u8fdb\u884c\uff09"),(0,r.kt)("p",null,"\u5bf9\u5199\u9501\u8fdb\u884c\u89e3\u9501\uff0c\u4f1a\u5524\u9192\u201c\u6240\u6709\u56e0\u8bd5\u56fe\u9501\u5b9a\u8bfb\u9501\uff0c\u800c\u88ab\u963b\u585e\u7684goroutine\u201d, \u5e76\u4e14\u8fd9\u4e2a\u901a\u5e38\u4f1a\u4f7f\u4ed6\u4eec\u90fd\u6210\u529f\u5b8c\u6210\u5bf9\u8bfb\u9501\u7684\u9501\u5b9a"),(0,r.kt)("p",null,"\u5bf9\u8bfb\u9501\u8fdb\u884c\u89e3\u9501\uff0c\u53ea\u4f1a\u5728\u6ca1\u6709\u5176\u4ed6\u8bfb\u9501\u9501\u5b9a\u7684\u524d\u63d0\u4e0b\uff0c\u5524\u9192\u201c\u56e0\u8bd5\u56fe\u9501\u5b9a\u5199\u9501\uff0c\u800c\u88ab\u963b\u585e\u7684goroutine\u201d \u5e76\u4e14\u53ea\u4f1a\u6709\u4e00\u4e2a\u88ab\u5524\u9192\u7684goroutine\u80fd\u591f\u6210\u529f\u5b8c\u6210\u5bf9\u5199\u9501\u7684\u9501\u5b9a\uff0c\u5176\u4ed6\u7684goroutine"),(0,r.kt)("p",null,"\u8fd8\u8981\u5728\u539f\u5904\u7ee7\u7eed\u7b49\u5f85\uff0c\u81f3\u4e8e\u54ea\u4e00\u4e2agoroutine\uff0c\u90a3\u4e48\u5c31\u8981\u770b\u8c01\u7b49\u5f85\u7684\u4e8b\u4ef6\u6700\u957f"),(0,r.kt)("p",null," \u89e3\u9501\u8bfb\u5199\u9501\u4e2d\u672a\u88ab\u9501\u5b9a\u7684\u5199\u9501\uff0c \u4f1a\u7acb\u5373\u5f15\u53d1panic \uff0c\u5bf9\u5176\u4e2d\u7684\u8bfb\u9501\u4e5f\u662f\u5982\u6b64\uff0c\u5e76\u4e14\u540c\u6837\u662f\u4e0d\u53ef\u6062\u590d\u7684"),(0,r.kt)("h2",{id:"\u56db\u539f\u5b50\u64cd\u4f5c-atomic"},"\u56db\u3001\u539f\u5b50\u64cd\u4f5c atomic"),(0,r.kt)("p",null,"\u539f\u5b50\u64cd\u4f5c\uff0c\u6211\u4eec\u5219\u4e0d\u9700\u52a0\u9501\uff0c\u4e5f\u80fd\u4fdd\u8bc1\u6570\u636e\u7684\u4e00\u81f4\u6027\uff0c\u5e76\u4e14\u5982\u679c\u53ea\u662f\u8ba1\u7b97\uff0c\u90a3\u4e48\u539f\u5b50\u64cd\u4f5c\u5219\u662f\u6700\u5feb\u7684"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "sync"\n    "sync/atomic"\n)\n\nvar (\n    count int32\n    wg    sync.WaitGroup\n)\n\nfunc main() {\n    for i := 0; i < 2; i++ {\n        wg.Add(1)\n        go func() {\n            for i := 1000000; i > 0; i-- {\n                atomic.AddInt32(&count, 1)\n            }\n            fmt.Println(count)\n            wg.Done()\n        }()\n    }\n    wg.Wait()\n    fmt.Println(count)\n}\n\n// 1963469\n// 2000000\n// 2000000\n')),(0,r.kt)("h2",{id:"\u4e94\u6b7b\u9501"},"\u4e94\u3001\u6b7b\u9501"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6b7b\u9501\u662f\u6307\u4e24\u4e2a\u6216\u4e24\u4e2a\u4ee5\u4e0a\u7684\u8fdb\u7a0b\uff08\u6216\u7ebf\u7a0b\uff09\u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\uff0c\u56e0\u4e89\u593a\u8d44\u6e90\u800c\u9020\u6210\u7684\u4e00\u79cd\u4e92\u76f8\u7b49\u5f85\u7684\u73b0\u8c61")),(0,r.kt)("p",null,"\u82e5\u65e0\u5916\u529b\u4f5c\u7528\uff0c\u5b83\u4eec\u90fd\u5c06\u65e0\u6cd5\u63a8\u8fdb\u4e0b\u53bb\u3002\u6b64\u65f6\u79f0\u7cfb\u7edf\u5904\u4e8e\u6b7b\u9501\u72b6\u6001\u6216\u7cfb\u7edf\u4ea7\u751f\u4e86\u6b7b\u9501\uff0c\u8fd9\u4e9b\u6c38\u8fdc\u5728\u4e92\u76f8\u7b49\u5f85\u7684\u8fdb\u7a0b\u79f0\u4e3a\u6b7b\u9501\u8fdb\u7a0b\u3002"),(0,r.kt)("h3",{id:"1\u6b7b\u9501\u53d1\u751f\u7684\u6761\u4ef6"},"1\u3001\u6b7b\u9501\u53d1\u751f\u7684\u6761\u4ef6"),(0,r.kt)("h4",{id:"1\u4e92\u65a5\u6761\u4ef6"},"1\uff09\u4e92\u65a5\u6761\u4ef6"),(0,r.kt)("p",null,"\u7ebf\u7a0b\u5bf9\u8d44\u6e90\u7684\u8bbf\u95ee\u662f\u6392\u4ed6\u6027\u7684\uff0c\u5982\u679c\u4e00\u4e2a\u7ebf\u7a0b\u5bf9\u5360\u7528\u4e86\u67d0\u8d44\u6e90\uff0c\u90a3\u4e48\u5176\u4ed6\u7ebf\u7a0b\u5fc5\u987b\u5904\u4e8e\u7b49\u5f85\u72b6\u6001\uff0c\u76f4\u5230\u8be5\u8d44\u6e90\u88ab\u91ca\u653e\u3002"),(0,r.kt)("h4",{id:"2\u8bf7\u6c42\u548c\u4fdd\u6301\u6761\u4ef6"},"2\uff09\u8bf7\u6c42\u548c\u4fdd\u6301\u6761\u4ef6"),(0,r.kt)("p",null,"\u7ebf\u7a0b T1 \u81f3\u5c11\u5df2\u7ecf\u4fdd\u6301\u4e86\u4e00\u4e2a\u8d44\u6e90 R1 \u5360\u7528\uff0c\u4f46\u53c8\u63d0\u51fa\u4f7f\u7528\u53e6\u4e00\u4e2a\u8d44\u6e90 R2 \u8bf7\u6c42\uff0c\u800c\u6b64\u65f6\uff0c\u8d44\u6e90 R2 \u88ab\u5176\u4ed6\u7ebf\u7a0b T2 \u5360\u7528\uff0c\u4e8e\u662f\u8be5\u7ebf\u7a0b T1 \u4e5f\u5fc5\u987b\u7b49\u5f85\uff0c\u4f46\u53c8\u5bf9\u81ea\u5df1\u4fdd\u6301\u7684\u8d44\u6e90 R1 \u4e0d\u91ca\u653e\u3002"),(0,r.kt)("h4",{id:"3\u4e0d\u5265\u593a\u6761\u4ef6"},"3\uff09\u4e0d\u5265\u593a\u6761\u4ef6"),(0,r.kt)("p",null,"\u7ebf\u7a0b\u5df2\u83b7\u5f97\u7684\u8d44\u6e90\uff0c\u5728\u672a\u4f7f\u7528\u5b8c\u4e4b\u524d\uff0c\u4e0d\u80fd\u88ab\u5176\u4ed6\u7ebf\u7a0b\u5265\u593a\uff0c\u53ea\u80fd\u5728\u4f7f\u7528\u5b8c\u4ee5\u540e\u7531\u81ea\u5df1\u91ca\u653e\u3002"),(0,r.kt)("h4",{id:"4\u73af\u8def\u7b49\u5f85\u6761\u4ef6"},"4\uff09\u73af\u8def\u7b49\u5f85\u6761\u4ef6"),(0,r.kt)("p",null,"\u5728\u6b7b\u9501\u53d1\u751f\u65f6\uff0c\u5fc5\u7136\u5b58\u5728\u4e00\u4e2a\u201c\u8fdb\u7a0b - \u8d44\u6e90\u73af\u5f62\u94fe\u201d\uff0c\u5373\uff1a{p0,p1,p2,...pn}\uff0c\u8fdb\u7a0b p0\uff08\u6216\u7ebf\u7a0b\uff09\u7b49\u5f85 p1 \u5360\u7528\u7684\u8d44\u6e90\uff0cp1 \u7b49\u5f85 p2 \u5360\u7528\u7684\u8d44\u6e90\uff0cpn \u7b49\u5f85 p0 \u5360\u7528\u7684\u8d44\u6e90\u3002"),(0,r.kt)("p",null,"\u6700\u76f4\u89c2\u7684\u7406\u89e3\u662f\uff0cp0 \u7b49\u5f85 p1 \u5360\u7528\u7684\u8d44\u6e90\uff0c\u800c p1 \u800c\u5728\u7b49\u5f85 p0 \u5360\u7528\u7684\u8d44\u6e90\uff0c\u4e8e\u662f\u4e24\u4e2a\u8fdb\u7a0b\u5c31\u76f8\u4e92\u7b49\u5f85\u3002"),(0,r.kt)("h3",{id:"2\u6b7b\u9501\u89e3\u51b3\u529e\u6cd5"},"2\u3001\u6b7b\u9501\u89e3\u51b3\u529e\u6cd5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u5e76\u53d1\u67e5\u8be2\u591a\u4e2a\u8868\uff0c\u7ea6\u5b9a\u8bbf\u95ee\u987a\u5e8f\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u540c\u4e00\u4e2a\u4e8b\u52a1\u4e2d\uff0c\u5c3d\u53ef\u80fd\u505a\u5230\u4e00\u6b21\u9501\u5b9a\u83b7\u53d6\u6240\u9700\u8981\u7684\u8d44\u6e90\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u5bb9\u6613\u4ea7\u751f\u6b7b\u9501\u7684\u4e1a\u52a1\u573a\u666f\uff0c\u5c1d\u8bd5\u5347\u7ea7\u9501\u9897\u7c92\u5ea6\uff0c\u4f7f\u7528\u8868\u7ea7\u9501\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u91c7\u7528\u5206\u5e03\u5f0f\u4e8b\u52a1\u9501\u6216\u8005\u4f7f\u7528\u4e50\u89c2\u9501\u3002")),(0,r.kt)("p",null,"\u6b7b\u9501\u7a0b\u5e8f\u662f\u6240\u6709\u5e76\u53d1\u8fdb\u7a0b\u5f7c\u6b64\u7b49\u5f85\u7684\u7a0b\u5e8f\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u6ca1\u6709\u5916\u754c\u7684\u5e72\u9884\uff0c\u8fd9\u4e2a\u7a0b\u5e8f\u5c06\u6c38\u8fdc\u65e0\u6cd5\u6062\u590d\u3002"),(0,r.kt)("h3",{id:"3\u6b7b\u9501\u793a\u4f8b"},"3\u3001\u6b7b\u9501\u793a\u4f8b"),(0,r.kt)("p",null,"\u4f1a\u62a5\u9519 fatal error: all goroutines are asleep - deadlock! "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "runtime"\n    "sync"\n    "time"\n)\n\ntype value struct {\n    memAccess sync.Mutex\n    value     int\n}\n\nfunc main() {\n    runtime.GOMAXPROCS(3)\n    var wg sync.WaitGroup\n\n    sum := func(v1, v2 *value) {\n        defer wg.Done()\n        v1.memAccess.Lock()\n        time.Sleep(2 * time.Second)\n        v2.memAccess.Lock()\n        fmt.Printf("sum = %d\\n", v1.value+v2.value)\n        v2.memAccess.Unlock()\n        v1.memAccess.Unlock()\n    }\n\n    product := func(v1, v2 *value) {\n        defer wg.Done()\n        v2.memAccess.Lock()\n        time.Sleep(2 * time.Second)\n        v1.memAccess.Lock()\n        fmt.Printf("product = %d\\n", v1.value*v2.value)\n        v1.memAccess.Unlock()\n        v2.memAccess.Unlock()\n    }\n\n    var v1, v2 value\n    v1.value = 1\n    v2.value = 1\n    wg.Add(2)\n    go sum(&v1, &v2)\n    go product(&v1, &v2)\n    wg.Wait()\n}\n')),(0,r.kt)("h2",{id:"\u516d\u6d3b\u9501"},"\u516d\u3001\u6d3b\u9501"),(0,r.kt)("p",null,"\u6d3b\u9501\u662f\u53e6\u4e00\u79cd\u5f62\u5f0f\u7684\u6d3b\u8dc3\u6027\u95ee\u9898\uff0c\u8be5\u95ee\u9898\u5c3d\u7ba1\u4e0d\u4f1a\u963b\u585e\u7ebf\u7a0b\uff0c\u4f46\u4e5f\u4e0d\u80fd\u7ee7\u7eed\u6267\u884c\uff0c\u56e0\u4e3a",(0,r.kt)("strong",{parentName:"p"},"\u7ebf\u7a0b\u5c06\u4e0d\u65ad\u91cd\u590d\u540c\u6837\u7684\u64cd\u4f5c\uff0c\u800c\u4e14\u603b\u4f1a\u5931\u8d25"),"\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\u7ebf\u7a0b 1 \u53ef\u4ee5\u4f7f\u7528\u8d44\u6e90\uff0c\u4f46\u5b83\u5f88\u793c\u8c8c\uff0c\u8ba9\u5176\u4ed6\u7ebf\u7a0b\u5148\u4f7f\u7528\u8d44\u6e90\uff0c\u7ebf\u7a0b 2 \u4e5f\u53ef\u4ee5\u4f7f\u7528\u8d44\u6e90\uff0c\u4f46\u5b83\u540c\u6837\u5f88\u7ec5\u58eb\uff0c\u4e5f\u8ba9\u5176\u4ed6\u7ebf\u7a0b\u5148\u4f7f\u7528\u8d44\u6e90\u3002\u5c31\u8fd9\u6837\u4f60\u8ba9\u6211\uff0c\u6211\u8ba9\u4f60\uff0c\u6700\u540e\u4e24\u4e2a\u7ebf\u7a0b\u90fd\u65e0\u6cd5\u4f7f\u7528\u8d44\u6e90\u3002"),(0,r.kt)("h3",{id:"1\u53d1\u751f\u573a\u666f"},"1\u3001\u53d1\u751f\u573a\u666f"),(0,r.kt)("p",null,"\u6d3b\u9501\u901a\u5e38\u53d1\u751f\u5728\u5904\u7406\u4e8b\u52a1\u6d88\u606f\u4e2d\uff0c\u5982\u679c\u4e0d\u80fd\u6210\u529f\u5904\u7406\u67d0\u4e2a\u6d88\u606f\uff0c\u90a3\u4e48\u6d88\u606f\u5904\u7406\u673a\u5236\u5c06\u56de\u6eda\u4e8b\u52a1\uff0c\u5e76\u5c06\u5b83\u91cd\u65b0\u653e\u5230\u961f\u5217\u7684\u5f00\u5934\u3002\u8fd9\u6837\uff0c\u9519\u8bef\u7684\u4e8b\u52a1\u88ab\u4e00\u76f4\u56de\u6eda\u91cd\u590d\u6267\u884c\uff0c\u8fd9\u79cd\u5f62\u5f0f\u7684\u6d3b\u9501\u901a\u5e38\u662f\u7531\u8fc7\u5ea6\u7684\u9519\u8bef\u6062\u590d\u4ee3\u7801\u9020\u6210\u7684\uff0c\u56e0\u4e3a\u5b83\u9519\u8bef\u5730\u5c06\u4e0d\u53ef\u4fee\u590d\u7684\u9519\u8bef\u8ba4\u4e3a\u662f\u53ef\u4fee\u590d\u7684\u9519\u8bef\u3002"),(0,r.kt)("p",null,"\u5f53\u591a\u4e2a\u76f8\u4e92\u534f\u4f5c\u7684\u7ebf\u7a0b\u90fd\u5bf9\u5f7c\u6b64\u8fdb\u884c\u76f8\u5e94\u800c\u4fee\u6539\u81ea\u5df1\u7684\u72b6\u6001\uff0c\u5e76\u4f7f\u5f97\u4efb\u4f55\u4e00\u4e2a\u7ebf\u7a0b\u90fd\u65e0\u6cd5\u7ee7\u7eed\u6267\u884c\u65f6\uff0c\u5c31\u5bfc\u81f4\u4e86\u6d3b\u9501\u3002\u8fd9\u5c31\u50cf\u4e24\u4e2a\u8fc7\u4e8e\u793c\u8c8c\u7684\u4eba\u5728\u8def\u4e0a\u76f8\u9047\uff0c\u4ed6\u4eec\u5f7c\u6b64\u8ba9\u8def\uff0c\u7136\u540e\u5728\u53e6\u4e00\u6761\u8def\u4e0a\u76f8\u9047\uff0c\u7136\u540e\u4ed6\u4eec\u5c31\u4e00\u76f4\u8fd9\u6837\u907f\u8ba9\u4e0b\u53bb\u3002"),(0,r.kt)("p",null,"\u8981\u89e3\u51b3\u8fd9\u79cd\u6d3b\u9501\u95ee\u9898\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u9700\u8981\u5728\u91cd\u8bd5\u673a\u5236\u4e2d\u5f15\u5165\u968f\u673a\u6027"),"\u3002\u4f8b\u5982\u5728\u7f51\u7edc\u4e0a\u53d1\u9001\u6570\u636e\u5305\uff0c\u5982\u679c\u68c0\u6d4b\u5230\u51b2\u7a81\uff0c\u90fd\u8981\u505c\u6b62\u5e76\u5728\u4e00\u6bb5\u65f6\u95f4\u540e\u91cd\u53d1\uff0c\u5982\u679c\u90fd\u5728 1 \u79d2\u540e\u91cd\u53d1\uff0c\u8fd8\u662f\u4f1a\u51b2\u7a81\uff0c\u6240\u4ee5\u5f15\u5165\u968f\u673a\u6027\u53ef\u4ee5\u89e3\u51b3\u8be5\u7c7b\u95ee\u9898\u3002"),(0,r.kt)("h3",{id:"2\u6d3b\u9501\u793a\u4f8b"},"2\u3001\u6d3b\u9501\u793a\u4f8b"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u6f14\u793a\u4e86\u4f7f\u7528\u6d3b\u9501\u7684\u4e00\u4e2a\u5341\u5206\u5e38\u89c1\u7684\u539f\u56e0\uff0c\u4e24\u4e2a\u6216\u4e24\u4e2a\u4ee5\u4e0a\u7684\u5e76\u53d1\u8fdb\u7a0b\u8bd5\u56fe\u5728\u6ca1\u6709\u534f\u8c03\u7684\u60c5\u51b5\u4e0b\u9632\u6b62\u6b7b\u9501\u3002\u8fd9\u5c31\u597d\u6bd4\uff0c\u5982\u679c\u8d70\u5eca\u91cc\u7684\u4eba\u90fd\u540c\u610f\uff0c\u53ea\u6709\u4e00\u4e2a\u4eba\u4f1a\u79fb\u52a8\uff0c\u90a3\u5c31\u4e0d\u4f1a\u6709\u6d3b\u9501\uff1b\u4e00\u4e2a\u4eba\u4f1a\u7ad9\u7740\u4e0d\u52a8\uff0c\u53e6\u4e00\u4e2a\u4eba\u4f1a\u79fb\u5230\u53e6\u4e00\u8fb9\uff0c\u4ed6\u4eec\u5c31\u4f1a\u7ee7\u7eed\u79fb\u52a8\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6d3b\u9501\u548c\u6b7b\u9501\u7684\u533a\u522b\u5728\u4e8e\uff0c\u5904\u4e8e\u6d3b\u9501\u7684\u5b9e\u4f53\u662f\u5728\u4e0d\u65ad\u7684\u6539\u53d8\u72b6\u6001\uff0c\u6240\u8c13\u7684\u201c\u6d3b\u201d\uff0c\u800c\u5904\u4e8e\u6b7b\u9501\u7684\u5b9e\u4f53\u8868\u73b0\u4e3a\u7b49\u5f85\uff0c\u6d3b\u9501\u6709\u53ef\u80fd\u81ea\u884c\u89e3\u5f00\uff0c\u6b7b\u9501\u5219\u4e0d\u80fd")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "bytes"\n    "fmt"\n    "runtime"\n    "sync"\n    "sync/atomic"\n    "time"\n)\n\nfunc main() {\n    runtime.GOMAXPROCS(3)\n    cv := sync.NewCond(&sync.Mutex{})\n    go func() {\n        for range time.Tick(1 * time.Second) { // \u901a\u8fc7tick\u63a7\u5236\u4e24\u4e2a\u4eba\u7684\u6b65\u8c03\n            cv.Broadcast()\n        }\n    }()\n    takeStep := func() {\n        cv.L.Lock()\n        cv.Wait()\n        cv.L.Unlock()\n    }\n    tryDir := func(dirName string, dir *int32, out *bytes.Buffer) bool {\n        fmt.Fprintf(out, " %+v", dirName)\n        atomic.AddInt32(dir, 1)\n        takeStep()                      //\u8d70\u4e0a\u4e00\u6b65\n        if atomic.LoadInt32(dir) == 1 { //\u8d70\u6210\u529f\u5c31\u8fd4\u56de\n            fmt.Fprint(out, ". Success!")\n            return true\n        }\n        takeStep() // \u6ca1\u8d70\u6210\u529f\uff0c\u518d\u8d70\u56de\u6765\n        atomic.AddInt32(dir, -1)\n        return false\n    }\n    var left, right int32\n    tryLeft := func(out *bytes.Buffer) bool {\n        return tryDir("\u5411\u5de6\u8d70", &left, out)\n    }\n    tryRight := func(out *bytes.Buffer) bool {\n        return tryDir("\u5411\u53f3\u8d70", &right, out)\n    }\n    walk := func(walking *sync.WaitGroup, name string) {\n        var out bytes.Buffer\n        defer walking.Done()\n        defer func() { fmt.Println(out.String()) }()\n        fmt.Fprintf(&out, "%v is trying to scoot:", name)\n        for i := 0; i < 5; i++ {\n            if tryLeft(&out) || tryRight(&out) {\n                return\n            }\n        }\n        fmt.Fprintf(&out, "\\n%v is tried!", name)\n    }\n    var trail sync.WaitGroup\n    trail.Add(2)\n    go walk(&trail, "\u7537\u4eba") // \u7537\u4eba\u5728\u8def\u4e0a\u8d70\n    go walk(&trail, "\u5973\u4eba") // \u5973\u4eba\u5728\u8def\u4e0a\u8d70\n    trail.Wait()\n}\n\n// \u5973\u4eba is trying to scoot: \u5411\u5de6\u8d70 \u5411\u53f3\u8d70 \u5411\u5de6\u8d70 \u5411\u53f3\u8d70 \u5411\u5de6\u8d70 \u5411\u53f3\u8d70 \u5411\u5de6\u8d70 \u5411\u53f3\u8d70 \u5411\u5de6\u8d70 \u5411\u53f3\u8d70\n// \u5973\u4eba is tried!\n// \u7537\u4eba is trying to scoot: \u5411\u5de6\u8d70 \u5411\u53f3\u8d70 \u5411\u5de6\u8d70 \u5411\u53f3\u8d70 \u5411\u5de6\u8d70 \u5411\u53f3\u8d70 \u5411\u5de6\u8d70 \u5411\u53f3\u8d70 \u5411\u5de6\u8d70 \u5411\u53f3\u8d70\n// \u7537\u4eba is tried!\n')),(0,r.kt)("h2",{id:"\u4e03\u9965\u997f"},"\u4e03\u3001\u9965\u997f"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u9965\u997f\u662f\u6307\u4e00\u4e2a\u53ef\u8fd0\u884c\u7684\u8fdb\u7a0b\u5c3d\u7ba1\u80fd\u7ee7\u7eed\u6267\u884c\uff0c\u4f46\u88ab\u8c03\u5ea6\u5668\u65e0\u9650\u671f\u5730\u5ffd\u89c6\uff0c\u800c\u4e0d\u80fd\u88ab\u8c03\u5ea6\u6267\u884c\u7684\u60c5\u51b5")),(0,r.kt)("p",null,"\u4e0e\u6b7b\u9501\u4e0d\u540c\u7684\u662f\uff0c\u9965\u997f\u9501\u5728\u4e00\u6bb5\u65f6\u95f4\u5185\uff0c\u4f18\u5148\u7ea7\u4f4e\u7684\u7ebf\u7a0b\u6700\u7ec8\u8fd8\u662f\u4f1a\u6267\u884c\u7684\uff0c\u6bd4\u5982\u9ad8\u4f18\u5148\u7ea7\u7684\u7ebf\u7a0b\u6267\u884c\u5b8c\u4e4b\u540e\u91ca\u653e\u4e86\u8d44\u6e90\u3002"),(0,r.kt)("p",null,"\u6d3b\u9501\u4e0e\u9965\u997f\u662f\u65e0\u5173\u7684\uff0c\u56e0\u4e3a\u5728\u6d3b\u9501\u4e2d\uff0c\u6240\u6709\u5e76\u53d1\u8fdb\u7a0b\u90fd\u662f\u76f8\u540c\u7684\uff0c\u5e76\u4e14\u6ca1\u6709\u5b8c\u6210\u5de5\u4f5c\u3002\u66f4\u5e7f\u6cdb\u5730\u8bf4\uff0c\u9965\u997f\u901a\u5e38\u610f\u5473\u7740\u6709\u4e00\u4e2a\u6216\u591a\u4e2a\u8d2a\u5a6a\u7684\u5e76\u53d1\u8fdb\u7a0b\uff0c\u5b83\u4eec\u4e0d\u516c\u5e73\u5730\u963b\u6b62\u4e00\u4e2a\u6216\u591a\u4e2a\u5e76\u53d1\u8fdb\u7a0b\uff0c\u4ee5\u5c3d\u53ef\u80fd\u6709\u6548\u5730\u5b8c\u6210\u5de5\u4f5c\uff0c\u6216\u8005\u963b\u6b62\u5168\u90e8\u5e76\u53d1\u8fdb\u7a0b\u3002"),(0,r.kt)("h3",{id:"1\u9965\u997f\u793a\u4f8b"},"1\u3001\u9965\u997f\u793a\u4f8b"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u793a\u4f8b\u7a0b\u5e8f\u4e2d\u5305\u542b\u4e86\u4e00\u4e2a\u8d2a\u5a6a\u7684 goroutine \u548c\u4e00\u4e2a\u5e73\u548c\u7684 goroutine"),(0,r.kt)("p",null,"\u8d2a\u5a6a\u7684 worker \u4f1a\u8d2a\u5a6a\u5730\u62a2\u5360\u5171\u4eab\u9501\uff0c\u4ee5\u5b8c\u6210\u6574\u4e2a\u5de5\u4f5c\u5faa\u73af\uff0c\u800c\u5e73\u548c\u7684 worker \u5219\u8bd5\u56fe\u53ea\u5728\u9700\u8981\u65f6\u9501\u5b9a\u3002\u4e24\u79cd worker \u90fd\u505a\u540c\u6837\u591a\u7684\u6a21\u62df\u5de5\u4f5c\uff08sleeping \u65f6\u95f4\u4e3a 3ns\uff09\uff0c\u53ef\u4ee5\u770b\u5230\uff0c\u5728\u540c\u6837\u7684\u65f6\u95f4\u91cc\uff0c\u8d2a\u5a6a\u7684 worker \u5de5\u4f5c\u91cf\u51e0\u4e4e\u662f\u5e73\u548c\u7684 worker \u5de5\u4f5c\u91cf\u7684\u4e24\u500d\uff01"),(0,r.kt)("p",null,"\u5047\u8bbe\u4e24\u79cd worker \u90fd\u6709\u540c\u6837\u5927\u5c0f\u7684\u4e34\u754c\u533a\uff0c\u800c\u4e0d\u662f\u8ba4\u4e3a\u8d2a\u5a6a\u7684 worker \u7684\u7b97\u6cd5\u66f4\u6709\u6548\uff08\u6216\u8c03\u7528 Lock \u548c Unlock \u7684\u65f6\u5019\uff0c\u5b83\u4eec\u4e5f\u4e0d\u662f\u7f13\u6162\u7684\uff09\uff0c\u6211\u4eec\u5f97\u51fa\u8fd9\u6837\u7684\u7ed3\u8bba\uff0c\u8d2a\u5a6a\u7684 worker \u4e0d\u5fc5\u8981\u5730\u6269\u5927\u5176\u6301\u6709\u5171\u4eab\u9501\u4e0a\u7684\u4e34\u754c\u533a\uff0c\u4e95\u963b\u6b62\uff08\u901a\u8fc7\u9965\u997f\uff09\u5e73\u548c\u7684 worker \u7684 goroutine \u9ad8\u6548\u5de5\u4f5c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "runtime"\n    "sync"\n    "time"\n)\n\nfunc main() {\n    runtime.GOMAXPROCS(3)\n    var wg sync.WaitGroup\n    const runtime = 1 * time.Second\n    var sharedLock sync.Mutex\n    greedyWorker := func() {\n        defer wg.Done()\n        var count int\n        for begin := time.Now(); time.Since(begin) <= runtime; {\n            sharedLock.Lock()\n            time.Sleep(3 * time.Nanosecond)\n            sharedLock.Unlock()\n            count++\n        }\n        fmt.Printf("Greedy worker was able to execute %v work loops\\n", count)\n    }\n    politeWorker := func() {\n        defer wg.Done()\n        var count int\n        for begin := time.Now(); time.Since(begin) <= runtime; {\n            sharedLock.Lock()\n            time.Sleep(1 * time.Nanosecond)\n            sharedLock.Unlock()\n            sharedLock.Lock()\n            time.Sleep(1 * time.Nanosecond)\n            sharedLock.Unlock()\n            sharedLock.Lock()\n            time.Sleep(1 * time.Nanosecond)\n            sharedLock.Unlock()\n            count++\n        }\n        fmt.Printf("Polite worker was able to execute %v work loops\\n", count)\n    }\n    wg.Add(2)\n    go greedyWorker()\n    go politeWorker()\n    wg.Wait()\n}\n// Polite worker was able to execute 304329 work loops\n// Greedy worker was able to execute 531054 work loops\n')))}k.isMDXComponent=!0}}]);