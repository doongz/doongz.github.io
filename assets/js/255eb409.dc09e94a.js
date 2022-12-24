"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[59623],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,y=c["".concat(o,".").concat(d)]||c[d]||m[d]||i;return r?n.createElement(y,u(u({ref:t},s),{},{components:r})):n.createElement(y,u({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,u=new Array(i);u[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:a,u[1]=l;for(var p=2;p<i;p++)u[p]=r[p];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},56465:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>u,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={},u="priority_queue",l={unversionedId:"Skill/C++/\u6807\u51c6\u6a21\u677f\u5e93/priority_queue",id:"Skill/C++/\u6807\u51c6\u6a21\u677f\u5e93/priority_queue",title:"priority_queue",description:"priorityqueue \u5bb9\u5668\u9002\u914d\u5668\u6a21\u62df\u7684\u4e5f\u662f\u961f\u5217\u8fd9\u79cd\u5b58\u50a8\u7ed3\u6784\uff0c\u5b58\u50a8\u5143\u7d20\u4ece\u4e00\u7aef\u8fdb\uff08\u79f0\u4e3a\u961f\u5c3e\uff09\uff0c\u4ece\u53e6\u4e00\u7aef\u51fa\uff08\u79f0\u4e3a\u961f\u5934\uff09\uff0c\u4e14\u6bcf\u6b21\u53ea\u80fd\u8bbf\u95ee priorityqueue \u4e2d\u4f4d\u4e8e\u961f\u5934\u7684\u5143\u7d20\uff0c\u5bb9\u5668\u5185\u90e8\u6309\u4e00\u5b9a\u987a\u5e8f\u6392\u5e8f\uff0c\u4f18\u5148\u7ea7\u6700\u5927\u7684\u5143\u7d20\u6700\u5148\u51fa\u961f\u5217",source:"@site/docs/Skill/C++/3-\u6807\u51c6\u6a21\u677f\u5e93/12-priority_queue.md",sourceDirName:"Skill/C++/3-\u6807\u51c6\u6a21\u677f\u5e93",slug:"/Skill/C++/\u6807\u51c6\u6a21\u677f\u5e93/priority_queue",permalink:"/docs/Skill/C++/\u6807\u51c6\u6a21\u677f\u5e93/priority_queue",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{},sidebar:"skillSidebar",previous:{title:"queue",permalink:"/docs/Skill/C++/\u6807\u51c6\u6a21\u677f\u5e93/queue"},next:{title:"algorithm",permalink:"/docs/Skill/C++/\u6807\u51c6\u6a21\u677f\u5e93/algorithm"}},o={},p=[{value:"\u4e00\u3001\u521b\u5efa",id:"\u4e00\u521b\u5efa",level:2},{value:"\u4e8c\u3001\u6210\u5458\u51fd\u6570",id:"\u4e8c\u6210\u5458\u51fd\u6570",level:2}],s={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"priority_queue"},"priority_queue"),(0,a.kt)("p",null,"priority_queue \u5bb9\u5668\u9002\u914d\u5668\u6a21\u62df\u7684\u4e5f\u662f\u961f\u5217\u8fd9\u79cd\u5b58\u50a8\u7ed3\u6784\uff0c\u5b58\u50a8\u5143\u7d20\u4ece\u4e00\u7aef\u8fdb\uff08\u79f0\u4e3a\u961f\u5c3e\uff09\uff0c\u4ece\u53e6\u4e00\u7aef\u51fa\uff08\u79f0\u4e3a\u961f\u5934\uff09\uff0c\u4e14\u6bcf\u6b21\u53ea\u80fd\u8bbf\u95ee priority_queue \u4e2d\u4f4d\u4e8e\u961f\u5934\u7684\u5143\u7d20\uff0c\u5bb9\u5668\u5185\u90e8\u6309\u4e00\u5b9a\u987a\u5e8f\u6392\u5e8f\uff0c\u4f18\u5148\u7ea7\u6700\u5927\u7684\u5143\u7d20\u6700\u5148\u51fa\u961f\u5217"),(0,a.kt)("h2",{id:"\u4e00\u521b\u5efa"},"\u4e00\u3001\u521b\u5efa"),(0,a.kt)("p",null,"priority_queue \u5bb9\u5668\u9002\u914d\u5668\u6a21\u677f\u4f4d\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"<queue>"),"\u5934\u6587\u4ef6\u4e2d\uff0c\u9ed8\u8ba4\u662f\u5927\u6839\u5806"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <array>\n#include <iostream>\n#include <queue>\nusing namespace std;\n\nint main() {\n    // 1 \u521b\u5efa\u4e00\u4e2a\u7a7a\u7684 priority_queue \u5bb9\u5668\u9002\u914d\u5668\uff0c\u7b2c\u5e95\u5c42\u91c7\u7528\u9ed8\u8ba4\u7684 vector \u5bb9\u5668\n    priority_queue<int> q1;\n\n    // 2 \u4f7f\u7528\u666e\u901a\u6570\u7ec4\u6216\u5176\u5b83\u5bb9\u5668\u4e2d\u6307\u5b9a\u8303\u56f4\u5185\u7684\u6570\u636e\n    int val[]{4, 1, 3, 2};\n    priority_queue<int> q2(val, val + 4);  // 4 3 2 1\n\n    array<int, 4> arr{4, 1, 3, 2};\n    priority_queue<int> q3(arr.begin(), arr.end());  // // 4 3 2 1\n\n    // 3 \u624b\u52a8\u6307\u5b9a priority_queue \u4f7f\u7528\u7684\u5e95\u5c42\u5bb9\u5668\u4ee5\u53ca\u6392\u5e8f\u89c4\u5219\n    int values[]{4, 1, 2, 3};\n    priority_queue<int, deque<int>, greater<int> > q4(values, values + 4);\n    // 1 2 3 4\n    // \u5e95\u5c42\u5bb9\u5668\u4e3a vector \u4f1a\u5feb\u4e00\u4e9b\n    priority_queue<int, vector<int>, greater<int> > q5(values, values + 4);\n\n    while (!q4.empty()) {\n        cout << q4.top() << " ";\n        q4.pop();\n    }\n\n    return 0;\n}\n')),(0,a.kt)("h2",{id:"\u4e8c\u6210\u5458\u51fd\u6570"},"\u4e8c\u3001\u6210\u5458\u51fd\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u6210\u5458\u51fd\u6570"),(0,a.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"empty()")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"\u5982\u679c priority_queue \u4e3a\u7a7a\u7684\u8bdd\uff0c\u8fd4\u56de true\uff1b\u53cd\u4e4b\uff0c\u8fd4\u56de false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"size()"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de priority_queue \u4e2d\u5b58\u50a8\u5143\u7d20\u7684\u4e2a\u6570\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"top()")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"\u8fd4\u56de priority_queue \u4e2d\u7b2c\u4e00\u4e2a\u5143\u7d20\u7684\u5f15\u7528\u5f62\u5f0f"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"push(const T& obj)"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6839\u636e\u65e2\u5b9a\u7684\u6392\u5e8f\u89c4\u5219\uff0c\u5c06\u5143\u7d20 obj \u7684\u526f\u672c\u5b58\u50a8\u5230 priority_queue \u4e2d\u9002\u5f53\u7684\u4f4d\u7f6e\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"push(T&& obj)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"\u6839\u636e\u65e2\u5b9a\u7684\u6392\u5e8f\u89c4\u5219\uff0c\u5c06\u5143\u7d20 obj \u79fb\u52a8\u5b58\u50a8\u5230 priority_queue \u4e2d\u9002\u5f53\u7684\u4f4d\u7f6e"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"emplace(Args&&... args)"),(0,a.kt)("td",{parentName:"tr",align:null},"Args&&... args \u8868\u793a\u6784\u9020\u4e00\u4e2a\u5b58\u50a8\u7c7b\u578b\u7684\u5143\u7d20\u6240\u9700\u8981\u7684\u6570\u636e\uff08\u5bf9\u4e8e\u7c7b\u5bf9\u8c61\u6765\u8bf4\uff0c\u53ef\u80fd\u9700\u8981\u591a\u4e2a\u6570\u636e\u6784\u9020\u51fa\u4e00\u4e2a\u5bf9\u8c61\uff09\u3002\u6b64\u51fd\u6570\u7684\u529f\u80fd\u662f\u6839\u636e\u65e2\u5b9a\u7684\u6392\u5e8f\u89c4\u5219\uff0c\u5728\u5bb9\u5668\u9002\u914d\u5668\u9002\u5f53\u7684\u4f4d\u7f6e\u76f4\u63a5\u751f\u6210\u8be5\u65b0\u5143\u7d20\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"pop()")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"\u79fb\u9664 priority_queue \u5bb9\u5668\u9002\u914d\u5668\u4e2d\u7b2c\u4e00\u4e2a\u5143\u7d20"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"swap(priority_queue<T>& other)")),(0,a.kt)("td",{parentName:"tr",align:null},"\u5c06\u4e24\u4e2a priority_queue \u5bb9\u5668\u9002\u914d\u5668\u4e2d\u7684\u5143\u7d20\u8fdb\u884c\u4e92\u6362\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8fdb\u884c\u4e92\u6362\u7684 2 \u4e2a priority_queue \u5bb9\u5668\u9002\u914d\u5668\u4e2d\u5b58\u50a8\u7684\u5143\u7d20\u7c7b\u578b\u4ee5\u53ca\u5e95\u5c42\u91c7\u7528\u7684\u57fa\u7840\u5bb9\u5668\u7c7b\u578b\uff0c\u90fd\u5fc5\u987b\u76f8\u540c\u3002")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>\n#include <queue>\nusing namespace std;\nint main() {\n    priority_queue<int> values;\n\n    values.push(3);  //{3}\n    values.push(1);  //{3,1}\n    values.push(4);  //{4,1,3}\n    values.push(2);  //{4,2,3,1}\n\n    while (!values.empty()) {\n        //\u8f93\u51fa\u7b2c\u4e00\u4e2a\u5143\u7d20\u5e76\u79fb\u9664\u3002\n        cout << values.top() << " ";\n        values.pop();  //\u79fb\u9664\u961f\u5934\u5143\u7d20\u7684\u540c\u65f6\uff0c\u5c06\u5269\u4f59\u5143\u7d20\u4e2d\u4f18\u5148\u7ea7\u6700\u5927\u7684\u79fb\u81f3\u961f\u5934\n    }\n    return 0;\n}\n')))}c.isMDXComponent=!0}}]);