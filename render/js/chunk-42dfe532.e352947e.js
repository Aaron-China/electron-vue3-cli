(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42dfe532"],{"37a5":function(t,e,a){"use strict";a.d(e,"d",(function(){return o})),a.d(e,"b",(function(){return l})),a.d(e,"f",(function(){return i})),a.d(e,"c",(function(){return c})),a.d(e,"a",(function(){return d})),a.d(e,"e",(function(){return r}));var n=a("b775");function o(t){return Object(n["a"])({url:"/dashboard/list",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/component/list",method:"post",data:t})}function i(t){return Object(n["a"])({url:"/datasource/list",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/dashboard/detail",method:"post",data:t})}function d(t){return Object(n["a"])({url:"/component/detail",method:"post",data:t})}function r(t){return Object(n["a"])({url:"/datasource/data",method:"post",data:t})}},5120:function(t,e,a){"use strict";a.r(e);var n=a("7a23"),o={class:"wrapper"},l={class:"list-box"},i=Object(n["o"])("新增"),c=Object(n["o"])("批量删除");function d(t,e,a,d,r,u){var s=Object(n["Q"])("a-button"),b=Object(n["Q"])("search-model"),p=Object(n["Q"])("c-table"),f=Object(n["Q"])("edit-model");return Object(n["H"])(),Object(n["m"])("div",o,[Object(n["n"])("div",l,[Object(n["p"])(b,{formList:t.formList,onOnSearch:t.handleSearch},{"tool-left":Object(n["bb"])((function(){return[Object(n["p"])(s,{class:"n-btn",onClick:t.add},{default:Object(n["bb"])((function(){return[i]})),_:1},8,["onClick"]),Object(n["p"])(s,{class:"d-btn",style:{"margin-left":"15px"},onClick:t.deleteM},{default:Object(n["bb"])((function(){return[c]})),_:1},8,["onClick"])]})),_:1},8,["formList","onOnSearch"]),Object(n["p"])(p,{loading:t.table.loading,selected:!0,columns:t.columns,dataSource:t.table.dataSource,pagination:t.table.pagination,total:t.table.pagination.total,selectedRow:t.table.selectedRowId,onTableChange:t.tableChange,onSelectChange:t.handleSelect},null,8,["loading","columns","dataSource","pagination","total","selectedRow","onTableChange","onSelectChange"]),Object(n["p"])(f,{loading:t.modal.loading,visible:t.modal.visible,type:t.modal.type,title:t.modal.title,initData:t.modal.form,formItems:t.modalFormList,onOnClose:t.modalClose},null,8,["loading","visible","type","title","initData","formItems","onOnClose"])])])}var r=a("2909"),u=a("5530"),s=(a("4de4"),a("d3b7"),a("6c02")),b=a("2af9"),p=[{label:"文本",value:"CusText"},{label:"图片",value:"CusImg"},{label:"表格",value:"CusTable"},{label:"图表",value:"CusChart"},{label:"排产控制",value:"CusController"}],f={CusText:"文本",CusImg:"图片",CusTable:"表格",CusChart:"图表",CusController:"排产控制"},m=a("37a5"),O=[{label:"类型",key:"type",type:"select",option:p},{type:"btn"}],h=[{label:"名称",key:"title",type:"input",required:!0},{label:"类型",key:"type",type:"select",option:p,required:!0},{label:"数据源",key:"datasource",type:"select",option:[],required:!0}],g=Object(n["q"])({name:"component-list",components:{SearchModel:b["g"],CTable:b["c"],EditModel:b["e"]},setup:function(){var t=Object(s["c"])(),e=Object(n["L"])({}),a=[{title:"名称",dataIndex:"title",width:120,ellipsis:!0},{title:"类型",dataIndex:"type",width:90,customRender:function(t){var e=t.text;return f[e]||""}},{title:"数据源",dataIndex:"datasourceName",width:130},{title:"是否绑定面板",dataIndex:"bind",width:130,customRender:function(t){var e=t.text;return e?"绑定":"未绑定"}},{title:"操作",dataIndex:"operation",width:70,align:"center",customRender:function(t){var e=t.record;return Object(n["p"])("div",null,[Object(n["p"])("a",{onClick:function(){return j(e)}},[Object(n["o"])("编辑")])])}}],o=Object(n["L"])({loading:!1,dataSource:[],pagination:{current:1,pageSize:20,total:0},selectedRowId:[],selectedRowKeys:[]}),l=Object(n["L"])({loading:!1,visible:!1,title:"",type:"add",form:{}}),i=function(){o.loading=!0,Object(m["b"])().then((function(t){if(200===t.code){var e=t.data;o.dataSource=e.records,o.pagination.current=e.current,o.pagination.pageSize=e.size,o.pagination.total=e.total}o.loading=!1})).catch((function(t){console.log(t),o.loading=!1}))},c=function(t){e=Object(u["a"])({},t),o.pagination.current=1,i()},d=function(t,e){o.selectedRowId=Object(r["a"])(t),o.selectedRowKeys=e},b=function(t){o.pagination.current=t.current,o.pagination.pageSize=t.pageSize,i()},p=function(){l.visible=!0,l.title="新增",l.type="add",l.form={}},g=function(t){"cancle"!==t&&o.dataSource.push(Object(u["a"])(Object(u["a"])({},t.data),{},{id:o.dataSource.length+1})),l.visible=!1,l.title="新增",l.type="add",l.form={}},j=function(e){t.push({path:"/visual/component/detail",query:{id:e.id,did:e.datasourceId}})},C=function(){var t=o.dataSource.filter((function(t){return!o.selectedRowId.some((function(e){return e===t.id}))}));o.dataSource=Object(r["a"])(t)};return i(),{search:e,formList:O,columns:a,table:o,modal:l,modalFormList:h,handleSelect:d,tableChange:b,handleSearch:c,add:p,edit:j,deleteM:C,modalClose:g}}}),j=a("6b0d"),C=a.n(j);const v=C()(g,[["render",d]]);e["default"]=v}}]);