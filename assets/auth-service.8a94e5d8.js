import{v as i}from"./index.a3c5a5ee.js";class n extends i{constructor(){super(),this.prefixApi="api",this.controllerName="login",this.initAPI()}async login(t,s=null){const e=`${this.baseUrl}/connect/token`;return await this.http.post(e,t,s)}async logout(){const t=`${this.baseUrl}/${this.prefixApi}/logout`;return await this.http.post(t,{})}async updateUserInfo(t){const s=`${this.baseUrl}/${this.prefixApi}/update-info`;return await this.http.post(s,t)}async changePassword(t){const s=`${this.baseUrl}/${this.prefixApi}/change-password`;return await this.http.post(s,t)}async loginV2(t){const s=`${this.baseUrl}/connect/token`,e={headers:{"Content-Type":"application/x-www-form-urlencoded"}};return await this.http.post(s,t,e)}}const a=new n;export{a};
