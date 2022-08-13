"use strict";(self.webpackChunkkiya=self.webpackChunkkiya||[]).push([[773],{20773:(O,u,i)=>{i.d(u,{Ou:()=>a,Cq:()=>D});var t=i(5e3),m=i(69808),f=i(90508),c=i(63191),k=i(70925),S=i(76360),x=i(50727),E=i(29071);function v(n,r){if(1&n&&(t.O4$(),t._UZ(0,"circle",4)),2&n){const e=t.oxw(),s=t.MAs(1);t.Udp("animation-name","mat-progress-spinner-stroke-rotate-"+e._spinnerAnimationLabel)("stroke-dashoffset",e._getStrokeDashOffset(),"px")("stroke-dasharray",e._getStrokeCircumference(),"px")("stroke-width",e._getCircleStrokeWidth(),"%")("transform-origin",e._getCircleTransformOrigin(s)),t.uIk("r",e._getCircleRadius())}}function A(n,r){if(1&n&&(t.O4$(),t._UZ(0,"circle",4)),2&n){const e=t.oxw(),s=t.MAs(1);t.Udp("stroke-dashoffset",e._getStrokeDashOffset(),"px")("stroke-dasharray",e._getStrokeCircumference(),"px")("stroke-width",e._getCircleStrokeWidth(),"%")("transform-origin",e._getCircleTransformOrigin(s)),t.uIk("r",e._getCircleRadius())}}const T=(0,f.pj)(class{constructor(n){this._elementRef=n}},"primary"),C=new t.OlP("mat-progress-spinner-default-options",{providedIn:"root",factory:function R(){return{diameter:100}}});class a extends T{constructor(r,e,s,d,o,g,_,h){super(r),this._document=s,this._diameter=100,this._value=0,this._resizeSubscription=x.w0.EMPTY,this.mode="determinate";const l=a._diameters;this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),l.has(s.head)||l.set(s.head,new Set([100])),this._noopAnimations="NoopAnimations"===d&&!!o&&!o._forceAnimations,o&&(o.diameter&&(this.diameter=o.diameter),o.strokeWidth&&(this.strokeWidth=o.strokeWidth)),e.isBrowser&&e.SAFARI&&_&&g&&h&&(this._resizeSubscription=_.change(150).subscribe(()=>{"indeterminate"===this.mode&&h.run(()=>g.markForCheck())}))}get diameter(){return this._diameter}set diameter(r){this._diameter=(0,c.su)(r),this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),this._styleRoot&&this._attachStyleNode()}get strokeWidth(){return this._strokeWidth||this.diameter/10}set strokeWidth(r){this._strokeWidth=(0,c.su)(r)}get value(){return"determinate"===this.mode?this._value:0}set value(r){this._value=Math.max(0,Math.min(100,(0,c.su)(r)))}ngOnInit(){const r=this._elementRef.nativeElement;this._styleRoot=(0,k.kV)(r)||this._document.head,this._attachStyleNode(),r.classList.add("mat-progress-spinner-indeterminate-animation")}ngOnDestroy(){this._resizeSubscription.unsubscribe()}_getCircleRadius(){return(this.diameter-10)/2}_getViewBox(){const r=2*this._getCircleRadius()+this.strokeWidth;return`0 0 ${r} ${r}`}_getStrokeCircumference(){return 2*Math.PI*this._getCircleRadius()}_getStrokeDashOffset(){return"determinate"===this.mode?this._getStrokeCircumference()*(100-this._value)/100:null}_getCircleStrokeWidth(){return this.strokeWidth/this.diameter*100}_getCircleTransformOrigin(r){var e;const s=50*(null!==(e=r.currentScale)&&void 0!==e?e:1);return`${s}% ${s}%`}_attachStyleNode(){const r=this._styleRoot,e=this._diameter,s=a._diameters;let d=s.get(r);if(!d||!d.has(e)){const o=this._document.createElement("style");o.setAttribute("mat-spinner-animation",this._spinnerAnimationLabel),o.textContent=this._getAnimationText(),r.appendChild(o),d||(d=new Set,s.set(r,d)),d.add(e)}}_getAnimationText(){const r=this._getStrokeCircumference();return"\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n".replace(/START_VALUE/g,""+.95*r).replace(/END_VALUE/g,""+.2*r).replace(/DIAMETER/g,`${this._spinnerAnimationLabel}`)}_getSpinnerAnimationLabel(){return this.diameter.toString().replace(".","_")}}a._diameters=new WeakMap,a.\u0275fac=function(r){return new(r||a)(t.Y36(t.SBq),t.Y36(k.t4),t.Y36(m.K0,8),t.Y36(S.Qb,8),t.Y36(C),t.Y36(t.sBO),t.Y36(E.rL),t.Y36(t.R0b))},a.\u0275cmp=t.Xpm({type:a,selectors:[["mat-progress-spinner"]],hostAttrs:["role","progressbar","tabindex","-1",1,"mat-progress-spinner"],hostVars:10,hostBindings:function(r,e){2&r&&(t.uIk("aria-valuemin","determinate"===e.mode?0:null)("aria-valuemax","determinate"===e.mode?100:null)("aria-valuenow","determinate"===e.mode?e.value:null)("mode",e.mode),t.Udp("width",e.diameter,"px")("height",e.diameter,"px"),t.ekj("_mat-animation-noopable",e._noopAnimations))},inputs:{color:"color",diameter:"diameter",strokeWidth:"strokeWidth",mode:"mode",value:"value"},exportAs:["matProgressSpinner"],features:[t.qOj],decls:4,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false","aria-hidden","true",3,"ngSwitch"],["svg",""],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width","transform-origin",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width","transform-origin",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(r,e){1&r&&(t.O4$(),t.TgZ(0,"svg",0,1),t.YNc(2,v,1,11,"circle",2),t.YNc(3,A,1,9,"circle",3),t.qZA()),2&r&&(t.Udp("width",e.diameter,"px")("height",e.diameter,"px"),t.Q6J("ngSwitch","indeterminate"===e.mode),t.uIk("viewBox",e._getViewBox()),t.xp6(2),t.Q6J("ngSwitchCase",!0),t.xp6(1),t.Q6J("ngSwitchCase",!1))},directives:[m.RF,m.n9],styles:[".mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:CanvasText}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}\n"],encapsulation:2,changeDetection:0});let D=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[f.BQ,m.ez],f.BQ]}),n})()}}]);