import{e as p,j as a,D as P,L as f}from"./index-Cui4C6id.js";import{r as i,u as g}from"./vendor-react-BWjxQFbR.js";import{f as x,a as D,d as E,u as j}from"./periodService-B8qW6QfF.js";import"./vendor-firebase-CpkMzyVB.js";import"./vendor-ui-CZ9GI7ht.js";import"./vendor-utils-BDfVuDdi.js";const y=()=>{const[n,d]=i.useState([]),[o,s]=i.useState(!0),[l,t]=i.useState(null),r=async()=>{try{s(!0);const e=await x();return d(e),e}catch{return t("Error fetching periods"),[]}finally{s(!1)}};return i.useEffect(()=>{r()},[]),{periods:n,loadPeriods:r,loading:o,error:l,handleAddPeriod:async e=>{try{await D(e),r()}catch{t("Error adding period")}},handleDeletePeriod:async e=>{try{await E(e),r()}catch{t("Error deleting period")}},handleUpdatePeriod:async(e,u)=>{try{await j(e,u),r()}catch{t("Error updating period")}}}},S=()=>{const{periods:n,loading:d,error:o,handleAddPeriod:s,handleDeletePeriod:l,handleUpdatePeriod:t}=y(),[,r]=p("selectPeriod",null),m=g(),h=c=>{m(`/period/${c.id}/courses`),r(c)};return a.jsxs(a.Fragment,{children:[a.jsx(P,{title:"Manage Academic Periods",fields:[{name:"code",placeholder:"Code of Period",label:"Code"},{name:"name",placeholder:"Name of Period",label:"Name",size:20},{name:"startDate",placeholder:"Start Date"},{name:"endDate",placeholder:"End Date"},{name:"status",placeholder:"Status"}],items:n,handlers:{onItemAdded:s,onItemDeleted:l,onItemUpdated:t,onSelect:r,onView:h},initialFormData:null,viewLinks:[{label:"Courses",format:"/period/:id/courses"}],loading:d,showForm:!1}),d&&a.jsx("div",{className:"loading",children:a.jsx(f,{})})," ",o&&a.jsx("div",{className:"error",children:o})," "]})},b=()=>a.jsx("div",{children:a.jsx(S,{})});export{b as default};
