import{f as n,k as r,l as o,m as c,h as d,i as l,j as s,B as i}from"./index-Cc0MP3DI.js";const u=async e=>{const t=n(d,"grades");await r(t,e)},m=async()=>{const e=n(d,"grades");return(await l(e)).docs.map(a=>({id:a.id,studentId:a.data().studentId,subjectId:a.data().subjectId,finalGrade:a.data().finalGrade}))},f=async e=>{const t=o(d,"grades",e);await c(t)},g=()=>{const e=[{name:"studentId",placeholder:"ID of the Student"},{name:"subjectId",placeholder:"ID of the Subject"},{name:"finalGrade",placeholder:"Final Grade"}],t=async()=>await m();return s.jsx(i,{title:"Grade Management",fields:e,fetchItems:t,onItemAdded:async a=>{await u(a)},onItemDeleted:f})},G=()=>s.jsx("div",{children:s.jsx(g,{})});export{G as default};
