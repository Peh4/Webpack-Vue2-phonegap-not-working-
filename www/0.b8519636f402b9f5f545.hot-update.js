webpackHotUpdate(0,{

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(25);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Messages_vue__ = __webpack_require__(63);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Messages_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Messages_vue__);\n\n\n\n\nvar jquery = __webpack_require__(54);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'hello',\n  components: {\n    Messages: __WEBPACK_IMPORTED_MODULE_1__Messages_vue___default.a\n  },\n  data: function data() {\n    return {\n      title: 'loading',\n      inputBar: '',\n      btn: 'name',\n      messages: [],\n      users: {},\n      typing: false,\n      isWriting: false,\n      usersTyping: {},\n      name: '',\n      team: '',\n      previousAuthor: ''\n    };\n  },\n\n  watch: {\n    inputBar: function inputBar(data) {\n      if (data && !this.typing) {\n        this.$socket.emit('typing on');\n\n        this.typing = true;\n      } else if (!data && this.typing) {\n        this.$socket.emit('typing off');\n        this.typing = false;\n      }\n    },\n    messages: function messages() {\n      setTimeout(function () {\n        jquery('#messages').scrollTop(99999999999);\n        console.log('scroll');\n      }, 100);\n    }\n  },\n  sockets: {\n    'on join': function onJoin(data) {\n      this.users = data.users;\n      console.log('on join');\n    },\n    'joined': function joined(data) {\n      this.users = data.users;\n      this.btn = 'message';\n    },\n    'on leave': function onLeave(data) {},\n    'on message': function onMessage(data) {\n      if (this.previousAuthor === data.username) {\n        data.samePreviousAuthor = true;\n      }\n      data.team = this.users[data.username].team;\n      this.messages.push(data);\n      this.previousAuthor = data.username;\n    },\n    'on typing on': function onTypingOn(data) {\n      this.usersTyping[data.username] = data.username;\n      console.log(data.username + ' strat typing');\n      if (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(this.usersTyping).length) {\n        this.isWriting = true;\n      }\n    },\n    'on typing off': function onTypingOff(data) {\n      delete this.usersTyping[data.username];\n      console.log(data.username + ' stop typing');\n      if (!__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(this.usersTyping).length) {\n        this.isWriting = false;\n      }\n    },\n    erreur: function erreur(data) {\n      console.log(data);\n    }\n  },\n  mounted: function mounted() {\n    var salons = 'http://bazarettes.peh4.com/wp-json/wp/v2/posts';\n    var vm = this;\n    jquery.when(jquery.getJSON(salons), jquery.ready).done(function (data) {\n      vm.title = data[0][0].title.rendered;\n    }).fail(function (err) {\n      console.log('JSON load fail' + err);\n    });\n  },\n  methods: {\n    resetInput: function resetInput() {\n      this.inputBar = '';\n    },\n    joinChat: function joinChat(entry) {\n      var input = entry.target.previousSibling.value;\n      if (input) {\n        if (!this.name) {\n          this.name = input;\n          this.btn = 'équipe';\n          this.resetInput();\n        } else if (!this.team) {\n          this.team = input;\n          this.inputBar = '';\n          this.$socket.emit('join', {\n            'name': this.name,\n            'id': null,\n            'team': this.team\n          });\n          this.btn = 'message';\n          console.log('join ' + this.name + ' de la team ' + this.team);\n        } else {\n          this.$socket.emit('message', input);\n          this.previousAuthor = 'me';\n          this.messages.push({ username: this.name, team: this.team, content: input, samePreviousAuthor: false, me: true });\n          this.inputBar = '';\n        }\n      }\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vSGVsbG8udnVlP2JmYzciXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiaGVsbG9cIj5cbiAgICA8aDEgdi1odG1sPVwidGl0bGVcIj48L2gxPlxuICAgIDx1bD5cbiAgICAgIDxsaSB2LWZvcj1cInVzZXIgaW4gdXNlcnNcIj5cbiAgICAgICAge3t1c2VyLm5hbWV9fVxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICAgIDxtZXNzYWdlcyBpZD1cIm1lc3NhZ2VzXCIgOm1lc3NhZ2VzPVwibWVzc2FnZXNcIj48L21lc3NhZ2VzPlxuICAgIDxwIHYtaWY9XCJpc1dyaXRpbmdcIj5RdWVscXUndW4gw6ljcml0IHVuIG1lc3NhZ2XigKY8L3A+XG4gICAgPGZvcm0gaWQ9XCJ0ZXh0XCIgYWN0aW9uPVwiXCI+XG4gICAgICA8aW5wdXQgdi1tb2RlbD1cImlucHV0QmFyXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgLz48YnV0dG9uIEBjbGljaz1cImpvaW5DaGF0XCI+e3tidG59fTwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IE1lc3NhZ2VzIGZyb20gJy4vTWVzc2FnZXMudnVlJ1xudmFyIGpxdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdoZWxsbycsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBNZXNzYWdlc1xuICB9LFxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICdsb2FkaW5nJyxcbiAgICAgIGlucHV0QmFyOiAnJyxcbiAgICAgIGJ0bjogJ25hbWUnLFxuICAgICAgbWVzc2FnZXM6IFtdLFxuICAgICAgdXNlcnM6IHt9LFxuICAgICAgdHlwaW5nOiBmYWxzZSxcbiAgICAgIGlzV3JpdGluZzogZmFsc2UsXG4gICAgICB1c2Vyc1R5cGluZzoge30sXG4gICAgICBuYW1lOiAnJyxcbiAgICAgIHRlYW06ICcnLFxuICAgICAgcHJldmlvdXNBdXRob3I6ICcnXG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIGlucHV0QmFyOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgaWYgKGRhdGEgJiYgIXRoaXMudHlwaW5nKSB7XG4gICAgICAgIHRoaXMuJHNvY2tldC5lbWl0KCd0eXBpbmcgb24nKVxuICAgICAgICAvLyBwb3VyIHNpZ25hbGVyIHVuZSBzZXVsZSBmb2lzXG4gICAgICAgIHRoaXMudHlwaW5nID0gdHJ1ZVxuICAgICAgfSBlbHNlIGlmICghZGF0YSAmJiB0aGlzLnR5cGluZykge1xuICAgICAgICB0aGlzLiRzb2NrZXQuZW1pdCgndHlwaW5nIG9mZicpXG4gICAgICAgIHRoaXMudHlwaW5nID0gZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuICAgIG1lc3NhZ2VzOiBmdW5jdGlvbiAoKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAganF1ZXJ5KCcjbWVzc2FnZXMnKS5zY3JvbGxUb3AoOTk5OTk5OTk5OTkpXG4gICAgICAgIGNvbnNvbGUubG9nKCdzY3JvbGwnKVxuICAgICAgfSwgMTAwKVxuICAgIH1cbiAgfSxcbiAgc29ja2V0czoge1xuICAgICdvbiBqb2luJzogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHRoaXMudXNlcnMgPSBkYXRhLnVzZXJzXG4gICAgICBjb25zb2xlLmxvZygnb24gam9pbicpXG4gICAgfSxcbiAgICAnam9pbmVkJzogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHRoaXMudXNlcnMgPSBkYXRhLnVzZXJzXG4gICAgICB0aGlzLmJ0biA9ICdtZXNzYWdlJ1xuICAgIH0sXG4gICAgJ29uIGxlYXZlJzogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICB9LFxuICAgICdvbiBtZXNzYWdlJzogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGlmICh0aGlzLnByZXZpb3VzQXV0aG9yID09PSBkYXRhLnVzZXJuYW1lKSB7XG4gICAgICAgIGRhdGEuc2FtZVByZXZpb3VzQXV0aG9yID0gdHJ1ZVxuICAgICAgfVxuICAgICAgZGF0YS50ZWFtID0gdGhpcy51c2Vyc1tkYXRhLnVzZXJuYW1lXS50ZWFtXG4gICAgICB0aGlzLm1lc3NhZ2VzLnB1c2goZGF0YSlcbiAgICAgIHRoaXMucHJldmlvdXNBdXRob3IgPSBkYXRhLnVzZXJuYW1lXG4gICAgfSxcbiAgICAnb24gdHlwaW5nIG9uJzogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHRoaXMudXNlcnNUeXBpbmdbZGF0YS51c2VybmFtZV0gPSBkYXRhLnVzZXJuYW1lXG4gICAgICBjb25zb2xlLmxvZyhkYXRhLnVzZXJuYW1lICsgJyBzdHJhdCB0eXBpbmcnKVxuICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMudXNlcnNUeXBpbmcpLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmlzV3JpdGluZyA9IHRydWVcbiAgICAgIH1cbiAgICB9LFxuICAgICdvbiB0eXBpbmcgb2ZmJzogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLnVzZXJzVHlwaW5nW2RhdGEudXNlcm5hbWVdXG4gICAgICBjb25zb2xlLmxvZyhkYXRhLnVzZXJuYW1lICsgJyBzdG9wIHR5cGluZycpXG4gICAgICBpZiAoIU9iamVjdC5rZXlzKHRoaXMudXNlcnNUeXBpbmcpLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmlzV3JpdGluZyA9IGZhbHNlXG4gICAgICB9XG4gICAgfSxcbiAgICBlcnJldXI6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgIHZhciBzYWxvbnMgPSAnaHR0cDovL2JhemFyZXR0ZXMucGVoNC5jb20vd3AtanNvbi93cC92Mi9wb3N0cydcbiAgICB2YXIgdm0gPSB0aGlzXG4gICAganF1ZXJ5LndoZW4oXG4gICAgICBqcXVlcnkuZ2V0SlNPTihzYWxvbnMpLFxuICAgICAganF1ZXJ5LnJlYWR5XG4gICAgKS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICB2bS50aXRsZSA9IGRhdGFbMF1bMF0udGl0bGUucmVuZGVyZWRcbiAgICB9KS5mYWlsKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdKU09OIGxvYWQgZmFpbCcgKyBlcnIpXG4gICAgfSlcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHJlc2V0SW5wdXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuaW5wdXRCYXIgPSAnJ1xuICAgIH0sXG4gICAgam9pbkNoYXQ6IGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgdmFyIGlucHV0ID0gZW50cnkudGFyZ2V0LnByZXZpb3VzU2libGluZy52YWx1ZVxuICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgIGlmICghdGhpcy5uYW1lKSB7XG4gICAgICAgICAgdGhpcy5uYW1lID0gaW5wdXRcbiAgICAgICAgICB0aGlzLmJ0biA9ICfDqXF1aXBlJ1xuICAgICAgICAgIHRoaXMucmVzZXRJbnB1dCgpXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMudGVhbSkge1xuICAgICAgICAgIHRoaXMudGVhbSA9IGlucHV0XG4gICAgICAgICAgdGhpcy5pbnB1dEJhciA9ICcnXG4gICAgICAgICAgdGhpcy4kc29ja2V0LmVtaXQoJ2pvaW4nLCB7XG4gICAgICAgICAgICAnbmFtZSc6IHRoaXMubmFtZSxcbiAgICAgICAgICAgICdpZCc6IG51bGwsXG4gICAgICAgICAgICAndGVhbSc6IHRoaXMudGVhbVxuICAgICAgICAgIH0pXG4gICAgICAgICAgdGhpcy5idG4gPSAnbWVzc2FnZSdcbiAgICAgICAgICBjb25zb2xlLmxvZygnam9pbiAnICsgdGhpcy5uYW1lICsgJyBkZSBsYSB0ZWFtICcgKyB0aGlzLnRlYW0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy4kc29ja2V0LmVtaXQoJ21lc3NhZ2UnLCBpbnB1dClcbiAgICAgICAgICB0aGlzLnByZXZpb3VzQXV0aG9yID0gJ21lJ1xuICAgICAgICAgIHRoaXMubWVzc2FnZXMucHVzaCh7dXNlcm5hbWU6IHRoaXMubmFtZSwgdGVhbTogdGhpcy50ZWFtLCBjb250ZW50OiBpbnB1dCwgc2FtZVByZXZpb3VzQXV0aG9yOiBmYWxzZSwgbWU6IHRydWV9KVxuICAgICAgICAgIHRoaXMuaW5wdXRCYXIgPSAnJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbjwvc2NyaXB0PlxuXG48IS0tIEFkZCBcInNjb3BlZFwiIGF0dHJpYnV0ZSB0byBsaW1pdCBDU1MgdG8gdGhpcyBjb21wb25lbnQgb25seSAtLT5cbjxzdHlsZSBzY29wZWQ+XG4gIC5oZWxsbyB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgfVxuICAjbWVzc2FnZXMge1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgcGFkZGluZzogMnB4IDJweCA1cHggMjBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICB9XG4gICN0ZXh0IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAycHg7XG4gICAgbGVmdDogMnB4O1xuICAgIFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3gtc2hhZG93OiBub25lO1xuXG4gIH1cbiAgI3RleHQgaW5wdXQge1xuICAgICAgYmFja2dyb3VuZDogI2ZmZiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgcGFkZGluZzogNHB4O1xuICB9XG4gIFxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBIZWxsby52dWU/MTRhZTJhMjYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBaUJBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFhQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaEJBOztBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5DQTtBQXFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTVCQTtBQXZGQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})