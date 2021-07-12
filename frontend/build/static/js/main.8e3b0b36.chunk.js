(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{64:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(25),r=n.n(s),i=n(9),l=n.n(i),o=n(6),u=n(13),d=n(3),j=n(5),b=n(2),h=(n(36),n(26)),m=n(27),O=n(28),v=n.n(O).a.create({baseURL:"https://ap-south-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/restaurant-reviews-pjloo/service/restaurants/incoming_webhook/",headers:{"Content-Type":"application/json"}}),p=new(function(){function e(){Object(h.a)(this,e)}return Object(m.a)(e,[{key:"getAll",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return v.get("restaurants?page=".concat(e))}},{key:"get",value:function(e){return v.get("restaurant?id=".concat(e))}},{key:"find",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"name",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return v.get("restaurants?".concat(t,"=").concat(e,"&page=").concat(n))}},{key:"createReview",value:function(e){return v.post("review-new",e)}},{key:"updateReview",value:function(e){return v.put("review-edit",e)}},{key:"deleteReview",value:function(e,t){return v.delete("review-delete?id=".concat(e),{data:{user_id:t}})}},{key:"getCuisines",value:function(e){return v.get("cuisines")}}]),e}()),x=n(0),f=function(e){var t="",n=!1;e.location.state&&e.location.state.currentReview&&(n=!0,t=e.location.state.currentReview.text);var a=Object(c.useState)(t),s=Object(d.a)(a,2),r=s[0],i=s[1],l=Object(c.useState)(!1),o=Object(d.a)(l,2),u=o[0],b=o[1];return Object(x.jsx)("div",{children:e.user?Object(x.jsx)("div",{className:"submit-form",children:u?Object(x.jsxs)("div",{children:[Object(x.jsx)("h4",{children:"You submitted successfully!"}),Object(x.jsx)(j.b,{to:"/restaurants/"+e.match.params.id,className:"btn btn-success",children:"Back to Restaurant"})]}):Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"description",children:n?"Edit":"Create"}),Object(x.jsx)("input",{type:"text",className:"form-control",id:"text",required:!0,value:r,onChange:function(e){i(e.target.value)},name:"text"})]}),Object(x.jsx)("button",{onClick:function(){var t={text:r,name:e.user.name,user_id:e.user.id,restaurant_id:e.match.params.id};n?(t.review_id=e.location.state.currentReview._id,p.updateReview(t).then((function(e){b(!0),console.log(e.data)})).catch((function(e){console.log(e)}))):p.createReview(t).then((function(e){b(!0),console.log(e.data)})).catch((function(e){console.log(e)}))},className:"btn btn-success",children:"Submit"})]})}):Object(x.jsx)("div",{children:"Please Login."})})},g=n(10),N=function(e){var t=Object(c.useState)({name:"",id:""}),n=Object(d.a)(t,2),a=n[0],s=n[1],r=function(e){var t=e.target,n=t.name,c=t.value;s(Object(o.a)(Object(o.a)({},a),{},Object(g.a)({},n,c)))};return Object(x.jsxs)("div",{className:"submit-form",children:[Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"user",children:"Username"}),Object(x.jsx)("input",{type:"text",className:"form-control",id:"name",required:!0,value:a.name,onChange:r,name:"name"})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"id",children:"ID"}),Object(x.jsx)("input",{type:"text",className:"form-control",id:"id",required:!0,value:a.id,onChange:r,name:"id"})]}),Object(x.jsx)("button",{onClick:function(){e.login(a),e.history.push("/")},className:"btn btn-success",children:"Login"})]})},w=function(e){var t=Object(c.useState)({id:null,name:"",address:{},cuisine:"",reviews:[]}),n=Object(d.a)(t,2),a=n[0],s=n[1];Object(c.useEffect)((function(){var t;t=e.match.params.id,p.get(t).then((function(e){s(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))}),[e.match.params.id]);return Object(x.jsx)("div",{children:a?Object(x.jsxs)("div",{children:[Object(x.jsx)("h5",{children:a.name}),Object(x.jsxs)("p",{children:[Object(x.jsx)("strong",{children:"Cuisine : "}),a.cuisine," ",Object(x.jsx)("br",{}),Object(x.jsx)("strong",{children:"Address : "}),a.address.building," ",a.address.street,", ",a.address.zipcode]}),Object(x.jsx)(j.b,{to:"/restaurants/"+e.match.params.id+"/review",className:"btn btn-primary",children:"Add Review"}),Object(x.jsx)("h4",{children:"Review"}),Object(x.jsx)("div",{className:"row",children:a.reviews.length>0?a.reviews.map((function(t,n){return Object(x.jsx)("div",{className:"card",children:Object(x.jsxs)("div",{className:"card-body",children:[Object(x.jsxs)("p",{className:"card-text",children:[t.text,Object(x.jsx)("br",{}),Object(x.jsx)("strong",{children:"User : "}),t.name,Object(x.jsx)("br",{}),Object(x.jsx)("strong",{children:"Date : "}),t.date]}),e.user&&e.user.id===t.user_id&&Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("button",{onClick:function(){return function(t,n){p.deleteReview(t,e.user.id).then((function(e){s((function(e){return e.reviews.splice(n,1),Object(o.a)({},e)}))})).catch((function(e){console.log(e)}))}(t._id,n)},className:"btn btn-primary btn-sm col-md-5 mx-1 mb-1",children:"Delete Review"}),Object(x.jsx)(j.b,{to:{pathname:"/restaurants/"+e.match.params.id+"/review",state:{currentReview:t}},className:"btn btn-primary btn-sm col-md-5 mx-1 mb-1",children:"Edit Review"})]})]})})})):Object(x.jsx)("div",{className:"col-sm-4",children:Object(x.jsx)("p",{children:"No reviews yet."})})})]}):Object(x.jsxs)("div",{children:[Object(x.jsx)("br",{}),Object(x.jsx)("p",{children:"No sestaurant selected."})]})})},y=function(e){var t=Object(c.useState)([]),n=Object(d.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(""),i=Object(d.a)(r,2),l=i[0],o=i[1],u=Object(c.useState)(""),b=Object(d.a)(u,2),h=b[0],m=b[1],O=Object(c.useState)(""),v=Object(d.a)(O,2),f=v[0],g=v[1],N=Object(c.useState)(["All Cuisines"]),w=Object(d.a)(N,2),y=w[0],k=w[1];Object(c.useEffect)((function(){R(),C()}),[]);var C=function(){p.getCuisines().then((function(e){console.log(e.data),k(["All Cuisines"].concat(e.data))})).catch((function(e){console.log(e)}))},R=function(){p.getAll().then((function(e){console.log(e.data),s(e.data.restaurants)})).catch((function(e){console.log(e)}))},S=function(e,t){p.find(e,t).then((function(e){console.log(e.data),s(e.data.restaurants)})).catch((function(e){console.log(e)}))};return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"row pb-1",children:[Object(x.jsx)("div",{className:"input-group col-lg-4",children:Object(x.jsx)("input",{type:"text",className:"form-control",placeholder:"Search by name",value:l,onChange:function(e){var t=e.target.value;o(t)}})}),Object(x.jsx)("div",{className:"input-group-append",children:Object(x.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){S(l,"name")},children:"Search"})}),Object(x.jsx)("div",{className:"input-group col-lg-4",children:Object(x.jsx)("input",{type:"text",className:"form-control",placeholder:"Search by zip",value:h,onChange:function(e){var t=e.target.value;m(t)}})}),Object(x.jsx)("div",{className:"input-group-append",children:Object(x.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){S(h,"zipcode")},children:"Search"})}),Object(x.jsxs)("div",{className:"input-group col-lg-4",children:[Object(x.jsx)("select",{onChange:function(e){var t=e.target.value;g(t)},children:y.map((function(e){return Object(x.jsx)("option",{value:e,children:e.substr(0,20)})}))}),Object(x.jsx)("div",{className:"input-group-append",children:Object(x.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){"All Cuisines"===f?R():S(f,"cuisine")},children:"Search"})})]})]}),Object(x.jsx)("div",{className:"row",children:a.map((function(e){var t="".concat(e.address.building," ").concat(e.address.street,", ").concat(e.address.zipcode);return Object(x.jsx)("div",{className:"col-lg-4 pb-1",children:Object(x.jsx)("div",{className:"card",children:Object(x.jsxs)("div",{className:"card-body",children:[Object(x.jsx)("h5",{className:"card-title",children:e.name}),Object(x.jsxs)("p",{className:"card-text",children:[Object(x.jsx)("strong",{children:"Cuisine : "}),e.cuisine,Object(x.jsx)("br",{}),Object(x.jsx)("strong",{children:"Address : "}),t]}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)(j.b,{to:"/restaurants/"+e._id,className:"btn btn-primary col-lg-5 mx-1 mb-1",children:"View Reviews"}),Object(x.jsx)("a",{target:"_blank",href:"https://www.google.com/maps/place/"+t,className:"btn btn-primary col-lg-5 mx-1 mb-1",rel:"noreferrer",children:"View Map"})]})]})})})}))})]})};var k=function(){var e=a.a.useState(null),t=Object(d.a)(e,2),n=t[0],c=t[1];function s(){return r.apply(this,arguments)}function r(){return(r=Object(u.a)(l.a.mark((function e(){var t,n=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=n.length>0&&void 0!==n[0]?n[0]:null,c(t);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(){return(i=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(null);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(x.jsxs)("div",{children:[Object(x.jsxs)("nav",{className:"navbar navbar-expand navbar-dark bg-dark",children:[Object(x.jsx)("a",{href:"/restaurants",className:"navbar-brand",children:"Restuarant Reviews"}),Object(x.jsxs)("div",{className:"navbar-nav mr-auto",children:[Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(j.b,{to:"/restaurants",className:"nav-link",children:"Restaurants"})}),Object(x.jsx)("li",{className:"nav-item",children:n?Object(x.jsxs)("button",{onClick:function(){return i.apply(this,arguments)},className:"nav-link btn",style:{cursor:"pointer"},children:["Logout ",n.name]}):Object(x.jsx)(j.b,{to:"/login",className:"nav-link",children:"Login"})})]})]}),Object(x.jsx)("div",{className:"container mt-3",children:Object(x.jsxs)(b.c,{children:[Object(x.jsx)(b.a,{exact:!0,path:["/","/restaurants"],component:y}),Object(x.jsx)(b.a,{path:"/restaurants/:id/review",render:function(e){return Object(x.jsx)(f,Object(o.a)(Object(o.a)({},e),{},{user:n}))}}),Object(x.jsx)(b.a,{path:"/restaurants/:id",render:function(e){return Object(x.jsx)(w,Object(o.a)(Object(o.a)({},e),{},{user:n}))}}),Object(x.jsx)(b.a,{path:"/login",render:function(e){return Object(x.jsx)(N,Object(o.a)(Object(o.a)({},e),{},{login:s}))}})]})})]})};r.a.render(Object(x.jsx)(j.a,{children:Object(x.jsx)(k,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.8e3b0b36.chunk.js.map