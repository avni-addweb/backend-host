"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[139],{4133:function(e,t,o){o.r(t),o.d(t,{default:function(){return y}});var s=o(1828),a=o(3058),n=o(5223),r=o(4437),i=o(6035),l=o(4192),c=o(4380),u=o(6904),m=o(5294),d=o(303),p=o(5617),b=function(){var e=this,t=e._self._c;return t(i.Z,[t(m.Z,{attrs:{"no-gutters":""}},[t(r.Z,{staticClass:"mx-auto",attrs:{sm:"10"}},[t(a.Z,{staticClass:"pa-5"},[t(n.EB,[e._v("Add New Book ")]),t(l.Z),t(u.Z,{ref:"form",staticClass:"pa-5",attrs:{enctype:"multipart/form-data"},on:{submit:function(t){return t.preventDefault(),e.submitForm()}}},[t(d.Z,{attrs:{label:"Title",required:"","prepend-icon":"mdi-note",rules:e.rules},model:{value:e.book.title,callback:function(t){e.$set(e.book,"title",t)},expression:"book.title"}}),t(d.Z,{attrs:{label:"Category",required:"","prepend-icon":"mdi-view-list",rules:e.rules},model:{value:e.book.category,callback:function(t){e.$set(e.book,"category",t)},expression:"book.category"}}),t(p.Z,{attrs:{label:"Content",required:"","prepend-icon":"mdi-note-plus",rules:e.rules},model:{value:e.book.content,callback:function(t){e.$set(e.book,"content",t)},expression:"book.content"}}),t(c.Z,{attrs:{rules:e.rules,"show-size":"",counter:"",multiple:"",label:"Select Image"},on:{change:e.selectFile}}),t(s.Z,{staticClass:"mt-3 white--text",attrs:{type:"submit",color:"#0F52BA"}},[e._v(" Add Book ")])],1)],1)],1)],1)],1)},k=[],f=(o(7658),o(8513)),h={name:"AddBook",data(){return{rules:[e=>!!e||"This is field is required"],book:{title:"",category:"",content:"",image:""},image:" "}},methods:{selectFile(e){this.image=e[0]},async submitForm(){const e=new FormData;if(e.append("image",this.image),e.append("title",this.book.title),e.append("category",this.book.category),e.append("content",this.book.content),this.$refs.form.validate()){const t=await f.Z.addBook(e);this.$router.push({name:"home",params:{message:t.message}})}}}},g=h,Z=o(1001),v=(0,Z.Z)(g,b,k,!1,null,null,null),y=v.exports}}]);
//# sourceMappingURL=addbook.3883f671.js.map