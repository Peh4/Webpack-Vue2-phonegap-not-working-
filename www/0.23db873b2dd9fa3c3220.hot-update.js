webpackHotUpdate(0,{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n\n\nvar $ = __webpack_require__(14);\nvar salons = 'http://bazarettes.peh4.com/wp-json/wp/v2/posts';\nvar salon = [{ 'title': 'toto' }];\n\n$.when($.getJSON(salons), $.ready).done(function (data) {\n  salon = data;\n  console.log(data[0][0].title);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'hello',\n  data: function data() {\n    return {\n      msg: salon[0][0].title.rendered\n    };\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vSGVsbG8udnVlPzIzYWEiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiaGVsbG9cIj5cbiAgICA8aDEgdi1odG1sPVwicmF3SHRtbFwiPnt7IG1zZyB9fTwvaDE+XG4gICAgPGgyPkVzc2VudGlhbCBMaW5rczwvaDI+XG4gICAgPHVsPlxuICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL3Z1ZWpzLm9yZ1wiIHRhcmdldD1cIl9ibGFua1wiPkNvcmUgRG9jczwvYT48L2xpPlxuICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2ZvcnVtLnZ1ZWpzLm9yZ1wiIHRhcmdldD1cIl9ibGFua1wiPkZvcnVtPC9hPjwvbGk+XG4gICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZ2l0dGVyLmltL3Z1ZWpzL3Z1ZVwiIHRhcmdldD1cIl9ibGFua1wiPkdpdHRlciBDaGF0PC9hPjwvbGk+XG4gICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vdnVlanNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5Ud2l0dGVyPC9hPjwvbGk+XG4gICAgICA8YnI+XG4gICAgICA8bGk+PGEgaHJlZj1cImh0dHA6Ly92dWVqcy10ZW1wbGF0ZXMuZ2l0aHViLmlvL3dlYnBhY2svXCIgdGFyZ2V0PVwiX2JsYW5rXCI+RG9jcyBmb3IgVGhpcyBUZW1wbGF0ZTwvYT48L2xpPlxuICAgIDwvdWw+XG4gICAgPGgyPkVjb3N5c3RlbTwvaDI+XG4gICAgPHVsPlxuICAgICAgPGxpPjxhIGhyZWY9XCJodHRwOi8vcm91dGVyLnZ1ZWpzLm9yZy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj52dWUtcm91dGVyPC9hPjwvbGk+XG4gICAgICA8bGk+PGEgaHJlZj1cImh0dHA6Ly92dWV4LnZ1ZWpzLm9yZy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj52dWV4PC9hPjwvbGk+XG4gICAgICA8bGk+PGEgaHJlZj1cImh0dHA6Ly92dWUtbG9hZGVyLnZ1ZWpzLm9yZy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj52dWUtbG9hZGVyPC9hPjwvbGk+XG4gICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy9hd2Vzb21lLXZ1ZVwiIHRhcmdldD1cIl9ibGFua1wiPmF3ZXNvbWUtdnVlPC9hPjwvbGk+XG4gICAgPC91bD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpXG52YXIgc2Fsb25zID0gJ2h0dHA6Ly9iYXphcmV0dGVzLnBlaDQuY29tL3dwLWpzb24vd3AvdjIvcG9zdHMnXG52YXIgc2Fsb24gPSBbeyAndGl0bGUnOiAndG90bycgfV1cblxuLy8gQSAkKCBkb2N1bWVudCApLnJlYWR5KCkgYmxvY2suXG5cbiQud2hlbihcbiAgJC5nZXRKU09OKHNhbG9ucyksXG4gICQucmVhZHlcbikuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xuICBzYWxvbiA9IGRhdGFcbiAgY29uc29sZS5sb2coZGF0YVswXVswXS50aXRsZSlcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2hlbGxvJyxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1zZzogc2Fsb25bMF1bMF0udGl0bGUucmVuZGVyZWRcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48IS0tIEFkZCBcInNjb3BlZFwiIGF0dHJpYnV0ZSB0byBsaW1pdCBDU1MgdG8gdGhpcyBjb21wb25lbnQgb25seSAtLT5cbjxzdHlsZSBzY29wZWQ+XG5oMSwgaDIge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cblxubGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuXG5hIHtcbiAgY29sb3I6ICM0MmI5ODM7XG59XG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEhlbGxvLnZ1ZT8yNzkwYmZlYSJdLCJtYXBwaW5ncyI6Ijs7O0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFLQTtBQUNBOzs7QUFFQTtBQUVBO0FBQ0E7O0FBRUE7QUFEQTtBQUdBO0FBTkEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})