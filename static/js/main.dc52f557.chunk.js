(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var a=c(15),s=c.n(a),n=c(8),r=c(5),i=c.n(r),l=c(10),o=c(3),j=c(1);function u(){return{get:function(e){return fetch(e,{headers:{"access-token":localStorage.getItem("Apptivity")}}).then((function(e){return e.json()}))},post:function(e,t){return fetch(e,{method:"POST",headers:{"access-token":localStorage.getItem("Apptivity"),Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()}))}}}var d=c(12),b=c(0),h=Object(j.createContext)();function p(e){var t=e.children,c=Object(j.useState)(null),a=Object(o.a)(c,2),s=a[0],n=a[1],r=u().post,p={user:s,login:function(){var e=Object(l.a)(i.a.mark((function e(t){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r("https://apptivity.herokuapp.com/api/login",t);case 2:if(!(c=e.sent).err){e.next=5;break}return e.abrupt("return",d.b.error(c.err));case 5:localStorage.setItem("Apptivity",c.token),n(t);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),register:function(){var e=Object(l.a)(i.a.mark((function e(t){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r("https://apptivity.herokuapp.com/api/register",t);case 2:if(!(c=e.sent).err){e.next=5;break}return e.abrupt("return",d.b.error(c.err));case 5:localStorage.setItem("Apptivity",c.token),d.b.success("Registro exitoso"),n(t);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),logout:function(){localStorage.removeItem("Apptivity"),n(null)},isLogged:function(){return!!s}};return Object(b.jsx)(h.Provider,{value:p,children:t})}var m=c(2);function x(){return Object(j.useContext)(h)}function O(){var e=Object(j.useState)(!1),t=Object(o.a)(e,2),c=t[0],a=t[1];return[c,function(){return a(!0)},function(){return a(!1)}]}function f(e){var t=e.active,c=e.close,a=e.title,s=e.func;return Object(b.jsxs)("div",{className:"modal"+(t?" is-active":""),children:[Object(b.jsx)("div",{className:"modal-background",onClick:c}),Object(b.jsxs)("div",{className:"modal-card",style:{maxWidth:"550px"},children:[Object(b.jsxs)("header",{className:"modal-card-head",children:[Object(b.jsxs)("p",{className:"modal-card-title",children:["Delete ",a]}),Object(b.jsx)("button",{className:"delete","aria-label":"close",onClick:c})]}),Object(b.jsx)("section",{className:"modal-card-body",children:Object(b.jsxs)("p",{children:["Are you sure you want to delete this activity ",Object(b.jsx)("b",{children:"permanently"}),"?"]})}),Object(b.jsxs)("footer",{className:"modal-card-foot is-justify-content-flex-end",style:{padding:"10px"},children:[Object(b.jsx)("button",{className:"button is-light",onClick:c,children:"Cancel"}),Object(b.jsx)("button",{className:"button is-danger",onClick:s,children:"Delete"})]})]})]})}function v(e){var t=e.data,c=e.destroy,a=e.check,s=O(),n=Object(o.a)(s,3),r=n[0],i=n[1],l=n[2],j=t._id,u=t.title,d=t.days,h=t.todayCheck;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f,{active:r,close:l,title:u,func:function(){return c(j)}}),Object(b.jsxs)("div",{className:"box",children:[Object(b.jsxs)("div",{className:"activityHeader",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{className:"title",children:u}),Object(b.jsxs)("p",{className:"subtitle",children:["Streak: ",d.length," days"]})]}),Object(b.jsx)("button",{className:"button is-danger",onClick:i,children:Object(b.jsx)("span",{className:"icon is-small",children:Object(b.jsx)("i",{className:"fas fa-trash"})})})]}),Object(b.jsx)("div",{className:"daysContainer",children:d.map((function(e){var t=e.split(" "),c=Object(o.a)(t,3),a=(c[0],c[1]),s=c[2];return Object(b.jsx)("div",{className:"day",children:"".concat(s,"/").concat(a)},e)}))}),Object(b.jsx)("div",{className:"has-text-centered",style:{marginTop:"10px"},children:h?Object(b.jsx)("button",{className:"button is-static",children:"Checked"}):Object(b.jsx)("button",{onClick:function(){return a(j)},className:"button is-primary",children:"Check"})})]})]})}function N(e){var t=e.active,c=e.close,a=e.func,s=Object(j.useState)(""),n=Object(o.a)(s,2),r=n[0],i=n[1];return Object(j.useEffect)((function(){return i("")}),[t]),Object(b.jsxs)("div",{className:"modal"+(t?" is-active":""),children:[Object(b.jsx)("div",{className:"modal-background",onClick:c}),Object(b.jsxs)("div",{className:"modal-card",style:{maxWidth:"550px"},children:[Object(b.jsxs)("header",{className:"modal-card-head",children:[Object(b.jsx)("p",{className:"modal-card-title",children:"New Activity"}),Object(b.jsx)("button",{className:"delete","aria-label":"close",onClick:c})]}),Object(b.jsx)("section",{className:"modal-card-body",children:Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{className:"label",children:"Title"}),Object(b.jsxs)("div",{className:"control has-icons-left",children:[Object(b.jsx)("input",{className:"input",type:"text",value:r,onChange:function(e){return i(e.target.value)},placeholder:"Activity title"}),Object(b.jsx)("span",{className:"icon is-left",children:Object(b.jsx)("i",{className:"fas fa-skiing-nordic"})})]})]})}),Object(b.jsxs)("footer",{className:"modal-card-foot is-justify-content-flex-end",style:{padding:"10px"},children:[Object(b.jsx)("button",{className:"button is-light",onClick:c,children:"Cancel"}),Object(b.jsx)("button",{className:"button is-success",onClick:function(){return a(r)},children:"Create"})]})]})]})}function g(){var e=Object(j.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1],s=O(),n=Object(o.a)(s,3),r=n[0],d=n[1],h=n[2],p=u(),m=p.get,f=p.post,g=function(){var e=Object(l.a)(i.a.mark((function e(t){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("https://apptivity.herokuapp.com/api/createactivity",{activityTitle:t});case 2:if(!(c=e.sent).err){e.next=5;break}return e.abrupt("return",alert(c.err));case 5:h(),k();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(l.a)(i.a.mark((function e(t){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("https://apptivity.herokuapp.com/api/deleteactivity",{activityId:t});case 2:if(!(c=e.sent).err){e.next=5;break}return e.abrupt("return",alert(c.err));case 5:k();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("https://apptivity.herokuapp.com/api/getactivities");case 2:if(!(t=e.sent).err){e.next=5;break}return e.abrupt("return",alert(t.err));case 5:a(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(l.a)(i.a.mark((function e(t){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("https://apptivity.herokuapp.com/api/checktoday",{activityId:t});case 2:if(!(c=e.sent).err){e.next=5;break}return e.abrupt("return",alert(c.err));case 5:k();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(j.useEffect)((function(){k()}),[]);var S=x(),w=S.logout,A=S.user;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(N,{active:r,close:h,func:g}),Object(b.jsxs)("div",{className:"section hero",children:[Object(b.jsxs)("header",{children:[Object(b.jsxs)("p",{className:"title",children:[A.name,"'s Activities"]}),Object(b.jsx)("button",{className:"button is-danger",onClick:w,children:"LogOut"})]}),Object(b.jsxs)("div",{style:{width:"100%",maxWidth:"800px",margin:"auto"},children:[c.map((function(e){return Object(b.jsx)(v,{data:e,destroy:y,check:C},e._id)})),Object(b.jsx)("div",{className:"newActivity box has-text-centered",onClick:d,children:"New Activity"})]})]})]})}var y={home:"/",login:"/login",register:"/register",activities:"/activities"};function k(){return Object(b.jsxs)("div",{className:"section",children:[Object(b.jsx)("h1",{className:"title",children:"Bienvenido a Apptivity"}),"es una aplicacion que te permitira crear actividades que debes realizar cada dia, podras llevar un seguimiento de tu racha.",Object(b.jsx)("b",{children:" \xa1Superate a ti mismo!"}),Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)(n.b,{to:y.register,className:"button is-primary",children:"Registrarme"}),Object(b.jsx)(n.b,{to:y.login,className:"button is-light",children:"Iniciar Sesi\xf3n"})]})]})}function C(){var e=Object(j.useState)(""),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(j.useState)(""),r=Object(o.a)(s,2),i=r[0],l=r[1],u=x().login;return Object(b.jsx)("div",{className:"hero section",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("p",{className:"title",children:"Inicio de Sesi\xf3n"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u({name:c,pass:i})},children:[Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{className:"label",children:"Nombre de usuario"}),Object(b.jsxs)("div",{className:"control has-icons-left",children:[Object(b.jsx)("input",{className:"input",type:"text",placeholder:"MrCano369",value:c,required:!0,onChange:function(e){return a(e.target.value)}}),Object(b.jsx)("span",{className:"icon is-small is-left",children:Object(b.jsx)("i",{className:"fas fa-user"})})]})]}),Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{className:"label",children:"Contrase\xf1a"}),Object(b.jsxs)("div",{className:"control has-icons-left",children:[Object(b.jsx)("input",{className:"input",type:"password",value:i,required:!0,onChange:function(e){return l(e.target.value)}}),Object(b.jsx)("span",{className:"icon is-small is-left",children:Object(b.jsx)("i",{className:"fas fa-lock"})})]})]}),Object(b.jsx)("div",{className:"has-text-centered",children:Object(b.jsx)("button",{className:"button is-primary",children:"Acceder"})})]}),"No tengo cuenta, ",Object(b.jsx)(n.b,{to:y.register,children:"Registrarme"})]})})}function S(){return Object(b.jsx)("div",{children:Object(b.jsx)("p",{className:"title",children:"Not Found"})})}function w(){var e=Object(j.useState)(""),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(j.useState)(""),r=Object(o.a)(s,2),i=r[0],l=r[1],u=Object(j.useState)(""),d=Object(o.a)(u,2),h=d[0],p=d[1],m=x().register;return Object(b.jsx)("div",{className:"hero section",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("p",{className:"title",children:"Registro"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m({email:c,name:i,pass:h})},children:[Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{className:"label",children:"Correo electr\xf3nico"}),Object(b.jsxs)("div",{className:"control has-icons-left",children:[Object(b.jsx)("input",{className:"input",type:"email",placeholder:"acano3@ucol.mx",value:c,required:!0,onChange:function(e){return a(e.target.value)}}),Object(b.jsx)("span",{className:"icon is-small is-left",children:Object(b.jsx)("i",{className:"fas fa-user"})})]})]}),Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{className:"label",children:"Nombre de usuario"}),Object(b.jsxs)("div",{className:"control has-icons-left",children:[Object(b.jsx)("input",{className:"input",type:"text",placeholder:"MrCano369",value:i,required:!0,onChange:function(e){return l(e.target.value)}}),Object(b.jsx)("span",{className:"icon is-small is-left",children:Object(b.jsx)("i",{className:"fas fa-user"})})]})]}),Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{className:"label",children:"Contrase\xf1a"}),Object(b.jsxs)("div",{className:"control has-icons-left",children:[Object(b.jsx)("input",{className:"input",type:"password",value:h,required:!0,onChange:function(e){return p(e.target.value)}}),Object(b.jsx)("span",{className:"icon is-small is-left",children:Object(b.jsx)("i",{className:"fas fa-lock"})})]})]}),Object(b.jsx)("div",{className:"has-text-centered",children:Object(b.jsx)("button",{className:"button is-primary",children:"Registrarme"})})]}),"Ya tengo cuenta, ",Object(b.jsx)(n.b,{to:y.login,children:"Iniciar Sesi\xf3n"})]})})}var A=c(16);function I(e){return(0,x().isLogged)()?Object(b.jsx)(m.b,Object(A.a)({},e)):Object(b.jsx)(m.a,{to:y.login})}function q(e){return(0,x().isLogged)()?Object(b.jsx)(m.a,{to:y.activities}):Object(b.jsx)(m.b,Object(A.a)({},e))}function R(){return Object(b.jsxs)(m.d,{children:[Object(b.jsx)(q,{exact:!0,path:y.home,component:k}),Object(b.jsx)(q,{exact:!0,path:y.login,component:C}),Object(b.jsx)(q,{exact:!0,path:y.register,component:w}),Object(b.jsx)(I,{exact:!0,path:y.activities,component:g}),Object(b.jsx)(m.b,{path:"*",component:S})]})}c(33);function T(){return fetch("https://apptivity.herokuapp.com/servertime"),Object(b.jsx)(p,{children:Object(b.jsxs)(n.a,{children:[Object(b.jsx)(d.a,{}),Object(b.jsx)(R,{})]})})}c(34),c(35),c(39);s.a.render(Object(b.jsx)(T,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.dc52f557.chunk.js.map