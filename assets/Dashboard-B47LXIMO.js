import{d as a,r as t,j as o,s as c,b as l,g as u}from"./index-lcYHgldp.js";import{U as d}from"./UserProfile-CxZFAJdE.js";const x=()=>{const{user:e}=a(),[s,n]=t.useState(""),i=async()=>{try{const r=await c(l,u);console.log("Usuario autenticado con Google:",r.user)}catch(r){console.error("Error iniciando sesión con Google:",r),n("Error al iniciar sesión con Google.")}};return o.jsxs(o.Fragment,{children:[o.jsx("h2",{children:"Resumen Académico"}),e?o.jsx(d,{}):o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Iniciar Sesión"}),o.jsx("button",{onClick:i,children:"Iniciar Sesión con Google"})]}),s&&o.jsx("p",{children:s})]})};export{x as default};
