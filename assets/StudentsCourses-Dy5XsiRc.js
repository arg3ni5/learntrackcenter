import{j as r}from"./index-BktWWyx6.js";import{f as i,r as a}from"./vendor-react-BWjxQFbR.js";import{u as m}from"./useStudents-DwIMxqrp.js";import{S as n,a as d}from"./StudentPeriodsManager-je7_qvwn.js";import"./vendor-firebase-auth-jxUAlChc.js";import"./vendor-firebase-CmWpKus1.js";import"./vendor-firebase-firestore-B5VfNmRa.js";import"./vendor-ui-CZ9GI7ht.js";import"./vendor-utils-BDfVuDdi.js";import"./studentService-CB48aVGH.js";import"./useStudentCourses-PUlFalpX.js";import"./periodService-CbBRYdfE.js";const p=({student:t})=>r.jsxs("div",{children:[r.jsx("h2",{className:"title",children:"Student Details"}),t&&r.jsx(n,{student:t}),t&&t.id&&r.jsx(d,{student:t})]}),P=()=>{const{loadStudent:t,student:s,loading:e}=m("Loading Student"),{id:o}=i();return a.useEffect(()=>{o&&!s&&t(o)},[o,s]),r.jsx(r.Fragment,{children:!e&&s&&r.jsx(p,{student:s})})};export{P as default};
