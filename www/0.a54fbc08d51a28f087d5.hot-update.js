webpackHotUpdate(0,{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n\n\nvar $ = __webpack_require__(14);\n\nvar salons = 'http://bazarettes.peh4.com/wp-json/wp/v2/posts';\nvar salon = [{ 'title': 'tot' }];\n\n$.when($.getJSON(salons), $.ready).done(function (data) {\n  salon = data[0][0].title.rendered;\n  console.log(data[0][0].title.rendered);\n}).fail(function (err) {\n  salon = err;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'hello',\n  data: function data() {\n    return {\n      msg: salon\n    };\n  },\n\n  methods: {\n    joinChat: function joinChat(name) {\n      this.$socket.emit('join', 'name');\n      console.log('toto');\n      if (name) {\n        this.$socket.emit('join', 'name');\n      }\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vSGVsbG8udnVlPzIyZmMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiaGVsbG9cIj5cbiAgICA8aDEgdi1odG1sPVwibXNnXCI+PC9oMT5cbiAgICA8dWwgaWQ9XCJtZXNzYWdlc1wiPjwvdWw+XG4gICAgPGZvcm0gYWN0aW9uPVwiXCI+XG4gICAgICA8aW5wdXQgaWQ9XCJtXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgLz48YnV0dG9uIEBjbGljaz1cImpvaW5DaGF0XCI+U2VuZDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpXG5cbnZhciBzYWxvbnMgPSAnaHR0cDovL2JhemFyZXR0ZXMucGVoNC5jb20vd3AtanNvbi93cC92Mi9wb3N0cydcbnZhciBzYWxvbiA9IFt7ICd0aXRsZSc6ICd0b3QnIH1dXG5cbiQud2hlbihcbiAgJC5nZXRKU09OKHNhbG9ucyksXG4gICQucmVhZHlcbikuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xuICBzYWxvbiA9IGRhdGFbMF1bMF0udGl0bGUucmVuZGVyZWRcbiAgY29uc29sZS5sb2coZGF0YVswXVswXS50aXRsZS5yZW5kZXJlZClcbn0pLmZhaWwoZnVuY3Rpb24gKGVycikge1xuICBzYWxvbiA9IGVyclxufSlcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnaGVsbG8nLFxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbXNnOiBzYWxvblxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGpvaW5DaGF0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgdGhpcy4kc29ja2V0LmVtaXQoJ2pvaW4nLCAnbmFtZScpXG4gICAgICBjb25zb2xlLmxvZygndG90bycpXG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICB0aGlzLiRzb2NrZXQuZW1pdCgnam9pbicsICduYW1lJylcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48IS0tIEFkZCBcInNjb3BlZFwiIGF0dHJpYnV0ZSB0byBsaW1pdCBDU1MgdG8gdGhpcyBjb21wb25lbnQgb25seSAtLT5cbjxzdHlsZSBzY29wZWQ+XG5oMSwgaDIge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cblxubGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuXG5hIHtcbiAgY29sb3I6ICM0MmI5ODM7XG59XG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEhlbGxvLnZ1ZT8wMGI1Y2Y0ZiJdLCJtYXBwaW5ncyI6Ijs7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBRUE7QUFDQTs7QUFFQTtBQURBO0FBR0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBUEEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})