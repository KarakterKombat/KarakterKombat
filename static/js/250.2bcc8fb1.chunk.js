"use strict";(self.webpackChunkkarakter_fi=self.webpackChunkkarakter_fi||[]).push([[250],{1637:(e,r,t)=>{t.d(r,{A:()=>M});var n=t(7528),a=t(8587),o=t(8168),i=t(5043),c=t(8387),s=t(8610),l=t(3290),u=t(6803),f=t(8206),d=t(4535),h=t(2532),p=t(2372);function v(e){return(0,p.Ay)("MuiCircularProgress",e)}(0,h.A)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var y,m,b,w,g=t(579);const k=["className","color","disableShrink","size","style","thickness","value","variant"];let x,S,A,C;const P=44,E=(0,l.i7)(x||(x=y||(y=(0,n.A)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),R=(0,l.i7)(S||(S=m||(m=(0,n.A)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),N=(0,d.Ay)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],r["color".concat((0,u.A)(t.color))]]}})((e=>{let{ownerState:r,theme:t}=e;return(0,o.A)({display:"inline-block"},"determinate"===r.variant&&{transition:t.transitions.create("transform")},"inherit"!==r.color&&{color:(t.vars||t).palette[r.color].main})}),(e=>{let{ownerState:r}=e;return"indeterminate"===r.variant&&(0,l.AH)(A||(A=b||(b=(0,n.A)(["\n      animation: "," 1.4s linear infinite;\n    "]))),E)})),_=(0,d.Ay)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),D=(0,d.Ay)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.circle,r["circle".concat((0,u.A)(t.variant))],t.disableShrink&&r.circleDisableShrink]}})((e=>{let{ownerState:r,theme:t}=e;return(0,o.A)({stroke:"currentColor"},"determinate"===r.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===r.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(e=>{let{ownerState:r}=e;return"indeterminate"===r.variant&&!r.disableShrink&&(0,l.AH)(C||(C=w||(w=(0,n.A)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),R)})),M=i.forwardRef((function(e,r){const t=(0,f.b)({props:e,name:"MuiCircularProgress"}),{className:n,color:i="primary",disableShrink:l=!1,size:d=40,style:h,thickness:p=3.6,value:y=0,variant:m="indeterminate"}=t,b=(0,a.A)(t,k),w=(0,o.A)({},t,{color:i,disableShrink:l,size:d,thickness:p,value:y,variant:m}),x=(e=>{const{classes:r,variant:t,color:n,disableShrink:a}=e,o={root:["root",t,"color".concat((0,u.A)(n))],svg:["svg"],circle:["circle","circle".concat((0,u.A)(t)),a&&"circleDisableShrink"]};return(0,s.A)(o,v,r)})(w),S={},A={},C={};if("determinate"===m){const e=2*Math.PI*((P-p)/2);S.strokeDasharray=e.toFixed(3),C["aria-valuenow"]=Math.round(y),S.strokeDashoffset="".concat(((100-y)/100*e).toFixed(3),"px"),A.transform="rotate(-90deg)"}return(0,g.jsx)(N,(0,o.A)({className:(0,c.A)(x.root,n),style:(0,o.A)({width:d,height:d},A,h),ownerState:w,ref:r,role:"progressbar"},C,b,{children:(0,g.jsx)(_,{className:x.svg,ownerState:w,viewBox:"".concat(22," ").concat(22," ").concat(P," ").concat(P),children:(0,g.jsx)(D,{className:x.circle,style:S,ownerState:w,cx:P,cy:P,r:(P-p)/2,fill:"none",strokeWidth:p})})}))}))},2038:(e,r,t)=>{t.d(r,{d:()=>v});var n=t(5043);function a(e,r,t,n){return new(t||(t=Promise))((function(a,o){function i(e){try{s(n.next(e))}catch(e){o(e)}}function c(e){try{s(n.throw(e))}catch(e){o(e)}}function s(e){var r;e.done?a(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(i,c)}s((n=n.apply(e,r||[])).next())}))}function o(e,r){var t,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=r.call(e,i)}catch(e){o=[6,e],n=0}finally{t=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}function i(e){var r="function"==typeof Symbol&&Symbol.iterator,t=r&&e[r],n=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")}function c(e,r){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var n,a,o=t.call(e),i=[];try{for(;(void 0===r||r-- >0)&&!(n=o.next()).done;)i.push(n.value)}catch(e){a={error:e}}finally{try{n&&!n.done&&(t=o.return)&&t.call(o)}finally{if(a)throw a.error}}return i}function s(e,r,t){if(t||2===arguments.length)for(var n,a=0,o=r.length;a<o;a++)!n&&a in r||(n||(n=Array.prototype.slice.call(r,0,a)),n[a]=r[a]);return e.concat(n||Array.prototype.slice.call(r))}function l(e,r,t,n,l){for(var d=[],h=5;h<arguments.length;h++)d[h-5]=arguments[h];return a(this,void 0,void 0,(function(){var a,h,p,v,y,m;return o(this,(function(o){switch(o.label){case 0:o.trys.push([0,12,13,14]),a=i(d),h=a.next(),o.label=1;case 1:if(h.done)return[3,11];switch(typeof(p=h.value)){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,u(e,r,p,t,n,l)];case 3:return o.sent(),[3,10];case 4:return[4,f(p)];case 5:return o.sent(),[3,10];case 6:return[4,p.apply(void 0,s([e,r,t,n,l],c(d),!1))];case 7:return o.sent(),[3,10];case 8:return[4,p];case 9:o.sent(),o.label=10;case 10:return h=a.next(),[3,1];case 11:return[3,14];case 12:return v=o.sent(),y={error:v},[3,14];case 13:try{h&&!h.done&&(m=a.return)&&m.call(a)}finally{if(y)throw y.error}return[7];case 14:return[2]}}))}))}function u(e,r,t,n,i,l){return a(this,void 0,void 0,(function(){var a,u;return o(this,(function(o){switch(o.label){case 0:return a=e.textContent||"",u=function(e,r){var t=c(r).slice(0);return s(s([],c(e),!1),[NaN],!1).findIndex((function(e,r){return t[r]!==e}))}(a,t),[4,d(e,s(s([],c(p(a,r,u)),!1),c(h(t,r,u)),!1),n,i,l)];case 1:return o.sent(),[2]}}))}))}function f(e){return a(this,void 0,void 0,(function(){return o(this,(function(r){switch(r.label){case 0:return[4,new Promise((function(r){return setTimeout(r,e)}))];case 1:return r.sent(),[2]}}))}))}function d(e,r,t,n,s){return a(this,void 0,void 0,(function(){var a,l,u,d,h,p,v,y,m,b,w,g,k;return o(this,(function(x){switch(x.label){case 0:if(a=r,s){for(l=0,u=1;u<r.length;u++)if(d=c([r[u-1],r[u]],2),h=d[0],(p=d[1]).length>h.length||""===p){l=u;break}a=r.slice(l,r.length)}x.label=1;case 1:x.trys.push([1,6,7,8]),v=i(function(e){var r,t,n,a,c,s,l;return o(this,(function(u){switch(u.label){case 0:r=function(e){return o(this,(function(r){switch(r.label){case 0:return[4,{op:function(r){return requestAnimationFrame((function(){return r.textContent=e}))},opCode:function(r){var t=r.textContent||"";return""===e||t.length>e.length?"DELETE":"WRITING"}}];case 1:return r.sent(),[2]}}))},u.label=1;case 1:u.trys.push([1,6,7,8]),t=i(e),n=t.next(),u.label=2;case 2:return n.done?[3,5]:(a=n.value,[5,r(a)]);case 3:u.sent(),u.label=4;case 4:return n=t.next(),[3,2];case 5:return[3,8];case 6:return c=u.sent(),s={error:c},[3,8];case 7:try{n&&!n.done&&(l=t.return)&&l.call(t)}finally{if(s)throw s.error}return[7];case 8:return[2]}}))}(a)),y=v.next(),x.label=2;case 2:return y.done?[3,5]:(m=y.value,b="WRITING"===m.opCode(e)?t+t*(Math.random()-.5):n+n*(Math.random()-.5),m.op(e),[4,f(b)]);case 3:x.sent(),x.label=4;case 4:return y=v.next(),[3,2];case 5:return[3,8];case 6:return w=x.sent(),g={error:w},[3,8];case 7:try{y&&!y.done&&(k=v.return)&&k.call(v)}finally{if(g)throw g.error}return[7];case 8:return[2]}}))}))}function h(e,r,t){var n,a;return void 0===t&&(t=0),o(this,(function(o){switch(o.label){case 0:n=r(e),a=n.length,o.label=1;case 1:return t<a?[4,n.slice(0,++t).join("")]:[3,3];case 2:return o.sent(),[3,1];case 3:return[2]}}))}function p(e,r,t){var n,a;return void 0===t&&(t=0),o(this,(function(o){switch(o.label){case 0:n=r(e),a=n.length,o.label=1;case 1:return a>t?[4,n.slice(0,--a).join("")]:[3,3];case 2:return o.sent(),[3,1];case 3:return[2]}}))}!function(e,r){void 0===r&&(r={});var t=r.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===t&&n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");var v=(0,n.memo)((0,n.forwardRef)((function(e,r){var t=e.sequence,a=e.repeat,o=e.className,i=e.speed,u=void 0===i?40:i,f=e.deletionSpeed,d=e.omitDeletionAnimation,h=void 0!==d&&d,p=e.preRenderFirstString,v=void 0!==p&&p,y=e.wrapper,m=void 0===y?"span":y,b=e.splitter,w=void 0===b?function(e){return s([],c(e),!1)}:b,g=e.cursor,k=void 0===g||g,x=e.style,S=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}(e,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),A=S["aria-label"],C=S["aria-hidden"],P=S.role;f||(f=u);var E=new Array(2).fill(40);[u,f].forEach((function(e,r){switch(typeof e){case"number":E[r]=Math.abs(e-100);break;case"object":var t=e.type,n=e.value;if("number"!=typeof n)break;"keyStrokeDelayInMs"===t&&(E[r]=n)}}));var R,N,_,D,M,j,O=E[0],I=E[1],T=function(e,r){void 0===r&&(r=null);var t=(0,n.useRef)(r);return(0,n.useEffect)((function(){e&&("function"==typeof e?e(t.current):e.current=t.current)}),[e]),t}(r),F="index-module_type__E-SaG";R=o?"".concat(k?F+" ":"").concat(o):k?F:"",N=(0,n.useRef)((function(){var e,r=t;a===1/0?e=l:"number"==typeof a&&(r=Array(1+a).fill(t).flat());var n=e?s(s([],c(r),!1),[e],!1):s([],c(r),!1);return l.apply(void 0,s([T.current,w,O,I,h],c(n),!1)),function(){T.current}})),_=(0,n.useRef)(),D=(0,n.useRef)(!1),M=(0,n.useRef)(!1),j=c((0,n.useState)(0),2)[1],D.current&&(M.current=!0),(0,n.useEffect)((function(){return D.current||(_.current=N.current(),D.current=!0),j((function(e){return e+1})),function(){M.current&&_.current&&_.current()}}),[]);var G=m,q=v?t.find((function(e){return"string"==typeof e}))||"":null;return n.createElement(G,{"aria-hidden":C,"aria-label":A,role:P,style:x,className:R,children:A?n.createElement("span",{"aria-hidden":"true",ref:T,children:q}):q,ref:A?void 0:T})})),(function(e,r){return!0}))}}]);
//# sourceMappingURL=250.2bcc8fb1.chunk.js.map