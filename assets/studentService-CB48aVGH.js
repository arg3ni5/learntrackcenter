import{d as e}from"./index-BktWWyx6.js";import{c as d,b as f,w as I,d as m,a as i,i as g,e as C,u as D,q as w,j as u,k as b}from"./vendor-firebase-firestore-B5VfNmRa.js";const A=async s=>{const t=d(e,"students");await f(t,s)},N=async s=>{const t=I(e),n=d(e,"students");s.forEach(o=>{const r=m(n);t.set(r,o)});try{await t.commit()}catch(o){throw console.error("Error committing batch:",o),new Error("Error adding students")}},q=async()=>{const s=d(e,"students");return(await i(s)).docs.map(n=>({id:n.id,...n.data()}))},E=async s=>{try{const t=m(e,"students",s),n=await g(t);return n.exists()?{id:n.id,...n.data()}:(console.log("No such document!"),null)}catch(t){throw console.error("Error fetching student:",t),t}},R=async s=>{const t=m(e,"students",s);await C(t)},j=async(s,t)=>{const{id:n,...o}=t,r=m(e,"students",s);await D(r,o)},_=async(s,t)=>{const n=d(e,"enrollments"),o=w(n,u("periodId","==",s),u("courseId","==",t)),h=(await i(o)).docs.map(c=>c.data().studentId).map(c=>E(c));return(await Promise.all(h)).filter(c=>c!==null)},v=async(s,t)=>{const n=d(e,"enrollments"),o=w(n,u("periodId","==",s),u("courseId","==",t)),l=(await i(o)).docs.map(a=>a.data().studentId);if(l.length===0)return await q();const h=d(e,"students"),p=[];for(let a=0;a<l.length;a+=10)p.push(l.slice(a,a+10));const c=p.map(async a=>{const y=w(h,u(b(),"not-in",a));return(await i(y)).docs.map(S=>({id:S.id,...S.data()}))});return(await Promise.all(c)).flat()};export{E as a,A as b,N as c,R as d,v as e,q as f,_ as g,j as u};
