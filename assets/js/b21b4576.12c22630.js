"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[51275],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,f=c["".concat(o,".").concat(d)]||c[d]||k[d]||i;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:a,l[1]=p;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14992:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={},l="DFS \u6df1\u5ea6\u4f18\u5148\u641c\u7d22",p={unversionedId:"Algorithm/\u56fe\u8bba/DFS",id:"Algorithm/\u56fe\u8bba/DFS",title:"DFS \u6df1\u5ea6\u4f18\u5148\u641c\u7d22",description:"\u53c2\u8003\uff1ahttps://oi-wiki.org/graph/dfs/",source:"@site/docs/Algorithm/4-\u56fe\u8bba/03-DFS.md",sourceDirName:"Algorithm/4-\u56fe\u8bba",slug:"/Algorithm/\u56fe\u8bba/DFS",permalink:"/docs/Algorithm/\u56fe\u8bba/DFS",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"docsSidebar",previous:{title:"\u56fe\u7684\u5b58\u50a8",permalink:"/docs/Algorithm/\u56fe\u8bba/\u56fe\u7684\u5b58\u50a8"},next:{title:"BFS \u5e7f\u5ea6\u4f18\u5148\u641c\u7d22",permalink:"/docs/Algorithm/\u56fe\u8bba/BFS"}},o={},u=[{value:"\u4e00\u3001\u5b9e\u73b0",id:"\u4e00\u5b9e\u73b0",level:2},{value:"\u4e8c\u3001\u56de\u6eaf",id:"\u4e8c\u56de\u6eaf",level:2},{value:"\u4e09\u3001\u4e00\u4e9b\u5e94\u7528",id:"\u4e09\u4e00\u4e9b\u5e94\u7528",level:2},{value:"DFS \u5e8f\u5217",id:"dfs-\u5e8f\u5217",level:3},{value:"\u62ec\u53f7\u5e8f\u5217",id:"\u62ec\u53f7\u5e8f\u5217",level:3},{value:"\u4e00\u822c\u56fe\u4e0a DFS",id:"\u4e00\u822c\u56fe\u4e0a-dfs",level:3}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dfs-\u6df1\u5ea6\u4f18\u5148\u641c\u7d22"},"DFS \u6df1\u5ea6\u4f18\u5148\u641c\u7d22"),(0,a.kt)("p",null,"\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://oi-wiki.org/graph/dfs/"},"https://oi-wiki.org/graph/dfs/")),(0,a.kt)("p",null,"DFS \u5168\u79f0\u662f ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Depth-first_search"},"Depth First Search"),"\uff0c\u4e2d\u6587\u540d\u662f\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\uff0c\u662f\u4e00\u79cd\u7528\u4e8e\u904d\u5386\u6216\u641c\u7d22\u6811\u6216\u56fe\u7684\u7b97\u6cd5\u3002"),(0,a.kt)("p",null,"\u6240\u8c13\u6df1\u5ea6\u4f18\u5148\uff0c\u5c31\u662f\u8bf4\u6bcf\u6b21\u90fd",(0,a.kt)("strong",{parentName:"p"},"\u5c1d\u8bd5\u5411\u66f4\u6df1\u7684\u8282\u70b9\u8d70"),"\u3002"),(0,a.kt)("p",null,"\u8be5\u7b97\u6cd5\u8bb2\u89e3\u65f6\u5e38\u5e38\u4e0e BFS \u5e76\u5217\uff0c\u4f46\u4e24\u8005\u9664\u4e86\u90fd\u80fd\u904d\u5386\u56fe\u7684\u8fde\u901a\u5757\u4ee5\u5916\uff0c\u7528\u9014\u5b8c\u5168\u4e0d\u540c\uff0c\u5f88\u5c11\u6709\u80fd\u6df7\u7528\u4e24\u79cd\u7b97\u6cd5\u7684\u60c5\u51b5\u3002"),(0,a.kt)("p",null,"DFS \u5e38\u5e38\u7528\u6765\u6307\u4ee3\u7528\u9012\u5f52\u51fd\u6570\u5b9e\u73b0\u7684\u641c\u7d22\uff0c\u4f46\u5b9e\u9645\u4e0a\u4e24\u8005\u5e76\u4e0d\u4e00\u6837\u3002\u6709\u5173\u8be5\u7c7b\u641c\u7d22\u601d\u60f3\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://oi-wiki.org/search/dfs/"},"DFS\uff08\u641c\u7d22\uff09"),"."),(0,a.kt)("p",null,"DFS \u6700\u663e\u8457\u7684\u7279\u5f81\u5728\u4e8e\u5176 ",(0,a.kt)("strong",{parentName:"p"},"\u9012\u5f52\u8c03\u7528\u81ea\u8eab"),"\u3002\u540c\u65f6\u4e0e BFS \u7c7b\u4f3c\uff0cDFS \u4f1a\u5bf9\u5176\u8bbf\u95ee\u8fc7\u7684\u70b9\u6253\u4e0a\u8bbf\u95ee\u6807\u8bb0\uff0c\u5728\u904d\u5386\u56fe\u65f6\u8df3\u8fc7\u5df2\u6253\u8fc7\u6807\u8bb0\u7684\u70b9\uff0c\u4ee5\u786e\u4fdd ",(0,a.kt)("strong",{parentName:"p"},"\u6bcf\u4e2a\u70b9\u4ec5\u8bbf\u95ee\u4e00\u6b21"),"\u3002\u7b26\u5408\u4ee5\u4e0a\u4e24\u6761\u89c4\u5219\u7684\u51fd\u6570\uff0c\u4fbf\u662f\u5e7f\u4e49\u4e0a\u7684 DFS\u3002"),(0,a.kt)("h2",{id:"\u4e00\u5b9e\u73b0"},"\u4e00\u3001\u5b9e\u73b0"),(0,a.kt)("p",null,"\u5177\u4f53\u5730\u8bf4\uff0cDFS \u5927\u81f4\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},"void dfs(int cur) {\n    if (\u5230\u8fbe\u7ec8\u70b9) {\n        if (\u53ef\u4ee5\u91c7\u96c6\u7b54\u6848) \u91c7\u96c6\u7b54\u6848;\n        return;\n    }\n    vis[u] = 1;\n    for (auto next : \u5f85\u9009\u5217\u8868) {\n        if (next \u8282\u70b9\u65e0\u6548) continue;\n        if (vis[next] \u8282\u70b9\u8d70\u8fc7) continue;\n        dfs(v);\n}\n")),(0,a.kt)("p",null,"\u4ee5\u4e0a\u4ee3\u7801\u53ea\u5305\u542b\u4e86 DFS \u5fc5\u9700\u7684\u4e3b\u8981\u7ed3\u6784\u3002\u5b9e\u9645\u7684 DFS \u4f1a\u5728\u4ee5\u4e0a\u4ee3\u7801\u57fa\u7840\u4e0a\u52a0\u5165\u4e00\u4e9b\u4ee3\u7801\uff0c\u5229\u7528 DFS \u6027\u8d28\u8fdb\u884c\u5176\u4ed6\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,"\u8be5\u7b97\u6cd5\u901a\u5e38\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a O(n + m)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6\u4e3a O(n)\uff0c\u5176\u4e2d n \u8868\u793a\u70b9\u6570\uff0cm \u8868\u793a\u8fb9\u6570\u3002"),(0,a.kt)("p",null,"\u6ce8\u610f\u7a7a\u95f4\u590d\u6742\u5ea6\u5305\u542b\u4e86\u6808\u7a7a\u95f4\uff0c\u6808\u7a7a\u95f4\u7684\u7a7a\u95f4\u590d\u6742\u5ea6\u662f O(n) \u7684\u3002\u5728\u5e73\u5747 O(1) \u904d\u5386\u4e00\u6761\u8fb9\u7684\u6761\u4ef6\u4e0b\u624d\u80fd\u8fbe\u5230\u6b64\u65f6\u95f4\u590d\u6742\u5ea6\uff0c\u4f8b\u5982\u7528\u524d\u5411\u661f\u6216\u90bb\u63a5\u8868\u5b58\u50a8\u56fe\uff1b\u5982\u679c\u7528\u90bb\u63a5\u77e9\u9635\u5219\u4e0d\u4e00\u5b9a\u80fd\u8fbe\u5230\u6b64\u590d\u6742\u5ea6\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5907\u6ce8\uff1a\u76ee\u524d\u5927\u90e8\u5206\u7b97\u6cd5\u7ade\u8d5b\uff08\u5305\u62ec NOIP\u3001\u5927\u90e8\u5206\u7701\u9009\u4ee5\u53ca CCF \u4e3e\u529e\u7684\u5404\u9879\u8d5b\u4e8b\uff09\u90fd\u652f\u6301 ",(0,a.kt)("strong",{parentName:"p"},"\u65e0\u9650\u6808\u7a7a\u95f4"),"\uff0c\u5373\uff1a\u6808\u7a7a\u95f4\u4e0d\u5355\u72ec\u9650\u5236\uff0c\u4f46\u603b\u5185\u5b58\u7a7a\u95f4\u4ecd\u7136\u53d7\u9898\u9762\u9650\u5236\u3002\u4f46\u5927\u90e8\u5206\u64cd\u4f5c\u7cfb\u7edf\u4f1a\u5bf9\u6808\u7a7a\u95f4\u505a\u989d\u5916\u7684\u9650\u5236\uff0c\u56e0\u6b64\u5728\u672c\u5730\u8c03\u8bd5\u65f6\u9700\u8981\u4e00\u4e9b\u65b9\u5f0f\u6765\u53d6\u6d88\u6808\u7a7a\u95f4\u9650\u5236\u3002"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"\u5728 Windows \u4e0a\uff0c\u901a\u5e38\u7684\u65b9\u6cd5\u662f\u5728 ",(0,a.kt)("strong",{parentName:"li"},"\u7f16\u8bd1\u9009\u9879")," \u4e2d\u52a0\u5165 ",(0,a.kt)("inlineCode",{parentName:"li"},"-Wl,--stack=1000000000"),"\uff0c\u8868\u793a\u5c06\u6808\u7a7a\u95f4\u9650\u5236\u8bbe\u7f6e\u4e3a 1000000000 \u5b57\u8282\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5728 Linux \u4e0a\uff0c\u901a\u5e38\u7684\u65b9\u6cd5\u662f\u5728\u8fd0\u884c\u7a0b\u5e8f\u524d ",(0,a.kt)("strong",{parentName:"li"},"\u5728\u7ec8\u7aef\u5185")," \u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"li"},"ulimit -s unlimited"),"\uff0c\u8868\u793a\u6808\u7a7a\u95f4\u65e0\u9650\u3002\u6bcf\u4e2a\u7ec8\u7aef\u53ea\u9700\u6267\u884c\u4e00\u6b21\uff0c\u5bf9\u4e4b\u540e\u6bcf\u6b21\u7a0b\u5e8f\u8fd0\u884c\u90fd\u6709\u6548\u3002"))),(0,a.kt)("p",null,"\u94fe\u5f0f\u524d\u5411\u661f\u904d\u5386\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},"// C++ Version\nvoid dfs(int u) {\n  vis[u] = 1;\n  for (int i = head[u]; i; i = e[i].x) {\n    if (!vis[e[i].t]) {\n      dfs(v);\n    }\n  }\n}\n")),(0,a.kt)("h2",{id:"\u4e8c\u56de\u6eaf"},"\u4e8c\u3001\u56de\u6eaf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"result = []\ndef backtrack(\u8def\u5f84, \u9009\u62e9\u5217\u8868):\n    if \u6ee1\u8db3\u7ed3\u675f\u6761\u4ef6:\n        result.add(\u8def\u5f84)\n        return\n\n    for \u9009\u62e9 in \u9009\u62e9\u5217\u8868:\n        \u505a\u9009\u62e9\n        backtrack(\u8def\u5f84, \u9009\u62e9\u5217\u8868)\n        \u64a4\u9500\u9009\u62e9\n")),(0,a.kt)("p",null,"\u627e\u5230\u7b54\u6848\u5c31\u8fd4\u56de\u5199\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"ans = []\ndef backtrack(\u8def\u5f84, \u9009\u62e9\u5217\u8868):\n    if \u6ee1\u8db3\u7ed3\u675f\u6761\u4ef6:\n        ans.add(\u8def\u5f84)\n        return True\n\n    for \u9009\u62e9 in \u9009\u62e9\u5217\u8868:\n        \u505a\u9009\u62e9\n        if (backtrack(\u8def\u5f84, \u9009\u62e9\u5217\u8868)) return True;\n        \u64a4\u9500\u9009\u62e9\n    return False\n        \nres = backtrack()\nreturn ans if res else []\n")),(0,a.kt)("p",null,"\u6709\u4e00\u4e2a\u5751\uff1a\u5728\u56de\u6eaf\u89e3\u6cd5\u4e2d\uff0c\u5982\u679c\u56de\u6eaf\u7684\u65f6\u5019\u628a",(0,a.kt)("inlineCode",{parentName:"p"},"visited"),"\u6570\u7ec4\u8bbe\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"\uff0c\u4f1a\u8d85\u65f6\u3002\u800c",(0,a.kt)("inlineCode",{parentName:"p"},"visited"),"\u4e0d\u8bbe\u6210",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"\uff0c\u4f1a\u5927\u5927\u63d0\u9ad8\u901f\u5ea6\uff0c\u6700\u7ec8\u53ef\u4ee5\u901a\u8fc7\u3002"),(0,a.kt)("p",null,"\u5728\u56de\u6eaf\u9898\u76ee\u4e2d\uff0c\u505a\u300c\u526a\u679d\u300d\u548c\u300c\u53bb\u91cd\u300d\u662f\u95e8\u5927\u5b66\u95ee"),(0,a.kt)("p",null,"\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/permutations-ii/"},"47. \u5168\u6392\u5217 II")),(0,a.kt)("h2",{id:"\u4e09\u4e00\u4e9b\u5e94\u7528"},"\u4e09\u3001\u4e00\u4e9b\u5e94\u7528"),(0,a.kt)("h3",{id:"dfs-\u5e8f\u5217"},"DFS \u5e8f\u5217"),(0,a.kt)("p",null,"DFS \u5e8f\u5217\u662f\u6307 DFS \u8c03\u7528\u8fc7\u7a0b\u4e2d\u8bbf\u95ee\u7684\u8282\u70b9\u7f16\u53f7\u7684\u5e8f\u5217\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u53d1\u73b0\uff0c\u6bcf\u4e2a\u5b50\u6811\u90fd\u5bf9\u5e94 DFS \u5e8f\u5217\u4e2d\u7684\u8fde\u7eed\u4e00\u6bb5\uff08\u4e00\u6bb5\u533a\u95f4\uff09\u3002"),(0,a.kt)("h3",{id:"\u62ec\u53f7\u5e8f\u5217"},"\u62ec\u53f7\u5e8f\u5217"),(0,a.kt)("p",null,"DFS \u8fdb\u5165\u67d0\u4e2a\u8282\u70b9\u7684\u65f6\u5019\u8bb0\u5f55\u4e00\u4e2a\u5de6\u62ec\u53f7 ",(0,a.kt)("inlineCode",{parentName:"p"},"("),"\uff0c\u9000\u51fa\u67d0\u4e2a\u8282\u70b9\u7684\u65f6\u5019\u8bb0\u5f55\u4e00\u4e2a\u53f3\u62ec\u53f7 ",(0,a.kt)("inlineCode",{parentName:"p"},")"),"\u3002"),(0,a.kt)("p",null,"\u6bcf\u4e2a\u8282\u70b9\u4f1a\u51fa\u73b0\u4e24\u6b21\u3002\u76f8\u90bb\u4e24\u4e2a\u8282\u70b9\u7684\u6df1\u5ea6\u76f8\u5dee 1\u3002"),(0,a.kt)("h3",{id:"\u4e00\u822c\u56fe\u4e0a-dfs"},"\u4e00\u822c\u56fe\u4e0a DFS"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u975e\u8fde\u901a\u56fe\uff0c\u53ea\u80fd\u8bbf\u95ee\u5230\u8d77\u70b9\u6240\u5728\u7684\u8fde\u901a\u5206\u91cf\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u8fde\u901a\u56fe\uff0cDFS \u5e8f\u5217\u901a\u5e38\u4e0d\u552f\u4e00\u3002"),(0,a.kt)("p",null,"\u6ce8\uff1a\u6811\u7684 DFS \u5e8f\u5217\u4e5f\u662f\u4e0d\u552f\u4e00\u7684\u3002"),(0,a.kt)("p",null,"\u5728 DFS \u8fc7\u7a0b\u4e2d\uff0c\u901a\u8fc7\u8bb0\u5f55\u6bcf\u4e2a\u8282\u70b9\u4ece\u54ea\u4e2a\u70b9\u8bbf\u95ee\u800c\u6765\uff0c\u53ef\u4ee5\u5efa\u7acb\u4e00\u4e2a\u6811\u7ed3\u6784\uff0c\u79f0\u4e3a DFS \u6811\u3002DFS \u6811\u662f\u539f\u56fe\u7684\u4e00\u4e2a\u751f\u6210\u6811\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://oi-wiki.org/graph/scc/#dfs"},"DFS \u6811")," \u6709\u5f88\u591a\u6027\u8d28\uff0c\u6bd4\u5982\u53ef\u4ee5\u7528\u6765\u6c42 ",(0,a.kt)("a",{parentName:"p",href:"https://oi-wiki.org/graph/scc/"},"\u5f3a\u8fde\u901a\u5206\u91cf"),"\u3002"))}c.isMDXComponent=!0}}]);