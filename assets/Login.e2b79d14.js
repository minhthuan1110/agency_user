var ee=Object.defineProperty;var se=(i,d,t)=>d in i?ee(i,d,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[d]=t;var p=(i,d,t)=>(se(i,typeof d!="symbol"?d+"":d,t),t);import{d as oe,dG as ae,dQ as D,u as ne,c as te,ds as le,r as y,o as re,g as N,h as P,i as s,F as ie,cP as de,cQ as ue,t as u,dt as w,x as c,k as _,y as W,n as A,p as ce,q as ge,B as me,dJ as q,dO as he,dK as _e,dw as x,P as ve,R as G,s as pe}from"./index.a3c5a5ee.js";import{B as v}from"./BaseInput.9f8543fa.js";import{a as we}from"./auth-service.8a94e5d8.js";import{L as Q,a as fe}from"./login-param.68049c90.js";import{E as Le}from"./error-code-enum.da80d5c7.js";import"./text_box.c18f19ed.js";class V{constructor(d="",t="",l="",O="",g="",r="",R=""){p(this,"name");p(this,"surName");p(this,"fullname");p(this,"phoneNumber");p(this,"email");p(this,"userName");p(this,"password");this.name=d,this.surName=t,this.fullname=l,this.email=O,this.userName=g,this.phoneNumber=r,this.password=R}}const f=i=>(ce("data-v-489cf799"),i=i(),ge(),i),ye={class:"login-container w-100 h-100"},Te={class:"login-form"},be={class:"w-100 d-flex pointer"},Se=["onClick"],Ne={key:0,class:"main-form"},Pe={class:"group-form"},Oe={class:"label"},Ce=f(()=>s("span",{style:{color:"red"}}," *",-1)),Ee={class:"flex1"},ke={class:"group-form"},Re={class:"label"},Ie=f(()=>s("span",{style:{color:"red"}}," *",-1)),xe={class:"flex1"},Ve={class:"button w-100"},Me={key:1,class:"main-form"},$e={class:"group-form"},Ke={class:"label"},Ue=f(()=>s("span",{style:{color:"red"}}," *",-1)),Fe={class:"flex1"},Be={class:"group-form"},De={class:"label"},We=f(()=>s("span",{style:{color:"red"}}," *",-1)),Ae={class:"flex1"},qe={class:"group-form"},Ge={class:"label"},Qe=f(()=>s("span",{style:{color:"red"}}," *",-1)),Ye={class:"flex1"},ze={class:"group-form"},Je={class:"label"},je={class:"flex1"},He={class:"group-form"},Xe={class:"label"},Ze=f(()=>s("span",{style:{color:"red"}}," *",-1)),es={class:"flex1"},ss={class:"group-form"},os={class:"label"},as=f(()=>s("span",{style:{color:"red"}}," *",-1)),ns={class:"flex1"},ts={class:"group-form"},ls={class:"label"},rs=f(()=>s("span",{style:{color:"red"}}," *",-1)),is={class:"flex1"},ds={class:"button w-100"},us=oe({__name:"Login",setup(i){let d=ae(D.AutoLike_Theme)||"Default";const t=ne(),{t:l}=te(),O=le(),g=y(!1),r=new me,R=y([{ID:1,TabName:"Login.Register"},{ID:2,TabName:"Login.Login"}]),S=y(2);let m=y(new Q("","","","password","admin_autofarmer","K7gNU3sdo+OL0wNhqoVWhr3g6s1xYv72ol/pe/Unols=")),n=y(new V);const C=y({Mode:"password",IsShowPassword:!1}),E=y({Mode:"password",IsShowPassword:!1});re(()=>{});function Y(e){S.value=e.ID,n.value=new V,m.value=new Q("","","","password","admin_autofarmer","K7gNU3sdo+OL0wNhqoVWhr3g6s1xYv72ol/pe/Unols=")}async function M(e=""){return await(t==null?void 0:t.recaptchaLoaded()),await(t==null?void 0:t.executeRecaptcha(e))}async function z(e){if(!e.username||!e.password){r.showToastWarning(l("ToastMessgage.LoginEmpty"));return}g.value=!0;const o=new URLSearchParams;o.append("grant_type",e.grant_type),o.append("client_id",e.client_id),o.append("client_secret",e.client_secret),o.append("username",e.username),o.append("password",e.password);const a=await M("Login"),b={headers:{"content-type":"application/x-www-form-urlencoded","Access-Control-Allow-Origin":"*",captcha:a}};try{const k=await we.login(o,b);if(k.access_token){q(D.Token,k.token_type+" "+k.access_token),r.showToastSuccess(l("ToastMessgage.LoginSuccess"));const I=await he.getUserInfo();if(I&&I.data){const B=I.data;O&&O.commit("GET_USER_INFO",B);const h=B.settings,Z=h!=null&&h.consoleTheme?h==null?void 0:h.consoleTheme:h==null?void 0:h.theme;q(_e.AutoLike_Theme,Z||"Default")}g.value=!1,x.push(ve[d].Dashboard)}else g.value=!1,r.showToastError(l("ToastMessgage.LoginError"))}catch{g.value=!1,r.showToastError(l("ToastMessgage.LoginError"))}}function $(){z(m.value)}function K(e){$()}function U(e){setTimeout(()=>{e.component.focus()},0)}function F(e,o){e==null||!o||(m.value[o]=e)}function T(e,o){e==null||!o||(n.value[o]=e,n.value.fullname=n.value.surName+" "+n.value.name)}async function L(){if(!J())return;g.value=!0;const o=await M("Register"),a={method:"POST",headers:{"Access-Control-Allow-Origin":"*",captcha:o}},b=await fe.registerUser(n.value,a);b&&b.data?(r.showToastSuccess(l("Login.Toast_Register_Success")),m.value.username=n.value.userName,m.value.password=n.value.password,S.value=2,n.value=new V):b.errorCode==Le.UsernameExisted?r.showToastWarning(l("Login.Toast_UsernameExisted")):r.showToastError(l("Login.Toast_Register_Fail")),g.value=!1}function J(){return!n.value.name||!n.value.surName?(r.showToastWarning(l("ToastMessgage.FullnameEmpty")),!1):n.value.phoneNumber?!n.value.userName||!n.value.password?(r.showToastWarning(l("ToastMessgage.LoginEmpty")),!1):!0:(r.showToastWarning(l("ToastMessgage.PhoneNumberEmpty")),!1)}function j(e){C.value.Mode=e?"text":"password",C.value.IsShowPassword=e}function H(e){E.value.Mode=e?"text":"password",E.value.IsShowPassword=e}function X(){m.value.username?x.push({name:G.ForgotPassword,query:{username:m.value.username}}):x.push({name:G.ForgotPassword})}return(e,o)=>(N(),P("div",ye,[s("div",Te,[s("div",be,[(N(!0),P(ie,null,de(R.value,a=>(N(),P("div",{key:a.ID,class:ue(["title-form flex1",{active:S.value==a.ID}]),onClick:b=>Y(a)},u(e.$t(a.TabName)),11,Se))),128))]),S.value==2?(N(),P("div",Ne,[s("div",Pe,[s("div",Oe,[w(u(e.$t("Login.Username_Label")),1),Ce]),s("div",Ee,[c(v,{value:_(m).username,onOnValueChanged:o[0]||(o[0]=a=>F(a,"username")),onOnContentReady:U,onOnEnterKey:K},null,8,["value"])])]),s("div",ke,[s("div",Re,[w(u(e.$t("Login.Password_Label")),1),Ie]),s("div",xe,[c(v,{mode:C.value.Mode,isShowPassword:C.value.IsShowPassword,value:_(m).password,onOnValueChanged:o[1]||(o[1]=a=>F(a,"password")),onOnEnterKey:K,onOnToggleShowPassword:j},null,8,["mode","isShowPassword","value"])])]),s("div",{class:"forgot-password text-right pointer",onClick:X},[s("a",null,u(e.$t("Login.Forgot_Password")),1)]),s("div",Ve,[c(W,{width:"100%",height:"50px",text:e.$t("Login.Login"),type:"default","styling-mode":"contained",loading:g.value,onOnClick:$},null,8,["text","loading"])])])):A("",!0),S.value==1?(N(),P("div",Me,[s("div",$e,[s("div",Ke,[w(u(e.$t("Login.SurName_Label")),1),Ue]),s("div",Fe,[c(v,{value:_(n).surName,onOnValueChanged:o[2]||(o[2]=a=>T(a,"surName")),onOnContentReady:U,onOnEnterKey:L},null,8,["value"])])]),s("div",Be,[s("div",De,[w(u(e.$t("Login.Name_Label")),1),We]),s("div",Ae,[c(v,{value:_(n).name,onOnValueChanged:o[3]||(o[3]=a=>T(a,"name")),onOnEnterKey:L},null,8,["value"])])]),s("div",qe,[s("div",Ge,[w(u(e.$t("Login.FullName_Label")),1),Qe]),s("div",Ye,[c(v,{value:_(n).fullname,disabled:!0},null,8,["value"])])]),s("div",ze,[s("div",Je,u(e.$t("Login.Email_Label")),1),s("div",je,[c(v,{value:_(n).email,onOnValueChanged:o[4]||(o[4]=a=>T(a,"email")),onOnEnterKey:L},null,8,["value"])])]),s("div",He,[s("div",Xe,[w(u(e.$t("Login.Mobile_Label")),1),Ze]),s("div",es,[c(v,{value:_(n).phoneNumber,onOnValueChanged:o[5]||(o[5]=a=>T(a,"phoneNumber")),onOnEnterKey:L},null,8,["value"])])]),s("div",ss,[s("div",os,[w(u(e.$t("Login.Username_Label")),1),as]),s("div",ns,[c(v,{value:_(n).userName,onOnValueChanged:o[6]||(o[6]=a=>T(a,"userName")),onOnEnterKey:L},null,8,["value"])])]),s("div",ts,[s("div",ls,[w(u(e.$t("Login.Password_Label")),1),rs]),s("div",is,[c(v,{mode:E.value.Mode,isShowPassword:E.value.IsShowPassword,value:_(n).password,onOnValueChanged:o[7]||(o[7]=a=>T(a,"password")),onOnEnterKey:L,onOnToggleShowPassword:H},null,8,["mode","isShowPassword","value"])])]),s("div",ds,[c(W,{width:"100%",height:"50px",text:e.$t("Login.Register"),type:"default","styling-mode":"contained",loading:g.value,onOnClick:L},null,8,["text","loading"])])])):A("",!0)])]))}});const ws=pe(us,[["__scopeId","data-v-489cf799"]]);export{ws as default};
