webpackHotUpdate(0,{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'hello',\n  data: function data() {\n    return {\n      msg: '',\n      userList: null\n    };\n  },\n\n  sockets: {\n    'add user': function addUser(data) {\n      this.userList.push(data);\n      console.log(data.name);\n    }\n  },\n  mounted: function mounted() {\n    var jquery = __webpack_require__(5);\n    var salons = 'http://bazarettes.peh4.com/wp-json/wp/v2/posts';\n    var vm = this;\n    jquery.when(jquery.getJSON(salons), jquery.ready).done(function (data) {\n      vm.msg = data[0][0].title.rendered;\n    }).fail(function (err) {\n      console.log('JSON load fail' + err);\n    });\n  },\n  methods: {\n    joinChat: function joinChat(name) {\n      if (name.target.previousSibling.value) {\n        this.$socket.emit('join', { 'name': name.target.previousSibling.value, 'id': null, 'team': null });\n      }\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vSGVsbG8udnVlP2ZiOGQiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiaGVsbG9cIj5cbiAgICA8aDEgdi1odG1sPVwibXNnXCI+PC9oMT5cbiAgICA8dWw+XG4gICAgICA8bGkgdi1mb3I9XCJ1c2VyIGluIHVzZXJMaXN0XCI+XG4gICAgICAgIHt7dXNlci5uYW1lfX1cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgICA8Zm9ybSBhY3Rpb249XCJcIj5cbiAgICAgIDxpbnB1dCBpZD1cIm1cIiBhdXRvY29tcGxldGU9XCJvZmZcIiAvPjxidXR0b24gQGNsaWNrPVwiam9pbkNoYXRcIj5TZW5kPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2hlbGxvJyxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1zZzogJycsXG4gICAgICB1c2VyTGlzdDogbnVsbFxuICAgIH1cbiAgfSxcbiAgc29ja2V0czoge1xuICAgICdhZGQgdXNlcic6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICB0aGlzLnVzZXJMaXN0LnB1c2goZGF0YSlcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEubmFtZSlcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIganF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5JylcbiAgICB2YXIgc2Fsb25zID0gJ2h0dHA6Ly9iYXphcmV0dGVzLnBlaDQuY29tL3dwLWpzb24vd3AvdjIvcG9zdHMnXG4gICAgdmFyIHZtID0gdGhpc1xuICAgIGpxdWVyeS53aGVuKFxuICAgICAganF1ZXJ5LmdldEpTT04oc2Fsb25zKSxcbiAgICAgIGpxdWVyeS5yZWFkeVxuICAgICkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgdm0ubXNnID0gZGF0YVswXVswXS50aXRsZS5yZW5kZXJlZFxuICAgIH0pLmZhaWwoZnVuY3Rpb24gKGVycikge1xuICAgICAgY29uc29sZS5sb2coJ0pTT04gbG9hZCBmYWlsJyArIGVycilcbiAgICB9KVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgam9pbkNoYXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICBpZiAobmFtZS50YXJnZXQucHJldmlvdXNTaWJsaW5nLnZhbHVlKSB7XG4gICAgICAgIHRoaXMuJHNvY2tldC5lbWl0KCdqb2luJywgeyduYW1lJzogbmFtZS50YXJnZXQucHJldmlvdXNTaWJsaW5nLnZhbHVlLCAnaWQnOiBudWxsLCAndGVhbSc6IG51bGx9KVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG48L3NjcmlwdD5cblxuPCEtLSBBZGQgXCJzY29wZWRcIiBhdHRyaWJ1dGUgdG8gbGltaXQgQ1NTIHRvIHRoaXMgY29tcG9uZW50IG9ubHkgLS0+XG48c3R5bGUgc2NvcGVkPlxuaDEsIGgyIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxudWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMTBweDtcbn1cblxuYSB7XG4gIGNvbG9yOiAjNDJiOTgzO1xufVxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBIZWxsby52dWU/YmU0MjM4M2EiXSwibWFwcGluZ3MiOiI7OztBQWdCQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUZBO0FBSUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBM0JBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})