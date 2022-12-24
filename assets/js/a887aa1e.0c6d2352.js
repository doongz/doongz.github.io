"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[68884],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},f=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),c=m(n),d=o,u=c["".concat(l,".").concat(d)]||c[d]||p[d]||a;return n?r.createElement(u,s(s({ref:t},f),{},{components:n})):r.createElement(u,s({ref:t},f))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var m=2;m<a;m++)s[m]=n[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37973:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var r=n(87462),o=(n(67294),n(3905));const a={},s=void 0,i={unversionedId:"Skill/\u8bbe\u8ba1\u6a21\u5f0f/\u8bbe\u8ba1\u6a21\u5f0f/\u5907\u5fd8\u5f55\u6a21\u5f0f",id:"Skill/\u8bbe\u8ba1\u6a21\u5f0f/\u8bbe\u8ba1\u6a21\u5f0f/\u5907\u5fd8\u5f55\u6a21\u5f0f",title:"\u5907\u5fd8\u5f55\u6a21\u5f0f",description:"",source:"@site/docs/Skill/\u8bbe\u8ba1\u6a21\u5f0f/\u8bbe\u8ba1\u6a21\u5f0f/\u5907\u5fd8\u5f55\u6a21\u5f0f.md",sourceDirName:"Skill/\u8bbe\u8ba1\u6a21\u5f0f/\u8bbe\u8ba1\u6a21\u5f0f",slug:"/Skill/\u8bbe\u8ba1\u6a21\u5f0f/\u8bbe\u8ba1\u6a21\u5f0f/\u5907\u5fd8\u5f55\u6a21\u5f0f",permalink:"/docs/Skill/\u8bbe\u8ba1\u6a21\u5f0f/\u8bbe\u8ba1\u6a21\u5f0f/\u5907\u5fd8\u5f55\u6a21\u5f0f",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"skillSidebar",previous:{title:"\u539f\u59cb\u4ee3\u7801",permalink:"/docs/Skill/\u8bbe\u8ba1\u6a21\u5f0f/\u8bbe\u8ba1\u6a21\u5f0f/\u539f\u59cb\u4ee3\u7801"},next:{title:"\u5de5\u5382\u65b9\u6cd5\u6a21\u5f0f",permalink:"/docs/Skill/\u8bbe\u8ba1\u6a21\u5f0f/\u8bbe\u8ba1\u6a21\u5f0f/\u5de5\u5382\u65b9\u6cd5\u6a21\u5f0f"}},l={},m=[],f={toc:m};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from __future__ import annotations\nfrom abc import ABC, abstractmethod\nfrom datetime import datetime\nfrom random import sample\nfrom string import ascii_letters, digits\n\n\n\nclass Originator():\n\xa0 \xa0 """\n\xa0 \xa0 The Originator holds some important state that may change over time. It also\n\xa0 \xa0 defines a method for saving the state inside a memento and another method\n\xa0 \xa0 for restoring the state from it.\n\xa0 \xa0 """\n\n\xa0 \xa0 _state = None\n\xa0 \xa0 """\n\xa0 \xa0 For the sake of simplicity, the originator\'s state is stored inside a single\n\xa0 \xa0 variable.\n\xa0 \xa0 """\n\n\xa0 \xa0 def __init__(self, state: str) -> None:\n\xa0 \xa0 \xa0 \xa0 self._state = state\n\xa0 \xa0 \xa0 \xa0 print(f"Originator: My initial state is: {self._state}")\n\n\xa0 \xa0 def do_something(self) -> None:\n\xa0 \xa0 \xa0 \xa0 """\n\xa0 \xa0 \xa0 \xa0 The Originator\'s business logic may affect its internal state.\n\xa0 \xa0 \xa0 \xa0 Therefore, the client should backup the state before launching methods\n\xa0 \xa0 \xa0 \xa0 of the business logic via the save() method.\n\xa0 \xa0 \xa0 \xa0 """\n\n\xa0 \xa0 \xa0 \xa0 print("Originator: I\'m doing something important.")\n\xa0 \xa0 \xa0 \xa0 self._state = self._generate_random_string(30)\n\xa0 \xa0 \xa0 \xa0 print(f"Originator: and my state has changed to: {self._state}")\n\n\xa0 \xa0 def _generate_random_string(self, length: int = 10) -> None:\n\xa0 \xa0 \xa0 \xa0 return "".join(sample(ascii_letters, length))\n\n\xa0 \xa0 def save(self) -> Memento:\n\xa0 \xa0 \xa0 \xa0 """\n\xa0 \xa0 \xa0 \xa0 Saves the current state inside a memento.\n\xa0 \xa0 \xa0 \xa0 """\n\n\xa0 \xa0 \xa0 \xa0 return ConcreteMemento(self._state)\n\n\xa0 \xa0 def restore(self, memento: Memento) -> None:\n\xa0 \xa0 \xa0 \xa0 """\n\xa0 \xa0 \xa0 \xa0 Restores the Originator\'s state from a memento object.\n\xa0 \xa0 \xa0 \xa0 """\n\n\xa0 \xa0 \xa0 \xa0 self._state = memento.get_state()\n\xa0 \xa0 \xa0 \xa0 print(f"Originator: My state has changed to: {self._state}")\n\n\n\nclass Memento(ABC):\n\xa0 \xa0 """\n\xa0 \xa0 The Memento interface provides a way to retrieve the memento\'s metadata,\n\xa0 \xa0 such as creation date or name. However, it doesn\'t expose the Originator\'s\n\xa0 \xa0 state.\n\xa0 \xa0 """\n\n\xa0 \xa0 @abstractmethod\n\xa0 \xa0 def get_name(self) -> str:\n\xa0 \xa0 \xa0 \xa0 pass\n\n\xa0 \xa0 @abstractmethod\n\xa0 \xa0 def get_date(self) -> str:\n\xa0 \xa0 \xa0 \xa0 pass\n\n\n\nclass ConcreteMemento(Memento):\n\xa0 \xa0 def __init__(self, state: str) -> None:\n\xa0 \xa0 \xa0 \xa0 self._state = state\n\xa0 \xa0 \xa0 \xa0 self._date = str(datetime.now())[:19]\n\n\xa0 \xa0 def get_state(self) -> str:\n\xa0 \xa0 \xa0 \xa0 """\n\xa0 \xa0 \xa0 \xa0 The Originator uses this method when restoring its state.\n\xa0 \xa0 \xa0 \xa0 """\n\xa0 \xa0 \xa0 \xa0 return self._state\n\n\xa0 \xa0 def get_name(self) -> str:\n\xa0 \xa0 \xa0 \xa0 """\n\xa0 \xa0 \xa0 \xa0 The rest of the methods are used by the Caretaker to display metadata.\n\xa0 \xa0 \xa0 \xa0 """\n\n\xa0 \xa0 \xa0 \xa0 return f"{self._date} / ({self._state[0:9]}...)"\n\n\xa0 \xa0 def get_date(self) -> str:\n\xa0 \xa0 \xa0 \xa0 return self._date\n\n\n\nclass Caretaker():\n\xa0 \xa0 """\n\xa0 \xa0 The Caretaker doesn\'t depend on the Concrete Memento class. Therefore, it\n\xa0 \xa0 doesn\'t have access to the originator\'s state, stored inside the memento. It\n\xa0 \xa0 works with all mementos via the base Memento interface.\n\xa0 \xa0 """\n\n\xa0 \xa0 def __init__(self, originator: Originator) -> None:\n\xa0 \xa0 \xa0 \xa0 self._mementos = []\n\xa0 \xa0 \xa0 \xa0 self._originator = originator\n\n\xa0 \xa0 def backup(self) -> None:\n\xa0 \xa0 \xa0 \xa0 print("\\nCaretaker: Saving Originator\'s state...")\n\xa0 \xa0 \xa0 \xa0 self._mementos.append(self._originator.save())\n\n\xa0 \xa0 def undo(self) -> None:\n\xa0 \xa0 \xa0 \xa0 if not len(self._mementos):\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 return\n\n\xa0 \xa0 \xa0 \xa0 memento = self._mementos.pop()\n\xa0 \xa0 \xa0 \xa0 print(f"Caretaker: Restoring state to: {memento.get_name()}")\n\xa0 \xa0 \xa0 \xa0 try:\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 self._originator.restore(memento)\n\xa0 \xa0 \xa0 \xa0 except Exception:\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 self.undo()\n\n\xa0 \xa0 def show_history(self) -> None:\n\xa0 \xa0 \xa0 \xa0 print("Caretaker: Here\'s the list of mementos:")\n\xa0 \xa0 \xa0 \xa0 for memento in self._mementos:\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 print(memento.get_name())\n\n\n\nif __name__ == "__main__":\n\xa0 \xa0 originator = Originator("Super-duper-super-puper-super.")\n\xa0 \xa0 caretaker = Caretaker(originator)\n\n\xa0 \xa0 caretaker.backup()\n\xa0 \xa0 originator.do_something()\n\n\xa0 \xa0 caretaker.backup()\n\xa0 \xa0 originator.do_something()\n\n\xa0 \xa0 caretaker.backup()\n\xa0 \xa0 originator.do_something()\n\n\xa0 \xa0 print()\n\xa0 \xa0 caretaker.show_history()\n\n\xa0 \xa0 print("\\nClient: Now, let\'s rollback!\\n")\n\xa0 \xa0 caretaker.undo()\n\n\xa0 \xa0 print("\\nClient: Once more!\\n")\n\xa0 \xa0 caretaker.undo()\n')))}c.isMDXComponent=!0}}]);