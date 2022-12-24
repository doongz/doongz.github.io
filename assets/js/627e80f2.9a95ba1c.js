"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[35489],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>m});var r=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var a=r.createContext({}),l=function(n){var e=r.useContext(a),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},p=function(n){var e=l(n.components);return r.createElement(a.Provider,{value:e},n.children)},u="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,o=n.originalType,a=n.parentName,p=c(n,["components","mdxType","originalType","parentName"]),u=l(t),f=i,m=u["".concat(a,".").concat(f)]||u[f]||d[f]||o;return t?r.createElement(m,s(s({ref:e},p),{},{components:t})):r.createElement(m,s({ref:e},p))}));function m(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var o=t.length,s=new Array(o);s[0]=f;var c={};for(var a in e)hasOwnProperty.call(e,a)&&(c[a]=e[a]);c.originalType=n,c[u]="string"==typeof n?n:i,s[1]=c;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},58582:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(87462),i=(t(67294),t(3905));const o={},s=void 0,c={unversionedId:"Algorithm/\u56fe\u8bba/\u4f8b\u9898-BFS/<\u9006\u5411\u8d70>-\u592a\u5e73\u6d0b\u5927\u897f\u6d0b\u6c34\u6d41\u95ee\u9898",id:"Algorithm/\u56fe\u8bba/\u4f8b\u9898-BFS/<\u9006\u5411\u8d70>-\u592a\u5e73\u6d0b\u5927\u897f\u6d0b\u6c34\u6d41\u95ee\u9898",title:"<\u9006\u5411\u8d70>-\u592a\u5e73\u6d0b\u5927\u897f\u6d0b\u6c34\u6d41\u95ee\u9898",description:"\u9898\u76ee\uff1a417. \u592a\u5e73\u6d0b\u5927\u897f\u6d0b\u6c34\u6d41\u95ee\u9898",source:"@site/docs/Algorithm/4-\u56fe\u8bba/\u4f8b\u9898-BFS/417-<\u9006\u5411\u8d70>-\u592a\u5e73\u6d0b\u5927\u897f\u6d0b\u6c34\u6d41\u95ee\u9898.md",sourceDirName:"Algorithm/4-\u56fe\u8bba/\u4f8b\u9898-BFS",slug:"/Algorithm/\u56fe\u8bba/\u4f8b\u9898-BFS/<\u9006\u5411\u8d70>-\u592a\u5e73\u6d0b\u5927\u897f\u6d0b\u6c34\u6d41\u95ee\u9898",permalink:"/docs/Algorithm/\u56fe\u8bba/\u4f8b\u9898-BFS/<\u9006\u5411\u8d70>-\u592a\u5e73\u6d0b\u5927\u897f\u6d0b\u6c34\u6d41\u95ee\u9898",draft:!1,tags:[],version:"current",sidebarPosition:417,frontMatter:{},sidebar:"algorithmSidebar",previous:{title:"<bfs\u505a\u51b3\u7b56>-\u6c34\u58f6\u95ee\u9898",permalink:"/docs/Algorithm/\u56fe\u8bba/\u4f8b\u9898-BFS/<bfs\u505a\u51b3\u7b56>-\u6c34\u58f6\u95ee\u9898"},next:{title:"<\u591a\u6e90bfs-dp>-01\u77e9\u9635",permalink:"/docs/Algorithm/\u56fe\u8bba/\u4f8b\u9898-BFS/<\u591a\u6e90bfs-dp>-01\u77e9\u9635"}},a={},l=[],p={toc:l};function u(n){let{components:e,...o}=n;return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u9898\u76ee\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/pacific-atlantic-water-flow/"},"417. \u592a\u5e73\u6d0b\u5927\u897f\u6d0b\u6c34\u6d41\u95ee\u9898")),(0,i.kt)("p",null,"\u6709\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"m \xd7 n")," \u7684\u77e9\u5f62\u5c9b\u5c7f\uff0c\u4e0e ",(0,i.kt)("strong",{parentName:"p"},"\u592a\u5e73\u6d0b")," \u548c ",(0,i.kt)("strong",{parentName:"p"},"\u5927\u897f\u6d0b")," \u76f8\u90bb\u3002 ",(0,i.kt)("strong",{parentName:"p"},"\u201c\u592a\u5e73\u6d0b\u201d")," \u5904\u4e8e\u5927\u9646\u7684\u5de6\u8fb9\u754c\u548c\u4e0a\u8fb9\u754c\uff0c\u800c ",(0,i.kt)("strong",{parentName:"p"},"\u201c\u5927\u897f\u6d0b\u201d")," \u5904\u4e8e\u5927\u9646\u7684\u53f3\u8fb9\u754c\u548c\u4e0b\u8fb9\u754c\u3002"),(0,i.kt)("p",null,"\u8fd9\u4e2a\u5c9b\u88ab\u5206\u5272\u6210\u4e00\u4e2a\u7531\u82e5\u5e72\u65b9\u5f62\u5355\u5143\u683c\u7ec4\u6210\u7684\u7f51\u683c\u3002\u7ed9\u5b9a\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"m x n")," \u7684\u6574\u6570\u77e9\u9635 ",(0,i.kt)("inlineCode",{parentName:"p"},"heights")," \uff0c ",(0,i.kt)("inlineCode",{parentName:"p"},"heights[r][c]")," \u8868\u793a\u5750\u6807 ",(0,i.kt)("inlineCode",{parentName:"p"},"(r, c)")," \u4e0a\u5355\u5143\u683c ",(0,i.kt)("strong",{parentName:"p"},"\u9ad8\u4e8e\u6d77\u5e73\u9762\u7684\u9ad8\u5ea6")," \u3002"),(0,i.kt)("p",null,"\u5c9b\u4e0a\u96e8\u6c34\u8f83\u591a\uff0c\u5982\u679c\u76f8\u90bb\u5355\u5143\u683c\u7684\u9ad8\u5ea6 ",(0,i.kt)("strong",{parentName:"p"},"\u5c0f\u4e8e\u6216\u7b49\u4e8e")," \u5f53\u524d\u5355\u5143\u683c\u7684\u9ad8\u5ea6\uff0c\u96e8\u6c34\u53ef\u4ee5\u76f4\u63a5\u5411\u5317\u3001\u5357\u3001\u4e1c\u3001\u897f\u6d41\u5411\u76f8\u90bb\u5355\u5143\u683c\u3002\u6c34\u53ef\u4ee5\u4ece\u6d77\u6d0b\u9644\u8fd1\u7684\u4efb\u4f55\u5355\u5143\u683c\u6d41\u5165\u6d77\u6d0b\u3002"),(0,i.kt)("p",null,"\u8fd4\u56de\u7f51\u683c\u5750\u6807 ",(0,i.kt)("inlineCode",{parentName:"p"},"result")," \u7684 ",(0,i.kt)("strong",{parentName:"p"},"2D \u5217\u8868")," \uff0c\u5176\u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"result[i] = [ri, ci]")," \u8868\u793a\u96e8\u6c34\u4ece\u5355\u5143\u683c ",(0,i.kt)("inlineCode",{parentName:"p"},"(ri, ci)")," \u6d41\u52a8 ",(0,i.kt)("strong",{parentName:"p"},"\u65e2\u53ef\u6d41\u5411\u592a\u5e73\u6d0b\u4e5f\u53ef\u6d41\u5411\u5927\u897f\u6d0b")," \u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:t(20998).Z,width:"573",height:"573"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u8f93\u5165: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]\n\u8f93\u51fa: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u8f93\u5165: heights = [[2,1],[1,2]]\n\u8f93\u51fa: [[0,0],[0,1],[1,0],[1,1]]\n")),(0,i.kt)("p",null,"\u63d0\u793a\uff1a"),(0,i.kt)("p",null,"m == heights.length\nn == heights","[r]",".length\n1 <= m, n <= 200\n",(0,i.kt)("inlineCode",{parentName:"p"},"0 <= heights[r][c] <= 105")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'class Solution {\nprivate:\n    int rows;\n    int cols;\n    vector<vector<int>> grid;\n    pair<int, int> directions[4] = {{0, 1}, {1, 0}, {-1, 0}, {0, -1}};\n\n    void bfs(queue<pair<int, int>> &que, bool vis[201][201]) {\n        while (!que.empty()) {\n            int cur_r = que.front().first;\n            int cur_c = que.front().second;\n            que.pop();\n            for (auto &[dr, dc] : directions) {\n                int next_r = cur_r + dr;\n                int next_c = cur_c + dc;\n                if (next_r < 0 || next_r >= rows || next_c < 0 || next_c >= cols) continue;  // \u8fb9\u754c\u5916\n                if (vis[next_r][next_c]) continue;                                           // \u4e0d\u91cd\u590d\u8d70\n                if (grid[next_r][next_c] < grid[cur_r][cur_c]) continue;                     // \u5f80\u9ad8\u5904\u8d70\n                que.push({next_r, next_c});\n                vis[next_r][next_c] = true;\n            }\n        }\n    }\n\n    void print_vis(bool vis[201][201]) {\n        for (int r = 0; r < rows; r++) {\n            for (int c = 0; c < cols; c++) {\n                cout << vis[r][c] << " ";\n            }\n            cout << endl;\n        }\n    }\n\npublic:\n    vector<vector<int>> pacificAtlantic(vector<vector<int>> &heights) {\n        // \u4ece\u8fb9\u5f80\u4e2d\u95f4\u8d70\n        rows = heights.size();\n        cols = heights[0].size();\n        grid = heights;\n\n        // \u6d41\u5230\u592a\u5e73\u6d0b\n        queue<pair<int, int>> que_pac;\n        bool vis_pac[201][201];\n        memset(vis_pac, false, sizeof(bool) * 201 * 201);\n\n        for (int c = 0; c < cols; c++) {\n            que_pac.push({0, c});\n            vis_pac[0][c] = true;\n        }\n        for (int r = 1; r < rows; r++) {\n            que_pac.push({r, 0});\n            vis_pac[r][0] = true;\n        }\n        bfs(que_pac, vis_pac);\n        // print_vis(vis_pac);\n\n        // \u6d41\u5230\u5927\u897f\u6d0b\n        queue<pair<int, int>> que_atl;\n        bool vis_atl[201][201];\n        memset(vis_atl, false, sizeof(bool) * 201 * 201);\n\n        for (int c = 0; c < cols; c++) {\n            que_atl.push({rows - 1, c});\n            vis_atl[rows - 1][c] = true;\n        }\n        for (int r = 0; r < rows - 1; r++) {\n            que_atl.push({r, cols - 1});\n            vis_atl[r][cols - 1] = true;\n        }\n        bfs(que_atl, vis_atl);\n        // print_vis(vis_atl);\n\n        vector<vector<int>> ans;\n        for (int r = 0; r < rows; r++) {\n            for (int c = 0; c < cols; c++) {\n                if (vis_pac[r][c] && vis_atl[r][c]) {\n                    ans.push_back({r, c});\n                }\n            }\n        }\n\n        return ans;\n    }\n};\n')),(0,i.kt)("p",null,"bfs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def main(self, heights):\n        rows = len(heights)\n        cols = len(heights[0])\n        queue_t = []\n        queue_d = []\n        for r in range(rows):\n            queue_t.append((r, 0))\n            queue_d.append((r, cols-1))\n        for c in range(cols):\n            queue_t.append((0, c))\n            queue_d.append((rows-1, c))\n        def bfs(queue):\n            visited = set()\n            while queue:\n                r, c = queue.pop(0)\n                visited.add((r,c))\n                for dr, dc in ((1,0),(0,1),(-1,0),(0,-1)):\n                    next_r = r + dr\n                    next_c = c+dc\n                    if 0<=next_r<=rows-1 and 0<=next_c<=cols-1:\n                        if heights[next_r][next_c] < heights[r][c]:\n                            continue\n                        if (next_r, next_c) in visited:\n                            continue\n                        queue.append((next_r, next_c))\n            return visited\n        res_t = bfs(queue_t)\n        res_d = bfs(queue_d)\n        return [list(r) for r in res_t & res_d]\n")),(0,i.kt)("p",null,"dfs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def main(self, heights):\n        rows = len(heights)\n        cols = len(heights[0])\n        res_t = set()\n        res_d = set()\n\n        # \u4ece\u8fb9\u754c\u904d\u5386\n        def dfs(r, c, res):\n            res.add((r, c))\n\n            for dr, dc in ((0, 1), (1, 0), (-1, 0), (0, -1)):\n                next_r = r + dr\n                next_c = c + dc\n                if 0 <= next_r <= rows - 1 and 0 <= next_c <= cols - 1:\n                    if heights[next_r][next_c] < heights[r][c]:\n                        continue\n                    if (next_r, next_c) in res:\n                        continue\n                    dfs(next_r, next_c, res)\n\n        # \u592a\u5e73\u6d0b \u5de6\u8fb9\u754c\n        for r in range(rows):\n            dfs(r, 0, res_t)\n        # \u592a\u5e73\u6d0b \u4e0a\u8fb9\u754c\n        for c in range(cols):\n            dfs(0, c, res_t)\n        # \u5927\u897f\u6d0b \u53f3\u8fb9\u754c\n        for r in range(rows):\n            dfs(r, cols - 1, res_d)\n        # \u5927\u897f\u6d0b \u4e0b\u8fb9\u754c\n        for c in range(cols):\n            dfs(rows - 1, c, res_d)\n\n        return [list(r) for r in res_t & res_d]\n")))}u.isMDXComponent=!0},20998:(n,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/waterflow-grid-c070d92f01718ddc181b1ae0200a7e95.jpg"}}]);