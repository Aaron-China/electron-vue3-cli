(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-796de9fc"],{"82e8":function(e,t,n){"use strict";n("f82b")},f82b:function(e,t,n){},fe41:function(e,t,n){"use strict";n.r(t);var c=n("5530"),a=n("7a23"),o=function(e){return Object(a["K"])("data-v-976c9d36"),e=e(),Object(a["I"])(),e},i={class:"dashboard-detail"},r={class:"tool-bar"},d=o((function(){return Object(a["n"])("span",null,"＜",-1)})),b=Object(a["o"])(" 返回"),u=[d,b],l={class:"container"};function s(e,t,n,o,d,b){var s=Object(a["Q"])("base-component");return Object(a["H"])(),Object(a["m"])("div",i,[Object(a["n"])("div",r,[Object(a["n"])("div",{class:"go-back",onClick:t[0]||(t[0]=function(){return e.goBack&&e.goBack.apply(e,arguments)})},u)]),Object(a["n"])("div",l,[Object(a["n"])("div",{class:"contain",style:Object(a["z"])({width:e.formData.width,height:e.formData.height})},[(Object(a["H"])(!0),Object(a["m"])(a["b"],null,Object(a["O"])(e.formData.components,(function(t){return Object(a["H"])(),Object(a["m"])("div",{class:"comp-item",key:t.id,style:Object(a["z"])(Object(c["a"])({width:"".concat(t.width,"px"),height:"".concat(t.height,"px"),top:"".concat(t.top,"px"),left:"".concat(t.left,"px"),zIndex:t.zIndex},t.style||{}))},[(Object(a["H"])(),Object(a["k"])(Object(a["R"])(t.container),{class:"cus-border",title:t.title},null,8,["title"])),Object(a["p"])(s,{formData:t,parameter:e.parameter,onOnControl:e.handleControl},null,8,["formData","parameter","onOnControl"])],4)})),128))],4)])])}var O=n("2909"),j=(n("3b18"),n("f64c")),f=(n("d81d"),n("99af"),n("4de4"),n("d3b7"),n("e9c4"),n("6c02")),p=n("9be9"),m=n("f860"),v=n("1018"),h=n("37a5"),x=Object(a["q"])({components:Object(c["a"])(Object(c["a"])({},m["a"]),{},{DrawContainer:p["a"],BaseComponent:v["a"]}),setup:function(){var e=Object(f["c"])(),t=Object(a["M"])({}),n=Object(a["M"])({}),o=Object(a["M"])(),i=e.currentRoute._value.query,r=void 0===i?{}:i,d=function(){Object(h["c"])({id:r.id}).then((function(e){if(200===e.code){var n=e.data,a=void 0===n?{}:n;t.value=Object(c["a"])(Object(c["a"])({},a),{},{components:JSON.parse(a.components)})}else j["a"].error(e.msg)}))},b=function(e){n.value=Object(c["a"])({},e)},u=function(){e.go(-1)},l=function(e){o.value=e===o.value?null:e},s=function(e){var n=e.type,a=e.obj,o=Object(O["a"])(t.value.components);if("site"===n||"size"===n)o=o.map((function(e){return e.id===a.id&&(e=Object(c["a"])(Object(c["a"])({},e),a)),e}));else if("edit"===n);else if("up"===n)o=o.map((function(e){return e.id===a.id&&(e=Object(c["a"])(Object(c["a"])({},e),{},{zIndex:e.zIndex+1})),e}));else if("down"===n)o=o.map((function(e){return e.id===a.id&&(e=Object(c["a"])(Object(c["a"])({},e),{},{zIndex:e.zIndex>0?e.zIndex-1:0})),e}));else if("max"===n){var i=Math.max.apply(Math,Object(O["a"])(o.map((function(e){return e.zIndex}))).concat([0]));o=o.map((function(e){return e.id===a.id&&(e=Object(c["a"])(Object(c["a"])({},e),{},{zIndex:i+1})),e}))}else"min"===n?o=o.map((function(e){return e.id===a.id&&(e=Object(c["a"])(Object(c["a"])({},e),{},{zIndex:0})),e})):"delete"===n&&(o=o.filter((function(e){return e.id!==a.id})));t.value.components=Object(O["a"])(o)},p=function(){console.log(t.value),console.log(JSON.stringify(t.value.components))};return d(),{formData:t,checkItem:o,parameter:n,handleControl:b,goBack:u,onCheck:l,onChange:s,save:p}}}),g=(n("82e8"),n("6b0d")),z=n.n(g);const I=z()(x,[["render",s],["__scopeId","data-v-976c9d36"]]);t["default"]=I}}]);