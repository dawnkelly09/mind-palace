(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5979:function(e,t,l){Promise.resolve().then(l.bind(l,948)),Promise.resolve().then(l.t.bind(l,8173,23)),Promise.resolve().then(l.t.bind(l,231,23)),Promise.resolve().then(l.bind(l,4429))},948:function(e,t,l){"use strict";l.r(t);var a=l(7437),i=l(2265);t.default=function(e){let{onSubmit:t}=e,[l,r]=(0,i.useState)(""),[n,s]=(0,i.useState)(""),[o,u]=(0,i.useState)(""),[h,d]=(0,i.useState)(""),[c,g]=(0,i.useState)(""),p=async e=>{e.preventDefault();let t={title:e.target.title.value,type:e.target.type.value,imageUrl:e.target.imageUrl.value,description:e.target.description.value,linkUrl:e.target.linkUrl.value};console.log(t);let l=await fetch("/api/generate-og",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});console.log((await l.json()).message),r(""),s(""),u(""),d(""),g("")};return(0,a.jsxs)("form",{onSubmit:p,children:[(0,a.jsx)("h1",{children:"OG Maker"}),(0,a.jsx)("h2",{children:"Use this form to create og ready html files"}),(0,a.jsx)("label",{htmlFor:"title",children:"Title: "}),(0,a.jsx)("input",{type:"text",id:"title",name:"title",value:l,onChange:e=>r(e.target.value),placeholder:"Title",required:!0}),(0,a.jsx)("label",{htmlFor:"type",children:"Type: "}),(0,a.jsx)("input",{type:"text",id:"type",name:"type",value:n,onChange:e=>s(e.target.value),placeholder:"Type",required:!0}),(0,a.jsx)("label",{htmlFor:"imageUrl",children:"Image URL: "}),(0,a.jsx)("input",{type:"text",id:"imageUrl",name:"imageUrl",value:o,onChange:e=>u(e.target.value),placeholder:"Image URL",required:!0}),(0,a.jsx)("label",{htmlFor:"description",children:"Description: "}),(0,a.jsx)("textarea",{value:h,id:"description",name:"description",onChange:e=>d(e.target.value),placeholder:"Description",required:!0}),(0,a.jsx)("label",{htmlFor:"linkUrl",children:"URL: "}),(0,a.jsx)("input",{type:"text",id:"linkUrl",name:"linkUrl",value:c,onChange:e=>g(e.target.value),placeholder:"Link URL",required:!0}),(0,a.jsx)("button",{type:"submit",children:"Create OG Content"})]})}},4429:function(e,t,l){"use strict";l.r(t),t.default={src:"/_next/static/media/bos-web-cover.0ad2587e.png",height:754,width:1598,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAbElEQVR42hXMWw5EMBQA0O56kklmP0NYBT/CAgg+hBDaaqu3Dy2pOAs4iHK+C26tEwBgTAjB+ev0HhHGmDhAaaVN07b/KB7GaaMcUUKlBHs6rc08L0maFmX1+f5QmWcEY3fd8p0sgFo3XHf9AzMgVl40j9dMAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4}}},function(e){e.O(0,[30,971,23,744],function(){return e(e.s=5979)}),_N_E=e.O()}]);