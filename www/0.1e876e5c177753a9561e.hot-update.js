webpackHotUpdate(0,{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n\n\nvar $ = __webpack_require__(14);\nvar salons = 'http://bazarettes.peh4.com/wp-json/wp/v2/posts';\nvar salon = [{ 'title': 'toto' }];\n\n$.when($.getJSON(salons), $.ready).done(function (data) {\n  salon = data[0][0].title.rendered;\n  console.log(data[0][0].title);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'hello',\n  data: function data() {\n    return {\n      msg: salon\n    };\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vSGVsbG8udnVlPzQ2ZWIiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiaGVsbG9cIj5cbiAgICA8aDEgdi1odG1sPVwibXNnXCI+PC9oMT5cbiAgICA8aDI+RXNzZW50aWFsIExpbmtzPC9oMj5cbiAgICA8dWw+XG4gICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vdnVlanMub3JnXCIgdGFyZ2V0PVwiX2JsYW5rXCI+Q29yZSBEb2NzPC9hPjwvbGk+XG4gICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZm9ydW0udnVlanMub3JnXCIgdGFyZ2V0PVwiX2JsYW5rXCI+Rm9ydW08L2E+PC9saT5cbiAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9naXR0ZXIuaW0vdnVlanMvdnVlXCIgdGFyZ2V0PVwiX2JsYW5rXCI+R2l0dGVyIENoYXQ8L2E+PC9saT5cbiAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS92dWVqc1wiIHRhcmdldD1cIl9ibGFua1wiPlR3aXR0ZXI8L2E+PC9saT5cbiAgICAgIDxicj5cbiAgICAgIDxsaT48YSBocmVmPVwiaHR0cDovL3Z1ZWpzLXRlbXBsYXRlcy5naXRodWIuaW8vd2VicGFjay9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5Eb2NzIGZvciBUaGlzIFRlbXBsYXRlPC9hPjwvbGk+XG4gICAgPC91bD5cbiAgICA8aDI+RWNvc3lzdGVtPC9oMj5cbiAgICA8dWw+XG4gICAgICA8bGk+PGEgaHJlZj1cImh0dHA6Ly9yb3V0ZXIudnVlanMub3JnL1wiIHRhcmdldD1cIl9ibGFua1wiPnZ1ZS1yb3V0ZXI8L2E+PC9saT5cbiAgICAgIDxsaT48YSBocmVmPVwiaHR0cDovL3Z1ZXgudnVlanMub3JnL1wiIHRhcmdldD1cIl9ibGFua1wiPnZ1ZXg8L2E+PC9saT5cbiAgICAgIDxsaT48YSBocmVmPVwiaHR0cDovL3Z1ZS1sb2FkZXIudnVlanMub3JnL1wiIHRhcmdldD1cIl9ibGFua1wiPnZ1ZS1sb2FkZXI8L2E+PC9saT5cbiAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzL2F3ZXNvbWUtdnVlXCIgdGFyZ2V0PVwiX2JsYW5rXCI+YXdlc29tZS12dWU8L2E+PC9saT5cbiAgICA8L3VsPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbnZhciAkID0gcmVxdWlyZSgnanF1ZXJ5JylcbnZhciBzYWxvbnMgPSAnaHR0cDovL2JhemFyZXR0ZXMucGVoNC5jb20vd3AtanNvbi93cC92Mi9wb3N0cydcbnZhciBzYWxvbiA9IFt7ICd0aXRsZSc6ICd0b3RvJyB9XVxuXG4vLyBBICQoIGRvY3VtZW50ICkucmVhZHkoKSBibG9jay5cblxuJC53aGVuKFxuICAkLmdldEpTT04oc2Fsb25zKSxcbiAgJC5yZWFkeVxuKS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gIHNhbG9uID0gZGF0YVswXVswXS50aXRsZS5yZW5kZXJlZFxuICBjb25zb2xlLmxvZyhkYXRhWzBdWzBdLnRpdGxlKVxufSlcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnaGVsbG8nLFxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbXNnOiBzYWxvblxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjwhLS0gQWRkIFwic2NvcGVkXCIgYXR0cmlidXRlIHRvIGxpbWl0IENTUyB0byB0aGlzIGNvbXBvbmVudCBvbmx5IC0tPlxuPHN0eWxlIHNjb3BlZD5cbmgxLCBoMiB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuXG5saSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG5cbmEge1xuICBjb2xvcjogIzQyYjk4Mztcbn1cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gSGVsbG8udnVlPzRhYzRjMTZhIl0sIm1hcHBpbmdzIjoiOzs7QUF3QkE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUtBO0FBQ0E7OztBQUVBO0FBRUE7QUFDQTs7QUFFQTtBQURBO0FBR0E7QUFOQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})