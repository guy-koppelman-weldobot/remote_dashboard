(function(t){function e(e){for(var a,o,r=e[0],l=e[1],c=e[2],p=0,d=[];p<r.length;p++)o=r[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var l=n[r];0!==i[l]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},s=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),i=n.n(a);i.a},"04ac":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e),n.d(e,"bus",(function(){return V}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],o=(n("f9e3"),n("2dd8"),{name:"App",components:{}}),r=o,l=(n("034f"),n("2877")),c=Object(l["a"])(r,i,s,!1,null,null,null),u=c.exports,p=n("5f5b"),d=n("8c4f"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mrgnbtm"},[n("div",{staticClass:"header"},[t._v("Select welding pass")]),n("div",{staticClass:"row black",staticStyle:{margin:"0px",padding:"10px",height:"100%"}},[n("div",{staticClass:"col-md-12"},[n("ul",{staticClass:"list-group"},t._l(t.current_list,(function(e){return n("li",{key:e.Name,staticClass:"list-group-item list-font",class:{active_item:e.index}},[t._v(t._s(e.Name))])})),0)])])])},f=[],y=n("8e27"),_=n.n(y),m={name:"list",data:function(){return{socket:_()("127.0.0.1:3000"),current_index:0,current_list:[]}},methods:{},computed:{},mounted:function(){var t=this;V.$on("ListUpdated",(function(e){t.current_list=e.data}))}},h=m,b=(n("d15e"),Object(l["a"])(h,v,f,!1,null,"c8bf3758",null)),g=b.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"header"},[n("div",{staticClass:"header-column robot-mode"},[n("div",{staticClass:"mode"},[n("span",[t._v("Mode:")]),n("span",{staticStyle:{color:"yellow"}},[t._v(t._s(t.cycleData.Mode))])]),n("div",{staticClass:"robot"},[n("span",[t._v("Robot:")]),n("span",{staticStyle:{color:"yellow"}},[t._v(t._s(t.cycleData.Robot))])])]),n("div",{staticClass:"header-column pass",staticStyle:{"font-size":"30px"}},[n("span",[t._v("Pass:")]),n("span",{staticStyle:{color:"yellow"}},[t._v(t._s(t.cycleData.Pass))])]),n("div",{staticClass:"header-column joint-heat"},[n("div",{staticClass:"joint-num"},[n("span",[t._v("Joint #:")]),n("span",{staticStyle:{color:"yellow"}},[t._v(t._s(t.cycleData.Joint))])]),n("div",{staticClass:"heat"},[n("span",[t._v("Heat input:")]),n("span",{staticStyle:{color:"yellow"}},[t._v(t._s(t.InputHeat)+" KJ/mm")])])])]),n("div",{staticClass:"main"},[n("div",{staticClass:"mein-sections positions"},[n("div",[t._v("Axes")]),n("div",[t._v("θ pos: "),n("p",{staticStyle:{display:"inline",color:"yellow"}},[t._v(t._s(t.ThetaPos)+" °")])]),n("div",[t._v("Z pos: "),n("p",{staticStyle:{display:"inline",color:"yellow"}},[t._v(t._s(t.ZPos)+" mm")])]),n("div",[t._v("Y pos: "),n("p",{staticStyle:{display:"inline",color:"yellow"}},[t._v(t._s(t.YPos)+" mm")])])]),n("div",{staticClass:"mein-sections amp"},[n("div",{staticStyle:{"margin-top":"55px"}},[t._v("Current")]),n("div",{staticStyle:{margin:"auto",width:"90%","padding-top":"150px","text-align":"center",height:"45%"}},[n("p",{staticStyle:{display:"inline",color:"yellow","font-size":"56px"}},[t._v(t._s(t.Current)+" A")])])]),n("div",{staticClass:"mein-sections state"},[n("div",{staticStyle:{"margin-top":"55px"}},[t._v("State")]),n("div",{staticStyle:{margin:"auto",width:"90%","padding-top":"150px","text-align":"center",height:"45%",color:"yellow"}},[t._v(t._s(t.cycleData.Status))])]),n("div",{staticClass:"mein-sections volt"},[n("div",{staticStyle:{"margin-top":"55px"}},[t._v("Voltage")]),n("div",{staticStyle:{margin:"auto",width:"90%","padding-top":"150px","text-align":"center",height:"45%"}},[n("p",{staticStyle:{display:"inline",color:"yellow","font-size":"56px"}},[t._v(t._s(t.Voltage)+" V")])])]),n("div",{staticClass:"mein-sections speed-arc"},[n("div",[t._v("Speed: "),n("p",{staticStyle:{display:"inline",color:"yellow"}},[t._v(t._s(t.TravelSpeed))]),n("p",{staticStyle:{color:"yellow","font-size":"20px"}},[t._v("(CM/Min)")])]),n("div",[t._v("AL: "),n("p",{staticStyle:{display:"inline",color:"yellow"}},[t._v(t._s(t.cycleData.ArcL)+" V")])]),n("div",[t._v("AC: "),n("p",{staticStyle:{display:"inline",color:"yellow"}},[t._v(t._s(t.cycleData.ArcC)+" V")])])])]),n("div",{staticClass:"footer",staticStyle:{border:"1px rgb(61, 61, 65) solid"}},[t._v(" System messages: "),n("p",[t._v(t._s(t.cycleData.SystemMessage))])])])},S=[],w=(n("a9e3"),n("b680"),n("96cf"),n("1da1")),C={name:"Dashboard3001",components:{},data:function(){return{socket:_()("127.0.0.1:3001"),cycleData:{},Current:0,Voltage:0,Zpos:0,Ypos:0,ThetaPos:0,InputHeat:0,TravelSpeed:0}},methods:{navigate:function(){var t=Object(w["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,V.$emit("ListUpdated",e);case 2:return t.next=4,this.$router.push({path:e.target});case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},mounted:function(){var t=this;this.socket.on("GET_DATA",(function(e){var n=e;t.cycleData=n,t.Current=Number(n.Current).toFixed(2),t.Voltage=Number(n.Voltage).toFixed(2),t.YPos=Number(n.Ypos).toFixed(2),t.ZPos=Number(n.Zpos).toFixed(2),t.ThetaPos=Number(n.ThetaPos).toFixed(2),t.InputHeat=Number(n.InputHeat).toFixed(2),t.TravelSpeed=Number(n.TravelSpeed).toFixed(2)})),this.socket.on("NAV",(function(e){t.navigate(e)})),this.socket.on("DASH",(function(){t.$router.push({path:"/"})}))}},P=C,j=(n("8acb"),Object(l["a"])(P,x,S,!1,null,"281443e8",null)),O=j.exports,D=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("p",[t._v("404")])])}],k={},A=k,N=(n("9705"),Object(l["a"])(A,D,T,!1,null,"78fa3a56",null)),$=N.exports;a["default"].use(d["a"]);var M=new d["a"]({routes:[{path:"/list",name:"list",component:g},{path:"/",component:O},{path:"*",component:$}]});a["default"].config.productionTip=!1;var V=new a["default"];new a["default"]({router:M,render:function(t){return t(u)}}).$mount("#app"),a["default"].use(p["a"])},"85ec":function(t,e,n){},"8acb":function(t,e,n){"use strict";var a=n("04ac"),i=n.n(a);i.a},9705:function(t,e,n){"use strict";var a=n("9c69"),i=n.n(a);i.a},"9c69":function(t,e,n){},d15e:function(t,e,n){"use strict";var a=n("fb1d"),i=n.n(a);i.a},fb1d:function(t,e,n){}});
//# sourceMappingURL=app.53ceedd2.js.map