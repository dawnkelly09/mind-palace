(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1980:function(e,t,l){Promise.resolve().then(l.bind(l,948)),Promise.resolve().then(l.t.bind(l,8173,23)),Promise.resolve().then(l.t.bind(l,231,23))},948:function(e,t,l){"use strict";l.r(t);var r=l(7437),a=l(2265);t.default=function(e){let{onSubmit:t}=e,[l,i]=(0,a.useState)(""),[n,o]=(0,a.useState)(""),[s,u]=(0,a.useState)(""),[d,h]=(0,a.useState)(""),[p,c]=(0,a.useState)(""),g=async e=>{e.preventDefault();let t={title:e.target.title.value,type:e.target.type.value,imageUrl:e.target.imageUrl.value,description:e.target.description.value,linkUrl:e.target.linkUrl.value};console.log(t);let l=await fetch("/api/generate-og",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});console.log((await l.json()).message),i(""),o(""),u(""),h(""),c("")};return(0,r.jsxs)("form",{onSubmit:g,children:[(0,r.jsx)("h1",{children:"OG Maker"}),(0,r.jsx)("h2",{children:"Use this form to create og ready html files"}),(0,r.jsx)("label",{htmlFor:"title",children:"Title: "}),(0,r.jsx)("input",{type:"text",id:"title",name:"title",value:l,onChange:e=>i(e.target.value),placeholder:"Title",required:!0}),(0,r.jsx)("label",{htmlFor:"type",children:"Type: "}),(0,r.jsx)("input",{type:"text",id:"type",name:"type",value:n,onChange:e=>o(e.target.value),placeholder:"Type",required:!0}),(0,r.jsx)("label",{htmlFor:"imageUrl",children:"Image URL: "}),(0,r.jsx)("input",{type:"text",id:"imageUrl",name:"imageUrl",value:s,onChange:e=>u(e.target.value),placeholder:"Image URL",required:!0}),(0,r.jsx)("label",{htmlFor:"description",children:"Description: "}),(0,r.jsx)("textarea",{value:d,id:"description",name:"description",onChange:e=>h(e.target.value),placeholder:"Description",required:!0}),(0,r.jsx)("label",{htmlFor:"linkUrl",children:"URL: "}),(0,r.jsx)("input",{type:"text",id:"linkUrl",name:"linkUrl",value:p,onChange:e=>c(e.target.value),placeholder:"Link URL",required:!0}),(0,r.jsx)("button",{type:"submit",children:"Create OG Content"})]})}}},function(e){e.O(0,[30,971,23,744],function(){return e(e.s=1980)}),_N_E=e.O()}]);