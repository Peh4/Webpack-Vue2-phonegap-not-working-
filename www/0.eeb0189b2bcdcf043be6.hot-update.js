webpackHotUpdate(0,{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'hello',\n  data: function data() {\n    return {\n      msg: '',\n      userList: [],\n      name: '',\n      team: ''\n    };\n  },\n\n  sockets: {\n    'on join': function onJoin(data) {\n      this.userList = data.users;\n      console.log(data);\n    },\n    'joined': function joined(data) {\n      this.userList = data.users;\n      console.log(this.joined);\n    },\n    erreur: function erreur(data) {\n      console.log(data);\n    }\n  },\n  mounted: function mounted() {\n    var jquery = __webpack_require__(5);\n    var salons = 'http://bazarettes.peh4.com/wp-json/wp/v2/posts';\n    var vm = this;\n    jquery.when(jquery.getJSON(salons), jquery.ready).done(function (data) {\n      vm.msg = data[0][0].title.rendered;\n    }).fail(function (err) {\n      console.log('JSON load fail' + err);\n    });\n  },\n  methods: {\n    joinChat: function joinChat(input) {\n      console.log('join');\n      if (input.target.previousSibling.value) {\n        input = input.target.previousSibling.value;\n        if (!this.name) {\n          this.name = input;\n        } else if (!this.team) {\n          this.team = input;\n          this.$socket.emit('join', {\n            'name': this.name,\n            'id': null,\n            'team': this.team\n          });\n        } else {\n          console.log('error');\n        }\n        console.log('join ' + this.name + ' ' + this.team);\n      }\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vSGVsbG8udnVlP2Y1MzQiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiaGVsbG9cIj5cbiAgICA8aDEgdi1odG1sPVwibXNnXCI+PC9oMT5cbiAgICA8dWw+XG4gICAgICA8bGkgdi1mb3I9XCJ1c2VyIGluIHVzZXJMaXN0XCI+XG4gICAgICAgIHt7dXNlci5uYW1lfX1cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgICA8Zm9ybSBhY3Rpb249XCJcIj5cbiAgICAgIDxpbnB1dCBpZD1cIm5hbWVcIiBhdXRvY29tcGxldGU9XCJvZmZcIiAvPlxuICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJqb2luQ2hhdFwiPm5hbWU8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnaGVsbG8nLFxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbXNnOiAnJyxcbiAgICAgIHVzZXJMaXN0OiBbXSxcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgdGVhbTogJydcbiAgICB9XG4gIH0sXG4gIHNvY2tldHM6IHtcbiAgICAnb24gam9pbic6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICB0aGlzLnVzZXJMaXN0ID0gZGF0YS51c2Vyc1xuICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICB9LFxuICAgICdqb2luZWQnOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgdGhpcy51c2VyTGlzdCA9IGRhdGEudXNlcnNcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuam9pbmVkKVxuICAgIH0sXG4gICAgZXJyZXVyOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIganF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5JylcbiAgICB2YXIgc2Fsb25zID0gJ2h0dHA6Ly9iYXphcmV0dGVzLnBlaDQuY29tL3dwLWpzb24vd3AvdjIvcG9zdHMnXG4gICAgdmFyIHZtID0gdGhpc1xuICAgIGpxdWVyeS53aGVuKFxuICAgICAganF1ZXJ5LmdldEpTT04oc2Fsb25zKSxcbiAgICAgIGpxdWVyeS5yZWFkeVxuICAgICkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgdm0ubXNnID0gZGF0YVswXVswXS50aXRsZS5yZW5kZXJlZFxuICAgIH0pLmZhaWwoZnVuY3Rpb24gKGVycikge1xuICAgICAgY29uc29sZS5sb2coJ0pTT04gbG9hZCBmYWlsJyArIGVycilcbiAgICB9KVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgam9pbkNoYXQ6IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgY29uc29sZS5sb2coJ2pvaW4nKVxuICAgICAgaWYgKGlucHV0LnRhcmdldC5wcmV2aW91c1NpYmxpbmcudmFsdWUpIHtcbiAgICAgICAgaW5wdXQgPSBpbnB1dC50YXJnZXQucHJldmlvdXNTaWJsaW5nLnZhbHVlXG4gICAgICAgIGlmICghdGhpcy5uYW1lKSB7XG4gICAgICAgICAgdGhpcy5uYW1lID0gaW5wdXRcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy50ZWFtKSB7XG4gICAgICAgICAgdGhpcy50ZWFtID0gaW5wdXRcbiAgICAgICAgICB0aGlzLiRzb2NrZXQuZW1pdCgnam9pbicsIHtcbiAgICAgICAgICAgICduYW1lJzogdGhpcy5uYW1lLFxuICAgICAgICAgICAgJ2lkJzogbnVsbCxcbiAgICAgICAgICAgICd0ZWFtJzogdGhpcy50ZWFtXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InKVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdqb2luICcgKyB0aGlzLm5hbWUgKyAnICcgKyB0aGlzLnRlYW0pXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbjwvc2NyaXB0PlxuXG48IS0tIEFkZCBcInNjb3BlZFwiIGF0dHJpYnV0ZSB0byBsaW1pdCBDU1MgdG8gdGhpcyBjb21wb25lbnQgb25seSAtLT5cbjxzdHlsZSBzY29wZWQ+XG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEhlbGxvLnZ1ZT8zZjcxNmQ1YSJdLCJtYXBwaW5ncyI6Ijs7O0FBaUJBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkJBO0FBcENBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})