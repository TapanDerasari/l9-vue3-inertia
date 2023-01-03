import{B as N,N as w,u as C,l as f,o as e,c as i,e as p,f as o,i as F,d as b,F as d,h as c,a as t,b as l,r as h,t as I,g as L,L as S}from"./app-8170b1b3.js";import{B as y}from"./Box-13e9f7c0.js";import"./_plugin-vue_export-helper-c27b6911.js";const V=["onSubmit"],j={class:"flex items-center gap-2 my-4"},U=["disabled"],D={key:0,class:"input-error"},E={class:"mt-4 grid grid-cols-3 gap-4"},O=["src"],T={__name:"Create",props:{listing:Object},setup(n){const g=n;N.Inertia.on("progress",r=>{r.detail.progress.percentage&&w.set(r.detail.progress.percentage/100*.9)});const s=C({images:[]}),u=f(()=>Object.values(s.errors)),_=f(()=>s.images.length),k=()=>{s.post(route("realtor.listing.image.store",{listing:g.listing.id}),{onSuccess:()=>s.reset("images")})},x=r=>{for(const m of r.target.files)s.images.push(m)},v=()=>s.reset("images");return(r,m)=>(e(),i(d,null,[p(y,null,{header:o(()=>[c("Upload New Images")]),default:o(()=>[t("form",{onSubmit:L(k,["prevent"])},[t("section",j,[t("input",{class:"border rounded-md file:px-4 file:py-2 border-gray-200 dark:border-gray-700 file:text-gray-700 file:dark:text-gray-400 file:border-0 file:bg-gray-100 file:dark:bg-gray-800 file:font-medium file:hover:bg-gray-200 file:dark:hover:bg-gray-700 file:hover:cursor-pointer file:mr-4",type:"file",multiple:"",onInput:x,accept:"image/*"},null,32),t("button",{type:"submit",class:"btn-outline disabled:opacity-25 disabled:cursor-not-allowed",disabled:!l(_)}," Upload ",8,U),t("button",{type:"reset",class:"btn-outline",onClick:v}," Reset ")]),l(u).length?(e(),i("div",D,[(e(!0),i(d,null,h(l(u),(a,B)=>(e(),i("div",{key:B},I(a),1))),128))])):b("",!0)],40,V)]),_:1}),n.listing.images.length?(e(),F(y,{key:0,class:"mt-4"},{header:o(()=>[c("Current Listing Images")]),default:o(()=>[t("section",E,[(e(!0),i(d,null,h(n.listing.images,a=>(e(),i("div",{key:a.id,class:"flex flex-col justify-between"},[t("img",{src:a.src,class:"rounded-md"},null,8,O),p(l(S),{href:r.route("realtor.listing.image.destroy",{listing:g.listing.id,image:a.id}),method:"delete",as:"button",class:"mt-2 btn-outline text-xs"},{default:o(()=>[c(" Delete ")]),_:2},1032,["href"])]))),128))])]),_:1})):b("",!0)],64))}};export{T as default};
