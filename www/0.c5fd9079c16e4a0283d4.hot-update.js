webpackHotUpdate(0,{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'hello',\n  data: function data() {\n    return {\n      msg: '',\n      userList: [],\n      name: '',\n      team: ''\n    };\n  },\n\n  sockets: {\n    'on join': function onJoin(data) {\n      this.userList = data.users;\n      console.log(data);\n    },\n    'joined': function joined(data) {\n      this.userList = data.users;\n      console.log(this.name);\n    },\n    erreur: function erreur(data) {\n      console.log(data);\n    }\n  },\n  mounted: function mounted() {\n    var jquery = __webpack_require__(5);\n    var salons = 'http://bazarettes.peh4.com/wp-json/wp/v2/posts';\n    var vm = this;\n    jquery.when(jquery.getJSON(salons), jquery.ready).done(function (data) {\n      vm.msg = data[0][0].title.rendered;\n    }).fail(function (err) {\n      console.log('JSON load fail' + err);\n    });\n  },\n  methods: {\n    joinChat: function joinChat(name) {\n      var input = name.target.previousSibling.value;\n      if (input) {\n        if (!this.name) {\n          this.name = input;\n          console.log('bim');\n        } else if (!this.team) {\n          this.team = input;\n          this.$socket.emit('join', {\n            'name': this.name,\n            'id': null,\n            'team': this.team\n          });\n        } else {}\n        console.log('join ' + name.target.previousSibling.value);\n      }\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vSGVsbG8udnVlPzA1NmMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiaGVsbG9cIj5cbiAgICA8aDEgdi1odG1sPVwibXNnXCI+PC9oMT5cbiAgICA8dWw+XG4gICAgICA8bGkgdi1mb3I9XCJ1c2VyIGluIHVzZXJMaXN0XCI+XG4gICAgICAgIHt7dXNlci5uYW1lfX1cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgICA8Zm9ybSBhY3Rpb249XCJcIj5cbiAgICAgIDxpbnB1dCBpZD1cIm1cIiBhdXRvY29tcGxldGU9XCJvZmZcIiAvPjxidXR0b24gQGNsaWNrPVwiam9pbkNoYXRcIj5TZW5kPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2hlbGxvJyxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1zZzogJycsXG4gICAgICB1c2VyTGlzdDogW10sXG4gICAgICBuYW1lOiAnJyxcbiAgICAgIHRlYW06ICcnXG4gICAgfVxuICB9LFxuICBzb2NrZXRzOiB7XG4gICAgJ29uIGpvaW4nOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgdGhpcy51c2VyTGlzdCA9IGRhdGEudXNlcnNcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgfSxcbiAgICAnam9pbmVkJzogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHRoaXMudXNlckxpc3QgPSBkYXRhLnVzZXJzXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLm5hbWUpXG4gICAgfSxcbiAgICBlcnJldXI6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgIHZhciBqcXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKVxuICAgIHZhciBzYWxvbnMgPSAnaHR0cDovL2JhemFyZXR0ZXMucGVoNC5jb20vd3AtanNvbi93cC92Mi9wb3N0cydcbiAgICB2YXIgdm0gPSB0aGlzXG4gICAganF1ZXJ5LndoZW4oXG4gICAgICBqcXVlcnkuZ2V0SlNPTihzYWxvbnMpLFxuICAgICAganF1ZXJ5LnJlYWR5XG4gICAgKS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICB2bS5tc2cgPSBkYXRhWzBdWzBdLnRpdGxlLnJlbmRlcmVkXG4gICAgfSkuZmFpbChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZygnSlNPTiBsb2FkIGZhaWwnICsgZXJyKVxuICAgIH0pXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBqb2luQ2hhdDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHZhciBpbnB1dCA9IG5hbWUudGFyZ2V0LnByZXZpb3VzU2libGluZy52YWx1ZVxuICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgIGlmICghdGhpcy5uYW1lKSB7XG4gICAgICAgICAgdGhpcy5uYW1lID0gaW5wdXRcbiAgICAgICAgICBjb25zb2xlLmxvZygnYmltJylcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy50ZWFtKSB7XG4gICAgICAgICAgdGhpcy50ZWFtID0gaW5wdXRcbiAgICAgICAgICB0aGlzLiRzb2NrZXQuZW1pdCgnam9pbicsIHtcbiAgICAgICAgICAgICduYW1lJzogdGhpcy5uYW1lLFxuICAgICAgICAgICAgJ2lkJzogbnVsbCxcbiAgICAgICAgICAgICd0ZWFtJzogdGhpcy50ZWFtXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdqb2luICcgKyBuYW1lLnRhcmdldC5wcmV2aW91c1NpYmxpbmcudmFsdWUpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbjwvc2NyaXB0PlxuXG48IS0tIEFkZCBcInNjb3BlZFwiIGF0dHJpYnV0ZSB0byBsaW1pdCBDU1MgdG8gdGhpcyBjb21wb25lbnQgb25seSAtLT5cbjxzdHlsZSBzY29wZWQ+XG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEhlbGxvLnZ1ZT8zM2Y5OGYwNCJdLCJtYXBwaW5ncyI6Ijs7O0FBZ0JBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFuQkE7QUFwQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})