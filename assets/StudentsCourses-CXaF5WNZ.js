import{j as t,q as n,r as o}from"./index-BozJdoqh.js";import{S as i,P as d,u}from"./PeriodsManager-Rlh27ig2.js";import"./useStudentCourses-D2S5OMls.js";import"./periodService-COUu7smY.js";const c=({student:s})=>t.jsxs("div",{children:[t.jsx("h2",{className:"title",children:"Student Details"}),s&&t.jsx(i,{student:s}),s&&s.id&&t.jsx(d,{student:s})]}),p=()=>{const{loadStudent:s,student:r,loading:a}=u(),{id:e}=n();return o.useEffect(()=>{e&&!r&&s(e)},[e,r]),t.jsx(t.Fragment,{children:!a&&r&&t.jsx(c,{student:r})})};export{p as default};
