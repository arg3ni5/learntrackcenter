import{d as e}from"./index-g1SReERP.js";import{_ as c,p as w,W as I,d as h,h as i,e as g,y as C,j as b,R as f,k as u,n as E}from"./vendor-firebase-DPqF2cx7.js";const A=async s=>{const t=c(e,"students");await w(t,s)},B=async s=>{const t=I(e),n=c(e,"students");s.forEach(o=>{const r=h(n);t.set(r,o)});try{await t.commit()}catch(o){throw console.error("Error committing batch:",o),new Error("Error adding students")}},R=async()=>{const s=c(e,"students");return(await i(s)).docs.map(n=>({id:n.id,...n.data()}))},q=async s=>{try{const t=h(e,"students",s),n=await g(t);return n.exists()?{id:n.id,...n.data()}:(console.log("No such document!"),null)}catch(t){throw console.error("Error fetching student:",t),t}},D=async s=>{const t=h(e,"students",s);await C(t)},N=async(s,t)=>{const{id:n,...o}=t,r=h(e,"students",s);await b(r,o)},W=async(s,t)=>{const n=c(e,"enrollments"),o=f(n,u("periodId","==",s),u("courseId","==",t)),m=(await i(o)).docs.map(d=>d.data().studentId).map(d=>q(d));return(await Promise.all(m)).filter(d=>d!==null)},j=async(s,t)=>{const n=c(e,"enrollments"),o=f(n,u("periodId","==",s),u("courseId","==",t)),l=(await i(o)).docs.map(a=>a.data().studentId);if(l.length===0)return await R();const m=c(e,"students"),p=[];for(let a=0;a<l.length;a+=10)p.push(l.slice(a,a+10));const d=p.map(async a=>{const S=f(m,u(E(),"not-in",a));return(await i(S)).docs.map(y=>({id:y.id,...y.data()}))});return(await Promise.all(d)).flat()};export{q as a,A as b,B as c,D as d,j as e,R as f,W as g,N as u};
