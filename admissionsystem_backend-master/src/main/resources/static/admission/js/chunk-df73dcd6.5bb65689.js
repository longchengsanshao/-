(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-df73dcd6"],{"0705":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"back-stage-student-plan"}},[null==t.planInfo||0===t.planInfo.length?e("empty-data"):e("div",{attrs:{id:"student-plan-info"}},[e("table-row-count",{attrs:{count:t.planInfo.length}}),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.planInfo,stripe:""}},[e("el-table-column",{attrs:{prop:"majorId",label:"专业代号",width:"100"}}),e("el-table-column",{attrs:{prop:"majorCode",label:"专业代码"}}),e("el-table-column",{attrs:{prop:"departmentName",label:"学院"}}),e("el-table-column",{attrs:{prop:"majorName",label:"专业名称"}}),e("el-table-column",{attrs:{prop:"comment",label:"备注"}}),e("el-table-column",{attrs:{prop:"period",label:"学制年限"}}),e("el-table-column",{attrs:{prop:"planStudentCount",label:"计划招生"}}),e("el-table-column",{attrs:{prop:"realisticStudentCount",label:"招生数目"}}),2===t.$store.state.status||3===t.$store.state.status||5===t.$store.state.status?e("el-table-column",{attrs:{fixed:"right",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-link",{attrs:{type:"primary",underline:!1},on:{click:function(e){return t.updataPlan(a.row.majorId)}}},[t._v("修改计划")])]}}],null,!1,4097930305)}):t._e()],1)],1)],1)},l=[],o=(e("d3b7"),e("1bab")),s=e("3b96"),r=e("5b02"),c={name:"StudentPlan",data:function(){return{planInfo:null,loading:null}},methods:{loadData:function(){var t=this;this.setLoading(),Object(o["a"])({url:"major/getMajorPlan"}).then((function(a){"000"===a.code?t.planInfo=a.data:t.$message.error(a.message)})).catch((function(a){t.$message.error("系统错误")})).finally((function(){t.setUnloading()}))},setLoading:function(){this.loading=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"})},setUnloading:function(){this.loading.close()},updataPlan:function(t){var a=this;this.$prompt("请输入计划人数","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(e){var n=e.value;Object(o["a"])({url:"major/updateMajorPlan",params:{majorId:t,count:n}}).then((function(t){"000"===t.code?(a.$message.success("修改成功"),a.loadData()):a.$message.error(t.message)})).catch((function(t){a.$message.error("系统错误")}))})).catch((function(){a.$message({type:"info",message:"取消输入"})}))}},created:function(){this.loadData()},components:{EmptyData:s["a"],TableRowCount:r["a"]}},u=c,i=(e("6a8f"),e("2877")),d=Object(i["a"])(u,n,l,!1,null,"604466ac",null);a["default"]=d.exports},"3b96":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"empty-data"},[e("div",{staticClass:"el-icon-box empty-box"}),e("div",{staticClass:"empty-data-text"},[t._v("暂无数据")])])}],o={name:"EmptyData"},s=o,r=(e("bab9"),e("2877")),c=Object(r["a"])(s,n,l,!1,null,"cec065f2",null);a["a"]=c.exports},4758:function(t,a,e){"use strict";var n=e("abeb"),l=e.n(n);l.a},"5b02":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"table-row-count-wrap clearfix"},[e("div",{staticClass:"table-row-count"},[t._v(" 共"+t._s(t.count)+"条数据 ")])])},l=[],o={name:"TableRowCount",props:["count"]},s=o,r=(e("4758"),e("2877")),c=Object(r["a"])(s,n,l,!1,null,"732fcddd",null);a["a"]=c.exports},"6a8f":function(t,a,e){"use strict";var n=e("e7f2"),l=e.n(n);l.a},abeb:function(t,a,e){},bab9:function(t,a,e){"use strict";var n=e("fa03"),l=e.n(n);l.a},e7f2:function(t,a,e){},fa03:function(t,a,e){}}]);
//# sourceMappingURL=chunk-df73dcd6.5bb65689.js.map