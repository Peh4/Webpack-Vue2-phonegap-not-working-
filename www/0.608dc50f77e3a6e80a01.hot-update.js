webpackHotUpdate(0,{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'hello',\n  data: function data() {\n    return {\n      title: 'loading',\n      btn: 'name',\n      messages: [],\n      users: {},\n      typing: {},\n      name: '',\n      team: ''\n    };\n  },\n\n  sockets: {\n    'on join': function onJoin(data) {\n      this.users = data.users;\n      console.log(data);\n    },\n    'joined': function joined(data) {\n      this.users = data.users;\n      this.btn = 'message';\n    },\n    'on leave': function onLeave(data) {},\n    'on message': function onMessage(data) {\n      this.messages.push(data);\n      console.log(this.messages);\n    },\n    'on typing on': function onTypingOn(data) {\n      console.log(data.username);\n    },\n    'on typing off': function onTypingOff(data) {\n      console.log(data.username);\n    },\n    erreur: function erreur(data) {\n      console.log(data);\n    }\n  },\n  mounted: function mounted() {\n    var jquery = __webpack_require__(5);\n    var salons = 'http://bazarettes.peh4.com/wp-json/wp/v2/posts';\n    var vm = this;\n    jquery.when(jquery.getJSON(salons), jquery.ready).done(function (data) {\n      vm.title = data[0][0].title.rendered;\n    }).fail(function (err) {\n      console.log('JSON load fail' + err);\n    });\n  },\n  methods: {\n    joinChat: function joinChat(entry) {\n      var jquery = __webpack_require__(5);\n      var vm = this;\n      var input = entry.target.previousSibling.value;\n      if (input) {\n        if (!this.name) {\n          this.name = input;\n          this.btn = 'équipe';\n          entry.target.previousSibling.value = '';\n        } else if (!this.team) {\n          this.team = input;\n          entry.target.previousSibling.value = '';\n          this.$socket.emit('join', {\n            'name': this.name,\n            'id': null,\n            'team': this.team\n          });\n          jquery('#text').change(function () {\n            if (jquery(this).val()) {\n              vm.$socket.emit('typing on');\n            } else {\n              vm.$socket.emit('typing off');\n            }\n          });\n        } else {\n          this.$socket.emit('message', input);\n          this.messages.push({ username: this.name, content: input });\n          entry.target.previousSibling.value = '';\n        }\n        console.log('join ' + this.name + ' de la team ' + this.team);\n      }\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vSGVsbG8udnVlP2EwMmYiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiaGVsbG9cIj5cbiAgICA8aDEgdi1odG1sPVwidGl0bGVcIj48L2gxPlxuICAgIDx1bD5cbiAgICAgIDxsaSB2LWZvcj1cInVzZXIgaW4gdXNlcnNcIj5cbiAgICAgICAge3t1c2VyLm5hbWV9fVxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICAgIDx1bD5cbiAgICAgIDxsaSB2LWZvcj1cIm1lc3NhZ2UgaW4gbWVzc2FnZXNcIj5cbiAgICAgICAge3ttZXNzYWdlLnVzZXJuYW1lfX0gOiB7e21lc3NhZ2UuY29udGVudH19XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICAgPGZvcm0gYWN0aW9uPVwiXCI+XG4gICAgICA8aW5wdXQgaWQ9XCJ0ZXh0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgLz48YnV0dG9uIEBjbGljaz1cImpvaW5DaGF0XCI+e3tidG59fTwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdoZWxsbycsXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ2xvYWRpbmcnLFxuICAgICAgYnRuOiAnbmFtZScsXG4gICAgICBtZXNzYWdlczogW10sXG4gICAgICB1c2Vyczoge30sXG4gICAgICB0eXBpbmc6IHt9LFxuICAgICAgbmFtZTogJycsXG4gICAgICB0ZWFtOiAnJ1xuICAgIH1cbiAgfSxcbiAgc29ja2V0czoge1xuICAgICdvbiBqb2luJzogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHRoaXMudXNlcnMgPSBkYXRhLnVzZXJzXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIH0sXG4gICAgJ2pvaW5lZCc6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICB0aGlzLnVzZXJzID0gZGF0YS51c2Vyc1xuICAgICAgdGhpcy5idG4gPSAnbWVzc2FnZSdcbiAgICB9LFxuICAgICdvbiBsZWF2ZSc6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgfSxcbiAgICAnb24gbWVzc2FnZSc6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICB0aGlzLm1lc3NhZ2VzLnB1c2goZGF0YSlcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMubWVzc2FnZXMpXG4gICAgfSxcbiAgICAnb24gdHlwaW5nIG9uJzogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEudXNlcm5hbWUpXG4gICAgfSxcbiAgICAnb24gdHlwaW5nIG9mZic6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhLnVzZXJuYW1lKVxuICAgIH0sXG4gICAgZXJyZXVyOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIganF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5JylcbiAgICB2YXIgc2Fsb25zID0gJ2h0dHA6Ly9iYXphcmV0dGVzLnBlaDQuY29tL3dwLWpzb24vd3AvdjIvcG9zdHMnXG4gICAgdmFyIHZtID0gdGhpc1xuICAgIGpxdWVyeS53aGVuKFxuICAgICAganF1ZXJ5LmdldEpTT04oc2Fsb25zKSxcbiAgICAgIGpxdWVyeS5yZWFkeVxuICAgICkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgdm0udGl0bGUgPSBkYXRhWzBdWzBdLnRpdGxlLnJlbmRlcmVkXG4gICAgfSkuZmFpbChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZygnSlNPTiBsb2FkIGZhaWwnICsgZXJyKVxuICAgIH0pXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBqb2luQ2hhdDogZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICB2YXIganF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5JylcbiAgICAgIHZhciB2bSA9IHRoaXNcbiAgICAgIHZhciBpbnB1dCA9IGVudHJ5LnRhcmdldC5wcmV2aW91c1NpYmxpbmcudmFsdWVcbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICBpZiAoIXRoaXMubmFtZSkge1xuICAgICAgICAgIHRoaXMubmFtZSA9IGlucHV0XG4gICAgICAgICAgdGhpcy5idG4gPSAnw6lxdWlwZSdcbiAgICAgICAgICBlbnRyeS50YXJnZXQucHJldmlvdXNTaWJsaW5nLnZhbHVlID0gJydcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy50ZWFtKSB7XG4gICAgICAgICAgdGhpcy50ZWFtID0gaW5wdXRcbiAgICAgICAgICBlbnRyeS50YXJnZXQucHJldmlvdXNTaWJsaW5nLnZhbHVlID0gJydcbiAgICAgICAgICB0aGlzLiRzb2NrZXQuZW1pdCgnam9pbicsIHtcbiAgICAgICAgICAgICduYW1lJzogdGhpcy5uYW1lLFxuICAgICAgICAgICAgJ2lkJzogbnVsbCxcbiAgICAgICAgICAgICd0ZWFtJzogdGhpcy50ZWFtXG4gICAgICAgICAgfSlcbiAgICAgICAgICBqcXVlcnkoJyN0ZXh0JykuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChqcXVlcnkodGhpcykudmFsKCkpIHtcbiAgICAgICAgICAgICAgdm0uJHNvY2tldC5lbWl0KCd0eXBpbmcgb24nKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdm0uJHNvY2tldC5lbWl0KCd0eXBpbmcgb2ZmJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuJHNvY2tldC5lbWl0KCdtZXNzYWdlJywgaW5wdXQpXG4gICAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKHt1c2VybmFtZTogdGhpcy5uYW1lLCBjb250ZW50OiBpbnB1dH0pXG4gICAgICAgICAgZW50cnkudGFyZ2V0LnByZXZpb3VzU2libGluZy52YWx1ZSA9ICcnXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ2pvaW4gJyArIHRoaXMubmFtZSArICcgZGUgbGEgdGVhbSAnICsgdGhpcy50ZWFtKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG48L3NjcmlwdD5cblxuPCEtLSBBZGQgXCJzY29wZWRcIiBhdHRyaWJ1dGUgdG8gbGltaXQgQ1NTIHRvIHRoaXMgY29tcG9uZW50IG9ubHkgLS0+XG48c3R5bGUgc2NvcGVkPlxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBIZWxsby52dWU/YWIwMzRmYWUiXSwibWFwcGluZ3MiOiI7OztBQXFCQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2QkE7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaENBO0FBbkRBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(4)(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\", \"\"]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlbGxvLnZ1ZT83YjI5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/e1wibWluaW1pemVcIjpmYWxzZSxcInNvdXJjZU1hcFwiOmZhbHNlfSEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1mOTBlM2ZhNFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOmZhbHNlfSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL0hlbGxvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})