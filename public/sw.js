if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let t={};const r=e=>n(e,a),o={module:{uri:a},exports:t,require:r};s[a]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/4Fm879PH6l-YBSeWApARb/_buildManifest.js",revision:"79596b24183f411586b4e1ec8bb7ff8e"},{url:"/_next/static/4Fm879PH6l-YBSeWApARb/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/11e07bb4.84ca998cad35d528.js",revision:"84ca998cad35d528"},{url:"/_next/static/chunks/777.300e2b3b1c69636e.js",revision:"300e2b3b1c69636e"},{url:"/_next/static/chunks/878-d332e95209b4c1dc.js",revision:"d332e95209b4c1dc"},{url:"/_next/static/chunks/905.6f71fafe72d101b3.js",revision:"6f71fafe72d101b3"},{url:"/_next/static/chunks/d7eeaac4.46f3dba4b59596c8.js",revision:"46f3dba4b59596c8"},{url:"/_next/static/chunks/framework-a87821de553db91d.js",revision:"a87821de553db91d"},{url:"/_next/static/chunks/main-24337e41c3359801.js",revision:"24337e41c3359801"},{url:"/_next/static/chunks/pages/_app-9cc2abde93ff60f4.js",revision:"9cc2abde93ff60f4"},{url:"/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js",revision:"a4ba2246ff8fb532"},{url:"/_next/static/chunks/pages/index-208a28c4b7302eab.js",revision:"208a28c4b7302eab"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-e882095b835b6574.js",revision:"e882095b835b6574"},{url:"/_next/static/css/264f2338860967fa.css",revision:"264f2338860967fa"},{url:"/_next/static/css/ce56beb48aae93bb.css",revision:"ce56beb48aae93bb"},{url:"/android-chrome-192x192.png",revision:"ae099f0be7d586e6e29c768c3a02de9d"},{url:"/android-chrome-512x512.png",revision:"2ea616d85e85e3388eebb062cccba4e7"},{url:"/apple-touch-icon.png",revision:"f52d917d64051e015d5eb46a22ed87b6"},{url:"/auwufy_bg.jpg",revision:"e03817f1bc700c87f2997ef1c343bcc3"},{url:"/favicon-16x16.png",revision:"11f505283877f1212411abde1325464d"},{url:"/favicon-32x32.png",revision:"432a9d2123a693b5a6e4cfe4503e5a25"},{url:"/favicon.ico",revision:"6c571d3bc05dae65df8293e9048f7acd"},{url:"/gigachad.jpg",revision:"d428bb4dff60cf6df9b282ce58efcade"},{url:"/image_icon_dark.png",revision:"709bfde1710f2399ac9e19b39be9e6c3"},{url:"/image_icon_light.png",revision:"721fe83ecb1d582274b83281a4562873"},{url:"/images/icons/icon-128x128.png",revision:"1fe1f629da7dab65edabcc18b89dd526"},{url:"/images/icons/icon-144x144.png",revision:"7dcef62e99b5a09c6fcded70076b9cd2"},{url:"/images/icons/icon-152x152.png",revision:"ad9848105d9813cfe9d841dea3787a27"},{url:"/images/icons/icon-192x192.png",revision:"9c61acd8a3cd1ebe5fafa4e9b3713c60"},{url:"/images/icons/icon-384x384.png",revision:"b60676d9dc1407856cda8b3adaecc478"},{url:"/images/icons/icon-512x512.png",revision:"b69248fff29613b8c915ea34c7ef73bc"},{url:"/images/icons/icon-72x72.png",revision:"300c91190298a5ee34333137436d9432"},{url:"/images/icons/icon-96x96.png",revision:"92ee0abe4b0c979ce395f0f06e08ea61"},{url:"/manifest.json",revision:"841387849713ecfd1474810e23b5ae70"},{url:"/site.webmanifest",revision:"053100cb84a50d2ae7f5492f7dd7f25e"},{url:"/textExtraction_bg.gif",revision:"2e32b0d0536f48e8d9bee9e86d7bb606"},{url:"/textExtraction_bg.mp4",revision:"fc7a2c0702d68d932afda1f417ea6160"},{url:"/textExtraction_bg.webm",revision:"2b450ec321f759eddcceb0dcc27ca2e9"},{url:"/text_icon_dark.png",revision:"1cb8d84d3f0e83c164191c6cb7953f8c"},{url:"/text_icon_light.png",revision:"c899f3fe9d8aa655cdebbaf52e6343bc"},{url:"/uwu.png",revision:"b48d294edd68605562de10990506053e"},{url:"/uwufy_bg.gif",revision:"a6e564cfaab688b7003928bae743271a"},{url:"/uwufy_bg.mp4",revision:"6d0fdc2d055db7d41e3392f7191e07f4"},{url:"/uwufy_bg.webm",revision:"236547eecc69e951c30a6d76dbe0e3bc"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
