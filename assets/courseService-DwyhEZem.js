import{l as a,h as t,I as u,f as r,k as d,i,m as l,y as h}from"./index-lcYHgldp.js";const f=async()=>{const s=r(t,"courses");return(await d(s)).docs.map(c=>({id:c.id,...c.data()}))},y=async s=>{const o=r(t,"courses");await i(o,s)},C=async s=>{const o=a(t,"courses",s);await l(o)},D=async(s,o)=>{const{id:e,...c}=o,n=a(t,"courses",s);await h(n,c)},w=async(s,o)=>{try{const e=a(t,`periods/${s}/courses`,o),c=await u(e);return c.exists()?{id:c.id,...c.data()}:(console.log("No such document!"),null)}catch(e){throw console.error("Error fetching student:",e),e}};export{y as a,w as b,C as d,f,D as u};
