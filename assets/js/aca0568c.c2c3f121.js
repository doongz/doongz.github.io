"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[50481],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),y=o,m=u["".concat(s,".").concat(y)]||u[y]||d[y]||a;return t?r.createElement(m,l(l({ref:n},c),{},{components:t})):r.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=y;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},3219:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const a={},l="Python \u5217\u8868 list",i={unversionedId:"Skill/Python/\u5217\u8868-list",id:"Skill/Python/\u5217\u8868-list",title:"Python \u5217\u8868 list",description:"\u64cd\u4f5c",source:"@site/docs/Skill/Python/04-\u5217\u8868-list.md",sourceDirName:"Skill/Python",slug:"/Skill/Python/\u5217\u8868-list",permalink:"/docs/Skill/Python/\u5217\u8868-list",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"docsSidebar",previous:{title:"Python \u5143\u7ec4 tuple",permalink:"/docs/Skill/Python/\u5143\u7ec4-tuple"},next:{title:"Python \u96c6\u5408 set",permalink:"/docs/Skill/Python/\u96c6\u5408-set"}},s={},p=[{value:"\u64cd\u4f5c",id:"\u64cd\u4f5c",level:2},{value:"\u7edf\u8ba1",id:"\u7edf\u8ba1",level:2},{value:"\u5217\u8868\u7684\u6392\u5e8f",id:"\u5217\u8868\u7684\u6392\u5e8f",level:2},{value:"\u5217\u8868\u7684\u590d\u5236",id:"\u5217\u8868\u7684\u590d\u5236",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"python-\u5217\u8868-list"},"Python \u5217\u8868 list"),(0,o.kt)("h2",{id:"\u64cd\u4f5c"},"\u64cd\u4f5c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'"""\n\u521b\u5efa\n"""\na = [1, 2, 3]\na = list("123") # [\'1\', \'2\', \'3\']\na = [i for i in range(10) if i < 3] # [0, 1, 2] \u63a8\u5230\u5f0f\n\n"""\n\u6dfb\u52a0\n"""\na.append(99)        # \u5728\u5217\u8868\u672b\u5c3e\u6dfb\u52a0\u65b0\u7684\u5bf9\u8c61 [0, 1, 2, 99]\na.extend([33, 44])  # \u5728\u5217\u8868\u672b\u5c3e\u4e00\u6b21\u6027\u8ffd\u52a0\u53e6\u4e00\u4e2a\u5e8f\u5217\u4e2d\u7684\u591a\u4e2a\u503c [0, 1, 2, 99, 33, 44]\na.insert(2, \'t\')    # \u5728\u6307\u5b9aidx\u4f4d\u7f6e\u63d2\u5165 [0, 1, \'t\', 2, 99, 33, 44]\n\n"""\n\u53cd\u8f6c\n"""\na.reverse()  \na[::-1]\n\n"""\n\u5220\u9664\n"""\na.pop(-1)       # \u79fb\u9664\u5217\u8868\u4e2d\u7684\u4e00\u4e2a\u5143\u7d20\uff08\u9ed8\u8ba4\u6700\u540e\u4e00\u4e2a\u5143\u7d20\uff09\uff0c\u5e76\u4e14\u8fd4\u56de\u8be5\u5143\u7d20\u7684\u503c 4\na.remove(\'t\')   # \u79fb\u9664\u5217\u8868\u4e2d\u67d0\u4e2a\u503c\u7684\u7b2c\u4e00\u4e2a\u5339\u914d\u9879 [0, 1, 2, 99, 33]\na.clear()       # \u7528\u4e8e\u6e05\u7a7a\u5217\u8868\uff0c\u7c7b\u4f3c\u4e8e del a[:]\n\n')),(0,o.kt)("h2",{id:"\u7edf\u8ba1"},"\u7edf\u8ba1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'a = [1, 2, 3, 3]\n\n"""\n\u5217\u8868\u5143\u7d20\u4e2a\u6570\n"""\nlen(a)      # 4\n\n"""\n\u8fd4\u56de\u5217\u8868\u5143\u7d20\u6700\u5927/\u5c0f\u503c\n"""\nmax(a)  # 1\nmin(a)  # 63\n\n"""\n\u67e5\u627e\n"""\na.count(3)  # 2 \u7edf\u8ba1\u67d0\u4e2a\u5143\u7d20\u5728\u5217\u8868\u4e2d\u51fa\u73b0\u7684\u6b21\u6570\na.index(2)  # 1 \u4ece\u5217\u8868\u4e2d\u627e\u51fa\u67d0\u4e2a\u503c\u7b2c\u4e00\u4e2a\u5339\u914d\u9879\u7684\u7d22\u5f15\u4f4d\u7f6e\n')),(0,o.kt)("h2",{id:"\u5217\u8868\u7684\u6392\u5e8f"},"\u5217\u8868\u7684\u6392\u5e8f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"a = [3, 1, 2]\n\nb = sorted(a)   # \u8fd4\u56de\u6392\u597d\u5e8f\u7684\u5217\u8868\uff0c\u539f\u5217\u8868\u4e0d\u53d8 \na.sort()        # \u5728\u539f\u5730\u5740\u4e0a\u6392\u5e8f [1, 2, 3]\n\n\"\"\"\n\u6307\u5b9a\u5143\u7d20\u6392\u5e8f\uff0ca.sort(key)\u548csorted(a,key) key\u7684\u4f7f\u7528\u65b9\u5f0f\u4e00\u6837\n\"\"\"\nm = [[\"dodo\",2,5],[\"koko\",3,8],[\"gogo\",4,10],[\"jojo\",8,5],[\"bobo\",4,11]]\nres = sorted(m, key=lambda x: x[1])\n# [['dodo', 2, 5], ['koko', 3, 8], ['gogo', 4, 10], ['bobo', 4, 11], ['jojo', 8, 5]]\n\n# \u5148\u6839\u636e\u7b2c\u4e8c\u4e2a\u503c\u5347\u5e8f\u6392\u5e8f\uff0c\u82e5\u7b2c\u4e8c\u4e2a\u503c\u76f8\u7b49\u5219\u6839\u636e\u7b2c\u4e09\u4e2a\u503c\u964d\u5e8f\u6392\u5217\nres = sorted(m, key=lambda x: (x[1], -x[2]))\n# [['dodo', 2, 5], ['koko', 3, 8], ['bobo', 4, 11], ['gogo', 4, 10], ['jojo', 8, 5]]\n\n# \u5148\u6839\u636e\u7b2c\u4e09\u4e2a\u503c\u5347\u5e8f\u6392\u5e8f\uff0c\u82e5\u7b2c\u4e09\u4e2a\u503c\u76f8\u7b49\u5219\u6839\u636e\u7b2c\u4e8c\u4e2a\u503c\u964d\u5e8f\u6392\u5217\nres = sorted(m, key=lambda x: (x[2], -x[1]))\n# [['jojo', 8, 5], ['dodo', 2, 5], ['koko', 3, 8], ['gogo', 4, 10], ['bobo', 4, 11]]\n")),(0,o.kt)("p",null,"\u4e5f\u652f\u6301\u5bf9\u5bf9\u8c61\u7684\u6392\u5e8f\uff0c\u5177\u4f53\u770b \u9ad8\u7ea7\u73a9\u6cd5-\u91cd\u8f7d\u8fd0\u7b97\u7b26"),(0,o.kt)("h2",{id:"\u5217\u8868\u7684\u590d\u5236"},"\u5217\u8868\u7684\u590d\u5236"),(0,o.kt)("p",null,"list.copy() \u7528\u4e8e\u590d\u5236\u5217\u8868\uff0c\u7c7b\u4f3c\u4e8e a","[:]"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"s1 = [1,2,3,4]\ns2 = s1\ns3 = s1[:]\ns4 = s1.copy()\n\ns1.pop()    \n\n# s1 [1, 2, 3]\n# s2 [1, 2, 3]\n# s3 [1, 2, 3, 4]\n# s4 [1, 2, 3, 4]\n")))}u.isMDXComponent=!0}}]);