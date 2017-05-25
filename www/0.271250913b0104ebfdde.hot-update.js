webpackHotUpdate(0,{

/***/ 27:
false,

/***/ 28:
false,

/***/ 29:
false,

/***/ 30:
false,

/***/ 31:
false,

/***/ 32:
false,

/***/ 33:
false,

/***/ 34:
false,

/***/ 35:
false,

/***/ 36:
false,

/***/ 37:
false,

/***/ 38:
false,

/***/ 39:
false,

/***/ 40:
false,

/***/ 41:
false,

/***/ 42:
false,

/***/ 43:
false,

/***/ 44:
false,

/***/ 45:
false,

/***/ 46:
false,

/***/ 47:
false,

/***/ 48:
false,

/***/ 49:
false,

/***/ 50:
false,

/***/ 51:
false,

/***/ 52:
false,

/***/ 53:
false,

/***/ 54:
false,

/***/ 55:
false,

/***/ 56:
false,

/***/ 57:
false,

/***/ 58:
false,

/***/ 59:
false,

/***/ 60:
false,

/***/ 61:
false,

/***/ 62:
false,

/***/ 63:
false,

/***/ 64:
false,

/***/ 65:
false,

/***/ 66:
false,

/***/ 67:
false,

/***/ 68:
false,

/***/ 69:
false,

/***/ 70:
false,

/***/ 71:
false,

/***/ 72:
false,

/***/ 73:
false,

/***/ 74:
false,

/***/ 75:
false,

/***/ 76:
false,

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(16);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(9);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_socket_io__ = __webpack_require__(21);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_socket_io__);\n\n\n\n\n\n\n__WEBPACK_IMPORTED_MODULE_0_vue__[\"default\"].config.productionTip = false;\n\nvar phoneGap = {\n  initialize: function initialize() {\n    this.bindEvents();\n  },\n\n  bindEvents: function bindEvents() {\n    document.addEventListener('deviceready', this.onDeviceReady, false);\n  },\n\n  onDeviceReady: function onDeviceReady() {\n    phoneGap.receivedEvent('deviceready');\n  },\n\n  receivedEvent: function receivedEvent(id) {\n    __WEBPACK_IMPORTED_MODULE_0_vue__[\"default\"].use(__WEBPACK_IMPORTED_MODULE_3_vue_socket_io___default.a, 'http://io.peh4.com:3001');\n    var vm = new __WEBPACK_IMPORTED_MODULE_0_vue__[\"default\"]({\n      el: '#app',\n      router: __WEBPACK_IMPORTED_MODULE_2__router__[\"a\" /* default */],\n      template: '<App/>',\n      components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a },\n      sockets: {\n        connect: function connect() {\n          console.log('socket connectedqsxqs');\n        },\n        'new message': function newMessage(data) {\n          console.log('new message ' + data);\n        },\n        'add user': function addUser(username) {\n          console.log('add user ' + username);\n        },\n        'user joined': function userJoined(username) {\n          console.log('user joined ' + username);\n        },\n        typing: function typing(val) {\n          console.log('this method was fired by the socket server. eg: io.emit(\"customEmit\", data)');\n        }\n      },\n      methods: {\n        clickButton: function clickButton(val) {\n          this.$socket.emit('new message', val);\n        }\n      }\n    });\n    vm.$socket.emit('add user', 'toto');\n  }\n};\n\nphoneGap.initialize();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvbWFpbi5qcz8xYzkwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBWdWUgYnVpbGQgdmVyc2lvbiB0byBsb2FkIHdpdGggdGhlIGBpbXBvcnRgIGNvbW1hbmRcbi8vIChydW50aW1lLW9ubHkgb3Igc3RhbmRhbG9uZSkgaGFzIGJlZW4gc2V0IGluIHdlYnBhY2suYmFzZS5jb25mIHdpdGggYW4gYWxpYXMuXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXG5pbXBvcnQgcm91dGVyIGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IFZ1ZVNvY2tldGlvIGZyb20gJ3Z1ZS1zb2NrZXQuaW8nXG5cblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXG5cbi8vIGltcG9ydCBzb2NrZXRpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xuLy8gdmFyIGlvSW5zdGFuY2UgPSBzb2NrZXRpbygnaHR0cDovL2lvLnBlaDQuY29tOjMwMDEnKVxuLy8gVnVlLnVzZShWdWVTb2NrZXRpbywgaW9JbnN0YW5jZSkgLy8gYmluZCBjdXN0b20gc29ja2V0aW8gaW5zdGFuY2VcblxudmFyIHBob25lR2FwID0ge1xuICAvLyBBcHBsaWNhdGlvbiBDb25zdHJ1Y3RvclxuICBpbml0aWFsaXplOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5iaW5kRXZlbnRzKClcbiAgfSxcbiAgLy8gQmluZCBFdmVudCBMaXN0ZW5lcnNcbiAgLy9cbiAgLy8gQmluZCBhbnkgZXZlbnRzIHRoYXQgYXJlIHJlcXVpcmVkIG9uIHN0YXJ0dXAuIENvbW1vbiBldmVudHMgYXJlOlxuICAvLyAnbG9hZCcsICdkZXZpY2VyZWFkeScsICdvZmZsaW5lJywgYW5kICdvbmxpbmUnLlxuICBiaW5kRXZlbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlcmVhZHknLCB0aGlzLm9uRGV2aWNlUmVhZHksIGZhbHNlKVxuICB9LFxuICAvLyBkZXZpY2VyZWFkeSBFdmVudCBIYW5kbGVyXG4gIC8vXG4gIC8vIFRoZSBzY29wZSBvZiAndGhpcycgaXMgdGhlIGV2ZW50LiBJbiBvcmRlciB0byBjYWxsIHRoZSAncmVjZWl2ZWRFdmVudCdcbiAgLy8gZnVuY3Rpb24sIHdlIG11c3QgZXhwbGljaXRseSBjYWxsICdhcHAucmVjZWl2ZWRFdmVudCguLi4pJ1xuICBvbkRldmljZVJlYWR5OiBmdW5jdGlvbiAoKSB7XG4gICAgcGhvbmVHYXAucmVjZWl2ZWRFdmVudCgnZGV2aWNlcmVhZHknKVxuICB9LFxuICAvLyBVcGRhdGUgRE9NIG9uIGEgUmVjZWl2ZWQgRXZlbnRcbiAgcmVjZWl2ZWRFdmVudDogZnVuY3Rpb24gKGlkKSB7XG4gICAgVnVlLnVzZShWdWVTb2NrZXRpbywgJ2h0dHA6Ly9pby5wZWg0LmNvbTozMDAxJykgLy8gQXV0b21hdGljbHkgc29ja2V0IGNvbm5lY3QgZnJvbSB1cmwgc3RyaW5nXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tbmV3ICovXG4gICAgdmFyIHZtID0gbmV3IFZ1ZSh7XG4gICAgICBlbDogJyNhcHAnLFxuICAgICAgcm91dGVyLFxuICAgICAgdGVtcGxhdGU6ICc8QXBwLz4nLFxuICAgICAgY29tcG9uZW50czogeyBBcHAgfSxcbiAgICAgIHNvY2tldHM6IHtcbiAgICAgICAgY29ubmVjdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdzb2NrZXQgY29ubmVjdGVkcXN4cXMnKVxuICAgICAgICB9LFxuICAgICAgICAnbmV3IG1lc3NhZ2UnOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCduZXcgbWVzc2FnZSAnICsgZGF0YSlcbiAgICAgICAgfSxcbiAgICAgICAgJ2FkZCB1c2VyJzogZnVuY3Rpb24gKHVzZXJuYW1lKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2FkZCB1c2VyICcgKyB1c2VybmFtZSlcbiAgICAgICAgfSxcbiAgICAgICAgJ3VzZXIgam9pbmVkJzogZnVuY3Rpb24gKHVzZXJuYW1lKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3VzZXIgam9pbmVkICcgKyB1c2VybmFtZSlcbiAgICAgICAgfSxcbiAgICAgICAgdHlwaW5nOiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMgbWV0aG9kIHdhcyBmaXJlZCBieSB0aGUgc29ja2V0IHNlcnZlci4gZWc6IGlvLmVtaXQoXCJjdXN0b21FbWl0XCIsIGRhdGEpJylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgY2xpY2tCdXR0b246IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAvLyAkc29ja2V0IGlzIHNvY2tldC5pby1jbGllbnQgaW5zdGFuY2VcbiAgICAgICAgICB0aGlzLiRzb2NrZXQuZW1pdCgnbmV3IG1lc3NhZ2UnLCB2YWwpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIHZtLiRzb2NrZXQuZW1pdCgnYWRkIHVzZXInLCAndG90bycpXG4gIH1cbn1cblxucGhvbmVHYXAuaW5pdGlhbGl6ZSgpXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvbWFpbi5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBaUJBO0FBQ0E7QUFFQTtBQUNBO0FBSkE7QUF0QkE7QUE2QkE7QUFDQTtBQXJEQTtBQUNBO0FBdURBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})