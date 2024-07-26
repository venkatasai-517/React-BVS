function Zy(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function e0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ym={exports:{}},Ua={},wm={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bs=Symbol.for("react.element"),t0=Symbol.for("react.portal"),n0=Symbol.for("react.fragment"),r0=Symbol.for("react.strict_mode"),i0=Symbol.for("react.profiler"),s0=Symbol.for("react.provider"),o0=Symbol.for("react.context"),a0=Symbol.for("react.forward_ref"),l0=Symbol.for("react.suspense"),u0=Symbol.for("react.memo"),c0=Symbol.for("react.lazy"),Fh=Symbol.iterator;function d0(t){return t===null||typeof t!="object"?null:(t=Fh&&t[Fh]||t["@@iterator"],typeof t=="function"?t:null)}var Em={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sm=Object.assign,Cm={};function gi(t,e,n){this.props=t,this.context=e,this.refs=Cm,this.updater=n||Em}gi.prototype.isReactComponent={};gi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};gi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Im(){}Im.prototype=gi.prototype;function $c(t,e,n){this.props=t,this.context=e,this.refs=Cm,this.updater=n||Em}var Gc=$c.prototype=new Im;Gc.constructor=$c;Sm(Gc,gi.prototype);Gc.isPureReactComponent=!0;var Uh=Array.isArray,xm=Object.prototype.hasOwnProperty,Kc={current:null},km={key:!0,ref:!0,__self:!0,__source:!0};function Nm(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)xm.call(e,r)&&!km.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Bs,type:t,key:s,ref:o,props:i,_owner:Kc.current}}function h0(t,e){return{$$typeof:Bs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Qc(t){return typeof t=="object"&&t!==null&&t.$$typeof===Bs}function f0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Bh=/\/+/g;function bl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?f0(""+t.key):e.toString(36)}function Po(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Bs:case t0:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+bl(o,0):r,Uh(i)?(n="",t!=null&&(n=t.replace(Bh,"$&/")+"/"),Po(i,e,n,"",function(u){return u})):i!=null&&(Qc(i)&&(i=h0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Bh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Uh(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+bl(s,a);o+=Po(s,e,n,l,i)}else if(l=d0(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+bl(s,a++),o+=Po(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function uo(t,e,n){if(t==null)return t;var r=[],i=0;return Po(t,r,"","",function(s){return e.call(n,s,i++)}),r}function p0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Be={current:null},Ro={transition:null},m0={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:Ro,ReactCurrentOwner:Kc};function Tm(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:uo,forEach:function(t,e,n){uo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return uo(t,function(){e++}),e},toArray:function(t){return uo(t,function(e){return e})||[]},only:function(t){if(!Qc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};V.Component=gi;V.Fragment=n0;V.Profiler=i0;V.PureComponent=$c;V.StrictMode=r0;V.Suspense=l0;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m0;V.act=Tm;V.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Sm({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Kc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)xm.call(e,l)&&!km.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Bs,type:t.type,key:i,ref:s,props:r,_owner:o}};V.createContext=function(t){return t={$$typeof:o0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:s0,_context:t},t.Consumer=t};V.createElement=Nm;V.createFactory=function(t){var e=Nm.bind(null,t);return e.type=t,e};V.createRef=function(){return{current:null}};V.forwardRef=function(t){return{$$typeof:a0,render:t}};V.isValidElement=Qc;V.lazy=function(t){return{$$typeof:c0,_payload:{_status:-1,_result:t},_init:p0}};V.memo=function(t,e){return{$$typeof:u0,type:t,compare:e===void 0?null:e}};V.startTransition=function(t){var e=Ro.transition;Ro.transition={};try{t()}finally{Ro.transition=e}};V.unstable_act=Tm;V.useCallback=function(t,e){return Be.current.useCallback(t,e)};V.useContext=function(t){return Be.current.useContext(t)};V.useDebugValue=function(){};V.useDeferredValue=function(t){return Be.current.useDeferredValue(t)};V.useEffect=function(t,e){return Be.current.useEffect(t,e)};V.useId=function(){return Be.current.useId()};V.useImperativeHandle=function(t,e,n){return Be.current.useImperativeHandle(t,e,n)};V.useInsertionEffect=function(t,e){return Be.current.useInsertionEffect(t,e)};V.useLayoutEffect=function(t,e){return Be.current.useLayoutEffect(t,e)};V.useMemo=function(t,e){return Be.current.useMemo(t,e)};V.useReducer=function(t,e,n){return Be.current.useReducer(t,e,n)};V.useRef=function(t){return Be.current.useRef(t)};V.useState=function(t){return Be.current.useState(t)};V.useSyncExternalStore=function(t,e,n){return Be.current.useSyncExternalStore(t,e,n)};V.useTransition=function(){return Be.current.useTransition()};V.version="18.3.1";wm.exports=V;var k=wm.exports;const Pm=e0(k),g0=Zy({__proto__:null,default:Pm},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v0=k,_0=Symbol.for("react.element"),y0=Symbol.for("react.fragment"),w0=Object.prototype.hasOwnProperty,E0=v0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S0={key:!0,ref:!0,__self:!0,__source:!0};function Rm(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)w0.call(e,r)&&!S0.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:_0,type:t,key:s,ref:o,props:i,_owner:E0.current}}Ua.Fragment=y0;Ua.jsx=Rm;Ua.jsxs=Rm;ym.exports=Ua;var h=ym.exports,yu={},bm={exports:{}},st={},Am={exports:{}},Om={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,j){var B=P.length;P.push(j);e:for(;0<B;){var de=B-1>>>1,_e=P[de];if(0<i(_e,j))P[de]=j,P[B]=_e,B=de;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var j=P[0],B=P.pop();if(B!==j){P[0]=B;e:for(var de=0,_e=P.length,ao=_e>>>1;de<ao;){var Jn=2*(de+1)-1,Rl=P[Jn],Xn=Jn+1,lo=P[Xn];if(0>i(Rl,B))Xn<_e&&0>i(lo,Rl)?(P[de]=lo,P[Xn]=B,de=Xn):(P[de]=Rl,P[Jn]=B,de=Jn);else if(Xn<_e&&0>i(lo,B))P[de]=lo,P[Xn]=B,de=Xn;else break e}}return j}function i(P,j){var B=P.sortIndex-j.sortIndex;return B!==0?B:P.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,c=null,f=3,m=!1,_=!1,y=!1,C=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(P){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=P)r(u),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(u)}}function S(P){if(y=!1,v(P),!_)if(n(l)!==null)_=!0,Tl(N);else{var j=n(u);j!==null&&Pl(S,j.startTime-P)}}function N(P,j){_=!1,y&&(y=!1,g(A),A=-1),m=!0;var B=f;try{for(v(j),c=n(l);c!==null&&(!(c.expirationTime>j)||P&&!Et());){var de=c.callback;if(typeof de=="function"){c.callback=null,f=c.priorityLevel;var _e=de(c.expirationTime<=j);j=t.unstable_now(),typeof _e=="function"?c.callback=_e:c===n(l)&&r(l),v(j)}else r(l);c=n(l)}if(c!==null)var ao=!0;else{var Jn=n(u);Jn!==null&&Pl(S,Jn.startTime-j),ao=!1}return ao}finally{c=null,f=B,m=!1}}var R=!1,b=null,A=-1,Z=5,W=-1;function Et(){return!(t.unstable_now()-W<Z)}function ki(){if(b!==null){var P=t.unstable_now();W=P;var j=!0;try{j=b(!0,P)}finally{j?Ni():(R=!1,b=null)}}else R=!1}var Ni;if(typeof p=="function")Ni=function(){p(ki)};else if(typeof MessageChannel<"u"){var jh=new MessageChannel,Xy=jh.port2;jh.port1.onmessage=ki,Ni=function(){Xy.postMessage(null)}}else Ni=function(){C(ki,0)};function Tl(P){b=P,R||(R=!0,Ni())}function Pl(P,j){A=C(function(){P(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,Tl(N))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(f){case 1:case 2:case 3:var j=3;break;default:j=f}var B=f;f=j;try{return P()}finally{f=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,j){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var B=f;f=P;try{return j()}finally{f=B}},t.unstable_scheduleCallback=function(P,j,B){var de=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?de+B:de):B=de,P){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=B+_e,P={id:d++,callback:j,priorityLevel:P,startTime:B,expirationTime:_e,sortIndex:-1},B>de?(P.sortIndex=B,e(u,P),n(l)===null&&P===n(u)&&(y?(g(A),A=-1):y=!0,Pl(S,B-de))):(P.sortIndex=_e,e(l,P),_||m||(_=!0,Tl(N))),P},t.unstable_shouldYield=Et,t.unstable_wrapCallback=function(P){var j=f;return function(){var B=f;f=j;try{return P.apply(this,arguments)}finally{f=B}}}})(Om);Am.exports=Om;var C0=Am.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I0=k,tt=C0;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Dm=new Set,as={};function Sr(t,e){ti(t,e),ti(t+"Capture",e)}function ti(t,e){for(as[t]=e,t=0;t<e.length;t++)Dm.add(e[t])}var tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wu=Object.prototype.hasOwnProperty,x0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zh={},Wh={};function k0(t){return wu.call(Wh,t)?!0:wu.call(zh,t)?!1:x0.test(t)?Wh[t]=!0:(zh[t]=!0,!1)}function N0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T0(t,e,n,r){if(e===null||typeof e>"u"||N0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ze(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Pe[t]=new ze(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Pe[e]=new ze(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Pe[t]=new ze(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Pe[t]=new ze(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Pe[t]=new ze(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Pe[t]=new ze(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Pe[t]=new ze(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Pe[t]=new ze(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Pe[t]=new ze(t,5,!1,t.toLowerCase(),null,!1,!1)});var qc=/[\-:]([a-z])/g;function Yc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(qc,Yc);Pe[e]=new ze(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(qc,Yc);Pe[e]=new ze(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(qc,Yc);Pe[e]=new ze(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Pe[t]=new ze(t,1,!1,t.toLowerCase(),null,!1,!1)});Pe.xlinkHref=new ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Pe[t]=new ze(t,1,!1,t.toLowerCase(),null,!0,!0)});function Jc(t,e,n,r){var i=Pe.hasOwnProperty(e)?Pe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(T0(e,n,i,r)&&(n=null),r||i===null?k0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var an=I0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,co=Symbol.for("react.element"),Dr=Symbol.for("react.portal"),Lr=Symbol.for("react.fragment"),Xc=Symbol.for("react.strict_mode"),Eu=Symbol.for("react.profiler"),Lm=Symbol.for("react.provider"),Mm=Symbol.for("react.context"),Zc=Symbol.for("react.forward_ref"),Su=Symbol.for("react.suspense"),Cu=Symbol.for("react.suspense_list"),ed=Symbol.for("react.memo"),hn=Symbol.for("react.lazy"),jm=Symbol.for("react.offscreen"),Vh=Symbol.iterator;function Ti(t){return t===null||typeof t!="object"?null:(t=Vh&&t[Vh]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Object.assign,Al;function Bi(t){if(Al===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Al=e&&e[1]||""}return`
`+Al+t}var Ol=!1;function Dl(t,e){if(!t||Ol)return"";Ol=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ol=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Bi(t):""}function P0(t){switch(t.tag){case 5:return Bi(t.type);case 16:return Bi("Lazy");case 13:return Bi("Suspense");case 19:return Bi("SuspenseList");case 0:case 2:case 15:return t=Dl(t.type,!1),t;case 11:return t=Dl(t.type.render,!1),t;case 1:return t=Dl(t.type,!0),t;default:return""}}function Iu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Lr:return"Fragment";case Dr:return"Portal";case Eu:return"Profiler";case Xc:return"StrictMode";case Su:return"Suspense";case Cu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Mm:return(t.displayName||"Context")+".Consumer";case Lm:return(t._context.displayName||"Context")+".Provider";case Zc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ed:return e=t.displayName||null,e!==null?e:Iu(t.type)||"Memo";case hn:e=t._payload,t=t._init;try{return Iu(t(e))}catch{}}return null}function R0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Iu(e);case 8:return e===Xc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Dn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function b0(t){var e=Fm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ho(t){t._valueTracker||(t._valueTracker=b0(t))}function Um(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Fm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Vo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xu(t,e){var n=e.checked;return ue({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Hh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Dn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Bm(t,e){e=e.checked,e!=null&&Jc(t,"checked",e,!1)}function ku(t,e){Bm(t,e);var n=Dn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Nu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Nu(t,e.type,Dn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function $h(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Nu(t,e,n){(e!=="number"||Vo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var zi=Array.isArray;function Gr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Dn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Tu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return ue({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Gh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(zi(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Dn(n)}}function zm(t,e){var n=Dn(e.value),r=Dn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Kh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Wm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Wm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var fo,Vm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(fo=fo||document.createElement("div"),fo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=fo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ls(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var $i={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},A0=["Webkit","ms","Moz","O"];Object.keys($i).forEach(function(t){A0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),$i[e]=$i[t]})});function Hm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||$i.hasOwnProperty(t)&&$i[t]?(""+e).trim():e+"px"}function $m(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Hm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var O0=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ru(t,e){if(e){if(O0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function bu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Au=null;function td(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ou=null,Kr=null,Qr=null;function Qh(t){if(t=Vs(t)){if(typeof Ou!="function")throw Error(I(280));var e=t.stateNode;e&&(e=Ha(e),Ou(t.stateNode,t.type,e))}}function Gm(t){Kr?Qr?Qr.push(t):Qr=[t]:Kr=t}function Km(){if(Kr){var t=Kr,e=Qr;if(Qr=Kr=null,Qh(t),e)for(t=0;t<e.length;t++)Qh(e[t])}}function Qm(t,e){return t(e)}function qm(){}var Ll=!1;function Ym(t,e,n){if(Ll)return t(e,n);Ll=!0;try{return Qm(t,e,n)}finally{Ll=!1,(Kr!==null||Qr!==null)&&(qm(),Km())}}function us(t,e){var n=t.stateNode;if(n===null)return null;var r=Ha(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var Du=!1;if(tn)try{var Pi={};Object.defineProperty(Pi,"passive",{get:function(){Du=!0}}),window.addEventListener("test",Pi,Pi),window.removeEventListener("test",Pi,Pi)}catch{Du=!1}function D0(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Gi=!1,Ho=null,$o=!1,Lu=null,L0={onError:function(t){Gi=!0,Ho=t}};function M0(t,e,n,r,i,s,o,a,l){Gi=!1,Ho=null,D0.apply(L0,arguments)}function j0(t,e,n,r,i,s,o,a,l){if(M0.apply(this,arguments),Gi){if(Gi){var u=Ho;Gi=!1,Ho=null}else throw Error(I(198));$o||($o=!0,Lu=u)}}function Cr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Jm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function qh(t){if(Cr(t)!==t)throw Error(I(188))}function F0(t){var e=t.alternate;if(!e){if(e=Cr(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return qh(i),t;if(s===r)return qh(i),e;s=s.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function Xm(t){return t=F0(t),t!==null?Zm(t):null}function Zm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Zm(t);if(e!==null)return e;t=t.sibling}return null}var eg=tt.unstable_scheduleCallback,Yh=tt.unstable_cancelCallback,U0=tt.unstable_shouldYield,B0=tt.unstable_requestPaint,he=tt.unstable_now,z0=tt.unstable_getCurrentPriorityLevel,nd=tt.unstable_ImmediatePriority,tg=tt.unstable_UserBlockingPriority,Go=tt.unstable_NormalPriority,W0=tt.unstable_LowPriority,ng=tt.unstable_IdlePriority,Ba=null,Ut=null;function V0(t){if(Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(Ba,t,void 0,(t.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:G0,H0=Math.log,$0=Math.LN2;function G0(t){return t>>>=0,t===0?32:31-(H0(t)/$0|0)|0}var po=64,mo=4194304;function Wi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ko(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Wi(a):(s&=o,s!==0&&(r=Wi(s)))}else o=n&~i,o!==0?r=Wi(o):s!==0&&(r=Wi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Tt(e),i=1<<n,r|=t[n],e&=~i;return r}function K0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Q0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Tt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=K0(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Mu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function rg(){var t=po;return po<<=1,!(po&4194240)&&(po=64),t}function Ml(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function zs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Tt(e),t[e]=n}function q0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Tt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function rd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Tt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Q=0;function ig(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var sg,id,og,ag,lg,ju=!1,go=[],En=null,Sn=null,Cn=null,cs=new Map,ds=new Map,pn=[],Y0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jh(t,e){switch(t){case"focusin":case"focusout":En=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":cs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ds.delete(e.pointerId)}}function Ri(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Vs(e),e!==null&&id(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function J0(t,e,n,r,i){switch(e){case"focusin":return En=Ri(En,t,e,n,r,i),!0;case"dragenter":return Sn=Ri(Sn,t,e,n,r,i),!0;case"mouseover":return Cn=Ri(Cn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return cs.set(s,Ri(cs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ds.set(s,Ri(ds.get(s)||null,t,e,n,r,i)),!0}return!1}function ug(t){var e=rr(t.target);if(e!==null){var n=Cr(e);if(n!==null){if(e=n.tag,e===13){if(e=Jm(n),e!==null){t.blockedOn=e,lg(t.priority,function(){og(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Fu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Au=r,n.target.dispatchEvent(r),Au=null}else return e=Vs(n),e!==null&&id(e),t.blockedOn=n,!1;e.shift()}return!0}function Xh(t,e,n){bo(t)&&n.delete(e)}function X0(){ju=!1,En!==null&&bo(En)&&(En=null),Sn!==null&&bo(Sn)&&(Sn=null),Cn!==null&&bo(Cn)&&(Cn=null),cs.forEach(Xh),ds.forEach(Xh)}function bi(t,e){t.blockedOn===e&&(t.blockedOn=null,ju||(ju=!0,tt.unstable_scheduleCallback(tt.unstable_NormalPriority,X0)))}function hs(t){function e(i){return bi(i,t)}if(0<go.length){bi(go[0],t);for(var n=1;n<go.length;n++){var r=go[n];r.blockedOn===t&&(r.blockedOn=null)}}for(En!==null&&bi(En,t),Sn!==null&&bi(Sn,t),Cn!==null&&bi(Cn,t),cs.forEach(e),ds.forEach(e),n=0;n<pn.length;n++)r=pn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<pn.length&&(n=pn[0],n.blockedOn===null);)ug(n),n.blockedOn===null&&pn.shift()}var qr=an.ReactCurrentBatchConfig,Qo=!0;function Z0(t,e,n,r){var i=Q,s=qr.transition;qr.transition=null;try{Q=1,sd(t,e,n,r)}finally{Q=i,qr.transition=s}}function ew(t,e,n,r){var i=Q,s=qr.transition;qr.transition=null;try{Q=4,sd(t,e,n,r)}finally{Q=i,qr.transition=s}}function sd(t,e,n,r){if(Qo){var i=Fu(t,e,n,r);if(i===null)Gl(t,e,r,qo,n),Jh(t,r);else if(J0(i,t,e,n,r))r.stopPropagation();else if(Jh(t,r),e&4&&-1<Y0.indexOf(t)){for(;i!==null;){var s=Vs(i);if(s!==null&&sg(s),s=Fu(t,e,n,r),s===null&&Gl(t,e,r,qo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Gl(t,e,r,null,n)}}var qo=null;function Fu(t,e,n,r){if(qo=null,t=td(r),t=rr(t),t!==null)if(e=Cr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Jm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return qo=t,null}function cg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(z0()){case nd:return 1;case tg:return 4;case Go:case W0:return 16;case ng:return 536870912;default:return 16}default:return 16}}var gn=null,od=null,Ao=null;function dg(){if(Ao)return Ao;var t,e=od,n=e.length,r,i="value"in gn?gn.value:gn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ao=i.slice(t,1<r?1-r:void 0)}function Oo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function vo(){return!0}function Zh(){return!1}function ot(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?vo:Zh,this.isPropagationStopped=Zh,this}return ue(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vo)},persist:function(){},isPersistent:vo}),e}var vi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ad=ot(vi),Ws=ue({},vi,{view:0,detail:0}),tw=ot(Ws),jl,Fl,Ai,za=ue({},Ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ld,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ai&&(Ai&&t.type==="mousemove"?(jl=t.screenX-Ai.screenX,Fl=t.screenY-Ai.screenY):Fl=jl=0,Ai=t),jl)},movementY:function(t){return"movementY"in t?t.movementY:Fl}}),ef=ot(za),nw=ue({},za,{dataTransfer:0}),rw=ot(nw),iw=ue({},Ws,{relatedTarget:0}),Ul=ot(iw),sw=ue({},vi,{animationName:0,elapsedTime:0,pseudoElement:0}),ow=ot(sw),aw=ue({},vi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),lw=ot(aw),uw=ue({},vi,{data:0}),tf=ot(uw),cw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=hw[t])?!!e[t]:!1}function ld(){return fw}var pw=ue({},Ws,{key:function(t){if(t.key){var e=cw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Oo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ld,charCode:function(t){return t.type==="keypress"?Oo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Oo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),mw=ot(pw),gw=ue({},za,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nf=ot(gw),vw=ue({},Ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ld}),_w=ot(vw),yw=ue({},vi,{propertyName:0,elapsedTime:0,pseudoElement:0}),ww=ot(yw),Ew=ue({},za,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Sw=ot(Ew),Cw=[9,13,27,32],ud=tn&&"CompositionEvent"in window,Ki=null;tn&&"documentMode"in document&&(Ki=document.documentMode);var Iw=tn&&"TextEvent"in window&&!Ki,hg=tn&&(!ud||Ki&&8<Ki&&11>=Ki),rf=" ",sf=!1;function fg(t,e){switch(t){case"keyup":return Cw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Mr=!1;function xw(t,e){switch(t){case"compositionend":return pg(e);case"keypress":return e.which!==32?null:(sf=!0,rf);case"textInput":return t=e.data,t===rf&&sf?null:t;default:return null}}function kw(t,e){if(Mr)return t==="compositionend"||!ud&&fg(t,e)?(t=dg(),Ao=od=gn=null,Mr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return hg&&e.locale!=="ko"?null:e.data;default:return null}}var Nw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function of(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Nw[t.type]:e==="textarea"}function mg(t,e,n,r){Gm(r),e=Yo(e,"onChange"),0<e.length&&(n=new ad("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Qi=null,fs=null;function Tw(t){kg(t,0)}function Wa(t){var e=Ur(t);if(Um(e))return t}function Pw(t,e){if(t==="change")return e}var gg=!1;if(tn){var Bl;if(tn){var zl="oninput"in document;if(!zl){var af=document.createElement("div");af.setAttribute("oninput","return;"),zl=typeof af.oninput=="function"}Bl=zl}else Bl=!1;gg=Bl&&(!document.documentMode||9<document.documentMode)}function lf(){Qi&&(Qi.detachEvent("onpropertychange",vg),fs=Qi=null)}function vg(t){if(t.propertyName==="value"&&Wa(fs)){var e=[];mg(e,fs,t,td(t)),Ym(Tw,e)}}function Rw(t,e,n){t==="focusin"?(lf(),Qi=e,fs=n,Qi.attachEvent("onpropertychange",vg)):t==="focusout"&&lf()}function bw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wa(fs)}function Aw(t,e){if(t==="click")return Wa(e)}function Ow(t,e){if(t==="input"||t==="change")return Wa(e)}function Dw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var At=typeof Object.is=="function"?Object.is:Dw;function ps(t,e){if(At(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!wu.call(e,i)||!At(t[i],e[i]))return!1}return!0}function uf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cf(t,e){var n=uf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=uf(n)}}function _g(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?_g(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function yg(){for(var t=window,e=Vo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Vo(t.document)}return e}function cd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Lw(t){var e=yg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&_g(n.ownerDocument.documentElement,n)){if(r!==null&&cd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=cf(n,s);var o=cf(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Mw=tn&&"documentMode"in document&&11>=document.documentMode,jr=null,Uu=null,qi=null,Bu=!1;function df(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bu||jr==null||jr!==Vo(r)||(r=jr,"selectionStart"in r&&cd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qi&&ps(qi,r)||(qi=r,r=Yo(Uu,"onSelect"),0<r.length&&(e=new ad("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=jr)))}function _o(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Fr={animationend:_o("Animation","AnimationEnd"),animationiteration:_o("Animation","AnimationIteration"),animationstart:_o("Animation","AnimationStart"),transitionend:_o("Transition","TransitionEnd")},Wl={},wg={};tn&&(wg=document.createElement("div").style,"AnimationEvent"in window||(delete Fr.animationend.animation,delete Fr.animationiteration.animation,delete Fr.animationstart.animation),"TransitionEvent"in window||delete Fr.transitionend.transition);function Va(t){if(Wl[t])return Wl[t];if(!Fr[t])return t;var e=Fr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in wg)return Wl[t]=e[n];return t}var Eg=Va("animationend"),Sg=Va("animationiteration"),Cg=Va("animationstart"),Ig=Va("transitionend"),xg=new Map,hf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $n(t,e){xg.set(t,e),Sr(e,[t])}for(var Vl=0;Vl<hf.length;Vl++){var Hl=hf[Vl],jw=Hl.toLowerCase(),Fw=Hl[0].toUpperCase()+Hl.slice(1);$n(jw,"on"+Fw)}$n(Eg,"onAnimationEnd");$n(Sg,"onAnimationIteration");$n(Cg,"onAnimationStart");$n("dblclick","onDoubleClick");$n("focusin","onFocus");$n("focusout","onBlur");$n(Ig,"onTransitionEnd");ti("onMouseEnter",["mouseout","mouseover"]);ti("onMouseLeave",["mouseout","mouseover"]);ti("onPointerEnter",["pointerout","pointerover"]);ti("onPointerLeave",["pointerout","pointerover"]);Sr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Sr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Sr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Sr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Sr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Sr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vi));function ff(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,j0(r,e,void 0,t),t.currentTarget=null}function kg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;ff(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;ff(i,a,u),s=l}}}if($o)throw t=Lu,$o=!1,Lu=null,t}function ee(t,e){var n=e[$u];n===void 0&&(n=e[$u]=new Set);var r=t+"__bubble";n.has(r)||(Ng(e,t,2,!1),n.add(r))}function $l(t,e,n){var r=0;e&&(r|=4),Ng(n,t,r,e)}var yo="_reactListening"+Math.random().toString(36).slice(2);function ms(t){if(!t[yo]){t[yo]=!0,Dm.forEach(function(n){n!=="selectionchange"&&(Uw.has(n)||$l(n,!1,t),$l(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[yo]||(e[yo]=!0,$l("selectionchange",!1,e))}}function Ng(t,e,n,r){switch(cg(e)){case 1:var i=Z0;break;case 4:i=ew;break;default:i=sd}n=i.bind(null,e,n,t),i=void 0,!Du||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Gl(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=rr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Ym(function(){var u=s,d=td(n),c=[];e:{var f=xg.get(t);if(f!==void 0){var m=ad,_=t;switch(t){case"keypress":if(Oo(n)===0)break e;case"keydown":case"keyup":m=mw;break;case"focusin":_="focus",m=Ul;break;case"focusout":_="blur",m=Ul;break;case"beforeblur":case"afterblur":m=Ul;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=ef;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=rw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=_w;break;case Eg:case Sg:case Cg:m=ow;break;case Ig:m=ww;break;case"scroll":m=tw;break;case"wheel":m=Sw;break;case"copy":case"cut":case"paste":m=lw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=nf}var y=(e&4)!==0,C=!y&&t==="scroll",g=y?f!==null?f+"Capture":null:f;y=[];for(var p=u,v;p!==null;){v=p;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,g!==null&&(S=us(p,g),S!=null&&y.push(gs(p,S,v)))),C)break;p=p.return}0<y.length&&(f=new m(f,_,null,n,d),c.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Au&&(_=n.relatedTarget||n.fromElement)&&(rr(_)||_[nn]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=u,_=_?rr(_):null,_!==null&&(C=Cr(_),_!==C||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=u),m!==_)){if(y=ef,S="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(y=nf,S="onPointerLeave",g="onPointerEnter",p="pointer"),C=m==null?f:Ur(m),v=_==null?f:Ur(_),f=new y(S,p+"leave",m,n,d),f.target=C,f.relatedTarget=v,S=null,rr(d)===u&&(y=new y(g,p+"enter",_,n,d),y.target=v,y.relatedTarget=C,S=y),C=S,m&&_)t:{for(y=m,g=_,p=0,v=y;v;v=Ar(v))p++;for(v=0,S=g;S;S=Ar(S))v++;for(;0<p-v;)y=Ar(y),p--;for(;0<v-p;)g=Ar(g),v--;for(;p--;){if(y===g||g!==null&&y===g.alternate)break t;y=Ar(y),g=Ar(g)}y=null}else y=null;m!==null&&pf(c,f,m,y,!1),_!==null&&C!==null&&pf(c,C,_,y,!0)}}e:{if(f=u?Ur(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var N=Pw;else if(of(f))if(gg)N=Ow;else{N=bw;var R=Rw}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(N=Aw);if(N&&(N=N(t,u))){mg(c,N,n,d);break e}R&&R(t,f,u),t==="focusout"&&(R=f._wrapperState)&&R.controlled&&f.type==="number"&&Nu(f,"number",f.value)}switch(R=u?Ur(u):window,t){case"focusin":(of(R)||R.contentEditable==="true")&&(jr=R,Uu=u,qi=null);break;case"focusout":qi=Uu=jr=null;break;case"mousedown":Bu=!0;break;case"contextmenu":case"mouseup":case"dragend":Bu=!1,df(c,n,d);break;case"selectionchange":if(Mw)break;case"keydown":case"keyup":df(c,n,d)}var b;if(ud)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Mr?fg(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(hg&&n.locale!=="ko"&&(Mr||A!=="onCompositionStart"?A==="onCompositionEnd"&&Mr&&(b=dg()):(gn=d,od="value"in gn?gn.value:gn.textContent,Mr=!0)),R=Yo(u,A),0<R.length&&(A=new tf(A,t,null,n,d),c.push({event:A,listeners:R}),b?A.data=b:(b=pg(n),b!==null&&(A.data=b)))),(b=Iw?xw(t,n):kw(t,n))&&(u=Yo(u,"onBeforeInput"),0<u.length&&(d=new tf("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=b))}kg(c,e)})}function gs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Yo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=us(t,n),s!=null&&r.unshift(gs(t,s,i)),s=us(t,e),s!=null&&r.push(gs(t,s,i))),t=t.return}return r}function Ar(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function pf(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=us(n,s),l!=null&&o.unshift(gs(n,l,a))):i||(l=us(n,s),l!=null&&o.push(gs(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Bw=/\r\n?/g,zw=/\u0000|\uFFFD/g;function mf(t){return(typeof t=="string"?t:""+t).replace(Bw,`
`).replace(zw,"")}function wo(t,e,n){if(e=mf(e),mf(t)!==e&&n)throw Error(I(425))}function Jo(){}var zu=null,Wu=null;function Vu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Hu=typeof setTimeout=="function"?setTimeout:void 0,Ww=typeof clearTimeout=="function"?clearTimeout:void 0,gf=typeof Promise=="function"?Promise:void 0,Vw=typeof queueMicrotask=="function"?queueMicrotask:typeof gf<"u"?function(t){return gf.resolve(null).then(t).catch(Hw)}:Hu;function Hw(t){setTimeout(function(){throw t})}function Kl(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),hs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);hs(e)}function In(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function vf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var _i=Math.random().toString(36).slice(2),jt="__reactFiber$"+_i,vs="__reactProps$"+_i,nn="__reactContainer$"+_i,$u="__reactEvents$"+_i,$w="__reactListeners$"+_i,Gw="__reactHandles$"+_i;function rr(t){var e=t[jt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[nn]||n[jt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=vf(t);t!==null;){if(n=t[jt])return n;t=vf(t)}return e}t=n,n=t.parentNode}return null}function Vs(t){return t=t[jt]||t[nn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ur(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function Ha(t){return t[vs]||null}var Gu=[],Br=-1;function Gn(t){return{current:t}}function ne(t){0>Br||(t.current=Gu[Br],Gu[Br]=null,Br--)}function J(t,e){Br++,Gu[Br]=t.current,t.current=e}var Ln={},Le=Gn(Ln),Ge=Gn(!1),dr=Ln;function ni(t,e){var n=t.type.contextTypes;if(!n)return Ln;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ke(t){return t=t.childContextTypes,t!=null}function Xo(){ne(Ge),ne(Le)}function _f(t,e,n){if(Le.current!==Ln)throw Error(I(168));J(Le,e),J(Ge,n)}function Tg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(I(108,R0(t)||"Unknown",i));return ue({},n,r)}function Zo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ln,dr=Le.current,J(Le,t),J(Ge,Ge.current),!0}function yf(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=Tg(t,e,dr),r.__reactInternalMemoizedMergedChildContext=t,ne(Ge),ne(Le),J(Le,t)):ne(Ge),J(Ge,n)}var Gt=null,$a=!1,Ql=!1;function Pg(t){Gt===null?Gt=[t]:Gt.push(t)}function Kw(t){$a=!0,Pg(t)}function Kn(){if(!Ql&&Gt!==null){Ql=!0;var t=0,e=Q;try{var n=Gt;for(Q=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Gt=null,$a=!1}catch(i){throw Gt!==null&&(Gt=Gt.slice(t+1)),eg(nd,Kn),i}finally{Q=e,Ql=!1}}return null}var zr=[],Wr=0,ea=null,ta=0,lt=[],ut=0,hr=null,Kt=1,Qt="";function Zn(t,e){zr[Wr++]=ta,zr[Wr++]=ea,ea=t,ta=e}function Rg(t,e,n){lt[ut++]=Kt,lt[ut++]=Qt,lt[ut++]=hr,hr=t;var r=Kt;t=Qt;var i=32-Tt(r)-1;r&=~(1<<i),n+=1;var s=32-Tt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Kt=1<<32-Tt(e)+i|n<<i|r,Qt=s+t}else Kt=1<<s|n<<i|r,Qt=t}function dd(t){t.return!==null&&(Zn(t,1),Rg(t,1,0))}function hd(t){for(;t===ea;)ea=zr[--Wr],zr[Wr]=null,ta=zr[--Wr],zr[Wr]=null;for(;t===hr;)hr=lt[--ut],lt[ut]=null,Qt=lt[--ut],lt[ut]=null,Kt=lt[--ut],lt[ut]=null}var et=null,Ze=null,re=!1,kt=null;function bg(t,e){var n=dt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function wf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,et=t,Ze=In(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,et=t,Ze=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=hr!==null?{id:Kt,overflow:Qt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=dt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,et=t,Ze=null,!0):!1;default:return!1}}function Ku(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Qu(t){if(re){var e=Ze;if(e){var n=e;if(!wf(t,e)){if(Ku(t))throw Error(I(418));e=In(n.nextSibling);var r=et;e&&wf(t,e)?bg(r,n):(t.flags=t.flags&-4097|2,re=!1,et=t)}}else{if(Ku(t))throw Error(I(418));t.flags=t.flags&-4097|2,re=!1,et=t}}}function Ef(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;et=t}function Eo(t){if(t!==et)return!1;if(!re)return Ef(t),re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Vu(t.type,t.memoizedProps)),e&&(e=Ze)){if(Ku(t))throw Ag(),Error(I(418));for(;e;)bg(t,e),e=In(e.nextSibling)}if(Ef(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ze=In(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ze=null}}else Ze=et?In(t.stateNode.nextSibling):null;return!0}function Ag(){for(var t=Ze;t;)t=In(t.nextSibling)}function ri(){Ze=et=null,re=!1}function fd(t){kt===null?kt=[t]:kt.push(t)}var Qw=an.ReactCurrentBatchConfig;function Oi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function So(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Sf(t){var e=t._init;return e(t._payload)}function Og(t){function e(g,p){if(t){var v=g.deletions;v===null?(g.deletions=[p],g.flags|=16):v.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=Tn(g,p),g.index=0,g.sibling=null,g}function s(g,p,v){return g.index=v,t?(v=g.alternate,v!==null?(v=v.index,v<p?(g.flags|=2,p):v):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,p,v,S){return p===null||p.tag!==6?(p=tu(v,g.mode,S),p.return=g,p):(p=i(p,v),p.return=g,p)}function l(g,p,v,S){var N=v.type;return N===Lr?d(g,p,v.props.children,S,v.key):p!==null&&(p.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===hn&&Sf(N)===p.type)?(S=i(p,v.props),S.ref=Oi(g,p,v),S.return=g,S):(S=Bo(v.type,v.key,v.props,null,g.mode,S),S.ref=Oi(g,p,v),S.return=g,S)}function u(g,p,v,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=nu(v,g.mode,S),p.return=g,p):(p=i(p,v.children||[]),p.return=g,p)}function d(g,p,v,S,N){return p===null||p.tag!==7?(p=lr(v,g.mode,S,N),p.return=g,p):(p=i(p,v),p.return=g,p)}function c(g,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=tu(""+p,g.mode,v),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case co:return v=Bo(p.type,p.key,p.props,null,g.mode,v),v.ref=Oi(g,null,p),v.return=g,v;case Dr:return p=nu(p,g.mode,v),p.return=g,p;case hn:var S=p._init;return c(g,S(p._payload),v)}if(zi(p)||Ti(p))return p=lr(p,g.mode,v,null),p.return=g,p;So(g,p)}return null}function f(g,p,v,S){var N=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return N!==null?null:a(g,p,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case co:return v.key===N?l(g,p,v,S):null;case Dr:return v.key===N?u(g,p,v,S):null;case hn:return N=v._init,f(g,p,N(v._payload),S)}if(zi(v)||Ti(v))return N!==null?null:d(g,p,v,S,null);So(g,v)}return null}function m(g,p,v,S,N){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(v)||null,a(p,g,""+S,N);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case co:return g=g.get(S.key===null?v:S.key)||null,l(p,g,S,N);case Dr:return g=g.get(S.key===null?v:S.key)||null,u(p,g,S,N);case hn:var R=S._init;return m(g,p,v,R(S._payload),N)}if(zi(S)||Ti(S))return g=g.get(v)||null,d(p,g,S,N,null);So(p,S)}return null}function _(g,p,v,S){for(var N=null,R=null,b=p,A=p=0,Z=null;b!==null&&A<v.length;A++){b.index>A?(Z=b,b=null):Z=b.sibling;var W=f(g,b,v[A],S);if(W===null){b===null&&(b=Z);break}t&&b&&W.alternate===null&&e(g,b),p=s(W,p,A),R===null?N=W:R.sibling=W,R=W,b=Z}if(A===v.length)return n(g,b),re&&Zn(g,A),N;if(b===null){for(;A<v.length;A++)b=c(g,v[A],S),b!==null&&(p=s(b,p,A),R===null?N=b:R.sibling=b,R=b);return re&&Zn(g,A),N}for(b=r(g,b);A<v.length;A++)Z=m(b,g,A,v[A],S),Z!==null&&(t&&Z.alternate!==null&&b.delete(Z.key===null?A:Z.key),p=s(Z,p,A),R===null?N=Z:R.sibling=Z,R=Z);return t&&b.forEach(function(Et){return e(g,Et)}),re&&Zn(g,A),N}function y(g,p,v,S){var N=Ti(v);if(typeof N!="function")throw Error(I(150));if(v=N.call(v),v==null)throw Error(I(151));for(var R=N=null,b=p,A=p=0,Z=null,W=v.next();b!==null&&!W.done;A++,W=v.next()){b.index>A?(Z=b,b=null):Z=b.sibling;var Et=f(g,b,W.value,S);if(Et===null){b===null&&(b=Z);break}t&&b&&Et.alternate===null&&e(g,b),p=s(Et,p,A),R===null?N=Et:R.sibling=Et,R=Et,b=Z}if(W.done)return n(g,b),re&&Zn(g,A),N;if(b===null){for(;!W.done;A++,W=v.next())W=c(g,W.value,S),W!==null&&(p=s(W,p,A),R===null?N=W:R.sibling=W,R=W);return re&&Zn(g,A),N}for(b=r(g,b);!W.done;A++,W=v.next())W=m(b,g,A,W.value,S),W!==null&&(t&&W.alternate!==null&&b.delete(W.key===null?A:W.key),p=s(W,p,A),R===null?N=W:R.sibling=W,R=W);return t&&b.forEach(function(ki){return e(g,ki)}),re&&Zn(g,A),N}function C(g,p,v,S){if(typeof v=="object"&&v!==null&&v.type===Lr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case co:e:{for(var N=v.key,R=p;R!==null;){if(R.key===N){if(N=v.type,N===Lr){if(R.tag===7){n(g,R.sibling),p=i(R,v.props.children),p.return=g,g=p;break e}}else if(R.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===hn&&Sf(N)===R.type){n(g,R.sibling),p=i(R,v.props),p.ref=Oi(g,R,v),p.return=g,g=p;break e}n(g,R);break}else e(g,R);R=R.sibling}v.type===Lr?(p=lr(v.props.children,g.mode,S,v.key),p.return=g,g=p):(S=Bo(v.type,v.key,v.props,null,g.mode,S),S.ref=Oi(g,p,v),S.return=g,g=S)}return o(g);case Dr:e:{for(R=v.key;p!==null;){if(p.key===R)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(g,p.sibling),p=i(p,v.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=nu(v,g.mode,S),p.return=g,g=p}return o(g);case hn:return R=v._init,C(g,p,R(v._payload),S)}if(zi(v))return _(g,p,v,S);if(Ti(v))return y(g,p,v,S);So(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,v),p.return=g,g=p):(n(g,p),p=tu(v,g.mode,S),p.return=g,g=p),o(g)):n(g,p)}return C}var ii=Og(!0),Dg=Og(!1),na=Gn(null),ra=null,Vr=null,pd=null;function md(){pd=Vr=ra=null}function gd(t){var e=na.current;ne(na),t._currentValue=e}function qu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Yr(t,e){ra=t,pd=Vr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(He=!0),t.firstContext=null)}function vt(t){var e=t._currentValue;if(pd!==t)if(t={context:t,memoizedValue:e,next:null},Vr===null){if(ra===null)throw Error(I(308));Vr=t,ra.dependencies={lanes:0,firstContext:t}}else Vr=Vr.next=t;return e}var ir=null;function vd(t){ir===null?ir=[t]:ir.push(t)}function Lg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,vd(e)):(n.next=i.next,i.next=n),e.interleaved=n,rn(t,r)}function rn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var fn=!1;function _d(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Xt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function xn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,rn(t,n)}return i=r.interleaved,i===null?(e.next=e,vd(r)):(e.next=i.next,i.next=e),r.interleaved=e,rn(t,n)}function Do(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,rd(t,n)}}function Cf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ia(t,e,n,r){var i=t.updateQueue;fn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var c=i.baseState;o=0,d=u=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(f=e,m=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){c=_.call(m,c,f);break e}c=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,f=typeof _=="function"?_.call(m,c,f):_,f==null)break e;c=ue({},c,f);break e;case 2:fn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=m,l=c):d=d.next=m,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(l=c),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);pr|=o,t.lanes=o,t.memoizedState=c}}function If(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var Hs={},Bt=Gn(Hs),_s=Gn(Hs),ys=Gn(Hs);function sr(t){if(t===Hs)throw Error(I(174));return t}function yd(t,e){switch(J(ys,e),J(_s,t),J(Bt,Hs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Pu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Pu(e,t)}ne(Bt),J(Bt,e)}function si(){ne(Bt),ne(_s),ne(ys)}function jg(t){sr(ys.current);var e=sr(Bt.current),n=Pu(e,t.type);e!==n&&(J(_s,t),J(Bt,n))}function wd(t){_s.current===t&&(ne(Bt),ne(_s))}var oe=Gn(0);function sa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ql=[];function Ed(){for(var t=0;t<ql.length;t++)ql[t]._workInProgressVersionPrimary=null;ql.length=0}var Lo=an.ReactCurrentDispatcher,Yl=an.ReactCurrentBatchConfig,fr=0,le=null,me=null,we=null,oa=!1,Yi=!1,ws=0,qw=0;function be(){throw Error(I(321))}function Sd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!At(t[n],e[n]))return!1;return!0}function Cd(t,e,n,r,i,s){if(fr=s,le=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Lo.current=t===null||t.memoizedState===null?Zw:eE,t=n(r,i),Yi){s=0;do{if(Yi=!1,ws=0,25<=s)throw Error(I(301));s+=1,we=me=null,e.updateQueue=null,Lo.current=tE,t=n(r,i)}while(Yi)}if(Lo.current=aa,e=me!==null&&me.next!==null,fr=0,we=me=le=null,oa=!1,e)throw Error(I(300));return t}function Id(){var t=ws!==0;return ws=0,t}function Mt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?le.memoizedState=we=t:we=we.next=t,we}function _t(){if(me===null){var t=le.alternate;t=t!==null?t.memoizedState:null}else t=me.next;var e=we===null?le.memoizedState:we.next;if(e!==null)we=e,me=t;else{if(t===null)throw Error(I(310));me=t,t={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},we===null?le.memoizedState=we=t:we=we.next=t}return we}function Es(t,e){return typeof e=="function"?e(t):e}function Jl(t){var e=_t(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=me,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((fr&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=c,o=r):l=l.next=c,le.lanes|=d,pr|=d}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,At(r,e.memoizedState)||(He=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,le.lanes|=s,pr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Xl(t){var e=_t(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);At(s,e.memoizedState)||(He=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Fg(){}function Ug(t,e){var n=le,r=_t(),i=e(),s=!At(r.memoizedState,i);if(s&&(r.memoizedState=i,He=!0),r=r.queue,xd(Wg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||we!==null&&we.memoizedState.tag&1){if(n.flags|=2048,Ss(9,zg.bind(null,n,r,i,e),void 0,null),Ie===null)throw Error(I(349));fr&30||Bg(n,e,i)}return i}function Bg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=le.updateQueue,e===null?(e={lastEffect:null,stores:null},le.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function zg(t,e,n,r){e.value=n,e.getSnapshot=r,Vg(e)&&Hg(t)}function Wg(t,e,n){return n(function(){Vg(e)&&Hg(t)})}function Vg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!At(t,n)}catch{return!0}}function Hg(t){var e=rn(t,1);e!==null&&Pt(e,t,1,-1)}function xf(t){var e=Mt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Es,lastRenderedState:t},e.queue=t,t=t.dispatch=Xw.bind(null,le,t),[e.memoizedState,t]}function Ss(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=le.updateQueue,e===null?(e={lastEffect:null,stores:null},le.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function $g(){return _t().memoizedState}function Mo(t,e,n,r){var i=Mt();le.flags|=t,i.memoizedState=Ss(1|e,n,void 0,r===void 0?null:r)}function Ga(t,e,n,r){var i=_t();r=r===void 0?null:r;var s=void 0;if(me!==null){var o=me.memoizedState;if(s=o.destroy,r!==null&&Sd(r,o.deps)){i.memoizedState=Ss(e,n,s,r);return}}le.flags|=t,i.memoizedState=Ss(1|e,n,s,r)}function kf(t,e){return Mo(8390656,8,t,e)}function xd(t,e){return Ga(2048,8,t,e)}function Gg(t,e){return Ga(4,2,t,e)}function Kg(t,e){return Ga(4,4,t,e)}function Qg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function qg(t,e,n){return n=n!=null?n.concat([t]):null,Ga(4,4,Qg.bind(null,e,t),n)}function kd(){}function Yg(t,e){var n=_t();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Sd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Jg(t,e){var n=_t();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Sd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Xg(t,e,n){return fr&21?(At(n,e)||(n=rg(),le.lanes|=n,pr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,He=!0),t.memoizedState=n)}function Yw(t,e){var n=Q;Q=n!==0&&4>n?n:4,t(!0);var r=Yl.transition;Yl.transition={};try{t(!1),e()}finally{Q=n,Yl.transition=r}}function Zg(){return _t().memoizedState}function Jw(t,e,n){var r=Nn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ev(t))tv(e,n);else if(n=Lg(t,e,n,r),n!==null){var i=Fe();Pt(n,t,r,i),nv(n,e,r)}}function Xw(t,e,n){var r=Nn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ev(t))tv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,At(a,o)){var l=e.interleaved;l===null?(i.next=i,vd(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Lg(t,e,i,r),n!==null&&(i=Fe(),Pt(n,t,r,i),nv(n,e,r))}}function ev(t){var e=t.alternate;return t===le||e!==null&&e===le}function tv(t,e){Yi=oa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function nv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,rd(t,n)}}var aa={readContext:vt,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useInsertionEffect:be,useLayoutEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useMutableSource:be,useSyncExternalStore:be,useId:be,unstable_isNewReconciler:!1},Zw={readContext:vt,useCallback:function(t,e){return Mt().memoizedState=[t,e===void 0?null:e],t},useContext:vt,useEffect:kf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Mo(4194308,4,Qg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Mo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Mo(4,2,t,e)},useMemo:function(t,e){var n=Mt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Mt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Jw.bind(null,le,t),[r.memoizedState,t]},useRef:function(t){var e=Mt();return t={current:t},e.memoizedState=t},useState:xf,useDebugValue:kd,useDeferredValue:function(t){return Mt().memoizedState=t},useTransition:function(){var t=xf(!1),e=t[0];return t=Yw.bind(null,t[1]),Mt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=le,i=Mt();if(re){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),Ie===null)throw Error(I(349));fr&30||Bg(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,kf(Wg.bind(null,r,s,t),[t]),r.flags|=2048,Ss(9,zg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Mt(),e=Ie.identifierPrefix;if(re){var n=Qt,r=Kt;n=(r&~(1<<32-Tt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ws++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=qw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},eE={readContext:vt,useCallback:Yg,useContext:vt,useEffect:xd,useImperativeHandle:qg,useInsertionEffect:Gg,useLayoutEffect:Kg,useMemo:Jg,useReducer:Jl,useRef:$g,useState:function(){return Jl(Es)},useDebugValue:kd,useDeferredValue:function(t){var e=_t();return Xg(e,me.memoizedState,t)},useTransition:function(){var t=Jl(Es)[0],e=_t().memoizedState;return[t,e]},useMutableSource:Fg,useSyncExternalStore:Ug,useId:Zg,unstable_isNewReconciler:!1},tE={readContext:vt,useCallback:Yg,useContext:vt,useEffect:xd,useImperativeHandle:qg,useInsertionEffect:Gg,useLayoutEffect:Kg,useMemo:Jg,useReducer:Xl,useRef:$g,useState:function(){return Xl(Es)},useDebugValue:kd,useDeferredValue:function(t){var e=_t();return me===null?e.memoizedState=t:Xg(e,me.memoizedState,t)},useTransition:function(){var t=Xl(Es)[0],e=_t().memoizedState;return[t,e]},useMutableSource:Fg,useSyncExternalStore:Ug,useId:Zg,unstable_isNewReconciler:!1};function It(t,e){if(t&&t.defaultProps){e=ue({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Yu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ue({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ka={isMounted:function(t){return(t=t._reactInternals)?Cr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Fe(),i=Nn(t),s=Xt(r,i);s.payload=e,n!=null&&(s.callback=n),e=xn(t,s,i),e!==null&&(Pt(e,t,i,r),Do(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Fe(),i=Nn(t),s=Xt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=xn(t,s,i),e!==null&&(Pt(e,t,i,r),Do(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Fe(),r=Nn(t),i=Xt(n,r);i.tag=2,e!=null&&(i.callback=e),e=xn(t,i,r),e!==null&&(Pt(e,t,r,n),Do(e,t,r))}};function Nf(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ps(n,r)||!ps(i,s):!0}function rv(t,e,n){var r=!1,i=Ln,s=e.contextType;return typeof s=="object"&&s!==null?s=vt(s):(i=Ke(e)?dr:Le.current,r=e.contextTypes,s=(r=r!=null)?ni(t,i):Ln),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ka,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Tf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ka.enqueueReplaceState(e,e.state,null)}function Ju(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},_d(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=vt(s):(s=Ke(e)?dr:Le.current,i.context=ni(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Yu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ka.enqueueReplaceState(i,i.state,null),ia(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function oi(t,e){try{var n="",r=e;do n+=P0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Zl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Xu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var nE=typeof WeakMap=="function"?WeakMap:Map;function iv(t,e,n){n=Xt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ua||(ua=!0,lc=r),Xu(t,e)},n}function sv(t,e,n){n=Xt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Xu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Xu(t,e),typeof r!="function"&&(kn===null?kn=new Set([this]):kn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Pf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new nE;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=gE.bind(null,t,e,n),e.then(t,t))}function Rf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function bf(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Xt(-1,1),e.tag=2,xn(n,e,1))),n.lanes|=1),t)}var rE=an.ReactCurrentOwner,He=!1;function Me(t,e,n,r){e.child=t===null?Dg(e,null,n,r):ii(e,t.child,n,r)}function Af(t,e,n,r,i){n=n.render;var s=e.ref;return Yr(e,i),r=Cd(t,e,n,r,s,i),n=Id(),t!==null&&!He?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,sn(t,e,i)):(re&&n&&dd(e),e.flags|=1,Me(t,e,r,i),e.child)}function Of(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Dd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ov(t,e,s,r,i)):(t=Bo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ps,n(o,r)&&t.ref===e.ref)return sn(t,e,i)}return e.flags|=1,t=Tn(s,r),t.ref=e.ref,t.return=e,e.child=t}function ov(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ps(s,r)&&t.ref===e.ref)if(He=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(He=!0);else return e.lanes=t.lanes,sn(t,e,i)}return Zu(t,e,n,r,i)}function av(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},J($r,Je),Je|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,J($r,Je),Je|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,J($r,Je),Je|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,J($r,Je),Je|=r;return Me(t,e,i,n),e.child}function lv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Zu(t,e,n,r,i){var s=Ke(n)?dr:Le.current;return s=ni(e,s),Yr(e,i),n=Cd(t,e,n,r,s,i),r=Id(),t!==null&&!He?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,sn(t,e,i)):(re&&r&&dd(e),e.flags|=1,Me(t,e,n,i),e.child)}function Df(t,e,n,r,i){if(Ke(n)){var s=!0;Zo(e)}else s=!1;if(Yr(e,i),e.stateNode===null)jo(t,e),rv(e,n,r),Ju(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=vt(u):(u=Ke(n)?dr:Le.current,u=ni(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Tf(e,o,r,u),fn=!1;var f=e.memoizedState;o.state=f,ia(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Ge.current||fn?(typeof d=="function"&&(Yu(e,n,d,r),l=e.memoizedState),(a=fn||Nf(e,n,a,r,f,l,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Mg(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:It(e.type,a),o.props=u,c=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=vt(l):(l=Ke(n)?dr:Le.current,l=ni(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==c||f!==l)&&Tf(e,o,r,l),fn=!1,f=e.memoizedState,o.state=f,ia(e,r,o,i);var _=e.memoizedState;a!==c||f!==_||Ge.current||fn?(typeof m=="function"&&(Yu(e,n,m,r),_=e.memoizedState),(u=fn||Nf(e,n,u,r,f,_,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return ec(t,e,n,r,s,i)}function ec(t,e,n,r,i,s){lv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&yf(e,n,!1),sn(t,e,s);r=e.stateNode,rE.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ii(e,t.child,null,s),e.child=ii(e,null,a,s)):Me(t,e,a,s),e.memoizedState=r.state,i&&yf(e,n,!0),e.child}function uv(t){var e=t.stateNode;e.pendingContext?_f(t,e.pendingContext,e.pendingContext!==e.context):e.context&&_f(t,e.context,!1),yd(t,e.containerInfo)}function Lf(t,e,n,r,i){return ri(),fd(i),e.flags|=256,Me(t,e,n,r),e.child}var tc={dehydrated:null,treeContext:null,retryLane:0};function nc(t){return{baseLanes:t,cachePool:null,transitions:null}}function cv(t,e,n){var r=e.pendingProps,i=oe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),J(oe,i&1),t===null)return Qu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ya(o,r,0,null),t=lr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=nc(n),e.memoizedState=tc,t):Nd(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return iE(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Tn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Tn(a,s):(s=lr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?nc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=tc,r}return s=t.child,t=s.sibling,r=Tn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Nd(t,e){return e=Ya({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Co(t,e,n,r){return r!==null&&fd(r),ii(e,t.child,null,n),t=Nd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function iE(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Zl(Error(I(422))),Co(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ya({mode:"visible",children:r.children},i,0,null),s=lr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ii(e,t.child,null,o),e.child.memoizedState=nc(o),e.memoizedState=tc,s);if(!(e.mode&1))return Co(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(I(419)),r=Zl(s,r,void 0),Co(t,e,o,r)}if(a=(o&t.childLanes)!==0,He||a){if(r=Ie,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,rn(t,i),Pt(r,t,i,-1))}return Od(),r=Zl(Error(I(421))),Co(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=vE.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ze=In(i.nextSibling),et=e,re=!0,kt=null,t!==null&&(lt[ut++]=Kt,lt[ut++]=Qt,lt[ut++]=hr,Kt=t.id,Qt=t.overflow,hr=e),e=Nd(e,r.children),e.flags|=4096,e)}function Mf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),qu(t.return,e,n)}function eu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function dv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Me(t,e,r.children,n),r=oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mf(t,n,e);else if(t.tag===19)Mf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(J(oe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&sa(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),eu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&sa(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}eu(e,!0,n,null,s);break;case"together":eu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function jo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function sn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),pr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=Tn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Tn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function sE(t,e,n){switch(e.tag){case 3:uv(e),ri();break;case 5:jg(e);break;case 1:Ke(e.type)&&Zo(e);break;case 4:yd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;J(na,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(J(oe,oe.current&1),e.flags|=128,null):n&e.child.childLanes?cv(t,e,n):(J(oe,oe.current&1),t=sn(t,e,n),t!==null?t.sibling:null);J(oe,oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return dv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),J(oe,oe.current),r)break;return null;case 22:case 23:return e.lanes=0,av(t,e,n)}return sn(t,e,n)}var hv,rc,fv,pv;hv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rc=function(){};fv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,sr(Bt.current);var s=null;switch(n){case"input":i=xu(t,i),r=xu(t,r),s=[];break;case"select":i=ue({},i,{value:void 0}),r=ue({},r,{value:void 0}),s=[];break;case"textarea":i=Tu(t,i),r=Tu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Jo)}Ru(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(as.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(as.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ee("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};pv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Di(t,e){if(!re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ae(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function oE(t,e,n){var r=e.pendingProps;switch(hd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(e),null;case 1:return Ke(e.type)&&Xo(),Ae(e),null;case 3:return r=e.stateNode,si(),ne(Ge),ne(Le),Ed(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Eo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,kt!==null&&(dc(kt),kt=null))),rc(t,e),Ae(e),null;case 5:wd(e);var i=sr(ys.current);if(n=e.type,t!==null&&e.stateNode!=null)fv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return Ae(e),null}if(t=sr(Bt.current),Eo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[jt]=e,r[vs]=s,t=(e.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(i=0;i<Vi.length;i++)ee(Vi[i],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":Hh(r,s),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ee("invalid",r);break;case"textarea":Gh(r,s),ee("invalid",r)}Ru(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&wo(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&wo(r.textContent,a,t),i=["children",""+a]):as.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ee("scroll",r)}switch(n){case"input":ho(r),$h(r,s,!0);break;case"textarea":ho(r),Kh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Jo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Wm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[jt]=e,t[vs]=r,hv(t,e,!1,!1),e.stateNode=t;e:{switch(o=bu(n,r),n){case"dialog":ee("cancel",t),ee("close",t),i=r;break;case"iframe":case"object":case"embed":ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<Vi.length;i++)ee(Vi[i],t);i=r;break;case"source":ee("error",t),i=r;break;case"img":case"image":case"link":ee("error",t),ee("load",t),i=r;break;case"details":ee("toggle",t),i=r;break;case"input":Hh(t,r),i=xu(t,r),ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ue({},r,{value:void 0}),ee("invalid",t);break;case"textarea":Gh(t,r),i=Tu(t,r),ee("invalid",t);break;default:i=r}Ru(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?$m(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Vm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ls(t,l):typeof l=="number"&&ls(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(as.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ee("scroll",t):l!=null&&Jc(t,s,l,o))}switch(n){case"input":ho(t),$h(t,r,!1);break;case"textarea":ho(t),Kh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Dn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Gr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Gr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Jo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ae(e),null;case 6:if(t&&e.stateNode!=null)pv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=sr(ys.current),sr(Bt.current),Eo(e)){if(r=e.stateNode,n=e.memoizedProps,r[jt]=e,(s=r.nodeValue!==n)&&(t=et,t!==null))switch(t.tag){case 3:wo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&wo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[jt]=e,e.stateNode=r}return Ae(e),null;case 13:if(ne(oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(re&&Ze!==null&&e.mode&1&&!(e.flags&128))Ag(),ri(),e.flags|=98560,s=!1;else if(s=Eo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(I(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(I(317));s[jt]=e}else ri(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ae(e),s=!1}else kt!==null&&(dc(kt),kt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||oe.current&1?ve===0&&(ve=3):Od())),e.updateQueue!==null&&(e.flags|=4),Ae(e),null);case 4:return si(),rc(t,e),t===null&&ms(e.stateNode.containerInfo),Ae(e),null;case 10:return gd(e.type._context),Ae(e),null;case 17:return Ke(e.type)&&Xo(),Ae(e),null;case 19:if(ne(oe),s=e.memoizedState,s===null)return Ae(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Di(s,!1);else{if(ve!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=sa(t),o!==null){for(e.flags|=128,Di(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return J(oe,oe.current&1|2),e.child}t=t.sibling}s.tail!==null&&he()>ai&&(e.flags|=128,r=!0,Di(s,!1),e.lanes=4194304)}else{if(!r)if(t=sa(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Di(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!re)return Ae(e),null}else 2*he()-s.renderingStartTime>ai&&n!==1073741824&&(e.flags|=128,r=!0,Di(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=he(),e.sibling=null,n=oe.current,J(oe,r?n&1|2:n&1),e):(Ae(e),null);case 22:case 23:return Ad(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Je&1073741824&&(Ae(e),e.subtreeFlags&6&&(e.flags|=8192)):Ae(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function aE(t,e){switch(hd(e),e.tag){case 1:return Ke(e.type)&&Xo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return si(),ne(Ge),ne(Le),Ed(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return wd(e),null;case 13:if(ne(oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));ri()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ne(oe),null;case 4:return si(),null;case 10:return gd(e.type._context),null;case 22:case 23:return Ad(),null;case 24:return null;default:return null}}var Io=!1,Oe=!1,lE=typeof WeakSet=="function"?WeakSet:Set,T=null;function Hr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(t,e,r)}else n.current=null}function ic(t,e,n){try{n()}catch(r){ce(t,e,r)}}var jf=!1;function uE(t,e){if(zu=Qo,t=yg(),cd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,c=t,f=null;t:for(;;){for(var m;c!==n||i!==0&&c.nodeType!==3||(a=o+i),c!==s||r!==0&&c.nodeType!==3||(l=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(m=c.firstChild)!==null;)f=c,c=m;for(;;){if(c===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++d===r&&(l=o),(m=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wu={focusedElem:t,selectionRange:n},Qo=!1,T=e;T!==null;)if(e=T,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,T=t;else for(;T!==null;){e=T;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,C=_.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?y:It(e.type,y),C);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(S){ce(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,T=t;break}T=e.return}return _=jf,jf=!1,_}function Ji(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ic(e,n,s)}i=i.next}while(i!==r)}}function Qa(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function sc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function mv(t){var e=t.alternate;e!==null&&(t.alternate=null,mv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[jt],delete e[vs],delete e[$u],delete e[$w],delete e[Gw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function gv(t){return t.tag===5||t.tag===3||t.tag===4}function Ff(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||gv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function oc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Jo));else if(r!==4&&(t=t.child,t!==null))for(oc(t,e,n),t=t.sibling;t!==null;)oc(t,e,n),t=t.sibling}function ac(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ac(t,e,n),t=t.sibling;t!==null;)ac(t,e,n),t=t.sibling}var Ne=null,xt=!1;function un(t,e,n){for(n=n.child;n!==null;)vv(t,e,n),n=n.sibling}function vv(t,e,n){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(Ba,n)}catch{}switch(n.tag){case 5:Oe||Hr(n,e);case 6:var r=Ne,i=xt;Ne=null,un(t,e,n),Ne=r,xt=i,Ne!==null&&(xt?(t=Ne,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(xt?(t=Ne,n=n.stateNode,t.nodeType===8?Kl(t.parentNode,n):t.nodeType===1&&Kl(t,n),hs(t)):Kl(Ne,n.stateNode));break;case 4:r=Ne,i=xt,Ne=n.stateNode.containerInfo,xt=!0,un(t,e,n),Ne=r,xt=i;break;case 0:case 11:case 14:case 15:if(!Oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ic(n,e,o),i=i.next}while(i!==r)}un(t,e,n);break;case 1:if(!Oe&&(Hr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ce(n,e,a)}un(t,e,n);break;case 21:un(t,e,n);break;case 22:n.mode&1?(Oe=(r=Oe)||n.memoizedState!==null,un(t,e,n),Oe=r):un(t,e,n);break;default:un(t,e,n)}}function Uf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new lE),e.forEach(function(r){var i=_E.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function St(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ne=a.stateNode,xt=!1;break e;case 3:Ne=a.stateNode.containerInfo,xt=!0;break e;case 4:Ne=a.stateNode.containerInfo,xt=!0;break e}a=a.return}if(Ne===null)throw Error(I(160));vv(s,o,i),Ne=null,xt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ce(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)_v(e,t),e=e.sibling}function _v(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(St(e,t),Lt(t),r&4){try{Ji(3,t,t.return),Qa(3,t)}catch(y){ce(t,t.return,y)}try{Ji(5,t,t.return)}catch(y){ce(t,t.return,y)}}break;case 1:St(e,t),Lt(t),r&512&&n!==null&&Hr(n,n.return);break;case 5:if(St(e,t),Lt(t),r&512&&n!==null&&Hr(n,n.return),t.flags&32){var i=t.stateNode;try{ls(i,"")}catch(y){ce(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Bm(i,s),bu(a,o);var u=bu(a,s);for(o=0;o<l.length;o+=2){var d=l[o],c=l[o+1];d==="style"?$m(i,c):d==="dangerouslySetInnerHTML"?Vm(i,c):d==="children"?ls(i,c):Jc(i,d,c,u)}switch(a){case"input":ku(i,s);break;case"textarea":zm(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Gr(i,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?Gr(i,!!s.multiple,s.defaultValue,!0):Gr(i,!!s.multiple,s.multiple?[]:"",!1))}i[vs]=s}catch(y){ce(t,t.return,y)}}break;case 6:if(St(e,t),Lt(t),r&4){if(t.stateNode===null)throw Error(I(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){ce(t,t.return,y)}}break;case 3:if(St(e,t),Lt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{hs(e.containerInfo)}catch(y){ce(t,t.return,y)}break;case 4:St(e,t),Lt(t);break;case 13:St(e,t),Lt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Rd=he())),r&4&&Uf(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Oe=(u=Oe)||d,St(e,t),Oe=u):St(e,t),Lt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(T=t,d=t.child;d!==null;){for(c=T=d;T!==null;){switch(f=T,m=f.child,f.tag){case 0:case 11:case 14:case 15:Ji(4,f,f.return);break;case 1:Hr(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){ce(r,n,y)}}break;case 5:Hr(f,f.return);break;case 22:if(f.memoizedState!==null){zf(c);continue}}m!==null?(m.return=f,T=m):zf(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=c.stateNode,l=c.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Hm("display",o))}catch(y){ce(t,t.return,y)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(y){ce(t,t.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:St(e,t),Lt(t),r&4&&Uf(t);break;case 21:break;default:St(e,t),Lt(t)}}function Lt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(gv(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ls(i,""),r.flags&=-33);var s=Ff(t);ac(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Ff(t);oc(t,a,o);break;default:throw Error(I(161))}}catch(l){ce(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function cE(t,e,n){T=t,yv(t)}function yv(t,e,n){for(var r=(t.mode&1)!==0;T!==null;){var i=T,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Io;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Oe;a=Io;var u=Oe;if(Io=o,(Oe=l)&&!u)for(T=i;T!==null;)o=T,l=o.child,o.tag===22&&o.memoizedState!==null?Wf(i):l!==null?(l.return=o,T=l):Wf(i);for(;s!==null;)T=s,yv(s),s=s.sibling;T=i,Io=a,Oe=u}Bf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,T=s):Bf(t)}}function Bf(t){for(;T!==null;){var e=T;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Oe||Qa(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Oe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:It(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&If(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}If(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&hs(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}Oe||e.flags&512&&sc(e)}catch(f){ce(e,e.return,f)}}if(e===t){T=null;break}if(n=e.sibling,n!==null){n.return=e.return,T=n;break}T=e.return}}function zf(t){for(;T!==null;){var e=T;if(e===t){T=null;break}var n=e.sibling;if(n!==null){n.return=e.return,T=n;break}T=e.return}}function Wf(t){for(;T!==null;){var e=T;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Qa(4,e)}catch(l){ce(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ce(e,i,l)}}var s=e.return;try{sc(e)}catch(l){ce(e,s,l)}break;case 5:var o=e.return;try{sc(e)}catch(l){ce(e,o,l)}}}catch(l){ce(e,e.return,l)}if(e===t){T=null;break}var a=e.sibling;if(a!==null){a.return=e.return,T=a;break}T=e.return}}var dE=Math.ceil,la=an.ReactCurrentDispatcher,Td=an.ReactCurrentOwner,pt=an.ReactCurrentBatchConfig,H=0,Ie=null,fe=null,Te=0,Je=0,$r=Gn(0),ve=0,Cs=null,pr=0,qa=0,Pd=0,Xi=null,We=null,Rd=0,ai=1/0,$t=null,ua=!1,lc=null,kn=null,xo=!1,vn=null,ca=0,Zi=0,uc=null,Fo=-1,Uo=0;function Fe(){return H&6?he():Fo!==-1?Fo:Fo=he()}function Nn(t){return t.mode&1?H&2&&Te!==0?Te&-Te:Qw.transition!==null?(Uo===0&&(Uo=rg()),Uo):(t=Q,t!==0||(t=window.event,t=t===void 0?16:cg(t.type)),t):1}function Pt(t,e,n,r){if(50<Zi)throw Zi=0,uc=null,Error(I(185));zs(t,n,r),(!(H&2)||t!==Ie)&&(t===Ie&&(!(H&2)&&(qa|=n),ve===4&&mn(t,Te)),Qe(t,r),n===1&&H===0&&!(e.mode&1)&&(ai=he()+500,$a&&Kn()))}function Qe(t,e){var n=t.callbackNode;Q0(t,e);var r=Ko(t,t===Ie?Te:0);if(r===0)n!==null&&Yh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Yh(n),e===1)t.tag===0?Kw(Vf.bind(null,t)):Pg(Vf.bind(null,t)),Vw(function(){!(H&6)&&Kn()}),n=null;else{switch(ig(r)){case 1:n=nd;break;case 4:n=tg;break;case 16:n=Go;break;case 536870912:n=ng;break;default:n=Go}n=Nv(n,wv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function wv(t,e){if(Fo=-1,Uo=0,H&6)throw Error(I(327));var n=t.callbackNode;if(Jr()&&t.callbackNode!==n)return null;var r=Ko(t,t===Ie?Te:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=da(t,r);else{e=r;var i=H;H|=2;var s=Sv();(Ie!==t||Te!==e)&&($t=null,ai=he()+500,ar(t,e));do try{pE();break}catch(a){Ev(t,a)}while(!0);md(),la.current=s,H=i,fe!==null?e=0:(Ie=null,Te=0,e=ve)}if(e!==0){if(e===2&&(i=Mu(t),i!==0&&(r=i,e=cc(t,i))),e===1)throw n=Cs,ar(t,0),mn(t,r),Qe(t,he()),n;if(e===6)mn(t,r);else{if(i=t.current.alternate,!(r&30)&&!hE(i)&&(e=da(t,r),e===2&&(s=Mu(t),s!==0&&(r=s,e=cc(t,s))),e===1))throw n=Cs,ar(t,0),mn(t,r),Qe(t,he()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:er(t,We,$t);break;case 3:if(mn(t,r),(r&130023424)===r&&(e=Rd+500-he(),10<e)){if(Ko(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Fe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Hu(er.bind(null,t,We,$t),e);break}er(t,We,$t);break;case 4:if(mn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Tt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=he()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*dE(r/1960))-r,10<r){t.timeoutHandle=Hu(er.bind(null,t,We,$t),r);break}er(t,We,$t);break;case 5:er(t,We,$t);break;default:throw Error(I(329))}}}return Qe(t,he()),t.callbackNode===n?wv.bind(null,t):null}function cc(t,e){var n=Xi;return t.current.memoizedState.isDehydrated&&(ar(t,e).flags|=256),t=da(t,e),t!==2&&(e=We,We=n,e!==null&&dc(e)),t}function dc(t){We===null?We=t:We.push.apply(We,t)}function hE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!At(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function mn(t,e){for(e&=~Pd,e&=~qa,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Tt(e),r=1<<n;t[n]=-1,e&=~r}}function Vf(t){if(H&6)throw Error(I(327));Jr();var e=Ko(t,0);if(!(e&1))return Qe(t,he()),null;var n=da(t,e);if(t.tag!==0&&n===2){var r=Mu(t);r!==0&&(e=r,n=cc(t,r))}if(n===1)throw n=Cs,ar(t,0),mn(t,e),Qe(t,he()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,er(t,We,$t),Qe(t,he()),null}function bd(t,e){var n=H;H|=1;try{return t(e)}finally{H=n,H===0&&(ai=he()+500,$a&&Kn())}}function mr(t){vn!==null&&vn.tag===0&&!(H&6)&&Jr();var e=H;H|=1;var n=pt.transition,r=Q;try{if(pt.transition=null,Q=1,t)return t()}finally{Q=r,pt.transition=n,H=e,!(H&6)&&Kn()}}function Ad(){Je=$r.current,ne($r)}function ar(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ww(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(hd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xo();break;case 3:si(),ne(Ge),ne(Le),Ed();break;case 5:wd(r);break;case 4:si();break;case 13:ne(oe);break;case 19:ne(oe);break;case 10:gd(r.type._context);break;case 22:case 23:Ad()}n=n.return}if(Ie=t,fe=t=Tn(t.current,null),Te=Je=e,ve=0,Cs=null,Pd=qa=pr=0,We=Xi=null,ir!==null){for(e=0;e<ir.length;e++)if(n=ir[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ir=null}return t}function Ev(t,e){do{var n=fe;try{if(md(),Lo.current=aa,oa){for(var r=le.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}oa=!1}if(fr=0,we=me=le=null,Yi=!1,ws=0,Td.current=null,n===null||n.return===null){ve=1,Cs=e,fe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Te,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Rf(o);if(m!==null){m.flags&=-257,bf(m,o,a,s,e),m.mode&1&&Pf(s,u,e),e=m,l=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){Pf(s,u,e),Od();break e}l=Error(I(426))}}else if(re&&a.mode&1){var C=Rf(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),bf(C,o,a,s,e),fd(oi(l,a));break e}}s=l=oi(l,a),ve!==4&&(ve=2),Xi===null?Xi=[s]:Xi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=iv(s,l,e);Cf(s,g);break e;case 1:a=l;var p=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(kn===null||!kn.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=sv(s,a,e);Cf(s,S);break e}}s=s.return}while(s!==null)}Iv(n)}catch(N){e=N,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(!0)}function Sv(){var t=la.current;return la.current=aa,t===null?aa:t}function Od(){(ve===0||ve===3||ve===2)&&(ve=4),Ie===null||!(pr&268435455)&&!(qa&268435455)||mn(Ie,Te)}function da(t,e){var n=H;H|=2;var r=Sv();(Ie!==t||Te!==e)&&($t=null,ar(t,e));do try{fE();break}catch(i){Ev(t,i)}while(!0);if(md(),H=n,la.current=r,fe!==null)throw Error(I(261));return Ie=null,Te=0,ve}function fE(){for(;fe!==null;)Cv(fe)}function pE(){for(;fe!==null&&!U0();)Cv(fe)}function Cv(t){var e=kv(t.alternate,t,Je);t.memoizedProps=t.pendingProps,e===null?Iv(t):fe=e,Td.current=null}function Iv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=aE(n,e),n!==null){n.flags&=32767,fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ve=6,fe=null;return}}else if(n=oE(n,e,Je),n!==null){fe=n;return}if(e=e.sibling,e!==null){fe=e;return}fe=e=t}while(e!==null);ve===0&&(ve=5)}function er(t,e,n){var r=Q,i=pt.transition;try{pt.transition=null,Q=1,mE(t,e,n,r)}finally{pt.transition=i,Q=r}return null}function mE(t,e,n,r){do Jr();while(vn!==null);if(H&6)throw Error(I(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(q0(t,s),t===Ie&&(fe=Ie=null,Te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xo||(xo=!0,Nv(Go,function(){return Jr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=pt.transition,pt.transition=null;var o=Q;Q=1;var a=H;H|=4,Td.current=null,uE(t,n),_v(n,t),Lw(Wu),Qo=!!zu,Wu=zu=null,t.current=n,cE(n),B0(),H=a,Q=o,pt.transition=s}else t.current=n;if(xo&&(xo=!1,vn=t,ca=i),s=t.pendingLanes,s===0&&(kn=null),V0(n.stateNode),Qe(t,he()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ua)throw ua=!1,t=lc,lc=null,t;return ca&1&&t.tag!==0&&Jr(),s=t.pendingLanes,s&1?t===uc?Zi++:(Zi=0,uc=t):Zi=0,Kn(),null}function Jr(){if(vn!==null){var t=ig(ca),e=pt.transition,n=Q;try{if(pt.transition=null,Q=16>t?16:t,vn===null)var r=!1;else{if(t=vn,vn=null,ca=0,H&6)throw Error(I(331));var i=H;for(H|=4,T=t.current;T!==null;){var s=T,o=s.child;if(T.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(T=u;T!==null;){var d=T;switch(d.tag){case 0:case 11:case 15:Ji(8,d,s)}var c=d.child;if(c!==null)c.return=d,T=c;else for(;T!==null;){d=T;var f=d.sibling,m=d.return;if(mv(d),d===u){T=null;break}if(f!==null){f.return=m,T=f;break}T=m}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var C=y.sibling;y.sibling=null,y=C}while(y!==null)}}T=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,T=o;else e:for(;T!==null;){if(s=T,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ji(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,T=g;break e}T=s.return}}var p=t.current;for(T=p;T!==null;){o=T;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,T=v;else e:for(o=p;T!==null;){if(a=T,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Qa(9,a)}}catch(N){ce(a,a.return,N)}if(a===o){T=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,T=S;break e}T=a.return}}if(H=i,Kn(),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(Ba,t)}catch{}r=!0}return r}finally{Q=n,pt.transition=e}}return!1}function Hf(t,e,n){e=oi(n,e),e=iv(t,e,1),t=xn(t,e,1),e=Fe(),t!==null&&(zs(t,1,e),Qe(t,e))}function ce(t,e,n){if(t.tag===3)Hf(t,t,n);else for(;e!==null;){if(e.tag===3){Hf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kn===null||!kn.has(r))){t=oi(n,t),t=sv(e,t,1),e=xn(e,t,1),t=Fe(),e!==null&&(zs(e,1,t),Qe(e,t));break}}e=e.return}}function gE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Fe(),t.pingedLanes|=t.suspendedLanes&n,Ie===t&&(Te&n)===n&&(ve===4||ve===3&&(Te&130023424)===Te&&500>he()-Rd?ar(t,0):Pd|=n),Qe(t,e)}function xv(t,e){e===0&&(t.mode&1?(e=mo,mo<<=1,!(mo&130023424)&&(mo=4194304)):e=1);var n=Fe();t=rn(t,e),t!==null&&(zs(t,e,n),Qe(t,n))}function vE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),xv(t,n)}function _E(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),xv(t,n)}var kv;kv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ge.current)He=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return He=!1,sE(t,e,n);He=!!(t.flags&131072)}else He=!1,re&&e.flags&1048576&&Rg(e,ta,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;jo(t,e),t=e.pendingProps;var i=ni(e,Le.current);Yr(e,n),i=Cd(null,e,r,t,i,n);var s=Id();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ke(r)?(s=!0,Zo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,_d(e),i.updater=Ka,e.stateNode=i,i._reactInternals=e,Ju(e,r,t,n),e=ec(null,e,r,!0,s,n)):(e.tag=0,re&&s&&dd(e),Me(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(jo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=wE(r),t=It(r,t),i){case 0:e=Zu(null,e,r,t,n);break e;case 1:e=Df(null,e,r,t,n);break e;case 11:e=Af(null,e,r,t,n);break e;case 14:e=Of(null,e,r,It(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:It(r,i),Zu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:It(r,i),Df(t,e,r,i,n);case 3:e:{if(uv(e),t===null)throw Error(I(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Mg(t,e),ia(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=oi(Error(I(423)),e),e=Lf(t,e,r,n,i);break e}else if(r!==i){i=oi(Error(I(424)),e),e=Lf(t,e,r,n,i);break e}else for(Ze=In(e.stateNode.containerInfo.firstChild),et=e,re=!0,kt=null,n=Dg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ri(),r===i){e=sn(t,e,n);break e}Me(t,e,r,n)}e=e.child}return e;case 5:return jg(e),t===null&&Qu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Vu(r,i)?o=null:s!==null&&Vu(r,s)&&(e.flags|=32),lv(t,e),Me(t,e,o,n),e.child;case 6:return t===null&&Qu(e),null;case 13:return cv(t,e,n);case 4:return yd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ii(e,null,r,n):Me(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:It(r,i),Af(t,e,r,i,n);case 7:return Me(t,e,e.pendingProps,n),e.child;case 8:return Me(t,e,e.pendingProps.children,n),e.child;case 12:return Me(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,J(na,r._currentValue),r._currentValue=o,s!==null)if(At(s.value,o)){if(s.children===i.children&&!Ge.current){e=sn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Xt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),qu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(I(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),qu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Me(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Yr(e,n),i=vt(i),r=r(i),e.flags|=1,Me(t,e,r,n),e.child;case 14:return r=e.type,i=It(r,e.pendingProps),i=It(r.type,i),Of(t,e,r,i,n);case 15:return ov(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:It(r,i),jo(t,e),e.tag=1,Ke(r)?(t=!0,Zo(e)):t=!1,Yr(e,n),rv(e,r,i),Ju(e,r,i,n),ec(null,e,r,!0,t,n);case 19:return dv(t,e,n);case 22:return av(t,e,n)}throw Error(I(156,e.tag))};function Nv(t,e){return eg(t,e)}function yE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(t,e,n,r){return new yE(t,e,n,r)}function Dd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function wE(t){if(typeof t=="function")return Dd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Zc)return 11;if(t===ed)return 14}return 2}function Tn(t,e){var n=t.alternate;return n===null?(n=dt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Bo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Dd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Lr:return lr(n.children,i,s,e);case Xc:o=8,i|=8;break;case Eu:return t=dt(12,n,e,i|2),t.elementType=Eu,t.lanes=s,t;case Su:return t=dt(13,n,e,i),t.elementType=Su,t.lanes=s,t;case Cu:return t=dt(19,n,e,i),t.elementType=Cu,t.lanes=s,t;case jm:return Ya(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Lm:o=10;break e;case Mm:o=9;break e;case Zc:o=11;break e;case ed:o=14;break e;case hn:o=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=dt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function lr(t,e,n,r){return t=dt(7,t,r,e),t.lanes=n,t}function Ya(t,e,n,r){return t=dt(22,t,r,e),t.elementType=jm,t.lanes=n,t.stateNode={isHidden:!1},t}function tu(t,e,n){return t=dt(6,t,null,e),t.lanes=n,t}function nu(t,e,n){return e=dt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function EE(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ml(0),this.expirationTimes=Ml(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ml(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ld(t,e,n,r,i,s,o,a,l){return t=new EE(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=dt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_d(s),t}function SE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Tv(t){if(!t)return Ln;t=t._reactInternals;e:{if(Cr(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ke(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if(Ke(n))return Tg(t,n,e)}return e}function Pv(t,e,n,r,i,s,o,a,l){return t=Ld(n,r,!0,t,i,s,o,a,l),t.context=Tv(null),n=t.current,r=Fe(),i=Nn(n),s=Xt(r,i),s.callback=e??null,xn(n,s,i),t.current.lanes=i,zs(t,i,r),Qe(t,r),t}function Ja(t,e,n,r){var i=e.current,s=Fe(),o=Nn(i);return n=Tv(n),e.context===null?e.context=n:e.pendingContext=n,e=Xt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=xn(i,e,o),t!==null&&(Pt(t,i,o,s),Do(t,i,o)),o}function ha(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $f(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Md(t,e){$f(t,e),(t=t.alternate)&&$f(t,e)}function CE(){return null}var Rv=typeof reportError=="function"?reportError:function(t){console.error(t)};function jd(t){this._internalRoot=t}Xa.prototype.render=jd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));Ja(t,e,null,null)};Xa.prototype.unmount=jd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;mr(function(){Ja(null,t,null,null)}),e[nn]=null}};function Xa(t){this._internalRoot=t}Xa.prototype.unstable_scheduleHydration=function(t){if(t){var e=ag();t={blockedOn:null,target:t,priority:e};for(var n=0;n<pn.length&&e!==0&&e<pn[n].priority;n++);pn.splice(n,0,t),n===0&&ug(t)}};function Fd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Za(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Gf(){}function IE(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ha(o);s.call(u)}}var o=Pv(e,r,t,0,null,!1,!1,"",Gf);return t._reactRootContainer=o,t[nn]=o.current,ms(t.nodeType===8?t.parentNode:t),mr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ha(l);a.call(u)}}var l=Ld(t,0,!1,null,null,!1,!1,"",Gf);return t._reactRootContainer=l,t[nn]=l.current,ms(t.nodeType===8?t.parentNode:t),mr(function(){Ja(e,l,n,r)}),l}function el(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ha(o);a.call(l)}}Ja(e,o,t,i)}else o=IE(n,e,t,i,r);return ha(o)}sg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Wi(e.pendingLanes);n!==0&&(rd(e,n|1),Qe(e,he()),!(H&6)&&(ai=he()+500,Kn()))}break;case 13:mr(function(){var r=rn(t,1);if(r!==null){var i=Fe();Pt(r,t,1,i)}}),Md(t,1)}};id=function(t){if(t.tag===13){var e=rn(t,134217728);if(e!==null){var n=Fe();Pt(e,t,134217728,n)}Md(t,134217728)}};og=function(t){if(t.tag===13){var e=Nn(t),n=rn(t,e);if(n!==null){var r=Fe();Pt(n,t,e,r)}Md(t,e)}};ag=function(){return Q};lg=function(t,e){var n=Q;try{return Q=t,e()}finally{Q=n}};Ou=function(t,e,n){switch(e){case"input":if(ku(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ha(r);if(!i)throw Error(I(90));Um(r),ku(r,i)}}}break;case"textarea":zm(t,n);break;case"select":e=n.value,e!=null&&Gr(t,!!n.multiple,e,!1)}};Qm=bd;qm=mr;var xE={usingClientEntryPoint:!1,Events:[Vs,Ur,Ha,Gm,Km,bd]},Li={findFiberByHostInstance:rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kE={bundleType:Li.bundleType,version:Li.version,rendererPackageName:Li.rendererPackageName,rendererConfig:Li.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:an.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Xm(t),t===null?null:t.stateNode},findFiberByHostInstance:Li.findFiberByHostInstance||CE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ko.isDisabled&&ko.supportsFiber)try{Ba=ko.inject(kE),Ut=ko}catch{}}st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xE;st.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fd(e))throw Error(I(200));return SE(t,e,null,n)};st.createRoot=function(t,e){if(!Fd(t))throw Error(I(299));var n=!1,r="",i=Rv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ld(t,1,!1,null,null,n,!1,r,i),t[nn]=e.current,ms(t.nodeType===8?t.parentNode:t),new jd(e)};st.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=Xm(e),t=t===null?null:t.stateNode,t};st.flushSync=function(t){return mr(t)};st.hydrate=function(t,e,n){if(!Za(e))throw Error(I(200));return el(null,t,e,!0,n)};st.hydrateRoot=function(t,e,n){if(!Fd(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Rv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Pv(e,null,t,1,n??null,i,!1,s,o),t[nn]=e.current,ms(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Xa(e)};st.render=function(t,e,n){if(!Za(e))throw Error(I(200));return el(null,t,e,!1,n)};st.unmountComponentAtNode=function(t){if(!Za(t))throw Error(I(40));return t._reactRootContainer?(mr(function(){el(null,null,t,!1,function(){t._reactRootContainer=null,t[nn]=null})}),!0):!1};st.unstable_batchedUpdates=bd;st.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Za(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return el(t,e,n,!1,r)};st.version="18.3.1-next-f1338f8080-20240426";function bv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bv)}catch(t){console.error(t)}}bv(),bm.exports=st;var NE=bm.exports,Kf=NE;yu.createRoot=Kf.createRoot,yu.hydrateRoot=Kf.hydrateRoot;const fa="/assets/home-3Rfyu56J.png",TE=()=>h.jsx(h.Fragment,{children:h.jsx("div",{style:{backgroundImage:`url(${fa})`},children:h.jsx("div",{className:"container pt-4",children:h.jsxs("div",{className:"mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none",children:[h.jsxs("div",{className:"p-8 sm:p-10 lg:flex-auto",children:[h.jsx("h3",{className:"text-2xl font-bold tracking-tight text-gray-900",children:"Hostel membership"}),h.jsx("p",{className:"mt-6 text-base leading-7 text-gray-600",children:"Clean and well-maintained rooms, available in various configurations (single, double, or shared), to suit different.High-speed internet access for academic, professional, and personal use. budget requirements.On-site washing machines and dryers or laundry services to handle residents laundry needs."}),h.jsxs("div",{className:"mt-10 flex items-center gap-x-4",children:[h.jsx("h4",{className:"flex-none text-sm font-semibold leading-6 text-indigo-600",children:"What’s included"}),h.jsx("div",{className:"h-px flex-auto bg-gray-100"})]}),h.jsxs("ul",{role:"list",className:"mt-8 grid grid-cols-1 gap-4 leading-6 text-slate-400 hover:text-sky-400 sm:grid-cols-2 sm:gap-6",children:[h.jsxs("li",{className:"flex gap-x-3",children:[h.jsx("img",{src:"src/assets/img/wifi-signal-icon.png",width:50,height:50}),h.jsx("b",{children:"Free wifi"})]}),h.jsxs("li",{className:"flex gap-x-3",children:[h.jsx("img",{src:"src/assets/img/washing-machine-icon.png",width:50,height:50}),h.jsx("b",{children:"Free washing Machine"})]}),h.jsxs("li",{className:"flex gap-x-3",children:[h.jsx("img",{src:"src/assets/img/water-tap-icon.png",width:50,height:50}),h.jsx("b",{children:"24/7 Water"})]}),h.jsxs("li",{className:"flex gap-x-3",children:[h.jsx("img",{src:"src/assets/img/breakfast-icon.png",width:50,height:50}),h.jsx("b",{children:" 3 Time Food"})]})]})]}),h.jsx("div",{className:"-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0",children:h.jsx("div",{className:"rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-19",children:h.jsx("div",{className:"mx-auto max-w-xs ",children:h.jsx("img",{src:"src/assets/img/3.jpg"})})})})]})})})});var Qf={};/**
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
 */const Av={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const x=function(t,e){if(!t)throw yi(e)},yi=function(t){return new Error("Firebase Database ("+Av.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Ov=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},PE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ud={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,d=s>>2,c=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(f=64)),r.push(n[d],n[c],n[f],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ov(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):PE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||c==null)throw new RE;const f=s<<2|a>>4;if(r.push(f),u!==64){const m=a<<4&240|u>>2;if(r.push(m),c!==64){const _=u<<6&192|c;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class RE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Dv=function(t){const e=Ov(t);return Ud.encodeByteArray(e,!0)},pa=function(t){return Dv(t).replace(/\./g,"")},ma=function(t){try{return Ud.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function bE(t){return Is(void 0,t)}function Is(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!AE(n)||(t[n]=Is(t[n],e[n]));return t}function AE(t){return t!=="__proto__"}/**
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
 */function OE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const DE=()=>OE().__FIREBASE_DEFAULTS__,LE=()=>{if(typeof process>"u"||typeof Qf>"u")return;const t=Qf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ME=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ma(t[1]);return e&&JSON.parse(e)},jE=()=>{try{return DE()||LE()||ME()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Lv=()=>{var t;return(t=jE())===null||t===void 0?void 0:t.config};/**
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
 */class Ve{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function FE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[pa(JSON.stringify(n)),pa(JSON.stringify(o)),""].join(".")}/**
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
 */function Ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ue())}function Mv(){return typeof self=="object"&&self.self===self}function UE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function BE(){const t=Ue();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Fv(){return Av.NODE_ADMIN===!0}function zE(){try{return typeof indexedDB=="object"}catch{return!1}}function WE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const VE="FirebaseError";class ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=VE,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ir.prototype.create)}}class Ir{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?HE(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ln(i,a,r)}}function HE(t,e){return t.replace($E,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const $E=/\{\$([^}]+)}/g;/**
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
 */function xs(t){return JSON.parse(t)}function ge(t){return JSON.stringify(t)}/**
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
 */const Uv=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=xs(ma(s[0])||""),n=xs(ma(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},GE=function(t){const e=Uv(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},KE=function(t){const e=Uv(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function nt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function gr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ga(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function va(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function _a(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(qf(s)&&qf(o)){if(!_a(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function qf(t){return t!==null&&typeof t=="object"}/**
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
 */function $s(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function QE(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}/**
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
 */class qE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const f=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=a^s&(o^a),d=1518500249):(u=s^o^a,d=1859775393):c<60?(u=s&o|a&(s|o),d=2400959708):(u=s^o^a,d=3395469782);const f=(i<<5|i>>>27)+u+l+d+r[c]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Bv(t,e){const n=new YE(t,e);return n.subscribe.bind(n)}class YE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");JE(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ru),i.error===void 0&&(i.error=ru),i.complete===void 0&&(i.complete=ru);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function JE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ru(){}/**
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
 */const L=function(t,e,n,r){let i;if(r<e?i="at least "+e:r>n&&(i=n===0?"none":"no more than "+n),i){const s=t+" failed: Was called with "+r+(r===1?" argument.":" arguments.")+" Expects "+i+".";throw new Error(s)}};function qe(t,e){return`${t} failed: ${e} argument `}function Ee(t,e,n,r){if(!(r&&!n)&&typeof n!="function")throw new Error(qe(t,e)+"must be a valid function.")}function Yf(t,e,n,r){if(n&&(typeof n!="object"||n===null))throw new Error(qe(t,e)+"must be a valid context object.")}/**
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
 */const XE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,x(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},tl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
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
 */function Re(t){return t&&t._delegate?t._delegate:t}class Ot{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const tr="[DEFAULT]";/**
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
 */class hc{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ve;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(eS(e))try{this.getOrInitializeService({instanceIdentifier:tr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=tr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=tr){return this.instances.has(e)}getOptions(e=tr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ZE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=tr){return this.component?this.component.multipleInstances?e:tr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ZE(t){return t===tr?void 0:t}function eS(t){return t.instantiationMode==="EAGER"}/**
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
 */class zd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new hc(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Wd=[];var K;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(K||(K={}));const zv={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},tS=K.INFO,nS={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},rS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=nS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gs{constructor(e){this.name=e,this._logLevel=tS,this._logHandler=rS,this._userLogHandler=null,Wd.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}function iS(t){Wd.forEach(e=>{e.setLogLevel(t)})}function sS(t,e){for(const n of Wd){let r=null;e&&e.level&&(r=zv[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:K[s].toLowerCase(),message:a,args:o,type:i.name})}}}const oS=(t,e)=>e.some(n=>t instanceof n);let Jf,Xf;function aS(){return Jf||(Jf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lS(){return Xf||(Xf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wv=new WeakMap,fc=new WeakMap,Vv=new WeakMap,iu=new WeakMap,Vd=new WeakMap;function uS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Pn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Wv.set(n,t)}).catch(()=>{}),Vd.set(e,t),e}function cS(t){if(fc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});fc.set(t,e)}let pc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Vv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function dS(t){pc=t(pc)}function hS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(su(this),e,...n);return Vv.set(r,e.sort?e.sort():[e]),Pn(r)}:lS().includes(t)?function(...e){return t.apply(su(this),e),Pn(Wv.get(this))}:function(...e){return Pn(t.apply(su(this),e))}}function fS(t){return typeof t=="function"?hS(t):(t instanceof IDBTransaction&&cS(t),oS(t,aS())?new Proxy(t,pc):t)}function Pn(t){if(t instanceof IDBRequest)return uS(t);if(iu.has(t))return iu.get(t);const e=fS(t);return e!==t&&(iu.set(t,e),Vd.set(e,t)),e}const su=t=>Vd.get(t);function pS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Pn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Pn(o.result),l.oldVersion,l.newVersion,Pn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const mS=["get","getKey","getAll","getAllKeys","count"],gS=["put","add","delete","clear"],ou=new Map;function Zf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ou.get(e))return ou.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=gS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||mS.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return ou.set(e,s),s}dS(t=>({...t,get:(e,n,r)=>Zf(e,n)||t.get(e,n,r),has:(e,n)=>!!Zf(e,n)||t.has(e,n)}));/**
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
 */class vS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_S(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function _S(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ya="@firebase/app",mc="0.10.5";/**
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
 */const vr=new Gs("@firebase/app"),yS="@firebase/app-compat",wS="@firebase/analytics-compat",ES="@firebase/analytics",SS="@firebase/app-check-compat",CS="@firebase/app-check",IS="@firebase/auth",xS="@firebase/auth-compat",kS="@firebase/database",NS="@firebase/database-compat",TS="@firebase/functions",PS="@firebase/functions-compat",RS="@firebase/installations",bS="@firebase/installations-compat",AS="@firebase/messaging",OS="@firebase/messaging-compat",DS="@firebase/performance",LS="@firebase/performance-compat",MS="@firebase/remote-config",jS="@firebase/remote-config-compat",FS="@firebase/storage",US="@firebase/storage-compat",BS="@firebase/firestore",zS="@firebase/vertexai-preview",WS="@firebase/firestore-compat",VS="firebase",HS="10.12.2";/**
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
 */const Mn="[DEFAULT]",$S={[ya]:"fire-core",[yS]:"fire-core-compat",[ES]:"fire-analytics",[wS]:"fire-analytics-compat",[CS]:"fire-app-check",[SS]:"fire-app-check-compat",[IS]:"fire-auth",[xS]:"fire-auth-compat",[kS]:"fire-rtdb",[NS]:"fire-rtdb-compat",[TS]:"fire-fn",[PS]:"fire-fn-compat",[RS]:"fire-iid",[bS]:"fire-iid-compat",[AS]:"fire-fcm",[OS]:"fire-fcm-compat",[DS]:"fire-perf",[LS]:"fire-perf-compat",[MS]:"fire-rc",[jS]:"fire-rc-compat",[FS]:"fire-gcs",[US]:"fire-gcs-compat",[BS]:"fire-fst",[WS]:"fire-fst-compat",[zS]:"fire-vertex","fire-js":"fire-js",[VS]:"fire-js-all"};/**
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
 */const jn=new Map,li=new Map,ui=new Map;function ks(t,e){try{t.container.addComponent(e)}catch(n){vr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Hv(t,e){t.container.addOrOverwriteComponent(e)}function Fn(t){const e=t.name;if(ui.has(e))return vr.debug(`There were multiple attempts to register component ${e}.`),!1;ui.set(e,t);for(const n of jn.values())ks(n,t);for(const n of li.values())ks(n,t);return!0}function nl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function GS(t,e,n=Mn){nl(t,e).clearInstance(n)}function $v(t){return t.options!==void 0}function qt(t){return t.settings!==void 0}function KS(){ui.clear()}/**
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
 */const QS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mt=new Ir("app","Firebase",QS);/**
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
 */let Gv=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ot("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mt.create("app-deleted",{appName:this._name})}};/**
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
 */class qS extends Gv{constructor(e,n,r,i){const s=n.automaticDataCollectionEnabled!==void 0?n.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const a=e;super(a.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},n),this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()}),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,n.releaseOnDeref=void 0,Rt(ya,mc,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){$d(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw mt.create("server-app-deleted")}}/**
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
 */const xr=HS;function Hd(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Mn,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw mt.create("bad-app-name",{appName:String(i)});if(n||(n=Lv()),!n)throw mt.create("no-options");const s=jn.get(i);if(s){if(_a(n,s.options)&&_a(r,s.config))return s;throw mt.create("duplicate-app",{appName:i})}const o=new zd(i);for(const l of ui.values())o.addComponent(l);const a=new Gv(n,r,o);return jn.set(i,a),a}function YS(t,e){if(Mv())throw mt.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let n;$v(t)?n=t.options:n=t;const r=Object.assign(Object.assign({},e),n);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=u=>[...u].reduce((d,c)=>Math.imul(31,d)+c.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw mt.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=li.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const a=new zd(s);for(const u of ui.values())a.addComponent(u);const l=new qS(n,e,s,a);return li.set(s,l),l}function Kv(t=Mn){const e=jn.get(t);if(!e&&t===Mn&&Lv())return Hd();if(!e)throw mt.create("no-app",{appName:t});return e}function JS(){return Array.from(jn.values())}async function $d(t){let e=!1;const n=t.name;jn.has(n)?(e=!0,jn.delete(n)):li.has(n)&&t.decRefCount()<=0&&(li.delete(n),e=!0),e&&(await Promise.all(t.container.getProviders().map(r=>r.delete())),t.isDeleted=!0)}function Rt(t,e,n){var r;let i=(r=$S[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vr.warn(a.join(" "));return}Fn(new Ot(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Qv(t,e){if(t!==null&&typeof t!="function")throw mt.create("invalid-log-argument");sS(t,e)}function qv(t){iS(t)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const XS="firebase-heartbeat-database",ZS=1,Ns="firebase-heartbeat-store";let au=null;function Yv(){return au||(au=pS(XS,ZS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ns)}catch(n){console.warn(n)}}}}).catch(t=>{throw mt.create("idb-open",{originalErrorMessage:t.message})})),au}async function eC(t){try{const n=(await Yv()).transaction(Ns),r=await n.objectStore(Ns).get(Jv(t));return await n.done,r}catch(e){if(e instanceof ln)vr.warn(e.message);else{const n=mt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});vr.warn(n.message)}}}async function ep(t,e){try{const r=(await Yv()).transaction(Ns,"readwrite");await r.objectStore(Ns).put(e,Jv(t)),await r.done}catch(n){if(n instanceof ln)vr.warn(n.message);else{const r=mt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});vr.warn(r.message)}}}function Jv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const tC=1024,nC=30*24*60*60*1e3;class rC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=tp();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=nC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=tp(),{heartbeatsToSend:r,unsentEntries:i}=iC(this._heartbeatsCache.heartbeats),s=pa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function tp(){return new Date().toISOString().substring(0,10)}function iC(t,e=tC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),np(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),np(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class sC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zE()?WE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await eC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ep(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ep(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function np(t){return pa(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function oC(t){Fn(new Ot("platform-logger",e=>new vS(e),"PRIVATE")),Fn(new Ot("heartbeat",e=>new rC(e),"PRIVATE")),Rt(ya,mc,t),Rt(ya,mc,"esm2017"),Rt("fire-js","")}oC("");const aC=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:ln,SDK_VERSION:xr,_DEFAULT_ENTRY_NAME:Mn,_addComponent:ks,_addOrOverwriteComponent:Hv,_apps:jn,_clearComponents:KS,_components:ui,_getProvider:nl,_isFirebaseApp:$v,_isFirebaseServerApp:qt,_registerComponent:Fn,_removeServiceInstance:GS,_serverApps:li,deleteApp:$d,getApp:Kv,getApps:JS,initializeApp:Hd,initializeServerApp:YS,onLog:Qv,registerVersion:Rt,setLogLevel:qv},Symbol.toStringTag,{value:"Module"}));/**
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
 */class lC{constructor(e,n){this._delegate=e,this.firebase=n,ks(e,new Ot("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),$d(this._delegate)))}_getService(e,n=Mn){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Mn){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){ks(this._delegate,e)}_addOrOverwriteComponent(e){Hv(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const uC={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},rp=new Ir("app-compat","Firebase",uC);/**
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
 */function cC(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:Rt,setLogLevel:qv,onLog:Qv,apps:null,SDK_VERSION:xr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:aC}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Mn,!nt(e,u))throw rp.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,d={}){const c=Hd(u,d);if(nt(e,c.name))return e[c.name];const f=new t(c,n);return e[c.name]=f,f}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const d=u.name,c=d.replace("-compat","");if(Fn(u)&&u.type==="PUBLIC"){const f=(m=i())=>{if(typeof m[c]!="function")throw rp.create("invalid-app-argument",{appName:d});return m[c]()};u.serviceProps!==void 0&&Is(f,u.serviceProps),n[c]=f,t.prototype[c]=function(...m){return this._getService.bind(this,d).apply(this,u.multipleInstances?m:[])}}return u.type==="PUBLIC"?n[c]:null}function l(u,d){return d==="serverAuth"?null:d}return n}/**
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
 */function Xv(){const t=cC(lC);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:Xv,extendNamespace:e,createSubscribe:Bv,ErrorFactory:Ir,deepExtend:Is});function e(n){Is(t,n)}return t}const dC=Xv();/**
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
 */const ip=new Gs("@firebase/app-compat"),hC="@firebase/app-compat",fC="0.2.35";/**
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
 */function pC(t){Rt(hC,fC,t)}/**
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
 */if(Mv()&&self.firebase!==void 0){ip.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&ip.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const rl=dC;pC();var mC="firebase",gC="10.12.2";/**
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
 */rl.registerVersion(mC,gC,"app-compat");var sp={};const op="@firebase/database",ap="1.0.5";/**
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
 */let Zv="";function e_(t){Zv=t}/**
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
 */class vC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ge(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:xs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class _C{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return nt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const t_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new vC(e)}}catch{}return new _C},or=t_("localStorage"),gc=t_("sessionStorage");/**
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
 */const Xr=new Gs("@firebase/database"),n_=function(){let t=1;return function(){return t++}}(),r_=function(t){const e=XE(t),n=new qE;n.update(e);const r=n.digest();return Ud.encodeByteArray(r)},Ks=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ks.apply(null,r):typeof r=="object"?e+=ge(r):e+=r,e+=" "}return e};let ur=null,lp=!0;const i_=function(t,e){x(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Xr.logLevel=K.VERBOSE,ur=Xr.log.bind(Xr),e&&gc.set("logging_enabled",!0)):typeof t=="function"?ur=t:(ur=null,gc.remove("logging_enabled"))},Ce=function(...t){if(lp===!0&&(lp=!1,ur===null&&gc.get("logging_enabled")===!0&&i_(!0)),ur){const e=Ks.apply(null,t);ur(e)}},Qs=function(t){return function(...e){Ce(t,...e)}},vc=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ks(...t);Xr.error(e)},Wt=function(...t){const e=`FIREBASE FATAL ERROR: ${Ks(...t)}`;throw Xr.error(e),new Error(e)},De=function(...t){const e="FIREBASE WARNING: "+Ks(...t);Xr.warn(e)},yC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&De("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},il=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},wC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Un="[MIN_NAME]",on="[MAX_NAME]",kr=function(t,e){if(t===e)return 0;if(t===Un||e===on)return-1;if(e===Un||t===on)return 1;{const n=up(t),r=up(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},EC=function(t,e){return t===e?0:t<e?-1:1},Mi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ge(e))},Gd=function(t){if(typeof t!="object"||t===null)return ge(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ge(e[r]),n+=":",n+=Gd(t[e[r]]);return n+="}",n},s_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function xe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const o_=function(t){x(!il(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(l=0;l<64;l+=8){let f=parseInt(d.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),c=c+f}return c.toLowerCase()},SC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},CC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function IC(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const xC=new RegExp("^-?(0*)\\d{1,10}$"),kC=-2147483648,NC=2147483647,up=function(t){if(xC.test(t)){const e=Number(t);if(e>=kC&&e<=NC)return e}return null},wi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw De("Exception was thrown by user callback.",n),e},Math.floor(0))}},TC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},es=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
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
 */class PC{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){De(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class RC{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ce("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',De(e)}}class Zr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Zr.OWNER="owner";/**
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
 */const Kd="5",a_="v",l_="s",u_="r",c_="f",d_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,h_="ls",f_="p",_c="ac",p_="websocket",m_="long_polling";/**
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
 */class g_{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=or.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&or.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function bC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function v_(t,e,n){x(typeof e=="string","typeof type must == string"),x(typeof n=="object","typeof params must == object");let r;if(e===p_)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===m_)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);bC(t)&&(n.ns=t.namespace);const i=[];return xe(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class AC{constructor(){this.counters_={}}incrementCounter(e,n=1){nt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return bE(this.counters_)}}/**
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
 */const lu={},uu={};function Qd(t){const e=t.toString();return lu[e]||(lu[e]=new AC),lu[e]}function OC(t,e){const n=t.toString();return uu[n]||(uu[n]=e()),uu[n]}/**
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
 */class DC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&wi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const cp="start",LC="close",MC="pLPCommand",jC="pRTLPCB",__="id",y_="pw",w_="ser",FC="cb",UC="seg",BC="ts",zC="d",WC="dframe",E_=1870,S_=30,VC=E_-S_,HC=25e3,$C=3e4;class _n{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Qs(e),this.stats_=Qd(n),this.urlFn=l=>(this.appCheckToken&&(l[_c]=this.appCheckToken),v_(n,m_,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new DC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor($C)),wC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new qd((...s)=>{const[o,a,l,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===cp)this.id=a,this.password=l;else if(o===LC)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[cp]="t",r[w_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[FC]=this.scriptTagHolder.uniqueCallbackIdentifier),r[a_]=Kd,this.transportSessionId&&(r[l_]=this.transportSessionId),this.lastSessionId&&(r[h_]=this.lastSessionId),this.applicationId&&(r[f_]=this.applicationId),this.appCheckToken&&(r[_c]=this.appCheckToken),typeof location<"u"&&location.hostname&&d_.test(location.hostname)&&(r[u_]=c_);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){_n.forceAllow_=!0}static forceDisallow(){_n.forceDisallow_=!0}static isAvailable(){return _n.forceAllow_?!0:!_n.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!SC()&&!CC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ge(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Dv(n),i=s_(r,VC);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[WC]="t",r[__]=e,r[y_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ge(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class qd{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=n_(),window[MC+this.uniqueCallbackIdentifier]=e,window[jC+this.uniqueCallbackIdentifier]=n,this.myIFrame=qd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ce("frame writing exception"),a.stack&&Ce(a.stack),Ce(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ce("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[__]=this.myID,e[y_]=this.myPW,e[w_]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+S_+r.length<=E_;){const o=this.pendingSegs.shift();r=r+"&"+UC+i+"="+o.seg+"&"+BC+i+"="+o.ts+"&"+zC+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(HC)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ce("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const GC=16384,KC=45e3;let wa=null;typeof MozWebSocket<"u"?wa=MozWebSocket:typeof WebSocket<"u"&&(wa=WebSocket);class ct{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Qs(this.connId),this.stats_=Qd(n),this.connURL=ct.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[a_]=Kd,typeof location<"u"&&location.hostname&&d_.test(location.hostname)&&(o[u_]=c_),n&&(o[l_]=n),r&&(o[h_]=r),i&&(o[_c]=i),s&&(o[f_]=s),v_(e,p_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,or.set("previous_websocket_failure",!0);try{let r;Fv(),this.mySock=new wa(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ct.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&wa!==null&&!ct.forceDisallow_}static previouslyFailed(){return or.isInMemoryStorage||or.get("previous_websocket_failure")===!0}markConnectionHealthy(){or.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=xs(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ge(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=s_(n,GC);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(KC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ct.responsesRequiredToBeHealthy=2;ct.healthyTimeout=3e4;/**
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
 */class ci{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[_n,ct]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ct&&ct.isAvailable();let r=n&&!ct.previouslyFailed();if(e.webSocketOnly&&(n||De("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ct];else{const i=this.transports_=[];for(const s of ci.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ci.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ci.globalTransportInitialized_=!1;/**
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
 */const QC=6e4,qC=5e3,YC=10*1024,JC=100*1024,cu="t",dp="d",XC="s",hp="r",ZC="e",fp="o",pp="a",mp="n",gp="p",eI="h";class tI{constructor(e,n,r,i,s,o,a,l,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Qs("c:"+this.id+":"),this.transportManager_=new ci(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=es(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>JC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>YC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(cu in e){const n=e[cu];n===pp?this.upgradeIfSecondaryHealthy_():n===hp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===fp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Mi("t",e),r=Mi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:gp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:pp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:mp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Mi("t",e),r=Mi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Mi(cu,e);if(dp in e){const r=e[dp];if(n===eI){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===mp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===XC?this.onConnectionShutdown_(r):n===hp?this.onReset_(r):n===ZC?vc("Server Error: "+r):n===fp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):vc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Kd!==r&&De("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),es(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(QC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):es(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(qC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:gp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(or.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class C_{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class I_{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){x(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Ea extends I_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Bd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ea}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const vp=32,_p=768;class G{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function $(){return new G("")}function F(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Bn(t){return t.pieces_.length-t.pieceNum_}function q(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new G(t.pieces_,e)}function Yd(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function nI(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ts(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function x_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new G(e,0)}function ie(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof G)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new G(n,0)}function U(t){return t.pieceNum_>=t.pieces_.length}function je(t,e){const n=F(t),r=F(e);if(n===null)return e;if(n===r)return je(q(t),q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function rI(t,e){const n=Ts(t,0),r=Ts(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=kr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Jd(t,e){if(Bn(t)!==Bn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ht(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Bn(t)>Bn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class iI{constructor(e,n){this.errorPrefix_=n,this.parts_=Ts(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=tl(this.parts_[r]);k_(this)}}function sI(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=tl(e),k_(t)}function oI(t){const e=t.parts_.pop();t.byteLength_-=tl(e),t.parts_.length>0&&(t.byteLength_-=1)}function k_(t){if(t.byteLength_>_p)throw new Error(t.errorPrefix_+"has a key path longer than "+_p+" bytes ("+t.byteLength_+").");if(t.parts_.length>vp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+vp+") or object contains a cycle "+nr(t))}function nr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Xd extends I_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Xd}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ji=1e3,aI=60*5*1e3,yp=30*1e3,lI=1.3,uI=3e4,cI="server_kill",wp=3;class Zt extends C_{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Zt.nextPersistentConnectionId_++,this.log_=Qs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ji,this.maxReconnectDelay_=aI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Fv())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Xd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ea.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ge(s)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ve,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Zt.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&nt(e,"w")){const r=gr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();De(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||KE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=yp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=GE(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ge(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):vc("Unrecognized action received from server: "+ge(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ji,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ji,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>uI&&(this.reconnectDelay_=ji),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*lI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Zt.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(c){x(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(c)};this.realtime_={close:l,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ce("getToken() completed but was canceled"):(Ce("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=f&&f.token,a=new tI(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{De(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(cI)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&De(c),l())}}}interrupt(e){Ce("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ce("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ga(this.interruptReasons_)&&(this.reconnectDelay_=ji,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Gd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new G(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ce("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=wp&&(this.reconnectDelay_=yp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ce("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=wp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Zv.replace(/\./g,"-")]=1,Bd()?e["framework.cordova"]=1:jv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ea.getInstance().currentlyOnline();return ga(this.interruptReasons_)&&e}}Zt.nextPersistentConnectionId_=0;Zt.nextConnectionId_=0;/**
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
 */class z{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new z(e,n)}}/**
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
 */class sl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new z(Un,e),i=new z(Un,n);return this.compare(r,i)!==0}minPost(){return z.MIN}}/**
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
 */let No;class N_ extends sl{static get __EMPTY_NODE(){return No}static set __EMPTY_NODE(e){No=e}compare(e,n){return kr(e.name,n.name)}isDefinedOn(e){throw yi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return z.MIN}maxPost(){return new z(on,No)}makePost(e,n){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new z(e,No)}toString(){return".key"}}const zt=new N_;/**
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
 */class To{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Se{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Se.RED,this.left=i??$e.EMPTY_NODE,this.right=s??$e.EMPTY_NODE}copy(e,n,r,i,s){return new Se(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return $e.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return $e.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Se.RED=!0;Se.BLACK=!1;class dI{copy(e,n,r,i,s){return this}insert(e,n,r){return new Se(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class $e{constructor(e,n=$e.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new $e(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Se.BLACK,null,null))}remove(e){return new $e(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Se.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new To(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new To(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new To(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new To(this.root_,null,this.comparator_,!0,e)}}$e.EMPTY_NODE=new dI;/**
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
 */function hI(t,e){return kr(t.name,e.name)}function Zd(t,e){return kr(t,e)}/**
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
 */let yc;function fI(t){yc=t}const T_=function(t){return typeof t=="number"?"number:"+o_(t):"string:"+t},P_=function(t){if(t.isLeafNode()){const e=t.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&nt(e,".sv"),"Priority must be a string or number.")}else x(t===yc||t.isEmpty(),"priority of unexpected type.");x(t===yc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Ep;class ye{constructor(e,n=ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),P_(this.priorityNode_)}static set __childrenNodeConstructor(e){Ep=e}static get __childrenNodeConstructor(){return Ep}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ye(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return U(e)?this:F(e)===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=F(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(x(r!==".priority"||Bn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(q(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+T_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=o_(this.value_):e+=this.value_,this.lazyHash_=r_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ye.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ye.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ye.VALUE_TYPE_ORDER.indexOf(n),s=ye.VALUE_TYPE_ORDER.indexOf(r);return x(i>=0,"Unknown leaf type: "+n),x(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ye.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let R_,b_;function pI(t){R_=t}function mI(t){b_=t}class gI extends sl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?kr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return z.MIN}maxPost(){return new z(on,new ye("[PRIORITY-POST]",b_))}makePost(e,n){const r=R_(e);return new z(n,new ye("[PRIORITY-POST]",r))}toString(){return".priority"}}const X=new gI;/**
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
 */const vI=Math.log(2);class _I{constructor(e){const n=s=>parseInt(Math.log(s)/vI,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Sa=function(t,e,n,r){t.sort(e);const i=function(l,u){const d=u-l;let c,f;if(d===0)return null;if(d===1)return c=t[l],f=n?n(c):c,new Se(f,c.node,Se.BLACK,null,null);{const m=parseInt(d/2,10)+l,_=i(l,m),y=i(m+1,u);return c=t[m],f=n?n(c):c,new Se(f,c.node,Se.BLACK,_,y)}},s=function(l){let u=null,d=null,c=t.length;const f=function(_,y){const C=c-_,g=c;c-=_;const p=i(C+1,g),v=t[C],S=n?n(v):v;m(new Se(S,v.node,y,null,p))},m=function(_){u?(u.left=_,u=_):(d=_,u=_)};for(let _=0;_<l.count;++_){const y=l.nextBitIsOne(),C=Math.pow(2,l.count-(_+1));y?f(C,Se.BLACK):(f(C,Se.BLACK),f(C,Se.RED))}return d},o=new _I(t.length),a=s(o);return new $e(r||e,a)};/**
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
 */let du;const Or={};class Yt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return x(Or&&X,"ChildrenNode.ts has not been loaded"),du=du||new Yt({".priority":Or},{".priority":X}),du}get(e){const n=gr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof $e?n:null}hasIndex(e){return nt(this.indexSet_,e.toString())}addIndex(e,n){x(e!==zt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(z.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Sa(r,e.getCompare()):a=Or;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new Yt(d,u)}addToIndexes(e,n){const r=va(this.indexes_,(i,s)=>{const o=gr(this.indexSet_,s);if(x(o,"Missing index implementation for "+s),i===Or)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(z.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Sa(a,o.getCompare())}else return Or;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new z(e.name,a))),l.insert(e,e.node)}});return new Yt(r,this.indexSet_)}removeFromIndexes(e,n){const r=va(this.indexes_,i=>{if(i===Or)return i;{const s=n.get(e.name);return s?i.remove(new z(e.name,s)):i}});return new Yt(r,this.indexSet_)}}/**
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
 */let Fi;class D{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&P_(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Fi||(Fi=new D(new $e(Zd),null,Yt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Fi}updatePriority(e){return this.children_.isEmpty()?this:new D(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Fi:n}}getChild(e){const n=F(e);return n===null?this:this.getImmediateChild(n).getChild(q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(x(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new z(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Fi:this.priorityNode_;return new D(i,o,s)}}updateChild(e,n){const r=F(e);if(r===null)return n;{x(F(e)!==".priority"||Bn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(q(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(X,(o,a)=>{n[o]=a.val(e),r++,s&&D.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+T_(this.getPriority().val())+":"),this.forEachChild(X,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":r_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new z(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new z(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===qs?-1:0}withIndex(e){if(e===zt||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new D(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===zt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(X),i=n.getIterator(X);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===zt?null:this.indexMap_.get(e.toString())}}D.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class yI extends D{constructor(){super(new $e(Zd),D.EMPTY_NODE,Yt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return D.EMPTY_NODE}isEmpty(){return!1}}const qs=new yI;Object.defineProperties(z,{MIN:{value:new z(Un,D.EMPTY_NODE)},MAX:{value:new z(on,qs)}});N_.__EMPTY_NODE=D.EMPTY_NODE;ye.__childrenNodeConstructor=D;fI(qs);mI(qs);/**
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
 */const wI=!0;function ae(t,e=null){if(t===null)return D.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ye(n,ae(e))}if(!(t instanceof Array)&&wI){const n=[];let r=!1;if(xe(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ae(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new z(o,l)))}}),n.length===0)return D.EMPTY_NODE;const s=Sa(n,hI,o=>o.name,Zd);if(r){const o=Sa(n,X.getCompare());return new D(s,ae(e),new Yt({".priority":o},{".priority":X}))}else return new D(s,ae(e),Yt.Default)}else{let n=D.EMPTY_NODE;return xe(t,(r,i)=>{if(nt(t,r)&&r.substring(0,1)!=="."){const s=ae(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ae(e))}}pI(ae);/**
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
 */class eh extends sl{constructor(e){super(),this.indexPath_=e,x(!U(e)&&F(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?kr(e.name,n.name):s}makePost(e,n){const r=ae(e),i=D.EMPTY_NODE.updateChild(this.indexPath_,r);return new z(n,i)}maxPost(){const e=D.EMPTY_NODE.updateChild(this.indexPath_,qs);return new z(on,e)}toString(){return Ts(this.indexPath_,0).join("/")}}/**
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
 */class EI extends sl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?kr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return z.MIN}maxPost(){return z.MAX}makePost(e,n){const r=ae(e);return new z(n,r)}toString(){return".value"}}const th=new EI;/**
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
 */function A_(t){return{type:"value",snapshotNode:t}}function di(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ps(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Rs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function SI(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class nh{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){x(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ps(n,a)):x(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(di(n,r)):o.trackChildChange(Rs(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(X,(i,s)=>{n.hasChild(i)||r.trackChildChange(Ps(i,s))}),n.isLeafNode()||n.forEachChild(X,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Rs(i,s,o))}else r.trackChildChange(di(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?D.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class bs{constructor(e){this.indexedFilter_=new nh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=bs.getStartPost_(e),this.endPost_=bs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new z(n,r))||(r=D.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=D.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(D.EMPTY_NODE);const s=this;return n.forEachChild(X,(o,a)=>{s.matches(new z(o,a))||(i=i.updateImmediateChild(o,D.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class CI{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new bs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new z(n,r))||(r=D.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=D.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=D.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(D.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,D.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(f,m)=>c(m,f)}else o=this.index_.getCompare();const a=e;x(a.numChildren()===this.limit_,"");const l=new z(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const c=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const m=f==null?1:o(f,l);if(d&&!r.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(Rs(n,r,c)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Ps(n,c));const y=a.updateImmediateChild(n,D.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(di(f.name,f.node)),y.updateImmediateChild(f.name,f.node)):y}}else return r.isEmpty()?e:d&&o(u,l)>=0?(s!=null&&(s.trackChildChange(Ps(u.name,u.node)),s.trackChildChange(di(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,D.EMPTY_NODE)):e}}/**
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
 */class ol{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=X}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Un}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:on}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===X}copy(){const e=new ol;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function II(t){return t.loadsAllData()?new nh(t.getIndex()):t.hasLimit()?new CI(t):new bs(t)}function xI(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function kI(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function wc(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function NI(t,e,n){let r;return t.index_===zt||n?r=wc(t,e,n):r=wc(t,e,on),r.startAfterSet_=!0,r}function Ec(t,e,n){const r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function TI(t,e,n){let r;return t.index_===zt||n?r=Ec(t,e,n):r=Ec(t,e,Un),r.endBeforeSet_=!0,r}function al(t,e){const n=t.copy();return n.index_=e,n}function Sp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===X?n="$priority":t.index_===th?n="$value":t.index_===zt?n="$key":(x(t.index_ instanceof eh,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ge(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ge(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ge(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ge(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ge(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Cp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==X&&(e.i=t.index_.toString()),e}/**
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
 */class Ca extends C_{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Qs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Ca.getListenId_(e,r),a={};this.listens_[o]=a;const l=Sp(e._queryParams);this.restRequest_(s+".json",l,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),gr(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=Ca.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Sp(e._queryParams),r=e._path.toString(),i=new Ve;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+$s(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=xs(a.responseText)}catch{De("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&De("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class PI{constructor(){this.rootNode_=D.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Ia(){return{value:null,children:new Map}}function Ei(t,e,n){if(U(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=F(e);t.children.has(r)||t.children.set(r,Ia());const i=t.children.get(r);e=q(e),Ei(i,e,n)}}function Sc(t,e){if(U(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(X,(r,i)=>{Ei(t,new G(r),i)}),Sc(t,e)}}else if(t.children.size>0){const n=F(e);return e=q(e),t.children.has(n)&&Sc(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function Cc(t,e,n){t.value!==null?n(e,t.value):RI(t,(r,i)=>{const s=new G(e.toString()+"/"+r);Cc(i,s,n)})}function RI(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class bI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&xe(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Ip=10*1e3,AI=30*1e3,OI=5*60*1e3;class DI{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new bI(e);const r=Ip+(AI-Ip)*Math.random();es(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;xe(e,(i,s)=>{s>0&&nt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),es(this.reportStats_.bind(this),Math.floor(Math.random()*2*OI))}}/**
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
 */var Nt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Nt||(Nt={}));function rh(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ih(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function sh(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class xa{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Nt.ACK_USER_WRITE,this.source=rh()}operationForChild(e){if(U(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new G(e));return new xa($(),n,this.revert)}}else return x(F(this.path)===e,"operationForChild called for unrelated child."),new xa(q(this.path),this.affectedTree,this.revert)}}/**
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
 */class As{constructor(e,n){this.source=e,this.path=n,this.type=Nt.LISTEN_COMPLETE}operationForChild(e){return U(this.path)?new As(this.source,$()):new As(this.source,q(this.path))}}/**
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
 */class _r{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Nt.OVERWRITE}operationForChild(e){return U(this.path)?new _r(this.source,$(),this.snap.getImmediateChild(e)):new _r(this.source,q(this.path),this.snap)}}/**
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
 */class hi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Nt.MERGE}operationForChild(e){if(U(this.path)){const n=this.children.subtree(new G(e));return n.isEmpty()?null:n.value?new _r(this.source,$(),n.value):new hi(this.source,$(),n)}else return x(F(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new hi(this.source,q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class zn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(U(e))return this.isFullyInitialized()&&!this.filtered_;const n=F(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class LI{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function MI(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(SI(o.childName,o.snapshotNode))}),Ui(t,i,"child_removed",e,r,n),Ui(t,i,"child_added",e,r,n),Ui(t,i,"child_moved",s,r,n),Ui(t,i,"child_changed",e,r,n),Ui(t,i,"value",e,r,n),i}function Ui(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>FI(t,a,l)),o.forEach(a=>{const l=jI(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function jI(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function FI(t,e,n){if(e.childName==null||n.childName==null)throw yi("Should only compare child_ events.");const r=new z(e.childName,e.snapshotNode),i=new z(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function ll(t,e){return{eventCache:t,serverCache:e}}function ts(t,e,n,r){return ll(new zn(e,n,r),t.serverCache)}function O_(t,e,n,r){return ll(t.eventCache,new zn(e,n,r))}function ka(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function yr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let hu;const UI=()=>(hu||(hu=new $e(EC)),hu);class Y{constructor(e,n=UI()){this.value=e,this.children=n}static fromObject(e){let n=new Y(null);return xe(e,(r,i)=>{n=n.set(new G(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:$(),value:this.value};if(U(e))return null;{const r=F(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(q(e),n);return s!=null?{path:ie(new G(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(U(e))return this;{const n=F(e),r=this.children.get(n);return r!==null?r.subtree(q(e)):new Y(null)}}set(e,n){if(U(e))return new Y(n,this.children);{const r=F(e),s=(this.children.get(r)||new Y(null)).set(q(e),n),o=this.children.insert(r,s);return new Y(this.value,o)}}remove(e){if(U(e))return this.children.isEmpty()?new Y(null):new Y(null,this.children);{const n=F(e),r=this.children.get(n);if(r){const i=r.remove(q(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Y(null):new Y(this.value,s)}else return this}}get(e){if(U(e))return this.value;{const n=F(e),r=this.children.get(n);return r?r.get(q(e)):null}}setTree(e,n){if(U(e))return n;{const r=F(e),s=(this.children.get(r)||new Y(null)).setTree(q(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Y(this.value,o)}}fold(e){return this.fold_($(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ie(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,$(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(U(e))return null;{const s=F(e),o=this.children.get(s);return o?o.findOnPath_(q(e),ie(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,$(),n)}foreachOnPath_(e,n,r){if(U(e))return this;{this.value&&r(n,this.value);const i=F(e),s=this.children.get(i);return s?s.foreachOnPath_(q(e),ie(n,i),r):new Y(null)}}foreach(e){this.foreach_($(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ie(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class bt{constructor(e){this.writeTree_=e}static empty(){return new bt(new Y(null))}}function ns(t,e,n){if(U(e))return new bt(new Y(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=je(i,e);return s=s.updateChild(o,n),new bt(t.writeTree_.set(i,s))}else{const i=new Y(n),s=t.writeTree_.setTree(e,i);return new bt(s)}}}function Ic(t,e,n){let r=t;return xe(n,(i,s)=>{r=ns(r,ie(e,i),s)}),r}function xp(t,e){if(U(e))return bt.empty();{const n=t.writeTree_.setTree(e,new Y(null));return new bt(n)}}function xc(t,e){return Nr(t,e)!=null}function Nr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(je(n.path,e)):null}function kp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(X,(r,i)=>{e.push(new z(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new z(r,i.value))}),e}function Rn(t,e){if(U(e))return t;{const n=Nr(t,e);return n!=null?new bt(new Y(n)):new bt(t.writeTree_.subtree(e))}}function kc(t){return t.writeTree_.isEmpty()}function fi(t,e){return D_($(),t.writeTree_,e)}function D_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(x(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=D_(ie(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ie(t,".priority"),r)),n}}/**
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
 */function ul(t,e){return F_(e,t)}function BI(t,e,n,r,i){x(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=ns(t.visibleWrites,e,n)),t.lastWriteId=r}function zI(t,e,n,r){x(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Ic(t.visibleWrites,e,n),t.lastWriteId=r}function WI(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function VI(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);x(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&HI(a,r.path)?i=!1:ht(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return $I(t),!0;if(r.snap)t.visibleWrites=xp(t.visibleWrites,r.path);else{const a=r.children;xe(a,l=>{t.visibleWrites=xp(t.visibleWrites,ie(r.path,l))})}return!0}else return!1}function HI(t,e){if(t.snap)return ht(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ht(ie(t.path,n),e))return!0;return!1}function $I(t){t.visibleWrites=L_(t.allWrites,GI,$()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function GI(t){return t.visible}function L_(t,e,n){let r=bt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)ht(n,o)?(a=je(n,o),r=ns(r,a,s.snap)):ht(o,n)&&(a=je(o,n),r=ns(r,$(),s.snap.getChild(a)));else if(s.children){if(ht(n,o))a=je(n,o),r=Ic(r,a,s.children);else if(ht(o,n))if(a=je(o,n),U(a))r=Ic(r,$(),s.children);else{const l=gr(s.children,F(a));if(l){const u=l.getChild(q(a));r=ns(r,$(),u)}}}else throw yi("WriteRecord should have .snap or .children")}}return r}function M_(t,e,n,r,i){if(!r&&!i){const s=Nr(t.visibleWrites,e);if(s!=null)return s;{const o=Rn(t.visibleWrites,e);if(kc(o))return n;if(n==null&&!xc(o,$()))return null;{const a=n||D.EMPTY_NODE;return fi(o,a)}}}else{const s=Rn(t.visibleWrites,e);if(!i&&kc(s))return n;if(!i&&n==null&&!xc(s,$()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(ht(u.path,e)||ht(e,u.path))},a=L_(t.allWrites,o,e),l=n||D.EMPTY_NODE;return fi(a,l)}}}function KI(t,e,n){let r=D.EMPTY_NODE;const i=Nr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(X,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Rn(t.visibleWrites,e);return n.forEachChild(X,(o,a)=>{const l=fi(Rn(s,new G(o)),a);r=r.updateImmediateChild(o,l)}),kp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Rn(t.visibleWrites,e);return kp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function QI(t,e,n,r,i){x(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ie(e,n);if(xc(t.visibleWrites,s))return null;{const o=Rn(t.visibleWrites,s);return kc(o)?i.getChild(n):fi(o,i.getChild(n))}}function qI(t,e,n,r){const i=ie(e,n),s=Nr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Rn(t.visibleWrites,i);return fi(o,r.getNode().getImmediateChild(n))}else return null}function YI(t,e){return Nr(t.visibleWrites,e)}function JI(t,e,n,r,i,s,o){let a;const l=Rn(t.visibleWrites,e),u=Nr(l,$());if(u!=null)a=u;else if(n!=null)a=fi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],c=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=f.getNext();for(;m&&d.length<i;)c(m,r)!==0&&d.push(m),m=f.getNext();return d}else return[]}function XI(){return{visibleWrites:bt.empty(),allWrites:[],lastWriteId:-1}}function Na(t,e,n,r){return M_(t.writeTree,t.treePath,e,n,r)}function oh(t,e){return KI(t.writeTree,t.treePath,e)}function Np(t,e,n,r){return QI(t.writeTree,t.treePath,e,n,r)}function Ta(t,e){return YI(t.writeTree,ie(t.treePath,e))}function ZI(t,e,n,r,i,s){return JI(t.writeTree,t.treePath,e,n,r,i,s)}function ah(t,e,n){return qI(t.writeTree,t.treePath,e,n)}function j_(t,e){return F_(ie(t.treePath,e),t.writeTree)}function F_(t,e){return{treePath:t,writeTree:e}}/**
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
 */class ex{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;x(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),x(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Rs(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Ps(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,di(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Rs(r,e.snapshotNode,i.oldSnap));else throw yi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class tx{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const U_=new tx;class lh{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new zn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ah(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:yr(this.viewCache_),s=ZI(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function nx(t){return{filter:t}}function rx(t,e){x(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function ix(t,e,n,r,i){const s=new ex;let o,a;if(n.type===Nt.OVERWRITE){const u=n;u.source.fromUser?o=Nc(t,e,u.path,u.snap,r,i,s):(x(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!U(u.path),o=Pa(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===Nt.MERGE){const u=n;u.source.fromUser?o=ox(t,e,u.path,u.children,r,i,s):(x(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Tc(t,e,u.path,u.children,r,i,a,s))}else if(n.type===Nt.ACK_USER_WRITE){const u=n;u.revert?o=ux(t,e,u.path,r,i,s):o=ax(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Nt.LISTEN_COMPLETE)o=lx(t,e,n.path,r,s);else throw yi("Unknown operation type: "+n.type);const l=s.getChanges();return sx(e,o,l),{viewCache:o,changes:l}}function sx(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=ka(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(A_(ka(e)))}}function B_(t,e,n,r,i,s){const o=e.eventCache;if(Ta(r,n)!=null)return e;{let a,l;if(U(n))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=yr(e),d=u instanceof D?u:D.EMPTY_NODE,c=oh(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=Na(r,yr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=F(n);if(u===".priority"){x(Bn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const c=Np(r,n,d,l);c!=null?a=t.filter.updatePriority(d,c):a=o.getNode()}else{const d=q(n);let c;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=Np(r,n,o.getNode(),l);f!=null?c=o.getNode().getImmediateChild(u).updateChild(d,f):c=o.getNode().getImmediateChild(u)}else c=ah(r,u,e.serverCache);c!=null?a=t.filter.updateChild(o.getNode(),u,c,d,i,s):a=o.getNode()}}return ts(e,a,o.isFullyInitialized()||U(n),t.filter.filtersNodes())}}function Pa(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(U(n))u=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,r);u=d.updateFullNode(l.getNode(),m,null)}else{const m=F(n);if(!l.isCompleteForPath(n)&&Bn(n)>1)return e;const _=q(n),C=l.getNode().getImmediateChild(m).updateChild(_,r);m===".priority"?u=d.updatePriority(l.getNode(),C):u=d.updateChild(l.getNode(),m,C,_,U_,null)}const c=O_(e,u,l.isFullyInitialized()||U(n),d.filtersNodes()),f=new lh(i,c,s);return B_(t,c,n,i,f,a)}function Nc(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const d=new lh(i,e,s);if(U(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=ts(e,u,!0,t.filter.filtersNodes());else{const c=F(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=ts(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=q(n),m=a.getNode().getImmediateChild(c);let _;if(U(f))_=r;else{const y=d.getCompleteChild(c);y!=null?Yd(f)===".priority"&&y.getChild(x_(f)).isEmpty()?_=y:_=y.updateChild(f,r):_=D.EMPTY_NODE}if(m.equals(_))l=e;else{const y=t.filter.updateChild(a.getNode(),c,_,f,d,o);l=ts(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Tp(t,e){return t.eventCache.isCompleteForChild(e)}function ox(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const d=ie(n,l);Tp(e,F(d))&&(a=Nc(t,a,d,u,i,s,o))}),r.foreach((l,u)=>{const d=ie(n,l);Tp(e,F(d))||(a=Nc(t,a,d,u,i,s,o))}),a}function Pp(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Tc(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;U(n)?u=r:u=new Y(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,f)=>{if(d.hasChild(c)){const m=e.serverCache.getNode().getImmediateChild(c),_=Pp(t,m,f);l=Pa(t,l,new G(c),_,i,s,o,a)}}),u.children.inorderTraversal((c,f)=>{const m=!e.serverCache.isCompleteForChild(c)&&f.value===null;if(!d.hasChild(c)&&!m){const _=e.serverCache.getNode().getImmediateChild(c),y=Pp(t,_,f);l=Pa(t,l,new G(c),y,i,s,o,a)}}),l}function ax(t,e,n,r,i,s,o){if(Ta(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(U(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Pa(t,e,n,l.getNode().getChild(n),i,s,a,o);if(U(n)){let u=new Y(null);return l.getNode().forEachChild(zt,(d,c)=>{u=u.set(new G(d),c)}),Tc(t,e,n,u,i,s,a,o)}else return e}else{let u=new Y(null);return r.foreach((d,c)=>{const f=ie(n,d);l.isCompleteForPath(f)&&(u=u.set(d,l.getNode().getChild(f)))}),Tc(t,e,n,u,i,s,a,o)}}function lx(t,e,n,r,i){const s=e.serverCache,o=O_(e,s.getNode(),s.isFullyInitialized()||U(n),s.isFiltered());return B_(t,o,n,r,U_,i)}function ux(t,e,n,r,i,s){let o;if(Ta(r,n)!=null)return e;{const a=new lh(r,e,i),l=e.eventCache.getNode();let u;if(U(n)||F(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Na(r,yr(e));else{const c=e.serverCache.getNode();x(c instanceof D,"serverChildren would be complete if leaf node"),d=oh(r,c)}d=d,u=t.filter.updateFullNode(l,d,s)}else{const d=F(n);let c=ah(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=l.getImmediateChild(d)),c!=null?u=t.filter.updateChild(l,d,c,q(n),a,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(l,d,D.EMPTY_NODE,q(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Na(r,yr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Ta(r,$())!=null,ts(e,u,o,t.filter.filtersNodes())}}/**
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
 */class cx{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new nh(r.getIndex()),s=II(r);this.processor_=nx(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(D.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(D.EMPTY_NODE,a.getNode(),null),d=new zn(l,o.isFullyInitialized(),i.filtersNodes()),c=new zn(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=ll(c,d),this.eventGenerator_=new LI(this.query_)}get query(){return this.query_}}function dx(t){return t.viewCache_.serverCache.getNode()}function hx(t){return ka(t.viewCache_)}function fx(t,e){const n=yr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!U(e)&&!n.getImmediateChild(F(e)).isEmpty())?n.getChild(e):null}function Rp(t){return t.eventRegistrations_.length===0}function px(t,e){t.eventRegistrations_.push(e)}function bp(t,e,n){const r=[];if(n){x(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Ap(t,e,n,r){e.type===Nt.MERGE&&e.source.queryId!==null&&(x(yr(t.viewCache_),"We should always have a full cache before handling merges"),x(ka(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=ix(t.processor_,i,e,n,r);return rx(t.processor_,s.viewCache),x(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,z_(t,s.changes,s.viewCache.eventCache.getNode(),null)}function mx(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(X,(s,o)=>{r.push(di(s,o))}),n.isFullyInitialized()&&r.push(A_(n.getNode())),z_(t,r,n.getNode(),e)}function z_(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return MI(t.eventGenerator_,e,n,i)}/**
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
 */let Ra;class W_{constructor(){this.views=new Map}}function gx(t){x(!Ra,"__referenceConstructor has already been defined"),Ra=t}function vx(){return x(Ra,"Reference.ts has not been loaded"),Ra}function _x(t){return t.views.size===0}function uh(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return x(s!=null,"SyncTree gave us an op for an invalid query."),Ap(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Ap(o,e,n,r));return s}}function V_(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Na(n,i?r:null),l=!1;a?l=!0:r instanceof D?(a=oh(n,r),l=!1):(a=D.EMPTY_NODE,l=!1);const u=ll(new zn(a,l,!1),new zn(r,i,!1));return new cx(e,u)}return o}function yx(t,e,n,r,i,s){const o=V_(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),px(o,n),mx(o,n)}function wx(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Wn(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(bp(u,n,r)),Rp(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(bp(l,n,r)),Rp(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Wn(t)&&s.push(new(vx())(e._repo,e._path)),{removed:s,events:o}}function H_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function bn(t,e){let n=null;for(const r of t.views.values())n=n||fx(r,e);return n}function $_(t,e){if(e._queryParams.loadsAllData())return cl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function G_(t,e){return $_(t,e)!=null}function Wn(t){return cl(t)!=null}function cl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let ba;function Ex(t){x(!ba,"__referenceConstructor has already been defined"),ba=t}function Sx(){return x(ba,"Reference.ts has not been loaded"),ba}let Cx=1;class Op{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Y(null),this.pendingWriteTree_=XI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ch(t,e,n,r,i){return BI(t.pendingWriteTree_,e,n,r,i),i?Si(t,new _r(rh(),e,n)):[]}function Ix(t,e,n,r){zI(t.pendingWriteTree_,e,n,r);const i=Y.fromObject(n);return Si(t,new hi(rh(),e,i))}function yn(t,e,n=!1){const r=WI(t.pendingWriteTree_,e);if(VI(t.pendingWriteTree_,e)){let s=new Y(null);return r.snap!=null?s=s.set($(),!0):xe(r.children,o=>{s=s.set(new G(o),!0)}),Si(t,new xa(r.path,s,n))}else return[]}function Ys(t,e,n){return Si(t,new _r(ih(),e,n))}function xx(t,e,n){const r=Y.fromObject(n);return Si(t,new hi(ih(),e,r))}function kx(t,e){return Si(t,new As(ih(),e))}function Nx(t,e,n){const r=dh(t,n);if(r){const i=hh(r),s=i.path,o=i.queryId,a=je(s,e),l=new As(sh(o),a);return fh(t,s,l)}else return[]}function Aa(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||G_(o,e))){const l=wx(o,e,n,r);_x(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const d=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(f,m)=>Wn(m));if(d&&!c){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const m=Rx(f);for(let _=0;_<m.length;++_){const y=m[_],C=y.query,g=Y_(t,y);t.listenProvider_.startListening(rs(C),Os(t,C),g.hashFn,g.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(rs(e),null):u.forEach(f=>{const m=t.queryToTagMap.get(hl(f));t.listenProvider_.stopListening(rs(f),m)}))}bx(t,u)}return a}function K_(t,e,n,r){const i=dh(t,r);if(i!=null){const s=hh(i),o=s.path,a=s.queryId,l=je(o,e),u=new _r(sh(a),l,n);return fh(t,o,u)}else return[]}function Tx(t,e,n,r){const i=dh(t,r);if(i){const s=hh(i),o=s.path,a=s.queryId,l=je(o,e),u=Y.fromObject(n),d=new hi(sh(a),l,u);return fh(t,o,d)}else return[]}function Pc(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,m)=>{const _=je(f,i);s=s||bn(m,_),o=o||Wn(m)});let a=t.syncPointTree_.get(i);a?(o=o||Wn(a),s=s||bn(a,$())):(a=new W_,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=D.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,_)=>{const y=bn(_,$());y&&(s=s.updateImmediateChild(m,y))}));const u=G_(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=hl(e);x(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const m=Ax();t.queryToTagMap.set(f,m),t.tagToQueryMap.set(m,f)}const d=ul(t.pendingWriteTree_,i);let c=yx(a,e,n,d,s,l);if(!u&&!o&&!r){const f=$_(a,e);c=c.concat(Ox(t,e,f))}return c}function dl(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=je(o,e),u=bn(a,l);if(u)return u});return M_(i,e,s,n,!0)}function Px(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const c=je(u,n);r=r||bn(d,c)});let i=t.syncPointTree_.get(n);i?r=r||bn(i,$()):(i=new W_,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new zn(r,!0,!1):null,a=ul(t.pendingWriteTree_,e._path),l=V_(i,e,a,s?o.getNode():D.EMPTY_NODE,s);return hx(l)}function Si(t,e){return Q_(e,t.syncPointTree_,null,ul(t.pendingWriteTree_,$()))}function Q_(t,e,n,r){if(U(t.path))return q_(t,e,n,r);{const i=e.get($());n==null&&i!=null&&(n=bn(i,$()));let s=[];const o=F(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,d=j_(r,o);s=s.concat(Q_(a,l,u,d))}return i&&(s=s.concat(uh(i,t,r,n))),s}}function q_(t,e,n,r){const i=e.get($());n==null&&i!=null&&(n=bn(i,$()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=j_(r,o),d=t.operationForChild(o);d&&(s=s.concat(q_(d,a,l,u)))}),i&&(s=s.concat(uh(i,t,r,n))),s}function Y_(t,e){const n=e.query,r=Os(t,n);return{hashFn:()=>(dx(e)||D.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?Nx(t,n._path,r):kx(t,n._path);{const s=IC(i,n);return Aa(t,n,null,s)}}}}function Os(t,e){const n=hl(e);return t.queryToTagMap.get(n)}function hl(t){return t._path.toString()+"$"+t._queryIdentifier}function dh(t,e){return t.tagToQueryMap.get(e)}function hh(t){const e=t.indexOf("$");return x(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new G(t.substr(0,e))}}function fh(t,e,n){const r=t.syncPointTree_.get(e);x(r,"Missing sync point for query tag that we're tracking");const i=ul(t.pendingWriteTree_,e);return uh(r,n,i,null)}function Rx(t){return t.fold((e,n,r)=>{if(n&&Wn(n))return[cl(n)];{let i=[];return n&&(i=H_(n)),xe(r,(s,o)=>{i=i.concat(o)}),i}})}function rs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Sx())(t._repo,t._path):t}function bx(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=hl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function Ax(){return Cx++}function Ox(t,e,n){const r=e._path,i=Os(t,e),s=Y_(t,n),o=t.listenProvider_.startListening(rs(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)x(!Wn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,d,c)=>{if(!U(u)&&d&&Wn(d))return[cl(d).query];{let f=[];return d&&(f=f.concat(H_(d).map(m=>m.query))),xe(c,(m,_)=>{f=f.concat(_)}),f}});for(let u=0;u<l.length;++u){const d=l[u];t.listenProvider_.stopListening(rs(d),Os(t,d))}}return o}/**
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
 */class ph{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ph(n)}node(){return this.node_}}class mh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ie(this.path_,e);return new mh(this.syncTree_,n)}node(){return dl(this.syncTree_,this.path_)}}const Dx=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Dp=function(t,e,n){if(!t||typeof t!="object")return t;if(x(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Lx(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Mx(t[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Lx=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:x(!1,"Unexpected server value: "+t)}},Mx=function(t,e,n){t.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&x(!1,"Unexpected increment value: "+r);const i=e.node();if(x(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},J_=function(t,e,n,r){return vh(e,new mh(n,t),r)},gh=function(t,e,n){return vh(t,new ph(e),n)};function vh(t,e,n){const r=t.getPriority().val(),i=Dp(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Dp(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ye(a,ae(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ye(i))),o.forEachChild(X,(a,l)=>{const u=vh(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class _h{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function fl(t,e){let n=e instanceof G?e:new G(e),r=t,i=F(n);for(;i!==null;){const s=gr(r.node.children,i)||{children:{},childCount:0};r=new _h(i,r,s),n=q(n),i=F(n)}return r}function Tr(t){return t.node.value}function yh(t,e){t.node.value=e,Rc(t)}function X_(t){return t.node.childCount>0}function jx(t){return Tr(t)===void 0&&!X_(t)}function pl(t,e){xe(t.node.children,(n,r)=>{e(new _h(n,t,r))})}function Z_(t,e,n,r){n&&!r&&e(t),pl(t,i=>{Z_(i,e,!0,r)}),n&&r&&e(t)}function Fx(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Js(t){return new G(t.parent===null?t.name:Js(t.parent)+"/"+t.name)}function Rc(t){t.parent!==null&&Ux(t.parent,t.name,t)}function Ux(t,e,n){const r=jx(n),i=nt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Rc(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Rc(t))}/**
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
 */const Bx=/[\[\].#$\/\u0000-\u001F\u007F]/,zx=/[\[\].#$\u0000-\u001F\u007F]/,fu=10*1024*1024,ml=function(t){return typeof t=="string"&&t.length!==0&&!Bx.test(t)},ey=function(t){return typeof t=="string"&&t.length!==0&&!zx.test(t)},Wx=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ey(t)},Ds=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!il(t)||t&&typeof t=="object"&&nt(t,".sv")},Vt=function(t,e,n,r){r&&e===void 0||Xs(qe(t,"value"),e,n)},Xs=function(t,e,n){const r=n instanceof G?new iI(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+nr(r));if(typeof e=="function")throw new Error(t+"contains a function "+nr(r)+" with contents = "+e.toString());if(il(e))throw new Error(t+"contains "+e.toString()+" "+nr(r));if(typeof e=="string"&&e.length>fu/3&&tl(e)>fu)throw new Error(t+"contains a string greater than "+fu+" utf8 bytes "+nr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(xe(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!ml(o)))throw new Error(t+" contains an invalid key ("+o+") "+nr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);sI(r,o),Xs(t,a,r),oI(r)}),i&&s)throw new Error(t+' contains ".value" child '+nr(r)+" in addition to actual children.")}},Vx=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Ts(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!ml(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(rI);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&ht(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},ty=function(t,e,n,r){const i=qe(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];xe(e,(o,a)=>{const l=new G(o);if(Xs(i,a,ie(n,l)),Yd(l)===".priority"&&!Ds(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),Vx(i,s)},wh=function(t,e,n){if(il(e))throw new Error(qe(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Ds(e))throw new Error(qe(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},Zs=function(t,e,n,r){if(n!==void 0&&!ml(n))throw new Error(qe(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},Ls=function(t,e,n,r){if(!ey(n))throw new Error(qe(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Hx=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ls(t,e,n)},ft=function(t,e){if(F(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},ny=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ml(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Wx(n))throw new Error(qe(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class $x{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function gl(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Jd(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function ry(t,e,n){gl(t,n),iy(t,r=>Jd(r,e))}function rt(t,e,n){gl(t,n),iy(t,r=>ht(r,e)||ht(e,r))}function iy(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(Gx(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Gx(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ur&&Ce("event: "+n.toString()),wi(r)}}}/**
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
 */const sy="repo_interrupt",Kx=25;class Qx{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new $x,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ia(),this.transactionQueueTree_=new _h,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function qx(t,e,n){if(t.stats_=Qd(t.repoInfo_),t.forceRestClient_||TC())t.server_=new Ca(t.repoInfo_,(r,i,s,o)=>{Lp(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Mp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ge(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Zt(t.repoInfo_,e,(r,i,s,o)=>{Lp(t,r,i,s,o)},r=>{Mp(t,r)},r=>{Yx(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=OC(t.repoInfo_,()=>new DI(t.stats_,t.server_)),t.infoData_=new PI,t.infoSyncTree_=new Op({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Ys(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Eh(t,"connected",!1),t.serverSyncTree_=new Op({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);rt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function oy(t){const n=t.infoData_.getNode(new G(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function eo(t){return Dx({timestamp:oy(t)})}function Lp(t,e,n,r,i){t.dataUpdateCount++;const s=new G(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=va(n,u=>ae(u));o=Tx(t.serverSyncTree_,s,l,i)}else{const l=ae(n);o=K_(t.serverSyncTree_,s,l,i)}else if(r){const l=va(n,u=>ae(u));o=xx(t.serverSyncTree_,s,l)}else{const l=ae(n);o=Ys(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=pi(t,s)),rt(t.eventQueue_,a,o)}function Mp(t,e){Eh(t,"connected",e),e===!1&&Zx(t)}function Yx(t,e){xe(e,(n,r)=>{Eh(t,n,r)})}function Eh(t,e,n){const r=new G("/.info/"+e),i=ae(n);t.infoData_.updateSnapshot(r,i);const s=Ys(t.infoSyncTree_,r,i);rt(t.eventQueue_,r,s)}function vl(t){return t.nextWriteId_++}function Jx(t,e,n){const r=Px(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=ae(i).withIndex(e._queryParams.getIndex());Pc(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ys(t.serverSyncTree_,e._path,s);else{const a=Os(t.serverSyncTree_,e);o=K_(t.serverSyncTree_,e._path,s,a)}return rt(t.eventQueue_,e._path,o),Aa(t.serverSyncTree_,e,n,null,!0),s},i=>(Ci(t,"get for query "+ge(e)+" failed: "+i),Promise.reject(new Error(i))))}function Sh(t,e,n,r,i){Ci(t,"set",{path:e.toString(),value:n,priority:r});const s=eo(t),o=ae(n,r),a=dl(t.serverSyncTree_,e),l=gh(o,a,s),u=vl(t),d=ch(t.serverSyncTree_,e,l,u,!0);gl(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(f,m)=>{const _=f==="ok";_||De("set at "+e+" failed: "+f);const y=yn(t.serverSyncTree_,u,!_);rt(t.eventQueue_,e,y),Vn(t,i,f,m)});const c=Ih(t,e);pi(t,c),rt(t.eventQueue_,c,[])}function Xx(t,e,n,r){Ci(t,"update",{path:e.toString(),value:n});let i=!0;const s=eo(t),o={};if(xe(n,(a,l)=>{i=!1,o[a]=J_(ie(e,a),ae(l),t.serverSyncTree_,s)}),i)Ce("update() called with empty data.  Don't do anything."),Vn(t,r,"ok",void 0);else{const a=vl(t),l=Ix(t.serverSyncTree_,e,o,a);gl(t.eventQueue_,l),t.server_.merge(e.toString(),n,(u,d)=>{const c=u==="ok";c||De("update at "+e+" failed: "+u);const f=yn(t.serverSyncTree_,a,!c),m=f.length>0?pi(t,e):e;rt(t.eventQueue_,m,f),Vn(t,r,u,d)}),xe(n,u=>{const d=Ih(t,ie(e,u));pi(t,d)}),rt(t.eventQueue_,e,[])}}function Zx(t){Ci(t,"onDisconnectEvents");const e=eo(t),n=Ia();Cc(t.onDisconnect_,$(),(i,s)=>{const o=J_(i,s,t.serverSyncTree_,e);Ei(n,i,o)});let r=[];Cc(n,$(),(i,s)=>{r=r.concat(Ys(t.serverSyncTree_,i,s));const o=Ih(t,i);pi(t,o)}),t.onDisconnect_=Ia(),rt(t.eventQueue_,$(),r)}function ek(t,e,n){t.server_.onDisconnectCancel(e.toString(),(r,i)=>{r==="ok"&&Sc(t.onDisconnect_,e),Vn(t,n,r,i)})}function jp(t,e,n,r){const i=ae(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(s,o)=>{s==="ok"&&Ei(t.onDisconnect_,e,i),Vn(t,r,s,o)})}function tk(t,e,n,r,i){const s=ae(n,r);t.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&Ei(t.onDisconnect_,e,s),Vn(t,i,o,a)})}function nk(t,e,n,r){if(ga(n)){Ce("onDisconnect().update() called with empty data.  Don't do anything."),Vn(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,s)=>{i==="ok"&&xe(n,(o,a)=>{const l=ae(a);Ei(t.onDisconnect_,ie(e,o),l)}),Vn(t,r,i,s)})}function rk(t,e,n){let r;F(e._path)===".info"?r=Pc(t.infoSyncTree_,e,n):r=Pc(t.serverSyncTree_,e,n),ry(t.eventQueue_,e._path,r)}function bc(t,e,n){let r;F(e._path)===".info"?r=Aa(t.infoSyncTree_,e,n):r=Aa(t.serverSyncTree_,e,n),ry(t.eventQueue_,e._path,r)}function ay(t){t.persistentConnection_&&t.persistentConnection_.interrupt(sy)}function ik(t){t.persistentConnection_&&t.persistentConnection_.resume(sy)}function Ci(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ce(n,...e)}function Vn(t,e,n,r){e&&wi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function sk(t,e,n,r,i,s){Ci(t,"transaction on "+e);const o={path:e,update:n,onComplete:r,status:null,order:n_(),applyLocally:s,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=Ch(t,e,void 0);o.currentInputSnapshot=a;const l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Xs("transaction failed: Data returned ",l,o.path),o.status=0;const u=fl(t.transactionQueueTree_,e),d=Tr(u)||[];d.push(o),yh(u,d);let c;typeof l=="object"&&l!==null&&nt(l,".priority")?(c=gr(l,".priority"),x(Ds(c),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):c=(dl(t.serverSyncTree_,e)||D.EMPTY_NODE).getPriority().val();const f=eo(t),m=ae(l,c),_=gh(m,a,f);o.currentOutputSnapshotRaw=m,o.currentOutputSnapshotResolved=_,o.currentWriteId=vl(t);const y=ch(t.serverSyncTree_,e,_,o.currentWriteId,o.applyLocally);rt(t.eventQueue_,e,y),_l(t,t.transactionQueueTree_)}}function Ch(t,e,n){return dl(t.serverSyncTree_,e,n)||D.EMPTY_NODE}function _l(t,e=t.transactionQueueTree_){if(e||yl(t,e),Tr(e)){const n=uy(t,e);x(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&ok(t,Js(e),n)}else X_(e)&&pl(e,n=>{_l(t,n)})}function ok(t,e,n){const r=n.map(u=>u.currentWriteId),i=Ch(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];x(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=je(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Ci(t,"transaction put response",{path:l.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(yn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&c.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();yl(t,fl(t.transactionQueueTree_,e)),_l(t,t.transactionQueueTree_),rt(t.eventQueue_,e,d);for(let f=0;f<c.length;f++)wi(c[f])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{De("transaction at "+l.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}pi(t,e)}},o)}function pi(t,e){const n=ly(t,e),r=Js(n),i=uy(t,n);return ak(t,i,r),r}function ak(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=je(n,l.path);let d=!1,c;if(x(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,c=l.abortReason,i=i.concat(yn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Kx)d=!0,c="maxretry",i=i.concat(yn(t.serverSyncTree_,l.currentWriteId,!0));else{const f=Ch(t,l.path,o);l.currentInputSnapshot=f;const m=e[a].update(f.val());if(m!==void 0){Xs("transaction failed: Data returned ",m,l.path);let _=ae(m);typeof m=="object"&&m!=null&&nt(m,".priority")||(_=_.updatePriority(f.getPriority()));const C=l.currentWriteId,g=eo(t),p=gh(_,f,g);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=p,l.currentWriteId=vl(t),o.splice(o.indexOf(C),1),i=i.concat(ch(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(yn(t.serverSyncTree_,C,!0))}else d=!0,c="nodata",i=i.concat(yn(t.serverSyncTree_,l.currentWriteId,!0))}rt(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(c==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(c),!1,null))))}yl(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)wi(r[a]);_l(t,t.transactionQueueTree_)}function ly(t,e){let n,r=t.transactionQueueTree_;for(n=F(e);n!==null&&Tr(r)===void 0;)r=fl(r,n),e=q(e),n=F(e);return r}function uy(t,e){const n=[];return cy(t,e,n),n.sort((r,i)=>r.order-i.order),n}function cy(t,e,n){const r=Tr(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);pl(e,i=>{cy(t,i,n)})}function yl(t,e){const n=Tr(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,yh(e,n.length>0?n:void 0)}pl(e,r=>{yl(t,r)})}function Ih(t,e){const n=Js(ly(t,e)),r=fl(t.transactionQueueTree_,e);return Fx(r,i=>{pu(t,i)}),pu(t,r),Z_(r,i=>{pu(t,i)}),n}function pu(t,e){const n=Tr(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(x(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(x(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(yn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?yh(e,void 0):n.length=s+1,rt(t.eventQueue_,Js(e),i);for(let o=0;o<r.length;o++)wi(r[o])}}/**
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
 */function lk(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function uk(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):De(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ac=function(t,e){const n=ck(t),r=n.namespace;n.domain==="firebase.com"&&Wt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Wt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||yC();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new g_(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new G(n.pathString)}},ck=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=lk(t.substring(d,c)));const f=uk(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */const Fp="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",dk=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Fp.charAt(n%64),n=Math.floor(n/64);x(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Fp.charAt(e[i]);return x(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class dy{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ge(this.snapshot.exportVal())}}class hy{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class xh{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return x(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
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
 */let hk=class{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new Ve;return ek(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){ft("OnDisconnect.remove",this._path);const e=new Ve;return jp(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){ft("OnDisconnect.set",this._path),Vt("OnDisconnect.set",e,this._path,!1);const n=new Ve;return jp(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){ft("OnDisconnect.setWithPriority",this._path),Vt("OnDisconnect.setWithPriority",e,this._path,!1),wh("OnDisconnect.setWithPriority",n);const r=new Ve;return tk(this._repo,this._path,e,n,r.wrapCallback(()=>{})),r.promise}update(e){ft("OnDisconnect.update",this._path),ty("OnDisconnect.update",e,this._path);const n=new Ve;return nk(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}};/**
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
 */class Ye{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return U(this._path)?null:Yd(this._path)}get ref(){return new wt(this._repo,this._path)}get _queryIdentifier(){const e=Cp(this._queryParams),n=Gd(e);return n==="{}"?"default":n}get _queryObject(){return Cp(this._queryParams)}isEqual(e){if(e=Re(e),!(e instanceof Ye))return!1;const n=this._repo===e._repo,r=Jd(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+nI(this._path)}}function wl(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Qn(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===zt){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==Un)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==on)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===X){if(e!=null&&!Ds(e)||n!=null&&!Ds(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(x(t.getIndex()instanceof eh||t.getIndex()===th,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function El(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class wt extends Ye{constructor(e,n){super(e,n,new ol,!1)}get parent(){const e=x_(this._path);return e===null?null:new wt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}let Sl=class Oc{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new G(e),r=wr(this.ref,e);return new Oc(this._node.getChild(n),r,X)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Oc(i,wr(this.ref,r),X)))}hasChild(e){const n=new G(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}};function fy(t,e){return t=Re(t),t._checkNotDeleted("ref"),e!==void 0?wr(t._root,e):t._root}function Up(t,e){t=Re(t),t._checkNotDeleted("refFromURL");const n=Ac(e,t._repo.repoInfo_.nodeAdmin);ny("refFromURL",n);const r=n.repoInfo;return!t._repo.repoInfo_.isCustomHost()&&r.host!==t._repo.repoInfo_.host&&Wt("refFromURL: Host name does not match the current database: (found "+r.host+" but expected "+t._repo.repoInfo_.host+")"),fy(t,n.path.toString())}function wr(t,e){return t=Re(t),F(t._path)===null?Hx("child","path",e):Ls("child","path",e),new wt(t._repo,ie(t._path,e))}function fk(t,e){t=Re(t),ft("push",t._path),Vt("push",e,t._path,!0);const n=oy(t._repo),r=dk(n),i=wr(t,r),s=wr(t,r);let o;return e!=null?o=kh(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function pk(t){return ft("remove",t._path),kh(t,null)}function kh(t,e){t=Re(t),ft("set",t._path),Vt("set",e,t._path,!1);const n=new Ve;return Sh(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function mk(t,e){t=Re(t),ft("setPriority",t._path),wh("setPriority",e);const n=new Ve;return Sh(t._repo,ie(t._path,".priority"),e,null,n.wrapCallback(()=>{})),n.promise}function gk(t,e,n){if(ft("setWithPriority",t._path),Vt("setWithPriority",e,t._path,!1),wh("setWithPriority",n),t.key===".length"||t.key===".keys")throw"setWithPriority failed: "+t.key+" is a read-only object.";const r=new Ve;return Sh(t._repo,t._path,e,n,r.wrapCallback(()=>{})),r.promise}function vk(t,e){ty("update",e,t._path);const n=new Ve;return Xx(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function _k(t){t=Re(t);const e=new xh(()=>{}),n=new to(e);return Jx(t._repo,t,n).then(r=>new Sl(r,new wt(t._repo,t._path),t._queryParams.getIndex()))}class to{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new dy("value",this,new Sl(e.snapshotNode,new wt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new hy(this,e,n):null}matches(e){return e instanceof to?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Cl{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new hy(this,e,n):null}createEvent(e,n){x(e.childName!=null,"Child events should have a childName.");const r=wr(new wt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new dy(e.type,this,new Sl(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Cl?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function no(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(d,c)=>{bc(t._repo,t,a),l(d,c)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new xh(n,s||void 0),a=e==="value"?new to(o):new Cl(e,o);return rk(t._repo,t,a),()=>bc(t._repo,t,a)}function Dc(t,e,n,r){return no(t,"value",e,n,r)}function Bp(t,e,n,r){return no(t,"child_added",e,n,r)}function zp(t,e,n,r){return no(t,"child_changed",e,n,r)}function Wp(t,e,n,r){return no(t,"child_moved",e,n,r)}function Vp(t,e,n,r){return no(t,"child_removed",e,n,r)}function Hp(t,e,n){let r=null;const i=n?new xh(n):null;e==="value"?r=new to(i):e&&(r=new Cl(e,i)),bc(t._repo,t,r)}class Dt{}class py extends Dt{constructor(e,n){super(),this._value=e,this._key=n,this.type="endAt"}_apply(e){Vt("endAt",this._value,e._path,!0);const n=Ec(e._queryParams,this._value,this._key);if(El(n),Qn(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Ye(e._repo,e._path,n,e._orderByCalled)}}function yk(t,e){return Zs("endAt","key",e),new py(t,e)}class wk extends Dt{constructor(e,n){super(),this._value=e,this._key=n,this.type="endBefore"}_apply(e){Vt("endBefore",this._value,e._path,!1);const n=TI(e._queryParams,this._value,this._key);if(El(n),Qn(n),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Ye(e._repo,e._path,n,e._orderByCalled)}}function Ek(t,e){return Zs("endBefore","key",e),new wk(t,e)}class my extends Dt{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAt"}_apply(e){Vt("startAt",this._value,e._path,!0);const n=wc(e._queryParams,this._value,this._key);if(El(n),Qn(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Ye(e._repo,e._path,n,e._orderByCalled)}}function Sk(t=null,e){return Zs("startAt","key",e),new my(t,e)}class Ck extends Dt{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAfter"}_apply(e){Vt("startAfter",this._value,e._path,!1);const n=NI(e._queryParams,this._value,this._key);if(El(n),Qn(n),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new Ye(e._repo,e._path,n,e._orderByCalled)}}function Ik(t,e){return Zs("startAfter","key",e),new Ck(t,e)}class xk extends Dt{constructor(e){super(),this._limit=e,this.type="limitToFirst"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new Ye(e._repo,e._path,xI(e._queryParams,this._limit),e._orderByCalled)}}function kk(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new xk(t)}class Nk extends Dt{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Ye(e._repo,e._path,kI(e._queryParams,this._limit),e._orderByCalled)}}function Tk(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new Nk(t)}class Pk extends Dt{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){wl(e,"orderByChild");const n=new G(this._path);if(U(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new eh(n),i=al(e._queryParams,r);return Qn(i),new Ye(e._repo,e._path,i,!0)}}function Rk(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Ls("orderByChild","path",t),new Pk(t)}class bk extends Dt{constructor(){super(...arguments),this.type="orderByKey"}_apply(e){wl(e,"orderByKey");const n=al(e._queryParams,zt);return Qn(n),new Ye(e._repo,e._path,n,!0)}}function Ak(){return new bk}class Ok extends Dt{constructor(){super(...arguments),this.type="orderByPriority"}_apply(e){wl(e,"orderByPriority");const n=al(e._queryParams,X);return Qn(n),new Ye(e._repo,e._path,n,!0)}}function Dk(){return new Ok}class Lk extends Dt{constructor(){super(...arguments),this.type="orderByValue"}_apply(e){wl(e,"orderByValue");const n=al(e._queryParams,th);return Qn(n),new Ye(e._repo,e._path,n,!0)}}function Mk(){return new Lk}class jk extends Dt{constructor(e,n){super(),this._value=e,this._key=n,this.type="equalTo"}_apply(e){if(Vt("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new py(this._value,this._key)._apply(new my(this._value,this._key)._apply(e))}}function Fk(t,e){return Zs("equalTo","key",e),new jk(t,e)}function Ct(t,...e){let n=Re(t);for(const r of e)n=r._apply(n);return n}gx(wt);Ex(wt);/**
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
 */const Uk="FIREBASE_DATABASE_EMULATOR_HOST",Lc={};let Bk=!1;function zk(t,e,n,r){t.repoInfo_=new g_(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function gy(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Wt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ce("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ac(s,i),a=o.repoInfo,l,u;typeof process<"u"&&sp&&(u=sp[Uk]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=Ac(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const d=i&&l?new Zr(Zr.OWNER):new RC(t.name,t.options,e);ny("Invalid Firebase Database URL",o),U(o.path)||Wt("Database URL must point to the root of a Firebase Database (not including a child path).");const c=Vk(a,t,d,new PC(t.name,n));return new Hk(c,t)}function Wk(t,e){const n=Lc[e];(!n||n[t.key]!==t)&&Wt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),ay(t),delete n[t.key]}function Vk(t,e,n,r){let i=Lc[e.name];i||(i={},Lc[e.name]=i);let s=i[t.toURLString()];return s&&Wt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Qx(t,Bk,n,r),i[t.toURLString()]=s,s}let Hk=class{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(qx(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new wt(this._repo,$())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Wk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Wt("Cannot call "+e+" on a deleted database.")}};function vy(){ci.IS_TRANSPORT_INITIALIZED&&De("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function $k(){vy(),_n.forceDisallow()}function Gk(){vy(),ct.forceDisallow(),_n.forceAllow()}function Kk(t,e,n,r={}){t=Re(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Wt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Wt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Zr(Zr.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:FE(r.mockUserToken,t.app.options.projectId);s=new Zr(o)}zk(i,e,n,s)}function Qk(t){t=Re(t),t._checkNotDeleted("goOffline"),ay(t._repo)}function qk(t){t=Re(t),t._checkNotDeleted("goOnline"),ik(t._repo)}function Yk(t,e){i_(t,e)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function Jk(t){e_(xr),Fn(new Ot("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return gy(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Rt(op,ap,t),Rt(op,ap,"esm2017")}/**
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
 */const Xk={".sv":"timestamp"};function Zk(){return Xk}function e1(t){return{".sv":{increment:t}}}/**
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
 */let t1=class{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}};function n1(t,e,n){var r;if(t=Re(t),ft("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const i=(r=n==null?void 0:n.applyLocally)!==null&&r!==void 0?r:!0,s=new Ve,o=(l,u,d)=>{let c=null;l?s.reject(l):(c=new Sl(d,new wt(t._repo,t._path),X),s.resolve(new t1(u,c)))},a=Dc(t,()=>{});return sk(t._repo,t._path,e,o,a,i),s.promise}Zt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Zt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Jk();const r1="@firebase/database-compat",i1="1.0.5";/**
 * @license
 * Copyright 2021 Google LLC
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
 */const s1=new Gs("@firebase/database-compat"),_y=function(t){const e="FIREBASE WARNING: "+t;s1.warn(e)};/**
 * @license
 * Copyright 2021 Google LLC
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
 */const o1=function(t,e,n,r){if(n!==void 0&&typeof n!="boolean")throw new Error(qe(t,e)+"must be a boolean.")},a1=function(t,e,n){if(e!==void 0)switch(e){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(qe(t,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};/**
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
 */class l1{constructor(e){this._delegate=e}cancel(e){L("OnDisconnect.cancel",0,1,arguments.length),Ee("OnDisconnect.cancel","onComplete",e,!0);const n=this._delegate.cancel();return e&&n.then(()=>e(null),r=>e(r)),n}remove(e){L("OnDisconnect.remove",0,1,arguments.length),Ee("OnDisconnect.remove","onComplete",e,!0);const n=this._delegate.remove();return e&&n.then(()=>e(null),r=>e(r)),n}set(e,n){L("OnDisconnect.set",1,2,arguments.length),Ee("OnDisconnect.set","onComplete",n,!0);const r=this._delegate.set(e);return n&&r.then(()=>n(null),i=>n(i)),r}setWithPriority(e,n,r){L("OnDisconnect.setWithPriority",2,3,arguments.length),Ee("OnDisconnect.setWithPriority","onComplete",r,!0);const i=this._delegate.setWithPriority(e,n);return r&&i.then(()=>r(null),s=>r(s)),i}update(e,n){if(L("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let s=0;s<e.length;++s)i[""+s]=e[s];e=i,_y("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Ee("OnDisconnect.update","onComplete",n,!0);const r=this._delegate.update(e);return n&&r.then(()=>n(null),i=>n(i)),r}}/**
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
 */class u1{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return L("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}/**
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
 */class An{constructor(e,n){this._database=e,this._delegate=n}val(){return L("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return L("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return L("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return L("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return L("DataSnapshot.child",0,1,arguments.length),e=String(e),Ls("DataSnapshot.child","path",e),new An(this._database,this._delegate.child(e))}hasChild(e){return L("DataSnapshot.hasChild",1,1,arguments.length),Ls("DataSnapshot.hasChild","path",e),this._delegate.hasChild(e)}getPriority(){return L("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return L("DataSnapshot.forEach",1,1,arguments.length),Ee("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(n=>e(new An(this._database,n)))}hasChildren(){return L("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return L("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return L("DataSnapshot.ref",0,0,arguments.length),new Xe(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class ke{constructor(e,n){this.database=e,this._delegate=n}on(e,n,r,i){var s;L("Query.on",2,4,arguments.length),Ee("Query.on","callback",n,!1);const o=ke.getCancelAndContextArgs_("Query.on",r,i),a=(u,d)=>{n.call(o.context,new An(this.database,u),d)};a.userCallback=n,a.context=o.context;const l=(s=o.cancel)===null||s===void 0?void 0:s.bind(o.context);switch(e){case"value":return Dc(this._delegate,a,l),n;case"child_added":return Bp(this._delegate,a,l),n;case"child_removed":return Vp(this._delegate,a,l),n;case"child_changed":return zp(this._delegate,a,l),n;case"child_moved":return Wp(this._delegate,a,l),n;default:throw new Error(qe("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,n,r){if(L("Query.off",0,3,arguments.length),a1("Query.off",e),Ee("Query.off","callback",n,!0),Yf("Query.off","context",r),n){const i=()=>{};i.userCallback=n,i.context=r,Hp(this._delegate,e,i)}else Hp(this._delegate,e)}get(){return _k(this._delegate).then(e=>new An(this.database,e))}once(e,n,r,i){L("Query.once",1,4,arguments.length),Ee("Query.once","callback",n,!0);const s=ke.getCancelAndContextArgs_("Query.once",r,i),o=new Ve,a=(u,d)=>{const c=new An(this.database,u);n&&n.call(s.context,c,d),o.resolve(c)};a.userCallback=n,a.context=s.context;const l=u=>{s.cancel&&s.cancel.call(s.context,u),o.reject(u)};switch(e){case"value":Dc(this._delegate,a,l,{onlyOnce:!0});break;case"child_added":Bp(this._delegate,a,l,{onlyOnce:!0});break;case"child_removed":Vp(this._delegate,a,l,{onlyOnce:!0});break;case"child_changed":zp(this._delegate,a,l,{onlyOnce:!0});break;case"child_moved":Wp(this._delegate,a,l,{onlyOnce:!0});break;default:throw new Error(qe("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return o.promise}limitToFirst(e){return L("Query.limitToFirst",1,1,arguments.length),new ke(this.database,Ct(this._delegate,kk(e)))}limitToLast(e){return L("Query.limitToLast",1,1,arguments.length),new ke(this.database,Ct(this._delegate,Tk(e)))}orderByChild(e){return L("Query.orderByChild",1,1,arguments.length),new ke(this.database,Ct(this._delegate,Rk(e)))}orderByKey(){return L("Query.orderByKey",0,0,arguments.length),new ke(this.database,Ct(this._delegate,Ak()))}orderByPriority(){return L("Query.orderByPriority",0,0,arguments.length),new ke(this.database,Ct(this._delegate,Dk()))}orderByValue(){return L("Query.orderByValue",0,0,arguments.length),new ke(this.database,Ct(this._delegate,Mk()))}startAt(e=null,n){return L("Query.startAt",0,2,arguments.length),new ke(this.database,Ct(this._delegate,Sk(e,n)))}startAfter(e=null,n){return L("Query.startAfter",0,2,arguments.length),new ke(this.database,Ct(this._delegate,Ik(e,n)))}endAt(e=null,n){return L("Query.endAt",0,2,arguments.length),new ke(this.database,Ct(this._delegate,yk(e,n)))}endBefore(e=null,n){return L("Query.endBefore",0,2,arguments.length),new ke(this.database,Ct(this._delegate,Ek(e,n)))}equalTo(e,n){return L("Query.equalTo",1,2,arguments.length),new ke(this.database,Ct(this._delegate,Fk(e,n)))}toString(){return L("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return L("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if(L("Query.isEqual",1,1,arguments.length),!(e instanceof ke)){const n="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(n)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,n,r){const i={cancel:void 0,context:void 0};if(n&&r)i.cancel=n,Ee(e,"cancel",i.cancel,!0),i.context=r,Yf(e,"context",i.context);else if(n)if(typeof n=="object"&&n!==null)i.context=n;else if(typeof n=="function")i.cancel=n;else throw new Error(qe(e,"cancelOrContext")+" must either be a cancel callback or a context object.");return i}get ref(){return new Xe(this.database,new wt(this._delegate._repo,this._delegate._path))}}class Xe extends ke{constructor(e,n){super(e,new Ye(n._repo,n._path,new ol,!1)),this.database=e,this._delegate=n}getKey(){return L("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return L("Reference.child",1,1,arguments.length),typeof e=="number"&&(e=String(e)),new Xe(this.database,wr(this._delegate,e))}getParent(){L("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new Xe(this.database,e):null}getRoot(){return L("Reference.root",0,0,arguments.length),new Xe(this.database,this._delegate.root)}set(e,n){L("Reference.set",1,2,arguments.length),Ee("Reference.set","onComplete",n,!0);const r=kh(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}update(e,n){if(L("Reference.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let s=0;s<e.length;++s)i[""+s]=e[s];e=i,_y("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}ft("Reference.update",this._delegate._path),Ee("Reference.update","onComplete",n,!0);const r=vk(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}setWithPriority(e,n,r){L("Reference.setWithPriority",2,3,arguments.length),Ee("Reference.setWithPriority","onComplete",r,!0);const i=gk(this._delegate,e,n);return r&&i.then(()=>r(null),s=>r(s)),i}remove(e){L("Reference.remove",0,1,arguments.length),Ee("Reference.remove","onComplete",e,!0);const n=pk(this._delegate);return e&&n.then(()=>e(null),r=>e(r)),n}transaction(e,n,r){L("Reference.transaction",1,3,arguments.length),Ee("Reference.transaction","transactionUpdate",e,!1),Ee("Reference.transaction","onComplete",n,!0),o1("Reference.transaction","applyLocally",r);const i=n1(this._delegate,e,{applyLocally:r}).then(s=>new u1(s.committed,new An(this.database,s.snapshot)));return n&&i.then(s=>n(null,s.committed,s.snapshot),s=>n(s,!1,null)),i}setPriority(e,n){L("Reference.setPriority",1,2,arguments.length),Ee("Reference.setPriority","onComplete",n,!0);const r=mk(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}push(e,n){L("Reference.push",0,2,arguments.length),Ee("Reference.push","onComplete",n,!0);const r=fk(this._delegate,e),i=r.then(o=>new Xe(this.database,o));n&&i.then(()=>n(null),o=>n(o));const s=new Xe(this.database,r);return s.then=i.then.bind(i),s.catch=i.catch.bind(i,void 0),s}onDisconnect(){return ft("Reference.onDisconnect",this._delegate._path),new l1(new hk(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}/**
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
 */class Ms{constructor(e,n){this._delegate=e,this.app=n,this.INTERNAL={delete:()=>this._delegate._delete(),forceWebSockets:$k,forceLongPolling:Gk}}useEmulator(e,n,r={}){Kk(this._delegate,e,n,r)}ref(e){if(L("database.ref",0,1,arguments.length),e instanceof Xe){const n=Up(this._delegate,e.toString());return new Xe(this,n)}else{const n=fy(this._delegate,e);return new Xe(this,n)}}refFromURL(e){L("database.refFromURL",1,1,arguments.length);const r=Up(this._delegate,e);return new Xe(this,r)}goOffline(){return L("database.goOffline",0,0,arguments.length),Qk(this._delegate)}goOnline(){return L("database.goOnline",0,0,arguments.length),qk(this._delegate)}}Ms.ServerValue={TIMESTAMP:Zk(),increment:t=>e1(t)};function c1({app:t,url:e,version:n,customAuthImpl:r,customAppCheckImpl:i,namespace:s,nodeAdmin:o=!1}){e_(n);const a=new zd("database-standalone"),l=new hc("auth-internal",a);l.setComponent(new Ot("auth-internal",()=>r,"PRIVATE"));let u;return i&&(u=new hc("app-check-internal",a),u.setComponent(new Ot("app-check-internal",()=>i,"PRIVATE"))),{instance:new Ms(gy(t,l,u,e,o),t),namespace:s}}var d1=Object.freeze({__proto__:null,initStandalone:c1});/**
 * @license
 * Copyright 2021 Google LLC
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
 */const h1=Ms.ServerValue;function f1(t){t.INTERNAL.registerComponent(new Ot("database-compat",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app-compat").getImmediate(),i=e.getProvider("database").getImmediate({identifier:n});return new Ms(i,r)},"PUBLIC").setServiceProps({Reference:Xe,Query:ke,Database:Ms,DataSnapshot:An,enableLogging:Yk,INTERNAL:d1,ServerValue:h1}).setMultipleInstances(!0)),t.registerVersion(r1,i1)}f1(rl);var Mc=function(t,e){return Mc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},Mc(t,e)};function se(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Mc(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var te=function(){return te=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},te.apply(this,arguments)};function Nh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function w(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(d){try{u(r.next(d))}catch(c){o(c)}}function l(d){try{u(r.throw(d))}catch(c){o(c)}}function u(d){d.done?s(d.value):i(d.value).then(a,l)}u((r=r.apply(t,e||[])).next())})}function E(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(d){return l([u,d])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,u[0]&&(n=0)),n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(d){u=[6,d],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function gt(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var Oa="__sak";/**
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
 */function p1(t){var e=this;return Promise.all(t.map(function(n){return w(e,void 0,void 0,function(){var r,i;return E(this,function(s){switch(s.label){case 0:return s.trys.push([0,2,,3]),[4,n];case 1:return r=s.sent(),[2,{fulfilled:!0,value:r}];case 2:return i=s.sent(),[2,{fulfilled:!1,reason:i}];case 3:return[2]}})})}))}/**
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
 */var m1=function(){function t(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return t._getInstance=function(e){var n=this.receivers.find(function(i){return i.isListeningto(e)});if(n)return n;var r=new t(e);return this.receivers.push(r),r},t.prototype.isListeningto=function(e){return this.eventTarget===e},t.prototype.handleEvent=function(e){return w(this,void 0,void 0,function(){var n,r,i,s,o,a,l,u,d=this;return E(this,function(c){switch(c.label){case 0:return n=e,r=n.data,i=r.eventId,s=r.eventType,o=r.data,a=this.handlersMap[s],a!=null&&a.size?(n.ports[0].postMessage({status:"ack",eventId:i,eventType:s}),l=Array.from(a).map(function(f){return w(d,void 0,void 0,function(){return E(this,function(m){return[2,f(n.origin,o)]})})}),[4,p1(l)]):[2];case 1:return u=c.sent(),n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:u}),[2]}})})},t.prototype._subscribe=function(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)},t.prototype._unsubscribe=function(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)},t.receivers=[],t}();/**
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
 */function g1(t,e){for(var n="",r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */var v1=function(){function t(e){this.target=e,this.handlers=new Set}return t.prototype.removeMessageHandler=function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)},t.prototype._send=function(e,n,r){return r===void 0&&(r=50),w(this,void 0,void 0,function(){var i,s,o,a=this;return E(this,function(l){if(i=typeof MessageChannel<"u"?new MessageChannel:null,!i)throw new Error("connection_unavailable");return[2,new Promise(function(u,d){var c=g1("",20);i.port1.start();var f=setTimeout(function(){d(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage:function(m){var _=m;if(_.data.eventId===c)switch(_.data.status){case"ack":clearTimeout(f),s=setTimeout(function(){d(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),u(_.data.response);break;default:clearTimeout(f),clearTimeout(s),d(new Error("invalid_response"));break}}},a.handlers.add(o),i.port1.addEventListener("message",o.onMessage),a.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(function(){o&&a.removeMessageHandler(o)})]})})},t}();/**
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
 */function $p(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function yy(){return typeof $p().WorkerGlobalScope<"u"&&typeof $p().importScripts=="function"}function _1(){return w(this,void 0,void 0,function(){var t;return E(this,function(e){switch(e.label){case 0:if(!(navigator!=null&&navigator.serviceWorker))return[2,null];e.label=1;case 1:return e.trys.push([1,3,,4]),[4,navigator.serviceWorker.ready];case 2:return t=e.sent(),[2,t.active];case 3:return e.sent(),[2,null];case 4:return[2]}})})}function y1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function w1(){return yy()?self:null}/**
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
 */var wy="firebaseLocalStorageDb",E1=1,Da="firebaseLocalStorage",Ey="fbase_key",ro=function(){function t(e){this.request=e}return t.prototype.toPromise=function(){var e=this;return new Promise(function(n,r){e.request.addEventListener("success",function(){n(e.request.result)}),e.request.addEventListener("error",function(){r(e.request.error)})})},t}();function Il(t,e){return t.transaction([Da],e?"readwrite":"readonly").objectStore(Da)}function S1(){var t=indexedDB.deleteDatabase(wy);return new ro(t).toPromise()}function jc(){var t=this,e=indexedDB.open(wy,E1);return new Promise(function(n,r){e.addEventListener("error",function(){r(e.error)}),e.addEventListener("upgradeneeded",function(){var i=e.result;try{i.createObjectStore(Da,{keyPath:Ey})}catch(s){r(s)}}),e.addEventListener("success",function(){return w(t,void 0,void 0,function(){var i,s;return E(this,function(o){switch(o.label){case 0:return i=e.result,i.objectStoreNames.contains(Da)?[3,3]:(i.close(),[4,S1()]);case 1:return o.sent(),s=n,[4,jc()];case 2:return s.apply(void 0,[o.sent()]),[3,4];case 3:n(i),o.label=4;case 4:return[2]}})})})})}function Gp(t,e,n){return w(this,void 0,void 0,function(){var r,i;return E(this,function(s){return r=Il(t,!0).put((i={},i[Ey]=e,i.value=n,i)),[2,new ro(r).toPromise()]})})}function C1(t,e){return w(this,void 0,void 0,function(){var n,r;return E(this,function(i){switch(i.label){case 0:return n=Il(t,!1).get(e),[4,new ro(n).toPromise()];case 1:return r=i.sent(),[2,r===void 0?null:r.value]}})})}function Kp(t,e){var n=Il(t,!0).delete(e);return new ro(n).toPromise()}var I1=800,x1=3,k1=function(){function t(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(function(){},function(){})}return t.prototype._openDb=function(){return w(this,void 0,void 0,function(){var e;return E(this,function(n){switch(n.label){case 0:return this.db?[2,this.db]:(e=this,[4,jc()]);case 1:return e.db=n.sent(),[2,this.db]}})})},t.prototype._withRetries=function(e){return w(this,void 0,void 0,function(){var n,r,i;return E(this,function(s){switch(s.label){case 0:n=0,s.label=1;case 1:s.label=2;case 2:return s.trys.push([2,5,,6]),[4,this._openDb()];case 3:return r=s.sent(),[4,e(r)];case 4:return[2,s.sent()];case 5:if(i=s.sent(),n++>x1)throw i;return this.db&&(this.db.close(),this.db=void 0),[3,6];case 6:return[3,1];case 7:return[2]}})})},t.prototype.initializeServiceWorkerMessaging=function(){return w(this,void 0,void 0,function(){return E(this,function(e){return[2,yy()?this.initializeReceiver():this.initializeSender()]})})},t.prototype.initializeReceiver=function(){return w(this,void 0,void 0,function(){var e=this;return E(this,function(n){return this.receiver=m1._getInstance(w1()),this.receiver._subscribe("keyChanged",function(r,i){return w(e,void 0,void 0,function(){var s;return E(this,function(o){switch(o.label){case 0:return[4,this._poll()];case 1:return s=o.sent(),[2,{keyProcessed:s.includes(i.key)}]}})})}),this.receiver._subscribe("ping",function(r,i){return w(e,void 0,void 0,function(){return E(this,function(s){return[2,["keyChanged"]]})})}),[2]})})},t.prototype.initializeSender=function(){var e,n;return w(this,void 0,void 0,function(){var r,i;return E(this,function(s){switch(s.label){case 0:return r=this,[4,_1()];case 1:return r.activeServiceWorker=s.sent(),this.activeServiceWorker?(this.sender=new v1(this.activeServiceWorker),[4,this.sender._send("ping",{},800)]):[2];case 2:return i=s.sent(),i?(!((e=i[0])===null||e===void 0)&&e.fulfilled&&(!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0),[2]):[2]}})})},t.prototype.notifyServiceWorker=function(e){return w(this,void 0,void 0,function(){return E(this,function(n){switch(n.label){case 0:if(!this.sender||!this.activeServiceWorker||y1()!==this.activeServiceWorker)return[2];n.label=1;case 1:return n.trys.push([1,3,,4]),[4,this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)];case 2:return n.sent(),[3,4];case 3:return n.sent(),[3,4];case 4:return[2]}})})},t.prototype._isAvailable=function(){return w(this,void 0,void 0,function(){var e;return E(this,function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),indexedDB?[4,jc()]:[2,!1];case 1:return e=n.sent(),[4,Gp(e,Oa,"1")];case 2:return n.sent(),[4,Kp(e,Oa)];case 3:return n.sent(),[2,!0];case 4:return n.sent(),[3,5];case 5:return[2,!1]}})})},t.prototype._withPendingWrite=function(e){return w(this,void 0,void 0,function(){return E(this,function(n){switch(n.label){case 0:this.pendingWrites++,n.label=1;case 1:return n.trys.push([1,,3,4]),[4,e()];case 2:return n.sent(),[3,4];case 3:return this.pendingWrites--,[7];case 4:return[2]}})})},t.prototype._set=function(e,n){return w(this,void 0,void 0,function(){var r=this;return E(this,function(i){return[2,this._withPendingWrite(function(){return w(r,void 0,void 0,function(){return E(this,function(s){switch(s.label){case 0:return[4,this._withRetries(function(o){return Gp(o,e,n)})];case 1:return s.sent(),this.localCache[e]=n,[2,this.notifyServiceWorker(e)]}})})})]})})},t.prototype._get=function(e){return w(this,void 0,void 0,function(){var n;return E(this,function(r){switch(r.label){case 0:return[4,this._withRetries(function(i){return C1(i,e)})];case 1:return n=r.sent(),this.localCache[e]=n,[2,n]}})})},t.prototype._remove=function(e){return w(this,void 0,void 0,function(){var n=this;return E(this,function(r){return[2,this._withPendingWrite(function(){return w(n,void 0,void 0,function(){return E(this,function(i){switch(i.label){case 0:return[4,this._withRetries(function(s){return Kp(s,e)})];case 1:return i.sent(),delete this.localCache[e],[2,this.notifyServiceWorker(e)]}})})})]})})},t.prototype._poll=function(){return w(this,void 0,void 0,function(){var e,n,r,i,s,o,a,l,u,d,c;return E(this,function(f){switch(f.label){case 0:return[4,this._withRetries(function(m){var _=Il(m,!1).getAll();return new ro(_).toPromise()})];case 1:if(e=f.sent(),!e)return[2,[]];if(this.pendingWrites!==0)return[2,[]];if(n=[],r=new Set,e.length!==0)for(i=0,s=e;i<s.length;i++)o=s[i],a=o.fbase_key,l=o.value,r.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),n.push(a));for(u=0,d=Object.keys(this.localCache);u<d.length;u++)c=d[u],this.localCache[c]&&!r.has(c)&&(this.notifyListeners(c,null),n.push(c));return[2,n]}})})},t.prototype.notifyListeners=function(e,n){this.localCache[e]=n;var r=this.listeners[e];if(r)for(var i=0,s=Array.from(r);i<s.length;i++){var o=s[i];o(n)}},t.prototype.startPolling=function(){var e=this;this.stopPolling(),this.pollTimer=setInterval(function(){return w(e,void 0,void 0,function(){return E(this,function(n){return[2,this._poll()]})})},I1)},t.prototype.stopPolling=function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)},t.prototype._addListener=function(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)},t.prototype._removeListener=function(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()},t.type="LOCAL",t}(),N1=k1;function Sy(){var t;return t={},t["dependent-sdk-initialized-before-auth"]="Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",t}var T1=Sy,Fc=new Ir("auth","Firebase",Sy());/**
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
 */var ei=new Gs("@firebase/auth");function P1(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];ei.logLevel<=K.WARN&&ei.warn.apply(ei,gt(["Auth (".concat(xr,"): ").concat(t)],e,!1))}function zo(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];ei.logLevel<=K.ERROR&&ei.error.apply(ei,gt(["Auth (".concat(xr,"): ").concat(t)],e,!1))}/**
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
 */function it(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];throw Th.apply(void 0,gt([t],e,!1))}function Pr(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return Th.apply(void 0,gt([t],e,!1))}function Cy(t,e,n){var r,i=te(te({},T1()),(r={},r[e]=n,r)),s=new Ir("auth","Firebase",i);return s.create(e,{appName:t.name})}function cr(t){return Cy(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Th(t){for(var e,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];if(typeof t!="string"){var i=n[0],s=gt([],n.slice(1),!0);return s[0]&&(s[0].appName=t.name),(e=t._errorFactory).create.apply(e,gt([i],s,!1))}return Fc.create.apply(Fc,gt([t],n,!1))}function M(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!t)throw Th.apply(void 0,gt([e],n,!1))}function Jt(t){var e="INTERNAL ASSERTION FAILED: "+t;throw zo(e),new Error(e)}function Hn(t,e){t||Jt(e)}function R1(){return Qp()==="http:"||Qp()==="https:"}function Qp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function b1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(R1()||UE()||"connection"in navigator)?navigator.onLine:!0}function A1(){if(typeof navigator>"u")return null;var t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */var O1=function(){function t(e,n){this.shortDelay=e,this.longDelay=n,Hn(n>e,"Short delay should be less than long delay!"),this.isMobile=Bd()||jv()}return t.prototype.get=function(){return b1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)},t}();/**
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
 */function Iy(t,e){Hn(t.emulator,"Emulator should always be set here");var n=t.emulator.url;return e?"".concat(n).concat(e.startsWith("/")?e.slice(1):e):n}/**
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
 */var xy=function(){function t(){}return t.initialize=function(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)},t.fetch=function(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")},t.headers=function(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")},t.response=function(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")},t}();/**
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
 */var O,D1=(O={},O.CREDENTIAL_MISMATCH="custom-token-mismatch",O.MISSING_CUSTOM_TOKEN="internal-error",O.INVALID_IDENTIFIER="invalid-email",O.MISSING_CONTINUE_URI="internal-error",O.INVALID_PASSWORD="wrong-password",O.MISSING_PASSWORD="missing-password",O.INVALID_LOGIN_CREDENTIALS="invalid-credential",O.EMAIL_EXISTS="email-already-in-use",O.PASSWORD_LOGIN_DISABLED="operation-not-allowed",O.INVALID_IDP_RESPONSE="invalid-credential",O.INVALID_PENDING_TOKEN="invalid-credential",O.FEDERATED_USER_ID_ALREADY_LINKED="credential-already-in-use",O.MISSING_REQ_TYPE="internal-error",O.EMAIL_NOT_FOUND="user-not-found",O.RESET_PASSWORD_EXCEED_LIMIT="too-many-requests",O.EXPIRED_OOB_CODE="expired-action-code",O.INVALID_OOB_CODE="invalid-action-code",O.MISSING_OOB_CODE="internal-error",O.CREDENTIAL_TOO_OLD_LOGIN_AGAIN="requires-recent-login",O.INVALID_ID_TOKEN="invalid-user-token",O.TOKEN_EXPIRED="user-token-expired",O.USER_NOT_FOUND="user-token-expired",O.TOO_MANY_ATTEMPTS_TRY_LATER="too-many-requests",O.PASSWORD_DOES_NOT_MEET_REQUIREMENTS="password-does-not-meet-requirements",O.INVALID_CODE="invalid-verification-code",O.INVALID_SESSION_INFO="invalid-verification-id",O.INVALID_TEMPORARY_PROOF="invalid-credential",O.MISSING_SESSION_INFO="missing-verification-id",O.SESSION_EXPIRED="code-expired",O.MISSING_ANDROID_PACKAGE_NAME="missing-android-pkg-name",O.UNAUTHORIZED_DOMAIN="unauthorized-continue-uri",O.INVALID_OAUTH_CLIENT_ID="invalid-oauth-client-id",O.ADMIN_ONLY_OPERATION="admin-restricted-operation",O.INVALID_MFA_PENDING_CREDENTIAL="invalid-multi-factor-session",O.MFA_ENROLLMENT_NOT_FOUND="multi-factor-info-not-found",O.MISSING_MFA_ENROLLMENT_ID="missing-multi-factor-info",O.MISSING_MFA_PENDING_CREDENTIAL="missing-multi-factor-session",O.SECOND_FACTOR_EXISTS="second-factor-already-in-use",O.SECOND_FACTOR_LIMIT_EXCEEDED="maximum-second-factor-count-exceeded",O.BLOCKING_FUNCTION_ERROR_RESPONSE="internal-error",O.RECAPTCHA_NOT_ENABLED="recaptcha-not-enabled",O.MISSING_RECAPTCHA_TOKEN="missing-recaptcha-token",O.INVALID_RECAPTCHA_TOKEN="invalid-recaptcha-token",O.INVALID_RECAPTCHA_ACTION="invalid-recaptcha-action",O.MISSING_CLIENT_TYPE="missing-client-type",O.MISSING_RECAPTCHA_VERSION="missing-recaptcha-version",O.INVALID_RECAPTCHA_VERSION="invalid-recaptcha-version",O.INVALID_REQ_TYPE="invalid-req-type",O);/**
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
 */var L1=new O1(3e4,6e4);function Ht(t,e){return t.tenantId&&!e.tenantId?te(te({},e),{tenantId:t.tenantId}):e}function qn(t,e,n,r,i){return i===void 0&&(i={}),w(this,void 0,void 0,function(){var s=this;return E(this,function(o){return[2,ky(t,i,function(){return w(s,void 0,void 0,function(){var a,l,u,d;return E(this,function(c){switch(c.label){case 0:return a={},l={},r&&(e==="GET"?l=r:a={body:JSON.stringify(r)}),u=$s(te({key:t.config.apiKey},l)).slice(1),[4,t._getAdditionalHeaders()];case 1:return d=c.sent(),d["Content-Type"]="application/json",t.languageCode&&(d["X-Firebase-Locale"]=t.languageCode),[2,xy.fetch()(Ny(t,t.config.apiHost,n,u),te({method:e,headers:d,referrerPolicy:"no-referrer"},a))]}})})})]})})}function ky(t,e,n){return w(this,void 0,void 0,function(){var r,i,s,o,a,l,u,d,c,f;return E(this,function(m){switch(m.label){case 0:t._canInitEmulator=!1,r=te(te({},D1),e),m.label=1;case 1:return m.trys.push([1,4,,5]),i=new j1(t),[4,Promise.race([n(),i.promise])];case 2:return s=m.sent(),i.clearNetworkTimeout(),[4,s.json()];case 3:if(o=m.sent(),"needConfirmation"in o)throw Hi(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return[2,o];if(a=s.ok?o.errorMessage:o.error.message,l=a.split(" : "),u=l[0],d=l[1],u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Hi(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Hi(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Hi(t,"user-disabled",o);if(c=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-"),d)throw Cy(t,c,d);return it(t,c),[3,5];case 4:if(f=m.sent(),f instanceof ln)throw f;return it(t,"network-request-failed",{message:String(f)}),[3,5];case 5:return[2]}})})}function Rr(t,e,n,r,i){return i===void 0&&(i={}),w(this,void 0,void 0,function(){var s;return E(this,function(o){switch(o.label){case 0:return[4,qn(t,e,n,r,i)];case 1:return s=o.sent(),"mfaPendingCredential"in s&&it(t,"multi-factor-auth-required",{_serverResponse:s}),[2,s]}})})}function Ny(t,e,n,r){var i="".concat(e).concat(n,"?").concat(r);return t.config.emulator?Iy(t.config,i):"".concat(t.config.apiScheme,"://").concat(i)}function M1(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var j1=function(){function t(e){var n=this;this.auth=e,this.timer=null,this.promise=new Promise(function(r,i){n.timer=setTimeout(function(){return i(Pr(n.auth,"network-request-failed"))},L1.get())})}return t.prototype.clearNetworkTimeout=function(){clearTimeout(this.timer)},t}();function Hi(t,e,n){var r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=Pr(t,e,r);return i.customData._tokenResponse=n,i}function qp(t){return t!==void 0&&t.enterprise!==void 0}var F1=function(){function t(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}return t.prototype.getProviderEnforcementState=function(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(var n=0,r=this.recaptchaEnforcementState;n<r.length;n++){var i=r[n];if(i.provider&&i.provider===e)return M1(i.enforcementState)}return null},t.prototype.isProviderEnabled=function(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"},t}();function U1(t,e){return w(this,void 0,void 0,function(){return E(this,function(n){return[2,qn(t,"GET","/v2/recaptchaConfig",Ht(t,e))]})})}/**
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
 */function B1(t,e){return w(this,void 0,void 0,function(){return E(this,function(n){return[2,qn(t,"POST","/v1/accounts:delete",e)]})})}function Ty(t,e){return w(this,void 0,void 0,function(){return E(this,function(n){return[2,qn(t,"POST","/v1/accounts:lookup",e)]})})}/**
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
 */function is(t){if(t)try{var e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}function z1(t,e){return e===void 0&&(e=!1),w(this,void 0,void 0,function(){var n,r,i,s,o;return E(this,function(a){switch(a.label){case 0:return n=Re(t),[4,n.getIdToken(e)];case 1:return r=a.sent(),i=Ph(r),M(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error"),s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider,[2,{claims:i,token:r,authTime:is(mu(i.auth_time)),issuedAtTime:is(mu(i.iat)),expirationTime:is(mu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}]}})})}function mu(t){return Number(t)*1e3}function Ph(t){var e=t.split("."),n=e[0],r=e[1],i=e[2];if(n===void 0||r===void 0||i===void 0)return zo("JWT malformed, contained fewer than 3 sections"),null;try{var s=ma(r);return s?JSON.parse(s):(zo("Failed to decode base64 JWT payload"),null)}catch(o){return zo("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Yp(t){var e=Ph(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */function js(t,e,n){return n===void 0&&(n=!1),w(this,void 0,void 0,function(){var r;return E(this,function(i){switch(i.label){case 0:if(n)return[2,e];i.label=1;case 1:return i.trys.push([1,3,,6]),[4,e];case 2:return[2,i.sent()];case 3:return r=i.sent(),r instanceof ln&&W1(r)?t.auth.currentUser!==t?[3,5]:[4,t.auth.signOut()]:[3,5];case 4:i.sent(),i.label=5;case 5:throw r;case 6:return[2]}})})}function W1(t){var e=t.code;return e==="auth/".concat("user-disabled")||e==="auth/".concat("user-token-expired")}/**
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
 */var V1=function(){function t(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return t.prototype._start=function(){this.isRunning||(this.isRunning=!0,this.schedule())},t.prototype._stop=function(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))},t.prototype.getInterval=function(e){var n;if(e){var r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;var i=(n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0,r=i-Date.now()-3e5;return Math.max(0,r)}},t.prototype.schedule=function(e){var n=this;if(e===void 0&&(e=!1),!!this.isRunning){var r=this.getInterval(e);this.timerId=setTimeout(function(){return w(n,void 0,void 0,function(){return E(this,function(i){switch(i.label){case 0:return[4,this.iteration()];case 1:return i.sent(),[2]}})})},r)}},t.prototype.iteration=function(){return w(this,void 0,void 0,function(){var e;return E(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,this.user.getIdToken(!0)];case 1:return n.sent(),[3,3];case 2:return e=n.sent(),(e==null?void 0:e.code)==="auth/".concat("network-request-failed")&&this.schedule(!0),[2];case 3:return this.schedule(),[2]}})})},t}();/**
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
 */var Uc=function(){function t(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}return t.prototype._initializeTime=function(){this.lastSignInTime=is(this.lastLoginAt),this.creationTime=is(this.createdAt)},t.prototype._copy=function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()},t.prototype.toJSON=function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}},t}();/**
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
 */function La(t){var e;return w(this,void 0,void 0,function(){var n,r,i,s,o,a,l,u,d,c;return E(this,function(f){switch(f.label){case 0:return n=t.auth,[4,t.getIdToken()];case 1:return r=f.sent(),[4,js(t,Ty(n,{idToken:r}))];case 2:return i=f.sent(),M(i==null?void 0:i.users.length,n,"internal-error"),s=i.users[0],t._notifyReloadListener(s),o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Py(s.providerUserInfo):[],a=$1(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Uc(s.createdAt,s.lastLoginAt),isAnonymous:d},Object.assign(t,c),[2]}})})}function H1(t){return w(this,void 0,void 0,function(){var e;return E(this,function(n){switch(n.label){case 0:return e=Re(t),[4,La(e)];case 1:return n.sent(),[4,e.auth._persistUserIfCurrent(e)];case 2:return n.sent(),e.auth._notifyListenersIfCurrent(e),[2]}})})}function $1(t,e){var n=t.filter(function(r){return!e.some(function(i){return i.providerId===r.providerId})});return gt(gt([],n,!0),e,!0)}function Py(t){return t.map(function(e){var n=e.providerId,r=Nh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */function G1(t,e){return w(this,void 0,void 0,function(){var n,r=this;return E(this,function(i){switch(i.label){case 0:return[4,ky(t,{},function(){return w(r,void 0,void 0,function(){var s,o,a,l,u,d;return E(this,function(c){switch(c.label){case 0:return s=$s({grant_type:"refresh_token",refresh_token:e}).slice(1),o=t.config,a=o.tokenApiHost,l=o.apiKey,u=Ny(t,a,"/v1/token","key=".concat(l)),[4,t._getAdditionalHeaders()];case 1:return d=c.sent(),d["Content-Type"]="application/x-www-form-urlencoded",[2,xy.fetch()(u,{method:"POST",headers:d,body:s})]}})})})];case 1:return n=i.sent(),[2,{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}]}})})}function K1(t,e){return w(this,void 0,void 0,function(){return E(this,function(n){return[2,qn(t,"POST","/v2/accounts:revokeToken",Ht(t,e))]})})}/**
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
 */var gu=function(){function t(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return Object.defineProperty(t.prototype,"isExpired",{get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4},enumerable:!1,configurable:!0}),t.prototype.updateFromServerResponse=function(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");var n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Yp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)},t.prototype.updateFromIdToken=function(e){M(e.length!==0,"internal-error");var n=Yp(e);this.updateTokensAndExpiration(e,null,n)},t.prototype.getToken=function(e,n){return n===void 0&&(n=!1),w(this,void 0,void 0,function(){return E(this,function(r){switch(r.label){case 0:return!n&&this.accessToken&&!this.isExpired?[2,this.accessToken]:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?[4,this.refresh(e,this.refreshToken)]:[3,2]);case 1:return r.sent(),[2,this.accessToken];case 2:return[2,null]}})})},t.prototype.clearRefreshToken=function(){this.refreshToken=null},t.prototype.refresh=function(e,n){return w(this,void 0,void 0,function(){var r,i,s,o;return E(this,function(a){switch(a.label){case 0:return[4,G1(e,n)];case 1:return r=a.sent(),i=r.accessToken,s=r.refreshToken,o=r.expiresIn,this.updateTokensAndExpiration(i,s,Number(o)),[2]}})})},t.prototype.updateTokensAndExpiration=function(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3},t.fromJSON=function(e,n){var r=n.refreshToken,i=n.accessToken,s=n.expirationTime,o=new t;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o},t.prototype.toJSON=function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}},t.prototype._assign=function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime},t.prototype._clone=function(){return Object.assign(new t,this.toJSON())},t.prototype._performRefresh=function(){return Jt("not implemented")},t}();/**
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
 */function cn(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}var Ma=function(){function t(e){var n=e.uid,r=e.auth,i=e.stsTokenManager,s=Nh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new V1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?gt([],s.providerData,!0):[],this.metadata=new Uc(s.createdAt||void 0,s.lastLoginAt||void 0)}return t.prototype.getIdToken=function(e){return w(this,void 0,void 0,function(){var n;return E(this,function(r){switch(r.label){case 0:return[4,js(this,this.stsTokenManager.getToken(this.auth,e))];case 1:return n=r.sent(),M(n,this.auth,"internal-error"),this.accessToken===n?[3,3]:(this.accessToken=n,[4,this.auth._persistUserIfCurrent(this)]);case 2:r.sent(),this.auth._notifyListenersIfCurrent(this),r.label=3;case 3:return[2,n]}})})},t.prototype.getIdTokenResult=function(e){return z1(this,e)},t.prototype.reload=function(){return H1(this)},t.prototype._assign=function(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(function(n){return te({},n)}),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))},t.prototype._clone=function(e){var n=new t(te(te({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n},t.prototype._onReload=function(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)},t.prototype._notifyReloadListener=function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e},t.prototype._startProactiveRefresh=function(){this.proactiveRefresh._start()},t.prototype._stopProactiveRefresh=function(){this.proactiveRefresh._stop()},t.prototype._updateTokensIfNecessary=function(e,n){return n===void 0&&(n=!1),w(this,void 0,void 0,function(){var r;return E(this,function(i){switch(i.label){case 0:return r=!1,e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n?[4,La(this)]:[3,2];case 1:i.sent(),i.label=2;case 2:return[4,this.auth._persistUserIfCurrent(this)];case 3:return i.sent(),r&&this.auth._notifyListenersIfCurrent(this),[2]}})})},t.prototype.delete=function(){return w(this,void 0,void 0,function(){var e;return E(this,function(n){switch(n.label){case 0:return qt(this.auth.app)?[2,Promise.reject(cr(this.auth))]:[4,this.getIdToken()];case 1:return e=n.sent(),[4,js(this,B1(this.auth,{idToken:e}))];case 2:return n.sent(),this.stsTokenManager.clearRefreshToken(),[2,this.auth.signOut()]}})})},t.prototype.toJSON=function(){return te(te({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(function(e){return te({},e)}),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})},Object.defineProperty(t.prototype,"refreshToken",{get:function(){return this.stsTokenManager.refreshToken||""},enumerable:!1,configurable:!0}),t._fromJSON=function(e,n){var r,i,s,o,a,l,u,d,c=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,v=n.uid,S=n.emailVerified,N=n.isAnonymous,R=n.providerData,b=n.stsTokenManager;M(v&&b,e,"internal-error");var A=gu.fromJSON(this.name,b);M(typeof v=="string",e,"internal-error"),cn(c,e.name),cn(f,e.name),M(typeof S=="boolean",e,"internal-error"),M(typeof N=="boolean",e,"internal-error"),cn(m,e.name),cn(_,e.name),cn(y,e.name),cn(C,e.name),cn(g,e.name),cn(p,e.name);var Z=new t({uid:v,auth:e,email:f,emailVerified:S,displayName:c,isAnonymous:N,photoURL:_,phoneNumber:m,tenantId:y,stsTokenManager:A,createdAt:g,lastLoginAt:p});return R&&Array.isArray(R)&&(Z.providerData=R.map(function(W){return te({},W)})),C&&(Z._redirectEventId=C),Z},t._fromIdTokenResponse=function(e,n,r){return r===void 0&&(r=!1),w(this,void 0,void 0,function(){var i,s;return E(this,function(o){switch(o.label){case 0:return i=new gu,i.updateFromServerResponse(n),s=new t({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r}),[4,La(s)];case 1:return o.sent(),[2,s]}})})},t._fromGetAccountInfoResponse=function(e,n,r){return w(this,void 0,void 0,function(){var i,s,o,a,l,u;return E(this,function(d){return i=n.users[0],M(i.localId!==void 0,"internal-error"),s=i.providerUserInfo!==void 0?Py(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new gu,a.updateFromIdToken(r),l=new t({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Uc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)},Object.assign(l,u),[2,l]})})},t}();/**
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
 */var Jp=new Map;function Ft(t){Hn(t instanceof Function,"Expected a class definition");var e=Jp.get(t);return e?(Hn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Jp.set(t,e),e)}/**
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
 */var Q1=function(){function t(){this.type="NONE",this.storage={}}return t.prototype._isAvailable=function(){return w(this,void 0,void 0,function(){return E(this,function(e){return[2,!0]})})},t.prototype._set=function(e,n){return w(this,void 0,void 0,function(){return E(this,function(r){return this.storage[e]=n,[2]})})},t.prototype._get=function(e){return w(this,void 0,void 0,function(){var n;return E(this,function(r){return n=this.storage[e],[2,n===void 0?null:n]})})},t.prototype._remove=function(e){return w(this,void 0,void 0,function(){return E(this,function(n){return delete this.storage[e],[2]})})},t.prototype._addListener=function(e,n){},t.prototype._removeListener=function(e,n){},t.type="NONE",t}(),Xp=Q1;/**
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
 */function ss(t,e,n){return"".concat("firebase",":").concat(t,":").concat(e,":").concat(n)}var Zp=function(){function t(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;var i=this.auth,s=i.config,o=i.name;this.fullUserKey=ss(this.userKey,s.apiKey,o),this.fullPersistenceKey=ss("persistence",s.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return t.prototype.setCurrentUser=function(e){return this.persistence._set(this.fullUserKey,e.toJSON())},t.prototype.getCurrentUser=function(){return w(this,void 0,void 0,function(){var e;return E(this,function(n){switch(n.label){case 0:return[4,this.persistence._get(this.fullUserKey)];case 1:return e=n.sent(),[2,e?Ma._fromJSON(this.auth,e):null]}})})},t.prototype.removeCurrentUser=function(){return this.persistence._remove(this.fullUserKey)},t.prototype.savePersistenceForRedirect=function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)},t.prototype.setPersistence=function(e){return w(this,void 0,void 0,function(){var n;return E(this,function(r){switch(r.label){case 0:return this.persistence===e?[2]:[4,this.getCurrentUser()];case 1:return n=r.sent(),[4,this.removeCurrentUser()];case 2:return r.sent(),this.persistence=e,n?[2,this.setCurrentUser(n)]:[2]}})})},t.prototype.delete=function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)},t.create=function(e,n,r){return r===void 0&&(r="authUser"),w(this,void 0,void 0,function(){var i,s,o,a,l,u,d,c,f,m,_=this;return E(this,function(y){switch(y.label){case 0:return n.length?[4,Promise.all(n.map(function(C){return w(_,void 0,void 0,function(){return E(this,function(g){switch(g.label){case 0:return[4,C._isAvailable()];case 1:return g.sent()?[2,C]:[2,void 0]}})})}))]:[2,new t(Ft(Xp),e,r)];case 1:i=y.sent().filter(function(C){return C}),s=i[0]||Ft(Xp),o=ss(r,e.config.apiKey,e.name),a=null,l=0,u=n,y.label=2;case 2:if(!(l<u.length))return[3,7];d=u[l],y.label=3;case 3:return y.trys.push([3,5,,6]),[4,d._get(o)];case 4:return c=y.sent(),c?(f=Ma._fromJSON(e,c),d!==s&&(a=f),s=d,[3,7]):[3,6];case 5:return y.sent(),[3,6];case 6:return l++,[3,2];case 7:return m=i.filter(function(C){return C._shouldAllowMigration}),!s._shouldAllowMigration||!m.length?[2,new t(s,e,r)]:(s=m[0],a?[4,s._set(o,a.toJSON())]:[3,9]);case 8:y.sent(),y.label=9;case 9:return[4,Promise.all(n.map(function(C){return w(_,void 0,void 0,function(){return E(this,function(g){switch(g.label){case 0:if(C===s)return[3,4];g.label=1;case 1:return g.trys.push([1,3,,4]),[4,C._remove(o)];case 2:return g.sent(),[3,4];case 3:return g.sent(),[3,4];case 4:return[2]}})})}))];case 10:return y.sent(),[2,new t(s,e,r)]}})})},t}();/**
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
 */function em(t){var e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(by(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(q1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ay(e))return"Blackberry";if(Oy(e))return"Webos";if(Ry(e))return"Safari";if((e.includes("chrome/")||Y1(e))&&!e.includes("edge/"))return"Chrome";if(io(e))return"Android";var n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);return(r==null?void 0:r.length)===2?r[1]:"Other"}function q1(t){return t===void 0&&(t=Ue()),/firefox\//i.test(t)}function Ry(t){t===void 0&&(t=Ue());var e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Y1(t){return t===void 0&&(t=Ue()),/crios\//i.test(t)}function by(t){return t===void 0&&(t=Ue()),/iemobile/i.test(t)}function io(t){return t===void 0&&(t=Ue()),/android/i.test(t)}function Ay(t){return t===void 0&&(t=Ue()),/blackberry/i.test(t)}function Oy(t){return t===void 0&&(t=Ue()),/webos/i.test(t)}function xl(t){return t===void 0&&(t=Ue()),/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function J1(t){return t===void 0&&(t=Ue()),/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function X1(){return BE()&&document.documentMode===10}function Z1(t){return t===void 0&&(t=Ue()),xl(t)||io(t)||Oy(t)||Ay(t)||/windows phone/i.test(t)||by(t)}function eN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Dy(t,e){e===void 0&&(e=[]);var n;switch(t){case"Browser":n=em(Ue());break;case"Worker":n="".concat(em(Ue()),"-").concat(t);break;default:n=t}var r=e.length?e.join(","):"FirebaseCore-web";return"".concat(n,"/").concat("JsCore","/").concat(xr,"/").concat(r)}/**
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
 */var tN=function(){function t(e){this.auth=e,this.queue=[]}return t.prototype.pushCallback=function(e,n){var r=this,i=function(o){return new Promise(function(a,l){try{var u=e(o);a(u)}catch(d){l(d)}})};i.onAbort=n,this.queue.push(i);var s=this.queue.length-1;return function(){r.queue[s]=function(){return Promise.resolve()}}},t.prototype.runMiddleware=function(e){return w(this,void 0,void 0,function(){var n,r,i,s,o,a,l,u;return E(this,function(d){switch(d.label){case 0:if(this.auth.currentUser===e)return[2];n=[],d.label=1;case 1:d.trys.push([1,6,,7]),r=0,i=this.queue,d.label=2;case 2:return r<i.length?(s=i[r],[4,s(e)]):[3,5];case 3:d.sent(),s.onAbort&&n.push(s.onAbort),d.label=4;case 4:return r++,[3,2];case 5:return[3,7];case 6:for(o=d.sent(),n.reverse(),a=0,l=n;a<l.length;a++){u=l[a];try{u()}catch{}}throw this.auth._errorFactory.create("login-blocked",{originalMessage:o==null?void 0:o.message});case 7:return[2]}})})},t}();/**
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
 */function nN(t,e){return e===void 0&&(e={}),w(this,void 0,void 0,function(){return E(this,function(n){return[2,qn(t,"GET","/v2/passwordPolicy",Ht(t,e))]})})}/**
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
 */var rN=6,iN=function(){function t(e){var n,r,i,s,o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:rN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}return t.prototype.validatePassword=function(e){var n,r,i,s,o,a,l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l},t.prototype.validatePasswordLengthOptions=function(e,n){var r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)},t.prototype.validatePasswordCharacterOptions=function(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);for(var r,i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))},t.prototype.updatePasswordCharacterOptionsStatuses=function(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))},t}();/**
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
 */var sN=function(){function t(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tm(this),this.idTokenSubscription=new tm(this),this.beforeStateQueue=new tN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}return t.prototype._initializeWithPersistence=function(e,n){var r=this;return n&&(this._popupRedirectResolver=Ft(n)),this._initializationPromise=this.queue(function(){return w(r,void 0,void 0,function(){var i,s,o;return E(this,function(a){switch(a.label){case 0:return this._deleted?[2]:(i=this,[4,Zp.create(this,e)]);case 1:if(i.persistenceManager=a.sent(),this._deleted)return[2];if(!(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively))return[3,5];a.label=2;case 2:return a.trys.push([2,4,,5]),[4,this._popupRedirectResolver._initialize(this)];case 3:return a.sent(),[3,5];case 4:return a.sent(),[3,5];case 5:return[4,this.initializeCurrentUser(n)];case 6:return a.sent(),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,this._deleted?[2]:(this._isInitialized=!0,[2])}})})}),this._initializationPromise},t.prototype._onStorageEvent=function(){return w(this,void 0,void 0,function(){var e;return E(this,function(n){switch(n.label){case 0:return this._deleted?[2]:[4,this.assertedPersistence.getCurrentUser()];case 1:return e=n.sent(),!this.currentUser&&!e?[2]:this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),[4,this.currentUser.getIdToken()]):[3,3];case 2:return n.sent(),[2];case 3:return[4,this._updateCurrentUser(e,!0)];case 4:return n.sent(),[2]}})})},t.prototype.initializeCurrentUserFromIdToken=function(e){return w(this,void 0,void 0,function(){var n,r,i;return E(this,function(s){switch(s.label){case 0:return s.trys.push([0,4,,6]),[4,Ty(this,{idToken:e})];case 1:return n=s.sent(),[4,Ma._fromGetAccountInfoResponse(this,n,e)];case 2:return r=s.sent(),[4,this.directlySetCurrentUser(r)];case 3:return s.sent(),[3,6];case 4:return i=s.sent(),console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),[4,this.directlySetCurrentUser(null)];case 5:return s.sent(),[3,6];case 6:return[2]}})})},t.prototype.initializeCurrentUser=function(e){var n;return w(this,void 0,void 0,function(){var r,i,s,o,a,l,u,d,c=this;return E(this,function(f){switch(f.label){case 0:return qt(this.app)?(r=this.app.settings.authIdToken,r?[2,new Promise(function(m){setTimeout(function(){return c.initializeCurrentUserFromIdToken(r).then(m,m)})})]:[2,this.directlySetCurrentUser(null)]):[4,this.assertedPersistence.getCurrentUser()];case 1:return i=f.sent(),s=i,o=!1,e&&this.config.authDomain?[4,this.getOrInitRedirectPersistenceManager()]:[3,4];case 2:return f.sent(),a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,[4,this.tryRedirectSignIn(e)];case 3:u=f.sent(),(!a||a===l)&&(u!=null&&u.user)&&(s=u.user,o=!0),f.label=4;case 4:if(!s)return[2,this.directlySetCurrentUser(null)];if(s._redirectEventId)return[3,9];if(!o)return[3,8];f.label=5;case 5:return f.trys.push([5,7,,8]),[4,this.beforeStateQueue.runMiddleware(s)];case 6:return f.sent(),[3,8];case 7:return d=f.sent(),s=i,this._popupRedirectResolver._overrideRedirectResult(this,function(){return Promise.reject(d)}),[3,8];case 8:return s?[2,this.reloadAndSetCurrentUserOrClear(s)]:[2,this.directlySetCurrentUser(null)];case 9:return M(this._popupRedirectResolver,this,"argument-error"),[4,this.getOrInitRedirectPersistenceManager()];case 10:return f.sent(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?[2,this.directlySetCurrentUser(s)]:[2,this.reloadAndSetCurrentUserOrClear(s)]}})})},t.prototype.tryRedirectSignIn=function(e){return w(this,void 0,void 0,function(){var n;return E(this,function(r){switch(r.label){case 0:n=null,r.label=1;case 1:return r.trys.push([1,3,,5]),[4,this._popupRedirectResolver._completeRedirectFn(this,e,!0)];case 2:return n=r.sent(),[3,5];case 3:return r.sent(),[4,this._setRedirectUser(null)];case 4:return r.sent(),[3,5];case 5:return[2,n]}})})},t.prototype.reloadAndSetCurrentUserOrClear=function(e){return w(this,void 0,void 0,function(){var n;return E(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,La(e)];case 1:return r.sent(),[3,3];case 2:return n=r.sent(),(n==null?void 0:n.code)!=="auth/".concat("network-request-failed")?[2,this.directlySetCurrentUser(null)]:[3,3];case 3:return[2,this.directlySetCurrentUser(e)]}})})},t.prototype.useDeviceLanguage=function(){this.languageCode=A1()},t.prototype._delete=function(){return w(this,void 0,void 0,function(){return E(this,function(e){return this._deleted=!0,[2]})})},t.prototype.updateCurrentUser=function(e){return w(this,void 0,void 0,function(){var n;return E(this,function(r){return qt(this.app)?[2,Promise.reject(cr(this))]:(n=e?Re(e):null,n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),[2,this._updateCurrentUser(n&&n._clone(this))])})})},t.prototype._updateCurrentUser=function(e,n){return n===void 0&&(n=!1),w(this,void 0,void 0,function(){var r=this;return E(this,function(i){switch(i.label){case 0:return this._deleted?[2]:(e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n?[3,2]:[4,this.beforeStateQueue.runMiddleware(e)]);case 1:i.sent(),i.label=2;case 2:return[2,this.queue(function(){return w(r,void 0,void 0,function(){return E(this,function(s){switch(s.label){case 0:return[4,this.directlySetCurrentUser(e)];case 1:return s.sent(),this.notifyAuthListeners(),[2]}})})})]}})})},t.prototype.signOut=function(){return w(this,void 0,void 0,function(){return E(this,function(e){switch(e.label){case 0:return qt(this.app)?[2,Promise.reject(cr(this))]:[4,this.beforeStateQueue.runMiddleware(null)];case 1:return e.sent(),this.redirectPersistenceManager||this._popupRedirectResolver?[4,this._setRedirectUser(null)]:[3,3];case 2:e.sent(),e.label=3;case 3:return[2,this._updateCurrentUser(null,!0)]}})})},t.prototype.setPersistence=function(e){var n=this;return qt(this.app)?Promise.reject(cr(this)):this.queue(function(){return w(n,void 0,void 0,function(){return E(this,function(r){switch(r.label){case 0:return[4,this.assertedPersistence.setPersistence(Ft(e))];case 1:return r.sent(),[2]}})})})},t.prototype._getRecaptchaConfig=function(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]},t.prototype.validatePassword=function(e){return w(this,void 0,void 0,function(){var n;return E(this,function(r){switch(r.label){case 0:return this._getPasswordPolicyInternal()?[3,2]:[4,this._updatePasswordPolicy()];case 1:r.sent(),r.label=2;case 2:return n=this._getPasswordPolicyInternal(),n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?[2,Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{}))]:[2,n.validatePassword(e)]}})})},t.prototype._getPasswordPolicyInternal=function(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]},t.prototype._updatePasswordPolicy=function(){return w(this,void 0,void 0,function(){var e,n;return E(this,function(r){switch(r.label){case 0:return[4,nN(this)];case 1:return e=r.sent(),n=new iN(e),this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n,[2]}})})},t.prototype._getPersistence=function(){return this.assertedPersistence.persistence.type},t.prototype._updateErrorMap=function(e){this._errorFactory=new Ir("auth","Firebase",e())},t.prototype.onAuthStateChanged=function(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)},t.prototype.beforeAuthStateChanged=function(e,n){return this.beforeStateQueue.pushCallback(e,n)},t.prototype.onIdTokenChanged=function(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)},t.prototype.authStateReady=function(){var e=this;return new Promise(function(n,r){if(e.currentUser)n();else var i=e.onAuthStateChanged(function(){i(),n()},r)})},t.prototype.revokeAccessToken=function(e){return w(this,void 0,void 0,function(){var n,r;return E(this,function(i){switch(i.label){case 0:return this.currentUser?[4,this.currentUser.getIdToken()]:[3,3];case 1:return n=i.sent(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n},this.tenantId!=null&&(r.tenantId=this.tenantId),[4,K1(this,r)];case 2:i.sent(),i.label=3;case 3:return[2]}})})},t.prototype.toJSON=function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}},t.prototype._setRedirectUser=function(e,n){return w(this,void 0,void 0,function(){var r;return E(this,function(i){switch(i.label){case 0:return[4,this.getOrInitRedirectPersistenceManager(n)];case 1:return r=i.sent(),[2,e===null?r.removeCurrentUser():r.setCurrentUser(e)]}})})},t.prototype.getOrInitRedirectPersistenceManager=function(e){return w(this,void 0,void 0,function(){var n,r,i;return E(this,function(s){switch(s.label){case 0:return this.redirectPersistenceManager?[3,3]:(n=e&&Ft(e)||this._popupRedirectResolver,M(n,this,"argument-error"),r=this,[4,Zp.create(this,[Ft(n._redirectPersistence)],"redirectUser")]);case 1:return r.redirectPersistenceManager=s.sent(),i=this,[4,this.redirectPersistenceManager.getCurrentUser()];case 2:i.redirectUser=s.sent(),s.label=3;case 3:return[2,this.redirectPersistenceManager]}})})},t.prototype._redirectUserForId=function(e){var n,r;return w(this,void 0,void 0,function(){var i=this;return E(this,function(s){switch(s.label){case 0:return this._isInitialized?[4,this.queue(function(){return w(i,void 0,void 0,function(){return E(this,function(o){return[2]})})})]:[3,2];case 1:s.sent(),s.label=2;case 2:return((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?[2,this._currentUser]:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?[2,this.redirectUser]:[2,null]}})})},t.prototype._persistUserIfCurrent=function(e){return w(this,void 0,void 0,function(){var n=this;return E(this,function(r){return e===this.currentUser?[2,this.queue(function(){return w(n,void 0,void 0,function(){return E(this,function(i){return[2,this.directlySetCurrentUser(e)]})})})]:[2]})})},t.prototype._notifyListenersIfCurrent=function(e){e===this.currentUser&&this.notifyAuthListeners()},t.prototype._key=function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)},t.prototype._startProactiveRefresh=function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()},t.prototype._stopProactiveRefresh=function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()},Object.defineProperty(t.prototype,"_currentUser",{get:function(){return this.currentUser},enumerable:!1,configurable:!0}),t.prototype.notifyAuthListeners=function(){var e,n;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}},t.prototype.registerStateListener=function(e,n,r,i){var s=this;if(this._deleted)return function(){};var o=typeof n=="function"?n:n.next.bind(n),a=!1,l=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(l,this,"internal-error"),l.then(function(){a||o(s.currentUser)}),typeof n=="function"){var u=e.addObserver(n,r,i);return function(){a=!0,u()}}else{var d=e.addObserver(n);return function(){a=!0,d()}}},t.prototype.directlySetCurrentUser=function(e){return w(this,void 0,void 0,function(){return E(this,function(n){switch(n.label){case 0:return this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?[4,this.assertedPersistence.setCurrentUser(e)]:[3,2];case 1:return n.sent(),[3,4];case 2:return[4,this.assertedPersistence.removeCurrentUser()];case 3:n.sent(),n.label=4;case 4:return[2]}})})},t.prototype.queue=function(e){return this.operations=this.operations.then(e,e),this.operations},Object.defineProperty(t.prototype,"assertedPersistence",{get:function(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager},enumerable:!1,configurable:!0}),t.prototype._logFramework=function(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Dy(this.config.clientPlatform,this._getFrameworks()))},t.prototype._getFrameworks=function(){return this.frameworks},t.prototype._getAdditionalHeaders=function(){var e;return w(this,void 0,void 0,function(){var n,r,i,s;return E(this,function(o){switch(o.label){case 0:return n=(s={},s["X-Client-Version"]=this.clientVersion,s),this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId),[4,(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader()];case 1:return r=o.sent(),r&&(n["X-Firebase-Client"]=r),[4,this._getAppCheckToken()];case 2:return i=o.sent(),i&&(n["X-Firebase-AppCheck"]=i),[2,n]}})})},t.prototype._getAppCheckToken=function(){var e;return w(this,void 0,void 0,function(){var n;return E(this,function(r){switch(r.label){case 0:return[4,(e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken()];case 1:return n=r.sent(),n!=null&&n.error&&P1("Error while retrieving App Check token: ".concat(n.error)),[2,n==null?void 0:n.token]}})})},t}();function Rh(t){return Re(t)}var tm=function(){function t(e){var n=this;this.auth=e,this.observer=null,this.addObserver=Bv(function(r){return n.observer=r})}return Object.defineProperty(t.prototype,"next",{get:function(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)},enumerable:!1,configurable:!0}),t}();/**
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
 */var Ly={loadJS:function(){return w(this,void 0,void 0,function(){return E(this,function(t){throw new Error("Unable to load external scripts")})})},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function oN(t){return Ly.loadJS(t)}function aN(){return Ly.recaptchaEnterpriseScript}var lN="recaptcha-enterprise",uN="NO_RECAPTCHA",cN=function(){function t(e){this.type=lN,this.auth=Rh(e)}return t.prototype.verify=function(e,n){return e===void 0&&(e="verify"),n===void 0&&(n=!1),w(this,void 0,void 0,function(){function r(o){return w(this,void 0,void 0,function(){var a=this;return E(this,function(l){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return[2,o._agentRecaptchaConfig.siteKey];if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return[2,o._tenantRecaptchaConfigs[o.tenantId].siteKey]}return[2,new Promise(function(u,d){return w(a,void 0,void 0,function(){return E(this,function(c){return U1(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(function(f){if(f.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{var m=new F1(f);return o.tenantId==null?o._agentRecaptchaConfig=m:o._tenantRecaptchaConfigs[o.tenantId]=m,u(m.siteKey)}}).catch(function(f){d(f)}),[2]})})})]})})}function i(o,a,l){var u=window.grecaptcha;qp(u)?u.enterprise.ready(function(){u.enterprise.execute(o,{action:e}).then(function(d){a(d)}).catch(function(){a(uN)})}):l(Error("No reCAPTCHA enterprise script loaded."))}var s=this;return E(this,function(o){return[2,new Promise(function(a,l){r(s.auth).then(function(u){if(!n&&qp(window.grecaptcha))i(u,a,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}var d=aN();d.length!==0&&(d+=u),oN(d).then(function(){i(u,a,l)}).catch(function(c){l(c)})}}).catch(function(u){l(u)})})]})})},t}();function nm(t,e,n,r){return r===void 0&&(r=!1),w(this,void 0,void 0,function(){var i,s,o;return E(this,function(a){switch(a.label){case 0:i=new cN(t),a.label=1;case 1:return a.trys.push([1,3,,5]),[4,i.verify(n)];case 2:return s=a.sent(),[3,5];case 3:return a.sent(),[4,i.verify(n,!0)];case 4:return s=a.sent(),[3,5];case 5:return o=te({},e),r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),[2,o]}})})}function rm(t,e,n,r){var i;return w(this,void 0,void 0,function(){var s,o=this;return E(this,function(a){switch(a.label){case 0:return!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")?[4,nm(t,e,n,n==="getOobCode")]:[3,2];case 1:return s=a.sent(),[2,r(t,s)];case 2:return[2,r(t,e).catch(function(l){return w(o,void 0,void 0,function(){var u;return E(this,function(d){switch(d.label){case 0:return l.code!=="auth/".concat("missing-recaptcha-token")?[3,2]:(console.log("".concat(n," is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.")),[4,nm(t,e,n,n==="getOobCode")]);case 1:return u=d.sent(),[2,r(t,u)];case 2:return[2,Promise.reject(l)]}})})})]}})})}/**
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
 */function dN(t,e){var n=nl(t,"auth");if(n.isInitialized()){var r=n.getImmediate(),i=n.getOptions();if(_a(i,e??{}))return r;it(r,"already-initialized")}var s=n.initialize({options:e});return s}function hN(t,e){var n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ft);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */var so=function(){function t(e,n){this.providerId=e,this.signInMethod=n}return t.prototype.toJSON=function(){return Jt("not implemented")},t.prototype._getIdTokenResponse=function(e){return Jt("not implemented")},t.prototype._linkToIdToken=function(e,n){return Jt("not implemented")},t.prototype._getReauthenticationResolver=function(e){return Jt("not implemented")},t}();function fN(t,e){return w(this,void 0,void 0,function(){return E(this,function(n){return[2,qn(t,"POST","/v1/accounts:signUp",e)]})})}/**
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
 */function pN(t,e){return w(this,void 0,void 0,function(){return E(this,function(n){return[2,Rr(t,"POST","/v1/accounts:signInWithPassword",Ht(t,e))]})})}/**
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
 */function mN(t,e){return w(this,void 0,void 0,function(){return E(this,function(n){return[2,Rr(t,"POST","/v1/accounts:signInWithEmailLink",Ht(t,e))]})})}function gN(t,e){return w(this,void 0,void 0,function(){return E(this,function(n){return[2,Rr(t,"POST","/v1/accounts:signInWithEmailLink",Ht(t,e))]})})}/**
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
 */(function(t){se(e,t);function e(n,r,i,s){s===void 0&&(s=null);var o=t.call(this,"password",i)||this;return o._email=n,o._password=r,o._tenantId=s,o}return e._fromEmailAndPassword=function(n,r){return new e(n,r,"password")},e._fromEmailAndCode=function(n,r,i){return i===void 0&&(i=null),new e(n,r,"emailLink",i)},e.prototype.toJSON=function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}},e.fromJSON=function(n){var r=typeof n=="string"?JSON.parse(n):n;if(r!=null&&r.email&&(r!=null&&r.password)){if(r.signInMethod==="password")return this._fromEmailAndPassword(r.email,r.password);if(r.signInMethod==="emailLink")return this._fromEmailAndCode(r.email,r.password,r.tenantId)}return null},e.prototype._getIdTokenResponse=function(n){return w(this,void 0,void 0,function(){var r;return E(this,function(i){switch(this.signInMethod){case"password":return r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},[2,rm(n,r,"signInWithPassword",pN)];case"emailLink":return[2,mN(n,{email:this._email,oobCode:this._password})];default:it(n,"internal-error")}return[2]})})},e.prototype._linkToIdToken=function(n,r){return w(this,void 0,void 0,function(){var i;return E(this,function(s){switch(this.signInMethod){case"password":return i={idToken:r,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},[2,rm(n,i,"signUpPassword",fN)];case"emailLink":return[2,gN(n,{idToken:r,email:this._email,oobCode:this._password})];default:it(n,"internal-error")}return[2]})})},e.prototype._getReauthenticationResolver=function(n){return this._getIdTokenResponse(n)},e})(so);/**
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
 */function en(t,e){return w(this,void 0,void 0,function(){return E(this,function(n){return[2,Rr(t,"POST","/v1/accounts:signInWithIdp",Ht(t,e))]})})}/**
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
 */var vN="http://localhost",mi=function(t){se(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.pendingToken=null,n}return e._fromParams=function(n){var r=new e(n.providerId,n.signInMethod);return n.idToken||n.accessToken?(n.idToken&&(r.idToken=n.idToken),n.accessToken&&(r.accessToken=n.accessToken),n.nonce&&!n.pendingToken&&(r.nonce=n.nonce),n.pendingToken&&(r.pendingToken=n.pendingToken)):n.oauthToken&&n.oauthTokenSecret?(r.accessToken=n.oauthToken,r.secret=n.oauthTokenSecret):it("argument-error"),r},e.prototype.toJSON=function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}},e.fromJSON=function(n){var r=typeof n=="string"?JSON.parse(n):n,i=r.providerId,s=r.signInMethod,o=Nh(r,["providerId","signInMethod"]);if(!i||!s)return null;var a=new e(i,s);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a},e.prototype._getIdTokenResponse=function(n){var r=this.buildRequest();return en(n,r)},e.prototype._linkToIdToken=function(n,r){var i=this.buildRequest();return i.idToken=r,en(n,i)},e.prototype._getReauthenticationResolver=function(n){var r=this.buildRequest();return r.autoCreate=!1,en(n,r)},e.prototype.buildRequest=function(){var n={requestUri:vN,returnSecureToken:!0};if(this.pendingToken)n.pendingToken=this.pendingToken;else{var r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),n.postBody=$s(r)}return n},e}(so);/**
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
 */var vu;function _N(t,e){return w(this,void 0,void 0,function(){return E(this,function(n){return[2,Rr(t,"POST","/v1/accounts:signInWithPhoneNumber",Ht(t,e))]})})}function yN(t,e){return w(this,void 0,void 0,function(){var n;return E(this,function(r){switch(r.label){case 0:return[4,Rr(t,"POST","/v1/accounts:signInWithPhoneNumber",Ht(t,e))];case 1:if(n=r.sent(),n.temporaryProof)throw Hi(t,"account-exists-with-different-credential",n);return[2,n]}})})}var wN=(vu={},vu.USER_NOT_FOUND="user-not-found",vu);function EN(t,e){return w(this,void 0,void 0,function(){var n;return E(this,function(r){return n=te(te({},e),{operation:"REAUTH"}),[2,Rr(t,"POST","/v1/accounts:signInWithPhoneNumber",Ht(t,n),wN)]})})}/**
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
 */(function(t){se(e,t);function e(n){var r=t.call(this,"phone","phone")||this;return r.params=n,r}return e._fromVerification=function(n,r){return new e({verificationId:n,verificationCode:r})},e._fromTokenResponse=function(n,r){return new e({phoneNumber:n,temporaryProof:r})},e.prototype._getIdTokenResponse=function(n){return _N(n,this._makeVerificationRequest())},e.prototype._linkToIdToken=function(n,r){return yN(n,te({idToken:r},this._makeVerificationRequest()))},e.prototype._getReauthenticationResolver=function(n){return EN(n,this._makeVerificationRequest())},e.prototype._makeVerificationRequest=function(){var n=this.params,r=n.temporaryProof,i=n.phoneNumber,s=n.verificationId,o=n.verificationCode;return r&&i?{temporaryProof:r,phoneNumber:i}:{sessionInfo:s,code:o}},e.prototype.toJSON=function(){var n={providerId:this.providerId};return this.params.phoneNumber&&(n.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(n.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(n.verificationCode=this.params.verificationCode),this.params.verificationId&&(n.verificationId=this.params.verificationId),n},e.fromJSON=function(n){typeof n=="string"&&(n=JSON.parse(n));var r=n,i=r.verificationId,s=r.verificationCode,o=r.phoneNumber,a=r.temporaryProof;return!s&&!i&&!o&&!a?null:new e({verificationId:i,verificationCode:s,phoneNumber:o,temporaryProof:a})},e})(so);/**
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
 */var bh=function(){function t(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}return t.prototype.setDefaultLanguage=function(e){this.defaultLanguageCode=e},t.prototype.setCustomParameters=function(e){return this.customParameters=e,this},t.prototype.getCustomParameters=function(){return this.customParameters},t}();/**
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
 */var Ii=function(t){se(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.scopes=[],n}return e.prototype.addScope=function(n){return this.scopes.includes(n)||this.scopes.push(n),this},e.prototype.getScopes=function(){return gt([],this.scopes,!0)},e}(bh);(function(t){se(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.credentialFromJSON=function(n){var r=typeof n=="string"?JSON.parse(n):n;return M("providerId"in r&&"signInMethod"in r,"argument-error"),mi._fromParams(r)},e.prototype.credential=function(n){return this._credential(te(te({},n),{nonce:n.rawNonce}))},e.prototype._credential=function(n){return M(n.idToken||n.accessToken,"argument-error"),mi._fromParams(te(te({},n),{providerId:this.providerId,signInMethod:this.providerId}))},e.credentialFromResult=function(n){return e.oauthCredentialFromTaggedObject(n)},e.credentialFromError=function(n){return e.oauthCredentialFromTaggedObject(n.customData||{})},e.oauthCredentialFromTaggedObject=function(n){var r=n._tokenResponse;if(!r)return null;var i=r,s=i.oauthIdToken,o=i.oauthAccessToken,a=i.oauthTokenSecret,l=i.pendingToken,u=i.nonce,d=i.providerId;if(!o&&!a&&!s&&!l||!d)return null;try{return new e(d)._credential({idToken:s,accessToken:o,nonce:u,pendingToken:l})}catch{return null}},e})(Ii);/**
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
 */(function(t){se(e,t);function e(){return t.call(this,"facebook.com")||this}return e.credential=function(n){return mi._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.FACEBOOK_SIGN_IN_METHOD,accessToken:n})},e.credentialFromResult=function(n){return e.credentialFromTaggedObject(n)},e.credentialFromError=function(n){return e.credentialFromTaggedObject(n.customData||{})},e.credentialFromTaggedObject=function(n){var r=n._tokenResponse;if(!r||!("oauthAccessToken"in r)||!r.oauthAccessToken)return null;try{return e.credential(r.oauthAccessToken)}catch{return null}},e.FACEBOOK_SIGN_IN_METHOD="facebook.com",e.PROVIDER_ID="facebook.com",e})(Ii);/**
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
 */(function(t){se(e,t);function e(){var n=t.call(this,"google.com")||this;return n.addScope("profile"),n}return e.credential=function(n,r){return mi._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.GOOGLE_SIGN_IN_METHOD,idToken:n,accessToken:r})},e.credentialFromResult=function(n){return e.credentialFromTaggedObject(n)},e.credentialFromError=function(n){return e.credentialFromTaggedObject(n.customData||{})},e.credentialFromTaggedObject=function(n){var r=n._tokenResponse;if(!r)return null;var i=r,s=i.oauthIdToken,o=i.oauthAccessToken;if(!s&&!o)return null;try{return e.credential(s,o)}catch{return null}},e.GOOGLE_SIGN_IN_METHOD="google.com",e.PROVIDER_ID="google.com",e})(Ii);/**
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
 */(function(t){se(e,t);function e(){return t.call(this,"github.com")||this}return e.credential=function(n){return mi._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.GITHUB_SIGN_IN_METHOD,accessToken:n})},e.credentialFromResult=function(n){return e.credentialFromTaggedObject(n)},e.credentialFromError=function(n){return e.credentialFromTaggedObject(n.customData||{})},e.credentialFromTaggedObject=function(n){var r=n._tokenResponse;if(!r||!("oauthAccessToken"in r)||!r.oauthAccessToken)return null;try{return e.credential(r.oauthAccessToken)}catch{return null}},e.GITHUB_SIGN_IN_METHOD="github.com",e.PROVIDER_ID="github.com",e})(Ii);/**
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
 */var SN="http://localhost",im=function(t){se(e,t);function e(n,r){var i=t.call(this,n,n)||this;return i.pendingToken=r,i}return e.prototype._getIdTokenResponse=function(n){var r=this.buildRequest();return en(n,r)},e.prototype._linkToIdToken=function(n,r){var i=this.buildRequest();return i.idToken=r,en(n,i)},e.prototype._getReauthenticationResolver=function(n){var r=this.buildRequest();return r.autoCreate=!1,en(n,r)},e.prototype.toJSON=function(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}},e.fromJSON=function(n){var r=typeof n=="string"?JSON.parse(n):n,i=r.providerId,s=r.signInMethod,o=r.pendingToken;return!i||!s||!o||i!==s?null:new e(i,o)},e._create=function(n,r){return new e(n,r)},e.prototype.buildRequest=function(){return{requestUri:SN,returnSecureToken:!0,pendingToken:this.pendingToken}},e}(so);/**
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
 */var CN="saml.";(function(t){se(e,t);function e(n){return M(n.startsWith(CN),"argument-error"),t.call(this,n)||this}return e.credentialFromResult=function(n){return e.samlCredentialFromTaggedObject(n)},e.credentialFromError=function(n){return e.samlCredentialFromTaggedObject(n.customData||{})},e.credentialFromJSON=function(n){var r=im.fromJSON(n);return M(r,"argument-error"),r},e.samlCredentialFromTaggedObject=function(n){var r=n._tokenResponse;if(!r)return null;var i=r,s=i.pendingToken,o=i.providerId;if(!s||!o)return null;try{return im._create(o,s)}catch{return null}},e})(bh);/**
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
 */(function(t){se(e,t);function e(){return t.call(this,"twitter.com")||this}return e.credential=function(n,r){return mi._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.TWITTER_SIGN_IN_METHOD,oauthToken:n,oauthTokenSecret:r})},e.credentialFromResult=function(n){return e.credentialFromTaggedObject(n)},e.credentialFromError=function(n){return e.credentialFromTaggedObject(n.customData||{})},e.credentialFromTaggedObject=function(n){var r=n._tokenResponse;if(!r)return null;var i=r,s=i.oauthAccessToken,o=i.oauthTokenSecret;if(!s||!o)return null;try{return e.credential(s,o)}catch{return null}},e.TWITTER_SIGN_IN_METHOD="twitter.com",e.PROVIDER_ID="twitter.com",e})(Ii);/**
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
 */var Ah=function(){function t(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}return t._fromIdTokenResponse=function(e,n,r,i){return i===void 0&&(i=!1),w(this,void 0,void 0,function(){var s,o,a;return E(this,function(l){switch(l.label){case 0:return[4,Ma._fromIdTokenResponse(e,r,i)];case 1:return s=l.sent(),o=sm(r),a=new t({user:s,providerId:o,_tokenResponse:r,operationType:n}),[2,a]}})})},t._forOperation=function(e,n,r){return w(this,void 0,void 0,function(){var i;return E(this,function(s){switch(s.label){case 0:return[4,e._updateTokensIfNecessary(r,!0)];case 1:return s.sent(),i=sm(r),[2,new t({user:e,providerId:i,_tokenResponse:r,operationType:n})]}})})},t}();function sm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */var IN=function(t){se(e,t);function e(n,r,i,s){var o=this,a;return o=t.call(this,r.code,r.message)||this,o.operationType=i,o.user=s,Object.setPrototypeOf(o,e.prototype),o.customData={appName:n.name,tenantId:(a=n.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:r.customData._serverResponse,operationType:i},o}return e._fromErrorAndOperation=function(n,r,i,s){return new e(n,r,i,s)},e}(ln);function My(t,e,n,r){var i=e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch(function(s){throw s.code==="auth/".concat("multi-factor-auth-required")?IN._fromErrorAndOperation(t,s,e,r):s})}function xN(t,e,n){return n===void 0&&(n=!1),w(this,void 0,void 0,function(){var r,i,s,o,a,l;return E(this,function(u){switch(u.label){case 0:return i=js,s=[t],a=(o=e)._linkToIdToken,l=[t.auth],[4,t.getIdToken()];case 1:return[4,i.apply(void 0,s.concat([a.apply(o,l.concat([u.sent()])),n]))];case 2:return r=u.sent(),[2,Ah._forOperation(t,"link",r)]}})})}/**
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
 */function kN(t,e,n){return n===void 0&&(n=!1),w(this,void 0,void 0,function(){var r,i,s,o,a,l;return E(this,function(u){switch(u.label){case 0:if(r=t.auth,qt(r.app))return[2,Promise.reject(cr(r))];i="reauthenticate",u.label=1;case 1:return u.trys.push([1,3,,4]),[4,js(t,My(r,i,e,t),n)];case 2:return s=u.sent(),M(s.idToken,r,"internal-error"),o=Ph(s.idToken),M(o,r,"internal-error"),a=o.sub,M(t.uid===a,r,"user-mismatch"),[2,Ah._forOperation(t,i,s)];case 3:throw l=u.sent(),(l==null?void 0:l.code)==="auth/".concat("user-not-found")&&it(r,"user-mismatch"),l;case 4:return[2]}})})}/**
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
 */function NN(t,e,n){return n===void 0&&(n=!1),w(this,void 0,void 0,function(){var r,i,s;return E(this,function(o){switch(o.label){case 0:return qt(t.app)?[2,Promise.reject(cr(t))]:(r="signIn",[4,My(t,r,e)]);case 1:return i=o.sent(),[4,Ah._fromIdTokenResponse(t,r,i)];case 2:return s=o.sent(),n?[3,4]:[4,t._updateCurrentUser(s.user)];case 3:o.sent(),o.label=4;case 4:return[2,s]}})})}/**
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
 */var jy=function(){function t(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}return t._fromServerResponse=function(e,n){return"phoneInfo"in n?TN._fromServerResponse(e,n):"totpInfo"in n?PN._fromServerResponse(e,n):it(e,"internal-error")},t}(),TN=function(t){se(e,t);function e(n){var r=t.call(this,"phone",n)||this;return r.phoneNumber=n.phoneInfo,r}return e._fromServerResponse=function(n,r){return new e(r)},e}(jy),PN=function(t){se(e,t);function e(n){return t.call(this,"totp",n)||this}return e._fromServerResponse=function(n,r){return new e(r)},e}(jy),Oh=function(){function t(e,n,r){r===void 0&&(r={}),this.isNewUser=e,this.providerId=n,this.profile=r}return t}(),Fy=function(t){se(e,t);function e(n,r,i,s){var o=t.call(this,n,r,i)||this;return o.username=s,o}return e}(Oh);(function(t){se(e,t);function e(n,r){return t.call(this,n,"facebook.com",r)||this}return e})(Oh);(function(t){se(e,t);function e(n,r){return t.call(this,n,"github.com",r,typeof(r==null?void 0:r.login)=="string"?r==null?void 0:r.login:null)||this}return e})(Fy);(function(t){se(e,t);function e(n,r){return t.call(this,n,"google.com",r)||this}return e})(Oh);(function(t){se(e,t);function e(n,r,i){return t.call(this,n,"twitter.com",r,i)||this}return e})(Fy);var om="@firebase/auth",am="1.7.4";/**
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
 */var RN=function(){function t(e){this.auth=e,this.internalListeners=new Map}return t.prototype.getUid=function(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null},t.prototype.getToken=function(e){return w(this,void 0,void 0,function(){var n;return E(this,function(r){switch(r.label){case 0:return this.assertAuthConfigured(),[4,this.auth._initializationPromise];case 1:return r.sent(),this.auth.currentUser?[4,this.auth.currentUser.getIdToken(e)]:[2,null];case 2:return n=r.sent(),[2,{accessToken:n}]}})})},t.prototype.addAuthTokenListener=function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var n=this.auth.onIdTokenChanged(function(r){e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}},t.prototype.removeAuthTokenListener=function(e){this.assertAuthConfigured();var n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())},t.prototype.assertAuthConfigured=function(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")},t.prototype.updateProactiveRefresh=function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()},t}();/**
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
 */function bN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function AN(t){Fn(new Ot("auth",function(e,n){var r=n.options,i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),a=i.options,l=a.apiKey,u=a.authDomain;M(l&&!l.includes(":"),"invalid-api-key",{appName:i.name});var d={apiKey:l,authDomain:u,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Dy(t)},c=new sN(i,s,o,d);return hN(c,r),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(function(e,n,r){var i=e.getProvider("auth-internal");i.initialize()})),Fn(new Ot("auth-internal",function(e){var n=Rh(e.getProvider("auth").getImmediate());return function(r){return new RN(r)}(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rt(om,am,bN(t)),Rt(om,am,"esm5")}/**
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
 */var Uy=function(){function t(e,n){this.storageRetriever=e,this.type=n}return t.prototype._isAvailable=function(){try{return this.storage?(this.storage.setItem(Oa,"1"),this.storage.removeItem(Oa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}},t.prototype._set=function(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()},t.prototype._get=function(e){var n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)},t.prototype._remove=function(e){return this.storage.removeItem(e),Promise.resolve()},Object.defineProperty(t.prototype,"storage",{get:function(){return this.storageRetriever()},enumerable:!1,configurable:!0}),t}();/**
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
 */function ON(){var t=Ue();return Ry(t)||xl(t)}var DN=1e3,LN=10,MN=function(t){se(e,t);function e(){var n=t.call(this,function(){return window.localStorage},"LOCAL")||this;return n.boundEventHandler=function(r,i){return n.onStorageEvent(r,i)},n.listeners={},n.localCache={},n.pollTimer=null,n.safariLocalStorageNotSynced=ON()&&eN(),n.fallbackToPolling=Z1(),n._shouldAllowMigration=!0,n}return e.prototype.forAllChangedKeys=function(n){for(var r=0,i=Object.keys(this.listeners);r<i.length;r++){var s=i[r],o=this.storage.getItem(s),a=this.localCache[s];o!==a&&n(s,a,o)}},e.prototype.onStorageEvent=function(n,r){var i=this;if(r===void 0&&(r=!1),!n.key){this.forAllChangedKeys(function(u,d,c){i.notifyListeners(u,c)});return}var s=n.key;if(r?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var o=this.storage.getItem(s);if(n.newValue!==o)n.newValue!==null?this.storage.setItem(s,n.newValue):this.storage.removeItem(s);else if(this.localCache[s]===n.newValue&&!r)return}var a=function(){var u=i.storage.getItem(s);!r&&i.localCache[s]===u||i.notifyListeners(s,u)},l=this.storage.getItem(s);X1()&&l!==n.newValue&&n.newValue!==n.oldValue?setTimeout(a,LN):a()},e.prototype.notifyListeners=function(n,r){this.localCache[n]=r;var i=this.listeners[n];if(i)for(var s=0,o=Array.from(i);s<o.length;s++){var a=o[s];a(r&&JSON.parse(r))}},e.prototype.startPolling=function(){var n=this;this.stopPolling(),this.pollTimer=setInterval(function(){n.forAllChangedKeys(function(r,i,s){n.onStorageEvent(new StorageEvent("storage",{key:r,oldValue:i,newValue:s}),!0)})},DN)},e.prototype.stopPolling=function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)},e.prototype.attachListener=function(){window.addEventListener("storage",this.boundEventHandler)},e.prototype.detachListener=function(){window.removeEventListener("storage",this.boundEventHandler)},e.prototype._addListener=function(n,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[n]||(this.listeners[n]=new Set,this.localCache[n]=this.storage.getItem(n)),this.listeners[n].add(r)},e.prototype._removeListener=function(n,r){this.listeners[n]&&(this.listeners[n].delete(r),this.listeners[n].size===0&&delete this.listeners[n]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())},e.prototype._set=function(n,r){return w(this,void 0,void 0,function(){return E(this,function(i){switch(i.label){case 0:return[4,t.prototype._set.call(this,n,r)];case 1:return i.sent(),this.localCache[n]=JSON.stringify(r),[2]}})})},e.prototype._get=function(n){return w(this,void 0,void 0,function(){var r;return E(this,function(i){switch(i.label){case 0:return[4,t.prototype._get.call(this,n)];case 1:return r=i.sent(),this.localCache[n]=JSON.stringify(r),[2,r]}})})},e.prototype._remove=function(n){return w(this,void 0,void 0,function(){return E(this,function(r){switch(r.label){case 0:return[4,t.prototype._remove.call(this,n)];case 1:return r.sent(),delete this.localCache[n],[2]}})})},e.type="LOCAL",e}(Uy),jN=MN;/**
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
 */var FN=function(t){se(e,t);function e(){return t.call(this,function(){return window.sessionStorage},"SESSION")||this}return e.prototype._addListener=function(n,r){},e.prototype._removeListener=function(n,r){},e.type="SESSION",e}(Uy),UN=FN;/**
 * @license
 * Copyright 2021 Google LLC
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
 */function BN(t,e){return e?Ft(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */var Dh=function(t){se(e,t);function e(n){var r=t.call(this,"custom","custom")||this;return r.params=n,r}return e.prototype._getIdTokenResponse=function(n){return en(n,this._buildIdpRequest())},e.prototype._linkToIdToken=function(n,r){return en(n,this._buildIdpRequest(r))},e.prototype._getReauthenticationResolver=function(n){return en(n,this._buildIdpRequest())},e.prototype._buildIdpRequest=function(n){var r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return n&&(r.idToken=n),r},e}(so);function zN(t){return NN(t.auth,new Dh(t),t.bypassAuthState)}function WN(t){var e=t.auth,n=t.user;return M(n,e,"internal-error"),kN(n,new Dh(t),t.bypassAuthState)}function VN(t){return w(this,void 0,void 0,function(){var e,n;return E(this,function(r){return e=t.auth,n=t.user,M(n,e,"internal-error"),[2,xN(n,new Dh(t),t.bypassAuthState)]})})}/**
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
 */var HN=function(){function t(e,n,r,i,s){s===void 0&&(s=!1),this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}return t.prototype.execute=function(){var e=this;return new Promise(function(n,r){return w(e,void 0,void 0,function(){var i,s;return E(this,function(o){switch(o.label){case 0:this.pendingPromise={resolve:n,reject:r},o.label=1;case 1:return o.trys.push([1,4,,5]),i=this,[4,this.resolver._initialize(this.auth)];case 2:return i.eventManager=o.sent(),[4,this.onExecution()];case 3:return o.sent(),this.eventManager.registerConsumer(this),[3,5];case 4:return s=o.sent(),this.reject(s),[3,5];case 5:return[2]}})})})},t.prototype.onAuthEvent=function(e){return w(this,void 0,void 0,function(){var n,r,i,s,o,a,l,u,d;return E(this,function(c){switch(c.label){case 0:if(n=e.urlResponse,r=e.sessionId,i=e.postBody,s=e.tenantId,o=e.error,a=e.type,o)return this.reject(o),[2];l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState},c.label=1;case 1:return c.trys.push([1,3,,4]),u=this.resolve,[4,this.getIdpTask(a)(l)];case 2:return u.apply(this,[c.sent()]),[3,4];case 3:return d=c.sent(),this.reject(d),[3,4];case 4:return[2]}})})},t.prototype.onError=function(e){this.reject(e)},t.prototype.getIdpTask=function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zN;case"linkViaPopup":case"linkViaRedirect":return VN;case"reauthViaPopup":case"reauthViaRedirect":return WN;default:it(this.auth,"internal-error")}},t.prototype.resolve=function(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()},t.prototype.reject=function(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()},t.prototype.unregisterAndCleanUp=function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()},t}();/**
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
 */var $N="pendingRedirect",os=new Map,GN=function(t){se(e,t);function e(n,r,i){i===void 0&&(i=!1);var s=t.call(this,n,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,i)||this;return s.eventId=null,s}return e.prototype.execute=function(){return w(this,void 0,void 0,function(){var n,r,i,s,o;return E(this,function(a){switch(a.label){case 0:if(n=os.get(this.auth._key()),n)return[3,8];a.label=1;case 1:return a.trys.push([1,6,,7]),[4,KN(this.resolver,this.auth)];case 2:return r=a.sent(),r?[4,t.prototype.execute.call(this)]:[3,4];case 3:return s=a.sent(),[3,5];case 4:s=null,a.label=5;case 5:return i=s,n=function(){return Promise.resolve(i)},[3,7];case 6:return o=a.sent(),n=function(){return Promise.reject(o)},[3,7];case 7:os.set(this.auth._key(),n),a.label=8;case 8:return this.bypassAuthState||os.set(this.auth._key(),function(){return Promise.resolve(null)}),[2,n()]}})})},e.prototype.onAuthEvent=function(n){return w(this,void 0,void 0,function(){var r;return E(this,function(i){switch(i.label){case 0:return n.type==="signInViaRedirect"?[2,t.prototype.onAuthEvent.call(this,n)]:n.type==="unknown"?(this.resolve(null),[2]):n.eventId?[4,this.auth._redirectUserForId(n.eventId)]:[3,2];case 1:if(r=i.sent(),r)return this.user=r,[2,t.prototype.onAuthEvent.call(this,n)];this.resolve(null),i.label=2;case 2:return[2]}})})},e.prototype.onExecution=function(){return w(this,void 0,void 0,function(){return E(this,function(n){return[2]})})},e.prototype.cleanUp=function(){},e}(HN);function KN(t,e){return w(this,void 0,void 0,function(){var n,r,i;return E(this,function(s){switch(s.label){case 0:return n=JN(e),r=YN(t),[4,r._isAvailable()];case 1:return s.sent()?[4,r._get(n)]:[2,!1];case 2:return i=s.sent()==="true",[4,r._remove(n)];case 3:return s.sent(),[2,i]}})})}function QN(){os.clear()}function qN(t,e){os.set(t._key(),e)}function YN(t){return Ft(t._redirectPersistence)}function JN(t){return ss($N,t.config.apiKey,t.name)}function XN(t,e,n){return n===void 0&&(n=!1),w(this,void 0,void 0,function(){var r,i,s,o;return E(this,function(a){switch(a.label){case 0:return qt(t.app)?[2,Promise.reject(cr(t))]:(r=Rh(t),i=BN(r,e),s=new GN(r,i,n),[4,s.execute()]);case 1:return o=a.sent(),o&&!n?(delete o.user._redirectEventId,[4,r._persistUserIfCurrent(o.user)]):[3,4];case 2:return a.sent(),[4,r._setRedirectUser(null,e)];case 3:a.sent(),a.label=4;case 4:return[2,o]}})})}/**
 * @license
 * Copyright 2021 Google LLC
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
 */var ZN="__/auth/handler",eT="emulator/auth/handler",tT=encodeURIComponent("fac");function nT(t,e,n,r,i,s){return w(this,void 0,void 0,function(){var o,a,l,u,y,d,c,f,m,_,y,C,g;return E(this,function(p){switch(p.label){case 0:if(M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key"),o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:xr,eventId:i},e instanceof bh)for(e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ga(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters())),a=0,l=Object.entries(s||{});a<l.length;a++)u=l[a],y=u[0],d=u[1],o[y]=d;for(e instanceof Ii&&(c=e.getScopes().filter(function(v){return v!==""}),c.length>0&&(o.scopes=c.join(","))),t.tenantId&&(o.tid=t.tenantId),f=o,m=0,_=Object.keys(f);m<_.length;m++)y=_[m],f[y]===void 0&&delete f[y];return[4,t._getAppCheckToken()];case 1:return C=p.sent(),g=C?"#".concat(tT,"=").concat(encodeURIComponent(C)):"",[2,"".concat(rT(t),"?").concat($s(f).slice(1)).concat(g)]}})})}function rT(t){var e=t.config;return e.emulator?Iy(e,eT):"https://".concat(e.authDomain,"/").concat(ZN)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function Er(){return window}/**
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
 */function iT(t,e){return e===void 0&&(e={}),w(this,void 0,void 0,function(){return E(this,function(n){return[2,qn(t,"GET","/v1/projects",e)]})})}/**
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
 */var sT=2e3;function oT(t,e,n){var r;return w(this,void 0,void 0,function(){var i,s,o;return E(this,function(a){switch(a.label){case 0:return i=Er().BuildInfo,Hn(e.sessionId,"AuthEvent did not contain a session ID"),[4,dT(e.sessionId)];case 1:return s=a.sent(),o={},xl()?o.ibi=i.packageName:io()?o.apn=i.packageName:it(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,[2,nT(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)]}})})}function aT(t){return w(this,void 0,void 0,function(){var e,n;return E(this,function(r){switch(r.label){case 0:return e=Er().BuildInfo,n={},xl()?n.iosBundleId=e.packageName:io()?n.androidPackageName=e.packageName:it(t,"operation-not-supported-in-this-environment"),[4,iT(t,n)];case 1:return r.sent(),[2]}})})}function lT(t){var e=Er().cordova;return new Promise(function(n){e.plugins.browsertab.isAvailable(function(r){var i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,J1()?"_blank":"_system","location=yes"),n(i)})})}function uT(t,e,n){return w(this,void 0,void 0,function(){var r,i;return E(this,function(s){switch(s.label){case 0:r=Er().cordova,i=function(){},s.label=1;case 1:return s.trys.push([1,,3,4]),[4,new Promise(function(o,a){var l=null;function u(){var f;o();var m=(f=r.plugins.browsertab)===null||f===void 0?void 0:f.close;typeof m=="function"&&m(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function d(){l||(l=window.setTimeout(function(){a(Pr(t,"redirect-cancelled-by-user"))},sT))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&d()}e.addPassiveListener(u),document.addEventListener("resume",d,!1),io()&&document.addEventListener("visibilitychange",c,!1),i=function(){e.removePassiveListener(u),document.removeEventListener("resume",d,!1),document.removeEventListener("visibilitychange",c,!1),l&&window.clearTimeout(l)}})];case 2:return s.sent(),[3,4];case 3:return i(),[7];case 4:return[2]}})})}function cT(t){var e,n,r,i,s,o,a,l,u,d,c=Er();M(typeof((e=c==null?void 0:c.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),M(typeof((n=c==null?void 0:c.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),M(typeof((s=(i=(r=c==null?void 0:c.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),M(typeof((l=(a=(o=c==null?void 0:c.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),M(typeof((d=(u=c==null?void 0:c.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||d===void 0?void 0:d.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}function dT(t){return w(this,void 0,void 0,function(){var e,n,r;return E(this,function(i){switch(i.label){case 0:return e=hT(t),[4,crypto.subtle.digest("SHA-256",e)];case 1:return n=i.sent(),r=Array.from(new Uint8Array(n)),[2,r.map(function(s){return s.toString(16).padStart(2,"0")}).join("")]}})})}function hT(t){if(Hn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);for(var e=new ArrayBuffer(t.length),n=new Uint8Array(e),r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */var fT=10*60*1e3,pT=function(){function t(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return t.prototype.registerConsumer=function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)},t.prototype.unregisterConsumer=function(e){this.consumers.delete(e)},t.prototype.onEvent=function(e){var n=this;if(this.hasEventBeenHandled(e))return!1;var r=!1;return this.consumers.forEach(function(i){n.isEventForConsumer(e,i)&&(r=!0,n.sendToConsumer(e,i),n.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mT(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r},t.prototype.sendToConsumer=function(e,n){var r;if(e.error&&!By(e)){var i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Pr(this.auth,i))}else n.onAuthEvent(e)},t.prototype.isEventForConsumer=function(e,n){var r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r},t.prototype.hasEventBeenHandled=function(e){return Date.now()-this.lastProcessedEventTime>=fT&&this.cachedEventUids.clear(),this.cachedEventUids.has(lm(e))},t.prototype.saveEventToCache=function(e){this.cachedEventUids.add(lm(e)),this.lastProcessedEventTime=Date.now()},t}();function lm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(function(e){return e}).join("-")}function By(t){var e=t.type,n=t.error;return e==="unknown"&&(n==null?void 0:n.code)==="auth/".concat("no-auth-event")}function mT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return By(t);default:return!1}}/**
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
 */var gT=20,vT=function(t){se(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.passiveListeners=new Set,n.initPromise=new Promise(function(r){n.resolveInialized=r}),n}return e.prototype.addPassiveListener=function(n){this.passiveListeners.add(n)},e.prototype.removePassiveListener=function(n){this.passiveListeners.delete(n)},e.prototype.resetRedirect=function(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1},e.prototype.onEvent=function(n){return this.resolveInialized(),this.passiveListeners.forEach(function(r){return r(n)}),t.prototype.onEvent.call(this,n)},e.prototype.initialized=function(){return w(this,void 0,void 0,function(){return E(this,function(n){switch(n.label){case 0:return[4,this.initPromise];case 1:return n.sent(),[2]}})})},e}(pT);function _T(t,e,n){return n===void 0&&(n=null),{type:e,eventId:n,urlResponse:null,sessionId:ET(),postBody:null,tenantId:t.tenantId,error:Pr(t,"no-auth-event")}}function yT(t,e){return Bc()._set(zc(t),e)}function um(t){return w(this,void 0,void 0,function(){var e;return E(this,function(n){switch(n.label){case 0:return[4,Bc()._get(zc(t))];case 1:return e=n.sent(),e?[4,Bc()._remove(zc(t))]:[3,3];case 2:n.sent(),n.label=3;case 3:return[2,e]}})})}function wT(t,e){var n,r,i=CT(e);if(i.includes("/__/auth/callback")){var s=Wo(i),o=s.firebaseError?ST(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?Pr(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function ET(){for(var t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",n=0;n<gT;n++){var r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Bc(){return Ft(jN)}function zc(t){return ss("authEvent",t.config.apiKey,t.name)}function ST(t){try{return JSON.parse(t)}catch{return null}}function CT(t){var e=Wo(t),n=e.link?decodeURIComponent(e.link):void 0,r=Wo(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0,s=Wo(i).link;return s||i||r||n||t}function Wo(t){if(!(t!=null&&t.includes("?")))return{};var e=t.split("?");e[0];var n=e.slice(1);return QE(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
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
 */var IT=500,xT=function(){function t(){this._redirectPersistence=UN,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=XN,this._overrideRedirectResult=qN}return t.prototype._initialize=function(e){return w(this,void 0,void 0,function(){var n,r;return E(this,function(i){return n=e._key(),r=this.eventManagers.get(n),r||(r=new vT(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),[2,r]})})},t.prototype._openPopup=function(e){it(e,"operation-not-supported-in-this-environment")},t.prototype._openRedirect=function(e,n,r,i){return w(this,void 0,void 0,function(){var s,o,a,l;return E(this,function(u){switch(u.label){case 0:return cT(e),[4,this._initialize(e)];case 1:return s=u.sent(),[4,s.initialized()];case 2:return u.sent(),s.resetRedirect(),QN(),[4,this._originValidation(e)];case 3:return u.sent(),o=_T(e,r,i),[4,yT(e,o)];case 4:return u.sent(),[4,oT(e,o,n)];case 5:return a=u.sent(),[4,lT(a)];case 6:return l=u.sent(),[2,uT(e,s,l)]}})})},t.prototype._isIframeWebStorageSupported=function(e,n){throw new Error("Method not implemented.")},t.prototype._originValidation=function(e){var n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=aT(e)),this.originValidationPromises[n]},t.prototype.attachCallbackListeners=function(e,n){var r=this,i=Er(),s=i.universalLinks,o=i.handleOpenURL,a=i.BuildInfo,l=setTimeout(function(){return w(r,void 0,void 0,function(){return E(this,function(f){switch(f.label){case 0:return[4,um(e)];case 1:return f.sent(),n.onEvent(cm()),[2]}})})},IT),u=function(f){return w(r,void 0,void 0,function(){var m,_;return E(this,function(y){switch(y.label){case 0:return clearTimeout(l),[4,um(e)];case 1:return m=y.sent(),_=null,m&&(f!=null&&f.url)&&(_=wT(m,f.url)),n.onEvent(_||cm()),[2]}})})};typeof s<"u"&&typeof s.subscribe=="function"&&s.subscribe(null,u);var d=o,c="".concat(a.packageName.toLowerCase(),"://");Er().handleOpenURL=function(f){return w(r,void 0,void 0,function(){return E(this,function(m){if(f.toLowerCase().startsWith(c)&&u({url:f}),typeof d=="function")try{d(f)}catch(_){console.error(_)}return[2]})})}},t}(),kT=xT;function cm(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Pr("no-auth-event")}}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function NT(t){t===void 0&&(t=Kv());var e=nl(t,"auth");return e.isInitialized()?e.getImmediate():dN(t,{persistence:N1,popupRedirectResolver:kT})}AN("Cordova");const TT={apiKey:"AIzaSyBbkWAxTWNTDHDfVqBbXOW0_8UtbhGAgzE",authDomain:"hostel-aab47.firebaseapp.com",projectId:"hostel-aab47",storageBucket:"hostel-aab47.appspot.com",messagingSenderId:"183580222805",appId:"1:183580222805:web:bbba1193174606891afbdc",measurementId:"G-Y87BHYEC41"};var PT=rl.initializeApp(TT);rl.firestore;NT();const yt=PT.database().ref();/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fs(){return Fs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fs.apply(this,arguments)}var wn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(wn||(wn={}));const dm="popstate";function RT(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Wc("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ja(i)}return AT(e,n,null,t)}function pe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function zy(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function bT(){return Math.random().toString(36).substr(2,8)}function hm(t,e){return{usr:t.state,key:t.key,idx:e}}function Wc(t,e,n,r){return n===void 0&&(n=null),Fs({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?xi(e):e,{state:n,key:e&&e.key||r||bT()})}function ja(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function xi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function AT(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=wn.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(Fs({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function c(){a=wn.Pop;let C=d(),g=C==null?null:C-u;u=C,l&&l({action:a,location:y.location,delta:g})}function f(C,g){a=wn.Push;let p=Wc(y.location,C,g);u=d()+1;let v=hm(p,u),S=y.createHref(p);try{o.pushState(v,"",S)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;i.location.assign(S)}s&&l&&l({action:a,location:y.location,delta:1})}function m(C,g){a=wn.Replace;let p=Wc(y.location,C,g);u=d();let v=hm(p,u),S=y.createHref(p);o.replaceState(v,"",S),s&&l&&l({action:a,location:y.location,delta:0})}function _(C){let g=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof C=="string"?C:ja(C);return p=p.replace(/ $/,"%20"),pe(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let y={get action(){return a},get location(){return t(i,o)},listen(C){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(dm,c),l=C,()=>{i.removeEventListener(dm,c),l=null}},createHref(C){return e(i,C)},createURL:_,encodeLocation(C){let g=_(C);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:m,go(C){return o.go(C)}};return y}var fm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(fm||(fm={}));function OT(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?xi(e):e,i=Lh(r.pathname||"/",n);if(i==null)return null;let s=Wy(t);DT(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let l=GT(i);o=VT(s[a],l)}return o}function Wy(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(pe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=On([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(pe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Wy(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:zT(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Vy(s.path))i(s,o,l)}),e}function Vy(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Vy(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function DT(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:WT(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const LT=/^:[\w-]+$/,MT=3,jT=2,FT=1,UT=10,BT=-2,pm=t=>t==="*";function zT(t,e){let n=t.split("/"),r=n.length;return n.some(pm)&&(r+=BT),e&&(r+=jT),n.filter(i=>!pm(i)).reduce((i,s)=>i+(LT.test(s)?MT:s===""?FT:UT),r)}function WT(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function VT(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",d=HT({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let c=a.route;s.push({params:r,pathname:On([i,d.pathname]),pathnameBase:YT(On([i,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(i=On([i,d.pathnameBase]))}return s}function HT(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=$T(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,c)=>{let{paramName:f,isOptional:m}=d;if(f==="*"){let y=a[c]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const _=a[c];return m&&!_?u[f]=void 0:u[f]=(_||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function $T(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),zy(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function GT(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return zy(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Lh(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function KT(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?xi(t):t;return{pathname:n?n.startsWith("/")?n:QT(n,e):e,search:JT(r),hash:XT(i)}}function QT(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function _u(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function qT(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Hy(t,e){let n=qT(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function $y(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=xi(t):(i=Fs({},t),pe(!i.pathname||!i.pathname.includes("?"),_u("?","pathname","search",i)),pe(!i.pathname||!i.pathname.includes("#"),_u("#","pathname","hash",i)),pe(!i.search||!i.search.includes("#"),_u("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let c=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),c-=1;i.pathname=f.join("/")}a=c>=0?e[c]:"/"}let l=KT(i,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const On=t=>t.join("/").replace(/\/\/+/g,"/"),YT=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),JT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,XT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function ZT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Gy=["post","put","patch","delete"];new Set(Gy);const eP=["get",...Gy];new Set(eP);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Us(){return Us=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Us.apply(this,arguments)}const Mh=k.createContext(null),tP=k.createContext(null),br=k.createContext(null),kl=k.createContext(null),Yn=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Ky=k.createContext(null);function nP(t,e){let{relative:n}=e===void 0?{}:e;oo()||pe(!1);let{basename:r,navigator:i}=k.useContext(br),{hash:s,pathname:o,search:a}=qy(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:On([r,o])),i.createHref({pathname:l,search:a,hash:s})}function oo(){return k.useContext(kl)!=null}function Nl(){return oo()||pe(!1),k.useContext(kl).location}function Qy(t){k.useContext(br).static||k.useLayoutEffect(t)}function rP(){let{isDataRoute:t}=k.useContext(Yn);return t?_P():iP()}function iP(){oo()||pe(!1);let t=k.useContext(Mh),{basename:e,future:n,navigator:r}=k.useContext(br),{matches:i}=k.useContext(Yn),{pathname:s}=Nl(),o=JSON.stringify(Hy(i,n.v7_relativeSplatPath)),a=k.useRef(!1);return Qy(()=>{a.current=!0}),k.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let c=$y(u,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:On([e,c.pathname])),(d.replace?r.replace:r.push)(c,d.state,d)},[e,r,o,s,t])}const sP=k.createContext(null);function oP(t){let e=k.useContext(Yn).outlet;return e&&k.createElement(sP.Provider,{value:t},e)}function qy(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=k.useContext(br),{matches:i}=k.useContext(Yn),{pathname:s}=Nl(),o=JSON.stringify(Hy(i,r.v7_relativeSplatPath));return k.useMemo(()=>$y(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function aP(t,e){return lP(t,e)}function lP(t,e,n,r){oo()||pe(!1);let{navigator:i}=k.useContext(br),{matches:s}=k.useContext(Yn),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Nl(),d;if(e){var c;let C=typeof e=="string"?xi(e):e;l==="/"||(c=C.pathname)!=null&&c.startsWith(l)||pe(!1),d=C}else d=u;let f=d.pathname||"/",m=f;if(l!=="/"){let C=l.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(C.length).join("/")}let _=OT(t,{pathname:m}),y=fP(_&&_.map(C=>Object.assign({},C,{params:Object.assign({},a,C.params),pathname:On([l,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?l:On([l,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),s,n,r);return e&&y?k.createElement(kl.Provider,{value:{location:Us({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:wn.Pop}},y):y}function uP(){let t=vP(),e=ZT(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),n?k.createElement("pre",{style:i},n):null,null)}const cP=k.createElement(uP,null);class dP extends k.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?k.createElement(Yn.Provider,{value:this.props.routeContext},k.createElement(Ky.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function hP(t){let{routeContext:e,match:n,children:r}=t,i=k.useContext(Mh);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(Yn.Provider,{value:e},r)}function fP(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id])!==void 0);d>=0||pe(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let c=o[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=d),c.route.id){let{loaderData:f,errors:m}=n,_=c.route.loader&&f[c.route.id]===void 0&&(!m||m[c.route.id]===void 0);if(c.route.lazy||_){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,c,f)=>{let m,_=!1,y=null,C=null;n&&(m=a&&c.route.id?a[c.route.id]:void 0,y=c.route.errorElement||cP,l&&(u<0&&f===0?(_=!0,C=null):u===f&&(_=!0,C=c.route.hydrateFallbackElement||null)));let g=e.concat(o.slice(0,f+1)),p=()=>{let v;return m?v=y:_?v=C:c.route.Component?v=k.createElement(c.route.Component,null):c.route.element?v=c.route.element:v=d,k.createElement(hP,{match:c,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:v})};return n&&(c.route.ErrorBoundary||c.route.errorElement||f===0)?k.createElement(dP,{location:n.location,revalidation:n.revalidation,component:y,error:m,children:p(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):p()},null)}var Yy=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Yy||{}),Fa=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Fa||{});function pP(t){let e=k.useContext(Mh);return e||pe(!1),e}function mP(t){let e=k.useContext(tP);return e||pe(!1),e}function gP(t){let e=k.useContext(Yn);return e||pe(!1),e}function Jy(t){let e=gP(),n=e.matches[e.matches.length-1];return n.route.id||pe(!1),n.route.id}function vP(){var t;let e=k.useContext(Ky),n=mP(Fa.UseRouteError),r=Jy(Fa.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function _P(){let{router:t}=pP(Yy.UseNavigateStable),e=Jy(Fa.UseNavigateStable),n=k.useRef(!1);return Qy(()=>{n.current=!0}),k.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Us({fromRouteId:e},s)))},[t,e])}function yP(t){return oP(t.context)}function dn(t){pe(!1)}function wP(t){let{basename:e="/",children:n=null,location:r,navigationType:i=wn.Pop,navigator:s,static:o=!1,future:a}=t;oo()&&pe(!1);let l=e.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:l,navigator:s,static:o,future:Us({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=xi(r));let{pathname:d="/",search:c="",hash:f="",state:m=null,key:_="default"}=r,y=k.useMemo(()=>{let C=Lh(d,l);return C==null?null:{location:{pathname:C,search:c,hash:f,state:m,key:_},navigationType:i}},[l,d,c,f,m,_,i]);return y==null?null:k.createElement(br.Provider,{value:u},k.createElement(kl.Provider,{children:n,value:y}))}function EP(t){let{children:e,location:n}=t;return aP(Vc(e),n)}new Promise(()=>{});function Vc(t,e){e===void 0&&(e=[]);let n=[];return k.Children.forEach(t,(r,i)=>{if(!k.isValidElement(r))return;let s=[...e,i];if(r.type===k.Fragment){n.push.apply(n,Vc(r.props.children,s));return}r.type!==dn&&pe(!1),!r.props.index||!r.props.children||pe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Vc(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hc(){return Hc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Hc.apply(this,arguments)}function SP(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function CP(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function IP(t,e){return t.button===0&&(!e||e==="_self")&&!CP(t)}const xP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],kP="6";try{window.__reactRouterVersion=kP}catch{}const NP="startTransition",mm=g0[NP];function TP(t){let{basename:e,children:n,future:r,window:i}=t,s=k.useRef();s.current==null&&(s.current=RT({window:i,v5Compat:!0}));let o=s.current,[a,l]=k.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=k.useCallback(c=>{u&&mm?mm(()=>l(c)):l(c)},[l,u]);return k.useLayoutEffect(()=>o.listen(d),[o,d]),k.createElement(wP,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const PP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",RP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,at=k.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:d,unstable_viewTransition:c}=e,f=SP(e,xP),{basename:m}=k.useContext(br),_,y=!1;if(typeof u=="string"&&RP.test(u)&&(_=u,PP))try{let v=new URL(window.location.href),S=u.startsWith("//")?new URL(v.protocol+u):new URL(u),N=Lh(S.pathname,m);S.origin===v.origin&&N!=null?u=N+S.search+S.hash:y=!0}catch{}let C=nP(u,{relative:i}),g=bP(u,{replace:o,state:a,target:l,preventScrollReset:d,relative:i,unstable_viewTransition:c});function p(v){r&&r(v),v.defaultPrevented||g(v)}return k.createElement("a",Hc({},f,{href:_||C,onClick:y||s?r:p,ref:n,target:l}))});var gm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(gm||(gm={}));var vm;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(vm||(vm={}));function bP(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=rP(),u=Nl(),d=qy(t,{relative:o});return k.useCallback(c=>{if(IP(c,n)){c.preventDefault();let f=r!==void 0?r:ja(u)===ja(d);l(t,{replace:f,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,d,r,i,n,t,s,o,a])}const _m="/assets/1-DxiT1XQH.jpg",AP="/assets/2-DFTvSdd1.jpg",OP="/assets/3-CmzWzu2N.jpg",DP="/assets/4-BT_DLLAx.jpg",LP=()=>{const[t,e]=k.useState(null);return k.useEffect(()=>((()=>{yt.child("project").on("value",r=>{r.val()&&e(r.val())})})(),()=>yt.child("project").off()),[]),h.jsx(h.Fragment,{children:h.jsxs("div",{style:{backgroundImage:`url(${fa})`},children:[h.jsxs("div",{className:"container mt-4",children:[t&&h.jsxs("div",{id:"carouselExampleDark",className:"carousel carousel-dark slide","data-bs-ride":"carousel",children:[h.jsxs("div",{className:"carousel-indicators",children:[h.jsx("button",{type:"button","data-bs-target":"#carouselExampleDark","data-bs-slide-to":"0",className:"active","aria-current":"true","aria-label":"Slide 1"}),h.jsx("button",{type:"button","data-bs-target":"#carouselExampleDark","data-bs-slide-to":"1","aria-label":"Slide 2"}),h.jsx("button",{type:"button","data-bs-target":"#carouselExampleDark","data-bs-slide-to":"2","aria-label":"Slide 3"}),h.jsx("button",{type:"button","data-bs-target":"#carouselExampleDark","data-bs-slide-to":"2","aria-label":"Slide 3"})]}),h.jsx("div",{className:"carousel-inner",children:Object.keys(t).map((n,r)=>{const i=t[n];return h.jsx("div",{className:`carousel-item ${r===0?"active":""}`,"data-bs-interval":r===0?1e4:2e3,children:h.jsx("img",{src:i.room_img,className:"d-block fixed-size-img",alt:`Slide ${r+1}`})},r)})}),h.jsxs("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleDark","data-bs-slide":"prev",children:[h.jsx("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),h.jsx("span",{className:"visually-hidden",children:"Previous"})]}),h.jsxs("button",{className:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleDark","data-bs-slide":"next",children:[h.jsx("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),h.jsx("span",{className:"visually-hidden",children:"Next"})]})]}),h.jsx("div",{className:"row",children:h.jsxs("div",{className:"col-12 d-flex align-items-center ps-5 ms-3 mt-3",children:[h.jsx("img",{src:"src/assets/img/capacity (1)-icon.png",width:50,height:50,alt:"Capacity Icon"}),h.jsx("h2",{className:"ms-3",children:"Hostel Rooms"})]})}),h.jsxs("div",{className:"row ms-md-5 me-md-5 mt-md-3 ms-3 me-3",children:[h.jsx("div",{className:"col-lg-3 col-md-4 col-sm-6 mb-3",children:h.jsxs("div",{className:"card border-0",children:[h.jsx(at,{to:"/Singleshare",children:h.jsx("img",{src:_m,className:"card-img-top",alt:"..."})}),h.jsx("div",{className:"text-center text-dark fst-italic",children:"Single Share"})]})}),h.jsx("div",{className:"col-lg-3 col-md-4 col-sm-6 mb-3",children:h.jsxs("div",{className:"card border-0",children:[h.jsx(at,{to:"/Doubleshare",children:h.jsx("img",{src:AP,className:"card-img-top",alt:"..."})}),h.jsx("div",{className:"text-center text-dark fst-italic",children:"Double Share"})]})}),h.jsx("div",{className:"col-lg-3 col-md-4 col-sm-6 mb-3",children:h.jsxs("div",{className:"card border-0",children:[h.jsx(at,{to:"/Thribleshare",children:h.jsx("img",{src:OP,className:"card-img-top",alt:"..."})}),h.jsx("div",{className:"text-center text-dark fst-italic",children:"Thrible Share"})]})}),h.jsx("div",{className:"col-lg-3 col-md-4 col-sm-6 mb-3",children:h.jsxs("div",{className:"card border-0",children:[h.jsx(at,{to:"/Fourshare",children:h.jsx("img",{src:DP,className:"card-img-top",alt:"..."})}),h.jsx("div",{className:"text-center text-dark fst-italic",children:"Four Share"})]})})]})]}),h.jsx("div",{className:"bg-white py-24 sm:py-32",children:h.jsxs("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:[h.jsx("div",{className:"mx-auto max-w-2xl sm:text-center",children:h.jsx("h2",{className:"text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",children:"Hostel Providing Facilities"})}),h.jsxs("div",{className:"mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none",children:[h.jsxs("div",{className:"p-8 sm:p-10 lg:flex-auto",children:[h.jsx("h3",{className:"text-2xl font-bold tracking-tight text-gray-900",children:"Hostel membership"}),h.jsx("p",{className:"mt-6 text-base leading-7 text-gray-600",children:"Clean and well-maintained rooms, available in various configurations (single, double, or shared), to suit different.High-speed internet access for academic, professional, and personal use. budget requirements.On-site washing machines and dryers or laundry services to handle residents' laundry needs."}),h.jsxs("div",{className:"mt-10 flex items-center gap-x-4",children:[h.jsx("h4",{className:"flex-none text-sm font-semibold leading-6 text-indigo-600",children:"What’s included"}),h.jsx("div",{className:"h-px flex-auto bg-gray-100"})]}),h.jsxs("ul",{role:"list",className:"mt-8 grid grid-cols-1 gap-4 leading-6 text-slate-400 hover:text-sky-400 sm:grid-cols-2 sm:gap-6",children:[h.jsxs("li",{className:"flex gap-x-3",children:[h.jsx("img",{src:"src/assets/img/wifi-signal-icon.png",width:50,height:50}),h.jsx("b",{children:"Free wifi"})]}),h.jsxs("li",{className:"flex gap-x-3",children:[h.jsx("img",{src:"src/assets/img/washing-machine-icon.png",width:50,height:50}),h.jsx("b",{children:"Free washing Machine"})]}),h.jsxs("li",{className:"flex gap-x-3",children:[h.jsx("img",{src:"src/assets/img/water-tap-icon.png",width:50,height:50}),h.jsx("b",{children:"24/7 Water"})]}),h.jsxs("li",{className:"flex gap-x-3",children:[h.jsx("img",{src:"src/assets/img/breakfast-icon.png",width:50,height:50}),h.jsx("b",{children:" 3 Time Food"})]})]})]}),h.jsx("div",{className:"-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0",children:h.jsx("div",{className:"rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-19",children:h.jsx("div",{className:"mx-auto max-w-xs ",children:h.jsx("img",{src:_m})})})})]}),h.jsxs("div",{className:"mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none",children:[h.jsx("div",{className:"-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0",children:h.jsx("div",{className:"rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-19",children:h.jsx("div",{className:"mx-auto max-w-xs ",children:h.jsx("img",{src:"src/assets/img/hostel-kitchen.jpg",width:500})})})}),h.jsxs("div",{className:"p-8 sm:p-10 lg:flex-auto",children:[h.jsx("h3",{className:"text-2xl font-bold tracking-tight text-gray-900",children:"Timings For Food"}),h.jsx("p",{className:"mt-6 text-base leading-7 text-gray-600",children:"Either a shared kitchen where residents can cook their meals or a mess providing nutritious, home-cooked-style food."}),h.jsxs("div",{className:"mt-10 flex items-center gap-x-4",children:[h.jsx("h4",{className:"flex-none text-sm font-semibold leading-6 text-indigo-600",children:"What’s included"}),h.jsx("div",{className:"h-px flex-auto bg-gray-100"})]}),h.jsxs("ul",{role:"list",className:"mt-8 grid grid-cols-1 gap-4 leading-6 text-slate-400 hover:text-sky-400 sm:grid-cols-2 sm:gap-6",children:[h.jsxs("li",{className:"flex gap-x-3",children:[h.jsx("img",{src:"src/assets/img/breakfast-icon.png",width:50,height:50}),h.jsx("b",{children:"BreakFast"}),"(6:00am - 10:00am)"]}),h.jsxs("li",{className:"flex gap-x-3",children:[h.jsx("img",{src:"src/assets/img/lunch-box-icon.png",width:50,height:50}),h.jsx("b",{children:"Lunch"}),"(12:00pm - 3:00pm)"]}),h.jsxs("li",{className:"flex gap-x-3",children:[h.jsx("img",{src:"src/assets/img/christmas-dinner-icon.png",width:50,height:50}),h.jsx("b",{children:"Dinner"}),"(7:00pm - 10:00pm)"]})]})]})]}),h.jsx("div",{className:"mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none",style:{backgroundImage:`url(${fa})`},children:h.jsxs("div",{className:"p-8 sm:p-10 lg:flex-auto",children:[h.jsx("h3",{className:"text-2xl font-bold tracking-tight text-gray-900",children:"Sharing Rents"}),h.jsx("p",{className:"mt-6 text-base leading-7 text-gray-600",children:"While hostel sharing rentals offer many benefits, it's important to consider potential downsides like lack of privacy, noise, and the need for good interpersonal skills to manage shared living dynamics effectively."}),h.jsxs("div",{className:"mt-10 flex items-center gap-x-4",children:[h.jsx("h4",{className:"flex-none text-sm font-semibold leading-6 text-indigo-600",children:"What’s included"}),h.jsx("div",{className:"h-px flex-auto bg-gray-100"})]}),h.jsxs("ul",{role:"list",className:"mt-8 grid grid-cols-1 gap-4 leading-6 text-slate-400 hover:text-sky-400 sm:grid-cols-2 sm:gap-6",children:[h.jsxs("li",{className:"flex gap-x-3",children:[h.jsx("img",{src:"src/assets/img/single-bed-icon.png",width:100,height:100}),h.jsx("b",{children:"Single Share"}),h.jsx("p",{className:"badge text-dark",children:"$4500/month && $200/day"})]}),h.jsxs("li",{className:"flex gap-x-3",children:[h.jsx("img",{src:"src/assets/img/double-bed-icon.jpg",width:100,height:100}),h.jsx("b",{children:"Two Share"}),h.jsx("p",{className:"badge text-dark",children:"$4500/month && $200/day"})]}),h.jsxs("li",{className:"flex gap-x-3",children:[h.jsx("img",{src:"src/assets/img/thrible-ded-icon.jpg",width:100,height:100}),h.jsx("b",{children:"Three Share"}),h.jsx("p",{className:"badge text-dark",children:"$4500/month && $200/day"})]}),h.jsxs("li",{className:"flex gap-x-3",children:[h.jsx("img",{src:"src/assets/img/four-bed-icon.jpg",width:100,height:100}),h.jsx("b",{children:"Four Share "}),h.jsx("p",{className:"badge text-dark",children:"$4500/month && $200/day"})]})]})]})})]})})]})})};function MP(){const[t,e]=k.useState({});return k.useEffect(()=>((()=>{yt.child("project").on("value",r=>{r.val()&&e(r.val())})})(),()=>yt.child("project").off()),[]),h.jsx("div",{className:"container mt-3",children:h.jsx("div",{className:"row",children:t&&Object.keys(t).map(n=>{const r=t[n];return h.jsx("div",{className:"col-md-4",children:h.jsxs("div",{className:"card mb-4",children:[h.jsx("img",{src:r.room_img,className:"card-img-top fixed-size-img",alt:"Room"}),h.jsxs("div",{className:"card-body",children:[h.jsxs("h5",{className:"card-title",children:[h.jsx("span",{className:"text-primary",children:"S"}),h.jsx("span",{className:"text-secondary",children:"i"}),h.jsx("span",{className:"text-success",children:"n"}),h.jsx("span",{className:"text-danger",children:"g"}),h.jsx("span",{className:"text-warning",children:"l"}),h.jsx("span",{className:"text-info",children:"e"}),h.jsx("span",{className:"text-dark",children:" "}),h.jsx("span",{className:"text-primary",children:"S"}),h.jsx("span",{className:"text-secondary",children:"h"}),h.jsx("span",{className:"text-success",children:"a"}),h.jsx("span",{className:"text-danger",children:"r"}),h.jsx("span",{className:"text-warning",children:"e"})]}),h.jsx("p",{className:"card-text text-bold",children:"a single-share room offers more privacy and personal space. It typically includes a single bed, desk, and storage for personal belongings."})]}),h.jsxs("ul",{className:"list-group list-group-flush",children:[h.jsxs("li",{className:"list-group-item",children:["Room Number:"," ",h.jsx("span",{className:"badge bg-primary",children:r.room_number})]}),h.jsxs("li",{className:"list-group-item",children:["Status:",h.jsx("span",{className:`badge text-bg-success ${r.status==="Available"?"badge-available":"badge text-bg-danger"}`,children:r.status})]}),h.jsxs("li",{className:"list-group-item",children:["Floor:"," ",h.jsx("span",{className:"badge bg-warning",children:r.floor_number})]}),h.jsxs("li",{className:"list-group-item",children:["Price:"," ",h.jsxs("span",{className:"badge bg-primary",children:["$",r.price]})]})]}),h.jsxs("div",{className:"card-body",children:[h.jsx("a",{href:"#",className:"card-link",children:"Card link"}),h.jsx("a",{href:"#",className:"card-link",children:"Another link"})]})]})},n)})})})}const jP=()=>{const[t,e]=k.useState({});return k.useEffect(()=>((()=>{yt.child("project").on("value",r=>{r.val()&&e(r.val())})})(),()=>yt.child("project").off()),[]),h.jsx(h.Fragment,{children:h.jsx("div",{className:"bg",style:{backgroundImage:`url(${fa})`},children:h.jsx("div",{className:"container pt-4",children:h.jsx("div",{className:"grid grid-cols-3 gap-4",children:t&&Object.keys(t).map(n=>{const r=t[n];return h.jsx("div",{className:"box-content p-4 border-4",children:h.jsx("img",{className:"ixed-size-img",src:r.room_img})},n)})})})})})};function FP(){const[t,e]=k.useState({});return k.useEffect(()=>((()=>{yt.child("second").on("value",r=>{r.val()&&e(r.val())})})(),()=>yt.child("second").off()),[]),h.jsx("div",{className:"container mt-3",children:h.jsx("div",{className:"row",children:t&&Object.keys(t).map(n=>{const r=t[n];return h.jsx("div",{className:"col-md-4",children:h.jsxs("div",{className:"card mb-4",children:[h.jsx("img",{src:r.room_img,className:"card-img-top fixed-size-img",alt:"Room"}),h.jsxs("div",{className:"card-body",children:[h.jsxs("h5",{className:"card-title",children:[h.jsx("span",{className:"text-primary",children:"D"}),h.jsx("span",{className:"text-secondary",children:"o"}),h.jsx("span",{className:"text-success",children:"u"}),h.jsx("span",{className:"text-danger",children:"b"}),h.jsx("span",{className:"text-warning",children:"l"}),h.jsx("span",{className:"text-info",children:"e"}),h.jsx("span",{className:"text-dark",children:" "}),h.jsx("span",{className:"text-primary",children:"S"}),h.jsx("span",{className:"text-secondary",children:"h"}),h.jsx("span",{className:"text-success",children:"a"}),h.jsx("span",{className:"text-danger",children:"r"}),h.jsx("span",{className:"text-warning",children:"e"})]}),h.jsx("p",{className:"card-text text-bold",children:"a Double-share room offers more privacy and personal space. It typically includes a single bed, desk, and storage for personal belongings."})]}),h.jsxs("ul",{className:"list-group list-group-flush",children:[h.jsxs("li",{className:"list-group-item",children:["Room Number:"," ",h.jsx("span",{className:"badge bg-primary",children:r.room_number})]}),h.jsxs("li",{className:"list-group-item",children:["Status:",h.jsx("span",{className:`badge text-bg-success ${r.status==="Available"?"badge-available":"badge text-bg-danger"}`,children:r.status})]}),h.jsxs("li",{className:"list-group-item",children:["Floor:"," ",h.jsx("span",{className:"badge bg-warning",children:r.floor_number})]}),h.jsxs("li",{className:"list-group-item",children:["Price:"," ",h.jsxs("span",{className:"badge bg-primary",children:["$",r.price]})]})]}),h.jsxs("div",{className:"card-body",children:[h.jsx("a",{href:"#",className:"card-link",children:"Card link"}),h.jsx("a",{href:"#",className:"card-link",children:"Another link"})]})]})},n)})})})}function UP(){const[t,e]=k.useState({});return k.useEffect(()=>((()=>{yt.child("thrible").on("value",r=>{r.val()&&e(r.val())})})(),()=>yt.child("thrible").off()),[]),h.jsx("div",{className:"container mt-3",children:h.jsx("div",{className:"row",children:t&&Object.keys(t).map(n=>{const r=t[n];return h.jsx("div",{className:"col-md-4",children:h.jsxs("div",{className:"card mb-4",children:[h.jsx("img",{src:r.room_img,className:"card-img-top fixed-size-img",alt:"Room"}),h.jsxs("div",{className:"card-body",children:[h.jsxs("h5",{className:"card-title",children:[h.jsx("span",{className:"text-primary",children:"T"}),h.jsx("span",{className:"text-secondary",children:"h"}),h.jsx("span",{className:"text-success",children:"r"}),h.jsx("span",{className:"text-danger",children:"i"}),h.jsx("span",{className:"text-primary",children:"b"}),h.jsx("span",{className:"text-warning",children:"l"}),h.jsx("span",{className:"text-info",children:"e"}),h.jsx("span",{className:"text-dark",children:" "}),h.jsx("span",{className:"text-primary",children:"S"}),h.jsx("span",{className:"text-secondary",children:"h"}),h.jsx("span",{className:"text-success",children:"a"}),h.jsx("span",{className:"text-danger",children:"r"}),h.jsx("span",{className:"text-warning",children:"e"})]}),h.jsx("p",{className:"card-text text-bold",children:"a Thrible-share room offers more privacy and personal space. It typically includes a single bed, desk, and storage for personal belongings."})]}),h.jsxs("ul",{className:"list-group list-group-flush",children:[h.jsxs("li",{className:"list-group-item",children:["Room Number:"," ",h.jsx("span",{className:"badge bg-primary",children:r.room_number})]}),h.jsxs("li",{className:"list-group-item",children:["Status:",h.jsx("span",{className:`badge text-bg-success ${r.status==="Available"?"badge-available":"badge text-bg-danger"}`,children:r.status})]}),h.jsxs("li",{className:"list-group-item",children:["Floor:"," ",h.jsx("span",{className:"badge bg-warning",children:r.floor_number})]}),h.jsxs("li",{className:"list-group-item",children:["Price:"," ",h.jsxs("span",{className:"badge bg-primary",children:["$",r.price]})]})]}),h.jsxs("div",{className:"card-body",children:[h.jsx("a",{href:"#",className:"card-link",children:"Card link"}),h.jsx("a",{href:"#",className:"card-link",children:"Another link"})]})]})},n)})})})}function BP(){const[t,e]=k.useState({});return k.useEffect(()=>((()=>{yt.child("four").on("value",r=>{r.val()&&e(r.val())})})(),()=>yt.child("four").off()),[]),h.jsx("div",{className:"container mt-3",children:h.jsx("div",{className:"row",children:t&&Object.keys(t).map(n=>{const r=t[n];return h.jsx("div",{className:"col-md-4",children:h.jsxs("div",{className:"card mb-4",children:[h.jsx("img",{src:r.room_img,className:"card-img-top fixed-size-img",alt:"Room"}),h.jsxs("div",{className:"card-body",children:[h.jsxs("h5",{className:"card-title",children:[h.jsx("span",{className:"text-primary",children:"F"}),h.jsx("span",{className:"text-secondary",children:"o"}),h.jsx("span",{className:"text-success",children:"u"}),h.jsx("span",{className:"text-danger",children:"r"}),h.jsx("span",{className:"text-dark",children:" "}),h.jsx("span",{className:"text-primary",children:"S"}),h.jsx("span",{className:"text-secondary",children:"h"}),h.jsx("span",{className:"text-success",children:"a"}),h.jsx("span",{className:"text-danger",children:"r"}),h.jsx("span",{className:"text-warning",children:"e"})]}),h.jsx("p",{className:"card-text text-bold",children:"a single-share room offers more privacy and personal space. It typically includes a single bed, desk, and storage for personal belongings."})]}),h.jsxs("ul",{className:"list-group list-group-flush",children:[h.jsxs("li",{className:"list-group-item",children:["Room Number:"," ",h.jsx("span",{className:"badge bg-primary",children:r.room_number})]}),h.jsxs("li",{className:"list-group-item",children:["Status:",h.jsx("span",{className:`badge text-bg-success ${r.status==="Available"?"badge-available":"badge text-bg-danger"}`,children:r.status})]}),h.jsxs("li",{className:"list-group-item",children:["Floor:"," ",h.jsx("span",{className:"badge bg-warning",children:r.floor_number})]}),h.jsxs("li",{className:"list-group-item",children:["Price:"," ",h.jsxs("span",{className:"badge bg-primary",children:["$",r.price]})]})]}),h.jsxs("div",{className:"card-body",children:[h.jsx("a",{href:"#",className:"card-link",children:"Card link"}),h.jsx("a",{href:"#",className:"card-link",children:"Another link"})]})]})},n)})})})}const zP=()=>h.jsx(h.Fragment,{children:h.jsxs(EP,{children:[h.jsx(dn,{path:"/",element:h.jsx(LP,{})}),h.jsx(dn,{path:"/room_img",element:h.jsx(jP,{})}),h.jsx(dn,{path:"/about",element:h.jsx(TE,{})}),h.jsx(dn,{path:"/Singleshare",element:h.jsx(MP,{})}),h.jsx(dn,{path:"/Doubleshare",element:h.jsx(FP,{})}),h.jsx(dn,{path:"/Thribleshare",element:h.jsx(UP,{})}),h.jsx(dn,{path:"/Fourshare",element:h.jsx(BP,{})})]})}),WP=()=>h.jsx("div",{className:"text-white",children:h.jsxs("footer",{className:"bg-dark p-5",children:[h.jsxs("div",{className:"row",children:[h.jsxs("div",{className:"col-12 col-md-4 mb-3",children:[h.jsx("h5",{children:"Hostel Managment"}),h.jsxs("ul",{className:"nav flex-column",children:[h.jsx("li",{className:"nav-item mb-2",children:h.jsx("a",{href:"#",className:"nav-link p-0 text-white",children:"Free WiFi"})}),h.jsx("li",{className:"nav-item mb-2",children:h.jsx("a",{href:"#",className:"nav-link p-0 text-white",children:"Shared Kitchen or Mess"})}),h.jsx("li",{className:"nav-item mb-2",children:h.jsx("a",{href:"#",className:"nav-link p-0 text-white",children:"Bathrooms"})}),h.jsx("li",{className:"nav-item mb-2",children:h.jsx("a",{href:"#",className:"nav-link p-0 text-white",children:"Housekeeping"})}),h.jsx("li",{className:"nav-item mb-2",children:h.jsx("a",{href:"#",className:"nav-link p-0 text-white",children:"Support Services"})}),h.jsx("li",{className:"nav-item mb-2",children:h.jsx("a",{href:"#",className:"nav-link p-0 text-white",children:"Common Areas"})})]})]}),h.jsxs("div",{className:"col-12 col-md-5 mb-3",children:[h.jsx("h5",{children:"CONTACT DETAILS"}),h.jsxs("ul",{className:"nav flex-column",children:[h.jsx("li",{className:"nav-item mb-2",children:h.jsx("a",{href:"#",className:"nav-link text-white p-0",children:"Hostel_name"})}),h.jsxs("li",{className:"nav-item mb-2",children:["Owner contact:",h.jsx("a",{href:"tel:+918523899330",className:"nav-link text-white p-0",children:"8523899330"}),h.jsx("a",{href:"tel:+917993558948",className:"nav-link text-white p-0",children:"7993558948"})]}),h.jsxs("li",{className:"nav-item mb-2",children:["Email:",h.jsx("a",{href:"mailto:bvsadds@gmail.com",className:"nav-link text-white p-0",children:"bvsadds@gmail.com"})]})]})]}),h.jsxs("div",{className:"col-12 col-md-3 mb-3",children:[h.jsx("h5",{children:"SOCIAL MEDIA"}),h.jsxs("div",{className:"d-flex",children:[h.jsx("a",{href:"#",className:"text-white me-3",children:h.jsx("i",{className:"fa-brands fa-facebook fa-3x"})}),h.jsx("a",{href:"#",className:"text-white me-3",children:h.jsx("i",{className:"fa-brands fa-square-instagram fa-3x"})}),h.jsx("a",{href:"#",className:"text-white",children:h.jsx("i",{className:"fa-brands fa-linkedin fa-3x"})})]})]})]}),h.jsxs("div",{className:"d-flex flex-column flex-sm-row justify-content-between border-top pt-3",children:[h.jsx("p",{children:"© 2024BVS Company, Inc. All rights reserved."}),h.jsxs("ul",{className:"list-unstyled d-flex",children:[h.jsx("li",{className:"ms-3",children:h.jsx("a",{className:"link-light",href:"#",children:h.jsx("i",{className:"bi bi-instagram"})})}),h.jsx("li",{className:"ms-3",children:h.jsx("a",{className:"link-light",href:"#",children:h.jsx("i",{className:"bi bi-twitter"})})}),h.jsx("li",{className:"ms-3",children:h.jsx("a",{className:"link-light",href:"#",children:h.jsx("i",{className:"bi bi-facebook"})})})]})]})]})}),VP="/assets/hostel-logo-BICGcCAU.jpg",HP=()=>h.jsxs(h.Fragment,{children:[h.jsxs("nav",{className:"navbar navbar-expand-lg",children:[h.jsx("a",{className:"navbar-brand ps-lg-5 ms-lg-5 ps-3 ms-3",href:"#",children:h.jsx("img",{src:VP,alt:"Bootstrap",width:"75",height:"50"})}),h.jsx("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",children:h.jsx("span",{className:"navbar-toggler-icon text-bg-light "})}),h.jsx("div",{className:"collapse navbar-collapse p-4 ms-5",id:"navbarNavDropdown",children:h.jsxs("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0 ",children:[h.jsx("li",{className:"nav-item ",children:h.jsx(at,{to:"/",className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),h.jsx("li",{className:"nav-item ",children:h.jsx(at,{to:"/about",className:"nav-link active",href:"#",children:"About Us"})}),h.jsx("li",{className:"nav-item ",children:h.jsx(at,{to:"/room_img",className:"nav-link active",href:"#",children:"Room Img"})}),h.jsxs("li",{className:"nav-item  dropdown",children:[h.jsx(at,{to:"/services",className:"nav-link active dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Services"}),h.jsxs("ul",{className:"dropdown-menu",children:[h.jsx("li",{children:h.jsx(at,{to:"/Singleshare",className:"dropdown-item",href:"#",children:"Singleshare"})}),h.jsx("li",{children:h.jsx(at,{to:"/Doubleshare",className:"dropdown-item",href:"#",children:"Doubleshare"})}),h.jsx("li",{children:h.jsx(at,{to:"/Thribleshare",className:"dropdown-item",href:"#",children:"Thribleshare"})}),h.jsx("li",{children:h.jsx(at,{to:"/Fourshare",className:"dropdown-item",href:"#",children:"Fourshare"})})]})]})]})})]}),h.jsx(yP,{})]});yu.createRoot(document.getElementById("root")).render(h.jsx(Pm.StrictMode,{children:h.jsxs(TP,{children:[h.jsx(HP,{}),h.jsx(zP,{}),h.jsx(WP,{})]})}));
