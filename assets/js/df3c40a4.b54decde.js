"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[93355],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=a.createContext({}),o=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=o(e.components);return a.createElement(u.Provider,{value:n},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=o(t),h=l,d=m["".concat(u,".").concat(h)]||m[h]||k[h]||r;return t?a.createElement(d,p(p({ref:n},s),{},{components:t})):a.createElement(d,p({ref:n},s))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,p=new Array(r);p[0]=h;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[m]="string"==typeof e?e:l,p[1]=i;for(var o=2;o<r;o++)p[o]=t[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},21657:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var a=t(87462),l=(t(67294),t(3905));const r={},p="\u5806&\u4f18\u5148\u961f\u5217",i={unversionedId:"Algorithm/\u6570\u636e\u7ed3\u6784/\u5806",id:"Algorithm/\u6570\u636e\u7ed3\u6784/\u5806",title:"\u5806&\u4f18\u5148\u961f\u5217",description:"\u53c2\u8003\uff1ahttps://oi-wiki.org/ds/heap/",source:"@site/docs/Algorithm/1-\u6570\u636e\u7ed3\u6784/7-\u5806.md",sourceDirName:"Algorithm/1-\u6570\u636e\u7ed3\u6784",slug:"/Algorithm/\u6570\u636e\u7ed3\u6784/\u5806",permalink:"/docs/Algorithm/\u6570\u636e\u7ed3\u6784/\u5806",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"docsSidebar",previous:{title:"\u6563\u5217\u8868",permalink:"/docs/Algorithm/\u6570\u636e\u7ed3\u6784/\u6563\u5217\u8868"},next:{title:"5-1-\u6811\u548c\u4e8c\u53c9\u6811",permalink:"/docs/Algorithm/\u6570\u636e\u7ed3\u6784/5-1-\u6811\u548c\u4e8c\u53c9\u6811"}},u={},o=[{value:"\u4e00\u3001\u6982\u5ff5",id:"\u4e00\u6982\u5ff5",level:2},{value:"\u5206\u7c7b",id:"\u5206\u7c7b",level:3},{value:"\u4e8c\u3001\u5e94\u7528\u573a\u666f",id:"\u4e8c\u5e94\u7528\u573a\u666f",level:2},{value:"\u573a\u666f\u4e00\uff1a\u57fa\u7840\u7528\u6cd5",id:"\u573a\u666f\u4e00\u57fa\u7840\u7528\u6cd5",level:3},{value:"\u573a\u666f\u4e8c\uff1a\u4e2d\u95f4\u5143\u7d20",id:"\u573a\u666f\u4e8c\u4e2d\u95f4\u5143\u7d20",level:3},{value:"\u573a\u666f\u4e09\uff1aTopK\uff08\u91cd\u8981\uff09",id:"\u573a\u666f\u4e09topk\u91cd\u8981",level:3},{value:"\u5199\u6cd5\u4e00",id:"\u5199\u6cd5\u4e00",level:4},{value:"\u5199\u6cd5\u4e8c",id:"\u5199\u6cd5\u4e8c",level:4},{value:"\u573a\u666f\u56db\uff1a\u591a\u8def\u5f52\u5e76\uff08\u91cd\u8981\uff09",id:"\u573a\u666f\u56db\u591a\u8def\u5f52\u5e76\u91cd\u8981",level:3},{value:"\u573a\u666f\u56db\uff1a\u61d2\u5220\u9664\u5806",id:"\u573a\u666f\u56db\u61d2\u5220\u9664\u5806",level:3},{value:"\u573a\u666f\u4e94\uff1a\u8d2a\u5fc3\u95ee\u9898",id:"\u573a\u666f\u4e94\u8d2a\u5fc3\u95ee\u9898",level:3},{value:"\u4e09\u3001C++ \u7528\u6cd5",id:"\u4e09c-\u7528\u6cd5",level:2},{value:"1\u3001\u521b\u5efa\u3001\u8bbf\u95ee\u3001\u5220\u9664",id:"1\u521b\u5efa\u8bbf\u95ee\u5220\u9664",level:3},{value:"2\u3001\u5b9e\u73b0\u5c0f\u6839\u5806",id:"2\u5b9e\u73b0\u5c0f\u6839\u5806",level:3},{value:"3\u3001\u5806\u4e2d\u7684\u5143\u7d20\u662f\u5bf9\u8c61\uff0c\u591a\u7ea7\u6bd4\u8f83",id:"3\u5806\u4e2d\u7684\u5143\u7d20\u662f\u5bf9\u8c61\u591a\u7ea7\u6bd4\u8f83",level:3},{value:"4\u3001\u6307\u5b9a\u5e95\u5c42\u5bb9\u5668",id:"4\u6307\u5b9a\u5e95\u5c42\u5bb9\u5668",level:3},{value:"\u56db\u3001Python \u7528\u6cd5",id:"\u56dbpython-\u7528\u6cd5",level:2},{value:"1\u3001\u521b\u5efa\u3001\u8bbf\u95ee\u3001\u5220\u9664",id:"1\u521b\u5efa\u8bbf\u95ee\u5220\u9664-1",level:3},{value:"2\u3001\u5b9e\u73b0\u5927\u6839\u5806",id:"2\u5b9e\u73b0\u5927\u6839\u5806",level:3},{value:"3\u3001\u5e26\u6743\u503c\u7684\u4f18\u5148\u961f\u5217\uff0c\u591a\u7ea7\u6bd4\u8f83",id:"3\u5e26\u6743\u503c\u7684\u4f18\u5148\u961f\u5217\u591a\u7ea7\u6bd4\u8f83",level:3},{value:"4\u3001\u5806\u4e2d\u7684\u5143\u7d20\u662f\u5bf9\u8c61",id:"4\u5806\u4e2d\u7684\u5143\u7d20\u662f\u5bf9\u8c61",level:3},{value:"5\u3001\u5c01\u88c5\u7528\u6cd5",id:"5\u5c01\u88c5\u7528\u6cd5",level:3},{value:"6\u3001\u67d0\u79cd\u610f\u4e49\u4e0a\u7684\u5408\u5e76",id:"6\u67d0\u79cd\u610f\u4e49\u4e0a\u7684\u5408\u5e76",level:3}],s={toc:o};function m(e){let{components:n,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5806\u4f18\u5148\u961f\u5217"},"\u5806&\u4f18\u5148\u961f\u5217"),(0,l.kt)("p",null,"\u53c2\u8003\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://oi-wiki.org/ds/heap/"},"https://oi-wiki.org/ds/heap/")),(0,l.kt)("h2",{id:"\u4e00\u6982\u5ff5"},"\u4e00\u3001\u6982\u5ff5"),(0,l.kt)("p",null,"\u5806\u662f\u4e00\u68f5\u6811\uff08\u4e8c\u53c9\u5806\uff09\uff0c\u5176\u6bcf\u4e2a\u8282\u70b9\u90fd\u6709\u4e00\u4e2a\u952e\u503c\uff0c\u4e14\u6bcf\u4e2a\u8282\u70b9\u7684\u952e\u503c\u90fd\u5927\u4e8e\u7b49\u4e8e/\u5c0f\u4e8e\u7b49\u4e8e\u5176\u7236\u4eb2\u7684\u952e\u503c\u3002"),(0,l.kt)("p",null,"\u6bcf\u4e2a\u8282\u70b9\u7684\u952e\u503c\u90fd\u5927\u4e8e\u7b49\u4e8e\u5176\u7236\u4eb2\u952e\u503c\u7684\u5806\u53eb\u505a\u5c0f\u6839\u5806\uff0c\u5426\u5219\u53eb\u505a\u5927\u6839\u5806\u3002"),(0,l.kt)("p",null,"\u4e00\u4e9b\u529f\u80fd\u5f3a\u5927\u7684\u5806\uff08\u53ef\u5e76\u5806\uff09\u8fd8\u80fd\uff08\u9ad8\u6548\u5730\uff09\u652f\u6301 merge \u7b49\u64cd\u4f5c\u3002\u652f\u6301\u53ef\u6301\u4e45\u5316\uff0c\u4e5f\u5c31\u662f\u5bf9\u4efb\u610f\u5386\u53f2\u7248\u672c\u8fdb\u884c\u67e5\u8be2\u6216\u8005\u64cd\u4f5c\uff0c\u4ea7\u751f\u65b0\u7684\u7248\u672c\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7f3a\u70b9\u662f\u4e0d\u652f\u6301\u5220\u9664\u4efb\u610f\u4e00\u4e2a\u503c")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\uff08\u5c0f\u6839\uff09\u5806\u4e3b\u8981\u652f\u6301\u7684\u64cd\u4f5c\u53ca\u65f6\u95f4\u590d\u6742\u5ea6\uff1a")),(0,l.kt)("p",null,"\u63d2\u5165\u4e00\u4e2a\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"O(log n)")),(0,l.kt)("p",null,"\u67e5\u8be2\u6700\u5c0f\u503c ",(0,l.kt)("inlineCode",{parentName:"p"},"O(1)")),(0,l.kt)("p",null,"\u5220\u9664\u6700\u5c0f\u503c ",(0,l.kt)("inlineCode",{parentName:"p"},"O(log n)")),(0,l.kt)("p",null,"\u5408\u5e76\u4e24\u4e2a\u5806 ",(0,l.kt)("inlineCode",{parentName:"p"},"O(n)")),(0,l.kt)("p",null,"\u51cf\u5c0f\u4e00\u4e2a\u5143\u7d20\u7684\u503c ",(0,l.kt)("inlineCode",{parentName:"p"},"O(log n)")),(0,l.kt)("h3",{id:"\u5206\u7c7b"},"\u5206\u7c7b"),(0,l.kt)("p",null,"\u4e60\u60ef\u4e0a\uff0c\u4e0d\u52a0\u9650\u5b9a\u63d0\u5230\u201c\u5806\u201d\u65f6\u5f80\u5f80\u90fd\u6307\u4e8c\u53c9\u5806\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u64cd\u4f5c\\\u6570\u636e\u7ed3\u6784"),(0,l.kt)("th",{parentName:"tr",align:null},"\u914d\u5bf9\u5806"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4e8c\u53c9\u5806"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5de6\u504f\u6811"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4e8c\u9879\u5806"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6590\u6ce2\u90a3\u5951\u5806"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u63d2\u5165\uff08insert\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"O(1)"),(0,l.kt)("td",{parentName:"tr",align:null},"O(log n)"),(0,l.kt)("td",{parentName:"tr",align:null},"O(log n)"),(0,l.kt)("td",{parentName:"tr",align:null},"O(1)"),(0,l.kt)("td",{parentName:"tr",align:null},"O(1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u67e5\u8be2\u6700\u5c0f\u503c\uff08find-min\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"O(1)"),(0,l.kt)("td",{parentName:"tr",align:null},"O(1)"),(0,l.kt)("td",{parentName:"tr",align:null},"O(1)"),(0,l.kt)("td",{parentName:"tr",align:null},"O(log n)"),(0,l.kt)("td",{parentName:"tr",align:null},"O(1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5220\u9664\u6700\u5c0f\u503c\uff08delete-min\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"O(log n)"),(0,l.kt)("td",{parentName:"tr",align:null},"O(log n)"),(0,l.kt)("td",{parentName:"tr",align:null},"O(log n)"),(0,l.kt)("td",{parentName:"tr",align:null},"O(log n)"),(0,l.kt)("td",{parentName:"tr",align:null},"O(log n)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5408\u5e76 (merge)"),(0,l.kt)("td",{parentName:"tr",align:null},"O(1)"),(0,l.kt)("td",{parentName:"tr",align:null},"O(n)"),(0,l.kt)("td",{parentName:"tr",align:null},"O(log n)"),(0,l.kt)("td",{parentName:"tr",align:null},"O(log n)"),(0,l.kt)("td",{parentName:"tr",align:null},"O(1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u51cf\u5c0f\u4e00\u4e2a\u5143\u7d20\u7684\u503c (decrease-key)"),(0,l.kt)("td",{parentName:"tr",align:null},"O(log n)"),(0,l.kt)("td",{parentName:"tr",align:null},"O(log n)"),(0,l.kt)("td",{parentName:"tr",align:null},"O(log n)"),(0,l.kt)("td",{parentName:"tr",align:null},"O(log n)"),(0,l.kt)("td",{parentName:"tr",align:null},"O(1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u652f\u6301\u53ef\u6301\u4e45\u5316"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,l.kt)("h2",{id:"\u4e8c\u5e94\u7528\u573a\u666f"},"\u4e8c\u3001\u5e94\u7528\u573a\u666f"),(0,l.kt)("h3",{id:"\u573a\u666f\u4e00\u57fa\u7840\u7528\u6cd5"},"\u573a\u666f\u4e00\uff1a\u57fa\u7840\u7528\u6cd5"),(0,l.kt)("p",null,"\u6dfb\u52a0\u503c\u7684\u65f6\u5019\u65f6\u95f4\u590d\u6742\u5ea6\u505a\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"O(log(n)) "),"  \uff0c\u53d6\u503c\u7684\u65f6\u5019\u505a\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"O(1)"),"\uff0c\u5220\u503c\u7684\u65f6\u5019\u505a\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"O(log n)")),(0,l.kt)("h3",{id:"\u573a\u666f\u4e8c\u4e2d\u95f4\u5143\u7d20"},"\u573a\u666f\u4e8c\uff1a\u4e2d\u95f4\u5143\u7d20"),(0,l.kt)("p",null,"\u5806\u4ec5\u65b9\u4fbf\u64cd\u4f5c\u5806\u9876\u7684\u503c\uff0c\u600e\u6837\u80fd\u8ba9\u5806\u4e5f\u65b9\u4fbf\u7684\u64cd\u4f5c\u4e2d\u95f4\u67d0\u4e2a\u5143\u7d20\u5462\uff0c\u901a\u8fc7\u7ef4\u62a4\u4e24\u4e2a\u5806\uff08\u5927\u3001\u5c0f\u6839\u5806\uff09\u7684\u5927\u5c0f\u3002\u4e00\u822c\u6765\u8bf4\uff0c\u4e00\u4e2a\u7531\u5c0f\u5230\u5927\u7684\u5e8f\u5217\uff0c\u5de6\u8fb9\u7ef4\u62a4\u6210\u5927\u6839\u5806\uff0c\u53f3\u8fb9\u7ef4\u62a4\u6210\u5c0f\u6839\u5806\uff0c\u4e5f\u5c31\u662f\u5927\u6839\u5806\u7684\u6700\u5927\u503c <= \u5c0f\u6839\u5806\u7684\u6700\u5c0f\u503c"),(0,l.kt)("p",null,(0,l.kt)("img",{src:t(85564).Z,width:"1386",height:"406"})),(0,l.kt)("h3",{id:"\u573a\u666f\u4e09topk\u91cd\u8981"},"\u573a\u666f\u4e09\uff1aTopK\uff08\u91cd\u8981\uff09"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63a7\u5236\u5806\u7684\u5927\u5c0f\u4e3ak\uff0c\u53ef\u4ee5\u964d\u4f4e\u65f6\u95f4\u590d\u6742\u5ea6\u548c\u7a7a\u95f4\u590d\u6742\u5ea6")),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u627e\u7b2c k \u300c\u5927\u300d\u7684\u5143\u7d20"),(0,l.kt)("h4",{id:"\u5199\u6cd5\u4e00"},"\u5199\u6cd5\u4e00"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5143\u7d20\u5148\u5165\u5806"),(0,l.kt)("li",{parentName:"ul"},"\u518d\u68c0\u67e5\u5806\u4e2d\u5143\u7d20\u7684\u6570\u91cf\u662f\u5426 > k\uff0c\u662f\u7684\u8bdd\u79fb\u9664\u5806\u9876"),(0,l.kt)("li",{parentName:"ul"},"\u904d\u5386\u5b8c\u540e\uff0c\u5806\u9876\u5c31\u662f\u7b54\u6848")),(0,l.kt)("h4",{id:"\u5199\u6cd5\u4e8c"},"\u5199\u6cd5\u4e8c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7ef4\u6301\u300c\u5c0f\u6839\u5806\u300d\u5185\u7684\u5143\u7d20\u4e2a\u6570\u4e3a k \u4e2a"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u5143\u7d20\u300c\u6bd4\u5806\u9876\u5143\u7d20\u5927\u300d\uff0c\u79fb\u9664\u5806\u9876\uff0c\u7136\u540e\u5165\u5806"),(0,l.kt)("li",{parentName:"ul"},"\u904d\u5386\u5b8c\u540e\uff0c\u5806\u9876\u5c31\u662f\u7b54\u6848")),(0,l.kt)("p",null,"\u65f6\u95f4\u590d\u6742\u5ea6\uff1aO(nlogk)"),(0,l.kt)("p",null,"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1aO(k)"),(0,l.kt)("p",null,"\u5f53 k \u8fdc\u5c0f\u4e8e n\uff0c\u65f6\u95f4\u590d\u6742\u5ea6 O(nlogk) \u8d8b\u8fd1\u4e8e O(n)\uff0c\u800c\u7a7a\u95f4\u590d\u6742\u5ea6 O(k) \u5219\u8fd1\u4f3c\u4e8e O(1)"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"\u4f46\u662f\u5bf9\u4e8e TopK \u95ee\u9898\uff0c\u6709\u591a\u79cd\u89e3\u6cd5\uff0c\u4e0d\u4e00\u5b9a\u8981\u7528\u5806"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/zui-xiao-de-kge-shu-lcof/solution/3chong-jie-fa-miao-sha-topkkuai-pai-dui-er-cha-sou/"},"4\u79cd\u89e3\u6cd5\u79d2\u6740TopK\uff08\u5feb\u6392/\u5806/\u4e8c\u53c9\u641c\u7d22\u6811/\u8ba1\u6570\u6392\u5e8f\uff09")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7528\u5feb\u6392\u6700\u6700\u6700\u9ad8\u6548\u89e3\u51b3 TopK \u95ee\u9898\uff1aO(N)"),(0,l.kt)("li",{parentName:"ul"},"\u4e8c\u53c9\u641c\u7d22\u6811\u4e5f\u53ef\u4ee5 \u89e3\u51b3 TopK \u95ee\u9898\u54e6\uff1aO(N logK)"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u8303\u56f4\u6709\u9650\u65f6\u76f4\u63a5\u8ba1\u6570\u6392\u5e8f\u5c31\u884c\u4e86\uff1aO(N)")),(0,l.kt)("h3",{id:"\u573a\u666f\u56db\u591a\u8def\u5f52\u5e76\u91cd\u8981"},"\u573a\u666f\u56db\uff1a\u591a\u8def\u5f52\u5e76\uff08\u91cd\u8981\uff09"),(0,l.kt)("p",null,"\u4f7f\u7528\u6761\u4ef6\uff1a\u7ed9\u4f60\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"n x n")," \u77e9\u9635 ",(0,l.kt)("inlineCode",{parentName:"p"},"matrix")," \uff0c",(0,l.kt)("strong",{parentName:"p"},"\u5176\u4e2d\u6bcf\u884c\u548c\u6bcf\u5217\u5143\u7d20\u5747\u6309\u5347\u5e8f\u6392\u5e8f"),"\uff0c\u627e\u5230\u77e9\u9635\u4e2d\u7b2c ",(0,l.kt)("inlineCode",{parentName:"p"},"k")," \u5c0f\u7684\u5143\u7d20\u3002"),(0,l.kt)("p",null,"\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," 1, 5, 9\n10,11,13\n12,13,15\n")),(0,l.kt)("p",null,"\u6700\u5173\u952e\u601d\u8def\uff1a",(0,l.kt)("strong",{parentName:"p"},"\u5728\u6574\u4e2a\u77e9\u9635\u4e2d\uff0c\u6bcf\u6b21\u5f39\u51fa\u77e9\u9635\u4e2d\u6700\u5c0f\u7684\u503c\uff0c\u7b2ck\u4e2a\u88ab\u5f39\u51fa\u7684\u5c31\u662f\u6211\u4eec\u9700\u8981\u7684\u6570\u5b57")),(0,l.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u7684\u76ee\u7684\u5f88\u660e\u786e\uff1a\u6bcf\u6b21\u5f39\u51fa\u77e9\u9635\u4e2d\u6700\u5c0f\u7684\u503c\u3002"),(0,l.kt)("p",null,"\u5f53\u6211\u4eec\u770b\u5230\u8fd9\u4e2a\u6709\u5e8f\u77e9\u9635\u65f6\uff0c\u6211\u4eec\u77e5\u9053\u5de6\u4e0a\u89d2\u7684\u6570\u5b57\u662f\u6574\u4e2a\u77e9\u9635\u6700\u5c0f\u7684\uff0c"),(0,l.kt)("p",null,"\u4f46\u5f39\u51fa\u5b83\u540e\u6211\u4eec\u5982\u4f55\u4fdd\u8bc1\u63a5\u4e0b\u6765\u6bcf\u4e00\u6b21\u90fd\u8fd8\u80fd\u627e\u5230\u5168\u77e9\u9635\u6700\u5c0f\u7684\u503c\u5462\uff1f"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5176\u5b9e\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u7684\u5173\u952e\uff0c\u5728\u4e8e\u7ef4\u62a4\u4e00\u7ec4\u201c\u6700\u5c0f\u503c\u5019\u9009\u4eba\u201d\uff1a")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f60\u9700\u8981\u4fdd\u8bc1\u6700\u5c0f\u503c\u5fc5\u7136\u4ece\u8fd9\u7ec4\u5019\u9009\u4eba\u4e2d\u4ea7\u751f\uff0c\u4e8e\u662f\u6bcf\u6b21\u53ea\u8981\u4ece\u5019\u9009\u4eba\u4e2d\u5f39\u51fa\u6700\u5c0f\u7684\u4e00\u4e2a\u5373\u53ef"),"\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u6765\u9009\u62e9\u7b2c\u4e00\u7ec4\u5019\u9009\u4eba\uff0c\u5728\u8fd9\u91cc\u53ef\u4ee5\u9009\u62e9\u7b2c\u4e00\u5217\uff0c\u56e0\u4e3a\u6bcf\u4e00\u4e2a\u6570\u5b57\u90fd\u662f\u5176\u5bf9\u5e94\u884c\u7684\u6700\u5c0f\u503c\uff0c\u5168\u5c40\u6700\u5c0f\u503c\u4e5f\u5fc5\u7136\u5728\u5176\u4e2d\u3002"),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7b56\u7565")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u58f0\u660e\u5c0f\u6839\u5806\uff0c\u81ea\u5b9a\u4e49\u6392\u5e8f\u89c4\u5219"),(0,l.kt)("li",{parentName:"ul"},"\u8d77\u59cb\uff0c\u5c06\u8fd9 n \u4e2a\u5e8f\u5217\u7684\u9996\u4f4d\u5143\u7d20\u4ee5\u4e8c\u5143\u7ec4 (r, c) \u653e\u5165\u5c0f\u6839\u5806\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u6bcf\u4e00\u884c\u4e3a\u4e00\u6761\u8def\uff0c\u73b0\u5c06\u5404\u6761\u8def\u7684\u8d77\u70b9\u5165\u5806\uff0c(r, c)\u4ee3\u8868\u4e86\u6bcf\u6761\u8def\u7684\u4e0b\u6807\u6307\u9488"),(0,l.kt)("li",{parentName:"ul"},"\u5faa\u73af\u53d6\u5c0f\u6839\u5806\u300c\u5806\u9876\u300d\uff0c\u7136\u540e\u79fb\u9664\u3002\u5982\u679c\u53d6\u7684\u90a3\u6761\u8def\u8fd8\u6709\u4e0b\u4e00\u4e2a\u8282\u70b9\uff0c\u5c06\u5176\u653e\u5165\u5c0f\u6839\u5806\u91cc")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7ec6\u8282")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5c0f\u6839\u5806\u7684\u5927\u5c0f\u5e94\u4e3a\uff0cmin(\u884c\u6570, k)")),(0,l.kt)("p",null,"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a\u4ee4 M \u4e3a n\u3001m \u548c k \u4e09\u8005\u4e2d\u7684\u6700\u5c0f\u503c\uff0c\u590d\u6742\u5ea6\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"O(M+k)\u2217logM)")),(0,l.kt)("p",null,"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"O(M)")),(0,l.kt)("h3",{id:"\u573a\u666f\u56db\u61d2\u5220\u9664\u5806"},"\u573a\u666f\u56db\uff1a\u61d2\u5220\u9664\u5806"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u65e0\u7528\u7684\u5143\u7d20\u4e0d\u7740\u6025\u4ece\u5806\u4e2d\u5220\u9664")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5f53\u9700\u8981\u9009\u53d6\u7b54\u6848\u7684\u65f6\u5019\uff0c\u53d6\u5806\u9876\u5143\u7d20\uff0c\u5224\u65ad\u5806\u9876\u5143\u7d20\u662f\u5426\u662f\u6709\u6548\u7684"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u65e0\u6548\u7684\u8bdd\uff0c\u79fb\u9664\u5806\u9876\uff0c\u8fdb\u884c\u4e0b\u4e2a\u5143\u7d20\u7684\u5224\u65ad"),(0,l.kt)("li",{parentName:"ul"},"\u6709\u6548\u7684\u8bdd\uff0c\u9009\u53d6\u8be5\u5806\u9876\u4f5c\u4e3a\u7b54\u6848")))),(0,l.kt)("p",null,"\u5e38\u7528\u4e8e\u6ed1\u52a8\u7a97\u53e3\uff0c\u5982\uff1a239\u9898"),(0,l.kt)("h3",{id:"\u573a\u666f\u4e94\u8d2a\u5fc3\u95ee\u9898"},"\u573a\u666f\u4e94\uff1a\u8d2a\u5fc3\u95ee\u9898"),(0,l.kt)("p",null,"\u4f8b\u5982 1005\u30011405\u30011705"),(0,l.kt)("p",null,"\u6ce8\u610f\uff1a",(0,l.kt)("strong",{parentName:"p"},"\u4ece\u4f18\u5148\u961f\u5217\u4e2d\u53d6\u51fa\u6570\u636e\uff0c\u7528\u5b8c\u540e\uff0c\u8981\u8fd8\u56de\u53bb")),(0,l.kt)("h2",{id:"\u4e09c-\u7528\u6cd5"},"\u4e09\u3001C++ \u7528\u6cd5"),(0,l.kt)("p",null,"\u53c2\u8003\uff1aSkill/C++/3-\u6807\u51c6\u6a21\u677f\u5e93/12-priority_queue.md"),(0,l.kt)("h3",{id:"1\u521b\u5efa\u8bbf\u95ee\u5220\u9664"},"1\u3001\u521b\u5efa\u3001\u8bbf\u95ee\u3001\u5220\u9664"),(0,l.kt)("p",null,"priority_queue \u9ed8\u8ba4\u521b\u5efa\u7684\u662f\u300c\u5927\u6839\u5806\u300d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c++"},'#include <iostream>\n#include <queue>\n#include <vector>\nusing namespace std;\n\nvoid show(priority_queue<int> q) {\n    while (!q.empty()) {\n        cout << q.top() << " ";  // \u53d6\u6808\u9876\n        q.pop();                 // \u79fb\u9664\u6808\u9876\n    }\n    cout << endl;\n}\n\nint main() {\n    vector<int> vec = {3, 2, 5, 4, 2, 1};\n\n    // \u4e00\u4e2a\u4e2a\u5f80\u5806\u91cc\u6dfb\u52a0\n    priority_queue<int> q1;\n    for (int i = 0; i < vec.size(); i++) {\n        q1.push(vec[i]);\n    }\n    show(q1);  // 5 4 3 2 2 1\n\n    // \u6574\u4e2a\u6dfb\u52a0\n    priority_queue<int> q2(vec.begin(), vec.end());\n    show(q2);  // 5 4 3 2 2 1\n}\n')),(0,l.kt)("h3",{id:"2\u5b9e\u73b0\u5c0f\u6839\u5806"},"2\u3001\u5b9e\u73b0\u5c0f\u6839\u5806"),(0,l.kt)("p",null,"\u58f0\u660e\u65f6\uff0c\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"greater<int>")," \u4f5c\u4e3a\u6392\u5e8f\u89c4\u5219\uff0c\u5b9e\u73b0\u5c0f\u6839\u5806"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"less<int>")," \u4f5c\u4e3a\u6392\u5e8f\u89c4\u5219\uff0c\u5b9e\u73b0\u5927\u6839\u5806"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c++"},'#include <iostream>\n#include <queue>\n#include <vector>\nusing namespace std;\n\nvoid show(priority_queue<int, deque<int>, greater<int>> q) {\n    while (!q.empty()) {\n        cout << q.top() << " ";\n        q.pop();\n    }\n    cout << endl;\n}\n\nint main() {\n    vector<int> vec = {3, 2, 5, 4, 2, 1};\n\n    // \u6570\u636e\u7c7b\u578b\uff0c\u5e95\u5c42\u5bb9\u5668\uff0c\u6392\u5e8f\u89c4\u5219\u5fc5\u987b\u540c\u65f6\u6307\u5b9a\n    priority_queue<int, deque<int>, greater<int>> q(vec.begin(), vec.end());\n    show(q);  // 1 2 2 3 4 5\n}\n')),(0,l.kt)("p",null,"\u8fd9\u79cd\u5199\u6cd5\u53ef\u4ee5\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u5728\u81ea\u5b9a\u4e49\u7684\u6bd4\u8f83\u51fd\u6570\u4e2d\uff0c\u4f7f\u7528\u5f53\u524d\u51fd\u6570\u5757\u7684\u6570\u636e")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c++"},'#include <iostream>\n#include <queue>\n#include <vector>\n\nusing namespace std;\n\nint main() {\n    vector<int> vec = {1, 2, 5, 3, 4};\n\n    // \u58f0\u660e\u5c0f\u6839\u5806\uff0c\u81ea\u5b9a\u4e49\u6bd4\u8f83\u51fd\u6570\n    auto cmp = [&](const auto& a, const auto& b) {\n        return vec[a] > vec[b];\n    };\n    priority_queue<int, vector<int>, decltype(cmp)> smallQ(cmp);\n    for (int i = 0; i < vec.size(); i++) {\n        smallQ.push(i);\n    }\n\n    while (!smallQ.empty()) {\n        cout << smallQ.top() << " ";\n        smallQ.pop();\n    }\n    cout << endl;  // 0 1 3 4 2\n\n    return 0;\n}\n')),(0,l.kt)("h3",{id:"3\u5806\u4e2d\u7684\u5143\u7d20\u662f\u5bf9\u8c61\u591a\u7ea7\u6bd4\u8f83"},"3\u3001\u5806\u4e2d\u7684\u5143\u7d20\u662f\u5bf9\u8c61\uff0c\u591a\u7ea7\u6bd4\u8f83"),(0,l.kt)("p",null,"\u91cd\u8f7d\u300c\u5c0f\u6839\u5806\u300d\u7684\u56de\u8c03\u51fd\u6570\uff0c\u9700\u8981\u7528\u5927\u4e8e\u53f7\u300c>\u300d"),(0,l.kt)("p",null,"\u91cd\u8f7d\u300c\u5927\u6839\u5806\u300d\u7684\u56de\u8c03\u51fd\u6570\uff0c\u9700\u8981\u7528\u5c0f\u4e8e\u53f7\u300c<\u300d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c++"},'#include <iostream>\n#include <queue>\n#include <vector>\nusing namespace std;\n\nclass Person {\npublic:\n    string name;\n    int age;\n};\n\n// \u91cd\u8f7d\u5c0f\u6839\u5806\u7684\u56de\u8c03\u51fd\u6570\uff0c\u4f18\u5148\u6bd4\u8f83name\nstruct cmpSmall {\n    bool operator()(const Person &p1, const Person &p2) const { // \u683c\u5f0f\u53ef\u4ee5\u4e3a\u5f15\u7528\n        if (p1.name != p2.name) {\n            return p1.name > p2.name;\n        } else {\n            return p1.age > p2.age;\n        }\n    }\n};\n\n// \u91cd\u8f7d\u5927\u6839\u5806\u7684\u56de\u8c03\u51fd\u6570\uff0c\u4f18\u5148\u6bd4\u8f83age\nstruct cmpBig {\n    bool operator()(const Person &p1, const Person &p2) const {\n        if (p1.age != p2.age) {\n            return p1.age < p2.age;\n        } else {\n            return p1.name < p2.name;\n        }\n    }\n};\n\nint main() {\n    vector<Person> vec = {\n        {"aaa", 10},\n        {"bbb", 10},\n        {"bbb", 20},\n    };\n\n    // \u5c0f\u6839\u5806\uff0c\u5148\u6bd4\u8f83name\n    priority_queue<Person, deque<Person>, cmpSmall> smallQ(vec.begin(), vec.end());\n    while (!smallQ.empty()) {\n        cout << smallQ.top().name << ", " << smallQ.top().age << endl;\n        smallQ.pop();\n    }\n    // aaa, 10\n    // bbb, 10\n    // bbb, 20\n\n    // \u5927\u6839\u5806\uff0c\u5148\u6bd4\u8f83age\n    priority_queue<Person, deque<Person>, cmpBig> bigQ(vec.begin(), vec.end());\n    while (!bigQ.empty()) {\n        cout << bigQ.top().age << ", " << bigQ.top().name << endl;\n        bigQ.pop();\n    }\n    // 20, bbb\n    // 10, bbb\n    // 10, aaa\n}\n')),(0,l.kt)("h3",{id:"4\u6307\u5b9a\u5e95\u5c42\u5bb9\u5668"},"4\u3001\u6307\u5b9a\u5e95\u5c42\u5bb9\u5668"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5e95\u5c42\u5bb9\u5668\u4e3a vector \u8981\u6bd4 deque \u5feb\u5f88\u591a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c++"},'#include <iostream>\n#include <queue>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> vec = {3, 2, 5, 4, 2, 1};\n\n    // \u5e95\u5c42\u5bb9\u5668\u4e3a deque\n    priority_queue<int, deque<int>> q1(vec.begin(), vec.end());\n    while (!q1.empty()) {\n        cout << q1.top() << " ";\n        q1.pop();\n    }\n    cout << endl;  // 5 4 3 2 2 1\n\n    // \u5e95\u5c42\u5bb9\u5668\u4e3a vector\n    priority_queue<int, vector<int>> q2(vec.begin(), vec.end());\n    while (!q2.empty()) {\n        cout << q2.top() << " ";\n        q2.pop();\n    }\n    cout << endl;  // 5 4 3 2 2 1\n}\n')),(0,l.kt)("h2",{id:"\u56dbpython-\u7528\u6cd5"},"\u56db\u3001Python \u7528\u6cd5"),(0,l.kt)("p",null,"\u6765\u6e90\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://www.jianshu.com/p/801318c77ab5"},"https://www.jianshu.com/p/801318c77ab5")),(0,l.kt)("h3",{id:"1\u521b\u5efa\u8bbf\u95ee\u5220\u9664-1"},"1\u3001\u521b\u5efa\u3001\u8bbf\u95ee\u3001\u5220\u9664"),(0,l.kt)("p",null,"heapq \u9ed8\u8ba4\u521b\u5efa\u7684\u662f\u300c\u5c0f\u6839\u5806\u300d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import heapq\n\n# \u7b2c\u4e00\u79cd\u521b\u5efa\u65b9\u5f0f\nnums = [2, 3, 5, 1, 54, 23, 132]\nheap = []\nfor num in nums:\n    heapq.heappush(heap, num)  # \u52a0\u5165\u5806 \n\nprint(heap[0])  # 1 \u5982\u679c\u53ea\u662f\u60f3\u83b7\u53d6\u6700\u5c0f\u503c\u800c\u4e0d\u662f\u5f39\u51fa\uff0c\u4f7f\u7528heap[0]\nprint([heapq.heappop(heap) for _ in range(len(nums))])\n# out: [1, 2, 3, 5, 23, 54, 132]\n# \u6ce8\uff1a\u4e0d\u8981\u76f4\u63a5\u53bb\u770b heap\uff0c\u56e0\u4e3aheap\u7684\u987a\u5e8f\u662f\u4e8c\u53c9\u5806\u7684\u67d0\u79cd\u6392\u5e8f\uff0c\n# \u5f53heapq.heappop \u65f6\u624d\u4f1a\u7531\u5c0f\u53ca\u5927\u5f39\u51fa\u6570\u636e\n\n\n# \u7b2c\u4e8c\u79cd\u521b\u5efa\u65b9\u5f0f\nnums = [2, 3, 5, 1, 54, 23, 132]\nheapq.heapify(nums)\n\n# \u5982\u679c\u9700\u8981\u5220\u9664\u5806\u4e2d\u6700\u5c0f\u5143\u7d20\u5e76\u52a0\u5165\u4e00\u4e2a\u5143\u7d20\uff0c\nheapq.heapreplace(nums, 10)\n# \u5806\u6392\u5e8f\u7ed3\u679c [2, 3, 5, 10, 23, 54, 132]\n\n# \u83b7\u53d6\u5806\u6700\u5927\u6216\u6700\u5c0f\u503c\uff0c\u4e0d\u5e38\u7528\nprint(heapq.nlargest(4, nums))  # [132, 54, 23, 10]\nprint(heapq.nsmallest(4, nums)) # [2, 3, 5, 10]\n")),(0,l.kt)("h3",{id:"2\u5b9e\u73b0\u5927\u6839\u5806"},"2\u3001\u5b9e\u73b0\u5927\u6839\u5806"),(0,l.kt)("p",null,"\u82e5\u60f3\u7528\u5927\u6839\u5806\uff0c\u503c\u5148\u8f6c\u5316\u4e3a\u8d1f\u7684\u5927\u7684\u53d8\u5c0f\u7684\uff0c\u653e\u8fdb\u53bb\uff1b\u53d6\u51fa\u6765\u540e\uff0c\u518d\u628a\u8d1f\u7684\u8f6c\u5316\u4e3a\u6b63\u7684\uff0c\u5c0f\u7684\u53d8\u5927"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import heapq\n\nnums = [2, 3, 5, 1, 54, 23, 132]\nheap = []\nfor num in nums:\n  heapq.heappush(heap, -num) \n  \nprint([-heapq.heappop(heap) for _ in range(len(nums))])\n# [132, 54, 23, 5, 3, 2, 1]\n")),(0,l.kt)("h3",{id:"3\u5e26\u6743\u503c\u7684\u4f18\u5148\u961f\u5217\u591a\u7ea7\u6bd4\u8f83"},"3\u3001\u5e26\u6743\u503c\u7684\u4f18\u5148\u961f\u5217\uff0c\u591a\u7ea7\u6bd4\u8f83"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import heapq\n\n# \u5c0f\u6839\u5806\u7528\u6cd5\npriorityQueue = [] \n\n# \u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u503c\uff0c\u4f5c\u4e3a\u4f18\u5148\u7ea7\uff0c\u7b2c\u4e8c\u4e2a\u503c\u53ef\u4ee5\u5b58\u6743\u503c\nheapq.heappush(priorityQueue, (5, 'write code')) \nheapq.heappush(priorityQueue, (7, 'release product'))\nheapq.heappush(priorityQueue, (1, 'write spec'))\nheapq.heappush(priorityQueue, (3, 'create tests'))\n\nv, s = heapq.heappop(priorityQueue) \n# v:1 s:\"write spec\"\nprint([heapq.heappop(priorityQueue) for _ in range(len(priorityQueue))])\n# [(3, 'create tests'), (5, 'write code'), (7, 'release product')]\n\nhp = [] \nheapq.heappush(hp, (1, 'a')) \nheapq.heappush(hp, (2, 'ab'))\nheapq.heappush(hp, (3, 'ac'))\nheapq.heappush(hp, (3, 'cb'))\n\nprint([heapq.heappop(hp) for _ in range(len(hp))])\n# [(1, 'a'), (2, 'ab'), (2, 'ac'), (2, 'cb')]\n# \u53ef\u4ee5\u770b\u5230\u5f53\u7b2c\u4e00\u9879\u76f8\u540c\u65f6\uff0c\u7b2c\u4e8c\u9879\u4e3a\u5b57\u5178\u5e8f\n")),(0,l.kt)("h3",{id:"4\u5806\u4e2d\u7684\u5143\u7d20\u662f\u5bf9\u8c61"},"4\u3001\u5806\u4e2d\u7684\u5143\u7d20\u662f\u5bf9\u8c61"),(0,l.kt)("p",null,"\u5982\u679c\u5806\u4e2d\u7684\u5143\u7d20\u662f\u5bf9\u8c61\u7684\u8bdd\uff0c\u53c2\u7167 Skill/Python/7-\u9ad8\u7ea7\u73a9\u6cd5.md"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import heapq\n\nclass SmallPerson():\n    def __init__(self, age, height):\n        self.age = age\n        self.height = height\n\n    def __lt__(self, other):\n        # \u5c0f\u4e8e <\n        if self.age == other.age:\n            return self.height < other.height\n        else:\n            return self.age < other.age\n\n\nclass BigPerson():\n    def __init__(self, age, height):\n        self.age = age\n        self.height = height\n\n    def __lt__(self, other):\n        # \u5c0f\u4e8e <\n        if self.age == other.age:\n            return self.height > other.height\n        else:\n            return self.age > other.age\n\n\n# \u5c0f\u6839\u5806\nhp = []\nheapq.heappush(hp, SmallPerson(18, 180))\nheapq.heappush(hp, SmallPerson(17, 180))\nheapq.heappush(hp, SmallPerson(17, 170))\n\nfor _ in range(len(hp)):\n    person = heapq.heappop(hp)\n    print(person.age, person.height)\n# 17 170\n# 17 180\n# 18 180\n\n# \u5927\u6839\u5806\nhp = []\nheapq.heappush(hp, BigPerson(17, 170))\nheapq.heappush(hp, BigPerson(18, 180))\nheapq.heappush(hp, BigPerson(17, 180))\n\nfor _ in range(len(hp)):\n    person = heapq.heappop(hp)\n    print(person.age, person.height)\n# 18 180\n# 17 180\n# 17 170\n")),(0,l.kt)("h3",{id:"5\u5c01\u88c5\u7528\u6cd5"},"5\u3001\u5c01\u88c5\u7528\u6cd5"),(0,l.kt)("p",null,"\u652f\u6301\u5927\u5c0f\u6839\u5806\uff0c\u4e0d\u652f\u6301\u5e26\u6743\u503c"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7ecf\u8fc7\u591a\u6b21\u6bd4\u8d5b\u5b9e\u8df5\uff0c\u4e0d\u5982\u76f4\u63a5\u5199\u6765\u7684\u81ea\u7136")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import heapq\n\nclass Heap:\n    def __init__(self, name="small"):\n        self.arr = []\n        self.transform = lambda x: x if name=="small" else -x\n\n    def push(self, num):\n        # \u63a8\u5165\u4e00\u4e2a\n        heapq.heappush(self.arr, self.transform(num))\n\n    def pop(self):\n        # \u5f39\u51fa\u5806\u9876\n        return self.transform(heapq.heappop(self.arr))\n\n    @property\n    def top(self):\n        # \u83b7\u53d6\u5806\u9876\u5143\u7d20\n        return self.transform(self.arr[0])\n    \n    @property\n    def length(self):\n        return len(self.arr)\n    \n    @property\n    def isEmpty(self):\n        return len(self.arr) == 0\n')),(0,l.kt)("h3",{id:"6\u67d0\u79cd\u610f\u4e49\u4e0a\u7684\u5408\u5e76"},"6\u3001\u67d0\u79cd\u610f\u4e49\u4e0a\u7684\u5408\u5e76"),(0,l.kt)("p",null,"heapq \u6a21\u5757\u8fd8\u6709\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"heapq.merge(*iterables)")," \u65b9\u6cd5\uff0c\u7528\u4e8e\u5408\u5e76\u591a\u4e2a\u6392\u5e8f\u540e\u7684\u5e8f\u5217\u6210\u4e00\u4e2a\u6392\u5e8f\u540e\u7684\u5e8f\u5217\uff0c \u8fd4\u56de\u6392\u5e8f\u540e\u7684\u503c\u7684\u8fed\u4ee3\u5668\u3002\n\u7c7b\u4f3c\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"sorted(itertools.chain(*iterables))"),"\uff0c\u4f46\u8fd4\u56de\u7684\u662f\u53ef\u8fed\u4ee3\u7684\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import heapq\n\nnum1 = [32, 3, 5, 34, 54, 23, 132]\nnum2 = [23, 2, 12, 656, 324, 23, 54]\nnum1 = sorted(num1)\nnum2 = sorted(num2)\n\n# merge \u4f20\u5165\u7684\u53c2\u6570\u5fc5\u987b\u662f\u6392\u8fc7\u7eed\u7684\u5217\u8868\uff0c\u6ca1\u6709\u6392\u5e8f\u6216\u8005\u4f20\u5165\u7684\u662f\u4e2a\u5806\u90fd\u4e0d\u884c\nres = heapq.merge(num1, num2)\nprint(list(res))\n# out: [3, 3, 5, 5, 23, 23, 32, 32, 34, 34, 54, 54, 132, 132]\n")))}m.isMDXComponent=!0},85564:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/\u5927\u5c0f\u6839\u5806-05ede6e2af6bbd1524641049fd31164e.png"}}]);