(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[455],{3454:function(e,t,r){"use strict";var n,i;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(i=r.g.process)?void 0:i.env)?r.g.process:r(7663)},3841:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{noSSR:function(){return l},default:function(){return s}});let n=r(8754);r(5893),r(7294);let i=n._(r(8354));function o(e){return{default:(null==e?void 0:e.default)||e}}function l(e,t){return delete t.webpack,delete t.modules,e(t)}function s(e,t){let r=i.default,n={loading:e=>{let{error:t,isLoading:r,pastDelay:n}=e;return null}};e instanceof Promise?n.loader=()=>e:"function"==typeof e?n.loader=e:"object"==typeof e&&(n={...n,...e});let s=(n={...n,...t}).loader;return(n.loadableGenerated&&(n={...n,...n.loadableGenerated},delete n.loadableGenerated),"boolean"!=typeof n.ssr||n.ssr)?r({...n,loader:()=>null!=s?s().then(o):Promise.resolve(o(()=>null))}):(delete n.webpack,delete n.modules,l(r,n))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7309:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return n}});let n=r(8754)._(r(7294)).default.createContext(null)},8354:function(e,t,r){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return h}});let n=r(8754)._(r(7294)),i=r(7309),o=[],l=[],s=!1;function a(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),o=null;function a(){if(!o){let t=new d(e,r);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()}if(!s){let e=r.webpack?r.webpack():r.modules;e&&l.push(t=>{for(let r of e)if(t.includes(r))return a()})}function c(e,t){!function(){a();let e=n.default.useContext(i.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(t=>{e(t)})}();let l=n.default.useSyncExternalStore(o.subscribe,o.getCurrentValue,o.getCurrentValue);return n.default.useImperativeHandle(t,()=>({retry:o.retry}),[]),n.default.useMemo(()=>{var t;return l.loading||l.error?n.default.createElement(r.loading,{isLoading:l.loading,pastDelay:l.pastDelay,timedOut:l.timedOut,error:l.error,retry:o.retry}):l.loaded?n.default.createElement((t=l.loaded)&&t.default?t.default:t,e):null},[e,l])}return c.preload=()=>a(),c.displayName="LoadableComponent",n.default.forwardRef(c)}(a,e)}function u(e,t){let r=[];for(;e.length;){let n=e.pop();r.push(n(t))}return Promise.all(r).then(()=>{if(e.length)return u(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{u(o).then(e,t)}),c.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let r=()=>(s=!0,t());u(l,e).then(r,r)})),window.__NEXT_PRELOADREADY=c.preloadReady;let h=c},5033:function(e,t,r){var n=r(3454);r(1479);var i=r(7294),o=i&&"object"==typeof i&&"default"in i?i:{default:i};function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var s=void 0!==n&&n.env&&!0,a=function(e){return"[object String]"===Object.prototype.toString.call(e)},d=function(){function e(e){var t=void 0===e?{}:e,r=t.name,n=void 0===r?"stylesheet":r,i=t.optimizeForSpeed,o=void 0===i?s:i;c(a(n),"`name` must be a string"),this._name=n,this._deletedRulePlaceholder="#"+n+"-deleted-rule____{}",c("boolean"==typeof o,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=o,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var l=document.querySelector('meta[property="csp-nonce"]');this._nonce=l?l.getAttribute("content"):null}var t,r=e.prototype;return r.setOptimizeForSpeed=function(e){c("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),c(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},r.isOptimizeForSpeed=function(){return this._optimizeForSpeed},r.inject=function(){var e=this;if(c(!this._injected,"sheet already injected"),this._injected=!0,this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(s||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"==typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},r.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},r.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},r.insertRule=function(e,t){if(c(a(e),"`insertRule` accepts only strings"),this._optimizeForSpeed){var r=this.getSheet();"number"!=typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(t){return s||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var n=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,n))}return this._rulesCount++},r.replaceRule=function(e,t){if(this._optimizeForSpeed){var r=this.getSheet();if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(n){s||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var n=this._tags[e];c(n,"old rule at index `"+e+"` not found"),n.textContent=t}return e},r.deleteRule=function(e){if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];c(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},r.flush=function(){this._injected=!1,this._rulesCount=0,this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]},r.cssRules=function(){var e=this;return this._tags.reduce(function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},r.makeStyleTag=function(e,t,r){t&&c(a(t),"makeStyleTag accepts only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return r?i.insertBefore(n,r):i.appendChild(n),n},l(e.prototype,[{key:"length",get:function(){return this._rulesCount}}]),t&&l(e,t),e}();function c(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var u=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0},h={};function p(e,t){if(!t)return"jsx-"+e;var r=String(t),n=e+r;return h[n]||(h[n]="jsx-"+u(e+"-"+r)),h[n]}function f(e,t){var r=e+t;return h[r]||(h[r]=t.replace(/__jsx-style-dynamic-selector/g,e)),h[r]}var m=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,n=void 0===r?null:r,i=t.optimizeForSpeed,o=void 0!==i&&i;this._sheet=n||new d({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),n&&"boolean"==typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var r=this.getIdAndRules(e),n=r.styleId,i=r.rules;if(n in this._instancesCounts){this._instancesCounts[n]+=1;return}var o=i.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[n]=o,this._instancesCounts[n]=1},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return r[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},t.styles=function(e){var t,r;return t=this.cssRules(),void 0===(r=e)&&(r={}),t.map(function(e){var t=e[0],n=e[1];return o.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:r.nonce?r.nonce:void 0,dangerouslySetInnerHTML:{__html:n}})})},t.getIdAndRules=function(e){var t=e.children,r=e.dynamic,n=e.id;if(r){var i=p(n,r);return{styleId:i,rules:Array.isArray(t)?t.map(function(e){return f(i,e)}):[f(i,t)]}}return{styleId:p(n),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),g=i.createContext(null);g.displayName="StyleSheetContext";var b=o.default.useInsertionEffect||o.default.useLayoutEffect,y=new m;function S(e){var t=y||i.useContext(g);return t&&b(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)]),null}S.dynamic=function(e){return e.map(function(e){return p(e[0],e[1])}).join(" ")},t.style=S},9554:function(e,t,r){"use strict";e.exports=r(5033).style},1479:function(){},7663:function(e){!function(){var t={229:function(e){var t,r,n,i=e.exports={};function o(){throw Error("setTimeout has not been defined")}function l(){throw Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:l}catch(e){r=l}}();var a=[],d=!1,c=-1;function u(){d&&n&&(d=!1,n.length?a=n.concat(a):c=-1,a.length&&h())}function h(){if(!d){var e=s(u);d=!0;for(var t=a.length;t;){for(n=a,a=[];++c<t;)n&&n[c].run();c=-1,t=a.length}n=null,d=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===l||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function f(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];a.push(new p(e,t)),1!==a.length||d||s(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=f,i.addListener=f,i.once=f,i.off=f,i.removeListener=f,i.removeAllListeners=f,i.emit=f,i.prependListener=f,i.prependOnceListener=f,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}},l=!0;try{t[e](o,o.exports,n),l=!1}finally{l&&delete r[e]}return o.exports}n.ab="//";var i=n(229);e.exports=i}()},5152:function(e,t,r){e.exports=r(3841)},9008:function(e,t,r){e.exports=r(6665)},4298:function(e,t,r){e.exports=r(5874)},6744:function(e,t,r){"use strict";r.d(t,{zo:function(){return et}});var n,i=r(7294),o="colors",l="sizes",s="space",a={gap:s,gridGap:s,columnGap:s,gridColumnGap:s,rowGap:s,gridRowGap:s,inset:s,insetBlock:s,insetBlockEnd:s,insetBlockStart:s,insetInline:s,insetInlineEnd:s,insetInlineStart:s,margin:s,marginTop:s,marginRight:s,marginBottom:s,marginLeft:s,marginBlock:s,marginBlockEnd:s,marginBlockStart:s,marginInline:s,marginInlineEnd:s,marginInlineStart:s,padding:s,paddingTop:s,paddingRight:s,paddingBottom:s,paddingLeft:s,paddingBlock:s,paddingBlockEnd:s,paddingBlockStart:s,paddingInline:s,paddingInlineEnd:s,paddingInlineStart:s,top:s,right:s,bottom:s,left:s,scrollMargin:s,scrollMarginTop:s,scrollMarginRight:s,scrollMarginBottom:s,scrollMarginLeft:s,scrollMarginX:s,scrollMarginY:s,scrollMarginBlock:s,scrollMarginBlockEnd:s,scrollMarginBlockStart:s,scrollMarginInline:s,scrollMarginInlineEnd:s,scrollMarginInlineStart:s,scrollPadding:s,scrollPaddingTop:s,scrollPaddingRight:s,scrollPaddingBottom:s,scrollPaddingLeft:s,scrollPaddingX:s,scrollPaddingY:s,scrollPaddingBlock:s,scrollPaddingBlockEnd:s,scrollPaddingBlockStart:s,scrollPaddingInline:s,scrollPaddingInlineEnd:s,scrollPaddingInlineStart:s,fontSize:"fontSizes",background:o,backgroundColor:o,backgroundImage:o,borderImage:o,border:o,borderBlock:o,borderBlockEnd:o,borderBlockStart:o,borderBottom:o,borderBottomColor:o,borderColor:o,borderInline:o,borderInlineEnd:o,borderInlineStart:o,borderLeft:o,borderLeftColor:o,borderRight:o,borderRightColor:o,borderTop:o,borderTopColor:o,caretColor:o,color:o,columnRuleColor:o,fill:o,outline:o,outlineColor:o,stroke:o,textDecorationColor:o,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:l,minBlockSize:l,maxBlockSize:l,inlineSize:l,minInlineSize:l,maxInlineSize:l,width:l,minWidth:l,maxWidth:l,height:l,minHeight:l,maxHeight:l,flexBasis:l,gridTemplateColumns:l,gridTemplateRows:l,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},d=(e,t)=>"function"==typeof t?{"()":Function.prototype.toString.call(t)}:t,c=()=>{let e=Object.create(null);return(t,r,...n)=>{let i=JSON.stringify(t,d);return i in e?e[i]:e[i]=r(t,...n)}},u=Symbol.for("sxs.internal"),h=(e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),p=e=>{for(let t in e)return!0;return!1},{hasOwnProperty:f}=Object.prototype,m=e=>e.includes("-")?e:e.replace(/[A-Z]/g,e=>"-"+e.toLowerCase()),g=/\s+(?![^()]*\))/,b=e=>t=>e(..."string"==typeof t?String(t).split(g):[t]),y={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:b((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e})),marginInline:b((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e})),maxSize:b((e,t)=>({maxBlockSize:e,maxInlineSize:t||e})),minSize:b((e,t)=>({minBlockSize:e,minInlineSize:t||e})),paddingBlock:b((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e})),paddingInline:b((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e}))},S=/([\d.]+)([^]*)/,_=(e,t)=>e.length?e.reduce((e,r)=>(e.push(...t.map(e=>e.includes("&")?e.replace(/&/g,/[ +>|~]/.test(r)&&/&.*&/.test(e)?`:is(${r})`:r):r+" "+e)),e),[]):t,v=(e,t)=>e in k&&"string"==typeof t?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,(t,r,n,i)=>r+("stretch"===n?`-moz-available${i};${m(e)}:${r}-webkit-fill-available`:`-moz-fit-content${i};${m(e)}:${r}fit-content`)+i):String(t),k={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},x=e=>e?e+"-":"",R=(e,t,r)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,(e,n,i,o,l)=>"$"==o==!!i?e:(n||"--"==o?"calc(":"")+"var(--"+("$"===o?x(t)+(l.includes("$")?"":x(r))+l.replace(/\$/g,"-"):l)+")"+(n||"--"==o?"*"+(n||"")+(i||"1")+")":"")),j=/\s*,\s*(?![^()]*\))/,B=Object.prototype.toString,$=(e,t,r,n,i)=>{let o,l,s;let a=(e,t,r)=>{let d,c;let u=e=>{var h;for(d in e){let p=64===d.charCodeAt(0);for(c of p&&Array.isArray(e[d])?e[d]:[e[d]]){let e=/[A-Z]/.test(h=d)?h:h.replace(/-[^]/g,e=>e[1].toUpperCase()),f="object"==typeof c&&c&&c.toString===B&&(!n.utils[e]||!t.length);if(e in n.utils&&!f){let t=n.utils[e];if(t!==l){l=t,u(t(c)),l=null;continue}}else if(e in y){let t=y[e];if(t!==s){s=t,u(t(c)),s=null;continue}}if(p&&(d=(d.slice(1) in n.media?"@media "+n.media[d.slice(1)]:d).replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,(e,t,r,n,i,o)=>{let l=S.test(t),s=.0625*(l?-1:1),[a,d]=l?[n,t]:[t,n];return"("+("="===r[0]?"":">"===r[0]===l?"max-":"min-")+a+":"+("="!==r[0]&&1===r.length?d.replace(S,(e,t,n)=>Number(t)+s*(">"===r?1:-1)+n):d)+(i?") and ("+(">"===i[0]?"min-":"max-")+a+":"+(1===i.length?o.replace(S,(e,t,r)=>Number(t)+s*(">"===i?-1:1)+r):o):"")+")"})),f){let e=p?r.concat(d):[...r],n=p?[...t]:_(t,d.split(j));void 0!==o&&i(z(...o)),o=void 0,a(c,n,e)}else void 0===o&&(o=[[],t,r]),d=p||36!==d.charCodeAt(0)?d:`--${x(n.prefix)}${d.slice(1).replace(/\$/g,"-")}`,c=f?c:"number"==typeof c?c&&e in I?String(c)+"px":String(c):R(v(e,null==c?"":c),n.prefix,n.themeMap[e]),o[0].push(`${p?`${d} `:`${m(d)}:`}${c}`)}}};u(e),void 0!==o&&i(z(...o)),o=void 0};a(e,t,r)},z=(e,t,r)=>`${r.map(e=>`${e}{`).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(r.length?r.length+1:0).join("}")}`,I={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},T=e=>String.fromCharCode(e+(e>25?39:97)),w=e=>(e=>{let t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=T(t%52)+r;return T(t%52)+r})(((e,t)=>{let r=t.length;for(;r;)e=33*e^t.charCodeAt(--r);return e})(5381,JSON.stringify(e))>>>0),C=["themed","global","styled","onevar","resonevar","allvar","inline"],E=e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch(e){return!1}},P=e=>{let t;let r=()=>{let{cssRules:e}=t.sheet;return[].map.call(e,(r,n)=>{let{cssText:i}=r,o="";if(i.startsWith("--sxs"))return"";if(e[n-1]&&(o=e[n-1].cssText).startsWith("--sxs")){if(!r.cssRules.length)return"";for(let e in t.rules)if(t.rules[e].group===r)return`--sxs{--sxs:${[...t.rules[e].cache].join(" ")}}${i}`;return r.cssRules.length?`${o}${i}`:""}return i}).join("")},n=()=>{if(t){let{rules:e,sheet:r}=t;if(!r.deleteRule){for(;3===Object(Object(r.cssRules)[0]).type;)r.cssRules.splice(0,1);r.cssRules=[]}for(let t in e)delete e[t]}for(let i of Object(e).styleSheets||[])if(E(i)){for(let e=0,o=i.cssRules;o[e];++e){let l=Object(o[e]);if(1!==l.type)continue;let s=Object(o[e+1]);if(4!==s.type)continue;++e;let{cssText:a}=l;if(!a.startsWith("--sxs"))continue;let d=a.slice(14,-3).trim().split(/\s+/),c=C[d[0]];c&&(t||(t={sheet:i,reset:n,rules:{},toString:r}),t.rules[c]={group:s,index:e,cache:new Set(d)})}if(t)break}if(!t){let i=(e,t)=>({type:t,cssRules:[],insertRule(e,t){this.cssRules.splice(t,0,i(e,{import:3,undefined:1}[(e.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return"@media{}"===e?`@media{${[].map.call(this.cssRules,e=>e.cssText).join("")}}`:e}});t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:i("","text/css"),rules:{},reset:n,toString:r}}let{sheet:i,rules:o}=t;for(let e=C.length-1;e>=0;--e){let t=C[e];if(!o[t]){let r=C[e+1],n=o[r]?o[r].index:i.cssRules.length;i.insertRule("@media{}",n),i.insertRule(`--sxs{--sxs:${e}}`,n),o[t]={group:i.cssRules[n+1],index:n,cache:new Set([e])}}O(o[t])}};return n(),t},O=e=>{let t=e.group,r=t.cssRules.length;e.apply=e=>{try{t.insertRule(e,r),++r}catch(e){}}},W=Symbol(),F=c(),M=(e,t)=>F(e,()=>(...r)=>{let n={type:null,composers:new Set};for(let t of r)if(null!=t){if(t[u])for(let e of(null==n.type&&(n.type=t[u].type),t[u].composers))n.composers.add(e);else t.constructor!==Object||t.$$typeof?null==n.type&&(n.type=t):n.composers.add(A(t,e))}return null==n.type&&(n.type="span"),n.composers.size||n.composers.add(["PJLV",{},[],[],{},[]]),L(e,n,t)}),A=({variants:e,compoundVariants:t,defaultVariants:r,...n},i)=>{let o=`${x(i.prefix)}c-${w(n)}`,l=[],s=[],a=Object.create(null),d=[];for(let e in r)a[e]=String(r[e]);if("object"==typeof e&&e)for(let t in e){f.call(a,t)||(a[t]="undefined");let r=e[t];for(let e in r){let n={[t]:String(e)};"undefined"===String(e)&&d.push(t);let i=r[e],o=[n,i,!p(i)];l.push(o)}}if("object"==typeof t&&t)for(let e of t){let{css:t,...r}=e;for(let e in t="object"==typeof t&&t||{},r)r[e]=String(r[e]);let n=[r,t,!p(t)];s.push(n)}return[o,n,l,s,a,d]},L=(e,t,r)=>{let[n,i,o,l]=N(t.composers),s="function"==typeof t.type||t.type.$$typeof?(e=>{function t(){for(let r=0;r<t[W].length;r++){let[n,i]=t[W][r];e.rules[n].apply(i)}return t[W]=[],null}return t[W]=[],t.rules={},C.forEach(e=>t.rules[e]={apply:r=>t[W].push([e,r])}),t})(r):null,a=(s||r).rules,d=`.${n}${i.length>1?`:where(.${i.slice(1).join(".")})`:""}`,c=c=>{let{css:u,...h}=c="object"==typeof c&&c||V,p={};for(let e in o)if(delete h[e],e in c){let t=c[e];"object"==typeof t&&t?p[e]={"@initial":o[e],...t}:(t=String(t),p[e]="undefined"!==t||l.has(e)?t:o[e])}else p[e]=o[e];let f=new Set([...i]);for(let[n,i,o,l]of t.composers){r.rules.styled.cache.has(n)||(r.rules.styled.cache.add(n),$(i,[`.${n}`],[],e,e=>{a.styled.apply(e)}));let t=D(o,p,e.media),s=D(l,p,e.media,!0);for(let i of t)if(void 0!==i)for(let[t,o,l]of i){let i=`${n}-${w(o)}-${t}`;f.add(i);let s=(l?r.rules.resonevar:r.rules.onevar).cache,d=l?a.resonevar:a.onevar;s.has(i)||(s.add(i),$(o,[`.${i}`],[],e,e=>{d.apply(e)}))}for(let t of s)if(void 0!==t)for(let[i,o]of t){let t=`${n}-${w(o)}-${i}`;f.add(t),r.rules.allvar.cache.has(t)||(r.rules.allvar.cache.add(t),$(o,[`.${t}`],[],e,e=>{a.allvar.apply(e)}))}}if("object"==typeof u&&u){let t=`${n}-i${w(u)}-css`;f.add(t),r.rules.inline.cache.has(t)||(r.rules.inline.cache.add(t),$(u,[`.${t}`],[],e,e=>{a.inline.apply(e)}))}for(let e of String(c.className||"").trim().split(/\s+/))e&&f.add(e);let m=h.className=[...f].join(" ");return{type:t.type,className:m,selector:d,props:h,toString:()=>m,deferredInjector:s}};return h(c,{className:n,selector:d,[u]:t,toString:()=>(r.rules.styled.cache.has(n)||c(),n)})},N=e=>{let t="",r=[],n={},i=[];for(let[o,,,,l,s]of e)for(let e in""===t&&(t=o),r.push(o),i.push(...s),l){let t=l[e];(void 0===n[e]||"undefined"!==t||s.includes(t))&&(n[e]=t)}return[t,r,n,new Set(i)]},D=(e,t,r,n)=>{let i=[];e:for(let[o,l,s]of e){if(s)continue;let e,a=0,d=!1;for(e in o){let n=o[e],i=t[e];if(i!==n){if("object"!=typeof i||!i)continue e;{let e,t,o=0;for(let l in i){if(n===String(i[l])){if("@initial"!==l){let e=l.slice(1);(t=t||[]).push(e in r?r[e]:l.replace(/^@media ?/,"")),d=!0}a+=o,e=!0}++o}if(t&&t.length&&(l={["@media "+t.join(", ")]:l}),!e)continue e}}}(i[a]=i[a]||[]).push([n?"cv":`${e}-${o[e]}`,l,d])}return i},V={},H=c(),G=(e,t)=>H(e,()=>(...r)=>{let n=()=>{for(let n of r){let r=w(n="object"==typeof n&&n||{});if(!t.rules.global.cache.has(r)){if(t.rules.global.cache.add(r),"@import"in n){let e=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let r of[].concat(n["@import"]))r=r.includes('"')||r.includes("'")?r:`"${r}"`,t.sheet.insertRule(`@import ${r};`,e++);delete n["@import"]}$(n,[],[],e,e=>{t.rules.global.apply(e)})}}return""};return h(n,{toString:n})}),q=c(),J=(e,t)=>q(e,()=>r=>{let n=`${x(e.prefix)}k-${w(r)}`,i=()=>{if(!t.rules.global.cache.has(n)){t.rules.global.cache.add(n);let i=[];$(r,[],[],e,e=>i.push(e));let o=`@keyframes ${n}{${i.join("")}}`;t.rules.global.apply(o)}return n};return h(i,{get name(){return i()},toString:i})}),U=class{constructor(e,t,r,n){this.token=null==e?"":String(e),this.value=null==t?"":String(t),this.scale=null==r?"":String(r),this.prefix=null==n?"":String(n)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+x(this.prefix)+x(this.scale)+this.token}toString(){return this.computedValue}},X=c(),Y=(e,t)=>X(e,()=>(r,n)=>{n="object"==typeof r&&r||Object(n);let i=`.${r=(r="string"==typeof r?r:"")||`${x(e.prefix)}t-${w(n)}`}`,o={},l=[];for(let t in n)for(let r in o[t]={},n[t]){let i=`--${x(e.prefix)}${t}-${r}`,s=R(String(n[t][r]),e.prefix,t);o[t][r]=new U(r,s,t,e.prefix),l.push(`${i}:${s}`)}let s=()=>{if(l.length&&!t.rules.themed.cache.has(r)){t.rules.themed.cache.add(r);let i=`${n===e.theme?":root,":""}.${r}{${l.join(";")}}`;t.rules.themed.apply(i)}return r};return{...o,get className(){return s()},selector:i,toString:s}}),Z=c(),K=c(),Q=e=>{let t=(e=>{let t=!1,r=Z(e,e=>{t=!0;let r="prefix"in(e="object"==typeof e&&e||{})?String(e.prefix):"",n="object"==typeof e.media&&e.media||{},i="object"==typeof e.root?e.root||null:globalThis.document||null,o="object"==typeof e.theme&&e.theme||{},l={prefix:r,media:n,theme:o,themeMap:"object"==typeof e.themeMap&&e.themeMap||{...a},utils:"object"==typeof e.utils&&e.utils||{}},s=P(i),d={css:M(l,s),globalCss:G(l,s),keyframes:J(l,s),createTheme:Y(l,s),reset(){s.reset(),d.theme.toString()},theme:{},sheet:s,config:l,prefix:r,getCssText:s.toString,toString:s.toString};return String(d.theme=d.createTheme(o)),d});return t||r.reset(),r})(e);return t.styled=(({config:e,sheet:t})=>K(e,()=>{let r=M(e,t);return(...e)=>{let t=r(...e),n=t[u].type,o=i.forwardRef((e,r)=>{let o=e&&e.as||n,{props:l,deferredInjector:s}=t(e);return delete l.as,l.ref=r,s?i.createElement(i.Fragment,null,i.createElement(o,l),i.createElement(s,null)):i.createElement(o,l)});return o.className=t.className,o.displayName=`Styled.${n.displayName||n.name||n}`,o.selector=t.selector,o.toString=()=>t.selector,o[u]=t[u],o}}))(t),t},ee=()=>n||(n=Q()),et=(...e)=>ee().styled(...e)}}]);