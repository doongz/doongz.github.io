"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[28585],{3905:(t,e,n)=>{n.d(e,{Zo:()=>k,kt:()=>d});var l=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,l,i=function(t,e){if(null==t)return{};var n,l,i={},p=Object.keys(t);for(l=0;l<p.length;l++)n=p[l],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(l=0;l<p.length;l++)n=p[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var u=l.createContext({}),o=function(t){var e=l.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},k=function(t){var e=o(t.components);return l.createElement(u.Provider,{value:e},t.children)},c="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},m=l.forwardRef((function(t,e){var n=t.components,i=t.mdxType,p=t.originalType,u=t.parentName,k=a(t,["components","mdxType","originalType","parentName"]),c=o(n),m=i,d=c["".concat(u,".").concat(m)]||c[m]||s[m]||p;return n?l.createElement(d,r(r({ref:e},k),{},{components:n})):l.createElement(d,r({ref:e},k))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var p=n.length,r=new Array(p);r[0]=m;var a={};for(var u in e)hasOwnProperty.call(e,u)&&(a[u]=e[u]);a.originalType=t,a[c]="string"==typeof t?t:i,r[1]=a;for(var o=2;o<p;o++)r[o]=n[o];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95806:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>r,default:()=>c,frontMatter:()=>p,metadata:()=>a,toc:()=>o});var l=n(87462),i=(n(67294),n(3905));const p={},r="POSIX",a={unversionedId:"Skill/Linux/POSIX",id:"Skill/Linux/POSIX",title:"POSIX",description:"\u6765\u6e90\uff1aposix\u662f\u4ec0\u4e48\u90fd\u4e0d\u77e5\u9053\uff0c\u8fd8\u597d\u610f\u601d\u8bf4\u4f60\u61c2Linux\uff1f",source:"@site/docs/Skill/Linux/POSIX.md",sourceDirName:"Skill/Linux",slug:"/Skill/Linux/POSIX",permalink:"/docs/Skill/Linux/POSIX",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"\u7ec3\u4e60\u6a21\u7248",permalink:"/docs/Skill/LaTeX/\u7ec3\u4e60\u6a21\u7248"},next:{title:"overlayfs",permalink:"/docs/Skill/Linux/filesystem/Overlay-Filesystem"}},u={},o=[{value:"\u4e00\u3001\u4ec0\u4e48\u662fposix\uff1f",id:"\u4e00\u4ec0\u4e48\u662fposix",level:2},{value:"1. \u6982\u5ff5",id:"1-\u6982\u5ff5",level:3},{value:"2. \u53d1\u5e03\u8005-IEEE",id:"2-\u53d1\u5e03\u8005-ieee",level:3},{value:"3. POSIX\u6807\u51c6\u4e0b\u8f7d",id:"3-posix\u6807\u51c6\u4e0b\u8f7d",level:3},{value:"\u4e8c\u3001POSIX\u5386\u53f2",id:"\u4e8cposix\u5386\u53f2",level:2},{value:"1. \u8d77\u6e90",id:"1-\u8d77\u6e90",level:3},{value:"2. \u8c01\u9075\u5faa\u8fd9\u4e2a\u6807\u51c6\u5462\uff1f",id:"2-\u8c01\u9075\u5faa\u8fd9\u4e2a\u6807\u51c6\u5462",level:3},{value:"3. \u652f\u6301POSIX-Linux\u6210\u529f\u7684\u6700\u91cd\u8981\u4e00\u4e2a\u56e0\u7d20",id:"3-\u652f\u6301posix-linux\u6210\u529f\u7684\u6700\u91cd\u8981\u4e00\u4e2a\u56e0\u7d20",level:3},{value:"\u4e09\u3001\u53ef\u79fb\u690d\u6027",id:"\u4e09\u53ef\u79fb\u690d\u6027",level:2},{value:"1. \u7cfb\u7edf\u8c03\u7528",id:"1-\u7cfb\u7edf\u8c03\u7528",level:3},{value:"2. \u5e93\u51fd\u6570",id:"2-\u5e93\u51fd\u6570",level:3},{value:"3. \u5e93\u51fd\u6570API\u548c\u7cfb\u7edf\u8c03\u7528\u7684\u533a\u522b",id:"3-\u5e93\u51fd\u6570api\u548c\u7cfb\u7edf\u8c03\u7528\u7684\u533a\u522b",level:3},{value:"4. \u7a0b\u5e8f\u7684\u53ef\u79fb\u690d\u6027\u53ca\u5176\u672c\u8d28",id:"4-\u7a0b\u5e8f\u7684\u53ef\u79fb\u690d\u6027\u53ca\u5176\u672c\u8d28",level:3},{value:"5. \u7cfb\u7edf\u5f00\u9500",id:"5-\u7cfb\u7edf\u5f00\u9500",level:3},{value:"\u56db\u3001\u4e3e\u4f8b\uff1aLinux\u7cfb\u7edf\u8c03\u7528",id:"\u56db\u4e3e\u4f8blinux\u7cfb\u7edf\u8c03\u7528",level:2}],k={toc:o};function c(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,l.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"posix"},"POSIX"),(0,i.kt)("p",null,"\u6765\u6e90\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/392588996"},"posix\u662f\u4ec0\u4e48\u90fd\u4e0d\u77e5\u9053\uff0c\u8fd8\u597d\u610f\u601d\u8bf4\u4f60\u61c2Linux\uff1f")),(0,i.kt)("p",null,"Linux\u5f00\u53d1\u8005\u8d8a\u6765\u8d8a\u591a\uff0c\u4f46\u662f\u4ecd\u7136\u6709\u5f88\u591a\u4eba\u6574\u4e0d\u660e\u767dPOSIX\u662f\u4ec0\u4e48\u3002\u672c\u6587\u5c31\u5e26\u7740\u5927\u5bb6\u6765\u4e86\u89e3\u4e00\u4e0b\u5230\u5e95\u4ec0\u4e48\u662fPOSIX\uff0c\u4e86\u89e3\u4ed6\u7684\u5386\u53f2\u548c\u91cd\u8981\u6027\u3002"),(0,i.kt)("h2",{id:"\u4e00\u4ec0\u4e48\u662fposix"},"\u4e00\u3001\u4ec0\u4e48\u662fposix\uff1f"),(0,i.kt)("h3",{id:"1-\u6982\u5ff5"},"1. \u6982\u5ff5"),(0,i.kt)("p",null,"POSIX\uff1a\u53ef\u79fb\u690d\u64cd\u4f5c\u7cfb\u7edf\u63a5\u53e3\uff08Portable Operating System Interface of UNIX\uff0c\u7f29\u5199\u4e3a POSIX \uff09\uff0c"),(0,i.kt)("h3",{id:"2-\u53d1\u5e03\u8005-ieee"},"2. \u53d1\u5e03\u8005-IEEE"),(0,i.kt)("p",null,"\u53d1\u5e03\u8005\u4e3a\u7535\u6c14\u4e0e\u7535\u5b50\u5de5\u7a0b\u5e08\u534f\u4f1a\uff08Institute of Electrical and Electronics Engineers\uff09\uff0c\u7b80\u79f0IEEE\u3002\u8fd9\u4e2a\u534f\u4f1a\u8001\u725b\u4e86\u3010\u8be5\u7ec4\u7ec7\u5728\u592a\u7a7a\u3001\u8ba1\u7b97\u673a\u3001\u7535\u4fe1\u3001\u751f\u7269\u533b\u5b66\u3001\u7535\u529b\u53ca\u6d88\u8d39\u6027\u7535\u5b50\u4ea7\u54c1\u7b49\u9886\u57df\u4e2d\u90fd\u662f\u4e3b\u8981\u7684\u6743\u5a01\u3011\uff01"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://pic3.zhimg.com/80/v2-6f4988ef499204750080210070b785a6_720w.jpg",alt:"img"})),(0,i.kt)("p",null,"POSIX\u662fIEEE\u4e3a\u8981\u5728\u5404\u79cdUNIX\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u8fd0\u884c\u7684\u8f6f\u4ef6\u800c\u5b9a\u4e49\u7684\u4e00\u7cfb\u5217API\u6807\u51c6\u7684\u603b\u79f0\uff0c\u5176\u6b63\u5f0f\u79f0\u547c\u4e3aIEEE 1003\uff0c\u800c\u56fd\u9645\u6807\u51c6\u540d\u79f0\u4e3aISO/IEC 9945\u3002"),(0,i.kt)("p",null,"POSIX.1 \u5df2\u7ecf\u88ab\u56fd\u9645\u6807\u51c6\u5316\u7ec4\u7ec7\uff08International Standards Organization\uff0cISO\uff09\u6240\u63a5\u53d7\uff0c\u88ab\u547d\u540d\u4e3a ISO/IEC 9945-1:1990 \u6807\u51c6\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"IEEE\uff0c\u603b\u90e8\u4f4d\u4e8e\u7f8e\u56fd\u7ebd\u7ea6\uff0c\u662f\u4e00\u4e2a\u56fd\u9645\u6027\u7684\u7535\u5b50\u6280\u672f\u4e0e\u4fe1\u606f\u79d1\u5b66\u5de5\u7a0b\u5e08\u7684\u534f\u4f1a\uff0c\u4e5f\u662f\u76ee\u524d\u5168\u7403\u6700\u5927\u7684\u975e\u8425\u5229\u6027\u4e13\u4e1a\u6280\u672f\u5b66\u4f1a\u3002IEEE\u81f4\u529b\u4e8e\u7535\u6c14\u3001\u7535\u5b50\u3001\u8ba1\u7b97\u673a\u5de5\u7a0b\u548c\u4e0e\u79d1\u5b66\u6709\u5173\u7684\u9886\u57df\u7684\u5f00\u53d1\u548c\u7814\u7a76\uff0c\u5728\u592a\u7a7a\u3001\u8ba1\u7b97\u673a\u3001\u7535\u4fe1\u3001\u751f\u7269\u533b\u5b66\u3001\u7535\u529b\u53ca\u6d88\u8d39\u6027\u7535\u5b50\u4ea7\u54c1\u7b49\u9886\u57df\u5df2\u5236\u5b9a\u4e861300\u591a\u4e2a\u884c\u4e1a\u6807\u51c6\uff0c\u73b0\u5df2\u53d1\u5c55\u6210\u4e3a\u5177\u6709\u8f83\u5927\u5f71\u54cd\u529b\u7684\u56fd\u9645\u5b66\u672f\u7ec4\u7ec7")),(0,i.kt)("h3",{id:"3-posix\u6807\u51c6\u4e0b\u8f7d"},"3. POSIX\u6807\u51c6\u4e0b\u8f7d"),(0,i.kt)("p",null,"\u5f88\u591a\u4eba\u542c\u8bf4\u4e86POSIX\u6807\u51c6\uff0c\u4f46\u6807\u51c6\u5177\u4f53\u957f\u4ec0\u4e48\u6837\uff0c\u5728\u54ea\u91cc\u4e0b\u8f7d\u5230\uff0c\u5219 \u4e0d\u6e05\u695a\u3002\u73b0\u5728\u6211\u5f00\u653e\u51fa\u6765\uff0c\u4f9b\u76f8\u5173\u4eba\u5458\u4f7f\u7528\u3002"),(0,i.kt)("p",null,"Single UNIX Specification V3\uff0cIEEE Std 1003.1,2004 Edition"),(0,i.kt)("p",null,"\u6807\u51c6\u7ebf\u4e0a\u5730\u5740\uff1a ",(0,i.kt)("a",{parentName:"p",href:"https://link.zhihu.com/?target=http%3A//www.unix.org/version3/online.html"},"http://www.unix.org/version3/online.html")," \u6ce8\u518c\u540e\u53ef\u4ee5\u5728\u7ebf\u9605\u8bfb\u6216\u8005\u4e0b\u8f7d\u3002"),(0,i.kt)("p",null,"IEEE\u548cOpen Group \u7684POSIX\u8ba4\u8bc1\uff1a ",(0,i.kt)("a",{parentName:"p",href:"https://link.zhihu.com/?target=http%3A//www.opengroup.org/certification/idx/posix.html"},"http://www.opengroup.org/certification/idx/posix.html")),(0,i.kt)("p",null,"\u76f8\u5173\u9875\u9762\uff1a ",(0,i.kt)("a",{parentName:"p",href:"https://link.zhihu.com/?target=http%3A//www.unix.org/version3/ieee_std.html"},"http://www.unix.org/version3/ieee_std.html")),(0,i.kt)("h2",{id:"\u4e8cposix\u5386\u53f2"},"\u4e8c\u3001POSIX\u5386\u53f2"),(0,i.kt)("h3",{id:"1-\u8d77\u6e90"},"1. \u8d77\u6e90"),(0,i.kt)("p",null,"POSIX\u662fUnix\u7684\u6807\u51c6\u3002"),(0,i.kt)("p",null,"1974\u5e74\uff0c\u8d1d\u5c14\u5b9e\u9a8c\u5ba4\u6b63\u5f0f\u5bf9\u5916\u53d1\u5e03Unix\u3002\u56e0\u4e3a\u6d89\u53ca\u5230\u53cd\u5784\u65ad\u7b49\u5404\u79cd\u539f\u56e0\uff0c\u52a0\u4e0a\u65e9\u671f\u7684Unix\u4e0d\u591f\u5b8c\u5584\uff0c\u4e8e\u662f\u8d1d\u5c14\u5b9e\u9a8c\u5ba4\u4ee5\u6177\u6168\u7684\u6761\u4ef6\u5411\u5b66\u6821\u63d0\u4f9b\u6e90\u4ee3\u7801\uff0c\u6240\u4ee5Unix\u5728\u5927\u4e13\u9662\u6821\u91cc\u83b7\u5f97\u4e86\u5f88\u591a\u652f\u6301\u5e76\u5f97\u4ee5\u6301\u7eed\u53d1\u5c55\u3002"),(0,i.kt)("p",null,"\u4e8e\u662f\u51fa\u73b0\u4e86\u597d\u4e9b\u72ec\u7acb\u5f00\u53d1\u7684\u4e0eUnix\u57fa\u672c\u517c\u5bb9\u4f46\u53c8\u4e0d\u5b8c\u5168\u517c\u5bb9\u7684OS\uff0c\u901a\u79f0Unix-like OS\u3002"),(0,i.kt)("p",null,"\u5305\u62ec\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u7f8e\u56fd\u52a0\u5dde\u5927\u5b66\u4f2f\u514b\u5229\u5206\u6821\u7684Unix4.xBSD(Berkeley Software Distribution)\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u8d1d\u5c14\u5b9e\u9a8c\u5ba4\u53d1\u5e03\u7684\u81ea\u5df1\u7684\u7248\u672c\uff0c\u79f0\u4e3aSystem V Unix\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5176\u4ed6\u5382\u5546\u7684\u7248\u672c\uff0c\u6bd4\u5982Sun Microsystems\u7684Solaris\u7cfb\u7edf,\u5219\u662f\u4ece\u8fd9\u4e9b\u539f\u59cb\u7684BSD\u548cSystem V\u7248\u672c\u4e2d\u884d\u751f\u800c\u6765\u3002")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://pic4.zhimg.com/80/v2-1db5303ab0d529f7ff4922af843dd09f_720w.jpg",alt:"img"})),(0,i.kt)("p",null,"20\u4e16\u7eaa80\u5e74\u4ee3\u4e2d\u671f\uff0cUnix\u5382\u5546\u8bd5\u56fe\u901a\u8fc7\u52a0\u5165\u65b0\u7684\u3001\u5f80\u5f80\u4e0d\u517c\u5bb9\u7684\u7279\u6027\u6765\u4f7f\u5b83\u4eec\u7684\u7a0b\u5e8f\u4e0e\u4f17\u4e0d\u540c\u3002"),(0,i.kt)("p",null,"\u5c40\u9762\u975e\u5e38\u6df7\u4e71\uff0c\u9ebb\u70e6\u4e5f\u5c31\u968f\u4e4b\u800c\u6765\u4e86\u3002"),(0,i.kt)("p",null,"\u4e3a\u4e86\u63d0\u9ad8\u517c\u5bb9\u6027\u548c\u5e94\u7528\u7a0b\u5e8f\u7684\u53ef\u79fb\u690d\u6027\uff0c\u963b\u6b62\u8fd9\u79cd\u8d8b\u52bf\uff0c IEEE(\u7535\u6c14\u548c\u7535\u5b50\u5de5\u7a0b\u5e08\u534f\u4f1a)\u5f00\u59cb\u52aa\u529b\u6807\u51c6\u5316Unix\u7684\u5f00\u53d1\uff0c\u540e\u6765\u7531 Richard Stallman\u547d\u540d\u4e3a\u201cPosix\u201d\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8fd9\u5957\u6807\u51c6\u6db5\u76d6\u4e86\u5f88\u591a\u65b9\u9762\uff0c\u6bd4\u5982Unix\u7cfb\u7edf\u8c03\u7528\u7684C\u8bed\u8a00\u63a5\u53e3\u3001shell\u7a0b\u5e8f\u548c\u5de5\u5177\u3001\u7ebf\u7a0b\u53ca\u7f51\u7edc\u7f16\u7a0b"),"\u3002"),(0,i.kt)("h3",{id:"2-\u8c01\u9075\u5faa\u8fd9\u4e2a\u6807\u51c6\u5462"},"2. \u8c01\u9075\u5faa\u8fd9\u4e2a\u6807\u51c6\u5462\uff1f"),(0,i.kt)("p",null,"\u9996\u5148\u5c31\u662f\u5927\u540d\u9f0e\u9f0e\u7684Unix\u548cLinux\u4e86\uff0c"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://pic1.zhimg.com/80/v2-d5f7eaef431eb3db068a3129bd71e740_720w.jpg",alt:"img"})),(0,i.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\u8fd8\u6709\u82f9\u679c\u7684\u64cd\u4f5c\u7cfb\u7edf\u4e5f\u662fUnix-based\u7684\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://pic4.zhimg.com/80/v2-195590e42164da5eb6a516d89f1d63eb_720w.jpg",alt:"img"})),(0,i.kt)("p",null,"\u6709\u4e86\u8fd9\u4e2a\u89c4\u8303\uff0c\u4f60\u5c31\u53ef\u4ee5\u8c03\u7528\u901a\u7528\u7684API\u4e86\uff0cLinux\u63d0\u4f9b\u7684POSIX\u7cfb\u7edf\u8c03\u7528\u5728Unix\u4e0a\u4e5f\u80fd\u6267\u884c\uff0c\u56e0\u6b64\u5b66\u4e60Linux\u7684\u5e95\u5c42\u63a5\u53e3\u6700\u597d\u5c31\u662f\u7406\u89e3POSIX\u6807\u51c6\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://pic2.zhimg.com/80/v2-e4be3158d8123f353cb59902c9e8a0b1_720w.jpg",alt:"img"})),(0,i.kt)("p",null,"Windows\u4eceWinNT\u5f00\u59cb\u5c31\u6709\u517c\u5bb9POSIX\u7684\u8003\u8651\u3002\u8fd9\u662f\u56e0\u4e3a\u5f53\u5e74\u5728\u8981\u6c42\u4e25\u683c\u7684\u9886\u57df\uff0cUnix\u5730\u4f4d\u6bd4Windows\u9ad8\u3002\u4e3a\u4e86\u628aUnix\u7528\u6237\u62c9\u5230Windows\u9635\u8425\uff0c\u88ab\u8feb\u652f\u6301POSIX\u3002"),(0,i.kt)("p",null,"\u73b0\u5728Win10\u5bf9 Linux/POSIX \u652f\u6301\u597d\uff0c\u5219\u662f\u56e0\u4e3aLinux\u5df2\u7ecf\u7edf\u6cbb\u4e86\u5ec9\u4ef7\u670d\u52a1\u5668\u5e02\u573a\u3002\u4e3a\u4e86\u63d0\u9ad8Windows\u7684\u7ade\u4e89\u529b\u641e\u7684\u3002"),(0,i.kt)("p",null,"\u6240\u4ee5\u4e00\u5207\u90fd\u662f\u4ee5\u5e02\u573a\u4e3a\u4e3b\u5bfc\u3002"),(0,i.kt)("h3",{id:"3-\u652f\u6301posix-linux\u6210\u529f\u7684\u6700\u91cd\u8981\u4e00\u4e2a\u56e0\u7d20"},"3. \u652f\u6301POSIX-Linux\u6210\u529f\u7684\u6700\u91cd\u8981\u4e00\u4e2a\u56e0\u7d20"),(0,i.kt)("p",null,"Linux\u4e4b\u6240\u4ee5\u80fd\u591f\u6210\u529f\uff0c\u6709\u5f88\u591a\u56e0\u7d20\uff0c\u4f46\u662f\u652f\u6301POSIX\u6807\u51c6\u65e0\u7591\u662f\u5b83\u80fd\u591f\u5feb\u901f\u53d1\u5c55\u7684\u6700\u91cd\u8981\u7684\u4e00\u4e2a\u56e0\u7d20\u3002"),(0,i.kt)("p",null,"POSIX \u6807\u51c6\u7684\u5236\u5b9a\u6700\u540e\u6295\u7968\u6572\u5b9a\u9636\u6bb5\u5927\u6982\u662f 1991~1993 \u5e74\u95f4\uff0c\u800c\u6b64\u65f6\u6b63\u662fLinux \u521a\u521a\u8d77\u6b65\u7684\u65f6\u5019\uff0c\u8fd9\u4e2a UNIX \u6807\u51c6\u4e3a Linux \u63d0\u4f9b\u4e86\u6781\u4e3a\u91cd\u8981\u7684\u4fe1\u606f\uff0c\u4f7f\u5f97 Linux \u80fd\u591f\u5728\u6807\u51c6\u7684\u6307\u5bfc\u4e0b\u8fdb\u884c\u5f00\u53d1\uff0c\u5e76\u80fd\u591f\u4e0e\u7edd\u5927\u591a\u6570 UNIX \u64cd\u4f5c\u7cfb\u7edf\u517c\u5bb9\u3002"),(0,i.kt)("p",null,"\u5728\u6700\u521d\u7684 Linux \u5185\u6838\u6e90\u7801\uff080.01\u7248\u30010.11\u7248\uff09\u4e2d\u5c31\u5df2\u7ecf\u4e3a Linux \u7cfb\u7edf\u4e0e POSIX \u6807\u51c6\u7684\u517c\u5bb9\u505a\u597d\u4e86\u51c6\u5907\u5de5\u4f5c\u3002"),(0,i.kt)("p",null,"\u5728 Linux 0.01 \u7248\u5185\u6838 /include/unistd.h \u6587\u4ef6\u4e2d\u5c31\u5df2\u7ecf\u5b9a\u4e49\u4e86\u51e0\u4e2a\u6709\u5173 POSIX \u6807\u51c6\u8981\u6c42\u7684\u7b26\u53f7\u5e38\u6570\uff0c\u800c\u4e14 Linus \u5728\u6ce8\u91ca\u4e2d\u5df2\u5199\u9053\uff1a\u201cOK\uff0c\u8fd9\u4e5f\u8bb8\u662f\u4e2a\u73a9\u7b11\uff0c\u4f46\u6211\u6b63\u5728\u7740\u624b\u7814\u7a76\u5b83\u5462\u201d\u3002"),(0,i.kt)("p",null,"\u6b63\u662f\u7531\u4e8eLinux\u652f\u6301POSIX\u6807\u51c6\uff0c\u65e0\u6570\u53ef\u4ee5\u5728unix\u4e0a\u8fd0\u884c\u7684\u7a0b\u5e8f\u90fd\u9646\u7eed\u7684\u79fb\u690d\u5230Linux\u4e0a\uff0c\u800c\u6b64\u65f6unix\u56e0\u4e3a\u7248\u6743\u95ee\u9898\uff0c\u5b98\u53f8\u6253\u7684\u4e0d\u53ef\u5f00\u4ea4\uff0c\u4f7f\u5f97Linux\u540e\u6765\u8005\u5c45\u4e0a\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u65f6\u4e5f\u547d\u4e5f\uff01")),(0,i.kt)("p",null,"\u4e0b\u9762\u662f\u7956\u5e08\u7237Linus\u5f53\u5e74\u7533\u8bf7POSIX\u6807\u51c6\u7684\u90ae\u4ef6\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u6765\u81ea\uff1a torvalds@klaava.Helsinki.Fi\uff08\u6797\u7eb3\u65af\xb7\u6258\u74e6\u5179\uff09\n\u8ba8\u8bba\u7ec4\uff1a comp.os.minix\n\u4e3b\u9898\uff1a Gcc-1.40\u548c\u4e00\u4e2a\u6709\u5173POSIX\u7684\u95ee\u9898\n\u4fe1\u606f\u540d\u79f0\uff1a 1991 Jul 3, 100050.9886@klaava.Helsinki.Fi\n\u65e5\u671f\uff1a 1991\u5e747\u67083\u65e5\uff0c \u683c\u6797\u5a01\u6cbb\u65f6\u95f410\uff1a 00\uff1a 50\n\u5404\u4f4d\u7f51\u53cb\u597d\uff01\n\u7531\u4e8e\u6211\u73b0\u5728\u6b63\u5728MINIX\u7cfb\u7edf\u4e0b\u505a\u4e00\u4e2a\u9879\u76ee\uff0c \u5bf9POSIX\u6807\u51c6\u5f88\u611f\u5174\u8da3\u3002 \u6709\u8c01\u80fd\u5411\u6211\u63d0\u4f9b\n\u4e00\u4e2a\uff08\u6700\u597d\uff09 \u662f\u673a\u5668\u53ef\u8bfb\u5f62\u5f0f\u7684\u6700\u65b0\u7684POSIX\u89c4\u5219\uff1f \u80fd\u6709FTP\u5730\u5740\u5c31\u66f4\u597d\u4e86\u3002\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://pic2.zhimg.com/80/v2-1a53c0b66adff874b267dc622649ea55_720w.jpg",alt:"img"})),(0,i.kt)("p",null,"\u800cLinus\u4e5f\u5728\u300a\u77e5\u8bc6\u4e3a\u4e86\u597d\u73a9\u300b\u4e2d\u8bb2\u8ff0\u4e86POSIX\u7684\u91cd\u8981\u6027\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"POSIX\u6807\u51c6\u662f\u4e00\u4e2a\u53ef\u4ee5\u9002\u7528\u4e8e\u6570\u4ee5\u767e\u8ba1\u7684UNIX\u7cfb\u7edf\u547c\u53eb\u4e2d\u7684\u4efb\u610f\u4e00\u4e2a\u7684\u4e00\u5957\u5197\u957f\u89c4\u5219\uff0c \u8ba1\u7b97\u673a\u8981\u6267\u884c\u4efb\u52a1\uff08\u4ece\u8bfb\u3001 \u5199\u3001 \u5f00\u673a\u548c\u5173\u673a\u5f00\u59cb\uff09 \u5c31\u9700\u8981\u8fd9\u4e2a\u6807\u51c6\u3002 \n\nPOSIX\u5219\u662f\u6307\u4e00\u4e2aUNIX\u7684\u6807\u51c6\u4f53\u7cfb\uff0c \u6216\u4e00\u4e2a\u7531\u6765\u81ea\u4e0d\u540c\u516c\u53f8\u7684\u4ee3\u8868\u6240\u7ec4\u6210\u7684\u4e00\u4e2a\u7ec4\u7ec7\uff0c \u5e0c\u671b\u6309\u7167\u4e00\u4e2a\u5171\u540c\u7684\u6807\u51c6\u8fdb\u884c\u8fd0\u4f5c\u3002 \u5bf9\u4e8e\u7a0b\u5e8f\u5458\u5f00\u53d1\u7684\u5728\u8be5\u64cd\u4f5c\u7cfb\u7edf\u4e0b\u7684\u65b0\u5e94\u7528\u8f6f\u4ef6\u6216\u5f00\u53d1\u5e94\u7528\u8f6f\u4ef6\u7684\u65b0\u7248\u672c\u800c\u8a00\uff0c \u6807\u51c6\u662f\u6781\u5176\u91cd\u8981\u7684\u3002 \u4ecePOSIX\u8fd9\u6837\u7684\u7cfb\u7edf\u547c\u53eb\uff08system call\uff09 \uff0c \u5c24\u5176\u662f\u91cd\u8981\u7684\u547c\u53eb\uff08call\uff09 \u4e2d\uff0c \u6211\u53ef\u4ee5\u83b7\u5f97\u4e00\u4e2a\u64cd\u4f5c\u7cfb\u7edf\u5e94\u8be5\u5177\u6709\u54ea\u4e9b\u529f\u80fd\u7684\u4e00\u4e2a\u5355\u5b50\uff1b \u7136\u540e\u6211\u5c31\u53ef\u4ee5\u901a\u8fc7\u81ea\u5df1\u7684\u65b9\u5f0f\u5728\u81ea\u5df1\u7684\u7cfb\u7edf\u4e2d\u5b9e\u73b0\u6bcf\u4e00\u4e2a\u529f\u80fd\u3002 \u901a\u8fc7\u7f16\u5199\u51fa\u8fd9\u4e9b\u6807\u51c6\uff0c \u6211\u7684\u7cfb\u7edf\u8f6f\u4ef6\u7684\u6e90\u4ee3\u7801\u5c06\u53ef\u4ee5\u88ab\u522b\u4eba\u4f7f\u7528\uff0c \u4ee5\u5f00\u53d1\u65b0\u7684\u5e94\u7528\u8f6f\u4ef6\u3002\n\n\u5f53\u65f6\u6211\u5e76\u4e0d\u77e5\u9053\u6211\u672c\u53ef\u4ee5\u76f4\u63a5\u4ecePOSIX\u516c\u53f8\u4e70\u5230\u8fd9\u4e9b\u89c4\u5219\u7684\u8f6f\u76d8\uff0c \u4f46\u8fd9\u65e0\u6240\u8c13\u3002 \u54ea\u6015\u6211\u80fd\u4e70\u5f97\u8d77\uff0c \u4ec0\u4e48\u4e1c\u897f\u8fd0\u5230\u82ac\u5170\uff0c \u5f80\u5f80\u4f1a\u9700\u8981\u5f88\u957f\u7684\u65f6\u95f4\u3002 \u6211\u4e0d\u613f\u7b49\u4e0a\u90a3\u4e48\u4e45\uff0c \u56e0\u6b64\u6211\u56db\u5904\u641c\u6c42\u4e00\u4e2a\u80fd\u4eceFTP\u5730\u5740\u4e0a\u76f4\u63a5\u4e0b\u8f7d\u7684\u7248\u672c\u3002\n\n\u6ca1\u6709\u4eba\u7ed9\u6211\u63d0\u4f9b\u80fd\u627e\u5230POSI\u6807\u51c6\u7684\u6765\u6e90\u3002 \u4e8e\u662f\u6211\u5f00\u59cb\u4e86\u8ba1\u5212B\u3002\n\n\u6211\u4ece\u5b66\u6821\u627e\u5230\u8fd0\u884csun\u5668(sun server)\u7684sun\u5fae\u7cfb\u7edf\u7248\u7684UNIX\u624b\u518c\u3002 \u8be5\u624b\u518c\u4e2d\u6709\u4e00\u4e2a\u5b8c\u5168\u53ef\u4ee5\u51d1\u5408\u4f7f\u7528\u7684\u7cfb\u7edf\u547c\u53eb\u7684\u57fa\u672c\u7248\u672c\u3002 \u4ece\u7528\u6237\u624b\u518c\u4e2d\u80fd\u770b\u51fa\u7cfb\u7edf\u547c\u53eb\u7684\u4e3b\u8981\u529f\u80fd\uff0c \u4ee5\u53ca\u4e3a\u5b8c\u6210\u8fd9\u4e9b\u529f\u80fd\u6240\u9700\u8981\u5b8c\u6210\u7684\u6b65\u9aa4\u3002 \u4f46\u662f\uff0c \u4ece\u4e2d\u770b\u4e0d\u51fa\u5177\u4f53\u7684\u65b9\u6cd5\uff0c \u800c\u53ea\u662f\u6807\u660e\u4e86\u6700\u7ec8\u7684\u7ed3\u679c\u3002 \u4e8e\u662f\u6211\u4fbf\u7740\u624b\u4ece\u5b89\u5fb7\u9c81\xb7\u5854\u5357\u9c8d\u59c6\u7684\u4e66\u4e2d\u548c\u522b\u7684\u6750\u6599\u4e2d\u6536\u96c6\u4e00\u4e9b\u7cfb\u7edf\u547c\u53eb\u3002 \n\n\u6700\u7ec8\u6709\u4eba\u7ed9\u6211\u5bc4\u6765\u4e86\u90a3\u51e0\u5377\u539a\u539a\u7684POSIX\u6807\u51c6\u3002\n")),(0,i.kt)("h2",{id:"\u4e09\u53ef\u79fb\u690d\u6027"},"\u4e09\u3001\u53ef\u79fb\u690d\u6027"),(0,i.kt)("p",null,"\u804a\u5230POSIX\uff0c\u90a3\u6211\u4eec\u5c31\u4e0d\u5f97\u4e0d\u8bf4\u8bf4\u5230\u5e95\u4ec0\u4e48\u662f\u53ef\u79fb\u690d\u6027\uff0c\u5728\u8bb2\u53ef\u79fb\u690d\u6027\u4e4b\u524d\uff0c\u6211\u4eec\u5148\u6765\u4e86\u89e3\u5e93\u51fd\u6570\u548c\u7cfb\u7edf\u8c03\u7528\u7684\u533a\u522b\u3002"),(0,i.kt)("p",null,"Linux\u4e0b\u5bf9\u6587\u4ef6\u64cd\u4f5c\u6709\u4e24\u79cd\u65b9\u5f0f\uff1a\u7cfb\u7edf\u8c03\u7528\uff08system call\uff09\u548c\u5e93\u51fd\u6570\u8c03\u7528\uff08Library functions\uff09\u3002"),(0,i.kt)("h3",{id:"1-\u7cfb\u7edf\u8c03\u7528"},"1. \u7cfb\u7edf\u8c03\u7528"),(0,i.kt)("p",null,"\u7cfb\u7edf\u8c03\u7528\u662f\u901a\u5411\u64cd\u4f5c\u7cfb\u7edf\u672c\u8eab\u7684\u63a5\u53e3\uff0c\u662f\u9762\u5411\u5e95\u5c42\u786c\u4ef6\u7684\u3002\u901a\u8fc7\u7cfb\u7edf\u8c03\u7528\uff0c\u53ef\u4ee5\u4f7f\u5f97\u7528\u6237\u6001\u8fd0\u884c\u7684\u8fdb\u7a0b\u4e0e\u786c\u4ef6\u8bbe\u5907(\u5982CPU\u3001\u78c1\u76d8\u3001\u6253\u5370\u673a\u7b49)\u8fdb\u884c\u4ea4\u4e92\uff0c\u662f\u64cd\u4f5c\u7cfb\u7edf\u7559\u7ed9\u5e94\u7528\u7a0b\u5e8f\u7684\u4e00\u4e2a\u63a5\u53e3\u3002"),(0,i.kt)("h3",{id:"2-\u5e93\u51fd\u6570"},"2. \u5e93\u51fd\u6570"),(0,i.kt)("p",null,"\u5e93\u51fd\u6570\uff08Library function\uff09\u662f\u628a\u51fd\u6570\u653e\u5230\u5e93\u91cc\uff0c\u4f9b\u522b\u4eba\u4f7f\u7528\u7684\u4e00\u79cd\u65b9\u5f0f\u3002"),(0,i.kt)("p",null,"\u65b9\u6cd5\u662f\u628a\u4e00\u4e9b\u5e38\u7528\u5230\u7684\u51fd\u6570\u7f16\u5b8c\u653e\u5230\u4e00\u4e2a\u6587\u4ef6\u91cc\uff0c\u4f9b\u4e0d\u540c\u7684\u4eba\u8fdb\u884c\u8c03\u7528\u3002\u4e00\u822c\u653e\u5728.lib\u6587\u4ef6\u4e2d\u3002"),(0,i.kt)("p",null,"\u5e93\u51fd\u6570\u8c03\u7528\u5219\u662f\u9762\u5411\u5e94\u7528\u5f00\u53d1\u7684\uff0c\u5e93\u51fd\u6570\u53ef\u5206\u4e3a\u4e24\u7c7b\uff0c"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4e00\u7c7b\u662fC\u8bed\u8a00\u6807\u51c6\u89c4\u5b9a\u7684\u5e93\u51fd\u6570\uff0c"),(0,i.kt)("li",{parentName:"ol"},"\u4e00\u7c7b\u662f\u7f16\u8bd1\u5668\u7279\u5b9a\u7684\u5e93\u51fd\u6570\u3002")),(0,i.kt)("p",null,"(\u7531\u4e8e\u7248\u6743\u539f\u56e0\uff0c\u5e93\u51fd\u6570\u7684\u6e90\u4ee3\u7801\u4e00\u822c\u662f\u4e0d\u53ef\u89c1\u7684\uff0c\u4f46\u5728\u5934\u6587\u4ef6\u4e2d\u4f60\u53ef\u4ee5\u770b\u5230\u5b83\u5bf9\u5916\u7684\u63a5\u53e3)\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://pic1.zhimg.com/80/v2-a7967d7e22e948e07d4e45de7486070c_720w.jpg",alt:"img"})),(0,i.kt)("p",null,"glibc \u662f Linux \u4e0b\u4f7f\u7528\u7684\u5f00\u6e90\u7684\u6807\u51c6 C \u5e93\uff0c\u5b83\u662f GNU \u53d1\u5e03\u7684 libc \u5e93\uff0c\u5373\u8fd0\u884c\u65f6\u5e93\u3002\u8fd9\u4e9b\u57fa\u672c\u51fd\u6570\u90fd\u662f\u88ab\u6807\u51c6\u5316\u4e86\u7684\uff0c\u800c\u4e14\u8fd9\u4e9b\u51fd\u6570\u901a\u5e38\u90fd\u662f\u7528\u6c47\u7f16\u76f4\u63a5\u5b9e\u73b0\u7684\u3002"),(0,i.kt)("p",null,"glibc \u4e3a\u7a0b\u5e8f\u5458\u63d0\u4f9b\u4e30\u5bcc\u7684 API\uff08Application Programming Interface\uff09\uff0c\u8fd9\u4e9bAPI\u90fd\u662f\u9075\u5faaPOSIX\u6807\u51c6\u7684\uff0cAPI\u7684\u51fd\u6570\u540d\uff0c\u8fd4\u56de\u503c\uff0c\u53c2\u6570\u7c7b\u578b\u7b49\u90fd\u5fc5\u987b\u6309\u7167POSIX\u6807\u51c6\u6765\u5b9a\u4e49\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"POSIX\u517c\u5bb9\u4e5f\u5c31\u6307\u5b9a\u8fd9\u4e9b\u63a5\u53e3\u51fd\u6570\u517c\u5bb9\uff0c\u4f46\u662f\u5e76\u4e0d\u7ba1API\u5177\u4f53\u5982\u4f55\u5b9e\u73b0\u3002")),(0,i.kt)("h3",{id:"3-\u5e93\u51fd\u6570api\u548c\u7cfb\u7edf\u8c03\u7528\u7684\u533a\u522b"},"3. \u5e93\u51fd\u6570API\u548c\u7cfb\u7edf\u8c03\u7528\u7684\u533a\u522b"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://pic4.zhimg.com/80/v2-3a61e1a67e92a89bd5a4e5f050ee406f_720w.jpg",alt:"img"})),(0,i.kt)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(1) \u5e93\u51fd\u6570\u662f\u8bed\u8a00\u6216\u5e94\u7528\u7a0b\u5e8f\u7684\u4e00\u90e8\u5206\uff0c\u800c\u7cfb\u7edf\u8c03\u7528\u662f\u5185\u6838\u63d0\u4f9b\u7ed9\u5e94\u7528\u7a0b\u5e8f\u7684\u63a5\u53e3\uff0c\u5c5e\u4e8e\u7cfb\u7edf\u7684\u4e00\u90e8\u5206"),(0,i.kt)("li",{parentName:"ul"},"(2) \u5e93\u51fd\u6570\u5728\u7528\u6237\u5730\u5740\u7a7a\u95f4\u6267\u884c\uff0c\u7cfb\u7edf\u8c03\u7528\u662f\u5728\u5185\u6838\u5730\u5740\u7a7a\u95f4\u6267\u884c\uff0c\u5e93\u51fd\u6570\u8fd0\u884c\u65f6\u95f4\u5c5e\u4e8e\u7528\u6237\u65f6\u95f4\uff0c\u7cfb\u7edf\u8c03\u7528\u5c5e\u4e8e\u7cfb\u7edf\u65f6\u95f4\uff0c\u5e93\u51fd\u6570\u5f00\u9500\u8f83\u5c0f\uff0c\u7cfb\u7edf\u8c03\u7528\u5f00\u9500\u8f83\u5927"),(0,i.kt)("li",{parentName:"ul"},"(3) \u7cfb\u7edf\u8c03\u7528\u4f9d\u8d56\u4e8e\u5e73\u53f0\uff0c\u5e93\u51fd\u6570\u5e76\u4e0d\u4f9d\u8d56")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://pic1.zhimg.com/80/v2-992cba1f5d83d0875e501d78ffdd1608_720w.jpg",alt:"img"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7cfb\u7edf\u8c03\u7528\u662f\u4e3a\u4e86\u65b9\u4fbf\u4f7f\u7528\u64cd\u4f5c\u7cfb\u7edf\u7684\u63a5\u53e3\uff0c\u800c\u5e93\u51fd\u6570\u5219\u662f\u4e3a\u4e86\u4eba\u4eec\u7f16\u7a0b\u7684\u65b9\u4fbf\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5e93\u51fd\u6570\u8c03\u7528\u4e0e\u7cfb\u7edf\u65e0\u5173\uff0c\u4e0d\u540c\u7684\u7cfb\u7edf\uff0c\u8c03\u7528\u5e93\u51fd\u6570\uff0c\u5e93\u51fd\u6570\u4f1a\u8c03\u7528\u4e0d\u540c\u7684\u5e95\u5c42\u51fd\u6570\u5b9e\u73b0\uff0c\u56e0\u6b64\u53ef\u79fb\u690d\u6027\u597d\u3002")),(0,i.kt)("h3",{id:"4-\u7a0b\u5e8f\u7684\u53ef\u79fb\u690d\u6027\u53ca\u5176\u672c\u8d28"},"4. \u7a0b\u5e8f\u7684\u53ef\u79fb\u690d\u6027\u53ca\u5176\u672c\u8d28"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u90a3\u4e48\u76ee\u6807\u4ee3\u7801\u548c\u542f\u52a8\u4ee3\u7801\u662f\u600e\u4e48\u751f\u6210\u7684\u5462\uff1f \u7b54\u6848\u662f\u7f16\u8bd1\u5668"),"\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7f16\u7a0b\u8bed\u8a00\u7f16\u5199\u7684\u7a0b\u5e8f\u9996\u5148\u8981\u88ab\u7f16\u8bd1\u5668\u7f16\u8bd1\u6210\u76ee\u6807\u4ee3\u7801\uff080\u30011\u4ee3\u7801\uff09\uff0c\u7136\u540e\u5728\u76ee\u6807\u4ee3\u7801\u7684\u524d\u9762\u63d2\u5165\u542f\u52a8\u4ee3\u7801\uff0c\u6700\u7ec8\u751f\u6210\u4e86\u4e00\u4e2a\u5b8c\u6574\u7684\u7a0b\u5e8f"),"\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u8981\u6ce8\u610f\u7684\u662f\uff0c\u7a0b\u5e8f\u4e2d\u4e3a\u8bbf\u95ee\u7279\u5b9a\u8bbe\u5907\uff08\u5982\u663e\u793a\u5668\uff09\u6216\u8005\u64cd\u4f5c\u7cfb\u7edf\uff08\u5982windows xp \u7684API)\u7684\u7279\u6b8a\u529f\u80fd\u800c\u4e13\u95e8\u7f16\u5199\u7684\u90e8\u5206\u901a\u5e38\u662f\u4e0d\u80fd\u79fb\u690d\u7684\u3002")),(0,i.kt)("p",null,"\u7efc\u4e0a\u6240\u8ff0\uff0c\u4e00\u4e2a\u7f16\u7a0b\u8bed\u8a00\u7684\u53ef\u79fb\u690d\u6027\u53d6\u51b3\u4e8e"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4e0d\u540c\u5e73\u53f0\u7f16\u8bd1\u5668\u7684\u6570\u91cf"),(0,i.kt)("li",{parentName:"ol"},"\u5bf9\u7279\u6b8a\u786c\u4ef6\u6216\u64cd\u4f5c\u7cfb\u7edf\u7684\u4f9d\u8d56\u6027")),(0,i.kt)("p",null,"\u79fb\u690d\u662f\u57fa\u4e8e\u64cd\u4f5c\u7cfb\u7edf\u7684\u3002\u4f46\u662f\u8fd9\u4e2a\u65f6\u5019\uff0c\u6211\u4eec\u9700\u8981\u6ce8\u610f\u4e00\u70b9\uff1a",(0,i.kt)("strong",{parentName:"p"},"\u57fa\u4e8e\u5404\u79cd\u64cd\u4f5c\u7cfb\u7edf\u5e73\u53f0\u4e0d\u540c\uff0c\u5e94\u7528\u7a0b\u5e8f\u5728\u4e8c\u7ea7\u5236\u7ea7\u522b\u662f\u4e0d\u80fd\u76f4\u63a5\u79fb\u690d\u7684"),"\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u53ea\u80fd\u5728\u4ee3\u7801\u5c42\u53bb\u601d\u8003\u53ef\u79fb\u690d\u95ee\u9898\uff0c\u5728API\u5c42\u9762\u4e0a\u7531\u4e8e\u5404\u4e2a\u64cd\u4f5c\u7cfb\u7edf\u7684\u547d\u540d\u89c4\u8303\u3001\u7cfb\u7edf\u8c03\u7528\u7b49\u81ea\u8eab\u539f\u56e0\uff0c\u5728API\u5c42\u9762\u4e0a\u5b9e\u73b0\u53ef\u79fb\u690d\u4e5f\u662f\u4e0d\u5927\u53ef\u80fd\u7684\u3002"),(0,i.kt)("p",null,"\u5728\u5404\u4e2a\u5e73\u53f0\u4e0b\uff0c\u6211\u4eec\u9ed8\u8ba4C\u6807\u51c6\u5e93\u4e2d\u7684\u51fd\u6570\u90fd\u662f\u4e00\u6837\u7684\uff0c\u8fd9\u6837\u57fa\u672c\u53ef\u4ee5\u5b9e\u73b0\u53ef\u79fb\u690d\u3002\u4f46\u662f\u5bf9\u4e8eC\u5e93\u672c\u8eab\u800c\u8a00\uff0c\u5728\u5404\u79cd\u64cd\u4f5c\u7cfb\u7edf\u5e73\u53f0\u4e0b\u5176\u5185\u90e8\u5b9e\u73b0\u662f\u5b8c\u5168\u4e0d\u540c\u7684\uff0c\u4e5f\u5c31\u662f\u8bf4C\u5e93\u5c01\u88c5\u4e86\u64cd\u4f5c\u7cfb\u7edfAPI\u5728\u5176\u5185\u90e8\u7684\u5b9e\u73b0\u7ec6\u8282\u3002"),(0,i.kt)("p",null,"\u56e0\u6b64\uff0c",(0,i.kt)("strong",{parentName:"p"},"C\u8bed\u8a00\u63d0\u4f9b\u4e86\u6211\u4eec\u5728\u4ee3\u7801\u7ea7\u7684\u53ef\u79fb\u690d\u6027\uff0c\u5373\u8fd9\u79cd\u53ef\u79fb\u690d\u662f\u901a\u8fc7C\u8bed\u8a00\u8fd9\u4e2a\u4e2d\u95f4\u5c42\u6765\u5b8c\u6210\u7684"),"\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\u5728\u6211\u4eec\u7684\u4ee3\u7801\u4e2d\u4e0b\u529f\u592b\u3002\u4ee5\u4e0b\u4ee3\u7801\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u5b9e\u73b0\u5404\u5e73\u53f0\u4e4b\u95f4\u7684\u53ef\u79fb\u690d\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"#ifdef _WINDOWS_\n       CreateThread();      //windows\u4e0b\u7ebf\u7a0b\u7684\u521b\u5efa\n#else\n       Pthread_create();    //Linux\u4e0b\u7ebf\u7a0b\u7684\u521b\u5efa\n#endif\n")),(0,i.kt)("p",null,"\u5bf9\u4e8e\u5934\u6587\u4ef6\uff0c\u4e5f\u4f7f\u7528\u540c\u6837\u7684\u9884\u7f16\u8bd1\u5b8f\u6765\u5b9e\u73b0\u3002\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"#ifndef _WINDOWS_\n       #include <windows.h>\n#else\n       #include <thread.h>\n#endif\n")),(0,i.kt)("p",null,"\u8fd9\u6837\u5c31\u53ef\u4ee5\u5b9e\u73b0\u4ee3\u7801\u7684\u53ef\u79fb\u690d\u4e86\u3002\u5728\u7f16\u8bd1\u7684\u65f6\u5019\u53ea\u8981\u901a\u8fc7#define\u5c31\u53ef\u4ee5\u9009\u62e9\u5728\u90a3\u4e2a\u5e73\u53f0\u4e0b\u5b8c\u6210\u7a0b\u5e8f\u7684\u7f16\u8bd1\u3002"),(0,i.kt)("p",null,"\u7efc\u4e0a\u6240\u8ff0\uff0c\u6211\u4eec\u90fd\u662f\u5c06C\uff0cC++\u7b49\u5404\u79cd\u8bed\u8a00\u5f53\u4f5c\u4e2d\u95f4\u5c42\uff0c\u4ee5\u5b9e\u73b0\u5176\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u7684\u53ef\u79fb\u690d\u3002\u5982\u4eca\uff0c\u8bed\u8a00\u7684\u8de8\u5e73\u53f0\u7684\u7a0b\u5e8f\u90fd\u662f\u4ee5\u8fd9\u6837\u7684\u65b9\u5f0f\u5b9e\u73b0\u7684\u3002\u4f46\u662f\u5728\u4e0d\u540c\u7684\u5e73\u53f0\u4e0b\uff0c\u4ecd\u9700\u8981\u91cd\u65b0\u7f16\u8bd1\u3002"),(0,i.kt)("h3",{id:"5-\u7cfb\u7edf\u5f00\u9500"},"5. \u7cfb\u7edf\u5f00\u9500"),(0,i.kt)("p",null,"\u4f7f\u7528\u7cfb\u7edf\u8c03\u7528\u4f1a\u5f71\u54cd\u7cfb\u7edf\u7684\u6027\u80fd\uff0c\u5728\u6267\u884c\u8c03\u7528\u65f6\u7684\u4ece\u7528\u6237\u6001\u5207\u6362\u5230\u5185\u6838\u6001\uff0c\u518d\u8fd4\u56de\u7528\u6237\u6001\u4f1a\u6709\u7cfb\u7edf\u5f00\u9500\u3002"),(0,i.kt)("p",null,"\u4e3a\u4e86\u51cf\u5c11\u5f00\u9500\uff0c\u56e0\u6b64\u9700\u8981",(0,i.kt)("strong",{parentName:"p"},"\u51cf\u5c11\u7cfb\u7edf\u8c03\u7528\u7684\u6b21\u6570"),"\uff0c\u5e76\u4e14\u8ba9",(0,i.kt)("strong",{parentName:"p"},"\u6bcf\u6b21\u7cfb\u7edf\u8c03\u7528\u5c3d\u53ef\u80fd\u7684\u5b8c\u6210\u591a\u7684\u4efb\u52a1"),"\u3002"),(0,i.kt)("p",null,"\u786c\u4ef6\u4e5f\u4f1a\u9650\u5236\u5bf9\u5e95\u5c42\u7cfb\u7edf\u8c03\u7528\u4e00\u6b21\u6240\u80fd\u5199\u7684\u6570\u636e\u5757\u7684\u5927\u5c0f\u3002"),(0,i.kt)("p",null,"\u4e3a\u4e86\u7ed9\u8bbe\u5907\u548c\u6587\u4ef6\u63d0\u4f9b\u66f4\u9ad8\u5c42\u7684\u63a5\u53e3\uff0cLinux\u7cfb\u7edf\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u7684\u6807\u51c6\u51fd\u6570\u5e93\u3002"),(0,i.kt)("p",null,"\u4f7f\u7528\u6807\u51c6\u5e93\u51fd\u6570\uff0c\u53ef\u4ee5\u9ad8\u6548\u7684\u5199\u4efb\u610f\u957f\u5ea6\u7684\u6570\u636e\u5757\uff0c\u5e93\u51fd\u6570\u5728\u6570\u636e\u6ee1\u8db3\u6570\u636e\u5757\u957f\u5ea6\u8981\u6c42\u65f6\u5b89\u6392\u6267\u884c\u5e95\u5c42\u7cfb\u7edf\u8c03\u7528\u3002"),(0,i.kt)("p",null,"\u4e00\u822c\u5730\uff0c\u64cd\u4f5c\u7cfb\u7edf\u4e3a\u4e86\u8003\u8651\u5b9e\u73b0\u7684\u96be\u5ea6\u548c\u7ba1\u7406\u7684\u65b9\u4fbf\uff0c\u5b83\u53ea\u63d0\u4f9b\u4e00\u5c11\u90e8\u5206\u7684\u7cfb\u7edf\u8c03\u7528\uff0c\u8fd9\u4e9b\u7cfb\u7edf\u8c03\u7528\u4e00\u822c\u90fd\u662f\u7531C\u548c\u6c47\u7f16\u6df7\u5408\u7f16\u5199\u5b9e\u73b0\u7684\uff0c\u5176\u63a5\u53e3\u7528C\u6765\u5b9a\u4e49\uff0c\u800c\u5177\u4f53\u7684\u5b9e\u73b0\u5219\u662f",(0,i.kt)("strong",{parentName:"p"},"\u6c47\u7f16"),"\uff0c\u8fd9\u6837\u7684",(0,i.kt)("strong",{parentName:"p"},"\u597d\u5904\u5c31\u662f\u6267\u884c\u6548\u7387\u9ad8"),"\uff0c\u800c\u4e14\uff0c\u6781\u5927\u7684\u65b9\u4fbf\u4e86\u4e0a\u5c42\u8c03\u7528\u3002"),(0,i.kt)("p",null,"\u968f\u7740\u7cfb\u7edf\u63d0\u4f9b\u7684\u8fd9\u4e9b\u5e93\u51fd\u6570\u628a\u7cfb\u7edf\u8c03\u7528\u8fdb\u884c\u5c01\u88c5\u6216\u8005\u7ec4\u5408\uff0c\u53ef\u4ee5\u5b9e\u73b0\u66f4\u591a\u7684\u529f\u80fd\uff0c\u8fd9\u6837\u7684\u5e93\u51fd\u6570\u80fd\u591f\u5b9e\u73b0\u4e00\u4e9b\u5bf9\u5185\u6838\u6765\u8bf4\u6bd4\u8f83\u590d\u6742\u7684\u64cd\u4f5c\u3002"),(0,i.kt)("p",null,"\u6bd4\u5982\uff0cread()\u51fd\u6570\u6839\u636e\u53c2\u6570\uff0c\u76f4\u63a5\u5c31\u80fd\u8bfb\u6587\u4ef6\uff0c\u800c\u80cc\u540e",(0,i.kt)("strong",{parentName:"p"},"\u9690\u85cf\u7684\u6bd4\u5982\u6587\u4ef6\u5728\u786c\u76d8\u7684\u54ea\u4e2a\u78c1\u9053\uff0c\u54ea\u4e2a\u6247\u533a\uff0c\u52a0\u8f7d\u5230\u5185\u5b58\u7684\u54ea\u4e2a\u4f4d\u7f6e\u7b49\u7b49\u8fd9\u4e9b\u64cd\u4f5c"),"\uff0c\u7a0b\u5e8f\u5458\u662f\u4e0d\u5fc5\u5173\u5fc3\u7684\uff0c\u8fd9\u4e9b\u64cd\u4f5c\u91cc\u9762\u81ea\u7136\u4e5f\u5305\u542b\u4e86\u7cfb\u7edf\u8c03\u7528\u3002"),(0,i.kt)("p",null,"\u800c\u5bf9\u4e8e\u7b2c\u4e09\u65b9\u7684\u5e93\uff0c\u5b83\u5176\u5b9e\u548c\u7cfb\u7edf\u5e93\u4e00\u6837\uff0c\u53ea\u662f\u5b83\u76f4\u63a5\u5229\u7528\u7cfb\u7edf\u8c03\u7528\u7684\u53ef\u80fd\u6027\u8981\u5c0f\u4e00\u4e9b\uff0c\u800c\u662f\u5229\u7528\u7cfb\u7edf\u63d0\u4f9b\u7684API\u63a5\u53e3\u6765\u5b9e\u73b0\u529f\u80fd(API\u7684\u63a5\u53e3\u662f\u5f00\u653e\u7684)\u3002"),(0,i.kt)("h2",{id:"\u56db\u4e3e\u4f8blinux\u7cfb\u7edf\u8c03\u7528"},"\u56db\u3001\u4e3e\u4f8b\uff1aLinux\u7cfb\u7edf\u8c03\u7528"),(0,i.kt)("p",null,"\u5982\u4e0b\u56fe\u662fLinux\u7cfb\u7edf\u8c03\u7528\u7684\u5927\u6982\u6d41\u7a0b\u3002"),(0,i.kt)("p",null,"\u5f53\u5e94\u7528\u7a0b\u5e8f\u8c03\u7528printf()\u51fd\u6570\u65f6\uff0cprintf\u51fd\u6570\u4f1a\u8c03\u7528C\u5e93\u4e2d\u7684printf\uff0c\u7ee7\u800c\u8c03\u7528C\u5e93\u4e2d\u7684write\uff0cC\u5e93\u6700\u540e\u8c03\u7528\u5185\u6838\u7684write()\u3002"),(0,i.kt)("p",null,"\u800c\u53e6\u4e00\u4e9b\u5219\u4e0d\u4f1a\u4f7f\u7528\u7cfb\u7edf\u8c03\u7528\uff0c\u6bd4\u5982strlen, strcat, memcpy\u7b49\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://pic4.zhimg.com/80/v2-7f5eb3c97342632b5975493cbdd45b9f_720w.jpg",alt:"img"})),(0,i.kt)("p",null,"printf\u51fd\u6570\u6267\u884c\u8fc7\u7a0b\u4e2d\uff0c\u7a0b\u5e8f\u8fd0\u884c\u72b6\u6001\u5207\u6362\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u7528\u6237\u6001\u2013>\u7cfb\u7edf\u8c03\u7528\u2013>\u5185\u6838\u6001\u2013>\u8fd4\u56de\u7528\u6237\u6001\n")),(0,i.kt)("p",null,"printf\u51fd\u6570\u3001glibc\u5e93\u548c\u7cfb\u7edf\u8c03\u7528\u5728\u7cfb\u7edf\u4e2d\u5173\u7cfb\u56fe\u5982\u4e0b\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://pic3.zhimg.com/80/v2-a8315ef7d9a895bb4649fe3cd6f3e96a_720w.jpg",alt:"img"})),(0,i.kt)("p",null,"\u5b9e\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"  1 #include <stdio.h>\n  2 \n  3 \n  4 int main(int argc, char **argv)\n  5 {\n  6     printf(yikoulinux);   \n  7     return 0;\n  8 }   \n")),(0,i.kt)("p",null,"\u7f16\u8bd1\u6267\u884c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"root@ubuntu:/home/peng/test# gcc 123.c -o run\nroot@ubuntu:/home/peng/test# strace ./run\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://pic4.zhimg.com/80/v2-4a6b1b885510374f17e22bea8a725a5b_720w.jpg",alt:"img"})),(0,i.kt)("p",null,"\u5982\u6267\u884c\u7ed3\u679c\u53ef\u77e5\uff1a \u6211\u4eec\u7684\u7a0b\u5e8f\u867d\u7136\u53ea\u6709\u4e00\u4e2aprintf\u51fd\u6570\uff0c\u4f46\u662f\u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u524d\u540e\u8c03\u7528\u4e86execve\u3001access\u3001open\u3001fstat\u3001mmap\u3001brk\u3001write\u7b49\u7cfb\u7edf\u8c03\u7528\u3002 \u5176\u4e2dwrite\u7cfb\u7edf\u8c03\u7528\u4f1a\u628a\u5b57\u7b26\u4e32\uff1ayikoulinux\u901a\u8fc7\u8bbe\u5907\u6587\u4ef61\uff0c\u53d1\u9001\u5230\u9a71\u52a8\uff0c\u8be5\u8bbe\u5907\u8282\u70b9\u5bf9\u5e94\u7ec8\u7aefstdout\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://pic2.zhimg.com/80/v2-3387b06c17199dd7cb4849f4ebde6ebd_720w.jpg",alt:"img"})),(0,i.kt)("p",null,"\u3010\u6ce8\u610f\u3011\u8fd0\u884c\u7a0b\u5e8f\u524d\u52a0\u4e0astrace\uff0c\u53ef\u4ee5\u8ffd\u8e2a\u5230\u51fd\u6570\u5e93\u8c03\u7528\u8fc7\u7a0b"))}c.isMDXComponent=!0}}]);