"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[92759],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,b=d["".concat(c,".").concat(u)]||d[u]||s[u]||l;return n?r.createElement(b,o(o({ref:t},m),{},{components:n})):r.createElement(b,o({ref:t},m))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81648:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={},o="\u6570\u4f4d DP",i={unversionedId:"Algorithm/\u52a8\u6001\u89c4\u5212/\u6570\u4f4dDP",id:"Algorithm/\u52a8\u6001\u89c4\u5212/\u6570\u4f4dDP",title:"\u6570\u4f4d DP",description:"\u300c\u662f\u771f\u7684\u770b\u4e0d\u61c2\u300d",source:"@site/docs/Algorithm/3-\u52a8\u6001\u89c4\u5212/08-\u6570\u4f4dDP.md",sourceDirName:"Algorithm/3-\u52a8\u6001\u89c4\u5212",slug:"/Algorithm/\u52a8\u6001\u89c4\u5212/\u6570\u4f4dDP",permalink:"/docs/Algorithm/\u52a8\u6001\u89c4\u5212/\u6570\u4f4dDP",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"algorithmSidebar",previous:{title:"\u72b6\u6001\u538b\u7f29 DP",permalink:"/docs/Algorithm/\u52a8\u6001\u89c4\u5212/\u72b6\u6001\u538b\u7f29DP"},next:{title:"\u80a1\u7968\u95ee\u9898",permalink:"/docs/Algorithm/\u52a8\u6001\u89c4\u5212/\u80a1\u7968\u95ee\u9898"}},c={},p=[],m={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6570\u4f4d-dp"},"\u6570\u4f4d DP"),(0,a.kt)("p",null,"\u300c\u662f\u771f\u7684\u770b\u4e0d\u61c2\u300d"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://oi-wiki.org/dp/number/"},"\u6570\u4f4d DP")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://blog.csdn.net/wust_zzwh/article/details/52100392"},"\u6570\u4f4ddp\u603b\u7ed3 \u4e4b \u4ece\u5165\u95e8\u5230\u6a21\u677f")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/young-children/p/11327950.html"},"\u6570\u4f4ddp\u4ecb\u7ecd")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s?__biz=MzU4NDE3MTEyMA==&mid=2247489051&idx=1&sn=d4f503b519be0cb039474e652eaedf31&chksm=fd9cbd04caeb341252eea68d6823a5057feeadc6296ea92090ac155c55101839a65bd401c3f7&scene=178&cur_album_id=1748759632187047943#rd"},"\u3010\u7efc\u5408\u7b14\u8bd5\u9898\u3011\u96be\u5ea6 4/5\uff0c\u6570\u4f4d DP \u8fd0\u7528\u9898")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s?__biz=MzU4NDE3MTEyMA==&mid=2247490779&idx=1&sn=9a07bef5a856ca34f5c18a4541a50e9c&chksm=fd9cb7c4caeb3ed2c62f77e6a432297bd1d7df23dd90b60cf486878e7a6080fbb634f0348f55&scene=178&cur_album_id=1748759632187047943#rd"},"\u3010\u52a8\u6001\u89c4\u5212\u306e\u6570\u4f4d DP\u3011\u4e00\u6587\u8be6\u89e3\u901a\u7528\u300c\u6570\u4f4d DP\u300d\u6c42\u89e3\u601d\u8def")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/count-numbers-with-unique-digits/solution/by-ac_oier-6tfl/"},"357\u9898\u9898\u89e3")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s?__biz=MzU4NDE3MTEyMA==&mid=2247491072&idx=1&sn=2b22749b5f96f6b34183cab8f97c3d5c&chksm=fd9cb51fcaeb3c0941deae2fc689788027ffc920a1571098fe630d54ba7f85a42e920d0666ba&scene=178&cur_album_id=1748759632187047943#rd"},"\u3010\u52a8\u6001\u89c4\u5212\u306e\u6570\u4f4d DP\u3011\u6570\u4f4d DP \u7684\u7ecf\u5178\u8fd0\u7528")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u9898\u76ee"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9898\u89e3"),(0,a.kt)("th",{parentName:"tr",align:null},"\u96be\u5ea6"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63a8\u8350\u6307\u6570"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://leetcode-cn.com/problems/count-numbers-with-unique-digits/"},"357. \u7edf\u8ba1\u5404\u4f4d\u6570\u5b57\u90fd\u4e0d\u540c\u7684\u6570\u5b57\u4e2a\u6570")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://leetcode-cn.com/problems/count-numbers-with-unique-digits/solution/by-ac_oier-6tfl/"},"LeetCode \u9898\u89e3\u94fe\u63a5")),(0,a.kt)("td",{parentName:"tr",align:null},"\u4e2d\u7b49"),(0,a.kt)("td",{parentName:"tr",align:null},"\ud83e\udd29\ud83e\udd29\ud83e\udd29\ud83e\udd29\ud83e\udd29")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://leetcode-cn.com/problems/non-negative-integers-without-consecutive-ones/"},"600. \u4e0d\u542b\u8fde\u7eed1\u7684\u975e\u8d1f\u6574\u6570")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://leetcode-cn.com/problems/non-negative-integers-without-consecutive-ones/solution/gong-shui-san-xie-jing-dian-shu-wei-dp-y-mh92/"},"LeetCode \u9898\u89e3\u94fe\u63a5")),(0,a.kt)("td",{parentName:"tr",align:null},"\u56f0\u96be"),(0,a.kt)("td",{parentName:"tr",align:null},"\ud83e\udd29\ud83e\udd29\ud83e\udd29\ud83e\udd29\ud83e\udd29")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://leetcode-cn.com/problems/numbers-at-most-n-given-digit-set/"},"902. \u6700\u5927\u4e3a N \u7684\u6570\u5b57\u7ec4\u5408")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://leetcode-cn.com/problems/numbers-at-most-n-given-digit-set/solution/by-ac_oier-8k27/"},"LeetCode \u9898\u89e3\u94fe\u63a5")),(0,a.kt)("td",{parentName:"tr",align:null},"\u56f0\u96be"),(0,a.kt)("td",{parentName:"tr",align:null},"\ud83e\udd29\ud83e\udd29\ud83e\udd29\ud83e\udd29\ud83e\udd29")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://leetcode-cn.com/problems/numbers-with-repeated-digits/"},"1012. \u81f3\u5c11\u6709 1 \u4f4d\u91cd\u590d\u7684\u6570\u5b57")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://leetcode-cn.com/problems/numbers-with-repeated-digits/solution/by-ac_oier-2szj/"},"LeetCode \u9898\u89e3\u94fe\u63a5")),(0,a.kt)("td",{parentName:"tr",align:null},"\u56f0\u96be"),(0,a.kt)("td",{parentName:"tr",align:null},"\ud83e\udd29\ud83e\udd29\ud83e\udd29\ud83e\udd29\ud83e\udd29")))))}d.isMDXComponent=!0}}]);