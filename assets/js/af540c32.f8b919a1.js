"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[83492],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=c(t),d=o,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||l;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var l=t.length,i=new Array(l);i[0]=d;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a[f]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<l;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},67078:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const l={},i=void 0,a={unversionedId:"Algorithm/\u6570\u636e\u7ed3\u6784/\u4f8b\u9898-\u4e8c\u53c9\u6811/<dfs-bfs>-\u5bf9\u79f0\u4e8c\u53c9\u6811",id:"Algorithm/\u6570\u636e\u7ed3\u6784/\u4f8b\u9898-\u4e8c\u53c9\u6811/<dfs-bfs>-\u5bf9\u79f0\u4e8c\u53c9\u6811",title:"<dfs-bfs>-\u5bf9\u79f0\u4e8c\u53c9\u6811",description:"101. \u5bf9\u79f0\u4e8c\u53c9\u6811",source:"@site/docs/Algorithm/1-\u6570\u636e\u7ed3\u6784/\u4f8b\u9898-\u4e8c\u53c9\u6811/101-<dfs-bfs>-\u5bf9\u79f0\u4e8c\u53c9\u6811.md",sourceDirName:"Algorithm/1-\u6570\u636e\u7ed3\u6784/\u4f8b\u9898-\u4e8c\u53c9\u6811",slug:"/Algorithm/\u6570\u636e\u7ed3\u6784/\u4f8b\u9898-\u4e8c\u53c9\u6811/<dfs-bfs>-\u5bf9\u79f0\u4e8c\u53c9\u6811",permalink:"/docs/Algorithm/\u6570\u636e\u7ed3\u6784/\u4f8b\u9898-\u4e8c\u53c9\u6811/<dfs-bfs>-\u5bf9\u79f0\u4e8c\u53c9\u6811",draft:!1,tags:[],version:"current",sidebarPosition:101,frontMatter:{},sidebar:"algorithmSidebar",previous:{title:"<\u9012\u5f52>-\u76f8\u540c\u7684\u6811",permalink:"/docs/Algorithm/\u6570\u636e\u7ed3\u6784/\u4f8b\u9898-\u4e8c\u53c9\u6811/<\u9012\u5f52>-\u76f8\u540c\u7684\u6811"},next:{title:"<\u5c42\u904d\u5386>-\u53c9\u6811\u7684\u952f\u9f7f\u5f62\u5c42\u6b21\u904d\u5386",permalink:"/docs/Algorithm/\u6570\u636e\u7ed3\u6784/\u4f8b\u9898-\u4e8c\u53c9\u6811/<\u5c42\u904d\u5386>-\u53c9\u6811\u7684\u952f\u9f7f\u5f62\u5c42\u6b21\u904d\u5386"}},s={},c=[{value:"\u65b9\u6cd5\u4e00\uff1adfs",id:"\u65b9\u6cd5\u4e00dfs",level:2},{value:"\u65b9\u6cd5\u4e8c\uff1abfs",id:"\u65b9\u6cd5\u4e8cbfs",level:2}],p={toc:c};function f(e){let{components:r,...l}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,l,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/symmetric-tree/"},"101. \u5bf9\u79f0\u4e8c\u53c9\u6811")),(0,o.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u4e8c\u53c9\u6811\u7684\u6839\u8282\u70b9 ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," \uff0c \u68c0\u67e5\u5b83\u662f\u5426\u8f74\u5bf9\u79f0\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:t(46796).Z,width:"354",height:"291"})),(0,o.kt)("h2",{id:"\u65b9\u6cd5\u4e00dfs"},"\u65b9\u6cd5\u4e00\uff1adfs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool dfs(TreeNode *l, TreeNode *r) {\n        if (!l && !r) return true;\n        if (!l || !r) return false;\n        return l->val == r->val && dfs(l->left, r->right) && dfs(l->right, r->left);\n    }\n    bool isSymmetric(TreeNode *root) {\n        return dfs(root, root);\n    }\n};\n")),(0,o.kt)("h2",{id:"\u65b9\u6cd5\u4e8cbfs"},"\u65b9\u6cd5\u4e8c\uff1abfs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool isSymmetric(TreeNode *root) {\n        queue<TreeNode *> q;\n        q.push(root);\n        q.push(root);\n        \n        while (!q.empty()) {\n            TreeNode *l = q.front(); q.pop();\n            TreeNode *r = q.front(); q.pop();\n            if (!l && !r) continue;\n            if (!l || !r) return false;\n            if (l->val != r->val) return false;\n\n            q.push(l->left);\n            q.push(r->right);\n            q.push(l->right);\n            q.push(r->left);\n        }\n        return true;\n    }\n};\n")))}f.isMDXComponent=!0},46796:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/symtree1-c8049abc31fadb002fd9871b5b7381dc.jpg"}}]);