(function(t){function e(e){for(var s,o,l=e[0],c=e[1],r=e[2],u=0,d=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);p&&p(e);while(d.length)d.shift()();return n.push.apply(n,r||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,l=1;l<a.length;l++){var c=a[l];0!==i[c]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},i={app:0},n=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var r=0;r<l.length;r++)e(l[r]);var p=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("85ec"),i=a.n(s);i.a},"0987":function(t,e,a){},"14e3":function(t,e,a){"use strict";var s=a("a890"),i=a.n(s);i.a},"37f0":function(t,e,a){"use strict";var s=a("6399"),i=a.n(s);i.a},"56d7":function(t,e,a){"use strict";a.r(e),a.d(e,"bus",(function(){return z}));a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"con"},[a("router-view",{staticClass:"rout"})],1)},n=[],o=(a("f9e3"),a("2dd8"),{name:"App",components:{}}),l=o,c=(a("034f"),a("2877")),r=Object(c["a"])(l,i,n,!1,null,null,null),p=r.exports,u=a("5f5b"),d=a("8c4f"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mrgnbtm"},[a("div",{staticClass:"header"},[t._v("Select welding pass")]),a("div",{staticClass:"row black",staticStyle:{margin:"0px",padding:"10px",height:"100%"}},[a("div",{staticClass:"col-md-12"},[a("ul",{staticClass:"list-group"},t._l(t.current_list,(function(e){return a("li",{key:e.Name,staticClass:"list-group-item list-font",class:{active_item:e.index}},[t._v(t._s(e.Name))])})),0)])])])},y=[],_={name:"list",data:function(){return{current_index:0,current_list:[]}},methods:{},computed:{},mounted:function(){var t=this;z.$on("ListUpdated",(function(e){t.current_list=e.data.Item2}))}},m=_,f=(a("7caa"),Object(c["a"])(m,v,y,!1,null,"ad09b976",null)),h=f.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"header"},[a("div",{staticClass:"header-column robot-mode"},[a("div",{staticClass:"mode"},[a("span",[t._v("Mode:")]),a("span",{staticStyle:{color:"yellow"}},[t._v(t._s(t.cycleData.Mode))])]),a("div",{staticClass:"robot"},[a("span",[t._v("Robot:")]),a("span",{staticStyle:{color:"yellow"}},[t._v(t._s(t.cycleData.Robot))])])]),a("div",{staticClass:"header-column pass",staticStyle:{"font-size":"30px"}},[a("span",[t._v("Pass:")]),a("span",{staticStyle:{color:"yellow"}},[t._v(t._s(t.cycleData.Pass))])]),a("div",{staticClass:"header-column joint-heat"},[a("div",{staticClass:"joint-num"},[a("span",[t._v("Joint #:")]),a("span",{staticStyle:{color:"yellow"}},[t._v(t._s(t.cycleData.Joint))])]),a("div",{staticClass:"heat"},[a("span",[t._v("Heat input:")]),a("span",{staticStyle:{color:"yellow"}},[t._v(t._s(t.InputHeat)+" KJ/mm")])])])]),a("div",{staticClass:"main"},[a("div",{staticClass:"mein-sections positions"},[a("div",[t._v("Axes")]),a("div",[t._v("θ pos: "),a("p",{staticStyle:{display:"inline",color:"yellow"}},[t._v(t._s(t.ThetaPos)+" °")])]),a("div",[t._v("Z pos: "),a("p",{staticStyle:{display:"inline",color:"yellow"}},[t._v(t._s(t.ZPos)+" mm")])]),a("div",[t._v("Y pos: "),a("p",{staticStyle:{display:"inline",color:"yellow"}},[t._v(t._s(t.YPos)+" mm")])])]),a("div",{staticClass:"mein-sections amp"},[a("div",{staticStyle:{"margin-top":"55px"}},[t._v("Current")]),a("div",{staticStyle:{margin:"auto",width:"90%","padding-top":"150px","text-align":"center",height:"45%"}},[a("p",{staticStyle:{display:"inline",color:"yellow","font-size":"56px"}},[t._v(t._s(t.Current)+" A")])])]),a("div",{staticClass:"mein-sections state"},[a("div",{staticStyle:{"margin-top":"55px"}},[t._v("State")]),a("div",{staticStyle:{margin:"auto",width:"90%","padding-top":"150px","text-align":"center",height:"45%",color:"yellow"}},[t._v(t._s(t.cycleData.Status))])]),a("div",{staticClass:"mein-sections volt"},[a("div",{staticStyle:{"margin-top":"55px"}},[t._v("Voltage")]),a("div",{staticStyle:{margin:"auto",width:"90%","padding-top":"150px","text-align":"center",height:"45%"}},[a("p",{staticStyle:{display:"inline",color:"yellow","font-size":"56px"}},[t._v(t._s(t.Voltage)+" V")])])]),a("div",{staticClass:"mein-sections speed-arc"},[a("div",[t._v("Speed: "),a("p",{staticStyle:{display:"inline",color:"yellow"}},[t._v(t._s(t.TravelSpeed))]),a("p",{staticStyle:{color:"yellow","font-size":"20px"}},[t._v("(CM/Min)")])]),a("div",[t._v("AL: "),a("p",{staticStyle:{display:"inline",color:"yellow"}},[t._v(t._s(t.cycleData.ArcL)+" V")])]),a("div",[t._v("AC: "),a("p",{staticStyle:{display:"inline",color:"yellow"}},[t._v(t._s(t.cycleData.ArcC)+" V")])])])]),a("div",{staticClass:"footer",staticStyle:{border:"1px rgb(61, 61, 65) solid"}},[t._v(" System messages: "),a("p",[t._v(t._s(t.cycleData.SystemMessage))])])])},S=[],x=(a("a9e3"),a("b680"),a("96cf"),a("1da1")),b=a("8e27"),w=a.n(b),C={name:"Dashboard3000",components:{},data:function(){return{socket:w()("127.0.0.1:3000"),cycleData:{},Current:0,Voltage:0,Zpos:0,Ypos:0,ThetaPos:0,InputHeat:0,TravelSpeed:0}},methods:{navigate:function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,z.$emit("ListUpdated",e);case 2:return t.next=4,this.$router.push({path:e.target});case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},mounted:function(){var t=this;this.socket.on("GET_DATA",(function(e){var a=e;t.cycleData=a,t.Current=Number(a.Current).toFixed(2),t.Voltage=Number(a.Voltage).toFixed(2),t.YPos=Number(a.Ypos).toFixed(2),t.ZPos=Number(a.Zpos).toFixed(2),t.ThetaPos=Number(a.ThetaPos).toFixed(2),t.InputHeat=Number(a.InputHeat).toFixed(2),t.TravelSpeed=Number(a.TravelSpeed).toFixed(2)})),this.socket.on("NAV",(function(e){t.navigate(e)})),this.socket.on("DASH",(function(){t.$router.push({path:"/"})}))}},D=C,P=(a("37f0"),Object(c["a"])(D,g,S,!1,null,"1971519d",null)),T=P.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"header"},[a("div",{staticClass:"header-column robot-mode"},[a("div",{staticClass:"mode"},[a("span",[t._v("Mode:")]),a("span",{staticStyle:{color:"yellow"}},[t._v(t._s(t.cycleData.Mode))])]),a("div",{staticClass:"robot"},[a("span",[t._v("Robot:")]),a("span",{staticStyle:{color:"yellow"}},[t._v(t._s(t.cycleData.Robot))])])]),a("div",{staticClass:"header-column pass",staticStyle:{"font-size":"30px"}},[a("span",[t._v("Pass:")]),a("span",{staticStyle:{color:"yellow"}},[t._v(t._s(t.cycleData.Pass))])]),a("div",{staticClass:"header-column joint-heat"},[a("div",{staticClass:"joint-num"},[a("span",[t._v("Joint #:")]),a("span",{staticStyle:{color:"yellow"}},[t._v(t._s(t.cycleData.Joint))])]),a("div",{staticClass:"heat"},[a("span",[t._v("Heat input:")]),a("span",{staticStyle:{color:"yellow"}},[t._v(t._s(t.InputHeat)+" KJ/mm")])])])]),a("div",{staticClass:"main"},[a("div",{staticClass:"mein-sections positions"},[a("div",[t._v("Axes")]),a("div",[t._v("θ pos: "),a("p",{staticStyle:{display:"inline",color:"yellow"}},[t._v(t._s(t.ThetaPos)+" °")])]),a("div",[t._v("Z pos: "),a("p",{staticStyle:{display:"inline",color:"yellow"}},[t._v(t._s(t.ZPos)+" mm")])]),a("div",[t._v("Y pos: "),a("p",{staticStyle:{display:"inline",color:"yellow"}},[t._v(t._s(t.YPos)+" mm")])])]),a("div",{staticClass:"mein-sections amp"},[a("div",{staticStyle:{"margin-top":"55px"}},[t._v("Current")]),a("div",{staticStyle:{margin:"auto",width:"90%","padding-top":"150px","text-align":"center",height:"45%"}},[a("p",{staticStyle:{display:"inline",color:"yellow","font-size":"56px"}},[t._v(t._s(t.Current)+" A")])])]),a("div",{staticClass:"mein-sections state"},[a("div",{staticStyle:{"margin-top":"55px"}},[t._v("State")]),a("div",{staticStyle:{margin:"auto",width:"90%","padding-top":"150px","text-align":"center",height:"45%",color:"yellow"}},[t._v(t._s(t.cycleData.Status))])]),a("div",{staticClass:"mein-sections volt"},[a("div",{staticStyle:{"margin-top":"55px"}},[t._v("Voltage")]),a("div",{staticStyle:{margin:"auto",width:"90%","padding-top":"150px","text-align":"center",height:"45%"}},[a("p",{staticStyle:{display:"inline",color:"yellow","font-size":"56px"}},[t._v(t._s(t.Voltage)+" V")])])]),a("div",{staticClass:"mein-sections speed-arc"},[a("div",[t._v("Speed: "),a("p",{staticStyle:{display:"inline",color:"yellow"}},[t._v(t._s(t.TravelSpeed))]),a("p",{staticStyle:{color:"yellow","font-size":"20px"}},[t._v("(CM/Min)")])]),a("div",[t._v("AL: "),a("p",{staticStyle:{display:"inline",color:"yellow"}},[t._v(t._s(t.cycleData.ArcL)+" V")])]),a("div",[t._v("AC: "),a("p",{staticStyle:{display:"inline",color:"yellow"}},[t._v(t._s(t.cycleData.ArcC)+" V")])])])]),a("div",{staticClass:"footer",staticStyle:{border:"1px rgb(61, 61, 65) solid"}},[t._v(" System messages: "),a("p",[t._v(t._s(t.cycleData.SystemMessage))])])])},j=[],N={name:"Dashboard3001",components:{},data:function(){return{socket:w()("127.0.0.1:3001"),cycleData:{},Current:0,Voltage:0,Zpos:0,Ypos:0,ThetaPos:0,InputHeat:0,TravelSpeed:0}},methods:{navigate:function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,z.$emit("ListUpdated",e);case 2:return t.next=4,this.$router.push({path:e.target});case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},mounted:function(){var t=this;this.socket.on("GET_DATA",(function(e){var a=e;t.cycleData=a,t.Current=Number(a.Current).toFixed(2),t.Voltage=Number(a.Voltage).toFixed(2),t.YPos=Number(a.Ypos).toFixed(2),t.ZPos=Number(a.Zpos).toFixed(2),t.ThetaPos=Number(a.ThetaPos).toFixed(2),t.InputHeat=Number(a.InputHeat).toFixed(2),t.TravelSpeed=Number(a.TravelSpeed).toFixed(2)})),this.socket.on("NAV",(function(e){t.navigate(e)})),this.socket.on("DASH",(function(){t.$router.push({path:"/"})}))}},O=N,V=(a("14e3"),Object(c["a"])(O,A,j,!1,null,"5ab7b391",null)),k=V.exports,F=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("p",[t._v("404")])])}],$={},H=$,Y=(a("9705"),Object(c["a"])(H,F,M,!1,null,"78fa3a56",null)),Z=Y.exports;s["default"].use(d["a"]);var I=new d["a"]({routes:[{path:"/list",name:"list",component:h},{path:"/",name:"Dashboard3001",component:k},{path:"/dash3000",name:"Dashboard3000",component:T},{path:"*",component:Z}]});s["default"].config.productionTip=!1;var z=new s["default"];new s["default"]({router:I,render:function(t){return t(p)}}).$mount("#app"),s["default"].use(u["a"])},6399:function(t,e,a){},"7caa":function(t,e,a){"use strict";var s=a("0987"),i=a.n(s);i.a},"85ec":function(t,e,a){},9705:function(t,e,a){"use strict";var s=a("9c69"),i=a.n(s);i.a},"9c69":function(t,e,a){},a890:function(t,e,a){}});
//# sourceMappingURL=app.bb850395.js.map