import{b as i,u as t,j as s,a as n}from"./index-Cui4C6id.js";import{l as c}from"./vendor-firebase-CpkMzyVB.js";const m=()=>{const{user:r}=i(),{showNotification:o}=t(),e=async()=>{try{await c(n),console.log("Usuario cerrado sesión")}catch(a){console.error("Error cerrando sesión:",a),o("Error al cerrar sesión.","error")}};return r&&s.jsxs("div",{className:"user-profile",children:[s.jsxs("h2",{children:["Bienvenido, ",r.displayName]}),s.jsxs("p",{className:"user-email",children:["Email: ",r.email]}),r.photoURL&&s.jsx("img",{src:r.photoURL,alt:"Perfil",className:"user-photo"}),s.jsx("div",{className:"logout-container",children:s.jsx("button",{onClick:e,className:"logout-button",children:"Cerrar Sesión"})})]})};export{m as U};
