import{_ as i}from"./Price-4e336a66.js";import{B as g}from"./Box-13e9f7c0.js";import{l as f,o as r,i as d,f as o,h as s,t as c,c as h,d as l,a as t,e as m,b as n,L as b}from"./app-8170b1b3.js";import"./_plugin-vue_export-helper-c27b6911.js";const _={key:0,class:"dark:bg-green-900 dark:text-green-200 bg-green-200 text-green-900 p-1 rounded-md uppercase ml-1"},k={class:"flex items-center justify-between"},y={class:"text-gray-500"},B={class:"text-gray-500 text-sm"},v={class:"text-gray-500 text-sm"},w={__name:"Offer",props:{offer:Object,listingPrice:Number,isSold:Boolean},setup(e){const a=e,u=f(()=>a.offer.amount-a.listingPrice),x=f(()=>new Date(a.offer.created_at).toDateString());return(p,N)=>(r(),d(g,null,{header:o(()=>[s("Offer #"+c(e.offer.id)+" ",1),e.offer.accepted_at?(r(),h("span",_,"accepted")):l("",!0)]),default:o(()=>[t("section",k,[t("div",null,[m(i,{price:e.offer.amount,class:"text-xl"},null,8,["price"]),t("div",y,[s(" Difference "),m(i,{price:n(u)},null,8,["price"])]),t("div",B," Made by "+c(e.offer.bidder.name),1),t("div",v," Made on "+c(n(x)),1)]),t("div",null,[e.isSold?l("",!0):(r(),d(n(b),{key:0,href:p.route("realtor.offer.accept",{offer:e.offer.id}),class:"btn-outline text-xs font-medium",as:"button",method:"put"},{default:o(()=>[s(" Accept ")]),_:1},8,["href"]))])])]),_:1}))}};export{w as default};