import{d as g,b as L,r as h,w as x,P as p,g as r,j as B,m as N,i,h as c,cP as I,F as _,cQ as v,k as d,t as k,n as C,dL as T,p as G,q as H,R as S,dw as f,s as E}from"./index.a3c5a5ee.js";import{L as b}from"./listtab.8c391e34.js";const P={class:"sidebar-container w-100 h-100"},$={class:"sidebar-item"},j=["onClick"],F={class:"sidebar-icon"},O={class:"sidebar-name"},V={key:0,class:"list-child"},q=["onClick"],z={key:0,class:"sidebar-divine"},M=g({__name:"TheSidebar",props:{isExpand:{type:Boolean,default:!1}},emits:["onClickSidebar"],setup(y,{emit:R}){const Q=y,m=L();let u=h(b),t=h(u.value[0]),o=h(null);x(()=>m.path,async e=>{for(const a in p)if(Object.prototype.hasOwnProperty.call(p,a)){const n=p[a];if(n!==""&&(e.includes(n)||e.includes(n.replace("/:tab","")))){var l=b.find(s=>s.Router==a)||b[0];t.value=l;return}}},{immediate:!0});function w(e){var l,a,n;R("onClickSidebar",!0),e&&(o.value=null,t.value=e,e.IsShowChild=((l=e.ListChild)==null?void 0:l.length)>0,u.value.forEach(s=>{s.ID!=e.ID&&(s.IsShowChild=!1)}),t.value.Router==S.EarnMoney||t.value.Router==S.Report?(o.value=(a=o.value)!=null?a:t.value.ListChild[0],f.push({name:(n=t.value)==null?void 0:n.Router,params:{tab:o.value.Router}})):f.push({name:e==null?void 0:e.Router}))}function D(e){var l;!e||(o.value=e,f.push({name:(l=t.value)==null?void 0:l.Router,params:{tab:o.value.Router}}))}return(e,l)=>(r(),B(d(T),{height:"calc(100vh - 68px)"},{default:N(()=>[i("div",P,[(r(!0),c(_,null,I(d(u),(a,n)=>(r(),c(_,{key:a.ID},[i("div",$,[i("div",{class:v(["sidebar-parent-item d-flex align-items-center",{active:d(t).ID==a.ID}]),onClick:s=>w(a)},[i("div",F,[i("span",{class:v(["icon",a.Icon])},null,2)]),i("div",O,k(e.$t(a.Name)),1)],10,j),a.ListChild&&a.IsShowChild==!0?(r(),c("div",V,[(r(!0),c(_,null,I(a.ListChild,s=>(r(),c("div",{class:v(["sidebar-child-item",{active:d(o)&&s&&d(o).ID==s.ID}]),key:s.ID,onClick:U=>D(s)},k(e.$t(s.Name)),11,q))),128))])):C("",!0)]),n==d(u).length-3?(r(),c("div",z)):C("",!0)],64))),128))])]),_:1},8,["height"]))}});const K=E(M,[["__scopeId","data-v-db302e6d"]]);export{K as default};
