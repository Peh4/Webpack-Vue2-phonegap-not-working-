webpackHotUpdate(0,{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'hello',\n  data: function data() {\n    return {\n      msg: '',\n      userList: []\n    };\n  },\n\n  sockets: {\n    'add user': function addUser(data) {\n      this.userList.push(data);\n      console.log(this.userList.name);\n    }\n  },\n  mounted: function mounted() {\n    var jquery = __webpack_require__(5);\n    var salons = 'http://bazarettes.peh4.com/wp-json/wp/v2/posts';\n    var vm = this;\n    jquery.when(jquery.getJSON(salons), jquery.ready).done(function (data) {\n      vm.msg = data[0][0].title.rendered;\n    }).fail(function (err) {\n      console.log('JSON load fail' + err);\n    });\n  },\n  methods: {\n    joinChat: function joinChat(name) {\n      if (name.target.previousSibling.value) {\n        this.$socket.emit('join', { 'name': name.target.previousSibling.value, 'id': null, 'team': null });\n      }\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vSGVsbG8udnVlP2VjYTUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiaGVsbG9cIj5cbiAgICA8aDEgdi1odG1sPVwibXNnXCI+PC9oMT5cbiAgICA8dWw+XG4gICAgICA8bGkgdi1mb3I9XCJ1c2VyIGluIHVzZXJMaXN0XCI+XG4gICAgICAgIHt7dXNlci5uYW1lfX1cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgICA8Zm9ybSBhY3Rpb249XCJcIj5cbiAgICAgIDxpbnB1dCBpZD1cIm1cIiBhdXRvY29tcGxldGU9XCJvZmZcIiAvPjxidXR0b24gQGNsaWNrPVwiam9pbkNoYXRcIj5TZW5kPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2hlbGxvJyxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1zZzogJycsXG4gICAgICB1c2VyTGlzdDogW11cbiAgICB9XG4gIH0sXG4gIHNvY2tldHM6IHtcbiAgICAnYWRkIHVzZXInOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgdGhpcy51c2VyTGlzdC5wdXNoKGRhdGEpXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXJMaXN0Lm5hbWUpXG4gICAgfVxuICB9LFxuICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGpxdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpXG4gICAgdmFyIHNhbG9ucyA9ICdodHRwOi8vYmF6YXJldHRlcy5wZWg0LmNvbS93cC1qc29uL3dwL3YyL3Bvc3RzJ1xuICAgIHZhciB2bSA9IHRoaXNcbiAgICBqcXVlcnkud2hlbihcbiAgICAgIGpxdWVyeS5nZXRKU09OKHNhbG9ucyksXG4gICAgICBqcXVlcnkucmVhZHlcbiAgICApLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHZtLm1zZyA9IGRhdGFbMF1bMF0udGl0bGUucmVuZGVyZWRcbiAgICB9KS5mYWlsKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdKU09OIGxvYWQgZmFpbCcgKyBlcnIpXG4gICAgfSlcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGpvaW5DaGF0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgaWYgKG5hbWUudGFyZ2V0LnByZXZpb3VzU2libGluZy52YWx1ZSkge1xuICAgICAgICB0aGlzLiRzb2NrZXQuZW1pdCgnam9pbicsIHsnbmFtZSc6IG5hbWUudGFyZ2V0LnByZXZpb3VzU2libGluZy52YWx1ZSwgJ2lkJzogbnVsbCwgJ3RlYW0nOiBudWxsfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuPC9zY3JpcHQ+XG5cbjwhLS0gQWRkIFwic2NvcGVkXCIgYXR0cmlidXRlIHRvIGxpbWl0IENTUyB0byB0aGlzIGNvbXBvbmVudCBvbmx5IC0tPlxuPHN0eWxlIHNjb3BlZD5cbmgxLCBoMiB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuXG5saSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG5cbmEge1xuICBjb2xvcjogIzQyYjk4Mztcbn1cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gSGVsbG8udnVlPzQyZGY5MjU3Il0sIm1hcHBpbmdzIjoiOzs7QUFnQkE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQTNCQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})