webpackHotUpdate(0,{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'hello',\n  data: function data() {\n    return {\n      msg: '',\n      userList: [],\n      name: '',\n      team: ''\n    };\n  },\n\n  sockets: {\n    'on join': function onJoin(data) {\n      this.userList = data.users;\n      console.log(data);\n    },\n    'joined': function joined(data) {\n      this.userList = data.users;\n      console.log(this.name);\n    },\n    erreur: function erreur(data) {\n      console.log(data);\n    }\n  },\n  mounted: function mounted() {\n    var jquery = __webpack_require__(5);\n    var salons = 'http://bazarettes.peh4.com/wp-json/wp/v2/posts';\n    var vm = this;\n    jquery.when(jquery.getJSON(salons), jquery.ready).done(function (data) {\n      vm.msg = data[0][0].title.rendered;\n    }).fail(function (err) {\n      console.log('JSON load fail' + err);\n    });\n  },\n  methods: {\n    joinChat: function joinChat(entry) {\n      var input = entry.target.previousSibling.value;\n      if (input) {\n        if (!this.name) {\n          this.name = input;\n          console.log('bim');\n        } else if (!this.team) {\n          this.team = input;\n          this.$socket.emit('join', {\n            'name': this.name,\n            'id': null,\n            'team': this.team\n          });\n        } else {}\n        console.log('join ' + this.team + ' ' + this.name);\n      }\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vSGVsbG8udnVlPzUyNDkiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiaGVsbG9cIj5cbiAgICA8aDEgdi1odG1sPVwibXNnXCI+PC9oMT5cbiAgICA8dWw+XG4gICAgICA8bGkgdi1mb3I9XCJ1c2VyIGluIHVzZXJMaXN0XCI+XG4gICAgICAgIHt7dXNlci5uYW1lfX1cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgICA8Zm9ybSBhY3Rpb249XCJcIj5cbiAgICAgIDxpbnB1dCBpZD1cIm1cIiBhdXRvY29tcGxldGU9XCJvZmZcIiAvPjxidXR0b24gQGNsaWNrPVwiam9pbkNoYXRcIj5TZW5kPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2hlbGxvJyxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1zZzogJycsXG4gICAgICB1c2VyTGlzdDogW10sXG4gICAgICBuYW1lOiAnJyxcbiAgICAgIHRlYW06ICcnXG4gICAgfVxuICB9LFxuICBzb2NrZXRzOiB7XG4gICAgJ29uIGpvaW4nOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgdGhpcy51c2VyTGlzdCA9IGRhdGEudXNlcnNcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgfSxcbiAgICAnam9pbmVkJzogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHRoaXMudXNlckxpc3QgPSBkYXRhLnVzZXJzXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLm5hbWUpXG4gICAgfSxcbiAgICBlcnJldXI6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgIHZhciBqcXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKVxuICAgIHZhciBzYWxvbnMgPSAnaHR0cDovL2JhemFyZXR0ZXMucGVoNC5jb20vd3AtanNvbi93cC92Mi9wb3N0cydcbiAgICB2YXIgdm0gPSB0aGlzXG4gICAganF1ZXJ5LndoZW4oXG4gICAgICBqcXVlcnkuZ2V0SlNPTihzYWxvbnMpLFxuICAgICAganF1ZXJ5LnJlYWR5XG4gICAgKS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICB2bS5tc2cgPSBkYXRhWzBdWzBdLnRpdGxlLnJlbmRlcmVkXG4gICAgfSkuZmFpbChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZygnSlNPTiBsb2FkIGZhaWwnICsgZXJyKVxuICAgIH0pXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBqb2luQ2hhdDogZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICB2YXIgaW5wdXQgPSBlbnRyeS50YXJnZXQucHJldmlvdXNTaWJsaW5nLnZhbHVlXG4gICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgaWYgKCF0aGlzLm5hbWUpIHtcbiAgICAgICAgICB0aGlzLm5hbWUgPSBpbnB1dFxuICAgICAgICAgIGNvbnNvbGUubG9nKCdiaW0nKVxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnRlYW0pIHtcbiAgICAgICAgICB0aGlzLnRlYW0gPSBpbnB1dFxuICAgICAgICAgIHRoaXMuJHNvY2tldC5lbWl0KCdqb2luJywge1xuICAgICAgICAgICAgJ25hbWUnOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAnaWQnOiBudWxsLFxuICAgICAgICAgICAgJ3RlYW0nOiB0aGlzLnRlYW1cbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ2pvaW4gJyArIHRoaXMudGVhbSArICcgJyArIHRoaXMubmFtZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuPC9zY3JpcHQ+XG5cbjwhLS0gQWRkIFwic2NvcGVkXCIgYXR0cmlidXRlIHRvIGxpbWl0IENTUyB0byB0aGlzIGNvbXBvbmVudCBvbmx5IC0tPlxuPHN0eWxlIHNjb3BlZD5cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gSGVsbG8udnVlPzY4MjQwYzE2Il0sIm1hcHBpbmdzIjoiOzs7QUFnQkE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQW5CQTtBQXBDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})