webpackJsonp([2],{"5gQX":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e("4YfN"),o=e.n(n),c=e("9rMa"),r={computed:o()({},Object(c.e)({provinces:function(t){return t.city.provinces},cities:function(t){return t.city.cities},isShowCity:function(t){return t.city.isShowCity}})),methods:o()({},Object(c.b)({getCityList:"city/getCityList"}),Object(c.d)({updateCity:"quotation/updateCity",hideCity:"city/hideCity"}),{cityClick:function(t){this.hideCity(),t.currentTarget==t.target?console.log("点击关闭"):"LI"==t.target.tagName&&(console.log("点击到了城市"),this.updateCity({id:t.target.dataset.id,name:t.target.innerText}))}}),mounted:function(){this.getCityList()}},u={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"cityList"},[e("section",{staticClass:"province"},[e("ul",{on:{click:function(i){return t.getCityList(i.target.dataset.id)}}},t._l(t.provinces,function(i,n){return e("li",{key:n,attrs:{"data-id":i.CityID}},[t._v(t._s(i.CityName))])}))]),t._v(" "),e("section",{class:t.isShowCity?"active city":"city",on:{click:t.cityClick}},[e("div",t._l(t.cities,function(i,n){return e("li",{key:n,attrs:{"data-id":i.CityID}},[t._v(t._s(i.CityName))])}))])])},staticRenderFns:[]};var s=e("C7Lr")(r,u,!1,function(t){e("rBtF")},"data-v-12cb5b9e",null).exports,a={computed:o()({},Object(c.e)({isShowCity:function(t){return t.quotation.isShowCity},currentCity:function(t){return t.quotation.currentCity},city:function(t){return t.quotation.city},quotionList:function(t){return t.quotation.quotionList}})),methods:o()({},Object(c.d)({showCity:"quotation/showCity"}),Object(c.b)({getQuotation:"quotation/getQuotation"}),{getQuotation:function(){}}),mounted:function(){this.getQuotation(this.$route.query.id)},components:{CitySelect:s}},y={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("p",[t._v("页面")]),t._v(" "),e("button",{on:{click:function(i){t.showCity(!0)}}},[t._v("城市:"+t._s(t.currentCity?t.currentCity:t.city.name+t.city.id))]),t._v(" "),e("CitySelect",{class:t.isShowCity?"active":""}),t._v("\n    "+t._s(t.quotionList)+"\n")],1)},staticRenderFns:[]};var d=e("C7Lr")(a,y,!1,function(t){e("xsFT")},null,null);i.default=d.exports},rBtF:function(t,i){},xsFT:function(t,i){}});
//# sourceMappingURL=2.627742fca94568ed61d3.js.map