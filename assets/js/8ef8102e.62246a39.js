"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[28737],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),k=s,b=m["".concat(o,".").concat(k)]||m[k]||c[k]||a;return n?r.createElement(b,l(l({ref:t},u),{},{components:n})):r.createElement(b,l({ref:t},u))}));function b(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,l=new Array(a);l[0]=k;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:s,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},25992:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),s=(n(67294),n(3905));const a={},l="Kubernetes \u7684\u95ee\u9898\u548c\u5c40\u9650\u6027",i={unversionedId:"Knowledge/\u5bb9\u5668\u6280\u672f/kubernetes\u95ee\u9898&\u5c40\u9650\u6027",id:"Knowledge/\u5bb9\u5668\u6280\u672f/kubernetes\u95ee\u9898&\u5c40\u9650\u6027",title:"Kubernetes \u7684\u95ee\u9898\u548c\u5c40\u9650\u6027",description:"\u6765\u6e90\uff1a\u8c08\u8c08 Kubernetes \u7684\u95ee\u9898\u548c\u5c40\u9650\u6027",source:"@site/docs/Knowledge/05-\u5bb9\u5668\u6280\u672f/4-kubernetes\u95ee\u9898&\u5c40\u9650\u6027.md",sourceDirName:"Knowledge/05-\u5bb9\u5668\u6280\u672f",slug:"/Knowledge/\u5bb9\u5668\u6280\u672f/kubernetes\u95ee\u9898&\u5c40\u9650\u6027",permalink:"/docs/Knowledge/\u5bb9\u5668\u6280\u672f/kubernetes\u95ee\u9898&\u5c40\u9650\u6027",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"knowledgeSidebar",previous:{title:"\u5982\u4f55\u4e3a Kubernetes \u5b9a\u5236\u7279\u6027",permalink:"/docs/Knowledge/\u5bb9\u5668\u6280\u672f/kubernetes\u5b9a\u5236\u7279\u6027"},next:{title:"Kubernetes \u96c6\u7fa4\u8054\u90a6\u548c\u8d44\u6e90\u5206\u53d1",permalink:"/docs/Knowledge/\u5bb9\u5668\u6280\u672f/kubernetes\u96c6\u7fa4\u8054\u90a6&\u8d44\u6e90\u5206\u53d1"}},o={},p=[{value:"\u4e00\u3001\u96c6\u7fa4\u7ba1\u7406",id:"\u4e00\u96c6\u7fa4\u7ba1\u7406",level:2},{value:"1\u3001\u6c34\u5e73\u6269\u5c55\u6027",id:"1\u6c34\u5e73\u6269\u5c55\u6027",level:3},{value:"2\u3001\u591a\u96c6\u7fa4\u7ba1\u7406",id:"2\u591a\u96c6\u7fa4\u7ba1\u7406",level:3},{value:"1\uff09kubefed",id:"1kubefed",level:4},{value:"2\uff09\u96c6\u7fa4\u63a5\u53e3",id:"2\u96c6\u7fa4\u63a5\u53e3",level:4},{value:"\u4e8c\u3001\u5e94\u7528\u573a\u666f",id:"\u4e8c\u5e94\u7528\u573a\u666f",level:2},{value:"1\u3001\u5e94\u7528\u5206\u53d1",id:"1\u5e94\u7528\u5206\u53d1",level:3},{value:"2\u3001\u6279\u5904\u7406\u8c03\u5ea6",id:"2\u6279\u5904\u7406\u8c03\u5ea6",level:3},{value:"3\u3001\u786c\u591a\u79df\u6237",id:"3\u786c\u591a\u79df\u6237",level:3},{value:"Reference",id:"reference",level:2}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"kubernetes-\u7684\u95ee\u9898\u548c\u5c40\u9650\u6027"},"Kubernetes \u7684\u95ee\u9898\u548c\u5c40\u9650\u6027"),(0,s.kt)("p",null,"\u6765\u6e90\uff1a",(0,s.kt)("a",{parentName:"p",href:"https://draveness.me/kuberentes-limitations/"},"\u8c08\u8c08 Kubernetes \u7684\u95ee\u9898\u548c\u5c40\u9650\u6027")),(0,s.kt)("p",null,"2014 \u5e74\u53d1\u5e03\u7684 Kubernetes \u5728\u4eca\u5929\u4fe8\u7136\u5df2\u6210\u4e3a\u5bb9\u5668\u7f16\u6392\u9886\u57df\u7684\u4e8b\u5b9e\u6807\u51c6\uff0c\u76f8\u4fe1\u8c08\u5230 Kubernetes \u7684\u5f00\u53d1\u8005\u90fd\u4f1a\u4e00\u518d\u590d\u8ff0\u4e0a\u8ff0\u73b0\u8c61\u3002\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u4eca\u5929\u7684\u5927\u591a\u6570\u4e2a\u4eba\u6216\u8005\u56e2\u961f\u90fd\u4f1a\u9009\u62e9 Kubernetes \u7ba1\u7406\u5bb9\u5668\uff0c\u800c\u4e5f\u6709 75% \u7684\u4eba\u4f1a\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528 Kubernetes\u3002"),(0,s.kt)("p",null,"\u5728\u8fd9\u79cd\u5168\u6c11\u5b66\u4e60\u548c\u4f7f\u7528 Kubernetes \u7684\u5927\u80cc\u666f\u4e0b\uff0c\u6211\u4eec\u4e5f\u5e94\u8be5\u975e\u5e38\u6e05\u6670\u5730\u77e5\u9053 Kubernetes \u6709\u54ea\u4e9b\u5c40\u9650\u6027\u3002\u867d\u7136 Kubernetes \u80fd\u591f\u89e3\u51b3\u5bb9\u5668\u7f16\u6392\u9886\u57df\u7684\u5927\u591a\u6570\u95ee\u9898\uff0c\u4f46\u662f\u4ecd\u7136\u6709\u4e00\u4e9b\u573a\u666f\u662f\u5b83\u5f88\u96be\u5904\u7406\u3001\u751a\u81f3\u65e0\u6cd5\u5904\u7406\u7684\uff0c\u53ea\u6709\u5bf9\u8fd9\u4e9b\u6f5c\u5728\u7684\u98ce\u9669\u6709\u6e05\u6670\u7684\u8ba4\u8bc6\uff0c\u624d\u80fd\u66f4\u597d\u5730\u9a7e\u9a6d\u8fd9\u9879\u6280\u672f\uff0c\u8fd9\u7bc7\u6587\u7ae0\u5c06\u4ece\u96c6\u7fa4\u7ba1\u7406\u548c\u5e94\u7528\u573a\u666f\u4e24\u4e2a\u90e8\u5206\u8c08\u8c08 Kubernetes \u793e\u533a\u76ee\u524d\u7684\u53d1\u5c55\u548c\u4e00\u4e9b\u5c40\u9650\u6027\u3002"),(0,s.kt)("h2",{id:"\u4e00\u96c6\u7fa4\u7ba1\u7406"},"\u4e00\u3001\u96c6\u7fa4\u7ba1\u7406"),(0,s.kt)("p",null,"\u96c6\u7fa4\u662f\u4e00\u7ec4\u80fd\u591f\u5728\u4e00\u8d77\u534f\u540c\u5de5\u4f5c\u7684\u8ba1\u7b97\u673a\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u96c6\u7fa4\u4e2d\u7684\u6240\u6709\u8ba1\u7b97\u673a\u770b\u6210\u4e00\u4e2a\u6574\u4f53\uff0c\u6240\u6709\u8d44\u6e90\u8c03\u5ea6\u7cfb\u7edf\u90fd\u662f\u4ee5\u96c6\u7fa4\u4e3a\u7ef4\u5ea6\u8fdb\u884c\u7ba1\u7406\u7684\uff0c\u96c6\u7fa4\u4e2d\u7684\u6240\u6709\u673a\u5668\u6784\u6210\u4e86\u8d44\u6e90\u6c60\uff0c\u8fd9\u4e2a\u5de8\u5927\u7684\u8d44\u6e90\u6c60\u4f1a\u4e3a\u5f85\u8fd0\u884c\u7684\u5bb9\u5668\u63d0\u4f9b\u8d44\u6e90\u6267\u884c\u8ba1\u7b97\u4efb\u52a1\uff0c\u8fd9\u91cc\u7b80\u5355\u8c08\u4e00\u8c08 Kubernetes \u96c6\u7fa4\u7ba1\u7406\u9762\u5bf9\u7684\u51e0\u4e2a\u590d\u6742\u95ee\u9898\u3002"),(0,s.kt)("h3",{id:"1\u6c34\u5e73\u6269\u5c55\u6027"},"1\u3001\u6c34\u5e73\u6269\u5c55\u6027"),(0,s.kt)("p",null,"\u96c6\u7fa4\u5927\u5c0f\u662f\u6211\u4eec\u5728\u8bc4\u4f30\u8d44\u6e90\u7ba1\u7406\u7cfb\u7edf\u65f6\u9700\u8981\u5173\u6ce8\u7684\u91cd\u8981\u6307\u6807\u4e4b\u4e00\uff0c\u7136\u800c Kubernetes \u80fd\u591f\u7ba1\u7406\u7684\u96c6\u7fa4\u89c4\u6a21\u8fdc\u8fdc\u5c0f\u4e8e\u4e1a\u754c\u7684\u5176\u4ed6\u8d44\u6e90\u7ba1\u7406\u7cfb\u7edf\u3002\u96c6\u7fa4\u5927\u5c0f\u4e3a\u4ec0\u4e48\u91cd\u8981\u5462\uff0c\u6211\u4eec\u5148\u6765\u770b\u53e6\u4e00\u4e2a\u540c\u6837\u91cd\u8981\u7684\u6307\u6807 \u2014 \u8d44\u6e90\u5229\u7528\u7387\uff0c\u5f88\u591a\u5de5\u7a0b\u5e08\u53ef\u80fd\u6ca1\u6709\u5728\u516c\u6709\u4e91\u5e73\u53f0\u4e0a\u7533\u8bf7\u8fc7\u8d44\u6e90\uff0c\u8fd9\u4e9b\u8d44\u6e90\u90fd\u76f8\u5f53\u6602\u8d35\uff0c\u5728 AWS \u4e0a\u7533\u8bf7\u4e00\u4e2a\u4e0e\u4e3b\u673a\u5dee\u4e0d\u591a\u914d\u7f6e\u7684\u865a\u62df\u673a\u5b9e\u4f8b\uff088 CPU\u300116 GB\uff09\u6bcf\u4e2a\u6708\u5927\u6982\u9700\u8981 150 \u7f8e\u91d1\uff0c\u7ea6\u4e3a 1000 \u4eba\u6c11\u5e01",(0,s.kt)("a",{parentName:"p",href:"https://draveness.me/kuberentes-limitations/#fn:2"},"2"),"\u3002"),(0,s.kt)("p",null,"\u5927\u591a\u6570\u7684\u96c6\u7fa4\u90fd\u4f1a\u4f7f\u7528 48 CPU \u6216\u8005 64 CPU \u7684\u7269\u7406\u673a\u6216\u8005\u865a\u62df\u673a\u4f5c\u4e3a\u96c6\u7fa4\u4e2d\u7684\u8282\u70b9\uff0c\u5982\u679c\u6211\u4eec\u7684\u96c6\u7fa4\u4e2d\u9700\u8981\u5305\u542b 5,000 \u4e2a\u8282\u70b9\uff0c\u90a3\u4e48\u8fd9\u4e9b\u8282\u70b9\u6bcf\u4e2a\u6708\u5927\u6982\u8981 8,000,000 \u7f8e\u5143\uff0c\u7ea6\u4e3a 50,000,000 \u4eba\u6c11\u5e01\uff0c\u5728\u8fd9\u6837\u7684\u96c6\u7fa4\u4e2d",(0,s.kt)("strong",{parentName:"p"},"\u63d0\u5347 1% \u7684\u8d44\u6e90\u5229\u7528\u7387\u5c31\u76f8\u5f53\u4e8e\u6bcf\u4e2a\u6708\u8282\u7701\u4e86 500,000 \u7684\u6210\u672c"),"\u3002"),(0,s.kt)("p",null,"\u591a\u6570\u5728\u7ebf\u4efb\u52a1\u7684\u8d44\u6e90\u5229\u7528\u7387\u90fd\u5f88\u4f4e\uff0c\u66f4\u5927\u7684\u96c6\u7fa4\u610f\u5473\u7740\u80fd\u591f\u8fd0\u884c\u66f4\u591a\u7684\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u800c\u591a\u79cd\u9ad8\u5cf0\u548c\u4f4e\u8c37\u671f\u4e0d\u540c\u7684\u8d1f\u8f7d\u90e8\u7f72\u5728\u4e00\u8d77\u53ef\u4ee5\u5b9e\u73b0\u8d85\u552e\uff0c\u8fd9\u6837\u80fd\u591f\u663e\u8457\u5730\u63d0\u9ad8\u96c6\u7fa4\u7684\u8d44\u6e90\u5229\u7528\u7387\uff0c\u5982\u679c\u5355\u4e2a\u96c6\u7fa4\u7684\u8282\u70b9\u6570\u8db3\u591f\u591a\uff0c\u6211\u4eec\u5728\u90e8\u7f72\u4e0d\u540c\u7c7b\u578b\u7684\u4efb\u52a1\u65f6\u4f1a\u6709\u66f4\u5408\u7406\u7684\u7ec4\u5408\uff0c\u53ef\u4ee5\u5b8c\u7f8e\u9519\u5f00\u4e0d\u540c\u670d\u52a1\u7684\u9ad8\u5cf0\u671f\u3002"),(0,s.kt)("p",null,"Kubernetes \u793e\u533a\u5bf9\u5916\u5ba3\u4f20\u7684\u662f\u5355\u4e2a\u96c6\u7fa4\u6700\u591a\u652f\u6301 5,000 \u8282\u70b9\uff0cPod \u603b\u6570\u4e0d\u8d85\u8fc7 150,000\uff0c\u5bb9\u5668\u603b\u6570\u4e0d\u8d85\u8fc7 300,000 \u4ee5\u53ca\u5355\u8282\u70b9 Pod \u6570\u91cf\u4e0d\u8d85\u8fc7 100 \u4e2a",(0,s.kt)("a",{parentName:"p",href:"https://draveness.me/kuberentes-limitations/#fn:3"},"3"),"\uff0c\u4e0e\u51e0\u4e07\u8282\u70b9\u7684 Apache Mesos \u96c6\u7fa4\u300150,000 \u8282\u70b9\u7684\u5fae\u8f6f YARN \u96c6\u7fa4",(0,s.kt)("a",{parentName:"p",href:"https://draveness.me/kuberentes-limitations/#fn:4"},"4"),"\u76f8\u6bd4\uff0cKubernetes \u7684\u96c6\u7fa4\u89c4\u6a21\u6574\u6574\u5dee\u4e86\u4e00\u4e2a\u6570\u91cf\u7ea7\u3002\u867d\u7136\u963f\u91cc\u4e91\u7684\u5de5\u7a0b\u5e08\u4e5f\u901a\u8fc7\u4f18\u5316 Kubernetes \u7684\u5404\u4e2a\u7ec4\u4ef6\u5b9e\u73b0\u4e86 5 \u4f4d\u6570\u7684\u96c6\u7fa4\u89c4\u6a21\uff0c\u4f46\u662f\u4e0e\u5176\u4ed6\u7684\u8d44\u6e90\u7ba1\u7406\u65b9\u5f0f\u76f8\u6bd4\u5374\u6709\u6bd4\u8f83\u5927\u7684\u5dee\u8ddd",(0,s.kt)("a",{parentName:"p",href:"https://draveness.me/kuberentes-limitations/#fn:5"},"5"),"\u3002"),(0,s.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f Kubernetes \u793e\u533a\u867d\u7136\u5bf9\u5916\u5ba3\u79f0\u5355\u96c6\u7fa4\u53ef\u4ee5\u652f\u6301 5,000 \u8282\u70b9\uff0c\u540c\u65f6\u793e\u533a\u4e5f\u6709\u5404\u79cd\u5404\u6837\u7684\u96c6\u6210\u6d4b\u8bd5\u4fdd\u8bc1\u6bcf\u4e2a\u6539\u52a8\u90fd\u4e0d\u4f1a\u5f71\u54cd\u5b83\u7684\u4f38\u7f29\u6027",(0,s.kt)("a",{parentName:"p",href:"https://draveness.me/kuberentes-limitations/#fn:6"},"6"),"\uff0c\u4f46\u662f Kubernetes \u771f\u7684\u975e\u5e38\u590d\u6742\uff0c\u6211\u4eec\u6ca1\u6709\u529e\u6cd5\u4fdd\u8bc1\u4f60\u4f7f\u7528\u7684\u6bcf\u4e2a\u529f\u80fd\u5728\u6269\u5bb9\u7684\u8fc7\u7a0b\u4e2d\u90fd\u4e0d\u51fa\u95ee\u9898\u3002\u800c\u5728\u751f\u4ea7\u73af\u5883\u4e2d\uff0c\u6211\u4eec\u751a\u81f3\u53ef\u80fd\u5728\u96c6\u7fa4\u6269\u5bb9\u5230 1000 ~ 1500 \u8282\u70b9\u65f6\u9047\u5230\u74f6\u9888\u3002"),(0,s.kt)("p",null,"\u6bcf\u4e2a\u7a0d\u5177\u89c4\u6a21\u7684\u5927\u516c\u53f8\u90fd\u60f3\u8981\u5b9e\u73b0\u66f4\u5927\u89c4\u6a21\u7684 Kubernetes \u96c6\u7fa4\uff0c\u4f46\u662f\u8fd9\u4e0d\u662f\u4e00\u4e2a\u6539\u51e0\u884c\u4ee3\u7801\u5c31\u80fd\u89e3\u51b3\u7684\u7b80\u5355\u95ee\u9898\uff0c\u5b83\u53ef\u80fd\u9700\u8981\u6211\u4eec\u9650\u5236 Kubernetes \u4e2d\u4e00\u4e9b\u529f\u80fd\u7684\u4f7f\u7528\uff0c\u5728\u6269\u5bb9\u7684\u8fc7\u7a0b\u4e2d\uff0cetcd\u3001API \u670d\u52a1\u5668\u3001\u8c03\u5ea6\u5668\u4ee5\u53ca\u63a7\u5236\u5668\u90fd\u6709\u53ef\u80fd\u51fa\u73b0\u95ee\u9898\u3002\u793e\u533a\u4e2d\u5df2\u7ecf\u6709\u4e00\u4e9b\u5f00\u53d1\u8005\u6ce8\u610f\u5230\u4e86\u5176\u4e2d\u7684\u4e00\u4e9b\u95ee\u9898\uff0c\u4f8b\u5982\u5728\u8282\u70b9\u4e0a\u589e\u52a0\u7f13\u5b58\u964d\u4f4e API \u670d\u52a1\u5668\u7684\u8d1f\u8f7d",(0,s.kt)("a",{parentName:"p",href:"https://draveness.me/kuberentes-limitations/#fn:7"},"7"),"\uff0c\u4f46\u662f\u8981\u63a8\u52a8\u7c7b\u4f3c\u7684\u6539\u53d8\u8fd8\u662f\u5f88\u56f0\u96be\u7684\uff0c\u6709\u5fd7\u4e4b\u58eb\u53ef\u4ee5\u5c1d\u8bd5\u5728\u793e\u533a\u63a8\u52a8\u7c7b\u4f3c\u7684\u9879\u76ee\u3002"),(0,s.kt)("h3",{id:"2\u591a\u96c6\u7fa4\u7ba1\u7406"},"2\u3001\u591a\u96c6\u7fa4\u7ba1\u7406"),(0,s.kt)("p",null,"\u5355\u4e2a\u96c6\u7fa4\u7684\u5bb9\u91cf\u518d\u5927\u4e5f\u65e0\u6cd5\u89e3\u51b3\u4f01\u4e1a\u9762\u5bf9\u7684\u95ee\u9898\uff0c\u54ea\u6015\u6709\u4e00\u5929 Kubernetes \u96c6\u7fa4\u53ef\u4ee5\u8fbe\u5230 50,000 \u8282\u70b9\u7684\u89c4\u6a21\uff0c\u6211\u4eec\u4ecd\u7136\u9700\u8981\u7ba1\u7406\u591a\u4e2a\u96c6\u7fa4\uff0c\u591a\u96c6\u7fa4\u7ba1\u7406\u4e5f\u662f Kubernetes \u793e\u533a\u76ee\u524d\u6b63\u5728\u63a2\u7d22\u7684\u65b9\u5411\uff0c\u793e\u533a\u4e2d\u7684\u591a\u96c6\u7fa4\u5174\u8da3\u5c0f\u7ec4\uff08SIG Multi-Cluster\uff09\u76ee\u524d\u5c31\u5728\u5b8c\u6210\u76f8\u5173\u7684\u5de5\u4f5c",(0,s.kt)("a",{parentName:"p",href:"https://draveness.me/kuberentes-limitations/#fn:8"},"8"),"\u3002\u5728\u4f5c\u8005\u770b\u6765\uff0cKubernetes \u7684\u591a\u96c6\u7fa4\u4f1a\u5e26\u6765\u8d44\u6e90\u4e0d\u5e73\u8861\u3001\u8de8\u96c6\u7fa4\u8bbf\u95ee\u56f0\u96be\u4ee5\u53ca\u63d0\u9ad8\u8fd0\u7ef4\u548c\u7ba1\u7406\u6210\u672c\u4e09\u5927\u95ee\u9898\uff0c\u6211\u4eec\u5728\u8fd9\u91cc\u8c08\u4e00\u8c08\u76ee\u524d\u5728\u5f00\u6e90\u793e\u533a\u548c\u4e1a\u754c\u51e0\u79cd\u53ef\u4f9b\u53c2\u8003\u548c\u9009\u62e9\u7684\u89e3\u51b3\u65b9\u6848\u3002"),(0,s.kt)("h4",{id:"1kubefed"},"1\uff09kubefed"),(0,s.kt)("p",null,"\u9996\u5148\u8981\u4ecb\u7ecd\u7684\u662f ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kubefed"},"kubefed"),"\uff0c\u8be5\u9879\u76ee\u662f Kubernetes \u793e\u533a\u7ed9\u51fa\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u5b83\u540c\u65f6\u63d0\u4f9b\u4e86\u8de8\u96c6\u7fa4\u7684\u8d44\u6e90\u548c\u7f51\u7edc\u7ba1\u7406\u7684\u529f\u80fd\uff0c\u793e\u533a\u7684\u591a\u96c6\u7fa4\u5174\u8da3\u5c0f\u7ec4\uff08SIG Multi-Cluster\uff09\u8d1f\u8d23\u4e86\u8be5\u9879\u76ee\u7684\u5f00\u53d1\u5de5\u4f5c\uff1a"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Kubernetes \u8054\u90a6")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"k8s-53",src:n(28601).Z,width:"960",height:"720"})),(0,s.kt)("p",null,"kubefed \u901a\u8fc7\u4e00\u4e2a\u4e2d\u5fc3\u5316\u7684\u8054\u90a6\u63a7\u5236\u9762\u677f\u7ba1\u7406\u591a\u96c6\u7fa4\u4e2d\u7684\u5143\u6570\u636e\uff0c\u4e0a\u5c42\u7684\u63a7\u5236\u9762\u677f\u4f1a\u4e3a\u7ba1\u7406\u5668\u7fa4\u4e2d\u7684\u8d44\u6e90\u521b\u5efa\u5bf9\u5e94\u7684\u8054\u90a6\u5bf9\u8c61\uff0c\u4f8b\u5982\uff1a",(0,s.kt)("inlineCode",{parentName:"p"},"FederatedDeployment"),"\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: FederatedDeployment\n...\nspec:\n  ...\n  overrides:\n  # Apply overrides to cluster1\n    - clusterName: cluster1\n      clusterOverrides:\n        # Set the replicas field to 5\n        - path: "/spec/replicas"\n          value: 5\n        # Set the image of the first container\n        - path: "/spec/template/spec/containers/0/image"\n          value: "nginx:1.17.0-alpine"\n        # Ensure the annotation "foo: bar" exists\n        - path: "/metadata/annotations"\n          op: "add"\n          value:\n            foo: bar\n        # Ensure an annotation with key "foo" does not exist\n        - path: "/metadata/annotations/foo"\n          op: "remove"\n        # Adds an argument `-q` at index 0 of the args list\n        # this will obviously shift the existing arguments, if any\n        - path: "/spec/template/spec/containers/0/args/0"\n          op: "add"\n          value: "-q"\n')),(0,s.kt)("p",null,"\u4e0a\u5c42\u7684\u63a7\u5236\u9762\u677f\u4f1a\u6839\u636e\u8054\u90a6\u5bf9\u8c61 ",(0,s.kt)("inlineCode",{parentName:"p"},"FederatedDeployment")," \u7684\u89c4\u683c\u6587\u4ef6\u751f\u6210\u5bf9\u5e94\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"Deployment")," \u5e76\u63a8\u9001\u5230\u4e0b\u5c42\u7684\u96c6\u7fa4\uff0c\u4e0b\u5c42\u96c6\u7fa4\u53ef\u4ee5\u6b63\u5e38\u6839\u636e ",(0,s.kt)("inlineCode",{parentName:"p"},"Deployment")," \u4e2d\u7684\u5b9a\u4e49\u521b\u5efa\u7279\u5b9a\u6570\u91cf\u7684\u526f\u672c\u3002"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u4ece\u8054\u90a6\u5bf9\u8c61\u5230\u666e\u901a\u5bf9\u8c61")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"k8s-54",src:n(64402).Z,width:"1200",height:"340"})),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"FederatedDeployment")," \u53ea\u662f\u4e00\u79cd\u6700\u7b80\u5355\u7684\u5206\u53d1\u7b56\u7565\uff0c\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u6211\u4eec\u5e0c\u671b\u901a\u8fc7\u8054\u90a6\u7684\u96c6\u7fa4\u5b9e\u73b0\u5bb9\u707e\u7b49\u590d\u6742\u529f\u80fd\uff0c\u8fd9\u65f6\u53ef\u4ee5\u5229\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"ReplicaSchedulingPreference")," \u5728\u4e0d\u540c\u96c6\u7fa4\u4e2d\u5b9e\u73b0\u66f4\u52a0\u667a\u80fd\u7684\u5206\u53d1\u7b56\u7565\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: scheduling.kubefed.io/v1alpha1\nkind: ReplicaSchedulingPreference\nmetadata:\n  name: test-deployment\n  namespace: test-ns\nspec:\n  targetKind: FederatedDeployment\n  totalReplicas: 9\n  clusters:\n    A:\n      minReplicas: 4\n      maxReplicas: 6\n      weight: 1\n    B:\n      minReplicas: 4\n      maxReplicas: 8\n      weight: 2\n")),(0,s.kt)("p",null,"\u4e0a\u8ff0\u8c03\u5ea6\u7684\u7b56\u7565\u53ef\u4ee5\u5b9e\u73b0\u5de5\u4f5c\u8d1f\u8f7d\u5728\u4e0d\u540c\u96c6\u7fa4\u4e4b\u95f4\u7684\u6743\u91cd\uff0c\u5728\u96c6\u7fa4\u8d44\u6e90\u4e0d\u8db3\u751a\u81f3\u51fa\u73b0\u95ee\u9898\u65f6\u5c06\u5b9e\u4f8b\u8fc1\u79fb\u5230\u5176\u4ed6\u96c6\u7fa4\uff0c\u8fd9\u6837\u65e2\u80fd\u591f\u63d0\u9ad8\u670d\u52a1\u90e8\u7f72\u7684\u7075\u6d3b\u6027\u548c\u53ef\u7528\u6027\uff0c\u57fa\u7840\u67b6\u6784\u5de5\u7a0b\u5e08\u4e5f\u53ef\u4ee5\u66f4\u597d\u5730\u5e73\u8861\u591a\u4e2a\u96c6\u7fa4\u7684\u8d1f\u8f7d\u3002"),(0,s.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u8ba4\u4e3a kubefed \u7684\u4e3b\u8981\u4f5c\u7528\u662f\u5c06\u591a\u4e2a\u677e\u6563\u7684\u96c6\u7fa4\u7ec4\u6210\u5f3a\u8026\u5408\u7684\u8054\u90a6\u96c6\u7fa4\uff0c\u5e76\u63d0\u4f9b\u66f4\u52a0\u9ad8\u7ea7\u7684\u7f51\u7edc\u548c\u90e8\u7f72\u529f\u80fd\uff0c\u8fd9\u6837\u6211\u4eec\u53ef\u4ee5\u66f4\u5bb9\u6613\u5730\u89e3\u51b3\u96c6\u7fa4\u4e4b\u95f4\u8d44\u6e90\u4e0d\u5e73\u8861\u548c\u8fde\u901a\u6027\u7684\u4e00\u4e9b\u95ee\u9898\uff0c\u7136\u800c\u8be5\u9879\u76ee\u7684\u5173\u6ce8\u70b9\u4e0d\u5305\u542b\u96c6\u7fa4\u751f\u547d\u5468\u671f\u7684\u7ba1\u7406\uff0c"),(0,s.kt)("h4",{id:"2\u96c6\u7fa4\u63a5\u53e3"},"2\uff09\u96c6\u7fa4\u63a5\u53e3"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://cluster-api.sigs.k8s.io/"},"Cluster API")," \u4e5f\u662f Kubernetes \u793e\u533a\u4e2d\u4e0e\u591a\u96c6\u7fa4\u7ba1\u7406\u76f8\u5173\u7684\u9879\u76ee\uff0c\u8be5\u9879\u76ee\u7531\u96c6\u7fa4\u751f\u547d\u5468\u671f\u5c0f\u7ec4\uff08SIG Cluster-Lifecycle\uff09\u8d1f\u8d23\u5f00\u53d1\uff0c\u5176\u4e3b\u8981\u76ee\u6807\u662f\u901a\u8fc7\u58f0\u660e\u5f0f\u7684 API \u7b80\u5316\u591a\u96c6\u7fa4\u7684\u51c6\u5907\u3001\u66f4\u65b0\u548c\u8fd0\u7ef4\u5de5\u4f5c\uff0c\u4f60\u5728\u8be5\u9879\u76ee\u7684 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/cluster-api/blob/master/docs/scope-and-objectives.md"},"\u8bbe\u8ba1\u63d0\u6848")," \u4e2d\u80fd\u591f\u627e\u5230\u5b83\u7684\u804c\u8d23\u8303\u56f4",(0,s.kt)("a",{parentName:"p",href:"https://draveness.me/kuberentes-limitations/#fn:9"},"9"),"\u3002"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Cluster API \u6982\u5ff5")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"k8s-55",src:n(21664).Z,width:"1492",height:"1170"})),(0,s.kt)("p",null,"\u5728\u8be5\u9879\u76ee\u4e2d\u6700\u91cd\u8981\u7684\u8d44\u6e90\u5c31\u662f ",(0,s.kt)("inlineCode",{parentName:"p"},"Machine"),"\uff0c\u5b83\u8868\u793a\u4e00\u4e2a Kubernetes \u96c6\u7fa4\u4e2d\u7684\u8282\u70b9\u3002\u5f53\u8be5\u8d44\u6e90\u88ab\u521b\u5efa\u65f6\uff0c\u7279\u5b9a\u63d0\u4f9b\u5546\u7684\u63a7\u5236\u5668\u4f1a\u6839\u636e\u673a\u5668\u7684\u5b9a\u4e49\u521d\u59cb\u5316\u5e76\u5c06\u65b0\u7684\u8282\u70b9\u6ce8\u518c\u5230\u96c6\u7fa4\u4e2d\uff0c\u5728\u8be5\u8d44\u6e90\u88ab\u66f4\u65b0\u6216\u8005\u5220\u9664\u65f6\uff0c\u4e5f\u4f1a\u6267\u884c\u64cd\u4f5c\u8fbe\u5230\u7528\u6237\u7684\u72b6\u6001\u3002"),(0,s.kt)("p",null,"\u8fd9\u79cd\u7b56\u7565\u4e0e\u963f\u91cc\u7684\u591a\u96c6\u7fa4\u7ba1\u7406\u7684\u65b9\u5f0f\u6709\u4e00\u4e9b\u76f8\u4f3c\uff0c\u5b83\u4eec\u90fd\u4f7f\u7528\u58f0\u660e\u5f0f\u7684 API \u5b9a\u4e49\u673a\u5668\u548c\u96c6\u7fa4\u7684\u72b6\u6001\uff0c\u7136\u540e\u4f7f\u7528 Kubernetes \u539f\u751f\u7684 Operator \u6a21\u578b\u5728\u66f4\u9ad8\u4e00\u5c42\u7684\u96c6\u7fa4\u4e2d\u7ba1\u7406\u4e0b\u5c42\u96c6\u7fa4\uff0c\u8fd9\u80fd\u591f\u6781\u5927\u964d\u4f4e\u96c6\u7fa4\u7684\u8fd0\u7ef4\u6210\u672c\u5e76\u63d0\u9ad8\u96c6\u7fa4\u7684\u8fd0\u884c\u6548\u7387",(0,s.kt)("a",{parentName:"p",href:"https://draveness.me/kuberentes-limitations/#fn:10"},"10"),"\uff0c\u4e0d\u8fc7\u7c7b\u4f3c\u7684\u9879\u76ee\u90fd\u6ca1\u6709\u8003\u8651\u8de8\u96c6\u7fa4\u7684\u8d44\u6e90\u7ba1\u7406\u548c\u7f51\u7edc\u7ba1\u7406\u3002"),(0,s.kt)("h2",{id:"\u4e8c\u5e94\u7528\u573a\u666f"},"\u4e8c\u3001\u5e94\u7528\u573a\u666f"),(0,s.kt)("p",null,"\u6211\u4eec\u5728\u8fd9\u4e00\u8282\u5c06\u8c08\u8c08 Kubernetes \u4e2d\u4e00\u4e9b\u6709\u8da3\u7684\u5e94\u7528\u573a\u666f\uff0c\u5176\u4e2d\u5305\u62ec\u5e94\u7528\u5206\u53d1\u65b9\u5f0f\u7684\u73b0\u72b6\u3001\u6279\u5904\u7406\u8c03\u5ea6\u4efb\u52a1\u4ee5\u53ca\u786c\u591a\u79df\u6237\u5728\u96c6\u7fa4\u4e2d\u7684\u652f\u6301\uff0c\u8fd9\u4e9b\u662f\u793e\u533a\u4e2d\u6bd4\u8f83\u5173\u6ce8\u7684\u95ee\u9898\uff0c\u4e5f\u662f Kubernetes \u76ee\u524d\u7684\u76f2\u70b9\u3002"),(0,s.kt)("h3",{id:"1\u5e94\u7528\u5206\u53d1"},"1\u3001\u5e94\u7528\u5206\u53d1"),(0,s.kt)("p",null,"Kubernetes \u4e3b\u9879\u76ee\u63d0\u4f9b\u4e86\u51e0\u79cd\u90e8\u7f72\u5e94\u7528\u7684\u6700\u57fa\u672c\u65b9\u5f0f\uff0c\u5206\u522b\u662f ",(0,s.kt)("inlineCode",{parentName:"p"},"Deployment"),"\u3001",(0,s.kt)("inlineCode",{parentName:"p"},"StatefulSet")," \u548c ",(0,s.kt)("inlineCode",{parentName:"p"},"DaemonSet"),"\uff0c\u8fd9\u4e9b\u8d44\u6e90\u5206\u522b\u9002\u7528\u4e8e\u65e0\u72b6\u6001\u670d\u52a1\u3001\u6709\u72b6\u6001\u670d\u52a1\u548c\u8282\u70b9\u4e0a\u7684\u5b88\u62a4\u8fdb\u7a0b\uff0c\u8fd9\u4e9b\u8d44\u6e90\u80fd\u591f\u63d0\u4f9b\u6700\u57fa\u672c\u7684\u7b56\u7565\uff0c\u4f46\u662f\u5b83\u4eec\u65e0\u6cd5\u5904\u7406\u66f4\u52a0\u590d\u6742\u7684\u5e94\u7528\u3002"),(0,s.kt)("p",null,"\u968f\u7740 CRD \u7684\u5f15\u5165\uff0c\u76ee\u524d\u793e\u533a\u7684\u5e94\u7528\u7ba1\u7406\u5c0f\u7ec4\uff08SIG Apps\uff09\u57fa\u672c\u4e0d\u4f1a\u5411 Kubernetes \u4e3b\u4ed3\u5e93\u5f15\u5165\u8f83\u5927\u7684\u6539\u52a8\uff0c\u5927\u591a\u6570\u7684\u6539\u52a8\u90fd\u662f\u5728\u73b0\u6709\u8d44\u6e90\u4e0a\u8fdb\u884c\u7684\u4fee\u8865\uff0c\u5f88\u591a\u5e38\u89c1\u7684\u573a\u666f\uff0c\u4f8b\u5982\u53ea\u8fd0\u884c\u4e00\u6b21\u7684 DaemonSet",(0,s.kt)("a",{parentName:"p",href:"https://draveness.me/kuberentes-limitations/#fn:11"},"11")," \u4ee5\u53ca\u91d1\u4e1d\u96c0\u548c\u84dd\u7eff\u90e8\u7f72\u7b49\u529f\u80fd\uff0c\u73b0\u5728\u7684\u8d44\u6e90\u4e5f\u5b58\u5728\u5f88\u591a\u95ee\u9898\uff0c\u4f8b\u5982 StatefulSet \u5728\u521d\u59cb\u5316\u5bb9\u5668\u4e2d\u5361\u4f4f\u65e0\u6cd5\u56de\u6eda\u548c\u66f4\u65b0",(0,s.kt)("a",{parentName:"p",href:"https://draveness.me/kuberentes-limitations/#fn:12"},"12"),"\u3002"),(0,s.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u7406\u89e3\u793e\u533a\u4e0d\u60f3\u5728 Kubernetes \u4e2d\u7ef4\u62a4\u66f4\u591a\u7684\u57fa\u672c\u8d44\u6e90\uff0c\u901a\u8fc7\u51e0\u4e2a\u57fa\u672c\u7684\u8d44\u6e90\u53ef\u4ee5\u8986\u76d6 90% \u7684\u573a\u666f\uff0c\u5269\u4e0b\u7684\u5404\u79cd\u590d\u6742\u573a\u666f\u53ef\u4ee5\u8ba9\u5176\u4ed6\u793e\u533a\u901a\u8fc7 CRD \u7684\u65b9\u5f0f\u5b9e\u73b0\u3002\u4e0d\u8fc7\u4f5c\u8005\u8ba4\u4e3a\u5982\u679c\u793e\u533a\u80fd\u591f\u5728\u4e0a\u6e38\u5b9e\u73b0\u66f4\u591a\u9ad8\u8d28\u91cf\u7684\u7ec4\u4ef6\uff0c\u8fd9\u5bf9\u4e8e\u6574\u4e2a\u751f\u6001\u90fd\u662f\u5f88\u6709\u4ef7\u503c\u5e76\u4e14\u5f88\u91cd\u8981\u7684\u5de5\u4f5c\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\u5047\u5982\u5404\u4f4d\u8bfb\u8005\u60f3\u8981\u5728 Kubernetes \u9879\u76ee\u4e2d\u6210\u4e3a\u8d21\u732e\u8005\uff0cSIG Apps \u53ef\u80fd\u4e0d\u662f\u4e00\u4e2a\u5f88\u597d\u7684\u9009\u62e9\u3002"),(0,s.kt)("h3",{id:"2\u6279\u5904\u7406\u8c03\u5ea6"},"2\u3001\u6279\u5904\u7406\u8c03\u5ea6"),(0,s.kt)("p",null,"\u673a\u5668\u5b66\u4e60\u3001\u6279\u5904\u7406\u4efb\u52a1\u548c\u6d41\u5f0f\u4efb\u52a1\u7b49\u5de5\u4f5c\u8d1f\u8f7d\u7684\u8fd0\u884c\u4ece Kubernetes \u8bde\u751f\u7b2c\u4e00\u5929\u8d77\u5230\u4eca\u5929\u90fd\u4e0d\u662f\u5b83\u7684\u5f3a\u9879\uff0c\u5927\u591a\u6570\u7684\u516c\u53f8\u90fd\u4f1a\u4f7f\u7528 Kubernetes \u8fd0\u884c\u5728\u7ebf\u670d\u52a1\u5904\u7406\u7528\u6237\u8bf7\u6c42\uff0c\u7528 Yarn \u7ba1\u7406\u7684\u96c6\u7fa4\u8fd0\u884c\u6279\u5904\u7406\u7684\u8d1f\u8f7d\u3002"),(0,s.kt)("p",null,"\u5728\u7ebf\u4efb\u52a1\u548c\u79bb\u7ebf\u4efb\u52a1\u5f80\u5f80\u662f\u4e24\u79cd\u622a\u7136\u4e0d\u540c\u7684\u4f5c\u4e1a\uff0c\u5927\u591a\u6570\u7684\u5728\u7ebf\u4efb\u52a1\u90fd\u662f\u65e0\u72b6\u6001\u7684\u670d\u52a1\uff0c\u5b83\u4eec\u53ef\u4ee5\u5728\u4e0d\u540c\u673a\u5668\u4e0a\u8fdb\u884c\u8fc1\u79fb\uff0c\u5f7c\u6b64\u5f88\u96be\u6709\u6781\u5f3a\u7684\u4f9d\u8d56\u5173\u7cfb\uff1b\u4f46\u662f\u5f88\u591a\u79bb\u7ebf\u4efb\u52a1\u7684\u62d3\u6251\u7ed3\u6784\u90fd\u5f88\u590d\u6742\uff0c\u6709\u4e9b\u4efb\u52a1\u9700\u8981\u591a\u4e2a\u4f5c\u4e1a\u4e00\u540c\u6267\u884c\uff0c\u800c\u6709\u4e9b\u4efb\u52a1\u9700\u8981\u6309\u7167\u4f9d\u8d56\u5173\u7cfb\u5148\u540e\u6267\u884c\uff0c\u8fd9\u79cd\u590d\u6742\u7684\u8c03\u5ea6\u573a\u666f\u5728 Kubernetes \u4e2d\u6bd4\u8f83\u96be\u4ee5\u5904\u7406\u3002"),(0,s.kt)("p",null,"\u5728 Kubernetes \u8c03\u5ea6\u5668\u5f15\u5165\u8c03\u5ea6\u6846\u67b6\u4e4b\u524d\uff0c\u6240\u6709\u7684 Pod \u5728\u8c03\u5ea6\u5668\u770b\u6765\u662f\u6ca1\u6709\u4efb\u4f55\u5173\u8054\u7684\uff0c\u4e0d\u8fc7\u6709\u4e86\u8c03\u5ea6\u6846\u67b6\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u8c03\u5ea6\u7cfb\u7edf\u4e2d\u5b9e\u73b0\u66f4\u52a0\u590d\u6742\u7684\u8c03\u5ea6\u7b56\u7565\uff0c\u4f8b\u5982\u4fdd\u8bc1\u4e00\u7ec4 Pod \u540c\u65f6\u8c03\u5ea6\u7684 PodGroup",(0,s.kt)("a",{parentName:"p",href:"https://draveness.me/kuberentes-limitations/#fn:13"},"13"),"\uff0c\u8fd9\u5bf9\u4e8e Spark \u548c TensorFlow \u4efb\u52a1\u975e\u5e38\u6709\u7528\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# PodGroup CRD spec\napiVersion: scheduling.sigs.k8s.io/v1alpha1\nkind: PodGroup\nmetadata:\n  name: nginx\nspec:\n  scheduleTimeoutSeconds: 10\n  minMember: 3\n---\n# Add a label `pod-group.scheduling.sigs.k8s.io` to mark the pod belongs to a group\nlabels:\n  pod-group.scheduling.sigs.k8s.io: nginx\n")),(0,s.kt)("p",null,"Volcano \u4e5f\u662f\u5728 Kubernetes \u4e0a\u6784\u5efa\u7684\u6279\u5904\u7406\u4efb\u52a1\u7ba1\u7406\u7cfb\u7edf",(0,s.kt)("a",{parentName:"p",href:"https://draveness.me/kuberentes-limitations/#fn:14"},"14"),"\uff0c\u5b83\u80fd\u591f\u5904\u7406\u673a\u5668\u5b66\u4e60\u3001\u6df1\u5ea6\u5b66\u4e60\u4ee5\u53ca\u5176\u4ed6\u5927\u6570\u636e\u5e94\u7528\uff0c\u53ef\u4ee5\u652f\u6301\u5305\u62ec TensorFlow\u3001Spark\u3001PyTorch \u548c MPI \u5728\u5185\u7684\u591a\u4e2a\u6846\u67b6\u3002"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Volcano")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"k8s-56",src:n(34164).Z,width:"1496",height:"301"})),(0,s.kt)("h3",{id:"3\u786c\u591a\u79df\u6237"},"3\u3001\u786c\u591a\u79df\u6237"),(0,s.kt)("p",null,"\u591a\u79df\u6237\u662f\u6307\u540c\u4e00\u4e2a\u8f6f\u4ef6\u5b9e\u4f8b\u53ef\u4ee5\u4e3a\u4e0d\u540c\u7684\u7528\u6237\u7ec4\u63d0\u4f9b\u670d\u52a1\uff0cKubernetes \u7684\u591a\u79df\u6237\u662f\u6307\u591a\u4e2a\u7528\u6237\u6216\u8005\u7528\u6237\u7ec4\u4f7f\u7528\u540c\u4e00\u4e2a Kubernetes \u96c6\u7fa4\uff0c\u4eca\u5929\u7684 Kubernetes \u8fd8\u5f88\u96be\u505a\u5230\u786c\u591a\u79df\u6237\u652f\u6301\uff0c\u4e5f\u5c31\u662f\u540c\u4e00\u4e2a\u96c6\u7fa4\u7684\u591a\u4e2a\u79df\u6237\u4e0d\u4f1a\u76f8\u4e92\u5f71\u54cd\uff0c\u4e5f\u611f\u77e5\u4e0d\u5230\u5f7c\u6b64\u7684\u5b58\u5728\u3002"),(0,s.kt)("p",null,"\u786c\u591a\u79df\u6237\u5728 Kubernetes \u4e2d\u662f\u4e00\u4e2a\u5f88\u91cd\u8981\u3001\u4e5f\u5f88\u56f0\u96be\u7684\u8bfe\u9898\uff0c\u5408\u79df\u516c\u5bd3\u5c31\u662f\u4e00\u4e2a\u5178\u578b\u7684\u591a\u79df\u6237\u573a\u666f\uff0c\u591a\u4e2a\u79df\u5ba2\u5171\u4eab\u623f\u5c4b\u5185\u7684\u57fa\u7840\u8bbe\u65bd\uff0c\u786c\u591a\u79df\u6237\u8981\u6c42\u591a\u4e2a\u8bbf\u5ba2\u4e4b\u95f4\u4e0d\u4f1a\u76f8\u4e92\u5f71\u54cd\uff0c\u4f60\u53ef\u4ee5\u60f3\u8c61\u8fd9\u6709\u591a\u4e48\u56f0\u96be\uff0cKubernetes \u793e\u533a\u751a\u81f3\u6709\u4e00\u4e2a\u5de5\u4f5c\u5c0f\u7ec4\u4e13\u95e8\u8ba8\u8bba\u548c\u7814\u7a76\u76f8\u5173\u7684\u95ee\u9898",(0,s.kt)("a",{parentName:"p",href:"https://draveness.me/kuberentes-limitations/#fn:15"},"15"),"\uff0c\u7136\u800c\u867d\u7136\u611f\u5174\u8da3\u7684\u5de5\u7a0b\u5e08\u5f88\u591a\uff0c\u4f46\u662f\u6210\u679c\u5374\u975e\u5e38\u6709\u9650\u3002"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u591a\u79df\u6237")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"k8s-57",src:n(97712).Z,width:"1920",height:"1080"})),(0,s.kt)("p",null,"\u5c3d\u7ba1 Kubernetes \u4f7f\u7528\u547d\u540d\u7a7a\u95f4\u6765\u5212\u5206\u865a\u62df\u673a\u7fa4\uff0c\u7136\u800c\u8fd9\u4e5f\u5f88\u96be\u5b9e\u73b0\u771f\u6b63\u7684\u591a\u79df\u6237\u3002\u591a\u79df\u6237\u7684\u652f\u6301\u5230\u5e95\u6709\u54ea\u4e9b\u4f5c\u7528\u5462\uff0c\u8fd9\u91cc\u7b80\u5355\u5217\u51e0\u4e2a\u591a\u79df\u6237\u5e26\u6765\u7684\u597d\u5904\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Kubernetes \u5e26\u6765\u7684\u989d\u5916\u90e8\u7f72\u6210\u672c\u5bf9\u4e8e\u5c0f\u96c6\u7fa4\u6765\u8bf4\u975e\u5e38\u9ad8\u6602\uff0c\u7a33\u5b9a\u7684 Kubernetes \u96c6\u7fa4\u4e00\u822c\u90fd\u9700\u8981\u81f3\u5c11\u4e09\u4e2a\u8fd0\u884c etcd \u7684\u4e3b\u8282\u70b9\uff0c\u5982\u679c\u5927\u591a\u6570\u7684\u96c6\u7fa4\u90fd\u662f\u5c0f\u96c6\u7fa4\uff0c\u8fd9\u4e9b\u989d\u5916\u7684\u673a\u5668\u4f1a\u5e26\u6765\u5f88\u9ad8\u7684\u989d\u5916\u5f00\u9500\uff1b"),(0,s.kt)("li",{parentName:"ul"},"Kubernetes \u4e2d\u8fd0\u884c\u7684\u5bb9\u5668\u53ef\u80fd\u9700\u8981\u5171\u4eab\u7269\u7406\u673a\u548c\u865a\u62df\u673a\uff0c\u4e00\u4e9b\u5f00\u53d1\u8005\u53ef\u80fd\u5728\u516c\u53f8\u5185\u90e8\u9047\u5230\u8fc7\u81ea\u5df1\u7684\u670d\u52a1\u88ab\u5176\u4ed6\u4e1a\u52a1\u5f71\u54cd\uff0c\u56e0\u4e3a\u4e3b\u673a\u4e0a\u5bb9\u5668\u53ef\u80fd\u9694\u79bb\u4e86 CPU \u548c\u5185\u5b58\u8d44\u6e90\uff0c\u4f46\u662f\u6ca1\u6709\u9694\u79bb I/O\u3001\u7f51\u7edc \u548c CPU \u7f13\u5b58\u7b49\u8d44\u6e90\uff0c\u8fd9\u4e9b\u8d44\u6e90\u7684\u9694\u79bb\u662f\u76f8\u5bf9\u56f0\u96be\u7684\uff1b")),(0,s.kt)("p",null,"\u5982\u679c Kubernetes \u80fd\u591f\u5b9e\u73b0\u786c\u591a\u79df\u6237\uff0c\u8fd9\u4e0d\u4ec5\u5bf9\u4e91\u670d\u52a1\u5546\u548c\u5c0f\u96c6\u7fa4\u7684\u4f7f\u7528\u8005\u6765\u8bf4\u90fd\u662f\u4e2a\u798f\u97f3\uff0c\u5b83\u8fd8\u80fd\u591f\u9694\u79bb\u4e0d\u540c\u5bb9\u5668\u4e4b\u95f4\u7684\u5f71\u54cd\u5e76\u9632\u6b62\u6f5c\u5728\u5b89\u5168\u95ee\u9898\u7684\u53d1\u751f\uff0c\u4e0d\u8fc7\u8fd9\u5728\u73b0\u9636\u6bb5\u8fd8\u662f\u6bd4\u8f83\u96be\u5b9e\u73b0\u7684\u3002"),(0,s.kt)("h2",{id:"reference"},"Reference"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Kubernetes and Container Security and Adoption Trends ",(0,s.kt)("a",{parentName:"li",href:"https://www.stackrox.com/kubernetes-adoption-security-and-market-share-for-containers/"},"https://www.stackrox.com/kubernetes-adoption-security-and-market-share-for-containers/")," ",(0,s.kt)("a",{parentName:"li",href:"https://draveness.me/kuberentes-limitations/#fnref:1"},"\u21a9\ufe0e")),(0,s.kt)("li",{parentName:"ol"},"AWS Pricing Calculator ",(0,s.kt)("a",{parentName:"li",href:"https://calculator.aws/#/createCalculator/EC2"},"https://calculator.aws/#/createCalculator/EC2")," ",(0,s.kt)("a",{parentName:"li",href:"https://draveness.me/kuberentes-limitations/#fnref:2"},"\u21a9\ufe0e")),(0,s.kt)("li",{parentName:"ol"},"Considerations for large clusters ",(0,s.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/setup/best-practices/cluster-large/"},"https://kubernetes.io/docs/setup/best-practices/cluster-large/")," ",(0,s.kt)("a",{parentName:"li",href:"https://draveness.me/kuberentes-limitations/#fnref:3"},"\u21a9\ufe0e")),(0,s.kt)("li",{parentName:"ol"},"How Microsoft drives exabyte analytics on the world\u2019s largest YARN cluster ",(0,s.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/blog/how-microsoft-drives-exabyte-analytics-on-the-world-s-largest-yarn-cluster/"},"https://azure.microsoft.com/en-us/blog/how-microsoft-drives-exabyte-analytics-on-the-world-s-largest-yarn-cluster/")," ",(0,s.kt)("a",{parentName:"li",href:"https://draveness.me/kuberentes-limitations/#fnref:4"},"\u21a9\ufe0e")),(0,s.kt)("li",{parentName:"ol"},"\u5907\u6218\u53cc 11\uff01\u8682\u8681\u91d1\u670d\u4e07\u7ea7\u89c4\u6a21 K8s \u96c6\u7fa4\u7ba1\u7406\u7cfb\u7edf\u5982\u4f55\u8bbe\u8ba1\uff1f ",(0,s.kt)("a",{parentName:"li",href:"https://www.sofastack.tech/blog/ant-financial-managing-large-scale-kubernetes-clusters/"},"https://www.sofastack.tech/blog/ant-financial-managing-large-scale-kubernetes-clusters/")," ",(0,s.kt)("a",{parentName:"li",href:"https://draveness.me/kuberentes-limitations/#fnref:5"},"\u21a9\ufe0e")),(0,s.kt)("li",{parentName:"ol"},"sig-scalability-kubemark dashboard ",(0,s.kt)("a",{parentName:"li",href:"https://testgrid.k8s.io/sig-scalability-kubemark#kubemark-5000"},"https://testgrid.k8s.io/sig-scalability-kubemark#kubemark-5000")," ",(0,s.kt)("a",{parentName:"li",href:"https://draveness.me/kuberentes-limitations/#fnref:6"},"\u21a9\ufe0e")),(0,s.kt)("li",{parentName:"ol"},"Node-local API cache #84248 ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/kubernetes/issues/84248"},"https://github.com/kubernetes/kubernetes/issues/84248")," ",(0,s.kt)("a",{parentName:"li",href:"https://draveness.me/kuberentes-limitations/#fnref:7"},"\u21a9\ufe0e")),(0,s.kt)("li",{parentName:"ol"},"Multicluster Special Interest Group ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/community/tree/master/sig-multicluster"},"https://github.com/kubernetes/community/tree/master/sig-multicluster")," ",(0,s.kt)("a",{parentName:"li",href:"https://draveness.me/kuberentes-limitations/#fnref:8"},"\u21a9\ufe0e")),(0,s.kt)("li",{parentName:"ol"},"Cluster API Scope and Objectives ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/cluster-api/blob/master/docs/scope-and-objectives.md"},"https://github.com/kubernetes-sigs/cluster-api/blob/master/docs/scope-and-objectives.md")," ",(0,s.kt)("a",{parentName:"li",href:"https://draveness.me/kuberentes-limitations/#fnref:9"},"\u21a9\ufe0e")),(0,s.kt)("li",{parentName:"ol"},"Demystifying Kubernetes as a service \u2013 How Alibaba cloud manages 10,000s of Kubernetes clusters ",(0,s.kt)("a",{parentName:"li",href:"https://www.cncf.io/blog/2019/12/12/demystifying-kubernetes-as-a-service-how-does-alibaba-cloud-manage-10000s-of-kubernetes-clusters/"},"https://www.cncf.io/blog/2019/12/12/demystifying-kubernetes-as-a-service-how-does-alibaba-cloud-manage-10000s-of-kubernetes-clusters/")," ",(0,s.kt)("a",{parentName:"li",href:"https://draveness.me/kuberentes-limitations/#fnref:10"},"\u21a9\ufe0e")),(0,s.kt)("li",{parentName:"ol"},"Run job on each node once to help with setup #64623 ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/kubernetes/issues/64623"},"https://github.com/kubernetes/kubernetes/issues/64623")," ",(0,s.kt)("a",{parentName:"li",href:"https://draveness.me/kuberentes-limitations/#fnref:11"},"\u21a9\ufe0e")),(0,s.kt)("li",{parentName:"ol"},"StatefulSet does not upgrade to a newer version of manifests #78007 ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/kubernetes/issues/78007"},"https://github.com/kubernetes/kubernetes/issues/78007")," ",(0,s.kt)("a",{parentName:"li",href:"https://draveness.me/kuberentes-limitations/#fnref:12"},"\u21a9\ufe0e")),(0,s.kt)("li",{parentName:"ol"},"Coscheduling based on PodGroup CRD ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/scheduler-plugins/tree/master/kep/42-podgroup-coscheduling"},"https://github.com/kubernetes-sigs/scheduler-plugins/tree/master/kep/42-podgroup-coscheduling")," ",(0,s.kt)("a",{parentName:"li",href:"https://draveness.me/kuberentes-limitations/#fnref:13"},"\u21a9\ufe0e")),(0,s.kt)("li",{parentName:"ol"},"Volcano \xb7 A Kubernetes Native Batch System ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/volcano-sh/volcano"},"https://github.com/volcano-sh/volcano")," ",(0,s.kt)("a",{parentName:"li",href:"https://draveness.me/kuberentes-limitations/#fnref:14"},"\u21a9\ufe0e")),(0,s.kt)("li",{parentName:"ol"},"Kubernetes Working Group for Multi-Tenancy ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/multi-tenancy"},"https://github.com/kubernetes-sigs/multi-tenancy")," ",(0,s.kt)("a",{parentName:"li",href:"https://draveness.me/kuberentes-limitations/#fnref:15"},"\u21a9\ufe0e"))))}m.isMDXComponent=!0},28601:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/k8s-53-4f208b24c5f97a8e586eb3fefd0c02bd.png"},64402:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/k8s-54-80f501cceb0c9a2eafe3c78b5c2360fe.png"},21664:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/k8s-55-3373c4ec6ce7b4d25597f9e20f0ac26d.png"},34164:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/k8s-56-4bb0c13ec2c315f2e640c980e061f02f.png"},97712:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/k8s-57-fee2bca6d2ff1062306ccf463f0eb9b4.jpg"}}]);