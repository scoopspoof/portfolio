(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Bt8u:function(t,e,i){"use strict";i.r(e);var n=i("ofXK"),o=i("tyNb"),r=i("fXoL");const s=function(){return["/about"]},a=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){for(var t=document.getElementsByClassName("txt-rotate"),e=0;e<t.length;e++){var i=t[e].getAttribute("data-rotate"),n=t[e].getAttribute("data-period");i&&this.TxtRotate(t[e],JSON.parse(i),n)}var o=document.createElement("style");o.type="text/css",o.innerHTML=".txt-rotate > .wrap { border-right: 0.08em solid #666 }",document.body.appendChild(o)}TxtRotate(t,e,i){this.toRotate=e,this.el=t,this.loopNum=0,this.period=parseInt(i,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1}tick(){var t=this.toRotate[this.loopNum%this.toRotate.length];this.txt=t.substring(0,this.isDeleting?this.txt.length-1:this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var e=this,i=300-100*Math.random();this.isDeleting&&(i/=2),this.isDeleting||this.txt!==t?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,i=500):(i=this.period,this.isDeleting=!0),setTimeout((function(){e.tick()}),i)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["app-home"]],decls:13,vars:2,consts:[[1,"container"],[1,"content"],[1,"full-name",3,"routerLink"],[1,"bar"],[1,"profession","lead"],[1,"plus"],["data-period","1000","data-rotate",'[ "Designer", "Creator", "UX-UI", "Influencer"]',1,"txt-rotate"],[1,"bottom-line"]],template:function(t,e){1&t&&(r.Nb(0,"div",0),r.Nb(1,"div",1),r.Nb(2,"h2",2),r.dc(3,"Shivam Pandey "),r.Lb(4,"div",3),r.Mb(),r.Nb(5,"div",4),r.Nb(6,"p"),r.dc(7,"Web Developer"),r.Mb(),r.Nb(8,"p"),r.Nb(9,"span",5),r.dc(10,"+ "),r.Mb(),r.Lb(11,"span",6),r.Mb(),r.Mb(),r.Lb(12,"div",7),r.Mb(),r.Mb()),2&t&&(r.Ab(2),r.Wb("routerLink",r.Xb(1,s)))},directives:[o.c],styles:[".full-name[_ngcontent-%COMP%]{margin-top:15rem;font-size:3rem;text-transform:uppercase;letter-spacing:1rem;color:var(--black-color);cursor:pointer;position:relative;opacity:0;-webkit-animation:reveal .5s ease 1s forwards;animation:reveal .5s ease 1s forwards}.full-name[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{position:absolute;width:0;height:4rem;background-color:var(--primary);top:0;-webkit-animation:fill-in 1s ease .5s forwards;animation:fill-in 1s ease .5s forwards}.profession[_ngcontent-%COMP%]{font-size:8rem;font-weight:600;color:var(--black-color);-webkit-animation:slide-in-from-down .5s ease .5s forwards;animation:slide-in-from-down .5s ease .5s forwards;transform:translateY(60%);opacity:0}@-webkit-keyframes slide-in-from-down{to{transform:translateY(0);opacity:1%}}@keyframes slide-in-from-down{to{transform:translateY(0);opacity:1%}}@-webkit-keyframes fill-in{50%{width:40rem}}@keyframes fill-in{50%{width:40rem}}@-webkit-keyframes reveal{to{opacity:1}}@keyframes reveal{to{opacity:1}}@media only screen and (max-width:959px){.full-name[_ngcontent-%COMP%]{font-size:1.8rem}.profession[_ngcontent-%COMP%]{font-size:5rem}}"]}),t})()}];let l=(()=>{class t{}return t.\u0275mod=r.Ib({type:t}),t.\u0275inj=r.Hb({factory:function(e){return new(e||t)},imports:[[o.e.forChild(a)],o.e]}),t})();i.d(e,"HomeModule",(function(){return c}));let c=(()=>{class t{}return t.\u0275mod=r.Ib({type:t}),t.\u0275inj=r.Hb({factory:function(e){return new(e||t)},imports:[[n.b,l]]}),t})()}}]);