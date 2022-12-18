"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[77071],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,u=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(o,".").concat(m)]||d[m]||s[m]||u;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=n.length,l=new Array(u);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<u;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43995:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>u,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const u={},l="queue",i={unversionedId:"Skill/C++/\u6807\u51c6\u6a21\u677f\u5e93/queue",id:"Skill/C++/\u6807\u51c6\u6a21\u677f\u5e93/queue",title:"queue",description:"queue \u5bb9\u5668\u9002\u914d\u5668\u6709 2 \u4e2a\u5f00\u53e3\uff0c\u5176\u4e2d\u4e00\u4e2a\u5f00\u53e3\u4e13\u95e8\u7528\u6765\u8f93\u5165\u6570\u636e\uff0c\u53e6\u4e00\u4e2a\u4e13\u95e8\u7528\u6765\u8f93\u51fa\u6570\u636e",source:"@site/docs/Skill/C++/3-\u6807\u51c6\u6a21\u677f\u5e93/11-queue.md",sourceDirName:"Skill/C++/3-\u6807\u51c6\u6a21\u677f\u5e93",slug:"/Skill/C++/\u6807\u51c6\u6a21\u677f\u5e93/queue",permalink:"/docs/Skill/C++/\u6807\u51c6\u6a21\u677f\u5e93/queue",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"docsSidebar",previous:{title:"stack",permalink:"/docs/Skill/C++/\u6807\u51c6\u6a21\u677f\u5e93/stack"},next:{title:"priority_queue",permalink:"/docs/Skill/C++/\u6807\u51c6\u6a21\u677f\u5e93/priority_queue"}},o={},p=[{value:"\u4e00\u3001\u521b\u5efa",id:"\u4e00\u521b\u5efa",level:2},{value:"\u4e8c\u3001\u6210\u5458\u51fd\u6570",id:"\u4e8c\u6210\u5458\u51fd\u6570",level:2}],c={toc:p};function d(e){let{components:t,...u}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,u,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"queue"},"queue"),(0,a.kt)("p",null,"queue \u5bb9\u5668\u9002\u914d\u5668\u6709 2 \u4e2a\u5f00\u53e3\uff0c\u5176\u4e2d\u4e00\u4e2a\u5f00\u53e3\u4e13\u95e8\u7528\u6765\u8f93\u5165\u6570\u636e\uff0c\u53e6\u4e00\u4e2a\u4e13\u95e8\u7528\u6765\u8f93\u51fa\u6570\u636e"),(0,a.kt)("p",null,'\u6700\u5148\u8fdb\u5165 queue \u7684\u5143\u7d20\uff0c\u4e5f\u53ef\u4ee5\u6700\u5148\u4ece queue \u4e2d\u51fa\u6765\uff0c\u5373\u7528\u6b64\u5bb9\u5668\u9002\u914d\u5668\u5b58\u50a8\u6570\u636e\u5177\u6709\u201c\u5148\u8fdb\u5148\u51fa\uff08\u7b80\u79f0 "FIFO" \uff09\u201d\u7684\u7279\u70b9\uff0c\u56e0\u6b64 queue \u53c8\u79f0\u4e3a\u961f\u5217\u9002\u914d\u5668'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(95027).Z,width:"700",height:"210"})),(0,a.kt)("h2",{id:"\u4e00\u521b\u5efa"},"\u4e00\u3001\u521b\u5efa"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},"#include <deque>\n#include <iostream>\n#include <list>\n#include <queue>\nusing namespace std;\n\nint main() {\n    // 1 \u521b\u5efa\u4e00\u4e2a\u7a7a\u7684 queue \u5bb9\u5668\u9002\u914d\u5668\uff0c\u5176\u5e95\u5c42\u4f7f\u7528\u7684\u57fa\u7840\u5bb9\u5668\u9009\u62e9\u9ed8\u8ba4\u7684 deque \u5bb9\u5668\n    queue<int> q1;\n\n    // 2 \u5f53\u624b\u52a8\u6307\u5b9a queue \u5bb9\u5668\u9002\u914d\u5668\u5e95\u5c42\u91c7\u7528\u7684 list \u57fa\u7840\u5bb9\u5668\u7c7b\u578b\n    queue<int, list<int> > q2;\n\n    // 3 \u521b\u5efa\u5e76\u521d\u59cb\u5316\n    deque<int> values{1, 2, 3};\n    queue<int> q3(values);\n\n    // 4 \u590d\u5236\n    queue<int> q4(q3);\n\n    return 0;\n}\n\n")),(0,a.kt)("h2",{id:"\u4e8c\u6210\u5458\u51fd\u6570"},"\u4e8c\u3001\u6210\u5458\u51fd\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u6210\u5458\u51fd\u6570"),(0,a.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"empty()")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"\u5982\u679c queue \u4e2d\u6ca1\u6709\u5143\u7d20\u7684\u8bdd\uff0c\u8fd4\u56de true"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"size()")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"\u8fd4\u56de queue \u4e2d\u5143\u7d20\u7684\u4e2a\u6570"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"front()")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"\u8fd4\u56de queue \u4e2d\u7b2c\u4e00\u4e2a\u5143\u7d20\u7684\u5f15\u7528\u3002\u5982\u679c queue \u662f\u5e38\u91cf\uff0c\u5c31\u8fd4\u56de\u4e00\u4e2a\u5e38\u5f15\u7528\uff1b\u5982\u679c queue \u4e3a\u7a7a\uff0c\u8fd4\u56de\u503c\u662f\u672a\u5b9a\u4e49\u7684"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"back()"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de queue \u4e2d\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u7684\u5f15\u7528\u3002\u5982\u679c queue \u662f\u5e38\u91cf\uff0c\u5c31\u8fd4\u56de\u4e00\u4e2a\u5e38\u5f15\u7528\uff1b\u5982\u679c queue \u4e3a\u7a7a\uff0c\u8fd4\u56de\u503c\u662f\u672a\u5b9a\u4e49\u7684\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"push(const T& obj)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"\u5728 queue \u7684\u5c3e\u90e8\u6dfb\u52a0\u4e00\u4e2a\u5143\u7d20\u7684\u526f\u672c\u3002\u8fd9\u662f\u901a\u8fc7\u8c03\u7528\u5e95\u5c42\u5bb9\u5668\u7684\u6210\u5458\u51fd\u6570 push_back() \u6765\u5b8c\u6210\u7684"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"emplace()"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5728 queue \u7684\u5c3e\u90e8\u76f4\u63a5\u6dfb\u52a0\u4e00\u4e2a\u5143\u7d20\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"push(T&& obj)"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4ee5\u79fb\u52a8\u7684\u65b9\u5f0f\u5728 queue \u7684\u5c3e\u90e8\u6dfb\u52a0\u5143\u7d20\u3002\u8fd9\u662f\u901a\u8fc7\u8c03\u7528\u5e95\u5c42\u5bb9\u5668\u7684\u5177\u6709\u53f3\u503c\u5f15\u7528\u53c2\u6570\u7684\u6210\u5458\u51fd\u6570 push_back() \u6765\u5b8c\u6210\u7684\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"pop()")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"\u5220\u9664 queue \u4e2d\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"swap(queue<T> &other_queue)")),(0,a.kt)("td",{parentName:"tr",align:null},"\u5c06\u4e24\u4e2a queue \u5bb9\u5668\u9002\u914d\u5668\u4e2d\u7684\u5143\u7d20\u8fdb\u884c\u4e92\u6362\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8fdb\u884c\u4e92\u6362\u7684 2 \u4e2a queue \u5bb9\u5668\u9002\u914d\u5668\u4e2d\u5b58\u50a8\u7684\u5143\u7d20\u7c7b\u578b\u4ee5\u53ca\u5e95\u5c42\u91c7\u7528\u7684\u57fa\u7840\u5bb9\u5668\u7c7b\u578b\uff0c\u90fd\u5fc5\u987b\u76f8\u540c\u3002")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},'#include <deque>\n#include <iostream>\n#include <queue>\nusing namespace std;\n\nint main() {\n    deque<int> values{1, 2, 3};\n    queue<int> q(values);\n\n    cout << q.size() << endl;  // 3\n\n    while (!q.empty()) {\n        cout << q.front() << " ";\n        q.pop();\n    }\n    // 1 2 3\n\n    return 0;\n}\n')))}d.isMDXComponent=!0},95027:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/queue-2b0cfabbbff231126d28af18a18ad989.png"}}]);