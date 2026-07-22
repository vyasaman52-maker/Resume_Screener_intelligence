(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function fc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Zs={exports:{}},ol={},qs={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nr=Symbol.for("react.element"),hc=Symbol.for("react.portal"),mc=Symbol.for("react.fragment"),gc=Symbol.for("react.strict_mode"),xc=Symbol.for("react.profiler"),yc=Symbol.for("react.provider"),vc=Symbol.for("react.context"),kc=Symbol.for("react.forward_ref"),wc=Symbol.for("react.suspense"),jc=Symbol.for("react.memo"),Sc=Symbol.for("react.lazy"),$o=Symbol.iterator;function Nc(e){return e===null||typeof e!="object"?null:(e=$o&&e[$o]||e["@@iterator"],typeof e=="function"?e:null)}var ea={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ta=Object.assign,na={};function pn(e,t,n){this.props=e,this.context=t,this.refs=na,this.updater=n||ea}pn.prototype.isReactComponent={};pn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};pn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ra(){}ra.prototype=pn.prototype;function Qi(e,t,n){this.props=e,this.context=t,this.refs=na,this.updater=n||ea}var Hi=Qi.prototype=new ra;Hi.constructor=Qi;ta(Hi,pn.prototype);Hi.isPureReactComponent=!0;var Uo=Array.isArray,la=Object.prototype.hasOwnProperty,Ki={current:null},ia={key:!0,ref:!0,__self:!0,__source:!0};function oa(e,t,n){var r,l={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)la.call(t,r)&&!ia.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var u=Array(a),p=0;p<a;p++)u[p]=arguments[p+2];l.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:nr,type:e,key:i,ref:s,props:l,_owner:Ki.current}}function Fc(e,t){return{$$typeof:nr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Gi(e){return typeof e=="object"&&e!==null&&e.$$typeof===nr}function bc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Wo=/\/+/g;function Nl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?bc(""+e.key):t.toString(36)}function Nr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case nr:case hc:s=!0}}if(s)return s=e,l=l(s),e=r===""?"."+Nl(s,0):r,Uo(l)?(n="",e!=null&&(n=e.replace(Wo,"$&/")+"/"),Nr(l,t,n,"",function(p){return p})):l!=null&&(Gi(l)&&(l=Fc(l,n+(!l.key||s&&s.key===l.key?"":(""+l.key).replace(Wo,"$&/")+"/")+e)),t.push(l)),1;if(s=0,r=r===""?".":r+":",Uo(e))for(var a=0;a<e.length;a++){i=e[a];var u=r+Nl(i,a);s+=Nr(i,t,n,u,l)}else if(u=Nc(e),typeof u=="function")for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=r+Nl(i,a++),s+=Nr(i,t,n,u,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function sr(e,t,n){if(e==null)return e;var r=[],l=0;return Nr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function Ec(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},Fr={transition:null},Cc={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:Fr,ReactCurrentOwner:Ki};function sa(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:sr,forEach:function(e,t,n){sr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return sr(e,function(){t++}),t},toArray:function(e){return sr(e,function(t){return t})||[]},only:function(e){if(!Gi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=pn;L.Fragment=mc;L.Profiler=xc;L.PureComponent=Qi;L.StrictMode=gc;L.Suspense=wc;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cc;L.act=sa;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ta({},e.props),l=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=Ki.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)la.call(t,u)&&!ia.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var p=0;p<u;p++)a[p]=arguments[p+2];r.children=a}return{$$typeof:nr,type:e.type,key:l,ref:i,props:r,_owner:s}};L.createContext=function(e){return e={$$typeof:vc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:yc,_context:e},e.Consumer=e};L.createElement=oa;L.createFactory=function(e){var t=oa.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:kc,render:e}};L.isValidElement=Gi;L.lazy=function(e){return{$$typeof:Sc,_payload:{_status:-1,_result:e},_init:Ec}};L.memo=function(e,t){return{$$typeof:jc,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Fr.transition;Fr.transition={};try{e()}finally{Fr.transition=t}};L.unstable_act=sa;L.useCallback=function(e,t){return de.current.useCallback(e,t)};L.useContext=function(e){return de.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return de.current.useDeferredValue(e)};L.useEffect=function(e,t){return de.current.useEffect(e,t)};L.useId=function(){return de.current.useId()};L.useImperativeHandle=function(e,t,n){return de.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return de.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return de.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return de.current.useMemo(e,t)};L.useReducer=function(e,t,n){return de.current.useReducer(e,t,n)};L.useRef=function(e){return de.current.useRef(e)};L.useState=function(e){return de.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return de.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return de.current.useTransition()};L.version="18.3.1";qs.exports=L;var E=qs.exports;const Jl=fc(E);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zc=E,Dc=Symbol.for("react.element"),_c=Symbol.for("react.fragment"),Ac=Object.prototype.hasOwnProperty,Pc=zc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lc={key:!0,ref:!0,__self:!0,__source:!0};function aa(e,t,n){var r,l={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Ac.call(t,r)&&!Lc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Dc,type:e,key:i,ref:s,props:l,_owner:Pc.current}}ol.Fragment=_c;ol.jsx=aa;ol.jsxs=aa;Zs.exports=ol;var o=Zs.exports,Zl={},ua={exports:{}},Se={},ca={exports:{}},da={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,_){var A=N.length;N.push(_);e:for(;0<A;){var W=A-1>>>1,G=N[W];if(0<l(G,_))N[W]=_,N[A]=G,A=W;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var _=N[0],A=N.pop();if(A!==_){N[0]=A;e:for(var W=0,G=N.length,jt=G>>>1;W<jt;){var Oe=2*(W+1)-1,It=N[Oe],D=Oe+1,T=N[D];if(0>l(It,A))D<G&&0>l(T,It)?(N[W]=T,N[D]=A,W=D):(N[W]=It,N[Oe]=A,W=Oe);else if(D<G&&0>l(T,A))N[W]=T,N[D]=A,W=D;else break e}}return _}function l(N,_){var A=N.sortIndex-_.sortIndex;return A!==0?A:N.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var u=[],p=[],g=1,h=null,m=3,y=!1,w=!1,k=!1,j=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(N){for(var _=n(p);_!==null;){if(_.callback===null)r(p);else if(_.startTime<=N)r(p),_.sortIndex=_.expirationTime,t(u,_);else break;_=n(p)}}function x(N){if(k=!1,f(N),!w)if(n(u)!==null)w=!0,gn(S);else{var _=n(p);_!==null&&xn(x,_.startTime-N)}}function S(N,_){w=!1,k&&(k=!1,d(z),z=-1),y=!0;var A=m;try{for(f(_),h=n(u);h!==null&&(!(h.expirationTime>_)||N&&!fe());){var W=h.callback;if(typeof W=="function"){h.callback=null,m=h.priorityLevel;var G=W(h.expirationTime<=_);_=e.unstable_now(),typeof G=="function"?h.callback=G:h===n(u)&&r(u),f(_)}else r(u);h=n(u)}if(h!==null)var jt=!0;else{var Oe=n(p);Oe!==null&&xn(x,Oe.startTime-_),jt=!1}return jt}finally{h=null,m=A,y=!1}}var b=!1,C=null,z=-1,$=5,P=-1;function fe(){return!(e.unstable_now()-P<$)}function Ie(){if(C!==null){var N=e.unstable_now();P=N;var _=!0;try{_=C(!0,N)}finally{_?tt():(b=!1,C=null)}}else b=!1}var tt;if(typeof c=="function")tt=function(){c(Ie)};else if(typeof MessageChannel<"u"){var mn=new MessageChannel,jl=mn.port2;mn.port1.onmessage=Ie,tt=function(){jl.postMessage(null)}}else tt=function(){j(Ie,0)};function gn(N){C=N,b||(b=!0,tt())}function xn(N,_){z=j(function(){N(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,gn(S))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(N){switch(m){case 1:case 2:case 3:var _=3;break;default:_=m}var A=m;m=_;try{return N()}finally{m=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,_){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var A=m;m=N;try{return _()}finally{m=A}},e.unstable_scheduleCallback=function(N,_,A){var W=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?W+A:W):A=W,N){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=A+G,N={id:g++,callback:_,priorityLevel:N,startTime:A,expirationTime:G,sortIndex:-1},A>W?(N.sortIndex=A,t(p,N),n(u)===null&&N===n(p)&&(k?(d(z),z=-1):k=!0,xn(x,A-W))):(N.sortIndex=G,t(u,N),w||y||(w=!0,gn(S))),N},e.unstable_shouldYield=fe,e.unstable_wrapCallback=function(N){var _=m;return function(){var A=m;m=_;try{return N.apply(this,arguments)}finally{m=A}}}})(da);ca.exports=da;var Tc=ca.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rc=E,je=Tc;function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pa=new Set,On={};function Rt(e,t){ln(e,t),ln(e+"Capture",t)}function ln(e,t){for(On[e]=t,e=0;e<t.length;e++)pa.add(t[e])}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ql=Object.prototype.hasOwnProperty,Mc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vo={},Qo={};function Ic(e){return ql.call(Qo,e)?!0:ql.call(Vo,e)?!1:Mc.test(e)?Qo[e]=!0:(Vo[e]=!0,!1)}function Oc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Bc(e,t,n,r){if(t===null||typeof t>"u"||Oc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pe(e,t,n,r,l,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Yi=/[\-:]([a-z])/g;function Xi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Yi,Xi);re[t]=new pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Yi,Xi);re[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Yi,Xi);re[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ji(e,t,n,r){var l=re.hasOwnProperty(t)?re[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Bc(t,n,l,r)&&(n=null),r||l===null?Ic(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var et=Rc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ar=Symbol.for("react.element"),Bt=Symbol.for("react.portal"),$t=Symbol.for("react.fragment"),Zi=Symbol.for("react.strict_mode"),ei=Symbol.for("react.profiler"),fa=Symbol.for("react.provider"),ha=Symbol.for("react.context"),qi=Symbol.for("react.forward_ref"),ti=Symbol.for("react.suspense"),ni=Symbol.for("react.suspense_list"),eo=Symbol.for("react.memo"),rt=Symbol.for("react.lazy"),ma=Symbol.for("react.offscreen"),Ho=Symbol.iterator;function yn(e){return e===null||typeof e!="object"?null:(e=Ho&&e[Ho]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,Fl;function bn(e){if(Fl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Fl=t&&t[1]||""}return`
`+Fl+e}var bl=!1;function El(e,t){if(!e||bl)return"";bl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var r=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){r=p}e.call(t.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var l=p.stack.split(`
`),i=r.stack.split(`
`),s=l.length-1,a=i.length-1;1<=s&&0<=a&&l[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(l[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||l[s]!==i[a]){var u=`
`+l[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=a);break}}}finally{bl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?bn(e):""}function $c(e){switch(e.tag){case 5:return bn(e.type);case 16:return bn("Lazy");case 13:return bn("Suspense");case 19:return bn("SuspenseList");case 0:case 2:case 15:return e=El(e.type,!1),e;case 11:return e=El(e.type.render,!1),e;case 1:return e=El(e.type,!0),e;default:return""}}function ri(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $t:return"Fragment";case Bt:return"Portal";case ei:return"Profiler";case Zi:return"StrictMode";case ti:return"Suspense";case ni:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ha:return(e.displayName||"Context")+".Consumer";case fa:return(e._context.displayName||"Context")+".Provider";case qi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case eo:return t=e.displayName||null,t!==null?t:ri(e.type)||"Memo";case rt:t=e._payload,e=e._init;try{return ri(e(t))}catch{}}return null}function Uc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ri(t);case 8:return t===Zi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function xt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ga(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Wc(e){var t=ga(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ur(e){e._valueTracker||(e._valueTracker=Wc(e))}function xa(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ga(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Rr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function li(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ko(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=xt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ya(e,t){t=t.checked,t!=null&&Ji(e,"checked",t,!1)}function ii(e,t){ya(e,t);var n=xt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?oi(e,t.type,n):t.hasOwnProperty("defaultValue")&&oi(e,t.type,xt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Go(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function oi(e,t,n){(t!=="number"||Rr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var En=Array.isArray;function Zt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+xt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function si(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(v(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Yo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(v(92));if(En(n)){if(1<n.length)throw Error(v(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:xt(n)}}function va(e,t){var n=xt(t.value),r=xt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Xo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ka(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ai(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ka(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var cr,wa=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(cr=cr||document.createElement("div"),cr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=cr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Bn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Dn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vc=["Webkit","ms","Moz","O"];Object.keys(Dn).forEach(function(e){Vc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Dn[t]=Dn[e]})});function ja(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Dn.hasOwnProperty(e)&&Dn[e]?(""+t).trim():t+"px"}function Sa(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=ja(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Qc=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ui(e,t){if(t){if(Qc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(v(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(v(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(v(61))}if(t.style!=null&&typeof t.style!="object")throw Error(v(62))}}function ci(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var di=null;function to(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pi=null,qt=null,en=null;function Jo(e){if(e=ir(e)){if(typeof pi!="function")throw Error(v(280));var t=e.stateNode;t&&(t=dl(t),pi(e.stateNode,e.type,t))}}function Na(e){qt?en?en.push(e):en=[e]:qt=e}function Fa(){if(qt){var e=qt,t=en;if(en=qt=null,Jo(e),t)for(e=0;e<t.length;e++)Jo(t[e])}}function ba(e,t){return e(t)}function Ea(){}var Cl=!1;function Ca(e,t,n){if(Cl)return e(t,n);Cl=!0;try{return ba(e,t,n)}finally{Cl=!1,(qt!==null||en!==null)&&(Ea(),Fa())}}function $n(e,t){var n=e.stateNode;if(n===null)return null;var r=dl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(v(231,t,typeof n));return n}var fi=!1;if(Xe)try{var vn={};Object.defineProperty(vn,"passive",{get:function(){fi=!0}}),window.addEventListener("test",vn,vn),window.removeEventListener("test",vn,vn)}catch{fi=!1}function Hc(e,t,n,r,l,i,s,a,u){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(g){this.onError(g)}}var _n=!1,Mr=null,Ir=!1,hi=null,Kc={onError:function(e){_n=!0,Mr=e}};function Gc(e,t,n,r,l,i,s,a,u){_n=!1,Mr=null,Hc.apply(Kc,arguments)}function Yc(e,t,n,r,l,i,s,a,u){if(Gc.apply(this,arguments),_n){if(_n){var p=Mr;_n=!1,Mr=null}else throw Error(v(198));Ir||(Ir=!0,hi=p)}}function Mt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function za(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zo(e){if(Mt(e)!==e)throw Error(v(188))}function Xc(e){var t=e.alternate;if(!t){if(t=Mt(e),t===null)throw Error(v(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Zo(l),e;if(i===r)return Zo(l),t;i=i.sibling}throw Error(v(188))}if(n.return!==r.return)n=l,r=i;else{for(var s=!1,a=l.child;a;){if(a===n){s=!0,n=l,r=i;break}if(a===r){s=!0,r=l,n=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===n){s=!0,n=i,r=l;break}if(a===r){s=!0,r=i,n=l;break}a=a.sibling}if(!s)throw Error(v(189))}}if(n.alternate!==r)throw Error(v(190))}if(n.tag!==3)throw Error(v(188));return n.stateNode.current===n?e:t}function Da(e){return e=Xc(e),e!==null?_a(e):null}function _a(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=_a(e);if(t!==null)return t;e=e.sibling}return null}var Aa=je.unstable_scheduleCallback,qo=je.unstable_cancelCallback,Jc=je.unstable_shouldYield,Zc=je.unstable_requestPaint,Y=je.unstable_now,qc=je.unstable_getCurrentPriorityLevel,no=je.unstable_ImmediatePriority,Pa=je.unstable_UserBlockingPriority,Or=je.unstable_NormalPriority,ed=je.unstable_LowPriority,La=je.unstable_IdlePriority,sl=null,We=null;function td(e){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(sl,e,void 0,(e.current.flags&128)===128)}catch{}}var Te=Math.clz32?Math.clz32:ld,nd=Math.log,rd=Math.LN2;function ld(e){return e>>>=0,e===0?32:31-(nd(e)/rd|0)|0}var dr=64,pr=4194304;function Cn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Br(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~l;a!==0?r=Cn(a):(i&=s,i!==0&&(r=Cn(i)))}else s=n&~l,s!==0?r=Cn(s):i!==0&&(r=Cn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Te(t),l=1<<n,r|=e[n],t&=~l;return r}function id(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function od(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-Te(i),a=1<<s,u=l[s];u===-1?(!(a&n)||a&r)&&(l[s]=id(a,t)):u<=t&&(e.expiredLanes|=a),i&=~a}}function mi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ta(){var e=dr;return dr<<=1,!(dr&4194240)&&(dr=64),e}function zl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function rr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Te(t),e[t]=n}function sd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Te(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function ro(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Te(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var M=0;function Ra(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ma,lo,Ia,Oa,Ba,gi=!1,fr=[],ut=null,ct=null,dt=null,Un=new Map,Wn=new Map,it=[],ad="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function es(e,t){switch(e){case"focusin":case"focusout":ut=null;break;case"dragenter":case"dragleave":ct=null;break;case"mouseover":case"mouseout":dt=null;break;case"pointerover":case"pointerout":Un.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wn.delete(t.pointerId)}}function kn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=ir(t),t!==null&&lo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function ud(e,t,n,r,l){switch(t){case"focusin":return ut=kn(ut,e,t,n,r,l),!0;case"dragenter":return ct=kn(ct,e,t,n,r,l),!0;case"mouseover":return dt=kn(dt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Un.set(i,kn(Un.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Wn.set(i,kn(Wn.get(i)||null,e,t,n,r,l)),!0}return!1}function $a(e){var t=bt(e.target);if(t!==null){var n=Mt(t);if(n!==null){if(t=n.tag,t===13){if(t=za(n),t!==null){e.blockedOn=t,Ba(e.priority,function(){Ia(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function br(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);di=r,n.target.dispatchEvent(r),di=null}else return t=ir(n),t!==null&&lo(t),e.blockedOn=n,!1;t.shift()}return!0}function ts(e,t,n){br(e)&&n.delete(t)}function cd(){gi=!1,ut!==null&&br(ut)&&(ut=null),ct!==null&&br(ct)&&(ct=null),dt!==null&&br(dt)&&(dt=null),Un.forEach(ts),Wn.forEach(ts)}function wn(e,t){e.blockedOn===t&&(e.blockedOn=null,gi||(gi=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,cd)))}function Vn(e){function t(l){return wn(l,e)}if(0<fr.length){wn(fr[0],e);for(var n=1;n<fr.length;n++){var r=fr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ut!==null&&wn(ut,e),ct!==null&&wn(ct,e),dt!==null&&wn(dt,e),Un.forEach(t),Wn.forEach(t),n=0;n<it.length;n++)r=it[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<it.length&&(n=it[0],n.blockedOn===null);)$a(n),n.blockedOn===null&&it.shift()}var tn=et.ReactCurrentBatchConfig,$r=!0;function dd(e,t,n,r){var l=M,i=tn.transition;tn.transition=null;try{M=1,io(e,t,n,r)}finally{M=l,tn.transition=i}}function pd(e,t,n,r){var l=M,i=tn.transition;tn.transition=null;try{M=4,io(e,t,n,r)}finally{M=l,tn.transition=i}}function io(e,t,n,r){if($r){var l=xi(e,t,n,r);if(l===null)Ol(e,t,r,Ur,n),es(e,r);else if(ud(l,e,t,n,r))r.stopPropagation();else if(es(e,r),t&4&&-1<ad.indexOf(e)){for(;l!==null;){var i=ir(l);if(i!==null&&Ma(i),i=xi(e,t,n,r),i===null&&Ol(e,t,r,Ur,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Ol(e,t,r,null,n)}}var Ur=null;function xi(e,t,n,r){if(Ur=null,e=to(r),e=bt(e),e!==null)if(t=Mt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=za(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ur=e,null}function Ua(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qc()){case no:return 1;case Pa:return 4;case Or:case ed:return 16;case La:return 536870912;default:return 16}default:return 16}}var st=null,oo=null,Er=null;function Wa(){if(Er)return Er;var e,t=oo,n=t.length,r,l="value"in st?st.value:st.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===l[i-r];r++);return Er=l.slice(e,1<r?1-r:void 0)}function Cr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hr(){return!0}function ns(){return!1}function Ne(e){function t(n,r,l,i,s){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?hr:ns,this.isPropagationStopped=ns,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hr)},persist:function(){},isPersistent:hr}),t}var fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},so=Ne(fn),lr=H({},fn,{view:0,detail:0}),fd=Ne(lr),Dl,_l,jn,al=H({},lr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ao,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jn&&(jn&&e.type==="mousemove"?(Dl=e.screenX-jn.screenX,_l=e.screenY-jn.screenY):_l=Dl=0,jn=e),Dl)},movementY:function(e){return"movementY"in e?e.movementY:_l}}),rs=Ne(al),hd=H({},al,{dataTransfer:0}),md=Ne(hd),gd=H({},lr,{relatedTarget:0}),Al=Ne(gd),xd=H({},fn,{animationName:0,elapsedTime:0,pseudoElement:0}),yd=Ne(xd),vd=H({},fn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kd=Ne(vd),wd=H({},fn,{data:0}),ls=Ne(wd),jd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Nd[e])?!!t[e]:!1}function ao(){return Fd}var bd=H({},lr,{key:function(e){if(e.key){var t=jd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Cr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ao,charCode:function(e){return e.type==="keypress"?Cr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ed=Ne(bd),Cd=H({},al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),is=Ne(Cd),zd=H({},lr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ao}),Dd=Ne(zd),_d=H({},fn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ad=Ne(_d),Pd=H({},al,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ld=Ne(Pd),Td=[9,13,27,32],uo=Xe&&"CompositionEvent"in window,An=null;Xe&&"documentMode"in document&&(An=document.documentMode);var Rd=Xe&&"TextEvent"in window&&!An,Va=Xe&&(!uo||An&&8<An&&11>=An),os=" ",ss=!1;function Qa(e,t){switch(e){case"keyup":return Td.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ha(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ut=!1;function Md(e,t){switch(e){case"compositionend":return Ha(t);case"keypress":return t.which!==32?null:(ss=!0,os);case"textInput":return e=t.data,e===os&&ss?null:e;default:return null}}function Id(e,t){if(Ut)return e==="compositionend"||!uo&&Qa(e,t)?(e=Wa(),Er=oo=st=null,Ut=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Va&&t.locale!=="ko"?null:t.data;default:return null}}var Od={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function as(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Od[e.type]:t==="textarea"}function Ka(e,t,n,r){Na(r),t=Wr(t,"onChange"),0<t.length&&(n=new so("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Pn=null,Qn=null;function Bd(e){lu(e,0)}function ul(e){var t=Qt(e);if(xa(t))return e}function $d(e,t){if(e==="change")return t}var Ga=!1;if(Xe){var Pl;if(Xe){var Ll="oninput"in document;if(!Ll){var us=document.createElement("div");us.setAttribute("oninput","return;"),Ll=typeof us.oninput=="function"}Pl=Ll}else Pl=!1;Ga=Pl&&(!document.documentMode||9<document.documentMode)}function cs(){Pn&&(Pn.detachEvent("onpropertychange",Ya),Qn=Pn=null)}function Ya(e){if(e.propertyName==="value"&&ul(Qn)){var t=[];Ka(t,Qn,e,to(e)),Ca(Bd,t)}}function Ud(e,t,n){e==="focusin"?(cs(),Pn=t,Qn=n,Pn.attachEvent("onpropertychange",Ya)):e==="focusout"&&cs()}function Wd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ul(Qn)}function Vd(e,t){if(e==="click")return ul(t)}function Qd(e,t){if(e==="input"||e==="change")return ul(t)}function Hd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Me=typeof Object.is=="function"?Object.is:Hd;function Hn(e,t){if(Me(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!ql.call(t,l)||!Me(e[l],t[l]))return!1}return!0}function ds(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ps(e,t){var n=ds(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ds(n)}}function Xa(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Xa(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ja(){for(var e=window,t=Rr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Rr(e.document)}return t}function co(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Kd(e){var t=Ja(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Xa(n.ownerDocument.documentElement,n)){if(r!==null&&co(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=ps(n,i);var s=ps(n,r);l&&s&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gd=Xe&&"documentMode"in document&&11>=document.documentMode,Wt=null,yi=null,Ln=null,vi=!1;function fs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vi||Wt==null||Wt!==Rr(r)||(r=Wt,"selectionStart"in r&&co(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ln&&Hn(Ln,r)||(Ln=r,r=Wr(yi,"onSelect"),0<r.length&&(t=new so("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Wt)))}function mr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vt={animationend:mr("Animation","AnimationEnd"),animationiteration:mr("Animation","AnimationIteration"),animationstart:mr("Animation","AnimationStart"),transitionend:mr("Transition","TransitionEnd")},Tl={},Za={};Xe&&(Za=document.createElement("div").style,"AnimationEvent"in window||(delete Vt.animationend.animation,delete Vt.animationiteration.animation,delete Vt.animationstart.animation),"TransitionEvent"in window||delete Vt.transitionend.transition);function cl(e){if(Tl[e])return Tl[e];if(!Vt[e])return e;var t=Vt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Za)return Tl[e]=t[n];return e}var qa=cl("animationend"),eu=cl("animationiteration"),tu=cl("animationstart"),nu=cl("transitionend"),ru=new Map,hs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vt(e,t){ru.set(e,t),Rt(t,[e])}for(var Rl=0;Rl<hs.length;Rl++){var Ml=hs[Rl],Yd=Ml.toLowerCase(),Xd=Ml[0].toUpperCase()+Ml.slice(1);vt(Yd,"on"+Xd)}vt(qa,"onAnimationEnd");vt(eu,"onAnimationIteration");vt(tu,"onAnimationStart");vt("dblclick","onDoubleClick");vt("focusin","onFocus");vt("focusout","onBlur");vt(nu,"onTransitionEnd");ln("onMouseEnter",["mouseout","mouseover"]);ln("onMouseLeave",["mouseout","mouseover"]);ln("onPointerEnter",["pointerout","pointerover"]);ln("onPointerLeave",["pointerout","pointerover"]);Rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jd=new Set("cancel close invalid load scroll toggle".split(" ").concat(zn));function ms(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Yc(r,t,void 0,e),e.currentTarget=null}function lu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],u=a.instance,p=a.currentTarget;if(a=a.listener,u!==i&&l.isPropagationStopped())break e;ms(l,a,p),i=u}else for(s=0;s<r.length;s++){if(a=r[s],u=a.instance,p=a.currentTarget,a=a.listener,u!==i&&l.isPropagationStopped())break e;ms(l,a,p),i=u}}}if(Ir)throw e=hi,Ir=!1,hi=null,e}function O(e,t){var n=t[Ni];n===void 0&&(n=t[Ni]=new Set);var r=e+"__bubble";n.has(r)||(iu(t,e,2,!1),n.add(r))}function Il(e,t,n){var r=0;t&&(r|=4),iu(n,e,r,t)}var gr="_reactListening"+Math.random().toString(36).slice(2);function Kn(e){if(!e[gr]){e[gr]=!0,pa.forEach(function(n){n!=="selectionchange"&&(Jd.has(n)||Il(n,!1,e),Il(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[gr]||(t[gr]=!0,Il("selectionchange",!1,t))}}function iu(e,t,n,r){switch(Ua(t)){case 1:var l=dd;break;case 4:l=pd;break;default:l=io}n=l.bind(null,t,n,e),l=void 0,!fi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ol(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;s=s.return}for(;a!==null;){if(s=bt(a),s===null)return;if(u=s.tag,u===5||u===6){r=i=s;continue e}a=a.parentNode}}r=r.return}Ca(function(){var p=i,g=to(n),h=[];e:{var m=ru.get(e);if(m!==void 0){var y=so,w=e;switch(e){case"keypress":if(Cr(n)===0)break e;case"keydown":case"keyup":y=Ed;break;case"focusin":w="focus",y=Al;break;case"focusout":w="blur",y=Al;break;case"beforeblur":case"afterblur":y=Al;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=rs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=md;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Dd;break;case qa:case eu:case tu:y=yd;break;case nu:y=Ad;break;case"scroll":y=fd;break;case"wheel":y=Ld;break;case"copy":case"cut":case"paste":y=kd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=is}var k=(t&4)!==0,j=!k&&e==="scroll",d=k?m!==null?m+"Capture":null:m;k=[];for(var c=p,f;c!==null;){f=c;var x=f.stateNode;if(f.tag===5&&x!==null&&(f=x,d!==null&&(x=$n(c,d),x!=null&&k.push(Gn(c,x,f)))),j)break;c=c.return}0<k.length&&(m=new y(m,w,null,n,g),h.push({event:m,listeners:k}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&n!==di&&(w=n.relatedTarget||n.fromElement)&&(bt(w)||w[Je]))break e;if((y||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=p,w=w?bt(w):null,w!==null&&(j=Mt(w),w!==j||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=p),y!==w)){if(k=rs,x="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(k=is,x="onPointerLeave",d="onPointerEnter",c="pointer"),j=y==null?m:Qt(y),f=w==null?m:Qt(w),m=new k(x,c+"leave",y,n,g),m.target=j,m.relatedTarget=f,x=null,bt(g)===p&&(k=new k(d,c+"enter",w,n,g),k.target=f,k.relatedTarget=j,x=k),j=x,y&&w)t:{for(k=y,d=w,c=0,f=k;f;f=Ot(f))c++;for(f=0,x=d;x;x=Ot(x))f++;for(;0<c-f;)k=Ot(k),c--;for(;0<f-c;)d=Ot(d),f--;for(;c--;){if(k===d||d!==null&&k===d.alternate)break t;k=Ot(k),d=Ot(d)}k=null}else k=null;y!==null&&gs(h,m,y,k,!1),w!==null&&j!==null&&gs(h,j,w,k,!0)}}e:{if(m=p?Qt(p):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var S=$d;else if(as(m))if(Ga)S=Qd;else{S=Wd;var b=Ud}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=Vd);if(S&&(S=S(e,p))){Ka(h,S,n,g);break e}b&&b(e,m,p),e==="focusout"&&(b=m._wrapperState)&&b.controlled&&m.type==="number"&&oi(m,"number",m.value)}switch(b=p?Qt(p):window,e){case"focusin":(as(b)||b.contentEditable==="true")&&(Wt=b,yi=p,Ln=null);break;case"focusout":Ln=yi=Wt=null;break;case"mousedown":vi=!0;break;case"contextmenu":case"mouseup":case"dragend":vi=!1,fs(h,n,g);break;case"selectionchange":if(Gd)break;case"keydown":case"keyup":fs(h,n,g)}var C;if(uo)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Ut?Qa(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Va&&n.locale!=="ko"&&(Ut||z!=="onCompositionStart"?z==="onCompositionEnd"&&Ut&&(C=Wa()):(st=g,oo="value"in st?st.value:st.textContent,Ut=!0)),b=Wr(p,z),0<b.length&&(z=new ls(z,e,null,n,g),h.push({event:z,listeners:b}),C?z.data=C:(C=Ha(n),C!==null&&(z.data=C)))),(C=Rd?Md(e,n):Id(e,n))&&(p=Wr(p,"onBeforeInput"),0<p.length&&(g=new ls("onBeforeInput","beforeinput",null,n,g),h.push({event:g,listeners:p}),g.data=C))}lu(h,t)})}function Gn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=$n(e,n),i!=null&&r.unshift(Gn(e,i,l)),i=$n(e,t),i!=null&&r.push(Gn(e,i,l))),e=e.return}return r}function Ot(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function gs(e,t,n,r,l){for(var i=t._reactName,s=[];n!==null&&n!==r;){var a=n,u=a.alternate,p=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&p!==null&&(a=p,l?(u=$n(n,i),u!=null&&s.unshift(Gn(n,u,a))):l||(u=$n(n,i),u!=null&&s.push(Gn(n,u,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Zd=/\r\n?/g,qd=/\u0000|\uFFFD/g;function xs(e){return(typeof e=="string"?e:""+e).replace(Zd,`
`).replace(qd,"")}function xr(e,t,n){if(t=xs(t),xs(e)!==t&&n)throw Error(v(425))}function Vr(){}var ki=null,wi=null;function ji(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Si=typeof setTimeout=="function"?setTimeout:void 0,ep=typeof clearTimeout=="function"?clearTimeout:void 0,ys=typeof Promise=="function"?Promise:void 0,tp=typeof queueMicrotask=="function"?queueMicrotask:typeof ys<"u"?function(e){return ys.resolve(null).then(e).catch(np)}:Si;function np(e){setTimeout(function(){throw e})}function Bl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Vn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Vn(t)}function pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function vs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var hn=Math.random().toString(36).slice(2),Ue="__reactFiber$"+hn,Yn="__reactProps$"+hn,Je="__reactContainer$"+hn,Ni="__reactEvents$"+hn,rp="__reactListeners$"+hn,lp="__reactHandles$"+hn;function bt(e){var t=e[Ue];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Je]||n[Ue]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=vs(e);e!==null;){if(n=e[Ue])return n;e=vs(e)}return t}e=n,n=e.parentNode}return null}function ir(e){return e=e[Ue]||e[Je],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(v(33))}function dl(e){return e[Yn]||null}var Fi=[],Ht=-1;function kt(e){return{current:e}}function B(e){0>Ht||(e.current=Fi[Ht],Fi[Ht]=null,Ht--)}function I(e,t){Ht++,Fi[Ht]=e.current,e.current=t}var yt={},se=kt(yt),ge=kt(!1),_t=yt;function on(e,t){var n=e.type.contextTypes;if(!n)return yt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function xe(e){return e=e.childContextTypes,e!=null}function Qr(){B(ge),B(se)}function ks(e,t,n){if(se.current!==yt)throw Error(v(168));I(se,t),I(ge,n)}function ou(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(v(108,Uc(e)||"Unknown",l));return H({},n,r)}function Hr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yt,_t=se.current,I(se,e),I(ge,ge.current),!0}function ws(e,t,n){var r=e.stateNode;if(!r)throw Error(v(169));n?(e=ou(e,t,_t),r.__reactInternalMemoizedMergedChildContext=e,B(ge),B(se),I(se,e)):B(ge),I(ge,n)}var He=null,pl=!1,$l=!1;function su(e){He===null?He=[e]:He.push(e)}function ip(e){pl=!0,su(e)}function wt(){if(!$l&&He!==null){$l=!0;var e=0,t=M;try{var n=He;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}He=null,pl=!1}catch(l){throw He!==null&&(He=He.slice(e+1)),Aa(no,wt),l}finally{M=t,$l=!1}}return null}var Kt=[],Gt=0,Kr=null,Gr=0,Fe=[],be=0,At=null,Ke=1,Ge="";function Nt(e,t){Kt[Gt++]=Gr,Kt[Gt++]=Kr,Kr=e,Gr=t}function au(e,t,n){Fe[be++]=Ke,Fe[be++]=Ge,Fe[be++]=At,At=e;var r=Ke;e=Ge;var l=32-Te(r)-1;r&=~(1<<l),n+=1;var i=32-Te(t)+l;if(30<i){var s=l-l%5;i=(r&(1<<s)-1).toString(32),r>>=s,l-=s,Ke=1<<32-Te(t)+l|n<<l|r,Ge=i+e}else Ke=1<<i|n<<l|r,Ge=e}function po(e){e.return!==null&&(Nt(e,1),au(e,1,0))}function fo(e){for(;e===Kr;)Kr=Kt[--Gt],Kt[Gt]=null,Gr=Kt[--Gt],Kt[Gt]=null;for(;e===At;)At=Fe[--be],Fe[be]=null,Ge=Fe[--be],Fe[be]=null,Ke=Fe[--be],Fe[be]=null}var we=null,ke=null,U=!1,Le=null;function uu(e,t){var n=Ee(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function js(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,we=e,ke=pt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,we=e,ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=At!==null?{id:Ke,overflow:Ge}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ee(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,we=e,ke=null,!0):!1;default:return!1}}function bi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ei(e){if(U){var t=ke;if(t){var n=t;if(!js(e,t)){if(bi(e))throw Error(v(418));t=pt(n.nextSibling);var r=we;t&&js(e,t)?uu(r,n):(e.flags=e.flags&-4097|2,U=!1,we=e)}}else{if(bi(e))throw Error(v(418));e.flags=e.flags&-4097|2,U=!1,we=e}}}function Ss(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;we=e}function yr(e){if(e!==we)return!1;if(!U)return Ss(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ji(e.type,e.memoizedProps)),t&&(t=ke)){if(bi(e))throw cu(),Error(v(418));for(;t;)uu(e,t),t=pt(t.nextSibling)}if(Ss(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ke=pt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ke=null}}else ke=we?pt(e.stateNode.nextSibling):null;return!0}function cu(){for(var e=ke;e;)e=pt(e.nextSibling)}function sn(){ke=we=null,U=!1}function ho(e){Le===null?Le=[e]:Le.push(e)}var op=et.ReactCurrentBatchConfig;function Sn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(v(309));var r=n.stateNode}if(!r)throw Error(v(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var a=l.refs;s===null?delete a[i]:a[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(v(284));if(!n._owner)throw Error(v(290,e))}return e}function vr(e,t){throw e=Object.prototype.toString.call(t),Error(v(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ns(e){var t=e._init;return t(e._payload)}function du(e){function t(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function l(d,c){return d=gt(d,c),d.index=0,d.sibling=null,d}function i(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=2,c):f):(d.flags|=2,c)):(d.flags|=1048576,c)}function s(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,c,f,x){return c===null||c.tag!==6?(c=Gl(f,d.mode,x),c.return=d,c):(c=l(c,f),c.return=d,c)}function u(d,c,f,x){var S=f.type;return S===$t?g(d,c,f.props.children,x,f.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===rt&&Ns(S)===c.type)?(x=l(c,f.props),x.ref=Sn(d,c,f),x.return=d,x):(x=Tr(f.type,f.key,f.props,null,d.mode,x),x.ref=Sn(d,c,f),x.return=d,x)}function p(d,c,f,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=Yl(f,d.mode,x),c.return=d,c):(c=l(c,f.children||[]),c.return=d,c)}function g(d,c,f,x,S){return c===null||c.tag!==7?(c=Dt(f,d.mode,x,S),c.return=d,c):(c=l(c,f),c.return=d,c)}function h(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Gl(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ar:return f=Tr(c.type,c.key,c.props,null,d.mode,f),f.ref=Sn(d,null,c),f.return=d,f;case Bt:return c=Yl(c,d.mode,f),c.return=d,c;case rt:var x=c._init;return h(d,x(c._payload),f)}if(En(c)||yn(c))return c=Dt(c,d.mode,f,null),c.return=d,c;vr(d,c)}return null}function m(d,c,f,x){var S=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return S!==null?null:a(d,c,""+f,x);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ar:return f.key===S?u(d,c,f,x):null;case Bt:return f.key===S?p(d,c,f,x):null;case rt:return S=f._init,m(d,c,S(f._payload),x)}if(En(f)||yn(f))return S!==null?null:g(d,c,f,x,null);vr(d,f)}return null}function y(d,c,f,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return d=d.get(f)||null,a(c,d,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ar:return d=d.get(x.key===null?f:x.key)||null,u(c,d,x,S);case Bt:return d=d.get(x.key===null?f:x.key)||null,p(c,d,x,S);case rt:var b=x._init;return y(d,c,f,b(x._payload),S)}if(En(x)||yn(x))return d=d.get(f)||null,g(c,d,x,S,null);vr(c,x)}return null}function w(d,c,f,x){for(var S=null,b=null,C=c,z=c=0,$=null;C!==null&&z<f.length;z++){C.index>z?($=C,C=null):$=C.sibling;var P=m(d,C,f[z],x);if(P===null){C===null&&(C=$);break}e&&C&&P.alternate===null&&t(d,C),c=i(P,c,z),b===null?S=P:b.sibling=P,b=P,C=$}if(z===f.length)return n(d,C),U&&Nt(d,z),S;if(C===null){for(;z<f.length;z++)C=h(d,f[z],x),C!==null&&(c=i(C,c,z),b===null?S=C:b.sibling=C,b=C);return U&&Nt(d,z),S}for(C=r(d,C);z<f.length;z++)$=y(C,d,z,f[z],x),$!==null&&(e&&$.alternate!==null&&C.delete($.key===null?z:$.key),c=i($,c,z),b===null?S=$:b.sibling=$,b=$);return e&&C.forEach(function(fe){return t(d,fe)}),U&&Nt(d,z),S}function k(d,c,f,x){var S=yn(f);if(typeof S!="function")throw Error(v(150));if(f=S.call(f),f==null)throw Error(v(151));for(var b=S=null,C=c,z=c=0,$=null,P=f.next();C!==null&&!P.done;z++,P=f.next()){C.index>z?($=C,C=null):$=C.sibling;var fe=m(d,C,P.value,x);if(fe===null){C===null&&(C=$);break}e&&C&&fe.alternate===null&&t(d,C),c=i(fe,c,z),b===null?S=fe:b.sibling=fe,b=fe,C=$}if(P.done)return n(d,C),U&&Nt(d,z),S;if(C===null){for(;!P.done;z++,P=f.next())P=h(d,P.value,x),P!==null&&(c=i(P,c,z),b===null?S=P:b.sibling=P,b=P);return U&&Nt(d,z),S}for(C=r(d,C);!P.done;z++,P=f.next())P=y(C,d,z,P.value,x),P!==null&&(e&&P.alternate!==null&&C.delete(P.key===null?z:P.key),c=i(P,c,z),b===null?S=P:b.sibling=P,b=P);return e&&C.forEach(function(Ie){return t(d,Ie)}),U&&Nt(d,z),S}function j(d,c,f,x){if(typeof f=="object"&&f!==null&&f.type===$t&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case ar:e:{for(var S=f.key,b=c;b!==null;){if(b.key===S){if(S=f.type,S===$t){if(b.tag===7){n(d,b.sibling),c=l(b,f.props.children),c.return=d,d=c;break e}}else if(b.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===rt&&Ns(S)===b.type){n(d,b.sibling),c=l(b,f.props),c.ref=Sn(d,b,f),c.return=d,d=c;break e}n(d,b);break}else t(d,b);b=b.sibling}f.type===$t?(c=Dt(f.props.children,d.mode,x,f.key),c.return=d,d=c):(x=Tr(f.type,f.key,f.props,null,d.mode,x),x.ref=Sn(d,c,f),x.return=d,d=x)}return s(d);case Bt:e:{for(b=f.key;c!==null;){if(c.key===b)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(d,c.sibling),c=l(c,f.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=Yl(f,d.mode,x),c.return=d,d=c}return s(d);case rt:return b=f._init,j(d,c,b(f._payload),x)}if(En(f))return w(d,c,f,x);if(yn(f))return k(d,c,f,x);vr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(d,c.sibling),c=l(c,f),c.return=d,d=c):(n(d,c),c=Gl(f,d.mode,x),c.return=d,d=c),s(d)):n(d,c)}return j}var an=du(!0),pu=du(!1),Yr=kt(null),Xr=null,Yt=null,mo=null;function go(){mo=Yt=Xr=null}function xo(e){var t=Yr.current;B(Yr),e._currentValue=t}function Ci(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function nn(e,t){Xr=e,mo=Yt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function ze(e){var t=e._currentValue;if(mo!==e)if(e={context:e,memoizedValue:t,next:null},Yt===null){if(Xr===null)throw Error(v(308));Yt=e,Xr.dependencies={lanes:0,firstContext:e}}else Yt=Yt.next=e;return t}var Et=null;function yo(e){Et===null?Et=[e]:Et.push(e)}function fu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,yo(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ze(e,r)}function Ze(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var lt=!1;function vo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ye(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ze(e,n)}return l=r.interleaved,l===null?(t.next=t,yo(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ze(e,n)}function zr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ro(e,n)}}function Fs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Jr(e,t,n,r){var l=e.updateQueue;lt=!1;var i=l.firstBaseUpdate,s=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var u=a,p=u.next;u.next=null,s===null?i=p:s.next=p,s=u;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==s&&(a===null?g.firstBaseUpdate=p:a.next=p,g.lastBaseUpdate=u))}if(i!==null){var h=l.baseState;s=0,g=p=u=null,a=i;do{var m=a.lane,y=a.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,k=a;switch(m=t,y=n,k.tag){case 1:if(w=k.payload,typeof w=="function"){h=w.call(y,h,m);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,m=typeof w=="function"?w.call(y,h,m):w,m==null)break e;h=H({},h,m);break e;case 2:lt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[a]:m.push(a))}else y={eventTime:y,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(p=g=y,u=h):g=g.next=y,s|=m;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;m=a,a=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(g===null&&(u=h),l.baseState=u,l.firstBaseUpdate=p,l.lastBaseUpdate=g,t=l.shared.interleaved,t!==null){l=t;do s|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Lt|=s,e.lanes=s,e.memoizedState=h}}function bs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(v(191,l));l.call(r)}}}var or={},Ve=kt(or),Xn=kt(or),Jn=kt(or);function Ct(e){if(e===or)throw Error(v(174));return e}function ko(e,t){switch(I(Jn,t),I(Xn,e),I(Ve,or),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ai(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ai(t,e)}B(Ve),I(Ve,t)}function un(){B(Ve),B(Xn),B(Jn)}function mu(e){Ct(Jn.current);var t=Ct(Ve.current),n=ai(t,e.type);t!==n&&(I(Xn,e),I(Ve,n))}function wo(e){Xn.current===e&&(B(Ve),B(Xn))}var V=kt(0);function Zr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ul=[];function jo(){for(var e=0;e<Ul.length;e++)Ul[e]._workInProgressVersionPrimary=null;Ul.length=0}var Dr=et.ReactCurrentDispatcher,Wl=et.ReactCurrentBatchConfig,Pt=0,Q=null,J=null,q=null,qr=!1,Tn=!1,Zn=0,sp=0;function le(){throw Error(v(321))}function So(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Me(e[n],t[n]))return!1;return!0}function No(e,t,n,r,l,i){if(Pt=i,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Dr.current=e===null||e.memoizedState===null?dp:pp,e=n(r,l),Tn){i=0;do{if(Tn=!1,Zn=0,25<=i)throw Error(v(301));i+=1,q=J=null,t.updateQueue=null,Dr.current=fp,e=n(r,l)}while(Tn)}if(Dr.current=el,t=J!==null&&J.next!==null,Pt=0,q=J=Q=null,qr=!1,t)throw Error(v(300));return e}function Fo(){var e=Zn!==0;return Zn=0,e}function $e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?Q.memoizedState=q=e:q=q.next=e,q}function De(){if(J===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var t=q===null?Q.memoizedState:q.next;if(t!==null)q=t,J=e;else{if(e===null)throw Error(v(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},q===null?Q.memoizedState=q=e:q=q.next=e}return q}function qn(e,t){return typeof t=="function"?t(e):t}function Vl(e){var t=De(),n=t.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=e;var r=J,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var s=l.next;l.next=i.next,i.next=s}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var a=s=null,u=null,p=i;do{var g=p.lane;if((Pt&g)===g)u!==null&&(u=u.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var h={lane:g,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};u===null?(a=u=h,s=r):u=u.next=h,Q.lanes|=g,Lt|=g}p=p.next}while(p!==null&&p!==i);u===null?s=r:u.next=a,Me(r,t.memoizedState)||(me=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,Q.lanes|=i,Lt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ql(e){var t=De(),n=t.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var s=l=l.next;do i=e(i,s.action),s=s.next;while(s!==l);Me(i,t.memoizedState)||(me=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function gu(){}function xu(e,t){var n=Q,r=De(),l=t(),i=!Me(r.memoizedState,l);if(i&&(r.memoizedState=l,me=!0),r=r.queue,bo(ku.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||q!==null&&q.memoizedState.tag&1){if(n.flags|=2048,er(9,vu.bind(null,n,r,l,t),void 0,null),ee===null)throw Error(v(349));Pt&30||yu(n,t,l)}return l}function yu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vu(e,t,n,r){t.value=n,t.getSnapshot=r,wu(t)&&ju(e)}function ku(e,t,n){return n(function(){wu(t)&&ju(e)})}function wu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Me(e,n)}catch{return!0}}function ju(e){var t=Ze(e,1);t!==null&&Re(t,e,1,-1)}function Es(e){var t=$e();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qn,lastRenderedState:e},t.queue=e,e=e.dispatch=cp.bind(null,Q,e),[t.memoizedState,e]}function er(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Su(){return De().memoizedState}function _r(e,t,n,r){var l=$e();Q.flags|=e,l.memoizedState=er(1|t,n,void 0,r===void 0?null:r)}function fl(e,t,n,r){var l=De();r=r===void 0?null:r;var i=void 0;if(J!==null){var s=J.memoizedState;if(i=s.destroy,r!==null&&So(r,s.deps)){l.memoizedState=er(t,n,i,r);return}}Q.flags|=e,l.memoizedState=er(1|t,n,i,r)}function Cs(e,t){return _r(8390656,8,e,t)}function bo(e,t){return fl(2048,8,e,t)}function Nu(e,t){return fl(4,2,e,t)}function Fu(e,t){return fl(4,4,e,t)}function bu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Eu(e,t,n){return n=n!=null?n.concat([e]):null,fl(4,4,bu.bind(null,t,e),n)}function Eo(){}function Cu(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&So(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function zu(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&So(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Du(e,t,n){return Pt&21?(Me(n,t)||(n=Ta(),Q.lanes|=n,Lt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function ap(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=Wl.transition;Wl.transition={};try{e(!1),t()}finally{M=n,Wl.transition=r}}function _u(){return De().memoizedState}function up(e,t,n){var r=mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Au(e))Pu(t,n);else if(n=fu(e,t,n,r),n!==null){var l=ce();Re(n,e,r,l),Lu(n,t,r)}}function cp(e,t,n){var r=mt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Au(e))Pu(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,a=i(s,n);if(l.hasEagerState=!0,l.eagerState=a,Me(a,s)){var u=t.interleaved;u===null?(l.next=l,yo(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=fu(e,t,l,r),n!==null&&(l=ce(),Re(n,e,r,l),Lu(n,t,r))}}function Au(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function Pu(e,t){Tn=qr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Lu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ro(e,n)}}var el={readContext:ze,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},dp={readContext:ze,useCallback:function(e,t){return $e().memoizedState=[e,t===void 0?null:t],e},useContext:ze,useEffect:Cs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,_r(4194308,4,bu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _r(4194308,4,e,t)},useInsertionEffect:function(e,t){return _r(4,2,e,t)},useMemo:function(e,t){var n=$e();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=$e();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=up.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var t=$e();return e={current:e},t.memoizedState=e},useState:Es,useDebugValue:Eo,useDeferredValue:function(e){return $e().memoizedState=e},useTransition:function(){var e=Es(!1),t=e[0];return e=ap.bind(null,e[1]),$e().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Q,l=$e();if(U){if(n===void 0)throw Error(v(407));n=n()}else{if(n=t(),ee===null)throw Error(v(349));Pt&30||yu(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Cs(ku.bind(null,r,i,e),[e]),r.flags|=2048,er(9,vu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=$e(),t=ee.identifierPrefix;if(U){var n=Ge,r=Ke;n=(r&~(1<<32-Te(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Zn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=sp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},pp={readContext:ze,useCallback:Cu,useContext:ze,useEffect:bo,useImperativeHandle:Eu,useInsertionEffect:Nu,useLayoutEffect:Fu,useMemo:zu,useReducer:Vl,useRef:Su,useState:function(){return Vl(qn)},useDebugValue:Eo,useDeferredValue:function(e){var t=De();return Du(t,J.memoizedState,e)},useTransition:function(){var e=Vl(qn)[0],t=De().memoizedState;return[e,t]},useMutableSource:gu,useSyncExternalStore:xu,useId:_u,unstable_isNewReconciler:!1},fp={readContext:ze,useCallback:Cu,useContext:ze,useEffect:bo,useImperativeHandle:Eu,useInsertionEffect:Nu,useLayoutEffect:Fu,useMemo:zu,useReducer:Ql,useRef:Su,useState:function(){return Ql(qn)},useDebugValue:Eo,useDeferredValue:function(e){var t=De();return J===null?t.memoizedState=e:Du(t,J.memoizedState,e)},useTransition:function(){var e=Ql(qn)[0],t=De().memoizedState;return[e,t]},useMutableSource:gu,useSyncExternalStore:xu,useId:_u,unstable_isNewReconciler:!1};function Ae(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function zi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var hl={isMounted:function(e){return(e=e._reactInternals)?Mt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ce(),l=mt(e),i=Ye(r,l);i.payload=t,n!=null&&(i.callback=n),t=ft(e,i,l),t!==null&&(Re(t,e,l,r),zr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ce(),l=mt(e),i=Ye(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=ft(e,i,l),t!==null&&(Re(t,e,l,r),zr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ce(),r=mt(e),l=Ye(n,r);l.tag=2,t!=null&&(l.callback=t),t=ft(e,l,r),t!==null&&(Re(t,e,r,n),zr(t,e,r))}};function zs(e,t,n,r,l,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!Hn(n,r)||!Hn(l,i):!0}function Tu(e,t,n){var r=!1,l=yt,i=t.contextType;return typeof i=="object"&&i!==null?i=ze(i):(l=xe(t)?_t:se.current,r=t.contextTypes,i=(r=r!=null)?on(e,l):yt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=hl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ds(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&hl.enqueueReplaceState(t,t.state,null)}function Di(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},vo(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=ze(i):(i=xe(t)?_t:se.current,l.context=on(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(zi(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&hl.enqueueReplaceState(l,l.state,null),Jr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function cn(e,t){try{var n="",r=t;do n+=$c(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Hl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function _i(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var hp=typeof WeakMap=="function"?WeakMap:Map;function Ru(e,t,n){n=Ye(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){nl||(nl=!0,$i=r),_i(e,t)},n}function Mu(e,t,n){n=Ye(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){_i(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){_i(e,t),typeof r!="function"&&(ht===null?ht=new Set([this]):ht.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function _s(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new hp;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Cp.bind(null,e,t,n),t.then(e,e))}function As(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ps(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ye(-1,1),t.tag=2,ft(n,t,1))),n.lanes|=1),e)}var mp=et.ReactCurrentOwner,me=!1;function ue(e,t,n,r){t.child=e===null?pu(t,null,n,r):an(t,e.child,n,r)}function Ls(e,t,n,r,l){n=n.render;var i=t.ref;return nn(t,l),r=No(e,t,n,r,i,l),n=Fo(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,qe(e,t,l)):(U&&n&&po(t),t.flags|=1,ue(e,t,r,l),t.child)}function Ts(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!To(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Iu(e,t,i,r,l)):(e=Tr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:Hn,n(s,r)&&e.ref===t.ref)return qe(e,t,l)}return t.flags|=1,e=gt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Iu(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Hn(i,r)&&e.ref===t.ref)if(me=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,qe(e,t,l)}return Ai(e,t,n,r,l)}function Ou(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},I(Jt,ve),ve|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,I(Jt,ve),ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,I(Jt,ve),ve|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,I(Jt,ve),ve|=r;return ue(e,t,l,n),t.child}function Bu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ai(e,t,n,r,l){var i=xe(n)?_t:se.current;return i=on(t,i),nn(t,l),n=No(e,t,n,r,i,l),r=Fo(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,qe(e,t,l)):(U&&r&&po(t),t.flags|=1,ue(e,t,n,l),t.child)}function Rs(e,t,n,r,l){if(xe(n)){var i=!0;Hr(t)}else i=!1;if(nn(t,l),t.stateNode===null)Ar(e,t),Tu(t,n,r),Di(t,n,r,l),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var u=s.context,p=n.contextType;typeof p=="object"&&p!==null?p=ze(p):(p=xe(n)?_t:se.current,p=on(t,p));var g=n.getDerivedStateFromProps,h=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||u!==p)&&Ds(t,s,r,p),lt=!1;var m=t.memoizedState;s.state=m,Jr(t,r,s,l),u=t.memoizedState,a!==r||m!==u||ge.current||lt?(typeof g=="function"&&(zi(t,n,g,r),u=t.memoizedState),(a=lt||zs(t,n,a,r,m,u,p))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),s.props=r,s.state=u,s.context=p,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,hu(e,t),a=t.memoizedProps,p=t.type===t.elementType?a:Ae(t.type,a),s.props=p,h=t.pendingProps,m=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=ze(u):(u=xe(n)?_t:se.current,u=on(t,u));var y=n.getDerivedStateFromProps;(g=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||m!==u)&&Ds(t,s,r,u),lt=!1,m=t.memoizedState,s.state=m,Jr(t,r,s,l);var w=t.memoizedState;a!==h||m!==w||ge.current||lt?(typeof y=="function"&&(zi(t,n,y,r),w=t.memoizedState),(p=lt||zs(t,n,p,r,m,w,u)||!1)?(g||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,w,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,w,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),s.props=r,s.state=w,s.context=u,r=p):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Pi(e,t,n,r,i,l)}function Pi(e,t,n,r,l,i){Bu(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return l&&ws(t,n,!1),qe(e,t,i);r=t.stateNode,mp.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=an(t,e.child,null,i),t.child=an(t,null,a,i)):ue(e,t,a,i),t.memoizedState=r.state,l&&ws(t,n,!0),t.child}function $u(e){var t=e.stateNode;t.pendingContext?ks(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ks(e,t.context,!1),ko(e,t.containerInfo)}function Ms(e,t,n,r,l){return sn(),ho(l),t.flags|=256,ue(e,t,n,r),t.child}var Li={dehydrated:null,treeContext:null,retryLane:0};function Ti(e){return{baseLanes:e,cachePool:null,transitions:null}}function Uu(e,t,n){var r=t.pendingProps,l=V.current,i=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),I(V,l&1),e===null)return Ei(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=xl(s,r,0,null),e=Dt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ti(n),t.memoizedState=Li,e):Co(t,s));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return gp(e,t,s,r,a,l,n);if(i){i=r.fallback,s=t.mode,l=e.child,a=l.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=gt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?i=gt(a,i):(i=Dt(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?Ti(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=Li,r}return i=e.child,e=i.sibling,r=gt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Co(e,t){return t=xl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function kr(e,t,n,r){return r!==null&&ho(r),an(t,e.child,null,n),e=Co(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gp(e,t,n,r,l,i,s){if(n)return t.flags&256?(t.flags&=-257,r=Hl(Error(v(422))),kr(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=xl({mode:"visible",children:r.children},l,0,null),i=Dt(i,l,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&an(t,e.child,null,s),t.child.memoizedState=Ti(s),t.memoizedState=Li,i);if(!(t.mode&1))return kr(e,t,s,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(v(419)),r=Hl(i,r,void 0),kr(e,t,s,r)}if(a=(s&e.childLanes)!==0,me||a){if(r=ee,r!==null){switch(s&-s){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|s)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Ze(e,l),Re(r,e,l,-1))}return Lo(),r=Hl(Error(v(421))),kr(e,t,s,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=zp.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,ke=pt(l.nextSibling),we=t,U=!0,Le=null,e!==null&&(Fe[be++]=Ke,Fe[be++]=Ge,Fe[be++]=At,Ke=e.id,Ge=e.overflow,At=t),t=Co(t,r.children),t.flags|=4096,t)}function Is(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ci(e.return,t,n)}function Kl(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Wu(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(ue(e,t,r.children,n),r=V.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Is(e,n,t);else if(e.tag===19)Is(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(I(V,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Zr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Kl(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Zr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Kl(t,!0,n,null,i);break;case"together":Kl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ar(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Lt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(v(153));if(t.child!==null){for(e=t.child,n=gt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function xp(e,t,n){switch(t.tag){case 3:$u(t),sn();break;case 5:mu(t);break;case 1:xe(t.type)&&Hr(t);break;case 4:ko(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;I(Yr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(I(V,V.current&1),t.flags|=128,null):n&t.child.childLanes?Uu(e,t,n):(I(V,V.current&1),e=qe(e,t,n),e!==null?e.sibling:null);I(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Wu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),I(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,Ou(e,t,n)}return qe(e,t,n)}var Vu,Ri,Qu,Hu;Vu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ri=function(){};Qu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Ct(Ve.current);var i=null;switch(n){case"input":l=li(e,l),r=li(e,r),i=[];break;case"select":l=H({},l,{value:void 0}),r=H({},r,{value:void 0}),i=[];break;case"textarea":l=si(e,l),r=si(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vr)}ui(n,r);var s;n=null;for(p in l)if(!r.hasOwnProperty(p)&&l.hasOwnProperty(p)&&l[p]!=null)if(p==="style"){var a=l[p];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(On.hasOwnProperty(p)?i||(i=[]):(i=i||[]).push(p,null));for(p in r){var u=r[p];if(a=l!=null?l[p]:void 0,r.hasOwnProperty(p)&&u!==a&&(u!=null||a!=null))if(p==="style")if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(i||(i=[]),i.push(p,n)),n=u;else p==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(p,u)):p==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(p,""+u):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(On.hasOwnProperty(p)?(u!=null&&p==="onScroll"&&O("scroll",e),i||a===u||(i=[])):(i=i||[]).push(p,u))}n&&(i=i||[]).push("style",n);var p=i;(t.updateQueue=p)&&(t.flags|=4)}};Hu=function(e,t,n,r){n!==r&&(t.flags|=4)};function Nn(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function yp(e,t,n){var r=t.pendingProps;switch(fo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(t),null;case 1:return xe(t.type)&&Qr(),ie(t),null;case 3:return r=t.stateNode,un(),B(ge),B(se),jo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(yr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Le!==null&&(Vi(Le),Le=null))),Ri(e,t),ie(t),null;case 5:wo(t);var l=Ct(Jn.current);if(n=t.type,e!==null&&t.stateNode!=null)Qu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(v(166));return ie(t),null}if(e=Ct(Ve.current),yr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ue]=t,r[Yn]=i,e=(t.mode&1)!==0,n){case"dialog":O("cancel",r),O("close",r);break;case"iframe":case"object":case"embed":O("load",r);break;case"video":case"audio":for(l=0;l<zn.length;l++)O(zn[l],r);break;case"source":O("error",r);break;case"img":case"image":case"link":O("error",r),O("load",r);break;case"details":O("toggle",r);break;case"input":Ko(r,i),O("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},O("invalid",r);break;case"textarea":Yo(r,i),O("invalid",r)}ui(n,i),l=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&xr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&xr(r.textContent,a,e),l=["children",""+a]):On.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&O("scroll",r)}switch(n){case"input":ur(r),Go(r,i,!0);break;case"textarea":ur(r),Xo(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Vr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ka(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ue]=t,e[Yn]=r,Vu(e,t,!1,!1),t.stateNode=e;e:{switch(s=ci(n,r),n){case"dialog":O("cancel",e),O("close",e),l=r;break;case"iframe":case"object":case"embed":O("load",e),l=r;break;case"video":case"audio":for(l=0;l<zn.length;l++)O(zn[l],e);l=r;break;case"source":O("error",e),l=r;break;case"img":case"image":case"link":O("error",e),O("load",e),l=r;break;case"details":O("toggle",e),l=r;break;case"input":Ko(e,r),l=li(e,r),O("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=H({},r,{value:void 0}),O("invalid",e);break;case"textarea":Yo(e,r),l=si(e,r),O("invalid",e);break;default:l=r}ui(n,l),a=l;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?Sa(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&wa(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Bn(e,u):typeof u=="number"&&Bn(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(On.hasOwnProperty(i)?u!=null&&i==="onScroll"&&O("scroll",e):u!=null&&Ji(e,i,u,s))}switch(n){case"input":ur(e),Go(e,r,!1);break;case"textarea":ur(e),Xo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+xt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Zt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Zt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Vr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ie(t),null;case 6:if(e&&t.stateNode!=null)Hu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(v(166));if(n=Ct(Jn.current),Ct(Ve.current),yr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ue]=t,(i=r.nodeValue!==n)&&(e=we,e!==null))switch(e.tag){case 3:xr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ue]=t,t.stateNode=r}return ie(t),null;case 13:if(B(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&ke!==null&&t.mode&1&&!(t.flags&128))cu(),sn(),t.flags|=98560,i=!1;else if(i=yr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(v(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(v(317));i[Ue]=t}else sn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ie(t),i=!1}else Le!==null&&(Vi(Le),Le=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?Z===0&&(Z=3):Lo())),t.updateQueue!==null&&(t.flags|=4),ie(t),null);case 4:return un(),Ri(e,t),e===null&&Kn(t.stateNode.containerInfo),ie(t),null;case 10:return xo(t.type._context),ie(t),null;case 17:return xe(t.type)&&Qr(),ie(t),null;case 19:if(B(V),i=t.memoizedState,i===null)return ie(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)Nn(i,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Zr(e),s!==null){for(t.flags|=128,Nn(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return I(V,V.current&1|2),t.child}e=e.sibling}i.tail!==null&&Y()>dn&&(t.flags|=128,r=!0,Nn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Zr(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Nn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!U)return ie(t),null}else 2*Y()-i.renderingStartTime>dn&&n!==1073741824&&(t.flags|=128,r=!0,Nn(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Y(),t.sibling=null,n=V.current,I(V,r?n&1|2:n&1),t):(ie(t),null);case 22:case 23:return Po(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ve&1073741824&&(ie(t),t.subtreeFlags&6&&(t.flags|=8192)):ie(t),null;case 24:return null;case 25:return null}throw Error(v(156,t.tag))}function vp(e,t){switch(fo(t),t.tag){case 1:return xe(t.type)&&Qr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return un(),B(ge),B(se),jo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return wo(t),null;case 13:if(B(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(v(340));sn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(V),null;case 4:return un(),null;case 10:return xo(t.type._context),null;case 22:case 23:return Po(),null;case 24:return null;default:return null}}var wr=!1,oe=!1,kp=typeof WeakSet=="function"?WeakSet:Set,F=null;function Xt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(e,t,r)}else n.current=null}function Mi(e,t,n){try{n()}catch(r){K(e,t,r)}}var Os=!1;function wp(e,t){if(ki=$r,e=Ja(),co(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,a=-1,u=-1,p=0,g=0,h=e,m=null;t:for(;;){for(var y;h!==n||l!==0&&h.nodeType!==3||(a=s+l),h!==i||r!==0&&h.nodeType!==3||(u=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(y=h.firstChild)!==null;)m=h,h=y;for(;;){if(h===e)break t;if(m===n&&++p===l&&(a=s),m===i&&++g===r&&(u=s),(y=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=y}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(wi={focusedElem:e,selectionRange:n},$r=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,j=w.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?k:Ae(t.type,k),j);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(x){K(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return w=Os,Os=!1,w}function Rn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Mi(t,n,i)}l=l.next}while(l!==r)}}function ml(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ii(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ku(e){var t=e.alternate;t!==null&&(e.alternate=null,Ku(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ue],delete t[Yn],delete t[Ni],delete t[rp],delete t[lp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Gu(e){return e.tag===5||e.tag===3||e.tag===4}function Bs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vr));else if(r!==4&&(e=e.child,e!==null))for(Oi(e,t,n),e=e.sibling;e!==null;)Oi(e,t,n),e=e.sibling}function Bi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Bi(e,t,n),e=e.sibling;e!==null;)Bi(e,t,n),e=e.sibling}var te=null,Pe=!1;function nt(e,t,n){for(n=n.child;n!==null;)Yu(e,t,n),n=n.sibling}function Yu(e,t,n){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(sl,n)}catch{}switch(n.tag){case 5:oe||Xt(n,t);case 6:var r=te,l=Pe;te=null,nt(e,t,n),te=r,Pe=l,te!==null&&(Pe?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Pe?(e=te,n=n.stateNode,e.nodeType===8?Bl(e.parentNode,n):e.nodeType===1&&Bl(e,n),Vn(e)):Bl(te,n.stateNode));break;case 4:r=te,l=Pe,te=n.stateNode.containerInfo,Pe=!0,nt(e,t,n),te=r,Pe=l;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&Mi(n,t,s),l=l.next}while(l!==r)}nt(e,t,n);break;case 1:if(!oe&&(Xt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){K(n,t,a)}nt(e,t,n);break;case 21:nt(e,t,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,nt(e,t,n),oe=r):nt(e,t,n);break;default:nt(e,t,n)}}function $s(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new kp),t.forEach(function(r){var l=Dp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function _e(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:te=a.stateNode,Pe=!1;break e;case 3:te=a.stateNode.containerInfo,Pe=!0;break e;case 4:te=a.stateNode.containerInfo,Pe=!0;break e}a=a.return}if(te===null)throw Error(v(160));Yu(i,s,l),te=null,Pe=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(p){K(l,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Xu(t,e),t=t.sibling}function Xu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_e(t,e),Be(e),r&4){try{Rn(3,e,e.return),ml(3,e)}catch(k){K(e,e.return,k)}try{Rn(5,e,e.return)}catch(k){K(e,e.return,k)}}break;case 1:_e(t,e),Be(e),r&512&&n!==null&&Xt(n,n.return);break;case 5:if(_e(t,e),Be(e),r&512&&n!==null&&Xt(n,n.return),e.flags&32){var l=e.stateNode;try{Bn(l,"")}catch(k){K(e,e.return,k)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&ya(l,i),ci(a,s);var p=ci(a,i);for(s=0;s<u.length;s+=2){var g=u[s],h=u[s+1];g==="style"?Sa(l,h):g==="dangerouslySetInnerHTML"?wa(l,h):g==="children"?Bn(l,h):Ji(l,g,h,p)}switch(a){case"input":ii(l,i);break;case"textarea":va(l,i);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Zt(l,!!i.multiple,y,!1):m!==!!i.multiple&&(i.defaultValue!=null?Zt(l,!!i.multiple,i.defaultValue,!0):Zt(l,!!i.multiple,i.multiple?[]:"",!1))}l[Yn]=i}catch(k){K(e,e.return,k)}}break;case 6:if(_e(t,e),Be(e),r&4){if(e.stateNode===null)throw Error(v(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(k){K(e,e.return,k)}}break;case 3:if(_e(t,e),Be(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vn(t.containerInfo)}catch(k){K(e,e.return,k)}break;case 4:_e(t,e),Be(e);break;case 13:_e(t,e),Be(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(_o=Y())),r&4&&$s(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(p=oe)||g,_e(t,e),oe=p):_e(t,e),Be(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!g&&e.mode&1)for(F=e,g=e.child;g!==null;){for(h=F=g;F!==null;){switch(m=F,y=m.child,m.tag){case 0:case 11:case 14:case 15:Rn(4,m,m.return);break;case 1:Xt(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(k){K(r,n,k)}}break;case 5:Xt(m,m.return);break;case 22:if(m.memoizedState!==null){Ws(h);continue}}y!==null?(y.return=m,F=y):Ws(h)}g=g.sibling}e:for(g=null,h=e;;){if(h.tag===5){if(g===null){g=h;try{l=h.stateNode,p?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,u=h.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=ja("display",s))}catch(k){K(e,e.return,k)}}}else if(h.tag===6){if(g===null)try{h.stateNode.nodeValue=p?"":h.memoizedProps}catch(k){K(e,e.return,k)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;g===h&&(g=null),h=h.return}g===h&&(g=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:_e(t,e),Be(e),r&4&&$s(e);break;case 21:break;default:_e(t,e),Be(e)}}function Be(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Gu(n)){var r=n;break e}n=n.return}throw Error(v(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Bn(l,""),r.flags&=-33);var i=Bs(e);Bi(e,i,l);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Bs(e);Oi(e,a,s);break;default:throw Error(v(161))}}catch(u){K(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function jp(e,t,n){F=e,Ju(e)}function Ju(e,t,n){for(var r=(e.mode&1)!==0;F!==null;){var l=F,i=l.child;if(l.tag===22&&r){var s=l.memoizedState!==null||wr;if(!s){var a=l.alternate,u=a!==null&&a.memoizedState!==null||oe;a=wr;var p=oe;if(wr=s,(oe=u)&&!p)for(F=l;F!==null;)s=F,u=s.child,s.tag===22&&s.memoizedState!==null?Vs(l):u!==null?(u.return=s,F=u):Vs(l);for(;i!==null;)F=i,Ju(i),i=i.sibling;F=l,wr=a,oe=p}Us(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,F=i):Us(e)}}function Us(e){for(;F!==null;){var t=F;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||ml(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!oe)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Ae(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&bs(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}bs(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var g=p.memoizedState;if(g!==null){var h=g.dehydrated;h!==null&&Vn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}oe||t.flags&512&&Ii(t)}catch(m){K(t,t.return,m)}}if(t===e){F=null;break}if(n=t.sibling,n!==null){n.return=t.return,F=n;break}F=t.return}}function Ws(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var n=t.sibling;if(n!==null){n.return=t.return,F=n;break}F=t.return}}function Vs(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ml(4,t)}catch(u){K(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){K(t,l,u)}}var i=t.return;try{Ii(t)}catch(u){K(t,i,u)}break;case 5:var s=t.return;try{Ii(t)}catch(u){K(t,s,u)}}}catch(u){K(t,t.return,u)}if(t===e){F=null;break}var a=t.sibling;if(a!==null){a.return=t.return,F=a;break}F=t.return}}var Sp=Math.ceil,tl=et.ReactCurrentDispatcher,zo=et.ReactCurrentOwner,Ce=et.ReactCurrentBatchConfig,R=0,ee=null,X=null,ne=0,ve=0,Jt=kt(0),Z=0,tr=null,Lt=0,gl=0,Do=0,Mn=null,he=null,_o=0,dn=1/0,Qe=null,nl=!1,$i=null,ht=null,jr=!1,at=null,rl=0,In=0,Ui=null,Pr=-1,Lr=0;function ce(){return R&6?Y():Pr!==-1?Pr:Pr=Y()}function mt(e){return e.mode&1?R&2&&ne!==0?ne&-ne:op.transition!==null?(Lr===0&&(Lr=Ta()),Lr):(e=M,e!==0||(e=window.event,e=e===void 0?16:Ua(e.type)),e):1}function Re(e,t,n,r){if(50<In)throw In=0,Ui=null,Error(v(185));rr(e,n,r),(!(R&2)||e!==ee)&&(e===ee&&(!(R&2)&&(gl|=n),Z===4&&ot(e,ne)),ye(e,r),n===1&&R===0&&!(t.mode&1)&&(dn=Y()+500,pl&&wt()))}function ye(e,t){var n=e.callbackNode;od(e,t);var r=Br(e,e===ee?ne:0);if(r===0)n!==null&&qo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&qo(n),t===1)e.tag===0?ip(Qs.bind(null,e)):su(Qs.bind(null,e)),tp(function(){!(R&6)&&wt()}),n=null;else{switch(Ra(r)){case 1:n=no;break;case 4:n=Pa;break;case 16:n=Or;break;case 536870912:n=La;break;default:n=Or}n=ic(n,Zu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Zu(e,t){if(Pr=-1,Lr=0,R&6)throw Error(v(327));var n=e.callbackNode;if(rn()&&e.callbackNode!==n)return null;var r=Br(e,e===ee?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ll(e,r);else{t=r;var l=R;R|=2;var i=ec();(ee!==e||ne!==t)&&(Qe=null,dn=Y()+500,zt(e,t));do try{bp();break}catch(a){qu(e,a)}while(!0);go(),tl.current=i,R=l,X!==null?t=0:(ee=null,ne=0,t=Z)}if(t!==0){if(t===2&&(l=mi(e),l!==0&&(r=l,t=Wi(e,l))),t===1)throw n=tr,zt(e,0),ot(e,r),ye(e,Y()),n;if(t===6)ot(e,r);else{if(l=e.current.alternate,!(r&30)&&!Np(l)&&(t=ll(e,r),t===2&&(i=mi(e),i!==0&&(r=i,t=Wi(e,i))),t===1))throw n=tr,zt(e,0),ot(e,r),ye(e,Y()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(v(345));case 2:Ft(e,he,Qe);break;case 3:if(ot(e,r),(r&130023424)===r&&(t=_o+500-Y(),10<t)){if(Br(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Si(Ft.bind(null,e,he,Qe),t);break}Ft(e,he,Qe);break;case 4:if(ot(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var s=31-Te(r);i=1<<s,s=t[s],s>l&&(l=s),r&=~i}if(r=l,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Sp(r/1960))-r,10<r){e.timeoutHandle=Si(Ft.bind(null,e,he,Qe),r);break}Ft(e,he,Qe);break;case 5:Ft(e,he,Qe);break;default:throw Error(v(329))}}}return ye(e,Y()),e.callbackNode===n?Zu.bind(null,e):null}function Wi(e,t){var n=Mn;return e.current.memoizedState.isDehydrated&&(zt(e,t).flags|=256),e=ll(e,t),e!==2&&(t=he,he=n,t!==null&&Vi(t)),e}function Vi(e){he===null?he=e:he.push.apply(he,e)}function Np(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Me(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ot(e,t){for(t&=~Do,t&=~gl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Te(t),r=1<<n;e[n]=-1,t&=~r}}function Qs(e){if(R&6)throw Error(v(327));rn();var t=Br(e,0);if(!(t&1))return ye(e,Y()),null;var n=ll(e,t);if(e.tag!==0&&n===2){var r=mi(e);r!==0&&(t=r,n=Wi(e,r))}if(n===1)throw n=tr,zt(e,0),ot(e,t),ye(e,Y()),n;if(n===6)throw Error(v(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ft(e,he,Qe),ye(e,Y()),null}function Ao(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(dn=Y()+500,pl&&wt())}}function Tt(e){at!==null&&at.tag===0&&!(R&6)&&rn();var t=R;R|=1;var n=Ce.transition,r=M;try{if(Ce.transition=null,M=1,e)return e()}finally{M=r,Ce.transition=n,R=t,!(R&6)&&wt()}}function Po(){ve=Jt.current,B(Jt)}function zt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ep(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(fo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qr();break;case 3:un(),B(ge),B(se),jo();break;case 5:wo(r);break;case 4:un();break;case 13:B(V);break;case 19:B(V);break;case 10:xo(r.type._context);break;case 22:case 23:Po()}n=n.return}if(ee=e,X=e=gt(e.current,null),ne=ve=t,Z=0,tr=null,Do=gl=Lt=0,he=Mn=null,Et!==null){for(t=0;t<Et.length;t++)if(n=Et[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=l,r.next=s}n.pending=r}Et=null}return e}function qu(e,t){do{var n=X;try{if(go(),Dr.current=el,qr){for(var r=Q.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}qr=!1}if(Pt=0,q=J=Q=null,Tn=!1,Zn=0,zo.current=null,n===null||n.return===null){Z=1,tr=t,X=null;break}e:{var i=e,s=n.return,a=n,u=t;if(t=ne,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var p=u,g=a,h=g.tag;if(!(g.mode&1)&&(h===0||h===11||h===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var y=As(s);if(y!==null){y.flags&=-257,Ps(y,s,a,i,t),y.mode&1&&_s(i,p,t),t=y,u=p;var w=t.updateQueue;if(w===null){var k=new Set;k.add(u),t.updateQueue=k}else w.add(u);break e}else{if(!(t&1)){_s(i,p,t),Lo();break e}u=Error(v(426))}}else if(U&&a.mode&1){var j=As(s);if(j!==null){!(j.flags&65536)&&(j.flags|=256),Ps(j,s,a,i,t),ho(cn(u,a));break e}}i=u=cn(u,a),Z!==4&&(Z=2),Mn===null?Mn=[i]:Mn.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=Ru(i,u,t);Fs(i,d);break e;case 1:a=u;var c=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ht===null||!ht.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=Mu(i,a,t);Fs(i,x);break e}}i=i.return}while(i!==null)}nc(n)}catch(S){t=S,X===n&&n!==null&&(X=n=n.return);continue}break}while(!0)}function ec(){var e=tl.current;return tl.current=el,e===null?el:e}function Lo(){(Z===0||Z===3||Z===2)&&(Z=4),ee===null||!(Lt&268435455)&&!(gl&268435455)||ot(ee,ne)}function ll(e,t){var n=R;R|=2;var r=ec();(ee!==e||ne!==t)&&(Qe=null,zt(e,t));do try{Fp();break}catch(l){qu(e,l)}while(!0);if(go(),R=n,tl.current=r,X!==null)throw Error(v(261));return ee=null,ne=0,Z}function Fp(){for(;X!==null;)tc(X)}function bp(){for(;X!==null&&!Jc();)tc(X)}function tc(e){var t=lc(e.alternate,e,ve);e.memoizedProps=e.pendingProps,t===null?nc(e):X=t,zo.current=null}function nc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=vp(n,t),n!==null){n.flags&=32767,X=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,X=null;return}}else if(n=yp(n,t,ve),n!==null){X=n;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);Z===0&&(Z=5)}function Ft(e,t,n){var r=M,l=Ce.transition;try{Ce.transition=null,M=1,Ep(e,t,n,r)}finally{Ce.transition=l,M=r}return null}function Ep(e,t,n,r){do rn();while(at!==null);if(R&6)throw Error(v(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(v(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(sd(e,i),e===ee&&(X=ee=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||jr||(jr=!0,ic(Or,function(){return rn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ce.transition,Ce.transition=null;var s=M;M=1;var a=R;R|=4,zo.current=null,wp(e,n),Xu(n,e),Kd(wi),$r=!!ki,wi=ki=null,e.current=n,jp(n),Zc(),R=a,M=s,Ce.transition=i}else e.current=n;if(jr&&(jr=!1,at=e,rl=l),i=e.pendingLanes,i===0&&(ht=null),td(n.stateNode),ye(e,Y()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(nl)throw nl=!1,e=$i,$i=null,e;return rl&1&&e.tag!==0&&rn(),i=e.pendingLanes,i&1?e===Ui?In++:(In=0,Ui=e):In=0,wt(),null}function rn(){if(at!==null){var e=Ra(rl),t=Ce.transition,n=M;try{if(Ce.transition=null,M=16>e?16:e,at===null)var r=!1;else{if(e=at,at=null,rl=0,R&6)throw Error(v(331));var l=R;for(R|=4,F=e.current;F!==null;){var i=F,s=i.child;if(F.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var p=a[u];for(F=p;F!==null;){var g=F;switch(g.tag){case 0:case 11:case 15:Rn(8,g,i)}var h=g.child;if(h!==null)h.return=g,F=h;else for(;F!==null;){g=F;var m=g.sibling,y=g.return;if(Ku(g),g===p){F=null;break}if(m!==null){m.return=y,F=m;break}F=y}}}var w=i.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var j=k.sibling;k.sibling=null,k=j}while(k!==null)}}F=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,F=s;else e:for(;F!==null;){if(i=F,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Rn(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,F=d;break e}F=i.return}}var c=e.current;for(F=c;F!==null;){s=F;var f=s.child;if(s.subtreeFlags&2064&&f!==null)f.return=s,F=f;else e:for(s=c;F!==null;){if(a=F,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ml(9,a)}}catch(S){K(a,a.return,S)}if(a===s){F=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,F=x;break e}F=a.return}}if(R=l,wt(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(sl,e)}catch{}r=!0}return r}finally{M=n,Ce.transition=t}}return!1}function Hs(e,t,n){t=cn(n,t),t=Ru(e,t,1),e=ft(e,t,1),t=ce(),e!==null&&(rr(e,1,t),ye(e,t))}function K(e,t,n){if(e.tag===3)Hs(e,e,n);else for(;t!==null;){if(t.tag===3){Hs(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ht===null||!ht.has(r))){e=cn(n,e),e=Mu(t,e,1),t=ft(t,e,1),e=ce(),t!==null&&(rr(t,1,e),ye(t,e));break}}t=t.return}}function Cp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(ne&n)===n&&(Z===4||Z===3&&(ne&130023424)===ne&&500>Y()-_o?zt(e,0):Do|=n),ye(e,t)}function rc(e,t){t===0&&(e.mode&1?(t=pr,pr<<=1,!(pr&130023424)&&(pr=4194304)):t=1);var n=ce();e=Ze(e,t),e!==null&&(rr(e,t,n),ye(e,n))}function zp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),rc(e,n)}function Dp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(v(314))}r!==null&&r.delete(t),rc(e,n)}var lc;lc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ge.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,xp(e,t,n);me=!!(e.flags&131072)}else me=!1,U&&t.flags&1048576&&au(t,Gr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ar(e,t),e=t.pendingProps;var l=on(t,se.current);nn(t,n),l=No(null,t,r,e,l,n);var i=Fo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,xe(r)?(i=!0,Hr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,vo(t),l.updater=hl,t.stateNode=l,l._reactInternals=t,Di(t,r,e,n),t=Pi(null,t,r,!0,i,n)):(t.tag=0,U&&i&&po(t),ue(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ar(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Ap(r),e=Ae(r,e),l){case 0:t=Ai(null,t,r,e,n);break e;case 1:t=Rs(null,t,r,e,n);break e;case 11:t=Ls(null,t,r,e,n);break e;case 14:t=Ts(null,t,r,Ae(r.type,e),n);break e}throw Error(v(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ae(r,l),Ai(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ae(r,l),Rs(e,t,r,l,n);case 3:e:{if($u(t),e===null)throw Error(v(387));r=t.pendingProps,i=t.memoizedState,l=i.element,hu(e,t),Jr(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=cn(Error(v(423)),t),t=Ms(e,t,r,n,l);break e}else if(r!==l){l=cn(Error(v(424)),t),t=Ms(e,t,r,n,l);break e}else for(ke=pt(t.stateNode.containerInfo.firstChild),we=t,U=!0,Le=null,n=pu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sn(),r===l){t=qe(e,t,n);break e}ue(e,t,r,n)}t=t.child}return t;case 5:return mu(t),e===null&&Ei(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,s=l.children,ji(r,l)?s=null:i!==null&&ji(r,i)&&(t.flags|=32),Bu(e,t),ue(e,t,s,n),t.child;case 6:return e===null&&Ei(t),null;case 13:return Uu(e,t,n);case 4:return ko(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=an(t,null,r,n):ue(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ae(r,l),Ls(e,t,r,l,n);case 7:return ue(e,t,t.pendingProps,n),t.child;case 8:return ue(e,t,t.pendingProps.children,n),t.child;case 12:return ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,s=l.value,I(Yr,r._currentValue),r._currentValue=s,i!==null)if(Me(i.value,s)){if(i.children===l.children&&!ge.current){t=qe(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Ye(-1,n&-n),u.tag=2;var p=i.updateQueue;if(p!==null){p=p.shared;var g=p.pending;g===null?u.next=u:(u.next=g.next,g.next=u),p.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ci(i.return,n,t),a.lanes|=n;break}u=u.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(v(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ci(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}ue(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,nn(t,n),l=ze(l),r=r(l),t.flags|=1,ue(e,t,r,n),t.child;case 14:return r=t.type,l=Ae(r,t.pendingProps),l=Ae(r.type,l),Ts(e,t,r,l,n);case 15:return Iu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ae(r,l),Ar(e,t),t.tag=1,xe(r)?(e=!0,Hr(t)):e=!1,nn(t,n),Tu(t,r,l),Di(t,r,l,n),Pi(null,t,r,!0,e,n);case 19:return Wu(e,t,n);case 22:return Ou(e,t,n)}throw Error(v(156,t.tag))};function ic(e,t){return Aa(e,t)}function _p(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,n,r){return new _p(e,t,n,r)}function To(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ap(e){if(typeof e=="function")return To(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qi)return 11;if(e===eo)return 14}return 2}function gt(e,t){var n=e.alternate;return n===null?(n=Ee(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Tr(e,t,n,r,l,i){var s=2;if(r=e,typeof e=="function")To(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case $t:return Dt(n.children,l,i,t);case Zi:s=8,l|=8;break;case ei:return e=Ee(12,n,t,l|2),e.elementType=ei,e.lanes=i,e;case ti:return e=Ee(13,n,t,l),e.elementType=ti,e.lanes=i,e;case ni:return e=Ee(19,n,t,l),e.elementType=ni,e.lanes=i,e;case ma:return xl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fa:s=10;break e;case ha:s=9;break e;case qi:s=11;break e;case eo:s=14;break e;case rt:s=16,r=null;break e}throw Error(v(130,e==null?e:typeof e,""))}return t=Ee(s,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Dt(e,t,n,r){return e=Ee(7,e,r,t),e.lanes=n,e}function xl(e,t,n,r){return e=Ee(22,e,r,t),e.elementType=ma,e.lanes=n,e.stateNode={isHidden:!1},e}function Gl(e,t,n){return e=Ee(6,e,null,t),e.lanes=n,e}function Yl(e,t,n){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Pp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zl(0),this.expirationTimes=zl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ro(e,t,n,r,l,i,s,a,u){return e=new Pp(e,t,n,a,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ee(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vo(i),e}function Lp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function oc(e){if(!e)return yt;e=e._reactInternals;e:{if(Mt(e)!==e||e.tag!==1)throw Error(v(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(v(171))}if(e.tag===1){var n=e.type;if(xe(n))return ou(e,n,t)}return t}function sc(e,t,n,r,l,i,s,a,u){return e=Ro(n,r,!0,e,l,i,s,a,u),e.context=oc(null),n=e.current,r=ce(),l=mt(n),i=Ye(r,l),i.callback=t??null,ft(n,i,l),e.current.lanes=l,rr(e,l,r),ye(e,r),e}function yl(e,t,n,r){var l=t.current,i=ce(),s=mt(l);return n=oc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ye(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ft(l,t,s),e!==null&&(Re(e,l,s,i),zr(e,l,s)),s}function il(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ks(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Mo(e,t){Ks(e,t),(e=e.alternate)&&Ks(e,t)}function Tp(){return null}var ac=typeof reportError=="function"?reportError:function(e){console.error(e)};function Io(e){this._internalRoot=e}vl.prototype.render=Io.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(v(409));yl(e,t,null,null)};vl.prototype.unmount=Io.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tt(function(){yl(null,e,null,null)}),t[Je]=null}};function vl(e){this._internalRoot=e}vl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Oa();e={blockedOn:null,target:e,priority:t};for(var n=0;n<it.length&&t!==0&&t<it[n].priority;n++);it.splice(n,0,e),n===0&&$a(e)}};function Oo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function kl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Gs(){}function Rp(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var p=il(s);i.call(p)}}var s=sc(t,r,e,0,null,!1,!1,"",Gs);return e._reactRootContainer=s,e[Je]=s.current,Kn(e.nodeType===8?e.parentNode:e),Tt(),s}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var p=il(u);a.call(p)}}var u=Ro(e,0,!1,null,null,!1,!1,"",Gs);return e._reactRootContainer=u,e[Je]=u.current,Kn(e.nodeType===8?e.parentNode:e),Tt(function(){yl(t,u,n,r)}),u}function wl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var s=i;if(typeof l=="function"){var a=l;l=function(){var u=il(s);a.call(u)}}yl(t,s,e,l)}else s=Rp(n,t,e,l,r);return il(s)}Ma=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Cn(t.pendingLanes);n!==0&&(ro(t,n|1),ye(t,Y()),!(R&6)&&(dn=Y()+500,wt()))}break;case 13:Tt(function(){var r=Ze(e,1);if(r!==null){var l=ce();Re(r,e,1,l)}}),Mo(e,1)}};lo=function(e){if(e.tag===13){var t=Ze(e,134217728);if(t!==null){var n=ce();Re(t,e,134217728,n)}Mo(e,134217728)}};Ia=function(e){if(e.tag===13){var t=mt(e),n=Ze(e,t);if(n!==null){var r=ce();Re(n,e,t,r)}Mo(e,t)}};Oa=function(){return M};Ba=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};pi=function(e,t,n){switch(t){case"input":if(ii(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=dl(r);if(!l)throw Error(v(90));xa(r),ii(r,l)}}}break;case"textarea":va(e,n);break;case"select":t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}};ba=Ao;Ea=Tt;var Mp={usingClientEntryPoint:!1,Events:[ir,Qt,dl,Na,Fa,Ao]},Fn={findFiberByHostInstance:bt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ip={bundleType:Fn.bundleType,version:Fn.version,rendererPackageName:Fn.rendererPackageName,rendererConfig:Fn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:et.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Da(e),e===null?null:e.stateNode},findFiberByHostInstance:Fn.findFiberByHostInstance||Tp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sr.isDisabled&&Sr.supportsFiber)try{sl=Sr.inject(Ip),We=Sr}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mp;Se.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oo(t))throw Error(v(200));return Lp(e,t,null,n)};Se.createRoot=function(e,t){if(!Oo(e))throw Error(v(299));var n=!1,r="",l=ac;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Ro(e,1,!1,null,null,n,!1,r,l),e[Je]=t.current,Kn(e.nodeType===8?e.parentNode:e),new Io(t)};Se.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(v(188)):(e=Object.keys(e).join(","),Error(v(268,e)));return e=Da(t),e=e===null?null:e.stateNode,e};Se.flushSync=function(e){return Tt(e)};Se.hydrate=function(e,t,n){if(!kl(t))throw Error(v(200));return wl(null,e,t,!0,n)};Se.hydrateRoot=function(e,t,n){if(!Oo(e))throw Error(v(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",s=ac;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=sc(t,null,e,1,n??null,l,!1,i,s),e[Je]=t.current,Kn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new vl(t)};Se.render=function(e,t,n){if(!kl(t))throw Error(v(200));return wl(null,e,t,!1,n)};Se.unmountComponentAtNode=function(e){if(!kl(e))throw Error(v(40));return e._reactRootContainer?(Tt(function(){wl(null,null,e,!1,function(){e._reactRootContainer=null,e[Je]=null})}),!0):!1};Se.unstable_batchedUpdates=Ao;Se.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!kl(n))throw Error(v(200));if(e==null||e._reactInternals===void 0)throw Error(v(38));return wl(e,t,n,!1,r)};Se.version="18.3.1-next-f1338f8080-20240426";function uc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uc)}catch(e){console.error(e)}}uc(),ua.exports=Se;var Op=ua.exports,Ys=Op;Zl.createRoot=Ys.createRoot,Zl.hydrateRoot=Ys.hydrateRoot;const cc="https://resume-screener-intelligence.onrender.com",Xs=4e4,St=[{key:"overview",eyebrow:"Platform",badge:"01",title:"AI-powered resume screening that shows its work",body:"Sift combines a trained machine-learning model with AI to score every resume against a job description — and explains exactly why, skill by skill.",Illustration:Wp,accent:"#2F8F80"},{key:"score",eyebrow:"ATS Score",badge:"02",title:"A match score you can defend, not just a percentage",body:"Six engineered features — skill overlap, experience, education, field match, and semantic similarity — feed a real trained scikit-learn model. Every number traces back to something real in both documents.",Illustration:Vp,accent:"#2F8F80"},{key:"gap",eyebrow:"Skills Gap",badge:"03",title:"See exactly which skills closed the gap — and which didn't",body:"No opaque model output. Matched skills and missing skills sit side by side so a candidate or recruiter can read the reasoning behind every score at a glance.",Illustration:Qp,accent:"#E2A33D"},{key:"ai",eyebrow:"AI Coach",badge:"04",title:"Resume feedback and interview prep, powered by AI",body:"Candidates get actionable rewrite suggestions tailored to the role they're targeting. An AI career coach is available to chat about interview preparation and skill development.",Illustration:Hp,accent:"#2F8F80"},{key:"recruit",eyebrow:"Recruit",badge:"05",title:"Rank every applicant by real skill match, not keyword frequency",body:"Recruiters search a job title and instantly see every candidate ranked by ATS score, with matched and missing skills visible at a glance — built for the whole hiring pipeline.",Illustration:Kp,accent:"#E2A33D"}];function Bp({onClose:e,onSwitch:t,onSuccess:n}){const[r,l]=E.useState({email:"",password:""}),[i,s]=E.useState(null),[a,u]=E.useState(!1),p=E.useRef(null);E.useEffect(()=>{const h=m=>{m.key==="Escape"&&e()};return document.addEventListener("keydown",h),()=>document.removeEventListener("keydown",h)},[e]);async function g(h){h.preventDefault(),u(!0),s(null);try{const m=await fetch(`${cc}/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r.email,password:r.password})}),y=await m.json();if(!m.ok)throw new Error(y.detail||"Login failed.");n(y.role||"candidate",y.name||"User",y.token||null)}catch(m){const y=m.message||"";y.toLowerCase().includes("not implemented")||y.toLowerCase().includes("failed to fetch")||y.toLowerCase().includes("networkerror")?s("Auth module is not yet active — use Demo Access below to explore the app."):s(y)}finally{u(!1)}}return o.jsx("div",{ref:p,className:"lp-overlay",onClick:h=>{h.target===p.current&&e()},role:"dialog","aria-modal":"true","aria-labelledby":"login-heading",children:o.jsxs("div",{className:"lp-modal",children:[o.jsx("button",{className:"lp-modal-close",onClick:e,"aria-label":"Close dialog",children:o.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:o.jsx("path",{d:"M2 2l12 12M14 2L2 14",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})}),o.jsxs("div",{className:"lp-modal-brand",children:["sift",o.jsx("span",{className:"lp-brand-dot",children:"."})]}),o.jsx("h2",{id:"login-heading",className:"lp-modal-title",children:"Welcome back"}),o.jsx("p",{className:"lp-modal-sub",children:"Sign in to your Sift account"}),o.jsxs("form",{onSubmit:g,className:"lp-form",noValidate:!0,children:[o.jsxs("div",{className:"lp-field",children:[o.jsx("label",{htmlFor:"lp-login-email",children:"Email address"}),o.jsx("input",{id:"lp-login-email",type:"email",value:r.email,onChange:h=>l({...r,email:h.target.value}),placeholder:"you@example.com",autoComplete:"email",required:!0})]}),o.jsxs("div",{className:"lp-field",children:[o.jsx("label",{htmlFor:"lp-login-password",children:"Password"}),o.jsx("input",{id:"lp-login-password",type:"password",value:r.password,onChange:h=>l({...r,password:h.target.value}),placeholder:"••••••••",autoComplete:"current-password",required:!0})]}),i&&o.jsx("p",{className:"lp-form-error",role:"alert",children:i}),o.jsxs("button",{type:"submit",className:"lp-btn lp-btn-primary lp-btn-full",disabled:a,children:[a?o.jsx("span",{className:"lp-spinner","aria-hidden":"true"}):null,a?"Signing in…":"Sign in"]})]}),o.jsx("div",{className:"lp-divider",children:o.jsx("span",{children:"or continue without an account"})}),o.jsxs("div",{className:"lp-demo-group",children:[o.jsx("p",{className:"lp-demo-hint",children:"Demo access — no credentials needed"}),o.jsxs("div",{className:"lp-demo-row",children:[o.jsxs("button",{className:"lp-btn lp-btn-ghost lp-demo-btn",onClick:()=>n("candidate","Demo Candidate",null),children:[o.jsx("span",{className:"lp-demo-icon",children:"👤"})," Candidate"]}),o.jsxs("button",{className:"lp-btn lp-btn-ghost lp-demo-btn",onClick:()=>n("recruiter","Demo Recruiter",null),children:[o.jsx("span",{className:"lp-demo-icon",children:"💼"})," Recruiter"]}),o.jsxs("button",{className:"lp-btn lp-btn-ghost lp-demo-btn",onClick:()=>n("admin","Demo Admin",null),children:[o.jsx("span",{className:"lp-demo-icon",children:"⚙️"})," Admin"]})]})]}),o.jsxs("p",{className:"lp-modal-footer-text",children:["No account yet?"," ",o.jsx("button",{className:"lp-text-btn",onClick:t,children:"Create one →"})]})]})})}function $p({onClose:e,onSwitch:t,onSuccess:n}){const[r,l]=E.useState({name:"",email:"",password:"",role:"candidate"}),[i,s]=E.useState(null),[a,u]=E.useState(!1),p=E.useRef(null);E.useEffect(()=>{const h=m=>{m.key==="Escape"&&e()};return document.addEventListener("keydown",h),()=>document.removeEventListener("keydown",h)},[e]);async function g(h){h.preventDefault(),u(!0),s(null);try{const m=await fetch(`${cc}/auth/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}),y=await m.json();if(!m.ok)throw new Error(y.detail||"Registration failed.");n(r.role,y.name||r.name,y.token||null)}catch(m){const y=m.message||"";y.toLowerCase().includes("not implemented")||y.toLowerCase().includes("failed to fetch")||y.toLowerCase().includes("networkerror")?s("Auth module is not yet active — use Demo Access below to explore the app."):s(y)}finally{u(!1)}}return o.jsx("div",{ref:p,className:"lp-overlay",onClick:h=>{h.target===p.current&&e()},role:"dialog","aria-modal":"true","aria-labelledby":"signup-heading",children:o.jsxs("div",{className:"lp-modal",children:[o.jsx("button",{className:"lp-modal-close",onClick:e,"aria-label":"Close dialog",children:o.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:o.jsx("path",{d:"M2 2l12 12M14 2L2 14",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})}),o.jsxs("div",{className:"lp-modal-brand",children:["sift",o.jsx("span",{className:"lp-brand-dot",children:"."})]}),o.jsx("h2",{id:"signup-heading",className:"lp-modal-title",children:"Create an account"}),o.jsx("p",{className:"lp-modal-sub",children:"Get your first ATS score in minutes"}),o.jsxs("form",{onSubmit:g,className:"lp-form",noValidate:!0,children:[o.jsxs("div",{className:"lp-field",children:[o.jsx("label",{htmlFor:"lp-signup-name",children:"Full name"}),o.jsx("input",{id:"lp-signup-name",type:"text",value:r.name,onChange:h=>l({...r,name:h.target.value}),placeholder:"Alex Johnson",autoComplete:"name",required:!0})]}),o.jsxs("div",{className:"lp-field",children:[o.jsx("label",{htmlFor:"lp-signup-email",children:"Email address"}),o.jsx("input",{id:"lp-signup-email",type:"email",value:r.email,onChange:h=>l({...r,email:h.target.value}),placeholder:"you@example.com",autoComplete:"email",required:!0})]}),o.jsxs("div",{className:"lp-field",children:[o.jsx("label",{htmlFor:"lp-signup-password",children:"Password"}),o.jsx("input",{id:"lp-signup-password",type:"password",value:r.password,onChange:h=>l({...r,password:h.target.value}),placeholder:"Min 8 characters",autoComplete:"new-password",required:!0})]}),o.jsxs("div",{className:"lp-field",children:[o.jsx("label",{htmlFor:"lp-signup-role",children:"I am a"}),o.jsxs("select",{id:"lp-signup-role",value:r.role,onChange:h=>l({...r,role:h.target.value}),children:[o.jsx("option",{value:"candidate",children:"Candidate — looking for a job"}),o.jsx("option",{value:"recruiter",children:"Recruiter — hiring talent"})]})]}),i&&o.jsx("p",{className:"lp-form-error",role:"alert",children:i}),o.jsxs("button",{type:"submit",className:"lp-btn lp-btn-primary lp-btn-full",disabled:a,children:[a?o.jsx("span",{className:"lp-spinner","aria-hidden":"true"}):null,a?"Creating account…":"Create account"]})]}),o.jsx("div",{className:"lp-divider",children:o.jsx("span",{children:"or continue without an account"})}),o.jsxs("div",{className:"lp-demo-group",children:[o.jsx("p",{className:"lp-demo-hint",children:"Demo access — no credentials needed"}),o.jsxs("div",{className:"lp-demo-row",children:[o.jsxs("button",{className:"lp-btn lp-btn-ghost lp-demo-btn",onClick:()=>n("candidate","Demo Candidate",null),children:[o.jsx("span",{className:"lp-demo-icon",children:"👤"})," Candidate"]}),o.jsxs("button",{className:"lp-btn lp-btn-ghost lp-demo-btn",onClick:()=>n("recruiter","Demo Recruiter",null),children:[o.jsx("span",{className:"lp-demo-icon",children:"💼"})," Recruiter"]})]})]}),o.jsxs("p",{className:"lp-modal-footer-text",children:["Already have an account?"," ",o.jsx("button",{className:"lp-text-btn",onClick:t,children:"Sign in →"})]})]})})}function Up({onEnterApp:e}){const[t,n]=E.useState(0),[r,l]=E.useState(0),[i,s]=E.useState(!1),[a,u]=E.useState(!1),[p,g]=E.useState(!1),[h,m]=E.useState(null),y=E.useRef(null);E.useEffect(()=>{var x;const c=window.matchMedia("(prefers-reduced-motion: reduce)");u(c.matches);const f=S=>u(S.matches);return(x=c.addEventListener)==null||x.call(c,"change",f),()=>{var S;return(S=c.removeEventListener)==null?void 0:S.call(c,"change",f)}},[]),E.useEffect(()=>{const c=()=>g(window.scrollY>8);return window.addEventListener("scroll",c,{passive:!0}),()=>window.removeEventListener("scroll",c)},[]),E.useEffect(()=>{if(!(i||a))return y.current=setTimeout(()=>{n(c=>(c+1)%St.length),l(c=>c+1)},Xs),()=>clearTimeout(y.current)},[t,i,a]);const w=E.useCallback(c=>{n(c),l(f=>f+1)},[]),k=E.useCallback(c=>{c.key==="ArrowRight"&&w((t+1)%St.length),c.key==="ArrowLeft"&&w((t-1+St.length)%St.length)},[t,w]);function j(c,f,x){m(null),e(c,f,x)}const d=St[t];return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
        /* ── Reset / Root ── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body.lp-open { overflow: hidden; }

        :root {
          --ink:        #14171F;
          --paper:      #F5F2EA;
          --paper-dim:  #EDE9DD;
          --teal:       #2F8F80;
          --teal-dark:  #1F6459;
          --teal-tint:  #E1F5EE;
          --amber:      #E2A33D;
          --amber-dark: #A66F1E;
          --amber-tint: #FBF0DD;
          --line:       #D9D3C4;
          --line-dark:  rgba(245,242,234,0.15);
          --soft:       #565A66;
          --soft-dark:  rgba(245,242,234,0.65);
          --danger:     #C0392B;
          --font-display: Georgia, 'Iowan Old Style', 'Palatino Linotype', serif;
          --font-body:  -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
          --font-mono:  'SF Mono', 'JetBrains Mono', Consolas, monospace;
          --ease:       cubic-bezier(0.22, 1, 0.36, 1);
          --r-sm:       6px;
          --r-md:       10px;
          --r-lg:       16px;
        }

        /* ── Landing root ── */
        .lp-root {
          background: var(--paper);
          color: var(--ink);
          font-family: var(--font-body);
          line-height: 1.55;
          -webkit-font-smoothing: antialiased;
          min-height: 100vh;
        }
        .lp-root a { color: inherit; text-decoration: none; }
        .lp-root :focus-visible {
          outline: 2px solid var(--teal);
          outline-offset: 3px;
          border-radius: 3px;
        }

        /* ── Skip link ── */
        .lp-skip {
          position: absolute; left: -9999px; top: 0; z-index: 200;
          background: var(--ink); color: var(--paper); padding: 10px 20px;
          border-radius: 0 0 var(--r-sm) 0; font-size: 14px;
        }
        .lp-skip:focus { left: 0; }

        /* ── Nav ── */
        .lp-nav {
          position: sticky; top: 0; z-index: 50;
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 56px;
          background: rgba(245,242,234,0.88);
          backdrop-filter: blur(10px) saturate(1.4);
          border-bottom: 1px solid transparent;
          transition: border-color 0.3s var(--ease), box-shadow 0.3s var(--ease);
        }
        .lp-nav.scrolled {
          border-bottom-color: var(--line);
          box-shadow: 0 2px 20px -8px rgba(20,23,31,0.08);
        }
        .lp-brand {
          font-family: var(--font-display);
          font-size: 22px;
          letter-spacing: 0.01em;
          display: flex; align-items: center;
        }
        .lp-brand-dot { color: var(--teal); }

        .lp-nav-links {
          display: flex; align-items: center; gap: 36px;
          font-size: 14px; color: var(--soft);
        }
        .lp-nav-links a {
          transition: color 0.15s;
          position: relative;
        }
        .lp-nav-links a::after {
          content: ""; position: absolute; bottom: -2px; left: 0; right: 0;
          height: 1.5px; background: var(--teal); border-radius: 2px;
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.2s var(--ease);
        }
        .lp-nav-links a:hover { color: var(--ink); }
        .lp-nav-links a:hover::after { transform: scaleX(1); }

        .lp-nav-actions { display: flex; align-items: center; gap: 10px; }

        /* ── Buttons ── */
        .lp-btn {
          font-family: var(--font-body); font-size: 14px; font-weight: 600;
          border-radius: var(--r-sm); cursor: pointer; border: 1.5px solid transparent;
          padding: 9px 20px;
          transition: transform 0.15s var(--ease), background 0.15s, border-color 0.15s, box-shadow 0.15s;
          display: inline-flex; align-items: center; gap: 7px;
          text-decoration: none;
          line-height: 1;
          white-space: nowrap;
        }
        .lp-btn:active { transform: scale(0.97); }
        .lp-btn-primary {
          background: var(--teal); color: #fff;
          box-shadow: 0 1px 4px rgba(47,143,128,0.25);
        }
        .lp-btn-primary:hover { background: var(--teal-dark); box-shadow: 0 4px 16px rgba(47,143,128,0.35); }
        .lp-btn-ghost {
          background: transparent;
          border-color: var(--line); color: var(--ink);
        }
        .lp-btn-ghost:hover { border-color: var(--ink); background: rgba(20,23,31,0.03); }
        .lp-btn-dark {
          background: var(--ink); color: var(--paper);
          box-shadow: 0 1px 4px rgba(20,23,31,0.20);
        }
        .lp-btn-dark:hover { background: #242836; box-shadow: 0 4px 16px rgba(20,23,31,0.30); }
        .lp-btn-full { width: 100%; justify-content: center; padding: 12px; }
        .lp-btn-lg { padding: 12px 28px; font-size: 15px; }

        /* ── Spinner ── */
        .lp-spinner {
          width: 16px; height: 16px; border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.35);
          border-top-color: #fff;
          animation: lp-spin 0.7s linear infinite;
          flex-shrink: 0;
        }
        @keyframes lp-spin { to { transform: rotate(360deg); } }

        /* ── Hero ── */
        .lp-hero {
          max-width: 1280px; margin: 0 auto; padding: 72px 56px 48px;
          display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center;
        }
        .lp-hero-left { display: flex; flex-direction: column; }

        .lp-eyebrow-row { display: flex; align-items: center; gap: 10px; margin-bottom: 22px; }
        .lp-badge {
          font-family: var(--font-mono); font-size: 11px; color: var(--soft);
          background: var(--paper-dim); border: 1px solid var(--line);
          border-radius: 4px; padding: 2px 7px;
        }
        .lp-eyebrow {
          font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--teal-dark); font-weight: 700;
        }

        .lp-headline {
          font-family: var(--font-display);
          font-size: 46px; line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 22px;
          min-height: 160px;
        }
        .lp-subhead {
          font-size: 17px; color: var(--soft); line-height: 1.65;
          max-width: 480px; margin-bottom: 36px;
          min-height: 88px;
        }

        .lp-hero-ctas { display: flex; gap: 12px; margin-bottom: 44px; flex-wrap: wrap; }

        /* ── Progress track ── */
        .lp-track-row { display: flex; align-items: center; gap: 16px; }
        .lp-tracks { display: flex; gap: 8px; flex: 1; }
        .lp-track-item {
          flex: 1; height: 3px; background: var(--line); border-radius: 3px;
          overflow: hidden; cursor: pointer; position: relative;
        }
        .lp-track-item:hover { background: #C5BFB0; }
        .lp-track-fill {
          position: absolute; inset: 0; width: 0;
          background: var(--teal); border-radius: 3px;
        }
        .lp-track-fill.active {
          animation: lp-track-grow ${Xs}ms linear forwards;
        }
        .lp-track-fill.done { width: 100%; }
        .lp-track-item.paused .lp-track-fill.active { animation-play-state: paused; }
        @keyframes lp-track-grow { from { width: 0; } to { width: 100%; } }
        @media (prefers-reduced-motion: reduce) {
          .lp-track-fill.active { animation: none; width: 100%; }
        }
        .lp-track-counter {
          font-family: var(--font-mono); font-size: 12px; color: var(--soft);
          white-space: nowrap;
        }

        /* ── Illustration stage ── */
        .lp-stage {
          position: relative; border-radius: var(--r-lg);
          background: #fff; border: 1px solid var(--line);
          box-shadow:
            0 2px 4px rgba(20,23,31,0.04),
            0 20px 60px -24px rgba(20,23,31,0.16);
          overflow: hidden;
          aspect-ratio: 4/3;
        }
        .lp-stage svg {
          width: 100%; height: 100%; display: block;
          animation: lp-fadein 0.55s var(--ease);
        }
        @keyframes lp-fadein {
          from { opacity: 0; transform: translateY(8px) scale(0.985); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .lp-stage svg { animation: none; }
        }

        /* ── Proof band ── */
        .lp-proof {
          background: var(--paper-dim);
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }
        .lp-proof-inner {
          max-width: 1280px; margin: 0 auto;
          padding: 32px 56px;
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px;
        }
        .lp-stat-num {
          font-family: var(--font-mono); font-size: 28px; font-weight: 700; color: var(--ink);
        }
        .lp-stat-label { font-size: 13px; color: var(--soft); margin-top: 4px; }

        /* ── How it works (dark) ── */
        .lp-how {
          background: var(--ink); color: var(--paper);
          padding: 96px 56px;
        }
        .lp-how-inner { max-width: 1280px; margin: 0 auto; }
        .lp-section-eyebrow {
          font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.1em;
          text-transform: uppercase; font-weight: 700; margin-bottom: 16px;
        }
        .lp-how .lp-section-eyebrow { color: var(--amber); }
        .lp-how-head { margin-bottom: 52px; max-width: 600px; }
        .lp-how-title {
          font-family: var(--font-display); font-size: 34px; line-height: 1.15;
          margin-bottom: 14px;
        }
        .lp-how-sub { color: var(--soft-dark); font-size: 16px; line-height: 1.65; }

        .lp-dual-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 1px; background: var(--line-dark);
          border-radius: var(--r-md); overflow: hidden;
        }
        .lp-track-card { background: #1C2030; padding: 40px; }
        .lp-track-card-label {
          display: flex; align-items: center; gap: 12px; margin-bottom: 28px;
        }
        .lp-track-num {
          font-family: var(--font-mono); font-size: 11px; font-weight: 700;
          color: var(--ink); background: var(--amber);
          width: 24px; height: 24px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .lp-track-name {
          font-size: 13px; letter-spacing: 0.07em; text-transform: uppercase;
          color: var(--paper); font-weight: 700;
        }
        .lp-track-steps { list-style: none; }
        .lp-track-steps li {
          position: relative; padding-left: 20px;
          color: var(--soft-dark); font-size: 15px; line-height: 1.6;
          margin-bottom: 16px;
        }
        .lp-track-steps li:last-child { margin-bottom: 0; }
        .lp-track-steps li::before {
          content: ""; position: absolute; left: 0; top: 9px;
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--teal);
        }

        /* ── Tech stack ── */
        .lp-tech {
          max-width: 1280px; margin: 0 auto;
          padding: 88px 56px;
          display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center;
        }
        .lp-tech-copy .lp-section-eyebrow { color: var(--teal-dark); }
        .lp-tech-title {
          font-family: var(--font-display); font-size: 30px; line-height: 1.2;
          margin-bottom: 16px;
        }
        .lp-tech-body { color: var(--soft); font-size: 15.5px; line-height: 1.7; margin-bottom: 28px; }
        .lp-pills { display: flex; flex-wrap: wrap; gap: 8px; }
        .lp-pill {
          font-family: var(--font-mono); font-size: 12px; font-weight: 600;
          border-radius: 4px; padding: 5px 12px;
          border: 1.5px solid var(--line); color: var(--ink);
          background: var(--paper-dim);
        }
        .lp-pill.teal { border-color: var(--teal); color: var(--teal-dark); background: var(--teal-tint); }
        .lp-pill.amber { border-color: var(--amber); color: var(--amber-dark); background: var(--amber-tint); }

        .lp-pipeline {
          background: var(--paper-dim); border: 1px solid var(--line);
          border-radius: var(--r-md); padding: 28px;
        }
        .lp-pipeline-step {
          display: flex; align-items: flex-start; gap: 14px; margin-bottom: 20px;
        }
        .lp-pipeline-step:last-child { margin-bottom: 0; }
        .lp-pipeline-icon {
          font-size: 18px; width: 36px; height: 36px;
          background: #fff; border: 1px solid var(--line); border-radius: var(--r-sm);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .lp-pipeline-text strong { display: block; font-size: 14px; font-weight: 600; margin-bottom: 2px; }
        .lp-pipeline-text span { font-size: 13px; color: var(--soft); }
        .lp-pipeline-arrow {
          margin: 4px 0 4px 18px; font-size: 16px; color: var(--line);
          line-height: 1;
        }

        /* ── CTA ── */
        .lp-cta {
          background: var(--ink); color: var(--paper);
          text-align: center; padding: 96px 56px;
        }
        .lp-cta-inner { max-width: 640px; margin: 0 auto; }
        .lp-cta .lp-section-eyebrow { color: var(--amber); }
        .lp-cta-title {
          font-family: var(--font-display); font-size: 38px; line-height: 1.15;
          margin-bottom: 18px;
        }
        .lp-cta-body { color: var(--soft-dark); font-size: 16px; margin-bottom: 36px; line-height: 1.65; }
        .lp-cta-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }

        /* ── Footer ── */
        .lp-footer {
          border-top: 1px solid var(--line);
          background: var(--paper);
        }
        .lp-footer-inner {
          max-width: 1280px; margin: 0 auto; padding: 36px 56px;
          display: flex; align-items: center; justify-content: space-between;
          font-size: 13px; color: var(--soft);
        }
        .lp-footer-links { display: flex; gap: 28px; }
        .lp-footer-links a:hover { color: var(--ink); }
        .lp-footer-right { display: flex; align-items: center; gap: 16px; }

        /* ── Modal overlay ── */
        .lp-overlay {
          position: fixed; inset: 0; z-index: 100;
          background: rgba(14,16,22,0.60);
          backdrop-filter: blur(6px);
          display: flex; align-items: center; justify-content: center;
          padding: 24px;
          animation: lp-overlay-in 0.2s ease;
        }
        @keyframes lp-overlay-in { from { opacity: 0; } to { opacity: 1; } }

        .lp-modal {
          background: var(--paper); border: 1px solid var(--line);
          border-radius: var(--r-lg); padding: 40px;
          width: 100%; max-width: 440px;
          box-shadow: 0 24px 80px -16px rgba(14,16,22,0.45);
          position: relative;
          animation: lp-modal-in 0.3s var(--ease);
        }
        @keyframes lp-modal-in {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        .lp-modal-close {
          position: absolute; top: 18px; right: 18px;
          background: none; border: none; cursor: pointer;
          color: var(--soft); padding: 4px;
          border-radius: var(--r-sm);
          display: flex; align-items: center; justify-content: center;
          transition: color 0.15s, background 0.15s;
        }
        .lp-modal-close:hover { color: var(--ink); background: var(--paper-dim); }

        .lp-modal-brand {
          font-family: var(--font-display); font-size: 20px;
          margin-bottom: 20px; display: inline-flex; align-items: center;
        }
        .lp-modal-title {
          font-family: var(--font-display); font-size: 26px;
          line-height: 1.2; margin-bottom: 6px;
        }
        .lp-modal-sub { color: var(--soft); font-size: 14.5px; margin-bottom: 24px; }

        /* ── Form ── */
        .lp-form { display: flex; flex-direction: column; gap: 16px; }
        .lp-field { display: flex; flex-direction: column; gap: 6px; }
        .lp-field label {
          font-size: 13px; font-weight: 600; color: var(--ink); letter-spacing: 0.01em;
        }
        .lp-field input,
        .lp-field select {
          font-family: var(--font-body); font-size: 14.5px; color: var(--ink);
          background: #fff; border: 1.5px solid var(--line);
          border-radius: var(--r-sm); padding: 10px 14px;
          transition: border-color 0.15s, box-shadow 0.15s;
          width: 100%; appearance: auto;
        }
        .lp-field input:focus,
        .lp-field select:focus {
          outline: none;
          border-color: var(--teal);
          box-shadow: 0 0 0 3px rgba(47,143,128,0.15);
        }
        .lp-field input::placeholder { color: #B0AAA0; }

        .lp-form-error {
          font-size: 13px; color: var(--danger); padding: 10px 14px;
          background: #FFF5F4; border: 1px solid #F5C6C2;
          border-radius: var(--r-sm); line-height: 1.5;
        }

        /* ── Modal divider ── */
        .lp-divider {
          position: relative; text-align: center; margin: 20px 0;
        }
        .lp-divider::before {
          content: ""; position: absolute; top: 50%; left: 0; right: 0;
          height: 1px; background: var(--line);
        }
        .lp-divider span {
          position: relative; background: var(--paper);
          padding: 0 12px; font-size: 12px; color: var(--soft);
        }

        /* ── Demo group ── */
        .lp-demo-group { margin-bottom: 20px; }
        .lp-demo-hint {
          font-size: 12.5px; color: var(--soft); margin-bottom: 10px; text-align: center;
        }
        .lp-demo-row { display: flex; gap: 8px; }
        .lp-demo-btn { flex: 1; justify-content: center; padding: 8px 12px !important; font-size: 13px !important; }
        .lp-demo-icon { font-size: 14px; }

        .lp-modal-footer-text { font-size: 13px; color: var(--soft); text-align: center; }
        .lp-text-btn {
          background: none; border: none; cursor: pointer;
          color: var(--teal-dark); font-weight: 600; font-size: inherit;
          text-decoration: underline; padding: 0;
        }
        .lp-text-btn:hover { color: var(--teal); }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .lp-nav, .lp-hero, .lp-how, .lp-tech, .lp-cta, .lp-proof-inner, .lp-footer-inner {
            padding-left: 28px; padding-right: 28px;
          }
          .lp-hero { grid-template-columns: 1fr; gap: 40px; padding-top: 48px; }
          .lp-headline { font-size: 36px; min-height: 0; }
          .lp-subhead { min-height: 0; }
          .lp-tech { grid-template-columns: 1fr; gap: 40px; }
          .lp-dual-grid { grid-template-columns: 1fr; }
          .lp-proof-inner { grid-template-columns: repeat(2, 1fr); gap: 24px; }
        }
        @media (max-width: 640px) {
          .lp-nav { padding: 16px 20px; }
          .lp-nav-links { display: none; }
          .lp-hero { padding: 36px 20px 32px; }
          .lp-headline { font-size: 28px; }
          .lp-how, .lp-cta { padding: 64px 20px; }
          .lp-tech { padding: 56px 20px; }
          .lp-proof-inner, .lp-footer-inner { padding: 24px 20px; }
          .lp-proof-inner { grid-template-columns: 1fr 1fr; }
          .lp-cta-actions { flex-direction: column; align-items: center; }
          .lp-footer-inner { flex-direction: column; gap: 16px; text-align: center; }
          .lp-modal { padding: 28px 20px; }
          .lp-demo-row { flex-wrap: wrap; }
        }
      `}),h&&o.jsx("style",{children:"body { overflow: hidden; }"}),o.jsxs("div",{className:"lp-root",children:[o.jsx("a",{className:"lp-skip",href:"#lp-main",children:"Skip to main content"}),o.jsxs("nav",{className:`lp-nav${p?" scrolled":""}`,role:"navigation","aria-label":"Main navigation",children:[o.jsxs("div",{className:"lp-brand","aria-label":"Sift home",children:["sift",o.jsx("span",{className:"lp-brand-dot",children:"."})]}),o.jsxs("div",{className:"lp-nav-links",children:[o.jsx("a",{href:"#how-it-works",children:"How it works"}),o.jsx("a",{href:"#for-candidates",children:"Candidates"}),o.jsx("a",{href:"#for-recruiters",children:"Recruiters"}),o.jsx("a",{href:"#tech-stack",children:"Technology"})]}),o.jsxs("div",{className:"lp-nav-actions",children:[o.jsx("button",{className:"lp-btn lp-btn-ghost",id:"nav-login-btn",onClick:()=>m("login"),children:"Log in"}),o.jsx("button",{className:"lp-btn lp-btn-dark",id:"nav-signup-btn",onClick:()=>m("signup"),children:"Sign up free"})]})]}),o.jsxs("main",{id:"lp-main",children:[o.jsxs("section",{className:"lp-hero","aria-label":"Product highlights",onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),onKeyDown:k,children:[o.jsxs("div",{className:"lp-hero-left",children:[o.jsxs("div",{className:"lp-eyebrow-row",children:[o.jsx("span",{className:"lp-badge",children:d.badge}),o.jsx("span",{className:"lp-eyebrow",children:d.eyebrow})]}),o.jsx("h1",{className:"lp-headline",children:d.title}),o.jsx("p",{className:"lp-subhead",children:d.body}),o.jsxs("div",{className:"lp-hero-ctas",children:[o.jsx("button",{className:"lp-btn lp-btn-primary lp-btn-lg",id:"hero-get-started-btn",onClick:()=>m("signup"),children:"Get started free"}),o.jsx("button",{className:"lp-btn lp-btn-ghost lp-btn-lg",id:"hero-demo-btn",onClick:()=>e("candidate"),children:"Try demo →"})]}),o.jsxs("div",{className:"lp-track-row",role:"tablist","aria-label":"Slide navigation",children:[o.jsx("div",{className:"lp-tracks",children:St.map((c,f)=>o.jsx("div",{className:`lp-track-item${i?" paused":""}`,role:"tab",tabIndex:0,"aria-selected":f===t,"aria-label":`${c.eyebrow}: ${c.title}`,onClick:()=>w(f),onKeyDown:x=>{(x.key==="Enter"||x.key===" ")&&(x.preventDefault(),w(f))},children:o.jsx("div",{className:`lp-track-fill${f===t?" active":f<t?" done":""}`},f===t?`active-${r}`:`${c.key}-${f}`)},c.key))}),o.jsxs("span",{className:"lp-track-counter","aria-live":"polite","aria-atomic":"true",children:[t+1," / ",St.length]})]})]}),o.jsx("div",{className:"lp-stage",children:Jl.createElement(d.Illustration,{key:`${d.key}-${r}`})})]}),o.jsx("section",{className:"lp-proof","aria-label":"Platform statistics",children:o.jsx("div",{className:"lp-proof-inner",children:[{num:"170+",label:"Candidates ranked in a single run"},{num:"6",label:"Engineered ML features per score"},{num:"100%",label:"Scores traceable to real skills"},{num:"AI",label:"Model powering feedback and chat"}].map(c=>o.jsxs("div",{children:[o.jsx("div",{className:"lp-stat-num",children:c.num}),o.jsx("div",{className:"lp-stat-label",children:c.label})]},c.num))})}),o.jsx("section",{className:"lp-how",id:"how-it-works","aria-labelledby":"how-heading",children:o.jsxs("div",{className:"lp-how-inner",children:[o.jsxs("div",{className:"lp-how-head",children:[o.jsx("p",{className:"lp-section-eyebrow",children:"How it works"}),o.jsx("h2",{id:"how-heading",className:"lp-how-title",children:"Built for both sides of the hire"}),o.jsx("p",{className:"lp-how-sub",children:"The same comparison engine powers a different view for the person applying and the person hiring — transparent to both."})]}),o.jsxs("div",{className:"lp-dual-grid",children:[o.jsxs("div",{className:"lp-track-card",id:"for-candidates",children:[o.jsxs("div",{className:"lp-track-card-label",children:[o.jsx("span",{className:"lp-track-num",children:"1"}),o.jsx("span",{className:"lp-track-name",children:"Candidate"})]}),o.jsxs("ol",{className:"lp-track-steps",children:[o.jsx("li",{children:"Upload your resume (PDF or DOCX) and paste the job description you're targeting"}),o.jsx("li",{children:"Get an ATS score with a full feature breakdown — cosine similarity, skill overlap, education match, and more"}),o.jsx("li",{children:"See exactly which skills you have and which ones you're missing for that role"}),o.jsx("li",{children:"Receive actionable AI feedback and tailored interview questions"}),o.jsx("li",{children:"Chat with the AI career coach to prepare and improve your application"})]})]}),o.jsxs("div",{className:"lp-track-card",id:"for-recruiters",children:[o.jsxs("div",{className:"lp-track-card-label",children:[o.jsx("span",{className:"lp-track-num",children:"2"}),o.jsx("span",{className:"lp-track-name",children:"Recruiter"})]}),o.jsxs("ol",{className:"lp-track-steps",children:[o.jsx("li",{children:"Search any job title in the recruiter dashboard"}),o.jsx("li",{children:"Every applicant is ranked by their real ATS score — not keyword stuffing"}),o.jsx("li",{children:"See matched and missing skills for each candidate at a glance"}),o.jsx("li",{children:"Admin panel gives full visibility into the skills taxonomy and course catalogue"}),o.jsx("li",{children:"Built to scale: 170+ candidates ranked from a single MongoDB query"})]})]})]})]})}),o.jsx("section",{"aria-labelledby":"tech-heading",id:"tech-stack",children:o.jsxs("div",{className:"lp-tech",children:[o.jsxs("div",{className:"lp-tech-copy",children:[o.jsx("p",{className:"lp-section-eyebrow",style:{color:"var(--teal-dark)"},children:"Under the hood"}),o.jsx("h2",{id:"tech-heading",className:"lp-tech-title",children:"Engineered features, a real trained model, and live AI"}),o.jsx("p",{className:"lp-tech-body",children:"Sift doesn't just count keywords. Six hand-engineered features are computed from every resume–JD pair and passed to a trained scikit-learn model. AI handles the generative feedback and open-ended chat."}),o.jsx("div",{className:"lp-pills",children:[{label:"FastAPI",cls:""},{label:"MongoDB Atlas",cls:""},{label:"scikit-learn",cls:"teal"},{label:"AI Model",cls:"teal"},{label:"React 18",cls:""},{label:"Vite 5",cls:""},{label:"sentence-transformers",cls:"amber"},{label:"pdfplumber",cls:""},{label:"python-docx",cls:""},{label:"joblib",cls:""}].map(c=>o.jsx("span",{className:`lp-pill ${c.cls}`,children:c.label},c.label))})]}),o.jsx("div",{className:"lp-pipeline",children:[{icon:"📄",title:"Resume + Job Description",desc:"PDF or DOCX upload, plain text JD"},{icon:"⚙️",title:"Feature Extraction",desc:"Skill overlap, cosine similarity, education level, field match, experience, positions held"},{icon:"🤖",title:"ML Scoring",desc:"Trained scikit-learn model → 0–100 ATS score"},{icon:"✨",title:"AI",desc:"Structured feedback, interview questions, open-ended career chat with session memory"},{icon:"📊",title:"Results",desc:"Score, matched/missing skills, course recommendations"}].map((c,f,x)=>o.jsxs(Jl.Fragment,{children:[o.jsxs("div",{className:"lp-pipeline-step",children:[o.jsx("div",{className:"lp-pipeline-icon",children:c.icon}),o.jsxs("div",{className:"lp-pipeline-text",children:[o.jsx("strong",{children:c.title}),o.jsx("span",{children:c.desc})]})]}),f<x.length-1&&o.jsx("div",{className:"lp-pipeline-arrow",children:"↓"})]},c.title))})]})}),o.jsx("section",{className:"lp-cta","aria-labelledby":"cta-heading",children:o.jsxs("div",{className:"lp-cta-inner",children:[o.jsx("p",{className:"lp-section-eyebrow",children:"Get started"}),o.jsx("h2",{id:"cta-heading",className:"lp-cta-title",children:"Stop guessing whether you're a fit"}),o.jsx("p",{className:"lp-cta-body",children:"Free to try. Upload your resume against any job description and get your first ATS score, skill breakdown, and AI feedback in under a minute."}),o.jsxs("div",{className:"lp-cta-actions",children:[o.jsx("button",{className:"lp-btn lp-btn-primary lp-btn-lg",id:"cta-score-btn",onClick:()=>m("signup"),children:"Score my resume"}),o.jsx("button",{className:"lp-btn lp-btn-ghost lp-btn-lg",id:"cta-recruiter-btn",style:{color:"var(--paper)",borderColor:"rgba(245,242,234,0.3)"},onClick:()=>e("recruiter"),children:"I'm a recruiter →"})]})]})})]}),o.jsx("footer",{className:"lp-footer",children:o.jsxs("div",{className:"lp-footer-inner",children:[o.jsxs("span",{children:[o.jsx("strong",{style:{fontFamily:"Georgia, serif"},children:"sift."})," — AI Resume & Role Matching Platform"]}),o.jsxs("div",{className:"lp-footer-links",children:[o.jsx("a",{href:"#how-it-works",children:"How it works"}),o.jsx("a",{href:"#for-candidates",children:"Candidates"}),o.jsx("a",{href:"#for-recruiters",children:"Recruiters"}),o.jsx("a",{href:"#tech-stack",children:"Technology"})]}),o.jsx("div",{className:"lp-footer-right",children:o.jsx("span",{style:{fontSize:12},children:"Built with FastAPI + React"})})]})})]}),h==="login"&&o.jsx(Bp,{onClose:()=>m(null),onSwitch:()=>m("signup"),onSuccess:j}),h==="signup"&&o.jsx($p,{onClose:()=>m(null),onSwitch:()=>m("login"),onSuccess:j})]})}function Wp(){return o.jsxs("svg",{viewBox:"0 0 560 420",role:"img","aria-label":"Platform overview: resume and job description flow into a pipeline producing a score, skills, and AI feedback",children:[Array.from({length:7},(e,t)=>o.jsx("line",{x1:"0",y1:60*t+30,x2:"560",y2:60*t+30,stroke:"#F0EDE5",strokeWidth:"1"},`h${t}`)),Array.from({length:10},(e,t)=>o.jsx("line",{x1:56*t+28,y1:"0",x2:56*t+28,y2:"420",stroke:"#F0EDE5",strokeWidth:"1"},`v${t}`)),o.jsx("rect",{x:"32",y:"100",width:"120",height:"160",rx:"8",fill:"#fff",stroke:"#D9D3C4",strokeWidth:"1.5"}),o.jsx("rect",{x:"48",y:"118",width:"60",height:"9",rx:"3",fill:"#14171F"}),o.jsx("rect",{x:"48",y:"138",width:"88",height:"6",rx:"2",fill:"#E0DBD0"}),o.jsx("rect",{x:"48",y:"152",width:"72",height:"6",rx:"2",fill:"#E0DBD0"}),o.jsx("rect",{x:"48",y:"166",width:"80",height:"6",rx:"2",fill:"#E0DBD0"}),o.jsx("rect",{x:"48",y:"186",width:"50",height:"7",rx:"2",fill:"#2F8F80",opacity:"0.7"}),o.jsx("rect",{x:"48",y:"202",width:"88",height:"6",rx:"2",fill:"#E0DBD0"}),o.jsx("rect",{x:"48",y:"218",width:"64",height:"6",rx:"2",fill:"#E0DBD0"}),o.jsx("text",{x:"92",y:"280",textAnchor:"middle",fontFamily:"-apple-system,sans-serif",fontSize:"11",fill:"#565A66",children:"Resume"}),o.jsx("rect",{x:"32",y:"310",width:"120",height:"80",rx:"8",fill:"#fff",stroke:"#D9D3C4",strokeWidth:"1.5"}),o.jsx("rect",{x:"48",y:"326",width:"50",height:"7",rx:"2",fill:"#14171F"}),o.jsx("rect",{x:"48",y:"342",width:"88",height:"5",rx:"2",fill:"#E0DBD0"}),o.jsx("rect",{x:"48",y:"354",width:"72",height:"5",rx:"2",fill:"#E0DBD0"}),o.jsx("rect",{x:"48",y:"366",width:"80",height:"5",rx:"2",fill:"#E0DBD0"}),o.jsx("text",{x:"92",y:"408",textAnchor:"middle",fontFamily:"-apple-system,sans-serif",fontSize:"11",fill:"#565A66",children:"Job Description"}),o.jsx("path",{d:"M152 180 Q192 180 196 210",stroke:"#D9D3C4",strokeWidth:"1.5",fill:"none",strokeDasharray:"4 3"}),o.jsx("path",{d:"M152 350 Q192 350 196 300",stroke:"#D9D3C4",strokeWidth:"1.5",fill:"none",strokeDasharray:"4 3"}),o.jsx("rect",{x:"196",y:"160",width:"168",height:"180",rx:"10",fill:"#F5F2EA",stroke:"#D9D3C4",strokeWidth:"1.5"}),o.jsx("rect",{x:"210",y:"174",width:"140",height:"22",rx:"5",fill:"#2F8F80"}),o.jsx("text",{x:"280",y:"190",textAnchor:"middle",fontFamily:"-apple-system,sans-serif",fontSize:"12",fontWeight:"700",fill:"#fff",children:"Feature Extraction"}),o.jsx("rect",{x:"210",y:"206",width:"140",height:"22",rx:"5",fill:"#1F6459"}),o.jsx("text",{x:"280",y:"222",textAnchor:"middle",fontFamily:"-apple-system,sans-serif",fontSize:"12",fontWeight:"700",fill:"#fff",children:"ML Model"}),o.jsx("rect",{x:"210",y:"238",width:"140",height:"22",rx:"5",fill:"#14171F"}),o.jsx("text",{x:"280",y:"254",textAnchor:"middle",fontFamily:"-apple-system,sans-serif",fontSize:"12",fontWeight:"700",fill:"#F5F2EA",children:"AI"}),o.jsx("rect",{x:"210",y:"270",width:"140",height:"22",rx:"5",fill:"#E2A33D"}),o.jsx("text",{x:"280",y:"286",textAnchor:"middle",fontFamily:"-apple-system,sans-serif",fontSize:"12",fontWeight:"700",fill:"#fff",children:"Session Memory"}),o.jsx("text",{x:"280",y:"332",textAnchor:"middle",fontFamily:"-apple-system,sans-serif",fontSize:"11",fill:"#565A66",children:"Pipeline"}),o.jsx("path",{d:"M364 250 L396 250",stroke:"#2F8F80",strokeWidth:"2",fill:"none"}),o.jsx("polygon",{points:"396,245 406,250 396,255",fill:"#2F8F80"}),o.jsx("rect",{x:"406",y:"90",width:"118",height:"52",rx:"8",fill:"#2F8F80"}),o.jsx("text",{x:"465",y:"112",textAnchor:"middle",fontFamily:"SF Mono,Consolas,monospace",fontSize:"24",fontWeight:"700",fill:"#fff",children:"87"}),o.jsx("text",{x:"465",y:"130",textAnchor:"middle",fontFamily:"-apple-system,sans-serif",fontSize:"11",fill:"rgba(255,255,255,0.75)",children:"ATS Score / 100"}),o.jsx("rect",{x:"406",y:"158",width:"118",height:"100",rx:"8",fill:"#E1F5EE",stroke:"#2F8F80",strokeWidth:"1.5"}),o.jsx("text",{x:"416",y:"176",fontFamily:"-apple-system,sans-serif",fontSize:"11",fontWeight:"700",fill:"#1F6459",children:"✓ Matched"}),["Python","React","SQL"].map((e,t)=>o.jsxs("text",{x:"424",y:194+t*16,fontFamily:"-apple-system,sans-serif",fontSize:"11",fill:"#2F8F80",children:["• ",e]},e)),o.jsx("text",{x:"416",y:"242",fontFamily:"-apple-system,sans-serif",fontSize:"10",fontWeight:"700",fill:"#A66F1E",children:"✗ Docker, AWS"}),o.jsx("rect",{x:"406",y:"274",width:"118",height:"100",rx:"8",fill:"#FBF0DD",stroke:"#E2A33D",strokeWidth:"1.5"}),o.jsx("text",{x:"416",y:"292",fontFamily:"-apple-system,sans-serif",fontSize:"11",fontWeight:"700",fill:"#A66F1E",children:"✦ AI Feedback"}),["Rewrite summary","Add Docker exp.","Prep: system design"].map((e,t)=>o.jsxs("text",{x:"416",y:310+t*16,fontFamily:"-apple-system,sans-serif",fontSize:"10",fill:"#565A66",children:["• ",e]},e)),o.jsx("circle",{cx:"280",cy:"250",r:"90",fill:"url(#ov-glow)",opacity:"0.12"}),o.jsx("defs",{children:o.jsxs("radialGradient",{id:"ov-glow",cx:"50%",cy:"50%",r:"50%",children:[o.jsx("stop",{offset:"0%",stopColor:"#2F8F80"}),o.jsx("stop",{offset:"100%",stopColor:"#2F8F80",stopOpacity:"0"})]})})]})}function Vp(){return o.jsxs("svg",{viewBox:"0 0 560 420",role:"img","aria-label":"Resume and job description compared, producing a match score of 87 out of 100",children:[o.jsx("rect",{x:"48",y:"60",width:"160",height:"250",rx:"8",fill:"#fff",stroke:"#D9D3C4",strokeWidth:"1.5"}),o.jsx("rect",{x:"68",y:"80",width:"80",height:"11",rx:"3",fill:"#14171F"}),[104,124,144,164,184,204,224,244,268,284].map((e,t)=>o.jsx("rect",{x:"68",y:e,width:t%3===1?80:110,height:"7",rx:"2",fill:t===3?"#2F8F80":"#E0DBD0",opacity:t===3?.8:1},e)),o.jsx("text",{x:"128",y:"330",textAnchor:"middle",fontFamily:"-apple-system,sans-serif",fontSize:"12",fill:"#565A66",children:"Resume.pdf"}),o.jsx("rect",{x:"352",y:"60",width:"160",height:"250",rx:"8",fill:"#fff",stroke:"#D9D3C4",strokeWidth:"1.5"}),o.jsx("rect",{x:"372",y:"80",width:"80",height:"11",rx:"3",fill:"#14171F"}),[104,124,144,164,184,204,224,244,268,284].map((e,t)=>o.jsx("rect",{x:"372",y:e,width:t%4===2?70:110,height:"7",rx:"2",fill:t===5?"#E2A33D":"#E0DBD0",opacity:t===5?.8:1},e)),o.jsx("text",{x:"432",y:"330",textAnchor:"middle",fontFamily:"-apple-system,sans-serif",fontSize:"12",fill:"#565A66",children:"Job Description"}),o.jsx("line",{x1:"208",y1:"185",x2:"252",y2:"185",stroke:"#D9D3C4",strokeWidth:"1.5",strokeDasharray:"4 3"}),o.jsx("line",{x1:"308",y1:"185",x2:"352",y2:"185",stroke:"#D9D3C4",strokeWidth:"1.5",strokeDasharray:"4 3"}),o.jsx("circle",{cx:"280",cy:"185",r:"56",fill:"#F5F2EA",stroke:"#2F8F80",strokeWidth:"2.5"}),o.jsx("circle",{cx:"280",cy:"185",r:"48",fill:"none",stroke:"#E1F5EE",strokeWidth:"1"}),o.jsx("text",{x:"280",y:"196",textAnchor:"middle",fontFamily:"SF Mono,Consolas,monospace",fontSize:"30",fontWeight:"700",fill:"#1F6459",children:"87"}),o.jsx("text",{x:"280",y:"214",textAnchor:"middle",fontFamily:"-apple-system,sans-serif",fontSize:"11",fill:"#565A66",children:"/ 100"}),o.jsx("g",{transform:"translate(80,350)",children:[{label:"Skill overlap",pct:.72,c:"#2F8F80"},{label:"Cosine sim",pct:.88,c:"#2F8F80"},{label:"Education",pct:1,c:"#1F6459"},{label:"Field match",pct:1,c:"#1F6459"},{label:"Experience",pct:.5,c:"#E2A33D"}].map((e,t)=>o.jsxs("g",{transform:`translate(${t*80}, 0)`,children:[o.jsx("rect",{x:"0",y:-50*e.pct,width:"52",height:50*e.pct,rx:"4",fill:e.c,opacity:"0.85"}),o.jsx("text",{x:"26",y:"14",textAnchor:"middle",fontFamily:"-apple-system,sans-serif",fontSize:"9",fill:"#565A66",children:e.label})]},e.label))})]})}function Qp(){const e=["Python","React","SQL","FastAPI","pandas"],t=["Docker","AWS","Kubernetes"];return o.jsxs("svg",{viewBox:"0 0 560 420",role:"img","aria-label":"Matched skills shown in teal, missing skills outlined in amber",children:[o.jsx("text",{x:"72",y:"60",fontFamily:"-apple-system,sans-serif",fontSize:"14",fontWeight:"700",fill:"#1F6459",children:"✓ Matched Skills"}),o.jsx("text",{x:"320",y:"60",fontFamily:"-apple-system,sans-serif",fontSize:"14",fontWeight:"700",fill:"#A66F1E",children:"✗ Missing Skills"}),o.jsx("line",{x1:"296",y1:"40",x2:"296",y2:"400",stroke:"#E0DBD0",strokeWidth:"1",strokeDasharray:"4 3"}),e.map((n,r)=>{const l=n.length*9+40;return o.jsxs("g",{children:[o.jsx("rect",{x:"72",y:80+r*56,width:l,height:"36",rx:"18",fill:"#2F8F80"}),o.jsx("text",{x:72+l/2,y:80+r*56+23,textAnchor:"middle",fontFamily:"-apple-system,sans-serif",fontSize:"13",fontWeight:"600",fill:"#fff",children:n})]},n)}),t.map((n,r)=>{const l=n.length*9+40;return o.jsxs("g",{children:[o.jsx("rect",{x:"320",y:80+r*56,width:l,height:"36",rx:"18",fill:"#FBF0DD",stroke:"#E2A33D",strokeWidth:"2"}),o.jsx("text",{x:320+l/2,y:80+r*56+23,textAnchor:"middle",fontFamily:"-apple-system,sans-serif",fontSize:"13",fontWeight:"600",fill:"#A66F1E",children:n})]},n)}),o.jsx("rect",{x:"72",y:"370",width:"190",height:"30",rx:"6",fill:"#E1F5EE",stroke:"#2F8F80",strokeWidth:"1.5"}),o.jsx("text",{x:"167",y:"390",textAnchor:"middle",fontFamily:"SF Mono,Consolas,monospace",fontSize:"12",fontWeight:"700",fill:"#1F6459",children:"Overlap: 5 / 8 skills (62.5%)"})]})}function Hp(){const e=[{role:"user",text:"Why is my score only 71?"},{role:"ai",text:"Your resume is missing Docker and AWS — both required by this role. Adding cloud deployment experience could push your score above 85."},{role:"user",text:"What questions should I prepare?"},{role:"ai",text:"Expect: system design at scale, CI/CD pipeline setup, and how you'd containerise a FastAPI service."}];return o.jsxs("svg",{viewBox:"0 0 560 420",role:"img","aria-label":"AI career coach chat interface with resume feedback and interview questions",children:[o.jsx("rect",{x:"48",y:"28",width:"464",height:"364",rx:"12",fill:"#fff",stroke:"#D9D3C4",strokeWidth:"1.5"}),o.jsx("rect",{x:"48",y:"28",width:"464",height:"52",rx:"12",fill:"#14171F"}),o.jsx("rect",{x:"48",y:"60",width:"464",height:"20",rx:"0",fill:"#14171F"}),o.jsx("circle",{cx:"80",cy:"54",r:"14",fill:"#2F8F80"}),o.jsx("text",{x:"80",y:"59",textAnchor:"middle",fontFamily:"-apple-system,sans-serif",fontSize:"14",fill:"#fff",children:"✦"}),o.jsx("text",{x:"104",y:"50",fontFamily:"-apple-system,sans-serif",fontSize:"13",fontWeight:"700",fill:"#F5F2EA",children:"AI Career Coach"}),o.jsx("text",{x:"104",y:"66",fontFamily:"-apple-system,sans-serif",fontSize:"11",fill:"rgba(245,242,234,0.55)",children:"Powered by AI · Session active"}),e.map((t,n)=>{const r=t.role==="user",l=100+n*72,i=300,s=t.text.length,a=Math.min(i,s*6.2+24),p=20+Math.ceil(s*6.2/i)*18,g=r?408-a:64;return o.jsxs("g",{children:[o.jsx("rect",{x:g,y:l,width:a,height:p,rx:"10",fill:r?"#2F8F80":"#F5F2EA",stroke:r?"none":"#E8E3D9",strokeWidth:"1"}),o.jsx("foreignObject",{x:g+8,y:l+6,width:a-16,height:p-8,children:o.jsx("div",{xmlns:"http://www.w3.org/1999/xhtml",style:{fontSize:"11px",color:r?"#fff":"#14171F",fontFamily:"-apple-system,sans-serif",lineHeight:"1.5",overflow:"hidden"},children:t.text})})]},n)}),o.jsx("rect",{x:"64",y:"356",width:"360",height:"28",rx:"6",fill:"#F5F2EA",stroke:"#D9D3C4",strokeWidth:"1.5"}),o.jsx("text",{x:"78",y:"375",fontFamily:"-apple-system,sans-serif",fontSize:"11",fill:"#B0AAA0",children:"Ask about your resume, interview prep…"}),o.jsx("rect",{x:"432",y:"356",width:"64",height:"28",rx:"6",fill:"#2F8F80"}),o.jsx("text",{x:"464",y:"375",textAnchor:"middle",fontFamily:"-apple-system,sans-serif",fontSize:"12",fontWeight:"700",fill:"#fff",children:"Send"})]})}function Kp(){const e=[{rank:1,score:94.2,matched:["Python","React","SQL","Docker"],missing:[]},{rank:2,score:87.1,matched:["Python","SQL","FastAPI"],missing:["Docker"]},{rank:3,score:71.5,matched:["Python","React"],missing:["SQL","Docker","AWS"]},{rank:4,score:58,matched:["React"],missing:["Python","SQL","Docker","AWS"]}];return o.jsxs("svg",{viewBox:"0 0 560 420",role:"img","aria-label":"Recruiter dashboard showing candidates ranked by ATS score with matched and missing skills",children:[o.jsx("rect",{x:"48",y:"28",width:"320",height:"36",rx:"6",fill:"#fff",stroke:"#D9D3C4",strokeWidth:"1.5"}),o.jsx("text",{x:"64",y:"51",fontFamily:"-apple-system,sans-serif",fontSize:"13",fill:"#B0AAA0",children:'Search job title… "AI Engineer"'}),o.jsx("rect",{x:"380",y:"28",width:"132",height:"36",rx:"6",fill:"#2F8F80"}),o.jsx("text",{x:"446",y:"51",textAnchor:"middle",fontFamily:"-apple-system,sans-serif",fontSize:"13",fontWeight:"700",fill:"#fff",children:"Search Candidates"}),o.jsx("rect",{x:"48",y:"80",width:"464",height:"30",rx:"4",fill:"#F0ECE3"}),["#","ATS Score","Matched Skills","Missing"].map((t,n)=>{const r=[68,110,200,420];return o.jsx("text",{x:r[n],y:100,fontFamily:"-apple-system,sans-serif",fontSize:"11",fontWeight:"700",fill:"#565A66",children:t},t)}),e.map((t,n)=>{const r=120+n*66,l=t.score/100,i=l>.85?"#2F8F80":l>.65?"#E2A33D":"#C0392B";return o.jsxs("g",{children:[o.jsx("rect",{x:"48",y:r,width:"464",height:"58",rx:"6",fill:n%2===0?"#fff":"#FAFAF8",stroke:"#F0ECE3",strokeWidth:"1"}),o.jsx("circle",{cx:"68",cy:r+29,r:"12",fill:t.rank===1?"#2F8F80":"#E8E3D9"}),o.jsx("text",{x:"68",y:r+34,textAnchor:"middle",fontFamily:"SF Mono,Consolas,monospace",fontSize:"11",fontWeight:"700",fill:t.rank===1?"#fff":"#565A66",children:t.rank}),o.jsx("text",{x:"110",y:r+22,fontFamily:"SF Mono,Consolas,monospace",fontSize:"18",fontWeight:"700",fill:i,children:t.score}),o.jsx("rect",{x:"110",y:r+28,width:"72",height:"4",rx:"2",fill:"#E8E3D9"}),o.jsx("rect",{x:"110",y:r+28,width:72*l,height:"4",rx:"2",fill:i}),o.jsx("text",{x:"200",y:r+28,fontFamily:"-apple-system,sans-serif",fontSize:"11",fill:"#2F8F80",children:t.matched.join(", ")}),o.jsx("text",{x:"420",y:r+28,fontFamily:"-apple-system,sans-serif",fontSize:"11",fill:"#E2A33D",children:t.missing.length>0?t.missing.join(", "):"—"})]},t.rank)}),o.jsx("text",{x:"48",y:"406",fontFamily:"-apple-system,sans-serif",fontSize:"11",fill:"#565A66",children:'Showing 4 of 170 candidates ranked for "AI Engineer"'})]})}const dc="https://resume-screener-intelligence.onrender.com";async function Gp(e,t){const n=new FormData;n.append("resume",e),n.append("job_description",t);const r=await fetch(`${dc}/resumes/score`,{method:"POST",body:n});if(!r.ok){const l=await r.json().catch(()=>({}));throw new Error(l.detail||`Request failed with status ${r.status}`)}return r.json()}async function Yp(e){const t=await fetch(`${dc}/candidates/${encodeURIComponent(e)}`);if(!t.ok)throw new Error(`Request failed with status ${t.status}`);return t.json()}const Xl="http://127.0.0.1:8000",Xp=`
  .cd-root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
    color: #14171F;
    -webkit-font-smoothing: antialiased;
  }

  /* ── Upload card ── */
  .cd-upload-card {
    background: #fff;
    border: 1px solid #D9D3C4;
    border-radius: 12px;
    padding: 32px;
    margin-bottom: 24px;
    box-shadow: 0 1px 3px rgba(20,23,31,0.04), 0 8px 24px -12px rgba(20,23,31,0.08);
  }
  .cd-card-title {
    font-family: Georgia, serif;
    font-size: 22px;
    font-weight: 400;
    margin-bottom: 6px;
    color: #14171F;
  }
  .cd-card-sub {
    font-size: 14px;
    color: #565A66;
    margin-bottom: 24px;
  }

  .cd-drop-zone {
    border: 2px dashed #D9D3C4;
    border-radius: 10px;
    padding: 28px 24px;
    text-align: center;
    cursor: pointer;
    transition: border-color 0.2s, background 0.2s;
    margin-bottom: 20px;
    background: #FAFAF8;
    position: relative;
  }
  .cd-drop-zone.has-file { border-color: #2F8F80; background: #E1F5EE; }
  .cd-drop-zone:hover { border-color: #2F8F80; background: #F0FAF8; }
  .cd-drop-zone input[type="file"] {
    position: absolute; inset: 0; opacity: 0; cursor: pointer; width: 100%; height: 100%;
  }
  .cd-drop-icon { font-size: 32px; margin-bottom: 8px; }
  .cd-drop-text { font-size: 14px; color: #565A66; line-height: 1.5; }
  .cd-drop-text strong { color: #14171F; }
  .cd-file-name {
    font-size: 13px; color: #1F6459; font-weight: 600; margin-top: 6px;
    display: flex; align-items: center; justify-content: center; gap: 6px;
  }

  .cd-jd-label { font-size: 13px; font-weight: 600; color: #14171F; margin-bottom: 8px; display: block; }
  .cd-jd-textarea {
    width: 100%; font-family: inherit; font-size: 14px; color: #14171F;
    border: 1.5px solid #D9D3C4; border-radius: 8px; padding: 12px 14px;
    resize: vertical; min-height: 130px; line-height: 1.6;
    transition: border-color 0.2s, box-shadow 0.2s;
    background: #fff;
  }
  .cd-jd-textarea:focus {
    outline: none; border-color: #2F8F80;
    box-shadow: 0 0 0 3px rgba(47,143,128,0.15);
  }
  .cd-jd-textarea::placeholder { color: #B0AAA0; }

  .cd-submit-row { display: flex; gap: 12px; margin-top: 20px; align-items: center; }
  .cd-submit-btn {
    font-family: inherit; font-size: 15px; font-weight: 700;
    background: #2F8F80; color: #fff; border: none;
    border-radius: 8px; padding: 13px 28px; cursor: pointer;
    transition: background 0.15s, box-shadow 0.15s, transform 0.1s;
    display: flex; align-items: center; gap: 10px;
    box-shadow: 0 1px 4px rgba(47,143,128,0.25);
  }
  .cd-submit-btn:hover:not(:disabled) {
    background: #1F6459;
    box-shadow: 0 4px 16px rgba(47,143,128,0.35);
  }
  .cd-submit-btn:active:not(:disabled) { transform: scale(0.97); }
  .cd-submit-btn:disabled { background: #9ca3af; cursor: not-allowed; box-shadow: none; }
  .cd-spin {
    width: 16px; height: 16px; border-radius: 50%;
    border: 2px solid rgba(255,255,255,0.35); border-top-color: #fff;
    animation: cd-spin 0.7s linear infinite; flex-shrink: 0;
  }
  @keyframes cd-spin { to { transform: rotate(360deg); } }
  .cd-error-pill {
    background: #FFF0EE; border: 1px solid #F5C6C2; color: #C0392B;
    border-radius: 6px; padding: 10px 16px; font-size: 13.5px; line-height: 1.5;
    margin-top: 12px;
  }

  /* ── Score card ── */
  .cd-score-card {
    background: #14171F; border-radius: 12px; padding: 32px;
    margin-bottom: 24px; color: #F5F2EA;
    display: grid; grid-template-columns: auto 1fr; gap: 32px; align-items: center;
    box-shadow: 0 8px 32px -8px rgba(20,23,31,0.5);
  }
  @media (max-width: 600px) {
    .cd-score-card { grid-template-columns: 1fr; text-align: center; }
    .cd-score-ring-wrap { display: flex; justify-content: center; }
  }
  .cd-score-ring-wrap { position: relative; width: 120px; height: 120px; }
  .cd-score-ring-svg { width: 120px; height: 120px; transform: rotate(-90deg); }
  .cd-score-ring-bg { fill: none; stroke: rgba(245,242,234,0.1); stroke-width: 8; }
  .cd-score-ring-fill {
    fill: none; stroke-width: 8; stroke-linecap: round;
    transition: stroke-dashoffset 1.2s cubic-bezier(0.22,1,0.36,1);
  }
  .cd-score-label {
    position: absolute; inset: 0; display: flex;
    flex-direction: column; align-items: center; justify-content: center;
  }
  .cd-score-num {
    font-family: 'SF Mono', Consolas, monospace;
    font-size: 32px; font-weight: 700; line-height: 1;
  }
  .cd-score-max { font-size: 11px; color: rgba(245,242,234,0.5); }

  .cd-score-right {}
  .cd-score-verdict {
    font-family: Georgia, serif; font-size: 22px; margin-bottom: 8px;
  }
  .cd-score-explain { font-size: 14px; color: rgba(245,242,234,0.65); margin-bottom: 16px; line-height: 1.6; }
  .cd-feature-grid {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;
  }
  @media (max-width: 600px) { .cd-feature-grid { grid-template-columns: repeat(2, 1fr); } }
  .cd-feature-chip {
    background: rgba(245,242,234,0.07); border-radius: 6px; padding: 8px 10px;
  }
  .cd-feature-name { font-size: 10px; color: rgba(245,242,234,0.5); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 2px; }
  .cd-feature-val { font-family: 'SF Mono', Consolas, monospace; font-size: 14px; font-weight: 700; }

  /* ── Skills card ── */
  .cd-skills-card {
    display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;
  }
  @media (max-width: 640px) { .cd-skills-card { grid-template-columns: 1fr; } }
  .cd-skills-panel {
    background: #fff; border: 1px solid #D9D3C4; border-radius: 12px; padding: 24px;
    box-shadow: 0 1px 3px rgba(20,23,31,0.04);
  }
  .cd-skills-head {
    display: flex; align-items: center; gap: 8px; margin-bottom: 14px;
    font-size: 13px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase;
  }
  .cd-skills-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
  .cd-skill-pills { display: flex; flex-wrap: wrap; gap: 8px; }
  .cd-skill-pill {
    font-size: 13px; font-weight: 600; border-radius: 20px; padding: 5px 14px;
  }
  .cd-skill-pill.matched { background: #E1F5EE; color: #1F6459; border: 1px solid #2F8F80; }
  .cd-skill-pill.missing { background: #FBF0DD; color: #A66F1E; border: 1px solid #E2A33D; }
  .cd-skills-empty { font-size: 13.5px; color: #565A66; font-style: italic; }

  /* ── AI Feedback card ── */
  .cd-ai-card {
    background: #fff; border: 1px solid #D9D3C4; border-radius: 12px;
    padding: 28px 32px; margin-bottom: 24px;
    box-shadow: 0 1px 3px rgba(20,23,31,0.04), 0 8px 24px -12px rgba(20,23,31,0.08);
  }
  .cd-ai-header {
    display: flex; align-items: center; justify-content: space-between;
    margin-bottom: 20px; flex-wrap: wrap; gap: 12px;
  }
  .cd-ai-title-row { display: flex; align-items: center; gap: 10px; }
  .cd-ai-icon {
    width: 36px; height: 36px; border-radius: 8px;
    background: #14171F; color: #F5F2EA;
    display: flex; align-items: center; justify-content: center; font-size: 16px;
    flex-shrink: 0;
  }
  .cd-ai-title { font-family: Georgia, serif; font-size: 20px; }
  .cd-ai-btn {
    font-family: inherit; font-size: 13px; font-weight: 600;
    border: 1.5px solid #D9D3C4; border-radius: 7px;
    background: transparent; color: #14171F; padding: 8px 18px; cursor: pointer;
    transition: border-color 0.15s, background 0.15s;
    display: flex; align-items: center; gap: 7px;
  }
  .cd-ai-btn:hover:not(:disabled) { border-color: #2F8F80; color: #1F6459; background: #E1F5EE; }
  .cd-ai-btn:disabled { color: #9ca3af; cursor: not-allowed; }
  .cd-ai-btn.primary { background: #2F8F80; border-color: #2F8F80; color: #fff; }
  .cd-ai-btn.primary:hover:not(:disabled) { background: #1F6459; border-color: #1F6459; }

  .cd-feedback-list { list-style: none; display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px; }
  .cd-feedback-item {
    display: flex; gap: 12px; align-items: flex-start;
    background: #FAFAF8; border: 1px solid #EDE9DD; border-radius: 8px; padding: 13px 16px;
  }
  .cd-feedback-num {
    width: 22px; height: 22px; border-radius: 50%;
    background: #2F8F80; color: #fff;
    display: flex; align-items: center; justify-content: center;
    font-size: 11px; font-weight: 700; flex-shrink: 0; margin-top: 1px;
  }
  .cd-feedback-text { font-size: 14.5px; color: #14171F; line-height: 1.6; }

  .cd-iq-divider {
    height: 1px; background: #EDE9DD; margin: 20px 0;
  }
  .cd-iq-label {
    font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
    color: #565A66; margin-bottom: 12px;
  }
  .cd-iq-list { list-style: none; display: flex; flex-direction: column; gap: 8px; }
  .cd-iq-item {
    display: flex; gap: 12px; align-items: flex-start;
    background: #FBF0DD; border: 1px solid #E2A33D; border-radius: 8px; padding: 13px 16px;
  }
  .cd-iq-num {
    font-family: 'SF Mono', Consolas, monospace;
    font-size: 11px; font-weight: 700; color: #A66F1E; white-space: nowrap; margin-top: 2px;
  }
  .cd-iq-text { font-size: 14.5px; color: #14171F; line-height: 1.6; }

  /* ── Chat ── */
  .cd-chat-card {
    background: #fff; border: 1px solid #D9D3C4; border-radius: 12px;
    overflow: hidden; margin-bottom: 24px;
    box-shadow: 0 1px 3px rgba(20,23,31,0.04), 0 8px 24px -12px rgba(20,23,31,0.08);
  }
  .cd-chat-header {
    background: #14171F; padding: 16px 24px;
    display: flex; align-items: center; gap: 12px;
  }
  .cd-chat-avatar {
    width: 32px; height: 32px; border-radius: 50%;
    background: #2F8F80; display: flex; align-items: center; justify-content: center;
    font-size: 14px; flex-shrink: 0;
  }
  .cd-chat-header-text {}
  .cd-chat-header-name { font-size: 14px; font-weight: 700; color: #F5F2EA; }
  .cd-chat-header-sub { font-size: 12px; color: rgba(245,242,234,0.5); }
  .cd-chat-indicator {
    width: 8px; height: 8px; border-radius: 50%; background: #2F8F80;
    margin-left: auto; box-shadow: 0 0 0 2px rgba(47,143,128,0.3);
    animation: cd-pulse 2s ease-in-out infinite;
  }
  @keyframes cd-pulse {
    0%, 100% { box-shadow: 0 0 0 2px rgba(47,143,128,0.3); }
    50% { box-shadow: 0 0 0 5px rgba(47,143,128,0.1); }
  }

  .cd-chat-messages {
    max-height: 340px; overflow-y: auto; padding: 20px 24px;
    display: flex; flex-direction: column; gap: 12px;
    scroll-behavior: smooth;
  }
  .cd-chat-messages::-webkit-scrollbar { width: 5px; }
  .cd-chat-messages::-webkit-scrollbar-track { background: transparent; }
  .cd-chat-messages::-webkit-scrollbar-thumb { background: #D9D3C4; border-radius: 3px; }

  .cd-chat-empty {
    text-align: center; padding: 20px;
    font-size: 13.5px; color: #B0AAA0; font-style: italic;
  }

  .cd-msg { display: flex; flex-direction: column; }
  .cd-msg.user { align-items: flex-end; }
  .cd-msg.model { align-items: flex-start; }
  .cd-msg-bubble {
    max-width: 78%; padding: 11px 16px; border-radius: 16px; font-size: 14.5px; line-height: 1.6;
    white-space: pre-wrap;
  }
  .cd-msg.user .cd-msg-bubble {
    background: #2F8F80; color: #fff; border-bottom-right-radius: 4px;
  }
  .cd-msg.model .cd-msg-bubble {
    background: #F5F2EA; color: #14171F; border: 1px solid #D9D3C4;
    border-bottom-left-radius: 4px;
  }
  .cd-chat-typing {
    display: flex; gap: 4px; align-items: center; padding: 11px 16px;
    background: #F5F2EA; border: 1px solid #D9D3C4; border-radius: 16px;
    border-bottom-left-radius: 4px; width: fit-content;
  }
  .cd-typing-dot {
    width: 6px; height: 6px; border-radius: 50%; background: #B0AAA0;
    animation: cd-typing 1.2s ease-in-out infinite;
  }
  .cd-typing-dot:nth-child(2) { animation-delay: 0.2s; }
  .cd-typing-dot:nth-child(3) { animation-delay: 0.4s; }
  @keyframes cd-typing { 0%, 60%, 100% { transform: translateY(0); } 30% { transform: translateY(-6px); } }

  .cd-chat-input-row {
    display: flex; gap: 0; border-top: 1px solid #EDE9DD;
  }
  .cd-chat-input {
    flex: 1; font-family: inherit; font-size: 14px; color: #14171F;
    border: none; padding: 14px 18px; background: #fff; resize: none;
    line-height: 1.5;
  }
  .cd-chat-input:focus { outline: none; }
  .cd-chat-input::placeholder { color: #B0AAA0; }
  .cd-chat-send {
    font-family: inherit; font-size: 13px; font-weight: 700;
    background: #2F8F80; color: #fff; border: none;
    padding: 0 20px; cursor: pointer;
    transition: background 0.15s;
    flex-shrink: 0;
  }
  .cd-chat-send:hover:not(:disabled) { background: #1F6459; }
  .cd-chat-send:disabled { background: #D9D3C4; cursor: not-allowed; }

  /* ── Course recs ── */
  .cd-courses-card {
    background: #fff; border: 1px solid #D9D3C4; border-radius: 12px;
    padding: 24px 28px; margin-bottom: 24px;
    box-shadow: 0 1px 3px rgba(20,23,31,0.04);
  }
  .cd-courses-title { font-family: Georgia, serif; font-size: 18px; margin-bottom: 14px; }
  .cd-courses-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 12px; }
  .cd-course-item {
    border: 1px solid #EDE9DD; border-radius: 8px; padding: 14px 16px;
    background: #FAFAF8; transition: border-color 0.15s;
  }
  .cd-course-item:hover { border-color: #2F8F80; }
  .cd-course-cat { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #565A66; margin-bottom: 4px; }
  .cd-course-title { font-size: 14px; font-weight: 600; color: #14171F; margin-bottom: 4px; line-height: 1.4; }
  .cd-course-meta { font-size: 12px; color: #565A66; }
  .cd-course-link { color: #2F8F80; text-decoration: none; font-weight: 600; font-size: 12px; display: inline-block; margin-top: 6px; }
  .cd-course-link:hover { color: #1F6459; text-decoration: underline; }
`;function Jp({score:e}){const n=2*Math.PI*46,r=Math.min(Math.max(e,0),100)/100,l=e>=80?"#2F8F80":e>=60?"#E2A33D":"#C0392B";return o.jsxs("div",{className:"cd-score-ring-wrap",children:[o.jsxs("svg",{className:"cd-score-ring-svg",viewBox:"0 0 120 120",children:[o.jsx("circle",{className:"cd-score-ring-bg",cx:"60",cy:"60",r:46}),o.jsx("circle",{className:"cd-score-ring-fill",cx:"60",cy:"60",r:46,stroke:l,strokeDasharray:n,strokeDashoffset:n-n*r})]}),o.jsxs("div",{className:"cd-score-label",children:[o.jsx("span",{className:"cd-score-num",style:{color:l},children:Math.round(e)}),o.jsx("span",{className:"cd-score-max",children:"/ 100"})]})]})}function Zp(){var G,jt,Oe,It;const[e,t]=E.useState(null),[n,r]=E.useState(""),[l,i]=E.useState(!1),[s,a]=E.useState(null),[u,p]=E.useState(null),[g,h]=E.useState(null),[m,y]=E.useState([]),[w,k]=E.useState(null),[j,d]=E.useState(!1),[c,f]=E.useState(null),[x,S]=E.useState([]),[b,C]=E.useState(""),[z,$]=E.useState(!1),[P,fe]=E.useState(null),Ie=E.useRef(null),[tt,mn]=E.useState([]);async function jl(D){var T;if(D.preventDefault(),!e){a("Please select a resume file.");return}if(!n.trim()){a("Please paste a job description.");return}i(!0),a(null),p(null),h(null),y([]),S([]),mn([]),k(null);try{const ae=await Gp(e,n);p(ae),(T=ae.missing_skills)!=null&&T.length&&gn(ae.missing_skills)}catch(ae){a(ae.message)}finally{i(!1)}}async function gn(D){try{const T=await fetch(`${Xl}/courses/recommend`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({missing_skills:D})});if(T.ok){const ae=await T.json();mn(ae.courses||ae)}}catch{}}async function xn(){if(u){d(!0),f(null);try{const D=await fetch(`${Xl}/ai/feedback`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({resume_text:u.resume_text,job_description:n,session_id:w})}),T=await D.json();if(!D.ok)throw new Error(T.detail||"AI feedback failed.");h(T.feedback),y(T.interview_questions),k(T.session_id)}catch(D){f(D.message)}finally{d(!1)}}}async function N(D){if(D.preventDefault(),!b.trim()||!u)return;const T=b;C(""),S(ae=>[...ae,{role:"user",text:T}]),$(!0),fe(null);try{const ae=await fetch(`${Xl}/ai/chat`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({resume_text:u.resume_text,job_description:n,message:T,session_id:w})}),Sl=await ae.json();if(!ae.ok)throw new Error(Sl.detail||"Chat failed.");S(pc=>[...pc,{role:"model",text:Sl.reply}]),k(Sl.session_id),setTimeout(()=>{Ie.current&&(Ie.current.scrollTop=Ie.current.scrollHeight)},50)}catch(ae){fe(ae.message)}finally{$(!1)}}const _=(u==null?void 0:u.ats_score)??0,A=_>=80?"#2F8F80":_>=60?"#E2A33D":"#C0392B",W=_>=80?"Strong Match":_>=60?"Partial Match":"Weak Match";return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:Xp}),o.jsxs("div",{className:"cd-root",children:[o.jsxs("div",{className:"cd-upload-card",children:[o.jsx("h2",{className:"cd-card-title",children:"Score your resume"}),o.jsx("p",{className:"cd-card-sub",children:"Upload a PDF or DOCX and paste the job description to get your ATS score, skill breakdown, AI feedback, and interview questions."}),o.jsxs("form",{onSubmit:jl,children:[o.jsxs("div",{className:`cd-drop-zone${e?" has-file":""}`,onDragOver:D=>D.preventDefault(),onDrop:D=>{D.preventDefault(),t(D.dataTransfer.files[0])},children:[o.jsx("input",{type:"file",accept:".pdf,.docx",id:"resume-file",onChange:D=>t(D.target.files[0])}),o.jsx("div",{className:"cd-drop-icon",children:e?"✅":"📄"}),o.jsx("div",{className:"cd-drop-text",children:e?o.jsxs("div",{className:"cd-file-name",children:[o.jsx("span",{children:"📎"})," ",e.name]}):o.jsxs(o.Fragment,{children:[o.jsx("strong",{children:"Click to upload"})," or drag & drop your resume",o.jsx("br",{}),o.jsx("span",{style:{fontSize:12},children:"PDF or DOCX · Max 10 MB"})]})})]}),o.jsx("label",{className:"cd-jd-label",htmlFor:"jd-text",children:"Job Description"}),o.jsx("textarea",{id:"jd-text",className:"cd-jd-textarea",value:n,onChange:D=>r(D.target.value),placeholder:"Paste the full job description here…"}),o.jsxs("div",{className:"cd-submit-row",children:[o.jsxs("button",{type:"submit",className:"cd-submit-btn",disabled:l,children:[l?o.jsx("span",{className:"cd-spin"}):"✦",l?"Scoring…":"Get ATS Score"]}),u&&o.jsx("span",{style:{fontSize:13,color:"#565A66"},children:"Scored successfully — scroll down for results"})]}),s&&o.jsxs("div",{className:"cd-error-pill",role:"alert",children:["⚠ ",s]})]})]}),u&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"cd-score-card",children:[o.jsx(Jp,{score:u.ats_score}),o.jsxs("div",{className:"cd-score-right",children:[o.jsx("div",{className:"cd-score-verdict",style:{color:A},children:W}),o.jsxs("div",{className:"cd-score-explain",children:["Your resume scores ",o.jsxs("strong",{style:{color:A},children:[u.ats_score," / 100"]})," against this job description. The breakdown below shows which factors drove this score."]}),o.jsx("div",{className:"cd-feature-grid",children:Object.entries(u.features_used||{}).map(([D,T])=>o.jsxs("div",{className:"cd-feature-chip",children:[o.jsx("div",{className:"cd-feature-name",children:D.replace(/_/g," ")}),o.jsx("div",{className:"cd-feature-val",style:{color:A},children:typeof T=="number"?T<=1&&T>0?`${Math.round(T*100)}%`:Number(T).toFixed(2):String(T)})]},D))})]})]}),o.jsxs("div",{className:"cd-skills-card",children:[o.jsxs("div",{className:"cd-skills-panel",children:[o.jsxs("div",{className:"cd-skills-head",children:[o.jsx("span",{className:"cd-skills-dot",style:{background:"#2F8F80"}}),o.jsxs("span",{style:{color:"#1F6459"},children:["Matched Skills (",((G=u.matched_skills)==null?void 0:G.length)??0,")"]})]}),((jt=u.matched_skills)==null?void 0:jt.length)>0?o.jsx("div",{className:"cd-skill-pills",children:u.matched_skills.map(D=>o.jsx("span",{className:"cd-skill-pill matched",children:D},D))}):o.jsx("p",{className:"cd-skills-empty",children:"No matched skills detected."})]}),o.jsxs("div",{className:"cd-skills-panel",children:[o.jsxs("div",{className:"cd-skills-head",children:[o.jsx("span",{className:"cd-skills-dot",style:{background:"#E2A33D"}}),o.jsxs("span",{style:{color:"#A66F1E"},children:["Missing Skills (",((Oe=u.missing_skills)==null?void 0:Oe.length)??0,")"]})]}),((It=u.missing_skills)==null?void 0:It.length)>0?o.jsx("div",{className:"cd-skill-pills",children:u.missing_skills.map(D=>o.jsx("span",{className:"cd-skill-pill missing",children:D},D))}):o.jsx("p",{className:"cd-skills-empty",children:"🎉 No missing skills — perfect match!"})]})]}),tt.length>0&&o.jsxs("div",{className:"cd-courses-card",children:[o.jsx("div",{className:"cd-courses-title",children:"Recommended Courses for Skill Gaps"}),o.jsx("div",{className:"cd-courses-grid",children:tt.map((D,T)=>o.jsxs("div",{className:"cd-course-item",children:[o.jsx("div",{className:"cd-course-cat",children:D.category}),o.jsx("div",{className:"cd-course-title",children:D.course_title}),o.jsxs("div",{className:"cd-course-meta",children:[D.provider," · gap: ",D.skill_gap]}),D.url&&o.jsx("a",{href:D.url,target:"_blank",rel:"noopener noreferrer",className:"cd-course-link",children:"View course →"})]},T))})]}),o.jsxs("div",{className:"cd-ai-card",children:[o.jsxs("div",{className:"cd-ai-header",children:[o.jsxs("div",{className:"cd-ai-title-row",children:[o.jsx("div",{className:"cd-ai-icon",children:"✦"}),o.jsx("div",{className:"cd-ai-title",children:"AI Feedback & Interview Questions"})]}),o.jsxs("button",{className:`cd-ai-btn${g?"":" primary"}`,onClick:xn,disabled:j,children:[j?o.jsx("span",{className:"cd-spin",style:{borderTopColor:g?"#2F8F80":"#fff"}}):"✦",j?"Thinking…":g?"Refresh Questions":"Get AI Feedback"]})]}),c&&o.jsxs("div",{className:"cd-error-pill",role:"alert",children:["⚠ ",c]}),!g&&!j&&o.jsx("p",{style:{fontSize:14,color:"#565A66"},children:'Click "Get AI Feedback" to receive tailored resume improvement tips and interview questions for this specific role, powered by AI.'}),g&&o.jsxs(o.Fragment,{children:[o.jsx("ul",{className:"cd-feedback-list",children:g.map((D,T)=>o.jsxs("li",{className:"cd-feedback-item",children:[o.jsx("span",{className:"cd-feedback-num",children:T+1}),o.jsx("span",{className:"cd-feedback-text",children:D})]},T))}),m.length>0&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"cd-iq-divider"}),o.jsx("div",{className:"cd-iq-label",children:"Likely Interview Questions"}),o.jsx("ul",{className:"cd-iq-list",children:m.map((D,T)=>o.jsxs("li",{className:"cd-iq-item",children:[o.jsxs("span",{className:"cd-iq-num",children:["Q",T+1]}),o.jsx("span",{className:"cd-iq-text",children:D})]},T))})]})]})]}),o.jsxs("div",{className:"cd-chat-card",children:[o.jsxs("div",{className:"cd-chat-header",children:[o.jsx("div",{className:"cd-chat-avatar",children:"✦"}),o.jsxs("div",{className:"cd-chat-header-text",children:[o.jsx("div",{className:"cd-chat-header-name",children:"AI Career Coach"}),o.jsx("div",{className:"cd-chat-header-sub",children:"Powered by AI · Ask anything about your resume or this role"})]}),o.jsx("div",{className:"cd-chat-indicator"})]}),o.jsxs("div",{className:"cd-chat-messages",ref:Ie,children:[x.length===0&&o.jsx("div",{className:"cd-chat-empty",children:"Ask about your resume, interview prep, or how to improve your score…"}),x.map((D,T)=>o.jsx("div",{className:`cd-msg ${D.role}`,children:o.jsx("div",{className:"cd-msg-bubble",children:D.text})},T)),z&&o.jsx("div",{className:"cd-msg model",children:o.jsxs("div",{className:"cd-chat-typing",children:[o.jsx("span",{className:"cd-typing-dot"}),o.jsx("span",{className:"cd-typing-dot"}),o.jsx("span",{className:"cd-typing-dot"})]})})]}),P&&o.jsx("div",{style:{padding:"8px 20px"},children:o.jsxs("div",{className:"cd-error-pill",children:["⚠ ",P]})}),o.jsxs("form",{className:"cd-chat-input-row",onSubmit:N,children:[o.jsx("textarea",{className:"cd-chat-input",value:b,onChange:D=>C(D.target.value),onKeyDown:D=>{D.key==="Enter"&&!D.shiftKey&&(D.preventDefault(),N(D))},placeholder:"Ask about interview prep, skill gaps, career advice…",rows:1,disabled:z,id:"chat-input"}),o.jsx("button",{type:"submit",className:"cd-chat-send",disabled:z||!b.trim(),children:"Send →"})]})]})]})]})]})}const qp=`
  .rd-root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
    color: #14171F;
    -webkit-font-smoothing: antialiased;
  }

  /* ── Search card ── */
  .rd-search-card {
    background: #14171F; border-radius: 12px; padding: 32px;
    margin-bottom: 24px;
    box-shadow: 0 8px 32px -8px rgba(20,23,31,0.4);
  }
  .rd-search-title {
    font-family: Georgia, serif; font-size: 24px; color: #F5F2EA;
    margin-bottom: 6px; font-weight: 400;
  }
  .rd-search-sub { font-size: 14px; color: rgba(245,242,234,0.55); margin-bottom: 24px; }

  .rd-search-row { display: flex; gap: 12px; flex-wrap: wrap; }
  .rd-search-input {
    flex: 1; min-width: 200px;
    font-family: inherit; font-size: 15px; color: #14171F;
    background: #F5F2EA; border: none; border-radius: 8px;
    padding: 13px 18px;
    transition: box-shadow 0.2s;
  }
  .rd-search-input:focus {
    outline: none; box-shadow: 0 0 0 3px rgba(47,143,128,0.4);
  }
  .rd-search-input::placeholder { color: #B0AAA0; }
  .rd-search-btn {
    font-family: inherit; font-size: 14px; font-weight: 700;
    background: #2F8F80; color: #fff; border: none; border-radius: 8px;
    padding: 13px 24px; cursor: pointer; white-space: nowrap;
    transition: background 0.15s, box-shadow 0.15s, transform 0.1s;
    display: flex; align-items: center; gap: 8px;
    box-shadow: 0 1px 4px rgba(47,143,128,0.3);
  }
  .rd-search-btn:hover:not(:disabled) {
    background: #1F6459; box-shadow: 0 4px 14px rgba(47,143,128,0.4);
  }
  .rd-search-btn:active:not(:disabled) { transform: scale(0.97); }
  .rd-search-btn:disabled { background: #5a6272; cursor: not-allowed; }
  .rd-spin {
    width: 15px; height: 15px; border-radius: 50%;
    border: 2px solid rgba(255,255,255,0.3); border-top-color: #fff;
    animation: rd-spin 0.7s linear infinite;
  }
  @keyframes rd-spin { to { transform: rotate(360deg); } }

  /* ── Stats row ── */
  .rd-stats-row {
    display: flex; gap: 16px; margin-top: 20px; flex-wrap: wrap;
  }
  .rd-stat {
    background: rgba(245,242,234,0.07); border-radius: 8px;
    padding: 10px 18px; display: flex; align-items: center; gap: 10px;
  }
  .rd-stat-num {
    font-family: 'SF Mono', Consolas, monospace;
    font-size: 20px; font-weight: 700; color: #2F8F80;
  }
  .rd-stat-label { font-size: 12px; color: rgba(245,242,234,0.5); }

  /* ── Results area ── */
  .rd-results-header {
    display: flex; align-items: center; justify-content: space-between;
    margin-bottom: 16px; flex-wrap: wrap; gap: 8px;
  }
  .rd-results-title {
    font-family: Georgia, serif; font-size: 20px;
  }
  .rd-results-meta { font-size: 13px; color: #565A66; }

  /* ── Candidate cards ── */
  .rd-candidates { display: flex; flex-direction: column; gap: 10px; }

  .rd-card {
    background: #fff; border: 1px solid #D9D3C4; border-radius: 12px;
    overflow: hidden; transition: box-shadow 0.2s;
    box-shadow: 0 1px 3px rgba(20,23,31,0.04);
  }
  .rd-card:hover { box-shadow: 0 4px 16px -4px rgba(20,23,31,0.12); }

  .rd-card-main {
    display: grid; grid-template-columns: 48px 1fr 180px; gap: 16px;
    align-items: center; padding: 18px 24px; cursor: pointer;
  }
  @media (max-width: 640px) {
    .rd-card-main { grid-template-columns: 40px 1fr; }
    .rd-card-score-col { display: none; }
  }

  .rd-rank-badge {
    width: 40px; height: 40px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-family: 'SF Mono', Consolas, monospace;
    font-size: 14px; font-weight: 700; flex-shrink: 0;
  }
  .rd-rank-badge.top { background: #2F8F80; color: #fff; }
  .rd-rank-badge.mid { background: #EDE9DD; color: #565A66; }
  .rd-rank-badge.low { background: #FBF0DD; color: #A66F1E; }

  .rd-card-info {}
  .rd-card-skills {
    display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px;
  }
  .rd-skill-tag {
    font-size: 11.5px; font-weight: 600; border-radius: 12px; padding: 3px 10px;
  }
  .rd-skill-tag.matched { background: #E1F5EE; color: #1F6459; }
  .rd-skill-tag.missing { background: #FBF0DD; color: #A66F1E; border: 1px solid #E2A33D; }

  .rd-card-score-col { text-align: right; }
  .rd-score-num {
    font-family: 'SF Mono', Consolas, monospace;
    font-size: 28px; font-weight: 700; line-height: 1; margin-bottom: 6px;
  }
  .rd-score-bar-track {
    height: 4px; background: #EDE9DD; border-radius: 2px; overflow: hidden; width: 120px; margin-left: auto;
  }
  .rd-score-bar-fill { height: 100%; border-radius: 2px; transition: width 0.8s cubic-bezier(0.22,1,0.36,1); }

  .rd-expand-arrow {
    text-align: center; font-size: 12px; color: #B0AAA0; padding: 2px 0;
    transition: transform 0.2s; display: block;
  }
  .rd-expand-arrow.open { transform: rotate(180deg); }

  .rd-card-detail {
    border-top: 1px solid #EDE9DD; padding: 16px 24px;
    background: #FAFAF8; display: none;
  }
  .rd-card-detail.open { display: block; }
  .rd-detail-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  @media (max-width: 500px) { .rd-detail-grid { grid-template-columns: 1fr; } }
  .rd-detail-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.07em; color: #565A66; margin-bottom: 8px; }
  .rd-detail-pills { display: flex; flex-wrap: wrap; gap: 6px; }
  .rd-detail-pill {
    font-size: 12px; font-weight: 600; border-radius: 12px; padding: 4px 11px;
  }
  .rd-detail-pill.matched { background: #E1F5EE; color: #1F6459; }
  .rd-detail-pill.missing { background: #FBF0DD; color: #A66F1E; }

  /* ── Empty / error states ── */
  .rd-empty {
    text-align: center; padding: 48px 24px;
    background: #fff; border: 1px solid #D9D3C4; border-radius: 12px;
    color: #565A66; font-size: 15px;
  }
  .rd-empty-icon { font-size: 36px; margin-bottom: 12px; }
  .rd-error-pill {
    background: #FFF0EE; border: 1px solid #F5C6C2; color: #C0392B;
    border-radius: 8px; padding: 12px 18px; font-size: 14px; margin-top: 12px;
  }
`;function ef(e){return e>=80?"#2F8F80":e>=60?"#E2A33D":"#C0392B"}function tf(e){return e===0?"top":e<3?"mid":"low"}function nf({candidate:e,index:t}){var s,a,u,p,g;const[n,r]=E.useState(!1),l=e.ats_score??0,i=ef(l);return o.jsxs("div",{className:"rd-card",children:[o.jsxs("div",{className:"rd-card-main",onClick:()=>r(!n),children:[o.jsxs("div",{className:`rd-rank-badge ${tf(t)}`,children:["#",t+1]}),o.jsxs("div",{className:"rd-card-info",children:[o.jsxs("div",{style:{fontSize:14,fontWeight:600,marginBottom:2},children:["Candidate #",e.candidate_rank??t+1]}),o.jsxs("div",{className:"rd-card-skills",children:[(e.matched_skills||[]).slice(0,4).map(h=>o.jsxs("span",{className:"rd-skill-tag matched",children:["✓ ",h]},h)),(e.missing_skills||[]).slice(0,3).map(h=>o.jsxs("span",{className:"rd-skill-tag missing",children:["✗ ",h]},h)),(((s=e.matched_skills)==null?void 0:s.length)??0)>4&&o.jsxs("span",{className:"rd-skill-tag matched",children:["+",e.matched_skills.length-4," more"]})]})]}),o.jsxs("div",{className:"rd-card-score-col",children:[o.jsx("div",{className:"rd-score-num",style:{color:i},children:Number(l).toFixed(1)}),o.jsx("div",{className:"rd-score-bar-track",children:o.jsx("div",{className:"rd-score-bar-fill",style:{width:`${l}%`,background:i}})}),o.jsx("span",{className:"rd-expand-arrow",style:{marginTop:6},"aria-hidden":!0,children:n?"▲":"▼"})]})]}),o.jsx("div",{className:`rd-card-detail${n?" open":""}`,children:o.jsxs("div",{className:"rd-detail-grid",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"rd-detail-label",children:["Matched Skills (",((a=e.matched_skills)==null?void 0:a.length)??0,")"]}),o.jsxs("div",{className:"rd-detail-pills",children:[(e.matched_skills||[]).map(h=>o.jsx("span",{className:"rd-detail-pill matched",children:h},h)),!((u=e.matched_skills)!=null&&u.length)&&o.jsx("span",{style:{fontSize:13,color:"#B0AAA0"},children:"None detected"})]})]}),o.jsxs("div",{children:[o.jsxs("div",{className:"rd-detail-label",children:["Missing Skills (",((p=e.missing_skills)==null?void 0:p.length)??0,")"]}),o.jsxs("div",{className:"rd-detail-pills",children:[(e.missing_skills||[]).map(h=>o.jsx("span",{className:"rd-detail-pill missing",children:h},h)),!((g=e.missing_skills)!=null&&g.length)&&o.jsx("span",{style:{fontSize:13,color:"#2F8F80"},children:"🎉 No gaps"})]})]})]})})]})}function rf(){const[e,t]=E.useState(""),[n,r]=E.useState([]),[l,i]=E.useState(!1),[s,a]=E.useState(null),[u,p]=E.useState(!1),[g,h]=E.useState("");async function m(k){if(k.preventDefault(),!!e.trim()){i(!0),a(null),p(!0),h(e.trim());try{const j=await Yp(e.trim());r(j.candidates||[])}catch(j){a(j.message),r([])}finally{i(!1)}}}const y=n.length?(n.reduce((k,j)=>k+(j.ats_score??0),0)/n.length).toFixed(1):null,w=n.length?Math.max(...n.map(k=>k.ats_score??0)).toFixed(1):null;return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:qp}),o.jsxs("div",{className:"rd-root",children:[o.jsxs("div",{className:"rd-search-card",children:[o.jsx("h2",{className:"rd-search-title",children:"Recruiter Dashboard"}),o.jsx("p",{className:"rd-search-sub",children:"Search a job title to see every applicant ranked by real skill match."}),o.jsxs("form",{onSubmit:m,className:"rd-search-row",children:[o.jsx("input",{className:"rd-search-input",type:"text",value:e,onChange:k=>t(k.target.value),placeholder:'e.g. "AI Engineer", "Data Scientist", "Frontend Developer"',id:"recruiter-search-input"}),o.jsxs("button",{type:"submit",className:"rd-search-btn",disabled:l,children:[l?o.jsx("span",{className:"rd-spin"}):"🔍",l?"Searching…":"Search Candidates"]})]}),u&&!l&&n.length>0&&o.jsxs("div",{className:"rd-stats-row",children:[o.jsxs("div",{className:"rd-stat",children:[o.jsx("span",{className:"rd-stat-num",children:n.length}),o.jsx("span",{className:"rd-stat-label",children:"Candidates found"})]}),o.jsxs("div",{className:"rd-stat",children:[o.jsx("span",{className:"rd-stat-num",children:w}),o.jsx("span",{className:"rd-stat-label",children:"Top score"})]}),o.jsxs("div",{className:"rd-stat",children:[o.jsx("span",{className:"rd-stat-num",children:y}),o.jsx("span",{className:"rd-stat-label",children:"Average score"})]})]})]}),s&&o.jsxs("div",{className:"rd-error-pill",role:"alert",children:["⚠ ",s]}),u&&!l&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"rd-results-header",children:[o.jsx("div",{className:"rd-results-title",children:n.length>0?`${n.length} candidate${n.length>1?"s":""} for "${g}"`:`No candidates for "${g}"`}),n.length>0&&o.jsx("div",{className:"rd-results-meta",children:"Ranked highest → lowest · click any row to expand"})]}),n.length===0&&!s&&o.jsxs("div",{className:"rd-empty",children:[o.jsx("div",{className:"rd-empty-icon",children:"📭"}),o.jsxs("div",{children:["No candidates found for ",o.jsxs("strong",{children:['"',g,'"']}),"."]}),o.jsx("div",{style:{marginTop:8,fontSize:13},children:"Try a different job title, or check that candidates have been scored against this role."})]}),o.jsx("div",{className:"rd-candidates",children:n.map((k,j)=>o.jsx(nf,{candidate:k,index:j},k.candidate_rank??j))})]}),!u&&o.jsxs("div",{className:"rd-empty",children:[o.jsx("div",{className:"rd-empty-icon",children:"🔍"}),o.jsx("div",{children:"Enter a job title above to see ranked candidates."}),o.jsx("div",{style:{marginTop:8,fontSize:13},children:"Data comes from the predictions stored in MongoDB Atlas."})]})]})]})}const Js="http://127.0.0.1:8000",lf=`
  .ap-root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
    color: #14171F;
    -webkit-font-smoothing: antialiased;
  }

  .ap-header {
    background: #14171F; border-radius: 12px; padding: 28px 32px;
    margin-bottom: 24px; color: #F5F2EA;
    box-shadow: 0 8px 32px -8px rgba(20,23,31,0.4);
  }
  .ap-header-title { font-family: Georgia, serif; font-size: 24px; margin-bottom: 4px; }
  .ap-header-sub { font-size: 14px; color: rgba(245,242,234,0.55); }

  /* ── Tab bar ── */
  .ap-tabs {
    display: flex; gap: 4px; margin-bottom: 20px;
    background: #EDE9DD; border-radius: 10px; padding: 4px; width: fit-content;
  }
  .ap-tab {
    font-family: inherit; font-size: 14px; font-weight: 600;
    border: none; background: none; cursor: pointer;
    padding: 9px 22px; border-radius: 7px; color: #565A66;
    transition: background 0.15s, color 0.15s;
  }
  .ap-tab.active { background: #14171F; color: #F5F2EA; }

  /* ── Card ── */
  .ap-card {
    background: #fff; border: 1px solid #D9D3C4; border-radius: 12px;
    overflow: hidden; box-shadow: 0 1px 3px rgba(20,23,31,0.04), 0 8px 24px -12px rgba(20,23,31,0.08);
  }
  .ap-card-header {
    padding: 20px 28px; border-bottom: 1px solid #EDE9DD;
    display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap;
  }
  .ap-card-title { font-family: Georgia, serif; font-size: 18px; }
  .ap-count-badge {
    font-family: 'SF Mono', Consolas, monospace; font-size: 12px;
    background: #EDE9DD; border-radius: 20px; padding: 4px 12px; color: #565A66;
  }

  /* ── Search box ── */
  .ap-search {
    font-family: inherit; font-size: 14px; color: #14171F;
    border: 1.5px solid #D9D3C4; border-radius: 7px; padding: 8px 14px;
    background: #FAFAF8; min-width: 240px;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .ap-search:focus {
    outline: none; border-color: #2F8F80;
    box-shadow: 0 0 0 3px rgba(47,143,128,0.15);
  }
  .ap-search::placeholder { color: #B0AAA0; }

  /* ── Table ── */
  .ap-table-wrap { overflow: auto; max-height: 520px; }
  .ap-table {
    width: 100%; border-collapse: collapse; font-size: 14px;
  }
  .ap-table thead th {
    position: sticky; top: 0; background: #FAFAF8;
    border-bottom: 2px solid #D9D3C4; padding: 12px 20px;
    text-align: left; font-size: 12px; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.07em; color: #565A66;
    white-space: nowrap; z-index: 1;
  }
  .ap-table tbody tr {
    border-bottom: 1px solid #F0ECE3;
    transition: background 0.1s;
  }
  .ap-table tbody tr:hover { background: #F5F2EA; }
  .ap-table tbody tr:last-child { border-bottom: none; }
  .ap-table td { padding: 12px 20px; vertical-align: middle; }

  .ap-category-pill {
    font-size: 11.5px; font-weight: 600; border-radius: 12px; padding: 3px 10px;
    background: #E1F5EE; color: #1F6459;
  }

  .ap-link {
    color: #2F8F80; text-decoration: none; font-weight: 500; font-size: 13px;
  }
  .ap-link:hover { color: #1F6459; text-decoration: underline; }

  .ap-empty { padding: 40px; text-align: center; color: #B0AAA0; font-size: 14px; }

  /* ── Loading skeleton ── */
  .ap-skeleton {
    display: flex; flex-direction: column; gap: 12px; padding: 20px 28px;
  }
  .ap-skeleton-row {
    height: 20px; border-radius: 4px; background: linear-gradient(90deg, #EDE9DD 25%, #F5F2EA 50%, #EDE9DD 75%);
    background-size: 400% 100%; animation: ap-shimmer 1.4s ease-in-out infinite;
  }
  @keyframes ap-shimmer { 0% { background-position: 100% 0; } 100% { background-position: -100% 0; } }
`;function of(){const[e,t]=E.useState([]),[n,r]=E.useState([]),[l,i]=E.useState(!0),[s,a]=E.useState(null),[u,p]=E.useState("skills"),[g,h]=E.useState(""),[m,y]=E.useState("");E.useEffect(()=>{Promise.all([fetch(`${Js}/admin/skills`).then(j=>j.json()),fetch(`${Js}/admin/courses`).then(j=>j.json())]).then(([j,d])=>{t(j.skills||[]),r(d.courses||[])}).catch(j=>a(j.message)).finally(()=>i(!1))},[]);const w=E.useMemo(()=>{if(!g.trim())return e;const j=g.toLowerCase();return e.filter(d=>{var c,f;return((c=d.skill)==null?void 0:c.toLowerCase().includes(j))||((f=d.category)==null?void 0:f.toLowerCase().includes(j))})},[e,g]),k=E.useMemo(()=>{if(!m.trim())return n;const j=m.toLowerCase();return n.filter(d=>{var c,f,x;return((c=d.course_title)==null?void 0:c.toLowerCase().includes(j))||((f=d.category)==null?void 0:f.toLowerCase().includes(j))||((x=d.provider)==null?void 0:x.toLowerCase().includes(j))})},[n,m]);return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:lf}),o.jsxs("div",{className:"ap-root",children:[o.jsxs("div",{className:"ap-header",children:[o.jsx("div",{className:"ap-header-title",children:"Admin Panel"}),o.jsx("div",{className:"ap-header-sub",children:"Manage the skills taxonomy and course catalogue used across the platform."})]}),s&&o.jsxs("div",{style:{background:"#FFF0EE",border:"1px solid #F5C6C2",color:"#C0392B",borderRadius:8,padding:"12px 18px",marginBottom:20,fontSize:14},children:["⚠ Failed to load admin data: ",s]}),o.jsxs("div",{className:"ap-tabs",role:"tablist",children:[o.jsx("button",{className:`ap-tab${u==="skills"?" active":""}`,role:"tab","aria-selected":u==="skills",onClick:()=>p("skills"),id:"tab-skills",children:"Skills Taxonomy"}),o.jsx("button",{className:`ap-tab${u==="courses"?" active":""}`,role:"tab","aria-selected":u==="courses",onClick:()=>p("courses"),id:"tab-courses",children:"Course Catalogue"})]}),u==="skills"&&o.jsxs("div",{className:"ap-card",children:[o.jsxs("div",{className:"ap-card-header",children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[o.jsx("div",{className:"ap-card-title",children:"Skills Taxonomy"}),o.jsxs("span",{className:"ap-count-badge",children:[w.length," / ",e.length]})]}),o.jsx("input",{className:"ap-search",type:"text",value:g,onChange:j=>h(j.target.value),placeholder:"Search skills or categories…",id:"skills-search"})]}),l?o.jsx("div",{className:"ap-skeleton",children:Array.from({length:8},(j,d)=>o.jsx("div",{className:"ap-skeleton-row",style:{width:`${60+d*13%40}%`}},d))}):o.jsx("div",{className:"ap-table-wrap",children:o.jsxs("table",{className:"ap-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"#"}),o.jsx("th",{children:"Skill"}),o.jsx("th",{children:"Category"})]})}),o.jsxs("tbody",{children:[w.length===0&&o.jsx("tr",{children:o.jsxs("td",{colSpan:3,className:"ap-empty",children:['No skills match "',g,'"']})}),w.map((j,d)=>o.jsxs("tr",{children:[o.jsx("td",{style:{color:"#B0AAA0",fontFamily:"monospace",fontSize:12},children:d+1}),o.jsx("td",{style:{fontWeight:600},children:j.skill}),o.jsx("td",{children:o.jsx("span",{className:"ap-category-pill",children:j.category})})]},d))]})]})})]}),u==="courses"&&o.jsxs("div",{className:"ap-card",children:[o.jsxs("div",{className:"ap-card-header",children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[o.jsx("div",{className:"ap-card-title",children:"Course Catalogue"}),o.jsxs("span",{className:"ap-count-badge",children:[k.length," / ",n.length]})]}),o.jsx("input",{className:"ap-search",type:"text",value:m,onChange:j=>y(j.target.value),placeholder:"Search courses, categories, providers…",id:"courses-search"})]}),l?o.jsx("div",{className:"ap-skeleton",children:Array.from({length:6},(j,d)=>o.jsx("div",{className:"ap-skeleton-row",style:{width:`${55+d*17%45}%`}},d))}):o.jsx("div",{className:"ap-table-wrap",children:o.jsxs("table",{className:"ap-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"#"}),o.jsx("th",{children:"Category"}),o.jsx("th",{children:"Course"}),o.jsx("th",{children:"Provider"}),o.jsx("th",{children:"Link"})]})}),o.jsxs("tbody",{children:[k.length===0&&o.jsx("tr",{children:o.jsxs("td",{colSpan:5,className:"ap-empty",children:['No courses match "',m,'"']})}),k.map((j,d)=>o.jsxs("tr",{children:[o.jsx("td",{style:{color:"#B0AAA0",fontFamily:"monospace",fontSize:12},children:d+1}),o.jsx("td",{children:o.jsx("span",{className:"ap-category-pill",children:j.category})}),o.jsx("td",{style:{fontWeight:600,maxWidth:300},children:j.course_title}),o.jsx("td",{style:{color:"#565A66"},children:j.provider}),o.jsx("td",{children:j.url?o.jsx("a",{href:j.url,target:"_blank",rel:"noopener noreferrer",className:"ap-link",children:"Open →"}):"—"})]},d))]})]})})]})]})]})}function sf({onGoHome:e}){return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
        .nf-root {
          min-height: 100vh;
          background: #F5F2EA;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
          padding: 48px 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        /* Background decorative grid */
        .nf-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(#D9D3C4 1px, transparent 1px),
            linear-gradient(90deg, #D9D3C4 1px, transparent 1px);
          background-size: 48px 48px;
          opacity: 0.3;
          pointer-events: none;
        }

        /* Glowing circle behind the number */
        .nf-glow {
          position: absolute;
          width: 480px; height: 480px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(47,143,128,0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .nf-card {
          position: relative;
          z-index: 1;
          max-width: 540px;
          width: 100%;
        }

        /* Big 404 number */
        .nf-code {
          font-family: Georgia, 'Iowan Old Style', 'Palatino Linotype', serif;
          font-size: clamp(96px, 18vw, 160px);
          font-weight: 700;
          line-height: 1;
          color: #14171F;
          letter-spacing: -0.04em;
          margin-bottom: 8px;
          /* Teal accent on the middle digit */
          background: linear-gradient(135deg, #14171F 0%, #14171F 38%, #2F8F80 50%, #14171F 62%, #14171F 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nf-eyebrow {
          font-family: 'SF Mono', 'JetBrains Mono', Consolas, monospace;
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #2F8F80;
          font-weight: 700;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .nf-eyebrow::before,
        .nf-eyebrow::after {
          content: "";
          flex: 1;
          max-width: 48px;
          height: 1px;
          background: #2F8F80;
          border-radius: 1px;
        }

        .nf-title {
          font-family: Georgia, 'Iowan Old Style', serif;
          font-size: clamp(22px, 4vw, 30px);
          font-weight: 400;
          color: #14171F;
          line-height: 1.25;
          margin-bottom: 16px;
        }

        .nf-body {
          font-size: 15.5px;
          color: #565A66;
          line-height: 1.7;
          margin-bottom: 36px;
        }

        .nf-actions {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 48px;
        }

        .nf-btn {
          font-family: inherit;
          font-size: 14px;
          font-weight: 600;
          border-radius: 6px;
          cursor: pointer;
          border: 1.5px solid transparent;
          padding: 11px 24px;
          transition: transform 0.15s, background 0.15s, box-shadow 0.15s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .nf-btn:active { transform: scale(0.97); }
        .nf-btn-primary {
          background: #14171F;
          color: #F5F2EA;
          box-shadow: 0 1px 4px rgba(20,23,31,0.2);
        }
        .nf-btn-primary:hover {
          background: #242836;
          box-shadow: 0 4px 16px rgba(20,23,31,0.3);
        }
        .nf-btn-ghost {
          background: transparent;
          border-color: #D9D3C4;
          color: #14171F;
        }
        .nf-btn-ghost:hover { border-color: #14171F; }

        /* Helpful links */
        .nf-links {
          display: flex;
          gap: 24px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .nf-link {
          font-size: 13px;
          color: #565A66;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: color 0.15s;
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          padding: 0;
        }
        .nf-link:hover { color: #2F8F80; }
        .nf-link-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #D9D3C4;
        }

        /* Decorative divider */
        .nf-divider {
          width: 48px; height: 2px;
          background: linear-gradient(90deg, transparent, #2F8F80, transparent);
          border-radius: 2px;
          margin: 28px auto;
        }

        /* Brand footer */
        .nf-brand {
          font-family: Georgia, serif;
          font-size: 18px;
          color: #B0AAA0;
          margin-top: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2px;
        }
        .nf-brand-dot { color: #2F8F80; }

        @media (max-width: 480px) {
          .nf-actions { flex-direction: column; align-items: center; }
          .nf-btn { width: 100%; justify-content: center; }
        }
      `}),o.jsxs("div",{className:"nf-root",children:[o.jsx("div",{className:"nf-grid","aria-hidden":"true"}),o.jsx("div",{className:"nf-glow","aria-hidden":"true"}),o.jsxs("div",{className:"nf-card",children:[o.jsx("div",{className:"nf-code","aria-label":"Error 404",children:"404"}),o.jsx("div",{className:"nf-eyebrow",children:"Page not found"}),o.jsx("h1",{className:"nf-title",children:"This page doesn't exist — or it moved"}),o.jsx("p",{className:"nf-body",children:"The URL you visited isn't part of Sift. It might have been mistyped, the link might be outdated, or you may have taken a wrong turn somewhere."}),o.jsxs("div",{className:"nf-actions",children:[o.jsx("button",{className:"nf-btn nf-btn-primary",id:"nf-home-btn",onClick:e,children:"← Back to Sift home"}),o.jsx("button",{className:"nf-btn nf-btn-ghost",id:"nf-score-btn",onClick:e,children:"Score a resume"})]}),o.jsx("div",{className:"nf-divider","aria-hidden":"true"}),o.jsxs("div",{className:"nf-links",children:[o.jsxs("button",{className:"nf-link",onClick:e,children:[o.jsx("span",{className:"nf-link-dot"}),"Home"]}),o.jsxs("button",{className:"nf-link",onClick:e,children:[o.jsx("span",{className:"nf-link-dot"}),"Candidate Dashboard"]}),o.jsxs("button",{className:"nf-link",onClick:e,children:[o.jsx("span",{className:"nf-link-dot"}),"Recruiter Dashboard"]})]})]}),o.jsxs("div",{className:"nf-brand","aria-label":"Sift",children:["sift",o.jsx("span",{className:"nf-brand-dot",children:"."})]})]})]})}const af=`
  .app-root {
    min-height: 100vh;
    background: #F5F2EA;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  /* ── Navigation bar ── */
  .app-nav {
    position: sticky; top: 0; z-index: 20;
    display: flex; align-items: center;
    padding: 0 48px; height: 58px;
    gap: 24px;
    background: rgba(245,242,234,0.92);
    backdrop-filter: blur(10px) saturate(1.4);
    border-bottom: 1px solid #D9D3C4;
    box-shadow: 0 1px 0 rgba(20,23,31,0.03);
  }

  .app-brand-btn {
    font-family: Georgia, 'Iowan Old Style', serif;
    font-size: 20px; letter-spacing: 0.01em;
    background: none; border: none; cursor: pointer;
    color: #14171F; display: flex; align-items: center; gap: 1px;
    padding: 0; flex-shrink: 0;
    transition: opacity 0.15s;
  }
  .app-brand-btn:hover { opacity: 0.75; }
  .app-brand-dot { color: #2F8F80; }

  .app-divider { width: 1px; height: 22px; background: #D9D3C4; flex-shrink: 0; }

  /* ── Tab buttons ── */
  .app-tabs { display: flex; gap: 2px; flex: 1; }
  .app-tab {
    font-family: inherit; font-size: 14px; font-weight: 500;
    border: none; background: none; cursor: pointer;
    padding: 7px 16px; border-radius: 7px; color: #565A66;
    transition: background 0.15s, color 0.15s;
    white-space: nowrap;
  }
  .app-tab:hover { background: #EDE9DD; color: #14171F; }
  .app-tab.active { background: #14171F; color: #F5F2EA; font-weight: 600; }

  /* ── Right-side controls ── */
  .app-nav-right {
    display: flex; align-items: center; gap: 10px; margin-left: auto;
  }
  .app-user-chip {
    display: flex; align-items: center; gap: 8px;
    background: #EDE9DD; border-radius: 20px; padding: 5px 14px 5px 8px;
    font-size: 13px; font-weight: 600; color: #14171F;
    border: 1px solid #D9D3C4;
  }
  .app-user-avatar {
    width: 24px; height: 24px; border-radius: 50%;
    background: #2F8F80; color: #fff;
    display: flex; align-items: center; justify-content: center;
    font-size: 11px; font-weight: 700; flex-shrink: 0;
  }
  .app-role-tag {
    font-size: 11px; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.07em; color: #1F6459;
    background: #E1F5EE; border: 1px solid #2F8F80;
    border-radius: 4px; padding: 2px 7px;
  }
  .app-logout-btn {
    font-family: inherit; font-size: 13px; font-weight: 600;
    background: none; border: 1.5px solid #D9D3C4; border-radius: 7px;
    padding: 7px 14px; cursor: pointer; color: #565A66;
    transition: border-color 0.15s, color 0.15s, background 0.15s;
    white-space: nowrap;
  }
  .app-logout-btn:hover {
    border-color: #C0392B; color: #C0392B; background: #FFF5F4;
  }

  /* ── Page content ── */
  .app-content {
    max-width: 1100px; margin: 0 auto; padding: 36px 32px 80px;
  }
  .app-page-header { margin-bottom: 28px; }
  .app-page-title {
    font-family: Georgia, 'Iowan Old Style', serif;
    font-size: 28px; font-weight: 400; color: #14171F; margin-bottom: 4px;
  }
  .app-page-sub { font-size: 14px; color: #565A66; }

  /* ── Responsive ── */
  @media (max-width: 768px) {
    .app-nav { padding: 0 16px; gap: 12px; }
    .app-user-chip span:not(.app-user-avatar) { display: none; }
    .app-role-tag { display: none; }
    .app-content { padding: 20px 16px 60px; }
  }
  @media (max-width: 500px) {
    .app-tab { padding: 7px 10px; font-size: 13px; }
  }
`,Bo="sift_user";function uf(e){try{localStorage.setItem(Bo,JSON.stringify(e))}catch{}}function cf(){try{return JSON.parse(localStorage.getItem(Bo)||"null")}catch{return null}}function df(){try{localStorage.removeItem(Bo)}catch{}}function pf(){const[e,t]=E.useState("landing"),[n,r]=E.useState("candidate"),[l,i]=E.useState(null);E.useEffect(()=>{const j=cf();j!=null&&j.role&&(i(j),r(j.role==="recruiter"?"recruiter":j.role==="admin"?"admin":"candidate"),t("app"))},[]);function s(j,d,c){const f={role:j||"candidate",name:d||"User",token:c||null};i(f),uf(f),r(f.role==="recruiter"?"recruiter":f.role==="admin"?"admin":"candidate"),t("app")}function a(){df(),i(null),t("landing")}if(e==="404")return o.jsx(sf,{onGoHome:()=>t(l?"app":"landing")});if(e==="landing")return o.jsx(Up,{onEnterApp:s});const u=(l==null?void 0:l.role)||"candidate",p=(l==null?void 0:l.name)||"User",g=p.split(" ").map(j=>j[0]).join("").slice(0,2).toUpperCase(),h=u==="recruiter"||u==="admin",m=u==="admin",y={candidate:{title:"Candidate Dashboard",sub:"Upload your resume, get your ATS score, AI feedback, and interview prep."},recruiter:{title:"Recruiter Dashboard",sub:"Search a job title to see every applicant ranked by skill match."},admin:{title:"Admin Panel",sub:"Manage the skills taxonomy and course catalogue."}},{title:w,sub:k}=y[n]||y.candidate;return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:af}),o.jsxs("div",{className:"app-root",children:[o.jsxs("nav",{className:"app-nav",role:"navigation","aria-label":"App navigation",children:[o.jsxs("button",{className:"app-brand-btn",onClick:()=>t("landing"),"aria-label":"Back to home",children:["sift",o.jsx("span",{className:"app-brand-dot",children:"."})]}),o.jsx("div",{className:"app-divider","aria-hidden":"true"}),o.jsxs("div",{className:"app-tabs",role:"tablist","aria-label":"Dashboard tabs",children:[o.jsx("button",{role:"tab","aria-selected":n==="candidate",className:`app-tab${n==="candidate"?" active":""}`,id:"tab-candidate",onClick:()=>r("candidate"),children:"Candidate"}),h&&o.jsx("button",{role:"tab","aria-selected":n==="recruiter",className:`app-tab${n==="recruiter"?" active":""}`,id:"tab-recruiter",onClick:()=>r("recruiter"),children:"Recruiter"}),m&&o.jsx("button",{role:"tab","aria-selected":n==="admin",className:`app-tab${n==="admin"?" active":""}`,id:"tab-admin",onClick:()=>r("admin"),children:"Admin"})]}),o.jsxs("div",{className:"app-nav-right",children:[o.jsxs("div",{className:"app-user-chip",children:[o.jsx("span",{className:"app-user-avatar",children:g}),o.jsx("span",{children:p})]}),o.jsx("span",{className:"app-role-tag",children:u}),o.jsx("button",{className:"app-logout-btn",id:"logout-btn",onClick:a,children:"Log out"})]})]}),o.jsxs("div",{className:"app-content",role:"tabpanel",children:[o.jsxs("div",{className:"app-page-header",children:[o.jsx("h1",{className:"app-page-title",children:w}),o.jsx("p",{className:"app-page-sub",children:k})]}),n==="candidate"&&o.jsx(Zp,{}),n==="recruiter"&&o.jsx(rf,{}),n==="admin"&&o.jsx(of,{})]})]})]})}Zl.createRoot(document.getElementById("root")).render(o.jsx(Jl.StrictMode,{children:o.jsx(pf,{})}));
