(function(t){function e(e){for(var r,a,u=e[0],c=e[1],i=e[2],f=0,p=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,i||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},s=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var i=0;i<u.length;i++)e(u[i]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1054:function(t,e,n){"use strict";n("cac9")},"1c81":function(t,e,n){"use strict";n("dc75")},43626:function(t,e,n){"use strict";n("4b1b")},"4b1b":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("h1",[t._v("API NEWS LISTS")]),e("div",{staticClass:"wrap"},[e("toolBar"),e("routerView")],1)])},s=[],a=function(){var t=this,e=t._self._c;return e("header",{staticClass:"header"},[e("router-link",{attrs:{to:"/news"}},[t._v("News")]),e("router-link",{attrs:{to:"/ask"}},[t._v("Ask")]),e("router-link",{attrs:{to:"/jobs"}},[t._v("Jobs")])],1)},u=[],c=(n("43626"),n("2877")),i={},l=Object(c["a"])(i,a,u,!1,null,"03856457",null),f=l.exports,p={components:{ToolBar:f}},b=p,d=(n("1054"),Object(c["a"])(b,o,s,!1,null,null,null)),h=d.exports,v=n("8c4f"),_=function(){var t=this,e=t._self._c;return e("ul",{staticClass:"lists"},t._l(t.users,(function(n){return e("li",{key:n},[t._v(t._s(n.title))])})),0)},j=[],y=n("bc3a"),w=n.n(y);const g={baseUrl:"https://api.hnpwa.com/v0/"};function k(){return w.a.get(g.baseUrl+"news/1.json")}function O(){return w.a.get(g.baseUrl+"jobs/1.json")}function m(){return w.a.get(g.baseUrl+"ask/1.json")}var x={data(){return{users:[]}},created(){k().then(t=>this.users=t.data).catch(t=>console.log(t))}},P=x,S=(n("a098"),Object(c["a"])(P,_,j,!1,null,"55c755b4",null)),C=S.exports,T=function(){var t=this,e=t._self._c;return e("ul",{staticClass:"lists"},t._l(t.ask,(function(n){return e("li",{key:n},[t._v(t._s(n.title))])})),0)},M=[],U={data(){return{ask:[]}},created(){m().then(t=>this.ask=t.data).catch(t=>console.log(t))}},J=U,A=(n("1c81"),Object(c["a"])(J,T,M,!1,null,"ba14b2c6",null)),B=A.exports,I=function(){var t=this,e=t._self._c;return e("ul",{staticClass:"lists"},t._l(t.jobs,(function(n){return e("li",{key:n},[t._v(t._s(n.title))])})),0)},N=[],E={data(){return{jobs:[]}},created(){O().then(t=>this.jobs=t.data).catch(t=>console.log(t))}},L=E,V=(n("ee07"),Object(c["a"])(L,I,N,!1,null,"524bbd22",null)),W=V.exports;r["a"].use(v["a"]);const $=new v["a"]({mode:"history",routes:[{path:"/",redirect:"/news"},{path:"/news",component:C},{path:"/ask",component:B},{path:"/jobs",component:W}]});r["a"].config.productionTip=!1,new r["a"]({render:t=>t(h),router:$}).$mount("#app")},8321:function(t,e,n){},a098:function(t,e,n){"use strict";n("ade3")},ade3:function(t,e,n){},cac9:function(t,e,n){},dc75:function(t,e,n){},ee07:function(t,e,n){"use strict";n("8321")}});
//# sourceMappingURL=app.08691c1a.js.map