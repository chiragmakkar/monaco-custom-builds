const sw=self,VERSION=4,resourceCacheName="vscode-resource-cache-4",rootPath=sw.location.pathname.replace(/\/service-worker.js$/,""),searchParams=new URL(location.toString()).searchParams,remoteAuthority=searchParams.get("remoteAuthority"),resourceBaseAuthority=searchParams.get("vscode-resource-base-authority"),resolveTimeout=3e4;class RequestStore{constructor(){this.map=new Map,this.requestPool=0}create(){const e=++this.requestPool;let t;const s=new Promise((e=>t=e)),o={resolve:t,promise:s};this.map.set(e,o);const r=setTimeout((()=>{clearTimeout(r);const t=this.map.get(e);if(t===o)return t.resolve({status:"timeout"}),void this.map.delete(e)}),3e4);return{requestId:e,promise:s}}resolve(e,t){const s=this.map.get(e);return!!s&&(s.resolve({status:"ok",value:t}),this.map.delete(e),!0)}}const resourceRequestStore=new RequestStore,localhostRequestStore=new RequestStore,unauthorized=()=>new Response("Unauthorized",{status:401}),notFound=()=>new Response("Not Found",{status:404}),methodNotAllowed=()=>new Response("Method Not Allowed",{status:405}),requestTimeout=()=>new Response("Request Timeout",{status:408});async function processResourceRequest(e,t){const s=await sw.clients.get(e.clientId);if(!s)return console.error("Could not find inner client for request"),notFound();const o=getWebviewIdForClient(s);if(!o)return console.error("Could not resolve webview id"),notFound();const r="GET"===e.request.method,n=await getOuterIframeClient(o);if(!n.length)return console.log("Could not find parent client for request"),notFound();let a;if(r){const t=await caches.open(resourceCacheName);a=await t.match(e.request)}const{requestId:i,promise:c}=resourceRequestStore.create();for(const e of n)e.postMessage({channel:"load-resource",id:i,scheme:t.scheme,authority:t.authority,path:t.path,query:t.query,ifNoneMatch:a?.headers.get("ETag")});return c.then((t=>((t,s)=>{if("timeout"===t.status)return new Response("Request Timeout",{status:408});const o=t.value;if(304===o.status){if(s)return s.clone();throw new Error("No cache found")}if(401===o.status)return new Response("Unauthorized",{status:401});if(200!==o.status)return notFound();const n={"Access-Control-Allow-Origin":"*"},a=o.data.byteLength,i=e.request.headers.get("range");if(i){const e=i.match(/^bytes\=(\d+)\-(\d+)?$/g);if(e){const t=Number(e[1]),s=Number(e[2])||a-1;return new Response(o.data.slice(t,s+1),{status:206,headers:{...n,"Content-range":`bytes 0-${s}/${a}`}})}return new Response(null,{status:416,headers:{...n,"Content-range":`*/${a}`}})}const c={...n,"Content-Type":o.mime,"Content-Length":a.toString()};o.etag&&(c.ETag=o.etag,c["Cache-Control"]="no-cache"),o.mtime&&(c["Last-Modified"]=new Date(o.mtime).toUTCString());const u=new URL(e.request.url).searchParams.get("vscode-coi");"3"===u?(c["Cross-Origin-Opener-Policy"]="same-origin",c["Cross-Origin-Embedder-Policy"]="require-corp"):"2"===u?c["Cross-Origin-Embedder-Policy"]="require-corp":"1"===u&&(c["Cross-Origin-Opener-Policy"]="same-origin");const l=new Response(o.data,{status:200,headers:c});return r&&o.etag&&caches.open(resourceCacheName).then((t=>t.put(e.request,l))),l.clone()})(t,a)))}async function processLocalhostRequest(e,t){const s=await sw.clients.get(e.clientId);if(!s)return fetch(e.request);const o=getWebviewIdForClient(s);if(!o)return console.error("Could not resolve webview id"),fetch(e.request);const r=t.origin,n=await getOuterIframeClient(o);if(!n.length)return console.log("Could not find parent client for request"),notFound();const{requestId:a,promise:i}=localhostRequestStore.create();for(const e of n)e.postMessage({channel:"load-localhost",origin:r,id:a});return i.then((async s=>{if("ok"!==s.status||!s.value)return fetch(e.request);const o=s.value,r=e.request.url.replace(new RegExp(`^${t.origin}(/|$)`),`${o}$1`);return new Response(null,{status:302,headers:{Location:r}})}))}function getWebviewIdForClient(e){return new URL(e.url).searchParams.get("id")}async function getOuterIframeClient(e){return(await sw.clients.matchAll({includeUncontrolled:!0})).filter((t=>new URL(t.url).searchParams.get("id")===e))}sw.addEventListener("message",(async e=>{switch(e.data.channel){case"version":{const t=e.source;return void sw.clients.get(t.id).then((e=>{e&&e.postMessage({channel:"version",version:4})}))}case"did-load-resource":{const t=e.data.data;return void(resourceRequestStore.resolve(t.id,t)||console.log("Could not resolve unknown resource",t.path))}case"did-load-localhost":{const t=e.data.data;return void(localhostRequestStore.resolve(t.id,t.location)||console.log("Could not resolve unknown localhost",t.origin))}default:return void console.log("Unknown message")}})),sw.addEventListener("fetch",(e=>{const t=new URL(e.request.url);if("https:"===t.protocol&&t.hostname.endsWith("."+resourceBaseAuthority))switch(e.request.method){case"GET":case"HEAD":{const s=t.hostname.slice(0,t.hostname.length-(resourceBaseAuthority.length+1)),o=s.split("+",1)[0],r=s.slice(o.length+1);return e.respondWith(processResourceRequest(e,{scheme:o,authority:r,path:t.pathname,query:t.search.replace(/^\?/,"")}))}default:return e.respondWith(methodNotAllowed())}if(t.origin!==sw.origin&&t.host===remoteAuthority)switch(e.request.method){case"GET":case"HEAD":return e.respondWith(processResourceRequest(e,{path:t.pathname,scheme:t.protocol.slice(0,t.protocol.length-1),authority:t.host,query:t.search.replace(/^\?/,"")}));default:return e.respondWith(methodNotAllowed())}if(t.origin!==sw.origin&&t.host.match(/^(localhost|127.0.0.1|0.0.0.0):(\d+)$/))return e.respondWith(processLocalhostRequest(e,t))})),sw.addEventListener("install",(e=>{e.waitUntil(sw.skipWaiting())})),sw.addEventListener("activate",(e=>{e.waitUntil(sw.clients.claim())}));