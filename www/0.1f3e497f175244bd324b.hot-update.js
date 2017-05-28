webpackHotUpdate(0,{

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(25);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Messages_vue__ = __webpack_require__(63);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Messages_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Messages_vue__);\n\n\n\n\nvar jquery = __webpack_require__(54);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'hello',\n  components: {\n    Messages: __WEBPACK_IMPORTED_MODULE_1__Messages_vue___default.a\n  },\n  data: function data() {\n    return {\n      title: 'loading',\n      inputBar: '',\n      btn: 'name',\n      messages: [],\n      users: {},\n      typing: false,\n      isWriting: false,\n      usersTyping: {},\n      name: '',\n      team: '',\n      previousAuthor: ''\n    };\n  },\n\n  watch: {\n    inputBar: function inputBar(data) {\n      if (data && !this.typing) {\n        this.$socket.emit('typing on');\n\n        this.typing = true;\n      } else if (!data && this.typing) {\n        this.$socket.emit('typing off');\n        this.typing = false;\n      }\n    },\n    messages: function messages() {\n      setTimeout(function () {\n        jquery('.messages').scrollTop(99999999999);\n        console.log('scroll');\n      }, 100);\n    }\n  },\n  sockets: {\n    'on join': function onJoin(data) {\n      this.users = data.users;\n      console.log('on join');\n    },\n    'joined': function joined(data) {\n      this.users = data.users;\n      this.btn = 'message';\n    },\n    'on leave': function onLeave(data) {},\n    'on message': function onMessage(data) {\n      if (this.previousAuthor === data.username) {\n        data.samePreviousAuthor = true;\n        console.log(data.samePreviousAuthor);\n      }\n      this.messages.unshift(data);\n      this.previousAuthor = data.username;\n    },\n    'on typing on': function onTypingOn(data) {\n      this.usersTyping[data.username] = data.username;\n      console.log(data.username + ' strat typing');\n      if (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(this.usersTyping).length) {\n        this.isWriting = true;\n      }\n    },\n    'on typing off': function onTypingOff(data) {\n      delete this.usersTyping[data.username];\n      console.log(data.username + ' stop typing');\n      if (!__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(this.usersTyping).length) {\n        this.isWriting = false;\n      }\n    },\n    erreur: function erreur(data) {\n      console.log(data);\n    }\n  },\n  mounted: function mounted() {\n    var salons = 'http://bazarettes.peh4.com/wp-json/wp/v2/posts';\n    var vm = this;\n    jquery.when(jquery.getJSON(salons), jquery.ready).done(function (data) {\n      vm.title = data[0][0].title.rendered;\n    }).fail(function (err) {\n      console.log('JSON load fail' + err);\n    });\n  },\n  methods: {\n    resetInput: function resetInput() {\n      this.inputBar = '';\n    },\n    joinChat: function joinChat(entry) {\n      var input = entry.target.previousSibling.value;\n      if (input) {\n        if (!this.name) {\n          this.name = input;\n          this.btn = 'équipe';\n          this.resetInput();\n        } else if (!this.team) {\n          this.team = input;\n          this.inputBar = '';\n          this.$socket.emit('join', {\n            'name': this.name,\n            'id': null,\n            'team': this.team\n          });\n          this.btn = 'message';\n          console.log('join ' + this.name + ' de la team ' + this.team);\n        } else {\n          this.$socket.emit('message', input);\n          this.previousAuthor = 'me';\n          this.messages.unshift({ username: this.name, team: this.team, content: input, samePreviousAuthor: false, me: true });\n          this.inputBar = '';\n        }\n      }\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vSGVsbG8udnVlPzg2ZTciXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiaGVsbG9cIj5cbiAgICA8aDEgdi1odG1sPVwidGl0bGVcIj48L2gxPlxuICAgIDx1bD5cbiAgICAgIDxsaSB2LWZvcj1cInVzZXIgaW4gdXNlcnNcIj5cbiAgICAgICAge3t1c2VyLm5hbWV9fVxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICAgIDxtZXNzYWdlcyA6bWVzc2FnZXM9XCJtZXNzYWdlc1wiPjwvbWVzc2FnZXM+XG4gICAgPHAgdi1pZj1cImlzV3JpdGluZ1wiPlF1ZWxxdSd1biDDqWNyaXQgdW4gbWVzc2FnZeKApjwvcD5cbiAgICA8Zm9ybSBpZD1cInRleHRcIiBhY3Rpb249XCJcIj5cbiAgICAgIDxpbnB1dCB2LW1vZGVsPVwiaW5wdXRCYXJcIiBhdXRvY29tcGxldGU9XCJvZmZcIiAvPjxidXR0b24gQGNsaWNrPVwiam9pbkNoYXRcIj57e2J0bn19PC9idXR0b24+XG4gICAgPC9mb3JtPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgTWVzc2FnZXMgZnJvbSAnLi9NZXNzYWdlcy52dWUnXG52YXIganF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5JylcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2hlbGxvJyxcbiAgY29tcG9uZW50czoge1xuICAgIE1lc3NhZ2VzXG4gIH0sXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ2xvYWRpbmcnLFxuICAgICAgaW5wdXRCYXI6ICcnLFxuICAgICAgYnRuOiAnbmFtZScsXG4gICAgICBtZXNzYWdlczogW10sXG4gICAgICB1c2Vyczoge30sXG4gICAgICB0eXBpbmc6IGZhbHNlLFxuICAgICAgaXNXcml0aW5nOiBmYWxzZSxcbiAgICAgIHVzZXJzVHlwaW5nOiB7fSxcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgdGVhbTogJycsXG4gICAgICBwcmV2aW91c0F1dGhvcjogJydcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgaW5wdXRCYXI6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBpZiAoZGF0YSAmJiAhdGhpcy50eXBpbmcpIHtcbiAgICAgICAgdGhpcy4kc29ja2V0LmVtaXQoJ3R5cGluZyBvbicpXG4gICAgICAgIC8vIHBvdXIgc2lnbmFsZXIgdW5lIHNldWxlIGZvaXNcbiAgICAgICAgdGhpcy50eXBpbmcgPSB0cnVlXG4gICAgICB9IGVsc2UgaWYgKCFkYXRhICYmIHRoaXMudHlwaW5nKSB7XG4gICAgICAgIHRoaXMuJHNvY2tldC5lbWl0KCd0eXBpbmcgb2ZmJylcbiAgICAgICAgdGhpcy50eXBpbmcgPSBmYWxzZVxuICAgICAgfVxuICAgIH0sXG4gICAgbWVzc2FnZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBqcXVlcnkoJy5tZXNzYWdlcycpLnNjcm9sbFRvcCg5OTk5OTk5OTk5OSlcbiAgICAgICAgY29uc29sZS5sb2coJ3Njcm9sbCcpXG4gICAgICB9LCAxMDApXG4gICAgfVxuICB9LFxuICBzb2NrZXRzOiB7XG4gICAgJ29uIGpvaW4nOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgdGhpcy51c2VycyA9IGRhdGEudXNlcnNcbiAgICAgIGNvbnNvbGUubG9nKCdvbiBqb2luJylcbiAgICB9LFxuICAgICdqb2luZWQnOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgdGhpcy51c2VycyA9IGRhdGEudXNlcnNcbiAgICAgIHRoaXMuYnRuID0gJ21lc3NhZ2UnXG4gICAgfSxcbiAgICAnb24gbGVhdmUnOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgIH0sXG4gICAgJ29uIG1lc3NhZ2UnOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgaWYgKHRoaXMucHJldmlvdXNBdXRob3IgPT09IGRhdGEudXNlcm5hbWUpIHtcbiAgICAgICAgZGF0YS5zYW1lUHJldmlvdXNBdXRob3IgPSB0cnVlXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEuc2FtZVByZXZpb3VzQXV0aG9yKVxuICAgICAgfVxuICAgICAgdGhpcy5tZXNzYWdlcy51bnNoaWZ0KGRhdGEpXG4gICAgICB0aGlzLnByZXZpb3VzQXV0aG9yID0gZGF0YS51c2VybmFtZVxuICAgIH0sXG4gICAgJ29uIHR5cGluZyBvbic6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICB0aGlzLnVzZXJzVHlwaW5nW2RhdGEudXNlcm5hbWVdID0gZGF0YS51c2VybmFtZVxuICAgICAgY29uc29sZS5sb2coZGF0YS51c2VybmFtZSArICcgc3RyYXQgdHlwaW5nJylcbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLnVzZXJzVHlwaW5nKS5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5pc1dyaXRpbmcgPSB0cnVlXG4gICAgICB9XG4gICAgfSxcbiAgICAnb24gdHlwaW5nIG9mZic6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBkZWxldGUgdGhpcy51c2Vyc1R5cGluZ1tkYXRhLnVzZXJuYW1lXVxuICAgICAgY29uc29sZS5sb2coZGF0YS51c2VybmFtZSArICcgc3RvcCB0eXBpbmcnKVxuICAgICAgaWYgKCFPYmplY3Qua2V5cyh0aGlzLnVzZXJzVHlwaW5nKS5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5pc1dyaXRpbmcgPSBmYWxzZVxuICAgICAgfVxuICAgIH0sXG4gICAgZXJyZXVyOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2Fsb25zID0gJ2h0dHA6Ly9iYXphcmV0dGVzLnBlaDQuY29tL3dwLWpzb24vd3AvdjIvcG9zdHMnXG4gICAgdmFyIHZtID0gdGhpc1xuICAgIGpxdWVyeS53aGVuKFxuICAgICAganF1ZXJ5LmdldEpTT04oc2Fsb25zKSxcbiAgICAgIGpxdWVyeS5yZWFkeVxuICAgICkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgdm0udGl0bGUgPSBkYXRhWzBdWzBdLnRpdGxlLnJlbmRlcmVkXG4gICAgfSkuZmFpbChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZygnSlNPTiBsb2FkIGZhaWwnICsgZXJyKVxuICAgIH0pXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICByZXNldElucHV0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmlucHV0QmFyID0gJydcbiAgICB9LFxuICAgIGpvaW5DaGF0OiBmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgIHZhciBpbnB1dCA9IGVudHJ5LnRhcmdldC5wcmV2aW91c1NpYmxpbmcudmFsdWVcbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICBpZiAoIXRoaXMubmFtZSkge1xuICAgICAgICAgIHRoaXMubmFtZSA9IGlucHV0XG4gICAgICAgICAgdGhpcy5idG4gPSAnw6lxdWlwZSdcbiAgICAgICAgICB0aGlzLnJlc2V0SW5wdXQoKVxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnRlYW0pIHtcbiAgICAgICAgICB0aGlzLnRlYW0gPSBpbnB1dFxuICAgICAgICAgIHRoaXMuaW5wdXRCYXIgPSAnJ1xuICAgICAgICAgIHRoaXMuJHNvY2tldC5lbWl0KCdqb2luJywge1xuICAgICAgICAgICAgJ25hbWUnOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAnaWQnOiBudWxsLFxuICAgICAgICAgICAgJ3RlYW0nOiB0aGlzLnRlYW1cbiAgICAgICAgICB9KVxuICAgICAgICAgIHRoaXMuYnRuID0gJ21lc3NhZ2UnXG4gICAgICAgICAgY29uc29sZS5sb2coJ2pvaW4gJyArIHRoaXMubmFtZSArICcgZGUgbGEgdGVhbSAnICsgdGhpcy50ZWFtKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuJHNvY2tldC5lbWl0KCdtZXNzYWdlJywgaW5wdXQpXG4gICAgICAgICAgdGhpcy5wcmV2aW91c0F1dGhvciA9ICdtZSdcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VzLnVuc2hpZnQoe3VzZXJuYW1lOiB0aGlzLm5hbWUsIHRlYW06IHRoaXMudGVhbSwgY29udGVudDogaW5wdXQsIHNhbWVQcmV2aW91c0F1dGhvcjogZmFsc2UsIG1lOiB0cnVlfSlcbiAgICAgICAgICB0aGlzLmlucHV0QmFyID0gJydcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG48L3NjcmlwdD5cblxuPCEtLSBBZGQgXCJzY29wZWRcIiBhdHRyaWJ1dGUgdG8gbGltaXQgQ1NTIHRvIHRoaXMgY29tcG9uZW50IG9ubHkgLS0+XG48c3R5bGUgc2NvcGVkPlxuICAuaGVsbG8ge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIH1cbiAgI3RleHQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDJweDtcbiAgICBsZWZ0OiAycHg7XG4gICAgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG5cbiAgfVxuICAjdGV4dCBpbnB1dCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmIG5vbmU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBwYWRkaW5nOiA0cHg7XG4gIH1cbiAgXG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEhlbGxvLnZ1ZT82YmI2MmM1YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFpQkE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7O0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkNBO0FBcUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBNUJBO0FBdkZBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})