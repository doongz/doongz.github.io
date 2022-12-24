"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[60371],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30999:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const o={},a=void 0,l={unversionedId:"Algorithm/\u52a8\u6001\u89c4\u5212/\u4f8b\u9898-\u5e8f\u5217DP/<LCS>-\u4e24\u4e2a\u5b57\u7b26\u4e32\u7684\u6700\u5c0fASCII\u5220\u9664\u548c",id:"Algorithm/\u52a8\u6001\u89c4\u5212/\u4f8b\u9898-\u5e8f\u5217DP/<LCS>-\u4e24\u4e2a\u5b57\u7b26\u4e32\u7684\u6700\u5c0fASCII\u5220\u9664\u548c",title:"<LCS>-\u4e24\u4e2a\u5b57\u7b26\u4e32\u7684\u6700\u5c0fASCII\u5220\u9664\u548c",description:"\u9898\u76ee\uff1a712. \u4e24\u4e2a\u5b57\u7b26\u4e32\u7684\u6700\u5c0fASCII\u5220\u9664\u548c",source:"@site/docs/Algorithm/3-\u52a8\u6001\u89c4\u5212/\u4f8b\u9898-\u5e8f\u5217DP/712-<LCS>-\u4e24\u4e2a\u5b57\u7b26\u4e32\u7684\u6700\u5c0fASCII\u5220\u9664\u548c.md",sourceDirName:"Algorithm/3-\u52a8\u6001\u89c4\u5212/\u4f8b\u9898-\u5e8f\u5217DP",slug:"/Algorithm/\u52a8\u6001\u89c4\u5212/\u4f8b\u9898-\u5e8f\u5217DP/<LCS>-\u4e24\u4e2a\u5b57\u7b26\u4e32\u7684\u6700\u5c0fASCII\u5220\u9664\u548c",permalink:"/docs/Algorithm/\u52a8\u6001\u89c4\u5212/\u4f8b\u9898-\u5e8f\u5217DP/<LCS>-\u4e24\u4e2a\u5b57\u7b26\u4e32\u7684\u6700\u5c0fASCII\u5220\u9664\u548c",draft:!1,tags:[],version:"current",sidebarPosition:712,frontMatter:{},sidebar:"algorithmSidebar",previous:{title:"<\u6700\u957f\u4e0a\u5347\u5b50\u6570\u7ec4>-\u6700\u957f\u8fde\u7eed\u9012\u589e\u5e8f\u5217",permalink:"/docs/Algorithm/\u52a8\u6001\u89c4\u5212/\u4f8b\u9898-\u5e8f\u5217DP/<\u6700\u957f\u4e0a\u5347\u5b50\u6570\u7ec4>-\u6700\u957f\u8fde\u7eed\u9012\u589e\u5e8f\u5217"},next:{title:"<\u5b50\u6570\u7ec4\u95ee\u9898>-\u6700\u957f\u91cd\u590d\u5b50\u6570\u7ec4",permalink:"/docs/Algorithm/\u52a8\u6001\u89c4\u5212/\u4f8b\u9898-\u5e8f\u5217DP/<\u5b50\u6570\u7ec4\u95ee\u9898>-\u6700\u957f\u91cd\u590d\u5b50\u6570\u7ec4"}},c={},s=[{value:"\u65b9\u6cd5\uff1aLCS",id:"\u65b9\u6cd5lcs",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u9898\u76ee\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/minimum-ascii-delete-sum-for-two-strings/"},"712. \u4e24\u4e2a\u5b57\u7b26\u4e32\u7684\u6700\u5c0fASCII\u5220\u9664\u548c")),(0,i.kt)("h2",{id:"\u65b9\u6cd5lcs"},"\u65b9\u6cd5\uff1aLCS"),(0,i.kt)("p",null,"s1 -> \u516c\u5171\u5b50\u4e32 -> s2"),(0,i.kt)("p",null,"\u5220\u9664\u7684 ascii \u6700\u5c0f\uff0c\u90a3\u4e48\u4fdd\u7559\u7684\u516c\u5171\u5b50\u4e32 ascii \u6700\u5927"),(0,i.kt)("p",null,"s1 -> \u6700\u5927ascii\u516c\u5171\u5b50\u4e32 -> s2"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u95ee\u9898\u8f6c\u5316\u4e3a\uff1a\u6c42\u6700\u5927ascii\u516c\u5171\u5b50\u4e32")),(0,i.kt)("p",null,"\u5b9a\u4e49\u72b6\u6001\u6570\u7ec4\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"dp[i][j]")," \u8868\u793a ",(0,i.kt)("inlineCode",{parentName:"p"},"s1[0:i-1]")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"s2[0:j-1]")," \u7684\u6700\u5927ascii\u516c\u5171\u5b50\u4e32\u7684ascii\u503c"),(0,i.kt)("p",null,"\u521d\u59cb\u5316\uff1a\u5f53i\u6216j\u4e3a0\u65f6\uff0c\u6ca1\u6709\u516c\u5171\u5b50\u4e32\uff0c\u6b64\u65f6\u72b6\u6001\u4e3a0"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int minimumDeleteSum(string s1, string s2) {\n        int n = s1.size();\n        int m = s2.size();\n        vector<vector<int>> dp(n + 1, vector<int>(m + 1, 0));\n        for (int i = 1; i < n + 1; i++) {\n            for (int j = 1; j < m + 1; j++) {\n                if (s1[i - 1] == s2[j - 1]) {\n                    dp[i][j] = dp[i - 1][j - 1] + s1[i - 1];\n                } else {\n                    dp[i][j] = max(dp[i][j - 1], dp[i - 1][j]);\n                }\n            }\n        }\n        // cout << dp[n][m] << endl;\n        int ascii_1 = 0, ascii_2 = 0;\n        for (int i = 0; i < n; i++) ascii_1 += s1[i];\n        for (int j = 0; j < m; j++) ascii_2 += s2[j];\n        return (ascii_1 - dp[n][m]) + (ascii_2 - dp[n][m]);\n    }\n};\n")))}u.isMDXComponent=!0}}]);