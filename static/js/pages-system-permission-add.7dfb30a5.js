(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-system-permission-add"],{"0b0d":function(t,n,e){"use strict";e.r(n);var i=e("66b8"),a=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);n["default"]=a.a},"13f0":function(t,n,e){"use strict";e.r(n);var i=e("43ae"),a=e("0b0d");for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);var r,s=e("f0c5"),o=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);n["default"]=o.exports},"1ada":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={permission_id:{rules:[{required:!0},{format:"string"}],label:"权限标识"},permission_name:{rules:[{required:!0},{format:"string"}],label:"权限名称"},comment:{rules:[{format:"string"}],label:"备注"}};n.default=i},"43ae":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return i}));var i={uniForms:e("71e4").default,uniFormsItem:e("bed4").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"uni-container"},[e("uni-forms",{ref:"form",attrs:{validateTrigger:"bind",rules:t.rules},on:{submit:function(n){arguments[0]=n=t.$handleEvent(n),t.submit.apply(void 0,arguments)}}},[e("uni-forms-item",{attrs:{name:"permission_id",label:"权限标识"}},[e("v-uni-input",{staticClass:"uni-input-border",on:{input:function(n){arguments[0]=n=t.$handleEvent(n),t.binddata("permission_id",n.detail.value)}}})],1),e("uni-forms-item",{attrs:{name:"permission_name",label:"权限名称"}},[e("v-uni-input",{staticClass:"uni-input-border",on:{input:function(n){arguments[0]=n=t.$handleEvent(n),t.binddata("permission_name",n.detail.value)}}})],1),e("uni-forms-item",{attrs:{name:"comment",label:"备注"}},[e("v-uni-textarea",{staticClass:"uni-textarea-border",on:{input:function(n){arguments[0]=n=t.$handleEvent(n),t.binddata("comment",n.detail.value)}}})],1),e("v-uni-view",{staticClass:"uni-button-group"},[e("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.submitForm.apply(void 0,arguments)}}},[t._v("提交")]),e("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[e("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"}},[t._v("返回")])],1)],1)],1)],1)},u=[]},"66b8":function(t,n,e){"use strict";(function(t){var i=e("4ea4");e("caad"),e("d3b7"),e("2532"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("5530")),u=i(e("1ada")),r=t.database(),s=(r.command,"uni-id-permissions");function o(t){var n={};for(var e in u.default)t.includes(e)&&(n[e]=u.default[e]);return n}var l={data:function(){return{formData:{permission_id:"",permission_name:"",comment:""},rules:(0,a.default)({},o(["permission_id","permission_name","comment"]))}},methods:{submitForm:function(){this.$refs.form.submit()},submit:function(t){var n=this,e=t.detail,i=e.value,a=e.errors;a||(uni.showLoading({title:"提交中...",mask:!0}),r.collection(s).add(i).then((function(t){uni.showToast({title:"新增成功"}),n.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()})))}}};n.default=l}).call(this,e("a9ff")["default"])}}]);