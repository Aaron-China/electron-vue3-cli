(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d6fdc12"],{"0b52":function(t,e,n){"use strict";n.r(e);var a=n("7a23"),o={class:"wrapper"},c={class:"list-box"},i=Object(a["o"])("新增"),d=Object(a["o"])("批量删除");function r(t,e,n,r,l,u){var b=Object(a["Q"])("a-button"),s=Object(a["Q"])("search-model"),p=Object(a["Q"])("c-table");return Object(a["H"])(),Object(a["m"])("div",o,[Object(a["n"])("div",c,[Object(a["p"])(s,{formList:t.formList,onOnSearch:t.handleSearch},{"tool-left":Object(a["bb"])((function(){return[Object(a["p"])(b,{class:"n-btn",onClick:t.add},{default:Object(a["bb"])((function(){return[i]})),_:1},8,["onClick"]),Object(a["p"])(b,{class:"d-btn",style:{"margin-left":"15px"},onClick:t.deleteM},{default:Object(a["bb"])((function(){return[d]})),_:1},8,["onClick"])]})),_:1},8,["formList","onOnSearch"]),Object(a["p"])(p,{loading:t.table.loading,selected:!0,columns:t.columns,dataSource:t.table.dataSource,pagination:t.table.pagination,total:t.table.pagination.total,selectedRow:t.table.selectedRowId,onTableChange:t.tableChange,onSelectChange:t.handleSelect},null,8,["loading","columns","dataSource","pagination","total","selectedRow","onTableChange","onSelectChange"])])])}var l=n("2909"),u=n("5530"),b=(n("4de4"),n("d3b7"),n("6c02")),s=n("2af9"),p=n("37a5"),f=[{label:"名称",key:"materialName",type:"input"},{type:"btn"}],h=Object(a["q"])({components:{SearchModel:s["g"],CTable:s["c"]},setup:function(){var t=Object(b["c"])(),e=Object(a["L"])({}),n=[{title:"名称",dataIndex:"name",width:80},{title:"设备",dataIndex:"device",width:90},{title:"是否公开",dataIndex:"open",width:130,ellipsis:!0},{title:"操作",dataIndex:"operation",width:70,align:"center",customRender:function(t){var e=t.record;return Object(a["p"])("div",null,[Object(a["p"])("a",{onClick:function(){return h(e)}},[Object(a["o"])("编辑")]),Object(a["p"])("a",{style:"margin-left: 10px;",onClick:function(){return O(e)}},[Object(a["o"])("查看")])])}}],o=Object(a["L"])({loading:!1,dataSource:[],pagination:{current:1,pageSize:20,total:0},selectedRowId:[],selectedRowKeys:[]}),c=function(){o.loading=!0,Object(p["d"])().then((function(t){if(200===t.code){var e=t.data;o.dataSource=e.records,o.pagination.current=e.current,o.pagination.pageSize=e.size,o.pagination.total=e.total}o.loading=!1})).catch((function(t){console.log(t),o.loading=!1}))},i=function(t){e=Object(u["a"])({},t),o.pagination.current=1,c()},d=function(t,e){o.selectedRowId=Object(l["a"])(t),o.selectedRowKeys=e},r=function(t){o.pagination.current=t.current,o.pagination.pageSize=t.pageSize,c()},s=function(){},h=function(e){t.push({path:"/visual/dashboard/detail/edit",query:{id:e.id}})},O=function(e){t.push({path:"/visual/dashboard/detail/show",query:{id:e.id}})},j=function(){var t=o.dataSource.filter((function(t){return!o.selectedRowId.some((function(e){return e===t.id}))}));o.dataSource=Object(l["a"])(t)};return c(),{search:e,formList:f,columns:n,table:o,handleSelect:d,tableChange:r,handleSearch:i,add:s,edit:h,deleteM:j}}}),O=n("6b0d"),j=n.n(O);const g=j()(h,[["render",r]]);e["default"]=g},"37a5":function(t,e,n){"use strict";n.d(e,"d",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"f",(function(){return i})),n.d(e,"c",(function(){return d})),n.d(e,"a",(function(){return r})),n.d(e,"e",(function(){return l}));var a=n("b775");function o(t){return Object(a["a"])({url:"/dashboard/list",method:"post",data:t})}function c(t){return Object(a["a"])({url:"/component/list",method:"post",data:t})}function i(t){return Object(a["a"])({url:"/datasource/list",method:"post",data:t})}function d(t){return Object(a["a"])({url:"/dashboard/detail",method:"post",data:t})}function r(t){return Object(a["a"])({url:"/component/detail",method:"post",data:t})}function l(t){return Object(a["a"])({url:"/datasource/data",method:"post",data:t})}}}]);