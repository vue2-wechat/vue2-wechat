(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0dd7ce"],{8231:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profile"},[s("header",{attrs:{id:"wx-header"}},[s("div",{staticClass:"center"},[s("router-link",{staticClass:"iconfont icon-return-arrow",attrs:{to:"/contact",tag:"div"}},[s("span",[t._v("通讯录")])]),s("span",[t._v("详细资料")])],1)]),s("div",{staticClass:"weui-cells"},[s("div",{staticClass:"weui-cell"},[s("div",{staticClass:"weui-cell__hd"},[s("img",{staticClass:"self-header",staticStyle:{width:"60px"},attrs:{src:t.userInfo.headerUrl,alt:""}})]),s("div",{staticClass:"weui-cell__bd"},[s("h4",{staticClass:"self-nickname"},[t._v(t._s(t.userInfo.nickname)),s("span",{staticClass:"gender",class:[1===t.userInfo.sex?"gender-male":"gender-female"]})]),s("p",{staticClass:"self-wxid",staticStyle:{"font-size":"13px",color:"#999"}},[t._v("微信号: "+t._s(t.userInfo.wxid))]),s("p",{staticClass:"nickname",staticStyle:{"font-size":"13px",color:"#999"}},[t._v("昵称:"+t._s(t.userInfo.nickname||"无"))])])])]),t._m(0),s("div",{staticClass:"weui-cells"},[s("div",{staticClass:"weui-cell"},[t._m(1),s("div",{staticClass:"weui-cell__ft",staticStyle:{flex:"4","text-align":"left"}},t._l(t.userInfo.area,(function(e,i){return s("span",{key:i},[t._v(t._s(e)+" ")])})),0)]),s("div",{staticClass:"weui-cell weui-cell_access"},[t._m(2),s("div",{staticClass:"weui-cell__ft",staticStyle:{flex:"4","text-align":"left"}},[s("div",{staticClass:"album-list"},t._l(t.userInfo.album,(function(t,e){return s("img",{key:e,staticStyle:{width:"50px",margin:"0 5px"},attrs:{src:t.imgSrc}})})),0)])]),t._m(3)]),s("a",{staticClass:"weui-btn weui-btn_primary",staticStyle:{width:"90%","margin-top":"20px"},attrs:{href:"javascript:;"}},[t._v("发消息")]),s("a",{staticClass:"weui-btn weui-btn_default",staticStyle:{width:"90%"},attrs:{href:"javascript:;"}},[t._v("视频")])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"weui-cells"},[s("div",{staticClass:"weui-cell weui-cell_access"},[s("div",{staticClass:"weui-cell__bd"},[s("p",[t._v("设置备注和标签")])]),s("div",{staticClass:"weui-cell__ft"})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"weui-cell__bd"},[s("p",[t._v("地区")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"weui-cell__bd"},[s("p",[t._v("个人相册")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"weui-cell weui-cell_access"},[s("div",{staticClass:"weui-cell__bd"},[s("p",[t._v("更多")])]),s("div",{staticClass:"weui-cell__ft"})])}],l=s("ae18"),c={data:function(){return{pageName:""}},computed:{userInfo:function(){return l["a"].getUserInfo(this.$route.query.wxid)}}},n=c,r=s("2877"),u=Object(r["a"])(n,i,a,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0dd7ce.07e60b0f.js.map