"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[12706],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>k});var a=t(67294);function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){l(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){if(null==n)return{};var t,a,l=function(n,e){if(null==n)return{};var t,a,l={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(l[t]=n[t]);return l}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(l[t]=n[t])}return l}var p=a.createContext({}),o=function(n){var e=a.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},c=function(n){var e=o(n.components);return a.createElement(p.Provider,{value:e},n.children)},d="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(n,e){var t=n.components,l=n.mdxType,r=n.originalType,p=n.parentName,c=u(n,["components","mdxType","originalType","parentName"]),d=o(t),s=l,k=d["".concat(p,".").concat(s)]||d[s]||m[s]||r;return t?a.createElement(k,i(i({ref:e},c),{},{components:t})):a.createElement(k,i({ref:e},c))}));function k(n,e){var t=arguments,l=e&&e.mdxType;if("string"==typeof n||l){var r=t.length,i=new Array(r);i[0]=s;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=n,u[d]="string"==typeof n?n:l,i[1]=u;for(var o=2;o<r;o++)i[o]=t[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},38229:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>u,toc:()=>o});var a=t(87462),l=(t(67294),t(3905));const r={},i="\u4f4d\u8fd0\u7b97",u={unversionedId:"Algorithm/\u7b97\u6cd5\u57fa\u7840/\u4f4d\u8fd0\u7b97",id:"Algorithm/\u7b97\u6cd5\u57fa\u7840/\u4f4d\u8fd0\u7b97",title:"\u4f4d\u8fd0\u7b97",description:"\u4e00\u3001\u5e94\u7528",source:"@site/docs/Algorithm/2-\u7b97\u6cd5\u57fa\u7840/08-\u4f4d\u8fd0\u7b97.md",sourceDirName:"Algorithm/2-\u7b97\u6cd5\u57fa\u7840",slug:"/Algorithm/\u7b97\u6cd5\u57fa\u7840/\u4f4d\u8fd0\u7b97",permalink:"/docs/Algorithm/\u7b97\u6cd5\u57fa\u7840/\u4f4d\u8fd0\u7b97",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"algorithmSidebar",previous:{title:"\u8d2a\u5fc3",permalink:"/docs/Algorithm/\u7b97\u6cd5\u57fa\u7840/\u8d2a\u5fc3"},next:{title:"\u5206\u6cbb",permalink:"/docs/Algorithm/\u7b97\u6cd5\u57fa\u7840/\u5206\u6cbb"}},p={},o=[{value:"\u4e00\u3001\u5e94\u7528",id:"\u4e00\u5e94\u7528",level:2},{value:"1\u3001\u5224\u65ad\u5947\u5076 num &amp; 1",id:"1\u5224\u65ad\u5947\u5076-num--1",level:3},{value:"2\u3001\u96642 num &gt;&gt; 1",id:"2\u96642-num--1",level:3},{value:"3\u3001\u4e582 num &lt;&lt; 1",id:"3\u4e582-num--1",level:3},{value:"4\u30012\u7684 num \u6b21\u65b9 1 &lt;&lt; num",id:"42\u7684-num-\u6b21\u65b9-1--num",level:3},{value:"5\u3001\u6c42\u4e2d\u503c l + ((r - l) &gt;&gt; 1)",id:"5\u6c42\u4e2d\u503c-l--r---l--1",level:3},{value:"6\u3001\u4e24\u4e2a\u6570\u7684\u5e73\u5747\u6570 (a &amp; b)+((a ^ b) &gt;&gt; 1)",id:"6\u4e24\u4e2a\u6570\u7684\u5e73\u5747\u6570-a--ba--b--1",level:3},{value:"7\u3001\u4e0d\u4f7f\u7528\u7b2c\u4e09\u4e2a\u53d8\u91cf\u7684\u60c5\u51b5\u4e0b\u4ea4\u6362\u4e24\u4e2a\u53d8\u91cf\u7684\u503c",id:"7\u4e0d\u4f7f\u7528\u7b2c\u4e09\u4e2a\u53d8\u91cf\u7684\u60c5\u51b5\u4e0b\u4ea4\u6362\u4e24\u4e2a\u53d8\u91cf\u7684\u503c",level:3},{value:"8\u3001\u4e0d\u7528\u52a0\u51cf\u4e58\u9664\u505a\u52a0\u6cd5",id:"8\u4e0d\u7528\u52a0\u51cf\u4e58\u9664\u505a\u52a0\u6cd5",level:3},{value:"9\u3001\u4e8c\u8fdb\u5236\u4e2d1\u7684\u4e2a\u6570",id:"9\u4e8c\u8fdb\u5236\u4e2d1\u7684\u4e2a\u6570",level:3},{value:"10\u3001\u8f6c\u5316\u4e3a\u4e8c\u8fdb\u5236\u56fe",id:"10\u8f6c\u5316\u4e3a\u4e8c\u8fdb\u5236\u56fe",level:3},{value:"11\u3001\u4f4d\u6570\u7edf\u8ba1",id:"11\u4f4d\u6570\u7edf\u8ba1",level:3},{value:"12\u3001\u5224\u65ad\u67d0\u4e00\u4f4d\u662f\u5426\u662f1\uff0c\u67d0\u4e00\u4f4d\u8d4b\u503c1",id:"12\u5224\u65ad\u67d0\u4e00\u4f4d\u662f\u5426\u662f1\u67d0\u4e00\u4f4d\u8d4b\u503c1",level:3},{value:"\u4e8c\u3001\u5f02\u6216 XOR",id:"\u4e8c\u5f02\u6216-xor",level:2},{value:"1\u3001\u8fd0\u7b97\u89c4\u5f8b",id:"1\u8fd0\u7b97\u89c4\u5f8b",level:3},{value:"2\u3001\u63a8\u8bba",id:"2\u63a8\u8bba",level:3},{value:"\u4e09\u3001\u6eda\u52a8\u6570\u7ec4",id:"\u4e09\u6eda\u52a8\u6570\u7ec4",level:2},{value:"\u56db\u3001\u72b6\u6001\u538b\u7f29",id:"\u56db\u72b6\u6001\u538b\u7f29",level:2}],c={toc:o};function d(n){let{components:e,...t}=n;return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u4f4d\u8fd0\u7b97"},"\u4f4d\u8fd0\u7b97"),(0,l.kt)("h2",{id:"\u4e00\u5e94\u7528"},"\u4e00\u3001\u5e94\u7528"),(0,l.kt)("h3",{id:"1\u5224\u65ad\u5947\u5076-num--1"},"1\u3001\u5224\u65ad\u5947\u5076 num & 1"),(0,l.kt)("p",null,"\u5076\u6570\u7684\u4e8c\u8fdb\u5236\u7684\u672b\u5c3e \u4e3a0\uff0c\u5947\u6570\u7684\u4e8c\u8fdb\u5236\u7684\u672b\u5c3e \u4e3a1"),(0,l.kt)("p",null,"\u6309\u4f4d\u4e0e & \u5c06\u53c2\u4e0e\u8fd0\u7b97\u7684\u4e24\u64cd\u4f5c\u6570\u5404\u5bf9\u5e94\u7684\u4e8c\u8fdb\u5236\u4f4d\u8fdb\u884c\u4e0e\u64cd\u4f5c\uff0c\u4f4d\u6570\u4e0d\u591f\u7684\u6570\u81ea\u52a8\u5728\u524d\u9762\u8865 0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5076\u6570\uff1a\u539f\u6570\u7684\u4e8c\u8fdb\u5236\u672b\u5c3e\u4e3a0\uff0c\u4e0e1\u8fdb\u884c\u6309\u4f4d\u4e0e\uff0c\u7ed3\u679c\u4e3a0\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"(finalSum & 1) == 0")),(0,l.kt)("li",{parentName:"ul"},"\u5947\u6570\uff1a\u539f\u6570\u7684\u4e8c\u8fdb\u5236\u672b\u5c3e\u4e3a1\uff0c\u4e0e1\u8fdb\u884c\u6309\u4f4d\u4e0e\uff0c\u7ed3\u679c\u4e3a1\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"(finalSum & 1) == 1"))),(0,l.kt)("p",null,"\u6ce8\u610f\u6700\u597d\u4e0d\u8981\u53bb\u5224\u65ad ",(0,l.kt)("inlineCode",{parentName:"p"},"i & 1 == 0"),"\uff0c\u8fd9\u6837\u4f1a\u6709\u95ee\u9898\uff08\u867d\u7136\u4e0d\u77e5\u9053\u4e3a\u5565\u4ea7\u751f\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>\nusing namespace std;\nint main() {\n    for (int i = 0; i < 5; i++) {\n        if (i & 1) {\n            cout << i << ", " << (i & 1) << endl;  // \u5947\u6570\n        } else {\n            cout << i << ", " << (i & 1) << endl;  // \u5076\u6570\n        }\n    }\n    // 0, 0\n    // 1, 1\n    // 2, 0\n    // 3, 1\n    // 4, 0\n    return 0;\n}\n')),(0,l.kt)("h3",{id:"2\u96642-num--1"},"2\u3001\u96642 num >> 1"),(0,l.kt)("p",null,"\u6ce8\u610f\uff1a\u7ed3\u679c\u662f\u5411\u4e0b\u53d6\u6574"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <iostream>\nusing namespace std;\nint main() {\n    cout << (1 >> 1) << endl;  // 0\n    cout << (2 >> 1) << endl;  // 1\n    cout << (3 >> 1) << endl;  // 1\n    cout << (4 >> 1) << endl;  // 2\n    cout << (5 >> 1) << endl;  // 2\n    return 0;\n}\n")),(0,l.kt)("h3",{id:"3\u4e582-num--1"},"3\u3001\u4e582 num << 1"),(0,l.kt)("p",null,"num << 1\uff0c\u76f8\u5f53\u4e8e num \u4e58\u4ee5 2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <iostream>\nusing namespace std;\nint main() {\n    cout << (1 << 1) << endl;   // 2\n    cout << (2 << 1) << endl;   // 4\n    cout << (3 << 1) << endl;   // 5\n    cout << (10 << 1) << endl;  // 20\n    cout << (23 << 1) << endl;  // 46\n    return 0;\n}\n")),(0,l.kt)("h3",{id:"42\u7684-num-\u6b21\u65b9-1--num"},"4\u30012\u7684 num \u6b21\u65b9 1 << num"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <iostream>\nusing namespace std;\nint main() {\n    cout << (1 << 1) << endl;   // 2\n    cout << (1 << 2) << endl;   // 4\n    cout << (1 << 3) << endl;   // 8\n    cout << (1 << 10) << endl;  // 1024\n    cout << (1 << 22) << endl;  // 4194304\n    return 0;\n}\n")),(0,l.kt)("h3",{id:"5\u6c42\u4e2d\u503c-l--r---l--1"},"5\u3001\u6c42\u4e2d\u503c l + ((r - l) >> 1)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"mid = (l + r) >> 1;\nmid = l + ((r - l) >> 1); // \u53ef\u9632\u6b62\u8d8a\u754c\uff0c\u63a8\u8350\u4f7f\u7528\uff0c\u6ce8\u610f\u4f4d\u8fd0\u7b97\u7b26\u7684\u4f18\u5148\u7ea7\u4f4e\n")),(0,l.kt)("h3",{id:"6\u4e24\u4e2a\u6570\u7684\u5e73\u5747\u6570-a--ba--b--1"},"6\u3001\u4e24\u4e2a\u6570\u7684\u5e73\u5747\u6570 (a & b)+((a ^ b) >> 1)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <iostream>\nusing namespace std;\n\nint average(int a, int b) {\n    return (a & b) + ((a ^ b) >> 1);\n}\n\nint main() {\n    cout << average(3, 10) << endl;  // 6\n    return 0;\n}\n")),(0,l.kt)("h3",{id:"7\u4e0d\u4f7f\u7528\u7b2c\u4e09\u4e2a\u53d8\u91cf\u7684\u60c5\u51b5\u4e0b\u4ea4\u6362\u4e24\u4e2a\u53d8\u91cf\u7684\u503c"},"7\u3001\u4e0d\u4f7f\u7528\u7b2c\u4e09\u4e2a\u53d8\u91cf\u7684\u60c5\u51b5\u4e0b\u4ea4\u6362\u4e24\u4e2a\u53d8\u91cf\u7684\u503c"),(0,l.kt)("p",null,"\u539f\u7406\uff1a\u8fd0\u7528\u5f02\u6216\u7684\u7279\u6027 a ^ b = c --\x3e c ^ a = b --\x3e c ^ b = a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <iostream>\nusing namespace std;\n\nvoid exchange(int &a, int &b) {\n    a = a ^ b;\n    b = a ^ b;  // \u76f8\u5f53\u4e8e\uff1aa0 ^ b0 ^ b0 = a0\n    a = a ^ b;  // \u76f8\u5f53\u4e8e\uff1aa0 ^ b0 ^ a0 ^ b0 ^ b0 = b0\n}\n\nint main() {\n    int a = 3;\n    int b = 5;\n    exchange(a, b);\n    cout << a << endl;  // 5\n    cout << b << endl;  // 3\n    return 0;\n}\n")),(0,l.kt)("h3",{id:"8\u4e0d\u7528\u52a0\u51cf\u4e58\u9664\u505a\u52a0\u6cd5"},"8\u3001\u4e0d\u7528\u52a0\u51cf\u4e58\u9664\u505a\u52a0\u6cd5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"step1\uff1a\u5f02\u6216\u67e5\u770b\u4e24\u4e2a\u6570\u8fdb\u884c\u52a0\u6cd5\u64cd\u4f5c\u540e\u7684\u7ed3\u679c"),(0,l.kt)("li",{parentName:"ul"},"step2\uff1a\u4e0e\u8fd0\u7b97\u8ba1\u7b97\u51fa\u60f3\u5bf9\u5e94\u7684\u4f4d\u7f6e\u7684\u8fdb\u4f4d\u7ed3\u679c\uff0c\u7136\u540e\u5de6\u79fb\u4e00\u4f4d")),(0,l.kt)("hr",null),(0,l.kt)("p",null,"\u8fd9\u9898\u4f4d\u8fd0\u7b97\u8fd8\u662f\u80cc\u4e0b\u6765\u5427\uff0c\u6bd5\u7adf\u4f4d\u8fd0\u7b97\u8fd9\u79cd\u6a21\u62df\u52a0\u6cd5\u7528\u6cd5\u57fa\u672c\u5c31\u8fd9\u9898\uff0c\u5f88\u5bb9\u6613\u5c31\u5fd8\u6389\u3002\u3002\u3002\u3002\u3002"),(0,l.kt)("p",null,"^ \u4ea6\u6216 ----\u76f8\u5f53\u4e8e \u65e0\u8fdb\u4f4d\u7684\u6c42\u548c\uff0c \u60f3\u8c6110\u8fdb\u5236\u4e0b\u7684\u6a21\u62df\u60c5\u51b5\uff1a\uff08\u5982:19+1=20\uff1b\u65e0\u8fdb\u4f4d\u6c42\u548c\u5c31\u662f10\uff0c\u800c\u975e20\uff1b\u56e0\u4e3a\u5b83\u4e0d\u7ba1\u8fdb\u4f4d\u60c5\u51b5\uff09"),(0,l.kt)("p",null,"& \u4e0e ----\u76f8\u5f53\u4e8e\u6c42\u6bcf\u4f4d\u7684\u8fdb\u4f4d\u6570\uff0c \u5148\u770b\u5b9a\u4e49\uff1a1&1=1\uff1b1&0=0\uff1b0&0=0\uff1b\u5373\u90fd\u4e3a1\u7684\u65f6\u5019\u624d\u4e3a1\uff0c\u6b63\u597d\u53ef\u4ee5\u6a21\u62df\u8fdb\u4f4d\u6570\u7684\u60c5\u51b5,\u8fd8\u662f\u60f3\u8c6110\u8fdb\u5236\u4e0b\u6a21\u62df\u60c5\u51b5\uff1a\uff089+1=10\uff0c\u5982\u679c\u662f\u7528&\u7684\u601d\u8def\u6765\u5904\u7406\uff0c\u52199+1\u5f97\u5230\u7684\u8fdb\u4f4d\u6570\u4e3a1\uff0c\u800c\u4e0d\u662f10\uff0c\u6240\u4ee5\u8981\u7528<<1\u5411\u5de6\u518d\u79fb\u52a8\u4e00\u4f4d\uff0c\u8fd9\u6837\u5c31\u53d8\u4e3a10\u4e86\uff09\uff1b"),(0,l.kt)("p",null,"\u8fd9\u6837\u516c\u5f0f\u5c31\u662f\uff1a\uff08a^b) ^ ((a&b)<<1) \u5373\uff1a\u6bcf\u6b21\u65e0\u8fdb\u4f4d\u6c42 + \u6bcf\u6b21\u5f97\u5230\u7684\u8fdb\u4f4d\u6570--------\u6211\u4eec\u9700\u8981\u4e0d\u65ad\u91cd\u590d\u8fd9\u4e2a\u8fc7\u7a0b\uff0c\u76f4\u5230\u8fdb\u4f4d\u6570\u4e3a0\u4e3a\u6b62\uff1b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <iostream>\nusing namespace std;\n\nint add(int a, int b) {\n    while (b != 0) {                         // \u5f53\u8fdb\u4f4d\u4e3a 0 \u65f6\u8df3\u51fa\n        int c = (unsigned int)(a & b) << 1;  // c = \u8fdb\u4f4d\uff0c\u8ba1\u7b97\u51fa\u60f3\u5bf9\u5e94\u7684\u4f4d\u7f6e\u7684\u8fdb\u4f4d\uff0c\u7136\u540e\u5de6\u79fb\u4e00\u4f4d\n        a ^= b;                              // a = \u975e\u8fdb\u4f4d\u548c\uff0c\u8ba1\u7b97\u51fa\u60f3\u5bf9\u5e94\u7684\u4f4d\u7f6e\u7684\u8fdb\u4f4d\uff0c\u7136\u540e\u5de6\u79fb\u4e00\u4f4d\n        b = c;                               // b = \u8fdb\u4f4d\n    }\n    return a;\n}\n// b\u4ee3\u8868\u7684\u662f\u4e24\u6570\u76f8\u52a0\u662f\u5426\u6709\u8fdb\u4f4d\uff0c\u6709\u7684\u8bdd\u5c31\u7ee7\u7eed\uff0c\u6ca1\u6709\u7684\u8bdd\u5c31\u7ed3\u675f\u5f97\u51fa\u76f8\u52a0\u540e\u7684\u7b54\u6848\n\n// \u7b80\u5199\nint add(int a, int b) {\n    if (b == 0) return a;\n    return add(a ^ b, (unsigned int)(a & b) << 1);\n}\n\nint main() {\n    cout << add(3, 5) << endl;   // 8\n    cout << add(-1, 2) << endl;  // 1\n    return 0;\n}\n")),(0,l.kt)("h3",{id:"9\u4e8c\u8fdb\u5236\u4e2d1\u7684\u4e2a\u6570"},"9\u3001\u4e8c\u8fdb\u5236\u4e2d1\u7684\u4e2a\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <iostream>\nusing namespace std;\n\nint getCnt(int num) {\n    if (num == 0 || num == 1) {\n        return num;\n    }\n    int cnt = 0;\n    while (num != 0) {\n        cnt++;\n        num = num & (num - 1);\n    }\n    return cnt;\n}\n\nint main() {\n    int n = 5;                  // 5 \u7684\u4e8c\u8fdb\u4f4d\u4e3a 101\n    cout << getCnt(n) << endl;  // 2\n    return 0;\n}\n")),(0,l.kt)("p",null,"\u89c2\u5bdf\u8fd9\u4e2a\u8fd0\u7b97\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"n & (n\u22121)"),"\uff0c\u5176\u9884\u7b97\u7ed3\u679c\u6070\u4e3a\u628a n \u7684\u4e8c\u8fdb\u5236\u4f4d\u4e2d\u7684\u6700\u4f4e\u4f4d\u7684 1 \u53d8\u4e3a 0 \u4e4b\u540e\u7684\u7ed3\u679c\u3002"),(0,l.kt)("p",null,"\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"6 & (6\u22121)=4\n6=(110)_2\n5=(101)_2\n4=(100)_2\n")),(0,l.kt)("p",null," \u8fd0\u7b97\u7ed3\u679c 4 \u5373\u4e3a\u628a 6 \u7684\u4e8c\u8fdb\u5236\u4f4d\u4e2d\u7684\u6700\u4f4e\u4f4d\u7684 1 \u53d8\u4e3a 0 \u4e4b\u540e\u7684\u7ed3\u679c\u3002"),(0,l.kt)("p",null,"\u8fd9\u6837\u6211\u4eec\u53ef\u4ee5\u5229\u7528\u8fd9\u4e2a\u4f4d\u8fd0\u7b97\u7684\u6027\u8d28\u52a0\u901f\u6211\u4eec\u7684\u68c0\u67e5\u8fc7\u7a0b\uff0c"),(0,l.kt)("p",null,"\u5728\u5b9e\u9645\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u4e0d\u65ad\u8ba9\u5f53\u524d\u7684 n \u4e0e n - 1 \u505a\u4e0e\u8fd0\u7b97\uff0c\u76f4\u5230 n \u53d8\u4e3a 0 \u5373\u53ef\u3002"),(0,l.kt)("p",null,"\u56e0\u4e3a\u6bcf\u6b21\u8fd0\u7b97\u4f1a\u4f7f\u5f97 n \u7684\u6700\u4f4e\u4f4d\u7684 1 \u88ab\u7ffb\u8f6c\uff0c\u56e0\u6b64\u8fd0\u7b97\u6b21\u6570\u5c31\u7b49\u4e8e n \u7684\u4e8c\u8fdb\u5236\u4f4d\u4e2d 1 \u7684\u4e2a\u6570\u3002"),(0,l.kt)("p",null,"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"O(logn)"),"\u3002\u5faa\u73af\u6b21\u6570\u7b49\u4e8e n \u7684\u4e8c\u8fdb\u5236\u4f4d\u4e2d 1 \u7684\u4e2a\u6570\uff0c\u6700\u574f\u60c5\u51b5\u4e0b n \u7684\u4e8c\u8fdb\u5236\u4f4d\u5168\u90e8\u4e3a 1\u3002\u6211\u4eec\u9700\u8981\u5faa\u73af",(0,l.kt)("inlineCode",{parentName:"p"},"logn")," \u6b21\u3002"),(0,l.kt)("h3",{id:"10\u8f6c\u5316\u4e3a\u4e8c\u8fdb\u5236\u56fe"},"10\u3001\u8f6c\u5316\u4e3a\u4e8c\u8fdb\u5236\u56fe"),(0,l.kt)("p",null,"\u8f6c\u5316\u4e3a\u4e8c\u8fdb\u5236\u56fe\uff0c\u7136\u540e\u6839\u636e\u4e0e\u3001\u6216\u7684\u8fd0\u7b97\u89c4\u5219\uff0c\u53bb\u6a21\u62df\u7edf\u8ba1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"1: 0 1\n0: 0 0\n2: 1 0\n1: 0 1\n3: 1 1\n")),(0,l.kt)("h3",{id:"11\u4f4d\u6570\u7edf\u8ba1"},"11\u3001\u4f4d\u6570\u7edf\u8ba1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"// \u7edf\u8ba1\u6bcf\u4e2a\u4f4d\u4e0a 1 \u7684\u4e2a\u6570\nfor (int x : nums) {\n    for (int i = 0; i < 32; i++) {\n        if (((x >> i) & 1) == 1) {\n            cnt[i]++;\n        }\n    }\n}\n// \u4ece\u4e8c\u8fdb\u5236\u8868\u793a\u6062\u590d\u6210\u5341\u8fdb\u5236\nint ans = 0;\nfor (int i = 0; i < 32; i++) {\n    if ((cnt[i] % 3 & 1) == 1) {\n        ans += (1 << i); // ans |= (1 << i); \u4e5f\u884c\n    }\n}\n")),(0,l.kt)("h3",{id:"12\u5224\u65ad\u67d0\u4e00\u4f4d\u662f\u5426\u662f1\u67d0\u4e00\u4f4d\u8d4b\u503c1"},"12\u3001\u5224\u65ad\u67d0\u4e00\u4f4d\u662f\u5426\u662f1\uff0c\u67d0\u4e00\u4f4d\u8d4b\u503c1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool isUnique(string astr) {\n        int mark = 0;\n        for (char c : astr) {\n            int move_bit = c - 'a';\n            if ((mark & (1 << move_bit)) != 0) {\n                return false;\n            } else {\n                mark = mark | (1 << move_bit);\n            }\n        }\n        return true;\n    }\n};\n")),(0,l.kt)("h2",{id:"\u4e8c\u5f02\u6216-xor"},"\u4e8c\u3001\u5f02\u6216 XOR"),(0,l.kt)("p",null,"\u53c2\u8003 1\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/102277869"},"\u795e\u7ea7\u8fd0\u7b97\u2014\u2014\u4f4d\u8fd0\u7b97")),(0,l.kt)("p",null,"\u53c2\u8003 2\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://www.zhihu.com/question/374105353"},"\u5f02\u6216\u6709\u4ec0\u4e48\u7528\uff1f")),(0,l.kt)("p",null,"\u3010\u5f02\u6216\u3011\u662f\u4e00\u4e2a\u91cd\u8981\u7684\u903b\u8f91\u8fd0\u7b97\uff0c\u5177\u4f53\u5230\u4f4d\u8fd0\u7b97\uff0c\u76f8\u540c\u4f4d\u5f02\u6216\u5f970\uff0c\u4e0d\u540c\u4f4d\u5f02\u6216\u5f971\uff0c"),(0,l.kt)("p",null,"\u76f8\u5f53\u4e8e\u6bcf\u4e2a\u4f4d\u7f6e\u6309\u4e8c\u8fdb\u5236\u8ba1\u7b97\u65b9\u5f0f\u76f8\u52a0"),(0,l.kt)("p",null,"\u516c\u5f0f\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"a ^ b = (a & ~b) | (~a & b)\n")),(0,l.kt)("p",null,"\u521d\u59cb\u503c ",(0,l.kt)("inlineCode",{parentName:"p"},"a = 0")),(0,l.kt)("h3",{id:"1\u8fd0\u7b97\u89c4\u5f8b"},"1\u3001\u8fd0\u7b97\u89c4\u5f8b"),(0,l.kt)("p",null,"\u5f52\u96f6\u5f8b\uff1a",(0,l.kt)("strong",{parentName:"p"},"\u4e24\u4e2a\u6570\u76f8\u540c\uff0c\u8fd9\u4e24\u4e2a\u6570\u5f02\u6216\u4e3a 0")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"a = b -> a ^ b = 0\na ^ a = 0\n\n4 ^ 4 = 0\n")),(0,l.kt)("p",null,"\u4ea4\u6362\u5f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"a ^ b = b ^ a\n")),(0,l.kt)("p",null,"\u7ed3\u5408\u5f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"a ^ b ^ c = (a ^ b) ^ c = (a ^ b) ^ c\n")),(0,l.kt)("p",null,"\u81ea\u53cd\u6027\uff1a\u8fde\u7eed\u548c\u540c\u4e00\u4e2a\u56e0\u5b50\u505a\u5f02\u6216\u8fd0\u7b97\u5f02\u6216\u8fd0\u7b97\uff0c\u6700\u7ec8\u7ed3\u679c\u4e3a\u81ea\u5df1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"a ^ b ^ b = a ^ 0 = a\nb ^ a ^ b = a\n\n4 ^ 3 ^ 4 = 3\n")),(0,l.kt)("p",null,"\u5f02\u6216\u7684\u8fd0\u7b97\u6cd5\u5219\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"a ^ b = c\nb ^ a = c\n\nc ^ a = b\nc ^ b = a\n\na ^ c = b\nb ^ c = a\n\n3 ^ 4 = 7\n4 ^ 3 = 7\n\n7 ^ 3 = 4\n7 ^ 4 = 3\n\n3 ^ 7 = 4\n4 ^ 7 = 3\n")),(0,l.kt)("h3",{id:"2\u63a8\u8bba"},"2\u3001\u63a8\u8bba"),(0,l.kt)("p",null,"\u7531a^b=(a&~b)|(~a&b)\u516c\u5f0f\uff0c\u8fd8\u53ef\u5f97\u5230\uff0c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5f53b=\u51681\u65f6\uff0ca^b=(a&\u51680)|(~a&\u51681)=~a\uff0c\u6b64\u65f6\u3010\u5f02\u6216\u3011\u76f8\u5f53\u4e8e\u5bf9a\u53d6\u53cd\uff08\u4e0d\u80fd\u76f4\u63a5\u5f02\u6216\u5341\u8fdb\u5236 1\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u5f53b=\u51680\u65f6\uff0ca^b=(a&\u51681)|(~a&\u51680)=a\uff0c\u6b64\u65f6\u3010\u5f02\u6216\u3011\u7ed3\u679c\u5c31\u7b49\u4e8ea\uff08\u4efb\u4f55\u6570\u5f02\u6216\u5341\u8fdb\u5236 0\uff0c\u8fd8\u662f\u672c\u8eab\uff09")),(0,l.kt)("p",null,"\u7531\u5f52\u96f6\u5f8b\uff0c\u53ef\u4ee5\u7528\u5f02\u6216\u4ea4\u7684\u4e24\u4e2a\u4e0d\u540c\u4f4d\u7f6e\u7684\u53d8\u91cfx,y\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"y=x^y\uff0c\u6b64\u65f6y=x^y\uff0cx\u503c\u4e0d\u53d8\uff1b"),(0,l.kt)("li",{parentName:"ul"},"x=y^x\uff0c\u6b64\u65f6x=(x^y)^x=y\uff0cy=x^y\uff1b"),(0,l.kt)("li",{parentName:"ul"},"y=y^x\uff0c\u6b64\u65f6y=(x^y)^y=x\uff0cx=y\uff0c\u4ea4\u6362\u5b8c\u6bd5\uff1b")),(0,l.kt)("h2",{id:"\u4e09\u6eda\u52a8\u6570\u7ec4"},"\u4e09\u3001\u6eda\u52a8\u6570\u7ec4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5728\u72b6\u6001\u8f6c\u79fb\u7684\u8fc7\u7a0b\u4e2d\u8ba1\u7b97\u300c\u67d0\u4e00\u884c\u300d\u7684\u65f6\u5019\uff0c\u53ea\u9700\u8981\u4f9d\u8d56\u300c\u524d\u4e00\u884c\u300d")),(0,l.kt)("p",null,"\u56e0\u6b64\u53ef\u4ee5\u7528\u4e00\u4e2a\u53ea\u6709\u4e24\u884c\u7684\u6570\u7ec4\u6765\u5b58\u50a8\u4e2d\u95f4\u7ed3\u679c\uff0c\u6839\u636e\u5f53\u524d\u8ba1\u7b97\u7684\u884c\u53f7\u662f\u5076\u6570\u8fd8\u662f\u5947\u6570\u6765\u4ea4\u66ff\u4f7f\u7528\u7b2c 0 \u884c\u548c\u7b2c 1 \u884c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u5076\u6570 0 2 4\n\n\u5947\u6570 1 3 5\n")),(0,l.kt)("p",null,"\u8fd9\u6837\u7684\u7a7a\u95f4\u4f18\u5316\u65b9\u6cd5\u79f0\u4e3a\u300c",(0,l.kt)("strong",{parentName:"p"},"\u6eda\u52a8\u6570\u7ec4"),"\u300d\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u5929\u7136\u7684\u5c06 cur \u548c pre \u7684\u8f6c\u79fb\u4e0e\u5947\u5076\u53d8\u5316\u76f8\u7ed3\u5408")),(0,l.kt)("p",null,"\u8fd9\u79cd\u7a7a\u95f4\u4f18\u5316\u65b9\u6cd5\u5341\u5206\u63a8\u8350\uff0c\u56e0\u4e3a\u6539\u52a8\u8d77\u6765\u6ca1\u6709\u4efb\u4f55\u601d\u7ef4\u96be\u5ea6\u3002"),(0,l.kt)("p",null,"\u53ea\u9700\u8981\u5c06\u4ee3\u8868\u884c\u7684\u7ef4\u5ea6\u4fee\u6539\u6210 2\uff0c\u5e76\u5c06\u6240\u6709\u4f7f\u7528\u884c\u7ef4\u5ea6\u7684\u5730\u65b9\u4ece ",(0,l.kt)("inlineCode",{parentName:"p"},"i")," \u6539\u6210 ",(0,l.kt)("inlineCode",{parentName:"p"},"i%2")," \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"p"},"i&1")," \u5373\u53ef"),(0,l.kt)("p",null,"\u4f8b\u5982\uff1a\u7533\u8bf7\u72b6\u6001\u6570\u7ec4 ",(0,l.kt)("inlineCode",{parentName:"p"},"dp[2]")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u521d\u59cb\u5316\u7b2c 0 \u884c\n\u5c06 dp[0 & 1] = dp[0] \u8fdb\u884c\u8bb0\u5f55\n\n\u8ba1\u7b97\u7b2c 1 \u884c\uff0c\u4f9d\u8d56\u7b2c 0 \u884c\ndp[1 & 1] = dp[1]\uff0c\u4ece dp[(1-1) & 1] = dp[0] \u83b7\u53d6\u524d\u4e00\u884c\u4fe1\u606f\n\n\u8ba1\u7b97\u7b2c 2 \u884c\uff0c\u4f9d\u8d56\u7b2c 1 \u884c\ndp[2 & 1] = dp[0]\uff0c\u4ece dp[(2-1) & 1] = dp[1] \u83b7\u53d6\u524d\u4e00\u884c\u4fe1\u606f\n\n\u8ba1\u7b97\u7b2c i \u884c\uff0c\u4f9d\u8d56\u7b2c i-1 \u884c\ndp[i & 1] = dp[a]\uff0c\u4ece dp[(i-1) & 1] = dp[b] \u83b7\u53d6\u524d\u4e00\u884c\u4fe1\u606f\n\ni \u4e3a\u5076\u6570 a = 0\uff0cb = 1\ni \u4e3a\u5947\u6570 a = 1\uff0cb = 0\n")),(0,l.kt)("h2",{id:"\u56db\u72b6\u6001\u538b\u7f29"},"\u56db\u3001\u72b6\u6001\u538b\u7f29"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u4e00\u4e2a\u4e8c\u8fdb\u5236\u6570\u8bb0\u5f55\u5f53\u524d\u54ea\u4e9b\u6570\u5df2\u88ab\u9009\uff0c\u54ea\u4e9b\u6570\u672a\u88ab\u9009\uff0c\u76ee\u7684\u662f\u4e3a\u4e86\u53ef\u4ee5\u4f7f\u7528\u4f4d\u8fd0\u7b97\u8fdb\u884c\u52a0\u901f")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5e94\u7528\uff1a\u72b6\u6001\u538b\u7f29\u53ef\u7528\u5728 dfs\u3001bfs\u3001dp \u4e2d\uff0c\u5c06\u72b6\u6001\u7ef4\u5ea6\u4ece n \u7ef4\u964d\u81f3 1 \u7ef4")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1an \u4e0d\u80fd\u592a\u5927\uff0c\u4e00\u822c\u662f 15 \u4ee5\u4e0b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u4f8b\u5982\u4e00\u4e32\u4e8c\u8fdb\u5236\u6570 000...01010\n\n\u4ee3\u8868\u503c\u4e3a 1 \u548c\u503c\u4e3a 3 \u7684\u6570\u5b57\u5df2\u7ecf\u88ab\u4f7f\u7528\u4e86\uff0c\u800c\u503c\u4e3a 0\u30012 \u7684\u8282\u70b9\u5c1a\u672a\u88ab\u4f7f\u7528\u3002\n")),(0,l.kt)("p",null,"\u300c\u72b6\u6001\u538b\u7f29\u300d\u7684\u4e00\u4e9b\u57fa\u672c\u7684\u64cd\u4f5c\uff1a\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," \u4e2a\u8282\u70b9\uff0c\u53d8\u91cf ",(0,l.kt)("inlineCode",{parentName:"p"},"state")," \u5b58\u653e\u4e86\u300c\u5f53\u524d\u8282\u70b9\u7684\u4f7f\u7528\u60c5\u51b5\u300d"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u603b\u7684 state \u6570\u91cf\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"1 << n"),"\uff0c\u4e00\u4e2a\u8282\u70b9\u5bf9\u5e94\u4e86\u9009\u6216\u4e0d\u9009\uff0c\u6240\u4ee5\u6709 2^n \u79cd\u53ef\u80fd"),(0,l.kt)("li",{parentName:"ul"},"\u8bb0\u5f55 num \u7528\u8fc7\u4e86\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"state = (1 << num) | state")),(0,l.kt)("li",{parentName:"ul"},"\u5224\u65ad num \u6709\u6ca1\u6709\u7528\u8fc7\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"((state >> num) & 1) == 0"),"\uff0c\u7b49\u4e8e 0 \u6ca1\u7528\u8fc7\uff0c\u5927\u4e8e 0 \u7528\u8fc7\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"(1 << num) & state) == 0")," \u4e5f\u884c\uff0c\u4f46\u524d\u8005\u66f4\u597d\u7406\u89e3"),(0,l.kt)("li",{parentName:"ul"},"\u67e5\u770b\u9009\u62e9 num \u4e4b\u524d\u7684 state\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"state & (~(1 << num))")),(0,l.kt)("li",{parentName:"ul"},"\u5224\u65ad\u5f53\u524d state \u662f\u5426\u5c06\u6240\u6709\u7684\u8282\u70b9\u90fd\u8d70\u8fc7\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"state == (1 << n) - 1"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <iostream>\n#include <string>\n#include <vector>\n\nusing namespace std;\n\nstring dec_to_bin(int dec) {\n    vector<int> binL;\n    while (dec != 0) {\n        binL.push_back(dec % 2);\n        dec = dec / 2;\n    }\n    // \u7ed3\u679c\u662f\u9006\u5e8f\u7684\uff0c\u9700\u8981\u53cd\u8fc7\u6765\n    reverse(binL.begin(), binL.end());\n\n    string bin;\n    for (int b : binL) {\n        bin += b + 48;\n    }\n    return bin;\n}\n\nint main() {\n    int state = 0;  // \u8bb0\u5f55\u7528\u8fc7\u7684\u6570\uff0c\u521d\u59cb\u65f6\u4e3a0\n    int n = 4;      // \u6709 4 \u4e2a\u8282\u70b9\n\n    cout << (1 << n) << endl;  // 16 \u79cd\u53ef\u80fd\n\n    int idx = 2;\n    cout << ((1 << idx) & state) << endl;  // \u68c0\u67e5 \u8282\u70b92 \u6709\u6ca1\u6709\u88ab\u7528\u8fc7\uff0c0 \u6ca1\u6709\n    state = (1 << idx) | state;            // \u5c06 \u8282\u70b92 \u8bb0\u5f55\u5728 state \u8fd9\u4e2a\u6570\u4e2d\uff0c\u4f20\u9012\u4e0b\u53bb\n    cout << dec_to_bin(state) << endl;     // 100\n    cout << ((state >> idx) & 1) << endl;  // \u68c0\u67e5 \u8282\u70b92 \u6709\u6ca1\u6709\u88ab\u7528\u8fc7\uff0c1 \u7528\u8fc7\n\n    idx = 3;\n    cout << ((state >> idx) & 1) << endl;  // \u68c0\u67e5 \u8282\u70b93 \u6709\u6ca1\u6709\u88ab\u7528\u8fc7\uff0c0 \u6ca1\u6709\n    state = (1 << idx) | state;            // \u5c06 \u8282\u70b94 \u8bb0\u5f55\u5728 state \u8fd9\u4e2a\u6570\u4e2d\uff0c\u4f20\u9012\u4e0b\u53bb\n    cout << dec_to_bin(state) << endl;     // 1100\n\n    int pre = state & (~(1 << idx));  // \u67e5\u770b\u8bb0\u5f55 \u8282\u70b93 \u4e4b\u524d\u7684 state\n    cout << dec_to_bin(pre) << endl;  // 100\n\n    idx = 1;\n    state = (1 << idx) | state;  // \u5c06 \u8282\u70b91 \u8bb0\u5f55\u5728 state \u8fd9\u4e2a\u6570\u4e2d\uff0c\u4f20\u9012\u4e0b\u53bb\n    idx = 0;\n    state = (1 << idx) | state;         // \u5c06 \u8282\u70b90 \u8bb0\u5f55\u5728 state \u8fd9\u4e2a\u6570\u4e2d\uff0c\u4f20\u9012\u4e0b\u53bb\n    cout << dec_to_bin(state) << endl;  // 1111\n\n    cout << dec_to_bin((1 << n) - 1) << endl;  // 1111\n\n    return 0;\n}\n\n")))}d.isMDXComponent=!0}}]);