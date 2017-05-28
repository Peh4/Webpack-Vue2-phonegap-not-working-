webpackHotUpdate(0,{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'hello',\n  data: function data() {\n    return {\n      title: 'loading',\n      btn: 'name',\n      messages: [],\n      users: {},\n      typing: {},\n      name: '',\n      team: ''\n    };\n  },\n\n  sockets: {\n    'on join': function onJoin(data) {\n      this.users = data.users;\n      console.log(data);\n    },\n    'joined': function joined(data) {\n      this.users = data.users;\n      this.btn = 'message';\n    },\n    'on leave': function onLeave(data) {},\n    'on message': function onMessage(data) {\n      this.messages.push(data);\n      console.log(this.messages);\n    },\n    'on typing on': function onTypingOn(data) {\n      console.log(data.username);\n    },\n    'on typing off': function onTypingOff(data) {\n      console.log(data.username);\n    },\n    erreur: function erreur(data) {\n      console.log(data);\n    }\n  },\n  mounted: function mounted() {\n    var jquery = __webpack_require__(5);\n    var salons = 'http://bazarettes.peh4.com/wp-json/wp/v2/posts';\n    var vm = this;\n    jquery.when(jquery.getJSON(salons), jquery.ready).done(function (data) {\n      vm.title = data[0][0].title.rendered;\n    }).fail(function (err) {\n      console.log('JSON load fail' + err);\n    });\n  },\n  methods: {\n    joinChat: function joinChat(entry) {\n      var jquery = __webpack_require__(5);\n      var input = entry.target.previousSibling.value;\n      if (input) {\n        if (!this.name) {\n          this.name = input;\n          this.btn = 'équipe';\n          entry.target.previousSibling.value = '';\n        } else if (!this.team) {\n          this.team = input;\n          entry.target.previousSibling.value = '';\n          this.$socket.emit('join', {\n            'name': this.name,\n            'id': null,\n            'team': this.team\n          });\n          jquery('#text').change(function () {\n            if (jquery(this).val()) {\n              this.$socket.emit('typing on');\n            } else {\n              this.$socket.emit('typing off');\n            }\n          });\n        } else {\n          this.$socket.emit('message', input);\n          this.messages.push({ username: this.name, content: input });\n          entry.target.previousSibling.value = '';\n        }\n        console.log('join ' + this.name + ' de la team ' + this.team);\n      }\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vSGVsbG8udnVlPzZjYmUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiaGVsbG9cIj5cbiAgICA8aDEgdi1odG1sPVwidGl0bGVcIj48L2gxPlxuICAgIDx1bD5cbiAgICAgIDxsaSB2LWZvcj1cInVzZXIgaW4gdXNlcnNcIj5cbiAgICAgICAge3t1c2VyLm5hbWV9fVxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICAgIDx1bD5cbiAgICAgIDxsaSB2LWZvcj1cIm1lc3NhZ2UgaW4gbWVzc2FnZXNcIj5cbiAgICAgICAge3ttZXNzYWdlLnVzZXJuYW1lfX0gOiB7e21lc3NhZ2UuY29udGVudH19XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICAgPGZvcm0gYWN0aW9uPVwiXCI+XG4gICAgICA8aW5wdXQgaWQ9XCJ0ZXh0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgLz48YnV0dG9uIEBjbGljaz1cImpvaW5DaGF0XCI+e3tidG59fTwvYnV0dG9uPlxuICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cInBpY1wiIGFjY2VwdD1cImltYWdlLypcIj5cbiAgICA8L2Zvcm0+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnaGVsbG8nLFxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICdsb2FkaW5nJyxcbiAgICAgIGJ0bjogJ25hbWUnLFxuICAgICAgbWVzc2FnZXM6IFtdLFxuICAgICAgdXNlcnM6IHt9LFxuICAgICAgdHlwaW5nOiB7fSxcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgdGVhbTogJydcbiAgICB9XG4gIH0sXG4gIHNvY2tldHM6IHtcbiAgICAnb24gam9pbic6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICB0aGlzLnVzZXJzID0gZGF0YS51c2Vyc1xuICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICB9LFxuICAgICdqb2luZWQnOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgdGhpcy51c2VycyA9IGRhdGEudXNlcnNcbiAgICAgIHRoaXMuYnRuID0gJ21lc3NhZ2UnXG4gICAgfSxcbiAgICAnb24gbGVhdmUnOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgIH0sXG4gICAgJ29uIG1lc3NhZ2UnOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKGRhdGEpXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLm1lc3NhZ2VzKVxuICAgIH0sXG4gICAgJ29uIHR5cGluZyBvbic6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhLnVzZXJuYW1lKVxuICAgIH0sXG4gICAgJ29uIHR5cGluZyBvZmYnOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coZGF0YS51c2VybmFtZSlcbiAgICB9LFxuICAgIGVycmV1cjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgfVxuICB9LFxuICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGpxdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpXG4gICAgdmFyIHNhbG9ucyA9ICdodHRwOi8vYmF6YXJldHRlcy5wZWg0LmNvbS93cC1qc29uL3dwL3YyL3Bvc3RzJ1xuICAgIHZhciB2bSA9IHRoaXNcbiAgICBqcXVlcnkud2hlbihcbiAgICAgIGpxdWVyeS5nZXRKU09OKHNhbG9ucyksXG4gICAgICBqcXVlcnkucmVhZHlcbiAgICApLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHZtLnRpdGxlID0gZGF0YVswXVswXS50aXRsZS5yZW5kZXJlZFxuICAgIH0pLmZhaWwoZnVuY3Rpb24gKGVycikge1xuICAgICAgY29uc29sZS5sb2coJ0pTT04gbG9hZCBmYWlsJyArIGVycilcbiAgICB9KVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgam9pbkNoYXQ6IGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgdmFyIGpxdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpXG4gICAgICB2YXIgaW5wdXQgPSBlbnRyeS50YXJnZXQucHJldmlvdXNTaWJsaW5nLnZhbHVlXG4gICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgaWYgKCF0aGlzLm5hbWUpIHtcbiAgICAgICAgICB0aGlzLm5hbWUgPSBpbnB1dFxuICAgICAgICAgIHRoaXMuYnRuID0gJ8OpcXVpcGUnXG4gICAgICAgICAgZW50cnkudGFyZ2V0LnByZXZpb3VzU2libGluZy52YWx1ZSA9ICcnXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMudGVhbSkge1xuICAgICAgICAgIHRoaXMudGVhbSA9IGlucHV0XG4gICAgICAgICAgZW50cnkudGFyZ2V0LnByZXZpb3VzU2libGluZy52YWx1ZSA9ICcnXG4gICAgICAgICAgdGhpcy4kc29ja2V0LmVtaXQoJ2pvaW4nLCB7XG4gICAgICAgICAgICAnbmFtZSc6IHRoaXMubmFtZSxcbiAgICAgICAgICAgICdpZCc6IG51bGwsXG4gICAgICAgICAgICAndGVhbSc6IHRoaXMudGVhbVxuICAgICAgICAgIH0pXG4gICAgICAgICAganF1ZXJ5KCcjdGV4dCcpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoanF1ZXJ5KHRoaXMpLnZhbCgpKSB7XG4gICAgICAgICAgICAgIHRoaXMuJHNvY2tldC5lbWl0KCd0eXBpbmcgb24nKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy4kc29ja2V0LmVtaXQoJ3R5cGluZyBvZmYnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy4kc29ja2V0LmVtaXQoJ21lc3NhZ2UnLCBpbnB1dClcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2goe3VzZXJuYW1lOiB0aGlzLm5hbWUsIGNvbnRlbnQ6IGlucHV0fSlcbiAgICAgICAgICBlbnRyeS50YXJnZXQucHJldmlvdXNTaWJsaW5nLnZhbHVlID0gJydcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygnam9pbiAnICsgdGhpcy5uYW1lICsgJyBkZSBsYSB0ZWFtICcgKyB0aGlzLnRlYW0pXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbjwvc2NyaXB0PlxuXG48IS0tIEFkZCBcInNjb3BlZFwiIGF0dHJpYnV0ZSB0byBsaW1pdCBDU1MgdG8gdGhpcyBjb21wb25lbnQgb25seSAtLT5cbjxzdHlsZSBzY29wZWQ+XG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEhlbGxvLnZ1ZT84ODhiNzFlMCJdLCJtYXBwaW5ncyI6Ijs7O0FBc0JBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZCQTtBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBL0JBO0FBbkRBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(4)(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\", \"\"]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlbGxvLnZ1ZT83YjI5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/e1wibWluaW1pemVcIjpmYWxzZSxcInNvdXJjZU1hcFwiOmZhbHNlfSEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1mOTBlM2ZhNFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOmZhbHNlfSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL0hlbGxvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})