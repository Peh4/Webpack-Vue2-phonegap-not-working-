webpackHotUpdate(0,{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n\n\nvar $ = __webpack_require__(14);\n\nvar salons = 'http://bazarettes.peh4.com/wp-json/wp/v2/posts';\nvar salon = [{ 'title': 'tot' }];\n\n$.when($.getJSON(salons), $.ready).done(function (data) {\n  salon = data[0][0].title.rendered;\n  console.log(data[0][0].title.rendered);\n}).fail(function (err) {\n  salon = err;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'hello',\n  data: function data() {\n    return {\n      msg: salon\n    };\n  },\n\n  methods: {\n    clickBtn: function clickBtn() {\n      this.$sockets.emit('customEmit', 'toto');\n      console.log('tota');\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vSGVsbG8udnVlP2YzNGIiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiaGVsbG9cIj5cbiAgICA8aDEgdi1odG1sPVwibXNnXCI+PC9oMT5cbiAgICA8dWwgaWQ9XCJtZXNzYWdlc1wiPjwvdWw+XG4gICAgPGZvcm0gYWN0aW9uPVwiXCI+XG4gICAgICA8aW5wdXQgaWQ9XCJtXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgLz48YnV0dG9uIEBjbGljaz1cImNsaWNrQnRuXCI+U2VuZDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpXG5cbnZhciBzYWxvbnMgPSAnaHR0cDovL2JhemFyZXR0ZXMucGVoNC5jb20vd3AtanNvbi93cC92Mi9wb3N0cydcbnZhciBzYWxvbiA9IFt7ICd0aXRsZSc6ICd0b3QnIH1dXG5cbiQud2hlbihcbiAgJC5nZXRKU09OKHNhbG9ucyksXG4gICQucmVhZHlcbikuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xuICBzYWxvbiA9IGRhdGFbMF1bMF0udGl0bGUucmVuZGVyZWRcbiAgY29uc29sZS5sb2coZGF0YVswXVswXS50aXRsZS5yZW5kZXJlZClcbn0pLmZhaWwoZnVuY3Rpb24gKGVycikge1xuICBzYWxvbiA9IGVyclxufSlcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnaGVsbG8nLFxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbXNnOiBzYWxvblxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGNsaWNrQnRuOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLiRzb2NrZXRzLmVtaXQoJ2N1c3RvbUVtaXQnLCAndG90bycpXG4gICAgICBjb25zb2xlLmxvZygndG90YScpXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuPCEtLSBBZGQgXCJzY29wZWRcIiBhdHRyaWJ1dGUgdG8gbGltaXQgQ1NTIHRvIHRoaXMgY29tcG9uZW50IG9ubHkgLS0+XG48c3R5bGUgc2NvcGVkPlxuaDEsIGgyIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxudWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMTBweDtcbn1cblxuYSB7XG4gIGNvbG9yOiAjNDJiOTgzO1xufVxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBIZWxsby52dWU/OWVlMjJiNmEiXSwibWFwcGluZ3MiOiI7OztBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUVBO0FBQ0E7O0FBRUE7QUFEQTtBQUdBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVBBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})