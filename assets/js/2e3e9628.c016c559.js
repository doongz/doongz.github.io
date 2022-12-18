"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[56793],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>m});var i=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},o=Object.keys(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var a=i.createContext({}),d=function(n){var e=i.useContext(a),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},p=function(n){var e=d(n.components);return i.createElement(a.Provider,{value:e},n.children)},c="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},f=i.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,a=n.parentName,p=l(n,["components","mdxType","originalType","parentName"]),c=d(t),f=r,m=c["".concat(a,".").concat(f)]||c[f]||u[f]||o;return t?i.createElement(m,s(s({ref:e},p),{},{components:t})):i.createElement(m,s({ref:e},p))}));function m(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,s=new Array(o);s[0]=f;var l={};for(var a in e)hasOwnProperty.call(e,a)&&(l[a]=e[a]);l.originalType=n,l[c]="string"==typeof n?n:r,s[1]=l;for(var d=2;d<o;d++)s[d]=t[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},45178:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=t(87462),r=(t(67294),t(3905));const o={},s=void 0,l={unversionedId:"Algorithm/\u6570\u636e\u7ed3\u6784/\u4f8b\u9898-\u5e76\u67e5\u96c6/<dfs-bfs-\u5e76\u67e5\u96c6>-\u7701\u4efd\u6570\u91cf",id:"Algorithm/\u6570\u636e\u7ed3\u6784/\u4f8b\u9898-\u5e76\u67e5\u96c6/<dfs-bfs-\u5e76\u67e5\u96c6>-\u7701\u4efd\u6570\u91cf",title:"<dfs-bfs-\u5e76\u67e5\u96c6>-\u7701\u4efd\u6570\u91cf",description:"547. \u7701\u4efd\u6570\u91cf",source:"@site/docs/Algorithm/1-\u6570\u636e\u7ed3\u6784/\u4f8b\u9898-\u5e76\u67e5\u96c6/547-<dfs-bfs-\u5e76\u67e5\u96c6>-\u7701\u4efd\u6570\u91cf.md",sourceDirName:"Algorithm/1-\u6570\u636e\u7ed3\u6784/\u4f8b\u9898-\u5e76\u67e5\u96c6",slug:"/Algorithm/\u6570\u636e\u7ed3\u6784/\u4f8b\u9898-\u5e76\u67e5\u96c6/<dfs-bfs-\u5e76\u67e5\u96c6>-\u7701\u4efd\u6570\u91cf",permalink:"/docs/Algorithm/\u6570\u636e\u7ed3\u6784/\u4f8b\u9898-\u5e76\u67e5\u96c6/<dfs-bfs-\u5e76\u67e5\u96c6>-\u7701\u4efd\u6570\u91cf",draft:!1,tags:[],version:"current",sidebarPosition:547,frontMatter:{},sidebar:"docsSidebar",previous:{title:"<\u5e26\u6743\u503c\u7684\u5e76\u67e5\u96c6>-\u9664\u6cd5\u6c42\u503c",permalink:"/docs/Algorithm/\u6570\u636e\u7ed3\u6784/\u4f8b\u9898-\u5e76\u67e5\u96c6/<\u5e26\u6743\u503c\u7684\u5e76\u67e5\u96c6>-\u9664\u6cd5\u6c42\u503c"},next:{title:"<\u5e76\u67e5\u96c6\u7684\u94fe\u63a5>-\u5197\u4f59\u8fde\u63a5",permalink:"/docs/Algorithm/\u6570\u636e\u7ed3\u6784/\u4f8b\u9898-\u5e76\u67e5\u96c6/<\u5e76\u67e5\u96c6\u7684\u94fe\u63a5>-\u5197\u4f59\u8fde\u63a5"}},a={},d=[{value:"\u65b9\u6cd5\u4e00\uff1a\u5e76\u67e5\u96c6",id:"\u65b9\u6cd5\u4e00\u5e76\u67e5\u96c6",level:2},{value:"\u65b9\u6cd5\u4e8c\uff1adfs",id:"\u65b9\u6cd5\u4e8cdfs",level:2},{value:"\u65b9\u6cd5\u4e09\uff1abfs",id:"\u65b9\u6cd5\u4e09bfs",level:2}],p={toc:d};function c(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,i.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/number-of-provinces/"},"547. \u7701\u4efd\u6570\u91cf")),(0,r.kt)("p",null,"\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," \u4e2a\u57ce\u5e02\uff0c\u5176\u4e2d\u4e00\u4e9b\u5f7c\u6b64\u76f8\u8fde\uff0c\u53e6\u4e00\u4e9b\u6ca1\u6709\u76f8\u8fde\u3002\u5982\u679c\u57ce\u5e02 ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," \u4e0e\u57ce\u5e02 ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," \u76f4\u63a5\u76f8\u8fde\uff0c\u4e14\u57ce\u5e02 ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," \u4e0e\u57ce\u5e02 ",(0,r.kt)("inlineCode",{parentName:"p"},"c")," \u76f4\u63a5\u76f8\u8fde\uff0c\u90a3\u4e48\u57ce\u5e02 ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," \u4e0e\u57ce\u5e02 ",(0,r.kt)("inlineCode",{parentName:"p"},"c")," \u95f4\u63a5\u76f8\u8fde\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7701\u4efd")," \u662f\u4e00\u7ec4\u76f4\u63a5\u6216\u95f4\u63a5\u76f8\u8fde\u7684\u57ce\u5e02\uff0c\u7ec4\u5185\u4e0d\u542b\u5176\u4ed6\u6ca1\u6709\u76f8\u8fde\u7684\u57ce\u5e02\u3002"),(0,r.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"n x n")," \u7684\u77e9\u9635 ",(0,r.kt)("inlineCode",{parentName:"p"},"isConnected")," \uff0c\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"isConnected[i][j] = 1")," \u8868\u793a\u7b2c ",(0,r.kt)("inlineCode",{parentName:"p"},"i")," \u4e2a\u57ce\u5e02\u548c\u7b2c ",(0,r.kt)("inlineCode",{parentName:"p"},"j"),"\u4e2a\u57ce\u5e02\u76f4\u63a5\u76f8\u8fde\uff0c\u800c ",(0,r.kt)("inlineCode",{parentName:"p"},"isConnected[i][j] = 0")," \u8868\u793a\u4e8c\u8005\u4e0d\u76f4\u63a5\u76f8\u8fde\u3002"),(0,r.kt)("p",null,"\u8fd4\u56de\u77e9\u9635\u4e2d ",(0,r.kt)("strong",{parentName:"p"},"\u7701\u4efd")," \u7684\u6570\u91cf\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/12/24/graph1.jpg",alt:"img"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u8f93\u5165\uff1aisConnected = [[1,1,0],[1,1,0],[0,0,1]]\n\u8f93\u51fa\uff1a2\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/12/24/graph2.jpg",alt:"img"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u8f93\u5165\uff1aisConnected = [[1,0,0],[0,1,0],[0,0,1]]\n\u8f93\u51fa\uff1a3\n")),(0,r.kt)("p",null,"\u63d0\u793a\uff1a"),(0,r.kt)("p",null,"1 <= n <= 200\nn == isConnected.length\nn == isConnected","[i]",".length\n",(0,r.kt)("inlineCode",{parentName:"p"},"isConnected[i][j]")," \u4e3a 1 \u6216 0\n",(0,r.kt)("inlineCode",{parentName:"p"},"isConnected[i][i]")," == 1\n",(0,r.kt)("inlineCode",{parentName:"p"},"isConnected[i][j] == isConnected[j][i]")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u7531\u9898\u610f\u53ef\u77e5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1 <= n <= 200 \u6570\u636e\u91cf\u53ef\u4ee5\u653e\u5fc3\u7684\u7528\u5e38\u89c4\u7684dfs bfs"),(0,r.kt)("li",{parentName:"ul"},"isConnected \u672c\u8eab\u5c31\u662f\u90bb\u63a5\u77e9\u9635"),(0,r.kt)("li",{parentName:"ul"},"\u76f8\u5f53\u4e8e\u6c42\u51e0\u4e2a\u8fde\u901a\u5206\u91cf\uff0c\u53ef\u7528\u5e76\u67e5\u96c6")),(0,r.kt)("h2",{id:"\u65b9\u6cd5\u4e00\u5e76\u67e5\u96c6"},"\u65b9\u6cd5\u4e00\uff1a\u5e76\u67e5\u96c6"),(0,r.kt)("p",null,"\u6267\u884c\u7528\u65f6\uff1a16 ms, \u5728\u6240\u6709 C++ \u63d0\u4ea4\u4e2d\u51fb\u8d25\u4e8692.48%\u7684\u7528\u6237"),(0,r.kt)("p",null,"\u5185\u5b58\u6d88\u8017\uff1a13.4 MB, \u5728\u6240\u6709 C++ \u63d0\u4ea4\u4e2d\u51fb\u8d25\u4e8641.19%\u7684\u7528\u6237"),(0,r.kt)("p",null,"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"O(n^2logn)")),(0,r.kt)("p",null,"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"O(n)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},"class UnionFind {\npublic:\n    vector<int> parent;  // \u4e0b\u6807idx\u4e3a\u8282\u70b9\uff0cparent[idx]\u4e3a\u8be5\u8282\u70b9\u7684\u7236\u4eb2\n    vector<int> size;    // \u82e5idx\u4e3a\u7236\u4eb2\u6839\u8282\u70b9\uff0csize[idx]\u4e3a\u8be5\u8fde\u901a\u5206\u91cf\u7684\u5927\u5c0f\n    int n;               // \u8282\u70b9\u6570\u91cf\n    int setCount;        // \u8fde\u901a\u5206\u91cf\u7684\u6570\u91cf\n\npublic:\n    UnionFind(int _n) : n(_n), setCount(_n), parent(_n), size(_n, 1) {\n        iota(parent.begin(), parent.end(), 0);\n    }\n\n    int find(int x) {\n        return parent[x] == x ? x : parent[x] = find(parent[x]);\n    }\n\n    bool unite(int x, int y) {\n        x = find(x);\n        y = find(y);\n        if (x == y) return false;\n\n        if (size[x] < size[y]) {\n            swap(x, y);\n        }\n        parent[y] = x;       // x \u4f5c\u4e3a y \u7684\u7236\u4eb2\n        size[x] += size[y];  // \u7236\u4eb2\u8282\u70b9x\u7684\u8054\u901a\u5206\u91cf\u5927\u5c0f\u52a0\u4e0ay\u8282\u70b9\u7684\n        --setCount;\n        return true;\n    }\n\n    bool is_connected(int x, int y) {\n        x = find(x);\n        y = find(y);\n        return x == y;\n    }\n\n    void disconnected(int x) {\n        if (x != parent[x]) {\n            parent[x] = x;\n            size[x] = 1;\n            ++setCount;\n        }\n    }\n};\n\nclass Solution {\npublic:\n    int findCircleNum(vector<vector<int>>& isConnected) {\n        int rows = isConnected.size();\n        int cols = isConnected[0].size();\n        if (rows == 1) return 1;\n\n        UnionFind uf(rows);\n\n        // \u53ea\u7528\u904d\u5386\u4e00\u534a\u5c31\u884c\n        for (int r = 0; r < rows; r++) {\n            for (int c = 0; c < cols; c++) {\n                if (r < c) {  // \u53f3\u4e0a\n                    if (isConnected[r][c] == 1)\n                        uf.unite(r, c);\n                }\n            }\n        }\n        return uf.setCount;\n    }\n};\n")),(0,r.kt)("p",null,"\u6267\u884c\u7528\u65f6\uff1a44 ms, \u5728\u6240\u6709 Python3 \u63d0\u4ea4\u4e2d\u51fb\u8d25\u4e8674.87%\u7684\u7528\u6237"),(0,r.kt)("p",null,"\u5185\u5b58\u6d88\u8017\uff1a15.3 MB, \u5728\u6240\u6709 Python3 \u63d0\u4ea4\u4e2d\u51fb\u8d25\u4e8647.20%\u7684\u7528\u6237"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class UnionFind:\n    def __init__(self, n):\n        self.count = n\n        self.parent = [i for i in range(n)] # \u521d\u59cb\u5316\u8282\u70b9i\u7684\u7236\u8282\u70b9\u4e3ai\n        self.rank = [0] * n\n\n    def find(self, i):\n        # \u9012\u5f52\u67e5\u627e\u6839\u8282\u70b9\uff0c\u5982\u679c\u8282\u70b9i\u7684\u7236\u8282\u70b9\u4e3a\u672c\u8eab\u5c31\u627e\u5230\u4e86\u6839\uff0c\u7ed3\u675f\u9012\u5f52\n        if self.parent[i] != i:\n            self.parent[i] = self.find(self.parent[i])\n        return self.parent[i]\n\n    def union(self, x, y):\n        # \u5408\u5e76\u4e24\u4e2a\u8282\u70b9\n        rootx = self.find(x)\n        rooty = self.find(y)\n        if rootx != rooty:\n            if self.rank[rootx] < self.rank[rooty]:\n                rootx, rooty = rooty, rootx\n            self.parent[rooty] = rootx\n            if self.rank[rootx] == self.rank[rooty]:\n                self.rank[rootx] += 1\n            self.count -= 1\n            \n    def is_connected(self, x, y):\n        # \u5224\u65ad\u4e24\u4e2a\u8282\u70b9\u662f\u5426\u8fde\u901a\n        return self.find(x) == self.find(y)\n\n    def disconnected(self, x):\n        # \u65ad\u5f00\u8282\u70b9\u4e0e\u4ed6\u7236\u4eb2\u7684\u8fde\u63a5\n        self.parent[x] = x\n        self.rank[x] = 0\n\n\nclass Solution:\n    def findCircleNum(self, isConnected: List[List[int]]) -> int:\n        cities = len(isConnected)\n        uf = UnionFind(cities)\n        for i in range(cities):\n            for j in range(i):  # \u65e0\u5411\u56fe\uff0c\u53ea\u7528\u626b\u63cf\u4e00\u534a\u5c31\u597d\u4e86\uff0c\u5168\u626b\u4e5f\u4e0d\u5f71\u54cd\u7ed3\u679c\n                if isConnected[i][j] == 1:\n                    uf.union(i, j)\n        return uf.count\n")),(0,r.kt)("h2",{id:"\u65b9\u6cd5\u4e8cdfs"},"\u65b9\u6cd5\u4e8c\uff1adfs"),(0,r.kt)("p",null,"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"O(n^2)"),"\uff0c\u5176\u4e2d n \u662f\u57ce\u5e02\u7684\u6570\u91cf\u3002\u9700\u8981\u904d\u5386\u77e9\u9635 n \u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20"),(0,r.kt)("p",null,"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"O(n)"),"\uff0c\u5176\u4e2d n \u662f\u57ce\u5e02\u7684\u6570\u91cf\u3002\u9700\u8981\u4f7f\u7528\u6570\u7ec4 visited \u8bb0\u5f55\u6bcf\u4e2a\u57ce\u5e02\u662f\u5426\u88ab\u8bbf\u95ee\u8fc7\uff0c\u6570\u7ec4\u957f\u5ea6\u662f n\uff0c\u9012\u5f52\u8c03\u7528\u6808\u7684\u6df1\u5ea6\u4e0d\u4f1a\u8d85\u8fc7 n\u3002"),(0,r.kt)("p",null,"\u6267\u884c\u7528\u65f6\uff1a36 ms, \u5728\u6240\u6709 Python3 \u63d0\u4ea4\u4e2d\u51fb\u8d25\u4e8696.05%\u7684\u7528\u6237"),(0,r.kt)("p",null,"\u5185\u5b58\u6d88\u8017\uff1a15.5 MB, \u5728\u6240\u6709 Python3 \u63d0\u4ea4\u4e2d\u51fb\u8d25\u4e8632.91%\u7684\u7528\u6237"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def findCircleNum(self, isConnected: List[List[int]]) -> int:\n        cities = len(isConnected)\n        visited = set()\n        \n        def dfs(node):\n            visited.add(node)\n            for i in range(cities):\n                if isConnected[node][i] == 1 and i not in visited:\n                    dfs(i)\n        \n        ans = 0\n        for city in range(cities):\n            if city not in visited:\n                dfs(city)\n                ans += 1\n        return ans\n")),(0,r.kt)("p",null,"\u6267\u884c\u7528\u65f6\uff1a20 ms, \u5728\u6240\u6709 Go \u63d0\u4ea4\u4e2d\u51fb\u8d25\u4e8688.46%\u7684\u7528\u6237"),(0,r.kt)("p",null,"\u5185\u5b58\u6d88\u8017\uff1a6.5 MB, \u5728\u6240\u6709 Go \u63d0\u4ea4\u4e2d\u51fb\u8d25\u4e8662.06%\u7684\u7528\u6237"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func findCircleNum(isConnected [][]int) int {\n    visited := make([]bool, len(isConnected))\n    var dfs func(int)\n    dfs = func(node int) {\n        visited[node] = true\n        for i, v := range isConnected[node] {\n            if v == 1 && !visited[i] {\n                dfs(i)\n            }\n        }\n    }\n\n    ans := 0\n    for city := 0; city < len(isConnected); city++ {\n        if !visited[city] {\n            dfs(city)\n            ans++\n        }\n    }\n    return ans\n}\n")),(0,r.kt)("h2",{id:"\u65b9\u6cd5\u4e09bfs"},"\u65b9\u6cd5\u4e09\uff1abfs"),(0,r.kt)("p",null,"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"O(n^2)")),(0,r.kt)("p",null,"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"O(n)")),(0,r.kt)("p",null,"\u6267\u884c\u7528\u65f6\uff1a36 ms, \u5728\u6240\u6709 Python3 \u63d0\u4ea4\u4e2d\u51fb\u8d25\u4e8696.05%\u7684\u7528\u6237"),(0,r.kt)("p",null,"\u5185\u5b58\u6d88\u8017\uff1a15.2 MB, \u5728\u6240\u6709 Python3 \u63d0\u4ea4\u4e2d\u51fb\u8d25\u4e8682.20%\u7684\u7528\u6237"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def findCircleNum(self, isConnected: List[List[int]]) -> int:\n        cities = len(isConnected)\n        visited = set()\n        \n        def bfs(node):\n            queue = [node]\n            visited.add(node)\n            while queue:\n                cur = queue.pop(0)\n                for n_node in range(cities):\n                    if isConnected[cur][n_node] == 1 and n_node not in visited:\n                        queue.append(n_node)\n                        visited.add(n_node)\n                        \n        ans = 0\n        for city in range(cities):\n            if city not in visited:\n                bfs(city)\n                ans += 1\n        return ans\n")),(0,r.kt)("p",null,"\u6267\u884c\u7528\u65f6\uff1a20 ms, \u5728\u6240\u6709 Go \u63d0\u4ea4\u4e2d\u51fb\u8d25\u4e8688.46%\u7684\u7528\u6237"),(0,r.kt)("p",null,"\u5185\u5b58\u6d88\u8017\uff1a6.5 MB, \u5728\u6240\u6709 Go \u63d0\u4ea4\u4e2d\u51fb\u8d25\u4e8696.50%\u7684\u7528\u6237"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func findCircleNum(isConnected [][]int) int {\n    visited := make([]bool, len(isConnected))\n    var bfs func(int)\n    bfs = func(node int) {\n        queue := []int{node}\n        visited[node] = true\n        for len(queue) > 0 {\n            cur := queue[0]\n            queue = queue[1:]\n            for i, v := range isConnected[cur] {\n                if v == 1 && !visited[i] {\n                    queue = append(queue, i)\n                    visited[i] = true\n                }\n            }\n        }\n    }\n\n    ans := 0\n    for city := 0; city < len(isConnected); city++ {\n        if !visited[city] {\n            bfs(city)\n            ans++\n        }\n    }\n    return ans\n}\n")))}c.isMDXComponent=!0}}]);