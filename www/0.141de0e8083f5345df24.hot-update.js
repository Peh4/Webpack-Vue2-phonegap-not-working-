webpackHotUpdate(0,{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n\n\nvar jquery = __webpack_require__(5);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'hello',\n  data: function data() {\n    return {\n      msg: 'salon'\n    };\n  },\n\n  methods: {\n    joinChat: function joinChat(name) {\n      this.$socket.emit('new message', 'join');\n      if (name) {\n        this.$socket.emit('join', 'name');\n      }\n    },\n    updateMsg: function updateMsg(data) {}\n  }\n});\n\nvar salons = 'http://bazarettes.peh4.com/wp-json/wp/v2/posts';\njquery.when(jquery.getJSON(salons), jquery.ready).done(function (data) {\n  console.log(data);\n}).fail(function (err) {\n  console.log('msg' + err);\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vSGVsbG8udnVlPzEzNWYiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiaGVsbG9cIj5cbiAgICA8aDEgdi1odG1sPVwibXNnXCI+PC9oMT5cbiAgICA8dWwgaWQ9XCJtZXNzYWdlc1wiPjwvdWw+XG4gICAgPGZvcm0gYWN0aW9uPVwiXCI+XG4gICAgICA8aW5wdXQgaWQ9XCJtXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgLz48YnV0dG9uIEBjbGljaz1cImpvaW5DaGF0XCI+U2VuZDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxudmFyIGpxdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2hlbGxvJyxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1zZzogJ3NhbG9uJ1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGpvaW5DaGF0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgdGhpcy4kc29ja2V0LmVtaXQoJ25ldyBtZXNzYWdlJywgJ2pvaW4nKVxuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgdGhpcy4kc29ja2V0LmVtaXQoJ2pvaW4nLCAnbmFtZScpXG4gICAgICB9XG4gICAgfSxcbiAgICB1cGRhdGVNc2c6IGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICB9XG4gIH1cbn1cblxudmFyIHNhbG9ucyA9ICdodHRwOi8vYmF6YXJldHRlcy5wZWg0LmNvbS93cC1qc29uL3dwL3YyL3Bvc3RzJ1xuanF1ZXJ5LndoZW4oXG4gIGpxdWVyeS5nZXRKU09OKHNhbG9ucyksXG4gIGpxdWVyeS5yZWFkeVxuKS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gIGNvbnNvbGUubG9nKGRhdGEpXG59KS5mYWlsKGZ1bmN0aW9uIChlcnIpIHtcbiAgY29uc29sZS5sb2coJ21zZycgKyBlcnIpXG59KVxuXG48L3NjcmlwdD5cblxuPCEtLSBBZGQgXCJzY29wZWRcIiBhdHRyaWJ1dGUgdG8gbGltaXQgQ1NTIHRvIHRoaXMgY29tcG9uZW50IG9ubHkgLS0+XG48c3R5bGUgc2NvcGVkPlxuaDEsIGgyIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxudWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMTBweDtcbn1cblxuYSB7XG4gIGNvbG9yOiAjNDJiOTgzO1xufVxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBIZWxsby52dWU/MTAzZDgyZDAiXSwibWFwcGluZ3MiOiI7OztBQVdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFEQTtBQUdBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFSQTtBQVBBO0FBQ0E7QUFrQkE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})