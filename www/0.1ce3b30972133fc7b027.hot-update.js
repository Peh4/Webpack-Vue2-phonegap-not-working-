webpackHotUpdate(0,{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'hello',\n  data: function data() {\n    return {\n      msg: ''\n    };\n  },\n\n  mounted: function mounted() {\n    var jquery = __webpack_require__(5);\n    var salons = 'http://bazarettes.peh4.com/wp-json/wp/v2/posts';\n    var vm = this;\n    jquery.when(jquery.getJSON(salons), jquery.ready).done(function (data) {\n      vm.msg = data[0][0].title.rendered;\n    }).fail(function (err) {\n      console.log('JSON load fail' + err);\n    });\n  },\n  methods: {\n    joinChat: function joinChat(name) {\n      this.$socket.emit('new message', 'name');\n      console.log(name.target.previousSibling);\n      if (name) {\n        this.$socket.emit('join', 'name');\n      }\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vSGVsbG8udnVlPzEwYjEiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiaGVsbG9cIj5cbiAgICA8aDEgdi1odG1sPVwibXNnXCI+PC9oMT5cbiAgICA8dWwgaWQ9XCJtZXNzYWdlc1wiPjwvdWw+XG4gICAgPGZvcm0gYWN0aW9uPVwiXCI+XG4gICAgICA8aW5wdXQgaWQ9XCJtXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgLz48YnV0dG9uIEBjbGljaz1cImpvaW5DaGF0XCI+U2VuZDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdoZWxsbycsXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtc2c6ICcnXG4gICAgfVxuICB9LFxuICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGpxdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpXG4gICAgdmFyIHNhbG9ucyA9ICdodHRwOi8vYmF6YXJldHRlcy5wZWg0LmNvbS93cC1qc29uL3dwL3YyL3Bvc3RzJ1xuICAgIHZhciB2bSA9IHRoaXNcbiAgICBqcXVlcnkud2hlbihcbiAgICAgIGpxdWVyeS5nZXRKU09OKHNhbG9ucyksXG4gICAgICBqcXVlcnkucmVhZHlcbiAgICApLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHZtLm1zZyA9IGRhdGFbMF1bMF0udGl0bGUucmVuZGVyZWRcbiAgICB9KS5mYWlsKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdKU09OIGxvYWQgZmFpbCcgKyBlcnIpXG4gICAgfSlcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGpvaW5DaGF0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgdGhpcy4kc29ja2V0LmVtaXQoJ25ldyBtZXNzYWdlJywgJ25hbWUnKVxuICAgICAgY29uc29sZS5sb2cobmFtZS50YXJnZXQucHJldmlvdXNTaWJsaW5nKVxuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgdGhpcy4kc29ja2V0LmVtaXQoJ2pvaW4nLCAnbmFtZScpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbjwvc2NyaXB0PlxuXG48IS0tIEFkZCBcInNjb3BlZFwiIGF0dHJpYnV0ZSB0byBsaW1pdCBDU1MgdG8gdGhpcyBjb21wb25lbnQgb25seSAtLT5cbjxzdHlsZSBzY29wZWQ+XG5oMSwgaDIge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cblxubGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuXG5hIHtcbiAgY29sb3I6ICM0MmI5ODM7XG59XG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEhlbGxvLnZ1ZT80NWJiMjEyNyJdLCJtYXBwaW5ncyI6Ijs7O0FBWUE7QUFFQTtBQUNBOztBQUVBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQXBCQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})