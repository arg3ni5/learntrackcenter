import{r as c,j as s,d as m,e as l,f as h,h as C,i as x,k as d}from"./index-qW3l38ml.js";const p=({onAddCourse:r})=>{const[t,e]=c.useState(""),[n,u]=c.useState(""),a=o=>{o.preventDefault(),r({name:t,teacher:n}),e(""),u("")};return s.jsxs("form",{onSubmit:a,children:[s.jsx("input",{type:"text",placeholder:"Nombre del Curso",value:t,onChange:o=>e(o.target.value),required:!0}),s.jsx("input",{type:"text",placeholder:"Nombre del Profesor",value:n,onChange:o=>u(o.target.value),required:!0}),s.jsx("button",{type:"submit",children:"Agregar Curso"})]})},j=({courses:r,onRemoveCourse:t})=>s.jsx("ul",{children:r.map(e=>s.jsxs("li",{children:[e.name," - Profesor: ",e.teacher,s.jsx("button",{onClick:()=>t(e.id),children:"Eliminar"})," "]},e.id))}),f=()=>{const[r,t]=c.useState([]),e=async()=>{const o=(await m(l(d,"courses"))).docs.map(i=>({id:i.id,...i.data()}));t(o)},n=async a=>{await h(l(d,"courses"),a),e()},u=async a=>{await C(x(d,"courses",a)),e()};return c.useEffect(()=>{e()},[]),{courses:r,addCourse:n,removeCourse:u}},b=()=>{const{courses:r,addCourse:t,removeCourse:e}=f();return s.jsxs("div",{children:[s.jsx("h1",{children:"Gestión de Cursos"}),s.jsx(p,{onAddCourse:t}),s.jsx(j,{courses:r,onRemoveCourse:e})]})};export{b as default};
