(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(){!function(n){"use strict";function r(n,r,t){return t.a=n,t.f=r,t}function t(n){return r(2,n,function(r){return function(t){return n(r,t)}})}function e(n){return r(3,n,function(r){return function(t){return function(e){return n(r,t,e)}}})}function u(n){return r(4,n,function(r){return function(t){return function(e){return function(u){return n(r,t,e,u)}}}})}function a(n,r,t){return 2===n.a?n.f(r,t):n(r)(t)}function i(n,r,t,e){return 3===n.a?n.f(r,t,e):n(r)(t)(e)}function f(n,r,t,e,u){return 4===n.a?n.f(r,t,e,u):n(r)(t)(e)(u)}function c(n,r,t,e,u,a,i,f,c){return 8===n.a?n.f(r,t,e,u,a,i,f,c):n(r)(t)(e)(u)(a)(i)(f)(c)}function o(n,r){for(var t,e=[],u=b(n,r,0,e);u&&(t=e.pop());u=b(t.a,t.b,0,e));return u}function b(n,r,t,e){if(t>100)return e.push(v(n,r)),!0;if(n===r)return!0;if("object"!==typeof n||null===n||null===r)return"function"===typeof n&&R(5),!1;for(var u in n.$<0&&(n=rr(n),r=rr(r)),n)if(!b(n[u],r[u],t+1,e))return!1;return!0}function s(n,r,t){if("object"!==typeof n)return n===r?0:n<r?-1:1;if("undefined"===typeof n.$)return(t=s(n.a,r.a))?t:(t=s(n.b,r.b))?t:s(n.c,r.c);for(;n.b&&r.b&&!(t=s(n.a,r.a));n=n.b,r=r.b);return t||(n.b?1:r.b?-1:0)}function v(n,r){return{a:n,b:r}}function l(n){return n}function d(n,r){var t={};for(var e in n)t[e]=n[e];for(var e in r)t[e]=r[e];return t}function h(n,r){if("string"===typeof n)return n+r;if(!n.b)return r;var t=g(n.a,r);n=n.b;for(var e=t;n.b;n=n.b)e=e.b=g(n.a,r);return t}var $={$:0};function g(n,r){return{$:1,a:n,b:r}}var p=t(g);function m(n){for(var r=$,t=n.length;t--;)r=g(n[t],r);return r}var w=e(function(n,r,t){for(var e=[];r.b&&t.b;r=r.b,t=t.b)e.push(a(n,r.a,t.a));return m(e)}),y=e(function(n,r,t){for(var e=Array(n),u=0;u<n;u++)e[u]=t(r+u);return e}),k=t(function(n,r){for(var t=Array(n),e=0;e<n&&r.b;e++)t[e]=r.a,r=r.b;return t.length=e,v(t,r)}),A=t(function(n,r){return r[n]}),_=e(function(n,r,t){for(var e=t.length,u=Array(e),a=0;a<e;a++)u[a]=t[a];return u[n]=r,u}),j=t(function(n,r){for(var t=r.length,e=Array(t+1),u=0;u<t;u++)e[u]=r[u];return e[t]=n,e}),E=e(function(n,r,t){for(var e=t.length,u=0;u<e;u++)r=a(n,t[u],r);return r}),N=e(function(n,r,t){for(var e=t.length-1;e>=0;e--)r=a(n,t[e],r);return r}),C=e(function(n,r,t){return t.slice(n,r)}),q=e(function(n,r,t){var e=r.length,u=n-e;u>t.length&&(u=t.length);for(var a=Array(e+u),i=0;i<e;i++)a[i]=r[i];for(i=0;i<u;i++)a[i+e]=t[i];return a});function R(n){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+n+".md")}var B=t(function(n,r){return n+r}),O=t(function(n,r){return n*r}),L=t(Math.pow),M=t(function(n,r){var t=r%n;return 0===n?R(11):t>0&&n<0||t<0&&n>0?t+n:t}),T=Math.ceil,x=Math.floor,F=Math.log,S=t(function(n,r){return n+r}),J=e(function(n,r,t){for(var e=t.length;e--;){var u=t[e],i=t.charCodeAt(e);56320>i||i>57343||(u=t[--e]+u),r=a(n,l(u),r)}return r});function W(n){return{$:2,b:n}}W(function(n){return"number"!==typeof n?G("an INT",n):-2147483647<n&&n<2147483647&&(0|n)===n?or(n):!isFinite(n)||n%1?G("an INT",n):or(n)}),W(function(n){return"boolean"===typeof n?or(n):G("a BOOL",n)}),W(function(n){return"number"===typeof n?or(n):G("a FLOAT",n)}),W(function(n){return or(V(n))});var Y=W(function(n){return"string"===typeof n?or(n):n instanceof String?or(n+""):G("a STRING",n)}),z=t(function(n,r){return{$:6,d:n,b:r}});var I=t(function(n,r){return function(n,r){return{$:9,f:n,g:r}}(n,[r])}),Q=t(function(n,r){return X(n,nn(r))});function X(n,r){switch(n.$){case 2:return n.b(r);case 5:return null===r?or(n.c):G("null",r);case 3:return P(r)?D(n.b,r,m):G("a LIST",r);case 4:return P(r)?D(n.b,r,Z):G("an ARRAY",r);case 6:var t=n.d;if("object"!==typeof r||null===r||!(t in r))return G("an OBJECT with a field named `"+t+"`",r);var e=X(n.b,r[t]);return Yr(e)?e:ar(a(fr,t,e.a));case 7:var u=n.e;return P(r)?u<r.length?(e=X(n.b,r[u]),Yr(e)?e:ar(a(cr,u,e.a))):G("a LONGER array. Need index "+u+" but only see "+r.length+" entries",r):G("an ARRAY",r);case 8:if("object"!==typeof r||null===r||P(r))return G("an OBJECT",r);var i=$;for(var f in r)if(r.hasOwnProperty(f)){if(e=X(n.b,r[f]),!Yr(e))return ar(a(fr,f,e.a));i=g(v(f,e.a),i)}return or(yr(i));case 9:for(var c=n.f,o=n.g,b=0;b<o.length;b++){if(e=X(o[b],r),!Yr(e))return e;c=c(e.a)}return or(c);case 10:return e=X(n.b,r),Yr(e)?X(n.h(e.a),r):e;case 11:for(var s=$,l=n.g;l.b;l=l.b){if(e=X(l.a,r),Yr(e))return e;s=g(e.a,s)}return ar(br(yr(s)));case 1:return ar(a(ir,n.a,V(r)));case 0:return or(n.a)}}function D(n,r,t){for(var e=r.length,u=Array(e),i=0;i<e;i++){var f=X(n,r[i]);if(!Yr(f))return ar(a(cr,i,f.a));u[i]=f.a}return or(t(u))}function P(n){return Array.isArray(n)||"function"===typeof FileList&&n instanceof FileList}function Z(n){return a(Wr,n.length,function(r){return n[r]})}function G(n,r){return ar(a(ir,"Expecting "+n,V(r)))}function H(n,r){if(n===r)return!0;if(n.$!==r.$)return!1;switch(n.$){case 0:case 1:return n.a===r.a;case 2:return n.b===r.b;case 5:return n.c===r.c;case 3:case 4:case 8:return H(n.b,r.b);case 6:return n.d===r.d&&H(n.b,r.b);case 7:return n.e===r.e&&H(n.b,r.b);case 9:return n.f===r.f&&K(n.g,r.g);case 10:return n.h===r.h&&H(n.b,r.b);case 11:return K(n.g,r.g)}}function K(n,r){var t=n.length;if(t!==r.length)return!1;for(var e=0;e<t;e++)if(!H(n[e],r[e]))return!1;return!0}var U=t(function(n,r){return JSON.stringify(nn(r),null,n)+""});function V(n){return n}function nn(n){return n}var rn=e(function(n,r,t){return t[n]=nn(r),t});function tn(n){return{$:0,a:n}}function en(n){return{$:2,b:n,c:null}}V(null);var un=t(function(n,r){return{$:3,b:n,d:r}}),an=0;function fn(n){var r={$:0,e:an++,f:n,g:null,h:[]};return bn(r),r}var cn=!1,on=[];function bn(n){if(on.push(n),!cn){for(cn=!0;n=on.shift();)sn(n);cn=!1}}function sn(n){for(;n.f;){var r=n.f.$;if(0===r||1===r){for(;n.g&&n.g.$!==r;)n.g=n.g.i;if(!n.g)return;n.f=n.g.b(n.f.a),n.g=n.g.i}else{if(2===r)return void(n.f.c=n.f.b(function(r){n.f=r,bn(n)}));if(5===r){if(0===n.h.length)return;n.f=n.f.b(n.h.shift())}else n.g={$:3===r?0:1,b:n.f.b,i:n.g},n.f=n.f.d}}}var vn={};function ln(n,r){var t={g:r,h:void 0},e=n.c,u=n.d,c=n.e,o=n.f;return t.h=fn(a(un,function n(r){return a(un,n,{$:5,b:function(n){var a=n.a;return 0===n.$?i(u,t,a,r):c&&o?f(e,t,a.i,a.j,r):i(e,t,c?a.i:a.j,r)}})},n.b))}var dn,hn=t(function(n,r){return en(function(t){n.g(r),t(tn(0))})});function $n(n){return{$:2,m:n}}function gn(n,r,t){var e,u={};for(var a in pn(!0,r,u,null),pn(!1,t,u,null),n)(e=n[a]).h.push({$:"fx",a:u[a]||{i:$,j:$}}),bn(e)}function pn(n,r,t,e){switch(r.$){case 1:var u=r.k,i=function(n,t,e){return a(n?vn[t].e:vn[t].f,function(n){for(var r=e;r;r=r.q)n=r.p(n);return n},r.l)}(n,u,e);return void(t[u]=function(n,r,t){return t=t||{i:$,j:$},n?t.i=g(r,t.i):t.j=g(r,t.j),t}(n,i,t[u]));case 2:for(var f=r.m;f.b;f=f.b)pn(n,f.a,t,e);return;case 3:return void pn(n,r.o,t,{p:r.n,q:e})}}var mn="undefined"!==typeof document?document:{};function wn(n,r){n.appendChild(r)}function yn(n){return{$:0,a:n}}var kn=t(function(n,r){return t(function(t,e){for(var u=[],a=0;e.b;e=e.b){var i=e.a;a+=i.b||0,u.push(i)}return a+=u.length,{$:1,c:r,d:Nn(t),e:u,f:n,b:a}})})(void 0);t(function(n,r){return t(function(t,e){for(var u=[],a=0;e.b;e=e.b){var i=e.a;a+=i.b.b||0,u.push(i)}return a+=u.length,{$:2,c:r,d:Nn(t),e:u,f:n,b:a}})})(void 0);var An,_n=t(function(n,r){return{$:"a0",n:n,o:r}}),jn=t(function(n,r){return{$:"a2",n:n,o:r}}),En=t(function(n,r){return{$:"a3",n:n,o:r}});function Nn(n){for(var r={};n.b;n=n.b){var t=n.a,e=t.$,u=t.n,a=t.o;if("a2"!==e){var i=r[e]||(r[e]={});"a3"===e&&"class"===u?Cn(i,u,a):i[u]=a}else"className"===u?Cn(r,u,nn(a)):r[u]=nn(a)}return r}function Cn(n,r,t){var e=n[r];n[r]=e?e+" "+t:t}function qn(n,r){var t=n.$;if(5===t)return qn(n.k||(n.k=n.m()),r);if(0===t)return mn.createTextNode(n.a);if(4===t){for(var e=n.k,u=n.j;4===e.$;)"object"!==typeof u?u=[u,e.j]:u.push(e.j),e=e.k;var a={j:u,p:r};return(i=qn(e,a)).elm_event_node_ref=a,i}if(3===t)return Rn(i=n.h(n.g),r,n.d),i;var i=n.f?mn.createElementNS(n.f,n.c):mn.createElement(n.c);dn&&"a"==n.c&&i.addEventListener("click",dn(i)),Rn(i,r,n.d);for(var f=n.e,c=0;c<f.length;c++)wn(i,qn(1===t?f[c]:f[c].b,r));return i}function Rn(n,r,t){for(var e in t){var u=t[e];"a1"===e?Bn(n,u):"a0"===e?Mn(n,r,u):"a3"===e?On(n,u):"a4"===e?Ln(n,u):("value"!==e&&"checked"!==e||n[e]!==u)&&(n[e]=u)}}function Bn(n,r){var t=n.style;for(var e in r)t[e]=r[e]}function On(n,r){for(var t in r){var e=r[t];"undefined"!==typeof e?n.setAttribute(t,e):n.removeAttribute(t)}}function Ln(n,r){for(var t in r){var e=r[t],u=e.f,a=e.o;"undefined"!==typeof a?n.setAttributeNS(u,t,a):n.removeAttributeNS(u,t)}}function Mn(n,r,t){var e=n.elmFs||(n.elmFs={});for(var u in t){var a=t[u],i=e[u];if(a){if(i){if(i.q.$===a.$){i.q=a;continue}n.removeEventListener(u,i)}i=Tn(r,a),n.addEventListener(u,i,An&&{passive:Qr(a)<2}),e[u]=i}else n.removeEventListener(u,i),e[u]=void 0}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){An=!0}}))}catch(n){}function Tn(n,r){function t(r){var e=t.q,u=X(e.a,r);if(Yr(u)){for(var a,i=Qr(e),f=u.a,c=i?i<3?f.a:f.w:f,o=1==i?f.b:3==i&&f.ah,b=(o&&r.stopPropagation(),(2==i?f.b:3==i&&f.ae)&&r.preventDefault(),n);a=b.j;){if("function"==typeof a)c=a(c);else for(var s=a.length;s--;)c=a[s](c);b=b.p}b(c,o)}}return t.q=r,t}function xn(n,r){return n.$==r.$&&H(n.a,r.a)}function Fn(n,r,t,e){var u={$:r,r:t,s:e,t:void 0,u:void 0};return n.push(u),u}function Sn(n,r,t,e){if(n!==r){var u=n.$,a=r.$;if(u!==a){if(1!==u||2!==a)return void Fn(t,0,e,r);r=function(n){for(var r=n.e,t=r.length,e=Array(t),u=0;u<t;u++)e[u]=r[u].b;return{$:1,c:n.c,d:n.d,e:e,f:n.f,b:n.b}}(r),a=1}switch(a){case 5:for(var i=n.l,f=r.l,c=i.length,o=c===f.length;o&&c--;)o=i[c]===f[c];if(o)return void(r.k=n.k);r.k=r.m();var b=[];return Sn(n.k,r.k,b,0),void(b.length>0&&Fn(t,1,e,b));case 4:for(var s=n.j,v=r.j,l=!1,d=n.k;4===d.$;)l=!0,"object"!==typeof s?s=[s,d.j]:s.push(d.j),d=d.k;for(var h=r.k;4===h.$;)l=!0,"object"!==typeof v?v=[v,h.j]:v.push(h.j),h=h.k;return l&&s.length!==v.length?void Fn(t,0,e,r):((l?function(n,r){for(var t=0;t<n.length;t++)if(n[t]!==r[t])return!1;return!0}(s,v):s===v)||Fn(t,2,e,v),void Sn(d,h,t,e+1));case 0:return void(n.a!==r.a&&Fn(t,3,e,r.a));case 1:return void Jn(n,r,t,e,Yn);case 2:return void Jn(n,r,t,e,zn);case 3:if(n.h!==r.h)return void Fn(t,0,e,r);var $=Wn(n.d,r.d);$&&Fn(t,4,e,$);var g=r.i(n.g,r.g);return void(g&&Fn(t,5,e,g))}}}function Jn(n,r,t,e,u){if(n.c===r.c&&n.f===r.f){var a=Wn(n.d,r.d);a&&Fn(t,4,e,a),u(n,r,t,e)}else Fn(t,0,e,r)}function Wn(n,r,t){var e;for(var u in n)if("a1"!==u&&"a0"!==u&&"a3"!==u&&"a4"!==u)if(u in r){var a=n[u],i=r[u];a===i&&"value"!==u&&"checked"!==u||"a0"===t&&xn(a,i)||((e=e||{})[u]=i)}else(e=e||{})[u]=t?"a1"===t?"":"a0"===t||"a3"===t?void 0:{f:n[u].f,o:void 0}:"string"===typeof n[u]?"":null;else{var f=Wn(n[u],r[u]||{},u);f&&((e=e||{})[u]=f)}for(var c in r)c in n||((e=e||{})[c]=r[c]);return e}function Yn(n,r,t,e){var u=n.e,a=r.e,i=u.length,f=a.length;i>f?Fn(t,6,e,{v:f,i:i-f}):i<f&&Fn(t,7,e,{v:i,e:a});for(var c=i<f?i:f,o=0;o<c;o++){var b=u[o];Sn(b,a[o],t,++e),e+=b.b||0}}function zn(n,r,t,e){for(var u=[],a={},i=[],f=n.e,c=r.e,o=f.length,b=c.length,s=0,v=0,l=e;s<o&&v<b;){var d=(E=f[s]).a,h=(N=c[v]).a,$=E.b,g=N.b,p=void 0,m=void 0;if(d!==h){var w=f[s+1],y=c[v+1];if(w){var k=w.a,A=w.b;m=h===k}if(y){var _=y.a,j=y.b;p=d===_}if(p&&m)Sn($,j,u,++l),Qn(a,u,d,g,v,i),l+=$.b||0,Xn(a,u,d,A,++l),l+=A.b||0,s+=2,v+=2;else if(p)l++,Qn(a,u,h,g,v,i),Sn($,j,u,l),l+=$.b||0,s+=1,v+=2;else if(m)Xn(a,u,d,$,++l),l+=$.b||0,Sn(A,g,u,++l),l+=A.b||0,s+=2,v+=1;else{if(!w||k!==_)break;Xn(a,u,d,$,++l),Qn(a,u,h,g,v,i),l+=$.b||0,Sn(A,j,u,++l),l+=A.b||0,s+=2,v+=2}}else Sn($,g,u,++l),l+=$.b||0,s++,v++}for(;s<o;){var E;Xn(a,u,(E=f[s]).a,$=E.b,++l),l+=$.b||0,s++}for(;v<b;){var N,C=C||[];Qn(a,u,(N=c[v]).a,N.b,void 0,C),v++}(u.length>0||i.length>0||C)&&Fn(t,8,e,{w:u,x:i,y:C})}var In="_elmW6BL";function Qn(n,r,t,e,u,a){var i=n[t];if(!i)return a.push({r:u,A:i={c:0,z:e,r:u,s:void 0}}),void(n[t]=i);if(1===i.c){a.push({r:u,A:i}),i.c=2;var f=[];return Sn(i.z,e,f,i.r),i.r=u,void(i.s.s={w:f,A:i})}Qn(n,r,t+In,e,u,a)}function Xn(n,r,t,e,u){var a=n[t];if(a){if(0===a.c){a.c=2;var i=[];return Sn(e,a.z,i,u),void Fn(r,9,u,{w:i,A:a})}Xn(n,r,t+In,e,u)}else{var f=Fn(r,9,u,void 0);n[t]={c:1,z:e,r:u,s:f}}}function Dn(n,r,t,e){return 0===t.length?n:(function n(r,t,e,u){!function r(t,e,u,a,i,f,c){for(var o=u[a],b=o.r;b===i;){var s=o.$;if(1===s)n(t,e.k,o.s,c);else if(8===s)o.t=t,o.u=c,(v=o.s.w).length>0&&r(t,e,v,0,i,f,c);else if(9===s){o.t=t,o.u=c;var v,l=o.s;l&&(l.A.s=t,(v=l.w).length>0&&r(t,e,v,0,i,f,c))}else o.t=t,o.u=c;if(!(o=u[++a])||(b=o.r)>f)return a}var d=e.$;if(4===d){for(var h=e.k;4===h.$;)h=h.k;return r(t,h,u,a,i+1,f,t.elm_event_node_ref)}for(var $=e.e,g=t.childNodes,p=0;p<$.length;p++){i++;var m=1===d?$[p]:$[p].b,w=i+(m.b||0);if(i<=b&&b<=w&&(!(o=u[a=r(g[p],m,u,a,i,w,c)])||(b=o.r)>f))return a;i=w}return a}(r,t,e,0,0,t.b,u)}(n,r,t,e),Pn(n,t))}function Pn(n,r){for(var t=0;t<r.length;t++){var e=r[t],u=e.t,a=Zn(u,e);u===n&&(n=a)}return n}function Zn(n,r){switch(r.$){case 0:return function(n){var t=n.parentNode,e=qn(r.s,r.u);return e.elm_event_node_ref||(e.elm_event_node_ref=n.elm_event_node_ref),t&&e!==n&&t.replaceChild(e,n),e}(n);case 4:return Rn(n,r.u,r.s),n;case 3:return n.replaceData(0,n.length,r.s),n;case 1:return Pn(n,r.s);case 2:return n.elm_event_node_ref?n.elm_event_node_ref.j=r.s:n.elm_event_node_ref={j:r.s,p:r.u},n;case 6:for(var t=r.s,e=0;e<t.i;e++)n.removeChild(n.childNodes[t.v]);return n;case 7:for(var u=(t=r.s).e,a=n.childNodes[e=t.v];e<u.length;e++)n.insertBefore(qn(u[e],r.u),a);return n;case 9:if(!(t=r.s))return n.parentNode.removeChild(n),n;var i=t.A;return"undefined"!==typeof i.r&&n.parentNode.removeChild(n),i.s=Pn(n,t.w),n;case 8:return function(n,r){var t=r.s,e=function(n,r){if(n){for(var t=mn.createDocumentFragment(),e=0;e<n.length;e++){var u=n[e].A;wn(t,2===u.c?u.s:qn(u.z,r.u))}return t}}(t.y,r);n=Pn(n,t.w);for(var u=t.x,a=0;a<u.length;a++){var i=u[a],f=i.A,c=2===f.c?f.s:qn(f.z,r.u);n.insertBefore(c,n.childNodes[i.r])}return e&&wn(n,e),n}(n,r);case 5:return r.s(n);default:R(10)}}var Gn=u(function(n,r,t,e){return function(n,r,t,e,u,i){var f=a(Q,n,V(r?r.flags:void 0));Yr(f)||R(2);var c={},o=(f=t(f.a)).a,b=i(v,o),s=function(n,r){var t;for(var e in vn){var u=vn[e];u.a&&((t=t||{})[e]=u.a(e,r)),n[e]=ln(u,r)}return t}(c,v);function v(n,r){b(o=(f=a(e,n,o)).a,r),gn(c,f.b,u(o))}return gn(c,f.b,u(o)),s?{ports:s}:{}}(r,e,n.a$,n.a8,n.a6,function(r,t){var u=n.a9,f=e.node,c=function n(r){if(3===r.nodeType)return yn(r.textContent);if(1!==r.nodeType)return yn("");for(var t=$,e=r.attributes,u=e.length;u--;){var f=e[u];t=g(a(En,f.name,f.value),t)}var c=r.tagName.toLowerCase(),o=$,b=r.childNodes;for(u=b.length;u--;)o=g(n(b[u]),o);return i(kn,c,t,o)}(f);return function(n,r){r(n);var t=0;function e(){t=1===t?0:(Hn(e),r(n),1)}return function(u,a){n=u,a?(r(n),2===t&&(t=1)):(0===t&&Hn(e),t=2)}}(t,function(n){var t=u(n),e=function(n,r){var t=[];return Sn(n,r,t,0),t}(c,t);f=Dn(f,c,e,r),c=t})})}),Hn=("undefined"!==typeof cancelAnimationFrame&&cancelAnimationFrame,"undefined"!==typeof requestAnimationFrame?requestAnimationFrame:function(n){return setTimeout(n,1e3/60)});"undefined"!==typeof document&&document,"undefined"!==typeof window&&window;var Kn,Un=t(function(n){return n}),Vn=p,nr=e(function(n,r,t){for(;;){if(-2===t.$)return r;var e=t.d,u=n,a=i(n,t.b,t.c,i(nr,n,r,t.e));n=u,r=a,t=e}}),rr=function(n){return i(nr,e(function(n,r,t){return a(Vn,v(n,r),t)}),$,n)},tr=N,er=e(function(n,r,e){var u=e.c,a=e.d,f=t(function(r,t){return i(tr,r.$?n:f,t,r.a)});return i(tr,f,i(tr,n,r,a),u)}),ur=function(n){return i(er,Vn,$,n)},ar=function(n){return{$:1,a:n}},ir=t(function(n,r){return{$:3,a:n,b:r}}),fr=t(function(n,r){return{$:0,a:n,b:r}}),cr=t(function(n,r){return{$:1,a:n,b:r}}),or=function(n){return{$:0,a:n}},br=function(n){return{$:2,a:n}},sr=B,vr=function(n){return{$:0,a:n}},lr={$:1},dr=U,hr=function(n){return n+""},$r=e(function(n,r,t){for(;;){if(!t.b)return r;var e=t.b,u=n,i=a(n,t.a,r);n=u,r=i,t=e}}),gr=function(n){return i($r,t(function(n,r){return r+1}),0,n)},pr=w,mr=e(function(n,r,t){for(;;){if(s(n,r)>=1)return t;var e=n,u=r-1,i=a(Vn,r,t);n=e,r=u,t=i}}),wr=t(function(n,r){return i(mr,n,r,$)}),yr=function(n){return i($r,Vn,$,n)},kr=u(function(n,r,t,e){return{$:0,a:n,b:r,c:t,d:e}}),Ar=[],_r=T,jr=t(function(n,r){return F(r)/F(n)}),Er=_r(a(jr,2,32)),Nr=f(kr,0,Er,Ar,Ar),Cr=y,qr=function(n){return{$:1,a:n}},Rr=x,Br=function(n){return n.length},Or=t(function(n,r){return s(n,r)>0?n:r}),Lr=O,Mr=function(n){return{$:0,a:n}},Tr=k,xr=t(function(n,r){for(;;){var t=a(Tr,32,n),e=t.b,u=a(Vn,Mr(t.a),r);if(!e.b)return yr(u);n=e,r=u}}),Fr=t(function(n,r){for(;;){var t=_r(r/32);if(1===t)return a(Tr,32,n).a;n=a(xr,n,$),r=t}}),Sr=t(function(n,r){if(r.b){var t=32*r.b,e=Rr(a(jr,32,t-1)),u=n?yr(r.e):r.e,i=a(Fr,u,r.b);return f(kr,Br(r.d)+t,a(Or,5,e*Er),i,r.d)}return f(kr,Br(r.d),Er,Ar,r.d)}),Jr=r(5,Kn=function(n,r,t,e,u){for(;;){if(r<0)return a(Sr,!1,{e:e,b:t/32|0,d:u});var f=qr(i(Cr,32,r,n));n=n,r-=32,t=t,e=a(Vn,f,e),u=u}},function(n){return function(r){return function(t){return function(e){return function(u){return Kn(n,r,t,e,u)}}}}}),Wr=t(function(n,r){if(n>0){var t=n%32;return e=Jr,u=r,a=n-t-32,f=n,c=$,o=i(Cr,t,n-t,r),5===e.a?e.f(u,a,f,c,o):e(u)(a)(f)(c)(o)}var e,u,a,f,c,o;return Nr}),Yr=function(n){return!n.$},zr=I,Ir=function(n){return{$:0,a:n}},Qr=function(n){switch(n.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Xr=function(n){return n.length},Dr=tn,Pr=Dr(0),Zr=u(function(n,r,t,e){if(e.b){var u=e.a,c=e.b;if(c.b){var o=c.a,b=c.b;if(b.b){var s=b.a,v=b.b;if(v.b){var l=v.b;return a(n,u,a(n,o,a(n,s,a(n,v.a,t>500?i($r,n,r,yr(l)):f(Zr,n,r,t+1,l)))))}return a(n,u,a(n,o,a(n,s,r)))}return a(n,u,a(n,o,r))}return a(n,u,r)}return r}),Gr=e(function(n,r,t){return f(Zr,n,r,0,t)}),Hr=t(function(n,r){return i(Gr,t(function(r,t){return a(Vn,n(r),t)}),$,r)}),Kr=un,Ur=t(function(n,r){return a(Kr,function(r){return Dr(n(r))},r)}),Vr=e(function(n,r,t){return a(Kr,function(r){return a(Kr,function(t){return Dr(a(n,r,t))},t)},r)}),nt=hn,rt=t(function(n,r){var t=r;return function(n){return en(function(r){r(tn(fn(n)))})}(a(Kr,nt(n),t))});vn.Task={b:Pr,c:e(function(n,r){return a(Ur,function(){return 0},(t=a(Hr,rt(n),r),i(Gr,Vr(Vn),Dr($),t)));var t}),d:e(function(){return Dr(0)}),e:t(function(n,r){return a(Ur,n,r)}),f:void 0};var tt,et,ut,at,it,ft,ct=(ft="Task",function(n){return{$:1,k:ft,l:n}}),ot=t(function(n,r){return ct(a(Ur,n,r))}),bt=Gn,st=V,vt=V,lt=function(n){return a(dr,0,(r=m([(e=n.q,v("sender",vt(e))),v("receives",vt(n.p)),v("amout",st(n.n))]),V(i($r,t(function(n,r){return i(rn,n.a,n.b,r)}),{},r))));var r,e},dt=function(n){return r(8,n,function(r){return function(t){return function(e){return function(u){return function(a){return function(i){return function(f){return function(c){return n(r,t,e,u,a,i,f,c)}}}}}}}})}(function(n,r,t,e,u,a,i,f){return{aJ:n,aM:r,aO:t,aQ:e,aR:u,aW:a,aX:i,aY:f}}),ht=t(function(n,r){return{$:1,a:n,b:r}}),$t={$:2},gt=function(n){return{$:0,a:n}},pt=t(function(n,r){switch((n>>>31)+(r>>>31)){case 0:return 0;case 2:return 1;default:return 1===(2147483647&n)+(2147483647&r)>>>31?1:0}}),mt=M,wt=L,yt=function(n){return a(mt,a(wt,2,32),n)},kt=t(function(n,r){var t=v(n,r);n:for(;;)switch(t.a.$){case 0:if(t.b.$)break n;return gt(yt(t.a.a+t.b.a));case 1:if(1===t.b.$){var e=t.a,u=e.b,i=t.b,f=i.b,c=u+f;return a(ht,yt(e.a+i.a+a(pt,u,f)),yt(c))}break n;default:break n}return $t}),At=t(function(n,r){return c(dt,a(kt,n.aJ,r.aJ),a(kt,n.aM,r.aM),a(kt,n.aO,r.aO),a(kt,n.aQ,r.aQ),a(kt,n.aR,r.aR),a(kt,n.aW,r.aW),a(kt,n.aX,r.aX),a(kt,n.aY,r.aY))}),_t=t(function(n,r){var t=v(n,r);n:for(;;)switch(t.a.$){case 0:if(t.b.$)break n;return gt(t.a.a&t.b.a);case 1:if(1===t.b.$){var e=t.a,u=t.b;return a(ht,e.a&u.a,e.b&u.b)}break n;default:break n}return $t}),jt=function(n){switch(n){case 0:return 0;case 1:return 1;case 2:return 3;case 3:return 7;case 4:return 15;case 5:return 31;case 6:return 63;case 7:return 127;case 8:return 255;case 9:return 511;case 10:return 1023;case 11:return 2047;case 12:return 4095;case 13:return 8191;case 14:return 16383;case 15:return 32767;case 16:return 65535;case 17:return 131071;case 18:return 262143;case 19:return 524287;case 20:return 1048575;case 21:return 2097151;case 22:return 4194303;case 23:return 8388607;case 24:return 16777215;case 25:return 33554431;case 26:return 67108863;case 27:return 134217727;case 28:return 268435455;case 29:return 536870911;case 30:return 1073741823;case 31:return 2147483647;default:return 4294967295}},Et=t(function(n,r){return n<32?r>>>n:0}),Nt=t(function(n,r){var t=r.a,e=r.b;return n>32?v(0,a(Et,n-32,t)):v(a(Et,n,t),a(Et,n,e)+((jt(n)&t)<<32-n))}),Ct=t(function(n,r){return sr((jt(n)&r)<<32-n)}),qt=t(function(n,r){switch(r.$){case 0:var t=r.a;return gt(i(Ct,e=a(mt,32,n),t,a(Et,e,t)));case 1:var e,u=r.a,f=r.b;if((e=a(mt,64,n))>32){var c=e-32,o=a(Nt,c,v(f,u)),b=o.b;return a(ht,i(Ct,c,u,o.a),b)}var s=a(Nt,e,v(u,f));return b=s.b,a(ht,i(Ct,e,f,s.a),b);default:return $t}}),Rt=t(function(n,r){var t=v(n,r);n:for(;;)switch(t.a.$){case 0:if(t.b.$)break n;return gt(t.a.a^t.b.a);case 1:if(1===t.b.$){var e=t.a,u=t.b;return a(ht,e.a^u.a,e.b^u.b)}break n;default:break n}return $t}),Bt=t(function(n,r){n:for(;;)switch(n){case 0:n=1,r=r;continue n;case 2:n=3,r=r;continue n;case 1:return a(Rt,a(qt,22,r),a(Rt,a(qt,13,r),a(qt,2,r)));case 3:return a(Rt,a(qt,39,r),a(Rt,a(qt,34,r),a(qt,28,r)));case 4:default:n=3,r=r;continue n}}),Ot=t(function(n,r){n:for(;;)switch(n){case 0:n=1,r=r;continue n;case 2:n=3,r=r;continue n;case 1:return a(Rt,a(qt,25,r),a(Rt,a(qt,11,r),a(qt,6,r)));case 3:return a(Rt,a(qt,41,r),a(Rt,a(qt,18,r),a(qt,14,r)));case 4:default:n=3,r=r;continue n}}),Lt=e(function(n,r,t){var e=r.a,u=r.b,i=t.aJ,f=t.aM,o=t.aO,b=t.aQ,s=t.aR,v=t.aW,l=t.aX,d=t.aY,h=a(Ot,n,s),$=a(kt,a(Bt,n,i),a(Rt,a(_t,f,o),a(Rt,a(_t,i,o),a(_t,i,f)))),g=a(Rt,a(_t,l,function(n){switch(n.$){case 0:return gt(~n.a);case 1:return a(ht,~n.a,~n.b);default:return $t}}(s)),a(_t,s,v)),p=a(kt,u,a(kt,e,a(kt,g,a(kt,h,d))));return c(dt,a(kt,p,$),i,f,o,a(kt,b,p),s,v,l)}),Mt=function(n){n:for(;;)switch(n){case 0:n=1;continue n;case 1:return m([gt(1116352408),gt(1899447441),gt(3049323471),gt(3921009573),gt(961987163),gt(1508970993),gt(2453635748),gt(2870763221),gt(3624381080),gt(310598401),gt(607225278),gt(1426881987),gt(1925078388),gt(2162078206),gt(2614888103),gt(3248222580),gt(3835390401),gt(4022224774),gt(264347078),gt(604807628),gt(770255983),gt(1249150122),gt(1555081692),gt(1996064986),gt(2554220882),gt(2821834349),gt(2952996808),gt(3210313671),gt(3336571891),gt(3584528711),gt(113926993),gt(338241895),gt(666307205),gt(773529912),gt(1294757372),gt(1396182291),gt(1695183700),gt(1986661051),gt(2177026350),gt(2456956037),gt(2730485921),gt(2820302411),gt(3259730800),gt(3345764771),gt(3516065817),gt(3600352804),gt(4094571909),gt(275423344),gt(430227734),gt(506948616),gt(659060556),gt(883997877),gt(958139571),gt(1322822218),gt(1537002063),gt(1747873779),gt(1955562222),gt(2024104815),gt(2227730452),gt(2361852424),gt(2428436474),gt(2756734187),gt(3204031479),gt(3329325298)]);case 2:n=3;continue n;case 3:return m([a(ht,1116352408,3609767458),a(ht,1899447441,602891725),a(ht,3049323471,3964484399),a(ht,3921009573,2173295548),a(ht,961987163,4081628472),a(ht,1508970993,3053834265),a(ht,2453635748,2937671579),a(ht,2870763221,3664609560),a(ht,3624381080,2734883394),a(ht,310598401,1164996542),a(ht,607225278,1323610764),a(ht,1426881987,3590304994),a(ht,1925078388,4068182383),a(ht,2162078206,991336113),a(ht,2614888103,633803317),a(ht,3248222580,3479774868),a(ht,3835390401,2666613458),a(ht,4022224774,944711139),a(ht,264347078,2341262773),a(ht,604807628,2007800933),a(ht,770255983,1495990901),a(ht,1249150122,1856431235),a(ht,1555081692,3175218132),a(ht,1996064986,2198950837),a(ht,2554220882,3999719339),a(ht,2821834349,766784016),a(ht,2952996808,2566594879),a(ht,3210313671,3203337956),a(ht,3336571891,1034457026),a(ht,3584528711,2466948901),a(ht,113926993,3758326383),a(ht,338241895,168717936),a(ht,666307205,1188179964),a(ht,773529912,1546045734),a(ht,1294757372,1522805485),a(ht,1396182291,2643833823),a(ht,1695183700,2343527390),a(ht,1986661051,1014477480),a(ht,2177026350,1206759142),a(ht,2456956037,344077627),a(ht,2730485921,1290863460),a(ht,2820302411,3158454273),a(ht,3259730800,3505952657),a(ht,3345764771,106217008),a(ht,3516065817,3606008344),a(ht,3600352804,1432725776),a(ht,4094571909,1467031594),a(ht,275423344,851169720),a(ht,430227734,3100823752),a(ht,506948616,1363258195),a(ht,659060556,3750685593),a(ht,883997877,3785050280),a(ht,958139571,3318307427),a(ht,1322822218,3812723403),a(ht,1537002063,2003034995),a(ht,1747873779,3602036899),a(ht,1955562222,1575990012),a(ht,2024104815,1125592928),a(ht,2227730452,2716904306),a(ht,2361852424,442776044),a(ht,2428436474,593698344),a(ht,2756734187,3733110249),a(ht,3204031479,2999351573),a(ht,3329325298,3815920427),a(ht,3391569614,3928383900),a(ht,3515267271,566280711),a(ht,3940187606,3454069534),a(ht,4118630271,4000239992),a(ht,116418474,1914138554),a(ht,174292421,2731055270),a(ht,289380356,3203993006),a(ht,460393269,320620315),a(ht,685471733,587496836),a(ht,852142971,1086792851),a(ht,1017036298,365543100),a(ht,1126000580,2618297676),a(ht,1288033470,3409855158),a(ht,1501505948,4234509866),a(ht,1607167915,987167468),a(ht,1816402316,1246189591)]);case 4:default:n=3;continue n}},Tt=e(function(n,r,e){return i($r,Lt(n),r,i(pr,t(function(n,r){return v(n,r)}),Mt(n),ur(e)))}),xt=e(function(n,r,t){for(;;){var e=a(Tr,32,n),u=e.a,i=e.b;if(s(Br(u),32)<0)return a(Sr,!0,{e:r,b:t,d:u});n=i,r=a(Vn,qr(u),r),t+=1}}),Ft=function(n){return n.b?i(xt,n,$,0):Nr},St=q,Jt=C,Wt=t(function(n,r){var t=Br(n),e=32-Br(r.d)-t,u=i(St,32,r.d,n);return e<0?{e:a(Vn,qr(u),r.e),b:r.b+1,d:i(Jt,e,t,n)}:e?{e:r.e,b:r.b,d:u}:{e:a(Vn,qr(u),r.e),b:r.b+1,d:Ar}}),Yt=4294967295>>>32-Er,zt=j,It=function(n){return[n]},Qt=A,Xt=_,Dt=u(function(n,r,t,e){var u=Yt&r>>>n;if(s(u,Br(e))>-1){if(5===n)return a(zt,qr(t),e);var c=Mr(f(Dt,n-Er,r,t,Ar));return a(zt,c,e)}var o=a(Qt,u,e);if(o.$)return c=Mr(f(Dt,n-Er,r,t,It(o))),i(Xt,u,c,e);c=Mr(f(Dt,n-Er,r,t,o.a));return i(Xt,u,c,e)}),Pt=t(function(n,r){var t=r.a,e=r.b,u=r.c,a=Br(r.d),i=Br(n),c=t+(i-a);if(o(i,32)){if(s(c>>>Er,1<<e)>0){var b=e+Er,v=f(Dt,b,t,n,It(Mr(u)));return f(kr,c,b,v,Ar)}return f(kr,c,e,f(Dt,e,t,n,u),Ar)}return f(kr,c,e,u,n)}),Zt=t(function(n,r){var t=r.d,e=Br(n),u=32-Br(t)-e,f=a(Pt,i(St,32,t,n),r);return u<0?a(Pt,i(Jt,u,e,n),f):f}),Gt=E,Ht=t(function(n,r){var e,u,f,c,o,b=r.c,v=r.d;return s(r.a,128)<1?a(Zt,v,i(Gt,e=t(function(n,r){return n.$?a(Zt,n.a,r):i(Gt,e,r,n.a)}),n,b)):a(Sr,!0,a(Wt,v,i(Gt,e=t(function(n,r){return n.$?a(Wt,n.a,r):i(Gt,e,r,n.a)}),(u=n.a,f=n.c,c=n.d,{e:i(Gt,o=t(function(n,r){return n.$?a(Vn,n,r):i(Gt,o,r,n.a)}),$,f),b:u/32|0,d:c}),b)))}),Kt=e(function(n,r,t){return r(n(t))}),Ut=e(function(n,r,t){for(;;){var e=a(Qt,Yt&r>>>n,t);if(e.$)return a(Qt,Yt&r,e.a);n-=Er,r=r,t=e.a}}),Vt=t(function(n,r){var t=r.a,e=r.b,u=r.c,f=r.d;return n<0||s(n,t)>-1?lr:s(n,function(n){return n>>>5<<5}(t))>-1?vr(a(Qt,Yt&n,f)):vr(i(Ut,e,n,u))}),ne=t(function(n,r){return r.$?n:r.a}),re=function(n){return a(Kt,Vt(n),ne($t))},te=t(function(n,r){switch(r.$){case 0:return gt(a(Et,n,r.a));case 1:var t=a(Nt,n,v(r.a,r.b));return a(ht,t.a,t.b);default:return $t}}),ee=t(function(n,r){n:for(;;)switch(n){case 0:n=1,r=r;continue n;case 2:n=3,r=r;continue n;case 1:return a(Rt,a(te,3,r),a(Rt,a(qt,18,r),a(qt,7,r)));case 3:return a(Rt,a(te,7,r),a(Rt,a(qt,8,r),a(qt,1,r)));case 4:default:n=3,r=r;continue n}}),ue=t(function(n,r){n:for(;;)switch(n){case 0:n=1,r=r;continue n;case 2:n=3,r=r;continue n;case 1:return a(Rt,a(te,10,r),a(Rt,a(qt,19,r),a(qt,17,r)));case 3:return a(Rt,a(te,6,r),a(Rt,a(qt,61,r),a(qt,19,r)));case 4:default:n=3,r=r;continue n}}),ae=e(function(n,r,t){var e=a(ue,n,a(re,r-2,t)),u=a(ee,n,a(re,r-15,t));return a(Ht,t,Ft(m([a(kt,e,a(kt,a(re,r-7,t),a(kt,u,a(re,r-16,t))))])))}),ie=t(function(n,r){var t=gr(Mt(n));return i($r,ae(n),Ft(r),a(wr,16,t-1))}),fe=t(function(n,r){n:for(;;){if(n>0){if(r.b){n-=1,r=r.b;continue n}return r}return r}}),ce=function(n){n:for(;;)switch(n){case 0:n=1;continue n;case 1:return 64;case 2:n=3;continue n;case 3:return 128;case 4:default:n=3;continue n}},oe=function(n){n:for(;;)switch(n){case 0:n=1;continue n;case 1:return 0;case 2:n=3;continue n;case 3:return 1;case 4:default:n=3;continue n}},be=e(function(n,r,t){n:for(;;){if(n>0){if(r.b){var e=r.a;n-=1,r=r.b,t=a(Vn,e,t);continue n}return t}return t}}),se=t(function(n,r){return yr(i(be,n,r,$))}),ve=e(function(n,r,t){if(r>0){var e=v(r,t);n:for(;;){r:for(;;){if(!e.b.b)return t;if(!e.b.b.b){if(1===e.a)break n;break r}switch(e.a){case 1:break n;case 2:var u=e.b;return m([u.a,u.b.a]);case 3:if(e.b.b.b.b){var f=e.b,c=f.b;return m([f.a,c.a,c.b.a])}break r;default:if(e.b.b.b.b&&e.b.b.b.b.b){var o=e.b,b=o.b,s=b.b,l=s.b,d=l.b;return a(Vn,o.a,a(Vn,b.a,a(Vn,s.a,a(Vn,l.a,n>1e3?a(se,r-4,d):i(ve,n+1,r-4,d)))))}break r}}return t}return m([e.b.a])}return $}),le=t(function(n,r){return i(ve,0,n,r)}),de=t(function(n,r){var t=function(n){return ce(n)/(oe(n)?8:4)|0}(n),e=a(le,t,r);return v(e.b?vr(e):lr,a(fe,t,r))}),he=e(function(n,r,t){for(;;){var e=a(de,n,r);if(1===e.a.$)return t;var u=e.b,f=a(At,t,i(Tt,n,t,a(ie,n,e.a.a)));n=n,r=u,t=f}}),$e=t(function(n,r){return r.b?i(Gr,Vn,r,n):n}),ge=function(n){return i(Gr,$e,$,n)},pe=t(function(n,r){return ge(a(Hr,n,r))}),me=function(n){if(1===n.$){var r=n.b;return m([gt(n.a),gt(r)])}return m([n])},we=t(function(n,r){var t=r.aJ,e=r.aM,u=r.aO,i=r.aQ,f=r.aR,c=r.aW,o=r.aX,b=r.aY;switch(n){case 0:return Ft(m([t,e,u,i,f,c,o]));case 1:return Ft(m([t,e,u,i,f,c,o,b]));case 2:return Ft(m([t,e,u,i,f,c]));case 3:return Ft(m([t,e,u,i,f,c,o,b]));case 4:return Ft(a(le,7,a(pe,me,m([t,e,u,i]))));default:return Ft(m([t,e,u,i]))}}),ye=t(function(n,r){return a(we,n,i(he,n,ur(r),function(n){switch(n){case 0:return c(dt,gt(3238371032),gt(914150663),gt(812702999),gt(4144912697),gt(4290775857),gt(1750603025),gt(1694076839),gt(3204075428));case 1:return c(dt,gt(1779033703),gt(3144134277),gt(1013904242),gt(2773480762),gt(1359893119),gt(2600822924),gt(528734635),gt(1541459225));case 2:return c(dt,a(ht,3418070365,3238371032),a(ht,1654270250,914150663),a(ht,2438529370,812702999),a(ht,355462360,4144912697),a(ht,1731405415,4290775857),a(ht,2394180231,1750603025),a(ht,3675008525,1694076839),a(ht,1203062813,3204075428));case 3:return c(dt,a(ht,1779033703,4089235720),a(ht,3144134277,2227873595),a(ht,1013904242,4271175723),a(ht,2773480762,1595750129),a(ht,1359893119,2917565137),a(ht,2600822924,725511199),a(ht,528734635,4215389547),a(ht,1541459225,327033209));case 4:return c(dt,a(ht,2352822216,424955298),a(ht,1944164710,2312950998),a(ht,502970286,855612546),a(ht,1738396948,1479516111),a(ht,258812777,2077511080),a(ht,2011393907,79989058),a(ht,1067287976,1780299464),a(ht,286451373,2446758561));default:return c(dt,a(ht,573645204,4230739756),a(ht,2673172387,3360449730),a(ht,596883563,1867755857),a(ht,2520282905,1497426621),a(ht,2519219938,2827943907),a(ht,3193839141,1401305490),a(ht,721525244,746961066),a(ht,246885852,2177182882))}}(n)))}),ke=u(function(n,r,t,e){return{$:0,a:n,b:r,c:t,d:e}}),Ae=function(n){var r=n.a,t=n.b;return n.d+n.c*a(wt,2,8)+t*a(wt,2,16)+r*a(wt,2,24)},_e=function(n){n:for(;;){if(n.b){if(n.b.b){if(n.b.b.b){if(n.b.b.b.b){if(n.b.b.b.b.b)break n;var r=n.b,t=r.b;return f(ke,n.a,r.a,t.a,t.b.a)}var e=n.b;return f(ke,n.a,e.a,e.b.a,0)}return f(ke,n.a,n.b.a,0,0)}return f(ke,n.a,0,0,0)}break n}return f(ke,0,0,0,0)},je=t(function(n,r){return a(Pt,a(zt,n,r.d),r)}),Ee=e(function(n,r,t){n:for(;;){var e=v(n,r);r:for(;;){if(e.a){if(e.b.b){if(e.b.b.b&&e.b.b.b.b&&e.b.b.b.b.b&&e.b.b.b.b.b.b&&e.b.b.b.b.b.b.b&&e.b.b.b.b.b.b.b.b&&e.b.b.b.b.b.b.b.b.b){var u=e.b,i=u.b,c=i.b,o=c.b,b=o.b,s=(h=b.a,b.b),l=($=s.a,s.b),d=(g=l.a,l.b);p=d.a,n=n,r=A=d.b,t=a(je,a(ht,Ae(f(ke,u.a,i.a,c.a,o.a)),Ae(f(ke,h,$,g,p))),t);continue n}return a(je,a(ht,Ae(_e(a(le,4,A=e.b))),Ae(_e(a(fe,4,A)))),t)}break r}if(e.b.b){if(e.b.b.b&&e.b.b.b.b&&e.b.b.b.b.b){var h,$,g,p,m=e.b,w=m.b,y=w.b,k=y.b;n=n,r=A=k.b,t=a(je,gt(Ae(f(ke,h=m.a,$=w.a,g=y.a,p=k.a))),t);continue n}var A;return a(je,gt(Ae(_e(A=e.b))),t)}break r}return t}}),Ne=t(function(n,r){return i(Ee,n,r,Nr)}),Ce=function(n){n:for(;;)switch(n){case 0:n=1;continue n;case 1:return 8;case 2:n=3;continue n;case 3:return 16;case 4:default:n=3;continue n}},qe=a(Kt,ce,Lr(8)),Re=t(function(n,r){var t=qe(n);return a(mt,t,t-1-8*Ce(n)-a(mt,t,r))}),Be=t(function(n,r){return n>4?a($e,a(Be,n-4,r/a(wt,2,32)|0),a(Be,4,4294967295&r)):a(Hr,function(t){return 255&r>>>(n-t)*a(wt,2,3)},a(wr,1,n))}),Oe=e(function(n,r,t){for(;;){if(r<=0)return n;n=a(Vn,t,n),r-=1,t=t}}),Le=t(function(n,r){return i(Oe,$,n,r)}),Me=t(function(n,r){return ge(m([m([128]),a(Le,(a(Re,n,r)-7)/8|0,0),a(Be,Ce(n),r)]))}),Te=t(function(n,r){return a($e,r,a(Me,n,8*gr(r)))}),xe=function(n){return a(Kt,Te(n),a(Kt,Ne(oe(n)),ye(n)))},Fe=J,Se=a(Kt,function(n){return i(Fe,Vn,$,n)},a($r,t(function(n,r){return a($e,r,m((u=55296>(e=(t=n).charCodeAt(0))||e>56319?e:1024*(e-55296)+t.charCodeAt(1)-56320+65536)<128?[u]:u<2048?[192|(1984&u)>>>6,128|63&u]:[224|(61440&u)>>>12,128|(4032&u)>>>6,128|63&u]));var t,e,u}),$)),Je=e(function(n,r,e){var u=e.c,a=e.d,f=t(function(r,t){return i(Gt,r.$?n:f,t,r.a)});return i(Gt,n,i(Gt,f,r,u),a)}),We=S,Ye=t(function(n,r){return i($r,function(n){return We(l((t=(e=15&r>>>n*a(wt,2,2))<10?e+48:e+97-10)<0||1114111<t?"\ufffd":t>65535?String.fromCharCode(Math.floor((t-=65536)/1024)+55296,t%1024+56320):String.fromCharCode(t)));var t,e},"",a(wr,0,n-1))}),ze=(tt=function(n){switch(n.$){case 0:return a(Ye,8,n.a);case 1:var r=n.b;return h(a(Ye,8,n.a),a(Ye,8,r));default:return"M"}},a(Je,t(function(n,r){return h(r,tt(n))}),"")),Ie=u(function(n,r,t,e){return u=h(hr(n),h(r,h(lt(t),e))),ze(a(xe,0,Se(u)));var u}),Qe={a:et={n:0,p:"",q:""},s:f(Ie,0,"0",et,"0"),B:0,y:"0",E:"0"},Xe={n:0,p:"",q:""},De=$n($),Pe=v({r:(ut=Qe,m([ut])),a:Xe,R:!1,Z:!1,_:!1},De),Ze=$n($),Ge=a(ot,function(n){return{$:0,a:n}},(at=function(n){return n},en(function(n){n(tn(at(Date.now())))}))),He={a:Xe,s:"",B:0,y:"",E:""},Ke=e(function(n,r,t){var e=a(ne,He,a(Vt,t-1,Ft(n))),u=a(ne,He,a(Vt,t,Ft(n)));return s(t,r)>=0||!!o(u.y,e.s)&&!!o(u.s,f(Ie,u.B,u.E,u.a,u.y))&&i(Ke,n,r,t+1)}),Ue=function(n){return!n},Ve=t(function(n,r){return d(n,{n:""===r?0:a(ne,n.n,function(n){for(var r=0,t=n.charCodeAt(0),e=43==t||45==t?1:0,u=e;u<n.length;++u){var a=n.charCodeAt(u);if(a<48||57<a)return lr;r=10*r+a-48}return u==e?lr:vr(45==t?-r:r)}(r))})}),nu=t(function(n,r){return d(n,{p:r})}),ru=t(function(n,r){return d(n,{q:r})}),tu=function(n){return n.b?vr(n.a):lr},eu=t(function(n,r){var t=a(ne,He,tu(yr(n.r))).s,e=gr(n.r),u={n:n.a.n,p:n.a.p,q:n.a.q};return{a:u,s:f(Ie,e,r,u,t),B:e,y:t,E:r}}),uu=t(function(n,r){var t=a(eu,n,hr(r)),e=yr(n.r);return yr(a(Vn,t,e))}),au=t(function(n,r){switch(n.$){case 1:return v(d(r,{a:a(ru,r.a,n.a)}),De);case 2:return v(d(r,{a:a(nu,r.a,n.a)}),De);case 3:return v(d(r,{a:a(Ve,r.a,n.a)}),De);case 4:return v(r,Ge);case 0:return v(d(r,{r:a(uu,r,n.a)}),De);case 5:var t=r.r,e=gr(t);return v(d(r,{Z:i(Ke,t,e,1),_:!0}),De);default:return v(d(r,{R:!r.R}),De)}}),iu=function(n){return{$:3,a:n}},fu=function(n){return{$:2,a:n}},cu=function(n){return{$:1,a:n}},ou={$:4},bu=kn("br"),su=kn("button"),vu=t(function(n,r){return a(jn,n,vt(r))}),lu=vu("className"),du=V,hu=t(function(n,r){return a(jn,n,du(r))})("disabled"),$u=vu("htmlFor"),gu=kn("form"),pu=kn("h3"),mu=vu("id"),wu=kn("input"),yu=t(function(n,r){for(;;){if(!r.b)return!1;var t=r.b;if(n(r.a))return!0;n=n,r=t}}),ku=e(function(n,r,t){return n(r(t))}),Au=t(function(n,r){return!a(yu,a(ku,Ue,n),r)}),_u=kn("label"),ju=vu("name"),Eu=_n,Nu=t(function(n,r){return a(Eu,n,{$:0,a:r})}),Cu=function(n){return a(Nu,"click",Ir(n))},qu=function(n){return v(n,!0)},Ru=t(function(n,r){return a(Eu,n,{$:1,a:r})}),Bu=z,Ou=Y,Lu=a(t(function(n,r){return i(Gr,Bu,r,n)}),m(["target","value"]),Ou),Mu=function(n){return a(Ru,"input",a(zr,qu,a(zr,n,Lu)))},Tu=yn,xu=vu("type"),Fu=vu("value"),Su=kn("div"),Ju=kn("h1"),Wu={$:6},Yu=kn("li"),zu=function(n){return m([a(Yu,$,m([Tu("index: "+hr(n.B))])),a(Yu,$,m([Tu("timestamp: "+n.E)])),a(Yu,$,m([Tu("data: "+lt(n.a))])),a(Yu,$,m([Tu("previousHash: "+n.y)])),a(Yu,$,m([Tu("hash: "+n.s)]))])},Iu=kn("ul"),Qu=t(function(n,r){return a(Su,m([lu("ba b--mid-gray br2 pa3")]),m([a(su,m([Cu(Wu)]),m([Tu("show blockChain")])),a(Su,$,r?function(n){return a(Hr,function(n){return a(Iu,m([lu("ml5 list pl0 tl")]),zu(n))},n)}(n):$)]))}),Xu={a:{n:0,p:"",q:""},s:"",B:0,y:"",E:""},Du={$:5},Pu=kn("p"),Zu=t(function(n,r){return a(Pu,$,m(n?r?[Tu("valid")]:[Tu("not valid")]:[Tu("not validated")]))});it={Main:{init:bt({a$:function(){return Pe},a6:Un(Ze),a8:au,a9:function(n){return a(Su,m([lu("pa5")]),m([a(Ju,$,m([Tu("Simple Block chain")])),(t=n.r,a(Su,m([lu("ba b--mid-gray br2 pa3 mb4")]),m([a(pu,m([lu("f3 f3-m")]),m([Tu("last block")])),a(Iu,m([lu("ml5 list pl0 tl")]),zu(function(n){return r=tu(yr(n)),a(ne,Xu,r);var r}(t)))]))),(r=n.a,a(gu,m([lu("ba b--mid-gray pa3 mb4")]),m([a(pu,m([lu("f3 f3-m")]),m([Tu("New block")])),a(_u,m([$u("sender")]),m([Tu("sender")])),a(bu,$,$),a(wu,m([mu("sender"),ju("sender"),xu("text"),Mu(cu),Fu(r.q)]),$),a(bu,$,$),a(_u,m([$u("recive")]),m([Tu("recive")])),a(bu,$,$),a(wu,m([mu("recive"),ju("recive"),xu("text"),Mu(fu),Fu(r.p)]),$),a(bu,$,$),a(_u,m([$u("amount")]),m([Tu("amount")])),a(bu,$,$),a(wu,m([mu("amount"),ju("amount"),xu("text"),Mu(iu),Fu(hr(r.n))]),$),a(bu,$,$),a(su,m([xu("button"),Cu(ou),hu(!function(n){return a(Au,function(n){return n},m([Xr(n.q)>0,Xr(n.p)>0,n.n>0]))}(r)),lu("mt4")]),m([Tu("Submit")]))]))),function(n){return a(Su,m([lu("ba b--mid-gray br2 pa3 mb4")]),m([a(su,m([Cu(Du)]),m([Tu("validate blockchain")])),a(Zu,n._,n.Z)]))}(n),a(Qu,n.r,n.R)]));var r,t}})(Ir(0))(0)}},n.Elm?function n(r,t){for(var e in t)e in r?"init"==e?R(6):n(r[e],t[e]):r[e]=t[e]}(n.Elm,it):n.Elm=it}(this)},function(n,r,t){t(3),n.exports=t(11)},,,,,,,,function(){},function(n,r,t){"use strict";t.r(r),t(10);var e=t(1);"localhost"!==window.location.hostname&&"[::1]"!==window.location.hostname&&window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/),e.Elm.Main.init({node:document.getElementById("root")}),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}],[[2,1,2]]]);
//# sourceMappingURL=main.a8c9c366.chunk.js.map