webpackJsonp([1],{"+rkr":function(e,t,a){"use strict";var n=a("mtWM"),r=a.n(n),s={name:"UserBalance",data:function(){return{username:"",balance:0}},created:function(){this.username=this.$route.params.username;let e=this;r.a.get("https://aw-cajero-back.herokuapp.com/user/balance/"+this.username).then(t=>{e.balance=t.data.balance}).catch(e=>{alert("ERROR Servidor")})}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"UserBalance"}},[a("h2",[e._v(e._s(e.username))]),e._v(" "),a("h2",[e._v("Tu saldo es: "),a("span",[e._v("  "+e._s(e.balance)+" COP ")])])])},staticRenderFns:[]};var i=a("VU/8")(s,u,!1,function(e){a("LJdd")},null,null);t.a=i.exports},"1O/e":function(e,t){},LJdd:function(e,t){},M93x:function(e,t,a){"use strict";var n={name:"App",components:{},data:function(){return{is_auth:localStorage.getItem("isAuth")||!1}},methods:{init:function(){if("user"!=this.$route.name){let e=localStorage.getItem("current_username");this.$router.push({name:"user",params:{username:e}})}},getBalance:function(){if("user_balance"!=this.$route.name){let e=localStorage.getItem("current_username");this.$router.push({name:"user_balance",params:{username:e}})}}},beforeCreate:function(){localStorage.setItem("current_username","camilo24"),localStorage.setItem("isAuth",!0),this.$router.push({name:"user",params:{username:"camilo24"}})}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"header"},[a("h1",[e._v("Banco UN")]),e._v(" "),a("nav",[e.is_auth?a("button",{on:{click:e.init}},[e._v(" Inicio ")]):e._e(),e._v(" "),e.is_auth?a("button",{on:{click:e.getBalance}},[e._v(" Saldo ")]):e._e(),e._v(" "),e.is_auth?a("button",[e._v(" Transacción ")]):e._e(),e._v(" "),e.is_auth?a("button",[e._v("Cerrar Sesión")]):e._e()])]),e._v(" "),a("div",{staticClass:"main-component"},[a("router-view")],1),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"footer"},[t("h2",[this._v("Misión TIC 2022")])])}]};var s=a("VU/8")(n,r,!1,function(e){a("1O/e")},null,null);t.a=s.exports},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),r=a("M93x"),s=a("/ocq"),u=a("cHtD");n.a.use(s.a),n.a.config.productionTip=!1,new n.a({router:u.a,el:"#app",components:{App:r.a},template:"<App/>"})},Wewo:function(e,t){},cHtD:function(e,t,a){"use strict";(function(e){var n=a("/ocq"),r=a("jyJz"),s=a("+rkr"),u=a("M93x");const i=new n.a({mode:"history",base:e,routes:[{path:"/",name:"root",component:u.a},{path:"/user/:username",name:"user",component:r.a},{path:"/user/balance/:username",name:"user_balance",component:s.a}]});t.a=i}).call(t,"/")},jyJz:function(e,t,a){"use strict";var n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"User"}},[t("h2",[this._v("Hola  "),t("span",[this._v(" "+this._s(this.username)+", ")]),this._v("  ¡Bienvenido!")])])},staticRenderFns:[]};var r=a("VU/8")({name:"User",data:function(){return{username:"none"}},created:function(){this.username=this.$route.params.username}},n,!1,function(e){a("Wewo")},null,null);t.a=r.exports}},["NHnr"]);
//# sourceMappingURL=app.eccb18096a2263a51865.js.map