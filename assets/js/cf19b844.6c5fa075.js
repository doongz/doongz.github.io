"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[19382],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},49889:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const i={},a=void 0,l={unversionedId:"Algorithm/\u6570\u636e\u7ed3\u6784/\u4f8b\u9898-\u5806/<TopK>-\u524dK\u4e2a\u9ad8\u9891\u5355\u8bcd",id:"Algorithm/\u6570\u636e\u7ed3\u6784/\u4f8b\u9898-\u5806/<TopK>-\u524dK\u4e2a\u9ad8\u9891\u5355\u8bcd",title:"<TopK>-\u524dK\u4e2a\u9ad8\u9891\u5355\u8bcd",description:"692. \u524dK\u4e2a\u9ad8\u9891\u5355\u8bcd",source:"@site/docs/Algorithm/1-\u6570\u636e\u7ed3\u6784/\u4f8b\u9898-\u5806/692-<TopK>-\u524dK\u4e2a\u9ad8\u9891\u5355\u8bcd.md",sourceDirName:"Algorithm/1-\u6570\u636e\u7ed3\u6784/\u4f8b\u9898-\u5806",slug:"/Algorithm/\u6570\u636e\u7ed3\u6784/\u4f8b\u9898-\u5806/<TopK>-\u524dK\u4e2a\u9ad8\u9891\u5355\u8bcd",permalink:"/docs/Algorithm/\u6570\u636e\u7ed3\u6784/\u4f8b\u9898-\u5806/<TopK>-\u524dK\u4e2a\u9ad8\u9891\u5355\u8bcd",draft:!1,tags:[],version:"current",sidebarPosition:692,frontMatter:{},sidebar:"docsSidebar",previous:{title:"<\u54c8\u5e0c\u8868+\u5806>-\u6839\u636e\u5b57\u7b26\u51fa\u73b0\u9891\u7387\u6392\u5e8f",permalink:"/docs/Algorithm/\u6570\u636e\u7ed3\u6784/\u4f8b\u9898-\u5806/<\u54c8\u5e0c\u8868+\u5806>-\u6839\u636e\u5b57\u7b26\u51fa\u73b0\u9891\u7387\u6392\u5e8f"},next:{title:"<\u6a21\u7248\u9898>-\u6570\u636e\u6d41\u4e2d\u7684\u7b2cK\u5927\u5143\u7d20",permalink:"/docs/Algorithm/\u6570\u636e\u7ed3\u6784/\u4f8b\u9898-\u5806/<\u6a21\u7248\u9898>-\u6570\u636e\u6d41\u4e2d\u7684\u7b2cK\u5927\u5143\u7d20"}},s={},p=[{value:"\u65b9\u6cd5\uff1a\u63a7\u5236\u5806\u7684\u5927\u5c0f",id:"\u65b9\u6cd5\u63a7\u5236\u5806\u7684\u5927\u5c0f",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/top-k-frequent-words/"},"692. \u524dK\u4e2a\u9ad8\u9891\u5355\u8bcd")),(0,o.kt)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u5355\u8bcd\u5217\u8868 ",(0,o.kt)("inlineCode",{parentName:"p"},"words")," \u548c\u4e00\u4e2a\u6574\u6570 ",(0,o.kt)("inlineCode",{parentName:"p"},"k")," \uff0c\u8fd4\u56de\u524d ",(0,o.kt)("inlineCode",{parentName:"p"},"k")," \u4e2a\u51fa\u73b0\u6b21\u6570\u6700\u591a\u7684\u5355\u8bcd\u3002"),(0,o.kt)("p",null,"\u8fd4\u56de\u7684\u7b54\u6848\u5e94\u8be5\u6309\u5355\u8bcd\u51fa\u73b0\u9891\u7387\u7531\u9ad8\u5230\u4f4e\u6392\u5e8f\u3002\u5982\u679c\u4e0d\u540c\u7684\u5355\u8bcd\u6709\u76f8\u540c\u51fa\u73b0\u9891\u7387\uff0c ",(0,o.kt)("strong",{parentName:"p"},"\u6309\u5b57\u5178\u987a\u5e8f")," \u6392\u5e8f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'\u793a\u4f8b 1\uff1a\n\n\u8f93\u5165: words = ["i", "love", "leetcode", "i", "love", "coding"], k = 2\n\u8f93\u51fa: ["i", "love"]\n\u89e3\u6790: "i" \u548c "love" \u4e3a\u51fa\u73b0\u6b21\u6570\u6700\u591a\u7684\u4e24\u4e2a\u5355\u8bcd\uff0c\u5747\u4e3a2\u6b21\u3002\n    \u6ce8\u610f\uff0c\u6309\u5b57\u6bcd\u987a\u5e8f "i" \u5728 "love" \u4e4b\u524d\u3002\n    \n\u793a\u4f8b 2\uff1a\n\n\u8f93\u5165: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4\n\u8f93\u51fa: ["the", "is", "sunny", "day"]\n\u89e3\u6790: "the", "is", "sunny" \u548c "day" \u662f\u51fa\u73b0\u6b21\u6570\u6700\u591a\u7684\u56db\u4e2a\u5355\u8bcd\uff0c\n    \u51fa\u73b0\u6b21\u6570\u4f9d\u6b21\u4e3a 4, 3, 2 \u548c 1 \u6b21\u3002\n\n')),(0,o.kt)("p",null,"\u6ce8\u610f\uff1a"),(0,o.kt)("p",null,"1 <= words.length <= 500\n1 <= words","[i]"," <= 10\nwords","[i]"," \u7531\u5c0f\u5199\u82f1\u6587\u5b57\u6bcd\u7ec4\u6210\u3002\nk \u7684\u53d6\u503c\u8303\u56f4\u662f [1, \u4e0d\u540c words","[i]"," \u7684\u6570\u91cf]"),(0,o.kt)("h2",{id:"\u65b9\u6cd5\u63a7\u5236\u5806\u7684\u5927\u5c0f"},"\u65b9\u6cd5\uff1a\u63a7\u5236\u5806\u7684\u5927\u5c0f"),(0,o.kt)("p",null,"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"O(nlogk)")),(0,o.kt)("p",null,"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"O(n)")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u91cd\u70b9\u5b66\u4e60\u4e0b\u5b98\u65b9\u7684\u5199\u6cd5")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c++"},"class Solution {\npublic:\n    vector<string> topKFrequent(vector<string> &words, int k) {\n        unordered_map<string, int> um;\n        for (int i = 0; i < words.size(); i++) {\n            um[words[i]]++;\n        }\n\n        // \u5c0f\u6839\u5806\n        auto cmp = [&](const auto &a, const auto &b) {\n            return a.second == b.second ? a.first < b.first : a.second > b.second;\n            // if (a.second != b.second) {\n            //     return a.second > b.second;\n            // } else {\n            //     return a.first < b.first;\n            // }\n        };\n        priority_queue<pair<string, int>, vector<pair<string, int>>, decltype(cmp)> smallQ(cmp);\n        for (auto& it : um) {\n            smallQ.push(it);\n            if (smallQ.size() > k) {\n                smallQ.pop();\n            }\n        }\n\n        vector<string> ans(k);\n        for (int i = k - 1; i >= 0;i--) {\n            ans[i] = (smallQ.top().first);\n            smallQ.pop();\n        }\n        return ans;\n    }\n};\n\n")))}u.isMDXComponent=!0}}]);