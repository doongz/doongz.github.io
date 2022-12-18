"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[88580],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>S});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=l,S=d["".concat(i,".").concat(c)]||d[c]||m[c]||r;return n?a.createElement(S,o(o({ref:t},u),{},{components:n})):a.createElement(S,o({ref:t},u))}));function S(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:l,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},42981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const r={},o="\u8be6\u89e3 Kubernetes StatefulSet \u5b9e\u73b0\u539f\u7406",s={unversionedId:"Knowledge/\u5bb9\u5668\u6280\u672f/kubernetes\u5bf9\u8c61\u8be6\u89e3/statefulSet",id:"Knowledge/\u5bb9\u5668\u6280\u672f/kubernetes\u5bf9\u8c61\u8be6\u89e3/statefulSet",title:"\u8be6\u89e3 Kubernetes StatefulSet \u5b9e\u73b0\u539f\u7406",description:"\u6765\u6e90\uff1a\u8be6\u89e3 Kubernetes StatefulSet \u5b9e\u73b0\u539f\u7406",source:"@site/docs/Knowledge/05-\u5bb9\u5668\u6280\u672f/kubernetes\u5bf9\u8c61\u8be6\u89e3/7-statefulSet.md",sourceDirName:"Knowledge/05-\u5bb9\u5668\u6280\u672f/kubernetes\u5bf9\u8c61\u8be6\u89e3",slug:"/Knowledge/\u5bb9\u5668\u6280\u672f/kubernetes\u5bf9\u8c61\u8be6\u89e3/statefulSet",permalink:"/docs/Knowledge/\u5bb9\u5668\u6280\u672f/kubernetes\u5bf9\u8c61\u8be6\u89e3/statefulSet",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"docsSidebar",previous:{title:"\u8be6\u89e3 Kubernetes Deployment \u7684\u5b9e\u73b0\u539f\u7406",permalink:"/docs/Knowledge/\u5bb9\u5668\u6280\u672f/kubernetes\u5bf9\u8c61\u8be6\u89e3/deployment"},next:{title:"\u8be6\u89e3 Kubernetes DaemonSet \u7684\u5b9e\u73b0\u539f\u7406",permalink:"/docs/Knowledge/\u5bb9\u5668\u6280\u672f/kubernetes\u5bf9\u8c61\u8be6\u89e3/daemonSet"}},i={},p=[{value:"\u4e00\u3001\u6982\u8ff0",id:"\u4e00\u6982\u8ff0",level:2},{value:"\u4e8c\u3001\u5b9e\u73b0\u539f\u7406",id:"\u4e8c\u5b9e\u73b0\u539f\u7406",level:2},{value:"1\u3001\u540c\u6b65",id:"1\u540c\u6b65",level:3},{value:"2\u3001\u5e8f\u5217\u53f7",id:"2\u5e8f\u5217\u53f7",level:3},{value:"3\u3001\u5220\u9664",id:"3\u5220\u9664",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2},{value:"Reference",id:"reference",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u8be6\u89e3-kubernetes-statefulset-\u5b9e\u73b0\u539f\u7406"},"\u8be6\u89e3 Kubernetes StatefulSet \u5b9e\u73b0\u539f\u7406"),(0,l.kt)("p",null,"\u6765\u6e90\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://draveness.me/kubernetes-statefulset/"},"\u8be6\u89e3 Kubernetes StatefulSet \u5b9e\u73b0\u539f\u7406")),(0,l.kt)("p",null,"\u5728 Kubernetes \u7684\u4e16\u754c\u4e2d\uff0c",(0,l.kt)("a",{parentName:"p",href:"https://draveness.me/kubernetes-replicaset"},"ReplicaSet")," \u548c ",(0,l.kt)("a",{parentName:"p",href:"https://draveness.me/kubernetes-deployment"},"Deployment")," \u4e3b\u8981\u7528\u4e8e\u5904\u7406\u65e0\u72b6\u6001\u7684\u670d\u52a1\uff0c\u65e0\u72b6\u6001\u670d\u52a1\u7684\u9700\u6c42\u5f80\u5f80\u975e\u5e38\u7b80\u5355\u5e76\u4e14\u8f7b\u91cf\uff0c\u6bcf\u4e00\u4e2a\u65e0\u72b6\u6001\u8282\u70b9\u5b58\u50a8\u7684\u6570\u636e\u5728\u91cd\u542f\u4e4b\u540e\u5c31\u4f1a\u88ab\u5220\u9664\uff0c\u867d\u7136\u8fd9\u79cd\u670d\u52a1\u867d\u7136\u5e38\u89c1\uff0c\u4f46\u662f\u6211\u4eec\u4ecd\u7136\u9700\u8981\u6709\u72b6\u6001\u7684\u670d\u52a1\u6765\u5b9e\u73b0\u4e00\u4e9b\u7279\u6b8a\u7684\u9700\u6c42\uff0cStatefulSet \u5c31\u662f Kubernetes \u4e3a\u4e86\u8fd0\u884c\u6709\u72b6\u6001\u670d\u52a1\u5f15\u5165\u7684\u8d44\u6e90\uff0c\u4f8b\u5982 Zookeeper\u3001Kafka \u7b49\u3002"),(0,l.kt)("p",null,"\u8fd9\u7bc7\u6587\u7ae0\u4f1a\u4ecb\u7ecd Kubernetes \u5982\u4f55\u5728\u96c6\u7fa4\u4e2d\u8fd0\u884c\u6709\u72b6\u6001\u670d\u52a1\uff0c\u540c\u65f6\u4f1a\u5206\u6790\u8fd9\u4e9b\u6709\u72b6\u6001\u670d\u52a1 StatefulSet \u7684\u540c\u6b65\u8fc7\u7a0b\u4ee5\u53ca\u5b9e\u73b0\u539f\u7406\u3002"),(0,l.kt)("h2",{id:"\u4e00\u6982\u8ff0"},"\u4e00\u3001\u6982\u8ff0"),(0,l.kt)("p",null,"StatefulSet \u662f\u7528\u4e8e\u7ba1\u7406\u6709\u72b6\u6001\u5e94\u7528\u7684\u5de5\u4f5c\u8d1f\u8f7d\u5bf9\u8c61\uff0c\u4e0e ",(0,l.kt)("a",{parentName:"p",href:"https://draveness.me/kubernetes-replicaset"},"ReplicaSet")," \u548c ",(0,l.kt)("a",{parentName:"p",href:"https://draveness.me/kubernetes-deployment"},"Deployment")," \u8fd9\u4e24\u4e2a\u5bf9\u8c61\u4e0d\u540c\uff0cStatefulSet \u4e0d\u4ec5\u80fd\u7ba1\u7406 Pod \u7684\u5bf9\u8c61\uff0c\u8fd8\u5b83\u80fd\u591f\u4fdd\u8bc1\u8fd9\u4e9b Pod \u7684\u987a\u5e8f\u6027\u548c\u552f\u4e00\u6027\u3002"),(0,l.kt)("p",null,"\u4e0e Deployment \u4e00\u6837\uff0cStatefulSet \u4e5f\u4f7f\u7528\u89c4\u683c\u4e2d\u58f0\u660e\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"template")," \u6a21\u677f\u6765\u521b\u5efa Pod \u8d44\u6e90\uff0c\u4f46\u662f\u8fd9\u4e9b Pod \u76f8\u4e92\u4e4b\u95f4\u662f\u4e0d\u80fd\u66ff\u6362\u7684\uff1b\u9664\u6b64\u4e4b\u5916 StatefulSet \u4f1a\u4e3a\u6bcf\u4e2a Pod \u8bbe\u7f6e\u4e00\u4e2a\u5355\u72ec\u7684\u6301\u4e45\u6807\u8bc6\u7b26\uff0c\u8fd9\u4e9b\u7528\u4e8e\u6807\u8bc6\u5e8f\u5217\u7684\u6807\u8bc6\u7b26\u5728\u53d1\u751f\u8c03\u5ea6\u65f6\u4e5f\u4e0d\u4f1a\u4e22\u5931\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: StatefulSet\nmetadata:\n  name: web\nspec:\n  serviceName: "nginx"\n  replicas: 2\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: k8s.gcr.io/nginx-slim:0.8\n        volumeMounts:\n        - name: www\n          mountPath: /usr/share/nginx/html\n  volumeClaimTemplates:\n  - metadata:\n      name: www\n    spec:\n      accessModes: [ "ReadWriteOnce" ]\n      resources:\n        requests:\n          storage: 1Gi\n')),(0,l.kt)("p",null,"\u5982\u679c\u6211\u4eec\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u521b\u5efa\u5982\u4e0a\u6240\u793a\u7684 StatefulSet \u5bf9\u8c61\uff0c\u4f1a\u5f97\u5230\u4ee5\u4e0b\u7ed3\u679c\uff0cKubernetes \u4e0d\u4ec5\u4f1a\u521b\u5efa StatefulSet \u5bf9\u8c61\uff0c\u8fd8\u4f1a\u81ea\u52a8\u521b\u5efa\u4e24\u4e2a Pod \u526f\u672c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get statefulsets.apps\nkNAME   READY   AGE\nweb    2/2     2m27s\n\n$ kubectl get pods\nNAME    READY   STATUS    RESTARTS   AGE\nweb-0   1/1     Running   0          2m31s\nweb-1   1/1     Running   0          105s\n\n$ kubectl get persistentvolumes\nNAME                                       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM               STORAGECLASS       REASON   AGE\npvc-19ef374f-39d1-11e9-b870-9efb418608da   1Gi        RWO            Delete           Bound    default/www-web-1   do-block-storage            21m\npvc-fe53d5f7-39d0-11e9-b870-9efb418608da   1Gi        RWO            Delete           Bound    default/www-web-0   do-block-storage            21m\n\n$ kubectl get persistentvolumeclaims\nNAME        STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS       AGE\nwww-web-0   Bound    pvc-fe53d5f7-39d0-11e9-b870-9efb418608da   1Gi        RWO            do-block-storage   21m\nwww-web-1   Bound    pvc-19ef374f-39d1-11e9-b870-9efb418608da   1Gi        RWO      \n")),(0,l.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0c\u4e0a\u8ff0 YAML \u6587\u4ef6\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"volumeClaimTemplates")," \u914d\u7f6e\u8fd8\u4f1a\u521b\u5efa\u6301\u4e45\u5377",(0,l.kt)("inlineCode",{parentName:"p"},"PersistentVolume")," \u548c\u7528\u4e8e\u7ed1\u5b9a\u6301\u4e45\u5377\u548c Pod \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"PersistentVolumeClaim")," \u8d44\u6e90\uff1b\u4e24\u4e2a Pod \u5bf9\u8c61\u540d\u4e2d\u5305\u542b\u4e86\u5b83\u4eec\u7684\u5e8f\u5217\u53f7\uff0c\u8be5\u5e8f\u5217\u53f7\u4f1a\u5728 StatefulSet \u5b58\u5728\u7684\u65f6\u95f4\u5185\u4fdd\u6301\u4e0d\u53d8\uff0c\u54ea\u6015 Pod \u88ab\u91cd\u542f\u6216\u8005\u91cd\u65b0\u8c03\u5ea6\uff0c\u4e5f\u4e0d\u4f1a\u51fa\u73b0\u4efb\u4f55\u7684\u6539\u53d8\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mermaid"},"graph TD\n  SS[StatefulSet]-.->Pod1\n  SS[StatefulSet]-.->Pod2\n  Pod1-.-PersistentVolumeClaim1\n  Pod2-.-PersistentVolumeClaim2\n  PersistentVolumeClaim1-.->PersistentVolume1\n  PersistentVolumeClaim2-.->PersistentVolume2\n")),(0,l.kt)("p",null,"StatefulSet \u7684\u62d3\u6251\u7ed3\u6784\u548c\u5176\u4ed6\u7528\u4e8e\u90e8\u7f72\u7684\u8d44\u6e90\u5176\u5b9e\u6bd4\u8f83\u7c7b\u4f3c\uff0c\u6bd4\u8f83\u5927\u7684\u533a\u522b\u5728\u4e8e StatefulSet \u5f15\u5165\u4e86 PV \u548c PVC \u5bf9\u8c61\u6765\u6301\u4e45\u5b58\u50a8\u670d\u52a1\u4ea7\u751f\u7684\u72b6\u6001\uff0c\u8fd9\u6837\u6240\u6709\u7684\u670d\u52a1\u867d\u7136\u53ef\u4ee5\u88ab\u6740\u6389\u6216\u8005\u91cd\u542f\uff0c\u4f46\u662f\u5176\u4e2d\u7684\u6570\u636e\u7531\u4e8e PV \u7684\u539f\u56e0\u4e0d\u4f1a\u4e22\u5931\u3002"),(0,l.kt)("h2",{id:"\u4e8c\u5b9e\u73b0\u539f\u7406"},"\u4e8c\u3001\u5b9e\u73b0\u539f\u7406"),(0,l.kt)("p",null,"\u4e0e ",(0,l.kt)("a",{parentName:"p",href:"https://draveness.me/kubernetes-replicaset"},"ReplicaSet")," \u548c ",(0,l.kt)("a",{parentName:"p",href:"https://draveness.me/kubernetes-deployment"},"Deployment")," \u8d44\u6e90\u4e00\u6837\uff0cStatefulSet \u4e5f\u4f7f\u7528\u63a7\u5236\u5668\u7684\u65b9\u5f0f\u5b9e\u73b0\uff0c\u5b83\u4e3b\u8981\u7531 ",(0,l.kt)("inlineCode",{parentName:"p"},"StatefulSetController"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"StatefulSetControl")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"StatefulPodControl")," \u4e09\u4e2a\u7ec4\u4ef6\u534f\u4f5c\u6765\u5b8c\u6210 StatefulSet \u7684\u7ba1\u7406\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"StatefulSetController")," \u4f1a\u540c\u65f6\u4ece ",(0,l.kt)("inlineCode",{parentName:"p"},"PodInformer")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"ReplicaSetInformer"),"\u4e2d\u63a5\u53d7\u589e\u5220\u6539\u4e8b\u4ef6\u5e76\u5c06\u4e8b\u4ef6\u63a8\u9001\u5230\u961f\u5217\u4e2d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mermaid"},"graph TD\n    PI[PodInformer]-. Add/Update/Delete .->SSC[StatefulSetController]\n    RSI[ReplicaSetInformer]-. Add/Update/Delete .->SSC\n    SSC--\x3eworker1\n    SSC-. Add StatefulSet .->queue\n    worker1-. Loop .->worker1\n    queue-. Get StatefulSet .->worker1\n    SSC--\x3eworker2\n    worker2-. Loop .->worker2\n    queue-. Get StatefulSet .->worker2\n    style worker1 fill:#fffede,stroke:#ebebb7\n    style worker2 fill:#fffede,stroke:#ebebb7\n")),(0,l.kt)("p",null,"\u63a7\u5236\u5668 ",(0,l.kt)("inlineCode",{parentName:"p"},"StatefulSetController")," \u4f1a\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"Run")," \u65b9\u6cd5\u4e2d\u542f\u52a8\u591a\u4e2a Goroutine \u534f\u7a0b\uff0c\u8fd9\u4e9b\u534f\u7a0b\u4f1a\u4ece\u961f\u5217\u4e2d\u83b7\u53d6\u5f85\u5904\u7406\u7684 StatefulSet \u8d44\u6e90\u8fdb\u884c\u540c\u6b65\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u4f1a\u5148\u4ecb\u7ecd Kubernetes \u540c\u6b65 StatefulSet \u7684\u8fc7\u7a0b\u3002"),(0,l.kt)("h3",{id:"1\u540c\u6b65"},"1\u3001\u540c\u6b65"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"StatefulSetController")," \u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"sync")," \u65b9\u6cd5\u540c\u6b65 StatefulSet \u8d44\u6e90\uff0c\u8fd9\u662f\u540c\u6b65\u8be5\u8d44\u6e90\u7684\u552f\u4e00\u5165\u53e3\uff0c\u4e0b\u9762\u662f\u8fd9\u4e2a\u65b9\u6cd5\u7684\u5177\u4f53\u5b9e\u73b0\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func (ssc *StatefulSetController) sync(key string) error {\n    namespace, name, _ := cache.SplitMetaNamespaceKey(key)\n    set, _ := ssc.setLister.StatefulSets(namespace).Get(name)\n\n    ssc.adoptOrphanRevisions(set)\n\n    selector, _ := metav1.LabelSelectorAsSelector(set.Spec.Selector)\n    pods, _ := ssc.getPodsForStatefulSet(set, selector)\n\n    return ssc.syncStatefulSet(set, pods)\n}\n\nfunc (ssc *StatefulSetController) syncStatefulSet(set *apps.StatefulSet, pods []*v1.Pod) error {\n    ssc.control.UpdateStatefulSet(set.DeepCopy(), pods); err != nil\n    return nil\n}\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5148\u91cd\u65b0\u83b7\u53d6 StatefulSet \u5bf9\u8c61\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u6536\u517b\u96c6\u7fa4\u4e2d\u4e0e StatefulSet \u6709\u5173\u7684\u5b64\u7acb\u63a7\u5236\u5668\u7248\u672c\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u83b7\u53d6\u5f53\u524d StatefulSet \u5bf9\u5e94\u7684\u5168\u90e8 Pod \u526f\u672c\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"syncStatefulSet")," \u65b9\u6cd5\u540c\u6b65\u8d44\u6e90\uff1b")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"syncStatefulSet")," \u65b9\u6cd5\u53ea\u662f\u5c06\u65b9\u6cd5\u7684\u8c03\u7528\u8f6c\u53d1\u5230\u4e86\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"StatefulSetControlInterface")," \u7684\u5b9e\u73b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"defaultStatefulSetControl"),"\u4e0a\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"StatefulSetControlInterface")," \u5b9a\u4e49\u4e86\u7528\u4e0e\u63a7\u5236 StatefulSet \u548c Pod \u526f\u672c\u7684\u63a5\u53e3\uff0c\u8fd9\u91cc\u8c03\u7528\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"UpdateStatefulSet")," \u51fd\u6570\u6267\u884c\u4e86\u4e00\u4e2a StatefulSet \u7684\u6838\u5fc3\u903b\u8f91\uff0c\u5b83\u4f1a\u8d1f\u8d23\u83b7\u53d6 StatefulSet \u7248\u672c\u3001\u66f4\u65b0 StatefulSet \u4ee5\u53ca\u5b83\u7684\u72b6\u6001\u548c\u5386\u53f2\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func (ssc *defaultStatefulSetControl) UpdateStatefulSet(set *apps.StatefulSet, pods []*v1.Pod) error {\n    revisions, err := ssc.ListRevisions(set)\n    history.SortControllerRevisions(revisions)\n\n    currentRevision, updateRevision, collisionCount, err := ssc.getStatefulSetRevisions(set, revisions)\n\n    status, err := ssc.updateStatefulSet(set, currentRevision, updateRevision, collisionCount, pods)\n\n    ssc.updateStatefulSetStatus(set, status)\n\n    return ssc.truncateHistory(set, pods, revisions, currentRevision, updateRevision)\n}\n")),(0,l.kt)("p",null,"\u5b83\u4f1a\u4f7f\u7528\u9ed8\u8ba4\u7684\u5355\u8c03\u9012\u589e\u7b56\u7565\uff0c\u6309\u7167\u5347\u5e8f\u4f9d\u6b21\u521b\u5efa\u526f\u672c\u5e76\u6309\u7167\u964d\u5e8f\u5220\u9664\u526f\u672c\uff0c\u5f53\u51fa\u73b0 Pod \u5904\u4e8e\u4e0d\u5065\u5eb7\u7684\u72b6\u6001\u65f6\uff0c\u90a3\u4e48\u65b0\u7684 Pod \u5c31\u4e0d\u4f1a\u88ab\u521b\u5efa\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"StatefulSetController")," \u4f1a\u7b49\u5f85 Pod \u6062\u590d\u540e\u7ee7\u7eed\u6267\u884c\u4e0b\u9762\u7684\u903b\u8f91\u3002"),(0,l.kt)("p",null,"\u4e0a\u8ff0\u4ee3\u7801\u4f1a\u5728\u83b7\u53d6 StatefulSet \u7684\u5386\u53f2\u7248\u672c\u4e4b\u540e\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"updateStatefulSet")," \u65b9\u6cd5\u5f00\u59cb\u66f4\u65b0 StatefulSet\uff0c\u8fd9\u4e2a\u5c06\u8fd1 300 \u884c\u7684\u4ee3\u7801\u4f1a\u6309\u7167\u6267\u884c\u4ee5\u4e0b\u7684\u6267\u884c\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5c06\u5f53\u524d StatefulSet \u6301\u6709\u7684 Pod \u526f\u672c\u6309\u7167\u5e8f\u5217\u53f7\u8fdb\u884c\u5206\u7ec4\uff0c\u8d85\u51fa\u6570\u91cf\u7684\u526f\u672c\u5c06\u88ab\u5206\u5165 ",(0,l.kt)("inlineCode",{parentName:"li"},"condemned")," \u4e2d\u7b49\u5f85\u540e\u7eed\u7684\u5220\u9664\u64cd\u4f5c\uff0c\u8fd9\u6b21\u540c\u6b65\u4e2d\u9700\u8981\u4fdd\u7559\u7684\u526f\u672c\u5c06\u8fdb\u5165 ",(0,l.kt)("inlineCode",{parentName:"li"},"replicas")," \u5206\u7ec4\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u5bf9\u5f53\u524d\u7684 StatefulSet \u8fdb\u884c\u6269\u5bb9\uff0c\u8ba9\u96c6\u7fa4\u8fbe\u5230\u76ee\u6807\u7684\u526f\u672c\u6570\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u83b7\u53d6\u526f\u672c\u6570\u7ec4\u4e2d\u7b2c\u4e00\u4e2a\u4e0d\u5065\u5eb7\u7684 Pod\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u6839\u636e\u526f\u672c\u7684\u5e8f\u5217\u53f7\u68c0\u67e5\u5404\u4e2a\u526f\u672c\u7684\u72b6\u6001\uff1b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u53d1\u73b0\u4e86\u5931\u8d25\u7684\u526f\u672c\u5c31\u4f1a\u8fdb\u884c\u91cd\u542f\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u5f53\u524d\u526f\u672c\u6ca1\u6709\u6b63\u5e38\u8fd0\u884c\u5c31\u4f1a\u9000\u51fa\u5faa\u73af\uff0c\u76f4\u5230\u5f53\u524d\u526f\u672c\u8fbe\u5230\u6b63\u5e38\u8fd0\u884c\u7684\u72b6\u6001\uff1b"))),(0,l.kt)("li",{parentName:"ol"},"\u6309\u7167\u964d\u5e8f\u4f9d\u6b21\u5220\u9664 ",(0,l.kt)("inlineCode",{parentName:"li"},"condemned")," \u6570\u7ec4\u4e2d\u7684\u526f\u672c\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u6309\u7167\u964d\u5e8f\u4f9d\u6b21\u66f4\u65b0 ",(0,l.kt)("inlineCode",{parentName:"li"},"replicas")," \u6570\u7ec4\u4e2d\u7684\u526f\u672c\uff1b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func (ssc *defaultStatefulSetControl) updateStatefulSet(set *apps.StatefulSet, currentRevision *apps.ControllerRevision, updateRevision *apps.ControllerRevision, collisionCount int32, pods []*v1.Pod) (*apps.StatefulSetStatus, error) {\n    currentSet, _ := ApplyRevision(set, currentRevision)\n    updateSet, _ := ApplyRevision(set, updateRevision)\n\n    status := apps.StatefulSetStatus{}\n    // ...\n\n    replicaCount := int(*set.Spec.Replicas)\n    replicas := make([]*v1.Pod, replicaCount)\n    condemned := make([]*v1.Pod, 0, len(pods))\n    unhealthy := 0\n    var firstUnhealthyPod *v1.Pod\n\n    for i := range pods {\n        if ord := getOrdinal(pods[i]); 0 <= ord && ord < replicaCount {\n            replicas[ord] = pods[i]\n        } else if ord >= replicaCount {\n            condemned = append(condemned, pods[i])\n        }\n    }\n\n    sort.Sort(ascendingOrdinal(condemned))\n\n    for ord := 0; ord < replicaCount; ord++ {\n        if replicas[ord] == nil {\n            replicas[ord] = newVersionedStatefulSetPod(currentSet, updateSet, currentRevision.Name, updateRevision.Name, ord)\n        }\n    }\n")),(0,l.kt)("p",null,"\u8fd9\u91cc\u901a\u8fc7 StatefulSet \u5e94\u8be5\u6301\u6709\u7684\u526f\u672c\u6570\u5bf9\u5f53\u524d\u7684\u526f\u672c\u8fdb\u884c\u5206\u7ec4\uff0c\u4e00\u90e8\u5206\u662f\u9700\u8981\u4fdd\u8bc1\u5b58\u6d3b\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"replicas"),"\uff0c\u53e6\u4e00\u90e8\u5206\u662f\u9700\u8981\u88ab\u7ec8\u6b62\u7684\u526f\u672c ",(0,l.kt)("inlineCode",{parentName:"p"},"condemned"),"\uff0c\u5982\u679c\u5206\u7ec4\u540e\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"replicas")," \u6570\u91cf\u4e0d\u8db3\uff0c\u5c31\u4f1a\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"newVersionedStatefulSetPod")," \u51fd\u6570\u521b\u5efa\u65b0\u7684 Pod\uff0c\u4e0d\u8fc7\u8fd9\u91cc\u7684 Pod \u4e5f\u53ea\u662f\u5f85\u521b\u5efa\u7684\u6a21\u677f\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"k8s-27",src:n(20758).Z,width:"1200",height:"625"})),(0,l.kt)("p",null,"\u62ff\u5230\u7ebf\u4e0a\u5e94\u8be5\u5b58\u5728\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"replicas")," \u6570\u7ec4\u65f6\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u8fdb\u884c\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"CreateStatefulPod")," \u8fdb\u884c\u6269\u5bb9\u4e86\uff0c\u6bcf\u4e2a Pod \u7684\u66f4\u65b0\u548c\u521b\u5efa\u90fd\u4f1a\u7b49\u5f85\u524d\u9762\u6240\u6709 Pod \u6b63\u5e38\u8fd0\u884c\uff0c\u5b83\u4f1a\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"isFailed"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"isCreated"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"isTerminating")," \u7b49\u65b9\u6cd5\u4fdd\u8bc1\u6bcf\u4e00\u4e2a Pod \u90fd\u6b63\u5e38\u8fd0\u884c\u65f6\u624d\u4f1a\u7ee7\u7eed\u5904\u7406\u4e0b\u4e00\u4e2a Pod\uff0c\u5982\u679c\u4f7f\u7528\u6eda\u52a8\u66f4\u65b0\u7b56\u7565\uff0c\u90a3\u4e48\u4f1a\u5728\u5b8c\u6210\u6269\u5bb9\u4e4b\u540e\u624d\u4f1a\u5bf9\u5f53\u524d\u7684 Pod \u8fdb\u884c\u66f4\u65b0\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"    for i := range replicas {\n        if isFailed(replicas[i]) {\n            ssc.podControl.DeleteStatefulPod(set, replicas[i])\n            replicas[i] = newVersionedStatefulSetPod(i)\n        }\n        if !isCreated(replicas[i]) {\n            ssc.podControl.CreateStatefulPod(set, replicas[i])\n            return &status, nil\n        }\n        if isTerminating(replicas[i]) || !isRunningAndReady(replicas[i]) {\n            return &status, nil\n        }\n        if identityMatches(set, replicas[i]) && storageMatches(set, replicas[i]) {\n            continue\n        }\n        replica := replicas[i].DeepCopy()\n        ssc.podControl.UpdateStatefulPod(updateSet, replica)\n    }\n")),(0,l.kt)("p",null,"\u5f53 ",(0,l.kt)("inlineCode",{parentName:"p"},"StatefulSetController")," \u5904\u7406\u5b8c\u526f\u672c\u7684\u521b\u5efa\u548c\u66f4\u65b0\u4efb\u52a1\u4e4b\u540e\uff0c\u5c31\u5f00\u59cb\u5220\u9664\u9700\u8981\u629b\u5f03\u7684\u8282\u70b9\u4e86\uff0c\u8282\u70b9\u7684\u5220\u9664\u4e5f\u9700\u8981\u786e\u5b9a\u6309\u7167\u964d\u5e8f\u4f9d\u6b21\u8fdb\u884c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"    for target := len(condemned) - 1; target >= 0; target-- {\n        if isTerminating(condemned[target]) {\n            return &status, nil\n        }\n        if !isRunningAndReady(condemned[target]) && condemned[target] != firstUnhealthyPod {\n            return &status, nil\n        }\n\n        ssc.podControl.DeleteStatefulPod(set, condemned[target])\n        return &status, nil\n    }\n\n    updateMin := 0\n    if set.Spec.UpdateStrategy.RollingUpdate != nil {\n        updateMin = int(*set.Spec.UpdateStrategy.RollingUpdate.Partition)\n    }\n    for target := len(replicas) - 1; target >= updateMin; target-- {\n        if getPodRevision(replicas[target]) != updateRevision.Name && !isTerminating(replicas[target]) {\n            ssc.podControl.DeleteStatefulPod(set, replicas[target])\n            return &status, err\n        }\n\n        if !isHealthy(replicas[target]) {\n            return &status, nil\n        }\n    }\n    return &status, nil\n}\n")),(0,l.kt)("p",null,"\u6211\u4eec\u9996\u5148\u4f1a\u5220\u9664\u5f85\u629b\u5f03\u5217\u8868\u4e2d\u7684\u526f\u672c\uff0c\u5176\u6b21\u6839\u636e\u6eda\u52a8\u66f4\u65b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"RollingUpdate")," \u7684\u914d\u7f6e\u4ece\u9ad8\u5230\u4f4e\u4f9d\u6b21\u5220\u9664\u6240\u6709 Pod \u7248\u672c\u5df2\u7ecf\u8fc7\u65f6\u7684\u8282\u70b9\uff0c\u6240\u6709\u5220\u9664\u8282\u70b9\u7684\u65b9\u5f0f\u90fd\u4f1a\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"DeleteStatefulPod")," \u65b9\u6cd5\u8fdb\u884c\uff0c\u8be5\u65b9\u6cd5\u4f1a\u901a\u8fc7\u5ba2\u6237\u7aef\u7684\u63a5\u53e3\u76f4\u63a5\u6839\u636e Pod \u540d\u79f0\u5220\u9664\u5bf9\u5e94\u7684\u8d44\u6e90\u3002"),(0,l.kt)("h3",{id:"2\u5e8f\u5217\u53f7"},"2\u3001\u5e8f\u5217\u53f7"),(0,l.kt)("p",null,"Pod \u7684\u5e8f\u5217\u53f7\uff08Ordinal\uff09\u662f\u5176\u552f\u4e00\u6027\u548c\u987a\u5e8f\u6027\u7684\u4fdd\u8bc1\uff0c\u5728\u521b\u5efa\u548c\u5220\u9664 StatefulSet \u7684\u526f\u672c\u65f6\uff0c\u6211\u4eec\u90fd\u9700\u8981\u6309\u7167 Pod \u7684\u5e8f\u5217\u53f7\u5bf9\u5b83\u4eec\u6309\u7167\u987a\u5e8f\u64cd\u4f5c\uff0c\u526f\u672c\u7684\u521b\u5efa\u4f1a\u6309\u7167\u5e8f\u5217\u53f7\u5347\u5e8f\u5904\u7406\uff0c\u526f\u672c\u7684\u66f4\u65b0\u548c\u5220\u9664\u4f1a\u6309\u7167\u5e8f\u5217\u53f7\u964d\u5e8f\u5904\u7406\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"k8s-28",src:n(37893).Z,width:"1200",height:"415"})),(0,l.kt)("p",null,"\u521b\u5efa StatefulSet \u4e2d\u7684\u526f\u672c\u65f6\uff0c\u5c31\u4f1a\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"newStatefulSetPod")," \u51fd\u6570\u4e2d\u4f20\u5165\u5f53\u524d Pod \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"ordinal")," \u4fe1\u606f\uff0c\u8be5\u65b9\u6cd5\u4f1a\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"GetPodFromTemplate")," \u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"p"},"StatefulSet")," \u4e2d\u7684 Pod \u6a21\u677f\u5e76\u4e14\u521d\u59cb\u5316 Pod \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"metadata")," \u548c\u5f15\u7528\u7b49\u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'func newStatefulSetPod(set *apps.StatefulSet, ordinal int) *v1.Pod {\n    pod, _ := controller.GetPodFromTemplate(&set.Spec.Template, set, metav1.NewControllerRef(set, controllerKind))\n    pod.Name = getPodName(set, ordinal)\n    initIdentity(set, pod)\n    updateStorage(set, pod)\n    return pod\n}\n\nfunc getPodName(set *apps.StatefulSet, ordinal int) string {\n    return fmt.Sprintf("%s-%d", set.Name, ordinal)\n}\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"getPodName")," \u51fd\u6570\u7684\u5b9e\u73b0\u975e\u5e38\u7b80\u5355\uff0c\u5b83\u5c06 StatefulSet \u7684\u540d\u5b57\u548c\u4f20\u5165\u7684\u5e8f\u5217\u53f7\u901a\u8fc7\u7834\u6298\u53f7\u8fde\u63a5\u8d77\u6765\u7ec4\u6210\u6211\u4eec\u7ecf\u5e38\u89c1\u5230\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"web-0"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"web-1")," \u7b49\u5f62\u5f0f\u7684\u526f\u672c\u540d\uff1b",(0,l.kt)("inlineCode",{parentName:"p"},"initIdentity")," \u4f1a\u66f4\u65b0 Pod \u7684\u4e3b\u673a\u540d\u3001\u8d44\u6e90\u540d\u3001\u547d\u540d\u7a7a\u95f4\u6807\u7b7e\uff0c\u800c ",(0,l.kt)("inlineCode",{parentName:"p"},"updateStorage")," \u4f1a\u4e3a\u5f85\u521b\u5efa\u7684\u526f\u672c\u8bbe\u7f6e\u5377\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func updateStorage(set *apps.StatefulSet, pod *v1.Pod) {\n    currentVolumes := pod.Spec.Volumes\n    claims := getPersistentVolumeClaims(set, pod)\n    newVolumes := make([]v1.Volume, 0, len(claims))\n    for name, claim := range claims {\n        newVolumes = append(newVolumes, v1.Volume{\n            Name: name,\n            VolumeSource: v1.VolumeSource{\n                PersistentVolumeClaim: &v1.PersistentVolumeClaimVolumeSource{\n                    ClaimName: claim.Name,\n                    ReadOnly: false,\n                },\n            },\n        })\n    }\n    for i := range currentVolumes {\n        if _, ok := claims[currentVolumes[i].Name]; !ok {\n            newVolumes = append(newVolumes, currentVolumes[i])\n        }\n    }\n    pod.Spec.Volumes = newVolumes\n}\n")),(0,l.kt)("p",null,"\u8bbe\u7f6e\u5377\u7684\u914d\u7f6e\u4e3b\u8981\u6765\u81ea\u4e8e StatefulSet \u89c4\u683c\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"volumeClaimTemplates")," \u6a21\u677f\uff0c\u6240\u6709\u5377\u76f8\u5173\u7684\u914d\u7f6e\u4fe1\u606f\u90fd\u4f1a\u901a\u8fc7\u8be5\u65b9\u6cd5\u4f20\u9012\u8fc7\u6765\u3002"),(0,l.kt)("p",null,"Pod \u901a\u8fc7\u5f53\u524d\u540d\u5b57\u5b58\u50a8\u81ea\u5df1\u5bf9\u5e94\u7684\u5e8f\u5217\u53f7\uff0c\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"StatefulSetController")," \u540c\u6b65\u65f6\u5c31\u4f1a\u4ece Pod \u7684\u540d\u5b57\u4e2d\u53d6\u51fa\u5e8f\u5217\u53f7\u5e76\u8fdb\u884c\u6392\u5e8f\uff0c\u968f\u540e\u7684\u5404\u79cd\u5faa\u73af\u5c31\u53ef\u4ee5\u9009\u62e9\u4f7f\u7528\u6b63\u5e8f\u6216\u8005\u5012\u5e8f\u7684\u65b9\u5f0f\u4f9d\u6b21\u5904\u7406\u5404\u4e2a\u8282\u70b9\u4e86\u3002"),(0,l.kt)("h3",{id:"3\u5220\u9664"},"3\u3001\u5220\u9664"),(0,l.kt)("p",null,"\u5f53\u6211\u4eec\u5220\u9664\u4e00\u4e2a Kubernetes \u4e2d\u7684 StatefulSet \u8d44\u6e90\u65f6\uff0c\u5b83\u5bf9\u5e94\u7684\u5168\u90e8 Pod \u526f\u672c\u90fd\u4f1a\u88ab ",(0,l.kt)("a",{parentName:"p",href:"https://draveness.me/kubernetes-garbage-collector"},"\u5783\u573e\u6536\u96c6\u5668")," \u81ea\u52a8\u5220\u9664\uff0c\u8be5\u6536\u96c6\u5668\u5728\u68c0\u67e5\u5230\u5f53\u524d Pod \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"metadata.ownerReferences")," \u5df2\u7ecf\u4e0d\u518d\u5b58\u5728\u65f6\u5c31\u4f1a\u5220\u9664 Pod \u8d44\u6e90\uff0c\u8bfb\u8005\u53ef\u4ee5\u9605\u8bfb ",(0,l.kt)("a",{parentName:"p",href:"https://draveness.me/kubernetes-garbage-collector"},"\u5783\u573e\u6536\u96c6\u5668")," \u4e86\u89e3\u5177\u4f53\u7684\u6267\u884c\u8fc7\u7a0b\u548c\u5b9e\u73b0\u539f\u7406\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl delete statefulsets.apps web\nstatefulset.apps "web" deleted\n\n$ kubectl get pods --watch\nNAME    READY   STATUS    RESTARTS   AGE\nweb-2   1/1   Terminating   0     14h\nweb-1   1/1   Terminating   0     14h\nweb-0   1/1   Terminating   0     14h\n')),(0,l.kt)("p",null,"\u6211\u4eec\u4f1a\u53d1\u73b0\u9664\u4e86 StatefulSet \u548c Pod \u4e4b\u5916\u7684\u4efb\u4f55\u5176\u4ed6\u8d44\u6e90\u90fd\u6ca1\u6709\u88ab\u5220\u9664\uff0c\u4e4b\u524d\u521b\u5efa\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"PersistentVolume")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"PersistentVolumeClaim")," \u5bf9\u8c61\u90fd\u6ca1\u6709\u53d1\u751f\u4efb\u4f55\u7684\u53d8\u5316\uff0c\u8fd9\u4e5f\u662f StatefulSet \u7684\u884c\u4e3a\uff0c\u5b83\u4f1a\u5728\u670d\u52a1\u88ab\u5220\u9664\u4e4b\u540e\u4ecd\u7136\u4fdd\u7559\u5176\u4e2d\u7684\u72b6\u6001\uff0c\u4e5f\u5c31\u662f\u6570\u636e\uff0c\u8fd9\u4e9b\u6570\u636e\u5c31\u90fd\u5b58\u50a8\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"PersistentVolume")," \u4e2d\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u6211\u4eec\u91cd\u65b0\u521b\u5efa\u76f8\u540c\u7684 StatefulSet\uff0c\u5b83\u8fd8\u4f1a\u4f7f\u7528\u4e4b\u524d\u7684 PV \u548c PVC \u5bf9\u8c61\uff0c\u4e0d\u8fc7\u4e5f\u53ef\u4ee5\u9009\u62e9\u624b\u52a8\u5220\u9664\u6240\u6709\u7684 PV \u548c PVC \u6765\u751f\u6210\u65b0\u7684\u5b58\u50a8\uff0c\u8fd9\u4e24\u4e2a\u5bf9\u8c61\u90fd\u5c5e\u4e8e Kubernetes \u7684\u5b58\u50a8\u7cfb\u7edf\uff0c\u611f\u5174\u8da3\u7684\u8bfb\u8005\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"p",href:"https://draveness.me/kubernetes-volume"},"\u5b58\u50a8\u7cfb\u7edf")," \u4e86\u89e3 Kubernetes \u4e2d Volume \u7684\u8bbe\u8ba1\u548c\u5b9e\u73b0\u3002"),(0,l.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,l.kt)("p",null,"StatefulSet \u662f Kubernetes \u4e3a\u4e86\u5904\u7406\u6709\u72b6\u6001\u670d\u52a1\u5f15\u5165\u7684\u6982\u5ff5\uff0c\u5728\u6709\u72b6\u6001\u670d\u52a1\u4e2d\uff0c\u5b83\u4e3a\u65e0\u5e8f\u548c\u77ed\u6682\u7684 Pod \u5f15\u5165\u4e86\u987a\u5e8f\u6027\u548c\u552f\u4e00\u6027\uff0c\u4f7f\u5f97 Pod \u7684\u521b\u5efa\u548c\u5220\u9664\u66f4\u5bb9\u6613\u88ab\u638c\u63a7\u548c\u9884\u6d4b\uff0c\u540c\u65f6\u52a0\u5165 PV \u548c PVC \u5bf9\u8c61\u6765\u5b58\u50a8\u8fd9\u4e9b Pod \u7684\u72b6\u6001\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 StatefulSet \u5b9e\u73b0\u4e00\u4e9b\u504f\u5b58\u50a8\u7684\u6709\u72b6\u6001\u7cfb\u7edf\uff0c\u4f8b\u5982 Zookeeper\u3001Kafka\u3001MongoDB \u7b49\uff0c\u8fd9\u4e9b\u7cfb\u7edf\u5927\u591a\u6570\u90fd\u9700\u8981\u6301\u4e45\u5316\u7684\u5b58\u50a8\u6570\u636e\uff0c\u9632\u6b62\u5728\u670d\u52a1\u5b95\u673a\u65f6\u53d1\u751f\u6570\u636e\u4e22\u5931\u3002"),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/41583672/kubernetes-deployments-vs-statefulsets"},"Kubernetes Deployments vs StatefulSets")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/blog/2016/12/statefulset-run-scale-stateful-applications-in-kubernetes/"},"StatefulSet: Run and Scale Stateful Applications Easily in Kubernetes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tutorials/stateful-application/zookeeper/"},"Running ZooKeeper, A Distributed System Coordinator")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/"},"StatefulSets \xb7 Kubernetes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://cloud.google.com/kubernetes-engine/docs/concepts/statefulset#partitioning_rolling_updates"},"StatefulSet \xb7 Kubernetes Engine"))))}d.isMDXComponent=!0},20758:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/k8s-27-f1036680da9b1501729247f08b03fc1b.png"},37893:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/k8s-28-9227eed350a778c5fb4df0d347ef0d10.png"}}]);