webpackHotUpdate(0,{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'hello',\n  data: function data() {\n    return {\n      msg: '',\n      userList: [],\n      name: ''\n    };\n  },\n\n  sockets: {\n    'on join': function onJoin(data) {\n      this.userList = data.users;\n      console.log(data);\n    },\n    'joined': function joined(data) {\n      this.userList = data.users;\n      console.log(this.name);\n    },\n    erreur: function erreur(data) {\n      console.log(data);\n    }\n  },\n  mounted: function mounted() {\n    var jquery = __webpack_require__(5);\n    var salons = 'http://bazarettes.peh4.com/wp-json/wp/v2/posts';\n    var vm = this;\n    jquery.when(jquery.getJSON(salons), jquery.ready).done(function (data) {\n      vm.msg = data[0][0].title.rendered;\n    }).fail(function (err) {\n      console.log('JSON load fail' + err);\n    });\n  },\n  methods: {\n    joinChat: function joinChat(name) {\n      if (name.target.previousSibling.value) {\n        this.name = name.target.previousSibling.value;\n        this.$socket.emit('join', {\n          'name': name.target.previousSibling.value,\n          'id': null,\n          'team': null\n        });\n        console.log('join ' + name.target.previousSibling.value);\n      }\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vSGVsbG8udnVlPzVlZjMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiaGVsbG9cIj5cbiAgICA8aDEgdi1odG1sPVwibXNnXCI+PC9oMT5cbiAgICA8dWw+XG4gICAgICA8bGkgdi1mb3I9XCJ1c2VyIGluIHVzZXJMaXN0XCI+XG4gICAgICAgIHt7dXNlci5uYW1lfX1cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgICA8Zm9ybSBhY3Rpb249XCJcIj5cbiAgICAgIDxpbnB1dCBpZD1cIm1cIiBhdXRvY29tcGxldGU9XCJvZmZcIiAvPjxidXR0b24gQGNsaWNrPVwiam9pbkNoYXRcIj5TZW5kPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2hlbGxvJyxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1zZzogJycsXG4gICAgICB1c2VyTGlzdDogW10sXG4gICAgICBuYW1lOiAnJ1xuICAgIH1cbiAgfSxcbiAgc29ja2V0czoge1xuICAgICdvbiBqb2luJzogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHRoaXMudXNlckxpc3QgPSBkYXRhLnVzZXJzXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIH0sXG4gICAgJ2pvaW5lZCc6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICB0aGlzLnVzZXJMaXN0ID0gZGF0YS51c2Vyc1xuICAgICAgY29uc29sZS5sb2codGhpcy5uYW1lKVxuICAgIH0sXG4gICAgZXJyZXVyOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIganF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5JylcbiAgICB2YXIgc2Fsb25zID0gJ2h0dHA6Ly9iYXphcmV0dGVzLnBlaDQuY29tL3dwLWpzb24vd3AvdjIvcG9zdHMnXG4gICAgdmFyIHZtID0gdGhpc1xuICAgIGpxdWVyeS53aGVuKFxuICAgICAganF1ZXJ5LmdldEpTT04oc2Fsb25zKSxcbiAgICAgIGpxdWVyeS5yZWFkeVxuICAgICkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgdm0ubXNnID0gZGF0YVswXVswXS50aXRsZS5yZW5kZXJlZFxuICAgIH0pLmZhaWwoZnVuY3Rpb24gKGVycikge1xuICAgICAgY29uc29sZS5sb2coJ0pTT04gbG9hZCBmYWlsJyArIGVycilcbiAgICB9KVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgam9pbkNoYXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICBpZiAobmFtZS50YXJnZXQucHJldmlvdXNTaWJsaW5nLnZhbHVlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWUudGFyZ2V0LnByZXZpb3VzU2libGluZy52YWx1ZVxuICAgICAgICB0aGlzLiRzb2NrZXQuZW1pdCgnam9pbicsIHtcbiAgICAgICAgICAnbmFtZSc6IG5hbWUudGFyZ2V0LnByZXZpb3VzU2libGluZy52YWx1ZSxcbiAgICAgICAgICAnaWQnOiBudWxsLFxuICAgICAgICAgICd0ZWFtJzogbnVsbFxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZygnam9pbiAnICsgbmFtZS50YXJnZXQucHJldmlvdXNTaWJsaW5nLnZhbHVlKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG48L3NjcmlwdD5cblxuPCEtLSBBZGQgXCJzY29wZWRcIiBhdHRyaWJ1dGUgdG8gbGltaXQgQ1NTIHRvIHRoaXMgY29tcG9uZW50IG9ubHkgLS0+XG48c3R5bGUgc2NvcGVkPlxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBIZWxsby52dWU/YjIwZjhlODQiXSwibWFwcGluZ3MiOiI7OztBQWdCQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQVhBO0FBbkNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(4)(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\", \"\"]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlbGxvLnZ1ZT83YjI5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/e1wibWluaW1pemVcIjpmYWxzZSxcInNvdXJjZU1hcFwiOmZhbHNlfSEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1mOTBlM2ZhNFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOmZhbHNlfSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL0hlbGxvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})