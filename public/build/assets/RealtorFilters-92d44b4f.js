import{l as p,A as b,s as f,x as v,B as _,o as a,c as o,a as l,w as d,C as m,j as i,F as x,r as g,b as h,t as w}from"./app-8170b1b3.js";const y={class:"mb-4 mt-4 flex flex-wrap gap-4"},k={class:"flex flex-nowrap items-center gap-2"},B=l("label",{for:"deleted"},"Deleted",-1),F=l("option",{value:"created_at"},"Added",-1),L=l("option",{value:"price"},"Price",-1),S=[F,L],V=["value"],U={__name:"RealtorFilters",props:{filters:Object},setup(n){const r=n,c={created_at:[{label:"Latest",value:"desc"},{label:"Oldest",value:"asc"}],price:[{label:"High",value:"desc"},{label:"Low",value:"asc"}]},u=p(()=>c[e.by]),e=b({deleted:r.filters.deleted??!1,by:r.filters.by??"created_at",order:r.filters.order??"desc"});return f(e,v.debounce(()=>{_.Inertia.get(route("realtor.listing.index"),e,{preserveState:!0,preserveScroll:!0})},1e3)),(D,s)=>(a(),o("form",null,[l("div",y,[l("div",k,[d(l("input",{id:"deleted","onUpdate:modelValue":s[0]||(s[0]=t=>e.deleted=t),type:"checkbox",class:"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"},null,512),[[m,e.deleted]]),B]),l("div",null,[d(l("select",{"onUpdate:modelValue":s[1]||(s[1]=t=>e.by=t),class:"input-filter-l w-24"},S,512),[[i,e.by]]),d(l("select",{"onUpdate:modelValue":s[2]||(s[2]=t=>e.order=t),class:"input-filter-r w-32"},[(a(!0),o(x,null,g(h(u),t=>(a(),o("option",{key:t.value,value:t.value},w(t.label),9,V))),128))],512),[[i,e.order]])])])]))}};export{U as default};
