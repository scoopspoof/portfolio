function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Bt8u:function(t,e,n){"use strict";n.r(e);var i,o,r=n("ofXK"),a=n("tyNb"),s=n("fXoL"),l=function(){return["/about"]},c=[{path:"",component:(i=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){for(var t=document.getElementsByClassName("txt-rotate"),e=0;e<t.length;e++){var n=t[e].getAttribute("data-rotate"),i=t[e].getAttribute("data-period");n&&this.TxtRotate(t[e],JSON.parse(n),i)}var o=document.createElement("style");o.type="text/css",o.innerHTML=".txt-rotate > .wrap { border-right: 0.08em solid #666 }",document.body.appendChild(o)}},{key:"TxtRotate",value:function(t,e,n){this.toRotate=e,this.el=t,this.loopNum=0,this.period=parseInt(n,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1}},{key:"tick",value:function(){var t=this.toRotate[this.loopNum%this.toRotate.length];this.txt=t.substring(0,this.isDeleting?this.txt.length-1:this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var e=this,n=300-100*Math.random();this.isDeleting&&(n/=2),this.isDeleting||this.txt!==t?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,n=500):(n=this.period,this.isDeleting=!0),setTimeout((function(){e.tick()}),n)}}]),t}(),i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=s.Eb({type:i,selectors:[["app-home"]],decls:13,vars:2,consts:[[1,"container"],[1,"content"],[1,"full-name",3,"routerLink"],[1,"bar"],[1,"profession","lead"],[1,"plus"],["data-period","1000","data-rotate",'[ "Designer", "Creator", "UX-UI", "Influencer"]',1,"txt-rotate"],[1,"bottom-line"]],template:function(t,e){1&t&&(s.Nb(0,"div",0),s.Nb(1,"div",1),s.Nb(2,"h2",2),s.dc(3,"Shivam Pandey "),s.Lb(4,"div",3),s.Mb(),s.Nb(5,"div",4),s.Nb(6,"p"),s.dc(7,"Web Developer"),s.Mb(),s.Nb(8,"p"),s.Nb(9,"span",5),s.dc(10,"+ "),s.Mb(),s.Lb(11,"span",6),s.Mb(),s.Mb(),s.Lb(12,"div",7),s.Mb(),s.Mb()),2&t&&(s.Ab(2),s.Wb("routerLink",s.Xb(1,l)))},directives:[a.c],styles:[".full-name[_ngcontent-%COMP%]{margin-top:15rem;font-size:3rem;text-transform:uppercase;letter-spacing:1rem;color:var(--black-color);cursor:pointer;position:relative;opacity:0;-webkit-animation:reveal .5s ease 1s forwards;animation:reveal .5s ease 1s forwards}.full-name[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{position:absolute;width:0;height:4rem;background-color:var(--primary);top:0;-webkit-animation:fill-in 1s ease .5s forwards;animation:fill-in 1s ease .5s forwards}.profession[_ngcontent-%COMP%]{font-size:8rem;font-weight:600;color:var(--black-color);-webkit-animation:slide-in-from-down .5s ease .5s forwards;animation:slide-in-from-down .5s ease .5s forwards;transform:translateY(60%);opacity:0}@-webkit-keyframes slide-in-from-down{to{transform:translateY(0);opacity:1%}}@keyframes slide-in-from-down{to{transform:translateY(0);opacity:1%}}@-webkit-keyframes fill-in{50%{width:40rem}}@keyframes fill-in{50%{width:40rem}}@-webkit-keyframes reveal{to{opacity:1}}@keyframes reveal{to{opacity:1}}@media only screen and (max-width:959px){.full-name[_ngcontent-%COMP%]{font-size:1.8rem}.profession[_ngcontent-%COMP%]{font-size:5rem}}"]}),i)}],f=((o=function t(){_classCallCheck(this,t)}).\u0275mod=s.Ib({type:o}),o.\u0275inj=s.Hb({factory:function(t){return new(t||o)},imports:[[a.e.forChild(c)],a.e]}),o);n.d(e,"HomeModule",(function(){return m}));var p,m=((p=function t(){_classCallCheck(this,t)}).\u0275mod=s.Ib({type:p}),p.\u0275inj=s.Hb({factory:function(t){return new(t||p)},imports:[[r.b,f]]}),p)}}]);