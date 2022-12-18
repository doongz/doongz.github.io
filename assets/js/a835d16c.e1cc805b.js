"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[96469],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=u(t),k=i,d=m["".concat(p,".").concat(k)]||m[k]||s[k]||o;return t?r.createElement(d,l(l({ref:n},c),{},{components:t})):r.createElement(d,l({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=k;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a[m]="string"==typeof e?e:i,l[1]=a;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},1302:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=t(87462),i=(t(67294),t(3905));const o={},l="Boyer-Moore \u6295\u7968\u7b97\u6cd5-\u627e\u4e00\u534a\u4ee5\u4e0a\u5143\u7d20",a={unversionedId:"Algorithm/\u6570\u5b66/\u6280\u5de7\u7b97\u6cd5/\u6295\u7968\u7b97\u6cd5-\u627e\u4e00\u534a\u4ee5\u4e0a\u5143\u7d20",id:"Algorithm/\u6570\u5b66/\u6280\u5de7\u7b97\u6cd5/\u6295\u7968\u7b97\u6cd5-\u627e\u4e00\u534a\u4ee5\u4e0a\u5143\u7d20",title:"Boyer-Moore \u6295\u7968\u7b97\u6cd5-\u627e\u4e00\u534a\u4ee5\u4e0a\u5143\u7d20",description:"\u6469\u5c14\u6295\u7968\u6cd5\uff1a\u6469\u5c14\u6295\u7968\u6cd5\u7684\u6838\u5fc3\u601d\u60f3\u4e3a\u5bf9\u62fc\u6d88\u8017",source:"@site/docs/Algorithm/5-\u6570\u5b66/2-\u6280\u5de7\u7b97\u6cd5/04-\u6295\u7968\u7b97\u6cd5-\u627e\u4e00\u534a\u4ee5\u4e0a\u5143\u7d20.md",sourceDirName:"Algorithm/5-\u6570\u5b66/2-\u6280\u5de7\u7b97\u6cd5",slug:"/Algorithm/\u6570\u5b66/\u6280\u5de7\u7b97\u6cd5/\u6295\u7968\u7b97\u6cd5-\u627e\u4e00\u534a\u4ee5\u4e0a\u5143\u7d20",permalink:"/docs/Algorithm/\u6570\u5b66/\u6280\u5de7\u7b97\u6cd5/\u6295\u7968\u7b97\u6cd5-\u627e\u4e00\u534a\u4ee5\u4e0a\u5143\u7d20",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"docsSidebar",previous:{title:"\u7ea6\u745f\u592b\u73af",permalink:"/docs/Algorithm/\u6570\u5b66/\u6280\u5de7\u7b97\u6cd5/\u7ea6\u745f\u592b\u73af"},next:{title:"\u77e9\u9635\u8fd0\u7b97",permalink:"/docs/Algorithm/\u6570\u5b66/\u77e9\u9635\u8fd0\u7b97/\u77e9\u9635\u8fd0\u7b97"}},p={},u=[{value:"\u7b97\u6cd5",id:"\u7b97\u6cd5",level:2},{value:"\u63a8\u5e7f\u5230 n / k \u7684\u60c5\u51b5",id:"\u63a8\u5e7f\u5230-n--k-\u7684\u60c5\u51b5",level:2}],c={toc:u};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"boyer-moore-\u6295\u7968\u7b97\u6cd5-\u627e\u4e00\u534a\u4ee5\u4e0a\u5143\u7d20"},"Boyer-Moore \u6295\u7968\u7b97\u6cd5-\u627e\u4e00\u534a\u4ee5\u4e0a\u5143\u7d20"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6469\u5c14\u6295\u7968\u6cd5\uff1a\u6469\u5c14\u6295\u7968\u6cd5\u7684\u6838\u5fc3\u601d\u60f3\u4e3a\u5bf9\u62fc\u6d88\u8017")),(0,i.kt)("p",null,"\u8003\u8651\u6700\u57fa\u672c\u7684\u6469\u5c14\u6295\u7968\u95ee\u9898\uff1a\u7ed9\u5b9a\u4e00\u4e2a\u5927\u5c0f\u4e3a n \u7684\u6570\u7ec4\uff0c\u5047\u5b9a\u6570\u7ec4\u4e2d\u4e00\u5b9a\u6709\u4e00\u4e2a\u591a\u6570\u5143\u7d20\u3002\u591a\u6570\u5143\u7d20\u662f\u6307\u5728\u6570\u7ec4\u4e2d\u300c\u51fa\u73b0\u6b21\u6570\u5927\u4e8e n/2\u300d\u7684\u5143\u7d20\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u4f18\u52bf\uff1a\u53ef\u4ee5\u5c06\u7a7a\u95f4\u590d\u6742\u5ea6\u4ece ",(0,i.kt)("inlineCode",{parentName:"strong"},"O(n)")," \u964d\u81f3 ",(0,i.kt)("inlineCode",{parentName:"strong"},"O(1)"))),(0,i.kt)("h2",{id:"\u7b97\u6cd5"},"\u7b97\u6cd5"),(0,i.kt)("p",null,"\u9898\u76ee\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/find-majority-element-lcci/"},"\u9762\u8bd5\u9898 17.10. \u4e3b\u8981\u5143\u7d20")),(0,i.kt)("p",null,"\u53c2\u8003\u9898\u89e3\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof/solution/mian-shi-ti-39-shu-zu-zhong-chu-xian-ci-shu-chao-3/"},"\u5251\u6307 Offer 39. \u6570\u7ec4\u4e2d\u51fa\u73b0\u6b21\u6570\u8d85\u8fc7\u4e00\u534a\u7684\u6570\u5b57\uff08\u6469\u5c14\u6295\u7968\u6cd5\uff0c\u6e05\u6670\u56fe\u89e3\uff09")),(0,i.kt)("p",null,"\u6570\u7ec4\u4e2d\u5360\u6bd4\u8d85\u8fc7\u4e00\u534a\u7684\u5143\u7d20\u79f0\u4e4b\u4e3a\u4e3b\u8981\u5143\u7d20\u3002\u7ed9\u4f60\u4e00\u4e2a \u6574\u6570 \u6570\u7ec4\uff0c\u627e\u51fa\u5176\u4e2d\u7684\u4e3b\u8981\u5143\u7d20\u3002\u82e5\u6ca1\u6709\uff0c\u8fd4\u56de -1 \u3002"),(0,i.kt)("p",null,"\u8bf7\u8bbe\u8ba1\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a O(N) \u3001\u7a7a\u95f4\u590d\u6742\u5ea6\u4e3a O(1) \u7684\u89e3\u51b3\u65b9\u6848\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u8f93\u5165\uff1a[1,2,5,9,5,9,5,5,5]\n\u8f93\u51fa\uff1a5\n\n\u8f93\u5165\uff1a[3,2]\n\u8f93\u51fa\uff1a-1\n\n\u8f93\u5165\uff1a[2,2,1,1,1,2,2]\n\u8f93\u51fa\uff1a2\n")),(0,i.kt)("p",null,"\u300c\u6469\u5c14\u6295\u7968\u300d\u6a21\u677f\u9898\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6469\u5c14\u6295\u7968 \uff1a\u5728\u96c6\u5408\u4e2d\u5bfb\u627e\u53ef\u80fd\u5b58\u5728\u7684\u591a\u6570\u5143\u7d20\uff0c\u8fd9\u4e00\u5143\u7d20\u5728\u8f93\u5165\u7684\u5e8f\u5217\u91cd\u590d\u51fa\u73b0\u5e76\u5360\u5230\u4e86\u5e8f\u5217\u5143\u7d20\u7684\u4e00\u534a\u4ee5\u4e0a\uff1b\u5728\u7b2c\u4e00\u904d\u904d\u5386\u4e4b\u540e\u5e94\u8be5\u518d\u8fdb\u884c\u4e00\u4e2a\u904d\u5386\u4ee5\u7edf\u8ba1\u7b2c\u4e00\u6b21\u7b97\u6cd5\u904d\u5386\u7684\u7ed3\u679c\u51fa\u73b0\u6b21\u6570\uff0c\u786e\u5b9a\u5176\u662f\u5426\u4e3a\u4f17\u6570\uff1b\u5982\u679c\u4e00\u4e2a\u5e8f\u5217\u4e2d\u6ca1\u6709\u5360\u5230\u591a\u6570\u7684\u5143\u7d20\uff0c\u90a3\u4e48\u7b2c\u4e00\u6b21\u7684\u7ed3\u679c\u5c31\u53ef\u80fd\u662f\u65e0\u6548\u7684\u968f\u673a\u5143\u7d20")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6362\u53e5\u8bdd\u8bf4\uff0c\u6bcf\u6b21\u5c06\u4e24\u4e2a\u4e0d\u540c\u7684\u5143\u7d20\u8fdb\u884c\u300c\u62b5\u6d88\u300d\uff0c\u5982\u679c\u6700\u540e\u6709\u5143\u7d20\u5269\u4f59\uff0c\u5219\u300c\u53ef\u80fd\u300d\u4e3a\u5143\u7d20\u4e2a\u6570\u5927\u4e8e\u603b\u6570\u4e00\u534a\u7684\u90a3\u4e2a\u3002")),(0,i.kt)("p",null,"\u5177\u4f53\u7684\uff0c\u6211\u4eec\u5b9a\u4e49\u4e00\u4e2a\u53d8\u91cf ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," \u6765\u4fdd\u5b58\u90a3\u4e2a\u53ef\u80fd\u4e3a\u4e3b\u8981\u5143\u7d20\u7684\u503c\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"cnt")," \u7528\u6765\u8bb0\u5f55\u8be5\u503c\u7684\u51fa\u73b0\u6b21\u6570\u3002\u7136\u540e\u5728\u904d\u5386\u6570\u7ec4 ",(0,i.kt)("inlineCode",{parentName:"p"},"nums")," \u8fc7\u7a0b\u4e2d\u6267\u884c\u5982\u4e0b\u903b\u8f91\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,i.kt)("inlineCode",{parentName:"li"},"cnt")," \u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),"\uff1a\u8bf4\u660e\u4e4b\u524d\u51fa\u73b0\u8fc7\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"x")," \u5df2\u7ecf\u88ab\u62b5\u6d88\u5b8c\u4e86\uff0c\u66f4\u65b0\u4e00\u4e0b ",(0,i.kt)("inlineCode",{parentName:"li"},"x")," \u4e3a\u5f53\u524d\u503c\uff0c\u51fa\u73b0\u6b21\u6570\u4e3a \uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"x = nums[i], cnt = 1"),"\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,i.kt)("inlineCode",{parentName:"li"},"cnt")," \u4e0d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),"\uff1a\u8bf4\u660e\u4e4b\u524d\u7edf\u8ba1\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"x")," \u8fd8\u6ca1\u88ab\u62b5\u6d88\u5b8c\uff0c\u8fd9\u662f\u6839\u636e ",(0,i.kt)("inlineCode",{parentName:"li"},"nums[i]")," \u4e0e ",(0,i.kt)("inlineCode",{parentName:"li"},"x")," \u662f\u5426\u76f8\u7b49\u8fdb\u884c\u8ba1\u7b97\u5373\u53ef\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"cnt += nums[i] == x ? 1 : -1"),"\u3002")),(0,i.kt)("p",null,"\u5f53\u5904\u7406\u5b8c ",(0,i.kt)("inlineCode",{parentName:"p"},"nums")," \u4e4b\u540e\uff0c\u6211\u4eec\u5f97\u5230\u4e86\u4e00\u4e2a\u300c\u53ef\u80fd\u300d\u7684\u4e3b\u8981\u5143\u7d20\u3002\u6ce8\u610f\u53ea\u662f\u53ef\u80fd\uff0c\u56e0\u4e3a\u6211\u4eec\u5728\u5904\u7406\u8fc7\u7a0b\u4e2d\u53ea\u4f7f\u7528\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"cnt")," \u6765\u8bb0\u5f55\uff0c\u6211\u4eec\u662f\u65e0\u6cd5\u786e\u5b9a\u6700\u540e\u5269\u4e0b\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," \u662f\u7ecf\u8fc7\u591a\u6b21\u62b5\u6d88\u540e\u5269\u4f59\u7684\u4e3b\u8981\u5143\u7d20\uff0c\u8fd8\u662f\u53ea\u662f\u4e0d\u5b58\u5728\u4e3b\u8981\u5143\u7d20\u7684\u6570\u7ec4\u4e2d\u7684\u65e0\u6548\u968f\u673a\u5143\u7d20\u3002"),(0,i.kt)("p",null,"\u56e0\u6b64\u6211\u4eec\u9700\u8981\u518d\u8fdb\u884c\u4e00\u6b21\u904d\u5386\uff0c\u68c0\u67e5\u8fd9\u4e2a\u300c\u53ef\u80fd\u300d\u7684\u4e3b\u8981\u5143\u7d20 ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," \u7684\u51fa\u73b0\u6b21\u6570\u662f\u5426\u8d85\u8fc7\u603b\u6570\u4e00\u534a\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c++"},"class Solution {\npublic:\n    int majorityElement(vector<int>& nums) {\n        int n = nums.size();\n        int x = -1, votes = 0;\n        for (int num : nums) {\n            if (votes == 0) {\n                x = num;\n                votes = 1;\n            } else {\n                votes += x == num ? 1 : -1;\n            }\n        }\n        int cnt = 0;\n        for (int num : nums) if (x == num) cnt++;\n        return cnt > n / 2 ? x : -1;\n    }\n};\n")),(0,i.kt)("h2",{id:"\u63a8\u5e7f\u5230-n--k-\u7684\u60c5\u51b5"},"\u63a8\u5e7f\u5230 n / k \u7684\u60c5\u51b5"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/majority-element-ii/solution/gong-shui-san-xie-noxiang-xin-ke-xue-xi-ws0rj/"},"https://leetcode-cn.com/problems/majority-element-ii/solution/gong-shui-san-xie-noxiang-xin-ke-xue-xi-ws0rj/")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/majority-element-ii/solution/qiu-zhong-shu-ii-by-leetcode-solution-y1rn/"},"https://leetcode-cn.com/problems/majority-element-ii/solution/qiu-zhong-shu-ii-by-leetcode-solution-y1rn/")),(0,i.kt)("p",null,"\u6709\u4e00\u4e2a\u5bf9\u6469\u5c14\u6295\u7968\u6cd5\u975e\u5e38\u5f62\u8c61\u7684\u6bd4\u55bb\uff1a\u591a\u65b9\u6df7\u6218\u3002"),(0,i.kt)("p",null,"\u9996\u5148\u8981\u77e5\u9053\uff0c\u5728\u4efb\u4f55\u6570\u7ec4\u4e2d\uff0c\u51fa\u73b0\u6b21\u6570\u5927\u4e8e\u8be5\u6570\u7ec4\u957f\u5ea61/3\u7684\u503c\u6700\u591a\u53ea\u6709\u4e24\u4e2a\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u628a\u8fd9\u9053\u9898\u6bd4\u4f5c\u4e00\u573a\u591a\u65b9\u6df7\u6218\uff0c\u6218\u6597\u7ed3\u679c\u4e00\u5b9a\u53ea\u6709\u6700\u591a\u4e24\u4e2a\u9635\u8425\u5e78\u5b58\uff0c\u5176\u4ed6\u9635\u8425\u88ab\u6b7c\u706d\u3002\u6570\u7ec4\u4e2d\u7684\u6570\u5b57\u5373\u4ee3\u8868\u67d0\u58eb\u5175\u6240\u5728\u7684\u9635\u8425\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u7ef4\u62a4\u4e24\u4e2a\u6f5c\u5728\u5e78\u5b58\u9635\u8425A\u548cB\u3002\u6211\u4eec\u904d\u5386\u6570\u7ec4\uff0c\u5982\u679c\u9047\u5230\u4e86\u5c5e\u4e8eA\u6216\u8005\u5c5e\u4e8eB\u7684\u58eb\u5175\uff0c\u5219\u628a\u58eb\u5175\u52a0\u5165A\u6216B\u961f\u4f0d\u4e2d\uff0c\u8be5\u961f\u4f0d\u4eba\u6570\u52a0\u4e00\u3002\u7ee7\u7eed\u904d\u5386\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u9047\u5230\u4e86\u4e00\u4e2a\u58eb\u5175\u65e2\u4e0d\u5c5e\u4e8eA\u9635\u8425\uff0c\u4e5f\u4e0d\u5c5e\u4e8eB\u9635\u8425\uff0c\u8fd9\u65f6\u6709\u4e24\u79cd\u60c5\u51b5\uff1a"),(0,i.kt)("p",null,"\u60c5\u51b5\u4e00\uff1aA\u9635\u8425\u548cB\u9635\u8425\u90fd\u8fd8\u6709\u6d3b\u7740\u7684\u58eb\u5175\uff0c\u90a3\u4e48\u8fdb\u884c\u4e00\u6b21\u53ae\u6740\uff0c\u53c2\u4e0e\u53ae\u6740\u7684\u4e09\u4e2a\u58eb\u5175\u5168\u90e8\u9635\u4ea1\uff1aA\u9635\u8425\u7684\u4e00\u4e2a\u58eb\u5175\u9635\u4ea1\uff0cB\u9635\u8425\u7684\u4e00\u4e2a\u58eb\u5175\u9635\u4ea1\uff0c\u8fd9\u4e2a\u4e0d\u77e5\u9053\u4ece\u54ea\u4e2a\u9635\u8425\u6765\u7684\u58eb\u5175\u4e5f\u9635\u4ea1\u3002\u7ee7\u7eed\u904d\u5386\u3002"),(0,i.kt)("p",null,"\u60c5\u51b5\u4e8c\uff1aA\u9635\u8425\u6216B\u9635\u8425\u5df2\u7ecf\u6ca1\u6709\u58eb\u5175\u4e86\u3002\u6ca1\u6709\u58eb\u5175\u7684\u9635\u8425\u6682\u65f6\u4ece\u5730\u7403\u4e0a\u6d88\u5931\u4e86\u3002\u90a3\u4e48\u628a\u5f53\u524d\u904d\u5386\u5230\u7684\u65b0\u58eb\u5175\u7b97\u4f5c\u65b0\u7684\u6f5c\u5728\u5e78\u5b58\u9635\u8425\uff0c\u8fd9\u4e2a\u65b0\u9635\u8425\u53ea\u6709\u4ed6\u4e00\u4e2a\u4eba\u3002\u7ee7\u7eed\u904d\u5386\u3002"),(0,i.kt)("p",null,"\u5927\u6218\u7ed3\u675f\uff0c\u6700\u540eA\u548cB\u9635\u8425\u5c31\u662f\u521d\u59cb\u4eba\u6570\u6700\u591a\u7684\u9635\u8425\u3002\u5224\u65ad\u4e00\u4e0bA\uff0cB\u7684\u4eba\u6570\u662f\u5426\u8d85\u8fc7\u6240\u6709\u4eba\u6570\u7684\u4e09\u5206\u4e4b\u4e00\u5c31\u884c\u4e86\u3002"))}m.isMDXComponent=!0}}]);