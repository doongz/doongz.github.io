"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[28521],{3905:(r,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>f});var t=n(67294);function a(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function i(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.push.apply(n,t)}return n}function o(r){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(r,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}))}return r}function u(r,e){if(null==r)return{};var n,t,a=function(r,e){if(null==r)return{};var n,t,a={},i=Object.keys(r);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||(a[n]=r[n]);return a}(r,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(r,n)&&(a[n]=r[n])}return a}var c=t.createContext({}),l=function(r){var e=t.useContext(c),n=e;return r&&(n="function"==typeof r?r(e):o(o({},e),r)),n},m=function(r){var e=l(r.components);return t.createElement(c.Provider,{value:e},r.children)},s="mdxType",p={inlineCode:"code",wrapper:function(r){var e=r.children;return t.createElement(t.Fragment,{},e)}},d=t.forwardRef((function(r,e){var n=r.components,a=r.mdxType,i=r.originalType,c=r.parentName,m=u(r,["components","mdxType","originalType","parentName"]),s=l(n),d=a,f=s["".concat(c,".").concat(d)]||s[d]||p[d]||i;return n?t.createElement(f,o(o({ref:e},m),{},{components:n})):t.createElement(f,o({ref:e},m))}));function f(r,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof r||a){var i=n.length,o=new Array(i);o[0]=d;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=r,u[s]="string"==typeof r?r:a,o[1]=u;for(var l=2;l<i;l++)o[l]=n[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60836:(r,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var t=n(87462),a=(n(67294),n(3905));const i={},o=void 0,u={unversionedId:"Algorithm/\u6570\u5b66/\u6570\u5b66\u8fd0\u7b97/num\u548carr\u4e92\u8f6c",id:"Algorithm/\u6570\u5b66/\u6570\u5b66\u8fd0\u7b97/num\u548carr\u4e92\u8f6c",title:"num\u548carr\u4e92\u8f6c",description:"1\u3001num->arr\uff08\u77ed\u9664\u6cd5\uff09",source:"@site/docs/Algorithm/5-\u6570\u5b66/1-\u6570\u5b66\u8fd0\u7b97/01-num\u548carr\u4e92\u8f6c.md",sourceDirName:"Algorithm/5-\u6570\u5b66/1-\u6570\u5b66\u8fd0\u7b97",slug:"/Algorithm/\u6570\u5b66/\u6570\u5b66\u8fd0\u7b97/num\u548carr\u4e92\u8f6c",permalink:"/docs/Algorithm/\u6570\u5b66/\u6570\u5b66\u8fd0\u7b97/num\u548carr\u4e92\u8f6c",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"docsSidebar",previous:{title:"<\u6b27\u62c9\u8def\u5f84>-\u5408\u6cd5\u91cd\u65b0\u6392\u5217\u6570\u5bf9",permalink:"/docs/Algorithm/\u56fe\u8bba/\u4f8b\u9898-\u6b27\u62c9\u56fe/<\u6b27\u62c9\u8def\u5f84>-\u5408\u6cd5\u91cd\u65b0\u6392\u5217\u6570\u5bf9"},next:{title:"\u8fdb\u5236\u8f6c\u6362",permalink:"/docs/Algorithm/\u6570\u5b66/\u6570\u5b66\u8fd0\u7b97/\u8fdb\u5236\u8f6c\u6362"}},c={},l=[{value:"1\u3001num-&gt;arr\uff08\u77ed\u9664\u6cd5\uff09",id:"1num-arr\u77ed\u9664\u6cd5",level:2},{value:"2\u3001arr-&gt;num",id:"2arr-num",level:2}],m={toc:l};function s(r){let{components:e,...n}=r;return(0,a.kt)("wrapper",(0,t.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1num-arr\u77ed\u9664\u6cd5"},"1\u3001num->arr\uff08\u77ed\u9664\u6cd5\uff09"),(0,a.kt)("p",null,"\u7b54\u6848\u9006\u5e8f\u6570\u5904"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},'#include <algorithm>  // reverse()\n#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<int> num_to_arr(int num) {\n    vector<int> arr;\n    while (num != 0) {\n        arr.push_back(num % 10);\n        num /= 10;\n    }\n    // \u6570\u7ec4\u662f\u9006\u5411\u7684\n    reverse(arr.begin(), arr.end());\n    return arr;\n}\n\nint main() {\n    int num = 12345;\n    vector<int> arr = num_to_arr(num);\n\n    for (int a : arr) {\n        cout << a << " ";\n    }  // 1 2 3 4 5\n    return 0;\n}\n')),(0,a.kt)("h2",{id:"2arr-num"},"2\u3001arr->num"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},"#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint array_to_num(vector<int> &arr) {\n    int num = 0;\n    int weight = 1;\n    for (int i = arr.size() - 1; i >= 0; i--) {\n        num += arr[i] * weight;\n        weight *= 10;\n    }\n    return num;\n}\n\nint main() {\n    vector<int> arr = {1, 2, 3, 4, 5};\n    int num = array_to_num(arr);\n    cout << num << endl;  // 12345\n    return 0;\n}\n")),(0,a.kt)("h2",{id:""}))}s.isMDXComponent=!0}}]);