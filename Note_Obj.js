var Bi=Object.defineProperty;var Wi=(e,t,n)=>t in e?Bi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var st=(e,t,n)=>(Wi(e,typeof t!="symbol"?t+"":t,n),n);function Yo(e,t){const n=Object.create(null),o=e.split(",");for(let r=0;r<o.length;r++)n[o[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function nn(e){if(te(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],r=Se(o)?Zi(o):nn(o);if(r)for(const a in r)t[a]=r[a]}return t}return Se(e)||me(e)?e:void 0}const Ri=/;(?![^(]*\))/g,Hi=/:([^]+)/,Fi=/\/\*.*?\*\//gs;function Zi(e){const t={};return e.replace(Fi,"").split(Ri).forEach(n=>{if(n){const o=n.split(Hi);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function $e(e){let t="";if(Se(e))t=e;else if(te(e))for(let n=0;n<e.length;n++){const o=$e(e[n]);o&&(t+=o+" ")}else if(me(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Yi=Yo("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function yr(e){return!!e||e===""}function bn(e,t){if(e===t)return!0;let n=wr(e),o=wr(t);if(n||o)return!(!n||!o)&&e.getTime()===t.getTime();if(n=mn(e),o=mn(t),n||o)return e===t;if(n=te(e),o=te(t),n||o)return!(!n||!o)&&function(r,a){if(r.length!==a.length)return!1;let s=!0;for(let i=0;s&&i<r.length;i++)s=bn(r[i],a[i]);return s}(e,t);if(n=me(e),o=me(t),n||o){if(!n||!o||Object.keys(e).length!==Object.keys(t).length)return!1;for(const r in e){const a=e.hasOwnProperty(r),s=t.hasOwnProperty(r);if(a&&!s||!a&&s||!bn(e[r],t[r]))return!1}}return String(e)===String(t)}function Ko(e,t){return e.findIndex(n=>bn(n,t))}const H=e=>Se(e)?e:e==null?"":te(e)||me(e)&&(e.toString===ja||!ue(e.toString))?JSON.stringify(e,wa,2):String(e),wa=(e,t)=>t&&t.__v_isRef?wa(e,t.value):Yt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,r])=>(n[`${o} =>`]=r,n),{})}:on(t)?{[`Set(${t.size})`]:[...t.values()]}:!me(t)||te(t)||Sa(t)?t:String(t),ve={},Zt=[],ot=()=>{},Ki=()=>!1,$i=/^on[^a-z]/,Jn=e=>$i.test(e),$o=e=>e.startsWith("onUpdate:"),Ne=Object.assign,Jo=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ji=Object.prototype.hasOwnProperty,ge=(e,t)=>Ji.call(e,t),te=Array.isArray,Yt=e=>Dn(e)==="[object Map]",on=e=>Dn(e)==="[object Set]",wr=e=>Dn(e)==="[object Date]",ue=e=>typeof e=="function",Se=e=>typeof e=="string",mn=e=>typeof e=="symbol",me=e=>e!==null&&typeof e=="object",Ta=e=>me(e)&&ue(e.then)&&ue(e.catch),ja=Object.prototype.toString,Dn=e=>ja.call(e),Xi=e=>Dn(e).slice(8,-1),Sa=e=>Dn(e)==="[object Object]",Xo=e=>Se(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,zn=Yo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Qi=/-(\w)/g,$t=Xn(e=>e.replace(Qi,(t,n)=>n?n.toUpperCase():"")),qi=/\B([A-Z])/g,Ot=Xn(e=>e.replace(qi,"-$1").toLowerCase()),Ia=Xn(e=>e.charAt(0).toUpperCase()+e.slice(1)),fo=Xn(e=>e?`on${Ia(e)}`:""),xn=(e,t)=>!Object.is(e,t),On=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Rn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Hn=e=>{const t=parseFloat(e);return isNaN(t)?e:t},es=e=>{const t=Se(e)?Number(e):NaN;return isNaN(t)?e:t};let Tr;const ts=()=>Tr||(Tr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Re;class ka{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Re,!t&&Re&&(this.index=(Re.scopes||(Re.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Re;try{return Re=this,t()}finally{Re=n}}}on(){Re=this}off(){Re=this.parent}stop(t){if(this._active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Da(e){return new ka(e)}function Ca(){return Re}const Qo=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Na=e=>(e.w&yt)>0,Aa=e=>(e.n&yt)>0,Fn=new WeakMap;let un=0,yt=1;const Io=30;let Je;const Lt=Symbol(""),ko=Symbol("");class qo{constructor(t,n=null,o){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,function(r,a=Re){a&&a.active&&a.effects.push(r)}(this,o)}run(){if(!this.active)return this.fn();let t=Je,n=Tt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Je,Je=this,Tt=!0,yt=1<<++un,un<=Io?(({deps:o})=>{if(o.length)for(let r=0;r<o.length;r++)o[r].w|=yt})(this):jr(this),this.fn()}finally{un<=Io&&(o=>{const{deps:r}=o;if(r.length){let a=0;for(let s=0;s<r.length;s++){const i=r[s];Na(i)&&!Aa(i)?i.delete(o):r[a++]=i,i.w&=~yt,i.n&=~yt}r.length=a}})(this),yt=1<<--un,Je=this.parent,Tt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Je===this?this.deferStop=!0:this.active&&(jr(this),this.onStop&&this.onStop(),this.active=!1)}}function jr(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Tt=!0;const Ma=[];function Jt(){Ma.push(Tt),Tt=!1}function Xt(){const e=Ma.pop();Tt=e===void 0||e}function We(e,t,n){if(Tt&&Je){let o=Fn.get(e);o||Fn.set(e,o=new Map);let r=o.get(n);r||o.set(n,r=Qo()),Va(r)}}function Va(e,t){let n=!1;un<=Io?Aa(e)||(e.n|=yt,n=!Na(e)):n=!e.has(Je),n&&(e.add(Je),Je.deps.push(e))}function dt(e,t,n,o,r,a){const s=Fn.get(e);if(!s)return;let i=[];if(t==="clear")i=[...s.values()];else if(n==="length"&&te(e)){const l=Number(o);s.forEach((c,u)=>{(u==="length"||u>=l)&&i.push(c)})}else switch(n!==void 0&&i.push(s.get(n)),t){case"add":te(e)?Xo(n)&&i.push(s.get("length")):(i.push(s.get(Lt)),Yt(e)&&i.push(s.get(ko)));break;case"delete":te(e)||(i.push(s.get(Lt)),Yt(e)&&i.push(s.get(ko)));break;case"set":Yt(e)&&i.push(s.get(Lt))}if(i.length===1)i[0]&&Do(i[0]);else{const l=[];for(const c of i)c&&l.push(...c);Do(Qo(l))}}function Do(e,t){const n=te(e)?e:[...e];for(const o of n)o.computed&&Sr(o);for(const o of n)o.computed||Sr(o)}function Sr(e,t){(e!==Je||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const ns=Yo("__proto__,__v_isRef,__isVue"),_a=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(mn)),os=er(),rs=er(!1,!0),as=er(!0),Ir=is();function is(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const o=pe(this);for(let a=0,s=this.length;a<s;a++)We(o,0,a+"");const r=o[t](...n);return r===-1||r===!1?o[t](...n.map(pe)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Jt();const o=pe(this)[t].apply(this,n);return Xt(),o}}),e}function ss(e){const t=pe(this);return We(t,0,e),t.hasOwnProperty(e)}function er(e=!1,t=!1){return function(n,o,r){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&r===(e?t?xs:za:t?Pa:La).get(n))return n;const a=te(n);if(!e){if(a&&ge(Ir,o))return Reflect.get(Ir,o,r);if(o==="hasOwnProperty")return ss}const s=Reflect.get(n,o,r);return(mn(o)?_a.has(o):ns(o))?s:(e||We(n,0,o),t?s:we(s)?a&&Xo(o)?s:s.value:me(s)?e?Oa(s):Ut(s):s)}}function Ea(e=!1){return function(t,n,o,r){let a=t[n];if(Qt(a)&&we(a)&&!we(o))return!1;if(!e&&(Zn(o)||Qt(o)||(a=pe(a),o=pe(o)),!te(t)&&we(a)&&!we(o)))return a.value=o,!0;const s=te(t)&&Xo(n)?Number(n)<t.length:ge(t,n),i=Reflect.set(t,n,o,r);return t===pe(r)&&(s?xn(o,a)&&dt(t,"set",n,o):dt(t,"add",n,o)),i}}const Ga={get:os,set:Ea(),deleteProperty:function(e,t){const n=ge(e,t);e[t];const o=Reflect.deleteProperty(e,t);return o&&n&&dt(e,"delete",t,void 0),o},has:function(e,t){const n=Reflect.has(e,t);return mn(t)&&_a.has(t)||We(e,0,t),n},ownKeys:function(e){return We(e,0,te(e)?"length":Lt),Reflect.ownKeys(e)}},ls={get:as,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},cs=Ne({},Ga,{get:rs,set:Ea(!0)}),tr=e=>e,Qn=e=>Reflect.getPrototypeOf(e);function Vn(e,t,n=!1,o=!1){const r=pe(e=e.__v_raw),a=pe(t);n||(t!==a&&We(r,0,t),We(r,0,a));const{has:s}=Qn(r),i=o?tr:n?rr:vn;return s.call(r,t)?i(e.get(t)):s.call(r,a)?i(e.get(a)):void(e!==r&&e.get(t))}function _n(e,t=!1){const n=this.__v_raw,o=pe(n),r=pe(e);return t||(e!==r&&We(o,0,e),We(o,0,r)),e===r?n.has(e):n.has(e)||n.has(r)}function En(e,t=!1){return e=e.__v_raw,!t&&We(pe(e),0,Lt),Reflect.get(e,"size",e)}function kr(e){e=pe(e);const t=pe(this);return Qn(t).has.call(t,e)||(t.add(e),dt(t,"add",e,e)),this}function Dr(e,t){t=pe(t);const n=pe(this),{has:o,get:r}=Qn(n);let a=o.call(n,e);a||(e=pe(e),a=o.call(n,e));const s=r.call(n,e);return n.set(e,t),a?xn(t,s)&&dt(n,"set",e,t):dt(n,"add",e,t),this}function Cr(e){const t=pe(this),{has:n,get:o}=Qn(t);let r=n.call(t,e);r||(e=pe(e),r=n.call(t,e)),o&&o.call(t,e);const a=t.delete(e);return r&&dt(t,"delete",e,void 0),a}function Nr(){const e=pe(this),t=e.size!==0,n=e.clear();return t&&dt(e,"clear",void 0,void 0),n}function Gn(e,t){return function(n,o){const r=this,a=r.__v_raw,s=pe(a),i=t?tr:e?rr:vn;return!e&&We(s,0,Lt),a.forEach((l,c)=>n.call(o,i(l),i(c),r))}}function Ln(e,t,n){return function(...o){const r=this.__v_raw,a=pe(r),s=Yt(a),i=e==="entries"||e===Symbol.iterator&&s,l=e==="keys"&&s,c=r[e](...o),u=n?tr:t?rr:vn;return!t&&We(a,0,l?ko:Lt),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:i?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function ht(e){return function(...t){return e!=="delete"&&this}}function us(){const e={get(r){return Vn(this,r)},get size(){return En(this)},has:_n,add:kr,set:Dr,delete:Cr,clear:Nr,forEach:Gn(!1,!1)},t={get(r){return Vn(this,r,!1,!0)},get size(){return En(this)},has:_n,add:kr,set:Dr,delete:Cr,clear:Nr,forEach:Gn(!1,!0)},n={get(r){return Vn(this,r,!0)},get size(){return En(this,!0)},has(r){return _n.call(this,r,!0)},add:ht("add"),set:ht("set"),delete:ht("delete"),clear:ht("clear"),forEach:Gn(!0,!1)},o={get(r){return Vn(this,r,!0,!0)},get size(){return En(this,!0)},has(r){return _n.call(this,r,!0)},add:ht("add"),set:ht("set"),delete:ht("delete"),clear:ht("clear"),forEach:Gn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=Ln(r,!1,!1),n[r]=Ln(r,!0,!1),t[r]=Ln(r,!1,!0),o[r]=Ln(r,!0,!0)}),[e,n,t,o]}const[ds,ps,fs,gs]=us();function nr(e,t){const n=t?e?gs:fs:e?ps:ds;return(o,r,a)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?o:Reflect.get(ge(n,r)&&r in o?n:o,r,a)}const hs={get:nr(!1,!1)},bs={get:nr(!1,!0)},ms={get:nr(!0,!1)},La=new WeakMap,Pa=new WeakMap,za=new WeakMap,xs=new WeakMap;function Ut(e){return Qt(e)?e:or(e,!1,Ga,hs,La)}function Oa(e){return or(e,!0,ls,ms,za)}function or(e,t,n,o,r){if(!me(e)||e.__v_raw&&(!t||!e.__v_isReactive))return e;const a=r.get(e);if(a)return a;const s=(i=e).__v_skip||!Object.isExtensible(i)?0:function(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}(Xi(i));var i;if(s===0)return e;const l=new Proxy(e,s===2?o:n);return r.set(e,l),l}function ut(e){return Qt(e)?ut(e.__v_raw):!(!e||!e.__v_isReactive)}function Qt(e){return!(!e||!e.__v_isReadonly)}function Zn(e){return!(!e||!e.__v_isShallow)}function Ar(e){return ut(e)||Qt(e)}function pe(e){const t=e&&e.__v_raw;return t?pe(t):e}function qt(e){return Rn(e,"__v_skip",!0),e}const vn=e=>me(e)?Ut(e):e,rr=e=>me(e)?Oa(e):e;function Ua(e){Tt&&Je&&Va((e=pe(e)).dep||(e.dep=Qo()))}function Ba(e,t){const n=(e=pe(e)).dep;n&&Do(n)}function we(e){return!(!e||e.__v_isRef!==!0)}function ye(e){return function(t,n){return we(t)?t:new vs(t,n)}(e,!1)}class vs{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:pe(t),this._value=n?t:vn(t)}get value(){return Ua(this),this._value}set value(t){const n=this.__v_isShallow||Zn(t)||Qt(t);t=n?t:pe(t),xn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:vn(t),Ba(this))}}function m(e){return we(e)?e.value:e}const ys={get:(e,t,n)=>m(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const r=e[t];return we(r)&&!we(n)?(r.value=n,!0):Reflect.set(e,t,n,o)}};function Wa(e){return ut(e)?e:new Proxy(e,ys)}class ws{constructor(t,n,o){this._object=t,this._key=n,this._defaultValue=o,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return t=pe(this._object),n=this._key,(o=Fn.get(t))===null||o===void 0?void 0:o.get(n);var t,n,o}}function Ra(e,t,n){const o=e[t];return we(o)?o:new ws(e,t,n)}var Ha;class Ts{constructor(t,n,o,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Ha]=!1,this._dirty=!0,this.effect=new qo(t,()=>{this._dirty||(this._dirty=!0,Ba(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=o}get value(){const t=pe(this);return Ua(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function jt(e,t,n,o){let r;try{r=o?e(...o):e()}catch(a){qn(a,t,n)}return r}function Ke(e,t,n,o){if(ue(e)){const a=jt(e,t,n,o);return a&&Ta(a)&&a.catch(s=>{qn(s,t,n)}),a}const r=[];for(let a=0;a<e.length;a++)r.push(Ke(e[a],t,n,o));return r}function qn(e,t,n,o=!0){if(t&&t.vnode,t){let r=t.parent;const a=t.proxy,s=n;for(;r;){const l=r.ec;if(l){for(let c=0;c<l.length;c++)if(l[c](e,a,s)===!1)return}r=r.parent}const i=t.appContext.config.errorHandler;if(i)return void jt(i,null,10,[e,a,s])}(function(r,a,s,i=!0){console.error(r)})(e,0,0,o)}Ha="__v_isReadonly";let yn=!1,Co=!1;const Ee=[];let nt=0;const Kt=[];let ct=null,Vt=0;const Fa=Promise.resolve();let ar=null;function eo(e){const t=ar||Fa;return e?t.then(this?e.bind(this):e):t}function ir(e){Ee.length&&Ee.includes(e,yn&&e.allowRecurse?nt+1:nt)||(e.id==null?Ee.push(e):Ee.splice(function(t){let n=nt+1,o=Ee.length;for(;n<o;){const r=n+o>>>1;wn(Ee[r])<t?n=r+1:o=r}return n}(e.id),0,e),Za())}function Za(){yn||Co||(Co=!0,ar=Fa.then(Ka))}function Mr(e,t=yn?nt+1:0){for(;t<Ee.length;t++){const n=Ee[t];n&&n.pre&&(Ee.splice(t,1),t--,n())}}function Ya(e){if(Kt.length){const t=[...new Set(Kt)];if(Kt.length=0,ct)return void ct.push(...t);for(ct=t,ct.sort((n,o)=>wn(n)-wn(o)),Vt=0;Vt<ct.length;Vt++)ct[Vt]();ct=null,Vt=0}}const wn=e=>e.id==null?1/0:e.id,js=(e,t)=>{const n=wn(e)-wn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Ka(e){Co=!1,yn=!0,Ee.sort(js);try{for(nt=0;nt<Ee.length;nt++){const t=Ee[nt];t&&t.active!==!1&&jt(t,null,14)}}finally{nt=0,Ee.length=0,Ya(),yn=!1,ar=null,(Ee.length||Kt.length)&&Ka()}}function Ss(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||ve;let r=n;const a=t.startsWith("update:"),s=a&&t.slice(7);if(s&&s in o){const u=`${s==="modelValue"?"model":s}Modifiers`,{number:d,trim:f}=o[u]||ve;f&&(r=n.map(w=>Se(w)?w.trim():w)),d&&(r=n.map(Hn))}let i,l=o[i=fo(t)]||o[i=fo($t(t))];!l&&a&&(l=o[i=fo(Ot(t))]),l&&Ke(l,e,6,r);const c=o[i+"Once"];if(c){if(e.emitted){if(e.emitted[i])return}else e.emitted={};e.emitted[i]=!0,Ke(c,e,6,r)}}function $a(e,t,n=!1){const o=t.emitsCache,r=o.get(e);if(r!==void 0)return r;const a=e.emits;let s={},i=!1;if(!ue(e)){const l=c=>{const u=$a(c,t,!0);u&&(i=!0,Ne(s,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return a||i?(te(a)?a.forEach(l=>s[l]=null):Ne(s,a),me(e)&&o.set(e,s),s):(me(e)&&o.set(e,null),null)}function Yn(e,t){return!(!e||!Jn(t))&&(t=t.slice(2).replace(/Once$/,""),ge(e,t[0].toLowerCase()+t.slice(1))||ge(e,Ot(t))||ge(e,t))}let Ye=null,Ja=null;function Kn(e){const t=Ye;return Ye=e,Ja=e&&e.type.__scopeId||null,t}function sr(e,t=Ye,n){if(!t||e._n)return e;const o=(...r)=>{o._d&&Ur(-1);const a=Kn(t);let s;try{s=e(...r)}finally{Kn(a),o._d&&Ur(1)}return s};return o._n=!0,o._c=!0,o._d=!0,o}function go(e){const{type:t,vnode:n,proxy:o,withProxy:r,props:a,propsOptions:[s],slots:i,attrs:l,emit:c,render:u,renderCache:d,data:f,setupState:w,ctx:T,inheritAttrs:M}=e;let x,v;const I=Kn(e);try{if(4&n.shapeFlag){const p=r||o;x=tt(u.call(p,p,d,a,w,f,T)),v=l}else{const p=t;x=tt(p.length>1?p(a,{attrs:l,slots:i,emit:c}):p(a,null)),v=t.props?l:Is(l)}}catch(p){gn.length=0,qn(p,e,1),x=ne(Qe)}let h=x;if(v&&M!==!1){const p=Object.keys(v),{shapeFlag:y}=h;p.length&&7&y&&(s&&p.some($o)&&(v=ks(v,s)),h=St(h,v))}return n.dirs&&(h=St(h),h.dirs=h.dirs?h.dirs.concat(n.dirs):n.dirs),n.transition&&(h.transition=n.transition),x=h,Kn(I),x}const Is=e=>{let t;for(const n in e)(n==="class"||n==="style"||Jn(n))&&((t||(t={}))[n]=e[n]);return t},ks=(e,t)=>{const n={};for(const o in e)$o(o)&&o.slice(9)in t||(n[o]=e[o]);return n};function Vr(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let r=0;r<o.length;r++){const a=o[r];if(t[a]!==e[a]&&!Yn(n,a))return!0}return!1}const Ds=e=>e.__isSuspense;function pn(e,t,n=!1){const o=Ie||Ye;if(o){const r=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&ue(t)?t.call(o.proxy):t}}const Pn={};function Ce(e,t,n){return Xa(e,t,n)}function Xa(e,t,{immediate:n,deep:o,flush:r,onTrack:a,onTrigger:s}=ve){const i=Ca()===(Ie==null?void 0:Ie.scope)?Ie:null;let l,c,u=!1,d=!1;if(we(e)?(l=()=>e.value,u=Zn(e)):ut(e)?(l=()=>e,o=!0):te(e)?(d=!0,u=e.some(h=>ut(h)||Zn(h)),l=()=>e.map(h=>we(h)?h.value:ut(h)?Gt(h):ue(h)?jt(h,i,2):void 0)):l=ue(e)?t?()=>jt(e,i,2):()=>{if(!i||!i.isUnmounted)return c&&c(),Ke(e,i,3,[w])}:ot,t&&o){const h=l;l=()=>Gt(h())}let f,w=h=>{c=v.onStop=()=>{jt(h,i,4)}};if(In){if(w=ot,t?n&&Ke(t,i,3,[l(),d?[]:void 0,w]):l(),r!=="sync")return ot;{const h=el();f=h.__watcherHandles||(h.__watcherHandles=[])}}let T=d?new Array(e.length).fill(Pn):Pn;const M=()=>{if(v.active)if(t){const h=v.run();(o||u||(d?h.some((p,y)=>xn(p,T[y])):xn(h,T)))&&(c&&c(),Ke(t,i,3,[h,T===Pn?void 0:d&&T[0]===Pn?[]:T,w]),T=h)}else v.run()};let x;M.allowRecurse=!!t,r==="sync"?x=M:r==="post"?x=()=>Oe(M,i&&i.suspense):(M.pre=!0,i&&(M.id=i.uid),x=()=>ir(M));const v=new qo(l,x);t?n?M():T=v.run():r==="post"?Oe(v.run.bind(v),i&&i.suspense):v.run();const I=()=>{v.stop(),i&&i.scope&&Jo(i.scope.effects,v)};return f&&f.push(I),I}function Cs(e,t,n){const o=this.proxy,r=Se(e)?e.includes(".")?Qa(o,e):()=>o[e]:e.bind(o,o);let a;ue(t)?a=t:(a=t.handler,n=t);const s=Ie;en(this);const i=Xa(r,a.bind(o),n);return s?en(s):Pt(),i}function Qa(e,t){const n=t.split(".");return()=>{let o=e;for(let r=0;r<n.length&&o;r++)o=o[n[r]];return o}}function Gt(e,t){if(!me(e)||e.__v_skip||(t=t||new Set).has(e))return e;if(t.add(e),we(e))Gt(e.value,t);else if(te(e))for(let n=0;n<e.length;n++)Gt(e[n],t);else if(on(e)||Yt(e))e.forEach(n=>{Gt(n,t)});else if(Sa(e))for(const n in e)Gt(e[n],t);return e}function qa(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return cr(()=>{e.isMounted=!0}),ri(()=>{e.isUnmounting=!0}),e}const Fe=[Function,Array],ei={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Fe,onEnter:Fe,onAfterEnter:Fe,onEnterCancelled:Fe,onBeforeLeave:Fe,onLeave:Fe,onAfterLeave:Fe,onLeaveCancelled:Fe,onBeforeAppear:Fe,onAppear:Fe,onAfterAppear:Fe,onAppearCancelled:Fe},setup(e,{slots:t}){const n=fr(),o=qa();let r;return()=>{const a=t.default&&lr(t.default(),!0);if(!a||!a.length)return;let s=a[0];if(a.length>1){for(const M of a)if(M.type!==Qe){s=M;break}}const i=pe(e),{mode:l}=i;if(o.isLeaving)return ho(s);const c=_r(s);if(!c)return ho(s);const u=Tn(c,i,o,n);jn(c,u);const d=n.subTree,f=d&&_r(d);let w=!1;const{getTransitionKey:T}=c.type;if(T){const M=T();r===void 0?r=M:M!==r&&(r=M,w=!0)}if(f&&f.type!==Qe&&(!_t(c,f)||w)){const M=Tn(f,i,o,n);if(jn(f,M),l==="out-in")return o.isLeaving=!0,M.afterLeave=()=>{o.isLeaving=!1,n.update.active!==!1&&n.update()},ho(s);l==="in-out"&&c.type!==Qe&&(M.delayLeave=(x,v,I)=>{ti(o,f)[String(f.key)]=f,x._leaveCb=()=>{v(),x._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=I})}return s}}};function ti(e,t){const{leavingVNodes:n}=e;let o=n.get(t.type);return o||(o=Object.create(null),n.set(t.type,o)),o}function Tn(e,t,n,o){const{appear:r,mode:a,persisted:s=!1,onBeforeEnter:i,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:f,onAfterLeave:w,onLeaveCancelled:T,onBeforeAppear:M,onAppear:x,onAfterAppear:v,onAppearCancelled:I}=t,h=String(e.key),p=ti(n,e),y=(S,D)=>{S&&Ke(S,o,9,D)},k=(S,D)=>{const C=D[1];y(S,D),te(S)?S.every(R=>R.length<=1)&&C():S.length<=1&&C()},A={mode:a,persisted:s,beforeEnter(S){let D=i;if(!n.isMounted){if(!r)return;D=M||i}S._leaveCb&&S._leaveCb(!0);const C=p[h];C&&_t(e,C)&&C.el._leaveCb&&C.el._leaveCb(),y(D,[S])},enter(S){let D=l,C=c,R=u;if(!n.isMounted){if(!r)return;D=x||l,C=v||c,R=I||u}let E=!1;const ee=S._enterCb=oe=>{E||(E=!0,y(oe?R:C,[S]),A.delayedLeave&&A.delayedLeave(),S._enterCb=void 0)};D?k(D,[S,ee]):ee()},leave(S,D){const C=String(e.key);if(S._enterCb&&S._enterCb(!0),n.isUnmounting)return D();y(d,[S]);let R=!1;const E=S._leaveCb=ee=>{R||(R=!0,D(),y(ee?T:w,[S]),S._leaveCb=void 0,p[C]===e&&delete p[C])};p[C]=e,f?k(f,[S,E]):E()},clone:S=>Tn(S,t,n,o)};return A}function ho(e){if(to(e))return(e=St(e)).children=null,e}function _r(e){return to(e)?e.children?e.children[0]:void 0:e}function jn(e,t){6&e.shapeFlag&&e.component?jn(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function lr(e,t=!1,n){let o=[],r=0;for(let a=0;a<e.length;a++){let s=e[a];const i=n==null?s.key:String(n)+String(s.key!=null?s.key:a);s.type===be?(128&s.patchFlag&&r++,o=o.concat(lr(s.children,t,i))):(t||s.type!==Qe)&&o.push(i!=null?St(s,{key:i}):s)}if(r>1)for(let a=0;a<o.length;a++)o[a].patchFlag=-2;return o}function Te(e){return ue(e)?{setup:e,name:e.name}:e}const Un=e=>!!e.type.__asyncLoader,to=e=>e.type.__isKeepAlive;function Ns(e,t){ni(e,"a",t)}function As(e,t){ni(e,"da",t)}function ni(e,t,n=Ie){const o=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(no(t,o,n),n){let r=n.parent;for(;r&&r.parent;)to(r.parent.vnode)&&Ms(o,t,n,r),r=r.parent}}function Ms(e,t,n,o){const r=no(t,e,o,!0);ai(()=>{Jo(o[t],r)},n)}function no(e,t,n=Ie,o=!1){if(n){const r=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...s)=>{if(n.isUnmounted)return;Jt(),en(n);const i=Ke(t,n,e,s);return Pt(),Xt(),i});return o?r.unshift(a):r.push(a),a}}const pt=e=>(t,n=Ie)=>(!In||e==="sp")&&no(e,(...o)=>t(...o),n),Vs=pt("bm"),cr=pt("m"),_s=pt("bu"),oi=pt("u"),ri=pt("bum"),ai=pt("um"),Es=pt("sp"),Gs=pt("rtg"),Ls=pt("rtc");function Ps(e,t=Ie){no("ec",e,t)}function le(e,t){const n=Ye;if(n===null)return e;const o=ao(n)||n.proxy,r=e.dirs||(e.dirs=[]);for(let a=0;a<t.length;a++){let[s,i,l,c=ve]=t[a];s&&(ue(s)&&(s={mounted:s,updated:s}),s.deep&&Gt(i),r.push({dir:s,instance:o,value:i,oldValue:void 0,arg:l,modifiers:c}))}return e}function Dt(e,t,n,o){const r=e.dirs,a=t&&t.dirs;for(let s=0;s<r.length;s++){const i=r[s];a&&(i.oldValue=a[s].value);let l=i.dir[o];l&&(Jt(),Ke(l,n,8,[e.el,i,e,t]),Xt())}}const zs=Symbol();function De(e,t,n,o){let r;const a=n&&n[o];if(te(e)||Se(e)){r=new Array(e.length);for(let s=0,i=e.length;s<i;s++)r[s]=t(e[s],s,void 0,a&&a[s])}else if(typeof e=="number"){r=new Array(e);for(let s=0;s<e;s++)r[s]=t(s+1,s,void 0,a&&a[s])}else if(me(e))if(e[Symbol.iterator])r=Array.from(e,(s,i)=>t(s,i,void 0,a&&a[i]));else{const s=Object.keys(e);r=new Array(s.length);for(let i=0,l=s.length;i<l;i++){const c=s[i];r[i]=t(e[c],c,i,a&&a[i])}}else r=[];return n&&(n[o]=r),r}const No=e=>e?bi(e)?ao(e)||e.proxy:No(e.parent):null,fn=Ne(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>No(e.parent),$root:e=>No(e.root),$emit:e=>e.emit,$options:e=>ur(e),$forceUpdate:e=>e.f||(e.f=()=>ir(e.update)),$nextTick:e=>e.n||(e.n=eo.bind(e.proxy)),$watch:e=>Cs.bind(e)}),bo=(e,t)=>e!==ve&&!e.__isScriptSetup&&ge(e,t),Os={get({_:e},t){const{ctx:n,setupState:o,data:r,props:a,accessCache:s,type:i,appContext:l}=e;let c;if(t[0]!=="$"){const w=s[t];if(w!==void 0)switch(w){case 1:return o[t];case 2:return r[t];case 4:return n[t];case 3:return a[t]}else{if(bo(o,t))return s[t]=1,o[t];if(r!==ve&&ge(r,t))return s[t]=2,r[t];if((c=e.propsOptions[0])&&ge(c,t))return s[t]=3,a[t];if(n!==ve&&ge(n,t))return s[t]=4,n[t];Ao&&(s[t]=0)}}const u=fn[t];let d,f;return u?(t==="$attrs"&&We(e,0,t),u(e)):(d=i.__cssModules)&&(d=d[t])?d:n!==ve&&ge(n,t)?(s[t]=4,n[t]):(f=l.config.globalProperties,ge(f,t)?f[t]:void 0)},set({_:e},t,n){const{data:o,setupState:r,ctx:a}=e;return bo(r,t)?(r[t]=n,!0):o!==ve&&ge(o,t)?(o[t]=n,!0):!ge(e.props,t)&&(t[0]!=="$"||!(t.slice(1)in e))&&(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:r,propsOptions:a}},s){let i;return!!n[s]||e!==ve&&ge(e,s)||bo(t,s)||(i=a[0])&&ge(i,s)||ge(o,s)||ge(fn,s)||ge(r.config.globalProperties,s)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ge(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Ao=!0;function Us(e){const t=ur(e),n=e.proxy,o=e.ctx;Ao=!1,t.beforeCreate&&Er(t.beforeCreate,e,"bc");const{data:r,computed:a,methods:s,watch:i,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:w,updated:T,activated:M,deactivated:x,beforeDestroy:v,beforeUnmount:I,destroyed:h,unmounted:p,render:y,renderTracked:k,renderTriggered:A,errorCaptured:S,serverPrefetch:D,expose:C,inheritAttrs:R,components:E,directives:ee,filters:oe}=t;if(c&&function(Q,re,se=ot,B=!1){te(Q)&&(Q=Mo(Q));for(const L in Q){const G=Q[L];let O;O=me(G)?"default"in G?pn(G.from||L,G.default,!0):pn(G.from||L):pn(G),we(O)&&B?Object.defineProperty(re,L,{enumerable:!0,configurable:!0,get:()=>O.value,set:Cn=>O.value=Cn}):re[L]=O}}(c,o,null,e.appContext.config.unwrapInjectedRef),s)for(const Q in s){const re=s[Q];ue(re)&&(o[Q]=re.bind(n))}if(r){const Q=r.call(n,n);me(Q)&&(e.data=Ut(Q))}if(Ao=!0,a)for(const Q in a){const re=a[Q],se=ue(re)?re.bind(n,n):ue(re.get)?re.get.bind(n,n):ot,B=!ue(re)&&ue(re.set)?re.set.bind(n):ot,L=ke({get:se,set:B});Object.defineProperty(o,Q,{enumerable:!0,configurable:!0,get:()=>L.value,set:G=>L.value=G})}if(i)for(const Q in i)ii(i[Q],o,n,Q);if(l){const Q=ue(l)?l.call(n):l;Reflect.ownKeys(Q).forEach(re=>{(function(se,B){if(Ie){let L=Ie.provides;const G=Ie.parent&&Ie.parent.provides;G===L&&(L=Ie.provides=Object.create(G)),L[se]=B}})(re,Q[re])})}function de(Q,re){te(re)?re.forEach(se=>Q(se.bind(n))):re&&Q(re.bind(n))}if(u&&Er(u,e,"c"),de(Vs,d),de(cr,f),de(_s,w),de(oi,T),de(Ns,M),de(As,x),de(Ps,S),de(Ls,k),de(Gs,A),de(ri,I),de(ai,p),de(Es,D),te(C))if(C.length){const Q=e.exposed||(e.exposed={});C.forEach(re=>{Object.defineProperty(Q,re,{get:()=>n[re],set:se=>n[re]=se})})}else e.exposed||(e.exposed={});y&&e.render===ot&&(e.render=y),R!=null&&(e.inheritAttrs=R),E&&(e.components=E),ee&&(e.directives=ee)}function Er(e,t,n){Ke(te(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,n)}function ii(e,t,n,o){const r=o.includes(".")?Qa(n,o):()=>n[o];if(Se(e)){const a=t[e];ue(a)&&Ce(r,a)}else if(ue(e))Ce(r,e.bind(n));else if(me(e))if(te(e))e.forEach(a=>ii(a,t,n,o));else{const a=ue(e.handler)?e.handler.bind(n):t[e.handler];ue(a)&&Ce(r,a,e)}}function ur(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:r,optionsCache:a,config:{optionMergeStrategies:s}}=e.appContext,i=a.get(t);let l;return i?l=i:r.length||n||o?(l={},r.length&&r.forEach(c=>$n(l,c,s,!0)),$n(l,t,s)):l=t,me(t)&&a.set(t,l),l}function $n(e,t,n,o=!1){const{mixins:r,extends:a}=t;a&&$n(e,a,n,!0),r&&r.forEach(s=>$n(e,s,n,!0));for(const s in t)if(!(o&&s==="expose")){const i=Bs[s]||n&&n[s];e[s]=i?i(e[s],t[s]):t[s]}return e}const Bs={data:Gr,props:Ct,emits:Ct,methods:Ct,computed:Ct,beforeCreate:Le,created:Le,beforeMount:Le,mounted:Le,beforeUpdate:Le,updated:Le,beforeDestroy:Le,beforeUnmount:Le,destroyed:Le,unmounted:Le,activated:Le,deactivated:Le,errorCaptured:Le,serverPrefetch:Le,components:Ct,directives:Ct,watch:function(e,t){if(!e)return t;if(!t)return e;const n=Ne(Object.create(null),e);for(const o in t)n[o]=Le(e[o],t[o]);return n},provide:Gr,inject:function(e,t){return Ct(Mo(e),Mo(t))}};function Gr(e,t){return t?e?function(){return Ne(ue(e)?e.call(this,this):e,ue(t)?t.call(this,this):t)}:t:e}function Mo(e){if(te(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Le(e,t){return e?[...new Set([].concat(e,t))]:t}function Ct(e,t){return e?Ne(Ne(Object.create(null),e),t):t}function Ws(e,t,n,o=!1){const r={},a={};Rn(a,ro,1),e.propsDefaults=Object.create(null),si(e,t,r,a);for(const s in e.propsOptions[0])s in r||(r[s]=void 0);n?e.props=o?r:or(r,!1,cs,bs,Pa):e.type.props?e.props=r:e.props=a,e.attrs=a}function si(e,t,n,o){const[r,a]=e.propsOptions;let s,i=!1;if(t)for(let l in t){if(zn(l))continue;const c=t[l];let u;r&&ge(r,u=$t(l))?a&&a.includes(u)?(s||(s={}))[u]=c:n[u]=c:Yn(e.emitsOptions,l)||l in o&&c===o[l]||(o[l]=c,i=!0)}if(a){const l=pe(n),c=s||ve;for(let u=0;u<a.length;u++){const d=a[u];n[d]=Vo(r,l,d,c[d],e,!ge(c,d))}}return i}function Vo(e,t,n,o,r,a){const s=e[n];if(s!=null){const i=ge(s,"default");if(i&&o===void 0){const l=s.default;if(s.type!==Function&&ue(l)){const{propsDefaults:c}=r;n in c?o=c[n]:(en(r),o=c[n]=l.call(null,t),Pt())}else o=l}s[0]&&(a&&!i?o=!1:!s[1]||o!==""&&o!==Ot(n)||(o=!0))}return o}function li(e,t,n=!1){const o=t.propsCache,r=o.get(e);if(r)return r;const a=e.props,s={},i=[];let l=!1;if(!ue(e)){const u=d=>{l=!0;const[f,w]=li(d,t,!0);Ne(s,f),w&&i.push(...w)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!a&&!l)return me(e)&&o.set(e,Zt),Zt;if(te(a))for(let u=0;u<a.length;u++){const d=$t(a[u]);Lr(d)&&(s[d]=ve)}else if(a)for(const u in a){const d=$t(u);if(Lr(d)){const f=a[u],w=s[d]=te(f)||ue(f)?{type:f}:Object.assign({},f);if(w){const T=Or(Boolean,w.type),M=Or(String,w.type);w[0]=T>-1,w[1]=M<0||T<M,(T>-1||ge(w,"default"))&&i.push(d)}}}const c=[s,i];return me(e)&&o.set(e,c),c}function Lr(e){return e[0]!=="$"}function Pr(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function zr(e,t){return Pr(e)===Pr(t)}function Or(e,t){return te(t)?t.findIndex(n=>zr(n,e)):ue(t)&&zr(t,e)?0:-1}const ci=e=>e[0]==="_"||e==="$stable",dr=e=>te(e)?e.map(tt):[tt(e)],Rs=(e,t,n)=>{if(t._n)return t;const o=sr((...r)=>dr(t(...r)),n);return o._c=!1,o},ui=(e,t,n)=>{const o=e._ctx;for(const r in e){if(ci(r))continue;const a=e[r];if(ue(a))t[r]=Rs(0,a,o);else if(a!=null){const s=dr(a);t[r]=()=>s}}},di=(e,t)=>{const n=dr(t);e.slots.default=()=>n},Hs=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=pe(t),Rn(t,"_",n)):ui(t,e.slots={})}else e.slots={},t&&di(e,t);Rn(e.slots,ro,1)},Fs=(e,t,n)=>{const{vnode:o,slots:r}=e;let a=!0,s=ve;if(32&o.shapeFlag){const i=t._;i?n&&i===1?a=!1:(Ne(r,t),n||i!==1||delete r._):(a=!t.$stable,ui(t,r)),s=t}else t&&(di(e,t),s={default:1});if(a)for(const i in r)ci(i)||i in s||delete r[i]};function pi(){return{app:null,config:{isNativeTag:Ki,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zs=0;function Ys(e,t){return function(n,o=null){ue(n)||(n=Object.assign({},n)),o==null||me(o)||(o=null);const r=pi(),a=new Set;let s=!1;const i=r.app={_uid:Zs++,_component:n,_props:o,_container:null,_context:r,_instance:null,version:tl,get config(){return r.config},set config(l){},use:(l,...c)=>(a.has(l)||(l&&ue(l.install)?(a.add(l),l.install(i,...c)):ue(l)&&(a.add(l),l(i,...c))),i),mixin:l=>(r.mixins.includes(l)||r.mixins.push(l),i),component:(l,c)=>c?(r.components[l]=c,i):r.components[l],directive:(l,c)=>c?(r.directives[l]=c,i):r.directives[l],mount(l,c,u){if(!s){const d=ne(n,o);return d.appContext=r,c&&t?t(d,l):e(d,l,u),s=!0,i._container=l,l.__vue_app__=i,ao(d.component)||d.component.proxy}},unmount(){s&&(e(null,i._container),delete i._container.__vue_app__)},provide:(l,c)=>(r.provides[l]=c,i)};return i}}function _o(e,t,n,o,r=!1){if(te(e))return void e.forEach((f,w)=>_o(f,t&&(te(t)?t[w]:t),n,o,r));if(Un(o)&&!r)return;const a=4&o.shapeFlag?ao(o.component)||o.component.proxy:o.el,s=r?null:a,{i,r:l}=e,c=t&&t.r,u=i.refs===ve?i.refs={}:i.refs,d=i.setupState;if(c!=null&&c!==l&&(Se(c)?(u[c]=null,ge(d,c)&&(d[c]=null)):we(c)&&(c.value=null)),ue(l))jt(l,i,12,[s,u]);else{const f=Se(l),w=we(l);if(f||w){const T=()=>{if(e.f){const M=f?ge(d,l)?d[l]:u[l]:l.value;r?te(M)&&Jo(M,a):te(M)?M.includes(a)||M.push(a):f?(u[l]=[a],ge(d,l)&&(d[l]=u[l])):(l.value=[a],e.k&&(u[e.k]=l.value))}else f?(u[l]=s,ge(d,l)&&(d[l]=s)):w&&(l.value=s,e.k&&(u[e.k]=s))};s?(T.id=-1,Oe(T,n)):T()}}}const Oe=function(e,t){var n;t&&t.pendingBranch?te(e)?t.effects.push(...e):t.effects.push(e):(te(n=e)?Kt.push(...n):ct&&ct.includes(n,n.allowRecurse?Vt+1:Vt)||Kt.push(n),Za())};function Ks(e){return function(t,n){ts().__VUE__=!0;const{insert:o,remove:r,patchProp:a,createElement:s,createText:i,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:w=ot,insertStaticContent:T}=t,M=(b,j,N,P=null,_=null,z=null,Z=!1,W=null,U=!!j.dynamicChildren)=>{if(b===j)return;b&&!_t(b,j)&&(P=Nn(b),O(b,_,z,!0),b=null),j.patchFlag===-2&&(U=!1,j.dynamicChildren=null);const{type:V,ref:$,shapeFlag:F}=j;switch(V){case oo:x(b,j,N,P);break;case Qe:v(b,j,N,P);break;case mo:b==null&&I(j,N,P,Z);break;case be:E(b,j,N,P,_,z,Z,W,U);break;default:1&F?y(b,j,N,P,_,z,Z,W,U):6&F?ee(b,j,N,P,_,z,Z,W,U):(64&F||128&F)&&V.process(b,j,N,P,_,z,Z,W,U,rn)}$!=null&&_&&_o($,b&&b.ref,z,j||b,!j)},x=(b,j,N,P)=>{if(b==null)o(j.el=i(j.children),N,P);else{const _=j.el=b.el;j.children!==b.children&&c(_,j.children)}},v=(b,j,N,P)=>{b==null?o(j.el=l(j.children||""),N,P):j.el=b.el},I=(b,j,N,P)=>{[b.el,b.anchor]=T(b.children,j,N,P,b.el,b.anchor)},h=({el:b,anchor:j},N,P)=>{let _;for(;b&&b!==j;)_=f(b),o(b,N,P),b=_;o(j,N,P)},p=({el:b,anchor:j})=>{let N;for(;b&&b!==j;)N=f(b),r(b),b=N;r(j)},y=(b,j,N,P,_,z,Z,W,U)=>{Z=Z||j.type==="svg",b==null?k(j,N,P,_,z,Z,W,U):D(b,j,_,z,Z,W,U)},k=(b,j,N,P,_,z,Z,W)=>{let U,V;const{type:$,props:F,shapeFlag:Y,transition:J,dirs:X}=b;if(U=b.el=s(b.type,z,F&&F.is,F),8&Y?u(U,b.children):16&Y&&S(b.children,U,null,P,_,z&&$!=="foreignObject",Z,W),X&&Dt(b,null,P,"created"),A(U,b,b.scopeId,Z,P),F){for(const ce in F)ce==="value"||zn(ce)||a(U,ce,null,F[ce],z,b.children,P,_,at);"value"in F&&a(U,"value",null,F.value),(V=F.onVnodeBeforeMount)&&et(V,P,b)}X&&Dt(b,null,P,"beforeMount");const ae=(!_||_&&!_.pendingBranch)&&J&&!J.persisted;ae&&J.beforeEnter(U),o(U,j,N),((V=F&&F.onVnodeMounted)||ae||X)&&Oe(()=>{V&&et(V,P,b),ae&&J.enter(U),X&&Dt(b,null,P,"mounted")},_)},A=(b,j,N,P,_)=>{if(N&&w(b,N),P)for(let z=0;z<P.length;z++)w(b,P[z]);if(_&&j===_.subTree){const z=_.vnode;A(b,z,z.scopeId,z.slotScopeIds,_.parent)}},S=(b,j,N,P,_,z,Z,W,U=0)=>{for(let V=U;V<b.length;V++){const $=b[V]=W?vt(b[V]):tt(b[V]);M(null,$,j,N,P,_,z,Z,W)}},D=(b,j,N,P,_,z,Z)=>{const W=j.el=b.el;let{patchFlag:U,dynamicChildren:V,dirs:$}=j;U|=16&b.patchFlag;const F=b.props||ve,Y=j.props||ve;let J;N&&Nt(N,!1),(J=Y.onVnodeBeforeUpdate)&&et(J,N,j,b),$&&Dt(j,b,N,"beforeUpdate"),N&&Nt(N,!0);const X=_&&j.type!=="foreignObject";if(V?C(b.dynamicChildren,V,W,N,P,X,z):Z||se(b,j,W,null,N,P,X,z,!1),U>0){if(16&U)R(W,j,F,Y,N,P,_);else if(2&U&&F.class!==Y.class&&a(W,"class",null,Y.class,_),4&U&&a(W,"style",F.style,Y.style,_),8&U){const ae=j.dynamicProps;for(let ce=0;ce<ae.length;ce++){const he=ae[ce],Ve=F[he],Ge=Y[he];Ge===Ve&&he!=="value"||a(W,he,Ve,Ge,_,b.children,N,P,at)}}1&U&&b.children!==j.children&&u(W,j.children)}else Z||V!=null||R(W,j,F,Y,N,P,_);((J=Y.onVnodeUpdated)||$)&&Oe(()=>{J&&et(J,N,j,b),$&&Dt(j,b,N,"updated")},P)},C=(b,j,N,P,_,z,Z)=>{for(let W=0;W<j.length;W++){const U=b[W],V=j[W],$=U.el&&(U.type===be||!_t(U,V)||70&U.shapeFlag)?d(U.el):N;M(U,V,$,null,P,_,z,Z,!0)}},R=(b,j,N,P,_,z,Z)=>{if(N!==P){if(N!==ve)for(const W in N)zn(W)||W in P||a(b,W,N[W],null,Z,j.children,_,z,at);for(const W in P){if(zn(W))continue;const U=P[W],V=N[W];U!==V&&W!=="value"&&a(b,W,V,U,Z,j.children,_,z,at)}"value"in P&&a(b,"value",N.value,P.value)}},E=(b,j,N,P,_,z,Z,W,U)=>{const V=j.el=b?b.el:i(""),$=j.anchor=b?b.anchor:i("");let{patchFlag:F,dynamicChildren:Y,slotScopeIds:J}=j;J&&(W=W?W.concat(J):J),b==null?(o(V,N,P),o($,N,P),S(j.children,N,$,_,z,Z,W,U)):F>0&&64&F&&Y&&b.dynamicChildren?(C(b.dynamicChildren,Y,N,_,z,Z,W),(j.key!=null||_&&j===_.subTree)&&fi(b,j,!0)):se(b,j,N,$,_,z,Z,W,U)},ee=(b,j,N,P,_,z,Z,W,U)=>{j.slotScopeIds=W,b==null?512&j.shapeFlag?_.ctx.activate(j,N,P,Z,U):oe(j,N,P,_,z,Z,U):de(b,j,U)},oe=(b,j,N,P,_,z,Z)=>{const W=b.component=function(U,V,$){const F=U.type,Y=(V?V.appContext:U.appContext)||Xs,J={uid:Qs++,vnode:U,type:F,parent:V,appContext:Y,root:null,next:null,subTree:null,effect:null,update:null,scope:new ka(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:V?V.provides:Object.create(Y.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:li(F,Y),emitsOptions:$a(F,Y),emit:null,emitted:null,propsDefaults:ve,inheritAttrs:F.inheritAttrs,ctx:ve,data:ve,props:ve,attrs:ve,slots:ve,refs:ve,setupState:ve,setupContext:null,suspense:$,suspenseId:$?$.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return J.ctx={_:J},J.root=V?V.root:J,J.emit=Ss.bind(null,J),U.ce&&U.ce(J),J}(b,P,_);if(to(b)&&(W.ctx.renderer=rn),function(U,V=!1){In=V;const{props:$,children:F}=U.vnode,Y=bi(U);Ws(U,$,Y,V),Hs(U,F);const J=Y?function(X,ae){const ce=X.type;X.accessCache=Object.create(null),X.proxy=qt(new Proxy(X.ctx,Os));const{setup:he}=ce;if(he){const Ve=X.setupContext=he.length>1?function(Ae){const it=xe=>{Ae.exposed=xe||{}};let an;return{get attrs(){return an||(an=function(xe){return new Proxy(xe.attrs,{get:(_e,Me)=>(We(xe,0,"$attrs"),_e[Me])})}(Ae))},slots:Ae.slots,emit:Ae.emit,expose:it}}(X):null;en(X),Jt();const Ge=jt(he,X,0,[X.props,Ve]);if(Xt(),Pt(),Ta(Ge)){if(Ge.then(Pt,Pt),ae)return Ge.then(Ae=>{Wr(X,Ae,ae)}).catch(Ae=>{qn(Ae,X,0)});X.asyncDep=Ge}else Wr(X,Ge,ae)}else mi(X,ae)}(U,V):void 0;In=!1}(W),W.asyncDep){if(_&&_.registerDep(W,Q),!b.el){const U=W.subTree=ne(Qe);v(null,U,j,N)}}else Q(W,b,j,N,_,z,Z)},de=(b,j,N)=>{const P=j.component=b.component;if(function(_,z,Z){const{props:W,children:U,component:V}=_,{props:$,children:F,patchFlag:Y}=z,J=V.emitsOptions;if(z.dirs||z.transition)return!0;if(!(Z&&Y>=0))return!(!U&&!F||F&&F.$stable)||W!==$&&(W?!$||Vr(W,$,J):!!$);if(1024&Y)return!0;if(16&Y)return W?Vr(W,$,J):!!$;if(8&Y){const X=z.dynamicProps;for(let ae=0;ae<X.length;ae++){const ce=X[ae];if($[ce]!==W[ce]&&!Yn(J,ce))return!0}}return!1}(b,j,N)){if(P.asyncDep&&!P.asyncResolved)return void re(P,j,N);P.next=j,function(_){const z=Ee.indexOf(_);z>nt&&Ee.splice(z,1)}(P.update),P.update()}else j.el=b.el,P.vnode=j},Q=(b,j,N,P,_,z,Z)=>{const W=()=>{if(b.isMounted){let $,{next:F,bu:Y,u:J,parent:X,vnode:ae}=b,ce=F;Nt(b,!1),F?(F.el=ae.el,re(b,F,Z)):F=ae,Y&&On(Y),($=F.props&&F.props.onVnodeBeforeUpdate)&&et($,X,F,ae),Nt(b,!0);const he=go(b),Ve=b.subTree;b.subTree=he,M(Ve,he,d(Ve.el),Nn(Ve),b,_,z),F.el=he.el,ce===null&&function({vnode:Ge,parent:Ae},it){for(;Ae&&Ae.subTree===Ge;)(Ge=Ae.vnode).el=it,Ae=Ae.parent}(b,he.el),J&&Oe(J,_),($=F.props&&F.props.onVnodeUpdated)&&Oe(()=>et($,X,F,ae),_)}else{let $;const{el:F,props:Y}=j,{bm:J,m:X,parent:ae}=b,ce=Un(j);if(Nt(b,!1),J&&On(J),!ce&&($=Y&&Y.onVnodeBeforeMount)&&et($,ae,j),Nt(b,!0),F&&uo){const he=()=>{b.subTree=go(b),uo(F,b.subTree,b,_,null)};ce?j.type.__asyncLoader().then(()=>!b.isUnmounted&&he()):he()}else{const he=b.subTree=go(b);M(null,he,N,P,b,_,z),j.el=he.el}if(X&&Oe(X,_),!ce&&($=Y&&Y.onVnodeMounted)){const he=j;Oe(()=>et($,ae,he),_)}(256&j.shapeFlag||ae&&Un(ae.vnode)&&256&ae.vnode.shapeFlag)&&b.a&&Oe(b.a,_),b.isMounted=!0,j=N=P=null}},U=b.effect=new qo(W,()=>ir(V),b.scope),V=b.update=()=>U.run();V.id=b.uid,Nt(b,!0),V()},re=(b,j,N)=>{j.component=b;const P=b.vnode.props;b.vnode=j,b.next=null,function(_,z,Z,W){const{props:U,attrs:V,vnode:{patchFlag:$}}=_,F=pe(U),[Y]=_.propsOptions;let J=!1;if(!(W||$>0)||16&$){let X;si(_,z,U,V)&&(J=!0);for(const ae in F)z&&(ge(z,ae)||(X=Ot(ae))!==ae&&ge(z,X))||(Y?!Z||Z[ae]===void 0&&Z[X]===void 0||(U[ae]=Vo(Y,F,ae,void 0,_,!0)):delete U[ae]);if(V!==F)for(const ae in V)z&&ge(z,ae)||(delete V[ae],J=!0)}else if(8&$){const X=_.vnode.dynamicProps;for(let ae=0;ae<X.length;ae++){let ce=X[ae];if(Yn(_.emitsOptions,ce))continue;const he=z[ce];if(Y)if(ge(V,ce))he!==V[ce]&&(V[ce]=he,J=!0);else{const Ve=$t(ce);U[Ve]=Vo(Y,F,Ve,he,_,!1)}else he!==V[ce]&&(V[ce]=he,J=!0)}}J&&dt(_,"set","$attrs")}(b,j.props,P,N),Fs(b,j.children,N),Jt(),Mr(),Xt()},se=(b,j,N,P,_,z,Z,W,U=!1)=>{const V=b&&b.children,$=b?b.shapeFlag:0,F=j.children,{patchFlag:Y,shapeFlag:J}=j;if(Y>0){if(128&Y)return void L(V,F,N,P,_,z,Z,W,U);if(256&Y)return void B(V,F,N,P,_,z,Z,W,U)}8&J?(16&$&&at(V,_,z),F!==V&&u(N,F)):16&$?16&J?L(V,F,N,P,_,z,Z,W,U):at(V,_,z,!0):(8&$&&u(N,""),16&J&&S(F,N,P,_,z,Z,W,U))},B=(b,j,N,P,_,z,Z,W,U)=>{j=j||Zt;const V=(b=b||Zt).length,$=j.length,F=Math.min(V,$);let Y;for(Y=0;Y<F;Y++){const J=j[Y]=U?vt(j[Y]):tt(j[Y]);M(b[Y],J,N,null,_,z,Z,W,U)}V>$?at(b,_,z,!0,!1,F):S(j,N,P,_,z,Z,W,U,F)},L=(b,j,N,P,_,z,Z,W,U)=>{let V=0;const $=j.length;let F=b.length-1,Y=$-1;for(;V<=F&&V<=Y;){const J=b[V],X=j[V]=U?vt(j[V]):tt(j[V]);if(!_t(J,X))break;M(J,X,N,null,_,z,Z,W,U),V++}for(;V<=F&&V<=Y;){const J=b[F],X=j[Y]=U?vt(j[Y]):tt(j[Y]);if(!_t(J,X))break;M(J,X,N,null,_,z,Z,W,U),F--,Y--}if(V>F){if(V<=Y){const J=Y+1,X=J<$?j[J].el:P;for(;V<=Y;)M(null,j[V]=U?vt(j[V]):tt(j[V]),N,X,_,z,Z,W,U),V++}}else if(V>Y)for(;V<=F;)O(b[V],_,z,!0),V++;else{const J=V,X=V,ae=new Map;for(V=X;V<=Y;V++){const xe=j[V]=U?vt(j[V]):tt(j[V]);xe.key!=null&&ae.set(xe.key,V)}let ce,he=0;const Ve=Y-X+1;let Ge=!1,Ae=0;const it=new Array(Ve);for(V=0;V<Ve;V++)it[V]=0;for(V=J;V<=F;V++){const xe=b[V];if(he>=Ve){O(xe,_,z,!0);continue}let _e;if(xe.key!=null)_e=ae.get(xe.key);else for(ce=X;ce<=Y;ce++)if(it[ce-X]===0&&_t(xe,j[ce])){_e=ce;break}_e===void 0?O(xe,_,z,!0):(it[_e-X]=V+1,_e>=Ae?Ae=_e:Ge=!0,M(xe,j[_e],N,null,_,z,Z,W,U),he++)}const an=Ge?function(xe){const _e=xe.slice(),Me=[0];let ft,po,He,gt,An;const Ui=xe.length;for(ft=0;ft<Ui;ft++){const Mn=xe[ft];if(Mn!==0){if(po=Me[Me.length-1],xe[po]<Mn){_e[ft]=po,Me.push(ft);continue}for(He=0,gt=Me.length-1;He<gt;)An=He+gt>>1,xe[Me[An]]<Mn?He=An+1:gt=An;Mn<xe[Me[He]]&&(He>0&&(_e[ft]=Me[He-1]),Me[He]=ft)}}for(He=Me.length,gt=Me[He-1];He-- >0;)Me[He]=gt,gt=_e[gt];return Me}(it):Zt;for(ce=an.length-1,V=Ve-1;V>=0;V--){const xe=X+V,_e=j[xe],Me=xe+1<$?j[xe+1].el:P;it[V]===0?M(null,_e,N,Me,_,z,Z,W,U):Ge&&(ce<0||V!==an[ce]?G(_e,N,Me,2):ce--)}}},G=(b,j,N,P,_=null)=>{const{el:z,type:Z,transition:W,children:U,shapeFlag:V}=b;if(6&V)return void G(b.component.subTree,j,N,P);if(128&V)return void b.suspense.move(j,N,P);if(64&V)return void Z.move(b,j,N,rn);if(Z===be){o(z,j,N);for(let $=0;$<U.length;$++)G(U[$],j,N,P);return void o(b.anchor,j,N)}if(Z===mo)return void h(b,j,N);if(P!==2&&1&V&&W)if(P===0)W.beforeEnter(z),o(z,j,N),Oe(()=>W.enter(z),_);else{const{leave:$,delayLeave:F,afterLeave:Y}=W,J=()=>o(z,j,N),X=()=>{$(z,()=>{J(),Y&&Y()})};F?F(z,J,X):X()}else o(z,j,N)},O=(b,j,N,P=!1,_=!1)=>{const{type:z,props:Z,ref:W,children:U,dynamicChildren:V,shapeFlag:$,patchFlag:F,dirs:Y}=b;if(W!=null&&_o(W,null,N,b,!0),256&$)return void j.ctx.deactivate(b);const J=1&$&&Y,X=!Un(b);let ae;if(X&&(ae=Z&&Z.onVnodeBeforeUnmount)&&et(ae,j,b),6&$)Oi(b.component,N,P);else{if(128&$)return void b.suspense.unmount(N,P);J&&Dt(b,null,j,"beforeUnmount"),64&$?b.type.remove(b,j,N,_,rn,P):V&&(z!==be||F>0&&64&F)?at(V,j,N,!1,!0):(z===be&&384&F||!_&&16&$)&&at(U,j,N),P&&Cn(b)}(X&&(ae=Z&&Z.onVnodeUnmounted)||J)&&Oe(()=>{ae&&et(ae,j,b),J&&Dt(b,null,j,"unmounted")},N)},Cn=b=>{const{type:j,el:N,anchor:P,transition:_}=b;if(j===be)return void zi(N,P);if(j===mo)return void p(b);const z=()=>{r(N),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(1&b.shapeFlag&&_&&!_.persisted){const{leave:Z,delayLeave:W}=_,U=()=>Z(N,z);W?W(b.el,z,U):U()}else z()},zi=(b,j)=>{let N;for(;b!==j;)N=f(b),r(b),b=N;r(j)},Oi=(b,j,N)=>{const{bum:P,scope:_,update:z,subTree:Z,um:W}=b;P&&On(P),_.stop(),z&&(z.active=!1,O(Z,b,j,N)),W&&Oe(W,j),Oe(()=>{b.isUnmounted=!0},j),j&&j.pendingBranch&&!j.isUnmounted&&b.asyncDep&&!b.asyncResolved&&b.suspenseId===j.pendingId&&(j.deps--,j.deps===0&&j.resolve())},at=(b,j,N,P=!1,_=!1,z=0)=>{for(let Z=z;Z<b.length;Z++)O(b[Z],j,N,P,_)},Nn=b=>6&b.shapeFlag?Nn(b.component.subTree):128&b.shapeFlag?b.suspense.next():f(b.anchor||b.el),vr=(b,j,N)=>{b==null?j._vnode&&O(j._vnode,null,null,!0):M(j._vnode||null,b,j,null,null,null,N),Mr(),Ya(),j._vnode=b},rn={p:M,um:O,m:G,r:Cn,mt:oe,mc:S,pc:se,pbc:C,n:Nn,o:t};let co,uo;return n&&([co,uo]=n(rn)),{render:vr,hydrate:co,createApp:Ys(vr,co)}}(e)}function Nt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function fi(e,t,n=!1){const o=e.children,r=t.children;if(te(o)&&te(r))for(let a=0;a<o.length;a++){const s=o[a];let i=r[a];1&i.shapeFlag&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=r[a]=vt(r[a]),i.el=s.el),n||fi(s,i)),i.type===oo&&(i.el=s.el)}}const $s=e=>e.__isTeleport,be=Symbol(void 0),oo=Symbol(void 0),Qe=Symbol(void 0),mo=Symbol(void 0),gn=[];let Xe=null;function K(e=!1){gn.push(Xe=e?null:[])}let Sn=1;function Ur(e){Sn+=e}function gi(e){return e.dynamicChildren=Sn>0?Xe||Zt:null,gn.pop(),Xe=gn[gn.length-1]||null,Sn>0&&Xe&&Xe.push(e),e}function q(e,t,n,o,r,a){return gi(g(e,t,n,o,r,a,!0))}function Pe(e,t,n,o,r){return gi(ne(e,t,n,o,r,!0))}function Eo(e){return!!e&&e.__v_isVNode===!0}function _t(e,t){return e.type===t.type&&e.key===t.key}const ro="__vInternal",hi=({key:e})=>e??null,Bn=({ref:e,ref_key:t,ref_for:n})=>e!=null?Se(e)||we(e)||ue(e)?{i:Ye,r:e,k:t,f:!!n}:e:null;function g(e,t=null,n=null,o=0,r=null,a=e===be?0:1,s=!1,i=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&hi(t),ref:t&&Bn(t),scopeId:Ja,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ye};return i?(pr(l,n),128&a&&e.normalize(l)):n&&(l.shapeFlag|=Se(n)?8:16),Sn>0&&!s&&Xe&&(l.patchFlag>0||6&a)&&l.patchFlag!==32&&Xe.push(l),l}const ne=function(e,t=null,n=null,o=0,r=null,a=!1){if(e&&e!==zs||(e=Qe),Eo(e)){const l=St(e,t,!0);return n&&pr(l,n),Sn>0&&!a&&Xe&&(6&l.shapeFlag?Xe[Xe.indexOf(e)]=l:Xe.push(l)),l.patchFlag|=-2,l}s=e,ue(s)&&"__vccOpts"in s&&(e=e.__vccOpts);var s;if(t){t=function(u){return u?Ar(u)||ro in u?Ne({},u):u:null}(t);let{class:l,style:c}=t;l&&!Se(l)&&(t.class=$e(l)),me(c)&&(Ar(c)&&!te(c)&&(c=Ne({},c)),t.style=nn(c))}const i=Se(e)?1:Ds(e)?128:$s(e)?64:me(e)?4:ue(e)?2:0;return g(e,t,n,o,r,i,a,!0)};function St(e,t,n=!1){const{props:o,ref:r,patchFlag:a,children:s}=e,i=t?function(...l){const c={};for(let u=0;u<l.length;u++){const d=l[u];for(const f in d)if(f==="class")c.class!==d.class&&(c.class=$e([c.class,d.class]));else if(f==="style")c.style=nn([c.style,d.style]);else if(Jn(f)){const w=c[f],T=d[f];!T||w===T||te(w)&&w.includes(T)||(c[f]=w?[].concat(w,T):T)}else f!==""&&(c[f]=d[f])}return c}(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&hi(i),ref:t&&t.ref?n&&r?te(r)?r.concat(Bn(t)):[r,Bn(t)]:Bn(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==be?a===-1?16:16|a:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&St(e.ssContent),ssFallback:e.ssFallback&&St(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Js(e=" ",t=0){return ne(oo,null,e,t)}function rt(e="",t=!1){return t?(K(),Pe(Qe,null,e)):ne(Qe,null,e)}function tt(e){return e==null||typeof e=="boolean"?ne(Qe):te(e)?ne(be,null,e.slice()):typeof e=="object"?vt(e):ne(oo,null,String(e))}function vt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:St(e)}function pr(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(te(t))n=16;else if(typeof t=="object"){if(65&o){const r=t.default;return void(r&&(r._c&&(r._d=!1),pr(e,r()),r._c&&(r._d=!0)))}{n=32;const r=t._;r||ro in t?r===3&&Ye&&(Ye.slots._===1?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=Ye}}else ue(t)?(t={default:t,_ctx:Ye},n=32):(t=String(t),64&o?(n=16,t=[Js(t)]):n=8);e.children=t,e.shapeFlag|=n}function et(e,t,n,o=null){Ke(e,t,7,[n,o])}const Xs=pi();let Qs=0,Ie=null;const fr=()=>Ie||Ye,en=e=>{Ie=e,e.scope.on()},Pt=()=>{Ie&&Ie.scope.off(),Ie=null};function bi(e){return 4&e.vnode.shapeFlag}let Br,In=!1;function Wr(e,t,n){ue(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:me(t)&&(e.setupState=Wa(t)),mi(e,n)}function mi(e,t,n){const o=e.type;if(!e.render){if(!t&&Br&&!o.render){const r=o.template||ur(e).template;if(r){const{isCustomElement:a,compilerOptions:s}=e.appContext.config,{delimiters:i,compilerOptions:l}=o,c=Ne(Ne({isCustomElement:a,delimiters:i},s),l);o.render=Br(r,c)}}e.render=o.render||ot}en(e),Jt(),Us(e),Xt(),Pt()}function ao(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Wa(qt(e.exposed)),{get:(t,n)=>n in t?t[n]:n in fn?fn[n](e):void 0,has:(t,n)=>n in t||n in fn}))}const ke=(e,t)=>function(n,o,r=!1){let a,s;const i=ue(n);return i?(a=n,s=ot):(a=n.get,s=n.set),new Ts(a,s,i||!s,r)}(e,0,In),qs=Symbol(""),el=()=>pn(qs),tl="3.2.47",Et=typeof document<"u"?document:null,Rr=Et&&Et.createElement("template"),nl={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const r=t?Et.createElementNS("http://www.w3.org/2000/svg",e):Et.createElement(e,n?{is:n}:void 0);return e==="select"&&o&&o.multiple!=null&&r.setAttribute("multiple",o.multiple),r},createText:e=>Et.createTextNode(e),createComment:e=>Et.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Et.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,o,r,a){const s=n?n.previousSibling:t.lastChild;if(r&&(r===a||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),r!==a&&(r=r.nextSibling););else{Rr.innerHTML=o?`<svg>${e}</svg>`:e;const i=Rr.content;if(o){const l=i.firstChild;for(;l.firstChild;)i.appendChild(l.firstChild);i.removeChild(l)}t.insertBefore(i,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Hr=/\s*!important$/;function Go(e,t,n){if(te(n))n.forEach(o=>Go(e,t,o));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const o=function(r,a){const s=xo[a];if(s)return s;let i=$t(a);if(i!=="filter"&&i in r)return xo[a]=i;i=Ia(i);for(let l=0;l<Fr.length;l++){const c=Fr[l]+i;if(c in r)return xo[a]=c}return a}(e,t);Hr.test(n)?e.setProperty(Ot(o),n.replace(Hr,""),"important"):e[o]=n}}const Fr=["Webkit","Moz","ms"],xo={},Zr="http://www.w3.org/1999/xlink";function wt(e,t,n,o){e.addEventListener(t,n,o)}function ol(e,t,n,o,r=null){const a=e._vei||(e._vei={}),s=a[t];if(o&&s)s.value=o;else{const[i,l]=function(c){let u;if(Yr.test(c)){let f;for(u={};f=c.match(Yr);)c=c.slice(0,c.length-f[0].length),u[f[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):Ot(c.slice(2)),u]}(t);if(o){const c=a[t]=function(u,d){const f=w=>{if(w._vts){if(w._vts<=f.attached)return}else w._vts=Date.now();Ke(function(T,M){if(te(M)){const x=T.stopImmediatePropagation;return T.stopImmediatePropagation=()=>{x.call(T),T._stopped=!0},M.map(v=>I=>!I._stopped&&v&&v(I))}return M}(w,f.value),d,5,[w])};return f.value=u,f.attached=al(),f}(o,r);wt(e,i,c,l)}else s&&(function(c,u,d,f){c.removeEventListener(u,d,f)}(e,i,s,l),a[t]=void 0)}}const Yr=/(?:Once|Passive|Capture)$/;let vo=0;const rl=Promise.resolve(),al=()=>vo||(rl.then(()=>vo=0),vo=Date.now()),Kr=/^on[a-z]/,bt="transition",sn="animation",gr=(e,{slots:t})=>function(n,o,r){const a=arguments.length;return a===2?me(o)&&!te(o)?Eo(o)?ne(n,null,[o]):ne(n,o):ne(n,null,o):(a>3?r=Array.prototype.slice.call(arguments,2):a===3&&Eo(r)&&(r=[r]),ne(n,o,r))}(ei,vi(e),t);gr.displayName="Transition";const xi={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},il=gr.props=Ne({},ei.props,xi),At=(e,t=[])=>{te(e)?e.forEach(n=>n(...t)):e&&e(...t)},$r=e=>!!e&&(te(e)?e.some(t=>t.length>1):e.length>1);function vi(e){const t={};for(const E in e)E in xi||(t[E]=e[E]);if(e.css===!1)return t;const{name:n="v",type:o,duration:r,enterFromClass:a=`${n}-enter-from`,enterActiveClass:s=`${n}-enter-active`,enterToClass:i=`${n}-enter-to`,appearFromClass:l=a,appearActiveClass:c=s,appearToClass:u=i,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:w=`${n}-leave-to`}=e,T=function(E){if(E==null)return null;if(me(E))return[yo(E.enter),yo(E.leave)];{const ee=yo(E);return[ee,ee]}}(r),M=T&&T[0],x=T&&T[1],{onBeforeEnter:v,onEnter:I,onEnterCancelled:h,onLeave:p,onLeaveCancelled:y,onBeforeAppear:k=v,onAppear:A=I,onAppearCancelled:S=h}=t,D=(E,ee,oe)=>{mt(E,ee?u:i),mt(E,ee?c:s),oe&&oe()},C=(E,ee)=>{E._isLeaving=!1,mt(E,d),mt(E,w),mt(E,f),ee&&ee()},R=E=>(ee,oe)=>{const de=E?A:I,Q=()=>D(ee,E,oe);At(de,[ee,Q]),Jr(()=>{mt(ee,E?l:a),lt(ee,E?u:i),$r(de)||Xr(ee,o,M,Q)})};return Ne(t,{onBeforeEnter(E){At(v,[E]),lt(E,a),lt(E,s)},onBeforeAppear(E){At(k,[E]),lt(E,l),lt(E,c)},onEnter:R(!1),onAppear:R(!0),onLeave(E,ee){E._isLeaving=!0;const oe=()=>C(E,ee);lt(E,d),wi(),lt(E,f),Jr(()=>{E._isLeaving&&(mt(E,d),lt(E,w),$r(p)||Xr(E,o,x,oe))}),At(p,[E,oe])},onEnterCancelled(E){D(E,!1),At(h,[E])},onAppearCancelled(E){D(E,!0),At(S,[E])},onLeaveCancelled(E){C(E),At(y,[E])}})}function yo(e){return es(e)}function lt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function mt(e,t){t.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Jr(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let sl=0;function Xr(e,t,n,o){const r=e._endId=++sl,a=()=>{r===e._endId&&o()};if(n)return setTimeout(a,n);const{type:s,timeout:i,propCount:l}=yi(e,t);if(!s)return o();const c=s+"end";let u=0;const d=()=>{e.removeEventListener(c,f),a()},f=w=>{w.target===e&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},i+1),e.addEventListener(c,f)}function yi(e,t){const n=window.getComputedStyle(e),o=w=>(n[w]||"").split(", "),r=o(`${bt}Delay`),a=o(`${bt}Duration`),s=Qr(r,a),i=o(`${sn}Delay`),l=o(`${sn}Duration`),c=Qr(i,l);let u=null,d=0,f=0;return t===bt?s>0&&(u=bt,d=s,f=a.length):t===sn?c>0&&(u=sn,d=c,f=l.length):(d=Math.max(s,c),u=d>0?s>c?bt:sn:null,f=u?u===bt?a.length:l.length:0),{type:u,timeout:d,propCount:f,hasTransform:u===bt&&/\b(transform|all)(,|$)/.test(o(`${bt}Property`).toString())}}function Qr(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,o)=>qr(n)+qr(e[o])))}function qr(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function wi(){return document.body.offsetHeight}const Ti=new WeakMap,ji=new WeakMap,ll={name:"TransitionGroup",props:Ne({},il,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=fr(),o=qa();let r,a;return oi(()=>{if(!r.length)return;const s=e.moveClass||`${e.name||"v"}-move`;if(!function(l,c,u){const d=l.cloneNode();l._vtc&&l._vtc.forEach(T=>{T.split(/\s+/).forEach(M=>M&&d.classList.remove(M))}),u.split(/\s+/).forEach(T=>T&&d.classList.add(T)),d.style.display="none";const f=c.nodeType===1?c:c.parentNode;f.appendChild(d);const{hasTransform:w}=yi(d);return f.removeChild(d),w}(r[0].el,n.vnode.el,s))return;r.forEach(ul),r.forEach(dl);const i=r.filter(pl);wi(),i.forEach(l=>{const c=l.el,u=c.style;lt(c,s),u.transform=u.webkitTransform=u.transitionDuration="";const d=c._moveCb=f=>{f&&f.target!==c||f&&!/transform$/.test(f.propertyName)||(c.removeEventListener("transitionend",d),c._moveCb=null,mt(c,s))};c.addEventListener("transitionend",d)})}),()=>{const s=pe(e),i=vi(s);let l=s.tag||be;r=a,a=t.default?lr(t.default()):[];for(let c=0;c<a.length;c++){const u=a[c];u.key!=null&&jn(u,Tn(u,i,o,n))}if(r)for(let c=0;c<r.length;c++){const u=r[c];jn(u,Tn(u,i,o,n)),Ti.set(u,u.el.getBoundingClientRect())}return ne(l,null,a)}}},cl=ll;function ul(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function dl(e){ji.set(e,e.el.getBoundingClientRect())}function pl(e){const t=Ti.get(e),n=ji.get(e),o=t.left-n.left,r=t.top-n.top;if(o||r){const a=e.el.style;return a.transform=a.webkitTransform=`translate(${o}px,${r}px)`,a.transitionDuration="0s",e}}const tn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return te(t)?n=>On(t,n):t};function fl(e){e.target.composing=!0}function ea(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ue={created(e,{modifiers:{lazy:t,trim:n,number:o}},r){e._assign=tn(r);const a=o||r.props&&r.props.type==="number";wt(e,t?"change":"input",s=>{if(s.target.composing)return;let i=e.value;n&&(i=i.trim()),a&&(i=Hn(i)),e._assign(i)}),n&&wt(e,"change",()=>{e.value=e.value.trim()}),t||(wt(e,"compositionstart",fl),wt(e,"compositionend",ea),wt(e,"change",ea))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:o,number:r}},a){if(e._assign=tn(a),e.composing||document.activeElement===e&&e.type!=="range"&&(n||o&&e.value.trim()===t||(r||e.type==="number")&&Hn(e.value)===t))return;const s=t??"";e.value!==s&&(e.value=s)}},Si={deep:!0,created(e,t,n){e._assign=tn(n),wt(e,"change",()=>{const o=e._modelValue,r=kn(e),a=e.checked,s=e._assign;if(te(o)){const i=Ko(o,r),l=i!==-1;if(a&&!l)s(o.concat(r));else if(!a&&l){const c=[...o];c.splice(i,1),s(c)}}else if(on(o)){const i=new Set(o);a?i.add(r):i.delete(r),s(i)}else s(Ii(e,a))})},mounted:ta,beforeUpdate(e,t,n){e._assign=tn(n),ta(e,t,n)}};function ta(e,{value:t,oldValue:n},o){e._modelValue=t,te(t)?e.checked=Ko(t,o.props.value)>-1:on(t)?e.checked=t.has(o.props.value):t!==n&&(e.checked=bn(t,Ii(e,!0)))}const Lo={deep:!0,created(e,{value:t,modifiers:{number:n}},o){const r=on(t);wt(e,"change",()=>{const a=Array.prototype.filter.call(e.options,s=>s.selected).map(s=>n?Hn(kn(s)):kn(s));e._assign(e.multiple?r?new Set(a):a:a[0])}),e._assign=tn(o)},mounted(e,{value:t}){na(e,t)},beforeUpdate(e,t,n){e._assign=tn(n)},updated(e,{value:t}){na(e,t)}};function na(e,t){const n=e.multiple;if(!n||te(t)||on(t)){for(let o=0,r=e.options.length;o<r;o++){const a=e.options[o],s=kn(a);if(n)te(t)?a.selected=Ko(t,s)>-1:a.selected=t.has(s);else if(bn(kn(a),t))return void(e.selectedIndex!==o&&(e.selectedIndex=o))}n||e.selectedIndex===-1||(e.selectedIndex=-1)}}function kn(e){return"_value"in e?e._value:e.value}function Ii(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const gl=["ctrl","shift","alt","meta"],hl={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>gl.some(n=>e[`${n}Key`]&&!t.includes(n))},ie=(e,t)=>(n,...o)=>{for(let r=0;r<t.length;r++){const a=hl[t[r]];if(a&&a(n,t))return}return e(n,...o)},bl={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},zt=(e,t)=>n=>{if(!("key"in n))return;const o=Ot(n.key);return t.some(r=>r===o||bl[r]===o)?e(n):void 0},je={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):ln(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:o}){!t!=!n&&(o?t?(o.beforeEnter(e),ln(e,!0),o.enter(e)):o.leave(e,()=>{ln(e,!1)}):ln(e,t))},beforeUnmount(e,{value:t}){ln(e,t)}};function ln(e,t){e.style.display=t?e._vod:"none"}const ml=Ne({patchProp:(e,t,n,o,r=!1,a,s,i,l)=>{t==="class"?function(c,u,d){const f=c._vtc;f&&(u=(u?[u,...f]:[...f]).join(" ")),u==null?c.removeAttribute("class"):d?c.setAttribute("class",u):c.className=u}(e,o,r):t==="style"?function(c,u,d){const f=c.style,w=Se(d);if(d&&!w){if(u&&!Se(u))for(const T in u)d[T]==null&&Go(f,T,"");for(const T in d)Go(f,T,d[T])}else{const T=f.display;w?u!==d&&(f.cssText=d):u&&c.removeAttribute("style"),"_vod"in c&&(f.display=T)}}(e,n,o):Jn(t)?$o(t)||ol(e,t,0,o,s):(t[0]==="."?(t=t.slice(1),1):t[0]==="^"?(t=t.slice(1),0):function(c,u,d,f){return f?u==="innerHTML"||u==="textContent"||!!(u in c&&Kr.test(u)&&ue(d)):u==="spellcheck"||u==="draggable"||u==="translate"||u==="form"||u==="list"&&c.tagName==="INPUT"||u==="type"&&c.tagName==="TEXTAREA"||Kr.test(u)&&Se(d)?!1:u in c}(e,t,o,r))?function(c,u,d,f,w,T,M){if(u==="innerHTML"||u==="textContent")return f&&M(f,w,T),void(c[u]=d??"");if(u==="value"&&c.tagName!=="PROGRESS"&&!c.tagName.includes("-")){c._value=d;const v=d??"";return c.value===v&&c.tagName!=="OPTION"||(c.value=v),void(d==null&&c.removeAttribute(u))}let x=!1;if(d===""||d==null){const v=typeof c[u];v==="boolean"?d=yr(d):d==null&&v==="string"?(d="",x=!0):v==="number"&&(d=0,x=!0)}try{c[u]=d}catch{}x&&c.removeAttribute(u)}(e,t,o,a,s,i,l):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),function(c,u,d,f,w){if(f&&u.startsWith("xlink:"))d==null?c.removeAttributeNS(Zr,u.slice(6,u.length)):c.setAttributeNS(Zr,u,d);else{const T=Yi(u);d==null||T&&!yr(d)?c.removeAttribute(u):c.setAttribute(u,T?"":d)}}(e,t,o,r))}},nl);let oa;const xl=(...e)=>{const t=(oa||(oa=Ks(ml))).createApp(...e),{mount:n}=t;return t.mount=o=>{const r=function(i){return Se(i)?document.querySelector(i):i}(o);if(!r)return;const a=t._component;ue(a)||a.render||a.template||(a.template=r.innerHTML),r.innerHTML="";const s=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},t};var vl=!1;let ki;const io=e=>ki=e,Di=Symbol();function Po(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var hn;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(hn||(hn={}));const Ci=()=>{};function ra(e,t,n,o=Ci){e.push(t);const r=()=>{const s=e.indexOf(t);s>-1&&(e.splice(s,1),o())};var a;return!n&&Ca()&&(a=r,Re&&Re.cleanups.push(a)),r}function Bt(e,...t){e.slice().forEach(n=>{n(...t)})}function zo(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,o)=>e.set(o,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const o=t[n],r=e[n];Po(r)&&Po(o)&&e.hasOwnProperty(n)&&!we(o)&&!ut(o)?e[n]=zo(r,o):e[n]=o}return e}const yl=Symbol(),{assign:xt}=Object;function wl(e,t,n,o){const{state:r,actions:a,getters:s}=t,i=n.state.value[e];let l;return l=Ni(e,function(){i||(n.state.value[e]=r?r():{});const c=function(u){const d=te(u)?new Array(u.length):{};for(const f in u)d[f]=Ra(u,f);return d}(n.state.value[e]);return xt(c,a,Object.keys(s||{}).reduce((u,d)=>(u[d]=qt(ke(()=>{io(n);const f=n._s.get(e);return s[d].call(f,f)})),u),{}))},t,n,o,!0),l}function Ni(e,t,n={},o,r,a){let s;const i=xt({actions:{}},n),l={deep:!0};let c,u,d,f=qt([]),w=qt([]);const T=o.state.value[e];let M;function x(S){let D;c=u=!1,typeof S=="function"?(S(o.state.value[e]),D={type:hn.patchFunction,storeId:e,events:d}):(zo(o.state.value[e],S),D={type:hn.patchObject,payload:S,storeId:e,events:d});const C=M=Symbol();eo().then(()=>{M===C&&(c=!0)}),u=!0,Bt(f,D,o.state.value[e])}a||T||(o.state.value[e]={}),ye({});const v=a?function(){const{state:S}=n,D=S?S():{};this.$patch(C=>{xt(C,D)})}:Ci;function I(S,D){return function(){io(o);const C=Array.from(arguments),R=[],E=[];let ee;Bt(w,{args:C,name:S,store:p,after:function(oe){R.push(oe)},onError:function(oe){E.push(oe)}});try{ee=D.apply(this&&this.$id===e?this:p,C)}catch(oe){throw Bt(E,oe),oe}return ee instanceof Promise?ee.then(oe=>(Bt(R,oe),oe)).catch(oe=>(Bt(E,oe),Promise.reject(oe))):(Bt(R,ee),ee)}}const h={_p:o,$id:e,$onAction:ra.bind(null,w),$patch:x,$reset:v,$subscribe(S,D={}){const C=ra(f,S,D.detached,()=>R()),R=s.run(()=>Ce(()=>o.state.value[e],E=>{(D.flush==="sync"?u:c)&&S({storeId:e,type:hn.direct,events:d},E)},xt({},l,D)));return C},$dispose:function(){s.stop(),f=[],w=[],o._s.delete(e)}},p=Ut(h);o._s.set(e,p);const y=o._e.run(()=>(s=Da(),s.run(()=>t())));for(const S in y){const D=y[S];if(we(D)&&(!we(A=D)||!A.effect)||ut(D))a||(!T||Po(k=D)&&k.hasOwnProperty(yl)||(we(D)?D.value=T[S]:zo(D,T[S])),o.state.value[e][S]=D);else if(typeof D=="function"){const C=I(S,D);y[S]=C,i.actions[S]=D}}var k,A;return xt(p,y),xt(pe(p),y),Object.defineProperty(p,"$state",{get:()=>o.state.value[e],set:S=>{x(D=>{xt(D,S)})}}),o._p.forEach(S=>{xt(p,s.run(()=>S({store:p,app:o._a,pinia:o,options:i})))}),T&&a&&n.hydrate&&n.hydrate(p.$state,T),c=!0,u=!0,p}function qe(e,t,n){let o,r;const a=typeof t=="function";function s(i,l){const c=fr();return(i=i||c&&pn(Di,null))&&io(i),(i=ki)._s.has(o)||(a?Ni(o,t,r,i):wl(o,r,i)),i._s.get(o)}return typeof e=="string"?(o=e,r=a?n:t):(r=e,o=e.id),s.$id=o,s}function kt(e){{e=pe(e);const t={};for(const n in e){const o=e[n];(we(o)||ut(o))&&(t[n]=Ra(e,n))}return t}}const Tl={addPlaceholder:"Please Enter a new note, press Enter to save",groupPlaceholder:"Please enter a new group value, press Enter to save",saveTagText:"Save",saveTagTitle:"Save content",clearTagText:"Clear",clearTagTitle:"Clear note",cancelTagText:"Cancel",cancelTagTitle:"Exit",searchTagTitle:"Search for notes",searchTagPlaceholder:"Search for notes and press Enter to open the result item",searchCloseTitle:"Close the search box",userIdText:"User ID",userNameText:"User name",userTagTableText:"Note value",groupText:"Group",groupTitle:"Switch group",searchContentText:"Search: ",searchContentPlaceholder:"Enter search content",rangeText:"Range: ",rangeAllText:"All",selectAllTitle:"Select all",deleteSelectedText:"Delete",deleteSelectedTitle:"Delete the selected item",moveSelectedText:"Move",moveSelectedTitle:"Moves the selected item to the specified group",manageGroupsText:"Manage groups",manageGroupsTitle:"Open the group management panel",modifyText:"(Content has been modified)",waitText:"(Waiting for data to load)",closeCotentText:"Close",closeContentTitle:"Close panel",saveContentText:"Save",saveContentTitle:"Save the modification of the content",saveCompletedNotifactionText:"Saved data!",saveErrorNotifactionText:"Failed to save data!!!",backUpNotifactionText:"Data backup completed",restoreNotifactionText:"Data recovery complete",syncConfigNotifactionText:"Successfully synchronized configuration from other tabs",syncGroupNotifactionText:"Successfully synchronized group values from other tabs",syncNoteNotifactionText:"Successfully synchronized notes from other tabs",editText:"Edit",deleteText:"Delete",editTitle:"Edit content",deleteTitle:"Delete content",settingsHeadlineText:"Settings",settingsCloseTitle:"Close the settings panel",settingsAboutSearchBoxText:"Search box",settingsSearchBoxShowIndexText:"Show index value at the top",settingsSearchBoxCanHideSearchFrameText:"Hide the search box when clicking outside the search box",settingsSearchBoxShowGroupNameText:"Result items display their grouped values (Only the non-default group, will not be used to search)",settingsSearchBoxOpenNewTabText:"Open the result item in a new tab (When not enabled, you can press Ctrl + Enter to open the results in a background tab; press Ctrl+Shift+Enter to open the results in a new tab)",settingsSearchBoxEnableShortcutKeysText:"Allow shortcut keys to open the search box (Ctrl+Shift+F)",settingsAboutSearchValueText:"Search content",settingsSearchValueCaseSensitiveText:"Case-sensitive",settingsSearchValueSplitText:'Split search method ("ab cd" ==> "ab" && "cd")',settingsSearchValueRegularText:'Support the use of regular expression (Format: "/pattern/gim")',settingsAddNoteShowNoteGroupNameText:"Allow notes on the web page to display their group value (Only the non-default group; When the note value is empty, it can also be used as a tag)",settingsAddNoteHideNoteText:"Hide detailed notes and display only group values (Turn on the options above to take effect)",settingsAddNoteShowNoteGroupColorText:"Allow group colors to be applied to notes on webpages",settingsAddNoteShowPopoverFrameText:"Allow other notes under the same group to be displayed when hovering over the notes (Only the non-default group)",settingsAddNoteOpenNoteNewTabText:"Open other notes in a new tab (When not enabled, you can hold down Ctrl and click to open in the background tab; hold down Ctrl+Shift and click to open in a new tab)",settingsAddNoteCanHideAddFrameText:"Hide the add box when clicking outside the add box",settingsAboutAddNoteText:"Notes",settingsAboutInterfaceText:"Appearance",settingsInterfaceInsertSearchButtonText:"Display floating search button in the lower right corner of the page",settingsInterfaceConfigText:"Appearance mode: ",settingsInterfaceBrightText:"Bright",settingsInterfaceDarkText:"Dark",settingsInterfaceLanguageText:"Display language: ",settingsAboutOtherText:"Other Settings",settingsAboutStoredDataText:"Stored data",settingsWebDAVConfigText:"Configure WebDAV",settingsWebDAVSyncText:"Sync",settingsWebDAVSyncTitle:"Upload or download notes data",settingsWebDAVUploadText:"Upload",settingsWebDAVUploadTitle:"Upload local notes data to the cloud",settingsWebDAVDownloadText:"Download",settingsWebDAVDownloadTitle:"Download cloud notes data to local",settingsWebDAVEnableText:"Enable the WebDAV sync data",settingsFrameInterfaceAutoSyncText:"Synchronize data changes from other tabs",settingsStoredDataLastTimeText:"Last modified time: ",settingsWebDAVSyncTimeText:"Last WebDAV sync time: ",settingsStoredDataExportTitle:"Back up all stored data to a file",settingsStoredDataImportIitle:"Restore all stored data from a file",settingsAboutScriptText:"About the script",settingsScriptAuthorText:"Script author: ",settingsScriptVersionText:"Script version: ",settingsScriptCoreText:"Core version: ",settingsScriptLibraryText:"Library: ",settingsScriptIconText:"Icon: ",settingsScriptHandlerText:"Script manager: ",settingsIconText:"Icon: ",gmSettingsText:"Open the settings panel",gmManagementText:"Open the notes management panel",gmGroupText:"Open the group management panel",gmExportText:"Backup data",gmImportText:"Restore data",defaultGroupText:"Default",groupNewValueText:"New group",groupCreateValueText:"New group",groupCreateValueTitle:"Create a new group",groupValueText:"Group name",groupPrimaryColorText:"Primary color",groupSecondaryColorText:"Secondary color",groupWeightText:"Weight",selectGroupHeaderText:"Select group",optionsImportNoFileText:"No file selected!",optionsImportNotATextFile:"This is not a text file!",optionsImportValidText:"This is an invalid file!",optionsImportCannotFindFile:"Cannot find file!",optionsImportEmptyText:"File content is empty!",optionsImportErrorObjectText:"Error parsing object!",cancelText:"Cancel",webDAVHeaderText:"WebDAV configuration",webDAVURLText:"WebDAV URL(e.g. https://example.com/):",webDAVFileText:"File path(Relative WebDAV root, e.g. notes/data.txt):",webDAVUserText:"WebDAV User name:",webDAVPasswordText:"WebDAV password:",webDAVPassphraseText:"passphrase(Optional, used to encrypt file):",webDAVIntervalText:"Auto sync interval(min, 0 disables auto sync):",webDAVSyncModeText:"Sync mode:",webDAVSyncModeTwoWayText:"Two-way",webDAVSyncModeUploadText:"Upload only",webDAVSyncModeDownloadText:"Download only",webDAVConfigInvalidText:"Invalid configuration for WebDAV!",webDAVInternalErrorText:"Internal error!",webDAVResponseContentErrorText:"The content of the network response is incorrect!",webDAVVerifyErrorText:"Server validation error! Please check the user and password configuration",webDAVPermissionErrorText:"No access permission for the specified path!",webDAVFileLostErrorText:"File not found!",webDAVContentDecodeErrorText:"Data decryption error!",webDAVUnknownErrorText:"Unknown error!",webDAVUploadSuccessText:"WebDAV: Upload successful",webDAVDownloadSuccessText:"WebDAV: Download successful",webDAVNoChangeText:"WebDAV: No data changes"},jl={addPlaceholder:"请输入新的备注，按下Enter键可保存",groupPlaceholder:"请输入新的分组值，按下Enter键可保存",saveTagText:"保存",saveTagTitle:"保存内容",clearTagText:"清除",clearTagTitle:"清除备注",cancelTagText:"取消",cancelTagTitle:"退出",searchTagTitle:"搜索备注",searchTagPlaceholder:"搜索备注，按下Enter键打开结果项",searchCloseTitle:"关闭搜索框",userIdText:"用户 ID",userNameText:"用户名",userTagTableText:"备注值",groupText:"分组",groupTitle:"切换分组",searchContentText:"搜索: ",searchContentPlaceholder:"请输入搜索内容",rangeText:"范围: ",rangeAllText:"全部",selectAllTitle:"全选",deleteSelectedText:"删除选中项",deleteSelectedTitle:"将选中的项删除",moveSelectedText:"移动选中项",moveSelectedTitle:"将选中的项移动至指定分组中",manageGroupsText:"分组管理",manageGroupsTitle:"打开分组管理面板",modifyText:"(内容已被修改)",waitText:"(等待数据加载中)",closeCotentText:"关闭",closeContentTitle:"关闭面板",saveContentText:"保存",saveContentTitle:"保存对内容的修改",saveCompletedNotifactionText:"已保存数据！",saveErrorNotifactionText:"保存数据失败！！！",backUpNotifactionText:"数据备份完成",restoreNotifactionText:"数据恢复完成",syncConfigNotifactionText:"已成功同步来自其它标签页的配置",syncGroupNotifactionText:"已成功同步来自其它标签页的分组值",syncNoteNotifactionText:"已成功同步来自其它标签页的备注信息",editText:"编辑",deleteText:"删除",editTitle:"编辑内容",deleteTitle:"删除内容",settingsHeadlineText:"设置",settingsCloseTitle:"关闭设置面板",settingsAboutSearchBoxText:"搜索框",settingsSearchBoxShowIndexText:"在顶部显示索引值",settingsSearchBoxCanHideSearchFrameText:"点击搜索框外部时隐藏搜索框",settingsSearchBoxShowGroupNameText:"结果项显示其分组值 (仅非默认分组时，不会被用于搜索)",settingsSearchBoxOpenNewTabText:"在新标签页中打开结果项 (未启用时，可以按下 Ctrl+Enter 在后台标签中打开结果；按下 Ctrl+Shift+Enter 在新标签页中打开结果)",settingsSearchBoxEnableShortcutKeysText:"允许使用快捷键打开搜索框 (Ctrl+Shift+F)",settingsAboutSearchValueText:"搜索内容",settingsSearchValueCaseSensitiveText:"区分字母大小写",settingsSearchValueSplitText:'拆分式搜索方法 ("ab cd" ==> "ab" && "cd")',settingsSearchValueRegularText:'支持使用正则表达式 (格式: "/pattern/gim")',settingsAddNoteShowNoteGroupNameText:"允许网页上的备注显示其分组值 (仅非默认分组时；备注值为空时也可以当作标签来使用)",settingsAddNoteHideNoteText:"隐藏详细的备注内容，仅显示分组值 (开启上面的选项才生效)",settingsAddNoteShowNoteGroupColorText:"允许将分组颜色应用到网页上的备注",settingsAddNoteShowPopoverFrameText:"允许悬停在备注上时显示同分组下的其他备注 (仅非默认分组时)",settingsAddNoteOpenNoteNewTabText:"在新标签页中打开其他备注 (未启用时，可以按住 Ctrl 并点击在后台标签中打开；按住 Ctrl+Shift 并点击在新标签页中打开)",settingsAddNoteCanHideAddFrameText:"点击添加框外部时隐藏添加框",settingsAboutAddNoteText:"备注",settingsAboutInterfaceText:"外观",settingsInterfaceInsertSearchButtonText:"在网页的右下角显示浮动搜索按钮",settingsInterfaceConfigText:"外观模式: ",settingsInterfaceBrightText:"明亮",settingsInterfaceDarkText:"暗黑",settingsInterfaceLanguageText:"显示语言: ",settingsAboutOtherText:"其他设置",settingsAboutStoredDataText:"存储数据",settingsWebDAVConfigText:"配置 WebDAV",settingsWebDAVSyncText:"同步数据",settingsWebDAVSyncTitle:"上传或下载备注数据",settingsWebDAVUploadText:"上传数据",settingsWebDAVUploadTitle:"上传本地备注数据至云端",settingsWebDAVDownloadText:"下载数据",settingsWebDAVDownloadTitle:"下载云端备注数据至本地",settingsWebDAVEnableText:"启用 WebDAV 同步数据功能",settingsFrameInterfaceAutoSyncText:"同步来自其他标签页的数据变动",settingsStoredDataLastTimeText:"上次修改时间: ",settingsWebDAVSyncTimeText:"上次 WebDAV 同步时间: ",settingsStoredDataExportTitle:"备份所有存储数据到文件中",settingsStoredDataImportIitle:"从文件中恢复所有存储数据",settingsAboutScriptText:"关于脚本",settingsScriptAuthorText:"脚本作者: ",settingsScriptVersionText:"脚本版本: ",settingsScriptCoreText:"核心版本: ",settingsScriptLibraryText:"依赖库: ",settingsScriptIconText:"图标: ",settingsScriptHandlerText:"脚本管理器: ",settingsIconText:"图标: ",gmSettingsText:"打开设置面板",gmManagementText:"打开备注管理面板",gmGroupText:"打开分组管理面板",gmExportText:"备份数据",gmImportText:"恢复数据",defaultGroupText:"默认分组",groupNewValueText:"新的分组",groupCreateValueText:"新建分组",groupCreateValueTitle:"创建新的分组",groupValueText:"分组名",groupPrimaryColorText:"主要颜色",groupSecondaryColorText:"次要颜色",groupWeightText:"权重",selectGroupHeaderText:"选择分组",optionsImportNoFileText:"没有选择文件！",optionsImportNotATextFile:"这不是一个文本文件！",optionsImportValidText:"这是一个无效的文件！",optionsImportCannotFindFile:"无法找到文件！",optionsImportEmptyText:"文件内容为空！",optionsImportErrorObjectText:"解析对象时出错！",cancelText:"取消",webDAVHeaderText:"WebDAV 配置",webDAVURLText:"WebDAV URL(例如: https://example.com/):",webDAVFileText:"数据文件路径(相对 WebDAV 根目录，例如: notes/data.txt):",webDAVUserText:"WebDAV 用户名:",webDAVPasswordText:"WebDAV 密码:",webDAVPassphraseText:"密码短语(可选，用于加密数据文件):",webDAVIntervalText:"自动同步间隔(分钟，为 0 时表示禁用自动同步):",webDAVSyncModeText:"同步模式:",webDAVSyncModeTwoWayText:"双向的",webDAVSyncModeUploadText:"仅上传",webDAVSyncModeDownloadText:"仅下载",webDAVConfigInvalidText:"WebDAV 的配置无效！",webDAVInternalErrorText:"内部错误！",webDAVResponseContentErrorText:"网络响应的内容不正确！",webDAVVerifyErrorText:"服务端验证出错！请检查用户名及密码配置",webDAVPermissionErrorText:"没有指定路径的访问权限！",webDAVFileLostErrorText:"没有找到文件！",webDAVContentDecodeErrorText:"数据解码错误！",webDAVUnknownErrorText:"未知错误！",webDAVUploadSuccessText:"WebDAV: 上传数据完成",webDAVDownloadSuccessText:"WebDAV: 下载数据完成",webDAVNoChangeText:"WebDAV: 无数据变化"},Sl={addPlaceholder:"請輸入新的備註，按下Enter鍵可儲存",groupPlaceholder:"請輸入新的分組值，按下Enter鍵可儲存",saveTagText:"儲存",saveTagTitle:"儲存內容",clearTagText:"清除",clearTagTitle:"清除備註",cancelTagText:"取消",cancelTagTitle:"退出",searchTagTitle:"搜尋備註",searchTagPlaceholder:"搜尋備註，按下Enter鍵開啟結果項",searchCloseTitle:"關閉搜尋框",userIdText:"使用者 ID",userNameText:"使用者名稱",userTagTableText:"備註值",groupText:"分組",groupTitle:"切換分组",searchContentText:"搜尋: ",searchContentPlaceholder:"請輸入搜尋內容",rangeText:"範圍: ",rangeAllText:"全部",selectAllTitle:"全選",deleteSelectedText:"刪除選中項",deleteSelectedTitle:"將選中的項刪除",moveSelectedText:"移動選中項",moveSelectedTitle:"將選中的項移動至指定分組中",manageGroupsText:"分組管理",manageGroupsTitle:"開啟分組管理面板",modifyText:"(內容已被修改)",waitText:"(等待資料載入中)",closeCotentText:"關閉",closeContentTitle:"關閉面板",saveContentText:"儲存",saveContentTitle:"儲存對內容的修改",saveCompletedNotifactionText:"已儲存資料！",saveErrorNotifactionText:"儲存資料失敗！！！",backUpNotifactionText:"資料備份完成",restoreNotifactionText:"資料恢復完成",syncConfigNotifactionText:"已成功同步來自其它標籤頁的配置",syncGroupNotifactionText:"已成功同步來自其它標籤頁的分組值",syncNoteNotifactionText:"已成功同步來自其它標籤頁的備註資訊",editText:"編輯",deleteText:"刪除",editTitle:"編輯內容",deleteTitle:"刪除內容",settingsHeadlineText:"設定",settingsCloseTitle:"關閉設定面板",settingsAboutSearchBoxText:"搜尋框",settingsSearchBoxShowIndexText:"在頂部顯示索引值",settingsSearchBoxCanHideSearchFrameText:"點選搜尋框外部時隱藏搜尋框",settingsSearchBoxShowGroupNameText:"結果項顯示其分組值 (僅非預設分組時，不會被用於搜尋)",settingsSearchBoxOpenNewTabText:"在新標籤頁中開啟結果項 (未啟用時，可以按下 Ctrl+Enter 在後臺標籤中開啟結果；按下 Ctrl+Shift+Enter 在新標籤頁中開啟結果)",settingsSearchBoxEnableShortcutKeysText:"允許使用快捷鍵開啟搜尋框 (Ctrl+Shift+F)",settingsAboutSearchValueText:"搜尋內容",settingsSearchValueCaseSensitiveText:"區分字母大小寫",settingsSearchValueSplitText:'拆分式搜尋方法 ("ab cd" ==> "ab" && "cd")',settingsSearchValueRegularText:'支援使用正則表示式 (格式: "/pattern/gim")',settingsAddNoteShowNoteGroupNameText:"允許網頁上的備註顯示其分組值 (僅非預設分組時；備註值為空時也可以當作標籤來使用)",settingsAddNoteHideNoteText:"隱藏詳細的備註內容，僅顯示分組值 (開啟上面的選項才生效)",settingsAddNoteShowNoteGroupColorText:"允許將分組顏色應用到網頁上的備註",settingsAddNoteShowPopoverFrameText:"允許懸停在備註上時顯示同分組下的其他備註 (僅非預設分組時)",settingsAddNoteOpenNoteNewTabText:"在新標籤頁中開啟其他備註 (未啟用時，可以按住 Ctrl 並點選在後臺標籤中開啟；按住 Ctrl+Shift 並點選在新標籤頁中開啟)",settingsAddNoteCanHideAddFrameText:"點選新增框外部時隱藏新增框",settingsAboutAddNoteText:"備註",settingsAboutInterfaceText:"外觀",settingsInterfaceInsertSearchButtonText:"在網頁的右下角顯示浮動搜尋按鈕",settingsInterfaceConfigText:"外觀模式: ",settingsInterfaceBrightText:"明亮",settingsInterfaceDarkText:"暗黑",settingsInterfaceLanguageText:"顯示語言: ",settingsAboutOtherText:"其他設定",settingsAboutStoredDataText:"儲存資料",settingsWebDAVConfigText:"配置 WebDAV",settingsWebDAVSyncText:"同步資料",settingsWebDAVSyncTitle:"上傳或下載備註資料",settingsWebDAVUploadText:"上傳資料",settingsWebDAVUploadTitle:"上傳本地備註資料至雲端",settingsWebDAVDownloadText:"下載資料",settingsWebDAVDownloadTitle:"下載雲端備註資料至本地",settingsWebDAVEnableText:"啟用 WebDAV 同步資料功能",settingsFrameInterfaceAutoSyncText:"同步來自其他標籤頁的資料變動",settingsStoredDataLastTimeText:"上次修改時間: ",settingsWebDAVSyncTimeText:"上次 WebDAV 同步時間: ",settingsStoredDataExportTitle:"備份所有儲存資料到檔案中",settingsStoredDataImportIitle:"從檔案中恢復所有儲存資料",settingsAboutScriptText:"關於指令碼",settingsScriptAuthorText:"指令碼作者: ",settingsScriptVersionText:"指令碼版本: ",settingsScriptCoreText:"核心版本: ",settingsScriptLibraryText:"依賴庫: ",settingsScriptIconText:"圖示: ",settingsScriptHandlerText:"指令碼管理器: ",settingsIconText:"圖示: ",gmSettingsText:"開啟設定面板",gmManagementText:"開啟備註管理面板",gmGroupText:"開啟分組管理面板",gmExportText:"備份資料",gmImportText:"恢復資料",defaultGroupText:"預設分組",groupNewValueText:"新的分組",groupCreateValueText:"新建分組",groupCreateValueTitle:"建立新的分組",groupValueText:"分組名",groupPrimaryColorText:"主要顏色",groupSecondaryColorText:"次要顏色",groupWeightText:"權重",selectGroupHeaderText:"選擇分組",optionsImportNoFileText:"沒有選擇檔案！",optionsImportNotATextFile:"這不是一個文字檔案！",optionsImportValidText:"這是一個無效的檔案！",optionsImportCannotFindFile:"無法找到檔案！",optionsImportEmptyText:"檔案內容為空！",optionsImportErrorObjectText:"解析物件時出錯！",cancelText:"取消",webDAVHeaderText:"WebDAV 配置",webDAVURLText:"WebDAV URL(例如: https://example.com/):",webDAVFileText:"資料檔案路徑(相對 WebDAV 根目錄，例如: notes/data.txt):",webDAVUserText:"WebDAV 使用者名稱:",webDAVPasswordText:"WebDAV 密碼:",webDAVPassphraseText:"密碼短語(可選，用於加密資料檔案):",webDAVIntervalText:"自動同步間隔(分鐘，為 0 時表示禁用自動同步):",webDAVSyncModeText:"同步模式:",webDAVSyncModeTwoWayText:"雙向的",webDAVSyncModeUploadText:"僅上傳",webDAVSyncModeDownloadText:"僅下載",webDAVConfigInvalidText:"WebDAV 的配置無效！",webDAVInternalErrorText:"內部錯誤！",webDAVResponseContentErrorText:"網路響應的內容不正確！",webDAVVerifyErrorText:"服務端驗證出錯！請檢查使用者名稱及密碼配置",webDAVPermissionErrorText:"沒有指定路徑的訪問許可權！",webDAVFileLostErrorText:"沒有找到檔案！",webDAVContentDecodeErrorText:"資料解碼錯誤！",webDAVUnknownErrorText:"未知錯誤！",webDAVUploadSuccessText:"WebDAV: 上傳資料完成",webDAVDownloadSuccessText:"WebDAV: 下载数据完成",webDAVNoChangeText:"webDAV: 無資料變化"};class Il{constructor(){st(this,"lang");st(this,"type");this.lang={en:Tl,zhHans:jl,zhHant:Sl},this.type="en"}get(){return this.lang[this.type]}query(t){return this.lang[this.type][t]||""}setLangDict(t){const n=["en","zhHans","zhHant"];for(const o in t){const r=o;n.forEach(a=>{const s=t[r];if(s){const i=s[a];i&&(this.lang[a][r]=i)}})}}getLangType(){return this.type}setLangType(t){switch(t==null?void 0:t.toLowerCase().replaceAll("_","").replaceAll("-","")){case"zh":case"zhcn":case"zhhans":this.type="zhHans";break;case"zhhk":case"zhtw":case"zhhant":this.type="zhHant";break;default:this.type="en"}}getLangOptions(){return{en:"English (en)",zhHans:"简体中文 (zh-Hans)",zhHant:"繁體中文 (zh-Hant)"}}}const fe={error(e){const t=`The required ${e} method is incomplete!!!`;console.error(t)},warn(e){console.warn(`The required ${e} method is incomplete!!!`)},tips(e){console.info("Tips: "+e)},info(){return typeof GM_info=="object"?GM_info:(this.warn("GM_info"),{scriptHandler:"Unknown",script:{version:"0.0.0"}})},getValue(e,t){return typeof GM_getValue=="function"?GM_getValue(e,t):(this.error("GM_getValue"),t)},setValue(e,t){typeof GM_setValue=="function"?GM_setValue(e,t):this.error("GM_setValue")},deleteValue(e){typeof GM_deleteValue=="function"?GM_deleteValue(e):this.error("GM_deleteValue")},listValues(){return typeof GM_listValues=="function"?GM_listValues():(this.error("GM_listValues"),[])},openInTab(e,t){typeof GM_openInTab=="function"?GM_openInTab(e,t):this.error("GM_openInTab")},registerMenuCommand(e,t){if(typeof GM_registerMenuCommand=="function"){const{scriptHandler:n,version:o="0"}=this.info();return n==="Violentmonkey"&&aa("2.12.5",o,".",!0)?(this.tips("Maybe you should update Violentmonkey to 2.12.5 or higher."),null):GM_registerMenuCommand(e,t)}return this.warn("GM_registerMenuCommand"),null},unregisterMenuCommand(e){if(typeof GM_unregisterMenuCommand=="function"){const{scriptHandler:t,version:n="0"}=this.info();if(t==="Violentmonkey"&&aa("2.12.5",n,".",!0))return void this.tips("Maybe you should update Violentmonkey to 2.12.5 or higher.");GM_unregisterMenuCommand(e)}else this.warn("GM_unregisterMenuCommand")},addValueChangeListener(e,t){return typeof GM_addValueChangeListener=="function"?GM_addValueChangeListener(e,t):(this.warn("GM_addValueChangeListener"),null)},removeValueChangeListener(e){typeof GM_removeValueChangeListener=="function"?GM_removeValueChangeListener(e):this.warn("GM_removeValueChangeListener")},setClipboard(e){typeof GM_setClipboard=="function"?GM_setClipboard(e):this.error("GM_setClipboard")},addStyle(e){if(typeof GM_addStyle=="function")return GM_addStyle(e);{const t=document.createElement("style");return t.innerHTML=e,document.body.appendChild(t),t}},ajax(e,t){const{method:n="GET",headers:o,data:r,responseType:a}=t;return new Promise((s,i)=>{typeof GM_xmlhttpRequest=="function"?GM_xmlhttpRequest({method:n,url:e,headers:o,data:r,nocache:!0,responseType:a,onload:l=>{s(l)},onerror:l=>{console.error(l),i(l)}}):(this.error("GM_xmlhttpRequest"),i(null))})}};var Ht=(e=>(e[e.Self=0]="Self",e[e.Blank=1]="Blank",e[e.BgBlank=2]="BgBlank",e))(Ht||{});function aa(e,t,n=".",o=!1){const r=e.split(n),a=t.split(n);let s=!1;const i=r.length,l=a.length;for(let c=(i<l?i:l)-1;c>=0;c--){const u=Number(r[c]),d=Number(a[c]);s=u>d||!(!o||u!==d)}return s}function kl(e,t){t===1?fe.openInTab(e,{active:!0,insert:!0,setParent:!0}):t===2?fe.openInTab(e,{active:!1,insert:!0,setParent:!0}):window.location.href=e}function ia(e){return e.getBoundingClientRect().right+document.documentElement.scrollLeft}function sa(e){return e.getBoundingClientRect().bottom+document.documentElement.scrollTop}function Ai(e,t={}){const{brackets:n,double:o,prefix:r}=t;if(e&&(r&&(e=r+e),o&&(e=o+e+o),n))switch(n){case"angle":e=`<${e}>`;break;case"curly":e=`{${e}}`;break;case"square":e=`[${e}]`;break;case"parentheses":e=`(${e})`}return e}function wo(e,t){return e.toString().padStart(t,"0")}function Mi(e,t){return{Authorization:"Basic "+window.btoa(e+":"+t)}}async function To(e,t,n){const o=Mi(t,n);try{const r=await fe.ajax(e,{method:"GET",headers:o});return{status:r.status,data:r.response}}catch{return{status:-1,data:null}}}async function la(e,t,n,o){const r=Mi(t,n);try{const a=await fe.ajax(e,{method:"PUT",headers:r,data:o});return{status:a.status,data:a.response}}catch{return{status:-1,data:null}}}function cn(e,t){return e.endsWith("/")||(e+="/"),t.startsWith("/")&&(t=t.slice(1)),e+t}const Be={timer:{},debounce(e,t,n,o){return window.clearTimeout(this.timer[e]),o&&this.timer[e]===void 0&&t(),this.timer[e]=window.setTimeout(()=>{t(),this.timer[e]=void 0},n),{cancel:()=>{window.clearTimeout(this.timer[e]),this.timer[e]=void 0}}}};var jo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Dl(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function o(){if(this instanceof o){var r=[null];return r.push.apply(r,arguments),new(Function.bind.apply(t,r))}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(o){var r=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(n,o,r.get?r:{enumerable:!0,get:function(){return e[o]}})}),n}var Oo={},Cl={get exports(){return Oo},set exports(e){Oo=e}},Uo={},Nl={get exports(){return Uo},set exports(e){Uo=e}};const Al=Dl(Object.freeze(Object.defineProperty({__proto__:null,default:{}},Symbol.toStringTag,{value:"Module"})));var ca;function It(){return ca||(ca=1,Nl.exports=(e=e||function(t,n){var o;if(typeof window<"u"&&window.crypto&&(o=window.crypto),typeof self<"u"&&self.crypto&&(o=self.crypto),typeof globalThis<"u"&&globalThis.crypto&&(o=globalThis.crypto),!o&&typeof window<"u"&&window.msCrypto&&(o=window.msCrypto),!o&&jo!==void 0&&jo.crypto&&(o=jo.crypto),!o)try{o=Al}catch{}var r=function(){if(o){if(typeof o.getRandomValues=="function")try{return o.getRandomValues(new Uint32Array(1))[0]}catch{}if(typeof o.randomBytes=="function")try{return o.randomBytes(4).readInt32LE()}catch{}}throw new Error("Native crypto module could not be used to get secure random number.")},a=Object.create||function(){function x(){}return function(v){var I;return x.prototype=v,I=new x,x.prototype=null,I}}(),s={},i=s.lib={},l=i.Base={extend:function(x){var v=a(this);return x&&v.mixIn(x),v.hasOwnProperty("init")&&this.init!==v.init||(v.init=function(){v.$super.init.apply(this,arguments)}),v.init.prototype=v,v.$super=this,v},create:function(){var x=this.extend();return x.init.apply(x,arguments),x},init:function(){},mixIn:function(x){for(var v in x)x.hasOwnProperty(v)&&(this[v]=x[v]);x.hasOwnProperty("toString")&&(this.toString=x.toString)},clone:function(){return this.init.prototype.extend(this)}},c=i.WordArray=l.extend({init:function(x,v){x=this.words=x||[],this.sigBytes=v!=n?v:4*x.length},toString:function(x){return(x||d).stringify(this)},concat:function(x){var v=this.words,I=x.words,h=this.sigBytes,p=x.sigBytes;if(this.clamp(),h%4)for(var y=0;y<p;y++){var k=I[y>>>2]>>>24-y%4*8&255;v[h+y>>>2]|=k<<24-(h+y)%4*8}else for(var A=0;A<p;A+=4)v[h+A>>>2]=I[A>>>2];return this.sigBytes+=p,this},clamp:function(){var x=this.words,v=this.sigBytes;x[v>>>2]&=4294967295<<32-v%4*8,x.length=t.ceil(v/4)},clone:function(){var x=l.clone.call(this);return x.words=this.words.slice(0),x},random:function(x){for(var v=[],I=0;I<x;I+=4)v.push(r());return new c.init(v,x)}}),u=s.enc={},d=u.Hex={stringify:function(x){for(var v=x.words,I=x.sigBytes,h=[],p=0;p<I;p++){var y=v[p>>>2]>>>24-p%4*8&255;h.push((y>>>4).toString(16)),h.push((15&y).toString(16))}return h.join("")},parse:function(x){for(var v=x.length,I=[],h=0;h<v;h+=2)I[h>>>3]|=parseInt(x.substr(h,2),16)<<24-h%8*4;return new c.init(I,v/2)}},f=u.Latin1={stringify:function(x){for(var v=x.words,I=x.sigBytes,h=[],p=0;p<I;p++){var y=v[p>>>2]>>>24-p%4*8&255;h.push(String.fromCharCode(y))}return h.join("")},parse:function(x){for(var v=x.length,I=[],h=0;h<v;h++)I[h>>>2]|=(255&x.charCodeAt(h))<<24-h%4*8;return new c.init(I,v)}},w=u.Utf8={stringify:function(x){try{return decodeURIComponent(escape(f.stringify(x)))}catch{throw new Error("Malformed UTF-8 data")}},parse:function(x){return f.parse(unescape(encodeURIComponent(x)))}},T=i.BufferedBlockAlgorithm=l.extend({reset:function(){this._data=new c.init,this._nDataBytes=0},_append:function(x){typeof x=="string"&&(x=w.parse(x)),this._data.concat(x),this._nDataBytes+=x.sigBytes},_process:function(x){var v,I=this._data,h=I.words,p=I.sigBytes,y=this.blockSize,k=p/(4*y),A=(k=x?t.ceil(k):t.max((0|k)-this._minBufferSize,0))*y,S=t.min(4*A,p);if(A){for(var D=0;D<A;D+=y)this._doProcessBlock(h,D);v=h.splice(0,A),I.sigBytes-=S}return new c.init(v,S)},clone:function(){var x=l.clone.call(this);return x._data=this._data.clone(),x},_minBufferSize:0});i.Hasher=T.extend({cfg:l.extend(),init:function(x){this.cfg=this.cfg.extend(x),this.reset()},reset:function(){T.reset.call(this),this._doReset()},update:function(x){return this._append(x),this._process(),this},finalize:function(x){return x&&this._append(x),this._doFinalize()},blockSize:16,_createHelper:function(x){return function(v,I){return new x.init(I).finalize(v)}},_createHmacHelper:function(x){return function(v,I){return new M.HMAC.init(x,I).finalize(v)}}});var M=s.algo={};return s}(Math),e)),Uo;var e}var ua,Bo={},Ml={get exports(){return Bo},set exports(e){Bo=e}};function Vl(){return ua||(ua=1,Ml.exports=(e=It(),function(){var t=e,n=t.lib.WordArray;function o(r,a,s){for(var i=[],l=0,c=0;c<a;c++)if(c%4){var u=s[r.charCodeAt(c-1)]<<c%4*2|s[r.charCodeAt(c)]>>>6-c%4*2;i[l>>>2]|=u<<24-l%4*8,l++}return n.create(i,l)}t.enc.Base64={stringify:function(r){var a=r.words,s=r.sigBytes,i=this._map;r.clamp();for(var l=[],c=0;c<s;c+=3)for(var u=(a[c>>>2]>>>24-c%4*8&255)<<16|(a[c+1>>>2]>>>24-(c+1)%4*8&255)<<8|a[c+2>>>2]>>>24-(c+2)%4*8&255,d=0;d<4&&c+.75*d<s;d++)l.push(i.charAt(u>>>6*(3-d)&63));var f=i.charAt(64);if(f)for(;l.length%4;)l.push(f);return l.join("")},parse:function(r){var a=r.length,s=this._map,i=this._reverseMap;if(!i){i=this._reverseMap=[];for(var l=0;l<s.length;l++)i[s.charCodeAt(l)]=l}var c=s.charAt(64);if(c){var u=r.indexOf(c);u!==-1&&(a=u)}return o(r,a,i)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),e.enc.Base64)),Bo;var e}var da,Wo={},_l={get exports(){return Wo},set exports(e){Wo=e}};function El(){return da||(da=1,_l.exports=(e=It(),function(t){var n=e,o=n.lib,r=o.WordArray,a=o.Hasher,s=n.algo,i=[];(function(){for(var w=0;w<64;w++)i[w]=4294967296*t.abs(t.sin(w+1))|0})();var l=s.MD5=a.extend({_doReset:function(){this._hash=new r.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(w,T){for(var M=0;M<16;M++){var x=T+M,v=w[x];w[x]=16711935&(v<<8|v>>>24)|4278255360&(v<<24|v>>>8)}var I=this._hash.words,h=w[T+0],p=w[T+1],y=w[T+2],k=w[T+3],A=w[T+4],S=w[T+5],D=w[T+6],C=w[T+7],R=w[T+8],E=w[T+9],ee=w[T+10],oe=w[T+11],de=w[T+12],Q=w[T+13],re=w[T+14],se=w[T+15],B=I[0],L=I[1],G=I[2],O=I[3];B=c(B,L,G,O,h,7,i[0]),O=c(O,B,L,G,p,12,i[1]),G=c(G,O,B,L,y,17,i[2]),L=c(L,G,O,B,k,22,i[3]),B=c(B,L,G,O,A,7,i[4]),O=c(O,B,L,G,S,12,i[5]),G=c(G,O,B,L,D,17,i[6]),L=c(L,G,O,B,C,22,i[7]),B=c(B,L,G,O,R,7,i[8]),O=c(O,B,L,G,E,12,i[9]),G=c(G,O,B,L,ee,17,i[10]),L=c(L,G,O,B,oe,22,i[11]),B=c(B,L,G,O,de,7,i[12]),O=c(O,B,L,G,Q,12,i[13]),G=c(G,O,B,L,re,17,i[14]),B=u(B,L=c(L,G,O,B,se,22,i[15]),G,O,p,5,i[16]),O=u(O,B,L,G,D,9,i[17]),G=u(G,O,B,L,oe,14,i[18]),L=u(L,G,O,B,h,20,i[19]),B=u(B,L,G,O,S,5,i[20]),O=u(O,B,L,G,ee,9,i[21]),G=u(G,O,B,L,se,14,i[22]),L=u(L,G,O,B,A,20,i[23]),B=u(B,L,G,O,E,5,i[24]),O=u(O,B,L,G,re,9,i[25]),G=u(G,O,B,L,k,14,i[26]),L=u(L,G,O,B,R,20,i[27]),B=u(B,L,G,O,Q,5,i[28]),O=u(O,B,L,G,y,9,i[29]),G=u(G,O,B,L,C,14,i[30]),B=d(B,L=u(L,G,O,B,de,20,i[31]),G,O,S,4,i[32]),O=d(O,B,L,G,R,11,i[33]),G=d(G,O,B,L,oe,16,i[34]),L=d(L,G,O,B,re,23,i[35]),B=d(B,L,G,O,p,4,i[36]),O=d(O,B,L,G,A,11,i[37]),G=d(G,O,B,L,C,16,i[38]),L=d(L,G,O,B,ee,23,i[39]),B=d(B,L,G,O,Q,4,i[40]),O=d(O,B,L,G,h,11,i[41]),G=d(G,O,B,L,k,16,i[42]),L=d(L,G,O,B,D,23,i[43]),B=d(B,L,G,O,E,4,i[44]),O=d(O,B,L,G,de,11,i[45]),G=d(G,O,B,L,se,16,i[46]),B=f(B,L=d(L,G,O,B,y,23,i[47]),G,O,h,6,i[48]),O=f(O,B,L,G,C,10,i[49]),G=f(G,O,B,L,re,15,i[50]),L=f(L,G,O,B,S,21,i[51]),B=f(B,L,G,O,de,6,i[52]),O=f(O,B,L,G,k,10,i[53]),G=f(G,O,B,L,ee,15,i[54]),L=f(L,G,O,B,p,21,i[55]),B=f(B,L,G,O,R,6,i[56]),O=f(O,B,L,G,se,10,i[57]),G=f(G,O,B,L,D,15,i[58]),L=f(L,G,O,B,Q,21,i[59]),B=f(B,L,G,O,A,6,i[60]),O=f(O,B,L,G,oe,10,i[61]),G=f(G,O,B,L,y,15,i[62]),L=f(L,G,O,B,E,21,i[63]),I[0]=I[0]+B|0,I[1]=I[1]+L|0,I[2]=I[2]+G|0,I[3]=I[3]+O|0},_doFinalize:function(){var w=this._data,T=w.words,M=8*this._nDataBytes,x=8*w.sigBytes;T[x>>>5]|=128<<24-x%32;var v=t.floor(M/4294967296),I=M;T[15+(x+64>>>9<<4)]=16711935&(v<<8|v>>>24)|4278255360&(v<<24|v>>>8),T[14+(x+64>>>9<<4)]=16711935&(I<<8|I>>>24)|4278255360&(I<<24|I>>>8),w.sigBytes=4*(T.length+1),this._process();for(var h=this._hash,p=h.words,y=0;y<4;y++){var k=p[y];p[y]=16711935&(k<<8|k>>>24)|4278255360&(k<<24|k>>>8)}return h},clone:function(){var w=a.clone.call(this);return w._hash=this._hash.clone(),w}});function c(w,T,M,x,v,I,h){var p=w+(T&M|~T&x)+v+h;return(p<<I|p>>>32-I)+T}function u(w,T,M,x,v,I,h){var p=w+(T&x|M&~x)+v+h;return(p<<I|p>>>32-I)+T}function d(w,T,M,x,v,I,h){var p=w+(T^M^x)+v+h;return(p<<I|p>>>32-I)+T}function f(w,T,M,x,v,I,h){var p=w+(M^(T|~x))+v+h;return(p<<I|p>>>32-I)+T}n.MD5=a._createHelper(l),n.HmacMD5=a._createHmacHelper(l)}(Math),e.MD5)),Wo;var e}var pa,Ro={},Gl={get exports(){return Ro},set exports(e){Ro=e}},Ho={},Ll={get exports(){return Ho},set exports(e){Ho=e}};function Pl(){return pa||(pa=1,Ll.exports=(i=It(),t=(e=i).lib,n=t.WordArray,o=t.Hasher,r=e.algo,a=[],s=r.SHA1=o.extend({_doReset:function(){this._hash=new n.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(l,c){for(var u=this._hash.words,d=u[0],f=u[1],w=u[2],T=u[3],M=u[4],x=0;x<80;x++){if(x<16)a[x]=0|l[c+x];else{var v=a[x-3]^a[x-8]^a[x-14]^a[x-16];a[x]=v<<1|v>>>31}var I=(d<<5|d>>>27)+M+a[x];I+=x<20?1518500249+(f&w|~f&T):x<40?1859775393+(f^w^T):x<60?(f&w|f&T|w&T)-1894007588:(f^w^T)-899497514,M=T,T=w,w=f<<30|f>>>2,f=d,d=I}u[0]=u[0]+d|0,u[1]=u[1]+f|0,u[2]=u[2]+w|0,u[3]=u[3]+T|0,u[4]=u[4]+M|0},_doFinalize:function(){var l=this._data,c=l.words,u=8*this._nDataBytes,d=8*l.sigBytes;return c[d>>>5]|=128<<24-d%32,c[14+(d+64>>>9<<4)]=Math.floor(u/4294967296),c[15+(d+64>>>9<<4)]=u,l.sigBytes=4*c.length,this._process(),this._hash},clone:function(){var l=o.clone.call(this);return l._hash=this._hash.clone(),l}}),e.SHA1=o._createHelper(s),e.HmacSHA1=o._createHmacHelper(s),i.SHA1)),Ho;var e,t,n,o,r,a,s,i}var fa,ga,ha={},zl={get exports(){return ha},set exports(e){ha=e}};function ba(){return ga||(ga=1,Gl.exports=function(r){return function(){var a=r,s=a.lib,i=s.Base,l=s.WordArray,c=a.algo,u=c.MD5,d=c.EvpKDF=i.extend({cfg:i.extend({keySize:4,hasher:u,iterations:1}),init:function(f){this.cfg=this.cfg.extend(f)},compute:function(f,w){for(var T,M=this.cfg,x=M.hasher.create(),v=l.create(),I=v.words,h=M.keySize,p=M.iterations;I.length<h;){T&&x.update(T),T=x.update(f).finalize(w),x.reset();for(var y=1;y<p;y++)T=x.finalize(T),x.reset();v.concat(T)}return v.sigBytes=4*h,v}});a.EvpKDF=function(f,w,T){return d.create(T).compute(f,w)}}(),r.EvpKDF}(It(),Pl(),fa||(fa=1,zl.exports=(e=It(),n=(t=e).lib.Base,o=t.enc.Utf8,void(t.algo.HMAC=n.extend({init:function(r,a){r=this._hasher=new r.init,typeof a=="string"&&(a=o.parse(a));var s=r.blockSize,i=4*s;a.sigBytes>i&&(a=r.finalize(a)),a.clamp();for(var l=this._oKey=a.clone(),c=this._iKey=a.clone(),u=l.words,d=c.words,f=0;f<s;f++)u[f]^=1549556828,d[f]^=909522486;l.sigBytes=c.sigBytes=i,this.reset()},reset:function(){var r=this._hasher;r.reset(),r.update(this._iKey)},update:function(r){return this._hasher.update(r),this},finalize:function(r){var a=this._hasher,s=a.finalize(r);return a.reset(),a.finalize(this._oKey.clone().concat(s))}})))))),Ro;var e,t,n,o}var ma,So,xa={},Ol={get exports(){return xa},set exports(e){xa=e}};Cl.exports=function(e){return function(){var t=e,n=t.lib.BlockCipher,o=t.algo,r=[],a=[],s=[],i=[],l=[],c=[],u=[],d=[],f=[],w=[];(function(){for(var x=[],v=0;v<256;v++)x[v]=v<128?v<<1:v<<1^283;var I=0,h=0;for(v=0;v<256;v++){var p=h^h<<1^h<<2^h<<3^h<<4;p=p>>>8^255&p^99,r[I]=p,a[p]=I;var y=x[I],k=x[y],A=x[k],S=257*x[p]^16843008*p;s[I]=S<<24|S>>>8,i[I]=S<<16|S>>>16,l[I]=S<<8|S>>>24,c[I]=S,S=16843009*A^65537*k^257*y^16843008*I,u[p]=S<<24|S>>>8,d[p]=S<<16|S>>>16,f[p]=S<<8|S>>>24,w[p]=S,I?(I=y^x[x[x[A^y]]],h^=x[x[h]]):I=h=1}})();var T=[0,1,2,4,8,16,32,64,128,27,54],M=o.AES=n.extend({_doReset:function(){if(!this._nRounds||this._keyPriorReset!==this._key){for(var x=this._keyPriorReset=this._key,v=x.words,I=x.sigBytes/4,h=4*((this._nRounds=I+6)+1),p=this._keySchedule=[],y=0;y<h;y++)y<I?p[y]=v[y]:(S=p[y-1],y%I?I>6&&y%I==4&&(S=r[S>>>24]<<24|r[S>>>16&255]<<16|r[S>>>8&255]<<8|r[255&S]):(S=r[(S=S<<8|S>>>24)>>>24]<<24|r[S>>>16&255]<<16|r[S>>>8&255]<<8|r[255&S],S^=T[y/I|0]<<24),p[y]=p[y-I]^S);for(var k=this._invKeySchedule=[],A=0;A<h;A++){if(y=h-A,A%4)var S=p[y];else S=p[y-4];k[A]=A<4||y<=4?S:u[r[S>>>24]]^d[r[S>>>16&255]]^f[r[S>>>8&255]]^w[r[255&S]]}}},encryptBlock:function(x,v){this._doCryptBlock(x,v,this._keySchedule,s,i,l,c,r)},decryptBlock:function(x,v){var I=x[v+1];x[v+1]=x[v+3],x[v+3]=I,this._doCryptBlock(x,v,this._invKeySchedule,u,d,f,w,a),I=x[v+1],x[v+1]=x[v+3],x[v+3]=I},_doCryptBlock:function(x,v,I,h,p,y,k,A){for(var S=this._nRounds,D=x[v]^I[0],C=x[v+1]^I[1],R=x[v+2]^I[2],E=x[v+3]^I[3],ee=4,oe=1;oe<S;oe++){var de=h[D>>>24]^p[C>>>16&255]^y[R>>>8&255]^k[255&E]^I[ee++],Q=h[C>>>24]^p[R>>>16&255]^y[E>>>8&255]^k[255&D]^I[ee++],re=h[R>>>24]^p[E>>>16&255]^y[D>>>8&255]^k[255&C]^I[ee++],se=h[E>>>24]^p[D>>>16&255]^y[C>>>8&255]^k[255&R]^I[ee++];D=de,C=Q,R=re,E=se}de=(A[D>>>24]<<24|A[C>>>16&255]<<16|A[R>>>8&255]<<8|A[255&E])^I[ee++],Q=(A[C>>>24]<<24|A[R>>>16&255]<<16|A[E>>>8&255]<<8|A[255&D])^I[ee++],re=(A[R>>>24]<<24|A[E>>>16&255]<<16|A[D>>>8&255]<<8|A[255&C])^I[ee++],se=(A[E>>>24]<<24|A[D>>>16&255]<<16|A[C>>>8&255]<<8|A[255&R])^I[ee++],x[v]=de,x[v+1]=Q,x[v+2]=re,x[v+3]=se},keySize:8});t.AES=n._createHelper(M)}(),e.AES}(It(),Vl(),El(),ba(),ma||(ma=1,Ol.exports=(So=It(),ba(),void(So.lib.Cipher||function(e){var t=So,n=t.lib,o=n.Base,r=n.WordArray,a=n.BufferedBlockAlgorithm,s=t.enc;s.Utf8;var i=s.Base64,l=t.algo.EvpKDF,c=n.Cipher=a.extend({cfg:o.extend(),createEncryptor:function(h,p){return this.create(this._ENC_XFORM_MODE,h,p)},createDecryptor:function(h,p){return this.create(this._DEC_XFORM_MODE,h,p)},init:function(h,p,y){this.cfg=this.cfg.extend(y),this._xformMode=h,this._key=p,this.reset()},reset:function(){a.reset.call(this),this._doReset()},process:function(h){return this._append(h),this._process()},finalize:function(h){return h&&this._append(h),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function h(p){return typeof p=="string"?I:x}return function(p){return{encrypt:function(y,k,A){return h(k).encrypt(p,y,k,A)},decrypt:function(y,k,A){return h(k).decrypt(p,y,k,A)}}}}()});n.StreamCipher=c.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var u=t.mode={},d=n.BlockCipherMode=o.extend({createEncryptor:function(h,p){return this.Encryptor.create(h,p)},createDecryptor:function(h,p){return this.Decryptor.create(h,p)},init:function(h,p){this._cipher=h,this._iv=p}}),f=u.CBC=function(){var h=d.extend();function p(y,k,A){var S,D=this._iv;D?(S=D,this._iv=e):S=this._prevBlock;for(var C=0;C<A;C++)y[k+C]^=S[C]}return h.Encryptor=h.extend({processBlock:function(y,k){var A=this._cipher,S=A.blockSize;p.call(this,y,k,S),A.encryptBlock(y,k),this._prevBlock=y.slice(k,k+S)}}),h.Decryptor=h.extend({processBlock:function(y,k){var A=this._cipher,S=A.blockSize,D=y.slice(k,k+S);A.decryptBlock(y,k),p.call(this,y,k,S),this._prevBlock=D}}),h}(),w=(t.pad={}).Pkcs7={pad:function(h,p){for(var y=4*p,k=y-h.sigBytes%y,A=k<<24|k<<16|k<<8|k,S=[],D=0;D<k;D+=4)S.push(A);var C=r.create(S,k);h.concat(C)},unpad:function(h){var p=255&h.words[h.sigBytes-1>>>2];h.sigBytes-=p}};n.BlockCipher=c.extend({cfg:c.cfg.extend({mode:f,padding:w}),reset:function(){var h;c.reset.call(this);var p=this.cfg,y=p.iv,k=p.mode;this._xformMode==this._ENC_XFORM_MODE?h=k.createEncryptor:(h=k.createDecryptor,this._minBufferSize=1),this._mode&&this._mode.__creator==h?this._mode.init(this,y&&y.words):(this._mode=h.call(k,this,y&&y.words),this._mode.__creator=h)},_doProcessBlock:function(h,p){this._mode.processBlock(h,p)},_doFinalize:function(){var h,p=this.cfg.padding;return this._xformMode==this._ENC_XFORM_MODE?(p.pad(this._data,this.blockSize),h=this._process(!0)):(h=this._process(!0),p.unpad(h)),h},blockSize:4});var T=n.CipherParams=o.extend({init:function(h){this.mixIn(h)},toString:function(h){return(h||this.formatter).stringify(this)}}),M=(t.format={}).OpenSSL={stringify:function(h){var p=h.ciphertext,y=h.salt;return(y?r.create([1398893684,1701076831]).concat(y).concat(p):p).toString(i)},parse:function(h){var p,y=i.parse(h),k=y.words;return k[0]==1398893684&&k[1]==1701076831&&(p=r.create(k.slice(2,4)),k.splice(0,4),y.sigBytes-=16),T.create({ciphertext:y,salt:p})}},x=n.SerializableCipher=o.extend({cfg:o.extend({format:M}),encrypt:function(h,p,y,k){k=this.cfg.extend(k);var A=h.createEncryptor(y,k),S=A.finalize(p),D=A.cfg;return T.create({ciphertext:S,key:y,iv:D.iv,algorithm:h,mode:D.mode,padding:D.padding,blockSize:h.blockSize,formatter:k.format})},decrypt:function(h,p,y,k){return k=this.cfg.extend(k),p=this._parse(p,k.format),h.createDecryptor(y,k).finalize(p.ciphertext)},_parse:function(h,p){return typeof h=="string"?p.parse(h,this):h}}),v=(t.kdf={}).OpenSSL={execute:function(h,p,y,k){k||(k=r.random(8));var A=l.create({keySize:p+y}).compute(h,k),S=r.create(A.words.slice(p),4*y);return A.sigBytes=4*p,T.create({key:A,iv:S,salt:k})}},I=n.PasswordBasedCipher=x.extend({cfg:x.cfg.extend({kdf:v}),encrypt:function(h,p,y,k){var A=(k=this.cfg.extend(k)).kdf.execute(y,h.keySize,h.ivSize);k.iv=A.iv;var S=x.encrypt.call(this,h,p,A.key,k);return S.mixIn(A),S},decrypt:function(h,p,y,k){k=this.cfg.extend(k),p=this._parse(p,k.format);var A=k.kdf.execute(y,h.keySize,h.ivSize,p.salt);return k.iv=A.iv,x.decrypt.call(this,h,p,A.key,k)}})}()))));const va=Oo;var Fo={};({get exports(){return Fo},set exports(e){Fo=e}}).exports=function(e){return e.enc.Utf8}(It());const Ul=Fo,ze=qe("note",{state:()=>{const e=new Il;return{id:"",items:{},config:{searchBox:{showIndex:!1,canHideSearchFrame:!0,showGroupName:!1,openNewTab:!1,enableShortcutKeys:!1},searchValue:{caseSensitive:!0,split:!1,regular:!1},addNote:{showNoteGroupName:!1,hideNoteText:!1,showNoteGroupColor:!1,showPopoverFrame:!1,openNoteNewTab:!1,canHideAddFrame:!0},interface:{insertSearchButton:!0,mode:"dark",language:""},storeData:{autoSync:!0,enableWebDAV:!1,webDAVURL:"",webDAVFile:"",webDAVUser:"",webDAVPassword:"",webDAVPassphrase:"",webDAVSyncMode:"two-way",webDAVAutoSyncInterval:0},other:{}},group:{default:{value:"default",primaryColor:"",secondaryColor:"",weight:0}},storeModificationTime:0,webDAVSyncTime:0,i18n:e,lang:e.get(),menuCommand:{settings:null,management:null,group:null},listener:{items:null,config:null,group:null},webDAVTimer:null,webDAVSyncLoading:!1,changeEvent:null,itemClick:null,defaultColor:{primaryColor:"#3c81df",secondaryColor:"#ffffff"},scriptInfo:{author:{name:"",homepage:""},updated:"",url:"",library:[{name:"Vue",version:"3.2.47",url:"https://vuejs.org/"},{name:"Pinia",version:"2.0.33",url:"https://pinia.vuejs.org/"},{name:"CryptoJS",version:"4.1.1",url:"https://cryptojs.gitbook.io/"}],icons:[{name:"Ikonate",url:"https://ikonate.com/"}]},otherConfigInfo:{},searchBtnClassName:"",searchBtnBoxClassName:""}},getters:{configKeyName:e=>"$"+e.id+"Config",groupKeyName:e=>"$"+e.id+"Group",modificationTimeKeyName:e=>"$"+e.id+"Time",webDAVSyncTimeKeyName:e=>"$"+e.id+"WebDAV",itemsKeyName:e=>"$"+e.id+"Items"},actions:{init(e){this.readValuesFromStorage(),this.findMaxWeightGroupKey(),e&&this.i18n.setLangDict(e),this.i18n.setLangType(this.config.interface.language||window.navigator.language||document.documentElement.lang),this.config.interface.language=this.i18n.getLangType(),this.lang=this.i18n.get(),this.registerMenuCommand(),this.valueChangeListener(),this.webDAVSyncTimer("immediate")},readValuesFromStorage(){const e=fe.listValues();let t=!1;for(const n of e){const o=fe.getValue(n,null);if(o)switch(n){case this.configKeyName:for(const r in this.config)o[r]&&Object.assign(this.config[r],o[r]);break;case this.groupKeyName:Object.assign(this.group,o);break;case this.modificationTimeKeyName:this.storeModificationTime=o;break;case this.webDAVSyncTimeKeyName:this.webDAVSyncTime=o;break;case this.itemsKeyName:Object.assign(this.items,o);break;default:o.tag&&(this.items[n]||(o.name||(o.name=n),this.items[n]=o,t=!0)),fe.deleteValue(n)}}t&&fe.setValue(this.itemsKeyName,this.items)},findMaxWeightGroupKey(){const e=Wn();e.groupKey="default";for(const t in this.group){const n=Number(this.group[t].weight)||0,o=Number(this.group[e.groupKey].weight)||0;n>o?e.groupKey=t:n===o&&[t,e.groupKey].includes("default")&&(e.groupKey="default")}},initOtherConfigInfo(e){this.otherConfigInfo=e;for(const t in this.otherConfigInfo)this.config.other[t]===void 0&&(this.config.other[t]=this.otherConfigInfo[t].default)},writeModificationTime(e){this.storeModificationTime=e||Date.now(),fe.setValue(this.modificationTimeKeyName,this.storeModificationTime)},writeWebDAVSyncTime(){this.webDAVSyncTime=Date.now(),fe.setValue(this.webDAVSyncTimeKeyName,this.webDAVSyncTime)},readModificationTime(){return fe.getValue(this.modificationTimeKeyName,this.storeModificationTime)},executeChangeEvent(e){typeof this.changeEvent=="function"&&this.changeEvent(e)},judgeUsers(e){return e?Object.keys(this.items).includes(e):!1},writeUser(e,t,n,o){return this.storageEvent(()=>{let r=!1;if(this.judgeUsers(e)){const a=this.items[e];n||o&&o!=="default"?(a.tag!==n&&(this.items[e].tag=n,r=!0),a.name!==t&&(this.items[e].name=t,r=!0),a.name!==o&&(this.items[e].group=o,r=!0)):(delete this.items[e],r=!0)}else(n||o&&o!=="default")&&(this.items[e]={tag:n,name:t,group:o},r=!0);return!!r&&(fe.setValue(this.itemsKeyName,this.items),this.writeModificationTime(),!0)},e)},updateUserName(e,t){t&&this.judgeUsers(e)&&(this.items[e].name=t)},setUsers(e,t=!0,n=!0){return this.storageEvent(()=>(this.items=e,n&&(fe.setValue(this.itemsKeyName,this.items),this.writeModificationTime()),t))},writeNewGroupValue(e,t){return this.storageEvent(()=>(this.group[e]=t,fe.setValue(this.groupKeyName,this.group),this.writeModificationTime(),!0))},setGroups(e,t=!0,n=!0){return this.storageEvent(()=>(this.group=e,n&&(fe.setValue(this.groupKeyName,this.group),this.writeModificationTime()),t))},saveConfig(e,t=!0,n=!0){return this.storageEvent(()=>{if(e){const{addNote:o,searchBox:r,searchValue:a,interface:s,other:i,storeData:l}=e;o&&Object.assign(this.config.addNote,o),r&&Object.assign(this.config.searchBox,r),a&&Object.assign(this.config.searchValue,a),s&&Object.assign(this.config.interface,s),i&&Object.assign(this.config.other,i),l&&Object.assign(this.config.storeData,l)}return n&&fe.setValue(this.configKeyName,this.config),t})},storageEvent(e,t){try{return e()&&(this.executeChangeEvent(t),this.addNotifaction(this.lang.saveCompletedNotifactionText)),!0}catch(n){return console.error("Error in storage operation.",n),this.addNotifaction(this.lang.saveErrorNotifactionText),!1}},setInterfaceMode(e){this.config.interface.mode=e==="dark"?"dark":"bright",this.saveConfig()},setInterfaceLanguage(e){this.i18n.setLangType(e),this.lang=this.i18n.get(),this.config.interface.language=this.i18n.getLangType(),this.saveConfig(),this.registerMenuCommand()},getUrl(e){return this.itemClick?this.itemClick(e):`${location.origin}/${e}`},getUserGroupKey(e){if(this.judgeUsers(e)){const t=this.items[e].group;if(t&&Object.keys(this.group).includes(t))return t}return"default"},getUserGroupName(e){let t="";const n=this.getUserGroupKey(e);return n!=="default"&&this.group[n]&&(t=this.group[n].value),t},getUserTag(e,t={}){const{maskGroup:n}=t;let o="";if(this.judgeUsers(e)){if(o=this.items[e].tag,this.config.addNote.showNoteGroupName&&!n){const r=this.getUserGroupName(e);this.config.addNote.hideNoteText?o=r:r&&(o?o+=` [${r}]`:o=r)}o=Ai(o,t)}return o},getUserName(e){return this.judgeUsers(e)&&this.items[e].name||""},getPrimaryColor(e){const t=this.getUserGroupKey(e);return this.group[t].primaryColor},getSecondaryColor(e){const t=this.getUserGroupKey(e);return this.group[t].secondaryColor},openLink(e,t,n,o){const r=this.getUrl(e);let a=Ht.Self;o==="popover"?a=this.config.addNote.openNoteNewTab?Ht.Blank:Ht.Self:o==="search"&&(a=this.config.searchBox.openNewTab?Ht.Blank:Ht.Self),function(s,i,l,c){s&&kl(s,i&&l?1:i?2:c)}(r,t,n,a)},determineSearchString(e,t,n=!1){if(e){let o=null,r=[];if(this.config.searchValue.regular&&/^\/.+\/[gim]{0,3}$/.test(e))try{o=new RegExp(e.replace(/^\/|\/[gim]{0,3}$/g,""),e.replace(/^\/.+\/[^gim]*/i,""))}catch(s){console.log(s),o=null}o===null&&this.config.searchValue.split&&(r=e.split(/\s+/));let a=!0;if(o)a=o.test(t);else if(r.length>0)for(const s of r)this.config.searchValue.caseSensitive?t.includes(s)||(a=!1):t.toLocaleLowerCase().includes(s.toLocaleLowerCase())||(a=!1);else a=this.config.searchValue.caseSensitive?t.includes(e):t.toLocaleLowerCase().includes(e.toLocaleLowerCase());return a}return n},addNotifaction(e,t,n=4e3){const o=Ei(),r=new Date,a=t||`id-${r.getTime()}_${o.total}`;o.total++,o.notifactions.splice(0,0,{id:a,content:e}),console.info(`[${wo(r.getHours(),2)}:${wo(r.getMinutes(),2)}:${wo(r.getSeconds(),2)}] >>> ${e}`),window.setTimeout(()=>{o.removeNotifaction(a)},n)},export(){const e=fe.listValues(),t={};for(const n of e)t[n]=fe.getValue(n,{});(function(n,o,r){const a=new Blob([n]),s=document.createElementNS("http://www.w3.org/1999/xhtml","a");s.href=URL.createObjectURL(a),s.download=o;const i=new MouseEvent("click",{bubbles:!0,cancelable:!1,screenX:0,screenY:0,clientX:0,clientY:0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,button:0,relatedTarget:null});s.dispatchEvent(i),typeof r=="function"&&r()})(JSON.stringify(t),`${this.id}_data_${Date.now()}.txt`,()=>{this.addNotifaction(this.lang.backUpNotifactionText)})},import(){(function(e){const t=document.createElementNS("http://www.w3.org/1999/xhtml","input");t.type="file",t.accept=".txt, .text, .json, .conf, .config",t.style.display="none",t.addEventListener("change",()=>{var o;if(!t.value)return console.warn("No file selected."),void e({state:!1,tip:"optionsImportNoFileText"});const n=(o=t.files)==null?void 0:o[0];if(!n)return console.warn("Cannot find file."),void e({state:!1,tip:"optionsImportCannotFindFile"});{const{type:r}=n;if(!["application/json","application/xml","text/plain"].includes(r))return console.warn("Invalid file."),void e({state:!1,tip:"optionsImportValidText"});{const a=new FileReader;a.onload=s=>{const{target:i}=s;if(i){const l=i.result;typeof l=="string"?e({state:!0,tip:"opened"},l):(console.warn("Not a text file."),e({state:!1,tip:"optionsImportNotATextFile"}))}},a.readAsText(n)}}}),t.click()})((e,t)=>{if(e.state)if(t)try{const n=JSON.parse(t);typeof n=="object"&&n?this.storageEvent(()=>{for(const o in n)o===this.configKeyName?this.saveConfig(n[o],!1):o===this.groupKeyName?this.setGroups(n[o],!1):o===this.itemsKeyName&&this.setUsers(n[o],!1);return!0}):(console.warn("Content is not an object."),this.addNotifaction(this.lang.optionsImportErrorObjectText))}catch(n){console.error(n),this.addNotifaction(this.lang.optionsImportErrorObjectText)}else this.addNotifaction(this.lang.optionsImportEmptyText);else this.addNotifaction(this.lang[e.tip])})},showFrame(e,t=!1,n=!0){const o=Vi(),r=br(),a=mr(),s=Wn(),i=so(),l=xr(),c=hr();if(o.isInsert||r.isInsert||a.isInsert||s.isShow||i.isShow||l.isShow||!t&&c.isShow)return!0;switch(e){case"settings":o.isInsert=n;break;case"management":r.isInsert=n;break;case"group":a.isInsert=n;break;case"search":c.isShow=n;break;default:return!0}return!1},showPopover(e,t,n){this.config.addNote.showPopoverFrame&&Zo().show(e,t,n)},showAdd(e,t){const n=Wn();let o="",r="",a=n.groupKey;this.judgeUsers(e)?(o=this.items[e].tag||"",r=t||this.items[e].name||"",a=this.items[e].group||"default"):t&&(o=t,r=t),n.show(e,o,a,r)},hidePopover(){this.config.addNote.showPopoverFrame&&Zo().hide()},registerMenuCommand(){for(const e in this.menuCommand){const t=this.menuCommand[e];t!==null&&(fe.unregisterMenuCommand(t),this.menuCommand[e]=null)}this.menuCommand.settings=fe.registerMenuCommand(this.lang.gmSettingsText,()=>{this.showFrame("settings")}),this.menuCommand.management=fe.registerMenuCommand(this.lang.gmManagementText,()=>{this.showFrame("management")}),this.menuCommand.group=fe.registerMenuCommand(this.lang.gmGroupText,()=>{this.showFrame("group")})},valueChangeListener(){const e=this.config.storeData.autoSync;for(const t in this.listener){const n=this.listener[t];n!==null&&(fe.removeValueChangeListener(n),this.listener[t]=null)}e&&(this.listener.items=fe.addValueChangeListener(this.itemsKeyName,(t,n,o,r)=>{r&&Be.debounce("itemsListener",()=>{o&&(this.setUsers(o,!0,!1),this.addNotifaction(this.lang.syncNoteNotifactionText))},1e3)}),this.listener.group=fe.addValueChangeListener(this.groupKeyName,(t,n,o,r)=>{r&&Be.debounce("groupListener",()=>{o&&(this.setGroups(o,!0,!1),this.addNotifaction(this.lang.syncGroupNotifactionText))},1e3)}),this.listener.config=fe.addValueChangeListener(this.configKeyName,(t,n,o,r)=>{r&&Be.debounce("configListener",()=>{o&&this.saveConfig(o,!0,!1)},1e3)}))},webDAVSyncTimer(e){const t=this.config.storeData.enableWebDAV;if(this.webDAVTimer!=null&&(window.clearInterval(this.webDAVTimer),this.webDAVTimer=null),t){e==="two-way"?(this.writeWebDAVSyncTime(),this.webDAVSyncHandler()):e==="upload"?(this.writeWebDAVSyncTime(),this.webDAVSyncHandler("upload")):e==="download"&&(this.writeWebDAVSyncTime(),this.webDAVSyncHandler("download"));const n=this.config.storeData.webDAVAutoSyncInterval;n>0&&(e==="immediate"&&this.webDAVSyncDecider(n),this.webDAVTimer=window.setInterval(()=>{this.webDAVSyncDecider(n)},60*n*1e3))}},webDAVSyncDecider(e){Date.now()-fe.getValue(this.webDAVSyncTimeKeyName,0)<1e3*(60*e-5)||(this.writeWebDAVSyncTime(),this.webDAVSyncHandler())},async webDAVSyncHandler(e){if(this.config.storeData.enableWebDAV){if(this.webDAVSyncLoading=!0,!this.webDAVValidator())return this.addNotifaction(this.lang.webDAVConfigInvalidText),void(this.webDAVSyncLoading=!1);const{webDAVURL:t,webDAVFile:n,webDAVUser:o,webDAVPassword:r,webDAVSyncMode:a}=this.config.storeData;if(e)e==="upload"?a!=="download"&&(this.writeModificationTime(),await this.webDAVUploadData()):e==="download"&&a!=="upload"&&await this.webDAVDownloadData();else{const s=cn(t,n+".lock"),i=await To(s,o,r);if(i.status===404)a!=="download"&&await this.webDAVUploadData();else if(i.status===200)try{const{unix:l}=JSON.parse(i.data);if(typeof l!="number")return console.error(l),this.addNotifaction(this.lang.webDAVResponseContentErrorText),void(this.webDAVSyncLoading=!1);const c=this.readModificationTime();c>l?a!=="download"&&await this.webDAVUploadData():c<l?a!=="upload"&&await this.webDAVDownloadData(l):this.addNotifaction(this.lang.webDAVNoChangeText)}catch(l){console.error(l),this.addNotifaction(this.lang.webDAVResponseContentErrorText)}else i.status===-1?this.addNotifaction(this.lang.webDAVInternalErrorText):i.status===401?this.addNotifaction(this.lang.webDAVVerifyErrorText):(this.addNotifaction(`${this.lang.webDAVUnknownErrorText} (Code: ${i.status})`),console.warn(i.status),console.error(i.data))}this.webDAVSyncLoading=!1}},async webDAVUploadData(){const{webDAVURL:e,webDAVFile:t,webDAVUser:n,webDAVPassword:o,webDAVPassphrase:r}=this.config.storeData,a=fe.listValues(),s={};for(const u of a)u===this.itemsKeyName&&(s[this.itemsKeyName]=fe.getValue(this.itemsKeyName,{})),u===this.groupKeyName&&(s[this.groupKeyName]=fe.getValue(this.groupKeyName,{}));let i="";i=r?va.encrypt(JSON.stringify(s),r).toString():JSON.stringify(s);const l=cn(e,t),c=await la(l,n,o,i);if(c.status>=200&&c.status<300){const u={unix:this.storeModificationTime},d=cn(e,t+".lock"),f=await la(d,n,o,JSON.stringify(u));f.status>=200&&f.status<300?this.addNotifaction(this.lang.webDAVUploadSuccessText):f.status===-1?this.addNotifaction(this.lang.webDAVInternalErrorText):f.status===403?this.addNotifaction(`${this.lang.webDAVPermissionErrorText} (Path: ${d})`):(this.addNotifaction(`${this.lang.webDAVUnknownErrorText} (Code: ${f.status})`),console.warn(f.status),console.error(f.data))}else c.status===-1?this.addNotifaction(this.lang.webDAVInternalErrorText):c.status===403?this.addNotifaction(`${this.lang.webDAVPermissionErrorText} (Path: ${l})`):(this.addNotifaction(`${this.lang.webDAVUnknownErrorText} (Code: ${c.status})`),console.warn(c.status),console.error(c.data))},async webDAVDownloadData(e){const{webDAVURL:t,webDAVFile:n,webDAVUser:o,webDAVPassword:r,webDAVPassphrase:a}=this.config.storeData,s=cn(t,n),i=await To(s,o,r);if(i.status===200)try{let l="";a?l=va.decrypt(i.data,a).toString(Ul):l=i.data;const c=JSON.parse(l);if(typeof c=="object"&&c){if(this.storageEvent(()=>{for(const u in c)u===this.itemsKeyName?this.setUsers(c[u],!1,!1):u===this.groupKeyName&&this.setGroups(c[u],!1,!1);return!0}),e===void 0){const u=cn(t,n+".lock"),d=await To(u,o,r);if(d.status===200)try{const{unix:f}=JSON.parse(d.data);typeof f!="number"?(console.error(f),this.addNotifaction(this.lang.webDAVResponseContentErrorText)):e=f}catch(f){console.error(f),this.addNotifaction(this.lang.webDAVResponseContentErrorText)}else d.status===-1?this.addNotifaction(this.lang.webDAVInternalErrorText):d.status===401?this.addNotifaction(this.lang.webDAVVerifyErrorText):d.status===404?this.addNotifaction(`${this.lang.webDAVFileLostErrorText} (File: ${u})`):(this.addNotifaction(`${this.lang.webDAVUnknownErrorText} (Code: ${d.status})`),console.warn(d.status),console.error(d.data))}e&&(fe.setValue(this.itemsKeyName,this.items),fe.setValue(this.groupKeyName,this.group),this.writeModificationTime(e),this.addNotifaction(this.lang.webDAVDownloadSuccessText))}else console.warn("Content is not an object."),this.addNotifaction(this.lang.optionsImportErrorObjectText)}catch(l){console.error(l),this.addNotifaction(this.lang.webDAVContentDecodeErrorText)}else i.status===-1?this.addNotifaction(this.lang.webDAVInternalErrorText):i.status===401?this.addNotifaction(this.lang.webDAVVerifyErrorText):i.status===404?this.addNotifaction(`${this.lang.webDAVFileLostErrorText} (File: ${s})`):(this.addNotifaction(`${this.lang.webDAVUnknownErrorText} (Code: ${i.status})`),console.warn(i.status),console.error(i.data))},webDAVValidator(){const{webDAVURL:e,webDAVFile:t,webDAVUser:n,webDAVPassword:o}=this.config.storeData;return!!(e&&t&&n&&o)}}}),hr=qe("searchFrame",{state:()=>({isShow:!1})}),Wn=qe("addFrame",{state:()=>({isShow:!1,userId:"",userName:"",initialValue:"",groupKey:"default"}),actions:{selecteGroup(e){const t=so();t.selected=e,t.isShow=!0},addGroup(e){const t=xr();t.created=e,t.isShow=!0},show(e,t,n,o){this.userId=e,this.userName=o||"",this.initialValue=t,this.groupKey=n||"default",this.isShow=!0}}}),br=qe("managementFrame",{state:()=>({isInsert:!1,isEcho:!1}),actions:{selecteGroup(e){const t=so();t.selected=e,t.isShow=!0}}}),mr=qe("groupFrame",{state:()=>({isInsert:!1})}),so=qe("selectGroupFrame",{state:()=>({isShow:!1,selected:null})}),xr=qe("newGroupFrame",{state:()=>({isShow:!1,created:null})}),Vi=qe("settingsFrame",{state:()=>({isInsert:!1})}),_i=qe("webDAVFrame",{state:()=>({isInsert:!1})}),Ei=qe("messageFrame",{state:()=>({notifactions:[],total:0}),actions:{removeNotifaction(e){for(let t=0;t<this.notifactions.length;t++)if(this.notifactions[t].id===e)return this.notifactions.splice(t,1),!0;return!1}}}),Zo=qe("popoverFrame",{state:()=>({isShow:!1,currentUserId:"",x:0,y:0,isPopHover:!1,isTagHover:!1,showDebounced:null}),actions:{show(e,t,n){this.showDebounced=Be.debounce("popoverShow",()=>{this.currentUserId=e,this.x=t,this.y=n,this.isShow=!0,this.isTagHover=!0},1e3)},hide(){this.showDebounced&&(this.showDebounced.cancel(),this.showDebounced=null),this.isTagHover=!1,Be.debounce("popoverHide",()=>{this.isPopHover||this.isTagHover||(this.isShow=!1)},1e3)}}}),Bl=["title"],Wl=Te({__name:"NoteObjFloatButton",props:{isInsert:{type:Boolean},title:null,buttonClass:null,boxClass:null},emits:["click"],setup:(e,{emit:t})=>(n,o)=>e.isInsert?(K(),q("div",{key:0,class:$e(e.boxClass)},[g("span",{title:e.title,class:$e(e.buttonClass),onClick:o[0]||(o[0]=r=>t("click",r))},null,10,Bl)],2)):rt("",!0)});function ya(e,t){t.value&&t.value!==t.oldValue&&setTimeout(()=>{try{e.focus(),e.select()}catch(n){console.log(n)}},100)}const lo={mounted:ya,updated:ya},Rl=["onClick"],Hl={class:"note-obj-add-frame-dialog"},Fl={class:"note-obj-add-frame-user-info"},Zl={class:"note-obj-add-frame-user-id"},Yl={key:0,class:"note-obj-add-frame-user-name"},Kl=["placeholder","onKeyup"],$l=["title","onClick"],Jl=["title","onClick"],Xl=["title","onClick"],Ql=["title","onClick"],ql=["title","onClick"],ec=Te({__name:"NoteObjAddFrame",setup(e){const t=ze(),n=Wn(),o=ye(""),{isShow:r}=kt(n),a=ke(()=>n.groupKey&&n.groupKey!=="default"&&t.group[n.groupKey]?t.group[n.groupKey].value:t.lang.defaultGroupText);function s(T){T.key==="Enter"?u():T.key==="Escape"&&w()}function i(){n.selecteGroup(T=>{T&&(n.groupKey=T)})}function l(){n.addGroup(T=>{T&&(n.groupKey=T)})}function c(T,M,x,v){t.writeUser(T,M,x,v)&&w()}function u(){c(n.userId,n.userName,o.value,n.groupKey)}function d(){c(n.userId,"","","")}function f(){t.config.addNote.canHideAddFrame&&w()}function w(){n.isShow=!1}return Ce(r,T=>{T&&(o.value=n.initialValue)}),(T,M)=>le((K(),q("div",{class:"note-obj-add-frame-presentation",onClick:ie(f,["self"])},[g("div",Hl,[g("div",Fl,[g("span",Zl,H(m(t).lang.userIdText+": "+m(n).userId),1),m(n).userName?(K(),q("span",Yl,H(m(t).lang.userNameText+": "+m(n).userName),1)):rt("",!0)]),le(g("input",{"onUpdate:modelValue":M[0]||(M[0]=x=>o.value=x),type:"text",placeholder:m(t).lang.addPlaceholder,class:"note-obj-add-frame-input",onKeyup:zt(ie(s,["prevent"]),["enter","esc"])},null,40,Kl),[[Ue,o.value,void 0,{trim:!0}],[m(lo),m(r)]]),g("button",{type:"button",title:m(t).lang.groupTitle,class:"note-obj-add-frame-group-button",onClick:ie(i,["stop"])},H(m(a)),9,$l),g("button",{type:"button",title:m(t).lang.groupCreateValueTitle,class:"note-obj-add-frame-group-button",onClick:ie(l,["stop"])},H(m(t).lang.groupCreateValueText),9,Jl),g("button",{type:"button",title:m(t).lang.saveTagTitle,onClick:ie(u,["stop"])},H(m(t).lang.saveTagText),9,Xl),g("button",{type:"button",title:m(t).lang.clearTagTitle,onClick:ie(d,["stop"])},H(m(t).lang.clearTagText),9,Ql),g("button",{type:"button",title:m(t).lang.cancelTagTitle,class:"note-obj-add-frame-button-bottom",onClick:ie(w,["stop"])},H(m(t).lang.cancelTagText),9,ql)])],8,Rl)),[[je,m(r)]])}}),tc={previous:{},timer:{},throttle(e,t,n,o={}){const r=Date.now(),{leading:a,trailing:s}=o;this.previous[e]===void 0&&a===!1&&(this.previous[e]=r);const i=n-(r-(this.previous[e]===void 0?0:this.previous[e]));return i<=0||i>n?(window.clearTimeout(this.timer[e]),this.previous[e]=r,t()):this.timer[e]===void 0&&s!==!1&&(this.timer[e]=window.setTimeout(()=>{this.previous[e]=a===!1?void 0:Date.now(),this.timer[e]=void 0,t()},i)),{cancel:()=>{window.clearTimeout(this.timer[e]),this.previous[e]=void 0,this.timer[e]=void 0}}}},nc=["title","data-index"],oc={class:"note-obj-search-frame-tags-item-text"},rc=Te({__name:"NoteObjSearchItem",props:{itemKey:null,index:null,isShow:{type:Boolean},highlight:{type:Boolean},name:null,tag:null,groupKey:null},emits:["mouseenter"],setup(e,{emit:t}){const n=e,o=ze(),r=ke(()=>{let i=n.itemKey+(n.name&&n.name!==n.itemKey?`
${n.name}`:"")+(n.tag?`
${n.tag}`:"");if(o.config.searchBox.showGroupName&&n.groupKey&&n.groupKey!=="default"){const l=o.group[n.groupKey];l&&(i+=`
${l.value}`)}return i}),a=ke(()=>{let i=n.tag||n.name||n.itemKey;if(o.config.searchBox.showGroupName&&n.groupKey&&n.groupKey!=="default"){const l=o.group[n.groupKey];l&&(i+=` [${l.value}]`)}return i});function s(){t("mouseenter",n.index)}return(i,l)=>le((K(),q("li",{class:$e({"note-obj-search-frame-tags-list-item-highlight":e.highlight}),title:m(r),"data-index":e.index,onMouseenter:s,onClick:l[0]||(l[0]=ie(c=>{return u=c,d=e.itemKey,void o.openLink(d,u.ctrlKey||u.metaKey,u.shiftKey,"search");var u,d},["stop"]))},[g("span",oc,H(m(a)),1)],42,nc)),[[je,e.isShow]])}}),ac=["onClick"],ic={class:"note-obj-search-frame-dialog"},sc=["placeholder","onKeydown","onKeyup"],lc=["title","onClick"],cc={key:0,class:"note-obj-search-frame-index-trapezoid"},uc={class:"note-obj-search-frame-index-value"},dc=Te({__name:"NoteObjSearchFrame",setup(e){const t=ze(),n=hr(),o=ye(""),r=ye({}),a=ye(0),s=ye(""),i=t.id+"_searchFrameTagsList",{isShow:l}=kt(n),c=ke(()=>{let v=0;for(const I in r.value)r.value[I].isShow&&v++;return v});function u(v){if(v!==0){for(const I in r.value)if(r.value[I].index===v)return I}return""}function d(v){tc.throttle("searchKeydown",()=>{c.value===0?a.value=0:v.key==="ArrowUp"?a.value>1?a.value--:a.value=c.value:v.key==="ArrowDown"?a.value<c.value?a.value++:a.value=1:v.key==="PageUp"?a.value>10?a.value-=10:a.value<=1?a.value=c.value:a.value=1:v.key==="PageDown"&&(a.value<c.value-9?a.value+=10:a.value===c.value?a.value=1:a.value=c.value),s.value=u(a.value)},100)}function f(v){v.key==="Enter"?s.value&&t.openLink(s.value,v.ctrlKey||v.metaKey,v.shiftKey,"search"):v.key==="Escape"&&x()}function w(){let v=1,I=!1,h="",p=0;for(const y in r.value)t.determineSearchString(o.value,r.value[y].tag||r.value[y].name||y)?(Object.assign(r.value[y],{isShow:!0,index:v,highlight:y===s.value}),y===s.value&&(p=v,I=!0),v===1&&(h=y),v++):Object.assign(r.value[y],{isShow:!1,index:-1,highlight:!1});I||(s.value=h,p=c.value>0?1:0,h&&(r.value[h].highlight=!0)),eo(()=>{a.value=p})}function T(v){a.value!==v&&(a.value=v,s.value=u(v))}function M(){t.config.searchBox.canHideSearchFrame&&x()}function x(){n.isShow=!1}return Ce(l,v=>{v&&function(){let I=1;const h=Object.assign({},t.items);for(const p in h)Object.assign(h[p],{isShow:!1,index:I++,highlight:!1});r.value=h}()}),Ce(o,()=>{Be.debounce("searchValue",()=>{w()},250)}),Ce(a,v=>{for(const I in r.value){const h=r.value[I];h.highlight=h.index===v}(function(I){const h=document.getElementById(i),p=document.querySelector(`#${i} [data-index="${I}"]`);h&&p&&(p.offsetTop-h.scrollTop>225?h.scrollTop=p.offsetTop-225:p.offsetTop-h.scrollTop<0&&(h.scrollTop=p.offsetTop))})(v)}),(v,I)=>le((K(),q("div",{class:"note-obj-search-frame-presentation",onClick:ie(M,["self"])},[g("div",ic,[le(g("input",{type:"text",placeholder:m(t).lang.searchTagPlaceholder,class:"note-obj-search-frame-input","onUpdate:modelValue":I[0]||(I[0]=h=>o.value=h),onKeydown:zt(ie(d,["prevent"]),["arrow-up","arrow-down","page-down","page-up"]),onKeyup:zt(ie(f,["stop","prevent"]),["enter","esc"]),onFocusin:w},null,40,sc),[[m(lo),m(l)],[Ue,o.value,void 0,{trim:!0}]]),g("span",{title:m(t).lang.searchCloseTitle,class:"note-obj-search-frame-close-btn",onClick:ie(x,["stop"])},null,8,lc),m(t).config.searchBox.showIndex?(K(),q("div",cc,[g("span",uc,H(a.value+"/"+m(c)),1)])):rt("",!0),g("ul",{id:i,class:"note-obj-search-frame-tags-list"},[(K(!0),q(be,null,De(r.value,({index:h,isShow:p,name:y,tag:k,group:A,highlight:S},D)=>(K(),Pe(rc,{key:D,"is-show":p,"item-key":D.toString(),index:h,name:y,tag:k,"group-key":A,highlight:S,onMouseenter:T},null,8,["is-show","item-key","index","name","tag","group-key","highlight"]))),128))])])],8,ac)),[[je,m(l)]])}}),pc=["data-key","readonly","value","onKeyup"],Gi=Te({__name:"NoteObjManagementInput",props:{value:null,dataKey:null,editable:{type:Boolean},className:null},emits:["value-change"],setup(e,{emit:t}){const n=e;function o(r){n.editable&&(r.key==="Enter"?t("value-change",r.target.value.trim()):r.key==="Escape"&&t("value-change",n.value))}return(r,a)=>le((K(),q("input",{"data-key":e.dataKey,type:"text",readonly:!e.editable,class:$e(e.className+(e.editable?" note-obj-management-frame-item-input-edit":"")),value:e.value,onKeyup:zt(ie(o,["stop","prevent"]),["enter","esc"])},null,42,pc)),[[m(lo),e.editable]])}}),fc=["title"],gc=Te({__name:"NoteObjGroupItem",props:{dataKey:null,groupValue:null},emits:["click"],setup(e,{emit:t}){const n=e,o=ze(),r=ke(()=>n.groupValue&&n.groupValue!=="default"&&o.group[n.groupValue]&&o.group[n.groupValue].value||o.lang.defaultGroupText),a=ke(()=>n.groupValue&&o.group[n.groupValue]&&o.group[n.groupValue].secondaryColor||o.defaultColor.secondaryColor),s=ke(()=>n.groupValue&&o.group[n.groupValue]&&o.group[n.groupValue].primaryColor||o.defaultColor.primaryColor);return(i,l)=>(K(),q("span",{class:"note-obj-management-frame-group-item",title:m(o).lang.groupTitle,style:nn({color:m(a),backgroundColor:m(s)}),onClick:l[0]||(l[0]=ie(c=>t("click",e.dataKey),["stop"]))},H(m(r)),13,fc))}}),hc=["title"],Ze=Te({__name:"NoteObjTh",props:{text:null},setup:e=>(t,n)=>(K(),q("th",{title:e.text},H(e.text),9,hc))}),bc={key:0,class:"note-obj-management-frame-presentation"},mc={class:"note-obj-management-frame-dialog"},xc={class:"note-obj-management-frame-header"},vc={for:"noteObjManagementFrameSearchInputBox"},yc=["placeholder","onKeydown"],wc={for:"noteObjManagementFrameRangeSelect"},Tc={value:"all"},jc={value:"id"},Sc={value:"name"},Ic={value:"tag"},kc={for:"noteObjManagementFrameGroupSelect"},Dc={value:""},Cc=["value"],Nc={class:"note-obj-management-frame-show-number"},Ac={class:"note-obj-management-frame-content"},Mc={class:"note-obj-management-frame-thead"},Vc=["title"],_c={class:"note-obj-management-frame-tbody"},Ec=["checked","onChange"],Gc=["title","href"],Lc=["title"],Pc=["title","onClick"],zc=["title","onClick"],Oc={class:"note-obj-management-frame-tool"},Uc=["disabled","title","onClick"],Bc=["disabled","title","onClick"],Wc=["title","onClick"],Rc={class:"note-obj-management-frame-footer"},Hc=["title","disabled","onClick"],Fc=["title","onClick"],Zc=Te({__name:"NoteObjManagementFrame",setup(e){const t=ze(),n=br(),o=mr(),{isInsert:r}=kt(n),a=ye(""),s=ye("all"),i=ye(""),l=ye(!1),c=ye(!1),u=ye({}),d=ke(()=>{let D=0;for(const C in u.value)u.value[C].isExists&&D++;return D}),f=ke(()=>{let D=0;for(const C in u.value){const R=u.value[C];R.isExists&&R.isShow&&R.isSelected&&D++}return D}),w=ke({get(){for(const D in u.value){const C=u.value[D];if(C.isExists&&C.isShow&&!C.isSelected)return!1}return!0},set(D){for(const C in u.value){const R=u.value[C];R.isExists&&R.isShow&&(D&&!R.isSelected?R.isSelected=!0:!D&&R.isSelected&&(R.isSelected=!1))}}});function T(){a.value="",s.value="all",i.value="",l.value=!1;const D=Object.assign({},t.items);for(const C in D)Object.assign(D[C],{isExists:!0,isShow:!0,isSelected:!1,editable:!1});u.value=D}function M(){const D=Object.keys(t.group);for(const C in u.value){const R=u.value[C];if(R.isExists){let E=!1;i.value&&i.value!==R.group&&(i.value!=="default"||D.includes(R.group))||(s.value==="all"?E=t.determineSearchString(a.value,C,!0)||t.determineSearchString(a.value,R.name,!0)||t.determineSearchString(a.value,R.tag,!0):s.value==="id"?E=t.determineSearchString(a.value,C,!0):s.value==="name"?E=t.determineSearchString(a.value,R.name,!0):s.value==="tag"&&(E=t.determineSearchString(a.value,R.tag,!0))),R.isShow=E}}}function x(){console.info("Just to intercept the carriage return event.")}function v(D){n.selecteGroup(C=>{u.value[D].group=C,A()})}function I(D){u.value[D].editable?function(C){const R=document.querySelector(`.note-obj-management-frame-item-input-tag[data-key="${C}"]`),E=(R==null?void 0:R.value.trim())||"";u.value[C].tag=E,A(),u.value[C].editable=!1}(D):u.value[D].editable=!0}function h(){for(const D in u.value){const C=u.value[D];C.isExists&&C.isShow&&C.isSelected&&(C.isExists=!1,A())}}function p(){const D=[];for(const C in u.value){const R=u.value[C];R.isExists&&R.isShow&&R.isSelected&&D.push(C)}D.length>0&&(n.selecteGroup(C=>{D.forEach(R=>{u.value[R].group=C})}),A())}function y(){n.isEcho=!0,n.isInsert=!1,o.isInsert=!0}function k(){if(l.value){const D={};for(const C in u.value){const{isExists:R,tag:E,name:ee,group:oe}=u.value[C];R&&(D[C]={tag:E,name:ee,group:oe})}t.setUsers(D)&&(l.value=!1)}}function A(){l.value=!0}function S(){l.value=!1,a.value="",s.value="all",i.value="",r.value=!1}return Ce(r,D=>{D&&(Object.keys(t.items).length>50?(c.value=!0,u.value={},Be.debounce("initNotesManagement",()=>{T(),c.value=!1},50)):T())}),Ce(a,()=>{Be.debounce("notesManagementSearch",M,250)}),Ce(s,()=>{Be.debounce("notesManagementRange",M,50)}),Ce(i,()=>{Be.debounce("notesManagementGroup",M,50)}),(D,C)=>m(r)?(K(),q("div",bc,[g("div",mc,[g("div",xc,[g("form",null,[g("label",vc,H(m(t).lang.searchContentText),1),le(g("input",{id:"noteObjManagementFrameSearchInputBox",type:"text","onUpdate:modelValue":C[0]||(C[0]=R=>a.value=R),placeholder:m(t).lang.searchContentPlaceholder,class:"note-obj-management-frame-search-input",onKeydown:zt(ie(x,["stop","prevent"]),["enter"])},null,40,yc),[[Ue,a.value,void 0,{trim:!0}]]),g("label",wc,H(m(t).lang.rangeText),1),le(g("select",{"onUpdate:modelValue":C[1]||(C[1]=R=>s.value=R),id:"noteObjManagementFrameRangeSelect",name:"managementFrameRangeSelect"},[g("option",Tc,H(m(t).lang.rangeAllText),1),g("option",jc,H(m(t).lang.userIdText),1),g("option",Sc,H(m(t).lang.userNameText),1),g("option",Ic,H(m(t).lang.userTagTableText),1)],512),[[Lo,s.value]]),g("label",kc,H(m(t).lang.groupText+": "),1),le(g("select",{"onUpdate:modelValue":C[2]||(C[2]=R=>i.value=R),id:"noteObjManagementFrameGroupSelect",name:"managementFrameGroupSelect"},[g("option",Dc,H(m(t).lang.rangeAllText),1),(K(!0),q(be,null,De(m(t).group,({value:R},E)=>(K(),q("option",{key:E,value:E},H(E==="default"?m(t).lang.defaultGroupText:R),9,Cc))),128))],512),[[Lo,i.value]]),g("span",Nc,H(m(f)+"/"+m(d)),1)])]),g("div",Ac,[g("div",Mc,[g("table",null,[g("thead",null,[g("tr",null,[g("th",null,[le(g("input",{"onUpdate:modelValue":C[3]||(C[3]=R=>we(w)?w.value=R:null),type:"checkbox",title:m(t).lang.selectAllTitle},null,8,Vc),[[Si,m(w)]])]),ne(Ze,{text:m(t).lang.userIdText},null,8,["text"]),ne(Ze,{text:m(t).lang.userNameText},null,8,["text"]),ne(Ze,{text:m(t).lang.userTagTableText},null,8,["text"]),ne(Ze,{text:m(t).lang.groupText},null,8,["text"]),ne(Ze,{text:m(t).lang.editText},null,8,["text"]),ne(Ze,{text:m(t).lang.deleteText},null,8,["text"])])])])]),g("div",_c,[g("table",null,[g("tbody",null,[(K(!0),q(be,null,De(u.value,({isShow:R,isExists:E,isSelected:ee,name:oe,tag:de,editable:Q,group:re},se)=>le((K(),q("tr",{key:se},[g("td",null,[g("input",{type:"checkbox",checked:ee,onChange:B=>u.value[se].isSelected=!ee},null,40,Ec)]),g("td",null,[g("a",{title:se.toString(),target:"_blank",href:m(t).getUrl(se.toString()),class:"note-obj-management-frame-item-a"},H(se),9,Gc)]),g("td",{title:oe},H(oe),9,Lc),g("td",null,[ne(Gi,{value:de,"data-key":se.toString(),editable:Q,"class-name":"note-obj-management-frame-item-input-tag",onValueChange:B=>function(L,G){u.value[L].tag=G,A(),u.value[L].editable=!1}(se.toString(),B)},null,8,["value","data-key","editable","onValueChange"])]),g("td",null,[ne(gc,{"group-value":re,"data-key":se.toString(),onClick:v},null,8,["group-value","data-key"])]),g("td",null,[g("span",{title:m(t).lang.editTitle,class:$e(["note-obj-management-frame-item-btn note-obj-management-frame-item-edit",{"note-obj-management-frame-item-ok":Q}]),onClick:ie(B=>I(se.toString()),["stop"])},null,10,Pc)]),g("td",null,[g("span",{title:m(t).lang.deleteTitle,class:"note-obj-management-frame-item-btn note-obj-management-frame-item-delete",onClick:ie(B=>function(L){u.value[L].isExists=!1,A()}(se.toString()),["stop"])},null,8,zc)])],512)),[[je,E&&R]])),128))])])])]),g("div",Oc,[g("button",{type:"button",disabled:m(f)===0,title:m(t).lang.deleteSelectedTitle,class:"note-obj-management-frame-delete-selected",onClick:ie(h,["stop"])},H(m(t).lang.deleteSelectedText),9,Uc),g("button",{type:"button",disabled:m(f)===0,title:m(t).lang.moveSelectedTitle,class:"note-obj-management-frame-move-selected",onClick:ie(p,["stop"])},H(m(t).lang.moveSelectedText),9,Bc),g("button",{type:"button",title:m(t).lang.manageGroupsTitle,class:"note-obj-management-frame-manage-groups",onClick:ie(y,["stop"])},H(m(t).lang.manageGroupsText),9,Wc)]),g("div",Rc,[le(g("span",{class:"note-obj-management-frame-show-modify-text"},H(m(t).lang.modifyText),513),[[je,l.value]]),le(g("span",{class:"note-obj-management-frame-show-wait-text"},H(m(t).lang.waitText),513),[[je,c.value]]),g("button",{title:m(t).lang.saveContentTitle,class:"note-obj-management-frame-save-content",disabled:!l.value,onClick:ie(k,["stop"])},H(m(t).lang.saveContentText),9,Hc),g("button",{title:m(t).lang.closeContentTitle,class:"note-obj-management-frame-cancel-content",onClick:ie(S,["stop"])},H(m(t).lang.closeCotentText),9,Fc)])])])):rt("",!0)}}),Yc={key:0,class:"note-obj-group-frame-presentation"},Kc={class:"note-obj-group-frame-dialog"},$c={class:"note-obj-group-frame-header"},Jc={for:"noteObjGroupFrameSearchInputBox"},Xc=["placeholder","onKeydown"],Qc={class:"note-obj-group-frame-show-number"},qc={class:"note-obj-group-frame-content"},eu={class:"note-obj-group-frame-thead"},tu=["title"],nu={class:"note-obj-group-frame-tbody"},ou=["checked","onChange"],ru=["value","onChange"],au=["value","onChange"],iu=["value","onChange"],su=["title","onClick"],lu=["title","onClick"],cu={class:"note-obj-group-frame-tool"},uu=["disabled","title","onClick"],du=["title","onClick"],pu={class:"note-obj-management-frame-footer"},fu=["title","disabled","onClick"],gu=["title","onClick"],hu=Te({__name:"NoteObjGroupFrame",setup(e){const t=ze(),n=mr(),o=br(),{isInsert:r}=kt(n),a=ye(""),s=ye(!1),i=ye(!1),l=ye({default:{value:"",primaryColor:t.defaultColor.primaryColor,secondaryColor:t.defaultColor.secondaryColor,weight:0,isExists:!0,isShow:!0,isSelected:!1,editable:!1}}),c=ke(()=>{let p=0;for(const y in l.value)l.value[y].isExists&&p++;return p}),u=ke(()=>{let p=0;for(const y in l.value){const k=l.value[y];k.isExists&&k.isShow&&k.isSelected&&p++}return p}),d=ke({get(){for(const p in l.value){const y=l.value[p];if(y.isExists&&y.isShow&&!y.isSelected)return!1}return!0},set(p){for(const y in l.value){const k=l.value[y];k.isExists&&k.isShow&&(p&&!k.isSelected?k.isSelected=!0:!p&&k.isSelected&&(k.isSelected=!1))}}});function f(){console.info("Just to intercept the carriage return event.")}function w(){a.value="",s.value=!1;const p=Object.assign({},t.group);for(const y in p)Object.assign(p[y],{isExists:!0,isShow:!0,isSelected:!1,editable:!1});l.value=p}function T(p){p!=="default"&&(l.value[p].editable?function(y){const k=document.querySelector(`.note-obj-group-frame-item-input-value[data-key="${y}"]`),A=(k==null?void 0:k.value.trim())||"";l.value[y].value=A,I(),l.value[y].editable=!1}(p):l.value[p].editable=!0)}function M(){for(const p in l.value)if(p!=="default"){const y=l.value[p];y.isExists&&y.isShow&&y.isSelected&&(y.isExists=!1,I())}}function x(){const p="g_"+Date.now();l.value[p]={value:t.lang.groupNewValueText,primaryColor:t.defaultColor.primaryColor,secondaryColor:t.defaultColor.secondaryColor,weight:0,isExists:!0,isShow:!0,isSelected:!1,editable:!1},I(),eo(()=>{const y=document.querySelector(".note-obj-group-frame-tbody");y&&(y.scrollTop=y.scrollHeight)})}function v(){if(s.value){const p={default:{value:"",primaryColor:t.defaultColor.primaryColor,secondaryColor:t.defaultColor.secondaryColor,weight:0}};for(const y in l.value){const{isExists:k,value:A,primaryColor:S,secondaryColor:D,weight:C}=l.value[y];k&&A&&(p[y]={value:A,primaryColor:S||t.defaultColor.primaryColor,secondaryColor:D||t.defaultColor.secondaryColor,weight:C||0})}t.setGroups(p)&&(s.value=!1)}}function I(){s.value=!0}function h(){s.value=!1,a.value="",r.value=!1,o.isEcho&&(o.isEcho=!1,o.isInsert=!0)}return Ce(a,p=>{Be.debounce("groupSearchValue",()=>{(function(y){for(const k in l.value){const A=l.value[k];A.isShow=t.determineSearchString(y,A.value,!0)}})(p)},250)}),Ce(r,p=>{p&&(Object.keys(t.group).length>50?(i.value=!0,l.value={default:{value:"",primaryColor:t.defaultColor.primaryColor,secondaryColor:t.defaultColor.secondaryColor,weight:0,isExists:!0,isShow:!0,isSelected:!1,editable:!1}},Be.debounce("initGroupsManagement",()=>{w(),i.value=!1},50)):w())}),(p,y)=>m(r)?(K(),q("div",Yc,[g("div",Kc,[g("div",$c,[g("form",null,[g("label",Jc,H(m(t).lang.searchContentText),1),le(g("input",{"onUpdate:modelValue":y[0]||(y[0]=k=>a.value=k),type:"text",id:"noteObjGroupFrameSearchInputBox",placeholder:m(t).lang.searchContentPlaceholder,onKeydown:zt(ie(f,["stop","prevent"]),["enter"])},null,40,Xc),[[Ue,a.value,void 0,{trim:!0}]]),g("span",Qc,H(m(u)+"/"+m(c)),1)])]),g("div",qc,[g("div",eu,[g("table",null,[g("thead",null,[g("tr",null,[g("th",null,[le(g("input",{"onUpdate:modelValue":y[1]||(y[1]=k=>we(d)?d.value=k:null),type:"checkbox",title:m(t).lang.selectAllTitle},null,8,tu),[[Si,m(d)]])]),ne(Ze,{text:m(t).lang.groupValueText},null,8,["text"]),ne(Ze,{text:m(t).lang.groupPrimaryColorText},null,8,["text"]),ne(Ze,{text:m(t).lang.groupSecondaryColorText},null,8,["text"]),ne(Ze,{text:m(t).lang.groupWeightText},null,8,["text"]),ne(Ze,{text:m(t).lang.editText},null,8,["text"]),ne(Ze,{text:m(t).lang.deleteText},null,8,["text"])])])])]),g("div",nu,[g("table",null,[g("tbody",null,[(K(!0),q(be,null,De(l.value,({isExists:k,isShow:A,isSelected:S,value:D,editable:C,primaryColor:R,secondaryColor:E,weight:ee},oe)=>le((K(),q("tr",{key:oe},[g("td",null,[g("input",{type:"checkbox",checked:S,onChange:de=>l.value[oe].isSelected=!S},null,40,ou)]),g("td",null,[ne(Gi,{value:D,"data-key":oe.toString(),editable:C,"class-name":"note-obj-group-frame-item-input-value",onValueChange:de=>function(Q,re){l.value[Q].value=re,I(),l.value[Q].editable=!1}(oe.toString(),de)},null,8,["value","data-key","editable","onValueChange"])]),g("td",null,[g("input",{type:"color",value:R,onChange:de=>function(Q,re){let se="";re.target&&(se=re.target.value),l.value[Q].primaryColor=se||t.defaultColor.primaryColor,I()}(oe.toString(),de)},null,40,ru)]),g("td",null,[g("input",{type:"color",value:E,onChange:de=>function(Q,re){let se="";re.target&&(se=re.target.value),l.value[Q].secondaryColor=se||t.defaultColor.secondaryColor,I()}(oe.toString(),de)},null,40,au)]),g("td",null,[g("input",{type:"number",step:1,min:-100,max:100,value:ee,onChange:de=>function(Q,re){let se=0;re.target&&(se=+re.target.value),l.value[Q].weight=se||0,I()}(oe.toString(),de)},null,40,iu)]),g("td",null,[le(g("span",{title:m(t).lang.editTitle,class:$e(["note-obj-group-frame-item-btn note-obj-group-frame-item-edit",{"note-obj-group-frame-item-ok":C}]),onClick:ie(de=>T(oe.toString()),["stop"])},null,10,su),[[je,oe!=="default"]])]),g("td",null,[le(g("span",{title:m(t).lang.deleteTitle,class:"note-obj-group-frame-item-btn note-obj-group-frame-item-delete",onClick:ie(de=>function(Q){Q!=="default"&&(l.value[Q].isExists=!1,I())}(oe.toString()),["stop"])},null,8,lu),[[je,oe!=="default"]])])],512)),[[je,k&&A]])),128))])])])]),g("div",cu,[g("button",{type:"button",disabled:m(u)===0,title:m(t).lang.deleteSelectedTitle,class:"note-obj-group-frame-delete-selected",onClick:ie(M,["stop"])},H(m(t).lang.deleteSelectedText),9,uu),g("button",{type:"button",title:m(t).lang.groupCreateValueTitle,class:"note-obj-group-frame-create-value",onClick:ie(x,["stop"])},H(m(t).lang.groupCreateValueText),9,du)]),g("div",pu,[le(g("span",{class:"note-obj-group-frame-show-modify-text"},H(m(t).lang.modifyText),513),[[je,s.value]]),le(g("span",{class:"note-obj-group-frame-show-wait-text"},H(m(t).lang.waitText),513),[[je,i.value]]),g("button",{title:m(t).lang.saveContentTitle,class:"note-obj-group-frame-save-content",disabled:!s.value,onClick:ie(v,["stop"])},H(m(t).lang.saveContentText),9,fu),g("button",{title:m(t).lang.closeContentTitle,class:"note-obj-group-frame-cancel-content",onClick:ie(h,["stop"])},H(m(t).lang.closeCotentText),9,gu)])])])):rt("",!0)}}),bu=["onClick"],mu={class:"note-obj-select-group-frame-dialog"},xu={class:"note-obj-select-group-frame-header"},vu={class:"note-obj-select-group-frame-header-text"},yu={class:"note-obj-select-group-frame-content"},wu=["title","onClick"],Tu={class:"note-obj-select-group-frame-footer"},ju=["onClick"],Su=Te({__name:"NoteObjSelectGroupFrame",setup(e){const t=ze(),n=so(),o=ye([]),{isShow:r}=kt(n);function a(){s()}function s(){n.isShow=!1}return Ce(r,i=>{i&&(o.value=Object.keys(t.group).sort((l,c)=>{const u=Number(t.group[l].weight)||0,d=Number(t.group[c].weight)||0;return u-d<0?1:u-d>0?-1:0}).map(l=>({key:l,...t.group[l]})))}),(i,l)=>le((K(),q("div",{class:"note-obj-select-group-frame-presentation",onClick:ie(a,["self"])},[g("div",mu,[g("div",xu,[g("div",vu,H(m(t).lang.selectGroupHeaderText),1)]),g("div",yu,[(K(!0),q(be,null,De(o.value,({key:c,value:u,primaryColor:d,secondaryColor:f})=>(K(),q("div",{key:c,class:"note-obj-select-group-frame-group-item",title:c==="default"?m(t).lang.defaultGroupText:u,style:nn({color:f,backgroundColor:d}),onClick:ie(w=>function(T){typeof n.selected=="function"&&(n.selected(T),n.selected=null),s()}(c),["stop"])},H(c==="default"?m(t).lang.defaultGroupText:u),13,wu))),128))]),g("div",Tu,[g("span",{class:"note-obj-select-group-frame-btn",onClick:ie(s,["stop"])},H(m(t).lang.cancelText),9,ju)])])],8,bu)),[[je,m(n).isShow]])}}),Iu=["onClick"],ku={class:"note-obj-new-group-frame-dialog"},Du={class:"note-obj-new-group-frame-header"},Cu={class:"note-obj-new-group-frame-title-text"},Nu=["placeholder","onKeyup"],Au={class:"note-obj-new-group-frame-color-label"},Mu={class:"note-obj-new-group-frame-color-label-text"},Vu={class:"note-obj-new-group-frame-color-label"},_u={class:"note-obj-new-group-frame-color-label-text"},Eu={class:"note-obj-new-group-frame-color-label"},Gu={class:"note-obj-new-group-frame-color-label-text"},Lu=["title","onClick"],Pu=["ttile","onClick"],zu=Te({__name:"NoteObjNewGroupFrame",setup(e){const t=ze(),n=xr(),o=ye(""),r=ye(""),a=ye(""),s=ye(0),{isShow:i}=kt(n);function l(f){f.key==="Enter"?c():f.key==="Escape"&&d()}function c(){if(o.value){const f="g_"+Date.now();t.writeNewGroupValue(f,{value:o.value,primaryColor:r.value,secondaryColor:a.value,weight:s.value})&&(typeof n.created=="function"&&(n.created(f),n.created=null),d())}}function u(){d()}function d(){n.isShow=!1}return Ce(i,f=>{f&&(o.value=t.lang.groupNewValueText,r.value=t.defaultColor.primaryColor,a.value=t.defaultColor.secondaryColor,s.value=0)}),(f,w)=>le((K(),q("div",{class:"note-obj-new-group-frame-presentation",onClick:ie(u,["self"])},[g("div",ku,[g("div",Du,[g("span",Cu,H(m(t).lang.groupCreateValueText),1)]),le(g("input",{"onUpdate:modelValue":w[0]||(w[0]=T=>o.value=T),type:"text",placeholder:m(t).lang.groupPlaceholder,class:"note-obj-new-group-frame-input",onKeyup:zt(ie(l,["prevent"]),["enter","esc"])},null,40,Nu),[[Ue,o.value,void 0,{trim:!0}],[m(lo),m(i)]]),g("div",Au,[g("span",Mu,H(m(t).lang.groupPrimaryColorText+": "),1),le(g("input",{"onUpdate:modelValue":w[1]||(w[1]=T=>r.value=T),type:"color"},null,512),[[Ue,r.value]])]),g("div",Vu,[g("span",_u,H(m(t).lang.groupSecondaryColorText+": "),1),le(g("input",{"onUpdate:modelValue":w[2]||(w[2]=T=>a.value=T),type:"color"},null,512),[[Ue,a.value]])]),g("div",Eu,[g("span",Gu,H(m(t).lang.groupWeightText+": "),1),le(g("input",{"onUpdate:modelValue":w[3]||(w[3]=T=>s.value=T),type:"number",step:1,min:-100,max:100},null,512),[[Ue,s.value]])]),g("button",{type:"button",title:m(t).lang.saveTagTitle,onClick:ie(c,["stop"])},H(m(t).lang.saveTagText),9,Lu),g("button",{type:"button",ttile:m(t).lang.cancelTagTItle,onClick:ie(d,["stop"])},H(m(t).lang.cancelTagText),9,Pu)])],8,Iu)),[[je,m(i)]])}}),Ou={class:"note-obj-popover-frame-header"},Uu={class:"note-obj-popover-frame-title"},Bu={class:"note-obj-popover-frame-title"},Wu={class:"note-obj-popover-frame-content"},Ru=["title","onOnclick"],Hu=g("div",{class:"note-obj-popover-frame-arrow"},null,-1),Fu=Te({__name:"NoteObjPopoverFrame",setup(e){const t=ze(),n=Zo(),{currentUserId:o}=kt(n),r=Ut({name:"",tag:"",group:""}),a=ye({}),s=ye("");function i(){n.isPopHover=!0}function l(){n.isPopHover=!1,Be.debounce("popoverHide",()=>{n.isPopHover||n.isTagHover||(n.isShow=!1)},1e3)}return Ce(o,c=>{if(c){Object.assign(r,t.items[c]);const u=r.group,d=Object.keys(t.group),f={};if(u&&u!=="default"&&d.includes(u)){s.value=t.group[u].value;const w=Object.assign({},t.items);for(const T in w){const M=w[T];M.group===u&&T!==c&&(f[T]=M)}}else s.value="";a.value=f}}),(c,u)=>le((K(),q("div",{class:"note-obj-popver-frame-dialog",style:nn({left:m(n).x+10+"px",top:m(n).y-50+"px"}),onMouseenter:i,onMouseleave:l},[g("div",Ou,[g("div",Uu,H(s.value),1),g("div",Bu,H(r.tag||r.name||""),1)]),g("div",Wu,[(K(!0),q(be,null,De(a.value,(d,f,w)=>(K(),q("div",{key:f,class:$e(w%2==1?"note-obj-popover-frame-item-deepen":"note-obj-popover-frame-item"),title:f+(d.name&&d.name!==f?`
${d.name}`:"")+(d.tag?`
${d.tag}`:""),onOnclick:ie(T=>function(M,x){t.openLink(x.toString(),M.ctrlKey||M.metaKey,M.shiftKey,"popover")}(T,f),["stop"])},H(d.tag||d.name||f),43,Ru))),128))]),Hu],36)),[[je,m(n).isShow]])}}),Mt=Te({__name:"NoteObjFlodHeader",props:{text:null,iconRomote:{type:Boolean}},emits:["update:iconRomote"],setup:(e,{emit:t})=>(n,o)=>(K(),q("header",{onClick:o[0]||(o[0]=ie(r=>t("update:iconRomote",!e.iconRomote),["stop"]))},[g("span",null,H(e.text),1),g("i",{class:$e(["note-obj-settings-frame-header-icon",{"note-obj-settings-frame-header-icon-romote":e.iconRomote}])},null,2)]))}),Zu={class:"note-obj-settings-frame-component-package"},Yu=["id","checked"],Ku=["for"],$u=Te({__name:"NoteObjSettingsCheckbox",props:{id:null,isSelected:{type:Boolean},label:null},emits:["change"],setup:(e,{emit:t})=>(n,o)=>(K(),q("div",Zu,[g("input",{type:"checkbox",id:e.id,checked:e.isSelected,onChange:o[0]||(o[0]=r=>t("change",!e.isSelected))},null,40,Yu),g("label",{for:e.id,class:"note-obj-settings-checkbox-label"},H(e.label),9,Ku)]))}),Ju={class:"note-obj-settings-frame-component-package-input-text"},Xu={class:"note-obj-setttings-frame-before-input-text"},Qu=["id","value"],qu=Te({__name:"NoteObjSettingsInput",props:{id:null,value:null,label:null},emits:["change"],setup(e,{emit:t}){const n=e;function o(r){Be.debounce(n.id+"_settingsInput",()=>{let a="";r.target&&(a=r.target.value),t("change",a)},500)}return(r,a)=>(K(),q("div",Ju,[g("span",Xu,H(e.label),1),g("input",{type:"text",id:e.id,value:e.value,onInput:o},null,40,Qu)]))}}),ed=["id"],td={class:"note-obj-settings-frame-radio-config-text"},nd=["id","value","checked"],od=["for"],rd=Te({__name:"NoteObjSettingsRadio",props:{id:null,label:null,value:null,options:null},emits:["change"],setup(e,{emit:t}){const n=ze();function o(r){let a="";r.target&&(a=r.target.value),t("change",a)}return(r,a)=>(K(),q("div",{class:"note-obj-settings-frame-component-package",id:e.id},[g("label",td,H(e.label),1),(K(!0),q(be,null,De(e.options,(s,i)=>(K(),q("span",{key:i},[g("input",{type:"radio",id:e.id+"_"+i,value:i,checked:e.value===i,onChange:o},null,40,nd),g("label",{for:e.id+"_"+i,class:"note-obj-settings-radio-label"},H(m(n).lang[s]||s),9,od)]))),128))],8,ed))}}),ad={class:"note-obj-settings-frame-component-package"},id=["for"],sd=["id","name"],ld=["value","selected"],cd=Te({__name:"NoteObjSettingsSelect",props:{id:null,selected:null,options:null,label:null},emits:["change"],setup(e,{emit:t}){const n=ze();function o(r){let a="";r.target&&(a=r.target.value),t("change",a)}return(r,a)=>(K(),q("div",ad,[g("label",{class:"note-obj-settings-frame-before-select-text",for:e.id},H(e.label),9,id),g("select",{id:e.id,name:e.id+"_select",onChange:o},[(K(!0),q(be,null,De(e.options,(s,i)=>(K(),q("option",{key:i,value:i,selected:i===e.selected},H(m(n).lang[s]||s),9,ld))),128))],40,sd)]))}}),ud={class:"note-obj-settings-frame-content-section"},Wt=Te({__name:"NoteObjSettingsItem",props:{id:null,type:null,value:{type:[String,Boolean]},label:null,options:null},emits:["value-change"],setup:(e,{emit:t})=>(n,o)=>(K(),q("div",ud,[e.type==="checkbox"?(K(),Pe($u,{key:0,id:e.id,label:e.label,"is-selected":!!e.value,onChange:o[0]||(o[0]=r=>t("value-change",r))},null,8,["id","label","is-selected"])):e.type==="text"?(K(),Pe(qu,{key:1,id:e.id,label:e.label,value:e.value.toString(),onChange:o[1]||(o[1]=r=>t("value-change",r))},null,8,["id","label","value"])):e.type==="radio"?(K(),Pe(rd,{key:2,id:e.id,label:e.label,value:e.value.toString(),options:e.options||{},onChange:o[2]||(o[2]=r=>t("value-change",r))},null,8,["id","label","value","options"])):e.type==="select"?(K(),Pe(cd,{key:3,id:e.id,label:e.label,options:e.options||{},selected:e.value.toString(),onChange:o[3]||(o[3]=r=>t("value-change",r))},null,8,["id","label","options","selected"])):rt("",!0)]))}),dd={class:"note-obj-settings-frame-content-section"},pd=["href"],fd={key:1},Rt=Te({__name:"NoteObjScriptItem",props:{label:null,text:null,type:null,url:null},setup:e=>(t,n)=>(K(),q("div",dd,[g("span",null,H(e.label),1),e.type==="a"?(K(),q("a",{key:0,href:e.url||"#",target:"_blank"},H(e.text),9,pd)):e.type==="p"?(K(),q("p",fd,H(e.text),1)):rt("",!0)]))}),Li="7.0.0",Pi="2023-04-08",gd=["onClick"],hd={class:"note-obj-settings-frame-card"},bd={class:"note-obj-settings-frame-header"},md={class:"note-obj-settings-frame-headline"},xd=["title","onClick"],vd={class:"note-obj-settings-frame-body"},yd={class:"note-obj-settings-frame-flod"},wd={class:"note-obj-settings-frame-content"},Td={class:"note-obj-settings-frame-flod"},jd={class:"note-obj-settings-frame-content"},Sd={class:"note-obj-settings-frame-flod"},Id={class:"note-obj-settings-frame-content"},kd={class:"note-obj-settings-frame-flod"},Dd={class:"note-obj-settings-frame-content"},Cd={key:0,class:"note-obj-settings-frame-flod"},Nd={class:"note-obj-settings-frame-content"},Ad={class:"note-obj-settings-frame-flod"},Md={class:"note-obj-settings-frame-content"},Vd={class:"note-obj-settings-frame-content-section note-obj-settings-frame-center-content"},_d=["onClick"],Ed={class:"note-obj-settings-frame-content-section note-obj-settings-frame-center-content"},Gd=["title","disabled","onClick"],Ld=["title","disabled","onClick"],Pd=["title","disabled","onClick"],zd={class:"note-obj-settings-frame-content-section"},Od=g("div",{class:"note-obj-settings-frame-content-section"},[g("span",null," ======================================== ")],-1),Ud={class:"note-obj-settings-frame-content-section"},Bd=g("div",{class:"note-obj-settings-frame-content-section"},[g("span",null," ======================================== ")],-1),Wd={class:"note-obj-settings-frame-content-section"},Rd=g("div",{class:"note-obj-settings-frame-content-section"},[g("span",null," ======================================== ")],-1),Hd={class:"note-obj-settings-frame-content-section"},Fd=g("div",{class:"note-obj-settings-frame-content-section"},[g("span",null," ======================================== ")],-1),Zd={class:"note-obj-settings-frame-flod"},Yd={class:"note-obj-settings-frame-content"},Kd={class:"note-obj-settings-frame-content-section"},$d=g("div",{class:"note-obj-settings-frame-content-section"},[g("span",null," ======================================== ")],-1),Jd=g("div",{class:"note-obj-settings-frame-content-section"},[g("span",null," ======================================== ")],-1),Xd={class:"note-obj-settings-frame-footer"},Qd=["title","onClick"],qd=["title","onClick"],ep=Te({__name:"NoteObjSettingsFrame",setup(e){const t=ze(),n=Vi(),o=_i(),r=fe.info(),a=Ut({searchBox:!1,searchValue:!1,addNote:!1,interface:!1,other:!1,storeData:!1,script:!1}),s={searchBox:{showIndex:{id:"settingsSearchBoxShowIndexText",type:"checkbox"},canHideSearchFrame:{id:"settingsSearchBoxCanHideSearchFrameText",type:"checkbox"},showGroupName:{id:"settingsSearchBoxShowGroupNameText",type:"checkbox"},openNewTab:{id:"settingsSearchBoxOpenNewTabText",type:"checkbox"},enableShortcutKeys:{id:"settingsSearchBoxEnableShortcutKeysText",type:"checkbox"}},searchValue:{caseSensitive:{id:"settingsSearchValueCaseSensitiveText",type:"checkbox"},split:{id:"settingsSearchValueSplitText",type:"checkbox"},regular:{id:"settingsSearchValueRegularText",type:"checkbox"}},addNote:{showNoteGroupName:{id:"settingsAddNoteShowNoteGroupNameText",type:"checkbox"},hideNoteText:{id:"settingsAddNoteHideNoteText",type:"checkbox"},showNoteGroupColor:{id:"settingsAddNoteShowNoteGroupColorText",type:"checkbox"},showPopoverFrame:{id:"settingsAddNoteShowPopoverFrameText",type:"checkbox"},openNoteNewTab:{id:"settingsAddNoteOpenNoteNewTabText",type:"checkbox"},canHideAddFrame:{id:"settingsAddNoteCanHideAddFrameText",type:"checkbox"}},interface:{insertSearchButton:{id:"settingsInterfaceInsertSearchButtonText",type:"checkbox"},mode:{id:"settingsInterfaceConfigText",type:"radio",options:{bright:"settingsInterfaceBrightText",dark:"settingsInterfaceDarkText"}},language:{id:"settingsInterfaceLanguageText",type:"select",options:t.i18n.getLangOptions()}},storeData:{enableWebDAV:{id:"settingsWebDAVEnableText",type:"checkbox"},autoSync:{id:"settingsFrameInterfaceAutoSyncText",type:"checkbox"}}},i=ke(()=>Object.keys(t.config.other).length>0),l=ke(()=>t.storeModificationTime?new Date(t.storeModificationTime).toString():"none."),c=ke(()=>t.webDAVSyncTime?new Date(t.webDAVSyncTime).toString():"none.");function u(){o.isInsert=!0}function d(){t.config.storeData.enableWebDAV&&t.config.storeData.webDAVSyncMode==="two-way"&&!t.webDAVSyncLoading&&t.webDAVSyncTimer("two-way")}function f(){t.config.storeData.enableWebDAV&&t.config.storeData.webDAVSyncMode!=="download"&&!t.webDAVSyncLoading&&t.webDAVSyncTimer("upload")}function w(){t.config.storeData.enableWebDAV&&t.config.storeData.webDAVSyncMode!=="upload"&&!t.webDAVSyncLoading&&t.webDAVSyncTimer("download")}function T(){t.export()}function M(){t.import()}function x(){v()}function v(){n.isInsert=!1}return(I,h)=>(K(),Pe(gr,{name:"note-obj-settings-frame-card"},{default:sr(()=>[m(n).isInsert?(K(),q("div",{key:0,class:"note-obj-settings-frame-presentation",onClick:ie(x,["self"])},[g("div",hd,[g("header",bd,[g("span",md,H(m(t).lang.settingsHeadlineText),1),g("span",{title:m(t).lang.settingsCloseTitle,class:"note-obj-settings-frame-close-btn",onClick:ie(v,["stop"])},null,8,xd)]),g("div",vd,[g("div",yd,[ne(Mt,{"icon-romote":a.searchBox,"onUpdate:iconRomote":h[0]||(h[0]=p=>a.searchBox=p),text:m(t).lang.settingsAboutSearchBoxText},null,8,["icon-romote","text"]),le(g("div",wd,[(K(!0),q(be,null,De(s.searchBox,({id:p,type:y},k)=>(K(),Pe(Wt,{key:k,value:m(t).config.searchBox[k],id:p,label:m(t).lang[p],type:y,onValueChange:A=>function(S,D){t.config.searchBox[S]=D,t.saveConfig()}(k,!!A)},null,8,["value","id","label","type","onValueChange"]))),128))],512),[[je,a.searchBox]])]),g("div",Td,[ne(Mt,{"icon-romote":a.searchValue,"onUpdate:iconRomote":h[1]||(h[1]=p=>a.searchValue=p),text:m(t).lang.settingsAboutSearchValueText},null,8,["icon-romote","text"]),le(g("div",jd,[(K(!0),q(be,null,De(s.searchValue,({id:p,type:y},k)=>(K(),Pe(Wt,{key:k,value:m(t).config.searchValue[k],id:p,label:m(t).lang[p],type:y,onValueChange:A=>function(S,D){t.config.searchValue[S]=D,t.saveConfig()}(k,!!A)},null,8,["value","id","label","type","onValueChange"]))),128))],512),[[je,a.searchValue]])]),g("div",Sd,[ne(Mt,{"icon-romote":a.addNote,"onUpdate:iconRomote":h[2]||(h[2]=p=>a.addNote=p),text:m(t).lang.settingsAboutAddNoteText},null,8,["icon-romote","text"]),le(g("div",Id,[(K(!0),q(be,null,De(s.addNote,({id:p,type:y},k)=>(K(),Pe(Wt,{key:k,value:m(t).config.addNote[k],id:p,label:m(t).lang[p],type:y,onValueChange:A=>function(S,D){t.config.addNote[S]=D,t.saveConfig()}(k,!!A)},null,8,["value","id","label","type","onValueChange"]))),128))],512),[[je,a.addNote]])]),g("div",kd,[ne(Mt,{"icon-romote":a.interface,"onUpdate:iconRomote":h[3]||(h[3]=p=>a.interface=p),text:m(t).lang.settingsAboutInterfaceText},null,8,["icon-romote","text"]),le(g("div",Dd,[(K(!0),q(be,null,De(s.interface,({id:p,type:y,options:k},A)=>(K(),Pe(Wt,{key:A,value:m(t).config.interface[A],id:p,label:m(t).lang[p],type:y,options:k,onValueChange:S=>function(D,C){D==="mode"?t.setInterfaceMode(C.toString()):D==="language"?t.setInterfaceLanguage(C.toString()):D==="insertSearchButton"&&(t.config.interface.insertSearchButton=!!C,t.saveConfig())}(A,S)},null,8,["value","id","label","type","options","onValueChange"]))),128))],512),[[je,a.interface]])]),m(i)?(K(),q("div",Cd,[ne(Mt,{"icon-romote":a.other,"onUpdate:iconRomote":h[4]||(h[4]=p=>a.other=p),text:m(t).lang.settingsAboutOtherText},null,8,["icon-romote","text"]),le(g("div",Nd,[(K(!0),q(be,null,De(m(t).config.other,(p,y)=>(K(),Pe(Wt,{key:y,value:p,id:"otherSettings_"+y,label:m(t).otherConfigInfo[y].lang[m(t).i18n.getLangType()],type:m(t).otherConfigInfo[y].type,options:m(t).otherConfigInfo[y].options,onValueChange:k=>function(A,S){const D=t.config.other[A];if(D!==S&&(t.config.other[A]=S,t.saveConfig(void 0,!1))){t.addNotifaction(t.lang.saveCompletedNotifactionText);const C=t.otherConfigInfo[A];C.type==="checkbox"?C.event(!!S,!!D):C.event(S.toString(),D.toString())}}(y.toString(),k)},null,8,["value","id","label","type","options","onValueChange"]))),128))],512),[[je,a.other]])])):rt("",!0),g("div",Ad,[ne(Mt,{"icon-romote":a.storeData,"onUpdate:iconRomote":h[5]||(h[5]=p=>a.storeData=p),text:m(t).lang.settingsAboutStoredDataText},null,8,["icon-romote","text"]),le(g("div",Md,[g("div",Vd,[g("button",{type:"button",onClick:ie(u,["stop"])},H(m(t).lang.settingsWebDAVConfigText),9,_d)]),g("div",Ed,[g("button",{type:"button",title:m(t).lang.settingsWebDAVSyncTitle,disabled:!m(t).config.storeData.enableWebDAV||m(t).config.storeData.webDAVSyncMode!=="two-way",onClick:ie(d,["stop"])},H(m(t).lang.settingsWebDAVSyncText),9,Gd),g("button",{type:"button",title:m(t).lang.settingsWebDAVUploadTitle,disabled:!m(t).config.storeData.enableWebDAV||m(t).config.storeData.webDAVSyncMode==="download",onClick:ie(f,["stop"])},H(m(t).lang.settingsWebDAVUploadText),9,Ld),g("button",{type:"button",title:m(t).lang.settingsWebDAVDownloadTitle,disabled:!m(t).config.storeData.enableWebDAV||m(t).config.storeData.webDAVSyncMode==="upload",onClick:ie(w,["stop"])},H(m(t).lang.settingsWebDAVDownloadText),9,Pd)]),(K(!0),q(be,null,De(s.storeData,({id:p,type:y},k)=>(K(),Pe(Wt,{key:k,value:m(t).config.storeData[k],id:p,label:m(t).lang[p],type:y,onValueChange:A=>function(S,D){t.config.storeData[S]=D,t.saveConfig(),S==="autoSync"?t.valueChangeListener():S==="enableWebDAV"&&t.webDAVSyncTimer("immediate")}(k,!!A)},null,8,["value","id","label","type","onValueChange"]))),128)),g("div",zd,[g("span",null,H(m(t).lang.settingsStoredDataLastTimeText),1)]),Od,g("div",Ud,[g("span",null,H(m(l)),1)]),Bd,g("div",Wd,[g("span",null,H(m(t).lang.settingsWebDAVSyncTimeText),1)]),Rd,g("div",Hd,[g("span",null,H(m(c)),1)]),Fd],512),[[je,a.storeData]])]),g("div",Zd,[ne(Mt,{"icon-romote":a.script,"onUpdate:iconRomote":h[6]||(h[6]=p=>a.script=p),text:m(t).lang.settingsAboutScriptText},null,8,["icon-romote","text"]),le(g("div",Yd,[ne(Rt,{type:"a",label:m(t).lang.settingsScriptAuthorText,text:m(t).scriptInfo.author.name,url:m(t).scriptInfo.author.homepage},null,8,["label","text","url"]),ne(Rt,{type:"a",label:m(t).lang.settingsScriptVersionText,text:(m(t).scriptInfo.version||m(r).script.version)+" ("+m(t).scriptInfo.updated+")",url:m(t).scriptInfo.url},null,8,["label","text","url"]),ne(Rt,{type:"a",label:m(t).lang.settingsScriptCoreText,text:"Note_Obj v"+m(Li)+" ("+m(Pi)+")",url:"https://github.com/LightAPIs"},null,8,["label","text"]),g("div",Kd,[g("span",null,H(m(t).lang.settingsScriptLibraryText),1)]),$d,(K(!0),q(be,null,De(m(t).scriptInfo.library,(p,y)=>(K(),Pe(Rt,{key:y,type:"a",label:"+ ",text:p.name+" (v"+p.version+")",url:p.url},null,8,["text","url"]))),128)),Jd,(K(!0),q(be,null,De(m(t).scriptInfo.icons,(p,y)=>(K(),Pe(Rt,{key:y,type:"a",label:m(t).lang.settingsScriptIconText,text:p.name,url:p.url},null,8,["label","text","url"]))),128)),ne(Rt,{type:"p",label:m(t).lang.settingsScriptHandlerText,text:m(r).scriptHandler+" ("+(m(r).version||"0.0.0")+")"},null,8,["label","text"])],512),[[je,a.script]])])]),g("div",Xd,[g("button",{type:"button",title:m(t).lang.settingsStoredDataExportTitle,onClick:ie(T,["stop"])},H(m(t).lang.gmExportText),9,Qd),g("button",{type:"button",title:m(t).lang.settingsStoredDataImportIitle,onClick:ie(M,["stop"])},H(m(t).lang.gmImportText),9,qd)])])],8,gd)):rt("",!0)]),_:1}))}}),tp={key:0,class:"note-obj-webdav-frame-presentation"},np={class:"note-obj-webdav-frame-dialog"},op={class:"note-obj-webdav-frame-header"},rp={class:"note-obj-webdav-frame-title"},ap={class:"note-obj-webdav-frame-content"},ip={class:"note-obj-webdav-frame-form"},sp={class:"note-obj-webdav-frame-form-item"},lp={for:"note-obj-webdav-frame-url"},cp=g("br",null,null,-1),up={class:"note-obj-webdav-frame-form-item"},dp={for:"note-obj-webdav-frame-file"},pp=g("br",null,null,-1),fp={class:"note-obj-webdav-frame-form-item"},gp={for:"note-obj-webdav-frame-user"},hp=g("br",null,null,-1),bp={class:"note-obj-webdav-frame-form-item"},mp={for:"note-obj-webdav-frame-password"},xp=g("br",null,null,-1),vp={class:"note-obj-webdav-frame-form-item"},yp={for:"note-obj-webdav-frame-passphrase"},wp=g("br",null,null,-1),Tp={class:"note-obj-webdav-frame-form-item"},jp={fro:"note-obj-webdav-frame-interval"},Sp=g("br",null,null,-1),Ip={class:"note-obj-webdav-frame-form-item"},kp={for:"note-obj-webdav-frame-mode"},Dp=["value","selected"],Cp={class:"note-obj-webdav-frame-footer"},Np=["title","onClick"],Ap=["title","onClick"],Mp=Te({__name:"NoteObjWebdavFrame",setup(e){const t={"two-way":"webDAVSyncModeTwoWayText",upload:"webDAVSyncModeUploadText",download:"webDAVSyncModeDownloadText"},n=ze(),{isInsert:o}=kt(_i()),r=Ut({url:"",file:"",user:"",password:"",passphrase:"",interval:0,mode:"two-way"});function a(){const{url:i,file:l,user:c,password:u,passphrase:d,interval:f,mode:w}=r;let T=Number(f)||0;T<=0&&(T=0),Object.assign(n.config.storeData,{webDAVURL:i.trim(),webDAVFile:l.trim(),webDAVUser:c.trim(),webDAVPassword:u,webDAVPassphrase:d,webDAVAutoSyncInterval:Math.floor(T),webDAVSyncMode:w}),n.saveConfig(),n.webDAVSyncTimer(),s()}function s(){o.value=!1}return Ce(o,i=>{if(i){const{webDAVURL:l,webDAVFile:c,webDAVUser:u,webDAVPassword:d,webDAVPassphrase:f,webDAVAutoSyncInterval:w,webDAVSyncMode:T}=n.config.storeData;Object.assign(r,{url:l,file:c,user:u,password:d,passphrase:f,interval:w,mode:T})}}),(i,l)=>m(o)?(K(),q("div",tp,[g("div",np,[g("div",op,[g("div",rp,H(m(n).lang.webDAVHeaderText),1)]),g("div",ap,[g("div",ip,[g("div",sp,[g("label",lp,H(m(n).lang.webDAVURLText),1),cp,le(g("input",{"onUpdate:modelValue":l[0]||(l[0]=c=>r.url=c),id:"note-obj-webdav-frame-url",type:"url"},null,512),[[Ue,r.url]])]),g("div",up,[g("label",dp,H(m(n).lang.webDAVFileText),1),pp,le(g("input",{"onUpdate:modelValue":l[1]||(l[1]=c=>r.file=c),id:"note-obj-webdav-frame-file",type:"text"},null,512),[[Ue,r.file]])]),g("div",fp,[g("label",gp,H(m(n).lang.webDAVUserText),1),hp,le(g("input",{"onUpdate:modelValue":l[2]||(l[2]=c=>r.user=c),id:"note-obj-webdav-frame-user",type:"text"},null,512),[[Ue,r.user]])]),g("div",bp,[g("label",mp,H(m(n).lang.webDAVPasswordText),1),xp,le(g("input",{"onUpdate:modelValue":l[3]||(l[3]=c=>r.password=c),id:"note-obj-webdav-frame-password",type:"password"},null,512),[[Ue,r.password]])]),g("div",vp,[g("label",yp,H(m(n).lang.webDAVPassphraseText),1),wp,le(g("input",{"onUpdate:modelValue":l[4]||(l[4]=c=>r.passphrase=c),id:"note-obj-webdav-frame-passphrase",type:"password"},null,512),[[Ue,r.passphrase]])]),g("div",Tp,[g("label",jp,H(m(n).lang.webDAVIntervalText),1),Sp,le(g("input",{"onUpdate:modelValue":l[5]||(l[5]=c=>r.interval=c),id:"note-obj-webdav-frame-interval",type:"number",min:"0",step:"1"},null,512),[[Ue,r.interval]])]),g("div",Ip,[g("label",kp,H(m(n).lang.webDAVSyncModeText),1),le(g("select",{id:"note-obj-webdav-frame-mode","onUpdate:modelValue":l[6]||(l[6]=c=>r.mode=c)},[(K(),q(be,null,De(t,(c,u)=>g("option",{key:u,value:u,selected:u===r.mode},H(m(n).lang[c]),9,Dp)),64))],512),[[Lo,r.mode]])])])]),g("div",Cp,[g("button",{title:m(n).lang.saveContentTitle,class:"note-obj-webdav-frame-save-content",onClick:ie(a,["stop"])},H(m(n).lang.saveContentText),9,Np),g("button",{title:m(n).lang.closeContentTitle,class:"note-obj-webdav-frame-cancel-content",onClick:ie(s,["stop"])},H(m(n).lang.closeCotentText),9,Ap)])])])):rt("",!0)}}),Vp={class:"note-obj-message-frame-presentation"},_p=["onClick"],Ep={class:"note-obj-message-frame-content"},Gp=Te({__name:"NoteObjMessageFrame",setup(e){const t=Ei();return(n,o)=>(K(),q("div",Vp,[ne(cl,{tag:"div",name:"note-obj-message-frame-notifaction"},{default:sr(()=>[(K(!0),q(be,null,De(m(t).notifactions,({id:r,content:a})=>(K(),q("div",{key:r,class:"note-obj-message-frame-notifaction"},[g("span",{class:"note-obj-message-frame-close-btn",onClick:ie(s=>function(i){t.removeNotifaction(i)}(r),["stop"])},null,8,_p),g("div",Ep,H(a),1)]))),128))]),_:1})]))}}),Lp=["id"],Pp=Te({__name:"App",setup(e){const t=ze(),n=hr(),o=ke(()=>t.config.interface.mode==="dark"?"note-obj-interface-dark":"note-obj-interface-bright");function r(){t.showFrame("search",!0,!n.isShow)}return cr(()=>{document.onkeydown=a=>{t.config.searchBox.enableShortcutKeys&&(a.ctrlKey||a.metaKey)&&a.shiftKey&&a.key==="F"&&r()}}),(a,s)=>(K(),q("div",{id:m(t).id+"_vue",class:$e(["note-obj-vue-div",m(o)])},[ne(Wl,{"is-insert":m(t).config.interface.insertSearchButton,title:m(t).lang.searchTagTitle,"button-class":"note-obj-search-expand-span "+m(t).searchBtnClassName,"box-class":"note-obj-search-expand-box "+m(t).searchBtnBoxClassName,onClick:r},null,8,["is-insert","title","button-class","box-class"]),ne(ec),ne(dc),ne(Zc),ne(hu),ne(Su),ne(zu),ne(Fu),ne(ep),ne(Mp),ne(Gp)],10,Lp))}});class zp{constructor(t="info"){st(this,"version",Li);st(this,"updated",Pi);this.logLevel=t}queryLog(t,n,o,r){let a="";switch(a=r?`fn: Unable to find ${t} in document. Selector: (${n})`:`fn: Unable to find ${t}. Selector: (${n})`,o){case"error":console.error(a);break;case"warn":this.logLevel!=="error"&&console.warn(a);break;case"info":this.logLevel!=="info"&&this.logLevel!=="debug"||console.info(a);break;case"debug":this.logLevel==="debug"&&console.debug(a)}}query(t,n,o="error"){const r=t.querySelector(n);return r instanceof HTMLElement?r:(this.queryLog("HTMLElement",n,o),null)}queryAnchor(t,n,o="error"){const r=t.querySelector(n);return r instanceof HTMLAnchorElement?r:(this.queryLog("HTMLAnchorElement",n,o),null)}queryAll(t,n,o="error"){const r=t.querySelectorAll(n);return r.length===0&&this.queryLog("NodeListOf<HTMLElement>",n,o),r}queryAllAnchor(t,n,o="error"){const r=t.querySelectorAll(n);return r.length===0&&this.queryLog("NodeListOf<HTMLAnchorElement>",n,o),r}docQuery(t,n="error"){const o=document.querySelector(t);return o instanceof HTMLElement?o:(this.queryLog("HTMLElement",t,n,!0),null)}docQueryAnchor(t,n="error"){const o=document.querySelector(t);return o instanceof HTMLAnchorElement?o:(this.queryLog("HTMLAnchorElement",t,n,!0),null)}docQueryAll(t,n="error"){const o=document.querySelectorAll(t);return o.length===0&&this.queryLog("NodeListOf<HTMLElement>",t,n,!0),o}docQueryAllAnchor(t,n="error"){const o=document.querySelectorAll(t);return o.length===0&&this.queryLog("NodeListOf<HTMLAnchorElement>",t,n,!0),o}getText(t,n,o="error",r){const a=this.query(t,n,o);if(a){const s=a.textContent||"";return typeof r=="function"?r(s):s}return""}docGetText(t,n="error",o){const r=this.docQuery(t,n);if(r){const a=r.textContent||"";return typeof o=="function"?o(a):a}return""}getIdFromUrl(t,n){let o=t.replace(location.origin+"/","").replace(/\/$/,"");return typeof n=="function"&&(o=n(o)),o}getUrlId(t,n,o="error",r){const a=this.queryAnchor(t,n,o);return a?this.getIdFromUrl(a.href,r):""}docGetUrlId(t,n="error",o){const r=this.docQueryAnchor(t,n);return r?this.getIdFromUrl(r.href,o):""}}const Ft=class{constructor(t){st(this,"fn");st(this,"store");const{id:n,style:o,searchBtnClassName:r="",searchBtnBoxClassName:a="",itemClick:s,changeEvent:i,script:{library:l,icons:c,author:u,url:d,version:f,updated:w},settings:T,primaryColor:M,secondaryColor:x,language:v,logLevel:I="warn"}=t;this.fn=new zp(I);const h=Ft.insertDom(n),p=xl(Pp),y=function(){const k=Da(!0),A=k.run(()=>ye({}));let S=[],D=[];const C=qt({install(R){io(C),C._a=R,R.provide(Di,C),R.config.globalProperties.$pinia=C,D.forEach(E=>S.push(E)),D=[]},use(R){return this._a||vl?S.push(R):D.push(R),this},_p:S,_a:null,_e:k,_s:new Map,state:A});return C}();p.use(y),this.store=ze(),this.store.id=n,this.store.init(v),fe.addStyle(`
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
.note-obj-group-frame-presentation,
.note-obj-webdav-frame-presentation {
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
.note-obj-webdav-frame-presentation {
  z-index: 100007;
}
.note-obj-management-frame-dialog,
.note-obj-group-frame-dialog,
.note-obj-webdav-frame-dialog {
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
.note-obj-webdav-frame-dialog {
  min-height: 480px;
  width: 500px;
}
.note-obj-interface-dark .note-obj-management-frame-dialog,
.note-obj-interface-dark .note-obj-group-frame-dialog,
.note-obj-interface-dark .note-obj-webdav-frame-dialog {
  background-color: rgb(21, 32, 43);
  border: 1px solid #000;
  color: #fff;
}
.note-obj-interface-bright .note-obj-management-frame-dialog,
.note-obj-interface-bright .note-obj-group-frame-dialog,
.note-obj-interface-bright .note-obj-webdav-frame-dialog {
  background-color: #f5f5f5;
  border: 1px solid #e8e8e8;
  color: #000;
}
.note-obj-management-frame-header,
.note-obj-group-frame-header,
.note-obj-webdav-frame-header {
  margin: 20px 15px;
}
.note-obj-webdav-frame-title {
  text-align: center;
  font-size: 1.2em;
  font-weight: bold;
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
.note-obj-webdav-frame-content {
  margin: 0px 10px;
  min-height: 300px;
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
.note-obj-webdav-frame-form-item {
  margin: 12px 10px 0 10px;
}
.note-obj-webdav-frame-form-item input {
  margin-top: 5px;
  width: 450px;
}
.note-obj-webdav-frame-form-item select {
  margin-left: 15px;
  cursor: pointer;
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
.note-obj-group-frame-footer,
.note-obj-webdav-frame-footer {
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
.note-obj-group-frame-cancel-content,
.note-obj-webdav-frame-cancel-content {
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
.note-obj-interface-dark .note-obj-group-frame-cancel-content,
.note-obj-interface-dark .note-obj-webdav-frame-cancel-content {
  background-color: #333;
}
.note-obj-interface-bright .note-obj-management-frame-cancel-content,
.note-obj-interface-bright .note-obj-group-frame-cancel-content,
.note-obj-interface-bright .note-obj-webdav-frame-cancel-content {
  background-color: #5b5b5b;
}
.note-obj-interface-dark .note-obj-management-frame-cancel-content:hover,
.note-obj-interface-dark .note-obj-group-frame-cancel-content:hover,
.note-obj-interface-dark .note-obj-webdav-frame-cancel-content:hover {
  background-color: #444;
}
.note-obj-interface-bright .note-obj-management-frame-cancel-content:hover,
.note-obj-interface-bright .note-obj-group-frame-cancel-content:hover,
.note-obj-interface-bright .note-obj-webdav-frame-cancel-content:hover {
  background-color: #3b3b3b;
}
.note-obj-management-frame-save-content,
.note-obj-group-frame-save-content,
.note-obj-webdav-frame-save-content {
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
.note-obj-group-frame-save-content[disabled],
.note-obj-webdav-frame-save-content[disabled] {
  cursor: not-allowed;
  box-shadow: none;
  opacity: .65;
}
.note-obj-management-frame-save-content:not([disabled]):hover,
.note-obj-group-frame-save-content:not([disabled]):hover,
.note-obj-webdav-frame-save-content:not([disabled]):hover {
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
.note-obj-settings-frame-center-content {
  justify-content: center;
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
.note-obj-settings-frame-content-section button[disabled] {
  cursor: not-allowed;
  background-color: #ccc;
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
`),o&&fe.addStyle(o),this.store.searchBtnClassName=r,this.store.searchBtnBoxClassName=a,this.store.scriptInfo.author=u,this.store.scriptInfo.version=f,this.store.scriptInfo.updated=w,d&&(this.store.scriptInfo.url=d),l&&this.store.scriptInfo.library.push(...l),c&&this.store.scriptInfo.icons.push(...c),M&&(this.store.defaultColor.primaryColor=M),x&&(this.store.defaultColor.secondaryColor=x),typeof s=="function"&&(this.store.itemClick=s),typeof i=="function"&&(this.store.changeEvent=i),T&&this.store.initOtherConfigInfo(T),p.mount("#"+h)}getOtherConfig(){return Object.assign({},this.store.config.other)}judgeUsers(t){return this.store.judgeUsers(t)}getUserTag(t,n){return this.store.getUserTag(t,n)}createNoteBtn(t,n,o=[],r="div"){const a=document.createElement(r);return a.className=Ft.btnClassName,o.length>0&&a.classList.add(...o),a.title=this.store.i18n.query("editTitle"),a.addEventListener("click",s=>{s.stopPropagation(),this.store.showAdd(t,n)}),a}handler(t,n,o,r={},a){const{add:s,after:i,before:l,className:c=[],restore:u}=r;let d=n;if(o&&(d=this.fn.query(n,o,"warn")),d)if(s){const f=this.fn.query(d,"."+Ft.tagClassName,"none");if(f&&f.remove(),!u){const w=this.createNoteTag(t,r,s,c,a);w&&(i?i.after(w):l?l.before(w):d.appendChild(w))}}else u?this.restoreElement(d,t,r):this.updateElement(d,t,r,a)}restoreElement(t,n,o={}){const{maskPrimaryColor:r,maskHover:a,title:s,className:i=[],notModify:l}=o;l||(t.textContent=Ai(n,o)),r||this.store.config.addNote.showNoteGroupColor&&t.style.setProperty("color",""),a||(t.onmouseenter=null,t.onmouseleave=null),s&&(t.title=""),i.length>0&&t.classList.remove(...i)}updateElement(t,n,o={},r){const{maskPrimaryColor:a,title:s,offsetWidth:i=0,offsetHeight:l=0,maskHover:c,className:u=[],notModify:d,...f}=o,w=this.store.getUserTag(n,f);w&&(d?s&&(t.title=w):(t.textContent=w,s&&(t.title=n)),a||(this.store.config.addNote.showNoteGroupColor?t.style.setProperty("color",this.store.getPrimaryColor(n),"important"):t.style.setProperty("color","")),c||(t.onmouseenter=()=>{const T=ia(t),M=sa(t);this.store.showPopover(n,T+i,M+l)},t.onmouseleave=()=>{this.store.hidePopover()}),u.length>0&&t.classList.add(...u),this.store.updateUserName(n,r))}createNoteTag(t,n={},o="span",r=[],a){const{maskPrimaryColor:s,maskSecondaryColor:i,offsetWidth:l=0,offsetHeight:c=0,maskHover:u,...d}=n,f=this.store.getUserTag(t,d);if(f){const w=document.createElement(o);return w.className=Ft.tagClassName,this.store.config.addNote.showNoteGroupColor&&(s||i?s?i||w.style.setProperty("color",this.store.getSecondaryColor(t),"important"):w.style.setProperty("color",this.store.getPrimaryColor(t),"important"):(w.style.setProperty("background-color",this.store.getPrimaryColor(t),"important"),w.style.setProperty("color",this.store.getSecondaryColor(t),"important"))),r.length>0&&w.classList.add(...r),w.textContent=f,u||(w.onmouseenter=()=>{const T=ia(w),M=sa(w);this.store.showPopover(t,T+l,M+c)},w.onmouseleave=()=>{this.store.hidePopover()}),this.store.updateUserName(t,a),w}return null}static insertDom(t){const n=document.createElement("div"),o=t+"_vue";return n.className="note-obj-vue-module",n.innerHTML=`<div id="${o}" class="note-obj-vue-div"></div>`,document.body.appendChild(n),o}};let dn=Ft;st(dn,"tagClassName","note-obj-user-tag"),st(dn,"btnClassName","note-obj-add-note-btn");window.Note_Obj=dn;
