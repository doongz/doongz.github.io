"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[76224],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>m});var r=t(67294);function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function p(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){l(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function a(n,e){if(null==n)return{};var t,r,l=function(n,e){if(null==n)return{};var t,r,l={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(l[t]=n[t]);return l}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(l[t]=n[t])}return l}var i=r.createContext({}),u=function(n){var e=r.useContext(i),t=e;return n&&(t="function"==typeof n?n(e):p(p({},e),n)),t},c=function(n){var e=u(n.components);return r.createElement(i.Provider,{value:e},n.children)},s="mdxType",f={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(n,e){var t=n.components,l=n.mdxType,o=n.originalType,i=n.parentName,c=a(n,["components","mdxType","originalType","parentName"]),s=u(t),k=l,m=s["".concat(i,".").concat(k)]||s[k]||f[k]||o;return t?r.createElement(m,p(p({ref:e},c),{},{components:t})):r.createElement(m,p({ref:e},c))}));function m(n,e){var t=arguments,l=e&&e.mdxType;if("string"==typeof n||l){var o=t.length,p=new Array(o);p[0]=k;var a={};for(var i in e)hasOwnProperty.call(e,i)&&(a[i]=e[i]);a.originalType=n,a[s]="string"==typeof n?n:l,p[1]=a;for(var u=2;u<o;u++)p[u]=t[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},68196:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=t(87462),l=(t(67294),t(3905));const o={},p=void 0,a={unversionedId:"Algorithm/\u52a8\u6001\u89c4\u5212/\u4f8b\u9898-\u7ebf\u6027DP/\u5251\u6307Offer-60-n\u4e2a\u9ab0\u5b50\u7684\u70b9\u6570",id:"Algorithm/\u52a8\u6001\u89c4\u5212/\u4f8b\u9898-\u7ebf\u6027DP/\u5251\u6307Offer-60-n\u4e2a\u9ab0\u5b50\u7684\u70b9\u6570",title:"\u5251\u6307Offer-60-n\u4e2a\u9ab0\u5b50\u7684\u70b9\u6570",description:"\u9898\u76ee\uff1a\u5251\u6307 Offer 60. n\u4e2a\u9ab0\u5b50\u7684\u70b9\u6570",source:"@site/docs/Algorithm/3-\u52a8\u6001\u89c4\u5212/\u4f8b\u9898-\u7ebf\u6027DP/\u5251\u6307Offer-60-n\u4e2a\u9ab0\u5b50\u7684\u70b9\u6570.md",sourceDirName:"Algorithm/3-\u52a8\u6001\u89c4\u5212/\u4f8b\u9898-\u7ebf\u6027DP",slug:"/Algorithm/\u52a8\u6001\u89c4\u5212/\u4f8b\u9898-\u7ebf\u6027DP/\u5251\u6307Offer-60-n\u4e2a\u9ab0\u5b50\u7684\u70b9\u6570",permalink:"/docs/Algorithm/\u52a8\u6001\u89c4\u5212/\u4f8b\u9898-\u7ebf\u6027DP/\u5251\u6307Offer-60-n\u4e2a\u9ab0\u5b50\u7684\u70b9\u6570",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"\u5251\u6307Offer-46-\u628a\u6570\u5b57\u7ffb\u8bd1\u6210\u5b57\u7b26\u4e32",permalink:"/docs/Algorithm/\u52a8\u6001\u89c4\u5212/\u4f8b\u9898-\u7ebf\u6027DP/\u5251\u6307Offer-46-\u628a\u6570\u5b57\u7ffb\u8bd1\u6210\u5b57\u7b26\u4e32"},next:{title:"\u5251\u6307Offer-66-\u6784\u5efa\u4e58\u79ef\u6570\u7ec4",permalink:"/docs/Algorithm/\u52a8\u6001\u89c4\u5212/\u4f8b\u9898-\u7ebf\u6027DP/\u5251\u6307Offer-66-\u6784\u5efa\u4e58\u79ef\u6570\u7ec4"}},i={},u=[{value:"\u89e3\u9898\u601d\u8def",id:"\u89e3\u9898\u601d\u8def",level:3},{value:"\u4f7f\u7528\u9012\u5f52\u9020\u6210\u7684\u91cd\u590d\u8ba1\u7b97\u95ee\u9898",id:"\u4f7f\u7528\u9012\u5f52\u9020\u6210\u7684\u91cd\u590d\u8ba1\u7b97\u95ee\u9898",level:3},{value:"\u52a8\u6001\u89c4\u5212",id:"\u52a8\u6001\u89c4\u5212",level:3}],c={toc:u};function s(n){let{components:e,...t}=n;return(0,l.kt)("wrapper",(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u9898\u76ee\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/nge-tou-zi-de-dian-shu-lcof/"},"\u5251\u6307 Offer 60. n\u4e2a\u9ab0\u5b50\u7684\u70b9\u6570")),(0,l.kt)("p",null,"\u628an\u4e2a\u9ab0\u5b50\u6254\u5728\u5730\u4e0a\uff0c\u6240\u6709\u9ab0\u5b50\u671d\u4e0a\u4e00\u9762\u7684\u70b9\u6570\u4e4b\u548c\u4e3as\u3002\u8f93\u5165n\uff0c\u6253\u5370\u51fas\u7684\u6240\u6709\u53ef\u80fd\u7684\u503c\u51fa\u73b0\u7684\u6982\u7387\u3002"),(0,l.kt)("p",null,"\u4f60\u9700\u8981\u7528\u4e00\u4e2a\u6d6e\u70b9\u6570\u6570\u7ec4\u8fd4\u56de\u7b54\u6848\uff0c\u5176\u4e2d\u7b2c i \u4e2a\u5143\u7d20\u4ee3\u8868\u8fd9 n \u4e2a\u9ab0\u5b50\u6240\u80fd\u63b7\u51fa\u7684\u70b9\u6570\u96c6\u5408\u4e2d\u7b2c i \u5c0f\u7684\u90a3\u4e2a\u7684\u6982\u7387\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u793a\u4f8b 1:\n\n\u8f93\u5165: 1\n\u8f93\u51fa: [0.16667,0.16667,0.16667,0.16667,0.16667,0.16667]\n\n\u793a\u4f8b\xa02:\n\n\u8f93\u5165: 2\n\u8f93\u51fa: [0.02778,0.05556,0.08333,0.11111,0.13889,0.16667,0.13889,0.11111,0.08333,0.05556,0.02778]\n\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u9650\u5236\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"1 <= n <= 11\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"\u89e3\u9898\u601d\u8def"},"\u89e3\u9898\u601d\u8def"),(0,l.kt)("p",null,"\u9898\u76ee\u9700\u8981\u6211\u4eec\u6c42\u51fa\u6240\u6709\u70b9\u6570\u51fa\u73b0\u7684\u6982\u7387\uff0c\u6839\u636e\u6982\u7387\u7684\u8ba1\u7b97\u516c\u5f0f\uff0c\u70b9\u6570 k \u51fa\u73b0\u6982\u7387\u5c31\u7b97\u516c\u5f0f\u4e3a\uff1a\n$$\nP_{(k)} = k \u51fa\u73b0\u7684\u6b21\u6570 / \u603b\u6b21\u6570\n$$\n\u6295\u63b7 n \u4e2a\u9ab0\u5b50\uff0c\u6240\u6709\u70b9\u6570\u51fa\u73b0\u7684\u603b\u6b21\u6570\u662f 6^n \uff0c\u56e0\u4e3a\u4e00\u5171\u6709 n \u679a\u9ab0\u5b50\uff0c\u6bcf\u679a\u9ab0\u5b50\u7684\u70b9\u6570\u90fd\u6709 6 \u79cd\u53ef\u80fd\u51fa\u73b0\u7684\u60c5\u51b5\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u7684\u76ee\u7684\u5c31\u662f ",(0,l.kt)("strong",{parentName:"p"},"\u8ba1\u7b97\u51fa\u6295\u63b7\u5b8c n \u679a\u9ab0\u5b50\u540e\u6bcf\u4e2a\u70b9\u6570\u51fa\u73b0\u7684\u6b21\u6570"),"\u3002"),(0,l.kt)("h3",{id:"\u4f7f\u7528\u9012\u5f52\u9020\u6210\u7684\u91cd\u590d\u8ba1\u7b97\u95ee\u9898"},"\u4f7f\u7528\u9012\u5f52\u9020\u6210\u7684\u91cd\u590d\u8ba1\u7b97\u95ee\u9898"),(0,l.kt)("p",null,"\u5355\u7eaf\u4f7f\u7528\u9012\u5f52\u641c\u7d22\u89e3\u7a7a\u95f4\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a 6^n\uff0c\u4f1a\u9020\u6210\u8d85\u65f6\u9519\u8bef\uff0c\u56e0\u4e3a\u5b58\u5728\u91cd\u590d\u5b50\u7ed3\u6784\u3002\u89e3\u91ca\u5982\u4e0b\uff1a"),(0,l.kt)("p",null,"\u6211\u4eec\u4f7f\u7528\u9012\u5f52\u51fd\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"getCount(n, k)")," \u6765\u8868\u793a\u6295\u63b7 n \u679a\u9ab0\u5b50\uff0c\u70b9\u6570 k \u51fa\u73b0\u7684\u6b21\u6570\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u7b80\u5316\u5206\u6790\uff0c\u6211\u4eec\u4ee5\u6295\u63b7 2 \u679a\u9ab0\u5b50\u4e3a\u4f8b\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u6765\u6a21\u62df\u8ba1\u7b97\u70b9\u6570 4 \u548c \u70b9\u6570 6 \uff0c\u8fd9\u4e24\u79cd\u70b9\u6570\u5404\u81ea\u51fa\u73b0\u7684\u6b21\u6570\u3002\u4e5f\u5c31\u662f\u8ba1\u7b97 ",(0,l.kt)("inlineCode",{parentName:"p"},"getCount(2, 4)")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"getCount(2, 6)")),(0,l.kt)("p",null,"\u5b83\u4eec\u7684\u8ba1\u7b97\u516c\u5f0f\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"// 1,3 3,1 2,2 \u7edf\u8ba1\u4e00\u4e2a\u9ab0\u5b50\u51fa\u73b0 1 2 3 \u7684\u6b21\u6570\ngetCount(2, 4) = getCount(1, 1) + getCount(1, 2) + getCount(1, 3)\n\n// 1,5 5,1 2,4 4,2 3,3 \u7edf\u8ba1\u4e00\u4e2a\u9ab0\u5b50\u51fa\u73b0 1 2 3 4 5 \u7684\u6b21\u6570\ngetCount(2, 6) = getCount(1, 1) + getCount(1, 2) + getCount(1, 3) + getCount(1, 4) + getCount(1, 5) \n")),(0,l.kt)("p",null,"\u6211\u4eec\u53d1\u73b0\u9012\u5f52\u7edf\u8ba1\u8fd9\u4e24\u79cd\u70b9\u6570\u7684\u51fa\u73b0\u6b21\u6570\u65f6\uff0c\u91cd\u590d\u8ba1\u7b97\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"getCount(1, 1)"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"getCount(1, 2)"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"getCount(1, 3)")),(0,l.kt)("p",null,"\u8fd9\u4e9b\u5b50\u7ed3\u6784\uff0c\u8ba1\u7b97\u5176\u5b83\u70b9\u6570\u7684\u6b21\u6570\u65f6\u540c\u6837\u5b58\u5728\u5927\u91cf\u7684\u91cd\u590d\u8ba1\u7b97\u3002"),(0,l.kt)("p",null,"\u5f53\u7136\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("strong",{parentName:"p"},"\u8bb0\u5fc6\u5316dfs")," \u89e3\u51b3"),(0,l.kt)("h3",{id:"\u52a8\u6001\u89c4\u5212"},"\u52a8\u6001\u89c4\u5212"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"1. \u5b9a\u4e49\u72b6\u6001")),(0,l.kt)("p",null,"\u901a\u8fc7\u9898\u76ee\u6211\u4eec\u77e5\u9053\u4e00\u5171\u6295\u63b7 n \u679a\u9ab0\u5b50\uff0c\u90a3\u6700\u540e\u4e00\u4e2a\u9636\u6bb5\u5f88\u663e\u7136\u5c31\u662f\uff1a",(0,l.kt)("strong",{parentName:"p"},"\u5f53\u6295\u63b7\u5b8c n \u679a\u9ab0\u5b50\u540e\uff0c\u5404\u4e2a\u70b9\u6570\u51fa\u73b0\u7684\u6b21\u6570"),"\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff0c\u8fd9\u91cc\u7684\u70b9\u6570\u6307\u7684\u662f\u524d n \u679a\u9ab0\u5b50\u7684\u70b9\u6570\u548c\uff0c\u800c\u4e0d\u662f\u7b2c n \u679a\u9ab0\u5b50\u7684\u70b9\u6570\uff0c\u4e0b\u6587\u540c\u7406\u3002")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9996\u5148\u7528\u6570\u7ec4\u7684\u7b2c\u4e00\u7ef4\u6765\u8868\u793a\u9636\u6bb5\uff0c\u4e5f\u5c31\u662f\u6295\u63b7\u5b8c\u4e86\u51e0\u679a\u9ab0\u5b50\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7136\u540e\u7528\u7b2c\u4e8c\u7ef4\u6765\u8868\u793a\u6295\u63b7\u5b8c\u8fd9\u4e9b\u9ab0\u5b50\u540e\uff0c\u53ef\u80fd\u51fa\u73b0\u7684\u70b9\u6570\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u7ec4\u7684\u503c\u5c31\u8868\u793a\uff0c\u8be5\u9636\u6bb5\u5404\u4e2a\u70b9\u6570\u51fa\u73b0\u7684\u6b21\u6570\u3002")),(0,l.kt)("p",null,"\u6240\u4ee5\u72b6\u6001\u8868\u793a\u5c31\u662f\u8fd9\u6837\u7684\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"dp[i][j] "),"\uff0c\u8868\u793a\u6295\u63b7\u5b8c i \u679a\u9ab0\u5b50\u540e\uff0c\u70b9\u6570 j \u7684\u51fa\u73b0\u6b21\u6570\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"2. \u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b")),(0,l.kt)("p",null,"\u5355\u5355\u770b\u7b2c n \u679a\u9ab0\u5b50\uff0c\u5b83\u7684\u70b9\u6570\u53ef\u80fd\u4e3a 1, 2, 3, ... , 6 \u56e0\u6b64\u6295\u63b7\u5b8c n \u679a\u9ab0\u5b50\u540e\u70b9\u6570 j \u51fa\u73b0\u7684\u6b21\u6570\uff0c\u53ef\u4ee5\u7531\u6295\u63b7\u5b8c n-1 \u679a\u9ab0\u5b50\u540e\uff0c\u5bf9\u5e94\u70b9\u6570 j-1, j-2, j-3, ... , j-6 \u51fa\u73b0\u7684\u6b21\u6570\u4e4b\u548c\u8f6c\u5316\u8fc7\u6765\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c++"},"for (\u7b2cn\u679a\u9ab0\u5b50\u7684\u70b9\u6570 i = 1; i <= 6; i++) {\n    dp[n][j] += dp[n-1][j - i]\n}\n")),(0,l.kt)("p",null,"\u5199\u6210\u6570\u5b66\u516c\u5f0f\u662f\u8fd9\u6837\u7684\uff1a\n$$\ndp","[n][j]"," = \\sum^6_{i=1}dp","[n-1][j-i]","\n$$\nn \u8868\u793a\u9636\u6bb5\uff0cj \u8868\u793a\u6295\u63b7\u5b8c n \u679a\u9ab0\u5b50\u540e\u7684\u70b9\u6570\u548c\uff0ci \u8868\u793a\u7b2c n \u679a\u9ab0\u5b50\u4f1a\u51fa\u73b0\u7684\u516d\u4e2a\u70b9\u6570\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"3. \u521d\u59cb\u5316")),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u77e5\u9053\u7684\u72b6\u6001\u662f\u5565\uff0c\u5c31\u662f\u7b2c\u4e00\u9636\u6bb5\u7684\u72b6\u6001\uff1a\u6295\u63b7\u5b8c 1 \u679a\u9ab0\u5b50\u540e\uff0c\u5b83\u7684\u53ef\u80fd\u70b9\u6570\u5206\u522b\u4e3a 1, 2, 3, ... , 6\uff0c\u5e76\u4e14\u6bcf\u4e2a\u70b9\u6570\u51fa\u73b0\u7684\u6b21\u6570\u90fd\u662f 1 ."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c++"},"for (int j = 1; j <= 6; j++) {\n    dp[1][j] = 1;\n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"4. \u8f93\u51fa")),(0,l.kt)("p",null,"\u8f93\u51fa\u6295\u63b7\u7b2c n \u6b21\u9ab0\u5b50\u65f6\u7684\u5404\u9879\u70b9\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c++"},"for (int j = n; j <= n * 6; j++) {\n    ans.push_back(dp[n][j]);\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c++"},"class Solution {\npublic:\n    vector<double> dicesProbability(int n) {\n        int dp[12][67];\n        memset(dp, 0, sizeof(dp));\n        // \u521d\u59cb\u5316\n        for (int j = 1; j <= 6; j++) {\n            dp[1][j] = 1;\n        }\n        // \u72b6\u6001\u8f6c\u79fb\n        for (int i = 2; i <= n; i++) {                // \u7b2c i \u6b21\u63b7\u9ab0\u5b50\n            for (int j = i; j <= 6 * i; j++) {        // j \u4e3a\u53ef\u80fd\u63b7\u51fa\u7684\u9ab0\u5b50\u7684\u70b9\u6570\u548c\n                for (int cur = 1; cur <= 6; cur++) {  // \u672c\u6b21\u63b7\u51fa\u7684\u9ab0\u5b50\u70b9\u6570\n                    if (j - cur > 0) {\n                        dp[i][j] += dp[i - 1][j - cur];\n                    }\n                }\n            }\n        }\n        int all = pow(6, n);\n        vector<double> ans;\n        for (int j = n; j <= 6 * n; j++) {\n            ans.push_back((double)dp[n][j] / all);\n        }\n        return ans;\n    }\n};\n")))}s.isMDXComponent=!0}}]);