"use strict";(self.webpackChunkkiya=self.webpackChunkkiya||[]).push([[8592],{42320:(f,l,t)=>{t.d(l,{Q:()=>o});var c=t(63191),n=t(77932),a=t(5e3),e=t(69808);function i(d,m){1&d&&(a.ynx(0),a.TgZ(1,"div",1),a.Hsn(2),a.qZA(),a.TgZ(3,"div",2),a.Hsn(4,1),a.qZA(),a.BQk())}function p(d,m){1&d&&(a.TgZ(0,"div",4),a.Hsn(1,3),a.qZA()),2&d&&a.Q6J("@expandCollapse",void 0)}function s(d,m){if(1&d&&(a.ynx(0),a.Hsn(1,2),a.YNc(2,p,2,1,"div",3),a.BQk()),2&d){const y=a.oxw();a.xp6(2),a.Q6J("ngIf",y.expanded)}}const r=[[["","kiyaCardFront",""]],[["","kiyaCardBack",""]],"*",[["","kiyaCardExpansion",""]]],u=["[kiyaCardFront]","[kiyaCardBack]","*","[kiyaCardExpansion]"];let o=(()=>{class d{constructor(){this.expanded=!1,this.face="front",this.flippable=!1}get classList(){return{"kiya-card-expanded":this.expanded,"kiya-card-face-back":this.flippable&&"back"===this.face,"kiya-card-face-front":this.flippable&&"front"===this.face,"kiya-card-flippable":this.flippable}}ngOnChanges(y){"expanded"in y&&(this.expanded=(0,c.Ig)(y.expanded.currentValue)),"flippable"in y&&(this.flippable=(0,c.Ig)(y.flippable.currentValue))}}return d.\u0275fac=function(y){return new(y||d)},d.\u0275cmp=a.Xpm({type:d,selectors:[["kiya-card"]],hostVars:2,hostBindings:function(y,_){2&y&&a.Tol(_.classList)},inputs:{expanded:"expanded",face:"face",flippable:"flippable"},exportAs:["kiyaCard"],features:[a.TTD],ngContentSelectors:u,decls:2,vars:2,consts:[[4,"ngIf"],[1,"kiya-card-front"],[1,"kiya-card-back"],["class","kiya-card-expansion",4,"ngIf"],[1,"kiya-card-expansion"]],template:function(y,_){1&y&&(a.F$t(r),a.YNc(0,i,5,0,"ng-container",0),a.YNc(1,s,3,1,"ng-container",0)),2&y&&(a.Q6J("ngIf",_.flippable),a.xp6(1),a.Q6J("ngIf",!_.flippable))},directives:[e.O5],styles:["kiya-card{position:relative;display:flex;overflow:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--kiya-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}kiya-card.kiya-card-flippable{border-radius:0;overflow:visible;transform-style:preserve-3d;transition:transform 1s;perspective:600px;background:transparent;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}kiya-card.kiya-card-flippable.kiya-card-face-back .kiya-card-front{visibility:hidden;opacity:0;transform:rotateY(180deg)}kiya-card.kiya-card-flippable.kiya-card-face-back .kiya-card-back{visibility:visible;opacity:1;transform:rotateY(360deg)}kiya-card.kiya-card-flippable .kiya-card-front,kiya-card.kiya-card-flippable .kiya-card-back{display:flex;flex-direction:column;flex:1 1 auto;z-index:10;transition:transform .5s ease-out 0s,visibility 0s ease-in .2s,opacity 0s ease-in .2s;-webkit-backface-visibility:hidden;backface-visibility:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--kiya-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}kiya-card.kiya-card-flippable .kiya-card-front{position:relative;opacity:1;visibility:visible;transform:rotateY(0);overflow:hidden}kiya-card.kiya-card-flippable .kiya-card-back{position:absolute;top:0;right:0;bottom:0;left:0;opacity:0;visibility:hidden;transform:rotateY(180deg);overflow:hidden auto}\n"],encapsulation:2,data:{animation:n.c}}),d})()},60299:(f,l,t)=>{t.d(l,{Q:()=>c.Q,J:()=>e});var c=t(42320),n=t(69808),a=t(5e3);let e=(()=>{class i{}return i.\u0275fac=function(s){return new(s||i)},i.\u0275mod=a.oAB({type:i}),i.\u0275inj=a.cJS({imports:[[n.ez]]}),i})()},45562:(f,l,t)=>{t.d(l,{p:()=>s});var c=t(77932),n=t(5e3),a=t(10988),e=t(69808);function i(r,u){1&r&&n.GkF(0)}const p=function(r){return{$implicit:r}};let s=(()=>{class r{constructor(o){this._kiyaMediaWatcherService=o,this.items=[],this.distributedColumns=[]}ngOnChanges(o){"columns"in o&&this._distributeItems(),"items"in o&&this._distributeItems()}ngAfterViewInit(){this._distributeItems()}_distributeItems(){if(0!==this.items.length){this.distributedColumns=Array.from(Array(this.columns),o=>({items:[]}));for(let o=0;o<this.items.length;o++)this.distributedColumns[o%this.columns].items.push(this.items[o])}else this.distributedColumns=[]}}return r.\u0275fac=function(o){return new(o||r)(n.Y36(a.W))},r.\u0275cmp=n.Xpm({type:r,selectors:[["kiya-masonry"]],inputs:{columnsTemplate:"columnsTemplate",columns:"columns",items:"items"},exportAs:["kiyaMasonry"],features:[n.TTD],decls:2,vars:4,consts:[[1,"flex"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(o,d){1&o&&(n.TgZ(0,"div",0),n.YNc(1,i,1,0,"ng-container",1),n.qZA()),2&o&&(n.xp6(1),n.Q6J("ngTemplateOutlet",d.columnsTemplate)("ngTemplateOutletContext",n.VKq(2,p,d.distributedColumns)))},directives:[e.tP],encapsulation:2,data:{animation:c.c}}),r})()},52290:(f,l,t)=>{t.d(l,{d:()=>a});var c=t(69808),n=t(5e3);let a=(()=>{class e{}return e.\u0275fac=function(p){return new(p||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[c.ez]]}),e})()},68463:(f,l,t)=>{t.d(l,{T:()=>n});var c=t(5e3);let n=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=c.oAB({type:a}),a.\u0275inj=c.cJS({}),a})()},54984:(f,l,t)=>{t.d(l,{Y:()=>n});var c=t(5e3);let n=(()=>{class a{constructor(){}transform(i,p,s){return Array.isArray(i)?i.map(r=>s.find(u=>u[p]===r)):s.find(r=>r[p]===i)}}return a.\u0275fac=function(i){return new(i||a)},a.\u0275pipe=c.Yjl({name:"kiyaFindByKey",type:a,pure:!1}),a})()},11586:(f,l,t)=>{t.d(l,{g:()=>c});class c{static isEmptyInputValue(a){return null==a||0===a.length}static mustMatch(a,e){return i=>{const p=i.get(a),s=i.get(e);if(!p||!s||(s.hasError("mustMatch")&&(delete s.errors.mustMatch,s.updateValueAndValidity()),this.isEmptyInputValue(s.value)||p.value===s.value))return null;const r={mustMatch:!0};return s.setErrors(r),r}}}}}]);