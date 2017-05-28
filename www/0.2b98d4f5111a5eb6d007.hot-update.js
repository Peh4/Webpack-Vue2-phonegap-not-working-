webpackHotUpdate(0,{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'hello',\n  data: function data() {\n    return {\n      title: 'loading',\n      inputBar: '',\n      typing: false,\n      btn: 'name',\n      messages: [],\n      users: {},\n      usersTyping: {},\n      name: '',\n      team: ''\n    };\n  },\n\n  watch: {\n    inputBar: function inputBar(data) {\n      if (data && !this.typing) {\n        this.$socket.emit('typing on');\n\n        this.typing = true;\n      } else if (!data && this.typing) {\n        this.$socket.emit('typing off');\n        this.typing = false;\n      }\n    }\n  },\n  sockets: {\n    'on join': function onJoin(data) {\n      this.users = data.users;\n    },\n    'joined': function joined(data) {\n      this.users = data.users;\n      this.btn = 'message';\n    },\n    'on leave': function onLeave(data) {},\n    'on message': function onMessage(data) {\n      this.messages.push(data);\n      console.log(this.messages);\n    },\n    'on typing on': function onTypingOn(data) {\n      this.usersTyping[data.username] = data.username;\n      console.log(data.username + ' strat typing');\n    },\n    'on typing off': function onTypingOff(data) {\n      delete this.usersTyping[data.username];\n      console.log(data.username + ' stop typing');\n      console.log(this.usersTyping.length);\n    },\n    erreur: function erreur(data) {\n      console.log(data);\n    }\n  },\n  mounted: function mounted() {\n    var jquery = __webpack_require__(5);\n    var salons = 'http://bazarettes.peh4.com/wp-json/wp/v2/posts';\n    var vm = this;\n    jquery.when(jquery.getJSON(salons), jquery.ready).done(function (data) {\n      vm.title = data[0][0].title.rendered;\n    }).fail(function (err) {\n      console.log('JSON load fail' + err);\n    });\n  },\n  methods: {\n    joinChat: function joinChat(entry) {\n      var input = entry.target.previousSibling.value;\n      if (input) {\n        if (!this.name) {\n          this.name = input;\n          this.btn = 'équipe';\n          this.inputBar = '';\n        } else if (!this.team) {\n          this.team = input;\n          this.inputBar = '';\n          this.$socket.emit('join', {\n            'name': this.name,\n            'id': null,\n            'team': this.team\n          });\n          console.log('join ' + this.name + ' de la team ' + this.team);\n        } else {\n          this.$socket.emit('message', input);\n          this.messages.push({ username: this.name, content: input });\n          this.inputBar = '';\n        }\n      }\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vSGVsbG8udnVlPzQ0YmUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiaGVsbG9cIj5cbiAgICA8aDEgdi1odG1sPVwidGl0bGVcIj48L2gxPlxuICAgIDx1bD5cbiAgICAgIDxsaSB2LWZvcj1cInVzZXIgaW4gdXNlcnNcIj5cbiAgICAgICAge3t1c2VyLm5hbWV9fVxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICAgIDx1bD5cbiAgICAgIDxsaSB2LWZvcj1cIm1lc3NhZ2UgaW4gbWVzc2FnZXNcIj5cbiAgICAgICAge3ttZXNzYWdlLnVzZXJuYW1lfX0gOiB7e21lc3NhZ2UuY29udGVudH19XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICAgPHAgdi1pZj1cInVzZXJzVHlwaW5nWzBdXCI+d3JpdGluZ+KApjwvcD5cbiAgICA8Zm9ybSBhY3Rpb249XCJcIj5cbiAgICAgIDxpbnB1dCB2LW1vZGVsPVwiaW5wdXRCYXJcIiBpZD1cInRleHRcIiBhdXRvY29tcGxldGU9XCJvZmZcIiAvPjxidXR0b24gQGNsaWNrPVwiam9pbkNoYXRcIj57e2J0bn19PC9idXR0b24+XG4gICAgPC9mb3JtPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdoZWxsbycsXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ2xvYWRpbmcnLFxuICAgICAgaW5wdXRCYXI6ICcnLFxuICAgICAgdHlwaW5nOiBmYWxzZSxcbiAgICAgIGJ0bjogJ25hbWUnLFxuICAgICAgbWVzc2FnZXM6IFtdLFxuICAgICAgdXNlcnM6IHt9LFxuICAgICAgdXNlcnNUeXBpbmc6IHt9LFxuICAgICAgbmFtZTogJycsXG4gICAgICB0ZWFtOiAnJ1xuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBpbnB1dEJhcjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGlmIChkYXRhICYmICF0aGlzLnR5cGluZykge1xuICAgICAgICB0aGlzLiRzb2NrZXQuZW1pdCgndHlwaW5nIG9uJylcbiAgICAgICAgLy8gcG91ciBzaWduYWxlciB1bmUgc2V1bGUgZm9pc1xuICAgICAgICB0aGlzLnR5cGluZyA9IHRydWVcbiAgICAgIH0gZWxzZSBpZiAoIWRhdGEgJiYgdGhpcy50eXBpbmcpIHtcbiAgICAgICAgdGhpcy4kc29ja2V0LmVtaXQoJ3R5cGluZyBvZmYnKVxuICAgICAgICB0aGlzLnR5cGluZyA9IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBzb2NrZXRzOiB7XG4gICAgJ29uIGpvaW4nOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgdGhpcy51c2VycyA9IGRhdGEudXNlcnNcbiAgICB9LFxuICAgICdqb2luZWQnOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgdGhpcy51c2VycyA9IGRhdGEudXNlcnNcbiAgICAgIHRoaXMuYnRuID0gJ21lc3NhZ2UnXG4gICAgfSxcbiAgICAnb24gbGVhdmUnOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgIH0sXG4gICAgJ29uIG1lc3NhZ2UnOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKGRhdGEpXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLm1lc3NhZ2VzKVxuICAgIH0sXG4gICAgJ29uIHR5cGluZyBvbic6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICB0aGlzLnVzZXJzVHlwaW5nW2RhdGEudXNlcm5hbWVdID0gZGF0YS51c2VybmFtZVxuICAgICAgY29uc29sZS5sb2coZGF0YS51c2VybmFtZSArICcgc3RyYXQgdHlwaW5nJylcbiAgICB9LFxuICAgICdvbiB0eXBpbmcgb2ZmJzogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLnVzZXJzVHlwaW5nW2RhdGEudXNlcm5hbWVdXG4gICAgICBjb25zb2xlLmxvZyhkYXRhLnVzZXJuYW1lICsgJyBzdG9wIHR5cGluZycpXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXJzVHlwaW5nLmxlbmd0aClcbiAgICB9LFxuICAgIGVycmV1cjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgfVxuICB9LFxuICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGpxdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpXG4gICAgdmFyIHNhbG9ucyA9ICdodHRwOi8vYmF6YXJldHRlcy5wZWg0LmNvbS93cC1qc29uL3dwL3YyL3Bvc3RzJ1xuICAgIHZhciB2bSA9IHRoaXNcbiAgICBqcXVlcnkud2hlbihcbiAgICAgIGpxdWVyeS5nZXRKU09OKHNhbG9ucyksXG4gICAgICBqcXVlcnkucmVhZHlcbiAgICApLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHZtLnRpdGxlID0gZGF0YVswXVswXS50aXRsZS5yZW5kZXJlZFxuICAgIH0pLmZhaWwoZnVuY3Rpb24gKGVycikge1xuICAgICAgY29uc29sZS5sb2coJ0pTT04gbG9hZCBmYWlsJyArIGVycilcbiAgICB9KVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgam9pbkNoYXQ6IGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgdmFyIGlucHV0ID0gZW50cnkudGFyZ2V0LnByZXZpb3VzU2libGluZy52YWx1ZVxuICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgIGlmICghdGhpcy5uYW1lKSB7XG4gICAgICAgICAgdGhpcy5uYW1lID0gaW5wdXRcbiAgICAgICAgICB0aGlzLmJ0biA9ICfDqXF1aXBlJ1xuICAgICAgICAgIHRoaXMuaW5wdXRCYXIgPSAnJ1xuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnRlYW0pIHtcbiAgICAgICAgICB0aGlzLnRlYW0gPSBpbnB1dFxuICAgICAgICAgIHRoaXMuaW5wdXRCYXIgPSAnJ1xuICAgICAgICAgIHRoaXMuJHNvY2tldC5lbWl0KCdqb2luJywge1xuICAgICAgICAgICAgJ25hbWUnOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAnaWQnOiBudWxsLFxuICAgICAgICAgICAgJ3RlYW0nOiB0aGlzLnRlYW1cbiAgICAgICAgICB9KVxuICAgICAgICAgIGNvbnNvbGUubG9nKCdqb2luICcgKyB0aGlzLm5hbWUgKyAnIGRlIGxhIHRlYW0gJyArIHRoaXMudGVhbSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLiRzb2NrZXQuZW1pdCgnbWVzc2FnZScsIGlucHV0KVxuICAgICAgICAgIHRoaXMubWVzc2FnZXMucHVzaCh7dXNlcm5hbWU6IHRoaXMubmFtZSwgY29udGVudDogaW5wdXR9KVxuICAgICAgICAgIHRoaXMuaW5wdXRCYXIgPSAnJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbjwvc2NyaXB0PlxuXG48IS0tIEFkZCBcInNjb3BlZFwiIGF0dHJpYnV0ZSB0byBsaW1pdCBDU1MgdG8gdGhpcyBjb21wb25lbnQgb25seSAtLT5cbjxzdHlsZSBzY29wZWQ+XG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEhlbGxvLnZ1ZT82ZjcyM2JlZiJdLCJtYXBwaW5ncyI6Ijs7O0FBcUJBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVdBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTs7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF6QkE7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdkJBO0FBbkVBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})