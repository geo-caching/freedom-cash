import{s as z,f as g,a as M,g as _,h as Z,z as H,c as b,d as q,j as C,i as A,v as a,F as U,D as Q,G as ee,e as X,o as te,l as N,m as W,C as ne}from"../chunks/scheduler.e76b12a0.js";import{S as J,i as K,b as S,d as V,m as B,a as F,t as D,e as G,g as re,c as se}from"../chunks/index.8ff76f30.js";import{S as ae}from"../chunks/Seo.455fa237.js";import{c as oe,l as le,g as ie}from"../chunks/helpers.4520afbe.js";import{p as ce}from"../chunks/constants.1154adc2.js";import{M as fe}from"../chunks/Map.1fb98b94.js";function ue(f){let t,s,e="<br/>",n,r,p,i,L="<br/>",y,u,m,v,T="<br/>",w,h,j="<br/>",P,x,k,E;return u=new fe({props:{pois:f[3],contract:f[0]}}),{c(){t=g("div"),s=g("p"),s.innerHTML=e,n=M(),r=g("input"),p=M(),i=g("p"),i.innerHTML=L,y=M(),S(u.$$.fragment),m=M(),v=g("p"),v.innerHTML=T,w=M(),h=g("p"),h.innerHTML=j,P=M(),this.h()},l(o){t=_(o,"DIV",{class:!0});var l=Z(t);s=_(l,"P",{"data-svelte-h":!0}),H(s)!=="svelte-pntvnr"&&(s.innerHTML=e),n=b(l),r=_(l,"INPUT",{class:!0,type:!0,placeholder:!0}),p=b(l),i=_(l,"P",{"data-svelte-h":!0}),H(i)!=="svelte-pntvnr"&&(i.innerHTML=L),y=b(l),V(u.$$.fragment,l),m=b(l),v=_(l,"P",{"data-svelte-h":!0}),H(v)!=="svelte-pntvnr"&&(v.innerHTML=T),w=b(l),h=_(l,"P",{"data-svelte-h":!0}),H(h)!=="svelte-pntvnr"&&(h.innerHTML=j),P=b(l),l.forEach(q),this.h()},h(){C(r,"class","myInputField"),C(r,"type","text"),C(r,"placeholder",f[1]),r.autofocus=!0,C(t,"class","assets svelte-goth7")},m(o,l){A(o,t,l),a(t,s),a(t,n),a(t,r),U(r,f[2]),a(t,p),a(t,i),a(t,y),B(u,t,null),a(t,m),a(t,v),a(t,w),a(t,h),a(t,P),x=!0,r.focus(),k||(E=[Q(r,"input",f[6]),Q(r,"keydown",f[4])],k=!0)},p(o,[l]){(!x||l&2)&&C(r,"placeholder",o[1]),l&4&&r.value!==o[2]&&U(r,o[2]);const $={};l&8&&($.pois=o[3]),l&1&&($.contract=o[0]),u.$set($)},i(o){x||(F(u.$$.fragment,o),x=!0)},o(o){D(u.$$.fragment,o),x=!1},d(o){o&&q(t),G(u),k=!1,ee(E)}}}function pe(f,t,s){let{contract:e}=t,{pois:n=[]}=t,{placeHolderText:r="... type to filter ..."}=t,p="",i=n,L=!1;const y=()=>{s(3,i=[...n]),L===!1&&(L=!0,setTimeout(()=>{const m=[];for(const v of i)JSON.stringify(v).toLowerCase().indexOf(p.toLowerCase())!==-1&&m.push(v);s(3,i=[...m]),L=!1},1e3*1))};function u(){p=this.value,s(2,p)}return f.$$set=m=>{"contract"in m&&s(0,e=m.contract),"pois"in m&&s(5,n=m.pois),"placeHolderText"in m&&s(1,r=m.placeHolderText)},[e,r,p,i,y,n,u]}class me extends J{constructor(t){super(),K(this,t,pe,ue,z,{contract:0,pois:5,placeHolderText:1})}}function Y(f){let t,s;return t=new me({props:{pois:f[1],contract:f[0],placeHolderText:"... filter freedom exchanges ..."}}),{c(){S(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){B(t,e,n),s=!0},p(e,n){const r={};n&2&&(r.pois=e[1]),n&1&&(r.contract=e[0]),t.$set(r)},i(e){s||(F(t.$$.fragment,e),s=!0)},o(e){D(t.$$.fragment,e),s=!1},d(e){G(t,e)}}}function de(f){let t,s,e=f[2]&&Y(f);return{c(){e&&e.c(),t=X()},l(n){e&&e.l(n),t=X()},m(n,r){e&&e.m(n,r),A(n,t,r),s=!0},p(n,[r]){n[2]?e?(e.p(n,r),r&4&&F(e,1)):(e=Y(n),e.c(),F(e,1),e.m(t.parentNode,t)):e&&(re(),D(e,1,1,()=>{e=null}),se())},i(n){s||(F(e),s=!0)},o(n){D(e),s=!1},d(n){n&&q(t),e&&e.d(n)}}}function he(f,t,s){let e,n=[],r=!1;return te(async()=>{if(!(typeof window.ethereum>"u")){const p=await oe();p.provider,s(0,e=p.fBContract),p.publicWalletAddressOfVisitor,s(2,r=!1);const i=await le(e,ce);s(1,n=ie(i)),s(2,r=!0)}}),[e,n,r]}class ge extends J{constructor(t){super(),K(this,t,he,de,z,{})}}function _e(f){let t,s,e,n,r="Freedom Exchange",p,i,L="<br/>",y,u,m="<br/>",v,T,w,h,j='<img class="moniqueImage" src="https://github.com/monique-baumann/FreedomEnterprise/assets/145258627/0fe025ad-1aef-47f1-ad51-054411d7a5d0" alt=""/>',P,x,k="<br/>",E,o,l="<i>Monique Baumann</i>",$,I,R="<br/>",O;return t=new ae({props:{title:"Freedom Exchange"}}),T=new ge({}),{c(){S(t.$$.fragment),s=M(),e=g("div"),n=g("h2"),n.textContent=r,p=N(`

	Here you can exchange freedom goods like food, silver, gold and Freedom Cash.
	`),i=g("p"),i.innerHTML=L,y=N(`
	Everyone can be a freedom exchange by exchanging things peer to peer.
	`),u=g("p"),u.innerHTML=m,v=M(),S(T.$$.fragment),w=M(),h=g("div"),h.innerHTML=j,P=M(),x=g("p"),x.innerHTML=k,E=N(`
	We work hand in hand to free ourselves and free the world.
	`),o=g("a"),o.innerHTML=l,$=M(),I=g("p"),I.innerHTML=R,this.h()},l(d){V(t.$$.fragment,d),s=b(d),e=_(d,"DIV",{class:!0});var c=Z(e);n=_(c,"H2",{"data-svelte-h":!0}),H(n)!=="svelte-5zcwot"&&(n.textContent=r),p=W(c,`

	Here you can exchange freedom goods like food, silver, gold and Freedom Cash.
	`),i=_(c,"P",{"data-svelte-h":!0}),H(i)!=="svelte-jq895e"&&(i.innerHTML=L),y=W(c,`
	Everyone can be a freedom exchange by exchanging things peer to peer.
	`),u=_(c,"P",{"data-svelte-h":!0}),H(u)!=="svelte-jq895e"&&(u.innerHTML=m),v=b(c),V(T.$$.fragment,c),w=b(c),h=_(c,"DIV",{class:!0,"data-svelte-h":!0}),H(h)!=="svelte-v9jdtm"&&(h.innerHTML=j),P=b(c),x=_(c,"P",{"data-svelte-h":!0}),H(x)!=="svelte-jq895e"&&(x.innerHTML=k),E=W(c,`
	We work hand in hand to free ourselves and free the world.
	`),o=_(c,"A",{href:!0,target:!0,"data-svelte-h":!0}),H(o)!=="svelte-1yjiq05"&&(o.innerHTML=l),$=b(c),I=_(c,"P",{"data-svelte-h":!0}),H(I)!=="svelte-pntvnr"&&(I.innerHTML=R),c.forEach(q),this.h()},h(){C(h,"class","center"),C(o,"href","https://github.com/monique-baumann"),C(o,"target","_blank"),C(e,"class","text-center")},m(d,c){B(t,d,c),A(d,s,c),A(d,e,c),a(e,n),a(e,p),a(e,i),a(e,y),a(e,u),a(e,v),B(T,e,null),a(e,w),a(e,h),a(e,P),a(e,x),a(e,E),a(e,o),a(e,$),a(e,I),O=!0},p:ne,i(d){O||(F(t.$$.fragment,d),F(T.$$.fragment,d),O=!0)},o(d){D(t.$$.fragment,d),D(T.$$.fragment,d),O=!1},d(d){d&&(q(s),q(e)),G(t,d),G(T)}}}class Le extends J{constructor(t){super(),K(this,t,null,_e,z,{})}}export{Le as component};
