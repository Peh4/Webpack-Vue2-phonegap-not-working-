webpackHotUpdate(0,{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'hello',\n  data: function data() {\n    return {\n      msg: null\n    };\n  },\n\n  mounted: function mounted() {\n    var jquery = __webpack_require__(5);\n    var salons = 'http://bazarettes.peh4.com/wp-json/wp/v2/posts';\n    var vm = this;\n    console.log(vm);\n    jquery.when(jquery.getJSON(salons), jquery.ready).done(function (data) {\n      vm.$set(this.data, 'msg', data[0][0].title.rendered);\n    }).fail(function (err) {\n      console.log('msg' + err);\n    });\n  },\n  methods: {\n    joinChat: function joinChat(name) {\n      this.$socket.emit('new message', 'join');\n      console.log('test');\n      if (name) {\n        this.$socket.emit('join', 'name');\n      }\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vSGVsbG8udnVlPzdlM2MiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiaGVsbG9cIj5cbiAgICA8aDE+e3ttc2d9fTwvaDE+XG4gICAgPHVsIGlkPVwibWVzc2FnZXNcIj48L3VsPlxuICAgIDxmb3JtIGFjdGlvbj1cIlwiPlxuICAgICAgPGlucHV0IGlkPVwibVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIC8+PGJ1dHRvbiBAY2xpY2s9XCJqb2luQ2hhdFwiPlNlbmQ8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnaGVsbG8nLFxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbXNnOiBudWxsXG4gICAgfVxuICB9LFxuICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGpxdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpXG4gICAgdmFyIHNhbG9ucyA9ICdodHRwOi8vYmF6YXJldHRlcy5wZWg0LmNvbS93cC1qc29uL3dwL3YyL3Bvc3RzJ1xuICAgIHZhciB2bSA9IHRoaXNcbiAgICBjb25zb2xlLmxvZyh2bSlcbiAgICBqcXVlcnkud2hlbihcbiAgICAgIGpxdWVyeS5nZXRKU09OKHNhbG9ucyksXG4gICAgICBqcXVlcnkucmVhZHlcbiAgICApLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHZtLiRzZXQodGhpcy5kYXRhLCAnbXNnJywgZGF0YVswXVswXS50aXRsZS5yZW5kZXJlZClcbiAgICB9KS5mYWlsKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdtc2cnICsgZXJyKVxuICAgIH0pXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBqb2luQ2hhdDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHRoaXMuJHNvY2tldC5lbWl0KCduZXcgbWVzc2FnZScsICdqb2luJylcbiAgICAgIGNvbnNvbGUubG9nKCd0ZXN0JylcbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHRoaXMuJHNvY2tldC5lbWl0KCdqb2luJywgJ25hbWUnKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG48L3NjcmlwdD5cblxuPCEtLSBBZGQgXCJzY29wZWRcIiBhdHRyaWJ1dGUgdG8gbGltaXQgQ1NTIHRvIHRoaXMgY29tcG9uZW50IG9ubHkgLS0+XG48c3R5bGUgc2NvcGVkPlxuaDEsIGgyIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxudWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMTBweDtcbn1cblxuYSB7XG4gIGNvbG9yOiAjNDJiOTgzO1xufVxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBIZWxsby52dWU/N2ZkYjY3ODciXSwibWFwcGluZ3MiOiI7OztBQVlBO0FBRUE7QUFDQTs7QUFFQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQXJCQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})