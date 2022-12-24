"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[58608],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||i;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},47402:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={},a=void 0,c={unversionedId:"Algorithm/\u52a8\u6001\u89c4\u5212/\u4f8b\u9898-\u5e8f\u5217DP/<LCS>-\u4e0d\u76f8\u4ea4\u7684\u7ebf",id:"Algorithm/\u52a8\u6001\u89c4\u5212/\u4f8b\u9898-\u5e8f\u5217DP/<LCS>-\u4e0d\u76f8\u4ea4\u7684\u7ebf",title:"<LCS>-\u4e0d\u76f8\u4ea4\u7684\u7ebf",description:"\u9898\u76ee\uff1a1035. \u4e0d\u76f8\u4ea4\u7684\u7ebf",source:"@site/docs/Algorithm/3-\u52a8\u6001\u89c4\u5212/\u4f8b\u9898-\u5e8f\u5217DP/1035-<LCS>-\u4e0d\u76f8\u4ea4\u7684\u7ebf.md",sourceDirName:"Algorithm/3-\u52a8\u6001\u89c4\u5212/\u4f8b\u9898-\u5e8f\u5217DP",slug:"/Algorithm/\u52a8\u6001\u89c4\u5212/\u4f8b\u9898-\u5e8f\u5217DP/<LCS>-\u4e0d\u76f8\u4ea4\u7684\u7ebf",permalink:"/docs/Algorithm/\u52a8\u6001\u89c4\u5212/\u4f8b\u9898-\u5e8f\u5217DP/<LCS>-\u4e0d\u76f8\u4ea4\u7684\u7ebf",draft:!1,tags:[],version:"current",sidebarPosition:1035,frontMatter:{},sidebar:"algorithmSidebar",previous:{title:"<\u5b50\u6570\u7ec4\u95ee\u9898>-\u6700\u957f\u6e4d\u6d41\u5b50\u6570\u7ec4",permalink:"/docs/Algorithm/\u52a8\u6001\u89c4\u5212/\u4f8b\u9898-\u5e8f\u5217DP/<\u5b50\u6570\u7ec4\u95ee\u9898>-\u6700\u957f\u6e4d\u6d41\u5b50\u6570\u7ec4"},next:{title:"<LCS>-\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217",permalink:"/docs/Algorithm/\u52a8\u6001\u89c4\u5212/\u4f8b\u9898-\u5e8f\u5217DP/<LCS>-\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217"}},l={},p=[{value:"\u65b9\u6cd5\uff1a\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217\u95ee\u9898",id:"\u65b9\u6cd5\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217\u95ee\u9898",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u9898\u76ee\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/uncrossed-lines/"},"1035. \u4e0d\u76f8\u4ea4\u7684\u7ebf")),(0,o.kt)("h2",{id:"\u65b9\u6cd5\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217\u95ee\u9898"},"\u65b9\u6cd5\uff1a\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217\u95ee\u9898"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int maxUncrossedLines(vector<int>& nums1, vector<int>& nums2) {\n        int n = nums1.size();\n        int m = nums2.size();\n        vector<vector<int>> dp(n + 1, vector<int>(m + 1));\n        for (int i = 1; i < n + 1; i++) {\n            for (int j = 1; j < m + 1; j++) {\n                if (nums1[i - 1] == nums2[j - 1]) {\n                    dp[i][j] = dp[i - 1][j - 1] + 1;\n                } else {\n                    dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);\n                }\n            }\n        }\n        return dp[n][m];\n    }\n};\n")))}u.isMDXComponent=!0}}]);