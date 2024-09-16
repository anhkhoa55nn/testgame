import{p as _t,s as mt,a as At,r as yt,O as V,c as lt,A as y,M as Z,E as R,N as M,W as H,S as Q,C as St,R as wt}from"./index-CmB0Djev.js";import{J as ie,Y as ne,G as re}from"./index-CmB0Djev.js";const p=_t({status:"uninitialized"}),b={state:p,subscribeKey(i,t){return mt(p,i,t)},subscribe(i){return At(p,()=>i(p))},_getClient(){if(!p._client)throw new Error("SIWEController client not set");return p._client},async getNonce(i){const e=await this._getClient().getNonce(i);return this.setNonce(e),e},async getSession(){try{const t=await this._getClient().getSession();return t&&(this.setSession(t),this.setStatus("success")),t}catch{return}},createMessage(i){const e=this._getClient().createMessage(i);return this.setMessage(e),e},async verifyMessage(i){return await this._getClient().verifyMessage(i)},async signIn(){return await this._getClient().signIn()},async signOut(){const i=this._getClient();await i.signOut(),this.setStatus("ready"),this.setSession(void 0),i.onSignOut?.()},onSignIn(i){this._getClient().onSignIn?.(i)},onSignOut(){this._getClient().onSignOut?.()},setSIWEClient(i){p._client=yt(i),p.status="ready",V.setIsSiweEnabled(i.options.enabled)},setNonce(i){p.nonce=i},setStatus(i){p.status=i},setMessage(i){p.message=i},setSession(i){p.session=i,p.status=i?"success":"ready"}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=globalThis,q=I.ShadowRoot&&(I.ShadyCSS===void 0||I.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol(),X=new WeakMap;let ht=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==K)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(q&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=X.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&X.set(e,t))}return t}toString(){return this.cssText}};const vt=i=>new ht(typeof i=="string"?i:i+"",void 0,K),Ct=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((s,n,r)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+i[r+1],i[0]);return new ht(e,i,K)},bt=(i,t)=>{if(q)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),n=I.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=e.cssText,i.appendChild(s)}},tt=q?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return vt(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Et,defineProperty:xt,getOwnPropertyDescriptor:Ut,getOwnPropertyNames:Pt,getOwnPropertySymbols:Tt,getPrototypeOf:Ot}=Object,z=globalThis,et=z.trustedTypes,Nt=et?et.emptyScript:"",Rt=z.reactiveElementPolyfillSupport,x=(i,t)=>i,k={toAttribute(i,t){switch(t){case Boolean:i=i?Nt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},Y=(i,t)=>!Et(i,t),st={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:Y};Symbol.metadata??=Symbol("metadata"),z.litPropertyMetadata??=new WeakMap;class S extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=st){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),n=this.getPropertyDescriptor(t,s,e);n!==void 0&&xt(this.prototype,t,n)}}static getPropertyDescriptor(t,e,s){const{get:n,set:r}=Ut(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return n?.call(this)},set(o){const c=n?.call(this);r.call(this,o),this.requestUpdate(t,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??st}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;const t=Ot(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){const e=this.properties,s=[...Pt(e),...Tt(e)];for(const n of s)this.createProperty(n,e[n])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,n]of e)this.elementProperties.set(s,n)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const n=this._$Eu(e,s);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const n of s)e.unshift(tt(n))}else t!==void 0&&e.push(tt(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return bt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){const s=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,s);if(n!==void 0&&s.reflect===!0){const r=(s.converter?.toAttribute!==void 0?s.converter:k).toAttribute(e,s.type);this._$Em=t,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(t,e){const s=this.constructor,n=s._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const r=s.getPropertyOptions(n),o=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:k;this._$Em=n,this[n]=o.fromAttribute(e,r.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??Y)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,r]of this._$Ep)this[n]=r;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,r]of s)r.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],r)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(t){}firstUpdated(t){}}S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[x("elementProperties")]=new Map,S[x("finalized")]=new Map,Rt?.({ReactiveElement:S}),(z.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=globalThis,j=F.trustedTypes,it=j?j.createPolicy("lit-html",{createHTML:i=>i}):void 0,dt="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,ut="?"+$,Mt=`<${ut}>`,A=document,U=()=>A.createComment(""),P=i=>i===null||typeof i!="object"&&typeof i!="function",G=Array.isArray,Ht=i=>G(i)||typeof i?.[Symbol.iterator]=="function",D=`[ 	
\f\r]`,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nt=/-->/g,rt=/>/g,_=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ot=/'/g,at=/"/g,pt=/^(?:script|style|textarea|title)$/i,It=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),ft=It(1),v=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),ct=new WeakMap,m=A.createTreeWalker(A,129);function gt(i,t){if(!G(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return it!==void 0?it.createHTML(t):t}const kt=(i,t)=>{const e=i.length-1,s=[];let n,r=t===2?"<svg>":t===3?"<math>":"",o=E;for(let c=0;c<e;c++){const a=i[c];let h,u,l=-1,f=0;for(;f<a.length&&(o.lastIndex=f,u=o.exec(a),u!==null);)f=o.lastIndex,o===E?u[1]==="!--"?o=nt:u[1]!==void 0?o=rt:u[2]!==void 0?(pt.test(u[2])&&(n=RegExp("</"+u[2],"g")),o=_):u[3]!==void 0&&(o=_):o===_?u[0]===">"?(o=n??E,l=-1):u[1]===void 0?l=-2:(l=o.lastIndex-u[2].length,h=u[1],o=u[3]===void 0?_:u[3]==='"'?at:ot):o===at||o===ot?o=_:o===nt||o===rt?o=E:(o=_,n=void 0);const g=o===_&&i[c+1].startsWith("/>")?" ":"";r+=o===E?a+Mt:l>=0?(s.push(h),a.slice(0,l)+dt+a.slice(l)+$+g):a+$+(l===-2?c:g)}return[gt(i,r+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class T{constructor({strings:t,_$litType$:e},s){let n;this.parts=[];let r=0,o=0;const c=t.length-1,a=this.parts,[h,u]=kt(t,e);if(this.el=T.createElement(h,s),m.currentNode=this.el.content,e===2||e===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(n=m.nextNode())!==null&&a.length<c;){if(n.nodeType===1){if(n.hasAttributes())for(const l of n.getAttributeNames())if(l.endsWith(dt)){const f=u[o++],g=n.getAttribute(l).split($),N=/([.?@])?(.*)/.exec(f);a.push({type:1,index:r,name:N[2],strings:g,ctor:N[1]==="."?Wt:N[1]==="?"?zt:N[1]==="@"?Lt:L}),n.removeAttribute(l)}else l.startsWith($)&&(a.push({type:6,index:r}),n.removeAttribute(l));if(pt.test(n.tagName)){const l=n.textContent.split($),f=l.length-1;if(f>0){n.textContent=j?j.emptyScript:"";for(let g=0;g<f;g++)n.append(l[g],U()),m.nextNode(),a.push({type:2,index:++r});n.append(l[f],U())}}}else if(n.nodeType===8)if(n.data===ut)a.push({type:2,index:r});else{let l=-1;for(;(l=n.data.indexOf($,l+1))!==-1;)a.push({type:7,index:r}),l+=$.length-1}r++}}static createElement(t,e){const s=A.createElement("template");return s.innerHTML=t,s}}function C(i,t,e=i,s){if(t===v)return t;let n=s!==void 0?e.o?.[s]:e.l;const r=P(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),r===void 0?n=void 0:(n=new r(i),n._$AT(i,e,s)),s!==void 0?(e.o??=[])[s]=n:e.l=n),n!==void 0&&(t=C(i,n._$AS(i,t.values),n,s)),t}class jt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,n=(t?.creationScope??A).importNode(e,!0);m.currentNode=n;let r=m.nextNode(),o=0,c=0,a=s[0];for(;a!==void 0;){if(o===a.index){let h;a.type===2?h=new O(r,r.nextSibling,this,t):a.type===1?h=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(h=new Dt(r,this,t)),this._$AV.push(h),a=s[++c]}o!==a?.index&&(r=m.nextNode(),o++)}return m.currentNode=A,n}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class O{get _$AU(){return this._$AM?._$AU??this.v}constructor(t,e,s,n){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=n,this.v=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=C(this,t,e),P(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==v&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ht(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,n=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=T.createElement(gt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===n)this._$AH.p(e);else{const r=new jt(n,this),o=r.u(this.options);r.p(e),this.T(o),this._$AH=r}}_$AC(t){let e=ct.get(t.strings);return e===void 0&&ct.set(t.strings,e=new T(t)),e}k(t){G(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,n=0;for(const r of t)n===e.length?e.push(s=new O(this.O(U()),this.O(U()),this,this.options)):s=e[n],s._$AI(r),n++;n<e.length&&(this._$AR(s&&s._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){this._$AM===void 0&&(this.v=t,this._$AP?.(t))}}class L{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,n,r){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(t,e=this,s,n){const r=this.strings;let o=!1;if(r===void 0)t=C(this,t,e,0),o=!P(t)||t!==this._$AH&&t!==v,o&&(this._$AH=t);else{const c=t;let a,h;for(t=r[0],a=0;a<r.length-1;a++)h=C(this,c[s+a],e,a),h===v&&(h=this._$AH[a]),o||=!P(h)||h!==this._$AH[a],h===d?t=d:t!==d&&(t+=(h??"")+r[a+1]),this._$AH[a]=h}o&&!n&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Wt extends L{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class zt extends L{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Lt extends L{constructor(t,e,s,n,r){super(t,e,s,n,r),this.type=5}_$AI(t,e=this){if((t=C(this,t,e,0)??d)===v)return;const s=this._$AH,n=t===d&&s!==d||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==d&&(s===d||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Dt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}}const Bt=F.litHtmlPolyfillSupport;Bt?.(T,O),(F.litHtmlVersions??=[]).push("3.2.0");const Vt=(i,t,e)=>{const s=e?.renderBefore??t;let n=s._$litPart$;if(n===void 0){const r=e?.renderBefore??null;s._$litPart$=n=new O(t.insertBefore(U(),r),r,void 0,e??{})}return n._$AI(i),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class w extends S{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=Vt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return v}}w._$litElement$=!0,w.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:w});const qt=globalThis.litElementPolyfillSupport;qt?.({LitElement:w});(globalThis.litElementVersions??=[]).push("4.1.0");const Kt=Ct`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var Yt=function(i,t,e,s){var n=arguments.length,r=n<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,s);else for(var c=i.length-1;c>=0;c--)(o=i[c])&&(r=(n<3?o(r):n>3?o(t,e,r):o(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r};let B=class extends w{constructor(){super(...arguments),this.dappImageUrl=V.state.metadata?.icons,this.walletImageUrl=y.state.connectedWalletInfo?.icon}firstUpdated(){const t=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");t?.[0]&&this.createAnimation(t[0],"translate(18px)"),t?.[1]&&this.createAnimation(t[1],"translate(-18px)")}render(){return ft`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(t,e){t.animate([{transform:"translateX(0px)"},{transform:e}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};B.styles=Kt;B=Yt([lt("w3m-connecting-siwe")],B);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ft={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:Y},Gt=(i=Ft,t,e)=>{const{kind:s,metadata:n}=e;let r=globalThis.litPropertyMetadata.get(n);if(r===void 0&&globalThis.litPropertyMetadata.set(n,r=new Map),r.set(e.name,i),s==="accessor"){const{name:o}=e;return{set(c){const a=t.get.call(this);t.set.call(this,c),this.requestUpdate(o,a,i)},init(c){return c!==void 0&&this.P(o,void 0,i),c}}}if(s==="setter"){const{name:o}=e;return function(c){const a=this[o];t.call(this,c),this.requestUpdate(o,a,i)}}throw Error("Unsupported decorator location: "+s)};function Jt(i){return(t,e)=>typeof e=="object"?Gt(i,t,e):((s,n,r)=>{const o=n.hasOwnProperty(r);return n.constructor.createProperty(r,o?{...s,wrapped:!0}:s),o?Object.getOwnPropertyDescriptor(n,r):void 0})(i,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $t(i){return Jt({...i,state:!0,attribute:!1})}var J=function(i,t,e,s){var n=arguments.length,r=n<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,s);else for(var c=i.length-1;c>=0;c--)(o=i[c])&&(r=(n<3?o(r):n>3?o(t,e,r):o(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r};let W=class extends w{constructor(){super(...arguments),this.dappName=V.state.metadata?.name,this.isSigning=!1,this.isCancelling=!1}render(){return this.onRender(),ft`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}onRender(){b.state.session&&Z.close()}async onSign(){this.isSigning=!0,R.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track",properties:{network:M.state.caipNetwork?.id||"",isSmartAccount:y.state.preferredAccountType===H.ACCOUNT_TYPES.SMART_ACCOUNT}});try{b.setStatus("loading");const t=await b.signIn();return b.setStatus("success"),R.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track",properties:{network:M.state.caipNetwork?.id||"",isSmartAccount:y.state.preferredAccountType===H.ACCOUNT_TYPES.SMART_ACCOUNT}}),t}catch{const s=y.state.preferredAccountType===H.ACCOUNT_TYPES.SMART_ACCOUNT;return s?Q.showError("This application might not support Smart Accounts"):Q.showError("Signature declined"),b.setStatus("error"),R.sendEvent({event:"SIWE_AUTH_ERROR",type:"track",properties:{network:M.state.caipNetwork?.id||"",isSmartAccount:s}})}finally{this.isSigning=!1}}async onCancel(){this.isCancelling=!0,y.state.isConnected?(await St.disconnect(),Z.close()):wt.push("Connect"),this.isCancelling=!1,R.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track",properties:{network:M.state.caipNetwork?.id||"",isSmartAccount:y.state.preferredAccountType===H.ACCOUNT_TYPES.SMART_ACCOUNT}})}};J([$t()],W.prototype,"isSigning",void 0);J([$t()],W.prototype,"isCancelling",void 0);W=J([lt("w3m-connecting-siwe-view")],W);export{b as SIWEController,B as W3mConnectingSiwe,W as W3mConnectingSiweView,ie as formatMessage,ne as getDidAddress,re as getDidChainId};