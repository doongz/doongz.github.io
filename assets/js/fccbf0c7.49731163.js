"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[45245],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>v});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=s(t),m=i,v=u["".concat(c,".").concat(m)]||u[m]||f[m]||o;return t?r.createElement(v,l(l({ref:n},p),{},{components:t})):r.createElement(v,l({ref:n},p))}));function v(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[u]="string"==typeof e?e:i,l[1]=a;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},95230:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var r=t(87462),i=(t(67294),t(3905));const o={},l=void 0,a={unversionedId:"Algorithm/\u56fe\u8bba/\u4f8b\u9898-DFS/<\u5c42\u56de\u6eaf-vis\u8bbe\u8ba1>-N\u7687\u540ell",id:"Algorithm/\u56fe\u8bba/\u4f8b\u9898-DFS/<\u5c42\u56de\u6eaf-vis\u8bbe\u8ba1>-N\u7687\u540ell",title:"<\u5c42\u56de\u6eaf-vis\u8bbe\u8ba1>-N\u7687\u540ell",description:"\u9898\u76ee\uff1a52. N\u7687\u540e II",source:"@site/docs/Algorithm/4-\u56fe\u8bba/\u4f8b\u9898-DFS/52-<\u5c42\u56de\u6eaf-vis\u8bbe\u8ba1>-N\u7687\u540ell.md",sourceDirName:"Algorithm/4-\u56fe\u8bba/\u4f8b\u9898-DFS",slug:"/Algorithm/\u56fe\u8bba/\u4f8b\u9898-DFS/<\u5c42\u56de\u6eaf-vis\u8bbe\u8ba1>-N\u7687\u540ell",permalink:"/docs/Algorithm/\u56fe\u8bba/\u4f8b\u9898-DFS/<\u5c42\u56de\u6eaf-vis\u8bbe\u8ba1>-N\u7687\u540ell",draft:!1,tags:[],version:"current",sidebarPosition:52,frontMatter:{},sidebar:"algorithmSidebar",previous:{title:"<\u5c42\u56de\u6eaf-vis\u8bbe\u8ba1>-N\u7687\u540e",permalink:"/docs/Algorithm/\u56fe\u8bba/\u4f8b\u9898-DFS/<\u5c42\u56de\u6eaf-vis\u8bbe\u8ba1>-N\u7687\u540e"},next:{title:"<\u526a\u679d>-\u7b2ck\u4e2a\u6392\u5217",permalink:"/docs/Algorithm/\u56fe\u8bba/\u4f8b\u9898-DFS/<\u526a\u679d>-\u7b2ck\u4e2a\u6392\u5217"}},c={},s=[],p={toc:s};function u(e){let{components:n,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u9898\u76ee\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/n-queens-ii/"},"52. N\u7687\u540e II")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"n \u7687\u540e\u95ee\u9898")," \u7814\u7a76\u7684\u662f\u5982\u4f55\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," \u4e2a\u7687\u540e\u653e\u7f6e\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"n \xd7 n")," \u7684\u68cb\u76d8\u4e0a\uff0c\u5e76\u4e14\u4f7f\u7687\u540e\u5f7c\u6b64\u4e4b\u95f4\u4e0d\u80fd\u76f8\u4e92\u653b\u51fb\u3002"),(0,i.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570 ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," \uff0c\u8fd4\u56de ",(0,i.kt)("strong",{parentName:"p"},"n \u7687\u540e\u95ee\u9898")," \u4e0d\u540c\u7684\u89e3\u51b3\u65b9\u6848\u7684\u6570\u91cf\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:t(28945).Z,width:"722",height:"322"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u8f93\u5165\uff1an = 4\n\u8f93\u51fa\uff1a2\n\u89e3\u91ca\uff1a\u5982\u4e0a\u56fe\u6240\u793a\uff0c4 \u7687\u540e\u95ee\u9898\u5b58\u5728\u4e24\u4e2a\u4e0d\u540c\u7684\u89e3\u6cd5\u3002\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u8f93\u5165\uff1an = 1\n\u8f93\u51fa\uff1a1\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= n <= 9"))),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\u628a N\u7687\u540e \u7684path\u53bb\u6389\u5373\u53ef"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\nprivate:\n    int n;\n    vector<bool> vis_col;\n    vector<bool> vis_zhu;\n    vector<bool> vis_fu;\n    int ans = 0;\n\n    // \u8981\u8003\u5bdf\u7684\u884c\n    void dfs(int r) {\n        if (r == n) {\n            ans++;\n            return;\n        }\n        for (int c = 0; c < n; c++) {\n            if (vis_col[c]) continue;              // \u540c\u5217\u4e0d\u80fd\u6709\n            if (vis_zhu[r - c + n - 1]) continue;  // \u540c\u4e3b\u5bf9\u89d2\u7ebf\u4e0d\u80fd\u6709\n            if (vis_fu[r + c]) continue;           // \u540c\u526f\u5bf9\u89d2\u7ebf\u4e0d\u80fd\u6709\n\n            vis_col[c] = true;\n            vis_zhu[r - c + n - 1] = true;\n            vis_fu[r + c] = true;\n\n            dfs(r + 1);\n\n            vis_col[c] = false;\n            vis_zhu[r - c + n - 1] = false;\n            vis_fu[r + c] = false;\n        }\n    }\n\npublic:\n    int totalNQueens(int _n) {\n        n = _n;\n        vis_col.resize(n, false);\n        vis_zhu.resize(n + n - 1, false);\n        vis_fu.resize(n + n - 1, false);\n\n        dfs(0);\n        return ans;\n    }\n};\n")))}u.isMDXComponent=!0},28945:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/queens-20221221223809315-f7525ba64193602cd9b4411cb600cddd.jpg"}}]);