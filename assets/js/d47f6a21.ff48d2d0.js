"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[72830],{3905:(n,e,t)=>{t.d(e,{Zo:()=>s,kt:()=>f});var r=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},l=Object.keys(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var p=r.createContext({}),u=function(n){var e=r.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},s=function(n){var e=u(n.components);return r.createElement(p.Provider,{value:e},n.children)},m="mdxType",c={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,l=n.originalType,p=n.parentName,s=o(n,["components","mdxType","originalType","parentName"]),m=u(t),d=i,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return t?r.createElement(f,a(a({ref:e},s),{},{components:t})):r.createElement(f,a({ref:e},s))}));function f(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var l=t.length,a=new Array(l);a[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=n,o[m]="string"==typeof n?n:i,a[1]=o;for(var u=2;u<l;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},93381:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=t(87462),i=(t(67294),t(3905));const l={},a=void 0,o={unversionedId:"Algorithm/\u56fe\u8bba/\u4f8b\u9898-BFS/<\u53cc\u5411bfs+\u8f6c\u5411\u7ec6\u8282>-\u8f6c\u5316\u6570\u5b57\u7684\u6700\u5c0f\u8fd0\u7b97\u6570",id:"Algorithm/\u56fe\u8bba/\u4f8b\u9898-BFS/<\u53cc\u5411bfs+\u8f6c\u5411\u7ec6\u8282>-\u8f6c\u5316\u6570\u5b57\u7684\u6700\u5c0f\u8fd0\u7b97\u6570",title:"<\u53cc\u5411bfs+\u8f6c\u5411\u7ec6\u8282>-\u8f6c\u5316\u6570\u5b57\u7684\u6700\u5c0f\u8fd0\u7b97\u6570",description:"\u9898\u76ee\uff1a2059. \u8f6c\u5316\u6570\u5b57\u7684\u6700\u5c0f\u8fd0\u7b97\u6570",source:"@site/docs/Algorithm/4-\u56fe\u8bba/\u4f8b\u9898-BFS/2059-<\u53cc\u5411bfs+\u8f6c\u5411\u7ec6\u8282>-\u8f6c\u5316\u6570\u5b57\u7684\u6700\u5c0f\u8fd0\u7b97\u6570.md",sourceDirName:"Algorithm/4-\u56fe\u8bba/\u4f8b\u9898-BFS",slug:"/Algorithm/\u56fe\u8bba/\u4f8b\u9898-BFS/<\u53cc\u5411bfs+\u8f6c\u5411\u7ec6\u8282>-\u8f6c\u5316\u6570\u5b57\u7684\u6700\u5c0f\u8fd0\u7b97\u6570",permalink:"/docs/Algorithm/\u56fe\u8bba/\u4f8b\u9898-BFS/<\u53cc\u5411bfs+\u8f6c\u5411\u7ec6\u8282>-\u8f6c\u5316\u6570\u5b57\u7684\u6700\u5c0f\u8fd0\u7b97\u6570",draft:!1,tags:[],version:"current",sidebarPosition:2059,frontMatter:{},sidebar:"algorithmSidebar",previous:{title:"<\u591a\u6e90bfs>-\u5730\u56fe\u5206\u6790",permalink:"/docs/Algorithm/\u56fe\u8bba/\u4f8b\u9898-BFS/<\u591a\u6e90bfs>-\u5730\u56fe\u5206\u6790"},next:{title:"<bfs>-\u5f15\u7206\u6700\u591a\u7684\u70b8\u5f39",permalink:"/docs/Algorithm/\u56fe\u8bba/\u4f8b\u9898-BFS/<bfs>-\u5f15\u7206\u6700\u591a\u7684\u70b8\u5f39"}},p={},u=[{value:"\u65b9\u6cd5\uff1a\u53cc\u5411bfs",id:"\u65b9\u6cd5\u53cc\u5411bfs",level:2},{value:"\u5148\u4e0a\u3010\u9519\u8bef\u4ee3\u7801\u3011",id:"\u5148\u4e0a\u9519\u8bef\u4ee3\u7801",level:3},{value:"\u3010\u6b63\u786e\u601d\u8def+\u4ee3\u7801\u3011",id:"\u6b63\u786e\u601d\u8def\u4ee3\u7801",level:3}],s={toc:u};function m(n){let{components:e,...t}=n;return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u9898\u76ee\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/minimum-operations-to-convert-number/"},"2059. \u8f6c\u5316\u6570\u5b57\u7684\u6700\u5c0f\u8fd0\u7b97\u6570")),(0,i.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u4e0b\u6807\u4ece ",(0,i.kt)("strong",{parentName:"p"},"0")," \u5f00\u59cb\u7684\u6574\u6570\u6570\u7ec4 ",(0,i.kt)("inlineCode",{parentName:"p"},"nums")," \uff0c\u8be5\u6570\u7ec4\u7531 ",(0,i.kt)("strong",{parentName:"p"},"\u4e92\u4e0d\u76f8\u540c")," \u7684\u6570\u5b57\u7ec4\u6210\u3002\u53e6\u7ed9\u4f60\u4e24\u4e2a\u6574\u6570 ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"goal")," \u3002"),(0,i.kt)("p",null,"\u6574\u6570 ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," \u7684\u503c\u6700\u5f00\u59cb\u8bbe\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," \uff0c\u4f60\u6253\u7b97\u6267\u884c\u4e00\u4e9b\u8fd0\u7b97\u4f7f ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," \u8f6c\u5316\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"goal")," \u3002\u4f60\u53ef\u4ee5\u5bf9\u6570\u5b57 ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," \u91cd\u590d\u6267\u884c\u4e0b\u8ff0\u8fd0\u7b97\uff1a"),(0,i.kt)("p",null,"\u5982\u679c ",(0,i.kt)("inlineCode",{parentName:"p"},"0 <= x <= 1000")," \uff0c\u90a3\u4e48\uff0c\u5bf9\u4e8e\u6570\u7ec4\u4e2d\u7684\u4efb\u4e00\u4e0b\u6807 ",(0,i.kt)("inlineCode",{parentName:"p"},"i"),"\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"0 <= i < nums.length"),"\uff09\uff0c\u53ef\u4ee5\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),"\u8bbe\u4e3a\u4e0b\u8ff0\u4efb\u4e00\u503c\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x + nums[i]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x - nums[i]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x ^ nums[i]"),"\uff08\u6309\u4f4d\u5f02\u6216 XOR\uff09")),(0,i.kt)("p",null,"\u6ce8\u610f\uff0c\u4f60\u53ef\u4ee5\u6309\u4efb\u610f\u987a\u5e8f\u4f7f\u7528\u6bcf\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"nums[i]")," \u4efb\u610f\u6b21\u3002\u4f7f ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," \u8d8a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"0 <= x <= 1000")," \u8303\u56f4\u7684\u8fd0\u7b97\u540c\u6837\u53ef\u4ee5\u751f\u6548\uff0c\u4f46\u8be5\u8be5\u8fd0\u7b97\u6267\u884c\u540e\u5c06\u4e0d\u80fd\u6267\u884c\u5176\u4ed6\u8fd0\u7b97\u3002"),(0,i.kt)("p",null,"\u8fd4\u56de\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"x = start")," \u8f6c\u5316\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"goal")," \u7684\u6700\u5c0f\u64cd\u4f5c\u6570\uff1b\u5982\u679c\u65e0\u6cd5\u5b8c\u6210\u8f6c\u5316\uff0c\u5219\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"p"},"-1")," \u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u793a\u4f8b 1\uff1a\n\n\u8f93\u5165\uff1anums = [2,4,12], start = 2, goal = 12\n\u8f93\u51fa\uff1a2\n\u89e3\u91ca\uff1a\n\u53ef\u4ee5\u6309 2 \u2192 14 \u2192 12 \u7684\u8f6c\u5316\u8def\u5f84\u8fdb\u884c\uff0c\u53ea\u9700\u6267\u884c\u4e0b\u8ff0 2 \u6b21\u8fd0\u7b97\uff1a\n- 2 + 12 = 14\n- 14 - 2 = 12\n\n\u793a\u4f8b 2\uff1a\n\n\u8f93\u5165\uff1anums = [3,5,7], start = 0, goal = -4\n\u8f93\u51fa\uff1a2\n\u89e3\u91ca\uff1a\n\u53ef\u4ee5\u6309 0 \u2192 3 \u2192 -4 \u7684\u8f6c\u5316\u8def\u5f84\u8fdb\u884c\uff0c\u53ea\u9700\u6267\u884c\u4e0b\u8ff0 2 \u6b21\u8fd0\u7b97\uff1a\n- 0 + 3 = 3\n- 3 - 7 = -4\n\u6ce8\u610f\uff0c\u6700\u540e\u4e00\u6b65\u8fd0\u7b97\u4f7f x \u8d85\u8fc7\u8303\u56f4 0 <= x <= 1000 \uff0c\u4f46\u8be5\u8fd0\u7b97\u4ecd\u7136\u53ef\u4ee5\u751f\u6548\u3002\n\n\u793a\u4f8b 3\uff1a\n\n\u8f93\u5165\uff1anums = [2,8,16], start = 0, goal = 1\n\u8f93\u51fa\uff1a-1\n\u89e3\u91ca\uff1a\n\u65e0\u6cd5\u5c06 0 \u8f6c\u5316\u4e3a 1\n\n")),(0,i.kt)("p",null,"\u63d0\u793a\uff1a"),(0,i.kt)("p",null,"1 <= nums.length <= 1000\n-109 <= nums","[i]",", goal <= 109\n0 <= start <= 1000\nstart != goal\nnums \u4e2d\u7684\u6240\u6709\u6574\u6570\u4e92\u4e0d\u76f8\u540c"),(0,i.kt)("h2",{id:"\u65b9\u6cd5\u53cc\u5411bfs"},"\u65b9\u6cd5\uff1a\u53cc\u5411bfs"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8d77\u70b9\u548c\u7ec8\u70b9\u90fd\u660e\u786e"),"\uff0c\u5176\u5b9e\u662f\u4e00\u9053\u5f88\u7b80\u5355\u7684\u53cc\u5411bfs"),(0,i.kt)("p",null,"\u4f46\u662f\u9898\u76ee\u7684\u8fd9\u4e2a\u6761\u4ef6\uff1a\u4f7f ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," \u8d8a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"0 <= x <= 1000")," \u8303\u56f4\u7684\u8fd0\u7b97\u540c\u6837\u53ef\u4ee5\u751f\u6548\uff0c\u4f46\u8be5\u8be5\u8fd0\u7b97\u6267\u884c\u540e\u5c06\u4e0d\u80fd\u6267\u884c\u5176\u4ed6\u8fd0\u7b97"),(0,i.kt)("p",null,"\u4f7f\u8fd9\u9053\u9898\u7528\u300c\u53cc\u5411bfs\u300d\u7684\u96be\u5ea6\u5927\u5927\u589e\u52a0"),(0,i.kt)("p",null,"\u5176\u5b9e\u7528\u300c\u5355\u9879bfs\u300d\u4e5f\u53ef\u4ee5\uff0c\u60f3\u5b66\u5b66\u300c\u53cc\u5411bfs\u300d\u53ef\u4ee5\u5f80\u4e0b\u770b"),(0,i.kt)("h3",{id:"\u5148\u4e0a\u9519\u8bef\u4ee3\u7801"},"\u5148\u4e0a\u3010\u9519\u8bef\u4ee3\u7801\u3011"),(0,i.kt)("p",null,"\u9519\u5728\u54ea\u91cc\u5462\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"if (next < 0 || next > 1000) continue;")),(0,i.kt)("p",null,"\u5982\u679c goal \u662f\u8d1f\u7684\uff0c\u5bfc\u81f4\u300c\u8d1f\u7684next\u300d\u65e0\u6cd5\u8fdb\u5165\u961f\u5217\uff0c\u518d\u4e0b\u4e00\u8f6e\u8fdb\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"if (r_vis.count(cur) == 1) return step;")," \u53d6\u7b54\u6848"),(0,i.kt)("p",null,"\u800c\u7b2c\u4e00\u6b21\u7684\u300c\u8d1f\u7684next\u300d\u662f\u6ee1\u8db3\u9898\u76ee\u8981\u6c42\u7684"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<char> ops = {'+', '-', '^'};\n\n    void swap_que(deque<int> &l, deque<int> &r) {\n        deque<int> tmp;\n        tmp = l;\n        l = r;\n        r = tmp;\n    }\n\n    void swap_set(unordered_set<int> &l, unordered_set<int> &r) {\n        unordered_set<int> tmp;\n        tmp = l;\n        l = r;\n        r = tmp;\n    }\n\n    int minimumOperations(vector<int> &nums, int start, int goal) {\n        deque<int> l_que = {start};\n        deque<int> r_que = {goal};\n        unordered_set<int> l_vis = {start};\n        unordered_set<int> r_vis = {goal};\n\n        int step = 0;\n        while (!l_que.empty() && !r_que.empty()) {\n            if (l_que.size() > r_que.size()) {\n                swap_que(l_que, r_que);\n                swap_set(l_vis, r_vis);\n            }\n            int sz = l_que.size();\n            for (int i = 0; i < sz; i++) {\n                int cur = l_que.front();\n                l_que.pop_front();\n\n                if (r_vis.count(cur) == 1) return step;\n\n                for (int num : nums) {\n                    for (char op : ops) {\n                        int next;\n                        if (op == '+') {\n                            next = cur + num;\n                        } else if (op == '-') {\n                            next = cur - num;\n                        } else if (op == '^') {\n                            next = cur ^ num;\n                        }\n                        if (next < 0 || next > 1000) continue;\n                        if (l_vis.count(next) == 1) continue;\n                        l_que.push_back(next);\n                        l_vis.insert(next);\n                    }\n                }\n            }\n            step++;\n        }\n        return -1;\n    }\n};\n")),(0,i.kt)("h3",{id:"\u6b63\u786e\u601d\u8def\u4ee3\u7801"},"\u3010\u6b63\u786e\u601d\u8def+\u4ee3\u7801\u3011"),(0,i.kt)("p",null,"\u6838\u5fc3\u601d\u60f3\uff1a\u8d1f\u7684\u9700\u8981\u53bb\u68c0\u67e5\u662f\u5426\u662f\u76ee\u6807\uff0c\u4f46\u662f\u4e0d\u80fd\u518d\u6b21\u8ba1\u7b97"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5de6\u8fb9\u5f80\u53f3\uff0c\u8d1f\u7684\u53ef\u4ee5\u4f5c\u4e3anext\u8fdb\u53bb\uff0c\u4e0d\u53ef\u4ee5\u4f5c\u4e3acur\u5f80\u540e\u6f14\u8fdb")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u53f3\u8fb9\u5f80\u5de6\uff0c\u8d1f\u7684\u53ef\u4ee5\u4f5c\u4e3acur\u5f80\u540e\u6f14\u8fdb\uff0c\u4e0d\u53ef\u4ee5\u4f5c\u4e3anext\u8fdb\u53bb"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<char> ops = {'+', '-', '^'};\n\n    void swap_que(deque<int> &l, deque<int> &r) {\n        deque<int> tmp;\n        tmp = l;\n        l = r;\n        r = tmp;\n    }\n\n    void swap_set(unordered_set<int> &l, unordered_set<int> &r) {\n        unordered_set<int> tmp;\n        tmp = l;\n        l = r;\n        r = tmp;\n    }\n\n    int minimumOperations(vector<int> &nums, int start, int goal) {\n        deque<int> l_que = {start};\n        deque<int> r_que = {goal};\n        unordered_set<int> l_vis = {start};\n        unordered_set<int> r_vis = {goal};\n\n        int step = 0;\n        int flag = true;\n        while (!l_que.empty() && !r_que.empty()) {\n            if (l_que.size() > r_que.size()) {\n                swap_que(l_que, r_que);\n                swap_set(l_vis, r_vis);\n                flag = !flag;\n            }\n            int sz = l_que.size();\n            for (int i = 0; i < sz; i++) {\n                int cur = l_que.front();\n                l_que.pop_front();\n\n                if (r_vis.count(cur) == 1) return step;\n                if (flag && (cur < 0 || cur > 1000)) continue;\n\n                for (int num : nums) {\n                    for (char op : ops) {\n                        int next;\n                        if (op == '+') {\n                            next = cur + num;\n                        } else if (op == '-') {\n                            next = cur - num;\n                        } else if (op == '^') {\n                            next = cur ^ num;\n                        }\n                        if (l_vis.count(next) == 1) continue;\n                        if (!flag && (next < 0 || next > 1000)) continue;\n                        l_que.push_back(next);\n                        l_vis.insert(next);\n                    }\n                }\n            }\n            step++;\n        }\n        return -1;\n    }\n};\n")))}m.isMDXComponent=!0}}]);