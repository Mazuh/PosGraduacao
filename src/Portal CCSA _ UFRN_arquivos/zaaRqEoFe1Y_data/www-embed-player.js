(function(){var g,aa=aa||{},m=this;function p(a){return void 0!==a}
function q(a,b,c){a=a.split(".");c=c||m;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&p(b)?c[d]=b:c[d]?c=c[d]:c=c[d]={}}
function r(a,b){for(var c=a.split("."),d=b||m,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d}
function t(){}
function ba(a){a.getInstance=function(){return a.X?a.X:a.X=new a}}
function ca(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function da(a){return"array"==ca(a)}
function ea(a){var b=ca(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function v(a){return"string"==typeof a}
function fa(a){return"number"==typeof a}
function ha(a){return"function"==ca(a)}
function ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function ka(a){return a[la]||(a[la]=++ma)}
var la="closure_uid_"+(1E9*Math.random()>>>0),ma=0;function na(a,b,c){return a.call.apply(a.bind,arguments)}
function oa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function w(a,b,c){w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?na:oa;return w.apply(null,arguments)}
function pa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var x=Date.now||function(){return+new Date};
function y(a,b){function c(){}
c.prototype=b.prototype;a.I=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(a,c,f){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[c].apply(a,h)}}
;function qa(a){if(Error.captureStackTrace)Error.captureStackTrace(this,qa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
y(qa,Error);qa.prototype.name="CustomError";var ra;var sa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function ta(a){return decodeURIComponent(a.replace(/\+/g," "))}
var ua=/&/g,va=/</g,wa=/>/g,xa=/"/g,ya=/'/g,za=/\x00/g,Aa=/[\x00&<>"']/;function Ba(a){return-1!=a.indexOf("&")?"document"in m?Ca(a):Da(a):a}
function Ca(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'},c;c=m.document.createElement("div");return a.replace(Ea,function(a,e){var f=b[a];if(f)return f;if("#"==e.charAt(0)){var h=Number("0"+e.substr(1));isNaN(h)||(f=String.fromCharCode(h))}f||(c.innerHTML=a+" ",f=c.firstChild.nodeValue.slice(0,-1));return b[a]=f})}
function Da(a){return a.replace(/&([^;]+);/g,function(a,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var d=Number("0"+c.substr(1));if(!isNaN(d))return String.fromCharCode(d)}return a}})}
var Ea=/&([^;\s<&]+);?/g,Fa={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},Ga={"'":"\\'"};
function Ha(a,b){for(var c=0,d=sa(String(a)).split("."),e=sa(String(b)).split("."),f=Math.max(d.length,e.length),h=0;0==c&&h<f;h++){var k=d[h]||"",l=e[h]||"",n=RegExp("(\\d*)(\\D*)","g"),u=RegExp("(\\d*)(\\D*)","g");do{var X=n.exec(k)||["","",""],ga=u.exec(l)||["","",""];if(0==X[0].length&&0==ga[0].length)break;c=Ia(0==X[1].length?0:parseInt(X[1],10),0==ga[1].length?0:parseInt(ga[1],10))||Ia(0==X[2].length,0==ga[2].length)||Ia(X[2],ga[2])}while(0==c)}return c}
function Ia(a,b){return a<b?-1:a>b?1:0}
function Ja(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Ka=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(v(a))return v(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},z=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=v(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},La=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,h=v(a)?a.split(""):a,k=0;k<d;k++)if(k in h){var l=h[k];
b.call(c,l,k,a)&&(e[f++]=l)}return e},A=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=v(a)?a.split(""):a,h=0;h<d;h++)h in f&&(e[h]=b.call(c,f[h],h,a));
return e},Ma=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=v(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1},Na=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=v(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};
function Oa(a,b,c){b=Pa(a,b,c);return 0>b?null:v(a)?a.charAt(b):a[b]}
function Pa(a,b,c){for(var d=a.length,e=v(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}
function B(a,b){return 0<=Ka(a,b)}
function Qa(){var a=Ra;if(!da(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0}
function Sa(a,b){B(a,b)||a.push(b)}
function Ta(a,b){var c=Ka(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function Ua(a,b){var c=Pa(a,b,void 0);0<=c&&Array.prototype.splice.call(a,c,1)}
function Va(a){return Array.prototype.concat.apply(Array.prototype,arguments)}
function Wa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Xa(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ea(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var h=0;h<f;h++)a[e+h]=d[h]}else a.push(d)}}
function Ya(a,b,c,d){return Array.prototype.splice.apply(a,Za(arguments,1))}
function Za(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function $a(a,b,c){if(!ea(a)||!ea(b)||a.length!=b.length)return!1;var d=a.length;c=c||ab;for(var e=0;e<d;e++)if(!c(a[e],b[e]))return!1;return!0}
function bb(a,b){return a>b?1:a<b?-1:0}
function ab(a,b){return a===b}
;function cb(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function db(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d}
function eb(a){var b=0,c;for(c in a)b++;return b}
function fb(a,b){return gb(a,b)}
function ib(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function jb(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}
function kb(a){return null!==a&&"withCredentials"in a}
function gb(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
function lb(a){var b=nb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function ob(a){for(var b in a)return!1;return!0}
function pb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function qb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function sb(a){var b=ca(a);if("object"==b||"array"==b){if(ha(a.clone))return a.clone();var b="array"==b?[]:{},c;for(c in a)b[c]=sb(a[c]);return b}return a}
var tb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ub(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<tb.length;f++)c=tb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var vb;a:{var wb=m.navigator;if(wb){var xb=wb.userAgent;if(xb){vb=xb;break a}}vb=""}function C(a){return-1!=vb.indexOf(a)}
;function yb(){return(C("Chrome")||C("CriOS"))&&!C("Edge")}
;function zb(){this.f=""}
zb.prototype.$b=!0;zb.prototype.Vb=function(){return this.f};
zb.prototype.toString=function(){return"Const{"+this.f+"}"};
function Ab(a){var b=new zb;b.f=a;return b}
;function Bb(){this.f="";this.h=Cb}
Bb.prototype.$b=!0;Bb.prototype.Vb=function(){return this.f};
function Db(a){if(a instanceof Bb&&a.constructor===Bb&&a.h===Cb)return a.f;ca(a);return"type_error:SafeUrl"}
var Eb=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;function Fb(a){if(a instanceof Bb)return a;a=a.$b?a.Vb():String(a);Eb.test(a)||(a="about:invalid#zClosurez");return Gb(a)}
var Cb={};function Gb(a){var b=new Bb;b.f=a;return b}
Gb("about:blank");function Hb(){this.f="";this.h=Ib;this.j=null}
Hb.prototype.$b=!0;Hb.prototype.Vb=function(){return this.f};
function Jb(a){if(a instanceof Hb&&a.constructor===Hb&&a.h===Ib)return a.f;ca(a);return"type_error:SafeHtml"}
var Ib={};function Kb(a,b){var c=new Hb;c.f=a;c.j=b;return c}
Kb("<!DOCTYPE html>",0);Kb("",0);Kb("<br>",0);function Lb(a,b){var c;c=b instanceof Bb?b:Fb(b);a.href=Db(c)}
;function Mb(a,b,c){a&&(a.dataset?a.dataset[Nb(b)]=c:a.setAttribute("data-"+b,c))}
function D(a,b){return a?a.dataset?a.dataset[Nb(b)]:a.getAttribute("data-"+b):null}
function Ob(a,b){a&&(a.dataset?delete a.dataset[Nb(b)]:a.removeAttribute("data-"+b))}
var Pb={};function Nb(a){return Pb[a]||(Pb[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function Rb(a){m.setTimeout(function(){throw a;},0)}
var Sb;
function Tb(){var a=m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!C("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=w(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!C("Trident")&&!C("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.sc;c.sc=null;a()}};
return function(a){d.next={sc:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){m.setTimeout(a,0)}}
;function Ub(a,b,c){this.l=c;this.j=a;this.o=b;this.h=0;this.f=null}
Ub.prototype.get=function(){var a;0<this.h?(this.h--,a=this.f,this.f=a.next,a.next=null):a=this.j();return a};
function Wb(a,b){a.o(b);a.h<a.l&&(a.h++,b.next=a.f,a.f=b)}
;function Xb(){this.h=this.f=null}
var Zb=new Ub(function(){return new Yb},function(a){a.reset()},100);
Xb.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.h=null),a.next=null);return a};
function Yb(){this.next=this.h=this.f=null}
Yb.prototype.set=function(a,b){this.f=a;this.h=b;this.next=null};
Yb.prototype.reset=function(){this.next=this.h=this.f=null};function $b(a,b){ac||bc();cc||(ac(),cc=!0);var c=dc,d=Zb.get();d.set(a,b);c.h?c.h.next=d:c.f=d;c.h=d}
var ac;function bc(){if(m.Promise&&m.Promise.resolve){var a=m.Promise.resolve(void 0);ac=function(){a.then(ec)}}else ac=function(){var a=ec;
!ha(m.setImmediate)||m.Window&&m.Window.prototype&&!C("Edge")&&m.Window.prototype.setImmediate==m.setImmediate?(Sb||(Sb=Tb()),Sb(a)):m.setImmediate(a)}}
var cc=!1,dc=new Xb;function ec(){for(var a=null;a=dc.remove();){try{a.f.call(a.h)}catch(b){Rb(b)}Wb(Zb,a)}cc=!1}
;function E(){this.sa=this.sa;this.K=this.K}
E.prototype.sa=!1;E.prototype.isDisposed=function(){return this.sa};
E.prototype.dispose=function(){this.sa||(this.sa=!0,this.G())};
function fc(a,b){a.sa?b.call(void 0):(a.K||(a.K=[]),a.K.push(p(void 0)?w(b,void 0):b))}
E.prototype.G=function(){if(this.K)for(;this.K.length;)this.K.shift()()};
function F(a){a&&"function"==typeof a.dispose&&a.dispose()}
function gc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];ea(d)?gc.apply(null,d):F(d)}}
;function G(a){E.call(this);this.l=1;this.h=[];this.j=0;this.f=[];this.ga={};this.o=!!a}
y(G,E);g=G.prototype;g.subscribe=function(a,b,c){var d=this.ga[a];d||(d=this.ga[a]=[]);var e=this.l;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.l=e+3;d.push(e);return e};
g.unsubscribe=function(a,b,c){if(a=this.ga[a]){var d=this.f;if(a=Oa(a,function(a){return d[a+1]==b&&d[a+2]==c}))return this.oa(a)}return!1};
g.oa=function(a){var b=this.f[a];if(b){var c=this.ga[b];0!=this.j?(this.h.push(a),this.f[a+1]=t):(c&&Ta(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
g.F=function(a,b){var c=this.ga[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.o)for(e=0;e<c.length;e++){var h=c[e];hc(this.f[h+1],this.f[h+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)h=c[e],this.f[h+1].apply(this.f[h+2],d)}finally{if(this.j--,0<this.h.length&&0==this.j)for(;c=this.h.pop();)this.oa(c)}}return 0!=e}return!1};
function hc(a,b,c){$b(function(){a.apply(b,c)})}
g.clear=function(a){if(a){var b=this.ga[a];b&&(z(b,this.oa,this),delete this.ga[a])}else this.f.length=0,this.ga={}};
g.U=function(a){if(a){var b=this.ga[a];return b?b.length:0}a=0;for(b in this.ga)a+=this.U(b);return a};
g.G=function(){G.I.G.call(this);this.clear();this.h.length=0};var ic=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};q("yt.config_",ic,void 0);q("yt.tokens_",window.yt&&window.yt.tokens_||{},void 0);var jc=window.yt&&window.yt.msgs_||r("window.ytcfg.msgs")||{};q("yt.msgs_",jc,void 0);function kc(a){lc(ic,arguments)}
function H(a,b){return a in ic?ic[a]:b}
function I(a,b){ha(a)&&(a=mc(a));return window.setTimeout(a,b)}
function nc(a,b){ha(a)&&(a=mc(a));window.setInterval(a,b)}
function J(a){window.clearTimeout(a)}
function mc(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){throw oc(b),b;}}:a}
function oc(a,b){var c=r("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=H("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),kc("ERRORS",c))}
function pc(){var a={},b="FLASH_UPGRADE"in jc?jc.FLASH_UPGRADE:'You need to upgrade your Adobe Flash Player to watchthis video. <br> <a href="http://get.adobe.com/flashplayer/">Download it from Adobe.</a>';if(b)for(var c in a)b=b.replace(new RegExp("\\$"+c,"gi"),function(){return a[c]});
return b}
function lc(a,b){if(1<b.length){var c=b[0];a[c]=b[1]}else{var d=b[0];for(c in d)a[c]=d[c]}}
var qc=window.performance&&window.performance.timing&&window.performance.now&&window.__yt_experimental_now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()},rc="Microsoft Internet Explorer"==navigator.appName;var sc=r("yt.pubsub.instance_")||new G;G.prototype.subscribe=G.prototype.subscribe;G.prototype.unsubscribeByKey=G.prototype.oa;G.prototype.publish=G.prototype.F;G.prototype.clear=G.prototype.clear;q("yt.pubsub.instance_",sc,void 0);var tc=r("yt.pubsub.subscribedKeys_")||{};q("yt.pubsub.subscribedKeys_",tc,void 0);var uc=r("yt.pubsub.topicToKeys_")||{};q("yt.pubsub.topicToKeys_",uc,void 0);var vc=r("yt.pubsub.isSynchronous_")||{};q("yt.pubsub.isSynchronous_",vc,void 0);
var wc=r("yt.pubsub.skipSubId_")||null;q("yt.pubsub.skipSubId_",wc,void 0);function xc(a,b,c){var d=yc();if(d){var e=d.subscribe(a,function(){if(!wc||wc!=e){var d=arguments,h;h=function(){tc[e]&&b.apply(c||window,d)};
try{vc[a]?h():I(h,0)}catch(k){oc(k)}}},c);
tc[e]=!0;uc[a]||(uc[a]=[]);uc[a].push(e);return e}return 0}
function zc(a){var b=yc();b&&("number"==typeof a?a=[a]:"string"==typeof a&&(a=[parseInt(a,10)]),z(a,function(a){b.unsubscribeByKey(a);delete tc[a]}))}
function K(a,b){var c=yc();return c?c.publish.apply(c,arguments):!1}
function Ac(a,b){vc[a]=!0;var c=yc();c&&c.publish.apply(c,arguments);vc[a]=!1}
function Bc(a){uc[a]&&(a=uc[a],z(a,function(a){tc[a]&&delete tc[a]}),a.length=0)}
function Cc(a){var b=yc();if(b)if(b.clear(a),a)Bc(a);else for(var c in uc)Bc(c)}
function yc(){return r("yt.pubsub.instance_")}
;function Dc(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Ec,""),c=c.replace(Fc,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Gc(a,b)}
function Gc(a,b){var c=Hc(a),d=document.getElementById(c),e=d&&D(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){var e=xc(c,b),h=""+ka(b);Ic[h]=e}f||(d=Jc(a,c,function(){D(d,"loaded")||(Mb(d,"loaded","true"),K(c),I(pa(Cc,c),0))}))}}
function Jc(a,b,c){var d=document.createElement("script");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
d.src=a;a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function Kc(a,b){if(a&&b){var c=""+ka(b);(c=Ic[c])&&zc(c)}}
function Hc(a){var b=document.createElement("a");Lb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Ja(a)}
var Ec=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Fc=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/,Ic={};var Lc=null;function Mc(){var a=H("BG_I",null),b=H("BG_IU",null),c=H("BG_P",void 0);b?Dc(b,function(){Lc=new botguard.bg(c)}):a&&(eval(a),Lc=new botguard.bg(c))}
function Nc(){return null!=Lc}
function Oc(){return Lc?Lc.invoke():null}
;function Pc(a,b){return Kb(b,null)}
;var Qc="StopIteration"in m?m.StopIteration:{message:"StopIteration",stack:""};function Rc(){}
Rc.prototype.next=function(){throw Qc;};
Rc.prototype.wa=function(){return this};
function Sc(a){if(a instanceof Rc)return a;if("function"==typeof a.wa)return a.wa(!1);if(ea(a)){var b=0,c=new Rc;c.next=function(){for(;;){if(b>=a.length)throw Qc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Tc(a,b,c){if(ea(a))try{z(a,b,c)}catch(d){if(d!==Qc)throw d;}else{a=Sc(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==Qc)throw d;}}}
function Uc(a){if(ea(a))return Wa(a);a=Sc(a);var b=[];Tc(a,function(a){b.push(a)});
return b}
;function Vc(a,b){this.h={};this.f=[];this.Ha=this.j=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof Vc?(c=a.ra(),d=a.V()):(c=jb(a),d=ib(a));for(var e=0;e<c.length;e++)this.set(c[e],d[e])}}
g=Vc.prototype;g.U=function(){return this.j};
g.V=function(){Wc(this);for(var a=[],b=0;b<this.f.length;b++)a.push(this.h[this.f[b]]);return a};
g.ra=function(){Wc(this);return this.f.concat()};
g.bb=function(a){for(var b=0;b<this.f.length;b++){var c=this.f[b];if(Xc(this.h,c)&&this.h[c]==a)return!0}return!1};
g.equals=function(a,b){if(this===a)return!0;if(this.j!=a.U())return!1;var c=b||Yc;Wc(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Yc(a,b){return a===b}
g.isEmpty=function(){return 0==this.j};
g.clear=function(){this.h={};this.Ha=this.j=this.f.length=0};
g.remove=function(a){return Xc(this.h,a)?(delete this.h[a],this.j--,this.Ha++,this.f.length>2*this.j&&Wc(this),!0):!1};
function Wc(a){if(a.j!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Xc(a.h,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.j!=a.f.length){for(var e={},c=b=0;b<a.f.length;)d=a.f[b],Xc(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
g.get=function(a,b){return Xc(this.h,a)?this.h[a]:b};
g.set=function(a,b){Xc(this.h,a)||(this.j++,this.f.push(a),this.Ha++);this.h[a]=b};
g.forEach=function(a,b){for(var c=this.ra(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
g.clone=function(){return new Vc(this)};
g.wa=function(a){Wc(this);var b=0,c=this.Ha,d=this,e=new Rc;e.next=function(){if(c!=d.Ha)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw Qc;var e=d.f[b++];return a?e:d.h[e]};
return e};
function Xc(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function Zc(a){return a.U&&"function"==typeof a.U?a.U():ea(a)||v(a)?a.length:eb(a)}
function $c(a){if(a.V&&"function"==typeof a.V)return a.V();if(v(a))return a.split("");if(ea(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return ib(a)}
function ad(a){if(a.ra&&"function"==typeof a.ra)return a.ra();if(!a.V||"function"!=typeof a.V){if(ea(a)||v(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}return jb(a)}}
function bd(a,b,c){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,c);else if(ea(a)||v(a))z(a,b,c);else for(var d=ad(a),e=$c(a),f=e.length,h=0;h<f;h++)b.call(c,e[h],d&&d[h],a)}
function cd(a,b){if("function"==typeof a.every)return a.every(b,void 0);if(ea(a)||v(a))return Na(a,b,void 0);for(var c=ad(a),d=$c(a),e=d.length,f=0;f<e;f++)if(!b.call(void 0,d[f],c&&c[f],a))return!1;return!0}
;function dd(a){this.f=new Vc;if(a){a=$c(a);for(var b=a.length,c=0;c<b;c++){var d=a[c];this.f.set(ed(d),d)}}}
function ed(a){var b=typeof a;return"object"==b&&a||"function"==b?"o"+ka(a):b.substr(0,1)+a}
g=dd.prototype;g.U=function(){return this.f.U()};
g.removeAll=function(a){a=$c(a);for(var b=a.length,c=0;c<b;c++)this.remove(a[c])};
g.remove=function(a){return this.f.remove(ed(a))};
g.clear=function(){this.f.clear()};
g.isEmpty=function(){return this.f.isEmpty()};
g.contains=function(a){a=ed(a);return Xc(this.f.h,a)};
g.V=function(){return this.f.V()};
g.clone=function(){return new dd(this)};
g.equals=function(a){return this.U()==Zc(a)&&fd(this,a)};
function fd(a,b){var c=Zc(b);if(a.U()>c)return!1;!(b instanceof dd)&&5<c&&(b=new dd(b));return cd(a,function(a){var c=b;return c.contains&&"function"==typeof c.contains?c.contains(a):c.bb&&"function"==typeof c.bb?c.bb(a):ea(c)||v(c)?B(c,a):gb(c,a)})}
g.wa=function(){return this.f.wa(!1)};function gd(){return C("iPhone")&&!C("iPod")&&!C("iPad")}
;var hd=C("Opera"),L=C("Trident")||C("MSIE"),id=C("Edge"),jd=C("Gecko")&&!(-1!=vb.toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),kd=-1!=vb.toLowerCase().indexOf("webkit")&&!C("Edge"),ld=C("Macintosh"),md=C("Windows");function nd(){var a=m.document;return a?a.documentMode:void 0}
var od;a:{var pd="",qd=function(){var a=vb;if(jd)return/rv\:([^\);]+)(\)|;)/.exec(a);if(id)return/Edge\/([\d\.]+)/.exec(a);if(L)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(kd)return/WebKit\/(\S+)/.exec(a);if(hd)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
qd&&(pd=qd?qd[1]:"");if(L){var rd=nd();if(null!=rd&&rd>parseFloat(pd)){od=String(rd);break a}}od=pd}var sd=od,td={};function ud(a){return td[a]||(td[a]=0<=Ha(sd,a))}
function vd(a){return Number(wd)>=a}
var xd=m.document,wd=xd&&L?nd()||("CSS1Compat"==xd.compatMode?parseInt(sd,10):5):void 0;function yd(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function zd(a){return eval("("+a+")")}
function M(a){return Ad(new Bd(void 0),a)}
function Bd(a){this.f=a}
function Ad(a,b){var c=[];Cd(a,b,c);return c.join("")}
function Cd(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(da(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],Cd(a,a.f?a.f.call(d,String(f),e):e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),Dd(d,c),c.push(":"),Cd(a,a.f?a.f.call(b,d,e):e,c),f=","));c.push("}");return}}switch(typeof b){case "string":Dd(b,
c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Ed={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Fd=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function Dd(a,b){b.push('"',a.replace(Fd,function(a){var b=Ed[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Ed[a]=b);return b}),'"')}
;var Gd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function Hd(a){return(a=a.match(Gd)[3]||null)?decodeURI(a):a}
function Id(a,b){if(a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f=null,h=null;0<=e?(f=c[d].substring(0,e),h=c[d].substring(e+1)):f=c[d];b(f,h?ta(h):"")}}
function Jd(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function Kd(a,b,c){if(da(b))for(var d=0;d<b.length;d++)Kd(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function Ld(a,b,c){for(c=c||0;c<b.length;c+=2)Kd(b[c],b[c+1],a);return a}
function Md(a,b){for(var c in b)Kd(c,b[c],a);return a}
function Nd(a){a=Md([],a);a[0]="";return a.join("")}
function Od(a,b){return Jd(2==arguments.length?Ld([a],arguments[1],0):Ld([a],arguments,1))}
function Pd(a,b){return Jd(Md([a],b))}
;function Qd(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=ta(e[0]||""),e=ta(e[1]||"");f in b?da(b[f])?Xa(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function Rd(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=Qd(d[1]||""),e;for(e in b)d[e]=b[e];return Pd(a,d)+c}
function Sd(a){a=Hd(a);a=null===a?null:a.split(".").reverse();return(null===a?!1:"com"==a[0]&&a[1].match(/^youtube(?:-nocookie)?$/)?!0:!1)||(null===a?!1:"google"==a[1]?!0:"google"==a[2]?"au"==a[0]&&"com"==a[1]?!0:"uk"==a[0]&&"co"==a[1]?!0:!1:!1)}
;var Td=null;"undefined"!=typeof XMLHttpRequest?Td=function(){return new XMLHttpRequest}:"undefined"!=typeof ActiveXObject&&(Td=function(){return new ActiveXObject("Microsoft.XMLHTTP")});
function Ud(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Vd(a,b,c,d,e,f,h){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&mc(b)(l)}
var l=Td&&Td();if(!("open"in l))return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;c=(c||"GET").toUpperCase();d=d||"";l.open(c,a,!0);f&&(l.responseType=f);h&&(l.withCredentials=!0);f="POST"==c;if(e=Wd(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(f=!1);f&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);return l}
function Wd(a,b){b=b||{};var c;c||(c=window.location.href);var d=a.match(Gd)[1]||null,e=Hd(a);d&&e?(d=c,c=a.match(Gd),d=d.match(Gd),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Hd(c)==e&&(Number(c.match(Gd)[4]||null)||null)==(Number(a.match(Gd)[4]||null)||null):!0;for(var f in Xd){if((e=d=H(Xd[f]))&&!(e=c)){var e=f,h=H("CORS_HEADER_WHITELIST")||{},k=Hd(a);e=k?(h=h[k])?B(h,e):!1:!0}e&&(b[f]=d)}return b}
function Yd(a,b){var c=H("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.hf&&(!Hd(a)||b.withCredentials||Hd(a)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.R&&b.R[c])}
function Zd(a,b){var c=b.format||"JSON";b.jf&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=H("XSRF_FIELD_NAME",void 0),e=H("XSRF_TOKEN",void 0),f=b.hc;f&&(f[d]&&delete f[d],a=Rd(a,f||{}));var h=b.kf||"",f=b.R;Yd(a,b)&&(f||(f={}),f[d]=e);f&&v(h)&&(d=Qd(h),ub(d,f),h=Nd(d));var k=!1,l,n=Vd(a,function(a){if(!k){k=!0;l&&J(l);var d=Ud(a),e=null;if(d||400<=a.status&&500>a.status)e=$d(c,a,b.gf);if(d)a:{switch(c){case "XML":d=
0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||m;d?b.ca&&b.ca.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.cc&&b.cc.call(f,a,e)}},b.method,h,b.headers,b.responseType,b.withCredentials);
b.kb&&0<b.timeout&&(l=I(function(){k||(k=!0,n.abort(),J(l),b.kb.call(b.context||m,n))},b.timeout));
return n}
function $d(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=zd(a));break;case "XML":if(b=(b=b.responseXML)?ae(b):null)d={},z(b.getElementsByTagName("*"),function(a){d[a.tagName]=be(a)})}c&&ce(d);
return d}
function ce(a){if(ia(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);c?a[b]=Pc(Ab("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"),a[b]):ce(a[b])}}
function ae(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function be(a){var b="";z(a.childNodes,function(a){b+=a.nodeValue});
return b}
var Xd={"X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};var de={},ee=0;function fe(a,b){isNaN(b)&&(b=void 0);var c=r("yt.scheduler.instance.addJob");return c?c(a,0,b):void 0===b?(a(),NaN):I(a,b||0)}
;var ge=[],he=!1;function ie(){function a(){he=!0;"google_ad_status"in window?kc("DCLKSTAT",1):kc("DCLKSTAT",2)}
Dc("//static.doubleclick.net/instream/ad_status.js",a);ge.push(fe(function(){he||"google_ad_status"in window||(Kc("//static.doubleclick.net/instream/ad_status.js",a),kc("DCLKSTAT",3))},5E3))}
function je(){return parseInt(H("DCLKSTAT",0),10)}
;function ke(a){if(a.classList)return a.classList;a=a.className;return v(a)&&a.match(/\S+/g)||[]}
function le(a,b){return a.classList?a.classList.contains(b):B(ke(a),b)}
function me(a,b){a.classList?a.classList.add(b):le(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function ne(a,b){a.classList?a.classList.remove(b):le(a,b)&&(a.className=La(ke(a),function(a){return a!=b}).join(" "))}
function oe(a,b,c){c?me(a,b):ne(a,b)}
;function pe(a,b){this.x=p(a)?a:0;this.y=p(b)?b:0}
pe.prototype.clone=function(){return new pe(this.x,this.y)};
pe.prototype.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
pe.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
pe.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function qe(a,b){this.width=a;this.height=b}
g=qe.prototype;g.clone=function(){return new qe(this.width,this.height)};
g.area=function(){return this.width*this.height};
g.isEmpty=function(){return!this.area()};
g.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};!jd&&!L||L&&vd(9)||jd&&ud("1.9.1");var re=L&&!ud("9");function se(a){return a?new te(ue(a)):ra||(ra=new te)}
function ve(a){return v(a)?document.getElementById(a):a}
function we(a){var b=document;return v(a)?b.getElementById(a):a}
function xe(a){var b=document;return b.querySelectorAll&&b.querySelector?b.querySelectorAll("."+a):ye(a,void 0)}
function ye(a,b){var c,d,e,f;c=document;c=b||c;if(c.querySelectorAll&&c.querySelector&&a)return c.querySelectorAll(""+(a?"."+a:""));if(a&&c.getElementsByClassName){var h=c.getElementsByClassName(a);return h}h=c.getElementsByTagName("*");if(a){f={};for(d=e=0;c=h[d];d++){var k=c.className;"function"==typeof k.split&&B(k.split(/\s+/),a)&&(f[e++]=c)}f.length=e;return f}return h}
function ze(a){a=a.document;a=Ae(a)?a.documentElement:a.body;return new qe(a.clientWidth,a.clientHeight)}
function Be(a){var b=a.scrollingElement?a.scrollingElement:!kd&&Ae(a)?a.documentElement:a.body||a.documentElement;a=a.parentWindow||a.defaultView;return L&&ud("10")&&a.pageYOffset!=b.scrollTop?new pe(b.scrollLeft,b.scrollTop):new pe(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function Ae(a){return"CSS1Compat"==a.compatMode}
function Ce(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function De(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null}
function Ee(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a}
function ue(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function Fe(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else{Ce(a);var c=ue(a);a.appendChild(c.createTextNode(String(b)))}}
var Ge={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},He={IMG:" ",BR:"\n"};function Ie(a){if(re&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];Je(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");re||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function Je(a,b,c){if(!(a.nodeName in Ge))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in He)b.push(He[a.nodeName]);else for(a=a.firstChild;a;)Je(a,b,c),a=a.nextSibling}
function Ke(a){var b=Le.jd;return b?Me(a,function(a){return!b||v(a.className)&&B(a.className.split(/\s+/),b)},!0,void 0):null}
function Me(a,b,c,d){c||(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function te(a){this.f=a||m.document||document}
te.prototype.createElement=function(a){return this.f.createElement(a)};
te.prototype.appendChild=function(a,b){a.appendChild(b)};
te.prototype.isElement=function(a){return ia(a)&&1==a.nodeType};
te.prototype.contains=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};var Ne=kd?"webkit":jd?"moz":L?"ms":hd?"o":"",Oe=r("yt.dom.getNextId_");if(!Oe){Oe=function(){return++Pe};
q("yt.dom.getNextId_",Oe,void 0);var Pe=0}function Qe(){var a=document,b;Ma(["fullscreenElement","fullScreenElement"],function(c){c in a?b=a[c]:(c=Ne+c.charAt(0).toUpperCase()+c.substr(1),b=c in a?a[c]:void 0);return!!b});
return b}
;function Re(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Se||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==
this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
Re.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Re.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Re.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};
var Se={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};var nb=r("yt.events.listeners_")||{};q("yt.events.listeners_",nb,void 0);var Te=r("yt.events.counter_")||{count:0};q("yt.events.counter_",Te,void 0);function Ue(a,b,c,d){a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return lb(function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function N(a,b,c,d){if(!a||!a.addEventListener&&!a.attachEvent)return"";d=!!d;var e=Ue(a,b,c,d);if(e)return e;var e=++Te.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),h;h=f?function(d){d=new Re(d);if(!Me(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Re(b);
b.currentTarget=a;return c.call(a,b)};
h=mc(h);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,h,d)):a.attachEvent("on"+b,h);nb[e]=[a,b,c,h,d];return e}
function Ve(a){a&&("string"==typeof a&&(a=[a]),z(a,function(a){if(a in nb){var c=nb[a],d=c[0],e=c[1],f=c[3],c=c[4];d.removeEventListener?d.removeEventListener(e,f,c):d.detachEvent&&d.detachEvent("on"+e,f);delete nb[a]}}))}
;function We(){if(null==r("_lact",window)){var a=parseInt(H("LACT"),10),a=isFinite(a)?x()-Math.max(a,0):-1;q("_lact",a,window);-1==a&&Xe();N(document,"keydown",Xe);N(document,"keyup",Xe);N(document,"mousedown",Xe);N(document,"mouseup",Xe);xc("page-mouse",Xe);xc("page-scroll",Xe);xc("page-resize",Xe)}}
function Xe(){null==r("_lact",window)&&(We(),r("_lact",window));var a=x();q("_lact",a,window);K("USER_ACTIVE")}
function Ye(){var a=r("_lact",window);return null==a?-1:Math.max(x()-a,0)}
;function Ze(){}
;function $e(a){this.f=a||{cookie:""}}
var af=/\s*;\s*/;g=$e.prototype;g.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');p(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(x()+1E3*c)).toUTCString();this.f.cookie=a+"="+b+e+d+c+f};
g.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(af),e=0,f;f=d[e];e++){if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.remove=function(a,b,c){var d=p(this.get(a));this.set(a,"",0,b,c);return d};
g.ra=function(){return bf(this).keys};
g.V=function(){return bf(this).values};
g.isEmpty=function(){return!this.f.cookie};
g.U=function(){return this.f.cookie?(this.f.cookie||"").split(af).length:0};
g.bb=function(a){for(var b=bf(this).values,c=0;c<b.length;c++)if(b[c]==a)return!0;return!1};
g.clear=function(){for(var a=bf(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function bf(a){a=(a.f.cookie||"").split(af);for(var b=[],c=[],d,e,f=0;e=a[f];f++)d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var cf=new $e("undefined"==typeof document?null:document);cf.h=3950;function df(a,b,c){cf.set(""+a,b,c,"/","youtube.com")}
;function ef(a,b,c){var d=H("EVENT_ID");d&&(b||(b={}),b.ei||(b.ei=d));if(b){var d=H("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=Hd(window.location.href);e&&d.push(e);e=Hd(a);if(B(d,e)||!e&&0==a.lastIndexOf("/",0)){var f=a.match(Gd),d=f[5],e=f[6],f=f[7],h="";d&&(h+=d);e&&(h+="?"+e);f&&(h+="#"+f);d=h;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e))e=H("ST_BASE36",!0),f=H("ST_SHORT",!0)?"ST-":"s_tempdata-",d=f=e?f+Ja(d).toString(36):f+Ja(d),e=b?Nd(b):"",df(d,e,5),b&&(b=b.itct||b.ved,d=r("yt.logging.screenreporter.storeParentElement"),
b&&d&&d(new Ze))}}if(c)return!1;(window.ytspf||{}).enabled?spf.navigate(a):(c=window.location,a=Pd(a,{})+"",a=a instanceof Bb?a:Fb(a),c.href=Db(a));return!0}
;function ff(a){a=a||{};this.url=a.url||"";this.urlV9As2=a.url_v9as2||"";this.args=a.args||qb(gf);this.assets=a.assets||{};this.attrs=a.attrs||qb(hf);this.params=a.params||qb(jf);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.f=a.messages||{}}
var gf={enablejsapi:1},hf={},jf={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function kf(a){a instanceof ff||(a=new ff(a));return a}
ff.prototype.clone=function(){var a=new ff,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==ca(c)?a[b]=qb(c):a[b]=c}return a};function lf(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
g=lf.prototype;g.getHeight=function(){return this.bottom-this.top};
g.clone=function(){return new lf(this.top,this.right,this.bottom,this.left)};
g.contains=function(a){return this&&a?a instanceof lf?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom:!1};
g.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
g.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
g.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function mf(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
g=mf.prototype;g.clone=function(){return new mf(this.left,this.top,this.width,this.height)};
g.contains=function(a){return a instanceof mf?this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height:a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height};
g.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function nf(a){nf[" "](a);return a}
nf[" "]=t;function of(a,b){var c=ue(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function pf(a,b){return of(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function qf(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}L&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function rf(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function sf(a){var b=tf;if("none"!=pf(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function tf(a){var b=a.offsetWidth,c=a.offsetHeight,d=kd&&!b&&!c;return p(b)&&!d||!a.getBoundingClientRect?new qe(b,c):(a=qf(a),new qe(a.right-a.left,a.bottom-a.top))}
function uf(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return e}
function vf(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?uf(a,c):0}
var wf={thin:2,medium:4,thick:6};function xf(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in wf?wf[c]:uf(a,c)}
;var yf=C("Firefox"),zf=gd()||C("iPod"),Af=C("iPad"),Bf=C("Android")&&!(yb()||C("Firefox")||C("Opera")||C("Silk")),Cf=yb(),Df=C("Safari")&&!(yb()||C("Coast")||C("Opera")||C("Edge")||C("Silk")||C("Android"))&&!(gd()||C("iPad")||C("iPod"));function Ef(){var a;if(a=cf.get("PREF",void 0)){a=unescape(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Ff[d]=c.toString())}}}
ba(Ef);var Ff=r("yt.prefs.UserPrefs.prefs_")||{};q("yt.prefs.UserPrefs.prefs_",Ff,void 0);function Gf(a){if(/^f([1-9][0-9]*)$/.test(a))throw"ExpectedRegexMatch: "+a;}
function Hf(a){if(!/^\w+$/.test(a))throw"ExpectedRegexMismatch: "+a;}
function If(a){a=void 0!==Ff[a]?Ff[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Ef.prototype.get=function(a,b){Hf(a);Gf(a);var c=void 0!==Ff[a]?Ff[a].toString():null;return null!=c?c:b?b:""};
Ef.prototype.set=function(a,b){Hf(a);Gf(a);if(null==b)throw"ExpectedNotNull";Ff[a]=b.toString()};
function Jf(a,b){return!!((If("f"+(Math.floor(b/31)+1))||0)&1<<b%31)}
Ef.prototype.remove=function(a){Hf(a);Gf(a);delete Ff[a]};
Ef.prototype.clear=function(){Ff={}};function Kf(a,b){(a=ve(a))&&a.style&&(a.style.display=b?"":"none",oe(a,"hid",!b))}
function Lf(a){z(arguments,function(a){!ea(a)||a instanceof Element?Kf(a,!0):z(a,function(a){Lf(a)})})}
function Mf(a){z(arguments,function(a){!ea(a)||a instanceof Element?Kf(a,!1):z(a,function(a){Mf(a)})})}
;function Nf(){this.j=this.h=this.f=0;this.l="";var a=r("window.navigator.plugins"),b=r("window.navigator.mimeTypes"),a=a&&a["Shockwave Flash"],b=b&&b["application/x-shockwave-flash"],b=a&&b&&b.enabledPlugin&&a.description||"";if(a=b){var c=a.indexOf("Shockwave Flash");0<=c&&(a=a.substr(c+15));for(var c=a.split(" "),d="",a="",e=0,f=c.length;e<f;e++)if(d)if(a)break;else a=c[e];else d=c[e];d=d.split(".");c=parseInt(d[0],10)||0;d=parseInt(d[1],10)||0;e=0;if("r"==a.charAt(0)||"d"==a.charAt(0))e=parseInt(a.substr(1),
10)||0;a=[c,d,e]}else a=[0,0,0];this.l=b;b=a;this.f=b[0];this.h=b[1];this.j=b[2];if(0>=this.f){var h,k,l,n;if(rc)try{h=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(u){h=null}else l=document.body,n=document.createElement("object"),n.setAttribute("type","application/x-shockwave-flash"),h=l.appendChild(n);if(h&&"GetVariable"in h)try{k=h.GetVariable("$version")}catch(u){k=""}l&&n&&l.removeChild(n);(h=k||"")?(h=h.split(" ")[1].split(","),h=[parseInt(h[0],10)||0,parseInt(h[1],10)||0,parseInt(h[2],
10)||0]):h=[0,0,0];this.f=h[0];this.h=h[1];this.j=h[2]}}
ba(Nf);Nf.prototype.getVersion=function(){return[this.f,this.h,this.j]};
function Of(a,b,c,d){b="string"==typeof b?b.split("."):[b,c,d];b[0]=parseInt(b[0],10)||0;b[1]=parseInt(b[1],10)||0;b[2]=parseInt(b[2],10)||0;return a.f>b[0]||a.f==b[0]&&a.h>b[1]||a.f==b[0]&&a.h==b[1]&&a.j>=b[2]}
function Pf(a){return-1<a.l.indexOf("Gnash")&&-1==a.l.indexOf("AVM2")||9==a.f&&1==a.h||9==a.f&&0==a.h&&1==a.j?!1:9<=a.f}
function Qf(a){return md?!Of(a,11,2):ld?!Of(a,11,3):!Pf(a)}
;function Rf(a,b,c){if(b){a=v(a)?we(a):a;var d=qb(c.attrs);d.tabindex=0;var e=qb(c.params);e.flashvars=Nd(c.args);if(rc){d.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=b;b=document.createElement("object");for(var f in d)b.setAttribute(f,d[f]);for(f in e)d=document.createElement("param"),d.setAttribute("name",f),d.setAttribute("value",e[f]),b.appendChild(d)}else{d.type="application/x-shockwave-flash";d.src=b;b=document.createElement("embed");b.setAttribute("name",d.id);for(f in d)b.setAttribute(f,
d[f]);for(f in e)b.setAttribute(f,e[f])}e=document.createElement("div");e.appendChild(b);a.innerHTML=e.innerHTML}}
function Sf(a,b,c){if(a&&a.attrs&&a.attrs.id){a=kf(a);var d=!!b,e=ve(a.attrs.id),f=e?e.parentNode:null;if(e&&f){if(window!=window.top){var h=null;if(document.referrer){var k=document.referrer.substring(0,128);Sd(k)||(h=k)}else h="unknown";h&&(d=!0,a.args.framer=h)}h=Nf.getInstance();if(Of(h,a.minVersion)){var k=Tf(a,h),l="";-1<navigator.userAgent.indexOf("Sony/COM2")||(l=e.getAttribute("src")||e.movie);(l!=k||d)&&Rf(f,k,a);Qf(h)&&Uf()}else Vf(f,a,h);c&&c()}else I(function(){Sf(a,b,c)},50)}}
function Vf(a,b,c){0==c.f&&b.fallback?b.fallback():0==c.f&&b.fallbackMessage?b.fallbackMessage():a.innerHTML='<div id="flash-upgrade">'+pc()+"</div>"}
function Tf(a,b){return Pf(b)&&a.url||(-1<navigator.userAgent.indexOf("Sony/COM2")&&!Of(b,9,1,58)?!1:!0)&&a.urlV9As2||a.url}
function Uf(){var a=ve("flash10-promo-div"),b=Jf(Ef.getInstance(),107);a&&!b&&Lf(a)}
;function Wf(a){if(window.spf){var b=a.match(Xf);spf.style.load(a,b?b[1]:"",void 0)}else Yf(a)}
function Yf(a){var b=Zf(a),c=document.getElementById(b),d=c&&D(c,"loaded");d||c&&!d||(c=$f(a,b,function(){D(c,"loaded")||(Mb(c,"loaded","true"),K(b),I(pa(Cc,b),0))}))}
function $f(a,b,c){var d=document.createElement("link");d.id=b;d.rel="stylesheet";d.onload=function(){c&&setTimeout(c,0)};
Lb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Zf(a){var b=document.createElement("a");Lb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Ja(a)}
var Xf=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;var ag;var bg=vb,bg=bg.toLowerCase();if(-1!=bg.indexOf("android")){var cg=bg.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(cg)ag=Number(cg[1]);else{var dg={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1},eg=bg.match("("+jb(dg).join("|")+")");ag=eg?dg[eg[0]]:0}}else ag=void 0;var fg=zf||Af;var gg=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],hg=['audio/mp4; codecs="mp4a.40.2"'];function ig(a){E.call(this);this.f=[];this.h=a||this}
y(ig,E);function jg(a,b,c,d){d=mc(w(d,a.h));b.addEventListener(c,d);a.f.push({target:b,name:c,Ob:d})}
ig.prototype.Gb=function(a){for(var b=0;b<this.f.length;b++)if(this.f[b]==a){this.f.splice(b,1);a.target.removeEventListener(a.name,a.Ob);break}};
function kg(a){for(;a.f.length;){var b=a.f.pop();b.target.removeEventListener(b.name,b.Ob)}}
ig.prototype.G=function(){kg(this);ig.I.G.call(this)};function lg(a,b){this.h=this.C=this.l="";this.B=null;this.o=this.f="";this.A=!1;var c;a instanceof lg?(this.A=p(b)?b:a.A,mg(this,a.l),this.C=a.C,ng(this,a.h),og(this,a.B),this.f=a.f,pg(this,a.j.clone()),this.o=a.o):a&&(c=String(a).match(Gd))?(this.A=!!b,mg(this,c[1]||"",!0),this.C=qg(c[2]||""),ng(this,c[3]||"",!0),og(this,c[4]),this.f=qg(c[5]||"",!0),pg(this,c[6]||"",!0),this.o=qg(c[7]||"")):(this.A=!!b,this.j=new rg(null,0,this.A))}
lg.prototype.toString=function(){var a=[],b=this.l;b&&a.push(sg(b,tg,!0),":");var c=this.h;if(c||"file"==b)a.push("//"),(b=this.C)&&a.push(sg(b,tg,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.B,null!=c&&a.push(":",String(c));if(c=this.f)this.h&&"/"!=c.charAt(0)&&a.push("/"),a.push(sg(c,"/"==c.charAt(0)?ug:vg,!0));(c=this.j.toString())&&a.push("?",c);(c=this.o)&&a.push("#",sg(c,wg));return a.join("")};
lg.prototype.resolve=function(a){var b=this.clone(),c=!!a.l;c?mg(b,a.l):c=!!a.C;c?b.C=a.C:c=!!a.h;c?ng(b,a.h):c=null!=a.B;var d=a.f;if(c)og(b,a.B);else if(c=!!a.f){if("/"!=d.charAt(0))if(this.h&&!this.f)d="/"+d;else{var e=b.f.lastIndexOf("/");-1!=e&&(d=b.f.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){for(var d=0==e.lastIndexOf("/",0),e=e.split("/"),f=[],h=0;h<e.length;){var k=e[h++];"."==k?d&&h==e.length&&f.push(""):".."==k?((1<f.length||1==f.length&&
""!=f[0])&&f.pop(),d&&h==e.length&&f.push("")):(f.push(k),d=!0)}d=f.join("/")}else d=e}c?b.f=d:c=""!==a.j.toString();c?pg(b,qg(a.j.toString())):c=!!a.o;c&&(b.o=a.o);return b};
lg.prototype.clone=function(){return new lg(this)};
function mg(a,b,c){a.l=c?qg(b,!0):b;a.l&&(a.l=a.l.replace(/:$/,""))}
function ng(a,b,c){a.h=c?qg(b,!0):b}
function og(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.B=b}else a.B=null}
function pg(a,b,c){b instanceof rg?(a.j=b,xg(a.j,a.A)):(c||(b=sg(b,yg)),a.j=new rg(b,0,a.A))}
function O(a,b,c){a.j.set(b,c)}
function zg(a,b,c){da(c)||(c=[String(c)]);Ag(a.j,b,c)}
function Bg(a){O(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^x()).toString(36));return a}
function Cg(a){return a instanceof lg?a.clone():new lg(a,void 0)}
function Dg(a,b,c,d){var e=new lg(null,void 0);a&&mg(e,a);b&&ng(e,b);c&&og(e,c);d&&(e.f=d);return e}
function qg(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function sg(a,b,c){return v(a)?(a=encodeURI(a).replace(b,Eg),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}
function Eg(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var tg=/[#\/\?@]/g,vg=/[\#\?:]/g,ug=/[\#\?]/g,yg=/[\#\?@]/g,wg=/#/g;function rg(a,b,c){this.h=this.f=null;this.j=a||null;this.l=!!c}
function Fg(a){a.f||(a.f=new Vc,a.h=0,a.j&&Id(a.j,function(b,c){Gg(a,ta(b),c)}))}
g=rg.prototype;g.U=function(){Fg(this);return this.h};
function Gg(a,b,c){Fg(a);a.j=null;b=Hg(a,b);var d=a.f.get(b);d||a.f.set(b,d=[]);d.push(c);a.h=a.h+1}
g.remove=function(a){Fg(this);a=Hg(this,a);return Xc(this.f.h,a)?(this.j=null,this.h=this.h-this.f.get(a).length,this.f.remove(a)):!1};
g.clear=function(){this.f=this.j=null;this.h=0};
g.isEmpty=function(){Fg(this);return 0==this.h};
function Ig(a,b){Fg(a);b=Hg(a,b);return Xc(a.f.h,b)}
g.bb=function(a){var b=this.V();return B(b,a)};
g.ra=function(){Fg(this);for(var a=this.f.V(),b=this.f.ra(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
g.V=function(a){Fg(this);var b=[];if(v(a))Ig(this,a)&&(b=Va(b,this.f.get(Hg(this,a))));else{a=this.f.V();for(var c=0;c<a.length;c++)b=Va(b,a[c])}return b};
g.set=function(a,b){Fg(this);this.j=null;a=Hg(this,a);Ig(this,a)&&(this.h=this.h-this.f.get(a).length);this.f.set(a,[b]);this.h=this.h+1;return this};
g.get=function(a,b){var c=a?this.V(a):[];return 0<c.length?String(c[0]):b};
function Ag(a,b,c){a.remove(b);0<c.length&&(a.j=null,a.f.set(Hg(a,b),Wa(c)),a.h=a.h+c.length)}
g.toString=function(){if(this.j)return this.j;if(!this.f)return"";for(var a=[],b=this.f.ra(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.V(d),f=0;f<d.length;f++){var h=e;""!==d[f]&&(h+="="+encodeURIComponent(String(d[f])));a.push(h)}return this.j=a.join("&")};
g.clone=function(){var a=new rg;a.j=this.j;this.f&&(a.f=this.f.clone(),a.h=this.h);return a};
function Hg(a,b){var c=String(b);a.l&&(c=c.toLowerCase());return c}
function xg(a,b){b&&!a.l&&(Fg(a),a.j=null,a.f.forEach(function(a,b){var e=b.toLowerCase();b!=e&&(this.remove(b),Ag(this,e,a))},a));
a.l=b}
g.extend=function(a){for(var b=0;b<arguments.length;b++)bd(arguments[b],function(a,b){Gg(this,b,a)},this)};var Jg="corp.google.com googleplex.com youtube.com youtube-nocookie.com youtubeeducation.com borg.google.com prod.google.com sandbox.google.com books.googleusercontent.com docs.google.com drive.google.com mail.google.com photos.google.com plus.google.com lh2.google.com picasaweb.google.com play.google.com googlevideo.com talkgadget.google.com survey.g.doubleclick.net youtube.googleapis.com vevo.com".split(" "),Kg="";
function Lg(a){return a&&a==Kg?!0:(new RegExp("^(https?:)?//([a-z0-9-]{1,63}\\.)*("+Jg.join("|").replace(/\./g,".")+")(:[0-9]+)?([/?#]|$)","i")).test(a)?(Kg=a,!0):!1}
;var Mg={},Ng=0,Og=r("yt.net.ping.workerUrl_")||null;q("yt.net.ping.workerUrl_",Og,void 0);function Pg(a){try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||a&&Qg(a)}catch(b){a&&Qg(a)}}
function Qg(a){var b=new Image,c=""+Ng++;Mg[c]=b;b.onload=b.onerror=function(){delete Mg[c]};
b.src=a}
;function P(a,b){this.version=a;this.args=b}
function Rg(a){if(!a.Ha){var b={};a.call(b);a.Ha=b.version}return a.Ha}
function Sg(a,b){function c(){a.apply(this,b.args)}
if(!b.args||!b.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");var d;try{d=Rg(a)}catch(e){}if(!d||b.version!=d)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");c.prototype=a.prototype;try{return new c}catch(e){throw e.message="yt.pubsub2.Data.deserialize(): "+e.message,e;}}
function Q(a,b){this.h=a;this.f=b}
Q.prototype.toString=function(){return this.h};var Tg=r("yt.pubsub2.instance_")||new G;G.prototype.subscribe=G.prototype.subscribe;G.prototype.unsubscribeByKey=G.prototype.oa;G.prototype.publish=G.prototype.F;G.prototype.clear=G.prototype.clear;q("yt.pubsub2.instance_",Tg,void 0);var Ug=r("yt.pubsub2.subscribedKeys_")||{};q("yt.pubsub2.subscribedKeys_",Ug,void 0);var Vg=r("yt.pubsub2.topicToKeys_")||{};q("yt.pubsub2.topicToKeys_",Vg,void 0);var Wg=r("yt.pubsub2.isAsync_")||{};q("yt.pubsub2.isAsync_",Wg,void 0);
q("yt.pubsub2.skipSubKey_",null,void 0);function R(a,b){var c=Xg();c&&c.publish.call(c,a.toString(),a,b)}
function Yg(a,b,c){var d=Xg();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,h){if(!window.yt.pubsub2.skipSubKey_||window.yt.pubsub2.skipSubKey_!=e){var k=function(){if(Ug[e])try{if(h&&a instanceof Q&&a!=d)try{h=Sg(a.f,h)}catch(k){throw k.message="yt.pubsub2 cross-binary conversion error for "+a.toString()+": "+k.message,k;}b.call(c||window,h)}catch(k){oc(k)}};
Wg[a.toString()]?r("yt.scheduler.instance")?fe(k,void 0):I(k,0):k()}});
Ug[e]=!0;Vg[a.toString()]||(Vg[a.toString()]=[]);Vg[a.toString()].push(e);return e}
function Zg(a){var b=Xg();b&&(fa(a)&&(a=[a]),z(a,function(a){b.unsubscribeByKey(a);delete Ug[a]}))}
function Xg(){return r("yt.pubsub2.instance_")}
;function $g(a){P.call(this,1,arguments)}
y($g,P);var ah=new Q("timing-sent",$g);function bh(a){var b=a||window;if(!(b.performance&&b.performance.timing&&b.performance.getEntriesByType))return{Eb:0,Yc:0};a=ze(b||window);for(var c=[],d=b.document.getElementsByTagName("*"),e=0,f=d.length;e<f;e++){var h=d[e];if("IMG"==h.tagName||"IFRAME"==h.tagName){var k=ch(h,h.src,a);if(k){if("IFRAME"==h.tagName){var l;try{l=bh(h.contentWindow).Eb}catch(n){l=0}0<l&&(k.timing=l)}c.push(k)}}(k=b.getComputedStyle(h)["background-image"])&&(k=dh.exec(k))&&1<k.length&&(k=ch(h,k[1],a))&&c.push(k)}l=b.performance.getEntriesByType("resource");
h=b.performance.getEntriesByType("mark");d={};e=0;for(f=l.length;e<f;e++)k=l[e],d[k.name]=k.responseEnd;e=0;for(f=h.length;e<f;e++)k=h[e],"mark_iframe_loaded: "==k.name.slice(0,20)&&(d[k.name.slice(20)]=k.startTime);e=0;for(f=c.length;e<f;e++)h=c[e],h.timing||(h.timing=d[h.url]||0);b=eh(b,l);a=fh(b,a,c);h=c=0;if(a.length)for(d=l=0,e=a.length;d<e;d++)f=a[d],h=f.timing-h,0<h&&1>l&&(c+=(1-l)*h),h=f.timing,l=f.progress;return{Eb:Math.round(c||b),Yc:h}}
function ch(a,b,c){if(b&&a.getBoundingClientRect){var d=a.getBoundingClientRect();a=Math.max(d.top,0);var e=Math.min(d.right,c.width);c=Math.min(d.bottom,c.height);d=Math.max(d.left,0);if(c>a&&e>d)return new gh(a,e,c,d,b)}return null}
function eh(a,b){var c,d=a.performance.timing.navigationStart;if("msFirstPaint"in a.performance.timing)c=a.performance.timing.f-d;else if("chrome"in a&&"loadTimes"in a.chrome){var e=a.chrome.loadTimes(),f=e.firstPaintTime;if(0<f){var h=e.startLoadTime;"requestTime"in e&&(h=e.requestTime);f>=h&&(c=1E3*(f-h))}}if(void 0===c||0>c||12E4<c){c=a.performance.timing.responseStart-d;for(var k={},d=a.document.getElementsByTagName("head")[0].children,e=0,f=d.length;e<f;e++)h=d[e],"SCRIPT"==h.tagName&&h.src&&
!h.async?k[h.src]=!0:"LINK"==h.tagName&&"stylesheet"==h.rel&&h.href&&(k[h.href]=!0);b.some(function(a){if(!k[a.name]||"script"!=a.initiatorType&&"link"!=a.initiatorType)return!0;a=a.responseEnd;if(void 0===c||a>c)c=a})}return Math.max(c,0)||0}
function fh(a,b,c){for(var d={0:0},e=0,f=0,h=c.length;f<h;f++){var k=c[f],l=a;k.timing>a&&(l=k.timing);d[l]||(d[l]=0);k=(k.f-k.l)*(k.j-k.h);d[l]+=k;e+=k}f=b.width*b.height;0<f&&(f=.1*Math.max(f-e,0),a in d||(d[a]=0),d[a]+=f,e+=f);a=[];if(e){for(var n in d)b=new hh(parseFloat(n),d[n]),a.push(b);a.sort(function(a,b){return a.timing-b.timing});
f=d=0;for(h=a.length;f<h;f++)b=a[f],d+=b.area,b.progress=d/e}return a}
function gh(a,b,c,d,e){this.f=c;this.h=d;this.j=b;this.l=a;this.url=e}
function hh(a,b){this.area=b;this.timing=a}
var dh=/url\(["']?(http[^'"\)]+)['"]?\)/i;var S=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{},ih=w(S.clearResourceTimings||S.webkitClearResourceTimings||S.mozClearResourceTimings||S.msClearResourceTimings||S.oClearResourceTimings||t,S),jh=S.mark?function(a){S.mark(a)}:t;
function kh(a){lh()[a]=qc();jh(a);var b;b=H("TIMING_ACTION",void 0);a=lh();if(r("yt.timing.ready_")&&b&&a._start&&mh()){b=!0;var c=H("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}if(b)if(c=lh(),a=nh().span,d=nh().info,b=r("yt.timing.reportbuilder_")){if(b=b(c,a,d,void 0))oh(b),ph()}else{var f=H("TIMING_ACTION",void 0),e=H("CSI_SERVICE_NAME","youtube");b={v:2,s:e,action:f};if(S.now&&S.timing){var h=S.timing.navigationStart+S.now(),h=Math.round(x()-h);d.yt_hrd=
h}var h=H("TIMING_INFO",{}),k;for(k in h)d[k]=h[k];k=d.srt;delete d.srt;var l;void 0===c.srt&&(k||0===k||(l=S.timing||{},k=Math.max(0,l.responseStart-l.navigationStart),isNaN(k)&&d.pt&&(k=d.pt)),k||0===k)&&(d.srt=Math.round(k));d.h5jse&&(h=window.location.protocol+r("ytplayer.config.assets.js"),(h=S.getEntriesByName?S.getEntriesByName(h)[0]:null)?d.h5jse=Math.round(d.h5jse-h.responseEnd):delete d.h5jse);c.aft=mh();h=c._start;if("cold"==d.yt_lt){l||(l=S.timing||{});var n;a:if(n=l,n.msFirstPaint)n=
Math.max(0,n.msFirstPaint);else{var u=window.chrome;if(u&&(u=u.loadTimes,ha(u))){var u=u(),X=1E3*Math.min(u.requestTime||Infinity,u.startLoadTime||Infinity),X=Infinity===X?0:n.navigationStart-X;n=Math.max(0,Math.round(1E3*u.firstPaintTime+X)||0);break a}n=0}0<n&&n>h&&(c.fpt=n);n=a||nh().span;u=l.redirectEnd-l.redirectStart;0<u&&(n.rtime_=u);u=l.domainLookupEnd-l.domainLookupStart;0<u&&(n.dns_=u);u=l.connectEnd-l.connectStart;0<u&&(n.tcp_=u);u=l.connectEnd-l.secureConnectionStart;l.secureConnectionStart>=
l.navigationStart&&0<u&&(n.stcp_=u);u=l.responseStart-l.requestStart;0<u&&(n.req_=u);u=l.responseEnd-l.responseStart;0<u&&(n.rcv_=u);S.getEntriesByType&&qh(c);(l=H("SPEEDINDEX_FOR_ACTIONS",void 0))&&-1<l.indexOf(f)&&(l=qc(),f=bh(),n=qc(),0<f.Eb&&(d.si=f.Eb,c.vsc=rh(f.Yc),c.sics=l,c.sice=n));l=[];if(document.querySelector&&S&&S.getEntriesByName){var f={'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'script[name="scheduler/scheduler"]':"sj",'script[name="desktop_polymer/desktop_polymer"]':"dpj",
'link[rel="import"][name="desktop_polymer"]':"dph"},ga;for(ga in f)if(n=document.querySelector(ga))u="",X=n.nodeName,"SCRIPT"==X?u=n.src:"LINK"==X&&(u=n.href),u&&(n=S.getEntriesByName(u))&&n[0]&&l.push(f[ga]+"."+Math.round(n[0].duration))}l.length&&(d.rs=l.join(","))}f=lh();ga=f.pbr;l=f.vc;f=f.pbs;ga&&l&&f&&ga<l&&l<f&&1==nh().info.yt_vis&&"youtube"==e&&(nh().info.yt_lt="hot_bg",ga=c.vc,e=c.pbs,delete c.aft,a.aft=Math.round(e-ga));(ga=H("PREVIOUS_ACTION"))&&(d.pa=ga);d.p=H("CLIENT_PROTOCOL")||"unknown";
d.t=H("CLIENT_TRANSPORT")||"unknown";window.navigator&&window.navigator.sendBeacon&&(d.ba=1);for(var Qb in d)"_"!=Qb.charAt(0)&&(b[Qb]=d[Qb]);c.ps=qc();Qb={};var d=[],Vb;for(Vb in c)"_"!=Vb.charAt(0)&&(n=Math.max(Math.round(c[Vb]-h),0),Qb[Vb]=n,d.push(Vb+"."+n));b.rt=d.join(",");Vb=b;var c=[],rb;for(rb in a)"_"!=rb.charAt(0)&&c.push(rb+"."+Math.round(a[rb]));Vb.it=c.join(",");(rb=r("ytdebug.logTiming"))&&rb(b,Qb,a);ph();H("EXP_DEFER_CSI_PING")?(sh(),q("yt.timing.deferredPingArgs_",b,void 0),rb=I(sh,
0),q("yt.timing.deferredPingTimer_",rb,void 0)):oh(b);R(ah,new $g(Qb.aft+(k||0)))}}}
function ph(){th();ih();q("yt.timing.pingSent_",!1,void 0)}
function mh(){var a=lh();if(a.aft)return a.aft;for(var b=H("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function rh(a){return Math.round(S.timing.navigationStart+a)}
function qh(a){var b=window.location.protocol,c=S.getEntriesByType("resource"),d=c.filter(function(a){return 0==a.name.indexOf(b+"//fonts.googleapis.com/css?family=")})[0],c=c.filter(function(a){return 0==a.name.indexOf(b+"//fonts.gstatic.com/s/")}).reduce(function(a,b){return b.duration>a.duration?b:a},{duration:0});
d&&0<d.startTime&&0<d.responseEnd&&(a.wfcs=rh(d.startTime),a.wfce=rh(d.responseEnd));c&&0<c.startTime&&0<c.responseEnd&&(a.wffs=rh(c.startTime),a.wffe=rh(c.responseEnd))}
function oh(a){if(H("DEBUG_CSI_DATA")){var b=r("yt.timing.csiData");b||(b=[],q("yt.timing.csiData",b,void 0));b.push({page:location.href,time:new Date,args:a})}H("EXP_DEFER_CSI_PING")&&(J(r("yt.timing.deferredPingTimer_")),q("yt.timing.deferredPingArgs_",null,void 0));var c="https:"==window.location.protocol?"https://gg.google.com/csi":"http://csi.gstatic.com/csi",c=H("CSI_LOG_WITH_YT")?"/csi_204":c,b="",d;for(d in a)b+="&"+d+"="+a[d];a=c+"?"+b.substring(1);b=H("DOUBLE_LOG_CSI")?"/csi_204?"+b.substring(1):
null;window.navigator&&window.navigator.sendBeacon?(Pg(a),b&&Pg(b)):(a&&Qg(a),b&&b&&Qg(b));q("yt.timing.pingSent_",!0,void 0)}
function sh(a){if(H("EXP_DEFER_CSI_PING")){var b=r("yt.timing.deferredPingArgs_");b&&(a&&(b.yt_fss=a),oh(b))}}
function lh(){return nh().tick}
function nh(){return r("ytcsi.data_")||th()}
function th(){var a={tick:{},span:{},info:{}};q("ytcsi.data_",a,void 0);return a}
;var uh={"api.invalidparam":2,auth:150,"drm.auth":150,heartbeat:150,"html5.unsupportedads":5,"fmt.noneavailable":5,"fmt.decode":5,"fmt.unplayable":5,"html5.missingapi":5,"drm.unavailable":5};function vh(a,b){E.call(this);this.o=this.l=a;this.Z=b;this.C=!1;this.api={};this.va=this.T=null;this.ha=new G;fc(this,pa(F,this.ha));this.j={};this.A=this.Ba=this.h=this.Mb=this.f=null;this.qa=!1;this.J=this.B=this.P=this.S=null;this.Pa={};this.qd=["onReady"];this.ta=new ig(this);fc(this,pa(F,this.ta));this.Nb=null;this.nc=NaN;this.ua={};wh(this);this.xa("onDetailedError",w(this.Zd,this));this.xa("onTabOrderChange",w(this.sd,this));this.xa("onTabAnnounce",w(this.oc,this));this.xa("WATCH_LATER_VIDEO_ADDED",
w(this.$d,this));this.xa("WATCH_LATER_VIDEO_REMOVED",w(this.ae,this));yf||(this.xa("onMouseWheelCapture",w(this.Wd,this)),this.xa("onMouseWheelRelease",w(this.Xd,this)));this.xa("onAdAnnounce",w(this.oc,this));this.L=new ig(this);fc(this,pa(F,this.L));this.Lb=!1;this.$a=null}
y(vh,E);var xh=["drm.unavailable","fmt.noneavailable","html5.missingapi","html5.unsupportedads","html5.unsupportedlive"];g=vh.prototype;g.jc=function(a,b){this.isDisposed()||(yh(this,a),zh(this,b),this.C&&Ah(this))};
function yh(a,b){a.Mb=b;a.f=b.clone();a.h=a.f.attrs.id||a.h;"video-player"==a.h&&(a.h=a.Z,a.f.attrs.id=a.Z);a.o.id==a.h&&(a.h+="-player",a.f.attrs.id=a.h);a.f.args.enablejsapi="1";a.f.args.playerapiid=a.Z;a.Ba||(a.Ba=Bh(a,a.f.args.jsapicallback||"onYouTubePlayerReady"));a.f.args.jsapicallback=null;var c=a.f.attrs.width;c&&(a.o.style.width=rf(Number(c)||c,!0));if(c=a.f.attrs.height)a.o.style.height=rf(Number(c)||c,!0)}
g.Cd=function(){return this.Mb};
function Ah(a){a.f.loaded||(a.f.loaded=!0,"0"!=a.f.args.autoplay?a.api.loadVideoByPlayerVars(a.f.args):a.api.cueVideoByPlayerVars(a.f.args))}
function Ch(a){if(!p(a.f.disable.flash)){var b=a.f.disable,c;c=Of(Nf.getInstance(),a.f.minVersion);b.flash=!c}return!a.f.disable.flash}
function Dh(a,b){if((!b||(5!=(uh[b.errorCode]||5)?0:-1!=xh.indexOf(b.errorCode)))&&Ch(a)){var c=Eh(a);c&&c.stopVideo&&c.stopVideo();var d=a.f;c&&c.getUpdatedConfigurationData&&(c=c.getUpdatedConfigurationData(),d=kf(c));d.args.autoplay=1;d.args.html5_unavailable="1";yh(a,d);zh(a,"flash")}}
function zh(a,b){if(!a.isDisposed()){if(!b){var c;if(!(c=!a.f.html5&&Ch(a))){if(!p(a.f.disable.html5)){var d;c=!0;void 0!=a.f.args.deviceHasDisplay&&(c=a.f.args.deviceHasDisplay);if(2.2==ag)d=!0;else{a:{var e=c;c=r("yt.player.utils.videoElement_");c||(c=document.createElement("video"),q("yt.player.utils.videoElement_",c,void 0));try{if(c.canPlayType)for(var e=e?gg:hg,f=0;f<e.length;f++)if(c.canPlayType(e[f])){d=null;break a}d="fmt.noneavailable"}catch(h){d="html5.missingapi"}}d=!d}d&&(d=Fh(a)||a.f.assets.js);
a.f.disable.html5=!d;d||(a.f.args.html5_unavailable="1")}c=!!a.f.disable.html5}b=c?Ch(a)?"flash":"unsupported":"html5"}("flash"==b?a.Ie:"html5"==b?a.Je:a.Ke).call(a)}}
function Fh(a){var b=!0,c=Eh(a);c&&a.f&&(a=a.f,b=D(c,"version")==a.assets.js);return b&&!!r("yt.player.Application.create")}
g.Je=function(){if(!this.qa){var a=Fh(this);a&&"html5"==Gh(this)?(this.A="html5",this.C||this.Va()):(Hh(this),this.A="html5",a&&this.P?(this.l.appendChild(this.P),this.Va()):(this.f.loaded=!0,this.S=w(function(){var a=this.l,c=this.f.clone();r("yt.player.Application.create")(a,c);this.Va()},this),this.qa=!0,a?this.S():(Dc(this.f.assets.js,this.S),Wf(this.f.assets.css))))}};
g.Ie=function(){var a=this.f.clone();if(!this.B){var b=Eh(this);b&&(this.B=document.createElement("span"),this.B.tabIndex=0,jg(this.ta,this.B,"focus",this.Ec),this.J=document.createElement("span"),this.J.tabIndex=0,jg(this.ta,this.J,"focus",this.Ec),b.parentNode&&b.parentNode.insertBefore(this.B,b),b.parentNode&&b.parentNode.insertBefore(this.J,b.nextSibling))}a.attrs.width=a.attrs.width||"100%";a.attrs.height=a.attrs.height||"100%";if("flash"==Gh(this))this.A="flash",this.C||Sf(a,!1,w(this.Va,this));
else{Hh(this);this.A="flash";this.f.loaded=!0;b=this.l;b=v(b)?we(b):b;a=kf(a);if(window!=window.top){var c=null;document.referrer&&(c=document.referrer.substring(0,128));a.args.framer=c}c=Nf.getInstance();Of(c,a.minVersion)?(c=Tf(a,c),Rf(b,c,a)):Vf(b,a,c);this.Va()}};
g.Ec=function(){Eh(this).focus()};
function Eh(a){var b=ve(a.h);!b&&a.o&&a.o.querySelector&&(b=a.o.querySelector("#"+a.h));return b}
g.Va=function(){if(!this.isDisposed()){var a=Eh(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b)if(this.qa=!1,a.isNotServable&&a.isNotServable(this.f.args.video_id))Dh(this);else{wh(this);this.C=!0;a=Eh(this);a.addEventListener&&(this.T=Ih(this,a,"addEventListener"));a.removeEventListener&&(this.va=Ih(this,a,"removeEventListener"));for(var b=a.getApiInterface(),b=b.concat(a.getInternalApiInterface()),c=0;c<b.length;c++){var d=b[c];this.api[d]||(this.api[d]=Ih(this,
a,d))}for(var e in this.j)this.T(e,this.j[e]);Ah(this);this.Ba&&this.Ba(this.api);this.ha.F("onReady",this.api)}else this.nc=I(w(this.Va,this),50)}};
function Ih(a,b,c){var d=b[c];return function(){try{return a.Nb=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.Nb=e,oc(e,"WARNING"))}}}
function wh(a){a.C=!1;if(a.va)for(var b in a.j)a.va(b,a.j[b]);for(var c in a.ua)J(parseInt(c,10));a.ua={};a.T=null;a.va=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=w(a.xa,a);a.api.removeEventListener=w(a.ve,a);a.api.destroy=w(a.dispose,a);a.api.getLastError=w(a.Dd,a);a.api.getPlayerType=w(a.Ed,a);a.api.getCurrentVideoConfig=w(a.Cd,a);a.api.loadNewVideoConfig=w(a.jc,a);a.api.isReady=w(a.Ve,a)}
g.Ve=function(){return this.C};
g.xa=function(a,b){if(!this.isDisposed()){var c=Bh(this,b);if(c){if(!B(this.qd,a)&&!this.j[a]){var d=Jh(this,a);this.T&&this.T(a,d)}this.ha.subscribe(a,c);"onReady"==a&&this.C&&I(pa(c,this.api),0)}}};
g.ve=function(a,b){if(!this.isDisposed()){var c=Bh(this,b);c&&this.ha.unsubscribe(a,c)}};
function Bh(a,b){var c=b;if("string"==typeof b){if(a.Pa[b])return a.Pa[b];c=function(){var a=r(b);a&&a.apply(m,arguments)};
a.Pa[b]=c}return c?c:null}
function Jh(a,b){var c="ytPlayer"+b+a.Z;a.j[b]=c;m[c]=function(c){var e=I(function(){if(!a.isDisposed()){a.ha.F(b,c);var f=a.ua,h=String(e);h in f&&delete f[h]}},0);
pb(a.ua,String(e))};
return c}
g.sd=function(a){a=a?Ee:De;for(var b=a(document.activeElement);b&&(1!=b.nodeType||b==this.B||b==this.J||(b.focus(),b!=document.activeElement));)b=a(b)};
g.oc=function(a){K("a11y-announce",a)};
g.Zd=function(a){Dh(this,a)};
g.$d=function(a){K("WATCH_LATER_VIDEO_ADDED",a)};
g.ae=function(a){K("WATCH_LATER_VIDEO_REMOVED",a)};
g.Wd=function(){this.Lb||(Cf?(this.$a=Be(document),jg(this.L,window,"scroll",this.qe),jg(this.L,this.l,"touchmove",this.ke)):(jg(this.L,this.l,"mousewheel",this.Hc),jg(this.L,this.l,"wheel",this.Hc)),this.Lb=!0)};
g.Xd=function(){kg(this.L);this.Lb=!1};
g.Hc=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
g.qe=function(){window.scrollTo(this.$a.x,this.$a.y)};
g.ke=function(a){a.preventDefault()};
g.Ke=function(){Hh(this);this.A="unsupported";var a='Adobe Flash Player or an HTML5 supported browser is required for video playback. <br> <a href="http://get.adobe.com/flashplayer/">Get the latest Flash Player</a> <br> <a href="/html5">Learn more about upgrading to an HTML5 browser</a>',b=navigator.userAgent.match(/Version\/(\d).*Safari/);b&&5<=parseInt(b[1],10)&&(a='Adobe Flash Player or QuickTime is required for video playback. <br> <a href="http://get.adobe.com/flashplayer/"> Get the latest Flash Player</a> <br> <a href="http://www.apple.com/quicktime/download/">Get the latest version of QuickTime</a>');
b=this.f.f.player_fallback||a;a=ve("player-unavailable");if(ve("unavailable-submessage")&&a){ve("unavailable-submessage").innerHTML=b;var b=a||document,c=null;b.getElementsByClassName?c=b.getElementsByClassName("icon")[0]:b.querySelectorAll&&b.querySelector?c=b.querySelector(".icon"):c=ye("icon",a)[0];if(c=b=c||null)c=b?b.dataset?Nb("icon")in b.dataset:b.hasAttribute?!!b.hasAttribute("data-icon"):!!b.getAttribute("data-icon"):!1;c&&(b.src=D(b,"icon"));a.style.display="";me(ve("player"),"off-screen-trigger")}};
g.Ed=function(){return this.A||Gh(this)};
g.Dd=function(){return this.Nb};
function Gh(a){return(a=Eh(a))?"div"==a.tagName.toLowerCase()?"html5":"flash":null}
function Hh(a){kh("dcp");a.cancel();wh(a);a.A=null;a.f&&(a.f.loaded=!1);var b=Eh(a);"html5"==Gh(a)?a.P=b:b&&b.destroy&&b.destroy();Ce(a.l);kg(a.ta);a.B=null;a.J=null}
g.cancel=function(){this.S&&Kc(this.f.assets.js,this.S);J(this.nc);this.qa=!1};
g.G=function(){Hh(this);if(this.P&&this.f)try{this.P.destroy()}catch(b){oc(b)}this.Pa=null;for(var a in this.j)m[this.j[a]]=null;this.Mb=this.f=this.api=null;delete this.l;delete this.o;vh.I.G.call(this)};var Kh={},Lh="player_uid_"+(1E9*Math.random()>>>0);function Mh(a,b){a=v(a)?we(a):a;b=kf(b);var c=Lh+"_"+ka(a),d=Kh[c];if(d)return d.jc(b),d.api;d=new vh(a,c);Kh[c]=d;K("player-added",d.api);fc(d,pa(Nh,d));I(function(){d.jc(b)},0);
return d.api}
function Nh(a){Kh[a.Z]=null}
function Oh(a){a=ve(a);if(!a)return null;var b=Lh+"_"+ka(a),c=Kh[b];c||(c=new vh(a,b),Kh[b]=c);return c.api}
;var Ph=r("yt.abuse.botguardInitialized")||Nc;q("yt.abuse.botguardInitialized",Ph,void 0);var Qh=r("yt.abuse.invokeBotguard")||Oc;q("yt.abuse.invokeBotguard",Qh,void 0);var Rh=r("yt.abuse.dclkstatus.checkDclkStatus")||je;q("yt.abuse.dclkstatus.checkDclkStatus",Rh,void 0);var Sh=r("yt.player.exports.navigate")||ef;q("yt.player.exports.navigate",Sh,void 0);var Th=r("yt.player.embed")||Mh;q("yt.player.embed",Th,void 0);var Uh=r("yt.player.getPlayerByElement")||Oh;q("yt.player.getPlayerByElement",Uh,void 0);
var Vh=r("yt.util.activity.init")||We;q("yt.util.activity.init",Vh,void 0);var Wh=r("yt.util.activity.getTimeSinceActive")||Ye;q("yt.util.activity.getTimeSinceActive",Wh,void 0);var Xh=r("yt.util.activity.setTimestamp")||Xe;q("yt.util.activity.setTimestamp",Xh,void 0);function Yh(a){P.call(this,1,arguments);this.f=a}
y(Yh,P);function Zh(a){P.call(this,1,arguments);this.f=a}
y(Zh,P);function $h(a,b){P.call(this,1,arguments);this.f=a;this.h=b}
y($h,P);function ai(a,b,c,d,e){P.call(this,2,arguments);this.h=a;this.f=b;this.l=c||null;this.j=d||null;this.source=e||null}
y(ai,P);function bi(a,b,c){P.call(this,1,arguments);this.f=a;this.subscriptionId=b}
y(bi,P);function ci(a,b,c,d,e,f,h){P.call(this,1,arguments);this.h=a;this.subscriptionId=b;this.f=c;this.o=d||null;this.l=e||null;this.j=f||null;this.source=h||null}
y(ci,P);
var di=new Q("subscription-batch-subscribe",Yh),ei=new Q("subscription-batch-unsubscribe",Yh),fi=new Q("subscription-pref-email",$h),gi=new Q("subscription-subscribe",ai),hi=new Q("subscription-subscribe-loading",Zh),ii=new Q("subscription-subscribe-loaded",Zh),ji=new Q("subscription-subscribe-success",bi),ki=new Q("subscription-subscribe-external",ai),li=new Q("subscription-unsubscribe",ci),mi=new Q("subscription-unsubscirbe-loading",Zh),ni=new Q("subscription-unsubscribe-loaded",Zh),oi=new Q("subscription-unsubscribe-success",
Zh),pi=new Q("subscription-external-unsubscribe",ci),qi=new Q("subscription-enable-ypc",Zh),ri=new Q("subscription-disable-ypc",Zh);function si(a,b){var c=document.location.protocol+"//"+document.domain+"/post_login";b&&(c=Od(c,"mode",b));c=Od("/signin?context=popup","next",c);c=Od(c,"feature","sub_button");if(c=window.open(c,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var d=xc("LOGGED_IN",function(b){zc(H("LOGGED_IN_PUBSUB_KEY",void 0));kc("LOGGED_IN",!0);a(b)});
kc("LOGGED_IN_PUBSUB_KEY",d);c.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
q("yt.pubsub.publish",K,void 0);function ti(){var a=H("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!H("SESSION_INDEX")&&!H("LOGGED_IN"))}
;var ui={},vi="ontouchstart"in document;function wi(a,b,c){var d;switch(a){case "mouseover":case "mouseout":d=3;break;case "mouseenter":case "mouseleave":d=9}return Me(c,function(a){return le(a,b)},!0,d)}
function xi(a){var b="mouseover"==a.type&&"mouseenter"in ui||"mouseout"==a.type&&"mouseleave"in ui,c=a.type in ui||b;if("HTML"!=a.target.tagName&&c){if(b){var b="mouseover"==a.type?"mouseenter":"mouseleave",c=ui[b],d;for(d in c.ga){var e=wi(b,d,a.target);e&&!Me(a.relatedTarget,function(a){return a==e},!0)&&c.F(d,e,b,a)}}if(b=ui[a.type])for(d in b.ga)(e=wi(a.type,d,a.target))&&b.F(d,e,a.type,a)}}
N(document,"blur",xi,!0);N(document,"change",xi,!0);N(document,"click",xi);N(document,"focus",xi,!0);N(document,"mouseover",xi);N(document,"mouseout",xi);N(document,"mousedown",xi);N(document,"keydown",xi);N(document,"keyup",xi);N(document,"keypress",xi);N(document,"cut",xi);N(document,"paste",xi);vi&&(N(document,"touchstart",xi),N(document,"touchend",xi),N(document,"touchcancel",xi));function yi(a){this.o=a;this.j={};this.Ab=[];this.l=[]}
function zi(a,b){return"yt-uix"+(a.o?"-"+a.o:"")+(b?"-"+b:"")}
yi.prototype.unregister=function(){zc(this.Ab);this.Ab.length=0;Zg(this.l);this.l.length=0};
yi.prototype.init=t;yi.prototype.dispose=t;function Ai(a,b,c){a.l.push(Yg(b,c,a))}
function Bi(a,b,c){var d=zi(a,void 0),e=w(c,a);b in ui||(ui[b]=new G);ui[b].subscribe(d,e);a.j[c]=e}
function Ci(a,b,c){if(b in ui){var d=ui[b];d.unsubscribe(zi(a,void 0),a.j[c]);0>=d.U()&&(d.dispose(),delete ui[b])}delete a.j[c]}
function Di(a,b){Mb(a,"tooltip-text",b)}
;function Ei(){yi.call(this,"tooltip");this.f=0;this.h={}}
y(Ei,yi);ba(Ei);g=Ei.prototype;g.register=function(){Bi(this,"mouseover",this.wb);Bi(this,"mouseout",this.Na);Bi(this,"focus",this.xc);Bi(this,"blur",this.qc);Bi(this,"click",this.Na);Bi(this,"touchstart",this.Xc);Bi(this,"touchend",this.Fb);Bi(this,"touchcancel",this.Fb)};
g.unregister=function(){Ci(this,"mouseover",this.wb);Ci(this,"mouseout",this.Na);Ci(this,"focus",this.xc);Ci(this,"blur",this.qc);Ci(this,"click",this.Na);Ci(this,"touchstart",this.Xc);Ci(this,"touchend",this.Fb);Ci(this,"touchcancel",this.Fb);this.dispose();Ei.I.unregister.call(this)};
g.dispose=function(){for(var a in this.h)this.Na(this.h[a]);this.h={}};
g.wb=function(a){if(!(this.f&&1E3>x()-this.f)){var b=parseInt(D(a,"tooltip-hide-timer"),10);b&&(Ob(a,"tooltip-hide-timer"),J(b));var b=w(function(){Fi(this,a);Ob(a,"tooltip-show-timer")},this),c=parseInt(D(a,"tooltip-show-delay"),10)||0,b=I(b,c);
Mb(a,"tooltip-show-timer",b.toString());a.title&&(Di(a,Gi(a)),a.title="");b=ka(a).toString();this.h[b]=a}};
g.Na=function(a){var b=parseInt(D(a,"tooltip-show-timer"),10);b&&(J(b),Ob(a,"tooltip-show-timer"));b=w(function(){if(a){var b=ve(Hi(this,a));b&&(Ii(b),b&&b.parentNode&&b.parentNode.removeChild(b),Ob(a,"content-id"));(b=ve(Hi(this,a,"arialabel")))&&b.parentNode&&b.parentNode.removeChild(b)}Ob(a,"tooltip-hide-timer")},this);
b=I(b,50);Mb(a,"tooltip-hide-timer",b.toString());if(b=D(a,"tooltip-text"))a.title=b;b=ka(a).toString();delete this.h[b]};
g.xc=function(a){this.f=0;this.wb(a)};
g.qc=function(a){this.f=0;this.Na(a)};
g.Xc=function(a,b,c){c.changedTouches&&(this.f=0,a=wi(b,zi(this),c.changedTouches[0].target),this.wb(a))};
g.Fb=function(a,b,c){c.changedTouches&&(this.f=x(),a=wi(b,zi(this),c.changedTouches[0].target),this.Na(a))};
function Ji(a,b){Di(a,b);var c=D(a,"content-id");(c=ve(c))&&Fe(c,b)}
function Gi(a){return D(a,"tooltip-text")||a.title}
function Fi(a,b){if(b){var c=Gi(b);if(c){var d=ve(Hi(a,b));if(!d){d=document.createElement("div");d.id=Hi(a,b);d.className=zi(a,"tip");var e=document.createElement("div");e.className=zi(a,"tip-body");var f=document.createElement("div");f.className=zi(a,"tip-arrow");var h=document.createElement("div");h.setAttribute("aria-hidden","true");h.className=zi(a,"tip-content");var k=Ki(a,b),l=Hi(a,b,"content");h.id=l;Mb(b,"content-id",l);e.appendChild(h);k&&d.appendChild(k);d.appendChild(e);d.appendChild(f);
var l=Ie(b),n=Hi(a,b,"arialabel"),f=document.createElement("div");me(f,zi(a,"arialabel"));f.id=n;"rtl"==document.body.getAttribute("dir")?Fe(f,c+" "+l):Fe(f,l+" "+c);b.setAttribute("aria-labelledby",n);l=Qe()||document.body;l.appendChild(f);l.appendChild(d);Ji(b,c);(c=parseInt(D(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",me(h,zi(a,"normal-wrap")));h=le(b,zi(a,"reverse"));Li(a,b,d,e,k,h)||Li(a,b,d,e,k,!h);var u=zi(a,"tip-visible");I(function(){me(d,u)},0)}}}}
function Li(a,b,c,d,e,f){oe(c,zi(a,"tip-reverse"),f);var h=0;f&&(h=1);a=sf(b);f=new pe((a.width-10)/2,f?a.height:0);var k=ue(b),l=new pe(0,0),n;n=k?ue(k):document;n=!L||vd(9)||Ae(se(n).f)?n.documentElement:n.body;b!=n&&(n=qf(b),k=Be(se(k).f),l.x=n.left+k.x,l.y=n.top+k.y);f=new pe(l.x+f.x,l.y+f.y);f=f.clone();l=(h&8&&"rtl"==pf(c,"direction")?h^4:h)&-9;h=sf(c);k=h.clone();n=f.clone();k=k.clone();0!=l&&(l&4?n.x-=k.width+0:l&2&&(n.x-=k.width/2),l&1&&(n.y-=k.height+0));f=new mf(0,0,0,0);f.left=n.x;f.top=
n.y;f.width=k.width;f.height=k.height;k=new pe(f.left,f.top);k instanceof pe?(l=k.x,k=k.y):(l=k,k=void 0);c.style.left=rf(l,!1);c.style.top=rf(k,!1);k=new qe(f.width,f.height);if(!(h==k||h&&k&&h.width==k.width&&h.height==k.height))if(h=k,f=ue(c),l=Ae(se(f).f),!L||ud("10")||l&&ud("8"))f=c.style,jd?f.MozBoxSizing="border-box":kd?f.WebkitBoxSizing="border-box":f.boxSizing="border-box",f.width=Math.max(h.width,0)+"px",f.height=Math.max(h.height,0)+"px";else if(f=c.style,l){if(L){l=vf(c,"paddingLeft");
k=vf(c,"paddingRight");n=vf(c,"paddingTop");var u=vf(c,"paddingBottom"),l=new lf(n,k,u,l)}else l=of(c,"paddingLeft"),k=of(c,"paddingRight"),n=of(c,"paddingTop"),u=of(c,"paddingBottom"),l=new lf(parseFloat(n),parseFloat(k),parseFloat(u),parseFloat(l));if(L&&!vd(9)){k=xf(c,"borderLeft");n=xf(c,"borderRight");var u=xf(c,"borderTop"),X=xf(c,"borderBottom"),k=new lf(u,n,X,k)}else k=of(c,"borderLeftWidth"),n=of(c,"borderRightWidth"),u=of(c,"borderTopWidth"),X=of(c,"borderBottomWidth"),k=new lf(parseFloat(u),
parseFloat(n),parseFloat(X),parseFloat(k));f.pixelWidth=h.width-k.left-l.left-l.right-k.right;f.pixelHeight=h.height-k.top-l.top-l.bottom-k.bottom}else f.pixelWidth=h.width,f.pixelHeight=h.height;f=ze(window);1==c.nodeType?(c=qf(c),k=new pe(c.left,c.top)):(c=c.changedTouches?c.changedTouches[0]:c,k=new pe(c.clientX,c.clientY));c=sf(d);n=Math.floor(c.width/2);h=!!(f.height<k.y+a.height);a=!!(k.y<a.height);l=!!(k.x<n);f=!!(f.width<k.x+n);k=(c.width+3)/-2- -5;b=D(b,"force-tooltip-direction");if("left"==
b||l)k=-5;else if("right"==b||f)k=20-c.width-3;b=Math.floor(k)+"px";d.style.left=b;e&&(e.style.left=b,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(h||a)}
function Hi(a,b,c){a=zi(a);var d=b.__yt_uid_key;d||(d=Oe(),b.__yt_uid_key=d);b=a+d;c&&(b+="-"+c);return b}
function Ki(a,b){var c=null;md&&le(b,zi(a,"masked"))&&((c=ve("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),Lf(c)):(c=document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=zi(a,"tip-mask")));return c}
function Ii(a){var b=ve("yt-uix-tooltip-shared-mask"),c=b&&Me(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),Mf(b),document.body.appendChild(b))}
;function Mi(){yi.call(this,"subscription-button")}
y(Mi,yi);ba(Mi);Mi.prototype.register=function(){Bi(this,"click",this.Qb);Ai(this,hi,this.Gc);Ai(this,ii,this.Fc);Ai(this,ji,this.ie);Ai(this,mi,this.Gc);Ai(this,ni,this.Fc);Ai(this,oi,this.oe);Ai(this,qi,this.Vd);Ai(this,ri,this.Ud)};
Mi.prototype.unregister=function(){Ci(this,"click",this.Qb);Mi.I.unregister.call(this)};
var Le={kc:"hover-enabled",gd:"yt-uix-button-subscribe",hd:"yt-uix-button-subscribed",Xe:"ypc-enabled",jd:"yt-uix-button-subscription-container",kd:"yt-subscription-button-disabled-mask-container"},Ni={Ye:"channel-external-id",ld:"subscriber-count-show-when-subscribed",md:"subscriber-count-tooltip",nd:"subscriber-count-title",Ze:"href",lc:"is-subscribed",af:"parent-url",cf:"clicktracking",od:"style-type",mc:"subscription-id",ff:"target",pd:"ypc-enabled"};g=Mi.prototype;
g.Qb=function(a){var b=D(a,"href"),c=ti();if(b)a=D(a,"target")||"_self",window.open(b,a);else if(c){var b=D(a,"channel-external-id"),c=D(a,"clicktracking"),d;if(D(a,"ypc-enabled")){d=D(a,"ypc-item-type");var e=D(a,"ypc-item-id");d={itemType:d,itemId:e,subscriptionElement:a}}else d=null;e=D(a,"parent-url");if(D(a,"is-subscribed")){var f=D(a,"subscription-id");R(li,new ci(b,f,d,a,c,e))}else R(gi,new ai(b,d,c,e))}else Oi(this,a)};
g.Gc=function(a){this.Qa(a.f,this.Uc,!0)};
g.Fc=function(a){this.Qa(a.f,this.Uc,!1)};
g.ie=function(a){this.Qa(a.f,this.Vc,!0,a.subscriptionId)};
g.oe=function(a){this.Qa(a.f,this.Vc,!1)};
g.Vd=function(a){this.Qa(a.f,this.wd)};
g.Ud=function(a){this.Qa(a.f,this.vd)};
g.Vc=function(a,b,c){b?(Mb(a,Ni.lc,"true"),c&&Mb(a,Ni.mc,c)):(Ob(a,Ni.lc),Ob(a,Ni.mc));Pi(a)};
g.Uc=function(a,b){var c;c=Ke(a);oe(c,Le.kd,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function Pi(a){var b=D(a,Ni.od),c=!!D(a,"is-subscribed"),b="-"+b,d=Le.hd+b;oe(a,Le.gd+b,!c);oe(a,d,c);D(a,Ni.md)&&!D(a,Ni.ld)&&(b=zi(Ei.getInstance()),oe(a,b,!c),a.title=c?"":D(a,Ni.nd));c?I(function(){me(a,Le.kc)},1E3):ne(a,Le.kc)}
g.wd=function(a){var b=!!D(a,"ypc-item-type"),c=!!D(a,"ypc-item-id");!D(a,"ypc-enabled")&&b&&c&&(me(a,"ypc-enabled"),Mb(a,Ni.pd,"true"))};
g.vd=function(a){D(a,"ypc-enabled")&&(ne(a,"ypc-enabled"),Ob(a,"ypc-enabled"))};
function Qi(a,b){var c=xe(zi(a));return La(c,function(a){return b==D(a,"channel-external-id")},a)}
g.rd=function(a,b,c){var d=Za(arguments,2);z(a,function(a){b.apply(this,Va(a,d))},this)};
g.Qa=function(a,b,c){var d=Qi(this,a),d=Va([d],Za(arguments,1));this.rd.apply(this,d)};
function Oi(a,b){var c=w(function(a){a.discoverable_subscriptions&&kc("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.Qb(b)},a);
si(c,"subscribe")}
;var Ri=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};q("yt.uix.widgets_",Ri,void 0);function Si(a,b){this.source=null;this.l=a||null;this.origin="*";this.B=window.document.location.protocol+"//"+window.document.location.hostname;this.o=b;this.j=this.f=this.h=this.sourceId=null;N(window,"message",w(this.A,this))}
Si.prototype.A=function(a){var b=this.o||H("POST_MESSAGE_ORIGIN",void 0)||this.B;if("*"!=b&&a.origin!=b)window.console&&window.console.warn("Untrusted origin: "+a.origin);else if(!this.l||a.source==this.l)if(this.source=a.source,this.origin="null"==a.origin?this.origin:a.origin,a=a.data,v(a)){try{a=yd(a)}catch(c){return}this.sourceId=a.id;switch(a.event){case "listening":this.f&&(this.f(),this.f=null);break;case "command":this.h&&(this.j&&!B(this.j,a.func)||this.h(a.func,a.args))}}};
Si.prototype.sendMessage=function(a){this.source&&(a.id=this.sourceId,a=M(a),this.source.postMessage(a,this.origin))};function Ti(){}
;function Ui(){}
y(Ui,Ti);Ui.prototype.U=function(){var a=0;Tc(this.wa(!0),function(){a++});
return a};
Ui.prototype.clear=function(){var a=Uc(this.wa(!0)),b=this;z(a,function(a){b.remove(a)})};function Vi(a){this.f=a}
y(Vi,Ui);g=Vi.prototype;g.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
g.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.get=function(a){a=this.f.getItem(a);if(!v(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.remove=function(a){this.f.removeItem(a)};
g.U=function(){return this.f.length};
g.wa=function(a){var b=0,c=this.f,d=new Rc;d.next=function(){if(b>=c.length)throw Qc;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!v(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.clear=function(){this.f.clear()};
g.key=function(a){return this.f.key(a)};function Wi(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
y(Wi,Vi);function Xi(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.f=a}
y(Xi,Vi);function Yi(a){this.f=a}
Yi.prototype.set=function(a,b){p(b)?this.f.set(a,M(b)):this.f.remove(a)};
Yi.prototype.get=function(a){var b;try{b=this.f.get(a)}catch(c){return}if(null!==b)try{return yd(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Yi.prototype.remove=function(a){this.f.remove(a)};function Zi(a){this.f=a}
y(Zi,Yi);function $i(a){this.data=a}
function aj(a){return!p(a)||a instanceof $i?a:new $i(a)}
Zi.prototype.set=function(a,b){Zi.I.set.call(this,a,aj(b))};
Zi.prototype.h=function(a){a=Zi.I.get.call(this,a);if(!p(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Zi.prototype.get=function(a){if(a=this.h(a)){if(a=a.data,!p(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function bj(a){this.f=a}
y(bj,Zi);function cj(a){var b=a.creation;a=a.expiration;return!!a&&a<x()||!!b&&b>x()}
bj.prototype.set=function(a,b,c){if(b=aj(b)){if(c){if(c<x()){bj.prototype.remove.call(this,a);return}b.expiration=c}b.creation=x()}bj.I.set.call(this,a,b)};
bj.prototype.h=function(a,b){var c=bj.I.h.call(this,a);if(c)if(!b&&cj(c))bj.prototype.remove.call(this,a);else return c};function dj(a){this.f=a}
y(dj,bj);function ej(a,b){var c=[];Tc(b,function(a){var b;try{b=dj.prototype.h.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}p(b)?cj(b)&&c.push(a):c.push(a)},a);
return c}
function fj(a,b){var c=ej(a,b);z(c,function(a){dj.prototype.remove.call(this,a)},a)}
function gj(){var a=hj;fj(a,a.f.wa(!0))}
;function T(a,b,c){var d=c&&0<c?c:0;c=d?x()+1E3*d:0;if((d=d?hj:ij)&&window.JSON){v(b)||(b=JSON.stringify(b,void 0));try{d.set(a,b,c)}catch(e){d.remove(a)}}}
function jj(a){if(!ij&&!hj||!window.JSON)return null;var b;try{b=ij.get(a)}catch(c){}if(!v(b))try{b=hj.get(a)}catch(c){}if(!v(b))return null;try{b=JSON.parse(b,void 0)}catch(c){}return b}
function kj(a){ij&&ij.remove(a);hj&&hj.remove(a)}
var hj,lj=new Wi;hj=lj.isAvailable()?new dj(lj):null;var ij,mj=new Xi;ij=mj.isAvailable()?new dj(mj):null;function nj(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function oj(a,b,c){v(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=a;c=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);b.videoId=c&&c[2]?c[2]:null;return pj(a)}
function pj(a,b,c){if(ia(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function qj(a,b,c,d){if(ia(a)&&!da(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}c={index:b,startSeconds:c,suggestedQuality:d};v(a)&&16==a.length?c.list="PL"+a:c.playlist=a;return c}
function rj(a){var b=a.video_id||a.videoId;if(v(b)){var c=jj("yt-player-two-stage-token")||{},d=jj("yt-player-two-stage-token")||{};p(void 0)?d[b]=void 0:delete d[b];T("yt-player-two-stage-token",d,300);(b=c[b])&&(a.two_stage_token=b)}}
;function sj(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);return a?50<=parseInt(a[1],10):!1}
var tj=document.currentScript&&-1!=document.currentScript.src.indexOf("?loadGamesSDK")?"/cast_game_sender.js":"/cast_sender.js",uj=["boadgeojelhgndaghljhdicfkmllpafd","dliochdbjfkdbacpmhlcpmleaejidimm","enhhojjnijigcajfphajepfemndkmdlo","fmfcbgogabcbclcofgocippekhfcmgfj"],vj=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","fjhoaacokmgbjemoflkofnenfaiekifl"],wj=sj()?vj.concat(uj):uj.concat(vj);function xj(a,b){var c=new XMLHttpRequest;c.onreadystatechange=function(){4==c.readyState&&200==c.status&&b(!0)};
c.onerror=function(){b(!1)};
try{c.open("GET",a,!0),c.send()}catch(d){b(!1)}}
function yj(a){if(a>=wj.length)zj();else{var b=wj[a],c="chrome-extension://"+b+tj;0<=uj.indexOf(b)?xj(c,function(d){d?(window.chrome.cast=window.chrome.cast||{},window.chrome.cast.extensionId=b,Aj(c,zj)):yj(a+1)}):Aj(c,function(){yj(a+1)})}}
function Aj(a,b){var c=document.createElement("script");c.onerror=b;c.src=a;(document.head||document.documentElement).appendChild(c)}
function zj(){var a=window.__onGCastApiAvailable;a&&"function"==typeof a&&a(!1,"No cast extension found")}
function Bj(){if(0<=window.navigator.userAgent.indexOf("CriOS")){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;if(a){a({command:"cast.sender.init"});return}}window.chrome?(a=window.navigator.userAgent,0<=a.indexOf("Android")&&0<=a.indexOf("Chrome/")&&window.navigator.presentation?(a=sj()?"50":"",Aj("//www.gstatic.com/eureka/clank"+a+tj,zj)):yj(0)):zj()}
;var Cj=x(),Dj=null,Ej=Array(50),Fj=-1,Gj=!1;function Hj(a){Ij();Dj.push(a);Jj(Dj)}
function Kj(a){var b=r("yt.mdx.remote.debug.handlers_");Ta(b||[],a)}
function Lj(a,b){Ij();var c=Dj,d=Mj(a,String(b));0==c.length?Nj(d):(Jj(c),z(c,function(a){a(d)}))}
function Ij(){Dj||(Dj=r("yt.mdx.remote.debug.handlers_")||[],q("yt.mdx.remote.debug.handlers_",Dj,void 0))}
function Nj(a){var b=(Fj+1)%50;Fj=b;Ej[b]=a;Gj||(Gj=49==b)}
function Jj(a){var b=Ej;if(b[0]){var c=Fj,d=Gj?c:-1;do{var d=(d+1)%50,e=b[d];z(a,function(a){a(e)})}while(d!=c);
Ej=Array(50);Fj=-1;Gj=!1}}
function Mj(a,b){var c=(x()-Cj)/1E3;c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")}
;function Oj(a){a=a||{};this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""}
function Pj(a,b){return!!b&&(a.id==b||a.uuid==b)}
function Qj(a,b){return a||b?!a!=!b?!1:a.id==b.id:!0}
function Rj(a,b){return a||b?!a!=!b?!1:a.id==b.id&&a.token==b.token&&a.name==b.name&&a.uuid==b.uuid:!0}
function Sj(a){return{name:a.name,screenId:a.id,loungeToken:a.token,dialId:a.uuid}}
function Tj(a){return new Oj(a)}
function Uj(a){return da(a)?A(a,Tj):[]}
function Vj(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"}
function Wj(a){return da(a)?"["+A(a,Vj).join(",")+"]":"null"}
;var Xj={We:"atp",ef:"ska",bf:"que",$e:"mus",df:"sus"};function Yj(a){this.l=this.j="";this.f="/api/lounge";this.h=!0;a=a||document.location.href;var b=Number(a.match(Gd)[4]||null)||null||"";b&&(this.l=":"+b);this.j=Hd(a)||"";a=vb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>Ha(a,"10.0")&&(this.h=!1))}
function Zj(a,b,c,d){var e=a.f;if(p(d)?d:a.h)e="https://"+a.j+a.l+a.f;return Pd(e+b,c||{})}
function ak(a,b,c,d,e){a={format:"JSON",method:"POST",context:a,timeout:5E3,withCredentials:!1,ca:pa(a.A,d,!0),onError:pa(a.o,e),kb:pa(a.B,e)};c&&(a.R=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return Zd(b,a)}
Yj.prototype.A=function(a,b,c,d){b?a(d):a({text:c.responseText})};
Yj.prototype.o=function(a,b){a(Error("Request error: "+b.status))};
Yj.prototype.B=function(a){a(Error("request timed out"))};function bk(a){this.f=this.name=this.id="";this.status="UNKNOWN";a&&(this.id=a.id||"",this.name=a.name||"",this.f=a.activityId||"",this.status=a.status||"UNKNOWN")}
function ck(a){return{id:a.id,name:a.name,activityId:a.f,status:a.status}}
bk.prototype.toString=function(){return"{id:"+this.id+",name:"+this.name+",activityId:"+this.f+",status:"+this.status+"}"};
function dk(a){a=a||[];return"["+A(a,function(a){return a?a.toString():"null"}).join(",")+"]"}
;function ek(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;return("x"==a?b:b&3|8).toString(16)})}
function fk(a,b){return Oa(a,function(a){return a.key==b})}
function gk(a){return A(a,function(a){return{key:a.id,name:a.name}})}
function hk(a){return A(a,function(a){return ck(a)})}
function ik(a){return A(a,function(a){return new bk(a)})}
function jk(a,b){return a||b?a&&b?a.id==b.id&&a.name==b.name:!1:!0}
function kk(a,b){return Oa(a,function(a){return a.id==b})}
function lk(a,b){return Oa(a,function(a){return Qj(a,b)})}
function mk(a,b){return Oa(a,function(a){return Pj(a,b)})}
;function U(){E.call(this);this.l=new G;fc(this,pa(F,this.l))}
y(U,E);U.prototype.subscribe=function(a,b,c){return this.isDisposed()?0:this.l.subscribe(a,b,c)};
U.prototype.unsubscribe=function(a,b,c){return this.isDisposed()?!1:this.l.unsubscribe(a,b,c)};
U.prototype.oa=function(a){return this.isDisposed()?!1:this.l.oa(a)};
U.prototype.F=function(a,b){return this.isDisposed()?!1:this.l.F.apply(this.l,arguments)};function nk(a){U.call(this);this.C=a;this.f=[]}
y(nk,U);nk.prototype.$=function(){return this.f};
nk.prototype.contains=function(a){return!!lk(this.f,a)};
nk.prototype.get=function(a){return a?mk(this.f,a):null};
function ok(a,b){var c=a.get(b.uuid)||a.get(b.id);if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.f.push(b);return!0}
function pk(a,b){var c=a.f.length!=b.length;a.f=La(a.f,function(a){return!!lk(b,a)});
for(var d=0,e=b.length;d<e;d++)c=ok(a,b[d])||c;return c}
function qk(a,b){var c=a.f.length;a.f=La(a.f,function(a){return!Qj(a,b)});
return a.f.length<c}
function rk(a,b){Lj(a.C,b)}
;function sk(a,b,c,d){U.call(this);this.C=a;this.B=b;this.o=c;this.A=d;this.j=0;this.f=null;this.h=NaN}
y(sk,U);var tk=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g=sk.prototype;g.stop=function(){this.f&&(this.f.abort(),this.f=null);isNaN(this.h)||(J(this.h),this.h=NaN)};
g.G=function(){this.stop();sk.I.G.call(this)};
g.Qc=function(){this.h=NaN;this.f=Zd(Zj(this.C,"/pairing/get_screen"),{method:"POST",R:{pairing_code:this.B},timeout:5E3,ca:w(this.Ne,this),onError:w(this.Me,this),kb:w(this.Oe,this)})};
g.Ne=function(a,b){this.f=null;var c=b.screen||{};c.dialId=this.o;c.name=this.A;this.F("pairingComplete",new Oj(c))};
g.Me=function(a){this.f=null;a.status&&404==a.status?this.j>=tk.length?this.F("pairingFailed",Error("DIAL polling timed out")):(a=tk[this.j],this.h=I(w(this.Qc,this),a),this.j++):this.F("pairingFailed",Error("Server error "+a.status))};
g.Oe=function(){this.f=null;this.F("pairingFailed",Error("Server not responding"))};function uk(a){this.app=this.name=this.id="";this.type="REMOTE_CONTROL";new dd;a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",new dd(La((a.capabilities||"").split(","),pa(fb,Xj))))}
uk.prototype.equals=function(a){return a?this.id==a.id:!1};var vk;function wk(){var a=xk(),b=yk();B(a,b);if(zk()){var c=a,d;d=0;for(var e=c.length,f;d<e;){var h=d+e>>1,k;k=bb(b,c[h]);0<k?d=h+1:(e=h,f=!k)}d=f?d:~d;0>d&&Ya(c,-(d+1),0,b)}a=Ak(a);if(0==a.length)try{cf.remove("remote_sid","/","youtube.com")}catch(l){}else try{df("remote_sid",a.join(","),-1)}catch(l){}}
function xk(){var a=jj("yt-remote-connected-devices")||[];a.sort(bb);return a}
function Ak(a){if(0==a.length)return[];var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return A(a,function(a,b){return 0==b?a:a.substring(c.length)})}
function Bk(a){T("yt-remote-connected-devices",a,86400)}
function yk(){if(Ck)return Ck;var a=jj("yt-remote-device-id");a||(a=ek(),T("yt-remote-device-id",a,31536E3));for(var b=xk(),c=1,d=a;B(b,d);)c++,d=a+"#"+c;return Ck=d}
function Dk(){return jj("yt-remote-session-browser-channel")}
function zk(){return jj("yt-remote-session-screen-id")}
function Ek(a){5<a.length&&(a=a.slice(a.length-5));var b=A(Fk(),function(a){return a.loungeToken}),c=A(a,function(a){return a.loungeToken});
Na(c,function(a){return!B(b,a)})&&Gk();
T("yt-remote-local-screens",a,31536E3)}
function Fk(){return jj("yt-remote-local-screens")||[]}
function Gk(){T("yt-remote-lounge-token-expiration",!0,86400)}
function Hk(){return!jj("yt-remote-lounge-token-expiration")}
function Ik(a){T("yt-remote-online-screens",a,60)}
function Jk(){return jj("yt-remote-online-screens")||[]}
function Kk(a){T("yt-remote-online-dial-devices",a,30)}
function Lk(){return jj("yt-remote-online-dial-devices")||[]}
function Mk(a,b){T("yt-remote-session-browser-channel",a);T("yt-remote-session-screen-id",b);var c=xk(),d=yk();B(c,d)||c.push(d);Bk(c);wk()}
function Nk(a){a||(kj("yt-remote-session-screen-id"),kj("yt-remote-session-video-id"));wk();a=xk();Ta(a,yk());Bk(a)}
function Ok(){if(!vk){var a;a=new Wi;(a=a.isAvailable()?a:null)&&(vk=new Yi(a))}return vk?!!vk.get("yt-remote-use-staging-server"):!1}
var Ck="";function Pk(a){nk.call(this,"LocalScreenService");this.j=a;this.h=NaN;Qk(this);rk(this,"Initializing with "+Wj(this.f))}
y(Pk,nk);g=Pk.prototype;g.Za=function(){Qk(this)&&this.F("screenChange");Hk()&&Rk(this);J(this.h);this.h=I(w(this.Za,this),1E4)};
g.Kb=function(a,b){Qk(this);ok(this,a);Sk(this,!1);this.F("screenChange");b(a);a.token||Rk(this)};
g.remove=function(a,b){var c=Qk(this);qk(this,a)&&(Sk(this,!1),c=!0);b(a);c&&this.F("screenChange")};
g.Hb=function(a,b,c,d){var e=Qk(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,Sk(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.F("screenChange")};
g.G=function(){J(this.h);Pk.I.G.call(this)};
function Rk(a){if(a.f.length){var b=A(a.f,function(a){return a.id}),c=Zj(a.j,"/pairing/get_lounge_token_batch");
ak(a.j,c,{screen_ids:b.join(",")},w(a.Hd,a),w(a.Gd,a))}}
g.Hd=function(a){Qk(this);var b=this.f.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}Sk(this,!b);b&&Lj(this.C,"Missed "+b+" lounge tokens.")};
g.Gd=function(a){Lj(this.C,"Requesting lounge tokens failed: "+a)};
function Qk(a){var b=Uj(Fk()),b=La(b,function(a){return!a.uuid});
return pk(a,b)}
function Sk(a,b){Ek(A(a.f,Sj));b&&Gk()}
;function Tk(a,b){U.call(this);this.A=b;for(var c=jj("yt-remote-online-screen-ids")||"",c=c?c.split(","):[],d={},e=this.A(),f=0,h=e.length;f<h;++f){var k=e[f].id;d[k]=B(c,k)}this.f=d;this.B=a;this.j=this.o=NaN;this.h=null;Uk("Initialized with "+M(this.f))}
y(Tk,U);g=Tk.prototype;g.isEmpty=function(){return ob(this.f)};
g.update=function(){Uk("Updating availability on schedule.");var a=this.A(),b=db(this.f,function(b,d){return b&&!!mk(a,d)},this);
Vk(this,b)};
function Wk(a,b,c){var d=Zj(a.B,"/pairing/get_screen_availability");ak(a.B,d,{lounge_token:b.token},w(function(a){a=a.screens||[];for(var d=0,h=a.length;d<h;++d)if(a[d].loungeToken==b.token){c("online"==a[d].status);return}c(!1)},a),w(function(){c(!1)},a))}
g.G=function(){J(this.j);this.j=NaN;this.h&&(this.h.abort(),this.h=null);Tk.I.G.call(this)};
function Vk(a,b){var c;a:if(eb(b)!=eb(a.f))c=!1;else{c=jb(b);for(var d=0,e=c.length;d<e;++d)if(!a.f[c[d]]){c=!1;break a}c=!0}c||(Uk("Updated online screens: "+M(a.f)),a.f=b,a.F("screenChange"));Xk(a)}
function Yk(a){isNaN(a.j)||J(a.j);a.j=I(w(a.ec,a),0<a.o&&a.o<x()?2E4:1E4)}
g.ec=function(){J(this.j);this.j=NaN;this.h&&this.h.abort();var a=Zk(this);if(eb(a)){var b=Zj(this.B,"/pairing/get_screen_availability"),c={lounge_token:jb(a).join(",")};this.h=ak(this.B,b,c,w(this.ge,this,a),w(this.fe,this))}else Vk(this,{}),Yk(this)};
g.ge=function(a,b){this.h=null;var c=jb(Zk(this));if($a(c,jb(a))){for(var c=b.screens||[],d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;Vk(this,d);Yk(this)}else this.N("Changing Screen set during request."),this.ec()};
g.fe=function(a){this.N("Screen availability failed: "+a);this.h=null;Yk(this)};
function Uk(a){Lj("OnlineScreenService",a)}
g.N=function(a){Lj("OnlineScreenService",a)};
function Zk(a){var b={};z(a.A(),function(a){a.token?b[a.token]=a.id:this.N("Requesting availability of screen w/o lounge token.")});
return b}
function Xk(a){var b=jb(db(a.f,function(a){return a}));
b.sort(bb);b.length?T("yt-remote-online-screen-ids",b.join(","),60):kj("yt-remote-online-screen-ids");a=La(a.A(),function(a){return!!this.f[a.id]},a);
Ik(A(a,Sj))}
;function V(a){nk.call(this,"ScreenService");this.B=a;this.h=this.j=null;this.o=[];this.A={};$k(this)}
y(V,nk);g=V.prototype;g.Za=function(){this.j.Za();var a=this.h,b;b=parseInt(jj("yt-remote-fast-check-period")||"0",10);b=x()-144E5<b?0:b;a.o=b;a.o?Yk(a):(a.o=x()+3E5,T("yt-remote-fast-check-period",a.o),a.ec());this.f.length&&(this.F("screenChange"),this.h.isEmpty()||this.F("onlineScreenChange"))};
g.Kb=function(a,b,c){this.j.Kb(a,b,c)};
g.remove=function(a,b,c){this.j.remove(a,b,c);this.h.update()};
g.Hb=function(a,b,c,d){this.j.contains(a)?this.j.Hb(a,b,c,d):(a="Updating name of unknown screen: "+a.name,Lj(this.C,a),d(Error(a)))};
g.$=function(a){return a?this.f:Va(this.f,La(this.o,function(a){return!this.contains(a)},this))};
g.$c=function(){return La(this.$(!0),function(a){return!!this.h.f[a.id]},this)};
function al(a,b,c,d,e,f){rk(a,"getAutomaticScreenByIds "+c+" / "+b);c||(c=a.A[b]);var h=a.$();if(h=(c?mk(h,c):null)||mk(h,b)){h.uuid=b;var k=bl(a,h);Wk(a.h,k,function(a){e(a?k:null)})}else c?cl(a,c,w(function(a){var f=bl(this,new Oj({name:d,
screenId:c,loungeToken:a,dialId:b||""}));Wk(this.h,f,function(a){e(a?f:null)})},a),f):e(null)}
g.ad=function(a,b,c,d,e){rk(this,"getDialScreenByPairingCode "+a+" / "+b);var f=new sk(this.B,a,b,c);f.subscribe("pairingComplete",w(function(a){F(f);d(bl(this,a))},this));
f.subscribe("pairingFailed",function(a){F(f);e(a)});
!f.f&&isNaN(f.h)&&f.Qc();return w(f.stop,f)};
function dl(a,b){for(var c=0,d=a.f.length;c<d;++c)if(a.f[c].name==b)return a.f[c];return null}
g.Ac=function(a,b){for(var c=2,d=b(a,c);dl(this,d);){c++;if(20<c)return a;d=b(a,c)}return d};
g.Qe=function(a,b,c,d){Zd(Zj(this.B,"/pairing/get_screen"),{method:"POST",R:{pairing_code:a},timeout:5E3,ca:w(function(a,d){var h=new Oj(d.screen||{});if(!h.name||dl(this,h.name))h.name=this.Ac(h.name,b);c(bl(this,h))},this),
onError:w(function(a){d(Error("pairing request failed: "+a.status))},this),
kb:w(function(){d(Error("pairing request timed out."))},this)})};
g.G=function(){F(this.j);F(this.h);V.I.G.call(this)};
function cl(a,b,c,d){rk(a,"requestLoungeToken_ for "+b);var e={R:{screen_ids:b},method:"POST",context:a,ca:function(a,e){var k=e&&e.screens||[];k[0]&&k[0].screenId==b?c(k[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
Zd(Zj(a.B,"/pairing/get_lounge_token_batch"),e)}
function el(a){a.f=a.j.$();var b=a.A,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.f.length;b<d;++b){var e=a.f[b];e.uuid=c[e.id]||""}rk(a,"Updated manual screens: "+Wj(a.f))}
g.Jd=function(){el(this);this.F("screenChange");this.h.update()};
function $k(a){fl(a);a.j=new Pk(a.B);a.j.subscribe("screenChange",w(a.Jd,a));el(a);a.o=Uj(jj("yt-remote-automatic-screen-cache")||[]);fl(a);rk(a,"Initializing automatic screens: "+Wj(a.o));a.h=new Tk(a.B,w(a.$,a,!0));a.h.subscribe("screenChange",w(function(){this.F("onlineScreenChange")},a))}
function bl(a,b){var c=a.get(b.id);c?(c.uuid=b.uuid,b=c):((c=mk(a.o,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.o.push(b),T("yt-remote-automatic-screen-cache",A(a.o,Sj)));fl(a);a.A[b.uuid]=b.id;T("yt-remote-device-id-map",a.A,31536E3);return b}
function fl(a){a.A=jj("yt-remote-device-id-map")||{}}
V.prototype.dispose=V.prototype.dispose;function gl(a,b,c){U.call(this);this.T=c;this.L=a;this.h=b;this.j=null}
y(gl,U);g=gl.prototype;g.yb=function(a){this.j=a;this.F("sessionScreen",this.j)};
g.aa=function(a){this.isDisposed()||(a&&hl(this,""+a),this.j=null,this.F("sessionScreen",null))};
function il(a,b){Lj(a.T,b)}
function hl(a,b){Lj(a.T,b)}
g.cd=function(){return null};
g.gc=function(a){var b=this.h;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,w(function(){il(this,"Updated receiver status for "+b.friendlyName+": "+a)},this),w(function(){hl(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.G=function(){this.gc("");gl.I.G.call(this)};function jl(a,b){gl.call(this,a,b,"CastSession");this.f=null;this.A=0;this.o=null;this.C=w(this.Re,this);this.B=w(this.re,this);this.A=I(w(function(){kl(this,null)},this),12E4)}
y(jl,gl);g=jl.prototype;g.fc=function(a){if(this.f){if(this.f==a)return;hl(this,"Overriding cast sesison with new session object");this.f.removeUpdateListener(this.C);this.f.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B)}this.f=a;this.f.addUpdateListener(this.C);this.f.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.B);this.o&&ll(this);ml(this,"getMdxSessionStatus")};
g.Ua=function(a){il(this,"launchWithParams: "+M(a));this.o=a;this.f&&ll(this)};
g.stop=function(){this.f?this.f.stop(w(function(){this.aa()},this),w(function(){this.aa(Error("Failed to stop receiver app."))},this)):this.aa(Error("Stopping cast device witout session."))};
g.gc=t;g.G=function(){il(this,"disposeInternal");J(this.A);this.A=0;this.f&&(this.f.removeUpdateListener(this.C),this.f.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B));this.f=null;jl.I.G.call(this)};
function ll(a){var b=a.o.videoId||a.o.videoIds[a.o.index];b&&ml(a,"flingVideo",{videoId:b,currentTime:a.o.currentTime||0});a.o=null}
function ml(a,b,c){il(a,"sendYoutubeMessage_: "+b+" "+M(c));var d={};d.type=b;c&&(d.data=c);a.f?a.f.sendMessage("urn:x-cast:com.google.youtube.mdx",d,t,w(function(){hl(this,"Failed to send message: "+b+".")},a)):hl(a,"Sending yt message without session: "+M(d))}
g.re=function(a,b){if(!this.isDisposed())if(b){var c=zd(b);if(c){var d=""+c.type,c=c.data||{};il(this,"onYoutubeMessage_: "+d+" "+M(c));switch(d){case "mdxSessionStatus":kl(this,c.screenId);break;default:hl(this,"Unknown youtube message: "+d)}}else hl(this,"Unable to parse message.")}else hl(this,"No data in message.")};
function kl(a,b){J(a.A);if(b){if(il(a,"onConnectedScreenId_: Received screenId: "+b),!a.j||a.j.id!=b){var c=w(a.yb,a),d=w(a.aa,a);a.zc(b,c,d,5)}}else a.aa(Error("Waiting for session status timed out."))}
g.zc=function(a,b,c,d){al(this.L,this.h.label,a,this.h.friendlyName,w(function(e){e?b(e):0<=d?(hl(this,"Screen "+a+" appears to be offline. "+d+" retries left."),I(w(this.zc,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.cd=function(){return this.f};
g.Re=function(a){this.isDisposed()||a||(hl(this,"Cast session died."),this.aa())};function nl(a,b){gl.call(this,a,b,"DialSession");this.A=this.J=null;this.P="";this.o=null;this.C=t;this.B=NaN;this.S=w(this.Ue,this);this.f=t}
y(nl,gl);g=nl.prototype;g.fc=function(a){this.A=a;this.A.addUpdateListener(this.S)};
g.Ua=function(a){this.o=a;this.C()};
g.stop=function(){this.f();this.f=t;J(this.B);this.A?this.A.stop(w(this.aa,this,null),w(this.aa,this,"Failed to stop DIAL device.")):this.aa()};
g.G=function(){this.f();this.f=t;J(this.B);this.A&&this.A.removeUpdateListener(this.S);this.A=null;nl.I.G.call(this)};
function ol(a){a.f=a.L.ad(a.P,a.h.label,a.h.friendlyName,w(function(a){this.f=t;this.yb(a)},a),w(function(a){this.f=t;
this.aa(a)},a))}
g.Ue=function(a){this.isDisposed()||a||(hl(this,"DIAL session died."),this.f(),this.f=t,this.aa())};
function pl(a){var b={};b.pairingCode=a.P;if(a.o){var c=a.o.index||0,d=a.o.currentTime||0;b.v=a.o.videoId||a.o.videoIds[c];b.t=d}Ok()&&(b.env_useStageMdx=1);return Nd(b)}
g.ac=function(a){this.P=ek();if(this.o){var b=new chrome.cast.DialLaunchResponse(!0,pl(this));a(b);ol(this)}else this.C=w(function(){J(this.B);this.C=t;this.B=NaN;var b=new chrome.cast.DialLaunchResponse(!0,pl(this));a(b);ol(this)},this),this.B=I(w(function(){this.C()},this),100)};
g.Kd=function(a,b){al(this.L,this.J.receiver.label,a,this.h.friendlyName,w(function(a){a&&a.token?(this.yb(a),b(new chrome.cast.DialLaunchResponse(!1))):this.ac(b)},this),w(function(a){hl(this,"Failed to get DIAL screen: "+a);
this.ac(b)},this))};function ql(a,b){gl.call(this,a,b,"ManualSession");this.f=I(w(this.Ua,this,null),150)}
y(ql,gl);ql.prototype.stop=function(){this.aa()};
ql.prototype.fc=t;ql.prototype.Ua=function(){J(this.f);this.f=NaN;var a=mk(this.L.$(),this.h.label);a?this.yb(a):this.aa(Error("No such screen"))};
ql.prototype.G=function(){J(this.f);this.f=NaN;ql.I.G.call(this)};function rl(a){U.call(this);this.h=a;this.f=null;this.A=!1;this.j=[];this.o=w(this.de,this)}
y(rl,U);g=rl.prototype;
g.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest("233637DE");c.dialRequest=new chrome.cast.DialRequest("YouTube");var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION,c=new chrome.cast.ApiConfig(c,w(this.Kc,this),w(this.ee,this),d,e);c.customDialLaunchCallback=w(this.Td,this);chrome.cast.initialize(c,w(function(){this.isDisposed()||(chrome.cast.addReceiverActionListener(this.o),
Hj(sl),this.h.subscribe("onlineScreenChange",w(this.bd,this)),this.j=tl(this),chrome.cast.setCustomReceivers(this.j,t,w(function(a){this.N("Failed to set initial custom receivers: "+M(a))},this)),this.F("yt-remote-cast2-availability-change",ul(this)),b(!0))},this),w(function(a){this.N("Failed to initialize API: "+M(a));
b(!1)},this))};
g.De=function(a,b){vl("Setting connected screen ID: "+a+" -> "+b);if(this.f){var c=this.f.j;if(!a||c&&c.id!=a)vl("Unsetting old screen status: "+this.f.h.friendlyName),F(this.f),this.f=null}if(a&&b){if(!this.f){c=mk(this.h.$(),a);if(!c){vl("setConnectedScreenStatus: Unknown screen.");return}var d=wl(this,c);d||(vl("setConnectedScreenStatus: Connected receiver not custom..."),d=new chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM,this.j.push(d),chrome.cast.setCustomReceivers(this.j,
t,w(function(a){this.N("Failed to set initial custom receivers: "+M(a))},this)));
vl("setConnectedScreenStatus: new active receiver: "+d.friendlyName);xl(this,new ql(this.h,d),!0)}this.f.gc(b)}else vl("setConnectedScreenStatus: no screen.")};
function wl(a,b){return b?Oa(a.j,function(a){return Pj(b,a.label)},a):null}
g.Ee=function(a){this.isDisposed()?this.N("Setting connection data on disposed cast v2"):this.f?this.f.Ua(a):this.N("Setting connection data without a session")};
g.Te=function(){this.isDisposed()?this.N("Stopping session on disposed cast v2"):this.f?(this.f.stop(),F(this.f),this.f=null):vl("Stopping non-existing session")};
g.requestSession=function(){chrome.cast.requestSession(w(this.Kc,this),w(this.he,this))};
g.G=function(){this.h.unsubscribe("onlineScreenChange",w(this.bd,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.o);Kj(sl);F(this.f);rl.I.G.call(this)};
function vl(a){Lj("Controller",a)}
g.N=function(a){Lj("Controller",a)};
function sl(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)}
function ul(a){return a.A||!!a.j.length||!!a.f}
function xl(a,b,c){F(a.f);(a.f=b)?(c?a.F("yt-remote-cast2-receiver-resumed",b.h):a.F("yt-remote-cast2-receiver-selected",b.h),b.subscribe("sessionScreen",w(a.Lc,a,b)),b.j?a.F("yt-remote-cast2-session-change",b.j):c&&a.f.Ua(null)):a.F("yt-remote-cast2-session-change",null)}
g.Lc=function(a,b){this.f==a&&(b||xl(this,null),this.F("yt-remote-cast2-session-change",b))};
g.de=function(a,b){if(!this.isDisposed())if(a)switch(vl("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.f)if(this.f.h.label!=a.label)vl("onReceiverAction_: Stopping active receiver: "+this.f.h.friendlyName),this.f.stop();else{vl("onReceiverAction_: Casting to active receiver.");this.f.j&&this.F("yt-remote-cast2-session-change",this.f.j);break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:xl(this,new ql(this.h,a));break;case chrome.cast.ReceiverType.DIAL:xl(this,
new nl(this.h,a));break;case chrome.cast.ReceiverType.CAST:xl(this,new jl(this.h,a));break;default:this.N("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.f&&this.f.h.label==a.label?this.f.stop():this.N("Stopping receiver w/o session: "+a.friendlyName)}else this.N("onReceiverAction_ called without receiver.")};
g.Td=function(a){if(this.isDisposed())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.N("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.f?this.f.h:null;if(!c||c.label!=b.label)return this.N("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.f.j)return vl("Reselecting dial screen."),
this.F("yt-remote-cast2-session-change",this.f.j),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.N('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);xl(this,new nl(this.h,b))}b=this.f;b.J=a;return b.J.appState==chrome.cast.DialAppState.RUNNING?new Promise(w(b.Kd,b,(b.J.extraData||{}).screenId||null)):new Promise(w(b.ac,b))};
g.Kc=function(a){if(!this.isDisposed()){vl("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.f)if(b.receiverType==chrome.cast.ReceiverType.CAST)vl("Got resumed cast session before resumed mdx connection."),xl(this,new jl(this.h,b),!0);else{this.N("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.f.h,d=mk(this.h.$(),c.label);d&&Pj(d,b.label)&&c.receiverType!=chrome.cast.ReceiverType.CAST&&b.receiverType==
chrome.cast.ReceiverType.CAST&&(vl("onSessionEstablished_: manual to cast session change "+b.friendlyName),F(this.f),this.f=new jl(this.h,b),this.f.subscribe("sessionScreen",w(this.Lc,this,this.f)),this.f.Ua(null));this.f.fc(a)}}};
g.Se=function(){return this.f?this.f.cd():null};
g.he=function(a){this.isDisposed()||(this.N("Failed to estabilish a session: "+M(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&xl(this,null))};
g.ee=function(a){vl("Receiver availability updated: "+a);if(!this.isDisposed()){var b=ul(this);this.A=a==chrome.cast.ReceiverAvailability.AVAILABLE;ul(this)!=b&&this.F("yt-remote-cast2-availability-change",ul(this))}};
function tl(a){var b=a.h.$c(),c=a.f&&a.f.h;a=A(b,function(a){c&&Pj(a,c.label)&&(c=null);var b=a.uuid?a.uuid:a.id,f=wl(this,a);f?(f.label=b,f.friendlyName=a.name):(f=new chrome.cast.Receiver(b,a.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a}
g.bd=function(){if(!this.isDisposed()){var a=ul(this);this.j=tl(this);vl("Updating custom receivers: "+M(this.j));chrome.cast.setCustomReceivers(this.j,t,w(function(){this.N("Failed to set custom receivers.")},this));
var b=ul(this);b!=a&&this.F("yt-remote-cast2-availability-change",b)}};
rl.prototype.setLaunchParams=rl.prototype.Ee;rl.prototype.setConnectedScreenStatus=rl.prototype.De;rl.prototype.stopSession=rl.prototype.Te;rl.prototype.getCastSession=rl.prototype.Se;rl.prototype.requestSession=rl.prototype.requestSession;rl.prototype.init=rl.prototype.init;rl.prototype.dispose=rl.prototype.dispose;function yl(a,b,c){zl()?Bl(a)&&(Cl(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?Dl(b):(window.__onGCastApiAvailable=function(a,c){a?Dl(b):(El("Failed to load cast API: "+c),Fl(!1),Cl(!1),kj("yt-remote-cast-available"),kj("yt-remote-cast-receiver"),Gl(),b(!1))},c?Dc("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):Bj())):Al("Cannot initialize because not running Chrome")}
function Gl(){Al("dispose");var a=Hl();a&&a.dispose();Il=null;q("yt.mdx.remote.cloudview.instance_",null,void 0);Jl(!1);zc(Kl);Kl.length=0}
function Ll(){return!!jj("yt-remote-cast-installed")}
function Ml(){var a=jj("yt-remote-cast-receiver");return a?Ba(a.friendlyName):null}
function Nl(){Al("clearCurrentReciever");kj("yt-remote-cast-receiver")}
function Ol(){Ll()?Hl()?Pl()?(Al("Requesting cast selector."),Il.requestSession()):(Al("Wait for cast API to be ready to request the session."),Kl.push(xc("yt-remote-cast2-api-ready",Ol))):El("requestCastSelector: Cast is not initialized."):El("requestCastSelector: Cast API is not installed!")}
function Ql(a){Pl()?Hl().setLaunchParams(a):El("setLaunchParams called before ready.")}
function Rl(a,b){Pl()?Hl().setConnectedScreenStatus(a,b):El("setConnectedScreenStatus called before ready.")}
var Il=null;function zl(){var a;a=0<=vb.search(/\ (CrMo|Chrome|CriOS)\//);return Cf||a}
function Bl(a){var b=!1;if(!Il){var c=r("yt.mdx.remote.cloudview.instance_");c||(c=new rl(a),c.subscribe("yt-remote-cast2-availability-change",function(a){T("yt-remote-cast-available",a);K("yt-remote-cast2-availability-change",a)}),c.subscribe("yt-remote-cast2-receiver-selected",function(a){Al("onReceiverSelected: "+a.friendlyName);
T("yt-remote-cast-receiver",a);K("yt-remote-cast2-receiver-selected",a)}),c.subscribe("yt-remote-cast2-receiver-resumed",function(a){Al("onReceiverResumed: "+a.friendlyName);
T("yt-remote-cast-receiver",a)}),c.subscribe("yt-remote-cast2-session-change",function(a){Al("onSessionChange: "+Vj(a));
a||kj("yt-remote-cast-receiver");K("yt-remote-cast2-session-change",a)}),q("yt.mdx.remote.cloudview.instance_",c,void 0),b=!0);
Il=c}Al("cloudview.createSingleton_: "+b);return b}
function Hl(){Il||(Il=r("yt.mdx.remote.cloudview.instance_"));return Il}
function Dl(a){Fl(!0);Cl(!1);Il.init(!0,function(b){b?(Jl(!0),K("yt-remote-cast2-api-ready")):(El("Failed to initialize cast API."),Fl(!1),kj("yt-remote-cast-available"),kj("yt-remote-cast-receiver"),Gl());a(b)})}
function Al(a){Lj("cloudview",a)}
function El(a){Lj("cloudview",a)}
function Fl(a){Al("setCastInstalled_ "+a);T("yt-remote-cast-installed",a)}
function Pl(){return!!r("yt.mdx.remote.cloudview.apiReady_")}
function Jl(a){Al("setApiReady_ "+a);q("yt.mdx.remote.cloudview.apiReady_",a,void 0)}
function Cl(a){q("yt.mdx.remote.cloudview.initializing_",a,void 0)}
var Kl=[];function Sl(){if(!("cast"in window))return!1;var a=window.cast||{};return"ActivityStatus"in a&&"Api"in a&&"LaunchRequest"in a&&"Receiver"in a}
function Tl(a){Lj("CAST",a)}
function Ul(a){var b=Vl();b&&b.logMessage&&b.logMessage(a)}
function Wl(a){if(a.event.source==window&&a.event.data&&"CastApi"==a.event.data.source&&"Hello"==a.event.data.event)for(;Xl.length;)Xl.shift()()}
function Yl(){if(!r("yt.mdx.remote.castv2_")&&!Zl&&(0==Ra.length&&Xa(Ra,Lk()),Sl())){var a=Vl();a?(a.removeReceiverListener("YouTube",$l),a.addReceiverListener("YouTube",$l),Tl("API initialized in the other binary")):(a=new cast.Api,am(a),a.addReceiverListener("YouTube",$l),a.setReloadTabRequestHandler&&a.setReloadTabRequestHandler(function(){I(function(){window.location.reload(!0)},1E3)}),Hj(Ul),Tl("API initialized"));
Zl=!0}}
function bm(){var a=Vl();a&&(Tl("API disposed"),Kj(Ul),a.setReloadTabRequestHandler&&a.setReloadTabRequestHandler(t),a.removeReceiverListener("YouTube",$l),am(null));Zl=!1;Xl=null;(a=Ue(window,"message",Wl,!1))&&Ve(a)}
function cm(a){var b=Pa(Ra,function(b){return b.id==a.id});
0<=b&&(Ra[b]=ck(a))}
function $l(a){a.length&&Tl("Updating receivers: "+M(a));dm(a);K("yt-remote-cast-device-list-update");z(em(),function(a){fm(a.id)});
z(a,function(a){if(a.isTabProjected){var c=gm(a.id);Tl("Detected device: "+c.id+" is tab projected. Firing DEVICE_TAB_PROJECTED event.");I(function(){K("yt-remote-cast-device-tab-projected",c.id)},1E3)}})}
function hm(a,b){Tl("Updating "+a+" activity status: "+M(b));var c=gm(a);c?(b.activityId&&(c.f=b.activityId),c.status="running"==b.status?"RUNNING":"stopped"==b.status?"STOPPED":"error"==b.status?"ERROR":"UNKNOWN","RUNNING"!=c.status&&(c.f=""),cm(c),K("yt-remote-cast-device-status-update",c)):Tl("Device not found")}
function em(){Yl();return ik(Ra)}
function dm(a){a=A(a,function(a){var c={id:a.id,name:Ba(a.name)};if(a=gm(a.id))c.activityId=a.f,c.status=a.status;return c});
Qa();Xa(Ra,a)}
function gm(a){var b=em();return Oa(b,function(b){return b.id==a})||null}
function fm(a){var b=gm(a),c=Vl();c&&b&&b.f&&c.getActivityStatus(b.f,function(b){"error"==b.status&&(b.status="stopped");hm(a,b)})}
function im(a){Yl();var b=gm(a),c=Vl();c&&b&&b.f?(Tl("Stopping cast activity"),c.stopActivity(b.f,pa(hm,a))):Tl("Dropping cast activity stop")}
function Vl(){return r("yt.mdx.remote.castapi.api_")}
function am(a){q("yt.mdx.remote.castapi.api_",a,void 0)}
var Zl=!1,Xl=null,Ra=r("yt.mdx.remote.castapi.devices_")||[];q("yt.mdx.remote.castapi.devices_",Ra,void 0);function jm(a,b){this.h=a;this.f=b||null}
;function km(){}
;function lm(){this.f=x()}
new lm;lm.prototype.set=function(a){this.f=a};
lm.prototype.reset=function(){this.set(x())};
lm.prototype.get=function(){return this.f};function mm(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.f=!1;this.Sc=!0}
mm.prototype.stopPropagation=function(){this.f=!0};
mm.prototype.preventDefault=function(){this.defaultPrevented=!0;this.Sc=!1};var nm=!L||vd(9),om=L&&!ud("9");!kd||ud("528");jd&&ud("1.9b")||L&&ud("8")||hd&&ud("9.5")||kd&&ud("528");jd&&!ud("8")||L&&ud("9");function pm(a,b){mm.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.h=this.state=null;a&&this.init(a,b)}
y(pm,mm);
pm.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;if(e){if(jd){var f;a:{try{nf(e.nodeName);f=!0;break a}catch(h){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||
0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.h=a;a.defaultPrevented&&this.preventDefault()};
pm.prototype.stopPropagation=function(){pm.I.stopPropagation.call(this);this.h.stopPropagation?this.h.stopPropagation():this.h.cancelBubble=!0};
pm.prototype.preventDefault=function(){pm.I.preventDefault.call(this);var a=this.h;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,om)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var qm="closure_listenable_"+(1E6*Math.random()|0),rm=0;function sm(a,b,c,d,e){this.listener=a;this.f=null;this.src=b;this.type=c;this.qb=!!d;this.ub=e;this.key=++rm;this.Wa=this.pb=!1}
function tm(a){a.Wa=!0;a.listener=null;a.f=null;a.src=null;a.ub=null}
;function um(a){this.src=a;this.f={};this.h=0}
function vm(a,b,c,d,e){var f=b.toString();b=a.f[f];b||(b=a.f[f]=[],a.h++);var h=wm(b,c,d,e);-1<h?(a=b[h],a.pb=!1):(a=new sm(c,a.src,f,!!d,e),a.pb=!1,b.push(a));return a}
um.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.f))return!1;var e=this.f[a];b=wm(e,b,c,d);return-1<b?(tm(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.f[a],this.h--),!0):!1};
function xm(a,b){var c=b.type;c in a.f&&Ta(a.f[c],b)&&(tm(b),0==a.f[c].length&&(delete a.f[c],a.h--))}
um.prototype.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.f)if(!a||c==a){for(var d=this.f[c],e=0;e<d.length;e++)++b,tm(d[e]);delete this.f[c];this.h--}return b};
function ym(a,b,c,d,e){a=a.f[b.toString()];b=-1;a&&(b=wm(a,c,d,e));return-1<b?a[b]:null}
function wm(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Wa&&f.listener==b&&f.qb==!!c&&f.ub==d)return e}return-1}
;var zm="closure_lm_"+(1E6*Math.random()|0),Am={},Bm=0;
function Cm(a,b,c,d,e){if(da(b)){for(var f=0;f<b.length;f++)Cm(a,b[f],c,d,e);return null}c=Dm(c);if(a&&a[qm])a=a.vb(b,c,d,e);else{if(!b)throw Error("Invalid event type");var f=!!d,h=Em(a);h||(a[zm]=h=new um(a));c=vm(h,b,c,d,e);if(!c.f){d=Fm();c.f=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,f);else if(a.attachEvent)a.attachEvent(Gm(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");Bm++}a=c}return a}
function Fm(){var a=Hm,b=nm?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function Im(a,b,c,d,e){if(da(b))for(var f=0;f<b.length;f++)Im(a,b[f],c,d,e);else c=Dm(c),a&&a[qm]?a.Gb(b,c,d,e):a&&(a=Em(a))&&(b=ym(a,b,c,!!d,e))&&Jm(b)}
function Jm(a){if(!fa(a)&&a&&!a.Wa){var b=a.src;if(b&&b[qm])xm(b.j,a);else{var c=a.type,d=a.f;b.removeEventListener?b.removeEventListener(c,d,a.qb):b.detachEvent&&b.detachEvent(Gm(c),d);Bm--;(c=Em(b))?(xm(c,a),0==c.h&&(c.src=null,b[zm]=null)):tm(a)}}}
function Gm(a){return a in Am?Am[a]:Am[a]="on"+a}
function Km(a,b,c,d){var e=!0;if(a=Em(a))if(b=a.f[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.qb==c&&!f.Wa&&(f=Lm(f,d),e=e&&!1!==f)}return e}
function Lm(a,b){var c=a.listener,d=a.ub||a.src;a.pb&&Jm(a);return c.call(d,b)}
function Hm(a,b){if(a.Wa)return!0;if(!nm){var c=b||r("window.event"),d=new pm(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(l){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);for(var f=a.type,h=c.length-1;!d.f&&0<=h;h--){d.currentTarget=c[h];var k=Km(c[h],f,!0,d),e=e&&k}for(h=0;!d.f&&h<c.length;h++)d.currentTarget=c[h],k=Km(c[h],f,!1,d),e=e&&k}return e}return Lm(a,new pm(b,this))}
function Em(a){a=a[zm];return a instanceof um?a:null}
var Mm="__closure_events_fn_"+(1E9*Math.random()>>>0);function Dm(a){if(ha(a))return a;a[Mm]||(a[Mm]=function(b){return a.handleEvent(b)});
return a[Mm]}
;function Nm(){E.call(this);this.j=new um(this);this.Ba=this;this.qa=null}
y(Nm,E);Nm.prototype[qm]=!0;g=Nm.prototype;g.addEventListener=function(a,b,c,d){Cm(this,a,b,c,d)};
g.removeEventListener=function(a,b,c,d){Im(this,a,b,c,d)};
function Om(a,b){var c,d=a.qa;if(d){c=[];for(var e=1;d;d=d.qa)c.push(d),++e}var d=a.Ba,e=b,f=e.type||e;if(v(e))e=new mm(e,d);else if(e instanceof mm)e.target=e.target||d;else{var h=e,e=new mm(f,d);ub(e,h)}var h=!0,k;if(c)for(var l=c.length-1;!e.f&&0<=l;l--)k=e.currentTarget=c[l],h=Pm(k,f,!0,e)&&h;e.f||(k=e.currentTarget=d,h=Pm(k,f,!0,e)&&h,e.f||(h=Pm(k,f,!1,e)&&h));if(c)for(l=0;!e.f&&l<c.length;l++)k=e.currentTarget=c[l],h=Pm(k,f,!1,e)&&h}
g.G=function(){Nm.I.G.call(this);this.removeAllListeners();this.qa=null};
g.vb=function(a,b,c,d){return vm(this.j,String(a),b,c,d)};
g.Gb=function(a,b,c,d){return this.j.remove(String(a),b,c,d)};
g.removeAllListeners=function(a){return this.j?this.j.removeAll(a):0};
function Pm(a,b,c,d){b=a.j.f[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var h=b[f];if(h&&!h.Wa&&h.qb==c){var k=h.listener,l=h.ub||h.src;h.pb&&xm(a.j,h);e=!1!==k.call(l,d)&&e}}return e&&0!=d.Sc}
;function Qm(a,b){this.h=new Bd(a);this.f=b?zd:yd}
Qm.prototype.stringify=function(a){return Ad(this.h,a)};
Qm.prototype.parse=function(a){return this.f(a)};function Rm(a,b){this.f=0;this.B=void 0;this.l=this.h=this.j=null;this.o=this.A=!1;if(a!=t)try{var c=this;a.call(b,function(a){Sm(c,2,a)},function(a){Sm(c,3,a)})}catch(d){Sm(this,3,d)}}
function Tm(){this.next=this.context=this.h=this.l=this.f=null;this.j=!1}
Tm.prototype.reset=function(){this.context=this.h=this.l=this.f=null;this.j=!1};
var Um=new Ub(function(){return new Tm},function(a){a.reset()},100);
function Vm(a,b,c){var d=Um.get();d.l=a;d.h=b;d.context=c;return d}
function Wm(a){return new Rm(function(b,c){c(a)})}
Rm.prototype.then=function(a,b,c){return Xm(this,ha(a)?a:null,ha(b)?b:null,c)};
Rm.prototype.then=Rm.prototype.then;Rm.prototype.$goog_Thenable=!0;Rm.prototype.cancel=function(a){0==this.f&&$b(function(){var b=new Ym(a);Zm(this,b)},this)};
function Zm(a,b){if(0==a.f)if(a.j){var c=a.j;if(c.h){for(var d=0,e=null,f=null,h=c.h;h&&(h.j||(d++,h.f==a&&(e=h),!(e&&1<d)));h=h.next)e||(f=h);e&&(0==c.f&&1==d?Zm(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):$m(c),an(c,e,3,b)))}a.j=null}else Sm(a,3,b)}
function bn(a,b){a.h||2!=a.f&&3!=a.f||cn(a);a.l?a.l.next=b:a.h=b;a.l=b}
function Xm(a,b,c,d){var e=Vm(null,null,null);e.f=new Rm(function(a,h){e.l=b?function(c){try{var e=b.call(d,c);a(e)}catch(n){h(n)}}:a;
e.h=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof Ym?h(b):a(e)}catch(n){h(n)}}:h});
e.f.j=a;bn(a,e);return e.f}
Rm.prototype.K=function(a){this.f=0;Sm(this,2,a)};
Rm.prototype.J=function(a){this.f=0;Sm(this,3,a)};
function Sm(a,b,c){if(0==a.f){a==c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;var d;a:{var e=c,f=a.K,h=a.J;if(e instanceof Rm)bn(e,Vm(f||t,h||null,a)),d=!0;else{var k;if(e)try{k=!!e.$goog_Thenable}catch(n){k=!1}else k=!1;if(k)e.then(f,h,a),d=!0;else{if(ia(e))try{var l=e.then;if(ha(l)){dn(e,l,f,h,a);d=!0;break a}}catch(n){h.call(a,n);d=!0;break a}d=!1}}}d||(a.B=c,a.f=b,a.j=null,cn(a),3!=b||c instanceof Ym||en(a,c))}}
function dn(a,b,c,d,e){function f(a){k||(k=!0,d.call(e,a))}
function h(a){k||(k=!0,c.call(e,a))}
var k=!1;try{b.call(a,h,f)}catch(l){f(l)}}
function cn(a){a.A||(a.A=!0,$b(a.C,a))}
function $m(a){var b=null;a.h&&(b=a.h,a.h=b.next,b.next=null);a.h||(a.l=null);return b}
Rm.prototype.C=function(){for(var a=null;a=$m(this);)an(this,a,this.f,this.B);this.A=!1};
function an(a,b,c,d){if(3==c&&b.h&&!b.j)for(;a&&a.o;a=a.j)a.o=!1;if(b.f)b.f.j=null,fn(b,c,d);else try{b.j?b.l.call(b.context):fn(b,c,d)}catch(e){gn.call(null,e)}Wb(Um,b)}
function fn(a,b,c){2==b?a.l.call(a.context,c):a.h&&a.h.call(a.context,c)}
function en(a,b){a.o=!0;$b(function(){a.o&&gn.call(null,b)})}
var gn=Rb;function Ym(a){qa.call(this,a)}
y(Ym,qa);Ym.prototype.name="cancel";function hn(a,b){Nm.call(this);this.f=a||1;this.h=b||m;this.l=w(this.Ge,this);this.o=x()}
y(hn,Nm);g=hn.prototype;g.za=!1;g.ea=null;function jn(a,b){a.f=b;a.ea&&a.za?(a.stop(),a.Fa()):a.ea&&a.stop()}
g.Ge=function(){if(this.za){var a=x()-this.o;0<a&&a<.8*this.f?this.ea=this.h.setTimeout(this.l,this.f-a):(this.ea&&(this.h.clearTimeout(this.ea),this.ea=null),Om(this,"tick"),this.za&&(this.ea=this.h.setTimeout(this.l,this.f),this.o=x()))}};
g.Fa=function(){this.za=!0;this.ea||(this.ea=this.h.setTimeout(this.l,this.f),this.o=x())};
g.stop=function(){this.za=!1;this.ea&&(this.h.clearTimeout(this.ea),this.ea=null)};
g.G=function(){hn.I.G.call(this);this.stop();delete this.h};
function kn(a,b,c){if(ha(a))c&&(a=w(a,c));else if(a&&"function"==typeof a.handleEvent)a=w(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:m.setTimeout(a,b||0)}
;function ln(a,b,c){E.call(this);this.l=null!=c?w(a,c):a;this.j=b;this.h=w(this.je,this);this.f=[]}
y(ln,E);g=ln.prototype;g.Db=!1;g.dc=0;g.Sa=null;g.zd=function(a){this.f=arguments;this.Sa||this.dc?this.Db=!0:mn(this)};
g.stop=function(){this.Sa&&(m.clearTimeout(this.Sa),this.Sa=null,this.Db=!1,this.f=[])};
g.pause=function(){this.dc++};
g.G=function(){ln.I.G.call(this);this.stop()};
g.je=function(){this.Sa=null;this.Db&&!this.dc&&(this.Db=!1,mn(this))};
function mn(a){a.Sa=kn(a.h,a.j);a.l.apply(null,a.f)}
;function nn(a){E.call(this);this.h=a;this.f={}}
y(nn,E);var on=[];g=nn.prototype;g.vb=function(a,b,c,d){da(b)||(b&&(on[0]=b.toString()),b=on);for(var e=0;e<b.length;e++){var f=Cm(a,b[e],c||this.handleEvent,d||!1,this.h||this);if(!f)break;this.f[f.key]=f}return this};
g.Gb=function(a,b,c,d,e){if(da(b))for(var f=0;f<b.length;f++)this.Gb(a,b[f],c,d,e);else c=c||this.handleEvent,e=e||this.h||this,c=Dm(c),d=!!d,b=a&&a[qm]?ym(a.j,String(b),c,d,e):a?(a=Em(a))?ym(a,b,c,d,e):null:null,b&&(Jm(b),delete this.f[b.key]);return this};
g.removeAll=function(){cb(this.f,function(a,b){this.f.hasOwnProperty(b)&&Jm(a)},this);
this.f={}};
g.G=function(){nn.I.G.call(this);this.removeAll()};
g.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function pn(){}
pn.prototype.f=null;function qn(a){var b;(b=a.f)||(b={},rn(a)&&(b[0]=!0,b[1]=!0),b=a.f=b);return b}
;var sn;function tn(){}
y(tn,pn);function un(a){return(a=rn(a))?new ActiveXObject(a):new XMLHttpRequest}
function rn(a){if(!a.h&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.h=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.h}
sn=new tn;function vn(a,b,c,d,e){this.f=a;this.j=c;this.C=d;this.B=e||1;this.o=45E3;this.l=new nn(this);this.h=new hn;jn(this.h,250)}
g=vn.prototype;g.La=null;g.ma=!1;g.Ya=null;g.ic=null;g.lb=null;g.Xa=null;g.Ca=null;g.Ga=null;g.Oa=null;g.O=null;g.ob=0;g.na=null;g.Jb=null;g.Ma=null;g.ib=-1;g.Tc=!0;g.Ia=!1;g.Zb=0;g.Bb=null;var wn={},xn={};g=vn.prototype;g.setTimeout=function(a){this.o=a};
function yn(a,b,c){a.Xa=1;a.Ca=Bg(b.clone());a.Oa=c;a.A=!0;zn(a,null)}
function An(a,b,c,d,e){a.Xa=1;a.Ca=Bg(b.clone());a.Oa=null;a.A=c;e&&(a.Tc=!1);zn(a,d)}
function zn(a,b){a.lb=x();Bn(a);a.Ga=a.Ca.clone();zg(a.Ga,"t",a.B);a.ob=0;a.O=a.f.Sb(a.f.nb()?b:null);0<a.Zb&&(a.Bb=new ln(w(a.Zc,a,a.O),a.Zb));a.l.vb(a.O,"readystatechange",a.te);var c=a.La?qb(a.La):{};a.Oa?(a.Jb="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.O.send(a.Ga,a.Jb,a.Oa,c)):(a.Jb="GET",a.Tc&&!kd&&(c.Connection="close"),a.O.send(a.Ga,a.Jb,null,c));a.f.la(1)}
g.te=function(a){a=a.target;var b=this.Bb;b&&3==Cn(a)?b.zd():this.Zc(a)};
g.Zc=function(a){try{if(a==this.O)a:{var b=Cn(this.O),c=this.O.o,d=this.O.getStatus();if(L&&!vd(10)||kd&&!ud("420+")){if(4>b)break a}else if(3>b||3==b&&!hd&&!Dn(this.O))break a;this.Ia||4!=b||7==c||(8==c||0>=d?this.f.la(3):this.f.la(2));En(this);var e=this.O.getStatus();this.ib=e;var f=Dn(this.O);(this.ma=200==e)?(4==b&&Fn(this),this.A?(Gn(this,b,f),hd&&this.ma&&3==b&&(this.l.vb(this.h,"tick",this.se),this.h.Fa())):Hn(this,f),this.ma&&!this.Ia&&(4==b?this.f.xb(this):(this.ma=!1,Bn(this)))):(this.Ma=
400==e&&0<f.indexOf("Unknown SID")?3:0,W(),Fn(this),In(this))}}catch(h){this.O&&Dn(this.O)}finally{}};
function Gn(a,b,c){for(var d=!0;!a.Ia&&a.ob<c.length;){var e=Jn(a,c);if(e==xn){4==b&&(a.Ma=4,W(),d=!1);break}else if(e==wn){a.Ma=4;W();d=!1;break}else Hn(a,e)}4==b&&0==c.length&&(a.Ma=1,W(),d=!1);a.ma=a.ma&&d;d||(Fn(a),In(a))}
g.se=function(){var a=Cn(this.O),b=Dn(this.O);this.ob<b.length&&(En(this),Gn(this,a,b),this.ma&&4!=a&&Bn(this))};
function Jn(a,b){var c=a.ob,d=b.indexOf("\n",c);if(-1==d)return xn;c=Number(b.substring(c,d));if(isNaN(c))return wn;d+=1;if(d+c>b.length)return xn;var e=b.substr(d,c);a.ob=d+c;return e}
function Kn(a,b){a.lb=x();Bn(a);var c=b?window.location.hostname:"";a.Ga=a.Ca.clone();O(a.Ga,"DOMAIN",c);O(a.Ga,"t",a.B);try{a.na=new ActiveXObject("htmlfile")}catch(n){Fn(a);a.Ma=7;W();In(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var h=c.charAt(f);if("<"==h)e+="\\x3c";else if(">"==h)e+="\\x3e";else{if(h in Ga)h=Ga[h];else if(h in Fa)h=Ga[h]=Fa[h];else{var k=h,l=h.charCodeAt(0);if(31<l&&127>l)k=h;else{if(256>l){if(k="\\x",16>l||256<l)k+="0"}else k="\\u",4096>l&&(k+="0");
k+=l.toString(16).toUpperCase()}h=Ga[h]=k}e+=h}}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=Pc(Ab("b/12014412"),d);a.na.open();a.na.write(Jb(c));a.na.close();a.na.parentWindow.m=w(a.ne,a);a.na.parentWindow.d=w(a.Oc,a,!0);a.na.parentWindow.rpcClose=w(a.Oc,a,!1);c=a.na.createElement("DIV");a.na.parentWindow.document.body.appendChild(c);d=Fb(a.Ga.toString());d=Db(d);Aa.test(d)&&(-1!=d.indexOf("&")&&(d=d.replace(ua,"&amp;")),-1!=d.indexOf("<")&&(d=d.replace(va,"&lt;")),-1!=
d.indexOf(">")&&(d=d.replace(wa,"&gt;")),-1!=d.indexOf('"')&&(d=d.replace(xa,"&quot;")),-1!=d.indexOf("'")&&(d=d.replace(ya,"&#39;")),-1!=d.indexOf("\x00")&&(d=d.replace(za,"&#0;")));d=Pc(Ab("b/12014412"),'<iframe src="'+d+'"></iframe>');c.innerHTML=Jb(d);a.f.la(1)}
g.ne=function(a){Ln(w(this.me,this,a),0)};
g.me=function(a){this.Ia||(En(this),Hn(this,a),Bn(this))};
g.Oc=function(a){Ln(w(this.le,this,a),0)};
g.le=function(a){this.Ia||(Fn(this),this.ma=a,this.f.xb(this),this.f.la(4))};
g.cancel=function(){this.Ia=!0;Fn(this)};
function Bn(a){a.ic=x()+a.o;Mn(a,a.o)}
function Mn(a,b){if(null!=a.Ya)throw Error("WatchDog timer not null");a.Ya=Ln(w(a.pe,a),b)}
function En(a){a.Ya&&(m.clearTimeout(a.Ya),a.Ya=null)}
g.pe=function(){this.Ya=null;var a=x();0<=a-this.ic?(2!=this.Xa&&this.f.la(3),Fn(this),this.Ma=2,W(),In(this)):Mn(this,this.ic-a)};
function In(a){a.f.Cc()||a.Ia||a.f.xb(a)}
function Fn(a){En(a);F(a.Bb);a.Bb=null;a.h.stop();a.l.removeAll();if(a.O){var b=a.O;a.O=null;Nn(b);b.dispose()}a.na&&(a.na=null)}
function Hn(a,b){try{a.f.Jc(a,b),a.f.la(4)}catch(c){}}
;function On(a,b,c,d,e){if(0==d)c(!1);else{var f=e||0;d--;Pn(a,b,function(e){e?c(!0):m.setTimeout(function(){On(a,b,c,d,f)},f)})}}
function Pn(a,b,c){var d=new Image;d.onload=function(){try{Qn(d),c(!0)}catch(a){}};
d.onerror=function(){try{Qn(d),c(!1)}catch(a){}};
d.onabort=function(){try{Qn(d),c(!1)}catch(a){}};
d.ontimeout=function(){try{Qn(d),c(!1)}catch(a){}};
m.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
d.src=a}
function Qn(a){a.onload=null;a.onerror=null;a.onabort=null;a.ontimeout=null}
;function Rn(a){this.f=a;this.h=new Qm(null,!0)}
g=Rn.prototype;g.Xb=null;g.da=null;g.Cb=!1;g.Wc=null;g.rb=null;g.bc=null;g.Yb=null;g.fa=null;g.Aa=-1;g.gb=null;g.ab=null;g.connect=function(a){this.Yb=a;a=Sn(this.f,null,this.Yb);W();this.Wc=x();var b=this.f.C;null!=b?(this.gb=b[0],(this.ab=b[1])?(this.fa=1,Tn(this)):(this.fa=2,Un(this))):(zg(a,"MODE","init"),this.da=new vn(this,0,void 0,void 0,void 0),this.da.La=this.Xb,An(this.da,a,!1,null,!0),this.fa=0)};
function Tn(a){var b=Sn(a.f,a.ab,"/mail/images/cleardot.gif");Bg(b);On(b.toString(),5E3,w(a.ud,a),3,2E3);a.la(1)}
g.ud=function(a){if(a)this.fa=2,Un(this);else{W();var b=this.f;b.ia=b.Da.Aa;Vn(b,9)}a&&this.la(2)};
function Un(a){var b=a.f.K;if(null!=b)W(),b?(W(),Wn(a.f,a,!1)):(W(),Wn(a.f,a,!0));else if(a.da=new vn(a,0,void 0,void 0,void 0),a.da.La=a.Xb,b=a.f,b=Sn(b,b.nb()?a.gb:null,a.Yb),W(),!L||vd(10))zg(b,"TYPE","xmlhttp"),An(a.da,b,!1,a.gb,!1);else{zg(b,"TYPE","html");var c=a.da;a=!!a.gb;c.Xa=3;c.Ca=Bg(b.clone());Kn(c,a)}}
g.Sb=function(a){return this.f.Sb(a)};
g.Cc=function(){return!1};
g.Jc=function(a,b){this.Aa=a.ib;if(0==this.fa)if(b){try{var c=this.h.parse(b)}catch(d){c=this.f;c.ia=this.Aa;Vn(c,2);return}this.gb=c[0];this.ab=c[1]}else c=this.f,c.ia=this.Aa,Vn(c,2);else if(2==this.fa)if(this.Cb)W(),this.bc=x();else if("11111"==b){if(W(),this.Cb=!0,this.rb=x(),c=this.rb-this.Wc,!L||vd(10)||500>c)this.Aa=200,this.da.cancel(),W(),Wn(this.f,this,!0)}else W(),this.rb=this.bc=x(),this.Cb=!1};
g.xb=function(){this.Aa=this.da.ib;if(this.da.ma)0==this.fa?this.ab?(this.fa=1,Tn(this)):(this.fa=2,Un(this)):2==this.fa&&(a=!1,(a=!L||vd(10)?this.Cb:200>this.bc-this.rb?!1:!0)?(W(),Wn(this.f,this,!0)):(W(),Wn(this.f,this,!1)));else{0==this.fa?W():2==this.fa&&W();var a=this.f;a.ia=this.Aa;Vn(a,2)}};
g.nb=function(){return this.f.nb()};
g.la=function(a){this.f.la(a)};function Xn(a){Nm.call(this);this.headers=new Vc;this.T=a||null;this.h=!1;this.S=this.f=null;this.ta=this.J="";this.o=0;this.A="";this.l=this.ha=this.C=this.Z=!1;this.B=0;this.L=null;this.ua="";this.P=this.va=!1}
y(Xn,Nm);var Yn=/^https?$/i,Zn=["POST","PUT"];g=Xn.prototype;
g.send=function(a,b,c,d){if(this.f)throw Error("[goog.net.XhrIo] Object is active with another request="+this.J+"; newUri="+a);b=b?b.toUpperCase():"GET";this.J=a;this.A="";this.o=0;this.ta=b;this.Z=!1;this.h=!0;this.f=this.T?un(this.T):un(sn);this.S=this.T?qn(this.T):qn(sn);this.f.onreadystatechange=w(this.Ic,this);try{km($n(this,"Opening Xhr")),this.ha=!0,this.f.open(b,String(a),!0),this.ha=!1}catch(f){km($n(this,"Error opening Xhr: "+f.message));ao(this,f);return}a=c||"";var e=this.headers.clone();
d&&bd(d,function(a,b){e.set(b,a)});
d=Oa(e.ra(),bo);c=m.FormData&&a instanceof m.FormData;!B(Zn,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.f.setRequestHeader(b,a)},this);
this.ua&&(this.f.responseType=this.ua);kb(this.f)&&(this.f.withCredentials=this.va);try{co(this),0<this.B&&(this.P=eo(this.f),km($n(this,"Will abort after "+this.B+"ms if incomplete, xhr2 "+this.P)),this.P?(this.f.timeout=this.B,this.f.ontimeout=w(this.Bc,this)):this.L=kn(this.Bc,this.B,this)),km($n(this,"Sending request")),this.C=!0,this.f.send(a),this.C=!1}catch(f){km($n(this,"Send error: "+f.message)),ao(this,f)}};
function eo(a){return L&&ud(9)&&fa(a.timeout)&&p(a.ontimeout)}
function bo(a){return"content-type"==a.toLowerCase()}
g.Bc=function(){"undefined"!=typeof aa&&this.f&&(this.A="Timed out after "+this.B+"ms, aborting",this.o=8,$n(this,this.A),Om(this,"timeout"),Nn(this,8))};
function ao(a,b){a.h=!1;a.f&&(a.l=!0,a.f.abort(),a.l=!1);a.A=b;a.o=5;fo(a);go(a)}
function fo(a){a.Z||(a.Z=!0,Om(a,"complete"),Om(a,"error"))}
function Nn(a,b){a.f&&a.h&&($n(a,"Aborting"),a.h=!1,a.l=!0,a.f.abort(),a.l=!1,a.o=b||7,Om(a,"complete"),Om(a,"abort"),go(a))}
g.G=function(){this.f&&(this.h&&(this.h=!1,this.l=!0,this.f.abort(),this.l=!1),go(this,!0));Xn.I.G.call(this)};
g.Ic=function(){this.isDisposed()||(this.ha||this.C||this.l?ho(this):this.be())};
g.be=function(){ho(this)};
function ho(a){if(a.h&&"undefined"!=typeof aa)if(a.S[1]&&4==Cn(a)&&2==a.getStatus())$n(a,"Local request error detected and ignored");else if(a.C&&4==Cn(a))kn(a.Ic,0,a);else if(Om(a,"readystatechange"),4==Cn(a)){$n(a,"Request complete");a.h=!1;try{var b=a.getStatus(),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.J).match(Gd)[1]||null;if(!f&&m.self&&m.self.location)var h=m.self.location.protocol,
f=h.substr(0,h.length-1);e=!Yn.test(f?f.toLowerCase():"")}d=e}if(d)Om(a,"complete"),Om(a,"success");else{a.o=6;var k;try{k=2<Cn(a)?a.f.statusText:""}catch(l){k=""}a.A=k+" ["+a.getStatus()+"]";fo(a)}}finally{go(a)}}}
function go(a,b){if(a.f){co(a);var c=a.f,d=a.S[0]?t:null;a.f=null;a.S=null;b||Om(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function co(a){a.f&&a.P&&(a.f.ontimeout=null);fa(a.L)&&(m.clearTimeout(a.L),a.L=null)}
function Cn(a){return a.f?a.f.readyState:0}
g.getStatus=function(){try{return 2<Cn(this)?this.f.status:-1}catch(a){return-1}};
function Dn(a){try{return a.f?a.f.responseText:""}catch(b){return""}}
function $n(a,b){return b+" ["+a.ta+" "+a.J+" "+a.getStatus()+"]"}
;function io(a,b,c){this.B=a||null;this.f=1;this.h=[];this.l=[];this.o=new Qm(null,!0);this.C=b||null;this.K=null!=c?c:null}
function jo(a,b){this.f=a;this.map=b;this.context=null}
g=io.prototype;g.eb=null;g.Y=null;g.M=null;g.Wb=null;g.sb=null;g.pc=null;g.tb=null;g.jb=0;g.Md=0;g.W=null;g.Ea=null;g.ya=null;g.Ka=null;g.Da=null;g.Ib=null;g.Ta=-1;g.Dc=-1;g.ia=-1;g.fb=0;g.Ra=0;g.Ja=8;var ko=new Nm;function lo(a){mm.call(this,"statevent",a)}
y(lo,mm);function mo(a,b){mm.call(this,"timingevent",a);this.size=b}
y(mo,mm);function no(a){mm.call(this,"serverreachability",a)}
y(no,mm);g=io.prototype;g.connect=function(a,b,c,d,e){W();this.Wb=b;this.eb=c||{};d&&p(e)&&(this.eb.OSID=d,this.eb.OAID=e);this.Da=new Rn(this);this.Da.Xb=null;this.Da.h=this.o;this.Da.connect(a)};
function oo(a){po(a);if(3==a.f){var b=a.jb++,c=a.sb.clone();O(c,"SID",a.j);O(c,"RID",b);O(c,"TYPE","terminate");qo(a,c);b=new vn(a,0,a.j,b,void 0);b.Xa=2;b.Ca=Bg(c.clone());(new Image).src=b.Ca;b.lb=x();Bn(b)}ro(a)}
function po(a){if(a.Da){var b=a.Da;b.da&&(b.da.cancel(),b.da=null);b.Aa=-1;a.Da=null}a.M&&(a.M.cancel(),a.M=null);a.ya&&(m.clearTimeout(a.ya),a.ya=null);so(a);a.Y&&(a.Y.cancel(),a.Y=null);a.Ea&&(m.clearTimeout(a.Ea),a.Ea=null)}
function to(a,b){if(0==a.f)throw Error("Invalid operation: sending map when state is closed");a.h.push(new jo(a.Md++,b));2!=a.f&&3!=a.f||uo(a)}
g.Cc=function(){return 0==this.f};
function uo(a){a.Y||a.Ea||(a.Ea=Ln(w(a.Nc,a),0),a.fb=0)}
g.Nc=function(a){this.Ea=null;vo(this,a)};
function vo(a,b){if(1==a.f){if(!b){a.jb=Math.floor(1E5*Math.random());var c=a.jb++,d=new vn(a,0,"",c,void 0);d.La=null;var e=wo(a),f=a.sb.clone();O(f,"RID",c);a.B&&O(f,"CVER",a.B);qo(a,f);yn(d,f,e);a.Y=d;a.f=2}}else 3==a.f&&(b?xo(a,b):0!=a.h.length&&(a.Y||xo(a)))}
function xo(a,b){var c,d;b?6<a.Ja?(a.h=a.l.concat(a.h),a.l.length=0,c=a.jb-1,d=wo(a)):(c=b.C,d=b.Oa):(c=a.jb++,d=wo(a));var e=a.sb.clone();O(e,"SID",a.j);O(e,"RID",c);O(e,"AID",a.Ta);qo(a,e);c=new vn(a,0,a.j,c,a.fb+1);c.La=null;c.setTimeout(Math.round(1E4)+Math.round(1E4*Math.random()));a.Y=c;yn(c,e,d)}
function qo(a,b){if(a.W){var c=a.W.yc(a);c&&cb(c,function(a,c){O(b,c,a)})}}
function wo(a){var b=Math.min(a.h.length,1E3),c=["count="+b],d;6<a.Ja&&0<b?(d=a.h[0].f,c.push("ofs="+d)):d=0;for(var e=0;e<b;e++){var f=a.h[e].f,h=a.h[e].map,f=6>=a.Ja?e:f-d;try{bd(h,function(a,b){c.push("req"+f+"_"+b+"="+encodeURIComponent(a))})}catch(k){c.push("req"+f+"_type="+encodeURIComponent("_badmap"))}}a.l=a.l.concat(a.h.splice(0,b));
return c.join("&")}
function yo(a){a.M||a.ya||(a.A=1,a.ya=Ln(w(a.Mc,a),0),a.Ra=0)}
function zo(a){if(a.M||a.ya||3<=a.Ra)return!1;a.A++;a.ya=Ln(w(a.Mc,a),Ao(a,a.Ra));a.Ra++;return!0}
g.Mc=function(){this.ya=null;this.M=new vn(this,0,this.j,"rpc",this.A);this.M.La=null;this.M.Zb=0;var a=this.pc.clone();O(a,"RID","rpc");O(a,"SID",this.j);O(a,"CI",this.Ib?"0":"1");O(a,"AID",this.Ta);qo(this,a);if(!L||vd(10))O(a,"TYPE","xmlhttp"),An(this.M,a,!0,this.tb,!1);else{O(a,"TYPE","html");var b=this.M,c=!!this.tb;b.Xa=3;b.Ca=Bg(a.clone());Kn(b,c)}};
function Wn(a,b,c){a.Ib=c;a.ia=b.Aa;a.xd(1,0);a.sb=Sn(a,null,a.Wb);uo(a)}
g.Jc=function(a,b){if(0!=this.f&&(this.M==a||this.Y==a))if(this.ia=a.ib,this.Y==a&&3==this.f)if(7<this.Ja){var c;try{c=this.o.parse(b)}catch(f){c=null}if(da(c)&&3==c.length)if(0==c[0])a:{if(!this.ya){if(this.M)if(this.M.lb+3E3<this.Y.lb)so(this),this.M.cancel(),this.M=null;else break a;zo(this);W()}}else this.Dc=c[1],0<this.Dc-this.Ta&&37500>c[2]&&this.Ib&&0==this.Ra&&!this.Ka&&(this.Ka=Ln(w(this.Nd,this),6E3));else Vn(this,11)}else"y2f%"!=b&&Vn(this,11);else if(this.M==a&&so(this),!/^[\s\xa0]*$/.test(b)){c=
this.o.parse(b);da(c);for(var d=0;d<c.length;d++){var e=c[d];this.Ta=e[0];e=e[1];2==this.f?"c"==e[0]?(this.j=e[1],this.tb=e[2],e=e[3],null!=e?this.Ja=e:this.Ja=6,this.f=3,this.W&&this.W.wc(this),this.pc=Sn(this,this.nb()?this.tb:null,this.Wb),yo(this)):"stop"==e[0]&&Vn(this,7):3==this.f&&("stop"==e[0]?Vn(this,7):"noop"!=e[0]&&this.W&&this.W.uc(this,e),this.Ra=0)}}};
g.Nd=function(){null!=this.Ka&&(this.Ka=null,this.M.cancel(),this.M=null,zo(this),W())};
function so(a){null!=a.Ka&&(m.clearTimeout(a.Ka),a.Ka=null)}
g.xb=function(a){var b;if(this.M==a)so(this),this.M=null,b=2;else if(this.Y==a)this.Y=null,b=1;else return;this.ia=a.ib;if(0!=this.f)if(a.ma)1==b?(x(),Om(ko,new mo(ko,a.Oa?a.Oa.length:0)),uo(this),this.l.length=0):yo(this);else{var c=a.Ma,d;if(!(d=3==c||7==c||0==c&&0<this.ia)){if(d=1==b)this.Y||this.Ea||1==this.f||2<=this.fb?d=!1:(this.Ea=Ln(w(this.Nc,this,a),Ao(this,this.fb)),this.fb++,d=!0);d=!(d||2==b&&zo(this))}if(d)switch(c){case 1:Vn(this,5);break;case 4:Vn(this,10);break;case 3:Vn(this,6);
break;case 7:Vn(this,12);break;default:Vn(this,2)}}};
function Ao(a,b){var c=5E3+Math.floor(1E4*Math.random());a.W||(c*=2);return c*b}
g.xd=function(a){if(!B(arguments,this.f))throw Error("Unexpected channel state: "+this.f);};
function Vn(a,b){if(2==b||9==b){var c=null;a.W&&(c=null);var d=w(a.Fe,a);c||(c=new lg("//www.google.com/images/cleardot.gif"),Bg(c));Pn(c.toString(),1E4,d)}else W();Bo(a,b)}
g.Fe=function(a){a?W():(W(),Bo(this,8))};
function Bo(a,b){a.f=0;a.W&&a.W.tc(a,b);ro(a);po(a)}
function ro(a){a.f=0;a.ia=-1;if(a.W)if(0==a.l.length&&0==a.h.length)a.W.Pb(a);else{var b=Wa(a.l),c=Wa(a.h);a.l.length=0;a.h.length=0;a.W.Pb(a,b,c)}}
function Sn(a,b,c){var d=Cg(c);if(""!=d.h)b&&ng(d,b+"."+d.h),og(d,d.B);else var e=window.location,d=Dg(e.protocol,b?b+"."+e.hostname:e.hostname,e.port,c);a.eb&&cb(a.eb,function(a,b){O(d,b,a)});
O(d,"VER",a.Ja);qo(a,d);return d}
g.Sb=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new Xn;a.va=!1;return a};
function Ln(a,b){if(!ha(a))throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){a()},b)}
g.la=function(){Om(ko,new no(ko))};
function W(){Om(ko,new lo(ko))}
g.nb=function(){return!(!L||vd(10))};
function Co(){}
g=Co.prototype;g.wc=function(){};
g.uc=function(){};
g.tc=function(){};
g.Pb=function(){};
g.yc=function(){return{}};function Do(a,b){hn.call(this);this.A=0;if(ha(a))b&&(a=w(a,b));else if(a&&ha(a.handleEvent))a=w(a.handleEvent,a);else throw Error("Invalid listener argument");this.C=a;Cm(this,"tick",w(this.B,this));Eo(this)}
y(Do,hn);Do.prototype.B=function(){if(500<this.f){var a=this.f;24E4>2*a&&(a*=2);jn(this,a)}this.C()};
Do.prototype.Fa=function(){Do.I.Fa.call(this);this.A=x()+this.f};
Do.prototype.stop=function(){this.A=0;Do.I.stop.call(this)};
function Eo(a){a.stop();jn(a,5E3+2E4*Math.random())}
;function Fo(a,b){this.sa=a;this.l=b;this.j=new G;this.h=new Do(this.Le,this);this.f=null;this.J=!1;this.A=null;this.K="";this.C=this.o=0;this.B=[]}
y(Fo,Co);g=Fo.prototype;g.subscribe=function(a,b,c){return this.j.subscribe(a,b,c)};
g.unsubscribe=function(a,b,c){return this.j.unsubscribe(a,b,c)};
g.oa=function(a){return this.j.oa(a)};
g.F=function(a,b){return this.j.F.apply(this.j,arguments)};
g.dispose=function(){this.J||(this.J=!0,this.j.clear(),Go(this),F(this.j))};
g.isDisposed=function(){return this.J};
function Ho(a){return{firstTestResults:[""],secondTestResults:!a.f.Ib,sessionId:a.f.j,arrayId:a.f.Ta}}
g.connect=function(a,b,c){if(!this.f||2!=this.f.f){this.K="";this.h.stop();this.A=a||null;this.o=b||0;a=this.sa+"/test";b=this.sa+"/bind";var d=new io("1",c?c.firstTestResults:null,c?c.secondTestResults:null),e=this.f;e&&(e.W=null);d.W=this;this.f=d;e?this.f.connect(a,b,this.l,e.j,e.Ta):c?this.f.connect(a,b,this.l,c.sessionId,c.arrayId):this.f.connect(a,b,this.l)}};
function Go(a,b){a.C=b||0;a.h.stop();a.f&&(3==a.f.f&&vo(a.f),oo(a.f));a.C=0}
g.sendMessage=function(a,b){var c={_sc:a};b&&ub(c,b);this.h.za||2==(this.f?this.f.f:0)?this.B.push(c):this.f&&3==this.f.f&&to(this.f,c)};
g.wc=function(){Eo(this.h);this.A=null;this.o=0;if(this.B.length){var a=this.B;this.B=[];for(var b=0,c=a.length;b<c;++b)to(this.f,a[b])}this.F("handlerOpened")};
g.tc=function(a,b){var c=2==b&&401==this.f.ia;if(4!=b&&!c){if(6==b||410==this.f.ia)c=this.h,c.stop(),jn(c,500);this.h.Fa()}this.F("handlerError",b)};
g.Pb=function(a,b,c){if(!this.h.za)this.F("handlerClosed");else if(c)for(a=0,b=c.length;a<b;++a){var d=c[a].map;d&&this.B.push(d)}};
g.yc=function(){var a={v:2};this.K&&(a.gsessionid=this.K);0!=this.o&&(a.ui=""+this.o);0!=this.C&&(a.ui=""+this.C);this.A&&ub(a,this.A);return a};
g.uc=function(a,b){"S"==b[0]?this.K=b[1]:"gracefulReconnect"==b[0]?(Eo(this.h),this.h.Fa(),oo(this.f)):this.F("handlerMessage",new jm(b[0],b[1]))};
function Io(a,b){(a.l.loungeIdToken=b)||a.h.stop()}
g.Le=function(){this.h.stop();var a=this.f,b=0;a.M&&b++;a.Y&&b++;0!=b?this.h.Fa():this.connect(this.A,this.o)};function Jo(a){this.h=null;this.index=-1;this.f=this.j="";this.C=this.l=-1;this.B=!1;this.J=null;this.K=this.A=0;this.o=null;this.reset(a)}
function Ko(a,b){if(a.j)throw Error(b+" is not allowed in V3.");}
function Lo(a){a.J=null;a.o=null;a.l=-1;a.A=0;a.K=x()}
Jo.prototype.reset=function(a){this.h=[];this.j="";this.index=-1;this.f="";Lo(this);this.C=-1;this.B=!1;a&&(this.h=a.videoIds,this.index=a.index,this.j=a.listId,this.f=a.videoId,this.l=a.playerState,this.C=a.volume,this.B=a.muted,this.J=a.audioTrackId,this.o=a.trackData,this.A=a.playerTime,this.K=a.playerTimeAt)};
function Mo(a){return a.j?a.f:a.h[a.index]}
function No(a){switch(a.l){case 1:return(x()-a.K)/1E3+a.A;case -1E3:return 0}return a.A}
function Oo(a,b){Ko(a,"setVideoId");var c=a.index;a.index=Ka(a.h,b);c!=a.index&&Lo(a)}
function Po(a,b,c){Ko(a,"setPlaylist");c=c||Mo(a);$a(a.h,b)&&c==Mo(a)||(a.h=Wa(b),Oo(a,c))}
Jo.prototype.remove=function(a){Ko(this,"remove");var b=Mo(this);return Ta(this.h,a)?(this.index=Ka(this.h,b),!0):!1};
function Qo(a){var b={};b.videoIds=Wa(a.h);b.index=a.index;b.listId=a.j;b.videoId=a.f;b.playerState=a.l;b.volume=a.C;b.muted=a.B;b.audioTrackId=a.J;b.trackData=sb(a.o);b.playerTime=a.A;b.playerTimeAt=a.K;return b}
Jo.prototype.clone=function(){return new Jo(Qo(this))};function Y(a,b,c){U.call(this);this.A=NaN;this.T=!1;this.J=this.C=this.S=this.L=NaN;this.Z=[];this.j=this.D=this.f=null;this.Pa=a;this.Z.push(N(window,"beforeunload",w(this.Fd,this)));this.h=[];this.D=new Jo;3==c["mdx-version"]&&(this.D.j="RQ"+b.token);this.ha=b.id;this.f=Ro(this,c);this.f.subscribe("handlerOpened",this.Sd,this);this.f.subscribe("handlerClosed",this.Od,this);this.f.subscribe("handlerError",this.Pd,this);this.D.j?this.f.subscribe("handlerMessage",this.Qd,this):this.f.subscribe("handlerMessage",
this.Rd,this);Io(this.f,b.token);this.subscribe("remoteQueueChange",function(){var a=this.D.f;zk()&&T("yt-remote-session-video-id",a)},this)}
y(Y,U);g=Y.prototype;
g.connect=function(a,b){if(b){if(this.D.j){var c=b.listId,d=b.videoId,e=b.index,f=b.currentTime||0;5>=f&&(f=0);h={videoId:d,currentTime:f};c&&(h.listId=c);p(e)&&(h.currentIndex=e);c&&(this.D.j=c);this.D.f=d;this.D.index=e||0}else{var d=b.videoIds[b.index],f=b.currentTime||0;5>=f&&(f=0);var h={videoIds:d,videoId:d,currentTime:f};this.D.h=[d];this.D.index=0}this.D.state=3;c=this.D;c.A=f;c.K=x();this.H("Connecting with setPlaylist and params: "+M(h));this.f.connect({method:"setPlaylist",params:M(h)},
a,Dk())}else this.H("Connecting without params"),this.f.connect({},a,Dk());So(this)};
g.dispose=function(){this.isDisposed()||(this.F("beforeDispose"),To(this,3));Y.I.dispose.call(this)};
g.G=function(){Uo(this);Vo(this);Wo(this);J(this.C);this.C=NaN;J(this.J);this.J=NaN;this.j=null;Ve(this.Z);this.Z.length=0;this.f.dispose();Y.I.G.call(this);this.h=this.D=this.f=null};
g.H=function(a){Lj("conn",a)};
g.Fd=function(){this.o(2)};
function Ro(a,b){return new Fo(Zj(a.Pa,"/bc",void 0,!1),b)}
function To(a,b){a.F("proxyStateChange",b)}
function So(a){a.A=I(w(function(){this.H("Connecting timeout");this.o(1)},a),2E4)}
function Uo(a){J(a.A);a.A=NaN}
function Wo(a){J(a.L);a.L=NaN}
function Xo(a){Vo(a);a.S=I(w(function(){Yo(this,"getNowPlaying")},a),2E4)}
function Vo(a){J(a.S);a.S=NaN}
function Zo(a){var b=a.f;return!!b.f&&3==b.f.f&&isNaN(a.A)}
g.Sd=function(){this.H("Channel opened");this.T&&(this.T=!1,Wo(this),this.L=I(w(function(){this.H("Timing out waiting for a screen.");this.o(1)},this),15E3));
Mk(Ho(this.f),this.ha)};
g.Od=function(){this.H("Channel closed");isNaN(this.A)?Nk(!0):Nk();this.dispose()};
g.Pd=function(a){Nk();isNaN(this.B())?(this.H("Channel error: "+a+" without reconnection"),this.dispose()):(this.T=!0,this.H("Channel error: "+a+" with reconnection in "+this.B()+" ms"),To(this,2))};
function $o(a,b){b&&(Uo(a),Wo(a));b==Zo(a)?b&&(To(a,1),Yo(a,"getSubtitlesTrack")):b?(a.P()&&a.D.reset(),To(a,1),Yo(a,"getNowPlaying"),ap(a)):a.o(1)}
function bp(a,b){var c=b.f.videoId;delete b.f.videoId;c==a.D.f&&(ob(b.f)?a.D.o=null:a.D.o=b.f,a.F("remotePlayerChange"))}
function cp(a,b){var c=b.f.videoId||b.f.video_id,d=parseInt(b.f.currentIndex,10);a.D.j=b.f.listId||a.D.j;var e=a.D,f=e.f;e.f=c;e.index=d;c!=f&&Lo(e);a.F("remoteQueueChange")}
function dp(a,b){b.f=b.f||{};cp(a,b);ep(a,b)}
function ep(a,b){var c=parseInt(b.f.currentTime||b.f.current_time,10),d=a.D;d.A=isNaN(c)?0:c;d.K=x();c=parseInt(b.f.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.D.l&&(c=-1E3);a.D.l=c;1==a.D.l?Xo(a):Vo(a);a.F("remotePlayerChange")}
function fp(a,b){var c="true"==b.f.muted;a.D.C=parseInt(b.f.volume,10);a.D.B=c;a.F("remotePlayerChange")}
g.Qd=function(a){a.f?this.H("Received: action="+a.h+", params="+M(a.f)):this.H("Received: action="+a.h+" {}");switch(a.h){case "loungeStatus":a=yd(a.f.devices);this.h=A(a,function(a){return new uk(a)});
a=!!Oa(this.h,function(a){return"LOUNGE_SCREEN"==a.type});
$o(this,a);break;case "loungeScreenConnected":$o(this,!0);break;case "loungeScreenDisconnected":Ua(this.h,function(a){return"LOUNGE_SCREEN"==a.type});
$o(this,!1);break;case "remoteConnected":var b=new uk(yd(a.f.device));Oa(this.h,function(a){return a.equals(b)})||Sa(this.h,b);
break;case "remoteDisconnected":b=new uk(yd(a.f.device));Ua(this.h,function(a){return a.equals(b)});
break;case "gracefulDisconnect":break;case "playlistModified":cp(this,a);break;case "nowPlaying":dp(this,a);break;case "onStateChange":ep(this,a);break;case "onVolumeChanged":fp(this,a);break;case "onSubtitlesTrackChanged":bp(this,a);break;default:this.H("Unrecognized action: "+a.h)}};
g.Rd=function(a){a.f?this.H("Received: action="+a.h+", params="+M(a.f)):this.H("Received: action="+a.h);gp(this,a);hp(this,a);if(Zo(this)){var b=this.D.clone(),c=!1,d,e,f,h,k,l;a.f&&(d=a.f.videoId||a.f.video_id,e=a.f.videoIds||a.f.video_ids,f=a.f.state,h=a.f.currentTime||a.f.current_time,k=a.f.volume,l=a.f.muted,p(a.f.currentError)&&yd(a.f.currentError));if("onSubtitlesTrackChanged"==a.h)d==Mo(this.D)&&(delete a.f.videoId,ob(a.f)?this.D.o=null:this.D.o=a.f,this.F("remotePlayerChange"));else if(Mo(this.D)||
"onStateChange"!=a.h){"playlistModified"!=a.h&&"nowPlayingPlaylist"!=a.h||e?(d||"nowPlaying"!=a.h&&"nowPlayingPlaylist"!=a.h?d||(d=Mo(this.D)):Oo(this.D,""),e&&(e=e.split(","),Po(this.D,e,d))):Po(this.D,[]);e=this.D;var n=d;Ko(e,"add");n&&!B(e.h,n)?(e.h.push(n),e=!0):e=!1;e&&Yo(this,"getPlaylist");d&&Oo(this.D,d);b.index==this.D.index&&$a(b.h,this.D.h)?"playlistModified"!=a.h&&"nowPlayingPlaylist"!=a.h||this.F("remoteQueueChange"):this.F("remoteQueueChange");p(f)&&(a=parseInt(f,10),a=isNaN(a)?-1:
a,-1==a&&-1E3==this.D.l&&(a=-1E3),0==a&&"0"==h&&(a=-1),c=c||a!=this.D.l,this.D.l=a,1==this.D.l?Xo(this):Vo(this));h&&(a=parseInt(h,10),c=this.D,c.A=isNaN(a)?0:a,c.K=x(),c=!0);p(k)&&(a=parseInt(k,10),isNaN(a)||(c=c||this.D.C!=a,this.D.C=a),p(l)&&(l="true"==l,c=c||this.D.B!=l,this.D.B=l));c&&this.F("remotePlayerChange")}}};
function gp(a,b){switch(b.h){case "loungeStatus":var c=yd(b.f.devices);a.h=A(c,function(a){return new uk(a)});
break;case "loungeScreenDisconnected":Ua(a.h,function(a){return"LOUNGE_SCREEN"==a.type});
break;case "remoteConnected":var d=new uk(yd(b.f.device));Oa(a.h,function(a){return a.equals(d)})||Sa(a.h,d);
break;case "remoteDisconnected":d=new uk(yd(b.f.device)),Ua(a.h,function(a){return a.equals(d)})}}
function hp(a,b){var c=!1;if("loungeStatus"==b.h)c=!!Oa(a.h,function(a){return"LOUNGE_SCREEN"==a.type});
else if("loungeScreenConnected"==b.h)c=!0;else if("loungeScreenDisconnected"==b.h)c=!1;else return;if(!isNaN(a.L))if(c)Wo(a);else return;c==Zo(a)?c&&To(a,1):c?(Uo(a),a.P()&&a.D.reset(),To(a,1),Yo(a,"getNowPlaying"),ap(a)):a.o(1)}
g.we=function(){if(this.j){var a=this.j;this.j=null;this.D.f!=a&&Yo(this,"getNowPlaying")}};
Y.prototype.subscribe=Y.prototype.subscribe;Y.prototype.unsubscribeByKey=Y.prototype.oa;Y.prototype.ua=function(){var a=3;this.isDisposed()||(a=0,isNaN(this.B())?Zo(this)&&(a=1):a=2);return a};
Y.prototype.getProxyState=Y.prototype.ua;Y.prototype.o=function(a){this.H("Disconnecting with "+a);Uo(this);this.F("beforeDisconnect",a);1==a&&Nk();Go(this.f,a);this.dispose()};
Y.prototype.disconnect=Y.prototype.o;Y.prototype.ta=function(){var a=this.D;if(this.j){var b=a=this.D.clone(),c=this.j,d=a.index,e=b.f;b.f=c;b.index=d;c!=e&&Lo(b)}return Qo(a)};
Y.prototype.getPlayerContextData=Y.prototype.ta;Y.prototype.Ba=function(a){var b=new Jo(a);b.f&&b.f!=this.D.f&&(this.j=b.f,J(this.C),this.C=I(w(this.we,this),5E3));var c=[];this.D.j==b.j&&this.D.f==b.f&&this.D.index==b.index&&$a(this.D.h,b.h)||c.push("remoteQueueChange");this.D.l==b.l&&this.D.C==b.C&&this.D.B==b.B&&No(this.D)==No(b)&&M(this.D.o)==M(b.o)||c.push("remotePlayerChange");this.D.reset(a);z(c,function(a){this.F(a)},this)};
Y.prototype.setPlayerContextData=Y.prototype.Ba;Y.prototype.qa=function(){return this.f.l.loungeIdToken};
Y.prototype.getLoungeToken=Y.prototype.qa;Y.prototype.P=function(){var a=this.f.l.id,b=Oa(this.h,function(b){return"REMOTE_CONTROL"==b.type&&b.id!=a});
return b?b.id:""};
Y.prototype.getOtherConnectedRemoteId=Y.prototype.P;Y.prototype.B=function(){var a=this.f;return a.h.za?a.h.A-x():NaN};
Y.prototype.getReconnectTimeout=Y.prototype.B;Y.prototype.$a=function(){if(!isNaN(this.B())){var a=this.f.h;a.za&&(a.stop(),a.Fa(),a.B())}};
Y.prototype.reconnect=Y.prototype.$a;function ap(a){J(a.J);a.J=I(w(a.o,a,1),864E5)}
function Yo(a,b,c){c?a.H("Sending: action="+b+", params="+M(c)):a.H("Sending: action="+b);a.f.sendMessage(b,c)}
Y.prototype.va=function(a,b){Yo(this,a,b);ap(this)};
Y.prototype.sendMessage=Y.prototype.va;function ip(a){U.call(this);this.o=0;this.ka=jp();this.cb=NaN;this.zb="";this.A=a;this.H("Initializing local screens: "+Wj(this.ka));this.j=kp();this.H("Initializing account screens: "+Wj(this.j));this.Rb=null;this.f=[];this.h=[];lp(this,em()||[]);this.H("Initializing DIAL devices: "+dk(this.h));a=Uj(Jk());mp(this,a);this.H("Initializing online screens: "+Wj(this.f));this.o=x()+3E5;np(this)}
y(ip,U);var op=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g=ip.prototype;g.H=function(a){Lj("RM",a)};
g.N=function(a){Lj("RM",a)};
function kp(){var a=jp(),b=Uj(Jk());return La(b,function(b){return!lk(a,b)})}
function jp(){var a=Uj(Fk());return La(a,function(a){return!a.uuid})}
function np(a){xc("yt-remote-cast-device-list-update",function(){var a=em();lp(this,a||[])},a);
xc("yt-remote-cast-device-status-update",a.He,a);a.Rc();var b=x()>a.o?2E4:1E4;nc(w(a.Rc,a),b)}
g.F=function(a,b){if(this.isDisposed())return!1;this.H("Firing "+a);return this.l.F.apply(this.l,arguments)};
g.Rc=function(){var a=em()||[];0==a.length||lp(this,a);a=pp(this);0==a.length||(Ma(a,function(a){return!lk(this.j,a)},this)&&Hk()?qp(this):rp(this,a))};
function sp(a,b){var c=pp(a);return La(b,function(a){return a.uuid?(a=kk(this.h,a.uuid),!!a&&"RUNNING"==a.status):!!lk(c,a)},a)}
function lp(a,b){var c=!1;z(b,function(a){var b=mk(this.ka,a.id);b&&b.name!=a.name&&(this.H("Renaming screen id "+b.id+" from "+b.name+" to "+a.name),b.name=a.name,c=!0)},a);
c&&(a.H("Renaming due to DIAL."),tp(a));Kk(hk(b));var d=!$a(a.h,b,jk);d&&a.H("Updating DIAL devices: "+dk(a.h)+" to "+dk(b));a.h=b;mp(a,a.f);d&&a.F("onlineReceiverChange")}
g.He=function(a){var b=kk(this.h,a.id);b&&(this.H("Updating DIAL device: "+b.id+"("+b.name+") from status: "+b.status+" to status: "+a.status+" and from activityId: "+b.f+" to activityId: "+a.f),b.f=a.f,b.status=a.status,Kk(hk(this.h)));mp(this,this.f)};
function mp(a,b,c){var d=sp(a,b),e=!$a(a.f,d,Rj);if(e||c)0==b.length||Ik(A(d,Sj));e&&(a.H("Updating online screens: "+Wj(a.f)+" -> "+Wj(d)),a.f=d,a.F("onlineReceiverChange"))}
function rp(a,b){var c=[],d={};z(b,function(a){a.token&&(d[a.token]=a,c.push(a.token))});
var e={method:"POST",R:{lounge_token:c.join(",")},context:a,ca:function(a,b){var c=[];z(b.screens||[],function(a){"online"==a.status&&c.push(d[a.loungeToken])});
var e=this.Rb?up(this,this.Rb):null;e&&!lk(c,e)&&c.push(e);mp(this,c,!0)}};
Zd(Zj(a.A,"/pairing/get_screen_availability"),e)}
function qp(a){var b=pp(a),c=A(b,function(a){return a.id});
0!=c.length&&(a.H("Updating lounge tokens for: "+M(c)),Zd(Zj(a.A,"/pairing/get_lounge_token_batch"),{R:{screen_ids:c.join(",")},method:"POST",context:a,ca:function(a,c){vp(this,c.screens||[]);this.ka=La(this.ka,function(a){return!!a.token});
tp(this);rp(this,b)}}))}
function vp(a,b){z(Va(a.ka,a.j),function(a){var d=Oa(b,function(b){return a.id==b.screenId});
d&&(a.token=d.loungeToken)})}
function tp(a){var b=jp();$a(a.ka,b,Rj)||(a.H("Saving local screens: "+Wj(b)+" to "+Wj(a.ka)),Ek(A(a.ka,Sj)),mp(a,a.f,!0),lp(a,em()||[]),a.F("managedScreenChange",pp(a)))}
function wp(a,b,c){var d=Pa(b,function(a){return Qj(c,a)}),e=0>d;
0>d?b.push(c):b[d]=c;lk(a.f,c)||a.f.push(c);return e}
g.Ac=function(a,b){for(var c=pp(this),c=A(c,function(a){return a.name}),d=a,e=2;B(c,d);)d=b.call(m,e),e++;
return d};
g.Pc=function(a,b,c){var d=!1;b>=op.length&&(this.H("Pairing DIAL device "+a+" with "+c+" timed out."),d=!0);var e=kk(this.h,a);if(!e)this.H("Pairing DIAL device "+a+" with "+c+" failed: no device for "+a),d=!0;else if("ERROR"==e.status||"STOPPED"==e.status)this.H("Pairing DIAL device "+a+" with "+c+" failed: launch error on "+a),d=!0;d?(xp(this),this.F("screenPair",null)):Zd(Zj(this.A,"/pairing/get_screen"),{method:"POST",R:{pairing_code:c},context:this,ca:function(a,b){if(c==this.zb){xp(this);var d=
new Oj(b.screen);d.name=e.name;d.uuid=e.id;this.H("Pairing "+c+" succeeded.");var l=wp(this,this.ka,d);this.H("Paired with "+(l?"a new":"an old")+" local screen:"+Vj(d));tp(this);this.F("screenPair",d)}},
onError:function(){c==this.zb&&(this.H("Polling pairing code: "+c),J(this.cb),this.cb=I(w(this.Pc,this,a,b+1,c),op[b]))}})};
function yp(a,b,c){var d=Z,e="";xp(d);if(kk(d.h,a)){if(!e){var f=e=ek();Yl();var h=gm(a),k=Vl();if(k&&h){var l=new cast.Receiver(h.id,h.name),l=new cast.LaunchRequest("YouTube",l);l.parameters="pairingCode="+f;l.description=new cast.LaunchDescription;l.description.text=document.title;b&&(l.parameters+="&v="+b,c&&(l.parameters+="&t="+Math.round(c)),l.description.url="http://i.ytimg.com/vi/"+b+"/default.jpg");"UNKNOWN"!=h.status&&(h.status="UNKNOWN",cm(h),K("yt-remote-cast-device-status-update",h));
Tl("Sending a cast launch request with params: "+l.parameters);k.launch(l,pa(hm,a))}else Tl("No cast API or no cast device. Dropping cast launch.")}d.zb=e;d.cb=I(w(d.Pc,d,a,0,e),op[0])}else d.H("No DIAL device with id: "+a)}
function xp(a){J(a.cb);a.cb=NaN;a.zb=""}
function up(a,b){var c=mk(pp(a),b);a.H("Found screen: "+Vj(c)+" with key: "+b);return c}
function zp(a){var b=Z,c=mk(b.f,a);b.H("Found online screen: "+Vj(c)+" with key: "+a);return c}
function Ap(a){var b=Z,c=kk(b.h,a);if(!c){var d=mk(b.ka,a);d&&(c=kk(b.h,d.uuid))}b.H("Found DIAL: "+(c?c.toString():"null")+" with key: "+a);return c}
function pp(a){return Va(a.j,La(a.ka,function(a){return!lk(this.j,a)},a))}
;function Bp(a){nk.call(this,"ScreenServiceProxy");this.X=a;this.h=[];this.h.push(this.X.$_s("screenChange",w(this.Pe,this)));this.h.push(this.X.$_s("onlineScreenChange",w(this.Yd,this)))}
y(Bp,nk);g=Bp.prototype;g.$=function(a){return this.X.$_gs(a)};
g.contains=function(a){return!!this.X.$_c(a)};
g.get=function(a){return this.X.$_g(a)};
g.Za=function(){this.X.$_st()};
g.Kb=function(a,b,c){this.X.$_a(a,b,c)};
g.remove=function(a,b,c){this.X.$_r(a,b,c)};
g.Hb=function(a,b,c,d){this.X.$_un(a,b,c,d)};
g.G=function(){for(var a=0,b=this.h.length;a<b;++a)this.X.$_ubk(this.h[a]);this.h.length=0;this.X=null;Bp.I.G.call(this)};
g.Pe=function(){this.F("screenChange")};
g.Yd=function(){this.F("onlineScreenChange")};
V.prototype.$_st=V.prototype.Za;V.prototype.$_gspc=V.prototype.Qe;V.prototype.$_gsppc=V.prototype.ad;V.prototype.$_c=V.prototype.contains;V.prototype.$_g=V.prototype.get;V.prototype.$_a=V.prototype.Kb;V.prototype.$_un=V.prototype.Hb;V.prototype.$_r=V.prototype.remove;V.prototype.$_gs=V.prototype.$;V.prototype.$_gos=V.prototype.$c;V.prototype.$_s=V.prototype.subscribe;V.prototype.$_ubk=V.prototype.oa;function Cp(){var a=!!H("MDX_ENABLE_CASTV2"),b=!!H("MDX_ENABLE_QUEUE"),c={device:"Desktop",app:"youtube-desktop"};a?q("yt.mdx.remote.castv2_",!0,void 0):Yl();hj&&gj();wk();Dp||(Dp=new Yj,Ok()&&(Dp.f="/api/loungedev"));Z||a||(Z=new ip(Dp),Z.subscribe("screenPair",Ep),Z.subscribe("managedScreenChange",Fp),Z.subscribe("onlineReceiverChange",function(){K("yt-remote-receiver-availability-change")}));
Gp||(Gp=r("yt.mdx.remote.deferredProxies_")||[],q("yt.mdx.remote.deferredProxies_",Gp,void 0));Hp(b);b=Ip();if(a&&!b){var d=new V(Dp);q("yt.mdx.remote.screenService_",d,void 0);b=Ip();yl(d,function(a){a?Jp()&&Rl(Jp(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){K("yt-remote-receiver-availability-change")})},!(!c||!c.loadCastApiSetupScript))}if(c&&!r("yt.mdx.remote.initialized_")){q("yt.mdx.remote.initialized_",!0,void 0);
Kp("Initializing: "+M(c));Lp.push(xc("yt-remote-cast2-availability-change",function(){K("yt-remote-receiver-availability-change")}));
Lp.push(xc("yt-remote-cast2-receiver-selected",function(){Mp(null);K("yt-remote-auto-connect","cast-selector-receiver")}));
Lp.push(xc("yt-remote-cast2-session-change",Np));Lp.push(xc("yt-remote-connection-change",function(a){a?Rl(Jp(),"YouTube TV"):Op()||(Rl(null,null),Nl())}));
var e=Pp();c.isAuto&&(e.id+="#dial");e.name=c.device;e.app=c.app;Kp(" -- with channel params: "+M(e));Qp(e);a&&b.Za();Jp()||Rp()}}
function Sp(){zc(Lp);Lp.length=0;F(Tp);Tp=null;Gp&&(z(Gp,function(a){a(null)}),Gp.length=0,Gp=null,q("yt.mdx.remote.deferredProxies_",null,void 0));
Z&&(F(Z),Z=null);Dp=null;bm()}
function Up(){if(Vp()&&Ll()){var a=[];if(jj("yt-remote-cast-available")||r("yt.mdx.remote.cloudview.castButtonShown_")||Wp())a.push({key:"cast-selector-receiver",name:Xp()}),q("yt.mdx.remote.cloudview.castButtonShown_",!0,void 0);return a}return r("yt.mdx.remote.cloudview.initializing_")?[]:Yp()}
function Yp(){var a=[],a=Zp()?Ip().X.$_gos():Uj(Jk()),b=$p();b&&Wp()&&(lk(a,b)||a.push(b));Zp()||(b=ik(Lk()),b=La(b,function(b){return!mk(a,b.id)}),a=Va(a,b));
return gk(a)}
function aq(){if(Vp()&&Ll()){var a=Ml();return a?{key:"cast-selector-receiver",name:a}:null}return bq()}
function bq(){var a=Yp(),b=cq(),c=$p();c||(c=Op());return Oa(a,function(a){return c&&Pj(c,a.key)||b&&(a=Ap(a.key))&&a.id==b?!0:!1})}
function Xp(){if(Vp()&&Ll())return Ml();var a=$p();return a?a.name:null}
function $p(){var a=Jp();if(!a)return null;if(!Z){var b=Ip().$();return mk(b,a)}return up(Z,a)}
function Np(a){Kp("remote.onCastSessionChange_: "+Vj(a));if(a){var b=$p();b&&b.id==a.id?Rl(b.id,"YouTube TV"):(b&&dq(),eq(a,1))}else dq()}
function fq(a,b){Kp("Connecting to: "+M(a));if("cast-selector-receiver"==a.key)Mp(b||null),Ql(b||null);else{dq();Mp(b||null);var c=null;Z?c=zp(a.key):(c=Ip().$(),c=mk(c,a.key));if(c)eq(c,1);else{if(Z&&(c=Ap(a.key))){gq(c);return}I(function(){hq(null)},0)}}}
function dq(){Z&&xp(Z);a:{var a=Wp();if(a&&(a=a.getOtherConnectedRemoteId())){Kp("Do not stop DIAL due to "+a);iq("");break a}(a=cq())?(Kp("Stopping DIAL: "+a),im(a),iq("")):(a=$p())&&a.uuid&&(Kp("Stopping DIAL: "+a.uuid),im(a.uuid))}Pl()?Hl().stopSession():El("stopSession called before API ready.");(a=Wp())?a.disconnect(1):(Ac("yt-remote-before-disconnect",1),Ac("yt-remote-connection-change",!1));hq(null)}
function Kp(a){Lj("remote",a)}
function Vp(){return!!r("yt.mdx.remote.castv2_")}
function Zp(){return r("yt.mdx.remote.screenService_")}
function Ip(){if(!Tp){var a=Zp();Tp=a?new Bp(a):null}return Tp}
function Jp(){return r("yt.mdx.remote.currentScreenId_")}
function jq(a){q("yt.mdx.remote.currentScreenId_",a,void 0);if(Z){var b=Z;b.o=x()+3E5;if((b.Rb=a)&&(a=up(b,a))&&!lk(b.f,a)){var c=Wa(b.f);c.push(a);mp(b,c,!0)}}}
function cq(){return r("yt.mdx.remote.currentDialId_")}
function iq(a){q("yt.mdx.remote.currentDialId_",a,void 0)}
function kq(){return r("yt.mdx.remote.connectData_")}
function Mp(a){q("yt.mdx.remote.connectData_",a,void 0)}
function Wp(){return r("yt.mdx.remote.connection_")}
function hq(a){var b=Wp();Mp(null);a?Wp():(jq(""),iq(""));q("yt.mdx.remote.connection_",a,void 0);Gp&&(z(Gp,function(b){b(a)}),Gp.length=0);
b&&!a?Ac("yt-remote-connection-change",!1):!b&&a&&K("yt-remote-connection-change",!0)}
function Op(){var a=zk();if(!a)return null;if(Zp()){var b=Ip().$();return mk(b,a)}return Z?up(Z,a):null}
function eq(a,b){Jp();jq(a.id);var c=new Y(Dp,a,Pp());c.connect(b,kq());c.subscribe("beforeDisconnect",function(a){Ac("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){Wp()&&(Wp(),hq(null))});
hq(c)}
function gq(a){cq();Kp("Connecting to: "+(a?a.toString():"null"));iq(a.id);var b=kq();b?yp(a.id,b.videoIds[b.index],b.currentTime):yp(a.id)}
function Rp(){var a=Op();a?(Kp("Resume connection to: "+Vj(a)),eq(a,0)):(Nk(),Nl(),Kp("Skipping connecting because no session screen found."))}
function Ep(a){Kp("Paired with: "+Vj(a));a?eq(a,1):hq(null)}
function Fp(){var a=Jp();a&&!$p()&&(Kp("Dropping current screen with id: "+a),dq());Op()||Nk()}
var Dp=null,Gp=null,Tp=null,Z=null;function Hp(a){var b=Pp();if(ob(b)){var b=yk(),c=jj("yt-remote-session-name")||"",d=jj("yt-remote-session-app")||"",b={device:"REMOTE_CONTROL",id:b,name:c,app:d};a&&(b["mdx-version"]=3);q("yt.mdx.remote.channelParams_",b,void 0)}}
function Pp(){return r("yt.mdx.remote.channelParams_")||{}}
function Qp(a){a?(T("yt-remote-session-app",a.app),T("yt-remote-session-name",a.name)):(kj("yt-remote-session-app"),kj("yt-remote-session-name"));q("yt.mdx.remote.channelParams_",a,void 0)}
var Lp=[];var lq=null,mq=[];function nq(){oq();if(aq()){var a=lq;"html5"!=a.getPlayerType()&&a.loadNewVideoConfig(a.getCurrentVideoConfig(),"html5")}}
function pq(a){"cast-selector-receiver"==a?Ol():qq(a)}
function qq(a){var b=Up();if(a=fk(b,a)){var c=lq,d=c.getVideoData().video_id,e=c.getVideoData().list,f=c.getCurrentTime();fq(a,{videoIds:[d],listId:e,videoId:d,index:0,currentTime:f});"html5"!=c.getPlayerType()?c.loadNewVideoConfig(c.getCurrentVideoConfig(),"html5"):c.updateRemoteReceivers&&c.updateRemoteReceivers(b,a)}}
function oq(){var a=lq;a&&a.updateRemoteReceivers&&a.updateRemoteReceivers(Up(),aq())}
;var rq=null,sq=[];function tq(a){return{Tb:a.externalChannelId,Ld:!!a.isChannelPaid,source:a.source,subscriptionId:a.subscriptionId}}
function uq(a){vq(tq(a))}
function vq(a){ti()?(R(gi,new ai(a.Tb,a.Ld?{itemType:"U",itemId:a.Tb}:null)),(a="/gen_204?"+Nd({event:"subscribe",source:a.source}))&&Qg(a)):wq(a)}
function wq(a){si(function(b){b.subscription_ajax&&vq(a)},null)}
function xq(a){a=tq(a);R(li,new ci(a.Tb,a.subscriptionId,null));(a="/gen_204?"+Nd({event:"unsubscribe",source:a.source}))&&Qg(a)}
function yq(a){rq&&rq.channelSubscribed(a.f,a.subscriptionId)}
function zq(a){rq&&rq.channelUnsubscribed(a.f)}
;function Aq(a){E.call(this);this.h=a;this.h.subscribe("command",this.A,this);this.j={};this.l=!1}
y(Aq,E);Aq.prototype.A=function(a,b){if(this.l&&!this.isDisposed()){var c=b||{};switch(a){case "addEventListener":if(v(c.event)&&(c=c.event,!(c in this.j))){var d=w(this.B,this,c);this.j[c]=d;this.addEventListener(c,d)}break;case "removeEventListener":v(c.event)&&Bq(this,c.event);break;default:this.f.isReady()&&this.f[a]&&(c=Cq(a,b||{}),c=this.f[a].apply(this.f,c),(c=Dq(a,c))&&this.l&&!this.isDisposed()&&Eq(this.h,a,c))}}};
Aq.prototype.B=function(a,b){this.l&&!this.isDisposed()&&Eq(this.h,a,this.o(a,b))};
Aq.prototype.o=function(a,b){if(null!=b)return{value:b}};
function Bq(a,b){b in a.j&&(a.removeEventListener(b,a.j[b]),delete a.j[b])}
Aq.prototype.G=function(){this.h.unsubscribe("command",this.A,this);this.h=null;for(var a in this.j)Bq(this,a);Aq.I.G.call(this)};function Fq(a,b){Aq.call(this,b);this.f=a;this.l||this.isDisposed()||(this.l=!0,Eq(this.h,"RECEIVING"))}
y(Fq,Aq);Fq.prototype.addEventListener=function(a,b){this.f.addEventListener(a,b)};
Fq.prototype.removeEventListener=function(a,b){this.f.removeEventListener(a,b)};
function Cq(a,b){switch(a){case "loadVideoById":return b=pj(b),rj(b),[b];case "cueVideoById":return b=pj(b),rj(b),[b];case "loadVideoByPlayerVars":return rj(b),[b];case "cueVideoByPlayerVars":return rj(b),[b];case "loadPlaylist":return b=qj(b),rj(b),[b];case "cuePlaylist":return b=qj(b),rj(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function Dq(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Fq.prototype.o=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Fq.I.o.call(this,a,b)};
Fq.prototype.G=function(){Fq.I.G.call(this);delete this.f};function Gq(){var a=this.h=new Si,b=w(this.ue,this);a.h=b;a.j=null;this.l=[];this.A=!1;this.o={}}
g=Gq.prototype;g.ue=function(a,b){if("addEventListener"==a&&b){var c=b[0];this.o[c]||"onReady"==c||(this.addEventListener(c,Hq(this,c)),this.o[c]=!0)}else this.ed(a,b)};
g.ed=function(){};
function Hq(a,b){return w(function(a){this.sendMessage(b,a)},a)}
g.addEventListener=function(){};
g.Bd=function(){this.A=!0;this.sendMessage("initialDelivery",this.Ub());this.sendMessage("onReady");z(this.l,this.fd,this);this.l=[]};
g.Ub=function(){return null};
function Iq(a,b){a.sendMessage("infoDelivery",b)}
g.fd=function(a){this.A?this.h.sendMessage(a):this.l.push(a)};
g.sendMessage=function(a,b){this.fd({event:a,info:void 0==b?null:b})};
g.dispose=function(){this.h=null};function Jq(a){Gq.call(this);this.f=a;this.j=[];this.addEventListener("onReady",w(this.ce,this));this.addEventListener("onVideoProgress",w(this.Be,this));this.addEventListener("onVolumeChange",w(this.Ce,this));this.addEventListener("onApiChange",w(this.xe,this));this.addEventListener("onPlaybackQualityChange",w(this.ye,this));this.addEventListener("onPlaybackRateChange",w(this.ze,this));this.addEventListener("onStateChange",w(this.Ae,this))}
y(Jq,Gq);g=Jq.prototype;g.ed=function(a,b){if(this.f[a]){b=b||[];if(0<b.length&&nj(a)){var c;c=b;if(ia(c[0])&&!da(c[0]))c=c[0];else{var d={};switch(a){case "loadVideoById":case "cueVideoById":d=pj.apply(window,c);break;case "loadVideoByUrl":case "cueVideoByUrl":d=oj.apply(window,c);break;case "loadPlaylist":case "cuePlaylist":d=qj.apply(window,c)}c=d}rj(c);b.length=1;b[0]=c}this.f[a].apply(this.f,b);nj(a)&&Iq(this,this.Ub())}};
g.ce=function(){var a=w(this.Bd,this);this.h.f=a};
g.addEventListener=function(a,b){this.j.push({yd:a,listener:b});this.f.addEventListener(a,b)};
g.Ub=function(){if(!this.f)return null;var a=this.f.getApiInterface();Ta(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){var f=e,h=0;0==f.search("get")?h=3:0==f.search("is")&&(h=2);f=f.charAt(h).toLowerCase()+f.substr(h+1);try{var k=this.f[e]();b[f]=k}catch(l){}}}b.videoData=this.f.getVideoData();return b};
g.Ae=function(a){a={playerState:a,currentTime:this.f.getCurrentTime(),duration:this.f.getDuration(),videoData:this.f.getVideoData(),videoStartBytes:0,videoBytesTotal:this.f.getVideoBytesTotal(),videoLoadedFraction:this.f.getVideoLoadedFraction(),playbackQuality:this.f.getPlaybackQuality(),availableQualityLevels:this.f.getAvailableQualityLevels(),videoUrl:this.f.getVideoUrl(),playlist:this.f.getPlaylist(),playlistIndex:this.f.getPlaylistIndex()};this.f.getProgressState&&(a.progressState=this.f.getProgressState());
this.f.getStoryboardFormat&&(a.storyboardFormat=this.f.getStoryboardFormat());Iq(this,a)};
g.ye=function(a){Iq(this,{playbackQuality:a})};
g.ze=function(a){Iq(this,{playbackRate:a})};
g.xe=function(){for(var a=this.f.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.f.getOptions(e);b[e]={options:f};for(var h=0,k=f.length;h<k;h++){var l=f[h],n=this.f.getOption(e,l);b[e][l]=n}}this.sendMessage("apiInfoDelivery",b)};
g.Ce=function(){Iq(this,{muted:this.f.isMuted(),volume:this.f.getVolume()})};
g.Be=function(a){a={currentTime:a,videoBytesLoaded:this.f.getVideoBytesLoaded(),videoLoadedFraction:this.f.getVideoLoadedFraction()};this.f.getProgressState&&(a.progressState=this.f.getProgressState());Iq(this,a)};
g.dispose=function(){Jq.I.dispose.call(this);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.f.removeEventListener(b.yd,b.listener)}this.j=[]};function Kq(a,b,c){U.call(this);this.f=a;this.h=b;this.j=c}
y(Kq,U);function Eq(a,b,c){if(!a.isDisposed()){var d=a.f,e=a.h;a=a.j;d.isDisposed()||e!=d.f||(b={id:a,command:b},c&&(b.data=c),d.f.postMessage(M(b),d.j))}}
Kq.prototype.G=function(){this.h=this.f=null;Kq.I.G.call(this)};function Lq(a,b,c){E.call(this);this.f=a;this.j=c;this.l=N(window,"message",w(this.o,this));this.h=new Kq(this,a,b);fc(this,pa(F,this.h))}
y(Lq,E);Lq.prototype.o=function(a){var b;if(b=!this.isDisposed())if(b=a.origin==this.j)a:{b=this.f;do{var c;b:{c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(c=a.data,v(c))){try{c=yd(c)}catch(d){return}c.command&&(a=this.h,b=c.command,c=c.data,a.isDisposed()||a.F("command",b,c))}};
Lq.prototype.G=function(){Ve(this.l);this.f=null;Lq.I.G.call(this)};var Mq=!1;function Nq(a){if(a=a.match(/[\d]+/g))a.length=3,a.join(".")}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(Mq=!0,a.description)){Nq(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){Mq=!0;return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],Mq=!!a&&a.enabledPlugin)){Nq(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");Mq=!0;Nq(b.GetVariable("$version"));return}catch(c){}try{b=
new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");Mq=!0;return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),Mq=!0,Nq(b.GetVariable("$version"))}catch(c){}})();function Oq(a){return(a=a.exec(vb))?a[1]:""}
(function(){if(yf)return Oq(/Firefox\/([0-9.]+)/);if(L||id||hd)return sd;if(Cf)return Oq(/Chrome\/([0-9.]+)/);if(Df&&!(gd()||C("iPad")||C("iPod")))return Oq(/Version\/([0-9.]+)/);if(zf||Af){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(vb);if(a)return a[1]+"."+a[2]}else if(Bf)return(a=Oq(/Android\s+([0-9.]+)/))?a:Oq(/Version\/([0-9.]+)/);return""})();function Pq(){var a={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0};return new Rm(function(b,c){a.ca=function(a){Ud(a)?b(a):c(a)};
a.onError=c;a.kb=c;Zd("//googleads.g.doubleclick.net/pagead/id",a)})}
;var Qq=null;function Rq(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))return Sq(""),"";a=JSON.parse(a.substr(4)).id;Sq(a);return a}
function Tq(){I(function(){Qq=null},3E5)}
function Sq(a){q("yt.www.ads.biscotti.lastId_",a,void 0)}
;function Uq(){}
;function Vq(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&(c=c.data.follow_on_url)&&Qg(c)}}
;function Wq(a){P.call(this,1,arguments);this.Ob=a}
y(Wq,P);function Xq(a,b){P.call(this,2,arguments);this.h=a;this.f=b}
y(Xq,P);function Yq(a,b,c,d){P.call(this,1,arguments);this.f=b;this.j=c||null;this.h=d||null}
y(Yq,P);function Zq(a,b){P.call(this,1,arguments);this.h=a;this.f=b||null}
y(Zq,P);function $q(a){P.call(this,1,arguments)}
y($q,P);var ar=new Q("ypc-core-load",Wq),br=new Q("ypc-guide-sync-success",Xq),cr=new Q("ypc-purchase-success",Yq),dr=new Q("ypc-subscription-cancel",$q),er=new Q("ypc-subscription-cancel-success",Zq),fr=new Q("ypc-init-subscription",$q);var gr=!1,hr=[],ir=[];function jr(a){a.f?gr?R(ki,a):R(ar,new Wq(function(){R(fr,new $q(a.f))})):kr(a.h,a.l,a.j,a.source)}
function lr(a){a.f?gr?R(pi,a):R(ar,new Wq(function(){R(dr,new $q(a.f))})):mr(a.h,a.subscriptionId,a.l,a.j,a.source)}
function nr(a){or(Wa(a.f))}
function pr(a){qr(Wa(a.f))}
function rr(a){sr(a.f,a.h,null)}
function tr(a,b,c,d){sr(a,b,c,d)}
function ur(a){var b=a.h,c=a.f.subscriptionId;b&&c&&R(ji,new bi(b,c,a.f.channelInfo))}
function vr(a){var b=a.f;cb(a.h,function(a,d){R(ji,new bi(d,a,b[d]))})}
function wr(a){R(oi,new Zh(a.h.itemId));a.f&&a.f.length&&(xr(a.f,oi),xr(a.f,qi))}
function kr(a,b,c,d){var e=new Zh(a);R(hi,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=H("PLAYBACK_ID"))&&(c.plid=d);(d=H("EVENT_ID"))&&(c.ei=d);b&&yr(b,c);Zd("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",hc:f,R:c,ca:function(b,c){var d=c.response;R(ji,new bi(a,d.id,d.channel_info));d.show_feed_privacy_dialog&&K("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a);d.actions&&Vq(d.actions)},
cc:function(){R(ii,e)}})}
function mr(a,b,c,d,e){var f=new Zh(a);R(mi,f);var h={};d&&(h.eurl=d);e&&(h.source=e);d={};d.c=a;d.s=b;(a=H("PLAYBACK_ID"))&&(d.plid=a);(a=H("EVENT_ID"))&&(d.ei=a);c&&yr(c,d);Zd("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",hc:h,R:d,ca:function(a,b){var c=b.response;R(oi,f);c.actions&&Vq(c.actions)},
cc:function(){R(ni,f)}})}
function sr(a,b,c,d){if(null!==b||null!==c){var e={};a&&(e.channel_id=a);null===b||(e.email_on_upload=b);null===c||(e.receive_no_updates=c);Zd("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",R:e,onError:function(){d&&d()}})}}
function or(a){if(a.length){var b=Ya(a,0,40);R("subscription-batch-subscribe-loading");xr(b,hi);var c={};c.a=b.join(",");var d=function(){R("subscription-batch-subscribe-loaded");xr(b,ii)};
Zd("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",R:c,ca:function(c,f){d();var h=f.response,k=h.id;if(da(k)&&k.length==b.length){var l=h.channel_info_map;z(k,function(a,c){var d=b[c];R(ji,new bi(d,a,l[d]))});
a.length?or(a):R("subscription-batch-subscribe-finished")}},
onError:function(){d();R("subscription-batch-subscribe-failure")}})}}
function qr(a){if(a.length){var b=Ya(a,0,40);R("subscription-batch-unsubscribe-loading");xr(b,mi);var c={};c.c=b.join(",");var d=function(){R("subscription-batch-unsubscribe-loaded");xr(b,ni)};
Zd("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",R:c,ca:function(){d();xr(b,oi);a.length&&qr(a)},
onError:function(){d()}})}}
function xr(a,b){z(a,function(a){R(b,new Zh(a))})}
function yr(a,b){var c=Qd(a),d;for(d in c)b[d]=c[d]}
;var zr,Ar=null,Br=null,Cr=null,Dr=!1;
function Er(){var a=H("PLAYER_CONFIG",void 0),b=H("REVERSE_MOBIUS_PERCENT",void 0);if(fg&&"1"!=a.privembed&&100*Math.random()<b)try{var c;try{var d=r("yt.www.ads.biscotti.getId_"),e;if(d)e=d();else{if(!Qq){var f=Pq().then(Rq),h=Vm(Tq,Tq,void 0);h.j=!0;bn(f,h);Qq=f}e=Qq}c=e}catch(k){c=Wm(k)}Xm(c,null,Uq,void 0)}catch(k){oc(k)}if(H("REQUEST_POST_MESSAGE_ORIGIN")){if(!zr){zr=new Si;zr.f=Er;return}zr.origin&&"*"!=zr.origin&&(a.args.post_message_origin=zr.origin)}d=document.referrer;b=H("POST_MESSAGE_ORIGIN");
c=!1;v(d)&&v(b)&&-1<d.indexOf(b)&&Lg(b)&&Lg(d)&&(c=!0);window!=window.top&&d&&d!=document.URL&&(a.args.loaderUrl=d);H("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&rj(a.args);Ar=Mh("player",a);d=H("POST_MESSAGE_ID","player");H("ENABLE_JS_API")?Cr=new Jq(Ar):H("ENABLE_POST_API")&&v(d)&&v(b)&&(Br=new Lq(window.parent,d,b),Cr=new Fq(Ar,Br.h));(Dr=c&&!H("ENABLE_CAST_API"))?a.args.disableCast="1":(a=Ar,Cp(),lq=a,lq.addEventListener("onReady",nq),lq.addEventListener("onRemoteReceiverSelected",
pq),mq.push(xc("yt-remote-receiver-availability-change",oq)),mq.push(xc("yt-remote-auto-connect",qq)));H("BG_P")&&(H("BG_I")||H("BG_IU"))&&Mc();ie();rq=Ar;rq.addEventListener("SUBSCRIBE",uq);rq.addEventListener("UNSUBSCRIBE",xq);sq.push(Yg(ji,yq),Yg(oi,zq))}
;q("yt.setConfig",kc,void 0);q("yt.setMsg",function(a){lc(jc,arguments)},void 0);
q("yt.logging.errors.log",function(a,b,c,d,e){c={name:c||"WEB",version:d||H("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0)};e=window&&window.yterr||e;if(a&&e&&!(5<=ee)){e=a.stacktrace;d=a.columnNumber;var f=r("window.location.href");if(v(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:f,stack:"Not available"};else{var h,k,l=!1;try{h=a.lineNumber||a.line||"Not available"}catch(X){h="Not available",l=!0}try{k=a.fileName||a.filename||a.sourceURL||m.$googDebugFname||f}catch(X){k=
"Not available",l=!0}a=!l&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:h,fileName:k,stack:a.stack||"Not available"}}e=e||a.stack;h=a.lineNumber.toString();isNaN(h)||isNaN(d)||(h=h+":"+d);if(!(de[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){b={hc:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:h,level:b||"ERROR"},R:{url:H("PAGE_NAME",window.location.href),file:a.fileName},
method:"POST"};e&&(b.R.stack=e);for(var n in c)b.R["client."+n]=c[n];if(n=H("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var u in n)b.R[u]=n[u];Zd("/error_204",b);de[a.message]=!0;ee++}}},void 0);
q("writeEmbed",Er,void 0);q("yt.www.watch.ads.restrictioncookie.spr",function(a){(a+="mac_204?action_fcts=1")&&Qg(a);return!0},void 0);
var Fr=mc(function(){kh("ol");gr=!0;ir.push(Yg(gi,jr),Yg(li,lr));gr||(ir.push(Yg(ki,jr),Yg(pi,lr),Yg(di,nr),Yg(ei,pr),Yg(fi,rr)),hr.push(xc("subscription-prefs",tr)),ir.push(Yg(cr,ur),Yg(er,wr),Yg(br,vr)));Ef.getInstance();var a=1<window.devicePixelRatio;if(Jf(0,119)!=a){var b="f"+(Math.floor(119/31)+1),c=If(b)||0,c=a?c|67108864:c&-67108865;0==c?delete Ff[b]:(a=c.toString(16),Ff[b]=a.toString());var d,b=[];for(d in Ff)b.push(d+"="+escape(Ff[d]));d=b.join("&");df("PREF",d,63072E3)}}),Gr=mc(function(){var a=
Ar;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();H("PL_ATT")&&(Lc=null);for(var a=0,b=ge.length;a<b;a++){var c=ge[a];if(!isNaN(c)){var d=r("yt.scheduler.instance.cancelJob");d?d(c):J(c)}}ge.length=0;a=Hc("//static.doubleclick.net/instream/ad_status.js");if(b=document.getElementById(a))Cc(a),b.parentNode.removeChild(b);he=!1;kc("DCLKSTAT",0);zc(hr);hr.length=0;Zg(ir);ir.length=0;gr=!1;rq&&(rq.removeEventListener("SUBSCRIBE",vq),rq.removeEventListener("UNSUBSCRIBE",xq));rq=null;Zg(sq);sq.length=0;
Dr||(zc(mq),mq.length=0,lq&&(lq.removeEventListener("onRemoteReceiverSelected",pq),lq.removeEventListener("onReady",nq),lq=null),Sp());gc(Cr,Br);Ar&&Ar.destroy()});
window.addEventListener?(window.addEventListener("load",Fr),window.addEventListener("unload",Gr)):window.attachEvent&&(window.attachEvent("onload",Fr),window.attachEvent("onunload",Gr));var Hr=Mi.getInstance(),Ir=zi(Hr);Ir in Ri||(Hr.register(),Hr.Ab.push(xc("yt-uix-init-"+Ir,Hr.init,Hr)),Hr.Ab.push(xc("yt-uix-dispose-"+Ir,Hr.dispose,Hr)),Ri[Ir]=Hr);})();
