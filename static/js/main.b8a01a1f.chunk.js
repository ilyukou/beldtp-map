(this["webpackJsonpbeldtp-map"]=this["webpackJsonpbeldtp-map"]||[]).push([[0],{31:function(e,t,a){e.exports=a.p+"static/media/file1.ebc7f636.png"},34:function(e,t,a){e.exports=a(68)},57:function(e,t,a){},58:function(e,t,a){},65:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(28),c=a.n(i),o=a(17),l=a.n(o),u=a(29),s=a(9),p=a(10),m=a(15),d=a(14),h=a(30),f=a.n(h),g=a(70),v=a(72),k=a(71),y=a(73),b=(a(57),a(58),a(31)),E=a.n(b),O=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"getMarkers",value:function(){var e=this;return this.props.value.map((function(t){return r.a.createElement(g.a,{key:t.id,position:[t.latitude,t.longitude]},r.a.createElement(v.a,null,e.getMarkerInfo(t)))}))}},{key:"getMarkerInfo",value:function(e){return r.a.createElement("div",{className:"popupInfoWrapperDiv"},this.getMarkerImgAsDiv(e.attachmentFile),r.a.createElement("div",{className:"popup popupText",dangerouslySetInnerHTML:this.createMarkup(e)}),r.a.createElement("div",{className:"popup"},this.getDataAsDiv(e)))}},{key:"createMarkup",value:function(e){return{__html:e.text}}},{key:"getDataAsDiv",value:function(e){var t=e.hour;t<10&&(t="0"+t);var a=e.minute;return a<10&&(a="0"+a),r.a.createElement("span",null,t,":",a," ",e.day,"/",e.month+1,"/",e.year)}},{key:"getMarkerImgAsDiv",value:function(e){var t=this;return e.map((function(e){return t.getAttachment(e)}))}},{key:"getAttachment",value:function(e){return"PHOTO"===e.mediaType||"PHOTO_PNG"===e.mediaType||"PHOTO_JPG"===e.mediaType?r.a.createElement("img",{key:e.fileName,className:"scale popupImage",alt:"img",src:"https://beldtp.ams3.digitaloceanspaces.com/beldtp/"+e.fileName,height:"120",width:"120"}):r.a.createElement("a",{key:e.fileName,href:"https://beldtp.ams3.digitaloceanspaces.com/beldtp/"+e.fileName},r.a.createElement("img",{alt:"img",src:E.a,height:"120",width:"120"}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k.a,{center:[53.904541,27.561523],zoom:6},r.a.createElement(y.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),this.getMarkers()))}}]),a}(n.Component),w=(a(65),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={data:null,isLoding:!0},n}return Object(p.a)(a,[{key:"getBackupFromS3",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://beldtp.ams3.digitaloceanspaces.com/beldtp/backup.json",{headers:{"Content-Type":"application/octet-stream"}}).then((function(e){console.log(e),t.setState({data:e.data}),t.setState({isLoding:!1})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return document.title="\u041a\u0430\u0440\u0442\u0430 \u0414\u0422\u041f",this.state.isLoding?(this.getBackupFromS3(),r.a.createElement("div",null,r.a.createElement(O,{value:[]}))):r.a.createElement("div",null,r.a.createElement(O,{value:this.state.data.incident}))}}]),a}(n.Component));a(66);var M=function(){return r.a.createElement(w,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(67);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.b8a01a1f.chunk.js.map