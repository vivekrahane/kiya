"use strict";(self.webpackChunkkiya=self.webpackChunkkiya||[]).push([[6007],{16007:(T,c,e)=>{e.r(c),e.d(c,{ConfirmationDialogModule:()=>U,routes:()=>g});var f=e(4521),s=e(47423),u=e(77446),l=e(67322),p=e(98833),d=e(74107),x=e(81132),Z=e(44466),o=e(5e3),i=e(93075),h=e(71020),m=e(69808),v=e(90508),C=e(80651);function y(t,a){if(1&t&&(o.ynx(0),o.TgZ(1,"mat-option",34),o._uU(2),o.ALo(3,"titlecase"),o.qZA(),o.BQk()),2&t){const n=a.$implicit;o.xp6(1),o.Q6J("value",n),o.xp6(1),o.Oqu(o.lcZ(3,2,n))}}function A(t,a){if(1&t&&(o.ynx(0),o.TgZ(1,"mat-option",34),o._uU(2),o.ALo(3,"titlecase"),o.qZA(),o.BQk()),2&t){const n=a.$implicit;o.xp6(1),o.Q6J("value",n),o.xp6(1),o.Oqu(o.lcZ(3,2,n))}}const b=function(){return["primary","accent","warn","basic","info","success","warning","error"]},w=function(){return["primary","accent","warn"]},g=[{path:"",component:(()=>{class t{constructor(n,r){this._formBuilder=n,this._kiyaConfirmationService=r}ngOnInit(){this.configForm=this._formBuilder.group({title:"Remove contact",message:'Are you sure you want to remove this contact permanently? <span class="font-medium">This action cannot be undone!</span>',icon:this._formBuilder.group({show:!0,name:"heroicons_outline:exclamation",color:"warn"}),actions:this._formBuilder.group({confirm:this._formBuilder.group({show:!0,label:"Remove",color:"warn"}),cancel:this._formBuilder.group({show:!0,label:"Cancel"})}),dismissible:!0})}openConfirmationDialog(){this._kiyaConfirmationService.open(this.configForm.value).afterClosed().subscribe(r=>{console.log(r)})}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(i.qu),o.Y36(h.u))},t.\u0275cmp=o.Xpm({type:t,selectors:[["confirmation"]],decls:88,vars:30,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","p-6","sm:py-8","sm:px-10","border-b","bg-card","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],[1,"whitespace-nowrap","text-primary-500"],[1,"mt-2"],[1,"text-3xl","md:text-4xl","font-extrabold","tracking-tight","leading-7","sm:leading-10","truncate"],[1,"flex-auto","p-6","sm:p-10"],[1,"max-w-3xl"],[1,"max-w-3xl","prose","prose-sm"],[3,"routerLink"],[1,"example-viewer"],[1,"title"],[1,"flex","flex-col","p-8","pt-0"],[1,"flex","flex-col","items-start",3,"formGroup"],[1,"kiya-mat-no-subscript","w-full"],["matInput","",3,"formControlName"],[1,"kiya-mat-no-subscript","kiya-mat-textarea","w-full","mt-6"],[1,"w-full","mt-8","mb-7","border-b"],[1,"flex","flex-col","w-full",3,"formGroupName"],[3,"color","formControlName"],[1,"flex","items-center","w-full","mt-6"],[1,"kiya-mat-no-subscript","w-1/2","pr-2"],[1,"kiya-mat-no-subscript","w-1/2","pl-2"],[3,"formControlName"],[4,"ngFor","ngForOf"],[1,"w-full",3,"formGroupName"],[1,"mt-2",3,"color","formControlName"],[1,"flex","items-center","w-full","mt-4"],[1,"flex","flex-col","w-full","mt-6",3,"formGroupName"],[1,"mt-12"],["mat-flat-button","",3,"color","click"],[1,"dark","w-full","mt-8","p-4","rounded-2xl","overflow-hidden"],["kiya-highlight","",3,"code","lang"],[3,"value"]],template:function(n,r){1&n&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),o._uU(6,"User Interface"),o.qZA()()(),o.TgZ(7,"div",5)(8,"h2",6),o._uU(9," Confirmation Dialog "),o.qZA()()()(),o.TgZ(10,"div",7)(11,"div",8)(12,"div",9)(13,"p"),o._uU(14," One of the repetitive and tedious jobs in Angular is to create confirmation dialogs. Since dialogs require their own components you have to either create a separate component every time you need a confirmation dialog or you have to create your own confirmation dialog system that can be configured. "),o.qZA(),o.TgZ(15,"p"),o._uU(16," In order for you to save time while developing with Kiya, we have created a simple yet powerful "),o.TgZ(17,"code"),o._uU(18,"KiyaConfirmationService"),o.qZA(),o._uU(19," to create customized confirmation dialogs on-the-fly. "),o.qZA(),o.TgZ(20,"p"),o._uU(21," Below you can configure and preview the confirmation dialog. You can use the generated configuration object within your code to have the exact same dialog. "),o.qZA(),o.TgZ(22,"p"),o._uU(23," For more detailed information and API documentation, check the "),o.TgZ(24,"a",10),o._uU(25,"documentation"),o.qZA(),o._uU(26," page. "),o.qZA()(),o.TgZ(27,"div",11)(28,"div",12)(29,"h6"),o._uU(30,"Configure the dialog and preview it"),o.qZA()(),o.TgZ(31,"div",13)(32,"form",14)(33,"mat-form-field",15)(34,"mat-label"),o._uU(35,"Title"),o.qZA(),o._UZ(36,"input",16),o.qZA(),o.TgZ(37,"mat-form-field",17)(38,"mat-label"),o._uU(39,"Message"),o.qZA(),o.TgZ(40,"textarea",16),o._uU(41,"                            "),o.qZA()(),o._UZ(42,"div",18),o.TgZ(43,"div",19)(44,"mat-checkbox",20),o._uU(45," Show Icon "),o.qZA(),o.TgZ(46,"div",21)(47,"mat-form-field",22)(48,"mat-label"),o._uU(49,"Icon name"),o.qZA(),o._UZ(50,"input",16),o.qZA(),o.TgZ(51,"mat-form-field",23)(52,"mat-label"),o._uU(53,"Icon color"),o.qZA(),o.TgZ(54,"mat-select",24),o.YNc(55,y,4,4,"ng-container",25),o.qZA()()()(),o._UZ(56,"div",18),o.TgZ(57,"div",26)(58,"div",19)(59,"mat-checkbox",27),o._uU(60," Show Confirm button "),o.qZA(),o.TgZ(61,"div",28)(62,"mat-form-field",22)(63,"mat-label"),o._uU(64,"Confirm button label"),o.qZA(),o._UZ(65,"input",16),o.qZA(),o.TgZ(66,"mat-form-field",23)(67,"mat-label"),o._uU(68,"Confirm button color"),o.qZA(),o.TgZ(69,"mat-select",24),o.YNc(70,A,4,4,"ng-container",25),o.qZA()()()(),o.TgZ(71,"div",29)(72,"mat-checkbox",27),o._uU(73," Show Cancel button "),o.qZA(),o.TgZ(74,"div",28)(75,"mat-form-field",22)(76,"mat-label"),o._uU(77,"Cancel button label"),o.qZA(),o._UZ(78,"input",16),o.qZA()()()(),o._UZ(79,"div",18),o.TgZ(80,"mat-checkbox",20),o._uU(81," Dismissible "),o.qZA()(),o.TgZ(82,"div",30)(83,"button",31),o.NdJ("click",function(){return r.openConfirmationDialog()}),o._uU(84," Open Confirmation Dialog "),o.qZA()()()(),o.TgZ(85,"div",32),o._UZ(86,"textarea",33),o.ALo(87,"json"),o.qZA()()()()),2&n&&(o.xp6(24),o.Q6J("routerLink","/ui/kiya-components/services/confirmation"),o.xp6(8),o.Q6J("formGroup",r.configForm),o.xp6(4),o.Q6J("formControlName","title"),o.xp6(4),o.Q6J("formControlName","message"),o.xp6(3),o.Q6J("formGroupName","icon"),o.xp6(1),o.Q6J("color","primary")("formControlName","show"),o.xp6(6),o.Q6J("formControlName","name"),o.xp6(4),o.Q6J("formControlName","color"),o.xp6(1),o.Q6J("ngForOf",o.DdM(28,b)),o.xp6(2),o.Q6J("formGroupName","actions"),o.xp6(1),o.Q6J("formGroupName","confirm"),o.xp6(1),o.Q6J("color","primary")("formControlName","show"),o.xp6(6),o.Q6J("formControlName","label"),o.xp6(4),o.Q6J("formControlName","color"),o.xp6(1),o.Q6J("ngForOf",o.DdM(29,w)),o.xp6(1),o.Q6J("formGroupName","cancel"),o.xp6(1),o.Q6J("color","primary")("formControlName","show"),o.xp6(6),o.Q6J("formControlName","label"),o.xp6(2),o.Q6J("color","primary")("formControlName","dismissible"),o.xp6(3),o.Q6J("color","primary"),o.xp6(3),o.Q6J("code",o.lcZ(87,26,r.configForm.value))("lang","json"))},directives:[f.yS,i._Y,i.JL,i.sg,l.KE,l.hX,p.Nt,i.Fj,i.JJ,i.u,i.x0,u.oG,d.gD,m.sg,v.ey,s.lW,C.F],pipes:[m.rS,m.Ts],encapsulation:2,changeDetection:0}),t})()}];let U=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[f.Bz.forChild(g),s.ot,u.p9,l.lN,p.c,d.LD,x.Yp,Z.m]]}),t})()}}]);