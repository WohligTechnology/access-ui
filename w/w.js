/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map;
/*
 * jQuery FlexSlider v2.5.0
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
;
(function ($) {

  //FlexSlider: Object Instance
  $.flexslider = function(el, options) {
    var slider = $(el);

    // making variables public
    slider.vars = $.extend({}, $.flexslider.defaults, options);

    var namespace = slider.vars.namespace,
        msGesture = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
        touch = (( "ontouchstart" in window ) || msGesture || window.DocumentTouch && document instanceof DocumentTouch) && slider.vars.touch,
        // depricating this idea, as devices are being released with both of these events
        //eventType = (touch) ? "touchend" : "click",
        eventType = "click touchend MSPointerUp keyup",
        watchedEvent = "",
        watchedEventClearTimer,
        vertical = slider.vars.direction === "vertical",
        reverse = slider.vars.reverse,
        carousel = (slider.vars.itemWidth > 0),
        fade = slider.vars.animation === "fade",
        asNav = slider.vars.asNavFor !== "",
        methods = {},
        focused = true;

    // Store a reference to the slider object
    $.data(el, "flexslider", slider);

    // Private slider methods
    methods = {
      init: function() {
        slider.animating = false;
        // Get current slide and make sure it is a number
        slider.currentSlide = parseInt( ( slider.vars.startAt ? slider.vars.startAt : 0), 10 );
        if ( isNaN( slider.currentSlide ) ) { slider.currentSlide = 0; }
        slider.animatingTo = slider.currentSlide;
        slider.atEnd = (slider.currentSlide === 0 || slider.currentSlide === slider.last);
        slider.containerSelector = slider.vars.selector.substr(0,slider.vars.selector.search(' '));
        slider.slides = $(slider.vars.selector, slider);
        slider.container = $(slider.containerSelector, slider);
        slider.count = slider.slides.length;
        // SYNC:
        slider.syncExists = $(slider.vars.sync).length > 0;
        // SLIDE:
        if (slider.vars.animation === "slide") { slider.vars.animation = "swing"; }
        slider.prop = (vertical) ? "top" : "marginLeft";
        slider.args = {};
        // SLIDESHOW:
        slider.manualPause = false;
        slider.stopped = false;
        //PAUSE WHEN INVISIBLE
        slider.started = false;
        slider.startTimeout = null;
        // TOUCH/USECSS:
        slider.transitions = !slider.vars.video && !fade && slider.vars.useCSS && (function() {
          var obj = document.createElement('div'),
              props = ['perspectiveProperty', 'WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
          for (var i in props) {
            if ( obj.style[ props[i] ] !== undefined ) {
              slider.pfx = props[i].replace('Perspective','').toLowerCase();
              slider.prop = "-" + slider.pfx + "-transform";
              return true;
            }
          }
          return false;
        }());
        slider.ensureAnimationEnd = '';
        // CONTROLSCONTAINER:
        if (slider.vars.controlsContainer !== "") slider.controlsContainer = $(slider.vars.controlsContainer).length > 0 && $(slider.vars.controlsContainer);
        // MANUAL:
        if (slider.vars.manualControls !== "") slider.manualControls = $(slider.vars.manualControls).length > 0 && $(slider.vars.manualControls);

        // CUSTOM DIRECTION NAV:
        if (slider.vars.customDirectionNav !== "") slider.customDirectionNav = $(slider.vars.customDirectionNav).length === 2 && $(slider.vars.customDirectionNav);

        // RANDOMIZE:
        if (slider.vars.randomize) {
          slider.slides.sort(function() { return (Math.round(Math.random())-0.5); });
          slider.container.empty().append(slider.slides);
        }

        slider.doMath();

        // INIT
        slider.setup("init");

        // CONTROLNAV:
        if (slider.vars.controlNav) { methods.controlNav.setup(); }

        // DIRECTIONNAV:
        if (slider.vars.directionNav) { methods.directionNav.setup(); }

        // KEYBOARD:
        if (slider.vars.keyboard && ($(slider.containerSelector).length === 1 || slider.vars.multipleKeyboard)) {
          $(document).bind('keyup', function(event) {
            var keycode = event.keyCode;
            if (!slider.animating && (keycode === 39 || keycode === 37)) {
              var target = (keycode === 39) ? slider.getTarget('next') :
                           (keycode === 37) ? slider.getTarget('prev') : false;
              slider.flexAnimate(target, slider.vars.pauseOnAction);
            }
          });
        }
        // MOUSEWHEEL:
        if (slider.vars.mousewheel) {
          slider.bind('mousewheel', function(event, delta, deltaX, deltaY) {
            event.preventDefault();
            var target = (delta < 0) ? slider.getTarget('next') : slider.getTarget('prev');
            slider.flexAnimate(target, slider.vars.pauseOnAction);
          });
        }

        // PAUSEPLAY
        if (slider.vars.pausePlay) { methods.pausePlay.setup(); }

        //PAUSE WHEN INVISIBLE
        if (slider.vars.slideshow && slider.vars.pauseInvisible) { methods.pauseInvisible.init(); }

        // SLIDSESHOW
        if (slider.vars.slideshow) {
          if (slider.vars.pauseOnHover) {
            slider.hover(function() {
              if (!slider.manualPlay && !slider.manualPause) { slider.pause(); }
            }, function() {
              if (!slider.manualPause && !slider.manualPlay && !slider.stopped) { slider.play(); }
            });
          }
          // initialize animation
          //If we're visible, or we don't use PageVisibility API
          if(!slider.vars.pauseInvisible || !methods.pauseInvisible.isHidden()) {
            (slider.vars.initDelay > 0) ? slider.startTimeout = setTimeout(slider.play, slider.vars.initDelay) : slider.play();
          }
        }

        // ASNAV:
        if (asNav) { methods.asNav.setup(); }

        // TOUCH
        if (touch && slider.vars.touch) { methods.touch(); }

        // FADE&&SMOOTHHEIGHT || SLIDE:
        if (!fade || (fade && slider.vars.smoothHeight)) { $(window).bind("resize orientationchange focus", methods.resize); }

        slider.find("img").attr("draggable", "false");

        // API: start() Callback
        setTimeout(function(){
          slider.vars.start(slider);
        }, 200);
      },
      asNav: {
        setup: function() {
          slider.asNav = true;
          slider.animatingTo = Math.floor(slider.currentSlide/slider.move);
          slider.currentItem = slider.currentSlide;
          slider.slides.removeClass(namespace + "active-slide").eq(slider.currentItem).addClass(namespace + "active-slide");
          if(!msGesture){
              slider.slides.on(eventType, function(e){
                e.preventDefault();
                var $slide = $(this),
                    target = $slide.index();
                var posFromLeft = $slide.offset().left - $(slider).scrollLeft(); // Find position of slide relative to left of slider container
                if( posFromLeft <= 0 && $slide.hasClass( namespace + 'active-slide' ) ) {
                  slider.flexAnimate(slider.getTarget("prev"), true);
                } else if (!$(slider.vars.asNavFor).data('flexslider').animating && !$slide.hasClass(namespace + "active-slide")) {
                  slider.direction = (slider.currentItem < target) ? "next" : "prev";
                  slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);
                }
              });
          }else{
              el._slider = slider;
              slider.slides.each(function (){
                  var that = this;
                  that._gesture = new MSGesture();
                  that._gesture.target = that;
                  that.addEventListener("MSPointerDown", function (e){
                      e.preventDefault();
                      if(e.currentTarget._gesture) {
                        e.currentTarget._gesture.addPointer(e.pointerId);
                      }
                  }, false);
                  that.addEventListener("MSGestureTap", function (e){
                      e.preventDefault();
                      var $slide = $(this),
                          target = $slide.index();
                      if (!$(slider.vars.asNavFor).data('flexslider').animating && !$slide.hasClass('active')) {
                          slider.direction = (slider.currentItem < target) ? "next" : "prev";
                          slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);
                      }
                  });
              });
          }
        }
      },
      controlNav: {
        setup: function() {
          if (!slider.manualControls) {
            methods.controlNav.setupPaging();
          } else { // MANUALCONTROLS:
            methods.controlNav.setupManual();
          }
        },
        setupPaging: function() {
          var type = (slider.vars.controlNav === "thumbnails") ? 'control-thumbs' : 'control-paging',
              j = 1,
              item,
              slide;

          slider.controlNavScaffold = $('<ol class="'+ namespace + 'control-nav ' + namespace + type + '"></ol>');

          if (slider.pagingCount > 1) {
            for (var i = 0; i < slider.pagingCount; i++) {
              slide = slider.slides.eq(i);
              item = (slider.vars.controlNav === "thumbnails") ? '<img src="' + slide.attr( 'data-thumb' ) + '"/>' : '<a>' + j + '</a>';
              if ( 'thumbnails' === slider.vars.controlNav && true === slider.vars.thumbCaptions ) {
                var captn = slide.attr( 'data-thumbcaption' );
                if ( '' !== captn && undefined !== captn ) { item += '<span class="' + namespace + 'caption">' + captn + '</span>'; }
              }
              slider.controlNavScaffold.append('<li>' + item + '</li>');
              j++;
            }
          }

          // CONTROLSCONTAINER:
          (slider.controlsContainer) ? $(slider.controlsContainer).append(slider.controlNavScaffold) : slider.append(slider.controlNavScaffold);
          methods.controlNav.set();

          methods.controlNav.active();

          slider.controlNavScaffold.delegate('a, img', eventType, function(event) {
            event.preventDefault();

            if (watchedEvent === "" || watchedEvent === event.type) {
              var $this = $(this),
                  target = slider.controlNav.index($this);

              if (!$this.hasClass(namespace + 'active')) {
                slider.direction = (target > slider.currentSlide) ? "next" : "prev";
                slider.flexAnimate(target, slider.vars.pauseOnAction);
              }
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();

          });
        },
        setupManual: function() {
          slider.controlNav = slider.manualControls;
          methods.controlNav.active();

          slider.controlNav.bind(eventType, function(event) {
            event.preventDefault();

            if (watchedEvent === "" || watchedEvent === event.type) {
              var $this = $(this),
                  target = slider.controlNav.index($this);

              if (!$this.hasClass(namespace + 'active')) {
                (target > slider.currentSlide) ? slider.direction = "next" : slider.direction = "prev";
                slider.flexAnimate(target, slider.vars.pauseOnAction);
              }
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        set: function() {
          var selector = (slider.vars.controlNav === "thumbnails") ? 'img' : 'a';
          slider.controlNav = $('.' + namespace + 'control-nav li ' + selector, (slider.controlsContainer) ? slider.controlsContainer : slider);
        },
        active: function() {
          slider.controlNav.removeClass(namespace + "active").eq(slider.animatingTo).addClass(namespace + "active");
        },
        update: function(action, pos) {
          if (slider.pagingCount > 1 && action === "add") {
            slider.controlNavScaffold.append($('<li><a>' + slider.count + '</a></li>'));
          } else if (slider.pagingCount === 1) {
            slider.controlNavScaffold.find('li').remove();
          } else {
            slider.controlNav.eq(pos).closest('li').remove();
          }
          methods.controlNav.set();
          (slider.pagingCount > 1 && slider.pagingCount !== slider.controlNav.length) ? slider.update(pos, action) : methods.controlNav.active();
        }
      },
      directionNav: {
        setup: function() {
          var directionNavScaffold = $('<ul class="' + namespace + 'direction-nav"><li class="' + namespace + 'nav-prev"><a class="' + namespace + 'prev" href="#">' + slider.vars.prevText + '</a></li><li class="' + namespace + 'nav-next"><a class="' + namespace + 'next" href="#">' + slider.vars.nextText + '</a></li></ul>');

          // CUSTOM DIRECTION NAV:
          if (slider.customDirectionNav) {
            slider.directionNav = slider.customDirectionNav;
          // CONTROLSCONTAINER:
          } else if (slider.controlsContainer) {
            $(slider.controlsContainer).append(directionNavScaffold);
            slider.directionNav = $('.' + namespace + 'direction-nav li a', slider.controlsContainer);
          } else {
            slider.append(directionNavScaffold);
            slider.directionNav = $('.' + namespace + 'direction-nav li a', slider);
          }

          methods.directionNav.update();

          slider.directionNav.bind(eventType, function(event) {
            event.preventDefault();
            var target;

            if (watchedEvent === "" || watchedEvent === event.type) {
              target = ($(this).hasClass(namespace + 'next')) ? slider.getTarget('next') : slider.getTarget('prev');
              slider.flexAnimate(target, slider.vars.pauseOnAction);
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        update: function() {
          var disabledClass = namespace + 'disabled';
          if (slider.pagingCount === 1) {
            slider.directionNav.addClass(disabledClass).attr('tabindex', '-1');
          } else if (!slider.vars.animationLoop) {
            if (slider.animatingTo === 0) {
              slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "prev").addClass(disabledClass).attr('tabindex', '-1');
            } else if (slider.animatingTo === slider.last) {
              slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "next").addClass(disabledClass).attr('tabindex', '-1');
            } else {
              slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');
            }
          } else {
            slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');
          }
        }
      },
      pausePlay: {
        setup: function() {
          var pausePlayScaffold = $('<div class="' + namespace + 'pauseplay"><a></a></div>');

          // CONTROLSCONTAINER:
          if (slider.controlsContainer) {
            slider.controlsContainer.append(pausePlayScaffold);
            slider.pausePlay = $('.' + namespace + 'pauseplay a', slider.controlsContainer);
          } else {
            slider.append(pausePlayScaffold);
            slider.pausePlay = $('.' + namespace + 'pauseplay a', slider);
          }

          methods.pausePlay.update((slider.vars.slideshow) ? namespace + 'pause' : namespace + 'play');

          slider.pausePlay.bind(eventType, function(event) {
            event.preventDefault();

            if (watchedEvent === "" || watchedEvent === event.type) {
              if ($(this).hasClass(namespace + 'pause')) {
                slider.manualPause = true;
                slider.manualPlay = false;
                slider.pause();
              } else {
                slider.manualPause = false;
                slider.manualPlay = true;
                slider.play();
              }
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        update: function(state) {
          (state === "play") ? slider.pausePlay.removeClass(namespace + 'pause').addClass(namespace + 'play').html(slider.vars.playText) : slider.pausePlay.removeClass(namespace + 'play').addClass(namespace + 'pause').html(slider.vars.pauseText);
        }
      },
      touch: function() {
        var startX,
          startY,
          offset,
          cwidth,
          dx,
          startT,
          onTouchStart,
          onTouchMove,
          onTouchEnd,
          scrolling = false,
          localX = 0,
          localY = 0,
          accDx = 0;

        if(!msGesture){
            onTouchStart = function(e) {
              if (slider.animating) {
                e.preventDefault();
              } else if ( ( window.navigator.msPointerEnabled ) || e.touches.length === 1 ) {
                slider.pause();
                // CAROUSEL:
                cwidth = (vertical) ? slider.h : slider. w;
                startT = Number(new Date());
                // CAROUSEL:

                // Local vars for X and Y points.
                localX = e.touches[0].pageX;
                localY = e.touches[0].pageY;

                offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 :
                         (carousel && reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
                         (carousel && slider.currentSlide === slider.last) ? slider.limit :
                         (carousel) ? ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.currentSlide :
                         (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
                startX = (vertical) ? localY : localX;
                startY = (vertical) ? localX : localY;

                el.addEventListener('touchmove', onTouchMove, false);
                el.addEventListener('touchend', onTouchEnd, false);
              }
            };

            onTouchMove = function(e) {
              // Local vars for X and Y points.

              localX = e.touches[0].pageX;
              localY = e.touches[0].pageY;

              dx = (vertical) ? startX - localY : startX - localX;
              scrolling = (vertical) ? (Math.abs(dx) < Math.abs(localX - startY)) : (Math.abs(dx) < Math.abs(localY - startY));

              var fxms = 500;

              if ( ! scrolling || Number( new Date() ) - startT > fxms ) {
                e.preventDefault();
                if (!fade && slider.transitions) {
                  if (!slider.vars.animationLoop) {
                    dx = dx/((slider.currentSlide === 0 && dx < 0 || slider.currentSlide === slider.last && dx > 0) ? (Math.abs(dx)/cwidth+2) : 1);
                  }
                  slider.setProps(offset + dx, "setTouch");
                }
              }
            };

            onTouchEnd = function(e) {
              // finish the touch by undoing the touch session
              el.removeEventListener('touchmove', onTouchMove, false);

              if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
                var updateDx = (reverse) ? -dx : dx,
                    target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev');

                if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth/2)) {
                  slider.flexAnimate(target, slider.vars.pauseOnAction);
                } else {
                  if (!fade) { slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true); }
                }
              }
              el.removeEventListener('touchend', onTouchEnd, false);

              startX = null;
              startY = null;
              dx = null;
              offset = null;
            };

            el.addEventListener('touchstart', onTouchStart, false);
        }else{
            el.style.msTouchAction = "none";
            el._gesture = new MSGesture();
            el._gesture.target = el;
            el.addEventListener("MSPointerDown", onMSPointerDown, false);
            el._slider = slider;
            el.addEventListener("MSGestureChange", onMSGestureChange, false);
            el.addEventListener("MSGestureEnd", onMSGestureEnd, false);

            function onMSPointerDown(e){
                e.stopPropagation();
                if (slider.animating) {
                    e.preventDefault();
                }else{
                    slider.pause();
                    el._gesture.addPointer(e.pointerId);
                    accDx = 0;
                    cwidth = (vertical) ? slider.h : slider. w;
                    startT = Number(new Date());
                    // CAROUSEL:

                    offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 :
                        (carousel && reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
                            (carousel && slider.currentSlide === slider.last) ? slider.limit :
                                (carousel) ? ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.currentSlide :
                                    (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
                }
            }

            function onMSGestureChange(e) {
                e.stopPropagation();
                var slider = e.target._slider;
                if(!slider){
                    return;
                }
                var transX = -e.translationX,
                    transY = -e.translationY;

                //Accumulate translations.
                accDx = accDx + ((vertical) ? transY : transX);
                dx = accDx;
                scrolling = (vertical) ? (Math.abs(accDx) < Math.abs(-transX)) : (Math.abs(accDx) < Math.abs(-transY));

                if(e.detail === e.MSGESTURE_FLAG_INERTIA){
                    setImmediate(function (){
                        el._gesture.stop();
                    });

                    return;
                }

                if (!scrolling || Number(new Date()) - startT > 500) {
                    e.preventDefault();
                    if (!fade && slider.transitions) {
                        if (!slider.vars.animationLoop) {
                            dx = accDx / ((slider.currentSlide === 0 && accDx < 0 || slider.currentSlide === slider.last && accDx > 0) ? (Math.abs(accDx) / cwidth + 2) : 1);
                        }
                        slider.setProps(offset + dx, "setTouch");
                    }
                }
            }

            function onMSGestureEnd(e) {
                e.stopPropagation();
                var slider = e.target._slider;
                if(!slider){
                    return;
                }
                if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
                    var updateDx = (reverse) ? -dx : dx,
                        target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev');

                    if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth/2)) {
                        slider.flexAnimate(target, slider.vars.pauseOnAction);
                    } else {
                        if (!fade) { slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true); }
                    }
                }

                startX = null;
                startY = null;
                dx = null;
                offset = null;
                accDx = 0;
            }
        }
      },
      resize: function() {
        if (!slider.animating && slider.is(':visible')) {
          if (!carousel) { slider.doMath(); }

          if (fade) {
            // SMOOTH HEIGHT:
            methods.smoothHeight();
          } else if (carousel) { //CAROUSEL:
            slider.slides.width(slider.computedW);
            slider.update(slider.pagingCount);
            slider.setProps();
          }
          else if (vertical) { //VERTICAL:
            slider.viewport.height(slider.h);
            slider.setProps(slider.h, "setTotal");
          } else {
            // SMOOTH HEIGHT:
            if (slider.vars.smoothHeight) { methods.smoothHeight(); }
            slider.newSlides.width(slider.computedW);
            slider.setProps(slider.computedW, "setTotal");
          }
        }
      },
      smoothHeight: function(dur) {
        if (!vertical || fade) {
          var $obj = (fade) ? slider : slider.viewport;
          (dur) ? $obj.animate({"height": slider.slides.eq(slider.animatingTo).height()}, dur) : $obj.height(slider.slides.eq(slider.animatingTo).height());
        }
      },
      sync: function(action) {
        var $obj = $(slider.vars.sync).data("flexslider"),
            target = slider.animatingTo;

        switch (action) {
          case "animate": $obj.flexAnimate(target, slider.vars.pauseOnAction, false, true); break;
          case "play": if (!$obj.playing && !$obj.asNav) { $obj.play(); } break;
          case "pause": $obj.pause(); break;
        }
      },
      uniqueID: function($clone) {
        // Append _clone to current level and children elements with id attributes
        $clone.filter( '[id]' ).add($clone.find( '[id]' )).each(function() {
          var $this = $(this);
          $this.attr( 'id', $this.attr( 'id' ) + '_clone' );
        });
        return $clone;
      },
      pauseInvisible: {
        visProp: null,
        init: function() {
          var visProp = methods.pauseInvisible.getHiddenProp();
          if (visProp) {
            var evtname = visProp.replace(/[H|h]idden/,'') + 'visibilitychange';
            document.addEventListener(evtname, function() {
              if (methods.pauseInvisible.isHidden()) {
                if(slider.startTimeout) {
                  clearTimeout(slider.startTimeout); //If clock is ticking, stop timer and prevent from starting while invisible
                } else { 
                  slider.pause(); //Or just pause
                }
              }
              else {
                if(slider.started) {
                  slider.play(); //Initiated before, just play
                } else { 
                  if (slider.vars.initDelay > 0) { 
                    setTimeout(slider.play, slider.vars.initDelay);
                  } else {
                    slider.play(); //Didn't init before: simply init or wait for it
                  } 
                }
              }
            });
          }
        },
        isHidden: function() {
          var prop = methods.pauseInvisible.getHiddenProp();
          if (!prop) {
            return false;
          }
          return document[prop];
        },
        getHiddenProp: function() {
          var prefixes = ['webkit','moz','ms','o'];
          // if 'hidden' is natively supported just return it
          if ('hidden' in document) {
            return 'hidden';
          }
          // otherwise loop over all the known prefixes until we find one
          for ( var i = 0; i < prefixes.length; i++ ) {
              if ((prefixes[i] + 'Hidden') in document) {
                return prefixes[i] + 'Hidden';
              }
          }
          // otherwise it's not supported
          return null;
        }
      },
      setToClearWatchedEvent: function() {
        clearTimeout(watchedEventClearTimer);
        watchedEventClearTimer = setTimeout(function() {
          watchedEvent = "";
        }, 3000);
      }
    };

    // public methods
    slider.flexAnimate = function(target, pause, override, withSync, fromNav) {
      if (!slider.vars.animationLoop && target !== slider.currentSlide) {
        slider.direction = (target > slider.currentSlide) ? "next" : "prev";
      }

      if (asNav && slider.pagingCount === 1) slider.direction = (slider.currentItem < target) ? "next" : "prev";

      if (!slider.animating && (slider.canAdvance(target, fromNav) || override) && slider.is(":visible")) {
        if (asNav && withSync) {
          var master = $(slider.vars.asNavFor).data('flexslider');
          slider.atEnd = target === 0 || target === slider.count - 1;
          master.flexAnimate(target, true, false, true, fromNav);
          slider.direction = (slider.currentItem < target) ? "next" : "prev";
          master.direction = slider.direction;

          if (Math.ceil((target + 1)/slider.visible) - 1 !== slider.currentSlide && target !== 0) {
            slider.currentItem = target;
            slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
            target = Math.floor(target/slider.visible);
          } else {
            slider.currentItem = target;
            slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
            return false;
          }
        }

        slider.animating = true;
        slider.animatingTo = target;

        // SLIDESHOW:
        if (pause) { slider.pause(); }

        // API: before() animation Callback
        slider.vars.before(slider);

        // SYNC:
        if (slider.syncExists && !fromNav) { methods.sync("animate"); }

        // CONTROLNAV
        if (slider.vars.controlNav) { methods.controlNav.active(); }

        // !CAROUSEL:
        // CANDIDATE: slide active class (for add/remove slide)
        if (!carousel) { slider.slides.removeClass(namespace + 'active-slide').eq(target).addClass(namespace + 'active-slide'); }

        // INFINITE LOOP:
        // CANDIDATE: atEnd
        slider.atEnd = target === 0 || target === slider.last;

        // DIRECTIONNAV:
        if (slider.vars.directionNav) { methods.directionNav.update(); }

        if (target === slider.last) {
          // API: end() of cycle Callback
          slider.vars.end(slider);
          // SLIDESHOW && !INFINITE LOOP:
          if (!slider.vars.animationLoop) { slider.pause(); }
        }

        // SLIDE:
        if (!fade) {
          var dimension = (vertical) ? slider.slides.filter(':first').height() : slider.computedW,
              margin, slideString, calcNext;

          // INFINITE LOOP / REVERSE:
          if (carousel) {
            //margin = (slider.vars.itemWidth > slider.w) ? slider.vars.itemMargin * 2 : slider.vars.itemMargin;
            margin = slider.vars.itemMargin;
            calcNext = ((slider.itemW + margin) * slider.move) * slider.animatingTo;
            slideString = (calcNext > slider.limit && slider.visible !== 1) ? slider.limit : calcNext;
          } else if (slider.currentSlide === 0 && target === slider.count - 1 && slider.vars.animationLoop && slider.direction !== "next") {
            slideString = (reverse) ? (slider.count + slider.cloneOffset) * dimension : 0;
          } else if (slider.currentSlide === slider.last && target === 0 && slider.vars.animationLoop && slider.direction !== "prev") {
            slideString = (reverse) ? 0 : (slider.count + 1) * dimension;
          } else {
            slideString = (reverse) ? ((slider.count - 1) - target + slider.cloneOffset) * dimension : (target + slider.cloneOffset) * dimension;
          }
          slider.setProps(slideString, "", slider.vars.animationSpeed);
          if (slider.transitions) {
            if (!slider.vars.animationLoop || !slider.atEnd) {
              slider.animating = false;
              slider.currentSlide = slider.animatingTo;
            }
            
            // Unbind previous transitionEnd events and re-bind new transitionEnd event
            slider.container.unbind("webkitTransitionEnd transitionend");
            slider.container.bind("webkitTransitionEnd transitionend", function() {
              clearTimeout(slider.ensureAnimationEnd);
              slider.wrapup(dimension);
            });

            // Insurance for the ever-so-fickle transitionEnd event
            clearTimeout(slider.ensureAnimationEnd);
            slider.ensureAnimationEnd = setTimeout(function() {
              slider.wrapup(dimension);
            }, slider.vars.animationSpeed + 100);

          } else {
            slider.container.animate(slider.args, slider.vars.animationSpeed, slider.vars.easing, function(){
              slider.wrapup(dimension);
            });
          }
        } else { // FADE:
          if (!touch) {
            //slider.slides.eq(slider.currentSlide).fadeOut(slider.vars.animationSpeed, slider.vars.easing);
            //slider.slides.eq(target).fadeIn(slider.vars.animationSpeed, slider.vars.easing, slider.wrapup);

            slider.slides.eq(slider.currentSlide).css({"zIndex": 1}).animate({"opacity": 0}, slider.vars.animationSpeed, slider.vars.easing);
            slider.slides.eq(target).css({"zIndex": 2}).animate({"opacity": 1}, slider.vars.animationSpeed, slider.vars.easing, slider.wrapup);

          } else {
            slider.slides.eq(slider.currentSlide).css({ "opacity": 0, "zIndex": 1 });
            slider.slides.eq(target).css({ "opacity": 1, "zIndex": 2 });
            slider.wrapup(dimension);
          }
        }
        // SMOOTH HEIGHT:
        if (slider.vars.smoothHeight) { methods.smoothHeight(slider.vars.animationSpeed); }
      }
    };
    slider.wrapup = function(dimension) {
      // SLIDE:
      if (!fade && !carousel) {
        if (slider.currentSlide === 0 && slider.animatingTo === slider.last && slider.vars.animationLoop) {
          slider.setProps(dimension, "jumpEnd");
        } else if (slider.currentSlide === slider.last && slider.animatingTo === 0 && slider.vars.animationLoop) {
          slider.setProps(dimension, "jumpStart");
        }
      }
      slider.animating = false;
      slider.currentSlide = slider.animatingTo;
      // API: after() animation Callback
      slider.vars.after(slider);
    };

    // SLIDESHOW:
    slider.animateSlides = function() {
      if (!slider.animating && focused ) { slider.flexAnimate(slider.getTarget("next")); }
    };
    // SLIDESHOW:
    slider.pause = function() {
      clearInterval(slider.animatedSlides);
      slider.animatedSlides = null;
      slider.playing = false;
      // PAUSEPLAY:
      if (slider.vars.pausePlay) { methods.pausePlay.update("play"); }
      // SYNC:
      if (slider.syncExists) { methods.sync("pause"); }
    };
    // SLIDESHOW:
    slider.play = function() {
      if (slider.playing) { clearInterval(slider.animatedSlides); }
      slider.animatedSlides = slider.animatedSlides || setInterval(slider.animateSlides, slider.vars.slideshowSpeed);
      slider.started = slider.playing = true;
      // PAUSEPLAY:
      if (slider.vars.pausePlay) { methods.pausePlay.update("pause"); }
      // SYNC:
      if (slider.syncExists) { methods.sync("play"); }
    };
    // STOP:
    slider.stop = function () {
      slider.pause();
      slider.stopped = true;
    };
    slider.canAdvance = function(target, fromNav) {
      // ASNAV:
      var last = (asNav) ? slider.pagingCount - 1 : slider.last;
      return (fromNav) ? true :
             (asNav && slider.currentItem === slider.count - 1 && target === 0 && slider.direction === "prev") ? true :
             (asNav && slider.currentItem === 0 && target === slider.pagingCount - 1 && slider.direction !== "next") ? false :
             (target === slider.currentSlide && !asNav) ? false :
             (slider.vars.animationLoop) ? true :
             (slider.atEnd && slider.currentSlide === 0 && target === last && slider.direction !== "next") ? false :
             (slider.atEnd && slider.currentSlide === last && target === 0 && slider.direction === "next") ? false :
             true;
    };
    slider.getTarget = function(dir) {
      slider.direction = dir;
      if (dir === "next") {
        return (slider.currentSlide === slider.last) ? 0 : slider.currentSlide + 1;
      } else {
        return (slider.currentSlide === 0) ? slider.last : slider.currentSlide - 1;
      }
    };

    // SLIDE:
    slider.setProps = function(pos, special, dur) {
      var target = (function() {
        var posCheck = (pos) ? pos : ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo,
            posCalc = (function() {
              if (carousel) {
                return (special === "setTouch") ? pos :
                       (reverse && slider.animatingTo === slider.last) ? 0 :
                       (reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
                       (slider.animatingTo === slider.last) ? slider.limit : posCheck;
              } else {
                switch (special) {
                  case "setTotal": return (reverse) ? ((slider.count - 1) - slider.currentSlide + slider.cloneOffset) * pos : (slider.currentSlide + slider.cloneOffset) * pos;
                  case "setTouch": return (reverse) ? pos : pos;
                  case "jumpEnd": return (reverse) ? pos : slider.count * pos;
                  case "jumpStart": return (reverse) ? slider.count * pos : pos;
                  default: return pos;
                }
              }
            }());

            return (posCalc * -1) + "px";
          }());

      if (slider.transitions) {
        target = (vertical) ? "translate3d(0," + target + ",0)" : "translate3d(" + target + ",0,0)";
        dur = (dur !== undefined) ? (dur/1000) + "s" : "0s";
        slider.container.css("-" + slider.pfx + "-transition-duration", dur);
         slider.container.css("transition-duration", dur);
      }

      slider.args[slider.prop] = target;
      if (slider.transitions || dur === undefined) { slider.container.css(slider.args); }

      slider.container.css('transform',target);
    };

    slider.setup = function(type) {
      // SLIDE:
      if (!fade) {
        var sliderOffset, arr;

        if (type === "init") {
          slider.viewport = $('<div class="' + namespace + 'viewport"></div>').css({"overflow": "hidden", "position": "relative"}).appendTo(slider).append(slider.container);
          // INFINITE LOOP:
          slider.cloneCount = 0;
          slider.cloneOffset = 0;
          // REVERSE:
          if (reverse) {
            arr = $.makeArray(slider.slides).reverse();
            slider.slides = $(arr);
            slider.container.empty().append(slider.slides);
          }
        }
        // INFINITE LOOP && !CAROUSEL:
        if (slider.vars.animationLoop && !carousel) {
          slider.cloneCount = 2;
          slider.cloneOffset = 1;
          // clear out old clones
          if (type !== "init") { slider.container.find('.clone').remove(); }
          slider.container.append(methods.uniqueID(slider.slides.first().clone().addClass('clone')).attr('aria-hidden', 'true'))
                          .prepend(methods.uniqueID(slider.slides.last().clone().addClass('clone')).attr('aria-hidden', 'true'));
        }
        slider.newSlides = $(slider.vars.selector, slider);

        sliderOffset = (reverse) ? slider.count - 1 - slider.currentSlide + slider.cloneOffset : slider.currentSlide + slider.cloneOffset;
        // VERTICAL:
        if (vertical && !carousel) {
          slider.container.height((slider.count + slider.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
          setTimeout(function(){
            slider.newSlides.css({"display": "block"});
            slider.doMath();
            slider.viewport.height(slider.h);
            slider.setProps(sliderOffset * slider.h, "init");
          }, (type === "init") ? 100 : 0);
        } else {
          slider.container.width((slider.count + slider.cloneCount) * 200 + "%");
          slider.setProps(sliderOffset * slider.computedW, "init");
          setTimeout(function(){
            slider.doMath();
            slider.newSlides.css({"width": slider.computedW, "float": "left", "display": "block"});
            // SMOOTH HEIGHT:
            if (slider.vars.smoothHeight) { methods.smoothHeight(); }
          }, (type === "init") ? 100 : 0);
        }
      } else { // FADE:
        slider.slides.css({"width": "100%", "float": "left", "marginRight": "-100%", "position": "relative"});
        if (type === "init") {
          if (!touch) {
            //slider.slides.eq(slider.currentSlide).fadeIn(slider.vars.animationSpeed, slider.vars.easing);
            if (slider.vars.fadeFirstSlide == false) {
              slider.slides.css({ "opacity": 0, "display": "block", "zIndex": 1 }).eq(slider.currentSlide).css({"zIndex": 2}).css({"opacity": 1});
            } else {
              slider.slides.css({ "opacity": 0, "display": "block", "zIndex": 1 }).eq(slider.currentSlide).css({"zIndex": 2}).animate({"opacity": 1},slider.vars.animationSpeed,slider.vars.easing);
            }
          } else {
            slider.slides.css({ "opacity": 0, "display": "block", "webkitTransition": "opacity " + slider.vars.animationSpeed / 1000 + "s ease", "zIndex": 1 }).eq(slider.currentSlide).css({ "opacity": 1, "zIndex": 2});
          }
        }
        // SMOOTH HEIGHT:
        if (slider.vars.smoothHeight) { methods.smoothHeight(); }
      }
      // !CAROUSEL:
      // CANDIDATE: active slide
      if (!carousel) { slider.slides.removeClass(namespace + "active-slide").eq(slider.currentSlide).addClass(namespace + "active-slide"); }

      //FlexSlider: init() Callback
      slider.vars.init(slider);
    };

    slider.doMath = function() {
      var slide = slider.slides.first(),
          slideMargin = slider.vars.itemMargin,
          minItems = slider.vars.minItems,
          maxItems = slider.vars.maxItems;

      slider.w = (slider.viewport===undefined) ? slider.width() : slider.viewport.width();
      slider.h = slide.height();
      slider.boxPadding = slide.outerWidth() - slide.width();

      // CAROUSEL:
      if (carousel) {
        slider.itemT = slider.vars.itemWidth + slideMargin;
        slider.minW = (minItems) ? minItems * slider.itemT : slider.w;
        slider.maxW = (maxItems) ? (maxItems * slider.itemT) - slideMargin : slider.w;
        slider.itemW = (slider.minW > slider.w) ? (slider.w - (slideMargin * (minItems - 1)))/minItems :
                       (slider.maxW < slider.w) ? (slider.w - (slideMargin * (maxItems - 1)))/maxItems :
                       (slider.vars.itemWidth > slider.w) ? slider.w : slider.vars.itemWidth;

        slider.visible = Math.floor(slider.w/(slider.itemW));
        slider.move = (slider.vars.move > 0 && slider.vars.move < slider.visible ) ? slider.vars.move : slider.visible;
        slider.pagingCount = Math.ceil(((slider.count - slider.visible)/slider.move) + 1);
        slider.last =  slider.pagingCount - 1;
        slider.limit = (slider.pagingCount === 1) ? 0 :
                       (slider.vars.itemWidth > slider.w) ? (slider.itemW * (slider.count - 1)) + (slideMargin * (slider.count - 1)) : ((slider.itemW + slideMargin) * slider.count) - slider.w - slideMargin;
      } else {
        slider.itemW = slider.w;
        slider.pagingCount = slider.count;
        slider.last = slider.count - 1;
      }
      slider.computedW = slider.itemW - slider.boxPadding;
    };

    slider.update = function(pos, action) {
      slider.doMath();

      // update currentSlide and slider.animatingTo if necessary
      if (!carousel) {
        if (pos < slider.currentSlide) {
          slider.currentSlide += 1;
        } else if (pos <= slider.currentSlide && pos !== 0) {
          slider.currentSlide -= 1;
        }
        slider.animatingTo = slider.currentSlide;
      }

      // update controlNav
      if (slider.vars.controlNav && !slider.manualControls) {
        if ((action === "add" && !carousel) || slider.pagingCount > slider.controlNav.length) {
          methods.controlNav.update("add");
        } else if ((action === "remove" && !carousel) || slider.pagingCount < slider.controlNav.length) {
          if (carousel && slider.currentSlide > slider.last) {
            slider.currentSlide -= 1;
            slider.animatingTo -= 1;
          }
          methods.controlNav.update("remove", slider.last);
        }
      }
      // update directionNav
      if (slider.vars.directionNav) { methods.directionNav.update(); }

    };

    slider.addSlide = function(obj, pos) {
      var $obj = $(obj);

      slider.count += 1;
      slider.last = slider.count - 1;

      // append new slide
      if (vertical && reverse) {
        (pos !== undefined) ? slider.slides.eq(slider.count - pos).after($obj) : slider.container.prepend($obj);
      } else {
        (pos !== undefined) ? slider.slides.eq(pos).before($obj) : slider.container.append($obj);
      }

      // update currentSlide, animatingTo, controlNav, and directionNav
      slider.update(pos, "add");

      // update slider.slides
      slider.slides = $(slider.vars.selector + ':not(.clone)', slider);
      // re-setup the slider to accomdate new slide
      slider.setup();

      //FlexSlider: added() Callback
      slider.vars.added(slider);
    };
    slider.removeSlide = function(obj) {
      var pos = (isNaN(obj)) ? slider.slides.index($(obj)) : obj;

      // update count
      slider.count -= 1;
      slider.last = slider.count - 1;

      // remove slide
      if (isNaN(obj)) {
        $(obj, slider.slides).remove();
      } else {
        (vertical && reverse) ? slider.slides.eq(slider.last).remove() : slider.slides.eq(obj).remove();
      }

      // update currentSlide, animatingTo, controlNav, and directionNav
      slider.doMath();
      slider.update(pos, "remove");

      // update slider.slides
      slider.slides = $(slider.vars.selector + ':not(.clone)', slider);
      // re-setup the slider to accomdate new slide
      slider.setup();

      // FlexSlider: removed() Callback
      slider.vars.removed(slider);
    };

    //FlexSlider: Initialize
    methods.init();
  };

  // Ensure the slider isn't focussed if the window loses focus.
  $( window ).blur( function ( e ) {
    focused = false;
  }).focus( function ( e ) {
    focused = true;
  });

  //FlexSlider: Default Settings
  $.flexslider.defaults = {
    namespace: "flex-",             //{NEW} String: Prefix string attached to the class of every element generated by the plugin
    selector: ".slides > li",       //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
    animation: "fade",              //String: Select your animation type, "fade" or "slide"
    easing: "swing",                //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
    direction: "horizontal",        //String: Select the sliding direction, "horizontal" or "vertical"
    reverse: false,                 //{NEW} Boolean: Reverse the animation direction
    animationLoop: true,            //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
    smoothHeight: false,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
    startAt: 0,                     //Integer: The slide that the slider should start on. Array notation (0 = first slide)
    slideshow: true,                //Boolean: Animate slider automatically
    slideshowSpeed: 7000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
    animationSpeed: 600,            //Integer: Set the speed of animations, in milliseconds
    initDelay: 0,                   //{NEW} Integer: Set an initialization delay, in milliseconds
    randomize: false,               //Boolean: Randomize slide order
    fadeFirstSlide: true,           //Boolean: Fade in the first slide when animation type is "fade"
    thumbCaptions: false,           //Boolean: Whether or not to put captions on thumbnails when using the "thumbnails" controlNav.

    // Usability features
    pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
    pauseOnHover: false,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
    pauseInvisible: true,   		//{NEW} Boolean: Pause the slideshow when tab is invisible, resume when visible. Provides better UX, lower CPU usage.
    useCSS: true,                   //{NEW} Boolean: Slider will use CSS3 transitions if available
    touch: true,                    //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
    video: false,                   //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches

    // Primary Controls
    controlNav: true,               //Boolean: Create navigation for paging control of each slide? Note: Leave true for manualControls usage
    directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
    prevText: "Previous",           //String: Set the text for the "previous" directionNav item
    nextText: "Next",               //String: Set the text for the "next" directionNav item

    // Secondary Navigation
    keyboard: true,                 //Boolean: Allow slider navigating via keyboard left/right keys
    multipleKeyboard: false,        //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
    mousewheel: false,              //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
    pausePlay: false,               //Boolean: Create pause/play dynamic element
    pauseText: "Pause",             //String: Set the text for the "pause" pausePlay item
    playText: "Play",               //String: Set the text for the "play" pausePlay item

    // Special properties
    controlsContainer: "",          //{UPDATED} jQuery Object/Selector: Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be $(".flexslider-container"). Property is ignored if given element is not found.
    manualControls: "",             //{UPDATED} jQuery Object/Selector: Declare custom control navigation. Examples would be $(".flex-control-nav li") or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
    customDirectionNav: "",         //{NEW} jQuery Object/Selector: Custom prev / next button. Must be two jQuery elements. In order to make the events work they have to have the classes "prev" and "next" (plus namespace)
    sync: "",                       //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
    asNavFor: "",                   //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider

    // Carousel Options
    itemWidth: 0,                   //{NEW} Integer: Box-model width of individual carousel items, including horizontal borders and padding.
    itemMargin: 0,                  //{NEW} Integer: Margin between carousel items.
    minItems: 1,                    //{NEW} Integer: Minimum number of carousel items that should be visible. Items will resize fluidly when below this.
    maxItems: 0,                    //{NEW} Integer: Maxmimum number of carousel items that should be visible. Items will resize fluidly when above this limit.
    move: 0,                        //{NEW} Integer: Number of carousel items that should move on animation. If 0, slider will move all visible items.
    allowOneSlide: true,           //{NEW} Boolean: Whether or not to allow a slider comprised of a single slide

    // Callback API
    start: function(){},            //Callback: function(slider) - Fires when the slider loads the first slide
    before: function(){},           //Callback: function(slider) - Fires asynchronously with each slider animation
    after: function(){},            //Callback: function(slider) - Fires after each slider animation completes
    end: function(){},              //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
    added: function(){},            //{NEW} Callback: function(slider) - Fires after a slide is added
    removed: function(){},           //{NEW} Callback: function(slider) - Fires after a slide is removed
    init: function() {}             //{NEW} Callback: function(slider) - Fires after the slider is initially setup
  };

  //FlexSlider: Plugin Function
  $.fn.flexslider = function(options) {
    if (options === undefined) { options = {}; }

    if (typeof options === "object") {
      return this.each(function() {
        var $this = $(this),
            selector = (options.selector) ? options.selector : ".slides > li",
            $slides = $this.find(selector);

      if ( ( $slides.length === 1 && options.allowOneSlide === true ) || $slides.length === 0 ) {
          $slides.fadeIn(400);
          if (options.start) { options.start($this); }
        } else if ($this.data('flexslider') === undefined) {
          new $.flexslider(this, options);
        }
      });
    } else {
      // Helper strings to quickly perform functions on the slider
      var $slider = $(this).data('flexslider');
      switch (options) {
        case "play": $slider.play(); break;
        case "pause": $slider.pause(); break;
        case "stop": $slider.stop(); break;
        case "next": $slider.flexAnimate($slider.getTarget("next"), true); break;
        case "prev":
        case "previous": $slider.flexAnimate($slider.getTarget("prev"), true); break;
        default: if (typeof options === "number") { $slider.flexAnimate(options, true); }
      }
    }
  };
})(jQuery);
;
/*!
 * Less - Leaner CSS v2.5.1
 * http://lesscss.org
 *
 * Copyright (c) 2009-2015, Alexis Sellier <self@cloudhead.net>
 * Licensed under the Apache v2 License.
 *
 */

 /** * @license Apache v2
 */

!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.less=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;d.length>g;g++)e(d[g]);return e}({1:[function(a,b){var c=a("./utils").addDataAttr,d=a("./browser");b.exports=function(a,b){c(b,d.currentScript(a)),void 0===b.isFileProtocol&&(b.isFileProtocol=/^(file|(chrome|safari)(-extension)?|resource|qrc|app):/.test(a.location.protocol)),b.async=b.async||!1,b.fileAsync=b.fileAsync||!1,b.poll=b.poll||(b.isFileProtocol?1e3:1500),b.env=b.env||("127.0.0.1"==a.location.hostname||"0.0.0.0"==a.location.hostname||"localhost"==a.location.hostname||a.location.port&&a.location.port.length>0||b.isFileProtocol?"development":"production");var e=/!dumpLineNumbers:(comments|mediaquery|all)/.exec(a.location.hash);e&&(b.dumpLineNumbers=e[1]),void 0===b.useFileCache&&(b.useFileCache=!0),void 0===b.onReady&&(b.onReady=!0)}},{"./browser":3,"./utils":9}],2:[function(a,b){a("promise/polyfill.js");var c=window.less||{};a("./add-default-options")(window,c);var d=b.exports=a("./index")(window,c);window.less=d,c.onReady&&(/!watch/.test(window.location.hash)&&d.watch(),d.registerStylesheetsImmediately(),d.pageLoadFinished=d.refresh("development"===d.env))},{"./add-default-options":1,"./index":7,"promise/polyfill.js":94}],3:[function(a,b){var c=a("./utils");b.exports={createCSS:function(a,b,d){var e=d.href||"",f="less:"+(d.title||c.extractId(e)),g=a.getElementById(f),h=!1,i=a.createElement("style");i.setAttribute("type","text/css"),d.media&&i.setAttribute("media",d.media),i.id=f,i.styleSheet||(i.appendChild(a.createTextNode(b)),h=null!==g&&g.childNodes.length>0&&i.childNodes.length>0&&g.firstChild.nodeValue===i.firstChild.nodeValue);var j=a.getElementsByTagName("head")[0];if(null===g||h===!1){var k=d&&d.nextSibling||null;k?k.parentNode.insertBefore(i,k):j.appendChild(i)}if(g&&h===!1&&g.parentNode.removeChild(g),i.styleSheet)try{i.styleSheet.cssText=b}catch(l){throw new Error("Couldn't reassign styleSheet.cssText.")}},currentScript:function(a){var b=a.document;return b.currentScript||function(){var a=b.getElementsByTagName("script");return a[a.length-1]}()}}},{"./utils":9}],4:[function(a,b){b.exports=function(a,b,c){var d=null;if("development"!==b.env)try{d="undefined"==typeof a.localStorage?null:a.localStorage}catch(e){}return{setCSS:function(a,b,e){if(d){c.info("saving "+a+" to cache.");try{d.setItem(a,e),d.setItem(a+":timestamp",b)}catch(f){c.error('failed to save "'+a+'" to local storage for caching.')}}},getCSS:function(a,b){var c=d&&d.getItem(a),e=d&&d.getItem(a+":timestamp");return e&&b.lastModified&&new Date(b.lastModified).valueOf()===new Date(e).valueOf()?c:void 0}}}},{}],5:[function(a,b){var c=a("./utils"),d=a("./browser");b.exports=function(a,b,e){function f(b,f){var g,h,i="less-error-message:"+c.extractId(f||""),j='<li><label>{line}</label><pre class="{class}">{content}</pre></li>',k=a.document.createElement("div"),l=[],m=b.filename||f,n=m.match(/([^\/]+(\?.*)?)$/)[1];k.id=i,k.className="less-error-message",h="<h3>"+(b.type||"Syntax")+"Error: "+(b.message||"There is an error in your .less file")+'</h3><p>in <a href="'+m+'">'+n+"</a> ";var o=function(a,b,c){void 0!==a.extract[b]&&l.push(j.replace(/\{line\}/,(parseInt(a.line,10)||0)+(b-1)).replace(/\{class\}/,c).replace(/\{content\}/,a.extract[b]))};b.extract&&(o(b,0,""),o(b,1,"line"),o(b,2,""),h+="on line "+b.line+", column "+(b.column+1)+":</p><ul>"+l.join("")+"</ul>"),b.stack&&(b.extract||e.logLevel>=4)&&(h+="<br/>Stack Trace</br />"+b.stack.split("\n").slice(1).join("<br/>")),k.innerHTML=h,d.createCSS(a.document,[".less-error-message ul, .less-error-message li {","list-style-type: none;","margin-right: 15px;","padding: 4px 0;","margin: 0;","}",".less-error-message label {","font-size: 12px;","margin-right: 15px;","padding: 4px 0;","color: #cc7777;","}",".less-error-message pre {","color: #dd6666;","padding: 4px 0;","margin: 0;","display: inline-block;","}",".less-error-message pre.line {","color: #ff0000;","}",".less-error-message h3 {","font-size: 20px;","font-weight: bold;","padding: 15px 0 5px 0;","margin: 0;","}",".less-error-message a {","color: #10a","}",".less-error-message .error {","color: red;","font-weight: bold;","padding-bottom: 2px;","border-bottom: 1px dashed red;","}"].join("\n"),{title:"error-message"}),k.style.cssText=["font-family: Arial, sans-serif","border: 1px solid #e00","background-color: #eee","border-radius: 5px","-webkit-border-radius: 5px","-moz-border-radius: 5px","color: #e00","padding: 15px","margin-bottom: 15px"].join(";"),"development"===e.env&&(g=setInterval(function(){var b=a.document,c=b.body;c&&(b.getElementById(i)?c.replaceChild(k,b.getElementById(i)):c.insertBefore(k,c.firstChild),clearInterval(g))},10))}function g(a,b){e.errorReporting&&"html"!==e.errorReporting?"console"===e.errorReporting?k(a,b):"function"==typeof e.errorReporting&&e.errorReporting("add",a,b):f(a,b)}function h(b){var d=a.document.getElementById("less-error-message:"+c.extractId(b));d&&d.parentNode.removeChild(d)}function i(){}function j(a){e.errorReporting&&"html"!==e.errorReporting?"console"===e.errorReporting?i(a):"function"==typeof e.errorReporting&&e.errorReporting("remove",a):h(a)}function k(a,c){var d="{line} {content}",f=a.filename||c,g=[],h=(a.type||"Syntax")+"Error: "+(a.message||"There is an error in your .less file")+" in "+f+" ",i=function(a,b,c){void 0!==a.extract[b]&&g.push(d.replace(/\{line\}/,(parseInt(a.line,10)||0)+(b-1)).replace(/\{class\}/,c).replace(/\{content\}/,a.extract[b]))};a.extract&&(i(a,0,""),i(a,1,"line"),i(a,2,""),h+="on line "+a.line+", column "+(a.column+1)+":\n"+g.join("\n")),a.stack&&(a.extract||e.logLevel>=4)&&(h+="\nStack Trace\n"+a.stack),b.logger.error(h)}return{add:g,remove:j}}},{"./browser":3,"./utils":9}],6:[function(a,b){b.exports=function(b,c){function d(){if(window.XMLHttpRequest&&!("file:"===window.location.protocol&&"ActiveXObject"in window))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(a){return c.error("browser doesn't support AJAX."),null}}var e=a("../less/environment/abstract-file-manager.js"),f={},g=function(){};return g.prototype=new e,g.prototype.alwaysMakePathsAbsolute=function(){return!0},g.prototype.join=function(a,b){return a?this.extractUrlParts(b,a).path:b},g.prototype.doXHR=function(a,e,f,g){function h(b,c,d){b.status>=200&&300>b.status?c(b.responseText,b.getResponseHeader("Last-Modified")):"function"==typeof d&&d(b.status,a)}var i=d(),j=b.isFileProtocol?b.fileAsync:b.async;"function"==typeof i.overrideMimeType&&i.overrideMimeType("text/css"),c.debug("XHR: Getting '"+a+"'"),i.open("GET",a,j),i.setRequestHeader("Accept",e||"text/x-less, text/css; q=0.9, */*; q=0.5"),i.send(null),b.isFileProtocol&&!b.fileAsync?0===i.status||i.status>=200&&300>i.status?f(i.responseText):g(i.status,a):j?i.onreadystatechange=function(){4==i.readyState&&h(i,f,g)}:h(i,f,g)},g.prototype.supports=function(){return!0},g.prototype.clearFileCache=function(){f={}},g.prototype.loadFile=function(a,b,c,d,e){b&&!this.isPathAbsolute(a)&&(a=b+a),c=c||{};var g=this.extractUrlParts(a,window.location.href),h=g.url;if(c.useFileCache&&f[h])try{var i=f[h];e(null,{contents:i,filename:h,webInfo:{lastModified:new Date}})}catch(j){e({filename:h,message:"Error loading file "+h+" error was "+j.message})}else this.doXHR(h,c.mime,function(a,b){f[h]=a,e(null,{contents:a,filename:h,webInfo:{lastModified:b}})},function(a,b){e({type:"File",message:"'"+b+"' wasn't found ("+a+")",href:h})})},g}},{"../less/environment/abstract-file-manager.js":14}],7:[function(a,b){var c=a("./utils").addDataAttr,d=a("./browser");b.exports=function(b,e){function f(a){return e.postProcessor&&"function"==typeof e.postProcessor&&(a=e.postProcessor.call(a,a)||a),a}function g(a){var b={};for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b}function h(a,b){var c=Array.prototype.slice.call(arguments,2);return function(){var d=c.concat(Array.prototype.slice.call(arguments,0));return a.apply(b,d)}}function i(a){for(var b,c=m.getElementsByTagName("style"),d=0;c.length>d;d++)if(b=c[d],b.type.match(t)){var f=g(e);f.modifyVars=a;var i=b.innerHTML||"";f.filename=m.location.href.replace(/#.*$/,""),n.render(i,f,h(function(a,b,c){b?r.add(b,"inline"):(a.type="text/css",a.styleSheet?a.styleSheet.cssText=c.css:a.innerHTML=c.css)},null,b))}}function j(a,b,d,h,i){function j(c){var e=c.contents,g=c.filename,i=c.webInfo,j={currentDirectory:q.getPath(g),filename:g,rootFilename:g,relativeUrls:k.relativeUrls};if(j.entryPath=j.currentDirectory,j.rootpath=k.rootpath||j.currentDirectory,i&&(i.remaining=h,!k.modifyVars)){var l=s.getCSS(g,i);if(!d&&l)return i.local=!0,void b(null,l,e,a,i,g)}r.remove(g),k.rootFileInfo=j,n.render(e,k,function(c,d){c?(c.href=g,b(c)):(d.css=f(d.css),k.modifyVars||s.setCSS(a.href,i.lastModified,d.css),b(null,d.css,e,a,i,g))})}var k=g(e);c(k,a),k.mime=a.type,i&&(k.modifyVars=i),q.loadFile(a.href,null,k,o,function(a,c){return a?void b(a):void j(c)})}function k(a,b,c){for(var d=0;n.sheets.length>d;d++)j(n.sheets[d],a,b,n.sheets.length-(d+1),c)}function l(){"development"===n.env&&(n.watchTimer=setInterval(function(){n.watchMode&&(q.clearFileCache(),k(function(a,c,e,f){a?r.add(a,a.href||f.href):c&&d.createCSS(b.document,c,f)}))},e.poll))}var m=b.document,n=a("../less")();n.options=e;var o=n.environment,p=a("./file-manager")(e,n.logger),q=new p;o.addFileManager(q),n.FileManager=p,a("./log-listener")(n,e);var r=a("./error-reporting")(b,n,e),s=n.cache=e.cache||a("./cache")(b,e,n.logger);e.functions&&n.functions.functionRegistry.addMultiple(e.functions);var t=/^text\/(x-)?less$/;return n.watch=function(){return n.watchMode||(n.env="development",l()),this.watchMode=!0,!0},n.unwatch=function(){return clearInterval(n.watchTimer),this.watchMode=!1,!1},n.registerStylesheetsImmediately=function(){var a=m.getElementsByTagName("link");n.sheets=[];for(var b=0;a.length>b;b++)("stylesheet/less"===a[b].rel||a[b].rel.match(/stylesheet/)&&a[b].type.match(t))&&n.sheets.push(a[b])},n.registerStylesheets=function(){return new Promise(function(a){n.registerStylesheetsImmediately(),a()})},n.modifyVars=function(a){return n.refresh(!0,a,!1)},n.refresh=function(a,c,e){return(a||e)&&e!==!1&&q.clearFileCache(),new Promise(function(e,f){var g,h,j;g=h=new Date,k(function(a,c,i,k,l){return a?(r.add(a,a.href||k.href),void f(a)):(n.logger.info(l.local?"loading "+k.href+" from cache.":"rendered "+k.href+" successfully."),d.createCSS(b.document,c,k),n.logger.info("css for "+k.href+" generated in "+(new Date-h)+"ms"),0===l.remaining&&(j=new Date-g,n.logger.info("less has finished. css generated in "+j+"ms"),e({startTime:g,endTime:h,totalMilliseconds:j,sheets:n.sheets.length})),void(h=new Date))},a,c),i(c)})},n.refreshStyles=i,n}},{"../less":29,"./browser":3,"./cache":4,"./error-reporting":5,"./file-manager":6,"./log-listener":8,"./utils":9}],8:[function(a,b){b.exports=function(a,b){var c=4,d=3,e=2,f=1;b.logLevel="undefined"!=typeof b.logLevel?b.logLevel:"development"===b.env?d:f,b.loggers||(b.loggers=[{debug:function(a){b.logLevel>=c&&console.log(a)},info:function(a){b.logLevel>=d&&console.log(a)},warn:function(a){b.logLevel>=e&&console.warn(a)},error:function(a){b.logLevel>=f&&console.error(a)}}]);for(var g=0;b.loggers.length>g;g++)a.logger.addListener(b.loggers[g])}},{}],9:[function(a,b){b.exports={extractId:function(a){return a.replace(/^[a-z-]+:\/+?[^\/]+/,"").replace(/[\?\&]livereload=\w+/,"").replace(/^\//,"").replace(/\.[a-zA-Z]+$/,"").replace(/[^\.\w-]+/g,"-").replace(/\./g,":")},addDataAttr:function(a,b){for(var c in b.dataset)if(b.dataset.hasOwnProperty(c))if("env"===c||"dumpLineNumbers"===c||"rootpath"===c||"errorReporting"===c)a[c]=b.dataset[c];else try{a[c]=JSON.parse(b.dataset[c])}catch(d){}}}},{}],10:[function(a,b){var c={};b.exports=c;var d=function(a,b,c){if(a)for(var d=0;c.length>d;d++)a.hasOwnProperty(c[d])&&(b[c[d]]=a[c[d]])},e=["paths","relativeUrls","rootpath","strictImports","insecure","dumpLineNumbers","compress","syncImport","chunkInput","mime","useFileCache","processImports","reference","pluginManager"];c.Parse=function(a){d(a,this,e),"string"==typeof this.paths&&(this.paths=[this.paths])};var f=["paths","compress","ieCompat","strictMath","strictUnits","sourceMap","importMultiple","urlArgs","javascriptEnabled","pluginManager","importantScope"];c.Eval=function(a,b){d(a,this,f),"string"==typeof this.paths&&(this.paths=[this.paths]),this.frames=b||[],this.importantScope=this.importantScope||[]},c.Eval.prototype.inParenthesis=function(){this.parensStack||(this.parensStack=[]),this.parensStack.push(!0)},c.Eval.prototype.outOfParenthesis=function(){this.parensStack.pop()},c.Eval.prototype.isMathOn=function(){return this.strictMath?this.parensStack&&this.parensStack.length:!0},c.Eval.prototype.isPathRelative=function(a){return!/^(?:[a-z-]+:|\/|#)/i.test(a)},c.Eval.prototype.normalizePath=function(a){var b,c=a.split("/").reverse();for(a=[];0!==c.length;)switch(b=c.pop()){case".":break;case"..":0===a.length||".."===a[a.length-1]?a.push(b):a.pop();break;default:a.push(b)}return a.join("/")}},{}],11:[function(a,b){b.exports={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgrey:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"}},{}],12:[function(a,b){b.exports={colors:a("./colors"),unitConversions:a("./unit-conversions")}},{"./colors":11,"./unit-conversions":13}],13:[function(a,b){b.exports={length:{m:1,cm:.01,mm:.001,"in":.0254,px:.0254/96,pt:.0254/72,pc:.0254/72*12},duration:{s:1,ms:.001},angle:{rad:1/(2*Math.PI),deg:1/360,grad:.0025,turn:1}}},{}],14:[function(a,b){var c=function(){};c.prototype.getPath=function(a){var b=a.lastIndexOf("?");return b>0&&(a=a.slice(0,b)),b=a.lastIndexOf("/"),0>b&&(b=a.lastIndexOf("\\")),0>b?"":a.slice(0,b+1)},c.prototype.tryAppendExtension=function(a,b){return/(\.[a-z]*$)|([\?;].*)$/.test(a)?a:a+b},c.prototype.tryAppendLessExtension=function(a){return this.tryAppendExtension(a,".less")},c.prototype.supportsSync=function(){return!1},c.prototype.alwaysMakePathsAbsolute=function(){return!1},c.prototype.isPathAbsolute=function(a){return/^(?:[a-z-]+:|\/|\\|#)/i.test(a)},c.prototype.join=function(a,b){return a?a+b:b},c.prototype.pathDiff=function(a,b){var c,d,e,f,g=this.extractUrlParts(a),h=this.extractUrlParts(b),i="";if(g.hostPart!==h.hostPart)return"";for(d=Math.max(h.directories.length,g.directories.length),c=0;d>c&&h.directories[c]===g.directories[c];c++);for(f=h.directories.slice(c),e=g.directories.slice(c),c=0;f.length-1>c;c++)i+="../";for(c=0;e.length-1>c;c++)i+=e[c]+"/";return i},c.prototype.extractUrlParts=function(a,b){var c,d,e=/^((?:[a-z-]+:)?\/+?(?:[^\/\?#]*\/)|([\/\\]))?((?:[^\/\\\?#]*[\/\\])*)([^\/\\\?#]*)([#\?].*)?$/i,f=a.match(e),g={},h=[];if(!f)throw new Error("Could not parse sheet href - '"+a+"'");if(b&&(!f[1]||f[2])){if(d=b.match(e),!d)throw new Error("Could not parse page url - '"+b+"'");f[1]=f[1]||d[1]||"",f[2]||(f[3]=d[3]+f[3])}if(f[3]){for(h=f[3].replace(/\\/g,"/").split("/"),c=0;h.length>c;c++)"."===h[c]&&(h.splice(c,1),c-=1);for(c=0;h.length>c;c++)".."===h[c]&&c>0&&(h.splice(c-1,2),c-=2)}return g.hostPart=f[1],g.directories=h,g.path=(f[1]||"")+h.join("/"),g.fileUrl=g.path+(f[4]||""),g.url=g.fileUrl+(f[5]||""),g},b.exports=c},{}],15:[function(a,b){var c=a("../logger"),d=function(a,b){this.fileManagers=b||[],a=a||{};for(var c=["encodeBase64","mimeLookup","charsetLookup","getSourceMapGenerator"],d=[],e=d.concat(c),f=0;e.length>f;f++){var g=e[f],h=a[g];h?this[g]=h.bind(a):d.length>f&&this.warn("missing required function in environment - "+g)}};d.prototype.getFileManager=function(a,b,d,e,f){a||c.warn("getFileManager called with no filename.. Please report this issue. continuing."),null==b&&c.warn("getFileManager called with null directory.. Please report this issue. continuing.");var g=this.fileManagers;d.pluginManager&&(g=[].concat(g).concat(d.pluginManager.getFileManagers()));for(var h=g.length-1;h>=0;h--){var i=g[h];if(i[f?"supportsSync":"supports"](a,b,d,e))return i}return null},d.prototype.addFileManager=function(a){this.fileManagers.push(a)},d.prototype.clearFileManagers=function(){this.fileManagers=[]},b.exports=d},{"../logger":31}],16:[function(a){function b(a,b,d){var e,f,g,h,i=b.alpha,j=d.alpha,k=[];g=j+i*(1-j);for(var l=0;3>l;l++)e=b.rgb[l]/255,f=d.rgb[l]/255,h=a(e,f),g&&(h=(j*f+i*(e-j*(e+f-h)))/g),k[l]=255*h;return new c(k,g)}var c=a("../tree/color"),d=a("./function-registry"),e={multiply:function(a,b){return a*b},screen:function(a,b){return a+b-a*b},overlay:function(a,b){return a*=2,1>=a?e.multiply(a,b):e.screen(a-1,b)},softlight:function(a,b){var c=1,d=a;return b>.5&&(d=1,c=a>.25?Math.sqrt(a):((16*a-12)*a+4)*a),a-(1-2*b)*d*(c-a)},hardlight:function(a,b){return e.overlay(b,a)},difference:function(a,b){return Math.abs(a-b)},exclusion:function(a,b){return a+b-2*a*b},average:function(a,b){return(a+b)/2},negation:function(a,b){return 1-Math.abs(a+b-1)}};for(var f in e)e.hasOwnProperty(f)&&(b[f]=b.bind(null,e[f]));d.addMultiple(b)},{"../tree/color":48,"./function-registry":21}],17:[function(a){function b(a){return Math.min(1,Math.max(0,a))}function c(a){return f.hsla(a.h,a.s,a.l,a.a)}function d(a){if(a instanceof g)return parseFloat(a.unit.is("%")?a.value/100:a.value);if("number"==typeof a)return a;throw{type:"Argument",message:"color functions take numbers as parameters"}}function e(a,b){return a instanceof g&&a.unit.is("%")?parseFloat(a.value*b/100):d(a)}var f,g=a("../tree/dimension"),h=a("../tree/color"),i=a("../tree/quoted"),j=a("../tree/anonymous"),k=a("./function-registry");f={rgb:function(a,b,c){return f.rgba(a,b,c,1)},rgba:function(a,b,c,f){var g=[a,b,c].map(function(a){return e(a,255)});return f=d(f),new h(g,f)},hsl:function(a,b,c){return f.hsla(a,b,c,1)},hsla:function(a,c,e,g){function h(a){return a=0>a?a+1:a>1?a-1:a,1>6*a?j+(i-j)*a*6:1>2*a?i:2>3*a?j+(i-j)*(2/3-a)*6:j}a=d(a)%360/360,c=b(d(c)),e=b(d(e)),g=b(d(g));var i=.5>=e?e*(c+1):e+c-e*c,j=2*e-i;return f.rgba(255*h(a+1/3),255*h(a),255*h(a-1/3),g)},hsv:function(a,b,c){return f.hsva(a,b,c,1)},hsva:function(a,b,c,e){a=d(a)%360/360*360,b=d(b),c=d(c),e=d(e);var g,h;g=Math.floor(a/60%6),h=a/60-g;var i=[c,c*(1-b),c*(1-h*b),c*(1-(1-h)*b)],j=[[0,3,1],[2,0,1],[1,0,3],[1,2,0],[3,1,0],[0,1,2]];return f.rgba(255*i[j[g][0]],255*i[j[g][1]],255*i[j[g][2]],e)},hue:function(a){return new g(a.toHSL().h)},saturation:function(a){return new g(100*a.toHSL().s,"%")},lightness:function(a){return new g(100*a.toHSL().l,"%")},hsvhue:function(a){return new g(a.toHSV().h)},hsvsaturation:function(a){return new g(100*a.toHSV().s,"%")},hsvvalue:function(a){return new g(100*a.toHSV().v,"%")},red:function(a){return new g(a.rgb[0])},green:function(a){return new g(a.rgb[1])},blue:function(a){return new g(a.rgb[2])},alpha:function(a){return new g(a.toHSL().a)},luma:function(a){return new g(a.luma()*a.alpha*100,"%")},luminance:function(a){var b=.2126*a.rgb[0]/255+.7152*a.rgb[1]/255+.0722*a.rgb[2]/255;return new g(b*a.alpha*100,"%")},saturate:function(a,d,e){if(!a.rgb)return null;var f=a.toHSL();return f.s+="undefined"!=typeof e&&"relative"===e.value?f.s*d.value/100:d.value/100,f.s=b(f.s),c(f)},desaturate:function(a,d,e){var f=a.toHSL();return f.s-="undefined"!=typeof e&&"relative"===e.value?f.s*d.value/100:d.value/100,f.s=b(f.s),c(f)},lighten:function(a,d,e){var f=a.toHSL();return f.l+="undefined"!=typeof e&&"relative"===e.value?f.l*d.value/100:d.value/100,f.l=b(f.l),c(f)},darken:function(a,d,e){var f=a.toHSL();return f.l-="undefined"!=typeof e&&"relative"===e.value?f.l*d.value/100:d.value/100,f.l=b(f.l),c(f)},fadein:function(a,d,e){var f=a.toHSL();return f.a+="undefined"!=typeof e&&"relative"===e.value?f.a*d.value/100:d.value/100,f.a=b(f.a),c(f)},fadeout:function(a,d,e){var f=a.toHSL();return f.a-="undefined"!=typeof e&&"relative"===e.value?f.a*d.value/100:d.value/100,f.a=b(f.a),c(f)},fade:function(a,d){var e=a.toHSL();return e.a=d.value/100,e.a=b(e.a),c(e)},spin:function(a,b){var d=a.toHSL(),e=(d.h+b.value)%360;return d.h=0>e?360+e:e,c(d)},mix:function(a,b,c){a.toHSL&&b.toHSL||(console.log(b.type),console.dir(b)),c||(c=new g(50));var d=c.value/100,e=2*d-1,f=a.toHSL().a-b.toHSL().a,i=((e*f==-1?e:(e+f)/(1+e*f))+1)/2,j=1-i,k=[a.rgb[0]*i+b.rgb[0]*j,a.rgb[1]*i+b.rgb[1]*j,a.rgb[2]*i+b.rgb[2]*j],l=a.alpha*d+b.alpha*(1-d);return new h(k,l)},greyscale:function(a){return f.desaturate(a,new g(100))},contrast:function(a,b,c,e){if(!a.rgb)return null;if("undefined"==typeof c&&(c=f.rgba(255,255,255,1)),"undefined"==typeof b&&(b=f.rgba(0,0,0,1)),b.luma()>c.luma()){var g=c;c=b,b=g}return e="undefined"==typeof e?.43:d(e),a.luma()<e?c:b},argb:function(a){return new j(a.toARGB())},color:function(a){if(a instanceof i&&/^#([a-f0-9]{6}|[a-f0-9]{3})$/i.test(a.value))return new h(a.value.slice(1));if(a instanceof h||(a=h.fromKeyword(a.value)))return a.value=void 0,a;throw{type:"Argument",message:"argument must be a color keyword or 3/6 digit hex e.g. #FFF"}},tint:function(a,b){return f.mix(f.rgb(255,255,255),a,b)},shade:function(a,b){return f.mix(f.rgb(0,0,0),a,b)}},k.addMultiple(f)},{"../tree/anonymous":44,"../tree/color":48,"../tree/dimension":54,"../tree/quoted":71,"./function-registry":21}],18:[function(a,b){b.exports=function(b){var c=a("../tree/quoted"),d=a("../tree/url"),e=a("./function-registry"),f=function(a,b){return new d(b,a.index,a.currentFileInfo).eval(a.context)},g=a("../logger");e.add("data-uri",function(a,e){e||(e=a,a=null);var h=a&&a.value,i=e.value,j=this.currentFileInfo,k=j.relativeUrls?j.currentDirectory:j.entryPath,l=i.indexOf("#"),m="";-1!==l&&(m=i.slice(l),i=i.slice(0,l));var n=b.getFileManager(i,k,this.context,b,!0);if(!n)return f(this,e);var o=!1;if(a)o=/;base64$/.test(h);else{if(h=b.mimeLookup(i),"image/svg+xml"===h)o=!1;else{var p=b.charsetLookup(h);o=["US-ASCII","UTF-8"].indexOf(p)<0}o&&(h+=";base64")}var q=n.loadFileSync(i,k,this.context,b);if(!q.contents)return g.warn("Skipped data-uri embedding of "+i+" because file not found"),f(this,e||a);var r=q.contents;if(o&&!b.encodeBase64)return f(this,e);r=o?b.encodeBase64(r):encodeURIComponent(r);var s="data:"+h+","+r+m,t=32768;return s.length>=t&&this.context.ieCompat!==!1?(g.warn("Skipped data-uri embedding of "+i+" because its size ("+s.length+" characters) exceeds IE8-safe "+t+" characters!"),f(this,e||a)):new d(new c('"'+s+'"',s,!1,this.index,this.currentFileInfo),this.index,this.currentFileInfo)})}},{"../logger":31,"../tree/quoted":71,"../tree/url":78,"./function-registry":21}],19:[function(a,b){var c=a("../tree/keyword"),d=a("./function-registry"),e={eval:function(){var a=this.value_,b=this.error_;if(b)throw b;return null!=a?a?c.True:c.False:void 0},value:function(a){this.value_=a},error:function(a){this.error_=a},reset:function(){this.value_=this.error_=null}};d.add("default",e.eval.bind(e)),b.exports=e},{"../tree/keyword":63,"./function-registry":21}],20:[function(a,b){var c=a("../tree/expression"),d=function(a,b,c,d){this.name=a.toLowerCase(),this.index=c,this.context=b,this.currentFileInfo=d,this.func=b.frames[0].functionRegistry.get(this.name)};d.prototype.isValid=function(){return Boolean(this.func)},d.prototype.call=function(a){return Array.isArray(a)&&(a=a.filter(function(a){return"Comment"===a.type?!1:!0}).map(function(a){if("Expression"===a.type){var b=a.value.filter(function(a){return"Comment"===a.type?!1:!0});return 1===b.length?b[0]:new c(b)}return a})),this.func.apply(this,a)},b.exports=d},{"../tree/expression":57}],21:[function(a,b){function c(a){return{_data:{},add:function(a,b){a=a.toLowerCase(),this._data.hasOwnProperty(a),this._data[a]=b},addMultiple:function(a){Object.keys(a).forEach(function(b){this.add(b,a[b])}.bind(this))},get:function(b){return this._data[b]||a&&a.get(b)},inherit:function(){return c(this)}}}b.exports=c(null)},{}],22:[function(a,b){b.exports=function(b){var c={functionRegistry:a("./function-registry"),functionCaller:a("./function-caller")};return a("./default"),a("./color"),a("./color-blending"),a("./data-uri")(b),a("./math"),a("./number"),a("./string"),a("./svg")(b),a("./types"),c}},{"./color":17,"./color-blending":16,"./data-uri":18,"./default":19,"./function-caller":20,"./function-registry":21,"./math":23,"./number":24,"./string":25,"./svg":26,"./types":27}],23:[function(a){function b(a,b,d){if(!(d instanceof c))throw{type:"Argument",message:"argument must be a number"};return null==b?b=d.unit:d=d.unify(),new c(a(parseFloat(d.value)),b)}var c=a("../tree/dimension"),d=a("./function-registry"),e={ceil:null,floor:null,sqrt:null,abs:null,tan:"",sin:"",cos:"",atan:"rad",asin:"rad",acos:"rad"};for(var f in e)e.hasOwnProperty(f)&&(e[f]=b.bind(null,Math[f],e[f]));e.round=function(a,c){var d="undefined"==typeof c?0:c.value;return b(function(a){return a.toFixed(d)},null,a)},d.addMultiple(e)},{"../tree/dimension":54,"./function-registry":21}],24:[function(a){var b=a("../tree/dimension"),c=a("../tree/anonymous"),d=a("./function-registry"),e=function(a,d){switch(d=Array.prototype.slice.call(d),d.length){case 0:throw{type:"Argument",message:"one or more arguments required"}}var e,f,g,h,i,j,k,l,m=[],n={};for(e=0;d.length>e;e++)if(g=d[e],g instanceof b)if(h=""===g.unit.toString()&&void 0!==l?new b(g.value,l).unify():g.unify(),j=""===h.unit.toString()&&void 0!==k?k:h.unit.toString(),k=""!==j&&void 0===k||""!==j&&""===m[0].unify().unit.toString()?j:k,l=""!==j&&void 0===l?g.unit.toString():l,f=void 0!==n[""]&&""!==j&&j===k?n[""]:n[j],void 0!==f)i=""===m[f].unit.toString()&&void 0!==l?new b(m[f].value,l).unify():m[f].unify(),(a&&i.value>h.value||!a&&h.value>i.value)&&(m[f]=g);else{if(void 0!==k&&j!==k)throw{type:"Argument",message:"incompatible types"};n[j]=m.length,m.push(g)}else Array.isArray(d[e].value)&&Array.prototype.push.apply(d,Array.prototype.slice.call(d[e].value));return 1==m.length?m[0]:(d=m.map(function(a){return a.toCSS(this.context)}).join(this.context.compress?",":", "),new c((a?"min":"max")+"("+d+")"))};d.addMultiple({min:function(){return e(!0,arguments)},max:function(){return e(!1,arguments)},convert:function(a,b){return a.convertTo(b.value)},pi:function(){return new b(Math.PI)},mod:function(a,c){return new b(a.value%c.value,a.unit)},pow:function(a,c){if("number"==typeof a&&"number"==typeof c)a=new b(a),c=new b(c);else if(!(a instanceof b&&c instanceof b))throw{type:"Argument",message:"arguments must be numbers"};return new b(Math.pow(a.value,c.value),a.unit)},percentage:function(a){return new b(100*a.value,"%")}})},{"../tree/anonymous":44,"../tree/dimension":54,"./function-registry":21}],25:[function(a){var b=a("../tree/quoted"),c=a("../tree/anonymous"),d=a("../tree/javascript"),e=a("./function-registry");e.addMultiple({e:function(a){return new c(a instanceof d?a.evaluated:a.value)},escape:function(a){return new c(encodeURI(a.value).replace(/=/g,"%3D").replace(/:/g,"%3A").replace(/#/g,"%23").replace(/;/g,"%3B").replace(/\(/g,"%28").replace(/\)/g,"%29"))},replace:function(a,c,d,e){var f=a.value;return d="Quoted"===d.type?d.value:d.toCSS(),f=f.replace(new RegExp(c.value,e?e.value:""),d),new b(a.quote||"",f,a.escaped)},"%":function(a){for(var c=Array.prototype.slice.call(arguments,1),d=a.value,e=0;c.length>e;e++)d=d.replace(/%[sda]/i,function(a){var b="Quoted"===c[e].type&&a.match(/s/i)?c[e].value:c[e].toCSS();return a.match(/[A-Z]$/)?encodeURIComponent(b):b});return d=d.replace(/%%/g,"%"),new b(a.quote||"",d,a.escaped)}})},{"../tree/anonymous":44,"../tree/javascript":61,"../tree/quoted":71,"./function-registry":21}],26:[function(a,b){b.exports=function(){var b=a("../tree/dimension"),c=a("../tree/color"),d=a("../tree/expression"),e=a("../tree/quoted"),f=a("../tree/url"),g=a("./function-registry");g.add("svg-gradient",function(a){function g(){throw{type:"Argument",message:"svg-gradient expects direction, start_color [start_position], [color position,]..., end_color [end_position] or direction, color list"}}var h,i,j,k,l,m,n,o,p="linear",q='x="0" y="0" width="1" height="1"',r={compress:!1},s=a.toCSS(r);switch(2==arguments.length?(arguments[1].value.length<2&&g(),h=arguments[1].value):arguments.length<3?g():h=Array.prototype.slice.call(arguments,1),s){case"to bottom":i='x1="0%" y1="0%" x2="0%" y2="100%"';break;case"to right":i='x1="0%" y1="0%" x2="100%" y2="0%"';break;case"to bottom right":i='x1="0%" y1="0%" x2="100%" y2="100%"';break;case"to top right":i='x1="0%" y1="100%" x2="100%" y2="0%"';break;case"ellipse":case"ellipse at center":p="radial",i='cx="50%" cy="50%" r="75%"',q='x="-50" y="-50" width="101" height="101"';break;default:throw{type:"Argument",message:"svg-gradient direction must be 'to bottom', 'to right', 'to bottom right', 'to top right' or 'ellipse at center'"}}for(j='<?xml version="1.0" ?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" viewBox="0 0 1 1" preserveAspectRatio="none"><'+p+'Gradient id="gradient" gradientUnits="userSpaceOnUse" '+i+">",
k=0;h.length>k;k+=1)h[k]instanceof d?(l=h[k].value[0],m=h[k].value[1]):(l=h[k],m=void 0),l instanceof c&&((0===k||k+1===h.length)&&void 0===m||m instanceof b)||g(),n=m?m.toCSS(r):0===k?"0%":"100%",o=l.alpha,j+='<stop offset="'+n+'" stop-color="'+l.toRGB()+'"'+(1>o?' stop-opacity="'+o+'"':"")+"/>";return j+="</"+p+"Gradient><rect "+q+' fill="url(#gradient)" /></svg>',j=encodeURIComponent(j),j="data:image/svg+xml,"+j,new f(new e("'"+j+"'",j,!1,this.index,this.currentFileInfo),this.index,this.currentFileInfo)})}},{"../tree/color":48,"../tree/dimension":54,"../tree/expression":57,"../tree/quoted":71,"../tree/url":78,"./function-registry":21}],27:[function(a){var b=a("../tree/keyword"),c=a("../tree/detached-ruleset"),d=a("../tree/dimension"),e=a("../tree/color"),f=a("../tree/quoted"),g=a("../tree/anonymous"),h=a("../tree/url"),i=a("../tree/operation"),j=a("./function-registry"),k=function(a,c){return a instanceof c?b.True:b.False},l=function(a,c){if(void 0===c)throw{type:"Argument",message:"missing the required second argument to isunit."};if(c="string"==typeof c.value?c.value:c,"string"!=typeof c)throw{type:"Argument",message:"Second argument to isunit should be a unit or a string."};return a instanceof d&&a.unit.is(c)?b.True:b.False},m=function(a){var b=Array.isArray(a.value)?a.value:Array(a);return b};j.addMultiple({isruleset:function(a){return k(a,c)},iscolor:function(a){return k(a,e)},isnumber:function(a){return k(a,d)},isstring:function(a){return k(a,f)},iskeyword:function(a){return k(a,b)},isurl:function(a){return k(a,h)},ispixel:function(a){return l(a,"px")},ispercentage:function(a){return l(a,"%")},isem:function(a){return l(a,"em")},isunit:l,unit:function(a,c){if(!(a instanceof d))throw{type:"Argument",message:"the first argument to unit must be a number"+(a instanceof i?". Have you forgotten parenthesis?":"")};return c=c?c instanceof b?c.value:c.toCSS():"",new d(a.value,c)},"get-unit":function(a){return new g(a.unit)},extract:function(a,b){return b=b.value-1,m(a)[b]},length:function(a){return new d(m(a).length)}})},{"../tree/anonymous":44,"../tree/color":48,"../tree/detached-ruleset":53,"../tree/dimension":54,"../tree/keyword":63,"../tree/operation":69,"../tree/quoted":71,"../tree/url":78,"./function-registry":21}],28:[function(a,b){var c=a("./contexts"),d=a("./parser/parser"),e=a("./plugins/function-importer");b.exports=function(a){var b=function(a,b){this.rootFilename=b.filename,this.paths=a.paths||[],this.contents={},this.contentsIgnoredChars={},this.mime=a.mime,this.error=null,this.context=a,this.queue=[],this.files={}};return b.prototype.push=function(b,f,g,h,i){var j=this;this.queue.push(b);var k=function(a,c,d){j.queue.splice(j.queue.indexOf(b),1);var e=d===j.rootFilename;h.optional&&a?i(null,{rules:[]},!1,null):(j.files[d]=c,a&&!j.error&&(j.error=a),i(a,c,e,d))},l={relativeUrls:this.context.relativeUrls,entryPath:g.entryPath,rootpath:g.rootpath,rootFilename:g.rootFilename},m=a.getFileManager(b,g.currentDirectory,this.context,a);if(!m)return void k({message:"Could not find a file-manager for "+b});f&&(b=m.tryAppendExtension(b,h.plugin?".js":".less"));var n=function(a){var b=a.filename,f=a.contents.replace(/^\uFEFF/,"");l.currentDirectory=m.getPath(b),l.relativeUrls&&(l.rootpath=m.join(j.context.rootpath||"",m.pathDiff(l.currentDirectory,l.entryPath)),!m.isPathAbsolute(l.rootpath)&&m.alwaysMakePathsAbsolute()&&(l.rootpath=m.join(l.entryPath,l.rootpath))),l.filename=b;var i=new c.Parse(j.context);i.processImports=!1,j.contents[b]=f,(g.reference||h.reference)&&(l.reference=!0),h.plugin?new e(i,l).eval(f,function(a,c){k(a,c,b)}):h.inline?k(null,f,b):new d(i,j,l).parse(f,function(a,c){k(a,c,b)})},o=m.loadFile(b,g.currentDirectory,this.context,a,function(a,b){a?k(a):n(b)});o&&o.then(n,k)},b}},{"./contexts":10,"./parser/parser":36,"./plugins/function-importer":38}],29:[function(a,b){b.exports=function(b,c){var d,e,f,g,h,i={version:[2,5,1],data:a("./data"),tree:a("./tree"),Environment:h=a("./environment/environment"),AbstractFileManager:a("./environment/abstract-file-manager"),environment:b=new h(b,c),visitors:a("./visitors"),Parser:a("./parser/parser"),functions:a("./functions")(b),contexts:a("./contexts"),SourceMapOutput:d=a("./source-map-output")(b),SourceMapBuilder:e=a("./source-map-builder")(d,b),ParseTree:f=a("./parse-tree")(e),ImportManager:g=a("./import-manager")(b),render:a("./render")(b,f,g),parse:a("./parse")(b,f,g),LessError:a("./less-error"),transformTree:a("./transform-tree"),utils:a("./utils"),PluginManager:a("./plugin-manager"),logger:a("./logger")};return i}},{"./contexts":10,"./data":12,"./environment/abstract-file-manager":14,"./environment/environment":15,"./functions":22,"./import-manager":28,"./less-error":30,"./logger":31,"./parse":33,"./parse-tree":32,"./parser/parser":36,"./plugin-manager":37,"./render":39,"./source-map-builder":40,"./source-map-output":41,"./transform-tree":42,"./tree":60,"./utils":81,"./visitors":85}],30:[function(a,b){var c=a("./utils"),d=b.exports=function(a,b,d){Error.call(this);var e=a.filename||d;if(b&&e){var f=b.contents[e],g=c.getLocation(a.index,f),h=g.line,i=g.column,j=a.call&&c.getLocation(a.call,f).line,k=f.split("\n");this.type=a.type||"Syntax",this.filename=e,this.index=a.index,this.line="number"==typeof h?h+1:null,this.callLine=j+1,this.callExtract=k[j],this.column=i,this.extract=[k[h-1],k[h],k[h+1]]}this.message=a.message,this.stack=a.stack};if("undefined"==typeof Object.create){var e=function(){};e.prototype=Error.prototype,d.prototype=new e}else d.prototype=Object.create(Error.prototype);d.prototype.constructor=d},{"./utils":81}],31:[function(a,b){b.exports={error:function(a){this._fireEvent("error",a)},warn:function(a){this._fireEvent("warn",a)},info:function(a){this._fireEvent("info",a)},debug:function(a){this._fireEvent("debug",a)},addListener:function(a){this._listeners.push(a)},removeListener:function(a){for(var b=0;this._listeners.length>b;b++)if(this._listeners[b]===a)return void this._listeners.splice(b,1)},_fireEvent:function(a,b){for(var c=0;this._listeners.length>c;c++){var d=this._listeners[c][a];d&&d(b)}},_listeners:[]}},{}],32:[function(a,b){var c=a("./less-error"),d=a("./transform-tree"),e=a("./logger");b.exports=function(a){var b=function(a,b){this.root=a,this.imports=b};return b.prototype.toCSS=function(b){var f,g,h={};try{f=d(this.root,b)}catch(i){throw new c(i,this.imports)}try{var j=Boolean(b.compress);j&&e.warn("The compress option has been deprecated. We recommend you use a dedicated css minifier, for instance see less-plugin-clean-css.");var k={compress:j,dumpLineNumbers:b.dumpLineNumbers,strictUnits:Boolean(b.strictUnits),numPrecision:8};b.sourceMap?(g=new a(b.sourceMap),h.css=g.toCSS(f,k,this.imports)):h.css=f.toCSS(k)}catch(i){throw new c(i,this.imports)}if(b.pluginManager)for(var l=b.pluginManager.getPostProcessors(),m=0;l.length>m;m++)h.css=l[m].process(h.css,{sourceMap:g,options:b,imports:this.imports});b.sourceMap&&(h.map=g.getExternalSourceMap()),h.imports=[];for(var n in this.imports.files)this.imports.files.hasOwnProperty(n)&&n!==this.imports.rootFilename&&h.imports.push(n);return h},b}},{"./less-error":30,"./logger":31,"./transform-tree":42}],33:[function(a,b){var c,d=a("./contexts"),e=a("./parser/parser"),f=a("./plugin-manager");b.exports=function(b,g,h){var i=function(b,g,j){if(g=g||{},"function"==typeof g&&(j=g,g={}),!j){c||(c="undefined"==typeof Promise?a("promise"):Promise);var k=this;return new c(function(a,c){i.call(k,b,g,function(b,d){b?c(b):a(d)})})}var l,m,n=new f(this);if(n.addPlugins(g.plugins),g.pluginManager=n,l=new d.Parse(g),g.rootFileInfo)m=g.rootFileInfo;else{var o=g.filename||"input",p=o.replace(/[^\/\\]*$/,"");m={filename:o,relativeUrls:l.relativeUrls,rootpath:l.rootpath||"",currentDirectory:p,entryPath:p,rootFilename:o},m.rootpath&&"/"!==m.rootpath.slice(-1)&&(m.rootpath+="/")}var q=new h(l,m);new e(l,q,m).parse(b,function(a,b){return a?j(a):void j(null,b,q,g)},g)};return i}},{"./contexts":10,"./parser/parser":36,"./plugin-manager":37,promise:void 0}],34:[function(a,b){b.exports=function(a,b){function c(b){var c=h-q;512>c&&!b||!c||(p.push(a.slice(q,h+1)),q=h+1)}var d,e,f,g,h,i,j,k,l,m=a.length,n=0,o=0,p=[],q=0;for(h=0;m>h;h++)if(j=a.charCodeAt(h),!(j>=97&&122>=j||34>j))switch(j){case 40:o++,e=h;continue;case 41:if(--o<0)return b("missing opening `(`",h);continue;case 59:o||c();continue;case 123:n++,d=h;continue;case 125:if(--n<0)return b("missing opening `{`",h);n||o||c();continue;case 92:if(m-1>h){h++;continue}return b("unescaped `\\`",h);case 34:case 39:case 96:for(l=0,i=h,h+=1;m>h;h++)if(k=a.charCodeAt(h),!(k>96)){if(k==j){l=1;break}if(92==k){if(h==m-1)return b("unescaped `\\`",h);h++}}if(l)continue;return b("unmatched `"+String.fromCharCode(j)+"`",i);case 47:if(o||h==m-1)continue;if(k=a.charCodeAt(h+1),47==k)for(h+=2;m>h&&(k=a.charCodeAt(h),!(13>=k)||10!=k&&13!=k);h++);else if(42==k){for(f=i=h,h+=2;m-1>h&&(k=a.charCodeAt(h),125==k&&(g=h),42!=k||47!=a.charCodeAt(h+1));h++);if(h==m-1)return b("missing closing `*/`",i);h++}continue;case 42:if(m-1>h&&47==a.charCodeAt(h+1))return b("unmatched `/*`",h);continue}return 0!==n?f>d&&g>f?b("missing closing `}` or `*/`",d):b("missing closing `}`",d):0!==o?b("missing closing `)`",e):(c(!0),p)}},{}],35:[function(a,b){var c=a("./chunker");b.exports=function(){var a,b,d,e,f,g,h,i=[],j={};j.save=function(){h=j.i,i.push({current:g,i:j.i,j:b})},j.restore=function(a){(j.i>d||j.i===d&&a&&!e)&&(d=j.i,e=a);var c=i.pop();g=c.current,h=j.i=c.i,b=c.j},j.forget=function(){i.pop()},j.isWhitespace=function(b){var c=j.i+(b||0),d=a.charCodeAt(c);return d===k||d===n||d===l||d===m},j.$re=function(a){j.i>h&&(g=g.slice(j.i-h),h=j.i);var b=a.exec(g);return b?(s(b[0].length),"string"==typeof b?b:1===b.length?b[0]:b):null},j.$char=function(b){return a.charAt(j.i)!==b?null:(s(1),b)},j.$str=function(b){for(var c=b.length,d=0;c>d;d++)if(a.charAt(j.i+d)!==b.charAt(d))return null;return s(c),b},j.$quoted=function(){var b=a.charAt(j.i);if("'"===b||'"'===b){for(var c=a.length,d=j.i,e=1;c>e+d;e++){var f=a.charAt(e+d);switch(f){case"\\":e++;continue;case"\r":case"\n":break;case b:var g=a.substr(d,e+1);return s(e+1),g}}return null}};var k=32,l=9,m=10,n=13,o=43,p=44,q=47,r=57;j.autoCommentAbsorb=!0,j.commentStore=[],j.finished=!1;var s=function(c){for(var d,e,i,o=j.i,p=b,r=j.i-h,t=j.i+g.length-r,u=j.i+=c,v=a;t>j.i;j.i++){if(d=v.charCodeAt(j.i),j.autoCommentAbsorb&&d===q){if(e=v.charAt(j.i+1),"/"===e){i={index:j.i,isLineComment:!0};var w=v.indexOf("\n",j.i+2);0>w&&(w=t),j.i=w,i.text=v.substr(i.i,j.i-i.i),j.commentStore.push(i);continue}if("*"===e){var x=v.indexOf("*/",j.i+2);if(x>=0){i={index:j.i,text:v.substr(j.i,x+2-j.i),isLineComment:!1},j.i+=i.text.length-1,j.commentStore.push(i);continue}}break}if(d!==k&&d!==m&&d!==l&&d!==n)break}if(g=g.slice(c+j.i-u+r),h=j.i,!g.length){if(f.length-1>b)return g=f[++b],s(0),!0;j.finished=!0}return o!==j.i||p!==b};return j.peek=function(b){if("string"==typeof b){for(var c=0;b.length>c;c++)if(a.charAt(j.i+c)!==b.charAt(c))return!1;return!0}return b.test(g)},j.peekChar=function(b){return a.charAt(j.i)===b},j.currentChar=function(){return a.charAt(j.i)},j.getInput=function(){return a},j.peekNotNumeric=function(){var b=a.charCodeAt(j.i);return b>r||o>b||b===q||b===p},j.start=function(e,i,k){a=e,j.i=b=h=d=0,f=i?c(e,k):[e],g=f[0],s(0)},j.end=function(){var b,c=j.i>=a.length;return d>j.i&&(b=e,j.i=d),{isFinished:c,furthest:j.i,furthestPossibleErrorMessage:b,furthestReachedEnd:j.i>=a.length-1,furthestChar:a[j.i]}},j}},{"./chunker":34}],36:[function(a,b){var c=a("../less-error"),d=a("../tree"),e=a("../visitors"),f=a("./parser-input"),g=a("../utils"),h=function i(a,b,h){function j(a,b){var c="[object Function]"===Object.prototype.toString.call(a)?a.call(n):o.$re(a);return c?c:void l(b||("string"==typeof a?"expected '"+a+"' got '"+o.currentChar()+"'":"unexpected token"))}function k(a,b){return o.$char(a)?a:void l(b||"expected '"+a+"' got '"+o.currentChar()+"'")}function l(a,d){throw new c({index:o.i,filename:h.filename,type:d||"Syntax",message:a},b)}function m(a){var b=h.filename;return{lineNumber:g.getLocation(a,o.getInput()).line+1,fileName:b}}var n,o=f();return{parse:function(f,g,j){var k,l,m,n,p=null,q="";if(l=j&&j.globalVars?i.serializeVars(j.globalVars)+"\n":"",m=j&&j.modifyVars?"\n"+i.serializeVars(j.modifyVars):"",a.pluginManager)for(var r=a.pluginManager.getPreProcessors(),s=0;r.length>s;s++)f=r[s].process(f,{context:a,imports:b,fileInfo:h});(l||j&&j.banner)&&(q=(j&&j.banner?j.banner:"")+l,n=b.contentsIgnoredChars,n[h.filename]=n[h.filename]||0,n[h.filename]+=q.length),f=f.replace(/\r\n?/g,"\n"),f=q+f.replace(/^\uFEFF/,"")+m,b.contents[h.filename]=f;try{o.start(f,a.chunkInput,function(a,d){throw new c({index:d,type:"Parse",message:a,filename:h.filename},b)}),k=new d.Ruleset(null,this.parsers.primary()),k.root=!0,k.firstRoot=!0}catch(t){return g(new c(t,b,h.filename))}var u=o.end();if(!u.isFinished){var v=u.furthestPossibleErrorMessage;v||(v="Unrecognised input","}"===u.furthestChar?v+=". Possibly missing opening '{'":")"===u.furthestChar?v+=". Possibly missing opening '('":u.furthestReachedEnd&&(v+=". Possibly missing something")),p=new c({type:"Parse",message:v,index:u.furthest,filename:h.filename},b)}var w=function(a){return a=p||a||b.error,a?(a instanceof c||(a=new c(a,b,h.filename)),g(a)):g(null,k)};return a.processImports===!1?w():void new e.ImportVisitor(b,w).run(k)},parsers:n={primary:function(){for(var a,b=this.mixin,c=[];;){for(;;){if(a=this.comment(),!a)break;c.push(a)}if(o.finished)break;if(o.peek("}"))break;if(a=this.extendRule())c=c.concat(a);else if(a=b.definition()||this.rule()||this.ruleset()||b.call()||this.rulesetCall()||this.directive())c.push(a);else{for(var d=!1;o.$char(";");)d=!0;if(!d)break}}return c},comment:function(){if(o.commentStore.length){var a=o.commentStore.shift();return new d.Comment(a.text,a.isLineComment,a.index,h)}},entities:{quoted:function(){var a,b=o.i,c=!1;return o.save(),o.$char("~")&&(c=!0),(a=o.$quoted())?(o.forget(),new d.Quoted(a.charAt(0),a.substr(1,a.length-2),c,b,h)):void o.restore()},keyword:function(){var a=o.$char("%")||o.$re(/^[_A-Za-z-][_A-Za-z0-9-]*/);return a?d.Color.fromKeyword(a)||new d.Keyword(a):void 0},call:function(){var a,b,c,e,f=o.i;if(!o.peek(/^url\(/i))return o.save(),(a=o.$re(/^([\w-]+|%|progid:[\w\.]+)\(/))?(a=a[1],b=a.toLowerCase(),"alpha"===b&&(e=n.alpha())?(o.forget(),e):(c=this.arguments(),o.$char(")")?(o.forget(),new d.Call(a,c,f,h)):void o.restore("Could not parse call arguments or missing ')'"))):void o.forget()},arguments:function(){for(var a,b=[];;){if(a=this.assignment()||n.expression(),!a)break;if(b.push(a),!o.$char(","))break}return b},literal:function(){return this.dimension()||this.color()||this.quoted()||this.unicodeDescriptor()},assignment:function(){var a,b;return o.save(),(a=o.$re(/^\w+(?=\s?=)/i))&&o.$char("=")&&(b=n.entity())?(o.forget(),new d.Assignment(a,b)):void o.restore()},url:function(){var a,b=o.i;return o.autoCommentAbsorb=!1,o.$str("url(")?(a=this.quoted()||this.variable()||o.$re(/^(?:(?:\\[\(\)'"])|[^\(\)'"])+/)||"",o.autoCommentAbsorb=!0,k(")"),new d.URL(null!=a.value||a instanceof d.Variable?a:new d.Anonymous(a),b,h)):void(o.autoCommentAbsorb=!0)},variable:function(){var a,b=o.i;return"@"===o.currentChar()&&(a=o.$re(/^@@?[\w-]+/))?new d.Variable(a,b,h):void 0},variableCurly:function(){var a,b=o.i;return"@"===o.currentChar()&&(a=o.$re(/^@\{([\w-]+)\}/))?new d.Variable("@"+a[1],b,h):void 0},color:function(){var a;if("#"===o.currentChar()&&(a=o.$re(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/))){var b=a.input.match(/^#([\w]+).*/);return b=b[1],b.match(/^[A-Fa-f0-9]+$/)||l("Invalid HEX color code"),new d.Color(a[1])}},dimension:function(){if(!o.peekNotNumeric()){var a=o.$re(/^([+-]?\d*\.?\d+)(%|[a-z]+)?/i);return a?new d.Dimension(a[1],a[2]):void 0}},unicodeDescriptor:function(){var a;return a=o.$re(/^U\+[0-9a-fA-F?]+(\-[0-9a-fA-F?]+)?/),a?new d.UnicodeDescriptor(a[0]):void 0},javascript:function(){var a,b=o.i;o.save();var c=o.$char("~"),e=o.$char("`");return e?(a=o.$re(/^[^`]*`/))?(o.forget(),new d.JavaScript(a.substr(0,a.length-1),Boolean(c),b,h)):void o.restore("invalid javascript definition"):void o.restore()}},variable:function(){var a;return"@"===o.currentChar()&&(a=o.$re(/^(@[\w-]+)\s*:/))?a[1]:void 0},rulesetCall:function(){var a;return"@"===o.currentChar()&&(a=o.$re(/^(@[\w-]+)\s*\(\s*\)\s*;/))?new d.RulesetCall(a[1]):void 0},extend:function(a){var b,c,e,f,g,h=o.i;if(o.$str(a?"&:extend(":":extend(")){do{for(e=null,b=null;!(e=o.$re(/^(all)(?=\s*(\)|,))/))&&(c=this.element());)b?b.push(c):b=[c];e=e&&e[1],b||l("Missing target selector for :extend()."),g=new d.Extend(new d.Selector(b),e,h),f?f.push(g):f=[g]}while(o.$char(","));return j(/^\)/),a&&j(/^;/),f}},extendRule:function(){return this.extend(!0)},mixin:{call:function(){var a,b,c,e,f,g,i=o.currentChar(),j=!1,l=o.i;if("."===i||"#"===i){for(o.save();;){if(a=o.i,e=o.$re(/^[#.](?:[\w-]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+/),!e)break;c=new d.Element(f,e,a,h),b?b.push(c):b=[c],f=o.$char(">")}return b&&(o.$char("(")&&(g=this.args(!0).args,k(")")),n.important()&&(j=!0),n.end())?(o.forget(),new d.mixin.Call(b,g,l,h,j)):void o.restore()}},args:function(a){var b,c,e,f,g,h,i=n.entities,j={args:null,variadic:!1},k=[],m=[],p=[];for(o.save();;){if(a)h=n.detachedRuleset()||n.expression();else{if(o.commentStore.length=0,o.$str("...")){j.variadic=!0,o.$char(";")&&!b&&(b=!0),(b?m:p).push({variadic:!0});break}h=i.variable()||i.literal()||i.keyword()}if(!h)break;f=null,h.throwAwayComments&&h.throwAwayComments(),g=h;var q=null;if(a?h.value&&1==h.value.length&&(q=h.value[0]):q=h,q&&q instanceof d.Variable)if(o.$char(":")){if(k.length>0&&(b&&l("Cannot mix ; and , as delimiter types"),c=!0),g=n.detachedRuleset()||n.expression(),!g){if(!a)return o.restore(),j.args=[],j;l("could not understand value for named argument")}f=e=q.name}else{if(!a&&o.$str("...")){j.variadic=!0,o.$char(";")&&!b&&(b=!0),(b?m:p).push({name:h.name,variadic:!0});break}a||(e=f=q.name,g=null)}g&&k.push(g),p.push({name:f,value:g}),o.$char(",")||(o.$char(";")||b)&&(c&&l("Cannot mix ; and , as delimiter types"),b=!0,k.length>1&&(g=new d.Value(k)),m.push({name:e,value:g}),e=null,k=[],c=!1)}return o.forget(),j.args=b?m:p,j},definition:function(){var a,b,c,e,f=[],g=!1;if(!("."!==o.currentChar()&&"#"!==o.currentChar()||o.peek(/^[^{]*\}/)))if(o.save(),b=o.$re(/^([#.](?:[\w-]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+)\s*\(/)){a=b[1];var h=this.args(!1);if(f=h.args,g=h.variadic,!o.$char(")"))return void o.restore("Missing closing ')'");if(o.commentStore.length=0,o.$str("when")&&(e=j(n.conditions,"expected condition")),c=n.block())return o.forget(),new d.mixin.Definition(a,f,c,e,g);o.restore()}else o.forget()}},entity:function(){var a=this.entities;return this.comment()||a.literal()||a.variable()||a.url()||a.call()||a.keyword()||a.javascript()},end:function(){return o.$char(";")||o.peek("}")},alpha:function(){var a;if(o.$re(/^opacity=/i))return a=o.$re(/^\d+/),a||(a=j(this.entities.variable,"Could not parse alpha")),k(")"),new d.Alpha(a)},element:function(){var a,b,c,e=o.i;return b=this.combinator(),a=o.$re(/^(?:\d+\.\d+|\d+)%/)||o.$re(/^(?:[.#]?|:*)(?:[\w-]|[^\x00-\x9f]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+/)||o.$char("*")||o.$char("&")||this.attribute()||o.$re(/^\([^&()@]+\)/)||o.$re(/^[\.#:](?=@)/)||this.entities.variableCurly(),a||(o.save(),o.$char("(")?(c=this.selector())&&o.$char(")")?(a=new d.Paren(c),o.forget()):o.restore("Missing closing ')'"):o.forget()),a?new d.Element(b,a,e,h):void 0},combinator:function(){var a=o.currentChar();if("/"===a){o.save();var b=o.$re(/^\/[a-z]+\//i);if(b)return o.forget(),new d.Combinator(b);o.restore()}if(">"===a||"+"===a||"~"===a||"|"===a||"^"===a){for(o.i++,"^"===a&&"^"===o.currentChar()&&(a="^^",o.i++);o.isWhitespace();)o.i++;return new d.Combinator(a)}return new d.Combinator(o.isWhitespace(-1)?" ":null)},lessSelector:function(){return this.selector(!0)},selector:function(a){for(var b,c,e,f,g,i,k,m=o.i;(a&&(c=this.extend())||a&&(i=o.$str("when"))||(f=this.element()))&&(i?k=j(this.conditions,"expected condition"):k?l("CSS guard can only be used at the end of selector"):c?g=g?g.concat(c):c:(g&&l("Extend can only be used at the end of selector"),e=o.currentChar(),b?b.push(f):b=[f],f=null),"{"!==e&&"}"!==e&&";"!==e&&","!==e&&")"!==e););return b?new d.Selector(b,g,k,m,h):void(g&&l("Extend must be used to extend a selector, it cannot be used on its own"))},attribute:function(){if(o.$char("[")){var a,b,c,e=this.entities;return(a=e.variableCurly())||(a=j(/^(?:[_A-Za-z0-9-\*]*\|)?(?:[_A-Za-z0-9-]|\\.)+/)),c=o.$re(/^[|~*$^]?=/),c&&(b=e.quoted()||o.$re(/^[0-9]+%/)||o.$re(/^[\w-]+/)||e.variableCurly()),k("]"),new d.Attribute(a,c,b)}},block:function(){var a;return o.$char("{")&&(a=this.primary())&&o.$char("}")?a:void 0},blockRuleset:function(){var a=this.block();return a&&(a=new d.Ruleset(null,a)),a},detachedRuleset:function(){var a=this.blockRuleset();return a?new d.DetachedRuleset(a):void 0},ruleset:function(){var b,c,e,f;for(o.save(),a.dumpLineNumbers&&(f=m(o.i));;){if(c=this.lessSelector(),!c)break;if(b?b.push(c):b=[c],o.commentStore.length=0,c.condition&&b.length>1&&l("Guards are only currently allowed on a single selector."),!o.$char(","))break;c.condition&&l("Guards are only currently allowed on a single selector."),o.commentStore.length=0}if(b&&(e=this.block())){o.forget();var g=new d.Ruleset(b,e,a.strictImports);return a.dumpLineNumbers&&(g.debugInfo=f),g}o.restore()},rule:function(b){var c,e,f,g,i,j=o.i,k=o.currentChar();if("."!==k&&"#"!==k&&"&"!==k&&":"!==k)if(o.save(),c=this.variable()||this.ruleProperty()){if(i="string"==typeof c,i&&(e=this.detachedRuleset()),o.commentStore.length=0,!e){g=!i&&c.length>1&&c.pop().value;var l=!b&&(a.compress||i);if(l&&(e=this.value()),!e&&(e=this.anonymousValue()))return o.forget(),new d.Rule(c,e,!1,g,j,h);l||e||(e=this.value()),f=this.important()}if(e&&this.end())return o.forget(),new d.Rule(c,e,f,g,j,h);if(o.restore(),e&&!b)return this.rule(!0)}else o.forget()},anonymousValue:function(){var a=o.$re(/^([^@+\/'"*`(;{}-]*);/);return a?new d.Anonymous(a[1]):void 0},"import":function(){var a,b,c=o.i,e=o.$re(/^@import?\s+/);if(e){var f=(e?this.importOptions():null)||{};if(a=this.entities.quoted()||this.entities.url())return b=this.mediaFeatures(),o.$char(";")||(o.i=c,l("missing semi-colon or unrecognised media features on import")),b=b&&new d.Value(b),new d.Import(a,b,f,c,h);o.i=c,l("malformed import statement")}},importOptions:function(){var a,b,c,d={};if(!o.$char("("))return null;do if(a=this.importOption()){switch(b=a,c=!0,b){case"css":b="less",c=!1;break;case"once":b="multiple",c=!1}if(d[b]=c,!o.$char(","))break}while(a);return k(")"),d},importOption:function(){var a=o.$re(/^(less|css|multiple|once|inline|reference|optional)/);return a?a[1]:void 0},mediaFeature:function(){var a,b,c=this.entities,e=[];o.save();do if(a=c.keyword()||c.variable())e.push(a);else if(o.$char("(")){if(b=this.property(),a=this.value(),!o.$char(")"))return o.restore("Missing closing ')'"),null;if(b&&a)e.push(new d.Paren(new d.Rule(b,a,null,null,o.i,h,!0)));else{if(!a)return o.restore("badly formed media feature definition"),null;e.push(new d.Paren(a))}}while(a);return o.forget(),e.length>0?new d.Expression(e):void 0},mediaFeatures:function(){var a,b=this.entities,c=[];do if(a=this.mediaFeature()){if(c.push(a),!o.$char(","))break}else if(a=b.variable(),a&&(c.push(a),!o.$char(",")))break;while(a);return c.length>0?c:null},media:function(){var b,c,e,f;return a.dumpLineNumbers&&(f=m(o.i)),o.save(),o.$str("@media")?(b=this.mediaFeatures(),(c=this.block())?(o.forget(),e=new d.Media(c,b,o.i,h),a.dumpLineNumbers&&(e.debugInfo=f),e):void o.restore("media definitions require block statements after any features")):void o.restore()},plugin:function(){var a,b=o.i,c=o.$re(/^@plugin?\s+/);if(c){var e={plugin:!0};if(a=this.entities.quoted()||this.entities.url())return o.$char(";")||(o.i=b,l("missing semi-colon on plugin")),new d.Import(a,null,e,b,h);o.i=b,l("malformed plugin statement")}},directive:function(){var b,c,e,f,g,i,j,k=o.i,n=!0,p=!0;if("@"===o.currentChar()){if(c=this["import"]()||this.plugin()||this.media())return c;if(o.save(),b=o.$re(/^@[a-z-]+/)){switch(f=b,"-"==b.charAt(1)&&b.indexOf("-",2)>0&&(f="@"+b.slice(b.indexOf("-",2)+1)),f){case"@counter-style":g=!0,n=!0;break;case"@charset":g=!0,n=!1;break;case"@namespace":i=!0,n=!1;break;case"@keyframes":g=!0;break;case"@host":case"@page":j=!0;break;case"@document":case"@supports":j=!0,p=!1}return o.commentStore.length=0,g?(c=this.entity(),c||l("expected "+b+" identifier")):i?(c=this.expression(),c||l("expected "+b+" expression")):j&&(c=(o.$re(/^[^{;]+/)||"").trim(),c&&(c=new d.Anonymous(c))),n&&(e=this.blockRuleset()),e||!n&&c&&o.$char(";")?(o.forget(),new d.Directive(b,c,e,k,h,a.dumpLineNumbers?m(k):null,!1,p)):void o.restore("directive options not recognised")}}},value:function(){var a,b=[];do if(a=this.expression(),a&&(b.push(a),!o.$char(",")))break;while(a);return b.length>0?new d.Value(b):void 0},important:function(){return"!"===o.currentChar()?o.$re(/^! *important/):void 0},sub:function(){var a,b;return o.save(),o.$char("(")?(a=this.addition(),a&&o.$char(")")?(o.forget(),b=new d.Expression([a]),b.parens=!0,b):void o.restore("Expected ')'")):void o.restore()},multiplication:function(){var a,b,c,e,f;if(a=this.operand()){for(f=o.isWhitespace(-1);;){if(o.peek(/^\/[*\/]/))break;if(o.save(),c=o.$char("/")||o.$char("*"),!c){o.forget();break}if(b=this.operand(),!b){o.restore();break}o.forget(),a.parensInOp=!0,b.parensInOp=!0,e=new d.Operation(c,[e||a,b],f),f=o.isWhitespace(-1)}return e||a}},addition:function(){var a,b,c,e,f;if(a=this.multiplication()){for(f=o.isWhitespace(-1);;){if(c=o.$re(/^[-+]\s+/)||!f&&(o.$char("+")||o.$char("-")),!c)break;if(b=this.multiplication(),!b)break;a.parensInOp=!0,b.parensInOp=!0,e=new d.Operation(c,[e||a,b],f),f=o.isWhitespace(-1)}return e||a}},conditions:function(){var a,b,c,e=o.i;if(a=this.condition()){for(;;){if(!o.peek(/^,\s*(not\s*)?\(/)||!o.$char(","))break;if(b=this.condition(),!b)break;c=new d.Condition("or",c||a,b,e)}return c||a}},condition:function(){var a,b,c,e,f=this.entities,g=o.i,h=!1;return o.$str("not")&&(h=!0),k("("),a=this.addition()||f.keyword()||f.quoted(),a?(o.$char(">")?e=o.$char("=")?">=":">":o.$char("<")?e=o.$char("=")?"<=":"<":o.$char("=")&&(e=o.$char(">")?"=>":o.$char("<")?"=<":"="),e?(b=this.addition()||f.keyword()||f.quoted(),b?c=new d.Condition(e,a,b,g,h):l("expected expression")):c=new d.Condition("=",a,new d.Keyword("true"),g,h),k(")"),o.$str("and")?new d.Condition("and",c,this.condition()):c):void 0},operand:function(){var a,b=this.entities;o.peek(/^-[@\(]/)&&(a=o.$char("-"));var c=this.sub()||b.dimension()||b.color()||b.variable()||b.call();return a&&(c.parensInOp=!0,c=new d.Negative(c)),c},expression:function(){var a,b,c=[];do a=this.comment(),a?c.push(a):(a=this.addition()||this.entity(),a&&(c.push(a),o.peek(/^\/[\/*]/)||(b=o.$char("/"),b&&c.push(new d.Anonymous(b)))));while(a);return c.length>0?new d.Expression(c):void 0},property:function(){var a=o.$re(/^(\*?-?[_a-zA-Z0-9-]+)\s*:/);return a?a[1]:void 0},ruleProperty:function(){function a(a){var b=o.i,c=o.$re(a);return c?(f.push(b),e.push(c[1])):void 0}var b,c,e=[],f=[];o.save();var g=o.$re(/^([_a-zA-Z0-9-]+)\s*:/);if(g)return e=[new d.Keyword(g[1])],o.forget(),e;for(a(/^(\*?)/);;)if(!a(/^((?:[\w-]+)|(?:@\{[\w-]+\}))/))break;if(e.length>1&&a(/^((?:\+_|\+)?)\s*:/)){for(o.forget(),""===e[0]&&(e.shift(),f.shift()),c=0;e.length>c;c++)b=e[c],e[c]="@"!==b.charAt(0)?new d.Keyword(b):new d.Variable("@"+b.slice(2,-1),f[c],h);return e}o.restore()}}}};h.serializeVars=function(a){var b="";for(var c in a)if(Object.hasOwnProperty.call(a,c)){var d=a[c];b+=("@"===c[0]?"":"@")+c+": "+d+(";"===String(d).slice(-1)?"":";")}return b},b.exports=h},{"../less-error":30,"../tree":60,"../utils":81,"../visitors":85,"./parser-input":35}],37:[function(a,b){var c=function(a){this.less=a,this.visitors=[],this.preProcessors=[],this.postProcessors=[],this.installedPlugins=[],this.fileManagers=[]};c.prototype.addPlugins=function(a){if(a)for(var b=0;a.length>b;b++)this.addPlugin(a[b])},c.prototype.addPlugin=function(a){this.installedPlugins.push(a),a.install(this.less,this)},c.prototype.addVisitor=function(a){this.visitors.push(a)},c.prototype.addPreProcessor=function(a,b){var c;for(c=0;this.preProcessors.length>c&&!(this.preProcessors[c].priority>=b);c++);this.preProcessors.splice(c,0,{preProcessor:a,priority:b})},c.prototype.addPostProcessor=function(a,b){var c;for(c=0;this.postProcessors.length>c&&!(this.postProcessors[c].priority>=b);c++);this.postProcessors.splice(c,0,{postProcessor:a,priority:b})},c.prototype.addFileManager=function(a){this.fileManagers.push(a)},c.prototype.getPreProcessors=function(){for(var a=[],b=0;this.preProcessors.length>b;b++)a.push(this.preProcessors[b].preProcessor);return a},c.prototype.getPostProcessors=function(){for(var a=[],b=0;this.postProcessors.length>b;b++)a.push(this.postProcessors[b].postProcessor);return a},c.prototype.getVisitors=function(){return this.visitors},c.prototype.getFileManagers=function(){return this.fileManagers},b.exports=c},{}],38:[function(a,b){var c=a("../less-error"),d=a("../tree"),e=b.exports=function(a,b){this.fileInfo=b};e.prototype.eval=function(a,b){var e,f,g={};f={add:function(a,b){g[a]=b},addMultiple:function(a){Object.keys(a).forEach(function(b){g[b]=a[b]})}};try{e=new Function("functions","tree","fileInfo",a),e(f,d,this.fileInfo)}catch(h){b(new c({message:"Plugin evaluation error: '"+h.name+": "+h.message.replace(/["]/g,"'")+"'",filename:this.fileInfo.filename}),null)}b(null,{functions:g})}},{"../less-error":30,"../tree":60}],39:[function(a,b){var c;b.exports=function(b,d){var e=function(b,f,g){if("function"==typeof f&&(g=f,f={}),!g){c||(c="undefined"==typeof Promise?a("promise"):Promise);var h=this;return new c(function(a,c){e.call(h,b,f,function(b,d){b?c(b):a(d)})})}this.parse(b,f,function(a,b,c,e){if(a)return g(a);var f;try{var h=new d(b,c);f=h.toCSS(e)}catch(a){return g(a)}g(null,f)})};return e}},{promise:void 0}],40:[function(a,b){b.exports=function(a,b){var c=function(a){this.options=a};return c.prototype.toCSS=function(b,c,d){var e=new a({contentsIgnoredCharsMap:d.contentsIgnoredChars,rootNode:b,contentsMap:d.contents,sourceMapFilename:this.options.sourceMapFilename,sourceMapURL:this.options.sourceMapURL,outputFilename:this.options.sourceMapOutputFilename,sourceMapBasepath:this.options.sourceMapBasepath,sourceMapRootpath:this.options.sourceMapRootpath,outputSourceFiles:this.options.outputSourceFiles,sourceMapGenerator:this.options.sourceMapGenerator,sourceMapFileInline:this.options.sourceMapFileInline}),f=e.toCSS(c);return this.sourceMap=e.sourceMap,this.sourceMapURL=e.sourceMapURL,this.options.sourceMapInputFilename&&(this.sourceMapInputFilename=e.normalizeFilename(this.options.sourceMapInputFilename)),f+this.getCSSAppendage()},c.prototype.getCSSAppendage=function(){var a=this.sourceMapURL;if(this.options.sourceMapFileInline){if(void 0===this.sourceMap)return"";a="data:application/json;base64,"+b.encodeBase64(this.sourceMap)}return a?"/*# sourceMappingURL="+a+" */":""},c.prototype.getExternalSourceMap=function(){return this.sourceMap},c.prototype.setExternalSourceMap=function(a){this.sourceMap=a},c.prototype.isInline=function(){return this.options.sourceMapFileInline},c.prototype.getSourceMapURL=function(){return this.sourceMapURL},c.prototype.getOutputFilename=function(){return this.options.sourceMapOutputFilename},c.prototype.getInputFilename=function(){return this.sourceMapInputFilename},c}},{}],41:[function(a,b){b.exports=function(a){var b=function(b){this._css=[],this._rootNode=b.rootNode,this._contentsMap=b.contentsMap,this._contentsIgnoredCharsMap=b.contentsIgnoredCharsMap,b.sourceMapFilename&&(this._sourceMapFilename=b.sourceMapFilename.replace(/\\/g,"/")),this._outputFilename=b.outputFilename,this.sourceMapURL=b.sourceMapURL,b.sourceMapBasepath&&(this._sourceMapBasepath=b.sourceMapBasepath.replace(/\\/g,"/")),
b.sourceMapRootpath?(this._sourceMapRootpath=b.sourceMapRootpath.replace(/\\/g,"/"),"/"!==this._sourceMapRootpath.charAt(this._sourceMapRootpath.length-1)&&(this._sourceMapRootpath+="/")):this._sourceMapRootpath="",this._outputSourceFiles=b.outputSourceFiles,this._sourceMapGeneratorConstructor=a.getSourceMapGenerator(),this._lineNumber=0,this._column=0};return b.prototype.normalizeFilename=function(a){return a=a.replace(/\\/g,"/"),this._sourceMapBasepath&&0===a.indexOf(this._sourceMapBasepath)&&(a=a.substring(this._sourceMapBasepath.length),("\\"===a.charAt(0)||"/"===a.charAt(0))&&(a=a.substring(1))),(this._sourceMapRootpath||"")+a},b.prototype.add=function(a,b,c,d){if(a){var e,f,g,h,i;if(b){var j=this._contentsMap[b.filename];this._contentsIgnoredCharsMap[b.filename]&&(c-=this._contentsIgnoredCharsMap[b.filename],0>c&&(c=0),j=j.slice(this._contentsIgnoredCharsMap[b.filename])),j=j.substring(0,c),f=j.split("\n"),h=f[f.length-1]}if(e=a.split("\n"),g=e[e.length-1],b)if(d)for(i=0;e.length>i;i++)this._sourceMapGenerator.addMapping({generated:{line:this._lineNumber+i+1,column:0===i?this._column:0},original:{line:f.length+i,column:0===i?h.length:0},source:this.normalizeFilename(b.filename)});else this._sourceMapGenerator.addMapping({generated:{line:this._lineNumber+1,column:this._column},original:{line:f.length,column:h.length},source:this.normalizeFilename(b.filename)});1===e.length?this._column+=g.length:(this._lineNumber+=e.length-1,this._column=g.length),this._css.push(a)}},b.prototype.isEmpty=function(){return 0===this._css.length},b.prototype.toCSS=function(a){if(this._sourceMapGenerator=new this._sourceMapGeneratorConstructor({file:this._outputFilename,sourceRoot:null}),this._outputSourceFiles)for(var b in this._contentsMap)if(this._contentsMap.hasOwnProperty(b)){var c=this._contentsMap[b];this._contentsIgnoredCharsMap[b]&&(c=c.slice(this._contentsIgnoredCharsMap[b])),this._sourceMapGenerator.setSourceContent(this.normalizeFilename(b),c)}if(this._rootNode.genCSS(a,this),this._css.length>0){var d,e=JSON.stringify(this._sourceMapGenerator.toJSON());this.sourceMapURL?d=this.sourceMapURL:this._sourceMapFilename&&(d=this._sourceMapFilename),this.sourceMapURL=d,this.sourceMap=e}return this._css.join("")},b}},{}],42:[function(a,b){var c=a("./contexts"),d=a("./visitors"),e=a("./tree");b.exports=function(a,b){b=b||{};var f,g=b.variables,h=new c.Eval(b);"object"!=typeof g||Array.isArray(g)||(g=Object.keys(g).map(function(a){var b=g[a];return b instanceof e.Value||(b instanceof e.Expression||(b=new e.Expression([b])),b=new e.Value([b])),new e.Rule("@"+a,b,!1,null,0)}),h.frames=[new e.Ruleset(null,g)]);var i,j=[],k=[new d.JoinSelectorVisitor,new d.ExtendVisitor,new d.ToCSSVisitor({compress:Boolean(b.compress)})];if(b.pluginManager){var l=b.pluginManager.getVisitors();for(i=0;l.length>i;i++){var m=l[i];m.isPreEvalVisitor?j.push(m):m.isPreVisitor?k.splice(0,0,m):k.push(m)}}for(i=0;j.length>i;i++)j[i].run(a);for(f=a.eval(h),i=0;k.length>i;i++)k[i].run(f);return f}},{"./contexts":10,"./tree":60,"./visitors":85}],43:[function(a,b){var c=a("./node"),d=function(a){this.value=a};d.prototype=new c,d.prototype.type="Alpha",d.prototype.accept=function(a){this.value=a.visit(this.value)},d.prototype.eval=function(a){return this.value.eval?new d(this.value.eval(a)):this},d.prototype.genCSS=function(a,b){b.add("alpha(opacity="),this.value.genCSS?this.value.genCSS(a,b):b.add(this.value),b.add(")")},b.exports=d},{"./node":68}],44:[function(a,b){var c=a("./node"),d=function(a,b,c,d,e){this.value=a,this.index=b,this.mapLines=d,this.currentFileInfo=c,this.rulesetLike="undefined"==typeof e?!1:e};d.prototype=new c,d.prototype.type="Anonymous",d.prototype.eval=function(){return new d(this.value,this.index,this.currentFileInfo,this.mapLines,this.rulesetLike)},d.prototype.compare=function(a){return a.toCSS&&this.toCSS()===a.toCSS()?0:void 0},d.prototype.isRulesetLike=function(){return this.rulesetLike},d.prototype.genCSS=function(a,b){b.add(this.value,this.currentFileInfo,this.index,this.mapLines)},b.exports=d},{"./node":68}],45:[function(a,b){var c=a("./node"),d=function(a,b){this.key=a,this.value=b};d.prototype=new c,d.prototype.type="Assignment",d.prototype.accept=function(a){this.value=a.visit(this.value)},d.prototype.eval=function(a){return this.value.eval?new d(this.key,this.value.eval(a)):this},d.prototype.genCSS=function(a,b){b.add(this.key+"="),this.value.genCSS?this.value.genCSS(a,b):b.add(this.value)},b.exports=d},{"./node":68}],46:[function(a,b){var c=a("./node"),d=function(a,b,c){this.key=a,this.op=b,this.value=c};d.prototype=new c,d.prototype.type="Attribute",d.prototype.eval=function(a){return new d(this.key.eval?this.key.eval(a):this.key,this.op,this.value&&this.value.eval?this.value.eval(a):this.value)},d.prototype.genCSS=function(a,b){b.add(this.toCSS(a))},d.prototype.toCSS=function(a){var b=this.key.toCSS?this.key.toCSS(a):this.key;return this.op&&(b+=this.op,b+=this.value.toCSS?this.value.toCSS(a):this.value),"["+b+"]"},b.exports=d},{"./node":68}],47:[function(a,b){var c=a("./node"),d=a("../functions/function-caller"),e=function(a,b,c,d){this.name=a,this.args=b,this.index=c,this.currentFileInfo=d};e.prototype=new c,e.prototype.type="Call",e.prototype.accept=function(a){this.args&&(this.args=a.visitArray(this.args))},e.prototype.eval=function(a){var b,c=this.args.map(function(b){return b.eval(a)}),f=new d(this.name,a,this.index,this.currentFileInfo);if(f.isValid())try{if(b=f.call(c),null!=b)return b}catch(g){throw{type:g.type||"Runtime",message:"error evaluating function `"+this.name+"`"+(g.message?": "+g.message:""),index:this.index,filename:this.currentFileInfo.filename}}return new e(this.name,c,this.index,this.currentFileInfo)},e.prototype.genCSS=function(a,b){b.add(this.name+"(",this.currentFileInfo,this.index);for(var c=0;this.args.length>c;c++)this.args[c].genCSS(a,b),this.args.length>c+1&&b.add(", ");b.add(")")},b.exports=e},{"../functions/function-caller":20,"./node":68}],48:[function(a,b){function c(a,b){return Math.min(Math.max(a,0),b)}function d(a){return"#"+a.map(function(a){return a=c(Math.round(a),255),(16>a?"0":"")+a.toString(16)}).join("")}var e=a("./node"),f=a("../data/colors"),g=function(a,b){this.rgb=Array.isArray(a)?a:6==a.length?a.match(/.{2}/g).map(function(a){return parseInt(a,16)}):a.split("").map(function(a){return parseInt(a+a,16)}),this.alpha="number"==typeof b?b:1};g.prototype=new e,g.prototype.type="Color",g.prototype.luma=function(){var a=this.rgb[0]/255,b=this.rgb[1]/255,c=this.rgb[2]/255;return a=.03928>=a?a/12.92:Math.pow((a+.055)/1.055,2.4),b=.03928>=b?b/12.92:Math.pow((b+.055)/1.055,2.4),c=.03928>=c?c/12.92:Math.pow((c+.055)/1.055,2.4),.2126*a+.7152*b+.0722*c},g.prototype.genCSS=function(a,b){b.add(this.toCSS(a))},g.prototype.toCSS=function(a,b){var d,e,f=a&&a.compress&&!b;if(this.value)return this.value;if(e=this.fround(a,this.alpha),1>e)return"rgba("+this.rgb.map(function(a){return c(Math.round(a),255)}).concat(c(e,1)).join(","+(f?"":" "))+")";if(d=this.toRGB(),f){var g=d.split("");g[1]===g[2]&&g[3]===g[4]&&g[5]===g[6]&&(d="#"+g[1]+g[3]+g[5])}return d},g.prototype.operate=function(a,b,c){for(var d=[],e=this.alpha*(1-c.alpha)+c.alpha,f=0;3>f;f++)d[f]=this._operate(a,b,this.rgb[f],c.rgb[f]);return new g(d,e)},g.prototype.toRGB=function(){return d(this.rgb)},g.prototype.toHSL=function(){var a,b,c=this.rgb[0]/255,d=this.rgb[1]/255,e=this.rgb[2]/255,f=this.alpha,g=Math.max(c,d,e),h=Math.min(c,d,e),i=(g+h)/2,j=g-h;if(g===h)a=b=0;else{switch(b=i>.5?j/(2-g-h):j/(g+h),g){case c:a=(d-e)/j+(e>d?6:0);break;case d:a=(e-c)/j+2;break;case e:a=(c-d)/j+4}a/=6}return{h:360*a,s:b,l:i,a:f}},g.prototype.toHSV=function(){var a,b,c=this.rgb[0]/255,d=this.rgb[1]/255,e=this.rgb[2]/255,f=this.alpha,g=Math.max(c,d,e),h=Math.min(c,d,e),i=g,j=g-h;if(b=0===g?0:j/g,g===h)a=0;else{switch(g){case c:a=(d-e)/j+(e>d?6:0);break;case d:a=(e-c)/j+2;break;case e:a=(c-d)/j+4}a/=6}return{h:360*a,s:b,v:i,a:f}},g.prototype.toARGB=function(){return d([255*this.alpha].concat(this.rgb))},g.prototype.compare=function(a){return a.rgb&&a.rgb[0]===this.rgb[0]&&a.rgb[1]===this.rgb[1]&&a.rgb[2]===this.rgb[2]&&a.alpha===this.alpha?0:void 0},g.fromKeyword=function(a){var b,c=a.toLowerCase();return f.hasOwnProperty(c)?b=new g(f[c].slice(1)):"transparent"===c&&(b=new g([0,0,0],0)),b?(b.value=a,b):void 0},b.exports=g},{"../data/colors":11,"./node":68}],49:[function(a,b){var c=a("./node"),d=function(a){" "===a?(this.value=" ",this.emptyOrWhitespace=!0):(this.value=a?a.trim():"",this.emptyOrWhitespace=""===this.value)};d.prototype=new c,d.prototype.type="Combinator";var e={"":!0," ":!0,"|":!0};d.prototype.genCSS=function(a,b){var c=a.compress||e[this.value]?"":" ";b.add(c+this.value+c)},b.exports=d},{"./node":68}],50:[function(a,b){var c=a("./node"),d=a("./debug-info"),e=function(a,b,c,d){this.value=a,this.isLineComment=b,this.currentFileInfo=d};e.prototype=new c,e.prototype.type="Comment",e.prototype.genCSS=function(a,b){this.debugInfo&&b.add(d(a,this),this.currentFileInfo,this.index),b.add(this.value)},e.prototype.isSilent=function(a){var b=this.currentFileInfo&&this.currentFileInfo.reference&&!this.isReferenced,c=a.compress&&"!"!==this.value[2];return this.isLineComment||b||c},e.prototype.markReferenced=function(){this.isReferenced=!0},b.exports=e},{"./debug-info":52,"./node":68}],51:[function(a,b){var c=a("./node"),d=function(a,b,c,d,e){this.op=a.trim(),this.lvalue=b,this.rvalue=c,this.index=d,this.negate=e};d.prototype=new c,d.prototype.type="Condition",d.prototype.accept=function(a){this.lvalue=a.visit(this.lvalue),this.rvalue=a.visit(this.rvalue)},d.prototype.eval=function(a){var b=function(a,b,d){switch(a){case"and":return b&&d;case"or":return b||d;default:switch(c.compare(b,d)){case-1:return"<"===a||"=<"===a||"<="===a;case 0:return"="===a||">="===a||"=<"===a||"<="===a;case 1:return">"===a||">="===a;default:return!1}}}(this.op,this.lvalue.eval(a),this.rvalue.eval(a));return this.negate?!b:b},b.exports=d},{"./node":68}],52:[function(a,b){var c=function(a,b,d){var e="";if(a.dumpLineNumbers&&!a.compress)switch(a.dumpLineNumbers){case"comments":e=c.asComment(b);break;case"mediaquery":e=c.asMediaQuery(b);break;case"all":e=c.asComment(b)+(d||"")+c.asMediaQuery(b)}return e};c.asComment=function(a){return"/* line "+a.debugInfo.lineNumber+", "+a.debugInfo.fileName+" */\n"},c.asMediaQuery=function(a){var b=a.debugInfo.fileName;return/^[a-z]+:\/\//i.test(b)||(b="file://"+b),"@media -sass-debug-info{filename{font-family:"+b.replace(/([.:\/\\])/g,function(a){return"\\"==a&&(a="/"),"\\"+a})+"}line{font-family:\\00003"+a.debugInfo.lineNumber+"}}\n"},b.exports=c},{}],53:[function(a,b){var c=a("./node"),d=a("../contexts"),e=function(a,b){this.ruleset=a,this.frames=b};e.prototype=new c,e.prototype.type="DetachedRuleset",e.prototype.evalFirst=!0,e.prototype.accept=function(a){this.ruleset=a.visit(this.ruleset)},e.prototype.eval=function(a){var b=this.frames||a.frames.slice(0);return new e(this.ruleset,b)},e.prototype.callEval=function(a){return this.ruleset.eval(this.frames?new d.Eval(a,this.frames.concat(a.frames)):a)},b.exports=e},{"../contexts":10,"./node":68}],54:[function(a,b){var c=a("./node"),d=a("../data/unit-conversions"),e=a("./unit"),f=a("./color"),g=function(a,b){this.value=parseFloat(a),this.unit=b&&b instanceof e?b:new e(b?[b]:void 0)};g.prototype=new c,g.prototype.type="Dimension",g.prototype.accept=function(a){this.unit=a.visit(this.unit)},g.prototype.eval=function(){return this},g.prototype.toColor=function(){return new f([this.value,this.value,this.value])},g.prototype.genCSS=function(a,b){if(a&&a.strictUnits&&!this.unit.isSingular())throw new Error("Multiple units in dimension. Correct the units or use the unit function. Bad unit: "+this.unit.toString());var c=this.fround(a,this.value),d=String(c);if(0!==c&&1e-6>c&&c>-1e-6&&(d=c.toFixed(20).replace(/0+$/,"")),a&&a.compress){if(0===c&&this.unit.isLength())return void b.add(d);c>0&&1>c&&(d=d.substr(1))}b.add(d),this.unit.genCSS(a,b)},g.prototype.operate=function(a,b,c){var d=this._operate(a,b,this.value,c.value),e=this.unit.clone();if("+"===b||"-"===b)if(0===e.numerator.length&&0===e.denominator.length)e=c.unit.clone(),this.unit.backupUnit&&(e.backupUnit=this.unit.backupUnit);else if(0===c.unit.numerator.length&&0===e.denominator.length);else{if(c=c.convertTo(this.unit.usedUnits()),a.strictUnits&&c.unit.toString()!==e.toString())throw new Error("Incompatible units. Change the units or use the unit function. Bad units: '"+e.toString()+"' and '"+c.unit.toString()+"'.");d=this._operate(a,b,this.value,c.value)}else"*"===b?(e.numerator=e.numerator.concat(c.unit.numerator).sort(),e.denominator=e.denominator.concat(c.unit.denominator).sort(),e.cancel()):"/"===b&&(e.numerator=e.numerator.concat(c.unit.denominator).sort(),e.denominator=e.denominator.concat(c.unit.numerator).sort(),e.cancel());return new g(d,e)},g.prototype.compare=function(a){var b,d;if(!(a instanceof g))return void 0;if(this.unit.isEmpty()||a.unit.isEmpty())b=this,d=a;else if(b=this.unify(),d=a.unify(),0!==b.unit.compare(d.unit))return void 0;return c.numericCompare(b.value,d.value)},g.prototype.unify=function(){return this.convertTo({length:"px",duration:"s",angle:"rad"})},g.prototype.convertTo=function(a){var b,c,e,f,h,i=this.value,j=this.unit.clone(),k={};if("string"==typeof a){for(b in d)d[b].hasOwnProperty(a)&&(k={},k[b]=a);a=k}h=function(a,b){return e.hasOwnProperty(a)?(b?i/=e[a]/e[f]:i*=e[a]/e[f],f):a};for(c in a)a.hasOwnProperty(c)&&(f=a[c],e=d[c],j.map(h));return j.cancel(),new g(i,j)},b.exports=g},{"../data/unit-conversions":13,"./color":48,"./node":68,"./unit":77}],55:[function(a,b){var c=a("./node"),d=a("./selector"),e=a("./ruleset"),f=function(a,b,c,e,f,g,h,i){var j;if(this.name=a,this.value=b,c)for(Array.isArray(c)?this.rules=c:(this.rules=[c],this.rules[0].selectors=new d([],null,null,this.index,f).createEmptySelectors()),j=0;this.rules.length>j;j++)this.rules[j].allowImports=!0;this.index=e,this.currentFileInfo=f,this.debugInfo=g,this.isReferenced=h,this.isRooted=i||!1};f.prototype=new c,f.prototype.type="Directive",f.prototype.accept=function(a){var b=this.value,c=this.rules;c&&(this.rules=a.visitArray(c)),b&&(this.value=a.visit(b))},f.prototype.isRulesetLike=function(){return this.rules||!this.isCharset()},f.prototype.isCharset=function(){return"@charset"===this.name},f.prototype.genCSS=function(a,b){var c=this.value,d=this.rules;b.add(this.name,this.currentFileInfo,this.index),c&&(b.add(" "),c.genCSS(a,b)),d?this.outputRuleset(a,b,d):b.add(";")},f.prototype.eval=function(a){var b,c,d=this.value,e=this.rules;return b=a.mediaPath,c=a.mediaBlocks,a.mediaPath=[],a.mediaBlocks=[],d&&(d=d.eval(a)),e&&(e=[e[0].eval(a)],e[0].root=!0),a.mediaPath=b,a.mediaBlocks=c,new f(this.name,d,e,this.index,this.currentFileInfo,this.debugInfo,this.isReferenced,this.isRooted)},f.prototype.variable=function(a){return this.rules?e.prototype.variable.call(this.rules[0],a):void 0},f.prototype.find=function(){return this.rules?e.prototype.find.apply(this.rules[0],arguments):void 0},f.prototype.rulesets=function(){return this.rules?e.prototype.rulesets.apply(this.rules[0]):void 0},f.prototype.markReferenced=function(){var a,b;if(this.isReferenced=!0,this.rules)for(b=this.rules,a=0;b.length>a;a++)b[a].markReferenced&&b[a].markReferenced()},f.prototype.getIsReferenced=function(){return!this.currentFileInfo||!this.currentFileInfo.reference||this.isReferenced},f.prototype.outputRuleset=function(a,b,c){var d,e=c.length;if(a.tabLevel=(0|a.tabLevel)+1,a.compress){for(b.add("{"),d=0;e>d;d++)c[d].genCSS(a,b);return b.add("}"),void a.tabLevel--}var f="\n"+Array(a.tabLevel).join("  "),g=f+"  ";if(e){for(b.add(" {"+g),c[0].genCSS(a,b),d=1;e>d;d++)b.add(g),c[d].genCSS(a,b);b.add(f+"}")}else b.add(" {"+f+"}");a.tabLevel--},b.exports=f},{"./node":68,"./ruleset":74,"./selector":75}],56:[function(a,b){var c=a("./node"),d=a("./paren"),e=a("./combinator"),f=function(a,b,c,d){this.combinator=a instanceof e?a:new e(a),this.value="string"==typeof b?b.trim():b?b:"",this.index=c,this.currentFileInfo=d};f.prototype=new c,f.prototype.type="Element",f.prototype.accept=function(a){var b=this.value;this.combinator=a.visit(this.combinator),"object"==typeof b&&(this.value=a.visit(b))},f.prototype.eval=function(a){return new f(this.combinator,this.value.eval?this.value.eval(a):this.value,this.index,this.currentFileInfo)},f.prototype.genCSS=function(a,b){b.add(this.toCSS(a),this.currentFileInfo,this.index)},f.prototype.toCSS=function(a){a=a||{};var b=this.value,c=a.firstSelector;return b instanceof d&&(a.firstSelector=!0),b=b.toCSS?b.toCSS(a):b,a.firstSelector=c,""===b&&"&"===this.combinator.value.charAt(0)?"":this.combinator.toCSS(a)+b},b.exports=f},{"./combinator":49,"./node":68,"./paren":70}],57:[function(a,b){var c=a("./node"),d=a("./paren"),e=a("./comment"),f=function(a){if(this.value=a,!a)throw new Error("Expression requires an array parameter")};f.prototype=new c,f.prototype.type="Expression",f.prototype.accept=function(a){this.value=a.visitArray(this.value)},f.prototype.eval=function(a){var b,c=this.parens&&!this.parensInOp,e=!1;return c&&a.inParenthesis(),this.value.length>1?b=new f(this.value.map(function(b){return b.eval(a)})):1===this.value.length?(this.value[0].parens&&!this.value[0].parensInOp&&(e=!0),b=this.value[0].eval(a)):b=this,c&&a.outOfParenthesis(),this.parens&&this.parensInOp&&!a.isMathOn()&&!e&&(b=new d(b)),b},f.prototype.genCSS=function(a,b){for(var c=0;this.value.length>c;c++)this.value[c].genCSS(a,b),this.value.length>c+1&&b.add(" ")},f.prototype.throwAwayComments=function(){this.value=this.value.filter(function(a){return!(a instanceof e)})},b.exports=f},{"./comment":50,"./node":68,"./paren":70}],58:[function(a,b){var c=a("./node"),d=function e(a,b,c){switch(this.selector=a,this.option=b,this.index=c,this.object_id=e.next_id++,this.parent_ids=[this.object_id],b){case"all":this.allowBefore=!0,this.allowAfter=!0;break;default:this.allowBefore=!1,this.allowAfter=!1}};d.next_id=0,d.prototype=new c,d.prototype.type="Extend",d.prototype.accept=function(a){this.selector=a.visit(this.selector)},d.prototype.eval=function(a){return new d(this.selector.eval(a),this.option,this.index)},d.prototype.clone=function(){return new d(this.selector,this.option,this.index)},d.prototype.findSelfSelectors=function(a){var b,c,d=[];for(b=0;a.length>b;b++)c=a[b].elements,b>0&&c.length&&""===c[0].combinator.value&&(c[0].combinator.value=" "),d=d.concat(a[b].elements);this.selfSelectors=[{elements:d}]},b.exports=d},{"./node":68}],59:[function(a,b){var c=a("./node"),d=a("./media"),e=a("./url"),f=a("./quoted"),g=a("./ruleset"),h=a("./anonymous"),i=function(a,b,c,d,e){if(this.options=c,this.index=d,this.path=a,this.features=b,this.currentFileInfo=e,void 0!==this.options.less||this.options.inline)this.css=!this.options.less||this.options.inline;else{var f=this.getPath();f&&/[#\.\&\?\/]css([\?;].*)?$/.test(f)&&(this.css=!0)}};i.prototype=new c,i.prototype.type="Import",i.prototype.accept=function(a){this.features&&(this.features=a.visit(this.features)),this.path=a.visit(this.path),this.options.plugin||this.options.inline||!this.root||(this.root=a.visit(this.root))},i.prototype.genCSS=function(a,b){this.css&&void 0===this.path.currentFileInfo.reference&&(b.add("@import ",this.currentFileInfo,this.index),this.path.genCSS(a,b),this.features&&(b.add(" "),this.features.genCSS(a,b)),b.add(";"))},i.prototype.getPath=function(){return this.path instanceof e?this.path.value.value:this.path.value},i.prototype.isVariableImport=function(){var a=this.path;return a instanceof e&&(a=a.value),a instanceof f?a.containsVariables():!0},i.prototype.evalForImport=function(a){var b=this.path;return b instanceof e&&(b=b.value),new i(b.eval(a),this.features,this.options,this.index,this.currentFileInfo)},i.prototype.evalPath=function(a){var b=this.path.eval(a),c=this.currentFileInfo&&this.currentFileInfo.rootpath;if(!(b instanceof e)){if(c){var d=b.value;d&&a.isPathRelative(d)&&(b.value=c+d)}b.value=a.normalizePath(b.value)}return b},i.prototype.eval=function(a){var b,c,e=this.features&&this.features.eval(a);if(this.options.plugin)return c=a.frames[0]&&a.frames[0].functionRegistry,c&&this.root&&this.root.functions&&c.addMultiple(this.root.functions),[];if(this.skip&&("function"==typeof this.skip&&(this.skip=this.skip()),this.skip))return[];if(this.options.inline){var f=new h(this.root,0,{filename:this.importedFilename},!0,!0);return this.features?new d([f],this.features.value):[f]}if(this.css){var j=new i(this.evalPath(a),e,this.options,this.index);if(!j.css&&this.error)throw this.error;return j}return b=new g(null,this.root.rules.slice(0)),b.evalImports(a),this.features?new d(b.rules,this.features.value):b.rules},b.exports=i},{"./anonymous":44,"./media":64,"./node":68,"./quoted":71,"./ruleset":74,"./url":78}],60:[function(a,b){var c={};c.Node=a("./node"),c.Alpha=a("./alpha"),c.Color=a("./color"),c.Directive=a("./directive"),c.DetachedRuleset=a("./detached-ruleset"),c.Operation=a("./operation"),c.Dimension=a("./dimension"),c.Unit=a("./unit"),c.Keyword=a("./keyword"),c.Variable=a("./variable"),c.Ruleset=a("./ruleset"),c.Element=a("./element"),c.Attribute=a("./attribute"),c.Combinator=a("./combinator"),c.Selector=a("./selector"),c.Quoted=a("./quoted"),c.Expression=a("./expression"),c.Rule=a("./rule"),c.Call=a("./call"),c.URL=a("./url"),c.Import=a("./import"),c.mixin={Call:a("./mixin-call"),Definition:a("./mixin-definition")},c.Comment=a("./comment"),c.Anonymous=a("./anonymous"),c.Value=a("./value"),c.JavaScript=a("./javascript"),c.Assignment=a("./assignment"),c.Condition=a("./condition"),c.Paren=a("./paren"),c.Media=a("./media"),c.UnicodeDescriptor=a("./unicode-descriptor"),c.Negative=a("./negative"),c.Extend=a("./extend"),c.RulesetCall=a("./ruleset-call"),b.exports=c},{"./alpha":43,"./anonymous":44,"./assignment":45,"./attribute":46,"./call":47,"./color":48,"./combinator":49,"./comment":50,"./condition":51,"./detached-ruleset":53,"./dimension":54,"./directive":55,"./element":56,"./expression":57,"./extend":58,"./import":59,"./javascript":61,"./keyword":63,"./media":64,"./mixin-call":65,"./mixin-definition":66,"./negative":67,"./node":68,"./operation":69,"./paren":70,"./quoted":71,"./rule":72,"./ruleset":74,"./ruleset-call":73,"./selector":75,"./unicode-descriptor":76,"./unit":77,"./url":78,"./value":79,"./variable":80}],61:[function(a,b){var c=a("./js-eval-node"),d=a("./dimension"),e=a("./quoted"),f=a("./anonymous"),g=function(a,b,c,d){this.escaped=b,this.expression=a,this.index=c,this.currentFileInfo=d};g.prototype=new c,g.prototype.type="JavaScript",g.prototype.eval=function(a){var b=this.evaluateJavaScript(this.expression,a);return"number"==typeof b?new d(b):"string"==typeof b?new e('"'+b+'"',b,this.escaped,this.index):new f(Array.isArray(b)?b.join(", "):b)},b.exports=g},{"./anonymous":44,"./dimension":54,"./js-eval-node":62,"./quoted":71}],62:[function(a,b){var c=a("./node"),d=a("./variable"),e=function(){};e.prototype=new c,e.prototype.evaluateJavaScript=function(a,b){var c,e=this,f={};if(void 0!==b.javascriptEnabled&&!b.javascriptEnabled)throw{message:"You are using JavaScript, which has been disabled.",filename:this.currentFileInfo.filename,index:this.index};a=a.replace(/@\{([\w-]+)\}/g,function(a,c){return e.jsify(new d("@"+c,e.index,e.currentFileInfo).eval(b))});try{a=new Function("return ("+a+")")}catch(g){throw{message:"JavaScript evaluation error: "+g.message+" from `"+a+"`",filename:this.currentFileInfo.filename,index:this.index}}var h=b.frames[0].variables();for(var i in h)h.hasOwnProperty(i)&&(f[i.slice(1)]={value:h[i].value,toJS:function(){return this.value.eval(b).toCSS()}});try{c=a.call(f)}catch(g){throw{message:"JavaScript evaluation error: '"+g.name+": "+g.message.replace(/["]/g,"'")+"'",filename:this.currentFileInfo.filename,index:this.index}}return c},e.prototype.jsify=function(a){return Array.isArray(a.value)&&a.value.length>1?"["+a.value.map(function(a){return a.toCSS()}).join(", ")+"]":a.toCSS()},b.exports=e},{"./node":68,"./variable":80}],63:[function(a,b){var c=a("./node"),d=function(a){this.value=a};d.prototype=new c,d.prototype.type="Keyword",d.prototype.genCSS=function(a,b){if("%"===this.value)throw{type:"Syntax",message:"Invalid % without number"};b.add(this.value)},d.True=new d("true"),d.False=new d("false"),b.exports=d},{"./node":68}],64:[function(a,b){var c=a("./ruleset"),d=a("./value"),e=a("./selector"),f=a("./anonymous"),g=a("./expression"),h=a("./directive"),i=function(a,b,f,g){this.index=f,this.currentFileInfo=g;var h=new e([],null,null,this.index,this.currentFileInfo).createEmptySelectors();this.features=new d(b),this.rules=[new c(h,a)],this.rules[0].allowImports=!0};i.prototype=new h,i.prototype.type="Media",i.prototype.isRulesetLike=!0,i.prototype.accept=function(a){this.features&&(this.features=a.visit(this.features)),this.rules&&(this.rules=a.visitArray(this.rules))},i.prototype.genCSS=function(a,b){b.add("@media ",this.currentFileInfo,this.index),this.features.genCSS(a,b),this.outputRuleset(a,b,this.rules)},i.prototype.eval=function(a){a.mediaBlocks||(a.mediaBlocks=[],a.mediaPath=[]);var b=new i(null,[],this.index,this.currentFileInfo);this.debugInfo&&(this.rules[0].debugInfo=this.debugInfo,b.debugInfo=this.debugInfo);var c=!1;a.strictMath||(c=!0,a.strictMath=!0);try{b.features=this.features.eval(a)}finally{c&&(a.strictMath=!1)}return a.mediaPath.push(b),a.mediaBlocks.push(b),this.rules[0].functionRegistry=a.frames[0].functionRegistry.inherit(),a.frames.unshift(this.rules[0]),b.rules=[this.rules[0].eval(a)],a.frames.shift(),a.mediaPath.pop(),0===a.mediaPath.length?b.evalTop(a):b.evalNested(a)},i.prototype.evalTop=function(a){var b=this;if(a.mediaBlocks.length>1){var d=new e([],null,null,this.index,this.currentFileInfo).createEmptySelectors();b=new c(d,a.mediaBlocks),b.multiMedia=!0}return delete a.mediaBlocks,delete a.mediaPath,b},i.prototype.evalNested=function(a){var b,e,h=a.mediaPath.concat([this]);for(b=0;h.length>b;b++)e=h[b].features instanceof d?h[b].features.value:h[b].features,h[b]=Array.isArray(e)?e:[e];return this.features=new d(this.permute(h).map(function(a){for(a=a.map(function(a){return a.toCSS?a:new f(a)}),b=a.length-1;b>0;b--)a.splice(b,0,new f("and"));return new g(a)})),new c([],[])},i.prototype.permute=function(a){if(0===a.length)return[];if(1===a.length)return a[0];for(var b=[],c=this.permute(a.slice(1)),d=0;c.length>d;d++)for(var e=0;a[0].length>e;e++)b.push([a[0][e]].concat(c[d]));return b},i.prototype.bubbleSelectors=function(a){a&&(this.rules=[new c(a.slice(0),[this.rules[0]])])},b.exports=i},{"./anonymous":44,"./directive":55,"./expression":57,"./ruleset":74,"./selector":75,"./value":79}],65:[function(a,b){var c=a("./node"),d=a("./selector"),e=a("./mixin-definition"),f=a("../functions/default"),g=function(a,b,c,e,f){this.selector=new d(a),this.arguments=b&&b.length?b:null,this.index=c,this.currentFileInfo=e,this.important=f};g.prototype=new c,g.prototype.type="MixinCall",g.prototype.accept=function(a){this.selector&&(this.selector=a.visit(this.selector)),this.arguments&&(this.arguments=a.visitArray(this.arguments))},g.prototype.eval=function(a){function b(b,c){var d,e;for(k=0;2>k;k++){for(w[k]=!0,f.value(k),d=0;c.length>d&&w[k];d++)e=c[d],e.matchCondition&&(w[k]=w[k]&&e.matchCondition(null,a));b.matchCondition&&(w[k]=w[k]&&b.matchCondition(h,a))}return w[0]||w[1]?w[0]!=w[1]?w[1]?z:A:y:x}var c,d,g,h,i,j,k,l,m,n,o,p,q,r,s,t=[],u=!1,v=[],w=[],x=-1,y=0,z=1,A=2;for(h=this.arguments&&this.arguments.map(function(b){return{name:b.name,value:b.value.eval(a)}}),s=function(b){return b.matchArgs(null,a)},i=0;a.frames.length>i;i++)if((c=a.frames[i].find(this.selector,null,s)).length>0){for(m=!0,j=0;c.length>j;j++){for(d=c[j].rule,g=c[j].path,l=!1,k=0;a.frames.length>k;k++)if(!(d instanceof e)&&d===(a.frames[k].originalRuleset||a.frames[k])){l=!0;break}l||d.matchArgs(h,a)&&(o={mixin:d,group:b(d,g)},o.group!==x&&v.push(o),u=!0)}for(f.reset(),q=[0,0,0],j=0;v.length>j;j++)q[v[j].group]++;if(q[y]>0)p=A;else if(p=z,q[z]+q[A]>1)throw{type:"Runtime",message:"Ambiguous use of `default()` found when matching for `"+this.format(h)+"`",index:this.index,filename:this.currentFileInfo.filename};for(j=0;v.length>j;j++)if(o=v[j].group,o===y||o===p)try{d=v[j].mixin,d instanceof e||(r=d.originalRuleset||d,d=new e("",[],d.rules,null,!1),d.originalRuleset=r),Array.prototype.push.apply(t,d.evalCall(a,h,this.important).rules)}catch(B){throw{message:B.message,index:this.index,filename:this.currentFileInfo.filename,stack:B.stack}}if(u){if(!this.currentFileInfo||!this.currentFileInfo.reference)for(i=0;t.length>i;i++)n=t[i],n.markReferenced&&n.markReferenced();return t}}throw m?{type:"Runtime",message:"No matching definition was found for `"+this.format(h)+"`",index:this.index,filename:this.currentFileInfo.filename}:{type:"Name",message:this.selector.toCSS().trim()+" is undefined",index:this.index,filename:this.currentFileInfo.filename}},g.prototype.format=function(a){return this.selector.toCSS().trim()+"("+(a?a.map(function(a){var b="";return a.name&&(b+=a.name+":"),b+=a.value.toCSS?a.value.toCSS():"???"}).join(", "):"")+")"},b.exports=g},{"../functions/default":19,"./mixin-definition":66,"./node":68,"./selector":75}],66:[function(a,b){var c=a("./selector"),d=a("./element"),e=a("./ruleset"),f=a("./rule"),g=a("./expression"),h=a("../contexts"),i=function(a,b,e,f,g,h){this.name=a,this.selectors=[new c([new d(null,a,this.index,this.currentFileInfo)])],this.params=b,this.condition=f,this.variadic=g,this.arity=b.length,this.rules=e,this._lookups={},this.required=b.reduce(function(a,b){return!b.name||b.name&&!b.value?a+1:a},0),this.frames=h};i.prototype=new e,i.prototype.type="MixinDefinition",i.prototype.evalFirst=!0,i.prototype.accept=function(a){this.params&&this.params.length&&(this.params=a.visitArray(this.params)),this.rules=a.visitArray(this.rules),this.condition&&(this.condition=a.visit(this.condition))},i.prototype.evalParams=function(a,b,c,d){var i,j,k,l,m,n,o,p,q=new e(null,null),r=this.params.slice(0),s=0;if(b.frames&&b.frames[0]&&b.frames[0].functionRegistry&&(q.functionRegistry=b.frames[0].functionRegistry.inherit()),b=new h.Eval(b,[q].concat(b.frames)),c)for(c=c.slice(0),s=c.length,k=0;s>k;k++)if(j=c[k],n=j&&j.name){for(o=!1,l=0;r.length>l;l++)if(!d[l]&&n===r[l].name){d[l]=j.value.eval(a),q.prependRule(new f(n,j.value.eval(a))),o=!0;break}if(o){c.splice(k,1),k--;continue}throw{type:"Runtime",message:"Named argument for "+this.name+" "+c[k].name+" not found"}}for(p=0,k=0;r.length>k;k++)if(!d[k]){if(j=c&&c[p],n=r[k].name)if(r[k].variadic){for(i=[],l=p;s>l;l++)i.push(c[l].value.eval(a));q.prependRule(new f(n,new g(i).eval(a)))}else{if(m=j&&j.value)m=m.eval(a);else{if(!r[k].value)throw{type:"Runtime",message:"wrong number of arguments for "+this.name+" ("+s+" for "+this.arity+")"};m=r[k].value.eval(b),q.resetCache()}q.prependRule(new f(n,m)),d[k]=m}if(r[k].variadic&&c)for(l=p;s>l;l++)d[l]=c[l].value.eval(a);p++}return q},i.prototype.makeImportant=function(){var a=this.rules?this.rules.map(function(a){return a.makeImportant?a.makeImportant(!0):a}):this.rules,b=new i(this.name,this.params,a,this.condition,this.variadic,this.frames);return b},i.prototype.eval=function(a){return new i(this.name,this.params,this.rules,this.condition,this.variadic,this.frames||a.frames.slice(0))},i.prototype.evalCall=function(a,b,c){var d,i,j=[],k=this.frames?this.frames.concat(a.frames):a.frames,l=this.evalParams(a,new h.Eval(a,k),b,j);return l.prependRule(new f("@arguments",new g(j).eval(a))),d=this.rules.slice(0),i=new e(null,d),i.originalRuleset=this,i=i.eval(new h.Eval(a,[this,l].concat(k))),c&&(i=i.makeImportant()),i},i.prototype.matchCondition=function(a,b){return this.condition&&!this.condition.eval(new h.Eval(b,[this.evalParams(b,new h.Eval(b,this.frames?this.frames.concat(b.frames):b.frames),a,[])].concat(this.frames||[]).concat(b.frames)))?!1:!0},i.prototype.matchArgs=function(a,b){var c,d=a&&a.length||0;if(this.variadic){if(this.required-1>d)return!1}else{
if(this.required>d)return!1;if(d>this.params.length)return!1}c=Math.min(d,this.arity);for(var e=0;c>e;e++)if(!this.params[e].name&&!this.params[e].variadic&&a[e].value.eval(b).toCSS()!=this.params[e].value.eval(b).toCSS())return!1;return!0},b.exports=i},{"../contexts":10,"./element":56,"./expression":57,"./rule":72,"./ruleset":74,"./selector":75}],67:[function(a,b){var c=a("./node"),d=a("./operation"),e=a("./dimension"),f=function(a){this.value=a};f.prototype=new c,f.prototype.type="Negative",f.prototype.genCSS=function(a,b){b.add("-"),this.value.genCSS(a,b)},f.prototype.eval=function(a){return a.isMathOn()?new d("*",[new e(-1),this.value]).eval(a):new f(this.value.eval(a))},b.exports=f},{"./dimension":54,"./node":68,"./operation":69}],68:[function(a,b){var c=function(){};c.prototype.toCSS=function(a){var b=[];return this.genCSS(a,{add:function(a){b.push(a)},isEmpty:function(){return 0===b.length}}),b.join("")},c.prototype.genCSS=function(a,b){b.add(this.value)},c.prototype.accept=function(a){this.value=a.visit(this.value)},c.prototype.eval=function(){return this},c.prototype._operate=function(a,b,c,d){switch(b){case"+":return c+d;case"-":return c-d;case"*":return c*d;case"/":return c/d}},c.prototype.fround=function(a,b){var c=a&&a.numPrecision;return null==c?b:Number((b+2e-16).toFixed(c))},c.compare=function(a,b){if(a.compare&&"Quoted"!==b.type&&"Anonymous"!==b.type)return a.compare(b);if(b.compare)return-b.compare(a);if(a.type!==b.type)return void 0;if(a=a.value,b=b.value,!Array.isArray(a))return a===b?0:void 0;if(a.length!==b.length)return void 0;for(var d=0;a.length>d;d++)if(0!==c.compare(a[d],b[d]))return void 0;return 0},c.numericCompare=function(a,b){return b>a?-1:a===b?0:a>b?1:void 0},b.exports=c},{}],69:[function(a,b){var c=a("./node"),d=a("./color"),e=a("./dimension"),f=function(a,b,c){this.op=a.trim(),this.operands=b,this.isSpaced=c};f.prototype=new c,f.prototype.type="Operation",f.prototype.accept=function(a){this.operands=a.visit(this.operands)},f.prototype.eval=function(a){var b=this.operands[0].eval(a),c=this.operands[1].eval(a);if(a.isMathOn()){if(b instanceof e&&c instanceof d&&(b=b.toColor()),c instanceof e&&b instanceof d&&(c=c.toColor()),!b.operate)throw{type:"Operation",message:"Operation on an invalid type"};return b.operate(a,this.op,c)}return new f(this.op,[b,c],this.isSpaced)},f.prototype.genCSS=function(a,b){this.operands[0].genCSS(a,b),this.isSpaced&&b.add(" "),b.add(this.op),this.isSpaced&&b.add(" "),this.operands[1].genCSS(a,b)},b.exports=f},{"./color":48,"./dimension":54,"./node":68}],70:[function(a,b){var c=a("./node"),d=function(a){this.value=a};d.prototype=new c,d.prototype.type="Paren",d.prototype.genCSS=function(a,b){b.add("("),this.value.genCSS(a,b),b.add(")")},d.prototype.eval=function(a){return new d(this.value.eval(a))},b.exports=d},{"./node":68}],71:[function(a,b){var c=a("./node"),d=a("./js-eval-node"),e=a("./variable"),f=function(a,b,c,d,e){this.escaped=null==c?!0:c,this.value=b||"",this.quote=a.charAt(0),this.index=d,this.currentFileInfo=e};f.prototype=new d,f.prototype.type="Quoted",f.prototype.genCSS=function(a,b){this.escaped||b.add(this.quote,this.currentFileInfo,this.index),b.add(this.value),this.escaped||b.add(this.quote)},f.prototype.containsVariables=function(){return this.value.match(/(`([^`]+)`)|@\{([\w-]+)\}/)},f.prototype.eval=function(a){function b(a,b,c){var d=a;do a=d,d=a.replace(b,c);while(a!==d);return d}var c=this,d=this.value,g=function(b,d){return String(c.evaluateJavaScript(d,a))},h=function(b,d){var g=new e("@"+d,c.index,c.currentFileInfo).eval(a,!0);return g instanceof f?g.value:g.toCSS()};return d=b(d,/`([^`]+)`/g,g),d=b(d,/@\{([\w-]+)\}/g,h),new f(this.quote+d+this.quote,d,this.escaped,this.index,this.currentFileInfo)},f.prototype.compare=function(a){return"Quoted"!==a.type||this.escaped||a.escaped?a.toCSS&&this.toCSS()===a.toCSS()?0:void 0:c.numericCompare(this.value,a.value)},b.exports=f},{"./js-eval-node":62,"./node":68,"./variable":80}],72:[function(a,b){function c(a,b){var c,d="",e=b.length,f={add:function(a){d+=a}};for(c=0;e>c;c++)b[c].eval(a).genCSS(a,f);return d}var d=a("./node"),e=a("./value"),f=a("./keyword"),g=function(a,b,c,f,g,h,i,j){this.name=a,this.value=b instanceof d?b:new e([b]),this.important=c?" "+c.trim():"",this.merge=f,this.index=g,this.currentFileInfo=h,this.inline=i||!1,this.variable=void 0!==j?j:a.charAt&&"@"===a.charAt(0)};g.prototype=new d,g.prototype.type="Rule",g.prototype.genCSS=function(a,b){b.add(this.name+(a.compress?":":": "),this.currentFileInfo,this.index);try{this.value.genCSS(a,b)}catch(c){throw c.index=this.index,c.filename=this.currentFileInfo.filename,c}b.add(this.important+(this.inline||a.lastRule&&a.compress?"":";"),this.currentFileInfo,this.index)},g.prototype.eval=function(a){var b,d=!1,e=this.name,h=this.variable;"string"!=typeof e&&(e=1===e.length&&e[0]instanceof f?e[0].value:c(a,e),h=!1),"font"!==e||a.strictMath||(d=!0,a.strictMath=!0);try{if(a.importantScope.push({}),b=this.value.eval(a),!this.variable&&"DetachedRuleset"===b.type)throw{message:"Rulesets cannot be evaluated on a property.",index:this.index,filename:this.currentFileInfo.filename};var i=this.important,j=a.importantScope.pop();return!i&&j.important&&(i=j.important),new g(e,b,i,this.merge,this.index,this.currentFileInfo,this.inline,h)}catch(k){throw"number"!=typeof k.index&&(k.index=this.index,k.filename=this.currentFileInfo.filename),k}finally{d&&(a.strictMath=!1)}},g.prototype.makeImportant=function(){return new g(this.name,this.value,"!important",this.merge,this.index,this.currentFileInfo,this.inline)},b.exports=g},{"./keyword":63,"./node":68,"./value":79}],73:[function(a,b){var c=a("./node"),d=a("./variable"),e=function(a){this.variable=a};e.prototype=new c,e.prototype.type="RulesetCall",e.prototype.eval=function(a){var b=new d(this.variable).eval(a);return b.callEval(a)},b.exports=e},{"./node":68,"./variable":80}],74:[function(a,b){var c=a("./node"),d=a("./rule"),e=a("./selector"),f=a("./element"),g=a("./paren"),h=a("../contexts"),i=a("../functions/function-registry"),j=a("../functions/default"),k=a("./debug-info"),l=function(a,b,c){this.selectors=a,this.rules=b,this._lookups={},this.strictImports=c};l.prototype=new c,l.prototype.type="Ruleset",l.prototype.isRuleset=!0,l.prototype.isRulesetLike=!0,l.prototype.accept=function(a){this.paths?a.visitArray(this.paths,!0):this.selectors&&(this.selectors=a.visitArray(this.selectors)),this.rules&&this.rules.length&&(this.rules=a.visitArray(this.rules))},l.prototype.eval=function(a){var b,c,e,f,g=this.selectors,h=!1;if(g&&(c=g.length)){for(b=[],j.error({type:"Syntax",message:"it is currently only allowed in parametric mixin guards,"}),f=0;c>f;f++)e=g[f].eval(a),b.push(e),e.evaldCondition&&(h=!0);j.reset()}else h=!0;var k,m,n=this.rules?this.rules.slice(0):null,o=new l(b,n,this.strictImports);o.originalRuleset=this,o.root=this.root,o.firstRoot=this.firstRoot,o.allowImports=this.allowImports,this.debugInfo&&(o.debugInfo=this.debugInfo),h||(n.length=0),o.functionRegistry=function(a){for(var b,c=0,d=a.length;c!==d;++c)if(b=a[c].functionRegistry)return b;return i}(a.frames).inherit();var p=a.frames;p.unshift(o);var q=a.selectors;q||(a.selectors=q=[]),q.unshift(this.selectors),(o.root||o.allowImports||!o.strictImports)&&o.evalImports(a);var r=o.rules,s=r?r.length:0;for(f=0;s>f;f++)r[f].evalFirst&&(r[f]=r[f].eval(a));var t=a.mediaBlocks&&a.mediaBlocks.length||0;for(f=0;s>f;f++)"MixinCall"===r[f].type?(n=r[f].eval(a).filter(function(a){return a instanceof d&&a.variable?!o.variable(a.name):!0}),r.splice.apply(r,[f,1].concat(n)),s+=n.length-1,f+=n.length-1,o.resetCache()):"RulesetCall"===r[f].type&&(n=r[f].eval(a).rules.filter(function(a){return a instanceof d&&a.variable?!1:!0}),r.splice.apply(r,[f,1].concat(n)),s+=n.length-1,f+=n.length-1,o.resetCache());for(f=0;r.length>f;f++)k=r[f],k.evalFirst||(r[f]=k=k.eval?k.eval(a):k);for(f=0;r.length>f;f++)if(k=r[f],k instanceof l&&k.selectors&&1===k.selectors.length&&k.selectors[0].isJustParentSelector()){r.splice(f--,1);for(var u=0;k.rules.length>u;u++)m=k.rules[u],m instanceof d&&m.variable||r.splice(++f,0,m)}if(p.shift(),q.shift(),a.mediaBlocks)for(f=t;a.mediaBlocks.length>f;f++)a.mediaBlocks[f].bubbleSelectors(b);return o},l.prototype.evalImports=function(a){var b,c,d=this.rules;if(d)for(b=0;d.length>b;b++)"Import"===d[b].type&&(c=d[b].eval(a),c&&c.length?(d.splice.apply(d,[b,1].concat(c)),b+=c.length-1):d.splice(b,1,c),this.resetCache())},l.prototype.makeImportant=function(){var a=new l(this.selectors,this.rules.map(function(a){return a.makeImportant?a.makeImportant():a}),this.strictImports);return a},l.prototype.matchArgs=function(a){return!a||0===a.length},l.prototype.matchCondition=function(a,b){var c=this.selectors[this.selectors.length-1];return c.evaldCondition?c.condition&&!c.condition.eval(new h.Eval(b,b.frames))?!1:!0:!1},l.prototype.resetCache=function(){this._rulesets=null,this._variables=null,this._lookups={}},l.prototype.variables=function(){return this._variables||(this._variables=this.rules?this.rules.reduce(function(a,b){if(b instanceof d&&b.variable===!0&&(a[b.name]=b),"Import"===b.type&&b.root&&b.root.variables){var c=b.root.variables();for(var e in c)c.hasOwnProperty(e)&&(a[e]=c[e])}return a},{}):{}),this._variables},l.prototype.variable=function(a){return this.variables()[a]},l.prototype.rulesets=function(){if(!this.rules)return[];var a,b,c=[],d=this.rules,e=d.length;for(a=0;e>a;a++)b=d[a],b.isRuleset&&c.push(b);return c},l.prototype.prependRule=function(a){var b=this.rules;b?b.unshift(a):this.rules=[a]},l.prototype.find=function(a,b,c){b=b||this;var d,f,g=[],h=a.toCSS();return h in this._lookups?this._lookups[h]:(this.rulesets().forEach(function(h){if(h!==b)for(var i=0;h.selectors.length>i;i++)if(d=a.match(h.selectors[i])){if(a.elements.length>d){if(!c||c(h)){f=h.find(new e(a.elements.slice(d)),b,c);for(var j=0;f.length>j;++j)f[j].path.push(h);Array.prototype.push.apply(g,f)}}else g.push({rule:h,path:[]});break}}),this._lookups[h]=g,g)},l.prototype.genCSS=function(a,b){function c(a){return"boolean"==typeof a.isRulesetLike?a.isRulesetLike:"function"==typeof a.isRulesetLike?a.isRulesetLike():!1}var d,e,f,g,h,i=[],j=[];a.tabLevel=a.tabLevel||0,this.root||a.tabLevel++;var l,m=a.compress?"":Array(a.tabLevel+1).join("  "),n=a.compress?"":Array(a.tabLevel).join("  "),o=0,p=0;for(d=0;this.rules.length>d;d++)g=this.rules[d],"Comment"===g.type?(p===d&&p++,j.push(g)):g.isCharset&&g.isCharset()?(j.splice(o,0,g),o++,p++):"Import"===g.type?(j.splice(p,0,g),p++):j.push(g);if(j=i.concat(j),!this.root){f=k(a,this,n),f&&(b.add(f),b.add(n));var q,r=this.paths,s=r.length;for(l=a.compress?",":",\n"+n,d=0;s>d;d++)if(h=r[d],q=h.length)for(d>0&&b.add(l),a.firstSelector=!0,h[0].genCSS(a,b),a.firstSelector=!1,e=1;q>e;e++)h[e].genCSS(a,b);b.add((a.compress?"{":" {\n")+m)}for(d=0;j.length>d;d++){g=j[d],d+1===j.length&&(a.lastRule=!0);var t=a.lastRule;c(g)&&(a.lastRule=!1),g.genCSS?g.genCSS(a,b):g.value&&b.add(g.value.toString()),a.lastRule=t,a.lastRule?a.lastRule=!1:b.add(a.compress?"":"\n"+m)}this.root||(b.add(a.compress?"}":"\n"+n+"}"),a.tabLevel--),b.isEmpty()||a.compress||!this.firstRoot||b.add("\n")},l.prototype.markReferenced=function(){var a;if(this.selectors)for(a=0;this.selectors.length>a;a++)this.selectors[a].markReferenced();if(this.rules)for(a=0;this.rules.length>a;a++)this.rules[a].markReferenced&&this.rules[a].markReferenced()},l.prototype.getIsReferenced=function(){var a,b,c,d;if(this.paths)for(a=0;this.paths.length>a;a++)for(c=this.paths[a],b=0;c.length>b;b++)if(c[b].getIsReferenced&&c[b].getIsReferenced())return!0;if(this.selectors)for(a=0;this.selectors.length>a;a++)if(d=this.selectors[a],d.getIsReferenced&&d.getIsReferenced())return!0;return!1},l.prototype.joinSelectors=function(a,b,c){for(var d=0;c.length>d;d++)this.joinSelector(a,b,c[d])},l.prototype.joinSelector=function(a,b,c){function d(a,b){var c,d;if(0===a.length)c=new g(a[0]);else{var h=[];for(d=0;a.length>d;d++)h.push(new f(null,a[d],b.index,b.currentFileInfo));c=new g(new e(h))}return c}function h(a,b){var c,d;return c=new f(null,a,b.index,b.currentFileInfo),d=new e([c])}function i(a,b,c){function e(a){var b;return"Paren"!==a.value.type?null:(b=a.value.value,"Selector"!==b.type?null:b)}var g,m,n,o,p,q,r,s,t,u,v=!1;for(o=[],p=[[]],g=0;c.elements.length>g;g++)if(s=c.elements[g],"&"!==s.value){var w=e(s);if(null!=w){l(o,p);var x,y=[],z=[];for(x=i(y,b,w),v=v||x,n=0;y.length>n;n++){var A=h(d(y[n],s),s);k(p,[A],s,c,z)}p=z,o=[]}else o.push(s)}else{for(v=!0,q=[],l(o,p),m=0;p.length>m;m++)if(r=p[m],0===b.length)r.length>0&&r[0].elements.push(new f(s.combinator,"",s.index,s.currentFileInfo)),q.push(r);else for(n=0;b.length>n;n++){var B=j(r,b[n],s,c);q.push(B)}p=q,o=[]}for(l(o,p),g=0;p.length>g;g++)t=p[g].length,t>0&&(a.push(p[g]),u=p[g][t-1],p[g][t-1]=u.createDerived(u.elements,c.extendList));return v}function j(a,b,c,d){var e,g,h;if(e=[],a.length>0?(e=a.slice(0),g=e.pop(),h=d.createDerived(g.elements.slice(0))):h=d.createDerived([]),b.length>0){var i=c.combinator,j=b[0].elements[0];i.emptyOrWhitespace&&!j.combinator.emptyOrWhitespace&&(i=j.combinator),h.elements.push(new f(i,j.value,c.index,c.currentFileInfo)),h.elements=h.elements.concat(b[0].elements.slice(1))}return 0!==h.elements.length&&e.push(h),b.length>1&&(e=e.concat(b.slice(1))),e}function k(a,b,c,d,e){var f;for(f=0;a.length>f;f++){var g=j(a[f],b,c,d);e.push(g)}return e}function l(a,b){var c,d;if(0!==a.length){if(0===b.length)return void b.push([new e(a)]);for(c=0;b.length>c;c++)d=b[c],d.length>0?d[d.length-1]=d[d.length-1].createDerived(d[d.length-1].elements.concat(a)):d.push(new e(a))}}var m,n,o;if(n=[],o=i(n,b,c),!o)if(b.length>0)for(n=[],m=0;b.length>m;m++)n.push(b[m].concat(c));else n=[[c]];for(m=0;n.length>m;m++)a.push(n[m])},b.exports=l},{"../contexts":10,"../functions/default":19,"../functions/function-registry":21,"./debug-info":52,"./element":56,"./node":68,"./paren":70,"./rule":72,"./selector":75}],75:[function(a,b){var c=a("./node"),d=a("./element"),e=function(a,b,c,d,e,f){this.elements=a,this.extendList=b,this.condition=c,this.currentFileInfo=e||{},this.isReferenced=f,c||(this.evaldCondition=!0)};e.prototype=new c,e.prototype.type="Selector",e.prototype.accept=function(a){this.elements&&(this.elements=a.visitArray(this.elements)),this.extendList&&(this.extendList=a.visitArray(this.extendList)),this.condition&&(this.condition=a.visit(this.condition))},e.prototype.createDerived=function(a,b,c){c=null!=c?c:this.evaldCondition;var d=new e(a,b||this.extendList,null,this.index,this.currentFileInfo,this.isReferenced);return d.evaldCondition=c,d.mediaEmpty=this.mediaEmpty,d},e.prototype.createEmptySelectors=function(){var a=new d("","&",this.index,this.currentFileInfo),b=[new e([a],null,null,this.index,this.currentFileInfo)];return b[0].mediaEmpty=!0,b},e.prototype.match=function(a){var b,c,d=this.elements,e=d.length;if(a.CacheElements(),b=a._elements.length,0===b||b>e)return 0;for(c=0;b>c;c++)if(d[c].value!==a._elements[c])return 0;return b},e.prototype.CacheElements=function(){if(!this._elements){var a=this.elements.map(function(a){return a.combinator.value+(a.value.value||a.value)}).join("").match(/[,&#\*\.\w-]([\w-]|(\\.))*/g);a?"&"===a[0]&&a.shift():a=[],this._elements=a}},e.prototype.isJustParentSelector=function(){return!this.mediaEmpty&&1===this.elements.length&&"&"===this.elements[0].value&&(" "===this.elements[0].combinator.value||""===this.elements[0].combinator.value)},e.prototype.eval=function(a){var b=this.condition&&this.condition.eval(a),c=this.elements,d=this.extendList;return c=c&&c.map(function(b){return b.eval(a)}),d=d&&d.map(function(b){return b.eval(a)}),this.createDerived(c,d,b)},e.prototype.genCSS=function(a,b){var c,d;if(a&&a.firstSelector||""!==this.elements[0].combinator.value||b.add(" ",this.currentFileInfo,this.index),!this._css)for(c=0;this.elements.length>c;c++)d=this.elements[c],d.genCSS(a,b)},e.prototype.markReferenced=function(){this.isReferenced=!0},e.prototype.getIsReferenced=function(){return!this.currentFileInfo.reference||this.isReferenced},e.prototype.getIsOutput=function(){return this.evaldCondition},b.exports=e},{"./element":56,"./node":68}],76:[function(a,b){var c=a("./node"),d=function(a){this.value=a};d.prototype=new c,d.prototype.type="UnicodeDescriptor",b.exports=d},{"./node":68}],77:[function(a,b){var c=a("./node"),d=a("../data/unit-conversions"),e=function(a,b,c){this.numerator=a?a.slice(0).sort():[],this.denominator=b?b.slice(0).sort():[],c?this.backupUnit=c:a&&a.length&&(this.backupUnit=a[0])};e.prototype=new c,e.prototype.type="Unit",e.prototype.clone=function(){return new e(this.numerator.slice(0),this.denominator.slice(0),this.backupUnit)},e.prototype.genCSS=function(a,b){var c=a&&a.strictUnits;1===this.numerator.length?b.add(this.numerator[0]):!c&&this.backupUnit?b.add(this.backupUnit):!c&&this.denominator.length&&b.add(this.denominator[0])},e.prototype.toString=function(){var a,b=this.numerator.join("*");for(a=0;this.denominator.length>a;a++)b+="/"+this.denominator[a];return b},e.prototype.compare=function(a){return this.is(a.toString())?0:void 0},e.prototype.is=function(a){return this.toString().toUpperCase()===a.toUpperCase()},e.prototype.isLength=function(){return Boolean(this.toCSS().match(/px|em|%|in|cm|mm|pc|pt|ex/))},e.prototype.isEmpty=function(){return 0===this.numerator.length&&0===this.denominator.length},e.prototype.isSingular=function(){return 1>=this.numerator.length&&0===this.denominator.length},e.prototype.map=function(a){var b;for(b=0;this.numerator.length>b;b++)this.numerator[b]=a(this.numerator[b],!1);for(b=0;this.denominator.length>b;b++)this.denominator[b]=a(this.denominator[b],!0)},e.prototype.usedUnits=function(){var a,b,c={};b=function(b){return a.hasOwnProperty(b)&&!c[e]&&(c[e]=b),b};for(var e in d)d.hasOwnProperty(e)&&(a=d[e],this.map(b));return c},e.prototype.cancel=function(){var a,b,c={};for(b=0;this.numerator.length>b;b++)a=this.numerator[b],c[a]=(c[a]||0)+1;for(b=0;this.denominator.length>b;b++)a=this.denominator[b],c[a]=(c[a]||0)-1;this.numerator=[],this.denominator=[];for(a in c)if(c.hasOwnProperty(a)){var d=c[a];if(d>0)for(b=0;d>b;b++)this.numerator.push(a);else if(0>d)for(b=0;-d>b;b++)this.denominator.push(a)}this.numerator.sort(),this.denominator.sort()},b.exports=e},{"../data/unit-conversions":13,"./node":68}],78:[function(a,b){var c=a("./node"),d=function(a,b,c,d){this.value=a,this.currentFileInfo=c,this.index=b,this.isEvald=d};d.prototype=new c,d.prototype.type="Url",d.prototype.accept=function(a){this.value=a.visit(this.value)},d.prototype.genCSS=function(a,b){b.add("url("),this.value.genCSS(a,b),b.add(")")},d.prototype.eval=function(a){var b,c=this.value.eval(a);if(!this.isEvald&&(b=this.currentFileInfo&&this.currentFileInfo.rootpath,b&&"string"==typeof c.value&&a.isPathRelative(c.value)&&(c.quote||(b=b.replace(/[\(\)'"\s]/g,function(a){return"\\"+a})),c.value=b+c.value),c.value=a.normalizePath(c.value),a.urlArgs&&!c.value.match(/^\s*data:/))){var e=-1===c.value.indexOf("?")?"?":"&",f=e+a.urlArgs;-1!==c.value.indexOf("#")?c.value=c.value.replace("#",f+"#"):c.value+=f}return new d(c,this.index,this.currentFileInfo,!0)},b.exports=d},{"./node":68}],79:[function(a,b){var c=a("./node"),d=function(a){if(this.value=a,!a)throw new Error("Value requires an array argument")};d.prototype=new c,d.prototype.type="Value",d.prototype.accept=function(a){this.value&&(this.value=a.visitArray(this.value))},d.prototype.eval=function(a){return 1===this.value.length?this.value[0].eval(a):new d(this.value.map(function(b){return b.eval(a)}))},d.prototype.genCSS=function(a,b){var c;for(c=0;this.value.length>c;c++)this.value[c].genCSS(a,b),this.value.length>c+1&&b.add(a&&a.compress?",":", ")},b.exports=d},{"./node":68}],80:[function(a,b){var c=a("./node"),d=function(a,b,c){this.name=a,this.index=b,this.currentFileInfo=c||{}};d.prototype=new c,d.prototype.type="Variable",d.prototype.eval=function(a){var b,c=this.name;if(0===c.indexOf("@@")&&(c="@"+new d(c.slice(1),this.index,this.currentFileInfo).eval(a).value),this.evaluating)throw{type:"Name",message:"Recursive variable definition for "+c,filename:this.currentFileInfo.filename,index:this.index};if(this.evaluating=!0,b=this.find(a.frames,function(b){var d=b.variable(c);if(d){if(d.important){var e=a.importantScope[a.importantScope.length-1];e.important=d.important}return d.value.eval(a)}}))return this.evaluating=!1,b;throw{type:"Name",message:"variable "+c+" is undefined",filename:this.currentFileInfo.filename,index:this.index}},d.prototype.find=function(a,b){for(var c,d=0;a.length>d;d++)if(c=b.call(a,a[d]))return c;return null},b.exports=d},{"./node":68}],81:[function(a,b){b.exports={getLocation:function(a,b){for(var c=a+1,d=null,e=-1;--c>=0&&"\n"!==b.charAt(c);)e++;return"number"==typeof a&&(d=(b.slice(0,a).match(/\n/g)||"").length),{line:d,column:e}}}},{}],82:[function(a,b){var c=a("../tree"),d=a("./visitor"),e=a("../logger"),f=function(){this._visitor=new d(this),this.contexts=[],this.allExtendsStack=[[]]};f.prototype={run:function(a){return a=this._visitor.visit(a),a.allExtends=this.allExtendsStack[0],a},visitRule:function(a,b){b.visitDeeper=!1},visitMixinDefinition:function(a,b){b.visitDeeper=!1},visitRuleset:function(a){if(!a.root){var b,d,e,f,g=[],h=a.rules,i=h?h.length:0;for(b=0;i>b;b++)a.rules[b]instanceof c.Extend&&(g.push(h[b]),a.extendOnEveryPath=!0);var j=a.paths;for(b=0;j.length>b;b++){var k=j[b],l=k[k.length-1],m=l.extendList;for(f=m?m.slice(0).concat(g):g,f&&(f=f.map(function(a){return a.clone()})),d=0;f.length>d;d++)this.foundExtends=!0,e=f[d],e.findSelfSelectors(k),e.ruleset=a,0===d&&(e.firstExtendOnThisSelectorPath=!0),this.allExtendsStack[this.allExtendsStack.length-1].push(e)}this.contexts.push(a.selectors)}},visitRulesetOut:function(a){a.root||(this.contexts.length=this.contexts.length-1)},visitMedia:function(a){a.allExtends=[],this.allExtendsStack.push(a.allExtends)},visitMediaOut:function(){this.allExtendsStack.length=this.allExtendsStack.length-1},visitDirective:function(a){a.allExtends=[],this.allExtendsStack.push(a.allExtends)},visitDirectiveOut:function(){this.allExtendsStack.length=this.allExtendsStack.length-1}};var g=function(){this._visitor=new d(this)};g.prototype={run:function(a){var b=new f;if(this.extendIndicies={},b.run(a),!b.foundExtends)return a;a.allExtends=a.allExtends.concat(this.doExtendChaining(a.allExtends,a.allExtends)),this.allExtendsStack=[a.allExtends];var c=this._visitor.visit(a);return this.checkExtendsForNonMatched(a.allExtends),c},checkExtendsForNonMatched:function(a){var b=this.extendIndicies;a.filter(function(a){return!a.hasFoundMatches&&1==a.parent_ids.length}).forEach(function(a){var c="_unknown_";try{c=a.selector.toCSS({})}catch(d){}b[a.index+" "+c]||(b[a.index+" "+c]=!0,e.warn("extend '"+c+"' has no matches"))})},doExtendChaining:function(a,b,d){var e,f,g,h,i,j,k,l,m=[],n=this;for(d=d||0,e=0;a.length>e;e++)for(f=0;b.length>f;f++)j=a[e],k=b[f],j.parent_ids.indexOf(k.object_id)>=0||(i=[k.selfSelectors[0]],g=n.findMatch(j,i),g.length&&(j.hasFoundMatches=!0,j.selfSelectors.forEach(function(a){h=n.extendSelector(g,i,a),l=new c.Extend(k.selector,k.option,0),l.selfSelectors=h,h[h.length-1].extendList=[l],m.push(l),l.ruleset=k.ruleset,l.parent_ids=l.parent_ids.concat(k.parent_ids,j.parent_ids),k.firstExtendOnThisSelectorPath&&(l.firstExtendOnThisSelectorPath=!0,k.ruleset.paths.push(h))})));if(m.length){if(this.extendChainCount++,d>100){var o="{unable to calculate}",p="{unable to calculate}";try{o=m[0].selfSelectors[0].toCSS(),p=m[0].selector.toCSS()}catch(q){}throw{message:"extend circular reference detected. One of the circular extends is currently:"+o+":extend("+p+")"}}return m.concat(n.doExtendChaining(m,b,d+1))}return m},visitRule:function(a,b){b.visitDeeper=!1},visitMixinDefinition:function(a,b){b.visitDeeper=!1},visitSelector:function(a,b){b.visitDeeper=!1},visitRuleset:function(a){if(!a.root){var b,c,d,e,f=this.allExtendsStack[this.allExtendsStack.length-1],g=[],h=this;for(d=0;f.length>d;d++)for(c=0;a.paths.length>c;c++)if(e=a.paths[c],!a.extendOnEveryPath){var i=e[e.length-1].extendList;i&&i.length||(b=this.findMatch(f[d],e),b.length&&(f[d].hasFoundMatches=!0,f[d].selfSelectors.forEach(function(a){g.push(h.extendSelector(b,e,a))})))}a.paths=a.paths.concat(g)}},findMatch:function(a,b){var c,d,e,f,g,h,i,j=this,k=a.selector.elements,l=[],m=[];for(c=0;b.length>c;c++)for(d=b[c],e=0;d.elements.length>e;e++)for(f=d.elements[e],(a.allowBefore||0===c&&0===e)&&l.push({pathIndex:c,index:e,matched:0,initialCombinator:f.combinator}),h=0;l.length>h;h++)i=l[h],g=f.combinator.value,""===g&&0===e&&(g=" "),!j.isElementValuesEqual(k[i.matched].value,f.value)||i.matched>0&&k[i.matched].combinator.value!==g?i=null:i.matched++,i&&(i.finished=i.matched===k.length,i.finished&&!a.allowAfter&&(d.elements.length>e+1||b.length>c+1)&&(i=null)),i?i.finished&&(i.length=k.length,i.endPathIndex=c,i.endPathElementIndex=e+1,l.length=0,m.push(i)):(l.splice(h,1),h--);return m},isElementValuesEqual:function(a,b){if("string"==typeof a||"string"==typeof b)return a===b;if(a instanceof c.Attribute)return a.op!==b.op||a.key!==b.key?!1:a.value&&b.value?(a=a.value.value||a.value,b=b.value.value||b.value,a===b):a.value||b.value?!1:!0;if(a=a.value,b=b.value,a instanceof c.Selector){if(!(b instanceof c.Selector)||a.elements.length!==b.elements.length)return!1;for(var d=0;a.elements.length>d;d++){if(a.elements[d].combinator.value!==b.elements[d].combinator.value&&(0!==d||(a.elements[d].combinator.value||" ")!==(b.elements[d].combinator.value||" ")))return!1;if(!this.isElementValuesEqual(a.elements[d].value,b.elements[d].value))return!1}return!0}return!1},extendSelector:function(a,b,d){var e,f,g,h,i,j=0,k=0,l=[];for(e=0;a.length>e;e++)h=a[e],f=b[h.pathIndex],g=new c.Element(h.initialCombinator,d.elements[0].value,d.elements[0].index,d.elements[0].currentFileInfo),h.pathIndex>j&&k>0&&(l[l.length-1].elements=l[l.length-1].elements.concat(b[j].elements.slice(k)),k=0,j++),i=f.elements.slice(k,h.index).concat([g]).concat(d.elements.slice(1)),j===h.pathIndex&&e>0?l[l.length-1].elements=l[l.length-1].elements.concat(i):(l=l.concat(b.slice(j,h.pathIndex)),l.push(new c.Selector(i))),j=h.endPathIndex,k=h.endPathElementIndex,k>=b[j].elements.length&&(k=0,j++);return b.length>j&&k>0&&(l[l.length-1].elements=l[l.length-1].elements.concat(b[j].elements.slice(k)),j++),l=l.concat(b.slice(j,b.length))},visitRulesetOut:function(){},visitMedia:function(a){var b=a.allExtends.concat(this.allExtendsStack[this.allExtendsStack.length-1]);b=b.concat(this.doExtendChaining(b,a.allExtends)),this.allExtendsStack.push(b)},visitMediaOut:function(){var a=this.allExtendsStack.length-1;this.allExtendsStack.length=a},visitDirective:function(a){var b=a.allExtends.concat(this.allExtendsStack[this.allExtendsStack.length-1]);b=b.concat(this.doExtendChaining(b,a.allExtends)),this.allExtendsStack.push(b)},visitDirectiveOut:function(){var a=this.allExtendsStack.length-1;this.allExtendsStack.length=a}},b.exports=g},{"../logger":31,"../tree":60,"./visitor":88}],83:[function(a,b){function c(a){this.imports=[],this.variableImports=[],this._onSequencerEmpty=a,this._currentDepth=0}c.prototype.addImport=function(a){var b=this,c={callback:a,args:null,isReady:!1};return this.imports.push(c),function(){c.args=Array.prototype.slice.call(arguments,0),c.isReady=!0,b.tryRun()}},c.prototype.addVariableImport=function(a){this.variableImports.push(a)},c.prototype.tryRun=function(){this._currentDepth++;try{for(;;){for(;this.imports.length>0;){var a=this.imports[0];if(!a.isReady)return;this.imports=this.imports.slice(1),a.callback.apply(null,a.args)}if(0===this.variableImports.length)break;var b=this.variableImports[0];this.variableImports=this.variableImports.slice(1),b()}}finally{this._currentDepth--}0===this._currentDepth&&this._onSequencerEmpty&&this._onSequencerEmpty()},b.exports=c},{}],84:[function(a,b){var c=a("../contexts"),d=a("./visitor"),e=a("./import-sequencer"),f=function(a,b){this._visitor=new d(this),this._importer=a,this._finish=b,this.context=new c.Eval,this.importCount=0,this.onceFileDetectionMap={},this.recursionDetector={},this._sequencer=new e(this._onSequencerEmpty.bind(this))};f.prototype={isReplacing:!1,run:function(a){try{this._visitor.visit(a)}catch(b){this.error=b}this.isFinished=!0,this._sequencer.tryRun()},_onSequencerEmpty:function(){this.isFinished&&this._finish(this.error)},visitImport:function(a,b){var d=a.options.inline;if(!a.css||d){var e=new c.Eval(this.context,this.context.frames.slice(0)),f=e.frames[0];this.importCount++,a.isVariableImport()?this._sequencer.addVariableImport(this.processImportNode.bind(this,a,e,f)):this.processImportNode(a,e,f)}b.visitDeeper=!1},processImportNode:function(a,b,c){var d,e=a.options.inline;try{d=a.evalForImport(b)}catch(f){f.filename||(f.index=a.index,f.filename=a.currentFileInfo.filename),a.css=!0,a.error=f}if(!d||d.css&&!e)this.importCount--,this.isFinished&&this._sequencer.tryRun();else{d.options.multiple&&(b.importMultiple=!0);for(var g=void 0===d.css,h=0;c.rules.length>h;h++)if(c.rules[h]===a){c.rules[h]=d;break}var i=this.onImported.bind(this,d,b),j=this._sequencer.addImport(i);this._importer.push(d.getPath(),g,d.currentFileInfo,d.options,j)}},onImported:function(a,b,c,d,e,f){c&&(c.filename||(c.index=a.index,c.filename=a.currentFileInfo.filename),this.error=c);var g=this,h=a.options.inline,i=a.options.plugin,j=e||f in g.recursionDetector;if(b.importMultiple||(a.skip=j?!0:function(){return f in g.onceFileDetectionMap?!0:(g.onceFileDetectionMap[f]=!0,!1)}),d&&(a.root=d,a.importedFilename=f,!(h||i||!b.importMultiple&&j))){g.recursionDetector[f]=!0;var k=this.context;this.context=b;try{this._visitor.visit(d)}catch(c){this.error=c}this.context=k}g.importCount--,g.isFinished&&g._sequencer.tryRun()},visitRule:function(a,b){"DetachedRuleset"===a.value.type?this.context.frames.unshift(a):b.visitDeeper=!1},visitRuleOut:function(a){"DetachedRuleset"===a.value.type&&this.context.frames.shift()},visitDirective:function(a){this.context.frames.unshift(a)},visitDirectiveOut:function(){this.context.frames.shift()},visitMixinDefinition:function(a){this.context.frames.unshift(a)},visitMixinDefinitionOut:function(){this.context.frames.shift()},visitRuleset:function(a){this.context.frames.unshift(a)},visitRulesetOut:function(){this.context.frames.shift()},visitMedia:function(a){this.context.frames.unshift(a.rules[0])},visitMediaOut:function(){this.context.frames.shift()}},b.exports=f},{"../contexts":10,"./import-sequencer":83,"./visitor":88}],85:[function(a,b){var c={Visitor:a("./visitor"),ImportVisitor:a("./import-visitor"),ExtendVisitor:a("./extend-visitor"),JoinSelectorVisitor:a("./join-selector-visitor"),ToCSSVisitor:a("./to-css-visitor")};b.exports=c},{"./extend-visitor":82,"./import-visitor":84,"./join-selector-visitor":86,"./to-css-visitor":87,"./visitor":88}],86:[function(a,b){var c=a("./visitor"),d=function(){this.contexts=[[]],this._visitor=new c(this)};d.prototype={run:function(a){return this._visitor.visit(a)},visitRule:function(a,b){b.visitDeeper=!1},visitMixinDefinition:function(a,b){b.visitDeeper=!1},visitRuleset:function(a){var b,c=this.contexts[this.contexts.length-1],d=[];this.contexts.push(d),a.root||(b=a.selectors,b&&(b=b.filter(function(a){return a.getIsOutput()}),a.selectors=b.length?b:b=null,b&&a.joinSelectors(d,c,b)),b||(a.rules=null),a.paths=d)},visitRulesetOut:function(){this.contexts.length=this.contexts.length-1},visitMedia:function(a){var b=this.contexts[this.contexts.length-1];a.rules[0].root=0===b.length||b[0].multiMedia},visitDirective:function(a){var b=this.contexts[this.contexts.length-1];a.rules&&a.rules.length&&(a.rules[0].root=a.isRooted||0===b.length||null)}},b.exports=d},{"./visitor":88}],87:[function(a,b){var c=a("../tree"),d=a("./visitor"),e=function(a){this._visitor=new d(this),this._context=a};e.prototype={isReplacing:!0,run:function(a){return this._visitor.visit(a)},visitRule:function(a){return a.variable?void 0:a},visitMixinDefinition:function(a){
a.frames=[]},visitExtend:function(){},visitComment:function(a){return a.isSilent(this._context)?void 0:a},visitMedia:function(a,b){return a.accept(this._visitor),b.visitDeeper=!1,a.rules.length?a:void 0},visitImport:function(a){return void 0!==a.path.currentFileInfo.reference&&a.css?void 0:a},visitDirective:function(a,b){function d(a){var b,c=a.rules;1!==c.length||c[0].paths&&0!==c[0].paths.length||(c=c[0].rules);for(var d=0;c.length>d;d++)if(b=c[d],b.getIsReferenced&&b.getIsReferenced())return!0;return!1}if("@charset"===a.name){if(!a.getIsReferenced())return;if(this.charset){if(a.debugInfo){var e=new c.Comment("/* "+a.toCSS(this._context).replace(/\n/g,"")+" */\n");return e.debugInfo=a.debugInfo,this._visitor.visit(e)}return}this.charset=!0}if(a.rules&&a.rules.length){if(this._mergeRules(a.rules[0].rules),a.accept(this._visitor),b.visitDeeper=!1,a.getIsReferenced())return a;if(!a.rules||!a.rules.length)return;if(d(a))return a.markReferenced(),a}else if(a.getIsReferenced())return a},checkPropertiesInRoot:function(a){for(var b,d=0;a.length>d;d++)if(b=a[d],b instanceof c.Rule&&!b.variable)throw{message:"properties must be inside selector blocks, they cannot be in the root.",index:b.index,filename:b.currentFileInfo?b.currentFileInfo.filename:null}},visitRuleset:function(a,b){var d,e=[];if(a.firstRoot&&this.checkPropertiesInRoot(a.rules),a.root)a.accept(this._visitor),b.visitDeeper=!1,(a.firstRoot||a.rules&&a.rules.length>0)&&e.splice(0,0,a);else{a.paths&&(a.paths=a.paths.filter(function(a){var b;for(" "===a[0].elements[0].combinator.value&&(a[0].elements[0].combinator=new c.Combinator("")),b=0;a.length>b;b++)if(a[b].getIsReferenced()&&a[b].getIsOutput())return!0;return!1}));for(var f=a.rules,g=f?f.length:0,h=0;g>h;)d=f[h],d&&d.rules?(e.push(this._visitor.visit(d)),f.splice(h,1),g--):h++;g>0?a.accept(this._visitor):a.rules=null,b.visitDeeper=!1,f=a.rules,f&&(this._mergeRules(f),f=a.rules),f&&(this._removeDuplicateRules(f),f=a.rules),f&&f.length>0&&a.paths.length>0&&e.splice(0,0,a)}return 1===e.length?e[0]:e},_removeDuplicateRules:function(a){if(a){var b,d,e,f={};for(e=a.length-1;e>=0;e--)if(d=a[e],d instanceof c.Rule)if(f[d.name]){b=f[d.name],b instanceof c.Rule&&(b=f[d.name]=[f[d.name].toCSS(this._context)]);var g=d.toCSS(this._context);-1!==b.indexOf(g)?a.splice(e,1):b.push(g)}else f[d.name]=d}},_mergeRules:function(a){if(a){for(var b,d,e,f={},g=0;a.length>g;g++)d=a[g],d instanceof c.Rule&&d.merge&&(e=[d.name,d.important?"!":""].join(","),f[e]?a.splice(g--,1):f[e]=[],f[e].push(d));Object.keys(f).map(function(a){function e(a){return new c.Expression(a.map(function(a){return a.value}))}function g(a){return new c.Value(a.map(function(a){return a}))}if(b=f[a],b.length>1){d=b[0];var h=[],i=[];b.map(function(a){"+"===a.merge&&(i.length>0&&h.push(e(i)),i=[]),i.push(a)}),h.push(e(i)),d.value=g(h)}})}}},b.exports=e},{"../tree":60,"./visitor":88}],88:[function(a,b){function c(a){return a}function d(a,b){var c,e;for(c in a)if(a.hasOwnProperty(c))switch(e=a[c],typeof e){case"function":e.prototype&&e.prototype.type&&(e.prototype.typeIndex=b++);break;case"object":b=d(e,b)}return b}var e=a("../tree"),f={visitDeeper:!0},g=!1,h=function(a){this._implementation=a,this._visitFnCache=[],g||(d(e,1),g=!0)};h.prototype={visit:function(a){if(!a)return a;var b=a.typeIndex;if(!b)return a;var d,e=this._visitFnCache,g=this._implementation,h=b<<1,i=1|h,j=e[h],k=e[i],l=f;if(l.visitDeeper=!0,j||(d="visit"+a.type,j=g[d]||c,k=g[d+"Out"]||c,e[h]=j,e[i]=k),j!==c){var m=j.call(g,a,l);g.isReplacing&&(a=m)}return l.visitDeeper&&a&&a.accept&&a.accept(this),k!=c&&k.call(g,a),a},visitArray:function(a,b){if(!a)return a;var c,d=a.length;if(b||!this._implementation.isReplacing){for(c=0;d>c;c++)this.visit(a[c]);return a}var e=[];for(c=0;d>c;c++){var f=this.visit(a[c]);void 0!==f&&(f.splice?f.length&&this.flatten(f,e):e.push(f))}return e},flatten:function(a,b){b||(b=[]);var c,d,e,f,g,h;for(d=0,c=a.length;c>d;d++)if(e=a[d],void 0!==e)if(e.splice)for(g=0,f=e.length;f>g;g++)h=e[g],void 0!==h&&(h.splice?h.length&&this.flatten(h,b):b.push(h));else b.push(e);return b}},b.exports=h},{"../tree":60}],89:[function(a,b){function c(){if(!g){g=!0;for(var a,b=f.length;b;){a=f,f=[];for(var c=-1;++c<b;)a[c]();b=f.length}g=!1}}function d(){}var e=b.exports={},f=[],g=!1;e.nextTick=function(a){f.push(a),g||setTimeout(c,0)},e.title="browser",e.browser=!0,e.env={},e.argv=[],e.version="",e.versions={},e.on=d,e.addListener=d,e.once=d,e.off=d,e.removeListener=d,e.removeAllListeners=d,e.emit=d,e.binding=function(){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(){throw new Error("process.chdir is not supported")},e.umask=function(){return 0}},{}],90:[function(a,b){"use strict";function c(a){function b(a){return null===i?void k.push(a):void f(function(){var b=i?a.onFulfilled:a.onRejected;if(null===b)return void(i?a.resolve:a.reject)(j);var c;try{c=b(j)}catch(d){return void a.reject(d)}a.resolve(c)})}function c(a){try{if(a===l)throw new TypeError("A promise cannot be resolved with itself.");if(a&&("object"==typeof a||"function"==typeof a)){var b=a.then;if("function"==typeof b)return void e(b.bind(a),c,g)}i=!0,j=a,h()}catch(d){g(d)}}function g(a){i=!1,j=a,h()}function h(){for(var a=0,c=k.length;c>a;a++)b(k[a]);k=null}if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof a)throw new TypeError("not a function");var i=null,j=null,k=[],l=this;this.then=function(a,c){return new l.constructor(function(e,f){b(new d(a,c,e,f))})},e(a,c,g)}function d(a,b,c,d){this.onFulfilled="function"==typeof a?a:null,this.onRejected="function"==typeof b?b:null,this.resolve=c,this.reject=d}function e(a,b,c){var d=!1;try{a(function(a){d||(d=!0,b(a))},function(a){d||(d=!0,c(a))})}catch(e){if(d)return;d=!0,c(e)}}var f=a("asap");b.exports=c},{asap:92}],91:[function(a,b){"use strict";function c(a){this.then=function(b){return"function"!=typeof b?this:new d(function(c,d){e(function(){try{c(b(a))}catch(e){d(e)}})})}}var d=a("./core.js"),e=a("asap");b.exports=d,c.prototype=d.prototype;var f=new c(!0),g=new c(!1),h=new c(null),i=new c(void 0),j=new c(0),k=new c("");d.resolve=function(a){if(a instanceof d)return a;if(null===a)return h;if(void 0===a)return i;if(a===!0)return f;if(a===!1)return g;if(0===a)return j;if(""===a)return k;if("object"==typeof a||"function"==typeof a)try{var b=a.then;if("function"==typeof b)return new d(b.bind(a))}catch(e){return new d(function(a,b){b(e)})}return new c(a)},d.all=function(a){var b=Array.prototype.slice.call(a);return new d(function(a,c){function d(f,g){try{if(g&&("object"==typeof g||"function"==typeof g)){var h=g.then;if("function"==typeof h)return void h.call(g,function(a){d(f,a)},c)}b[f]=g,0===--e&&a(b)}catch(i){c(i)}}if(0===b.length)return a([]);for(var e=b.length,f=0;b.length>f;f++)d(f,b[f])})},d.reject=function(a){return new d(function(b,c){c(a)})},d.race=function(a){return new d(function(b,c){a.forEach(function(a){d.resolve(a).then(b,c)})})},d.prototype["catch"]=function(a){return this.then(null,a)}},{"./core.js":90,asap:92}],92:[function(a,b){(function(a){function c(){for(;e.next;){e=e.next;var a=e.task;e.task=void 0;var b=e.domain;b&&(e.domain=void 0,b.enter());try{a()}catch(d){if(i)throw b&&b.exit(),setTimeout(c,0),b&&b.enter(),d;setTimeout(function(){throw d},0)}b&&b.exit()}g=!1}function d(b){f=f.next={task:b,domain:i&&a.domain,next:null},g||(g=!0,h())}var e={task:void 0,next:null},f=e,g=!1,h=void 0,i=!1;if("undefined"!=typeof a&&a.nextTick)i=!0,h=function(){a.nextTick(c)};else if("function"==typeof setImmediate)h="undefined"!=typeof window?setImmediate.bind(window,c):function(){setImmediate(c)};else if("undefined"!=typeof MessageChannel){var j=new MessageChannel;j.port1.onmessage=c,h=function(){j.port2.postMessage(0)}}else h=function(){setTimeout(c,0)};b.exports=d}).call(this,a("_process"))},{_process:89}],93:[function(){"function"!=typeof Promise.prototype.done&&(Promise.prototype.done=function(){var a=arguments.length?this.then.apply(this,arguments):this;a.then(null,function(a){setTimeout(function(){throw a},0)})})},{}],94:[function(a){a("asap");"undefined"==typeof Promise&&(Promise=a("./lib/core.js"),a("./lib/es6-extensions.js")),a("./polyfill-done.js")},{"./lib/core.js":90,"./lib/es6-extensions.js":91,"./polyfill-done.js":93,asap:92}]},{},[2])(2)});;
//! moment.js
//! version : 2.10.3
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.moment=b()}(this,function(){"use strict";function a(){return Dc.apply(null,arguments)}function b(a){Dc=a}function c(a){return"[object Array]"===Object.prototype.toString.call(a)}function d(a){return a instanceof Date||"[object Date]"===Object.prototype.toString.call(a)}function e(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function f(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function g(a,b){for(var c in b)f(b,c)&&(a[c]=b[c]);return f(b,"toString")&&(a.toString=b.toString),f(b,"valueOf")&&(a.valueOf=b.valueOf),a}function h(a,b,c,d){return za(a,b,c,d,!0).utc()}function i(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function j(a){return null==a._pf&&(a._pf=i()),a._pf}function k(a){if(null==a._isValid){var b=j(a);a._isValid=!isNaN(a._d.getTime())&&b.overflow<0&&!b.empty&&!b.invalidMonth&&!b.nullInput&&!b.invalidFormat&&!b.userInvalidated,a._strict&&(a._isValid=a._isValid&&0===b.charsLeftOver&&0===b.unusedTokens.length&&void 0===b.bigHour)}return a._isValid}function l(a){var b=h(0/0);return null!=a?g(j(b),a):j(b).userInvalidated=!0,b}function m(a,b){var c,d,e;if("undefined"!=typeof b._isAMomentObject&&(a._isAMomentObject=b._isAMomentObject),"undefined"!=typeof b._i&&(a._i=b._i),"undefined"!=typeof b._f&&(a._f=b._f),"undefined"!=typeof b._l&&(a._l=b._l),"undefined"!=typeof b._strict&&(a._strict=b._strict),"undefined"!=typeof b._tzm&&(a._tzm=b._tzm),"undefined"!=typeof b._isUTC&&(a._isUTC=b._isUTC),"undefined"!=typeof b._offset&&(a._offset=b._offset),"undefined"!=typeof b._pf&&(a._pf=j(b)),"undefined"!=typeof b._locale&&(a._locale=b._locale),Fc.length>0)for(c in Fc)d=Fc[c],e=b[d],"undefined"!=typeof e&&(a[d]=e);return a}function n(b){m(this,b),this._d=new Date(+b._d),Gc===!1&&(Gc=!0,a.updateOffset(this),Gc=!1)}function o(a){return a instanceof n||null!=a&&null!=a._isAMomentObject}function p(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=b>=0?Math.floor(b):Math.ceil(b)),c}function q(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&p(a[d])!==p(b[d]))&&g++;return g+f}function r(){}function s(a){return a?a.toLowerCase().replace("_","-"):a}function t(a){for(var b,c,d,e,f=0;f<a.length;){for(e=s(a[f]).split("-"),b=e.length,c=s(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=u(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&q(e,c,!0)>=b-1)break;b--}f++}return null}function u(a){var b=null;if(!Hc[a]&&"undefined"!=typeof module&&module&&module.exports)try{b=Ec._abbr,require("./locale/"+a),v(b)}catch(c){}return Hc[a]}function v(a,b){var c;return a&&(c="undefined"==typeof b?x(a):w(a,b),c&&(Ec=c)),Ec._abbr}function w(a,b){return null!==b?(b.abbr=a,Hc[a]||(Hc[a]=new r),Hc[a].set(b),v(a),Hc[a]):(delete Hc[a],null)}function x(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return Ec;if(!c(a)){if(b=u(a))return b;a=[a]}return t(a)}function y(a,b){var c=a.toLowerCase();Ic[c]=Ic[c+"s"]=Ic[b]=a}function z(a){return"string"==typeof a?Ic[a]||Ic[a.toLowerCase()]:void 0}function A(a){var b,c,d={};for(c in a)f(a,c)&&(b=z(c),b&&(d[b]=a[c]));return d}function B(b,c){return function(d){return null!=d?(D(this,b,d),a.updateOffset(this,c),this):C(this,b)}}function C(a,b){return a._d["get"+(a._isUTC?"UTC":"")+b]()}function D(a,b,c){return a._d["set"+(a._isUTC?"UTC":"")+b](c)}function E(a,b){var c;if("object"==typeof a)for(c in a)this.set(c,a[c]);else if(a=z(a),"function"==typeof this[a])return this[a](b);return this}function F(a,b,c){for(var d=""+Math.abs(a),e=a>=0;d.length<b;)d="0"+d;return(e?c?"+":"":"-")+d}function G(a,b,c,d){var e=d;"string"==typeof d&&(e=function(){return this[d]()}),a&&(Mc[a]=e),b&&(Mc[b[0]]=function(){return F(e.apply(this,arguments),b[1],b[2])}),c&&(Mc[c]=function(){return this.localeData().ordinal(e.apply(this,arguments),a)})}function H(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function I(a){var b,c,d=a.match(Jc);for(b=0,c=d.length;c>b;b++)Mc[d[b]]?d[b]=Mc[d[b]]:d[b]=H(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function J(a,b){return a.isValid()?(b=K(b,a.localeData()),Lc[b]||(Lc[b]=I(b)),Lc[b](a)):a.localeData().invalidDate()}function K(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Kc.lastIndex=0;d>=0&&Kc.test(a);)a=a.replace(Kc,c),Kc.lastIndex=0,d-=1;return a}function L(a,b,c){_c[a]="function"==typeof b?b:function(a){return a&&c?c:b}}function M(a,b){return f(_c,a)?_c[a](b._strict,b._locale):new RegExp(N(a))}function N(a){return a.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e}).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function O(a,b){var c,d=b;for("string"==typeof a&&(a=[a]),"number"==typeof b&&(d=function(a,c){c[b]=p(a)}),c=0;c<a.length;c++)ad[a[c]]=d}function P(a,b){O(a,function(a,c,d,e){d._w=d._w||{},b(a,d._w,d,e)})}function Q(a,b,c){null!=b&&f(ad,a)&&ad[a](b,c._a,c,a)}function R(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function S(a){return this._months[a.month()]}function T(a){return this._monthsShort[a.month()]}function U(a,b,c){var d,e,f;for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;12>d;d++){if(e=h([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}}function V(a,b){var c;return"string"==typeof b&&(b=a.localeData().monthsParse(b),"number"!=typeof b)?a:(c=Math.min(a.date(),R(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a)}function W(b){return null!=b?(V(this,b),a.updateOffset(this,!0),this):C(this,"Month")}function X(){return R(this.year(),this.month())}function Y(a){var b,c=a._a;return c&&-2===j(a).overflow&&(b=c[cd]<0||c[cd]>11?cd:c[dd]<1||c[dd]>R(c[bd],c[cd])?dd:c[ed]<0||c[ed]>24||24===c[ed]&&(0!==c[fd]||0!==c[gd]||0!==c[hd])?ed:c[fd]<0||c[fd]>59?fd:c[gd]<0||c[gd]>59?gd:c[hd]<0||c[hd]>999?hd:-1,j(a)._overflowDayOfYear&&(bd>b||b>dd)&&(b=dd),j(a).overflow=b),a}function Z(b){a.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+b)}function $(a,b){var c=!0,d=a+"\n"+(new Error).stack;return g(function(){return c&&(Z(d),c=!1),b.apply(this,arguments)},b)}function _(a,b){kd[a]||(Z(b),kd[a]=!0)}function aa(a){var b,c,d=a._i,e=ld.exec(d);if(e){for(j(a).iso=!0,b=0,c=md.length;c>b;b++)if(md[b][1].exec(d)){a._f=md[b][0]+(e[6]||" ");break}for(b=0,c=nd.length;c>b;b++)if(nd[b][1].exec(d)){a._f+=nd[b][0];break}d.match(Yc)&&(a._f+="Z"),ta(a)}else a._isValid=!1}function ba(b){var c=od.exec(b._i);return null!==c?void(b._d=new Date(+c[1])):(aa(b),void(b._isValid===!1&&(delete b._isValid,a.createFromInputFallback(b))))}function ca(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function da(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function ea(a){return fa(a)?366:365}function fa(a){return a%4===0&&a%100!==0||a%400===0}function ga(){return fa(this.year())}function ha(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=Aa(a).add(f,"d"),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function ia(a){return ha(a,this._week.dow,this._week.doy).week}function ja(){return this._week.dow}function ka(){return this._week.doy}function la(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")}function ma(a){var b=ha(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")}function na(a,b,c,d,e){var f,g,h=da(a,0,1).getUTCDay();return h=0===h?7:h,c=null!=c?c:e,f=e-h+(h>d?7:0)-(e>h?7:0),g=7*(b-1)+(c-e)+f+1,{year:g>0?a:a-1,dayOfYear:g>0?g:ea(a-1)+g}}function oa(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")}function pa(a,b,c){return null!=a?a:null!=b?b:c}function qa(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function ra(a){var b,c,d,e,f=[];if(!a._d){for(d=qa(a),a._w&&null==a._a[dd]&&null==a._a[cd]&&sa(a),a._dayOfYear&&(e=pa(a._a[bd],d[bd]),a._dayOfYear>ea(e)&&(j(a)._overflowDayOfYear=!0),c=da(e,0,a._dayOfYear),a._a[cd]=c.getUTCMonth(),a._a[dd]=c.getUTCDate()),b=0;3>b&&null==a._a[b];++b)a._a[b]=f[b]=d[b];for(;7>b;b++)a._a[b]=f[b]=null==a._a[b]?2===b?1:0:a._a[b];24===a._a[ed]&&0===a._a[fd]&&0===a._a[gd]&&0===a._a[hd]&&(a._nextDay=!0,a._a[ed]=0),a._d=(a._useUTC?da:ca).apply(null,f),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[ed]=24)}}function sa(a){var b,c,d,e,f,g,h;b=a._w,null!=b.GG||null!=b.W||null!=b.E?(f=1,g=4,c=pa(b.GG,a._a[bd],ha(Aa(),1,4).year),d=pa(b.W,1),e=pa(b.E,1)):(f=a._locale._week.dow,g=a._locale._week.doy,c=pa(b.gg,a._a[bd],ha(Aa(),f,g).year),d=pa(b.w,1),null!=b.d?(e=b.d,f>e&&++d):e=null!=b.e?b.e+f:f),h=na(c,d,e,g,f),a._a[bd]=h.year,a._dayOfYear=h.dayOfYear}function ta(b){if(b._f===a.ISO_8601)return void aa(b);b._a=[],j(b).empty=!0;var c,d,e,f,g,h=""+b._i,i=h.length,k=0;for(e=K(b._f,b._locale).match(Jc)||[],c=0;c<e.length;c++)f=e[c],d=(h.match(M(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&j(b).unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),k+=d.length),Mc[f]?(d?j(b).empty=!1:j(b).unusedTokens.push(f),Q(f,d,b)):b._strict&&!d&&j(b).unusedTokens.push(f);j(b).charsLeftOver=i-k,h.length>0&&j(b).unusedInput.push(h),j(b).bigHour===!0&&b._a[ed]<=12&&b._a[ed]>0&&(j(b).bigHour=void 0),b._a[ed]=ua(b._locale,b._a[ed],b._meridiem),ra(b),Y(b)}function ua(a,b,c){var d;return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&12>b&&(b+=12),d||12!==b||(b=0),b):b}function va(a){var b,c,d,e,f;if(0===a._f.length)return j(a).invalidFormat=!0,void(a._d=new Date(0/0));for(e=0;e<a._f.length;e++)f=0,b=m({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._f=a._f[e],ta(b),k(b)&&(f+=j(b).charsLeftOver,f+=10*j(b).unusedTokens.length,j(b).score=f,(null==d||d>f)&&(d=f,c=b));g(a,c||b)}function wa(a){if(!a._d){var b=A(a._i);a._a=[b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],ra(a)}}function xa(a){var b,e=a._i,f=a._f;return a._locale=a._locale||x(a._l),null===e||void 0===f&&""===e?l({nullInput:!0}):("string"==typeof e&&(a._i=e=a._locale.preparse(e)),o(e)?new n(Y(e)):(c(f)?va(a):f?ta(a):d(e)?a._d=e:ya(a),b=new n(Y(a)),b._nextDay&&(b.add(1,"d"),b._nextDay=void 0),b))}function ya(b){var f=b._i;void 0===f?b._d=new Date:d(f)?b._d=new Date(+f):"string"==typeof f?ba(b):c(f)?(b._a=e(f.slice(0),function(a){return parseInt(a,10)}),ra(b)):"object"==typeof f?wa(b):"number"==typeof f?b._d=new Date(f):a.createFromInputFallback(b)}function za(a,b,c,d,e){var f={};return"boolean"==typeof c&&(d=c,c=void 0),f._isAMomentObject=!0,f._useUTC=f._isUTC=e,f._l=c,f._i=a,f._f=b,f._strict=d,xa(f)}function Aa(a,b,c,d){return za(a,b,c,d,!1)}function Ba(a,b){var d,e;if(1===b.length&&c(b[0])&&(b=b[0]),!b.length)return Aa();for(d=b[0],e=1;e<b.length;++e)b[e][a](d)&&(d=b[e]);return d}function Ca(){var a=[].slice.call(arguments,0);return Ba("isBefore",a)}function Da(){var a=[].slice.call(arguments,0);return Ba("isAfter",a)}function Ea(a){var b=A(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+36e5*h,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=x(),this._bubble()}function Fa(a){return a instanceof Ea}function Ga(a,b){G(a,0,0,function(){var a=this.utcOffset(),c="+";return 0>a&&(a=-a,c="-"),c+F(~~(a/60),2)+b+F(~~a%60,2)})}function Ha(a){var b=(a||"").match(Yc)||[],c=b[b.length-1]||[],d=(c+"").match(td)||["-",0,0],e=+(60*d[1])+p(d[2]);return"+"===d[0]?e:-e}function Ia(b,c){var e,f;return c._isUTC?(e=c.clone(),f=(o(b)||d(b)?+b:+Aa(b))-+e,e._d.setTime(+e._d+f),a.updateOffset(e,!1),e):Aa(b).local();return c._isUTC?Aa(b).zone(c._offset||0):Aa(b).local()}function Ja(a){return 15*-Math.round(a._d.getTimezoneOffset()/15)}function Ka(b,c){var d,e=this._offset||0;return null!=b?("string"==typeof b&&(b=Ha(b)),Math.abs(b)<16&&(b=60*b),!this._isUTC&&c&&(d=Ja(this)),this._offset=b,this._isUTC=!0,null!=d&&this.add(d,"m"),e!==b&&(!c||this._changeInProgress?$a(this,Va(b-e,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,a.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?e:Ja(this)}function La(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}function Ma(a){return this.utcOffset(0,a)}function Na(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(Ja(this),"m")),this}function Oa(){return this._tzm?this.utcOffset(this._tzm):"string"==typeof this._i&&this.utcOffset(Ha(this._i)),this}function Pa(a){return a=a?Aa(a).utcOffset():0,(this.utcOffset()-a)%60===0}function Qa(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Ra(){if(this._a){var a=this._isUTC?h(this._a):Aa(this._a);return this.isValid()&&q(this._a,a.toArray())>0}return!1}function Sa(){return!this._isUTC}function Ta(){return this._isUTC}function Ua(){return this._isUTC&&0===this._offset}function Va(a,b){var c,d,e,g=a,h=null;return Fa(a)?g={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(g={},b?g[b]=a:g.milliseconds=a):(h=ud.exec(a))?(c="-"===h[1]?-1:1,g={y:0,d:p(h[dd])*c,h:p(h[ed])*c,m:p(h[fd])*c,s:p(h[gd])*c,ms:p(h[hd])*c}):(h=vd.exec(a))?(c="-"===h[1]?-1:1,g={y:Wa(h[2],c),M:Wa(h[3],c),d:Wa(h[4],c),h:Wa(h[5],c),m:Wa(h[6],c),s:Wa(h[7],c),w:Wa(h[8],c)}):null==g?g={}:"object"==typeof g&&("from"in g||"to"in g)&&(e=Ya(Aa(g.from),Aa(g.to)),g={},g.ms=e.milliseconds,g.M=e.months),d=new Ea(g),Fa(a)&&f(a,"_locale")&&(d._locale=a._locale),d}function Wa(a,b){var c=a&&parseFloat(a.replace(",","."));return(isNaN(c)?0:c)*b}function Xa(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function Ya(a,b){var c;return b=Ia(b,a),a.isBefore(b)?c=Xa(a,b):(c=Xa(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c}function Za(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(_(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period)."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=Va(c,d),$a(this,e,a),this}}function $a(b,c,d,e){var f=c._milliseconds,g=c._days,h=c._months;e=null==e?!0:e,f&&b._d.setTime(+b._d+f*d),g&&D(b,"Date",C(b,"Date")+g*d),h&&V(b,C(b,"Month")+h*d),e&&a.updateOffset(b,g||h)}function _a(a){var b=a||Aa(),c=Ia(b,this).startOf("day"),d=this.diff(c,"days",!0),e=-6>d?"sameElse":-1>d?"lastWeek":0>d?"lastDay":1>d?"sameDay":2>d?"nextDay":7>d?"nextWeek":"sameElse";return this.format(this.localeData().calendar(e,this,Aa(b)))}function ab(){return new n(this)}function bb(a,b){var c;return b=z("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=o(a)?a:Aa(a),+this>+a):(c=o(a)?+a:+Aa(a),c<+this.clone().startOf(b))}function cb(a,b){var c;return b=z("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=o(a)?a:Aa(a),+a>+this):(c=o(a)?+a:+Aa(a),+this.clone().endOf(b)<c)}function db(a,b,c){return this.isAfter(a,c)&&this.isBefore(b,c)}function eb(a,b){var c;return b=z(b||"millisecond"),"millisecond"===b?(a=o(a)?a:Aa(a),+this===+a):(c=+Aa(a),+this.clone().startOf(b)<=c&&c<=+this.clone().endOf(b))}function fb(a){return 0>a?Math.ceil(a):Math.floor(a)}function gb(a,b,c){var d,e,f=Ia(a,this),g=6e4*(f.utcOffset()-this.utcOffset());return b=z(b),"year"===b||"month"===b||"quarter"===b?(e=hb(this,f),"quarter"===b?e/=3:"year"===b&&(e/=12)):(d=this-f,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-g)/864e5:"week"===b?(d-g)/6048e5:d),c?e:fb(e)}function hb(a,b){var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),f=a.clone().add(e,"months");return 0>b-f?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)}function ib(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function jb(){var a=this.clone().utc();return 0<a.year()&&a.year()<=9999?"function"==typeof Date.prototype.toISOString?this.toDate().toISOString():J(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):J(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function kb(b){var c=J(this,b||a.defaultFormat);return this.localeData().postformat(c)}function lb(a,b){return this.isValid()?Va({to:this,from:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function mb(a){return this.from(Aa(),a)}function nb(a,b){return this.isValid()?Va({from:this,to:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function ob(a){return this.to(Aa(),a)}function pb(a){var b;return void 0===a?this._locale._abbr:(b=x(a),null!=b&&(this._locale=b),this)}function qb(){return this._locale}function rb(a){switch(a=z(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a&&this.weekday(0),"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this}function sb(a){return a=z(a),void 0===a||"millisecond"===a?this:this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms")}function tb(){return+this._d-6e4*(this._offset||0)}function ub(){return Math.floor(+this/1e3)}function vb(){return this._offset?new Date(+this):this._d}function wb(){var a=this;return[a.year(),a.month(),a.date(),a.hour(),a.minute(),a.second(),a.millisecond()]}function xb(){return k(this)}function yb(){return g({},j(this))}function zb(){return j(this).overflow}function Ab(a,b){G(0,[a,a.length],0,b)}function Bb(a,b,c){return ha(Aa([a,11,31+b-c]),b,c).week}function Cb(a){var b=ha(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==a?b:this.add(a-b,"y")}function Db(a){var b=ha(this,1,4).year;return null==a?b:this.add(a-b,"y")}function Eb(){return Bb(this.year(),1,4)}function Fb(){var a=this.localeData()._week;return Bb(this.year(),a.dow,a.doy)}function Gb(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)}function Hb(a,b){if("string"==typeof a)if(isNaN(a)){if(a=b.weekdaysParse(a),"number"!=typeof a)return null}else a=parseInt(a,10);return a}function Ib(a){return this._weekdays[a.day()]}function Jb(a){return this._weekdaysShort[a.day()]}function Kb(a){return this._weekdaysMin[a.day()]}function Lb(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=Aa([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b}function Mb(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=Hb(a,this.localeData()),this.add(a-b,"d")):b}function Nb(a){var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")}function Ob(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)}function Pb(a,b){G(a,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),b)})}function Qb(a,b){return b._meridiemParse}function Rb(a){return"p"===(a+"").toLowerCase().charAt(0)}function Sb(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"}function Tb(a){G(0,[a,3],0,"millisecond")}function Ub(){return this._isUTC?"UTC":""}function Vb(){return this._isUTC?"Coordinated Universal Time":""}function Wb(a){return Aa(1e3*a)}function Xb(){return Aa.apply(null,arguments).parseZone()}function Yb(a,b,c){var d=this._calendar[a];return"function"==typeof d?d.call(b,c):d}function Zb(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b}function $b(){return this._invalidDate}function _b(a){return this._ordinal.replace("%d",a)}function ac(a){return a}function bc(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)}function cc(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)}function dc(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b;this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function ec(a,b,c,d){var e=x(),f=h().set(d,b);return e[c](f,a)}function fc(a,b,c,d,e){if("number"==typeof a&&(b=a,a=void 0),a=a||"",null!=b)return ec(a,b,c,e);var f,g=[];for(f=0;d>f;f++)g[f]=ec(a,f,c,e);return g}function gc(a,b){return fc(a,b,"months",12,"month")}function hc(a,b){return fc(a,b,"monthsShort",12,"month")}function ic(a,b){return fc(a,b,"weekdays",7,"day")}function jc(a,b){return fc(a,b,"weekdaysShort",7,"day")}function kc(a,b){return fc(a,b,"weekdaysMin",7,"day")}function lc(){var a=this._data;return this._milliseconds=Rd(this._milliseconds),this._days=Rd(this._days),this._months=Rd(this._months),a.milliseconds=Rd(a.milliseconds),a.seconds=Rd(a.seconds),a.minutes=Rd(a.minutes),a.hours=Rd(a.hours),a.months=Rd(a.months),a.years=Rd(a.years),this}function mc(a,b,c,d){var e=Va(b,c);return a._milliseconds+=d*e._milliseconds,a._days+=d*e._days,a._months+=d*e._months,a._bubble()}function nc(a,b){return mc(this,a,b,1)}function oc(a,b){return mc(this,a,b,-1)}function pc(){var a,b,c,d=this._milliseconds,e=this._days,f=this._months,g=this._data,h=0;return g.milliseconds=d%1e3,a=fb(d/1e3),g.seconds=a%60,b=fb(a/60),g.minutes=b%60,c=fb(b/60),g.hours=c%24,e+=fb(c/24),h=fb(qc(e)),e-=fb(rc(h)),f+=fb(e/30),e%=30,h+=fb(f/12),f%=12,g.days=e,g.months=f,g.years=h,this}function qc(a){return 400*a/146097}function rc(a){return 146097*a/400}function sc(a){var b,c,d=this._milliseconds;if(a=z(a),"month"===a||"year"===a)return b=this._days+d/864e5,c=this._months+12*qc(b),"month"===a?c:c/12;switch(b=this._days+Math.round(rc(this._months/12)),a){case"week":return b/7+d/6048e5;case"day":return b+d/864e5;case"hour":return 24*b+d/36e5;case"minute":return 1440*b+d/6e4;case"second":return 86400*b+d/1e3;case"millisecond":return Math.floor(864e5*b)+d;default:throw new Error("Unknown unit "+a)}}function tc(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*p(this._months/12)}function uc(a){return function(){return this.as(a)}}function vc(a){return a=z(a),this[a+"s"]()}function wc(a){return function(){return this._data[a]}}function xc(){return fb(this.days()/7)}function yc(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function zc(a,b,c){var d=Va(a).abs(),e=fe(d.as("s")),f=fe(d.as("m")),g=fe(d.as("h")),h=fe(d.as("d")),i=fe(d.as("M")),j=fe(d.as("y")),k=e<ge.s&&["s",e]||1===f&&["m"]||f<ge.m&&["mm",f]||1===g&&["h"]||g<ge.h&&["hh",g]||1===h&&["d"]||h<ge.d&&["dd",h]||1===i&&["M"]||i<ge.M&&["MM",i]||1===j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,yc.apply(null,k)}function Ac(a,b){return void 0===ge[a]?!1:void 0===b?ge[a]:(ge[a]=b,!0)}function Bc(a){var b=this.localeData(),c=zc(this,!a,b);return a&&(c=b.pastFuture(+this,c)),b.postformat(c)}function Cc(){var a=he(this.years()),b=he(this.months()),c=he(this.days()),d=he(this.hours()),e=he(this.minutes()),f=he(this.seconds()+this.milliseconds()/1e3),g=this.asSeconds();return g?(0>g?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||f?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(f?f+"S":""):"P0D"}var Dc,Ec,Fc=a.momentProperties=[],Gc=!1,Hc={},Ic={},Jc=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,Kc=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Lc={},Mc={},Nc=/\d/,Oc=/\d\d/,Pc=/\d{3}/,Qc=/\d{4}/,Rc=/[+-]?\d{6}/,Sc=/\d\d?/,Tc=/\d{1,3}/,Uc=/\d{1,4}/,Vc=/[+-]?\d{1,6}/,Wc=/\d+/,Xc=/[+-]?\d+/,Yc=/Z|[+-]\d\d:?\d\d/gi,Zc=/[+-]?\d+(\.\d{1,3})?/,$c=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,_c={},ad={},bd=0,cd=1,dd=2,ed=3,fd=4,gd=5,hd=6;G("M",["MM",2],"Mo",function(){return this.month()+1}),G("MMM",0,0,function(a){return this.localeData().monthsShort(this,a)}),G("MMMM",0,0,function(a){return this.localeData().months(this,a)}),y("month","M"),L("M",Sc),L("MM",Sc,Oc),L("MMM",$c),L("MMMM",$c),O(["M","MM"],function(a,b){b[cd]=p(a)-1}),O(["MMM","MMMM"],function(a,b,c,d){var e=c._locale.monthsParse(a,d,c._strict);null!=e?b[cd]=e:j(c).invalidMonth=a});var id="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),jd="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),kd={};a.suppressDeprecationWarnings=!1;var ld=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,md=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],nd=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],od=/^\/?Date\((\-?\d+)/i;a.createFromInputFallback=$("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),G(0,["YY",2],0,function(){return this.year()%100}),G(0,["YYYY",4],0,"year"),G(0,["YYYYY",5],0,"year"),G(0,["YYYYYY",6,!0],0,"year"),y("year","y"),L("Y",Xc),L("YY",Sc,Oc),L("YYYY",Uc,Qc),L("YYYYY",Vc,Rc),L("YYYYYY",Vc,Rc),O(["YYYY","YYYYY","YYYYYY"],bd),O("YY",function(b,c){c[bd]=a.parseTwoDigitYear(b)}),a.parseTwoDigitYear=function(a){return p(a)+(p(a)>68?1900:2e3)};var pd=B("FullYear",!1);G("w",["ww",2],"wo","week"),G("W",["WW",2],"Wo","isoWeek"),y("week","w"),y("isoWeek","W"),L("w",Sc),L("ww",Sc,Oc),L("W",Sc),L("WW",Sc,Oc),P(["w","ww","W","WW"],function(a,b,c,d){b[d.substr(0,1)]=p(a)});var qd={dow:0,doy:6};G("DDD",["DDDD",3],"DDDo","dayOfYear"),y("dayOfYear","DDD"),L("DDD",Tc),L("DDDD",Pc),O(["DDD","DDDD"],function(a,b,c){c._dayOfYear=p(a)}),a.ISO_8601=function(){};var rd=$("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(){var a=Aa.apply(null,arguments);return this>a?this:a}),sd=$("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(){var a=Aa.apply(null,arguments);return a>this?this:a});Ga("Z",":"),Ga("ZZ",""),L("Z",Yc),L("ZZ",Yc),O(["Z","ZZ"],function(a,b,c){c._useUTC=!0,c._tzm=Ha(a)});var td=/([\+\-]|\d\d)/gi;a.updateOffset=function(){};var ud=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,vd=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;Va.fn=Ea.prototype;var wd=Za(1,"add"),xd=Za(-1,"subtract");a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";var yd=$("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){return void 0===a?this.localeData():this.locale(a)});G(0,["gg",2],0,function(){return this.weekYear()%100}),G(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Ab("gggg","weekYear"),Ab("ggggg","weekYear"),Ab("GGGG","isoWeekYear"),Ab("GGGGG","isoWeekYear"),y("weekYear","gg"),y("isoWeekYear","GG"),L("G",Xc),L("g",Xc),L("GG",Sc,Oc),L("gg",Sc,Oc),L("GGGG",Uc,Qc),L("gggg",Uc,Qc),L("GGGGG",Vc,Rc),L("ggggg",Vc,Rc),P(["gggg","ggggg","GGGG","GGGGG"],function(a,b,c,d){b[d.substr(0,2)]=p(a)}),P(["gg","GG"],function(b,c,d,e){c[e]=a.parseTwoDigitYear(b)}),G("Q",0,0,"quarter"),y("quarter","Q"),L("Q",Nc),O("Q",function(a,b){b[cd]=3*(p(a)-1)}),G("D",["DD",2],"Do","date"),y("date","D"),L("D",Sc),L("DD",Sc,Oc),L("Do",function(a,b){return a?b._ordinalParse:b._ordinalParseLenient}),O(["D","DD"],dd),O("Do",function(a,b){b[dd]=p(a.match(Sc)[0],10)});var zd=B("Date",!0);G("d",0,"do","day"),G("dd",0,0,function(a){return this.localeData().weekdaysMin(this,a)}),G("ddd",0,0,function(a){return this.localeData().weekdaysShort(this,a)}),G("dddd",0,0,function(a){return this.localeData().weekdays(this,a)}),G("e",0,0,"weekday"),G("E",0,0,"isoWeekday"),y("day","d"),y("weekday","e"),y("isoWeekday","E"),L("d",Sc),L("e",Sc),L("E",Sc),L("dd",$c),L("ddd",$c),L("dddd",$c),P(["dd","ddd","dddd"],function(a,b,c){var d=c._locale.weekdaysParse(a);null!=d?b.d=d:j(c).invalidWeekday=a}),P(["d","e","E"],function(a,b,c,d){b[d]=p(a)});var Ad="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Bd="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Cd="Su_Mo_Tu_We_Th_Fr_Sa".split("_");G("H",["HH",2],0,"hour"),G("h",["hh",2],0,function(){return this.hours()%12||12}),Pb("a",!0),Pb("A",!1),y("hour","h"),L("a",Qb),L("A",Qb),L("H",Sc),L("h",Sc),L("HH",Sc,Oc),L("hh",Sc,Oc),O(["H","HH"],ed),O(["a","A"],function(a,b,c){c._isPm=c._locale.isPM(a),c._meridiem=a}),O(["h","hh"],function(a,b,c){b[ed]=p(a),j(c).bigHour=!0});var Dd=/[ap]\.?m?\.?/i,Ed=B("Hours",!0);G("m",["mm",2],0,"minute"),y("minute","m"),L("m",Sc),L("mm",Sc,Oc),O(["m","mm"],fd);var Fd=B("Minutes",!1);G("s",["ss",2],0,"second"),y("second","s"),L("s",Sc),L("ss",Sc,Oc),O(["s","ss"],gd);var Gd=B("Seconds",!1);G("S",0,0,function(){return~~(this.millisecond()/100)}),G(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),Tb("SSS"),Tb("SSSS"),y("millisecond","ms"),L("S",Tc,Nc),L("SS",Tc,Oc),L("SSS",Tc,Pc),L("SSSS",Wc),O(["S","SS","SSS","SSSS"],function(a,b){b[hd]=p(1e3*("0."+a))});var Hd=B("Milliseconds",!1);G("z",0,0,"zoneAbbr"),G("zz",0,0,"zoneName");var Id=n.prototype;Id.add=wd,Id.calendar=_a,Id.clone=ab,Id.diff=gb,Id.endOf=sb,Id.format=kb,Id.from=lb,Id.fromNow=mb,Id.to=nb,Id.toNow=ob,Id.get=E,Id.invalidAt=zb,Id.isAfter=bb,Id.isBefore=cb,Id.isBetween=db,Id.isSame=eb,Id.isValid=xb,Id.lang=yd,Id.locale=pb,Id.localeData=qb,Id.max=sd,Id.min=rd,Id.parsingFlags=yb,Id.set=E,Id.startOf=rb,Id.subtract=xd,Id.toArray=wb,Id.toDate=vb,Id.toISOString=jb,Id.toJSON=jb,Id.toString=ib,Id.unix=ub,Id.valueOf=tb,Id.year=pd,Id.isLeapYear=ga,Id.weekYear=Cb,Id.isoWeekYear=Db,Id.quarter=Id.quarters=Gb,Id.month=W,Id.daysInMonth=X,Id.week=Id.weeks=la,Id.isoWeek=Id.isoWeeks=ma,Id.weeksInYear=Fb,Id.isoWeeksInYear=Eb,Id.date=zd,Id.day=Id.days=Mb,Id.weekday=Nb,Id.isoWeekday=Ob,Id.dayOfYear=oa,Id.hour=Id.hours=Ed,Id.minute=Id.minutes=Fd,Id.second=Id.seconds=Gd,Id.millisecond=Id.milliseconds=Hd,Id.utcOffset=Ka,Id.utc=Ma,Id.local=Na,Id.parseZone=Oa,Id.hasAlignedHourOffset=Pa,Id.isDST=Qa,Id.isDSTShifted=Ra,Id.isLocal=Sa,Id.isUtcOffset=Ta,Id.isUtc=Ua,Id.isUTC=Ua,Id.zoneAbbr=Ub,Id.zoneName=Vb,Id.dates=$("dates accessor is deprecated. Use date instead.",zd),Id.months=$("months accessor is deprecated. Use month instead",W),Id.years=$("years accessor is deprecated. Use year instead",pd),Id.zone=$("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",La);var Jd=Id,Kd={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},Ld={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM D, YYYY LT"},Md="Invalid date",Nd="%d",Od=/\d{1,2}/,Pd={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",
hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Qd=r.prototype;Qd._calendar=Kd,Qd.calendar=Yb,Qd._longDateFormat=Ld,Qd.longDateFormat=Zb,Qd._invalidDate=Md,Qd.invalidDate=$b,Qd._ordinal=Nd,Qd.ordinal=_b,Qd._ordinalParse=Od,Qd.preparse=ac,Qd.postformat=ac,Qd._relativeTime=Pd,Qd.relativeTime=bc,Qd.pastFuture=cc,Qd.set=dc,Qd.months=S,Qd._months=id,Qd.monthsShort=T,Qd._monthsShort=jd,Qd.monthsParse=U,Qd.week=ia,Qd._week=qd,Qd.firstDayOfYear=ka,Qd.firstDayOfWeek=ja,Qd.weekdays=Ib,Qd._weekdays=Ad,Qd.weekdaysMin=Kb,Qd._weekdaysMin=Cd,Qd.weekdaysShort=Jb,Qd._weekdaysShort=Bd,Qd.weekdaysParse=Lb,Qd.isPM=Rb,Qd._meridiemParse=Dd,Qd.meridiem=Sb,v("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===p(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),a.lang=$("moment.lang is deprecated. Use moment.locale instead.",v),a.langData=$("moment.langData is deprecated. Use moment.localeData instead.",x);var Rd=Math.abs,Sd=uc("ms"),Td=uc("s"),Ud=uc("m"),Vd=uc("h"),Wd=uc("d"),Xd=uc("w"),Yd=uc("M"),Zd=uc("y"),$d=wc("milliseconds"),_d=wc("seconds"),ae=wc("minutes"),be=wc("hours"),ce=wc("days"),de=wc("months"),ee=wc("years"),fe=Math.round,ge={s:45,m:45,h:22,d:26,M:11},he=Math.abs,ie=Ea.prototype;ie.abs=lc,ie.add=nc,ie.subtract=oc,ie.as=sc,ie.asMilliseconds=Sd,ie.asSeconds=Td,ie.asMinutes=Ud,ie.asHours=Vd,ie.asDays=Wd,ie.asWeeks=Xd,ie.asMonths=Yd,ie.asYears=Zd,ie.valueOf=tc,ie._bubble=pc,ie.get=vc,ie.milliseconds=$d,ie.seconds=_d,ie.minutes=ae,ie.hours=be,ie.days=ce,ie.weeks=xc,ie.months=de,ie.years=ee,ie.humanize=Bc,ie.toISOString=Cc,ie.toString=Cc,ie.toJSON=Cc,ie.locale=pb,ie.localeData=qb,ie.toIsoString=$("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Cc),ie.lang=yd,G("X",0,0,"unix"),G("x",0,0,"valueOf"),L("x",Xc),L("X",Zc),O("X",function(a,b,c){c._d=new Date(1e3*parseFloat(a,10))}),O("x",function(a,b,c){c._d=new Date(p(a))}),a.version="2.10.3",b(Aa),a.fn=Jd,a.min=Ca,a.max=Da,a.utc=h,a.unix=Wb,a.months=gc,a.isDate=d,a.locale=v,a.invalid=l,a.duration=Va,a.isMoment=o,a.weekdays=ic,a.parseZone=Xb,a.localeData=x,a.isDuration=Fa,a.monthsShort=hc,a.weekdaysMin=kc,a.defineLocale=w,a.weekdaysShort=jc,a.normalizeUnits=z,a.relativeTimeThreshold=Ac;var je=a;return je});;
/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.5",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.5",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.5",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.5",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.5",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.5",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),
d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.5",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);;
/*
 AngularJS v1.4.3
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(O,U,t){'use strict';function J(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.4.3/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Ea(b){if(null==b||Wa(b))return!1;var a="length"in Object(b)&&b.length;
return b.nodeType===qa&&a?!0:L(b)||G(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function m(b,a,c){var d,e;if(b)if(z(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(G(b)||Ea(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==m)b.forEach(a,c,b);else if(nc(b))for(d in b)a.call(c,b[d],d,b);else if("function"===typeof b.hasOwnProperty)for(d in b)b.hasOwnProperty(d)&&
a.call(c,b[d],d,b);else for(d in b)Xa.call(b,d)&&a.call(c,b[d],d,b);return b}function oc(b,a,c){for(var d=Object.keys(b).sort(),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function pc(b){return function(a,c){b(c,a)}}function Ud(){return++nb}function qc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function Nb(b,a,c){for(var d=b.$$hashKey,e=0,f=a.length;e<f;++e){var g=a[e];if(H(g)||z(g))for(var h=Object.keys(g),l=0,k=h.length;l<k;l++){var n=h[l],r=g[n];c&&H(r)?aa(r)?b[n]=new Date(r.valueOf()):(H(b[n])||
(b[n]=G(r)?[]:{}),Nb(b[n],[r],!0)):b[n]=r}}qc(b,d);return b}function P(b){return Nb(b,za.call(arguments,1),!1)}function Vd(b){return Nb(b,za.call(arguments,1),!0)}function W(b){return parseInt(b,10)}function Ob(b,a){return P(Object.create(b),a)}function v(){}function Ya(b){return b}function ra(b){return function(){return b}}function rc(b){return z(b.toString)&&b.toString!==Object.prototype.toString}function A(b){return"undefined"===typeof b}function w(b){return"undefined"!==typeof b}function H(b){return null!==
b&&"object"===typeof b}function nc(b){return null!==b&&"object"===typeof b&&!sc(b)}function L(b){return"string"===typeof b}function V(b){return"number"===typeof b}function aa(b){return"[object Date]"===sa.call(b)}function z(b){return"function"===typeof b}function Za(b){return"[object RegExp]"===sa.call(b)}function Wa(b){return b&&b.window===b}function $a(b){return b&&b.$evalAsync&&b.$watch}function ab(b){return"boolean"===typeof b}function tc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}
function Wd(b){var a={};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function ta(b){return M(b.nodeName||b[0]&&b[0].nodeName)}function bb(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return c}function fa(b,a,c,d){if(Wa(b)||$a(b))throw Fa("cpws");if(uc.test(sa.call(a)))throw Fa("cpta");if(a){if(b===a)throw Fa("cpi");c=c||[];d=d||[];H(b)&&(c.push(b),d.push(a));var e;if(G(b))for(e=a.length=0;e<b.length;e++)a.push(fa(b[e],null,c,d));else{var f=a.$$hashKey;G(a)?a.length=0:m(a,function(b,
c){delete a[c]});if(nc(b))for(e in b)a[e]=fa(b[e],null,c,d);else if(b&&"function"===typeof b.hasOwnProperty)for(e in b)b.hasOwnProperty(e)&&(a[e]=fa(b[e],null,c,d));else for(e in b)Xa.call(b,e)&&(a[e]=fa(b[e],null,c,d));qc(a,f)}}else if(a=b,H(b)){if(c&&-1!==(f=c.indexOf(b)))return d[f];if(G(b))return fa(b,[],c,d);if(uc.test(sa.call(b)))a=new b.constructor(b);else if(aa(b))a=new Date(b.getTime());else if(Za(b))a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex;else return e=
Object.create(sc(b)),fa(b,e,c,d);d&&(c.push(b),d.push(a))}return a}function ia(b,a){if(G(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(H(b))for(c in a=a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=b[c];return a||b}function ka(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(G(b)){if(!G(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ka(b[d],a[d]))return!1;return!0}}else{if(aa(b))return aa(a)?
ka(b.getTime(),a.getTime()):!1;if(Za(b))return Za(a)?b.toString()==a.toString():!1;if($a(b)||$a(a)||Wa(b)||Wa(a)||G(a)||aa(a)||Za(a))return!1;c=ga();for(d in b)if("$"!==d.charAt(0)&&!z(b[d])){if(!ka(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!(d in c||"$"===d.charAt(0)||a[d]===t||z(a[d])))return!1;return!0}return!1}function cb(b,a,c){return b.concat(za.call(a,c))}function vc(b,a){var c=2<arguments.length?za.call(arguments,2):[];return!z(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?
a.apply(b,cb(c,arguments,0)):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Xd(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?c=t:Wa(a)?c="$WINDOW":a&&U===a?c="$DOCUMENT":$a(a)&&(c="$SCOPE");return c}function db(b,a){if("undefined"===typeof b)return t;V(a)||(a=a?2:null);return JSON.stringify(b,Xd,a)}function wc(b){return L(b)?JSON.parse(b):b}function xc(b,a){var c=Date.parse("Jan 01, 1970 00:00:00 "+b)/6E4;return isNaN(c)?a:c}function Pb(b,
a,c){c=c?-1:1;var d=xc(a,b.getTimezoneOffset());a=b;b=c*(d-b.getTimezoneOffset());a=new Date(a.getTime());a.setMinutes(a.getMinutes()+b);return a}function ua(b){b=y(b).clone();try{b.empty()}catch(a){}var c=y("<div>").append(b).html();try{return b[0].nodeType===Na?M(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+M(b)})}catch(d){return M(c)}}function yc(b){try{return decodeURIComponent(b)}catch(a){}}function zc(b){var a={},c,d;m((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,
"%20").split("="),d=yc(c[0]),w(d)&&(b=w(c[1])?yc(c[1]):!0,Xa.call(a,d)?G(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Qb(b){var a=[];m(b,function(b,d){G(b)?m(b,function(b){a.push(ma(d,!0)+(!0===b?"":"="+ma(b,!0)))}):a.push(ma(d,!0)+(!0===b?"":"="+ma(b,!0)))});return a.length?a.join("&"):""}function ob(b){return ma(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ma(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,
"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Yd(b,a){var c,d,e=Oa.length;for(d=0;d<e;++d)if(c=Oa[d]+a,L(c=b.getAttribute(c)))return c;return null}function Zd(b,a){var c,d,e={};m(Oa,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});m(Oa,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Yd(c,"strict-di"),a(c,d?[d]:[],e))}function Ac(b,a,c){H(c)||
(c={});c=P({strictDi:!1},c);var d=function(){b=y(b);if(b.injector()){var d=b[0]===U?"document":ua(b);throw Fa("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");d=eb(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return d},e=
/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;O&&e.test(O.name)&&(c.debugInfoEnabled=!0,O.name=O.name.replace(e,""));if(O&&!f.test(O.name))return d();O.name=O.name.replace(f,"");ca.resumeBootstrap=function(b){m(b,function(b){a.push(b)});return d()};z(ca.resumeDeferredBootstrap)&&ca.resumeDeferredBootstrap()}function $d(){O.name="NG_ENABLE_DEBUG_INFO!"+O.name;O.location.reload()}function ae(b){b=ca.element(b).injector();if(!b)throw Fa("test");return b.get("$$testability")}function Bc(b,a){a=a||
"_";return b.replace(be,function(b,d){return(d?a:"")+b.toLowerCase()})}function ce(){var b;if(!Cc){var a=pb();la=O.jQuery;w(a)&&(la=null===a?t:O[a]);la&&la.fn.on?(y=la,P(la.fn,{scope:Pa.scope,isolateScope:Pa.isolateScope,controller:Pa.controller,injector:Pa.injector,inheritedData:Pa.inheritedData}),b=la.cleanData,la.cleanData=function(a){var d;if(Rb)Rb=!1;else for(var e=0,f;null!=(f=a[e]);e++)(d=la._data(f,"events"))&&d.$destroy&&la(f).triggerHandler("$destroy");b(a)}):y=Q;ca.element=y;Cc=!0}}function Sb(b,
a,c){if(!b)throw Fa("areq",a||"?",c||"required");return b}function Qa(b,a,c){c&&G(b)&&(b=b[b.length-1]);Sb(z(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Ra(b,a){if("hasOwnProperty"===b)throw Fa("badname",a);}function Dc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&z(b)?vc(e,b):b}function qb(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==
b);return y(c)}function ga(){return Object.create(null)}function de(b){function a(a,b,c){return a[b]||(a[b]=c())}var c=J("$injector"),d=J("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||J;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(b,c,e,f){f||(f=d);return function(){f[e||"push"]([b,c,arguments]);return C}}function b(a,c){return function(b,e){e&&z(e)&&
(e.$$moduleName=f);d.push([a,c,arguments]);return C}}if(!g)throw c("nomod",f);var d=[],e=[],s=[],x=a("$injector","invoke","push",e),C={_invokeQueue:d,_configBlocks:e,_runBlocks:s,requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider",
"register"),directive:b("$compileProvider","directive"),config:x,run:function(a){s.push(a);return this}};h&&x(h);return C})}})}function ee(b){P(b,{bootstrap:Ac,copy:fa,extend:P,merge:Vd,equals:ka,element:y,forEach:m,injector:eb,noop:v,bind:vc,toJson:db,fromJson:wc,identity:Ya,isUndefined:A,isDefined:w,isString:L,isFunction:z,isObject:H,isNumber:V,isElement:tc,isArray:G,version:fe,isDate:aa,lowercase:M,uppercase:rb,callbacks:{counter:0},getTestability:ae,$$minErr:J,$$csp:fb,reloadWithDebugInfo:$d});
gb=de(O);try{gb("ngLocale")}catch(a){gb("ngLocale",[]).provider("$locale",ge)}gb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:he});a.provider("$compile",Ec).directive({a:ie,input:Fc,textarea:Fc,form:je,script:ke,select:le,style:me,option:ne,ngBind:oe,ngBindHtml:pe,ngBindTemplate:qe,ngClass:re,ngClassEven:se,ngClassOdd:te,ngCloak:ue,ngController:ve,ngForm:we,ngHide:xe,ngIf:ye,ngInclude:ze,ngInit:Ae,ngNonBindable:Be,ngPluralize:Ce,ngRepeat:De,ngShow:Ee,ngStyle:Fe,ngSwitch:Ge,
ngSwitchWhen:He,ngSwitchDefault:Ie,ngOptions:Je,ngTransclude:Ke,ngModel:Le,ngList:Me,ngChange:Ne,pattern:Gc,ngPattern:Gc,required:Hc,ngRequired:Hc,minlength:Ic,ngMinlength:Ic,maxlength:Jc,ngMaxlength:Jc,ngValue:Oe,ngModelOptions:Pe}).directive({ngInclude:Qe}).directive(sb).directive(Kc);a.provider({$anchorScroll:Re,$animate:Se,$$animateQueue:Te,$$AnimateRunner:Ue,$browser:Ve,$cacheFactory:We,$controller:Xe,$document:Ye,$exceptionHandler:Ze,$filter:Lc,$interpolate:$e,$interval:af,$http:bf,$httpParamSerializer:cf,
$httpParamSerializerJQLike:df,$httpBackend:ef,$location:ff,$log:gf,$parse:hf,$rootScope:jf,$q:kf,$$q:lf,$sce:mf,$sceDelegate:nf,$sniffer:of,$templateCache:pf,$templateRequest:qf,$$testability:rf,$timeout:sf,$window:tf,$$rAF:uf,$$jqLite:vf,$$HashMap:wf,$$cookieReader:xf})}])}function hb(b){return b.replace(yf,function(a,b,d,e){return e?d.toUpperCase():d}).replace(zf,"Moz$1")}function Mc(b){b=b.nodeType;return b===qa||!b||9===b}function Nc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Tb.test(b)){c=
c||e.appendChild(a.createElement("div"));d=(Af.exec(b)||["",""])[1].toLowerCase();d=na[d]||na._default;c.innerHTML=d[1]+b.replace(Bf,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=cb(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";m(f,function(a){e.appendChild(a)});return e}function Q(b){if(b instanceof Q)return b;var a;L(b)&&(b=R(b),a=!0);if(!(this instanceof Q)){if(a&&"<"!=b.charAt(0))throw Ub("nosel");return new Q(b)}if(a){a=U;
var c;b=(c=Cf.exec(b))?[a.createElement(c[1])]:(c=Nc(b,a))?c.childNodes:[]}Oc(this,b)}function Vb(b){return b.cloneNode(!0)}function tb(b,a){a||ub(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)ub(c[d])}function Pc(b,a,c,d){if(w(d))throw Ub("offargs");var e=(d=vb(b))&&d.events,f=d&&d.handle;if(f)if(a)m(a.split(" "),function(a){if(w(c)){var d=e[a];bb(d||[],c);if(d&&0<d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,
f,!1),delete e[a]}function ub(b,a){var c=b.ng339,d=c&&ib[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Pc(b)),delete ib[c],b.ng339=t))}function vb(b,a){var c=b.ng339,c=c&&ib[c];a&&!c&&(b.ng339=c=++Df,c=ib[c]={events:{},data:{},handle:t});return c}function Wb(b,a,c){if(Mc(b)){var d=w(c),e=!d&&a&&!H(a),f=!a;b=(b=vb(b,!e))&&b.data;if(d)b[a]=c;else{if(f)return b;if(e)return b&&b[a];P(b,a)}}}function wb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+
" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function xb(b,a){a&&b.setAttribute&&m(a.split(" "),function(a){b.setAttribute("class",R((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+R(a)+" "," ")))})}function yb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");m(a.split(" "),function(a){a=R(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",R(c))}}function Oc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=
a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Qc(b,a){return zb(b,"$"+(a||"ngController")+"Controller")}function zb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=G(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=y.data(b,a[d]))!==t)return c;b=b.parentNode||11===b.nodeType&&b.host}}function Rc(b){for(tb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}function Xb(b,a){a||tb(b);var c=b.parentNode;c&&c.removeChild(b)}function Ef(b,
a){a=a||O;if("complete"===a.document.readyState)a.setTimeout(b);else y(a).on("load",b)}function Sc(b,a){var c=Ab[a.toLowerCase()];return c&&Tc[ta(b)]&&c}function Ff(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Uc[a]}function Gf(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=a[e||c.type],g=f?f.length:0;if(g){if(A(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=
!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};1<g&&(f=ia(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||f[l].call(b,c)}};c.elem=b;return c}function vf(){this.$get=function(){return P(Q,{hasClass:function(b,a){b.attr&&(b=b[0]);return wb(b,a)},addClass:function(b,a){b.attr&&(b=b[0]);return yb(b,a)},removeClass:function(b,a){b.attr&&(b=b[0]);return xb(b,a)}})}}function Ga(b,a){var c=b&&b.$$hashKey;
if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Ud)():c+":"+b}function Sa(b,a){if(a){var c=0;this.nextUid=function(){return++c}}m(b,this.put,this)}function Hf(b){return(b=b.toString().replace(Vc,"").match(Wc))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function eb(b,a){function c(a){return function(b,c){if(H(b))m(b,pc(a));else return a(b,c)}}function d(a,b){Ra(a,"service");if(z(b)||G(b))b=s.instantiate(b);
if(!b.$get)throw Ha("pget",a);return r[a+"Provider"]=b}function e(a,b){return function(){var c=C.invoke(b,this);if(A(c))throw Ha("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function g(a){var b=[],c;m(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=s.get(e[0]);f[e[1]].apply(f,e[2])}}if(!n.get(a)){n.put(a,!0);try{L(a)?(c=gb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):z(a)?b.push(s.invoke(a)):G(a)?
b.push(s.invoke(a)):Qa(a,"module")}catch(e){throw G(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ha("modulerr",a,e.stack||e.message||e);}}});return b}function h(b,c){function d(a,e){if(b.hasOwnProperty(a)){if(b[a]===l)throw Ha("cdep",a+" <- "+k.join(" <- "));return b[a]}try{return k.unshift(a),b[a]=l,b[a]=c(a,e)}catch(f){throw b[a]===l&&delete b[a],f;}finally{k.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=f,f=null);var h=[],k=eb.$$annotate(b,
a,g),l,s,n;s=0;for(l=k.length;s<l;s++){n=k[s];if("string"!==typeof n)throw Ha("itkn",n);h.push(f&&f.hasOwnProperty(n)?f[n]:d(n,g))}G(b)&&(b=b[l]);return b.apply(c,h)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((G(a)?a[a.length-1]:a).prototype||null);a=e(a,d,b,c);return H(a)||z(a)?a:d},get:d,annotate:eb.$$annotate,has:function(a){return r.hasOwnProperty(a+"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var l={},k=[],n=new Sa([],!0),r={$provide:{provider:c(d),factory:c(f),service:c(function(a,
b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return f(a,ra(b),!1)}),constant:c(function(a,b){Ra(a,"constant");r[a]=b;x[a]=b}),decorator:function(a,b){var c=s.get(a+"Provider"),d=c.$get;c.$get=function(){var a=C.invoke(d,c);return C.invoke(b,null,{$delegate:a})}}}},s=r.$injector=h(r,function(a,b){ca.isString(b)&&k.push(b);throw Ha("unpr",k.join(" <- "));}),x={},C=x.$injector=h(x,function(a,b){var c=s.get(a+"Provider",b);return C.invoke(c.$get,c,t,a)});m(g(b),
function(a){a&&C.invoke(a)});return C}function Re(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ta(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=g.yOffset;z(c)?c=c():tc(c)?(c=c[0],c="fixed"!==a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):V(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,
0)}function g(a){a=L(a)?a:c.hash();var b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||Ef(function(){d.$evalAsync(g)})});return g}]}function jb(b,a){if(!b&&!a)return"";if(!b)return a;if(!a)return b;G(b)&&(b=b.join(" "));G(a)&&(a=a.join(" "));return b+" "+a}function If(b){L(b)&&(b=b.split(" "));var a=ga();m(b,function(b){b.length&&(a[b]=!0)});return a}function Ia(b){return H(b)?
b:{}}function Jf(b,a,c,d){function e(a){try{a.apply(null,za.call(arguments,1))}finally{if(C--,0===C)for(;F.length;)try{F.pop()()}catch(b){c.error(b)}}}function f(){g();h()}function g(){a:{try{u=n.state;break a}catch(a){}u=void 0}u=A(u)?null:u;ka(u,D)&&(u=D);D=u}function h(){if(K!==l.url()||p!==u)K=l.url(),p=u,m(B,function(a){a(l.url(),u)})}var l=this,k=b.location,n=b.history,r=b.setTimeout,s=b.clearTimeout,x={};l.isMock=!1;var C=0,F=[];l.$$completeOutstandingRequest=e;l.$$incOutstandingRequestCount=
function(){C++};l.notifyWhenNoOutstandingRequests=function(a){0===C?a():F.push(a)};var u,p,K=k.href,q=a.find("base"),I=null;g();p=u;l.url=function(a,c,e){A(e)&&(e=null);k!==b.location&&(k=b.location);n!==b.history&&(n=b.history);if(a){var f=p===e;if(K===a&&(!d.history||f))return l;var h=K&&Ja(K)===Ja(a);K=a;p=e;if(!d.history||h&&f){if(!h||I)I=a;c?k.replace(a):h?(c=k,e=a.indexOf("#"),a=-1===e?"":a.substr(e),c.hash=a):k.href=a}else n[c?"replaceState":"pushState"](e,"",a),g(),p=u;return l}return I||
k.href.replace(/%27/g,"'")};l.state=function(){return u};var B=[],N=!1,D=null;l.onUrlChange=function(a){if(!N){if(d.history)y(b).on("popstate",f);y(b).on("hashchange",f);N=!0}B.push(a);return a};l.$$applicationDestroyed=function(){y(b).off("hashchange popstate",f)};l.$$checkUrlChange=h;l.baseHref=function(){var a=q.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};l.defer=function(a,b){var c;C++;c=r(function(){delete x[c];e(a)},b||0);x[c]=!0;return c};l.defer.cancel=function(a){return x[a]?
(delete x[a],s(a),e(v),!0):!1}}function Ve(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new Jf(b,d,a,c)}]}function We(){this.$get=function(){function b(b,d){function e(a){a!=r&&(s?s==a&&(s=a.n):s=a,f(a.n,a.p),f(a,r),r=a,r.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw J("$cacheFactory")("iid",b);var g=0,h=P({},d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,n={},r=null,s=null;return a[b]={put:function(a,b){if(!A(b)){if(k<Number.MAX_VALUE){var c=
n[a]||(n[a]={key:a});e(c)}a in l||g++;l[a]=b;g>k&&this.remove(s.key);return b}},get:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;e(b)}return l[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;b==r&&(r=b.p);b==s&&(s=b.n);f(b.n,b.p);delete n[a]}delete l[a];g--},removeAll:function(){l={};g=0;n={};r=s=null},destroy:function(){n=h=l=null;delete a[b]},info:function(){return P({},h,{size:g})}}}var a={};b.info=function(){var b={};m(a,function(a,e){b[e]=a.info()});return b};
b.get=function(b){return a[b]};return b}}function pf(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function Ec(b,a){function c(a,b,c){var d=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,e={};m(a,function(a,f){var g=a.match(d);if(!g)throw ea("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f}});return e}function d(a){var b=a.charAt(0);if(!b||b!==M(b))throw ea("baddir",a);if(a!==a.trim())throw ea("baddir",
a);}var e={},f=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,g=/(([\w\-]+)(?:\:([^;]+))?;?)/,h=Wd("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,k=/^(on[a-z]+|formaction)$/;this.directive=function s(a,f){Ra(a,"directive");L(a)?(d(a),Sb(f,"directiveFactory"),e.hasOwnProperty(a)||(e[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,d){var f=[];m(e[a],function(e,g){try{var h=b.invoke(e);z(h)?h={compile:ra(h)}:!h.compile&&h.link&&(h.compile=ra(h.link));h.priority=h.priority||
0;h.index=g;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";var k=h,l=h,s=h.name,n={isolateScope:null,bindToController:null};H(l.scope)&&(!0===l.bindToController?(n.bindToController=c(l.scope,s,!0),n.isolateScope={}):n.isolateScope=c(l.scope,s,!1));H(l.bindToController)&&(n.bindToController=c(l.bindToController,s,!0));if(H(n.bindToController)){var C=l.controller,$=l.controllerAs;if(!C)throw ea("noctrl",s);var ha;a:if($&&L($))ha=$;else{if(L(C)){var m=Xc.exec(C);
if(m){ha=m[3];break a}}ha=void 0}if(!ha)throw ea("noident",s);}var q=k.$$bindings=n;H(q.isolateScope)&&(h.$$isolateBindings=q.isolateScope);h.$$moduleName=e.$$moduleName;f.push(h)}catch(t){d(t)}});return f}])),e[a].push(f)):m(a,pc(s));return this};this.aHrefSanitizationWhitelist=function(b){return w(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return w(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};
var n=!0;this.debugInfoEnabled=function(a){return w(a)?(n=a,this):n};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,d,u,p,K,q,I,B,N){function D(a,b){try{a.addClass(b)}catch(c){}}function Z(a,b,c,d,e){a instanceof y||(a=y(a));m(a,function(b,c){b.nodeType==Na&&b.nodeValue.match(/\S+/)&&(a[c]=y(b).wrap("<span></span>").parent()[0])});var f=S(a,b,a,c,d,e);Z.$$addScopeClass(a);
var g=null;return function(b,c,d){Sb(b,"scope");d=d||{};var e=d.parentBoundTranscludeFn,h=d.transcludeControllers;d=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==ta(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?y(Yb(g,y("<div>").append(a).html())):c?Pa.clone.call(a):a;if(h)for(var k in h)d.data("$"+k+"Controller",h[k].instance);Z.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,e);return d}}function S(a,b,c,d,e,f){function g(a,
c,d,e){var f,k,l,s,n,B,C;if(p)for(C=Array(c.length),s=0;s<h.length;s+=3)f=h[s],C[f]=c[f];else C=c;s=0;for(n=h.length;s<n;)if(k=C[h[s++]],c=h[s++],f=h[s++],c){if(c.scope){if(l=a.$new(),Z.$$addScopeInfo(y(k),l),B=c.$$destroyBindings)c.$$destroyBindings=null,l.$on("$destroyed",B)}else l=a;B=c.transcludeOnThisElement?$(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?$(a,b):null;c(f,l,k,d,B,c)}else f&&f(a,k.childNodes,t,e)}for(var h=[],k,l,s,n,p,B=0;B<a.length;B++){k=new aa;l=ha(a[B],[],k,0===B?
d:t,e);(f=l.length?E(l,a[B],k,b,c,null,[],[],f):null)&&f.scope&&Z.$$addScopeClass(k.$$element);k=f&&f.terminal||!(s=a[B].childNodes)||!s.length?null:S(s,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(B,f,k),n=!0,p=p||f;f=null}return n?g:null}function $(a,b,c){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function ha(a,b,c,d,e){var h=c.$attr,k;switch(a.nodeType){case qa:w(b,
wa(ta(a)),"E",d,e);for(var l,s,n,p=a.attributes,B=0,C=p&&p.length;B<C;B++){var x=!1,S=!1;l=p[B];k=l.name;s=R(l.value);l=wa(k);if(n=ia.test(l))k=k.replace(Zc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});var F=l.replace(/(Start|End)$/,"");A(F)&&l===F+"Start"&&(x=k,S=k.substr(0,k.length-5)+"end",k=k.substr(0,k.length-6));l=wa(k.toLowerCase());h[l]=k;if(n||!c.hasOwnProperty(l))c[l]=s,Sc(a,l)&&(c[l]=!0);V(a,b,s,l,n);w(b,l,"A",d,e,x,S)}a=a.className;H(a)&&(a=a.animVal);if(L(a)&&
""!==a)for(;k=g.exec(a);)l=wa(k[2]),w(b,l,"C",d,e)&&(c[l]=R(k[3])),a=a.substr(k.index+k[0].length);break;case Na:if(11===Ua)for(;a.parentNode&&a.nextSibling&&a.nextSibling.nodeType===Na;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);xa(b,a.nodeValue);break;case 8:try{if(k=f.exec(a.nodeValue))l=wa(k[1]),w(b,l,"M",d,e)&&(c[l]=R(k[2]))}catch($){}}b.sort(Aa);return b}function va(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ea("uterdir",b,c);
a.nodeType==qa&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return y(d)}function Yc(a,b,c){return function(d,e,f,g,h){e=va(e[0],b,c);return a(d,e,f,g,h)}}function E(a,b,d,e,f,g,h,k,s){function n(a,b,c,d){if(a){c&&(a=Yc(a,c,d));a.require=E.require;a.directiveName=w;if(u===E||E.$$isolateScope)a=X(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=Yc(b,c,d));b.require=E.require;b.directiveName=w;if(u===E||E.$$isolateScope)b=X(b,{isolateScope:!0});k.push(b)}}
function B(a,b,c,d){var e;if(L(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;e||(d="$"+b+"Controller",e=g?c.inheritedData(d):c.data(d));if(!e&&!f)throw ea("ctreq",b,a);}else if(G(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=B(a,b[g],c,d);return e||null}function x(a,b,c,d,e,f){var g=ga(),h;for(h in d){var k=d[h],l={$scope:k===u||k.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},s=k.controller;"@"==s&&(s=b[k.name]);l=p(s,
l,!0,k.controllerAs);g[k.name]=l;q||a.data("$"+k.name+"Controller",l.instance)}return g}function S(a,c,e,f,g,l){function s(a,b,c){var d;$a(a)||(c=b,b=a,a=t);q&&(d=m);c||(c=q?ja.parent():ja);return g(a,b,d,c,va)}var n,p,C,F,m,ha,ja;b===e?(f=d,ja=d.$$element):(ja=y(e),f=new aa(ja,d));u&&(F=c.$new(!0));g&&(ha=s,ha.$$boundTransclude=g);N&&(m=x(ja,f,ha,N,F,c));u&&(Z.$$addScopeInfo(ja,F,!0,!(D&&(D===u||D===u.$$originalDirective))),Z.$$addScopeClass(ja,!0),F.$$isolateBindings=u.$$isolateBindings,W(c,f,F,
F.$$isolateBindings,u,F));if(m){var K=u||$,I;K&&m[K.name]&&(p=K.$$bindings.bindToController,(C=m[K.name])&&C.identifier&&p&&(I=C,l.$$destroyBindings=W(c,f,C.instance,p,K)));for(n in m){C=m[n];var E=C();E!==C.instance&&(C.instance=E,ja.data("$"+n+"Controller",E),C===I&&(l.$$destroyBindings(),l.$$destroyBindings=W(c,f,E,p,K)))}}n=0;for(l=h.length;n<l;n++)p=h[n],Y(p,p.isolateScope?F:c,ja,f,p.require&&B(p.directiveName,p.require,ja,m),ha);var va=c;u&&(u.template||null===u.templateUrl)&&(va=F);a&&a(va,
e.childNodes,t,g);for(n=k.length-1;0<=n;n--)p=k[n],Y(p,p.isolateScope?F:c,ja,f,p.require&&B(p.directiveName,p.require,ja,m),ha)}s=s||{};for(var F=-Number.MAX_VALUE,$=s.newScopeDirective,N=s.controllerDirectives,u=s.newIsolateScopeDirective,D=s.templateDirective,m=s.nonTlbTranscludeDirective,K=!1,I=!1,q=s.hasElementTranscludeDirective,ba=d.$$element=y(b),E,w,v,A=e,Aa,xa=0,Ta=a.length;xa<Ta;xa++){E=a[xa];var M=E.$$start,P=E.$$end;M&&(ba=va(b,M,P));v=t;if(F>E.priority)break;if(v=E.scope)E.templateUrl||
(H(v)?(O("new/isolated scope",u||$,E,ba),u=E):O("new/isolated scope",u,E,ba)),$=$||E;w=E.name;!E.templateUrl&&E.controller&&(v=E.controller,N=N||ga(),O("'"+w+"' controller",N[w],E,ba),N[w]=E);if(v=E.transclude)K=!0,E.$$tlb||(O("transclusion",m,E,ba),m=E),"element"==v?(q=!0,F=E.priority,v=ba,ba=d.$$element=y(U.createComment(" "+w+": "+d[w]+" ")),b=ba[0],T(f,za.call(v,0),b),A=Z(v,e,F,g&&g.name,{nonTlbTranscludeDirective:m})):(v=y(Vb(b)).contents(),ba.empty(),A=Z(v,e));if(E.template)if(I=!0,O("template",
D,E,ba),D=E,v=z(E.template)?E.template(ba,d):E.template,v=fa(v),E.replace){g=E;v=Tb.test(v)?$c(Yb(E.templateNamespace,R(v))):[];b=v[0];if(1!=v.length||b.nodeType!==qa)throw ea("tplrt",w,"");T(f,ba,b);Ta={$attr:{}};v=ha(b,[],Ta);var Q=a.splice(xa+1,a.length-(xa+1));u&&ad(v);a=a.concat(v).concat(Q);J(d,Ta);Ta=a.length}else ba.html(v);if(E.templateUrl)I=!0,O("template",D,E,ba),D=E,E.replace&&(g=E),S=Lf(a.splice(xa,a.length-xa),ba,d,f,K&&A,h,k,{controllerDirectives:N,newScopeDirective:$!==E&&$,newIsolateScopeDirective:u,
templateDirective:D,nonTlbTranscludeDirective:m}),Ta=a.length;else if(E.compile)try{Aa=E.compile(ba,d,A),z(Aa)?n(null,Aa,M,P):Aa&&n(Aa.pre,Aa.post,M,P)}catch(Kf){c(Kf,ua(ba))}E.terminal&&(S.terminal=!0,F=Math.max(F,E.priority))}S.scope=$&&!0===$.scope;S.transcludeOnThisElement=K;S.templateOnThisElement=I;S.transclude=A;s.hasElementTranscludeDirective=q;return S}function ad(a){for(var b=0,c=a.length;b<c;b++)a[b]=Ob(a[b],{$$isolateScope:!0})}function w(b,d,f,g,h,k,l){if(d===h)return null;h=null;if(e.hasOwnProperty(d)){var n;
d=a.get(d+"Directive");for(var p=0,B=d.length;p<B;p++)try{n=d[p],(g===t||g>n.priority)&&-1!=n.restrict.indexOf(f)&&(k&&(n=Ob(n,{$$start:k,$$end:l})),b.push(n),h=n)}catch(x){c(x)}}return h}function A(b){if(e.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,f=c.length;d<f;d++)if(b=c[d],b.multiElement)return!0;return!1}function J(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;m(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});m(b,function(b,f){"class"==
f?(D(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function Lf(a,b,c,e,f,g,h,k){var l=[],s,n,p=b[0],B=a.shift(),C=Ob(B,{templateUrl:null,transclude:null,replace:null,$$originalDirective:B}),x=z(B.templateUrl)?B.templateUrl(b,c):B.templateUrl,N=B.templateNamespace;b.empty();d(x).then(function(d){var F,u;d=fa(d);if(B.replace){d=Tb.test(d)?$c(Yb(N,R(d))):
[];F=d[0];if(1!=d.length||F.nodeType!==qa)throw ea("tplrt",B.name,x);d={$attr:{}};T(e,b,F);var K=ha(F,[],d);H(B.scope)&&ad(K);a=K.concat(a);J(c,d)}else F=p,b.html(d);a.unshift(C);s=E(a,F,c,f,b,B,g,h,k);m(e,function(a,c){a==F&&(e[c]=b[0])});for(n=S(b[0].childNodes,f);l.length;){d=l.shift();u=l.shift();var I=l.shift(),va=l.shift(),K=b[0];if(!d.$$destroyed){if(u!==p){var Z=u.className;k.hasElementTranscludeDirective&&B.replace||(K=Vb(F));T(I,y(u),K);D(y(K),Z)}u=s.transcludeOnThisElement?$(d,s.transclude,
va):va;s(n,d,K,e,u,s)}}l=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(s.transcludeOnThisElement&&(a=$(b,s.transclude,e)),s(n,b,c,d,a,s)))}}function Aa(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function O(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw ea("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,ua(d));}function xa(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=
a.parent();var b=!!a.length;b&&Z.$$addBindingClass(a);return function(a,c){var e=c.parent();b||Z.$$addBindingClass(e);Z.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Yb(a,b){a=M(a||"html");switch(a){case "svg":case "math":var c=U.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function Q(a,b){if("srcdoc"==b)return I.HTML;var c=ta(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||
"ngSrc"==b))return I.RESOURCE_URL}function V(a,c,d,e,f){var g=Q(a,e);f=h[e]||f;var l=b(d,!0,g,f);if(l){if("multiple"===e&&"select"===ta(a))throw ea("selmulti",ua(a));c.push({priority:100,compile:function(){return{pre:function(a,c,h){c=h.$$observers||(h.$$observers={});if(k.test(e))throw ea("nodomevents");var s=h[e];s!==d&&(l=s&&b(s,!0,g,f),d=s);l&&(h[e]=l(a),(c[e]||(c[e]=[])).$$inter=!0,(h.$$observers&&h.$$observers[e].$$scope||a).$watch(l,function(a,b){"class"===e&&a!=b?h.$updateClass(a,b):h.$set(e,
a)}))}}}})}}function T(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=U.createDocumentFragment();a.appendChild(d);y.hasData(d)&&(y(c).data(y(d).data()),la?(Rb=!0,la.cleanData([d])):delete y.cache[d[y.expando]]);d=1;for(e=b.length;d<e;d++)f=b[d],y(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function X(a,
b){return P(function(){return a.apply(null,arguments)},a,b)}function Y(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,ua(d))}}function W(a,c,d,e,f,g){var h;m(e,function(e,g){var k=e.attrName,l=e.optional,s=e.mode,n,p,B,C;Xa.call(c,k)||(c[k]=t);switch(s){case "@":c[k]||l||(d[g]=t);c.$observe(k,function(a){d[g]=a});c.$$observers[k].$$scope=a;c[k]&&(d[g]=b(c[k])(a));break;case "=":if(l&&!c[k])break;p=u(c[k]);C=p.literal?ka:function(a,b){return a===b||a!==a&&b!==b};B=p.assign||function(){n=d[g]=p(a);throw ea("nonassign",
c[k],f.name);};n=d[g]=p(a);l=function(b){C(b,d[g])||(C(b,n)?B(a,b=d[g]):d[g]=b);return n=b};l.$stateful=!0;l=e.collection?a.$watchCollection(c[k],l):a.$watch(u(c[k],l),null,p.literal);h=h||[];h.push(l);break;case "&":p=u(c[k]);if(p===v&&l)break;d[g]=function(b){return p(a,b)}}});e=h?function(){for(var a=0,b=h.length;a<b;++a)h[a]()}:v;return g&&e!==v?(g.$on("$destroy",e),v):e}var aa=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=
a};aa.prototype={$normalize:wa,$addClass:function(a){a&&0<a.length&&B.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&B.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=bd(a,b);c&&c.length&&B.addClass(this.$$element,c);(c=bd(b,a))&&c.length&&B.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=this.$$element[0],g=Sc(f,a),h=Ff(f,a),f=a;g?(this.$$element.prop(a,b),e=g):h&&(this[h]=b,f=h);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Bc(a,
"-"));g=ta(this.$$element);if("a"===g&&"href"===a||"img"===g&&"src"===a)this[a]=b=N(b,"src"===a);else if("img"===g&&"srcset"===a){for(var g="",h=R(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(h)?k:/(,)/,h=h.split(k),k=Math.floor(h.length/2),l=0;l<k;l++)var s=2*l,g=g+N(R(h[s]),!0),g=g+(" "+R(h[s+1]));h=R(h[2*l]).split(/\s/);g+=N(R(h[0]),!0);2===h.length&&(g+=" "+R(h[1]));this[a]=b=g}!1!==d&&(null===b||b===t?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&m(a[f],
function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=ga()),e=d[a]||(d[a]=[]);e.push(b);K.$evalAsync(function(){!e.$$inter&&c.hasOwnProperty(a)&&b(c[a])});return function(){bb(e,b)}}};var ca=b.startSymbol(),da=b.endSymbol(),fa="{{"==ca||"}}"==da?Ya:function(a){return a.replace(/\{\{/g,ca).replace(/}}/g,da)},ia=/^ngAttr[A-Z]/;Z.$$addBindingInfo=n?function(a,b){var c=a.data("$binding")||[];G(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:v;Z.$$addBindingClass=
n?function(a){D(a,"ng-binding")}:v;Z.$$addScopeInfo=n?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:v;Z.$$addScopeClass=n?function(a,b){D(a,b?"ng-isolate-scope":"ng-scope")}:v;return Z}]}function wa(b){return hb(b.replace(Zc,""))}function bd(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function $c(b){b=y(b);var a=b.length;if(1>=a)return b;for(;a--;)8===
b[a].nodeType&&Mf.call(b,a,1);return b}function Xe(){var b={},a=!1;this.register=function(a,d){Ra(a,"controller");H(a)?P(b,a):b[a]=d};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(c,d){function e(a,b,c,d){if(!a||!H(a.$scope))throw J("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,g,h,l){var k,n,r;h=!0===h;l&&L(l)&&(r=l);if(L(f)){l=f.match(Xc);if(!l)throw Nf("ctrlfmt",f);n=l[1];r=r||l[3];f=b.hasOwnProperty(n)?b[n]:Dc(g.$scope,n,!0)||(a?Dc(d,n,!0):t);Qa(f,
n,!0)}if(h)return h=(G(f)?f[f.length-1]:f).prototype,k=Object.create(h||null),r&&e(g,r,k,n||f.name),P(function(){var a=c.invoke(f,k,g,n);a!==k&&(H(a)||z(a))&&(k=a,r&&e(g,r,k,n||f.name));return k},{instance:k,identifier:r});k=c.instantiate(f,g,n);r&&e(g,r,k,n||f.name);return k}}]}function Ye(){this.$get=["$window",function(b){return y(b.document)}]}function Ze(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Zb(b){return H(b)?aa(b)?b.toISOString():db(b):b}
function cf(){this.$get=function(){return function(b){if(!b)return"";var a=[];oc(b,function(b,d){null===b||A(b)||(G(b)?m(b,function(b,c){a.push(ma(d)+"="+ma(Zb(b)))}):a.push(ma(d)+"="+ma(Zb(b))))});return a.join("&")}}}function df(){this.$get=function(){return function(b){function a(b,e,f){null===b||A(b)||(G(b)?m(b,function(b){a(b,e+"[]")}):H(b)&&!aa(b)?oc(b,function(b,c){a(b,e+(f?"":"[")+c+(f?"":"]"))}):c.push(ma(e)+"="+ma(Zb(b))))}if(!b)return"";var c=[];a(b,"",!0);return c.join("&")}}}function $b(b,
a){if(L(b)){var c=b.replace(Of,"").trim();if(c){var d=a("Content-Type");(d=d&&0===d.indexOf(cd))||(d=(d=c.match(Pf))&&Qf[d[0]].test(c));d&&(b=wc(c))}}return b}function dd(b){var a=ga(),c;L(b)?m(b.split("\n"),function(b){c=b.indexOf(":");var e=M(R(b.substr(0,c)));b=R(b.substr(c+1));e&&(a[e]=a[e]?a[e]+", "+b:b)}):H(b)&&m(b,function(b,c){var f=M(c),g=R(b);f&&(a[f]=a[f]?a[f]+", "+g:g)});return a}function ed(b){var a;return function(c){a||(a=dd(b));return c?(c=a[M(c)],void 0===c&&(c=null),c):a}}function fd(b,
a,c,d){if(z(d))return d(b,a,c);m(d,function(d){b=d(b,a,c)});return b}function bf(){var b=this.defaults={transformResponse:[$b],transformRequest:[function(a){return H(a)&&"[object File]"!==sa.call(a)&&"[object Blob]"!==sa.call(a)&&"[object FormData]"!==sa.call(a)?db(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ia(ac),put:ia(ac),patch:ia(ac)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},a=!1;this.useApplyAsync=function(b){return w(b)?
(a=!!b,this):a};var c=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function(d,e,f,g,h,l){function k(a){function c(a){var b=P({},a);b.data=a.data?fd(a.data,a.headers,a.status,e.transformResponse):a.data;a=a.status;return 200<=a&&300>a?b:h.reject(b)}function d(a,b){var c,e={};m(a,function(a,d){z(a)?(c=a(b),null!=c&&(e[d]=c)):e[d]=a});return e}if(!ca.isObject(a))throw J("$http")("badreq",a);var e=P({method:"get",transformRequest:b.transformRequest,
transformResponse:b.transformResponse,paramSerializer:b.paramSerializer},a);e.headers=function(a){var c=b.headers,e=P({},a.headers),f,g,h,c=P({},c.common,c[M(a.method)]);a:for(f in c){g=M(f);for(h in e)if(M(h)===g)continue a;e[f]=c[f]}return d(e,ia(a))}(a);e.method=rb(e.method);e.paramSerializer=L(e.paramSerializer)?l.get(e.paramSerializer):e.paramSerializer;var f=[function(a){var d=a.headers,e=fd(a.data,ed(d),t,a.transformRequest);A(e)&&m(d,function(a,b){"content-type"===M(b)&&delete d[b]});A(a.withCredentials)&&
!A(b.withCredentials)&&(a.withCredentials=b.withCredentials);return n(a,e).then(c,c)},t],g=h.when(e);for(m(x,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var k=f.shift(),g=g.then(a,k)}g.success=function(a){Qa(a,"fn");g.then(function(b){a(b.data,b.status,b.headers,e)});return g};g.error=function(a){Qa(a,"fn");g.then(null,function(b){a(b.data,b.status,b.headers,e)});return g};return g}
function n(c,f){function l(b,c,d,e){function f(){n(c,b,d,e)}N&&(200<=b&&300>b?N.put(S,[b,c,dd(d),e]):N.remove(S));a?g.$applyAsync(f):(f(),g.$$phase||g.$apply())}function n(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?I.resolve:I.reject)({data:a,status:b,headers:ed(d),config:c,statusText:e})}function x(a){n(a.data,a.status,ia(a.headers()),a.statusText)}function m(){var a=k.pendingRequests.indexOf(c);-1!==a&&k.pendingRequests.splice(a,1)}var I=h.defer(),B=I.promise,N,D,q=c.headers,S=r(c.url,c.paramSerializer(c.params));
k.pendingRequests.push(c);B.then(m,m);!c.cache&&!b.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(N=H(c.cache)?c.cache:H(b.cache)?b.cache:s);N&&(D=N.get(S),w(D)?D&&z(D.then)?D.then(x,x):G(D)?n(D[1],D[0],ia(D[2]),D[3]):n(D,200,{},"OK"):N.put(S,B));A(D)&&((D=gd(c.url)?e()[c.xsrfCookieName||b.xsrfCookieName]:t)&&(q[c.xsrfHeaderName||b.xsrfHeaderName]=D),d(c.method,S,f,l,q,c.timeout,c.withCredentials,c.responseType));return B}function r(a,b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);
return a}var s=f("$http");b.paramSerializer=L(b.paramSerializer)?l.get(b.paramSerializer):b.paramSerializer;var x=[];m(c,function(a){x.unshift(L(a)?l.get(a):l.invoke(a))});k.pendingRequests=[];(function(a){m(arguments,function(a){k[a]=function(b,c){return k(P({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){m(arguments,function(a){k[a]=function(b,c,d){return k(P({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");k.defaults=b;return k}]}function Rf(){return new O.XMLHttpRequest}
function ef(){this.$get=["$browser","$window","$document",function(b,a,c){return Sf(b,Rf,b.defer,a.angular.callbacks,c[0])}]}function Sf(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),n=null;f.type="text/javascript";f.src=a;f.async=!0;n=function(a){f.removeEventListener("load",n,!1);f.removeEventListener("error",n,!1);e.body.removeChild(f);f=null;var g=-1,x="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),x=a.type,g="error"===a.type?404:200);c&&c(g,x)};f.addEventListener("load",
n,!1);f.addEventListener("error",n,!1);e.body.appendChild(f);return n}return function(e,h,l,k,n,r,s,x){function C(){p&&p();K&&K.abort()}function F(a,d,e,f,g){I!==t&&c.cancel(I);p=K=null;a(d,e,f,g);b.$$completeOutstandingRequest(v)}b.$$incOutstandingRequestCount();h=h||b.url();if("jsonp"==M(e)){var u="_"+(d.counter++).toString(36);d[u]=function(a){d[u].data=a;d[u].called=!0};var p=f(h.replace("JSON_CALLBACK","angular.callbacks."+u),u,function(a,b){F(k,a,d[u].data,"",b);d[u]=v})}else{var K=a();K.open(e,
h,!0);m(n,function(a,b){w(a)&&K.setRequestHeader(b,a)});K.onload=function(){var a=K.statusText||"",b="response"in K?K.response:K.responseText,c=1223===K.status?204:K.status;0===c&&(c=b?200:"file"==Ba(h).protocol?404:0);F(k,c,b,K.getAllResponseHeaders(),a)};e=function(){F(k,-1,null,null,"")};K.onerror=e;K.onabort=e;s&&(K.withCredentials=!0);if(x)try{K.responseType=x}catch(q){if("json"!==x)throw q;}K.send(l)}if(0<r)var I=c(C,r);else r&&z(r.then)&&r.then(C)}}function $e(){var b="{{",a="}}";this.startSymbol=
function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(n,b).replace(r,a)}function h(f,h,n,r){function u(a){try{var b=a;a=n?e.getTrusted(n,b):e.valueOf(b);var c;if(r&&!w(a))c=a;else if(null==a)c="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=db(a)}c=a}return c}catch(g){d(Ka.interr(f,g))}}r=!!r;for(var p,m,q=0,I=
[],B=[],N=f.length,D=[],t=[];q<N;)if(-1!=(p=f.indexOf(b,q))&&-1!=(m=f.indexOf(a,p+l)))q!==p&&D.push(g(f.substring(q,p))),q=f.substring(p+l,m),I.push(q),B.push(c(q,u)),q=m+k,t.push(D.length),D.push("");else{q!==N&&D.push(g(f.substring(q)));break}n&&1<D.length&&Ka.throwNoconcat(f);if(!h||I.length){var S=function(a){for(var b=0,c=I.length;b<c;b++){if(r&&A(a[b]))return;D[t[b]]=a[b]}return D.join("")};return P(function(a){var b=0,c=I.length,e=Array(c);try{for(;b<c;b++)e[b]=B[b](a);return S(e)}catch(g){d(Ka.interr(f,
g))}},{exp:f,expressions:I,$$watchDelegate:function(a,b){var c;return a.$watchGroup(B,function(d,e){var f=S(d);z(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=b.length,k=a.length,n=new RegExp(b.replace(/./g,f),"g"),r=new RegExp(a.replace(/./g,f),"g");h.startSymbol=function(){return b};h.endSymbol=function(){return a};return h}]}function af(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,h,l,k){var n=4<arguments.length,r=n?za.call(arguments,4):[],s=a.setInterval,x=a.clearInterval,
C=0,F=w(k)&&!k,u=(F?d:c).defer(),p=u.promise;l=w(l)?l:0;p.then(null,null,n?function(){e.apply(null,r)}:e);p.$$intervalId=s(function(){u.notify(C++);0<l&&C>=l&&(u.resolve(C),x(p.$$intervalId),delete f[p.$$intervalId]);F||b.$apply()},h);f[p.$$intervalId]=u;return p}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],!0):!1};return e}]}function ge(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",
GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a",ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"]},pluralCat:function(b){return 1===b?"one":"other"}}}}function bc(b){b=b.split("/");for(var a=b.length;a--;)b[a]=ob(b[a]);return b.join("/")}function hd(b,a){var c=Ba(b);a.$$protocol=c.protocol;
a.$$host=c.hostname;a.$$port=W(c.port)||Tf[c.protocol]||null}function id(b,a){var c="/"!==b.charAt(0);c&&(b="/"+b);var d=Ba(b);a.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?d.pathname.substring(1):d.pathname);a.$$search=zc(d.search);a.$$hash=decodeURIComponent(d.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function ya(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ja(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Bb(b){return b.replace(/(#.+)|#$/,
"$1")}function cc(b){return b.substr(0,Ja(b).lastIndexOf("/")+1)}function dc(b,a){this.$$html5=!0;a=a||"";var c=cc(b);hd(b,this);this.$$parse=function(a){var b=ya(c,a);if(!L(b))throw Cb("ipthprfx",a,c);id(b,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Qb(this.$$search),b=this.$$hash?"#"+ob(this.$$hash):"";this.$$url=bc(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),
!0;var f,g;(f=ya(b,d))!==t?(g=f,g=(f=ya(a,f))!==t?c+(ya("/",f)||f):b+g):(f=ya(c,d))!==t?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function ec(b,a){var c=cc(b);hd(b,this);this.$$parse=function(d){var e=ya(b,d)||ya(c,d),f;A(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",A(e)&&(b=d,this.replace())):(f=ya(a,e),A(f)&&(f=e));id(f,this);d=this.$$path;var e=b,g=/^\/[A-Z]:(\/.*)/;0===f.indexOf(e)&&(f=f.replace(e,""));g.exec(f)||(d=(f=g.exec(d))?f[1]:d);this.$$path=d;this.$$compose()};this.$$compose=
function(){var c=Qb(this.$$search),e=this.$$hash?"#"+ob(this.$$hash):"";this.$$url=bc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Ja(b)==Ja(a)?(this.$$parse(a),!0):!1}}function jd(b,a){this.$$html5=!0;ec.apply(this,arguments);var c=cc(b);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Ja(d)?f=d:(g=ya(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=function(){var c=
Qb(this.$$search),e=this.$$hash?"#"+ob(this.$$hash):"";this.$$url=bc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function Db(b){return function(){return this[b]}}function kd(b,a){return function(c){if(A(c))return this[b];this[b]=a(c);this.$$compose();return this}}function ff(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return w(a)?(b=a,this):b};this.html5Mode=function(b){return ab(b)?(a.enabled=b,this):H(b)?(ab(b.enabled)&&(a.enabled=b.enabled),
ab(b.requireBase)&&(a.requireBase=b.requireBase),ab(b.rewriteLinks)&&(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(c,d,e,f,g){function h(a,b,c){var e=k.url(),f=k.$$state;try{d.url(a,b,c),k.$$state=d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function l(a,b){c.$broadcast("$locationChangeSuccess",k.absUrl(),a,k.$$state,b)}var k,n;n=d.baseHref();var r=d.url(),s;if(a.enabled){if(!n&&a.requireBase)throw Cb("nobase");s=r.substring(0,
r.indexOf("/",r.indexOf("//")+2))+(n||"/");n=e.history?dc:jd}else s=Ja(r),n=ec;k=new n(s,"#"+b);k.$$parseLinkUrl(r,r);k.$$state=d.state();var x=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&!b.shiftKey&&2!=b.which&&2!=b.button){for(var e=y(b.target);"a"!==ta(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),l=e.attr("href")||e.attr("xlink:href");H(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=Ba(h.animVal).href);x.test(h)||
!h||e.attr("target")||b.isDefaultPrevented()||!k.$$parseLinkUrl(h,l)||(b.preventDefault(),k.absUrl()!=d.url()&&(c.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});Bb(k.absUrl())!=Bb(r)&&d.url(k.absUrl(),!0);var C=!0;d.onUrlChange(function(a,b){c.$evalAsync(function(){var d=k.absUrl(),e=k.$$state,f;k.$$parse(a);k.$$state=b;f=c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented;k.absUrl()===a&&(f?(k.$$parse(d),k.$$state=e,h(d,!1,e)):(C=!1,l(d,e)))});c.$$phase||c.$digest()});c.$watch(function(){var a=
Bb(d.url()),b=Bb(k.absUrl()),f=d.state(),g=k.$$replace,n=a!==b||k.$$html5&&e.history&&f!==k.$$state;if(C||n)C=!1,c.$evalAsync(function(){var b=k.absUrl(),d=c.$broadcast("$locationChangeStart",b,a,k.$$state,f).defaultPrevented;k.absUrl()===b&&(d?(k.$$parse(a),k.$$state=f):(n&&h(b,g,f===k.$$state?null:k.$$state),l(a,f)))});k.$$replace=!1});return k}]}function gf(){var b=!0,a=this;this.debugEnabled=function(a){return w(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&
(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||v;a=!1;try{a=!!e.apply}catch(l){}return a?function(){var a=[];m(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}
function Ca(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw da("isecfld",a);return b}function oa(b,a){if(b){if(b.constructor===b)throw da("isecfn",a);if(b.window===b)throw da("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw da("isecdom",a);if(b===Object)throw da("isecobj",a);}return b}function ld(b,a){if(b){if(b.constructor===b)throw da("isecfn",a);if(b===Uf||b===Vf||b===Wf)throw da("isecff",a);
}}function Xf(b,a){return"undefined"!==typeof b?b:a}function md(b,a){return"undefined"===typeof b?a:"undefined"===typeof a?b:b+a}function T(b,a){var c,d;switch(b.type){case q.Program:c=!0;m(b.body,function(b){T(b.expression,a);c=c&&b.expression.constant});b.constant=c;break;case q.Literal:b.constant=!0;b.toWatch=[];break;case q.UnaryExpression:T(b.argument,a);b.constant=b.argument.constant;b.toWatch=b.argument.toWatch;break;case q.BinaryExpression:T(b.left,a);T(b.right,a);b.constant=b.left.constant&&
b.right.constant;b.toWatch=b.left.toWatch.concat(b.right.toWatch);break;case q.LogicalExpression:T(b.left,a);T(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=b.constant?[]:[b];break;case q.ConditionalExpression:T(b.test,a);T(b.alternate,a);T(b.consequent,a);b.constant=b.test.constant&&b.alternate.constant&&b.consequent.constant;b.toWatch=b.constant?[]:[b];break;case q.Identifier:b.constant=!1;b.toWatch=[b];break;case q.MemberExpression:T(b.object,a);b.computed&&T(b.property,a);
b.constant=b.object.constant&&(!b.computed||b.property.constant);b.toWatch=[b];break;case q.CallExpression:c=b.filter?!a(b.callee.name).$stateful:!1;d=[];m(b.arguments,function(b){T(b,a);c=c&&b.constant;b.constant||d.push.apply(d,b.toWatch)});b.constant=c;b.toWatch=b.filter&&!a(b.callee.name).$stateful?d:[b];break;case q.AssignmentExpression:T(b.left,a);T(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=[b];break;case q.ArrayExpression:c=!0;d=[];m(b.elements,function(b){T(b,a);c=
c&&b.constant;b.constant||d.push.apply(d,b.toWatch)});b.constant=c;b.toWatch=d;break;case q.ObjectExpression:c=!0;d=[];m(b.properties,function(b){T(b.value,a);c=c&&b.value.constant;b.value.constant||d.push.apply(d,b.value.toWatch)});b.constant=c;b.toWatch=d;break;case q.ThisExpression:b.constant=!1,b.toWatch=[]}}function nd(b){if(1==b.length){b=b[0].expression;var a=b.toWatch;return 1!==a.length?a:a[0]!==b?a:t}}function od(b){return b.type===q.Identifier||b.type===q.MemberExpression}function pd(b){if(1===
b.body.length&&od(b.body[0].expression))return{type:q.AssignmentExpression,left:b.body[0].expression,right:{type:q.NGValueParameter},operator:"="}}function qd(b){return 0===b.body.length||1===b.body.length&&(b.body[0].expression.type===q.Literal||b.body[0].expression.type===q.ArrayExpression||b.body[0].expression.type===q.ObjectExpression)}function rd(b,a){this.astBuilder=b;this.$filter=a}function sd(b,a){this.astBuilder=b;this.$filter=a}function Eb(b,a,c,d){oa(b,d);a=a.split(".");for(var e,f=0;1<
a.length;f++){e=Ca(a.shift(),d);var g=oa(b[e],d);g||(g={},b[e]=g);b=g}e=Ca(a.shift(),d);oa(b[e],d);return b[e]=c}function Fb(b){return"constructor"==b}function fc(b){return z(b.valueOf)?b.valueOf():Yf.call(b)}function hf(){var b=ga(),a=ga();this.$get=["$filter","$sniffer",function(c,d){function e(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=fc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function f(a,b,c,d,f){var g=d.inputs,h;if(1===g.length){var k=e,g=g[0];return a.$watch(function(a){var b=
g(a);e(b,k)||(h=d(a,t,t,[b]),k=b&&fc(b));return h},b,c,f)}for(var l=[],n=[],r=0,m=g.length;r<m;r++)l[r]=e,n[r]=null;return a.$watch(function(a){for(var b=!1,c=0,f=g.length;c<f;c++){var k=g[c](a);if(b||(b=!e(k,l[c])))n[c]=k,l[c]=k&&fc(k)}b&&(h=d(a,t,t,n));return h},b,c,f)}function g(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;z(b)&&b.apply(this,arguments);w(a)&&d.$$postDigest(function(){w(f)&&e()})},c)}function h(a,b,c,d){function e(a){var b=!0;m(a,function(a){w(a)||
(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;z(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function l(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){z(b)&&b.apply(this,arguments);e()},c)}function k(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c!==h&&c!==g?function(c,d,e,f){e=a(c,d,e,f);return b(e,c,d)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return w(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==
f?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=f,c.inputs=a.inputs?a.inputs:[a]);return c}var n={csp:d.csp,expensiveChecks:!1},r={csp:d.csp,expensiveChecks:!0};return function(d,e,C){var m,u,p;switch(typeof d){case "string":p=d=d.trim();var q=C?a:b;m=q[p];m||(":"===d.charAt(0)&&":"===d.charAt(1)&&(u=!0,d=d.substring(2)),C=C?r:n,m=new gc(C),m=(new hc(m,c,C)).parse(d),m.constant?m.$$watchDelegate=l:u?m.$$watchDelegate=m.literal?h:g:m.inputs&&(m.$$watchDelegate=f),q[p]=m);return k(m,
e);case "function":return k(d,e);default:return v}}}]}function kf(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return td(function(a){b.$evalAsync(a)},a)}]}function lf(){this.$get=["$browser","$exceptionHandler",function(b,a){return td(function(a){b.defer(a)},a)}]}function td(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&
c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=t;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{z(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),a(h)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=J("$q",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||
[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}};g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,this.$$reject);try{if(H(b)||z(b))d=b&&b.then;z(d)?(this.promise.$$state.status=
-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(z(b)?
b(c):c)}catch(h){a(h)}}})}};var l=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{z(c)&&(d=c())}catch(e){return l(e,!1)}return d&&z(d.then)?d.then(function(){return l(a,b)},function(a){return l(a,!1)}):l(a,b)},n=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},r=function x(a){if(!z(a))throw h("norslvr",a);if(!(this instanceof x))return new x(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};
r.defer=function(){return new g};r.reject=function(a){var b=new g;b.reject(a);return b.promise};r.when=n;r.resolve=n;r.all=function(a){var b=new g,c=0,d=G(a)?[]:{};m(a,function(a,e){c++;n(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return r}function uf(){this.$get=["$window","$timeout",function(b,a){function c(){for(var a=0;a<n.length;a++){var b=n[a];b&&(n[a]=null,b())}k=n.length=0}function d(a){var b=
n.length;k++;n.push(a);0===b&&(l=h(c));return function(){0<=b&&(b=n[b]=null,0===--k&&l&&(l(),l=null,n.length=0))}}var e=b.requestAnimationFrame||b.webkitRequestAnimationFrame,f=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,g=!!e,h=g?function(a){var b=e(a);return function(){f(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};d.supported=g;var l,k=0,n=[];return d}]}function jf(){function b(a){function b(){this.$$watchers=this.$$nextSibling=
this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++nb;this.$$ChildScope=null}b.prototype=a;return b}var a=10,c=J("$rootScope"),d=null,e=null;this.digestTtl=function(b){arguments.length&&(a=b);return a};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(f,g,h,l){function k(a){a.currentScope.$$destroyed=!0}function n(){this.$id=++nb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=
this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function r(a){if(p.$$phase)throw c("inprog",p.$$phase);p.$$phase=a}function s(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function x(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function q(){}function F(){for(;I.length;)try{I.shift()()}catch(a){g(a)}e=null}function u(){null===e&&(e=
l.defer(function(){p.$apply(F)}))}n.prototype={constructor:n,$new:function(a,c){var d;c=c||this;a?(d=new n,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=b(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(a||c!=this)&&d.$on("$destroy",k);return d},$watch:function(a,b,c,e){var f=h(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,c,f,a);var g=this,k=g.$$watchers,l=
{fn:b,last:q,get:f,exp:e||a,eq:!!c};d=null;z(b)||(l.fn=v);k||(k=g.$$watchers=[]);k.unshift(l);s(this,1);return function(){0<=bb(k,l)&&s(g,-1);d=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});m(a,function(a,b){var k=g.$watch(a,function(a,
f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!A(e)){if(H(e))if(Ea(e))for(f!==r&&(f=r,m=f.length=0,l++),a=e.length,m!==a&&(l++,f.length=m=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==s&&(f=s={},m=0,l++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(m++,f[b]=g,l++));if(m>a)for(b in l++,f)e.hasOwnProperty(b)||
(m--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,g,k=1<b.length,l=0,n=h(a,c),r=[],s={},p=!0,m=0;return this.$watch(n,function(){p?(p=!1,b(e,e,d)):b(e,g,d);if(k)if(H(e))if(Ea(e)){g=Array(e.length);for(var a=0;a<e.length;a++)g[a]=e[a]}else for(a in g={},e)Xa.call(e,a)&&(g[a]=e[a]);else g=e})},$digest:function(){var b,f,h,k,n,s,m=a,x,u=[],E,I;r("$digest");l.$$checkUrlChange();this===p&&null!==e&&(l.defer.cancel(e),F());d=null;do{s=!1;for(x=this;t.length;){try{I=t.shift(),
I.scope.$eval(I.expression,I.locals)}catch(v){g(v)}d=null}a:do{if(k=x.$$watchers)for(n=k.length;n--;)try{if(b=k[n])if((f=b.get(x))!==(h=b.last)&&!(b.eq?ka(f,h):"number"===typeof f&&"number"===typeof h&&isNaN(f)&&isNaN(h)))s=!0,d=b,b.last=b.eq?fa(f,null):f,b.fn(f,h===q?f:h,x),5>m&&(E=4-m,u[E]||(u[E]=[]),u[E].push({msg:z(b.exp)?"fn: "+(b.exp.name||b.exp.toString()):b.exp,newVal:f,oldVal:h}));else if(b===d){s=!1;break a}}catch(A){g(A)}if(!(k=x.$$watchersCount&&x.$$childHead||x!==this&&x.$$nextSibling))for(;x!==
this&&!(k=x.$$nextSibling);)x=x.$parent}while(x=k);if((s||t.length)&&!m--)throw p.$$phase=null,c("infdig",a,u);}while(s||t.length);for(p.$$phase=null;w.length;)try{w.shift()()}catch(y){g(y)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===p&&l.$$applicationDestroyed();s(this,-this.$$watchersCount);for(var b in this.$$listenerCount)x(this,this.$$listenerCount[b],b);a&&a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==
this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=v;this.$on=this.$watch=this.$watchGroup=function(){return v};this.$$listeners={};this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}},$eval:function(a,b){return h(a)(this,b)},
$evalAsync:function(a,b){p.$$phase||t.length||l.defer(function(){t.length&&p.$digest()});t.push({scope:this,expression:a,locals:b})},$$postDigest:function(a){w.push(a)},$apply:function(a){try{return r("$apply"),this.$eval(a)}catch(b){g(b)}finally{p.$$phase=null;try{p.$digest()}catch(c){throw g(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&I.push(b);u()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||
(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,x(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,f=!1,h={name:a,targetScope:e,stopPropagation:function(){f=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=cb([h],arguments,1),l,n;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(n=d.length;l<n;l++)if(d[l])try{d[l].apply(null,k)}catch(r){g(r)}else d.splice(l,1),l--,n--;if(f)return h.currentScope=
null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var f=cb([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,f)}catch(l){g(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=
c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var p=new n,t=p.$$asyncQueue=[],w=p.$$postDigestQueue=[],I=p.$$applyAsyncQueue=[];return p}]}function he(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return w(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return w(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;f=Ba(c).href;return""===f||f.match(e)?c:"unsafe:"+
f}}}function Zf(b){if("self"===b)return b;if(L(b)){if(-1<b.indexOf("***"))throw Da("iwcard",b);b=ud(b).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(Za(b))return new RegExp("^"+b.source+"$");throw Da("imatcher");}function vd(b){var a=[];w(b)&&m(b,function(b){a.push(Zf(b))});return a}function nf(){this.SCE_CONTEXTS=pa;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=vd(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&
(a=vd(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?gd(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw Da("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),h={};h[pa.HTML]=e(g);h[pa.CSS]=e(g);h[pa.URL]=
e(g);h[pa.JS]=e(g);h[pa.RESOURCE_URL]=e(h[pa.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Da("icontext",a,b);if(null===b||b===t||""===b)return b;if("string"!==typeof b)throw Da("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||e===t||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(c===pa.RESOURCE_URL){var g=Ba(e.toString()),r,s,m=!1;r=0;for(s=b.length;r<s;r++)if(d(b[r],g)){m=!0;break}if(m)for(r=
0,s=a.length;r<s;r++)if(d(a[r],g)){m=!1;break}if(m)return e;throw Da("insecurl",e.toString());}if(c===pa.HTML)return f(e);throw Da("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function mf(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sceDelegate",function(a,c){if(b&&8>Ua)throw Da("iequirks");var d=ia(pa);d.isEnabled=function(){return b};d.trustAs=c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=c.valueOf;b||(d.trustAs=
d.getTrusted=function(a,b){return b},d.valueOf=Ya);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,a)})};var e=d.parseAs,f=d.getTrusted,g=d.trustAs;m(pa,function(a,b){var c=M(b);d[hb("parse_as_"+c)]=function(b){return e(a,b)};d[hb("get_trusted_"+c)]=function(b){return f(a,b)};d[hb("trust_as_"+c)]=function(b){return g(a,b)}});return d}]}function of(){this.$get=["$window","$document",function(b,a){var c={},d=W((/android (\d+)/.exec(M((b.navigator||
{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,l=f.body&&f.body.style,k=!1,n=!1;if(l){for(var r in l)if(k=h.exec(r)){g=k[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in l&&"webkit");k=!!("transition"in l||g+"Transition"in l);n=!!("animation"in l||g+"Animation"in l);!d||k&&n||(k=L(l.webkitTransition),n=L(l.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hasEvent:function(a){if("input"===
a&&11>=Ua)return!1;if(A(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:fb(),vendorPrefix:g,transitions:k,animations:n,android:d}}]}function qf(){this.$get=["$templateCache","$http","$q","$sce",function(b,a,c,d){function e(f,g){e.totalPendingRequests++;L(f)&&b.get(f)||(f=d.getTrustedResourceUrl(f));var h=a.defaults&&a.defaults.transformResponse;G(h)?h=h.filter(function(a){return a!==$b}):h===$b&&(h=null);return a.get(f,{cache:b,transformResponse:h})["finally"](function(){e.totalPendingRequests--}).then(function(a){b.put(f,
a.data);return a.data},function(a){if(!g)throw ea("tpload",f,a.status,a.statusText);return c.reject(a)})}e.totalPendingRequests=0;return e}]}function rf(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];m(a,function(a){var d=ca.element(a).data("$binding");d&&m(d,function(d){c?(new RegExp("(^|\\s)"+ud(b)+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,
b,c){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var l=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(l.length)return l}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function sf(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,l,k){z(f)||(k=l,l=f,f=v);var n=za.call(arguments,3),r=w(k)&&!k,s=(r?d:c).defer(),
m=s.promise,q;q=a.defer(function(){try{s.resolve(f.apply(null,n))}catch(a){s.reject(a),e(a)}finally{delete g[m.$$timeoutId]}r||b.$apply()},l);m.$$timeoutId=q;g[q]=s;return m}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function Ba(b){Ua&&(X.setAttribute("href",b),b=X.href);X.setAttribute("href",b);return{href:X.href,protocol:X.protocol?X.protocol.replace(/:$/,""):"",host:X.host,
search:X.search?X.search.replace(/^\?/,""):"",hash:X.hash?X.hash.replace(/^#/,""):"",hostname:X.hostname,port:X.port,pathname:"/"===X.pathname.charAt(0)?X.pathname:"/"+X.pathname}}function gd(b){b=L(b)?Ba(b):b;return b.protocol===wd.protocol&&b.host===wd.host}function tf(){this.$get=ra(O)}function xd(b){function a(a){try{return decodeURIComponent(a)}catch(b){return a}}var c=b[0]||{},d={},e="";return function(){var b,g,h,l,k;b=c.cookie||"";if(b!==e)for(e=b,b=e.split("; "),d={},h=0;h<b.length;h++)g=
b[h],l=g.indexOf("="),0<l&&(k=a(g.substring(0,l)),d[k]===t&&(d[k]=a(g.substring(l+1))));return d}}function xf(){this.$get=xd}function Lc(b){function a(c,d){if(H(c)){var e={};m(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];a("currency",yd);a("date",zd);a("filter",$f);a("json",ag);a("limitTo",bg);a("lowercase",cg);a("number",Ad);a("orderBy",Bd);a("uppercase",dg)}function $f(){return function(b,
a,c){if(!Ea(b)){if(null==b)return b;throw J("filter")("notarray",b);}var d;switch(ic(a)){case "function":break;case "boolean":case "null":case "number":case "string":d=!0;case "object":a=eg(a,c,d);break;default:return b}return Array.prototype.filter.call(b,a)}}function eg(b,a,c){var d=H(b)&&"$"in b;!0===a?a=ka:z(a)||(a=function(a,b){if(A(a))return!1;if(null===a||null===b)return a===b;if(H(b)||H(a)&&!rc(a))return!1;a=M(""+a);b=M(""+b);return-1!==a.indexOf(b)});return function(e){return d&&!H(e)?La(e,
b.$,a,!1):La(e,b,a,c)}}function La(b,a,c,d,e){var f=ic(b),g=ic(a);if("string"===g&&"!"===a.charAt(0))return!La(b,a.substring(1),c,d);if(G(b))return b.some(function(b){return La(b,a,c,d)});switch(f){case "object":var h;if(d){for(h in b)if("$"!==h.charAt(0)&&La(b[h],a,c,!0))return!0;return e?!1:La(b,a,c,!1)}if("object"===g){for(h in a)if(e=a[h],!z(e)&&!A(e)&&(f="$"===h,!La(f?b:b[h],e,c,f,f)))return!1;return!0}return c(b,a);case "function":return!1;default:return c(b,a)}}function ic(b){return null===
b?"null":typeof b}function yd(b){var a=b.NUMBER_FORMATS;return function(b,d,e){A(d)&&(d=a.CURRENCY_SYM);A(e)&&(e=a.PATTERNS[1].maxFrac);return null==b?b:Cd(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function Ad(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:Cd(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Cd(b,a,c,d,e){if(H(b))return"";var f=0>b;b=Math.abs(b);var g=Infinity===b;if(!g&&!isFinite(b))return"";var h=b+"",l="",k=!1,n=[];g&&(l="\u221e");
if(!g&&-1!==h.indexOf("e")){var r=h.match(/([\d\.]+)e(-?)(\d+)/);r&&"-"==r[2]&&r[3]>e+1?b=0:(l=h,k=!0)}if(g||k)0<e&&1>b&&(l=b.toFixed(e),b=parseFloat(l));else{g=(h.split(Dd)[1]||"").length;A(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);var g=(""+b).split(Dd),h=g[0],g=g[1]||"",r=0,s=a.lgSize,m=a.gSize;if(h.length>=s+m)for(r=h.length-s,k=0;k<r;k++)0===(r-k)%m&&0!==k&&(l+=c),l+=h.charAt(k);for(k=r;k<h.length;k++)0===(h.length-k)%s&&0!==k&&
(l+=c),l+=h.charAt(k);for(;g.length<e;)g+="0";e&&"0"!==e&&(l+=d+g.substr(0,e))}0===b&&(f=!1);n.push(f?a.negPre:a.posPre,l,f?a.negSuf:a.posSuf);return n.join("")}function Gb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function Y(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Gb(e,a,d)}}function Hb(b,a){return function(c,d){var e=c["get"+b](),f=rb(a?"SHORT"+b:b);return d[f][e]}}function Ed(b){var a=
(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function Fd(b){return function(a){var c=Ed(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Gb(a,b)}}function jc(b,a){return 0>=b.getFullYear()?a.ERAS[0]:a.ERAS[1]}function zd(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=W(b[9]+b[10]),g=W(b[9]+b[11]));h.call(a,W(b[1]),
W(b[2])-1,W(b[3]));f=W(b[4]||0)-f;g=W(b[5]||0)-g;h=W(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var g="",h=[],l,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;L(c)&&(c=fg.test(c)?W(c):a(c));V(c)&&(c=new Date(c));if(!aa(c)||!isFinite(c.getTime()))return c;for(;e;)(k=gg.exec(e))?(h=cb(h,k,1),e=h.pop()):(h.push(e),e=null);var n=c.getTimezoneOffset();
f&&(n=xc(f,c.getTimezoneOffset()),c=Pb(c,f,!0));m(h,function(a){l=hg[a];g+=l?l(c,b.DATETIME_FORMATS,n):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function ag(){return function(b,a){A(a)&&(a=2);return db(b,a)}}function bg(){return function(b,a,c){a=Infinity===Math.abs(Number(a))?Number(a):W(a);if(isNaN(a))return b;V(b)&&(b=b.toString());if(!G(b)&&!L(b))return b;c=!c||isNaN(c)?0:W(c);c=0>c&&c>=-b.length?b.length+c:c;return 0<=a?b.slice(c,c+a):0===c?b.slice(a,b.length):b.slice(Math.max(0,
c+a),c)}}function Bd(b){function a(a,c){c=c?-1:1;return a.map(function(a){var d=1,h=Ya;if(z(a))h=a;else if(L(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))d="-"==a.charAt(0)?-1:1,a=a.substring(1);if(""!==a&&(h=b(a),h.constant))var l=h(),h=function(a){return a[l]}}return{get:h,descending:d*c}})}function c(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}return function(b,e,f){if(!Ea(b))return b;G(e)||(e=[e]);0===e.length&&(e=["+"]);var g=a(e,f);b=Array.prototype.map.call(b,
function(a,b){return{value:a,predicateValues:g.map(function(d){var e=d.get(a);d=typeof e;if(null===e)d="string",e="null";else if("string"===d)e=e.toLowerCase();else if("object"===d)a:{if("function"===typeof e.valueOf&&(e=e.valueOf(),c(e)))break a;if(rc(e)&&(e=e.toString(),c(e)))break a;e=b}return{value:e,type:d}})}});b.sort(function(a,b){for(var c=0,d=0,e=g.length;d<e;++d){var c=a.predicateValues[d],f=b.predicateValues[d],m=0;c.type===f.type?c.value!==f.value&&(m=c.value<f.value?-1:1):m=c.type<f.type?
-1:1;if(c=m*g[d].descending)break}return c});return b=b.map(function(a){return a.value})}}function Ma(b){z(b)&&(b={link:b});b.restrict=b.restrict||"AC";return ra(b)}function Gd(b,a,c,d,e){var f=this,g=[],h=f.$$parentForm=b.parent().controller("form")||Ib;f.$error={};f.$$success={};f.$pending=t;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;h.$addControl(f);f.$rollbackViewValue=function(){m(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=
function(){m(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Ra(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];m(f.$pending,function(b,c){f.$setValidity(c,null,a)});m(f.$error,function(b,c){f.$setValidity(c,null,a)});m(f.$$success,function(b,c){f.$setValidity(c,null,a)});bb(g,a)};Hd({ctrl:this,$element:b,set:function(a,b,
c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(bb(d,c),0===d.length&&delete a[b])},parentForm:h,$animate:d});f.$setDirty=function(){d.removeClass(b,Va);d.addClass(b,Jb);f.$dirty=!0;f.$pristine=!1;h.$setDirty()};f.$setPristine=function(){d.setClass(b,Va,Jb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;m(g,function(a){a.$setPristine()})};f.$setUntouched=function(){m(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){d.addClass(b,
"ng-submitted");f.$submitted=!0;h.$setSubmitted()}}function kc(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function kb(b,a,c,d,e,f){var g=M(a[0].type);if(!e.android){var h=!1;a.on("compositionstart",function(a){h=!0});a.on("compositionend",function(){h=!1;l()})}var l=function(b){k&&(f.defer.cancel(k),k=null);if(!h){var e=a.val();b=b&&b.type;"password"===g||c.ngTrim&&"false"===c.ngTrim||(e=R(e));(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,b)}};
if(e.hasEvent("input"))a.on("input",l);else{var k,n=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||n(a,this,this.value)});if(e.hasEvent("paste"))a.on("paste cut",n)}a.on("change",l);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)}}function Kb(b,a){return function(c,d){var e,f;if(aa(c))return c;if(L(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1));
if(ig.test(c))return new Date(c);b.lastIndex=0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},m(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function lb(b,a,c,d){return function(e,f,g,h,l,k,n){function r(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function s(a){return w(a)?
aa(a)?a:c(a):t}Id(e,f,g,h);kb(e,f,g,h,l,k);var m=h&&h.$options&&h.$options.timezone,q;h.$$parserName=b;h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=c(b,q),m&&(b=Pb(b,m)),b):t});h.$formatters.push(function(a){if(a&&!aa(a))throw Lb("datefmt",a);if(r(a))return(q=a)&&m&&(q=Pb(q,m,!0)),n("date")(a,d,m);q=null;return""});if(w(g.min)||g.ngMin){var F;h.$validators.min=function(a){return!r(a)||A(F)||c(a)>=F};g.$observe("min",function(a){F=s(a);h.$validate()})}if(w(g.max)||g.ngMax){var u;
h.$validators.max=function(a){return!r(a)||A(u)||c(a)<=u};g.$observe("max",function(a){u=s(a);h.$validate()})}}}function Id(b,a,c,d){(d.$$hasNativeValidators=H(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput&&!c.typeMismatch?t:b})}function Jd(b,a,c,d,e){if(w(d)){b=b(d);if(!b.constant)throw J("ngModel")("constexpr",c,d);return b(a)}return e}function lc(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=
a[d],n=0;n<b.length;n++)if(e==b[n])continue a;c.push(e)}return c}function e(a){var b=[];return G(a)?(m(a,function(a){b=b.concat(e(a))}),b):L(a)?a.split(" "):H(a)?(m(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",link:function(f,g,h){function l(a,b){var c=g.data("$classCounts")||ga(),d=[];m(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||f.$index%2===a){var k=e(b||[]);if(!n){var m=
l(k,1);h.$addClass(m)}else if(!ka(b,n)){var q=e(n),m=d(k,q),k=d(q,k),m=l(m,1),k=l(k,-1);m&&m.length&&c.addClass(g,m);k&&k.length&&c.removeClass(g,k)}}n=ia(b)}var n;f.$watch(h[b],k,!0);h.$observe("class",function(a){k(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var k=e(f.$eval(h[b]));g===a?(g=l(k,1),h.$addClass(g)):(g=l(k,-1),h.$removeClass(g))}})}}}]}function Hd(b){function a(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}
function c(b,c){b=b?"-"+Bc(b,"-"):"";a(mb+b,!0===c);a(Kd+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,l=b.parentForm,k=b.$animate;f[Kd]=!(f[mb]=e.hasClass(mb));d.$setValidity=function(b,e,f){e===t?(d.$pending||(d.$pending={}),g(d.$pending,b,f)):(d.$pending&&h(d.$pending,b,f),Ld(d.$pending)&&(d.$pending=t));ab(e)?e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,b,f)):(h(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(Md,!0),d.$valid=d.$invalid=t,c("",null)):(a(Md,
!1),d.$valid=Ld(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?t:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);l.$setValidity(b,e,d)}}function Ld(b){if(b)for(var a in b)if(b.hasOwnProperty(a))return!1;return!0}var jg=/^\/(.+)\/([a-z]*)$/,M=function(b){return L(b)?b.toLowerCase():b},Xa=Object.prototype.hasOwnProperty,rb=function(b){return L(b)?b.toUpperCase():b},Ua,y,la,za=[].slice,Mf=[].splice,kg=[].push,sa=Object.prototype.toString,sc=Object.getPrototypeOf,Fa=J("ng"),ca=
O.angular||(O.angular={}),gb,nb=0;Ua=U.documentMode;v.$inject=[];Ya.$inject=[];var G=Array.isArray,uc=/^\[object (Uint8(Clamped)?)|(Uint16)|(Uint32)|(Int8)|(Int16)|(Int32)|(Float(32)|(64))Array\]$/,R=function(b){return L(b)?b.trim():b},ud=function(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},fb=function(){if(w(fb.isActive_))return fb.isActive_;var b=!(!U.querySelector("[ng-csp]")&&!U.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return fb.isActive_=
b},pb=function(){if(w(pb.name_))return pb.name_;var b,a,c=Oa.length,d,e;for(a=0;a<c;++a)if(d=Oa[a],b=U.querySelector("["+d.replace(":","\\:")+"jq]")){e=b.getAttribute(d+"jq");break}return pb.name_=e},Oa=["ng-","data-ng-","ng:","x-ng-"],be=/[A-Z]/g,Cc=!1,Rb,qa=1,Na=3,fe={full:"1.4.3",major:1,minor:4,dot:3,codeName:"foam-acceleration"};Q.expando="ng339";var ib=Q.cache={},Df=1;Q._data=function(b){return this.cache[b[this.expando]]||{}};var yf=/([\:\-\_]+(.))/g,zf=/^moz([A-Z])/,lg={mouseleave:"mouseout",
mouseenter:"mouseover"},Ub=J("jqLite"),Cf=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Tb=/<|&#?\w+;/,Af=/<([\w:]+)/,Bf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,na={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};na.optgroup=na.option;na.tbody=na.tfoot=na.colgroup=na.caption=na.thead;
na.th=na.td;var Pa=Q.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===U.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),Q(O).on("load",a))},toString:function(){var b=[];m(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?y(this[b]):y(this[this.length+b])},length:0,push:kg,sort:[].sort,splice:[].splice},Ab={};m("multiple selected checked disabled readOnly required open".split(" "),function(b){Ab[M(b)]=b});var Tc={};m("input select option textarea button form details".split(" "),
function(b){Tc[b]=!0});var Uc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};m({data:Wb,removeData:ub,hasData:function(b){for(var a in ib[b.ng339])return!0;return!1}},function(b,a){Q[a]=b});m({data:Wb,inheritedData:zb,scope:function(b){return y.data(b,"$scope")||zb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return y.data(b,"$isolateScope")||y.data(b,"$isolateScopeNoTemplate")},controller:Qc,injector:function(b){return zb(b,
"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:wb,css:function(b,a,c){a=hb(a);if(w(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=b.nodeType;if(d!==Na&&2!==d&&8!==d)if(d=M(a),Ab[d])if(w(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||v).specified?d:t;else if(w(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?t:b},prop:function(b,a,c){if(w(c))b[a]=c;else return b[a]},
text:function(){function b(a,b){if(A(b)){var d=a.nodeType;return d===qa||d===Na?a.textContent:""}a.textContent=b}b.$dv="";return b}(),val:function(b,a){if(A(a)){if(b.multiple&&"select"===ta(b)){var c=[];m(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(A(a))return b.innerHTML;tb(b,!0);b.innerHTML=a},empty:Rc},function(b,a){Q.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==Rc&&(2==b.length&&b!==wb&&b!==Qc?
a:d)===t){if(H(a)){for(e=0;e<g;e++)if(b===Wb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===t?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});m({removeData:ub,on:function a(c,d,e,f){if(w(f))throw Ub("onargs");if(Mc(c)){var g=vb(c,!0);f=g.events;var h=g.handle;h||(h=g.handle=Gf(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],l=g.length;l--;){d=g[l];var k=f[d];k||(f[d]=[],"mouseenter"===d||"mouseleave"===
d?a(c,lg[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):"$destroy"!==d&&c.addEventListener(d,h,!1),k=f[d]);k.push(e)}}},off:Pc,one:function(a,c,d){a=y(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;tb(a);m(new Q(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];m(a.childNodes,function(a){a.nodeType===qa&&c.push(a)});return c},contents:function(a){return a.contentDocument||
a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===qa||11===d){c=new Q(c);for(var d=0,e=c.length;d<e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===qa){var d=a.firstChild;m(new Q(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=y(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:Xb,detach:function(a){Xb(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new Q(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,
d.nextSibling);d=h}},addClass:yb,removeClass:xb,toggleClass:function(a,c,d){c&&m(c.split(" "),function(c){var f=d;A(f)&&(f=!wb(a,c));(f?yb:xb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Vb,triggerHandler:function(a,c,d){var e,f,g=c.type||c,h=vb(a);if(h=(h=h&&h.events)&&h[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===
this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:v,type:g,target:a},c.type&&(e=P(e,c)),c=ia(h),f=d?[e].concat(d):[e],m(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,f)})}},function(a,c){Q.prototype[c]=function(c,e,f){for(var g,h=0,l=this.length;h<l;h++)A(g)?(g=a(this[h],c,e,f),w(g)&&(g=y(g))):Oc(g,a(this[h],c,e,f));return w(g)?g:this};Q.prototype.bind=
Q.prototype.on;Q.prototype.unbind=Q.prototype.off});Sa.prototype={put:function(a,c){this[Ga(a,this.nextUid)]=c},get:function(a){return this[Ga(a,this.nextUid)]},remove:function(a){var c=this[a=Ga(a,this.nextUid)];delete this[a];return c}};var wf=[function(){this.$get=[function(){return Sa}]}],Wc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,mg=/,/,ng=/^\s*(_?)(\S+?)\1\s*$/,Vc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ha=J("$injector");eb.$$annotate=function(a,c,d){var e;if("function"===typeof a){if(!(e=a.$inject)){e=
[];if(a.length){if(c)throw L(d)&&d||(d=a.name||Hf(a)),Ha("strictdi",d);c=a.toString().replace(Vc,"");c=c.match(Wc);m(c[1].split(mg),function(a){a.replace(ng,function(a,c,d){e.push(d)})})}a.$inject=e}}else G(a)?(c=a.length-1,Qa(a[c],"fn"),e=a.slice(0,c)):Qa(a,"fn",!0);return e};var Nd=J("$animate"),Ue=function(){this.$get=["$q","$$rAF",function(a,c){function d(){}d.all=v;d.chain=v;d.prototype={end:v,cancel:v,resume:v,pause:v,complete:v,then:function(d,f){return a(function(a){c(function(){a()})}).then(d,
f)}};return d}]},Te=function(){var a=new Sa,c=[];this.$get=["$$AnimateRunner","$rootScope",function(d,e){function f(d,f,l){var k=a.get(d);k||(a.put(d,k={}),c.push(d));f&&m(f.split(" "),function(a){a&&(k[a]=!0)});l&&m(l.split(" "),function(a){a&&(k[a]=!1)});1<c.length||e.$$postDigest(function(){m(c,function(c){var d=a.get(c);if(d){var e=If(c.attr("class")),f="",g="";m(d,function(a,c){a!==!!e[c]&&(a?f+=(f.length?" ":"")+c:g+=(g.length?" ":"")+c)});m(c,function(a){f&&yb(a,f);g&&xb(a,g)});a.remove(c)}});
c.length=0})}return{enabled:v,on:v,off:v,pin:v,push:function(a,c,e,k){k&&k();e=e||{};e.from&&a.css(e.from);e.to&&a.css(e.to);(e.addClass||e.removeClass)&&f(a,e.addClass,e.removeClass);return new d}}}]},Se=["$provide",function(a){var c=this;this.$$registeredAnimations=Object.create(null);this.register=function(d,e){if(d&&"."!==d.charAt(0))throw Nd("notcsel",d);var f=d+"-animation";c.$$registeredAnimations[d.substr(1)]=f;a.factory(f,e)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=
a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Nd("nongcls","ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function c(a,d,e){if(e){var l;a:{for(l=0;l<e.length;l++){var k=e[l];if(1===k.nodeType){l=k;break a}}l=void 0}!l||l.parentNode||l.previousElementSibling||(e=null)}e?e.after(a):d.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(f,g,h,l){g=
g&&y(g);h=h&&y(h);g=g||h.parent();c(f,g,h);return a.push(f,"enter",Ia(l))},move:function(f,g,h,l){g=g&&y(g);h=h&&y(h);g=g||h.parent();c(f,g,h);return a.push(f,"move",Ia(l))},leave:function(c,e){return a.push(c,"leave",Ia(e),function(){c.remove()})},addClass:function(c,e,h){h=Ia(h);h.addClass=jb(h.addclass,e);return a.push(c,"addClass",h)},removeClass:function(c,e,h){h=Ia(h);h.removeClass=jb(h.removeClass,e);return a.push(c,"removeClass",h)},setClass:function(c,e,h,l){l=Ia(l);l.addClass=jb(l.addClass,
e);l.removeClass=jb(l.removeClass,h);return a.push(c,"setClass",l)},animate:function(c,e,h,l,k){k=Ia(k);k.from=k.from?P(k.from,e):e;k.to=k.to?P(k.to,h):h;k.tempClasses=jb(k.tempClasses,l||"ng-inline-animate");return a.push(c,"animate",k)}}}]}],ea=J("$compile");Ec.$inject=["$provide","$$sanitizeUriProvider"];var Zc=/^((?:x|data)[\:\-_])/i,Nf=J("$controller"),Xc=/^(\S+)(\s+as\s+(\w+))?$/,cd="application/json",ac={"Content-Type":cd+";charset=utf-8"},Pf=/^\[|^\{(?!\{)/,Qf={"[":/]$/,"{":/}$/},Of=/^\)\]\}',?\n/,
Ka=ca.$interpolateMinErr=J("$interpolate");Ka.throwNoconcat=function(a){throw Ka("noconcat",a);};Ka.interr=function(a,c){return Ka("interr",a,c.toString())};var og=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,Tf={http:80,https:443,ftp:21},Cb=J("$location"),pg={$$html5:!1,$$replace:!1,absUrl:Db("$$absUrl"),url:function(a){if(A(a))return this.$$url;var c=og.exec(a);(c[1]||""===a)&&this.path(decodeURIComponent(c[1]));(c[2]||c[1]||""===a)&&this.search(c[3]||"");this.hash(c[5]||"");return this},protocol:Db("$$protocol"),
host:Db("$$host"),port:Db("$$port"),path:kd("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(L(a)||V(a))a=a.toString(),this.$$search=zc(a);else if(H(a))a=fa(a,{}),m(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Cb("isrcharg");break;default:A(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:kd("$$hash",function(a){return null!==
a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};m([jd,ec,dc],function(a){a.prototype=Object.create(pg);a.prototype.state=function(c){if(!arguments.length)return this.$$state;if(a!==dc||!this.$$html5)throw Cb("nostate");this.$$state=A(c)?null:c;return this}});var da=J("$parse"),Uf=Function.prototype.call,Vf=Function.prototype.apply,Wf=Function.prototype.bind,Mb=ga();m("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Mb[a]=!0});var qg={n:"\n",f:"\f",r:"\r",
t:"\t",v:"\v","'":"'",'"':'"'},gc=function(a){this.options=a};gc.prototype={constructor:gc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;
else{var c=a+this.peek(),d=c+this.peek(2),e=Mb[c],f=Mb[d];Mb[a]||e||f?(a=f?d:e?c:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,c){return-1!==c.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||
"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=w(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw da("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=M(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();
if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:c,text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var c=this.text.charAt(this.index);if(!this.isIdent(c)&&!this.isNumber(c))break;this.index++}this.tokens.push({index:a,
text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=qg[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,constant:!0,
value:d});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var q=function(a,c){this.lexer=a;this.options=c};q.Program="Program";q.ExpressionStatement="ExpressionStatement";q.AssignmentExpression="AssignmentExpression";q.ConditionalExpression="ConditionalExpression";q.LogicalExpression="LogicalExpression";q.BinaryExpression="BinaryExpression";q.UnaryExpression="UnaryExpression";q.CallExpression="CallExpression";q.MemberExpression="MemberExpression";q.Identifier="Identifier";q.Literal=
"Literal";q.ArrayExpression="ArrayExpression";q.Property="Property";q.ObjectExpression="ObjectExpression";q.ThisExpression="ThisExpression";q.NGValueParameter="NGValueParameter";q.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:q.Program,
body:a}},expressionStatement:function(){return{type:q.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();this.expect("=")&&(a={type:q.AssignmentExpression,left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),c,d;return this.expect("?")&&(c=this.expression(),this.consume(":"))?
(d=this.expression(),{type:q.ConditionalExpression,test:a,alternate:c,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:q.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:q.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),c;c=this.expect("==","!=","===","!==");)a={type:q.BinaryExpression,
operator:c.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),c;c=this.expect("<",">","<=",">=");)a={type:q.BinaryExpression,operator:c.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a={type:q.BinaryExpression,operator:c.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a={type:q.BinaryExpression,operator:c.text,
left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:q.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.constants.hasOwnProperty(this.peek().text)?a=fa(this.constants[this.consume().text]):this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():
this.throwError("not a primary expression",this.peek());for(var c;c=this.expect("(","[",".");)"("===c.text?(a={type:q.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===c.text?(a={type:q.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===c.text?a={type:q.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var c={type:q.CallExpression,callee:this.identifier(),
arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return c},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.expression());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:q.Identifier,name:a.text}},constant:function(){return{type:q.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;
a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:q.ArrayExpression,elements:a}},object:function(){var a=[],c;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;c={type:q.Property,kind:"init"};this.peek().constant?c.key=this.constant():this.peek().identifier?c.key=this.identifier():this.throwError("invalid key",this.peek());this.consume(":");c.value=this.expression();a.push(c)}while(this.expect(","))}this.consume("}");return{type:q.ObjectExpression,properties:a}},
throwError:function(a,c){throw da("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},consume:function(a){if(0===this.tokens.length)throw da("ueoe",this.text);var c=this.expect(a);c||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return c},peekToken:function(){if(0===this.tokens.length)throw da("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){return this.peekAhead(0,a,c,d,e)},peekAhead:function(a,c,d,e,f){if(this.tokens.length>a){a=this.tokens[a];
var g=a.text;if(g===c||g===d||g===e||g===f||!(c||d||e||f))return a}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},constants:{"true":{type:q.Literal,value:!0},"false":{type:q.Literal,value:!1},"null":{type:q.Literal,value:null},undefined:{type:q.Literal,value:t},"this":{type:q.ThisExpression}}};rd.prototype={compile:function(a,c){var d=this,e=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:c,fn:{vars:[],body:[],own:{}},assign:{vars:[],
body:[],own:{}},inputs:[]};T(e,d.$filter);var f="",g;this.stage="assign";if(g=pd(e))this.state.computing="assign",f=this.nextId(),this.recurse(g,f),f="fn.assign="+this.generateFunction("assign","s,v,l");g=nd(e.body);d.stage="inputs";m(g,function(a,c){var e="fn"+c;d.state[e]={vars:[],body:[],own:{}};d.state.computing=e;var f=d.nextId();d.recurse(a,f);d.return_(f);d.state.inputs.push(e);a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(e);f='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+
"var fn="+this.generateFunction("fn","s,l,a,i")+f+this.watchFns()+"return fn;";f=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","ifDefined","plus","text",f))(this.$filter,Ca,oa,ld,Xf,md,a);this.state=this.stage=t;f.literal=qd(e);f.constant=e.constant;return f},USE:"use",STRICT:"strict",watchFns:function(){var a=[],c=this.state.inputs,d=this;m(c,function(c){a.push("var "+c+"="+d.generateFunction(c,"s"))});c.length&&a.push("fn.inputs=["+c.join(",")+"];");return a.join("")},
generateFunction:function(a,c){return"function("+c+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],c=this;m(this.state.filters,function(d,e){a.push(d+"=$filter("+c.escape(e)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,c,d,e,f,g){var h,l,k=this,n,r;e=e||v;if(!g&&w(a.watchId))c=c||this.nextId(),this.if_("i",
this.lazyAssign(c,this.computedMember("i",a.watchId)),this.lazyRecurse(a,c,d,e,f,!0));else switch(a.type){case q.Program:m(a.body,function(c,d){k.recurse(c.expression,t,t,function(a){l=a});d!==a.body.length-1?k.current().body.push(l,";"):k.return_(l)});break;case q.Literal:r=this.escape(a.value);this.assign(c,r);e(r);break;case q.UnaryExpression:this.recurse(a.argument,t,t,function(a){l=a});r=a.operator+"("+this.ifDefined(l,0)+")";this.assign(c,r);e(r);break;case q.BinaryExpression:this.recurse(a.left,
t,t,function(a){h=a});this.recurse(a.right,t,t,function(a){l=a});r="+"===a.operator?this.plus(h,l):"-"===a.operator?this.ifDefined(h,0)+a.operator+this.ifDefined(l,0):"("+h+")"+a.operator+"("+l+")";this.assign(c,r);e(r);break;case q.LogicalExpression:c=c||this.nextId();k.recurse(a.left,c);k.if_("&&"===a.operator?c:k.not(c),k.lazyRecurse(a.right,c));e(c);break;case q.ConditionalExpression:c=c||this.nextId();k.recurse(a.test,c);k.if_(c,k.lazyRecurse(a.alternate,c),k.lazyRecurse(a.consequent,c));e(c);
break;case q.Identifier:c=c||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);Ca(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){f&&1!==f&&k.if_(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(c,k.nonComputedMember("s",a.name))})},c&&k.lazyAssign(c,k.nonComputedMember("l",
a.name)));(k.state.expensiveChecks||Fb(a.name))&&k.addEnsureSafeObject(c);e(c);break;case q.MemberExpression:h=d&&(d.context=this.nextId())||this.nextId();c=c||this.nextId();k.recurse(a.object,h,t,function(){k.if_(k.notNull(h),function(){if(a.computed)l=k.nextId(),k.recurse(a.property,l),k.addEnsureSafeMemberName(l),f&&1!==f&&k.if_(k.not(k.computedMember(h,l)),k.lazyAssign(k.computedMember(h,l),"{}")),r=k.ensureSafeObject(k.computedMember(h,l)),k.assign(c,r),d&&(d.computed=!0,d.name=l);else{Ca(a.property.name);
f&&1!==f&&k.if_(k.not(k.nonComputedMember(h,a.property.name)),k.lazyAssign(k.nonComputedMember(h,a.property.name),"{}"));r=k.nonComputedMember(h,a.property.name);if(k.state.expensiveChecks||Fb(a.property.name))r=k.ensureSafeObject(r);k.assign(c,r);d&&(d.computed=!1,d.name=a.property.name)}},function(){k.assign(c,"undefined")});e(c)},!!f);break;case q.CallExpression:c=c||this.nextId();a.filter?(l=k.filter(a.callee.name),n=[],m(a.arguments,function(a){var c=k.nextId();k.recurse(a,c);n.push(c)}),r=l+
"("+n.join(",")+")",k.assign(c,r),e(c)):(l=k.nextId(),h={},n=[],k.recurse(a.callee,l,h,function(){k.if_(k.notNull(l),function(){k.addEnsureSafeFunction(l);m(a.arguments,function(a){k.recurse(a,k.nextId(),t,function(a){n.push(k.ensureSafeObject(a))})});h.name?(k.state.expensiveChecks||k.addEnsureSafeObject(h.context),r=k.member(h.context,h.name,h.computed)+"("+n.join(",")+")"):r=l+"("+n.join(",")+")";r=k.ensureSafeObject(r);k.assign(c,r)},function(){k.assign(c,"undefined")});e(c)}));break;case q.AssignmentExpression:l=
this.nextId();h={};if(!od(a.left))throw da("lval");this.recurse(a.left,t,h,function(){k.if_(k.notNull(h.context),function(){k.recurse(a.right,l);k.addEnsureSafeObject(k.member(h.context,h.name,h.computed));r=k.member(h.context,h.name,h.computed)+a.operator+l;k.assign(c,r);e(c||r)})},1);break;case q.ArrayExpression:n=[];m(a.elements,function(a){k.recurse(a,k.nextId(),t,function(a){n.push(a)})});r="["+n.join(",")+"]";this.assign(c,r);e(r);break;case q.ObjectExpression:n=[];m(a.properties,function(a){k.recurse(a.value,
k.nextId(),t,function(c){n.push(k.escape(a.key.type===q.Identifier?a.key.name:""+a.key.value)+":"+c)})});r="{"+n.join(",")+"}";this.assign(c,r);e(r);break;case q.ThisExpression:this.assign(c,"s");e("s");break;case q.NGValueParameter:this.assign(c,"v"),e("v")}},getHasOwnProperty:function(a,c){var d=a+"."+c,e=this.current().own;e.hasOwnProperty(d)||(e[d]=this.nextId(!1,a+"&&("+this.escape(c)+" in "+a+")"));return e[d]},assign:function(a,c){if(a)return this.current().body.push(a,"=",c,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||
(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,c){return"ifDefined("+a+","+this.escape(c)+")"},plus:function(a,c){return"plus("+a+","+c+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,c,d){if(!0===a)c();else{var e=this.current().body;e.push("if(",a,"){");c();e.push("}");d&&(e.push("else{"),d(),e.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,c){return a+
"."+c},computedMember:function(a,c){return a+"["+c+"]"},member:function(a,c,d){return d?this.computedMember(a,c):this.nonComputedMember(a,c)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),";")},addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+
a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},lazyRecurse:function(a,c,d,e,f,g){var h=this;return function(){h.recurse(a,c,d,e,f,g)}},lazyAssign:function(a,c){var d=this;return function(){d.assign(a,c)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(L(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(V(a))return a.toString();if(!0===a)return"true";
if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw da("esc");},nextId:function(a,c){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(c?"="+c:""));return d},current:function(){return this.state[this.state.computing]}};sd.prototype={compile:function(a,c){var d=this,e=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=c;T(e,d.$filter);var f,g;if(f=pd(e))g=this.recurse(f);f=nd(e.body);var h;f&&(h=[],m(f,function(a,c){var e=d.recurse(a);
a.input=e;h.push(e);a.watchId=c}));var l=[];m(e.body,function(a){l.push(d.recurse(a.expression))});f=0===e.body.length?function(){}:1===e.body.length?l[0]:function(a,c){var d;m(l,function(e){d=e(a,c)});return d};g&&(f.assign=function(a,c,d){return g(a,d,c)});h&&(f.inputs=h);f.literal=qd(e);f.constant=e.constant;return f},recurse:function(a,c,d){var e,f,g=this,h;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case q.Literal:return this.value(a.value,c);case q.UnaryExpression:return f=
this.recurse(a.argument),this["unary"+a.operator](f,c);case q.BinaryExpression:return e=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](e,f,c);case q.LogicalExpression:return e=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](e,f,c);case q.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),c);case q.Identifier:return Ca(a.name,g.expression),g.identifier(a.name,g.expensiveChecks||Fb(a.name),
c,d,g.expression);case q.MemberExpression:return e=this.recurse(a.object,!1,!!d),a.computed||(Ca(a.property.name,g.expression),f=a.property.name),a.computed&&(f=this.recurse(a.property)),a.computed?this.computedMember(e,f,c,d,g.expression):this.nonComputedMember(e,f,g.expensiveChecks,c,d,g.expression);case q.CallExpression:return h=[],m(a.arguments,function(a){h.push(g.recurse(a))}),a.filter&&(f=this.$filter(a.callee.name)),a.filter||(f=this.recurse(a.callee,!0)),a.filter?function(a,d,e,g){for(var m=
[],q=0;q<h.length;++q)m.push(h[q](a,d,e,g));a=f.apply(t,m,g);return c?{context:t,name:t,value:a}:a}:function(a,d,e,r){var m=f(a,d,e,r),q;if(null!=m.value){oa(m.context,g.expression);ld(m.value,g.expression);q=[];for(var t=0;t<h.length;++t)q.push(oa(h[t](a,d,e,r),g.expression));q=oa(m.value.apply(m.context,q),g.expression)}return c?{value:q}:q};case q.AssignmentExpression:return e=this.recurse(a.left,!0,1),f=this.recurse(a.right),function(a,d,h,r){var m=e(a,d,h,r);a=f(a,d,h,r);oa(m.value,g.expression);
m.context[m.name]=a;return c?{value:a}:a};case q.ArrayExpression:return h=[],m(a.elements,function(a){h.push(g.recurse(a))}),function(a,d,e,f){for(var g=[],m=0;m<h.length;++m)g.push(h[m](a,d,e,f));return c?{value:g}:g};case q.ObjectExpression:return h=[],m(a.properties,function(a){h.push({key:a.key.type===q.Identifier?a.key.name:""+a.key.value,value:g.recurse(a.value)})}),function(a,d,e,f){for(var g={},m=0;m<h.length;++m)g[h[m].key]=h[m].value(a,d,e,f);return c?{value:g}:g};case q.ThisExpression:return function(a){return c?
{value:a}:a};case q.NGValueParameter:return function(a,d,e,f){return c?{value:e}:e}}},"unary+":function(a,c){return function(d,e,f,g){d=a(d,e,f,g);d=w(d)?+d:0;return c?{value:d}:d}},"unary-":function(a,c){return function(d,e,f,g){d=a(d,e,f,g);d=w(d)?-d:0;return c?{value:d}:d}},"unary!":function(a,c){return function(d,e,f,g){d=!a(d,e,f,g);return c?{value:d}:d}},"binary+":function(a,c,d){return function(e,f,g,h){var l=a(e,f,g,h);e=c(e,f,g,h);l=md(l,e);return d?{value:l}:l}},"binary-":function(a,c,d){return function(e,
f,g,h){var l=a(e,f,g,h);e=c(e,f,g,h);l=(w(l)?l:0)-(w(e)?e:0);return d?{value:l}:l}},"binary*":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)*c(e,f,g,h);return d?{value:e}:e}},"binary/":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)/c(e,f,g,h);return d?{value:e}:e}},"binary%":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)%c(e,f,g,h);return d?{value:e}:e}},"binary===":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)===c(e,f,g,h);return d?{value:e}:e}},"binary!==":function(a,
c,d){return function(e,f,g,h){e=a(e,f,g,h)!==c(e,f,g,h);return d?{value:e}:e}},"binary==":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)==c(e,f,g,h);return d?{value:e}:e}},"binary!=":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)!=c(e,f,g,h);return d?{value:e}:e}},"binary<":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)<c(e,f,g,h);return d?{value:e}:e}},"binary>":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)>c(e,f,g,h);return d?{value:e}:e}},"binary<=":function(a,c,d){return function(e,
f,g,h){e=a(e,f,g,h)<=c(e,f,g,h);return d?{value:e}:e}},"binary>=":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)>=c(e,f,g,h);return d?{value:e}:e}},"binary&&":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)&&c(e,f,g,h);return d?{value:e}:e}},"binary||":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)||c(e,f,g,h);return d?{value:e}:e}},"ternary?:":function(a,c,d,e){return function(f,g,h,l){f=a(f,g,h,l)?c(f,g,h,l):d(f,g,h,l);return e?{value:f}:f}},value:function(a,c){return function(){return c?
{context:t,name:t,value:a}:a}},identifier:function(a,c,d,e,f){return function(g,h,l,k){g=h&&a in h?h:g;e&&1!==e&&g&&!g[a]&&(g[a]={});h=g?g[a]:t;c&&oa(h,f);return d?{context:g,name:a,value:h}:h}},computedMember:function(a,c,d,e,f){return function(g,h,l,k){var n=a(g,h,l,k),m,s;null!=n&&(m=c(g,h,l,k),Ca(m,f),e&&1!==e&&n&&!n[m]&&(n[m]={}),s=n[m],oa(s,f));return d?{context:n,name:m,value:s}:s}},nonComputedMember:function(a,c,d,e,f,g){return function(h,l,k,n){h=a(h,l,k,n);f&&1!==f&&h&&!h[c]&&(h[c]={});
l=null!=h?h[c]:t;(d||Fb(c))&&oa(l,g);return e?{context:h,name:c,value:l}:l}},inputs:function(a,c){return function(d,e,f,g){return g?g[c]:a(d,e,f)}}};var hc=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d;this.ast=new q(this.lexer);this.astCompiler=d.csp?new sd(this.ast,c):new rd(this.ast,c)};hc.prototype={constructor:hc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};ga();ga();var Yf=Object.prototype.valueOf,Da=J("$sce"),pa={HTML:"html",CSS:"css",URL:"url",
RESOURCE_URL:"resourceUrl",JS:"js"},ea=J("$compile"),X=U.createElement("a"),wd=Ba(O.location.href);xd.$inject=["$document"];Lc.$inject=["$provide"];yd.$inject=["$locale"];Ad.$inject=["$locale"];var Dd=".",hg={yyyy:Y("FullYear",4),yy:Y("FullYear",2,0,!0),y:Y("FullYear",1),MMMM:Hb("Month"),MMM:Hb("Month",!0),MM:Y("Month",2,1),M:Y("Month",1,1),dd:Y("Date",2),d:Y("Date",1),HH:Y("Hours",2),H:Y("Hours",1),hh:Y("Hours",2,-12),h:Y("Hours",1,-12),mm:Y("Minutes",2),m:Y("Minutes",1),ss:Y("Seconds",2),s:Y("Seconds",
1),sss:Y("Milliseconds",3),EEEE:Hb("Day"),EEE:Hb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a,c,d){a=-1*d;return a=(0<=a?"+":"")+(Gb(Math[0<a?"floor":"ceil"](a/60),2)+Gb(Math.abs(a%60),2))},ww:Fd(2),w:Fd(1),G:jc,GG:jc,GGG:jc,GGGG:function(a,c){return 0>=a.getFullYear()?c.ERANAMES[0]:c.ERANAMES[1]}},gg=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,fg=/^\-?\d+$/;zd.$inject=["$locale"];var cg=ra(M),dg=ra(rb);Bd.$inject=
["$parse"];var ie=ra({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref)return function(a,c){if("a"===c[0].nodeName.toLowerCase()){var f="[object SVGAnimatedString]"===sa.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}}),sb={};m(Ab,function(a,c){function d(a,d,f){a.$watch(f[e],function(a){f.$set(c,!!a)})}if("multiple"!=a){var e=wa("ng-"+c),f=d;"checked"===a&&(f=function(a,c,f){f.ngModel!==f[e]&&d(a,c,f)});sb[e]=function(){return{restrict:"A",
priority:100,link:f}}}});m(Uc,function(a,c){sb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(jg))){f.$set("ngPattern",new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});m(["src","srcset","href"],function(a){var c=wa("ng-"+a);sb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===sa.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",
g=null);f.$observe(c,function(c){c?(f.$set(h,c),Ua&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var Ib={$addControl:v,$$renameControl:function(a,c){a.$name=c},$removeControl:v,$setValidity:v,$setDirty:v,$setPristine:v,$setSubmitted:v};Gd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Od=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:Gd,compile:function(d,e){d.addClass(Va).addClass(mb);var f=e.name?"name":a&&e.ngForm?"ngForm":
!1;return{pre:function(a,d,e,k){if(!("action"in e)){var n=function(c){a.$apply(function(){k.$commitViewValue();k.$setSubmitted()});c.preventDefault()};d[0].addEventListener("submit",n,!1);d.on("$destroy",function(){c(function(){d[0].removeEventListener("submit",n,!1)},0,!1)})}var m=k.$$parentForm;f&&(Eb(a,k.$name,k,k.$name),e.$observe(f,function(c){k.$name!==c&&(Eb(a,k.$name,t,k.$name),m.$$renameControl(k,c),Eb(a,k.$name,k,k.$name))}));d.on("$destroy",function(){m.$removeControl(k);f&&Eb(a,e[f],t,
k.$name);P(k,Ib)})}}}}}]},je=Od(),we=Od(!0),ig=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,rg=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,sg=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,tg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Pd=/^(\d{4})-(\d{2})-(\d{2})$/,Qd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,mc=/^(\d{4})-W(\d\d)$/,Rd=/^(\d{4})-(\d\d)$/,
Sd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Td={text:function(a,c,d,e,f,g){kb(a,c,d,e,f,g);kc(e)},date:lb("date",Pd,Kb(Pd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":lb("datetimelocal",Qd,Kb(Qd,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:lb("time",Sd,Kb(Sd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:lb("week",mc,function(a,c){if(aa(a))return a;if(L(a)){mc.lastIndex=0;var d=mc.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,h=0,l=0,k=Ed(e),f=7*(f-1);c&&(d=c.getHours(),g=
c.getMinutes(),h=c.getSeconds(),l=c.getMilliseconds());return new Date(e,0,k.getDate()+f,d,g,h,l)}}return NaN},"yyyy-Www"),month:lb("month",Rd,Kb(Rd,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){Id(a,c,d,e);kb(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:tg.test(a)?parseFloat(a):t});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!V(a))throw Lb("numfmt",a);a=a.toString()}return a});if(w(d.min)||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||
A(h)||a>=h};d.$observe("min",function(a){w(a)&&!V(a)&&(a=parseFloat(a,10));h=V(a)&&!isNaN(a)?a:t;e.$validate()})}if(w(d.max)||d.ngMax){var l;e.$validators.max=function(a){return e.$isEmpty(a)||A(l)||a<=l};d.$observe("max",function(a){w(a)&&!V(a)&&(a=parseFloat(a,10));l=V(a)&&!isNaN(a)?a:t;e.$validate()})}},url:function(a,c,d,e,f,g){kb(a,c,d,e,f,g);kc(e);e.$$parserName="url";e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||rg.test(d)}},email:function(a,c,d,e,f,g){kb(a,c,d,e,f,g);kc(e);
e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||sg.test(d)}},radio:function(a,c,d,e){A(d.name)&&c.attr("name",++nb);c.on("click",function(a){c[0].checked&&e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,l){var k=Jd(l,a,"ngTrueValue",d.ngTrueValue,!0),n=Jd(l,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&
a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return!1===a};e.$formatters.push(function(a){return ka(a,k)});e.$parsers.push(function(a){return a?k:n})},hidden:v,button:v,submit:v,reset:v,file:v},Fc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,g,h,l){l[0]&&(Td[M(h.type)]||Td.text)(f,g,h,l[0],c,a,d,e)}}}}],ug=/^(true|false|\d+)$/,Oe=function(){return{restrict:"A",priority:100,compile:function(a,
c){return ug.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},oe=["$compile",function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===t?"":a})}}}}],qe=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));
c.$$addBindingInfo(f,d.expressions);f=f[0];g.$observe("ngBindTemplate",function(a){f.textContent=a===t?"":a})}}}}],pe=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",compile:function(e,f){var g=c(f.ngBindHtml),h=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],Ne=ra({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),
re=lc("",!0),te=lc("Odd",0),se=lc("Even",1),ue=Ma({compile:function(a,c){c.$set("ngCloak",t);a.removeClass("ng-cloak")}}),ve=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Kc={},vg={blur:!0,focus:!0};m("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=wa("ng-"+a);Kc[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var h=
d(g[c],null,!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};vg[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var ye=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,l,k;c.$watch(e.ngIf,function(c){c?l||g(function(c,f){l=f;c[c.length++]=U.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(k&&(k.remove(),k=null),l&&(l.$destroy(),l=null),h&&(k=
qb(h.clone),a.leave(k).then(function(){k=null}),h=null))})}}}],ze=["$templateRequest","$anchorScroll","$animate",function(a,c,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ca.noop,compile:function(e,f){var g=f.ngInclude||f.src,h=f.onload||"",l=f.autoscroll;return function(e,f,m,s,q){var t=0,F,u,p,v=function(){u&&(u.remove(),u=null);F&&(F.$destroy(),F=null);p&&(d.leave(p).then(function(){u=null}),u=p,p=null)};e.$watch(g,function(g){var m=function(){!w(l)||l&&!e.$eval(l)||
c()},r=++t;g?(a(g,!0).then(function(a){if(r===t){var c=e.$new();s.template=a;a=q(c,function(a){v();d.enter(a,null,f).then(m)});F=c;p=a;F.$emit("$includeContentLoaded",g);e.$eval(h)}},function(){r===t&&(v(),e.$emit("$includeContentError",g))}),e.$emit("$includeContentRequested",g)):(v(),s.template=null)})}}}}],Qe=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Nc(f.template,U).childNodes)(c,function(a){d.append(a)},
{futureParentElement:d})):(d.html(f.template),a(d.contents())(c))}}}],Ae=Ma({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),Me=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?R(f):f;e.$parsers.push(function(a){if(!A(a)){var c=[];a&&m(a.split(h),function(a){a&&c.push(g?R(a):a)});return c}});e.$formatters.push(function(a){return G(a)?a.join(f):t});e.$isEmpty=function(a){return!a||
!a.length}}}},mb="ng-valid",Kd="ng-invalid",Va="ng-pristine",Jb="ng-dirty",Md="ng-pending",Lb=new J("ngModel"),wg=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,h,l,k,n){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=t;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=
!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=t;this.$name=n(d.name||"",!1)(a);var r=f(d.ngModel),s=r.assign,q=r,C=s,F=null,u,p=this;this.$$setOptions=function(a){if((p.$options=a)&&a.getterSetter){var c=f(d.ngModel+"()"),g=f(d.ngModel+"($$$p)");q=function(a){var d=r(a);z(d)&&(d=c(a));return d};C=function(a,c){z(r(a))?g(a,{$$$p:p.$modelValue}):s(a,p.$modelValue)}}else if(!r.assign)throw Lb("nonassign",d.ngModel,ua(e));};this.$render=v;this.$isEmpty=function(a){return A(a)||
""===a||null===a||a!==a};var K=e.inheritedData("$formController")||Ib,y=0;Hd({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,c){delete a[c]},parentForm:K,$animate:g});this.$setPristine=function(){p.$dirty=!1;p.$pristine=!0;g.removeClass(e,Jb);g.addClass(e,Va)};this.$setDirty=function(){p.$dirty=!0;p.$pristine=!1;g.removeClass(e,Va);g.addClass(e,Jb);K.$setDirty()};this.$setUntouched=function(){p.$touched=!1;p.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=
function(){p.$touched=!0;p.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(F);p.$viewValue=p.$$lastCommittedViewValue;p.$render()};this.$validate=function(){if(!V(p.$modelValue)||!isNaN(p.$modelValue)){var a=p.$$rawModelValue,c=p.$valid,d=p.$modelValue,e=p.$options&&p.$options.allowInvalid;p.$$runValidators(a,p.$$lastCommittedViewValue,function(f){e||c===f||(p.$modelValue=f?a:t,p.$modelValue!==d&&p.$$writeModelToScope())})}};this.$$runValidators=
function(a,c,d){function e(){var d=!0;m(p.$validators,function(e,f){var h=e(a,c);d=d&&h;g(f,h)});return d?!0:(m(p.$asyncValidators,function(a,c){g(c,null)}),!1)}function f(){var d=[],e=!0;m(p.$asyncValidators,function(f,h){var k=f(a,c);if(!k||!z(k.then))throw Lb("$asyncValidators",k);g(h,t);d.push(k.then(function(){g(h,!0)},function(a){e=!1;g(h,!1)}))});d.length?k.all(d).then(function(){h(e)},v):h(!0)}function g(a,c){l===y&&p.$setValidity(a,c)}function h(a){l===y&&d(a)}y++;var l=y;(function(){var a=
p.$$parserName||"parse";if(u===t)g(a,null);else return u||(m(p.$validators,function(a,c){g(c,null)}),m(p.$asyncValidators,function(a,c){g(c,null)})),g(a,u),u;return!0})()?e()?f():h(!1):h(!1)};this.$commitViewValue=function(){var a=p.$viewValue;h.cancel(F);if(p.$$lastCommittedViewValue!==a||""===a&&p.$$hasNativeValidators)p.$$lastCommittedViewValue=a,p.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var c=p.$$lastCommittedViewValue;if(u=A(c)?t:!0)for(var d=
0;d<p.$parsers.length;d++)if(c=p.$parsers[d](c),A(c)){u=!1;break}V(p.$modelValue)&&isNaN(p.$modelValue)&&(p.$modelValue=q(a));var e=p.$modelValue,f=p.$options&&p.$options.allowInvalid;p.$$rawModelValue=c;f&&(p.$modelValue=c,p.$modelValue!==e&&p.$$writeModelToScope());p.$$runValidators(c,p.$$lastCommittedViewValue,function(a){f||(p.$modelValue=a?c:t,p.$modelValue!==e&&p.$$writeModelToScope())})};this.$$writeModelToScope=function(){C(a,p.$modelValue);m(p.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};
this.$setViewValue=function(a,c){p.$viewValue=a;p.$options&&!p.$options.updateOnDefault||p.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=function(c){var d=0,e=p.$options;e&&w(e.debounce)&&(e=e.debounce,V(e)?d=e:V(e[c])?d=e[c]:V(e["default"])&&(d=e["default"]));h.cancel(F);d?F=h(function(){p.$commitViewValue()},d):l.$$phase?p.$commitViewValue():a.$apply(function(){p.$commitViewValue()})};a.$watch(function(){var c=q(a);if(c!==p.$modelValue&&(p.$modelValue===p.$modelValue||c===c)){p.$modelValue=
p.$$rawModelValue=c;u=t;for(var d=p.$formatters,e=d.length,f=c;e--;)f=d[e](f);p.$viewValue!==f&&(p.$viewValue=p.$$lastCommittedViewValue=f,p.$render(),p.$$runValidators(c,f,v))}return c})}],Le=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:wg,priority:1,compile:function(c){c.addClass(Va).addClass("ng-untouched").addClass(mb);return{pre:function(a,c,f,g){var h=g[0],l=g[1]||Ib;h.$$setOptions(g[2]&&g[2].$options);l.$addControl(h);f.$observe("name",
function(a){h.$name!==a&&l.$$renameControl(h,a)});a.$on("$destroy",function(){l.$removeControl(h)})},post:function(c,e,f,g){var h=g[0];if(h.$options&&h.$options.updateOn)e.on(h.$options.updateOn,function(a){h.$$debounceViewValueCommit(a&&a.type)});e.on("blur",function(e){h.$touched||(a.$$phase?c.$evalAsync(h.$setTouched):c.$apply(h.$setTouched))})}}}}}],xg=/(\s+|^)default(\s+|$)/,Pe=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=fa(a.$eval(c.ngModelOptions));
this.$options.updateOn!==t?(this.$options.updateOnDefault=!1,this.$options.updateOn=R(this.$options.updateOn.replace(xg,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Be=Ma({terminal:!0,priority:1E3}),yg=J("ngOptions"),zg=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
Je=["$compile","$parse",function(a,c){function d(a,d,e){function f(a,c,d,e,g){this.selectValue=a;this.viewValue=c;this.label=d;this.group=e;this.disabled=g}function n(a){var c;if(!q&&Ea(a))c=a;else{c=[];for(var d in a)a.hasOwnProperty(d)&&"$"!==d.charAt(0)&&c.push(d)}return c}var m=a.match(zg);if(!m)throw yg("iexp",a,ua(d));var s=m[5]||m[7],q=m[6];a=/ as /.test(m[0])&&m[1];var t=m[9];d=c(m[2]?m[1]:s);var v=a&&c(a)||d,u=t&&c(t),p=t?function(a,c){return u(e,c)}:function(a){return Ga(a)},w=function(a,
c){return p(a,z(a,c))},y=c(m[2]||m[1]),A=c(m[3]||""),B=c(m[4]||""),N=c(m[8]),D={},z=q?function(a,c){D[q]=c;D[s]=a;return D}:function(a){D[s]=a;return D};return{trackBy:t,getTrackByValue:w,getWatchables:c(N,function(a){var c=[];a=a||[];for(var d=n(a),f=d.length,g=0;g<f;g++){var h=a===d?g:d[g],k=z(a[h],h),h=p(a[h],k);c.push(h);if(m[2]||m[1])h=y(e,k),c.push(h);m[4]&&(k=B(e,k),c.push(k))}return c}),getOptions:function(){for(var a=[],c={},d=N(e)||[],g=n(d),h=g.length,m=0;m<h;m++){var r=d===g?m:g[m],s=
z(d[r],r),q=v(e,s),r=p(q,s),u=y(e,s),x=A(e,s),s=B(e,s),q=new f(r,q,u,x,s);a.push(q);c[r]=q}return{items:a,selectValueMap:c,getOptionFromViewValue:function(a){return c[w(a)]},getViewValueFromOption:function(a){return t?ca.copy(a.viewValue):a.viewValue}}}}}var e=U.createElement("option"),f=U.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","?ngModel"],link:function(c,h,l,k){function n(a,c){a.element=c;c.disabled=a.disabled;a.value!==c.value&&(c.value=a.selectValue);a.label!==
c.label&&(c.label=a.label,c.textContent=a.label)}function r(a,c,d,e){c&&M(c.nodeName)===d?d=c:(d=e.cloneNode(!1),c?a.insertBefore(d,c):a.appendChild(d));return d}function s(a){for(var c;a;)c=a.nextSibling,Xb(a),a=c}function q(a){var c=p&&p[0],d=N&&N[0];if(c||d)for(;a&&(a===c||a===d);)a=a.nextSibling;return a}function t(){var a=D&&u.readValue();D=z.getOptions();var c={},d=h[0].firstChild;B&&h.prepend(p);d=q(d);D.items.forEach(function(a){var g,k;a.group?(g=c[a.group],g||(g=r(h[0],d,"optgroup",f),d=
g.nextSibling,g.label=a.group,g=c[a.group]={groupElement:g,currentOptionElement:g.firstChild}),k=r(g.groupElement,g.currentOptionElement,"option",e),n(a,k),g.currentOptionElement=k.nextSibling):(k=r(h[0],d,"option",e),n(a,k),d=k.nextSibling)});Object.keys(c).forEach(function(a){s(c[a].currentOptionElement)});s(d);v.$render();if(!v.$isEmpty(a)){var g=u.readValue();(z.trackBy?ka(a,g):a===g)||(v.$setViewValue(g),v.$render())}}var v=k[1];if(v){var u=k[0];k=l.multiple;for(var p,w=0,A=h.children(),I=A.length;w<
I;w++)if(""===A[w].value){p=A.eq(w);break}var B=!!p,N=y(e.cloneNode(!1));N.val("?");var D,z=d(l.ngOptions,h,c);k?(v.$isEmpty=function(a){return!a||0===a.length},u.writeValue=function(a){D.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){(a=D.getOptionFromViewValue(a))&&!a.disabled&&(a.element.selected=!0)})},u.readValue=function(){var a=h.val()||[],c=[];m(a,function(a){a=D.selectValueMap[a];a.disabled||c.push(D.getViewValueFromOption(a))});return c},z.trackBy&&c.$watchCollection(function(){if(G(v.$viewValue))return v.$viewValue.map(function(a){return z.getTrackByValue(a)})},
function(){v.$render()})):(u.writeValue=function(a){var c=D.getOptionFromViewValue(a);c&&!c.disabled?h[0].value!==c.selectValue&&(N.remove(),B||p.remove(),h[0].value=c.selectValue,c.element.selected=!0,c.element.setAttribute("selected","selected")):null===a||B?(N.remove(),B||h.prepend(p),h.val(""),p.prop("selected",!0),p.attr("selected",!0)):(B||p.remove(),h.prepend(N),h.val("?"),N.prop("selected",!0),N.attr("selected",!0))},u.readValue=function(){var a=D.selectValueMap[h.val()];return a&&!a.disabled?
(B||p.remove(),N.remove(),D.getViewValueFromOption(a)):null},z.trackBy&&c.$watch(function(){return z.getTrackByValue(v.$viewValue)},function(){v.$render()}));B?(p.remove(),a(p)(c),p.removeClass("ng-scope")):p=y(e.cloneNode(!1));t();c.$watchCollection(z.getWatchables,t)}}}}],Ce=["$locale","$interpolate","$log",function(a,c,d){var e=/{}/g,f=/^when(Minus)?(.+)$/;return{link:function(g,h,l){function k(a){h.text(a||"")}var n=l.count,r=l.$attr.when&&h.attr(l.$attr.when),s=l.offset||0,q=g.$eval(r)||{},t=
{},w=c.startSymbol(),u=c.endSymbol(),p=w+n+"-"+s+u,y=ca.noop,z;m(l,function(a,c){var d=f.exec(c);d&&(d=(d[1]?"-":"")+M(d[2]),q[d]=h.attr(l.$attr[c]))});m(q,function(a,d){t[d]=c(a.replace(e,p))});g.$watch(n,function(c){var e=parseFloat(c),f=isNaN(e);f||e in q||(e=a.pluralCat(e-s));e===z||f&&V(z)&&isNaN(z)||(y(),f=t[e],A(f)?(null!=c&&d.debug("ngPluralize: no rule defined for '"+e+"' in "+r),y=v,k()):y=g.$watch(f,k),z=e)})}}}],De=["$parse","$animate",function(a,c){var d=J("ngRepeat"),e=function(a,c,
d,e,k,m,r){a[d]=e;k&&(a[k]=m);a.$index=c;a.$first=0===c;a.$last=c===r-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,l=U.createComment(" end ngRepeat: "+h+" "),k=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!k)throw d("iexp",h);var n=k[1],r=k[2],s=k[3],q=k[4],k=n.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
if(!k)throw d("iidexp",n);var v=k[3]||k[1],w=k[2];if(s&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(s)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(s)))throw d("badident",s);var u,p,z,A,I={$id:Ga};q?u=a(q):(z=function(a,c){return Ga(c)},A=function(a){return a});return function(a,f,g,k,n){u&&(p=function(c,d,e){w&&(I[w]=c);I[v]=d;I.$index=e;return u(a,I)});var q=ga();a.$watchCollection(r,function(g){var k,r,u=f[0],x,D=ga(),I,H,L,G,M,J,O;s&&(a[s]=g);if(Ea(g))M=
g,r=p||z;else for(O in r=p||A,M=[],g)g.hasOwnProperty(O)&&"$"!==O.charAt(0)&&M.push(O);I=M.length;O=Array(I);for(k=0;k<I;k++)if(H=g===M?k:M[k],L=g[H],G=r(H,L,k),q[G])J=q[G],delete q[G],D[G]=J,O[k]=J;else{if(D[G])throw m(O,function(a){a&&a.scope&&(q[a.id]=a)}),d("dupes",h,G,L);O[k]={id:G,scope:t,clone:t};D[G]=!0}for(x in q){J=q[x];G=qb(J.clone);c.leave(G);if(G[0].parentNode)for(k=0,r=G.length;k<r;k++)G[k].$$NG_REMOVED=!0;J.scope.$destroy()}for(k=0;k<I;k++)if(H=g===M?k:M[k],L=g[H],J=O[k],J.scope){x=
u;do x=x.nextSibling;while(x&&x.$$NG_REMOVED);J.clone[0]!=x&&c.move(qb(J.clone),null,y(u));u=J.clone[J.clone.length-1];e(J.scope,k,v,L,w,H,I)}else n(function(a,d){J.scope=d;var f=l.cloneNode(!1);a[a.length++]=f;c.enter(a,null,y(u));u=f;J.clone=a;D[J.id]=J;e(J.scope,k,v,L,w,H,I)});q=D})}}}}],Ee=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],xe=["$animate",
function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Fe=Ma(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&m(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Ge=["$animate",function(a){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],l=[],k=[],n=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||
e.on,function(c){var d,e;d=0;for(e=l.length;d<e;++d)a.cancel(l[d]);d=l.length=0;for(e=k.length;d<e;++d){var q=qb(h[d].clone);k[d].$destroy();(l[d]=a.leave(q)).then(n(l,d))}h.length=0;k.length=0;(g=f.cases["!"+c]||f.cases["?"])&&m(g,function(c){c.transclude(function(d,e){k.push(e);var f=c.element;d[d.length++]=U.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],He=Ma({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,
f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),Ie=Ma({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),Ke=Ma({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw J("ngTransclude")("orphan",ua(c));f(function(a){c.empty();c.append(a)})}}),ke=["$templateCache",function(a){return{restrict:"E",terminal:!0,
compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Ag={$setViewValue:v,$render:v},Bg=["$element","$scope","$attrs",function(a,c,d){var e=this,f=new Sa;e.ngModelCtrl=Ag;e.unknownOption=y(U.createElement("option"));e.renderUnknownOption=function(c){c="? "+Ga(c)+" ?";e.unknownOption.val(c);a.prepend(e.unknownOption);a.val(c)};c.$on("$destroy",function(){e.renderUnknownOption=v});e.removeUnknownOption=function(){e.unknownOption.parent()&&e.unknownOption.remove()};e.readValue=
function(){e.removeUnknownOption();return a.val()};e.writeValue=function(c){e.hasOption(c)?(e.removeUnknownOption(),a.val(c),""===c&&e.emptyOption.prop("selected",!0)):null==c&&e.emptyOption?(e.removeUnknownOption(),a.val("")):e.renderUnknownOption(c)};e.addOption=function(a,c){Ra(a,'"option value"');""===a&&(e.emptyOption=c);var d=f.get(a)||0;f.put(a,d+1)};e.removeOption=function(a){var c=f.get(a);c&&(1===c?(f.remove(a),""===a&&(e.emptyOption=t)):f.put(a,c-1))};e.hasOption=function(a){return!!f.get(a)}}],
le=function(){return{restrict:"E",require:["select","?ngModel"],controller:Bg,link:function(a,c,d,e){var f=e[1];if(f){var g=e[0];g.ngModelCtrl=f;f.$render=function(){g.writeValue(f.$viewValue)};c.on("change",function(){a.$apply(function(){f.$setViewValue(g.readValue())})});if(d.multiple){g.readValue=function(){var a=[];m(c.find("option"),function(c){c.selected&&a.push(c.value)});return a};g.writeValue=function(a){var d=new Sa(a);m(c.find("option"),function(a){a.selected=w(d.get(a.value))})};var h,
l=NaN;a.$watch(function(){l!==f.$viewValue||ka(h,f.$viewValue)||(h=ia(f.$viewValue),f.$render());l=f.$viewValue});f.$isEmpty=function(a){return!a||0===a.length}}}}}},ne=["$interpolate",function(a){function c(a){a[0].hasAttribute("selected")&&(a[0].selected=!0)}return{restrict:"E",priority:100,compile:function(d,e){if(A(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),m=k.data("$selectController")||k.parent().data("$selectController");m&&m.ngModelCtrl&&
(f?a.$watch(f,function(a,f){e.$set("value",a);f!==a&&m.removeOption(f);m.addOption(a,d);m.ngModelCtrl.$render();c(d)}):(m.addOption(e.value,d),m.ngModelCtrl.$render(),c(d)),d.on("$destroy",function(){m.removeOption(e.value);m.ngModelCtrl.$render()}))}}}}],me=ra({restrict:"E",terminal:!1}),Hc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},
Gc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){L(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw J("ngPattern")("noregexp",g,a,ua(c));f=a||t;e.$validate()});e.$validators.pattern=function(a){return e.$isEmpty(a)||A(f)||f.test(a)}}}}},Jc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=-1;d.$observe("maxlength",function(a){a=W(a);f=isNaN(a)?-1:a;e.$validate()});
e.$validators.maxlength=function(a,c){return 0>f||e.$isEmpty(c)||c.length<=f}}}}},Ic=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=W(a)||0;e.$validate()});e.$validators.minlength=function(a,c){return e.$isEmpty(c)||c.length>=f}}}}};O.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(ce(),ee(ca),y(U).ready(function(){Zd(U,Ac)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map
;
/*
 AngularJS v1.4.3
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(n,h,p){'use strict';function E(a){var f=[];r(f,h.noop).chars(a);return f.join("")}function g(a,f){var d={},c=a.split(","),b;for(b=0;b<c.length;b++)d[f?h.lowercase(c[b]):c[b]]=!0;return d}function F(a,f){function d(a,b,d,l){b=h.lowercase(b);if(s[b])for(;e.last()&&t[e.last()];)c("",e.last());u[b]&&e.last()==b&&c("",b);(l=v[b]||!!l)||e.push(b);var m={};d.replace(G,function(b,a,f,c,d){m[a]=q(f||c||d||"")});f.start&&f.start(b,m,l)}function c(b,a){var c=0,d;if(a=h.lowercase(a))for(c=e.length-
1;0<=c&&e[c]!=a;c--);if(0<=c){for(d=e.length-1;d>=c;d--)f.end&&f.end(e[d]);e.length=c}}"string"!==typeof a&&(a=null===a||"undefined"===typeof a?"":""+a);var b,k,e=[],m=a,l;for(e.last=function(){return e[e.length-1]};a;){l="";k=!0;if(e.last()&&w[e.last()])a=a.replace(new RegExp("([\\W\\w]*)<\\s*\\/\\s*"+e.last()+"[^>]*>","i"),function(a,b){b=b.replace(H,"$1").replace(I,"$1");f.chars&&f.chars(q(b));return""}),c("",e.last());else{if(0===a.indexOf("\x3c!--"))b=a.indexOf("--",4),0<=b&&a.lastIndexOf("--\x3e",
b)===b&&(f.comment&&f.comment(a.substring(4,b)),a=a.substring(b+3),k=!1);else if(x.test(a)){if(b=a.match(x))a=a.replace(b[0],""),k=!1}else if(J.test(a)){if(b=a.match(y))a=a.substring(b[0].length),b[0].replace(y,c),k=!1}else K.test(a)&&((b=a.match(z))?(b[4]&&(a=a.substring(b[0].length),b[0].replace(z,d)),k=!1):(l+="<",a=a.substring(1)));k&&(b=a.indexOf("<"),l+=0>b?a:a.substring(0,b),a=0>b?"":a.substring(b),f.chars&&f.chars(q(l)))}if(a==m)throw L("badparse",a);m=a}c()}function q(a){if(!a)return"";A.innerHTML=
a.replace(/</g,"&lt;");return A.textContent}function B(a){return a.replace(/&/g,"&amp;").replace(M,function(a){var d=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(d-55296)+(a-56320)+65536)+";"}).replace(N,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function r(a,f){var d=!1,c=h.bind(a,a.push);return{start:function(a,k,e){a=h.lowercase(a);!d&&w[a]&&(d=a);d||!0!==C[a]||(c("<"),c(a),h.forEach(k,function(d,e){var k=h.lowercase(e),g="img"===a&&"src"===k||
"background"===k;!0!==O[k]||!0===D[k]&&!f(d,g)||(c(" "),c(e),c('="'),c(B(d)),c('"'))}),c(e?"/>":">"))},end:function(a){a=h.lowercase(a);d||!0!==C[a]||(c("</"),c(a),c(">"));a==d&&(d=!1)},chars:function(a){d||c(B(a))}}}var L=h.$$minErr("$sanitize"),z=/^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,y=/^<\/\s*([\w:-]+)[^>]*>/,G=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,K=/^</,J=/^<\//,H=/\x3c!--(.*?)--\x3e/g,x=/<!DOCTYPE([^>]*?)>/i,
I=/<!\[CDATA\[(.*?)]]\x3e/g,M=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,N=/([^\#-~| |!])/g,v=g("area,br,col,hr,img,wbr");n=g("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");p=g("rp,rt");var u=h.extend({},p,n),s=h.extend({},n,g("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),t=h.extend({},p,g("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var"));
n=g("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan,use");var w=g("script,style"),C=h.extend({},v,s,t,u,n),D=g("background,cite,href,longdesc,src,usemap,xlink:href");n=g("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width");
p=g("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",
!0);var O=h.extend({},D,p,n),A=document.createElement("pre");h.module("ngSanitize",[]).provider("$sanitize",function(){this.$get=["$$sanitizeUri",function(a){return function(f){var d=[];F(f,r(d,function(c,b){return!/^unsafe/.test(a(c,b))}));return d.join("")}}]});h.module("ngSanitize").filter("linky",["$sanitize",function(a){var f=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,d=/^mailto:/i;return function(c,b){function k(a){a&&g.push(E(a))}function e(a,
c){g.push("<a ");h.isDefined(b)&&g.push('target="',b,'" ');g.push('href="',a.replace(/"/g,"&quot;"),'">');k(c);g.push("</a>")}if(!c)return c;for(var m,l=c,g=[],n,p;m=l.match(f);)n=m[0],m[2]||m[4]||(n=(m[3]?"http://":"mailto:")+n),p=m.index,k(l.substr(0,p)),e(n,m[0].replace(d,"")),l=l.substring(p+m[0].length);k(l);return a(g.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map
;
/*
 AngularJS v1.4.3
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(F,t,W){'use strict';function ua(a,b,c){if(!a)throw ngMinErr("areq",b||"?",c||"required");return a}function va(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;X(a)&&(a=a.join(" "));X(b)&&(b=b.join(" "));return a+" "+b}function Ea(a){var b={};a&&(a.to||a.from)&&(b.to=a.to,b.from=a.from);return b}function ba(a,b,c){var d="";a=X(a)?a:a&&U(a)&&a.length?a.split(/\s+/):[];u(a,function(a,s){a&&0<a.length&&(d+=0<s?" ":"",d+=c?b+a:a+b)});return d}function Fa(a){if(a instanceof G)switch(a.length){case 0:return[];
case 1:if(1===a[0].nodeType)return a;break;default:return G(ka(a))}if(1===a.nodeType)return G(a)}function ka(a){if(!a[0])return a;for(var b=0;b<a.length;b++){var c=a[b];if(1==c.nodeType)return c}}function Ga(a,b,c){u(b,function(b){a.addClass(b,c)})}function Ha(a,b,c){u(b,function(b){a.removeClass(b,c)})}function ha(a){return function(b,c){c.addClass&&(Ga(a,b,c.addClass),c.addClass=null);c.removeClass&&(Ha(a,b,c.removeClass),c.removeClass=null)}}function ia(a){a=a||{};if(!a.$$prepared){var b=a.domOperation||
H;a.domOperation=function(){a.$$domOperationFired=!0;b();b=H};a.$$prepared=!0}return a}function ca(a,b){wa(a,b);xa(a,b)}function wa(a,b){b.from&&(a.css(b.from),b.from=null)}function xa(a,b){b.to&&(a.css(b.to),b.to=null)}function R(a,b,c){var d=(b.addClass||"")+" "+(c.addClass||""),e=(b.removeClass||"")+" "+(c.removeClass||"");a=Ia(a.attr("class"),d,e);ya(b,c);b.addClass=a.addClass?a.addClass:null;b.removeClass=a.removeClass?a.removeClass:null;return b}function Ia(a,b,c){function d(a){U(a)&&(a=a.split(" "));
var b={};u(a,function(a){a.length&&(b[a]=!0)});return b}var e={};a=d(a);b=d(b);u(b,function(a,b){e[b]=1});c=d(c);u(c,function(a,b){e[b]=1===e[b]?null:-1});var s={addClass:"",removeClass:""};u(e,function(b,c){var d,e;1===b?(d="addClass",e=!a[c]):-1===b&&(d="removeClass",e=a[c]);e&&(s[d].length&&(s[d]+=" "),s[d]+=c)});return s}function z(a){return a instanceof t.element?a[0]:a}function za(a,b,c){var d=Object.create(null),e=a.getComputedStyle(b)||{};u(c,function(a,b){var c=e[a];if(c){var k=c.charAt(0);
if("-"===k||"+"===k||0<=k)c=Ja(c);0===c&&(c=null);d[b]=c}});return d}function Ja(a){var b=0;a=a.split(/\s*,\s*/);u(a,function(a){"s"==a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));a=parseFloat(a)||0;b=b?Math.max(a,b):a});return b}function la(a){return 0===a||null!=a}function Aa(a,b){var c=O,d=a+"s";b?c+="Duration":d+=" linear all";return[c,d]}function ja(a,b){var c=b?"-"+b+"s":"";da(a,[ea,c]);return[ea,c]}function ma(a,b){var c=b?"paused":"",d=V+"PlayState";da(a,[d,c]);return[d,c]}function da(a,
b){a.style[b[0]]=b[1]}function Ba(){var a=Object.create(null);return{flush:function(){a=Object.create(null)},count:function(b){return(b=a[b])?b.total:0},get:function(b){return(b=a[b])&&b.value},put:function(b,c){a[b]?a[b].total++:a[b]={total:1,value:c}}}}var H=t.noop,ya=t.extend,G=t.element,u=t.forEach,X=t.isArray,U=t.isString,na=t.isObject,Ka=t.isUndefined,La=t.isDefined,Ca=t.isFunction,oa=t.isElement,O,pa,V,qa;F.ontransitionend===W&&F.onwebkittransitionend!==W?(O="WebkitTransition",pa="webkitTransitionEnd transitionend"):
(O="transition",pa="transitionend");F.onanimationend===W&&F.onwebkitanimationend!==W?(V="WebkitAnimation",qa="webkitAnimationEnd animationend"):(V="animation",qa="animationend");var ra=V+"Delay",sa=V+"Duration",ea=O+"Delay";F=O+"Duration";var Ma={transitionDuration:F,transitionDelay:ea,transitionProperty:O+"Property",animationDuration:sa,animationDelay:ra,animationIterationCount:V+"IterationCount"},Na={transitionDuration:F,transitionDelay:ea,animationDuration:sa,animationDelay:ra};t.module("ngAnimate",
[]).directive("ngAnimateChildren",[function(){return function(a,b,c){a=c.ngAnimateChildren;t.isString(a)&&0===a.length?b.data("$$ngAnimateChildren",!0):c.$observe("ngAnimateChildren",function(a){b.data("$$ngAnimateChildren","on"===a||"true"===a)})}}]).factory("$$rAFMutex",["$$rAF",function(a){return function(){var b=!1;a(function(){b=!0});return function(c){b?c():a(c)}}}]).factory("$$rAFScheduler",["$$rAF",function(a){function b(a){d.push([].concat(a));c()}function c(){if(d.length){for(var b=[],n=
0;n<d.length;n++){var h=d[n];h.shift()();h.length&&b.push(h)}d=b;e||a(function(){e||c()})}}var d=[],e;b.waitUntilQuiet=function(b){e&&e();e=a(function(){e=null;b();c()})};return b}]).factory("$$AnimateRunner",["$q","$$rAFMutex",function(a,b){function c(a){this.setHost(a);this._doneCallbacks=[];this._runInAnimationFrame=b();this._state=0}c.chain=function(a,b){function c(){if(n===a.length)b(!0);else a[n](function(a){!1===a?b(!1):(n++,c())})}var n=0;c()};c.all=function(a,b){function c(s){h=h&&s;++n===
a.length&&b(h)}var n=0,h=!0;u(a,function(a){a.done(c)})};c.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:H,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&
this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._runInAnimationFrame(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(u(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return c}]).provider("$$animateQueue",["$animateProvider",
function(a){function b(a,b,c,h){return d[a].some(function(a){return a(b,c,h)})}function c(a,b){a=a||{};var c=0<(a.addClass||"").length,d=0<(a.removeClass||"").length;return b?c&&d:c||d}var d=this.rules={skip:[],cancel:[],join:[]};d.join.push(function(a,b,d){return!b.structural&&c(b.options)});d.skip.push(function(a,b,d){return!b.structural&&!c(b.options)});d.skip.push(function(a,b,c){return"leave"==c.event&&b.structural});d.skip.push(function(a,b,c){return c.structural&&!b.structural});d.cancel.push(function(a,
b,c){return c.structural&&b.structural});d.cancel.push(function(a,b,c){return 2===c.state&&b.structural});d.cancel.push(function(a,b,c){a=b.options;c=c.options;return a.addClass&&a.addClass===c.removeClass||a.removeClass&&a.removeClass===c.addClass});this.$get=["$$rAF","$rootScope","$rootElement","$document","$$HashMap","$$animation","$$AnimateRunner","$templateRequest","$$jqLite",function(d,s,n,h,k,D,A,Z,I){function w(a,b){var c=z(a),f=[],m=l[b];m&&u(m,function(a){a.node.contains(c)&&f.push(a.callback)});
return f}function B(a,b,c,f){d(function(){u(w(b,a),function(a){a(b,c,f)})})}function r(a,S,p){function d(b,c,f,p){B(c,a,f,p);b.progress(c,f,p)}function g(b){Da(a,p);ca(a,p);p.domOperation();l.complete(!b)}var P,E;if(a=Fa(a))P=z(a),E=a.parent();p=ia(p);var l=new A;if(!P)return g(),l;X(p.addClass)&&(p.addClass=p.addClass.join(" "));X(p.removeClass)&&(p.removeClass=p.removeClass.join(" "));p.from&&!na(p.from)&&(p.from=null);p.to&&!na(p.to)&&(p.to=null);var e=[P.className,p.addClass,p.removeClass].join(" ");
if(!v(e))return g(),l;var M=0<=["enter","move","leave"].indexOf(S),h=!x||L.get(P),e=!h&&m.get(P)||{},k=!!e.state;h||k&&1==e.state||(h=!ta(a,E,S));if(h)return g(),l;M&&K(a);h={structural:M,element:a,event:S,close:g,options:p,runner:l};if(k){if(b("skip",a,h,e)){if(2===e.state)return g(),l;R(a,e.options,p);return e.runner}if(b("cancel",a,h,e))2===e.state?e.runner.end():e.structural?e.close():R(a,h.options,e.options);else if(b("join",a,h,e))if(2===e.state)R(a,p,{});else return S=h.event=e.event,p=R(a,
e.options,h.options),l}else R(a,p,{});(k=h.structural)||(k="animate"===h.event&&0<Object.keys(h.options.to||{}).length||c(h.options));if(!k)return g(),C(a),l;M&&f(E);var r=(e.counter||0)+1;h.counter=r;ga(a,1,h);s.$$postDigest(function(){var b=m.get(P),v=!b,b=b||{},e=a.parent()||[],E=0<e.length&&("animate"===b.event||b.structural||c(b.options));if(v||b.counter!==r||!E){v&&(Da(a,p),ca(a,p));if(v||M&&b.event!==S)p.domOperation(),l.end();E||C(a)}else S=!b.structural&&c(b.options,!0)?"setClass":b.event,
b.structural&&f(e),ga(a,2),b=D(a,S,b.options),b.done(function(b){g(!b);(b=m.get(P))&&b.counter===r&&C(z(a));d(l,S,"close",{})}),l.setHost(b),d(l,S,"start",{})});return l}function K(a){a=z(a).querySelectorAll("[data-ng-animate]");u(a,function(a){var b=parseInt(a.getAttribute("data-ng-animate")),c=m.get(a);switch(b){case 2:c.runner.end();case 1:c&&m.remove(a)}})}function C(a){a=z(a);a.removeAttribute("data-ng-animate");m.remove(a)}function E(a,b){return z(a)===z(b)}function f(a){a=z(a);do{if(!a||1!==
a.nodeType)break;var b=m.get(a);if(b){var f=a;!b.structural&&c(b.options)&&(2===b.state&&b.runner.end(),C(f))}a=a.parentNode}while(1)}function ta(a,b,c){var f=c=!1,d=!1,v;for((a=a.data("$ngAnimatePin"))&&(b=a);b&&b.length;){f||(f=E(b,n));a=b[0];if(1!==a.nodeType)break;var e=m.get(a)||{};d||(d=e.structural||L.get(a));if(Ka(v)||!0===v)a=b.data("$$ngAnimateChildren"),La(a)&&(v=a);if(d&&!1===v)break;f||(f=E(b,n),f||(a=b.data("$ngAnimatePin"))&&(b=a));c||(c=E(b,g));b=b.parent()}return(!d||v)&&f&&c}function ga(a,
b,c){c=c||{};c.state=b;a=z(a);a.setAttribute("data-ng-animate",b);c=(b=m.get(a))?ya(b,c):c;m.put(a,c)}var m=new k,L=new k,x=null,M=s.$watch(function(){return 0===Z.totalPendingRequests},function(a){a&&(M(),s.$$postDigest(function(){s.$$postDigest(function(){null===x&&(x=!0)})}))}),g=G(h[0].body),l={},P=a.classNameFilter(),v=P?function(a){return P.test(a)}:function(){return!0},Da=ha(I);return{on:function(a,b,c){b=ka(b);l[a]=l[a]||[];l[a].push({node:b,callback:c})},off:function(a,b,c){function f(a,
b,c){var d=ka(b);return a.filter(function(a){return!(a.node===d&&(!c||a.callback===c))})}var d=l[a];d&&(l[a]=1===arguments.length?null:f(d,b,c))},pin:function(a,b){ua(oa(a),"element","not an element");ua(oa(b),"parentElement","not an element");a.data("$ngAnimatePin",b)},push:function(a,b,c,f){c=c||{};c.domOperation=f;return r(a,b,c)},enabled:function(a,b){var c=arguments.length;if(0===c)b=!!x;else if(oa(a)){var f=z(a),d=L.get(f);1===c?b=!d:(b=!!b)?d&&L.remove(f):L.put(f,!0)}else b=x=!!a;return b}}}]}]).provider("$$animation",
["$animateProvider",function(a){function b(a){return a.data("$$animationRunner")}var c=this.drivers=[];this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$rAFScheduler",function(a,e,s,n,h){var k=[],D=ha(a),A=0,Z=0,I=[];return function(w,B,r){function K(a){a=a.hasAttribute("ng-animate-ref")?[a]:a.querySelectorAll("[ng-animate-ref]");var b=[];u(a,function(a){var c=a.getAttribute("ng-animate-ref");c&&c.length&&b.push(a)});return b}function C(a){var b=[],c={};u(a,function(a,f){var d=z(a.element),
m=0<=["enter","move"].indexOf(a.event),d=a.structural?K(d):[];if(d.length){var g=m?"to":"from";u(d,function(a){var b=a.getAttribute("ng-animate-ref");c[b]=c[b]||{};c[b][g]={animationID:f,element:G(a)}})}else b.push(a)});var f={},d={};u(c,function(c,m){var g=c.from,e=c.to;if(g&&e){var l=a[g.animationID],h=a[e.animationID],x=g.animationID.toString();if(!d[x]){var B=d[x]={structural:!0,beforeStart:function(){l.beforeStart();h.beforeStart()},close:function(){l.close();h.close()},classes:E(l.classes,h.classes),
from:l,to:h,anchors:[]};B.classes.length?b.push(B):(b.push(l),b.push(h))}d[x].anchors.push({out:g.element,"in":e.element})}else g=g?g.animationID:e.animationID,e=g.toString(),f[e]||(f[e]=!0,b.push(a[g]))});return b}function E(a,b){a=a.split(" ");b=b.split(" ");for(var c=[],f=0;f<a.length;f++){var d=a[f];if("ng-"!==d.substring(0,3))for(var g=0;g<b.length;g++)if(d===b[g]){c.push(d);break}}return c.join(" ")}function f(a){for(var b=c.length-1;0<=b;b--){var f=c[b];if(s.has(f)&&(f=s.get(f)(a)))return f}}
function ta(a,c){a.from&&a.to?(b(a.from.element).setHost(c),b(a.to.element).setHost(c)):b(a.element).setHost(c)}function ga(){var a=b(w);!a||"leave"===B&&r.$$domOperationFired||a.end()}function m(b){w.off("$destroy",ga);w.removeData("$$animationRunner");D(w,r);ca(w,r);r.domOperation();g&&a.removeClass(w,g);w.removeClass("ng-animate");x.complete(!b)}r=ia(r);var L=0<=["enter","move","leave"].indexOf(B),x=new n({end:function(){m()},cancel:function(){m(!0)}});if(!c.length)return m(),x;w.data("$$animationRunner",
x);var M=va(w.attr("class"),va(r.addClass,r.removeClass)),g=r.tempClasses;g&&(M+=" "+g,r.tempClasses=null);var l;L||(l=A,A+=1);k.push({element:w,classes:M,event:B,classBasedIndex:l,structural:L,options:r,beforeStart:function(){w.addClass("ng-animate");g&&a.addClass(w,g)},close:m});w.on("$destroy",ga);if(1<k.length)return x;e.$$postDigest(function(){Z=A;A=0;I.length=0;var a=[];u(k,function(c){b(c.element)&&a.push(c)});k.length=0;u(C(a),function(a){function c(){a.beforeStart();var d,g=a.close,e=a.anchors?
a.from.element||a.to.element:a.element;b(e)&&z(e).parentNode&&(e=f(a))&&(d=e.start);d?(d=d(),d.done(function(a){g(!a)}),ta(a,d)):g()}a.structural?c():(I.push({node:z(a.element),fn:c}),a.classBasedIndex===Z-1&&(I=I.sort(function(a,b){return b.node.contains(a.node)}).map(function(a){return a.fn}),h(I)))})});return x}}]}]).provider("$animateCss",["$animateProvider",function(a){var b=Ba(),c=Ba();this.$get=["$window","$$jqLite","$$AnimateRunner","$timeout","$document","$sniffer","$$rAFScheduler",function(a,
e,s,n,h,k,D){function A(a,b){var c=a.parentNode;return(c.$$ngAnimateParentKey||(c.$$ngAnimateParentKey=++r))+"-"+a.getAttribute("class")+"-"+b}function Z(h,f,B,k){var m;0<b.count(B)&&(m=c.get(B),m||(f=ba(f,"-stagger"),e.addClass(h,f),m=za(a,h,k),m.animationDuration=Math.max(m.animationDuration,0),m.transitionDuration=Math.max(m.transitionDuration,0),e.removeClass(h,f),c.put(B,m)));return m||{}}function I(a){C.push(a);D.waitUntilQuiet(function(){b.flush();c.flush();for(var a=K.offsetWidth+1,d=0;d<
C.length;d++)C[d](a);C.length=0})}function w(c,f,e){f=b.get(e);f||(f=za(a,c,Ma),"infinite"===f.animationIterationCount&&(f.animationIterationCount=1));b.put(e,f);c=f;e=c.animationDelay;f=c.transitionDelay;c.maxDelay=e&&f?Math.max(e,f):e||f;c.maxDuration=Math.max(c.animationDuration*c.animationIterationCount,c.transitionDuration);return c}var B=ha(e),r=0,K=z(h).body,C=[];return function(a,c){function d(){m()}function h(){m(!0)}function m(b){if(!(K||C&&D)){K=!0;D=!1;e.removeClass(a,Y);e.removeClass(a,
W);ma(g,!1);ja(g,!1);u(l,function(a){g.style[a[0]]=""});B(a,c);ca(a,c);if(c.onDone)c.onDone();p&&p.complete(!b)}}function L(a){q.blockTransition&&ja(g,a);q.blockKeyframeAnimation&&ma(g,!!a)}function x(){p=new s({end:d,cancel:h});m();return{$$willAnimate:!1,start:function(){return p},end:d}}function M(){function b(){if(!K){L(!1);u(l,function(a){g.style[a[0]]=a[1]});B(a,c);e.addClass(a,W);if(q.recalculateTimingStyles){fa=g.className+" "+Y;$=A(g,fa);y=w(g,fa,$);Q=y.maxDelay;H=Math.max(Q,0);J=y.maxDuration;
if(0===J){m();return}q.hasTransitions=0<y.transitionDuration;q.hasAnimations=0<y.animationDuration}if(q.applyTransitionDelay||q.applyAnimationDelay){Q="boolean"!==typeof c.delay&&la(c.delay)?parseFloat(c.delay):Q;H=Math.max(Q,0);var k;q.applyTransitionDelay&&(y.transitionDelay=Q,k=[ea,Q+"s"],l.push(k),g.style[k[0]]=k[1]);q.applyAnimationDelay&&(y.animationDelay=Q,k=[ra,Q+"s"],l.push(k),g.style[k[0]]=k[1])}F=1E3*H;G=1E3*J;if(c.easing){var r=c.easing;q.hasTransitions&&(k=O+"TimingFunction",l.push([k,
r]),g.style[k]=r);q.hasAnimations&&(k=V+"TimingFunction",l.push([k,r]),g.style[k]=r)}y.transitionDuration&&p.push(pa);y.animationDuration&&p.push(qa);x=Date.now();a.on(p.join(" "),h);n(d,F+1.5*G);xa(a,c)}}function d(){m()}function h(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||b.timeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-x,0)>=F&&b>=J&&(C=!0,m())}if(!K)if(g.parentNode){var x,p=[],k=function(a){if(C)D&&a&&(D=!1,m());else if(D=!a,y.animationDuration)if(a=
ma(g,D),D)l.push(a);else{var b=l,c=b.indexOf(a);0<=a&&b.splice(c,1)}},r=0<U&&(y.transitionDuration&&0===T.transitionDuration||y.animationDuration&&0===T.animationDuration)&&Math.max(T.animationDelay,T.transitionDelay);r?n(b,Math.floor(r*U*1E3),!1):b();t.resume=function(){k(!0)};t.pause=function(){k(!1)}}else m()}var g=z(a);if(!g||!g.parentNode)return x();c=ia(c);var l=[],r=a.attr("class"),v=Ea(c),K,D,C,p,t,H,F,J,G;if(0===c.duration||!k.animations&&!k.transitions)return x();var aa=c.event&&X(c.event)?
c.event.join(" "):c.event,R="",N="";aa&&c.structural?R=ba(aa,"ng-",!0):aa&&(R=aa);c.addClass&&(N+=ba(c.addClass,"-add"));c.removeClass&&(N.length&&(N+=" "),N+=ba(c.removeClass,"-remove"));c.applyClassesEarly&&N.length&&(B(a,c),N="");var Y=[R,N].join(" ").trim(),fa=r+" "+Y,W=ba(Y,"-active"),r=v.to&&0<Object.keys(v.to).length;if(!(0<(c.keyframeStyle||"").length||r||Y))return x();var $,T;0<c.stagger?(v=parseFloat(c.stagger),T={transitionDelay:v,animationDelay:v,transitionDuration:0,animationDuration:0}):
($=A(g,fa),T=Z(g,Y,$,Na));e.addClass(a,Y);c.transitionStyle&&(v=[O,c.transitionStyle],da(g,v),l.push(v));0<=c.duration&&(v=0<g.style[O].length,v=Aa(c.duration,v),da(g,v),l.push(v));c.keyframeStyle&&(v=[V,c.keyframeStyle],da(g,v),l.push(v));var U=T?0<=c.staggerIndex?c.staggerIndex:b.count($):0;(aa=0===U)&&ja(g,9999);var y=w(g,fa,$),Q=y.maxDelay;H=Math.max(Q,0);J=y.maxDuration;var q={};q.hasTransitions=0<y.transitionDuration;q.hasAnimations=0<y.animationDuration;q.hasTransitionAll=q.hasTransitions&&
"all"==y.transitionProperty;q.applyTransitionDuration=r&&(q.hasTransitions&&!q.hasTransitionAll||q.hasAnimations&&!q.hasTransitions);q.applyAnimationDuration=c.duration&&q.hasAnimations;q.applyTransitionDelay=la(c.delay)&&(q.applyTransitionDuration||q.hasTransitions);q.applyAnimationDelay=la(c.delay)&&q.hasAnimations;q.recalculateTimingStyles=0<N.length;if(q.applyTransitionDuration||q.applyAnimationDuration)J=c.duration?parseFloat(c.duration):J,q.applyTransitionDuration&&(q.hasTransitions=!0,y.transitionDuration=
J,v=0<g.style[O+"Property"].length,l.push(Aa(J,v))),q.applyAnimationDuration&&(q.hasAnimations=!0,y.animationDuration=J,l.push([sa,J+"s"]));if(0===J&&!q.recalculateTimingStyles)return x();null==c.duration&&0<y.transitionDuration&&(q.recalculateTimingStyles=q.recalculateTimingStyles||aa);F=1E3*H;G=1E3*J;c.skipBlocking||(q.blockTransition=0<y.transitionDuration,q.blockKeyframeAnimation=0<y.animationDuration&&0<T.animationDelay&&0===T.animationDuration);wa(a,c);q.blockTransition||ja(g,!1);L(J);return{$$willAnimate:!0,
end:d,start:function(){if(!K)return t={end:d,cancel:h,resume:null,pause:null},p=new s(t),I(M),p}}}}]}]).provider("$$animateCssDriver",["$$animationProvider",function(a){a.drivers.push("$$animateCssDriver");this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$document","$sniffer",function(a,c,d,e,s,n){function h(a){return a.replace(/\bng-\S+\b/g,"")}function k(a,b){U(a)&&(a=a.split(" "));U(b)&&(b=b.split(" "));return a.filter(function(a){return-1===b.indexOf(a)}).join(" ")}function D(c,
e,A){function D(a){var b={},c=z(a).getBoundingClientRect();u(["width","height","top","left"],function(a){var d=c[a];switch(a){case "top":d+=I.scrollTop;break;case "left":d+=I.scrollLeft}b[a]=Math.floor(d)+"px"});return b}function s(){var c=h(A.attr("class")||""),d=k(c,t),c=k(t,c),d=a(n,{to:D(A),addClass:"ng-anchor-in "+d,removeClass:"ng-anchor-out "+c,delay:!0});return d.$$willAnimate?d:null}function f(){n.remove();e.removeClass("ng-animate-shim");A.removeClass("ng-animate-shim")}var n=G(z(e).cloneNode(!0)),
t=h(n.attr("class")||"");e.addClass("ng-animate-shim");A.addClass("ng-animate-shim");n.addClass("ng-anchor");w.append(n);var m;c=function(){var c=a(n,{addClass:"ng-anchor-out",delay:!0,from:D(e)});return c.$$willAnimate?c:null}();if(!c&&(m=s(),!m))return f();var L=c||m;return{start:function(){function a(){c&&c.end()}var b,c=L.start();c.done(function(){c=null;if(!m&&(m=s()))return c=m.start(),c.done(function(){c=null;f();b.complete()}),c;f();b.complete()});return b=new d({end:a,cancel:a})}}}function A(a,
b,c,e){var h=t(a),f=t(b),k=[];u(e,function(a){(a=D(c,a.out,a["in"]))&&k.push(a)});if(h||f||0!==k.length)return{start:function(){function a(){u(b,function(a){a.end()})}var b=[];h&&b.push(h.start());f&&b.push(f.start());u(k,function(a){b.push(a.start())});var c=new d({end:a,cancel:a});d.all(b,function(a){c.complete(a)});return c}}}function t(c){var d=c.element,e=c.options||{};c.structural?(e.structural=e.applyClassesEarly=!0,e.event=c.event,"leave"===e.event&&(e.onDone=e.domOperation)):e.event=null;
c=a(d,e);return c.$$willAnimate?c:null}if(!n.animations&&!n.transitions)return H;var I=z(s).body;c=z(e);var w=G(I.parentNode===c?I:c);return function(a){return a.from&&a.to?A(a.from,a.to,a.classes,a.anchors):t(a)}}]}]).provider("$$animateJs",["$animateProvider",function(a){this.$get=["$injector","$$AnimateRunner","$$rAFMutex","$$jqLite",function(b,c,d,e){function s(c){c=X(c)?c:c.split(" ");for(var d=[],e={},A=0;A<c.length;A++){var n=c[A],s=a.$$registeredAnimations[n];s&&!e[n]&&(d.push(b.get(s)),e[n]=
!0)}return d}var n=ha(e);return function(a,b,d,e){function t(){e.domOperation();n(a,e)}function z(a,b,d,e,g){switch(d){case "animate":b=[b,e.from,e.to,g];break;case "setClass":b=[b,r,K,g];break;case "addClass":b=[b,r,g];break;case "removeClass":b=[b,K,g];break;default:b=[b,g]}b.push(e);if(a=a.apply(a,b))if(Ca(a.start)&&(a=a.start()),a instanceof c)a.done(g);else if(Ca(a))return a;return H}function w(a,b,d,e,g){var f=[];u(e,function(e){var h=e[g];h&&f.push(function(){var e,g,f=!1,l=function(a){f||
(f=!0,(g||H)(a),e.complete(!a))};e=new c({end:function(){l()},cancel:function(){l(!0)}});g=z(h,a,b,d,function(a){l(!1===a)});return e})});return f}function B(a,b,d,e,g){var f=w(a,b,d,e,g);if(0===f.length){var h,k;"beforeSetClass"===g?(h=w(a,"removeClass",d,e,"beforeRemoveClass"),k=w(a,"addClass",d,e,"beforeAddClass")):"setClass"===g&&(h=w(a,"removeClass",d,e,"removeClass"),k=w(a,"addClass",d,e,"addClass"));h&&(f=f.concat(h));k&&(f=f.concat(k))}if(0!==f.length)return function(a){var b=[];f.length&&
u(f,function(a){b.push(a())});b.length?c.all(b,a):a();return function(a){u(b,function(b){a?b.cancel():b.end()})}}}3===arguments.length&&na(d)&&(e=d,d=null);e=ia(e);d||(d=a.attr("class")||"",e.addClass&&(d+=" "+e.addClass),e.removeClass&&(d+=" "+e.removeClass));var r=e.addClass,K=e.removeClass,C=s(d),E,f;if(C.length){var F,G;"leave"==b?(G="leave",F="afterLeave"):(G="before"+b.charAt(0).toUpperCase()+b.substr(1),F=b);"enter"!==b&&"move"!==b&&(E=B(a,b,e,C,G));f=B(a,b,e,C,F)}if(E||f)return{start:function(){function b(c){n=
!0;t();ca(a,e);g.complete(c)}var d,k=[];E&&k.push(function(a){d=E(a)});k.length?k.push(function(a){t();a(!0)}):t();f&&k.push(function(a){d=f(a)});var n=!1,g=new c({end:function(){n||((d||H)(void 0),b(void 0))},cancel:function(){n||((d||H)(!0),b(!0))}});c.chain(k,b);return g}}}}]}]).provider("$$animateJsDriver",["$$animationProvider",function(a){a.drivers.push("$$animateJsDriver");this.$get=["$$animateJs","$$AnimateRunner",function(a,c){function d(c){return a(c.element,c.event,c.classes,c.options)}
return function(a){if(a.from&&a.to){var b=d(a.from),n=d(a.to);if(b||n)return{start:function(){function a(){return function(){u(d,function(a){a.end()})}}var d=[];b&&d.push(b.start());n&&d.push(n.start());c.all(d,function(a){e.complete(a)});var e=new c({end:a(),cancel:a()});return e}}}else return d(a)}}]}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map
;
/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 0.13.0 - 2015-05-02
 * License: MIT
 */
angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.bindHtml","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.position","ui.bootstrap.datepicker","ui.bootstrap.dropdown","ui.bootstrap.modal","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.transition","ui.bootstrap.typeahead"]);
angular.module("ui.bootstrap.tpls", ["template/accordion/accordion-group.html","template/accordion/accordion.html","template/alert/alert.html","template/carousel/carousel.html","template/carousel/slide.html","template/datepicker/datepicker.html","template/datepicker/day.html","template/datepicker/month.html","template/datepicker/popup.html","template/datepicker/year.html","template/modal/backdrop.html","template/modal/window.html","template/pagination/pager.html","template/pagination/pagination.html","template/tooltip/tooltip-html-popup.html","template/tooltip/tooltip-html-unsafe-popup.html","template/tooltip/tooltip-popup.html","template/tooltip/tooltip-template-popup.html","template/popover/popover-template.html","template/popover/popover.html","template/progressbar/bar.html","template/progressbar/progress.html","template/progressbar/progressbar.html","template/rating/rating.html","template/tabs/tab.html","template/tabs/tabset.html","template/timepicker/timepicker.html","template/typeahead/typeahead-match.html","template/typeahead/typeahead-popup.html"]);
angular.module('ui.bootstrap.collapse', [])

  .directive('collapse', ['$animate', function ($animate) {

    return {
      link: function (scope, element, attrs) {
        function expand() {
          element.removeClass('collapse').addClass('collapsing');
          $animate.addClass(element, 'in', {
            to: { height: element[0].scrollHeight + 'px' }
          }).then(expandDone);
        }

        function expandDone() {
          element.removeClass('collapsing');
          element.css({height: 'auto'});
        }

        function collapse() {
          element
            // IMPORTANT: The height must be set before adding "collapsing" class.
            // Otherwise, the browser attempts to animate from height 0 (in
            // collapsing class) to the given height here.
            .css({height: element[0].scrollHeight + 'px'})
            // initially all panel collapse have the collapse class, this removal
            // prevents the animation from jumping to collapsed state
            .removeClass('collapse')
            .addClass('collapsing');

          $animate.removeClass(element, 'in', {
            to: {height: '0'}
          }).then(collapseDone);
        }

        function collapseDone() {
          element.css({height: '0'}); // Required so that collapse works when animation is disabled
          element.removeClass('collapsing');
          element.addClass('collapse');
        }

        scope.$watch(attrs.collapse, function (shouldCollapse) {
          if (shouldCollapse) {
            collapse();
          } else {
            expand();
          }
        });
      }
    };
  }]);

angular.module('ui.bootstrap.accordion', ['ui.bootstrap.collapse'])

.constant('accordionConfig', {
  closeOthers: true
})

.controller('AccordionController', ['$scope', '$attrs', 'accordionConfig', function ($scope, $attrs, accordionConfig) {

  // This array keeps track of the accordion groups
  this.groups = [];

  // Ensure that all the groups in this accordion are closed, unless close-others explicitly says not to
  this.closeOthers = function(openGroup) {
    var closeOthers = angular.isDefined($attrs.closeOthers) ? $scope.$eval($attrs.closeOthers) : accordionConfig.closeOthers;
    if ( closeOthers ) {
      angular.forEach(this.groups, function (group) {
        if ( group !== openGroup ) {
          group.isOpen = false;
        }
      });
    }
  };

  // This is called from the accordion-group directive to add itself to the accordion
  this.addGroup = function(groupScope) {
    var that = this;
    this.groups.push(groupScope);

    groupScope.$on('$destroy', function (event) {
      that.removeGroup(groupScope);
    });
  };

  // This is called from the accordion-group directive when to remove itself
  this.removeGroup = function(group) {
    var index = this.groups.indexOf(group);
    if ( index !== -1 ) {
      this.groups.splice(index, 1);
    }
  };

}])

// The accordion directive simply sets up the directive controller
// and adds an accordion CSS class to itself element.
.directive('accordion', function () {
  return {
    restrict:'EA',
    controller:'AccordionController',
    transclude: true,
    replace: false,
    templateUrl: 'template/accordion/accordion.html'
  };
})

// The accordion-group directive indicates a block of html that will expand and collapse in an accordion
.directive('accordionGroup', function() {
  return {
    require:'^accordion',         // We need this directive to be inside an accordion
    restrict:'EA',
    transclude:true,              // It transcludes the contents of the directive into the template
    replace: true,                // The element containing the directive will be replaced with the template
    templateUrl:'template/accordion/accordion-group.html',
    scope: {
      heading: '@',               // Interpolate the heading attribute onto this scope
      isOpen: '=?',
      isDisabled: '=?'
    },
    controller: function() {
      this.setHeading = function(element) {
        this.heading = element;
      };
    },
    link: function(scope, element, attrs, accordionCtrl) {
      accordionCtrl.addGroup(scope);

      scope.$watch('isOpen', function(value) {
        if ( value ) {
          accordionCtrl.closeOthers(scope);
        }
      });

      scope.toggleOpen = function() {
        if ( !scope.isDisabled ) {
          scope.isOpen = !scope.isOpen;
        }
      };
    }
  };
})

// Use accordion-heading below an accordion-group to provide a heading containing HTML
// <accordion-group>
//   <accordion-heading>Heading containing HTML - <img src="..."></accordion-heading>
// </accordion-group>
.directive('accordionHeading', function() {
  return {
    restrict: 'EA',
    transclude: true,   // Grab the contents to be used as the heading
    template: '',       // In effect remove this element!
    replace: true,
    require: '^accordionGroup',
    link: function(scope, element, attr, accordionGroupCtrl, transclude) {
      // Pass the heading to the accordion-group controller
      // so that it can be transcluded into the right place in the template
      // [The second parameter to transclude causes the elements to be cloned so that they work in ng-repeat]
      accordionGroupCtrl.setHeading(transclude(scope, angular.noop));
    }
  };
})

// Use in the accordion-group template to indicate where you want the heading to be transcluded
// You must provide the property on the accordion-group controller that will hold the transcluded element
// <div class="accordion-group">
//   <div class="accordion-heading" ><a ... accordion-transclude="heading">...</a></div>
//   ...
// </div>
.directive('accordionTransclude', function() {
  return {
    require: '^accordionGroup',
    link: function(scope, element, attr, controller) {
      scope.$watch(function() { return controller[attr.accordionTransclude]; }, function(heading) {
        if ( heading ) {
          element.html('');
          element.append(heading);
        }
      });
    }
  };
})

;

angular.module('ui.bootstrap.alert', [])

.controller('AlertController', ['$scope', '$attrs', function ($scope, $attrs) {
  $scope.closeable = 'close' in $attrs;
  this.close = $scope.close;
}])

.directive('alert', function () {
  return {
    restrict:'EA',
    controller:'AlertController',
    templateUrl:'template/alert/alert.html',
    transclude:true,
    replace:true,
    scope: {
      type: '@',
      close: '&'
    }
  };
})

.directive('dismissOnTimeout', ['$timeout', function($timeout) {
  return {
    require: 'alert',
    link: function(scope, element, attrs, alertCtrl) {
      $timeout(function(){
        alertCtrl.close();
      }, parseInt(attrs.dismissOnTimeout, 10));
    }
  };
}]);

angular.module('ui.bootstrap.bindHtml', [])

  .directive('bindHtmlUnsafe', function () {
    return function (scope, element, attr) {
      element.addClass('ng-binding').data('$binding', attr.bindHtmlUnsafe);
      scope.$watch(attr.bindHtmlUnsafe, function bindHtmlUnsafeWatchAction(value) {
        element.html(value || '');
      });
    };
  });
angular.module('ui.bootstrap.buttons', [])

.constant('buttonConfig', {
  activeClass: 'active',
  toggleEvent: 'click'
})

.controller('ButtonsController', ['buttonConfig', function(buttonConfig) {
  this.activeClass = buttonConfig.activeClass || 'active';
  this.toggleEvent = buttonConfig.toggleEvent || 'click';
}])

.directive('btnRadio', function () {
  return {
    require: ['btnRadio', 'ngModel'],
    controller: 'ButtonsController',
    link: function (scope, element, attrs, ctrls) {
      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      //model -> UI
      ngModelCtrl.$render = function () {
        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, scope.$eval(attrs.btnRadio)));
      };

      //ui->model
      element.bind(buttonsCtrl.toggleEvent, function () {
        var isActive = element.hasClass(buttonsCtrl.activeClass);

        if (!isActive || angular.isDefined(attrs.uncheckable)) {
          scope.$apply(function () {
            ngModelCtrl.$setViewValue(isActive ? null : scope.$eval(attrs.btnRadio));
            ngModelCtrl.$render();
          });
        }
      });
    }
  };
})

.directive('btnCheckbox', function () {
  return {
    require: ['btnCheckbox', 'ngModel'],
    controller: 'ButtonsController',
    link: function (scope, element, attrs, ctrls) {
      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      function getTrueValue() {
        return getCheckboxValue(attrs.btnCheckboxTrue, true);
      }

      function getFalseValue() {
        return getCheckboxValue(attrs.btnCheckboxFalse, false);
      }

      function getCheckboxValue(attributeValue, defaultValue) {
        var val = scope.$eval(attributeValue);
        return angular.isDefined(val) ? val : defaultValue;
      }

      //model -> UI
      ngModelCtrl.$render = function () {
        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, getTrueValue()));
      };

      //ui->model
      element.bind(buttonsCtrl.toggleEvent, function () {
        scope.$apply(function () {
          ngModelCtrl.$setViewValue(element.hasClass(buttonsCtrl.activeClass) ? getFalseValue() : getTrueValue());
          ngModelCtrl.$render();
        });
      });
    }
  };
});

/**
* @ngdoc overview
* @name ui.bootstrap.carousel
*
* @description
* AngularJS version of an image carousel.
*
*/
angular.module('ui.bootstrap.carousel', [])
.controller('CarouselController', ['$scope', '$interval', '$animate', function ($scope, $interval, $animate) {
  var self = this,
    slides = self.slides = $scope.slides = [],
    currentIndex = -1,
    currentInterval, isPlaying;
  self.currentSlide = null;

  var destroyed = false;
  /* direction: "prev" or "next" */
  self.select = $scope.select = function(nextSlide, direction) {
    var nextIndex = self.indexOfSlide(nextSlide);
    //Decide direction if it's not given
    if (direction === undefined) {
      direction = nextIndex > self.getCurrentIndex() ? 'next' : 'prev';
    }
    if (nextSlide && nextSlide !== self.currentSlide) {
      goNext();
    }
    function goNext() {
      // Scope has been destroyed, stop here.
      if (destroyed) { return; }

      angular.extend(nextSlide, {direction: direction, active: true});
      angular.extend(self.currentSlide || {}, {direction: direction, active: false});
      if ($animate.enabled() && !$scope.noTransition && nextSlide.$element) {
        $scope.$currentTransition = true;
        nextSlide.$element.one('$animate:close', function closeFn() {
          $scope.$currentTransition = null;
        });
      }

      self.currentSlide = nextSlide;
      currentIndex = nextIndex;
      //every time you change slides, reset the timer
      restartTimer();
    }
  };
  $scope.$on('$destroy', function () {
    destroyed = true;
  });

  function getSlideByIndex(index) {
    if (angular.isUndefined(slides[index].index)) {
      return slides[index];
    }
    var i, len = slides.length;
    for (i = 0; i < slides.length; ++i) {
      if (slides[i].index == index) {
        return slides[i];
      }
    }
  }

  self.getCurrentIndex = function() {
    if (self.currentSlide && angular.isDefined(self.currentSlide.index)) {
      return +self.currentSlide.index;
    }
    return currentIndex;
  };

  /* Allow outside people to call indexOf on slides array */
  self.indexOfSlide = function(slide) {
    return angular.isDefined(slide.index) ? +slide.index : slides.indexOf(slide);
  };

  $scope.next = function() {
    var newIndex = (self.getCurrentIndex() + 1) % slides.length;

    //Prevent this user-triggered transition from occurring if there is already one in progress
    if (!$scope.$currentTransition) {
      return self.select(getSlideByIndex(newIndex), 'next');
    }
  };

  $scope.prev = function() {
    var newIndex = self.getCurrentIndex() - 1 < 0 ? slides.length - 1 : self.getCurrentIndex() - 1;

    //Prevent this user-triggered transition from occurring if there is already one in progress
    if (!$scope.$currentTransition) {
      return self.select(getSlideByIndex(newIndex), 'prev');
    }
  };

  $scope.isActive = function(slide) {
     return self.currentSlide === slide;
  };

  $scope.$watch('interval', restartTimer);
  $scope.$on('$destroy', resetTimer);

  function restartTimer() {
    resetTimer();
    var interval = +$scope.interval;
    if (!isNaN(interval) && interval > 0) {
      currentInterval = $interval(timerFn, interval);
    }
  }

  function resetTimer() {
    if (currentInterval) {
      $interval.cancel(currentInterval);
      currentInterval = null;
    }
  }

  function timerFn() {
    var interval = +$scope.interval;
    if (isPlaying && !isNaN(interval) && interval > 0) {
      $scope.next();
    } else {
      $scope.pause();
    }
  }

  $scope.play = function() {
    if (!isPlaying) {
      isPlaying = true;
      restartTimer();
    }
  };
  $scope.pause = function() {
    if (!$scope.noPause) {
      isPlaying = false;
      resetTimer();
    }
  };

  self.addSlide = function(slide, element) {
    slide.$element = element;
    slides.push(slide);
    //if this is the first slide or the slide is set to active, select it
    if(slides.length === 1 || slide.active) {
      self.select(slides[slides.length-1]);
      if (slides.length == 1) {
        $scope.play();
      }
    } else {
      slide.active = false;
    }
  };

  self.removeSlide = function(slide) {
    if (angular.isDefined(slide.index)) {
      slides.sort(function(a, b) {
        return +a.index > +b.index;
      });
    }
    //get the index of the slide inside the carousel
    var index = slides.indexOf(slide);
    slides.splice(index, 1);
    if (slides.length > 0 && slide.active) {
      if (index >= slides.length) {
        self.select(slides[index-1]);
      } else {
        self.select(slides[index]);
      }
    } else if (currentIndex > index) {
      currentIndex--;
    }
  };

}])

/**
 * @ngdoc directive
 * @name ui.bootstrap.carousel.directive:carousel
 * @restrict EA
 *
 * @description
 * Carousel is the outer container for a set of image 'slides' to showcase.
 *
 * @param {number=} interval The time, in milliseconds, that it will take the carousel to go to the next slide.
 * @param {boolean=} noTransition Whether to disable transitions on the carousel.
 * @param {boolean=} noPause Whether to disable pausing on the carousel (by default, the carousel interval pauses on hover).
 *
 * @example
<example module="ui.bootstrap">
  <file name="index.html">
    <carousel>
      <slide>
        <img src="http://placekitten.com/150/150" style="margin:auto;">
        <div class="carousel-caption">
          <p>Beautiful!</p>
        </div>
      </slide>
      <slide>
        <img src="http://placekitten.com/100/150" style="margin:auto;">
        <div class="carousel-caption">
          <p>D'aww!</p>
        </div>
      </slide>
    </carousel>
  </file>
  <file name="demo.css">
    .carousel-indicators {
      top: auto;
      bottom: 15px;
    }
  </file>
</example>
 */
.directive('carousel', [function() {
  return {
    restrict: 'EA',
    transclude: true,
    replace: true,
    controller: 'CarouselController',
    require: 'carousel',
    templateUrl: 'template/carousel/carousel.html',
    scope: {
      interval: '=',
      noTransition: '=',
      noPause: '='
    }
  };
}])

/**
 * @ngdoc directive
 * @name ui.bootstrap.carousel.directive:slide
 * @restrict EA
 *
 * @description
 * Creates a slide inside a {@link ui.bootstrap.carousel.directive:carousel carousel}.  Must be placed as a child of a carousel element.
 *
 * @param {boolean=} active Model binding, whether or not this slide is currently active.
 * @param {number=} index The index of the slide. The slides will be sorted by this parameter.
 *
 * @example
<example module="ui.bootstrap">
  <file name="index.html">
<div ng-controller="CarouselDemoCtrl">
  <carousel>
    <slide ng-repeat="slide in slides" active="slide.active" index="$index">
      <img ng-src="{{slide.image}}" style="margin:auto;">
      <div class="carousel-caption">
        <h4>Slide {{$index}}</h4>
        <p>{{slide.text}}</p>
      </div>
    </slide>
  </carousel>
  Interval, in milliseconds: <input type="number" ng-model="myInterval">
  <br />Enter a negative number to stop the interval.
</div>
  </file>
  <file name="script.js">
function CarouselDemoCtrl($scope) {
  $scope.myInterval = 5000;
}
  </file>
  <file name="demo.css">
    .carousel-indicators {
      top: auto;
      bottom: 15px;
    }
  </file>
</example>
*/

.directive('slide', function() {
  return {
    require: '^carousel',
    restrict: 'EA',
    transclude: true,
    replace: true,
    templateUrl: 'template/carousel/slide.html',
    scope: {
      active: '=?',
      index: '=?'
    },
    link: function (scope, element, attrs, carouselCtrl) {
      carouselCtrl.addSlide(scope, element);
      //when the scope is destroyed then remove the slide from the current slides array
      scope.$on('$destroy', function() {
        carouselCtrl.removeSlide(scope);
      });

      scope.$watch('active', function(active) {
        if (active) {
          carouselCtrl.select(scope);
        }
      });
    }
  };
})

.animation('.item', [
         '$animate',
function ($animate) {
  return {
    beforeAddClass: function (element, className, done) {
      // Due to transclusion, noTransition property is on parent's scope
      if (className == 'active' && element.parent() &&
          !element.parent().scope().noTransition) {
        var stopped = false;
        var direction = element.isolateScope().direction;
        var directionClass = direction == 'next' ? 'left' : 'right';
        element.addClass(direction);
        $animate.addClass(element, directionClass).then(function () {
          if (!stopped) {
            element.removeClass(directionClass + ' ' + direction);
          }
          done();
        });

        return function () {
          stopped = true;
        };
      }
      done();
    },
    beforeRemoveClass: function (element, className, done) {
      // Due to transclusion, noTransition property is on parent's scope
      if (className == 'active' && element.parent() &&
          !element.parent().scope().noTransition) {
        var stopped = false;
        var direction = element.isolateScope().direction;
        var directionClass = direction == 'next' ? 'left' : 'right';
        $animate.addClass(element, directionClass).then(function () {
          if (!stopped) {
            element.removeClass(directionClass);
          }
          done();
        });
        return function () {
          stopped = true;
        };
      }
      done();
    }
  };

}])


;

angular.module('ui.bootstrap.dateparser', [])

.service('dateParser', ['$locale', 'orderByFilter', function($locale, orderByFilter) {
  // Pulled from https://github.com/mbostock/d3/blob/master/src/format/requote.js
  var SPECIAL_CHARACTERS_REGEXP = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;

  this.parsers = {};

  var formatCodeToRegex = {
    'yyyy': {
      regex: '\\d{4}',
      apply: function(value) { this.year = +value; }
    },
    'yy': {
      regex: '\\d{2}',
      apply: function(value) { this.year = +value + 2000; }
    },
    'y': {
      regex: '\\d{1,4}',
      apply: function(value) { this.year = +value; }
    },
    'MMMM': {
      regex: $locale.DATETIME_FORMATS.MONTH.join('|'),
      apply: function(value) { this.month = $locale.DATETIME_FORMATS.MONTH.indexOf(value); }
    },
    'MMM': {
      regex: $locale.DATETIME_FORMATS.SHORTMONTH.join('|'),
      apply: function(value) { this.month = $locale.DATETIME_FORMATS.SHORTMONTH.indexOf(value); }
    },
    'MM': {
      regex: '0[1-9]|1[0-2]',
      apply: function(value) { this.month = value - 1; }
    },
    'M': {
      regex: '[1-9]|1[0-2]',
      apply: function(value) { this.month = value - 1; }
    },
    'dd': {
      regex: '[0-2][0-9]{1}|3[0-1]{1}',
      apply: function(value) { this.date = +value; }
    },
    'd': {
      regex: '[1-2]?[0-9]{1}|3[0-1]{1}',
      apply: function(value) { this.date = +value; }
    },
    'EEEE': {
      regex: $locale.DATETIME_FORMATS.DAY.join('|')
    },
    'EEE': {
      regex: $locale.DATETIME_FORMATS.SHORTDAY.join('|')
    },
    'HH': {
      regex: '(?:0|1)[0-9]|2[0-3]',
      apply: function(value) { this.hours = +value; }
    },
    'H': {
      regex: '1?[0-9]|2[0-3]',
      apply: function(value) { this.hours = +value; }
    },
    'mm': {
      regex: '[0-5][0-9]',
      apply: function(value) { this.minutes = +value; }
    },
    'm': {
      regex: '[0-9]|[1-5][0-9]',
      apply: function(value) { this.minutes = +value; }
    },
    'sss': {
      regex: '[0-9][0-9][0-9]',
      apply: function(value) { this.milliseconds = +value; }
    },
    'ss': {
      regex: '[0-5][0-9]',
      apply: function(value) { this.seconds = +value; }
    },
    's': {
      regex: '[0-9]|[1-5][0-9]',
      apply: function(value) { this.seconds = +value; }
    }
  };

  function createParser(format) {
    var map = [], regex = format.split('');

    angular.forEach(formatCodeToRegex, function(data, code) {
      var index = format.indexOf(code);

      if (index > -1) {
        format = format.split('');

        regex[index] = '(' + data.regex + ')';
        format[index] = '$'; // Custom symbol to define consumed part of format
        for (var i = index + 1, n = index + code.length; i < n; i++) {
          regex[i] = '';
          format[i] = '$';
        }
        format = format.join('');

        map.push({ index: index, apply: data.apply });
      }
    });

    return {
      regex: new RegExp('^' + regex.join('') + '$'),
      map: orderByFilter(map, 'index')
    };
  }

  this.parse = function(input, format, baseDate) {
    if ( !angular.isString(input) || !format ) {
      return input;
    }

    format = $locale.DATETIME_FORMATS[format] || format;
    format = format.replace(SPECIAL_CHARACTERS_REGEXP, '\\$&');

    if ( !this.parsers[format] ) {
      this.parsers[format] = createParser(format);
    }

    var parser = this.parsers[format],
        regex = parser.regex,
        map = parser.map,
        results = input.match(regex);

    if ( results && results.length ) {
      var fields, dt;
      if (baseDate) {
        fields = {
          year: baseDate.getFullYear(),
          month: baseDate.getMonth(),
          date: baseDate.getDate(),
          hours: baseDate.getHours(),
          minutes: baseDate.getMinutes(),
          seconds: baseDate.getSeconds(),
          milliseconds: baseDate.getMilliseconds()
        };
      } else {
        fields = { year: 1900, month: 0, date: 1, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 };
      }

      for( var i = 1, n = results.length; i < n; i++ ) {
        var mapper = map[i-1];
        if ( mapper.apply ) {
          mapper.apply.call(fields, results[i]);
        }
      }

      if ( isValid(fields.year, fields.month, fields.date) ) {
        dt = new Date(fields.year, fields.month, fields.date, fields.hours, fields.minutes, fields.seconds,
          fields.milliseconds || 0);
      }

      return dt;
    }
  };

  // Check if date is valid for specific month (and year for February).
  // Month: 0 = Jan, 1 = Feb, etc
  function isValid(year, month, date) {
    if (date < 1) {
      return false;
    }

    if ( month === 1 && date > 28) {
        return date === 29 && ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
    }

    if ( month === 3 || month === 5 || month === 8 || month === 10) {
        return date < 31;
    }

    return true;
  }
}]);

angular.module('ui.bootstrap.position', [])

/**
 * A set of utility methods that can be use to retrieve position of DOM elements.
 * It is meant to be used where we need to absolute-position DOM elements in
 * relation to other, existing elements (this is the case for tooltips, popovers,
 * typeahead suggestions etc.).
 */
  .factory('$position', ['$document', '$window', function ($document, $window) {

    function getStyle(el, cssprop) {
      if (el.currentStyle) { //IE
        return el.currentStyle[cssprop];
      } else if ($window.getComputedStyle) {
        return $window.getComputedStyle(el)[cssprop];
      }
      // finally try and get inline style
      return el.style[cssprop];
    }

    /**
     * Checks if a given element is statically positioned
     * @param element - raw DOM element
     */
    function isStaticPositioned(element) {
      return (getStyle(element, 'position') || 'static' ) === 'static';
    }

    /**
     * returns the closest, non-statically positioned parentOffset of a given element
     * @param element
     */
    var parentOffsetEl = function (element) {
      var docDomEl = $document[0];
      var offsetParent = element.offsetParent || docDomEl;
      while (offsetParent && offsetParent !== docDomEl && isStaticPositioned(offsetParent) ) {
        offsetParent = offsetParent.offsetParent;
      }
      return offsetParent || docDomEl;
    };

    return {
      /**
       * Provides read-only equivalent of jQuery's position function:
       * http://api.jquery.com/position/
       */
      position: function (element) {
        var elBCR = this.offset(element);
        var offsetParentBCR = { top: 0, left: 0 };
        var offsetParentEl = parentOffsetEl(element[0]);
        if (offsetParentEl != $document[0]) {
          offsetParentBCR = this.offset(angular.element(offsetParentEl));
          offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
          offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
        }

        var boundingClientRect = element[0].getBoundingClientRect();
        return {
          width: boundingClientRect.width || element.prop('offsetWidth'),
          height: boundingClientRect.height || element.prop('offsetHeight'),
          top: elBCR.top - offsetParentBCR.top,
          left: elBCR.left - offsetParentBCR.left
        };
      },

      /**
       * Provides read-only equivalent of jQuery's offset function:
       * http://api.jquery.com/offset/
       */
      offset: function (element) {
        var boundingClientRect = element[0].getBoundingClientRect();
        return {
          width: boundingClientRect.width || element.prop('offsetWidth'),
          height: boundingClientRect.height || element.prop('offsetHeight'),
          top: boundingClientRect.top + ($window.pageYOffset || $document[0].documentElement.scrollTop),
          left: boundingClientRect.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft)
        };
      },

      /**
       * Provides coordinates for the targetEl in relation to hostEl
       */
      positionElements: function (hostEl, targetEl, positionStr, appendToBody) {

        var positionStrParts = positionStr.split('-');
        var pos0 = positionStrParts[0], pos1 = positionStrParts[1] || 'center';

        var hostElPos,
          targetElWidth,
          targetElHeight,
          targetElPos;

        hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);

        targetElWidth = targetEl.prop('offsetWidth');
        targetElHeight = targetEl.prop('offsetHeight');

        var shiftWidth = {
          center: function () {
            return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
          },
          left: function () {
            return hostElPos.left;
          },
          right: function () {
            return hostElPos.left + hostElPos.width;
          }
        };

        var shiftHeight = {
          center: function () {
            return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
          },
          top: function () {
            return hostElPos.top;
          },
          bottom: function () {
            return hostElPos.top + hostElPos.height;
          }
        };

        switch (pos0) {
          case 'right':
            targetElPos = {
              top: shiftHeight[pos1](),
              left: shiftWidth[pos0]()
            };
            break;
          case 'left':
            targetElPos = {
              top: shiftHeight[pos1](),
              left: hostElPos.left - targetElWidth
            };
            break;
          case 'bottom':
            targetElPos = {
              top: shiftHeight[pos0](),
              left: shiftWidth[pos1]()
            };
            break;
          default:
            targetElPos = {
              top: hostElPos.top - targetElHeight,
              left: shiftWidth[pos1]()
            };
            break;
        }

        return targetElPos;
      }
    };
  }]);

angular.module('ui.bootstrap.datepicker', ['ui.bootstrap.dateparser', 'ui.bootstrap.position'])

.constant('datepickerConfig', {
  formatDay: 'dd',
  formatMonth: 'MMMM',
  formatYear: 'yyyy',
  formatDayHeader: 'EEE',
  formatDayTitle: 'MMMM yyyy',
  formatMonthTitle: 'yyyy',
  datepickerMode: 'day',
  minMode: 'day',
  maxMode: 'year',
  showWeeks: true,
  startingDay: 0,
  yearRange: 20,
  minDate: null,
  maxDate: null,
  shortcutPropagation: false
})

.controller('DatepickerController', ['$scope', '$attrs', '$parse', '$interpolate', '$timeout', '$log', 'dateFilter', 'datepickerConfig', function($scope, $attrs, $parse, $interpolate, $timeout, $log, dateFilter, datepickerConfig) {
  var self = this,
      ngModelCtrl = { $setViewValue: angular.noop }; // nullModelCtrl;

  // Modes chain
  this.modes = ['day', 'month', 'year'];

  // Configuration attributes
  angular.forEach(['formatDay', 'formatMonth', 'formatYear', 'formatDayHeader', 'formatDayTitle', 'formatMonthTitle',
                   'minMode', 'maxMode', 'showWeeks', 'startingDay', 'yearRange', 'shortcutPropagation'], function( key, index ) {
    self[key] = angular.isDefined($attrs[key]) ? (index < 8 ? $interpolate($attrs[key])($scope.$parent) : $scope.$parent.$eval($attrs[key])) : datepickerConfig[key];
  });

  // Watchable date attributes
  angular.forEach(['minDate', 'maxDate'], function( key ) {
    if ( $attrs[key] ) {
      $scope.$parent.$watch($parse($attrs[key]), function(value) {
        self[key] = value ? new Date(value) : null;
        self.refreshView();
      });
    } else {
      self[key] = datepickerConfig[key] ? new Date(datepickerConfig[key]) : null;
    }
  });

  $scope.datepickerMode = $scope.datepickerMode || datepickerConfig.datepickerMode;
  $scope.maxMode = self.maxMode;
  $scope.uniqueId = 'datepicker-' + $scope.$id + '-' + Math.floor(Math.random() * 10000);

  if(angular.isDefined($attrs.initDate)) {
    this.activeDate = $scope.$parent.$eval($attrs.initDate) || new Date();
    $scope.$parent.$watch($attrs.initDate, function(initDate){
      if(initDate && (ngModelCtrl.$isEmpty(ngModelCtrl.$modelValue) || ngModelCtrl.$invalid)){
        self.activeDate = initDate;
        self.refreshView();
      }
    });
  } else {
    this.activeDate =  new Date();
  }

  $scope.isActive = function(dateObject) {
    if (self.compare(dateObject.date, self.activeDate) === 0) {
      $scope.activeDateId = dateObject.uid;
      return true;
    }
    return false;
  };

  this.init = function( ngModelCtrl_ ) {
    ngModelCtrl = ngModelCtrl_;

    ngModelCtrl.$render = function() {
      self.render();
    };
  };

  this.render = function() {
    if ( ngModelCtrl.$viewValue ) {
      var date = new Date( ngModelCtrl.$viewValue ),
          isValid = !isNaN(date);

      if ( isValid ) {
        this.activeDate = date;
      } else {
        $log.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
      }
      ngModelCtrl.$setValidity('date', isValid);
    }
    this.refreshView();
  };

  this.refreshView = function() {
    if ( this.element ) {
      this._refreshView();

      var date = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
      ngModelCtrl.$setValidity('date-disabled', !date || (this.element && !this.isDisabled(date)));
    }
  };

  this.createDateObject = function(date, format) {
    var model = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
    return {
      date: date,
      label: dateFilter(date, format),
      selected: model && this.compare(date, model) === 0,
      disabled: this.isDisabled(date),
      current: this.compare(date, new Date()) === 0,
      customClass: this.customClass(date)
    };
  };

  this.isDisabled = function( date ) {
    return ((this.minDate && this.compare(date, this.minDate) < 0) || (this.maxDate && this.compare(date, this.maxDate) > 0) || ($attrs.dateDisabled && $scope.dateDisabled({date: date, mode: $scope.datepickerMode})));
  };

    this.customClass = function( date ) {
      return $scope.customClass({date: date, mode: $scope.datepickerMode});
    };

  // Split array into smaller arrays
  this.split = function(arr, size) {
    var arrays = [];
    while (arr.length > 0) {
      arrays.push(arr.splice(0, size));
    }
    return arrays;
  };

  $scope.select = function( date ) {
    if ( $scope.datepickerMode === self.minMode ) {
      var dt = ngModelCtrl.$viewValue ? new Date( ngModelCtrl.$viewValue ) : new Date(0, 0, 0, 0, 0, 0, 0);
      dt.setFullYear( date.getFullYear(), date.getMonth(), date.getDate() );
      ngModelCtrl.$setViewValue( dt );
      ngModelCtrl.$render();
    } else {
      self.activeDate = date;
      $scope.datepickerMode = self.modes[ self.modes.indexOf( $scope.datepickerMode ) - 1 ];
    }
  };

  $scope.move = function( direction ) {
    var year = self.activeDate.getFullYear() + direction * (self.step.years || 0),
        month = self.activeDate.getMonth() + direction * (self.step.months || 0);
    self.activeDate.setFullYear(year, month, 1);
    self.refreshView();
  };

  $scope.toggleMode = function( direction ) {
    direction = direction || 1;

    if (($scope.datepickerMode === self.maxMode && direction === 1) || ($scope.datepickerMode === self.minMode && direction === -1)) {
      return;
    }

    $scope.datepickerMode = self.modes[ self.modes.indexOf( $scope.datepickerMode ) + direction ];
  };

  // Key event mapper
  $scope.keys = { 13:'enter', 32:'space', 33:'pageup', 34:'pagedown', 35:'end', 36:'home', 37:'left', 38:'up', 39:'right', 40:'down' };

  var focusElement = function() {
    $timeout(function() {
      self.element[0].focus();
    }, 0 , false);
  };

  // Listen for focus requests from popup directive
  $scope.$on('datepicker.focus', focusElement);

  $scope.keydown = function( evt ) {
    var key = $scope.keys[evt.which];

    if ( !key || evt.shiftKey || evt.altKey ) {
      return;
    }

    evt.preventDefault();
    if(!self.shortcutPropagation){
        evt.stopPropagation();
    }

    if (key === 'enter' || key === 'space') {
      if ( self.isDisabled(self.activeDate)) {
        return; // do nothing
      }
      $scope.select(self.activeDate);
      focusElement();
    } else if (evt.ctrlKey && (key === 'up' || key === 'down')) {
      $scope.toggleMode(key === 'up' ? 1 : -1);
      focusElement();
    } else {
      self.handleKeyDown(key, evt);
      self.refreshView();
    }
  };
}])

.directive( 'datepicker', function () {
  return {
    restrict: 'EA',
    replace: true,
    templateUrl: 'template/datepicker/datepicker.html',
    scope: {
      datepickerMode: '=?',
      dateDisabled: '&',
      customClass: '&',
      shortcutPropagation: '&?'
    },
    require: ['datepicker', '?^ngModel'],
    controller: 'DatepickerController',
    link: function(scope, element, attrs, ctrls) {
      var datepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      if ( ngModelCtrl ) {
        datepickerCtrl.init( ngModelCtrl );
      }
    }
  };
})

.directive('daypicker', ['dateFilter', function (dateFilter) {
  return {
    restrict: 'EA',
    replace: true,
    templateUrl: 'template/datepicker/day.html',
    require: '^datepicker',
    link: function(scope, element, attrs, ctrl) {
      scope.showWeeks = ctrl.showWeeks;

      ctrl.step = { months: 1 };
      ctrl.element = element;

      var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      function getDaysInMonth( year, month ) {
        return ((month === 1) && (year % 4 === 0) && ((year % 100 !== 0) || (year % 400 === 0))) ? 29 : DAYS_IN_MONTH[month];
      }

      function getDates(startDate, n) {
        var dates = new Array(n), current = new Date(startDate), i = 0;
        current.setHours(12); // Prevent repeated dates because of timezone bug
        while ( i < n ) {
          dates[i++] = new Date(current);
          current.setDate( current.getDate() + 1 );
        }
        return dates;
      }

      ctrl._refreshView = function() {
        var year = ctrl.activeDate.getFullYear(),
          month = ctrl.activeDate.getMonth(),
          firstDayOfMonth = new Date(year, month, 1),
          difference = ctrl.startingDay - firstDayOfMonth.getDay(),
          numDisplayedFromPreviousMonth = (difference > 0) ? 7 - difference : - difference,
          firstDate = new Date(firstDayOfMonth);

        if ( numDisplayedFromPreviousMonth > 0 ) {
          firstDate.setDate( - numDisplayedFromPreviousMonth + 1 );
        }

        // 42 is the number of days on a six-month calendar
        var days = getDates(firstDate, 42);
        for (var i = 0; i < 42; i ++) {
          days[i] = angular.extend(ctrl.createDateObject(days[i], ctrl.formatDay), {
            secondary: days[i].getMonth() !== month,
            uid: scope.uniqueId + '-' + i
          });
        }

        scope.labels = new Array(7);
        for (var j = 0; j < 7; j++) {
          scope.labels[j] = {
            abbr: dateFilter(days[j].date, ctrl.formatDayHeader),
            full: dateFilter(days[j].date, 'EEEE')
          };
        }

        scope.title = dateFilter(ctrl.activeDate, ctrl.formatDayTitle);
        scope.rows = ctrl.split(days, 7);

        if ( scope.showWeeks ) {
          scope.weekNumbers = [];
          var thursdayIndex = (4 + 7 - ctrl.startingDay) % 7,
              numWeeks = scope.rows.length;
          for (var curWeek = 0; curWeek < numWeeks; curWeek++) {
            scope.weekNumbers.push(
              getISO8601WeekNumber( scope.rows[curWeek][thursdayIndex].date ));
          }
        }
      };

      ctrl.compare = function(date1, date2) {
        return (new Date( date1.getFullYear(), date1.getMonth(), date1.getDate() ) - new Date( date2.getFullYear(), date2.getMonth(), date2.getDate() ) );
      };

      function getISO8601WeekNumber(date) {
        var checkDate = new Date(date);
        checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7)); // Thursday
        var time = checkDate.getTime();
        checkDate.setMonth(0); // Compare with Jan 1
        checkDate.setDate(1);
        return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
      }

      ctrl.handleKeyDown = function( key, evt ) {
        var date = ctrl.activeDate.getDate();

        if (key === 'left') {
          date = date - 1;   // up
        } else if (key === 'up') {
          date = date - 7;   // down
        } else if (key === 'right') {
          date = date + 1;   // down
        } else if (key === 'down') {
          date = date + 7;
        } else if (key === 'pageup' || key === 'pagedown') {
          var month = ctrl.activeDate.getMonth() + (key === 'pageup' ? - 1 : 1);
          ctrl.activeDate.setMonth(month, 1);
          date = Math.min(getDaysInMonth(ctrl.activeDate.getFullYear(), ctrl.activeDate.getMonth()), date);
        } else if (key === 'home') {
          date = 1;
        } else if (key === 'end') {
          date = getDaysInMonth(ctrl.activeDate.getFullYear(), ctrl.activeDate.getMonth());
        }
        ctrl.activeDate.setDate(date);
      };

      ctrl.refreshView();
    }
  };
}])

.directive('monthpicker', ['dateFilter', function (dateFilter) {
  return {
    restrict: 'EA',
    replace: true,
    templateUrl: 'template/datepicker/month.html',
    require: '^datepicker',
    link: function(scope, element, attrs, ctrl) {
      ctrl.step = { years: 1 };
      ctrl.element = element;

      ctrl._refreshView = function() {
        var months = new Array(12),
            year = ctrl.activeDate.getFullYear();

        for ( var i = 0; i < 12; i++ ) {
          months[i] = angular.extend(ctrl.createDateObject(new Date(year, i, 1), ctrl.formatMonth), {
            uid: scope.uniqueId + '-' + i
          });
        }

        scope.title = dateFilter(ctrl.activeDate, ctrl.formatMonthTitle);
        scope.rows = ctrl.split(months, 3);
      };

      ctrl.compare = function(date1, date2) {
        return new Date( date1.getFullYear(), date1.getMonth() ) - new Date( date2.getFullYear(), date2.getMonth() );
      };

      ctrl.handleKeyDown = function( key, evt ) {
        var date = ctrl.activeDate.getMonth();

        if (key === 'left') {
          date = date - 1;   // up
        } else if (key === 'up') {
          date = date - 3;   // down
        } else if (key === 'right') {
          date = date + 1;   // down
        } else if (key === 'down') {
          date = date + 3;
        } else if (key === 'pageup' || key === 'pagedown') {
          var year = ctrl.activeDate.getFullYear() + (key === 'pageup' ? - 1 : 1);
          ctrl.activeDate.setFullYear(year);
        } else if (key === 'home') {
          date = 0;
        } else if (key === 'end') {
          date = 11;
        }
        ctrl.activeDate.setMonth(date);
      };

      ctrl.refreshView();
    }
  };
}])

.directive('yearpicker', ['dateFilter', function (dateFilter) {
  return {
    restrict: 'EA',
    replace: true,
    templateUrl: 'template/datepicker/year.html',
    require: '^datepicker',
    link: function(scope, element, attrs, ctrl) {
      var range = ctrl.yearRange;

      ctrl.step = { years: range };
      ctrl.element = element;

      function getStartingYear( year ) {
        return parseInt((year - 1) / range, 10) * range + 1;
      }

      ctrl._refreshView = function() {
        var years = new Array(range);

        for ( var i = 0, start = getStartingYear(ctrl.activeDate.getFullYear()); i < range; i++ ) {
          years[i] = angular.extend(ctrl.createDateObject(new Date(start + i, 0, 1), ctrl.formatYear), {
            uid: scope.uniqueId + '-' + i
          });
        }

        scope.title = [years[0].label, years[range - 1].label].join(' - ');
        scope.rows = ctrl.split(years, 5);
      };

      ctrl.compare = function(date1, date2) {
        return date1.getFullYear() - date2.getFullYear();
      };

      ctrl.handleKeyDown = function( key, evt ) {
        var date = ctrl.activeDate.getFullYear();

        if (key === 'left') {
          date = date - 1;   // up
        } else if (key === 'up') {
          date = date - 5;   // down
        } else if (key === 'right') {
          date = date + 1;   // down
        } else if (key === 'down') {
          date = date + 5;
        } else if (key === 'pageup' || key === 'pagedown') {
          date += (key === 'pageup' ? - 1 : 1) * ctrl.step.years;
        } else if (key === 'home') {
          date = getStartingYear( ctrl.activeDate.getFullYear() );
        } else if (key === 'end') {
          date = getStartingYear( ctrl.activeDate.getFullYear() ) + range - 1;
        }
        ctrl.activeDate.setFullYear(date);
      };

      ctrl.refreshView();
    }
  };
}])

.constant('datepickerPopupConfig', {
  datepickerPopup: 'yyyy-MM-dd',
  html5Types: {
    date: 'yyyy-MM-dd',
    'datetime-local': 'yyyy-MM-ddTHH:mm:ss.sss',
    'month': 'yyyy-MM'
  },
  currentText: 'Today',
  clearText: 'Clear',
  closeText: 'Done',
  closeOnDateSelection: true,
  appendToBody: false,
  showButtonBar: true
})

.directive('datepickerPopup', ['$compile', '$parse', '$document', '$position', 'dateFilter', 'dateParser', 'datepickerPopupConfig',
function ($compile, $parse, $document, $position, dateFilter, dateParser, datepickerPopupConfig) {
  return {
    restrict: 'EA',
    require: 'ngModel',
    scope: {
      isOpen: '=?',
      currentText: '@',
      clearText: '@',
      closeText: '@',
      dateDisabled: '&',
      customClass: '&'
    },
    link: function(scope, element, attrs, ngModel) {
      var dateFormat,
          closeOnDateSelection = angular.isDefined(attrs.closeOnDateSelection) ? scope.$parent.$eval(attrs.closeOnDateSelection) : datepickerPopupConfig.closeOnDateSelection,
          appendToBody = angular.isDefined(attrs.datepickerAppendToBody) ? scope.$parent.$eval(attrs.datepickerAppendToBody) : datepickerPopupConfig.appendToBody;

      scope.showButtonBar = angular.isDefined(attrs.showButtonBar) ? scope.$parent.$eval(attrs.showButtonBar) : datepickerPopupConfig.showButtonBar;

      scope.getText = function( key ) {
        return scope[key + 'Text'] || datepickerPopupConfig[key + 'Text'];
      };

      var isHtml5DateInput = false;
      if (datepickerPopupConfig.html5Types[attrs.type]) {
        dateFormat = datepickerPopupConfig.html5Types[attrs.type];
        isHtml5DateInput = true;
      } else {
        dateFormat = attrs.datepickerPopup || datepickerPopupConfig.datepickerPopup;
        attrs.$observe('datepickerPopup', function(value, oldValue) {
            var newDateFormat = value || datepickerPopupConfig.datepickerPopup;
            // Invalidate the $modelValue to ensure that formatters re-run
            // FIXME: Refactor when PR is merged: https://github.com/angular/angular.js/pull/10764
            if (newDateFormat !== dateFormat) {
              dateFormat = newDateFormat;
              ngModel.$modelValue = null;

              if (!dateFormat) {
                throw new Error('datepickerPopup must have a date format specified.');
              }
            }
        });
      }

      if (!dateFormat) {
        throw new Error('datepickerPopup must have a date format specified.');
      }

      if (isHtml5DateInput && attrs.datepickerPopup) {
        throw new Error('HTML5 date input types do not support custom formats.');
      }

      // popup element used to display calendar
      var popupEl = angular.element('<div datepicker-popup-wrap><div datepicker></div></div>');
      popupEl.attr({
        'ng-model': 'date',
        'ng-change': 'dateSelection()'
      });

      function cameltoDash( string ){
        return string.replace(/([A-Z])/g, function($1) { return '-' + $1.toLowerCase(); });
      }

      // datepicker element
      var datepickerEl = angular.element(popupEl.children()[0]);
      if (isHtml5DateInput) {
        if (attrs.type == 'month') {
          datepickerEl.attr('datepicker-mode', '"month"');
          datepickerEl.attr('min-mode', 'month');
        }
      }

      if ( attrs.datepickerOptions ) {
        var options = scope.$parent.$eval(attrs.datepickerOptions);
        if(options.initDate) {
          scope.initDate = options.initDate;
          datepickerEl.attr( 'init-date', 'initDate' );
          delete options.initDate;
        }
        angular.forEach(options, function( value, option ) {
          datepickerEl.attr( cameltoDash(option), value );
        });
      }

      scope.watchData = {};
      angular.forEach(['minDate', 'maxDate', 'datepickerMode', 'initDate', 'shortcutPropagation'], function( key ) {
        if ( attrs[key] ) {
          var getAttribute = $parse(attrs[key]);
          scope.$parent.$watch(getAttribute, function(value){
            scope.watchData[key] = value;
          });
          datepickerEl.attr(cameltoDash(key), 'watchData.' + key);

          // Propagate changes from datepicker to outside
          if ( key === 'datepickerMode' ) {
            var setAttribute = getAttribute.assign;
            scope.$watch('watchData.' + key, function(value, oldvalue) {
              if ( value !== oldvalue ) {
                setAttribute(scope.$parent, value);
              }
            });
          }
        }
      });
      if (attrs.dateDisabled) {
        datepickerEl.attr('date-disabled', 'dateDisabled({ date: date, mode: mode })');
      }

      if (attrs.showWeeks) {
        datepickerEl.attr('show-weeks', attrs.showWeeks);
      }

      if (attrs.customClass){
        datepickerEl.attr('custom-class', 'customClass({ date: date, mode: mode })');
      }

      function parseDate(viewValue) {
        if (angular.isNumber(viewValue)) {
          // presumably timestamp to date object
          viewValue = new Date(viewValue);
        }

        if (!viewValue) {
          return null;
        } else if (angular.isDate(viewValue) && !isNaN(viewValue)) {
          return viewValue;
        } else if (angular.isString(viewValue)) {
          var date = dateParser.parse(viewValue, dateFormat, scope.date) || new Date(viewValue);
          if (isNaN(date)) {
            return undefined;
          } else {
            return date;
          }
        } else {
          return undefined;
        }
      }

      function validator(modelValue, viewValue) {
        var value = modelValue || viewValue;
        if (angular.isNumber(value)) {
          value = new Date(value);
        }
        if (!value) {
          return true;
        } else if (angular.isDate(value) && !isNaN(value)) {
          return true;
        } else if (angular.isString(value)) {
          var date = dateParser.parse(value, dateFormat) || new Date(value);
          return !isNaN(date);
        } else {
          return false;
        }
      }

      if (!isHtml5DateInput) {
        // Internal API to maintain the correct ng-invalid-[key] class
        ngModel.$$parserName = 'date';
        ngModel.$validators.date = validator;
        ngModel.$parsers.unshift(parseDate);
        ngModel.$formatters.push(function (value) {
          scope.date = value;
          return ngModel.$isEmpty(value) ? value : dateFilter(value, dateFormat);
        });
      }
      else {
        ngModel.$formatters.push(function (value) {
          scope.date = value;
          return value;
        });
      }

      // Inner change
      scope.dateSelection = function(dt) {
        if (angular.isDefined(dt)) {
          scope.date = dt;
        }
        var date = scope.date ? dateFilter(scope.date, dateFormat) : '';
        element.val(date);
        ngModel.$setViewValue(date);

        if ( closeOnDateSelection ) {
          scope.isOpen = false;
          element[0].focus();
        }
      };

      // Detect changes in the view from the text box
      ngModel.$viewChangeListeners.push(function () {
        scope.date = dateParser.parse(ngModel.$viewValue, dateFormat, scope.date) || new Date(ngModel.$viewValue);
      });

      var documentClickBind = function(event) {
        if (scope.isOpen && event.target !== element[0]) {
          scope.$apply(function() {
            scope.isOpen = false;
          });
        }
      };

      var keydown = function(evt, noApply) {
        scope.keydown(evt);
      };
      element.bind('keydown', keydown);

      scope.keydown = function(evt) {
        if (evt.which === 27) {
          evt.preventDefault();
          if (scope.isOpen) {
            evt.stopPropagation();
          }
          scope.close();
        } else if (evt.which === 40 && !scope.isOpen) {
          scope.isOpen = true;
        }
      };

      scope.$watch('isOpen', function(value) {
        if (value) {
          scope.$broadcast('datepicker.focus');
          scope.position = appendToBody ? $position.offset(element) : $position.position(element);
          scope.position.top = scope.position.top + element.prop('offsetHeight');

          $document.bind('click', documentClickBind);
        } else {
          $document.unbind('click', documentClickBind);
        }
      });

      scope.select = function( date ) {
        if (date === 'today') {
          var today = new Date();
          if (angular.isDate(scope.date)) {
            date = new Date(scope.date);
            date.setFullYear(today.getFullYear(), today.getMonth(), today.getDate());
          } else {
            date = new Date(today.setHours(0, 0, 0, 0));
          }
        }
        scope.dateSelection( date );
      };

      scope.close = function() {
        scope.isOpen = false;
        element[0].focus();
      };

      var $popup = $compile(popupEl)(scope);
      // Prevent jQuery cache memory leak (template is now redundant after linking)
      popupEl.remove();

      if ( appendToBody ) {
        $document.find('body').append($popup);
      } else {
        element.after($popup);
      }

      scope.$on('$destroy', function() {
        $popup.remove();
        element.unbind('keydown', keydown);
        $document.unbind('click', documentClickBind);
      });
    }
  };
}])

.directive('datepickerPopupWrap', function() {
  return {
    restrict:'EA',
    replace: true,
    transclude: true,
    templateUrl: 'template/datepicker/popup.html',
    link:function (scope, element, attrs) {
      element.bind('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
      });
    }
  };
});

angular.module('ui.bootstrap.dropdown', ['ui.bootstrap.position'])

.constant('dropdownConfig', {
  openClass: 'open'
})

.service('dropdownService', ['$document', '$rootScope', function($document, $rootScope) {
  var openScope = null;

  this.open = function( dropdownScope ) {
    if ( !openScope ) {
      $document.bind('click', closeDropdown);
      $document.bind('keydown', escapeKeyBind);
    }

    if ( openScope && openScope !== dropdownScope ) {
        openScope.isOpen = false;
    }

    openScope = dropdownScope;
  };

  this.close = function( dropdownScope ) {
    if ( openScope === dropdownScope ) {
      openScope = null;
      $document.unbind('click', closeDropdown);
      $document.unbind('keydown', escapeKeyBind);
    }
  };

  var closeDropdown = function( evt ) {
    // This method may still be called during the same mouse event that
    // unbound this event handler. So check openScope before proceeding.
    if (!openScope) { return; }

    if( evt && openScope.getAutoClose() === 'disabled' )  { return ; }

    var toggleElement = openScope.getToggleElement();
    if ( evt && toggleElement && toggleElement[0].contains(evt.target) ) {
        return;
    }

    var $element = openScope.getElement();
    if( evt && openScope.getAutoClose() === 'outsideClick' && $element && $element[0].contains(evt.target) ) {
      return;
    }

    openScope.isOpen = false;

    if (!$rootScope.$$phase) {
      openScope.$apply();
    }
  };

  var escapeKeyBind = function( evt ) {
    if ( evt.which === 27 ) {
      openScope.focusToggleElement();
      closeDropdown();
    }
  };
}])

.controller('DropdownController', ['$scope', '$attrs', '$parse', 'dropdownConfig', 'dropdownService', '$animate', '$position', '$document', function($scope, $attrs, $parse, dropdownConfig, dropdownService, $animate, $position, $document) {
  var self = this,
      scope = $scope.$new(), // create a child scope so we are not polluting original one
      openClass = dropdownConfig.openClass,
      getIsOpen,
      setIsOpen = angular.noop,
      toggleInvoker = $attrs.onToggle ? $parse($attrs.onToggle) : angular.noop,
      appendToBody = false;

  this.init = function( element ) {
    self.$element = element;

    if ( $attrs.isOpen ) {
      getIsOpen = $parse($attrs.isOpen);
      setIsOpen = getIsOpen.assign;

      $scope.$watch(getIsOpen, function(value) {
        scope.isOpen = !!value;
      });
    }

    appendToBody = angular.isDefined($attrs.dropdownAppendToBody);

    if ( appendToBody && self.dropdownMenu ) {
      $document.find('body').append( self.dropdownMenu );
      element.on('$destroy', function handleDestroyEvent() {
        self.dropdownMenu.remove();
      });
    }
  };

  this.toggle = function( open ) {
    return scope.isOpen = arguments.length ? !!open : !scope.isOpen;
  };

  // Allow other directives to watch status
  this.isOpen = function() {
    return scope.isOpen;
  };

  scope.getToggleElement = function() {
    return self.toggleElement;
  };

  scope.getAutoClose = function() {
    return $attrs.autoClose || 'always'; //or 'outsideClick' or 'disabled'
  };

  scope.getElement = function() {
    return self.$element;
  };

  scope.focusToggleElement = function() {
    if ( self.toggleElement ) {
      self.toggleElement[0].focus();
    }
  };

  scope.$watch('isOpen', function( isOpen, wasOpen ) {
    if ( appendToBody && self.dropdownMenu ) {
      var pos = $position.positionElements(self.$element, self.dropdownMenu, 'bottom-left', true);
      self.dropdownMenu.css({
        top: pos.top + 'px',
        left: pos.left + 'px',
        display: isOpen ? 'block' : 'none'
      });
    }

    $animate[isOpen ? 'addClass' : 'removeClass'](self.$element, openClass);

    if ( isOpen ) {
      scope.focusToggleElement();
      dropdownService.open( scope );
    } else {
      dropdownService.close( scope );
    }

    setIsOpen($scope, isOpen);
    if (angular.isDefined(isOpen) && isOpen !== wasOpen) {
      toggleInvoker($scope, { open: !!isOpen });
    }
  });

  $scope.$on('$locationChangeSuccess', function() {
    scope.isOpen = false;
  });

  $scope.$on('$destroy', function() {
    scope.$destroy();
  });
}])

.directive('dropdown', function() {
  return {
    controller: 'DropdownController',
    link: function(scope, element, attrs, dropdownCtrl) {
      dropdownCtrl.init( element );
    }
  };
})

.directive('dropdownMenu', function() {
  return {
    restrict: 'AC',
    require: '?^dropdown',
    link: function(scope, element, attrs, dropdownCtrl) {
      if ( !dropdownCtrl ) {
        return;
      }
      dropdownCtrl.dropdownMenu = element;
    }
  };
})

.directive('dropdownToggle', function() {
  return {
    require: '?^dropdown',
    link: function(scope, element, attrs, dropdownCtrl) {
      if ( !dropdownCtrl ) {
        return;
      }

      dropdownCtrl.toggleElement = element;

      var toggleDropdown = function(event) {
        event.preventDefault();

        if ( !element.hasClass('disabled') && !attrs.disabled ) {
          scope.$apply(function() {
            dropdownCtrl.toggle();
          });
        }
      };

      element.bind('click', toggleDropdown);

      // WAI-ARIA
      element.attr({ 'aria-haspopup': true, 'aria-expanded': false });
      scope.$watch(dropdownCtrl.isOpen, function( isOpen ) {
        element.attr('aria-expanded', !!isOpen);
      });

      scope.$on('$destroy', function() {
        element.unbind('click', toggleDropdown);
      });
    }
  };
});

angular.module('ui.bootstrap.modal', [])

/**
 * A helper, internal data structure that acts as a map but also allows getting / removing
 * elements in the LIFO order
 */
  .factory('$$stackedMap', function () {
    return {
      createNew: function () {
        var stack = [];

        return {
          add: function (key, value) {
            stack.push({
              key: key,
              value: value
            });
          },
          get: function (key) {
            for (var i = 0; i < stack.length; i++) {
              if (key == stack[i].key) {
                return stack[i];
              }
            }
          },
          keys: function() {
            var keys = [];
            for (var i = 0; i < stack.length; i++) {
              keys.push(stack[i].key);
            }
            return keys;
          },
          top: function () {
            return stack[stack.length - 1];
          },
          remove: function (key) {
            var idx = -1;
            for (var i = 0; i < stack.length; i++) {
              if (key == stack[i].key) {
                idx = i;
                break;
              }
            }
            return stack.splice(idx, 1)[0];
          },
          removeTop: function () {
            return stack.splice(stack.length - 1, 1)[0];
          },
          length: function () {
            return stack.length;
          }
        };
      }
    };
  })

/**
 * A helper directive for the $modal service. It creates a backdrop element.
 */
  .directive('modalBackdrop', ['$timeout', function ($timeout) {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'template/modal/backdrop.html',
      compile: function (tElement, tAttrs) {
        tElement.addClass(tAttrs.backdropClass);
        return linkFn;
      }
    };

    function linkFn(scope, element, attrs) {
      scope.animate = false;

      //trigger CSS transitions
      $timeout(function () {
        scope.animate = true;
      });
    }
  }])

  .directive('modalWindow', ['$modalStack', '$q', function ($modalStack, $q) {
    return {
      restrict: 'EA',
      scope: {
        index: '@',
        animate: '='
      },
      replace: true,
      transclude: true,
      templateUrl: function(tElement, tAttrs) {
        return tAttrs.templateUrl || 'template/modal/window.html';
      },
      link: function (scope, element, attrs) {
        element.addClass(attrs.windowClass || '');
        scope.size = attrs.size;

        scope.close = function (evt) {
          var modal = $modalStack.getTop();
          if (modal && modal.value.backdrop && modal.value.backdrop != 'static' && (evt.target === evt.currentTarget)) {
            evt.preventDefault();
            evt.stopPropagation();
            $modalStack.dismiss(modal.key, 'backdrop click');
          }
        };

        // This property is only added to the scope for the purpose of detecting when this directive is rendered.
        // We can detect that by using this property in the template associated with this directive and then use
        // {@link Attribute#$observe} on it. For more details please see {@link TableColumnResize}.
        scope.$isRendered = true;

        // Deferred object that will be resolved when this modal is render.
        var modalRenderDeferObj = $q.defer();
        // Observe function will be called on next digest cycle after compilation, ensuring that the DOM is ready.
        // In order to use this way of finding whether DOM is ready, we need to observe a scope property used in modal's template.
        attrs.$observe('modalRender', function (value) {
          if (value == 'true') {
            modalRenderDeferObj.resolve();
          }
        });

        modalRenderDeferObj.promise.then(function () {
          // trigger CSS transitions
          scope.animate = true;

          var inputsWithAutofocus = element[0].querySelectorAll('[autofocus]');
          /**
           * Auto-focusing of a freshly-opened modal element causes any child elements
           * with the autofocus attribute to lose focus. This is an issue on touch
           * based devices which will show and then hide the onscreen keyboard.
           * Attempts to refocus the autofocus element via JavaScript will not reopen
           * the onscreen keyboard. Fixed by updated the focusing logic to only autofocus
           * the modal element if the modal does not contain an autofocus element.
           */
          if (inputsWithAutofocus.length) {
            inputsWithAutofocus[0].focus();
          } else {
            element[0].focus();
          }

          // Notify {@link $modalStack} that modal is rendered.
          var modal = $modalStack.getTop();
          if (modal) {
            $modalStack.modalRendered(modal.key);
          }
        });
      }
    };
  }])

  .directive('modalAnimationClass', [
    function () {
      return {
        compile: function (tElement, tAttrs) {
          if (tAttrs.modalAnimation) {
            tElement.addClass(tAttrs.modalAnimationClass);
          }
        }
      };
    }])

  .directive('modalTransclude', function () {
    return {
      link: function($scope, $element, $attrs, controller, $transclude) {
        $transclude($scope.$parent, function(clone) {
          $element.empty();
          $element.append(clone);
        });
      }
    };
  })

  .factory('$modalStack', ['$animate', '$timeout', '$document', '$compile', '$rootScope', '$$stackedMap',
    function ($animate, $timeout, $document, $compile, $rootScope, $$stackedMap) {

      var OPENED_MODAL_CLASS = 'modal-open';

      var backdropDomEl, backdropScope;
      var openedWindows = $$stackedMap.createNew();
      var $modalStack = {};

      function backdropIndex() {
        var topBackdropIndex = -1;
        var opened = openedWindows.keys();
        for (var i = 0; i < opened.length; i++) {
          if (openedWindows.get(opened[i]).value.backdrop) {
            topBackdropIndex = i;
          }
        }
        return topBackdropIndex;
      }

      $rootScope.$watch(backdropIndex, function(newBackdropIndex){
        if (backdropScope) {
          backdropScope.index = newBackdropIndex;
        }
      });

      function removeModalWindow(modalInstance) {

        var body = $document.find('body').eq(0);
        var modalWindow = openedWindows.get(modalInstance).value;

        //clean up the stack
        openedWindows.remove(modalInstance);

        //remove window DOM element
        removeAfterAnimate(modalWindow.modalDomEl, modalWindow.modalScope, function() {
          body.toggleClass(OPENED_MODAL_CLASS, openedWindows.length() > 0);
          checkRemoveBackdrop();
        });
      }

      function checkRemoveBackdrop() {
          //remove backdrop if no longer needed
          if (backdropDomEl && backdropIndex() == -1) {
            var backdropScopeRef = backdropScope;
            removeAfterAnimate(backdropDomEl, backdropScope, function () {
              backdropScopeRef = null;
            });
            backdropDomEl = undefined;
            backdropScope = undefined;
          }
      }

      function removeAfterAnimate(domEl, scope, done) {
        // Closing animation
        scope.animate = false;

        if (domEl.attr('modal-animation') && $animate.enabled()) {
          // transition out
          domEl.one('$animate:close', function closeFn() {
            $rootScope.$evalAsync(afterAnimating);
          });
        } else {
          // Ensure this call is async
          $timeout(afterAnimating);
        }

        function afterAnimating() {
          if (afterAnimating.done) {
            return;
          }
          afterAnimating.done = true;

          domEl.remove();
          scope.$destroy();
          if (done) {
            done();
          }
        }
      }

      $document.bind('keydown', function (evt) {
        var modal;

        if (evt.which === 27) {
          modal = openedWindows.top();
          if (modal && modal.value.keyboard) {
            evt.preventDefault();
            $rootScope.$apply(function () {
              $modalStack.dismiss(modal.key, 'escape key press');
            });
          }
        }
      });

      $modalStack.open = function (modalInstance, modal) {

        var modalOpener = $document[0].activeElement;

        openedWindows.add(modalInstance, {
          deferred: modal.deferred,
          renderDeferred: modal.renderDeferred,
          modalScope: modal.scope,
          backdrop: modal.backdrop,
          keyboard: modal.keyboard
        });

        var body = $document.find('body').eq(0),
            currBackdropIndex = backdropIndex();

        if (currBackdropIndex >= 0 && !backdropDomEl) {
          backdropScope = $rootScope.$new(true);
          backdropScope.index = currBackdropIndex;
          var angularBackgroundDomEl = angular.element('<div modal-backdrop="modal-backdrop"></div>');
          angularBackgroundDomEl.attr('backdrop-class', modal.backdropClass);
          if (modal.animation) {
            angularBackgroundDomEl.attr('modal-animation', 'true');
          }
          backdropDomEl = $compile(angularBackgroundDomEl)(backdropScope);
          body.append(backdropDomEl);
        }

        var angularDomEl = angular.element('<div modal-window="modal-window"></div>');
        angularDomEl.attr({
          'template-url': modal.windowTemplateUrl,
          'window-class': modal.windowClass,
          'size': modal.size,
          'index': openedWindows.length() - 1,
          'animate': 'animate'
        }).html(modal.content);
        if (modal.animation) {
          angularDomEl.attr('modal-animation', 'true');
        }

        var modalDomEl = $compile(angularDomEl)(modal.scope);
        openedWindows.top().value.modalDomEl = modalDomEl;
        openedWindows.top().value.modalOpener = modalOpener;
        body.append(modalDomEl);
        body.addClass(OPENED_MODAL_CLASS);
      };

      function broadcastClosing(modalWindow, resultOrReason, closing) {
          return !modalWindow.value.modalScope.$broadcast('modal.closing', resultOrReason, closing).defaultPrevented;
      }

      $modalStack.close = function (modalInstance, result) {
        var modalWindow = openedWindows.get(modalInstance);
        if (modalWindow && broadcastClosing(modalWindow, result, true)) {
          modalWindow.value.deferred.resolve(result);
          removeModalWindow(modalInstance);
          modalWindow.value.modalOpener.focus();
          return true;
        }
        return !modalWindow;
      };

      $modalStack.dismiss = function (modalInstance, reason) {
        var modalWindow = openedWindows.get(modalInstance);
        if (modalWindow && broadcastClosing(modalWindow, reason, false)) {
          modalWindow.value.deferred.reject(reason);
          removeModalWindow(modalInstance);
          modalWindow.value.modalOpener.focus();
          return true;
        }
        return !modalWindow;
      };

      $modalStack.dismissAll = function (reason) {
        var topModal = this.getTop();
        while (topModal && this.dismiss(topModal.key, reason)) {
          topModal = this.getTop();
        }
      };

      $modalStack.getTop = function () {
        return openedWindows.top();
      };

      $modalStack.modalRendered = function (modalInstance) {
        var modalWindow = openedWindows.get(modalInstance);
        if (modalWindow) {
          modalWindow.value.renderDeferred.resolve();
        }
      };

      return $modalStack;
    }])

  .provider('$modal', function () {

    var $modalProvider = {
      options: {
        animation: true,
        backdrop: true, //can also be false or 'static'
        keyboard: true
      },
      $get: ['$injector', '$rootScope', '$q', '$templateRequest', '$controller', '$modalStack',
        function ($injector, $rootScope, $q, $templateRequest, $controller, $modalStack) {

          var $modal = {};

          function getTemplatePromise(options) {
            return options.template ? $q.when(options.template) :
              $templateRequest(angular.isFunction(options.templateUrl) ? (options.templateUrl)() : options.templateUrl);
          }

          function getResolvePromises(resolves) {
            var promisesArr = [];
            angular.forEach(resolves, function (value) {
              if (angular.isFunction(value) || angular.isArray(value)) {
                promisesArr.push($q.when($injector.invoke(value)));
              }
            });
            return promisesArr;
          }

          $modal.open = function (modalOptions) {

            var modalResultDeferred = $q.defer();
            var modalOpenedDeferred = $q.defer();
            var modalRenderDeferred = $q.defer();

            //prepare an instance of a modal to be injected into controllers and returned to a caller
            var modalInstance = {
              result: modalResultDeferred.promise,
              opened: modalOpenedDeferred.promise,
              rendered: modalRenderDeferred.promise,
              close: function (result) {
                return $modalStack.close(modalInstance, result);
              },
              dismiss: function (reason) {
                return $modalStack.dismiss(modalInstance, reason);
              }
            };

            //merge and clean up options
            modalOptions = angular.extend({}, $modalProvider.options, modalOptions);
            modalOptions.resolve = modalOptions.resolve || {};

            //verify options
            if (!modalOptions.template && !modalOptions.templateUrl) {
              throw new Error('One of template or templateUrl options is required.');
            }

            var templateAndResolvePromise =
              $q.all([getTemplatePromise(modalOptions)].concat(getResolvePromises(modalOptions.resolve)));


            templateAndResolvePromise.then(function resolveSuccess(tplAndVars) {

              var modalScope = (modalOptions.scope || $rootScope).$new();
              modalScope.$close = modalInstance.close;
              modalScope.$dismiss = modalInstance.dismiss;

              var ctrlInstance, ctrlLocals = {};
              var resolveIter = 1;

              //controllers
              if (modalOptions.controller) {
                ctrlLocals.$scope = modalScope;
                ctrlLocals.$modalInstance = modalInstance;
                angular.forEach(modalOptions.resolve, function (value, key) {
                  ctrlLocals[key] = tplAndVars[resolveIter++];
                });

                ctrlInstance = $controller(modalOptions.controller, ctrlLocals);
                if (modalOptions.controllerAs) {
                  modalScope[modalOptions.controllerAs] = ctrlInstance;
                }
              }

              $modalStack.open(modalInstance, {
                scope: modalScope,
                deferred: modalResultDeferred,
                renderDeferred: modalRenderDeferred,
                content: tplAndVars[0],
                animation: modalOptions.animation,
                backdrop: modalOptions.backdrop,
                keyboard: modalOptions.keyboard,
                backdropClass: modalOptions.backdropClass,
                windowClass: modalOptions.windowClass,
                windowTemplateUrl: modalOptions.windowTemplateUrl,
                size: modalOptions.size
              });

            }, function resolveError(reason) {
              modalResultDeferred.reject(reason);
            });

            templateAndResolvePromise.then(function () {
              modalOpenedDeferred.resolve(true);
            }, function (reason) {
              modalOpenedDeferred.reject(reason);
            });

            return modalInstance;
          };

          return $modal;
        }]
    };

    return $modalProvider;
  });

angular.module('ui.bootstrap.pagination', [])

.controller('PaginationController', ['$scope', '$attrs', '$parse', function ($scope, $attrs, $parse) {
  var self = this,
      ngModelCtrl = { $setViewValue: angular.noop }, // nullModelCtrl
      setNumPages = $attrs.numPages ? $parse($attrs.numPages).assign : angular.noop;

  this.init = function(ngModelCtrl_, config) {
    ngModelCtrl = ngModelCtrl_;
    this.config = config;

    ngModelCtrl.$render = function() {
      self.render();
    };

    if ($attrs.itemsPerPage) {
      $scope.$parent.$watch($parse($attrs.itemsPerPage), function(value) {
        self.itemsPerPage = parseInt(value, 10);
        $scope.totalPages = self.calculateTotalPages();
      });
    } else {
      this.itemsPerPage = config.itemsPerPage;
    }

    $scope.$watch('totalItems', function() {
      $scope.totalPages = self.calculateTotalPages();
    });

    $scope.$watch('totalPages', function(value) {
      setNumPages($scope.$parent, value); // Readonly variable

      if ( $scope.page > value ) {
        $scope.selectPage(value);
      } else {
        ngModelCtrl.$render();
      }
    });
  };

  this.calculateTotalPages = function() {
    var totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil($scope.totalItems / this.itemsPerPage);
    return Math.max(totalPages || 0, 1);
  };

  this.render = function() {
    $scope.page = parseInt(ngModelCtrl.$viewValue, 10) || 1;
  };

  $scope.selectPage = function(page, evt) {
    if ( $scope.page !== page && page > 0 && page <= $scope.totalPages) {
      if (evt && evt.target) {
        evt.target.blur();
      }
      ngModelCtrl.$setViewValue(page);
      ngModelCtrl.$render();
    }
  };

  $scope.getText = function( key ) {
    return $scope[key + 'Text'] || self.config[key + 'Text'];
  };
  $scope.noPrevious = function() {
    return $scope.page === 1;
  };
  $scope.noNext = function() {
    return $scope.page === $scope.totalPages;
  };
}])

.constant('paginationConfig', {
  itemsPerPage: 10,
  boundaryLinks: false,
  directionLinks: true,
  firstText: 'First',
  previousText: 'Previous',
  nextText: 'Next',
  lastText: 'Last',
  rotate: true
})

.directive('pagination', ['$parse', 'paginationConfig', function($parse, paginationConfig) {
  return {
    restrict: 'EA',
    scope: {
      totalItems: '=',
      firstText: '@',
      previousText: '@',
      nextText: '@',
      lastText: '@'
    },
    require: ['pagination', '?ngModel'],
    controller: 'PaginationController',
    templateUrl: 'template/pagination/pagination.html',
    replace: true,
    link: function(scope, element, attrs, ctrls) {
      var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      if (!ngModelCtrl) {
         return; // do nothing if no ng-model
      }

      // Setup configuration parameters
      var maxSize = angular.isDefined(attrs.maxSize) ? scope.$parent.$eval(attrs.maxSize) : paginationConfig.maxSize,
          rotate = angular.isDefined(attrs.rotate) ? scope.$parent.$eval(attrs.rotate) : paginationConfig.rotate;
      scope.boundaryLinks = angular.isDefined(attrs.boundaryLinks) ? scope.$parent.$eval(attrs.boundaryLinks) : paginationConfig.boundaryLinks;
      scope.directionLinks = angular.isDefined(attrs.directionLinks) ? scope.$parent.$eval(attrs.directionLinks) : paginationConfig.directionLinks;

      paginationCtrl.init(ngModelCtrl, paginationConfig);

      if (attrs.maxSize) {
        scope.$parent.$watch($parse(attrs.maxSize), function(value) {
          maxSize = parseInt(value, 10);
          paginationCtrl.render();
        });
      }

      // Create page object used in template
      function makePage(number, text, isActive) {
        return {
          number: number,
          text: text,
          active: isActive
        };
      }

      function getPages(currentPage, totalPages) {
        var pages = [];

        // Default page limits
        var startPage = 1, endPage = totalPages;
        var isMaxSized = ( angular.isDefined(maxSize) && maxSize < totalPages );

        // recompute if maxSize
        if ( isMaxSized ) {
          if ( rotate ) {
            // Current page is displayed in the middle of the visible ones
            startPage = Math.max(currentPage - Math.floor(maxSize/2), 1);
            endPage   = startPage + maxSize - 1;

            // Adjust if limit is exceeded
            if (endPage > totalPages) {
              endPage   = totalPages;
              startPage = endPage - maxSize + 1;
            }
          } else {
            // Visible pages are paginated with maxSize
            startPage = ((Math.ceil(currentPage / maxSize) - 1) * maxSize) + 1;

            // Adjust last page if limit is exceeded
            endPage = Math.min(startPage + maxSize - 1, totalPages);
          }
        }

        // Add page number links
        for (var number = startPage; number <= endPage; number++) {
          var page = makePage(number, number, number === currentPage);
          pages.push(page);
        }

        // Add links to move between page sets
        if ( isMaxSized && ! rotate ) {
          if ( startPage > 1 ) {
            var previousPageSet = makePage(startPage - 1, '...', false);
            pages.unshift(previousPageSet);
          }

          if ( endPage < totalPages ) {
            var nextPageSet = makePage(endPage + 1, '...', false);
            pages.push(nextPageSet);
          }
        }

        return pages;
      }

      var originalRender = paginationCtrl.render;
      paginationCtrl.render = function() {
        originalRender();
        if (scope.page > 0 && scope.page <= scope.totalPages) {
          scope.pages = getPages(scope.page, scope.totalPages);
        }
      };
    }
  };
}])

.constant('pagerConfig', {
  itemsPerPage: 10,
  previousText: '« Previous',
  nextText: 'Next »',
  align: true
})

.directive('pager', ['pagerConfig', function(pagerConfig) {
  return {
    restrict: 'EA',
    scope: {
      totalItems: '=',
      previousText: '@',
      nextText: '@'
    },
    require: ['pager', '?ngModel'],
    controller: 'PaginationController',
    templateUrl: 'template/pagination/pager.html',
    replace: true,
    link: function(scope, element, attrs, ctrls) {
      var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      if (!ngModelCtrl) {
         return; // do nothing if no ng-model
      }

      scope.align = angular.isDefined(attrs.align) ? scope.$parent.$eval(attrs.align) : pagerConfig.align;
      paginationCtrl.init(ngModelCtrl, pagerConfig);
    }
  };
}]);

/**
 * The following features are still outstanding: animation as a
 * function, placement as a function, inside, support for more triggers than
 * just mouse enter/leave, html tooltips, and selector delegation.
 */
angular.module( 'ui.bootstrap.tooltip', [ 'ui.bootstrap.position', 'ui.bootstrap.bindHtml' ] )

/**
 * The $tooltip service creates tooltip- and popover-like directives as well as
 * houses global options for them.
 */
.provider( '$tooltip', function () {
  // The default options tooltip and popover.
  var defaultOptions = {
    placement: 'top',
    animation: true,
    popupDelay: 0,
    useContentExp: false
  };

  // Default hide triggers for each show trigger
  var triggerMap = {
    'mouseenter': 'mouseleave',
    'click': 'click',
    'focus': 'blur'
  };

  // The options specified to the provider globally.
  var globalOptions = {};

  /**
   * `options({})` allows global configuration of all tooltips in the
   * application.
   *
   *   var app = angular.module( 'App', ['ui.bootstrap.tooltip'], function( $tooltipProvider ) {
   *     // place tooltips left instead of top by default
   *     $tooltipProvider.options( { placement: 'left' } );
   *   });
   */
	this.options = function( value ) {
		angular.extend( globalOptions, value );
	};

  /**
   * This allows you to extend the set of trigger mappings available. E.g.:
   *
   *   $tooltipProvider.setTriggers( 'openTrigger': 'closeTrigger' );
   */
  this.setTriggers = function setTriggers ( triggers ) {
    angular.extend( triggerMap, triggers );
  };

  /**
   * This is a helper function for translating camel-case to snake-case.
   */
  function snake_case(name){
    var regexp = /[A-Z]/g;
    var separator = '-';
    return name.replace(regexp, function(letter, pos) {
      return (pos ? separator : '') + letter.toLowerCase();
    });
  }

  /**
   * Returns the actual instance of the $tooltip service.
   * TODO support multiple triggers
   */
  this.$get = [ '$window', '$compile', '$timeout', '$document', '$position', '$interpolate', function ( $window, $compile, $timeout, $document, $position, $interpolate ) {
    return function $tooltip ( type, prefix, defaultTriggerShow, options ) {
      options = angular.extend( {}, defaultOptions, globalOptions, options );

      /**
       * Returns an object of show and hide triggers.
       *
       * If a trigger is supplied,
       * it is used to show the tooltip; otherwise, it will use the `trigger`
       * option passed to the `$tooltipProvider.options` method; else it will
       * default to the trigger supplied to this directive factory.
       *
       * The hide trigger is based on the show trigger. If the `trigger` option
       * was passed to the `$tooltipProvider.options` method, it will use the
       * mapped trigger from `triggerMap` or the passed trigger if the map is
       * undefined; otherwise, it uses the `triggerMap` value of the show
       * trigger; else it will just use the show trigger.
       */
      function getTriggers ( trigger ) {
        var show = trigger || options.trigger || defaultTriggerShow;
        var hide = triggerMap[show] || show;
        return {
          show: show,
          hide: hide
        };
      }

      var directiveName = snake_case( type );

      var startSym = $interpolate.startSymbol();
      var endSym = $interpolate.endSymbol();
      var template =
        '<div '+ directiveName +'-popup '+
          'title="'+startSym+'title'+endSym+'" '+
          (options.useContentExp ?
            'content-exp="contentExp()" ' :
            'content="'+startSym+'content'+endSym+'" ') +
          'placement="'+startSym+'placement'+endSym+'" '+
          'popup-class="'+startSym+'popupClass'+endSym+'" '+
          'animation="animation" '+
          'is-open="isOpen"'+
          'origin-scope="origScope" '+
          '>'+
        '</div>';

      return {
        restrict: 'EA',
        compile: function (tElem, tAttrs) {
          var tooltipLinker = $compile( template );

          return function link ( scope, element, attrs, tooltipCtrl ) {
            var tooltip;
            var tooltipLinkedScope;
            var transitionTimeout;
            var popupTimeout;
            var appendToBody = angular.isDefined( options.appendToBody ) ? options.appendToBody : false;
            var triggers = getTriggers( undefined );
            var hasEnableExp = angular.isDefined(attrs[prefix+'Enable']);
            var ttScope = scope.$new(true);

            var positionTooltip = function () {
              if (!tooltip) { return; }

              var ttPosition = $position.positionElements(element, tooltip, ttScope.placement, appendToBody);
              ttPosition.top += 'px';
              ttPosition.left += 'px';

              // Now set the calculated positioning.
              tooltip.css( ttPosition );
            };

            // Set up the correct scope to allow transclusion later
            ttScope.origScope = scope;

            // By default, the tooltip is not open.
            // TODO add ability to start tooltip opened
            ttScope.isOpen = false;

            function toggleTooltipBind () {
              if ( ! ttScope.isOpen ) {
                showTooltipBind();
              } else {
                hideTooltipBind();
              }
            }

            // Show the tooltip with delay if specified, otherwise show it immediately
            function showTooltipBind() {
              if(hasEnableExp && !scope.$eval(attrs[prefix+'Enable'])) {
                return;
              }

              prepareTooltip();

              if ( ttScope.popupDelay ) {
                // Do nothing if the tooltip was already scheduled to pop-up.
                // This happens if show is triggered multiple times before any hide is triggered.
                if (!popupTimeout) {
                  popupTimeout = $timeout( show, ttScope.popupDelay, false );
                  popupTimeout.then(function(reposition){reposition();});
                }
              } else {
                show()();
              }
            }

            function hideTooltipBind () {
              scope.$apply(function () {
                hide();
              });
            }

            // Show the tooltip popup element.
            function show() {

              popupTimeout = null;

              // If there is a pending remove transition, we must cancel it, lest the
              // tooltip be mysteriously removed.
              if ( transitionTimeout ) {
                $timeout.cancel( transitionTimeout );
                transitionTimeout = null;
              }

              // Don't show empty tooltips.
              if ( !(options.useContentExp ? ttScope.contentExp() : ttScope.content) ) {
                return angular.noop;
              }

              createTooltip();

              // Set the initial positioning.
              tooltip.css({ top: 0, left: 0, display: 'block' });
              ttScope.$digest();

              positionTooltip();

              // And show the tooltip.
              ttScope.isOpen = true;
              ttScope.$apply(); // digest required as $apply is not called

              // Return positioning function as promise callback for correct
              // positioning after draw.
              return positionTooltip;
            }

            // Hide the tooltip popup element.
            function hide() {
              // First things first: we don't show it anymore.
              ttScope.isOpen = false;

              //if tooltip is going to be shown after delay, we must cancel this
              $timeout.cancel( popupTimeout );
              popupTimeout = null;

              // And now we remove it from the DOM. However, if we have animation, we
              // need to wait for it to expire beforehand.
              // FIXME: this is a placeholder for a port of the transitions library.
              if ( ttScope.animation ) {
                if (!transitionTimeout) {
                  transitionTimeout = $timeout(removeTooltip, 500);
                }
              } else {
                removeTooltip();
              }
            }

            function createTooltip() {
              // There can only be one tooltip element per directive shown at once.
              if (tooltip) {
                removeTooltip();
              }
              tooltipLinkedScope = ttScope.$new();
              tooltip = tooltipLinker(tooltipLinkedScope, function (tooltip) {
                if ( appendToBody ) {
                  $document.find( 'body' ).append( tooltip );
                } else {
                  element.after( tooltip );
                }
              });

              tooltipLinkedScope.$watch(function () {
                $timeout(positionTooltip, 0, false);
              });

              if (options.useContentExp) {
                tooltipLinkedScope.$watch('contentExp()', function (val) {
                  if (!val && ttScope.isOpen ) {
                    hide();
                  }
                });
              }
            }

            function removeTooltip() {
              transitionTimeout = null;
              if (tooltip) {
                tooltip.remove();
                tooltip = null;
              }
              if (tooltipLinkedScope) {
                tooltipLinkedScope.$destroy();
                tooltipLinkedScope = null;
              }
            }

            function prepareTooltip() {
              prepPopupClass();
              prepPlacement();
              prepPopupDelay();
            }

            ttScope.contentExp = function () {
              return scope.$eval(attrs[type]);
            };

            /**
             * Observe the relevant attributes.
             */
            if (!options.useContentExp) {
              attrs.$observe( type, function ( val ) {
                ttScope.content = val;

                if (!val && ttScope.isOpen ) {
                  hide();
                }
              });
            }

            attrs.$observe( 'disabled', function ( val ) {
              if (val && ttScope.isOpen ) {
                hide();
              }
            });

            attrs.$observe( prefix+'Title', function ( val ) {
              ttScope.title = val;
            });

            function prepPopupClass() {
              ttScope.popupClass = attrs[prefix + 'Class'];
            }

            function prepPlacement() {
              var val = attrs[ prefix + 'Placement' ];
              ttScope.placement = angular.isDefined( val ) ? val : options.placement;
            }

            function prepPopupDelay() {
              var val = attrs[ prefix + 'PopupDelay' ];
              var delay = parseInt( val, 10 );
              ttScope.popupDelay = ! isNaN(delay) ? delay : options.popupDelay;
            }

            var unregisterTriggers = function () {
              element.unbind(triggers.show, showTooltipBind);
              element.unbind(triggers.hide, hideTooltipBind);
            };

            function prepTriggers() {
              var val = attrs[ prefix + 'Trigger' ];
              unregisterTriggers();

              triggers = getTriggers( val );

              if ( triggers.show === triggers.hide ) {
                element.bind( triggers.show, toggleTooltipBind );
              } else {
                element.bind( triggers.show, showTooltipBind );
                element.bind( triggers.hide, hideTooltipBind );
              }
            }
            prepTriggers();

            var animation = scope.$eval(attrs[prefix + 'Animation']);
            ttScope.animation = angular.isDefined(animation) ? !!animation : options.animation;

            var appendToBodyVal = scope.$eval(attrs[prefix + 'AppendToBody']);
            appendToBody = angular.isDefined(appendToBodyVal) ? appendToBodyVal : appendToBody;

            // if a tooltip is attached to <body> we need to remove it on
            // location change as its parent scope will probably not be destroyed
            // by the change.
            if ( appendToBody ) {
              scope.$on('$locationChangeSuccess', function closeTooltipOnLocationChangeSuccess () {
              if ( ttScope.isOpen ) {
                hide();
              }
            });
            }

            // Make sure tooltip is destroyed and removed.
            scope.$on('$destroy', function onDestroyTooltip() {
              $timeout.cancel( transitionTimeout );
              $timeout.cancel( popupTimeout );
              unregisterTriggers();
              removeTooltip();
              ttScope = null;
            });
          };
        }
      };
    };
  }];
})

// This is mostly ngInclude code but with a custom scope
.directive( 'tooltipTemplateTransclude', [
         '$animate', '$sce', '$compile', '$templateRequest',
function ($animate ,  $sce ,  $compile ,  $templateRequest) {
  return {
    link: function ( scope, elem, attrs ) {
      var origScope = scope.$eval(attrs.tooltipTemplateTranscludeScope);

      var changeCounter = 0,
        currentScope,
        previousElement,
        currentElement;

      var cleanupLastIncludeContent = function() {
        if (previousElement) {
          previousElement.remove();
          previousElement = null;
        }
        if (currentScope) {
          currentScope.$destroy();
          currentScope = null;
        }
        if (currentElement) {
          $animate.leave(currentElement).then(function() {
            previousElement = null;
          });
          previousElement = currentElement;
          currentElement = null;
        }
      };

      scope.$watch($sce.parseAsResourceUrl(attrs.tooltipTemplateTransclude), function (src) {
        var thisChangeId = ++changeCounter;

        if (src) {
          //set the 2nd param to true to ignore the template request error so that the inner
          //contents and scope can be cleaned up.
          $templateRequest(src, true).then(function(response) {
            if (thisChangeId !== changeCounter) { return; }
            var newScope = origScope.$new();
            var template = response;

            var clone = $compile(template)(newScope, function(clone) {
              cleanupLastIncludeContent();
              $animate.enter(clone, elem);
            });

            currentScope = newScope;
            currentElement = clone;

            currentScope.$emit('$includeContentLoaded', src);
          }, function() {
            if (thisChangeId === changeCounter) {
              cleanupLastIncludeContent();
              scope.$emit('$includeContentError', src);
            }
          });
          scope.$emit('$includeContentRequested', src);
        } else {
          cleanupLastIncludeContent();
        }
      });

      scope.$on('$destroy', cleanupLastIncludeContent);
    }
  };
}])

/**
 * Note that it's intentional that these classes are *not* applied through $animate.
 * They must not be animated as they're expected to be present on the tooltip on
 * initialization.
 */
.directive('tooltipClasses', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      if (scope.placement) {
        element.addClass(scope.placement);
      }
      if (scope.popupClass) {
        element.addClass(scope.popupClass);
      }
      if (scope.animation()) {
        element.addClass(attrs.tooltipAnimationClass);
      }
    }
  };
})

.directive( 'tooltipPopup', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: { content: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
    templateUrl: 'template/tooltip/tooltip-popup.html'
  };
})

.directive( 'tooltip', [ '$tooltip', function ( $tooltip ) {
  return $tooltip( 'tooltip', 'tooltip', 'mouseenter' );
}])

.directive( 'tooltipTemplatePopup', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: { contentExp: '&', placement: '@', popupClass: '@', animation: '&', isOpen: '&',
      originScope: '&' },
    templateUrl: 'template/tooltip/tooltip-template-popup.html'
  };
})

.directive( 'tooltipTemplate', [ '$tooltip', function ( $tooltip ) {
  return $tooltip('tooltipTemplate', 'tooltip', 'mouseenter', {
    useContentExp: true
  });
}])

.directive( 'tooltipHtmlPopup', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: { contentExp: '&', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
    templateUrl: 'template/tooltip/tooltip-html-popup.html'
  };
})

.directive( 'tooltipHtml', [ '$tooltip', function ( $tooltip ) {
  return $tooltip('tooltipHtml', 'tooltip', 'mouseenter', {
    useContentExp: true
  });
}])

/*
Deprecated
*/
.directive( 'tooltipHtmlUnsafePopup', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: { content: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
    templateUrl: 'template/tooltip/tooltip-html-unsafe-popup.html'
  };
})

.value('tooltipHtmlUnsafeSuppressDeprecated', false)
.directive( 'tooltipHtmlUnsafe', [
          '$tooltip', 'tooltipHtmlUnsafeSuppressDeprecated', '$log',
function ( $tooltip ,  tooltipHtmlUnsafeSuppressDeprecated ,  $log) {
  if (!tooltipHtmlUnsafeSuppressDeprecated) {
    $log.warn('tooltip-html-unsafe is now deprecated. Use tooltip-html or tooltip-template instead.');
  }
  return $tooltip( 'tooltipHtmlUnsafe', 'tooltip', 'mouseenter' );
}]);

/**
 * The following features are still outstanding: popup delay, animation as a
 * function, placement as a function, inside, support for more triggers than
 * just mouse enter/leave, html popovers, and selector delegatation.
 */
angular.module( 'ui.bootstrap.popover', [ 'ui.bootstrap.tooltip' ] )

.directive( 'popoverTemplatePopup', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: { title: '@', contentExp: '&', placement: '@', popupClass: '@', animation: '&', isOpen: '&',
      originScope: '&' },
    templateUrl: 'template/popover/popover-template.html'
  };
})

.directive( 'popoverTemplate', [ '$tooltip', function ( $tooltip ) {
  return $tooltip( 'popoverTemplate', 'popover', 'click', {
    useContentExp: true
  } );
}])

.directive( 'popoverPopup', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: { title: '@', content: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
    templateUrl: 'template/popover/popover.html'
  };
})

.directive( 'popover', [ '$tooltip', function ( $tooltip ) {
  return $tooltip( 'popover', 'popover', 'click' );
}]);

angular.module('ui.bootstrap.progressbar', [])

.constant('progressConfig', {
  animate: true,
  max: 100
})

.controller('ProgressController', ['$scope', '$attrs', 'progressConfig', function($scope, $attrs, progressConfig) {
    var self = this,
        animate = angular.isDefined($attrs.animate) ? $scope.$parent.$eval($attrs.animate) : progressConfig.animate;

    this.bars = [];
    $scope.max = angular.isDefined($scope.max) ? $scope.max : progressConfig.max;

    this.addBar = function(bar, element) {
        if ( !animate ) {
            element.css({'transition': 'none'});
        }

        this.bars.push(bar);

        bar.$watch('value', function( value ) {
            bar.percent = +(100 * value / $scope.max).toFixed(2);
        });

        bar.$on('$destroy', function() {
            element = null;
            self.removeBar(bar);
        });
    };

    this.removeBar = function(bar) {
        this.bars.splice(this.bars.indexOf(bar), 1);
    };
}])

.directive('progress', function() {
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        controller: 'ProgressController',
        require: 'progress',
        scope: {},
        templateUrl: 'template/progressbar/progress.html'
    };
})

.directive('bar', function() {
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        require: '^progress',
        scope: {
            value: '=',
            max: '=?',
            type: '@'
        },
        templateUrl: 'template/progressbar/bar.html',
        link: function(scope, element, attrs, progressCtrl) {
            progressCtrl.addBar(scope, element);
        }
    };
})

.directive('progressbar', function() {
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        controller: 'ProgressController',
        scope: {
            value: '=',
            max: '=?',
            type: '@'
        },
        templateUrl: 'template/progressbar/progressbar.html',
        link: function(scope, element, attrs, progressCtrl) {
            progressCtrl.addBar(scope, angular.element(element.children()[0]));
        }
    };
});

angular.module('ui.bootstrap.rating', [])

.constant('ratingConfig', {
  max: 5,
  stateOn: null,
  stateOff: null
})

.controller('RatingController', ['$scope', '$attrs', 'ratingConfig', function($scope, $attrs, ratingConfig) {
  var ngModelCtrl  = { $setViewValue: angular.noop };

  this.init = function(ngModelCtrl_) {
    ngModelCtrl = ngModelCtrl_;
    ngModelCtrl.$render = this.render;

    ngModelCtrl.$formatters.push(function(value) {
      if (angular.isNumber(value) && value << 0 !== value) {
        value = Math.round(value);
      }
      return value;
    });

    this.stateOn = angular.isDefined($attrs.stateOn) ? $scope.$parent.$eval($attrs.stateOn) : ratingConfig.stateOn;
    this.stateOff = angular.isDefined($attrs.stateOff) ? $scope.$parent.$eval($attrs.stateOff) : ratingConfig.stateOff;

    var ratingStates = angular.isDefined($attrs.ratingStates) ? $scope.$parent.$eval($attrs.ratingStates) :
                        new Array( angular.isDefined($attrs.max) ? $scope.$parent.$eval($attrs.max) : ratingConfig.max );
    $scope.range = this.buildTemplateObjects(ratingStates);
  };

  this.buildTemplateObjects = function(states) {
    for (var i = 0, n = states.length; i < n; i++) {
      states[i] = angular.extend({ index: i }, { stateOn: this.stateOn, stateOff: this.stateOff }, states[i]);
    }
    return states;
  };

  $scope.rate = function(value) {
    if ( !$scope.readonly && value >= 0 && value <= $scope.range.length ) {
      ngModelCtrl.$setViewValue(value);
      ngModelCtrl.$render();
    }
  };

  $scope.enter = function(value) {
    if ( !$scope.readonly ) {
      $scope.value = value;
    }
    $scope.onHover({value: value});
  };

  $scope.reset = function() {
    $scope.value = ngModelCtrl.$viewValue;
    $scope.onLeave();
  };

  $scope.onKeydown = function(evt) {
    if (/(37|38|39|40)/.test(evt.which)) {
      evt.preventDefault();
      evt.stopPropagation();
      $scope.rate( $scope.value + (evt.which === 38 || evt.which === 39 ? 1 : -1) );
    }
  };

  this.render = function() {
    $scope.value = ngModelCtrl.$viewValue;
  };
}])

.directive('rating', function() {
  return {
    restrict: 'EA',
    require: ['rating', 'ngModel'],
    scope: {
      readonly: '=?',
      onHover: '&',
      onLeave: '&'
    },
    controller: 'RatingController',
    templateUrl: 'template/rating/rating.html',
    replace: true,
    link: function(scope, element, attrs, ctrls) {
      var ratingCtrl = ctrls[0], ngModelCtrl = ctrls[1];
      ratingCtrl.init( ngModelCtrl );
    }
  };
});

/**
 * @ngdoc overview
 * @name ui.bootstrap.tabs
 *
 * @description
 * AngularJS version of the tabs directive.
 */

angular.module('ui.bootstrap.tabs', [])

.controller('TabsetController', ['$scope', function TabsetCtrl($scope) {
  var ctrl = this,
      tabs = ctrl.tabs = $scope.tabs = [];

  ctrl.select = function(selectedTab) {
    angular.forEach(tabs, function(tab) {
      if (tab.active && tab !== selectedTab) {
        tab.active = false;
        tab.onDeselect();
      }
    });
    selectedTab.active = true;
    selectedTab.onSelect();
  };

  ctrl.addTab = function addTab(tab) {
    tabs.push(tab);
    // we can't run the select function on the first tab
    // since that would select it twice
    if (tabs.length === 1 && tab.active !== false) {
      tab.active = true;
    } else if (tab.active) {
      ctrl.select(tab);
    }
    else {
      tab.active = false;
    }
  };

  ctrl.removeTab = function removeTab(tab) {
    var index = tabs.indexOf(tab);
    //Select a new tab if the tab to be removed is selected and not destroyed
    if (tab.active && tabs.length > 1 && !destroyed) {
      //If this is the last tab, select the previous tab. else, the next tab.
      var newActiveIndex = index == tabs.length - 1 ? index - 1 : index + 1;
      ctrl.select(tabs[newActiveIndex]);
    }
    tabs.splice(index, 1);
  };

  var destroyed;
  $scope.$on('$destroy', function() {
    destroyed = true;
  });
}])

/**
 * @ngdoc directive
 * @name ui.bootstrap.tabs.directive:tabset
 * @restrict EA
 *
 * @description
 * Tabset is the outer container for the tabs directive
 *
 * @param {boolean=} vertical Whether or not to use vertical styling for the tabs.
 * @param {boolean=} justified Whether or not to use justified styling for the tabs.
 *
 * @example
<example module="ui.bootstrap">
  <file name="index.html">
    <tabset>
      <tab heading="Tab 1"><b>First</b> Content!</tab>
      <tab heading="Tab 2"><i>Second</i> Content!</tab>
    </tabset>
    <hr />
    <tabset vertical="true">
      <tab heading="Vertical Tab 1"><b>First</b> Vertical Content!</tab>
      <tab heading="Vertical Tab 2"><i>Second</i> Vertical Content!</tab>
    </tabset>
    <tabset justified="true">
      <tab heading="Justified Tab 1"><b>First</b> Justified Content!</tab>
      <tab heading="Justified Tab 2"><i>Second</i> Justified Content!</tab>
    </tabset>
  </file>
</example>
 */
.directive('tabset', function() {
  return {
    restrict: 'EA',
    transclude: true,
    replace: true,
    scope: {
      type: '@'
    },
    controller: 'TabsetController',
    templateUrl: 'template/tabs/tabset.html',
    link: function(scope, element, attrs) {
      scope.vertical = angular.isDefined(attrs.vertical) ? scope.$parent.$eval(attrs.vertical) : false;
      scope.justified = angular.isDefined(attrs.justified) ? scope.$parent.$eval(attrs.justified) : false;
    }
  };
})

/**
 * @ngdoc directive
 * @name ui.bootstrap.tabs.directive:tab
 * @restrict EA
 *
 * @param {string=} heading The visible heading, or title, of the tab. Set HTML headings with {@link ui.bootstrap.tabs.directive:tabHeading tabHeading}.
 * @param {string=} select An expression to evaluate when the tab is selected.
 * @param {boolean=} active A binding, telling whether or not this tab is selected.
 * @param {boolean=} disabled A binding, telling whether or not this tab is disabled.
 *
 * @description
 * Creates a tab with a heading and content. Must be placed within a {@link ui.bootstrap.tabs.directive:tabset tabset}.
 *
 * @example
<example module="ui.bootstrap">
  <file name="index.html">
    <div ng-controller="TabsDemoCtrl">
      <button class="btn btn-small" ng-click="items[0].active = true">
        Select item 1, using active binding
      </button>
      <button class="btn btn-small" ng-click="items[1].disabled = !items[1].disabled">
        Enable/disable item 2, using disabled binding
      </button>
      <br />
      <tabset>
        <tab heading="Tab 1">First Tab</tab>
        <tab select="alertMe()">
          <tab-heading><i class="icon-bell"></i> Alert me!</tab-heading>
          Second Tab, with alert callback and html heading!
        </tab>
        <tab ng-repeat="item in items"
          heading="{{item.title}}"
          disabled="item.disabled"
          active="item.active">
          {{item.content}}
        </tab>
      </tabset>
    </div>
  </file>
  <file name="script.js">
    function TabsDemoCtrl($scope) {
      $scope.items = [
        { title:"Dynamic Title 1", content:"Dynamic Item 0" },
        { title:"Dynamic Title 2", content:"Dynamic Item 1", disabled: true }
      ];

      $scope.alertMe = function() {
        setTimeout(function() {
          alert("You've selected the alert tab!");
        });
      };
    };
  </file>
</example>
 */

/**
 * @ngdoc directive
 * @name ui.bootstrap.tabs.directive:tabHeading
 * @restrict EA
 *
 * @description
 * Creates an HTML heading for a {@link ui.bootstrap.tabs.directive:tab tab}. Must be placed as a child of a tab element.
 *
 * @example
<example module="ui.bootstrap">
  <file name="index.html">
    <tabset>
      <tab>
        <tab-heading><b>HTML</b> in my titles?!</tab-heading>
        And some content, too!
      </tab>
      <tab>
        <tab-heading><i class="icon-heart"></i> Icon heading?!?</tab-heading>
        That's right.
      </tab>
    </tabset>
  </file>
</example>
 */
.directive('tab', ['$parse', '$log', function($parse, $log) {
  return {
    require: '^tabset',
    restrict: 'EA',
    replace: true,
    templateUrl: 'template/tabs/tab.html',
    transclude: true,
    scope: {
      active: '=?',
      heading: '@',
      onSelect: '&select', //This callback is called in contentHeadingTransclude
                          //once it inserts the tab's content into the dom
      onDeselect: '&deselect'
    },
    controller: function() {
      //Empty controller so other directives can require being 'under' a tab
    },
    compile: function(elm, attrs, transclude) {
      return function postLink(scope, elm, attrs, tabsetCtrl) {
        scope.$watch('active', function(active) {
          if (active) {
            tabsetCtrl.select(scope);
          }
        });

        scope.disabled = false;
        if ( attrs.disable ) {
          scope.$parent.$watch($parse(attrs.disable), function(value) {
            scope.disabled = !! value;
          });
        }

        // Deprecation support of "disabled" parameter
        // fix(tab): IE9 disabled attr renders grey text on enabled tab #2677
        // This code is duplicated from the lines above to make it easy to remove once
        // the feature has been completely deprecated
        if ( attrs.disabled ) {
          $log.warn('Use of "disabled" attribute has been deprecated, please use "disable"');
          scope.$parent.$watch($parse(attrs.disabled), function(value) {
            scope.disabled = !! value;
          });
        }

        scope.select = function() {
          if ( !scope.disabled ) {
            scope.active = true;
          }
        };

        tabsetCtrl.addTab(scope);
        scope.$on('$destroy', function() {
          tabsetCtrl.removeTab(scope);
        });

        //We need to transclude later, once the content container is ready.
        //when this link happens, we're inside a tab heading.
        scope.$transcludeFn = transclude;
      };
    }
  };
}])

.directive('tabHeadingTransclude', [function() {
  return {
    restrict: 'A',
    require: '^tab',
    link: function(scope, elm, attrs, tabCtrl) {
      scope.$watch('headingElement', function updateHeadingElement(heading) {
        if (heading) {
          elm.html('');
          elm.append(heading);
        }
      });
    }
  };
}])

.directive('tabContentTransclude', function() {
  return {
    restrict: 'A',
    require: '^tabset',
    link: function(scope, elm, attrs) {
      var tab = scope.$eval(attrs.tabContentTransclude);

      //Now our tab is ready to be transcluded: both the tab heading area
      //and the tab content area are loaded.  Transclude 'em both.
      tab.$transcludeFn(tab.$parent, function(contents) {
        angular.forEach(contents, function(node) {
          if (isTabHeading(node)) {
            //Let tabHeadingTransclude know.
            tab.headingElement = node;
          } else {
            elm.append(node);
          }
        });
      });
    }
  };
  function isTabHeading(node) {
    return node.tagName &&  (
      node.hasAttribute('tab-heading') ||
      node.hasAttribute('data-tab-heading') ||
      node.tagName.toLowerCase() === 'tab-heading' ||
      node.tagName.toLowerCase() === 'data-tab-heading'
    );
  }
})

;

angular.module('ui.bootstrap.timepicker', [])

.constant('timepickerConfig', {
  hourStep: 1,
  minuteStep: 1,
  showMeridian: true,
  meridians: null,
  readonlyInput: false,
  mousewheel: true,
  arrowkeys: true
})

.controller('TimepickerController', ['$scope', '$attrs', '$parse', '$log', '$locale', 'timepickerConfig', function($scope, $attrs, $parse, $log, $locale, timepickerConfig) {
  var selected = new Date(),
      ngModelCtrl = { $setViewValue: angular.noop }, // nullModelCtrl
      meridians = angular.isDefined($attrs.meridians) ? $scope.$parent.$eval($attrs.meridians) : timepickerConfig.meridians || $locale.DATETIME_FORMATS.AMPMS;

  this.init = function( ngModelCtrl_, inputs ) {
    ngModelCtrl = ngModelCtrl_;
    ngModelCtrl.$render = this.render;

    ngModelCtrl.$formatters.unshift(function (modelValue) {
      return modelValue ? new Date( modelValue ) : null;
    });

    var hoursInputEl = inputs.eq(0),
        minutesInputEl = inputs.eq(1);

    var mousewheel = angular.isDefined($attrs.mousewheel) ? $scope.$parent.$eval($attrs.mousewheel) : timepickerConfig.mousewheel;
    if ( mousewheel ) {
      this.setupMousewheelEvents( hoursInputEl, minutesInputEl );
    }

    var arrowkeys = angular.isDefined($attrs.arrowkeys) ? $scope.$parent.$eval($attrs.arrowkeys) : timepickerConfig.arrowkeys;
    if (arrowkeys) {
      this.setupArrowkeyEvents( hoursInputEl, minutesInputEl );
    }

    $scope.readonlyInput = angular.isDefined($attrs.readonlyInput) ? $scope.$parent.$eval($attrs.readonlyInput) : timepickerConfig.readonlyInput;
    this.setupInputEvents( hoursInputEl, minutesInputEl );
  };

  var hourStep = timepickerConfig.hourStep;
  if ($attrs.hourStep) {
    $scope.$parent.$watch($parse($attrs.hourStep), function(value) {
      hourStep = parseInt(value, 10);
    });
  }

  var minuteStep = timepickerConfig.minuteStep;
  if ($attrs.minuteStep) {
    $scope.$parent.$watch($parse($attrs.minuteStep), function(value) {
      minuteStep = parseInt(value, 10);
    });
  }

  // 12H / 24H mode
  $scope.showMeridian = timepickerConfig.showMeridian;
  if ($attrs.showMeridian) {
    $scope.$parent.$watch($parse($attrs.showMeridian), function(value) {
      $scope.showMeridian = !!value;

      if ( ngModelCtrl.$error.time ) {
        // Evaluate from template
        var hours = getHoursFromTemplate(), minutes = getMinutesFromTemplate();
        if (angular.isDefined( hours ) && angular.isDefined( minutes )) {
          selected.setHours( hours );
          refresh();
        }
      } else {
        updateTemplate();
      }
    });
  }

  // Get $scope.hours in 24H mode if valid
  function getHoursFromTemplate ( ) {
    var hours = parseInt( $scope.hours, 10 );
    var valid = ( $scope.showMeridian ) ? (hours > 0 && hours < 13) : (hours >= 0 && hours < 24);
    if ( !valid ) {
      return undefined;
    }

    if ( $scope.showMeridian ) {
      if ( hours === 12 ) {
        hours = 0;
      }
      if ( $scope.meridian === meridians[1] ) {
        hours = hours + 12;
      }
    }
    return hours;
  }

  function getMinutesFromTemplate() {
    var minutes = parseInt($scope.minutes, 10);
    return ( minutes >= 0 && minutes < 60 ) ? minutes : undefined;
  }

  function pad( value ) {
    return ( angular.isDefined(value) && value.toString().length < 2 ) ? '0' + value : value.toString();
  }

  // Respond on mousewheel spin
  this.setupMousewheelEvents = function( hoursInputEl, minutesInputEl ) {
    var isScrollingUp = function(e) {
      if (e.originalEvent) {
        e = e.originalEvent;
      }
      //pick correct delta variable depending on event
      var delta = (e.wheelDelta) ? e.wheelDelta : -e.deltaY;
      return (e.detail || delta > 0);
    };

    hoursInputEl.bind('mousewheel wheel', function(e) {
      $scope.$apply( (isScrollingUp(e)) ? $scope.incrementHours() : $scope.decrementHours() );
      e.preventDefault();
    });

    minutesInputEl.bind('mousewheel wheel', function(e) {
      $scope.$apply( (isScrollingUp(e)) ? $scope.incrementMinutes() : $scope.decrementMinutes() );
      e.preventDefault();
    });

  };

  // Respond on up/down arrowkeys
  this.setupArrowkeyEvents = function( hoursInputEl, minutesInputEl ) {
    hoursInputEl.bind('keydown', function(e) {
      if ( e.which === 38 ) { // up
        e.preventDefault();
        $scope.incrementHours();
        $scope.$apply();
      }
      else if ( e.which === 40 ) { // down
        e.preventDefault();
        $scope.decrementHours();
        $scope.$apply();
      }
    });

    minutesInputEl.bind('keydown', function(e) {
      if ( e.which === 38 ) { // up
        e.preventDefault();
        $scope.incrementMinutes();
        $scope.$apply();
      }
      else if ( e.which === 40 ) { // down
        e.preventDefault();
        $scope.decrementMinutes();
        $scope.$apply();
      }
    });
  };

  this.setupInputEvents = function( hoursInputEl, minutesInputEl ) {
    if ( $scope.readonlyInput ) {
      $scope.updateHours = angular.noop;
      $scope.updateMinutes = angular.noop;
      return;
    }

    var invalidate = function(invalidHours, invalidMinutes) {
      ngModelCtrl.$setViewValue( null );
      ngModelCtrl.$setValidity('time', false);
      if (angular.isDefined(invalidHours)) {
        $scope.invalidHours = invalidHours;
      }
      if (angular.isDefined(invalidMinutes)) {
        $scope.invalidMinutes = invalidMinutes;
      }
    };

    $scope.updateHours = function() {
      var hours = getHoursFromTemplate();

      if ( angular.isDefined(hours) ) {
        selected.setHours( hours );
        refresh( 'h' );
      } else {
        invalidate(true);
      }
    };

    hoursInputEl.bind('blur', function(e) {
      if ( !$scope.invalidHours && $scope.hours < 10) {
        $scope.$apply( function() {
          $scope.hours = pad( $scope.hours );
        });
      }
    });

    $scope.updateMinutes = function() {
      var minutes = getMinutesFromTemplate();

      if ( angular.isDefined(minutes) ) {
        selected.setMinutes( minutes );
        refresh( 'm' );
      } else {
        invalidate(undefined, true);
      }
    };

    minutesInputEl.bind('blur', function(e) {
      if ( !$scope.invalidMinutes && $scope.minutes < 10 ) {
        $scope.$apply( function() {
          $scope.minutes = pad( $scope.minutes );
        });
      }
    });

  };

  this.render = function() {
    var date = ngModelCtrl.$viewValue;

    if ( isNaN(date) ) {
      ngModelCtrl.$setValidity('time', false);
      $log.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
    } else {
      if ( date ) {
        selected = date;
      }
      makeValid();
      updateTemplate();
    }
  };

  // Call internally when we know that model is valid.
  function refresh( keyboardChange ) {
    makeValid();
    ngModelCtrl.$setViewValue( new Date(selected) );
    updateTemplate( keyboardChange );
  }

  function makeValid() {
    ngModelCtrl.$setValidity('time', true);
    $scope.invalidHours = false;
    $scope.invalidMinutes = false;
  }

  function updateTemplate( keyboardChange ) {
    var hours = selected.getHours(), minutes = selected.getMinutes();

    if ( $scope.showMeridian ) {
      hours = ( hours === 0 || hours === 12 ) ? 12 : hours % 12; // Convert 24 to 12 hour system
    }

    $scope.hours = keyboardChange === 'h' ? hours : pad(hours);
    if (keyboardChange !== 'm') {
      $scope.minutes = pad(minutes);
    }
    $scope.meridian = selected.getHours() < 12 ? meridians[0] : meridians[1];
  }

  function addMinutes( minutes ) {
    var dt = new Date( selected.getTime() + minutes * 60000 );
    selected.setHours( dt.getHours(), dt.getMinutes() );
    refresh();
  }

  $scope.incrementHours = function() {
    addMinutes( hourStep * 60 );
  };
  $scope.decrementHours = function() {
    addMinutes( - hourStep * 60 );
  };
  $scope.incrementMinutes = function() {
    addMinutes( minuteStep );
  };
  $scope.decrementMinutes = function() {
    addMinutes( - minuteStep );
  };
  $scope.toggleMeridian = function() {
    addMinutes( 12 * 60 * (( selected.getHours() < 12 ) ? 1 : -1) );
  };
}])

.directive('timepicker', function () {
  return {
    restrict: 'EA',
    require: ['timepicker', '?^ngModel'],
    controller:'TimepickerController',
    replace: true,
    scope: {},
    templateUrl: 'template/timepicker/timepicker.html',
    link: function(scope, element, attrs, ctrls) {
      var timepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      if ( ngModelCtrl ) {
        timepickerCtrl.init( ngModelCtrl, element.find('input') );
      }
    }
  };
});

angular.module('ui.bootstrap.transition', [])

.value('$transitionSuppressDeprecated', false)
/**
 * $transition service provides a consistent interface to trigger CSS 3 transitions and to be informed when they complete.
 * @param  {DOMElement} element  The DOMElement that will be animated.
 * @param  {string|object|function} trigger  The thing that will cause the transition to start:
 *   - As a string, it represents the css class to be added to the element.
 *   - As an object, it represents a hash of style attributes to be applied to the element.
 *   - As a function, it represents a function to be called that will cause the transition to occur.
 * @return {Promise}  A promise that is resolved when the transition finishes.
 */
.factory('$transition', [
        '$q', '$timeout', '$rootScope', '$log', '$transitionSuppressDeprecated',
function($q ,  $timeout ,  $rootScope ,  $log ,  $transitionSuppressDeprecated) {

  if (!$transitionSuppressDeprecated) {
    $log.warn('$transition is now deprecated. Use $animate from ngAnimate instead.');
  }

  var $transition = function(element, trigger, options) {
    options = options || {};
    var deferred = $q.defer();
    var endEventName = $transition[options.animation ? 'animationEndEventName' : 'transitionEndEventName'];

    var transitionEndHandler = function(event) {
      $rootScope.$apply(function() {
        element.unbind(endEventName, transitionEndHandler);
        deferred.resolve(element);
      });
    };

    if (endEventName) {
      element.bind(endEventName, transitionEndHandler);
    }

    // Wrap in a timeout to allow the browser time to update the DOM before the transition is to occur
    $timeout(function() {
      if ( angular.isString(trigger) ) {
        element.addClass(trigger);
      } else if ( angular.isFunction(trigger) ) {
        trigger(element);
      } else if ( angular.isObject(trigger) ) {
        element.css(trigger);
      }
      //If browser does not support transitions, instantly resolve
      if ( !endEventName ) {
        deferred.resolve(element);
      }
    });

    // Add our custom cancel function to the promise that is returned
    // We can call this if we are about to run a new transition, which we know will prevent this transition from ending,
    // i.e. it will therefore never raise a transitionEnd event for that transition
    deferred.promise.cancel = function() {
      if ( endEventName ) {
        element.unbind(endEventName, transitionEndHandler);
      }
      deferred.reject('Transition cancelled');
    };

    return deferred.promise;
  };

  // Work out the name of the transitionEnd event
  var transElement = document.createElement('trans');
  var transitionEndEventNames = {
    'WebkitTransition': 'webkitTransitionEnd',
    'MozTransition': 'transitionend',
    'OTransition': 'oTransitionEnd',
    'transition': 'transitionend'
  };
  var animationEndEventNames = {
    'WebkitTransition': 'webkitAnimationEnd',
    'MozTransition': 'animationend',
    'OTransition': 'oAnimationEnd',
    'transition': 'animationend'
  };
  function findEndEventName(endEventNames) {
    for (var name in endEventNames){
      if (transElement.style[name] !== undefined) {
        return endEventNames[name];
      }
    }
  }
  $transition.transitionEndEventName = findEndEventName(transitionEndEventNames);
  $transition.animationEndEventName = findEndEventName(animationEndEventNames);
  return $transition;
}]);

angular.module('ui.bootstrap.typeahead', ['ui.bootstrap.position', 'ui.bootstrap.bindHtml'])

/**
 * A helper service that can parse typeahead's syntax (string provided by users)
 * Extracted to a separate service for ease of unit testing
 */
  .factory('typeaheadParser', ['$parse', function ($parse) {

  //                      00000111000000000000022200000000000000003333333333333330000000000044000
  var TYPEAHEAD_REGEXP = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;

  return {
    parse:function (input) {

      var match = input.match(TYPEAHEAD_REGEXP);
      if (!match) {
        throw new Error(
          'Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_"' +
            ' but got "' + input + '".');
      }

      return {
        itemName:match[3],
        source:$parse(match[4]),
        viewMapper:$parse(match[2] || match[1]),
        modelMapper:$parse(match[1])
      };
    }
  };
}])

  .directive('typeahead', ['$compile', '$parse', '$q', '$timeout', '$document', '$position', 'typeaheadParser',
    function ($compile, $parse, $q, $timeout, $document, $position, typeaheadParser) {

  var HOT_KEYS = [9, 13, 27, 38, 40];

  return {
    require:'ngModel',
    link:function (originalScope, element, attrs, modelCtrl) {

      //SUPPORTED ATTRIBUTES (OPTIONS)

      //minimal no of characters that needs to be entered before typeahead kicks-in
      var minSearch = originalScope.$eval(attrs.typeaheadMinLength) || 1;

      //minimal wait time after last character typed before typeahead kicks-in
      var waitTime = originalScope.$eval(attrs.typeaheadWaitMs) || 0;

      //should it restrict model values to the ones selected from the popup only?
      var isEditable = originalScope.$eval(attrs.typeaheadEditable) !== false;

      //binding to a variable that indicates if matches are being retrieved asynchronously
      var isLoadingSetter = $parse(attrs.typeaheadLoading).assign || angular.noop;

      //a callback executed when a match is selected
      var onSelectCallback = $parse(attrs.typeaheadOnSelect);

      var inputFormatter = attrs.typeaheadInputFormatter ? $parse(attrs.typeaheadInputFormatter) : undefined;

      var appendToBody =  attrs.typeaheadAppendToBody ? originalScope.$eval(attrs.typeaheadAppendToBody) : false;

      var focusFirst = originalScope.$eval(attrs.typeaheadFocusFirst) !== false;

      //INTERNAL VARIABLES

      //model setter executed upon match selection
      var $setModelValue = $parse(attrs.ngModel).assign;

      //expressions used by typeahead
      var parserResult = typeaheadParser.parse(attrs.typeahead);

      var hasFocus;

      //create a child scope for the typeahead directive so we are not polluting original scope
      //with typeahead-specific data (matches, query etc.)
      var scope = originalScope.$new();
      originalScope.$on('$destroy', function(){
        scope.$destroy();
      });

      // WAI-ARIA
      var popupId = 'typeahead-' + scope.$id + '-' + Math.floor(Math.random() * 10000);
      element.attr({
        'aria-autocomplete': 'list',
        'aria-expanded': false,
        'aria-owns': popupId
      });

      //pop-up element used to display matches
      var popUpEl = angular.element('<div typeahead-popup></div>');
      popUpEl.attr({
        id: popupId,
        matches: 'matches',
        active: 'activeIdx',
        select: 'select(activeIdx)',
        query: 'query',
        position: 'position'
      });
      //custom item template
      if (angular.isDefined(attrs.typeaheadTemplateUrl)) {
        popUpEl.attr('template-url', attrs.typeaheadTemplateUrl);
      }

      var resetMatches = function() {
        scope.matches = [];
        scope.activeIdx = -1;
        element.attr('aria-expanded', false);
      };

      var getMatchId = function(index) {
        return popupId + '-option-' + index;
      };

      // Indicate that the specified match is the active (pre-selected) item in the list owned by this typeahead.
      // This attribute is added or removed automatically when the `activeIdx` changes.
      scope.$watch('activeIdx', function(index) {
        if (index < 0) {
          element.removeAttr('aria-activedescendant');
        } else {
          element.attr('aria-activedescendant', getMatchId(index));
        }
      });

      var getMatchesAsync = function(inputValue) {

        var locals = {$viewValue: inputValue};
        isLoadingSetter(originalScope, true);
        $q.when(parserResult.source(originalScope, locals)).then(function(matches) {

          //it might happen that several async queries were in progress if a user were typing fast
          //but we are interested only in responses that correspond to the current view value
          var onCurrentRequest = (inputValue === modelCtrl.$viewValue);
          if (onCurrentRequest && hasFocus) {
            if (matches && matches.length > 0) {

              scope.activeIdx = focusFirst ? 0 : -1;
              scope.matches.length = 0;

              //transform labels
              for(var i=0; i<matches.length; i++) {
                locals[parserResult.itemName] = matches[i];
                scope.matches.push({
                  id: getMatchId(i),
                  label: parserResult.viewMapper(scope, locals),
                  model: matches[i]
                });
              }

              scope.query = inputValue;
              //position pop-up with matches - we need to re-calculate its position each time we are opening a window
              //with matches as a pop-up might be absolute-positioned and position of an input might have changed on a page
              //due to other elements being rendered
              scope.position = appendToBody ? $position.offset(element) : $position.position(element);
              scope.position.top = scope.position.top + element.prop('offsetHeight');

              element.attr('aria-expanded', true);
            } else {
              resetMatches();
            }
          }
          if (onCurrentRequest) {
            isLoadingSetter(originalScope, false);
          }
        }, function(){
          resetMatches();
          isLoadingSetter(originalScope, false);
        });
      };

      resetMatches();

      //we need to propagate user's query so we can higlight matches
      scope.query = undefined;

      //Declare the timeout promise var outside the function scope so that stacked calls can be cancelled later
      var timeoutPromise;

      var scheduleSearchWithTimeout = function(inputValue) {
        timeoutPromise = $timeout(function () {
          getMatchesAsync(inputValue);
        }, waitTime);
      };

      var cancelPreviousTimeout = function() {
        if (timeoutPromise) {
          $timeout.cancel(timeoutPromise);
        }
      };

      //plug into $parsers pipeline to open a typeahead on view changes initiated from DOM
      //$parsers kick-in on all the changes coming from the view as well as manually triggered by $setViewValue
      modelCtrl.$parsers.unshift(function (inputValue) {

        hasFocus = true;

        if (inputValue && inputValue.length >= minSearch) {
          if (waitTime > 0) {
            cancelPreviousTimeout();
            scheduleSearchWithTimeout(inputValue);
          } else {
            getMatchesAsync(inputValue);
          }
        } else {
          isLoadingSetter(originalScope, false);
          cancelPreviousTimeout();
          resetMatches();
        }

        if (isEditable) {
          return inputValue;
        } else {
          if (!inputValue) {
            // Reset in case user had typed something previously.
            modelCtrl.$setValidity('editable', true);
            return inputValue;
          } else {
            modelCtrl.$setValidity('editable', false);
            return undefined;
          }
        }
      });

      modelCtrl.$formatters.push(function (modelValue) {

        var candidateViewValue, emptyViewValue;
        var locals = {};

        // The validity may be set to false via $parsers (see above) if
        // the model is restricted to selected values. If the model
        // is set manually it is considered to be valid.
        if (!isEditable) {
          modelCtrl.$setValidity('editable', true);
        }

        if (inputFormatter) {

          locals.$model = modelValue;
          return inputFormatter(originalScope, locals);

        } else {

          //it might happen that we don't have enough info to properly render input value
          //we need to check for this situation and simply return model value if we can't apply custom formatting
          locals[parserResult.itemName] = modelValue;
          candidateViewValue = parserResult.viewMapper(originalScope, locals);
          locals[parserResult.itemName] = undefined;
          emptyViewValue = parserResult.viewMapper(originalScope, locals);

          return candidateViewValue!== emptyViewValue ? candidateViewValue : modelValue;
        }
      });

      scope.select = function (activeIdx) {
        //called from within the $digest() cycle
        var locals = {};
        var model, item;

        locals[parserResult.itemName] = item = scope.matches[activeIdx].model;
        model = parserResult.modelMapper(originalScope, locals);
        $setModelValue(originalScope, model);
        modelCtrl.$setValidity('editable', true);
        modelCtrl.$setValidity('parse', true);

        onSelectCallback(originalScope, {
          $item: item,
          $model: model,
          $label: parserResult.viewMapper(originalScope, locals)
        });

        resetMatches();

        //return focus to the input element if a match was selected via a mouse click event
        // use timeout to avoid $rootScope:inprog error
        $timeout(function() { element[0].focus(); }, 0, false);
      };

      //bind keyboard events: arrows up(38) / down(40), enter(13) and tab(9), esc(27)
      element.bind('keydown', function (evt) {

        //typeahead is open and an "interesting" key was pressed
        if (scope.matches.length === 0 || HOT_KEYS.indexOf(evt.which) === -1) {
          return;
        }

        // if there's nothing selected (i.e. focusFirst) and enter is hit, don't do anything
        if (scope.activeIdx == -1 && (evt.which === 13 || evt.which === 9)) {
          return;
        }

        evt.preventDefault();

        if (evt.which === 40) {
          scope.activeIdx = (scope.activeIdx + 1) % scope.matches.length;
          scope.$digest();

        } else if (evt.which === 38) {
          scope.activeIdx = (scope.activeIdx > 0 ? scope.activeIdx : scope.matches.length) - 1;
          scope.$digest();

        } else if (evt.which === 13 || evt.which === 9) {
          scope.$apply(function () {
            scope.select(scope.activeIdx);
          });

        } else if (evt.which === 27) {
          evt.stopPropagation();

          resetMatches();
          scope.$digest();
        }
      });

      element.bind('blur', function (evt) {
        hasFocus = false;
      });

      // Keep reference to click handler to unbind it.
      var dismissClickHandler = function (evt) {
        if (element[0] !== evt.target) {
          resetMatches();
          scope.$digest();
        }
      };

      $document.bind('click', dismissClickHandler);

      originalScope.$on('$destroy', function(){
        $document.unbind('click', dismissClickHandler);
        if (appendToBody) {
          $popup.remove();
        }
        // Prevent jQuery cache memory leak
        popUpEl.remove();
      });

      var $popup = $compile(popUpEl)(scope);

      if (appendToBody) {
        $document.find('body').append($popup);
      } else {
        element.after($popup);
      }
    }
  };

}])

  .directive('typeaheadPopup', function () {
    return {
      restrict:'EA',
      scope:{
        matches:'=',
        query:'=',
        active:'=',
        position:'=',
        select:'&'
      },
      replace:true,
      templateUrl:'template/typeahead/typeahead-popup.html',
      link:function (scope, element, attrs) {

        scope.templateUrl = attrs.templateUrl;

        scope.isOpen = function () {
          return scope.matches.length > 0;
        };

        scope.isActive = function (matchIdx) {
          return scope.active == matchIdx;
        };

        scope.selectActive = function (matchIdx) {
          scope.active = matchIdx;
        };

        scope.selectMatch = function (activeIdx) {
          scope.select({activeIdx:activeIdx});
        };
      }
    };
  })

  .directive('typeaheadMatch', ['$templateRequest', '$compile', '$parse', function ($templateRequest, $compile, $parse) {
    return {
      restrict:'EA',
      scope:{
        index:'=',
        match:'=',
        query:'='
      },
      link:function (scope, element, attrs) {
        var tplUrl = $parse(attrs.templateUrl)(scope.$parent) || 'template/typeahead/typeahead-match.html';
        $templateRequest(tplUrl).then(function(tplContent) {
          $compile(tplContent.trim())(scope, function(clonedElement){
            element.replaceWith(clonedElement);
          });
        });
      }
    };
  }])

  .filter('typeaheadHighlight', function() {

    function escapeRegexp(queryToEscape) {
      return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    }

    return function(matchItem, query) {
      return query ? ('' + matchItem).replace(new RegExp(escapeRegexp(query), 'gi'), '<strong>$&</strong>') : matchItem;
    };
  });

angular.module("template/accordion/accordion-group.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/accordion/accordion-group.html",
    "<div class=\"panel panel-default\">\n" +
    "  <div class=\"panel-heading\">\n" +
    "    <h4 class=\"panel-title\">\n" +
    "      <a href=\"javascript:void(0)\" tabindex=\"0\" class=\"accordion-toggle\" ng-click=\"toggleOpen()\" accordion-transclude=\"heading\"><span ng-class=\"{'text-muted': isDisabled}\">{{heading}}</span></a>\n" +
    "    </h4>\n" +
    "  </div>\n" +
    "  <div class=\"panel-collapse collapse\" collapse=\"!isOpen\">\n" +
    "	  <div class=\"panel-body\" ng-transclude></div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("template/accordion/accordion.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/accordion/accordion.html",
    "<div class=\"panel-group\" ng-transclude></div>");
}]);

angular.module("template/alert/alert.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/alert/alert.html",
    "<div class=\"alert\" ng-class=\"['alert-' + (type || 'warning'), closeable ? 'alert-dismissable' : null]\" role=\"alert\">\n" +
    "    <button ng-show=\"closeable\" type=\"button\" class=\"close\" ng-click=\"close()\">\n" +
    "        <span aria-hidden=\"true\">&times;</span>\n" +
    "        <span class=\"sr-only\">Close</span>\n" +
    "    </button>\n" +
    "    <div ng-transclude></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("template/carousel/carousel.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/carousel/carousel.html",
    "<div ng-mouseenter=\"pause()\" ng-mouseleave=\"play()\" class=\"carousel\" ng-swipe-right=\"prev()\" ng-swipe-left=\"next()\">\n" +
    "    <ol class=\"carousel-indicators\" ng-show=\"slides.length > 1\">\n" +
    "        <li ng-repeat=\"slide in slides | orderBy:'index' track by $index\" ng-class=\"{active: isActive(slide)}\" ng-click=\"select(slide)\"></li>\n" +
    "    </ol>\n" +
    "    <div class=\"carousel-inner\" ng-transclude></div>\n" +
    "    <a class=\"left carousel-control\" ng-click=\"prev()\" ng-show=\"slides.length > 1\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a>\n" +
    "    <a class=\"right carousel-control\" ng-click=\"next()\" ng-show=\"slides.length > 1\"><span class=\"glyphicon glyphicon-chevron-right\"></span></a>\n" +
    "</div>\n" +
    "");
}]);

angular.module("template/carousel/slide.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/carousel/slide.html",
    "<div ng-class=\"{\n" +
    "    'active': active\n" +
    "  }\" class=\"item text-center\" ng-transclude></div>\n" +
    "");
}]);

angular.module("template/datepicker/datepicker.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/datepicker/datepicker.html",
    "<div ng-switch=\"datepickerMode\" role=\"application\" ng-keydown=\"keydown($event)\">\n" +
    "  <daypicker ng-switch-when=\"day\" tabindex=\"0\"></daypicker>\n" +
    "  <monthpicker ng-switch-when=\"month\" tabindex=\"0\"></monthpicker>\n" +
    "  <yearpicker ng-switch-when=\"year\" tabindex=\"0\"></yearpicker>\n" +
    "</div>");
}]);

angular.module("template/datepicker/day.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/datepicker/day.html",
    "<table role=\"grid\" aria-labelledby=\"{{uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
    "  <thead>\n" +
    "    <tr>\n" +
    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" +
    "      <th colspan=\"{{5 + showWeeks}}\"><button id=\"{{uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\n" +
    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <th ng-show=\"showWeeks\" class=\"text-center\"></th>\n" +
    "      <th ng-repeat=\"label in labels track by $index\" class=\"text-center\"><small aria-label=\"{{label.full}}\">{{label.abbr}}</small></th>\n" +
    "    </tr>\n" +
    "  </thead>\n" +
    "  <tbody>\n" +
    "    <tr ng-repeat=\"row in rows track by $index\">\n" +
    "      <td ng-show=\"showWeeks\" class=\"text-center h6\"><em>{{ weekNumbers[$index] }}</em></td>\n" +
    "      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{dt.uid}}\" aria-disabled=\"{{!!dt.disabled}}\" ng-class=\"dt.customClass\">\n" +
    "        <button type=\"button\" style=\"width:100%;\" class=\"btn btn-default btn-sm\" ng-class=\"{'btn-info': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"{'text-muted': dt.secondary, 'text-info': dt.current}\">{{dt.label}}</span></button>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "");
}]);

angular.module("template/datepicker/month.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/datepicker/month.html",
    "<table role=\"grid\" aria-labelledby=\"{{uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
    "  <thead>\n" +
    "    <tr>\n" +
    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" +
    "      <th><button id=\"{{uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\n" +
    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" +
    "    </tr>\n" +
    "  </thead>\n" +
    "  <tbody>\n" +
    "    <tr ng-repeat=\"row in rows track by $index\">\n" +
    "      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{dt.uid}}\" aria-disabled=\"{{!!dt.disabled}}\">\n" +
    "        <button type=\"button\" style=\"width:100%;\" class=\"btn btn-default\" ng-class=\"{'btn-info': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"{'text-info': dt.current}\">{{dt.label}}</span></button>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "");
}]);

angular.module("template/datepicker/popup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/datepicker/popup.html",
    "<ul class=\"dropdown-menu\" ng-style=\"{display: (isOpen && 'block') || 'none', top: position.top+'px', left: position.left+'px'}\" ng-keydown=\"keydown($event)\">\n" +
    "	<li ng-transclude></li>\n" +
    "	<li ng-if=\"showButtonBar\" style=\"padding:10px 9px 2px\">\n" +
    "		<span class=\"btn-group pull-left\">\n" +
    "			<button type=\"button\" class=\"btn btn-sm btn-info\" ng-click=\"select('today')\">{{ getText('current') }}</button>\n" +
    "			<button type=\"button\" class=\"btn btn-sm btn-danger\" ng-click=\"select(null)\">{{ getText('clear') }}</button>\n" +
    "		</span>\n" +
    "		<button type=\"button\" class=\"btn btn-sm btn-success pull-right\" ng-click=\"close()\">{{ getText('close') }}</button>\n" +
    "	</li>\n" +
    "</ul>\n" +
    "");
}]);

angular.module("template/datepicker/year.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/datepicker/year.html",
    "<table role=\"grid\" aria-labelledby=\"{{uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
    "  <thead>\n" +
    "    <tr>\n" +
    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" +
    "      <th colspan=\"3\"><button id=\"{{uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\n" +
    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" +
    "    </tr>\n" +
    "  </thead>\n" +
    "  <tbody>\n" +
    "    <tr ng-repeat=\"row in rows track by $index\">\n" +
    "      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{dt.uid}}\" aria-disabled=\"{{!!dt.disabled}}\">\n" +
    "        <button type=\"button\" style=\"width:100%;\" class=\"btn btn-default\" ng-class=\"{'btn-info': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"{'text-info': dt.current}\">{{dt.label}}</span></button>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "");
}]);

angular.module("template/modal/backdrop.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/modal/backdrop.html",
    "<div class=\"modal-backdrop\"\n" +
    "     modal-animation-class=\"fade\"\n" +
    "     ng-class=\"{in: animate}\"\n" +
    "     ng-style=\"{'z-index': 1040 + (index && 1 || 0) + index*10}\"\n" +
    "></div>\n" +
    "");
}]);

angular.module("template/modal/window.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/modal/window.html",
    "<div modal-render=\"{{$isRendered}}\" tabindex=\"-1\" role=\"dialog\" class=\"modal\"\n" +
    "    modal-animation-class=\"fade\"\n" +
    "	ng-class=\"{in: animate}\" ng-style=\"{'z-index': 1050 + index*10, display: 'block'}\" ng-click=\"close($event)\">\n" +
    "    <div class=\"modal-dialog\" ng-class=\"size ? 'modal-' + size : ''\"><div class=\"modal-content\" modal-transclude></div></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("template/pagination/pager.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/pagination/pager.html",
    "<ul class=\"pager\">\n" +
    "  <li ng-class=\"{disabled: noPrevious(), previous: align}\"><a href ng-click=\"selectPage(page - 1, $event)\">{{getText('previous')}}</a></li>\n" +
    "  <li ng-class=\"{disabled: noNext(), next: align}\"><a href ng-click=\"selectPage(page + 1, $event)\">{{getText('next')}}</a></li>\n" +
    "</ul>");
}]);

angular.module("template/pagination/pagination.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/pagination/pagination.html",
    "<ul class=\"pagination\">\n" +
    "  <li ng-if=\"boundaryLinks\" ng-class=\"{disabled: noPrevious()}\"><a href ng-click=\"selectPage(1, $event)\">{{getText('first')}}</a></li>\n" +
    "  <li ng-if=\"directionLinks\" ng-class=\"{disabled: noPrevious()}\"><a href ng-click=\"selectPage(page - 1, $event)\">{{getText('previous')}}</a></li>\n" +
    "  <li ng-repeat=\"page in pages track by $index\" ng-class=\"{active: page.active}\"><a href ng-click=\"selectPage(page.number, $event)\">{{page.text}}</a></li>\n" +
    "  <li ng-if=\"directionLinks\" ng-class=\"{disabled: noNext()}\"><a href ng-click=\"selectPage(page + 1, $event)\">{{getText('next')}}</a></li>\n" +
    "  <li ng-if=\"boundaryLinks\" ng-class=\"{disabled: noNext()}\"><a href ng-click=\"selectPage(totalPages, $event)\">{{getText('last')}}</a></li>\n" +
    "</ul>");
}]);

angular.module("template/tooltip/tooltip-html-popup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/tooltip/tooltip-html-popup.html",
    "<div class=\"tooltip\"\n" +
    "  tooltip-animation-class=\"fade\"\n" +
    "  tooltip-classes\n" +
    "  ng-class=\"{ in: isOpen() }\">\n" +
    "  <div class=\"tooltip-arrow\"></div>\n" +
    "  <div class=\"tooltip-inner\" ng-bind-html=\"contentExp()\"></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("template/tooltip/tooltip-html-unsafe-popup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/tooltip/tooltip-html-unsafe-popup.html",
    "<div class=\"tooltip\"\n" +
    "  tooltip-animation-class=\"fade\"\n" +
    "  tooltip-classes\n" +
    "  ng-class=\"{ in: isOpen() }\">\n" +
    "  <div class=\"tooltip-arrow\"></div>\n" +
    "  <div class=\"tooltip-inner\" bind-html-unsafe=\"content\"></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("template/tooltip/tooltip-popup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/tooltip/tooltip-popup.html",
    "<div class=\"tooltip\"\n" +
    "  tooltip-animation-class=\"fade\"\n" +
    "  tooltip-classes\n" +
    "  ng-class=\"{ in: isOpen() }\">\n" +
    "  <div class=\"tooltip-arrow\"></div>\n" +
    "  <div class=\"tooltip-inner\" ng-bind=\"content\"></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("template/tooltip/tooltip-template-popup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/tooltip/tooltip-template-popup.html",
    "<div class=\"tooltip\"\n" +
    "  tooltip-animation-class=\"fade\"\n" +
    "  tooltip-classes\n" +
    "  ng-class=\"{ in: isOpen() }\">\n" +
    "  <div class=\"tooltip-arrow\"></div>\n" +
    "  <div class=\"tooltip-inner\"\n" +
    "    tooltip-template-transclude=\"contentExp()\"\n" +
    "    tooltip-template-transclude-scope=\"originScope()\"></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("template/popover/popover-template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/popover/popover-template.html",
    "<div class=\"popover\"\n" +
    "  tooltip-animation-class=\"fade\"\n" +
    "  tooltip-classes\n" +
    "  ng-class=\"{ in: isOpen() }\">\n" +
    "  <div class=\"arrow\"></div>\n" +
    "\n" +
    "  <div class=\"popover-inner\">\n" +
    "      <h3 class=\"popover-title\" ng-bind=\"title\" ng-if=\"title\"></h3>\n" +
    "      <div class=\"popover-content\"\n" +
    "        tooltip-template-transclude=\"contentExp()\"\n" +
    "        tooltip-template-transclude-scope=\"originScope()\"></div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("template/popover/popover-window.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/popover/popover-window.html",
    "<div class=\"popover {{placement}}\" ng-class=\"{ in: isOpen, fade: animation }\">\n" +
    "  <div class=\"arrow\"></div>\n" +
    "\n" +
    "  <div class=\"popover-inner\">\n" +
    "      <h3 class=\"popover-title\" ng-bind=\"title\" ng-show=\"title\"></h3>\n" +
    "      <div class=\"popover-content\" tooltip-template-transclude></div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("template/popover/popover.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/popover/popover.html",
    "<div class=\"popover\"\n" +
    "  tooltip-animation-class=\"fade\"\n" +
    "  tooltip-classes\n" +
    "  ng-class=\"{ in: isOpen() }\">\n" +
    "  <div class=\"arrow\"></div>\n" +
    "\n" +
    "  <div class=\"popover-inner\">\n" +
    "      <h3 class=\"popover-title\" ng-bind=\"title\" ng-if=\"title\"></h3>\n" +
    "      <div class=\"popover-content\" ng-bind=\"content\"></div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("template/progressbar/bar.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/progressbar/bar.html",
    "<div class=\"progress-bar\" ng-class=\"type && 'progress-bar-' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: (percent < 100 ? percent : 100) + '%'}\" aria-valuetext=\"{{percent | number:0}}%\" ng-transclude></div>\n" +
    "");
}]);

angular.module("template/progressbar/progress.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/progressbar/progress.html",
    "<div class=\"progress\" ng-transclude></div>");
}]);

angular.module("template/progressbar/progressbar.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/progressbar/progressbar.html",
    "<div class=\"progress\">\n" +
    "  <div class=\"progress-bar\" ng-class=\"type && 'progress-bar-' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: (percent < 100 ? percent : 100) + '%'}\" aria-valuetext=\"{{percent | number:0}}%\" ng-transclude></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("template/rating/rating.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/rating/rating.html",
    "<span ng-mouseleave=\"reset()\" ng-keydown=\"onKeydown($event)\" tabindex=\"0\" role=\"slider\" aria-valuemin=\"0\" aria-valuemax=\"{{range.length}}\" aria-valuenow=\"{{value}}\">\n" +
    "    <i ng-repeat=\"r in range track by $index\" ng-mouseenter=\"enter($index + 1)\" ng-click=\"rate($index + 1)\" class=\"glyphicon\" ng-class=\"$index < value && (r.stateOn || 'glyphicon-star') || (r.stateOff || 'glyphicon-star-empty')\">\n" +
    "        <span class=\"sr-only\">({{ $index < value ? '*' : ' ' }})</span>\n" +
    "    </i>\n" +
    "</span>");
}]);

angular.module("template/tabs/tab.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/tabs/tab.html",
    "<li ng-class=\"{active: active, disabled: disabled}\">\n" +
    "  <a href ng-click=\"select()\" tab-heading-transclude>{{heading}}</a>\n" +
    "</li>\n" +
    "");
}]);

angular.module("template/tabs/tabset.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/tabs/tabset.html",
    "<div>\n" +
    "  <ul class=\"nav nav-{{type || 'tabs'}}\" ng-class=\"{'nav-stacked': vertical, 'nav-justified': justified}\" ng-transclude></ul>\n" +
    "  <div class=\"tab-content\">\n" +
    "    <div class=\"tab-pane\" \n" +
    "         ng-repeat=\"tab in tabs\" \n" +
    "         ng-class=\"{active: tab.active}\"\n" +
    "         tab-content-transclude=\"tab\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("template/timepicker/timepicker.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/timepicker/timepicker.html",
    "<table>\n" +
    "	<tbody>\n" +
    "		<tr class=\"text-center\">\n" +
    "			<td><a ng-click=\"incrementHours()\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" +
    "			<td>&nbsp;</td>\n" +
    "			<td><a ng-click=\"incrementMinutes()\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" +
    "			<td ng-show=\"showMeridian\"></td>\n" +
    "		</tr>\n" +
    "		<tr>\n" +
    "			<td class=\"form-group\" ng-class=\"{'has-error': invalidHours}\">\n" +
    "				<input style=\"width:50px;\" type=\"text\" ng-model=\"hours\" ng-change=\"updateHours()\" class=\"form-control text-center\" ng-readonly=\"readonlyInput\" maxlength=\"2\">\n" +
    "			</td>\n" +
    "			<td>:</td>\n" +
    "			<td class=\"form-group\" ng-class=\"{'has-error': invalidMinutes}\">\n" +
    "				<input style=\"width:50px;\" type=\"text\" ng-model=\"minutes\" ng-change=\"updateMinutes()\" class=\"form-control text-center\" ng-readonly=\"readonlyInput\" maxlength=\"2\">\n" +
    "			</td>\n" +
    "			<td ng-show=\"showMeridian\"><button type=\"button\" class=\"btn btn-default text-center\" ng-click=\"toggleMeridian()\">{{meridian}}</button></td>\n" +
    "		</tr>\n" +
    "		<tr class=\"text-center\">\n" +
    "			<td><a ng-click=\"decrementHours()\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" +
    "			<td>&nbsp;</td>\n" +
    "			<td><a ng-click=\"decrementMinutes()\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" +
    "			<td ng-show=\"showMeridian\"></td>\n" +
    "		</tr>\n" +
    "	</tbody>\n" +
    "</table>\n" +
    "");
}]);

angular.module("template/typeahead/typeahead-match.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/typeahead/typeahead-match.html",
    "<a tabindex=\"-1\" bind-html-unsafe=\"match.label | typeaheadHighlight:query\"></a>");
}]);

angular.module("template/typeahead/typeahead-popup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/typeahead/typeahead-popup.html",
    "<ul class=\"dropdown-menu\" ng-show=\"isOpen()\" ng-style=\"{top: position.top+'px', left: position.left+'px'}\" style=\"display: block;\" role=\"listbox\" aria-hidden=\"{{!isOpen()}}\">\n" +
    "    <li ng-repeat=\"match in matches track by $index\" ng-class=\"{active: isActive($index) }\" ng-mouseenter=\"selectActive($index)\" ng-click=\"selectMatch($index)\" role=\"option\" id=\"{{match.id}}\">\n" +
    "        <div typeahead-match index=\"$index\" match=\"match\" query=\"query\" template-url=\"templateUrl\"></div>\n" +
    "    </li>\n" +
    "</ul>\n" +
    "");
}]);
!angular.$$csp() && angular.element(document).find('head').prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>');;
// Generated by CoffeeScript 1.8.0
(function() {
  'use strict';
  angular.module('angular-flexslider', []).directive('flexSlider', [
    '$parse', '$timeout', function($parse, $timeout) {
      return {
        restrict: 'AE',
        scope: false,
        replace: true,
        transclude: true,
        template: '<div class="flexslider-container"></div>',
        compile: function(element, attr, linker) {
          return function($scope, $element) {
            var addSlide, collectionString, flexsliderDiv, getTrackFromItem, indexString, match, removeSlide, slidesItems, trackBy;
            match = (attr.slide || attr.flexSlide).match(/^\s*(.+)\s+in\s+(.*?)(?:\s+track\s+by\s+(.+?))?\s*$/);
            indexString = match[1];
            collectionString = match[2];
            trackBy = angular.isDefined(match[3]) ? $parse(match[3]) : $parse("" + indexString);
            flexsliderDiv = null;
            slidesItems = {};
            getTrackFromItem = function(collectionItem, index) {
              var locals;
              locals = {};
              locals[indexString] = collectionItem;
              locals['$index'] = index;
              return trackBy($scope, locals);
            };
            addSlide = function(collectionItem, index, callback) {
              var childScope, track;
              track = getTrackFromItem(collectionItem, index);
              if (slidesItems[track] != null) {
                throw "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys.";
              }
              childScope = $scope.$new();
              childScope[indexString] = collectionItem;
              childScope['$index'] = index;
              return linker(childScope, function(clone) {
                var slideItem;
                slideItem = {
                  collectionItem: collectionItem,
                  childScope: childScope,
                  element: clone
                };
                slidesItems[track] = slideItem;
                return typeof callback === "function" ? callback(slideItem) : void 0;
              });
            };
            removeSlide = function(collectionItem, index) {
              var slideItem, track;
              track = getTrackFromItem(collectionItem, index);
              slideItem = slidesItems[track];
              if (slideItem == null) {
                return;
              }
              delete slidesItems[track];
              slideItem.childScope.$destroy();
              return slideItem;
            };
            return $scope.$watchCollection(collectionString, function(collection, oldCollection) {
              var attrKey, attrVal, c, currentSlidesLength, e, i, idx, n, options, slider, slides, t, toAdd, toRemove, trackCollection, _i, _j, _k, _l, _len, _len1, _len2, _len3;
              if (!((collection != null ? collection.length : void 0) || (oldCollection != null ? oldCollection.length : void 0))) {
                return;
              }
              if (flexsliderDiv != null) {
                slider = flexsliderDiv.data('flexslider');
                currentSlidesLength = Object.keys(slidesItems).length;
                if (collection == null) {
                  collection = [];
                }
                trackCollection = {};
                for (i = _i = 0, _len = collection.length; _i < _len; i = ++_i) {
                  c = collection[i];
                  trackCollection[getTrackFromItem(c, i)] = c;
                }
                toAdd = (function() {
                  var _j, _len1, _results;
                  _results = [];
                  for (i = _j = 0, _len1 = collection.length; _j < _len1; i = ++_j) {
                    c = collection[i];
                    if (slidesItems[getTrackFromItem(c, i)] == null) {
                      _results.push({
                        value: c,
                        index: i
                      });
                    }
                  }
                  return _results;
                })();
                toRemove = (function() {
                  var _results;
                  _results = [];
                  for (t in slidesItems) {
                    i = slidesItems[t];
                    if (trackCollection[t] == null) {
                      _results.push(i.collectionItem);
                    }
                  }
                  return _results;
                })();
                if ((toAdd.length === 1 && toRemove.length === 0) || toAdd.length === 0) {
                  for (_j = 0, _len1 = toRemove.length; _j < _len1; _j++) {
                    e = toRemove[_j];
                    e = removeSlide(e, collection.indexOf(e));
                    if (e) {
                      slider.removeSlide(e.element);
                    }
                  }
                  for (_k = 0, _len2 = toAdd.length; _k < _len2; _k++) {
                    e = toAdd[_k];
                    idx = e.index;
                    addSlide(e.value, idx, function(item) {
                      if (idx === currentSlidesLength) {
                        idx = void 0;
                      }
                      return $scope.$evalAsync(function() {
                        return slider.addSlide(item.element, idx);
                      });
                    });
                  }
                  return;
                }
              }
              slidesItems = {};
              if (flexsliderDiv != null) {
                flexsliderDiv.remove();
              }
              slides = angular.element('<ul class="slides"></ul>');
              flexsliderDiv = angular.element('<div class="flexslider"></div>');
              flexsliderDiv.append(slides);
              $element.append(flexsliderDiv);
              for (i = _l = 0, _len3 = collection.length; _l < _len3; i = ++_l) {
                c = collection[i];
                addSlide(c, i, function(item) {
                  return slides.append(item.element);
                });
              }
              options = {};
              for (attrKey in attr) {
                attrVal = attr[attrKey];
                if (attrKey.indexOf('$') === 0) {
                  continue;
                }
                if (!isNaN(n = parseInt(attrVal))) {
                  options[attrKey] = n;
                  continue;
                }
                if (attrVal === 'false' || attrVal === 'true') {
                  options[attrKey] = attrVal === 'true';
                  continue;
                }
                if (attrKey === 'start' || attrKey === 'before' || attrKey === 'after' || attrKey === 'end' || attrKey === 'added' || attrKey === 'removed') {
                  options[attrKey] = (function(attrVal) {
                    var f;
                    f = $parse(attrVal);
                    return function(slider) {
                      return $scope.$apply(function() {
                        return f($scope, {
                          '$slider': {
                            element: slider
                          }
                        });
                      });
                    };
                  })(attrVal);
                  continue;
                }
                if (attrKey === 'startAt') {
                  options[attrKey] = $parse(attrVal)($scope);
                  continue;
                }
                options[attrKey] = attrVal;
              }
              if (!options.sliderId && attr.id) {
                options.sliderId = "" + attr.id + "-slider";
              }
              if (options.sliderId) {
                flexsliderDiv.attr('id', options.sliderId);
              }
              return $timeout((function() {
                return flexsliderDiv.flexslider(options);
              }), 0);
            });
          };
        }
      };
    }
  ]);

}).call(this);
;
/*
 *  Angular RangeSlider Directive
 * 
 *  Version: 0.0.13
 *
 *  Author: Daniel Crisp, danielcrisp.com
 *
 *  The rangeSlider has been styled to match the default styling
 *  of form elements styled using Twitter's Bootstrap
 *
 *  Originally forked from https://github.com/leongersen/noUiSlider
 *

    This code is released under the MIT Licence - http://opensource.org/licenses/MIT

    Copyright (c) 2013 Daniel Crisp

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.

*/

(function() {
    'use strict';

    // check if we need to support legacy angular
    var legacySupport = (angular.version.major === 1 && angular.version.minor === 0);

    /**
     * RangeSlider, allows user to define a range of values using a slider
     * Touch friendly.
     * @directive
     */
    angular.module('ui-rangeSlider', [])
        .directive('rangeSlider', ['$document', '$filter', '$log', function($document, $filter, $log) {

            // test for mouse, pointer or touch
            var eventNamespace = '.rangeSlider',

                defaults = {
                    disabled: false,
                    orientation: 'horizontal',
                    step: 0,
                    decimalPlaces: 0,
                    showValues: true,
                    preventEqualMinMax: false,
                    attachHandleValues: false
                },

                // Determine the events to bind. IE11 implements pointerEvents without
                // a prefix, which breaks compatibility with the IE10 implementation.
                /** @const */
                actions = window.navigator.pointerEnabled ? {
                    start: 'pointerdown',
                    move: 'pointermove',
                    end: 'pointerup',
                    over: 'pointerdown',
                    out: 'mouseout'
                } : window.navigator.msPointerEnabled ? {
                    start: 'MSPointerDown',
                    move: 'MSPointerMove',
                    end: 'MSPointerUp',
                    over: 'MSPointerDown',
                    out: 'mouseout'
                } : {
                    start: 'mousedown touchstart',
                    move: 'mousemove touchmove',
                    end: 'mouseup touchend',
                    over: 'mouseover touchstart',
                    out: 'mouseout'
                },

                onEvent = actions.start + eventNamespace,
                moveEvent = actions.move + eventNamespace,
                offEvent = actions.end + eventNamespace,
                overEvent = actions.over + eventNamespace,
                outEvent = actions.out + eventNamespace,

                // get standarised clientX and clientY
                client = function(f) {
                    try {
                        return [(f.clientX || f.originalEvent.clientX || f.originalEvent.touches[0].clientX), (f.clientY || f.originalEvent.clientY || f.originalEvent.touches[0].clientY)];
                    } catch (e) {
                        return ['x', 'y'];
                    }
                },

                restrict = function(value) {

                    // normalize so it can't move out of bounds
                    return (value < 0 ? 0 : (value > 100 ? 100 : value));

                },

                isNumber = function(n) {
                    // console.log(n);
                    return !isNaN(parseFloat(n)) && isFinite(n);
                },

                scopeOptions = {
                    disabled: '=?',
                    min: '=',
                    max: '=',
                    modelMin: '=?',
                    modelMax: '=?',
                    onHandleDown: '&', // calls optional function when handle is grabbed
                    onHandleUp: '&', // calls optional function when handle is released
                    orientation: '@', // options: horizontal | vertical | vertical left | vertical right
                    step: '@',
                    decimalPlaces: '@',
                    filter: '@',
                    filterOptions: '@',
                    showValues: '@',
                    pinHandle: '@',
                    preventEqualMinMax: '@',
                    attachHandleValues: '@'
                };

            if (legacySupport) {
                // make optional properties required
                scopeOptions.disabled = '=';
                scopeOptions.modelMin = '=';
                scopeOptions.modelMax = '=';
            }

            // if (EVENT < 4) {
            //     // some sort of touch has been detected
            //     angular.element('html').addClass('ngrs-touch');
            // } else {
            //     angular.element('html').addClass('ngrs-no-touch');
            // }


            return {
                restrict: 'A',
                replace: true,
                template: ['<div class="ngrs-range-slider">',
                    '<div class="ngrs-runner">',
                    '<div class="ngrs-handle ngrs-handle-min"><i></i></div>',
                    '<div class="ngrs-handle ngrs-handle-max"><i></i></div>',
                    '<div class="ngrs-join"></div>',
                    '</div>',
                    '<div class="ngrs-value-runner">',
                    '<div class="ngrs-value ngrs-value-min" ng-show="showValues"><div>{{filteredModelMin}}</div></div>',
                    '<div class="ngrs-value ngrs-value-max" ng-show="showValues"><div>{{filteredModelMax}}</div></div>',
                    '</div>',
                    '</div>'
                ].join(''),
                scope: scopeOptions,
                link: function(scope, element, attrs, controller) {

                    /**
                     *  FIND ELEMENTS
                     */

                    var $slider = angular.element(element),
                        handles = [element.find('.ngrs-handle-min'), element.find('.ngrs-handle-max')],
                        values = [element.find('.ngrs-value-min'), element.find('.ngrs-value-max')],
                        join = element.find('.ngrs-join'),
                        pos = 'left',
                        posOpp = 'right',
                        orientation = 0,
                        allowedRange = [0, 0],
                        range = 0,
                        down = false;

                    // filtered
                    scope.filteredModelMin = scope.modelMin;
                    scope.filteredModelMax = scope.modelMax;

                    /**
                     *  FALL BACK TO DEFAULTS FOR SOME ATTRIBUTES
                     */

                    attrs.$observe('disabled', function(val) {
                        if (!angular.isDefined(val)) {
                            scope.disabled = defaults.disabled;
                        }

                        scope.$watch('disabled', setDisabledStatus);
                    });

                    attrs.$observe('orientation', function(val) {
                        if (!angular.isDefined(val)) {
                            scope.orientation = defaults.orientation;
                        }

                        var classNames = scope.orientation.split(' '),
                            useClass;

                        for (var i = 0, l = classNames.length; i < l; i++) {
                            classNames[i] = 'ngrs-' + classNames[i];
                        }

                        useClass = classNames.join(' ');

                        // add class to element
                        $slider.addClass(useClass);

                        // update pos
                        if (scope.orientation === 'vertical' || scope.orientation === 'vertical left' || scope.orientation === 'vertical right') {
                            pos = 'top';
                            posOpp = 'bottom';
                            orientation = 1;
                        }
                    });

                    attrs.$observe('step', function(val) {
                        if (!angular.isDefined(val)) {
                            scope.step = defaults.step;
                        }
                    });

                    attrs.$observe('decimalPlaces', function(val) {
                        if (!angular.isDefined(val)) {
                            scope.decimalPlaces = defaults.decimalPlaces;
                        }
                    });

                    attrs.$observe('showValues', function(val) {
                        if (!angular.isDefined(val)) {
                            scope.showValues = defaults.showValues;
                        } else {
                            if (val === 'false') {
                                scope.showValues = false;
                            } else {
                                scope.showValues = true;
                            }
                        }
                    });

                    attrs.$observe('pinHandle', function(val) {
                        if (!angular.isDefined(val)) {
                            scope.pinHandle = null;
                        } else {
                            if (val === 'min' || val === 'max') {
                                scope.pinHandle = val;
                            } else {
                                scope.pinHandle = null;
                            }
                        }

                        scope.$watch('pinHandle', setPinHandle);
                    });

                    attrs.$observe('preventEqualMinMax', function(val) {
                        if (!angular.isDefined(val)) {
                            scope.preventEqualMinMax = defaults.preventEqualMinMax;
                        } else {
                            if (val === 'false') {
                                scope.preventEqualMinMax = false;
                            } else {
                                scope.preventEqualMinMax = true;
                            }
                        }
                    });

                    attrs.$observe('attachHandleValues', function(val) {
                        if (!angular.isDefined(val)) {
                            scope.attachHandleValues = defaults.attachHandleValues;
                        } else {
                            if (val === 'true' || val === '') {
                                // flag as true
                                scope.attachHandleValues = true;
                                // add class to runner
                                element.find('.ngrs-value-runner').addClass('ngrs-attached-handles');
                            } else {
                                scope.attachHandleValues = false;
                            }
                        }
                    });


                    // listen for changes to values
                    scope.$watch('min', setMinMax);
                    scope.$watch('max', setMinMax);

                    scope.$watch('modelMin', setModelMinMax);
                    scope.$watch('modelMax', setModelMinMax);

                    /**
                     * HANDLE CHANGES
                     */

                    function setPinHandle(status) {
                        if (status === "min") {
                            angular.element(handles[0]).css('display', 'none');
                            angular.element(handles[1]).css('display', 'block');
                        } else if (status === "max") {
                            angular.element(handles[0]).css('display', 'block');
                            angular.element(handles[1]).css('display', 'none');
                        } else {
                            angular.element(handles[0]).css('display', 'block');
                            angular.element(handles[1]).css('display', 'block');
                        }
                    }

                    function setDisabledStatus(status) {
                        if (status) {
                            $slider.addClass('ngrs-disabled');
                        } else {
                            $slider.removeClass('ngrs-disabled');
                        }
                    }

                    function setMinMax() {

                        if (scope.min > scope.max) {
                            throwError('min must be less than or equal to max');
                        }

                        // only do stuff when both values are ready
                        if (angular.isDefined(scope.min) && angular.isDefined(scope.max)) {

                            // make sure they are numbers
                            if (!isNumber(scope.min)) {
                                throwError('min must be a number');
                            }

                            if (!isNumber(scope.max)) {
                                throwError('max must be a number');
                            }

                            range = scope.max - scope.min;
                            allowedRange = [scope.min, scope.max];

                            // update models too
                            setModelMinMax();

                        }
                    }

                    function setModelMinMax() {

                        if (scope.modelMin > scope.modelMax) {
                            throwWarning('modelMin must be less than or equal to modelMax');
                            // reset values to correct
                            scope.modelMin = scope.modelMax;
                        }

                        // only do stuff when both values are ready
                        if (
                            (angular.isDefined(scope.modelMin) || scope.pinHandle === 'min') &&
                            (angular.isDefined(scope.modelMax) || scope.pinHandle === 'max')
                        ) {

                            // make sure they are numbers
                            if (!isNumber(scope.modelMin)) {
                                if (scope.pinHandle !== 'min') {
                                    throwWarning('modelMin must be a number');
                                }
                                scope.modelMin = scope.min;
                            }

                            if (!isNumber(scope.modelMax)) {
                                if (scope.pinHandle !== 'max') {
                                    throwWarning('modelMax must be a number');
                                }
                                scope.modelMax = scope.max;
                            }

                            var handle1pos = restrict(((scope.modelMin - scope.min) / range) * 100),
                                handle2pos = restrict(((scope.modelMax - scope.min) / range) * 100),
                                value1pos,
                                value2pos;

                            if (scope.attachHandleValues) {
                                value1pos = handle1pos;
                                value2pos = handle2pos;
                            }

                            // make sure the model values are within the allowed range
                            scope.modelMin = Math.max(scope.min, scope.modelMin);
                            scope.modelMax = Math.min(scope.max, scope.modelMax);

                            if (scope.filter && scope.filterOptions) {
                                scope.filteredModelMin = $filter(scope.filter)(scope.modelMin, scope.filterOptions);
                                scope.filteredModelMax = $filter(scope.filter)(scope.modelMax, scope.filterOptions);
                            } else if (scope.filter) {

                                var filterTokens = scope.filter.split(':'),
                                    filterName = scope.filter.split(':')[0],
                                    filterOptions = filterTokens.slice().slice(1),
                                    modelMinOptions,
                                    modelMaxOptions;

                                // properly parse string and number args
                                filterOptions = filterOptions.map(function (arg) {
                                    if (isNumber(arg)) {
                                        return +arg;
                                    } else if ((arg[0] == "\"" && arg[arg.length-1] == "\"") || (arg[0] == "\'" && arg[arg.length-1] == "\'")) {
                                        return arg.slice(1, -1);
                                    }
                                });

                                modelMinOptions = filterOptions.slice();
                                modelMaxOptions = filterOptions.slice();
                                modelMinOptions.unshift(scope.modelMin);
                                modelMaxOptions.unshift(scope.modelMax);

                                scope.filteredModelMin = $filter(filterName).apply(null, modelMinOptions);
                                scope.filteredModelMax = $filter(filterName).apply(null, modelMaxOptions);
                            } else {
                                scope.filteredModelMin = scope.modelMin;
                                scope.filteredModelMax = scope.modelMax;
                            }

                            // check for no range
                            if (scope.min === scope.max && scope.modelMin == scope.modelMax) {

                                // reposition handles
                                angular.element(handles[0]).css(pos, '0%');
                                angular.element(handles[1]).css(pos, '100%');

                                if (scope.attachHandleValues) {
                                    // reposition values
                                    angular.element(values[0]).css(pos, '0%');
                                    angular.element(values[1]).css(pos, '100%');
                                }

                                // reposition join
                                angular.element(join).css(pos, '0%').css(posOpp, '0%');

                            } else {

                                // reposition handles
                                angular.element(handles[0]).css(pos, handle1pos + '%');
                                angular.element(handles[1]).css(pos, handle2pos + '%');

                                if (scope.attachHandleValues) {
                                    // reposition values
                                    angular.element(values[0]).css(pos, value1pos + '%');
                                    angular.element(values[1]).css(pos, value2pos + '%');
                                    angular.element(values[1]).css(posOpp, 'auto');
                                }

                                // reposition join
                                angular.element(join).css(pos, handle1pos + '%').css(posOpp, (100 - handle2pos) + '%');

                                // ensure min handle can't be hidden behind max handle
                                if (handle1pos > 95) {
                                    angular.element(handles[0]).css('z-index', 3);
                                }
                            }

                        }

                    }

                    function handleMove(index) {

                        var $handle = handles[index];

                        // on mousedown / touchstart
                        $handle.bind(onEvent + 'X', function(event) {

                            var handleDownClass = (index === 0 ? 'ngrs-handle-min' : 'ngrs-handle-max') + '-down',
                                //unbind = $handle.add($document).add('body'),
                                modelValue = (index === 0 ? scope.modelMin : scope.modelMax) - scope.min,
                                originalPosition = (modelValue / range) * 100,
                                originalClick = client(event),
                                previousClick = originalClick,
                                previousProposal = false;

                            if (angular.isFunction(scope.onHandleDown)) {
                                scope.onHandleDown();
                            }

                            // stop user accidentally selecting stuff
                            angular.element('body').bind('selectstart' + eventNamespace, function() {
                                return false;
                            });

                            // only do stuff if we are disabled
                            if (!scope.disabled) {

                                // flag as down
                                down = true;

                                // add down class
                                $handle.addClass('ngrs-down');

                                $slider.addClass('ngrs-focus ' + handleDownClass);

                                // add touch class for MS styling
                                angular.element('body').addClass('ngrs-touching');

                                // listen for mousemove / touchmove document events
                                $document.bind(moveEvent, function(e) {
                                    // prevent default
                                    e.preventDefault();

                                    var currentClick = client(e),
                                        movement,
                                        proposal,
                                        other,
                                        per = (scope.step / range) * 100,
                                        otherModelPosition = (((index === 0 ? scope.modelMax : scope.modelMin) - scope.min) / range) * 100;

                                    if (currentClick[0] === "x") {
                                        return;
                                    }

                                    // calculate deltas
                                    currentClick[0] -= originalClick[0];
                                    currentClick[1] -= originalClick[1];

                                    // has movement occurred on either axis?
                                    movement = [
                                        (previousClick[0] !== currentClick[0]), (previousClick[1] !== currentClick[1])
                                    ];

                                    // propose a movement
                                    proposal = originalPosition + ((currentClick[orientation] * 100) / (orientation ? $slider.height() : $slider.width()));

                                    // normalize so it can't move out of bounds
                                    proposal = restrict(proposal);

                                    if (scope.preventEqualMinMax) {

                                        if (per === 0) {
                                            per = (1 / range) * 100; // restrict to 1
                                        }

                                        if (index === 0) {
                                            otherModelPosition = otherModelPosition - per;
                                        } else if (index === 1) {
                                            otherModelPosition = otherModelPosition + per;
                                        }
                                    }

                                    // check which handle is being moved and add / remove margin
                                    if (index === 0) {
                                        proposal = proposal > otherModelPosition ? otherModelPosition : proposal;
                                    } else if (index === 1) {
                                        proposal = proposal < otherModelPosition ? otherModelPosition : proposal;
                                    }

                                    if (scope.step > 0) {
                                        // only change if we are within the extremes, otherwise we get strange rounding
                                        if (proposal < 100 && proposal > 0) {
                                            proposal = Math.round(proposal / per) * per;
                                        }
                                    }

                                    if (proposal > 95 && index === 0) {
                                        $handle.css('z-index', 3);
                                    } else {
                                        $handle.css('z-index', '');
                                    }

                                    if (movement[orientation] && proposal != previousProposal) {

                                        if (index === 0) {

                                            // update model as we slide
                                            scope.modelMin = parseFloat(parseFloat((((proposal * range) / 100) + scope.min)).toFixed(scope.decimalPlaces));

                                        } else if (index === 1) {

                                            scope.modelMax = parseFloat(parseFloat((((proposal * range) / 100) + scope.min)).toFixed(scope.decimalPlaces));
                                        }

                                        // update angular
                                        scope.$apply();

                                        previousProposal = proposal;

                                    }

                                    previousClick = currentClick;

                                }).bind(offEvent, function() {

                                    if (angular.isFunction(scope.onHandleUp)) {
                                        scope.onHandleUp();
                                    }

                                    // unbind listeners
                                    $document.off(moveEvent);
                                    $document.off(offEvent);

                                    angular.element('body').removeClass('ngrs-touching');

                                    // cancel down flag
                                    down = false;

                                    // remove down and over class
                                    $handle.removeClass('ngrs-down');
                                    $handle.removeClass('ngrs-over');

                                    // remove active class
                                    $slider.removeClass('ngrs-focus ' + handleDownClass);

                                });
                            }

                        }).on(overEvent, function () {
                            $handle.addClass('ngrs-over');
                        }).on(outEvent, function () {
                            if (!down) {
                                $handle.removeClass('ngrs-over');
                            }
                        });
                    }

                    function throwError(message) {
                        scope.disabled = true;
                        throw new Error('RangeSlider: ' + message);
                    }

                    function throwWarning(message) {
                        $log.warn(message);
                    }

                    /**
                     * DESTROY
                     */

                    scope.$on('$destroy', function() {

                        // unbind event from slider
                        $slider.off(eventNamespace);

                        // unbind from body
                        angular.element('body').off(eventNamespace);

                        // unbind from document
                        $document.off(eventNamespace);

                        // unbind from handles
                        for (var i = 0, l = handles.length; i < l; i++) {
                            handles[i].off(eventNamespace);
                            handles[i].off(eventNamespace + 'X');
                        }

                    });

                    /**
                     * INIT
                     */

                    $slider
                    // disable selection
                        .bind('selectstart' + eventNamespace, function(event) {
                            return false;
                        })
                        // stop propagation
                        .bind('click', function(event) {
                            event.stopPropagation();
                        });

                    // bind events to each handle
                    handleMove(0);
                    handleMove(1);

                }
            };
        }]);

    // requestAnimationFramePolyFill
    // http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
    // shim layer with setTimeout fallback
    window.requestAnimFrame = (function() {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function(callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();
}());
;
/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 0.13.0 - 2015-05-02
 * License: MIT
 */
angular.module("ui.bootstrap",["ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.bindHtml","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.position","ui.bootstrap.datepicker","ui.bootstrap.dropdown","ui.bootstrap.modal","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.transition","ui.bootstrap.typeahead"]),angular.module("ui.bootstrap.collapse",[]).directive("collapse",["$animate",function(a){return{link:function(b,c,d){function e(){c.removeClass("collapse").addClass("collapsing"),a.addClass(c,"in",{to:{height:c[0].scrollHeight+"px"}}).then(f)}function f(){c.removeClass("collapsing"),c.css({height:"auto"})}function g(){c.css({height:c[0].scrollHeight+"px"}).removeClass("collapse").addClass("collapsing"),a.removeClass(c,"in",{to:{height:"0"}}).then(h)}function h(){c.css({height:"0"}),c.removeClass("collapsing"),c.addClass("collapse")}b.$watch(d.collapse,function(a){a?g():e()})}}}]),angular.module("ui.bootstrap.accordion",["ui.bootstrap.collapse"]).constant("accordionConfig",{closeOthers:!0}).controller("AccordionController",["$scope","$attrs","accordionConfig",function(a,b,c){this.groups=[],this.closeOthers=function(d){var e=angular.isDefined(b.closeOthers)?a.$eval(b.closeOthers):c.closeOthers;e&&angular.forEach(this.groups,function(a){a!==d&&(a.isOpen=!1)})},this.addGroup=function(a){var b=this;this.groups.push(a),a.$on("$destroy",function(){b.removeGroup(a)})},this.removeGroup=function(a){var b=this.groups.indexOf(a);-1!==b&&this.groups.splice(b,1)}}]).directive("accordion",function(){return{restrict:"EA",controller:"AccordionController",transclude:!0,replace:!1,templateUrl:"template/accordion/accordion.html"}}).directive("accordionGroup",function(){return{require:"^accordion",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/accordion/accordion-group.html",scope:{heading:"@",isOpen:"=?",isDisabled:"=?"},controller:function(){this.setHeading=function(a){this.heading=a}},link:function(a,b,c,d){d.addGroup(a),a.$watch("isOpen",function(b){b&&d.closeOthers(a)}),a.toggleOpen=function(){a.isDisabled||(a.isOpen=!a.isOpen)}}}}).directive("accordionHeading",function(){return{restrict:"EA",transclude:!0,template:"",replace:!0,require:"^accordionGroup",link:function(a,b,c,d,e){d.setHeading(e(a,angular.noop))}}}).directive("accordionTransclude",function(){return{require:"^accordionGroup",link:function(a,b,c,d){a.$watch(function(){return d[c.accordionTransclude]},function(a){a&&(b.html(""),b.append(a))})}}}),angular.module("ui.bootstrap.alert",[]).controller("AlertController",["$scope","$attrs",function(a,b){a.closeable="close"in b,this.close=a.close}]).directive("alert",function(){return{restrict:"EA",controller:"AlertController",templateUrl:"template/alert/alert.html",transclude:!0,replace:!0,scope:{type:"@",close:"&"}}}).directive("dismissOnTimeout",["$timeout",function(a){return{require:"alert",link:function(b,c,d,e){a(function(){e.close()},parseInt(d.dismissOnTimeout,10))}}}]),angular.module("ui.bootstrap.bindHtml",[]).directive("bindHtmlUnsafe",function(){return function(a,b,c){b.addClass("ng-binding").data("$binding",c.bindHtmlUnsafe),a.$watch(c.bindHtmlUnsafe,function(a){b.html(a||"")})}}),angular.module("ui.bootstrap.buttons",[]).constant("buttonConfig",{activeClass:"active",toggleEvent:"click"}).controller("ButtonsController",["buttonConfig",function(a){this.activeClass=a.activeClass||"active",this.toggleEvent=a.toggleEvent||"click"}]).directive("btnRadio",function(){return{require:["btnRadio","ngModel"],controller:"ButtonsController",link:function(a,b,c,d){var e=d[0],f=d[1];f.$render=function(){b.toggleClass(e.activeClass,angular.equals(f.$modelValue,a.$eval(c.btnRadio)))},b.bind(e.toggleEvent,function(){var d=b.hasClass(e.activeClass);(!d||angular.isDefined(c.uncheckable))&&a.$apply(function(){f.$setViewValue(d?null:a.$eval(c.btnRadio)),f.$render()})})}}}).directive("btnCheckbox",function(){return{require:["btnCheckbox","ngModel"],controller:"ButtonsController",link:function(a,b,c,d){function e(){return g(c.btnCheckboxTrue,!0)}function f(){return g(c.btnCheckboxFalse,!1)}function g(b,c){var d=a.$eval(b);return angular.isDefined(d)?d:c}var h=d[0],i=d[1];i.$render=function(){b.toggleClass(h.activeClass,angular.equals(i.$modelValue,e()))},b.bind(h.toggleEvent,function(){a.$apply(function(){i.$setViewValue(b.hasClass(h.activeClass)?f():e()),i.$render()})})}}}),angular.module("ui.bootstrap.carousel",[]).controller("CarouselController",["$scope","$interval","$animate",function(a,b,c){function d(a){if(angular.isUndefined(k[a].index))return k[a];{var b;k.length}for(b=0;b<k.length;++b)if(k[b].index==a)return k[b]}function e(){f();var c=+a.interval;!isNaN(c)&&c>0&&(h=b(g,c))}function f(){h&&(b.cancel(h),h=null)}function g(){var b=+a.interval;i&&!isNaN(b)&&b>0?a.next():a.pause()}var h,i,j=this,k=j.slides=a.slides=[],l=-1;j.currentSlide=null;var m=!1;j.select=a.select=function(b,d){function f(){m||(angular.extend(b,{direction:d,active:!0}),angular.extend(j.currentSlide||{},{direction:d,active:!1}),c.enabled()&&!a.noTransition&&b.$element&&(a.$currentTransition=!0,b.$element.one("$animate:close",function(){a.$currentTransition=null})),j.currentSlide=b,l=g,e())}var g=j.indexOfSlide(b);void 0===d&&(d=g>j.getCurrentIndex()?"next":"prev"),b&&b!==j.currentSlide&&f()},a.$on("$destroy",function(){m=!0}),j.getCurrentIndex=function(){return j.currentSlide&&angular.isDefined(j.currentSlide.index)?+j.currentSlide.index:l},j.indexOfSlide=function(a){return angular.isDefined(a.index)?+a.index:k.indexOf(a)},a.next=function(){var b=(j.getCurrentIndex()+1)%k.length;return a.$currentTransition?void 0:j.select(d(b),"next")},a.prev=function(){var b=j.getCurrentIndex()-1<0?k.length-1:j.getCurrentIndex()-1;return a.$currentTransition?void 0:j.select(d(b),"prev")},a.isActive=function(a){return j.currentSlide===a},a.$watch("interval",e),a.$on("$destroy",f),a.play=function(){i||(i=!0,e())},a.pause=function(){a.noPause||(i=!1,f())},j.addSlide=function(b,c){b.$element=c,k.push(b),1===k.length||b.active?(j.select(k[k.length-1]),1==k.length&&a.play()):b.active=!1},j.removeSlide=function(a){angular.isDefined(a.index)&&k.sort(function(a,b){return+a.index>+b.index});var b=k.indexOf(a);k.splice(b,1),k.length>0&&a.active?j.select(b>=k.length?k[b-1]:k[b]):l>b&&l--}}]).directive("carousel",[function(){return{restrict:"EA",transclude:!0,replace:!0,controller:"CarouselController",require:"carousel",templateUrl:"template/carousel/carousel.html",scope:{interval:"=",noTransition:"=",noPause:"="}}}]).directive("slide",function(){return{require:"^carousel",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/carousel/slide.html",scope:{active:"=?",index:"=?"},link:function(a,b,c,d){d.addSlide(a,b),a.$on("$destroy",function(){d.removeSlide(a)}),a.$watch("active",function(b){b&&d.select(a)})}}}).animation(".item",["$animate",function(a){return{beforeAddClass:function(b,c,d){if("active"==c&&b.parent()&&!b.parent().scope().noTransition){var e=!1,f=b.isolateScope().direction,g="next"==f?"left":"right";return b.addClass(f),a.addClass(b,g).then(function(){e||b.removeClass(g+" "+f),d()}),function(){e=!0}}d()},beforeRemoveClass:function(b,c,d){if("active"==c&&b.parent()&&!b.parent().scope().noTransition){var e=!1,f=b.isolateScope().direction,g="next"==f?"left":"right";return a.addClass(b,g).then(function(){e||b.removeClass(g),d()}),function(){e=!0}}d()}}}]),angular.module("ui.bootstrap.dateparser",[]).service("dateParser",["$locale","orderByFilter",function(a,b){function c(a){var c=[],d=a.split("");return angular.forEach(f,function(b,e){var f=a.indexOf(e);if(f>-1){a=a.split(""),d[f]="("+b.regex+")",a[f]="$";for(var g=f+1,h=f+e.length;h>g;g++)d[g]="",a[g]="$";a=a.join(""),c.push({index:f,apply:b.apply})}}),{regex:new RegExp("^"+d.join("")+"$"),map:b(c,"index")}}function d(a,b,c){return 1>c?!1:1===b&&c>28?29===c&&(a%4===0&&a%100!==0||a%400===0):3===b||5===b||8===b||10===b?31>c:!0}var e=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;this.parsers={};var f={yyyy:{regex:"\\d{4}",apply:function(a){this.year=+a}},yy:{regex:"\\d{2}",apply:function(a){this.year=+a+2e3}},y:{regex:"\\d{1,4}",apply:function(a){this.year=+a}},MMMM:{regex:a.DATETIME_FORMATS.MONTH.join("|"),apply:function(b){this.month=a.DATETIME_FORMATS.MONTH.indexOf(b)}},MMM:{regex:a.DATETIME_FORMATS.SHORTMONTH.join("|"),apply:function(b){this.month=a.DATETIME_FORMATS.SHORTMONTH.indexOf(b)}},MM:{regex:"0[1-9]|1[0-2]",apply:function(a){this.month=a-1}},M:{regex:"[1-9]|1[0-2]",apply:function(a){this.month=a-1}},dd:{regex:"[0-2][0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},d:{regex:"[1-2]?[0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},EEEE:{regex:a.DATETIME_FORMATS.DAY.join("|")},EEE:{regex:a.DATETIME_FORMATS.SHORTDAY.join("|")},HH:{regex:"(?:0|1)[0-9]|2[0-3]",apply:function(a){this.hours=+a}},H:{regex:"1?[0-9]|2[0-3]",apply:function(a){this.hours=+a}},mm:{regex:"[0-5][0-9]",apply:function(a){this.minutes=+a}},m:{regex:"[0-9]|[1-5][0-9]",apply:function(a){this.minutes=+a}},sss:{regex:"[0-9][0-9][0-9]",apply:function(a){this.milliseconds=+a}},ss:{regex:"[0-5][0-9]",apply:function(a){this.seconds=+a}},s:{regex:"[0-9]|[1-5][0-9]",apply:function(a){this.seconds=+a}}};this.parse=function(b,f,g){if(!angular.isString(b)||!f)return b;f=a.DATETIME_FORMATS[f]||f,f=f.replace(e,"\\$&"),this.parsers[f]||(this.parsers[f]=c(f));var h=this.parsers[f],i=h.regex,j=h.map,k=b.match(i);if(k&&k.length){var l,m;l=g?{year:g.getFullYear(),month:g.getMonth(),date:g.getDate(),hours:g.getHours(),minutes:g.getMinutes(),seconds:g.getSeconds(),milliseconds:g.getMilliseconds()}:{year:1900,month:0,date:1,hours:0,minutes:0,seconds:0,milliseconds:0};for(var n=1,o=k.length;o>n;n++){var p=j[n-1];p.apply&&p.apply.call(l,k[n])}return d(l.year,l.month,l.date)&&(m=new Date(l.year,l.month,l.date,l.hours,l.minutes,l.seconds,l.milliseconds||0)),m}}}]),angular.module("ui.bootstrap.position",[]).factory("$position",["$document","$window",function(a,b){function c(a,c){return a.currentStyle?a.currentStyle[c]:b.getComputedStyle?b.getComputedStyle(a)[c]:a.style[c]}function d(a){return"static"===(c(a,"position")||"static")}var e=function(b){for(var c=a[0],e=b.offsetParent||c;e&&e!==c&&d(e);)e=e.offsetParent;return e||c};return{position:function(b){var c=this.offset(b),d={top:0,left:0},f=e(b[0]);f!=a[0]&&(d=this.offset(angular.element(f)),d.top+=f.clientTop-f.scrollTop,d.left+=f.clientLeft-f.scrollLeft);var g=b[0].getBoundingClientRect();return{width:g.width||b.prop("offsetWidth"),height:g.height||b.prop("offsetHeight"),top:c.top-d.top,left:c.left-d.left}},offset:function(c){var d=c[0].getBoundingClientRect();return{width:d.width||c.prop("offsetWidth"),height:d.height||c.prop("offsetHeight"),top:d.top+(b.pageYOffset||a[0].documentElement.scrollTop),left:d.left+(b.pageXOffset||a[0].documentElement.scrollLeft)}},positionElements:function(a,b,c,d){var e,f,g,h,i=c.split("-"),j=i[0],k=i[1]||"center";e=d?this.offset(a):this.position(a),f=b.prop("offsetWidth"),g=b.prop("offsetHeight");var l={center:function(){return e.left+e.width/2-f/2},left:function(){return e.left},right:function(){return e.left+e.width}},m={center:function(){return e.top+e.height/2-g/2},top:function(){return e.top},bottom:function(){return e.top+e.height}};switch(j){case"right":h={top:m[k](),left:l[j]()};break;case"left":h={top:m[k](),left:e.left-f};break;case"bottom":h={top:m[j](),left:l[k]()};break;default:h={top:e.top-g,left:l[k]()}}return h}}}]),angular.module("ui.bootstrap.datepicker",["ui.bootstrap.dateparser","ui.bootstrap.position"]).constant("datepickerConfig",{formatDay:"dd",formatMonth:"MMMM",formatYear:"yyyy",formatDayHeader:"EEE",formatDayTitle:"MMMM yyyy",formatMonthTitle:"yyyy",datepickerMode:"day",minMode:"day",maxMode:"year",showWeeks:!0,startingDay:0,yearRange:20,minDate:null,maxDate:null,shortcutPropagation:!1}).controller("DatepickerController",["$scope","$attrs","$parse","$interpolate","$timeout","$log","dateFilter","datepickerConfig",function(a,b,c,d,e,f,g,h){var i=this,j={$setViewValue:angular.noop};this.modes=["day","month","year"],angular.forEach(["formatDay","formatMonth","formatYear","formatDayHeader","formatDayTitle","formatMonthTitle","minMode","maxMode","showWeeks","startingDay","yearRange","shortcutPropagation"],function(c,e){i[c]=angular.isDefined(b[c])?8>e?d(b[c])(a.$parent):a.$parent.$eval(b[c]):h[c]}),angular.forEach(["minDate","maxDate"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(a){i[d]=a?new Date(a):null,i.refreshView()}):i[d]=h[d]?new Date(h[d]):null}),a.datepickerMode=a.datepickerMode||h.datepickerMode,a.maxMode=i.maxMode,a.uniqueId="datepicker-"+a.$id+"-"+Math.floor(1e4*Math.random()),angular.isDefined(b.initDate)?(this.activeDate=a.$parent.$eval(b.initDate)||new Date,a.$parent.$watch(b.initDate,function(a){a&&(j.$isEmpty(j.$modelValue)||j.$invalid)&&(i.activeDate=a,i.refreshView())})):this.activeDate=new Date,a.isActive=function(b){return 0===i.compare(b.date,i.activeDate)?(a.activeDateId=b.uid,!0):!1},this.init=function(a){j=a,j.$render=function(){i.render()}},this.render=function(){if(j.$viewValue){var a=new Date(j.$viewValue),b=!isNaN(a);b?this.activeDate=a:f.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.'),j.$setValidity("date",b)}this.refreshView()},this.refreshView=function(){if(this.element){this._refreshView();var a=j.$viewValue?new Date(j.$viewValue):null;j.$setValidity("date-disabled",!a||this.element&&!this.isDisabled(a))}},this.createDateObject=function(a,b){var c=j.$viewValue?new Date(j.$viewValue):null;return{date:a,label:g(a,b),selected:c&&0===this.compare(a,c),disabled:this.isDisabled(a),current:0===this.compare(a,new Date),customClass:this.customClass(a)}},this.isDisabled=function(c){return this.minDate&&this.compare(c,this.minDate)<0||this.maxDate&&this.compare(c,this.maxDate)>0||b.dateDisabled&&a.dateDisabled({date:c,mode:a.datepickerMode})},this.customClass=function(b){return a.customClass({date:b,mode:a.datepickerMode})},this.split=function(a,b){for(var c=[];a.length>0;)c.push(a.splice(0,b));return c},a.select=function(b){if(a.datepickerMode===i.minMode){var c=j.$viewValue?new Date(j.$viewValue):new Date(0,0,0,0,0,0,0);c.setFullYear(b.getFullYear(),b.getMonth(),b.getDate()),j.$setViewValue(c),j.$render()}else i.activeDate=b,a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)-1]},a.move=function(a){var b=i.activeDate.getFullYear()+a*(i.step.years||0),c=i.activeDate.getMonth()+a*(i.step.months||0);i.activeDate.setFullYear(b,c,1),i.refreshView()},a.toggleMode=function(b){b=b||1,a.datepickerMode===i.maxMode&&1===b||a.datepickerMode===i.minMode&&-1===b||(a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)+b])},a.keys={13:"enter",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down"};var k=function(){e(function(){i.element[0].focus()},0,!1)};a.$on("datepicker.focus",k),a.keydown=function(b){var c=a.keys[b.which];if(c&&!b.shiftKey&&!b.altKey)if(b.preventDefault(),i.shortcutPropagation||b.stopPropagation(),"enter"===c||"space"===c){if(i.isDisabled(i.activeDate))return;a.select(i.activeDate),k()}else!b.ctrlKey||"up"!==c&&"down"!==c?(i.handleKeyDown(c,b),i.refreshView()):(a.toggleMode("up"===c?1:-1),k())}}]).directive("datepicker",function(){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/datepicker.html",scope:{datepickerMode:"=?",dateDisabled:"&",customClass:"&",shortcutPropagation:"&?"},require:["datepicker","?^ngModel"],controller:"DatepickerController",link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f)}}}).directive("daypicker",["dateFilter",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/day.html",require:"^datepicker",link:function(b,c,d,e){function f(a,b){return 1!==b||a%4!==0||a%100===0&&a%400!==0?i[b]:29}function g(a,b){var c=new Array(b),d=new Date(a),e=0;for(d.setHours(12);b>e;)c[e++]=new Date(d),d.setDate(d.getDate()+1);return c}function h(a){var b=new Date(a);b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1}b.showWeeks=e.showWeeks,e.step={months:1},e.element=c;var i=[31,28,31,30,31,30,31,31,30,31,30,31];e._refreshView=function(){var c=e.activeDate.getFullYear(),d=e.activeDate.getMonth(),f=new Date(c,d,1),i=e.startingDay-f.getDay(),j=i>0?7-i:-i,k=new Date(f);j>0&&k.setDate(-j+1);for(var l=g(k,42),m=0;42>m;m++)l[m]=angular.extend(e.createDateObject(l[m],e.formatDay),{secondary:l[m].getMonth()!==d,uid:b.uniqueId+"-"+m});b.labels=new Array(7);for(var n=0;7>n;n++)b.labels[n]={abbr:a(l[n].date,e.formatDayHeader),full:a(l[n].date,"EEEE")};if(b.title=a(e.activeDate,e.formatDayTitle),b.rows=e.split(l,7),b.showWeeks){b.weekNumbers=[];for(var o=(11-e.startingDay)%7,p=b.rows.length,q=0;p>q;q++)b.weekNumbers.push(h(b.rows[q][o].date))}},e.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate())-new Date(b.getFullYear(),b.getMonth(),b.getDate())},e.handleKeyDown=function(a){var b=e.activeDate.getDate();if("left"===a)b-=1;else if("up"===a)b-=7;else if("right"===a)b+=1;else if("down"===a)b+=7;else if("pageup"===a||"pagedown"===a){var c=e.activeDate.getMonth()+("pageup"===a?-1:1);e.activeDate.setMonth(c,1),b=Math.min(f(e.activeDate.getFullYear(),e.activeDate.getMonth()),b)}else"home"===a?b=1:"end"===a&&(b=f(e.activeDate.getFullYear(),e.activeDate.getMonth()));e.activeDate.setDate(b)},e.refreshView()}}}]).directive("monthpicker",["dateFilter",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/month.html",require:"^datepicker",link:function(b,c,d,e){e.step={years:1},e.element=c,e._refreshView=function(){for(var c=new Array(12),d=e.activeDate.getFullYear(),f=0;12>f;f++)c[f]=angular.extend(e.createDateObject(new Date(d,f,1),e.formatMonth),{uid:b.uniqueId+"-"+f});b.title=a(e.activeDate,e.formatMonthTitle),b.rows=e.split(c,3)},e.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth())-new Date(b.getFullYear(),b.getMonth())},e.handleKeyDown=function(a){var b=e.activeDate.getMonth();if("left"===a)b-=1;else if("up"===a)b-=3;else if("right"===a)b+=1;else if("down"===a)b+=3;else if("pageup"===a||"pagedown"===a){var c=e.activeDate.getFullYear()+("pageup"===a?-1:1);e.activeDate.setFullYear(c)}else"home"===a?b=0:"end"===a&&(b=11);e.activeDate.setMonth(b)},e.refreshView()}}}]).directive("yearpicker",["dateFilter",function(){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/year.html",require:"^datepicker",link:function(a,b,c,d){function e(a){return parseInt((a-1)/f,10)*f+1}var f=d.yearRange;d.step={years:f},d.element=b,d._refreshView=function(){for(var b=new Array(f),c=0,g=e(d.activeDate.getFullYear());f>c;c++)b[c]=angular.extend(d.createDateObject(new Date(g+c,0,1),d.formatYear),{uid:a.uniqueId+"-"+c});a.title=[b[0].label,b[f-1].label].join(" - "),a.rows=d.split(b,5)},d.compare=function(a,b){return a.getFullYear()-b.getFullYear()},d.handleKeyDown=function(a){var b=d.activeDate.getFullYear();"left"===a?b-=1:"up"===a?b-=5:"right"===a?b+=1:"down"===a?b+=5:"pageup"===a||"pagedown"===a?b+=("pageup"===a?-1:1)*d.step.years:"home"===a?b=e(d.activeDate.getFullYear()):"end"===a&&(b=e(d.activeDate.getFullYear())+f-1),d.activeDate.setFullYear(b)},d.refreshView()}}}]).constant("datepickerPopupConfig",{datepickerPopup:"yyyy-MM-dd",html5Types:{date:"yyyy-MM-dd","datetime-local":"yyyy-MM-ddTHH:mm:ss.sss",month:"yyyy-MM"},currentText:"Today",clearText:"Clear",closeText:"Done",closeOnDateSelection:!0,appendToBody:!1,showButtonBar:!0}).directive("datepickerPopup",["$compile","$parse","$document","$position","dateFilter","dateParser","datepickerPopupConfig",function(a,b,c,d,e,f,g){return{restrict:"EA",require:"ngModel",scope:{isOpen:"=?",currentText:"@",clearText:"@",closeText:"@",dateDisabled:"&",customClass:"&"},link:function(h,i,j,k){function l(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function m(a){if(angular.isNumber(a)&&(a=new Date(a)),a){if(angular.isDate(a)&&!isNaN(a))return a;if(angular.isString(a)){var b=f.parse(a,o,h.date)||new Date(a);return isNaN(b)?void 0:b}return void 0}return null}function n(a,b){var c=a||b;if(angular.isNumber(c)&&(c=new Date(c)),c){if(angular.isDate(c)&&!isNaN(c))return!0;if(angular.isString(c)){var d=f.parse(c,o)||new Date(c);return!isNaN(d)}return!1}return!0}var o,p=angular.isDefined(j.closeOnDateSelection)?h.$parent.$eval(j.closeOnDateSelection):g.closeOnDateSelection,q=angular.isDefined(j.datepickerAppendToBody)?h.$parent.$eval(j.datepickerAppendToBody):g.appendToBody;h.showButtonBar=angular.isDefined(j.showButtonBar)?h.$parent.$eval(j.showButtonBar):g.showButtonBar,h.getText=function(a){return h[a+"Text"]||g[a+"Text"]};var r=!1;if(g.html5Types[j.type]?(o=g.html5Types[j.type],r=!0):(o=j.datepickerPopup||g.datepickerPopup,j.$observe("datepickerPopup",function(a){var b=a||g.datepickerPopup;if(b!==o&&(o=b,k.$modelValue=null,!o))throw new Error("datepickerPopup must have a date format specified.")})),!o)throw new Error("datepickerPopup must have a date format specified.");if(r&&j.datepickerPopup)throw new Error("HTML5 date input types do not support custom formats.");var s=angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");s.attr({"ng-model":"date","ng-change":"dateSelection()"});var t=angular.element(s.children()[0]);if(r&&"month"==j.type&&(t.attr("datepicker-mode",'"month"'),t.attr("min-mode","month")),j.datepickerOptions){var u=h.$parent.$eval(j.datepickerOptions);u.initDate&&(h.initDate=u.initDate,t.attr("init-date","initDate"),delete u.initDate),angular.forEach(u,function(a,b){t.attr(l(b),a)})}h.watchData={},angular.forEach(["minDate","maxDate","datepickerMode","initDate","shortcutPropagation"],function(a){if(j[a]){var c=b(j[a]);if(h.$parent.$watch(c,function(b){h.watchData[a]=b}),t.attr(l(a),"watchData."+a),"datepickerMode"===a){var d=c.assign;h.$watch("watchData."+a,function(a,b){a!==b&&d(h.$parent,a)})}}}),j.dateDisabled&&t.attr("date-disabled","dateDisabled({ date: date, mode: mode })"),j.showWeeks&&t.attr("show-weeks",j.showWeeks),j.customClass&&t.attr("custom-class","customClass({ date: date, mode: mode })"),r?k.$formatters.push(function(a){return h.date=a,a}):(k.$$parserName="date",k.$validators.date=n,k.$parsers.unshift(m),k.$formatters.push(function(a){return h.date=a,k.$isEmpty(a)?a:e(a,o)})),h.dateSelection=function(a){angular.isDefined(a)&&(h.date=a);var b=h.date?e(h.date,o):"";i.val(b),k.$setViewValue(b),p&&(h.isOpen=!1,i[0].focus())},k.$viewChangeListeners.push(function(){h.date=f.parse(k.$viewValue,o,h.date)||new Date(k.$viewValue)});var v=function(a){h.isOpen&&a.target!==i[0]&&h.$apply(function(){h.isOpen=!1})},w=function(a){h.keydown(a)};i.bind("keydown",w),h.keydown=function(a){27===a.which?(a.preventDefault(),h.isOpen&&a.stopPropagation(),h.close()):40!==a.which||h.isOpen||(h.isOpen=!0)},h.$watch("isOpen",function(a){a?(h.$broadcast("datepicker.focus"),h.position=q?d.offset(i):d.position(i),h.position.top=h.position.top+i.prop("offsetHeight"),c.bind("click",v)):c.unbind("click",v)}),h.select=function(a){if("today"===a){var b=new Date;angular.isDate(h.date)?(a=new Date(h.date),a.setFullYear(b.getFullYear(),b.getMonth(),b.getDate())):a=new Date(b.setHours(0,0,0,0))}h.dateSelection(a)},h.close=function(){h.isOpen=!1,i[0].focus()};var x=a(s)(h);s.remove(),q?c.find("body").append(x):i.after(x),h.$on("$destroy",function(){x.remove(),i.unbind("keydown",w),c.unbind("click",v)})}}}]).directive("datepickerPopupWrap",function(){return{restrict:"EA",replace:!0,transclude:!0,templateUrl:"template/datepicker/popup.html",link:function(a,b){b.bind("click",function(a){a.preventDefault(),a.stopPropagation()})}}}),angular.module("ui.bootstrap.dropdown",["ui.bootstrap.position"]).constant("dropdownConfig",{openClass:"open"}).service("dropdownService",["$document","$rootScope",function(a,b){var c=null;this.open=function(b){c||(a.bind("click",d),a.bind("keydown",e)),c&&c!==b&&(c.isOpen=!1),c=b},this.close=function(b){c===b&&(c=null,a.unbind("click",d),a.unbind("keydown",e))};var d=function(a){if(c&&(!a||"disabled"!==c.getAutoClose())){var d=c.getToggleElement();if(!(a&&d&&d[0].contains(a.target))){var e=c.getElement();a&&"outsideClick"===c.getAutoClose()&&e&&e[0].contains(a.target)||(c.isOpen=!1,b.$$phase||c.$apply())}}},e=function(a){27===a.which&&(c.focusToggleElement(),d())}}]).controller("DropdownController",["$scope","$attrs","$parse","dropdownConfig","dropdownService","$animate","$position","$document",function(a,b,c,d,e,f,g,h){var i,j=this,k=a.$new(),l=d.openClass,m=angular.noop,n=b.onToggle?c(b.onToggle):angular.noop,o=!1;this.init=function(d){j.$element=d,b.isOpen&&(i=c(b.isOpen),m=i.assign,a.$watch(i,function(a){k.isOpen=!!a})),o=angular.isDefined(b.dropdownAppendToBody),o&&j.dropdownMenu&&(h.find("body").append(j.dropdownMenu),d.on("$destroy",function(){j.dropdownMenu.remove()}))},this.toggle=function(a){return k.isOpen=arguments.length?!!a:!k.isOpen},this.isOpen=function(){return k.isOpen},k.getToggleElement=function(){return j.toggleElement},k.getAutoClose=function(){return b.autoClose||"always"},k.getElement=function(){return j.$element},k.focusToggleElement=function(){j.toggleElement&&j.toggleElement[0].focus()},k.$watch("isOpen",function(b,c){if(o&&j.dropdownMenu){var d=g.positionElements(j.$element,j.dropdownMenu,"bottom-left",!0);j.dropdownMenu.css({top:d.top+"px",left:d.left+"px",display:b?"block":"none"})}f[b?"addClass":"removeClass"](j.$element,l),b?(k.focusToggleElement(),e.open(k)):e.close(k),m(a,b),angular.isDefined(b)&&b!==c&&n(a,{open:!!b})}),a.$on("$locationChangeSuccess",function(){k.isOpen=!1}),a.$on("$destroy",function(){k.$destroy()})}]).directive("dropdown",function(){return{controller:"DropdownController",link:function(a,b,c,d){d.init(b)}}}).directive("dropdownMenu",function(){return{restrict:"AC",require:"?^dropdown",link:function(a,b,c,d){d&&(d.dropdownMenu=b)}}}).directive("dropdownToggle",function(){return{require:"?^dropdown",link:function(a,b,c,d){if(d){d.toggleElement=b;var e=function(e){e.preventDefault(),b.hasClass("disabled")||c.disabled||a.$apply(function(){d.toggle()})};b.bind("click",e),b.attr({"aria-haspopup":!0,"aria-expanded":!1}),a.$watch(d.isOpen,function(a){b.attr("aria-expanded",!!a)}),a.$on("$destroy",function(){b.unbind("click",e)})}}}}),angular.module("ui.bootstrap.modal",[]).factory("$$stackedMap",function(){return{createNew:function(){var a=[];return{add:function(b,c){a.push({key:b,value:c})},get:function(b){for(var c=0;c<a.length;c++)if(b==a[c].key)return a[c]},keys:function(){for(var b=[],c=0;c<a.length;c++)b.push(a[c].key);return b},top:function(){return a[a.length-1]},remove:function(b){for(var c=-1,d=0;d<a.length;d++)if(b==a[d].key){c=d;break}return a.splice(c,1)[0]},removeTop:function(){return a.splice(a.length-1,1)[0]},length:function(){return a.length}}}}}).directive("modalBackdrop",["$timeout",function(a){function b(b){b.animate=!1,a(function(){b.animate=!0})}return{restrict:"EA",replace:!0,templateUrl:"template/modal/backdrop.html",compile:function(a,c){return a.addClass(c.backdropClass),b}}}]).directive("modalWindow",["$modalStack","$q",function(a,b){return{restrict:"EA",scope:{index:"@",animate:"="},replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/modal/window.html"},link:function(c,d,e){d.addClass(e.windowClass||""),c.size=e.size,c.close=function(b){var c=a.getTop();c&&c.value.backdrop&&"static"!=c.value.backdrop&&b.target===b.currentTarget&&(b.preventDefault(),b.stopPropagation(),a.dismiss(c.key,"backdrop click"))},c.$isRendered=!0;var f=b.defer();e.$observe("modalRender",function(a){"true"==a&&f.resolve()}),f.promise.then(function(){c.animate=!0;var b=d[0].querySelectorAll("[autofocus]");b.length?b[0].focus():d[0].focus();var e=a.getTop();e&&a.modalRendered(e.key)})}}}]).directive("modalAnimationClass",[function(){return{compile:function(a,b){b.modalAnimation&&a.addClass(b.modalAnimationClass)}}}]).directive("modalTransclude",function(){return{link:function(a,b,c,d,e){e(a.$parent,function(a){b.empty(),b.append(a)})}}}).factory("$modalStack",["$animate","$timeout","$document","$compile","$rootScope","$$stackedMap",function(a,b,c,d,e,f){function g(){for(var a=-1,b=o.keys(),c=0;c<b.length;c++)o.get(b[c]).value.backdrop&&(a=c);return a}function h(a){var b=c.find("body").eq(0),d=o.get(a).value;o.remove(a),j(d.modalDomEl,d.modalScope,function(){b.toggleClass(n,o.length()>0),i()})}function i(){if(l&&-1==g()){var a=m;j(l,m,function(){a=null}),l=void 0,m=void 0}}function j(c,d,f){function g(){g.done||(g.done=!0,c.remove(),d.$destroy(),f&&f())}d.animate=!1,c.attr("modal-animation")&&a.enabled()?c.one("$animate:close",function(){e.$evalAsync(g)}):b(g)}function k(a,b,c){return!a.value.modalScope.$broadcast("modal.closing",b,c).defaultPrevented}var l,m,n="modal-open",o=f.createNew(),p={};return e.$watch(g,function(a){m&&(m.index=a)}),c.bind("keydown",function(a){var b;27===a.which&&(b=o.top(),b&&b.value.keyboard&&(a.preventDefault(),e.$apply(function(){p.dismiss(b.key,"escape key press")})))}),p.open=function(a,b){var f=c[0].activeElement;o.add(a,{deferred:b.deferred,renderDeferred:b.renderDeferred,modalScope:b.scope,backdrop:b.backdrop,keyboard:b.keyboard});var h=c.find("body").eq(0),i=g();if(i>=0&&!l){m=e.$new(!0),m.index=i;var j=angular.element('<div modal-backdrop="modal-backdrop"></div>');j.attr("backdrop-class",b.backdropClass),b.animation&&j.attr("modal-animation","true"),l=d(j)(m),h.append(l)}var k=angular.element('<div modal-window="modal-window"></div>');k.attr({"template-url":b.windowTemplateUrl,"window-class":b.windowClass,size:b.size,index:o.length()-1,animate:"animate"}).html(b.content),b.animation&&k.attr("modal-animation","true");var p=d(k)(b.scope);o.top().value.modalDomEl=p,o.top().value.modalOpener=f,h.append(p),h.addClass(n)},p.close=function(a,b){var c=o.get(a);return c&&k(c,b,!0)?(c.value.deferred.resolve(b),h(a),c.value.modalOpener.focus(),!0):!c},p.dismiss=function(a,b){var c=o.get(a);return c&&k(c,b,!1)?(c.value.deferred.reject(b),h(a),c.value.modalOpener.focus(),!0):!c},p.dismissAll=function(a){for(var b=this.getTop();b&&this.dismiss(b.key,a);)b=this.getTop()},p.getTop=function(){return o.top()},p.modalRendered=function(a){var b=o.get(a);b&&b.value.renderDeferred.resolve()},p}]).provider("$modal",function(){var a={options:{animation:!0,backdrop:!0,keyboard:!0},$get:["$injector","$rootScope","$q","$templateRequest","$controller","$modalStack",function(b,c,d,e,f,g){function h(a){return a.template?d.when(a.template):e(angular.isFunction(a.templateUrl)?a.templateUrl():a.templateUrl)}function i(a){var c=[];return angular.forEach(a,function(a){(angular.isFunction(a)||angular.isArray(a))&&c.push(d.when(b.invoke(a)))}),c}var j={};return j.open=function(b){var e=d.defer(),j=d.defer(),k=d.defer(),l={result:e.promise,opened:j.promise,rendered:k.promise,close:function(a){return g.close(l,a)},dismiss:function(a){return g.dismiss(l,a)}};if(b=angular.extend({},a.options,b),b.resolve=b.resolve||{},!b.template&&!b.templateUrl)throw new Error("One of template or templateUrl options is required.");var m=d.all([h(b)].concat(i(b.resolve)));return m.then(function(a){var d=(b.scope||c).$new();d.$close=l.close,d.$dismiss=l.dismiss;var h,i={},j=1;b.controller&&(i.$scope=d,i.$modalInstance=l,angular.forEach(b.resolve,function(b,c){i[c]=a[j++]}),h=f(b.controller,i),b.controllerAs&&(d[b.controllerAs]=h)),g.open(l,{scope:d,deferred:e,renderDeferred:k,content:a[0],animation:b.animation,backdrop:b.backdrop,keyboard:b.keyboard,backdropClass:b.backdropClass,windowClass:b.windowClass,windowTemplateUrl:b.windowTemplateUrl,size:b.size})},function(a){e.reject(a)}),m.then(function(){j.resolve(!0)},function(a){j.reject(a)}),l},j}]};return a}),angular.module("ui.bootstrap.pagination",[]).controller("PaginationController",["$scope","$attrs","$parse",function(a,b,c){var d=this,e={$setViewValue:angular.noop},f=b.numPages?c(b.numPages).assign:angular.noop;
this.init=function(g,h){e=g,this.config=h,e.$render=function(){d.render()},b.itemsPerPage?a.$parent.$watch(c(b.itemsPerPage),function(b){d.itemsPerPage=parseInt(b,10),a.totalPages=d.calculateTotalPages()}):this.itemsPerPage=h.itemsPerPage,a.$watch("totalItems",function(){a.totalPages=d.calculateTotalPages()}),a.$watch("totalPages",function(b){f(a.$parent,b),a.page>b?a.selectPage(b):e.$render()})},this.calculateTotalPages=function(){var b=this.itemsPerPage<1?1:Math.ceil(a.totalItems/this.itemsPerPage);return Math.max(b||0,1)},this.render=function(){a.page=parseInt(e.$viewValue,10)||1},a.selectPage=function(b,c){a.page!==b&&b>0&&b<=a.totalPages&&(c&&c.target&&c.target.blur(),e.$setViewValue(b),e.$render())},a.getText=function(b){return a[b+"Text"]||d.config[b+"Text"]},a.noPrevious=function(){return 1===a.page},a.noNext=function(){return a.page===a.totalPages}}]).constant("paginationConfig",{itemsPerPage:10,boundaryLinks:!1,directionLinks:!0,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last",rotate:!0}).directive("pagination",["$parse","paginationConfig",function(a,b){return{restrict:"EA",scope:{totalItems:"=",firstText:"@",previousText:"@",nextText:"@",lastText:"@"},require:["pagination","?ngModel"],controller:"PaginationController",templateUrl:"template/pagination/pagination.html",replace:!0,link:function(c,d,e,f){function g(a,b,c){return{number:a,text:b,active:c}}function h(a,b){var c=[],d=1,e=b,f=angular.isDefined(k)&&b>k;f&&(l?(d=Math.max(a-Math.floor(k/2),1),e=d+k-1,e>b&&(e=b,d=e-k+1)):(d=(Math.ceil(a/k)-1)*k+1,e=Math.min(d+k-1,b)));for(var h=d;e>=h;h++){var i=g(h,h,h===a);c.push(i)}if(f&&!l){if(d>1){var j=g(d-1,"...",!1);c.unshift(j)}if(b>e){var m=g(e+1,"...",!1);c.push(m)}}return c}var i=f[0],j=f[1];if(j){var k=angular.isDefined(e.maxSize)?c.$parent.$eval(e.maxSize):b.maxSize,l=angular.isDefined(e.rotate)?c.$parent.$eval(e.rotate):b.rotate;c.boundaryLinks=angular.isDefined(e.boundaryLinks)?c.$parent.$eval(e.boundaryLinks):b.boundaryLinks,c.directionLinks=angular.isDefined(e.directionLinks)?c.$parent.$eval(e.directionLinks):b.directionLinks,i.init(j,b),e.maxSize&&c.$parent.$watch(a(e.maxSize),function(a){k=parseInt(a,10),i.render()});var m=i.render;i.render=function(){m(),c.page>0&&c.page<=c.totalPages&&(c.pages=h(c.page,c.totalPages))}}}}}]).constant("pagerConfig",{itemsPerPage:10,previousText:"« Previous",nextText:"Next »",align:!0}).directive("pager",["pagerConfig",function(a){return{restrict:"EA",scope:{totalItems:"=",previousText:"@",nextText:"@"},require:["pager","?ngModel"],controller:"PaginationController",templateUrl:"template/pagination/pager.html",replace:!0,link:function(b,c,d,e){var f=e[0],g=e[1];g&&(b.align=angular.isDefined(d.align)?b.$parent.$eval(d.align):a.align,f.init(g,a))}}}]),angular.module("ui.bootstrap.tooltip",["ui.bootstrap.position","ui.bootstrap.bindHtml"]).provider("$tooltip",function(){function a(a){var b=/[A-Z]/g,c="-";return a.replace(b,function(a,b){return(b?c:"")+a.toLowerCase()})}var b={placement:"top",animation:!0,popupDelay:0,useContentExp:!1},c={mouseenter:"mouseleave",click:"click",focus:"blur"},d={};this.options=function(a){angular.extend(d,a)},this.setTriggers=function(a){angular.extend(c,a)},this.$get=["$window","$compile","$timeout","$document","$position","$interpolate",function(e,f,g,h,i,j){return function(e,k,l,m){function n(a){var b=a||m.trigger||l,d=c[b]||b;return{show:b,hide:d}}m=angular.extend({},b,d,m);var o=a(e),p=j.startSymbol(),q=j.endSymbol(),r="<div "+o+'-popup title="'+p+"title"+q+'" '+(m.useContentExp?'content-exp="contentExp()" ':'content="'+p+"content"+q+'" ')+'placement="'+p+"placement"+q+'" popup-class="'+p+"popupClass"+q+'" animation="animation" is-open="isOpen"origin-scope="origScope" ></div>';return{restrict:"EA",compile:function(){var a=f(r);return function(b,c,d){function f(){E.isOpen?l():j()}function j(){(!D||b.$eval(d[k+"Enable"]))&&(s(),E.popupDelay?A||(A=g(o,E.popupDelay,!1),A.then(function(a){a()})):o()())}function l(){b.$apply(function(){p()})}function o(){return A=null,z&&(g.cancel(z),z=null),(m.useContentExp?E.contentExp():E.content)?(q(),x.css({top:0,left:0,display:"block"}),E.$digest(),F(),E.isOpen=!0,E.$apply(),F):angular.noop}function p(){E.isOpen=!1,g.cancel(A),A=null,E.animation?z||(z=g(r,500)):r()}function q(){x&&r(),y=E.$new(),x=a(y,function(a){B?h.find("body").append(a):c.after(a)}),y.$watch(function(){g(F,0,!1)}),m.useContentExp&&y.$watch("contentExp()",function(a){!a&&E.isOpen&&p()})}function r(){z=null,x&&(x.remove(),x=null),y&&(y.$destroy(),y=null)}function s(){t(),u(),v()}function t(){E.popupClass=d[k+"Class"]}function u(){var a=d[k+"Placement"];E.placement=angular.isDefined(a)?a:m.placement}function v(){var a=d[k+"PopupDelay"],b=parseInt(a,10);E.popupDelay=isNaN(b)?m.popupDelay:b}function w(){var a=d[k+"Trigger"];G(),C=n(a),C.show===C.hide?c.bind(C.show,f):(c.bind(C.show,j),c.bind(C.hide,l))}var x,y,z,A,B=angular.isDefined(m.appendToBody)?m.appendToBody:!1,C=n(void 0),D=angular.isDefined(d[k+"Enable"]),E=b.$new(!0),F=function(){if(x){var a=i.positionElements(c,x,E.placement,B);a.top+="px",a.left+="px",x.css(a)}};E.origScope=b,E.isOpen=!1,E.contentExp=function(){return b.$eval(d[e])},m.useContentExp||d.$observe(e,function(a){E.content=a,!a&&E.isOpen&&p()}),d.$observe("disabled",function(a){a&&E.isOpen&&p()}),d.$observe(k+"Title",function(a){E.title=a});var G=function(){c.unbind(C.show,j),c.unbind(C.hide,l)};w();var H=b.$eval(d[k+"Animation"]);E.animation=angular.isDefined(H)?!!H:m.animation;var I=b.$eval(d[k+"AppendToBody"]);B=angular.isDefined(I)?I:B,B&&b.$on("$locationChangeSuccess",function(){E.isOpen&&p()}),b.$on("$destroy",function(){g.cancel(z),g.cancel(A),G(),r(),E=null})}}}}}]}).directive("tooltipTemplateTransclude",["$animate","$sce","$compile","$templateRequest",function(a,b,c,d){return{link:function(e,f,g){var h,i,j,k=e.$eval(g.tooltipTemplateTranscludeScope),l=0,m=function(){i&&(i.remove(),i=null),h&&(h.$destroy(),h=null),j&&(a.leave(j).then(function(){i=null}),i=j,j=null)};e.$watch(b.parseAsResourceUrl(g.tooltipTemplateTransclude),function(b){var g=++l;b?(d(b,!0).then(function(d){if(g===l){var e=k.$new(),i=d,n=c(i)(e,function(b){m(),a.enter(b,f)});h=e,j=n,h.$emit("$includeContentLoaded",b)}},function(){g===l&&(m(),e.$emit("$includeContentError",b))}),e.$emit("$includeContentRequested",b)):m()}),e.$on("$destroy",m)}}}]).directive("tooltipClasses",function(){return{restrict:"A",link:function(a,b,c){a.placement&&b.addClass(a.placement),a.popupClass&&b.addClass(a.popupClass),a.animation()&&b.addClass(c.tooltipAnimationClass)}}}).directive("tooltipPopup",function(){return{restrict:"EA",replace:!0,scope:{content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-popup.html"}}).directive("tooltip",["$tooltip",function(a){return a("tooltip","tooltip","mouseenter")}]).directive("tooltipTemplatePopup",function(){return{restrict:"EA",replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"template/tooltip/tooltip-template-popup.html"}}).directive("tooltipTemplate",["$tooltip",function(a){return a("tooltipTemplate","tooltip","mouseenter",{useContentExp:!0})}]).directive("tooltipHtmlPopup",function(){return{restrict:"EA",replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-popup.html"}}).directive("tooltipHtml",["$tooltip",function(a){return a("tooltipHtml","tooltip","mouseenter",{useContentExp:!0})}]).directive("tooltipHtmlUnsafePopup",function(){return{restrict:"EA",replace:!0,scope:{content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-unsafe-popup.html"}}).value("tooltipHtmlUnsafeSuppressDeprecated",!1).directive("tooltipHtmlUnsafe",["$tooltip","tooltipHtmlUnsafeSuppressDeprecated","$log",function(a,b,c){return b||c.warn("tooltip-html-unsafe is now deprecated. Use tooltip-html or tooltip-template instead."),a("tooltipHtmlUnsafe","tooltip","mouseenter")}]),angular.module("ui.bootstrap.popover",["ui.bootstrap.tooltip"]).directive("popoverTemplatePopup",function(){return{restrict:"EA",replace:!0,scope:{title:"@",contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"template/popover/popover-template.html"}}).directive("popoverTemplate",["$tooltip",function(a){return a("popoverTemplate","popover","click",{useContentExp:!0})}]).directive("popoverPopup",function(){return{restrict:"EA",replace:!0,scope:{title:"@",content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover.html"}}).directive("popover",["$tooltip",function(a){return a("popover","popover","click")}]),angular.module("ui.bootstrap.progressbar",[]).constant("progressConfig",{animate:!0,max:100}).controller("ProgressController",["$scope","$attrs","progressConfig",function(a,b,c){var d=this,e=angular.isDefined(b.animate)?a.$parent.$eval(b.animate):c.animate;this.bars=[],a.max=angular.isDefined(a.max)?a.max:c.max,this.addBar=function(b,c){e||c.css({transition:"none"}),this.bars.push(b),b.$watch("value",function(c){b.percent=+(100*c/a.max).toFixed(2)}),b.$on("$destroy",function(){c=null,d.removeBar(b)})},this.removeBar=function(a){this.bars.splice(this.bars.indexOf(a),1)}}]).directive("progress",function(){return{restrict:"EA",replace:!0,transclude:!0,controller:"ProgressController",require:"progress",scope:{},templateUrl:"template/progressbar/progress.html"}}).directive("bar",function(){return{restrict:"EA",replace:!0,transclude:!0,require:"^progress",scope:{value:"=",max:"=?",type:"@"},templateUrl:"template/progressbar/bar.html",link:function(a,b,c,d){d.addBar(a,b)}}}).directive("progressbar",function(){return{restrict:"EA",replace:!0,transclude:!0,controller:"ProgressController",scope:{value:"=",max:"=?",type:"@"},templateUrl:"template/progressbar/progressbar.html",link:function(a,b,c,d){d.addBar(a,angular.element(b.children()[0]))}}}),angular.module("ui.bootstrap.rating",[]).constant("ratingConfig",{max:5,stateOn:null,stateOff:null}).controller("RatingController",["$scope","$attrs","ratingConfig",function(a,b,c){var d={$setViewValue:angular.noop};this.init=function(e){d=e,d.$render=this.render,d.$formatters.push(function(a){return angular.isNumber(a)&&a<<0!==a&&(a=Math.round(a)),a}),this.stateOn=angular.isDefined(b.stateOn)?a.$parent.$eval(b.stateOn):c.stateOn,this.stateOff=angular.isDefined(b.stateOff)?a.$parent.$eval(b.stateOff):c.stateOff;var f=angular.isDefined(b.ratingStates)?a.$parent.$eval(b.ratingStates):new Array(angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max);a.range=this.buildTemplateObjects(f)},this.buildTemplateObjects=function(a){for(var b=0,c=a.length;c>b;b++)a[b]=angular.extend({index:b},{stateOn:this.stateOn,stateOff:this.stateOff},a[b]);return a},a.rate=function(b){!a.readonly&&b>=0&&b<=a.range.length&&(d.$setViewValue(b),d.$render())},a.enter=function(b){a.readonly||(a.value=b),a.onHover({value:b})},a.reset=function(){a.value=d.$viewValue,a.onLeave()},a.onKeydown=function(b){/(37|38|39|40)/.test(b.which)&&(b.preventDefault(),b.stopPropagation(),a.rate(a.value+(38===b.which||39===b.which?1:-1)))},this.render=function(){a.value=d.$viewValue}}]).directive("rating",function(){return{restrict:"EA",require:["rating","ngModel"],scope:{readonly:"=?",onHover:"&",onLeave:"&"},controller:"RatingController",templateUrl:"template/rating/rating.html",replace:!0,link:function(a,b,c,d){var e=d[0],f=d[1];e.init(f)}}}),angular.module("ui.bootstrap.tabs",[]).controller("TabsetController",["$scope",function(a){var b=this,c=b.tabs=a.tabs=[];b.select=function(a){angular.forEach(c,function(b){b.active&&b!==a&&(b.active=!1,b.onDeselect())}),a.active=!0,a.onSelect()},b.addTab=function(a){c.push(a),1===c.length&&a.active!==!1?a.active=!0:a.active?b.select(a):a.active=!1},b.removeTab=function(a){var e=c.indexOf(a);if(a.active&&c.length>1&&!d){var f=e==c.length-1?e-1:e+1;b.select(c[f])}c.splice(e,1)};var d;a.$on("$destroy",function(){d=!0})}]).directive("tabset",function(){return{restrict:"EA",transclude:!0,replace:!0,scope:{type:"@"},controller:"TabsetController",templateUrl:"template/tabs/tabset.html",link:function(a,b,c){a.vertical=angular.isDefined(c.vertical)?a.$parent.$eval(c.vertical):!1,a.justified=angular.isDefined(c.justified)?a.$parent.$eval(c.justified):!1}}}).directive("tab",["$parse","$log",function(a,b){return{require:"^tabset",restrict:"EA",replace:!0,templateUrl:"template/tabs/tab.html",transclude:!0,scope:{active:"=?",heading:"@",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},compile:function(c,d,e){return function(c,d,f,g){c.$watch("active",function(a){a&&g.select(c)}),c.disabled=!1,f.disable&&c.$parent.$watch(a(f.disable),function(a){c.disabled=!!a}),f.disabled&&(b.warn('Use of "disabled" attribute has been deprecated, please use "disable"'),c.$parent.$watch(a(f.disabled),function(a){c.disabled=!!a})),c.select=function(){c.disabled||(c.active=!0)},g.addTab(c),c.$on("$destroy",function(){g.removeTab(c)}),c.$transcludeFn=e}}}}]).directive("tabHeadingTransclude",[function(){return{restrict:"A",require:"^tab",link:function(a,b){a.$watch("headingElement",function(a){a&&(b.html(""),b.append(a))})}}}]).directive("tabContentTransclude",function(){function a(a){return a.tagName&&(a.hasAttribute("tab-heading")||a.hasAttribute("data-tab-heading")||"tab-heading"===a.tagName.toLowerCase()||"data-tab-heading"===a.tagName.toLowerCase())}return{restrict:"A",require:"^tabset",link:function(b,c,d){var e=b.$eval(d.tabContentTransclude);e.$transcludeFn(e.$parent,function(b){angular.forEach(b,function(b){a(b)?e.headingElement=b:c.append(b)})})}}}),angular.module("ui.bootstrap.timepicker",[]).constant("timepickerConfig",{hourStep:1,minuteStep:1,showMeridian:!0,meridians:null,readonlyInput:!1,mousewheel:!0,arrowkeys:!0}).controller("TimepickerController",["$scope","$attrs","$parse","$log","$locale","timepickerConfig",function(a,b,c,d,e,f){function g(){var b=parseInt(a.hours,10),c=a.showMeridian?b>0&&13>b:b>=0&&24>b;return c?(a.showMeridian&&(12===b&&(b=0),a.meridian===p[1]&&(b+=12)),b):void 0}function h(){var b=parseInt(a.minutes,10);return b>=0&&60>b?b:void 0}function i(a){return angular.isDefined(a)&&a.toString().length<2?"0"+a:a.toString()}function j(a){k(),o.$setViewValue(new Date(n)),l(a)}function k(){o.$setValidity("time",!0),a.invalidHours=!1,a.invalidMinutes=!1}function l(b){var c=n.getHours(),d=n.getMinutes();a.showMeridian&&(c=0===c||12===c?12:c%12),a.hours="h"===b?c:i(c),"m"!==b&&(a.minutes=i(d)),a.meridian=n.getHours()<12?p[0]:p[1]}function m(a){var b=new Date(n.getTime()+6e4*a);n.setHours(b.getHours(),b.getMinutes()),j()}var n=new Date,o={$setViewValue:angular.noop},p=angular.isDefined(b.meridians)?a.$parent.$eval(b.meridians):f.meridians||e.DATETIME_FORMATS.AMPMS;this.init=function(c,d){o=c,o.$render=this.render,o.$formatters.unshift(function(a){return a?new Date(a):null});var e=d.eq(0),g=d.eq(1),h=angular.isDefined(b.mousewheel)?a.$parent.$eval(b.mousewheel):f.mousewheel;h&&this.setupMousewheelEvents(e,g);var i=angular.isDefined(b.arrowkeys)?a.$parent.$eval(b.arrowkeys):f.arrowkeys;i&&this.setupArrowkeyEvents(e,g),a.readonlyInput=angular.isDefined(b.readonlyInput)?a.$parent.$eval(b.readonlyInput):f.readonlyInput,this.setupInputEvents(e,g)};var q=f.hourStep;b.hourStep&&a.$parent.$watch(c(b.hourStep),function(a){q=parseInt(a,10)});var r=f.minuteStep;b.minuteStep&&a.$parent.$watch(c(b.minuteStep),function(a){r=parseInt(a,10)}),a.showMeridian=f.showMeridian,b.showMeridian&&a.$parent.$watch(c(b.showMeridian),function(b){if(a.showMeridian=!!b,o.$error.time){var c=g(),d=h();angular.isDefined(c)&&angular.isDefined(d)&&(n.setHours(c),j())}else l()}),this.setupMousewheelEvents=function(b,c){var d=function(a){a.originalEvent&&(a=a.originalEvent);var b=a.wheelDelta?a.wheelDelta:-a.deltaY;return a.detail||b>0};b.bind("mousewheel wheel",function(b){a.$apply(d(b)?a.incrementHours():a.decrementHours()),b.preventDefault()}),c.bind("mousewheel wheel",function(b){a.$apply(d(b)?a.incrementMinutes():a.decrementMinutes()),b.preventDefault()})},this.setupArrowkeyEvents=function(b,c){b.bind("keydown",function(b){38===b.which?(b.preventDefault(),a.incrementHours(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementHours(),a.$apply())}),c.bind("keydown",function(b){38===b.which?(b.preventDefault(),a.incrementMinutes(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementMinutes(),a.$apply())})},this.setupInputEvents=function(b,c){if(a.readonlyInput)return a.updateHours=angular.noop,void(a.updateMinutes=angular.noop);var d=function(b,c){o.$setViewValue(null),o.$setValidity("time",!1),angular.isDefined(b)&&(a.invalidHours=b),angular.isDefined(c)&&(a.invalidMinutes=c)};a.updateHours=function(){var a=g();angular.isDefined(a)?(n.setHours(a),j("h")):d(!0)},b.bind("blur",function(){!a.invalidHours&&a.hours<10&&a.$apply(function(){a.hours=i(a.hours)})}),a.updateMinutes=function(){var a=h();angular.isDefined(a)?(n.setMinutes(a),j("m")):d(void 0,!0)},c.bind("blur",function(){!a.invalidMinutes&&a.minutes<10&&a.$apply(function(){a.minutes=i(a.minutes)})})},this.render=function(){var a=o.$viewValue;isNaN(a)?(o.$setValidity("time",!1),d.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')):(a&&(n=a),k(),l())},a.incrementHours=function(){m(60*q)},a.decrementHours=function(){m(60*-q)},a.incrementMinutes=function(){m(r)},a.decrementMinutes=function(){m(-r)},a.toggleMeridian=function(){m(720*(n.getHours()<12?1:-1))}}]).directive("timepicker",function(){return{restrict:"EA",require:["timepicker","?^ngModel"],controller:"TimepickerController",replace:!0,scope:{},templateUrl:"template/timepicker/timepicker.html",link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f,b.find("input"))}}}),angular.module("ui.bootstrap.transition",[]).value("$transitionSuppressDeprecated",!1).factory("$transition",["$q","$timeout","$rootScope","$log","$transitionSuppressDeprecated",function(a,b,c,d,e){function f(a){for(var b in a)if(void 0!==h.style[b])return a[b]}e||d.warn("$transition is now deprecated. Use $animate from ngAnimate instead.");var g=function(d,e,f){f=f||{};var h=a.defer(),i=g[f.animation?"animationEndEventName":"transitionEndEventName"],j=function(){c.$apply(function(){d.unbind(i,j),h.resolve(d)})};return i&&d.bind(i,j),b(function(){angular.isString(e)?d.addClass(e):angular.isFunction(e)?e(d):angular.isObject(e)&&d.css(e),i||h.resolve(d)}),h.promise.cancel=function(){i&&d.unbind(i,j),h.reject("Transition cancelled")},h.promise},h=document.createElement("trans"),i={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"},j={WebkitTransition:"webkitAnimationEnd",MozTransition:"animationend",OTransition:"oAnimationEnd",transition:"animationend"};return g.transitionEndEventName=f(i),g.animationEndEventName=f(j),g}]),angular.module("ui.bootstrap.typeahead",["ui.bootstrap.position","ui.bootstrap.bindHtml"]).factory("typeaheadParser",["$parse",function(a){var b=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;return{parse:function(c){var d=c.match(b);if(!d)throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "'+c+'".');return{itemName:d[3],source:a(d[4]),viewMapper:a(d[2]||d[1]),modelMapper:a(d[1])}}}}]).directive("typeahead",["$compile","$parse","$q","$timeout","$document","$position","typeaheadParser",function(a,b,c,d,e,f,g){var h=[9,13,27,38,40];return{require:"ngModel",link:function(i,j,k,l){var m,n=i.$eval(k.typeaheadMinLength)||1,o=i.$eval(k.typeaheadWaitMs)||0,p=i.$eval(k.typeaheadEditable)!==!1,q=b(k.typeaheadLoading).assign||angular.noop,r=b(k.typeaheadOnSelect),s=k.typeaheadInputFormatter?b(k.typeaheadInputFormatter):void 0,t=k.typeaheadAppendToBody?i.$eval(k.typeaheadAppendToBody):!1,u=i.$eval(k.typeaheadFocusFirst)!==!1,v=b(k.ngModel).assign,w=g.parse(k.typeahead),x=i.$new();i.$on("$destroy",function(){x.$destroy()});var y="typeahead-"+x.$id+"-"+Math.floor(1e4*Math.random());j.attr({"aria-autocomplete":"list","aria-expanded":!1,"aria-owns":y});var z=angular.element("<div typeahead-popup></div>");z.attr({id:y,matches:"matches",active:"activeIdx",select:"select(activeIdx)",query:"query",position:"position"}),angular.isDefined(k.typeaheadTemplateUrl)&&z.attr("template-url",k.typeaheadTemplateUrl);var A=function(){x.matches=[],x.activeIdx=-1,j.attr("aria-expanded",!1)},B=function(a){return y+"-option-"+a};x.$watch("activeIdx",function(a){0>a?j.removeAttr("aria-activedescendant"):j.attr("aria-activedescendant",B(a))});var C=function(a){var b={$viewValue:a};q(i,!0),c.when(w.source(i,b)).then(function(c){var d=a===l.$viewValue;if(d&&m)if(c&&c.length>0){x.activeIdx=u?0:-1,x.matches.length=0;for(var e=0;e<c.length;e++)b[w.itemName]=c[e],x.matches.push({id:B(e),label:w.viewMapper(x,b),model:c[e]});x.query=a,x.position=t?f.offset(j):f.position(j),x.position.top=x.position.top+j.prop("offsetHeight"),j.attr("aria-expanded",!0)}else A();d&&q(i,!1)},function(){A(),q(i,!1)})};A(),x.query=void 0;var D,E=function(a){D=d(function(){C(a)},o)},F=function(){D&&d.cancel(D)};l.$parsers.unshift(function(a){return m=!0,a&&a.length>=n?o>0?(F(),E(a)):C(a):(q(i,!1),F(),A()),p?a:a?void l.$setValidity("editable",!1):(l.$setValidity("editable",!0),a)}),l.$formatters.push(function(a){var b,c,d={};return p||l.$setValidity("editable",!0),s?(d.$model=a,s(i,d)):(d[w.itemName]=a,b=w.viewMapper(i,d),d[w.itemName]=void 0,c=w.viewMapper(i,d),b!==c?b:a)}),x.select=function(a){var b,c,e={};e[w.itemName]=c=x.matches[a].model,b=w.modelMapper(i,e),v(i,b),l.$setValidity("editable",!0),l.$setValidity("parse",!0),r(i,{$item:c,$model:b,$label:w.viewMapper(i,e)}),A(),d(function(){j[0].focus()},0,!1)},j.bind("keydown",function(a){0!==x.matches.length&&-1!==h.indexOf(a.which)&&(-1!=x.activeIdx||13!==a.which&&9!==a.which)&&(a.preventDefault(),40===a.which?(x.activeIdx=(x.activeIdx+1)%x.matches.length,x.$digest()):38===a.which?(x.activeIdx=(x.activeIdx>0?x.activeIdx:x.matches.length)-1,x.$digest()):13===a.which||9===a.which?x.$apply(function(){x.select(x.activeIdx)}):27===a.which&&(a.stopPropagation(),A(),x.$digest()))}),j.bind("blur",function(){m=!1});var G=function(a){j[0]!==a.target&&(A(),x.$digest())};e.bind("click",G),i.$on("$destroy",function(){e.unbind("click",G),t&&H.remove(),z.remove()});var H=a(z)(x);t?e.find("body").append(H):j.after(H)}}}]).directive("typeaheadPopup",function(){return{restrict:"EA",scope:{matches:"=",query:"=",active:"=",position:"=",select:"&"},replace:!0,templateUrl:"template/typeahead/typeahead-popup.html",link:function(a,b,c){a.templateUrl=c.templateUrl,a.isOpen=function(){return a.matches.length>0},a.isActive=function(b){return a.active==b},a.selectActive=function(b){a.active=b},a.selectMatch=function(b){a.select({activeIdx:b})}}}}).directive("typeaheadMatch",["$templateRequest","$compile","$parse",function(a,b,c){return{restrict:"EA",scope:{index:"=",match:"=",query:"="},link:function(d,e,f){var g=c(f.templateUrl)(d.$parent)||"template/typeahead/typeahead-match.html";a(g).then(function(a){b(a.trim())(d,function(a){e.replaceWith(a)})})}}}]).filter("typeaheadHighlight",function(){function a(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}return function(b,c){return c?(""+b).replace(new RegExp(a(c),"gi"),"<strong>$&</strong>"):b}}),!angular.$$csp()&&angular.element(document).find("head").prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>');;
/* ng-infinite-scroll - v1.2.0 - 2015-02-14 */
var mod;mod=angular.module("infinite-scroll",[]),mod.value("THROTTLE_MILLISECONDS",null),mod.directive("infiniteScroll",["$rootScope","$window","$interval","THROTTLE_MILLISECONDS",function(a,b,c,d){return{scope:{infiniteScroll:"&",infiniteScrollContainer:"=",infiniteScrollDistance:"=",infiniteScrollDisabled:"=",infiniteScrollUseDocumentBottom:"=",infiniteScrollListenForEvent:"@"},link:function(e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;return y=angular.element(b),t=null,u=null,i=null,j=null,q=!0,x=!1,w=null,p=function(a){return a=a[0]||a,isNaN(a.offsetHeight)?a.document.documentElement.clientHeight:a.offsetHeight},r=function(a){return a[0].getBoundingClientRect&&!a.css("none")?a[0].getBoundingClientRect().top+s(a):void 0},s=function(a){return a=a[0]||a,isNaN(window.pageYOffset)?a.document.documentElement.scrollTop:a.ownerDocument.defaultView.pageYOffset},o=function(){var b,c,d,g,h;return j===y?(b=p(j)+s(j[0].document.documentElement),d=r(f)+p(f)):(b=p(j),c=0,void 0!==r(j)&&(c=r(j)),d=r(f)-c+p(f)),x&&(d=p((f[0].ownerDocument||f[0].document).documentElement)),g=d-b,h=g<=p(j)*t+1,h?(i=!0,u?e.$$phase||a.$$phase?e.infiniteScroll():e.$apply(e.infiniteScroll):void 0):i=!1},v=function(a,b){var d,e,f;return f=null,e=0,d=function(){var b;return e=(new Date).getTime(),c.cancel(f),f=null,a.call(),b=null},function(){var g,h;return g=(new Date).getTime(),h=b-(g-e),0>=h?(clearTimeout(f),c.cancel(f),f=null,e=g,a.call()):f?void 0:f=c(d,h,1)}},null!=d&&(o=v(o,d)),e.$on("$destroy",function(){return j.unbind("scroll",o),null!=w?(w(),w=null):void 0}),m=function(a){return t=parseFloat(a)||0},e.$watch("infiniteScrollDistance",m),m(e.infiniteScrollDistance),l=function(a){return u=!a,u&&i?(i=!1,o()):void 0},e.$watch("infiniteScrollDisabled",l),l(e.infiniteScrollDisabled),n=function(a){return x=a},e.$watch("infiniteScrollUseDocumentBottom",n),n(e.infiniteScrollUseDocumentBottom),h=function(a){return null!=j&&j.unbind("scroll",o),j=a,null!=a?j.bind("scroll",o):void 0},h(y),e.infiniteScrollListenForEvent&&(w=a.$on(e.infiniteScrollListenForEvent,o)),k=function(a){if(null!=a&&0!==a.length){if(a instanceof HTMLElement?a=angular.element(a):"function"==typeof a.append?a=angular.element(a[a.length-1]):"string"==typeof a&&(a=angular.element(document.querySelector(a))),null!=a)return h(a);throw new Exception("invalid infinite-scroll-container attribute.")}},e.$watch("infiniteScrollContainer",k),k(e.infiniteScrollContainer||[]),null!=g.infiniteScrollParent&&h(angular.element(f.parent())),null!=g.infiniteScrollImmediateCheck&&(q=e.$eval(g.infiniteScrollImmediateCheck)),c(function(){return q?o():void 0},0,1)}}}]);;
/*! ng-dialog - v0.4.0 (https://github.com/likeastore/ngDialog) */
!function(a,b){"undefined"!=typeof module&&module.exports?module.exports=b(require("angular")):"function"==typeof define&&define.amd?define(["angular"],b):b(a.angular)}(this,function(a){"use strict";var b=a.module("ngDialog",[]),c=a.element,d=a.isDefined,e=(document.body||document.documentElement).style,f=d(e.animation)||d(e.WebkitAnimation)||d(e.MozAnimation)||d(e.MsAnimation)||d(e.OAnimation),g="animationend webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend",h="a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]",i=!1,j={},k=[],l=!1;return b.provider("ngDialog",function(){var b=this.defaults={className:"ngdialog-theme-default",plain:!1,showClose:!0,closeByDocument:!0,closeByEscape:!0,closeByNavigation:!1,appendTo:!1,preCloseCallback:!1,overlay:!0,cache:!0,trapFocus:!0,preserveFocus:!0,ariaAuto:!0,ariaRole:null,ariaLabelledById:null,ariaLabelledBySelector:null,ariaDescribedById:null,ariaDescribedBySelector:null};this.setForceBodyReload=function(a){i=a||!1},this.setDefaults=function(c){a.extend(b,c)};var d,e=0,m=0,n={};this.$get=["$document","$templateCache","$compile","$q","$http","$rootScope","$timeout","$window","$controller","$injector",function(o,p,q,r,s,t,u,v,w,x){var y=o.find("body");i&&t.$on("$locationChangeSuccess",function(){y=o.find("body")});var z={onDocumentKeydown:function(a){27===a.keyCode&&A.close("$escape")},activate:function(a){var b=a.data("$ngDialogOptions");b.trapFocus&&(a.on("keydown",z.onTrapFocusKeydown),y.on("keydown",z.onTrapFocusKeydown))},deactivate:function(a){a.off("keydown",z.onTrapFocusKeydown),y.off("keydown",z.onTrapFocusKeydown)},deactivateAll:function(){a.forEach(function(b){var c=a.element(b);z.deactivate(c)})},setBodyPadding:function(a){var b=parseInt(y.css("padding-right")||0,10);y.css("padding-right",b+a+"px"),y.data("ng-dialog-original-padding",b)},resetBodyPadding:function(){var a=y.data("ng-dialog-original-padding");a?y.css("padding-right",a+"px"):y.css("padding-right","")},performCloseDialog:function(a,b){var c=a.attr("id"),e=j[c];if(e){if("undefined"!=typeof v.Hammer){var h=e.hammerTime;h.off("tap",d),h.destroy&&h.destroy(),delete e.hammerTime}else a.unbind("click");1===m&&y.unbind("keydown"),a.hasClass("ngdialog-closing")||(m-=1);var i=a.data("$ngDialogPreviousFocus");i&&i.focus(),t.$broadcast("ngDialog.closing",a),m=0>m?0:m,f?(e.$destroy(),a.unbind(g).bind(g,function(){a.remove(),0===m&&(y.removeClass("ngdialog-open"),z.resetBodyPadding()),t.$broadcast("ngDialog.closed",a)}).addClass("ngdialog-closing")):(e.$destroy(),a.remove(),0===m&&(y.removeClass("ngdialog-open"),z.resetBodyPadding()),t.$broadcast("ngDialog.closed",a)),n[c]&&(n[c].resolve({id:c,value:b,$dialog:a,remainingDialogs:m}),delete n[c]),j[c]&&delete j[c],k.splice(k.indexOf(c),1),k.length||(y.unbind("keydown",z.onDocumentKeydown),l=!1)}},closeDialog:function(b,c){var d=b.data("$ngDialogPreCloseCallback");if(d&&a.isFunction(d)){var e=d.call(b,c);a.isObject(e)?e.closePromise?e.closePromise.then(function(){z.performCloseDialog(b,c)}):e.then(function(){z.performCloseDialog(b,c)},function(){}):e!==!1&&z.performCloseDialog(b,c)}else z.performCloseDialog(b,c)},onTrapFocusKeydown:function(b){var c,d=a.element(b.currentTarget);if(d.hasClass("ngdialog"))c=d;else if(c=z.getActiveDialog(),null===c)return;var e=9===b.keyCode,f=b.shiftKey===!0;e&&z.handleTab(c,b,f)},handleTab:function(a,b,c){var d=z.getFocusableElements(a);if(0===d.length)return document.activeElement&&document.activeElement.blur(),void 0;var e=document.activeElement,f=Array.prototype.indexOf.call(d,e),g=-1===f,h=0===f,i=f===d.length-1,j=!1;c?(g||h)&&(d[d.length-1].focus(),j=!0):(g||i)&&(d[0].focus(),j=!0),j&&(b.preventDefault(),b.stopPropagation())},autoFocus:function(a){var b=a[0],d=b.querySelector("*[autofocus]");if(null===d||(d.focus(),document.activeElement!==d)){var e=z.getFocusableElements(a);if(e.length>0)return e[0].focus(),void 0;var f=z.filterVisibleElements(b.querySelectorAll("h1,h2,h3,h4,h5,h6,p,span"));if(f.length>0){var g=f[0];c(g).attr("tabindex","-1").css("outline","0"),g.focus()}}},getFocusableElements:function(a){var b=a[0],c=b.querySelectorAll(h);return z.filterVisibleElements(c)},filterVisibleElements:function(a){for(var b=[],c=0;c<a.length;c++){var d=a[c];(d.offsetWidth>0||d.offsetHeight>0)&&b.push(d)}return b},getActiveDialog:function(){var a=document.querySelectorAll(".ngdialog");return 0===a.length?null:c(a[a.length-1])},applyAriaAttributes:function(a,b){if(b.ariaAuto){if(!b.ariaRole){var c=z.getFocusableElements(a).length>0?"dialog":"alertdialog";b.ariaRole=c}b.ariaLabelledBySelector||(b.ariaLabelledBySelector="h1,h2,h3,h4,h5,h6"),b.ariaDescribedBySelector||(b.ariaDescribedBySelector="article,section,p")}b.ariaRole&&a.attr("role",b.ariaRole),z.applyAriaAttribute(a,"aria-labelledby",b.ariaLabelledById,b.ariaLabelledBySelector),z.applyAriaAttribute(a,"aria-describedby",b.ariaDescribedById,b.ariaDescribedBySelector)},applyAriaAttribute:function(a,b,d,e){if(d&&a.attr(b,d),e){var f=a.attr("id"),g=a[0].querySelector(e);if(!g)return;var h=f+"-"+b;return c(g).attr("id",h),a.attr(b,h),h}}},A={open:function(f){function g(a,b){return s.get(a,b||{}).then(function(a){return a.data||""})}function h(b){return b?a.isString(b)&&i.plain?b:"boolean"!=typeof i.cache||i.cache?p.get(b)||g(b,{cache:!0}):g(b,{cache:!1}):"Empty template"}var i=a.copy(b),o=++e,B="ngdialog"+o;k.push(B),f=f||{},a.extend(i,f);var C;n[B]=C=r.defer();var D;j[B]=D=a.isObject(i.scope)?i.scope.$new():t.$new();var E,F,G=a.extend({},i.resolve);return a.forEach(G,function(b,c){G[c]=a.isString(b)?x.get(b):x.invoke(b,null,null,c)}),r.all({template:h(i.template||i.templateUrl),locals:r.all(G)}).then(function(b){var e=b.template,f=b.locals;if(p.put(i.template||i.templateUrl,e),i.showClose&&(e+='<div class="ngdialog-close"></div>'),E=c('<div id="ngdialog'+o+'" class="ngdialog"></div>'),E.html(i.overlay?'<div class="ngdialog-overlay"></div><div class="ngdialog-content" role="document">'+e+"</div>":'<div class="ngdialog-content" role="document">'+e+"</div>"),E.data("$ngDialogOptions",i),i.data&&a.isString(i.data)){var g=i.data.replace(/^\s*/,"")[0];D.ngDialogData="{"===g||"["===g?a.fromJson(i.data):i.data}else i.data&&a.isObject(i.data)&&(D.ngDialogData=i.data);if(i.controller&&(a.isString(i.controller)||a.isArray(i.controller)||a.isFunction(i.controller))){var h=i.controller;i.controllerAs&&a.isString(i.controllerAs)&&(h+=" as "+i.controllerAs);var j=w(h,a.extend(f,{$scope:D,$element:E}));E.data("$ngDialogControllerController",j)}if(i.className&&E.addClass(i.className),F=i.appendTo&&a.isString(i.appendTo)?a.element(document.querySelector(i.appendTo)):y,z.applyAriaAttributes(E,i),i.preCloseCallback){var k;a.isFunction(i.preCloseCallback)?k=i.preCloseCallback:a.isString(i.preCloseCallback)&&D&&(a.isFunction(D[i.preCloseCallback])?k=D[i.preCloseCallback]:D.$parent&&a.isFunction(D.$parent[i.preCloseCallback])?k=D.$parent[i.preCloseCallback]:t&&a.isFunction(t[i.preCloseCallback])&&(k=t[i.preCloseCallback])),k&&E.data("$ngDialogPreCloseCallback",k)}if(D.closeThisDialog=function(a){z.closeDialog(E,a)},u(function(){var a=document.querySelectorAll(".ngdialog");z.deactivateAll(a),q(E)(D);var b=v.innerWidth-y.prop("clientWidth");y.addClass("ngdialog-open");var c=b-(v.innerWidth-y.prop("clientWidth"));c>0&&z.setBodyPadding(c),F.append(E),z.activate(E),i.trapFocus&&z.autoFocus(E),i.name?t.$broadcast("ngDialog.opened",{dialog:E,name:i.name}):t.$broadcast("ngDialog.opened",E)}),l||(y.bind("keydown",z.onDocumentKeydown),l=!0),i.closeByNavigation&&t.$on("$locationChangeSuccess",function(){z.closeDialog(E)}),i.preserveFocus&&E.data("$ngDialogPreviousFocus",document.activeElement),d=function(a){var b=i.closeByDocument?c(a.target).hasClass("ngdialog-overlay"):!1,d=c(a.target).hasClass("ngdialog-close");(b||d)&&A.close(E.attr("id"),d?"$closeButton":"$document")},"undefined"!=typeof v.Hammer){var n=D.hammerTime=v.Hammer(E[0]);n.on("tap",d)}else E.bind("click",d);return m+=1,A}),{id:B,closePromise:C.promise,close:function(a){z.closeDialog(E,a)}}},openConfirm:function(b){var d=r.defer(),e={closeByEscape:!1,closeByDocument:!1};a.extend(e,b),e.scope=a.isObject(e.scope)?e.scope.$new():t.$new(),e.scope.confirm=function(a){d.resolve(a);var b=c(document.getElementById(f.id));z.performCloseDialog(b,a)};var f=A.open(e);return f.closePromise.then(function(a){return a?d.reject(a.value):d.reject()}),d.promise},isOpen:function(a){var b=c(document.getElementById(a));return b.length>0},close:function(a,b){var d=c(document.getElementById(a));if(d.length)z.closeDialog(d,b);else if("$escape"===a){var e=k[k.length-1];d=c(document.getElementById(e)),d.data("$ngDialogOptions").closeByEscape&&z.closeDialog(d,b)}return A},closeAll:function(a){for(var b=document.querySelectorAll(".ngdialog"),d=b.length-1;d>=0;d--){var e=b[d];z.closeDialog(c(e),a)}},getDefaults:function(){return b}};return A}]}),b.directive("ngDialog",["ngDialog",function(b){return{restrict:"A",scope:{ngDialogScope:"="},link:function(c,d,e){d.on("click",function(d){d.preventDefault();var f=a.isDefined(c.ngDialogScope)?c.ngDialogScope:"noScope";a.isDefined(e.ngDialogClosePrevious)&&b.close(e.ngDialogClosePrevious);var g=b.getDefaults();b.open({template:e.ngDialog,className:e.ngDialogClass||g.className,controller:e.ngDialogController,controllerAs:e.ngDialogControllerAs,scope:f,data:e.ngDialogData,showClose:"false"===e.ngDialogShowClose?!1:"true"===e.ngDialogShowClose?!0:g.showClose,closeByDocument:"false"===e.ngDialogCloseByDocument?!1:"true"===e.ngDialogCloseByDocument?!0:g.closeByDocument,closeByEscape:"false"===e.ngDialogCloseByEscape?!1:"true"===e.ngDialogCloseByEscape?!0:g.closeByEscape,preCloseCallback:e.ngDialogPreCloseCallback||g.preCloseCallback})})}}}]),b});;
/**
 * State-based routing for AngularJS
 * @version v0.2.15
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(a,b,c){"use strict";function d(a,b){return N(new(N(function(){},{prototype:a})),b)}function e(a){return M(arguments,function(b){b!==a&&M(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)})}),a}function f(a,b){var c=[];for(var d in a.path){if(a.path[d]!==b.path[d])break;c.push(a.path[d])}return c}function g(a){if(Object.keys)return Object.keys(a);var b=[];return M(a,function(a,c){b.push(c)}),b}function h(a,b){if(Array.prototype.indexOf)return a.indexOf(b,Number(arguments[2])||0);var c=a.length>>>0,d=Number(arguments[2])||0;for(d=0>d?Math.ceil(d):Math.floor(d),0>d&&(d+=c);c>d;d++)if(d in a&&a[d]===b)return d;return-1}function i(a,b,c,d){var e,i=f(c,d),j={},k=[];for(var l in i)if(i[l].params&&(e=g(i[l].params),e.length))for(var m in e)h(k,e[m])>=0||(k.push(e[m]),j[e[m]]=a[e[m]]);return N({},j,b)}function j(a,b,c){if(!c){c=[];for(var d in a)c.push(d)}for(var e=0;e<c.length;e++){var f=c[e];if(a[f]!=b[f])return!1}return!0}function k(a,b){var c={};return M(a,function(a){c[a]=b[a]}),c}function l(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));return M(c,function(c){c in a&&(b[c]=a[c])}),b}function m(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var d in a)-1==h(c,d)&&(b[d]=a[d]);return b}function n(a,b){var c=L(a),d=c?[]:{};return M(a,function(a,e){b(a,e)&&(d[c?d.length:e]=a)}),d}function o(a,b){var c=L(a)?[]:{};return M(a,function(a,d){c[d]=b(a,d)}),c}function p(a,b){var d=1,f=2,i={},j=[],k=i,l=N(a.when(i),{$$promises:i,$$values:i});this.study=function(i){function n(a,c){if(s[c]!==f){if(r.push(c),s[c]===d)throw r.splice(0,h(r,c)),new Error("Cyclic dependency: "+r.join(" -> "));if(s[c]=d,J(a))q.push(c,[function(){return b.get(a)}],j);else{var e=b.annotate(a);M(e,function(a){a!==c&&i.hasOwnProperty(a)&&n(i[a],a)}),q.push(c,a,e)}r.pop(),s[c]=f}}function o(a){return K(a)&&a.then&&a.$$promises}if(!K(i))throw new Error("'invocables' must be an object");var p=g(i||{}),q=[],r=[],s={};return M(i,n),i=r=s=null,function(d,f,g){function h(){--u||(v||e(t,f.$$values),r.$$values=t,r.$$promises=r.$$promises||!0,delete r.$$inheritedValues,n.resolve(t))}function i(a){r.$$failure=a,n.reject(a)}function j(c,e,f){function j(a){l.reject(a),i(a)}function k(){if(!H(r.$$failure))try{l.resolve(b.invoke(e,g,t)),l.promise.then(function(a){t[c]=a,h()},j)}catch(a){j(a)}}var l=a.defer(),m=0;M(f,function(a){s.hasOwnProperty(a)&&!d.hasOwnProperty(a)&&(m++,s[a].then(function(b){t[a]=b,--m||k()},j))}),m||k(),s[c]=l.promise}if(o(d)&&g===c&&(g=f,f=d,d=null),d){if(!K(d))throw new Error("'locals' must be an object")}else d=k;if(f){if(!o(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else f=l;var n=a.defer(),r=n.promise,s=r.$$promises={},t=N({},d),u=1+q.length/3,v=!1;if(H(f.$$failure))return i(f.$$failure),r;f.$$inheritedValues&&e(t,m(f.$$inheritedValues,p)),N(s,f.$$promises),f.$$values?(v=e(t,m(f.$$values,p)),r.$$inheritedValues=m(f.$$values,p),h()):(f.$$inheritedValues&&(r.$$inheritedValues=m(f.$$inheritedValues,p)),f.then(h,i));for(var w=0,x=q.length;x>w;w+=3)d.hasOwnProperty(q[w])?h():j(q[w],q[w+1],q[w+2]);return r}},this.resolve=function(a,b,c,d){return this.study(a)(b,c,d)}}function q(a,b,c){this.fromConfig=function(a,b,c){return H(a.template)?this.fromString(a.template,b):H(a.templateUrl)?this.fromUrl(a.templateUrl,b):H(a.templateProvider)?this.fromProvider(a.templateProvider,b,c):null},this.fromString=function(a,b){return I(a)?a(b):a},this.fromUrl=function(c,d){return I(c)&&(c=c(d)),null==c?null:a.get(c,{cache:b,headers:{Accept:"text/html"}}).then(function(a){return a.data})},this.fromProvider=function(a,b,d){return c.invoke(a,null,d||{params:b})}}function r(a,b,e){function f(b,c,d,e){if(q.push(b),o[b])return o[b];if(!/^\w+(-+\w+)*(?:\[\])?$/.test(b))throw new Error("Invalid parameter name '"+b+"' in pattern '"+a+"'");if(p[b])throw new Error("Duplicate parameter name '"+b+"' in pattern '"+a+"'");return p[b]=new P.Param(b,c,d,e),p[b]}function g(a,b,c,d){var e=["",""],f=a.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!b)return f;switch(c){case!1:e=["(",")"+(d?"?":"")];break;case!0:e=["?(",")?"];break;default:e=["("+c+"|",")?"]}return f+e[0]+b+e[1]}function h(e,f){var g,h,i,j,k;return g=e[2]||e[3],k=b.params[g],i=a.substring(m,e.index),h=f?e[4]:e[4]||("*"==e[1]?".*":null),j=P.type(h||"string")||d(P.type("string"),{pattern:new RegExp(h,b.caseInsensitive?"i":c)}),{id:g,regexp:h,segment:i,type:j,cfg:k}}b=N({params:{}},K(b)?b:{});var i,j=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,k=/([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,l="^",m=0,n=this.segments=[],o=e?e.params:{},p=this.params=e?e.params.$$new():new P.ParamSet,q=[];this.source=a;for(var r,s,t;(i=j.exec(a))&&(r=h(i,!1),!(r.segment.indexOf("?")>=0));)s=f(r.id,r.type,r.cfg,"path"),l+=g(r.segment,s.type.pattern.source,s.squash,s.isOptional),n.push(r.segment),m=j.lastIndex;t=a.substring(m);var u=t.indexOf("?");if(u>=0){var v=this.sourceSearch=t.substring(u);if(t=t.substring(0,u),this.sourcePath=a.substring(0,m+u),v.length>0)for(m=0;i=k.exec(v);)r=h(i,!0),s=f(r.id,r.type,r.cfg,"search"),m=j.lastIndex}else this.sourcePath=a,this.sourceSearch="";l+=g(t)+(b.strict===!1?"/?":"")+"$",n.push(t),this.regexp=new RegExp(l,b.caseInsensitive?"i":c),this.prefix=n[0],this.$$paramNames=q}function s(a){N(this,a)}function t(){function a(a){return null!=a?a.toString().replace(/\//g,"%2F"):a}function e(a){return null!=a?a.toString().replace(/%2F/g,"/"):a}function f(){return{strict:p,caseInsensitive:m}}function i(a){return I(a)||L(a)&&I(a[a.length-1])}function j(){for(;w.length;){var a=w.shift();if(a.pattern)throw new Error("You cannot override a type's .pattern at runtime.");b.extend(u[a.name],l.invoke(a.def))}}function k(a){N(this,a||{})}P=this;var l,m=!1,p=!0,q=!1,u={},v=!0,w=[],x={string:{encode:a,decode:e,is:function(a){return null==a||!H(a)||"string"==typeof a},pattern:/[^/]*/},"int":{encode:a,decode:function(a){return parseInt(a,10)},is:function(a){return H(a)&&this.decode(a.toString())===a},pattern:/\d+/},bool:{encode:function(a){return a?1:0},decode:function(a){return 0!==parseInt(a,10)},is:function(a){return a===!0||a===!1},pattern:/0|1/},date:{encode:function(a){return this.is(a)?[a.getFullYear(),("0"+(a.getMonth()+1)).slice(-2),("0"+a.getDate()).slice(-2)].join("-"):c},decode:function(a){if(this.is(a))return a;var b=this.capture.exec(a);return b?new Date(b[1],b[2]-1,b[3]):c},is:function(a){return a instanceof Date&&!isNaN(a.valueOf())},equals:function(a,b){return this.is(a)&&this.is(b)&&a.toISOString()===b.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:b.toJson,decode:b.fromJson,is:b.isObject,equals:b.equals,pattern:/[^/]*/},any:{encode:b.identity,decode:b.identity,equals:b.equals,pattern:/.*/}};t.$$getDefaultValue=function(a){if(!i(a.value))return a.value;if(!l)throw new Error("Injectable functions cannot be called at configuration time");return l.invoke(a.value)},this.caseInsensitive=function(a){return H(a)&&(m=a),m},this.strictMode=function(a){return H(a)&&(p=a),p},this.defaultSquashPolicy=function(a){if(!H(a))return q;if(a!==!0&&a!==!1&&!J(a))throw new Error("Invalid squash policy: "+a+". Valid policies: false, true, arbitrary-string");return q=a,a},this.compile=function(a,b){return new r(a,N(f(),b))},this.isMatcher=function(a){if(!K(a))return!1;var b=!0;return M(r.prototype,function(c,d){I(c)&&(b=b&&H(a[d])&&I(a[d]))}),b},this.type=function(a,b,c){if(!H(b))return u[a];if(u.hasOwnProperty(a))throw new Error("A type named '"+a+"' has already been defined.");return u[a]=new s(N({name:a},b)),c&&(w.push({name:a,def:c}),v||j()),this},M(x,function(a,b){u[b]=new s(N({name:b},a))}),u=d(u,{}),this.$get=["$injector",function(a){return l=a,v=!1,j(),M(x,function(a,b){u[b]||(u[b]=new s(a))}),this}],this.Param=function(a,b,d,e){function f(a){var b=K(a)?g(a):[],c=-1===h(b,"value")&&-1===h(b,"type")&&-1===h(b,"squash")&&-1===h(b,"array");return c&&(a={value:a}),a.$$fn=i(a.value)?a.value:function(){return a.value},a}function j(b,c,d){if(b.type&&c)throw new Error("Param '"+a+"' has two type configurations.");return c?c:b.type?b.type instanceof s?b.type:new s(b.type):"config"===d?u.any:u.string}function k(){var b={array:"search"===e?"auto":!1},c=a.match(/\[\]$/)?{array:!0}:{};return N(b,c,d).array}function m(a,b){var c=a.squash;if(!b||c===!1)return!1;if(!H(c)||null==c)return q;if(c===!0||J(c))return c;throw new Error("Invalid squash policy: '"+c+"'. Valid policies: false, true, or arbitrary string")}function p(a,b,d,e){var f,g,i=[{from:"",to:d||b?c:""},{from:null,to:d||b?c:""}];return f=L(a.replace)?a.replace:[],J(e)&&f.push({from:e,to:c}),g=o(f,function(a){return a.from}),n(i,function(a){return-1===h(g,a.from)}).concat(f)}function r(){if(!l)throw new Error("Injectable functions cannot be called at configuration time");var a=l.invoke(d.$$fn);if(null!==a&&a!==c&&!w.type.is(a))throw new Error("Default value ("+a+") for parameter '"+w.id+"' is not an instance of Type ("+w.type.name+")");return a}function t(a){function b(a){return function(b){return b.from===a}}function c(a){var c=o(n(w.replace,b(a)),function(a){return a.to});return c.length?c[0]:a}return a=c(a),H(a)?w.type.$normalize(a):r()}function v(){return"{Param:"+a+" "+b+" squash: '"+z+"' optional: "+y+"}"}var w=this;d=f(d),b=j(d,b,e);var x=k();b=x?b.$asArray(x,"search"===e):b,"string"!==b.name||x||"path"!==e||d.value!==c||(d.value="");var y=d.value!==c,z=m(d,y),A=p(d,x,y,z);N(this,{id:a,type:b,location:e,array:x,squash:z,replace:A,isOptional:y,value:t,dynamic:c,config:d,toString:v})},k.prototype={$$new:function(){return d(this,N(new k,{$$parent:this}))},$$keys:function(){for(var a=[],b=[],c=this,d=g(k.prototype);c;)b.push(c),c=c.$$parent;return b.reverse(),M(b,function(b){M(g(b),function(b){-1===h(a,b)&&-1===h(d,b)&&a.push(b)})}),a},$$values:function(a){var b={},c=this;return M(c.$$keys(),function(d){b[d]=c[d].value(a&&a[d])}),b},$$equals:function(a,b){var c=!0,d=this;return M(d.$$keys(),function(e){var f=a&&a[e],g=b&&b[e];d[e].type.equals(f,g)||(c=!1)}),c},$$validates:function(a){var d,e,f,g,h,i=this.$$keys();for(d=0;d<i.length&&(e=this[i[d]],f=a[i[d]],f!==c&&null!==f||!e.isOptional);d++){if(g=e.type.$normalize(f),!e.type.is(g))return!1;if(h=e.type.encode(g),b.isString(h)&&!e.type.pattern.exec(h))return!1}return!0},$$parent:c},this.ParamSet=k}function u(a,d){function e(a){var b=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null!=b?b[1].replace(/\\(.)/g,"$1"):""}function f(a,b){return a.replace(/\$(\$|\d{1,2})/,function(a,c){return b["$"===c?0:Number(c)]})}function g(a,b,c){if(!c)return!1;var d=a.invoke(b,b,{$match:c});return H(d)?d:!0}function h(d,e,f,g){function h(a,b,c){return"/"===p?a:b?p.slice(0,-1)+a:c?p.slice(1)+a:a}function m(a){function b(a){var b=a(f,d);return b?(J(b)&&d.replace().url(b),!0):!1}if(!a||!a.defaultPrevented){o&&d.url()===o;o=c;var e,g=j.length;for(e=0;g>e;e++)if(b(j[e]))return;k&&b(k)}}function n(){return i=i||e.$on("$locationChangeSuccess",m)}var o,p=g.baseHref(),q=d.url();return l||n(),{sync:function(){m()},listen:function(){return n()},update:function(a){return a?void(q=d.url()):void(d.url()!==q&&(d.url(q),d.replace()))},push:function(a,b,e){var f=a.format(b||{});null!==f&&b&&b["#"]&&(f+="#"+b["#"]),d.url(f),o=e&&e.$$avoidResync?d.url():c,e&&e.replace&&d.replace()},href:function(c,e,f){if(!c.validates(e))return null;var g=a.html5Mode();b.isObject(g)&&(g=g.enabled);var i=c.format(e);if(f=f||{},g||null===i||(i="#"+a.hashPrefix()+i),null!==i&&e&&e["#"]&&(i+="#"+e["#"]),i=h(i,g,f.absolute),!f.absolute||!i)return i;var j=!g&&i?"/":"",k=d.port();return k=80===k||443===k?"":":"+k,[d.protocol(),"://",d.host(),k,j,i].join("")}}}var i,j=[],k=null,l=!1;this.rule=function(a){if(!I(a))throw new Error("'rule' must be a function");return j.push(a),this},this.otherwise=function(a){if(J(a)){var b=a;a=function(){return b}}else if(!I(a))throw new Error("'rule' must be a function");return k=a,this},this.when=function(a,b){var c,h=J(b);if(J(a)&&(a=d.compile(a)),!h&&!I(b)&&!L(b))throw new Error("invalid 'handler' in when()");var i={matcher:function(a,b){return h&&(c=d.compile(b),b=["$match",function(a){return c.format(a)}]),N(function(c,d){return g(c,b,a.exec(d.path(),d.search()))},{prefix:J(a.prefix)?a.prefix:""})},regex:function(a,b){if(a.global||a.sticky)throw new Error("when() RegExp must not be global or sticky");return h&&(c=b,b=["$match",function(a){return f(c,a)}]),N(function(c,d){return g(c,b,a.exec(d.path()))},{prefix:e(a)})}},j={matcher:d.isMatcher(a),regex:a instanceof RegExp};for(var k in j)if(j[k])return this.rule(i[k](a,b));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(a){a===c&&(a=!0),l=a},this.$get=h,h.$inject=["$location","$rootScope","$injector","$browser"]}function v(a,e){function f(a){return 0===a.indexOf(".")||0===a.indexOf("^")}function m(a,b){if(!a)return c;var d=J(a),e=d?a:a.name,g=f(e);if(g){if(!b)throw new Error("No reference point given for path '"+e+"'");b=m(b);for(var h=e.split("."),i=0,j=h.length,k=b;j>i;i++)if(""!==h[i]||0!==i){if("^"!==h[i])break;if(!k.parent)throw new Error("Path '"+e+"' not valid for state '"+b.name+"'");k=k.parent}else k=b;h=h.slice(i).join("."),e=k.name+(k.name&&h?".":"")+h}var l=z[e];return!l||!d&&(d||l!==a&&l.self!==a)?c:l}function n(a,b){A[a]||(A[a]=[]),A[a].push(b)}function p(a){for(var b=A[a]||[];b.length;)q(b.shift())}function q(b){b=d(b,{self:b,resolve:b.resolve||{},toString:function(){return this.name}});var c=b.name;if(!J(c)||c.indexOf("@")>=0)throw new Error("State must have a valid name");if(z.hasOwnProperty(c))throw new Error("State '"+c+"'' is already defined");var e=-1!==c.indexOf(".")?c.substring(0,c.lastIndexOf(".")):J(b.parent)?b.parent:K(b.parent)&&J(b.parent.name)?b.parent.name:"";if(e&&!z[e])return n(e,b.self);for(var f in C)I(C[f])&&(b[f]=C[f](b,C.$delegates[f]));return z[c]=b,!b[B]&&b.url&&a.when(b.url,["$match","$stateParams",function(a,c){y.$current.navigable==b&&j(a,c)||y.transitionTo(b,a,{inherit:!0,location:!1})}]),p(c),b}function r(a){return a.indexOf("*")>-1}function s(a){for(var b=a.split("."),c=y.$current.name.split("."),d=0,e=b.length;e>d;d++)"*"===b[d]&&(c[d]="*");return"**"===b[0]&&(c=c.slice(h(c,b[1])),c.unshift("**")),"**"===b[b.length-1]&&(c.splice(h(c,b[b.length-2])+1,Number.MAX_VALUE),c.push("**")),b.length!=c.length?!1:c.join("")===b.join("")}function t(a,b){return J(a)&&!H(b)?C[a]:I(b)&&J(a)?(C[a]&&!C.$delegates[a]&&(C.$delegates[a]=C[a]),C[a]=b,this):this}function u(a,b){return K(a)?b=a:b.name=a,q(b),this}function v(a,e,f,h,l,n,p,q,t){function u(b,c,d,f){var g=a.$broadcast("$stateNotFound",b,c,d);if(g.defaultPrevented)return p.update(),D;if(!g.retry)return null;if(f.$retry)return p.update(),E;var h=y.transition=e.when(g.retry);return h.then(function(){return h!==y.transition?A:(b.options.$retry=!0,y.transitionTo(b.to,b.toParams,b.options))},function(){return D}),p.update(),h}function v(a,c,d,g,i,j){function m(){var c=[];return M(a.views,function(d,e){var g=d.resolve&&d.resolve!==a.resolve?d.resolve:{};g.$template=[function(){return f.load(e,{view:d,locals:i.globals,params:n,notify:j.notify})||""}],c.push(l.resolve(g,i.globals,i.resolve,a).then(function(c){if(I(d.controllerProvider)||L(d.controllerProvider)){var f=b.extend({},g,i.globals);c.$$controller=h.invoke(d.controllerProvider,null,f)}else c.$$controller=d.controller;c.$$state=a,c.$$controllerAs=d.controllerAs,i[e]=c}))}),e.all(c).then(function(){return i.globals})}var n=d?c:k(a.params.$$keys(),c),o={$stateParams:n};i.resolve=l.resolve(a.resolve,o,i.resolve,a);var p=[i.resolve.then(function(a){i.globals=a})];return g&&p.push(g),e.all(p).then(m).then(function(a){return i})}var A=e.reject(new Error("transition superseded")),C=e.reject(new Error("transition prevented")),D=e.reject(new Error("transition aborted")),E=e.reject(new Error("transition failed"));return x.locals={resolve:null,globals:{$stateParams:{}}},y={params:{},current:x.self,$current:x,transition:null},y.reload=function(a){return y.transitionTo(y.current,n,{reload:a||!0,inherit:!1,notify:!0})},y.go=function(a,b,c){return y.transitionTo(a,b,N({inherit:!0,relative:y.$current},c))},y.transitionTo=function(b,c,f){c=c||{},f=N({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},f||{});var g,j=y.$current,l=y.params,o=j.path,q=m(b,f.relative),r=c["#"];if(!H(q)){var s={to:b,toParams:c,options:f},t=u(s,j.self,l,f);if(t)return t;if(b=s.to,c=s.toParams,f=s.options,q=m(b,f.relative),!H(q)){if(!f.relative)throw new Error("No such state '"+b+"'");throw new Error("Could not resolve '"+b+"' from state '"+f.relative+"'")}}if(q[B])throw new Error("Cannot transition to abstract state '"+b+"'");if(f.inherit&&(c=i(n,c||{},y.$current,q)),!q.params.$$validates(c))return E;c=q.params.$$values(c),b=q;var z=b.path,D=0,F=z[D],G=x.locals,I=[];if(f.reload){if(J(f.reload)||K(f.reload)){if(K(f.reload)&&!f.reload.name)throw new Error("Invalid reload state object");var L=f.reload===!0?o[0]:m(f.reload);if(f.reload&&!L)throw new Error("No such reload state '"+(J(f.reload)?f.reload:f.reload.name)+"'");for(;F&&F===o[D]&&F!==L;)G=I[D]=F.locals,D++,F=z[D]}}else for(;F&&F===o[D]&&F.ownParams.$$equals(c,l);)G=I[D]=F.locals,D++,F=z[D];if(w(b,c,j,l,G,f))return r&&(c["#"]=r),y.params=c,O(y.params,n),f.location&&b.navigable&&b.navigable.url&&(p.push(b.navigable.url,c,{$$avoidResync:!0,replace:"replace"===f.location}),p.update(!0)),y.transition=null,e.when(y.current);if(c=k(b.params.$$keys(),c||{}),f.notify&&a.$broadcast("$stateChangeStart",b.self,c,j.self,l).defaultPrevented)return a.$broadcast("$stateChangeCancel",b.self,c,j.self,l),p.update(),C;for(var M=e.when(G),P=D;P<z.length;P++,F=z[P])G=I[P]=d(G),M=v(F,c,F===b,M,G,f);var Q=y.transition=M.then(function(){var d,e,g;if(y.transition!==Q)return A;for(d=o.length-1;d>=D;d--)g=o[d],g.self.onExit&&h.invoke(g.self.onExit,g.self,g.locals.globals),g.locals=null;for(d=D;d<z.length;d++)e=z[d],e.locals=I[d],e.self.onEnter&&h.invoke(e.self.onEnter,e.self,e.locals.globals);return r&&(c["#"]=r),y.transition!==Q?A:(y.$current=b,y.current=b.self,y.params=c,O(y.params,n),y.transition=null,f.location&&b.navigable&&p.push(b.navigable.url,b.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:"replace"===f.location}),f.notify&&a.$broadcast("$stateChangeSuccess",b.self,c,j.self,l),p.update(!0),y.current)},function(d){return y.transition!==Q?A:(y.transition=null,g=a.$broadcast("$stateChangeError",b.self,c,j.self,l,d),g.defaultPrevented||p.update(),e.reject(d))});return Q},y.is=function(a,b,d){d=N({relative:y.$current},d||{});var e=m(a,d.relative);return H(e)?y.$current!==e?!1:b?j(e.params.$$values(b),n):!0:c},y.includes=function(a,b,d){if(d=N({relative:y.$current},d||{}),J(a)&&r(a)){if(!s(a))return!1;a=y.$current.name}var e=m(a,d.relative);return H(e)?H(y.$current.includes[e.name])?b?j(e.params.$$values(b),n,g(b)):!0:!1:c},y.href=function(a,b,d){d=N({lossy:!0,inherit:!0,absolute:!1,relative:y.$current},d||{});var e=m(a,d.relative);if(!H(e))return null;d.inherit&&(b=i(n,b||{},y.$current,e));var f=e&&d.lossy?e.navigable:e;return f&&f.url!==c&&null!==f.url?p.href(f.url,k(e.params.$$keys().concat("#"),b||{}),{absolute:d.absolute}):null},y.get=function(a,b){if(0===arguments.length)return o(g(z),function(a){return z[a].self});var c=m(a,b||y.$current);return c&&c.self?c.self:null},y}function w(a,b,c,d,e,f){function g(a,b,c){function d(b){return"search"!=a.params[b].location}var e=a.params.$$keys().filter(d),f=l.apply({},[a.params].concat(e)),g=new P.ParamSet(f);return g.$$equals(b,c)}return!f.reload&&a===c&&(e===c.locals||a.self.reloadOnSearch===!1&&g(c,d,b))?!0:void 0}var x,y,z={},A={},B="abstract",C={parent:function(a){if(H(a.parent)&&a.parent)return m(a.parent);var b=/^(.+)\.[^.]+$/.exec(a.name);return b?m(b[1]):x},data:function(a){return a.parent&&a.parent.data&&(a.data=a.self.data=N({},a.parent.data,a.data)),a.data},url:function(a){var b=a.url,c={params:a.params||{}};if(J(b))return"^"==b.charAt(0)?e.compile(b.substring(1),c):(a.parent.navigable||x).url.concat(b,c);if(!b||e.isMatcher(b))return b;throw new Error("Invalid url '"+b+"' in state '"+a+"'")},navigable:function(a){return a.url?a:a.parent?a.parent.navigable:null},ownParams:function(a){var b=a.url&&a.url.params||new P.ParamSet;return M(a.params||{},function(a,c){b[c]||(b[c]=new P.Param(c,null,a,"config"))}),b},params:function(a){return a.parent&&a.parent.params?N(a.parent.params.$$new(),a.ownParams):new P.ParamSet},views:function(a){var b={};return M(H(a.views)?a.views:{"":a},function(c,d){d.indexOf("@")<0&&(d+="@"+a.parent.name),b[d]=c}),b},path:function(a){return a.parent?a.parent.path.concat(a):[]},includes:function(a){var b=a.parent?N({},a.parent.includes):{};return b[a.name]=!0,b},$delegates:{}};x=q({name:"",url:"^",views:null,"abstract":!0}),x.navigable=null,this.decorator=t,this.state=u,this.$get=v,v.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$urlRouter","$location","$urlMatcherFactory"]}function w(){function a(a,b){return{load:function(c,d){var e,f={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return d=N(f,d),d.view&&(e=b.fromConfig(d.view,d.params,d.locals)),e&&d.notify&&a.$broadcast("$viewContentLoading",d),e}}}this.$get=a,a.$inject=["$rootScope","$templateFactory"]}function x(){var a=!1;this.useAnchorScroll=function(){a=!0},this.$get=["$anchorScroll","$timeout",function(b,c){return a?b:function(a){return c(function(){a[0].scrollIntoView()},0,!1)}}]}function y(a,c,d,e){function f(){return c.has?function(a){return c.has(a)?c.get(a):null}:function(a){try{return c.get(a)}catch(b){return null}}}function g(a,b){var c=function(){return{enter:function(a,b,c){b.after(a),c()},leave:function(a,b){a.remove(),b()}}};if(j)return{enter:function(a,b,c){var d=j.enter(a,null,b,c);d&&d.then&&d.then(c)},leave:function(a,b){var c=j.leave(a,b);c&&c.then&&c.then(b)}};if(i){var d=i&&i(b,a);return{enter:function(a,b,c){d.enter(a,null,b),c()},leave:function(a,b){d.leave(a),b()}}}return c()}var h=f(),i=h("$animator"),j=h("$animate"),k={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(c,f,h){return function(c,f,i){function j(){l&&(l.remove(),l=null),n&&(n.$destroy(),n=null),m&&(r.leave(m,function(){l=null}),l=m,m=null)}function k(g){var k,l=A(c,i,f,e),s=l&&a.$current&&a.$current.locals[l];if(g||s!==o){k=c.$new(),o=a.$current.locals[l];var t=h(k,function(a){r.enter(a,f,function(){n&&n.$emit("$viewContentAnimationEnded"),(b.isDefined(q)&&!q||c.$eval(q))&&d(a)}),j()});m=t,n=k,n.$emit("$viewContentLoaded"),n.$eval(p)}}var l,m,n,o,p=i.onload||"",q=i.autoscroll,r=g(i,c);c.$on("$stateChangeSuccess",function(){k(!1)}),c.$on("$viewContentLoading",function(){k(!1)}),k(!0)}}};return k}function z(a,b,c,d){return{restrict:"ECA",priority:-400,compile:function(e){var f=e.html();return function(e,g,h){var i=c.$current,j=A(e,h,g,d),k=i&&i.locals[j];if(k){g.data("$uiView",{name:j,state:k.$$state}),g.html(k.$template?k.$template:f);var l=a(g.contents());if(k.$$controller){k.$scope=e,k.$element=g;var m=b(k.$$controller,k);k.$$controllerAs&&(e[k.$$controllerAs]=m),g.data("$ngControllerController",m),g.children().data("$ngControllerController",m)}l(e)}}}}}function A(a,b,c,d){var e=d(b.uiView||b.name||"")(a),f=c.inheritedData("$uiView");return e.indexOf("@")>=0?e:e+"@"+(f?f.state.name:"")}function B(a,b){var c,d=a.match(/^\s*({[^}]*})\s*$/);if(d&&(a=b+"("+d[1]+")"),c=a.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/),!c||4!==c.length)throw new Error("Invalid state ref '"+a+"'");return{state:c[1],paramExpr:c[3]||null}}function C(a){var b=a.parent().inheritedData("$uiView");return b&&b.state&&b.state.name?b.state:void 0}function D(a,c){var d=["location","inherit","reload","absolute"];return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(e,f,g,h){var i=B(g.uiSref,a.current.name),j=null,k=C(f)||a.$current,l="[object SVGAnimatedString]"===Object.prototype.toString.call(f.prop("href"))?"xlink:href":"href",m=null,n="A"===f.prop("tagName").toUpperCase(),o="FORM"===f[0].nodeName,p=o?"action":l,q=!0,r={relative:k,inherit:!0},s=e.$eval(g.uiSrefOpts)||{};b.forEach(d,function(a){a in s&&(r[a]=s[a])});var t=function(c){if(c&&(j=b.copy(c)),q){m=a.href(i.state,j,r);var d=h[1]||h[0];return d&&d.$$addStateInfo(i.state,j),null===m?(q=!1,!1):void g.$set(p,m)}};i.paramExpr&&(e.$watch(i.paramExpr,function(a,b){a!==j&&t(a)},!0),j=b.copy(e.$eval(i.paramExpr))),t(),o||f.bind("click",function(b){var d=b.which||b.button;if(!(d>1||b.ctrlKey||b.metaKey||b.shiftKey||f.attr("target"))){var e=c(function(){a.go(i.state,j,r)});b.preventDefault();var g=n&&!m?1:0;b.preventDefault=function(){g--<=0&&c.cancel(e)}}})}}}function E(a,b,c){return{restrict:"A",controller:["$scope","$element","$attrs",function(b,d,e){function f(){g()?d.addClass(i):d.removeClass(i)}function g(){for(var a=0;a<j.length;a++)if(h(j[a].state,j[a].params))return!0;return!1}function h(b,c){return"undefined"!=typeof e.uiSrefActiveEq?a.is(b.name,c):a.includes(b.name,c)}var i,j=[];i=c(e.uiSrefActiveEq||e.uiSrefActive||"",!1)(b),this.$$addStateInfo=function(b,c){var e=a.get(b,C(d));j.push({state:e||{name:b},params:c}),f()},b.$on("$stateChangeSuccess",f)}]}}function F(a){var b=function(b){return a.is(b)};return b.$stateful=!0,b}function G(a){var b=function(b){return a.includes(b)};return b.$stateful=!0,b}var H=b.isDefined,I=b.isFunction,J=b.isString,K=b.isObject,L=b.isArray,M=b.forEach,N=b.extend,O=b.copy;b.module("ui.router.util",["ng"]),b.module("ui.router.router",["ui.router.util"]),b.module("ui.router.state",["ui.router.router","ui.router.util"]),b.module("ui.router",["ui.router.state"]),b.module("ui.router.compat",["ui.router"]),p.$inject=["$q","$injector"],b.module("ui.router.util").service("$resolve",p),q.$inject=["$http","$templateCache","$injector"],b.module("ui.router.util").service("$templateFactory",q);var P;r.prototype.concat=function(a,b){var c={caseInsensitive:P.caseInsensitive(),strict:P.strictMode(),squash:P.defaultSquashPolicy()};return new r(this.sourcePath+a+this.sourceSearch,N(c,b),this)},r.prototype.toString=function(){return this.source},r.prototype.exec=function(a,b){function c(a){function b(a){return a.split("").reverse().join("")}function c(a){return a.replace(/\\-/g,"-")}var d=b(a).split(/-(?!\\)/),e=o(d,b);return o(e,c).reverse()}var d=this.regexp.exec(a);if(!d)return null;b=b||{};var e,f,g,h=this.parameters(),i=h.length,j=this.segments.length-1,k={};if(j!==d.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");for(e=0;j>e;e++){g=h[e];var l=this.params[g],m=d[e+1];for(f=0;f<l.replace;f++)l.replace[f].from===m&&(m=l.replace[f].to);m&&l.array===!0&&(m=c(m)),k[g]=l.value(m)}for(;i>e;e++)g=h[e],k[g]=this.params[g].value(b[g]);return k},r.prototype.parameters=function(a){return H(a)?this.params[a]||null:this.$$paramNames},r.prototype.validates=function(a){return this.params.$$validates(a)},r.prototype.format=function(a){function b(a){return encodeURIComponent(a).replace(/-/g,function(a){return"%5C%"+a.charCodeAt(0).toString(16).toUpperCase()})}a=a||{};var c=this.segments,d=this.parameters(),e=this.params;if(!this.validates(a))return null;var f,g=!1,h=c.length-1,i=d.length,j=c[0];for(f=0;i>f;f++){var k=h>f,l=d[f],m=e[l],n=m.value(a[l]),p=m.isOptional&&m.type.equals(m.value(),n),q=p?m.squash:!1,r=m.type.encode(n);if(k){var s=c[f+1];if(q===!1)null!=r&&(j+=L(r)?o(r,b).join("-"):encodeURIComponent(r)),j+=s;else if(q===!0){var t=j.match(/\/$/)?/\/?(.*)/:/(.*)/;j+=s.match(t)[1]}else J(q)&&(j+=q+s)}else{if(null==r||p&&q!==!1)continue;L(r)||(r=[r]),r=o(r,encodeURIComponent).join("&"+l+"="),j+=(g?"&":"?")+(l+"="+r),g=!0}}return j},s.prototype.is=function(a,b){return!0},s.prototype.encode=function(a,b){return a},s.prototype.decode=function(a,b){return a},s.prototype.equals=function(a,b){return a==b},s.prototype.$subPattern=function(){var a=this.pattern.toString();return a.substr(1,a.length-2)},s.prototype.pattern=/.*/,s.prototype.toString=function(){return"{Type:"+this.name+"}"},s.prototype.$normalize=function(a){return this.is(a)?a:this.decode(a)},s.prototype.$asArray=function(a,b){function d(a,b){function d(a,b){return function(){return a[b].apply(a,arguments)}}function e(a){return L(a)?a:H(a)?[a]:[]}function f(a){switch(a.length){case 0:return c;case 1:return"auto"===b?a[0]:a;default:return a}}function g(a){return!a}function h(a,b){return function(c){c=e(c);var d=o(c,a);return b===!0?0===n(d,g).length:f(d)}}function i(a){return function(b,c){var d=e(b),f=e(c);if(d.length!==f.length)return!1;for(var g=0;g<d.length;g++)if(!a(d[g],f[g]))return!1;return!0}}this.encode=h(d(a,"encode")),this.decode=h(d(a,"decode")),this.is=h(d(a,"is"),!0),this.equals=i(d(a,"equals")),this.pattern=a.pattern,this.$normalize=h(d(a,"$normalize")),this.name=a.name,this.$arrayMode=b}if(!a)return this;if("auto"===a&&!b)throw new Error("'auto' array mode is for query parameters only");return new d(this,a)},b.module("ui.router.util").provider("$urlMatcherFactory",t),b.module("ui.router.util").run(["$urlMatcherFactory",function(a){}]),u.$inject=["$locationProvider","$urlMatcherFactoryProvider"],b.module("ui.router.router").provider("$urlRouter",u),v.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],b.module("ui.router.state").value("$stateParams",{}).provider("$state",v),w.$inject=[],b.module("ui.router.state").provider("$view",w),b.module("ui.router.state").provider("$uiViewScroll",x),y.$inject=["$state","$injector","$uiViewScroll","$interpolate"],z.$inject=["$compile","$controller","$state","$interpolate"],b.module("ui.router.state").directive("uiView",y),b.module("ui.router.state").directive("uiView",z),D.$inject=["$state","$timeout"],E.$inject=["$state","$stateParams","$interpolate"],b.module("ui.router.state").directive("uiSref",D).directive("uiSrefActive",E).directive("uiSrefActiveEq",E),F.$inject=["$state"],G.$inject=["$state"],b.module("ui.router.state").filter("isState",F).filter("includedByState",G)}(window,window.angular);;
!function(a,b){"use strict";angular.module("valdr",["ng"]).constant("valdrEvents",{revalidate:"valdr-revalidate"}).value("valdrConfig",{addFormGroupClass:!0}).value("valdrClasses",{formGroup:"form-group",valid:"ng-valid",invalid:"ng-invalid",dirty:"ng-dirty",pristine:"ng-pristine",touched:"ng-touched",untouched:"ng-untouched",invalidDirtyTouchedGroup:"valdr-invalid-dirty-touched-group"}),angular.module("valdr").factory("valdrUtil",[function(){var a=function(a){return-1===a.lastIndexOf(".")?a:a.substring(a.lastIndexOf(".")+1,a.length)},b=/[A-Z]/g,c=function(a){return a.replace(b,function(a,b){return(b?"-":"")+a.toLowerCase()})},d=function(b){if(angular.isString(b)){var d=a(b);return d=c(d),"valdr-"+d}return b};return{validatorNameToToken:d,isNaN:function(a){return this.isNumber(a)&&a!==+a},isNumber:function(a){var b=typeof a;return"number"===b||a&&"object"===b&&"[object Number]"===Object.prototype.toString.call(a)||!1},has:function(a,b){return a?Object.prototype.hasOwnProperty.call(a,b):!1},notEmpty:function(a){return this.isNaN(a)?!1:angular.isDefined(a)&&""!==a&&null!==a},isEmpty:function(a){return this.isNaN(a)?!1:!this.notEmpty(a)},startsWith:function(a,b){return angular.isString(a)&&angular.isString(b)&&0===a.lastIndexOf(b,0)}}}]),angular.module("valdr").factory("valdrRequiredValidator",["valdrUtil",function(a){return{name:"required",validate:function(b){return a.notEmpty(b)}}}]),angular.module("valdr").factory("valdrMinValidator",["valdrUtil",function(a){return{name:"min",validate:function(b,c){var d=Number(c.value),e=Number(b);return a.isNaN(b)?!1:a.isEmpty(b)||e>=d}}}]),angular.module("valdr").factory("valdrMaxValidator",["valdrUtil",function(a){return{name:"max",validate:function(b,c){var d=Number(c.value),e=Number(b);return a.isNaN(b)?!1:a.isEmpty(b)||d>=e}}}]),angular.module("valdr").factory("valdrSizeValidator",function(){return{name:"size",validate:function(a,b){var c=b.min||0,d=b.max;return a=a||"",a.length>=c&&(void 0===d||a.length<=d)}}}),angular.module("valdr").factory("valdrEmailValidator",["valdrUtil",function(a){var b=/^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;return{name:"email",validate:function(c){return a.isEmpty(c)||b.test(c)}}}]),angular.module("valdr").factory("valdrUrlValidator",["valdrUtil",function(a){var b=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;return{name:"url",validate:function(c){return a.isEmpty(c)||b.test(c)}}}]),angular.module("valdr").factory("valdrDigitsValidator",["valdrUtil",function(a){var b=new RegExp("[^.\\d]","g"),c=function(a){return Number(a).toString().replace(b,"")},d=function(a,b){return a?a.length<=b:!0},e=function(a,b){var e,f,g=b.integer,h=b.fraction;return e=c(a),f=e.split("."),d(f[0],g)&&d(f[1],h)};return{name:"digits",validate:function(b,c){return a.isEmpty(b)?!0:a.isNaN(Number(b))?!1:e(b,c)}}}]),angular.module("valdr").factory("futureAndPastSharedValidator",["valdrUtil",function(a){var b=["D-M-YYYY","D.M.YYYY","D/M/YYYY","D. M. YYYY","YYYY.M.D"];return{validate:function(c,d){var e,f=moment();if(a.isEmpty(c))return!0;e=moment(c);for(var g=0;g<b.length&&!e.isValid();g++)e=moment(c,b[g],!0);return e.isValid()&&d(e,f)}}}]),angular.module("valdr").factory("valdrPastValidator",["futureAndPastSharedValidator",function(a){return{name:"past",validate:function(b){return a.validate(b,function(a,b){return a.isBefore(b)})}}}]),angular.module("valdr").factory("valdrFutureValidator",["futureAndPastSharedValidator",function(a){return{name:"future",validate:function(b){return a.validate(b,function(a,b){return a.isAfter(b)})}}}]),angular.module("valdr").factory("valdrPatternValidator",["valdrUtil",function(a){var b=/^\/(.*)\/([gim]*)$/,c=function(a){var c;if(a.test)return a;if(c=a.match(b))return new RegExp(c[1],c[2]);throw"Expected "+a+" to be a RegExp"};return{name:"pattern",validate:function(b,d){var e=c(d.value);return a.isEmpty(b)||e.test(b)}}}]),angular.module("valdr").factory("valdrMinLengthValidator",["valdrUtil",function(a){return{name:"minLength",validate:function(b,c){var d=c.number;return a.isEmpty(b)?0===d:"string"==typeof b?b.length>=d:!1}}}]),angular.module("valdr").factory("valdrMaxLengthValidator",["valdrUtil",function(a){return{name:"maxLength",validate:function(b,c){var d=c.number;return a.isEmpty(b)?!0:"string"==typeof b?b.length<=d:!1}}}]),angular.module("valdr").factory("valdrHibernateEmailValidator",["valdrUtil",function(a){var b="[a-z0-9!#$%&'*+/=?^_`{|}~-]",c="^"+b+"+(\\."+b+"+)*$",d="^\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\]$",e=new RegExp("^"+b+"+(\\."+b+"+)*$","i"),f=new RegExp(c+"|"+d,"i");return{name:"hibernateEmail",validate:function(b){if(a.isEmpty(b))return!0;var c=b.split("@");return 2!==c.length?!1:e.test(c[0])?f.test(c[1]):!1}}}]),angular.module("valdr").provider("valdr",function(){var a,b,c={},d={},e={},f=["valdrRequiredValidator","valdrSizeValidator","valdrMinLengthValidator","valdrMaxLengthValidator","valdrMinValidator","valdrMaxValidator","valdrEmailValidator","valdrUrlValidator","valdrDigitsValidator","valdrFutureValidator","valdrPastValidator","valdrPatternValidator","valdrHibernateEmailValidator"],g=function(a){angular.extend(c,a)};this.addConstraints=g;var h=function(a){angular.isArray(a)?angular.forEach(a,function(a){delete c[a]}):angular.isString(a)&&delete c[a]};this.removeConstraints=h,this.setConstraintUrl=function(b){a=b},this.addValidator=function(a){f.push(a)},this.addConstraintAlias=function(a,b){angular.isArray(e[a])||(e[a]=[]),e[a].push(b)},this.$get=["$log","$injector","$rootScope","$http","valdrEvents","valdrUtil","valdrClasses",function(i,j,k,l,m,n,o){angular.forEach(f,function(a){var b=j.get(a);d[b.name]=b,angular.isArray(e[b.name])&&angular.forEach(e[b.name],function(a){d[a]=b})}),a&&(b=!0,l.get(a).then(function(a){b=!1,g(a.data),k.$broadcast(m.revalidate)})["finally"](function(){b=!1}));var p=function(a){return n.has(c,a)?c[a]:void(b||i.warn("No constraints for type '"+a+"' available."))};return{validate:function(a,b,c){var e={valid:!0},f=p(a);if(n.has(f,b)){var g=f[b],h=!0,j=[],k=[];return angular.forEach(g,function(f,g){var l=d[g];if(angular.isUndefined(l))return i.warn("No validator defined for '"+g+"'. Can not validate field '"+b+"'"),e;var m=l.validate(c,f),n={valid:m,value:c,field:b,type:a,validator:g};angular.extend(n,f),j.push(n),m||k.push(n),h=h&&m}),{valid:h,violations:0===k.length?void 0:k,validationResults:0===j.length?void 0:j}}return e},addConstraints:function(a){g(a),k.$broadcast(m.revalidate)},removeConstraints:function(a){h(a),k.$broadcast(m.revalidate)},getConstraints:function(){return c},setClasses:function(a){angular.extend(o,a),k.$broadcast(m.revalidate)}}}]});var c=["valdrClasses","valdrConfig",function(a,b){return{restrict:"EA",link:function(c,d){b.addFormGroupClass&&d.addClass(a.formGroup)},controller:["$scope","$element",function(b,c){var d=[],e={},f=function(){var a={invalidDirtyTouchedGroup:!1,valid:!0,itemStates:[]};return angular.forEach(d,function(b){b.$touched&&b.$dirty&&b.$invalid&&(a.invalidDirtyTouchedGroup=!0),b.$invalid&&(a.valid=!1);var c={name:b.$name,touched:b.$touched,dirty:b.$dirty,valid:b.$valid};a.itemStates.push(c)}),a},g=function(b){c.toggleClass(a.invalidDirtyTouchedGroup,b.invalidDirtyTouchedGroup),c.toggleClass(a.valid,b.valid),c.toggleClass(a.invalid,!b.valid),angular.forEach(b.itemStates,function(b){var c=e[b.name];c&&(c.toggleClass(a.valid,b.valid),c.toggleClass(a.invalid,!b.valid),c.toggleClass(a.dirty,b.dirty),c.toggleClass(a.pristine,!b.dirty),c.toggleClass(a.touched,b.touched),c.toggleClass(a.untouched,!b.touched))})};b.$watch(f,g,!0),this.addFormItem=function(a){d.push(a)},this.removeFormItem=function(a){var b=d.indexOf(a);b>=0&&d.splice(b,1)},this.addMessageElement=function(a,b){c.append(b),e[a.$name]=b},this.removeMessageElement=function(a){e[a.$name].remove()}}]}}];angular.module("valdr").directive("valdrFormGroup",c),angular.module("valdr").directive("valdrType",function(){return{priority:1,controller:["$attrs",function(a){this.getType=function(){return a.valdrType}}]}});var d={isEnabled:function(){return!0}},e={addFormItem:angular.noop,removeFormItem:angular.noop},f=function(a){return["valdrEvents","valdr","valdrUtil",function(b,c,f){return{restrict:a,require:["?^valdrType","?^ngModel","?^valdrFormGroup","?^valdrEnabled"],link:function(a,g,h,i){var j=i[0],k=i[1],l=i[2]||e,m=i[3]||d,n=h.valdrNoValidate,o=h.name;if(j&&k&&!angular.isDefined(n)){if(l.addFormItem(k),f.isEmpty(o))throw new Error('Form element with ID "'+h.id+'" is not bound to a field name.');var p=function(a){if(m.isEnabled()){var b=["valdr"];angular.forEach(a.validationResults,function(a){var c=f.validatorNameToToken(a.validator);k.$setValidity(c,a.valid),b.push(c)}),k.$setValidity("valdr",a.valid),k.valdrViolations=a.violations,angular.forEach(k.$error,function(a,c){-1===b.indexOf(c)&&f.startsWith(c,"valdr")&&k.$setValidity(c,!0)})}else angular.forEach(k.$error,function(a,b){f.startsWith(b,"valdr")&&k.$setValidity(b,!0)}),k.valdrViolations=void 0},q=function(a){var b=c.validate(j.getType(),o,a);return p(b),m.isEnabled()?b.valid:!0};k.$validators.valdr=q,a.$on(b.revalidate,function(){q(k.$modelValue)}),a.$on("$destroy",function(){l.removeFormItem(k)})}}}}]},g=f("E"),h=f("A");angular.module("valdr").directive("input",g).directive("select",g).directive("textarea",g).directive("enableValdrValidation",h),angular.module("valdr").directive("valdrEnabled",["valdrEvents",function(a){return{controller:["$scope","$attrs",function(b,c){b.$watch(c.valdrEnabled,function(){b.$broadcast(a.revalidate)}),this.isEnabled=function(){var a=b.$eval(c.valdrEnabled);return void 0===a?!0:a}}]}}])}(window,document);;
!function(a,b){"use strict";angular.module("valdr").provider("valdrMessage",function(){var a,b,c={},d="valdr/default-message.html",e='<div class="valdr-message">{{ violation.message }}</div>',f='<div class="valdr-message" ng-show="violation"><span translate="{{ violation.message }}" translate-values="violation"></span></div>';this.setTemplate=function(a){b=a},this.setTemplateUrl=function(b){a=b},this.addMessages=function(a){angular.extend(c,a)};var g=this.addMessages;this.getMessage=function(a,b,d){var e=a+"."+b+"."+d;return c[e]||c[d]||"["+d+"]"};var h=this.getMessage;this.$get=["$templateCache","$injector",function(c,i){function j(){try{return i.get("$translate")}catch(a){return void 0}}function k(){try{return i.get("valdrFieldNameKeyGenerator")}catch(a){return function(a){return a.type+"."+a.field}}}function l(){return angular.isDefined(b)?b:p?f:e}function m(){c.put(d,l()),a&&b&&c.put(a,b)}var n=!1,o=j(),p=angular.isDefined(o),q=k();return m(),{templateUrl:a||d,setTemplate:function(a){b=a,m()},translateAvailable:p,$translate:o,fieldNameKeyGenerator:q,addMessages:g,getMessage:h,angularMessagesEnabled:n}}]});var c=function(a){return["$compile",function(b){return{restrict:a,require:["?^valdrType","?^ngModel","?^valdrFormGroup"],link:function(a,c,d,e){var f=e[0],g=e[1],h=e[2],i=d.valdrNoValidate,j=d.valdrNoMessage,k=d.name;if(f&&h&&g&&!angular.isDefined(i)&&!angular.isDefined(j)){var l=angular.element('<span valdr-message="'+k+'"></span>');b(l)(a),h.addMessageElement(g,l),a.$on("$destroy",function(){h.removeMessageElement(g)})}}}}]},d=c("E"),e=c("A"),f={getType:angular.noop};angular.module("valdr").directive("input",d).directive("select",d).directive("textarea",d).directive("enableValdrMessage",e).directive("valdrMessage",["$rootScope","$injector","valdrMessage","valdrUtil",function(a,b,c,d){return{replace:!0,restrict:"A",scope:{formFieldName:"@valdrMessage"},templateUrl:function(){return c.templateUrl},require:["^form","?^valdrType"],link:function(b,e,g,h){var i=h[0],j=h[1]||f,k=function(){c.translateAvailable&&angular.isArray(b.violations)&&angular.forEach(b.violations,function(a){c.$translate(c.fieldNameKeyGenerator(a)).then(function(b){a.fieldName=b})})},l=function(a){var d=j.getType(),e=b.formFieldName;return{type:d,field:e,validator:a,message:c.getMessage(d,e,a)}},m=function(){b.violations=[],angular.forEach(b.formField.valdrViolations,function(a){b.violations.push(a)}),c.angularMessagesEnabled&&angular.forEach(b.formField.$error,function(a,c){d.startsWith(c,"valdr")||b.violations.push(l(c))}),b.violation=b.violations[0],k()},n=function(){b.violations=void 0,b.violation=void 0},o=function(){return b.formField=i[b.formFieldName],b.formField?{valdr:b.formField.valdrViolations,$error:b.formField.$error}:void 0};b.$watch(o,function(){b.formField&&b.formField.$invalid?m():n()},!0),a.$on("$translateChangeSuccess",function(){k()})}}}])}(window,document);;
/**
 * @license
 * lodash 3.10.0 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash modern -o ./lodash.js`
 */
;(function(){function n(n,t){if(n!==t){var r=null===n,e=n===w,u=n===n,o=null===t,i=t===w,f=t===t;if(n>t&&!o||!u||r&&!i&&f||e&&f)return 1;if(n<t&&!r||!f||o&&!e&&u||i&&u)return-1}return 0}function t(n,t,r){for(var e=n.length,u=r?e:-1;r?u--:++u<e;)if(t(n[u],u,n))return u;return-1}function r(n,t,r){if(t!==t)return p(n,r);r-=1;for(var e=n.length;++r<e;)if(n[r]===t)return r;return-1}function e(n){return typeof n=="function"||false}function u(n){return null==n?"":n+""}function o(n,t){for(var r=-1,e=n.length;++r<e&&-1<t.indexOf(n.charAt(r)););
return r}function i(n,t){for(var r=n.length;r--&&-1<t.indexOf(n.charAt(r)););return r}function f(t,r){return n(t.a,r.a)||t.b-r.b}function a(n){return Nn[n]}function c(n){return Tn[n]}function l(n,t,r){return t?n=Bn[n]:r&&(n=Dn[n]),"\\"+n}function s(n){return"\\"+Dn[n]}function p(n,t,r){var e=n.length;for(t+=r?0:-1;r?t--:++t<e;){var u=n[t];if(u!==u)return t}return-1}function h(n){return!!n&&typeof n=="object"}function _(n){return 160>=n&&9<=n&&13>=n||32==n||160==n||5760==n||6158==n||8192<=n&&(8202>=n||8232==n||8233==n||8239==n||8287==n||12288==n||65279==n);
}function v(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;)n[r]===t&&(n[r]=z,o[++u]=r);return o}function g(n){for(var t=-1,r=n.length;++t<r&&_(n.charCodeAt(t)););return t}function y(n){for(var t=n.length;t--&&_(n.charCodeAt(t)););return t}function d(n){return Ln[n]}function m(_){function Nn(n){if(h(n)&&!(Oo(n)||n instanceof zn)){if(n instanceof Ln)return n;if(nu.call(n,"__chain__")&&nu.call(n,"__wrapped__"))return Mr(n)}return new Ln(n)}function Tn(){}function Ln(n,t,r){this.__wrapped__=n,this.__actions__=r||[],
this.__chain__=!!t}function zn(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=false,this.__iteratees__=[],this.__takeCount__=Ru,this.__views__=[]}function Bn(){this.__data__={}}function Dn(n){var t=n?n.length:0;for(this.data={hash:gu(null),set:new lu};t--;)this.push(n[t])}function Mn(n,t){var r=n.data;return(typeof t=="string"||ge(t)?r.set.has(t):r.hash[t])?0:-1}function qn(n,t){var r=-1,e=n.length;for(t||(t=Be(e));++r<e;)t[r]=n[r];return t}function Pn(n,t){for(var r=-1,e=n.length;++r<e&&false!==t(n[r],r,n););
return n}function Kn(n,t){for(var r=-1,e=n.length;++r<e;)if(!t(n[r],r,n))return false;return true}function Vn(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;){var i=n[r];t(i,r,n)&&(o[++u]=i)}return o}function Gn(n,t){for(var r=-1,e=n.length,u=Be(e);++r<e;)u[r]=t(n[r],r,n);return u}function Jn(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function Xn(n,t,r,e){var u=-1,o=n.length;for(e&&o&&(r=n[++u]);++u<o;)r=t(r,n[u],u,n);return r}function Hn(n,t){for(var r=-1,e=n.length;++r<e;)if(t(n[r],r,n))return true;
return false}function Qn(n,t,r,e){return n!==w&&nu.call(e,r)?n:t}function nt(n,t,r){for(var e=-1,u=zo(t),o=u.length;++e<o;){var i=u[e],f=n[i],a=r(f,t[i],i,n,t);(a===a?a===f:f!==f)&&(f!==w||i in n)||(n[i]=a)}return n}function tt(n,t){return null==t?n:et(t,zo(t),n)}function rt(n,t){for(var r=-1,e=null==n,u=!e&&Er(n),o=u?n.length:0,i=t.length,f=Be(i);++r<i;){var a=t[r];f[r]=u?Cr(a,o)?n[a]:w:e?w:n[a]}return f}function et(n,t,r){r||(r={});for(var e=-1,u=t.length;++e<u;){var o=t[e];r[o]=n[o]}return r}function ut(n,t,r){
var e=typeof n;return"function"==e?t===w?n:Bt(n,t,r):null==n?Fe:"object"==e?bt(n):t===w?ze(n):xt(n,t)}function ot(n,t,r,e,u,o,i){var f;if(r&&(f=u?r(n,e,u):r(n)),f!==w)return f;if(!ge(n))return n;if(e=Oo(n)){if(f=kr(n),!t)return qn(n,f)}else{var a=ru.call(n),c=a==K;if(a!=Z&&a!=B&&(!c||u))return Fn[a]?Rr(n,a,t):u?n:{};if(f=Ir(c?{}:n),!t)return tt(f,n)}for(o||(o=[]),i||(i=[]),u=o.length;u--;)if(o[u]==n)return i[u];return o.push(n),i.push(f),(e?Pn:_t)(n,function(e,u){f[u]=ot(e,t,r,u,n,o,i)}),f}function it(n,t,r){
if(typeof n!="function")throw new Ge(L);return su(function(){n.apply(w,r)},t)}function ft(n,t){var e=n?n.length:0,u=[];if(!e)return u;var o=-1,i=xr(),f=i==r,a=f&&t.length>=F&&gu&&lu?new Dn(t):null,c=t.length;a&&(i=Mn,f=false,t=a);n:for(;++o<e;)if(a=n[o],f&&a===a){for(var l=c;l--;)if(t[l]===a)continue n;u.push(a)}else 0>i(t,a,0)&&u.push(a);return u}function at(n,t){var r=true;return Su(n,function(n,e,u){return r=!!t(n,e,u)}),r}function ct(n,t,r,e){var u=e,o=u;return Su(n,function(n,i,f){i=+t(n,i,f),(r(i,u)||i===e&&i===o)&&(u=i,
o=n)}),o}function lt(n,t){var r=[];return Su(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function st(n,t,r,e){var u;return r(n,function(n,r,o){return t(n,r,o)?(u=e?r:n,false):void 0}),u}function pt(n,t,r,e){e||(e=[]);for(var u=-1,o=n.length;++u<o;){var i=n[u];h(i)&&Er(i)&&(r||Oo(i)||pe(i))?t?pt(i,t,r,e):Jn(e,i):r||(e[e.length]=i)}return e}function ht(n,t){Nu(n,t,Re)}function _t(n,t){return Nu(n,t,zo)}function vt(n,t){return Tu(n,t,zo)}function gt(n,t){for(var r=-1,e=t.length,u=-1,o=[];++r<e;){var i=t[r];
ve(n[i])&&(o[++u]=i)}return o}function yt(n,t,r){if(null!=n){r!==w&&r in Br(n)&&(t=[r]),r=0;for(var e=t.length;null!=n&&r<e;)n=n[t[r++]];return r&&r==e?n:w}}function dt(n,t,r,e,u,o){if(n===t)n=true;else if(null==n||null==t||!ge(n)&&!h(t))n=n!==n&&t!==t;else n:{var i=dt,f=Oo(n),a=Oo(t),c=D,l=D;f||(c=ru.call(n),c==B?c=Z:c!=Z&&(f=xe(n))),a||(l=ru.call(t),l==B?l=Z:l!=Z&&xe(t));var s=c==Z,a=l==Z,l=c==l;if(!l||f||s){if(!e&&(c=s&&nu.call(n,"__wrapped__"),a=a&&nu.call(t,"__wrapped__"),c||a)){n=i(c?n.value():n,a?t.value():t,r,e,u,o);
break n}if(l){for(u||(u=[]),o||(o=[]),c=u.length;c--;)if(u[c]==n){n=o[c]==t;break n}u.push(n),o.push(t),n=(f?yr:mr)(n,t,i,r,e,u,o),u.pop(),o.pop()}else n=false}else n=dr(n,t,c)}return n}function mt(n,t,r){var e=t.length,u=e,o=!r;if(null==n)return!u;for(n=Br(n);e--;){var i=t[e];if(o&&i[2]?i[1]!==n[i[0]]:!(i[0]in n))return false}for(;++e<u;){var i=t[e],f=i[0],a=n[f],c=i[1];if(o&&i[2]){if(a===w&&!(f in n))return false}else if(i=r?r(a,c,f):w,i===w?!dt(c,a,r,true):!i)return false}return true}function wt(n,t){var r=-1,e=Er(n)?Be(n.length):[];
return Su(n,function(n,u,o){e[++r]=t(n,u,o)}),e}function bt(n){var t=Ar(n);if(1==t.length&&t[0][2]){var r=t[0][0],e=t[0][1];return function(n){return null==n?false:n[r]===e&&(e!==w||r in Br(n))}}return function(n){return mt(n,t)}}function xt(n,t){var r=Oo(n),e=Wr(n)&&t===t&&!ge(t),u=n+"";return n=Dr(n),function(o){if(null==o)return false;var i=u;if(o=Br(o),!(!r&&e||i in o)){if(o=1==n.length?o:yt(o,Et(n,0,-1)),null==o)return false;i=Zr(n),o=Br(o)}return o[i]===t?t!==w||i in o:dt(t,o[i],w,true)}}function At(n,t,r,e,u){
if(!ge(n))return n;var o=Er(t)&&(Oo(t)||xe(t)),i=o?w:zo(t);return Pn(i||t,function(f,a){if(i&&(a=f,f=t[a]),h(f)){e||(e=[]),u||(u=[]);n:{for(var c=a,l=e,s=u,p=l.length,_=t[c];p--;)if(l[p]==_){n[c]=s[p];break n}var p=n[c],v=r?r(p,_,c,n,t):w,g=v===w;g&&(v=_,Er(_)&&(Oo(_)||xe(_))?v=Oo(p)?p:Er(p)?qn(p):[]:me(_)||pe(_)?v=pe(p)?ke(p):me(p)?p:{}:g=false),l.push(_),s.push(v),g?n[c]=At(v,_,r,l,s):(v===v?v!==p:p===p)&&(n[c]=v)}}else c=n[a],l=r?r(c,f,a,n,t):w,(s=l===w)&&(l=f),l===w&&(!o||a in n)||!s&&(l===l?l===c:c!==c)||(n[a]=l);
}),n}function jt(n){return function(t){return null==t?w:t[n]}}function kt(n){var t=n+"";return n=Dr(n),function(r){return yt(r,n,t)}}function It(n,t){for(var r=n?t.length:0;r--;){var e=t[r];if(e!=u&&Cr(e)){var u=e;pu.call(n,e,1)}}}function Rt(n,t){return n+yu(ku()*(t-n+1))}function Ot(n,t,r,e,u){return u(n,function(n,u,o){r=e?(e=false,n):t(r,n,u,o)}),r}function Et(n,t,r){var e=-1,u=n.length;for(t=null==t?0:+t||0,0>t&&(t=-t>u?0:u+t),r=r===w||r>u?u:+r||0,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Be(u);++e<u;)r[e]=n[e+t];
return r}function Ct(n,t){var r;return Su(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function Ut(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].c;return n}function Wt(t,r,e){var u=wr(),o=-1;return r=Gn(r,function(n){return u(n)}),t=wt(t,function(n){return{a:Gn(r,function(t){return t(n)}),b:++o,c:n}}),Ut(t,function(t,r){var u;n:{for(var o=-1,i=t.a,f=r.a,a=i.length,c=e.length;++o<a;)if(u=n(i[o],f[o])){if(o>=c)break n;o=e[o],u*="asc"===o||true===o?1:-1;break n}u=t.b-r.b}return u})}function $t(n,t){
var r=0;return Su(n,function(n,e,u){r+=+t(n,e,u)||0}),r}function St(n,t){var e=-1,u=xr(),o=n.length,i=u==r,f=i&&o>=F,a=f&&gu&&lu?new Dn(void 0):null,c=[];a?(u=Mn,i=false):(f=false,a=t?[]:c);n:for(;++e<o;){var l=n[e],s=t?t(l,e,n):l;if(i&&l===l){for(var p=a.length;p--;)if(a[p]===s)continue n;t&&a.push(s),c.push(l)}else 0>u(a,s,0)&&((t||f)&&a.push(s),c.push(l))}return c}function Ft(n,t){for(var r=-1,e=t.length,u=Be(e);++r<e;)u[r]=n[t[r]];return u}function Nt(n,t,r,e){for(var u=n.length,o=e?u:-1;(e?o--:++o<u)&&t(n[o],o,n););
return r?Et(n,e?0:o,e?o+1:u):Et(n,e?o+1:0,e?u:o)}function Tt(n,t){var r=n;r instanceof zn&&(r=r.value());for(var e=-1,u=t.length;++e<u;)var o=t[e],r=o.func.apply(o.thisArg,Jn([r],o.args));return r}function Lt(n,t,r){var e=0,u=n?n.length:e;if(typeof t=="number"&&t===t&&u<=Eu){for(;e<u;){var o=e+u>>>1,i=n[o];(r?i<=t:i<t)&&null!==i?e=o+1:u=o}return u}return zt(n,t,Fe,r)}function zt(n,t,r,e){t=r(t);for(var u=0,o=n?n.length:0,i=t!==t,f=null===t,a=t===w;u<o;){var c=yu((u+o)/2),l=r(n[c]),s=l!==w,p=l===l;
(i?p||e:f?p&&s&&(e||null!=l):a?p&&(e||s):null==l?0:e?l<=t:l<t)?u=c+1:o=c}return xu(o,Ou)}function Bt(n,t,r){if(typeof n!="function")return Fe;if(t===w)return n;switch(r){case 1:return function(r){return n.call(t,r)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,o){return n.call(t,r,e,u,o)};case 5:return function(r,e,u,o,i){return n.call(t,r,e,u,o,i)}}return function(){return n.apply(t,arguments)}}function Dt(n){var t=new ou(n.byteLength);return new hu(t).set(new hu(n)),
t}function Mt(n,t,r){for(var e=r.length,u=-1,o=bu(n.length-e,0),i=-1,f=t.length,a=Be(f+o);++i<f;)a[i]=t[i];for(;++u<e;)a[r[u]]=n[u];for(;o--;)a[i++]=n[u++];return a}function qt(n,t,r){for(var e=-1,u=r.length,o=-1,i=bu(n.length-u,0),f=-1,a=t.length,c=Be(i+a);++o<i;)c[o]=n[o];for(i=o;++f<a;)c[i+f]=t[f];for(;++e<u;)c[i+r[e]]=n[o++];return c}function Pt(n,t){return function(r,e,u){var o=t?t():{};if(e=wr(e,u,3),Oo(r)){u=-1;for(var i=r.length;++u<i;){var f=r[u];n(o,f,e(f,u,r),r)}}else Su(r,function(t,r,u){
n(o,t,e(t,r,u),u)});return o}}function Kt(n){return le(function(t,r){var e=-1,u=null==t?0:r.length,o=2<u?r[u-2]:w,i=2<u?r[2]:w,f=1<u?r[u-1]:w;for(typeof o=="function"?(o=Bt(o,f,5),u-=2):(o=typeof f=="function"?f:w,u-=o?1:0),i&&Ur(r[0],r[1],i)&&(o=3>u?w:o,u=1);++e<u;)(i=r[e])&&n(t,i,o);return t})}function Vt(n,t){return function(r,e){var u=r?Bu(r):0;if(!Sr(u))return n(r,e);for(var o=t?u:-1,i=Br(r);(t?o--:++o<u)&&false!==e(i[o],o,i););return r}}function Zt(n){return function(t,r,e){var u=Br(t);e=e(t);for(var o=e.length,i=n?o:-1;n?i--:++i<o;){
var f=e[i];if(false===r(u[f],f,u))break}return t}}function Yt(n,t){function r(){return(this&&this!==Zn&&this instanceof r?e:n).apply(t,arguments)}var e=Jt(n);return r}function Gt(n){return function(t){var r=-1;t=$e(Ce(t));for(var e=t.length,u="";++r<e;)u=n(u,t[r],r);return u}}function Jt(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:
return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=$u(n.prototype),t=n.apply(r,t);return ge(t)?t:r}}function Xt(n){function t(r,e,u){return u&&Ur(r,e,u)&&(e=w),r=gr(r,n,w,w,w,w,w,e),r.placeholder=t.placeholder,r}return t}function Ht(n,t){return le(function(r){var e=r[0];return null==e?e:(r.push(t),n.apply(w,r))})}function Qt(n,t){return function(r,e,u){if(u&&Ur(r,e,u)&&(e=w),e=wr(e,u,3),1==e.length){
u=r=Oo(r)?r:zr(r);for(var o=e,i=-1,f=u.length,a=t,c=a;++i<f;){var l=u[i],s=+o(l);n(s,a)&&(a=s,c=l)}if(u=c,!r.length||u!==t)return u}return ct(r,e,n,t)}}function nr(n,r){return function(e,u,o){return u=wr(u,o,3),Oo(e)?(u=t(e,u,r),-1<u?e[u]:w):st(e,u,n)}}function tr(n){return function(r,e,u){return r&&r.length?(e=wr(e,u,3),t(r,e,n)):-1}}function rr(n){return function(t,r,e){return r=wr(r,e,3),st(t,r,n,true)}}function er(n){return function(){for(var t,r=arguments.length,e=n?r:-1,u=0,o=Be(r);n?e--:++e<r;){
var i=o[u++]=arguments[e];if(typeof i!="function")throw new Ge(L);!t&&Ln.prototype.thru&&"wrapper"==br(i)&&(t=new Ln([],true))}for(e=t?-1:r;++e<r;){var i=o[e],u=br(i),f="wrapper"==u?zu(i):w;t=f&&$r(f[0])&&f[1]==(E|k|R|C)&&!f[4].length&&1==f[9]?t[br(f[0])].apply(t,f[3]):1==i.length&&$r(i)?t[u]():t.thru(i)}return function(){var n=arguments,e=n[0];if(t&&1==n.length&&Oo(e)&&e.length>=F)return t.plant(e).value();for(var u=0,n=r?o[u].apply(this,n):e;++u<r;)n=o[u].call(this,n);return n}}}function ur(n,t){
return function(r,e,u){return typeof e=="function"&&u===w&&Oo(r)?n(r,e):t(r,Bt(e,u,3))}}function or(n){return function(t,r,e){return(typeof r!="function"||e!==w)&&(r=Bt(r,e,3)),n(t,r,Re)}}function ir(n){return function(t,r,e){return(typeof r!="function"||e!==w)&&(r=Bt(r,e,3)),n(t,r)}}function fr(n){return function(t,r,e){var u={};return r=wr(r,e,3),_t(t,function(t,e,o){o=r(t,e,o),e=n?o:e,t=n?t:o,u[e]=t}),u}}function ar(n){return function(t,r,e){return t=u(t),(n?t:"")+pr(t,r,e)+(n?"":t)}}function cr(n){
var t=le(function(r,e){var u=v(e,t.placeholder);return gr(r,n,w,e,u)});return t}function lr(n,t){return function(r,e,u,o){var i=3>arguments.length;return typeof e=="function"&&o===w&&Oo(r)?n(r,e,u,i):Ot(r,wr(e,o,4),u,i,t)}}function sr(n,t,r,e,u,o,i,f,a,c){function l(){for(var m=arguments.length,b=m,j=Be(m);b--;)j[b]=arguments[b];if(e&&(j=Mt(j,e,u)),o&&(j=qt(j,o,i)),_||y){var b=l.placeholder,k=v(j,b),m=m-k.length;if(m<c){var I=f?qn(f):w,m=bu(c-m,0),E=_?k:w,k=_?w:k,C=_?j:w,j=_?w:j;return t|=_?R:O,t&=~(_?O:R),
g||(t&=~(x|A)),j=[n,t,r,C,E,j,k,I,a,m],I=sr.apply(w,j),$r(n)&&Du(I,j),I.placeholder=b,I}}if(b=p?r:this,I=h?b[n]:n,f)for(m=j.length,E=xu(f.length,m),k=qn(j);E--;)C=f[E],j[E]=Cr(C,m)?k[C]:w;return s&&a<j.length&&(j.length=a),this&&this!==Zn&&this instanceof l&&(I=d||Jt(n)),I.apply(b,j)}var s=t&E,p=t&x,h=t&A,_=t&k,g=t&j,y=t&I,d=h?w:Jt(n);return l}function pr(n,t,r){return n=n.length,t=+t,n<t&&mu(t)?(t-=n,r=null==r?" ":r+"",Ue(r,vu(t/r.length)).slice(0,t)):""}function hr(n,t,r,e){function u(){for(var t=-1,f=arguments.length,a=-1,c=e.length,l=Be(c+f);++a<c;)l[a]=e[a];
for(;f--;)l[a++]=arguments[++t];return(this&&this!==Zn&&this instanceof u?i:n).apply(o?r:this,l)}var o=t&x,i=Jt(n);return u}function _r(n){var t=Pe[n];return function(n,r){return(r=r===w?0:+r||0)?(r=au(10,r),t(n*r)/r):t(n)}}function vr(n){return function(t,r,e,u){var o=wr(e);return null==e&&o===ut?Lt(t,r,n):zt(t,r,o(e,u,1),n)}}function gr(n,t,r,e,u,o,i,f){var a=t&A;if(!a&&typeof n!="function")throw new Ge(L);var c=e?e.length:0;if(c||(t&=~(R|O),e=u=w),c-=u?u.length:0,t&O){var l=e,s=u;e=u=w}var p=a?w:zu(n);
return r=[n,t,r,e,u,l,s,o,i,f],p&&(e=r[1],t=p[1],f=e|t,u=t==E&&e==k||t==E&&e==C&&r[7].length<=p[8]||t==(E|C)&&e==k,(f<E||u)&&(t&x&&(r[2]=p[2],f|=e&x?0:j),(e=p[3])&&(u=r[3],r[3]=u?Mt(u,e,p[4]):qn(e),r[4]=u?v(r[3],z):qn(p[4])),(e=p[5])&&(u=r[5],r[5]=u?qt(u,e,p[6]):qn(e),r[6]=u?v(r[5],z):qn(p[6])),(e=p[7])&&(r[7]=qn(e)),t&E&&(r[8]=null==r[8]?p[8]:xu(r[8],p[8])),null==r[9]&&(r[9]=p[9]),r[0]=p[0],r[1]=f),t=r[1],f=r[9]),r[9]=null==f?a?0:n.length:bu(f-c,0)||0,(p?Lu:Du)(t==x?Yt(r[0],r[2]):t!=R&&t!=(x|R)||r[4].length?sr.apply(w,r):hr.apply(w,r),r);
}function yr(n,t,r,e,u,o,i){var f=-1,a=n.length,c=t.length;if(a!=c&&(!u||c<=a))return false;for(;++f<a;){var l=n[f],c=t[f],s=e?e(u?c:l,u?l:c,f):w;if(s!==w){if(s)continue;return false}if(u){if(!Hn(t,function(n){return l===n||r(l,n,e,u,o,i)}))return false}else if(l!==c&&!r(l,c,e,u,o,i))return false}return true}function dr(n,t,r){switch(r){case M:case q:return+n==+t;case P:return n.name==t.name&&n.message==t.message;case V:return n!=+n?t!=+t:n==+t;case Y:case G:return n==t+""}return false}function mr(n,t,r,e,u,o,i){var f=zo(n),a=f.length,c=zo(t).length;
if(a!=c&&!u)return false;for(c=a;c--;){var l=f[c];if(!(u?l in t:nu.call(t,l)))return false}for(var s=u;++c<a;){var l=f[c],p=n[l],h=t[l],_=e?e(u?h:p,u?p:h,l):w;if(_===w?!r(p,h,e,u,o,i):!_)return false;s||(s="constructor"==l)}return s||(r=n.constructor,e=t.constructor,!(r!=e&&"constructor"in n&&"constructor"in t)||typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)?true:false}function wr(n,t,r){var e=Nn.callback||Se,e=e===Se?ut:e;return r?e(n,t,r):e}function br(n){for(var t=n.name,r=Wu[t],e=r?r.length:0;e--;){
var u=r[e],o=u.func;if(null==o||o==n)return u.name}return t}function xr(n,t,e){var u=Nn.indexOf||Vr,u=u===Vr?r:u;return n?u(n,t,e):u}function Ar(n){n=Oe(n);for(var t=n.length;t--;){var r=n[t][1];n[t][2]=r===r&&!ge(r)}return n}function jr(n,t){var r=null==n?w:n[t];return ye(r)?r:w}function kr(n){var t=n.length,r=new n.constructor(t);return t&&"string"==typeof n[0]&&nu.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function Ir(n){return n=n.constructor,typeof n=="function"&&n instanceof n||(n=Ve),
new n}function Rr(n,t,r){var e=n.constructor;switch(t){case J:return Dt(n);case M:case q:return new e(+n);case X:case H:case Q:case nn:case tn:case rn:case en:case un:case on:return t=n.buffer,new e(r?Dt(t):t,n.byteOffset,n.length);case V:case G:return new e(n);case Y:var u=new e(n.source,kn.exec(n));u.lastIndex=n.lastIndex}return u}function Or(n,t,r){return null==n||Wr(t,n)||(t=Dr(t),n=1==t.length?n:yt(n,Et(t,0,-1)),t=Zr(t)),t=null==n?n:n[t],null==t?w:t.apply(n,r)}function Er(n){return null!=n&&Sr(Bu(n));
}function Cr(n,t){return n=typeof n=="number"||On.test(n)?+n:-1,t=null==t?Cu:t,-1<n&&0==n%1&&n<t}function Ur(n,t,r){if(!ge(r))return false;var e=typeof t;return("number"==e?Er(r)&&Cr(t,r.length):"string"==e&&t in r)?(t=r[t],n===n?n===t:t!==t):false}function Wr(n,t){var r=typeof n;return"string"==r&&dn.test(n)||"number"==r?true:Oo(n)?false:!yn.test(n)||null!=t&&n in Br(t)}function $r(n){var t=br(n);return t in zn.prototype?(t=Nn[t],n===t?true:(t=zu(t),!!t&&n===t[0])):false}function Sr(n){return typeof n=="number"&&-1<n&&0==n%1&&n<=Cu;
}function Fr(n,t){return n===w?t:Eo(n,t,Fr)}function Nr(n,t){n=Br(n);for(var r=-1,e=t.length,u={};++r<e;){var o=t[r];o in n&&(u[o]=n[o])}return u}function Tr(n,t){var r={};return ht(n,function(n,e,u){t(n,e,u)&&(r[e]=n)}),r}function Lr(n){for(var t=Re(n),r=t.length,e=r&&n.length,u=!!e&&Sr(e)&&(Oo(n)||pe(n)),o=-1,i=[];++o<r;){var f=t[o];(u&&Cr(f,e)||nu.call(n,f))&&i.push(f)}return i}function zr(n){return null==n?[]:Er(n)?ge(n)?n:Ve(n):Ee(n)}function Br(n){return ge(n)?n:Ve(n)}function Dr(n){if(Oo(n))return n;
var t=[];return u(n).replace(mn,function(n,r,e,u){t.push(e?u.replace(An,"$1"):r||n)}),t}function Mr(n){return n instanceof zn?n.clone():new Ln(n.__wrapped__,n.__chain__,qn(n.__actions__))}function qr(n,t,r){return n&&n.length?((r?Ur(n,t,r):null==t)&&(t=1),Et(n,0>t?0:t)):[]}function Pr(n,t,r){var e=n?n.length:0;return e?((r?Ur(n,t,r):null==t)&&(t=1),t=e-(+t||0),Et(n,0,0>t?0:t)):[]}function Kr(n){return n?n[0]:w}function Vr(n,t,e){var u=n?n.length:0;if(!u)return-1;if(typeof e=="number")e=0>e?bu(u+e,0):e;else if(e)return e=Lt(n,t),
e<u&&(t===t?t===n[e]:n[e]!==n[e])?e:-1;return r(n,t,e||0)}function Zr(n){var t=n?n.length:0;return t?n[t-1]:w}function Yr(n){return qr(n,1)}function Gr(n,t,e,u){if(!n||!n.length)return[];null!=t&&typeof t!="boolean"&&(u=e,e=Ur(n,t,u)?w:t,t=false);var o=wr();if((null!=e||o!==ut)&&(e=o(e,u,3)),t&&xr()==r){t=e;var i;e=-1,u=n.length;for(var o=-1,f=[];++e<u;){var a=n[e],c=t?t(a,e,n):a;e&&i===c||(i=c,f[++o]=a)}n=f}else n=St(n,e);return n}function Jr(n){if(!n||!n.length)return[];var t=-1,r=0;n=Vn(n,function(n){
return Er(n)?(r=bu(n.length,r),true):void 0});for(var e=Be(r);++t<r;)e[t]=Gn(n,jt(t));return e}function Xr(n,t,r){return n&&n.length?(n=Jr(n),null==t?n:(t=Bt(t,r,4),Gn(n,function(n){return Xn(n,t,w,true)}))):[]}function Hr(n,t){var r=-1,e=n?n.length:0,u={};for(!e||t||Oo(n[0])||(t=[]);++r<e;){var o=n[r];t?u[o]=t[r]:o&&(u[o[0]]=o[1])}return u}function Qr(n){return n=Nn(n),n.__chain__=true,n}function ne(n,t,r){return t.call(r,n)}function te(n,t,r){var e=Oo(n)?Kn:at;return r&&Ur(n,t,r)&&(t=w),(typeof t!="function"||r!==w)&&(t=wr(t,r,3)),
e(n,t)}function re(n,t,r){var e=Oo(n)?Vn:lt;return t=wr(t,r,3),e(n,t)}function ee(n,t,r,e){var u=n?Bu(n):0;return Sr(u)||(n=Ee(n),u=n.length),r=typeof r!="number"||e&&Ur(t,r,e)?0:0>r?bu(u+r,0):r||0,typeof n=="string"||!Oo(n)&&be(n)?r<=u&&-1<n.indexOf(t,r):!!u&&-1<xr(n,t,r)}function ue(n,t,r){var e=Oo(n)?Gn:wt;return t=wr(t,r,3),e(n,t)}function oe(n,t,r){if(r?Ur(n,t,r):null==t){n=zr(n);var e=n.length;return 0<e?n[Rt(0,e-1)]:w}r=-1,n=je(n);var e=n.length,u=e-1;for(t=xu(0>t?0:+t||0,e);++r<t;){var e=Rt(r,u),o=n[e];
n[e]=n[r],n[r]=o}return n.length=t,n}function ie(n,t,r){var e=Oo(n)?Hn:Ct;return r&&Ur(n,t,r)&&(t=w),(typeof t!="function"||r!==w)&&(t=wr(t,r,3)),e(n,t)}function fe(n,t){var r;if(typeof t!="function"){if(typeof n!="function")throw new Ge(L);var e=n;n=t,t=e}return function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=w),r}}function ae(n,t,r){function e(t,r){r&&iu(r),a=p=h=w,t&&(_=ho(),c=n.apply(s,f),p||a||(f=s=w))}function u(){var n=t-(ho()-l);0>=n||n>t?e(h,a):p=su(u,n)}function o(){e(g,p);
}function i(){if(f=arguments,l=ho(),s=this,h=g&&(p||!y),false===v)var r=y&&!p;else{a||y||(_=l);var e=v-(l-_),i=0>=e||e>v;i?(a&&(a=iu(a)),_=l,c=n.apply(s,f)):a||(a=su(o,e))}return i&&p?p=iu(p):p||t===v||(p=su(u,t)),r&&(i=true,c=n.apply(s,f)),!i||p||a||(f=s=w),c}var f,a,c,l,s,p,h,_=0,v=false,g=true;if(typeof n!="function")throw new Ge(L);if(t=0>t?0:+t||0,true===r)var y=true,g=false;else ge(r)&&(y=!!r.leading,v="maxWait"in r&&bu(+r.maxWait||0,t),g="trailing"in r?!!r.trailing:g);return i.cancel=function(){p&&iu(p),a&&iu(a),
_=0,a=p=h=w},i}function ce(n,t){function r(){var e=arguments,u=t?t.apply(this,e):e[0],o=r.cache;return o.has(u)?o.get(u):(e=n.apply(this,e),r.cache=o.set(u,e),e)}if(typeof n!="function"||t&&typeof t!="function")throw new Ge(L);return r.cache=new ce.Cache,r}function le(n,t){if(typeof n!="function")throw new Ge(L);return t=bu(t===w?n.length-1:+t||0,0),function(){for(var r=arguments,e=-1,u=bu(r.length-t,0),o=Be(u);++e<u;)o[e]=r[t+e];switch(t){case 0:return n.call(this,o);case 1:return n.call(this,r[0],o);
case 2:return n.call(this,r[0],r[1],o)}for(u=Be(t+1),e=-1;++e<t;)u[e]=r[e];return u[t]=o,n.apply(this,u)}}function se(n,t){return n>t}function pe(n){return h(n)&&Er(n)&&nu.call(n,"callee")&&!cu.call(n,"callee")}function he(n,t,r,e){return e=(r=typeof r=="function"?Bt(r,e,3):w)?r(n,t):w,e===w?dt(n,t,r):!!e}function _e(n){return h(n)&&typeof n.message=="string"&&ru.call(n)==P}function ve(n){return ge(n)&&ru.call(n)==K}function ge(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function ye(n){
return null==n?false:ve(n)?uu.test(Qe.call(n)):h(n)&&Rn.test(n)}function de(n){return typeof n=="number"||h(n)&&ru.call(n)==V}function me(n){var t;if(!h(n)||ru.call(n)!=Z||pe(n)||!(nu.call(n,"constructor")||(t=n.constructor,typeof t!="function"||t instanceof t)))return false;var r;return ht(n,function(n,t){r=t}),r===w||nu.call(n,r)}function we(n){return ge(n)&&ru.call(n)==Y}function be(n){return typeof n=="string"||h(n)&&ru.call(n)==G}function xe(n){return h(n)&&Sr(n.length)&&!!Sn[ru.call(n)]}function Ae(n,t){
return n<t}function je(n){var t=n?Bu(n):0;return Sr(t)?t?qn(n):[]:Ee(n)}function ke(n){return et(n,Re(n))}function Ie(n){return gt(n,Re(n))}function Re(n){if(null==n)return[];ge(n)||(n=Ve(n));for(var t=n.length,t=t&&Sr(t)&&(Oo(n)||pe(n))&&t||0,r=n.constructor,e=-1,r=typeof r=="function"&&r.prototype===n,u=Be(t),o=0<t;++e<t;)u[e]=e+"";for(var i in n)o&&Cr(i,t)||"constructor"==i&&(r||!nu.call(n,i))||u.push(i);return u}function Oe(n){n=Br(n);for(var t=-1,r=zo(n),e=r.length,u=Be(e);++t<e;){var o=r[t];
u[t]=[o,n[o]]}return u}function Ee(n){return Ft(n,zo(n))}function Ce(n){return(n=u(n))&&n.replace(En,a).replace(xn,"")}function Ue(n,t){var r="";if(n=u(n),t=+t,1>t||!n||!mu(t))return r;do t%2&&(r+=n),t=yu(t/2),n+=n;while(t);return r}function We(n,t,r){var e=n;return(n=u(n))?(r?Ur(e,t,r):null==t)?n.slice(g(n),y(n)+1):(t+="",n.slice(o(n,t),i(n,t)+1)):n}function $e(n,t,r){return r&&Ur(n,t,r)&&(t=w),n=u(n),n.match(t||Wn)||[]}function Se(n,t,r){return r&&Ur(n,t,r)&&(t=w),h(n)?Ne(n):ut(n,t)}function Fe(n){
return n}function Ne(n){return bt(ot(n,true))}function Te(n,t,r){if(null==r){var e=ge(t),u=e?zo(t):w;((u=u&&u.length?gt(t,u):w)?u.length:e)||(u=false,r=t,t=n,n=this)}u||(u=gt(t,zo(t)));var o=true,e=-1,i=ve(n),f=u.length;false===r?o=false:ge(r)&&"chain"in r&&(o=r.chain);for(;++e<f;){r=u[e];var a=t[r];n[r]=a,i&&(n.prototype[r]=function(t){return function(){var r=this.__chain__;if(o||r){var e=n(this.__wrapped__);return(e.__actions__=qn(this.__actions__)).push({func:t,args:arguments,thisArg:n}),e.__chain__=r,e}return t.apply(n,Jn([this.value()],arguments));
}}(a))}return n}function Le(){}function ze(n){return Wr(n)?jt(n):kt(n)}_=_?Yn.defaults(Zn.Object(),_,Yn.pick(Zn,$n)):Zn;var Be=_.Array,De=_.Date,Me=_.Error,qe=_.Function,Pe=_.Math,Ke=_.Number,Ve=_.Object,Ze=_.RegExp,Ye=_.String,Ge=_.TypeError,Je=Be.prototype,Xe=Ve.prototype,He=Ye.prototype,Qe=qe.prototype.toString,nu=Xe.hasOwnProperty,tu=0,ru=Xe.toString,eu=Zn._,uu=Ze("^"+Qe.call(nu).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ou=_.ArrayBuffer,iu=_.clearTimeout,fu=_.parseFloat,au=Pe.pow,cu=Xe.propertyIsEnumerable,lu=jr(_,"Set"),su=_.setTimeout,pu=Je.splice,hu=_.Uint8Array,_u=jr(_,"WeakMap"),vu=Pe.ceil,gu=jr(Ve,"create"),yu=Pe.floor,du=jr(Be,"isArray"),mu=_.isFinite,wu=jr(Ve,"keys"),bu=Pe.max,xu=Pe.min,Au=jr(De,"now"),ju=_.parseInt,ku=Pe.random,Iu=Ke.NEGATIVE_INFINITY,Ru=Ke.POSITIVE_INFINITY,Ou=4294967294,Eu=2147483647,Cu=9007199254740991,Uu=_u&&new _u,Wu={};
Nn.support={},Nn.templateSettings={escape:_n,evaluate:vn,interpolate:gn,variable:"",imports:{_:Nn}};var $u=function(){function n(){}return function(t){if(ge(t)){n.prototype=t;var r=new n;n.prototype=w}return r||{}}}(),Su=Vt(_t),Fu=Vt(vt,true),Nu=Zt(),Tu=Zt(true),Lu=Uu?function(n,t){return Uu.set(n,t),n}:Fe,zu=Uu?function(n){return Uu.get(n)}:Le,Bu=jt("length"),Du=function(){var n=0,t=0;return function(r,e){var u=ho(),o=S-(u-t);if(t=u,0<o){if(++n>=$)return r}else n=0;return Lu(r,e)}}(),Mu=le(function(n,t){
return h(n)&&Er(n)?ft(n,pt(t,false,true)):[]}),qu=tr(),Pu=tr(true),Ku=le(function(n){for(var t=n.length,e=t,u=Be(l),o=xr(),i=o==r,f=[];e--;){var a=n[e]=Er(a=n[e])?a:[];u[e]=i&&120<=a.length&&gu&&lu?new Dn(e&&a):null}var i=n[0],c=-1,l=i?i.length:0,s=u[0];n:for(;++c<l;)if(a=i[c],0>(s?Mn(s,a):o(f,a,0))){for(e=t;--e;){var p=u[e];if(0>(p?Mn(p,a):o(n[e],a,0)))continue n}s&&s.push(a),f.push(a)}return f}),Vu=le(function(t,r){r=pt(r);var e=rt(t,r);return It(t,r.sort(n)),e}),Zu=vr(),Yu=vr(true),Gu=le(function(n){return St(pt(n,false,true));
}),Ju=le(function(n,t){return Er(n)?ft(n,t):[]}),Xu=le(Jr),Hu=le(function(n){var t=n.length,r=2<t?n[t-2]:w,e=1<t?n[t-1]:w;return 2<t&&typeof r=="function"?t-=2:(r=1<t&&typeof e=="function"?(--t,e):w,e=w),n.length=t,Xr(n,r,e)}),Qu=le(function(n){return n=pt(n),this.thru(function(t){t=Oo(t)?t:[Br(t)];for(var r=n,e=-1,u=t.length,o=-1,i=r.length,f=Be(u+i);++e<u;)f[e]=t[e];for(;++o<i;)f[e++]=r[o];return f})}),no=le(function(n,t){return rt(n,pt(t))}),to=Pt(function(n,t,r){nu.call(n,r)?++n[r]:n[r]=1}),ro=nr(Su),eo=nr(Fu,true),uo=ur(Pn,Su),oo=ur(function(n,t){
for(var r=n.length;r--&&false!==t(n[r],r,n););return n},Fu),io=Pt(function(n,t,r){nu.call(n,r)?n[r].push(t):n[r]=[t]}),fo=Pt(function(n,t,r){n[r]=t}),ao=le(function(n,t,r){var e=-1,u=typeof t=="function",o=Wr(t),i=Er(n)?Be(n.length):[];return Su(n,function(n){var f=u?t:o&&null!=n?n[t]:w;i[++e]=f?f.apply(n,r):Or(n,t,r)}),i}),co=Pt(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),lo=lr(Xn,Su),so=lr(function(n,t,r,e){var u=n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r},Fu),po=le(function(n,t){
if(null==n)return[];var r=t[2];return r&&Ur(t[0],t[1],r)&&(t.length=1),Wt(n,pt(t),[])}),ho=Au||function(){return(new De).getTime()},_o=le(function(n,t,r){var e=x;if(r.length)var u=v(r,_o.placeholder),e=e|R;return gr(n,e,t,r,u)}),vo=le(function(n,t){t=t.length?pt(t):Ie(n);for(var r=-1,e=t.length;++r<e;){var u=t[r];n[u]=gr(n[u],x,n)}return n}),go=le(function(n,t,r){var e=x|A;if(r.length)var u=v(r,go.placeholder),e=e|R;return gr(t,e,n,r,u)}),yo=Xt(k),mo=Xt(I),wo=le(function(n,t){return it(n,1,t)}),bo=le(function(n,t,r){
return it(n,t,r)}),xo=er(),Ao=er(true),jo=le(function(n,t){if(t=pt(t),typeof n!="function"||!Kn(t,e))throw new Ge(L);var r=t.length;return le(function(e){for(var u=xu(e.length,r);u--;)e[u]=t[u](e[u]);return n.apply(this,e)})}),ko=cr(R),Io=cr(O),Ro=le(function(n,t){return gr(n,C,w,w,w,pt(t))}),Oo=du||function(n){return h(n)&&Sr(n.length)&&ru.call(n)==D},Eo=Kt(At),Co=Kt(function(n,t,r){return r?nt(n,t,r):tt(n,t)}),Uo=Ht(Co,function(n,t){return n===w?t:n}),Wo=Ht(Eo,Fr),$o=rr(_t),So=rr(vt),Fo=or(Nu),No=or(Tu),To=ir(_t),Lo=ir(vt),zo=wu?function(n){
var t=null==n?w:n.constructor;return typeof t=="function"&&t.prototype===n||typeof n!="function"&&Er(n)?Lr(n):ge(n)?wu(n):[]}:Lr,Bo=fr(true),Do=fr(),Mo=le(function(n,t){if(null==n)return{};if("function"!=typeof t[0])return t=Gn(pt(t),Ye),Nr(n,ft(Re(n),t));var r=Bt(t[0],t[1],3);return Tr(n,function(n,t,e){return!r(n,t,e)})}),qo=le(function(n,t){return null==n?{}:"function"==typeof t[0]?Tr(n,Bt(t[0],t[1],3)):Nr(n,pt(t))}),Po=Gt(function(n,t,r){return t=t.toLowerCase(),n+(r?t.charAt(0).toUpperCase()+t.slice(1):t);
}),Ko=Gt(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Vo=ar(),Zo=ar(true),Yo=Gt(function(n,t,r){return n+(r?"_":"")+t.toLowerCase()}),Go=Gt(function(n,t,r){return n+(r?" ":"")+(t.charAt(0).toUpperCase()+t.slice(1))}),Jo=le(function(n,t){try{return n.apply(w,t)}catch(r){return _e(r)?r:new Me(r)}}),Xo=le(function(n,t){return function(r){return Or(r,n,t)}}),Ho=le(function(n,t){return function(r){return Or(n,r,t)}}),Qo=_r("ceil"),ni=_r("floor"),ti=Qt(se,Iu),ri=Qt(Ae,Ru),ei=_r("round");return Nn.prototype=Tn.prototype,
Ln.prototype=$u(Tn.prototype),Ln.prototype.constructor=Ln,zn.prototype=$u(Tn.prototype),zn.prototype.constructor=zn,Bn.prototype["delete"]=function(n){return this.has(n)&&delete this.__data__[n]},Bn.prototype.get=function(n){return"__proto__"==n?w:this.__data__[n]},Bn.prototype.has=function(n){return"__proto__"!=n&&nu.call(this.__data__,n)},Bn.prototype.set=function(n,t){return"__proto__"!=n&&(this.__data__[n]=t),this},Dn.prototype.push=function(n){var t=this.data;typeof n=="string"||ge(n)?t.set.add(n):t.hash[n]=true;
},ce.Cache=Bn,Nn.after=function(n,t){if(typeof t!="function"){if(typeof n!="function")throw new Ge(L);var r=n;n=t,t=r}return n=mu(n=+n)?n:0,function(){return 1>--n?t.apply(this,arguments):void 0}},Nn.ary=function(n,t,r){return r&&Ur(n,t,r)&&(t=w),t=n&&null==t?n.length:bu(+t||0,0),gr(n,E,w,w,w,w,t)},Nn.assign=Co,Nn.at=no,Nn.before=fe,Nn.bind=_o,Nn.bindAll=vo,Nn.bindKey=go,Nn.callback=Se,Nn.chain=Qr,Nn.chunk=function(n,t,r){t=(r?Ur(n,t,r):null==t)?1:bu(yu(t)||1,1),r=0;for(var e=n?n.length:0,u=-1,o=Be(vu(e/t));r<e;)o[++u]=Et(n,r,r+=t);
return o},Nn.compact=function(n){for(var t=-1,r=n?n.length:0,e=-1,u=[];++t<r;){var o=n[t];o&&(u[++e]=o)}return u},Nn.constant=function(n){return function(){return n}},Nn.countBy=to,Nn.create=function(n,t,r){var e=$u(n);return r&&Ur(n,t,r)&&(t=w),t?tt(e,t):e},Nn.curry=yo,Nn.curryRight=mo,Nn.debounce=ae,Nn.defaults=Uo,Nn.defaultsDeep=Wo,Nn.defer=wo,Nn.delay=bo,Nn.difference=Mu,Nn.drop=qr,Nn.dropRight=Pr,Nn.dropRightWhile=function(n,t,r){return n&&n.length?Nt(n,wr(t,r,3),true,true):[]},Nn.dropWhile=function(n,t,r){
return n&&n.length?Nt(n,wr(t,r,3),true):[]},Nn.fill=function(n,t,r,e){var u=n?n.length:0;if(!u)return[];for(r&&typeof r!="number"&&Ur(n,t,r)&&(r=0,e=u),u=n.length,r=null==r?0:+r||0,0>r&&(r=-r>u?0:u+r),e=e===w||e>u?u:+e||0,0>e&&(e+=u),u=r>e?0:e>>>0,r>>>=0;r<u;)n[r++]=t;return n},Nn.filter=re,Nn.flatten=function(n,t,r){var e=n?n.length:0;return r&&Ur(n,t,r)&&(t=false),e?pt(n,t):[]},Nn.flattenDeep=function(n){return n&&n.length?pt(n,true):[]},Nn.flow=xo,Nn.flowRight=Ao,Nn.forEach=uo,Nn.forEachRight=oo,Nn.forIn=Fo,
Nn.forInRight=No,Nn.forOwn=To,Nn.forOwnRight=Lo,Nn.functions=Ie,Nn.groupBy=io,Nn.indexBy=fo,Nn.initial=function(n){return Pr(n,1)},Nn.intersection=Ku,Nn.invert=function(n,t,r){r&&Ur(n,t,r)&&(t=w),r=-1;for(var e=zo(n),u=e.length,o={};++r<u;){var i=e[r],f=n[i];t?nu.call(o,f)?o[f].push(i):o[f]=[i]:o[f]=i}return o},Nn.invoke=ao,Nn.keys=zo,Nn.keysIn=Re,Nn.map=ue,Nn.mapKeys=Bo,Nn.mapValues=Do,Nn.matches=Ne,Nn.matchesProperty=function(n,t){return xt(n,ot(t,true))},Nn.memoize=ce,Nn.merge=Eo,Nn.method=Xo,Nn.methodOf=Ho,
Nn.mixin=Te,Nn.modArgs=jo,Nn.negate=function(n){if(typeof n!="function")throw new Ge(L);return function(){return!n.apply(this,arguments)}},Nn.omit=Mo,Nn.once=function(n){return fe(2,n)},Nn.pairs=Oe,Nn.partial=ko,Nn.partialRight=Io,Nn.partition=co,Nn.pick=qo,Nn.pluck=function(n,t){return ue(n,ze(t))},Nn.property=ze,Nn.propertyOf=function(n){return function(t){return yt(n,Dr(t),t+"")}},Nn.pull=function(){var n=arguments,t=n[0];if(!t||!t.length)return t;for(var r=0,e=xr(),u=n.length;++r<u;)for(var o=0,i=n[r];-1<(o=e(t,i,o));)pu.call(t,o,1);
return t},Nn.pullAt=Vu,Nn.range=function(n,t,r){r&&Ur(n,t,r)&&(t=r=w),n=+n||0,r=null==r?1:+r||0,null==t?(t=n,n=0):t=+t||0;var e=-1;t=bu(vu((t-n)/(r||1)),0);for(var u=Be(t);++e<t;)u[e]=n,n+=r;return u},Nn.rearg=Ro,Nn.reject=function(n,t,r){var e=Oo(n)?Vn:lt;return t=wr(t,r,3),e(n,function(n,r,e){return!t(n,r,e)})},Nn.remove=function(n,t,r){var e=[];if(!n||!n.length)return e;var u=-1,o=[],i=n.length;for(t=wr(t,r,3);++u<i;)r=n[u],t(r,u,n)&&(e.push(r),o.push(u));return It(n,o),e},Nn.rest=Yr,Nn.restParam=le,
Nn.set=function(n,t,r){if(null==n)return n;var e=t+"";t=null!=n[e]||Wr(t,n)?[e]:Dr(t);for(var e=-1,u=t.length,o=u-1,i=n;null!=i&&++e<u;){var f=t[e];ge(i)&&(e==o?i[f]=r:null==i[f]&&(i[f]=Cr(t[e+1])?[]:{})),i=i[f]}return n},Nn.shuffle=function(n){return oe(n,Ru)},Nn.slice=function(n,t,r){var e=n?n.length:0;return e?(r&&typeof r!="number"&&Ur(n,t,r)&&(t=0,r=e),Et(n,t,r)):[]},Nn.sortBy=function(n,t,r){if(null==n)return[];r&&Ur(n,t,r)&&(t=w);var e=-1;return t=wr(t,r,3),n=wt(n,function(n,r,u){return{a:t(n,r,u),
b:++e,c:n}}),Ut(n,f)},Nn.sortByAll=po,Nn.sortByOrder=function(n,t,r,e){return null==n?[]:(e&&Ur(t,r,e)&&(r=w),Oo(t)||(t=null==t?[]:[t]),Oo(r)||(r=null==r?[]:[r]),Wt(n,t,r))},Nn.spread=function(n){if(typeof n!="function")throw new Ge(L);return function(t){return n.apply(this,t)}},Nn.take=function(n,t,r){return n&&n.length?((r?Ur(n,t,r):null==t)&&(t=1),Et(n,0,0>t?0:t)):[]},Nn.takeRight=function(n,t,r){var e=n?n.length:0;return e?((r?Ur(n,t,r):null==t)&&(t=1),t=e-(+t||0),Et(n,0>t?0:t)):[]},Nn.takeRightWhile=function(n,t,r){
return n&&n.length?Nt(n,wr(t,r,3),false,true):[]},Nn.takeWhile=function(n,t,r){return n&&n.length?Nt(n,wr(t,r,3)):[]},Nn.tap=function(n,t,r){return t.call(r,n),n},Nn.throttle=function(n,t,r){var e=true,u=true;if(typeof n!="function")throw new Ge(L);return false===r?e=false:ge(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),ae(n,t,{leading:e,maxWait:+t,trailing:u})},Nn.thru=ne,Nn.times=function(n,t,r){if(n=yu(n),1>n||!mu(n))return[];var e=-1,u=Be(xu(n,4294967295));for(t=Bt(t,r,1);++e<n;)4294967295>e?u[e]=t(e):t(e);
return u},Nn.toArray=je,Nn.toPlainObject=ke,Nn.transform=function(n,t,r,e){var u=Oo(n)||xe(n);return t=wr(t,e,4),null==r&&(u||ge(n)?(e=n.constructor,r=u?Oo(n)?new e:[]:$u(ve(e)?e.prototype:w)):r={}),(u?Pn:_t)(n,function(n,e,u){return t(r,n,e,u)}),r},Nn.union=Gu,Nn.uniq=Gr,Nn.unzip=Jr,Nn.unzipWith=Xr,Nn.values=Ee,Nn.valuesIn=function(n){return Ft(n,Re(n))},Nn.where=function(n,t){return re(n,bt(t))},Nn.without=Ju,Nn.wrap=function(n,t){return t=null==t?Fe:t,gr(t,R,w,[n],[])},Nn.xor=function(){for(var n=-1,t=arguments.length;++n<t;){
var r=arguments[n];if(Er(r))var e=e?Jn(ft(e,r),ft(r,e)):r}return e?St(e):[]},Nn.zip=Xu,Nn.zipObject=Hr,Nn.zipWith=Hu,Nn.backflow=Ao,Nn.collect=ue,Nn.compose=Ao,Nn.each=uo,Nn.eachRight=oo,Nn.extend=Co,Nn.iteratee=Se,Nn.methods=Ie,Nn.object=Hr,Nn.select=re,Nn.tail=Yr,Nn.unique=Gr,Te(Nn,Nn),Nn.add=function(n,t){return(+n||0)+(+t||0)},Nn.attempt=Jo,Nn.camelCase=Po,Nn.capitalize=function(n){return(n=u(n))&&n.charAt(0).toUpperCase()+n.slice(1)},Nn.ceil=Qo,Nn.clone=function(n,t,r,e){return t&&typeof t!="boolean"&&Ur(n,t,r)?t=false:typeof t=="function"&&(e=r,
r=t,t=false),typeof r=="function"?ot(n,t,Bt(r,e,1)):ot(n,t)},Nn.cloneDeep=function(n,t,r){return typeof t=="function"?ot(n,true,Bt(t,r,1)):ot(n,true)},Nn.deburr=Ce,Nn.endsWith=function(n,t,r){n=u(n),t+="";var e=n.length;return r=r===w?e:xu(0>r?0:+r||0,e),r-=t.length,0<=r&&n.indexOf(t,r)==r},Nn.escape=function(n){return(n=u(n))&&hn.test(n)?n.replace(sn,c):n},Nn.escapeRegExp=function(n){return(n=u(n))&&bn.test(n)?n.replace(wn,l):n||"(?:)"},Nn.every=te,Nn.find=ro,Nn.findIndex=qu,Nn.findKey=$o,Nn.findLast=eo,
Nn.findLastIndex=Pu,Nn.findLastKey=So,Nn.findWhere=function(n,t){return ro(n,bt(t))},Nn.first=Kr,Nn.floor=ni,Nn.get=function(n,t,r){return n=null==n?w:yt(n,Dr(t),t+""),n===w?r:n},Nn.gt=se,Nn.gte=function(n,t){return n>=t},Nn.has=function(n,t){if(null==n)return false;var r=nu.call(n,t);if(!r&&!Wr(t)){if(t=Dr(t),n=1==t.length?n:yt(n,Et(t,0,-1)),null==n)return false;t=Zr(t),r=nu.call(n,t)}return r||Sr(n.length)&&Cr(t,n.length)&&(Oo(n)||pe(n))},Nn.identity=Fe,Nn.includes=ee,Nn.indexOf=Vr,Nn.inRange=function(n,t,r){
return t=+t||0,r===w?(r=t,t=0):r=+r||0,n>=xu(t,r)&&n<bu(t,r)},Nn.isArguments=pe,Nn.isArray=Oo,Nn.isBoolean=function(n){return true===n||false===n||h(n)&&ru.call(n)==M},Nn.isDate=function(n){return h(n)&&ru.call(n)==q},Nn.isElement=function(n){return!!n&&1===n.nodeType&&h(n)&&!me(n)},Nn.isEmpty=function(n){return null==n?true:Er(n)&&(Oo(n)||be(n)||pe(n)||h(n)&&ve(n.splice))?!n.length:!zo(n).length},Nn.isEqual=he,Nn.isError=_e,Nn.isFinite=function(n){return typeof n=="number"&&mu(n)},Nn.isFunction=ve,Nn.isMatch=function(n,t,r,e){
return r=typeof r=="function"?Bt(r,e,3):w,mt(n,Ar(t),r)},Nn.isNaN=function(n){return de(n)&&n!=+n},Nn.isNative=ye,Nn.isNull=function(n){return null===n},Nn.isNumber=de,Nn.isObject=ge,Nn.isPlainObject=me,Nn.isRegExp=we,Nn.isString=be,Nn.isTypedArray=xe,Nn.isUndefined=function(n){return n===w},Nn.kebabCase=Ko,Nn.last=Zr,Nn.lastIndexOf=function(n,t,r){var e=n?n.length:0;if(!e)return-1;var u=e;if(typeof r=="number")u=(0>r?bu(e+r,0):xu(r||0,e-1))+1;else if(r)return u=Lt(n,t,true)-1,n=n[u],(t===t?t===n:n!==n)?u:-1;
if(t!==t)return p(n,u,true);for(;u--;)if(n[u]===t)return u;return-1},Nn.lt=Ae,Nn.lte=function(n,t){return n<=t},Nn.max=ti,Nn.min=ri,Nn.noConflict=function(){return Zn._=eu,this},Nn.noop=Le,Nn.now=ho,Nn.pad=function(n,t,r){n=u(n),t=+t;var e=n.length;return e<t&&mu(t)?(e=(t-e)/2,t=yu(e),e=vu(e),r=pr("",e,r),r.slice(0,t)+n+r):n},Nn.padLeft=Vo,Nn.padRight=Zo,Nn.parseInt=function(n,t,r){return(r?Ur(n,t,r):null==t)?t=0:t&&(t=+t),n=We(n),ju(n,t||(In.test(n)?16:10))},Nn.random=function(n,t,r){r&&Ur(n,t,r)&&(t=r=w);
var e=null==n,u=null==t;return null==r&&(u&&typeof n=="boolean"?(r=n,n=1):typeof t=="boolean"&&(r=t,u=true)),e&&u&&(t=1,u=false),n=+n||0,u?(t=n,n=0):t=+t||0,r||n%1||t%1?(r=ku(),xu(n+r*(t-n+fu("1e-"+((r+"").length-1))),t)):Rt(n,t)},Nn.reduce=lo,Nn.reduceRight=so,Nn.repeat=Ue,Nn.result=function(n,t,r){var e=null==n?w:n[t];return e===w&&(null==n||Wr(t,n)||(t=Dr(t),n=1==t.length?n:yt(n,Et(t,0,-1)),e=null==n?w:n[Zr(t)]),e=e===w?r:e),ve(e)?e.call(n):e},Nn.round=ei,Nn.runInContext=m,Nn.size=function(n){var t=n?Bu(n):0;
return Sr(t)?t:zo(n).length},Nn.snakeCase=Yo,Nn.some=ie,Nn.sortedIndex=Zu,Nn.sortedLastIndex=Yu,Nn.startCase=Go,Nn.startsWith=function(n,t,r){return n=u(n),r=null==r?0:xu(0>r?0:+r||0,n.length),n.lastIndexOf(t,r)==r},Nn.sum=function(n,t,r){if(r&&Ur(n,t,r)&&(t=w),t=wr(t,r,3),1==t.length){n=Oo(n)?n:zr(n),r=n.length;for(var e=0;r--;)e+=+t(n[r])||0;n=e}else n=$t(n,t);return n},Nn.template=function(n,t,r){var e=Nn.templateSettings;r&&Ur(n,t,r)&&(t=r=w),n=u(n),t=nt(tt({},r||t),e,Qn),r=nt(tt({},t.imports),e.imports,Qn);
var o,i,f=zo(r),a=Ft(r,f),c=0;r=t.interpolate||Cn;var l="__p+='";r=Ze((t.escape||Cn).source+"|"+r.source+"|"+(r===gn?jn:Cn).source+"|"+(t.evaluate||Cn).source+"|$","g");var p="sourceURL"in t?"//# sourceURL="+t.sourceURL+"\n":"";if(n.replace(r,function(t,r,e,u,f,a){return e||(e=u),l+=n.slice(c,a).replace(Un,s),r&&(o=true,l+="'+__e("+r+")+'"),f&&(i=true,l+="';"+f+";\n__p+='"),e&&(l+="'+((__t=("+e+"))==null?'':__t)+'"),c=a+t.length,t}),l+="';",(t=t.variable)||(l="with(obj){"+l+"}"),l=(i?l.replace(fn,""):l).replace(an,"$1").replace(cn,"$1;"),
l="function("+(t||"obj")+"){"+(t?"":"obj||(obj={});")+"var __t,__p=''"+(o?",__e=_.escape":"")+(i?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+l+"return __p}",t=Jo(function(){return qe(f,p+"return "+l).apply(w,a)}),t.source=l,_e(t))throw t;return t},Nn.trim=We,Nn.trimLeft=function(n,t,r){var e=n;return(n=u(n))?n.slice((r?Ur(e,t,r):null==t)?g(n):o(n,t+"")):n},Nn.trimRight=function(n,t,r){var e=n;return(n=u(n))?(r?Ur(e,t,r):null==t)?n.slice(0,y(n)+1):n.slice(0,i(n,t+"")+1):n;
},Nn.trunc=function(n,t,r){r&&Ur(n,t,r)&&(t=w);var e=U;if(r=W,null!=t)if(ge(t)){var o="separator"in t?t.separator:o,e="length"in t?+t.length||0:e;r="omission"in t?u(t.omission):r}else e=+t||0;if(n=u(n),e>=n.length)return n;if(e-=r.length,1>e)return r;if(t=n.slice(0,e),null==o)return t+r;if(we(o)){if(n.slice(e).search(o)){var i,f=n.slice(0,e);for(o.global||(o=Ze(o.source,(kn.exec(o)||"")+"g")),o.lastIndex=0;n=o.exec(f);)i=n.index;t=t.slice(0,null==i?e:i)}}else n.indexOf(o,e)!=e&&(o=t.lastIndexOf(o),
-1<o&&(t=t.slice(0,o)));return t+r},Nn.unescape=function(n){return(n=u(n))&&pn.test(n)?n.replace(ln,d):n},Nn.uniqueId=function(n){var t=++tu;return u(n)+t},Nn.words=$e,Nn.all=te,Nn.any=ie,Nn.contains=ee,Nn.eq=he,Nn.detect=ro,Nn.foldl=lo,Nn.foldr=so,Nn.head=Kr,Nn.include=ee,Nn.inject=lo,Te(Nn,function(){var n={};return _t(Nn,function(t,r){Nn.prototype[r]||(n[r]=t)}),n}(),false),Nn.sample=oe,Nn.prototype.sample=function(n){return this.__chain__||null!=n?this.thru(function(t){return oe(t,n)}):oe(this.value());
},Nn.VERSION=b,Pn("bind bindKey curry curryRight partial partialRight".split(" "),function(n){Nn[n].placeholder=Nn}),Pn(["drop","take"],function(n,t){zn.prototype[n]=function(r){var e=this.__filtered__;if(e&&!t)return new zn(this);r=null==r?1:bu(yu(r)||0,0);var u=this.clone();return e?u.__takeCount__=xu(u.__takeCount__,r):u.__views__.push({size:r,type:n+(0>u.__dir__?"Right":"")}),u},zn.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),Pn(["filter","map","takeWhile"],function(n,t){
var r=t+1,e=r!=T;zn.prototype[n]=function(n,t){var u=this.clone();return u.__iteratees__.push({iteratee:wr(n,t,1),type:r}),u.__filtered__=u.__filtered__||e,u}}),Pn(["first","last"],function(n,t){var r="take"+(t?"Right":"");zn.prototype[n]=function(){return this[r](1).value()[0]}}),Pn(["initial","rest"],function(n,t){var r="drop"+(t?"":"Right");zn.prototype[n]=function(){return this.__filtered__?new zn(this):this[r](1)}}),Pn(["pluck","where"],function(n,t){var r=t?"filter":"map",e=t?bt:ze;zn.prototype[n]=function(n){
return this[r](e(n))}}),zn.prototype.compact=function(){return this.filter(Fe)},zn.prototype.reject=function(n,t){return n=wr(n,t,1),this.filter(function(t){return!n(t)})},zn.prototype.slice=function(n,t){n=null==n?0:+n||0;var r=this;return r.__filtered__&&(0<n||0>t)?new zn(r):(0>n?r=r.takeRight(-n):n&&(r=r.drop(n)),t!==w&&(t=+t||0,r=0>t?r.dropRight(-t):r.take(t-n)),r)},zn.prototype.takeRightWhile=function(n,t){return this.reverse().takeWhile(n,t).reverse()},zn.prototype.toArray=function(){return this.take(Ru);
},_t(zn.prototype,function(n,t){var r=/^(?:filter|map|reject)|While$/.test(t),e=/^(?:first|last)$/.test(t),u=Nn[e?"take"+("last"==t?"Right":""):t];u&&(Nn.prototype[t]=function(){function t(n){return e&&i?u(n,1)[0]:u.apply(w,Jn([n],o))}var o=e?[1]:arguments,i=this.__chain__,f=this.__wrapped__,a=!!this.__actions__.length,c=f instanceof zn,l=o[0],s=c||Oo(f);return s&&r&&typeof l=="function"&&1!=l.length&&(c=s=false),l={func:ne,args:[t],thisArg:w},a=c&&!a,e&&!i?a?(f=f.clone(),f.__actions__.push(l),n.call(f)):u.call(w,this.value())[0]:!e&&s?(f=a?f:new zn(this),
f=n.apply(f,o),f.__actions__.push(l),new Ln(f,i)):this.thru(t)})}),Pn("join pop push replace shift sort splice split unshift".split(" "),function(n){var t=(/^(?:replace|split)$/.test(n)?He:Je)[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:join|pop|replace|shift)$/.test(n);Nn.prototype[n]=function(){var n=arguments;return e&&!this.__chain__?t.apply(this.value(),n):this[r](function(r){return t.apply(r,n)})}}),_t(zn.prototype,function(n,t){var r=Nn[t];if(r){var e=r.name;(Wu[e]||(Wu[e]=[])).push({
name:t,func:r})}}),Wu[sr(w,A).name]=[{name:"wrapper",func:w}],zn.prototype.clone=function(){var n=new zn(this.__wrapped__);return n.__actions__=qn(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=qn(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=qn(this.__views__),n},zn.prototype.reverse=function(){if(this.__filtered__){var n=new zn(this);n.__dir__=-1,n.__filtered__=true}else n=this.clone(),n.__dir__*=-1;return n},zn.prototype.value=function(){
var n,t=this.__wrapped__.value(),r=this.__dir__,e=Oo(t),u=0>r,o=e?t.length:0;n=o;for(var i=this.__views__,f=0,a=-1,c=i.length;++a<c;){var l=i[a],s=l.size;switch(l.type){case"drop":f+=s;break;case"dropRight":n-=s;break;case"take":n=xu(n,f+s);break;case"takeRight":f=bu(f,n-s)}}if(n={start:f,end:n},i=n.start,f=n.end,n=f-i,i=u?f:i-1,f=this.__iteratees__,a=f.length,c=0,l=xu(n,this.__takeCount__),!e||o<F||o==n&&l==n)return Tt(u&&e?t.reverse():t,this.__actions__);e=[];n:for(;n--&&c<l;){for(i+=r,u=-1,o=t[i];++u<a;){
var p=f[u],s=p.type,p=p.iteratee(o);if(s==T)o=p;else if(!p){if(s==N)continue n;break n}}e[c++]=o}return e},Nn.prototype.chain=function(){return Qr(this)},Nn.prototype.commit=function(){return new Ln(this.value(),this.__chain__)},Nn.prototype.concat=Qu,Nn.prototype.plant=function(n){for(var t,r=this;r instanceof Tn;){var e=Mr(r);t?u.__wrapped__=e:t=e;var u=e,r=r.__wrapped__}return u.__wrapped__=n,t},Nn.prototype.reverse=function(){function n(n){return r&&0>r.__dir__?n:n.reverse()}var t=this.__wrapped__;
if(t instanceof zn){var r=t;return this.__actions__.length&&(r=new zn(this)),r=r.reverse(),r.__actions__.push({func:ne,args:[n],thisArg:w}),new Ln(r,this.__chain__)}return this.thru(n)},Nn.prototype.toString=function(){return this.value()+""},Nn.prototype.run=Nn.prototype.toJSON=Nn.prototype.valueOf=Nn.prototype.value=function(){return Tt(this.__wrapped__,this.__actions__)},Nn.prototype.collect=Nn.prototype.map,Nn.prototype.head=Nn.prototype.first,Nn.prototype.select=Nn.prototype.filter,Nn.prototype.tail=Nn.prototype.rest,
Nn}var w,b="3.10.0",x=1,A=2,j=4,k=8,I=16,R=32,O=64,E=128,C=256,U=30,W="...",$=150,S=16,F=200,N=1,T=2,L="Expected a function",z="__lodash_placeholder__",B="[object Arguments]",D="[object Array]",M="[object Boolean]",q="[object Date]",P="[object Error]",K="[object Function]",V="[object Number]",Z="[object Object]",Y="[object RegExp]",G="[object String]",J="[object ArrayBuffer]",X="[object Float32Array]",H="[object Float64Array]",Q="[object Int8Array]",nn="[object Int16Array]",tn="[object Int32Array]",rn="[object Uint8Array]",en="[object Uint8ClampedArray]",un="[object Uint16Array]",on="[object Uint32Array]",fn=/\b__p\+='';/g,an=/\b(__p\+=)''\+/g,cn=/(__e\(.*?\)|\b__t\))\+'';/g,ln=/&(?:amp|lt|gt|quot|#39|#96);/g,sn=/[&<>"'`]/g,pn=RegExp(ln.source),hn=RegExp(sn.source),_n=/<%-([\s\S]+?)%>/g,vn=/<%([\s\S]+?)%>/g,gn=/<%=([\s\S]+?)%>/g,yn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,dn=/^\w*$/,mn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,wn=/^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,bn=RegExp(wn.source),xn=/[\u0300-\u036f\ufe20-\ufe23]/g,An=/\\(\\)?/g,jn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,kn=/\w*$/,In=/^0[xX]/,Rn=/^\[object .+?Constructor\]$/,On=/^\d+$/,En=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,Cn=/($^)/,Un=/['\n\r\u2028\u2029\\]/g,Wn=RegExp("[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?=[A-Z\\xc0-\\xd6\\xd8-\\xde][a-z\\xdf-\\xf6\\xf8-\\xff]+)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+|[A-Z\\xc0-\\xd6\\xd8-\\xde]+|[0-9]+","g"),$n="Array ArrayBuffer Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Math Number Object RegExp Set String _ clearTimeout isFinite parseFloat parseInt setTimeout TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap".split(" "),Sn={};
Sn[X]=Sn[H]=Sn[Q]=Sn[nn]=Sn[tn]=Sn[rn]=Sn[en]=Sn[un]=Sn[on]=true,Sn[B]=Sn[D]=Sn[J]=Sn[M]=Sn[q]=Sn[P]=Sn[K]=Sn["[object Map]"]=Sn[V]=Sn[Z]=Sn[Y]=Sn["[object Set]"]=Sn[G]=Sn["[object WeakMap]"]=false;var Fn={};Fn[B]=Fn[D]=Fn[J]=Fn[M]=Fn[q]=Fn[X]=Fn[H]=Fn[Q]=Fn[nn]=Fn[tn]=Fn[V]=Fn[Z]=Fn[Y]=Fn[G]=Fn[rn]=Fn[en]=Fn[un]=Fn[on]=true,Fn[P]=Fn[K]=Fn["[object Map]"]=Fn["[object Set]"]=Fn["[object WeakMap]"]=false;var Nn={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a",
"\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y",
"\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss"},Tn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},Ln={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&#96;":"`"},zn={"function":true,object:true},Bn={0:"x30",1:"x31",2:"x32",3:"x33",4:"x34",5:"x35",6:"x36",7:"x37",8:"x38",9:"x39",A:"x41",B:"x42",C:"x43",D:"x44",E:"x45",F:"x46",a:"x61",b:"x62",c:"x63",d:"x64",e:"x65",f:"x66",n:"x6e",r:"x72",t:"x74",u:"x75",v:"x76",x:"x78"},Dn={"\\":"\\",
"'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Mn=zn[typeof exports]&&exports&&!exports.nodeType&&exports,qn=zn[typeof module]&&module&&!module.nodeType&&module,Pn=zn[typeof self]&&self&&self.Object&&self,Kn=zn[typeof window]&&window&&window.Object&&window,Vn=qn&&qn.exports===Mn&&Mn,Zn=Mn&&qn&&typeof global=="object"&&global&&global.Object&&global||Kn!==(this&&this.window)&&Kn||Pn||this,Yn=m();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Zn._=Yn, define(function(){
return Yn})):Mn&&qn?Vn?(qn.exports=Yn)._=Yn:Mn._=Yn:Zn._=Yn}).call(this);;
// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'ui-rangeSlider',
    'navigationservice'
]);


firstapp.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

	// for http request with session
	$httpProvider.defaults.withCredentials = true;

	$stateProvider

		.state('home', {
		url: "/home", 
		templateUrl: "views/template.html",
		controller: 'HomeCtrl'
	})

	.state('productdetail', {
		url: "/productdetail",
		templateUrl: "views/template.html",
		controller: 'ProductdetailCtrl'
	})

	.state('product', {
			url: "/product",
			templateUrl: "views/template.html",
			controller: 'ProductCtrl'
		})
		.state('orderhistory', {
			url: "/orderhistory",
			templateUrl: "views/template.html",
			controller: 'OrderhistoryCtrl'
		})
		.state('contact', {
			url: "/contact",
			templateUrl: "views/template.html",
			controller: 'ContactCtrl'
		})

	.state('account', {
			url: "/account",
			templateUrl: "views/template.html",
			controller: 'AccountCtrl'
		})
		.state('cart', {
			url: "/cart",
			templateUrl: "views/template.html",
			controller: 'CartCtrl'
		})
	
		.state('searchresult', {
			url: "/searchresult",
			templateUrl: "views/template.html",
			controller: 'SearchresultCtrl'
		})
	
		.state('about', {
			url: "/about",
			templateUrl: "views/template.html",
			controller: 'AboutCtrl'
		})
	
		.state('checkout', {
			url: "/checkout",
			templateUrl: "views/template.html",
			controller: 'CheckoutCtrl'
		})
	
	.state('storelocator', {
			url: "/storelocator",
			templateUrl: "views/template.html",
			controller: 'StorelocatorCtrl'
		})

		.state('login', {
			url: "/login",
			templateUrl: "views/template.html",
			controller: 'LoginCtrl'
		})
		.state('forgotpassword', {
			url: "/forgotpassword",
			templateUrl: "views/template.html",
			controller: 'forgotpasswordCtrl'
		})

	$urlRouterProvider.otherwise("/home");

});


firstapp.directive('img', function ($compile, $parse) {
	return {
		restrict: 'E',
		replace: false,
		link: function ($scope, element, attrs) {
			var $element = $(element);
			if (!attrs.noloading) {
				$element.after("<img src='img/loading.gif' class='loading' />");
				var $loading = $element.next(".loading");
				$element.load(function () {
					$loading.remove();
					$(this).addClass("doneLoading");
				});
			} else {
				$($element).addClass("doneLoading");
			}
		}
	};
});;
angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'infinite-scroll', 'ngAnimate', 'ngDialog', 'valdr', 'angular-flexslider', 'ngSanitize', 'ui-rangeSlider'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    //    $scope.slides = [
    //        'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
    //        'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
    //        'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
    //        'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
    //    ];
    $scope.slides = [
        'img/slider/1.jpg',
        'img/slider/2.jpg',
        'img/slider/3.jpg',
        'img/slider/4.jpg'

    ];


    $scope.products = [{
        image: "img/product/1.png"


    }, {
        image: "img/product/2.png"


    }, {
        image: "img/product/3.png"

    }, {
        image: "img/product/4.png"

    }];
})


.controller('ProductCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("product");
    $scope.menutitle = NavigationService.makeactive("Product");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.demo2 = {
        range: {
            min: 0,
            max: 10050
        },
        minPrice: 0,
        maxPrice: 10050
    };
    $scope.brands = [{
        name: "Apple"


    }, {
        name: "nokia"


    }, {
        name: "samsung"

    }, {
        name: "mi"

    }, {
        name: "micromax"

    }];

    $scope.max = 5;
    $scope.isReadonly = false;

    $scope.hoveringOver = function(value) {
        $scope.overStar = value;
        $scope.percent = 100 * (value / $scope.max);
    };

    $scope.ratingStates = [{
        stateOn: 'glyphicon-ok-sign',
        stateOff: 'glyphicon-ok-circle'
    }, {
        stateOn: 'glyphicon-star',
        stateOff: 'glyphicon-star-empty'
    }, {
        stateOn: 'glyphicon-heart',
        stateOff: 'glyphicon-ban-circle'
    }, {
        stateOn: 'glyphicon-heart'
    }, {
        stateOff: 'glyphicon-off'
    }];

    $scope.$watch('rate', function(val) {

        function sucess(data) {

            console.log(data);

        };

        function error(response) {

            console.log(response)

            alert("Can't post " + response.data + " Error:" + response.status);

        }



        if (val) {

            var data = {
                rating: val,
                user: "userId" // I'm not sure where is your userId

            }

            $http.post("yourUrl", data).then(sucess, error);


        }
    })

    $scope.products = [{
        image: "img/product/5.jpg",
        image1: "img/product/5.jpg",
        name: "Apple",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        price: "47000.00"

    }, {
        image: "img/product/6.jpg",
        image1: "img/product/5.jpg",
        name: "Apple Macbook",
        desc: "This book is a treatise on the theory of ethics, very popular during the Renaissance. ",
        price: "48000.00"

    }, {
        image: "img/product/7.jpg",
        image1: "img/product/5.jpg",
        name: "Apple air",
        desc: "but the majority have suffered alteration in some form. ",
        price: "42000.00"

    }, {
        image: "img/product/8.jpg",
        image1: "img/product/5.jpg",
        name: "samsung",
        desc: "distracted by the readable content of a page when looking at its layout. ",
        price: "72000.00"

    }, {
        image: "img/product/9.jpg",
        image1: "img/product/5.jpg",
        name: "nokia lumia",
        desc: "Many desktop publishing packages and web page editors now use Lorem Ipsum. ",
        price: "75000.00"

    }, {
        image: "img/product/10.jpg",
        image1: "img/product/5.jpg",
        name: "resmi 1s",
        desc: "sometimes by accident, sometimes on purpose (injected humour and the like. ",
        price: "47000.00"

    }, {
        image: "img/product/11.jpg",
        image1: "img/product/5.jpg",
        name: "micromax",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        price: "41000.00"

    }];

})

.controller('CartCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template = TemplateService;
        $scope.template = TemplateService.changecontent("cart");
        $scope.menutitle = NavigationService.makeactive("Cart");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('LoginCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template = TemplateService;
        $scope.template = TemplateService.changecontent("login");
        $scope.menutitle = NavigationService.makeactive("Login");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })   
    .controller('forgotpasswordCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template = TemplateService;
        $scope.template = TemplateService.changecontent("forgotpassword");
        $scope.menutitle = NavigationService.makeactive("Forgotpassword");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
 
    .controller('headerctrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
    })
    .controller('ProductdetailCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template = TemplateService.changecontent("productdetail");
        $scope.menutitle = NavigationService.makeactive("Productdetail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
.controller('OrderhistoryCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template = TemplateService.changecontent("orderhistory");
        $scope.menutitle = NavigationService.makeactive("Orderhistory");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
.controller('ContactCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template = TemplateService.changecontent("contact");
        $scope.menutitle = NavigationService.makeactive("Contact"); 
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
	.controller('StorelocatorCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template = TemplateService.changecontent("storelocator");
        $scope.menutitle = NavigationService.makeactive("StoreLocator");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
	.controller('AccountCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template = TemplateService.changecontent("account");
        $scope.menutitle = NavigationService.makeactive("Account"); 
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })

	.controller('AboutCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template = TemplateService.changecontent("about");
        $scope.menutitle = NavigationService.makeactive("About"); 
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })

	.controller('CheckoutCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template = TemplateService.changecontent("checkout");
        $scope.menutitle = NavigationService.makeactive("CheckOut"); 
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })

	.controller('SearchresultCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template = TemplateService.changecontent("searchresult");
        $scope.menutitle = NavigationService.makeactive("SearchResult"); 
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
	
	   $scope.products = [{
        image: "img/product/5.jpg",
        image1: "img/product/5.jpg",
        name: "Apple",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        price: "47000.00"

    }, {
        image: "img/product/6.jpg",
        image1: "img/product/5.jpg",
        name: "Apple Macbook",
        desc: "This book is a treatise on the theory of ethics, very popular during the Renaissance. ",
        price: "48000.00"

    }, {
        image: "img/product/7.jpg",
        image1: "img/product/5.jpg",
        name: "Apple air",
        desc: "but the majority have suffered alteration in some form. ",
        price: "42000.00"

    }, {
        image: "img/product/8.jpg",
        image1: "img/product/5.jpg",
        name: "samsung",
        desc: "distracted by the readable content of a page when looking at its layout. ",
        price: "72000.00"

    }];
	
    });;
var templateservicemod = angular.module('templateservicemod', []);
templateservicemod.service('TemplateService', function() {
    this.title = "Home";
    this.meta = "Google";
    this.metadesc = "Home";

    var d = new Date();
    this.year = d.getFullYear();

    this.init = function() {
        this.headermenu = "views/headermenu.html";
        this.header = "views/header.html";
        this.menu = "views/menu.html";
        this.slider = "views/slider.html";
        this.content = "views/content/content.html";
        this.footermenu = "views/footermenu.html";
        this.footer = "views/footer.html";
    };

    this.changecontent = function(page) {
        this.init();
        var data = this;
        data.content = "views/content/" + page + ".html";
        return data;
    };
    
    this.init();

});;
var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function () {
	var navigation = [{
		name: "Brands",
		classis: "active",
		link: "#/brands",
		subnav: [{
			name: "Subnav1",
			classis: "active",
			link: "#/home"
        }, {
			name: "Subnav2",
			classis: "active",
			link: "#/home"
        }, {
			name: "Subnav3",
			classis: "active",
			link: "#/home"
        }]
    }, {
		name: "products",
		active: "",
		link: "#/product",
		classis: "active",
		subnav: []
    }, {
		name: "exclusive",
		active: "",
		link: "#/exclusive",
		classis: "active",
		subnav: []
    }, {
		name: "new arrivals",
		active: "",
		link: "#/new arrivals",
		classis: "active",
		subnav: []
    }, {
		name: "deals",
		active: "",
		link: "#/deals",
		classis: "active",
		subnav: []
    }, {
		name: "about us",
		active: "",
		link: "#/about",
		classis: "active",
		subnav: []
    }, {
		name: "contact",
		active: "",
		link: "#/contact",
		classis: "active",
		subnav: []
    }];

	return {
		getnav: function () {
			return navigation;
		},
		makeactive: function (menuname) {
			for (var i = 0; i < navigation.length; i++) {
				if (navigation[i].name == menuname) {
					navigation[i].classis = "active";
				} else {
					navigation[i].classis = "";
				}
			}
			return menuname;
		},

	}
});