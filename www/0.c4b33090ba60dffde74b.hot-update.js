webpackHotUpdate(0,{

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('div', {\n    staticClass: \"hello\"\n  }, [_c('h1', {\n    domProps: {\n      \"innerHTML\": _vm._s(_vm.msg)\n    }\n  }), _vm._v(\" \"), _c('ul', _vm._l((_vm.userList), function(user) {\n    return _c('li', [_vm._v(\"\\n      \" + _vm._s(user.name) + \"\\n    \")])\n  })), _vm._v(\" \"), (!_vm.joined) ? _c('form', {\n    attrs: {\n      \"action\": \"\"\n    }\n  }, [_c('input', {\n    attrs: {\n      \"id\": \"name\",\n      \"autocomplete\": \"off\"\n    }\n  }), _vm._v(\" \"), _c('button', {\n    on: {\n      \"click\": _vm.joinChat\n    }\n  }, [_vm._v(\"name\")])]) : (!_vm.team) ? _c('form', {\n    attrs: {\n      \"action\": \"\"\n    }\n  }, [_c('input', {\n    attrs: {\n      \"id\": \"team\",\n      \"autocomplete\": \"off\"\n    }\n  }), _vm._v(\" \"), _c('button', {\n    on: {\n      \"click\": _vm.joinTeam\n    }\n  }, [_vm._v(\"Team\")])]) : _c('form', {\n    attrs: {\n      \"action\": \"\"\n    }\n  }, [_c('input', {\n    attrs: {\n      \"id\": \"write\",\n      \"autocomplete\": \"off\"\n    }\n  }), _vm._v(\" \"), _c('button', {\n    on: {\n      \"click\": _vm.write\n    }\n  }, [_vm._v(\"message\")])])])\n},staticRenderFns: []}\nmodule.exports.render._withStripped = true\nif (true) {\n  module.hot.accept()\n  if (module.hot.data) {\n     __webpack_require__(0).rerender(\"data-v-f90e3fa4\", module.exports)\n  }\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWxsby52dWU/NmM5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJoZWxsb1wiXG4gIH0sIFtfYygnaDEnLCB7XG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwiaW5uZXJIVE1MXCI6IF92bS5fcyhfdm0ubXNnKVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCd1bCcsIF92bS5fbCgoX3ZtLnVzZXJMaXN0KSwgZnVuY3Rpb24odXNlcikge1xuICAgIHJldHVybiBfYygnbGknLCBbX3ZtLl92KFwiXFxuICAgICAgXCIgKyBfdm0uX3ModXNlci5uYW1lKSArIFwiXFxuICAgIFwiKV0pXG4gIH0pKSwgX3ZtLl92KFwiIFwiKSwgKCFfdm0uam9pbmVkKSA/IF9jKCdmb3JtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImFjdGlvblwiOiBcIlwiXG4gICAgfVxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwibmFtZVwiLFxuICAgICAgXCJhdXRvY29tcGxldGVcIjogXCJvZmZcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmpvaW5DaGF0XG4gICAgfVxuICB9LCBbX3ZtLl92KFwibmFtZVwiKV0pXSkgOiAoIV92bS50ZWFtKSA/IF9jKCdmb3JtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImFjdGlvblwiOiBcIlwiXG4gICAgfVxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwidGVhbVwiLFxuICAgICAgXCJhdXRvY29tcGxldGVcIjogXCJvZmZcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmpvaW5UZWFtXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiVGVhbVwiKV0pXSkgOiBfYygnZm9ybScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJhY3Rpb25cIjogXCJcIlxuICAgIH1cbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcIndyaXRlXCIsXG4gICAgICBcImF1dG9jb21wbGV0ZVwiOiBcIm9mZlwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0ud3JpdGVcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJtZXNzYWdlXCIpXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWY5MGUzZmE0XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtZjkwZTNmYTRcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL0hlbGxvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})