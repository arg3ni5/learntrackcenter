import{d as e}from"./index-g1SReERP.js";import{_ as r,h as i,p,d as t,j as n,Q as f,y as l,q as h}from"./vendor-firebase-DPqF2cx7.js";const y=async()=>{const s=r(e,"courses");return(await i(s)).docs.map(a=>({id:a.id,...a.data()}))},D=async s=>{const o=r(e,`periods/${s}/courses`);return(await i(o)).docs.map(c=>({id:c.id,...c.data()}))},m=async(s,o)=>{const a=r(e,`periods/${s}/courses`),c=await p(a,{...o}),u=t(e,`periods/${s}`);await n(u,{coursesIds:f(c.id)})},$=async(s,o)=>{const a=t(e,`periods/${s}/courses`,o);await l(a);const c=t(e,`periods/${s}`);await n(c,{coursesIds:h(o)})},S=async(s,o,a)=>{const c=t(e,`periods/${s}/courses`,o),{id:u,...d}=a;await n(c,d),console.log("Course updated with ID: ",o)};export{m as a,y as b,$ as d,D as f,S as u};
