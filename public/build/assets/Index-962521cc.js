import{_ as x,a as g}from"./ListingSpace-42dcaca9.js";import{_ as b}from"./Price-4e336a66.js";import{B as k}from"./Box-13e9f7c0.js";import{_ as p}from"./Pagination-679822e8.js";import y from"./RealtorFilters-92d44b4f.js";import{_ as w}from"./EmptyState-b8b313a7.js";import{o as s,c as n,a as t,e as l,F as m,r as v,i as f,f as r,d as u,n as _,h as o,b as d,L as c,t as h}from"./app-8170b1b3.js";import"./_plugin-vue_export-helper-c27b6911.js";const B=t("h1",{class:"text-3xl mb-4"},"Your Listings",-1),$={key:0,class:"grid grid-cols-1 lg:grid-cols-2 gap-2"},N={class:"flex flex-col md:flex-row gap-2 md:items-center justify-between"},j={key:0,class:"text-xs font-bold uppercase border border-dashed p-1 border-green-300 text-green-500 dark:border-green-600 dark:text-green-600 inline-block rounded-md mb-2"},L={class:"xl:flex items-center gap-2"},V={class:"flex items-center gap-1 text-gray-600 dark:text-gray-300"},C=["href"],O={class:"mt-2"},D={class:"mt-2"},E={key:2,class:"w-full flex justify-center mt-4 mb-4"},A={__name:"Index",props:{listings:Object,filters:Object},setup(i){return(a,F)=>(s(),n(m,null,[B,t("section",null,[l(y,{filters:i.filters},null,8,["filters"])]),i.listings.data.length?(s(),n("section",$,[(s(!0),n(m,null,v(i.listings.data,e=>(s(),f(k,{key:e.id,class:_({"border-dashed":e.deleted_at})},{default:r(()=>[t("div",N,[t("div",{class:_({"opacity-25":e.deleted_at})},[e.sold_at!=null?(s(),n("div",j," sold ")):u("",!0),t("div",L,[l(b,{price:e.price,class:"text-2xl font-medium"},null,8,["price"]),l(x,{listing:e},null,8,["listing"])]),l(g,{listing:e},null,8,["listing"])],2),t("section",null,[t("div",V,[t("a",{class:"btn-outline text-xs font-medium",href:a.route("listing.show",{listing:e.id}),target:"_blank"},"Preview",8,C),l(d(c),{class:"btn-outline text-xs font-medium",href:a.route("realtor.listing.edit",{listing:e.id})},{default:r(()=>[o("Edit")]),_:2},1032,["href"]),e.deleted_at?(s(),f(d(c),{key:1,class:"btn-outline text-xs font-medium",href:a.route("realtor.listing.restore",{listing:e.id}),as:"button",method:"put"},{default:r(()=>[o(" Restore ")]),_:2},1032,["href"])):(s(),f(d(c),{key:0,class:"btn-outline text-xs font-medium",href:a.route("realtor.listing.destroy",{listing:e.id}),as:"button",method:"delete"},{default:r(()=>[o(" Delete ")]),_:2},1032,["href"]))]),t("div",O,[l(d(c),{href:a.route("realtor.listing.image.create",{listing:e.id}),class:"block w-full btn-outline text-xs font-medium text-center"},{default:r(()=>[o(" Images ("+h(e.images_count)+") ",1)]),_:2},1032,["href"])]),t("div",D,[l(d(c),{href:a.route("realtor.listing.show",{listing:e.id}),class:"block w-full btn-outline text-xs font-medium text-center"},{default:r(()=>[o(" Offers ("+h(e.offers_count)+") ",1)]),_:2},1032,["href"])])])])]),_:2},1032,["class"]))),128))])):(s(),f(w,{key:1},{default:r(()=>[o("No listings yet")]),_:1})),i.listings.data.length?(s(),n("section",E,[l(p,{links:i.listings.links},null,8,["links"])])):u("",!0)],64))}};export{A as default};