import{c as j,e as b,j as t,D as A}from"./index-BItWtqw2.js";import{r as l,u as F}from"./vendor-react-BWjxQFbR.js";import{u as I}from"./useStudents-9kVxbR19.js";import{S as N,P as v}from"./StudentPeriodsManager-C66VrPIb.js";import"./vendor-firebase-IMjs4EV5.js";import"./vendor-ui-CZ9GI7ht.js";import"./vendor-utils-BDfVuDdi.js";import"./studentService-gnMmYG-n.js";import"./useStudentCourses-C1L-eXxW.js";import"./periodService-3cjU1pu1.js";const w=()=>{const{setIsLoading:o}=j(),{students:r,loading:a,handleAddStudent:m,handleAddStudents:u,handleRemoveStudent:c,handleUpdateStudent:p}=I("Loading Student"),[n,s]=b("selectedStudent",null),[i,d]=l.useState(""),S=F(),f=[{name:"fullName",placeholder:"Full Name",view:!0,size:20},{name:"identificationNumber",placeholder:"Identification Number",size:15},{name:"email",placeholder:"Email Address",size:20}];l.useEffect(()=>{o(a)},[a,o]);const h=e=>{S(`/students/${e.id}/courses`),s(e)},g=e=>{e?(d("slide-in-elliptic-bottom-fwd"),s(e)):(d("slide-out-elliptic-bottom-bck"),setTimeout(()=>{s(null),d("")},500))},x=async e=>{e&&(await c(e),s(null))};return t.jsxs(t.Fragment,{children:[t.jsx("h1",{className:"title",children:"Manage Student"}),(n||i==="slide-out-top")&&t.jsxs("div",{className:`animated-element ${i}`,children:[t.jsx(N,{student:n}),(n==null?void 0:n.id)&&t.jsx(v,{student:n})]}),t.jsx(A,{fields:f,items:r,handlers:{onItemAdded:m,onItemsAdded:u,onItemDeleted:x,onItemUpdated:p,onView:h,onSelect:g},initialFormData:n,ableFilter:!0,showForm:!1,ableForm:!0,ableImport:!0,clearFormAfterAdd:!0,loading:a})]})},$=()=>t.jsx(w,{});export{$ as default};
