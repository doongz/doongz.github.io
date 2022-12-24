"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[76616],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>d});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=t.createContext({}),l=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},c=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(r),g=i,d=u["".concat(s,".").concat(g)]||u[g]||h[g]||a;return r?t.createElement(d,p(p({ref:n},c),{},{components:r})):t.createElement(d,p({ref:n},c))}));function d(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,p=new Array(a);p[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:i,p[1]=o;for(var l=2;l<a;l++)p[l]=r[l];return t.createElement.apply(null,p)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},98980:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var t=r(87462),i=(r(67294),r(3905));const a={},p=void 0,o={unversionedId:"Algorithm/\u7cfb\u5217\u9898\u76ee/\u63a5\u96e8\u6c34/<dijkstra-\u4f18\u5148\u961f\u5217>-\u63a5\u96e8\u6c34II",id:"Algorithm/\u7cfb\u5217\u9898\u76ee/\u63a5\u96e8\u6c34/<dijkstra-\u4f18\u5148\u961f\u5217>-\u63a5\u96e8\u6c34II",title:"<dijkstra-\u4f18\u5148\u961f\u5217>-\u63a5\u96e8\u6c34II",description:"407. \u63a5\u96e8\u6c34 II",source:"@site/docs/Algorithm/6-\u7cfb\u5217\u9898\u76ee/\u63a5\u96e8\u6c34/407-<dijkstra-\u4f18\u5148\u961f\u5217>-\u63a5\u96e8\u6c34II.md",sourceDirName:"Algorithm/6-\u7cfb\u5217\u9898\u76ee/\u63a5\u96e8\u6c34",slug:"/Algorithm/\u7cfb\u5217\u9898\u76ee/\u63a5\u96e8\u6c34/<dijkstra-\u4f18\u5148\u961f\u5217>-\u63a5\u96e8\u6c34II",permalink:"/docs/Algorithm/\u7cfb\u5217\u9898\u76ee/\u63a5\u96e8\u6c34/<dijkstra-\u4f18\u5148\u961f\u5217>-\u63a5\u96e8\u6c34II",draft:!1,tags:[],version:"current",sidebarPosition:407,frontMatter:{},sidebar:"algorithmSidebar",previous:{title:"<\u66b4\u529b-\u52a8\u89c4-\u53cc\u6307\u9488-\u5355\u8c03\u6808>-\u63a5\u96e8\u6c34",permalink:"/docs/Algorithm/\u7cfb\u5217\u9898\u76ee/\u63a5\u96e8\u6c34/<\u66b4\u529b-\u52a8\u89c4-\u53cc\u6307\u9488-\u5355\u8c03\u6808>-\u63a5\u96e8\u6c34"}},s={},l=[{value:"407. \u63a5\u96e8\u6c34 II",id:"407-\u63a5\u96e8\u6c34-ii",level:4}],c={toc:l};function u(e){let{components:n,...a}=e;return(0,i.kt)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"407-\u63a5\u96e8\u6c34-ii"},(0,i.kt)("a",{parentName:"h4",href:"https://leetcode.cn/problems/trapping-rain-water-ii/"},"407. \u63a5\u96e8\u6c34 II")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/trapping-rain-water-ii/solution/gong-shui-san-xie-jing-dian-dijkstra-yun-13ik/"},"https://leetcode-cn.com/problems/trapping-rain-water-ii/solution/gong-shui-san-xie-jing-dian-dijkstra-yun-13ik/")),(0,i.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"m x n")," \u7684\u77e9\u9635\uff0c\u5176\u4e2d\u7684\u503c\u5747\u4e3a\u975e\u8d1f\u6574\u6570\uff0c\u4ee3\u8868\u4e8c\u7ef4\u9ad8\u5ea6\u56fe\u6bcf\u4e2a\u5355\u5143\u7684\u9ad8\u5ea6\uff0c\u8bf7\u8ba1\u7b97\u56fe\u4e2d\u5f62\u72b6\u6700\u591a\u80fd\u63a5\u591a\u5c11\u4f53\u79ef\u7684\u96e8\u6c34\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1:")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:r(48085).Z,width:"361",height:"321"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u8f93\u5165: heightMap = [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]\n\u8f93\u51fa: 4\n\u89e3\u91ca: \u4e0b\u96e8\u540e\uff0c\u96e8\u6c34\u5c06\u4f1a\u88ab\u4e0a\u56fe\u84dd\u8272\u7684\u65b9\u5757\u4e2d\u3002\u603b\u7684\u63a5\u96e8\u6c34\u91cf\u4e3a1+2+1=4\u3002\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2:")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:r(27924).Z,width:"401",height:"321"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u8f93\u5165: heightMap = [[3,3,3,3,3],[3,2,2,2,3],[3,2,1,2,3],[3,2,2,2,3],[3,3,3,3,3]]\n\u8f93\u51fa: 10\n")),(0,i.kt)("p",null,"\u63d0\u793a:"),(0,i.kt)("p",null,"m == heightMap.length\nn == heightMap","[i]",".length\n1 <= m, n <= 200\n",(0,i.kt)("inlineCode",{parentName:"p"},"0 <= heightMap[i][j] <= 2 * 104")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\u95ee\u9898\u7684\u672c\u8d28\u662f\u6c42\u300c",(0,i.kt)("strong",{parentName:"p"},"\u4ece\u70b9 (x,y) \u5230\u8fb9\u754c\u7684\u9047\u5230\u7684\u6240\u6709\u6700\u9ad8\u70b9\u4e2d\u6700\u5c0f\u503c\u4e3a\u591a\u5c11\u300d\uff0c\u8fd9\u4e2a\u8def\u5f84\u9ad8\u5ea6\u7684\u6700\u5c0f\u503c\u4e0e (x,y) \u672c\u8eab\u7684\u9ad8\u5ea6 heightMap(x,y)\u4e4b\u95f4\u7684\u5dee\u503c\uff0c\u5373\u662f\u8be5\u70b9\u80fd\u63a5\u5230\u7684\u96e8\u6c34\u6570\u91cf"),"\u3002"),(0,i.kt)("p",null,"\u672c\u9898\u6c42\u7684\u662f\u6240\u6709\u8def\u5f84\u4e2d\uff0c\u8def\u5f84\u9ad8\u5ea6\u7684\u6700\u5c0f\u503c\uff0c\u9700\u8981\u5bf9 Dijkstra \u8fdb\u884c\u53d8\u5f62\u3002"),(0,i.kt)("p",null,"\u9996\u5148\u300c\u4ece (x,y) \u51fa\u53d1\u5230\u8fbe\u8fb9\u754c\u7684\u8def\u5f84\u300d\u4e5f\u53ef\u770b\u4f5c\u300c\u4ece\u8fb9\u754c\u5230\u8fbe\u70b9 (x,y) \u7684\u8def\u5f84\u300d\uff0c\u7ecf\u8fc7\u8f6c\u6362\u64cd\u4f5c\u540e\uff0c\u76f4\u63a5\u8ba1\u7b97\u8fb9\u754c\u5230\u70b9 (x,y) \u7684\u8def\u5f84\u662f\u4e00\u4e2a\u591a\u6e90\u70b9\u95ee\u9898\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u8003\u8651\u5f15\u5165\u300c\u8d85\u7ea7\u6e90\u70b9\u300d\u8fdb\u884c\u7b80\u5316\uff1a\u8d85\u7ea7\u6e90\u70b9\u4e0e\u6240\u6709\u7684\u8fb9\u754c\u683c\u5b50\u8fde\u6709\u4e00\u6761\u6743\u503c\u4e3a 0 \u7684\u8fb9\uff0c\u4ece\u800c\u8fdb\u4e00\u6b65\u5c06\u95ee\u9898\u8f6c\u5316\u4e3a\u300c",(0,i.kt)("strong",{parentName:"p"},"\u6c42\u4ece\u8d85\u7ea7\u6e90\u70b9\u51fa\u53d1\u5230\u8fbe (x,y) \u7684\u8def\u5f84\u9ad8\u5ea6\u7684\u6700\u5c0f\u503c\u300d"),"\u3002\u4e0e\u6c42\u6700\u77ed\u8def\u7684 Dijkstra \u7c7b\u4f3c\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u300c\u4f7f\u7528\u51fa\u961f\u5143\u7d20\u66f4\u65b0\u90bb\u70b9\u7684\u677e\u5f1b\u64cd\u4f5c\u300d\u7b49\u4ef7\u300c\u4f7f\u7528\u51fa\u961f\u5143\u7d20\u66f4\u65b0\u76f8\u90bb\u683c\u5b50\u7684\u96e8\u6c34\u91cf\u300d\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5982\u679c\u6211\u4eec\u80fd\u591f\u4fdd\u8bc1\u88ab\u51fa\u961f\u5143\u7d20\u6240\u66f4\u65b0\u7684\u9ad8\u5ea6\u4e3a\u6700\u7ec8\u9ad8\u5ea6\uff08\u6216\u8005\u8bf4\u51fa\u961f\u5143\u7d20\u7684\u9ad8\u5ea6\u4e3a\u6700\u7ec8\u9ad8\u5ea6\uff09\uff0c\u90a3\u4e48\u8be5\u505a\u6cd5\u7684\u6b63\u786e\u6027\u5c31\u80fd\u88ab Dijkstra \u7684\u6b63\u786e\u6027\u6240\u4fdd\u8bc1"),"\u3002"),(0,i.kt)("p",null,"\u6309\u7167\u6a21\u7248\u5199\u7684 616 ms 17.2 MB"),(0,i.kt)("p",null,"\u4e2a\u4eba\u89c9\u5f97\u662f\u56e0\u4e3a\u628a ",(0,i.kt)("inlineCode",{parentName:"p"},"vis[r][c] = True"),"\u653e\u5230\u5916\u9762\u4e86\uff0c\u5bfc\u81f4\u6709\u4e9b\u5df2\u7ecf\u5b8c\u6210\u7684\u8fd8\u8d70\u4e86\u4e00\u904dwhile "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def trapRainWater(self, heightMap: List[List[int]]) -> int:\n        rows = len(heightMap)\n        cols = len(heightMap[0])\n        vis = [[False for _ in range(cols)] for _ in range(rows)]\n        # dis = [[] for _ in range(rows)] # \u8fd9\u9898\u4e0d\u9700\u8981\uff0c\u56e0\u4e3a\u4e0d\u7528\u7d2f\u8ba1\u8def\u4e0a\u7684\u6743\u503c\uff0c\u800c\u662f\u8bb0\u5f55\u8def\u4e0a\u6700\u9ad8\u7684\u4e00\u70b9\n\n        priorityQueue = []\n        for c in range(cols):\n            # \u4e0a\u4e0b\u4e24\u884c\u5165\u4f18\u5148\u961f\u5217 \u672c\u9898\u7684\u4f18\u5148\u7ea7\u7528 \u4ece\u8d85\u7ea7\u6e90\u70b9\u5230\u5404\u4e2a\u70b9\u7684\u9014\u4e2d\u7684\u6700\u9ad8\u70b9\u8868\u793a\uff0c\u6240\u6709\u6700\u9ad8\u70b9\u4e2d\u6700\u4f4e\u7684\u90a3\u4e00\u4e2a\u4f18\u5148\u51fa\u5217\n            heapq.heappush(priorityQueue, (heightMap[0][c], (0, c))) # \u5de6\u8fb9\u662f\u4f18\u5148\u7ea7, \u53f3\u8fb9\u662f\u70b9\n            heapq.heappush(priorityQueue, (heightMap[rows-1][c], (rows-1, c)))\n\n        for r in range(rows):\n            heapq.heappush(priorityQueue, (heightMap[r][0], (r, 0)))\n            heapq.heappush(priorityQueue, (heightMap[r][cols-1], (r, cols-1)))\n\n        ans = 0 \n        while priorityQueue:\n            # dijkstra\u4e2d\u8868\u793a\u7684\u662f\uff0c\u4ece\u6e90\u70b9\u5230\u76ee\u6807\u70b9\u53ef\u80fd\u7684\u6700\u77ed\u8ddd\u79bb\n            # \u8fd9\u4e00\u9898\u8868\u793a\uff0c\u4ece\u539f\u70b9\u5230\u76ee\u6807\u70b9\u6240\u6709\u8def\u4e0a\u6700\u9ad8\u70b9\u4e2d\u7684\u6700\u4f4e\u4e00\u70b9\n            priority, (r, c) = heapq.heappop(priorityQueue)\n            if vis[r][c]:\n                continue\n            ans += priority - heightMap[r][c]\n            vis[r][c] = True\n\n            for dr, dc in ((0,1), (1,0), (-1,0), (0,-1)):\n                nr = r + dr\n                nc = c + dc\n                if 0<=nr<rows and 0<=nc<cols:\n                    # \u8bb0\u5f55\u8def\u4e0a\u6700\u9ad8\u7684\u4e00\u70b9\n                    heapq.heappush(priorityQueue, (max(heightMap[nr][nc], priority), (nr, nc)))\n        return ans\n")),(0,i.kt)("p",null,"\u6309\u7167\u9898\u89e3\u5199\u7684 224 ms 16.7 MB"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def trapRainWater(self, heightMap: List[List[int]]) -> int:\n\n        rows = len(heightMap)\n        cols = len(heightMap[0])\n        vis = [[False for _ in range(cols)] for _ in range(rows)]\n\n        priorityQueue = []\n        for c in range(cols):\n            heapq.heappush(priorityQueue, (heightMap[0][c], (0, c))) # \u5de6\u8fb9\u662f\u4f18\u5148\u7ea7, \u53f3\u8fb9\u662f\u70b9\n            heapq.heappush(priorityQueue, (heightMap[rows-1][c], (rows-1, c)))\n            vis[0][c] = True\n            vis[rows-1][c] = True\n        for r in range(rows):\n            heapq.heappush(priorityQueue, (heightMap[r][0], (r, 0)))\n            heapq.heappush(priorityQueue, (heightMap[r][cols-1], (r, cols-1)))\n            vis[r][0] = True\n            vis[r][cols-1] = True\n\n        ans = 0 \n        while priorityQueue:\n            priority, (r, c) = heapq.heappop(priorityQueue)\n            for dr, dc in ((0,1), (1,0), (-1,0), (0,-1)):\n                nr = r + dr\n                nc = c + dc\n                if 0<=nr<rows and 0<=nc<cols:\n                    if vis[nr][nc]:\n                        continue\n                    if priority > heightMap[nr][nc]:\n                        ans += priority - heightMap[nr][nc]\n                    heapq.heappush(priorityQueue, (max(priority, heightMap[nr][nc]), (nr, nc)))\n                    vis[nr][nc] = True\n        return ans\n\n")))}u.isMDXComponent=!0},48085:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/trap1-3d-4921cd7d1aa5e265511a7225dff4208a.jpg"},27924:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/trap2-3d-2cec0b3a78f3c682dcedbda16c108d3e.jpg"}}]);