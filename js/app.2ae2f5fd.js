(function(t){function o(o){for(var r,a,l=o[0],n=o[1],p=o[2],b=0,u=[];b<l.length;b++)a=l[b],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&u.push(i[a][0]),i[a]=0;for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);c&&c(o);while(u.length)u.shift()();return s.push.apply(s,p||[]),e()}function e(){for(var t,o=0;o<s.length;o++){for(var e=s[o],r=!0,l=1;l<e.length;l++){var n=e[l];0!==i[n]&&(r=!1)}r&&(s.splice(o--,1),t=a(a.s=e[0]))}return t}var r={},i={app:0},s=[];function a(o){if(r[o])return r[o].exports;var e=r[o]={i:o,l:!1,exports:{}};return t[o].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=r,a.d=function(t,o,e){a.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,o){if(1&o&&(t=a(t)),8&o)return t;if(4&o&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var r in t)a.d(e,r,function(o){return t[o]}.bind(null,r));return e},a.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(o,"a",o),o},a.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],n=l.push.bind(l);l.push=o,l=l.slice();for(var p=0;p<l.length;p++)o(l[p]);var c=n;s.push([0,"chunk-vendors"]),e()})({0:function(t,o,e){t.exports=e("56d7")},"56d7":function(t,o,e){"use strict";e.r(o);var r=e("2b0e"),i=e("5f5b"),s=e("b1e0"),a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"d-flex flex-column min-vh-100"},[e("b-container",{staticClass:"flex-grow-1 py-3",attrs:{fluid:""}},[e("b-row",[e("b-col",{staticClass:"text-center"},[e("b-dropdown",{attrs:{text:"Theme"}},t._l(t.theme.options,(function(o,r){return e("b-dd-item-btn",{key:r,attrs:{active:o===t.theme.selected},on:{click:function(e){return t.switchTheme(o)}}},[t._v(" "+t._s(o)+" ")])})),1)],1)],1),e("b-row",[e("b-col"),e("b-col",[e("Buttons",{attrs:{variants:t.variants}})],1)],1),e("b-row",[e("b-col"),e("b-col",[e("Tooltips")],1)],1)],1)],1)},l=[],n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("b-card",{staticClass:"m-4 text-center"},[e("h3",[e("a",{attrs:{href:"https://bootstrap-vue.org/docs/components/button",target:"_blank"}},[t._v("Buttons")])]),t._l(t.variants,(function(o,r){return e("b-button",{key:r,staticClass:"m-3",attrs:{variant:o.toLowerCase()}},[t._v(" "+t._s(o)+" ")])}))],2)},p=[],c={props:{variants:{type:Array,required:!0}}},b=c,u=e("2877"),m=Object(u["a"])(b,n,p,!1,null,null,null),d=m.exports,f=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("b-card",{staticClass:"m-4 text-center"},[e("h3",[e("a",{attrs:{href:"https://bootstrap-vue.org/docs/components/tooltip",target:"_blank"}},[t._v("Tooltips")])]),e("b-row",{staticClass:"text-center"},[e("b-col",{staticClass:"py-3",attrs:{md:"3"}},[e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.top",value:"Tooltip!",expression:"'Tooltip!'",modifiers:{top:!0}}]},[t._v("Top")])],1),e("b-col",{staticClass:"py-3",attrs:{md:"3"}},[e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.right",value:"Tooltip!",expression:"'Tooltip!'",modifiers:{right:!0}}]},[t._v("Right")])],1),e("b-col",{staticClass:"py-3",attrs:{md:"3"}},[e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.left",value:"Tooltip!",expression:"'Tooltip!'",modifiers:{left:!0}}]},[t._v("Left")])],1),e("b-col",{staticClass:"py-3",attrs:{md:"3"}},[e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.bottom",value:"Tooltip!",expression:"'Tooltip!'",modifiers:{bottom:!0}}]},[t._v("Bottom")])],1),e("b-col",{staticClass:"py-3",attrs:{md:"3"}},[e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.topright",value:"Tooltip!",expression:"'Tooltip!'",modifiers:{topright:!0}}]},[t._v("Top right")])],1),e("b-col",{staticClass:"py-3",attrs:{md:"3"}},[e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.topleft",value:"Tooltip!",expression:"'Tooltip!'",modifiers:{topleft:!0}}]},[t._v("Top left")])],1),e("b-col",{staticClass:"py-3",attrs:{md:"3"}},[e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.bottomright",value:"Tooltip!",expression:"'Tooltip!'",modifiers:{bottomright:!0}}]},[t._v("Bottom right")])],1),e("b-col",{staticClass:"py-3",attrs:{md:"3"}},[e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.bottomleft",value:"Tooltip!",expression:"'Tooltip!'",modifiers:{bottomleft:!0}}]},[t._v("Bottom left")])],1),e("b-col",{staticClass:"py-3",attrs:{md:"3"}},[e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.lefttop",value:"Tooltip!",expression:"'Tooltip!'",modifiers:{lefttop:!0}}]},[t._v("Left top")])],1),e("b-col",{staticClass:"py-3",attrs:{md:"3"}},[e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.leftbottom",value:"Tooltip!",expression:"'Tooltip!'",modifiers:{leftbottom:!0}}]},[t._v("Left bottom")])],1),e("b-col",{staticClass:"py-3",attrs:{md:"3"}},[e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.righttop",value:"Tooltip!",expression:"'Tooltip!'",modifiers:{righttop:!0}}]},[t._v("Right top")])],1),e("b-col",{staticClass:"py-3",attrs:{md:"3"}},[e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.rightbottom",value:"Tooltip!",expression:"'Tooltip!'",modifiers:{rightbottom:!0}}]},[t._v("Right bottom")])],1)],1)],1)},v=[],h={},y=Object(u["a"])(h,f,v,!1,null,null,null),g=y.exports,T={components:{Buttons:d,Tooltips:g},data(){var t=["default","black","gray","white"].map(t=>"theme-"+t);return document.body.className=t[0],{theme:{selected:t[0],options:t},variants:["Primary","Secondary","Success","Danger","Warning","Info","Light","Dark"]}},methods:{switchTheme(t){this.theme.selected=t,document.body.className=t}}},_=T,w=Object(u["a"])(_,a,l,!1,null,null,null),x=w.exports;e("de82");r["default"].use(i["a"]),r["default"].use(s["a"]),r["default"].config.productionTip=!1,new r["default"]({render:t=>t(x)}).$mount("#app")},de82:function(t,o,e){}});