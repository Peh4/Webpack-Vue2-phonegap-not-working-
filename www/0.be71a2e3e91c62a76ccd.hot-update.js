webpackHotUpdate(0,{

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(16);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(9);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_socket_io__ = __webpack_require__(21);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_socket_io__);\n\n\n\n\n\n\n__WEBPACK_IMPORTED_MODULE_0_vue__[\"default\"].config.productionTip = false;\n\nvar phoneGap = {\n  initialize: function initialize() {\n    this.bindEvents();\n  },\n\n  bindEvents: function bindEvents() {\n    document.addEventListener('deviceready', this.onDeviceReady, false);\n  },\n\n  onDeviceReady: function onDeviceReady() {\n    phoneGap.receivedEvent('deviceready');\n  },\n\n  receivedEvent: function receivedEvent(id) {\n    __WEBPACK_IMPORTED_MODULE_0_vue__[\"default\"].use(__WEBPACK_IMPORTED_MODULE_3_vue_socket_io___default.a, 'http://io.peh4.com:3001');\n\n    var $ = __webpack_require__(14);\n\n    var vm = new __WEBPACK_IMPORTED_MODULE_0_vue__[\"default\"]({\n      el: '#app',\n      router: __WEBPACK_IMPORTED_MODULE_2__router__[\"a\" /* default */],\n      template: '<App/>',\n      components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a },\n      data: {\n        join: false,\n        name: null,\n        users: null,\n        message: null,\n        messages: {}\n      },\n      watch: {\n        messages: function messages() {\n          setTimeout(function () {\n            $('.messages ul').scrollTop(999999999);\n          }, 100);\n        }\n      },\n      sockets: {\n        connect: function connect() {\n          console.log('socket connectedqsxqs');\n          this.$socket.emit('new message', 'connect');\n        },\n        'new message': function newMessage(data) {\n          console.log(data.content);\n        },\n        'add user': function addUser(username) {\n          console.log('add user ' + username);\n        },\n        'user joined': function userJoined(username) {\n          console.log('user joined ' + username);\n        },\n        typing: function typing(val) {\n          console.log('this method was fired by the socket server. eg: io.emit(\"customEmit\", data)');\n        },\n        users: function users(_users) {\n          this.$set('users', _users);\n        },\n        joined: function joined(username) {\n          this.$set('join', true);\n          console.log('user joined ' + username);\n        },\n        messages: function messages(data) {\n          this.$set('messages', data);\n        },\n        onmessage: function onmessage(data) {\n          this.messages.push(data);\n        },\n        adduser: function adduser(user) {\n          this.users.push(user);\n        }\n      },\n      methods: {\n        send: function send(message) {\n          if (message) {\n            this.$socket.emit('send', message);\n            this.$set('message', null);\n          }\n        }\n      }\n    });\n    vm.$socket.emit('join', 'toto');\n  }\n};\n\nphoneGap.initialize();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvbWFpbi5qcz8xYzkwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBWdWUgYnVpbGQgdmVyc2lvbiB0byBsb2FkIHdpdGggdGhlIGBpbXBvcnRgIGNvbW1hbmRcbi8vIChydW50aW1lLW9ubHkgb3Igc3RhbmRhbG9uZSkgaGFzIGJlZW4gc2V0IGluIHdlYnBhY2suYmFzZS5jb25mIHdpdGggYW4gYWxpYXMuXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXG5pbXBvcnQgcm91dGVyIGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IFZ1ZVNvY2tldGlvIGZyb20gJ3Z1ZS1zb2NrZXQuaW8nXG5cblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXG5cbi8vIGltcG9ydCBzb2NrZXRpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xuLy8gdmFyIGlvSW5zdGFuY2UgPSBzb2NrZXRpbygnaHR0cDovL2lvLnBlaDQuY29tOjMwMDEnKVxuLy8gVnVlLnVzZShWdWVTb2NrZXRpbywgaW9JbnN0YW5jZSkgLy8gYmluZCBjdXN0b20gc29ja2V0aW8gaW5zdGFuY2VcblxudmFyIHBob25lR2FwID0ge1xuICAvLyBBcHBsaWNhdGlvbiBDb25zdHJ1Y3RvclxuICBpbml0aWFsaXplOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5iaW5kRXZlbnRzKClcbiAgfSxcbiAgLy8gQmluZCBFdmVudCBMaXN0ZW5lcnNcbiAgLy9cbiAgLy8gQmluZCBhbnkgZXZlbnRzIHRoYXQgYXJlIHJlcXVpcmVkIG9uIHN0YXJ0dXAuIENvbW1vbiBldmVudHMgYXJlOlxuICAvLyAnbG9hZCcsICdkZXZpY2VyZWFkeScsICdvZmZsaW5lJywgYW5kICdvbmxpbmUnLlxuICBiaW5kRXZlbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlcmVhZHknLCB0aGlzLm9uRGV2aWNlUmVhZHksIGZhbHNlKVxuICB9LFxuICAvLyBkZXZpY2VyZWFkeSBFdmVudCBIYW5kbGVyXG4gIC8vXG4gIC8vIFRoZSBzY29wZSBvZiAndGhpcycgaXMgdGhlIGV2ZW50LiBJbiBvcmRlciB0byBjYWxsIHRoZSAncmVjZWl2ZWRFdmVudCdcbiAgLy8gZnVuY3Rpb24sIHdlIG11c3QgZXhwbGljaXRseSBjYWxsICdhcHAucmVjZWl2ZWRFdmVudCguLi4pJ1xuICBvbkRldmljZVJlYWR5OiBmdW5jdGlvbiAoKSB7XG4gICAgcGhvbmVHYXAucmVjZWl2ZWRFdmVudCgnZGV2aWNlcmVhZHknKVxuICB9LFxuICAvLyBVcGRhdGUgRE9NIG9uIGEgUmVjZWl2ZWQgRXZlbnRcbiAgcmVjZWl2ZWRFdmVudDogZnVuY3Rpb24gKGlkKSB7XG4gICAgVnVlLnVzZShWdWVTb2NrZXRpbywgJ2h0dHA6Ly9pby5wZWg0LmNvbTozMDAxJykgLy8gQXV0b21hdGljbHkgc29ja2V0IGNvbm5lY3QgZnJvbSB1cmwgc3RyaW5nXG5cbiAgICB2YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpXG5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1uZXcgKi9cbiAgICB2YXIgdm0gPSBuZXcgVnVlKHtcbiAgICAgIGVsOiAnI2FwcCcsXG4gICAgICByb3V0ZXIsXG4gICAgICB0ZW1wbGF0ZTogJzxBcHAvPicsXG4gICAgICBjb21wb25lbnRzOiB7IEFwcCB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBqb2luOiBmYWxzZSxcbiAgICAgICAgbmFtZTogbnVsbCxcbiAgICAgICAgdXNlcnM6IG51bGwsXG4gICAgICAgIG1lc3NhZ2U6IG51bGwsXG4gICAgICAgIG1lc3NhZ2VzOiB7fVxuICAgICAgfSxcbiAgICAgIHdhdGNoOiB7XG4gICAgICAgIG1lc3NhZ2VzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCcubWVzc2FnZXMgdWwnKS5zY3JvbGxUb3AoOTk5OTk5OTk5KVxuICAgICAgICAgIH0sIDEwMClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNvY2tldHM6IHtcbiAgICAgICAgY29ubmVjdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdzb2NrZXQgY29ubmVjdGVkcXN4cXMnKVxuICAgICAgICAgIHRoaXMuJHNvY2tldC5lbWl0KCduZXcgbWVzc2FnZScsICdjb25uZWN0JylcbiAgICAgICAgfSxcbiAgICAgICAgJ25ldyBtZXNzYWdlJzogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmNvbnRlbnQpXG4gICAgICAgIH0sXG4gICAgICAgICdhZGQgdXNlcic6IGZ1bmN0aW9uICh1c2VybmFtZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdhZGQgdXNlciAnICsgdXNlcm5hbWUpXG4gICAgICAgIH0sXG4gICAgICAgICd1c2VyIGpvaW5lZCc6IGZ1bmN0aW9uICh1c2VybmFtZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCd1c2VyIGpvaW5lZCAnICsgdXNlcm5hbWUpXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGluZzogZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIG1ldGhvZCB3YXMgZmlyZWQgYnkgdGhlIHNvY2tldCBzZXJ2ZXIuIGVnOiBpby5lbWl0KFwiY3VzdG9tRW1pdFwiLCBkYXRhKScpXG4gICAgICAgIH0sXG4gICAgICAgIHVzZXJzOiBmdW5jdGlvbiAodXNlcnMpIHtcbiAgICAgICAgICB0aGlzLiRzZXQoJ3VzZXJzJywgdXNlcnMpXG4gICAgICAgIH0sXG4gICAgICAgIGpvaW5lZDogZnVuY3Rpb24gKHVzZXJuYW1lKSB7XG4gICAgICAgICAgdGhpcy4kc2V0KCdqb2luJywgdHJ1ZSlcbiAgICAgICAgICBjb25zb2xlLmxvZygndXNlciBqb2luZWQgJyArIHVzZXJuYW1lKVxuICAgICAgICB9LFxuICAgICAgICBtZXNzYWdlczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICB0aGlzLiRzZXQoJ21lc3NhZ2VzJywgZGF0YSlcbiAgICAgICAgfSxcbiAgICAgICAgb25tZXNzYWdlOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgIHRoaXMubWVzc2FnZXMucHVzaChkYXRhKVxuICAgICAgICB9LFxuICAgICAgICBhZGR1c2VyOiBmdW5jdGlvbiAodXNlcikge1xuICAgICAgICAgIHRoaXMudXNlcnMucHVzaCh1c2VyKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbWV0aG9kczoge1xuICAgICAgICBzZW5kOiBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgICAgICB0aGlzLiRzb2NrZXQuZW1pdCgnc2VuZCcsIG1lc3NhZ2UpXG4gICAgICAgICAgICB0aGlzLiRzZXQoJ21lc3NhZ2UnLCBudWxsKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICAgdm0uJHNvY2tldC5lbWl0KCdqb2luJywgJ3RvdG8nKVxuICB9XG59XG5cbnBob25lR2FwLmluaXRpYWxpemUoKVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL21haW4uanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhDQTtBQWtDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBckRBO0FBOERBO0FBQ0E7QUF6RkE7QUFDQTtBQTJGQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})