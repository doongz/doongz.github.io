"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[86958],{3905:(n,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>d});var _=i(67294);function e(n,t,i){return t in n?Object.defineProperty(n,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[t]=i,n}function r(n,t){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(n);t&&(_=_.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.push.apply(i,_)}return i}function l(n){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){e(n,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(i,t))}))}return n}function c(n,t){if(null==n)return{};var i,_,e=function(n,t){if(null==n)return{};var i,_,e={},r=Object.keys(n);for(_=0;_<r.length;_++)i=r[_],t.indexOf(i)>=0||(e[i]=n[i]);return e}(n,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(_=0;_<r.length;_++)i=r[_],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(n,i)&&(e[i]=n[i])}return e}var s=_.createContext({}),m=function(n){var t=_.useContext(s),i=t;return n&&(i="function"==typeof n?n(t):l(l({},t),n)),i},p=function(n){var t=m(n.components);return _.createElement(s.Provider,{value:t},n.children)},o="mdxType",a={inlineCode:"code",wrapper:function(n){var t=n.children;return _.createElement(_.Fragment,{},t)}},u=_.forwardRef((function(n,t){var i=n.components,e=n.mdxType,r=n.originalType,s=n.parentName,p=c(n,["components","mdxType","originalType","parentName"]),o=m(i),u=e,d=o["".concat(s,".").concat(u)]||o[u]||a[u]||r;return i?_.createElement(d,l(l({ref:t},p),{},{components:i})):_.createElement(d,l({ref:t},p))}));function d(n,t){var i=arguments,e=t&&t.mdxType;if("string"==typeof n||e){var r=i.length,l=new Array(r);l[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=n,c[o]="string"==typeof n?n:e,l[1]=c;for(var m=2;m<r;m++)l[m]=i[m];return _.createElement.apply(null,l)}return _.createElement.apply(null,i)}u.displayName="MDXCreateElement"},75250:(n,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>o,frontMatter:()=>r,metadata:()=>c,toc:()=>m});var _=i(87462),e=(i(67294),i(3905));const r={},l="RISC-V \u5b9a\u65f6\u5668\u53ca\u4e2d\u65ad",c={unversionedId:"Skill/ASM/RISC-V/RISC-V\u5b9a\u65f6\u5668\u53ca\u4e2d\u65ad",id:"Skill/ASM/RISC-V/RISC-V\u5b9a\u65f6\u5668\u53ca\u4e2d\u65ad",title:"RISC-V \u5b9a\u65f6\u5668\u53ca\u4e2d\u65ad",description:"\u6765\u6e90\uff1ahttps://www.icfedu.cn/?s=RISC-V+%E5%AE%9A%E6%97%B6%E5%99%A8%E5%8F%8A%E4%B8%AD%E6%96%AD",source:"@site/docs/Skill/ASM/RISC-V/10-RISC-V\u5b9a\u65f6\u5668\u53ca\u4e2d\u65ad.md",sourceDirName:"Skill/ASM/RISC-V",slug:"/Skill/ASM/RISC-V/RISC-V\u5b9a\u65f6\u5668\u53ca\u4e2d\u65ad",permalink:"/docs/Skill/ASM/RISC-V/RISC-V\u5b9a\u65f6\u5668\u53ca\u4e2d\u65ad",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"skillSidebar",previous:{title:"RISC-V \u603b\u7ebf\u548c\u6d41\u6c34\u7ebf",permalink:"/docs/Skill/ASM/RISC-V/RISC-V\u603b\u7ebf\u548c\u6d41\u6c34\u7ebf"},next:{title:"RISC-V Assembly Programmer's Manual",permalink:"/docs/Skill/ASM/RISC-V/riscv-asm-manual"}},s={},m=[{value:"\u4e00\u3001\u8bfb\u5199\u5b9a\u65f6\u5668\u4e2d\u65ad\u5bc4\u5b58\u5668",id:"\u4e00\u8bfb\u5199\u5b9a\u65f6\u5668\u4e2d\u65ad\u5bc4\u5b58\u5668",level:2},{value:"1\u3001\u8bfb\u5b9a\u65f6\u5668\u4e2d\u65ad\u5bc4\u5b58\u5668",id:"1\u8bfb\u5b9a\u65f6\u5668\u4e2d\u65ad\u5bc4\u5b58\u5668",level:3},{value:"2\u3001\u5199\u5b9a\u65f6\u5668\u4e2d\u65ad\u5bc4\u5b58\u5668",id:"2\u5199\u5b9a\u65f6\u5668\u4e2d\u65ad\u5bc4\u5b58\u5668",level:3},{value:"\u4e8c\u3001\u5b9a\u65f6\u5668\u4e2d\u65ad\u4ea7\u751f",id:"\u4e8c\u5b9a\u65f6\u5668\u4e2d\u65ad\u4ea7\u751f",level:2},{value:"1\u3001fii_irq_clint",id:"1fii_irq_clint",level:3},{value:"2\u3001fii_clint_top",id:"2fii_clint_top",level:3},{value:"3\u3001fii_clint",id:"3fii_clint",level:3}],p={toc:m};function o(n){let{components:t,...r}=n;return(0,e.kt)("wrapper",(0,_.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,e.kt)("h1",{id:"risc-v-\u5b9a\u65f6\u5668\u53ca\u4e2d\u65ad"},"RISC-V \u5b9a\u65f6\u5668\u53ca\u4e2d\u65ad"),(0,e.kt)("p",null,"\u6765\u6e90\uff1a",(0,e.kt)("a",{parentName:"p",href:"https://www.icfedu.cn/?s=RISC-V+%E5%AE%9A%E6%97%B6%E5%99%A8%E5%8F%8A%E4%B8%AD%E6%96%AD"},"https://www.icfedu.cn/?s=RISC-V+%E5%AE%9A%E6%97%B6%E5%99%A8%E5%8F%8A%E4%B8%AD%E6%96%AD")),(0,e.kt)("h2",{id:"\u4e00\u8bfb\u5199\u5b9a\u65f6\u5668\u4e2d\u65ad\u5bc4\u5b58\u5668"},"\u4e00\u3001\u8bfb\u5199\u5b9a\u65f6\u5668\u4e2d\u65ad\u5bc4\u5b58\u5668"),(0,e.kt)("h3",{id:"1\u8bfb\u5b9a\u65f6\u5668\u4e2d\u65ad\u5bc4\u5b58\u5668"},"1\u3001\u8bfb\u5b9a\u65f6\u5668\u4e2d\u65ad\u5bc4\u5b58\u5668"),(0,e.kt)("p",null,"\u4e4b\u524d\u5728",(0,e.kt)("a",{parentName:"p",href:"https://www.icfedu.cn/archives/7742"},"RISC-V LSU\uff0cSRAM\uff0cGPIO\u6a21\u5757\uff081\uff09exu_lsu"),"\u6a21\u5757\u4e2d\u4ecb\u7ecd\u8fc7exu_lsu\u6a21\u5757\u53ef\u4ee5\u8ba9RISC-V CPU\u8bbf\u95ee\u5916\u8bbe\u6a21\u5757\uff0c\u672c\u6587\u5c06\u4ecb\u7ecd\u4e4b\u524d\u6ca1\u6709\u63d0\u5230\u7684exu_lsu\u6a21\u5757\u4e0b\u7684\u5b50\u6a21\u5757fii_timer_lsu\u3002"),(0,e.kt)("p",null,(0,e.kt)("img",{alt:"139",src:i(28267).Z,width:"1760",height:"1226"})),(0,e.kt)("p",null,"\u9996\u5148\uff0c\u53c2\u8003",(0,e.kt)("a",{parentName:"p",href:"https://www.icfedu.cn/archives/7952"},"FII RISC-V Address Map"),"\u4e0a\u5bf9\u5b9a\u65f6\u5668\u4e2d\u65ad(timer interrupt)\u6709\u5173\u7684\u5bc4\u5b58\u5668\u5b9a\u4e49\uff0c\u5982\u56fe1\u6240\u793a\u3002\u53ef\u4ee5\u770b\u5230\u6709\u5b9a\u65f6\u5668\u63a7\u5236\u5bc4\u5b58\u5668\uff0c\u5b9a\u65f6\u5668\u503c\u7684\u4f4e32\u4f4d\u548c\u9ad832\u4f4d\u5bc4\u5b58\u5668\uff0c\u53ca\u5b9a\u65f6\u5668\u6bd4\u8f83\u503c\u7684\u4f4e32\u4f4d\u548c\u9ad832\u4f4d\u5bc4\u5b58\u5668\u3002\u5176\u76f8\u5173\u8bfb(load)\u7684\u4ee3\u7801\u5728exu_lsu\u6a21\u5757\u4e2d\uff0c\u89c1\u4e0b\u9762\u4ee3\u7801\uff1a"),(0,e.kt)("p",null,"\u56fe1 \u5b9a\u65f6\u5668\u4e2d\u65ad\u5bc4\u5b58\u5668"),(0,e.kt)("p",null,(0,e.kt)("img",{alt:"139",src:i(63494).Z,width:"665",height:"261"})),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-verilog"},"parameter [ 31: 0 ] TMR_BASEADDR = 32'h0200_0000//\u8ba1\u65f6\u5668\u4e2d\u65ad\u5bc4\u5b58\u5668\u57fa\u5730\u5740\u53c2\u6570\nwire t_sft_cs   = ( i_D_PC[ 31: 16 ] == TMR_BASEADDR[ 31: 16 ] ) ? 1'b1 : 1'b0;//\u5b9a\u65f6\u5668\u6709\u5173\u7684\u5bc4\u5b58\u5668\u7247\u9009\nwire sft_cs     = t_sft_cs & ( ( ~i_D_PC[ 12 ] ) & ( i_D_PC[ 5: 2 ] == 0 ) );\nwire tm_ctrl_cs = t_sft_cs & ( ( ~i_D_PC[ 12 ] ) & ( i_D_PC[ 5: 2 ] == 1 ) );//\u5b9a\u65f6\u5668\u63a7\u5236\u5bc4\u5b58\u5668\u7247\u9009\nwire t_cs0 = t_sft_cs & ( ( ~i_D_PC[ 12 ] ) & ( i_D_PC[ 5: 2 ] == 2 ) );//\u5b9a\u65f6\u5668\u503c\u7684\u4f4e32\u4f4d\u5bc4\u5b58\u5668\u7247\u9009\nwire t_cs1 = t_sft_cs & ( ( ~i_D_PC[ 12 ] ) & ( i_D_PC[ 5: 2 ] == 3 ) );//\u5b9a\u65f6\u5668\u503c\u7684\u9ad832\u4f4d\u5bc4\u5b58\u5668\u7247\u9009\nwire tcmp_cs0 = t_sft_cs & ( ( ~i_D_PC[ 12 ] ) & ( i_D_PC[ 5: 2 ] == 4 ) );//\u5b9a\u65f6\u5668\u6bd4\u8f83\u503c\u7684\u4f4e32\u4f4d\u5bc4\u5b58\u5668\u7247\u9009\nwire tcmp_cs1 = t_sft_cs & ( ( ~i_D_PC[ 12 ] ) & ( i_D_PC[ 5: 2 ] == 5 ) );//\u5b9a\u65f6\u5668\u6bd4\u8f83\u503c\u7684\u9ad832\u4f4d\u5bc4\u5b58\u5668\u7247\u9009\n\nwire [ 31: 0 ] ls_rb_d_t_sft = sft_cs     ? o_sft_int_v ://\u6839\u636e\u7247\u9009\u4fe1\u53f7\uff0c\u786e\u5b9a\u8981\u8bfb\u7684\u5bc4\u5b58\u5668\n                             ( tm_ctrl_cs ? o_tm_ctrl :\n                                  ( t_cs0 ? i_timer_l :\n                                  ( t_cs1 ? i_timer_h :\n                               ( tcmp_cs0 ? o_tcmp_l :\n                               ( tcmp_cs1 ? o_tcmp_h : o_CPU_dout ) ) ) ) );\n\n\nwire [ 31: 0 ] ls_rb_d = mem_cs ? mem_dout : ( GPIO_cs ? rb_GPIO_d : ( UART_cs ? o_UART_dout : ls_rb_d_t_sft ) );//\u6839\u636e\u7247\u9009\u4fe1\u53f7\uff0c\u786e\u5b9a\u8981\u8bfb\u7684\u5bc4\u5b58\u5668\n\n\n\nalways@( * )//\u7701\u7565\u4e86\u8be5\u4ee3\u7801\u5757\u7684\u90e8\u5206\u4ee3\u7801\nbegin\nif ( i_LOAD )\nbegin //&mem_init_rdy\n    case ( i_load_instr ) // i_load_instr ={rv32i_lbu, rv32i_lb, rv32i_lhu, rv32i_lh, rv32i_lw};\n    5'b00001:\n    begin //rv32i_lw\n        o_wb_data <= ls_rb_d;\n    end\n    5'b00010:\n    begin //rv32i_lh\n        o_wb_data <= { { 16{ ls_rb_d[ 15 ] } }, ls_rb_d[ 15: 0 ] };\n    end\n    5'b00100:\n    begin //rv32i_lhu\n        o_wb_data <= { { 16{ 1'b0 } }, ls_rb_d[ 15: 0 ] };\n    end\n    5'b01000:\n    begin //rv32i_lb\n        o_wb_data <= { { 24{ ls_rb_d[ 7 ] } }, ls_rb_d[ 7: 0 ] };\n    end\n    5'b10000:\n    begin //rv32i_lbu\n        o_wb_data <= { { 24{ 1'b0 } }, ls_rb_d[ 7: 0 ] };\n    end\ndefault: ;\n\nendcase\nend\n")),(0,e.kt)("h3",{id:"2\u5199\u5b9a\u65f6\u5668\u4e2d\u65ad\u5bc4\u5b58\u5668"},"2\u3001\u5199\u5b9a\u65f6\u5668\u4e2d\u65ad\u5bc4\u5b58\u5668"),(0,e.kt)("p",null,"\u5b9a\u65f6\u5668\u4e2d\u65ad\u5bc4\u5b58\u5668\u7684\u5199(store)\u662f\u5728fii_timer_lsu\u6a21\u5757\u4e2d\u5b8c\u6210\u7684\u3002\u901a\u8fc7\u4ece\u5916\u5c42\u6a21\u5757exu_lsu\u4e2d\u5f15\u8fdb\u7684\u5199\u4f7f\u80fd\u4fe1\u53f7\uff0c\u4ee5\u53ca\u5404\u4e2a\u7247\u9009\u4fe1\u53f7\u7b49\uff0c\u9009\u62e9\u76f8\u5e94\u8981\u5199\u7684\u5bc4\u5b58\u5668\u3002\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-verilog"},"wire [31: 0] cpu_data_in = i_rs2_val << {i_D_PC[1:0],3'b000};//exu_lsu\u6a21\u5757\u4e2d\u7684cpu_data_in\u6700\u540e\u4f20\u9012\u7ed9\u4e86i_sft_timer_din\n\nalways@( posedge clk or negedge rst_n )\nif ( !rst_n )//\u590d\u4f4d\nbegin\n    o_tm_ctrl <= 0;//\u521d\u59cb\u503c\n    o_sft_int_v <= 0;\n    o_timer_l <= 0;\n    o_timer_h <= 0;\n    o_tcmp_l <= 0;\n    o_tcmp_h <= 16'h8000;\n    o_timer_valid <= 0;\nend\nelse\nbegin\n    o_timer_valid <= 0;\n\n    if ( i_tmr_sft_we )//\u5199\u4f7f\u80fd\u4fe1\u53f7\n    begin\n        if ( i_tcs0 )//\u5b9a\u65f6\u5668\u503c\u7684\u4f4e32\u4f4d\u5bc4\u5b58\u5668\u7247\u9009\n        begin\n            o_timer_l <= i_sft_timer_din;//\u5199\u8fdb\u5b9a\u65f6\u5668\u503c\u7684\u4f4e32\u4f4d\u5bc4\u5b58\u5668\n            o_timer_valid[ 0 ] <= 1'b1;\n        end\n\n        if ( i_tcs1 )//\u5b9a\u65f6\u5668\u503c\u7684\u9ad832\u4f4d\u5bc4\u5b58\u5668\u7247\u9009\n        begin\n            o_timer_h <= i_sft_timer_din;//\u5199\u8fdb\u5b9a\u65f6\u5668\u503c\u7684\u9ad832\u4f4d\u5bc4\u5b58\u5668\n            o_timer_valid[ 1 ] <= 1'b1;\n        end\n\n        if ( i_tcmp_cs0 )//\u5b9a\u65f6\u5668\u6bd4\u8f83\u503c\u7684\u4f4e32\u4f4d\u5bc4\u5b58\u5668\u7247\u9009\n            o_tcmp_l <= i_sft_timer_din;//\u5199\u8fdb\u5b9a\u65f6\u5668\u6bd4\u8f83\u503c\u7684\u4f4e32\u4f4d\u5bc4\u5b58\u5668\n\n        if ( i_tcmp_cs1 )//\u5b9a\u65f6\u5668\u6bd4\u8f83\u503c\u7684\u9ad832\u4f4d\u5bc4\u5b58\u5668\u7247\u9009\n            o_tcmp_h <= i_sft_timer_din;//\u5199\u8fdb\u5b9a\u65f6\u5668\u6bd4\u8f83\u503c\u7684\u9ad832\u4f4d\u5bc4\u5b58\u5668\n\n        if ( i_tm_ctrl_cs )//\u5b9a\u65f6\u5668\u63a7\u5236\u5bc4\u5b58\u5668\u7247\u9009\n            o_tm_ctrl <= i_sft_timer_din;//\u5199\u8fdb\u5b9a\u65f6\u5668\u63a7\u5236\u5bc4\u5b58\u5668\n    end\nend\n\n")),(0,e.kt)("h2",{id:"\u4e8c\u5b9a\u65f6\u5668\u4e2d\u65ad\u4ea7\u751f"},"\u4e8c\u3001\u5b9a\u65f6\u5668\u4e2d\u65ad\u4ea7\u751f"),(0,e.kt)("h3",{id:"1fii_irq_clint"},"1\u3001fii_irq_clint"),(0,e.kt)("p",null,"\u5728\u5199\u8fdb\u5b9a\u65f6\u5668\u4e2d\u65ad\u76f8\u5173\u5bc4\u5b58\u5668\u540e\uff0c\u7531\u6a21\u5757exu_lsu\u5411\u4e0a\u4e00\u7ea7\u7ea7\u8f93\u51fa\uff0c\u6700\u540e\u5728fii_riscv_cpu\u5185\u4f20\u9012\u7ed9fii_irq_clint\u6a21\u5757\u3002irq\u8868\u793ainterrupt request\uff0c\u610f\u4e3a\u4e2d\u65ad\u8bf7\u6c42\u3002clint\u4e3acore level interrupt\uff0c\u610f\u4e3a\u6838\u5fc3\u7ea7\u4e2d\u65ad\u3002\u8fd9\u91cc\uff0c\u8be5\u6a21\u5757\u53ea\u4ea7\u751f\u4e24\u4e2a\u4e2d\u65ad\u8bf7\u6c42\uff0c\u8f6f\u4ef6\u4e2d\u65ad\u548c\u5b9a\u65f6\u5668\u4e2d\u65ad\u3002\u56e0\u4e3a\u8f6f\u4ef6\u4e2d\u65ad\u6bd4\u8f83\u7b80\u5355\uff0c\u53ea\u9700\u8981\u5199\u5165\u8f6f\u4ef6\u4e2d\u65ad\u5bc4\u5b58\u5668\u5c31\u80fd\u53d1\u9001\u8f6f\u4ef6\u4e2d\u65ad\u8bf7\u6c42\uff0c\u8fd9\u91cc\u4e0d\u505a\u591a\u7684\u8ba8\u8bba\u3002"),(0,e.kt)("p",null,"fii_irq_clint\u63a5\u6536\u5230\u548c\u5b9a\u65f6\u5668\u4e2d\u65ad\u6709\u5173\u7684\u4fe1\u53f7\u540e\uff0c\u76f4\u63a5\u4f20\u9012\u7ed9\u4e86\u4e0b\u4e00\u7ea7\u6a21\u5757\uff0cfii_clint_top\u3002fii_irq_clint\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-verilog"},"module fii_irq_clint\n(\n    input sys_clk,//\u7cfb\u7edf\u65f6\u949f\n\n    input [ 31: 0 ] i_sft_int_v,//\u8f6f\u4ef6\u4e2d\u65ad\u5bc4\u5b58\u5668\n\n    input [ 31: 0 ] i_timer_l,//\u5b9a\u65f6\u5668\u4f4e32\u4f4d\u5bc4\u5b58\u5668\n    input [ 31: 0 ] i_timer_h,//\u5b9a\u65f6\u5668\u9ad832\u4f4d\u5bc4\u5b58\u5668\n\n    output [ 31: 0 ] o_timer_l,//\u8f93\u51fa\u73b0\u5728\u7684\u5b9a\u65f6\u5668\u4f4e32\u4f4d\u5bc4\u5b58\u5668\n    output [ 31: 0 ] o_timer_h,//\u8f93\u51fa\u73b0\u5728\u7684\u5b9a\u65f6\u5668\u9ad832\u4f4d\u5bc4\u5b58\u5668\n\n    input [ 31: 0 ] i_tcmp_l,//\u6bd4\u8f83\u5b9a\u65f6\u5668\u4f4e32\u4f4d\u5bc4\u5b58\u5668\n    input [ 31: 0 ] i_tcmp_h,//\u6bd4\u8f83\u5b9a\u65f6\u5668\u9ad832\u4f4d\u5bc4\u5b58\u5668\n\n    input [ 1: 0 ] i_timer_valid,//\u4e24\u4e2abit\u5206\u522b\u63a7\u5236\u5b9a\u65f6\u5668\u7684\u4f4e/\u9ad832\u4f4d\u5bc4\u5b58\u5668\n    input [ 31: 0 ] i_tm_ctrl,//\u5b9a\u65f6\u5668\u63a7\u5236\u5bc4\u5b58\u5668\n\n    output clint_tmr_irq,//\u8f93\u51fa\u5b9a\u65f6\u5668\u4e2d\u65ad\u8bf7\u6c42\n    output clint_sft_irq,//\u8f93\u51fa\u8f6f\u4ef6\u4e2d\u65ad\u8bf7\u6c42\n\n    input l_clk,//\u4f4e\u9891\u65f6\u949f\n    input rst_n//\u590d\u4f4d\u4fe1\u53f7\n);\n\nfii_clint_top u_fii_clint_top (\n    .sys_clk       ( sys_clk ),\n\n    .i_sft_int_v   ( i_sft_int_v ),\n    .i_timer_l     ( i_timer_l ),\n    .i_timer_h     ( i_timer_h ),\n\n    .o_timer_l     ( o_timer_l ),\n    .o_timer_h     ( o_timer_h ),\n\n    .i_tcmp_l      ( i_tcmp_l ),\n    .i_tcmp_h      ( i_tcmp_h ),\n\n    .i_timer_valid ( i_timer_valid ),\n    .i_tm_ctrl     ( i_tm_ctrl ),\n\n    .l_clk         ( l_clk ),\n    .o_mtip        ( clint_tmr_irq ),\n    .o_msip        ( clint_sft_irq ),\n\n    .rst_n         ( rst_n )\n);\n\n\nendmodule\n")),(0,e.kt)("h3",{id:"2fii_clint_top"},"2\u3001fii_clint_top"),(0,e.kt)("p",null,"\u5728\u8fd9\u4e2a\u6a21\u5757\u5185\uff0c\u9664\u4e86\u7ee7\u7eed\u5c06\u6709\u5173\u5b9a\u65f6\u5668\u4e2d\u65ad\u4fe1\u53f7\u4f20\u7ed9\u4e0b\u4e00\u5c42\u6a21\u5757fii_clint\u5916\uff0c\u8fd9\u91cc\u8fd8\u505a\u4e86\u4e00\u4e2al_clk\u7684\u5206\u9891\u3002\u4ece\u65f6\u949f\u7684IP\u6838\u53ef\u77e5\uff0c\u6709\u4e24\u4e2a\u4e3b\u8981\u4f7f\u7528\u7684\u65f6\u949f\u9891\u7387\uff0c\u5206\u522b\u662f50 MHz\u548c8.3888 MHz\uff0c\u5982\u56fe1\u6240\u793a\u3002\u8fd9\u91cc\u4e3b\u8981\u5c0650MHz\u7684\u65f6\u949f\u4f5c\u4e3a\u7cfb\u7edf\u65f6\u949f\uff0c\u4e5f\u5c31\u662f\u5f88\u591a\u6a21\u5757\u4e2d\u51fa\u73b0\u7684sys_clk\u3002\u800c8.3888 MHz\u7684\u65f6\u949f\u5219\u662f\u4e0a\u5c42\u6a21\u5757fii_irq_clint\u5f15\u8fdb\u6765\u7684l_clk\u3002fii_clint_top\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,e.kt)("p",null,"\u56fe1 CPU\u65f6\u949fIP\u6838"),(0,e.kt)("p",null,(0,e.kt)("img",{src:i(1589).Z,width:"899",height:"110"})),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-verilog"},"module fii_clint_top (\n    input sys_clk,//\u7cfb\u7edf\u65f6\u949f\n\n    input l_clk,//\u4f4e\u9891\u65f6\u949f\n\n    input [31:0] i_sft_int_v,\n    input [31:0] i_timer_l,//\u5b9a\u65f6\u5668\u4f4e32\u4f4d\u5bc4\u5b58\u5668\n    input [31:0] i_timer_h,//\u5b9a\u65f6\u5668\u9ad832\u4f4d\u5bc4\u5b58\u5668\n\n    output [31:0] o_timer_l,//\u8f93\u51fa\u73b0\u5728\u7684\u5b9a\u65f6\u5668\u4f4e32\u4f4d\u5bc4\u5b58\u5668\n    output [31:0] o_timer_h,//\u8f93\u51fa\u73b0\u5728\u7684\u5b9a\u65f6\u5668\u9ad832\u4f4d\u5bc4\u5b58\u5668\n\n    input [31:0] i_tcmp_l,//\u6bd4\u8f83\u5b9a\u65f6\u5668\u4f4e32\u4f4d\u5bc4\u5b58\u5668\n    input [31:0] i_tcmp_h,//\u6bd4\u8f83\u5b9a\u65f6\u5668\u9ad832\u4f4d\u5bc4\u5b58\u5668\n\n    input [1:0] i_timer_valid,//\u4e24\u4e2abit\u5206\u522b\u63a7\u5236\u5b9a\u65f6\u5668\u7684\u4f4e/\u9ad832\u4f4d\u5bc4\u5b58\u5668\n    input [31:0] i_tm_ctrl,//\u5b9a\u65f6\u5668\u63a7\u5236\u5bc4\u5b58\u5668\n\n    output o_mtip,//\u8f93\u51fa\u5b9a\u65f6\u5668\u4e2d\u65ad\u8bf7\u6c42\n    output o_msip,//\u8f93\u51fa\u8f6f\u4ef6\u4e2d\u65ad\u8bf7\u6c42\n\n    input rst_n//\u590d\u4f4d\u4fe1\u53f7\n);\n\n\nreg [7:0] rtc_r = 0;\nalways @ (posedge l_clk)//\u5728\u4f4e\u9891\u65f6\u949f\u4e0b\u7ee7\u7eed\u5206\u9891\nrtc_r <= rtc_r + 1;\n\nreg rtc_sys = 0;\nalways @ (posedge sys_clk )//\u5728\u9ad8\u901f\u7cfb\u7edf\u65f6\u949f\u4e0b\u6293\u53d6\u5bbd\u4fe1\u53f7(128\u500d\u5bbd\u7684rtc_r\u4fe1\u53f7)\nrtc_sys <= rtc_r[7];\n\n\nreg [1:0] rtc_toggle = 0;\nalways @ (posedge sys_clk or negedge rst_n)//\u5728\u7cfb\u7edf\u65f6\u949f\u4e0b\nif(!rst_n) rtc_toggle <= 0;\nelse if(i_tm_ctrl[31])//\u5982\u679c\u63a7\u5236\u5bc4\u5b58\u5668\u6709\u6548\nbegin\n    rtc_toggle <= {rtc_toggle[0], rtc_sys};//\u6293\u53d6rtc_sys\u7684\u79fb\u4f4d\u4fe1\u53f7\nend\n\nwire rtcTick = (rtc_toggle == 2'b01) ? 1'b1 : 1'b0;//\u5982\u679crtc_sys\u6709\u4e0a\u5347\u6cbf\uff0crtcTick\u5373\u62c9\u9ad8(256\u500d\u5206\u9891\u8fbe\u523032.768 kHz)\n\n\n\nfii_clint u_fii_clint (\n    .sys_clk       ( sys_clk ),\n\n    .i_sft_int_v   ( i_sft_int_v ),\n    .i_timer_l     ( i_timer_l ),\n    .i_timer_h     ( i_timer_h ),\n\n    .o_timer_l     ( o_timer_l ),\n    .o_timer_h     ( o_timer_h ),\n\n    .i_tcmp_l      ( i_tcmp_l ),\n    .i_tcmp_h      ( i_tcmp_h ),\n\n    .i_timer_valid ( i_timer_valid ),\n    .i_tm_ctrl     ( i_tm_ctrl ),\n\n    .o_mtip        ( o_mtip ),\n    .o_msip        ( o_msip ),\n    .i_rtcTick     ( rtcTick ),\n\n    .rst_n         ( rst_n )\n);\n\nendmodule\n")),(0,e.kt)("h3",{id:"3fii_clint"},"3\u3001fii_clint"),(0,e.kt)("p",null,"\u771f\u6b63\u4ea7\u751f\u4e2d\u65ad\u8bf7\u6c42\u7684\u4fe1\u53f7\u662f\u53d1\u751f\u5728fii_clint\u6a21\u5757\u4e0b\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-verilog"},"module fii_clint\n(\n    input sys_clk,//\u7cfb\u7edf\u65f6\u949f\n\n    input [ 31: 0 ] i_sft_int_v,\n    input [ 31: 0 ] i_timer_l,//\u5b9a\u65f6\u5668\u4f4e32\u4f4d\u5bc4\u5b58\u5668\n    input [ 31: 0 ] i_timer_h,//\u5b9a\u65f6\u5668\u9ad832\u4f4d\u5bc4\u5b58\u5668\n\n    output [ 31: 0 ] o_timer_l,//\u8f93\u51fa\u73b0\u5728\u7684\u5b9a\u65f6\u5668\u4f4e32\u4f4d\u5bc4\u5b58\u5668\n    output [ 31: 0 ] o_timer_h, //\u8f93\u51fa\u73b0\u5728\u7684\u5b9a\u65f6\u5668\u9ad832\u4f4d\u5bc4\u5b58\u5668\n\n    input [ 31: 0 ] i_tcmp_l,//\u6bd4\u8f83\u5b9a\u65f6\u5668\u4f4e32\u4f4d\u5bc4\u5b58\u5668\n    input [ 31: 0 ] i_tcmp_h,//\u6bd4\u8f83\u5b9a\u65f6\u5668\u9ad832\u4f4d\u5bc4\u5b58\u5668\n\n    input [ 1: 0 ] i_timer_valid,//\u4e24\u4e2abit\u5206\u522b\u63a7\u5236\u5b9a\u65f6\u5668\u7684\u4f4e/\u9ad832\u4f4d\u5bc4\u5b58\u5668\n    input [ 31:0 ] i_tm_ctrl,//\u5b9a\u65f6\u5668\u63a7\u5236\u5bc4\u5b58\u5668\n\n    output o_mtip,//\u8f93\u51fa\u5b9a\u65f6\u5668\u4e2d\u65ad\u8bf7\u6c42\n    output o_msip,//\u8f93\u51fa\u8f6f\u4ef6\u4e2d\u65ad\u8bf7\u6c42\n\n    input i_rtcTick,//32.768 kHz\u65f6\u949f\n\n    input rst_n//\u590d\u4f4d\u4fe1\u53f7\n);\n\nreg [ 31: 0 ] time_l;\nreg [ 31: 0 ] time_h;\nwire [ 63: 0 ] timer;\nwire [ 31: 0 ] timecmp_l;\nwire [ 31: 0 ] timecmp_h;\nwire ipi_0; //soft interrupt\n\n//\u751f\u6210\u5b9a\u65f6\u5668\u4e2d\u65ad\u8bf7\u6c42\u7684\u6761\u4ef6\uff1a\u5b9a\u65f6\u5668\u5bc4\u5b58\u5668\u7684\u503c\u662f\u5426\u8d85\u8fc7\u6bd4\u8f83\u5b9a\u65f6\u5668\u5bc4\u5b58\u5668\u7684\u503c\nassign o_mtip = ( { time_h, time_l } >= { timecmp_h, timecmp_l } ) ? 1'b1 : 1'b0;\nassign o_msip = ipi_0;\nassign timer  = { time_h, time_l } + 64'h1;//\u5b9a\u65f6\u5668\u5bc4\u5b58\u5668 + 1 \u8ba1\u6570\n\n\n\nalways @( posedge sys_clk or negedge rst_n )\nif ( !rst_n )\nbegin\n    time_l <= 32'h0;\nend\nelse\nbegin\n    if ( i_timer_valid[ 0 ] )//\u4f4e\u4f4dbit\u63a7\u5236\u5b9a\u65f6\u5668\u7684\u4f4e32\u4f4d\u5bc4\u5b58\u5668\n        time_l <= i_timer_l;\n    else if ( i_rtcTick & i_tm_ctrl[0]) // \u572832.768 kHz\u7684\u65f6\u949f\u548c\u63a7\u5236\u5bc4\u5b58\u5668\u6709\u6548\u65f6\n        time_l <= timer[ 31: 0 ];//\u9501\u5b58\uff0c\u4f7f\u4e0a\u9762\u7684\u5b9a\u65f6\u5668\u8ba1\u6570\u6709\u6548\nend\n\n\n\n\nalways @( posedge sys_clk or negedge rst_n )\nif ( !rst_n )\nbegin\n    time_h <= 32'h0;\nend\nelse\nbegin\n    if ( i_timer_valid[ 1 ] )//\u9ad8\u4f4dbit\u63a7\u5236\u5b9a\u65f6\u5668\u7684\u9ad832\u4f4d\u5bc4\u5b58\u5668\n        time_h <= i_timer_h;\n    else if ( i_rtcTick & i_tm_ctrl[0])// \u572832.768 kHz\u7684\u65f6\u949f\u548c\u63a7\u5236\u5bc4\u5b58\u5668\u6709\u6548\u65f6\n        time_h <= timer[ 63: 32 ];//\u9501\u5b58\uff0c\u4f7f\u4e0a\u9762\u7684\u5b9a\u65f6\u5668\u8ba1\u6570\u6709\u6548\nend\n\n\n\n//\u5199\u8fdb\u6bd4\u8f83\u5b9a\u65f6\u5668\u5bc4\u5b58\u5668\u7684\u503c\n\nassign timecmp_l = i_tcmp_l;\nassign timecmp_h = i_tcmp_h;\n\nassign ipi_0     = i_sft_int_v[ 0 ];//\u8f93\u51fa\n\nassign o_timer_l = time_l;//\u8f93\u51fa\nassign o_timer_h = time_h;//\u8f93\u51fa\n\nendmodule\n")))}o.isMDXComponent=!0},28267:(n,t,i)=>{i.d(t,{Z:()=>_});const _=i.p+"assets/images/139-d4390b6147a3c366867df3bc1d6d3ed0.jpeg"},63494:(n,t,i)=>{i.d(t,{Z:()=>_});const _=i.p+"assets/images/140-bfc9b6a783c33fdb2be67b6d7fd69b5c.jpeg"},1589:(n,t,i)=>{i.d(t,{Z:()=>_});const _=i.p+"assets/images/141-c14fdd19a2b57f73d5d7aad40e9fe9b0.jpeg"}}]);