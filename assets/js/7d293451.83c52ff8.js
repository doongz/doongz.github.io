"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[98737],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},f="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=c(t),m=o,d=f["".concat(u,".").concat(m)]||f[m]||s[m]||l;return t?r.createElement(d,a(a({ref:n},p),{},{components:t})):r.createElement(d,a({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[f]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},84072:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const l={},a=void 0,i={unversionedId:"Algorithm/\u7b97\u6cd5\u57fa\u7840/\u4f8b\u9898-\u4e8c\u5206\u6cd5/\u5251\u6307Offer-53-<lower_bound>-\u5728\u6392\u5e8f\u6570\u7ec4\u4e2d\u67e5\u627e\u6570\u5b57I",id:"Algorithm/\u7b97\u6cd5\u57fa\u7840/\u4f8b\u9898-\u4e8c\u5206\u6cd5/\u5251\u6307Offer-53-<lower_bound>-\u5728\u6392\u5e8f\u6570\u7ec4\u4e2d\u67e5\u627e\u6570\u5b57I",title:"\u5251\u6307Offer-53-<lower_bound>-\u5728\u6392\u5e8f\u6570\u7ec4\u4e2d\u67e5\u627e\u6570\u5b57I",description:"\u5251\u6307 Offer 53 - I. \u5728\u6392\u5e8f\u6570\u7ec4\u4e2d\u67e5\u627e\u6570\u5b57 I",source:"@site/docs/Algorithm/2-\u7b97\u6cd5\u57fa\u7840/\u4f8b\u9898-\u4e8c\u5206\u6cd5/\u5251\u6307Offer-53-<lower_bound>-\u5728\u6392\u5e8f\u6570\u7ec4\u4e2d\u67e5\u627e\u6570\u5b57I.md",sourceDirName:"Algorithm/2-\u7b97\u6cd5\u57fa\u7840/\u4f8b\u9898-\u4e8c\u5206\u6cd5",slug:"/Algorithm/\u7b97\u6cd5\u57fa\u7840/\u4f8b\u9898-\u4e8c\u5206\u6cd5/\u5251\u6307Offer-53-<lower_bound>-\u5728\u6392\u5e8f\u6570\u7ec4\u4e2d\u67e5\u627e\u6570\u5b57I",permalink:"/docs/Algorithm/\u7b97\u6cd5\u57fa\u7840/\u4f8b\u9898-\u4e8c\u5206\u6cd5/\u5251\u6307Offer-53-<lower_bound>-\u5728\u6392\u5e8f\u6570\u7ec4\u4e2d\u67e5\u627e\u6570\u5b57I",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"algorithmSidebar",previous:{title:"<\u5c0f\u4e8e\u7b49\u4e8e\u4e2d\u7684\u6700\u5927\u503c>-\u4e8c\u53c9\u641c\u7d22\u6811\u6700\u8fd1\u8282\u70b9\u67e5\u8be2",permalink:"/docs/Algorithm/\u7b97\u6cd5\u57fa\u7840/\u4f8b\u9898-\u4e8c\u5206\u6cd5/<\u5c0f\u4e8e\u7b49\u4e8e\u4e2d\u7684\u6700\u5927\u503c>-\u4e8c\u53c9\u641c\u7d22\u6811\u6700\u8fd1\u8282\u70b9\u67e5\u8be2"},next:{title:"\u5251\u6307Offer-53-II-0\u5230n-1\u4e2d\u7f3a\u5931\u7684\u6570\u5b57",permalink:"/docs/Algorithm/\u7b97\u6cd5\u57fa\u7840/\u4f8b\u9898-\u4e8c\u5206\u6cd5/\u5251\u6307Offer-53-II-0\u5230n-1\u4e2d\u7f3a\u5931\u7684\u6570\u5b57"}},u={},c=[],p={toc:c};function f(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/"},"\u5251\u6307 Offer 53 - I. \u5728\u6392\u5e8f\u6570\u7ec4\u4e2d\u67e5\u627e\u6570\u5b57 I")),(0,o.kt)("p",null,"\u7edf\u8ba1\u4e00\u4e2a\u6570\u5b57\u5728\u6392\u5e8f\u6570\u7ec4\u4e2d\u51fa\u73b0\u7684\u6b21\u6570\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u793a\u4f8b 1:\n\n\u8f93\u5165: nums = [5,7,7,8,8,10], target = 8\n\u8f93\u51fa: 2\n\n\u793a\u4f8b\xa02:\n\n\u8f93\u5165: nums = [5,7,7,8,8,10], target = 6\n\u8f93\u51fa: 0\n")),(0,o.kt)("p",null,"\u63d0\u793a\uff1a"),(0,o.kt)("p",null,"0 <= nums.length <= 105\n-109 <= nums","[i]"," <= 109\nnums \u662f\u4e00\u4e2a\u975e\u9012\u51cf\u6570\u7ec4\n-109 <= target <= 109"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"\u6ce8\u610f lower_bound \u7684\u7406\u89e3"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int search(vector<int>& nums, int target) {\n        if (nums.empty()) {\n            return 0;\n        }\n        int n = nums.size();\n        int left = lower_bound(nums.begin(), nums.end(), target) - nums.begin();\n        // cout << left << endl;\n        // target \u627e\u4e0d\u5230\uff0c\u6ce8\u610fif\u5185\u7684\u987a\u5e8f\uff0c\u9632\u6b62\u8d8a\u754c\n        if (left == n || nums[left] != target) {\n            return 0;\n        }\n        int right = upper_bound(nums.begin(), nums.end(), target) - nums.begin();\n        return right - left;\n    }\n};\n")))}f.isMDXComponent=!0}}]);