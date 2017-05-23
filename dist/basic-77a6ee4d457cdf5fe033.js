var Basic =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var $E=Element,$HE=HTMLElement,$F=Function,$p="prototype";$F[$p].extends=function(a){return"function"==typeof a?(this[$p]=new a,this[$p].constructor=this,this[$p].parent=a[$p]):(this[$p]=a,this[$p].constructor=this,this[$p].parent=a),this};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports.element=element;function element(a){if(!a)throw new Error("Wrong argument");var b=a.match(/^[a-z][a-z0-9-]*/i),c=a.match(/\.([a-z][a-z0-9_-]*)/ig)||[],d=a.match(/\#([a-z][a-z0-9_-]*)/i)||[],e=document.createElement(b[0]);return e.className=(0<c.length?c.join(" "):"").replace(/\./g,""),e.id=0<d.length?d[0].replace(/\#/,""):"",e}exports.default=element;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=Progressable,__webpack_require__(0);function Progressable(a){function b(){return this.addDefaultProgress=function(c){this.prototype.progress=c},this.addProgressMonitor=function(c){this.progress=c,this.parent.length&&(this.progress.show?this.progress.show(this.parent.length):this.progress.setAttribute("max",this.parent.length))},this.pop=function(){if(this.parent.pop)return this.progressrun(1),this.parent.pop.call(this)},this.push=function(c){if(this.parent.push)return this.progressgrow(1),this.parent.push.call(this,c)},this.splice=function(){if(this.parent.splice)return 1<arguments.length?this.progressrun(arguments[1]):this.progressrun(this.parent.length),2<arguments.length&&this.progressgrow(arguments.length-2),this.parent.splice.apply(this,arguments)},this.progressgrow=function(c){this.progress&&(this.progress.show?this.progress.show(this.progress.total+c):this.progress.setAttribute("max",parseInt(this.progress.getAttribute("max")||0)+c))},this.progressrun=function(c){this.progress&&(this.progress.hide?(this.progress.value=Math.floor(this.progress.value)+c,this.progress.total<=this.progress.value&&this.progress.hide()):(this.progress.setAttribute("value",parseInt(this.progress.getAttribute("value")||0)+c),this.progress.getAttribute("max")<=this.progress.getAttribute("value")&&(this.progress.setAttribute("value",0),this.progress.setAttribute("max",0))))},0<arguments.length&&this.splice.apply(this,[0,0].concat(Array.prototype.slice.call(arguments))),this}try{Object.defineProperty(b,"name",{value:"Progressable"+a.name})}catch(c){}return a?b.extends(a):b}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),__webpack_require__(0),exports.default=function(){this.pop=function(){return this.shift()},arguments&&this.concat(arguments)}.extends(Array);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=Suspendable,__webpack_require__(0);function Suspendable(a){function b(){window.SUSPENDABLE||(window.SUSPENDABLE=!0,window.SUSPENDED=!1,window.Suspended=[],window.addEventListener("blur",function(){window.SUSPENDED=!0,console.log("window suspended")}),window.addEventListener("focus",function(){for(window.SUSPENDED=!1,console.log("window awakened; todo: "+window.Suspended);0<window.Suspended.length;){var c=window.Suspended.pop();c[0].apply(c[1],c[2])}})),this.parent&&this.parent.action&&(this.action=function(){if(this.parent.action)if(window.SUSPENDED)-1==window.Suspended.indexOf([this.parent.action,this,arguments])&&window.Suspended.push([this.parent.action,this,arguments]);else return this.parent.action.apply(this,arguments)})}try{Object.defineProperty(b,"name",{value:"Suspendable"+a.name})}catch(c){}return a?b.extends(a):b}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=scroll;var _Element=__webpack_require__(1),_Element2=_interopRequireDefault(_Element);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function scroll(a){var b=(0,_Element2.default)("div.scroll#scroll");return b.setAttribute("direction","horizontal"==a?a:"vertical"),b.setAttribute("active",!1),b.isonscroll=!1,b}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};Object.defineProperty(exports,"__esModule",{value:!0});exports.Extendable=Extendable,exports.section=section;var _Element=__webpack_require__(1),_Element2=_interopRequireDefault(_Element);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function Extendable(a){return a.extendable=!0,a.wipe=function(){for(;0<this.children.length;)this.remove(this.children[this.children.length-1])},a.appendElement=function(b){return this.insertElement(b,null)},a.insertElement=function(b,c){if("number"==typeof c)c=this.children[c];else if("object"!==("undefined"==typeof c?"undefined":_typeof(c)))var c=this.children[0];return this.insertBefore(b,c),""!=b.id&&(this[b.id.toString()]=b),this.dispatchEvent(new CustomEvent("extend",{bubbles:!0,detail:{type:"add",subject:this,object:b}})),b},a.removeElement=function(b){this.removeChild(b),""!=b.id&&delete this[b.id],this.dispatchEvent(new CustomEvent("extend",{bubbles:!0,detail:{type:"remove",subject:this,object:b}}))},a.insert=a.insertElement,a.append=a.appendElement,a.remove=a.removeElement,a}function section(a){var b=(0,_Element2.default)("div"+a);return Extendable(b)}exports.default=section;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:!0}),exports.App=App;var _UI=__webpack_require__(18),_UI2=_interopRequireDefault(_UI),_Modules=__webpack_require__(10),_CookieStack=__webpack_require__(9),_CookieStack2=_interopRequireDefault(_CookieStack),_Network=__webpack_require__(11),_Network2=_interopRequireDefault(_Network),_Reader=__webpack_require__(12),_Reader2=_interopRequireDefault(_Reader),_TimerStack=__webpack_require__(13),_TimerStack2=_interopRequireDefault(_TimerStack);__webpack_require__(20);function _interopRequireDefault(b){return b&&b.__esModule?b:{default:b}}var Basic={UI:_UI2.default,System:{Network:_Network2.default,Reader:_Reader2.default,TimerStack:_TimerStack2.default,CookieStack:_CookieStack2.default,ModuleStack:_Modules.ModuleStack}};exports.default=Basic;function App(b){var d=b;if(!d.length)var b=[];if('string'==typeof d,0==b.length){for(var f in Basic.System)b.push(f)}return b.reduce(function(g,h){return g[h]=Basic.System[h]?new Basic.System[h]:'unknown symbol '+h,g},{})}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};Object.defineProperty(exports,"__esModule",{value:!0});exports.ajax=ajax;function ajax(a){if("object"!=("undefined"==typeof a?"undefined":_typeof(a)))throw new Error("Argument must be of type: Object");var b=new XMLHttpRequest;if(b.request=a,"undefined"==typeof b.request.resulthandler)throw new Error("ajax: no handler function!");return b.handler=function(c){"function"==typeof b.request.resulthandler?b.request.resulthandler(c):"object"===_typeof(b.request.resulthandler)&&(b.request.resulthandler.innerHTML=c)},b.addEventListener("readystatechange",function(){4==this.readyState&&199<this.status&&400>this.status&&this.handler(this.response)}),b.timeout=1e4,b.addEventListener("timeout",function(){0<this.readyState&&4>this.readyState&&this.abort(),this.handler(new Error("Connection timeout"))}),b.addEventListener("error",function(c){b.handler(c)}),b.request.progresshandler&&("function"==typeof b.request.progresshandler?(b.upload?b.upload:b).onprogress=function(c){b.request.progresshandler.call(b.request,c.lengthComputable?c.loaded/c.total:1)}:"object"===_typeof(b.request.progresshandler)&&"function"==typeof b.request.progresshandler.setState&&((b.upload?b.upload:b).onprogress=function(c){b.request.progresshandler.active?b.request.progresshandler.value=Math.floor(b.request.progresshandler.value)+(c.lengthComputable?c.loaded-1/c.total:0.99):b.request.progresshandler.show(b.request.progresshandler.total+1)})),b.request.type?b.responseType=b.request.type:"GET"==b.request.method&&0<b.request.url.search(/\.jp[e]?g$/i)&&(b.responseType="blob"),(b.executesession=function(){if(b.open(b.request.method,encodeURI(b.request.url),!0),b.request.headers){for(var c in b.request.headers)b.setRequestHeader(c,b.request.headers[c])}b.send(b.request.params)})(),b}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _createClass=function(){function a(b,d){for(var g,f=0;f<d.length;f++)g=d[f],g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(b,g.key,g)}return function(b,d,f){return d&&a(b.prototype,d),f&&a(b,f),b}}();Object.defineProperty(exports,"__esModule",{value:!0});function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var CookieStack=function(){function a(){_classCallCheck(this,a);var b,d=document.cookie.split("; ");for(b in d){var f=d[b].split("=");if(1<f.length)try{this[f.shift()]=JSON.parse(decodeURIComponent(window.atob(f.join("="))))}catch(g){console.error(g)}}!this.cookiesallowed&&confirm("This site uses cookies to save configuration data. It doesn't use nor seek nor send to a thirdparties any personal information.\nDo you approve local data storage as cookies?\n\n(If you object, all temporary data will be deleted after the session ends)")&&this.add({name:"cookiesallowed",value:"true",expires:"inf"}),Object.defineProperties(this,{noexp:{value:new Date(Date.now()-Date.now()%86400000+315360000000).toGMTString(),writable:!1},nullexp:{value:"Thu, 01 Jan 1970 00:00:00 GMT",writable:!1}})}return _createClass(a,[{key:"add",value:function add(b){this[b.name]=b.value;var d=b.name+"="+window.btoa(encodeURIComponent(JSON.stringify(b.value)))+";"+(b.expires&&this.cookiesallowed?"expires="+("inf"==b.expires?this.noexp:b.expires)+";":"")+(b.path?"path="+b.path+";":"path=/;")+(b.domain?"domain="+b.domain+";":"")+(b.secure?"secure":"");return document.cookie=d,this[b.name]}},{key:"remove",value:function remove(b){return this.add({name:b,value:this[b],expires:this.nullexp}),this[b]=null,delete this[b],this}}]),a}();exports.default=CookieStack;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _typeof='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(b){return typeof b}:function(b){return b&&'function'==typeof Symbol&&b.constructor===Symbol&&b!==Symbol.prototype?'symbol':typeof b};Object.defineProperty(exports,'__esModule',{value:!0}),exports.ModuleStack=void 0;exports.addModule=addModule,exports.addStyles=addStyles,__webpack_require__(0);var _Element=__webpack_require__(1),_Element2=_interopRequireDefault(_Element),_Progressable=__webpack_require__(2),_Progressable2=_interopRequireDefault(_Progressable);function _interopRequireDefault(b){return b&&b.__esModule?b:{default:b}}var ModuleStack=exports.ModuleStack=function(){this.loaded=[],this.add=function(c){var d;if('object'===_typeof(c.root)){if('object'===_typeof(c.root[c.module.name]))d=c.root[c.module.name];else{addStyles(c.module.data.style,console.log.bind(window,c.module.name+'\'s styles are loaded'));var g,j,f=c.module.data.type.split('.'),h='';if(1==f.length?(g=_Element2.default,h='div',j='.'+f[0]):('function'==typeof App.UI[f[0]]?g=App.UI[f[0]]:(g=_Element2.default,h=''==f[0]?'div':f[0]),j='.'+f.slice(1).join('.')),d=g(h+j+'#'+c.module.name),d.classList.add('hidden'),null!=document.getElementById(c.module.name)&&d.setAttribute('disabled',!0),d.innerHTML+=c.module.data.content,d.source=c.module.data,c.root.insert?c.root.insert(d,c.position||null):(c.root.insertBefore(d,c.position||null),c.root[c.module.name]=d),'none'!=c.module.data.action)if(-1==c.module.data.action.search(/\.js$/i))d.addEventListener('click',function(k){location.href=this.source.action,k.stopPropagation()});else{if('function'==typeof window[c.module.name])return null;if(null==this.loadstate(c.module.name))this.push({mod:c.module.name,data:c.module.data,context:d}),addModule(c.module.data.action,this.run.bind(this,c.module.name));else return null}}d.classList.remove('hidden')}return d},this.addtree=function(c,d){for(var f in c)c[f].children?this.addtree(c[f].children,this.add({root:d,module:{name:f,data:c[f]}})):this.add({root:d,module:{name:f,data:c[f]}})},this.run=function(c){for(var d=0;d<this.length;d++)if(this[d].mod==c){var f=this.splice(d,1);return this.loaded.push(f),window[f.name](f.context)}},this.loadstate=function(c){for(var d=0;d<this.length;d++)if(this[d].mod==c)return this[d];return null}}.extends((0,_Progressable2.default)(Array));function checkRes(b,c){var d,f=document.getElementsByTagName(b);for(d in f)if(-1!=(f[d].src||f[d].href||'').search(c))return!0;return!1}function addModule(b,c){return!b||checkRes('script',b)?c():new Promise(function(d){var f=document.createElement('script');f.type='text/javascript',document.head.appendChild(f),f.addEventListener('load',d),f.src=b}).then(c)}function addStyleSheet(b,c){return!b||checkRes('link',b)?null:new Promise(function(d){var f=document.createElement('link');f.rel='stylesheet',f.type='text/css',document.head.appendChild(f),f.addEventListener('load',d),f.href=b}).then(c)}function addStyle(b,c){return new Promise(function(d){var f=document.createElement('style');f.type='text/css',document.head.appendChild(f),f.sheet.insertRule(b,f.sheet.cssRules.length),d()}).then(c)}function addStyles(b,c){function d(){g--,0>=g&&c()}var f=b instanceof Array?b:[b],g=f.reduce(function(h,j){if('string'==typeof j){if(-1!=j.search(/\{\.*\}/))return addStyle(j,d),h+1;if(-1!=j.search(/\.css$/))return addStyleSheet(j,d),h+1}return h},0)}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _typeof='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(b){return typeof b}:function(b){return b&&'function'==typeof Symbol&&b.constructor===Symbol&&b!==Symbol.prototype?'symbol':typeof b};Object.defineProperty(exports,'__esModule',{value:!0});__webpack_require__(0);var _Fifo=__webpack_require__(3),_Fifo2=_interopRequireDefault(_Fifo),_Progressable=__webpack_require__(2),_Progressable2=_interopRequireDefault(_Progressable),_Suspendable=__webpack_require__(4),_Suspendable2=_interopRequireDefault(_Suspendable),_Ajax=__webpack_require__(8),_Ajax2=_interopRequireDefault(_Ajax);function _interopRequireDefault(b){return b&&b.__esModule?b:{default:b}}exports.default=(0,_Suspendable2.default)(function(){this._xhr=null,this.active=!1,this.test=function(c,d){this._xhr=new XMLHttpRequest,this._xhr.addEventListener('readystatechange',function(){var g;(2==this.readyState&&0!=this.status||3==this.readyState)&&(g=this.status,this.abort(),d(g))})},this.request=function(c){if(''==c.url||'function'!=typeof c.resulthandler)return!1;var d={method:'GET',url:'',type:'',params:'',resulthandler:this.answer,progresshandler:this.progress||!1,headers:{}};for(n in c)d[n]=c[n];0<this.filter(function(f){return f.method==d.method&&f.url==d.url&&f.params==f.params&&f.resulthandler==d.resulthandler}).length&&(this.push(d),this.action())},this.download=function(c){return new Promise(function(d){this.request({method:'GET',url:c,type:'blob',resulthandler:d})})},this.action=function(){if(!this.active&&0<this.length){var c=this[0];this.active=!0,this._xhr=(0,_Ajax2.default)({method:c.method,url:c.url,params:c.params,resulthandler:this.answer,progresshandler:c.progresshandler,headers:c.headers})}},this.answer=function(c){if(!c instanceof Error){var d=this[0].resulthandler;'function'==typeof d?d(c):'object'===('undefined'==typeof d?'undefined':_typeof(d))&&(d=c)}else console.error(c);this.pop(),this._xhr=null,this.active=!1,this.action()}}.extends((0,_Progressable2.default)(_Fifo2.default)));

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:!0}),__webpack_require__(0);var _Fifo=__webpack_require__(3),_Fifo2=_interopRequireDefault(_Fifo),_Progressable=__webpack_require__(2),_Progressable2=_interopRequireDefault(_Progressable),_Suspendable=__webpack_require__(4),_Suspendable2=_interopRequireDefault(_Suspendable);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}exports.default=(0,_Suspendable2.default)(function(){this.reader=new FileReader,this.reader.addEventListener('loadend',function(){if(2==this.reader.readyState){var b=this.reader.result;this[0].resulthandler(b),this.pop(),this.active=!1,this.action()}}.bind(this)),this.active=!1,this.read=function(b,c){this.push({file:b,resulthandler:c}),this.action()},this.action=function(){!this.active&&0<this.length&&(this.reader.readAsArrayBuffer(this[0].file),this.active=!0)}}.extends((0,_Progressable2.default)(_Fifo2.default)));

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _createClass=function(){function a(b,c){for(var e,d=0;d<c.length;d++)e=c[d],e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(b,e.key,e)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();Object.defineProperty(exports,"__esModule",{value:!0});function _toConsumableArray(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var TimerStack=function(){function a(){_classCallCheck(this,a),this.buffer=[]}return _createClass(a,[{key:"add",value:function add(b,c,d,e){for(var f=0;f<this.buffer.length;f++)if(this.buffer[f].action==b&&this.buffer[f].args==c)return null;var g=this.buffer.push({id:0,action:b,args:c,interval:d,times:e})-1;return this.buffer[g].id=setInterval(this.action.bind(this,g),d),g}},{key:"action",value:function action(b){if(b>this.buffer.length-1)return null;var c=this.buffer[b];return 0<c.times&&(1==c.times?this.remove(this.buffer[b]):c.times--),c.action.apply(c,_toConsumableArray(c.args))}},{key:"remove",value:function remove(b){clearInterval(b.id),this.buffer.splice(this.buffer.indexOf(b),1)}}]),a}();exports.default=TimerStack;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:!0}),exports.selector=selector,exports.label=label,exports.DualState=DualState,exports.Pushable=Pushable,exports.Switchable=Switchable,exports.PushButton=PushButton,exports.ToggleButton=ToggleButton;var _Element=__webpack_require__(1),_Element2=_interopRequireDefault(_Element),_Section=__webpack_require__(6),_Section2=_interopRequireDefault(_Section);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function selector(a){var b=(0,_Section2.default)('.selector'+a);return b.multiple=!1,b._selected=null,b.__defineSetter__('selected',function(c){return this.multiple?(this._selected.push||(this._selected=[this._selected]),-1==this._selected.indexOf(c)?this._selected.push(c):this._selected.splice(this._selected.indexOf(c),1),this._selected):(null!=this._selected&&(this._selected==c?!this._selected.sticky&&(c=null):this._selected.toggle(!1)),this._selected=c)}),b.__defineGetter__('selected',function(){return this._selected}),b.items=[],b.wipe=function(){for(this.selected=null;0<this.items.length;)this.removeItem(this.items.length-1)},b.addEventListener('click',function(c){for(var d,f=0;f<this.items.length;f++)if(this.items[f]==c.target||this.items[f].contains(c.target)){d=this.items[f];break}d&&'false'==d.getAttribute('disabled')&&(this.selected=d)},!0),b.appendItem=function(c){return this.insertItem(c,null)},b.insertItem=function(c,d){if(c.switchable||Switchable(c),'number'==typeof d){var f=d;d=this.items[f]}else if(null==d)var f=this.items.length;return this.items.splice(f,0,c),this.insertElement(c,d)},b.removeItem=function(c){if('number'!=typeof c)var d=this.items.indexOf(c);else var d=c;this.removeElement(this.items[d]),this.items.splice(d,1)},b.insert=b.insertItem,b.append=b.appendItem,b.remove=b.removeItem,b}function label(a){var b=(0,_Element2.default)('div'+(arguments[1]||''));return b.__defineSetter__('value',function(c){return this.setAttribute('value',c),c}),b.__defineGetter__('value',function(){return this.getAttribute('value')}),b.value=a||b.id,b}function DualState(a){return a.setAttribute('disabled',!1),a.enable=function(){this.setAttribute('disabled',!1)},a.disable=function(){this.setAttribute('disabled',!0)},a}function Pushable(a){return DualState(a),a.addEventListener('click',function(b){this.hasAttribute('disabled')&&'false'==this.getAttribute('disabled')&&this.action(b),b.stopPropagation()}),a.action||(a.action=function(){}),a.pushable=!0,a}function Switchable(a){return DualState(a),a.sticky=!1,a.addEventListener('click',function(){'false'==this.getAttribute('disabled')&&(this.classList.contains('selected')?!this.sticky&&this.toggle(!1):this.toggle(!0))}),a.toggle=function(b){if(0<arguments.length)var c=b;else c=!this.classList.contains('selected');return c?this.classList.add('selected'):this.classList.remove('selected'),this.dispatchEvent(new CustomEvent('select',{bubbles:!0,detail:{selected:c}})),this.switch(c),this},a.switch||(a.switch=function(){}),a.switchable=!0,a.setAttribute('switchable','true'),a}function PushButton(a,b){return Pushable(new label(b,'.button#'+a))}function ToggleButton(a,b){return Switchable(new label(b,'.button#'+a))}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=progress;var _Element=__webpack_require__(1),_Element2=_interopRequireDefault(_Element);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function progress(a){var b=new _Element2.default("div.progress"+(a||""));return b.hiddenstate="hidden",b.appendChild(b.bar=new _Element2.default("div.progressbar")),b.active=!1,b.infinite=!1,b.__defineGetter__("total",b.getTotal=function(){return parseInt(b.getAttribute("max"))}),b.__defineSetter__("total",b.setTotal=function(c){b.setAttribute("max",c)}),b.__defineGetter__("value",b.getState=function(){var c=b.total;return 0<c?b.getAttribute("value"):b.active?0:-1}),b.__defineSetter__("value",b.setState=function(c){var d=b.total;if(!!!d||b.infinite||!b.active)return-1;if(0<=c&&c<=d){var e=Math.floor(100*(c/d)).toString()+"%";b.bar.style.width=e,b.bar.innerText=e,b.setAttribute("value",c)}return c}),b.show=function(c){return!(0>c)&&(b.active=!0,b.classList.remove(b.hiddenstate),0==c?(b.infinite=!0,b.total=0,b.bar.style.width="25%",b.bar.classList.add("infiniteprogress")):(b.infinite=!1,b.total=c,b.bar.className="progressbar",b.setState(b.value||(b.value=0))),!0)},b.hide=function(c){return c&&(b.classList.remove(b.hiddenstate),b.hiddenstate=c),b.classList.add(b.hiddenstate),b.active=!1,b.infinite=!1,b.setState(0),b.total=null,!0},b.infinite=function(){b.show(0)},b.hide(),b}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};var _Mathabs=Math.abs,_Mathceil=Math.ceil,_Mathfloor=Math.floor;Object.defineProperty(exports,"__esModule",{value:!0});exports.default=Scrollable;var _Scroll=__webpack_require__(5),_Scroll2=_interopRequireDefault(_Scroll);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function Scrollable(a){var b,c,d,f,g,h,i,j;return"object"===_typeof(a.onwheel)&&"object"===_typeof(a.onmousemove)&&(a.hscroll=a.insertBefore((0,_Scroll2.default)("horizontal"),a.children[0]),a.vscroll=a.insertBefore((0,_Scroll2.default)("vertical"),a.children[0]),a.initialized=!1,a.autoscroll=!1,a.scrolltimer=null,a.getVScrollMax=function(){return d},a.getHScrollMax=function(){return f},a.addEventListener("myscroll",function(k){0==k.detail?this.vscroll.style.top=(this.scrollTop*(1+b)).toString()+"px":this.hscroll.style.left=(this.scrollLeft*(1+c)).toString()+"px"}.bind(a)),a.scrollYBy=function(k){var m=this.scrollTop;return this.scrollTop=m+k>=d?d:m+k,this.dispatchEvent(new CustomEvent("myscroll",{bubbles:!0,detail:0})),this.scrollTop},a.scrollXBy=function(k){var m=this.scrollLeft;return this.scrollLeft=m+k>=f?f:m+k,this.dispatchEvent(new CustomEvent("myscroll",{bubbles:!0,detail:1})),this.scrollLeft},a.AutoScroll=function(){return a.autoscroll?void(0!=a.autoscrollDelta.X&&a.scrollXBy(_Mathfloor(a.autoscrollDelta.X/6)),0!=a.autoscrollDelta.Y&&a.scrollYBy(_Mathfloor(a.autoscrollDelta.Y/6))):clearInterval(a.scrolltimer)},a.cancelScroll=function(){this.autoscroll&&null!=this.scrolltimer&&(clearInterval(this.scrolltimer),this.scrolltimer=null),this.vscroll.isonscroll=!1,g=null,this.hscroll.isonscroll=!1,h=null},a.addEventListener("wheel",function(k){a.scrollYBy(k.deltaY/4),k.stopPropagation(),k.preventDefault()}),a.addEventListener("mousedown",function(k){if(a.cancelScroll(),k.srcElement==this.vscroll)g=k.clientY;else if(k.srcElement==this.hscroll)h=k.clientX;else return!1;var m=k.srcElement;m.isonscroll=!0,k.preventDefault()}),a.addEventListener("mousemove",function(k){if(this.vscroll.isonscroll)this.scrollYBy((k.clientY-g)/b),g=k.clientY;else if(this.hscroll.isonscroll)this.scrollXBy((k.clientX-h)/c),h=k.clientX;else if(this.autoscroll){for(var m=_Mathceil(this.clientWidth/5),n=_Mathceil(this.clientHeight/5),o=k.offsetX,p=k.offsetY,q=0;k.path[q]!=this;)o+=k.path[q].offsetLeft,p+=k.path[q].offsetTop,q++;o-=this.scrollLeft,p-=this.scrollTop,this.autoscrollDelta={X:o<m?o-m:this.clientWidth-o<m?m-this.clientWidth+o:0,Y:p<n?p-n:this.clientHeight-p<n?n-this.clientHeight+p:0},null==this.scrolltimer&&(this.scrolltimer=setInterval(this.AutoScroll,100))}else return!1;k.preventDefault()}),a.addEventListener("mouseup",function(k){a.cancelScroll(),k.preventDefault()}),a.addEventListener("mouseleave",function(){a.cancelScroll()}),a.addEventListener("touchstart",function(k){k.preventDefault(),k.stopPropagation(),1==k.touches.length&&("true"==this.vscroll.getAttribute("active")&&(this.vscroll.isonscroll=!0,i=g=k.changedTouches[0].clientY),"true"==this.hscroll.getAttribute("active")&&(this.hscroll.isonscroll=!0,j=h=k.changedTouches[0].clientX))}),a.addEventListener("touchmove",function(k){k.preventDefault(),k.stopPropagation(),1==k.touches.length?(this.vscroll.isonscroll&&(this.scrollYBy(g-k.changedTouches[0].clientY),g=k.changedTouches[0].clientY,i=null),this.hscroll.isonscroll&&(this.scrollXBy(h-k.changedTouches[0].clientX),h=k.changedTouches[0].clientX,j=null)):a.cancelScroll()}),a.addEventListener("touchend",function(k){var m=!1;this.vscroll.isonscroll&&null!=i&&8>_Mathabs(i-k.changedTouches[0].clientY)&&(m=!0),this.hscroll.isonscroll&&null!=j&&8>_Mathabs(j-k.changedTouches[0].clientX)&&(m=!0),m?k.srcElement.click():a.cancelScroll()}),a.addEventListener("touchcancel",function(){a.cancelScroll()}),(a.scrollupdate=function(){d=a.scrollHeight-a.clientHeight,b=a.clientHeight/a.scrollHeight,1>b?(a.vscroll.setAttribute("active",!0),a.vscroll.style.height=(b*a.clientHeight-4).toString()+"px",a.selected&&(a.selected.offsetTop<this.scrollTop||a.selected.offsetTop>this.scrollTop+this.offsetHeight)&&this.scrollYBy(a.selected.offsetTop-this.scrollTop)):a.vscroll.setAttribute("active",!1),f=a.scrollWidth-a.clientWidth,c=a.clientWidth/a.scrollWidth,1>c?(a.hscroll.setAttribute("active",!0),a.hscroll.style.width=(c*a.clientWidth-4).toString()+"px",a.selected&&(a.selected.offsetLeft<this.scrollLeft||a.selected.offsetLeft>this.scrollLeft+this.offsetWidth)&&this.scrollXBy(a.selected.offsetLeft-this.scrollLeft)):a.hscroll.setAttribute("active",!1)})(),a.addEventListener("extend",a.scrollupdate),a.addEventListener("transitionend",a.scrollupdate),a.addEventListener("webkittransitionend",a.scrollupdate),a.addEventListener("otransitionend",a.scrollupdate),a.addEventListener("mouseenter",a.scrollupdate),a.addEventListener("focus",a.scrollupdate)),a}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=addWheelListener;var _addEventListener,support,prefix="";window.addEventListener?_addEventListener="addEventListener":(_addEventListener="attachEvent",prefix="on"),support="onwheel"in document.createElement("div")?"wheel":document.onmousewheel===void 0?"DOMMouseScroll":"mousewheel";function _addWheelListener(a,b,c,d){a[_addEventListener](prefix+b,"wheel"==support?c:function(e){e||(e=window.event);var f={originalEvent:e,target:e.target||e.srcElement,type:"wheel",deltaMode:"MozMousePixelScroll"==e.type?0:1,deltaX:0,deltaY:0,deltaZ:0,preventDefault:function preventDefault(){e.preventDefault?e.preventDefault():e.returnValue=!1}};return"mousewheel"==support?(f.deltaY=-1/40*e.wheelDelta,e.wheelDeltaX&&(f.deltaX=-1/40*e.wheelDeltaX)):f.deltaY=e.detail,c(f)},d||!1)}function addWheelListener(a,b,c){_addWheelListener(a,support,b,c),"DOMMouseScroll"==support&&_addWheelListener(a,"MozMousePixelScroll",b,c)}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:!0});var _addWheelListener=__webpack_require__(17),_addWheelListener2=_interopRequireDefault(_addWheelListener),_isScrolledIntoView=__webpack_require__(19),_isScrolledIntoView2=_interopRequireDefault(_isScrolledIntoView),_Element=__webpack_require__(1),_Element2=_interopRequireDefault(_Element),_Section=__webpack_require__(6),_Controls=__webpack_require__(14),_Progress=__webpack_require__(15),_Progress2=_interopRequireDefault(_Progress),_Progressable=__webpack_require__(2),_Progressable2=_interopRequireDefault(_Progressable),_Scroll=__webpack_require__(5),_Scroll2=_interopRequireDefault(_Scroll),_Scrollable=__webpack_require__(16),_Scrollable2=_interopRequireDefault(_Scrollable);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}exports.default={addWheelListener:_addWheelListener2.default,isScrolledIntoView:_isScrolledIntoView2.default,element:_Element2.default,section:_Section.section,selector:_Controls.selector,label:_Controls.label,progress:_Progress2.default,scroll:_Scroll2.default,DualState:_Controls.DualState,Pushable:_Controls.Pushable,Switchable:_Controls.Switchable,PushButton:_Controls.PushButton,ToggleButton:_Controls.ToggleButton,Progressable:_Progressable2.default,Extendable:_Section.Extendable,Scrollable:_Scrollable2.default};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=isScrolledIntoView;function isScrolledIntoView(a){var b=a.getBoundingClientRect().top,c=a.getBoundingClientRect().bottom,d=0<=b&&c<=window.innerHeight;return d}

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ })
/******/ ]);