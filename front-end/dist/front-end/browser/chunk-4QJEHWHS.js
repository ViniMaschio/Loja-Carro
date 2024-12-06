import{d as U,h as S,l as b,m as s,n as x,o as F,p as y,q as E,r as I,s as N,t as _,u as A,v as d}from"./chunk-6PT4UYOJ.js";import{$ as c,$a as C,D as v,Oa as h,Qa as n,Ra as t,Sa as r,T as R,Va as g,Y as B,_a as o,cb as u,ya as p,za as a}from"./chunk-57XQHXSI.js";var w={production:!1,API:"http://localhost:3001"};var f=class l{constructor(i){this.http=i}environment=w;login(i){return this.http.get(w.API+"/cliente?email="+i)}createAcount(i){return this.http.post(w.API+"/cliente",JSON.stringify(i))}static \u0275fac=function(e){return new(e||l)(B(U))};static \u0275prov=R({token:l,factory:l.\u0275fac,providedIn:"root"})};var j=class l{constructor(i,e,m,P){this.authServive=i;this.acountService=e;this.formBuilde=m;this.router=P;this.formulario=this.formBuilde.group({email:[null,[s.required,s.email]],password:[null,[s.required,s.minLength(6)]]})}formulario;cliente;ngOnInit(){}onSubmit(){if(this.formulario.valid){let i=this.formulario.get("email").value;this.acountService.login(i).pipe(v(1)).subscribe({next:e=>{e.length>0?(this.cliente=e,this.validaUser(this.cliente[0])):alert("Email n\xE3o cadastrado")},error:e=>{alert("Erro ao fazer login"+e.message)}})}}validaUser(i){let e=this.formulario.get("password").value;if(i.senha==e){let m={id:this.cliente[0].id,name:this.cliente[0].nome,email:this.cliente[0].email,token:"1234567"};this.authServive.login(m),this.router.navigate(["/home"])}else alert("Senha incorreta")}static \u0275fac=function(e){return new(e||l)(a(d),a(f),a(N),a(S))};static \u0275cmp=c({type:l,selectors:[["app-login-cliente"]],standalone:!0,features:[u],decls:18,vars:1,consts:[[1,"col-5"],[3,"ngSubmit","formGroup"],[1,"row"],["for","email login"],["type","email","id","email login","aria-describedby","emailHelp","placeholder","exemplo@email.com","formControlName","email",1,"form-control"],["id","emailHelp",1,"form-text","text-muted"],["for","password login"],["type","password","id","password login","placeholder","Senha","formControlName","password",1,"form-control"],[1,"btn","btn-primary"]],template:function(e,m){e&1&&(n(0,"div",0)(1,"h3"),o(2,"Fa\xE7a seu login"),t(),n(3,"form",1),g("ngSubmit",function(){return m.onSubmit()}),n(4,"div",2)(5,"label",3),o(6,"Email:"),t(),r(7,"input",4),n(8,"small",5),o(9,"Nunca compartilhe seu email com alguem."),t()(),r(10,"br"),n(11,"div",2)(12,"label",6),o(13,"Senha:"),t(),r(14,"input",7),t(),r(15,"br"),n(16,"button",8),o(17,"Entrar"),t()()()),e&2&&(p(3),h("formGroup",m.formulario))},dependencies:[_,y,b,x,F,A,E,I]})};var L=class l{constructor(i,e,m,P){this.formBuilder=i;this.acountService=e;this.authServive=m;this.router=P;this.registerForm=this.formBuilder.group({nome:[null,s.required],email:[null,[s.required,s.email]],senha:[null,[s.required,s.minLength(6)]]})}registerForm;ngOnInit(){}onSubmit(){this.registerForm.valid&&this.acountService.createAcount(this.registerForm.value).pipe(v(1)).subscribe({next:i=>{this.fazerLogin(i)}})}fazerLogin(i){let e={id:i.id,name:i.nome,email:i.email,token:"123456"};this.authServive.login(e),this.router.navigate(["/home"])}static \u0275fac=function(e){return new(e||l)(a(N),a(f),a(d),a(S))};static \u0275cmp=c({type:l,selectors:[["app-create-cliente"]],standalone:!0,features:[u],decls:21,vars:1,consts:[[1,"col-5"],[3,"ngSubmit","formGroup"],[1,"row"],["for","nome",1,"form-label"],["type","text","id","nome","formControlName","nome","placeholder","Seu nome",1,"form-control"],["for","email",1,"form-label"],["type","email","id","email","formControlName","email","placeholder","exemplo@email.com",1,"form-control"],["for","senha",1,"form-label"],["type","password","id","senha","formControlName","senha","placeholder","Sua senha",1,"form-control"],["type","submit",1,"btn","btn-primary"]],template:function(e,m){e&1&&(n(0,"div",0)(1,"h3"),o(2,"Fa\xE7a seu cadastro"),t(),n(3,"form",1),g("ngSubmit",function(){return m.onSubmit()}),n(4,"div",2)(5,"label",3),o(6,"Nome:"),t(),r(7,"input",4),t(),r(8,"br"),n(9,"div",2)(10,"label",5),o(11,"Email:"),t(),r(12,"input",6),t(),r(13,"br"),n(14,"div",2)(15,"label",7),o(16,"Senha:"),t(),r(17,"input",8),t(),r(18,"br"),n(19,"button",9),o(20,"Cadastrar"),t()()()),e&2&&(p(3),h("formGroup",m.registerForm))},dependencies:[A,y,b,x,F,E,I]})};var G=class l{constructor(){}ngOnInit(){}static \u0275fac=function(e){return new(e||l)};static \u0275cmp=c({type:l,selectors:[["app-auth-client-page"]],standalone:!0,features:[u],decls:8,vars:0,consts:[[1,"container","text-center"],[1,"row"],[1,"col"],[1,"form"]],template:function(e,m){e&1&&(n(0,"div",0),r(1,"br")(2,"br"),n(3,"div",1)(4,"div",2),r(5,"app-login-cliente",3),t(),n(6,"div",2),r(7,"app-create-cliente",3),t()()())},dependencies:[j,L],styles:[".form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}"]})};var M=class l{constructor(i){this.authService=i;this.cliente=this.authService.getUser()}cliente;static \u0275fac=function(e){return new(e||l)(a(d))};static \u0275cmp=c({type:l,selectors:[["app-list-clients"]],standalone:!0,features:[u],decls:24,vars:3,consts:[[1,"container"],[1,"row"],[1,"col-12"],[1,"table"],[1,"col-1"],[1,"col-7"],[1,"col-4"]],template:function(e,m){e&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1"),o(4,"Cliente"),t()()(),n(5,"div",1)(6,"div",2)(7,"table",3)(8,"thead")(9,"tr")(10,"th",4),o(11,"#"),t(),n(12,"th",5),o(13,"Nome"),t(),n(14,"th",6),o(15,"Email"),t()()(),n(16,"tbody")(17,"tr")(18,"td"),o(19),t(),n(20,"td"),o(21),t(),n(22,"td"),o(23),t()()()()()()()),e&2&&(p(19),C(m.cliente.id),p(2),C(m.cliente.name),p(2),C(m.cliente.email))}})};var se=[{path:"",component:G},{path:"cliente",component:M}];export{se as ClienteRoutes};
