(this["webpackJsonpbeldtp-map"]=this["webpackJsonpbeldtp-map"]||[]).push([[0],{37:function(e,t,a){e.exports=a(70)},60:function(e,t,a){},67:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(29),i=a.n(o),c=a(18),s=a.n(c),l=a(30),u=a(10),d=a(11),m=a(16),p=a(15),h=a(31),f=a.n(h),v=a(73),g=a(76),k=a(74),b=a(77),E=(a(60),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"getMarkers",value:function(){return this.props.value.map((function(e){return r.a.createElement(v.a,{key:e.id,position:[e.latitude,e.longitude]},r.a.createElement(g.a,null,"id - ",e.id))}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k.a,{center:[53.904541,27.561523],zoom:6},r.a.createElement(b.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),this.getMarkers()))}}]),a}(n.Component)),w=a(75),y=(a(67),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={isLoaded:!1,isLoadPage:!1,markers:[],fromTime:null,toTime:null},n}return Object(d.a)(a,[{key:"handle",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.isLoaded){e.next=3;break}return e.next=3,f.a.get("https://142.93.35.133:8080/incident/getAllMarker",{ignoreSSL:!0}).then((function(e){t.setState({isLoaded:!0}),t.setState({isLoadPage:!0}),t.setState({markers:e.data})})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.handle(),this.state.isLoaded?r.a.createElement("div",null,r.a.createElement("div",{class:"div2"},r.a.createElement(E,{value:this.state.markers}))):r.a.createElement("div",{className:"preloader"},r.a.createElement("div",{className:"preloader__loader"},r.a.createElement(w.a,{animation:"grow",size:"lg"})))}}]),a}(n.Component));a(68);var O=function(){return r.a.createElement(y,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(69);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.97384724.chunk.js.map