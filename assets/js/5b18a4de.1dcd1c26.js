"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[62335],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>s});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),d=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(o.Provider,{value:n},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),k=d(t),m=l,s=k["".concat(o,".").concat(m)]||k[m]||u[m]||i;return t?a.createElement(s,r(r({ref:n},c),{},{components:t})):a.createElement(s,r({ref:n},c))}));function s(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=m;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[k]="string"==typeof e?e:l,r[1]=p;for(var d=2;d<i;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},34990:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=t(87462),l=(t(67294),t(3905));const i={},r="LRU \u7f13\u5b58\u5b9e\u73b0",p={unversionedId:"Algorithm/\u7cfb\u5217\u9898\u76ee/\u8bbe\u8ba1\u6570\u636e\u7ed3\u6784/LRU\u7f13\u5b58\u5b9e\u73b0",id:"Algorithm/\u7cfb\u5217\u9898\u76ee/\u8bbe\u8ba1\u6570\u636e\u7ed3\u6784/LRU\u7f13\u5b58\u5b9e\u73b0",title:"LRU \u7f13\u5b58\u5b9e\u73b0",description:"\u9898\u76ee\uff1a146. LRU \u7f13\u5b58",source:"@site/docs/Algorithm/6-\u7cfb\u5217\u9898\u76ee/08-\u8bbe\u8ba1\u6570\u636e\u7ed3\u6784/146-LRU\u7f13\u5b58\u5b9e\u73b0.md",sourceDirName:"Algorithm/6-\u7cfb\u5217\u9898\u76ee/08-\u8bbe\u8ba1\u6570\u636e\u7ed3\u6784",slug:"/Algorithm/\u7cfb\u5217\u9898\u76ee/\u8bbe\u8ba1\u6570\u636e\u7ed3\u6784/LRU\u7f13\u5b58\u5b9e\u73b0",permalink:"/docs/Algorithm/\u7cfb\u5217\u9898\u76ee/\u8bbe\u8ba1\u6570\u636e\u7ed3\u6784/LRU\u7f13\u5b58\u5b9e\u73b0",draft:!1,tags:[],version:"current",sidebarPosition:146,frontMatter:{},sidebar:"algorithmSidebar",previous:{title:"\u516c\u5e73\u5206\u53d1\u997c\u5e72",permalink:"/docs/Algorithm/\u7cfb\u5217\u9898\u76ee/\u5b50\u96c6\u5212\u5206\u95ee\u9898/\u516c\u5e73\u5206\u53d1\u997c\u5e72"},next:{title:"\u6700\u5c0f\u6808",permalink:"/docs/Algorithm/\u7cfb\u5217\u9898\u76ee/\u8bbe\u8ba1\u6570\u636e\u7ed3\u6784/\u6700\u5c0f\u6808"}},o={},d=[{value:"\u4e00\u3001LRU \u7b97\u6cd5\u63cf\u8ff0",id:"\u4e00lru-\u7b97\u6cd5\u63cf\u8ff0",level:2},{value:"\u4e8c\u3001LRU \u7b97\u6cd5\u8bbe\u8ba1",id:"\u4e8clru-\u7b97\u6cd5\u8bbe\u8ba1",level:2},{value:"\u4e09\u3001\u4ee3\u7801\u5b9e\u73b0",id:"\u4e09\u4ee3\u7801\u5b9e\u73b0",level:2},{value:"1\u3001\u5b9e\u73b0\u53cc\u5411\u94fe\u8868\u7684\u8282\u70b9",id:"1\u5b9e\u73b0\u53cc\u5411\u94fe\u8868\u7684\u8282\u70b9",level:3},{value:"2\u3001\u5b9e\u73b0\u53cc\u5411\u94fe\u8868",id:"2\u5b9e\u73b0\u53cc\u5411\u94fe\u8868",level:3},{value:"3\u3001\u62bd\u8c61API\u5b9e\u73b0",id:"3\u62bd\u8c61api\u5b9e\u73b0",level:3},{value:"4\u3001\u5b9e\u73b0 get \u548c put",id:"4\u5b9e\u73b0-get-\u548c-put",level:3},{value:"5\u3001\u5408\u5e76\u4e0a\u8ff0\u5b9e\u73b0",id:"5\u5408\u5e76\u4e0a\u8ff0\u5b9e\u73b0",level:3},{value:"6\u3001\u7cbe\u7b80\u5b9e\u73b0\uff08\u63a8\u8350\u4f7f\u7528\uff09",id:"6\u7cbe\u7b80\u5b9e\u73b0\u63a8\u8350\u4f7f\u7528",level:3},{value:"7\u3001\u501f\u7528 list \u5b9e\u73b0",id:"7\u501f\u7528-list-\u5b9e\u73b0",level:3}],c={toc:d};function k(e){let{components:n,...i}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"lru-\u7f13\u5b58\u5b9e\u73b0"},"LRU \u7f13\u5b58\u5b9e\u73b0"),(0,l.kt)("p",null,"\u9898\u76ee\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/lru-cache/"},"146. LRU \u7f13\u5b58")),(0,l.kt)("p",null,"\u9898\u89e3\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/lru-cache/solution/lru-ce-lue-xiang-jie-he-shi-xian-by-labuladong/"},"LRU \u7b56\u7565\u8be6\u89e3\u548c\u5b9e\u73b0")),(0,l.kt)("p",null,"LRU \u7b97\u6cd5\u5c31\u662f\u4e00\u79cd\u7f13\u5b58\u6dd8\u6c70\u7b56\u7565"),(0,l.kt)("p",null,"\u8ba1\u7b97\u673a\u7684\u7f13\u5b58\u5bb9\u91cf\u6709\u9650\uff0c\u5982\u679c\u7f13\u5b58\u6ee1\u4e86\u5c31\u8981\u5220\u9664\u4e00\u4e9b\u5185\u5bb9\uff0c\u7ed9\u65b0\u5185\u5bb9\u817e\u4f4d\u7f6e\u3002\u4f46\u95ee\u9898\u662f\uff0c\u5220\u9664\u54ea\u4e9b\u5185\u5bb9\u5462\uff1f\u6211\u4eec\u80af\u5b9a\u5e0c\u671b\u5220\u6389\u54ea\u4e9b\u6ca1\u4ec0\u4e48\u7528\u7684\u7f13\u5b58\uff0c\u800c\u628a\u6709\u7528\u7684\u6570\u636e\u7ee7\u7eed\u7559\u5728\u7f13\u5b58\u91cc\uff0c\u65b9\u4fbf\u4e4b\u540e\u7ee7\u7eed\u4f7f\u7528\u3002\u90a3\u4e48\uff0c\u4ec0\u4e48\u6837\u7684\u6570\u636e\uff0c\u6211\u4eec\u5224\u5b9a\u4e3a\u300c\u6709\u7528\u7684\u300d\u7684\u6570\u636e\u5462\uff1f"),(0,l.kt)("p",null,"LRU \u7f13\u5b58\u6dd8\u6c70\u7b97\u6cd5\u5c31\u662f\u4e00\u79cd\u5e38\u7528\u7b56\u7565\u3002",(0,l.kt)("strong",{parentName:"p"},"LRU \u7684\u5168\u79f0\u662f Least Recently Used\uff0c\u4e5f\u5c31\u662f\u8bf4\u6211\u4eec\u8ba4\u4e3a\u6700\u8fd1\u4f7f\u7528\u8fc7\u7684\u6570\u636e\u5e94\u8be5\u662f\u662f\u300c\u6709\u7528\u7684\u300d\uff0c\u5f88\u4e45\u90fd\u6ca1\u7528\u8fc7\u7684\u6570\u636e\u5e94\u8be5\u662f\u65e0\u7528\u7684\uff0c\u5185\u5b58\u6ee1\u4e86\u5c31\u4f18\u5148\u5220\u90a3\u4e9b\u5f88\u4e45\u6ca1\u7528\u8fc7\u7684\u6570\u636e"),"\u3002"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"\u56e0\u6b64\u5bf9\u4e8e LRU \u6211\u4eec\u53ea\u9700\u8981\u5728\u4f7f\u7528\u300c\u54c8\u5e0c\u8868\u300d\u7684\u540c\u65f6\uff0c\u7ef4\u62a4\u4e00\u4e2a\u300c\u53cc\u5411\u94fe\u8868\u300d\u5373\u53ef\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u300c\u53cc\u5411\u94fe\u8868\u300d\u5934\u90e8\u4e3a\u521a\u4f7f\u7528\u7684\uff0c\u5c3e\u90e8\u6700\u8fd1\u6ca1\u4f7f\u7528\u7684\uff08\u53cd\u7740\u6765\u4e5f\u884c\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u6b21\u53d1\u751f get \u6216 put \u7684\u65f6\u5019\u5c31\u5c06\u5143\u7d20\u5b58\u653e\u53cc\u5411\u94fe\u8868\u5934\u90e8"),(0,l.kt)("li",{parentName:"ul"},"\u5f53\u9700\u8981\u79fb\u9664\u5143\u7d20\u65f6\uff0c\u5219\u4ece\u53cc\u5411\u94fe\u8868\u5c3e\u90e8\u5f00\u59cb\u79fb\u9664")),(0,l.kt)("h2",{id:"\u4e00lru-\u7b97\u6cd5\u63cf\u8ff0"},"\u4e00\u3001LRU \u7b97\u6cd5\u63cf\u8ff0"),(0,l.kt)("p",null,"\u8bf7\u4f60\u8bbe\u8ba1\u5e76\u5b9e\u73b0\u4e00\u4e2a\u6ee1\u8db3 ",(0,l.kt)("a",{parentName:"p",href:"https://baike.baidu.com/item/LRU"},"LRU (\u6700\u8fd1\u6700\u5c11\u4f7f\u7528) \u7f13\u5b58")," \u7ea6\u675f\u7684\u6570\u636e\u7ed3\u6784"),(0,l.kt)("p",null,"\u5b9e\u73b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"LRUCache")," \u7c7b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LRUCache(int capacity)")," \u4ee5 ",(0,l.kt)("strong",{parentName:"li"},"\u6b63\u6574\u6570")," \u4f5c\u4e3a\u5bb9\u91cf ",(0,l.kt)("inlineCode",{parentName:"li"},"capacity")," \u521d\u59cb\u5316 LRU \u7f13\u5b58"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"int get(int key)")," \u5982\u679c\u5173\u952e\u5b57 ",(0,l.kt)("inlineCode",{parentName:"li"},"key")," \u5b58\u5728\u4e8e\u7f13\u5b58\u4e2d\uff0c\u5219\u8fd4\u56de\u5173\u952e\u5b57\u7684\u503c\uff0c\u5426\u5219\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"li"},"-1")," \u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"void put(int key, int value)")," ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u5173\u952e\u5b57 ",(0,l.kt)("inlineCode",{parentName:"li"},"key")," \u5df2\u7ecf\u5b58\u5728\uff0c\u5219\u53d8\u66f4\u5176\u6570\u636e\u503c ",(0,l.kt)("inlineCode",{parentName:"li"},"value")," \uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e0d\u5b58\u5728\uff0c\u5219\u5411\u7f13\u5b58\u4e2d\u63d2\u5165\u8be5\u7ec4 ",(0,l.kt)("inlineCode",{parentName:"li"},"key-value")," \u3002\u5982\u679c\u63d2\u5165\u64cd\u4f5c\u5bfc\u81f4\u5173\u952e\u5b57\u6570\u91cf\u8d85\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"li"},"capacity"),"\uff0c\u5219\u5e94\u8be5 ",(0,l.kt)("strong",{parentName:"li"},"\u9010\u51fa")," \u6700\u4e45\u672a\u4f7f\u7528\u7684\u5173\u952e\u5b57\u3002")))),(0,l.kt)("p",null,"\u51fd\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"get")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"put")," \u5fc5\u987b\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"O(1)")," \u7684\u5e73\u5747\u65f6\u95f4\u590d\u6742\u5ea6\u8fd0\u884c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'\u8f93\u5165\n["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]\n[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]\n\u8f93\u51fa\n[null, null, null, 1, null, -1, null, -1, 3, 4]\n\u89e3\u91ca\nLRUCache lRUCache = new LRUCache(2);\nlRUCache.put(1, 1); // \u7f13\u5b58\u662f {1=1}\nlRUCache.put(2, 2); // \u7f13\u5b58\u662f {1=1, 2=2}\nlRUCache.get(1);    // \u8fd4\u56de 1\nlRUCache.put(3, 3); // \u8be5\u64cd\u4f5c\u4f1a\u4f7f\u5f97\u5173\u952e\u5b57 2 \u4f5c\u5e9f\uff0c\u7f13\u5b58\u662f {1=1, 3=3}\nlRUCache.get(2);    // \u8fd4\u56de -1 (\u672a\u627e\u5230)\nlRUCache.put(4, 4); // \u8be5\u64cd\u4f5c\u4f1a\u4f7f\u5f97\u5173\u952e\u5b57 1 \u4f5c\u5e9f\uff0c\u7f13\u5b58\u662f {4=4, 3=3}\nlRUCache.get(1);    // \u8fd4\u56de -1 (\u672a\u627e\u5230)\nlRUCache.get(3);    // \u8fd4\u56de 3\nlRUCache.get(4);    // \u8fd4\u56de 4\n')),(0,l.kt)("p",null,"\u63d0\u793a\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"1 <= capacity <= 3000"),(0,l.kt)("li",{parentName:"ul"},"0 <= key <= 10000"),(0,l.kt)("li",{parentName:"ul"},"0 <= value <= 105"),(0,l.kt)("li",{parentName:"ul"},"\u6700\u591a\u8c03\u7528 2 * 10^5 \u6b21 get \u548c put")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u4e8clru-\u7b97\u6cd5\u8bbe\u8ba1"},"\u4e8c\u3001LRU \u7b97\u6cd5\u8bbe\u8ba1"),(0,l.kt)("p",null,"\u5206\u6790\u4e0a\u9762\u7684\u64cd\u4f5c\u8fc7\u7a0b\uff0c\u8981\u8ba9 ",(0,l.kt)("inlineCode",{parentName:"p"},"put")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"get")," \u65b9\u6cd5\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a O(1)\uff0c\u6211\u4eec\u53ef\u4ee5\u603b\u7ed3\u51fa ",(0,l.kt)("inlineCode",{parentName:"p"},"cache")," \u8fd9\u4e2a\u6570\u636e\u7ed3\u6784\u5fc5\u8981\u7684\u6761\u4ef6\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u663e\u7136 ",(0,l.kt)("inlineCode",{parentName:"li"},"cache")," \u4e2d\u7684\u5143\u7d20\u5fc5\u987b\u6709\u65f6\u5e8f\uff0c\u4ee5\u533a\u5206\u6700\u8fd1\u4f7f\u7528\u7684\u548c\u4e45\u672a\u4f7f\u7528\u7684\u6570\u636e\uff0c\u5f53\u5bb9\u91cf\u6ee1\u4e86\u4e4b\u540e\u8981\u5220\u9664\u6700\u4e45\u672a\u4f7f\u7528\u7684\u90a3\u4e2a\u5143\u7d20\u817e\u4f4d\u7f6e\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6211\u4eec\u8981\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"cache")," \u4e2d\u5feb\u901f\u627e\u67d0\u4e2a ",(0,l.kt)("inlineCode",{parentName:"li"},"key")," \u662f\u5426\u5df2\u5b58\u5728\u5e76\u5f97\u5230\u5bf9\u5e94\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"val"),"\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u6bcf\u6b21\u8bbf\u95ee ",(0,l.kt)("inlineCode",{parentName:"li"},"cache")," \u4e2d\u7684\u67d0\u4e2a ",(0,l.kt)("inlineCode",{parentName:"li"},"key"),"\uff0c\u9700\u8981\u5c06\u8fd9\u4e2a\u5143\u7d20\u53d8\u4e3a\u6700\u8fd1\u4f7f\u7528\u7684\uff0c\u4e5f\u5c31\u662f\u8bf4 ",(0,l.kt)("inlineCode",{parentName:"li"},"cache")," \u8981\u652f\u6301\u5728\u4efb\u610f\u4f4d\u7f6e\u5feb\u901f\u63d2\u5165\u548c\u5220\u9664\u5143\u7d20\u3002")),(0,l.kt)("p",null,"\u90a3\u4e48\uff0c\u4ec0\u4e48\u6570\u636e\u7ed3\u6784\u540c\u65f6\u7b26\u5408\u4e0a\u8ff0\u6761\u4ef6\u5462\uff1f\u54c8\u5e0c\u8868\u67e5\u627e\u5feb\uff0c\u4f46\u662f\u6570\u636e\u65e0\u56fa\u5b9a\u987a\u5e8f\uff1b\u94fe\u8868\u6709\u987a\u5e8f\u4e4b\u5206\uff0c\u63d2\u5165\u5220\u9664\u5feb\uff0c\u4f46\u662f\u67e5\u627e\u6162\u3002\u6240\u4ee5\u7ed3\u5408\u4e00\u4e0b\uff0c\u5f62\u6210\u4e00\u79cd\u65b0\u7684\u6570\u636e\u7ed3\u6784\uff1a\u54c8\u5e0c\u94fe\u8868 LinkedHashMap\u3002"),(0,l.kt)("p",null,"LRU \u7f13\u5b58\u7b97\u6cd5\u7684\u6838\u5fc3\u6570\u636e\u7ed3\u6784\u5c31\u662f\u54c8\u5e0c\u94fe\u8868\uff0c\u53cc\u5411\u94fe\u8868\u548c\u54c8\u5e0c\u8868\u7684\u7ed3\u5408\u4f53\u3002\u8fd9\u4e2a\u6570\u636e\u7ed3\u6784\u957f\u8fd9\u6837\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"146-1",src:t(6426).Z,width:"879",height:"596"})),(0,l.kt)("p",null,"\u501f\u52a9\u8fd9\u4e2a\u7ed3\u6784\uff0c\u6211\u4eec\u6765\u9010\u4e00\u5206\u6790\u4e0a\u9762\u7684 3 \u4e2a\u6761\u4ef6\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u6211\u4eec\u6bcf\u6b21\u9ed8\u8ba4\u4ece\u94fe\u8868\u5c3e\u90e8\u6dfb\u52a0\u5143\u7d20\uff0c\u90a3\u4e48\u663e\u7136\u8d8a\u9760\u5c3e\u90e8\u7684\u5143\u7d20\u5c31\u662f\u6700\u8fd1\u4f7f\u7528\u7684\uff0c\u8d8a\u9760\u5934\u90e8\u7684\u5143\u7d20\u5c31\u662f\u6700\u4e45\u672a\u4f7f\u7528\u7684\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5bf9\u4e8e\u67d0\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"li"},"key"),"\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u54c8\u5e0c\u8868\u5feb\u901f\u5b9a\u4f4d\u5230\u94fe\u8868\u4e2d\u7684\u8282\u70b9\uff0c\u4ece\u800c\u53d6\u5f97\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"li"},"val"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u94fe\u8868\u663e\u7136\u662f\u652f\u6301\u5728\u4efb\u610f\u4f4d\u7f6e\u5feb\u901f\u63d2\u5165\u548c\u5220\u9664\u7684\uff0c\u6539\u6539\u6307\u9488\u5c31\u884c\u3002\u53ea\u4e0d\u8fc7\u4f20\u7edf\u7684\u94fe\u8868\u65e0\u6cd5\u6309\u7167\u7d22\u5f15\u5feb\u901f\u8bbf\u95ee\u67d0\u4e00\u4e2a\u4f4d\u7f6e\u7684\u5143\u7d20\uff0c\u800c\u8fd9\u91cc\u501f\u52a9\u54c8\u5e0c\u8868\uff0c\u53ef\u4ee5\u901a\u8fc7 key \u5feb\u901f\u6620\u5c04\u5230\u4efb\u610f\u4e00\u4e2a\u94fe\u8868\u8282\u70b9\uff0c\u7136\u540e\u8fdb\u884c\u63d2\u5165\u548c\u5220\u9664\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4e5f\u8bb8\u8bfb\u8005\u4f1a\u95ee\uff0c\u4e3a\u4ec0\u4e48\u8981\u662f\u53cc\u5411\u94fe\u8868\uff0c\u5355\u94fe\u8868\u884c\u4e0d\u884c\uff1f\u53e6\u5916\uff0c\u65e2\u7136\u54c8\u5e0c\u8868\u4e2d\u5df2\u7ecf\u5b58\u4e86 ",(0,l.kt)("inlineCode",{parentName:"strong"},"key"),"\uff0c\u4e3a\u4ec0\u4e48\u94fe\u8868\u4e2d\u8fd8\u8981\u5b58 ",(0,l.kt)("inlineCode",{parentName:"strong"},"key")," \u548c ",(0,l.kt)("inlineCode",{parentName:"strong"},"val")," \u5462\uff0c\u53ea\u5b58 ",(0,l.kt)("inlineCode",{parentName:"strong"},"val")," \u4e0d\u5c31\u884c\u4e86"),"\uff1f"),(0,l.kt)("p",null,"\u5f80\u4e0b\u770b\u4ee3\u7801\u5b9e\u73b0"),(0,l.kt)("h2",{id:"\u4e09\u4ee3\u7801\u5b9e\u73b0"},"\u4e09\u3001\u4ee3\u7801\u5b9e\u73b0"),(0,l.kt)("h3",{id:"1\u5b9e\u73b0\u53cc\u5411\u94fe\u8868\u7684\u8282\u70b9"},"1\u3001\u5b9e\u73b0\u53cc\u5411\u94fe\u8868\u7684\u8282\u70b9"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u628a\u53cc\u94fe\u8868\u7684\u8282\u70b9\u7c7b\u5199\u51fa\u6765\uff0c\u4e3a\u4e86\u7b80\u5316\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"key")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"val")," \u90fd\u8ba4\u4e3a\u662f int \u7c7b\u578b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"class Node {\npublic:\n    int key;\n    int val;\n    Node *next;\n    Node *prev;\n    Node(int k, int v) : key(k), val(v), next(nullptr), prev(nullptr) {}\n};\n")),(0,l.kt)("h3",{id:"2\u5b9e\u73b0\u53cc\u5411\u94fe\u8868"},"2\u3001\u5b9e\u73b0\u53cc\u5411\u94fe\u8868"),(0,l.kt)("p",null,"\u7136\u540e\u4f9d\u9760\u6211\u4eec\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Node")," \u7c7b\u578b\u6784\u5efa\u4e00\u4e2a\u53cc\u94fe\u8868\uff0c\u5b9e\u73b0\u51e0\u4e2a LRU \u7b97\u6cd5\u5fc5\u987b\u7684 API\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"class DoubleList {\nprivate:\n    Node *head;  // \u5934\u865a\u8282\u70b9\n    Node *tail;  // \u5c3e\u865a\u8282\u70b9\n    int sz;      // \u94fe\u8868\u5143\u7d20\u6570\npublic:\n    DoubleList() {\n        // \u521d\u59cb\u5316\u53cc\u5411\u94fe\u8868\u7684\u6570\u636e\n        head = new Node(0, 0);\n        tail = new Node(0, 0);\n        head->next = tail;\n        tail->prev = head;\n        sz = 0;\n    }\n    // \u5728\u94fe\u8868\u5c3e\u90e8\u6dfb\u52a0\u8282\u70b9 x\uff0c\u65f6\u95f4 O(1)\n    void addLast(Node *x) {\n        x->prev = tail->prev;\n        x->next = tail;\n        tail->prev->next = x;\n        tail->prev = x;\n        sz++;\n    }\n    // \u5220\u9664\u94fe\u8868\u4e2d\u7684 x \u8282\u70b9\uff08x \u4e00\u5b9a\u5b58\u5728\uff09\n    // \u7531\u4e8e\u662f\u53cc\u94fe\u8868\u4e14\u7ed9\u7684\u662f\u76ee\u6807 Node \u8282\u70b9\uff0c\u65f6\u95f4 O(1)\n    void remove(Node *x) {\n        x->prev->next = x->next;\n        x->next->prev = x->prev;\n        sz--;\n    }\n    // \u5220\u9664\u94fe\u8868\u4e2d\u7b2c\u4e00\u4e2a\u8282\u70b9\uff0c\u5e76\u8fd4\u56de\u8be5\u8282\u70b9\uff0c\u65f6\u95f4 O(1)\n    Node *removeFirst() {\n        if (head->next == tail) return nullptr;\n        Node *first = head->next;\n        remove(first);\n        return first;\n    }\n    // \u8fd4\u56de\u94fe\u8868\u957f\u5ea6\uff0c\u65f6\u95f4 O(1)\n    int size() {\n        return sz;\n    }\n};\n")),(0,l.kt)("p",null,"\u56de\u7b54\u300c\u4e3a\u4ec0\u4e48\u5fc5\u987b\u8981\u7528\u53cc\u5411\u94fe\u8868\u300d\uff0c\u56e0\u4e3a\u6211\u4eec\u9700\u8981\u5220\u9664\u64cd\u4f5c\u3002\u5220\u9664\u4e00\u4e2a\u8282\u70b9\u4e0d\u5149\u8981\u5f97\u5230\u8be5\u8282\u70b9\u672c\u8eab\u7684\u6307\u9488\uff0c\u4e5f\u9700\u8981\u64cd\u4f5c\u5176\u524d\u9a71\u8282\u70b9\u7684\u6307\u9488\uff0c\u800c\u53cc\u5411\u94fe\u8868\u624d\u80fd\u652f\u6301\u76f4\u63a5\u67e5\u627e\u524d\u9a71\uff0c\u4fdd\u8bc1\u64cd\u4f5c\u7684\u65f6\u95f4\u590d\u6742\u5ea6 O(1)\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f\u6211\u4eec\u5b9e\u73b0\u7684\u53cc\u94fe\u8868 API \u53ea\u80fd\u4ece\u5c3e\u90e8\u63d2\u5165\uff0c\u4e5f\u5c31\u662f\u8bf4\u9760\u5c3e\u90e8\u7684\u6570\u636e\u662f\u6700\u8fd1\u4f7f\u7528\u7684\uff0c\u9760\u5934\u90e8\u7684\u6570\u636e\u662f\u6700\u4e45\u4e3a\u4f7f\u7528\u7684"),"\u3002"),(0,l.kt)("h3",{id:"3\u62bd\u8c61api\u5b9e\u73b0"},"3\u3001\u62bd\u8c61API\u5b9e\u73b0"),(0,l.kt)("p",null,"\u6709\u4e86\u53cc\u5411\u94fe\u8868\u7684\u5b9e\u73b0\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5728 LRU \u7b97\u6cd5\u4e2d\u628a\u5b83\u548c\u54c8\u5e0c\u8868\u7ed3\u5408\u8d77\u6765\u5373\u53ef\uff0c\u5148\u642d\u51fa\u4ee3\u7801\u6846\u67b6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"class LRUCache {\nprivate:\n    unordered_map<int, Node*> map;  // key -> Node(key, val)\n    DoubleList cache;               // Node(k1, v1) <-> Node(k2, v2)...\n    int cap;                        // \u6700\u5927\u5bb9\u91cf\n\npublic:\n    LRUCache(int capacity) {\n        cap = capacity;\n    }\n};\n")),(0,l.kt)("p",null,"\u5148\u4e0d\u614c\u53bb\u5b9e\u73b0 LRU \u7b97\u6cd5\u7684 get \u548c put \u65b9\u6cd5\u3002\u7531\u4e8e\u6211\u4eec\u8981\u540c\u65f6\u7ef4\u62a4\u4e00\u4e2a\u53cc\u94fe\u8868 cache \u548c\u4e00\u4e2a\u54c8\u5e0c\u8868 map\uff0c\u5f88\u5bb9\u6613\u6f0f\u6389\u4e00\u4e9b\u64cd\u4f5c\uff0c\u6bd4\u5982\u8bf4\u5220\u9664\u67d0\u4e2a key \u65f6\uff0c\u5728 cache \u4e2d\u5220\u9664\u4e86\u5bf9\u5e94\u7684 Node\uff0c\u4f46\u662f\u5374\u5fd8\u8bb0\u5728 map \u4e2d\u5220\u9664 key\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u89e3\u51b3\u8fd9\u79cd\u95ee\u9898\u7684\u6709\u6548\u65b9\u6cd5\u662f\uff1a\u5728\u8fd9\u4e24\u79cd\u6570\u636e\u7ed3\u6784\u4e4b\u4e0a\u63d0\u4f9b\u4e00\u5c42\u62bd\u8c61 API"),"\u3002"),(0,l.kt)("p",null,"\u5b9e\u9645\u4e0a\u5f88\u7b80\u5355\uff0c\u5c31\u662f\u5c3d\u91cf\u8ba9 LRU \u7684\u4e3b\u65b9\u6cd5 ",(0,l.kt)("inlineCode",{parentName:"p"},"get")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"put")," \u907f\u514d\u76f4\u63a5\u64cd\u4f5c ",(0,l.kt)("inlineCode",{parentName:"p"},"map")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"cache")," \u7684\u7ec6\u8282\u3002\u6211\u4eec\u53ef\u4ee5\u5148\u5b9e\u73b0\u4e0b\u9762\u51e0\u4e2a\u51fd\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"    /* \u5c06\u67d0\u4e2a key \u63d0\u5347\u4e3a\u6700\u8fd1\u4f7f\u7528\u7684 */\n    void makeRecently(int key) {\n        Node *x = map[key];\n        cache.remove(x);   // \u5148\u4ece\u94fe\u8868\u4e2d\u5220\u9664\u8fd9\u4e2a\u8282\u70b9\n        cache.addLast(x);  // \u91cd\u65b0\u63d2\u5230\u961f\u5c3e\n    }\n\n    /* \u6dfb\u52a0\u6700\u8fd1\u4f7f\u7528\u7684\u5143\u7d20 */\n    void addRecently(int key, int val) {\n        Node *x = new Node(key, val);\n        cache.addLast(x);  // \u94fe\u8868\u5c3e\u90e8\u5c31\u662f\u6700\u8fd1\u4f7f\u7528\u7684\u5143\u7d20\n        map[key] = x;      // \u522b\u5fd8\u4e86\u5728 map \u4e2d\u6dfb\u52a0 key \u7684\u6620\u5c04\n    }\n\n    /* \u5220\u9664\u67d0\u4e00\u4e2a key */\n    void deleteKey(int key) {\n        Node *x = map[key];\n        cache.remove(x);  // \u4ece\u94fe\u8868\u4e2d\u5220\u9664\n        map.erase(key);     // \u4ece map \u4e2d\u5220\u9664\n    }\n\n    /* \u5220\u9664\u6700\u4e45\u672a\u4f7f\u7528\u7684\u5143\u7d20 */\n    void removeLeastRecently() {\n        // \u94fe\u8868\u5934\u90e8\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\u5c31\u662f\u6700\u4e45\u672a\u4f7f\u7528\u7684\n        Node *deleteNode = cache.removeFirst();\n        // \u540c\u65f6\u522b\u5fd8\u4e86\u4ece map \u4e2d\u5220\u9664\u5b83\u7684 key\n        int deleteKey = deleteNode->first;\n        map.erase(deleteKey);\n    }\n")),(0,l.kt)("p",null,"\u8fd9\u91cc\u5c31\u80fd\u56de\u7b54\u4e4b\u524d\u7684\u95ee\u7b54\u9898\u300c\u4e3a\u4ec0\u4e48\u8981\u5728\u94fe\u8868\u4e2d\u540c\u65f6\u5b58\u50a8 key \u548c val\uff0c\u800c\u4e0d\u662f\u53ea\u5b58\u50a8 val\u300d\uff0c\u6ce8\u610f removeLeastRecently \u51fd\u6570\u4e2d\uff0c\u6211\u4eec\u9700\u8981\u7528 deletedNode \u5f97\u5230 deletedKey\u3002"),(0,l.kt)("p",null,"\u4e5f\u5c31\u662f\u8bf4\uff0c\u5f53\u7f13\u5b58\u5bb9\u91cf\u5df2\u6ee1\uff0c\u6211\u4eec\u4e0d\u4ec5\u4ec5\u8981\u5220\u9664\u6700\u540e\u4e00\u4e2a Node \u8282\u70b9\uff0c\u8fd8\u8981\u628a map \u4e2d\u6620\u5c04\u5230\u8be5\u8282\u70b9\u7684 key \u540c\u65f6\u5220\u9664\uff0c\u800c\u8fd9\u4e2a key \u53ea\u80fd\u7531 Node \u5f97\u5230\u3002\u5982\u679c Node \u7ed3\u6784\u4e2d\u53ea\u5b58\u50a8 val\uff0c\u90a3\u4e48\u6211\u4eec\u5c31\u65e0\u6cd5\u5f97\u77e5 key \u662f\u4ec0\u4e48\uff0c\u5c31\u65e0\u6cd5\u5220\u9664 map \u4e2d\u7684\u952e\uff0c\u9020\u6210\u9519\u8bef\u3002"),(0,l.kt)("h3",{id:"4\u5b9e\u73b0-get-\u548c-put"},"4\u3001\u5b9e\u73b0 get \u548c put"),(0,l.kt)("p",null,"\u4e0a\u8ff0\u65b9\u6cd5\u5c31\u662f\u7b80\u5355\u7684\u64cd\u4f5c\u5c01\u88c5\uff0c\u8c03\u7528\u8fd9\u4e9b\u51fd\u6570\u53ef\u4ee5\u907f\u514d\u76f4\u63a5\u64cd\u4f5c ",(0,l.kt)("inlineCode",{parentName:"p"},"cache")," \u94fe\u8868\u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"map")," \u54c8\u5e0c\u8868\uff0c\u4e0b\u9762\u5148\u6765\u5b9e\u73b0 LRU \u7b97\u6cd5\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"get")," \u65b9\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"    int get(int key) {\n        if (!map.count(key)) {\n            return -1;\n        }\n\n        makeRecently(key);  // \u5c06\u8be5\u6570\u636e\u63d0\u5347\u4e3a\u6700\u8fd1\u4f7f\u7528\u7684\n        return map[key]->second;\n    }\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"put")," \u65b9\u6cd5\u7a0d\u5fae\u590d\u6742\u4e00\u4e9b\uff0c\u6211\u4eec\u5148\u6765\u753b\u4e2a\u56fe\u641e\u6e05\u695a\u5b83\u7684\u903b\u8f91\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:t(92107).Z,width:"1168",height:"1000"})),(0,l.kt)("p",null,"\u8fd9\u6837\u6211\u4eec\u53ef\u4ee5\u8f7b\u677e\u5199\u51fa ",(0,l.kt)("inlineCode",{parentName:"p"},"put")," \u65b9\u6cd5\u7684\u4ee3\u7801\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"    void put(int key, int val) {\n        if (map.count(key)) {\n            deleteKey(key);         // \u5220\u9664\u65e7\u7684\u6570\u636e\n            addRecently(key, val);  // \u65b0\u63d2\u5165\u7684\u6570\u636e\u4e3a\u6700\u8fd1\u4f7f\u7528\u7684\u6570\u636e\n            return;\n        }\n\n        if (cap == cache.size()) {\n            removeLeastRecently();  // \u5220\u9664\u6700\u4e45\u672a\u4f7f\u7528\u7684\u5143\u7d20\n        }\n        addRecently(key, val);  // \u6dfb\u52a0\u4e3a\u6700\u8fd1\u4f7f\u7528\u7684\u5143\u7d20\n    }\n")),(0,l.kt)("h3",{id:"5\u5408\u5e76\u4e0a\u8ff0\u5b9e\u73b0"},"5\u3001\u5408\u5e76\u4e0a\u8ff0\u5b9e\u73b0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"class Node {\npublic:\n    int key;\n    int val;\n    Node *next;\n    Node *prev;\n    Node(int k, int v) : key(k), val(v), next(nullptr), prev(nullptr) {}\n};\n\nclass DoubleList {\nprivate:\n    Node *head;  // \u5934\u865a\u8282\u70b9\n    Node *tail;  // \u5c3e\u865a\u8282\u70b9\n    int sz;      // \u94fe\u8868\u5143\u7d20\u6570\npublic:\n    DoubleList() {\n        // \u521d\u59cb\u5316\u53cc\u5411\u94fe\u8868\u7684\u6570\u636e\n        head = new Node(0, 0);\n        tail = new Node(0, 0);\n        head->next = tail;\n        tail->prev = head;\n        sz = 0;\n    }\n    // \u5728\u94fe\u8868\u5c3e\u90e8\u6dfb\u52a0\u8282\u70b9 x\uff0c\u65f6\u95f4 O(1)\n    void addLast(Node *x) {\n        x->prev = tail->prev;\n        x->next = tail;\n        tail->prev->next = x;\n        tail->prev = x;\n        sz++;\n    }\n    // \u5220\u9664\u94fe\u8868\u4e2d\u7684 x \u8282\u70b9\uff08x \u4e00\u5b9a\u5b58\u5728\uff09\n    // \u7531\u4e8e\u662f\u53cc\u94fe\u8868\u4e14\u7ed9\u7684\u662f\u76ee\u6807 Node \u8282\u70b9\uff0c\u65f6\u95f4 O(1)\n    void remove(Node *x) {\n        x->prev->next = x->next;\n        x->next->prev = x->prev;\n        sz--;\n    }\n    // \u5220\u9664\u94fe\u8868\u4e2d\u7b2c\u4e00\u4e2a\u8282\u70b9\uff0c\u5e76\u8fd4\u56de\u8be5\u8282\u70b9\uff0c\u65f6\u95f4 O(1)\n    Node *removeFirst() {\n        if (head->next == tail) return nullptr;\n        Node *first = head->next;\n        remove(first);\n        return first;\n    }\n    // \u8fd4\u56de\u94fe\u8868\u957f\u5ea6\uff0c\u65f6\u95f4 O(1)\n    int size() {\n        return sz;\n    }\n};\n\nclass LRUCache {\nprivate:\n    unordered_map<int, Node *> map;  // key -> Node(key, val)\n    DoubleList cache;                // Node(k1, v1) <-> Node(k2, v2)...\n    int cap;                         // \u6700\u5927\u5bb9\u91cf\n\npublic:\n    LRUCache(int capacity) {\n        cap = capacity;\n    }\n\n    /* \u5c06\u67d0\u4e2a key \u63d0\u5347\u4e3a\u6700\u8fd1\u4f7f\u7528\u7684 */\n    void makeRecently(int key) {\n        Node *x = map[key];\n        cache.remove(x);   // \u5148\u4ece\u94fe\u8868\u4e2d\u5220\u9664\u8fd9\u4e2a\u8282\u70b9\n        cache.addLast(x);  // \u91cd\u65b0\u63d2\u5230\u961f\u5c3e\n    }\n\n    /* \u6dfb\u52a0\u6700\u8fd1\u4f7f\u7528\u7684\u5143\u7d20 */\n    void addRecently(int key, int val) {\n        Node *x = new Node(key, val);\n        cache.addLast(x);  // \u94fe\u8868\u5c3e\u90e8\u5c31\u662f\u6700\u8fd1\u4f7f\u7528\u7684\u5143\u7d20\n        map[key] = x;      // \u522b\u5fd8\u4e86\u5728 map \u4e2d\u6dfb\u52a0 key \u7684\u6620\u5c04\n    }\n\n    /* \u5220\u9664\u67d0\u4e00\u4e2a key */\n    void deleteKey(int key) {\n        Node *x = map[key];\n        cache.remove(x);  // \u4ece\u94fe\u8868\u4e2d\u5220\u9664\n        map.erase(key);   // \u4ece map \u4e2d\u5220\u9664\n    }\n\n    /* \u5220\u9664\u6700\u4e45\u672a\u4f7f\u7528\u7684\u5143\u7d20 */\n    void removeLeastRecently() {\n        // \u94fe\u8868\u5934\u90e8\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\u5c31\u662f\u6700\u4e45\u672a\u4f7f\u7528\u7684\n        Node *deleteNode = cache.removeFirst();\n        // \u540c\u65f6\u522b\u5fd8\u4e86\u4ece map \u4e2d\u5220\u9664\u5b83\u7684 key\n        int deleteKey = deleteNode->key;\n        map.erase(deleteKey);\n    }\n\n    int get(int key) {\n        if (!map.count(key)) {\n            return -1;\n        }\n\n        makeRecently(key);  // \u5c06\u8be5\u6570\u636e\u63d0\u5347\u4e3a\u6700\u8fd1\u4f7f\u7528\u7684\n        return map[key]->val;\n    }\n\n    void put(int key, int val) {\n        if (map.count(key)) {\n            deleteKey(key);         // \u5220\u9664\u65e7\u7684\u6570\u636e\n            addRecently(key, val);  // \u65b0\u63d2\u5165\u7684\u6570\u636e\u4e3a\u6700\u8fd1\u4f7f\u7528\u7684\u6570\u636e\n            return;\n        }\n\n        if (cap == cache.size()) {\n            removeLeastRecently();  // \u5220\u9664\u6700\u4e45\u672a\u4f7f\u7528\u7684\u5143\u7d20\n        }\n        addRecently(key, val);  // \u6dfb\u52a0\u4e3a\u6700\u8fd1\u4f7f\u7528\u7684\u5143\u7d20\n    }\n};\n/**\n * Your LRUCache object will be instantiated and called as such:\n * LRUCache* obj = new LRUCache(capacity);\n * int param_1 = obj->get(key);\n * obj->put(key,value);\n */\n")),(0,l.kt)("h3",{id:"6\u7cbe\u7b80\u5b9e\u73b0\u63a8\u8350\u4f7f\u7528"},"6\u3001\u7cbe\u7b80\u5b9e\u73b0\uff08\u63a8\u8350\u4f7f\u7528\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <iostream>\n#include <unordered_map>\n\nusing namespace std;\n\nclass Node {\npublic:\n    int key;\n    int val;\n    Node *prev;\n    Node *next;\n    Node(int k, int v) : key(k), val(v), prev(nullptr), next(nullptr) {}\n};\n\nclass LRUCache {\nprivate:\n    int cap;\n    Node *head;\n    Node *tail;\n    unordered_map<int, Node *> map;\n\n    // \u53cc\u94fe\u8868\u5b9e\u73b0\uff0c\u6700\u8fd1\u4f7f\u7528\u7684\u8282\u70b9\u653e\u5728\u53cc\u5411\u94fe\u8868\u5c3e\u90e8\n    void refresh(Node *node) {\n        // \u5148\u5c06\u8282\u70b9\u5728\u53cc\u94fe\u8868\u79fb\u9664\uff0c\u518d\u5c06\u8282\u70b9\u6dfb\u52a0\u81f3\u53cc\u5411\u94fe\u8868\u5c3e\u90e8\n        deleteNode(node);\n        // \u6700\u7a33\u59a5\u7684\u6dfb\u52a0\u8282\u70b9\u7684\u5199\u6cd5\n        Node *one = tail->prev;\n        Node *two = tail;\n        one->next = node;\n        node->prev = one;\n        node->next = tail;\n        tail->prev = node;\n    }\n\n    // \u5c06\u6307\u5b9a\u8282\u70b9\u4ece\u53cc\u5411\u94fe\u8868\u4e2d\u79fb\u9664\n    void deleteNode(Node *node) {\n        // \u8282\u70b9\u4e0d\u5728\u94fe\u8868\u4e2d\uff0c\u5c31\u4e0d\u8981\u5220\u9664\u4e86\n        if (node->next == nullptr) return;\n        node->prev->next = node->next;\n        node->next->prev = node->prev;\n    }\n\npublic:\n    LRUCache(int capacity) {\n        cap = capacity;\n        head = new Node(-1, -1);\n        tail = new Node(-1, -1);\n        head->next = tail;\n        tail->prev = head;\n    }\n\n    int get(int key) {\n        if (map.count(key)) {\n            refresh(map[key]);\n            return map[key]->val;\n        }\n        return -1;\n    }\n\n    void put(int key, int value) {\n        Node *node;\n\n        if (map.count(key)) {\n            node = map[key];\n            node->val = value;\n        } else {\n            if (map.size() >= cap) {         // \u5982\u679c cache \u6ee1\u4e86\n                map.erase(head->next->key);  // \u5220\u9664\u7b2c\u4e00\u4e2a\u8282\u70b9\uff08\u597d\u4e45\u6ca1\u7528\uff09\n                deleteNode(head->next);\n            }\n            node = new Node(key, value);\n            map[key] = node;\n        }\n        refresh(node);\n    }\n};\n")),(0,l.kt)("h3",{id:"7\u501f\u7528-list-\u5b9e\u73b0"},"7\u3001\u501f\u7528 list \u5b9e\u73b0"),(0,l.kt)("p",null,"c++ list \u5c31\u662f\u53cc\u5411\u94fe\u8868"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"class LRUCache {\nprivate:\n    int cap;\n    list<pair<int, int>> cache;\n    unordered_map<int, list<pair<int, int>>::iterator> map;\n\npublic:\n    LRUCache(int capacity) : cap(capacity) {\n    }\n    int get(int key) {\n        if (map.find(key) == map.end()) return -1;\n        auto key_value = *map[key];\n        cache.erase(map[key]);\n        cache.push_front(key_value);\n        map[key] = cache.begin();\n        return key_value.second;\n    }\n    void put(int key, int value) {\n        if (map.find(key) == map.end()) {\n            if (cache.size() == cap) {\n                map.erase(cache.back().first);\n                cache.pop_back();\n            }\n        } else {\n            cache.erase(map[key]);\n        }\n        cache.push_front({key, value});\n        map[key] = cache.begin();\n    }\n};\n")))}k.isMDXComponent=!0},6426:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/146-1-dc3d7f2b18a4624a07e3526111a2b6eb.jpeg"},92107:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/1647580694-POftJu-put-47527c86b97ef8c7ea8b2d650897c9b9.jpg"}}]);