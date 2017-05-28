webpackHotUpdate(0,{

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(21);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Messages_vue__ = __webpack_require__(69);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Messages_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Messages_vue__);\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'hello',\n  components: {\n    Messages: __WEBPACK_IMPORTED_MODULE_1__Messages_vue___default.a\n  },\n  data: function data() {\n    return {\n      title: 'loading',\n      inputBar: '',\n      btn: 'name',\n      messages: [],\n      users: {},\n      typing: false,\n      isWriting: false,\n      usersTyping: {},\n      name: '',\n      team: ''\n    };\n  },\n\n  watch: {\n    inputBar: function inputBar(data) {\n      if (data && !this.typing) {\n        this.$socket.emit('typing on');\n\n        this.typing = true;\n      } else if (!data && this.typing) {\n        this.$socket.emit('typing off');\n        this.typing = false;\n      }\n    }\n  },\n  sockets: {\n    'on join': function onJoin(data) {\n      this.users = data.users;\n      console.log('on join');\n    },\n    'joined': function joined(data) {\n      this.users = data.users;\n      this.btn = 'message';\n    },\n    'on leave': function onLeave(data) {},\n    'on message': function onMessage(data) {\n      this.messages.push(data);\n      console.log(this.messages);\n    },\n    'on typing on': function onTypingOn(data) {\n      this.usersTyping[data.username] = data.username;\n      console.log(data.username + ' strat typing');\n      if (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(this.usersTyping).length) {\n        this.isWriting = true;\n      }\n    },\n    'on typing off': function onTypingOff(data) {\n      delete this.usersTyping[data.username];\n      console.log(data.username + ' stop typing');\n      if (!__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(this.usersTyping).length) {\n        this.isWriting = false;\n      }\n    },\n    erreur: function erreur(data) {\n      console.log(data);\n    }\n  },\n  mounted: function mounted() {\n    var jquery = __webpack_require__(13);\n    var salons = 'http://bazarettes.peh4.com/wp-json/wp/v2/posts';\n    var vm = this;\n    jquery.when(jquery.getJSON(salons), jquery.ready).done(function (data) {\n      vm.title = data[0][0].title.rendered;\n    }).fail(function (err) {\n      console.log('JSON load fail' + err);\n    });\n  },\n  methods: {\n    resetInput: function resetInput() {\n      this.inputBar = '';\n    },\n    joinChat: function joinChat(entry) {\n      var input = entry.target.previousSibling.value;\n      if (input) {\n        if (!this.name) {\n          this.name = input;\n          this.btn = 'équipe';\n          this.resetInput();\n        } else if (!this.team) {\n          this.team = input;\n          this.inputBar = '';\n          this.$socket.emit('join', {\n            'name': this.name,\n            'id': null,\n            'team': this.team\n          });\n          this.btn = 'message';\n          console.log('join ' + this.name + ' de la team ' + this.team);\n        } else {\n          this.$socket.emit('message', input);\n          this.messages.push({ username: this.name, team: this.team, content: input });\n          this.inputBar = '';\n        }\n      }\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vSGVsbG8udnVlPzBlNjEiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiaGVsbG9cIj5cbiAgICA8aDEgdi1odG1sPVwidGl0bGVcIj48L2gxPlxuICAgIDx1bD5cbiAgICAgIDxsaSB2LWZvcj1cInVzZXIgaW4gdXNlcnNcIj5cbiAgICAgICAge3t1c2VyLm5hbWV9fVxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICAgIDxtZXNzYWdlcyA6bWVzc2FnZXM9XCJtZXNzYWdlc1wiPjwvbWVzc2FnZXM+XG4gICAgPHAgdi1pZj1cImlzV3JpdGluZ1wiPlF1ZWxxdSd1biDDqWNyaXQgdW4gbWVzc2FnZeKApjwvcD5cbiAgICA8Zm9ybSBhY3Rpb249XCJcIj5cbiAgICAgIDxpbnB1dCB2LW1vZGVsPVwiaW5wdXRCYXJcIiBpZD1cInRleHRcIiBhdXRvY29tcGxldGU9XCJvZmZcIiAvPjxidXR0b24gQGNsaWNrPVwiam9pbkNoYXRcIj57e2J0bn19PC9idXR0b24+XG4gICAgPC9mb3JtPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgTWVzc2FnZXMgZnJvbSAnLi9NZXNzYWdlcy52dWUnXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdoZWxsbycsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBNZXNzYWdlc1xuICB9LFxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICdsb2FkaW5nJyxcbiAgICAgIGlucHV0QmFyOiAnJyxcbiAgICAgIGJ0bjogJ25hbWUnLFxuICAgICAgbWVzc2FnZXM6IFtdLFxuICAgICAgdXNlcnM6IHt9LFxuICAgICAgdHlwaW5nOiBmYWxzZSxcbiAgICAgIGlzV3JpdGluZzogZmFsc2UsXG4gICAgICB1c2Vyc1R5cGluZzoge30sXG4gICAgICBuYW1lOiAnJyxcbiAgICAgIHRlYW06ICcnXG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIGlucHV0QmFyOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgaWYgKGRhdGEgJiYgIXRoaXMudHlwaW5nKSB7XG4gICAgICAgIHRoaXMuJHNvY2tldC5lbWl0KCd0eXBpbmcgb24nKVxuICAgICAgICAvLyBwb3VyIHNpZ25hbGVyIHVuZSBzZXVsZSBmb2lzXG4gICAgICAgIHRoaXMudHlwaW5nID0gdHJ1ZVxuICAgICAgfSBlbHNlIGlmICghZGF0YSAmJiB0aGlzLnR5cGluZykge1xuICAgICAgICB0aGlzLiRzb2NrZXQuZW1pdCgndHlwaW5nIG9mZicpXG4gICAgICAgIHRoaXMudHlwaW5nID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHNvY2tldHM6IHtcbiAgICAnb24gam9pbic6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICB0aGlzLnVzZXJzID0gZGF0YS51c2Vyc1xuICAgICAgY29uc29sZS5sb2coJ29uIGpvaW4nKVxuICAgIH0sXG4gICAgJ2pvaW5lZCc6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICB0aGlzLnVzZXJzID0gZGF0YS51c2Vyc1xuICAgICAgdGhpcy5idG4gPSAnbWVzc2FnZSdcbiAgICB9LFxuICAgICdvbiBsZWF2ZSc6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgfSxcbiAgICAnb24gbWVzc2FnZSc6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICB0aGlzLm1lc3NhZ2VzLnB1c2goZGF0YSlcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMubWVzc2FnZXMpXG4gICAgfSxcbiAgICAnb24gdHlwaW5nIG9uJzogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHRoaXMudXNlcnNUeXBpbmdbZGF0YS51c2VybmFtZV0gPSBkYXRhLnVzZXJuYW1lXG4gICAgICBjb25zb2xlLmxvZyhkYXRhLnVzZXJuYW1lICsgJyBzdHJhdCB0eXBpbmcnKVxuICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMudXNlcnNUeXBpbmcpLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmlzV3JpdGluZyA9IHRydWVcbiAgICAgIH1cbiAgICB9LFxuICAgICdvbiB0eXBpbmcgb2ZmJzogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLnVzZXJzVHlwaW5nW2RhdGEudXNlcm5hbWVdXG4gICAgICBjb25zb2xlLmxvZyhkYXRhLnVzZXJuYW1lICsgJyBzdG9wIHR5cGluZycpXG4gICAgICBpZiAoIU9iamVjdC5rZXlzKHRoaXMudXNlcnNUeXBpbmcpLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmlzV3JpdGluZyA9IGZhbHNlXG4gICAgICB9XG4gICAgfSxcbiAgICBlcnJldXI6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgIHZhciBqcXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKVxuICAgIHZhciBzYWxvbnMgPSAnaHR0cDovL2JhemFyZXR0ZXMucGVoNC5jb20vd3AtanNvbi93cC92Mi9wb3N0cydcbiAgICB2YXIgdm0gPSB0aGlzXG4gICAganF1ZXJ5LndoZW4oXG4gICAgICBqcXVlcnkuZ2V0SlNPTihzYWxvbnMpLFxuICAgICAganF1ZXJ5LnJlYWR5XG4gICAgKS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICB2bS50aXRsZSA9IGRhdGFbMF1bMF0udGl0bGUucmVuZGVyZWRcbiAgICB9KS5mYWlsKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdKU09OIGxvYWQgZmFpbCcgKyBlcnIpXG4gICAgfSlcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHJlc2V0SW5wdXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuaW5wdXRCYXIgPSAnJ1xuICAgIH0sXG4gICAgam9pbkNoYXQ6IGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgdmFyIGlucHV0ID0gZW50cnkudGFyZ2V0LnByZXZpb3VzU2libGluZy52YWx1ZVxuICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgIGlmICghdGhpcy5uYW1lKSB7XG4gICAgICAgICAgdGhpcy5uYW1lID0gaW5wdXRcbiAgICAgICAgICB0aGlzLmJ0biA9ICfDqXF1aXBlJ1xuICAgICAgICAgIHRoaXMucmVzZXRJbnB1dCgpXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMudGVhbSkge1xuICAgICAgICAgIHRoaXMudGVhbSA9IGlucHV0XG4gICAgICAgICAgdGhpcy5pbnB1dEJhciA9ICcnXG4gICAgICAgICAgdGhpcy4kc29ja2V0LmVtaXQoJ2pvaW4nLCB7XG4gICAgICAgICAgICAnbmFtZSc6IHRoaXMubmFtZSxcbiAgICAgICAgICAgICdpZCc6IG51bGwsXG4gICAgICAgICAgICAndGVhbSc6IHRoaXMudGVhbVxuICAgICAgICAgIH0pXG4gICAgICAgICAgdGhpcy5idG4gPSAnbWVzc2FnZSdcbiAgICAgICAgICBjb25zb2xlLmxvZygnam9pbiAnICsgdGhpcy5uYW1lICsgJyBkZSBsYSB0ZWFtICcgKyB0aGlzLnRlYW0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy4kc29ja2V0LmVtaXQoJ21lc3NhZ2UnLCBpbnB1dClcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2goe3VzZXJuYW1lOiB0aGlzLm5hbWUsIHRlYW06IHRoaXMudGVhbSwgY29udGVudDogaW5wdXR9KVxuICAgICAgICAgIHRoaXMuaW5wdXRCYXIgPSAnJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbjwvc2NyaXB0PlxuXG48IS0tIEFkZCBcInNjb3BlZFwiIGF0dHJpYnV0ZSB0byBsaW1pdCBDU1MgdG8gdGhpcyBjb21wb25lbnQgb25seSAtLT5cbjxzdHlsZSBzY29wZWQ+XG4gIC5oZWxsbyB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyBcbiAgfVxuICBcbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gSGVsbG8udnVlPzJjMDRmMmFjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQWlCQTtBQUNBO0FBRUE7O0FBRUE7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFZQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7O0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBL0JBO0FBaUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0JBO0FBN0VBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})