(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23dba6ab"],{"12c6":function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return s})),a.d(t,"e",(function(){return i})),a.d(t,"b",(function(){return o})),a.d(t,"d",(function(){return n}));var l=a("1bab");function r(e){return Object(l["a"])({url:"/heros",method:"post",data:e})}function s(e){return Object(l["a"])({url:"/heros/"+e})}function i(e,t){return Object(l["a"])({url:"/heros/"+e,method:"put",data:t})}function o(e){return Object(l["a"])({url:"/heros/"+e,method:"delete"})}function n(e){return Object(l["a"])({url:"/heros",params:e})}},"395c":function(e,t,a){"use strict";a("b389")},5248:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return s})),a.d(t,"e",(function(){return i})),a.d(t,"b",(function(){return o})),a.d(t,"d",(function(){return n}));var l=a("1bab");function r(e){return Object(l["a"])({url:"/items",method:"post",data:e})}function s(e){return Object(l["a"])({url:"/items/"+e})}function i(e,t){return Object(l["a"])({url:"/items/"+e,method:"put",data:t})}function o(e){return Object(l["a"])({url:"/items/"+e,method:"delete"})}function n(e){return Object(l["a"])({url:"/items",params:e})}},"5fc7":function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",[e._v(e._s(e.text))])],1)},r=[],s={name:"Breadcrumb",props:{text:{type:String,default:""}}},i=s,o=a("4ac2"),n=Object(o["a"])(i,l,r,!1,null,"403b8861",null);t["a"]=n.exports},aff8:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var l=a("82ae"),r=a.n(l),s="https://huazai.loca.lt";r.a.get("./url.txt").then((function(e){s=e.data})).catch(e=>{console.error(e)});const i={computed:{action(){return Object({NODE_ENV:"production",BASE_URL:"/wzry/back/"}).VUE_APP_API_URL_UPLOAD||s+"/admin/api/upload/"},token(){const e=sessionStorage.getItem("token");return e?{Authorization:e}:{}}},methods:{uploadErrHandler(e){401===e.status&&(this.$message.error("请先登录"),router.push("/login"))}}}},b389:function(e,t,a){},c80a:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("breadcrumb",{attrs:{text:e.id?"编辑英雄":"添加英雄"}}),a("el-card",[a("el-form",{attrs:{"label-width":"100px"}},[a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"基本信息"}},[a("el-form-item",{attrs:{label:"英雄名称"}},[a("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),a("el-form-item",{attrs:{label:"英雄称号"}},[a("el-input",{model:{value:e.model.title,callback:function(t){e.$set(e.model,"title",t)},expression:"model.title"}})],1),e.heroCateList?a("el-form-item",{attrs:{label:"英雄定位"}},[a("el-select",{attrs:{placeholder:"请选择英雄分类",multiple:""},model:{value:e.model.cate,callback:function(t){e.$set(e.model,"cate",t)},expression:"model.cate"}},e._l(e.heroCateList,(function(e){return a("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1):e._e(),a("el-form-item",{attrs:{label:"难度"}},[a("el-rate",{attrs:{"show-score":"",max:10},model:{value:e.model.scores.difficulty,callback:function(t){e.$set(e.model.scores,"difficulty",t)},expression:"model.scores.difficulty"}})],1),a("el-form-item",{attrs:{label:"技能"}},[a("el-rate",{attrs:{"show-score":"",max:10},model:{value:e.model.scores.skill,callback:function(t){e.$set(e.model.scores,"skill",t)},expression:"model.scores.skill"}})],1),a("el-form-item",{attrs:{label:"攻击"}},[a("el-rate",{attrs:{"show-score":"",max:10},model:{value:e.model.scores.attack,callback:function(t){e.$set(e.model.scores,"attack",t)},expression:"model.scores.attack"}})],1),a("el-form-item",{attrs:{label:"生存"}},[a("el-rate",{attrs:{"show-score":"",max:10},model:{value:e.model.scores.survive,callback:function(t){e.$set(e.model.scores,"survive",t)},expression:"model.scores.survive"}})],1),a("el-form-item",{attrs:{label:"英雄头像"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.action+"hero",headers:e.token,"show-file-list":!1,"on-success":function(t){return e.$set(e.model,"avatar",t.url)},"on-error":e.uploadErrHandler}},[e.model.avatar?a("img",{staticClass:"avatar",attrs:{src:e.model.avatar}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("el-form-item",{attrs:{label:"背景图片"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.action+"hero",headers:e.token,"show-file-list":!1,"on-success":function(t){return e.$set(e.model,"banner",t.url)},"on-error":e.uploadErrHandler}},[e.model.banner?a("img",{staticClass:"banner",attrs:{src:e.model.banner}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("el-form-item",{attrs:{label:"图文介绍"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.action+"hero",headers:e.token,"show-file-list":!1,"on-success":function(t){return e.$set(e.model,"photo",t.url)},"on-error":e.uploadErrHandler}},[e.model.photo?a("img",{staticClass:"banner",attrs:{src:e.model.photo}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1),a("el-tab-pane",{attrs:{label:"英雄皮肤"}},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.addSkins}},[e._v("+ 添加皮肤")]),a("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{gutter:20,type:"flex"}},e._l(e.model.skins,(function(t,l){return a("el-col",{key:l,attrs:{span:12}},[a("el-card",[a("el-tag",[e._v("皮肤"+e._s(l+1))]),a("el-form-item",{attrs:{label:"皮肤名称","label-width":"80px"}},[a("el-input",{model:{value:t.name,callback:function(a){e.$set(t,"name",a)},expression:"item.name"}})],1),a("el-form-item",{attrs:{label:"皮肤图片","label-width":"80px"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.action+"skin",headers:e.token,"show-file-list":!1,"on-success":function(a){return e.$set(t,"img",a.url)},"on-error":e.uploadErrHandler}},[t.img?a("img",{staticClass:"banner",attrs:{src:t.img}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.deleteSkin(l)}}},[e._v("删除皮肤")])],1)],1)})),1)],1),a("el-tab-pane",{attrs:{label:"介绍视频"}},[a("el-form-item",{attrs:{label:"标题"}},[a("el-input",{attrs:{clearable:""},model:{value:e.model.shipin.title,callback:function(t){e.$set(e.model.shipin,"title",t)},expression:"model.shipin.title"}})],1),a("el-form-item",{attrs:{label:"视频"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.action+"introduction",headers:e.token,"show-file-list":!1,"on-success":function(t){return e.$set(e.model.shipin,"video",t.url)},"on-error":e.uploadErrHandler,"before-upload":e.beforeUpload}},[e.model.shipin.video?a("video",{staticClass:"banner",attrs:{controls:"",src:e.model.shipin.video}}):a("i",{staticClass:"el-icon-upload avatar-uploader-icon"})])],1),a("el-form-item",{attrs:{label:"投稿"}},[a("el-input",{attrs:{clearable:""},model:{value:e.model.shipin.submit,callback:function(t){e.$set(e.model.shipin,"submit",t)},expression:"model.shipin.submit"}})],1),a("el-form-item",{attrs:{label:"粉丝"}},[a("el-input",{attrs:{clearable:""},model:{value:e.model.shipin.fan,callback:function(t){e.$set(e.model.shipin,"fan",t)},expression:"model.shipin.fan"}})],1),a("el-form-item",{attrs:{label:"观看次数"}},[a("el-input",{attrs:{clearable:""},model:{value:e.model.shipin.view,callback:function(t){e.$set(e.model.shipin,"view",t)},expression:"model.shipin.view"}})],1)],1),a("el-tab-pane",{attrs:{label:"出装推荐"}},[a("el-form-item",{attrs:{label:"顺风出装"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择顺风出装",multiple:""},model:{value:e.model.downWind.equipment,callback:function(t){e.$set(e.model.downWind,"equipment",t)},expression:"model.downWind.equipment"}},e._l(e.itemList,(function(e){return a("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),a("el-form-item",{attrs:{label:"顺风技巧"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.model.downWind.tips,callback:function(t){e.$set(e.model.downWind,"tips",t)},expression:"model.downWind.tips"}})],1),a("el-form-item",{attrs:{label:"逆风出装"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择逆风出装",multiple:""},model:{value:e.model.upWind.equipment,callback:function(t){e.$set(e.model.upWind,"equipment",t)},expression:"model.upWind.equipment"}},e._l(e.itemList,(function(e){return a("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),a("el-form-item",{attrs:{label:"逆风技巧"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.model.upWind.tips,callback:function(t){e.$set(e.model.upWind,"tips",t)},expression:"model.upWind.tips"}})],1)],1),a("el-tab-pane",{attrs:{label:"使用技巧"}},[a("el-form-item",{attrs:{label:"使用技巧"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.model.usageTips,callback:function(t){e.$set(e.model,"usageTips",t)},expression:"model.usageTips"}})],1),a("el-form-item",{attrs:{label:"对抗技巧"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.model.battleTips,callback:function(t){e.$set(e.model,"battleTips",t)},expression:"model.battleTips"}})],1),a("el-form-item",{attrs:{label:"团战思路"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.model.teamTips,callback:function(t){e.$set(e.model,"teamTips",t)},expression:"model.teamTips"}})],1)],1),a("el-tab-pane",{attrs:{label:"技能管理"}},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.addSkills}},[e._v("+ 添加技能")]),a("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{gutter:20,type:"flex"}},e._l(e.model.skills,(function(t,l){return a("el-col",{key:l,attrs:{span:12}},[a("el-card",[a("el-tag",[e._v("技能"+e._s(l+1))]),a("el-form-item",{attrs:{label:"技能名称","label-width":"80px"}},[a("el-input",{model:{value:t.name,callback:function(a){e.$set(t,"name",a)},expression:"item.name"}})],1),a("el-form-item",{attrs:{label:"技能图标","label-width":"80px"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.action+"skill",headers:e.token,"show-file-list":!1,"on-success":function(a){return e.$set(t,"icon",a.url)},"on-error":e.uploadErrHandler}},[t.icon?a("img",{staticClass:"avatar",attrs:{src:t.icon}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("el-form-item",{attrs:{label:"冷却值","label-width":"80px"}},[a("el-input",{attrs:{type:"text"},model:{value:t.delay,callback:function(a){e.$set(t,"delay",a)},expression:"item.delay"}})],1),a("el-form-item",{attrs:{label:"消耗","label-width":"80px"}},[a("el-input",{attrs:{type:"text"},model:{value:t.cost,callback:function(a){e.$set(t,"cost",a)},expression:"item.cost"}})],1),a("el-form-item",{attrs:{label:"技能描述","label-width":"80px"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.desc,callback:function(a){e.$set(t,"desc",a)},expression:"item.desc"}})],1),a("el-form-item",{attrs:{label:"小提示","label-width":"80px"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.tips,callback:function(a){e.$set(t,"tips",a)},expression:"item.tips"}})],1),a("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.deleteSkill(l)}}},[e._v("删除技能")])],1)],1)})),1)],1),a("el-tab-pane",{attrs:{label:"英雄关系"}},[a("el-tabs",{attrs:{value:"basic"}},[a("el-tab-pane",{attrs:{label:"最佳搭档",name:"basic"}},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.model.partners.push({})}}},[e._v("+ 添加英雄")]),a("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{gutter:20,type:"flex"}},e._l(e.model.partners,(function(t,l){return a("el-col",{key:l,attrs:{span:12}},[a("el-card",[a("el-tag",[e._v("英雄"+e._s(l+1))]),a("el-form-item",{attrs:{label:"英雄名称","label-width":"80px"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择英雄"},model:{value:t.hero,callback:function(a){e.$set(t,"hero",a)},expression:"item.hero"}},e._l(e.heroList,(function(e){return a("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),a("el-form-item",{attrs:{label:"描述","label-width":"80px"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.desc,callback:function(a){e.$set(t,"desc",a)},expression:"item.desc"}})],1),a("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.delPartner(l)}}},[e._v("删除")])],1)],1)})),1)],1),a("el-tab-pane",{attrs:{label:"被谁克制"}},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.model.restrained.push({})}}},[e._v("+ 添加英雄")]),a("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{gutter:20,type:"flex"}},e._l(e.model.restrained,(function(t,l){return a("el-col",{key:l,attrs:{span:12}},[a("el-card",[a("el-tag",[e._v("英雄"+e._s(l+1))]),a("el-form-item",{attrs:{label:"英雄名称","label-width":"80px"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择英雄"},model:{value:t.hero,callback:function(a){e.$set(t,"hero",a)},expression:"item.hero"}},e._l(e.heroList,(function(e){return a("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),a("el-form-item",{attrs:{label:"描述","label-width":"80px"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.desc,callback:function(a){e.$set(t,"desc",a)},expression:"item.desc"}})],1),a("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.delRestrained(l)}}},[e._v("删除")])],1)],1)})),1)],1),a("el-tab-pane",{attrs:{label:"克制谁"}},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.model.restraint.push({})}}},[e._v("+ 添加英雄")]),a("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{gutter:20,type:"flex"}},e._l(e.model.restraint,(function(t,l){return a("el-col",{key:l,attrs:{span:12}},[a("el-card",[a("el-tag",[e._v("英雄"+e._s(l+1))]),a("el-form-item",{attrs:{label:"英雄名称","label-width":"80px"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择英雄"},model:{value:t.hero,callback:function(a){e.$set(t,"hero",a)},expression:"item.hero"}},e._l(e.heroList,(function(e){return a("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),a("el-form-item",{attrs:{label:"描述","label-width":"80px"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.desc,callback:function(a){e.$set(t,"desc",a)},expression:"item.desc"}})],1),a("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.delRestraint(l)}}},[e._v("删除")])],1)],1)})),1)],1)],1)],1)],1)],1),a("el-button",{staticStyle:{"margin-top":"15px"},attrs:{type:"primary"},on:{click:e.save}},[e._v("保存")])],1)],1)},r=[],s=a("12c6"),i=a("e5ce"),o=a("5248"),n=a("aff8"),c=a("5fc7"),u={name:"HeroEdit",props:{id:{type:String,default:""}},components:{Breadcrumb:c["a"]},mixins:[n["a"]],data(){return{value:[],model:{avatar:"",photo:"",scores:{},shipin:{},skins:[],skills:[],downWind:{},upWind:{},partners:[],restrained:[],restraint:[]},heroCateList:null,itemList:[],heroList:[]}},methods:{async save(){if(this.id){const e=await Object(s["e"])(this.id,this.model);if(!e)return;this.$message.success("编辑英雄成功"),this.$router.push("/hero/list")}else{const e=await Object(s["a"])(this.model);if(!e)return;this.$message.success("新建英雄成功"),this.$router.push("/hero/list")}},async getHero(){const e=await Object(s["c"])(this.id);this.model=e.data},async edit(e){await Object(s["c"])(e._id);this.$router.push("/hero/edit/"+e._id)},async getCateList(){const e=await Object(i["d"])();for(let t of e.data)if("英雄列表"===t.name){this.heroCateList=t.children;break}},async getItemList(){const e=await Object(o["d"])();this.itemList=e.data},addSkills(){this.model.skills.push({})},deleteSkill(e){this.model.skills.splice(e,1)},addSkins(){this.model.skins.push({})},deleteSkin(e){this.model.skins.splice(e,1)},addVideos(){this.model.skins.push({})},deleteVideo(e){this.model.skins.splice(e,1)},async getHeroList(){const e=await Object(s["d"])();e&&(this.heroList=e.data)},bannerHanderler(e){this.$set(this.model,"banner",e.url)},delPartner(e){this.model.partners.splice(e,1)},delRestrained(e){this.model.restrained.splice(e,1)},delRestraint(e){this.model.restraint.splice(e,1)},beforeUpload(e){const t="video/mp4"===e.type,a=e.size/1024/1024<100;return t?a?t:(this.$message.error("上传视频大小不能超过 100MB!"),!1):(this.$message.error("上传视频只能是 MP4 格式!"),!1)}},created(){this.id&&this.getHero(),this.getCateList(),this.getItemList(),this.getHeroList()}},d=u,m=(a("395c"),a("4ac2")),p=Object(m["a"])(d,l,r,!1,null,"7accd78b",null);t["default"]=p.exports},e5ce:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return s})),a.d(t,"e",(function(){return i})),a.d(t,"b",(function(){return o})),a.d(t,"d",(function(){return n}));var l=a("1bab");function r(e){return Object(l["a"])({url:"/categories",method:"post",data:e})}function s(e){return Object(l["a"])({url:"/categories/"+e})}function i(e,t){return Object(l["a"])({url:"/categories/"+e,method:"put",data:t})}function o(e){return Object(l["a"])({url:"/categories/"+e,method:"delete"})}function n(){return Object(l["a"])({url:"/categories"})}}}]);
//# sourceMappingURL=chunk-23dba6ab.68de5301.js.map