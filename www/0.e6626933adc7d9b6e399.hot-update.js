webpackHotUpdate(0,{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'hello',\n  data: function data() {\n    return {\n      title: 'loading',\n      inputBar: '',\n      btn: 'name',\n      messages: [],\n      users: {},\n      usersTyping: {},\n      name: '',\n      team: ''\n    };\n  },\n\n  watch: {\n    inputBar: function inputBar(data) {\n      if (data && !this.typing) {\n        this.$socket.emit('typing on');\n        console.log('typing');\n      } else if (!data && this.typing) {\n        this.$socket.emit('typing off');\n        console.log('stop typing');\n      }\n    }\n  },\n  sockets: {\n    'on join': function onJoin(data) {\n      this.users = data.users;\n      console.log(data);\n    },\n    'joined': function joined(data) {\n      this.users = data.users;\n      this.btn = 'message';\n    },\n    'on leave': function onLeave(data) {},\n    'on message': function onMessage(data) {\n      this.messages.push(data);\n      console.log(this.messages);\n    },\n    'on typing on': function onTypingOn(data) {\n      this.usersTyping[data.username] = data.username;\n      console.log(this.usersTyping);\n    },\n    'on typing off': function onTypingOff(data) {\n      delete this.usersTyping[data.username];\n      console.log(this.usersTyping);\n    },\n    erreur: function erreur(data) {\n      console.log(data);\n    }\n  },\n  mounted: function mounted() {\n    var jquery = __webpack_require__(5);\n    var salons = 'http://bazarettes.peh4.com/wp-json/wp/v2/posts';\n    var vm = this;\n    jquery.when(jquery.getJSON(salons), jquery.ready).done(function (data) {\n      vm.title = data[0][0].title.rendered;\n    }).fail(function (err) {\n      console.log('JSON load fail' + err);\n    });\n  },\n  methods: {\n    joinChat: function joinChat(entry) {\n      var input = entry.target.previousSibling.value;\n      if (input) {\n        if (!this.name) {\n          this.name = input;\n          this.btn = 'équipe';\n          this.inputBar = '';\n        } else if (!this.team) {\n          this.team = input;\n          this.inputBar = '';\n          this.$socket.emit('join', {\n            'name': this.name,\n            'id': null,\n            'team': this.team\n          });\n          console.log('join ' + this.name + ' de la team ' + this.team);\n        } else {\n          this.$socket.emit('message', input);\n          this.messages.push({ username: this.name, content: input });\n          this.inputBar = '';\n        }\n      }\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vSGVsbG8udnVlPzQ5MmYiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiaGVsbG9cIj5cbiAgICA8aDEgdi1odG1sPVwidGl0bGVcIj48L2gxPlxuICAgIDx1bD5cbiAgICAgIDxsaSB2LWZvcj1cInVzZXIgaW4gdXNlcnNcIj5cbiAgICAgICAge3t1c2VyLm5hbWV9fVxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICAgIDx1bD5cbiAgICAgIDxsaSB2LWZvcj1cIm1lc3NhZ2UgaW4gbWVzc2FnZXNcIj5cbiAgICAgICAge3ttZXNzYWdlLnVzZXJuYW1lfX0gOiB7e21lc3NhZ2UuY29udGVudH19XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICAgPHAgdi1pZj1cInVzZXJzVHlwaW5nLmxlbmd0aCA+IDBcIj53cml0aW5n4oCmPC9wPlxuICAgIDxmb3JtIGFjdGlvbj1cIlwiPlxuICAgICAgPGlucHV0IHYtbW9kZWw9XCJpbnB1dEJhclwiIGlkPVwidGV4dFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIC8+PGJ1dHRvbiBAY2xpY2s9XCJqb2luQ2hhdFwiPnt7YnRufX08L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2hlbGxvJyxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAnbG9hZGluZycsXG4gICAgICBpbnB1dEJhcjogJycsXG4gICAgICBidG46ICduYW1lJyxcbiAgICAgIG1lc3NhZ2VzOiBbXSxcbiAgICAgIHVzZXJzOiB7fSxcbiAgICAgIHVzZXJzVHlwaW5nOiB7fSxcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgdGVhbTogJydcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgaW5wdXRCYXI6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBpZiAoZGF0YSAmJiAhdGhpcy50eXBpbmcpIHtcbiAgICAgICAgdGhpcy4kc29ja2V0LmVtaXQoJ3R5cGluZyBvbicpXG4gICAgICAgIGNvbnNvbGUubG9nKCd0eXBpbmcnKVxuICAgICAgfSBlbHNlIGlmICghZGF0YSAmJiB0aGlzLnR5cGluZykge1xuICAgICAgICB0aGlzLiRzb2NrZXQuZW1pdCgndHlwaW5nIG9mZicpXG4gICAgICAgIGNvbnNvbGUubG9nKCdzdG9wIHR5cGluZycpXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBzb2NrZXRzOiB7XG4gICAgJ29uIGpvaW4nOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgdGhpcy51c2VycyA9IGRhdGEudXNlcnNcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgfSxcbiAgICAnam9pbmVkJzogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHRoaXMudXNlcnMgPSBkYXRhLnVzZXJzXG4gICAgICB0aGlzLmJ0biA9ICdtZXNzYWdlJ1xuICAgIH0sXG4gICAgJ29uIGxlYXZlJzogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICB9LFxuICAgICdvbiBtZXNzYWdlJzogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHRoaXMubWVzc2FnZXMucHVzaChkYXRhKVxuICAgICAgY29uc29sZS5sb2codGhpcy5tZXNzYWdlcylcbiAgICB9LFxuICAgICdvbiB0eXBpbmcgb24nOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgdGhpcy51c2Vyc1R5cGluZ1tkYXRhLnVzZXJuYW1lXSA9IGRhdGEudXNlcm5hbWVcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMudXNlcnNUeXBpbmcpXG4gICAgfSxcbiAgICAnb24gdHlwaW5nIG9mZic6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBkZWxldGUgdGhpcy51c2Vyc1R5cGluZ1tkYXRhLnVzZXJuYW1lXVxuICAgICAgY29uc29sZS5sb2codGhpcy51c2Vyc1R5cGluZylcbiAgICB9LFxuICAgIGVycmV1cjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgfVxuICB9LFxuICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGpxdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpXG4gICAgdmFyIHNhbG9ucyA9ICdodHRwOi8vYmF6YXJldHRlcy5wZWg0LmNvbS93cC1qc29uL3dwL3YyL3Bvc3RzJ1xuICAgIHZhciB2bSA9IHRoaXNcbiAgICBqcXVlcnkud2hlbihcbiAgICAgIGpxdWVyeS5nZXRKU09OKHNhbG9ucyksXG4gICAgICBqcXVlcnkucmVhZHlcbiAgICApLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHZtLnRpdGxlID0gZGF0YVswXVswXS50aXRsZS5yZW5kZXJlZFxuICAgIH0pLmZhaWwoZnVuY3Rpb24gKGVycikge1xuICAgICAgY29uc29sZS5sb2coJ0pTT04gbG9hZCBmYWlsJyArIGVycilcbiAgICB9KVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgam9pbkNoYXQ6IGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgdmFyIGlucHV0ID0gZW50cnkudGFyZ2V0LnByZXZpb3VzU2libGluZy52YWx1ZVxuICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgIGlmICghdGhpcy5uYW1lKSB7XG4gICAgICAgICAgdGhpcy5uYW1lID0gaW5wdXRcbiAgICAgICAgICB0aGlzLmJ0biA9ICfDqXF1aXBlJ1xuICAgICAgICAgIHRoaXMuaW5wdXRCYXIgPSAnJ1xuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnRlYW0pIHtcbiAgICAgICAgICB0aGlzLnRlYW0gPSBpbnB1dFxuICAgICAgICAgIHRoaXMuaW5wdXRCYXIgPSAnJ1xuICAgICAgICAgIHRoaXMuJHNvY2tldC5lbWl0KCdqb2luJywge1xuICAgICAgICAgICAgJ25hbWUnOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAnaWQnOiBudWxsLFxuICAgICAgICAgICAgJ3RlYW0nOiB0aGlzLnRlYW1cbiAgICAgICAgICB9KVxuICAgICAgICAgIGNvbnNvbGUubG9nKCdqb2luICcgKyB0aGlzLm5hbWUgKyAnIGRlIGxhIHRlYW0gJyArIHRoaXMudGVhbSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLiRzb2NrZXQuZW1pdCgnbWVzc2FnZScsIGlucHV0KVxuICAgICAgICAgIHRoaXMubWVzc2FnZXMucHVzaCh7dXNlcm5hbWU6IHRoaXMubmFtZSwgY29udGVudDogaW5wdXR9KVxuICAgICAgICAgIHRoaXMuaW5wdXRCYXIgPSAnJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbjwvc2NyaXB0PlxuXG48IS0tIEFkZCBcInNjb3BlZFwiIGF0dHJpYnV0ZSB0byBsaW1pdCBDU1MgdG8gdGhpcyBjb21wb25lbnQgb25seSAtLT5cbjxzdHlsZSBzY29wZWQ+XG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEhlbGxvLnZ1ZT83Mjg1NjA2NiJdLCJtYXBwaW5ncyI6Ijs7O0FBcUJBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBOztBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXpCQTtBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2QkE7QUFqRUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(4)(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\", \"\"]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlbGxvLnZ1ZT83YjI5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/e1wibWluaW1pemVcIjpmYWxzZSxcInNvdXJjZU1hcFwiOmZhbHNlfSEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1mOTBlM2ZhNFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOmZhbHNlfSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL0hlbGxvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})