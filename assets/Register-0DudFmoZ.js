import{r as s,j as r,c as l,a as c}from"./index-qW3l38ml.js";const p=()=>{const[t,o]=s.useState(""),[a,i]=s.useState(""),n=async e=>{e.preventDefault();try{await l(c,t,a),console.log("Usuario registrado exitosamente")}catch(u){console.error("Error registrando usuario:",u)}};return r.jsxs("form",{onSubmit:n,children:[r.jsx("input",{type:"email",placeholder:"Email",value:t,onChange:e=>o(e.target.value),required:!0}),r.jsx("input",{type:"password",placeholder:"Contraseña",value:a,onChange:e=>i(e.target.value),required:!0}),r.jsx("button",{type:"submit",children:"Registrar"})]})};export{p as default};