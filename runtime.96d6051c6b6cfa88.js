(()=>{"use strict";var e,v={},m={};function a(e){var t=m[e];if(void 0!==t)return t.exports;var f=m[e]={exports:{}};return v[e](f,f.exports,a),f.exports}a.m=v,e=[],a.O=(t,f,d,n)=>{if(!f){var r=1/0;for(c=0;c<e.length;c++){for(var[f,d,n]=e[c],u=!0,b=0;b<f.length;b++)(!1&n||r>=n)&&Object.keys(a.O).every(p=>a.O[p](f[b]))?f.splice(b--,1):(u=!1,n<r&&(r=n));if(u){e.splice(c--,1);var o=d();void 0!==o&&(t=o)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[f,d,n]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var f in t)a.o(t,f)&&!a.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:t[f]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce((t,f)=>(a.f[f](e,t),t),[])),a.u=e=>(8592===e?"common":e)+"."+{58:"66b3004d52bf40b6",99:"79df950e9f991a71",402:"cdea53922d14f443",585:"9c31b98f9343c104",1327:"ec3fa7481d86bc8b",1430:"4375856ecb5099b4",1519:"b7fe8cb6e2d1036f",1997:"a25788812489cd5d",2091:"3038e2bf766b2db0",2650:"9de0b1440ae9fa52",2820:"53436cfb98da0128",2975:"13b188a9274eb3bc",3173:"79efceb21fe471ff",3388:"26221e6dce24f2e8",3425:"a624d47f55677142",3598:"7d1611bc0c591986",3969:"d59bb05c993192ca",4225:"4e87aeb2023d6832",4746:"b326dad4e08bf448",4956:"bfc63804190b743d",5013:"1aff22ba32de5183",5202:"93051cff3e624b92",5623:"d64fa6dd351782ef",5722:"5d29c6502c69b52d",5920:"7c6e286200e7c1ea",6056:"a2cb73a1aaa5c954",6725:"6767b1254cbd05c0",6799:"2ca3981a1729515e",6818:"b939b4410b292496",6822:"e1634d7bae8d1841",7024:"f292cf618ad79c79",7170:"e6d3b8a6fa1d9b19",7418:"7d3ec05f6ecfe315",7604:"0955c13db7ad95de",7866:"7b5f0284b6b86663",7919:"e5fe00c7a6c78724",8592:"d43212843badf4f3",8761:"4d2ad29180ef5150",8878:"44b64591a6ae3248",9327:"0e1b6799d47e4b3a",9346:"adb5bc77ab3f4f31",9364:"8639f30658ddfb68",9512:"ad2e103b503d7d68",9685:"0a19c9242acd1df5",9707:"05078182d7c0a870",9761:"5b0f3e45aaf51c05",9892:"d1aec233baaaff8b"}[e]+".js",a.miniCssF=e=>{},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="sakai-ng:";a.l=(f,d,n,c)=>{if(e[f])e[f].push(d);else{var r,u;if(void 0!==n)for(var b=document.getElementsByTagName("script"),o=0;o<b.length;o++){var i=b[o];if(i.getAttribute("src")==f||i.getAttribute("data-webpack")==t+n){r=i;break}}r||(u=!0,(r=document.createElement("script")).type="module",r.charset="utf-8",r.timeout=120,a.nc&&r.setAttribute("nonce",a.nc),r.setAttribute("data-webpack",t+n),r.src=a.tu(f)),e[f]=[d];var l=(g,p)=>{r.onerror=r.onload=null,clearTimeout(s);var _=e[f];if(delete e[f],r.parentNode&&r.parentNode.removeChild(r),_&&_.forEach(h=>h(p)),g)return g(p)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=l.bind(null,r.onerror),r.onload=l.bind(null,r.onload),u&&document.head.appendChild(r)}}})(),a.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.tt=()=>(void 0===e&&(e={createScriptURL:t=>t},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),a.tu=e=>a.tt().createScriptURL(e),a.p="",(()=>{var e={3666:0};a.f.j=(d,n)=>{var c=a.o(e,d)?e[d]:void 0;if(0!==c)if(c)n.push(c[2]);else if(3666!=d){var r=new Promise((i,l)=>c=e[d]=[i,l]);n.push(c[2]=r);var u=a.p+a.u(d),b=new Error;a.l(u,i=>{if(a.o(e,d)&&(0!==(c=e[d])&&(e[d]=void 0),c)){var l=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.src;b.message="Loading chunk "+d+" failed.\n("+l+": "+s+")",b.name="ChunkLoadError",b.type=l,b.request=s,c[1](b)}},"chunk-"+d,d)}else e[d]=0},a.O.j=d=>0===e[d];var t=(d,n)=>{var b,o,[c,r,u]=n,i=0;if(c.some(s=>0!==e[s])){for(b in r)a.o(r,b)&&(a.m[b]=r[b]);if(u)var l=u(a)}for(d&&d(n);i<c.length;i++)a.o(e,o=c[i])&&e[o]&&e[o][0](),e[o]=0;return a.O(l)},f=self.webpackChunksakai_ng=self.webpackChunksakai_ng||[];f.forEach(t.bind(null,0)),f.push=t.bind(null,f.push.bind(f))})()})();