"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[94171],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var i=n.createContext({}),s=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=s(t.components);return n.createElement(i.Provider,{value:e},t.children)},h="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,i=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),h=s(r),c=o,f=h["".concat(i,".").concat(c)]||h[c]||m[c]||a;return r?n.createElement(f,l(l({ref:e},u),{},{components:r})):n.createElement(f,l({ref:e},u))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,l=new Array(a);l[0]=c;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[h]="string"==typeof t?t:o,l[1]=p;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},89704:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={},l="\u8def\u5f84\u95ee\u9898",p={unversionedId:"Algorithm/\u7cfb\u5217\u9898\u76ee/\u6811\u7684\u8def\u5f84\u95ee\u9898/README",id:"Algorithm/\u7cfb\u5217\u9898\u76ee/\u6811\u7684\u8def\u5f84\u95ee\u9898/README",title:"\u8def\u5f84\u95ee\u9898",description:"\u6765\u6e90\uff1ahttps://leetcode.cn/problems/paths-with-sum-lcci/solution/yi-pian-wen-zhang-jie-jue-suo-you-er-cha-w3hu/",source:"@site/docs/Algorithm/6-\u7cfb\u5217\u9898\u76ee/06-\u6811\u7684\u8def\u5f84\u95ee\u9898/README.md",sourceDirName:"Algorithm/6-\u7cfb\u5217\u9898\u76ee/06-\u6811\u7684\u8def\u5f84\u95ee\u9898",slug:"/Algorithm/\u7cfb\u5217\u9898\u76ee/\u6811\u7684\u8def\u5f84\u95ee\u9898/",permalink:"/docs/Algorithm/\u7cfb\u5217\u9898\u76ee/\u6811\u7684\u8def\u5f84\u95ee\u9898/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"\u5251\u6307Offer-II-009-<\u5b50\u6570\u7ec4\u8ba1\u6570>-\u4e58\u79ef\u5c0f\u4e8e K \u7684\u5b50\u6570\u7ec4",permalink:"/docs/Algorithm/\u7cfb\u5217\u9898\u76ee/\u5b50\u6570\u7ec4\u95ee\u9898/\u5251\u6307Offer-II-009-<\u5b50\u6570\u7ec4\u8ba1\u6570>-\u4e58\u79ef\u5c0f\u4e8e K \u7684\u5b50\u6570\u7ec4"},next:{title:"<\u8bb0\u5f55\u8def\u5f84\u503c>-\u8def\u5f84\u603b\u548c",permalink:"/docs/Algorithm/\u7cfb\u5217\u9898\u76ee/\u6811\u7684\u8def\u5f84\u95ee\u9898/<\u8bb0\u5f55\u8def\u5f84\u503c>-\u8def\u5f84\u603b\u548c"}},i={},s=[{value:"\u95ee\u9898\u5206\u7c7b",id:"\u95ee\u9898\u5206\u7c7b",level:2},{value:"1\u3001\u81ea\u9876\u5411\u4e0b",id:"1\u81ea\u9876\u5411\u4e0b",level:3},{value:"2\u3001\u975e\u81ea\u9876\u5411\u4e0b",id:"2\u975e\u81ea\u9876\u5411\u4e0b",level:3},{value:"\u89e3\u9898\u6a21\u677f",id:"\u89e3\u9898\u6a21\u677f",level:2},{value:"1\u3001\u81ea\u9876\u5411\u4e0b",id:"1\u81ea\u9876\u5411\u4e0b-1",level:3},{value:"2\u3001\u975e\u81ea\u9876\u800c\u4e0b",id:"2\u975e\u81ea\u9876\u800c\u4e0b",level:3},{value:"\u9898\u76ee\u5206\u6790",id:"\u9898\u76ee\u5206\u6790",level:2},{value:"1\u3001\u81ea\u9876\u5411\u4e0b",id:"1\u81ea\u9876\u5411\u4e0b-2",level:3},{value:"2\u3001\u975e\u81ea\u9876\u5411\u4e0b",id:"2\u975e\u81ea\u9876\u5411\u4e0b-1",level:3}],u={toc:s};function h(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u8def\u5f84\u95ee\u9898"},"\u8def\u5f84\u95ee\u9898"),(0,o.kt)("p",null,"\u6765\u6e90\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/paths-with-sum-lcci/solution/yi-pian-wen-zhang-jie-jue-suo-you-er-cha-w3hu/"},"https://leetcode.cn/problems/paths-with-sum-lcci/solution/yi-pian-wen-zhang-jie-jue-suo-you-er-cha-w3hu/")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u4ec5\u4f9b\u53c2\u8003\uff0c\u5177\u4f53\u770b\u4f8b\u9898\u9898\u89e3")),(0,o.kt)("h2",{id:"\u95ee\u9898\u5206\u7c7b"},"\u95ee\u9898\u5206\u7c7b"),(0,o.kt)("h3",{id:"1\u81ea\u9876\u5411\u4e0b"},"1\u3001\u81ea\u9876\u5411\u4e0b"),(0,o.kt)("p",null,"\u987e\u540d\u601d\u4e49\uff0c\u5c31\u662f\u4ece\u67d0\u4e00\u4e2a\u8282\u70b9(\u4e0d\u4e00\u5b9a\u662f\u6839\u8282\u70b9)\uff0c\u4ece\u4e0a\u5411\u4e0b\u5bfb\u627e\u8def\u5f84\uff0c\u5230\u67d0\u4e00\u4e2a\u8282\u70b9(\u4e0d\u4e00\u5b9a\u662f\u53f6\u8282\u70b9)\u7ed3\u675f"),(0,o.kt)("p",null,"\u5177\u4f53\u9898\u76ee\u5982\u4e0b\uff1a"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/binary-tree-paths/"},"257. \u4e8c\u53c9\u6811\u7684\u6240\u6709\u8def\u5f84")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/path-sum/"},"112. \u8def\u5f84\u603b\u548c")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/path-sum-ii/"},"113. \u8def\u5f84\u603b\u548c II")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/path-sum-iii/"},"437. \u8def\u5f84\u603b\u548c III")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/smallest-string-starting-from-leaf/"},"988. \u4ece\u53f6\u7ed3\u70b9\u5f00\u59cb\u7684\u6700\u5c0f\u5b57\u7b26\u4e32")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/paths-with-sum-lcci/"},"\u9762\u8bd5\u9898 04.12. \u6c42\u548c\u8def\u5f84")),(0,o.kt)("p",null,"\u800c\u7ee7\u7eed\u7ec6\u5206\u7684\u8bdd\u8fd8\u53ef\u4ee5\u5206\u6210\u4e00\u822c\u8def\u5f84\u4e0e\u7ed9\u5b9a\u548c\u7684\u8def\u5f84"),(0,o.kt)("h3",{id:"2\u975e\u81ea\u9876\u5411\u4e0b"},"2\u3001\u975e\u81ea\u9876\u5411\u4e0b"),(0,o.kt)("p",null,"\u5c31\u662f\u4ece\u4efb\u610f\u8282\u70b9\u5230\u4efb\u610f\u8282\u70b9\u7684\u8def\u5f84\uff0c\u4e0d\u9700\u8981\u81ea\u9876\u5411\u4e0b"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/binary-tree-maximum-path-sum/"},"124. \u4e8c\u53c9\u6811\u4e2d\u7684\u6700\u5927\u8def\u5f84\u548c")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/longest-univalue-path/"},"687. \u6700\u957f\u540c\u503c\u8def\u5f84")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/diameter-of-binary-tree/"},"543. \u4e8c\u53c9\u6811\u7684\u76f4\u5f84")),(0,o.kt)("h2",{id:"\u89e3\u9898\u6a21\u677f"},"\u89e3\u9898\u6a21\u677f"),(0,o.kt)("p",null,"\u8fd9\u7c7b\u9898\u901a\u5e38\u7528\u6df1\u5ea6\u4f18\u5148\u641c\u7d22(DFS)\u548c\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22(BFS)\u89e3\u51b3\uff0cBFS\u8f83DFS\u7e41\u7410\uff0c\u8fd9\u91cc\u4e3a\u4e86\u7b80\u6d01\u53ea\u5c55\u73b0DFS\u4ee3\u7801"),(0,o.kt)("h3",{id:"1\u81ea\u9876\u5411\u4e0b-1"},"1\u3001\u81ea\u9876\u5411\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c++"},"// \u4e00\u822c\u8def\u5f84\uff1a\nvector<vector<int>>res;\nvoid dfs(TreeNode*root,vector<int>path)\n{\n    if(!root) return;  //\u6839\u8282\u70b9\u4e3a\u7a7a\u76f4\u63a5\u8fd4\u56de\n    path.push_back(root->val);  //\u4f5c\u51fa\u9009\u62e9\n    if(!root->left && !root->right) //\u5982\u679c\u5230\u53f6\u8282\u70b9  \n    {\n        res.push_back(path);\n        return;\n    }\n    dfs(root->left,path);  //\u7ee7\u7eed\u9012\u5f52\n    dfs(root->right,path);\n}\n\n// \u7ed9\u5b9a\u548c\u7684\u8def\u5f84\uff1a\nvoid dfs(TreeNode*root, int sum, vector<int> path)\n{\n    if (!root)\n        return;\n    sum -= root->val;\n    path.push_back(root->val);\n    if (!root->left && !root->right && sum == 0)\n    {\n        res.push_back(path);\n        return;\n    }\n    dfs(root->left, sum, path);\n    dfs(root->right, sum, path);\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u8fd9\u7c7b\u9898\u578bDFS\u6ce8\u610f\u70b9\uff1a")),(0,o.kt)("p",null,"1\u3001\u5982\u679c\u662f\u627e\u8def\u5f84\u548c\u7b49\u4e8e\u7ed9\u5b9atarget\u7684\u8def\u5f84\u7684\uff0c\u90a3\u4e48\u53ef\u4ee5\u4e0d\u7528\u65b0\u589e\u4e00\u4e2a\u4e34\u65f6\u53d8\u91cfcursum\u6765\u5224\u65ad\u5f53\u524d\u8def\u5f84\u548c\uff0c"),(0,o.kt)("p",null,"\u53ea\u9700\u8981\u7528\u7ed9\u5b9a\u548ctarget\u51cf\u53bb\u8282\u70b9\u503c\uff0c\u6700\u7ec8\u7ed3\u675f\u6761\u4ef6\u5224\u65adtarget==0\u5373\u53ef"),(0,o.kt)("p",null,"2\u3001\u662f\u5426\u8981\u56de\u6eaf\uff1a\u4e8c\u53c9\u6811\u7684\u95ee\u9898\u5927\u90e8\u5206\u662f\u4e0d\u9700\u8981\u56de\u6eaf\u7684\uff0c\u539f\u56e0\u5982\u4e0b\uff1a"),(0,o.kt)("p",null,"\u4e8c\u53c9\u6811\u7684\u9012\u5f52\u90e8\u5206\uff1adfs(root->left),dfs(root->right) \u5df2\u7ecf\u628a\u53ef\u80fd\u7684\u8def\u5f84\u7a77\u5c3d\u4e86,"),(0,o.kt)("p",null,"\u56e0\u6b64\u5230\u4efb\u610f\u53f6\u8282\u70b9\u7684\u8def\u5f84\u53ea\u53ef\u80fd\u6709\u4e00\u6761\uff0c\u7edd\u5bf9\u4e0d\u53ef\u80fd\u51fa\u73b0\u53e6\u5916\u7684\u8def\u5f84\u4e5f\u5230\u8fd9\u4e2a\u6ee1\u8db3\u6761\u4ef6\u7684\u53f6\u8282\u70b9\u7684;"),(0,o.kt)("p",null,"\u800c\u5bf9\u6bd4\u4e8c\u7ef4\u6570\u7ec4(\u4f8b\u5982\u8ff7\u5bab\u95ee\u9898)\u7684DFS,for\u5faa\u73af\u5411\u56db\u4e2a\u65b9\u5411\u67e5\u627e\u6bcf\u6b21\u53ea\u80fd\u671d\u5411\u4e00\u4e2a\u65b9\u5411\uff0c\u5e76\u6ca1\u6709\u7a77\u5c3d\u8def\u5f84\uff0c"),(0,o.kt)("p",null,"\u56e0\u6b64\u67d0\u4e00\u4e2a\u6ee1\u8db3\u6761\u4ef6\u7684\u70b9\u53ef\u80fd\u662f\u6709\u591a\u6761\u8def\u5f84\u5230\u8be5\u70b9\u7684"),(0,o.kt)("p",null,"\u5e76\u4e14visited\u6570\u7ec4\u6807\u8bb0\u5df2\u7ecf\u8d70\u8fc7\u7684\u8def\u5f84\u662f\u4f1a\u53d7\u5230\u53e6\u5916\u8def\u5f84\u662f\u5426\u8bbf\u95ee\u7684\u5f71\u54cd\uff0c\u8fd9\u65f6\u5019\u5fc5\u987b\u56de\u6eaf"),(0,o.kt)("p",null,"3\u3001\u627e\u5230\u8def\u5f84\u540e\u662f\u5426\u8981return:"),(0,o.kt)("p",null,"\u53d6\u51b3\u4e8e\u9898\u76ee\u662f\u5426\u8981\u6c42\u627e\u5230\u53f6\u8282\u70b9\u6ee1\u8db3\u6761\u4ef6\u7684\u8def\u5f84,\u5982\u679c\u5fc5\u987b\u5230\u53f6\u8282\u70b9,\u90a3\u4e48\u5c31\u8981return;"),(0,o.kt)("p",null,"\u4f46\u5982\u679c\u662f\u5230\u4efb\u610f\u8282\u70b9\u90fd\u53ef\u4ee5\uff0c\u90a3\u4e48\u5fc5\u4e0d\u80fdreturn,\u56e0\u4e3a\u8fd9\u6761\u8def\u5f84\u4e0b\u9762\u8fd8\u53ef\u80fd\u6709\u66f4\u6df1\u7684\u8def\u5f84\u6ee1\u8db3\u6761\u4ef6\uff0c\u8fd8\u8981\u5728\u6b64\u57fa\u7840\u4e0a\u7ee7\u7eed\u9012\u5f52"),(0,o.kt)("p",null,"4\u3001\u662f\u5426\u8981\u53cc\u91cd\u9012\u5f52(\u5373\u8c03\u7528\u6839\u8282\u70b9\u7684dfs\u51fd\u6570\u540e\uff0c\u7ee7\u7eed\u8c03\u7528\u6839\u5de6\u53f3\u8282\u70b9\u7684pathsum\u51fd\u6570)\uff1a"),(0,o.kt)("p",null,"\u770b\u9898\u76ee\u8981\u4e0d\u8981\u6c42\u4ece\u6839\u8282\u70b9\u5f00\u59cb\u7684\uff0c\u8fd8\u662f\u4ece\u4efb\u610f\u8282\u70b9\u5f00\u59cb"),(0,o.kt)("h3",{id:"2\u975e\u81ea\u9876\u800c\u4e0b"},"2\u3001\u975e\u81ea\u9876\u800c\u4e0b"),(0,o.kt)("p",null,"\u8fd9\u7c7b\u9898\u76ee\u4e00\u822c\u89e3\u9898\u601d\u8def\u5982\u4e0b\uff1a"),(0,o.kt)("p",null,"\u8bbe\u8ba1\u4e00\u4e2a\u8f85\u52a9\u51fd\u6570maxpath\uff0c\u8c03\u7528\u81ea\u8eab\u6c42\u51fa\u4ee5\u4e00\u4e2a\u8282\u70b9\u4e3a\u6839\u8282\u70b9\u7684\u5de6\u4fa7\u6700\u957f\u8def\u5f84left\u548c\u53f3\u4fa7\u6700\u957f\u8def\u5f84right\uff0c\u90a3\u4e48\u7ecf\u8fc7\u8be5\u8282\u70b9\u7684\u6700\u957f\u8def\u5f84\u5c31\u662fleft+right"),(0,o.kt)("p",null,"\u63a5\u7740\u53ea\u9700\u8981\u4ece\u6839\u8282\u70b9\u5f00\u59cbdfs,\u4e0d\u65ad\u6bd4\u8f83\u66f4\u65b0\u5168\u5c40\u53d8\u91cf\u5373\u53ef"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c++"},"int res=0;\nint maxPath(TreeNode *root) //\u4ee5root\u4e3a\u8def\u5f84\u8d77\u59cb\u70b9\u7684\u6700\u957f\u8def\u5f84\n{\n    if (!root)\n        return 0;\n    int left=maxPath(root->left);\n    int right=maxPath(root->right);\n    res = max(res, left + right + root->val); //\u66f4\u65b0\u5168\u5c40\u53d8\u91cf  \n    return max(left, right);   //\u8fd4\u56de\u5de6\u53f3\u8def\u5f84\u8f83\u957f\u8005\n}\n")),(0,o.kt)("p",null,"\u8fd9\u7c7b\u9898\u578bDFS\u6ce8\u610f\u70b9\uff1a"),(0,o.kt)("p",null,"1\u3001left,right\u4ee3\u8868\u7684\u542b\u4e49\u8981\u6839\u636e\u9898\u76ee\u6240\u6c42\u8bbe\u7f6e\uff0c\u6bd4\u5982\u6700\u957f\u8def\u5f84\u3001\u6700\u5927\u8def\u5f84\u548c\u7b49\u7b49"),(0,o.kt)("p",null,"2\u3001\u5168\u5c40\u53d8\u91cfres\u7684\u521d\u503c\u8bbe\u7f6e\u662f0\u8fd8\u662fINT_MIN\u8981\u770b\u9898\u76ee\u8282\u70b9\u662f\u5426\u5b58\u5728\u8d1f\u503c,\u5982\u679c\u5b58\u5728\u5c31\u7528INT_MIN\uff0c\u5426\u5219\u5c31\u662f0"),(0,o.kt)("p",null,"3\u3001\u6ce8\u610f\u4e24\u70b9\u4e4b\u95f4\u8def\u5f84\u4e3a1\uff0c\u56e0\u6b64\u4e00\u4e2a\u70b9\u662f\u4e0d\u80fd\u6784\u6210\u8def\u5f84\u7684"),(0,o.kt)("h2",{id:"\u9898\u76ee\u5206\u6790"},"\u9898\u76ee\u5206\u6790"),(0,o.kt)("h3",{id:"1\u81ea\u9876\u5411\u4e0b-2"},"1\u3001\u81ea\u9876\u5411\u4e0b"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/binary-tree-paths/"},"257. \u4e8c\u53c9\u6811\u7684\u6240\u6709\u8def\u5f84")),(0,o.kt)("p",null,'\u76f4\u63a5\u5957\u7528\u6a21\u677f1\u5373\u53ef\uff0c\u6ce8\u610f\u628a"->"\u653e\u5728\u9012\u5f52\u8c03\u7528\u4e2d'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c++"},'vector<string> res;\nvector<string> binaryTreePaths(TreeNode<T> *root)\n{\n    dfs(root, "");\n    return res;\n}\n\nvoid dfs(TreeNode*root, string path)\n{\n    if (!root)\n        return;\n    path += to_string(root->val);\n    if (!root->left && !root->right)\n    {\n        res.push_back(path);\n        return;\n    }\n    dfs(root->left, path+"->");\n    dfs(root->right, path+"->");\n}\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/path-sum-ii/"},"113. \u8def\u5f84\u603b\u548c II")),(0,o.kt)("p",null,"\u76f4\u63a5\u5957\u7528\u6a21\u677f2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c++"},"vector<vector<int>> res;\nvector<vector<int>> pathSum(TreeNode *root, int targetSum)\n{\n    vector<int> path;\n    dfs(root, targetSum, path);\n    return res;\n}\n\nvoid dfs(TreeNode*root, int sum, vector<int> path)\n{\n    if (!root)\n        return;\n    sum -= root->val;\n    path.push_back(root->val);\n    if (!root->left && !root->right && sum == 0)\n    {\n        res.push_back(path);\n        return;\n    }\n    dfs(root->left, sum, path);\n    dfs(root->right, sum, path);\n}\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/path-sum-iii/"},"437. \u8def\u5f84\u603b\u548c III")),(0,o.kt)("p",null,"\u53cc\u91cd\u9012\u5f52\uff1a\u5148\u8c03\u7528dfs\u51fd\u6570\u4eceroot\u5f00\u59cb\u67e5\u627e\u8def\u5f84\uff0c\u518d\u8c03\u7528pathsum\u51fd\u6570\u5230root\u5de6\u53f3\u5b50\u6811\u5f00\u59cb\u67e5\u627e"),(0,o.kt)("p",null,"\u5957\u7528\u6a21\u677f2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c++"},"int count = 0;\nint pathSum(TreeNode *root, int targetSum)\n{\n    if (!root)\n        return 0;\n    dfs1(root, targetSum);            //\u4ee5root\u4e3a\u8d77\u59cb\u70b9\u67e5\u627e\u8def\u5f84\n    pathSum(root->left, targetSum);  //\u5de6\u5b50\u6811\u9012\u5f52\n    pathSum(root->right, targetSum); //\u53f3\u5b50\u6811\u9012\u5f52\n    return count;\n}\n\nvoid dfs(TreeNode *root, int sum)\n{\n    if (!root)\n        return;\n    sum -= root->val;\n    if (sum == 0) //\u6ce8\u610f\u4e0d\u8981return,\u56e0\u4e3a\u4e0d\u8981\u6c42\u5230\u53f6\u8282\u70b9\u7ed3\u675f,\u6240\u4ee5\u4e00\u6761\u8def\u5f84\u4e0b\u9762\u8fd8\u53ef\u80fd\u6709\u53e6\u4e00\u6761\n        count++;  //\u5982\u679c\u627e\u5230\u4e86\u4e00\u4e2a\u8def\u5f84\u5168\u5c40\u53d8\u91cf\u5c31+1\n    dfs1(root->left, sum);\n    dfs1(root->right, sum);\n}\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/smallest-string-starting-from-leaf/"},"988. \u4ece\u53f6\u7ed3\u70b9\u5f00\u59cb\u7684\u6700\u5c0f\u5b57\u7b26\u4e32")),(0,o.kt)("p",null,"\u6362\u6c64\u4e0d\u6362\u836f\uff0c\u5957\u7528\u6a21\u677f1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c++"},"vector<string> path;\nstring smallestFromLeaf(TreeNode *root)\n{\n    dfs(root, \"\");\n    sort(path.begin(), path.end()); //\u5347\u5e8f\u6392\u5e8f\n    return path[0];\n}\n\nvoid dfs(TreeNode *root, string s)\n{\n    if (!root)\n        return;\n    s += 'a' + root->val;\n    if (!root->left && !root->right)\n    {\n        reverse(s.begin(), s.end()); //\u9898\u76ee\u8981\u6c42\u4ece\u6839\u8282\u70b9\u5230\u53f6\u8282\u70b9\uff0c\u56e0\u6b64\u53cd\u8f6c\n        path.push_back(s);\n        return;\n    }\n    dfs(root->left, s);\n    dfs(root->right, s);\n}\n")),(0,o.kt)("h3",{id:"2\u975e\u81ea\u9876\u5411\u4e0b-1"},"2\u3001\u975e\u81ea\u9876\u5411\u4e0b"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/binary-tree-maximum-path-sum/"},"124. \u4e8c\u53c9\u6811\u4e2d\u7684\u6700\u5927\u8def\u5f84\u548c")),(0,o.kt)("p",null,"/left,right\u5206\u522b\u4e3a\u6839\u8282\u70b9\u5de6\u53f3\u5b50\u6811\u6700\u5927\u8def\u5f84\u548c,\u6ce8\u610f\uff1a\u5982\u679c\u6700\u5927\u8def\u5f84\u548c<0,\u610f\u5473\u7740\u8be5\u8def\u5f84\u548c\u5bf9\u603b\u8def\u5f84\u548c\u505a\u8d1f\u8d21\u732e\uff0c\u56e0\u6b64\u4e0d\u8981\u8ba1\u5165\u5230\u603b\u8def\u5f84\u4e2d\uff0c\u5c06\u5b83\u8bbe\u7f6e\u4e3a0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c++"},"int res = INT_MIN; //\u6ce8\u610f\u8282\u70b9\u503c\u53ef\u80fd\u4e3a\u8d1f\u6570\uff0c\u56e0\u6b64\u8981\u8bbe\u7f6e\u4e3a\u6700\u5c0f\u503c\nint maxPathSum(TreeNode *root)\n{\n    maxPath(root);\n    return res;\n}\n\nint maxPath(TreeNode *root) //\u4ee5root\u4e3a\u8def\u5f84\u8d77\u59cb\u70b9\u7684\u6700\u957f\u8def\u5f84\n{\n    if (!root)\n        return 0;\n    int left = max(maxPath(root->left), 0);\n    int right = max(maxPath(root->right), 0);\n    res = max(res, left + right + root->val);  //\u6bd4\u8f83\u5f53\u524d\u6700\u5927\u8def\u5f84\u548c\u4e0e\u5de6\u53f3\u5b50\u6811\u6700\u957f\u8def\u5f84\u52a0\u4e0a\u6839\u8282\u70b9\u503c\u7684\u8f83\u5927\u503c\uff0c\u66f4\u65b0\u5168\u5c40\u53d8\u91cf\n    return max(left + root->val, right + root->val); //\u8fd4\u56de\u5de6\u53f3\u5b50\u6811\u8f83\u957f\u7684\u8def\u5f84\u52a0\u4e0a\u6839\u8282\u70b9\u503c\n}\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/longest-univalue-path/"},"687. \u6700\u957f\u540c\u503c\u8def\u5f84")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c++"},"int longestUnivaluePath(TreeNode *root)\n{\n    if (!root)\n        return 0;\n    longestPath(root);\n    return res;\n}\n\nint longestPath(TreeNode *root)\n{\n    if (!root)\n        return 0;\n    int left = longestPath(root->left), right = longestPath(root->right);\n    // \u5982\u679c\u5b58\u5728\u5de6\u5b50\u8282\u70b9\u548c\u6839\u8282\u70b9\u540c\u503c\uff0c\u66f4\u65b0\u5de6\u6700\u957f\u8def\u5f84;\u5426\u5219\u5de6\u6700\u957f\u8def\u5f84\u4e3a0\n    if (root->left && root->val == root->left->val)\n        left++;\n    else\n        left = 0;\n    if (root->right && root->val == root->right->val)\n        right++;\n    else\n        right = 0;\n    res = max(res, left + right);\n    return max(left, right);\n}\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/diameter-of-binary-tree/"},"543. \u4e8c\u53c9\u6811\u7684\u76f4\u5f84")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c++"},"int res1 = 0;  \nint diameterOfBinaryTree(TreeNode *root)\n{\n    maxPath(root);\n    return res1;\n}\n\nint maxPath(TreeNode *root)\n{\n// \u8fd9\u91cc\u9012\u5f52\u7ed3\u675f\u6761\u4ef6\u8981\u7279\u522b\u6ce8\u610f\uff1a\u4e0d\u80fd\u662f!root(\u800c\u4e14\u4e0d\u9700\u8981\u5224\u65adroot\u4e3a\u7a7a,\u56e0\u4e3a\u53ea\u6709\u975e\u7a7a\u624d\u4f1a\u8fdb\u5165\u9012\u5f52)\uff0c\u56e0\u4e3a\u5355\u4e2a\u8282\u70b9\u8def\u5f84\u957f\u4e5f\u662f0\n    if (!root->left && !root->right)  \n        return 0;\n    int left = root->left ? maxPath(root->left) + 1 : 0;  //\u5224\u65ad\u5de6\u5b50\u8282\u70b9\u662f\u5426\u4e3a\u7a7a\uff0c\u4ece\u800c\u66f4\u65b0\u5de6\u8fb9\u6700\u957f\u8def\u5f84\n    int right = root->right ? maxPath(root->right) + 1 : 0;\n    res1 = max(res, left + right); //\u66f4\u65b0\u5168\u5c40\u53d8\u91cf\n    return max(left, right);  //\u8fd4\u56de\u5de6\u53f3\u8def\u5f84\u8f83\u5927\u8005\n}\n")))}h.isMDXComponent=!0}}]);