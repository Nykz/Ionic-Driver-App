import{a as F,e as H,q as D}from"./chunk-LG455DY4.js";import{a as B}from"./chunk-KRQW3WRS.js";import{a as x}from"./chunk-AIDVXPZK.js";import{a as j}from"./chunk-WFCDVFAH.js";import"./chunk-3C7OKRBG.js";import"./chunk-7RJKU3Z7.js";import{a as E}from"./chunk-E7APRJJL.js";import"./chunk-RZ7UTHTO.js";import"./chunk-CFZVMA6D.js";import"./chunk-ZSWNRFCL.js";import{Ab as b,C as u,Fb as I,H as c,Ha as v,J as r,Kb as P,Pb as S,R as a,S as l,T as p,Ub as T,Z as f,ga as h,gc as C,ha as y,hc as L,sc as M,x as n,y as m,ya as _,za as O}from"./chunk-HSJ3UP2Q.js";import"./chunk-5K2P5JXY.js";import"./chunk-G2NBWZGV.js";import"./chunk-5ZMMP3RU.js";import"./chunk-GBYUAKBO.js";import"./chunk-TFHXA6LG.js";import"./chunk-6L6JLL4O.js";import"./chunk-G3CV3VGG.js";import"./chunk-JX3TYZ34.js";import"./chunk-RUY5SX76.js";import"./chunk-NIOQNOHM.js";import"./chunk-4U6PRYVA.js";import"./chunk-4YKAI63M.js";import"./chunk-JWIEPCRG.js";import"./chunk-QPVVTFFW.js";import"./chunk-J6ICYO4L.js";import"./chunk-LF5XB4YN.js";import{f as g}from"./chunk-RW4GY4BD.js";function k(e,i){e&1&&(a(0,"ion-buttons",4),p(1,"ion-back-button",5),l())}function w(e,i){e&1&&p(0,"app-loading-order")}function N(e,i){if(e&1&&p(0,"app-empty-screen",6),e&2){let d=f();r("model",d.model)}}function G(e,i){if(e&1&&p(0,"app-orders",8),e&2){let d=i.$implicit;r("order",d)}}function q(e,i){if(e&1&&(a(0,"ion-list"),c(1,G,1,1,"app-orders",7),l()),e&2){let d=f();n(),r("ngForOf",d.orders)}}var X=(()=>{let i=class i{constructor(t,s,o){this.route=t,this.orderService=s,this.global=o,this.isLoading=!1,this.orders=[],this.model={icon:"fast-food-outline",title:"No Orders Placed Yet"},this.loadMore=!1,this.noMoreOrders=!1,this.limit=10,this.canGoBack=!1,F({fastFoodOutline:D,callOutline:H})}ngOnInit(){this.getParamsData(),this.ordersSub=this.orderService.ordersFiltered.subscribe({next:t=>{console.log("order data: ",t),this.orders=t},error:t=>{console.log(t)}}),this.getData()}getParamsData(){let t=this.route.snapshot.queryParams;t.data&&(this.filterType=t.data)}getData(){return g(this,null,function*(){try{this.isLoading=!0;let t=yield this.orderService.getPastOrdersHistory(this.filterType);this.isLoading=!1}catch(t){this.isLoading=!1,console.log(t),this.global.errorToast()}})}ngOnDestroy(){this.ordersSub&&this.ordersSub.unsubscribe(),this.orderService.resetFilters()}};i.\u0275fac=function(s){return new(s||i)(m(v),m(E),m(M))},i.\u0275cmp=u({type:i,selectors:[["app-orders-history"]],decls:9,vars:5,consts:[["slot","start",4,"ngIf"],[1,"ion-padding"],[4,"ngIf"],[3,"model",4,"ngIf"],["slot","start"],["defaultHref","/tabs/business"],[3,"model"],[3,"order",4,"ngFor","ngForOf"],[3,"order"]],template:function(s,o){s&1&&(a(0,"ion-header")(1,"ion-toolbar"),c(2,k,2,0,"ion-buttons",0),a(3,"ion-title"),h(4),l()()(),a(5,"ion-content",1),c(6,w,1,0,"app-loading-order",2)(7,N,1,1,"app-empty-screen",3)(8,q,2,1,"ion-list",2),l()),s&2&&(n(2),r("ngIf",o.filterType),n(2),y(o.filterType=="today"?"Today's Orders":o.filterType=="pending"?"Payout Pending Orders":"Past Orders"),n(2),r("ngIf",o.isLoading&&(o.orders==null?null:o.orders.length)==0),n(),r("ngIf",!o.isLoading&&(o.orders==null?null:o.orders.length)==0),n(),r("ngIf",!o.isLoading&&(o.orders==null?null:o.orders.length)>0))},dependencies:[S,L,I,b,C,P,T,O,_,x,j,B],styles:["div[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{height:2.5rem}div[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{font-weight:700;font-size:.8rem}"]});let e=i;return e})();export{X as OrdersHistoryPage};