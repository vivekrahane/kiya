"use strict";(self.webpackChunkkiya=self.webpackChunkkiya||[]).push([[6611],{36611:(F,h,o)=>{o.r(h),o.d(h,{AdvancedSearchModule:()=>U,routes:()=>p});var n=o(4521),m=o(47423),u=o(77446),d=o(67322),f=o(98833),v=o(74107),g=o(81132),A=o(44466),c=o(63191),Z=o(77579),x=o(82722),e=o(5e3),i=o(93075),T=o(90508),b=o(80651),y=o(69808);const p=[{path:"",component:(()=>{class s{constructor(t,r,a){this._activatedRoute=t,this._formBuilder=r,this._router=a,this.searchFormDefaults={keywords:"",type:"any",isTrashed:!1,isArchived:!1,isStarred:!1},this._unsubscribeAll=new Z.x,this.searchForm=this._formBuilder.group({keywords:[this.searchFormDefaults.keywords],type:[this.searchFormDefaults.type],isTrashed:[this.searchFormDefaults.isTrashed],isArchived:[this.searchFormDefaults.isArchived],isStarred:[this.searchFormDefaults.isStarred]})}ngOnInit(){this._activatedRoute.queryParams.pipe((0,x.R)(this._unsubscribeAll)).subscribe(t=>{var r,a;this.queryParams=t,this.searchForm.setValue({keywords:null!==(r=null==t?void 0:t.keywords)&&void 0!==r?r:this.searchFormDefaults.keywords,type:null!==(a=null==t?void 0:t.type)&&void 0!==a?a:this.searchFormDefaults.type,isTrashed:(null==t?void 0:t.isTrashed)?(0,c.Ig)(null==t?void 0:t.isTrashed):this.searchFormDefaults.isTrashed,isArchived:(null==t?void 0:t.isArchived)?(0,c.Ig)(null==t?void 0:t.isArchived):this.searchFormDefaults.isArchived,isStarred:(null==t?void 0:t.isStarred)?(0,c.Ig)(null==t?void 0:t.isStarred):this.searchFormDefaults.isStarred},{emitEvent:!1})})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}reset(){this.searchForm.reset(this.searchFormDefaults)}search(){this._router.navigate(["./"],{queryParams:this.searchForm.value,relativeTo:this._activatedRoute})}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(n.gz),e.Y36(i.qu),e.Y36(n.F0))},s.\u0275cmp=e.Xpm({type:s,selectors:[["advanced-search"]],decls:64,vars:18,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","p-6","sm:py-8","sm:px-10","border-b","bg-card","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],[1,"whitespace-nowrap","text-primary-500"],[1,"mt-2"],[1,"text-3xl","md:text-4xl","font-extrabold","tracking-tight","leading-7","sm:leading-10","truncate"],[1,"flex-auto","p-6","sm:p-10"],[1,"max-w-3xl"],[1,"max-w-3xl","prose","prose-sm"],[1,"flex","flex-col","items-start","w-full","max-w-3xl","mt-8","p-8","space-y-8","rounded-2xl","shadow","overflow-hidden","bg-card",3,"formGroup"],[1,"kiya-mat-no-subscript","w-full"],["matInput","",3,"autocomplete","formControlName"],[3,"formControlName"],[3,"value"],[1,"flex","items-center","space-x-8"],[3,"color","formControlName"],[1,"flex","items-center","justify-end","w-full","mt-8"],["type","button","mat-button","",3,"click"],["type","button","mat-flat-button","",1,"ml-2",3,"color","click"],[1,"dark","w-full","mt-8","p-4","rounded-2xl","overflow-hidden"],["kiya-highlight","",3,"code","lang"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e._uU(6,"User Interface"),e.qZA()()(),e.TgZ(7,"div",5)(8,"h2",6),e._uU(9," Advanced Search "),e.qZA()()()(),e.TgZ(10,"div",7)(11,"div",8)(12,"div",9)(13,"p"),e._uU(14," This page demonstrates a query parameters based search using Angular's built-in "),e.TgZ(15,"code"),e._uU(16,"routerLink"),e.qZA(),e._uU(17," directive and its "),e.TgZ(18,"code"),e._uU(19,"queryParams"),e.qZA(),e._uU(20," input. "),e.qZA(),e.TgZ(21,"p"),e._uU(22," Fill the form, hit the "),e.TgZ(23,"strong"),e._uU(24,"Search"),e.qZA(),e._uU(25," button and then observe the address bar of your browser. If you reload the page with the parameters, you will see that the form will be populated automatically. We also added an output window so you can observe the query parameters object. "),e.qZA(),e.TgZ(26,"p"),e._uU(27," This method can be used for implementing "),e.TgZ(28,"em"),e._uU(29,"Advanced search"),e.qZA(),e._uU(30," mechanics as well as "),e.TgZ(31,"em"),e._uU(32,"Filtering"),e.qZA(),e._uU(33," similar to the products filtering that you can find in most eCommerce websites. "),e.qZA()(),e.TgZ(34,"form",10)(35,"mat-form-field",11)(36,"mat-label"),e._uU(37,"Keywords"),e.qZA(),e._UZ(38,"input",12),e.qZA(),e.TgZ(39,"mat-form-field",11)(40,"mat-label"),e._uU(41,"Type"),e.qZA(),e.TgZ(42,"mat-select",13)(43,"mat-option",14),e._uU(44,"Any"),e.qZA(),e.TgZ(45,"mat-option",14),e._uU(46,"Files"),e.qZA(),e.TgZ(47,"mat-option",14),e._uU(48,"Folders"),e.qZA()()(),e.TgZ(49,"div",15)(50,"mat-checkbox",16),e._uU(51," In trash "),e.qZA(),e.TgZ(52,"mat-checkbox",16),e._uU(53," Archived "),e.qZA(),e.TgZ(54,"mat-checkbox",16),e._uU(55," Starred "),e.qZA()(),e.TgZ(56,"div",17)(57,"button",18),e.NdJ("click",function(){return r.reset()}),e._uU(58,"Reset "),e.qZA(),e.TgZ(59,"button",19),e.NdJ("click",function(){return r.search()}),e._uU(60,"Search "),e.qZA()()(),e.TgZ(61,"div",20),e._UZ(62,"textarea",21),e.ALo(63,"json"),e.qZA()()()()),2&t&&(e.xp6(34),e.Q6J("formGroup",r.searchForm),e.xp6(4),e.Q6J("autocomplete","off")("formControlName","keywords"),e.xp6(4),e.Q6J("formControlName","type"),e.xp6(1),e.Q6J("value","any"),e.xp6(2),e.Q6J("value","files"),e.xp6(2),e.Q6J("value","folders"),e.xp6(3),e.Q6J("color","primary")("formControlName","isTrashed"),e.xp6(2),e.Q6J("color","primary")("formControlName","isArchived"),e.xp6(2),e.Q6J("color","primary")("formControlName","isStarred"),e.xp6(5),e.Q6J("color","primary"),e.xp6(3),e.Q6J("code",e.lcZ(63,16,r.queryParams))("lang","json"))},directives:[i._Y,i.JL,i.sg,d.KE,d.hX,f.Nt,i.Fj,i.JJ,i.u,v.gD,T.ey,u.oG,m.lW,b.F],pipes:[y.Ts],encapsulation:2,changeDetection:0}),s})()}];let U=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[n.Bz.forChild(p),m.ot,u.p9,d.lN,f.c,v.LD,g.Yp,A.m]]}),s})()}}]);