(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0032f619"],{5248:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"c",(function(){return r})),a.d(e,"e",(function(){return n})),a.d(e,"b",(function(){return o})),a.d(e,"d",(function(){return l}));var i=a("1bab");function s(t){return Object(i["a"])({url:"/items",method:"post",data:t})}function r(t){return Object(i["a"])({url:"/items/"+t})}function n(t,e){return Object(i["a"])({url:"/items/"+t,method:"put",data:e})}function o(t){return Object(i["a"])({url:"/items/"+t,method:"delete"})}function l(t){return Object(i["a"])({url:"/items",params:t})}},"5fc7":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",[t._v(t._s(t.text))])],1)},s=[],r={name:"Breadcrumb",props:{text:{type:String,default:""}}},n=r,o=a("4ac2"),l=Object(o["a"])(n,i,s,!1,null,"403b8861",null);e["a"]=l.exports},"7a92":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("breadcrumb",{attrs:{text:"装备列表"}}),a("el-card",[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.addItemClick}},[t._v("添加装备")]),a("el-table",{attrs:{data:t.itemList,border:"",stripe:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v(t._s(e.row.desc))]),a("div",{staticClass:"item-detail"},[t._v(t._s(e.row.detail))])]}}])}),a("el-table-column",{attrs:{type:"index",label:"序号"}}),a("el-table-column",{attrs:{label:"装备名称",prop:"name"}}),a("el-table-column",{attrs:{label:"图标"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{staticClass:"item-icon",attrs:{src:t.row.icon}})]}}])}),a("el-table-column",{attrs:{label:"星级",prop:"star"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-edit"},on:{click:function(a){return t.edit(e.row)}}},[t._v("编辑")]),a("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete"},on:{click:function(a){return t._delete(e.row)}}},[t._v("删除")])]}}])})],1),a("el-pagination",{attrs:{"current-page":t.pageParams.pagenum,"page-sizes":[5,8,10,15],"page-size":t.pageParams.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{title:this.formData._id?"编辑装备":"添加装备",visible:t.dialogVisible,width:"50%"},on:{"update:visible":function(e){t.dialogVisible=e},closed:t.dialogClose}},[a("el-form",{attrs:{"label-width":"80px"}},[a("el-form-item",{attrs:{label:"物品名称"}},[a("el-input",{model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),a("el-form-item",{attrs:{label:"物品图标"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.action+"item",headers:t.token,"show-file-list":!1,"on-success":function(e){return t.$set(t.formData,"icon",e.url)}}},[t.formData.icon?a("img",{staticClass:"avatar",attrs:{src:t.formData.icon}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("el-form-item",{attrs:{label:"星级"}},[a("el-rate",{attrs:{"show-score":"",max:3},model:{value:t.formData.star,callback:function(e){t.$set(t.formData,"star",e)},expression:"formData.star"}})],1),a("el-form-item",{attrs:{label:"物品简介"}},[a("el-input",{model:{value:t.formData.desc,callback:function(e){t.$set(t.formData,"desc",e)},expression:"formData.desc"}})],1),a("el-form-item",{attrs:{label:"物品详情"}},[a("el-input",{model:{value:t.formData.detail,callback:function(e){t.$set(t.formData,"detail",e)},expression:"formData.detail"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.ok}},[t._v("确 定")])],1)],1)],1)},s=[],r=a("5248"),n=a("aff8"),o=a("5fc7"),l={name:"ItemList",mixins:[n["a"]],data(){return{itemList:[],dialogVisible:!1,formData:{},id:"",pageParams:{pagenum:1,pagesize:5},total:0}},components:{Breadcrumb:o["a"]},methods:{async getItemList(){const t=await Object(r["d"])(this.pageParams);this.total=t.data.total,this.itemList=t.data.data},async edit(t){this.id=t._id;const e=await Object(r["c"])(t._id);e&&(e.data.star=Number(e.data.star),this.formData=e.data,this.dialogVisible=!0)},async _delete(t){try{await this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});const e=await Object(r["b"])(t._id);if(!e)return;this.$message.success(e.data.message),this.getItemList()}catch(e){this.$message.info("已取消删除")}},async addItemClick(){this.dialogVisible=!0},async ok(){if(this.formData._id){const t=await Object(r["e"])(this.id,this.formData);if(!t)return this.$message.error("装备编辑失败");this.$message.success("装备编辑成功"),this.getItemList(),this.dialogVisible=!1}else{const t=await Object(r["a"])(this.formData);if(!t)return this.$message.error("装备添加失败");this.$message.success("装备添加成功"),this.getItemList(),this.dialogVisible=!1}},dialogClose(){this.formData={}},handleSizeChange(t){this.pageParams.pagesize=t,this.getItemList()},handleCurrentChange(t){this.pageParams.pagenum=t,this.getItemList()}},created(){this.getItemList()}},c=l,u=(a("cb3b"),a("4ac2")),m=Object(u["a"])(c,i,s,!1,null,"c36f947e",null);e["default"]=m.exports},9332:function(t,e,a){},aff8:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var i=a("82ae"),s=a.n(i),r="https://huazai.loca.lt";s.a.get("./url.txt").then((function(t){r=t.data})).catch(t=>{console.error(t)});const n={computed:{action(){return Object({NODE_ENV:"production",BASE_URL:"/wzry/back/"}).VUE_APP_API_URL_UPLOAD||r+"/admin/api/upload/"},token(){const t=sessionStorage.getItem("token");return t?{Authorization:t}:{}}},methods:{uploadErrHandler(t){401===t.status&&(this.$message.error("请先登录"),router.push("/login"))}}}},cb3b:function(t,e,a){"use strict";a("9332")}}]);
//# sourceMappingURL=chunk-0032f619.089320ea.js.map