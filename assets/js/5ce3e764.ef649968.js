"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[55268],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,k=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81442:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={},i="\u5e38\u89c1\u6307\u4ee4",l={unversionedId:"Skill/ASM/x86/\u5e38\u89c1\u6307\u4ee4",id:"Skill/ASM/x86/\u5e38\u89c1\u6307\u4ee4",title:"\u5e38\u89c1\u6307\u4ee4",description:"endbr64",source:"@site/docs/Skill/ASM/x86/3-\u5e38\u89c1\u6307\u4ee4.md",sourceDirName:"Skill/ASM/x86",slug:"/Skill/ASM/x86/\u5e38\u89c1\u6307\u4ee4",permalink:"/docs/Skill/ASM/x86/\u5e38\u89c1\u6307\u4ee4",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"docsSidebar",previous:{title:"X86-64 \u6307\u4ee4\u96c6",permalink:"/docs/Skill/ASM/x86/\u6307\u4ee4\u96c6"},next:{title:"Android",permalink:"/docs/Skill/Android/Android\u6982\u8ff0"}},c={},p=[{value:"endbr64",id:"endbr64",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5e38\u89c1\u6307\u4ee4"},"\u5e38\u89c1\u6307\u4ee4"),(0,r.kt)("h2",{id:"endbr64"},"endbr64"),(0,r.kt)("p",null,"\u6765\u6e90\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/56905811/what-does-the-endbr64-instruction-actually-do"},"assembly - What does the endbr64 instruction actually do? - Stack Overflow")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"endbr64")," (and ",(0,r.kt)("inlineCode",{parentName:"p"},"endbr32"),") are a part of ",(0,r.kt)("a",{parentName:"p",href:"https://software.intel.com/content/www/us/en/develop/articles/technical-look-control-flow-enforcement-technology.html"},"Intel's ",(0,r.kt)("em",{parentName:"a"},"Control-Flow Enforcement Technology")," (CET)")," (see also ",(0,r.kt)("a",{parentName:"p",href:"https://software.intel.com/content/www/us/en/develop/articles/intel-sdm.html"},"Intel Software Developer Manual, Volume 1, Chapter 18"),")."),(0,r.kt)("p",null,"Intel CET offers hardware protection against ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Return-oriented_programming"},"Return-oriented Programming (ROP)")," and ",(0,r.kt)("a",{parentName:"p",href:"https://security.stackexchange.com/questions/201196/concept-of-jump-oriented-programming-jop"},"Jump/Call-oriented Programming (JOP/COP)")," attacks, which manipulate control flow in order to re-use existing code for malicious purposes."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"endbr64")," \u662f\u82f1\u7279\u5c14\u63a7\u5236\u6d41\u5f3a\u5316\u6280\u672f(CET)\u7684\u4e00\u90e8\u5206"),(0,r.kt)("p",{parentName:"blockquote"},"Intel CET \u63d0\u4f9b\u4e86\u786c\u4ef6\u4fdd\u62a4\u6765\u62b5\u6297 \u9762\u5411\u8fd4\u56de\u7f16\u7a0b \u548c \u9762\u5411\u8df3\u8f6c\u7684\u7f16\u7a0b \u653b\u51fb\uff0c\u5b83\u4eec\u64cd\u7eb5\u63a7\u5236\u6d41\uff0c\u4ee5\u4fbf\u4e3a\u6076\u610f\u76ee\u7684\u91cd\u7528\u73b0\u6709\u4ee3\u7801\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Return-oriented Programming (ROP)\uff1a\n\u9762\u5411\u8fd4\u56de\u7684\u7f16\u7a0b (ROP) \u662f\u4e00\u79cd\u8ba1\u7b97\u673a\u5b89\u5168\u6f0f\u6d1e\u5229\u7528\u6280\u672f\uff0c\u5b83\u5141\u8bb8\u653b\u51fb\u8005\u5728\u5b58\u5728\u5b89\u5168\u9632\u5fa1\uff08\u4f8b\u5982\u53ef\u6267\u884c\u7a7a\u95f4\u4fdd\u62a4\u548c\u4ee3\u7801\u7b7e\u540d\uff09\u7684\u60c5\u51b5\u4e0b\u6267\u884c\u4ee3\u7801\u3002\n\u5728\u8fd9\u79cd\u6280\u672f\u4e2d\uff0c\u653b\u51fb\u8005\u83b7\u5f97\u4e86\u8c03\u7528\u5806\u6808\u7684\u63a7\u5236\u6743\u4ee5\u52ab\u6301\u7a0b\u5e8f\u63a7\u5236\u6d41\uff0c\u7136\u540e\u6267\u884c\u7cbe\u5fc3\u6311\u9009\u7684\u673a\u5668\u6307\u4ee4\u5e8f\u5217\uff0c\u8fd9\u4e9b\u673a\u5668\u6307\u4ee4\u5e8f\u5217\u5df2\u7ecf\u5b58\u5728\u4e8e\u673a\u5668\u7684\u5185\u5b58\u4e2d\uff0c\u79f0\u4e3a\u201cgadgets\u201d\u3002\u6bcf\u4e2agadgets\u901a\u5e38\u90fd\u4f1a\u7ed3\u675f\u5728\u8fd4\u56de\u6307\u4ee4\u4e2d\uff0c\u5e76\u4e14\u4f4d\u4e8e\u73b0\u6709\u7a0b\u5e8f\u548c/\u6216\u5171\u4eab\u5e93\u4ee3\u7801\u4e2d\u7684\u5b50\u4f8b\u7a0b\u4e2d\u3002\u94fe\u63a5\u5728\u4e00\u8d77\uff0c\u8fd9\u4e9b\u5c0f\u5de5\u5177\u5141\u8bb8\u653b\u51fb\u8005\u5728\u91c7\u7528\u9632\u5fa1\u673a\u5236\u7684\u673a\u5668\u4e0a\u6267\u884c\u4efb\u610f\u64cd\u4f5c\uff0c\u4ece\u800c\u963b\u6b62\u66f4\u7b80\u5355\u7684\u653b\u51fb\u3002\n")),(0,r.kt)("p",null,"Its two major features are"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Shadow_stack"},"shadow stack")," for tracking return addresses and"),(0,r.kt)("li",{parentName:"ul"},"indirect branch tracking, which ",(0,r.kt)("inlineCode",{parentName:"li"},"endbr64")," is a part of.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5b83\u7684\u4e24\u4e2a\u4e3b\u8981\u7279\u5f81\u662f"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u8ddf\u8e2a\u8fd4\u56de\u5730\u5740\u7684\u5f71\u5b50\u5806\u6808"),(0,r.kt)("li",{parentName:"ul"},"\u95f4\u63a5\u5206\u652f\u8ddf\u8e2a\uff0cendbr64 \u662f\u5176\u4e2d\u7684\u4e00\u90e8\u5206"))),(0,r.kt)("p",null,"While CET is just slowly becoming available with the current processor generation, it is ",(0,r.kt)("a",{parentName:"p",href:"https://gcc.gnu.org/gcc-8/changes.html"},"already supported as of GCC 8"),", which inserts ",(0,r.kt)("inlineCode",{parentName:"p"},"endbrXX")," instructions by default. The opcode is chosen to be a no-op on older processors, such that the instruction is ignored if CET is not supported; the same happens on CET-capable processors where indirect branch tracking is disabled."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u867d\u7136 CET \u53ea\u662f\u5728\u5f53\u524d\u7684\u5904\u7406\u5668\u4e2d\u6162\u6162\u53d8\u5f97\u53ef\u7528\uff0c\u4f46\u4ece GCC 8 \u5f00\u59cb\u5c31\u5df2\u7ecf\u652f\u6301\u5b83\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f1a\u63d2\u5165 endbrXX \u6307\u4ee4\u3002"),(0,r.kt)("p",{parentName:"blockquote"},"\u64cd\u4f5c\u7801\u88ab\u9009\u62e9\u4e3a\u65e7\u5904\u7406\u5668\u4e0a\u7684\u65e0\u64cd\u4f5c\uff0c\u8fd9\u6837\u5982\u679c\u4e0d\u652f\u6301 CET\uff0c\u5219\u5ffd\u7565\u8be5\u6307\u4ee4\uff1b\u5728\u7981\u7528\u95f4\u63a5\u5206\u652f\u8ddf\u8e2a\u7684\u652f\u6301 CET \u7684\u5904\u7406\u5668\u4e0a\u4e5f\u4f1a\u53d1\u751f\u540c\u6837\u7684\u60c5\u51b5\u3002")),(0,r.kt)("p",null,"So what does ",(0,r.kt)("inlineCode",{parentName:"p"},"endbr64")," do?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Preconditions:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CET must be enabled by setting the control register flag ",(0,r.kt)("inlineCode",{parentName:"li"},"CR4.CET")," to 1."),(0,r.kt)("li",{parentName:"ul"},"The appropriate flags for indirect branch tracking in the ",(0,r.kt)("inlineCode",{parentName:"li"},"IA32_U_CET")," (user mode) or ",(0,r.kt)("inlineCode",{parentName:"li"},"IA32_S_CET")," (supervisor mode) MSRs are set.")),(0,r.kt)("p",null,"The CPU sets up a small state machine which tracks the type of the last branch. Take the following example:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"CPU \u8bbe\u7f6e\u4e86\u4e00\u4e2a\u5c0f\u578b\u72b6\u6001\u673a\uff0c\u7528\u4e8e\u8ddf\u8e2a\u6700\u540e\u4e00\u4e2a\u5206\u652f\u7684\u7c7b\u578b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-assembly"},"some_function:\n    mov rax, qword [vtable+8]\n    call rax\n    ...\n\ncheck_login:\n    endbr64\n    ...\nauthenticated:\n    mov byte [is_admin], 1\n    ...\n    ret\n")),(0,r.kt)("p",null,"Let's now briefly look at two scenarios."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u73b0\u5728\uff0c\u8ba9\u6211\u4eec\u7b80\u8981\u770b\u4e24\u79cd\u60c5\u51b5\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"No attack:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"some_function")," retrieves the address of the virtual method ",(0,r.kt)("inlineCode",{parentName:"li"},"check_login")," from the ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Virtual_method_table"},"virtual method table")," ",(0,r.kt)("inlineCode",{parentName:"li"},"vtable")," and calls it."),(0,r.kt)("li",{parentName:"ol"},"Since this is an indirect call, the CET state machine is activated and set to trigger on the next instruction (",(0,r.kt)("inlineCode",{parentName:"li"},"TRACKER = WAIT_FOR_ENDBRANCH"),")."),(0,r.kt)("li",{parentName:"ol"},"The next instruction is ",(0,r.kt)("inlineCode",{parentName:"li"},"endbr64"),', so the indirect call is considered "safe" and execution continues (the ',(0,r.kt)("inlineCode",{parentName:"li"},"endbr64")," still behaves as a no-op). The state machine is reset (",(0,r.kt)("inlineCode",{parentName:"li"},"TRACKER = IDLE"),").")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u65e0\u653b\u51fb\uff1a"),(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"Some_Function\u4ece\u865a\u62df\u65b9\u6cd5\u8868VTable\u4e2d\u68c0\u7d22\u865a\u62df\u65b9\u6cd5check_login\u7684\u5730\u5740\u5e76\u8c03\u7528\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u7531\u4e8e\u8fd9\u662f\u4e00\u4e2a\u95f4\u63a5\u8c03\u7528\uff0c\u56e0\u6b64\u6fc0\u6d3b\u4e86CET\u72b6\u6001\u673a\u5e76\u5c06\u5176\u8bbe\u7f6e\u4e3a\u89e6\u53d1\u4e0b\u4e00\u4e2a\u6307\u4ee4\uff08Tracker = Wait_for_endbranch\uff09\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4e0b\u4e00\u4e2a\u6307\u4ee4\u662fEndBR64\uff0c\u56e0\u6b64\u95f4\u63a5\u547c\u53eb\u88ab\u89c6\u4e3a\u201c\u5b89\u5168\u201d\uff0c\u5e76\u4e14\u6267\u884c\u7ee7\u7eed\uff08EndBR64\u4ecd\u7136\u8868\u73b0\u4e3aNO-OP\uff09\u3002\u72b6\u6001\u673a\u662f\u91cd\u7f6e\u7684\uff08tracker = idle\uff09\u3002"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Attack:")),(0,r.kt)("p",null,"An attacker somehow managed to manipulate ",(0,r.kt)("inlineCode",{parentName:"p"},"vtable")," such that ",(0,r.kt)("inlineCode",{parentName:"p"},"vtable+8")," now points to ",(0,r.kt)("inlineCode",{parentName:"p"},"authenticated"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"some_function")," retrieves the address of ",(0,r.kt)("inlineCode",{parentName:"li"},"authenticated")," from the virtual method table ",(0,r.kt)("inlineCode",{parentName:"li"},"vtable")," and calls it."),(0,r.kt)("li",{parentName:"ol"},"Since this is an indirect call, the CET state machine is activated and set to trigger on the next instruction (",(0,r.kt)("inlineCode",{parentName:"li"},"TRACKER = WAIT_FOR_ENDBRANCH"),")."),(0,r.kt)("li",{parentName:"ol"},"The next instruction is ",(0,r.kt)("inlineCode",{parentName:"li"},"mov byte [is_admin], 1"),", not the expected ",(0,r.kt)("inlineCode",{parentName:"li"},"endbr64")," instruction. The CET state machine infers that control flow was manipulated and raises a ",(0,r.kt)("inlineCode",{parentName:"li"},"#CP")," fault, terminating the program.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u653b\u51fb"),(0,r.kt)("p",{parentName:"blockquote"},"\u653b\u51fb\u8005\u4ee5\u67d0\u79cd\u65b9\u5f0f\u8bbe\u6cd5\u64cd\u7eb5VTable\uff0c\u4ee5\u4f7fVTable+8\u70b9\u6307\u5411\u8eab\u4efd\u9a8c\u8bc1"),(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"Some_Function\u4ece\u865a\u62df\u65b9\u6cd5\u8868Vtable\u68c0\u7d22\u8eab\u4efd\u9a8c\u8bc1\u7684\u5730\u5740\u5e76\u8c03\u7528\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u7531\u4e8e\u8fd9\u662f\u4e00\u4e2a\u95f4\u63a5\u8c03\u7528\uff0c\u56e0\u6b64\u6fc0\u6d3b\u4e86CET\u72b6\u6001\u673a\u5e76\u5c06\u5176\u8bbe\u7f6e\u4e3a\u89e6\u53d1\u4e0b\u4e00\u4e2a\u6307\u4ee4\uff08Tracker = Wait_for_endbranch\uff09\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4e0b\u4e00\u4e2a\u6307\u4ee4\u662f",(0,r.kt)("inlineCode",{parentName:"li"},"mov byte [is_admin], 1"),"\uff0c\u800c\u4e0d\u662f\u9884\u671f\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"endbr64"),"\u6307\u4ee4\u3002\u63a7\u5236\u6d41\u52a8\u6d41\u7684CET\u72b6\u6001\u673a\u88ab\u64cd\u7eb5\u5e76\u5f15\u8d77#CP\u6545\u969c\uff0c\u7ec8\u6b62\u4e86\u7a0b\u5e8f\u3002"))),(0,r.kt)("p",null,"Without CET, the control flow manipulation would have gone unnoticed and the attacker would have obtained admin privileges."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ca1\u6709CET\uff0c\u63a7\u5236\u6d41\u64cd\u4f5c\u5c06\u4e0d\u4f1a\u5f15\u8d77\u4eba\u4eec\u7684\u6ce8\u610f\uff0c\u5e76\u4e14\u653b\u51fb\u8005\u5c06\u83b7\u5f97\u7ba1\u7406\u5458\u7279\u6743\u3002")),(0,r.kt)("p",null,"In summary, the indirect branch tracking feature of Intel CET ensures that indirect calls and jumps can only redirect to functions which start with an ",(0,r.kt)("inlineCode",{parentName:"p"},"endbr64")," instruction."),(0,r.kt)("p",null,"Note that this does ",(0,r.kt)("em",{parentName:"p"},"not")," ensure that the ",(0,r.kt)("em",{parentName:"p"},"right")," function is called - if an attacker changes control flow to jump to a different function which starts with ",(0,r.kt)("inlineCode",{parentName:"p"},"endbr64"),' as well, the state machine won\'t complain and keep executing the program. However, this still greatly reduces the attack surface, as most JOP/COP attacks target instructions mid-function (or even jump right "into" instructions).'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u603b\u4e4b\uff0c\u82f1\u7279\u5c14CET\u7684\u95f4\u63a5\u5206\u652f\u8ddf\u8e2a\u529f\u80fd\u53ef\u786e\u4fdd\u95f4\u63a5\u547c\u53eb\u548c\u8df3\u8dc3\u53ea\u80fd\u91cd\u5b9a\u5411\u5230\u4ee5ENDBR64\u6307\u4ee4\u5f00\u5934\u7684\u51fd\u6570\u3002"),(0,r.kt)("p",{parentName:"blockquote"},"\u8bf7\u6ce8\u610f\uff0c\u8fd9\u4e0d\u80fd\u786e\u4fdd\u8c03\u7528\u6b63\u786e\u7684\u51fd\u6570 - \u5982\u679c\u653b\u51fb\u8005\u5c06\u63a7\u5236\u6d41\u66f4\u6539\u4e3a\u8df3\u8f6c\u5230\u53e6\u4e00\u4e2a\u4ee5ENDBR64\u5f00\u5934\u7684\u529f\u80fd\uff0c\u5219\u72b6\u6001\u673a\u5c06\u4e0d\u4f1a\u62b1\u6028\u5e76\u7ee7\u7eed\u6267\u884c\u7a0b\u5e8f\u3002\u4f46\u662f\uff0c\u8fd9\u4ecd\u7136\u5927\u5927\u964d\u4f4e\u4e86\u653b\u51fb\u8868\u9762\uff0c\u56e0\u4e3a\u5927\u591a\u6570JOP/COP\u653b\u51fb\u76ee\u6807\u6307\u4ee4\u4e2d\u95f4\u529f\u80fd\uff08\u751a\u81f3\u76f4\u63a5\u8df3\u52a8\u201d\u5230\u201c\u6307\u4ee4\u4e2d\uff09\u3002")))}u.isMDXComponent=!0}}]);