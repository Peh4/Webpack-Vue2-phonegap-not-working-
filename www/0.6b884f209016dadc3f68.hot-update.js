webpackHotUpdate(0,{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'hello',\n  data: function data() {\n    return {\n      title: '',\n      messages: [],\n      users: [],\n      name: '',\n      team: ''\n    };\n  },\n\n  sockets: {\n    'on join': function onJoin(data) {\n      this.users = data.users;\n      console.log(data);\n    },\n    'joined': function joined(data) {\n      this.users = data.users;\n      console.log(this.name);\n    },\n    erreur: function erreur(data) {\n      console.log(data);\n    }\n  },\n  mounted: function mounted() {\n    var jquery = __webpack_require__(5);\n    var salons = 'http://bazarettes.peh4.com/wp-json/wp/v2/posts';\n    var vm = this;\n    jquery.when(jquery.getJSON(salons), jquery.ready).done(function (data) {\n      vm.title = data[0][0].title.rendered;\n    }).fail(function (err) {\n      console.log('JSON load fail' + err);\n    });\n  },\n  methods: {\n    joinChat: function joinChat(entry) {\n      var input = entry.target.previousSibling.value;\n      if (input) {\n        if (!this.name) {\n          this.name = input;\n          console.log('bim');\n        } else if (!this.team) {\n          this.team = input;\n          this.$socket.emit('join', {\n            'name': this.name,\n            'id': null,\n            'team': this.team\n          });\n        } else {}\n        console.log('join ' + this.name + ' de la team ' + this.team);\n      }\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vSGVsbG8udnVlP2QwMDQiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiaGVsbG9cIj5cbiAgICA8aDEgdi1odG1sPVwidGl0bGVcIj48L2gxPlxuICAgIDx1bD5cbiAgICAgIDxsaSB2LWZvcj1cInVzZXIgaW4gdXNlcnNcIj5cbiAgICAgICAge3t1c2VyLm5hbWV9fVxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICAgIDx1bD5cbiAgICAgIDxsaSB2LWZvcj1cIm1lc3NhZ2UgaW4gbWVzc2FnZXNcIj5cbiAgICAgICAge3t1c2VyLm5hbWV9fVxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICAgIDxmb3JtIGFjdGlvbj1cIlwiPlxuICAgICAgPGlucHV0IGlkPVwibVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIC8+PGJ1dHRvbiBAY2xpY2s9XCJqb2luQ2hhdFwiPlNlbmQ8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnaGVsbG8nLFxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICcnLFxuICAgICAgbWVzc2FnZXM6IFtdLFxuICAgICAgdXNlcnM6IFtdLFxuICAgICAgbmFtZTogJycsXG4gICAgICB0ZWFtOiAnJ1xuICAgIH1cbiAgfSxcbiAgc29ja2V0czoge1xuICAgICdvbiBqb2luJzogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHRoaXMudXNlcnMgPSBkYXRhLnVzZXJzXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIH0sXG4gICAgJ2pvaW5lZCc6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICB0aGlzLnVzZXJzID0gZGF0YS51c2Vyc1xuICAgICAgY29uc29sZS5sb2codGhpcy5uYW1lKVxuICAgIH0sXG4gICAgZXJyZXVyOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIganF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5JylcbiAgICB2YXIgc2Fsb25zID0gJ2h0dHA6Ly9iYXphcmV0dGVzLnBlaDQuY29tL3dwLWpzb24vd3AvdjIvcG9zdHMnXG4gICAgdmFyIHZtID0gdGhpc1xuICAgIGpxdWVyeS53aGVuKFxuICAgICAganF1ZXJ5LmdldEpTT04oc2Fsb25zKSxcbiAgICAgIGpxdWVyeS5yZWFkeVxuICAgICkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgdm0udGl0bGUgPSBkYXRhWzBdWzBdLnRpdGxlLnJlbmRlcmVkXG4gICAgfSkuZmFpbChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZygnSlNPTiBsb2FkIGZhaWwnICsgZXJyKVxuICAgIH0pXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBqb2luQ2hhdDogZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICB2YXIgaW5wdXQgPSBlbnRyeS50YXJnZXQucHJldmlvdXNTaWJsaW5nLnZhbHVlXG4gICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgaWYgKCF0aGlzLm5hbWUpIHtcbiAgICAgICAgICB0aGlzLm5hbWUgPSBpbnB1dFxuICAgICAgICAgIGNvbnNvbGUubG9nKCdiaW0nKVxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnRlYW0pIHtcbiAgICAgICAgICB0aGlzLnRlYW0gPSBpbnB1dFxuICAgICAgICAgIHRoaXMuJHNvY2tldC5lbWl0KCdqb2luJywge1xuICAgICAgICAgICAgJ25hbWUnOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAnaWQnOiBudWxsLFxuICAgICAgICAgICAgJ3RlYW0nOiB0aGlzLnRlYW1cbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ2pvaW4gJyArIHRoaXMubmFtZSArICcgZGUgbGEgdGVhbSAnICsgdGhpcy50ZWFtKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG48L3NjcmlwdD5cblxuPCEtLSBBZGQgXCJzY29wZWRcIiBhdHRyaWJ1dGUgdG8gbGltaXQgQ1NTIHRvIHRoaXMgY29tcG9uZW50IG9ubHkgLS0+XG48c3R5bGUgc2NvcGVkPlxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBIZWxsby52dWU/M2VmYWQwYWIiXSwibWFwcGluZ3MiOiI7OztBQXFCQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFuQkE7QUFyQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('div', {\n    staticClass: \"hello\"\n  }, [_c('h1', {\n    domProps: {\n      \"innerHTML\": _vm._s(_vm.title)\n    }\n  }), _vm._v(\" \"), _c('ul', _vm._l((_vm.users), function(user) {\n    return _c('li', [_vm._v(\"\\n      \" + _vm._s(user.name) + \"\\n    \")])\n  })), _vm._v(\" \"), _c('ul', _vm._l((_vm.messages), function(message) {\n    return _c('li', [_vm._v(\"\\n      \" + _vm._s(_vm.user.name) + \"\\n    \")])\n  })), _vm._v(\" \"), _c('form', {\n    attrs: {\n      \"action\": \"\"\n    }\n  }, [_c('input', {\n    attrs: {\n      \"id\": \"m\",\n      \"autocomplete\": \"off\"\n    }\n  }), _c('button', {\n    on: {\n      \"click\": _vm.joinChat\n    }\n  }, [_vm._v(\"Send\")])])])\n},staticRenderFns: []}\nmodule.exports.render._withStripped = true\nif (true) {\n  module.hot.accept()\n  if (module.hot.data) {\n     __webpack_require__(0).rerender(\"data-v-f90e3fa4\", module.exports)\n  }\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWxsby52dWU/NmM5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJoZWxsb1wiXG4gIH0sIFtfYygnaDEnLCB7XG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwiaW5uZXJIVE1MXCI6IF92bS5fcyhfdm0udGl0bGUpXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3VsJywgX3ZtLl9sKChfdm0udXNlcnMpLCBmdW5jdGlvbih1c2VyKSB7XG4gICAgcmV0dXJuIF9jKCdsaScsIFtfdm0uX3YoXCJcXG4gICAgICBcIiArIF92bS5fcyh1c2VyLm5hbWUpICsgXCJcXG4gICAgXCIpXSlcbiAgfSkpLCBfdm0uX3YoXCIgXCIpLCBfYygndWwnLCBfdm0uX2woKF92bS5tZXNzYWdlcyksIGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gX2MoJ2xpJywgW192bS5fdihcIlxcbiAgICAgIFwiICsgX3ZtLl9zKF92bS51c2VyLm5hbWUpICsgXCJcXG4gICAgXCIpXSlcbiAgfSkpLCBfdm0uX3YoXCIgXCIpLCBfYygnZm9ybScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJhY3Rpb25cIjogXCJcIlxuICAgIH1cbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcIm1cIixcbiAgICAgIFwiYXV0b2NvbXBsZXRlXCI6IFwib2ZmXCJcbiAgICB9XG4gIH0pLCBfYygnYnV0dG9uJywge1xuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5qb2luQ2hhdFxuICAgIH1cbiAgfSwgW192bS5fdihcIlNlbmRcIildKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtZjkwZTNmYTRcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1mOTBlM2ZhNFwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvSGVsbG8udnVlXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(4)(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\", \"\"]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlbGxvLnZ1ZT83YjI5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/e1wibWluaW1pemVcIjpmYWxzZSxcInNvdXJjZU1hcFwiOmZhbHNlfSEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1mOTBlM2ZhNFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOmZhbHNlfSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL0hlbGxvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})