webpackHotUpdate(0,{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n\n\nvar jquery = __webpack_require__(5);\n\nvar salons = 'http://bazarettes.peh4.com/wp-json/wp/v2/posts';\n\njquery.when(jquery.getJSON(salons), jquery.ready).done(function (data) {\n  console.log(data[0][0].title.rendered);\n  this.data.msg = 'test';\n}).fail(function (err) {\n  console.log('msg' + err);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'hello',\n  data: function data() {\n    return {\n      msg: 'salon'\n    };\n  },\n\n  methods: {\n    joinChat: function joinChat(name) {\n      this.$socket.emit('new message', 'join');\n      if (name) {\n        this.$socket.emit('join', 'name');\n      }\n    },\n    updateMsg: function updateMsg(data) {\n      console.log('hop');\n      this.msg = 'test';\n      this.nextTick();\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vSGVsbG8udnVlPzBlNzciXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiaGVsbG9cIj5cbiAgICA8aDEgdi1odG1sPVwibXNnXCI+PC9oMT5cbiAgICA8dWwgaWQ9XCJtZXNzYWdlc1wiPjwvdWw+XG4gICAgPGZvcm0gYWN0aW9uPVwiXCI+XG4gICAgICA8aW5wdXQgaWQ9XCJtXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgLz48YnV0dG9uIEBjbGljaz1cImpvaW5DaGF0XCI+U2VuZDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxudmFyIGpxdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpXG5cbnZhciBzYWxvbnMgPSAnaHR0cDovL2JhemFyZXR0ZXMucGVoNC5jb20vd3AtanNvbi93cC92Mi9wb3N0cydcblxuanF1ZXJ5LndoZW4oXG4gIGpxdWVyeS5nZXRKU09OKHNhbG9ucyksXG4gIGpxdWVyeS5yZWFkeVxuKS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gIGNvbnNvbGUubG9nKGRhdGFbMF1bMF0udGl0bGUucmVuZGVyZWQpXG4gIHRoaXMuZGF0YS5tc2cgPSAndGVzdCdcbn0pLmZhaWwoZnVuY3Rpb24gKGVycikge1xuICBjb25zb2xlLmxvZygnbXNnJyArIGVycilcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2hlbGxvJyxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1zZzogJ3NhbG9uJ1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGpvaW5DaGF0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgdGhpcy4kc29ja2V0LmVtaXQoJ25ldyBtZXNzYWdlJywgJ2pvaW4nKVxuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgdGhpcy4kc29ja2V0LmVtaXQoJ2pvaW4nLCAnbmFtZScpXG4gICAgICB9XG4gICAgfSxcbiAgICB1cGRhdGVNc2c6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZygnaG9wJylcbiAgICAgIHRoaXMubXNnID0gJ3Rlc3QnXG4gICAgICB0aGlzLm5leHRUaWNrKClcbiAgICB9XG4gIH1cbn1cblxuPC9zY3JpcHQ+XG5cbjwhLS0gQWRkIFwic2NvcGVkXCIgYXR0cmlidXRlIHRvIGxpbWl0IENTUyB0byB0aGlzIGNvbXBvbmVudCBvbmx5IC0tPlxuPHN0eWxlIHNjb3BlZD5cbmgxLCBoMiB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuXG5saSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG5cbmEge1xuICBjb2xvcjogIzQyYjk4Mztcbn1cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gSGVsbG8udnVlP2EyMzlhZDcyIl0sIm1hcHBpbmdzIjoiOzs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBRUE7QUFDQTs7QUFFQTtBQURBO0FBR0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFQQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})