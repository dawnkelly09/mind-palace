"use strict";(()=>{var e={};e.id=258,e.ids=[258],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,n){return n in t?t[n]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,n)):"function"==typeof t&&"default"===n?t:void 0}}})},6625:(e,t,n)=>{n.r(t),n.d(t,{config:()=>f,default:()=>p,routeModule:()=>m});var r={};n.r(r),n.d(r,{default:()=>c});var o=n(1802),a=n(7153),i=n(6249);let l=require("fs");var s=n.n(l);let d=require("path");var u=n.n(d);async function c(e,t){if("POST"===e.method){let{title:n,type:r,description:o,imageUrl:a,linkUrl:i}=e.body;console.log({title:n,type:r,description:o,imageUrl:a,linkUrl:i});let l=`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${n}</title>
                <meta property="og:title" content="${n}" />
                <meta property="og:type" content="${r}" />
                <meta property="og:description" content="${o}" />
                <meta property="og:image" content="${a}" />
                <meta property="og:url" content="${i}" />
            </head>
            <body>
                <h1>${n}</h1>
                <p>${o}</p>
                <img src="${a}" alt="${n}" />
                <a href="${i}">
                    <span>Click for video</span>
                </a>
            </body>
            </html>
        `,d=u().join(process.cwd(),"public","ogFiles",`${n.replace(/ /g,"_")}.html`);s().writeFile(d,l,"utf8",e=>{if(e)return console.error("Failed to save HTML file",e),t.status(500).json({success:!1,message:"Failed to save HTML file.",error:e.message});t.status(200).json({success:!0,message:"HTML content generated and saved successfully.",filePath:`/ogFiles/${n.replace(/ /g,"_")}.html`})})}else t.setHeader("Allow",["POST"]),t.status(405).end(`Method ${e.method} Not Allowed`)}let p=(0,i.l)(r,"default"),f=(0,i.l)(r,"config"),m=new o.PagesAPIRouteModule({definition:{kind:a.x.PAGES_API,page:"/api/generate-og",pathname:"/api/generate-og",bundlePath:"",filename:""},userland:r})},7153:(e,t)=>{var n;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return n}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(n||(n={}))},1802:(e,t,n)=>{e.exports=n(145)}};var t=require("../../webpack-api-runtime.js");t.C(e);var n=t(t.s=6625);module.exports=n})();