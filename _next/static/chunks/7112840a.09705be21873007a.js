"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16],{19:function(e,t,r){r.d(t,{ET:function(){return it},JU:function(){return sV},PL:function(){return s7},ad:function(){return sF},hJ:function(){return sL},oe:function(){return ie}});var n,s,i,a,o=r(7456),l=r(8463),u=r(3333),h=r(4444),c=r(5062),d=r(4489);r(3454);var m=r(1876).Buffer;let f="@firebase/firestore";/**
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
 */class g{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}g.UNAUTHENTICATED=new g(null),g.GOOGLE_CREDENTIALS=new g("google-credentials-uid"),g.FIRST_PARTY=new g("first-party-uid"),g.MOCK_USER=new g("mock-user");/**
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
 */let p="11.2.0",y=new u.Yd("@firebase/firestore");function v(){return y.logLevel}function w(e,...t){if(y.logLevel<=u.in.DEBUG){let r=t.map(T);y.debug(`Firestore (${p}): ${e}`,...r)}}function _(e,...t){if(y.logLevel<=u.in.ERROR){let r=t.map(T);y.error(`Firestore (${p}): ${e}`,...r)}}function E(e,...t){if(y.logLevel<=u.in.WARN){let r=t.map(T);y.warn(`Firestore (${p}): ${e}`,...r)}}function T(e){if("string"==typeof e)return e;try{/**
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
 */return JSON.stringify(e)}catch(t){return e}}/**
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
 */function C(e="Unexpected state"){let t=`FIRESTORE (${p}) INTERNAL ASSERTION FAILED: `+e;throw _(t),Error(t)}/**
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
 */let S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class I extends h.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class b{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class k{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class N{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(g.UNAUTHENTICATED))}shutdown(){}}class A{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class D{constructor(e){this.t=e,this.currentUser=g.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){void 0===this.o||C();let r=this.i,n=e=>this.i!==r?(r=this.i,t(e)):Promise.resolve(),s=new b;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new b,e.enqueueRetryable(()=>n(this.currentUser))};let i=()=>{let t=s;e.enqueueRetryable(async()=>{await t.promise,await n(this.currentUser)})},a=e=>{w("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),i())};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(w("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new b)}},0),i()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(w("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||C(),new k(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||C(),new g(e)}}class R{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=g.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class x{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new R(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(g.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class L{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class V{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){void 0===this.o||C();let r=e=>{null!=e.error&&w("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let r=e.token!==this.R;return this.R=e.token,w("FirebaseAppCheckTokenProvider",`Received ${r?"new":"existing"} token.`),r?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>r(t))};let n=e=>{w("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>n(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?n(e):w("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||C(),this.R=e.token,new L(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */class M{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,r="";for(;r.length<20;){let n=/**
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
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),r=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(r);else for(let t=0;t<e;t++)r[t]=Math.floor(256*Math.random());return r}(40);for(let s=0;s<n.length;++s)r.length<20&&n[s]<t&&(r+=e.charAt(n[s]%e.length))}return r}}function O(e,t){return e<t?-1:e>t?1:0}function F(e,t,r){return e.length===t.length&&e.every((e,n)=>r(e,t[n]))}/**
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
 */class P{static now(){return P.fromMillis(Date.now())}static fromDate(e){return P.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new P(t,Math.floor(1e6*(e-1e3*t)))}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new I(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new I(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?O(this.nanoseconds,e.nanoseconds):O(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -62135596800).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class U{static fromTimestamp(e){return new U(e)}static min(){return new U(new P(0,0))}static max(){return new U(new P(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class q{constructor(e,t,r){void 0===t?t=0:t>e.length&&C(),void 0===r?r=e.length-t:r>e.length-t&&C(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return 0===q.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof q?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let n=0;n<r;n++){let r=q.compareSegments(e.get(n),t.get(n));if(0!==r)return r}return Math.sign(e.length-t.length)}static compareSegments(e,t){let r=q.isNumericId(e),n=q.isNumericId(t);return r&&!n?-1:!r&&n?1:r&&n?q.extractNumericId(e).compare(q.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return c.z8.fromString(e.substring(4,e.length-2))}}class B extends q{construct(e,t,r){return new B(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new I(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(e=>e.length>0))}return new B(t)}static emptyPath(){return new B([])}}let z=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $ extends q{construct(e,t,r){return new $(e,t,r)}static isValidIdentifier(e){return z.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new $(["__name__"])}static fromServerFormat(e){let t=[],r="",n=0,s=()=>{if(0===r.length)throw new I(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},i=!1;for(;n<e.length;){let t=e[n];if("\\"===t){if(n+1===e.length)throw new I(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[n+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new I(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=t,n+=2}else"`"===t?i=!i:"."!==t||i?r+=t:s(),n++}if(s(),i)throw new I(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $(t)}static emptyPath(){return new $([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(B.fromString(e))}static fromName(e){return new K(B.fromString(e).popFirst(5))}static empty(){return new K(B.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===B.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return B.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new B(e.slice()))}}/**
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
 */class G{constructor(e,t,r,n){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=n}}G.UNKNOWN_ID=-1;class Q{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Q(U.min(),K.empty(),-1)}static max(){return new Q(U.max(),K.empty(),-1)}}class j{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function W(e){if(e.code!==S.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;w("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&C(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new H((r,n)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(r,n)},this.catchCallback=e=>{this.wrapFailure(t,e).next(r,n)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof H?t:H.resolve(t)}catch(e){return H.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):H.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):H.reject(t)}static resolve(e){return new H((t,r)=>{t(e)})}static reject(e){return new H((t,r)=>{r(e)})}static waitFor(e){return new H((t,r)=>{let n=0,s=0,i=!1;e.forEach(e=>{++n,e.next(()=>{++s,i&&s===n&&t()},e=>r(e))}),i=!0,s===n&&t()})}static or(e){let t=H.resolve(!1);for(let r of e)t=t.next(e=>e?H.resolve(e):r());return t}static forEach(e,t){let r=[];return e.forEach((e,n)=>{r.push(t.call(this,e,n))}),this.waitFor(r)}static mapArray(e,t){return new H((r,n)=>{let s=e.length,i=Array(s),a=0;for(let o=0;o<s;o++){let l=o;t(e[l]).next(e=>{i[l]=e,++a===s&&r(i)},e=>n(e))}})}static doWhile(e,t){return new H((r,n)=>{let s=()=>{!0===e()?t().next(()=>{s()},n):r()};s()})}}function Y(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class X{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ie(e),this.se=e=>t.writeSequenceNumber(e))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.se&&this.se(e),e}}function J(e){return 0===e&&1/e==-1/0}/**
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
 */function Z(e){let t=0;for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t++;return t}function ee(e,t){for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t(r,e[r])}function et(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}X.oe=-1;/**
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
 */class er{constructor(e,t){this.comparator=e,this.root=t||es.EMPTY}insert(e,t){return new er(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,es.BLACK,null,null))}remove(e){return new er(this.comparator,this.root.remove(e,this.comparator).copy(null,null,es.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(0===r)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let n=this.comparator(e,r.key);if(0===n)return t+r.left.size;n<0?r=r.left:(t+=r.left.size+1,r=r.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new en(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new en(this.root,e,this.comparator,!1)}getReverseIterator(){return new en(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new en(this.root,e,this.comparator,!0)}}class en{constructor(e,t,r,n){this.isReverse=n,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&n&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class es{constructor(e,t,r,n,s){this.key=e,this.value=t,this.color=null!=r?r:es.RED,this.left=null!=n?n:es.EMPTY,this.right=null!=s?s:es.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,n,s){return new es(null!=e?e:this.key,null!=t?t:this.value,null!=r?r:this.color,null!=n?n:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let n=this,s=r(e,n.key);return(n=s<0?n.copy(null,null,null,n.left.insert(e,t,r),null):0===s?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,r))).fixUp()}removeMin(){if(this.left.isEmpty())return es.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let r,n=this;if(0>t(e,n.key))n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return es.EMPTY;r=n.right.min(),n=n.copy(r.key,r.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,es.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,es.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw C();let e=this.left.check();if(e!==this.right.check())throw C();return e+(this.isRed()?0:1)}}es.EMPTY=null,es.RED=!0,es.BLACK=!1,es.EMPTY=new class{constructor(){this.size=0}get key(){throw C()}get value(){throw C()}get color(){throw C()}get left(){throw C()}get right(){throw C()}copy(e,t,r,n,s){return this}insert(e,t,r){return new es(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ei{constructor(e){this.comparator=e,this.data=new er(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let n=r.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let r;for(r=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ea(this.data.getIterator())}getIteratorFrom(e){return new ea(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof ei)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new ei(this.comparator);return t.data=e,t}}class ea{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class eo{constructor(e){this.fields=e,e.sort($.comparator)}static empty(){return new eo([])}unionWith(e){let t=new ei($.comparator);for(let e of this.fields)t=t.add(e);for(let r of e)t=t.add(r);return new eo(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return F(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
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
 */class el extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class eu{constructor(e){this.binaryString=e}static fromBase64String(e){return new eu(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new el("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new eu(function(e){let t="";for(let r=0;r<e.length;++r)t+=String.fromCharCode(e[r]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return O(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}eu.EMPTY_BYTE_STRING=new eu("");let eh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ec(e){if(e||C(),"string"==typeof e){let t=0,r=eh.exec(e);if(r||C(),r[1]){let e=r[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:ed(e.seconds),nanos:ed(e.nanos)}}function ed(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function em(e){return"string"==typeof e?eu.fromBase64String(e):eu.fromUint8Array(e)}/**
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
 */function ef(e){var t,r;return"server_timestamp"===(null===(r=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===r?void 0:r.stringValue)}function eg(e){let t=e.mapValue.fields.__previous_value__;return ef(t)?eg(t):t}function ep(e){let t=ec(e.mapValue.fields.__local_write_time__.timestampValue);return new P(t.seconds,t.nanos)}/**
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
 */class ey{constructor(e,t,r,n,s,i,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=n,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}class ev{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ev("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof ev&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */let ew={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function e_(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ef(e)?4:eV(e)?9007199254740991:ex(e)?10:11:C()}function eE(e,t){if(e===t)return!0;let r=e_(e);if(r!==e_(t))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ep(e).isEqual(ep(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let r=ec(e.timestampValue),n=ec(t.timestampValue);return r.seconds===n.seconds&&r.nanos===n.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return em(e.bytesValue).isEqual(em(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return ed(e.geoPointValue.latitude)===ed(t.geoPointValue.latitude)&&ed(e.geoPointValue.longitude)===ed(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return ed(e.integerValue)===ed(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let r=ed(e.doubleValue),n=ed(t.doubleValue);return r===n?J(r)===J(n):isNaN(r)&&isNaN(n)}return!1}(e,t);case 9:return F(e.arrayValue.values||[],t.arrayValue.values||[],eE);case 10:case 11:return function(e,t){let r=e.mapValue.fields||{},n=t.mapValue.fields||{};if(Z(r)!==Z(n))return!1;for(let e in r)if(r.hasOwnProperty(e)&&(void 0===n[e]||!eE(r[e],n[e])))return!1;return!0}(e,t);default:return C()}}function eT(e,t){return void 0!==(e.values||[]).find(e=>eE(e,t))}function eC(e,t){if(e===t)return 0;let r=e_(e),n=e_(t);if(r!==n)return O(r,n);switch(r){case 0:case 9007199254740991:return 0;case 1:return O(e.booleanValue,t.booleanValue);case 2:return function(e,t){let r=ed(e.integerValue||e.doubleValue),n=ed(t.integerValue||t.doubleValue);return r<n?-1:r>n?1:r===n?0:isNaN(r)?isNaN(n)?0:-1:1}(e,t);case 3:return eS(e.timestampValue,t.timestampValue);case 4:return eS(ep(e),ep(t));case 5:return O(e.stringValue,t.stringValue);case 6:return function(e,t){let r=em(e),n=em(t);return r.compareTo(n)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let r=e.split("/"),n=t.split("/");for(let e=0;e<r.length&&e<n.length;e++){let t=O(r[e],n[e]);if(0!==t)return t}return O(r.length,n.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let r=O(ed(e.latitude),ed(t.latitude));return 0!==r?r:O(ed(e.longitude),ed(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return eI(e.arrayValue,t.arrayValue);case 10:return function(e,t){var r,n,s,i;let a=e.fields||{},o=t.fields||{},l=null===(r=a.value)||void 0===r?void 0:r.arrayValue,u=null===(n=o.value)||void 0===n?void 0:n.arrayValue,h=O((null===(s=null==l?void 0:l.values)||void 0===s?void 0:s.length)||0,(null===(i=null==u?void 0:u.values)||void 0===i?void 0:i.length)||0);return 0!==h?h:eI(l,u)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===ew.mapValue&&t===ew.mapValue)return 0;if(e===ew.mapValue)return 1;if(t===ew.mapValue)return -1;let r=e.fields||{},n=Object.keys(r),s=t.fields||{},i=Object.keys(s);n.sort(),i.sort();for(let e=0;e<n.length&&e<i.length;++e){let t=O(n[e],i[e]);if(0!==t)return t;let a=eC(r[n[e]],s[i[e]]);if(0!==a)return a}return O(n.length,i.length)}(e.mapValue,t.mapValue);default:throw C()}}function eS(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return O(e,t);let r=ec(e),n=ec(t),s=O(r.seconds,n.seconds);return 0!==s?s:O(r.nanos,n.nanos)}function eI(e,t){let r=e.values||[],n=t.values||[];for(let e=0;e<r.length&&e<n.length;++e){let t=eC(r[e],n[e]);if(t)return t}return O(r.length,n.length)}function eb(e){var t,r;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=ec(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?em(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,K.fromName(t).toString()):"geoPointValue"in e?(r=e.geoPointValue,`geo(${r.latitude},${r.longitude})`):"arrayValue"in e?function(e){let t="[",r=!0;for(let n of e.values||[])r?r=!1:t+=",",t+=eb(n);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),r="{",n=!0;for(let s of t)n?n=!1:r+=",",r+=`${s}:${eb(e.fields[s])}`;return r+"}"}(e.mapValue):C()}function ek(e){return!!e&&"integerValue"in e}function eN(e){return!!e&&"arrayValue"in e}function eA(e){return!!e&&"nullValue"in e}function eD(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function eR(e){return!!e&&"mapValue"in e}function ex(e){var t,r;return"__vector__"===(null===(r=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===r?void 0:r.stringValue)}function eL(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return ee(e.mapValue.fields,(e,r)=>t.mapValue.fields[e]=eL(r)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let r=0;r<(e.arrayValue.values||[]).length;++r)t.arrayValue.values[r]=eL(e.arrayValue.values[r]);return t}return Object.assign({},e)}function eV(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
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
 */class eM{constructor(e){this.value=e}static empty(){return new eM({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(!eR(t=(t.mapValue.fields||{})[e.get(r)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=eL(t)}setAll(e){let t=$.emptyPath(),r={},n=[];e.forEach((e,s)=>{if(!t.isImmediateParentOf(s)){let e=this.getFieldsMap(t);this.applyChanges(e,r,n),r={},n=[],t=s.popLast()}e?r[s.lastSegment()]=eL(e):n.push(s.lastSegment())});let s=this.getFieldsMap(t);this.applyChanges(s,r,n)}delete(e){let t=this.field(e.popLast());eR(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return eE(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let n=t.mapValue.fields[e.get(r)];eR(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=n),t=n}return t.mapValue.fields}applyChanges(e,t,r){for(let n of(ee(t,(t,r)=>e[t]=r),r))delete e[n]}clone(){return new eM(eL(this.value))}}/**
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
 */class eO{constructor(e,t,r,n,s,i,a){this.key=e,this.documentType=t,this.version=r,this.readTime=n,this.createTime=s,this.data=i,this.documentState=a}static newInvalidDocument(e){return new eO(e,0,U.min(),U.min(),U.min(),eM.empty(),0)}static newFoundDocument(e,t,r,n){return new eO(e,1,t,U.min(),r,n,0)}static newNoDocument(e,t){return new eO(e,2,t,U.min(),U.min(),eM.empty(),0)}static newUnknownDocument(e,t){return new eO(e,3,t,U.min(),U.min(),eM.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(U.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=eM.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=eM.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof eO&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new eO(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class eF{constructor(e,t){this.position=e,this.inclusive=t}}function eP(e,t,r){let n=0;for(let s=0;s<e.position.length;s++){let i=t[s],a=e.position[s];if(n=i.field.isKeyField()?K.comparator(K.fromName(a.referenceValue),r.key):eC(a,r.data.field(i.field)),"desc"===i.dir&&(n*=-1),0!==n)break}return n}function eU(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let r=0;r<e.position.length;r++)if(!eE(e.position[r],t.position[r]))return!1;return!0}/**
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
 */class eq{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
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
 */class eB{}class ez extends eB{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,r):new eQ(e,t,r):"array-contains"===t?new eY(e,r):"in"===t?new eX(e,r):"not-in"===t?new eJ(e,r):"array-contains-any"===t?new eZ(e,r):new ez(e,t,r)}static createKeyFieldInFilter(e,t,r){return"in"===t?new ej(e,r):new eW(e,r)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(eC(t,this.value)):null!==t&&e_(this.value)===e_(t)&&this.matchesComparison(eC(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return C()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class e$ extends eB{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new e$(e,t)}matches(e){return eK(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function eK(e){return"and"===e.op}function eG(e){for(let t of e.filters)if(t instanceof e$)return!1;return!0}class eQ extends ez{constructor(e,t,r){super(e,t,r),this.key=K.fromName(r.referenceValue)}matches(e){let t=K.comparator(e.key,this.key);return this.matchesComparison(t)}}class ej extends ez{constructor(e,t){super(e,"in",t),this.keys=eH("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class eW extends ez{constructor(e,t){super(e,"not-in",t),this.keys=eH("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function eH(e,t){var r;return((null===(r=t.arrayValue)||void 0===r?void 0:r.values)||[]).map(e=>K.fromName(e.referenceValue))}class eY extends ez{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return eN(t)&&eT(t.arrayValue,this.value)}}class eX extends ez{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&eT(this.value.arrayValue,t)}}class eJ extends ez{constructor(e,t){super(e,"not-in",t)}matches(e){if(eT(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!eT(this.value.arrayValue,t)}}class eZ extends ez{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!eN(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>eT(this.value.arrayValue,e))}}/**
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
 */class e0{constructor(e,t=null,r=[],n=[],s=null,i=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=n,this.limit=s,this.startAt=i,this.endAt=a,this.ue=null}}function e1(e,t=null,r=[],n=[],s=null,i=null,a=null){return new e0(e,t,r,n,s,i,a)}function e2(e){if(null===e.ue){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof ez)return t.field.canonicalString()+t.op.toString()+eb(t.value);if(eG(t)&&eK(t))return t.filters.map(t=>e(t)).join(",");{let r=t.filters.map(t=>e(t)).join(",");return`${t.op}(${r})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>eb(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>eb(e)).join(",")),e.ue=t}return e.ue}function e4(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let s=0;s<e.orderBy.length;s++){var r,n;if(r=e.orderBy[s],n=t.orderBy[s],!(r.dir===n.dir&&r.field.isEqual(n.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(!function e(t,r){return t instanceof ez?r instanceof ez&&t.op===r.op&&t.field.isEqual(r.field)&&eE(t.value,r.value):t instanceof e$?r instanceof e$&&t.op===r.op&&t.filters.length===r.filters.length&&t.filters.reduce((t,n,s)=>t&&e(n,r.filters[s]),!0):void C()}(e.filters[r],t.filters[r]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!eU(e.startAt,t.startAt)&&eU(e.endAt,t.endAt)}function e3(e){return K.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
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
 */class e8{constructor(e,t=null,r=[],n=[],s=null,i="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=n,this.limit=s,this.limitType=i,this.startAt=a,this.endAt=o,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function e9(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function e6(e){if(null===e.ce){let t;e.ce=[];let r=new Set;for(let t of e.explicitOrderBy)e.ce.push(t),r.add(t.field.canonicalString());let n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(t=new ei($.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t).forEach(t=>{r.has(t.canonicalString())||t.isKeyField()||e.ce.push(new eq(t,n))}),r.has($.keyField().canonicalString())||e.ce.push(new eq($.keyField(),n))}return e.ce}function e5(e){return e.le||(e.le=function(e,t){if("F"===e.limitType)return e1(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new eq(e.field,t)});let r=e.endAt?new eF(e.endAt.position,e.endAt.inclusive):null,n=e.startAt?new eF(e.startAt.position,e.startAt.inclusive):null;return e1(e.path,e.collectionGroup,t,e.filters,e.limit,r,n)}}(e,e6(e))),e.le}function e7(e,t,r){return new e8(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,r,e.startAt,e.endAt)}function te(e,t){return e4(e5(e),e5(t))&&e.limitType===t.limitType}function tt(e){return`${e2(e5(e))}|lt:${e.limitType}`}function tr(e){var t;let r;return`Query(target=${r=(t=e5(e)).path.canonicalString(),null!==t.collectionGroup&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof ez?`${t.field.canonicalString()} ${t.op} ${eb(t.value)}`:t instanceof e$?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(r+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>eb(e)).join(",")),t.endAt&&(r+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>eb(e)).join(",")),`Target(${r})`}; limitType=${e.limitType})`}function tn(e,t){return t.isFoundDocument()&&function(e,t){let r=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(r):K.isDocumentKey(e.path)?e.path.isEqual(r):e.path.isImmediateParentOf(r)}(e,t)&&function(e,t){for(let r of e6(e))if(!r.field.isKeyField()&&null===t.data.field(r.field))return!1;return!0}(e,t)&&function(e,t){for(let r of e.filters)if(!r.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,r){let n=eP(e,t,r);return e.inclusive?n<=0:n<0}(e.startAt,e6(e),t))&&(!e.endAt||!!function(e,t,r){let n=eP(e,t,r);return e.inclusive?n>=0:n>0}(e.endAt,e6(e),t))}function ts(e){return(t,r)=>{let n=!1;for(let s of e6(e)){let e=function(e,t,r){let n=e.field.isKeyField()?K.comparator(t.key,r.key):function(e,t,r){let n=t.data.field(e),s=r.data.field(e);return null!==n&&null!==s?eC(n,s):C()}(e.field,t,r);switch(e.dir){case"asc":return n;case"desc":return -1*n;default:return C()}}(s,t,r);if(0!==e)return e;n=n||s.field.isKeyField()}return 0}}/**
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
 */class ti{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0!==r){for(let[t,n]of r)if(this.equalsFn(t,e))return n}}has(e){return void 0!==this.get(e)}set(e,t){let r=this.mapKeyFn(e),n=this.inner[r];if(void 0===n)return this.inner[r]=[[e,t]],void this.innerSize++;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return void(n[r]=[e,t]);n.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0===r)return!1;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return 1===r.length?delete this.inner[t]:r.splice(n,1),this.innerSize--,!0;return!1}forEach(e){ee(this.inner,(t,r)=>{for(let[t,n]of r)e(t,n)})}isEmpty(){return et(this.inner)}size(){return this.innerSize}}/**
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
 */let ta=new er(K.comparator),to=new er(K.comparator);function tl(...e){let t=to;for(let r of e)t=t.insert(r.key,r);return t}function tu(e){let t=to;return e.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function th(){return new ti(e=>e.toString(),(e,t)=>e.isEqual(t))}let tc=new er(K.comparator),td=new ei(K.comparator);function tm(...e){let t=td;for(let r of e)t=t.add(r);return t}let tf=new ei(O);/**
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
 */function tg(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:J(t)?"-0":t}}function tp(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class ty{constructor(){this._=void 0}}function tv(e,t){return e instanceof tS?ek(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class tw extends ty{}class t_ extends ty{constructor(e){super(),this.elements=e}}function tE(e,t){let r=tb(t);for(let t of e.elements)r.some(e=>eE(e,t))||r.push(t);return{arrayValue:{values:r}}}class tT extends ty{constructor(e){super(),this.elements=e}}function tC(e,t){let r=tb(t);for(let t of e.elements)r=r.filter(e=>!eE(e,t));return{arrayValue:{values:r}}}class tS extends ty{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function tI(e){return ed(e.integerValue||e.doubleValue)}function tb(e){return eN(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class tk{constructor(e,t){this.version=e,this.transformResults=t}}class tN{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new tN}static exists(e){return new tN(void 0,e)}static updateTime(e){return new tN(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tA(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class tD{}function tR(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new tU(e.key,tN.none()):new tV(e.key,e.data,tN.none());{let r=e.data,n=eM.empty(),s=new ei($.comparator);for(let e of t.fields)if(!s.has(e)){let t=r.field(e);null===t&&e.length>1&&(e=e.popLast(),t=r.field(e)),null===t?n.delete(e):n.set(e,t),s=s.add(e)}return new tM(e.key,n,new eo(s.toArray()),tN.none())}}function tx(e,t,r,n){return e instanceof tV?function(e,t,r,n){if(!tA(e.precondition,t))return r;let s=e.value.clone(),i=tP(e.fieldTransforms,n,t);return s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null}(e,t,r,n):e instanceof tM?function(e,t,r,n){if(!tA(e.precondition,t))return r;let s=tP(e.fieldTransforms,n,t),i=t.data;return(i.setAll(tO(e)),i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===r)?null:r.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,r,n):tA(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):r}function tL(e,t){var r,n;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(r=e.fieldTransforms,n=t.fieldTransforms,!!(void 0===r&&void 0===n||!(!r||!n)&&F(r,n,(e,t)=>{var r,n;return e.field.isEqual(t.field)&&(r=e.transform,n=t.transform,r instanceof t_&&n instanceof t_||r instanceof tT&&n instanceof tT?F(r.elements,n.elements,eE):r instanceof tS&&n instanceof tS?eE(r.Pe,n.Pe):r instanceof tw&&n instanceof tw)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class tV extends tD{constructor(e,t,r,n=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=n,this.type=0}getFieldMask(){return null}}class tM extends tD{constructor(e,t,r,n,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=n,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function tO(e){let t=new Map;return e.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){let n=e.data.field(r);t.set(r,n)}}),t}function tF(e,t,r){var n;let s=new Map;e.length===r.length||C();for(let i=0;i<r.length;i++){let a=e[i],o=a.transform,l=t.data.field(a.field);s.set(a.field,(n=r[i],o instanceof t_?tE(o,l):o instanceof tT?tC(o,l):n))}return s}function tP(e,t,r){let n=new Map;for(let s of e){let e=s.transform,i=r.data.field(s.field);n.set(s.field,e instanceof tw?function(e,t){let r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&ef(t)&&(t=eg(t)),t&&(r.fields.__previous_value__=t),{mapValue:r}}(t,i):e instanceof t_?tE(e,i):e instanceof tT?tC(e,i):function(e,t){let r=tv(e,t),n=tI(r)+tI(e.Pe);return ek(r)&&ek(e.Pe)?tp(n):tg(e.serializer,n)}(e,i))}return n}class tU extends tD{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tq extends tD{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class tB{constructor(e,t,r,n){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=n}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let s=this.mutations[t];if(s.key.isEqual(e.key)){var n;n=r[t],s instanceof tV?function(e,t,r){let n=e.value.clone(),s=tF(e.fieldTransforms,t,r.transformResults);n.setAll(s),t.convertToFoundDocument(r.version,n).setHasCommittedMutations()}(s,e,n):s instanceof tM?function(e,t,r){if(!tA(e.precondition,t))return void t.convertToUnknownDocument(r.version);let n=tF(e.fieldTransforms,t,r.transformResults),s=t.data;s.setAll(tO(e)),s.setAll(n),t.convertToFoundDocument(r.version,s).setHasCommittedMutations()}(s,e,n):function(e,t,r){t.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=tx(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=tx(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=th();return this.mutations.forEach(n=>{let s=e.get(n.key),i=s.overlayedDocument,a=this.applyToLocalView(i,s.mutatedFields),o=tR(i,a=t.has(n.key)?null:a);null!==o&&r.set(n.key,o),i.isValidDocument()||i.convertToNoDocument(U.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),tm())}isEqual(e){return this.batchId===e.batchId&&F(this.mutations,e.mutations,(e,t)=>tL(e,t))&&F(this.baseMutations,e.baseMutations,(e,t)=>tL(e,t))}}class tz{constructor(e,t,r,n){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=n}static from(e,t,r){e.mutations.length===r.length||C();let n=tc,s=e.mutations;for(let e=0;e<s.length;e++)n=n.insert(s[e].key,r[e].version);return new tz(e,t,r,n)}}/**
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
 */class t${constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class tK{constructor(e,t){this.count=e,this.unchangedNames=t}}function tG(e){if(void 0===e)return _("GRPC error has no .code"),S.UNKNOWN;switch(e){case n.OK:return S.OK;case n.CANCELLED:return S.CANCELLED;case n.UNKNOWN:return S.UNKNOWN;case n.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case n.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case n.INTERNAL:return S.INTERNAL;case n.UNAVAILABLE:return S.UNAVAILABLE;case n.UNAUTHENTICATED:return S.UNAUTHENTICATED;case n.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case n.NOT_FOUND:return S.NOT_FOUND;case n.ALREADY_EXISTS:return S.ALREADY_EXISTS;case n.PERMISSION_DENIED:return S.PERMISSION_DENIED;case n.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case n.ABORTED:return S.ABORTED;case n.OUT_OF_RANGE:return S.OUT_OF_RANGE;case n.UNIMPLEMENTED:return S.UNIMPLEMENTED;case n.DATA_LOSS:return S.DATA_LOSS;default:return C()}}(s=n||(n={}))[s.OK=0]="OK",s[s.CANCELLED=1]="CANCELLED",s[s.UNKNOWN=2]="UNKNOWN",s[s.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",s[s.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",s[s.NOT_FOUND=5]="NOT_FOUND",s[s.ALREADY_EXISTS=6]="ALREADY_EXISTS",s[s.PERMISSION_DENIED=7]="PERMISSION_DENIED",s[s.UNAUTHENTICATED=16]="UNAUTHENTICATED",s[s.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",s[s.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",s[s.ABORTED=10]="ABORTED",s[s.OUT_OF_RANGE=11]="OUT_OF_RANGE",s[s.UNIMPLEMENTED=12]="UNIMPLEMENTED",s[s.INTERNAL=13]="INTERNAL",s[s.UNAVAILABLE=14]="UNAVAILABLE",s[s.DATA_LOSS=15]="DATA_LOSS";/**
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
 */let tQ=new c.z8([4294967295,4294967295],0);function tj(e){let t=(new TextEncoder).encode(e),r=new c.V8;return r.update(t),new Uint8Array(r.digest())}function tW(e){let t=new DataView(e.buffer),r=t.getUint32(0,!0),n=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new c.z8([r,n],0),new c.z8([s,i],0)]}class tH{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new tY(`Invalid padding: ${t}`);if(r<0||e.length>0&&0===this.hashCount)throw new tY(`Invalid hash count: ${r}`);if(0===e.length&&0!==t)throw new tY(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=c.z8.fromNumber(this.Te)}de(e,t,r){let n=e.add(t.multiply(c.z8.fromNumber(r)));return 1===n.compare(tQ)&&(n=new c.z8([n.getBits(0),n.getBits(1)],0)),n.modulo(this.Ie).toNumber()}Ee(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Te)return!1;let[t,r]=tW(tj(e));for(let e=0;e<this.hashCount;e++){let n=this.de(t,r,e);if(!this.Ee(n))return!1}return!0}static create(e,t,r){let n=new tH(new Uint8Array(Math.ceil(e/8)),e%8==0?0:8-e%8,t);return r.forEach(e=>n.insert(e)),n}insert(e){if(0===this.Te)return;let[t,r]=tW(tj(e));for(let e=0;e<this.hashCount;e++){let n=this.de(t,r,e);this.Ae(n)}}Ae(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class tY extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class tX{constructor(e,t,r,n,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=n,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let n=new Map;return n.set(e,tJ.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new tX(U.min(),n,new er(O),ta,tm())}}class tJ{constructor(e,t,r,n,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=n,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new tJ(r,t,tm(),tm(),tm())}}/**
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
 */class tZ{constructor(e,t,r,n){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=n}}class t0{constructor(e,t){this.targetId=e,this.me=t}}class t1{constructor(e,t,r=eu.EMPTY_BYTE_STRING,n=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=n}}class t2{constructor(){this.fe=0,this.ge=t8(),this.pe=eu.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=tm(),t=tm(),r=tm();return this.ge.forEach((n,s)=>{switch(s){case 0:e=e.add(n);break;case 2:t=t.add(n);break;case 1:r=r.add(n);break;default:C()}}),new tJ(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=t8()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,this.fe>=0||C()}Ne(){this.we=!0,this.ye=!0}}class t4{constructor(e){this.Be=e,this.Le=new Map,this.ke=ta,this.qe=t3(),this.Qe=t3(),this.Ke=new er(O)}$e(e){for(let t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(let t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{let r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.je(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.De(e.resumeToken));break;default:C()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Le.forEach((e,r)=>{this.je(r)&&t(r)})}Je(e){let t=e.targetId,r=e.me.count,n=this.Ye(t);if(n){let s=n.target;if(e3(s)){if(0===r){let e=new K(s.path);this.We(t,e,eO.newNoDocument(e,U.min()))}else 1===r||C()}else{let n=this.Ze(t);if(n!==r){let r=this.Xe(e),s=r?this.et(r,e,n):1;0!==s&&(this.He(t),this.Ke=this.Ke.insert(t,2===s?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}Xe(e){let t,r;let n=e.me.unchangedNames;if(!n||!n.bits)return null;let{bits:{bitmap:s="",padding:i=0},hashCount:a=0}=n;try{t=em(s).toUint8Array()}catch(e){if(e instanceof el)return E("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{r=new tH(t,i,a)}catch(e){return E(e instanceof tY?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===r.Te?null:r}et(e,t,r){return t.me.count===r-this.rt(e,t.targetId)?0:2}rt(e,t){let r=this.Be.getRemoteKeysForTarget(t),n=0;return r.forEach(r=>{let s=this.Be.nt(),i=`projects/${s.projectId}/databases/${s.database}/documents/${r.path.canonicalString()}`;e.mightContain(i)||(this.We(t,r,null),n++)}),n}it(e){let t=new Map;this.Le.forEach((r,n)=>{let s=this.Ye(n);if(s){if(r.current&&e3(s.target)){let t=new K(s.target.path);this.st(t).has(n)||this.ot(n,t)||this.We(n,t,eO.newNoDocument(t,e))}r.be&&(t.set(n,r.ve()),r.Ce())}});let r=tm();this.Qe.forEach((e,t)=>{let n=!0;t.forEachWhile(e=>{let t=this.Ye(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(n=!1,!1)}),n&&(r=r.add(e))}),this.ke.forEach((t,r)=>r.setReadTime(e));let n=new tX(e,t,this.Ke,this.ke,r);return this.ke=ta,this.qe=t3(),this.Qe=t3(),this.Ke=new er(O),n}Ue(e,t){if(!this.je(e))return;let r=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,r){if(!this.je(e))return;let n=this.ze(e);this.ot(e,t)?n.Fe(t,1):n.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Le.delete(e)}Ze(e){let t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Le.get(e);return t||(t=new t2,this.Le.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new ei(O),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ei(O),this.qe=this.qe.insert(e,t)),t}je(e){let t=null!==this.Ye(e);return t||w("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){let t=this.Le.get(e);return t&&t.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new t2),this.Be.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function t3(){return new er(K.comparator)}function t8(){return new er(K.comparator)}let t9={asc:"ASCENDING",desc:"DESCENDING"},t6={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},t5={and:"AND",or:"OR"};class t7{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function re(e,t){return e.useProto3Json||null==t?t:{value:t}}function rt(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function rr(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function rn(e){return e||C(),U.fromTimestamp(function(e){let t=ec(e);return new P(t.seconds,t.nanos)}(e))}function rs(e,t){return ri(e,t).canonicalString()}function ri(e,t){let r=new B(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===t?r:r.child(t)}function ra(e){let t=B.fromString(e);return rg(t)||C(),t}function ro(e,t){return rs(e.databaseId,t.path)}function rl(e,t){let r=ra(t);if(r.get(1)!==e.databaseId.projectId)throw new I(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+e.databaseId.projectId);if(r.get(3)!==e.databaseId.database)throw new I(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+e.databaseId.database);return new K(rc(r))}function ru(e,t){return rs(e.databaseId,t)}function rh(e){return new B(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function rc(e){return e.length>4&&"documents"===e.get(4)||C(),e.popFirst(5)}function rd(e,t,r){return{name:ro(e,t),fields:r.value.mapValue.fields}}function rm(e){return{fieldPath:e.canonicalString()}}function rf(e){return $.fromServerFormat(e.fieldPath)}function rg(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
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
 */class rp{constructor(e,t,r,n,s=U.min(),i=U.min(),a=eu.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=n,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new rp(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new rp(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rp(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rp(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class ry{constructor(e){this.ht=e}}/**
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
 */class rv{constructor(){}dt(e,t){this.Et(e,t),t.At()}Et(e,t){if("nullValue"in e)this.Rt(t,5);else if("booleanValue"in e)this.Rt(t,10),t.Vt(e.booleanValue?1:0);else if("integerValue"in e)this.Rt(t,15),t.Vt(ed(e.integerValue));else if("doubleValue"in e){let r=ed(e.doubleValue);isNaN(r)?this.Rt(t,13):(this.Rt(t,15),J(r)?t.Vt(0):t.Vt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Rt(t,20),"string"==typeof r&&(r=ec(r)),t.ft(`${r.seconds||""}`),t.Vt(r.nanos||0)}else if("stringValue"in e)this.gt(e.stringValue,t),this.yt(t);else if("bytesValue"in e)this.Rt(t,30),t.wt(em(e.bytesValue)),this.yt(t);else if("referenceValue"in e)this.St(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.Rt(t,45),t.Vt(r.latitude||0),t.Vt(r.longitude||0)}else"mapValue"in e?eV(e)?this.Rt(t,Number.MAX_SAFE_INTEGER):ex(e)?this.bt(e.mapValue,t):(this.Dt(e.mapValue,t),this.yt(t)):"arrayValue"in e?(this.vt(e.arrayValue,t),this.yt(t)):C()}gt(e,t){this.Rt(t,25),this.Ct(e,t)}Ct(e,t){t.ft(e)}Dt(e,t){let r=e.fields||{};for(let e of(this.Rt(t,55),Object.keys(r)))this.gt(e,t),this.Et(r[e],t)}bt(e,t){var r,n;let s=e.fields||{};this.Rt(t,53);let i="value",a=(null===(n=null===(r=s[i].arrayValue)||void 0===r?void 0:r.values)||void 0===n?void 0:n.length)||0;this.Rt(t,15),t.Vt(ed(a)),this.gt(i,t),this.Et(s[i],t)}vt(e,t){let r=e.values||[];for(let e of(this.Rt(t,50),r))this.Et(e,t)}St(e,t){this.Rt(t,37),K.fromName(e).path.forEach(e=>{this.Rt(t,60),this.Ct(e,t)})}Rt(e,t){e.Vt(t)}yt(e){e.Vt(2)}}rv.Ft=new rv;/**
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
 */class rw{constructor(){this.ln=new r_}addToCollectionParentIndex(e,t){return this.ln.add(t),H.resolve()}getCollectionParents(e,t){return H.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return H.resolve()}deleteFieldIndex(e,t){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,t){return H.resolve()}getDocumentsMatchingTarget(e,t){return H.resolve(null)}getIndexType(e,t){return H.resolve(0)}getFieldIndexes(e,t){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,t){return H.resolve(Q.min())}getMinOffsetFromCollectionGroup(e,t){return H.resolve(Q.min())}updateCollectionGroup(e,t,r){return H.resolve()}updateIndexEntries(e,t){return H.resolve()}}class r_{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t]||new ei(B.comparator),s=!n.has(r);return this.index[t]=n.add(r),s}has(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t];return n&&n.has(r)}getEntries(e){return(this.index[e]||new ei(B.comparator)).toArray()}}new Uint8Array(0);/**
 * @license
 * Copyright 2018 Google LLC
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
 */let rE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class rT{static withCacheSize(e){return new rT(e,rT.DEFAULT_COLLECTION_PERCENTILE,rT.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */rT.DEFAULT_COLLECTION_PERCENTILE=10,rT.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rT.DEFAULT=new rT(41943040,rT.DEFAULT_COLLECTION_PERCENTILE,rT.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rT.DISABLED=new rT(-1,0,0);/**
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
 */class rC{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new rC(0)}static Qn(){return new rC(-1)}}/**
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
 */function rS([e,t],[r,n]){let s=O(e,r);return 0===s?O(t,n):s}class rI{constructor(e){this.Gn=e,this.buffer=new ei(rS),this.zn=0}jn(){return++this.zn}Hn(e){let t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{let e=this.buffer.last();0>rS(t,e)&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class rb{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Jn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return null!==this.Jn}Yn(e){w("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Y(e)?w("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await W(e)}await this.Yn(3e5)})}}class rk{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return H.resolve(X.oe);let r=new rI(t);return this.Zn.forEachTarget(e,e=>r.Hn(e.sequenceNumber)).next(()=>this.Zn.er(e,e=>r.Hn(e))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Zn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return -1===this.params.cacheSizeCollectionThreshold?(w("LruGarbageCollector","Garbage collection skipped; disabled"),H.resolve(rE)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(w("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),rE):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let r,n,s,i,a,o,l;let h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(w("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),n=this.params.maximumSequenceNumbersToCollect):n=t,i=Date.now(),this.nthSequenceNumber(e,n))).next(n=>(r=n,a=Date.now(),this.removeTargets(e,r,t))).next(t=>(s=t,o=Date.now(),this.removeOrphanedDocuments(e,r))).next(e=>(l=Date.now(),v()<=u.in.DEBUG&&w("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${i-h}ms
	Determined least recently used ${n} in `+(a-i)+"ms\n"+`	Removed ${s} targets in `+(o-a)+"ms\n"+`	Removed ${e} documents in `+(l-o)+"ms\n"+`Total Duration: ${l-h}ms`),H.resolve({didRun:!0,sequenceNumbersCollected:n,targetsRemoved:s,documentsRemoved:e})))}}/**
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
 */class rN{constructor(){this.changes=new ti(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,eO.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return void 0!==r?H.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class rA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class rD{constructor(e,t,r,n){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=n}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(n=>(r=n,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==r&&tx(r.mutation,e,eo.empty(),P.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,tm()).next(()=>t))}getLocalViewOfDocuments(e,t,r=tm()){let n=th();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,r).next(e=>{let t=tl();return e.forEach((e,r)=>{t=t.insert(e,r.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let r=th();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,tm()))}populateOverlays(e,t,r){let n=[];return r.forEach(e=>{t.has(e)||n.push(e)}),this.documentOverlayCache.getOverlays(e,n).next(e=>{e.forEach((e,r)=>{t.set(e,r)})})}computeViews(e,t,r,n){let s=ta,i=th(),a=th();return t.forEach((e,t)=>{let a=r.get(t.key);n.has(t.key)&&(void 0===a||a.mutation instanceof tM)?s=s.insert(t.key,t):void 0!==a?(i.set(t.key,a.mutation.getFieldMask()),tx(a.mutation,t,a.mutation.getFieldMask(),P.now())):i.set(t.key,eo.empty())}),this.recalculateAndSaveOverlays(e,s).next(e=>(e.forEach((e,t)=>i.set(e,t)),t.forEach((e,t)=>{var r;return a.set(e,new rA(t,null!==(r=i.get(e))&&void 0!==r?r:null))}),a))}recalculateAndSaveOverlays(e,t){let r=th(),n=new er((e,t)=>e-t),s=tm();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let s of e)s.keys().forEach(e=>{let i=t.get(e);if(null===i)return;let a=r.get(e)||eo.empty();a=s.applyToLocalView(i,a),r.set(e,a);let o=(n.get(s.batchId)||tm()).add(e);n=n.insert(s.batchId,o)})}).next(()=>{let i=[],a=n.getReverseIterator();for(;a.hasNext();){let n=a.getNext(),o=n.key,l=n.value,u=th();l.forEach(e=>{if(!s.has(e)){let n=tR(t.get(e),r.get(e));null!==n&&u.set(e,n),s=s.add(e)}}),i.push(this.documentOverlayCache.saveOverlays(e,o,u))}return H.waitFor(i)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,r,n){return K.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):null!==t.collectionGroup?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,n):this.getDocumentsMatchingCollectionQuery(e,t,r,n)}getNextDocuments(e,t,r,n){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,n).next(s=>{let i=n-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,n-s.size):H.resolve(th()),a=-1,o=s;return i.next(t=>H.forEach(t,(t,r)=>(a<r.largestBatchId&&(a=r.largestBatchId),s.get(t)?H.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,s)).next(()=>this.computeViews(e,o,t,tm())).next(e=>({batchId:a,changes:tu(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new K(t)).next(e=>{let t=tl();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,r,n){let s=t.collectionGroup,i=tl();return this.indexManager.getCollectionParents(e,s).next(a=>H.forEach(a,a=>{let o=new e8(a.child(s),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,o,r,n).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,r,n){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,n))).next(e=>{s.forEach((t,r)=>{let n=r.getKey();null===e.get(n)&&(e=e.insert(n,eO.newInvalidDocument(n)))});let r=tl();return e.forEach((e,n)=>{let i=s.get(e);void 0!==i&&tx(i.mutation,n,eo.empty(),P.now()),tn(t,n)&&(r=r.insert(e,n))}),r})}}/**
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
 */class rR{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return H.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,{id:t.id,version:t.version,createTime:rn(t.createTime)}),H.resolve()}getNamedQuery(e,t){return H.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,{name:t.name,query:function(e){let t=function(e){var t;let r,n=function(e){let t=ra(e);return 4===t.length?B.emptyPath():rc(t)}(e.parent),s=e.structuredQuery,i=s.from?s.from.length:0,a=null;if(i>0){1===i||C();let e=s.from[0];e.allDescendants?a=e.collectionId:n=n.child(e.collectionId)}let o=[];s.where&&(o=function(e){var t;let r=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=rf(e.unaryFilter.field);return ez.create(t,"==",{doubleValue:NaN});case"IS_NULL":let r=rf(e.unaryFilter.field);return ez.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let n=rf(e.unaryFilter.field);return ez.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let s=rf(e.unaryFilter.field);return ez.create(s,"!=",{nullValue:"NULL_VALUE"});default:return C()}}(t):void 0!==t.fieldFilter?ez.create(rf(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return C()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?e$.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return C()}}(t.compositeFilter.op)):C()}(e);return r instanceof e$&&eG(t=r)&&eK(t)?r.getFilters():[r]}(s.where));let l=[];s.orderBy&&(l=s.orderBy.map(e=>new eq(rf(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let u=null;s.limit&&(u=null==(r="object"==typeof(t=s.limit)?t.value:t)?null:r);let h=null;s.startAt&&(h=function(e){let t=!!e.before;return new eF(e.values||[],t)}(s.startAt));let c=null;return s.endAt&&(c=function(e){let t=!e.before;return new eF(e.values||[],t)}(s.endAt)),new e8(n,a,l,o,u,"F",h,c)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?e7(t,t.limit,"L"):t}(t.bundledQuery),readTime:rn(t.readTime)}),H.resolve()}}/**
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
 */class rx{constructor(){this.overlays=new er(K.comparator),this.dr=new Map}getOverlay(e,t){return H.resolve(this.overlays.get(t))}getOverlays(e,t){let r=th();return H.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&r.set(t,e)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((r,n)=>{this.Tt(e,t,n)}),H.resolve()}removeOverlaysForBatchId(e,t,r){let n=this.dr.get(r);return void 0!==n&&(n.forEach(e=>this.overlays=this.overlays.remove(e)),this.dr.delete(r)),H.resolve()}getOverlaysForCollection(e,t,r){let n=th(),s=t.length+1,i=new K(t.child("")),a=this.overlays.getIteratorFrom(i);for(;a.hasNext();){let e=a.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===s&&e.largestBatchId>r&&n.set(e.getKey(),e)}return H.resolve(n)}getOverlaysForCollectionGroup(e,t,r,n){let s=new er((e,t)=>e-t),i=this.overlays.getIterator();for(;i.hasNext();){let e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>r){let t=s.get(e.largestBatchId);null===t&&(t=th(),s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=th(),o=s.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=n)););return H.resolve(a)}Tt(e,t,r){let n=this.overlays.get(r.key);if(null!==n){let e=this.dr.get(n.largestBatchId).delete(r.key);this.dr.set(n.largestBatchId,e)}this.overlays=this.overlays.insert(r.key,new t$(t,r));let s=this.dr.get(t);void 0===s&&(s=tm(),this.dr.set(t,s)),this.dr.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class rL{constructor(){this.sessionToken=eu.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,H.resolve()}}/**
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
 */class rV{constructor(){this.Er=new ei(rM.Ar),this.Rr=new ei(rM.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,t){let r=new rM(e,t);this.Er=this.Er.add(r),this.Rr=this.Rr.add(r)}mr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.gr(new rM(e,t))}pr(e,t){e.forEach(e=>this.removeReference(e,t))}yr(e){let t=new K(new B([])),r=new rM(t,e),n=new rM(t,e+1),s=[];return this.Rr.forEachInRange([r,n],e=>{this.gr(e),s.push(e.key)}),s}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){let t=new K(new B([])),r=new rM(t,e),n=new rM(t,e+1),s=tm();return this.Rr.forEachInRange([r,n],e=>{s=s.add(e.key)}),s}containsKey(e){let t=new rM(e,0),r=this.Er.firstAfterOrEqual(t);return null!==r&&e.isEqual(r.key)}}class rM{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return K.comparator(e.key,t.key)||O(e.br,t.br)}static Vr(e,t){return O(e.br,t.br)||K.comparator(e.key,t.key)}}/**
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
 */class rO{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new ei(rM.Ar)}checkEmpty(e){return H.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,r,n){let s=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let i=new tB(s,t,r,n);for(let t of(this.mutationQueue.push(i),n))this.vr=this.vr.add(new rM(t.key,s)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return H.resolve(i)}lookupMutationBatch(e,t){return H.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){let r=this.Fr(t+1),n=r<0?0:r;return H.resolve(this.mutationQueue.length>n?this.mutationQueue[n]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(0===this.mutationQueue.length?-1:this.Dr-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new rM(t,0),n=new rM(t,Number.POSITIVE_INFINITY),s=[];return this.vr.forEachInRange([r,n],e=>{let t=this.Cr(e.br);s.push(t)}),H.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ei(O);return t.forEach(e=>{let t=new rM(e,0),n=new rM(e,Number.POSITIVE_INFINITY);this.vr.forEachInRange([t,n],e=>{r=r.add(e.br)})}),H.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,n=r.length+1,s=r;K.isDocumentKey(s)||(s=s.child(""));let i=new rM(new K(s),0),a=new ei(O);return this.vr.forEachWhile(e=>{let t=e.key.path;return!!r.isPrefixOf(t)&&(t.length===n&&(a=a.add(e.br)),!0)},i),H.resolve(this.Mr(a))}Mr(e){let t=[];return e.forEach(e=>{let r=this.Cr(e);null!==r&&t.push(r)}),t}removeMutationBatch(e,t){0===this.Or(t.batchId,"removed")||C(),this.mutationQueue.shift();let r=this.vr;return H.forEach(t.mutations,n=>{let s=new rM(n.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)}).next(()=>{this.vr=r})}Bn(e){}containsKey(e,t){let r=new rM(t,0),n=this.vr.firstAfterOrEqual(r);return H.resolve(t.isEqual(n&&n.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Cr(e){let t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class rF{constructor(e){this.Nr=e,this.docs=new er(K.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,n=this.docs.get(r),s=n?n.size:0,i=this.Nr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return H.resolve(r?r.document.mutableCopy():eO.newInvalidDocument(t))}getEntries(e,t){let r=ta;return t.forEach(e=>{let t=this.docs.get(e);r=r.insert(e,t?t.document.mutableCopy():eO.newInvalidDocument(e))}),H.resolve(r)}getDocumentsMatchingQuery(e,t,r,n){let s=ta,i=t.path,a=new K(i.child("__id-9223372036854775808__")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!i.isPrefixOf(e.path))break;e.path.length>i.length+1||0>=function(e,t){let r=e.readTime.compareTo(t.readTime);return 0!==r?r:0!==(r=K.comparator(e.documentKey,t.documentKey))?r:O(e.largestBatchId,t.largestBatchId)}(new Q(a.readTime,a.key,-1),r)||(n.has(a.key)||tn(t,a))&&(s=s.insert(a.key,a.mutableCopy()))}return H.resolve(s)}getAllFromCollectionGroup(e,t,r,n){C()}Br(e,t){return H.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new rP(this)}getSize(e){return H.resolve(this.size)}}class rP extends rN{constructor(e){super(),this.hr=e}applyChanges(e){let t=[];return this.changes.forEach((r,n)=>{n.isValidDocument()?t.push(this.hr.addEntry(e,n)):this.hr.removeEntry(r)}),H.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
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
 */class rU{constructor(e){this.persistence=e,this.Lr=new ti(e=>e2(e),e4),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.kr=0,this.qr=new rV,this.targetCount=0,this.Qr=rC.qn()}forEachTarget(e,t){return this.Lr.forEach((e,r)=>t(r)),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.kr&&(this.kr=t),H.resolve()}Un(e){this.Lr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Qr=new rC(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,H.resolve()}updateTargetData(e,t){return this.Un(t),H.resolve()}removeTargetData(e,t){return this.Lr.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,t,r){let n=0,s=[];return this.Lr.forEach((i,a)=>{a.sequenceNumber<=t&&null===r.get(a.targetId)&&(this.Lr.delete(i),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),n++)}),H.waitFor(s).next(()=>n)}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,t){let r=this.Lr.get(t)||null;return H.resolve(r)}addMatchingKeys(e,t,r){return this.qr.mr(t,r),H.resolve()}removeMatchingKeys(e,t,r){this.qr.pr(t,r);let n=this.persistence.referenceDelegate,s=[];return n&&t.forEach(t=>{s.push(n.markPotentiallyOrphaned(e,t))}),H.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),H.resolve()}getMatchingKeysForTargetId(e,t){let r=this.qr.Sr(t);return H.resolve(r)}containsKey(e,t){return H.resolve(this.qr.containsKey(t))}}/**
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
 */class rq{constructor(e,t){this.Kr={},this.overlays={},this.$r=new X(0),this.Ur=!1,this.Ur=!0,this.Wr=new rL,this.referenceDelegate=e(this),this.Gr=new rU(this),this.indexManager=new rw,this.remoteDocumentCache=new rF(e=>this.referenceDelegate.zr(e)),this.serializer=new ry(t),this.jr=new rR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new rx,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Kr[e.toKey()];return r||(r=new rO(t,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,r){w("MemoryPersistence","Starting transaction:",e);let n=new rB(this.$r.next());return this.referenceDelegate.Hr(),r(n).next(e=>this.referenceDelegate.Jr(n).next(()=>e)).toPromise().then(e=>(n.raiseOnCommittedEvent(),e))}Yr(e,t){return H.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,t)))}}class rB extends j{constructor(e){super(),this.currentSequenceNumber=e}}class rz{constructor(e){this.persistence=e,this.Zr=new rV,this.Xr=null}static ei(e){return new rz(e)}get ti(){if(this.Xr)return this.Xr;throw C()}addReference(e,t,r){return this.Zr.addReference(r,t),this.ti.delete(r.toString()),H.resolve()}removeReference(e,t,r){return this.Zr.removeReference(r,t),this.ti.add(r.toString()),H.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),H.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(e=>this.ti.add(e.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.ti.add(e.toString()))}).next(()=>r.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.ti,r=>{let n=K.fromPath(r);return this.ni(e,n).next(e=>{e||t.removeEntry(n,U.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(e=>{e?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return H.or([()=>H.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class r${constructor(e,t){this.persistence=e,this.ri=new ti(e=>/**
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
 */(function(e){let t="";for(let r=0;r<e.length;r++)t.length>0&&(t+="\x01\x01"),t=function(e,t){let r=t,n=e.length;for(let t=0;t<n;t++){let n=e.charAt(t);switch(n){case"\x00":r+="\x01\x10";break;case"\x01":r+="\x01\x11";break;default:r+=n}}return r}(e.get(r),t);return t+"\x01\x01"})(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=new rk(this,t)}static ei(e,t){return new r$(e,t)}Hr(){}Jr(e){return H.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){let t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}nr(e){let t=0;return this.er(e,e=>{t++}).next(()=>t)}er(e,t){return H.forEach(this.ri,(r,n)=>this.ir(e,r,n).next(e=>e?H.resolve():t(n)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0,n=this.persistence.getRemoteDocumentCache(),s=n.newChangeBuffer();return n.Br(e,n=>this.ir(e,n,t).next(e=>{e||(r++,s.removeEntry(n,U.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),H.resolve()}removeTarget(e,t){let r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),H.resolve()}removeReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),H.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),H.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=function e(t){switch(e_(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let r=eg(t);return r?16+e(r):16;case 5:return 2*t.stringValue.length;case 6:return em(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(t.arrayValue.values||[]).reduce((t,r)=>t+e(r),0);case 10:case 11:var n;let s;return n=t.mapValue,s=0,ee(n.fields,(t,r)=>{s+=t.length+e(r)}),s;default:throw C()}}(e.data.value)),t}ir(e,t,r){return H.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let e=this.ri.get(t);return H.resolve(void 0!==e&&e>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class rK{constructor(e,t,r,n){this.targetId=e,this.fromCache=t,this.Wi=r,this.Gi=n}static zi(e,t){let r=tm(),n=tm();for(let e of t.docChanges)switch(e.type){case 0:r=r.add(e.doc.key);break;case 1:n=n.add(e.doc.key)}return new rK(e,t.fromCache,r,n)}}/**
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
 */class rG{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class rQ{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=(0,h.G6)()?8:function(e){let t=e.match(/Android ([\d.]+)/i);return Number(t?t[1].split(".").slice(0,2).join("."):"-1")}((0,h.z$)())>0?6:4}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,r,n){let s={result:null};return this.Xi(e,t).next(e=>{s.result=e}).next(()=>{if(!s.result)return this.es(e,t,n,r).next(e=>{s.result=e})}).next(()=>{if(s.result)return;let r=new rG;return this.ts(e,t,r).next(n=>{if(s.result=n,this.Hi)return this.ns(e,t,r,n.size)})}).next(()=>s.result)}ns(e,t,r,n){return r.documentReadCount<this.Ji?(v()<=u.in.DEBUG&&w("QueryEngine","SDK will not create cache indexes for query:",tr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),H.resolve()):(v()<=u.in.DEBUG&&w("QueryEngine","Query:",tr(t),"scans",r.documentReadCount,"local documents and returns",n,"documents as results."),r.documentReadCount>this.Yi*n?(v()<=u.in.DEBUG&&w("QueryEngine","The SDK decides to create cache indexes for query:",tr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,e5(t))):H.resolve())}Xi(e,t){if(e9(t))return H.resolve(null);let r=e5(t);return this.indexManager.getIndexType(e,r).next(n=>0===n?null:(null!==t.limit&&1===n&&(r=e5(t=e7(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,r).next(n=>{let s=tm(...n);return this.Zi.getDocuments(e,s).next(n=>this.indexManager.getMinOffset(e,r).next(r=>{let i=this.rs(t,n);return this.ss(t,i,s,r.readTime)?this.Xi(e,e7(t,null,"F")):this.os(e,i,t,r)}))})))}es(e,t,r,n){return e9(t)||n.isEqual(U.min())?H.resolve(null):this.Zi.getDocuments(e,r).next(s=>{let i=this.rs(t,s);return this.ss(t,i,r,n)?H.resolve(null):(v()<=u.in.DEBUG&&w("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),tr(t)),this.os(e,i,t,function(e,t){let r=e.toTimestamp().seconds,n=e.toTimestamp().nanoseconds+1;return new Q(U.fromTimestamp(1e9===n?new P(r+1,0):new P(r,n)),K.empty(),-1)}(n,0)).next(e=>e))})}rs(e,t){let r=new ei(ts(e));return t.forEach((t,n)=>{tn(e,n)&&(r=r.add(n))}),r}ss(e,t,r,n){if(null===e.limit)return!1;if(r.size!==t.size)return!0;let s="F"===e.limitType?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(n)>0)}ts(e,t,r){return v()<=u.in.DEBUG&&w("QueryEngine","Using full collection scan to execute query:",tr(t)),this.Zi.getDocumentsMatchingQuery(e,t,Q.min(),r)}os(e,t,r,n){return this.Zi.getDocumentsMatchingQuery(e,r,n).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
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
 */class rj{constructor(e,t,r,n){this.persistence=e,this._s=t,this.serializer=n,this.us=new er(O),this.cs=new ti(e=>e2(e),e4),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rD(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}async function rW(e,t){return await e.persistence.runTransaction("Handle user change","readonly",r=>{let n;return e.mutationQueue.getAllMutationBatches(r).next(s=>(n=s,e.Ps(t),e.mutationQueue.getAllMutationBatches(r))).next(t=>{let s=[],i=[],a=tm();for(let e of n)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(r,a).next(e=>({Ts:e,removedBatchIds:s,addedBatchIds:i}))})})}function rH(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}async function rY(e,t,r){let n=e.us.get(t);try{r||await e.persistence.runTransaction("Release target",r?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,n))}catch(e){if(!Y(e))throw e;w("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}e.us=e.us.remove(t),e.cs.delete(n.target)}function rX(e,t,r){let n=U.min(),s=tm();return e.persistence.runTransaction("Execute query","readwrite",i=>(function(e,t,r){let n=e.cs.get(r);return void 0!==n?H.resolve(e.us.get(n)):e.Gr.getTargetData(t,r)})(e,i,e5(t)).next(t=>{if(t)return n=t.lastLimboFreeSnapshotVersion,e.Gr.getMatchingKeysForTargetId(i,t.targetId).next(e=>{s=e})}).next(()=>e._s.getDocumentsMatchingQuery(i,t,r?n:U.min(),r?s:tm())).next(r=>{var n;let i;return n=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),i=e.ls.get(n)||U.min(),r.forEach((e,t)=>{t.readTime.compareTo(i)>0&&(i=t.readTime)}),e.ls.set(n,i),{documents:r,Es:s}}))}class rJ{constructor(){this.activeTargetIds=tf}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}}class rZ{constructor(){this._o=new rJ,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,r){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new rJ,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class r0{uo(e){}shutdown(){}}/**
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
 */class r1{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){for(let e of(w("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.To))e(0)}Po(){for(let e of(w("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.To))e(1)}static p(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
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
 */let r2=null;function r4(){return null===r2?r2=268435456+Math.round(2147483648*Math.random()):r2++,"0x"+r2.toString(16)}/**
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
 */let r3={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class r8{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */let r9="WebChannelConnection";class r6 extends class{get Co(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),n=encodeURIComponent(this.databaseId.database);this.Fo=t+"://"+e.host,this.Mo=`projects/${r}/databases/${n}`,this.xo="(default)"===this.databaseId.database?`project_id=${r}`:`project_id=${r}&database_id=${n}`}Oo(e,t,r,n,s){let i=r4(),a=this.No(e,t.toUriEncodedString());w("RestConnection",`Sending RPC '${e}' ${i}:`,a,r);let o={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(o,n,s),this.Lo(e,a,o,r).then(t=>(w("RestConnection",`Received RPC '${e}' ${i}: `,t),t),t=>{throw E("RestConnection",`RPC '${e}' ${i} failed with error: `,t,"url: ",a,"request:",r),t})}ko(e,t,r,n,s,i){return this.Oo(e,t,r,n,s)}Bo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+p}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,r)=>e[r]=t),r&&r.headers.forEach((t,r)=>e[r]=t)}No(e,t){let r=r3[e];return`${this.Fo}/v1/${t}:${r}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,t,r,n){let s=r4();return new Promise((i,a)=>{let o=new d.JJ;o.setWithCredentials(!0),o.listenOnce(d.tw.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case d.jK.NO_ERROR:let t=o.getResponseJson();w(r9,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(t)),i(t);break;case d.jK.TIMEOUT:w(r9,`RPC '${e}' ${s} timed out`),a(new I(S.DEADLINE_EXCEEDED,"Request time out"));break;case d.jK.HTTP_ERROR:let r=o.getStatus();if(w(r9,`RPC '${e}' ${s} failed with status:`,r,"response text:",o.getResponseText()),r>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(t)>=0?t:S.UNKNOWN}(t.status);a(new I(e,t.message))}else a(new I(S.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new I(S.UNAVAILABLE,"Connection failed."));break;default:C()}}finally{w(r9,`RPC '${e}' ${s} completed.`)}});let l=JSON.stringify(n);w(r9,`RPC '${e}' ${s} sending request:`,n),o.send(t,"POST",l,r,15)})}qo(e,t,r){let s=r4(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=(0,d.UE)(),o=(0,d.FJ)(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Bo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;let h=i.join("");w(r9,`Creating RPC '${e}' stream ${s}: ${h}`,l);let c=a.createWebChannel(h,l),m=!1,f=!1,g=new r8({Eo:t=>{f?w(r9,`Not sending because RPC '${e}' stream ${s} is closed:`,t):(m||(w(r9,`Opening RPC '${e}' stream ${s} transport.`),c.open(),m=!0),w(r9,`RPC '${e}' stream ${s} sending:`,t),c.send(t))},Ao:()=>c.close()}),p=(e,t,r)=>{e.listen(t,e=>{try{r(e)}catch(e){setTimeout(()=>{throw e},0)}})};return p(c,d.ii.EventType.OPEN,()=>{f||(w(r9,`RPC '${e}' stream ${s} transport opened.`),g.So())}),p(c,d.ii.EventType.CLOSE,()=>{f||(f=!0,w(r9,`RPC '${e}' stream ${s} transport closed`),g.Do())}),p(c,d.ii.EventType.ERROR,t=>{f||(f=!0,E(r9,`RPC '${e}' stream ${s} transport errored:`,t),g.Do(new I(S.UNAVAILABLE,"The operation could not be completed")))}),p(c,d.ii.EventType.MESSAGE,t=>{var r;if(!f){let i=t.data[0];i||C();let a=(null==i?void 0:i.error)||(null===(r=i[0])||void 0===r?void 0:r.error);if(a){w(r9,`RPC '${e}' stream ${s} received error:`,a);let t=a.status,r=function(e){let t=n[e];if(void 0!==t)return tG(t)}(t),i=a.message;void 0===r&&(r=S.INTERNAL,i="Unknown error status: "+t+" with message "+a.message),f=!0,g.Do(new I(r,i)),c.close()}else w(r9,`RPC '${e}' stream ${s} received:`,i),g.vo(i)}}),p(o,d.ju.STAT_EVENT,t=>{t.stat===d.kN.PROXY?w(r9,`RPC '${e}' stream ${s} detected buffering proxy`):t.stat===d.kN.NOPROXY&&w(r9,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{g.bo()},0),g}}function r5(){return"undefined"!=typeof document?document:null}/**
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
 */function r7(e){return new t7(e,!0)}/**
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
 */class ne{constructor(e,t,r=1e3,n=1.5,s=6e4){this.li=e,this.timerId=t,this.Qo=r,this.Ko=n,this.$o=s,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();let t=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),n=Math.max(0,t-r);n>0&&w("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,n,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){null!==this.Wo&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){null!==this.Wo&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class nt{constructor(e,t,r,n,s,i,a,o){this.li=e,this.Yo=r,this.Zo=n,this.connection=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new ne(e,t)}i_(){return 1===this.state||5===this.state||this.s_()}s_(){return 2===this.state||3===this.state}start(){this.n_=0,4!==this.state?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&null===this.e_&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,4!==e?this.r_.reset():t&&t.code===S.RESOURCE_EXHAUSTED?(_(t.toString()),_("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===S.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;let e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,r])=>{this.Xo===t&&this.I_(e,r)},t=>{e(()=>{let e=new I(S.UNKNOWN,"Fetching auth token failed: "+t.message);return this.d_(e)})})}I_(e,t){let r=this.T_(this.Xo);this.stream=this.E_(e,t),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(e=>{r(()=>this.d_(e))}),this.stream.onMessage(e=>{r(()=>1==++this.n_?this.A_(e):this.onNext(e))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return w("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(w("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nr extends nt{constructor(e,t,r,n,s,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,n,i),this.serializer=s}E_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();let t=function(e,t){let r;if("targetChange"in t){var n,s;t.targetChange;let i="NO_CHANGE"===(n=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===n?1:"REMOVE"===n?2:"CURRENT"===n?3:"RESET"===n?4:C(),a=t.targetChange.targetIds||[],o=(s=t.targetChange.resumeToken,e.useProto3Json?(void 0===s||"string"==typeof s||C(),eu.fromBase64String(s||"")):(void 0===s||s instanceof m||s instanceof Uint8Array||C(),eu.fromUint8Array(s||new Uint8Array))),l=t.targetChange.cause;r=new t1(i,a,o,l&&new I(void 0===l.code?S.UNKNOWN:tG(l.code),l.message||"")||null)}else if("documentChange"in t){t.documentChange;let n=t.documentChange;n.document,n.document.name,n.document.updateTime;let s=rl(e,n.document.name),i=rn(n.document.updateTime),a=n.document.createTime?rn(n.document.createTime):U.min(),o=new eM({mapValue:{fields:n.document.fields}}),l=eO.newFoundDocument(s,i,a,o);r=new tZ(n.targetIds||[],n.removedTargetIds||[],l.key,l)}else if("documentDelete"in t){t.documentDelete;let n=t.documentDelete;n.document;let s=rl(e,n.document),i=n.readTime?rn(n.readTime):U.min(),a=eO.newNoDocument(s,i);r=new tZ([],n.removedTargetIds||[],a.key,a)}else if("documentRemove"in t){t.documentRemove;let n=t.documentRemove;n.document;let s=rl(e,n.document);r=new tZ([],n.removedTargetIds||[],s,null)}else{if(!("filter"in t))return C();{t.filter;let e=t.filter;e.targetId;let{count:n=0,unchangedNames:s}=e,i=new tK(n,s);r=new t0(e.targetId,i)}}return r}(this.serializer,e),r=function(e){if(!("targetChange"in e))return U.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?U.min():t.readTime?rn(t.readTime):U.min()}(e);return this.listener.R_(t,r)}V_(e){let t={};t.database=rh(this.serializer),t.addTarget=function(e,t){let r;let n=t.target;if((r=e3(n)?{documents:{documents:[ru(e,n.path)]}}:{query:function(e,t){var r,n;let s;let i={structuredQuery:{}},a=t.path;null!==t.collectionGroup?(s=a,i.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=a.popLast(),i.structuredQuery.from=[{collectionId:a.lastSegment()}]),i.parent=ru(e,s);let o=function(e){if(0!==e.length)return function e(t){return t instanceof ez?function(e){if("=="===e.op){if(eD(e.value))return{unaryFilter:{field:rm(e.field),op:"IS_NAN"}};if(eA(e.value))return{unaryFilter:{field:rm(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(eD(e.value))return{unaryFilter:{field:rm(e.field),op:"IS_NOT_NAN"}};if(eA(e.value))return{unaryFilter:{field:rm(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rm(e.field),op:t6[e.op],value:e.value}}}(t):t instanceof e$?function(t){let r=t.getFilters().map(t=>e(t));return 1===r.length?r[0]:{compositeFilter:{op:t5[t.op],filters:r}}}(t):C()}(e$.create(e,"and"))}(t.filters);o&&(i.structuredQuery.where=o);let l=function(e){if(0!==e.length)return e.map(e=>({field:rm(e.field),direction:t9[e.dir]}))}(t.orderBy);l&&(i.structuredQuery.orderBy=l);let u=re(e,t.limit);return null!==u&&(i.structuredQuery.limit=u),t.startAt&&(i.structuredQuery.startAt={before:(r=t.startAt).inclusive,values:r.position}),t.endAt&&(i.structuredQuery.endAt={before:!(n=t.endAt).inclusive,values:n.position}),{ct:i,parent:s}}(e,n).ct}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){r.resumeToken=rr(e,t.resumeToken);let n=re(e,t.expectedCount);null!==n&&(r.expectedCount=n)}else if(t.snapshotVersion.compareTo(U.min())>0){r.readTime=rt(e,t.snapshotVersion.toTimestamp());let n=re(e,t.expectedCount);null!==n&&(r.expectedCount=n)}return r}(this.serializer,e);let r=function(e,t){let r=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return C()}}(t.purpose);return null==r?null:{"goog-listen-tags":r}}(this.serializer,e);r&&(t.labels=r),this.c_(t)}m_(e){let t={};t.database=rh(this.serializer),t.removeTarget=e,this.c_(t)}}class nn extends nt{constructor(e,t,r,n,s,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,n,i),this.serializer=s}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,t){return this.connection.qo("Write",e,t)}A_(e){return e.streamToken||C(),this.lastStreamToken=e.streamToken,e.writeResults&&0!==e.writeResults.length&&C(),this.listener.p_()}onNext(e){var t,r;e.streamToken||C(),this.lastStreamToken=e.streamToken,this.r_.reset();let n=(t=e.writeResults,r=e.commitTime,t&&t.length>0?(void 0!==r||C(),t.map(e=>{let t;return(t=e.updateTime?rn(e.updateTime):rn(r)).isEqual(U.min())&&(t=rn(r)),new tk(t,e.transformResults||[])})):[]),s=rn(e.commitTime);return this.listener.y_(s,n)}w_(){let e={};e.database=rh(this.serializer),this.c_(e)}g_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var r;let n;if(t instanceof tV)n={update:rd(e,t.key,t.value)};else if(t instanceof tU)n={delete:ro(e,t.key)};else if(t instanceof tM)n={update:rd(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof tq))return C();n={verify:ro(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let r=t.transform;if(r instanceof tw)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(r instanceof t_)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:r.elements}};if(r instanceof tT)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:r.elements}};if(r instanceof tS)return{fieldPath:t.field.canonicalString(),increment:r.Pe};throw C()})(0,e))),t.precondition.isNone||(n.currentDocument=void 0!==(r=t.precondition).updateTime?{updateTime:rt(e,r.updateTime.toTimestamp())}:void 0!==r.exists?{exists:r.exists}:C()),n})(this.serializer,e))};this.c_(t)}}/**
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
 */class ns extends class{}{constructor(e,t,r,n){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=n,this.S_=!1}b_(){if(this.S_)throw new I(S.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,r,n){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.Oo(e,ri(t,r),n,s,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new I(S.UNKNOWN,e.toString())})}ko(e,t,r,n,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.ko(e,ri(t,r),n,i,a,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new I(S.UNKNOWN,e.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class ni{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){0===this.D_&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){"Online"===this.state?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,"Online"===e&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(_(t),this.C_=!1):w("OnlineStateTracker",t)}N_(){null!==this.v_&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class na{constructor(e,t,r,n,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=s,this.Q_.uo(e=>{r.enqueueAndForget(async()=>{ng(this)&&(w("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.k_.add(4),await nl(e),e.K_.set("Unknown"),e.k_.delete(4),await no(e)}(this))})}),this.K_=new ni(r,n)}}async function no(e){if(ng(e))for(let t of e.q_)await t(!0)}async function nl(e){for(let t of e.q_)await t(!1)}function nu(e,t){e.L_.has(t.targetId)||(e.L_.set(t.targetId,t),nf(e)?nm(e):nR(e).s_()&&nc(e,t))}function nh(e,t){let r=nR(e);e.L_.delete(t),r.s_()&&nd(e,t),0===e.L_.size&&(r.s_()?r.a_():ng(e)&&e.K_.set("Unknown"))}function nc(e,t){if(e.U_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(U.min())>0){let r=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(r)}nR(e).V_(t)}function nd(e,t){e.U_.xe(t),nR(e).m_(t)}function nm(e){e.U_=new t4({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>e.L_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),nR(e).start(),e.K_.F_()}function nf(e){return ng(e)&&!nR(e).i_()&&e.L_.size>0}function ng(e){return 0===e.k_.size}async function np(e){e.K_.set("Online")}async function ny(e){e.L_.forEach((t,r)=>{nc(e,t)})}async function nv(e,t){e.U_=void 0,nf(e)?(e.K_.O_(t),nm(e)):e.K_.set("Unknown")}async function nw(e,t,r){if(e.K_.set("Online"),t instanceof t1&&2===t.state&&t.cause)try{await async function(e,t){let r=t.cause;for(let n of t.targetIds)e.L_.has(n)&&(await e.remoteSyncer.rejectListen(n,r),e.L_.delete(n),e.U_.removeTarget(n))}(e,t)}catch(r){w("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await n_(e,r)}else if(t instanceof tZ?e.U_.$e(t):t instanceof t0?e.U_.Je(t):e.U_.Ge(t),!r.isEqual(U.min()))try{let t=await rH(e.localStore);r.compareTo(t)>=0&&await function(e,t){let r=e.U_.it(t);return r.targetChanges.forEach((r,n)=>{if(r.resumeToken.approximateByteSize()>0){let s=e.L_.get(n);s&&e.L_.set(n,s.withResumeToken(r.resumeToken,t))}}),r.targetMismatches.forEach((t,r)=>{let n=e.L_.get(t);if(!n)return;e.L_.set(t,n.withResumeToken(eu.EMPTY_BYTE_STRING,n.snapshotVersion)),nd(e,t);let s=new rp(n.target,t,r,n.sequenceNumber);nc(e,s)}),e.remoteSyncer.applyRemoteEvent(r)}(e,r)}catch(t){w("RemoteStore","Failed to raise snapshot:",t),await n_(e,t)}}async function n_(e,t,r){if(!Y(t))throw t;e.k_.add(1),await nl(e),e.K_.set("Offline"),r||(r=()=>rH(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{w("RemoteStore","Retrying IndexedDB access"),await r(),e.k_.delete(1),await no(e)})}function nE(e,t){return t().catch(r=>n_(e,r,t))}async function nT(e){let t=nx(e),r=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;ng(e)&&e.B_.length<10;)try{let n=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}(e.localStore,r);if(null===n){0===e.B_.length&&t.a_();break}r=n.batchId,function(e,t){e.B_.push(t);let r=nx(e);r.s_()&&r.f_&&r.g_(t.mutations)}(e,n)}catch(t){await n_(e,t)}nC(e)&&nS(e)}function nC(e){return ng(e)&&!nx(e).i_()&&e.B_.length>0}function nS(e){nx(e).start()}async function nI(e){nx(e).w_()}async function nb(e){let t=nx(e);for(let r of e.B_)t.g_(r.mutations)}async function nk(e,t,r){let n=e.B_.shift(),s=tz.from(n,t,r);await nE(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await nT(e)}async function nN(e,t){t&&nx(e).f_&&await async function(e,t){var r;if(function(e){switch(e){default:return C();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}(r=t.code)&&r!==S.ABORTED){let r=e.B_.shift();nx(e).__(),await nE(e,()=>e.remoteSyncer.rejectFailedWrite(r.batchId,t)),await nT(e)}}(e,t),nC(e)&&nS(e)}async function nA(e,t){e.asyncQueue.verifyOperationInProgress(),w("RemoteStore","RemoteStore received new credentials");let r=ng(e);e.k_.add(3),await nl(e),r&&e.K_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.k_.delete(3),await no(e)}async function nD(e,t){t?(e.k_.delete(2),await no(e)):t||(e.k_.add(2),await nl(e),e.K_.set("Unknown"))}function nR(e){var t,r,n;return e.W_||(e.W_=(t=e.datastore,r=e.asyncQueue,n={Ro:np.bind(null,e),mo:ny.bind(null,e),po:nv.bind(null,e),R_:nw.bind(null,e)},t.b_(),new nr(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.q_.push(async t=>{t?(e.W_.__(),nf(e)?nm(e):e.K_.set("Unknown")):(await e.W_.stop(),e.U_=void 0)})),e.W_}function nx(e){var t,r,n;return e.G_||(e.G_=(t=e.datastore,r=e.asyncQueue,n={Ro:()=>Promise.resolve(),mo:nI.bind(null,e),po:nN.bind(null,e),p_:nb.bind(null,e),y_:nk.bind(null,e)},t.b_(),new nn(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.q_.push(async t=>{t?(e.G_.__(),await nT(e)):(await e.G_.stop(),e.B_.length>0&&(w("RemoteStore",`Stopping write stream with ${e.B_.length} pending writes`),e.B_=[]))})),e.G_}/**
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
 */class nL{constructor(e,t,r,n,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=n,this.removalCallback=s,this.deferred=new b,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,n,s){let i=new nL(e,t,Date.now()+r,n,s);return i.start(r),i}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new I(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nV(e,t){if(_("AsyncQueue",`${t}: ${e}`),Y(e))return new I(S.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class nM{static emptySet(e){return new nM(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||K.comparator(t.key,r.key):(e,t)=>K.comparator(e.key,t.key),this.keyedMap=tl(),this.sortedSet=new er(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof nM)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(!e.isEqual(n))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let r=new nM;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class nO{constructor(){this.z_=new er(K.comparator)}track(e){let t=e.doc.key,r=this.z_.get(t);r?0!==e.type&&3===r.type?this.z_=this.z_.insert(t,e):3===e.type&&1!==r.type?this.z_=this.z_.insert(t,{type:r.type,doc:e.doc}):2===e.type&&2===r.type?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===r.type?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===r.type?this.z_=this.z_.remove(t):1===e.type&&2===r.type?this.z_=this.z_.insert(t,{type:1,doc:r.doc}):0===e.type&&1===r.type?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):C():this.z_=this.z_.insert(t,e)}j_(){let e=[];return this.z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class nF{constructor(e,t,r,n,s,i,a,o,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=n,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,n,s){let i=[];return t.forEach(e=>{i.push({type:0,doc:e})}),new nF(e,t,nM.emptySet(t),i,r,n,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&te(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==r[e].type||!t[e].doc.isEqual(r[e].doc))return!1;return!0}}/**
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
 */class nP{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class nU{constructor(){this.queries=nq(),this.onlineState="Unknown",this.X_=new Set}terminate(){!function(e,t){let r=e.queries;e.queries=nq(),r.forEach((e,r)=>{for(let e of r.J_)e.onError(t)})}(this,new I(S.ABORTED,"Firestore shutting down"))}}function nq(){return new ti(e=>tt(e),te)}async function nB(e,t){let r=3,n=t.query,s=e.queries.get(n);s?!s.Y_()&&t.Z_()&&(r=2):(s=new nP,r=t.Z_()?0:1);try{switch(r){case 0:s.H_=await e.onListen(n,!0);break;case 1:s.H_=await e.onListen(n,!1);break;case 2:await e.onFirstRemoteStoreListen(n)}}catch(r){let e=nV(r,`Initialization of query '${tr(t.query)}' failed`);return void t.onError(e)}e.queries.set(n,s),s.J_.push(t),t.ea(e.onlineState),s.H_&&t.ta(s.H_)&&nG(e)}async function nz(e,t){let r=t.query,n=3,s=e.queries.get(r);if(s){let e=s.J_.indexOf(t);e>=0&&(s.J_.splice(e,1),0===s.J_.length?n=t.Z_()?0:1:!s.Y_()&&t.Z_()&&(n=2))}switch(n){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function n$(e,t){let r=!1;for(let n of t){let t=n.query,s=e.queries.get(t);if(s){for(let e of s.J_)e.ta(n)&&(r=!0);s.H_=n}}r&&nG(e)}function nK(e,t,r){let n=e.queries.get(t);if(n)for(let e of n.J_)e.onError(r);e.queries.delete(t)}function nG(e){e.X_.forEach(e=>{e.next()})}(a=i||(i={})).na="default",a.Cache="cache";class nQ{constructor(e,t,r){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){let t=[];for(let r of e.docChanges)3!==r.type&&t.push(r);e=new nF(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){return!(e.fromCache&&this.Z_())||(!this.options.ua||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}oa(e){if(e.docChanges.length>0)return!0;let t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}aa(e){e=nF.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==i.Cache}}/**
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
 */class nj{constructor(e){this.key=e}}class nW{constructor(e){this.key=e}}class nH{constructor(e,t){this.query=e,this.Ea=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=tm(),this.mutatedKeys=tm(),this.Va=ts(e),this.ma=new nM(this.Va)}get fa(){return this.Ea}ga(e,t){let r=t?t.pa:new nO,n=t?t.ma:this.ma,s=t?t.mutatedKeys:this.mutatedKeys,i=n,a=!1,o="F"===this.query.limitType&&n.size===this.query.limit?n.last():null,l="L"===this.query.limitType&&n.size===this.query.limit?n.first():null;if(e.inorderTraversal((e,t)=>{let u=n.get(e),h=tn(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),m=!1;u&&h?u.data.isEqual(h.data)?c!==d&&(r.track({type:3,doc:h}),m=!0):this.ya(u,h)||(r.track({type:2,doc:h}),m=!0,(o&&this.Va(h,o)>0||l&&0>this.Va(h,l))&&(a=!0)):!u&&h?(r.track({type:0,doc:h}),m=!0):u&&!h&&(r.track({type:1,doc:u}),m=!0,(o||l)&&(a=!0)),m&&(h?(i=i.add(h),s=d?s.add(e):s.delete(e)):(i=i.delete(e),s=s.delete(e)))}),null!==this.query.limit)for(;i.size>this.query.limit;){let e="F"===this.query.limitType?i.last():i.first();i=i.delete(e.key),s=s.delete(e.key),r.track({type:1,doc:e})}return{ma:i,pa:r,ss:a,mutatedKeys:s}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,n){let s=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;let i=e.pa.j_();i.sort((e,t)=>(function(e,t){let r=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return C()}};return r(e)-r(t)})(e.type,t.type)||this.Va(e.doc,t.doc)),this.wa(r),n=null!=n&&n;let a=t&&!n?this.Sa():[],o=0===this.Ra.size&&this.current&&!n?1:0,l=o!==this.Aa;return(this.Aa=o,0!==i.length||l)?{snapshot:new nF(this.query,e.ma,s,i,e.mutatedKeys,0===o,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:a}:{ba:a}}ea(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ma:this.ma,pa:new nO,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(e=>this.Ea=this.Ea.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Ea=this.Ea.delete(e)),this.current=e.current)}Sa(){if(!this.current)return[];let e=this.Ra;this.Ra=tm(),this.ma.forEach(e=>{this.Da(e.key)&&(this.Ra=this.Ra.add(e.key))});let t=[];return e.forEach(e=>{this.Ra.has(e)||t.push(new nW(e))}),this.Ra.forEach(r=>{e.has(r)||t.push(new nj(r))}),t}va(e){this.Ea=e.Es,this.Ra=tm();let t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return nF.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,0===this.Aa,this.hasCachedResults)}}class nY{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class nX{constructor(e){this.key=e,this.Fa=!1}}class nJ{constructor(e,t,r,n,s,i){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=n,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.Ma={},this.xa=new ti(e=>tt(e),te),this.Oa=new Map,this.Na=new Set,this.Ba=new er(K.comparator),this.La=new Map,this.ka=new rV,this.qa={},this.Qa=new Map,this.Ka=rC.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return!0===this.$a}}async function nZ(e,t,r=!0){let n;let s=sh(e),i=s.xa.get(t);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),n=i.view.Ca()):n=await n1(s,t,r,!0),n}async function n0(e,t){let r=sh(e);await n1(r,t,!0,!1)}async function n1(e,t,r,n){var s,i;let a;let o=await (s=e.localStore,i=e5(t),s.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return s.Gr.getTargetData(e,i).next(r=>r?(t=r,H.resolve(t)):s.Gr.allocateTargetId(e).next(r=>(t=new rp(i,r,"TargetPurposeListen",e.currentSequenceNumber),s.Gr.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=s.us.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(s.us=s.us.insert(e.targetId,e),s.cs.set(i,e.targetId)),e})),l=o.targetId,u=e.sharedClientState.addLocalQueryTarget(l,r);return n&&(a=await n2(e,t,l,"current"===u,o.resumeToken)),e.isPrimaryClient&&r&&nu(e.remoteStore,o),a}async function n2(e,t,r,n,s){e.Ua=(t,r,n)=>(async function(e,t,r,n){let s=t.view.ga(r);s.ss&&(s=await rX(e.localStore,t.query,!1).then(({documents:e})=>t.view.ga(e,s)));let i=n&&n.targetChanges.get(t.targetId),a=n&&null!=n.targetMismatches.get(t.targetId),o=t.view.applyChanges(s,e.isPrimaryClient,i,a);return si(e,t.targetId,o.ba),o.snapshot})(e,t,r,n);let i=await rX(e.localStore,t,!0),a=new nH(t,i.Es),o=a.ga(i.documents),l=tJ.createSynthesizedTargetChangeForCurrentChange(r,n&&"Offline"!==e.onlineState,s),u=a.applyChanges(o,e.isPrimaryClient,l);si(e,r,u.ba);let h=new nY(t,r,a);return e.xa.set(t,h),e.Oa.has(r)?e.Oa.get(r).push(t):e.Oa.set(r,[t]),u.snapshot}async function n4(e,t,r){let n=e.xa.get(t),s=e.Oa.get(n.targetId);if(s.length>1)return e.Oa.set(n.targetId,s.filter(e=>!te(e,t))),void e.xa.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)||await rY(e.localStore,n.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(n.targetId),r&&nh(e.remoteStore,n.targetId),sn(e,n.targetId)}).catch(W)):(sn(e,n.targetId),await rY(e.localStore,n.targetId,!0))}async function n3(e,t){let r=e.xa.get(t),n=e.Oa.get(r.targetId);e.isPrimaryClient&&1===n.length&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),nh(e.remoteStore,r.targetId))}async function n8(e,t,r){var n;let s=(e.remoteStore.remoteSyncer.applySuccessfulWrite=n7.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=se.bind(null,e),e);try{let e;let i=await function(e,t){let r,n;let s=P.now(),i=t.reduce((e,t)=>e.add(t.key),tm());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=ta,l=tm();return e.hs.getEntries(a,i).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(n=>{r=n;let i=[];for(let e of t){let t=function(e,t){let r=null;for(let n of e.fieldTransforms){let e=t.data.field(n.field),s=tv(n.transform,e||null);null!=s&&(null===r&&(r=eM.empty()),r.set(n.field,s))}return r||null}(e,r.get(e.key).overlayedDocument);null!=t&&i.push(new tM(e.key,t,function e(t){let r=[];return ee(t.fields,(t,n)=>{let s=new $([t]);if(eR(n)){let t=e(n.mapValue).fields;if(0===t.length)r.push(s);else for(let e of t)r.push(s.child(e))}else r.push(s)}),new eo(r)}(t.value.mapValue),tN.exists(!0)))}return e.mutationQueue.addMutationBatch(a,s,i,t)}).next(t=>{n=t;let s=t.applyToLocalDocumentSet(r,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,s)})}).then(()=>({batchId:n.batchId,changes:tu(r)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),n=i.batchId,(e=s.qa[s.currentUser.toKey()])||(e=new er(O)),e=e.insert(n,r),s.qa[s.currentUser.toKey()]=e,await so(s,i.changes),await nT(s.remoteStore)}catch(t){let e=nV(t,"Failed to persist write");r.reject(e)}}async function n9(e,t){try{let r=await function(e,t){let r=t.snapshotVersion,n=e.us;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{var i;let a,o;let l=e.hs.newChangeBuffer({trackRemovals:!0});n=e.us;let u=[];t.targetChanges.forEach((i,a)=>{var o;let l=n.get(a);if(!l)return;u.push(e.Gr.removeMatchingKeys(s,i.removedDocuments,a).next(()=>e.Gr.addMatchingKeys(s,i.addedDocuments,a)));let h=l.withSequenceNumber(s.currentSequenceNumber);null!==t.targetMismatches.get(a)?h=h.withResumeToken(eu.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):i.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(i.resumeToken,r)),n=n.insert(a,h),o=h,(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size>0)&&u.push(e.Gr.updateTargetData(s,h))});let h=ta,c=tm();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(s,r))}),u.push((i=t.documentUpdates,a=tm(),o=tm(),i.forEach(e=>a=a.add(e)),l.getEntries(s,a).next(e=>{let t=ta;return i.forEach((r,n)=>{let s=e.get(r);n.isFoundDocument()!==s.isFoundDocument()&&(o=o.add(r)),n.isNoDocument()&&n.version.isEqual(U.min())?(l.removeEntry(r,n.readTime),t=t.insert(r,n)):!s.isValidDocument()||n.version.compareTo(s.version)>0||0===n.version.compareTo(s.version)&&s.hasPendingWrites?(l.addEntry(n),t=t.insert(r,n)):w("LocalStore","Ignoring outdated watch update for ",r,". Current version:",s.version," Watch version:",n.version)}),{Is:t,ds:o}})).next(e=>{h=e.Is,c=e.ds})),!r.isEqual(U.min())){let t=e.Gr.getLastRemoteSnapshotVersion(s).next(t=>e.Gr.setTargetsMetadata(s,s.currentSequenceNumber,r));u.push(t)}return H.waitFor(u).next(()=>l.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,h,c)).next(()=>h)}).then(t=>(e.us=n,t))}(e.localStore,t);t.targetChanges.forEach((t,r)=>{let n=e.La.get(r);n&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||C(),t.addedDocuments.size>0?n.Fa=!0:t.modifiedDocuments.size>0?n.Fa||C():t.removedDocuments.size>0&&(n.Fa||C(),n.Fa=!1))}),await so(e,r,t)}catch(e){await W(e)}}function n6(e,t,r){var n;if(e.isPrimaryClient&&0===r||!e.isPrimaryClient&&1===r){let r;let s=[];e.xa.forEach((e,r)=>{let n=r.view.ea(t);n.snapshot&&s.push(n.snapshot)}),(n=e.eventManager).onlineState=t,r=!1,n.queries.forEach((e,n)=>{for(let e of n.J_)e.ea(t)&&(r=!0)}),r&&nG(n),s.length&&e.Ma.R_(s),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function n5(e,t,r){e.sharedClientState.updateQueryState(t,"rejected",r);let n=e.La.get(t),s=n&&n.key;if(s){let r=new er(K.comparator);r=r.insert(s,eO.newNoDocument(s,U.min()));let n=tm().add(s),i=new tX(U.min(),new Map,new er(O),r,n);await n9(e,i),e.Ba=e.Ba.remove(s),e.La.delete(t),sa(e)}else await rY(e.localStore,t,!1).then(()=>sn(e,t,r)).catch(W)}async function n7(e,t){var r;let n=t.batch.batchId;try{let s=await (r=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let n=t.batch.keys(),s=r.hs.newChangeBuffer({trackRemovals:!0});return(function(e,t,r,n){let s=r.batch,i=s.keys(),a=H.resolve();return i.forEach(e=>{a=a.next(()=>n.getEntry(t,e)).next(t=>{let i=r.docVersions.get(e);null!==i||C(),0>t.version.compareTo(i)&&(s.applyToRemoteDocument(t,r),t.isValidDocument()&&(t.setReadTime(r.commitVersion),n.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,s))})(r,e,t,s).next(()=>s.apply(e)).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t.batch.batchId)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=tm();for(let r=0;r<e.mutationResults.length;++r)e.mutationResults[r].transformResults.length>0&&(t=t.add(e.batch.mutations[r].key));return t}(t))).next(()=>r.localDocuments.getDocuments(e,n))});sr(e,n,null),st(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await so(e,s)}catch(e){await W(e)}}async function se(e,t,r){var n;try{let s=await (n=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||C(),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))});sr(e,t,r),st(e,t),e.sharedClientState.updateMutationState(t,"rejected",r),await so(e,s)}catch(e){await W(e)}}function st(e,t){(e.Qa.get(t)||[]).forEach(e=>{e.resolve()}),e.Qa.delete(t)}function sr(e,t,r){let n=e.qa[e.currentUser.toKey()];if(n){let s=n.get(t);s&&(r?s.reject(r):s.resolve(),n=n.remove(t)),e.qa[e.currentUser.toKey()]=n}}function sn(e,t,r=null){for(let n of(e.sharedClientState.removeLocalQueryTarget(t),e.Oa.get(t)))e.xa.delete(n),r&&e.Ma.Wa(n,r);e.Oa.delete(t),e.isPrimaryClient&&e.ka.yr(t).forEach(t=>{e.ka.containsKey(t)||ss(e,t)})}function ss(e,t){e.Na.delete(t.path.canonicalString());let r=e.Ba.get(t);null!==r&&(nh(e.remoteStore,r),e.Ba=e.Ba.remove(t),e.La.delete(r),sa(e))}function si(e,t,r){for(let n of r)n instanceof nj?(e.ka.addReference(n.key,t),function(e,t){let r=t.key,n=r.path.canonicalString();e.Ba.get(r)||e.Na.has(n)||(w("SyncEngine","New document in limbo: "+r),e.Na.add(n),sa(e))}(e,n)):n instanceof nW?(w("SyncEngine","Document no longer in limbo: "+n.key),e.ka.removeReference(n.key,t),e.ka.containsKey(n.key)||ss(e,n.key)):C()}function sa(e){for(;e.Na.size>0&&e.Ba.size<e.maxConcurrentLimboResolutions;){let t=e.Na.values().next().value;e.Na.delete(t);let r=new K(B.fromString(t)),n=e.Ka.next();e.La.set(n,new nX(r)),e.Ba=e.Ba.insert(r,n),nu(e.remoteStore,new rp(e5(new e8(r.path)),n,"TargetPurposeLimboResolution",X.oe))}}async function so(e,t,r){let n=[],s=[],i=[];e.xa.isEmpty()||(e.xa.forEach((a,o)=>{i.push(e.Ua(o,t,r).then(t=>{var i;if((t||r)&&e.isPrimaryClient){let n=t?!t.fromCache:null===(i=null==r?void 0:r.targetChanges.get(o.targetId))||void 0===i?void 0:i.current;e.sharedClientState.updateQueryState(o.targetId,n?"current":"not-current")}if(t){n.push(t);let e=rK.zi(o.targetId,t);s.push(e)}}))}),await Promise.all(i),e.Ma.R_(n),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",r=>H.forEach(t,t=>H.forEach(t.Wi,n=>e.persistence.referenceDelegate.addReference(r,t.targetId,n)).next(()=>H.forEach(t.Gi,n=>e.persistence.referenceDelegate.removeReference(r,t.targetId,n)))))}catch(e){if(!Y(e))throw e;w("LocalStore","Failed to update sequence numbers: "+e)}for(let r of t){let t=r.targetId;if(!r.fromCache){let r=e.us.get(t),n=r.snapshotVersion,s=r.withLastLimboFreeSnapshotVersion(n);e.us=e.us.insert(t,s)}}}(e.localStore,s))}async function sl(e,t){if(!e.currentUser.isEqual(t)){w("SyncEngine","User change. New user:",t.toKey());let r=await rW(e.localStore,t);e.currentUser=t,e.Qa.forEach(e=>{e.forEach(e=>{e.reject(new I(S.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),e.Qa.clear(),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await so(e,r.Ts)}}function su(e,t){let r=e.La.get(t);if(r&&r.Fa)return tm().add(r.key);{let r=tm(),n=e.Oa.get(t);if(!n)return r;for(let t of n){let n=e.xa.get(t);r=r.unionWith(n.view.fa)}return r}}function sh(e){return e.remoteStore.remoteSyncer.applyRemoteEvent=n9.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=su.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=n5.bind(null,e),e.Ma.R_=n$.bind(null,e.eventManager),e.Ma.Wa=nK.bind(null,e.eventManager),e}class sc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=r7(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){var t;return t=this.persistence,new rj(t,new rQ,e.initialUser,this.serializer)}ja(e){return new rq(rz.ei,this.serializer)}za(e){return new rZ}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}sc.provider={build:()=>new sc};class sd extends sc{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){return this.persistence.referenceDelegate instanceof r$||C(),new rb(this.persistence.referenceDelegate.garbageCollector,e.asyncQueue,t)}ja(e){let t=void 0!==this.cacheSizeBytes?rT.withCacheSize(this.cacheSizeBytes):rT.DEFAULT;return new rq(e=>r$.ei(e,t),this.serializer)}}class sm{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>n6(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=sl.bind(null,this.syncEngine),await nD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new nU}createDatastore(e){let t=r7(e.databaseInfo.databaseId),r=new r6(e.databaseInfo);return new ns(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){var t;return t=this.localStore,new na(t,this.datastore,e.asyncQueue,e=>n6(this.syncEngine,e,0),r1.p()?new r1:new r0)}createSyncEngine(e,t){return function(e,t,r,n,s,i,a){let o=new nJ(e,t,r,n,s,i);return a&&(o.$a=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){w("RemoteStore","RemoteStore shutting down."),e.k_.add(5),await nl(e),e.Q_.shutdown(),e.K_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}sm.provider={build:()=>new sm};/**
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
 *//**
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
 */class sf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):_("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class sg{constructor(e,t,r,n,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=n,this.user=g.UNAUTHENTICATED,this.clientId=M.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async e=>{w("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(r,e=>(w("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new b;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(r){let t=nV(r,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function sp(e,t){e.asyncQueue.verifyOperationInProgress(),w("FirestoreClient","Initializing OfflineComponentProvider");let r=e.configuration;await t.initialize(r);let n=r.initialUser;e.setCredentialChangeListener(async e=>{n.isEqual(e)||(await rW(t.localStore,e),n=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function sy(e,t){e.asyncQueue.verifyOperationInProgress();let r=await sv(e);w("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(r,e.configuration),e.setCredentialChangeListener(e=>nA(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,r)=>nA(t.remoteStore,r)),e._onlineComponents=t}async function sv(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){w("FirestoreClient","Using user provided OfflineComponentProvider");try{await sp(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===S.FAILED_PRECONDITION||t.code===S.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;E("Error using user provided cache. Falling back to memory cache: "+t),await sp(e,new sc)}}else w("FirestoreClient","Using default OfflineComponentProvider"),await sp(e,new sd(void 0))}return e._offlineComponents}async function sw(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(w("FirestoreClient","Using user provided OnlineComponentProvider"),await sy(e,e._uninitializedComponentsProvider._online)):(w("FirestoreClient","Using default OnlineComponentProvider"),await sy(e,new sm))),e._onlineComponents}async function s_(e){let t=await sw(e),r=t.eventManager;return r.onListen=nZ.bind(null,t.syncEngine),r.onUnlisten=n4.bind(null,t.syncEngine),r.onFirstRemoteStoreListen=n0.bind(null,t.syncEngine),r.onLastRemoteStoreUnlisten=n3.bind(null,t.syncEngine),r}/**
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
 */function sE(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */let sT=new Map;/**
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
 */function sC(e,t,r){if(!r)throw new I(S.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function sS(e){if(!K.isDocumentKey(e))throw new I(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function sI(e){if(K.isDocumentKey(e))throw new I(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function sb(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let r=(t=e).constructor?t.constructor.name:null;return r?`a custom ${r} object`:"an object"}}return"function"==typeof e?"a function":C()}function sk(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new I(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let r=sb(e);throw new I(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${r}`)}}return e}/**
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
 */class sN{constructor(e){var t,r;if(void 0===e.host){if(void 0!==e.ssl)throw new I(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new I(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,r,n){if(!0===t&&!0===n)throw new I(S.INVALID_ARGUMENT,`${e} and ${r} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sE(null!==(r=e.experimentalLongPollingOptions)&&void 0!==r?r:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new I(S.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new I(S.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new I(S.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,r;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,t.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class sA{constructor(e,t,r,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sN({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new I(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new I(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sN(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new N;switch(e.type){case"firstParty":return new x(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new I(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=sT.get(e);t&&(w("ComponentProvider","Removing Datastore"),sT.delete(e),t.terminate())}(this),Promise.resolve()}}/**
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
 */class sD{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new sD(this.firestore,e,this._query)}}class sR{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sx(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new sR(this.firestore,e,this._key)}}class sx extends sD{constructor(e,t,r){super(e,t,new e8(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new sR(this.firestore,null,new K(e))}withConverter(e){return new sx(this.firestore,e,this._path)}}function sL(e,t,...r){if(e=(0,h.m9)(e),sC("collection","path",t),e instanceof sA){let n=B.fromString(t,...r);return sI(n),new sx(e,null,n)}{if(!(e instanceof sR||e instanceof sx))throw new I(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(B.fromString(t,...r));return sI(n),new sx(e.firestore,null,n)}}function sV(e,t,...r){if(e=(0,h.m9)(e),1==arguments.length&&(t=M.newId()),sC("doc","path",t),e instanceof sA){let n=B.fromString(t,...r);return sS(n),new sR(e,null,new K(n))}{if(!(e instanceof sR||e instanceof sx))throw new I(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(B.fromString(t,...r));return sS(n),new sR(e.firestore,e instanceof sx?e.converter:null,new K(n))}}/**
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
 */class sM{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new ne(this,"async_queue_retry"),this.fu=()=>{let e=r5();e&&w("AsyncQueue","Visibility state changed to "+e.visibilityState),this.r_.Jo()},this.gu=e;let t=r5();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;let t=r5();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});let t=new b;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(0!==this.Iu.length){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Y(e))throw e;w("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){let t=this.gu.then(()=>(this.Ru=!0,e().catch(e=>{let t;throw this.Au=e,this.Ru=!1,_("INTERNAL UNHANDLED ERROR: ",(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t)),e}).then(e=>(this.Ru=!1,e))));return this.gu=t,t}enqueueAfterDelay(e,t,r){this.pu(),this.mu.indexOf(e)>-1&&(t=0);let n=nL.createAndSchedule(this,e,t,r,e=>this.Su(e));return this.Eu.push(n),n}pu(){this.Au&&C()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(let t of this.Eu)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{for(let t of(this.Eu.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.Eu))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){let t=this.Eu.indexOf(e);this.Eu.splice(t,1)}}class sO extends sA{constructor(e,t,r,n){super(e,t,r,n),this.type="firestore",this._queue=new sM,this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new sM(e),this._firestoreClient=void 0,await e}}}function sF(e,t){let r="object"==typeof e?e:(0,o.Mq)(),n=(0,o.qX)(r,"firestore").getImmediate({identifier:"string"==typeof e?e:t||"(default)"});if(!n._initialized){let e=(0,h.P0)("firestore");e&&function(e,t,r,n={}){var s;let i=(e=sk(e,sA))._getSettings(),a=`${t}:${r}`;if("firestore.googleapis.com"!==i.host&&i.host!==a&&E("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),n.mockUserToken){let t,r;if("string"==typeof n.mockUserToken)t=n.mockUserToken,r=g.MOCK_USER;else{t=(0,h.Sg)(n.mockUserToken,null===(s=e._app)||void 0===s?void 0:s.options.projectId);let i=n.mockUserToken.sub||n.mockUserToken.user_id;if(!i)throw new I(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");r=new g(i)}e._authCredentials=new A(new k(t,r))}}(n,...e)}return n}function sP(e){if(e._terminated)throw new I(S.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){var t,r,n,s;let i=e._freezeSettings(),a=(s=e._databaseId,new ey(s,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,sE(i.experimentalLongPollingOptions),i.useFetchStreams));e._componentsProvider||(null===(r=i.localCache)||void 0===r?void 0:r._offlineComponentProvider)&&(null===(n=i.localCache)||void 0===n?void 0:n._onlineComponentProvider)&&(e._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),e._firestoreClient=new sg(e._authCredentials,e._appCheckCredentials,e._queue,a,e._componentsProvider&&function(e){let t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}(e),e._firestoreClient}/**
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
 */class sU{constructor(e){this._byteString=e}static fromBase64String(e){try{return new sU(eu.fromBase64String(e))}catch(e){throw new I(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new sU(eu.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class sq{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new I(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class sB{constructor(e){this._methodName=e}}/**
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
 */class sz{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new I(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new I(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return O(this._lat,e._lat)||O(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class s${constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;++r)if(e[r]!==t[r])return!1;return!0}(this._values,e._values)}}/**
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
 */let sK=/^__.*__$/;class sG{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return null!==this.fieldMask?new tM(e,this.data,this.fieldMask,t,this.fieldTransforms):new tV(e,this.data,t,this.fieldTransforms)}}function sQ(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw C()}}class sj{constructor(e,t,r,n,s,i){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=n,void 0===s&&this.Fu(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new sj(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.xu({path:r,Nu:!1});return n.Bu(e),n}Lu(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.xu({path:r,Nu:!1});return n.Fu(),n}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return sZ(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(0===e.length)throw this.qu("Document fields must not be empty");if(sQ(this.Mu)&&sK.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class sW{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||r7(e)}$u(e,t,r,n=!1){return new sj({Mu:e,methodName:t,Ku:r,path:$.emptyPath(),Nu:!1,Qu:n},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sH(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof P||e instanceof sz||e instanceof sU||e instanceof sR||e instanceof sB||e instanceof s$)}function sY(e,t,r){if(!sH(r)||!("object"==typeof r&&null!==r&&(Object.getPrototypeOf(r)===Object.prototype||null===Object.getPrototypeOf(r)))){let n=sb(r);throw"an object"===n?t.qu(e+" a custom object"):t.qu(e+" "+n)}}let sX=RegExp("[~\\*/\\[\\]]");function sJ(e,t,r){if(t.search(sX)>=0)throw sZ(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,r);try{return new sq(...t.split("."))._internalPath}catch(n){throw sZ(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,r)}}function sZ(e,t,r,n,s){let i=n&&!n.isEmpty(),a=void 0!==s,o=`Function ${t}() called with invalid data`;r&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${n}`),a&&(l+=` in document ${s}`),l+=")"),new I(S.INVALID_ARGUMENT,o+e+l)}/**
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
 */class s0{constructor(e,t,r,n,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=n,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new sR(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new s1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(s2("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class s1 extends s0{data(){return super.data()}}function s2(e,t){return"string"==typeof t?sJ(e,t):t instanceof sq?t._internalPath:t._delegate._internalPath}class s4{convertValue(e,t="none"){switch(e_(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ed(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(em(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw C()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return ee(e,(e,n)=>{r[e]=this.convertValue(n,t)}),r}convertVectorValue(e){var t,r,n;return new s$(null===(n=null===(r=null===(t=e.fields)||void 0===t?void 0:t.value.arrayValue)||void 0===r?void 0:r.values)||void 0===n?void 0:n.map(e=>ed(e.doubleValue)))}convertGeoPoint(e){return new sz(ed(e.latitude),ed(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=eg(e);return null==r?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ep(e));default:return null}}convertTimestamp(e){let t=ec(e);return new P(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=B.fromString(e);rg(r)||C();let n=new ev(r.get(1),r.get(3)),s=new K(r.popFirst(5));return n.isEqual(t)||_(`Document ${s} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */class s3{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class s8 extends s0{constructor(e,t,r,n,s,i){super(e,t,r,n,i),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new s9(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(s2("DocumentSnapshot.get",e));if(null!==r)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class s9 extends s8{data(e={}){return super.data(e)}}class s6{constructor(e,t,r,n){this._firestore=e,this._userDataWriter=t,this._snapshot=n,this.metadata=new s3(n.hasPendingWrites,n.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new s9(this._firestore,this._userDataWriter,r.key,r,new s3(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new I(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(r=>{let n=new s9(e._firestore,e._userDataWriter,r.doc.key,r.doc,new s3(e._snapshot.mutatedKeys.has(r.doc.key),e._snapshot.fromCache),e.query.converter);return r.doc,{type:"added",doc:n,oldIndex:-1,newIndex:t++}})}{let r=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let n=new s9(e._firestore,e._userDataWriter,t.doc.key,t.doc,new s3(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),s=-1,i=-1;return 0!==t.type&&(s=r.indexOf(t.doc.key),r=r.delete(t.doc.key)),1!==t.type&&(i=(r=r.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return C()}}(t.type),doc:n,oldIndex:s,newIndex:i}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}class s5 extends s4{constructor(e){super(),this.firestore=e}convertBytes(e){return new sU(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new sR(this.firestore,null,t)}}function s7(e){e=sk(e,sD);let t=sk(e.firestore,sO),r=sP(t),n=new s5(t);return(/**
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
 */function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new I(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t,r={}){let n=new b;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,r,n,s){let i=new sf({next:r=>{i.eu(),t.enqueueAndForget(()=>nz(e,a)),r.fromCache&&"server"===n.source?s.reject(new I(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(r)},error:e=>s.reject(e)}),a=new nQ(r,i,{includeMetadataChanges:!0,ua:!0});return nB(e,a)})(await s_(e),e.asyncQueue,t,r,n)),n.promise})(r,e._query).then(r=>new s6(t,n,e,r)))}function ie(e){return ir(sk(e.firestore,sO),[new tU(e._key,tN.none())])}function it(e,t){var r,n;let s=sk(e.firestore,sO),i=sV(e),a=(r=e.converter)?n&&(n.merge||n.mergeFields)?r.toFirestore(t,n):r.toFirestore(t):t;return ir(s,[(function(e,t,r,n,s,i={}){let a,o;let l=e.$u(i.merge||i.mergeFields?2:0,t,r,s);sY("Data must be an object, but it was:",l,n);let u=function e(t,r){let n={};return et(t)?r.path&&r.path.length>0&&r.fieldMask.push(r.path):ee(t,(t,s)=>{let i=function t(r,n){if(sH(r=(0,h.m9)(r)))return sY("Unsupported field value:",n,r),e(r,n);if(r instanceof sB)return function(e,t){if(!sQ(t.Mu))throw t.qu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.qu(`${e._methodName}() is not currently supported inside arrays`);let r=e._toFieldTransform(t);r&&t.fieldTransforms.push(r)}(r,n),null;if(void 0===r&&n.ignoreUndefinedProperties)return null;if(n.path&&n.fieldMask.push(n.path),r instanceof Array){if(n.settings.Nu&&4!==n.Mu)throw n.qu("Nested arrays are not supported");return function(e,r){let n=[],s=0;for(let i of e){let e=t(i,r.ku(s));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),s++}return{arrayValue:{values:n}}}(r,n)}return function(e,t){var r,n,s;if(null===(e=(0,h.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return r=t.serializer,"number"==typeof(s=n=e)&&Number.isInteger(s)&&!J(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER?tp(n):tg(r,n);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let r=P.fromDate(e);return{timestampValue:rt(t.serializer,r)}}if(e instanceof P){let r=new P(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:rt(t.serializer,r)}}if(e instanceof sz)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof sU)return{bytesValue:rr(t.serializer,e._byteString)};if(e instanceof sR){let r=t.databaseId,n=e.firestore._databaseId;if(!n.isEqual(r))throw t.qu(`Document reference is for database ${n.projectId}/${n.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:rs(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof s$)return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:e.toArray().map(e=>{if("number"!=typeof e)throw t.qu("VectorValues must only contain numeric values.");return tg(t.serializer,e)})}}}}};throw t.qu(`Unsupported field value: ${sb(e)}`)}(r,n)}(s,r.Ou(t));null!=i&&(n[t]=i)}),{mapValue:{fields:n}}}(n,l);if(i.merge)a=new eo(l.fieldMask),o=l.fieldTransforms;else if(i.mergeFields){let e=[];for(let n of i.mergeFields){let s=function(e,t,r){if((t=(0,h.m9)(t))instanceof sq)return t._internalPath;if("string"==typeof t)return sJ(e,t);throw sZ("Field path arguments must be of type string or ",e,!1,void 0,r)}(t,n,r);if(!l.contains(s))throw new I(S.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);(function(e,t){return e.some(e=>e.isEqual(t))})(e,s)||e.push(s)}a=new eo(e),o=l.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=l.fieldTransforms;return new sG(new eM(u),a,o)})(function(e){let t=e._freezeSettings(),r=r7(e._databaseId);return new sW(e._databaseId,!!t.ignoreUndefinedProperties,r)}(e.firestore),"addDoc",i._key,a,null!==e.converter,{}).toMutation(i._key,tN.exists(!1))]).then(()=>i)}function ir(e,t){return function(e,t){let r=new b;return e.asyncQueue.enqueueAndForget(async()=>n8(await sw(e).then(e=>e.syncEngine),t,r)),r.promise}(sP(e),t)}new WeakMap,function(e=!0){p=o.Jn,(0,o.Xd)(new l.wA("firestore",(t,{instanceIdentifier:r,options:n})=>{let s=t.getProvider("app").getImmediate(),i=new sO(new D(t.getProvider("auth-internal")),new V(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new I(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ev(e.options.projectId,t)}(s,r),s);return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i},"PUBLIC").setMultipleInstances(!0)),(0,o.KN)(f,"4.7.6",void 0),(0,o.KN)(f,"4.7.6","esm2017")}()}}]);