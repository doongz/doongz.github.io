"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[54358],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>f});var r=t(67294);function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){l(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,r,l=function(n,e){if(null==n)return{};var t,r,l={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(l[t]=n[t]);return l}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(l[t]=n[t])}return l}var p=r.createContext({}),m=function(n){var e=r.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},u=function(n){var e=m(n.components);return r.createElement(p.Provider,{value:e},n.children)},s="mdxType",c={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(n,e){var t=n.components,l=n.mdxType,a=n.originalType,p=n.parentName,u=o(n,["components","mdxType","originalType","parentName"]),s=m(t),d=l,f=s["".concat(p,".").concat(d)]||s[d]||c[d]||a;return t?r.createElement(f,i(i({ref:e},u),{},{components:t})):r.createElement(f,i({ref:e},u))}));function f(n,e){var t=arguments,l=e&&e.mdxType;if("string"==typeof n||l){var a=t.length,i=new Array(a);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=n,o[s]="string"==typeof n?n:l,i[1]=o;for(var m=2;m<a;m++)i[m]=t[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},59126:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>m});var r=t(87462),l=(t(67294),t(3905));const a={},i=void 0,o={unversionedId:"Algorithm/\u52a8\u6001\u89c4\u5212/\u4f8b\u9898-\u8bb0\u5fc6\u5316\u641c\u7d22/<\u8bb0\u5fc6\u5316dfs-\u4f4d\u8fd0\u7b97+\u8d2a\u5fc3>-\u6574\u6570\u66ff\u6362",id:"Algorithm/\u52a8\u6001\u89c4\u5212/\u4f8b\u9898-\u8bb0\u5fc6\u5316\u641c\u7d22/<\u8bb0\u5fc6\u5316dfs-\u4f4d\u8fd0\u7b97+\u8d2a\u5fc3>-\u6574\u6570\u66ff\u6362",title:"<\u8bb0\u5fc6\u5316dfs-\u4f4d\u8fd0\u7b97+\u8d2a\u5fc3>-\u6574\u6570\u66ff\u6362",description:"397. \u6574\u6570\u66ff\u6362",source:"@site/docs/Algorithm/3-\u52a8\u6001\u89c4\u5212/\u4f8b\u9898-\u8bb0\u5fc6\u5316\u641c\u7d22/397-<\u8bb0\u5fc6\u5316dfs-\u4f4d\u8fd0\u7b97+\u8d2a\u5fc3>-\u6574\u6570\u66ff\u6362.md",sourceDirName:"Algorithm/3-\u52a8\u6001\u89c4\u5212/\u4f8b\u9898-\u8bb0\u5fc6\u5316\u641c\u7d22",slug:"/Algorithm/\u52a8\u6001\u89c4\u5212/\u4f8b\u9898-\u8bb0\u5fc6\u5316\u641c\u7d22/<\u8bb0\u5fc6\u5316dfs-\u4f4d\u8fd0\u7b97+\u8d2a\u5fc3>-\u6574\u6570\u66ff\u6362",permalink:"/docs/Algorithm/\u52a8\u6001\u89c4\u5212/\u4f8b\u9898-\u8bb0\u5fc6\u5316\u641c\u7d22/<\u8bb0\u5fc6\u5316dfs-\u4f4d\u8fd0\u7b97+\u8d2a\u5fc3>-\u6574\u6570\u66ff\u6362",draft:!1,tags:[],version:"current",sidebarPosition:397,frontMatter:{},sidebar:"algorithmSidebar",previous:{title:"<\u8bb0\u5fc6\u5316dfs-dp-\u62d3\u6251\u6392\u5e8f-bfs>-\u77e9\u9635\u4e2d\u7684\u6700\u957f\u9012\u589e\u8def\u5f84",permalink:"/docs/Algorithm/\u52a8\u6001\u89c4\u5212/\u4f8b\u9898-\u8bb0\u5fc6\u5316\u641c\u7d22/<\u8bb0\u5fc6\u5316dfs-dp-\u62d3\u6251\u6392\u5e8f-bfs>-\u77e9\u9635\u4e2d\u7684\u6700\u957f\u9012\u589e\u8def\u5f84"},next:{title:"<\u6a21\u7248\u9898-\u63cf\u8ff0\u5b50\u95ee\u9898>-\u9752\u86d9\u8fc7\u6cb3",permalink:"/docs/Algorithm/\u52a8\u6001\u89c4\u5212/\u4f8b\u9898-\u8bb0\u5fc6\u5316\u641c\u7d22/<\u6a21\u7248\u9898-\u63cf\u8ff0\u5b50\u95ee\u9898>-\u9752\u86d9\u8fc7\u6cb3"}},p={},m=[{value:"\u65b9\u6cd5\u4e00\uff1a\u8bb0\u5fc6\u5316dfs\uff08\u81ea\u9876\u5411\u4e0b\uff09",id:"\u65b9\u6cd5\u4e00\u8bb0\u5fc6\u5316dfs\u81ea\u9876\u5411\u4e0b",level:2},{value:"\u65b9\u6cd5\u4e8c\uff1a\u4f4d\u8fd0\u7b97+\u8d2a\u5fc3",id:"\u65b9\u6cd5\u4e8c\u4f4d\u8fd0\u7b97\u8d2a\u5fc3",level:2}],u={toc:m};function s(n){let{components:e,...t}=n;return(0,l.kt)("wrapper",(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/integer-replacement/"},"397. \u6574\u6570\u66ff\u6362")),(0,l.kt)("p",null,"\u9898\u89e3\u6765\u6e90\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/integer-replacement/solution/gong-shui-san-xie-yi-ti-san-jie-dfsbfs-t-373h/"},"https://leetcode-cn.com/problems/integer-replacement/solution/gong-shui-san-xie-yi-ti-san-jie-dfsbfs-t-373h/")),(0,l.kt)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u6b63\u6574\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," \uff0c\u4f60\u53ef\u4ee5\u505a\u5982\u4e0b\u64cd\u4f5c\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"n")," \u662f\u5076\u6570\uff0c\u5219\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"n / 2"),"\u66ff\u6362 ",(0,l.kt)("inlineCode",{parentName:"li"},"n")," \u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"n")," \u662f\u5947\u6570\uff0c\u5219\u53ef\u4ee5\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"n + 1"),"\u6216",(0,l.kt)("inlineCode",{parentName:"li"},"n - 1"),"\u66ff\u6362 ",(0,l.kt)("inlineCode",{parentName:"li"},"n")," \u3002")),(0,l.kt)("p",null,"\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," \u53d8\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," \u6240\u9700\u7684 ",(0,l.kt)("em",{parentName:"p"},"\u6700\u5c0f\u66ff\u6362\u6b21\u6570")," \u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u793a\u4f8b 1\uff1a\n\n\u8f93\u5165\uff1an = 8\n\u8f93\u51fa\uff1a3\n\u89e3\u91ca\uff1a8 -> 4 -> 2 -> 1\n\n\u793a\u4f8b 2\uff1a\n\n\u8f93\u5165\uff1an = 7\n\u8f93\u51fa\uff1a4\n\u89e3\u91ca\uff1a7 -> 8 -> 4 -> 2 -> 1\n\u6216 7 -> 6 -> 3 -> 2 -> 1\n\n\u793a\u4f8b 3\uff1a\n\n\u8f93\u5165\uff1an = 4\n\u8f93\u51fa\uff1a2\n\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1 <= n <= 231 - 1"))),(0,l.kt)("h2",{id:"\u65b9\u6cd5\u4e00\u8bb0\u5fc6\u5316dfs\u81ea\u9876\u5411\u4e0b"},"\u65b9\u6cd5\u4e00\uff1a\u8bb0\u5fc6\u5316dfs\uff08\u81ea\u9876\u5411\u4e0b\uff09"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5177\u5907\u91cd\u53e0\u5b50\u95ee\u9898\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u82e5\u662f\u5076\u6570\uff0c\u9664\u4ee5\u4e8c\u64cd\u4f5c\u53ef\u80fd\u4ea7\u751f\u5947\u6570\uff0c\u8fd9\u4e2a\u5947\u6570\u53ef\u80fd\u4e4b\u524d\u5df2\u8ba1\u7b97\u8fc7"),(0,l.kt)("li",{parentName:"ul"},"\u82e5\u662f\u5947\u6570\uff0c\u52a0\u51cf\u4e00\u4ea7\u751f\u5076\u6570\uff0c\u8fd9\u4e2a\u5076\u6570\u53ef\u80fd\u4e4b\u524d\u5df2\u8ba1\u7b97\u8fc7"))),(0,l.kt)("li",{parentName:"ul"},"\u5177\u5907\u6700\u4f18\u5b50\u7ed3\u6784\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u521d\u59cb\u65f6 n \u4e3a 8\uff0c\u82e5\u6211\u4eec\u77e5\u9053 n \u53d8\u4e3a 3 \u7684\u6700\u4f18\u64cd\u4f5c\u6570 k\uff0c\u90a3\u4e48\u518d\u53d8\u6210 2 \u7684\u6700\u4f18\u64cd\u4f5c\u6570\uff0c\u5c31\u53ef\u80fd\u662f k+1\uff08\u5f53\u7136\u4e5f\u6709\u53ef\u80fd\u662f\u7531 4 -> 2\uff09")))),(0,l.kt)("p",null,"\u95ee\uff1a\u53ef\u4e0d\u53ef\u4ee5\u7528\u52a8\u6001\u89c4\u5212\uff1f"),(0,l.kt)("p",null,"\u4e0d\u53ef\u4ee5\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u56e0\u4e3a\u5728\u300c\u4e00\u5f00\u59cb\u300d\u4e0d\u77e5\u9053 base case \u7684\u7ed3\u679c\uff0c\u65e0\u6cd5\u81ea\u5e95\u5411\u4e0a\u7684\u904d\u5386\u51fa\u7b54\u6848")),(0,l.kt)("p",null,"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"O(logn)")),(0,l.kt)("p",null,"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"O(logn)")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u6709\u4e2a\u7528\u4f8b 2147483647 \u4e3a\u5947\u6570\uff0c\u52a0\u4e00\u540e\u4f1a\u6ea2\u51fa\uff0c\u56e0\u6b64\u8981\u8f6c\u4e3along long")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int dfs(long long n, unordered_map<int, int> &memo) {\n        if (n == 1) return 0;\n        if (memo.count(n)) return memo[n];\n        int res = 0;\n        if (n & 1) {\n            res = min(dfs(n + 1, memo), dfs(n - 1, memo));\n        } else {\n            res = dfs(n >> 1, memo);\n        }\n        memo[n] = res + 1;\n        return memo[n];\n    }\n    int integerReplacement(int n) {\n        unordered_map<int, int> memo;\n        return dfs((long long)n, memo);\n    }\n};\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    unordered_map<int, int> memory;\n    int integerReplacement(int n) {\n        return dfs((long long)n);\n    }\n    int dfs(long long n) {\n        if (n == 1) return 0;\n        if (memory.count(n)) return memory[n];\n        int ans = 0;\n        if (n & 1) { // n % 2 == 1\n            ans = min(dfs(n + 1), dfs(n - 1));\n        } else {\n            ans = dfs(n >> 1); // n / 2\n        }\n        memory[n] = ans + 1;  // \u52a0\u4e0a\u5f53\u524d\u64cd\u4f5c\u7684 1 \u6b21\n        return memory[n];\n    }\n};\n")),(0,l.kt)("h2",{id:"\u65b9\u6cd5\u4e8c\u4f4d\u8fd0\u7b97\u8d2a\u5fc3"},"\u65b9\u6cd5\u4e8c\uff1a\u4f4d\u8fd0\u7b97+\u8d2a\u5fc3"),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4ece\u4e8c\u8fdb\u5236\u7684\u89d2\u5ea6\u8fdb\u884c\u5206\u6790\uff1a\u7ed9\u5b9a\u8d77\u59cb\u503c n\uff0c\u6c42\u89e3\u5c06\u5176\u53d8\u4e3a\u4e8c\u8fdb\u5236 ",(0,l.kt)("inlineCode",{parentName:"p"},"000...0001")," \u7684\u6700\u5c0f\u6b65\u6570\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u5076\u6570\uff08\u4e8c\u8fdb\u5236\u6700\u4f4e\u4f4d\u4e3a 0\uff09\u800c\u8a00\uff0c\u8fdb\u884c /2 \u64cd\u4f5c\uff0c\u5176\u4f5c\u7528\u662f\u5c06\u5f53\u524d\u503c x \u5176\u8fdb\u884c\u4e00\u4e2a\u5355\u4f4d\u7684\u53f3\u79fb ",(0,l.kt)("inlineCode",{parentName:"li"},"x >> 1")),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u5947\u6570\uff08\u4e8c\u8fdb\u5236\u6700\u4f4e\u4f4d\u4e3a 1\uff09\u800c\u8a00\uff0c\u6211\u4eec\u80fd\u591f\u8fdb\u884c +1 \u6216 -1 \u64cd\u4f5c\uff0c\u5206\u6790\u4e24\u79cd\u64cd\u4f5c\u4e3a x \u4ea7\u751f\u7684\u5f71\u54cd\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e +1 \u64cd\u4f5c\u800c\u8a00\uff1a\u6700\u4f4e\u4f4d\u5fc5\u7136\u4e3a 1\uff0c\u6b64\u65f6\u5982\u679c\u6b21\u4f4e\u4f4d\u4e3a 0 \u7684\u8bdd\uff0c +1 \u76f8\u5f53\u4e8e\u5c06\u6700\u4f4e\u4f4d\u548c\u6b21\u4f4e\u4f4d\u4ea4\u6362\uff1b\u5982\u679c\u6b21\u4f4e\u4f4d\u4e3a 1 \u7684\u8bdd\uff0c+1 \u64cd\u4f5c\u5c06",(0,l.kt)("strong",{parentName:"li"},"\u300c\u4ece\u6700\u4f4e\u4f4d\u5f00\u59cb\uff0c\u8fde\u7eed\u4e00\u6bb5\u7684 1\u300d\u8fdb\u884c\u6d88\u9664\uff08\u7f6e\u96f6\uff09\uff0c\u5e76\u5728\u8fde\u7eed\u4e00\u6bb5\u7684\u9ad8\u4e00\u4f4d\u6dfb\u52a0\u4e00\u4e2a 1")),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e -1 \u64cd\u4f5c\u800c\u8a00\uff1a\u6700\u4f4e\u4f4d\u5fc5\u7136\u4e3a 1\uff0c\u5176\u4f5c\u7528\u662f\u5c06\u6700\u4f4e\u4f4d\u7684 1 \u8fdb\u884c\u6d88\u9664\u3002")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6211\u4eec\u7684\u6700\u7ec8\u7684\u76ee\u7684\u5c31\u662f\u5c06\u524d\u9762\u7684\u5c3d\u91cf\u53d8\u4e3a 0\u3002\u56e0\u6b64\uff0c\u5bf9\u4e8e x \u4e3a\u5947\u6570\u65f6\uff0c\u53ea\u8981\u6b21\u4f4e\u4f4d\u4e3a 1\uff08\u5b58\u5728\u8fde\u7eed\u6bb5\uff09\uff0c\u5c31\u5e94\u5f53\u300c\u4f18\u5148\u4f7f\u7528 +1 \u64cd\u4f5c\u300d\uff0c\u5c06\u8fde\u7eed\u7684\u4e00\u6bb5 1 \u90fd\u53d8\u4e3a 0")),(0,l.kt)("p",null,"\u4f46\u9700\u8981\u6ce8\u610f\u8fb9\u754c x = 3 \u65f6\u7684\u60c5\u51b5\uff08\u6b64\u65f6\u9009\u62e9 -1 \u64cd\u4f5c\uff09\u3002"),(0,l.kt)("p",null,"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"O(logn)")),(0,l.kt)("p",null,"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"O(1)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int integerReplacement(int n) {\n        long long cur = n;\n        int cnt = 0;\n        while (cur != 1) {\n            if (cur & 1) {\n                if (cur != 3 && (cur >> 1) & 1 == 1) {\n                    cur++;\n                } else {\n                    cur--;\n                }\n            } else {\n                cur = cur >> 1;\n            }\n            cnt++;\n        }\n        return cnt;\n    }\n};\n")))}s.isMDXComponent=!0}}]);