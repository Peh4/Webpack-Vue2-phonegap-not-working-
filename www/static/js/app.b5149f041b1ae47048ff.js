webpackJsonp([1],[,,,,,,,,,,function(e,t,s){"use strict";var n=s(6),i=s(56),o=s(51),a=s.n(o);n.a.use(i.a),t.a=new i.a({routes:[{path:"/",name:"Hello",component:a.a}]})},function(e,t,s){s(47);var n=s(5)(s(14),s(53),null,null);e.exports=n.exports},,function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(6),i=s(11),o=s.n(i),a=s(10),r=s(12),u=s.n(r);n.a.config.productionTip=!1;var c={initialize:function(){this.bindEvents()},bindEvents:function(){document.addEventListener("deviceready",this.onDeviceReady,!1)},onDeviceReady:function(){c.receivedEvent("deviceready")},receivedEvent:function(e){n.a.use(u.a,"http://io.peh4.com:3001");var t=new n.a({el:"#app",router:a.a,template:"<App/>",components:{App:o.a},data:{join:!1,name:null,users:[],message:null,messages:{}},sockets:{connect:function(){console.log("socket conected")},"add user":function(e){this.users.push(e),console.log(e.name)}}});console.log(t.users)}};c.initialize()},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"},s(44),s(45),s(46)},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(17),i=s.n(n),o=s(52),a=s.n(o),r=s(50);t.default={name:"hello",components:{Messages:a.a},data:function(){return{title:"loading",inputBar:"",btn:"name",messages:[],users:{},typing:!1,isWriting:!1,usersTyping:{},name:"",team:"",previousAuthor:""}},watch:{inputBar:function(e){e&&!this.typing?(this.$socket.emit("typing on"),this.typing=!0):!e&&this.typing&&(this.$socket.emit("typing off"),this.typing=!1)},messages:function(){setTimeout(function(){r("#messages").scrollTop(99999999999),console.log("scroll")},100)}},sockets:{"on join":function(e){this.users=e.users,console.log("on join")},joined:function(e){this.users=e.users,this.btn="message"},"on leave":function(e){},"on message":function(e){this.previousAuthor===e.username&&(e.samePreviousAuthor=!0),this.messages.push(e),this.previousAuthor=e.username},"on typing on":function(e){this.usersTyping[e.username]=e.username,console.log(e.username+" strat typing"),i()(this.usersTyping).length&&(this.isWriting=!0)},"on typing off":function(e){delete this.usersTyping[e.username],console.log(e.username+" stop typing"),i()(this.usersTyping).length||(this.isWriting=!1)},erreur:function(e){console.log(e)}},mounted:function(){var e=this;r.when(r.getJSON("http://bazarettes.peh4.com/wp-json/wp/v2/posts"),r.ready).done(function(t){e.title=t[0][0].title.rendered}).fail(function(e){console.log("JSON load fail"+e)})},methods:{resetInput:function(){this.inputBar=""},joinChat:function(e){var t=e.target.previousSibling.value;t&&(this.name?this.team?(this.$socket.emit("message",t),this.previousAuthor="me",this.messages.push({username:this.name,team:this.team,content:t,samePreviousAuthor:!1,me:!0}),this.inputBar=""):(this.team=t,this.inputBar="",this.$socket.emit("join",{name:this.name,id:null,team:this.team}),this.btn="message",console.log("join "+this.name+" de la team "+this.team)):(this.name=t,this.btn="équipe",this.resetInput()))}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"messages",props:["messages"]}},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,function(e,t,s){s(49);var n=s(5)(s(15),s(55),"data-v-f90e3fa4",null);e.exports=n.exports},function(e,t,s){s(48);var n=s(5)(s(16),s(54),"data-v-6d8659a0",null);e.exports=n.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",{staticClass:"messages"},e._l(e.messages,function(t){return s("li",{staticClass:"message",class:[t.team,{isay:t.me},{samePreviousAuthor:t.samePreviousAuthor}]},[s("p",{staticClass:"name"},[e._v(e._s(t.username)+" : "+e._s(t.team))]),e._v(" "),s("div",[e._m(0,!0),e._v(" "),s("div",{staticClass:"content"},[s("p",[e._v(e._s(t.content))])])])])}))},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"user"},[s("span",{staticClass:"team"})])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"hello"},[s("h1",{domProps:{innerHTML:e._s(e.title)}}),e._v(" "),s("ul",e._l(e.users,function(t){return s("li",[e._v("\n      "+e._s(t.name)+"\n    ")])})),e._v(" "),s("messages",{attrs:{id:"messages",messages:e.messages}}),e._v(" "),e.isWriting?s("p",[e._v("Quelqu'un écrit un message…")]):e._e(),e._v(" "),s("form",{attrs:{id:"text",action:""}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.inputBar,expression:"inputBar"}],attrs:{autocomplete:"off"},domProps:{value:e.inputBar},on:{input:function(t){t.target.composing||(e.inputBar=t.target.value)}}}),s("button",{on:{click:e.joinChat}},[e._v(e._s(e.btn))])])],1)},staticRenderFns:[]}}],[13]);
//# sourceMappingURL=app.b5149f041b1ae47048ff.js.map