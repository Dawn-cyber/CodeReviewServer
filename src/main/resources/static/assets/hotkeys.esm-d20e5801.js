
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
var C=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function M(e,t,i,r){e.addEventListener?e.addEventListener(t,i,r):e.attachEvent&&e.attachEvent("on".concat(t),function(){i(window.event)})}function B(e,t){for(var i=t.slice(0,t.length-1),r=0;r<i.length;r++)i[r]=e[i[r].toLowerCase()];return i}function T(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");for(var t=e.split(","),i=t.lastIndexOf("");i>=0;)t[i-1]+=",",t.splice(i,1),i=t.lastIndexOf("");return t}function F(e,t){for(var i=e.length>=t.length?e:t,r=e.length>=t.length?t:e,n=!0,a=0;a<i.length;a++)r.indexOf(i[a])===-1&&(n=!1);return n}var O={backspace:8,"⌫":8,tab:9,clear:12,enter:13,"↩":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"⇪":20,",":188,".":190,"/":191,"`":192,"-":C?173:189,"=":C?61:187,";":C?59:186,"'":222,"[":219,"]":221,"\\":220},h={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,command:91},L={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},u={16:!1,18:!1,17:!1,91:!1},s={};for(var E=1;E<20;E++)O["f".concat(E)]=111+E;var f=[],_=!1,U="all",D=[],x=function(t){return O[t.toLowerCase()]||h[t.toLowerCase()]||t.toUpperCase().charCodeAt(0)},G=function(t){return Object.keys(O).find(function(i){return O[i]===t})},R=function(t){return Object.keys(h).find(function(i){return h[i]===t})};function H(e){U=e||"all"}function b(){return U||"all"}function V(){return f.slice(0)}function X(){return f.map(function(e){return G(e)||R(e)||String.fromCharCode(e)})}function $(e){var t=e.target||e.srcElement,i=t.tagName,r=!0;return(t.isContentEditable||(i==="INPUT"||i==="TEXTAREA"||i==="SELECT")&&!t.readOnly)&&(r=!1),r}function q(e){return typeof e=="string"&&(e=x(e)),f.indexOf(e)!==-1}function z(e,t){var i,r;e||(e=b());for(var n in s)if(Object.prototype.hasOwnProperty.call(s,n))for(i=s[n],r=0;r<i.length;)i[r].scope===e?i.splice(r,1):r++;b()===e&&H(t||"all")}function J(e){var t=e.keyCode||e.which||e.charCode,i=f.indexOf(t);if(i>=0&&f.splice(i,1),e.key&&e.key.toLowerCase()==="meta"&&f.splice(0,f.length),(t===93||t===224)&&(t=91),t in u){u[t]=!1;for(var r in h)h[r]===t&&(v[r]=!1)}}function N(e){if(typeof e>"u")Object.keys(s).forEach(function(o){return delete s[o]});else if(Array.isArray(e))e.forEach(function(o){o.key&&P(o)});else if(typeof e=="object")e.key&&P(e);else if(typeof e=="string"){for(var t=arguments.length,i=new Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r];var n=i[0],a=i[1];typeof n=="function"&&(a=n,n=""),P({key:e,scope:n,method:a,splitKey:"+"})}}var P=function(t){var i=t.key,r=t.scope,n=t.method,a=t.splitKey,o=a===void 0?"+":a,l=T(i);l.forEach(function(c){var p=c.split(o),m=p.length,y=p[m-1],d=y==="*"?"*":x(y);if(s[d]){r||(r=b());var K=m>1?B(h,p):[];s[d]=s[d].filter(function(g){var w=n?g.method===n:!0;return!(w&&g.scope===r&&F(g.mods,K))})}})};function k(e,t,i,r){if(t.element===r){var n;if(t.scope===i||t.scope==="all"){n=t.mods.length>0;for(var a in u)Object.prototype.hasOwnProperty.call(u,a)&&(!u[a]&&t.mods.indexOf(+a)>-1||u[a]&&t.mods.indexOf(+a)===-1)&&(n=!1);(t.mods.length===0&&!u[16]&&!u[18]&&!u[17]&&!u[91]||n||t.shortcut==="*")&&t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}}function A(e,t){var i=s["*"],r=e.keyCode||e.which||e.charCode;if(v.filter.call(this,e)){if((r===93||r===224)&&(r=91),f.indexOf(r)===-1&&r!==229&&f.push(r),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(g){var w=L[g];e[g]&&f.indexOf(w)===-1?f.push(w):!e[g]&&f.indexOf(w)>-1?f.splice(f.indexOf(w),1):g==="metaKey"&&e[g]&&f.length===3&&(e.ctrlKey||e.shiftKey||e.altKey||(f=f.slice(f.indexOf(w))))}),r in u){u[r]=!0;for(var n in h)h[n]===r&&(v[n]=!0);if(!i)return}for(var a in u)Object.prototype.hasOwnProperty.call(u,a)&&(u[a]=e[L[a]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(f.indexOf(17)===-1&&f.push(17),f.indexOf(18)===-1&&f.push(18),u[17]=!0,u[18]=!0);var o=b();if(i)for(var l=0;l<i.length;l++)i[l].scope===o&&(e.type==="keydown"&&i[l].keydown||e.type==="keyup"&&i[l].keyup)&&k(e,i[l],o,t);if(r in s){for(var c=0;c<s[r].length;c++)if((e.type==="keydown"&&s[r][c].keydown||e.type==="keyup"&&s[r][c].keyup)&&s[r][c].key){for(var p=s[r][c],m=p.splitKey,y=p.key.split(m),d=[],K=0;K<y.length;K++)d.push(x(y[K]));d.sort().join("")===f.sort().join("")&&k(e,p,o,t)}}}}function Q(e){return D.indexOf(e)>-1}function v(e,t,i){f=[];var r=T(e),n=[],a="all",o=document,l=0,c=!1,p=!0,m="+",y=!1;for(i===void 0&&typeof t=="function"&&(i=t),Object.prototype.toString.call(t)==="[object Object]"&&(t.scope&&(a=t.scope),t.element&&(o=t.element),t.keyup&&(c=t.keyup),t.keydown!==void 0&&(p=t.keydown),t.capture!==void 0&&(y=t.capture),typeof t.splitKey=="string"&&(m=t.splitKey)),typeof t=="string"&&(a=t);l<r.length;l++)e=r[l].split(m),n=[],e.length>1&&(n=B(h,e)),e=e[e.length-1],e=e==="*"?"*":x(e),e in s||(s[e]=[]),s[e].push({keyup:c,keydown:p,scope:a,mods:n,shortcut:r[l],method:i,key:r[l],splitKey:m,element:o});typeof o<"u"&&!Q(o)&&window&&(D.push(o),M(o,"keydown",function(d){A(d,o)},y),_||(_=!0,M(window,"focus",function(){f=[]},y)),M(o,"keyup",function(d){A(d,o),J(d)},y))}function W(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys(s).forEach(function(i){var r=s[i].filter(function(n){return n.scope===t&&n.shortcut===e});r.forEach(function(n){n&&n.method&&n.method()})})}var S={getPressedKeyString:X,setScope:H,getScope:b,deleteScope:z,getPressedKeyCodes:V,isPressed:q,filter:$,trigger:W,unbind:N,keyMap:O,modifier:h,modifierMap:L};for(var j in S)Object.prototype.hasOwnProperty.call(S,j)&&(v[j]=S[j]);if(typeof window<"u"){var Y=window.hotkeys;v.noConflict=function(e){return e&&window.hotkeys===v&&(window.hotkeys=Y),v},window.hotkeys=v}export{v as h};
//# sourceMappingURL=hotkeys.esm-d20e5801.js.map