var yi=Object.defineProperty;var ji=(e,t,n)=>t in e?yi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var St=(e,t,n)=>(ji(e,typeof t!="symbol"?t+"":t,n),n);function Oo(e,t){const n=Object.create(null),o=e.split(",");for(let r=0;r<o.length;r++)n[o[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function nn(e){if(W(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],r=je(o)?Si(o):nn(o);if(r)for(const a in r)t[a]=r[a]}return t}return je(e)||pe(e)?e:void 0}const Ti=/;(?![^(]*\))/g,Ii=/:([^]+)/,wi=/\/\*.*?\*\//gs;function Si(e){const t={};return e.replace(wi,"").split(Ti).forEach(n=>{if(n){const o=n.split(Ii);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function Ke(e){let t="";if(je(e))t=e;else if(W(e))for(let n=0;n<e.length;n++){const o=Ke(e[n]);o&&(t+=o+" ")}else if(pe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ki=Oo("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function lr(e){return!!e||e===""}function mn(e,t){if(e===t)return!0;let n=cr(e),o=cr(t);if(n||o)return!(!n||!o)&&e.getTime()===t.getTime();if(n=hn(e),o=hn(t),n||o)return e===t;if(n=W(e),o=W(t),n||o)return!(!n||!o)&&function(r,a){if(r.length!==a.length)return!1;let i=!0;for(let s=0;i&&s<r.length;s++)i=mn(r[s],a[s]);return i}(e,t);if(n=pe(e),o=pe(t),n||o){if(!n||!o||Object.keys(e).length!==Object.keys(t).length)return!1;for(const r in e){const a=e.hasOwnProperty(r),i=t.hasOwnProperty(r);if(a&&!i||!a&&i||!mn(e[r],t[r]))return!1}}return String(e)===String(t)}function Lo(e,t){return e.findIndex(n=>mn(n,t))}const H=e=>je(e)?e:e==null?"":W(e)||pe(e)&&(e.toString===ra||!ne(e.toString))?JSON.stringify(e,na,2):String(e),na=(e,t)=>t&&t.__v_isRef?na(e,t.value):Yt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,r])=>(n[`${o} =>`]=r,n),{})}:on(t)?{[`Set(${t.size})`]:[...t.values()]}:!pe(t)||W(t)||aa(t)?t:String(t),me={},Wt=[],tt=()=>{},Ni=()=>!1,Ci=/^on[^a-z]/,Jn=e=>Ci.test(e),Po=e=>e.startsWith("onUpdate:"),Se=Object.assign,zo=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Mi=Object.prototype.hasOwnProperty,se=(e,t)=>Mi.call(e,t),W=Array.isArray,Yt=e=>kn(e)==="[object Map]",on=e=>kn(e)==="[object Set]",cr=e=>kn(e)==="[object Date]",ne=e=>typeof e=="function",je=e=>typeof e=="string",hn=e=>typeof e=="symbol",pe=e=>e!==null&&typeof e=="object",oa=e=>pe(e)&&ne(e.then)&&ne(e.catch),ra=Object.prototype.toString,kn=e=>ra.call(e),_i=e=>kn(e).slice(8,-1),aa=e=>kn(e)==="[object Object]",Vo=e=>je(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Pn=Oo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$n=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Di=/-(\w)/g,Jt=$n(e=>e.replace(Di,(t,n)=>n?n.toUpperCase():"")),Ei=/\B([A-Z])/g,Vt=$n(e=>e.replace(Ei,"-$1").toLowerCase()),ia=$n(e=>e.charAt(0).toUpperCase()+e.slice(1)),po=$n(e=>e?`on${ia(e)}`:""),bn=(e,t)=>!Object.is(e,t),zn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Un=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Rn=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Ai=e=>{const t=je(e)?Number(e):NaN;return isNaN(t)?e:t};let ur;const Gi=()=>ur||(ur=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let He;class sa{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=He,!t&&He&&(this.index=(He.scopes||(He.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=He;try{return He=this,t()}finally{He=n}}}on(){He=this}off(){He=this.parent}stop(t){if(this._active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function la(e){return new sa(e)}function ca(){return He}const Bo=e=>{const t=new Set(e);return t.w=0,t.n=0,t},ua=e=>(e.w&xt)>0,da=e=>(e.n&xt)>0,Fn=new WeakMap;let un=0,xt=1;const jo=30;let Je;const Lt=Symbol(""),To=Symbol("");class Ho{constructor(t,n=null,o){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,function(r,a=He){a&&a.active&&a.effects.push(r)}(this,o)}run(){if(!this.active)return this.fn();let t=Je,n=Tt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Je,Je=this,Tt=!0,xt=1<<++un,un<=jo?(({deps:o})=>{if(o.length)for(let r=0;r<o.length;r++)o[r].w|=xt})(this):dr(this),this.fn()}finally{un<=jo&&(o=>{const{deps:r}=o;if(r.length){let a=0;for(let i=0;i<r.length;i++){const s=r[i];ua(s)&&!da(s)?s.delete(o):r[a++]=s,s.w&=~xt,s.n&=~xt}r.length=a}})(this),xt=1<<--un,Je=this.parent,Tt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Je===this?this.deferStop=!0:this.active&&(dr(this),this.onStop&&this.onStop(),this.active=!1)}}function dr(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Tt=!0;const pa=[];function $t(){pa.push(Tt),Tt=!1}function Qt(){const e=pa.pop();Tt=e===void 0||e}function Ve(e,t,n){if(Tt&&Je){let o=Fn.get(e);o||Fn.set(e,o=new Map);let r=o.get(n);r||o.set(n,r=Bo()),ga(r)}}function ga(e,t){let n=!1;un<=jo?da(e)||(e.n|=xt,n=!ua(e)):n=!e.has(Je),n&&(e.add(Je),Je.deps.push(e))}function lt(e,t,n,o,r,a){const i=Fn.get(e);if(!i)return;let s=[];if(t==="clear")s=[...i.values()];else if(n==="length"&&W(e)){const l=Number(o);i.forEach((c,u)=>{(u==="length"||u>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(i.get(n)),t){case"add":W(e)?Vo(n)&&s.push(i.get("length")):(s.push(i.get(Lt)),Yt(e)&&s.push(i.get(To)));break;case"delete":W(e)||(s.push(i.get(Lt)),Yt(e)&&s.push(i.get(To)));break;case"set":Yt(e)&&s.push(i.get(Lt))}if(s.length===1)s[0]&&Io(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Io(Bo(l))}}function Io(e,t){const n=W(e)?e:[...e];for(const o of n)o.computed&&pr(o);for(const o of n)o.computed||pr(o)}function pr(e,t){(e!==Je||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Oi=Oo("__proto__,__v_isRef,__isVue"),fa=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(hn)),Li=Uo(),Pi=Uo(!1,!0),zi=Uo(!0),gr=Vi();function Vi(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const o=ae(this);for(let a=0,i=this.length;a<i;a++)Ve(o,0,a+"");const r=o[t](...n);return r===-1||r===!1?o[t](...n.map(ae)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){$t();const o=ae(this)[t].apply(this,n);return Qt(),o}}),e}function Bi(e){const t=ae(this);return Ve(t,0,e),t.hasOwnProperty(e)}function Uo(e=!1,t=!1){return function(n,o,r){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&r===(e?t?Qi:va:t?xa:ba).get(n))return n;const a=W(n);if(!e){if(a&&se(gr,o))return Reflect.get(gr,o,r);if(o==="hasOwnProperty")return Bi}const i=Reflect.get(n,o,r);return(hn(o)?fa.has(o):Oi(o))?i:(e||Ve(n,0,o),t?i:be(i)?a&&Vo(o)?i:i.value:pe(i)?e?ya(i):rn(i):i)}}function ma(e=!1){return function(t,n,o,r){let a=t[n];if(Xt(a)&&be(a)&&!be(o))return!1;if(!e&&(Zn(o)||Xt(o)||(a=ae(a),o=ae(o)),!W(t)&&be(a)&&!be(o)))return a.value=o,!0;const i=W(t)&&Vo(n)?Number(n)<t.length:se(t,n),s=Reflect.set(t,n,o,r);return t===ae(r)&&(i?bn(o,a)&&lt(t,"set",n,o):lt(t,"add",n,o)),s}}const ha={get:Li,set:ma(),deleteProperty:function(e,t){const n=se(e,t);e[t];const o=Reflect.deleteProperty(e,t);return o&&n&&lt(e,"delete",t,void 0),o},has:function(e,t){const n=Reflect.has(e,t);return hn(t)&&fa.has(t)||Ve(e,0,t),n},ownKeys:function(e){return Ve(e,0,W(e)?"length":Lt),Reflect.ownKeys(e)}},Hi={get:zi,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},Ui=Se({},ha,{get:Pi,set:ma(!0)}),Ro=e=>e,Qn=e=>Reflect.getPrototypeOf(e);function Dn(e,t,n=!1,o=!1){const r=ae(e=e.__v_raw),a=ae(t);n||(t!==a&&Ve(r,0,t),Ve(r,0,a));const{has:i}=Qn(r),s=o?Ro:n?Wo:xn;return i.call(r,t)?s(e.get(t)):i.call(r,a)?s(e.get(a)):void(e!==r&&e.get(t))}function En(e,t=!1){const n=this.__v_raw,o=ae(n),r=ae(e);return t||(e!==r&&Ve(o,0,e),Ve(o,0,r)),e===r?n.has(e):n.has(e)||n.has(r)}function An(e,t=!1){return e=e.__v_raw,!t&&Ve(ae(e),0,Lt),Reflect.get(e,"size",e)}function fr(e){e=ae(e);const t=ae(this);return Qn(t).has.call(t,e)||(t.add(e),lt(t,"add",e,e)),this}function mr(e,t){t=ae(t);const n=ae(this),{has:o,get:r}=Qn(n);let a=o.call(n,e);a||(e=ae(e),a=o.call(n,e));const i=r.call(n,e);return n.set(e,t),a?bn(t,i)&&lt(n,"set",e,t):lt(n,"add",e,t),this}function hr(e){const t=ae(this),{has:n,get:o}=Qn(t);let r=n.call(t,e);r||(e=ae(e),r=n.call(t,e)),o&&o.call(t,e);const a=t.delete(e);return r&&lt(t,"delete",e,void 0),a}function br(){const e=ae(this),t=e.size!==0,n=e.clear();return t&&lt(e,"clear",void 0,void 0),n}function Gn(e,t){return function(n,o){const r=this,a=r.__v_raw,i=ae(a),s=t?Ro:e?Wo:xn;return!e&&Ve(i,0,Lt),a.forEach((l,c)=>n.call(o,s(l),s(c),r))}}function On(e,t,n){return function(...o){const r=this.__v_raw,a=ae(r),i=Yt(a),s=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,c=r[e](...o),u=n?Ro:t?Wo:xn;return!t&&Ve(a,0,l?To:Lt),{next(){const{value:p,done:b}=c.next();return b?{value:p,done:b}:{value:s?[u(p[0]),u(p[1])]:u(p),done:b}},[Symbol.iterator](){return this}}}}function gt(e){return function(...t){return e!=="delete"&&this}}function Ri(){const e={get(r){return Dn(this,r)},get size(){return An(this)},has:En,add:fr,set:mr,delete:hr,clear:br,forEach:Gn(!1,!1)},t={get(r){return Dn(this,r,!1,!0)},get size(){return An(this)},has:En,add:fr,set:mr,delete:hr,clear:br,forEach:Gn(!1,!0)},n={get(r){return Dn(this,r,!0)},get size(){return An(this,!0)},has(r){return En.call(this,r,!0)},add:gt("add"),set:gt("set"),delete:gt("delete"),clear:gt("clear"),forEach:Gn(!0,!1)},o={get(r){return Dn(this,r,!0,!0)},get size(){return An(this,!0)},has(r){return En.call(this,r,!0)},add:gt("add"),set:gt("set"),delete:gt("delete"),clear:gt("clear"),forEach:Gn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=On(r,!1,!1),n[r]=On(r,!0,!1),t[r]=On(r,!1,!0),o[r]=On(r,!0,!0)}),[e,n,t,o]}const[Fi,Zi,Wi,Yi]=Ri();function Fo(e,t){const n=t?e?Yi:Wi:e?Zi:Fi;return(o,r,a)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?o:Reflect.get(se(n,r)&&r in o?n:o,r,a)}const Ki={get:Fo(!1,!1)},Ji={get:Fo(!1,!0)},$i={get:Fo(!0,!1)},ba=new WeakMap,xa=new WeakMap,va=new WeakMap,Qi=new WeakMap;function rn(e){return Xt(e)?e:Zo(e,!1,ha,Ki,ba)}function ya(e){return Zo(e,!0,Hi,$i,va)}function Zo(e,t,n,o,r){if(!pe(e)||e.__v_raw&&(!t||!e.__v_isReactive))return e;const a=r.get(e);if(a)return a;const i=(s=e).__v_skip||!Object.isExtensible(s)?0:function(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}(_i(s));var s;if(i===0)return e;const l=new Proxy(e,i===2?o:n);return r.set(e,l),l}function st(e){return Xt(e)?st(e.__v_raw):!(!e||!e.__v_isReactive)}function Xt(e){return!(!e||!e.__v_isReadonly)}function Zn(e){return!(!e||!e.__v_isShallow)}function xr(e){return st(e)||Xt(e)}function ae(e){const t=e&&e.__v_raw;return t?ae(t):e}function qt(e){return Un(e,"__v_skip",!0),e}const xn=e=>pe(e)?rn(e):e,Wo=e=>pe(e)?ya(e):e;function ja(e){Tt&&Je&&ga((e=ae(e)).dep||(e.dep=Bo()))}function Ta(e,t){const n=(e=ae(e)).dep;n&&Io(n)}function be(e){return!(!e||e.__v_isRef!==!0)}function he(e){return function(t,n){return be(t)?t:new Xi(t,n)}(e,!1)}class Xi{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:ae(t),this._value=n?t:xn(t)}get value(){return ja(this),this._value}set value(t){const n=this.__v_isShallow||Zn(t)||Xt(t);t=n?t:ae(t),bn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:xn(t),Ta(this))}}function g(e){return be(e)?e.value:e}const qi={get:(e,t,n)=>g(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const r=e[t];return be(r)&&!be(n)?(r.value=n,!0):Reflect.set(e,t,n,o)}};function Ia(e){return st(e)?e:new Proxy(e,qi)}class es{constructor(t,n,o){this._object=t,this._key=n,this._defaultValue=o,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return t=ae(this._object),n=this._key,(o=Fn.get(t))===null||o===void 0?void 0:o.get(n);var t,n,o}}function wa(e,t,n){const o=e[t];return be(o)?o:new es(e,t,n)}var Sa;class ts{constructor(t,n,o,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Sa]=!1,this._dirty=!0,this.effect=new Ho(t,()=>{this._dirty||(this._dirty=!0,Ta(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=o}get value(){const t=ae(this);return ja(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function It(e,t,n,o){let r;try{r=o?e(...o):e()}catch(a){Xn(a,t,n)}return r}function Ye(e,t,n,o){if(ne(e)){const a=It(e,t,n,o);return a&&oa(a)&&a.catch(i=>{Xn(i,t,n)}),a}const r=[];for(let a=0;a<e.length;a++)r.push(Ye(e[a],t,n,o));return r}function Xn(e,t,n,o=!0){if(t&&t.vnode,t){let r=t.parent;const a=t.proxy,i=n;for(;r;){const l=r.ec;if(l){for(let c=0;c<l.length;c++)if(l[c](e,a,i)===!1)return}r=r.parent}const s=t.appContext.config.errorHandler;if(s)return void It(s,null,10,[e,a,i])}(function(r,a,i,s=!0){console.error(r)})(e,0,0,o)}Sa="__v_isReadonly";let vn=!1,wo=!1;const Ee=[];let et=0;const Kt=[];let it=null,Dt=0;const ka=Promise.resolve();let Yo=null;function qn(e){const t=Yo||ka;return e?t.then(this?e.bind(this):e):t}function Ko(e){Ee.length&&Ee.includes(e,vn&&e.allowRecurse?et+1:et)||(e.id==null?Ee.push(e):Ee.splice(function(t){let n=et+1,o=Ee.length;for(;n<o;){const r=n+o>>>1;yn(Ee[r])<t?n=r+1:o=r}return n}(e.id),0,e),Na())}function Na(){vn||wo||(wo=!0,Yo=ka.then(Ma))}function vr(e,t=vn?et+1:0){for(;t<Ee.length;t++){const n=Ee[t];n&&n.pre&&(Ee.splice(t,1),t--,n())}}function Ca(e){if(Kt.length){const t=[...new Set(Kt)];if(Kt.length=0,it)return void it.push(...t);for(it=t,it.sort((n,o)=>yn(n)-yn(o)),Dt=0;Dt<it.length;Dt++)it[Dt]();it=null,Dt=0}}const yn=e=>e.id==null?1/0:e.id,ns=(e,t)=>{const n=yn(e)-yn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Ma(e){wo=!1,vn=!0,Ee.sort(ns);try{for(et=0;et<Ee.length;et++){const t=Ee[et];t&&t.active!==!1&&It(t,null,14)}}finally{et=0,Ee.length=0,Ca(),vn=!1,Yo=null,(Ee.length||Kt.length)&&Ma()}}function os(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||me;let r=n;const a=t.startsWith("update:"),i=a&&t.slice(7);if(i&&i in o){const u=`${i==="modelValue"?"model":i}Modifiers`,{number:p,trim:b}=o[u]||me;b&&(r=n.map(x=>je(x)?x.trim():x)),p&&(r=n.map(Rn))}let s,l=o[s=po(t)]||o[s=po(Jt(t))];!l&&a&&(l=o[s=po(Vt(t))]),l&&Ye(l,e,6,r);const c=o[s+"Once"];if(c){if(e.emitted){if(e.emitted[s])return}else e.emitted={};e.emitted[s]=!0,Ye(c,e,6,r)}}function _a(e,t,n=!1){const o=t.emitsCache,r=o.get(e);if(r!==void 0)return r;const a=e.emits;let i={},s=!1;if(!ne(e)){const l=c=>{const u=_a(c,t,!0);u&&(s=!0,Se(i,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return a||s?(W(a)?a.forEach(l=>i[l]=null):Se(i,a),pe(e)&&o.set(e,i),i):(pe(e)&&o.set(e,null),null)}function Wn(e,t){return!(!e||!Jn(t))&&(t=t.slice(2).replace(/Once$/,""),se(e,t[0].toLowerCase()+t.slice(1))||se(e,Vt(t))||se(e,t))}let We=null,Da=null;function Yn(e){const t=We;return We=e,Da=e&&e.type.__scopeId||null,t}function Jo(e,t=We,n){if(!t||e._n)return e;const o=(...r)=>{o._d&&Cr(-1);const a=Yn(t);let i;try{i=e(...r)}finally{Yn(a),o._d&&Cr(1)}return i};return o._n=!0,o._c=!0,o._d=!0,o}function go(e){const{type:t,vnode:n,proxy:o,withProxy:r,props:a,propsOptions:[i],slots:s,attrs:l,emit:c,render:u,renderCache:p,data:b,setupState:x,ctx:h,inheritAttrs:T}=e;let B,k;const F=Yn(e);try{if(4&n.shapeFlag){const C=r||o;B=qe(u.call(C,C,p,a,x,b,h)),k=l}else{const C=t;B=qe(C.length>1?C(a,{attrs:l,slots:s,emit:c}):C(a,null)),k=t.props?l:rs(l)}}catch(C){gn.length=0,Xn(C,e,1),B=Y(Qe)}let A=B;if(k&&T!==!1){const C=Object.keys(k),{shapeFlag:O}=A;C.length&&7&O&&(i&&C.some(Po)&&(k=as(k,i)),A=wt(A,k))}return n.dirs&&(A=wt(A),A.dirs=A.dirs?A.dirs.concat(n.dirs):n.dirs),n.transition&&(A.transition=n.transition),B=A,Yn(F),B}const rs=e=>{let t;for(const n in e)(n==="class"||n==="style"||Jn(n))&&((t||(t={}))[n]=e[n]);return t},as=(e,t)=>{const n={};for(const o in e)Po(o)&&o.slice(9)in t||(n[o]=e[o]);return n};function yr(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let r=0;r<o.length;r++){const a=o[r];if(t[a]!==e[a]&&!Wn(n,a))return!0}return!1}const is=e=>e.__isSuspense;function dn(e,t,n=!1){const o=Te||We;if(o){const r=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&ne(t)?t.call(o.proxy):t}}const Ln={};function Ce(e,t,n){return Ea(e,t,n)}function Ea(e,t,{immediate:n,deep:o,flush:r,onTrack:a,onTrigger:i}=me){const s=ca()===(Te==null?void 0:Te.scope)?Te:null;let l,c,u=!1,p=!1;if(be(e)?(l=()=>e.value,u=Zn(e)):st(e)?(l=()=>e,o=!0):W(e)?(p=!0,u=e.some(A=>st(A)||Zn(A)),l=()=>e.map(A=>be(A)?A.value:st(A)?Ot(A):ne(A)?It(A,s,2):void 0)):l=ne(e)?t?()=>It(e,s,2):()=>{if(!s||!s.isUnmounted)return c&&c(),Ye(e,s,3,[x])}:tt,t&&o){const A=l;l=()=>Ot(A())}let b,x=A=>{c=k.onStop=()=>{It(A,s,4)}};if(wn){if(x=tt,t?n&&Ye(t,s,3,[l(),p?[]:void 0,x]):l(),r!=="sync")return tt;{const A=As();b=A.__watcherHandles||(A.__watcherHandles=[])}}let h=p?new Array(e.length).fill(Ln):Ln;const T=()=>{if(k.active)if(t){const A=k.run();(o||u||(p?A.some((C,O)=>bn(C,h[O])):bn(A,h)))&&(c&&c(),Ye(t,s,3,[A,h===Ln?void 0:p&&h[0]===Ln?[]:h,x]),h=A)}else k.run()};let B;T.allowRecurse=!!t,r==="sync"?B=T:r==="post"?B=()=>Le(T,s&&s.suspense):(T.pre=!0,s&&(T.id=s.uid),B=()=>Ko(T));const k=new Ho(l,B);t?n?T():h=k.run():r==="post"?Le(k.run.bind(k),s&&s.suspense):k.run();const F=()=>{k.stop(),s&&s.scope&&zo(s.scope.effects,k)};return b&&b.push(F),F}function ss(e,t,n){const o=this.proxy,r=je(e)?e.includes(".")?Aa(o,e):()=>o[e]:e.bind(o,o);let a;ne(t)?a=t:(a=t.handler,n=t);const i=Te;en(this);const s=Ea(r,a.bind(o),n);return i?en(i):Pt(),s}function Aa(e,t){const n=t.split(".");return()=>{let o=e;for(let r=0;r<n.length&&o;r++)o=o[n[r]];return o}}function Ot(e,t){if(!pe(e)||e.__v_skip||(t=t||new Set).has(e))return e;if(t.add(e),be(e))Ot(e.value,t);else if(W(e))for(let n=0;n<e.length;n++)Ot(e[n],t);else if(on(e)||Yt(e))e.forEach(n=>{Ot(n,t)});else if(aa(e))for(const n in e)Ot(e[n],t);return e}function Ga(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Qo(()=>{e.isMounted=!0}),Va(()=>{e.isUnmounting=!0}),e}const Fe=[Function,Array],Oa={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Fe,onEnter:Fe,onAfterEnter:Fe,onEnterCancelled:Fe,onBeforeLeave:Fe,onLeave:Fe,onAfterLeave:Fe,onLeaveCancelled:Fe,onBeforeAppear:Fe,onAppear:Fe,onAfterAppear:Fe,onAppearCancelled:Fe},setup(e,{slots:t}){const n=tr(),o=Ga();let r;return()=>{const a=t.default&&$o(t.default(),!0);if(!a||!a.length)return;let i=a[0];if(a.length>1){for(const T of a)if(T.type!==Qe){i=T;break}}const s=ae(e),{mode:l}=s;if(o.isLeaving)return fo(i);const c=jr(i);if(!c)return fo(i);const u=jn(c,s,o,n);Tn(c,u);const p=n.subTree,b=p&&jr(p);let x=!1;const{getTransitionKey:h}=c.type;if(h){const T=h();r===void 0?r=T:T!==r&&(r=T,x=!0)}if(b&&b.type!==Qe&&(!Et(c,b)||x)){const T=jn(b,s,o,n);if(Tn(b,T),l==="out-in")return o.isLeaving=!0,T.afterLeave=()=>{o.isLeaving=!1,n.update.active!==!1&&n.update()},fo(i);l==="in-out"&&c.type!==Qe&&(T.delayLeave=(B,k,F)=>{La(o,b)[String(b.key)]=b,B._leaveCb=()=>{k(),B._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=F})}return i}}};function La(e,t){const{leavingVNodes:n}=e;let o=n.get(t.type);return o||(o=Object.create(null),n.set(t.type,o)),o}function jn(e,t,n,o){const{appear:r,mode:a,persisted:i=!1,onBeforeEnter:s,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:p,onLeave:b,onAfterLeave:x,onLeaveCancelled:h,onBeforeAppear:T,onAppear:B,onAfterAppear:k,onAppearCancelled:F}=t,A=String(e.key),C=La(n,e),O=(G,N)=>{G&&Ye(G,o,9,N)},Q=(G,N)=>{const _=N[1];O(G,N),W(G)?G.every(z=>z.length<=1)&&_():G.length<=1&&_()},re={mode:a,persisted:i,beforeEnter(G){let N=s;if(!n.isMounted){if(!r)return;N=T||s}G._leaveCb&&G._leaveCb(!0);const _=C[A];_&&Et(e,_)&&_.el._leaveCb&&_.el._leaveCb(),O(N,[G])},enter(G){let N=l,_=c,z=u;if(!n.isMounted){if(!r)return;N=B||l,_=k||c,z=F||u}let D=!1;const oe=G._enterCb=X=>{D||(D=!0,O(X?z:_,[G]),re.delayedLeave&&re.delayedLeave(),G._enterCb=void 0)};N?Q(N,[G,oe]):oe()},leave(G,N){const _=String(e.key);if(G._enterCb&&G._enterCb(!0),n.isUnmounting)return N();O(p,[G]);let z=!1;const D=G._leaveCb=oe=>{z||(z=!0,N(),O(oe?h:x,[G]),G._leaveCb=void 0,C[_]===e&&delete C[_])};C[_]=e,b?Q(b,[G,D]):D()},clone:G=>jn(G,t,n,o)};return re}function fo(e){if(eo(e))return(e=wt(e)).children=null,e}function jr(e){return eo(e)?e.children?e.children[0]:void 0:e}function Tn(e,t){6&e.shapeFlag&&e.component?Tn(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function $o(e,t=!1,n){let o=[],r=0;for(let a=0;a<e.length;a++){let i=e[a];const s=n==null?i.key:String(n)+String(i.key!=null?i.key:a);i.type===de?(128&i.patchFlag&&r++,o=o.concat($o(i.children,t,s))):(t||i.type!==Qe)&&o.push(s!=null?wt(i,{key:s}):i)}if(r>1)for(let a=0;a<o.length;a++)o[a].patchFlag=-2;return o}function xe(e){return ne(e)?{setup:e,name:e.name}:e}const Vn=e=>!!e.type.__asyncLoader,eo=e=>e.type.__isKeepAlive;function ls(e,t){Pa(e,"a",t)}function cs(e,t){Pa(e,"da",t)}function Pa(e,t,n=Te){const o=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(to(t,o,n),n){let r=n.parent;for(;r&&r.parent;)eo(r.parent.vnode)&&us(o,t,n,r),r=r.parent}}function us(e,t,n,o){const r=to(t,e,o,!0);Ba(()=>{zo(o[t],r)},n)}function to(e,t,n=Te,o=!1){if(n){const r=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;$t(),en(n);const s=Ye(t,n,e,i);return Pt(),Qt(),s});return o?r.unshift(a):r.push(a),a}}const ut=e=>(t,n=Te)=>(!wn||e==="sp")&&to(e,(...o)=>t(...o),n),ds=ut("bm"),Qo=ut("m"),ps=ut("bu"),za=ut("u"),Va=ut("bum"),Ba=ut("um"),gs=ut("sp"),fs=ut("rtg"),ms=ut("rtc");function hs(e,t=Te){to("ec",e,t)}function ie(e,t){const n=We;if(n===null)return e;const o=ro(n)||n.proxy,r=e.dirs||(e.dirs=[]);for(let a=0;a<t.length;a++){let[i,s,l,c=me]=t[a];i&&(ne(i)&&(i={mounted:i,updated:i}),i.deep&&Ot(s),r.push({dir:i,instance:o,value:s,oldValue:void 0,arg:l,modifiers:c}))}return e}function kt(e,t,n,o){const r=e.dirs,a=t&&t.dirs;for(let i=0;i<r.length;i++){const s=r[i];a&&(s.oldValue=a[i].value);let l=s.dir[o];l&&($t(),Ye(l,n,8,[e.el,s,e,t]),Qt())}}const bs=Symbol();function De(e,t,n,o){let r;const a=n&&n[o];if(W(e)||je(e)){r=new Array(e.length);for(let i=0,s=e.length;i<s;i++)r[i]=t(e[i],i,void 0,a&&a[i])}else if(typeof e=="number"){r=new Array(e);for(let i=0;i<e;i++)r[i]=t(i+1,i,void 0,a&&a[i])}else if(pe(e))if(e[Symbol.iterator])r=Array.from(e,(i,s)=>t(i,s,void 0,a&&a[s]));else{const i=Object.keys(e);r=new Array(i.length);for(let s=0,l=i.length;s<l;s++){const c=i[s];r[s]=t(e[c],c,s,a&&a[s])}}else r=[];return n&&(n[o]=r),r}const So=e=>e?Qa(e)?ro(e)||e.proxy:So(e.parent):null,pn=Se(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>So(e.parent),$root:e=>So(e.root),$emit:e=>e.emit,$options:e=>Xo(e),$forceUpdate:e=>e.f||(e.f=()=>Ko(e.update)),$nextTick:e=>e.n||(e.n=qn.bind(e.proxy)),$watch:e=>ss.bind(e)}),mo=(e,t)=>e!==me&&!e.__isScriptSetup&&se(e,t),xs={get({_:e},t){const{ctx:n,setupState:o,data:r,props:a,accessCache:i,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const x=i[t];if(x!==void 0)switch(x){case 1:return o[t];case 2:return r[t];case 4:return n[t];case 3:return a[t]}else{if(mo(o,t))return i[t]=1,o[t];if(r!==me&&se(r,t))return i[t]=2,r[t];if((c=e.propsOptions[0])&&se(c,t))return i[t]=3,a[t];if(n!==me&&se(n,t))return i[t]=4,n[t];ko&&(i[t]=0)}}const u=pn[t];let p,b;return u?(t==="$attrs"&&Ve(e,0,t),u(e)):(p=s.__cssModules)&&(p=p[t])?p:n!==me&&se(n,t)?(i[t]=4,n[t]):(b=l.config.globalProperties,se(b,t)?b[t]:void 0)},set({_:e},t,n){const{data:o,setupState:r,ctx:a}=e;return mo(r,t)?(r[t]=n,!0):o!==me&&se(o,t)?(o[t]=n,!0):!se(e.props,t)&&(t[0]!=="$"||!(t.slice(1)in e))&&(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:r,propsOptions:a}},i){let s;return!!n[i]||e!==me&&se(e,i)||mo(t,i)||(s=a[0])&&se(s,i)||se(o,i)||se(pn,i)||se(r.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:se(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let ko=!0;function vs(e){const t=Xo(e),n=e.proxy,o=e.ctx;ko=!1,t.beforeCreate&&Tr(t.beforeCreate,e,"bc");const{data:r,computed:a,methods:i,watch:s,provide:l,inject:c,created:u,beforeMount:p,mounted:b,beforeUpdate:x,updated:h,activated:T,deactivated:B,beforeDestroy:k,beforeUnmount:F,destroyed:A,unmounted:C,render:O,renderTracked:Q,renderTriggered:re,errorCaptured:G,serverPrefetch:N,expose:_,inheritAttrs:z,components:D,directives:oe,filters:X}=t;if(c&&function($,ee,le=tt,Ue=!1){W($)&&($=No($));for(const ye in $){const Ie=$[ye];let Oe;Oe=pe(Ie)?"default"in Ie?dn(Ie.from||ye,Ie.default,!0):dn(Ie.from||ye):dn(Ie),be(Oe)&&Ue?Object.defineProperty(ee,ye,{enumerable:!0,configurable:!0,get:()=>Oe.value,set:Nn=>Oe.value=Nn}):ee[ye]=Oe}}(c,o,null,e.appContext.config.unwrapInjectedRef),i)for(const $ in i){const ee=i[$];ne(ee)&&(o[$]=ee.bind(n))}if(r){const $=r.call(n,n);pe($)&&(e.data=rn($))}if(ko=!0,a)for(const $ in a){const ee=a[$],le=ne(ee)?ee.bind(n,n):ne(ee.get)?ee.get.bind(n,n):tt,Ue=!ne(ee)&&ne(ee.set)?ee.set.bind(n):tt,ye=we({get:le,set:Ue});Object.defineProperty(o,$,{enumerable:!0,configurable:!0,get:()=>ye.value,set:Ie=>ye.value=Ie})}if(s)for(const $ in s)Ha(s[$],o,n,$);if(l){const $=ne(l)?l.call(n):l;Reflect.ownKeys($).forEach(ee=>{(function(le,Ue){if(Te){let ye=Te.provides;const Ie=Te.parent&&Te.parent.provides;Ie===ye&&(ye=Te.provides=Object.create(Ie)),ye[le]=Ue}})(ee,$[ee])})}function ce($,ee){W(ee)?ee.forEach(le=>$(le.bind(n))):ee&&$(ee.bind(n))}if(u&&Tr(u,e,"c"),ce(ds,p),ce(Qo,b),ce(ps,x),ce(za,h),ce(ls,T),ce(cs,B),ce(hs,G),ce(ms,Q),ce(fs,re),ce(Va,F),ce(Ba,C),ce(gs,N),W(_))if(_.length){const $=e.exposed||(e.exposed={});_.forEach(ee=>{Object.defineProperty($,ee,{get:()=>n[ee],set:le=>n[ee]=le})})}else e.exposed||(e.exposed={});O&&e.render===tt&&(e.render=O),z!=null&&(e.inheritAttrs=z),D&&(e.components=D),oe&&(e.directives=oe)}function Tr(e,t,n){Ye(W(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ha(e,t,n,o){const r=o.includes(".")?Aa(n,o):()=>n[o];if(je(e)){const a=t[e];ne(a)&&Ce(r,a)}else if(ne(e))Ce(r,e.bind(n));else if(pe(e))if(W(e))e.forEach(a=>Ha(a,t,n,o));else{const a=ne(e.handler)?e.handler.bind(n):t[e.handler];ne(a)&&Ce(r,a,e)}}function Xo(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:r,optionsCache:a,config:{optionMergeStrategies:i}}=e.appContext,s=a.get(t);let l;return s?l=s:r.length||n||o?(l={},r.length&&r.forEach(c=>Kn(l,c,i,!0)),Kn(l,t,i)):l=t,pe(t)&&a.set(t,l),l}function Kn(e,t,n,o=!1){const{mixins:r,extends:a}=t;a&&Kn(e,a,n,!0),r&&r.forEach(i=>Kn(e,i,n,!0));for(const i in t)if(!(o&&i==="expose")){const s=ys[i]||n&&n[i];e[i]=s?s(e[i],t[i]):t[i]}return e}const ys={data:Ir,props:Nt,emits:Nt,methods:Nt,computed:Nt,beforeCreate:Ge,created:Ge,beforeMount:Ge,mounted:Ge,beforeUpdate:Ge,updated:Ge,beforeDestroy:Ge,beforeUnmount:Ge,destroyed:Ge,unmounted:Ge,activated:Ge,deactivated:Ge,errorCaptured:Ge,serverPrefetch:Ge,components:Nt,directives:Nt,watch:function(e,t){if(!e)return t;if(!t)return e;const n=Se(Object.create(null),e);for(const o in t)n[o]=Ge(e[o],t[o]);return n},provide:Ir,inject:function(e,t){return Nt(No(e),No(t))}};function Ir(e,t){return t?e?function(){return Se(ne(e)?e.call(this,this):e,ne(t)?t.call(this,this):t)}:t:e}function No(e){if(W(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ge(e,t){return e?[...new Set([].concat(e,t))]:t}function Nt(e,t){return e?Se(Se(Object.create(null),e),t):t}function js(e,t,n,o=!1){const r={},a={};Un(a,oo,1),e.propsDefaults=Object.create(null),Ua(e,t,r,a);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);n?e.props=o?r:Zo(r,!1,Ui,Ji,xa):e.type.props?e.props=r:e.props=a,e.attrs=a}function Ua(e,t,n,o){const[r,a]=e.propsOptions;let i,s=!1;if(t)for(let l in t){if(Pn(l))continue;const c=t[l];let u;r&&se(r,u=Jt(l))?a&&a.includes(u)?(i||(i={}))[u]=c:n[u]=c:Wn(e.emitsOptions,l)||l in o&&c===o[l]||(o[l]=c,s=!0)}if(a){const l=ae(n),c=i||me;for(let u=0;u<a.length;u++){const p=a[u];n[p]=Co(r,l,p,c[p],e,!se(c,p))}}return s}function Co(e,t,n,o,r,a){const i=e[n];if(i!=null){const s=se(i,"default");if(s&&o===void 0){const l=i.default;if(i.type!==Function&&ne(l)){const{propsDefaults:c}=r;n in c?o=c[n]:(en(r),o=c[n]=l.call(null,t),Pt())}else o=l}i[0]&&(a&&!s?o=!1:!i[1]||o!==""&&o!==Vt(n)||(o=!0))}return o}function Ra(e,t,n=!1){const o=t.propsCache,r=o.get(e);if(r)return r;const a=e.props,i={},s=[];let l=!1;if(!ne(e)){const u=p=>{l=!0;const[b,x]=Ra(p,t,!0);Se(i,b),x&&s.push(...x)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!a&&!l)return pe(e)&&o.set(e,Wt),Wt;if(W(a))for(let u=0;u<a.length;u++){const p=Jt(a[u]);wr(p)&&(i[p]=me)}else if(a)for(const u in a){const p=Jt(u);if(wr(p)){const b=a[u],x=i[p]=W(b)||ne(b)?{type:b}:Object.assign({},b);if(x){const h=Nr(Boolean,x.type),T=Nr(String,x.type);x[0]=h>-1,x[1]=T<0||h<T,(h>-1||se(x,"default"))&&s.push(p)}}}const c=[i,s];return pe(e)&&o.set(e,c),c}function wr(e){return e[0]!=="$"}function Sr(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function kr(e,t){return Sr(e)===Sr(t)}function Nr(e,t){return W(t)?t.findIndex(n=>kr(n,e)):ne(t)&&kr(t,e)?0:-1}const Fa=e=>e[0]==="_"||e==="$stable",qo=e=>W(e)?e.map(qe):[qe(e)],Ts=(e,t,n)=>{if(t._n)return t;const o=Jo((...r)=>qo(t(...r)),n);return o._c=!1,o},Za=(e,t,n)=>{const o=e._ctx;for(const r in e){if(Fa(r))continue;const a=e[r];if(ne(a))t[r]=Ts(0,a,o);else if(a!=null){const i=qo(a);t[r]=()=>i}}},Wa=(e,t)=>{const n=qo(t);e.slots.default=()=>n},Is=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=ae(t),Un(t,"_",n)):Za(t,e.slots={})}else e.slots={},t&&Wa(e,t);Un(e.slots,oo,1)},ws=(e,t,n)=>{const{vnode:o,slots:r}=e;let a=!0,i=me;if(32&o.shapeFlag){const s=t._;s?n&&s===1?a=!1:(Se(r,t),n||s!==1||delete r._):(a=!t.$stable,Za(t,r)),i=t}else t&&(Wa(e,t),i={default:1});if(a)for(const s in r)Fa(s)||s in i||delete r[s]};function Ya(){return{app:null,config:{isNativeTag:Ni,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ss=0;function ks(e,t){return function(n,o=null){ne(n)||(n=Object.assign({},n)),o==null||pe(o)||(o=null);const r=Ya(),a=new Set;let i=!1;const s=r.app={_uid:Ss++,_component:n,_props:o,_container:null,_context:r,_instance:null,version:Gs,get config(){return r.config},set config(l){},use:(l,...c)=>(a.has(l)||(l&&ne(l.install)?(a.add(l),l.install(s,...c)):ne(l)&&(a.add(l),l(s,...c))),s),mixin:l=>(r.mixins.includes(l)||r.mixins.push(l),s),component:(l,c)=>c?(r.components[l]=c,s):r.components[l],directive:(l,c)=>c?(r.directives[l]=c,s):r.directives[l],mount(l,c,u){if(!i){const p=Y(n,o);return p.appContext=r,c&&t?t(p,l):e(p,l,u),i=!0,s._container=l,l.__vue_app__=s,ro(p.component)||p.component.proxy}},unmount(){i&&(e(null,s._container),delete s._container.__vue_app__)},provide:(l,c)=>(r.provides[l]=c,s)};return s}}function Mo(e,t,n,o,r=!1){if(W(e))return void e.forEach((b,x)=>Mo(b,t&&(W(t)?t[x]:t),n,o,r));if(Vn(o)&&!r)return;const a=4&o.shapeFlag?ro(o.component)||o.component.proxy:o.el,i=r?null:a,{i:s,r:l}=e,c=t&&t.r,u=s.refs===me?s.refs={}:s.refs,p=s.setupState;if(c!=null&&c!==l&&(je(c)?(u[c]=null,se(p,c)&&(p[c]=null)):be(c)&&(c.value=null)),ne(l))It(l,s,12,[i,u]);else{const b=je(l),x=be(l);if(b||x){const h=()=>{if(e.f){const T=b?se(p,l)?p[l]:u[l]:l.value;r?W(T)&&zo(T,a):W(T)?T.includes(a)||T.push(a):b?(u[l]=[a],se(p,l)&&(p[l]=u[l])):(l.value=[a],e.k&&(u[e.k]=l.value))}else b?(u[l]=i,se(p,l)&&(p[l]=i)):x&&(l.value=i,e.k&&(u[e.k]=i))};i?(h.id=-1,Le(h,n)):h()}}}const Le=function(e,t){var n;t&&t.pendingBranch?W(e)?t.effects.push(...e):t.effects.push(e):(W(n=e)?Kt.push(...n):it&&it.includes(n,n.allowRecurse?Dt+1:Dt)||Kt.push(n),Na())};function Ns(e){return function(t,n){Gi().__VUE__=!0;const{insert:o,remove:r,patchProp:a,createElement:i,createText:s,createComment:l,setText:c,setElementText:u,parentNode:p,nextSibling:b,setScopeId:x=tt,insertStaticContent:h}=t,T=(d,f,v,I=null,j=null,w=null,L=!1,M=null,S=!!f.dynamicChildren)=>{if(d===f)return;d&&!Et(d,f)&&(I=Cn(d),Oe(d,j,w,!0),d=null),f.patchFlag===-2&&(S=!1,f.dynamicChildren=null);const{type:y,ref:V,shapeFlag:E}=f;switch(y){case no:B(d,f,v,I);break;case Qe:k(d,f,v,I);break;case ho:d==null&&F(f,v,I,L);break;case de:D(d,f,v,I,j,w,L,M,S);break;default:1&E?O(d,f,v,I,j,w,L,M,S):6&E?oe(d,f,v,I,j,w,L,M,S):(64&E||128&E)&&y.process(d,f,v,I,j,w,L,M,S,an)}V!=null&&j&&Mo(V,d&&d.ref,w,f||d,!f)},B=(d,f,v,I)=>{if(d==null)o(f.el=s(f.children),v,I);else{const j=f.el=d.el;f.children!==d.children&&c(j,f.children)}},k=(d,f,v,I)=>{d==null?o(f.el=l(f.children||""),v,I):f.el=d.el},F=(d,f,v,I)=>{[d.el,d.anchor]=h(d.children,f,v,I,d.el,d.anchor)},A=({el:d,anchor:f},v,I)=>{let j;for(;d&&d!==f;)j=b(d),o(d,v,I),d=j;o(f,v,I)},C=({el:d,anchor:f})=>{let v;for(;d&&d!==f;)v=b(d),r(d),d=v;r(f)},O=(d,f,v,I,j,w,L,M,S)=>{L=L||f.type==="svg",d==null?Q(f,v,I,j,w,L,M,S):N(d,f,j,w,L,M,S)},Q=(d,f,v,I,j,w,L,M)=>{let S,y;const{type:V,props:E,shapeFlag:P,transition:R,dirs:Z}=d;if(S=d.el=i(d.type,w,E&&E.is,E),8&P?u(S,d.children):16&P&&G(d.children,S,null,I,j,w&&V!=="foreignObject",L,M),Z&&kt(d,null,I,"created"),re(S,d,d.scopeId,L,I),E){for(const te in E)te==="value"||Pn(te)||a(S,te,null,E[te],w,d.children,I,j,ot);"value"in E&&a(S,"value",null,E.value),(y=E.onVnodeBeforeMount)&&Xe(y,I,d)}Z&&kt(d,null,I,"beforeMount");const J=(!j||j&&!j.pendingBranch)&&R&&!R.persisted;J&&R.beforeEnter(S),o(S,f,v),((y=E&&E.onVnodeMounted)||J||Z)&&Le(()=>{y&&Xe(y,I,d),J&&R.enter(S),Z&&kt(d,null,I,"mounted")},j)},re=(d,f,v,I,j)=>{if(v&&x(d,v),I)for(let w=0;w<I.length;w++)x(d,I[w]);if(j&&f===j.subTree){const w=j.vnode;re(d,w,w.scopeId,w.slotScopeIds,j.parent)}},G=(d,f,v,I,j,w,L,M,S=0)=>{for(let y=S;y<d.length;y++){const V=d[y]=M?ht(d[y]):qe(d[y]);T(null,V,f,v,I,j,w,L,M)}},N=(d,f,v,I,j,w,L)=>{const M=f.el=d.el;let{patchFlag:S,dynamicChildren:y,dirs:V}=f;S|=16&d.patchFlag;const E=d.props||me,P=f.props||me;let R;v&&Ct(v,!1),(R=P.onVnodeBeforeUpdate)&&Xe(R,v,f,d),V&&kt(f,d,v,"beforeUpdate"),v&&Ct(v,!0);const Z=j&&f.type!=="foreignObject";if(y?_(d.dynamicChildren,y,M,v,I,Z,w):L||le(d,f,M,null,v,I,Z,w,!1),S>0){if(16&S)z(M,f,E,P,v,I,j);else if(2&S&&E.class!==P.class&&a(M,"class",null,P.class,j),4&S&&a(M,"style",E.style,P.style,j),8&S){const J=f.dynamicProps;for(let te=0;te<J.length;te++){const ue=J[te],Me=E[ue],Ae=P[ue];Ae===Me&&ue!=="value"||a(M,ue,Me,Ae,j,d.children,v,I,ot)}}1&S&&d.children!==f.children&&u(M,f.children)}else L||y!=null||z(M,f,E,P,v,I,j);((R=P.onVnodeUpdated)||V)&&Le(()=>{R&&Xe(R,v,f,d),V&&kt(f,d,v,"updated")},I)},_=(d,f,v,I,j,w,L)=>{for(let M=0;M<f.length;M++){const S=d[M],y=f[M],V=S.el&&(S.type===de||!Et(S,y)||70&S.shapeFlag)?p(S.el):v;T(S,y,V,null,I,j,w,L,!0)}},z=(d,f,v,I,j,w,L)=>{if(v!==I){if(v!==me)for(const M in v)Pn(M)||M in I||a(d,M,v[M],null,L,f.children,j,w,ot);for(const M in I){if(Pn(M))continue;const S=I[M],y=v[M];S!==y&&M!=="value"&&a(d,M,y,S,L,f.children,j,w,ot)}"value"in I&&a(d,"value",v.value,I.value)}},D=(d,f,v,I,j,w,L,M,S)=>{const y=f.el=d?d.el:s(""),V=f.anchor=d?d.anchor:s("");let{patchFlag:E,dynamicChildren:P,slotScopeIds:R}=f;R&&(M=M?M.concat(R):R),d==null?(o(y,v,I),o(V,v,I),G(f.children,v,V,j,w,L,M,S)):E>0&&64&E&&P&&d.dynamicChildren?(_(d.dynamicChildren,P,v,j,w,L,M),(f.key!=null||j&&f===j.subTree)&&Ka(d,f,!0)):le(d,f,v,V,j,w,L,M,S)},oe=(d,f,v,I,j,w,L,M,S)=>{f.slotScopeIds=M,d==null?512&f.shapeFlag?j.ctx.activate(f,v,I,L,S):X(f,v,I,j,w,L,S):ce(d,f,S)},X=(d,f,v,I,j,w,L)=>{const M=d.component=function(S,y,V){const E=S.type,P=(y?y.appContext:S.appContext)||_s,R={uid:Ds++,vnode:S,type:E,parent:y,appContext:P,root:null,next:null,subTree:null,effect:null,update:null,scope:new sa(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:y?y.provides:Object.create(P.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ra(E,P),emitsOptions:_a(E,P),emit:null,emitted:null,propsDefaults:me,inheritAttrs:E.inheritAttrs,ctx:me,data:me,props:me,attrs:me,slots:me,refs:me,setupState:me,setupContext:null,suspense:V,suspenseId:V?V.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return R.ctx={_:R},R.root=y?y.root:R,R.emit=os.bind(null,R),S.ce&&S.ce(R),R}(d,I,j);if(eo(d)&&(M.ctx.renderer=an),function(S,y=!1){wn=y;const{props:V,children:E}=S.vnode,P=Qa(S);js(S,V,P,y),Is(S,E);const R=P?function(Z,J){const te=Z.type;Z.accessCache=Object.create(null),Z.proxy=qt(new Proxy(Z.ctx,xs));const{setup:ue}=te;if(ue){const Me=Z.setupContext=ue.length>1?function(ke){const rt=ge=>{ke.exposed=ge||{}};let sn;return{get attrs(){return sn||(sn=function(ge){return new Proxy(ge.attrs,{get:(_e,Ne)=>(Ve(ge,0,"$attrs"),_e[Ne])})}(ke))},slots:ke.slots,emit:ke.emit,expose:rt}}(Z):null;en(Z),$t();const Ae=It(ue,Z,0,[Z.props,Me]);if(Qt(),Pt(),oa(Ae)){if(Ae.then(Pt,Pt),J)return Ae.then(ke=>{_r(Z,ke,J)}).catch(ke=>{Xn(ke,Z,0)});Z.asyncDep=Ae}else _r(Z,Ae,J)}else Xa(Z,J)}(S,y):void 0;wn=!1}(M),M.asyncDep){if(j&&j.registerDep(M,$),!d.el){const S=M.subTree=Y(Qe);k(null,S,f,v)}}else $(M,d,f,v,j,w,L)},ce=(d,f,v)=>{const I=f.component=d.component;if(function(j,w,L){const{props:M,children:S,component:y}=j,{props:V,children:E,patchFlag:P}=w,R=y.emitsOptions;if(w.dirs||w.transition)return!0;if(!(L&&P>=0))return!(!S&&!E||E&&E.$stable)||M!==V&&(M?!V||yr(M,V,R):!!V);if(1024&P)return!0;if(16&P)return M?yr(M,V,R):!!V;if(8&P){const Z=w.dynamicProps;for(let J=0;J<Z.length;J++){const te=Z[J];if(V[te]!==M[te]&&!Wn(R,te))return!0}}return!1}(d,f,v)){if(I.asyncDep&&!I.asyncResolved)return void ee(I,f,v);I.next=f,function(j){const w=Ee.indexOf(j);w>et&&Ee.splice(w,1)}(I.update),I.update()}else f.el=d.el,I.vnode=f},$=(d,f,v,I,j,w,L)=>{const M=()=>{if(d.isMounted){let V,{next:E,bu:P,u:R,parent:Z,vnode:J}=d,te=E;Ct(d,!1),E?(E.el=J.el,ee(d,E,L)):E=J,P&&zn(P),(V=E.props&&E.props.onVnodeBeforeUpdate)&&Xe(V,Z,E,J),Ct(d,!0);const ue=go(d),Me=d.subTree;d.subTree=ue,T(Me,ue,p(Me.el),Cn(Me),d,j,w),E.el=ue.el,te===null&&function({vnode:Ae,parent:ke},rt){for(;ke&&ke.subTree===Ae;)(Ae=ke.vnode).el=rt,ke=ke.parent}(d,ue.el),R&&Le(R,j),(V=E.props&&E.props.onVnodeUpdated)&&Le(()=>Xe(V,Z,E,J),j)}else{let V;const{el:E,props:P}=f,{bm:R,m:Z,parent:J}=d,te=Vn(f);if(Ct(d,!1),R&&zn(R),!te&&(V=P&&P.onVnodeBeforeMount)&&Xe(V,J,f),Ct(d,!0),E&&co){const ue=()=>{d.subTree=go(d),co(E,d.subTree,d,j,null)};te?f.type.__asyncLoader().then(()=>!d.isUnmounted&&ue()):ue()}else{const ue=d.subTree=go(d);T(null,ue,v,I,d,j,w),f.el=ue.el}if(Z&&Le(Z,j),!te&&(V=P&&P.onVnodeMounted)){const ue=f;Le(()=>Xe(V,J,ue),j)}(256&f.shapeFlag||J&&Vn(J.vnode)&&256&J.vnode.shapeFlag)&&d.a&&Le(d.a,j),d.isMounted=!0,f=v=I=null}},S=d.effect=new Ho(M,()=>Ko(y),d.scope),y=d.update=()=>S.run();y.id=d.uid,Ct(d,!0),y()},ee=(d,f,v)=>{f.component=d;const I=d.vnode.props;d.vnode=f,d.next=null,function(j,w,L,M){const{props:S,attrs:y,vnode:{patchFlag:V}}=j,E=ae(S),[P]=j.propsOptions;let R=!1;if(!(M||V>0)||16&V){let Z;Ua(j,w,S,y)&&(R=!0);for(const J in E)w&&(se(w,J)||(Z=Vt(J))!==J&&se(w,Z))||(P?!L||L[J]===void 0&&L[Z]===void 0||(S[J]=Co(P,E,J,void 0,j,!0)):delete S[J]);if(y!==E)for(const J in y)w&&se(w,J)||(delete y[J],R=!0)}else if(8&V){const Z=j.vnode.dynamicProps;for(let J=0;J<Z.length;J++){let te=Z[J];if(Wn(j.emitsOptions,te))continue;const ue=w[te];if(P)if(se(y,te))ue!==y[te]&&(y[te]=ue,R=!0);else{const Me=Jt(te);S[Me]=Co(P,E,Me,ue,j,!1)}else ue!==y[te]&&(y[te]=ue,R=!0)}}R&&lt(j,"set","$attrs")}(d,f.props,I,v),ws(d,f.children,v),$t(),vr(),Qt()},le=(d,f,v,I,j,w,L,M,S=!1)=>{const y=d&&d.children,V=d?d.shapeFlag:0,E=f.children,{patchFlag:P,shapeFlag:R}=f;if(P>0){if(128&P)return void ye(y,E,v,I,j,w,L,M,S);if(256&P)return void Ue(y,E,v,I,j,w,L,M,S)}8&R?(16&V&&ot(y,j,w),E!==y&&u(v,E)):16&V?16&R?ye(y,E,v,I,j,w,L,M,S):ot(y,j,w,!0):(8&V&&u(v,""),16&R&&G(E,v,I,j,w,L,M,S))},Ue=(d,f,v,I,j,w,L,M,S)=>{f=f||Wt;const y=(d=d||Wt).length,V=f.length,E=Math.min(y,V);let P;for(P=0;P<E;P++){const R=f[P]=S?ht(f[P]):qe(f[P]);T(d[P],R,v,null,j,w,L,M,S)}y>V?ot(d,j,w,!0,!1,E):G(f,v,I,j,w,L,M,S,E)},ye=(d,f,v,I,j,w,L,M,S)=>{let y=0;const V=f.length;let E=d.length-1,P=V-1;for(;y<=E&&y<=P;){const R=d[y],Z=f[y]=S?ht(f[y]):qe(f[y]);if(!Et(R,Z))break;T(R,Z,v,null,j,w,L,M,S),y++}for(;y<=E&&y<=P;){const R=d[E],Z=f[P]=S?ht(f[P]):qe(f[P]);if(!Et(R,Z))break;T(R,Z,v,null,j,w,L,M,S),E--,P--}if(y>E){if(y<=P){const R=P+1,Z=R<V?f[R].el:I;for(;y<=P;)T(null,f[y]=S?ht(f[y]):qe(f[y]),v,Z,j,w,L,M,S),y++}}else if(y>P)for(;y<=E;)Oe(d[y],j,w,!0),y++;else{const R=y,Z=y,J=new Map;for(y=Z;y<=P;y++){const ge=f[y]=S?ht(f[y]):qe(f[y]);ge.key!=null&&J.set(ge.key,y)}let te,ue=0;const Me=P-Z+1;let Ae=!1,ke=0;const rt=new Array(Me);for(y=0;y<Me;y++)rt[y]=0;for(y=R;y<=E;y++){const ge=d[y];if(ue>=Me){Oe(ge,j,w,!0);continue}let _e;if(ge.key!=null)_e=J.get(ge.key);else for(te=Z;te<=P;te++)if(rt[te-Z]===0&&Et(ge,f[te])){_e=te;break}_e===void 0?Oe(ge,j,w,!0):(rt[_e-Z]=y+1,_e>=ke?ke=_e:Ae=!0,T(ge,f[_e],v,null,j,w,L,M,S),ue++)}const sn=Ae?function(ge){const _e=ge.slice(),Ne=[0];let dt,uo,Re,pt,Mn;const vi=ge.length;for(dt=0;dt<vi;dt++){const _n=ge[dt];if(_n!==0){if(uo=Ne[Ne.length-1],ge[uo]<_n){_e[dt]=uo,Ne.push(dt);continue}for(Re=0,pt=Ne.length-1;Re<pt;)Mn=Re+pt>>1,ge[Ne[Mn]]<_n?Re=Mn+1:pt=Mn;_n<ge[Ne[Re]]&&(Re>0&&(_e[dt]=Ne[Re-1]),Ne[Re]=dt)}}for(Re=Ne.length,pt=Ne[Re-1];Re-- >0;)Ne[Re]=pt,pt=_e[pt];return Ne}(rt):Wt;for(te=sn.length-1,y=Me-1;y>=0;y--){const ge=Z+y,_e=f[ge],Ne=ge+1<V?f[ge+1].el:I;rt[y]===0?T(null,_e,v,Ne,j,w,L,M,S):Ae&&(te<0||y!==sn[te]?Ie(_e,v,Ne,2):te--)}}},Ie=(d,f,v,I,j=null)=>{const{el:w,type:L,transition:M,children:S,shapeFlag:y}=d;if(6&y)return void Ie(d.component.subTree,f,v,I);if(128&y)return void d.suspense.move(f,v,I);if(64&y)return void L.move(d,f,v,an);if(L===de){o(w,f,v);for(let V=0;V<S.length;V++)Ie(S[V],f,v,I);return void o(d.anchor,f,v)}if(L===ho)return void A(d,f,v);if(I!==2&&1&y&&M)if(I===0)M.beforeEnter(w),o(w,f,v),Le(()=>M.enter(w),j);else{const{leave:V,delayLeave:E,afterLeave:P}=M,R=()=>o(w,f,v),Z=()=>{V(w,()=>{R(),P&&P()})};E?E(w,R,Z):Z()}else o(w,f,v)},Oe=(d,f,v,I=!1,j=!1)=>{const{type:w,props:L,ref:M,children:S,dynamicChildren:y,shapeFlag:V,patchFlag:E,dirs:P}=d;if(M!=null&&Mo(M,null,v,d,!0),256&V)return void f.ctx.deactivate(d);const R=1&V&&P,Z=!Vn(d);let J;if(Z&&(J=L&&L.onVnodeBeforeUnmount)&&Xe(J,f,d),6&V)xi(d.component,v,I);else{if(128&V)return void d.suspense.unmount(v,I);R&&kt(d,null,f,"beforeUnmount"),64&V?d.type.remove(d,f,v,j,an,I):y&&(w!==de||E>0&&64&E)?ot(y,f,v,!1,!0):(w===de&&384&E||!j&&16&V)&&ot(S,f,v),I&&Nn(d)}(Z&&(J=L&&L.onVnodeUnmounted)||R)&&Le(()=>{J&&Xe(J,f,d),R&&kt(d,null,f,"unmounted")},v)},Nn=d=>{const{type:f,el:v,anchor:I,transition:j}=d;if(f===de)return void bi(v,I);if(f===ho)return void C(d);const w=()=>{r(v),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(1&d.shapeFlag&&j&&!j.persisted){const{leave:L,delayLeave:M}=j,S=()=>L(v,w);M?M(d.el,w,S):S()}else w()},bi=(d,f)=>{let v;for(;d!==f;)v=b(d),r(d),d=v;r(f)},xi=(d,f,v)=>{const{bum:I,scope:j,update:w,subTree:L,um:M}=d;I&&zn(I),j.stop(),w&&(w.active=!1,Oe(L,d,f,v)),M&&Le(M,f),Le(()=>{d.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},ot=(d,f,v,I=!1,j=!1,w=0)=>{for(let L=w;L<d.length;L++)Oe(d[L],f,v,I,j)},Cn=d=>6&d.shapeFlag?Cn(d.component.subTree):128&d.shapeFlag?d.suspense.next():b(d.anchor||d.el),sr=(d,f,v)=>{d==null?f._vnode&&Oe(f._vnode,null,null,!0):T(f._vnode||null,d,f,null,null,null,v),vr(),Ca(),f._vnode=d},an={p:T,um:Oe,m:Ie,r:Nn,mt:X,mc:G,pc:le,pbc:_,n:Cn,o:t};let lo,co;return n&&([lo,co]=n(an)),{render:sr,hydrate:lo,createApp:ks(sr,lo)}}(e)}function Ct({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ka(e,t,n=!1){const o=e.children,r=t.children;if(W(o)&&W(r))for(let a=0;a<o.length;a++){const i=o[a];let s=r[a];1&s.shapeFlag&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=r[a]=ht(r[a]),s.el=i.el),n||Ka(i,s)),s.type===no&&(s.el=i.el)}}const Cs=e=>e.__isTeleport,de=Symbol(void 0),no=Symbol(void 0),Qe=Symbol(void 0),ho=Symbol(void 0),gn=[];let $e=null;function U(e=!1){gn.push($e=e?null:[])}let In=1;function Cr(e){In+=e}function Ja(e){return e.dynamicChildren=In>0?$e||Wt:null,gn.pop(),$e=gn[gn.length-1]||null,In>0&&$e&&$e.push(e),e}function K(e,t,n,o,r,a){return Ja(m(e,t,n,o,r,a,!0))}function Pe(e,t,n,o,r){return Ja(Y(e,t,n,o,r,!0))}function _o(e){return!!e&&e.__v_isVNode===!0}function Et(e,t){return e.type===t.type&&e.key===t.key}const oo="__vInternal",$a=({key:e})=>e??null,Bn=({ref:e,ref_key:t,ref_for:n})=>e!=null?je(e)||be(e)||ne(e)?{i:We,r:e,k:t,f:!!n}:e:null;function m(e,t=null,n=null,o=0,r=null,a=e===de?0:1,i=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&$a(t),ref:t&&Bn(t),scopeId:Da,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:We};return s?(er(l,n),128&a&&e.normalize(l)):n&&(l.shapeFlag|=je(n)?8:16),In>0&&!i&&$e&&(l.patchFlag>0||6&a)&&l.patchFlag!==32&&$e.push(l),l}const Y=function(e,t=null,n=null,o=0,r=null,a=!1){if(e&&e!==bs||(e=Qe),_o(e)){const l=wt(e,t,!0);return n&&er(l,n),In>0&&!a&&$e&&(6&l.shapeFlag?$e[$e.indexOf(e)]=l:$e.push(l)),l.patchFlag|=-2,l}i=e,ne(i)&&"__vccOpts"in i&&(e=e.__vccOpts);var i;if(t){t=function(u){return u?xr(u)||oo in u?Se({},u):u:null}(t);let{class:l,style:c}=t;l&&!je(l)&&(t.class=Ke(l)),pe(c)&&(xr(c)&&!W(c)&&(c=Se({},c)),t.style=nn(c))}const s=je(e)?1:is(e)?128:Cs(e)?64:pe(e)?4:ne(e)?2:0;return m(e,t,n,o,r,s,a,!0)};function wt(e,t,n=!1){const{props:o,ref:r,patchFlag:a,children:i}=e,s=t?function(...l){const c={};for(let u=0;u<l.length;u++){const p=l[u];for(const b in p)if(b==="class")c.class!==p.class&&(c.class=Ke([c.class,p.class]));else if(b==="style")c.style=nn([c.style,p.style]);else if(Jn(b)){const x=c[b],h=p[b];!h||x===h||W(x)&&x.includes(h)||(c[b]=x?[].concat(x,h):h)}else b!==""&&(c[b]=p[b])}return c}(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&$a(s),ref:t&&t.ref?n&&r?W(r)?r.concat(Bn(t)):[r,Bn(t)]:Bn(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==de?a===-1?16:16|a:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&wt(e.ssContent),ssFallback:e.ssFallback&&wt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Ms(e=" ",t=0){return Y(no,null,e,t)}function ct(e="",t=!1){return t?(U(),Pe(Qe,null,e)):Y(Qe,null,e)}function qe(e){return e==null||typeof e=="boolean"?Y(Qe):W(e)?Y(de,null,e.slice()):typeof e=="object"?ht(e):Y(no,null,String(e))}function ht(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:wt(e)}function er(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(W(t))n=16;else if(typeof t=="object"){if(65&o){const r=t.default;return void(r&&(r._c&&(r._d=!1),er(e,r()),r._c&&(r._d=!0)))}{n=32;const r=t._;r||oo in t?r===3&&We&&(We.slots._===1?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=We}}else ne(t)?(t={default:t,_ctx:We},n=32):(t=String(t),64&o?(n=16,t=[Ms(t)]):n=8);e.children=t,e.shapeFlag|=n}function Xe(e,t,n,o=null){Ye(e,t,7,[n,o])}const _s=Ya();let Ds=0,Te=null;const tr=()=>Te||We,en=e=>{Te=e,e.scope.on()},Pt=()=>{Te&&Te.scope.off(),Te=null};function Qa(e){return 4&e.vnode.shapeFlag}let Mr,wn=!1;function _r(e,t,n){ne(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:pe(t)&&(e.setupState=Ia(t)),Xa(e,n)}function Xa(e,t,n){const o=e.type;if(!e.render){if(!t&&Mr&&!o.render){const r=o.template||Xo(e).template;if(r){const{isCustomElement:a,compilerOptions:i}=e.appContext.config,{delimiters:s,compilerOptions:l}=o,c=Se(Se({isCustomElement:a,delimiters:s},i),l);o.render=Mr(r,c)}}e.render=o.render||tt}en(e),$t(),vs(e),Qt(),Pt()}function ro(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ia(qt(e.exposed)),{get:(t,n)=>n in t?t[n]:n in pn?pn[n](e):void 0,has:(t,n)=>n in t||n in pn}))}const we=(e,t)=>function(n,o,r=!1){let a,i;const s=ne(n);return s?(a=n,i=tt):(a=n.get,i=n.set),new ts(a,i,s||!i,r)}(e,0,wn),Es=Symbol(""),As=()=>dn(Es),Gs="3.2.47",At=typeof document<"u"?document:null,Dr=At&&At.createElement("template"),Os={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const r=t?At.createElementNS("http://www.w3.org/2000/svg",e):At.createElement(e,n?{is:n}:void 0);return e==="select"&&o&&o.multiple!=null&&r.setAttribute("multiple",o.multiple),r},createText:e=>At.createTextNode(e),createComment:e=>At.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>At.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,o,r,a){const i=n?n.previousSibling:t.lastChild;if(r&&(r===a||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),r!==a&&(r=r.nextSibling););else{Dr.innerHTML=o?`<svg>${e}</svg>`:e;const s=Dr.content;if(o){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Er=/\s*!important$/;function Do(e,t,n){if(W(n))n.forEach(o=>Do(e,t,o));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const o=function(r,a){const i=bo[a];if(i)return i;let s=Jt(a);if(s!=="filter"&&s in r)return bo[a]=s;s=ia(s);for(let l=0;l<Ar.length;l++){const c=Ar[l]+s;if(c in r)return bo[a]=c}return a}(e,t);Er.test(n)?e.setProperty(Vt(o),n.replace(Er,""),"important"):e[o]=n}}const Ar=["Webkit","Moz","ms"],bo={},Gr="http://www.w3.org/1999/xlink";function vt(e,t,n,o){e.addEventListener(t,n,o)}function Ls(e,t,n,o,r=null){const a=e._vei||(e._vei={}),i=a[t];if(o&&i)i.value=o;else{const[s,l]=function(c){let u;if(Or.test(c)){let b;for(u={};b=c.match(Or);)c=c.slice(0,c.length-b[0].length),u[b[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):Vt(c.slice(2)),u]}(t);if(o){const c=a[t]=function(u,p){const b=x=>{if(x._vts){if(x._vts<=b.attached)return}else x._vts=Date.now();Ye(function(h,T){if(W(T)){const B=h.stopImmediatePropagation;return h.stopImmediatePropagation=()=>{B.call(h),h._stopped=!0},T.map(k=>F=>!F._stopped&&k&&k(F))}return T}(x,b.value),p,5,[x])};return b.value=u,b.attached=zs(),b}(o,r);vt(e,s,c,l)}else i&&(function(c,u,p,b){c.removeEventListener(u,p,b)}(e,s,i,l),a[t]=void 0)}}const Or=/(?:Once|Passive|Capture)$/;let xo=0;const Ps=Promise.resolve(),zs=()=>xo||(Ps.then(()=>xo=0),xo=Date.now()),Lr=/^on[a-z]/,ft="transition",ln="animation",nr=(e,{slots:t})=>function(n,o,r){const a=arguments.length;return a===2?pe(o)&&!W(o)?_o(o)?Y(n,null,[o]):Y(n,o):Y(n,null,o):(a>3?r=Array.prototype.slice.call(arguments,2):a===3&&_o(r)&&(r=[r]),Y(n,o,r))}(Oa,ei(e),t);nr.displayName="Transition";const qa={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Vs=nr.props=Se({},Oa.props,qa),Mt=(e,t=[])=>{W(e)?e.forEach(n=>n(...t)):e&&e(...t)},Pr=e=>!!e&&(W(e)?e.some(t=>t.length>1):e.length>1);function ei(e){const t={};for(const D in e)D in qa||(t[D]=e[D]);if(e.css===!1)return t;const{name:n="v",type:o,duration:r,enterFromClass:a=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:l=a,appearActiveClass:c=i,appearToClass:u=s,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:b=`${n}-leave-active`,leaveToClass:x=`${n}-leave-to`}=e,h=function(D){if(D==null)return null;if(pe(D))return[vo(D.enter),vo(D.leave)];{const oe=vo(D);return[oe,oe]}}(r),T=h&&h[0],B=h&&h[1],{onBeforeEnter:k,onEnter:F,onEnterCancelled:A,onLeave:C,onLeaveCancelled:O,onBeforeAppear:Q=k,onAppear:re=F,onAppearCancelled:G=A}=t,N=(D,oe,X)=>{mt(D,oe?u:s),mt(D,oe?c:i),X&&X()},_=(D,oe)=>{D._isLeaving=!1,mt(D,p),mt(D,x),mt(D,b),oe&&oe()},z=D=>(oe,X)=>{const ce=D?re:F,$=()=>N(oe,D,X);Mt(ce,[oe,$]),zr(()=>{mt(oe,D?l:a),at(oe,D?u:s),Pr(ce)||Vr(oe,o,T,$)})};return Se(t,{onBeforeEnter(D){Mt(k,[D]),at(D,a),at(D,i)},onBeforeAppear(D){Mt(Q,[D]),at(D,l),at(D,c)},onEnter:z(!1),onAppear:z(!0),onLeave(D,oe){D._isLeaving=!0;const X=()=>_(D,oe);at(D,p),ni(),at(D,b),zr(()=>{D._isLeaving&&(mt(D,p),at(D,x),Pr(C)||Vr(D,o,B,X))}),Mt(C,[D,X])},onEnterCancelled(D){N(D,!1),Mt(A,[D])},onAppearCancelled(D){N(D,!0),Mt(G,[D])},onLeaveCancelled(D){_(D),Mt(O,[D])}})}function vo(e){return Ai(e)}function at(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function mt(e,t){t.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function zr(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Bs=0;function Vr(e,t,n,o){const r=e._endId=++Bs,a=()=>{r===e._endId&&o()};if(n)return setTimeout(a,n);const{type:i,timeout:s,propCount:l}=ti(e,t);if(!i)return o();const c=i+"end";let u=0;const p=()=>{e.removeEventListener(c,b),a()},b=x=>{x.target===e&&++u>=l&&p()};setTimeout(()=>{u<l&&p()},s+1),e.addEventListener(c,b)}function ti(e,t){const n=window.getComputedStyle(e),o=x=>(n[x]||"").split(", "),r=o(`${ft}Delay`),a=o(`${ft}Duration`),i=Br(r,a),s=o(`${ln}Delay`),l=o(`${ln}Duration`),c=Br(s,l);let u=null,p=0,b=0;return t===ft?i>0&&(u=ft,p=i,b=a.length):t===ln?c>0&&(u=ln,p=c,b=l.length):(p=Math.max(i,c),u=p>0?i>c?ft:ln:null,b=u?u===ft?a.length:l.length:0),{type:u,timeout:p,propCount:b,hasTransform:u===ft&&/\b(transform|all)(,|$)/.test(o(`${ft}Property`).toString())}}function Br(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,o)=>Hr(n)+Hr(e[o])))}function Hr(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function ni(){return document.body.offsetHeight}const oi=new WeakMap,ri=new WeakMap,Hs={name:"TransitionGroup",props:Se({},Vs,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=tr(),o=Ga();let r,a;return za(()=>{if(!r.length)return;const i=e.moveClass||`${e.name||"v"}-move`;if(!function(l,c,u){const p=l.cloneNode();l._vtc&&l._vtc.forEach(h=>{h.split(/\s+/).forEach(T=>T&&p.classList.remove(T))}),u.split(/\s+/).forEach(h=>h&&p.classList.add(h)),p.style.display="none";const b=c.nodeType===1?c:c.parentNode;b.appendChild(p);const{hasTransform:x}=ti(p);return b.removeChild(p),x}(r[0].el,n.vnode.el,i))return;r.forEach(Rs),r.forEach(Fs);const s=r.filter(Zs);ni(),s.forEach(l=>{const c=l.el,u=c.style;at(c,i),u.transform=u.webkitTransform=u.transitionDuration="";const p=c._moveCb=b=>{b&&b.target!==c||b&&!/transform$/.test(b.propertyName)||(c.removeEventListener("transitionend",p),c._moveCb=null,mt(c,i))};c.addEventListener("transitionend",p)})}),()=>{const i=ae(e),s=ei(i);let l=i.tag||de;r=a,a=t.default?$o(t.default()):[];for(let c=0;c<a.length;c++){const u=a[c];u.key!=null&&Tn(u,jn(u,s,o,n))}if(r)for(let c=0;c<r.length;c++){const u=r[c];Tn(u,jn(u,s,o,n)),oi.set(u,u.el.getBoundingClientRect())}return Y(l,null,a)}}},Us=Hs;function Rs(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function Fs(e){ri.set(e,e.el.getBoundingClientRect())}function Zs(e){const t=oi.get(e),n=ri.get(e),o=t.left-n.left,r=t.top-n.top;if(o||r){const a=e.el.style;return a.transform=a.webkitTransform=`translate(${o}px,${r}px)`,a.transitionDuration="0s",e}}const tn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return W(t)?n=>zn(t,n):t};function Ws(e){e.target.composing=!0}function Ur(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const yt={created(e,{modifiers:{lazy:t,trim:n,number:o}},r){e._assign=tn(r);const a=o||r.props&&r.props.type==="number";vt(e,t?"change":"input",i=>{if(i.target.composing)return;let s=e.value;n&&(s=s.trim()),a&&(s=Rn(s)),e._assign(s)}),n&&vt(e,"change",()=>{e.value=e.value.trim()}),t||(vt(e,"compositionstart",Ws),vt(e,"compositionend",Ur),vt(e,"change",Ur))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:o,number:r}},a){if(e._assign=tn(a),e.composing||document.activeElement===e&&e.type!=="range"&&(n||o&&e.value.trim()===t||(r||e.type==="number")&&Rn(e.value)===t))return;const i=t??"";e.value!==i&&(e.value=i)}},ai={deep:!0,created(e,t,n){e._assign=tn(n),vt(e,"change",()=>{const o=e._modelValue,r=Sn(e),a=e.checked,i=e._assign;if(W(o)){const s=Lo(o,r),l=s!==-1;if(a&&!l)i(o.concat(r));else if(!a&&l){const c=[...o];c.splice(s,1),i(c)}}else if(on(o)){const s=new Set(o);a?s.add(r):s.delete(r),i(s)}else i(ii(e,a))})},mounted:Rr,beforeUpdate(e,t,n){e._assign=tn(n),Rr(e,t,n)}};function Rr(e,{value:t,oldValue:n},o){e._modelValue=t,W(t)?e.checked=Lo(t,o.props.value)>-1:on(t)?e.checked=t.has(o.props.value):t!==n&&(e.checked=mn(t,ii(e,!0)))}const Fr={deep:!0,created(e,{value:t,modifiers:{number:n}},o){const r=on(t);vt(e,"change",()=>{const a=Array.prototype.filter.call(e.options,i=>i.selected).map(i=>n?Rn(Sn(i)):Sn(i));e._assign(e.multiple?r?new Set(a):a:a[0])}),e._assign=tn(o)},mounted(e,{value:t}){Zr(e,t)},beforeUpdate(e,t,n){e._assign=tn(n)},updated(e,{value:t}){Zr(e,t)}};function Zr(e,t){const n=e.multiple;if(!n||W(t)||on(t)){for(let o=0,r=e.options.length;o<r;o++){const a=e.options[o],i=Sn(a);if(n)W(t)?a.selected=Lo(t,i)>-1:a.selected=t.has(i);else if(mn(Sn(a),t))return void(e.selectedIndex!==o&&(e.selectedIndex=o))}n||e.selectedIndex===-1||(e.selectedIndex=-1)}}function Sn(e){return"_value"in e?e._value:e.value}function ii(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Ys=["ctrl","shift","alt","meta"],Ks={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Ys.some(n=>e[`${n}Key`]&&!t.includes(n))},q=(e,t)=>(n,...o)=>{for(let r=0;r<t.length;r++){const a=Ks[t[r]];if(a&&a(n,t))return}return e(n,...o)},Js={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},zt=(e,t)=>n=>{if(!("key"in n))return;const o=Vt(n.key);return t.some(r=>r===o||Js[r]===o)?e(n):void 0},ve={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):cn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:o}){!t!=!n&&(o?t?(o.beforeEnter(e),cn(e,!0),o.enter(e)):o.leave(e,()=>{cn(e,!1)}):cn(e,t))},beforeUnmount(e,{value:t}){cn(e,t)}};function cn(e,t){e.style.display=t?e._vod:"none"}const $s=Se({patchProp:(e,t,n,o,r=!1,a,i,s,l)=>{t==="class"?function(c,u,p){const b=c._vtc;b&&(u=(u?[u,...b]:[...b]).join(" ")),u==null?c.removeAttribute("class"):p?c.setAttribute("class",u):c.className=u}(e,o,r):t==="style"?function(c,u,p){const b=c.style,x=je(p);if(p&&!x){if(u&&!je(u))for(const h in u)p[h]==null&&Do(b,h,"");for(const h in p)Do(b,h,p[h])}else{const h=b.display;x?u!==p&&(b.cssText=p):u&&c.removeAttribute("style"),"_vod"in c&&(b.display=h)}}(e,n,o):Jn(t)?Po(t)||Ls(e,t,0,o,i):(t[0]==="."?(t=t.slice(1),1):t[0]==="^"?(t=t.slice(1),0):function(c,u,p,b){return b?u==="innerHTML"||u==="textContent"||!!(u in c&&Lr.test(u)&&ne(p)):u==="spellcheck"||u==="draggable"||u==="translate"||u==="form"||u==="list"&&c.tagName==="INPUT"||u==="type"&&c.tagName==="TEXTAREA"||Lr.test(u)&&je(p)?!1:u in c}(e,t,o,r))?function(c,u,p,b,x,h,T){if(u==="innerHTML"||u==="textContent")return b&&T(b,x,h),void(c[u]=p??"");if(u==="value"&&c.tagName!=="PROGRESS"&&!c.tagName.includes("-")){c._value=p;const k=p??"";return c.value===k&&c.tagName!=="OPTION"||(c.value=k),void(p==null&&c.removeAttribute(u))}let B=!1;if(p===""||p==null){const k=typeof c[u];k==="boolean"?p=lr(p):p==null&&k==="string"?(p="",B=!0):k==="number"&&(p=0,B=!0)}try{c[u]=p}catch{}B&&c.removeAttribute(u)}(e,t,o,a,i,s,l):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),function(c,u,p,b,x){if(b&&u.startsWith("xlink:"))p==null?c.removeAttributeNS(Gr,u.slice(6,u.length)):c.setAttributeNS(Gr,u,p);else{const h=ki(u);p==null||h&&!lr(p)?c.removeAttribute(u):c.setAttribute(u,h?"":p)}}(e,t,o,r))}},Os);let Wr;const Qs=(...e)=>{const t=(Wr||(Wr=Ns($s))).createApp(...e),{mount:n}=t;return t.mount=o=>{const r=function(s){return je(s)?document.querySelector(s):s}(o);if(!r)return;const a=t._component;ne(a)||a.render||a.template||(a.template=r.innerHTML),r.innerHTML="";const i=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},t};var Xs=!1;let si;const ao=e=>si=e,li=Symbol();function Eo(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var fn;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(fn||(fn={}));const ci=()=>{};function Yr(e,t,n,o=ci){e.push(t);const r=()=>{const a=e.indexOf(t);a>-1&&(e.splice(a,1),o())};return!n&&ca()&&function(a){He&&He.cleanups.push(a)}(r),r}function Ht(e,...t){e.slice().forEach(n=>{n(...t)})}function Ao(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,o)=>e.set(o,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const o=t[n],r=e[n];Eo(r)&&Eo(o)&&e.hasOwnProperty(n)&&!be(o)&&!st(o)?e[n]=Ao(r,o):e[n]=o}return e}const qs=Symbol(),{assign:bt}=Object;function el(e,t,n,o){const{state:r,actions:a,getters:i}=t,s=n.state.value[e];let l;return l=ui(e,function(){s||(n.state.value[e]=r?r():{});const c=function(u){const p=W(u)?new Array(u.length):{};for(const b in u)p[b]=wa(u,b);return p}(n.state.value[e]);return bt(c,a,Object.keys(i||{}).reduce((u,p)=>(u[p]=qt(we(()=>{ao(n);const b=n._s.get(e);return i[p].call(b,b)})),u),{}))},t,n,o,!0),l.$reset=function(){const c=r?r():{};this.$patch(u=>{bt(u,c)})},l}function ui(e,t,n={},o,r,a){let i;const s=bt({actions:{}},n),l={deep:!0};let c,u,p,b=qt([]),x=qt([]);const h=o.state.value[e];let T;function B(G){let N;c=u=!1,typeof G=="function"?(G(o.state.value[e]),N={type:fn.patchFunction,storeId:e,events:p}):(Ao(o.state.value[e],G),N={type:fn.patchObject,payload:G,storeId:e,events:p});const _=T=Symbol();qn().then(()=>{T===_&&(c=!0)}),u=!0,Ht(b,N,o.state.value[e])}a||h||(o.state.value[e]={}),he({});const k=ci;function F(G,N){return function(){ao(o);const _=Array.from(arguments),z=[],D=[];let oe;Ht(x,{args:_,name:G,store:C,after:function(X){z.push(X)},onError:function(X){D.push(X)}});try{oe=N.apply(this&&this.$id===e?this:C,_)}catch(X){throw Ht(D,X),X}return oe instanceof Promise?oe.then(X=>(Ht(z,X),X)).catch(X=>(Ht(D,X),Promise.reject(X))):(Ht(z,oe),oe)}}const A={_p:o,$id:e,$onAction:Yr.bind(null,x),$patch:B,$reset:k,$subscribe(G,N={}){const _=Yr(b,G,N.detached,()=>z()),z=i.run(()=>Ce(()=>o.state.value[e],D=>{(N.flush==="sync"?u:c)&&G({storeId:e,type:fn.direct,events:p},D)},bt({},l,N)));return _},$dispose:function(){i.stop(),b=[],x=[],o._s.delete(e)}},C=rn(A);o._s.set(e,C);const O=o._e.run(()=>(i=la(),i.run(()=>t())));for(const G in O){const N=O[G];if(be(N)&&(!be(re=N)||!re.effect)||st(N))a||(!h||Eo(Q=N)&&Q.hasOwnProperty(qs)||(be(N)?N.value=h[G]:Ao(N,h[G])),o.state.value[e][G]=N);else if(typeof N=="function"){const _=F(G,N);O[G]=_,s.actions[G]=N}}var Q,re;return bt(C,O),bt(ae(C),O),Object.defineProperty(C,"$state",{get:()=>o.state.value[e],set:G=>{B(N=>{bt(N,G)})}}),o._p.forEach(G=>{bt(C,i.run(()=>G({store:C,app:o._a,pinia:o,options:s})))}),h&&a&&n.hydrate&&n.hydrate(C.$state,h),c=!0,u=!0,C}function nt(e,t,n){let o,r;const a=typeof t=="function";function i(s,l){const c=tr();return(s=s||c&&dn(li,null))&&ao(s),(s=si)._s.has(o)||(a?ui(o,t,r,s):el(o,r,s)),s._s.get(o)}return typeof e=="string"?(o=e,r=a?n:t):(r=e,o=e.id),i.$id=o,i}function Bt(e){{e=ae(e);const t={};for(const n in e){const o=e[n];(be(o)||st(o))&&(t[n]=wa(e,n))}return t}}const tl={addPlaceholder:"Please Enter a new note, press Enter to save",groupPlaceholder:"Please enter a new group value, press Enter to save",saveTagText:"Save",saveTagTitle:"Save content",clearTagText:"Clear",clearTagTitle:"Clear note",cancelTagText:"Cancel",cancelTagTitle:"Exit",searchTagTitle:"Search for notes",searchTagPlaceholder:"Search for notes and press Enter to open the result item",searchCloseTitle:"Close the search box",userIdText:"User ID",userNameText:"User name",userTagTableText:"Note value",groupText:"Group",groupTitle:"Switch group",searchContentText:"Search: ",searchContentPlaceholder:"Enter search content",rangeText:"Range: ",rangeAllText:"All",selectAllTitle:"Select all",deleteSelectedText:"Delete",deleteSelectedTitle:"Delete the selected item",moveSelectedText:"Move",moveSelectedTitle:"Moves the selected item to the specified group",manageGroupsText:"Manage groups",manageGroupsTitle:"Open the group management panel",modifyText:"(Content has been modified)",waitText:"(Waiting for data to load)",closeCotentText:"Close",closeContentTitle:"Close panel",saveContentText:"Save",saveContentTitle:"Save the modification of the content",saveCompletedNotifactionText:"Saved data!",saveErrorNotifactionText:"Failed to save data!!!",backUpNotifactionText:"Data backup completed",restoreNotifactionText:"Data recovery complete",syncConfigNotifactionText:"Successfully synchronized configuration from other tabs",syncGroupNotifactionText:"Successfully synchronized group values from other tabs",syncNoteNotifactionText:"Successfully synchronized notes from other tabs",editText:"Edit",deleteText:"Delete",editTitle:"Edit content",deleteTitle:"Delete content",settingsHeadlineText:"Settings",settingsCloseTitle:"Close the settings panel",settingsAboutSearchBoxText:"Search box",settingsSearchBoxShowIndexText:"Show index value at the top",settingsSearchBoxCanHideSearchFrameText:"Hide the search box when clicking outside the search box",settingsSearchBoxShowGroupNameText:"Result items display their grouped values (Only the non-default group, will not be used to search)",settingsSearchBoxOpenNewTabText:"Open the result item in a new tab (When not enabled, you can press Ctrl + Enter to open the results in a background tab; press Ctrl+Shift+Enter to open the results in a new tab)",settingsSearchBoxEnableShortcutKeysText:"Allow shortcut keys to open the search box (Ctrl+Shift+F)",settingsAboutSearchValueText:"Search content",settingsSearchValueCaseSensitiveText:"Case-sensitive",settingsSearchValueSplitText:'Split search method ("ab cd" ==> "ab" && "cd")',settingsSearchValueRegularText:'Support the use of regular expression (Format: "/pattern/gim")',settingsAddNoteShowNoteGroupNameText:"Allow notes on the web page to display their group value (Only the non-default group; When the note value is empty, it can also be used as a tag)",settingsAddNoteHideNoteText:"Hide detailed notes and display only group values (Turn on the options above to take effect)",settingsAddNoteShowNoteGroupColorText:"Allow group colors to be applied to notes on webpages",settingsAddNoteShowPopoverFrameText:"Allow other notes under the same group to be displayed when hovering over the notes (Only the non-default group)",settingsAddNoteOpenNoteNewTabText:"Open other notes in a new tab (When not enabled, you can hold down Ctrl and click to open in the background tab; hold down Ctrl+Shift and click to open in a new tab)",settingsAddNoteCanHideAddFrameText:"Hide the add box when clicking outside the add box",settingsAboutAddNoteText:"Notes",settingsAboutInterfaceText:"Appearance",settingsInterfaceInsertSearchButtonText:"Display floating search button in the lower right corner of the page",settingsInterfaceConfigText:"Appearance mode: ",settingsInterfaceBrightText:"Bright",settingsInterfaceDarkText:"Dark",settingsInterfaceLanguageText:"Display language: ",settingsAboutOtherText:"Other Settings",settingsAboutStoredDataText:"Stored data",settingsFrameInterfaceAutoSyncText:"Synchronize data changes from other tabs",settingsStoredDataLastTimeText:"Last modified: ",settingsStoredDataExportTitle:"Back up all stored data to a file",settingsStoredDataImportIitle:"Restore all stored data from a file",settingsAboutScriptText:"About the script",settingsScriptAuthorText:"Script author: ",settingsScriptVersionText:"Script version: ",settingsScriptCoreText:"Core version: ",settingsScriptLibraryText:"Library: ",settingsScriptIconText:"Icon: ",settingsScriptHandlerText:"Script manager: ",settingsIconText:"Icon: ",gmSettingsText:"Open the settings panel",gmManagementText:"Open the notes management panel",gmGroupText:"Open the group management panel",gmExportText:"Backup data",gmImportText:"Restore data",defaultGroupText:"Default",groupNewValueText:"New group",groupCreateValueText:"New group",groupCreateValueTitle:"Create a new group",groupValueText:"Group name",groupPrimaryColorText:"Primary color",groupSecondaryColorText:"Secondary color",groupWeightText:"Weight",selectGroupHeaderText:"Select group",optionsImportNoFileText:"No file selected!",optionsImportNotATextFile:"This is not a text file!",optionsImportValidText:"This is an invalid file!",optionsImportCannotFindFile:"Cannot find file!",optionsImportEmptyText:"File content is empty!",optionsImportErrorObjectText:"Error parsing object!",cancelText:"Cancel"},nl={addPlaceholder:"请输入新的备注，按下Enter键可保存",groupPlaceholder:"请输入新的分组值，按下Enter键可保存",saveTagText:"保存",saveTagTitle:"保存内容",clearTagText:"清除",clearTagTitle:"清除备注",cancelTagText:"取消",cancelTagTitle:"退出",searchTagTitle:"搜索备注",searchTagPlaceholder:"搜索备注，按下Enter键打开结果项",searchCloseTitle:"关闭搜索框",userIdText:"用户 ID",userNameText:"用户名",userTagTableText:"备注值",groupText:"分组",groupTitle:"切换分组",searchContentText:"搜索: ",searchContentPlaceholder:"请输入搜索内容",rangeText:"范围: ",rangeAllText:"全部",selectAllTitle:"全选",deleteSelectedText:"删除选中项",deleteSelectedTitle:"将选中的项删除",moveSelectedText:"移动选中项",moveSelectedTitle:"将选中的项移动至指定分组中",manageGroupsText:"分组管理",manageGroupsTitle:"打开分组管理面板",modifyText:"(内容已被修改)",waitText:"(等待数据加载中)",closeCotentText:"关闭",closeContentTitle:"关闭面板",saveContentText:"保存",saveContentTitle:"保存对内容的修改",saveCompletedNotifactionText:"已保存数据！",saveErrorNotifactionText:"保存数据失败！！！",backUpNotifactionText:"数据备份完成",restoreNotifactionText:"数据恢复完成",syncConfigNotifactionText:"已成功同步来自其它标签页的配置",syncGroupNotifactionText:"已成功同步来自其它标签页的分组值",syncNoteNotifactionText:"已成功同步来自其它标签页的备注信息",editText:"编辑",deleteText:"删除",editTitle:"编辑内容",deleteTitle:"删除内容",settingsHeadlineText:"设置",settingsCloseTitle:"关闭设置面板",settingsAboutSearchBoxText:"搜索框",settingsSearchBoxShowIndexText:"在顶部显示索引值",settingsSearchBoxCanHideSearchFrameText:"点击搜索框外部时隐藏搜索框",settingsSearchBoxShowGroupNameText:"结果项显示其分组值 (仅非默认分组时，不会被用于搜索)",settingsSearchBoxOpenNewTabText:"在新标签页中打开结果项 (未启用时，可以按下 Ctrl+Enter 在后台标签中打开结果；按下 Ctrl+Shift+Enter 在新标签页中打开结果)",settingsSearchBoxEnableShortcutKeysText:"允许使用快捷键打开搜索框 (Ctrl+Shift+F)",settingsAboutSearchValueText:"搜索内容",settingsSearchValueCaseSensitiveText:"区分字母大小写",settingsSearchValueSplitText:'拆分式搜索方法 ("ab cd" ==> "ab" && "cd")',settingsSearchValueRegularText:'支持使用正则表达式 (格式: "/pattern/gim")',settingsAddNoteShowNoteGroupNameText:"允许网页上的备注显示其分组值 (仅非默认分组时；备注值为空时也可以当作标签来使用)",settingsAddNoteHideNoteText:"隐藏详细的备注内容，仅显示分组值 (开启上面的选项才生效)",settingsAddNoteShowNoteGroupColorText:"允许将分组颜色应用到网页上的备注",settingsAddNoteShowPopoverFrameText:"允许悬停在备注上时显示同分组下的其他备注 (仅非默认分组时)",settingsAddNoteOpenNoteNewTabText:"在新标签页中打开其他备注 (未启用时，可以按住 Ctrl 并点击在后台标签中打开；按住 Ctrl+Shift 并点击在新标签页中打开)",settingsAddNoteCanHideAddFrameText:"点击添加框外部时隐藏添加框",settingsAboutAddNoteText:"备注",settingsAboutInterfaceText:"外观",settingsInterfaceInsertSearchButtonText:"在网页的右下角显示浮动搜索按钮",settingsInterfaceConfigText:"外观模式: ",settingsInterfaceBrightText:"明亮",settingsInterfaceDarkText:"暗黑",settingsInterfaceLanguageText:"显示语言: ",settingsAboutOtherText:"其他设置",settingsAboutStoredDataText:"存储数据",settingsFrameInterfaceAutoSyncText:"同步来自其他标签页的数据变动",settingsStoredDataLastTimeText:"上次修改时间: ",settingsStoredDataExportTitle:"备份所有存储数据到文件中",settingsStoredDataImportIitle:"从文件中恢复所有存储数据",settingsAboutScriptText:"关于脚本",settingsScriptAuthorText:"脚本作者: ",settingsScriptVersionText:"脚本版本: ",settingsScriptCoreText:"核心版本: ",settingsScriptLibraryText:"依赖库: ",settingsScriptIconText:"图标: ",settingsScriptHandlerText:"脚本管理器: ",settingsIconText:"图标: ",gmSettingsText:"打开设置面板",gmManagementText:"打开备注管理面板",gmGroupText:"打开分组管理面板",gmExportText:"备份数据",gmImportText:"恢复数据",defaultGroupText:"默认分组",groupNewValueText:"新的分组",groupCreateValueText:"新建分组",groupCreateValueTitle:"创建新的分组",groupValueText:"分组名",groupPrimaryColorText:"主要颜色",groupSecondaryColorText:"次要颜色",groupWeightText:"权重",selectGroupHeaderText:"选择分组",optionsImportNoFileText:"没有选择文件！",optionsImportNotATextFile:"这不是一个文本文件！",optionsImportValidText:"这是一个无效的文件！",optionsImportCannotFindFile:"无法找到文件！",optionsImportEmptyText:"文件内容为空！",optionsImportErrorObjectText:"解析对象时出错！",cancelText:"取消"},ol={addPlaceholder:"請輸入新的備註，按下Enter鍵可儲存",groupPlaceholder:"請輸入新的分組值，按下Enter鍵可儲存",saveTagText:"儲存",saveTagTitle:"儲存內容",clearTagText:"清除",clearTagTitle:"清除備註",cancelTagText:"取消",cancelTagTitle:"退出",searchTagTitle:"搜尋備註",searchTagPlaceholder:"搜尋備註，按下Enter鍵開啟結果項",searchCloseTitle:"關閉搜尋框",userIdText:"使用者 ID",userNameText:"使用者名稱",userTagTableText:"備註值",groupText:"分組",groupTitle:"切換分组",searchContentText:"搜尋: ",searchContentPlaceholder:"請輸入搜尋內容",rangeText:"範圍: ",rangeAllText:"全部",selectAllTitle:"全選",deleteSelectedText:"刪除選中項",deleteSelectedTitle:"將選中的項刪除",moveSelectedText:"移動選中項",moveSelectedTitle:"將選中的項移動至指定分組中",manageGroupsText:"分組管理",manageGroupsTitle:"開啟分組管理面板",modifyText:"(內容已被修改)",waitText:"(等待資料載入中)",closeCotentText:"關閉",closeContentTitle:"關閉面板",saveContentText:"儲存",saveContentTitle:"儲存對內容的修改",saveCompletedNotifactionText:"已儲存資料！",saveErrorNotifactionText:"儲存資料失敗！！！",backUpNotifactionText:"資料備份完成",restoreNotifactionText:"資料恢復完成",syncConfigNotifactionText:"已成功同步來自其它標籤頁的配置",syncGroupNotifactionText:"已成功同步來自其它標籤頁的分組值",syncNoteNotifactionText:"已成功同步來自其它標籤頁的備註資訊",editText:"編輯",deleteText:"刪除",editTitle:"編輯內容",deleteTitle:"刪除內容",settingsHeadlineText:"設定",settingsCloseTitle:"關閉設定面板",settingsAboutSearchBoxText:"搜尋框",settingsSearchBoxShowIndexText:"在頂部顯示索引值",settingsSearchBoxCanHideSearchFrameText:"點選搜尋框外部時隱藏搜尋框",settingsSearchBoxShowGroupNameText:"結果項顯示其分組值 (僅非預設分組時，不會被用於搜尋)",settingsSearchBoxOpenNewTabText:"在新標籤頁中開啟結果項 (未啟用時，可以按下 Ctrl+Enter 在後臺標籤中開啟結果；按下 Ctrl+Shift+Enter 在新標籤頁中開啟結果)",settingsSearchBoxEnableShortcutKeysText:"允許使用快捷鍵開啟搜尋框 (Ctrl+Shift+F)",settingsAboutSearchValueText:"搜尋內容",settingsSearchValueCaseSensitiveText:"區分字母大小寫",settingsSearchValueSplitText:'拆分式搜尋方法 ("ab cd" ==> "ab" && "cd")',settingsSearchValueRegularText:'支援使用正則表示式 (格式: "/pattern/gim")',settingsAddNoteShowNoteGroupNameText:"允許網頁上的備註顯示其分組值 (僅非預設分組時；備註值為空時也可以當作標籤來使用)",settingsAddNoteHideNoteText:"隱藏詳細的備註內容，僅顯示分組值 (開啟上面的選項才生效)",settingsAddNoteShowNoteGroupColorText:"允許將分組顏色應用到網頁上的備註",settingsAddNoteShowPopoverFrameText:"允許懸停在備註上時顯示同分組下的其他備註 (僅非預設分組時)",settingsAddNoteOpenNoteNewTabText:"在新標籤頁中開啟其他備註 (未啟用時，可以按住 Ctrl 並點選在後臺標籤中開啟；按住 Ctrl+Shift 並點選在新標籤頁中開啟)",settingsAddNoteCanHideAddFrameText:"點選新增框外部時隱藏新增框",settingsAboutAddNoteText:"備註",settingsAboutInterfaceText:"外觀",settingsInterfaceInsertSearchButtonText:"在網頁的右下角顯示浮動搜尋按鈕",settingsInterfaceConfigText:"外觀模式: ",settingsInterfaceBrightText:"明亮",settingsInterfaceDarkText:"暗黑",settingsInterfaceLanguageText:"顯示語言: ",settingsAboutOtherText:"其他設定",settingsAboutStoredDataText:"儲存資料",settingsFrameInterfaceAutoSyncText:"同步來自其他標籤頁的資料變動",settingsStoredDataLastTimeText:"上次修改時間: ",settingsStoredDataExportTitle:"備份所有儲存資料到檔案中",settingsStoredDataImportIitle:"從檔案中恢復所有儲存資料",settingsAboutScriptText:"關於指令碼",settingsScriptAuthorText:"指令碼作者: ",settingsScriptVersionText:"指令碼版本: ",settingsScriptCoreText:"核心版本: ",settingsScriptLibraryText:"依賴庫: ",settingsScriptIconText:"圖示: ",settingsScriptHandlerText:"指令碼管理器: ",settingsIconText:"圖示: ",gmSettingsText:"開啟設定面板",gmManagementText:"開啟備註管理面板",gmGroupText:"開啟分組管理面板",gmExportText:"備份資料",gmImportText:"恢復資料",defaultGroupText:"預設分組",groupNewValueText:"新的分組",groupCreateValueText:"新建分組",groupCreateValueTitle:"建立新的分組",groupValueText:"分組名",groupPrimaryColorText:"主要顏色",groupSecondaryColorText:"次要顏色",groupWeightText:"權重",selectGroupHeaderText:"選擇分組",optionsImportNoFileText:"沒有選擇檔案！",optionsImportNotATextFile:"這不是一個文字檔案！",optionsImportValidText:"這是一個無效的檔案！",optionsImportCannotFindFile:"無法找到檔案！",optionsImportEmptyText:"檔案內容為空！",optionsImportErrorObjectText:"解析物件時出錯！",cancelText:"取消"};class rl{constructor(){St(this,"lang");St(this,"type");this.lang={en:tl,zhHans:nl,zhHant:ol},this.type="en"}get(){return this.lang[this.type]}query(t){return this.lang[this.type][t]||""}getLangType(){return this.type}setLangType(t){switch(t==null?void 0:t.toLowerCase().replaceAll("_","").replaceAll("-","")){case"zh":case"zhcn":case"zhhans":this.type="zhHans";break;case"zhhk":case"zhtw":case"zhhant":this.type="zhHant";break;default:this.type="en"}}getLangOptions(){return{en:"English (en)",zhHans:"简体中文 (zh-Hans)",zhHant:"繁體中文 (zh-Hant)"}}}const fe={error(e){const t=`The required ${e} method is incomplete!!!`;console.error(t)},warn(e){console.warn(`The required ${e} method is incomplete!!!`)},tips(e){console.info("Tips: "+e)},info(){return typeof GM_info=="object"?GM_info:(this.warn("GM_info"),{scriptHandler:"Unknown",script:{version:"0.0.0"}})},getValue(e,t){return typeof GM_getValue=="function"?GM_getValue(e,t):(this.error("GM_getValue"),t)},setValue(e,t){typeof GM_setValue=="function"?GM_setValue(e,t):this.error("GM_setValue")},deleteValue(e){typeof GM_deleteValue=="function"?GM_deleteValue(e):this.error("GM_deleteValue")},listValues(){return typeof GM_listValues=="function"?GM_listValues():(this.error("GM_listValues"),[])},openInTab(e,t){typeof GM_openInTab=="function"?GM_openInTab(e,t):this.error("GM_openInTab")},registerMenuCommand(e,t){if(typeof GM_registerMenuCommand=="function"){const{scriptHandler:n,version:o="0"}=this.info();return n==="Violentmonkey"&&Kr("2.12.5",o,".",!0)?(this.tips("Maybe you should update Violentmonkey to 2.12.5 or higher."),null):GM_registerMenuCommand(e,t)}return this.warn("GM_registerMenuCommand"),null},unregisterMenuCommand(e){if(typeof GM_unregisterMenuCommand=="function"){const{scriptHandler:t,version:n="0"}=this.info();if(t==="Violentmonkey"&&Kr("2.12.5",n,".",!0))return void this.tips("Maybe you should update Violentmonkey to 2.12.5 or higher.");GM_unregisterMenuCommand(e)}else this.warn("GM_unregisterMenuCommand")},addValueChangeListener(e,t){return typeof GM_addValueChangeListener=="function"?GM_addValueChangeListener(e,t):(this.warn("GM_addValueChangeListener"),null)},removeValueChangeListener(e){typeof GM_removeValueChangeListener=="function"?GM_removeValueChangeListener(e):this.warn("GM_removeValueChangeListener")},setClipboard(e){typeof GM_setClipboard=="function"?GM_setClipboard(e):this.error("setClipboard")},addStyle(e){if(typeof GM_addStyle=="function")return GM_addStyle(e);{const t=document.createElement("style");return t.innerHTML=e,document.body.appendChild(t),t}}};var Ft=(e=>(e[e.Self=0]="Self",e[e.Blank=1]="Blank",e[e.BgBlank=2]="BgBlank",e))(Ft||{});function Kr(e,t,n=".",o=!1){const r=e.split(n),a=t.split(n);let i=!1;const s=r.length,l=a.length;for(let c=(s<l?s:l)-1;c>=0;c--){const u=Number(r[c]),p=Number(a[c]);i=u>p||!(!o||u!==p)}return i}function al(e,t){t===1?fe.openInTab(e,{active:!0,insert:!0,setParent:!0}):t===2?fe.openInTab(e,{active:!1,insert:!0,setParent:!0}):window.location.href=e}function Jr(e){return e.getBoundingClientRect().right+document.documentElement.scrollLeft}function $r(e){return e.getBoundingClientRect().bottom+document.documentElement.scrollTop}function di(e,t={}){const{brackets:n,double:o,prefix:r}=t;if(e&&(r&&(e=r+e),o&&(e=o+e+o),n))switch(n){case"angle":e=`<${e}>`;break;case"curly":e=`{${e}}`;break;case"square":e=`[${e}]`;break;case"parentheses":e=`(${e})`}return e}const ze={timer:{},debounce(e,t,n,o){return window.clearTimeout(this.timer[e]),o?(this.timer[e]===void 0&&t(),this.timer[e]=window.setTimeout(()=>{t(),this.timer[e]=void 0},n)):this.timer[e]=window.setTimeout(()=>{t(),this.timer[e]=void 0},n),{cancel:()=>{window.clearTimeout(this.timer[e]),this.timer[e]=void 0}}}},Be=nt("note",{state:()=>{const e=new rl;return{id:"",items:{},config:{searchBox:{showIndex:!1,canHideSearchFrame:!0,showGroupName:!1,openNewTab:!1,enableShortcutKeys:!1},searchValue:{caseSensitive:!0,split:!1,regular:!1},addNote:{showNoteGroupName:!1,hideNoteText:!1,showNoteGroupColor:!1,showPopoverFrame:!1,openNoteNewTab:!1,canHideAddFrame:!0},interface:{insertSearchButton:!0,mode:"dark",language:""},storeData:{autoSync:!0},other:{}},group:{default:{value:"default",primaryColor:"",secondaryColor:"",weight:0}},storeModificationTime:0,i18n:e,lang:e.get(),menuCommand:{settings:null,management:null,group:null},listener:{items:null,config:null,group:null},changeEvent:null,itemClick:null,defaultColor:{primaryColor:"#3c81df",secondaryColor:"#ffffff"},scriptInfo:{author:{name:"",homepage:""},updated:"",url:"",library:[{name:"Vue",version:"3.2.47",url:"https://vuejs.org/"},{name:"Pinia",version:"2.0.32",url:"https://pinia.vuejs.org/"}],icons:[{name:"Ikonate",url:"https://ikonate.com/"}]},otherConfigInfo:{},searchBtnClassName:"",searchBtnBoxClassName:""}},getters:{configKeyName:e=>"$"+e.id+"Config",groupKeyName:e=>"$"+e.id+"Group",timeKeyName:e=>"$"+e.id+"Time",itemsKeyName:e=>"$"+e.id+"Items"},actions:{init(){this.readValuesFromStorage(),this.findMaxWeightGroupKey(),this.i18n.setLangType(this.config.interface.language||window.navigator.language||document.documentElement.lang),this.config.interface.language=this.i18n.getLangType(),this.lang=this.i18n.get(),this.registerMenuCommand(),this.valueChangeListener()},readValuesFromStorage(){const e=fe.listValues();let t=!1;for(const n of e){const o=fe.getValue(n,null);if(o)switch(n){case this.configKeyName:for(const r in this.config)o[r]&&Object.assign(this.config[r],o[r]);break;case this.groupKeyName:Object.assign(this.group,o);break;case this.timeKeyName:this.storeModificationTime=o;break;case this.itemsKeyName:Object.assign(this.items,o);break;default:o.tag&&(this.items[n]||(o.name||(o.name=n),this.items[n]=o,t=!0)),fe.deleteValue(n)}}t&&fe.setValue(this.itemsKeyName,this.items)},findMaxWeightGroupKey(){const e=Hn();e.groupKey="default";for(const t in this.group)this.group[t].weight>this.group[e.groupKey].weight?e.groupKey=t:this.group[t].weight===this.group[e.groupKey].weight&&[t,e.groupKey].includes("default")&&(e.groupKey="default")},initOtherConfigInfo(e){this.otherConfigInfo=e;for(const t in this.otherConfigInfo)this.config.other[t]===void 0&&(this.config.other[t]=this.otherConfigInfo[t].default)},writeModificationTime(){this.storeModificationTime=Date.now(),fe.setValue(this.timeKeyName,this.storeModificationTime)},executeChangeEvent(e){typeof this.changeEvent=="function"&&this.changeEvent(e)},judgeUsers(e){return e?Object.keys(this.items).includes(e):!1},writeUser(e,t,n,o){return this.storageEvent(()=>{let r=!1;if(this.judgeUsers(e)){const a=this.items[e];n||o&&o!=="default"?(a.tag!==n&&(this.items[e].tag=n,r=!0),a.name!==t&&(this.items[e].name=t,r=!0),a.name!==o&&(this.items[e].group=o,r=!0)):(delete this.items[e],r=!0)}else(n||o&&o!=="default")&&(this.items[e]={tag:n,name:t,group:o},r=!0);return!!r&&(fe.setValue(this.itemsKeyName,this.items),!0)},e)},updateUserName(e,t){t&&this.judgeUsers(e)&&(this.items[e].name=t)},setUsers(e,t=!0,n=!0){return this.storageEvent(()=>(this.items=e,n&&fe.setValue(this.itemsKeyName,this.items),t))},writeNewGroupValue(e,t){return this.storageEvent(()=>(this.group[e]=t,fe.setValue(this.groupKeyName,this.group),!0))},setGroups(e,t=!0,n=!0){return this.storageEvent(()=>(this.group=e,n&&fe.setValue(this.groupKeyName,this.group),t))},saveConfig(e,t=!0,n=!0){return this.storageEvent(()=>{if(e){const{addNote:o,searchBox:r,searchValue:a,interface:i,other:s,storeData:l}=e;o&&Object.assign(this.config.addNote,o),r&&Object.assign(this.config.searchBox,r),a&&Object.assign(this.config.searchValue,a),i&&Object.assign(this.config.interface,i),s&&Object.assign(this.config.other,s),l&&Object.assign(this.config.storeData,l)}return n&&fe.setValue(this.configKeyName,this.config),t})},storageEvent(e,t){try{return e()&&(this.writeModificationTime(),this.executeChangeEvent(t),this.addNotifaction(this.lang.saveCompletedNotifactionText)),!0}catch(n){return console.error("Error in storage operation.",n),this.addNotifaction(this.lang.saveErrorNotifactionText),!1}},setInterfaceMode(e){this.config.interface.mode=e==="dark"?"dark":"bright",this.saveConfig()},setInterfaceLanguage(e){this.i18n.setLangType(e),this.lang=this.i18n.get(),this.config.interface.language=this.i18n.getLangType(),this.saveConfig(),this.registerMenuCommand()},getUrl(e){return this.itemClick?this.itemClick(e):`${location.origin}/${e}`},getUserGroupKey(e){if(this.judgeUsers(e)){const t=this.items[e].group;if(t&&Object.keys(this.group).includes(t))return t}return"default"},getUserGroupName(e){let t="";const n=this.getUserGroupKey(e);return n!=="default"&&this.group[n]&&(t=this.group[n].value),t},getUserTag(e,t={}){const{maskGroup:n}=t;let o="";if(this.judgeUsers(e)){if(o=this.items[e].tag,this.config.addNote.showNoteGroupName&&!n){const r=this.getUserGroupName(e);this.config.addNote.hideNoteText?o=r:r&&(o?o+=` [${r}]`:o=r)}o=di(o)}return o},getUserName(e){return this.judgeUsers(e)&&this.items[e].name||""},getPrimaryColor(e){const t=this.getUserGroupKey(e);return this.group[t].primaryColor},getSecondaryColor(e){const t=this.getUserGroupKey(e);return this.group[t].secondaryColor},openLink(e,t,n,o){const r=this.getUrl(e);let a=Ft.Self;o==="popover"?a=this.config.addNote.openNoteNewTab?Ft.Blank:Ft.Self:o==="search"&&(a=this.config.searchBox.openNewTab?Ft.Blank:Ft.Self),function(i,s,l,c){i&&al(i,s&&l?1:s?2:c)}(r,t,n,a)},determineSearchString(e,t,n=!1){if(e){let o=null,r=[];if(this.config.searchValue.regular&&/^\/.+\/[gim]{0,3}$/.test(e))try{o=new RegExp(e.replace(/^\/|\/[gim]{0,3}$/g,""),e.replace(/^\/.+\/[^gim]*/i,""))}catch(i){console.log(i),o=null}o===null&&this.config.searchValue.split&&(r=e.split(/\s+/));let a=!0;if(o)a=o.test(t);else if(r.length>0)for(const i of r)this.config.searchValue.caseSensitive?t.includes(i)||(a=!1):t.toLocaleLowerCase().includes(i.toLocaleLowerCase())||(a=!1);else a=this.config.searchValue.caseSensitive?t.includes(e):t.toLocaleLowerCase().includes(e.toLocaleLowerCase());return a}return n},addNotifaction(e,t,n=4e3){const o=gi(),r=new Date,a=t||`id-${r.getTime()}_${o.total}`;o.total++,o.notifactions.splice(0,0,{id:a,content:e}),console.info(`[${r.getHours()}:${r.getMinutes()}:${r.getSeconds()}] >>> ${e}`),window.setTimeout(()=>{o.removeNotifaction(a)},n)},export(){const e=fe.listValues(),t={};for(const n of e)t[n]=fe.getValue(n,{});(function(n,o,r){const a=new Blob([n]),i=document.createElementNS("http://www.w3.org/1999/xhtml","a");i.href=URL.createObjectURL(a),i.download=o;const s=new MouseEvent("click",{bubbles:!0,cancelable:!1,screenX:0,screenY:0,clientX:0,clientY:0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,button:0,relatedTarget:null});i.dispatchEvent(s),typeof r=="function"&&r()})(JSON.stringify(t),`${this.id}_data_${Date.now()}.txt`,()=>{this.addNotifaction(this.lang.backUpNotifactionText)})},import(){(function(e){const t=document.createElementNS("http://www.w3.org/1999/xhtml","input");t.type="file",t.accept=".txt, .text, .json, .conf, .config",t.style.display="none",t.addEventListener("change",()=>{var o;if(!t.value)return console.warn("No file selected."),void e({state:!1,tip:"optionsImportNoFileText"});const n=(o=t.files)==null?void 0:o[0];if(!n)return console.warn("Cannot find file."),void e({state:!1,tip:"optionsImportCannotFindFile"});{const{type:r}=n;if(!["application/json","application/xml","text/plain"].includes(r))return console.warn("Invalid file."),void e({state:!1,tip:"optionsImportValidText"});{const a=new FileReader;a.onload=i=>{const{target:s}=i;if(s){const l=s.result;typeof l=="string"?e({state:!0,tip:"opened"},l):(console.warn("Not a text file."),e({state:!1,tip:"optionsImportNotATextFile"}))}},a.readAsText(n)}}}),t.click()})((e,t)=>{if(e.state)if(t)try{const n=JSON.parse(t);typeof n=="object"&&n?this.storageEvent(()=>{for(const o in n)o===this.configKeyName?this.saveConfig(n[o],!1):o===this.groupKeyName?this.setGroups(n[o],!1):o===this.itemsKeyName&&this.setUsers(n[o],!1);return!0}):(console.warn("Content is not an object."),this.addNotifaction(this.lang.optionsImportErrorObjectText))}catch(n){console.error(n),this.addNotifaction(this.lang.optionsImportErrorObjectText)}else this.addNotifaction(this.lang.optionsImportEmptyText);else this.addNotifaction(this.lang[e.tip])})},showFrame(e,t=!1,n=!0){const o=pi(),r=rr(),a=ar(),i=Hn(),s=io(),l=ir(),c=or();if(o.isInsert||r.isInsert||a.isInsert||i.isShow||s.isShow||l.isShow||!t&&c.isShow)return!0;switch(e){case"settings":o.isInsert=n;break;case"management":r.isInsert=n;break;case"group":a.isInsert=n;break;case"search":c.isShow=n;break;default:return!0}return!1},showPopover(e,t,n){this.config.addNote.showPopoverFrame&&Go().show(e,t,n)},showAdd(e,t){const n=Hn();let o="",r=n.groupKey;this.judgeUsers(e)?(o=this.items[e].tag||"",r=this.items[e].group||"default"):t&&(o=t),n.show(e,o,r,t)},hidePopover(){this.config.addNote.showPopoverFrame&&Go().hide()},registerMenuCommand(){for(const e in this.menuCommand){const t=this.menuCommand[e];t!==null&&(fe.unregisterMenuCommand(t),this.menuCommand[e]=null)}this.menuCommand.settings=fe.registerMenuCommand(this.lang.gmSettingsText,()=>{this.showFrame("settings")}),this.menuCommand.management=fe.registerMenuCommand(this.lang.gmManagementText,()=>{this.showFrame("management")}),this.menuCommand.group=fe.registerMenuCommand(this.lang.gmGroupText,()=>{this.showFrame("group")})},valueChangeListener(e){const t=e===void 0?this.config.storeData.autoSync:e;for(const n in this.listener){const o=this.listener[n];o!==null&&(fe.removeValueChangeListener(o),this.listener[n]=null)}t&&(this.listener.items=fe.addValueChangeListener(this.itemsKeyName,(n,o,r,a)=>{a&&ze.debounce("itemsListener",()=>{r&&(this.setUsers(r,!0,!1),this.addNotifaction(this.lang.syncNoteNotifactionText))},1e3)}),this.listener.group=fe.addValueChangeListener(this.groupKeyName,(n,o,r,a)=>{a&&ze.debounce("groupListener",()=>{r&&(this.setGroups(r,!0,!1),this.addNotifaction(this.lang.syncGroupNotifactionText))},1e3)}),this.listener.config=fe.addValueChangeListener(this.configKeyName,(n,o,r,a)=>{a&&ze.debounce("configListener",()=>{r&&this.saveConfig(r,!0,!1)},1e3)}))}}}),or=nt("searchFrame",{state:()=>({isShow:!1})}),Hn=nt("addFrame",{state:()=>({isShow:!1,userId:"",userName:"",initialValue:"",groupKey:"default"}),actions:{selecteGroup(e){const t=io();t.selected=e,t.isShow=!0},addGroup(e){const t=ir();t.created=e,t.isShow=!0},show(e,t,n,o){this.userId=e,this.userName=o||"",this.initialValue=t,this.groupKey=n||"default",this.isShow=!0}}}),rr=nt("managementFrame",{state:()=>({isInsert:!1,isEcho:!1}),actions:{selecteGroup(e){const t=io();t.selected=e,t.isShow=!0}}}),ar=nt("groupFrame",{state:()=>({isInsert:!1})}),io=nt("selectGroupFrame",{state:()=>({isShow:!1,selected:null})}),ir=nt("newGroupFrame",{state:()=>({isShow:!1,created:null})}),pi=nt("settingsFrame",{state:()=>({isInsert:!1})}),gi=nt("messageFrame",{state:()=>({notifactions:[],total:0}),actions:{removeNotifaction(e){for(let t=0;t<this.notifactions.length;t++)if(this.notifactions[t].id===e)return this.notifactions.splice(t,1),!0;return!1}}}),Go=nt("popoverFrame",{state:()=>({isShow:!1,currentUserId:"",x:0,y:0,isPopHover:!1,isTagHover:!1,showDebounced:null}),actions:{show(e,t,n){this.showDebounced=ze.debounce("popoverShow",()=>{this.currentUserId=e,this.x=t,this.y=n,this.isShow=!0,this.isTagHover=!0},1e3)},hide(){this.showDebounced&&(this.showDebounced.cancel(),this.showDebounced=null),this.isTagHover=!1,ze.debounce("popoverHide",()=>{this.isPopHover||this.isTagHover||(this.isShow=!1)},1e3)}}}),il=["title"],sl=xe({__name:"NoteObjFloatButton",props:{isInsert:{type:Boolean},title:null,buttonClass:null,boxClass:null},emits:["click"],setup:(e,{emit:t})=>(n,o)=>e.isInsert?(U(),K("div",{key:0,class:Ke(e.boxClass)},[m("span",{title:e.title,class:Ke(e.buttonClass),onClick:o[0]||(o[0]=r=>t("click",r))},null,10,il)],2)):ct("",!0)});function Qr(e,t){t.value&&t.value!==t.oldValue&&setTimeout(()=>{try{e.focus(),e.select()}catch(n){console.log(n)}},100)}const so={mounted:Qr,updated:Qr},ll=["onClick"],cl={class:"note-obj-add-frame-dialog"},ul={class:"note-obj-add-frame-user-info"},dl={class:"note-obj-add-frame-user-id"},pl={key:0,class:"note-obj-add-frame-user-name"},gl=["placeholder","onKeyup"],fl=["title","onClick"],ml=["title","onClick"],hl=["title","onClick"],bl=["title","onClick"],xl=["title","onClick"],vl=xe({__name:"NoteObjAddFrame",setup(e){const t=Be(),n=Hn(),o=he(""),{isShow:r}=Bt(n),a=we(()=>n.groupKey&&n.groupKey!=="default"&&t.group[n.groupKey]?t.group[n.groupKey].value:t.lang.defaultGroupText);function i(h){h.key==="Enter"?u():h.key==="Escape"&&x()}function s(){n.selecteGroup(h=>{h&&(n.groupKey=h)})}function l(){n.addGroup(h=>{h&&(n.groupKey=h)})}function c(h,T,B,k){t.writeUser(h,T,B,k)&&x()}function u(){c(n.userId,n.userName,o.value,n.groupKey)}function p(){c(n.userId,"","","")}function b(){t.config.addNote.canHideAddFrame&&x()}function x(){n.isShow=!1}return Ce(r,h=>{h&&(o.value=n.initialValue)}),(h,T)=>ie((U(),K("div",{class:"note-obj-add-frame-presentation",onClick:q(b,["self"])},[m("div",cl,[m("div",ul,[m("span",dl,H(g(t).lang.userIdText+": "+g(n).userId),1),g(n).userName?(U(),K("span",pl,H(g(t).lang.userNameText+": "+g(n).userName),1)):ct("",!0)]),ie(m("input",{"onUpdate:modelValue":T[0]||(T[0]=B=>o.value=B),type:"text",placeholder:g(t).lang.addPlaceholder,class:"note-obj-add-frame-input",onKeyup:zt(q(i,["prevent"]),["enter","esc"])},null,40,gl),[[yt,o.value,void 0,{trim:!0}],[g(so),g(r)]]),m("button",{type:"button",title:g(t).lang.groupTitle,class:"note-obj-add-frame-group-button",onClick:q(s,["stop"])},H(g(a)),9,fl),m("button",{type:"button",title:g(t).lang.groupCreateValueTitle,class:"note-obj-add-frame-group-button",onClick:q(l,["stop"])},H(g(t).lang.groupCreateValueText),9,ml),m("button",{type:"button",title:g(t).lang.saveTagTitle,onClick:q(u,["stop"])},H(g(t).lang.saveTagText),9,hl),m("button",{type:"button",title:g(t).lang.clearTagTitle,onClick:q(p,["stop"])},H(g(t).lang.clearTagText),9,bl),m("button",{type:"button",title:g(t).lang.cancelTagTitle,class:"note-obj-add-frame-button-bottom",onClick:q(x,["stop"])},H(g(t).lang.cancelTagText),9,xl)])],8,ll)),[[ve,g(r)]])}}),yl={previous:{},timer:{},throttle(e,t,n,o={}){const r=Date.now(),{leading:a,trailing:i}=o;this.previous[e]===void 0&&a===!1&&(this.previous[e]=r);const s=n-(r-(this.previous[e]===void 0?0:this.previous[e]));return s<=0||s>n?(window.clearTimeout(this.timer[e]),this.previous[e]=r,t()):this.timer[e]===void 0&&i!==!1&&(this.timer[e]=window.setTimeout(()=>{this.previous[e]=a===!1?void 0:Date.now(),this.timer[e]=void 0,t()},s)),{cancel:()=>{window.clearTimeout(this.timer[e]),this.previous[e]=void 0,this.timer[e]=void 0}}}},jl=["title","data-index"],Tl={class:"note-obj-search-frame-tags-item-text"},Il=xe({__name:"NoteObjSearchItem",props:{itemKey:null,index:null,isShow:{type:Boolean},highlight:{type:Boolean},name:null,tag:null,groupKey:null},emits:["mouseenter"],setup(e,{emit:t}){const n=e,o=Be(),r=we(()=>{let s=n.itemKey+(n.name&&n.name!==n.itemKey?`
${n.name}`:"")+(n.tag?`
${n.tag}`:"");if(o.config.searchBox.showGroupName&&n.groupKey&&n.groupKey!=="default"){const l=o.group[n.groupKey];l&&(s+=`
${l.value}`)}return s}),a=we(()=>{let s=n.tag||n.name||n.itemKey;if(o.config.searchBox.showGroupName&&n.groupKey&&n.groupKey!=="default"){const l=o.group[n.groupKey];l&&(s+=` [${l.value}]`)}return s});function i(){t("mouseenter",n.index)}return(s,l)=>ie((U(),K("li",{class:Ke({"note-obj-search-frame-tags-list-item-highlight":e.highlight}),title:g(r),"data-index":e.index,onMouseenter:i,onClick:l[0]||(l[0]=q(c=>{return u=c,p=e.itemKey,void o.openLink(p,u.ctrlKey||u.metaKey,u.shiftKey,"search");var u,p},["stop"]))},[m("span",Tl,H(g(a)),1)],42,jl)),[[ve,e.isShow]])}}),wl=["onClick"],Sl={class:"note-obj-search-frame-dialog"},kl=["placeholder","onKeydown","onKeyup"],Nl=["title","onClick"],Cl={key:0,class:"note-obj-search-frame-index-trapezoid"},Ml={class:"note-obj-search-frame-index-value"},_l=xe({__name:"NoteObjSearchFrame",setup(e){const t=Be(),n=or(),o=he(""),r=he({}),a=he(0),i=he(""),s=t.id+"_searchFrameTagsList",{isShow:l}=Bt(n),c=we(()=>{let k=0;for(const F in r.value)r.value[F].isShow&&k++;return k});function u(k){if(k!==0){for(const F in r.value)if(r.value[F].index===k)return F}return""}function p(k){yl.throttle("searchKeydown",()=>{c.value===0?a.value=0:k.key==="ArrowUp"?a.value>1?a.value--:a.value=c.value:k.key==="ArrowDown"?a.value<c.value?a.value++:a.value=1:k.key==="PageUp"?a.value>10?a.value-=10:a.value<=1?a.value=c.value:a.value=1:k.key==="PageDown"&&(a.value<c.value-9?a.value+=10:a.value===c.value?a.value=1:a.value=c.value),i.value=u(a.value)},100)}function b(k){k.key==="Enter"?i.value&&t.openLink(i.value,k.ctrlKey||k.metaKey,k.shiftKey,"search"):k.key==="Escape"&&B()}function x(){let k=1,F=!1,A="",C=0;for(const O in r.value)t.determineSearchString(o.value,r.value[O].tag||r.value[O].name||O)?(Object.assign(r.value[O],{isShow:!0,index:k,highlight:O===i.value}),O===i.value&&(C=k,F=!0),k===1&&(A=O),k++):Object.assign(r.value[O],{isShow:!1,index:-1,highlight:!1});F||(i.value=A,C=c.value>0?1:0,A&&(r.value[A].highlight=!0)),qn(()=>{a.value=C})}function h(k){a.value!==k&&(a.value=k,i.value=u(k))}function T(){t.config.searchBox.canHideSearchFrame&&B()}function B(){n.isShow=!1}return Ce(l,k=>{k&&function(){let F=1;const A=Object.assign({},t.items);for(const C in A)Object.assign(A[C],{isShow:!1,index:F++,highlight:!1});r.value=A}()}),Ce(o,()=>{ze.debounce("searchValue",()=>{x()},250)}),Ce(a,k=>{for(const F in r.value){const A=r.value[F];A.highlight=A.index===k}(function(F){const A=document.getElementById(s),C=document.querySelector(`#${s} [data-index="${F}"]`);A&&C&&(C.offsetTop-A.scrollTop>225?A.scrollTop=C.offsetTop-225:C.offsetTop-A.scrollTop<0&&(A.scrollTop=C.offsetTop))})(k)}),(k,F)=>ie((U(),K("div",{class:"note-obj-search-frame-presentation",onClick:q(T,["self"])},[m("div",Sl,[ie(m("input",{type:"text",placeholder:g(t).lang.searchTagPlaceholder,class:"note-obj-search-frame-input","onUpdate:modelValue":F[0]||(F[0]=A=>o.value=A),onKeydown:zt(q(p,["prevent"]),["arrow-up","arrow-down","page-down","page-up"]),onKeyup:zt(q(b,["stop","prevent"]),["enter","esc"]),onFocusin:x},null,40,kl),[[g(so),g(l)],[yt,o.value,void 0,{trim:!0}]]),m("span",{title:g(t).lang.searchCloseTitle,class:"note-obj-search-frame-close-btn",onClick:q(B,["stop"])},null,8,Nl),g(t).config.searchBox.showIndex?(U(),K("div",Cl,[m("span",Ml,H(a.value+"/"+g(c)),1)])):ct("",!0),m("ul",{id:s,class:"note-obj-search-frame-tags-list"},[(U(!0),K(de,null,De(r.value,({index:A,isShow:C,name:O,tag:Q,group:re,highlight:G},N)=>(U(),Pe(Il,{key:N,"is-show":C,"item-key":N.toString(),index:A,name:O,tag:Q,"group-key":re,highlight:G,onMouseenter:h},null,8,["is-show","item-key","index","name","tag","group-key","highlight"]))),128))])])],8,wl)),[[ve,g(l)]])}}),Dl=["data-key","readonly","value","onKeyup"],fi=xe({__name:"NoteObjManagementInput",props:{value:null,dataKey:null,editable:{type:Boolean},className:null},emits:["value-change"],setup(e,{emit:t}){const n=e;function o(r){n.editable&&(r.key==="Enter"?t("value-change",r.target.value.trim()):r.key==="Escape"&&t("value-change",n.value))}return(r,a)=>ie((U(),K("input",{"data-key":e.dataKey,type:"text",readonly:!e.editable,class:Ke(e.className+(e.editable?" note-obj-management-frame-item-input-edit":"")),value:e.value,onKeyup:zt(q(o,["stop","prevent"]),["enter","esc"])},null,42,Dl)),[[g(so),e.editable]])}}),El=["title"],Al=xe({__name:"NoteObjGroupItem",props:{dataKey:null,groupValue:null},emits:["click"],setup(e,{emit:t}){const n=e,o=Be(),r=we(()=>n.groupValue&&n.groupValue!=="default"&&o.group[n.groupValue]&&o.group[n.groupValue].value||o.lang.defaultGroupText),a=we(()=>n.groupValue&&o.group[n.groupValue]&&o.group[n.groupValue].secondaryColor||o.defaultColor.secondaryColor),i=we(()=>n.groupValue&&o.group[n.groupValue]&&o.group[n.groupValue].primaryColor||o.defaultColor.primaryColor);return(s,l)=>(U(),K("span",{class:"note-obj-management-frame-group-item",title:g(o).lang.groupTitle,style:nn({color:g(a),backgroundColor:g(i)}),onClick:l[0]||(l[0]=q(c=>t("click",e.dataKey),["stop"]))},H(g(r)),13,El))}}),Gl=["title"],Ze=xe({__name:"NoteObjTh",props:{text:null},setup:e=>(t,n)=>(U(),K("th",{title:e.text},H(e.text),9,Gl))}),Ol={key:0,class:"note-obj-management-frame-presentation"},Ll={class:"note-obj-management-frame-dialog"},Pl={class:"note-obj-management-frame-header"},zl={for:"noteObjManagementFrameSearchInputBox"},Vl=["placeholder","onKeydown"],Bl={for:"noteObjManagementFrameRangeSelect"},Hl={value:"all"},Ul={value:"id"},Rl={value:"name"},Fl={value:"tag"},Zl={for:"noteObjManagementFrameGroupSelect"},Wl={value:""},Yl=["value"],Kl={class:"note-obj-management-frame-show-number"},Jl={class:"note-obj-management-frame-content"},$l={class:"note-obj-management-frame-thead"},Ql=["title"],Xl={class:"note-obj-management-frame-tbody"},ql=["checked","onChange"],ec=["title","href"],tc=["title"],nc=["title","onClick"],oc=["title","onClick"],rc={class:"note-obj-management-frame-tool"},ac=["disabled","title","onClick"],ic=["disabled","title","onClick"],sc=["title","onClick"],lc={class:"note-obj-management-frame-footer"},cc=["title","disabled","onClick"],uc=["title","onClick"],dc=xe({__name:"NoteObjManagementFrame",setup(e){const t=Be(),n=rr(),o=ar(),{isInsert:r}=Bt(n),a=he(""),i=he("all"),s=he(""),l=he(!1),c=he(!1),u=he({}),p=we(()=>{let N=0;for(const _ in u.value)u.value[_].isExists&&N++;return N}),b=we(()=>{let N=0;for(const _ in u.value){const z=u.value[_];z.isExists&&z.isShow&&z.isSelected&&N++}return N}),x=we({get(){for(const N in u.value){const _=u.value[N];if(_.isExists&&_.isShow&&!_.isSelected)return!1}return!0},set(N){for(const _ in u.value){const z=u.value[_];z.isExists&&z.isShow&&(N&&!z.isSelected?z.isSelected=!0:!N&&z.isSelected&&(z.isSelected=!1))}}});function h(){a.value="",i.value="all",s.value="",l.value=!1;const N=Object.assign({},t.items);for(const _ in N)Object.assign(N[_],{isExists:!0,isShow:!0,isSelected:!1,editable:!1});u.value=N}function T(){const N=Object.keys(t.group);for(const _ in u.value){const z=u.value[_];if(z.isExists){let D=!1;s.value&&s.value!==z.group&&(s.value!=="default"||N.includes(z.group))||(i.value==="all"?D=t.determineSearchString(a.value,_,!0)||t.determineSearchString(a.value,z.name,!0)||t.determineSearchString(a.value,z.tag,!0):i.value==="id"?D=t.determineSearchString(a.value,_,!0):i.value==="name"?D=t.determineSearchString(a.value,z.name,!0):i.value==="tag"&&(D=t.determineSearchString(a.value,z.tag,!0))),z.isShow=D}}}function B(){console.info("Just to intercept the carriage return event.")}function k(N){n.selecteGroup(_=>{u.value[N].group=_,re()})}function F(N){u.value[N].editable?function(_){const z=document.querySelector(`.note-obj-management-frame-item-input-tag[data-key="${_}"]`),D=(z==null?void 0:z.value.trim())||"";u.value[_].tag=D,re(),u.value[_].editable=!1}(N):u.value[N].editable=!0}function A(){for(const N in u.value){const _=u.value[N];_.isExists&&_.isShow&&_.isSelected&&(_.isExists=!1,re())}}function C(){const N=[];for(const _ in u.value){const z=u.value[_];z.isExists&&z.isShow&&z.isSelected&&N.push(_)}N.length>0&&(n.selecteGroup(_=>{N.forEach(z=>{u.value[z].group=_})}),re())}function O(){n.isEcho=!0,n.isInsert=!1,o.isInsert=!0}function Q(){if(l.value){const N={};for(const _ in u.value){const{isExists:z,tag:D,name:oe,group:X}=u.value[_];z&&(N[_]={tag:D,name:oe,group:X})}t.setUsers(N)&&(l.value=!1)}}function re(){l.value=!0}function G(){l.value=!1,a.value="",i.value="all",s.value="",r.value=!1}return Ce(r,N=>{N&&(Object.keys(t.items).length>50?(c.value=!0,u.value={},ze.debounce("initNotesManagement",()=>{h(),c.value=!1},50)):h())}),Ce(a,()=>{ze.debounce("notesManagementSearch",T,250)}),Ce(i,()=>{ze.debounce("notesManagementRange",T,50)}),Ce(s,()=>{ze.debounce("notesManagementGroup",T,50)}),(N,_)=>g(r)?(U(),K("div",Ol,[m("div",Ll,[m("div",Pl,[m("form",null,[m("label",zl,H(g(t).lang.searchContentText),1),ie(m("input",{id:"noteObjManagementFrameSearchInputBox",type:"text","onUpdate:modelValue":_[0]||(_[0]=z=>a.value=z),placeholder:g(t).lang.searchContentPlaceholder,class:"note-obj-management-frame-search-input",onKeydown:zt(q(B,["stop","prevent"]),["enter"])},null,40,Vl),[[yt,a.value,void 0,{trim:!0}]]),m("label",Bl,H(g(t).lang.rangeText),1),ie(m("select",{"onUpdate:modelValue":_[1]||(_[1]=z=>i.value=z),id:"noteObjManagementFrameRangeSelect",name:"managementFrameRangeSelect"},[m("option",Hl,H(g(t).lang.rangeAllText),1),m("option",Ul,H(g(t).lang.userIdText),1),m("option",Rl,H(g(t).lang.userNameText),1),m("option",Fl,H(g(t).lang.userTagTableText),1)],512),[[Fr,i.value]]),m("label",Zl,H(g(t).lang.groupText+": "),1),ie(m("select",{"onUpdate:modelValue":_[2]||(_[2]=z=>s.value=z),id:"noteObjManagementFrameGroupSelect",name:"managementFrameGroupSelect"},[m("option",Wl,H(g(t).lang.rangeAllText),1),(U(!0),K(de,null,De(g(t).group,({value:z},D)=>(U(),K("option",{key:D,value:D},H(D==="default"?g(t).lang.defaultGroupText:z),9,Yl))),128))],512),[[Fr,s.value]]),m("span",Kl,H(g(b)+"/"+g(p)),1)])]),m("div",Jl,[m("div",$l,[m("table",null,[m("thead",null,[m("tr",null,[m("th",null,[ie(m("input",{"onUpdate:modelValue":_[3]||(_[3]=z=>be(x)?x.value=z:null),type:"checkbox",title:g(t).lang.selectAllTitle},null,8,Ql),[[ai,g(x)]])]),Y(Ze,{text:g(t).lang.userIdText},null,8,["text"]),Y(Ze,{text:g(t).lang.userNameText},null,8,["text"]),Y(Ze,{text:g(t).lang.userTagTableText},null,8,["text"]),Y(Ze,{text:g(t).lang.groupText},null,8,["text"]),Y(Ze,{text:g(t).lang.editText},null,8,["text"]),Y(Ze,{text:g(t).lang.deleteText},null,8,["text"])])])])]),m("div",Xl,[m("table",null,[m("tbody",null,[(U(!0),K(de,null,De(u.value,({isShow:z,isExists:D,isSelected:oe,name:X,tag:ce,editable:$,group:ee},le)=>ie((U(),K("tr",{key:le},[m("td",null,[m("input",{type:"checkbox",checked:oe,onChange:Ue=>u.value[le].isSelected=!oe},null,40,ql)]),m("td",null,[m("a",{title:le.toString(),target:"_blank",href:g(t).getUrl(le.toString()),class:"note-obj-management-frame-item-a"},H(le),9,ec)]),m("td",{title:X},H(X),9,tc),m("td",null,[Y(fi,{value:ce,"data-key":le.toString(),editable:$,"class-name":"note-obj-management-frame-item-input-tag",onValueChange:Ue=>function(ye,Ie){u.value[ye].tag=Ie,re(),u.value[ye].editable=!1}(le.toString(),Ue)},null,8,["value","data-key","editable","onValueChange"])]),m("td",null,[Y(Al,{"group-value":ee,"data-key":le.toString(),onClick:k},null,8,["group-value","data-key"])]),m("td",null,[m("span",{title:g(t).lang.editTitle,class:Ke(["note-obj-management-frame-item-btn note-obj-management-frame-item-edit",{"note-obj-management-frame-item-ok":$}]),onClick:q(Ue=>F(le.toString()),["stop"])},null,10,nc)]),m("td",null,[m("span",{title:g(t).lang.deleteTitle,class:"note-obj-management-frame-item-btn note-obj-management-frame-item-delete",onClick:q(Ue=>function(ye){u.value[ye].isExists=!1,re()}(le.toString()),["stop"])},null,8,oc)])],512)),[[ve,D&&z]])),128))])])])]),m("div",rc,[m("button",{type:"button",disabled:g(b)===0,title:g(t).lang.deleteSelectedTitle,class:"note-obj-management-frame-delete-selected",onClick:q(A,["stop"])},H(g(t).lang.deleteSelectedText),9,ac),m("button",{type:"button",disabled:g(b)===0,title:g(t).lang.moveSelectedTitle,class:"note-obj-management-frame-move-selected",onClick:q(C,["stop"])},H(g(t).lang.moveSelectedText),9,ic),m("button",{type:"button",title:g(t).lang.manageGroupsTitle,class:"note-obj-management-frame-manage-groups",onClick:q(O,["stop"])},H(g(t).lang.manageGroupsText),9,sc)]),m("div",lc,[ie(m("span",{class:"note-obj-management-frame-show-modify-text"},H(g(t).lang.modifyText),513),[[ve,l.value]]),ie(m("span",{class:"note-obj-management-frame-show-wait-text"},H(g(t).lang.waitText),513),[[ve,c.value]]),m("button",{title:g(t).lang.saveContentTitle,class:"note-obj-management-frame-save-content",disabled:!l.value,onClick:q(Q,["stop"])},H(g(t).lang.saveContentText),9,cc),m("button",{title:g(t).lang.closeContentTitle,class:"note-obj-management-frame-cancel-content",onClick:q(G,["stop"])},H(g(t).lang.closeCotentText),9,uc)])])])):ct("",!0)}}),pc={key:0,class:"note-obj-group-frame-presentation"},gc={class:"note-obj-group-frame-dialog"},fc={class:"note-obj-group-frame-header"},mc={for:"noteObjGroupFrameSearchInputBox"},hc=["placeholder","onKeydown"],bc={class:"note-obj-group-frame-show-number"},xc={class:"note-obj-group-frame-content"},vc={class:"note-obj-group-frame-thead"},yc=["title"],jc={class:"note-obj-group-frame-tbody"},Tc=["checked","onChange"],Ic=["value","onChange"],wc=["value","onChange"],Sc=["value","onChange"],kc=["title","onClick"],Nc=["title","onClick"],Cc={class:"note-obj-group-frame-tool"},Mc=["disabled","title","onClick"],_c=["title","onClick"],Dc={class:"note-obj-management-frame-footer"},Ec=["title","disabled","onClick"],Ac=["title","onClick"],Gc=xe({__name:"NoteObjGroupFrame",setup(e){const t=Be(),n=ar(),o=rr(),{isInsert:r}=Bt(n),a=he(""),i=he(!1),s=he(!1),l=he({default:{value:"",primaryColor:t.defaultColor.primaryColor,secondaryColor:t.defaultColor.secondaryColor,weight:0,isExists:!0,isShow:!0,isSelected:!1,editable:!1}}),c=we(()=>{let C=0;for(const O in l.value)l.value[O].isExists&&C++;return C}),u=we(()=>{let C=0;for(const O in l.value){const Q=l.value[O];Q.isExists&&Q.isShow&&Q.isSelected&&C++}return C}),p=we({get(){for(const C in l.value){const O=l.value[C];if(O.isExists&&O.isShow&&!O.isSelected)return!1}return!0},set(C){for(const O in l.value){const Q=l.value[O];Q.isExists&&Q.isShow&&(C&&!Q.isSelected?Q.isSelected=!0:!C&&Q.isSelected&&(Q.isSelected=!1))}}});function b(){console.info("Just to intercept the carriage return event.")}function x(){a.value="",i.value=!1;const C=Object.assign({},t.group);for(const O in C)Object.assign(C[O],{isExists:!0,isShow:!0,isSelected:!1,editable:!1});l.value=C}function h(C){C!=="default"&&(l.value[C].editable?function(O){const Q=document.querySelector(`.note-obj-group-frame-item-input-value[data-key="${O}"]`),re=(Q==null?void 0:Q.value.trim())||"";l.value[O].value=re,F(),l.value[O].editable=!1}(C):l.value[C].editable=!0)}function T(){for(const C in l.value)if(C!=="default"){const O=l.value[C];O.isExists&&O.isShow&&O.isSelected&&(O.isExists=!1,F())}}function B(){const C="g_"+Date.now();l.value[C]={value:t.lang.groupNewValueText,primaryColor:t.defaultColor.primaryColor,secondaryColor:t.defaultColor.secondaryColor,weight:0,isExists:!0,isShow:!0,isSelected:!1,editable:!1},F(),qn(()=>{const O=document.querySelector(".note-obj-group-frame-tbody");O&&(O.scrollTop=O.scrollHeight)})}function k(){if(i.value){const C={default:{value:"",primaryColor:t.defaultColor.primaryColor,secondaryColor:t.defaultColor.secondaryColor,weight:0}};for(const O in l.value){const{isExists:Q,value:re,primaryColor:G,secondaryColor:N,weight:_}=l.value[O];Q&&re&&(C[O]={value:re,primaryColor:G||t.defaultColor.primaryColor,secondaryColor:N||t.defaultColor.secondaryColor,weight:_||0})}t.setGroups(C)&&(i.value=!1)}}function F(){i.value=!0}function A(){i.value=!1,a.value="",r.value=!1,o.isEcho&&(o.isEcho=!1,o.isInsert=!0)}return Ce(a,C=>{ze.debounce("groupSearchValue",()=>{(function(O){for(const Q in l.value){const re=l.value[Q];re.isShow=t.determineSearchString(O,re.value,!0)}})(C)},250)}),Ce(r,C=>{C&&(Object.keys(t.group).length>50?(s.value=!0,l.value={default:{value:"",primaryColor:t.defaultColor.primaryColor,secondaryColor:t.defaultColor.secondaryColor,weight:0,isExists:!0,isShow:!0,isSelected:!1,editable:!1}},ze.debounce("initGroupsManagement",()=>{x(),s.value=!1},50)):x())}),(C,O)=>g(r)?(U(),K("div",pc,[m("div",gc,[m("div",fc,[m("form",null,[m("label",mc,H(g(t).lang.searchContentText),1),ie(m("input",{"onUpdate:modelValue":O[0]||(O[0]=Q=>a.value=Q),type:"text",id:"noteObjGroupFrameSearchInputBox",placeholder:g(t).lang.searchContentPlaceholder,onKeydown:zt(q(b,["stop","prevent"]),["enter"])},null,40,hc),[[yt,a.value,void 0,{trim:!0}]]),m("span",bc,H(g(u)+"/"+g(c)),1)])]),m("div",xc,[m("div",vc,[m("table",null,[m("thead",null,[m("tr",null,[m("th",null,[ie(m("input",{"onUpdate:modelValue":O[1]||(O[1]=Q=>be(p)?p.value=Q:null),type:"checkbox",title:g(t).lang.selectAllTitle},null,8,yc),[[ai,g(p)]])]),Y(Ze,{text:g(t).lang.groupValueText},null,8,["text"]),Y(Ze,{text:g(t).lang.groupPrimaryColorText},null,8,["text"]),Y(Ze,{text:g(t).lang.groupSecondaryColorText},null,8,["text"]),Y(Ze,{text:g(t).lang.groupWeightText},null,8,["text"]),Y(Ze,{text:g(t).lang.editText},null,8,["text"]),Y(Ze,{text:g(t).lang.deleteText},null,8,["text"])])])])]),m("div",jc,[m("table",null,[m("tbody",null,[(U(!0),K(de,null,De(l.value,({isExists:Q,isShow:re,isSelected:G,value:N,editable:_,primaryColor:z,secondaryColor:D,weight:oe},X)=>ie((U(),K("tr",{key:X},[m("td",null,[m("input",{type:"checkbox",checked:G,onChange:ce=>l.value[X].isSelected=!G},null,40,Tc)]),m("td",null,[Y(fi,{value:N,"data-key":X.toString(),editable:_,"class-name":"note-obj-group-frame-item-input-value",onValueChange:ce=>function($,ee){l.value[$].value=ee,F(),l.value[$].editable=!1}(X.toString(),ce)},null,8,["value","data-key","editable","onValueChange"])]),m("td",null,[m("input",{type:"color",value:z,onChange:ce=>function($,ee){let le="";ee.target&&(le=ee.target.value),l.value[$].primaryColor=le||t.defaultColor.primaryColor,F()}(X.toString(),ce)},null,40,Ic)]),m("td",null,[m("input",{type:"color",value:D,onChange:ce=>function($,ee){let le="";ee.target&&(le=ee.target.value),l.value[$].secondaryColor=le||t.defaultColor.secondaryColor,F()}(X.toString(),ce)},null,40,wc)]),m("td",null,[m("input",{type:"number",step:1,min:-100,max:100,value:oe,onChange:ce=>function($,ee){let le=0;ee.target&&(le=+ee.target.value),l.value[$].weight=le||0,F()}(X.toString(),ce)},null,40,Sc)]),m("td",null,[ie(m("span",{title:g(t).lang.editTitle,class:Ke(["note-obj-group-frame-item-btn note-obj-group-frame-item-edit",{"note-obj-group-frame-item-ok":_}]),onClick:q(ce=>h(X.toString()),["stop"])},null,10,kc),[[ve,X!=="default"]])]),m("td",null,[ie(m("span",{title:g(t).lang.deleteTitle,class:"note-obj-group-frame-item-btn note-obj-group-frame-item-delete",onClick:q(ce=>function($){$!=="default"&&(l.value[$].isExists=!1,F())}(X.toString()),["stop"])},null,8,Nc),[[ve,X!=="default"]])])],512)),[[ve,Q&&re]])),128))])])])]),m("div",Cc,[m("button",{type:"button",disabled:g(u)===0,title:g(t).lang.deleteSelectedTitle,class:"note-obj-group-frame-delete-selected",onClick:q(T,["stop"])},H(g(t).lang.deleteSelectedText),9,Mc),m("button",{type:"button",title:g(t).lang.groupCreateValueTitle,class:"note-obj-group-frame-create-value",onClick:q(B,["stop"])},H(g(t).lang.groupCreateValueText),9,_c)]),m("div",Dc,[ie(m("span",{class:"note-obj-group-frame-show-modify-text"},H(g(t).lang.modifyText),513),[[ve,i.value]]),ie(m("span",{class:"note-obj-group-frame-show-wait-text"},H(g(t).lang.waitText),513),[[ve,s.value]]),m("button",{title:g(t).lang.saveContentTitle,class:"note-obj-group-frame-save-content",disabled:!i.value,onClick:q(k,["stop"])},H(g(t).lang.saveContentText),9,Ec),m("button",{title:g(t).lang.closeContentTitle,class:"note-obj-group-frame-cancel-content",onClick:q(A,["stop"])},H(g(t).lang.closeCotentText),9,Ac)])])])):ct("",!0)}}),Oc=["onClick"],Lc={class:"note-obj-select-group-frame-dialog"},Pc={class:"note-obj-select-group-frame-header"},zc={class:"note-obj-select-group-frame-header-text"},Vc={class:"note-obj-select-group-frame-content"},Bc=["title","onClick"],Hc={class:"note-obj-select-group-frame-footer"},Uc=["onClick"],Rc=xe({__name:"NoteObjSelectGroupFrame",setup(e){const t=Be(),n=io(),o=he([]),{isShow:r}=Bt(n);function a(){i()}function i(){n.isShow=!1}return Ce(r,s=>{s&&(o.value=Object.keys(t.group).sort((l,c)=>{const u=Number(t.group[l].weight)||0,p=Number(t.group[c].weight)||0;return u-p<0?1:u-p>0?-1:0}).map(l=>({key:l,...t.group[l]})))}),(s,l)=>ie((U(),K("div",{class:"note-obj-select-group-frame-presentation",onClick:q(a,["self"])},[m("div",Lc,[m("div",Pc,[m("div",zc,H(g(t).lang.selectGroupHeaderText),1)]),m("div",Vc,[(U(!0),K(de,null,De(o.value,({key:c,value:u,primaryColor:p,secondaryColor:b})=>(U(),K("div",{key:c,class:"note-obj-select-group-frame-group-item",title:c==="default"?g(t).lang.defaultGroupText:u,style:nn({color:b,backgroundColor:p}),onClick:q(x=>function(h){typeof n.selected=="function"&&(n.selected(h),n.selected=null),i()}(c),["stop"])},H(c==="default"?g(t).lang.defaultGroupText:u),13,Bc))),128))]),m("div",Hc,[m("span",{class:"note-obj-select-group-frame-btn",onClick:q(i,["stop"])},H(g(t).lang.cancelText),9,Uc)])])],8,Oc)),[[ve,g(n).isShow]])}}),Fc=["onClick"],Zc={class:"note-obj-new-group-frame-dialog"},Wc={class:"note-obj-new-group-frame-header"},Yc={class:"note-obj-new-group-frame-title-text"},Kc=["placeholder","onKeyup"],Jc={class:"note-obj-new-group-frame-color-label"},$c={class:"note-obj-new-group-frame-color-label-text"},Qc={class:"note-obj-new-group-frame-color-label"},Xc={class:"note-obj-new-group-frame-color-label-text"},qc={class:"note-obj-new-group-frame-color-label"},eu={class:"note-obj-new-group-frame-color-label-text"},tu=["title","onClick"],nu=["ttile","onClick"],ou=xe({__name:"NoteObjNewGroupFrame",setup(e){const t=Be(),n=ir(),o=he(""),r=he(""),a=he(""),i=he(0),{isShow:s}=Bt(n);function l(b){b.key==="Enter"?c():b.key==="Escape"&&p()}function c(){if(o.value){const b="g_"+Date.now();t.writeNewGroupValue(b,{value:o.value,primaryColor:r.value,secondaryColor:a.value,weight:i.value})&&(typeof n.created=="function"&&(n.created(b),n.created=null),p())}}function u(){p()}function p(){n.isShow=!1}return Ce(s,b=>{b&&(o.value=t.lang.groupNewValueText,r.value=t.defaultColor.primaryColor,a.value=t.defaultColor.secondaryColor,i.value=0)}),(b,x)=>ie((U(),K("div",{class:"note-obj-new-group-frame-presentation",onClick:q(u,["self"])},[m("div",Zc,[m("div",Wc,[m("span",Yc,H(g(t).lang.groupCreateValueText),1)]),ie(m("input",{"onUpdate:modelValue":x[0]||(x[0]=h=>o.value=h),type:"text",placeholder:g(t).lang.groupPlaceholder,class:"note-obj-new-group-frame-input",onKeyup:zt(q(l,["prevent"]),["enter","esc"])},null,40,Kc),[[yt,o.value,void 0,{trim:!0}],[g(so),g(s)]]),m("div",Jc,[m("span",$c,H(g(t).lang.groupPrimaryColorText+": "),1),ie(m("input",{"onUpdate:modelValue":x[1]||(x[1]=h=>r.value=h),type:"color"},null,512),[[yt,r.value]])]),m("div",Qc,[m("span",Xc,H(g(t).lang.groupSecondaryColorText+": "),1),ie(m("input",{"onUpdate:modelValue":x[2]||(x[2]=h=>a.value=h),type:"color"},null,512),[[yt,a.value]])]),m("div",qc,[m("span",eu,H(g(t).lang.groupWeightText+": "),1),ie(m("input",{"onUpdate:modelValue":x[3]||(x[3]=h=>i.value=h),type:"number",step:1,min:-100,max:100},null,512),[[yt,i.value]])]),m("button",{type:"button",title:g(t).lang.saveTagTitle,onClick:q(c,["stop"])},H(g(t).lang.saveTagText),9,tu),m("button",{type:"button",ttile:g(t).lang.cancelTagTItle,onClick:q(p,["stop"])},H(g(t).lang.cancelTagText),9,nu)])],8,Fc)),[[ve,g(s)]])}}),ru={class:"note-obj-popover-frame-header"},au={class:"note-obj-popover-frame-title"},iu={class:"note-obj-popover-frame-title"},su={class:"note-obj-popover-frame-content"},lu=["title","onOnclick"],cu=m("div",{class:"note-obj-popover-frame-arrow"},null,-1),uu=xe({__name:"NoteObjPopoverFrame",setup(e){const t=Be(),n=Go(),{currentUserId:o}=Bt(n),r=rn({name:"",tag:"",group:""}),a=he({}),i=he("");function s(){n.isPopHover=!0}function l(){n.isPopHover=!1,ze.debounce("popoverHide",()=>{n.isPopHover||n.isTagHover||(n.isShow=!1)},1e3)}return Ce(o,c=>{if(c){Object.assign(r,t.items[c]);const u=r.group,p=Object.keys(t.group),b={};if(u&&u!=="default"&&p.includes(u)){i.value=t.group[u].value;const x=Object.assign({},t.items);for(const h in x){const T=x[h];T.group===u&&h!==c&&(b[h]=T)}}else i.value="";a.value=b}}),(c,u)=>ie((U(),K("div",{class:"note-obj-popver-frame-dialog",style:nn({left:g(n).x+10+"px",top:g(n).y-50+"px"}),onMouseenter:s,onMouseleave:l},[m("div",ru,[m("div",au,H(i.value),1),m("div",iu,H(r.tag||r.name||""),1)]),m("div",su,[(U(!0),K(de,null,De(a.value,(p,b,x)=>(U(),K("div",{key:b,class:Ke(x%2==1?"note-obj-popover-frame-item-deepen":"note-obj-popover-frame-item"),title:b+(p.name&&p.name!==b?`
${p.name}`:"")+(p.tag?`
${p.tag}`:""),onOnclick:q(h=>function(T,B){t.openLink(B.toString(),T.ctrlKey||T.metaKey,T.shiftKey,"popover")}(h,b),["stop"])},H(p.tag||p.name||b),43,lu))),128))]),cu],36)),[[ve,g(n).isShow]])}}),_t=xe({__name:"NoteObjFlodHeader",props:{text:null,iconRomote:{type:Boolean}},emits:["update:iconRomote"],setup:(e,{emit:t})=>(n,o)=>(U(),K("header",{onClick:o[0]||(o[0]=q(r=>t("update:iconRomote",!e.iconRomote),["stop"]))},[m("span",null,H(e.text),1),m("i",{class:Ke(["note-obj-settings-frame-header-icon",{"note-obj-settings-frame-header-icon-romote":e.iconRomote}])},null,2)]))}),du={class:"note-obj-settings-frame-component-package"},pu=["id","checked"],gu=["for"],fu=xe({__name:"NoteObjSettingsCheckbox",props:{id:null,isSelected:{type:Boolean},label:null},emits:["change"],setup:(e,{emit:t})=>(n,o)=>(U(),K("div",du,[m("input",{type:"checkbox",id:e.id,checked:e.isSelected,onChange:o[0]||(o[0]=r=>t("change",!e.isSelected))},null,40,pu),m("label",{for:e.id,class:"note-obj-settings-checkbox-label"},H(e.label),9,gu)]))}),mu={class:"note-obj-settings-frame-component-package-input-text"},hu={class:"note-obj-setttings-frame-before-input-text"},bu=["id","value"],xu=xe({__name:"NoteObjSettingsInput",props:{id:null,value:null,label:null},emits:["change"],setup(e,{emit:t}){const n=e;function o(r){ze.debounce(n.id+"_settingsInput",()=>{let a="";r.target&&(a=r.target.value),t("change",a)},500)}return(r,a)=>(U(),K("div",mu,[m("span",hu,H(e.label),1),m("input",{type:"text",id:e.id,value:e.value,onInput:o},null,40,bu)]))}}),vu={class:"note-obj-settings-frame-component-package"},yu=["for"],ju=["id"],Tu=["id","value","checked"],Iu=["for"],wu=xe({__name:"NoteObjSettingsRadio",props:{id:null,label:null,value:null,options:null},emits:["change"],setup(e,{emit:t}){const n=Be();function o(r){let a="";r.target&&(a=r.target.value),t("change",a)}return(r,a)=>(U(),K("div",vu,[m("label",{for:e.id,class:"note-obj-settings-frame-radio-config-text"},H(e.label),9,yu),(U(!0),K(de,null,De(e.options,(i,s)=>(U(),K("span",{key:s,id:e.id},[m("input",{type:"radio",id:e.id+"_"+s,value:s,checked:e.value===s,onChange:o},null,40,Tu),m("label",{for:e.id+"_"+s,class:"note-obj-settings-radio-label"},H(g(n).lang[i]||i),9,Iu)],8,ju))),128))]))}}),Su={class:"note-obj-settings-frame-component-package"},ku=["for"],Nu=["id","name"],Cu=["value","selected"],Mu=xe({__name:"NoteObjSettingsSelect",props:{id:null,selected:null,options:null,label:null},emits:["change"],setup(e,{emit:t}){const n=Be();function o(r){let a="";r.target&&(a=r.target.value),t("change",a)}return(r,a)=>(U(),K("div",Su,[m("label",{class:"note-obj-settings-frame-before-select-text",for:e.id},H(e.label),9,ku),m("select",{id:e.id,name:e.id+"_select",onChange:o},[(U(!0),K(de,null,De(e.options,(i,s)=>(U(),K("option",{key:s,value:s,selected:s===e.selected},H(g(n).lang[i]||i),9,Cu))),128))],40,Nu)]))}}),_u={class:"note-obj-settings-frame-content-section"},Ut=xe({__name:"NoteObjSettingsItem",props:{id:null,type:null,value:{type:[String,Boolean]},label:null,options:null},emits:["value-change"],setup:(e,{emit:t})=>(n,o)=>(U(),K("div",_u,[e.type==="checkbox"?(U(),Pe(fu,{key:0,id:e.id,label:e.label,"is-selected":!!e.value,onChange:o[0]||(o[0]=r=>t("value-change",r))},null,8,["id","label","is-selected"])):e.type==="text"?(U(),Pe(xu,{key:1,id:e.id,label:e.label,value:e.value.toString(),onChange:o[1]||(o[1]=r=>t("value-change",r))},null,8,["id","label","value"])):e.type==="radio"?(U(),Pe(wu,{key:2,id:e.id,label:e.label,value:e.value.toString(),options:e.options||{},onChange:o[2]||(o[2]=r=>t("value-change",r))},null,8,["id","label","value","options"])):e.type==="select"?(U(),Pe(Mu,{key:3,id:e.id,label:e.label,options:e.options||{},selected:e.value.toString(),onChange:o[3]||(o[3]=r=>t("value-change",r))},null,8,["id","label","options","selected"])):ct("",!0)]))}),Du={class:"note-obj-settings-frame-content-section"},Eu=["href"],Au={key:1},Rt=xe({__name:"NoteObjScriptItem",props:{label:null,text:null,type:null,url:null},setup:e=>(t,n)=>(U(),K("div",Du,[m("span",null,H(e.label),1),e.type==="a"?(U(),K("a",{key:0,href:e.url||"#",target:"_blank"},H(e.text),9,Eu)):e.type==="p"?(U(),K("p",Au,H(e.text),1)):ct("",!0)]))}),mi="6.0.0-beta2",hi="2023-02-26",Gu=["onClick"],Ou={class:"note-obj-settings-frame-card"},Lu={class:"note-obj-settings-frame-header"},Pu={class:"note-obj-settings-frame-headline"},zu=["title","onClick"],Vu={class:"note-obj-settings-frame-body"},Bu={class:"note-obj-settings-frame-flod"},Hu={class:"note-obj-settings-frame-content"},Uu={class:"note-obj-settings-frame-flod"},Ru={class:"note-obj-settings-frame-content"},Fu={class:"note-obj-settings-frame-flod"},Zu={class:"note-obj-settings-frame-content"},Wu={class:"note-obj-settings-frame-flod"},Yu={class:"note-obj-settings-frame-content"},Ku={key:0,class:"note-obj-settings-frame-flod"},Ju={class:"note-obj-settings-frame-content"},$u={class:"note-obj-settings-frame-flod"},Qu={class:"note-obj-settings-frame-content"},Xu={class:"note-obj-settings-frame-content-section"},qu={class:"note-obj-settings-frame-content-section"},ed={class:"note-obj-settings-frame-flod"},td={class:"note-obj-settings-frame-content"},nd={class:"note-obj-settings-frame-footer"},od=["title","onClick"],rd=["title","onClick"],ad=xe({__name:"NoteObjSettingsFrame",setup(e){const t=Be(),n=pi(),o=fe.info(),r=rn({searchBox:!1,searchValue:!1,addNote:!1,interface:!1,other:!1,storeData:!1,script:!1}),a={searchBox:{showIndex:{id:"settingsSearchBoxShowIndexText",type:"checkbox"},canHideSearchFrame:{id:"settingsSearchBoxCanHideSearchFrameText",type:"checkbox"},showGroupName:{id:"settingsSearchBoxShowGroupNameText",type:"checkbox"},openNewTab:{id:"settingsSearchBoxOpenNewTabText",type:"checkbox"},enableShortcutKeys:{id:"settingsSearchBoxEnableShortcutKeysText",type:"checkbox"}},searchValue:{caseSensitive:{id:"settingsSearchValueCaseSensitiveText",type:"checkbox"},split:{id:"settingsSearchValueSplitText",type:"checkbox"},regular:{id:"settingsSearchValueRegularText",type:"checkbox"}},addNote:{showNoteGroupName:{id:"settingsAddNoteShowNoteGroupNameText",type:"checkbox"},hideNoteText:{id:"settingsAddNoteHideNoteText",type:"checkbox"},showNoteGroupColor:{id:"settingsAddNoteShowNoteGroupColorText",type:"checkbox"},showPopoverFrame:{id:"settingsAddNoteShowPopoverFrameText",type:"checkbox"},openNoteNewTab:{id:"settingsAddNoteOpenNoteNewTabText",type:"checkbox"},canHideAddFrame:{id:"settingsAddNoteCanHideAddFrameText",type:"checkbox"}},interface:{insertSearchButton:{id:"settingsInterfaceInsertSearchButtonText",type:"checkbox"},mode:{id:"settingsInterfaceConfigText",type:"radio",options:{bright:"settingsInterfaceBrightText",dark:"settingsInterfaceDarkText"}},language:{id:"settingsInterfaceLanguageText",type:"select",options:t.i18n.getLangOptions()}}},i=we(()=>Object.keys(t.config.other).length>0),s=we(()=>t.storeModificationTime?new Date(t.storeModificationTime).toString():"");function l(){t.export()}function c(){t.import()}function u(){p()}function p(){n.isInsert=!1}return(b,x)=>(U(),Pe(nr,{name:"note-obj-settings-frame-card"},{default:Jo(()=>[g(n).isInsert?(U(),K("div",{key:0,class:"note-obj-settings-frame-presentation",onClick:q(u,["self"])},[m("div",Ou,[m("header",Lu,[m("span",Pu,H(g(t).lang.settingsHeadlineText),1),m("span",{title:g(t).lang.settingsCloseTitle,class:"note-obj-settings-frame-close-btn",onClick:q(p,["stop"])},null,8,zu)]),m("div",Vu,[m("div",Bu,[Y(_t,{"icon-romote":r.searchBox,"onUpdate:iconRomote":x[0]||(x[0]=h=>r.searchBox=h),text:g(t).lang.settingsAboutSearchBoxText},null,8,["icon-romote","text"]),ie(m("div",Hu,[(U(!0),K(de,null,De(a.searchBox,({id:h,type:T},B)=>(U(),Pe(Ut,{key:B,value:g(t).config.searchBox[B],id:h,label:g(t).lang[h],type:T,onValueChange:k=>function(F,A){t.config.searchBox[F]=A,t.saveConfig()}(B,!!k)},null,8,["value","id","label","type","onValueChange"]))),128))],512),[[ve,r.searchBox]])]),m("div",Uu,[Y(_t,{"icon-romote":r.searchValue,"onUpdate:iconRomote":x[1]||(x[1]=h=>r.searchValue=h),text:g(t).lang.settingsAboutSearchValueText},null,8,["icon-romote","text"]),ie(m("div",Ru,[(U(!0),K(de,null,De(a.searchValue,({id:h,type:T},B)=>(U(),Pe(Ut,{key:B,value:g(t).config.searchValue[B],id:h,label:g(t).lang[h],type:T,onValueChange:k=>function(F,A){t.config.searchValue[F]=A,t.saveConfig()}(B,!!k)},null,8,["value","id","label","type","onValueChange"]))),128))],512),[[ve,r.searchValue]])]),m("div",Fu,[Y(_t,{"icon-romote":r.addNote,"onUpdate:iconRomote":x[2]||(x[2]=h=>r.addNote=h),text:g(t).lang.settingsAboutAddNoteText},null,8,["icon-romote","text"]),ie(m("div",Zu,[(U(!0),K(de,null,De(a.addNote,({id:h,type:T},B)=>(U(),Pe(Ut,{key:B,value:g(t).config.addNote[B],id:h,label:g(t).lang[h],type:T,onValueChange:k=>function(F,A){t.config.addNote[F]=A,t.saveConfig()}(B,!!k)},null,8,["value","id","label","type","onValueChange"]))),128))],512),[[ve,r.addNote]])]),m("div",Wu,[Y(_t,{"icon-romote":r.interface,"onUpdate:iconRomote":x[3]||(x[3]=h=>r.interface=h),text:g(t).lang.settingsAboutInterfaceText},null,8,["icon-romote","text"]),ie(m("div",Yu,[(U(!0),K(de,null,De(a.interface,({id:h,type:T,options:B},k)=>(U(),Pe(Ut,{key:k,value:g(t).config.interface[k],id:h,label:g(t).lang[h],type:T,options:B,onValueChange:F=>function(A,C){A==="mode"?t.setInterfaceMode(C.toString()):A==="language"?t.setInterfaceLanguage(C.toString()):A==="insertSearchButton"&&(t.config.interface.insertSearchButton=!!C,t.saveConfig())}(k,F)},null,8,["value","id","label","type","options","onValueChange"]))),128))],512),[[ve,r.interface]])]),g(i)?(U(),K("div",Ku,[Y(_t,{"icon-romote":r.other,"onUpdate:iconRomote":x[4]||(x[4]=h=>r.other=h),text:g(t).lang.settingsAboutOtherText},null,8,["icon-romote","text"]),ie(m("div",Ju,[(U(!0),K(de,null,De(g(t).config.other,(h,T)=>(U(),Pe(Ut,{key:T,value:h,id:"otherSettings_"+T,label:g(t).otherConfigInfo[T].lang[g(t).i18n.getLangType()],type:g(t).otherConfigInfo[T].type,options:g(t).otherConfigInfo[T].options,onValueChange:B=>function(k,F){t.config.other[k]=F,t.saveConfig(void 0,!1)&&(t.addNotifaction(t.lang.saveCompletedNotifactionText),t.otherConfigInfo[k].event(F))}(T.toString(),B)},null,8,["value","id","label","type","options","onValueChange"]))),128))],512),[[ve,r.other]])])):ct("",!0),m("div",$u,[Y(_t,{"icon-romote":r.storeData,"onUpdate:iconRomote":x[5]||(x[5]=h=>r.storeData=h),text:g(t).lang.settingsAboutStoredDataText},null,8,["icon-romote","text"]),ie(m("div",Qu,[Y(Ut,{id:"settingsFrameInterfaceAutoSync",value:g(t).config.storeData.autoSync,label:g(t).lang.settingsFrameInterfaceAutoSyncText,type:"checkbox",onValueChange:x[6]||(x[6]=h=>{return T=!!h,void t.valueChangeListener(T);var T})},null,8,["value","label"]),m("div",Xu,[m("span",null,H(g(t).lang.settingsStoredDataLastTimeText+"(Unix: "+g(t).storeModificationTime+")"),1)]),m("div",qu,[m("span",null,H(g(s)),1)])],512),[[ve,r.storeData]])]),m("div",ed,[Y(_t,{"icon-romote":r.script,"onUpdate:iconRomote":x[7]||(x[7]=h=>r.script=h),text:g(t).lang.settingsAboutScriptText},null,8,["icon-romote","text"]),ie(m("div",td,[Y(Rt,{type:"a",label:g(t).lang.settingsScriptAuthorText,text:g(t).scriptInfo.author.name,url:g(t).scriptInfo.author.homepage},null,8,["label","text","url"]),Y(Rt,{type:"a",label:g(t).lang.settingsScriptVersionText,text:(g(t).scriptInfo.version||g(o).script.version)+" ("+g(t).scriptInfo.updated+")",url:g(t).scriptInfo.url},null,8,["label","text","url"]),Y(Rt,{type:"a",label:g(t).lang.settingsScriptCoreText,text:"Note_Obj v"+g(mi)+" ("+g(hi)+")",url:"https://github.com/LightAPIs"},null,8,["label","text"]),(U(!0),K(de,null,De(g(t).scriptInfo.library,(h,T)=>(U(),Pe(Rt,{key:T,type:"a",label:g(t).lang.settingsScriptLibraryText,text:h.name+" v"+h.version,url:h.url},null,8,["label","text","url"]))),128)),(U(!0),K(de,null,De(g(t).scriptInfo.icons,(h,T)=>(U(),Pe(Rt,{key:T,type:"a",label:g(t).lang.settingsScriptIconText,text:h.name,url:h.url},null,8,["label","text","url"]))),128)),Y(Rt,{type:"p",label:g(t).lang.settingsScriptHandlerText,text:g(o).scriptHandler+" ("+(g(o).version||"0.0.0")+")"},null,8,["label","text"])],512),[[ve,r.script]])])]),m("div",nd,[m("button",{type:"button",title:g(t).lang.settingsStoredDataExportTitle,onClick:q(l,["stop"])},H(g(t).lang.gmExportText),9,od),m("button",{type:"button",title:g(t).lang.settingsStoredDataImportIitle,onClick:q(c,["stop"])},H(g(t).lang.gmImportText),9,rd)])])],8,Gu)):ct("",!0)]),_:1}))}}),id={class:"note-obj-message-frame-presentation"},sd=["onClick"],ld={class:"note-obj-message-frame-content"},cd=xe({__name:"NoteObjMessageFrame",setup(e){const t=gi();return(n,o)=>(U(),K("div",id,[Y(Us,{tag:"div",name:"note-obj-message-frame-notifaction"},{default:Jo(()=>[(U(!0),K(de,null,De(g(t).notifactions,({id:r,content:a})=>(U(),K("div",{key:r,class:"note-obj-message-frame-notifaction"},[m("span",{class:"note-obj-message-frame-close-btn",onClick:q(i=>function(s){t.removeNotifaction(s)}(r),["stop"])},null,8,sd),m("div",ld,H(a),1)]))),128))]),_:1})]))}}),ud=["id"],dd=xe({__name:"App",setup(e){const t=Be(),n=or(),o=we(()=>t.config.interface.mode==="dark"?"note-obj-interface-dark":"note-obj-interface-bright");function r(){t.showFrame("search",!0,!n.isShow)}return Qo(()=>{document.onkeydown=a=>{t.config.searchBox.enableShortcutKeys&&(a.ctrlKey||a.metaKey)&&a.shiftKey&&a.key==="F"&&r()}}),(a,i)=>(U(),K("div",{id:g(t).id+"_vue",class:Ke(["note-obj-vue-div",g(o)])},[Y(sl,{"is-insert":g(t).config.interface.insertSearchButton,title:g(t).lang.searchTagTitle,"button-class":"note-obj-search-expand-span "+g(t).searchBtnClassName,"box-class":"note-obj-search-expand-box "+g(t).searchBtnBoxClassName,onClick:r},null,8,["is-insert","title","button-class","box-class"]),Y(vl),Y(_l),Y(dc),Y(Gc),Y(Rc),Y(ou),Y(uu),Y(ad),Y(cd)],10,ud))}});function jt(e,t,n,o){let r="";switch(r=o?`fn: Unable to find ${e} in document. Selector: (${t})`:`fn: Unable to find ${e}. Selector: (${t})`,n){case"error":console.error(r);break;case"warn":console.warn(r);break;case"info":console.info(r);break;case"debug":console.debug(r)}}function Xr(e,t,n="error"){const o=e.querySelector(t);return o instanceof HTMLElement?o:(jt("HTMLElement",t,n),null)}function qr(e,t,n="error"){const o=e.querySelector(t);return o instanceof HTMLAnchorElement?o:(jt("HTMLAnchorElement",t,n),null)}function ea(e,t="error"){const n=document.querySelector(e);return n instanceof HTMLElement?n:(jt("HTMLElement",e,t,!0),null)}function ta(e,t="error"){const n=document.querySelector(e);return n instanceof HTMLAnchorElement?n:(jt("HTMLAnchorElement",e,t,!0),null)}function yo(e,t){let n=e.replace(location.origin+"/","").replace(/\/$/,"");return typeof t=="function"&&(n=t(n)),n}const pd=Object.freeze(Object.defineProperty({__proto__:null,docGetText:function(e,t="error",n){const o=ea(e,t);if(o){const r=o.textContent||"";return typeof n=="function"?n(r):r}return""},docGetUrlId:function(e,t="error",n){const o=ta(e,t);return o?yo(o.href,n):""},docQuery:ea,docQueryAll:function(e,t="error"){const n=document.querySelectorAll(e);return n.length===0&&jt("NodeListOf<HTMLElement>",e,t,!0),n},docQueryAllAnchor:function(e,t="error"){const n=document.querySelectorAll(e);return n.length===0&&jt("NodeListOf<HTMLAnchorElement>",e,t,!0),n},docQueryAnchor:ta,getIdFromUrl:yo,getText:function(e,t,n="error",o){const r=Xr(e,t,n);if(r){const a=r.textContent||"";return typeof o=="function"?o(a):a}return""},getUrlId:function(e,t,n="error",o){const r=qr(e,t,n);return r?yo(r.href,o):""},query:Xr,queryAll:function(e,t,n="error"){const o=e.querySelectorAll(t);return o.length===0&&jt("NodeListOf<HTMLElement>",t,n),o},queryAllAnchor:function(e,t,n="error"){const o=e.querySelectorAll(t);return o.length===0&&jt("NodeListOf<HTMLAnchorElement>",t,n),o},queryAnchor:qr,updated:hi,version:mi},Symbol.toStringTag,{value:"Module"})),Gt=class{constructor(t){St(this,"store");const{id:n,style:o,searchBtnClassName:r="",searchBtnBoxClassName:a="",itemClick:i,changeEvent:s,script:{library:l,icons:c,author:u,url:p,version:b,updated:x},settings:h,primaryColor:T,secondaryColor:B}=t,k=Gt.insertDom(n),F=Qs(dd),A=function(){const C=la(!0),O=C.run(()=>he({}));let Q=[],re=[];const G=qt({install(N){ao(G),G._a=N,N.provide(li,G),N.config.globalProperties.$pinia=G,re.forEach(_=>Q.push(_)),re=[]},use(N){return this._a||Xs?Q.push(N):re.push(N),this},_p:Q,_a:null,_e:C,_s:new Map,state:O});return G}();F.use(A),this.store=Be(),this.store.id=n,this.store.init(),fe.addStyle(`
:root {
  /* #369 */
  --note-icon-settings-blue: url(data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWxhYmVsbGVkYnk9InNldHRpbmdzSWNvblRpdGxlIiBzdHJva2U9IiMzMzY2OTkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgZmlsbD0ibm9uZSIgY29sb3I9IiMzMzY2OTkiPiA8dGl0bGUgaWQ9InNldHRpbmdzSWNvblRpdGxlIj5TZXR0aW5nczwvdGl0bGU+IDxwYXRoIGQ9Ik01LjAzNTA2NDI5LDEyLjcwNTAzMzkgQzUuMDExODc0ODQsMTIuNDczMTY5NiA1LDEyLjIzNzk3MTYgNSwxMiBDNSwxMS43NjIwMjg0IDUuMDExODc0ODQsMTEuNTI2ODMwNCA1LjAzNTA2NDI5LDExLjI5NDk2NjEgTDMuMjA1NzcxMzcsOS4yMzIwNTA4MSBMNS4yMDU3NzEzNyw1Ljc2Nzk0OTE5IEw3LjkwNjk3MTMsNi4zMjA3MDkwNCBDOC4yODcyOTEyMyw2LjA0NjEzNDIgOC42OTYyOTI5OCw1LjgwODgyMjEyIDkuMTI4NjI1MzMsNS42MTQxMjQwMiBMMTAsMyBMMTQsMyBMMTQuODcxMzc0Nyw1LjYxNDEyNDAyIEMxNS4zMDM3MDcsNS44MDg4MjIxMiAxNS43MTI3MDg4LDYuMDQ2MTM0MiAxNi4wOTMwMjg3LDYuMzIwNzA5MDQgTDE4Ljc5NDIyODYsNS43Njc5NDkxOSBMMjAuNzk0MjI4Niw5LjIzMjA1MDgxIEwxOC45NjQ5MzU3LDExLjI5NDk2NjEgQzE4Ljk4ODEyNTIsMTEuNTI2ODMwNCAxOSwxMS43NjIwMjg0IDE5LDEyIEMxOSwxMi4yMzc5NzE2IDE4Ljk4ODEyNTIsMTIuNDczMTY5NiAxOC45NjQ5MzU3LDEyLjcwNTAzMzkgTDIwLjc5NDIyODYsMTQuNzY3OTQ5MiBMMTguNzk0MjI4NiwxOC4yMzIwNTA4IEwxNi4wOTMwMjg3LDE3LjY3OTI5MSBDMTUuNzEyNzA4OCwxNy45NTM4NjU4IDE1LjMwMzcwNywxOC4xOTExNzc5IDE0Ljg3MTM3NDcsMTguMzg1ODc2IEwxNCwyMSBMMTAsMjEgTDkuMTI4NjI1MzMsMTguMzg1ODc2IEM4LjY5NjI5Mjk4LDE4LjE5MTE3NzkgOC4yODcyOTEyMywxNy45NTM4NjU4IDcuOTA2OTcxMywxNy42NzkyOTEgTDUuMjA1NzcxMzcsMTguMjMyMDUwOCBMMy4yMDU3NzEzNywxNC43Njc5NDkyIEw1LjAzNTA2NDI5LDEyLjcwNTAzMzkgWiIvPiA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxIi8+IDwvc3ZnPg==);
  /* #036 */
  --note-icon-table-blue: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgYXJpYS1sYWJlbGxlZGJ5PSJ0YWJsZUhvcml6b250YWxJY29uVGl0bGUiIHN0cm9rZT0iIzAwMzM2NiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBmaWxsPSJub25lIiBjb2xvcj0iIzAwMzM2NiI+IDx0aXRsZSBpZD0idGFibGVIb3Jpem9udGFsSWNvblRpdGxlIj5EYXRhIHRhYmxlPC90aXRsZT4gPHBhdGggZD0iTTIyIDRWMTlIMkwyIDRMMjIgNFoiLz4gPGxpbmUgeDE9IjIyIiB5MT0iOSIgeDI9IjIiIHkyPSI5Ii8+IDxsaW5lIHgxPSIyMiIgeTE9IjE0IiB4Mj0iMiIgeTI9IjE0Ii8+IDxwYXRoIGQ9Ik0xMiAxOUwxMiA0Ii8+IDwvc3ZnPg==);
  /* #333 */
  --note-icon-board-gray: url(data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWxhYmVsbGVkYnk9ImRhc2hib2FyZEljb25UaXRsZSIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIGZpbGw9Im5vbmUiIGNvbG9yPSIjMzMzMzMzIj4gPHRpdGxlIGlkPSJkYXNoYm9hcmRJY29uVGl0bGUiPkRhc2hib2FyZDwvdGl0bGU+IDxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgeD0iMiIgeT0iMiIvPiA8cGF0aCBkPSJNMTEgN0wxNyA3TTExIDEyTDE3IDEyTTExIDE3TDE3IDE3Ii8+IDxsaW5lIHgxPSI3IiB5MT0iNyIgeDI9IjciIHkyPSI3Ii8+IDxsaW5lIHgxPSI3IiB5MT0iMTIiIHgyPSI3IiB5Mj0iMTIiLz4gPGxpbmUgeDE9IjciIHkxPSIxNyIgeDI9IjciIHkyPSIxNyIvPiA8L3N2Zz4=);
  --note-icon-search-blue: url(data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWxhYmVsbGVkYnk9InNlYXJjaEljb25UaXRsZSIgc3Ryb2tlPSJyZ2JhKDI5LDE2MSwyNDIsMS4wMCkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgZmlsbD0ibm9uZSIgY29sb3I9InJnYmEoMjksMTYxLDI0MiwxLjAwKSI+IDx0aXRsZSBpZD0ic2VhcmNoSWNvblRpdGxlIj5TZWFyY2g8L3RpdGxlPiA8cGF0aCBkPSJNMTQuNDEyMTEyMiwxNC40MTIxMTIyIEwyMCwyMCIvPiA8Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSI2Ii8+IDwvc3ZnPg==);
  --note-icon-close-gray: url(data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWxhYmVsbGVkYnk9ImNsb3NlSWNvblRpdGxlIiBzdHJva2U9IiM2NjYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBmaWxsPSJub25lIiBjb2xvcj0iIzY2NiI+IDx0aXRsZSBpZD0iY2xvc2VJY29uVGl0bGUiPkNsb3NlPC90aXRsZT4gPHBhdGggZD0iTTYuMzQzMTQ1NzUgNi4zNDMxNDU3NUwxNy42NTY4NTQyIDE3LjY1Njg1NDJNNi4zNDMxNDU3NSAxNy42NTY4NTQyTDE3LjY1Njg1NDIgNi4zNDMxNDU3NSIvPiA8L3N2Zz4=);
  /* #ffc */
  --note-icon-edit-yellow: url(data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWxhYmVsbGVkYnk9ImVkaXRJY29uVGl0bGUiIHN0cm9rZT0iI0ZGRkZDQyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBmaWxsPSJub25lIiBjb2xvcj0iI0ZGRkZDQyI+IDx0aXRsZSBpZD0iZWRpdEljb25UaXRsZSI+RWRpdDwvdGl0bGU+IDxwYXRoIGQ9Ik0xOC40MTQyMTM2IDQuNDE0MjEzNTZMMTkuNTg1Nzg2NCA1LjU4NTc4NjQ0QzIwLjM2NjgzNSA2LjM2NjgzNTAyIDIwLjM2NjgzNSA3LjYzMzE2NDk4IDE5LjU4NTc4NjQgOC40MTQyMTM1Nkw4IDIwIDQgMjAgNCAxNiAxNS41ODU3ODY0IDQuNDE0MjEzNTZDMTYuMzY2ODM1IDMuNjMzMTY0OTggMTcuNjMzMTY1IDMuNjMzMTY0OTggMTguNDE0MjEzNiA0LjQxNDIxMzU2ek0xNCA2TDE4IDEwIi8+IDwvc3ZnPg==);
  /* #2329d6 */
  --note-icon-edit-blue: url(data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWxhYmVsbGVkYnk9ImVkaXRJY29uVGl0bGUiIHN0cm9rZT0iIzIzMjlENiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBmaWxsPSJub25lIiBjb2xvcj0iIzIzMjlENiI+IDx0aXRsZSBpZD0iZWRpdEljb25UaXRsZSI+RWRpdDwvdGl0bGU+IDxwYXRoIGQ9Ik0xOC40MTQyMTM2IDQuNDE0MjEzNTZMMTkuNTg1Nzg2NCA1LjU4NTc4NjQ0QzIwLjM2NjgzNSA2LjM2NjgzNTAyIDIwLjM2NjgzNSA3LjYzMzE2NDk4IDE5LjU4NTc4NjQgOC40MTQyMTM1Nkw4IDIwIDQgMjAgNCAxNiAxNS41ODU3ODY0IDQuNDE0MjEzNTZDMTYuMzY2ODM1IDMuNjMzMTY0OTggMTcuNjMzMTY1IDMuNjMzMTY0OTggMTguNDE0MjEzNiA0LjQxNDIxMzU2ek0xNCA2TDE4IDEwIi8+IDwvc3ZnPg==);
  /* #ffc */
  --note-icon-delete-yellow: url(data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWxhYmVsbGVkYnk9ImJpbkljb25UaXRsZSIgc3Ryb2tlPSIjRkZGRkNDIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIGZpbGw9Im5vbmUiIGNvbG9yPSIjRkZGRkNDIj4gPHRpdGxlIGlkPSJiaW5JY29uVGl0bGUiPkJpbjwvdGl0bGU+IDxwYXRoIGQ9Ik0xOSA2TDUgNk0xNCA1TDEwIDVNNiAxMEw2IDIwQzYgMjAuNjY2NjY2NyA2LjMzMzMzMzMzIDIxIDcgMjEgNy42NjY2NjY2NyAyMSAxMSAyMSAxNyAyMSAxNy42NjY2NjY3IDIxIDE4IDIwLjY2NjY2NjcgMTggMjAgMTggMTkuMzMzMzMzMyAxOCAxNiAxOCAxMCIvPiA8L3N2Zz4=);
  /* #2329d6 */
  --note-icon-delete-blue: url(data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWxhYmVsbGVkYnk9ImJpbkljb25UaXRsZSIgc3Ryb2tlPSIjMjMyOUQ2IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIGZpbGw9Im5vbmUiIGNvbG9yPSIjMjMyOUQ2Ij4gPHRpdGxlIGlkPSJiaW5JY29uVGl0bGUiPkJpbjwvdGl0bGU+IDxwYXRoIGQ9Ik0xOSA2TDUgNk0xNCA1TDEwIDVNNiAxMEw2IDIwQzYgMjAuNjY2NjY2NyA2LjMzMzMzMzMzIDIxIDcgMjEgNy42NjY2NjY2NyAyMSAxMSAyMSAxNyAyMSAxNy42NjY2NjY3IDIxIDE4IDIwLjY2NjY2NjcgMTggMjAgMTggMTkuMzMzMzMzMyAxOCAxNiAxOCAxMCIvPiA8L3N2Zz4=);
  /* #ffc */
  --note-icon-ok-yellow: url(data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWxhYmVsbGVkYnk9ImNpcmNsZU9rSWNvblRpdGxlIiBzdHJva2U9IiNGRkZGQ0MiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgZmlsbD0ibm9uZSIgY29sb3I9IiNGRkZGQ0MiPiA8dGl0bGUgaWQ9ImNpcmNsZU9rSWNvblRpdGxlIj5PSzwvdGl0bGU+IDxwb2x5bGluZSBwb2ludHM9IjcgMTMgMTAgMTYgMTcgOSIvPiA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPiA8L3N2Zz4=);
  /* #2329d6 */
  --note-icon-ok-blue: url(data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWxhYmVsbGVkYnk9ImNpcmNsZU9rSWNvblRpdGxlIiBzdHJva2U9IiMyMzI5RDYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgZmlsbD0ibm9uZSIgY29sb3I9IiMyMzI5RDYiPiA8dGl0bGUgaWQ9ImNpcmNsZU9rSWNvblRpdGxlIj5PSzwvdGl0bGU+IDxwb2x5bGluZSBwb2ludHM9IjcgMTMgMTAgMTYgMTcgOSIvPiA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPiA8L3N2Zz4=);
  /* #fff */
  --note-icon-chevron-right-white: url(data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWxhYmVsbGVkYnk9ImNoZXZyb25SaWdodEljb25UaXRsZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIGZpbGw9Im5vbmUiIGNvbG9yPSIjZmZmIj4gPHRpdGxlIGlkPSJjaGV2cm9uUmlnaHRJY29uVGl0bGUiPkNoZXZyb24gUmlnaHQ8L3RpdGxlPiA8cG9seWxpbmUgcG9pbnRzPSIxMCA2IDE2IDEyIDEwIDE4IDEwIDE4Ii8+IDwvc3ZnPg==);
  /* #000 */
  --note-icon-chevron-right-black: url(data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWxhYmVsbGVkYnk9ImNoZXZyb25SaWdodEljb25UaXRsZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIGZpbGw9Im5vbmUiIGNvbG9yPSIjMDAwIj4gPHRpdGxlIGlkPSJjaGV2cm9uUmlnaHRJY29uVGl0bGUiPkNoZXZyb24gUmlnaHQ8L3RpdGxlPiA8cG9seWxpbmUgcG9pbnRzPSIxMCA2IDE2IDEyIDEwIDE4IDEwIDE4Ii8+IDwvc3ZnPg==);
}

.note-obj-vue-module {
  position: absolute;
  left: 0;
  top: 0;
}
.note-obj-popver-frame-dialog {
  position: absolute;
  max-width: 300px;
  min-width: 200px;
  top: 0px;
  left: 0px;
  display: block;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: 6px;
  box-shadow: -5px 5px 10px rgba(0, 0, 0, .2);
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 1px;
  z-index: 9999;
}
.note-obj-interface-dark .note-obj-popver-frame-dialog {
  background-color: #38526d;
  color: #fff;
}
.note-obj-interface-bright .note-obj-popver-frame-dialog {
  background-color: #fff;
  color: #000;
}
.note-obj-popover-frame-header {
  text-align: center;
  padding: 5px 10px;
  font-weight: bold;
  border-radius: 5px 5px 0px 0px;
  margin: 0px;
}
.note-obj-interface-dark .note-obj-popover-frame-header {
  background-color: rgba(0, 0, 0, .2);
  border-bottom: 1px solid rgba(0, 0, 0, .5);
}
.note-obj-interface-bright .note-obj-popover-frame-header {
  background-color: #efefef;
  border-bottom: 1px solid #dbdbdb;
}
.note-obj-popover-frame-content {
  padding: 0px 1px;
  max-height: 405px;
  overflow: auto;
  text-align: left;
}
.note-obj-popover-frame-item,
.note-obj-popover-frame-item-deepen {
  height: 25px;
  cursor: pointer;
  padding: 2px 5px;
  font-size: 14px;
  line-height: 150%;
  margin: 0px;
  display: block;
  text-decoration: none;
}
.note-obj-interface-dark .note-obj-popover-frame-item {
  background-color: rgba(0, 0, 0, .2);
  color: #549be2;
}
.note-obj-interface-bright .note-obj-popover-frame-item {
  background-color: #fafafa;
  color: #336699;
}
.note-obj-interface-dark .note-obj-popover-frame-item-deepen {
  background-color: rgba(0, 0, 0, .3);
  color: #549be2;
}
.note-obj-interface-bright .note-obj-popover-frame-item-deepen {
  background-color: #f3f3f3;
  color: #336699;
}
.note-obj-popover-frame-arrow
{
  border-color: transparent;
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, .25);
  left: -20px;
  border-width: 10px;
  position: absolute;
  display: block;
  width: 0px;
  height: 0px;
  border-style: solid;
  box-sizing: border-box;
  top: 30px;
}
.note-obj-popover-frame-arrow::after {
  content: "";
  left: 1px;
  border-width: 9px;
  border-color: transparent;
  border-left-width: 0px;
  margin-top: -9px;
  display: block;
  width: 0px;
  height: 0px;
  border-style: solid;
  position: absolute;
  box-sizing: border-box;
}
.note-obj-interface-dark .note-obj-popover-frame-arrow::after {
  border-right-color: #38526d;
}
.note-obj-interface-bright .note-obj-popover-frame-arrow::after {
  border-right-color: #fff;
}
.note-obj-search-expand-box {
  bottom: 0px;
  right: 0px;
  height: 80px;
  width: 100px;
  position: fixed;
  display: block;
  z-index: 99998;
}
.note-obj-search-expand-span {
  border-radius: 99px;
  color: #fff;
  cursor: pointer;
  display: block;
  font-size: 13px;
  height: 38px;
  width: 38px;
  line-height: 100%;
  margin: 5px 0px;
  opacity: 0.8;
  text-align: center;
  z-index: 99999;
  user-select: none;
  background-repeat: no-repeat;
  background-size: 24px auto;
  background-position: center;
}
.note-obj-search-expand-span:hover {
  box-shadow: 0 0 5px 1px green;
}
.note-obj-search-expand-span {
  position: absolute;
  bottom: 15px;
  right: -30px;
  border: 1px solid #00a1d6;
  background-image: var(--note-icon-search-blue);
  transition: all .5s;
}
.note-obj-search-expand-box:hover .note-obj-search-expand-span {
  right: 25px;
  opacity: 1;
}
.note-obj-search-frame-presentation {
  display: flex;
  position: fixed;
  background-color: rgba(0, 0, 0, .5);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100000;
  align-items: center;
  justify-content: center;
}
.note-obj-search-frame-dialog {
  position: relative;
  bottom: 25%;
}
.note-obj-search-frame-input {
  width: 350px;
  height: 40px;
  border-radius: 40px;
  padding: 0px 20px;
  position: relative;
  outline: none;
  box-sizing: content-box;
}
.note-obj-interface-dark .note-obj-search-frame-input {
  background-color: rgb(37, 51, 65);
  color: #fff;
  border: 2px solid #000;
}
.note-obj-interface-bright .note-obj-search-frame-input {
  background-color: #f7f7f7;
  color: #000;
  border: 2px solid #787878;
}
.note-obj-search-frame-close-btn {
  position: absolute;
  right: 2px;
  top: 10px;
  z-index: 100000;
  background-image: var(--note-icon-close-gray);
  background-repeat: no-repeat;
  background-size: 24px auto;
  background-position: center;
  height: 24px;
  width: 24px;
  display: block;
  cursor: pointer;
}
.note-obj-search-frame-index-trapezoid {
  display: block;
  position: absolute;
  z-index: 100000;
  left: 20px;
  top: -25px;
  height: 0px;
  width: 350px;
  background: transparent;
  border-top: 0px solid transparent;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  padding: 0px;
  margin: 0px;
  text-align: center;
  box-sizing: border-box;
}
.note-obj-interface-dark .note-obj-search-frame-index-trapezoid {
  border-bottom: 25px solid rgb(37, 51, 65);
}
.note-obj-interface-bright .note-obj-search-frame-index-trapezoid {
  border-bottom: 25px solid #f7f7f7;
}
.note-obj-search-frame-index-value {
  height: 25px;
  line-height: 25px;
}
.note-obj-interface-dark .note-obj-search-frame-index-value {
  color: #fff;
}
.note-obj-interface-bright .note-obj-search-frame-index-value {
  color: #000;
}
.note-obj-search-frame-tags-list {
  top: 44px;
  left: 20px;
  width: 350px;
  max-height: 250px;
  overflow-y: scroll;
  text-align: left;
  display: block;
  margin: 0px;
  padding: 0px;
  position: absolute;
  z-index: 100000;
  border: 1px solid rgba(29, 161, 242, .1);
  list-style: none;
}
.note-obj-interface-dark .note-obj-search-frame-tags-list {
  background-color: rgb(37, 51, 65);
}
.note-obj-interface-bright .note-obj-search-frame-tags-list {
  background-color: #f7f7f7;
}
.note-obj-search-frame-tags-list li,
.note-obj-search-frame-tags-list a,
.note-obj-search-frame-tags-list a:visited {
  cursor: pointer;
  padding-left: 5px;
  height: 25px;
  line-height: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  text-decoration: none;
}
.note-obj-search-frame-tags-item-text {
  display: inline-block;
  cursor: pointer;
  height: 25px;
  line-height: 25px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  user-select: none;
}
.note-obj-interface-dark .note-obj-search-frame-tags-item-text {
  color: #fff;
}
.note-obj-interface-bright .note-obj-search-frame-tags-item-text {
  color: #000;
}
.note-obj-search-frame-tags-list-item-highlight {
  background-color: #6699cc;
}
.note-obj-add-frame-presentation {
  display: flex;
  position: fixed;
  background-color: rgba(0, 0, 0, .5);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100001;
  align-items: center;
  justify-content: center;
}
.note-obj-add-frame-dialog {
  position: relative;
  width: 400px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  border: 0px solid #000;
  box-shadow: 0 1px 10px rgba(0, 0, 0, .8);
}
.note-obj-interface-dark .note-obj-add-frame-dialog {
  background-color: rgb(21, 32, 43);
}
.note-obj-interface-bright .note-obj-add-frame-dialog {
  background-color: #fff;
}
.note-obj-add-frame-user-info {
  min-height: 48px;
  text-align: center;
  color: #1da1f2;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  white-space: normal;
  cursor: text;
  user-select: text;
  line-height: 24px;
  overflow: hidden;
  word-wrap: break-word;
  text-overflow: ellipsis;
}
.note-obj-interface-dark .note-obj-add-frame-user-info {
  border: 1px solid rgba(0, 0, 0, .5);
}
.note-obj-interface-bright .note-obj-add-frame-user-info {
  border: 1px solid #efefef;
}
.note-obj-add-frame-user-id,
.note-obj-add-frame-user-name {
  margin: 5px;
  display: block;
}
.note-obj-add-frame-input {
  min-height: 32px;
  margin: 5px;
  border: 1px solid rgba(29, 161, 242, .1);
  padding-left: 5px;
}
.note-obj-interface-dark .note-obj-add-frame-input {
  background-color: #253341;
  color: #fff;
}
.note-obj-interface-bright .note-obj-add-frame-input {
  background-color: #e8e8e8;
  color: #000;
}
.note-obj-add-frame-dialog button {
  min-height: 48px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
}
.note-obj-interface-dark .note-obj-add-frame-dialog button {
  color: #fff;
  border: 1px solid rgba(0, 0, 0, .5);
}
.note-obj-interface-bright .note-obj-add-frame-dialog button {
  color: #000;
  border: 1px solid #efefef;
}
.note-obj-add-frame-dialog button:hover {
  color: #1da1f2;
}
.note-obj-add-frame-button-bottom {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}
.note-obj-management-frame-presentation,
.note-obj-group-frame-presentation {
  display: flex;
  position: fixed;
  background-color: rgba(0, 0, 0, .5);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
}
.note-obj-management-frame-presentation {
  z-index: 100002;
}
.note-obj-group-frame-presentation {
  z-index: 100003;
}
.note-obj-management-frame-dialog,
.note-obj-group-frame-dialog {
  position: relative;
  min-height: 580px;
  max-height: 600px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 10px rgba(0, 0, 0, .8);
}
.note-obj-management-frame-dialog {
  width: 800px;
}
.note-obj-group-frame-dialog {
  width: 750px;
}
.note-obj-interface-dark .note-obj-management-frame-dialog,
.note-obj-interface-dark .note-obj-group-frame-dialog  {
  background-color: rgb(21, 32, 43);
  border: 1px solid #000;
  color: #fff;
}
.note-obj-interface-bright .note-obj-management-frame-dialog,
.note-obj-interface-bright .note-obj-group-frame-dialog  {
  background-color: #f5f5f5;
  border: 1px solid #e8e8e8;
  color: #000;
}
.note-obj-management-frame-header,
.note-obj-group-frame-header {
  margin: 20px 15px;
}
.note-obj-management-frame-header input[type="text"],
.note-obj-group-frame-header input[type="text"] {
  color: #000;
  width: 25%;
  padding-left: 5px;
  margin: 0px 5px;
}
.note-obj-management-frame-header select,
.note-obj-group-frame-header select {
  cursor: pointer;
  color: #000;
}
.note-obj-management-frame-header select option,
.note-obj-group-frame-header select option {
  color: #000;
}
.note-obj-management-frame-header select + label {
  margin-left: 5px;
}
.note-obj-management-frame-show-number,
.note-obj-group-frame-show-number {
  margin: 0px 5px;
  float: right;
}
.note-obj-management-frame-content,
.note-obj-group-frame-content {
  margin: 0px 10px;
  min-height: 420px;
}
.note-obj-management-frame-content table,
.note-obj-group-frame-content table {
  border: 1px solid #ccc;
  text-align: center;
  table-layout: fixed;
  border-collapse: collapse;
}
.note-obj-management-frame-content table {
  width: 760px;
}
.note-obj-group-frame-content table {
  width: 710px;
}
.note-obj-management-frame-content table tr td,
.note-obj-management-frame-content table tr th,
.note-obj-group-frame-content table tr td,
.note-obj-group-frame-content table tr th {
  border: 1px solid #ccc;
  height: 25px;
  line-height: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0px;
  margin: 0px;
  text-align: center;
}
.note-obj-management-frame-content table tr th,
.note-obj-group-frame-content table tr th {
  font-weight: bold;
}
.note-obj-management-frame-content table tr th:nth-of-type(1),
.note-obj-management-frame-content table tr td:nth-of-type(1) {
  width: 5%;
}
.note-obj-management-frame-content table tr th:nth-of-type(2),
.note-obj-management-frame-content table tr td:nth-of-type(2) {
  width: 15%;
}
.note-obj-management-frame-content table tr th:nth-of-type(3),
.note-obj-management-frame-content table tr td:nth-of-type(3) {
  width: 20%;
}
.note-obj-management-frame-content table tr th:nth-of-type(4),
.note-obj-management-frame-content table tr td:nth-of-type(4) {
  width: 26;
}
.note-obj-management-frame-content table tr th:nth-of-type(5),
.note-obj-management-frame-content table tr td:nth-of-type(5) {
  width: 20%;
}
.note-obj-management-frame-content table tr th:nth-of-type(6),
.note-obj-management-frame-content table tr td:nth-of-type(6) {
  width: 7%;
}
.note-obj-management-frame-content table tr th:nth-of-type(7),
.note-obj-management-frame-content table tr td:nth-of-type(7) {
  width: 7%;
}
.note-obj-group-frame-content table tr th:nth-of-type(1),
.note-obj-group-frame-content table tr td:nth-of-type(1) {
  width: 5%;
}
.note-obj-group-frame-content table tr th:nth-of-type(2),
.note-obj-group-frame-content table tr td:nth-of-type(2) {
  width: 31%;
}
.note-obj-group-frame-content table tr th:nth-of-type(3),
.note-obj-group-frame-content table tr td:nth-of-type(3) {
  width: 20%;
}
.note-obj-group-frame-content table tr th:nth-of-type(4),
.note-obj-group-frame-content table tr td:nth-of-type(4) {
  width: 20%;
}
.note-obj-group-frame-content table tr th:nth-of-type(5),
.note-obj-group-frame-content table tr td:nth-of-type(5) {
  width: 10%;
}
.note-obj-group-frame-content table tr th:nth-of-type(6),
.note-obj-group-frame-content table tr td:nth-of-type(6) {
  width: 7%;
}
.note-obj-group-frame-content table tr th:nth-of-type(7),
.note-obj-group-frame-content table tr td:nth-of-type(7) {
  width: 7%;
}
.note-obj-management-frame-content th input[type="checkbox"],
.note-obj-management-frame-content td input[type="checkbox"],
.note-obj-group-frame-content th input[type="checkbox"],
.note-obj-group-frame-content td input[type="checkbox"],
.note-obj-group-frame-content td input[type="color"] {
  cursor: pointer;
}
.note-obj-group-frame-content td input[type="color"] {
  height: 20px;
}
.note-obj-group-frame-content td input[type="number"] {
  width: 80%;
  height: 80%;
}
.note-obj-management-frame-item-a,
.note-obj-management-frame-item-a:visited {
  color: #4e8ac5;
  text-decoration: none;
  cursor: pointer;
}
.note-obj-management-frame-tbody,
.note-obj-group-frame-tbody {
  max-height: 391px;
  overflow: auto;
}
.note-obj-management-frame-group-item {
  display: block;
  text-align: center;
  cursor: pointer;
  border-radius: 0px;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 0px 5px;
}
.note-obj-management-frame-item-input-tag,
.note-obj-group-frame-item-input-value {
  width: calc(100%);
  height: calc(100%);
  border: 0px;
  text-align: center;
  margin: 0px;
  padding: 0px;
}
.note-obj-interface-dark .note-obj-management-frame-item-input-tag,
.note-obj-interface-dark .note-obj-group-frame-item-input-value {
  background-color: rgb(21, 32, 43);
  color: #fff;
}
.note-obj-interface-bright .note-obj-management-frame-item-input-tag,
.note-obj-interface-bright .note-obj-group-frame-item-input-value {
  background-color: #f5f5f5;
  color: #000;
}
.note-obj-management-frame-item-input-edit {
  caret-color: #339933;
}
.note-obj-interface-dark .note-obj-management-frame-item-input-edit {
  color: #ff3;
}
.note-obj-interface-bright .note-obj-management-frame-item-input-edit {
  color: #e86c07;
}
.note-obj-management-frame-item-btn,
.note-obj-group-frame-item-btn {
  display: inline;
  height: 24px;
  width: 24px;
  background-repeat: no-repeat;
  background-size: 20px auto;
  background-position: center;
  cursor: pointer;
  padding: 0px 20px;
}
.note-obj-interface-dark .note-obj-management-frame-item-edit,
.note-obj-interface-dark .note-obj-group-frame-item-edit {
  background-image: var(--note-icon-edit-yellow);
}
.note-obj-interface-bright .note-obj-management-frame-item-edit,
.note-obj-interface-bright .note-obj-group-frame-item-edit {
  background-image: var(--note-icon-edit-blue);
}
.note-obj-interface-dark .note-obj-management-frame-item-delete,
.note-obj-interface-dark .note-obj-group-frame-item-delete {
  background-image: var(--note-icon-delete-yellow);
}
.note-obj-interface-bright .note-obj-management-frame-item-delete,
.note-obj-interface-bright .note-obj-group-frame-item-delete {
  background-image: var(--note-icon-delete-blue);
}
.note-obj-interface-dark .note-obj-management-frame-item-ok,
.note-obj-interface-dark .note-obj-group-frame-item-ok {
  background-image: var(--note-icon-ok-yellow) !important;
}
.note-obj-interface-bright .note-obj-management-frame-item-ok,
.note-obj-interface-bright .note-obj-group-frame-item-ok {
  background-image: var(--note-icon-ok-blue) !important;
}
.note-obj-management-frame-tool,
.note-obj-group-frame-tool {
  display: inline-block;
  margin: 15px 15px 0px 15px;
}
.note-obj-management-frame-tool button,
.note-obj-group-frame-tool button {
  display: inline-block;
  min-width: 50px;
  max-width: 140px;
  cursor: pointer;
  margin-right: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: #fff;
  padding: 0px 5px;
  color: #000;
  border-color: #ddd;
}
.note-obj-management-frame-tool button:not([disabled]):hover,
.note-obj-group-frame-tool button:not([disabled]):hover {
  background-color: #bdbdbd;
}
.note-obj-management-frame-tool button[disabled],
.note-obj-group-frame-tool button[disabled] {
  cursor: not-allowed;
  box-shadow: none;
  opacity: .65;
}
.note-obj-management-frame-footer,
.note-obj-group-frame-footer {
  display: inline-block;
  margin: 15px 15px;
}
.note-obj-management-frame-show-modify-text,
.note-obj-group-frame-show-modify-text,
.note-obj-management-frame-show-wait-text,
.note-obj-group-frame-show-wait-text {
  margin-left: 20px;
}
.note-obj-management-frame-cancel-content,
.note-obj-group-frame-cancel-content {
  border-radius: 5px;
  display: block;
  text-align: center;
  cursor: pointer;
  padding: 5px 10px;
  float: right;
  user-select: none;
  color: #fff;
}
.note-obj-interface-dark .note-obj-management-frame-cancel-content,
.note-obj-interface-dark .note-obj-group-frame-cancel-content {
  background-color: #333;
}
.note-obj-interface-bright .note-obj-management-frame-cancel-content,
.note-obj-interface-bright .note-obj-group-frame-cancel-content {
  background-color: #5b5b5b;
}
.note-obj-interface-dark .note-obj-management-frame-cancel-content:hover,
.note-obj-interface-dark .note-obj-group-frame-cancel-content:hover {
  background-color: #444;
}
.note-obj-interface-bright .note-obj-management-frame-cancel-content:hover,
.note-obj-interface-bright .note-obj-group-frame-cancel-content:hover {
  background-color: #3b3b3b;
}
.note-obj-management-frame-save-content,
.note-obj-group-frame-save-content {
  border-radius: 5px;
  display: block;
  margin-left: 20px;
  text-align: center;
  cursor: pointer;
  background-color: #336699;
  color: #fff;
  padding: 5px 10px;
  float: right;
  user-select: none;
}
.note-obj-management-frame-save-content[disabled],
.note-obj-group-frame-save-content[disabled] {
  cursor: not-allowed;
  box-shadow: none;
  opacity: .65;
}
.note-obj-management-frame-save-content:not([disabled]):hover,
.note-obj-group-frame-save-content:not([disabled]):hover {
  background-color: #4477aa;
}
.note-obj-select-group-frame-presentation {
  display: flex;
  position: fixed;
  background-color: rgba(0, 0, 0, .7);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100004;
  align-items: center;
  justify-content: center;
}
.note-obj-select-group-frame-dialog {
  position: relative;
  width: 350px;
  border: 3px solid #614343;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
}
.note-obj-interface-dark .note-obj-select-group-frame-dialog {
  background-color: #191e23;
}
.note-obj-interface-bright .note-obj-select-group-frame-dialog {
  background-color: #fff;
}
.note-obj-select-group-frame-header {
  margin-top: 10px;
  align-items: center;
  text-align: center;
}
.note-obj-select-group-frame-header-text {
  font-weight: bold;
}
.note-obj-interface-dark .note-obj-select-group-frame-header-text {
  color: #fff;
}
.note-obj-interface-bright .note-obj-select-group-frame-header-text {
  color: #000;
}
.note-obj-select-group-frame-content {
  display: block;
  text-align: center;
  margin: 25px 20px;
  white-space: pre-wrap;
  max-height: 400px;
  overflow: auto;
}
.note-obj-interface-dark .note-obj-select-group-frame-content {
  color: #fff;
}
.note-obj-interface-bright .note-obj-select-group-frame-content {
  color: #000;
}
.note-obj-select-group-frame-footer {
  color: #fff;
  display: inline-block;
  text-align: center;
  margin-bottom: 20px;
}
.note-obj-select-group-frame-footer span {
  cursor: pointer;
  margin: 0px 25px;
  border: 1px solid #666;
  border-radius: 5px;
  padding: 5px 10px;
  background-color: #333;
  user-select: none;
}
.note-obj-select-group-frame-footer span:hover {
  box-shadow: 0 0 10px #339933;
}
.note-obj-select-group-frame-group-item {
  border-radius: 99px;
  cursor: pointer;
  margin: 2px 0px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowarp;
  display: block;
  padding: 2px 10px;
}
.note-obj-new-group-frame-presentation {
  display: flex;
  position: fixed;
  background-color: rgba(0, 0, 0, .8);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100005;
  align-items: center;
  justify-content: center;
}
.note-obj-new-group-frame-dialog {
  position: relative;
  width: 400px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  border: 3px solid #614343;
  box-shadow: 0 1px 10px rgba(0, 0, 0, .8);
}
.note-obj-interface-dark .note-obj-new-group-frame-dialog {
  background-color: rgb(21, 32, 43);
}
.note-obj-interface-bright .note-obj-new-group-frame-dialog {
  background-color: #fff;
}
.note-obj-new-group-frame-header {
  min-height: 48px;
  text-align: center;
  color: #1da1f2;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  white-space: normal;
  cursor: text;
  user-select: text;
  line-height: 24px;
  overflow: hidden;
  word-wrap: break-word;
  text-overflow: ellipsis;
}
.note-obj-interface-dark .note-obj-new-group-frame-header {
  border: 1px solid rgba(0, 0, 0, .5);
}
.note-obj-interface-bright .note-obj-new-group-frame-header {
  border: 1px solid #efefef;
}
.note-obj-new-group-frame-title-text {
  margin: 5px;
  display: block;
}
.note-obj-new-group-frame-input {
  min-height: 32px;
  margin: 5px;
  border: 1px solid rgba(29, 161, 242, .1);
  padding-left: 5px;
}
.note-obj-interface-dark .note-obj-new-group-frame-input {
  background-color: #253341;
  color: #fff;
}
.note-obj-interface-bright .note-obj-new-group-frame-input {
  background-color: #e8e8e8;
  color: #000;
}
.note-obj-new-group-frame-color-label,
.note-obj-new-group-frame-dialog button {
  min-height: 48px;
  background-color: rgba(0, 0, 0, 0);
}
.note-obj-interface-dark .note-obj-new-group-frame-color-label,
.note-obj-interface-dark .note-obj-new-group-frame-dialog button {
  color: #fff;
  border: 1px solid rgba(0, 0, 0, .5);
}
.note-obj-interface-bright .note-obj-new-group-frame-color-label,
.note-obj-interface-bright .note-obj-new-group-frame-dialog button {
  color: #000;
  border: 1px solid #efefef;
}
.note-obj-new-group-frame-color-label {
  text-align: center;
  align-items: center;
  line-height: 48px;
  display: block;
}
.note-obj-new-group-frame-color-label input[type="color"] {
  cursor: pointer;
  margin-left: 10px;
}
.note-obj-new-group-frame-color-label input[type="number"] {
  margin-left: 10px;
}
.note-obj-new-group-frame-dialog button {
  cursor: pointer;
}
.note-obj-new-group-frame-dialog button:hover {
  color: #1da1f2;
}
.note-obj-new-group-frame-button-bottom {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}
.note-obj-settings-frame-presentation {
  display: flex;
  position: fixed;
  background-color: rgba(0, 0, 0, .8);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100006;
  align-items: center;
  justify-content: center;
}
.note-obj-settings-frame-card-enter-active,
.note-obj-settings-frame-card-leave-active {
  transition: all .5s ease;
}
.note-obj-settings-frame-card-enter,
.note-obj-settings-frame-card-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
.note-obj-settings-frame-card {
  display: flex;
  flex-direction: column;
  width: 450px;
  max-width: 100%;
  max-height: 100%;
  margin: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  bottom: 0px;
  border: 0px;
  border-radius: 0px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .2);
}
.note-obj-interface-dark .note-obj-settings-frame-card {
  background-color: rgb(21, 32, 43);
  color: #fff;
}
.note-obj-interface-bright .note-obj-settings-frame-card {
  background-color: #fff;
  color: #000;
}
.note-obj-settings-frame-header {
  padding: 16px;
  display: block;
}
.note-obj-interface-dark .note-obj-settings-frame-header {
  border-bottom: 2px solid #000;
}
.note-obj-interface-bright .note-obj-settings-frame-header {
  border-bottom: 2px solid #ccc;
}
.note-obj-settings-frame-headline {
  font-size: 16px;
  font-weight: bold;
  float: left;
  line-height: 100%;
}
.note-obj-settings-frame-close-btn {
  width: 24px;
  height: 24px;
  cursor: pointer;
  background-image: var(--note-icon-close-gray);
  background-size: 24px auto;
  background-repeat: no-repeat;
  background-position: center;
  float: right;
}
.note-obj-settings-frame-body {
  overflow: auto;
  display: block;
  padding: 20px;
  flex-grow: 1;
  flex-shrink: 1;
}
.note-obj-settings-frame-body input[type="checkbox"],
.note-obj-settings-frame-body .note-obj-settings-checkbox-label,
.note-obj-settings-frame-body input[type="radio"],
.note-obj-settings-frame-body .note-obj-settings-radio-label {
  cursor: pointer;
}
.note-obj-settings-frame-header-icon {
  width: 16px;
  height: 16px;
  background-size: 16px auto;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  right: 10px;
  top: 10px;
  transition: transform .5s;
}
.note-obj-interface-dark .note-obj-settings-frame-header-icon {
  background-image: var(--note-icon-chevron-right-white);
}
.note-obj-interface-bright .note-obj-settings-frame-header-icon {
  background-image: var(--note-icon-chevron-right-black);
}
.note-obj-settings-frame-content {
  border: 1px solid #333;
  margin: 10px;
}
.note-obj-settings-frame-header-icon-romote {
  transform: rotate(90deg);
}
.note-obj-settings-frame-flod {
  border: 1px solid #666;
}
.note-obj-settings-frame-flod > header {
  cursor: pointer;
  min-height: 40px;
  display: flex;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, .2);
}
.note-obj-interface-dark .note-obj-settings-frame-flod > header {
  background-color: #363636;
  position: relative;
}
.note-obj-interface-bright .note-obj-settings-frame-flod > header {
  background-color: #ddd;
  position: relative;
}
.note-obj-settings-frame-flod > header > span {
  font-weight: 500;
  padding: 10px;
  margin: 0;
  border: 0;
  width: 100%;
}
.note-obj-settings-frame-content-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 8px;
}
.note-obj-settings-frame-content-section input[type="text"] {
  margin: 0px 10px;
  width: 100%;
  color: #000;
}
.note-obj-settings-frame-content-section a,
.note-obj-settings-frame-content-section a:visited {
  color: #4e8ac5;
  margin-left: 10px;
  text-decoration: none;
}
.note-obj-settings-frame-content-section p {
  margin: 0px 0px 0px 10px;
}
.note-obj-settings-frame-content-section input[type="checkbox"] {
  clip: rect(0, 0, 0, 0);
  position: absolute;
}
.note-obj-settings-frame-content-section input[type="checkbox"] + label {
  padding-left: 50px;
  position: relative;
}
.note-obj-settings-frame-content-section input[type="checkbox"] + label::before {
  content: "";
  position: absolute;
  left: 0px;
  margin-top: 1px;
  border: 1px solid #ddd;
  border-radius: 100px;
  cursor: pointer;
  display: inline-block;
  width: 2.5em;
  height: 1em;
  transition: border .4s, box-shadow .4s;
  background-color: #fff;
  border-color: #e9e9e9;
  box-shadow: 0px 0px 0px 0px inset #e9e9e9;
  box-sizing: content-box;
}
.note-obj-settings-frame-content-section input[type="checkbox"] + label::after {
  content: "";
  cursor: pointer;
  position: absolute;
  top: 2px;
  left: 0px;
  width: 1em;
  height: 1em;
  transition: background-color .4s, left .2s;
  border-radius: 100px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .4);
}
.note-obj-settings-frame-content-section input[type="checkbox"]:checked + label::before {
  content: "";
  position: absolute;
  left: 0px;
  margin-top: 1px;
  border: 1px solid #ddd;
  border-radius: 100px;
  cursor: pointer;
  display: inline-block;
  width: 2.5em;
  height: 1em;
  transition: border .4s, box-shadow .4s, background-color 1.2s;
  background-color: #3c81df;
  border-color: #3c81df;
  box-shadow: 0px 0px 0px 12px inset #3c81df;
  box-sizing: content-box;
}
.note-obj-settings-frame-content-section input[type="checkbox"]:checked + label::after {
  content: "";
  cursor: pointer;
  position: absolute;
  top: 2px;
  left: 1.5em;
  width: 1em;
  height: 1em;
  transition: background-color .4s, left .2s;
  border-radius: 100px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .4);
}
.note-obj-settings-frame-content-section input[type="radio"] {
  clip: rect(0, 0, 0, 0);
  position: absolute;
}
.note-obj-settings-frame-content-section input[type="radio"] + label {
  user-select: none;
  white-space: nowrap;
  padding: 3px 5px;
  color: #fff;
  background-color: #333;
}
.note-obj-settings-frame-content-section input[type="radio"]:checked + label {
  user-select: none;
  white-space: nowrap;
  padding: 3px 5px;
  color: #fff;
  background-color: #3c81df;
}
.note-obj-settings-frame-content-section button {
  padding: 1px 6px;
  margin: 2px 10px;
  cursor: pointer;
  background-color: #fff;
  color: #000;
}
.note-obj-setttings-frame-before-input-text {
  white-space: nowrap;
}
.note-obj-settings-frame-radio-config-text,
.note-obj-settings-frame-before-select-text {
  margin-right: 10px;
}
.note-obj-settings-frame-footer {
  padding: 16px;
  display: block;
  position: relative;
}
.note-obj-settings-frame-component-package,
.note-obj-settings-frame-component-package-input-text {
  display: flex;
  flex-flow: row;
}
.note-obj-settings-frame-component-package {
  max-width: 350px;
}
.note-obj-settings-frame-component-package-input-text {
  max-width: 250px;
}
.note-obj-settings-frame-component-package select {
  cursor: pointer;
  color: #000;
}
.note-obj-settings-frame-component-package select option {
  color: #000;
}
.note-obj-interface-dark .note-obj-settings-frame-footer {
  border-top: 2px solid #000;
}
.note-obj-interface-bright .note-obj-settings-frame-footer {
  border-top: 2px solid #ccc;
}
.note-obj-settings-frame-footer button {
  float: left;
  padding: 2px 5px;
  margin: 0px 5px;
  cursor: pointer;
  background-color: #fff;
  color: #000;
}
.note-obj-settings-frame-footer button:hover {
  background-color: #ddd;
}
.note-obj-message-frame-presentation {
  max-width: 320px;
  position: fixed;
  top: 20px;
  right: 0px;
  z-index: 100008;
  pointer-events: none;
}
.note-obj-message-frame-notifaction {
  display: block;
  box-sizing: inherit;
  box-shadow: 0 1px 4px rgba(0,0,0,.2);
  background-color: #333366;
  color: #fff;
  margin: 10px;
  position: relative;
  min-width: 240px;
  backface-visibility: hidden;
  pointer-events: all;
  border-radius: 3px;
  padding: 16px 20px;
}
.note-obj-message-frame-notifaction-enter-active,
.note-obj-message-frame-notifaction-leave-active {
  transition: all .5s;
}
.note-obj-message-frame-notifaction-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.note-obj-message-frame-notifaction-leave-to {
  opacity: 0;
}
.note-obj-message-frame-close-btn {
  position: absolute;
  right: 4px;
  top: 4px;
  width: 16px;
  height: 16px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .5);
  cursor: pointer;
  background-image: var(--note-icon-close-gray);
  background-size: 16px auto;
  background-repeat: no-repeat;
  background-position: center;
}
.note-obj-message-frame-content {
  margin-top: 5px;
}
`),o&&fe.addStyle(o),this.store.searchBtnClassName=r,this.store.searchBtnBoxClassName=a,this.store.scriptInfo.author=u,this.store.scriptInfo.version=b,this.store.scriptInfo.updated=x,p&&(this.store.scriptInfo.url=p),l&&this.store.scriptInfo.library.push(...l),c&&this.store.scriptInfo.icons.push(...c),T&&(this.store.defaultColor.primaryColor=T),B&&(this.store.defaultColor.secondaryColor=B),typeof i=="function"&&(this.store.itemClick=i),typeof s=="function"&&(this.store.changeEvent=s),h&&this.store.initOtherConfigInfo(h),F.mount("#"+k)}getOtherConfig(){return Object.assign({},this.store.config.other)}judgeUsers(t){return this.store.judgeUsers(t)}createNoteBtn(t,n,o=[],r="div"){const a=document.createElement(r);return a.className=Gt.btnClassName,o.length>0&&a.classList.add(...o),a.title=this.store.i18n.query("editTitle"),a.addEventListener("click",i=>{i.stopPropagation(),this.store.showAdd(t,n)}),a}handler(t,n,o,r={},a){const{add:i,className:s=[],restore:l}=r;if(i)if(o){const c=n.querySelector(o);if(c){const u=c.querySelector("."+Gt.tagClassName);u&&u.remove(),!l&&this.insertNoteTag(c,t,r,i,s,a)}}else{const c=n.querySelector("."+Gt.tagClassName);c&&c.remove(),!l&&this.insertNoteTag(n,t,r,i,s,a)}else if(o){const c=n.querySelector(o);c&&(l?this.restoreElement(c,t,r):this.updateElement(c,t,r,a))}else l?this.restoreElement(n,t,r):this.updateElement(n,t,r,a)}restoreElement(t,n,o={}){const{maskPrimaryColor:r,maskHover:a,title:i,className:s=[]}=o;t.textContent=di(n,o),r||this.store.config.addNote.showNoteGroupColor&&t.style.setProperty("color",""),a||(t.onmouseenter=null,t.onmouseleave=null),i&&(t.title=""),s.length>0&&t.classList.remove(...s)}updateElement(t,n,o={},r){const{maskPrimaryColor:a,title:i,offsetWidth:s=0,offsetHeight:l=0,maskHover:c,className:u=[],...p}=o,b=this.store.getUserTag(n,p);b&&(t.textContent=b,a||(this.store.config.addNote.showNoteGroupColor?t.style.setProperty("color",this.store.getPrimaryColor(n),"important"):t.style.setProperty("color","")),c||(t.onmouseenter=()=>{const x=Jr(t),h=$r(t);this.store.showPopover(n,x+s,h+l)},t.onmouseleave=()=>{this.store.hidePopover()}),i&&(t.title=n),u.length>0&&t.classList.add(...u),this.store.updateUserName(n,r))}insertNoteTag(t,n,o={},r="span",a=[],i){const{maskPrimaryColor:s,maskSecondaryColor:l,offsetWidth:c=0,offsetHeight:u=0,maskHover:p,...b}=o,x=this.store.getUserTag(n,b);if(x){const h=document.createElement(r);h.className=Gt.tagClassName,this.store.config.addNote.showNoteGroupColor&&(s||l?s?l||h.style.setProperty("color",this.store.getSecondaryColor(n),"important"):h.style.setProperty("color",this.store.getPrimaryColor(n),"important"):(h.style.setProperty("background-color",this.store.getPrimaryColor(n),"important"),h.style.setProperty("color",this.store.getSecondaryColor(n),"important"))),a.length>0&&h.classList.add(...a),h.textContent=x,p||(h.onmouseenter=()=>{const T=Jr(h),B=$r(h);this.store.showPopover(n,T+c,B+u)},h.onmouseleave=()=>{this.store.hidePopover()}),this.store.updateUserName(n,i),t.appendChild(h)}}static insertDom(t){const n=document.createElement("div"),o=t+"_vue";return n.className="note-obj-vue-module",n.innerHTML=`<div id="${o}" class="note-obj-vue-div"></div>`,document.body.appendChild(n),o}};let Zt=Gt;St(Zt,"fn",pd),St(Zt,"tagClassName","note-obj-user-tag"),St(Zt,"btnClassName","note-obj-add-note-btn");window.Note_Obj=Zt;
