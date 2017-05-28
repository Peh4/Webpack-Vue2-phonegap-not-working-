webpackHotUpdate(0,{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'hello',\n  data: function data() {\n    return {\n      title: '',\n      messages: [],\n      users: {},\n      typing: {},\n      name: '',\n      team: ''\n    };\n  },\n\n  sockets: {\n    'on join': function onJoin(data) {\n      this.users = data.users;\n      console.log(data);\n    },\n    'joined': function joined(data) {\n      this.users = data.users;\n      console.log(this.name);\n    },\n    'on leave': function onLeave(data) {},\n    'on message': function onMessage(data) {\n      this.messages.push({ data: data });\n      console.log(data);\n    },\n    'on typing on': function onTypingOn(data) {},\n    'on typing off': function onTypingOff(data) {},\n    erreur: function erreur(data) {\n      console.log(data);\n    }\n  },\n  mounted: function mounted() {\n    var jquery = __webpack_require__(5);\n    var salons = 'http://bazarettes.peh4.com/wp-json/wp/v2/posts';\n    var vm = this;\n    jquery.when(jquery.getJSON(salons), jquery.ready).done(function (data) {\n      vm.title = data[0][0].title.rendered;\n    }).fail(function (err) {\n      console.log('JSON load fail' + err);\n    });\n  },\n  methods: {\n    joinChat: function joinChat(entry) {\n      var input = entry.target.previousSibling.value;\n      if (input) {\n        if (!this.name) {\n          this.name = input;\n          console.log('bim');\n        } else if (!this.team) {\n          this.team = input;\n          this.$socket.emit('join', {\n            'name': this.name,\n            'id': null,\n            'team': this.team\n          });\n        } else {\n          this.$socket.emit('message', input);\n          this.messages.push({});\n        }\n        console.log('join ' + this.name + ' de la team ' + this.team);\n      }\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vSGVsbG8udnVlP2NiZjMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiaGVsbG9cIj5cbiAgICA8aDEgdi1odG1sPVwidGl0bGVcIj48L2gxPlxuICAgIDx1bD5cbiAgICAgIDxsaSB2LWZvcj1cInVzZXIgaW4gdXNlcnNcIj5cbiAgICAgICAge3t1c2VyLm5hbWV9fVxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICAgIDx1bD5cbiAgICAgIDxsaSB2LWZvcj1cIm1lc3NhZ2UgaW4gbWVzc2FnZXNcIj5cbiAgICAgICAge3tkYXRhLnVzZXJuYW1lfX0gOiB7e2RhdGEuY29udGVudH19XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICAgPGZvcm0gYWN0aW9uPVwiXCI+XG4gICAgICA8aW5wdXQgaWQ9XCJtXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgLz48YnV0dG9uIEBjbGljaz1cImpvaW5DaGF0XCI+U2VuZDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdoZWxsbycsXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJycsXG4gICAgICBtZXNzYWdlczogW10sXG4gICAgICB1c2Vyczoge30sXG4gICAgICB0eXBpbmc6IHt9LFxuICAgICAgbmFtZTogJycsXG4gICAgICB0ZWFtOiAnJ1xuICAgIH1cbiAgfSxcbiAgc29ja2V0czoge1xuICAgICdvbiBqb2luJzogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHRoaXMudXNlcnMgPSBkYXRhLnVzZXJzXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIH0sXG4gICAgJ2pvaW5lZCc6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICB0aGlzLnVzZXJzID0gZGF0YS51c2Vyc1xuICAgICAgY29uc29sZS5sb2codGhpcy5uYW1lKVxuICAgIH0sXG4gICAgJ29uIGxlYXZlJzogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICB9LFxuICAgICdvbiBtZXNzYWdlJzogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHRoaXMubWVzc2FnZXMucHVzaCh7ZGF0YX0pXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIH0sXG4gICAgJ29uIHR5cGluZyBvbic6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgfSxcbiAgICAnb24gdHlwaW5nIG9mZic6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgfSxcbiAgICBlcnJldXI6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgIHZhciBqcXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKVxuICAgIHZhciBzYWxvbnMgPSAnaHR0cDovL2JhemFyZXR0ZXMucGVoNC5jb20vd3AtanNvbi93cC92Mi9wb3N0cydcbiAgICB2YXIgdm0gPSB0aGlzXG4gICAganF1ZXJ5LndoZW4oXG4gICAgICBqcXVlcnkuZ2V0SlNPTihzYWxvbnMpLFxuICAgICAganF1ZXJ5LnJlYWR5XG4gICAgKS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICB2bS50aXRsZSA9IGRhdGFbMF1bMF0udGl0bGUucmVuZGVyZWRcbiAgICB9KS5mYWlsKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdKU09OIGxvYWQgZmFpbCcgKyBlcnIpXG4gICAgfSlcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGpvaW5DaGF0OiBmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgIHZhciBpbnB1dCA9IGVudHJ5LnRhcmdldC5wcmV2aW91c1NpYmxpbmcudmFsdWVcbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICBpZiAoIXRoaXMubmFtZSkge1xuICAgICAgICAgIHRoaXMubmFtZSA9IGlucHV0XG4gICAgICAgICAgY29uc29sZS5sb2coJ2JpbScpXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMudGVhbSkge1xuICAgICAgICAgIHRoaXMudGVhbSA9IGlucHV0XG4gICAgICAgICAgdGhpcy4kc29ja2V0LmVtaXQoJ2pvaW4nLCB7XG4gICAgICAgICAgICAnbmFtZSc6IHRoaXMubmFtZSxcbiAgICAgICAgICAgICdpZCc6IG51bGwsXG4gICAgICAgICAgICAndGVhbSc6IHRoaXMudGVhbVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy4kc29ja2V0LmVtaXQoJ21lc3NhZ2UnLCBpbnB1dClcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2goe30pXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ2pvaW4gJyArIHRoaXMubmFtZSArICcgZGUgbGEgdGVhbSAnICsgdGhpcy50ZWFtKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG48L3NjcmlwdD5cblxuPCEtLSBBZGQgXCJzY29wZWRcIiBhdHRyaWJ1dGUgdG8gbGltaXQgQ1NTIHRvIHRoaXMgY29tcG9uZW50IG9ubHkgLS0+XG48c3R5bGUgc2NvcGVkPlxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBIZWxsby52dWU/ZDA5YWU0ODYiXSwibWFwcGluZ3MiOiI7OztBQXFCQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQXJCQTtBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7QUFoREEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('div', {\n    staticClass: \"hello\"\n  }, [_c('h1', {\n    domProps: {\n      \"innerHTML\": _vm._s(_vm.title)\n    }\n  }), _vm._v(\" \"), _c('ul', _vm._l((_vm.users), function(user) {\n    return _c('li', [_vm._v(\"\\n      \" + _vm._s(user.name) + \"\\n    \")])\n  })), _vm._v(\" \"), _c('ul', _vm._l((_vm.messages), function(message) {\n    return _c('li', [_vm._v(\"\\n      \" + _vm._s(_vm.data.username) + \" : \" + _vm._s(_vm.data.content) + \"\\n    \")])\n  })), _vm._v(\" \"), _c('form', {\n    attrs: {\n      \"action\": \"\"\n    }\n  }, [_c('input', {\n    attrs: {\n      \"id\": \"m\",\n      \"autocomplete\": \"off\"\n    }\n  }), _c('button', {\n    on: {\n      \"click\": _vm.joinChat\n    }\n  }, [_vm._v(\"Send\")])])])\n},staticRenderFns: []}\nmodule.exports.render._withStripped = true\nif (true) {\n  module.hot.accept()\n  if (module.hot.data) {\n     __webpack_require__(0).rerender(\"data-v-f90e3fa4\", module.exports)\n  }\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWxsby52dWU/NmM5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJoZWxsb1wiXG4gIH0sIFtfYygnaDEnLCB7XG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwiaW5uZXJIVE1MXCI6IF92bS5fcyhfdm0udGl0bGUpXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3VsJywgX3ZtLl9sKChfdm0udXNlcnMpLCBmdW5jdGlvbih1c2VyKSB7XG4gICAgcmV0dXJuIF9jKCdsaScsIFtfdm0uX3YoXCJcXG4gICAgICBcIiArIF92bS5fcyh1c2VyLm5hbWUpICsgXCJcXG4gICAgXCIpXSlcbiAgfSkpLCBfdm0uX3YoXCIgXCIpLCBfYygndWwnLCBfdm0uX2woKF92bS5tZXNzYWdlcyksIGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gX2MoJ2xpJywgW192bS5fdihcIlxcbiAgICAgIFwiICsgX3ZtLl9zKF92bS5kYXRhLnVzZXJuYW1lKSArIFwiIDogXCIgKyBfdm0uX3MoX3ZtLmRhdGEuY29udGVudCkgKyBcIlxcbiAgICBcIildKVxuICB9KSksIF92bS5fdihcIiBcIiksIF9jKCdmb3JtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImFjdGlvblwiOiBcIlwiXG4gICAgfVxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwibVwiLFxuICAgICAgXCJhdXRvY29tcGxldGVcIjogXCJvZmZcIlxuICAgIH1cbiAgfSksIF9jKCdidXR0b24nLCB7XG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmpvaW5DaGF0XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiU2VuZFwiKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1mOTBlM2ZhNFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWY5MGUzZmE0XCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9IZWxsby52dWVcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(4)(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\", \"\"]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlbGxvLnZ1ZT83YjI5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/e1wibWluaW1pemVcIjpmYWxzZSxcInNvdXJjZU1hcFwiOmZhbHNlfSEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1mOTBlM2ZhNFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOmZhbHNlfSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL0hlbGxvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})