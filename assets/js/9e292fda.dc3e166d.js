"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[38014],{3905:(t,n,e)=>{e.d(n,{Zo:()=>p,kt:()=>b});var r=e(67294);function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach((function(n){o(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function l(t,n){if(null==t)return{};var e,r,o=function(t,n){if(null==t)return{};var e,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var s=r.createContext({}),c=function(t){var n=r.useContext(s),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},p=function(t){var n=c(t.components);return r.createElement(s.Provider,{value:n},t.children)},u="mdxType",k={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(t,n){var e=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=c(e),d=o,b=u["".concat(s,".").concat(d)]||u[d]||k[d]||a;return e?r.createElement(b,i(i({ref:n},p),{},{components:e})):r.createElement(b,i({ref:n},p))}));function b(t,n){var e=arguments,o=n&&n.mdxType;if("string"==typeof t||o){var a=e.length,i=new Array(a);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=t,l[u]="string"==typeof t?t:o,i[1]=l;for(var c=2;c<a;c++)i[c]=e[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,e)}d.displayName="MDXCreateElement"},17773:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=e(87462),o=(e(67294),e(3905));const a={},i="\u7ed3\u6784\u4f53",l={unversionedId:"Skill/C++/\u57fa\u7840\u77e5\u8bc6/\u7ed3\u6784\u4f53-struct",id:"Skill/C++/\u57fa\u7840\u77e5\u8bc6/\u7ed3\u6784\u4f53-struct",title:"\u7ed3\u6784\u4f53",description:"\u7ed3\u6784\u4f53\u662f C++ \u4e2d\u53e6\u4e00\u79cd\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u53ef\u7528\u7684\u6570\u636e\u7c7b\u578b\uff0c\u5141\u8bb8\u5b58\u50a8\u4e0d\u540c\u7c7b\u578b\u7684\u6570\u636e\u9879",source:"@site/docs/Skill/C++/1-\u57fa\u7840\u77e5\u8bc6/10-\u7ed3\u6784\u4f53-struct.md",sourceDirName:"Skill/C++/1-\u57fa\u7840\u77e5\u8bc6",slug:"/Skill/C++/\u57fa\u7840\u77e5\u8bc6/\u7ed3\u6784\u4f53-struct",permalink:"/docs/Skill/C++/\u57fa\u7840\u77e5\u8bc6/\u7ed3\u6784\u4f53-struct",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"skillSidebar",previous:{title:"\u5f15\u7528",permalink:"/docs/Skill/C++/\u57fa\u7840\u77e5\u8bc6/\u5f15\u7528-&"},next:{title:"\u547d\u540d\u7a7a\u95f4",permalink:"/docs/Skill/C++/\u57fa\u7840\u77e5\u8bc6/\u547d\u540d\u7a7a\u95f4-namespace"}},s={},c=[{value:"\u7ed3\u6784\u4f53\u4f5c\u4e3a\u5165\u53c2\u548c\u51fa\u53c2",id:"\u7ed3\u6784\u4f53\u4f5c\u4e3a\u5165\u53c2\u548c\u51fa\u53c2",level:2},{value:"\u6307\u5411\u7ed3\u6784\u4f53\u7684\u6307\u9488",id:"\u6307\u5411\u7ed3\u6784\u4f53\u7684\u6307\u9488",level:2},{value:"typedef \u5173\u952e\u5b57",id:"typedef-\u5173\u952e\u5b57",level:2}],p={toc:c};function u(t){let{components:n,...e}=t;return(0,o.kt)("wrapper",(0,r.Z)({},p,e,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u7ed3\u6784\u4f53"},"\u7ed3\u6784\u4f53"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7ed3\u6784\u4f53"),"\u662f C++ \u4e2d\u53e6\u4e00\u79cd\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u53ef\u7528\u7684\u6570\u636e\u7c7b\u578b\uff0c\u5141\u8bb8\u5b58\u50a8\u4e0d\u540c\u7c7b\u578b\u7684\u6570\u636e\u9879"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>\n#include <cstring>\n\nusing namespace std;\n\n// \u58f0\u660e\u4e00\u4e2a\u7ed3\u6784\u4f53\u7c7b\u578b Book\nstruct Book\n{\n    char title[50];\n    int id;\n    float stars;\n};\n\nint main()\n{\n    Book bk1; // \u5b9a\u4e49\u7ed3\u6784\u4f53\u7c7b\u578b Book \u7684\u53d8\u91cf bk1\n    strcpy(bk1.title, "C-Learning");\n    bk1.id = 123;\n    bk1.stars = 6.5;\n\n    Book bk2 = {"Python-Learning", 456, 9.6}; // \u58f0\u660e\u65f6\u8d4b\u503c\n\n    // \u8f93\u51fa bk1 \u4fe1\u606f\n    cout << "title: " << bk1.title << " ";\n    cout << "id: " << bk1.id << " ";\n    cout << "stars: " << bk1.stars << endl;\n    // title: C-Learning id: 123 stars: 6.5\n\n    // \u8f93\u51fa bk2 \u4fe1\u606f\n    cout << "title: " << bk2.title << " ";\n    cout << "id: " << bk2.id << " ";\n    cout << "stars: " << bk2.stars << endl;\n    // title: Python-Learning id: 456 stars: 9.6\n\n    return 0;\n}\n')),(0,o.kt)("h2",{id:"\u7ed3\u6784\u4f53\u4f5c\u4e3a\u5165\u53c2\u548c\u51fa\u53c2"},"\u7ed3\u6784\u4f53\u4f5c\u4e3a\u5165\u53c2\u548c\u51fa\u53c2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>\n#include <cstring>\n\nusing namespace std;\n\n// \u58f0\u660e\u4e00\u4e2a\u7ed3\u6784\u4f53\u7c7b\u578b Book\nstruct Book\n{\n    char title[50];\n    int id;\n    float stars;\n};\n\nBook getMaxBook(Book, Book); // \u51fd\u6570\u58f0\u660e\n// struct Book getMaxBook(struct Book, struct Book); // \u4e5f\u53ef\u4ee5\u52a0\u4e0a struct\n\nBook getMaxBook(Book b1, Book b2)\n{\n    if (b1.stars > b2.stars)\n    {\n        return b1;\n    }\n    return b2;\n}\n\nint main()\n{\n    Book bk1 = {"C-Learning", 123, 6.5};\n    Book bk2 = {"Python-Learning", 456, 9.6};\n\n    Book maxbk = getMaxBook(bk1, bk2);\n    cout << "title: " << maxbk.title << " ";\n    cout << "id: " << maxbk.id << " ";\n    cout << "stars: " << maxbk.stars << endl;\n    // title: Python-Learning id: 456 stars: 9.6\n\n    return 0;\n}\n')),(0,o.kt)("h2",{id:"\u6307\u5411\u7ed3\u6784\u4f53\u7684\u6307\u9488"},"\u6307\u5411\u7ed3\u6784\u4f53\u7684\u6307\u9488"),(0,o.kt)("p",null,"\u5411\u7ed3\u6784\u7684\u6307\u9488\u8bbf\u95ee\u7ed3\u6784\u7684\u6210\u5458\uff0c\u5fc5\u987b\u4f7f\u7528 -> \u8fd0\u7b97\u7b26"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>\n#include <cstring>\n\nusing namespace std;\n\n// \u58f0\u660e\u4e00\u4e2a\u7ed3\u6784\u4f53\u7c7b\u578b Book\nstruct Book\n{\n    char title[50];\n    int id;\n    float stars;\n};\n\nBook *setStars(Book *); // \u5165\u53c2\u3001\u51fa\u53c2\u4e3a\u7ed3\u6784\u4f53\u6307\u9488\n\nBook *setStars(Book *book)\n{\n    book->stars = 10; // \u8bbf\u95ee\u7ed3\u6784\u7684\u6210\u5458\n    return book;\n}\n\nint main()\n{\n    Book bk1 = {"C-Learning", 123, 6.5};\n    Book bk2 = {"Python-Learning", 456, 9.6};\n\n    Book *ptr1 = setStars(&bk1); // Book \u7c7b\u578b\u7684\u6307\u9488\n    Book *ptr2;\n    ptr2 = &bk2;\n\n    cout << "title: " << ptr1->title << " ";\n    cout << "id: " << ptr1->id << " ";\n    cout << "stars: " << ptr1->stars << endl;\n    // title: C-Learning id: 123 stars: 10\n\n    cout << "title: " << ptr2->title << " ";\n    cout << "id: " << ptr2->id << " ";\n    cout << "stars: " << ptr2->stars << endl;\n    // title: Python-Learning id: 456 stars: 9.6\n\n    return 0;\n}\n')),(0,o.kt)("h2",{id:"typedef-\u5173\u952e\u5b57"},"typedef \u5173\u952e\u5b57"),(0,o.kt)("p",null,'\u4e0b\u9762\u662f\u4e00\u79cd\u66f4\u7b80\u5355\u7684\u5b9a\u4e49\u7ed3\u6784\u7684\u65b9\u5f0f\uff0c\u53ef\u4ee5\u4e3a\u521b\u5efa\u7684\u7c7b\u578b\u53d6\u4e00\u4e2a"\u522b\u540d"\u3002'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"typedef struct Books\n{\n    char  title[50];\n    char  author[50];\n    char  subject[100];\n    int   book_id;\n}Books;\n")),(0,o.kt)("p",null,"\u73b0\u5728\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ",(0,o.kt)("em",{parentName:"p"},"Books")," \u6765\u5b9a\u4e49 ",(0,o.kt)("em",{parentName:"p"},"Books")," \u7c7b\u578b\u7684\u53d8\u91cf\uff0c\u800c\u4e0d\u9700\u8981\u4f7f\u7528 struct \u5173\u952e\u5b57\u3002",(0,o.kt)("strong",{parentName:"p"},"\u597d\u50cf\u73b0\u5728\u4e0d\u7528 typedef \u4e5f\u53ef\u4ee5\u4e0d\u52a0 struct")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Books Book1, Book2;\n")),(0,o.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("strong",{parentName:"p"},"typedef")," \u5173\u952e\u5b57\u6765\u5b9a\u4e49\u975e\u7ed3\u6784\u7c7b\u578b\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"typedef long int *pint32;\n \npint32 x, y, z;\n")),(0,o.kt)("p",null,"x, y \u548c z \u90fd\u662f\u6307\u5411\u957f\u6574\u578b long int \u7684\u6307\u9488\u3002"))}u.isMDXComponent=!0}}]);