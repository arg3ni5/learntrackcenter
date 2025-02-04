import{L as zu,_ as Gu,C as Ku,r as Ks,F as $u,d as Qu,b as Wu,t as Hu,l as Mt,u as Xu,S as Yu,h as Vt,k as Lo,v as Ju,m as Zu}from"./vendor-firebase-CmWpKus1.js";var $s=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var se,Mo;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,m){function _(){}_.prototype=m.prototype,T.D=m.prototype,T.prototype=new _,T.prototype.constructor=T,T.C=function(y,E,I){for(var g=Array(arguments.length-2),Nt=2;Nt<arguments.length;Nt++)g[Nt-2]=arguments[Nt];return m.prototype[E].apply(y,g)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,m,_){_||(_=0);var y=Array(16);if(typeof m=="string")for(var E=0;16>E;++E)y[E]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(E=0;16>E;++E)y[E]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=T.g[0],_=T.g[1],E=T.g[2];var I=T.g[3],g=m+(I^_&(E^I))+y[0]+3614090360&4294967295;m=_+(g<<7&4294967295|g>>>25),g=I+(E^m&(_^E))+y[1]+3905402710&4294967295,I=m+(g<<12&4294967295|g>>>20),g=E+(_^I&(m^_))+y[2]+606105819&4294967295,E=I+(g<<17&4294967295|g>>>15),g=_+(m^E&(I^m))+y[3]+3250441966&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(I^_&(E^I))+y[4]+4118548399&4294967295,m=_+(g<<7&4294967295|g>>>25),g=I+(E^m&(_^E))+y[5]+1200080426&4294967295,I=m+(g<<12&4294967295|g>>>20),g=E+(_^I&(m^_))+y[6]+2821735955&4294967295,E=I+(g<<17&4294967295|g>>>15),g=_+(m^E&(I^m))+y[7]+4249261313&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(I^_&(E^I))+y[8]+1770035416&4294967295,m=_+(g<<7&4294967295|g>>>25),g=I+(E^m&(_^E))+y[9]+2336552879&4294967295,I=m+(g<<12&4294967295|g>>>20),g=E+(_^I&(m^_))+y[10]+4294925233&4294967295,E=I+(g<<17&4294967295|g>>>15),g=_+(m^E&(I^m))+y[11]+2304563134&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(I^_&(E^I))+y[12]+1804603682&4294967295,m=_+(g<<7&4294967295|g>>>25),g=I+(E^m&(_^E))+y[13]+4254626195&4294967295,I=m+(g<<12&4294967295|g>>>20),g=E+(_^I&(m^_))+y[14]+2792965006&4294967295,E=I+(g<<17&4294967295|g>>>15),g=_+(m^E&(I^m))+y[15]+1236535329&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(E^I&(_^E))+y[1]+4129170786&4294967295,m=_+(g<<5&4294967295|g>>>27),g=I+(_^E&(m^_))+y[6]+3225465664&4294967295,I=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(I^m))+y[11]+643717713&4294967295,E=I+(g<<14&4294967295|g>>>18),g=_+(I^m&(E^I))+y[0]+3921069994&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^I&(_^E))+y[5]+3593408605&4294967295,m=_+(g<<5&4294967295|g>>>27),g=I+(_^E&(m^_))+y[10]+38016083&4294967295,I=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(I^m))+y[15]+3634488961&4294967295,E=I+(g<<14&4294967295|g>>>18),g=_+(I^m&(E^I))+y[4]+3889429448&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^I&(_^E))+y[9]+568446438&4294967295,m=_+(g<<5&4294967295|g>>>27),g=I+(_^E&(m^_))+y[14]+3275163606&4294967295,I=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(I^m))+y[3]+4107603335&4294967295,E=I+(g<<14&4294967295|g>>>18),g=_+(I^m&(E^I))+y[8]+1163531501&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^I&(_^E))+y[13]+2850285829&4294967295,m=_+(g<<5&4294967295|g>>>27),g=I+(_^E&(m^_))+y[2]+4243563512&4294967295,I=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(I^m))+y[7]+1735328473&4294967295,E=I+(g<<14&4294967295|g>>>18),g=_+(I^m&(E^I))+y[12]+2368359562&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(_^E^I)+y[5]+4294588738&4294967295,m=_+(g<<4&4294967295|g>>>28),g=I+(m^_^E)+y[8]+2272392833&4294967295,I=m+(g<<11&4294967295|g>>>21),g=E+(I^m^_)+y[11]+1839030562&4294967295,E=I+(g<<16&4294967295|g>>>16),g=_+(E^I^m)+y[14]+4259657740&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^I)+y[1]+2763975236&4294967295,m=_+(g<<4&4294967295|g>>>28),g=I+(m^_^E)+y[4]+1272893353&4294967295,I=m+(g<<11&4294967295|g>>>21),g=E+(I^m^_)+y[7]+4139469664&4294967295,E=I+(g<<16&4294967295|g>>>16),g=_+(E^I^m)+y[10]+3200236656&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^I)+y[13]+681279174&4294967295,m=_+(g<<4&4294967295|g>>>28),g=I+(m^_^E)+y[0]+3936430074&4294967295,I=m+(g<<11&4294967295|g>>>21),g=E+(I^m^_)+y[3]+3572445317&4294967295,E=I+(g<<16&4294967295|g>>>16),g=_+(E^I^m)+y[6]+76029189&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^I)+y[9]+3654602809&4294967295,m=_+(g<<4&4294967295|g>>>28),g=I+(m^_^E)+y[12]+3873151461&4294967295,I=m+(g<<11&4294967295|g>>>21),g=E+(I^m^_)+y[15]+530742520&4294967295,E=I+(g<<16&4294967295|g>>>16),g=_+(E^I^m)+y[2]+3299628645&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(E^(_|~I))+y[0]+4096336452&4294967295,m=_+(g<<6&4294967295|g>>>26),g=I+(_^(m|~E))+y[7]+1126891415&4294967295,I=m+(g<<10&4294967295|g>>>22),g=E+(m^(I|~_))+y[14]+2878612391&4294967295,E=I+(g<<15&4294967295|g>>>17),g=_+(I^(E|~m))+y[5]+4237533241&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~I))+y[12]+1700485571&4294967295,m=_+(g<<6&4294967295|g>>>26),g=I+(_^(m|~E))+y[3]+2399980690&4294967295,I=m+(g<<10&4294967295|g>>>22),g=E+(m^(I|~_))+y[10]+4293915773&4294967295,E=I+(g<<15&4294967295|g>>>17),g=_+(I^(E|~m))+y[1]+2240044497&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~I))+y[8]+1873313359&4294967295,m=_+(g<<6&4294967295|g>>>26),g=I+(_^(m|~E))+y[15]+4264355552&4294967295,I=m+(g<<10&4294967295|g>>>22),g=E+(m^(I|~_))+y[6]+2734768916&4294967295,E=I+(g<<15&4294967295|g>>>17),g=_+(I^(E|~m))+y[13]+1309151649&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~I))+y[4]+4149444226&4294967295,m=_+(g<<6&4294967295|g>>>26),g=I+(_^(m|~E))+y[11]+3174756917&4294967295,I=m+(g<<10&4294967295|g>>>22),g=E+(m^(I|~_))+y[2]+718787259&4294967295,E=I+(g<<15&4294967295|g>>>17),g=_+(I^(E|~m))+y[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+I&4294967295}n.prototype.u=function(T,m){m===void 0&&(m=T.length);for(var _=m-this.blockSize,y=this.B,E=this.h,I=0;I<m;){if(E==0)for(;I<=_;)s(this,T,I),I+=this.blockSize;if(typeof T=="string"){for(;I<m;)if(y[E++]=T.charCodeAt(I++),E==this.blockSize){s(this,y),E=0;break}}else for(;I<m;)if(y[E++]=T[I++],E==this.blockSize){s(this,y),E=0;break}}this.h=E,this.o+=m},n.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;var _=8*this.o;for(m=T.length-8;m<T.length;++m)T[m]=_&255,_/=256;for(this.u(T),T=Array(16),m=_=0;4>m;++m)for(var y=0;32>y;y+=8)T[_++]=this.g[m]>>>y&255;return T};function o(T,m){var _=c;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=m(T)}function u(T,m){this.h=m;for(var _=[],y=!0,E=T.length-1;0<=E;E--){var I=T[E]|0;y&&I==m||(_[E]=I,y=!1)}this.g=_}var c={};function h(T){return-128<=T&&128>T?o(T,function(m){return new u([m|0],0>m?-1:0)}):new u([T|0],0>T?-1:0)}function f(T){if(isNaN(T)||!isFinite(T))return A;if(0>T)return D(f(-T));for(var m=[],_=1,y=0;T>=_;y++)m[y]=T/_|0,_*=4294967296;return new u(m,0)}function p(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return D(p(T.substring(1),m));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(m,8)),y=A,E=0;E<T.length;E+=8){var I=Math.min(8,T.length-E),g=parseInt(T.substring(E,E+I),m);8>I?(I=f(Math.pow(m,I)),y=y.j(I).add(f(g))):(y=y.j(_),y=y.add(f(g)))}return y}var A=h(0),R=h(1),C=h(16777216);r=u.prototype,r.m=function(){if(x(this))return-D(this).m();for(var T=0,m=1,_=0;_<this.g.length;_++){var y=this.i(_);T+=(0<=y?y:4294967296+y)*m,m*=4294967296}return T},r.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(N(this))return"0";if(x(this))return"-"+D(this).toString(T);for(var m=f(Math.pow(T,6)),_=this,y="";;){var E=rt(_,m).g;_=G(_,E.j(m));var I=((0<_.g.length?_.g[0]:_.h)>>>0).toString(T);if(_=E,N(_))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},r.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function N(T){if(T.h!=0)return!1;for(var m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function x(T){return T.h==-1}r.l=function(T){return T=G(this,T),x(T)?-1:N(T)?0:1};function D(T){for(var m=T.g.length,_=[],y=0;y<m;y++)_[y]=~T.g[y];return new u(_,~T.h).add(R)}r.abs=function(){return x(this)?D(this):this},r.add=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0,E=0;E<=m;E++){var I=y+(this.i(E)&65535)+(T.i(E)&65535),g=(I>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);y=g>>>16,I&=65535,g&=65535,_[E]=g<<16|I}return new u(_,_[_.length-1]&-2147483648?-1:0)};function G(T,m){return T.add(D(m))}r.j=function(T){if(N(this)||N(T))return A;if(x(this))return x(T)?D(this).j(D(T)):D(D(this).j(T));if(x(T))return D(this.j(D(T)));if(0>this.l(C)&&0>T.l(C))return f(this.m()*T.m());for(var m=this.g.length+T.g.length,_=[],y=0;y<2*m;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<T.g.length;E++){var I=this.i(y)>>>16,g=this.i(y)&65535,Nt=T.i(E)>>>16,xe=T.i(E)&65535;_[2*y+2*E]+=g*xe,K(_,2*y+2*E),_[2*y+2*E+1]+=I*xe,K(_,2*y+2*E+1),_[2*y+2*E+1]+=g*Nt,K(_,2*y+2*E+1),_[2*y+2*E+2]+=I*Nt,K(_,2*y+2*E+2)}for(y=0;y<m;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=m;y<2*m;y++)_[y]=0;return new u(_,0)};function K(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function $(T,m){this.g=T,this.h=m}function rt(T,m){if(N(m))throw Error("division by zero");if(N(T))return new $(A,A);if(x(T))return m=rt(D(T),m),new $(D(m.g),D(m.h));if(x(m))return m=rt(T,D(m)),new $(D(m.g),m.h);if(30<T.g.length){if(x(T)||x(m))throw Error("slowDivide_ only works with positive integers.");for(var _=R,y=m;0>=y.l(T);)_=bt(_),y=bt(y);var E=st(_,1),I=st(y,1);for(y=st(y,2),_=st(_,2);!N(y);){var g=I.add(y);0>=g.l(T)&&(E=E.add(_),I=g),y=st(y,1),_=st(_,1)}return m=G(T,E.j(m)),new $(E,m)}for(E=A;0<=T.l(m);){for(_=Math.max(1,Math.floor(T.m()/m.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=f(_),g=I.j(m);x(g)||0<g.l(T);)_-=y,I=f(_),g=I.j(m);N(I)&&(I=R),E=E.add(I),T=G(T,g)}return new $(E,T)}r.A=function(T){return rt(this,T).h},r.and=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)&T.i(y);return new u(_,this.h&T.h)},r.or=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)|T.i(y);return new u(_,this.h|T.h)},r.xor=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)^T.i(y);return new u(_,this.h^T.h)};function bt(T){for(var m=T.g.length+1,_=[],y=0;y<m;y++)_[y]=T.i(y)<<1|T.i(y-1)>>>31;return new u(_,T.h)}function st(T,m){var _=m>>5;m%=32;for(var y=T.g.length-_,E=[],I=0;I<y;I++)E[I]=0<m?T.i(I+_)>>>m|T.i(I+_+1)<<32-m:T.i(I+_);return new u(E,T.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Mo=n,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=f,u.fromString=p,se=u}).apply(typeof $s<"u"?$s:typeof self<"u"?self:typeof window<"u"?window:{});var On=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Oo,Ye,Fo,jn,Yr,Uo,qo,Bo;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,a,l){return i==Array.prototype||i==Object.prototype||(i[a]=l.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof On=="object"&&On];for(var a=0;a<i.length;++a){var l=i[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var n=e(this);function s(i,a){if(a)t:{var l=n;i=i.split(".");for(var d=0;d<i.length-1;d++){var v=i[d];if(!(v in l))break t;l=l[v]}i=i[i.length-1],d=l[i],a=a(d),a!=d&&a!=null&&t(l,i,{configurable:!0,writable:!0,value:a})}}function o(i,a){i instanceof String&&(i+="");var l=0,d=!1,v={next:function(){if(!d&&l<i.length){var w=l++;return{value:a(w,i[w]),done:!1}}return d=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}s("Array.prototype.values",function(i){return i||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function h(i){var a=typeof i;return a=a!="object"?a:i?Array.isArray(i)?"array":a:"null",a=="array"||a=="object"&&typeof i.length=="number"}function f(i){var a=typeof i;return a=="object"&&i!=null||a=="function"}function p(i,a,l){return i.call.apply(i.bind,arguments)}function A(i,a,l){if(!i)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,d),i.apply(a,v)}}return function(){return i.apply(a,arguments)}}function R(i,a,l){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:A,R.apply(null,arguments)}function C(i,a){var l=Array.prototype.slice.call(arguments,1);return function(){var d=l.slice();return d.push.apply(d,arguments),i.apply(this,d)}}function N(i,a){function l(){}l.prototype=a.prototype,i.aa=a.prototype,i.prototype=new l,i.prototype.constructor=i,i.Qb=function(d,v,w){for(var S=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)S[Q-2]=arguments[Q];return a.prototype[v].apply(d,S)}}function x(i){const a=i.length;if(0<a){const l=Array(a);for(let d=0;d<a;d++)l[d]=i[d];return l}return[]}function D(i,a){for(let l=1;l<arguments.length;l++){const d=arguments[l];if(h(d)){const v=i.length||0,w=d.length||0;i.length=v+w;for(let S=0;S<w;S++)i[v+S]=d[S]}else i.push(d)}}class G{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function K(i){return/^[\s\xa0]*$/.test(i)}function $(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function rt(i){return rt[" "](i),i}rt[" "]=function(){};var bt=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function st(i,a,l){for(const d in i)a.call(l,i[d],d,i)}function T(i,a){for(const l in i)a.call(void 0,i[l],l,i)}function m(i){const a={};for(const l in i)a[l]=i[l];return a}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,a){let l,d;for(let v=1;v<arguments.length;v++){d=arguments[v];for(l in d)i[l]=d[l];for(let w=0;w<_.length;w++)l=_[w],Object.prototype.hasOwnProperty.call(d,l)&&(i[l]=d[l])}}function E(i){var a=1;i=i.split(":");const l=[];for(;0<a&&i.length;)l.push(i.shift()),a--;return i.length&&l.push(i.join(":")),l}function I(i){c.setTimeout(()=>{throw i},0)}function g(){var i=Ir;let a=null;return i.g&&(a=i.g,i.g=i.g.next,i.g||(i.h=null),a.next=null),a}class Nt{constructor(){this.h=this.g=null}add(a,l){const d=xe.get();d.set(a,l),this.h?this.h.next=d:this.g=d,this.h=d}}var xe=new G(()=>new uu,i=>i.reset());class uu{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Le,Me=!1,Ir=new Nt,Ki=()=>{const i=c.Promise.resolve(void 0);Le=()=>{i.then(lu)}};var lu=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(l){I(l)}var a=xe;a.j(i),100>a.h&&(a.h++,i.next=a.g,a.g=i)}Me=!1};function qt(){this.s=this.s,this.C=this.C}qt.prototype.s=!1,qt.prototype.ma=function(){this.s||(this.s=!0,this.N())},qt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ct(i,a){this.type=i,this.g=this.target=a,this.defaultPrevented=!1}ct.prototype.h=function(){this.defaultPrevented=!0};var cu=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,a=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};c.addEventListener("test",l,a),c.removeEventListener("test",l,a)}catch{}return i}();function Oe(i,a){if(ct.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var l=this.type=i.type,d=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=a,a=i.relatedTarget){if(bt){t:{try{rt(a.nodeName);var v=!0;break t}catch{}v=!1}v||(a=null)}}else l=="mouseover"?a=i.fromElement:l=="mouseout"&&(a=i.toElement);this.relatedTarget=a,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:hu[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Oe.aa.h.call(this)}}N(Oe,ct);var hu={2:"touch",3:"pen",4:"mouse"};Oe.prototype.h=function(){Oe.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var yn="closure_listenable_"+(1e6*Math.random()|0),du=0;function fu(i,a,l,d,v){this.listener=i,this.proxy=null,this.src=a,this.type=l,this.capture=!!d,this.ha=v,this.key=++du,this.da=this.fa=!1}function En(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Tn(i){this.src=i,this.g={},this.h=0}Tn.prototype.add=function(i,a,l,d,v){var w=i.toString();i=this.g[w],i||(i=this.g[w]=[],this.h++);var S=wr(i,a,d,v);return-1<S?(a=i[S],l||(a.fa=!1)):(a=new fu(a,this.src,w,!!d,v),a.fa=l,i.push(a)),a};function Ar(i,a){var l=a.type;if(l in i.g){var d=i.g[l],v=Array.prototype.indexOf.call(d,a,void 0),w;(w=0<=v)&&Array.prototype.splice.call(d,v,1),w&&(En(a),i.g[l].length==0&&(delete i.g[l],i.h--))}}function wr(i,a,l,d){for(var v=0;v<i.length;++v){var w=i[v];if(!w.da&&w.listener==a&&w.capture==!!l&&w.ha==d)return v}return-1}var Rr="closure_lm_"+(1e6*Math.random()|0),Pr={};function $i(i,a,l,d,v){if(Array.isArray(a)){for(var w=0;w<a.length;w++)$i(i,a[w],l,d,v);return null}return l=Hi(l),i&&i[yn]?i.K(a,l,f(d)?!!d.capture:!!d,v):mu(i,a,l,!1,d,v)}function mu(i,a,l,d,v,w){if(!a)throw Error("Invalid event type");var S=f(v)?!!v.capture:!!v,Q=Cr(i);if(Q||(i[Rr]=Q=new Tn(i)),l=Q.add(a,l,d,S,w),l.proxy)return l;if(d=pu(),l.proxy=d,d.src=i,d.listener=l,i.addEventListener)cu||(v=S),v===void 0&&(v=!1),i.addEventListener(a.toString(),d,v);else if(i.attachEvent)i.attachEvent(Wi(a.toString()),d);else if(i.addListener&&i.removeListener)i.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return l}function pu(){function i(l){return a.call(i.src,i.listener,l)}const a=gu;return i}function Qi(i,a,l,d,v){if(Array.isArray(a))for(var w=0;w<a.length;w++)Qi(i,a[w],l,d,v);else d=f(d)?!!d.capture:!!d,l=Hi(l),i&&i[yn]?(i=i.i,a=String(a).toString(),a in i.g&&(w=i.g[a],l=wr(w,l,d,v),-1<l&&(En(w[l]),Array.prototype.splice.call(w,l,1),w.length==0&&(delete i.g[a],i.h--)))):i&&(i=Cr(i))&&(a=i.g[a.toString()],i=-1,a&&(i=wr(a,l,d,v)),(l=-1<i?a[i]:null)&&Vr(l))}function Vr(i){if(typeof i!="number"&&i&&!i.da){var a=i.src;if(a&&a[yn])Ar(a.i,i);else{var l=i.type,d=i.proxy;a.removeEventListener?a.removeEventListener(l,d,i.capture):a.detachEvent?a.detachEvent(Wi(l),d):a.addListener&&a.removeListener&&a.removeListener(d),(l=Cr(a))?(Ar(l,i),l.h==0&&(l.src=null,a[Rr]=null)):En(i)}}}function Wi(i){return i in Pr?Pr[i]:Pr[i]="on"+i}function gu(i,a){if(i.da)i=!0;else{a=new Oe(a,this);var l=i.listener,d=i.ha||i.src;i.fa&&Vr(i),i=l.call(d,a)}return i}function Cr(i){return i=i[Rr],i instanceof Tn?i:null}var Sr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hi(i){return typeof i=="function"?i:(i[Sr]||(i[Sr]=function(a){return i.handleEvent(a)}),i[Sr])}function ht(){qt.call(this),this.i=new Tn(this),this.M=this,this.F=null}N(ht,qt),ht.prototype[yn]=!0,ht.prototype.removeEventListener=function(i,a,l,d){Qi(this,i,a,l,d)};function _t(i,a){var l,d=i.F;if(d)for(l=[];d;d=d.F)l.push(d);if(i=i.M,d=a.type||a,typeof a=="string")a=new ct(a,i);else if(a instanceof ct)a.target=a.target||i;else{var v=a;a=new ct(d,i),y(a,v)}if(v=!0,l)for(var w=l.length-1;0<=w;w--){var S=a.g=l[w];v=vn(S,d,!0,a)&&v}if(S=a.g=i,v=vn(S,d,!0,a)&&v,v=vn(S,d,!1,a)&&v,l)for(w=0;w<l.length;w++)S=a.g=l[w],v=vn(S,d,!1,a)&&v}ht.prototype.N=function(){if(ht.aa.N.call(this),this.i){var i=this.i,a;for(a in i.g){for(var l=i.g[a],d=0;d<l.length;d++)En(l[d]);delete i.g[a],i.h--}}this.F=null},ht.prototype.K=function(i,a,l,d){return this.i.add(String(i),a,!1,l,d)},ht.prototype.L=function(i,a,l,d){return this.i.add(String(i),a,!0,l,d)};function vn(i,a,l,d){if(a=i.i.g[String(a)],!a)return!0;a=a.concat();for(var v=!0,w=0;w<a.length;++w){var S=a[w];if(S&&!S.da&&S.capture==l){var Q=S.listener,ot=S.ha||S.src;S.fa&&Ar(i.i,S),v=Q.call(ot,d)!==!1&&v}}return v&&!d.defaultPrevented}function Xi(i,a,l){if(typeof i=="function")l&&(i=R(i,l));else if(i&&typeof i.handleEvent=="function")i=R(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(i,a||0)}function Yi(i){i.g=Xi(()=>{i.g=null,i.i&&(i.i=!1,Yi(i))},i.l);const a=i.h;i.h=null,i.m.apply(null,a)}class _u extends qt{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Yi(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fe(i){qt.call(this),this.h=i,this.g={}}N(Fe,qt);var Ji=[];function Zi(i){st(i.g,function(a,l){this.g.hasOwnProperty(l)&&Vr(a)},i),i.g={}}Fe.prototype.N=function(){Fe.aa.N.call(this),Zi(this)},Fe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Dr=c.JSON.stringify,yu=c.JSON.parse,Eu=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function kr(){}kr.prototype.h=null;function ts(i){return i.h||(i.h=i.i())}function es(){}var Ue={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function br(){ct.call(this,"d")}N(br,ct);function Nr(){ct.call(this,"c")}N(Nr,ct);var te={},ns=null;function In(){return ns=ns||new ht}te.La="serverreachability";function rs(i){ct.call(this,te.La,i)}N(rs,ct);function qe(i){const a=In();_t(a,new rs(a))}te.STAT_EVENT="statevent";function is(i,a){ct.call(this,te.STAT_EVENT,i),this.stat=a}N(is,ct);function yt(i){const a=In();_t(a,new is(a,i))}te.Ma="timingevent";function ss(i,a){ct.call(this,te.Ma,i),this.size=a}N(ss,ct);function Be(i,a){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},a)}function je(){this.g=!0}je.prototype.xa=function(){this.g=!1};function Tu(i,a,l,d,v,w){i.info(function(){if(i.g)if(w)for(var S="",Q=w.split("&"),ot=0;ot<Q.length;ot++){var j=Q[ot].split("=");if(1<j.length){var dt=j[0];j=j[1];var ft=dt.split("_");S=2<=ft.length&&ft[1]=="type"?S+(dt+"="+j+"&"):S+(dt+"=redacted&")}}else S=null;else S=w;return"XMLHTTP REQ ("+d+") [attempt "+v+"]: "+a+`
`+l+`
`+S})}function vu(i,a,l,d,v,w,S){i.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+v+"]: "+a+`
`+l+`
`+w+" "+S})}function ce(i,a,l,d){i.info(function(){return"XMLHTTP TEXT ("+a+"): "+Au(i,l)+(d?" "+d:"")})}function Iu(i,a){i.info(function(){return"TIMEOUT: "+a})}je.prototype.info=function(){};function Au(i,a){if(!i.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(i=0;i<l.length;i++)if(Array.isArray(l[i])){var d=l[i];if(!(2>d.length)){var v=d[1];if(Array.isArray(v)&&!(1>v.length)){var w=v[0];if(w!="noop"&&w!="stop"&&w!="close")for(var S=1;S<v.length;S++)v[S]=""}}}}return Dr(l)}catch{return a}}var An={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},os={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},xr;function wn(){}N(wn,kr),wn.prototype.g=function(){return new XMLHttpRequest},wn.prototype.i=function(){return{}},xr=new wn;function Bt(i,a,l,d){this.j=i,this.i=a,this.l=l,this.R=d||1,this.U=new Fe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new as}function as(){this.i=null,this.g="",this.h=!1}var us={},Lr={};function Mr(i,a,l){i.L=1,i.v=Cn(xt(a)),i.m=l,i.P=!0,ls(i,null)}function ls(i,a){i.F=Date.now(),Rn(i),i.A=xt(i.v);var l=i.A,d=i.R;Array.isArray(d)||(d=[String(d)]),As(l.i,"t",d),i.C=0,l=i.j.J,i.h=new as,i.g=Bs(i.j,l?a:null,!i.m),0<i.O&&(i.M=new _u(R(i.Y,i,i.g),i.O)),a=i.U,l=i.g,d=i.ca;var v="readystatechange";Array.isArray(v)||(v&&(Ji[0]=v.toString()),v=Ji);for(var w=0;w<v.length;w++){var S=$i(l,v[w],d||a.handleEvent,!1,a.h||a);if(!S)break;a.g[S.key]=S}a=i.H?m(i.H):{},i.m?(i.u||(i.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,a)):(i.u="GET",i.g.ea(i.A,i.u,null,a)),qe(),Tu(i.i,i.u,i.A,i.l,i.R,i.m)}Bt.prototype.ca=function(i){i=i.target;const a=this.M;a&&Lt(i)==3?a.j():this.Y(i)},Bt.prototype.Y=function(i){try{if(i==this.g)t:{const ft=Lt(this.g);var a=this.g.Ba();const fe=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||Ds(this.g)))){this.J||ft!=4||a==7||(a==8||0>=fe?qe(3):qe(2)),Or(this);var l=this.g.Z();this.X=l;e:if(cs(this)){var d=Ds(this.g);i="";var v=d.length,w=Lt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ee(this),ze(this);var S="";break e}this.h.i=new c.TextDecoder}for(a=0;a<v;a++)this.h.h=!0,i+=this.h.i.decode(d[a],{stream:!(w&&a==v-1)});d.length=0,this.h.g+=i,this.C=0,S=this.h.g}else S=this.g.oa();if(this.o=l==200,vu(this.i,this.u,this.A,this.l,this.R,ft,l),this.o){if(this.T&&!this.K){e:{if(this.g){var Q,ot=this.g;if((Q=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(Q)){var j=Q;break e}}j=null}if(l=j)ce(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fr(this,l);else{this.o=!1,this.s=3,yt(12),ee(this),ze(this);break t}}if(this.P){l=!0;let Pt;for(;!this.J&&this.C<S.length;)if(Pt=wu(this,S),Pt==Lr){ft==4&&(this.s=4,yt(14),l=!1),ce(this.i,this.l,null,"[Incomplete Response]");break}else if(Pt==us){this.s=4,yt(15),ce(this.i,this.l,S,"[Invalid Chunk]"),l=!1;break}else ce(this.i,this.l,Pt,null),Fr(this,Pt);if(cs(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||S.length!=0||this.h.h||(this.s=1,yt(16),l=!1),this.o=this.o&&l,!l)ce(this.i,this.l,S,"[Invalid Chunked Response]"),ee(this),ze(this);else if(0<S.length&&!this.W){this.W=!0;var dt=this.j;dt.g==this&&dt.ba&&!dt.M&&(dt.j.info("Great, no buffering proxy detected. Bytes received: "+S.length),Gr(dt),dt.M=!0,yt(11))}}else ce(this.i,this.l,S,null),Fr(this,S);ft==4&&ee(this),this.o&&!this.J&&(ft==4?Os(this.j,this):(this.o=!1,Rn(this)))}else Bu(this.g),l==400&&0<S.indexOf("Unknown SID")?(this.s=3,yt(12)):(this.s=0,yt(13)),ee(this),ze(this)}}}catch{}finally{}};function cs(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function wu(i,a){var l=i.C,d=a.indexOf(`
`,l);return d==-1?Lr:(l=Number(a.substring(l,d)),isNaN(l)?us:(d+=1,d+l>a.length?Lr:(a=a.slice(d,d+l),i.C=d+l,a)))}Bt.prototype.cancel=function(){this.J=!0,ee(this)};function Rn(i){i.S=Date.now()+i.I,hs(i,i.I)}function hs(i,a){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Be(R(i.ba,i),a)}function Or(i){i.B&&(c.clearTimeout(i.B),i.B=null)}Bt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Iu(this.i,this.A),this.L!=2&&(qe(),yt(17)),ee(this),this.s=2,ze(this)):hs(this,this.S-i)};function ze(i){i.j.G==0||i.J||Os(i.j,i)}function ee(i){Or(i);var a=i.M;a&&typeof a.ma=="function"&&a.ma(),i.M=null,Zi(i.U),i.g&&(a=i.g,i.g=null,a.abort(),a.ma())}function Fr(i,a){try{var l=i.j;if(l.G!=0&&(l.g==i||Ur(l.h,i))){if(!i.K&&Ur(l.h,i)&&l.G==3){try{var d=l.Da.g.parse(a)}catch{d=null}if(Array.isArray(d)&&d.length==3){var v=d;if(v[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<i.F)xn(l),bn(l);else break t;zr(l),yt(18)}}else l.za=v[1],0<l.za-l.T&&37500>v[2]&&l.F&&l.v==0&&!l.C&&(l.C=Be(R(l.Za,l),6e3));if(1>=ms(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else re(l,11)}else if((i.K||l.g==i)&&xn(l),!K(a))for(v=l.Da.g.parse(a),a=0;a<v.length;a++){let j=v[a];if(l.T=j[0],j=j[1],l.G==2)if(j[0]=="c"){l.K=j[1],l.ia=j[2];const dt=j[3];dt!=null&&(l.la=dt,l.j.info("VER="+l.la));const ft=j[4];ft!=null&&(l.Aa=ft,l.j.info("SVER="+l.Aa));const fe=j[5];fe!=null&&typeof fe=="number"&&0<fe&&(d=1.5*fe,l.L=d,l.j.info("backChannelRequestTimeoutMs_="+d)),d=l;const Pt=i.g;if(Pt){const Mn=Pt.g?Pt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Mn){var w=d.h;w.g||Mn.indexOf("spdy")==-1&&Mn.indexOf("quic")==-1&&Mn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(qr(w,w.h),w.h=null))}if(d.D){const Kr=Pt.g?Pt.g.getResponseHeader("X-HTTP-Session-Id"):null;Kr&&(d.ya=Kr,W(d.I,d.D,Kr))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-i.F,l.j.info("Handshake RTT: "+l.R+"ms")),d=l;var S=i;if(d.qa=qs(d,d.J?d.ia:null,d.W),S.K){ps(d.h,S);var Q=S,ot=d.L;ot&&(Q.I=ot),Q.B&&(Or(Q),Rn(Q)),d.g=S}else Ls(d);0<l.i.length&&Nn(l)}else j[0]!="stop"&&j[0]!="close"||re(l,7);else l.G==3&&(j[0]=="stop"||j[0]=="close"?j[0]=="stop"?re(l,7):jr(l):j[0]!="noop"&&l.l&&l.l.ta(j),l.v=0)}}qe(4)}catch{}}var Ru=class{constructor(i,a){this.g=i,this.map=a}};function ds(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function fs(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function ms(i){return i.h?1:i.g?i.g.size:0}function Ur(i,a){return i.h?i.h==a:i.g?i.g.has(a):!1}function qr(i,a){i.g?i.g.add(a):i.h=a}function ps(i,a){i.h&&i.h==a?i.h=null:i.g&&i.g.has(a)&&i.g.delete(a)}ds.prototype.cancel=function(){if(this.i=gs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function gs(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let a=i.i;for(const l of i.g.values())a=a.concat(l.D);return a}return x(i.i)}function Pu(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var a=[],l=i.length,d=0;d<l;d++)a.push(i[d]);return a}a=[],l=0;for(d in i)a[l++]=i[d];return a}function Vu(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var a=[];i=i.length;for(var l=0;l<i;l++)a.push(l);return a}a=[],l=0;for(const d in i)a[l++]=d;return a}}}function _s(i,a){if(i.forEach&&typeof i.forEach=="function")i.forEach(a,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,a,void 0);else for(var l=Vu(i),d=Pu(i),v=d.length,w=0;w<v;w++)a.call(void 0,d[w],l&&l[w],i)}var ys=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Cu(i,a){if(i){i=i.split("&");for(var l=0;l<i.length;l++){var d=i[l].indexOf("="),v=null;if(0<=d){var w=i[l].substring(0,d);v=i[l].substring(d+1)}else w=i[l];a(w,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function ne(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof ne){this.h=i.h,Pn(this,i.j),this.o=i.o,this.g=i.g,Vn(this,i.s),this.l=i.l;var a=i.i,l=new $e;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),Es(this,l),this.m=i.m}else i&&(a=String(i).match(ys))?(this.h=!1,Pn(this,a[1]||"",!0),this.o=Ge(a[2]||""),this.g=Ge(a[3]||"",!0),Vn(this,a[4]),this.l=Ge(a[5]||"",!0),Es(this,a[6]||"",!0),this.m=Ge(a[7]||"")):(this.h=!1,this.i=new $e(null,this.h))}ne.prototype.toString=function(){var i=[],a=this.j;a&&i.push(Ke(a,Ts,!0),":");var l=this.g;return(l||a=="file")&&(i.push("//"),(a=this.o)&&i.push(Ke(a,Ts,!0),"@"),i.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&i.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(Ke(l,l.charAt(0)=="/"?ku:Du,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",Ke(l,Nu)),i.join("")};function xt(i){return new ne(i)}function Pn(i,a,l){i.j=l?Ge(a,!0):a,i.j&&(i.j=i.j.replace(/:$/,""))}function Vn(i,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);i.s=a}else i.s=null}function Es(i,a,l){a instanceof $e?(i.i=a,xu(i.i,i.h)):(l||(a=Ke(a,bu)),i.i=new $e(a,i.h))}function W(i,a,l){i.i.set(a,l)}function Cn(i){return W(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Ge(i,a){return i?a?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Ke(i,a,l){return typeof i=="string"?(i=encodeURI(i).replace(a,Su),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Su(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Ts=/[#\/\?@]/g,Du=/[#\?:]/g,ku=/[#\?]/g,bu=/[#\?@]/g,Nu=/#/g;function $e(i,a){this.h=this.g=null,this.i=i||null,this.j=!!a}function jt(i){i.g||(i.g=new Map,i.h=0,i.i&&Cu(i.i,function(a,l){i.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}r=$e.prototype,r.add=function(i,a){jt(this),this.i=null,i=he(this,i);var l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(a),this.h+=1,this};function vs(i,a){jt(i),a=he(i,a),i.g.has(a)&&(i.i=null,i.h-=i.g.get(a).length,i.g.delete(a))}function Is(i,a){return jt(i),a=he(i,a),i.g.has(a)}r.forEach=function(i,a){jt(this),this.g.forEach(function(l,d){l.forEach(function(v){i.call(a,v,d,this)},this)},this)},r.na=function(){jt(this);const i=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let d=0;d<a.length;d++){const v=i[d];for(let w=0;w<v.length;w++)l.push(a[d])}return l},r.V=function(i){jt(this);let a=[];if(typeof i=="string")Is(this,i)&&(a=a.concat(this.g.get(he(this,i))));else{i=Array.from(this.g.values());for(let l=0;l<i.length;l++)a=a.concat(i[l])}return a},r.set=function(i,a){return jt(this),this.i=null,i=he(this,i),Is(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[a]),this.h+=1,this},r.get=function(i,a){return i?(i=this.V(i),0<i.length?String(i[0]):a):a};function As(i,a,l){vs(i,a),0<l.length&&(i.i=null,i.g.set(he(i,a),x(l)),i.h+=l.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var d=a[l];const w=encodeURIComponent(String(d)),S=this.V(d);for(d=0;d<S.length;d++){var v=w;S[d]!==""&&(v+="="+encodeURIComponent(String(S[d]))),i.push(v)}}return this.i=i.join("&")};function he(i,a){return a=String(a),i.j&&(a=a.toLowerCase()),a}function xu(i,a){a&&!i.j&&(jt(i),i.i=null,i.g.forEach(function(l,d){var v=d.toLowerCase();d!=v&&(vs(this,d),As(this,v,l))},i)),i.j=a}function Lu(i,a){const l=new je;if(c.Image){const d=new Image;d.onload=C(zt,l,"TestLoadImage: loaded",!0,a,d),d.onerror=C(zt,l,"TestLoadImage: error",!1,a,d),d.onabort=C(zt,l,"TestLoadImage: abort",!1,a,d),d.ontimeout=C(zt,l,"TestLoadImage: timeout",!1,a,d),c.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=i}else a(!1)}function Mu(i,a){const l=new je,d=new AbortController,v=setTimeout(()=>{d.abort(),zt(l,"TestPingServer: timeout",!1,a)},1e4);fetch(i,{signal:d.signal}).then(w=>{clearTimeout(v),w.ok?zt(l,"TestPingServer: ok",!0,a):zt(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(v),zt(l,"TestPingServer: error",!1,a)})}function zt(i,a,l,d,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),d(l)}catch{}}function Ou(){this.g=new Eu}function Fu(i,a,l){const d=l||"";try{_s(i,function(v,w){let S=v;f(v)&&(S=Dr(v)),a.push(d+w+"="+encodeURIComponent(S))})}catch(v){throw a.push(d+"type="+encodeURIComponent("_badmap")),v}}function Sn(i){this.l=i.Ub||null,this.j=i.eb||!1}N(Sn,kr),Sn.prototype.g=function(){return new Dn(this.l,this.j)},Sn.prototype.i=function(i){return function(){return i}}({});function Dn(i,a){ht.call(this),this.D=i,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(Dn,ht),r=Dn.prototype,r.open=function(i,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=a,this.readyState=1,We(this)},r.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(a.body=i),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qe(this)),this.readyState=0},r.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,We(this)),this.g&&(this.readyState=3,We(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ws(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function ws(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}r.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var a=i.value?i.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!i.done}))&&(this.response=this.responseText+=a)}i.done?Qe(this):We(this),this.readyState==3&&ws(this)}},r.Ra=function(i){this.g&&(this.response=this.responseText=i,Qe(this))},r.Qa=function(i){this.g&&(this.response=i,Qe(this))},r.ga=function(){this.g&&Qe(this)};function Qe(i){i.readyState=4,i.l=null,i.j=null,i.v=null,We(i)}r.setRequestHeader=function(i,a){this.u.append(i,a)},r.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=a.next();return i.join(`\r
`)};function We(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Dn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Rs(i){let a="";return st(i,function(l,d){a+=d,a+=":",a+=l,a+=`\r
`}),a}function Br(i,a,l){t:{for(d in l){var d=!1;break t}d=!0}d||(l=Rs(l),typeof i=="string"?l!=null&&encodeURIComponent(String(l)):W(i,a,l))}function Y(i){ht.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(Y,ht);var Uu=/^https?$/i,qu=["POST","PUT"];r=Y.prototype,r.Ha=function(i){this.J=i},r.ea=function(i,a,l,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);a=a?a.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():xr.g(),this.v=this.o?ts(this.o):ts(xr),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(a,String(i),!0),this.B=!1}catch(w){Ps(this,w);return}if(i=l||"",l=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var v in d)l.set(v,d[v]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const w of d.keys())l.set(w,d.get(w));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(l.keys()).find(w=>w.toLowerCase()=="content-type"),v=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(qu,a,void 0))||d||v||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,S]of l)this.g.setRequestHeader(w,S);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ss(this),this.u=!0,this.g.send(i),this.u=!1}catch(w){Ps(this,w)}};function Ps(i,a){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=a,i.m=5,Vs(i),kn(i)}function Vs(i){i.A||(i.A=!0,_t(i,"complete"),_t(i,"error"))}r.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,_t(this,"complete"),_t(this,"abort"),kn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),kn(this,!0)),Y.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Cs(this):this.bb())},r.bb=function(){Cs(this)};function Cs(i){if(i.h&&typeof u<"u"&&(!i.v[1]||Lt(i)!=4||i.Z()!=2)){if(i.u&&Lt(i)==4)Xi(i.Ea,0,i);else if(_t(i,"readystatechange"),Lt(i)==4){i.h=!1;try{const S=i.Z();t:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var d;if(d=S===0){var v=String(i.D).match(ys)[1]||null;!v&&c.self&&c.self.location&&(v=c.self.location.protocol.slice(0,-1)),d=!Uu.test(v?v.toLowerCase():"")}l=d}if(l)_t(i,"complete"),_t(i,"success");else{i.m=6;try{var w=2<Lt(i)?i.g.statusText:""}catch{w=""}i.l=w+" ["+i.Z()+"]",Vs(i)}}finally{kn(i)}}}}function kn(i,a){if(i.g){Ss(i);const l=i.g,d=i.v[0]?()=>{}:null;i.g=null,i.v=null,a||_t(i,"ready");try{l.onreadystatechange=d}catch{}}}function Ss(i){i.I&&(c.clearTimeout(i.I),i.I=null)}r.isActive=function(){return!!this.g};function Lt(i){return i.g?i.g.readyState:0}r.Z=function(){try{return 2<Lt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(i){if(this.g){var a=this.g.responseText;return i&&a.indexOf(i)==0&&(a=a.substring(i.length)),yu(a)}};function Ds(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Bu(i){const a={};i=(i.g&&2<=Lt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<i.length;d++){if(K(i[d]))continue;var l=E(i[d]);const v=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const w=a[v]||[];a[v]=w,w.push(l)}T(a,function(d){return d.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function He(i,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||a}function ks(i){this.Aa=0,this.i=[],this.j=new je,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=He("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=He("baseRetryDelayMs",5e3,i),this.cb=He("retryDelaySeedMs",1e4,i),this.Wa=He("forwardChannelMaxRetries",2,i),this.wa=He("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new ds(i&&i.concurrentRequestLimit),this.Da=new Ou,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=ks.prototype,r.la=8,r.G=1,r.connect=function(i,a,l,d){yt(0),this.W=i,this.H=a||{},l&&d!==void 0&&(this.H.OSID=l,this.H.OAID=d),this.F=this.X,this.I=qs(this,null,this.W),Nn(this)};function jr(i){if(bs(i),i.G==3){var a=i.U++,l=xt(i.I);if(W(l,"SID",i.K),W(l,"RID",a),W(l,"TYPE","terminate"),Xe(i,l),a=new Bt(i,i.j,a),a.L=2,a.v=Cn(xt(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=a.v,l=!0),l||(a.g=Bs(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Rn(a)}Us(i)}function bn(i){i.g&&(Gr(i),i.g.cancel(),i.g=null)}function bs(i){bn(i),i.u&&(c.clearTimeout(i.u),i.u=null),xn(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function Nn(i){if(!fs(i.h)&&!i.s){i.s=!0;var a=i.Ga;Le||Ki(),Me||(Le(),Me=!0),Ir.add(a,i),i.B=0}}function ju(i,a){return ms(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=a.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Be(R(i.Ga,i,a),Fs(i,i.B)),i.B++,!0)}r.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const v=new Bt(this,this.j,i);let w=this.o;if(this.S&&(w?(w=m(w),y(w,this.S)):w=this.S),this.m!==null||this.O||(v.H=w,w=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var d=this.i[l];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(a+=d,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=xs(this,v,a),l=xt(this.I),W(l,"RID",i),W(l,"CVER",22),this.D&&W(l,"X-HTTP-Session-Id",this.D),Xe(this,l),w&&(this.O?a="headers="+encodeURIComponent(String(Rs(w)))+"&"+a:this.m&&Br(l,this.m,w)),qr(this.h,v),this.Ua&&W(l,"TYPE","init"),this.P?(W(l,"$req",a),W(l,"SID","null"),v.T=!0,Mr(v,l,null)):Mr(v,l,a),this.G=2}}else this.G==3&&(i?Ns(this,i):this.i.length==0||fs(this.h)||Ns(this))};function Ns(i,a){var l;a?l=a.l:l=i.U++;const d=xt(i.I);W(d,"SID",i.K),W(d,"RID",l),W(d,"AID",i.T),Xe(i,d),i.m&&i.o&&Br(d,i.m,i.o),l=new Bt(i,i.j,l,i.B+1),i.m===null&&(l.H=i.o),a&&(i.i=a.D.concat(i.i)),a=xs(i,l,1e3),l.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),qr(i.h,l),Mr(l,d,a)}function Xe(i,a){i.H&&st(i.H,function(l,d){W(a,d,l)}),i.l&&_s({},function(l,d){W(a,d,l)})}function xs(i,a,l){l=Math.min(i.i.length,l);var d=i.l?R(i.l.Na,i.l,i):null;t:{var v=i.i;let w=-1;for(;;){const S=["count="+l];w==-1?0<l?(w=v[0].g,S.push("ofs="+w)):w=0:S.push("ofs="+w);let Q=!0;for(let ot=0;ot<l;ot++){let j=v[ot].g;const dt=v[ot].map;if(j-=w,0>j)w=Math.max(0,v[ot].g-100),Q=!1;else try{Fu(dt,S,"req"+j+"_")}catch{d&&d(dt)}}if(Q){d=S.join("&");break t}}}return i=i.i.splice(0,l),a.D=i,d}function Ls(i){if(!i.g&&!i.u){i.Y=1;var a=i.Fa;Le||Ki(),Me||(Le(),Me=!0),Ir.add(a,i),i.v=0}}function zr(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Be(R(i.Fa,i),Fs(i,i.v)),i.v++,!0)}r.Fa=function(){if(this.u=null,Ms(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Be(R(this.ab,this),i)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,yt(10),bn(this),Ms(this))};function Gr(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function Ms(i){i.g=new Bt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var a=xt(i.qa);W(a,"RID","rpc"),W(a,"SID",i.K),W(a,"AID",i.T),W(a,"CI",i.F?"0":"1"),!i.F&&i.ja&&W(a,"TO",i.ja),W(a,"TYPE","xmlhttp"),Xe(i,a),i.m&&i.o&&Br(a,i.m,i.o),i.L&&(i.g.I=i.L);var l=i.g;i=i.ia,l.L=1,l.v=Cn(xt(a)),l.m=null,l.P=!0,ls(l,i)}r.Za=function(){this.C!=null&&(this.C=null,bn(this),zr(this),yt(19))};function xn(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function Os(i,a){var l=null;if(i.g==a){xn(i),Gr(i),i.g=null;var d=2}else if(Ur(i.h,a))l=a.D,ps(i.h,a),d=1;else return;if(i.G!=0){if(a.o)if(d==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var v=i.B;d=In(),_t(d,new ss(d,l)),Nn(i)}else Ls(i);else if(v=a.s,v==3||v==0&&0<a.X||!(d==1&&ju(i,a)||d==2&&zr(i)))switch(l&&0<l.length&&(a=i.h,a.i=a.i.concat(l)),v){case 1:re(i,5);break;case 4:re(i,10);break;case 3:re(i,6);break;default:re(i,2)}}}function Fs(i,a){let l=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(l*=2),l*a}function re(i,a){if(i.j.info("Error code "+a),a==2){var l=R(i.fb,i),d=i.Xa;const v=!d;d=new ne(d||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Pn(d,"https"),Cn(d),v?Lu(d.toString(),l):Mu(d.toString(),l)}else yt(2);i.G=0,i.l&&i.l.sa(a),Us(i),bs(i)}r.fb=function(i){i?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function Us(i){if(i.G=0,i.ka=[],i.l){const a=gs(i.h);(a.length!=0||i.i.length!=0)&&(D(i.ka,a),D(i.ka,i.i),i.h.i.length=0,x(i.i),i.i.length=0),i.l.ra()}}function qs(i,a,l){var d=l instanceof ne?xt(l):new ne(l);if(d.g!="")a&&(d.g=a+"."+d.g),Vn(d,d.s);else{var v=c.location;d=v.protocol,a=a?a+"."+v.hostname:v.hostname,v=+v.port;var w=new ne(null);d&&Pn(w,d),a&&(w.g=a),v&&Vn(w,v),l&&(w.l=l),d=w}return l=i.D,a=i.ya,l&&a&&W(d,l,a),W(d,"VER",i.la),Xe(i,d),d}function Bs(i,a,l){if(a&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=i.Ca&&!i.pa?new Y(new Sn({eb:l})):new Y(i.pa),a.Ha(i.J),a}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function js(){}r=js.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Ln(){}Ln.prototype.g=function(i,a){return new At(i,a)};function At(i,a){ht.call(this),this.g=new ks(a),this.l=i,this.h=a&&a.messageUrlParams||null,i=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(i?i["X-WebChannel-Content-Type"]=a.messageContentType:i={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(i?i["X-WebChannel-Client-Profile"]=a.va:i={"X-WebChannel-Client-Profile":a.va}),this.g.S=i,(i=a&&a.Sb)&&!K(i)&&(this.g.m=i),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!K(a)&&(this.g.D=a,i=this.h,i!==null&&a in i&&(i=this.h,a in i&&delete i[a])),this.j=new de(this)}N(At,ht),At.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){jr(this.g)},At.prototype.o=function(i){var a=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.u&&(l={},l.__data__=Dr(i),i=l);a.i.push(new Ru(a.Ya++,i)),a.G==3&&Nn(a)},At.prototype.N=function(){this.g.l=null,delete this.j,jr(this.g),delete this.g,At.aa.N.call(this)};function zs(i){br.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var a=i.__sm__;if(a){t:{for(const l in a){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,a=a!==null&&i in a?a[i]:void 0),this.data=a}else this.data=i}N(zs,br);function Gs(){Nr.call(this),this.status=1}N(Gs,Nr);function de(i){this.g=i}N(de,js),de.prototype.ua=function(){_t(this.g,"a")},de.prototype.ta=function(i){_t(this.g,new zs(i))},de.prototype.sa=function(i){_t(this.g,new Gs)},de.prototype.ra=function(){_t(this.g,"b")},Ln.prototype.createWebChannel=Ln.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,Bo=function(){return new Ln},qo=function(){return In()},Uo=te,Yr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},An.NO_ERROR=0,An.TIMEOUT=8,An.HTTP_ERROR=6,jn=An,os.COMPLETE="complete",Fo=os,es.EventType=Ue,Ue.OPEN="a",Ue.CLOSE="b",Ue.ERROR="c",Ue.MESSAGE="d",ht.prototype.listen=ht.prototype.K,Ye=es,Y.prototype.listenOnce=Y.prototype.L,Y.prototype.getLastError=Y.prototype.Ka,Y.prototype.getLastErrorCode=Y.prototype.Ba,Y.prototype.getStatus=Y.prototype.Z,Y.prototype.getResponseJson=Y.prototype.Oa,Y.prototype.getResponseText=Y.prototype.oa,Y.prototype.send=Y.prototype.ea,Y.prototype.setWithCredentials=Y.prototype.Ha,Oo=Y}).apply(typeof On<"u"?On:typeof self<"u"?self:typeof window<"u"?window:{});const Qs="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ce="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe=new zu("@firebase/firestore");function me(){return oe.logLevel}function k(r,...t){if(oe.logLevel<=Mt.DEBUG){const e=t.map(fi);oe.debug(`Firestore (${Ce}): ${r}`,...e)}}function Ft(r,...t){if(oe.logLevel<=Mt.ERROR){const e=t.map(fi);oe.error(`Firestore (${Ce}): ${r}`,...e)}}function Ee(r,...t){if(oe.logLevel<=Mt.WARN){const e=t.map(fi);oe.warn(`Firestore (${Ce}): ${r}`,...e)}}function fi(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(r="Unexpected state"){const t=`FIRESTORE (${Ce}) INTERNAL ASSERTION FAILED: `+r;throw Ft(t),new Error(t)}function z(r,t){r||M()}function F(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class b extends $u{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class tl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(pt.UNAUTHENTICATED))}shutdown(){}}class el{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class nl{constructor(t){this.t=t,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){z(this.o===void 0);let n=this.i;const s=h=>this.i!==n?(n=this.i,e(h)):Promise.resolve();let o=new Ot;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ot,t.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},c=h=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ot)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(z(typeof n.accessToken=="string"),new jo(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return z(t===null||typeof t=="string"),new pt(t)}}class rl{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class il{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new rl(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class sl{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ol{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){z(this.o===void 0);const n=o=>{o.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,k("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>n(o))};const s=o=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(z(typeof e.token=="string"),this.R=e.token,new sl(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=al(40);for(let o=0;o<s.length;++o)n.length<20&&s[o]<e&&(n+=t.charAt(s[o]%t.length))}return n}}function q(r,t){return r<t?-1:r>t?1:0}function Te(r,t,e){return r.length===t.length&&r.every((n,s)=>e(n,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{static now(){return et.fromMillis(Date.now())}static fromDate(t){return et.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new et(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new b(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new b(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new b(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new b(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?q(this.nanoseconds,t.nanoseconds):q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{static fromTimestamp(t){return new O(t)}static min(){return new O(new et(0,0))}static max(){return new O(new et(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(t,e,n){e===void 0?e=0:e>t.length&&M(),n===void 0?n=t.length-e:n>t.length-e&&M(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return on.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof on?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const o=t.get(s),u=e.get(s);if(o<u)return-1;if(o>u)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class H extends on{construct(t,e,n){return new H(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new b(P.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(s=>s.length>0))}return new H(e)}static emptyPath(){return new H([])}}const ul=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends on{construct(t,e,n){return new ut(t,e,n)}static isValidIdentifier(t){return ul.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const o=()=>{if(n.length===0)throw new b(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let u=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new b(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new b(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=h,s+=2}else c==="`"?(u=!u,s++):c!=="."||u?(n+=c,s++):(o(),s++)}if(o(),u)throw new b(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ut(e)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(t){this.path=t}static fromPath(t){return new L(H.fromString(t))}static fromName(t){return new L(H.fromString(t).popFirst(5))}static empty(){return new L(H.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&H.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return H.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new L(new H(t.slice()))}}function ll(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=O.fromTimestamp(n===1e9?new et(e+1,0):new et(e,n));return new $t(s,L.empty(),t)}function cl(r){return new $t(r.readTime,r.key,-1)}class $t{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new $t(O.min(),L.empty(),-1)}static max(){return new $t(O.max(),L.empty(),-1)}}function hl(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=L.comparator(r.documentKey,t.documentKey),e!==0?e:q(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Se(r){if(r.code!==P.FAILED_PRECONDITION||r.message!==dl)throw r;k("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new V((n,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof V?e:V.resolve(e)}catch(e){return V.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):V.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):V.reject(e)}static resolve(t){return new V((e,n)=>{e(t)})}static reject(t){return new V((e,n)=>{n(t)})}static waitFor(t){return new V((e,n)=>{let s=0,o=0,u=!1;t.forEach(c=>{++s,c.next(()=>{++o,u&&o===s&&e()},h=>n(h))}),u=!0,o===s&&e()})}static or(t){let e=V.resolve(!1);for(const n of t)e=e.next(s=>s?V.resolve(s):n());return e}static forEach(t,e){const n=[];return t.forEach((s,o)=>{n.push(e.call(this,s,o))}),this.waitFor(n)}static mapArray(t,e){return new V((n,s)=>{const o=t.length,u=new Array(o);let c=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(p=>{u[f]=p,++c,c===o&&n(u)},p=>s(p))}})}static doWhile(t,e){return new V((n,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):n()};o()})}}function ml(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function De(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ie(n),this.se=n=>e.writeSequenceNumber(n))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}ir.oe=-1;function sr(r){return r==null}function Wn(r){return r===0&&1/r==-1/0}function pl(r){return typeof r=="number"&&Number.isInteger(r)&&!Wn(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=Ws(t)),t=_l(r.get(e),t);return Ws(t)}function _l(r,t){let e=t;const n=r.length;for(let s=0;s<n;s++){const o=r.charAt(s);switch(o){case"\0":e+="";break;case"":e+="";break;default:e+=o}}return e}function Ws(r){return r+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function Yt(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function Go(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t,e){this.comparator=t,this.root=e||at.EMPTY}insert(t,e){return new X(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,at.BLACK,null,null))}remove(t){return new X(this.comparator,this.root.remove(t,this.comparator).copy(null,null,at.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Fn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Fn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Fn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Fn(this.root,t,this.comparator,!0)}}class Fn{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class at{constructor(t,e,n,s,o){this.key=t,this.value=e,this.color=n??at.RED,this.left=s??at.EMPTY,this.right=o??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,o){return new at(t??this.key,e??this.value,n??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const o=n(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,n),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return at.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const t=this.left.check();if(t!==this.right.check())throw M();return t+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(t,e,n,s,o){return this}insert(t,e,n){return new at(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t){this.comparator=t,this.data=new X(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Xs(this.data.getIterator())}getIteratorFrom(t){return new Xs(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof nt)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=n.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new nt(this.comparator);return e.data=t,e}}class Xs{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.fields=t,t.sort(ut.comparator)}static empty(){return new wt([])}unionWith(t){let e=new nt(ut.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new wt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Te(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Ko("Invalid base64 string: "+o):o}}(t);return new lt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let u=0;u<s.length;++u)o+=String.fromCharCode(s[u]);return o}(t);return new lt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const yl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qt(r){if(z(!!r),typeof r=="string"){let t=0;const e=yl.exec(r);if(z(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:J(r.seconds),nanos:J(r.nanos)}}function J(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Wt(r){return typeof r=="string"?lt.fromBase64String(r):lt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function or(r){const t=r.mapValue.fields.__previous_value__;return mi(t)?or(t):t}function an(r){const t=Qt(r.mapValue.fields.__local_write_time__.timestampValue);return new et(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(t,e,n,s,o,u,c,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=f}}class un{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new un("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof un&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ht(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?mi(r)?4:vl(r)?9007199254740991:Tl(r)?10:11:M()}function kt(r,t){if(r===t)return!0;const e=Ht(r);if(e!==Ht(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return an(r).isEqual(an(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const u=Qt(s.timestampValue),c=Qt(o.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(s,o){return Wt(s.bytesValue).isEqual(Wt(o.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(s,o){return J(s.geoPointValue.latitude)===J(o.geoPointValue.latitude)&&J(s.geoPointValue.longitude)===J(o.geoPointValue.longitude)}(r,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return J(s.integerValue)===J(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const u=J(s.doubleValue),c=J(o.doubleValue);return u===c?Wn(u)===Wn(c):isNaN(u)&&isNaN(c)}return!1}(r,t);case 9:return Te(r.arrayValue.values||[],t.arrayValue.values||[],kt);case 10:case 11:return function(s,o){const u=s.mapValue.fields||{},c=o.mapValue.fields||{};if(Hs(u)!==Hs(c))return!1;for(const h in u)if(u.hasOwnProperty(h)&&(c[h]===void 0||!kt(u[h],c[h])))return!1;return!0}(r,t);default:return M()}}function ln(r,t){return(r.values||[]).find(e=>kt(e,t))!==void 0}function ve(r,t){if(r===t)return 0;const e=Ht(r),n=Ht(t);if(e!==n)return q(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return q(r.booleanValue,t.booleanValue);case 2:return function(o,u){const c=J(o.integerValue||o.doubleValue),h=J(u.integerValue||u.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(r,t);case 3:return Ys(r.timestampValue,t.timestampValue);case 4:return Ys(an(r),an(t));case 5:return q(r.stringValue,t.stringValue);case 6:return function(o,u){const c=Wt(o),h=Wt(u);return c.compareTo(h)}(r.bytesValue,t.bytesValue);case 7:return function(o,u){const c=o.split("/"),h=u.split("/");for(let f=0;f<c.length&&f<h.length;f++){const p=q(c[f],h[f]);if(p!==0)return p}return q(c.length,h.length)}(r.referenceValue,t.referenceValue);case 8:return function(o,u){const c=q(J(o.latitude),J(u.latitude));return c!==0?c:q(J(o.longitude),J(u.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Js(r.arrayValue,t.arrayValue);case 10:return function(o,u){var c,h,f,p;const A=o.fields||{},R=u.fields||{},C=(c=A.value)===null||c===void 0?void 0:c.arrayValue,N=(h=R.value)===null||h===void 0?void 0:h.arrayValue,x=q(((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0,((p=N==null?void 0:N.values)===null||p===void 0?void 0:p.length)||0);return x!==0?x:Js(C,N)}(r.mapValue,t.mapValue);case 11:return function(o,u){if(o===Un.mapValue&&u===Un.mapValue)return 0;if(o===Un.mapValue)return 1;if(u===Un.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),f=u.fields||{},p=Object.keys(f);h.sort(),p.sort();for(let A=0;A<h.length&&A<p.length;++A){const R=q(h[A],p[A]);if(R!==0)return R;const C=ve(c[h[A]],f[p[A]]);if(C!==0)return C}return q(h.length,p.length)}(r.mapValue,t.mapValue);default:throw M()}}function Ys(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return q(r,t);const e=Qt(r),n=Qt(t),s=q(e.seconds,n.seconds);return s!==0?s:q(e.nanos,n.nanos)}function Js(r,t){const e=r.values||[],n=t.values||[];for(let s=0;s<e.length&&s<n.length;++s){const o=ve(e[s],n[s]);if(o)return o}return q(e.length,n.length)}function Ie(r){return Jr(r)}function Jr(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=Qt(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return Wt(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return L.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",s=!0;for(const o of e.values||[])s?s=!1:n+=",",n+=Jr(o);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const u of n)o?o=!1:s+=",",s+=`${u}:${Jr(e.fields[u])}`;return s+"}"}(r.mapValue):M()}function zn(r){switch(Ht(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=or(r);return t?16+zn(t):16;case 5:return 2*r.stringValue.length;case 6:return Wt(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,o)=>s+zn(o),0)}(r.arrayValue);case 10:case 11:return function(n){let s=0;return Yt(n.fields,(o,u)=>{s+=o.length+zn(u)}),s}(r.mapValue);default:throw M()}}function Zs(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function Zr(r){return!!r&&"integerValue"in r}function pi(r){return!!r&&"arrayValue"in r}function to(r){return!!r&&"nullValue"in r}function eo(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Gn(r){return!!r&&"mapValue"in r}function Tl(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function en(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return Yt(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=en(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=en(r.arrayValue.values[e]);return t}return Object.assign({},r)}function vl(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.value=t}static empty(){return new It({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Gn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=en(e)}setAll(t){let e=ut.emptyPath(),n={},s=[];t.forEach((u,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,n,s),n={},s=[],e=c.popLast()}u?n[c.lastSegment()]=en(u):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,n,s)}delete(t){const e=this.field(t.popLast());Gn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return kt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Gn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Yt(e,(s,o)=>t[s]=o);for(const s of n)delete t[s]}clone(){return new It(en(this.value))}}function $o(r){const t=[];return Yt(r.fields,(e,n)=>{const s=new ut([e]);if(Gn(n)){const o=$o(n.mapValue).fields;if(o.length===0)t.push(s);else for(const u of o)t.push(s.child(u))}else t.push(s)}),new wt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t,e,n,s,o,u,c){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=o,this.data=u,this.documentState=c}static newInvalidDocument(t){return new gt(t,0,O.min(),O.min(),O.min(),It.empty(),0)}static newFoundDocument(t,e,n,s){return new gt(t,1,e,O.min(),n,s,0)}static newNoDocument(t,e){return new gt(t,2,e,O.min(),O.min(),It.empty(),0)}static newUnknownDocument(t,e){return new gt(t,3,e,O.min(),O.min(),It.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(O.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=O.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof gt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(t,e){this.position=t,this.inclusive=e}}function no(r,t,e){let n=0;for(let s=0;s<r.position.length;s++){const o=t[s],u=r.position[s];if(o.field.isKeyField()?n=L.comparator(L.fromName(u.referenceValue),e.key):n=ve(u,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function ro(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!kt(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Il(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{}class tt extends Qo{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new wl(t,e,n):e==="array-contains"?new Vl(t,n):e==="in"?new Cl(t,n):e==="not-in"?new Sl(t,n):e==="array-contains-any"?new Dl(t,n):new tt(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new Rl(t,n):new Pl(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(ve(e,this.value)):e!==null&&Ht(this.value)===Ht(e)&&this.matchesComparison(ve(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ct extends Qo{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Ct(t,e)}matches(t){return Wo(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Wo(r){return r.op==="and"}function Ho(r){return Al(r)&&Wo(r)}function Al(r){for(const t of r.filters)if(t instanceof Ct)return!1;return!0}function ti(r){if(r instanceof tt)return r.field.canonicalString()+r.op.toString()+Ie(r.value);if(Ho(r))return r.filters.map(t=>ti(t)).join(",");{const t=r.filters.map(e=>ti(e)).join(",");return`${r.op}(${t})`}}function Xo(r,t){return r instanceof tt?function(n,s){return s instanceof tt&&n.op===s.op&&n.field.isEqual(s.field)&&kt(n.value,s.value)}(r,t):r instanceof Ct?function(n,s){return s instanceof Ct&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((o,u,c)=>o&&Xo(u,s.filters[c]),!0):!1}(r,t):void M()}function Yo(r){return r instanceof tt?function(e){return`${e.field.canonicalString()} ${e.op} ${Ie(e.value)}`}(r):r instanceof Ct?function(e){return e.op.toString()+" {"+e.getFilters().map(Yo).join(" ,")+"}"}(r):"Filter"}class wl extends tt{constructor(t,e,n){super(t,e,n),this.key=L.fromName(n.referenceValue)}matches(t){const e=L.comparator(t.key,this.key);return this.matchesComparison(e)}}class Rl extends tt{constructor(t,e){super(t,"in",e),this.keys=Jo("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Pl extends tt{constructor(t,e){super(t,"not-in",e),this.keys=Jo("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Jo(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>L.fromName(n.referenceValue))}class Vl extends tt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return pi(e)&&ln(e.arrayValue,this.value)}}class Cl extends tt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&ln(this.value.arrayValue,e)}}class Sl extends tt{constructor(t,e){super(t,"not-in",e)}matches(t){if(ln(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!ln(this.value.arrayValue,e)}}class Dl extends tt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!pi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>ln(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(t,e=null,n=[],s=[],o=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=o,this.startAt=u,this.endAt=c,this.ue=null}}function io(r,t=null,e=[],n=[],s=null,o=null,u=null){return new kl(r,t,e,n,s,o,u)}function gi(r){const t=F(r);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>ti(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),sr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Ie(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Ie(n)).join(",")),t.ue=e}return t.ue}function _i(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!Il(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!Xo(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!ro(r.startAt,t.startAt)&&ro(r.endAt,t.endAt)}function ei(r){return L.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(t,e=null,n=[],s=[],o=null,u="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=o,this.limitType=u,this.startAt=c,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function bl(r,t,e,n,s,o,u,c){return new cn(r,t,e,n,s,o,u,c)}function yi(r){return new cn(r)}function so(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Zo(r){return r.collectionGroup!==null}function nn(r){const t=F(r);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new nt(ut.comparator);return u.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Xn(o,n))}),e.has(ut.keyField().canonicalString())||t.ce.push(new Xn(ut.keyField(),n))}return t.ce}function St(r){const t=F(r);return t.le||(t.le=Nl(t,nn(r))),t.le}function Nl(r,t){if(r.limitType==="F")return io(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Xn(s.field,o)});const e=r.endAt?new Hn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Hn(r.startAt.position,r.startAt.inclusive):null;return io(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function ni(r,t){const e=r.filters.concat([t]);return new cn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function ri(r,t,e){return new cn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function ar(r,t){return _i(St(r),St(t))&&r.limitType===t.limitType}function ta(r){return`${gi(St(r))}|lt:${r.limitType}`}function pe(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Yo(s)).join(", ")}]`),sr(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ie(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ie(s)).join(",")),`Target(${n})`}(St(r))}; limitType=${r.limitType})`}function ur(r,t){return t.isFoundDocument()&&function(n,s){const o=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):L.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(r,t)&&function(n,s){for(const o of nn(n))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(r,t)&&function(n,s){for(const o of n.filters)if(!o.matches(s))return!1;return!0}(r,t)&&function(n,s){return!(n.startAt&&!function(u,c,h){const f=no(u,c,h);return u.inclusive?f<=0:f<0}(n.startAt,nn(n),s)||n.endAt&&!function(u,c,h){const f=no(u,c,h);return u.inclusive?f>=0:f>0}(n.endAt,nn(n),s))}(r,t)}function xl(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function ea(r){return(t,e)=>{let n=!1;for(const s of nn(r)){const o=Ll(s,t,e);if(o!==0)return o;n=n||s.field.isKeyField()}return 0}}function Ll(r,t,e){const n=r.field.isKeyField()?L.comparator(t.key,e.key):function(o,u,c){const h=u.data.field(o),f=c.data.field(o);return h!==null&&f!==null?ve(h,f):M()}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return M()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[s,o]of n)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return n.length===1?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Yt(this.inner,(e,n)=>{for(const[s,o]of n)t(s,o)})}isEmpty(){return Go(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=new X(L.comparator);function Ut(){return Ml}const na=new X(L.comparator);function Je(...r){let t=na;for(const e of r)t=t.insert(e.key,e);return t}function ra(r){let t=na;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function ie(){return rn()}function ia(){return rn()}function rn(){return new ae(r=>r.toString(),(r,t)=>r.isEqual(t))}const Ol=new X(L.comparator),Fl=new nt(L.comparator);function U(...r){let t=Fl;for(const e of r)t=t.add(e);return t}const Ul=new nt(q);function ql(){return Ul}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wn(t)?"-0":t}}function sa(r){return{integerValue:""+r}}function Bl(r,t){return pl(t)?sa(t):Ei(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(){this._=void 0}}function jl(r,t,e){return r instanceof Yn?function(s,o){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&mi(o)&&(o=or(o)),o&&(u.fields.__previous_value__=o),{mapValue:u}}(e,t):r instanceof Ae?aa(r,t):r instanceof we?ua(r,t):function(s,o){const u=oa(s,o),c=oo(u)+oo(s.Pe);return Zr(u)&&Zr(s.Pe)?sa(c):Ei(s.serializer,c)}(r,t)}function zl(r,t,e){return r instanceof Ae?aa(r,t):r instanceof we?ua(r,t):e}function oa(r,t){return r instanceof Jn?function(n){return Zr(n)||function(o){return!!o&&"doubleValue"in o}(n)}(t)?t:{integerValue:0}:null}class Yn extends lr{}class Ae extends lr{constructor(t){super(),this.elements=t}}function aa(r,t){const e=la(t);for(const n of r.elements)e.some(s=>kt(s,n))||e.push(n);return{arrayValue:{values:e}}}class we extends lr{constructor(t){super(),this.elements=t}}function ua(r,t){let e=la(t);for(const n of r.elements)e=e.filter(s=>!kt(s,n));return{arrayValue:{values:e}}}class Jn extends lr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function oo(r){return J(r.integerValue||r.doubleValue)}function la(r){return pi(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(t,e){this.field=t,this.transform=e}}function Gl(r,t){return r.field.isEqual(t.field)&&function(n,s){return n instanceof Ae&&s instanceof Ae||n instanceof we&&s instanceof we?Te(n.elements,s.elements,kt):n instanceof Jn&&s instanceof Jn?kt(n.Pe,s.Pe):n instanceof Yn&&s instanceof Yn}(r.transform,t.transform)}class Kl{constructor(t,e){this.version=t,this.transformResults=e}}class Et{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Et}static exists(t){return new Et(void 0,t)}static updateTime(t){return new Et(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Kn(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class cr{}function ha(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new hr(r.key,Et.none()):new hn(r.key,r.data,Et.none());{const e=r.data,n=It.empty();let s=new nt(ut.comparator);for(let o of t.fields)if(!s.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?n.delete(o):n.set(o,u),s=s.add(o)}return new Jt(r.key,n,new wt(s.toArray()),Et.none())}}function $l(r,t,e){r instanceof hn?function(s,o,u){const c=s.value.clone(),h=uo(s.fieldTransforms,o,u.transformResults);c.setAll(h),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()}(r,t,e):r instanceof Jt?function(s,o,u){if(!Kn(s.precondition,o))return void o.convertToUnknownDocument(u.version);const c=uo(s.fieldTransforms,o,u.transformResults),h=o.data;h.setAll(da(s)),h.setAll(c),o.convertToFoundDocument(u.version,h).setHasCommittedMutations()}(r,t,e):function(s,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function sn(r,t,e,n){return r instanceof hn?function(o,u,c,h){if(!Kn(o.precondition,u))return c;const f=o.value.clone(),p=lo(o.fieldTransforms,h,u);return f.setAll(p),u.convertToFoundDocument(u.version,f).setHasLocalMutations(),null}(r,t,e,n):r instanceof Jt?function(o,u,c,h){if(!Kn(o.precondition,u))return c;const f=lo(o.fieldTransforms,h,u),p=u.data;return p.setAll(da(o)),p.setAll(f),u.convertToFoundDocument(u.version,p).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(A=>A.field))}(r,t,e,n):function(o,u,c){return Kn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c}(r,t,e)}function Ql(r,t){let e=null;for(const n of r.fieldTransforms){const s=t.data.field(n.field),o=oa(n.transform,s||null);o!=null&&(e===null&&(e=It.empty()),e.set(n.field,o))}return e||null}function ao(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Te(n,s,(o,u)=>Gl(o,u))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class hn extends cr{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Jt extends cr{constructor(t,e,n,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function da(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function uo(r,t,e){const n=new Map;z(r.length===e.length);for(let s=0;s<e.length;s++){const o=r[s],u=o.transform,c=t.data.field(o.field);n.set(o.field,zl(u,c,e[s]))}return n}function lo(r,t,e){const n=new Map;for(const s of r){const o=s.transform,u=e.data.field(s.field);n.set(s.field,jl(o,u,t))}return n}class hr extends cr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Wl extends cr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&$l(o,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=sn(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=sn(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=ia();return this.mutations.forEach(s=>{const o=t.get(s.key),u=o.overlayedDocument;let c=this.applyToLocalView(u,o.mutatedFields);c=e.has(s.key)?null:c;const h=ha(u,c);h!==null&&n.set(s.key,h),u.isValidDocument()||u.convertToNoDocument(O.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),U())}isEqual(t){return this.batchId===t.batchId&&Te(this.mutations,t.mutations,(e,n)=>ao(e,n))&&Te(this.baseMutations,t.baseMutations,(e,n)=>ao(e,n))}}class Ti{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){z(t.mutations.length===n.length);let s=function(){return Ol}();const o=t.mutations;for(let u=0;u<o.length;u++)s=s.insert(o[u].key,n[u].version);return new Ti(t,e,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z,B;function Jl(r){switch(r){default:return M();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function fa(r){if(r===void 0)return Ft("GRPC error has no .code"),P.UNKNOWN;switch(r){case Z.OK:return P.OK;case Z.CANCELLED:return P.CANCELLED;case Z.UNKNOWN:return P.UNKNOWN;case Z.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case Z.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case Z.INTERNAL:return P.INTERNAL;case Z.UNAVAILABLE:return P.UNAVAILABLE;case Z.UNAUTHENTICATED:return P.UNAUTHENTICATED;case Z.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case Z.NOT_FOUND:return P.NOT_FOUND;case Z.ALREADY_EXISTS:return P.ALREADY_EXISTS;case Z.PERMISSION_DENIED:return P.PERMISSION_DENIED;case Z.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case Z.ABORTED:return P.ABORTED;case Z.OUT_OF_RANGE:return P.OUT_OF_RANGE;case Z.UNIMPLEMENTED:return P.UNIMPLEMENTED;case Z.DATA_LOSS:return P.DATA_LOSS;default:return M()}}(B=Z||(Z={}))[B.OK=0]="OK",B[B.CANCELLED=1]="CANCELLED",B[B.UNKNOWN=2]="UNKNOWN",B[B.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",B[B.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",B[B.NOT_FOUND=5]="NOT_FOUND",B[B.ALREADY_EXISTS=6]="ALREADY_EXISTS",B[B.PERMISSION_DENIED=7]="PERMISSION_DENIED",B[B.UNAUTHENTICATED=16]="UNAUTHENTICATED",B[B.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",B[B.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",B[B.ABORTED=10]="ABORTED",B[B.OUT_OF_RANGE=11]="OUT_OF_RANGE",B[B.UNIMPLEMENTED=12]="UNIMPLEMENTED",B[B.INTERNAL=13]="INTERNAL",B[B.UNAVAILABLE=14]="UNAVAILABLE",B[B.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc=new se([4294967295,4294967295],0);function co(r){const t=Zl().encode(r),e=new Mo;return e.update(t),new Uint8Array(e.digest())}function ho(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new se([e,n],0),new se([s,o],0)]}class vi{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Ze(`Invalid padding: ${e}`);if(n<0)throw new Ze(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new Ze(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new Ze(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ie=se.fromNumber(this.Te)}Ee(t,e,n){let s=t.add(e.multiply(se.fromNumber(n)));return s.compare(tc)===1&&(s=new se([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const e=co(t),[n,s]=ho(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(n,s,o);if(!this.de(u))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new vi(o,s,e);return n.forEach(c=>u.insert(c)),u}insert(t){if(this.Te===0)return;const e=co(t),[n,s]=ho(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(n,s,o);this.Ae(u)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Ze extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(t,e,n,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,dn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new dr(O.min(),s,new X(q),Ut(),U())}}class dn{constructor(t,e,n,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new dn(n,e,U(),U(),U())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t,e,n,s){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=s}}class ma{constructor(t,e){this.targetId=t,this.me=e}}class pa{constructor(t,e,n=lt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class fo{constructor(){this.fe=0,this.ge=mo(),this.pe=lt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=U(),e=U(),n=U();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:M()}}),new dn(this.pe,this.ye,t,e,n)}Ce(){this.we=!1,this.ge=mo()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,z(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class ec{constructor(t){this.Le=t,this.Be=new Map,this.ke=Ut(),this.qe=qn(),this.Qe=qn(),this.Ke=new X(q)}$e(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.Ue(e,t.Ve):this.We(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.We(e,t.key,t.Ve)}Ge(t){this.forEachTarget(t,e=>{const n=this.ze(e);switch(t.state){case 0:this.je(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.je(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),n.De(t.resumeToken));break;default:M()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((n,s)=>{this.je(s)&&e(s)})}Je(t){const e=t.targetId,n=t.me.count,s=this.Ye(e);if(s){const o=s.target;if(ei(o))if(n===0){const u=new L(o.path);this.We(e,u,gt.newNoDocument(u,O.min()))}else z(n===1);else{const u=this.Ze(e);if(u!==n){const c=this.Xe(t),h=c?this.et(c,t,u):1;if(h!==0){this.He(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,f)}}}}}Xe(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:o=0}=e;let u,c;try{u=Wt(n).toUint8Array()}catch(h){if(h instanceof Ko)return Ee("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new vi(u,s,o)}catch(h){return Ee(h instanceof Ze?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Te===0?null:c}et(t,e,n){return e.me.count===n-this.rt(t,e.targetId)?0:2}rt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let s=0;return n.forEach(o=>{const u=this.Le.nt(),c=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.We(e,o,null),s++)}),s}it(t){const e=new Map;this.Be.forEach((o,u)=>{const c=this.Ye(u);if(c){if(o.current&&ei(c.target)){const h=new L(c.target.path);this.st(h).has(u)||this.ot(u,h)||this.We(u,h,gt.newNoDocument(h,t))}o.be&&(e.set(u,o.ve()),o.Ce())}});let n=U();this.Qe.forEach((o,u)=>{let c=!0;u.forEachWhile(h=>{const f=this.Ye(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(o))}),this.ke.forEach((o,u)=>u.setReadTime(t));const s=new dr(t,e,this.Ke,this.ke,n);return this.ke=Ut(),this.qe=qn(),this.Qe=qn(),this.Ke=new X(q),s}Ue(t,e){if(!this.je(t))return;const n=this.ot(t,e.key)?2:0;this.ze(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t)),this.Qe=this.Qe.insert(e.key,this._t(e.key).add(t))}We(t,e,n){if(!this.je(t))return;const s=this.ze(t);this.ot(t,e)?s.Fe(e,1):s.Me(e),this.Qe=this.Qe.insert(e,this._t(e).delete(t)),this.Qe=this.Qe.insert(e,this._t(e).add(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.ze(t).xe()}ze(t){let e=this.Be.get(t);return e||(e=new fo,this.Be.set(t,e)),e}_t(t){let e=this.Qe.get(t);return e||(e=new nt(q),this.Qe=this.Qe.insert(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new nt(q),this.qe=this.qe.insert(t,e)),e}je(t){const e=this.Ye(t)!==null;return e||k("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ut(t)}He(t){this.Be.set(t,new fo),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.We(t,e,null)})}ot(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function qn(){return new X(L.comparator)}function mo(){return new X(L.comparator)}const nc={asc:"ASCENDING",desc:"DESCENDING"},rc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ic={and:"AND",or:"OR"};class sc{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ii(r,t){return r.useProto3Json||sr(t)?t:{value:t}}function Zn(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ga(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function oc(r,t){return Zn(r,t.toTimestamp())}function Dt(r){return z(!!r),O.fromTimestamp(function(e){const n=Qt(e);return new et(n.seconds,n.nanos)}(r))}function Ii(r,t){return si(r,t).canonicalString()}function si(r,t){const e=function(s){return new H(["projects",s.projectId,"databases",s.database])}(r).child("documents");return t===void 0?e:e.child(t)}function _a(r){const t=H.fromString(r);return z(Ia(t)),t}function oi(r,t){return Ii(r.databaseId,t.path)}function $r(r,t){const e=_a(t);if(e.get(1)!==r.databaseId.projectId)throw new b(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new b(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new L(Ea(e))}function ya(r,t){return Ii(r.databaseId,t)}function ac(r){const t=_a(r);return t.length===4?H.emptyPath():Ea(t)}function ai(r){return new H(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Ea(r){return z(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function po(r,t,e){return{name:oi(r,t),fields:e.value.mapValue.fields}}function uc(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:M()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(f,p){return f.useProto3Json?(z(p===void 0||typeof p=="string"),lt.fromBase64String(p||"")):(z(p===void 0||p instanceof Buffer||p instanceof Uint8Array),lt.fromUint8Array(p||new Uint8Array))}(r,t.targetChange.resumeToken),u=t.targetChange.cause,c=u&&function(f){const p=f.code===void 0?P.UNKNOWN:fa(f.code);return new b(p,f.message||"")}(u);e=new pa(n,s,o,c||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const s=$r(r,n.document.name),o=Dt(n.document.updateTime),u=n.document.createTime?Dt(n.document.createTime):O.min(),c=new It({mapValue:{fields:n.document.fields}}),h=gt.newFoundDocument(s,o,u,c),f=n.targetIds||[],p=n.removedTargetIds||[];e=new $n(f,p,h.key,h)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const s=$r(r,n.document),o=n.readTime?Dt(n.readTime):O.min(),u=gt.newNoDocument(s,o),c=n.removedTargetIds||[];e=new $n([],c,u.key,u)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const s=$r(r,n.document),o=n.removedTargetIds||[];e=new $n([],o,s,null)}else{if(!("filter"in t))return M();{t.filter;const n=t.filter;n.targetId;const{count:s=0,unchangedNames:o}=n,u=new Yl(s,o),c=n.targetId;e=new ma(c,u)}}return e}function lc(r,t){let e;if(t instanceof hn)e={update:po(r,t.key,t.value)};else if(t instanceof hr)e={delete:oi(r,t.key)};else if(t instanceof Jt)e={update:po(r,t.key,t.data),updateMask:yc(t.fieldMask)};else{if(!(t instanceof Wl))return M();e={verify:oi(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(o,u){const c=u.transform;if(c instanceof Yn)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ae)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof we)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Jn)return{fieldPath:u.field.canonicalString(),increment:c.Pe};throw M()}(0,n))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:oc(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M()}(r,t.precondition)),e}function cc(r,t){return r&&r.length>0?(z(t!==void 0),r.map(e=>function(s,o){let u=s.updateTime?Dt(s.updateTime):Dt(o);return u.isEqual(O.min())&&(u=Dt(o)),new Kl(u,s.transformResults||[])}(e,t))):[]}function hc(r,t){return{documents:[ya(r,t.path)]}}function dc(r,t){const e={structuredQuery:{}},n=t.path;let s;t.collectionGroup!==null?(s=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=ya(r,s);const o=function(f){if(f.length!==0)return va(Ct.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const u=function(f){if(f.length!==0)return f.map(p=>function(R){return{field:ge(R.field),direction:pc(R.dir)}}(p))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const c=ii(r,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{ct:e,parent:s}}function fc(r){let t=ac(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let s=null;if(n>0){z(n===1);const p=e.from[0];p.allDescendants?s=p.collectionId:t=t.child(p.collectionId)}let o=[];e.where&&(o=function(A){const R=Ta(A);return R instanceof Ct&&Ho(R)?R.getFilters():[R]}(e.where));let u=[];e.orderBy&&(u=function(A){return A.map(R=>function(N){return new Xn(_e(N.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(R))}(e.orderBy));let c=null;e.limit&&(c=function(A){let R;return R=typeof A=="object"?A.value:A,sr(R)?null:R}(e.limit));let h=null;e.startAt&&(h=function(A){const R=!!A.before,C=A.values||[];return new Hn(C,R)}(e.startAt));let f=null;return e.endAt&&(f=function(A){const R=!A.before,C=A.values||[];return new Hn(C,R)}(e.endAt)),bl(t,s,u,o,c,"F",h,f)}function mc(r,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Ta(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=_e(e.unaryFilter.field);return tt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=_e(e.unaryFilter.field);return tt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=_e(e.unaryFilter.field);return tt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=_e(e.unaryFilter.field);return tt.create(u,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(r):r.fieldFilter!==void 0?function(e){return tt.create(_e(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return Ct.create(e.compositeFilter.filters.map(n=>Ta(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M()}}(e.compositeFilter.op))}(r):M()}function pc(r){return nc[r]}function gc(r){return rc[r]}function _c(r){return ic[r]}function ge(r){return{fieldPath:r.canonicalString()}}function _e(r){return ut.fromServerFormat(r.fieldPath)}function va(r){return r instanceof tt?function(e){if(e.op==="=="){if(eo(e.value))return{unaryFilter:{field:ge(e.field),op:"IS_NAN"}};if(to(e.value))return{unaryFilter:{field:ge(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(eo(e.value))return{unaryFilter:{field:ge(e.field),op:"IS_NOT_NAN"}};if(to(e.value))return{unaryFilter:{field:ge(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ge(e.field),op:gc(e.op),value:e.value}}}(r):r instanceof Ct?function(e){const n=e.getFilters().map(s=>va(s));return n.length===1?n[0]:{compositeFilter:{op:_c(e.op),filters:n}}}(r):M()}function yc(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Ia(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(t,e,n,s,o=O.min(),u=O.min(),c=lt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new Gt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(t){this.ht=t}}function Tc(r){const t=fc({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?ri(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(){this.ln=new Ic}addToCollectionParentIndex(t,e){return this.ln.add(e),V.resolve()}getCollectionParents(t,e){return V.resolve(this.ln.getEntries(e))}addFieldIndex(t,e){return V.resolve()}deleteFieldIndex(t,e){return V.resolve()}deleteAllFieldIndexes(t){return V.resolve()}createTargetIndexes(t,e){return V.resolve()}getDocumentsMatchingTarget(t,e){return V.resolve(null)}getIndexType(t,e){return V.resolve(0)}getFieldIndexes(t,e){return V.resolve([])}getNextCollectionGroupToUpdate(t){return V.resolve(null)}getMinOffset(t,e){return V.resolve($t.min())}getMinOffsetFromCollectionGroup(t,e){return V.resolve($t.min())}updateCollectionGroup(t,e,n){return V.resolve()}updateIndexEntries(t,e){return V.resolve()}}class Ic{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new nt(H.comparator),o=!s.has(n);return this.index[e]=s.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new nt(H.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class vt{static withCacheSize(t){return new vt(t,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt.DEFAULT_COLLECTION_PERCENTILE=10,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vt.DEFAULT=new vt(41943040,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vt.DISABLED=new vt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(t){this.kn=t}next(){return this.kn+=2,this.kn}static qn(){return new Re(0)}static Qn(){return new Re(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o([r,t],[e,n]){const s=q(r,e);return s===0?q(t,n):s}class Ac{constructor(t){this.Gn=t,this.buffer=new nt(_o),this.zn=0}jn(){return++this.zn}Hn(t){const e=[t,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();_o(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class wc{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(t){k("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){De(e)?k("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await Se(e)}await this.Yn(3e5)})}}class Rc{constructor(t,e){this.Zn=t,this.params=e}calculateTargetCount(t,e){return this.Zn.Xn(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return V.resolve(ir.oe);const n=new Ac(e);return this.Zn.forEachTarget(t,s=>n.Hn(s.sequenceNumber)).next(()=>this.Zn.er(t,s=>n.Hn(s))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.Zn.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Zn.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(k("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(go)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(k("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),go):this.tr(t,e))}getCacheSize(t){return this.Zn.getCacheSize(t)}tr(t,e){let n,s,o,u,c,h,f;const p=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(A=>(A>this.params.maximumSequenceNumbersToCollect?(k("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),s=this.params.maximumSequenceNumbersToCollect):s=A,u=Date.now(),this.nthSequenceNumber(t,s))).next(A=>(n=A,c=Date.now(),this.removeTargets(t,n,e))).next(A=>(o=A,h=Date.now(),this.removeOrphanedDocuments(t,n))).next(A=>(f=Date.now(),me()<=Mt.DEBUG&&k("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-p}ms
	Determined least recently used ${s} in `+(c-u)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${A} documents in `+(f-h)+`ms
Total Duration: ${f-p}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:A})))}}function Pc(r,t){return new Rc(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(){this.changes=new ae(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,gt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?V.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(n=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(n!==null&&sn(n.mutation,s,wt.empty(),et.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,U()).next(()=>n))}getLocalViewOfDocuments(t,e,n=U()){const s=ie();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,n).next(o=>{let u=Je();return o.forEach((c,h)=>{u=u.insert(c,h.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const n=ie();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,U()))}populateOverlays(t,e,n){const s=[];return n.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((u,c)=>{e.set(u,c)})})}computeViews(t,e,n,s){let o=Ut();const u=rn(),c=function(){return rn()}();return e.forEach((h,f)=>{const p=n.get(f.key);s.has(f.key)&&(p===void 0||p.mutation instanceof Jt)?o=o.insert(f.key,f):p!==void 0?(u.set(f.key,p.mutation.getFieldMask()),sn(p.mutation,f,p.mutation.getFieldMask(),et.now())):u.set(f.key,wt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,p)=>u.set(f,p)),e.forEach((f,p)=>{var A;return c.set(f,new Cc(p,(A=u.get(f))!==null&&A!==void 0?A:null))}),c))}recalculateAndSaveOverlays(t,e){const n=rn();let s=new X((u,c)=>u-c),o=U();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const c of u)c.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let p=n.get(h)||wt.empty();p=c.applyToLocalView(f,p),n.set(h,p);const A=(s.get(c.batchId)||U()).add(h);s=s.insert(c.batchId,A)})}).next(()=>{const u=[],c=s.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),f=h.key,p=h.value,A=ia();p.forEach(R=>{if(!o.has(R)){const C=ha(e.get(R),n.get(R));C!==null&&A.set(R,C),o=o.add(R)}}),u.push(this.documentOverlayCache.saveOverlays(t,f,A))}return V.waitFor(u)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,s){return function(u){return L.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Zo(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next(o=>{const u=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-o.size):V.resolve(ie());let c=-1,h=o;return u.next(f=>V.forEach(f,(p,A)=>(c<A.largestBatchId&&(c=A.largestBatchId),o.get(p)?V.resolve():this.remoteDocumentCache.getEntry(t,p).next(R=>{h=h.insert(p,R)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,U())).next(p=>({batchId:c,changes:ra(p)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new L(e)).next(n=>{let s=Je();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const o=e.collectionGroup;let u=Je();return this.indexManager.getCollectionParents(t,o).next(c=>V.forEach(c,h=>{const f=function(A,R){return new cn(R,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,n,s).next(p=>{p.forEach((A,R)=>{u=u.insert(A,R)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,n,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,s))).next(u=>{o.forEach((h,f)=>{const p=f.getKey();u.get(p)===null&&(u=u.insert(p,gt.newInvalidDocument(p)))});let c=Je();return u.forEach((h,f)=>{const p=o.get(h);p!==void 0&&sn(p.mutation,f,wt.empty(),et.now()),ur(e,f)&&(c=c.insert(h,f))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(t){this.serializer=t,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(t,e){return V.resolve(this.Tr.get(e))}saveBundleMetadata(t,e){return this.Tr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Dt(s.createTime)}}(e)),V.resolve()}getNamedQuery(t,e){return V.resolve(this.Ir.get(e))}saveNamedQuery(t,e){return this.Ir.set(e.name,function(s){return{name:s.name,query:Tc(s.bundledQuery),readTime:Dt(s.readTime)}}(e)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(){this.overlays=new X(L.comparator),this.Er=new Map}getOverlay(t,e){return V.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ie();return V.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&n.set(s,o)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((s,o)=>{this.Tt(t,e,o)}),V.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.Er.get(n);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Er.delete(n)),V.resolve()}getOverlaysForCollection(t,e,n){const s=ie(),o=e.length+1,u=new L(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const h=c.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>n&&s.set(h.getKey(),h)}return V.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let o=new X((f,p)=>f-p);const u=this.overlays.getIterator();for(;u.hasNext();){const f=u.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>n){let p=o.get(f.largestBatchId);p===null&&(p=ie(),o=o.insert(f.largestBatchId,p)),p.set(f.getKey(),f)}}const c=ie(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,p)=>c.set(f,p)),!(c.size()>=s)););return V.resolve(c)}Tt(t,e,n){const s=this.overlays.get(n.key);if(s!==null){const u=this.Er.get(s.largestBatchId).delete(n.key);this.Er.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(n.key,new Xl(e,n));let o=this.Er.get(e);o===void 0&&(o=U(),this.Er.set(e,o)),this.Er.set(e,o.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(t){return V.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(){this.dr=new nt(it.Ar),this.Rr=new nt(it.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(t,e){const n=new it(t,e);this.dr=this.dr.add(n),this.Rr=this.Rr.add(n)}mr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.gr(new it(t,e))}pr(t,e){t.forEach(n=>this.removeReference(n,e))}yr(t){const e=new L(new H([])),n=new it(e,t),s=new it(e,t+1),o=[];return this.Rr.forEachInRange([n,s],u=>{this.gr(u),o.push(u.key)}),o}wr(){this.dr.forEach(t=>this.gr(t))}gr(t){this.dr=this.dr.delete(t),this.Rr=this.Rr.delete(t)}Sr(t){const e=new L(new H([])),n=new it(e,t),s=new it(e,t+1);let o=U();return this.Rr.forEachInRange([n,s],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new it(t,0),n=this.dr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class it{constructor(t,e){this.key=t,this.br=e}static Ar(t,e){return L.comparator(t.key,e.key)||q(t.br,e.br)}static Vr(t,e){return q(t.br,e.br)||L.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Dr=1,this.vr=new nt(it.Ar)}checkEmpty(t){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,s){const o=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Hl(o,e,n,s);this.mutationQueue.push(u);for(const c of s)this.vr=this.vr.add(new it(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return V.resolve(u)}lookupMutationBatch(t,e){return V.resolve(this.Cr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.Fr(n),o=s<0?0:s;return V.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(t){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new it(e,0),s=new it(e,Number.POSITIVE_INFINITY),o=[];return this.vr.forEachInRange([n,s],u=>{const c=this.Cr(u.br);o.push(c)}),V.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new nt(q);return e.forEach(s=>{const o=new it(s,0),u=new it(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([o,u],c=>{n=n.add(c.br)})}),V.resolve(this.Mr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let o=n;L.isDocumentKey(o)||(o=o.child(""));const u=new it(new L(o),0);let c=new nt(q);return this.vr.forEachWhile(h=>{const f=h.key.path;return!!n.isPrefixOf(f)&&(f.length===s&&(c=c.add(h.br)),!0)},u),V.resolve(this.Mr(c))}Mr(t){const e=[];return t.forEach(n=>{const s=this.Cr(n);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){z(this.Or(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.vr;return V.forEach(e.mutations,s=>{const o=new it(s.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.vr=n})}Ln(t){}containsKey(t,e){const n=new it(e,0),s=this.vr.firstAfterOrEqual(n);return V.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,V.resolve()}Or(t,e){return this.Fr(t)}Fr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Cr(t){const e=this.Fr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(t){this.Nr=t,this.docs=function(){return new X(L.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),o=s?s.size:0,u=this.Nr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return V.resolve(n?n.document.mutableCopy():gt.newInvalidDocument(e))}getEntries(t,e){let n=Ut();return e.forEach(s=>{const o=this.docs.get(s);n=n.insert(s,o?o.document.mutableCopy():gt.newInvalidDocument(s))}),V.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let o=Ut();const u=e.path,c=new L(u.child("")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:f,value:{document:p}}=h.getNext();if(!u.isPrefixOf(f.path))break;f.path.length>u.length+1||hl(cl(p),n)<=0||(s.has(p.key)||ur(e,p))&&(o=o.insert(p.key,p.mutableCopy()))}return V.resolve(o)}getAllFromCollectionGroup(t,e,n,s){M()}Lr(t,e){return V.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new Lc(this)}getSize(t){return V.resolve(this.size)}}class Lc extends Vc{constructor(t){super(),this.hr=t}applyChanges(t){const e=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?e.push(this.hr.addEntry(t,s)):this.hr.removeEntry(n)}),V.waitFor(e)}getFromCache(t,e){return this.hr.getEntry(t,e)}getAllFromCache(t,e){return this.hr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(t){this.persistence=t,this.Br=new ae(e=>gi(e),_i),this.lastRemoteSnapshotVersion=O.min(),this.highestTargetId=0,this.kr=0,this.qr=new Ai,this.targetCount=0,this.Qr=Re.qn()}forEachTarget(t,e){return this.Br.forEach((n,s)=>e(s)),V.resolve()}getLastRemoteSnapshotVersion(t){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return V.resolve(this.kr)}allocateTargetId(t){return this.highestTargetId=this.Qr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.kr&&(this.kr=e),V.resolve()}Un(t){this.Br.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Qr=new Re(e),this.highestTargetId=e),t.sequenceNumber>this.kr&&(this.kr=t.sequenceNumber)}addTargetData(t,e){return this.Un(e),this.targetCount+=1,V.resolve()}updateTargetData(t,e){return this.Un(e),V.resolve()}removeTargetData(t,e){return this.Br.delete(e.target),this.qr.yr(e.targetId),this.targetCount-=1,V.resolve()}removeTargets(t,e,n){let s=0;const o=[];return this.Br.forEach((u,c)=>{c.sequenceNumber<=e&&n.get(c.targetId)===null&&(this.Br.delete(u),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),V.waitFor(o).next(()=>s)}getTargetCount(t){return V.resolve(this.targetCount)}getTargetData(t,e){const n=this.Br.get(e)||null;return V.resolve(n)}addMatchingKeys(t,e,n){return this.qr.mr(e,n),V.resolve()}removeMatchingKeys(t,e,n){this.qr.pr(e,n);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(u=>{o.push(s.markPotentiallyOrphaned(t,u))}),V.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.qr.yr(e),V.resolve()}getMatchingKeysForTargetId(t,e){const n=this.qr.Sr(e);return V.resolve(n)}containsKey(t,e){return V.resolve(this.qr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(t,e){this.Kr={},this.overlays={},this.$r=new ir(0),this.Ur=!1,this.Ur=!0,this.Wr=new bc,this.referenceDelegate=t(this),this.Gr=new Mc(this),this.indexManager=new vc,this.remoteDocumentCache=function(s){return new xc(s)}(n=>this.referenceDelegate.zr(n)),this.serializer=new Ec(e),this.jr=new Dc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new kc,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Kr[t.toKey()];return n||(n=new Nc(e,this.referenceDelegate),this.Kr[t.toKey()]=n),n}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(t,e,n){k("MemoryPersistence","Starting transaction:",t);const s=new Oc(this.$r.next());return this.referenceDelegate.Hr(),n(s).next(o=>this.referenceDelegate.Jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Yr(t,e){return V.or(Object.values(this.Kr).map(n=>()=>n.containsKey(t,e)))}}class Oc extends fl{constructor(t){super(),this.currentSequenceNumber=t}}class wi{constructor(t){this.persistence=t,this.Zr=new Ai,this.Xr=null}static ei(t){return new wi(t)}get ti(){if(this.Xr)return this.Xr;throw M()}addReference(t,e,n){return this.Zr.addReference(n,e),this.ti.delete(n.toString()),V.resolve()}removeReference(t,e,n){return this.Zr.removeReference(n,e),this.ti.add(n.toString()),V.resolve()}markPotentiallyOrphaned(t,e){return this.ti.add(e.toString()),V.resolve()}removeTarget(t,e){this.Zr.yr(e.targetId).forEach(s=>this.ti.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.ti.add(o.toString()))}).next(()=>n.removeTargetData(t,e))}Hr(){this.Xr=new Set}Jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.ti,n=>{const s=L.fromPath(n);return this.ni(t,s).next(o=>{o||e.removeEntry(s,O.min())})}).next(()=>(this.Xr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ni(t,e).next(n=>{n?this.ti.delete(e.toString()):this.ti.add(e.toString())})}zr(t){return 0}ni(t,e){return V.or([()=>V.resolve(this.Zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Yr(t,e)])}}class tr{constructor(t,e){this.persistence=t,this.ri=new ae(n=>gl(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=Pc(this,e)}static ei(t,e){return new tr(t,e)}Hr(){}Jr(t){return V.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}Xn(t){const e=this.nr(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(s=>n+s))}nr(t){let e=0;return this.er(t,n=>{e++}).next(()=>e)}er(t,e){return V.forEach(this.ri,(n,s)=>this.ir(t,n,s).next(o=>o?V.resolve():e(s)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.Lr(t,u=>this.ir(t,u,e).next(c=>{c||(n++,o.removeEntry(u,O.min()))})).next(()=>o.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.ri.set(e,t.currentSequenceNumber),V.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.ri.set(n,t.currentSequenceNumber),V.resolve()}removeReference(t,e,n){return this.ri.set(n,t.currentSequenceNumber),V.resolve()}updateLimboDocument(t,e){return this.ri.set(e,t.currentSequenceNumber),V.resolve()}zr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=zn(t.data.value)),e}ir(t,e,n){return V.or([()=>this.persistence.Yr(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.ri.get(e);return V.resolve(s!==void 0&&s>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Wi=n,this.Gi=s}static zi(t,e){let n=U(),s=U();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Ri(t,e.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return Ju()?8:ml(Zu())>0?6:4}()}initialize(t,e){this.Zi=t,this.indexManager=e,this.ji=!0}getDocumentsMatchingQuery(t,e,n,s){const o={result:null};return this.Xi(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.es(t,e,s,n).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new Fc;return this.ts(t,e,u).next(c=>{if(o.result=c,this.Hi)return this.ns(t,e,u,c.size)})}).next(()=>o.result)}ns(t,e,n,s){return n.documentReadCount<this.Ji?(me()<=Mt.DEBUG&&k("QueryEngine","SDK will not create cache indexes for query:",pe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),V.resolve()):(me()<=Mt.DEBUG&&k("QueryEngine","Query:",pe(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.Yi*s?(me()<=Mt.DEBUG&&k("QueryEngine","The SDK decides to create cache indexes for query:",pe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,St(e))):V.resolve())}Xi(t,e){if(so(e))return V.resolve(null);let n=St(e);return this.indexManager.getIndexType(t,n).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=ri(e,null,"F"),n=St(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(o=>{const u=U(...o);return this.Zi.getDocuments(t,u).next(c=>this.indexManager.getMinOffset(t,n).next(h=>{const f=this.rs(e,c);return this.ss(e,f,u,h.readTime)?this.Xi(t,ri(e,null,"F")):this.os(t,f,e,h)}))})))}es(t,e,n,s){return so(e)||s.isEqual(O.min())?V.resolve(null):this.Zi.getDocuments(t,n).next(o=>{const u=this.rs(e,o);return this.ss(e,u,n,s)?V.resolve(null):(me()<=Mt.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),pe(e)),this.os(t,u,e,ll(s,-1)).next(c=>c))})}rs(t,e){let n=new nt(ea(t));return e.forEach((s,o)=>{ur(t,o)&&(n=n.add(o))}),n}ss(t,e,n,s){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ts(t,e,n){return me()<=Mt.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",pe(e)),this.Zi.getDocumentsMatchingQuery(t,e,$t.min(),n)}os(t,e,n,s){return this.Zi.getDocumentsMatchingQuery(t,n,s).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(t,e,n,s){this.persistence=t,this._s=e,this.serializer=s,this.us=new X(q),this.cs=new ae(o=>gi(o),_i),this.ls=new Map,this.hs=t.getRemoteDocumentCache(),this.Gr=t.getTargetCache(),this.jr=t.getBundleCache(),this.Ps(n)}Ps(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Sc(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.us))}}function Bc(r,t,e,n){return new qc(r,t,e,n)}async function wa(r,t){const e=F(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let s;return e.mutationQueue.getAllMutationBatches(n).next(o=>(s=o,e.Ps(t),e.mutationQueue.getAllMutationBatches(n))).next(o=>{const u=[],c=[];let h=U();for(const f of s){u.push(f.batchId);for(const p of f.mutations)h=h.add(p.key)}for(const f of o){c.push(f.batchId);for(const p of f.mutations)h=h.add(p.key)}return e.localDocuments.getDocuments(n,h).next(f=>({Ts:f,removedBatchIds:u,addedBatchIds:c}))})})}function jc(r,t){const e=F(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=t.batch.keys(),o=e.hs.newChangeBuffer({trackRemovals:!0});return function(c,h,f,p){const A=f.batch,R=A.keys();let C=V.resolve();return R.forEach(N=>{C=C.next(()=>p.getEntry(h,N)).next(x=>{const D=f.docVersions.get(N);z(D!==null),x.version.compareTo(D)<0&&(A.applyToRemoteDocument(x,f),x.isValidDocument()&&(x.setReadTime(f.commitVersion),p.addEntry(x)))})}),C.next(()=>c.mutationQueue.removeMutationBatch(h,A))}(e,n,t,o).next(()=>o.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let h=U();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(h=h.add(c.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(n,s))})}function Ra(r){const t=F(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Gr.getLastRemoteSnapshotVersion(e))}function zc(r,t){const e=F(r),n=t.snapshotVersion;let s=e.us;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=e.hs.newChangeBuffer({trackRemovals:!0});s=e.us;const c=[];t.targetChanges.forEach((p,A)=>{const R=s.get(A);if(!R)return;c.push(e.Gr.removeMatchingKeys(o,p.removedDocuments,A).next(()=>e.Gr.addMatchingKeys(o,p.addedDocuments,A)));let C=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(A)!==null?C=C.withResumeToken(lt.EMPTY_BYTE_STRING,O.min()).withLastLimboFreeSnapshotVersion(O.min()):p.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(p.resumeToken,n)),s=s.insert(A,C),function(x,D,G){return x.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(R,C,p)&&c.push(e.Gr.updateTargetData(o,C))});let h=Ut(),f=U();if(t.documentUpdates.forEach(p=>{t.resolvedLimboDocuments.has(p)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,p))}),c.push(Gc(o,u,t.documentUpdates).next(p=>{h=p.Is,f=p.Es})),!n.isEqual(O.min())){const p=e.Gr.getLastRemoteSnapshotVersion(o).next(A=>e.Gr.setTargetsMetadata(o,o.currentSequenceNumber,n));c.push(p)}return V.waitFor(c).next(()=>u.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.us=s,o))}function Gc(r,t,e){let n=U(),s=U();return e.forEach(o=>n=n.add(o)),t.getEntries(r,n).next(o=>{let u=Ut();return e.forEach((c,h)=>{const f=o.get(c);h.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(c)),h.isNoDocument()&&h.version.isEqual(O.min())?(t.removeEntry(c,h.readTime),u=u.insert(c,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),u=u.insert(c,h)):k("LocalStore","Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",h.version)}),{Is:u,Es:s}})}function Kc(r,t){const e=F(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function $c(r,t){const e=F(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return e.Gr.getTargetData(n,t).next(o=>o?(s=o,V.resolve(s)):e.Gr.allocateTargetId(n).next(u=>(s=new Gt(t,u,"TargetPurposeListen",n.currentSequenceNumber),e.Gr.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=e.us.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.us=e.us.insert(n.targetId,n),e.cs.set(t,n.targetId)),n})}async function ui(r,t,e){const n=F(r),s=n.us.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,u=>n.persistence.referenceDelegate.removeTarget(u,s))}catch(u){if(!De(u))throw u;k("LocalStore",`Failed to update sequence numbers for target ${t}: ${u}`)}n.us=n.us.remove(t),n.cs.delete(s.target)}function yo(r,t,e){const n=F(r);let s=O.min(),o=U();return n.persistence.runTransaction("Execute query","readwrite",u=>function(h,f,p){const A=F(h),R=A.cs.get(p);return R!==void 0?V.resolve(A.us.get(R)):A.Gr.getTargetData(f,p)}(n,u,St(t)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,n.Gr.getMatchingKeysForTargetId(u,c.targetId).next(h=>{o=h})}).next(()=>n._s.getDocumentsMatchingQuery(u,t,e?s:O.min(),e?o:U())).next(c=>(Qc(n,xl(t),c),{documents:c,ds:o})))}function Qc(r,t,e){let n=r.ls.get(t)||O.min();e.forEach((s,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),r.ls.set(t,n)}class Eo{constructor(){this.activeTargetIds=ql()}ps(t){this.activeTargetIds=this.activeTargetIds.add(t)}ys(t){this.activeTargetIds=this.activeTargetIds.delete(t)}gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Wc{constructor(){this._o=new Eo,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this._o.ps(t),this.ao[t]||"not-current"}updateQueryState(t,e,n){this.ao[t]=e}removeLocalQueryTarget(t){this._o.ys(t)}isLocalQueryTarget(t){return this._o.activeTargetIds.has(t)}clearQueryState(t){delete this.ao[t]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(t){return this._o.activeTargetIds.has(t)}start(){return this._o=new Eo,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{uo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(t){this.To.push(t)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){k("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.To)t(0)}Po(){k("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.To)t(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bn=null;function Qr(){return Bn===null?Bn=function(){return 268435456+Math.round(2147483648*Math.random())}():Bn++,"0x"+Bn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(t){this.Eo=t.Eo,this.Ao=t.Ao}Ro(t){this.Vo=t}mo(t){this.fo=t}po(t){this.yo=t}onMessage(t){this.wo=t}close(){this.Ao()}send(t){this.Eo(t)}So(){this.Vo()}bo(){this.fo()}Do(t){this.yo(t)}vo(t){this.wo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="WebChannelConnection";class Jc extends class{get Co(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Fo=n+"://"+e.host,this.Mo=`projects/${s}/databases/${o}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Oo(e,n,s,o,u){const c=Qr(),h=this.No(e,n.toUriEncodedString());k("RestConnection",`Sending RPC '${e}' ${c}:`,h,s);const f={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(f,o,u),this.Bo(e,h,f,s).then(p=>(k("RestConnection",`Received RPC '${e}' ${c}: `,p),p),p=>{throw Ee("RestConnection",`RPC '${e}' ${c} failed with error: `,p,"url: ",h,"request:",s),p})}ko(e,n,s,o,u,c){return this.Oo(e,n,s,o,u)}Lo(e,n,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ce}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}No(e,n){const s=Xc[e];return`${this.Fo}/v1/${n}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Bo(t,e,n,s){const o=Qr();return new Promise((u,c)=>{const h=new Oo;h.setWithCredentials(!0),h.listenOnce(Fo.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case jn.NO_ERROR:const p=h.getResponseJson();k(mt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(p)),u(p);break;case jn.TIMEOUT:k(mt,`RPC '${t}' ${o} timed out`),c(new b(P.DEADLINE_EXCEEDED,"Request time out"));break;case jn.HTTP_ERROR:const A=h.getStatus();if(k(mt,`RPC '${t}' ${o} failed with status:`,A,"response text:",h.getResponseText()),A>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const C=R==null?void 0:R.error;if(C&&C.status&&C.message){const N=function(D){const G=D.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(G)>=0?G:P.UNKNOWN}(C.status);c(new b(N,C.message))}else c(new b(P.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new b(P.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{k(mt,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(s);k(mt,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",f,n,15)})}qo(t,e,n){const s=Qr(),o=[this.Fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=Bo(),c=qo(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Lo(h.initMessageHeaders,e,n),h.encodeInitMessageHeaders=!0;const p=o.join("");k(mt,`Creating RPC '${t}' stream ${s}: ${p}`,h);const A=u.createWebChannel(p,h);let R=!1,C=!1;const N=new Yc({Eo:D=>{C?k(mt,`Not sending because RPC '${t}' stream ${s} is closed:`,D):(R||(k(mt,`Opening RPC '${t}' stream ${s} transport.`),A.open(),R=!0),k(mt,`RPC '${t}' stream ${s} sending:`,D),A.send(D))},Ao:()=>A.close()}),x=(D,G,K)=>{D.listen(G,$=>{try{K($)}catch(rt){setTimeout(()=>{throw rt},0)}})};return x(A,Ye.EventType.OPEN,()=>{C||(k(mt,`RPC '${t}' stream ${s} transport opened.`),N.So())}),x(A,Ye.EventType.CLOSE,()=>{C||(C=!0,k(mt,`RPC '${t}' stream ${s} transport closed`),N.Do())}),x(A,Ye.EventType.ERROR,D=>{C||(C=!0,Ee(mt,`RPC '${t}' stream ${s} transport errored:`,D),N.Do(new b(P.UNAVAILABLE,"The operation could not be completed")))}),x(A,Ye.EventType.MESSAGE,D=>{var G;if(!C){const K=D.data[0];z(!!K);const $=K,rt=($==null?void 0:$.error)||((G=$[0])===null||G===void 0?void 0:G.error);if(rt){k(mt,`RPC '${t}' stream ${s} received error:`,rt);const bt=rt.status;let st=function(_){const y=Z[_];if(y!==void 0)return fa(y)}(bt),T=rt.message;st===void 0&&(st=P.INTERNAL,T="Unknown error status: "+bt+" with message "+rt.message),C=!0,N.Do(new b(st,T)),A.close()}else k(mt,`RPC '${t}' stream ${s} received:`,K),N.vo(K)}}),x(c,Uo.STAT_EVENT,D=>{D.stat===Yr.PROXY?k(mt,`RPC '${t}' stream ${s} detected buffering proxy`):D.stat===Yr.NOPROXY&&k(mt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{N.bo()},0),N}}function Wr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(r){return new sc(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(t,e,n=1e3,s=1.5,o=6e4){this.li=t,this.timerId=e,this.Qo=n,this.Ko=s,this.$o=o,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(t){this.cancel();const e=Math.floor(this.Uo+this.Ho()),n=Math.max(0,Date.now()-this.Go),s=Math.max(0,e-n);s>0&&k("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),t())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(t,e,n,s,o,u,c,h){this.li=t,this.Yo=n,this.Zo=s,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Pa(t,e)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(t){this.l_(),this.stream.send(t)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(t,e){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,t!==4?this.r_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(Ft(e.toString()),Ft("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.po(e)}P_(){}auth(){this.state=1;const t=this.T_(this.Xo),e=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.Xo===e&&this.I_(n,s)},n=>{t(()=>{const s=new b(P.UNKNOWN,"Fetching auth token failed: "+n.message);return this.E_(s)})})}I_(t,e){const n=this.T_(this.Xo);this.stream=this.d_(t,e),this.stream.Ro(()=>{n(()=>this.listener.Ro())}),this.stream.mo(()=>{n(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{n(()=>this.E_(s))}),this.stream.onMessage(s=>{n(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(t){return k("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}T_(t){return e=>{this.li.enqueueAndForget(()=>this.Xo===t?e():(k("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Zc extends Va{constructor(t,e,n,s,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,u),this.serializer=o}d_(t,e){return this.connection.qo("Listen",t,e)}A_(t){return this.onNext(t)}onNext(t){this.r_.reset();const e=uc(this.serializer,t),n=function(o){if(!("targetChange"in o))return O.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?O.min():u.readTime?Dt(u.readTime):O.min()}(t);return this.listener.R_(e,n)}V_(t){const e={};e.database=ai(this.serializer),e.addTarget=function(o,u){let c;const h=u.target;if(c=ei(h)?{documents:hc(o,h)}:{query:dc(o,h).ct},c.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){c.resumeToken=ga(o,u.resumeToken);const f=ii(o,u.expectedCount);f!==null&&(c.expectedCount=f)}else if(u.snapshotVersion.compareTo(O.min())>0){c.readTime=Zn(o,u.snapshotVersion.toTimestamp());const f=ii(o,u.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,t);const n=mc(this.serializer,t);n&&(e.labels=n),this.c_(e)}m_(t){const e={};e.database=ai(this.serializer),e.removeTarget=t,this.c_(e)}}class th extends Va{constructor(t,e,n,s,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,u),this.serializer=o}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(t,e){return this.connection.qo("Write",t,e)}A_(t){return z(!!t.streamToken),this.lastStreamToken=t.streamToken,z(!t.writeResults||t.writeResults.length===0),this.listener.p_()}onNext(t){z(!!t.streamToken),this.lastStreamToken=t.streamToken,this.r_.reset();const e=cc(t.writeResults,t.commitTime),n=Dt(t.commitTime);return this.listener.y_(n,e)}w_(){const t={};t.database=ai(this.serializer),this.c_(t)}g_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>lc(this.serializer,n))};this.c_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new b(P.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(t,e,n,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Oo(t,si(e,n),s,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new b(P.UNKNOWN,o.toString())})}ko(t,e,n,s,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,c])=>this.connection.ko(t,si(e,n),s,u,c,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new b(P.UNKNOWN,u.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class nh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(t){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.M_("Offline")))}set(t){this.N_(),this.D_=0,t==="Online"&&(this.C_=!1),this.M_(t)}M_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}x_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Ft(e),this.C_=!1):k("OnlineStateTracker",e)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(t,e,n,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=o,this.Q_.uo(u=>{n.enqueueAndForget(async()=>{ue(this)&&(k("RemoteStore","Restarting streams for network reachability change."),await async function(h){const f=F(h);f.k_.add(4),await fn(f),f.K_.set("Unknown"),f.k_.delete(4),await mr(f)}(this))})}),this.K_=new nh(n,s)}}async function mr(r){if(ue(r))for(const t of r.q_)await t(!0)}async function fn(r){for(const t of r.q_)await t(!1)}function Ca(r,t){const e=F(r);e.B_.has(t.targetId)||(e.B_.set(t.targetId,t),Si(e)?Ci(e):ke(e).s_()&&Vi(e,t))}function Pi(r,t){const e=F(r),n=ke(e);e.B_.delete(t),n.s_()&&Sa(e,t),e.B_.size===0&&(n.s_()?n.a_():ue(e)&&e.K_.set("Unknown"))}function Vi(r,t){if(r.U_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(O.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}ke(r).V_(t)}function Sa(r,t){r.U_.xe(t),ke(r).m_(t)}function Ci(r){r.U_=new ec({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>r.B_.get(t)||null,nt:()=>r.datastore.serializer.databaseId}),ke(r).start(),r.K_.F_()}function Si(r){return ue(r)&&!ke(r).i_()&&r.B_.size>0}function ue(r){return F(r).k_.size===0}function Da(r){r.U_=void 0}async function ih(r){r.K_.set("Online")}async function sh(r){r.B_.forEach((t,e)=>{Vi(r,t)})}async function oh(r,t){Da(r),Si(r)?(r.K_.O_(t),Ci(r)):r.K_.set("Unknown")}async function ah(r,t,e){if(r.K_.set("Online"),t instanceof pa&&t.state===2&&t.cause)try{await async function(s,o){const u=o.cause;for(const c of o.targetIds)s.B_.has(c)&&(await s.remoteSyncer.rejectListen(c,u),s.B_.delete(c),s.U_.removeTarget(c))}(r,t)}catch(n){k("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await er(r,n)}else if(t instanceof $n?r.U_.$e(t):t instanceof ma?r.U_.Je(t):r.U_.Ge(t),!e.isEqual(O.min()))try{const n=await Ra(r.localStore);e.compareTo(n)>=0&&await function(o,u){const c=o.U_.it(u);return c.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.B_.get(f);p&&o.B_.set(f,p.withResumeToken(h.resumeToken,u))}}),c.targetMismatches.forEach((h,f)=>{const p=o.B_.get(h);if(!p)return;o.B_.set(h,p.withResumeToken(lt.EMPTY_BYTE_STRING,p.snapshotVersion)),Sa(o,h);const A=new Gt(p.target,h,f,p.sequenceNumber);Vi(o,A)}),o.remoteSyncer.applyRemoteEvent(c)}(r,e)}catch(n){k("RemoteStore","Failed to raise snapshot:",n),await er(r,n)}}async function er(r,t,e){if(!De(t))throw t;r.k_.add(1),await fn(r),r.K_.set("Offline"),e||(e=()=>Ra(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{k("RemoteStore","Retrying IndexedDB access"),await e(),r.k_.delete(1),await mr(r)})}function ka(r,t){return t().catch(e=>er(r,e,t))}async function pr(r){const t=F(r),e=Xt(t);let n=t.L_.length>0?t.L_[t.L_.length-1].batchId:-1;for(;uh(t);)try{const s=await Kc(t.localStore,n);if(s===null){t.L_.length===0&&e.a_();break}n=s.batchId,lh(t,s)}catch(s){await er(t,s)}ba(t)&&Na(t)}function uh(r){return ue(r)&&r.L_.length<10}function lh(r,t){r.L_.push(t);const e=Xt(r);e.s_()&&e.f_&&e.g_(t.mutations)}function ba(r){return ue(r)&&!Xt(r).i_()&&r.L_.length>0}function Na(r){Xt(r).start()}async function ch(r){Xt(r).w_()}async function hh(r){const t=Xt(r);for(const e of r.L_)t.g_(e.mutations)}async function dh(r,t,e){const n=r.L_.shift(),s=Ti.from(n,t,e);await ka(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await pr(r)}async function fh(r,t){t&&Xt(r).f_&&await async function(n,s){if(function(u){return Jl(u)&&u!==P.ABORTED}(s.code)){const o=n.L_.shift();Xt(n).__(),await ka(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,s)),await pr(n)}}(r,t),ba(r)&&Na(r)}async function vo(r,t){const e=F(r);e.asyncQueue.verifyOperationInProgress(),k("RemoteStore","RemoteStore received new credentials");const n=ue(e);e.k_.add(3),await fn(e),n&&e.K_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.k_.delete(3),await mr(e)}async function mh(r,t){const e=F(r);t?(e.k_.delete(2),await mr(e)):t||(e.k_.add(2),await fn(e),e.K_.set("Unknown"))}function ke(r){return r.W_||(r.W_=function(e,n,s){const o=F(e);return o.b_(),new Zc(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(r.datastore,r.asyncQueue,{Ro:ih.bind(null,r),mo:sh.bind(null,r),po:oh.bind(null,r),R_:ah.bind(null,r)}),r.q_.push(async t=>{t?(r.W_.__(),Si(r)?Ci(r):r.K_.set("Unknown")):(await r.W_.stop(),Da(r))})),r.W_}function Xt(r){return r.G_||(r.G_=function(e,n,s){const o=F(e);return o.b_(),new th(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(r.datastore,r.asyncQueue,{Ro:()=>Promise.resolve(),mo:ch.bind(null,r),po:fh.bind(null,r),p_:hh.bind(null,r),y_:dh.bind(null,r)}),r.q_.push(async t=>{t?(r.G_.__(),await pr(r)):(await r.G_.stop(),r.L_.length>0&&(k("RemoteStore",`Stopping write stream with ${r.L_.length} pending writes`),r.L_=[]))})),r.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(t,e,n,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=o,this.deferred=new Ot,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,o){const u=Date.now()+n,c=new Di(t,e,u,s,o);return c.start(n),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new b(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ki(r,t){if(Ft("AsyncQueue",`${t}: ${r}`),De(r))return new b(P.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{static emptySet(t){return new ye(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||L.comparator(e.key,n.key):(e,n)=>L.comparator(e.key,n.key),this.keyedMap=Je(),this.sortedSet=new X(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof ye)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=n.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new ye;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(){this.z_=new X(L.comparator)}track(t){const e=t.doc.key,n=this.z_.get(e);n?t.type!==0&&n.type===3?this.z_=this.z_.insert(e,t):t.type===3&&n.type!==1?this.z_=this.z_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.z_=this.z_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.z_=this.z_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.z_=this.z_.remove(e):t.type===1&&n.type===2?this.z_=this.z_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.z_=this.z_.insert(e,{type:2,doc:t.doc}):M():this.z_=this.z_.insert(e,t)}j_(){const t=[];return this.z_.inorderTraversal((e,n)=>{t.push(n)}),t}}class Pe{constructor(t,e,n,s,o,u,c,h,f){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,n,s,o){const u=[];return e.forEach(c=>{u.push({type:0,doc:c})}),new Pe(t,e,ye.emptySet(e),u,n,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ar(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(t=>t.Z_())}}class gh{constructor(){this.queries=Ao(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(e,n){const s=F(e),o=s.queries;s.queries=Ao(),o.forEach((u,c)=>{for(const h of c.J_)h.onError(n)})})(this,new b(P.ABORTED,"Firestore shutting down"))}}function Ao(){return new ae(r=>ta(r),ar)}async function xa(r,t){const e=F(r);let n=3;const s=t.query;let o=e.queries.get(s);o?!o.Y_()&&t.Z_()&&(n=2):(o=new ph,n=t.Z_()?0:1);try{switch(n){case 0:o.H_=await e.onListen(s,!0);break;case 1:o.H_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(u){const c=ki(u,`Initialization of query '${pe(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,o),o.J_.push(t),t.ea(e.onlineState),o.H_&&t.ta(o.H_)&&bi(e)}async function La(r,t){const e=F(r),n=t.query;let s=3;const o=e.queries.get(n);if(o){const u=o.J_.indexOf(t);u>=0&&(o.J_.splice(u,1),o.J_.length===0?s=t.Z_()?0:1:!o.Y_()&&t.Z_()&&(s=2))}switch(s){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function _h(r,t){const e=F(r);let n=!1;for(const s of t){const o=s.query,u=e.queries.get(o);if(u){for(const c of u.J_)c.ta(s)&&(n=!0);u.H_=s}}n&&bi(e)}function yh(r,t,e){const n=F(r),s=n.queries.get(t);if(s)for(const o of s.J_)o.onError(e);n.queries.delete(t)}function bi(r){r.X_.forEach(t=>{t.next()})}var li,wo;(wo=li||(li={})).na="default",wo.Cache="cache";class Ma{constructor(t,e,n){this.query=t,this.ra=e,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=n||{}}ta(t){if(!this.options.includeMetadataChanges){const n=[];for(const s of t.docChanges)s.type!==3&&n.push(s);t=new Pe(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ia?this.oa(t)&&(this.ra.next(t),e=!0):this._a(t,this.onlineState)&&(this.aa(t),e=!0),this.sa=t,e}onError(t){this.ra.error(t)}ea(t){this.onlineState=t;let e=!1;return this.sa&&!this.ia&&this._a(this.sa,t)&&(this.aa(this.sa),e=!0),e}_a(t,e){if(!t.fromCache||!this.Z_())return!0;const n=e!=="Offline";return(!this.options.ua||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}oa(t){if(t.docChanges.length>0)return!0;const e=this.sa&&this.sa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}aa(t){t=Pe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ia=!0,this.ra.next(t)}Z_(){return this.options.source!==li.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(t){this.key=t}}class Fa{constructor(t){this.key=t}}class Eh{constructor(t,e){this.query=t,this.da=e,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=U(),this.mutatedKeys=U(),this.Va=ea(t),this.ma=new ye(this.Va)}get fa(){return this.da}ga(t,e){const n=e?e.pa:new Io,s=e?e.ma:this.ma;let o=e?e.mutatedKeys:this.mutatedKeys,u=s,c=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((p,A)=>{const R=s.get(p),C=ur(this.query,A)?A:null,N=!!R&&this.mutatedKeys.has(R.key),x=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let D=!1;R&&C?R.data.isEqual(C.data)?N!==x&&(n.track({type:3,doc:C}),D=!0):this.ya(R,C)||(n.track({type:2,doc:C}),D=!0,(h&&this.Va(C,h)>0||f&&this.Va(C,f)<0)&&(c=!0)):!R&&C?(n.track({type:0,doc:C}),D=!0):R&&!C&&(n.track({type:1,doc:R}),D=!0,(h||f)&&(c=!0)),D&&(C?(u=u.add(C),o=x?o.add(p):o.delete(p)):(u=u.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const p=this.query.limitType==="F"?u.last():u.first();u=u.delete(p.key),o=o.delete(p.key),n.track({type:1,doc:p})}return{ma:u,pa:n,ss:c,mutatedKeys:o}}ya(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const o=this.ma;this.ma=t.ma,this.mutatedKeys=t.mutatedKeys;const u=t.pa.j_();u.sort((p,A)=>function(C,N){const x=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return x(C)-x(N)}(p.type,A.type)||this.Va(p.doc,A.doc)),this.wa(n),s=s!=null&&s;const c=e&&!s?this.Sa():[],h=this.Ra.size===0&&this.current&&!s?1:0,f=h!==this.Aa;return this.Aa=h,u.length!==0||f?{snapshot:new Pe(this.query,t.ma,o,u,t.mutatedKeys,h===0,f,!1,!!n&&n.resumeToken.approximateByteSize()>0),ba:c}:{ba:c}}ea(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Io,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(t){return!this.da.has(t)&&!!this.ma.has(t)&&!this.ma.get(t).hasLocalMutations}wa(t){t&&(t.addedDocuments.forEach(e=>this.da=this.da.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.da=this.da.delete(e)),this.current=t.current)}Sa(){if(!this.current)return[];const t=this.Ra;this.Ra=U(),this.ma.forEach(n=>{this.Da(n.key)&&(this.Ra=this.Ra.add(n.key))});const e=[];return t.forEach(n=>{this.Ra.has(n)||e.push(new Fa(n))}),this.Ra.forEach(n=>{t.has(n)||e.push(new Oa(n))}),e}va(t){this.da=t.ds,this.Ra=U();const e=this.ga(t.documents);return this.applyChanges(e,!0)}Ca(){return Pe.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class Th{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class vh{constructor(t){this.key=t,this.Fa=!1}}class Ih{constructor(t,e,n,s,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Ma={},this.xa=new ae(c=>ta(c),ar),this.Oa=new Map,this.Na=new Set,this.La=new X(L.comparator),this.Ba=new Map,this.ka=new Ai,this.qa={},this.Qa=new Map,this.Ka=Re.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function Ah(r,t,e=!0){const n=Ga(r);let s;const o=n.xa.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Ca()):s=await Ua(n,t,e,!0),s}async function wh(r,t){const e=Ga(r);await Ua(e,t,!0,!1)}async function Ua(r,t,e,n){const s=await $c(r.localStore,St(t)),o=s.targetId,u=r.sharedClientState.addLocalQueryTarget(o,e);let c;return n&&(c=await Rh(r,t,o,u==="current",s.resumeToken)),r.isPrimaryClient&&e&&Ca(r.remoteStore,s),c}async function Rh(r,t,e,n,s){r.Ua=(A,R,C)=>async function(x,D,G,K){let $=D.view.ga(G);$.ss&&($=await yo(x.localStore,D.query,!1).then(({documents:T})=>D.view.ga(T,$)));const rt=K&&K.targetChanges.get(D.targetId),bt=K&&K.targetMismatches.get(D.targetId)!=null,st=D.view.applyChanges($,x.isPrimaryClient,rt,bt);return Po(x,D.targetId,st.ba),st.snapshot}(r,A,R,C);const o=await yo(r.localStore,t,!0),u=new Eh(t,o.ds),c=u.ga(o.documents),h=dn.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",s),f=u.applyChanges(c,r.isPrimaryClient,h);Po(r,e,f.ba);const p=new Th(t,e,u);return r.xa.set(t,p),r.Oa.has(e)?r.Oa.get(e).push(t):r.Oa.set(e,[t]),f.snapshot}async function Ph(r,t,e){const n=F(r),s=n.xa.get(t),o=n.Oa.get(s.targetId);if(o.length>1)return n.Oa.set(s.targetId,o.filter(u=>!ar(u,t))),void n.xa.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ui(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),e&&Pi(n.remoteStore,s.targetId),ci(n,s.targetId)}).catch(Se)):(ci(n,s.targetId),await ui(n.localStore,s.targetId,!0))}async function Vh(r,t){const e=F(r),n=e.xa.get(t),s=e.Oa.get(n.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),Pi(e.remoteStore,n.targetId))}async function Ch(r,t,e){const n=Lh(r);try{const s=await function(u,c){const h=F(u),f=et.now(),p=c.reduce((C,N)=>C.add(N.key),U());let A,R;return h.persistence.runTransaction("Locally write mutations","readwrite",C=>{let N=Ut(),x=U();return h.hs.getEntries(C,p).next(D=>{N=D,N.forEach((G,K)=>{K.isValidDocument()||(x=x.add(G))})}).next(()=>h.localDocuments.getOverlayedDocuments(C,N)).next(D=>{A=D;const G=[];for(const K of c){const $=Ql(K,A.get(K.key).overlayedDocument);$!=null&&G.push(new Jt(K.key,$,$o($.value.mapValue),Et.exists(!0)))}return h.mutationQueue.addMutationBatch(C,f,G,c)}).next(D=>{R=D;const G=D.applyToLocalDocumentSet(A,x);return h.documentOverlayCache.saveOverlays(C,D.batchId,G)})}).then(()=>({batchId:R.batchId,changes:ra(A)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(s.batchId),function(u,c,h){let f=u.qa[u.currentUser.toKey()];f||(f=new X(q)),f=f.insert(c,h),u.qa[u.currentUser.toKey()]=f}(n,s.batchId,e),await mn(n,s.changes),await pr(n.remoteStore)}catch(s){const o=ki(s,"Failed to persist write");e.reject(o)}}async function qa(r,t){const e=F(r);try{const n=await zc(e.localStore,t);t.targetChanges.forEach((s,o)=>{const u=e.Ba.get(o);u&&(z(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?u.Fa=!0:s.modifiedDocuments.size>0?z(u.Fa):s.removedDocuments.size>0&&(z(u.Fa),u.Fa=!1))}),await mn(e,n,t)}catch(n){await Se(n)}}function Ro(r,t,e){const n=F(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const s=[];n.xa.forEach((o,u)=>{const c=u.view.ea(t);c.snapshot&&s.push(c.snapshot)}),function(u,c){const h=F(u);h.onlineState=c;let f=!1;h.queries.forEach((p,A)=>{for(const R of A.J_)R.ea(c)&&(f=!0)}),f&&bi(h)}(n.eventManager,t),s.length&&n.Ma.R_(s),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function Sh(r,t,e){const n=F(r);n.sharedClientState.updateQueryState(t,"rejected",e);const s=n.Ba.get(t),o=s&&s.key;if(o){let u=new X(L.comparator);u=u.insert(o,gt.newNoDocument(o,O.min()));const c=U().add(o),h=new dr(O.min(),new Map,new X(q),u,c);await qa(n,h),n.La=n.La.remove(o),n.Ba.delete(t),Ni(n)}else await ui(n.localStore,t,!1).then(()=>ci(n,t,e)).catch(Se)}async function Dh(r,t){const e=F(r),n=t.batch.batchId;try{const s=await jc(e.localStore,t);ja(e,n,null),Ba(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await mn(e,s)}catch(s){await Se(s)}}async function kh(r,t,e){const n=F(r);try{const s=await function(u,c){const h=F(u);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let p;return h.mutationQueue.lookupMutationBatch(f,c).next(A=>(z(A!==null),p=A.keys(),h.mutationQueue.removeMutationBatch(f,A))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,p,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,p)).next(()=>h.localDocuments.getDocuments(f,p))})}(n.localStore,t);ja(n,t,e),Ba(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await mn(n,s)}catch(s){await Se(s)}}function Ba(r,t){(r.Qa.get(t)||[]).forEach(e=>{e.resolve()}),r.Qa.delete(t)}function ja(r,t,e){const n=F(r);let s=n.qa[n.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),n.qa[n.currentUser.toKey()]=s}}function ci(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Oa.get(t))r.xa.delete(n),e&&r.Ma.Wa(n,e);r.Oa.delete(t),r.isPrimaryClient&&r.ka.yr(t).forEach(n=>{r.ka.containsKey(n)||za(r,n)})}function za(r,t){r.Na.delete(t.path.canonicalString());const e=r.La.get(t);e!==null&&(Pi(r.remoteStore,e),r.La=r.La.remove(t),r.Ba.delete(e),Ni(r))}function Po(r,t,e){for(const n of e)n instanceof Oa?(r.ka.addReference(n.key,t),bh(r,n)):n instanceof Fa?(k("SyncEngine","Document no longer in limbo: "+n.key),r.ka.removeReference(n.key,t),r.ka.containsKey(n.key)||za(r,n.key)):M()}function bh(r,t){const e=t.key,n=e.path.canonicalString();r.La.get(e)||r.Na.has(n)||(k("SyncEngine","New document in limbo: "+e),r.Na.add(n),Ni(r))}function Ni(r){for(;r.Na.size>0&&r.La.size<r.maxConcurrentLimboResolutions;){const t=r.Na.values().next().value;r.Na.delete(t);const e=new L(H.fromString(t)),n=r.Ka.next();r.Ba.set(n,new vh(e)),r.La=r.La.insert(e,n),Ca(r.remoteStore,new Gt(St(yi(e.path)),n,"TargetPurposeLimboResolution",ir.oe))}}async function mn(r,t,e){const n=F(r),s=[],o=[],u=[];n.xa.isEmpty()||(n.xa.forEach((c,h)=>{u.push(n.Ua(h,t,e).then(f=>{var p;if((f||e)&&n.isPrimaryClient){const A=f?!f.fromCache:(p=e==null?void 0:e.targetChanges.get(h.targetId))===null||p===void 0?void 0:p.current;n.sharedClientState.updateQueryState(h.targetId,A?"current":"not-current")}if(f){s.push(f);const A=Ri.zi(h.targetId,f);o.push(A)}}))}),await Promise.all(u),n.Ma.R_(s),await async function(h,f){const p=F(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>V.forEach(f,R=>V.forEach(R.Wi,C=>p.persistence.referenceDelegate.addReference(A,R.targetId,C)).next(()=>V.forEach(R.Gi,C=>p.persistence.referenceDelegate.removeReference(A,R.targetId,C)))))}catch(A){if(!De(A))throw A;k("LocalStore","Failed to update sequence numbers: "+A)}for(const A of f){const R=A.targetId;if(!A.fromCache){const C=p.us.get(R),N=C.snapshotVersion,x=C.withLastLimboFreeSnapshotVersion(N);p.us=p.us.insert(R,x)}}}(n.localStore,o))}async function Nh(r,t){const e=F(r);if(!e.currentUser.isEqual(t)){k("SyncEngine","User change. New user:",t.toKey());const n=await wa(e.localStore,t);e.currentUser=t,function(o,u){o.Qa.forEach(c=>{c.forEach(h=>{h.reject(new b(P.CANCELLED,u))})}),o.Qa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await mn(e,n.Ts)}}function xh(r,t){const e=F(r),n=e.Ba.get(t);if(n&&n.Fa)return U().add(n.key);{let s=U();const o=e.Oa.get(t);if(!o)return s;for(const u of o){const c=e.xa.get(u);s=s.unionWith(c.view.fa)}return s}}function Ga(r){const t=F(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=qa.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=xh.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Sh.bind(null,t),t.Ma.R_=_h.bind(null,t.eventManager),t.Ma.Wa=yh.bind(null,t.eventManager),t}function Lh(r){const t=F(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Dh.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=kh.bind(null,t),t}class nr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=fr(t.databaseInfo.databaseId),this.sharedClientState=this.za(t),this.persistence=this.ja(t),await this.persistence.start(),this.localStore=this.Ha(t),this.gcScheduler=this.Ja(t,this.localStore),this.indexBackfillerScheduler=this.Ya(t,this.localStore)}Ja(t,e){return null}Ya(t,e){return null}Ha(t){return Bc(this.persistence,new Uc,t.initialUser,this.serializer)}ja(t){return new Aa(wi.ei,this.serializer)}za(t){return new Wc}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}nr.provider={build:()=>new nr};class Mh extends nr{constructor(t){super(),this.cacheSizeBytes=t}Ja(t,e){z(this.persistence.referenceDelegate instanceof tr);const n=this.persistence.referenceDelegate.garbageCollector;return new wc(n,t.asyncQueue,e)}ja(t){const e=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new Aa(n=>tr.ei(n,e),this.serializer)}}class hi{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Ro(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Nh.bind(null,this.syncEngine),await mh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new gh}()}createDatastore(t){const e=fr(t.databaseInfo.databaseId),n=function(o){return new Jc(o)}(t.databaseInfo);return function(o,u,c,h){return new eh(o,u,c,h)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,s,o,u,c){return new rh(n,s,o,u,c)}(this.localStore,this.datastore,t.asyncQueue,e=>Ro(this.syncEngine,e,0),function(){return To.p()?new To:new Hc}())}createSyncEngine(t,e){return function(s,o,u,c,h,f,p){const A=new Ih(s,o,u,c,h,f);return p&&(A.$a=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=F(s);k("RemoteStore","RemoteStore shutting down."),o.k_.add(5),await fn(o),o.Q_.shutdown(),o.K_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}hi.provider={build:()=>new hi};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Xa(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Xa(this.observer.error,t):Ft("Uncaught Error in snapshot listener:",t.toString()))}eu(){this.muted=!0}Xa(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(t,e,n,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=pt.UNAUTHENTICATED,this.clientId=zo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async u=>{k("FirestoreClient","Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(n,u=>(k("FirestoreClient","Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ot;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=ki(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Hr(r,t){r.asyncQueue.verifyOperationInProgress(),k("FirestoreClient","Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await wa(t.localStore,s),n=s)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function Vo(r,t){r.asyncQueue.verifyOperationInProgress();const e=await Fh(r);k("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>vo(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>vo(t.remoteStore,s)),r._onlineComponents=t}async function Fh(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){k("FirestoreClient","Using user provided OfflineComponentProvider");try{await Hr(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Ee("Error using user provided cache. Falling back to memory cache: "+e),await Hr(r,new nr)}}else k("FirestoreClient","Using default OfflineComponentProvider"),await Hr(r,new Mh(void 0));return r._offlineComponents}async function $a(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(k("FirestoreClient","Using user provided OnlineComponentProvider"),await Vo(r,r._uninitializedComponentsProvider._online)):(k("FirestoreClient","Using default OnlineComponentProvider"),await Vo(r,new hi))),r._onlineComponents}function Uh(r){return $a(r).then(t=>t.syncEngine)}async function Qa(r){const t=await $a(r),e=t.eventManager;return e.onListen=Ah.bind(null,t.syncEngine),e.onUnlisten=Ph.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=wh.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Vh.bind(null,t.syncEngine),e}function qh(r,t,e={}){const n=new Ot;return r.asyncQueue.enqueueAndForget(async()=>function(o,u,c,h,f){const p=new Ka({next:R=>{p.eu(),u.enqueueAndForget(()=>La(o,A));const C=R.docs.has(c);!C&&R.fromCache?f.reject(new b(P.UNAVAILABLE,"Failed to get document because the client is offline.")):C&&R.fromCache&&h&&h.source==="server"?f.reject(new b(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(R)},error:R=>f.reject(R)}),A=new Ma(yi(c.path),p,{includeMetadataChanges:!0,ua:!0});return xa(o,A)}(await Qa(r),r.asyncQueue,t,e,n)),n.promise}function Bh(r,t,e={}){const n=new Ot;return r.asyncQueue.enqueueAndForget(async()=>function(o,u,c,h,f){const p=new Ka({next:R=>{p.eu(),u.enqueueAndForget(()=>La(o,A)),R.fromCache&&h.source==="server"?f.reject(new b(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(R)},error:R=>f.reject(R)}),A=new Ma(c,p,{includeMetadataChanges:!0,ua:!0});return xa(o,A)}(await Qa(r),r.asyncQueue,t,e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(r,t,e){if(!e)throw new b(P.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function jh(r,t,e,n){if(t===!0&&n===!0)throw new b(P.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function So(r){if(!L.isDocumentKey(r))throw new b(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Do(r){if(L.isDocumentKey(r))throw new b(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function gr(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":M()}function Rt(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new b(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=gr(r);throw new b(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new b(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new b(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}jh("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Wa((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new b(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new b(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new b(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class _r{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ko({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new b(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new b(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ko(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new tl;switch(n.type){case"firstParty":return new il(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new b(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Co.get(e);n&&(k("ComponentProvider","Removing Datastore"),Co.delete(e),n.terminate())}(this),Promise.resolve()}}function zh(r,t,e,n={}){var s;const o=(r=Rt(r,_r))._getSettings(),u=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==u&&Ee("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},o),{host:u,ssl:!1})),n.mockUserToken){let c,h;if(typeof n.mockUserToken=="string")c=n.mockUserToken,h=pt.MOCK_USER;else{c=Xu(n.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);const f=n.mockUserToken.sub||n.mockUserToken.user_id;if(!f)throw new b(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new pt(f)}r._authCredentials=new el(new jo(c,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new be(this.firestore,t,this._query)}}class Tt{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Tt(this.firestore,t,this._key)}}class Kt extends be{constructor(t,e,n){super(t,e,yi(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Tt(this.firestore,null,new L(t))}withConverter(t){return new Kt(this.firestore,t,this._path)}}function ld(r,t,...e){if(r=Vt(r),Ha("collection","path",t),r instanceof _r){const n=H.fromString(t,...e);return Do(n),new Kt(r,null,n)}{if(!(r instanceof Tt||r instanceof Kt))throw new b(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(H.fromString(t,...e));return Do(n),new Kt(r.firestore,null,n)}}function Gh(r,t,...e){if(r=Vt(r),arguments.length===1&&(t=zo.newId()),Ha("doc","path",t),r instanceof _r){const n=H.fromString(t,...e);return So(n),new Tt(r,null,new L(n))}{if(!(r instanceof Tt||r instanceof Kt))throw new b(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(H.fromString(t,...e));return So(n),new Tt(r.firestore,r instanceof Kt?r.converter:null,new L(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(t=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Pa(this,"async_queue_retry"),this.fu=()=>{const n=Wr();n&&k("AsyncQueue","Visibility state changed to "+n.visibilityState),this.r_.Jo()},this.gu=t;const e=Wr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.pu(),this.yu(t)}enterRestrictedMode(t){if(!this.Eu){this.Eu=!0,this.Vu=t||!1;const e=Wr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.fu)}}enqueue(t){if(this.pu(),this.Eu)return new Promise(()=>{});const e=new Ot;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Iu.push(t),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(t){if(!De(t))throw t;k("AsyncQueue","Operation failed with retryable error: "+t)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(t){const e=this.gu.then(()=>(this.Ru=!0,t().catch(n=>{this.Au=n,this.Ru=!1;const s=function(u){let c=u.message||"";return u.stack&&(c=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),c}(n);throw Ft("INTERNAL UNHANDLED ERROR: ",s),n}).then(n=>(this.Ru=!1,n))));return this.gu=e,e}enqueueAfterDelay(t,e,n){this.pu(),this.mu.indexOf(t)>-1&&(e=0);const s=Di.createAndSchedule(this,t,e,n,o=>this.Su(o));return this.du.push(s),s}pu(){this.Au&&M()}verifyOperationInProgress(){}async bu(){let t;do t=this.gu,await t;while(t!==this.gu)}Du(t){for(const e of this.du)if(e.timerId===t)return!0;return!1}vu(t){return this.bu().then(()=>{this.du.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.du)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.bu()})}Cu(t){this.mu.push(t)}Su(t){const e=this.du.indexOf(t);this.du.splice(e,1)}}class Zt extends _r{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new bo,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new bo(t),this._firestoreClient=void 0,await t}}}function cd(r,t){const e=typeof r=="object"?r:Qu(),n=typeof r=="string"?r:"(default)",s=Wu(e,"firestore").getImmediate({identifier:n});if(!s._initialized){const o=Hu("firestore");o&&zh(s,...o)}return s}function yr(r){if(r._terminated)throw new b(P.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Kh(r),r._firestoreClient}function Kh(r){var t,e,n;const s=r._freezeSettings(),o=function(c,h,f,p){return new El(c,h,f,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Wa(p.experimentalLongPollingOptions),p.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new Oh(r._authCredentials,r._appCheckCredentials,r._queue,o,r._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ve(lt.fromBase64String(t))}catch(e){throw new b(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ve(lt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new b(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}function hd(){return new Ne("__name__")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new b(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new b(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return q(this._lat,t._lat)||q(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,s){if(n.length!==s.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h=/^__.*__$/;class Qh{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new Jt(t,this.data,this.fieldMask,e,this.fieldTransforms):new hn(t,this.data,e,this.fieldTransforms)}}class Xa{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Jt(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Ya(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class Er{constructor(t,e,n,s,o,u){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,o===void 0&&this.Fu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(t){return new Er(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.xu({path:n,Nu:!1});return s.Lu(t),s}Bu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.xu({path:n,Nu:!1});return s.Fu(),s}ku(t){return this.xu({path:void 0,Nu:!0})}qu(t){return rr(t,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Fu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Lu(this.path.get(t))}Lu(t){if(t.length===0)throw this.qu("Document fields must not be empty");if(Ya(this.Mu)&&$h.test(t))throw this.qu('Document fields cannot begin and end with "__"')}}class Wh{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||fr(t)}$u(t,e,n,s=!1){return new Er({Mu:t,methodName:e,Ku:n,path:ut.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gn(r){const t=r._freezeSettings(),e=fr(r._databaseId);return new Wh(r._databaseId,!!t.ignoreUndefinedProperties,e)}function Mi(r,t,e,n,s,o={}){const u=r.$u(o.merge||o.mergeFields?2:0,t,e,s);Ui("Data must be an object, but it was:",u,n);const c=eu(n,u);let h,f;if(o.merge)h=new wt(u.fieldMask),f=u.fieldTransforms;else if(o.mergeFields){const p=[];for(const A of o.mergeFields){const R=di(t,A,e);if(!u.contains(R))throw new b(P.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);ru(p,R)||p.push(R)}h=new wt(p),f=u.fieldTransforms.filter(A=>h.covers(A.field))}else h=null,f=u.fieldTransforms;return new Qh(new It(c),h,f)}class Tr extends pn{_toFieldTransform(t){if(t.Mu!==2)throw t.Mu===1?t.qu(`${this._methodName}() can only appear at the top level of your update data`):t.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Tr}}function Ja(r,t,e){return new Er({Mu:3,Ku:t.settings.Ku,methodName:r._methodName,Nu:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class Oi extends pn{constructor(t,e){super(t),this.Uu=e}_toFieldTransform(t){const e=Ja(this,t,!0),n=this.Uu.map(o=>le(o,e)),s=new Ae(n);return new ca(t.path,s)}isEqual(t){return t instanceof Oi&&Lo(this.Uu,t.Uu)}}class Fi extends pn{constructor(t,e){super(t),this.Uu=e}_toFieldTransform(t){const e=Ja(this,t,!0),n=this.Uu.map(o=>le(o,e)),s=new we(n);return new ca(t.path,s)}isEqual(t){return t instanceof Fi&&Lo(this.Uu,t.Uu)}}function Za(r,t,e,n){const s=r.$u(1,t,e);Ui("Data must be an object, but it was:",s,n);const o=[],u=It.empty();Yt(n,(h,f)=>{const p=qi(t,h,e);f=Vt(f);const A=s.Bu(p);if(f instanceof Tr)o.push(p);else{const R=le(f,A);R!=null&&(o.push(p),u.set(p,R))}});const c=new wt(o);return new Xa(u,c,s.fieldTransforms)}function tu(r,t,e,n,s,o){const u=r.$u(1,t,e),c=[di(t,n,e)],h=[s];if(o.length%2!=0)throw new b(P.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let R=0;R<o.length;R+=2)c.push(di(t,o[R])),h.push(o[R+1]);const f=[],p=It.empty();for(let R=c.length-1;R>=0;--R)if(!ru(f,c[R])){const C=c[R];let N=h[R];N=Vt(N);const x=u.Bu(C);if(N instanceof Tr)f.push(C);else{const D=le(N,x);D!=null&&(f.push(C),p.set(C,D))}}const A=new wt(f);return new Xa(p,A,u.fieldTransforms)}function Hh(r,t,e,n=!1){return le(e,r.$u(n?4:3,t))}function le(r,t){if(nu(r=Vt(r)))return Ui("Unsupported field value:",t,r),eu(r,t);if(r instanceof pn)return function(n,s){if(!Ya(s.Mu))throw s.qu(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.Nu&&t.Mu!==4)throw t.qu("Nested arrays are not supported");return function(n,s){const o=[];let u=0;for(const c of n){let h=le(c,s.ku(u));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),u++}return{arrayValue:{values:o}}}(r,t)}return function(n,s){if((n=Vt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Bl(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=et.fromDate(n);return{timestampValue:Zn(s.serializer,o)}}if(n instanceof et){const o=new et(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Zn(s.serializer,o)}}if(n instanceof xi)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ve)return{bytesValue:ga(s.serializer,n._byteString)};if(n instanceof Tt){const o=s.databaseId,u=n.firestore._databaseId;if(!u.isEqual(o))throw s.qu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ii(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof Li)return function(u,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:u.toArray().map(h=>{if(typeof h!="number")throw c.qu("VectorValues must only contain numeric values.");return Ei(c.serializer,h)})}}}}}}(n,s);throw s.qu(`Unsupported field value: ${gr(n)}`)}(r,t)}function eu(r,t){const e={};return Go(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Yt(r,(n,s)=>{const o=le(s,t.Ou(n));o!=null&&(e[n]=o)}),{mapValue:{fields:e}}}function nu(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof et||r instanceof xi||r instanceof Ve||r instanceof Tt||r instanceof pn||r instanceof Li)}function Ui(r,t,e){if(!nu(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const n=gr(e);throw n==="an object"?t.qu(r+" a custom object"):t.qu(r+" "+n)}}function di(r,t,e){if((t=Vt(t))instanceof Ne)return t._internalPath;if(typeof t=="string")return qi(r,t);throw rr("Field path arguments must be of type string or ",r,!1,void 0,e)}const Xh=new RegExp("[~\\*/\\[\\]]");function qi(r,t,e){if(t.search(Xh)>=0)throw rr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new Ne(...t.split("."))._internalPath}catch{throw rr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function rr(r,t,e,n,s){const o=n&&!n.isEmpty(),u=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||u)&&(h+=" (found",o&&(h+=` in field ${n}`),u&&(h+=` in document ${s}`),h+=")"),new b(P.INVALID_ARGUMENT,c+r+h)}function ru(r,t){return r.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(t,e,n,s,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Yh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Bi("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Yh extends iu{data(){return super.data()}}function Bi(r,t){return typeof t=="string"?qi(r,t):t instanceof Ne?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new b(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ji{}class Zh extends ji{}function dd(r,t,...e){let n=[];t instanceof ji&&n.push(t),n=n.concat(e),function(o){const u=o.filter(h=>h instanceof zi).length,c=o.filter(h=>h instanceof vr).length;if(u>1||u>0&&c>0)throw new b(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)r=s._apply(r);return r}class vr extends Zh{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new vr(t,e,n)}_apply(t){const e=this._parse(t);return su(t._query,e),new be(t.firestore,t.converter,ni(t._query,e))}_parse(t){const e=gn(t.firestore);return function(o,u,c,h,f,p,A){let R;if(f.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new b(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){xo(A,p);const C=[];for(const N of A)C.push(No(h,o,N));R={arrayValue:{values:C}}}else R=No(h,o,A)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||xo(A,p),R=Hh(c,u,A,p==="in"||p==="not-in");return tt.create(f,p,R)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function fd(r,t,e){const n=t,s=Bi("where",r);return vr._create(s,n,e)}class zi extends ji{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new zi(t,e)}_parse(t){const e=this._queryConstraints.map(n=>n._parse(t)).filter(n=>n.getFilters().length>0);return e.length===1?e[0]:Ct.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let u=s;const c=o.getFlattenedFilters();for(const h of c)su(u,h),u=ni(u,h)}(t._query,e),new be(t.firestore,t.converter,ni(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function No(r,t,e){if(typeof(e=Vt(e))=="string"){if(e==="")throw new b(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Zo(t)&&e.indexOf("/")!==-1)throw new b(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(H.fromString(e));if(!L.isDocumentKey(n))throw new b(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Zs(r,new L(n))}if(e instanceof Tt)return Zs(r,e._key);throw new b(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gr(e)}.`)}function xo(r,t){if(!Array.isArray(r)||r.length===0)throw new b(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function su(r,t){const e=function(s,o){for(const u of s)for(const c of u.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(r.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new b(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new b(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class td{convertValue(t,e="none"){switch(Ht(t)){case 0:return null;case 1:return t.booleanValue;case 2:return J(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Wt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw M()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Yt(t,(s,o)=>{n[s]=this.convertValue(o,e)}),n}convertVectorValue(t){var e,n,s;const o=(s=(n=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map(u=>J(u.doubleValue));return new Li(o)}convertGeoPoint(t){return new xi(J(t.latitude),J(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=or(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(an(t));default:return null}}convertTimestamp(t){const e=Qt(t);return new et(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=H.fromString(t);z(Ia(n));const s=new un(n.get(1),n.get(3)),o=new L(n.popFirst(5));return s.isEqual(e)||Ft(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(r,t,e){let n;return n=r?e&&(e.merge||e.mergeFields)?r.toFirestore(t,e):r.toFirestore(t):t,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ou extends iu{constructor(t,e,n,s,o,u){super(t,e,n,s,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Qn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Bi("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Qn extends ou{data(t={}){return super.data(t)}}class ed{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new tn(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Qn(this._firestore,this._userDataWriter,n.key,n,new tn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new b(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map(c=>{const h=new Qn(s._firestore,s._userDataWriter,c.doc.key,c.doc,new tn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:u++}})}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new Qn(s._firestore,s._userDataWriter,c.doc.key,c.doc,new tn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,p=-1;return c.type!==0&&(f=u.indexOf(c.doc.key),u=u.delete(c.doc.key)),c.type!==1&&(u=u.add(c.doc),p=u.indexOf(c.doc.key)),{type:nd(c.type),doc:h,oldIndex:f,newIndex:p}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function nd(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(r){r=Rt(r,Tt);const t=Rt(r.firestore,Zt);return qh(yr(t),r._key).then(e=>rd(t,r,e))}class au extends td{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ve(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Tt(this.firestore,null,e)}}function pd(r){r=Rt(r,be);const t=Rt(r.firestore,Zt),e=yr(t),n=new au(t);return Jh(r._query),Bh(e,r._query).then(s=>new ed(t,n,r,s))}function gd(r,t,e){r=Rt(r,Tt);const n=Rt(r.firestore,Zt),s=Gi(r.converter,t,e);return _n(n,[Mi(gn(n),"setDoc",r._key,s,r.converter!==null,e).toMutation(r._key,Et.none())])}function _d(r,t,e,...n){r=Rt(r,Tt);const s=Rt(r.firestore,Zt),o=gn(s);let u;return u=typeof(t=Vt(t))=="string"||t instanceof Ne?tu(o,"updateDoc",r._key,t,e,n):Za(o,"updateDoc",r._key,t),_n(s,[u.toMutation(r._key,Et.exists(!0))])}function yd(r){return _n(Rt(r.firestore,Zt),[new hr(r._key,Et.none())])}function Ed(r,t){const e=Rt(r.firestore,Zt),n=Gh(r),s=Gi(r.converter,t);return _n(e,[Mi(gn(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,Et.exists(!1))]).then(()=>n)}function _n(r,t){return function(n,s){const o=new Ot;return n.asyncQueue.enqueueAndForget(async()=>Ch(await Uh(n),s,o)),o.promise}(yr(r),t)}function rd(r,t,e){const n=e.docs.get(t._key),s=new au(r);return new ou(r,s,t._key,n,new tn(e.hasPendingWrites,e.fromCache),t.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=gn(t)}set(t,e,n){this._verifyNotCommitted();const s=Xr(t,this._firestore),o=Gi(s.converter,e,n),u=Mi(this._dataReader,"WriteBatch.set",s._key,o,s.converter!==null,n);return this._mutations.push(u.toMutation(s._key,Et.none())),this}update(t,e,n,...s){this._verifyNotCommitted();const o=Xr(t,this._firestore);let u;return u=typeof(e=Vt(e))=="string"||e instanceof Ne?tu(this._dataReader,"WriteBatch.update",o._key,e,n,s):Za(this._dataReader,"WriteBatch.update",o._key,e),this._mutations.push(u.toMutation(o._key,Et.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=Xr(t,this._firestore);return this._mutations=this._mutations.concat(new hr(e._key,Et.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new b(P.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Xr(r,t){if((r=Vt(r)).firestore!==t)throw new b(P.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}function Td(...r){return new Oi("arrayUnion",r)}function vd(...r){return new Fi("arrayRemove",r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(r){return yr(r=Rt(r,Zt)),new id(r,t=>_n(r,t))}(function(t,e=!0){(function(s){Ce=s})(Yu),Gu(new Ku("firestore",(n,{instanceIdentifier:s,options:o})=>{const u=n.getProvider("app").getImmediate(),c=new Zt(new nl(n.getProvider("auth-internal")),new ol(n.getProvider("app-check-internal")),function(f,p){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new b(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new un(f.options.projectId,p)}(u,s),u);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Ks(Qs,"4.7.5",t),Ks(Qs,"4.7.5","esm2017")})();export{pd as a,Ed as b,ld as c,Gh as d,yd as e,Td as f,cd as g,vd as h,md as i,fd as j,hd as k,dd as q,gd as s,_d as u,Id as w};
