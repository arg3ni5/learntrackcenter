import{u as t,r as l,j as r,s as d,a as i,g as h,b as u}from"./index-MpNMWhcj.js";const g=()=>{const{user:o}=t(),[e,n]=l.useState(""),a=async()=>{try{const s=await d(i,h);console.log("Usuario autenticado con Google:",s.user)}catch(s){console.error("Error iniciando sesión con Google:",s),n("Error al iniciar sesión con Google.")}},c=async()=>{try{await u(i),console.log("Usuario cerrado sesión")}catch(s){console.error("Error cerrando sesión:",s),n("Error al cerrar sesión.")}};return r.jsxs("div",{children:[r.jsxs("h1",{children:["Bienvenido, ",o==null?void 0:o.displayName]}),r.jsx("h2",{children:"Resumen Académico"}),r.jsxs("div",{children:[o?r.jsxs("div",{children:[r.jsxs("h2",{children:["Bienvenido, ",o.displayName]}),r.jsxs("p",{children:["Email: ",o.email]}),o.photoURL&&r.jsx("img",{src:o.photoURL,alt:"Perfil"}),r.jsx("button",{onClick:c,children:"Cerrar Sesión"})]}):r.jsxs(r.Fragment,{children:[r.jsx("h1",{children:"Iniciar Sesión"}),r.jsx("button",{onClick:a,children:"Iniciar Sesión con Google"})]}),e&&r.jsx("p",{children:e})]})]})};export{g as default};
