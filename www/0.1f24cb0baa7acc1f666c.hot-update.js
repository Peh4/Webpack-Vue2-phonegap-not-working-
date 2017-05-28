webpackHotUpdate(0,{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(35);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'hello',\n  data: function data() {\n    return {\n      title: 'loading',\n      inputBar: '',\n      typing: false,\n      btn: 'name',\n      messages: [],\n      users: {},\n      usersTyping: {},\n      name: '',\n      team: ''\n    };\n  },\n\n  watch: {\n    inputBar: function inputBar(data) {\n      if (data && !this.typing) {\n        this.$socket.emit('typing on');\n\n        this.typing = true;\n      } else if (!data && this.typing) {\n        this.$socket.emit('typing off');\n        this.typing = false;\n      }\n    }\n  },\n  sockets: {\n    'on join': function onJoin(data) {\n      this.users = data.users;\n    },\n    'joined': function joined(data) {\n      this.users = data.users;\n      this.btn = 'message';\n    },\n    'on leave': function onLeave(data) {},\n    'on message': function onMessage(data) {\n      this.messages.push(data);\n      console.log(this.messages);\n    },\n    'on typing on': function onTypingOn(data) {\n      this.usersTyping[data.username] = data.username;\n      console.log(data.username + ' strat typing');\n      console.log(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(this.usersTyping).length);\n    },\n    'on typing off': function onTypingOff(data) {\n      delete this.usersTyping[data.username];\n      console.log(data.username + ' stop typing');\n      console.log(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(this.usersTyping).length);\n    },\n    erreur: function erreur(data) {\n      console.log(data);\n    }\n  },\n  mounted: function mounted() {\n    var jquery = __webpack_require__(5);\n    var salons = 'http://bazarettes.peh4.com/wp-json/wp/v2/posts';\n    var vm = this;\n    jquery.when(jquery.getJSON(salons), jquery.ready).done(function (data) {\n      vm.title = data[0][0].title.rendered;\n    }).fail(function (err) {\n      console.log('JSON load fail' + err);\n    });\n  },\n  methods: {\n    joinChat: function joinChat(entry) {\n      var input = entry.target.previousSibling.value;\n      if (input) {\n        if (!this.name) {\n          this.name = input;\n          this.btn = 'équipe';\n          this.inputBar = '';\n        } else if (!this.team) {\n          this.team = input;\n          this.inputBar = '';\n          this.$socket.emit('join', {\n            'name': this.name,\n            'id': null,\n            'team': this.team\n          });\n          console.log('join ' + this.name + ' de la team ' + this.team);\n        } else {\n          this.$socket.emit('message', input);\n          this.messages.push({ username: this.name, content: input });\n          this.inputBar = '';\n        }\n      }\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vSGVsbG8udnVlP2Q4Y2QiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiaGVsbG9cIj5cbiAgICA8aDEgdi1odG1sPVwidGl0bGVcIj48L2gxPlxuICAgIDx1bD5cbiAgICAgIDxsaSB2LWZvcj1cInVzZXIgaW4gdXNlcnNcIj5cbiAgICAgICAge3t1c2VyLm5hbWV9fVxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICAgIDx1bD5cbiAgICAgIDxsaSB2LWZvcj1cIm1lc3NhZ2UgaW4gbWVzc2FnZXNcIj5cbiAgICAgICAge3ttZXNzYWdlLnVzZXJuYW1lfX0gOiB7e21lc3NhZ2UuY29udGVudH19XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICAgPHAgdi1pZj1cInVzZXJzVHlwaW5nWzBdXCI+d3JpdGluZ+KApjwvcD5cbiAgICA8Zm9ybSBhY3Rpb249XCJcIj5cbiAgICAgIDxpbnB1dCB2LW1vZGVsPVwiaW5wdXRCYXJcIiBpZD1cInRleHRcIiBhdXRvY29tcGxldGU9XCJvZmZcIiAvPjxidXR0b24gQGNsaWNrPVwiam9pbkNoYXRcIj57e2J0bn19PC9idXR0b24+XG4gICAgPC9mb3JtPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdoZWxsbycsXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ2xvYWRpbmcnLFxuICAgICAgaW5wdXRCYXI6ICcnLFxuICAgICAgdHlwaW5nOiBmYWxzZSxcbiAgICAgIGJ0bjogJ25hbWUnLFxuICAgICAgbWVzc2FnZXM6IFtdLFxuICAgICAgdXNlcnM6IHt9LFxuICAgICAgdXNlcnNUeXBpbmc6IHt9LFxuICAgICAgbmFtZTogJycsXG4gICAgICB0ZWFtOiAnJ1xuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBpbnB1dEJhcjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGlmIChkYXRhICYmICF0aGlzLnR5cGluZykge1xuICAgICAgICB0aGlzLiRzb2NrZXQuZW1pdCgndHlwaW5nIG9uJylcbiAgICAgICAgLy8gcG91ciBzaWduYWxlciB1bmUgc2V1bGUgZm9pc1xuICAgICAgICB0aGlzLnR5cGluZyA9IHRydWVcbiAgICAgIH0gZWxzZSBpZiAoIWRhdGEgJiYgdGhpcy50eXBpbmcpIHtcbiAgICAgICAgdGhpcy4kc29ja2V0LmVtaXQoJ3R5cGluZyBvZmYnKVxuICAgICAgICB0aGlzLnR5cGluZyA9IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBzb2NrZXRzOiB7XG4gICAgJ29uIGpvaW4nOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgdGhpcy51c2VycyA9IGRhdGEudXNlcnNcbiAgICB9LFxuICAgICdqb2luZWQnOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgdGhpcy51c2VycyA9IGRhdGEudXNlcnNcbiAgICAgIHRoaXMuYnRuID0gJ21lc3NhZ2UnXG4gICAgfSxcbiAgICAnb24gbGVhdmUnOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgIH0sXG4gICAgJ29uIG1lc3NhZ2UnOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKGRhdGEpXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLm1lc3NhZ2VzKVxuICAgIH0sXG4gICAgJ29uIHR5cGluZyBvbic6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICB0aGlzLnVzZXJzVHlwaW5nW2RhdGEudXNlcm5hbWVdID0gZGF0YS51c2VybmFtZVxuICAgICAgY29uc29sZS5sb2coZGF0YS51c2VybmFtZSArICcgc3RyYXQgdHlwaW5nJylcbiAgICAgIGNvbnNvbGUubG9nKE9iamVjdC5rZXlzKHRoaXMudXNlcnNUeXBpbmcpLmxlbmd0aClcbiAgICB9LFxuICAgICdvbiB0eXBpbmcgb2ZmJzogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLnVzZXJzVHlwaW5nW2RhdGEudXNlcm5hbWVdXG4gICAgICBjb25zb2xlLmxvZyhkYXRhLnVzZXJuYW1lICsgJyBzdG9wIHR5cGluZycpXG4gICAgICBjb25zb2xlLmxvZyhPYmplY3Qua2V5cyh0aGlzLnVzZXJzVHlwaW5nKS5sZW5ndGgpXG4gICAgfSxcbiAgICBlcnJldXI6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgIHZhciBqcXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKVxuICAgIHZhciBzYWxvbnMgPSAnaHR0cDovL2JhemFyZXR0ZXMucGVoNC5jb20vd3AtanNvbi93cC92Mi9wb3N0cydcbiAgICB2YXIgdm0gPSB0aGlzXG4gICAganF1ZXJ5LndoZW4oXG4gICAgICBqcXVlcnkuZ2V0SlNPTihzYWxvbnMpLFxuICAgICAganF1ZXJ5LnJlYWR5XG4gICAgKS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICB2bS50aXRsZSA9IGRhdGFbMF1bMF0udGl0bGUucmVuZGVyZWRcbiAgICB9KS5mYWlsKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdKU09OIGxvYWQgZmFpbCcgKyBlcnIpXG4gICAgfSlcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGpvaW5DaGF0OiBmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgIHZhciBpbnB1dCA9IGVudHJ5LnRhcmdldC5wcmV2aW91c1NpYmxpbmcudmFsdWVcbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICBpZiAoIXRoaXMubmFtZSkge1xuICAgICAgICAgIHRoaXMubmFtZSA9IGlucHV0XG4gICAgICAgICAgdGhpcy5idG4gPSAnw6lxdWlwZSdcbiAgICAgICAgICB0aGlzLmlucHV0QmFyID0gJydcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy50ZWFtKSB7XG4gICAgICAgICAgdGhpcy50ZWFtID0gaW5wdXRcbiAgICAgICAgICB0aGlzLmlucHV0QmFyID0gJydcbiAgICAgICAgICB0aGlzLiRzb2NrZXQuZW1pdCgnam9pbicsIHtcbiAgICAgICAgICAgICduYW1lJzogdGhpcy5uYW1lLFxuICAgICAgICAgICAgJ2lkJzogbnVsbCxcbiAgICAgICAgICAgICd0ZWFtJzogdGhpcy50ZWFtXG4gICAgICAgICAgfSlcbiAgICAgICAgICBjb25zb2xlLmxvZygnam9pbiAnICsgdGhpcy5uYW1lICsgJyBkZSBsYSB0ZWFtICcgKyB0aGlzLnRlYW0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy4kc29ja2V0LmVtaXQoJ21lc3NhZ2UnLCBpbnB1dClcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2goe3VzZXJuYW1lOiB0aGlzLm5hbWUsIGNvbnRlbnQ6IGlucHV0fSlcbiAgICAgICAgICB0aGlzLmlucHV0QmFyID0gJydcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG48L3NjcmlwdD5cblxuPCEtLSBBZGQgXCJzY29wZWRcIiBhdHRyaWJ1dGUgdG8gbGltaXQgQ1NTIHRvIHRoaXMgY29tcG9uZW50IG9ubHkgLS0+XG48c3R5bGUgc2NvcGVkPlxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBIZWxsby52dWU/MTI0ZjkzYmEiXSwibWFwcGluZ3MiOiI7Ozs7OztBQXFCQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7O0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUExQkE7QUE0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdkJBO0FBcEVBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})