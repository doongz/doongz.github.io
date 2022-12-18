"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[60935],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(n),c=a,d=u["".concat(o,".").concat(c)]||u[c]||k[c]||i;return n?r.createElement(d,l(l({ref:t},m),{},{components:n})):r.createElement(d,l({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:a,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},50873:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={},l="\u72b6\u6001\u538b\u7f29 DP",p={unversionedId:"Algorithm/\u52a8\u6001\u89c4\u5212/\u72b6\u6001\u538b\u7f29DP",id:"Algorithm/\u52a8\u6001\u89c4\u5212/\u72b6\u6001\u538b\u7f29DP",title:"\u72b6\u6001\u538b\u7f29 DP",description:"\u4f7f\u7528\u4e00\u4e2a\u4e8c\u8fdb\u5236\u6570\u8bb0\u5f55\u5f53\u524d\u54ea\u4e9b\u6570\u5df2\u88ab\u9009\uff0c\u54ea\u4e9b\u6570\u672a\u88ab\u9009\uff0c\u76ee\u7684\u662f\u4e3a\u4e86\u53ef\u4ee5\u4f7f\u7528\u4f4d\u8fd0\u7b97\u8fdb\u884c\u52a0\u901f",source:"@site/docs/Algorithm/3-\u52a8\u6001\u89c4\u5212/07-\u72b6\u6001\u538b\u7f29DP.md",sourceDirName:"Algorithm/3-\u52a8\u6001\u89c4\u5212",slug:"/Algorithm/\u52a8\u6001\u89c4\u5212/\u72b6\u6001\u538b\u7f29DP",permalink:"/docs/Algorithm/\u52a8\u6001\u89c4\u5212/\u72b6\u6001\u538b\u7f29DP",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"docsSidebar",previous:{title:"\u6811\u5f62 DP",permalink:"/docs/Algorithm/\u52a8\u6001\u89c4\u5212/\u6811\u5f62DP"},next:{title:"\u6570\u4f4d DP",permalink:"/docs/Algorithm/\u52a8\u6001\u89c4\u5212/\u6570\u4f4dDP"}},o={},s=[{value:"\u4f8b\u9898",id:"\u4f8b\u9898",level:2},{value:"526. \u4f18\u7f8e\u7684\u6392\u5217",id:"526-\u4f18\u7f8e\u7684\u6392\u5217",level:3}],m={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u72b6\u6001\u538b\u7f29-dp"},"\u72b6\u6001\u538b\u7f29 DP"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u4e00\u4e2a\u4e8c\u8fdb\u5236\u6570\u8bb0\u5f55\u5f53\u524d\u54ea\u4e9b\u6570\u5df2\u88ab\u9009\uff0c\u54ea\u4e9b\u6570\u672a\u88ab\u9009\uff0c\u76ee\u7684\u662f\u4e3a\u4e86\u53ef\u4ee5\u4f7f\u7528\u4f4d\u8fd0\u7b97\u8fdb\u884c\u52a0\u901f")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5e94\u7528\uff1a\u72b6\u6001\u538b\u7f29\u53ef\u7528\u5728 dfs\u3001bfs\u3001dp \u4e2d\uff0c\u5c06\u72b6\u6001\u7ef4\u5ea6\u4ece n \u7ef4\u964d\u81f3 1 \u7ef4")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1an \u4e0d\u80fd\u592a\u5927\uff0c\u4e00\u822c\u662f 15 \u4ee5\u4e0b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u4f8b\u5982\u4e00\u4e32\u4e8c\u8fdb\u5236\u6570 000...01010\n\n\u4ee3\u8868\u503c\u4e3a 1 \u548c\u503c\u4e3a 3 \u7684\u6570\u5b57\u5df2\u7ecf\u88ab\u4f7f\u7528\u4e86\uff0c\u800c\u503c\u4e3a 0\u30012 \u7684\u8282\u70b9\u5c1a\u672a\u88ab\u4f7f\u7528\u3002\n")),(0,a.kt)("p",null,"\u300c\u72b6\u6001\u538b\u7f29\u300d\u7684\u4e00\u4e9b\u57fa\u672c\u7684\u64cd\u4f5c\uff1a\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," \u4e2a\u8282\u70b9\uff0c\u53d8\u91cf ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," \u5b58\u653e\u4e86\u300c\u5f53\u524d\u8282\u70b9\u7684\u4f7f\u7528\u60c5\u51b5\u300d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u603b\u7684 state \u6570\u91cf\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"1 << n"),"\uff0c\u4e00\u4e2a\u8282\u70b9\u5bf9\u5e94\u4e86\u9009\u6216\u4e0d\u9009\uff0c\u6240\u4ee5\u6709 2^n \u79cd\u53ef\u80fd"),(0,a.kt)("li",{parentName:"ul"},"\u8bb0\u5f55 num \u7528\u8fc7\u4e86\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"state = (1 << num) | state")),(0,a.kt)("li",{parentName:"ul"},"\u5224\u65ad num \u6709\u6ca1\u6709\u7528\u8fc7\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"((state >> num) & 1) == 0"),"\uff0c\u7b49\u4e8e 0 \u6ca1\u7528\u8fc7\uff0c\u5927\u4e8e 0 \u7528\u8fc7\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"(1 << num) & state) == 0")," \u4e5f\u884c\uff0c\u4f46\u524d\u8005\u66f4\u597d\u7406\u89e3"),(0,a.kt)("li",{parentName:"ul"},"\u67e5\u770b\u9009\u62e9 num \u4e4b\u524d\u7684 state\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"state & (~(1 << num))")),(0,a.kt)("li",{parentName:"ul"},"\u5224\u65ad\u5f53\u524d state \u662f\u5426\u5c06\u6240\u6709\u7684\u8282\u70b9\u90fd\u8d70\u8fc7\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"state == (1 << n) - 1"))),(0,a.kt)("h2",{id:"\u4f8b\u9898"},"\u4f8b\u9898"),(0,a.kt)("h3",{id:"526-\u4f18\u7f8e\u7684\u6392\u5217"},(0,a.kt)("a",{parentName:"h3",href:"https://leetcode.cn/problems/beautiful-arrangement/"},"526. \u4f18\u7f8e\u7684\u6392\u5217")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1. \u5b9a\u4e49\u72b6\u6001")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dp[i][state]")," \u8868\u793a\u524d i \u4e2a\u6570\uff0c\u4e14\u5f53\u524d\u9009\u62e9\u65b9\u6848\u4e3a\u72b6\u6001 ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," \u7684\u65b9\u6848\u4e2a\u6570"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8fd9\u91cc\u7684 status \u4ee3\u8868\u6216\u8bb0\u5f55\u4e86\u524d\u9762 i \u4e2a\u6570\uff0c\u54ea\u4e9b\u9009\u4e86\uff0c\u54ea\u4e9b\u6ca1\u9009")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2. \u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b")),(0,a.kt)("p",null,"\u4e0d\u5931\u4e00\u822c\u6027\u7684\u8003\u8651 ",(0,a.kt)("inlineCode",{parentName:"p"},"dp[i][state]")," \u8be5\u5982\u4f55\u8f6c\u79fb\uff0c\u7531\u4e8e\u672c\u9898\u662f\u6c42\u65b9\u6848\u6570\uff0c\u6211\u4eec\u7684\u8f6c\u79fb\u65b9\u7a0b\u5fc5\u987b\u505a\u5230\u300c\u4e0d\u91cd\u4e0d\u6f0f\u300d\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u679a\u4e3e\u5f53\u524d\u4f4d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"i")," \u662f\u9009\u54ea\u4e2a\u6570\uff0c\u5047\u8bbe\u4f4d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"i")," \u6240\u9009\u6570\u503c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"k"),"\uff0c\u9996\u5148 ",(0,a.kt)("inlineCode",{parentName:"p"},"k")," \u503c\u9700\u8981\u540c\u65f6\u6ee1\u8db3\u5982\u4e0b\u4e24\u4e2a\u6761\u4ef6\u624d\u80fd\u88ab\u9009\u62e9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"state")," \u4e8c\u8fdb\u5236\u4e2d\u7684\u7b2c ",(0,a.kt)("inlineCode",{parentName:"li"},"k")," \u4f4d\u4e3a 1\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u8981\u4e48 k \u80fd\u88ab i \u6574\u9664\uff0c\u8981\u4e48 i \u80fd\u88ab k \u6574\u9664")),(0,a.kt)("p",null,"\u90a3\u4e48\u6839\u636e\u72b6\u6001\u5b9a\u4e49\uff0c\u4f4d\u7f6e i \u9009\u4e86\u6570\u503c k\uff0c\u901a\u8fc7\u4f4d\u8fd0\u7b97\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u5f97\u51fa\u51b3\u7b56\u4f4d\u7f6e i \u4e4b\u524d\u7684\u72b6\u6001\u662f\u4ec0\u4e48\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"state & (~(1 << k))")),(0,a.kt)("p",null,"\u6700\u7ec8\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"dp[i][state]")," \u4e3a\u5f53\u524d\u4f4d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"i")," \u9009\u62e9\u7684\u662f\u6240\u6709\u5408\u6cd5\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"k")," \u503c\u7684\u65b9\u6848\u6570\u4e4b\u548c\uff1a\n$$\ndp","[i][state]"," = \\sum^{n-1}_{k=0}dp","[i-1][state \\ \\& \\ \\neg(1<<k)]","\n$$\n\u7531\u4e8e\u7ed9\u5b9a\u7684\u6570\u503c\u8303\u56f4\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"[1,n]"),"\uff0c\u4f46\u5b9e\u73b0\u4e0a\u4e3a\u4e86\u65b9\u4fbf\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," \u4ece\u53f3\u5f80\u5de6\u7684\u7b2c 0 \u4f4d\u8868\u793a\u6570\u503c 1 \u9009\u62e9\u60c5\u51b5\uff0c\u7b2c 1 \u4f4d\u8868\u793a\u6570\u503c 2 \u7684\u9009\u62e9\u60c5\u51b5 ... \u5373\u5bf9\u9009\u62e9\u6570\u503c k \u505a\u4e00\u4e2a \u22121 \u7684\u504f\u79fb"),(0,a.kt)("p",null,"\u5373\uff0c\u5728\u5bf9 state \u4f7f\u7528 k-1 \u4ee3\u8868 k"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3. \u521d\u59cb\u5316")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"d[0][0] = 1")," \u4ee3\u8868\u5f53\u6211\u4eec\u4e0d\u8003\u8651\u4efb\u4f55\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"i=0"),' \u7684\u60c5\u51b5\u4e0b\uff0c\u4e00\u4e2a\u6570\u90fd\u4e0d\u9009\u62e9\uff08status = 0 \u4e8c\u8fdb\u5236\u4e3a "00000"\uff09\uff0c\u4e3a 1 \u79cd\u65b9\u6848'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u590d\u6742\u5ea6\u5206\u6790")),(0,a.kt)("p",null,"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a\u5171\u6709 n ",(0,a.kt)("em",{parentName:"p"}," 2^n \u7684\u72b6\u6001\u9700\u8981\u88ab\u8f6c\u79fb\uff0c\u6bcf\u6b21\u8f6c\u79fb\u590d\u6742\u5ea6\u4e3a O(n)\uff0c\u6574\u4f53\u590d\u6742\u5ea6\u4e3a O(n^2 ")," 2^n)"),(0,a.kt)("p",null,"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1aO(n * 2^n)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},"class Solution {\npublic:\n    int countArrangement(int n) {\n        int mask = 1 << n;\n        vector<vector<int>> dp(n + 1, vector<int>(mask, 0));\n        dp[0][0] = 1;\n\n        for (int i = 1; i <= n; i++) {\n            // \u679a\u4e3e\u6240\u6709\u7684\u72b6\u6001\n            for (int state = 0; state < mask; state++) {\n                // \u679a\u4e3e\u4f4d\u7f6e i\uff08\u6700\u540e\u4e00\u4f4d\uff09\u9009\u7684\u6570\u503c\u662f k\n                for (int k = 1; k <= n; k++) {\n                    // \u9996\u5148 k \u5728 state \u4e2d\u5fc5\u987b\u662f 1\uff0c\u8868\u793a\u53ef\u4ee5\u4ece\u524d\u9762\u7684\u90a3\u4e2a\u72b6\u6001\u8f6c\u79fb\u8fc7\u6765\n                    if (((state >> (k-1)) & 1) == 0) continue;\n                    // \u6570\u503c k \u548c\u4f4d\u7f6e i \u4e4b\u95f4\u6ee1\u8db3\u4efb\u4e00\u6574\u9664\u5173\u7cfb\n                    if (k % i != 0 && i % k != 0) continue;\n                    // state & (~(1 << (k - 1))) \u4ee3\u8868\u5c06 state \u4e2d\u6570\u503c k \u7684\u4f4d\u7f6e\u7f6e\u96f6\n                    dp[i][state] += dp[i - 1][state & (~(1 << (k - 1)))];\n                }\n            }\n        }\n        return dp[n][mask-1];\n    }\n};\n\n")),(0,a.kt)("p",null,"\u672a\u5b8c\u6210\u4f8b\u9898\uff1a"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/the-number-of-good-subsets/"},"1994. \u597d\u5b50\u96c6\u7684\u6570\u76ee")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/count-number-of-maximum-bitwise-or-subsets/"},"2044. \u7edf\u8ba1\u6309\u4f4d\u6216\u80fd\u5f97\u5230\u6700\u5927\u503c\u7684\u5b50\u96c6\u6570\u76ee")))}u.isMDXComponent=!0}}]);