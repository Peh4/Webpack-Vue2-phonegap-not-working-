webpackHotUpdate(0,{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n\n\nvar jquery = __webpack_require__(5);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'hello',\n  data: function data() {\n    return {\n      msg: 'salon'\n    };\n  },\n\n  methods: {\n    joinChat: function joinChat(name) {\n      this.$socket.emit('new message', 'join');\n      if (name) {\n        this.$socket.emit('join', 'name');\n      }\n    },\n    updateMsg: function updateMsg(data) {}\n  }\n});\n\nvar salons = 'http://bazarettes.peh4.com/wp-json/wp/v2/posts';\njquery.when(jquery.getJSON(salons), jquery.ready).done(function (data) {\n  console.log(data[0][0].title.rendered);\n  this.msg = 'updated';\n  this.nextTick(function () {\n    console.log('updated');\n  });\n}).fail(function (err) {\n  console.log('msg' + err);\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vSGVsbG8udnVlP2E3NTQiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiaGVsbG9cIj5cbiAgICA8aDEgdi1odG1sPVwibXNnXCI+PC9oMT5cbiAgICA8dWwgaWQ9XCJtZXNzYWdlc1wiPjwvdWw+XG4gICAgPGZvcm0gYWN0aW9uPVwiXCI+XG4gICAgICA8aW5wdXQgaWQ9XCJtXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgLz48YnV0dG9uIEBjbGljaz1cImpvaW5DaGF0XCI+U2VuZDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxudmFyIGpxdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2hlbGxvJyxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1zZzogJ3NhbG9uJ1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGpvaW5DaGF0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgdGhpcy4kc29ja2V0LmVtaXQoJ25ldyBtZXNzYWdlJywgJ2pvaW4nKVxuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgdGhpcy4kc29ja2V0LmVtaXQoJ2pvaW4nLCAnbmFtZScpXG4gICAgICB9XG4gICAgfSxcbiAgICB1cGRhdGVNc2c6IGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICB9XG4gIH1cbn1cblxudmFyIHNhbG9ucyA9ICdodHRwOi8vYmF6YXJldHRlcy5wZWg0LmNvbS93cC1qc29uL3dwL3YyL3Bvc3RzJ1xuanF1ZXJ5LndoZW4oXG4gIGpxdWVyeS5nZXRKU09OKHNhbG9ucyksXG4gIGpxdWVyeS5yZWFkeVxuKS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gIGNvbnNvbGUubG9nKGRhdGFbMF1bMF0udGl0bGUucmVuZGVyZWQpXG4gIHRoaXMubXNnID0gJ3VwZGF0ZWQnXG4gIHRoaXMubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKCd1cGRhdGVkJylcbiAgfSlcbn0pLmZhaWwoZnVuY3Rpb24gKGVycikge1xuICBjb25zb2xlLmxvZygnbXNnJyArIGVycilcbn0pXG5cbjwvc2NyaXB0PlxuXG48IS0tIEFkZCBcInNjb3BlZFwiIGF0dHJpYnV0ZSB0byBsaW1pdCBDU1MgdG8gdGhpcyBjb21wb25lbnQgb25seSAtLT5cbjxzdHlsZSBzY29wZWQ+XG5oMSwgaDIge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cblxubGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuXG5hIHtcbiAgY29sb3I6ICM0MmI5ODM7XG59XG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEhlbGxvLnZ1ZT8xYWQzZDNkOSJdLCJtYXBwaW5ncyI6Ijs7O0FBV0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQURBO0FBR0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVJBO0FBUEE7QUFDQTtBQWtCQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})