"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[13733],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,p=function(e,n){if(null==e)return{};var t,r,p={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,p=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(t),m=p,f=s["".concat(a,".").concat(m)]||s[m]||d[m]||i;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function f(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l[s]="string"==typeof e?e:p,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},41472:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(87462),p=(t(67294),t(3905));const i={},o=void 0,l={unversionedId:"Algorithm/\u52a8\u6001\u89c4\u5212/\u4f8b\u9898-\u5e8f\u5217DP/<\u5b9a\u5deeLIS-\u54c8\u5e0c\u8868dp>-\u6700\u957f\u5b9a\u5dee\u5b50\u5e8f\u5217",id:"Algorithm/\u52a8\u6001\u89c4\u5212/\u4f8b\u9898-\u5e8f\u5217DP/<\u5b9a\u5deeLIS-\u54c8\u5e0c\u8868dp>-\u6700\u957f\u5b9a\u5dee\u5b50\u5e8f\u5217",title:"<\u5b9a\u5deeLIS-\u54c8\u5e0c\u8868dp>-\u6700\u957f\u5b9a\u5dee\u5b50\u5e8f\u5217",description:"\u9898\u76ee\uff1a1218. \u6700\u957f\u5b9a\u5dee\u5b50\u5e8f\u5217",source:"@site/docs/Algorithm/3-\u52a8\u6001\u89c4\u5212/\u4f8b\u9898-\u5e8f\u5217DP/1218-<\u5b9a\u5deeLIS-\u54c8\u5e0c\u8868dp>-\u6700\u957f\u5b9a\u5dee\u5b50\u5e8f\u5217.md",sourceDirName:"Algorithm/3-\u52a8\u6001\u89c4\u5212/\u4f8b\u9898-\u5e8f\u5217DP",slug:"/Algorithm/\u52a8\u6001\u89c4\u5212/\u4f8b\u9898-\u5e8f\u5217DP/<\u5b9a\u5deeLIS-\u54c8\u5e0c\u8868dp>-\u6700\u957f\u5b9a\u5dee\u5b50\u5e8f\u5217",permalink:"/docs/Algorithm/\u52a8\u6001\u89c4\u5212/\u4f8b\u9898-\u5e8f\u5217DP/<\u5b9a\u5deeLIS-\u54c8\u5e0c\u8868dp>-\u6700\u957f\u5b9a\u5dee\u5b50\u5e8f\u5217",draft:!1,tags:[],version:"current",sidebarPosition:1218,frontMatter:{},sidebar:"docsSidebar",previous:{title:"<LCS>-\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217",permalink:"/docs/Algorithm/\u52a8\u6001\u89c4\u5212/\u4f8b\u9898-\u5e8f\u5217DP/<LCS>-\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217"},next:{title:"<LCS\u8f6c\u5316LIS>-\u5f97\u5230\u5b50\u5e8f\u5217\u7684\u6700\u5c11\u64cd\u4f5c\u6b21\u6570",permalink:"/docs/Algorithm/\u52a8\u6001\u89c4\u5212/\u4f8b\u9898-\u5e8f\u5217DP/<LCS\u8f6c\u5316LIS>-\u5f97\u5230\u5b50\u5e8f\u5217\u7684\u6700\u5c11\u64cd\u4f5c\u6b21\u6570"}},a={},c=[{value:"\u65b9\u6cd5\uff1aLIS \u601d\u60f3",id:"\u65b9\u6cd5lis-\u601d\u60f3",level:2}],u={toc:c};function s(e){let{components:n,...t}=e;return(0,p.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u9898\u76ee\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/longest-arithmetic-subsequence-of-given-difference/"},"1218. \u6700\u957f\u5b9a\u5dee\u5b50\u5e8f\u5217")),(0,p.kt)("h2",{id:"\u65b9\u6cd5lis-\u601d\u60f3"},"\u65b9\u6cd5\uff1aLIS \u601d\u60f3"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"1. \u72b6\u6001\u5b9a\u4e49"),"\uff1a"),(0,p.kt)("p",null,"dp[nums","[i]","] \u8868\u793a\u4ee5 nums","[i]"," \u7ed3\u5c3e\u7684\u6700\u957f\u7b49\u5dee\u5b50\u5e8f\u5217\u7684\u957f\u5ea6"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"2. \u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b"),"\uff1a"),(0,p.kt)("p",null,"\u68c0\u67e5 nums","[i]"," \u7684\u65f6\u5019\uff0c\u5728 ","[0, i-1]"," \u7684\u8303\u56f4\u5185\u5bfb\u627e pre = nums","[i]"," - diff"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u5982\u679c\u627e\u5230\u4e86\uff0cdp[nums","[i]","] = dp","[pre]"," + 1"),(0,p.kt)("li",{parentName:"ul"},"\u6ca1\u627e\u5230\uff0cdp[nums","[i]","] = 1")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"arr = [1,5,7,8,5,3,4,2,1], difference = -2\n\u5f53\u904d\u5386\u5230 3 \u7684\u65f6\u5019\uff0c\u524d\u9762\u6709\u4e24\u4e2a 5\uff0c\u5e94\u8be5\u4f7f\u7528\u54ea\u4e2a 5 \u5462\uff1f\n\u5e94\u8be5\u4f7f\u7528 idx=4 \u7684\u90a3\u4e2a5\uff0c\u56e0\u4e3a dp[4]=2\uff0c\u8fd9\u4e2a5\u7684\u957f\u5ea6\u66f4\u957f\n")),(0,p.kt)("p",null,"\u8fd9\u5c31\u5f15\u5bfc\u6211\u4eec\u300c\u54c8\u5e0c\u8868\u300d\u6765\u6784\u9020\u72b6\u6001\u6570\u7ec4 dp {key : val}\uff0cval \u4e3a\u672b\u5c3e\u6570\u5b57\u4e3a key \u7684\u6700\u957f\u5b50\u5e8f\u5217\u7684\u957f\u5ea6"),(0,p.kt)("p",null,"\u4ee5 O(1) \u7684\u65f6\u95f4\u590d\u6742\u5ea6\u627e\u5230\u524d\u9762\u90a3\u4e2a\u6570"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"3. \u521d\u59cb\u5316"),"\uff1a"),(0,p.kt)("p",null,"dp \u54c8\u5e0c\u8868\u4e3a\u7a7a"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"4. \u8fd4\u56de"),"\uff1a"),(0,p.kt)("p",null,"dp \u6570\u7ec4\u4e2d\u7684\u6700\u5927\u503c"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u590d\u6742\u5ea6\u5206\u6790"),"\uff1a"),(0,p.kt)("p",null,"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,p.kt)("inlineCode",{parentName:"p"},"O(n)")),(0,p.kt)("p",null,"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,p.kt)("inlineCode",{parentName:"p"},"O(n)")),(0,p.kt)("p",null,"\u4e0b\u9762\u7684\u5199\u6cd5\u7565\u663e\u7e41\u7410\uff0c\u4f46\u662f\u975e\u5e38\u660e\u4e86\uff0c\u9632\u6b62\u5f53 pre \u4e0d\u5728 dp.keys() \u4e2d\u65f6\uff0c\u63d2\u5165\u4e00\u6761 dp","[pre]"," = 0 \u7684\u810f\u6570\u636e"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-c++"},"class Solution {\npublic:\n    int longestSubsequence(vector<int>& arr, int difference) {\n        int n = arr.size();\n        unordered_map<int, int> dp;\n\n        dp[arr[0]] = 1;\n        for (int i = 1; i < n; i++) {\n            int pre = arr[i] - difference;\n            if (dp.count(pre)) {\n                dp[arr[i]] = dp[pre] + 1;\n            } else {\n                dp[arr[i]] = 1;\n            }\n        }\n        int ans = 0;\n        for (auto it = dp.begin(); it != dp.end(); it++) {\n            ans = max(ans, it->second);\n        }\n\n        return ans;\n    }\n};\n")))}s.isMDXComponent=!0}}]);