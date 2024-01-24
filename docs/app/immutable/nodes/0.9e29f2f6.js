import{s as z,r as ee,f as $,g as k,h as A,d,j as E,u as U,i as F,v,w as te,x as le,y as se,a as T,c as S,z as j,A as Y,B as ae,l as I,m as N,C as P}from"../chunks/scheduler.7c577333.js";import{S as W,i as G,a as y,t as H,g as J,c as K,b as R,d as B,m as V,e as q}from"../chunks/index.8ddd727e.js";import{e as O}from"../chunks/each.e59479a4.js";import{p as re}from"../chunks/stores.bff956a7.js";const oe=!0,Ce=Object.freeze(Object.defineProperty({__proto__:null,prerender:oe},Symbol.toStringTag,{value:"Module"}));function ie(n){let t,l,e;const s=n[3].default,a=ee(s,n,n[2],null);return{c(){t=$("li"),l=$("a"),a&&a.c(),this.h()},l(o){t=k(o,"LI",{class:!0});var _=A(t);l=k(_,"A",{href:!0,class:!0});var m=A(l);a&&a.l(m),m.forEach(d),_.forEach(d),this.h()},h(){E(l,"href",n[0]),E(l,"class","nav-item svelte-bs8x38"),U(l,"active",n[1]),E(t,"class","svelte-bs8x38")},m(o,_){F(o,t,_),v(t,l),a&&a.m(l,null),e=!0},p(o,[_]){a&&a.p&&(!e||_&4)&&te(a,s,o,o[2],e?se(s,o[2],_,null):le(o[2]),null),(!e||_&1)&&E(l,"href",o[0]),(!e||_&2)&&U(l,"active",o[1])},i(o){e||(y(a,o),e=!0)},o(o){H(a,o),e=!1},d(o){o&&d(t),a&&a.d(o)}}}function ce(n,t,l){let{$$slots:e={},$$scope:s}=t,{path:a}=t,{active:o=!1}=t;return n.$$set=_=>{"path"in _&&l(0,a=_.path),"active"in _&&l(1,o=_.active),"$$scope"in _&&l(2,s=_.$$scope)},[a,o,s,e]}class ne extends W{constructor(t){super(),G(this,t,ce,ie,z,{path:0,active:1})}}function Q(n,t,l){const e=n.slice();return e[3]=t[l][0],e[4]=t[l][1],e}function X(n,t,l){const e=n.slice();return e[3]=t[l][0],e[4]=t[l][1],e}function fe(n){let t=n[4]+"",l;return{c(){l=I(t)},l(e){l=N(e,t)},m(e,s){F(e,l,s)},p:P,d(e){e&&d(l)}}}function Z(n){let t,l;return t=new ne({props:{path:n[3],active:n[3]==="/"?n[0].url.pathname==="/":n[0].url.pathname.includes(n[3]),$$slots:{default:[fe]},$$scope:{ctx:n}}}),{c(){R(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,s){V(t,e,s),l=!0},p(e,s){const a={};s&1&&(a.active=e[3]==="/"?e[0].url.pathname==="/":e[0].url.pathname.includes(e[3])),s&512&&(a.$$scope={dirty:s,ctx:e}),t.$set(a)},i(e){l||(y(t.$$.fragment,e),l=!0)},o(e){H(t.$$.fragment,e),l=!1},d(e){q(t,e)}}}function ue(n){let t=n[4]+"",l,e;return{c(){l=I(t),e=T()},l(s){l=N(s,t),e=S(s)},m(s,a){F(s,l,a),F(s,e,a)},p:P,d(s){s&&(d(l),d(e))}}}function x(n){let t,l;return t=new ne({props:{path:n[3],active:n[3]==="/"?n[0].url.pathname==="/":n[0].url.pathname.includes(n[3]),$$slots:{default:[ue]},$$scope:{ctx:n}}}),{c(){R(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,s){V(t,e,s),l=!0},p(e,s){const a={};s&1&&(a.active=e[3]==="/"?e[0].url.pathname==="/":e[0].url.pathname.includes(e[3])),s&512&&(a.$$scope={dirty:s,ctx:e}),t.$set(a)},i(e){l||(y(t.$$.fragment,e),l=!0)},o(e){H(t.$$.fragment,e),l=!1},d(e){q(t,e)}}}function he(n){let t,l,e,s,a,o,_='<a href="/" class="logo svelte-s0hk1x"><img alt="Freedom Cash Logo" src="/libertas-favicon/icon.ico" class="svelte-s0hk1x"/></a>',m,i,p=O(n[1]),h=[];for(let c=0;c<p.length;c+=1)h[c]=Z(X(n,p,c));const M=c=>H(h[c],1,1,()=>{h[c]=null});let C=O(n[2]),u=[];for(let c=0;c<C.length;c+=1)u[c]=x(Q(n,C,c));const w=c=>H(u[c],1,1,()=>{u[c]=null});return{c(){t=$("header"),l=$("div"),e=$("nav"),s=$("ul");for(let c=0;c<h.length;c+=1)h[c].c();a=T(),o=$("li"),o.innerHTML=_,m=T();for(let c=0;c<u.length;c+=1)u[c].c();this.h()},l(c){t=k(c,"HEADER",{class:!0});var f=A(t);l=k(f,"DIV",{class:!0});var r=A(l);e=k(r,"NAV",{class:!0});var b=A(e);s=k(b,"UL",{class:!0});var L=A(s);for(let g=0;g<h.length;g+=1)h[g].l(L);a=S(L),o=k(L,"LI",{class:!0,"data-svelte-h":!0}),j(o)!=="svelte-d6vcvk"&&(o.innerHTML=_),m=S(L);for(let g=0;g<u.length;g+=1)u[g].l(L);L.forEach(d),b.forEach(d),r.forEach(d),f.forEach(d),this.h()},h(){E(o,"class","svelte-s0hk1x"),E(s,"class","svelte-s0hk1x"),E(e,"class","svelte-s0hk1x"),E(l,"class","container"),E(t,"class","svelte-s0hk1x")},m(c,f){F(c,t,f),v(t,l),v(l,e),v(e,s);for(let r=0;r<h.length;r+=1)h[r]&&h[r].m(s,null);v(s,a),v(s,o),v(s,m);for(let r=0;r<u.length;r+=1)u[r]&&u[r].m(s,null);i=!0},p(c,[f]){if(f&3){p=O(c[1]);let r;for(r=0;r<p.length;r+=1){const b=X(c,p,r);h[r]?(h[r].p(b,f),y(h[r],1)):(h[r]=Z(b),h[r].c(),y(h[r],1),h[r].m(s,a))}for(J(),r=p.length;r<h.length;r+=1)M(r);K()}if(f&5){C=O(c[2]);let r;for(r=0;r<C.length;r+=1){const b=Q(c,C,r);u[r]?(u[r].p(b,f),y(u[r],1)):(u[r]=x(b),u[r].c(),y(u[r],1),u[r].m(s,null))}for(J(),r=C.length;r<u.length;r+=1)w(r);K()}},i(c){if(!i){for(let f=0;f<p.length;f+=1)y(h[f]);for(let f=0;f<C.length;f+=1)y(u[f]);i=!0}},o(c){h=h.filter(Boolean);for(let f=0;f<h.length;f+=1)H(h[f]);u=u.filter(Boolean);for(let f=0;f<u.length;f+=1)H(u[f]);i=!1},d(c){c&&d(t),Y(h,c),Y(u,c)}}}function _e(n,t,l){let e;return ae(n,re,o=>l(0,e=o)),[e,[["/freedomWallets","Wallets"],["/freedomTreasures","Treasures"],["/freedomExchange","Exchange"]],[["/freedomEnterprise","Enterprise"],["/freedomInvestments","Investment"],["/philosophy","Philosophy"]]]}class me extends W{constructor(t){super(),G(this,t,_e,he,z,{})}}function pe(n){let t,l,e,s='<a class="underline" href="https://github.com/monique-baumann/freedom-cash" target="_blank" rel="noopener">GitHub</a>',a,o,_="•",m,i,p,h,M,C,u,w="•",c,f,r='<a class="underline" href="https://freedomcash.org" target="_blank" rel="noopener">FreedomCash.org</a>';return{c(){t=$("footer"),l=$("div"),e=$("span"),e.innerHTML=s,a=T(),o=$("span"),o.textContent=_,m=T(),i=$("span"),p=I("© "),h=I(n[0]),M=I(" Freedom Cash"),C=T(),u=$("span"),u.textContent=w,c=T(),f=$("span"),f.innerHTML=r,this.h()},l(b){t=k(b,"FOOTER",{class:!0});var L=A(t);l=k(L,"DIV",{class:!0});var g=A(l);e=k(g,"SPAN",{"data-svelte-h":!0}),j(e)!=="svelte-dxda66"&&(e.innerHTML=s),a=S(g),o=k(g,"SPAN",{"data-svelte-h":!0}),j(o)!=="svelte-7hh8jk"&&(o.textContent=_),m=S(g),i=k(g,"SPAN",{});var D=A(i);p=N(D,"© "),h=N(D,n[0]),M=N(D," Freedom Cash"),D.forEach(d),C=S(g),u=k(g,"SPAN",{"data-svelte-h":!0}),j(u)!=="svelte-7hh8jk"&&(u.textContent=w),c=S(g),f=k(g,"SPAN",{"data-svelte-h":!0}),j(f)!=="svelte-h6ykkk"&&(f.innerHTML=r),g.forEach(d),L.forEach(d),this.h()},h(){E(l,"class","container svelte-ypycgj"),E(t,"class","svelte-ypycgj")},m(b,L){F(b,t,L),v(t,l),v(l,e),v(l,a),v(l,o),v(l,m),v(l,i),v(i,p),v(i,h),v(i,M),v(l,C),v(l,u),v(l,c),v(l,f)},p:P,i:P,o:P,d(b){b&&d(t)}}}function ve(n){return[new Date().getFullYear()]}class de extends W{constructor(t){super(),G(this,t,ve,pe,z,{})}}function ge(n){let t,l,e,s,a,o;t=new me({});const _=n[1].default,m=ee(_,n,n[0],null);return a=new de({}),{c(){R(t.$$.fragment),l=T(),e=$("main"),m&&m.c(),s=T(),R(a.$$.fragment),this.h()},l(i){B(t.$$.fragment,i),l=S(i),e=k(i,"MAIN",{class:!0});var p=A(e);m&&m.l(p),p.forEach(d),s=S(i),B(a.$$.fragment,i),this.h()},h(){E(e,"class","container svelte-40n5a")},m(i,p){V(t,i,p),F(i,l,p),F(i,e,p),m&&m.m(e,null),F(i,s,p),V(a,i,p),o=!0},p(i,[p]){m&&m.p&&(!o||p&1)&&te(m,_,i,i[0],o?se(_,i[0],p,null):le(i[0]),null)},i(i){o||(y(t.$$.fragment,i),y(m,i),y(a.$$.fragment,i),o=!0)},o(i){H(t.$$.fragment,i),H(m,i),H(a.$$.fragment,i),o=!1},d(i){i&&(d(l),d(e),d(s)),q(t,i),m&&m.d(i),q(a,i)}}}function $e(n,t,l){let{$$slots:e={},$$scope:s}=t;return n.$$set=a=>{"$$scope"in a&&l(0,s=a.$$scope)},[s,e]}class Le extends W{constructor(t){super(),G(this,t,$e,ge,z,{})}}export{Le as component,Ce as universal};