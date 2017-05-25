webpackHotUpdate(0,{

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(16);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(9);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_socket_io__ = __webpack_require__(21);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_socket_io__);\n\n\n\n\n\n\n__WEBPACK_IMPORTED_MODULE_0_vue__[\"default\"].config.productionTip = false;\n__WEBPACK_IMPORTED_MODULE_0_vue__[\"default\"].use(__WEBPACK_IMPORTED_MODULE_3_vue_socket_io___default.a, 'http://io.peh4.com:3001');\n\nvar phoneGap = {\n  initialize: function initialize() {\n    this.bindEvents();\n  },\n\n  bindEvents: function bindEvents() {\n    document.addEventListener('deviceready', this.onDeviceReady, false);\n  },\n\n  onDeviceReady: function onDeviceReady() {\n    phoneGap.receivedEvent('deviceready');\n  },\n\n  receivedEvent: function receivedEvent(id) {\n    var vm = new __WEBPACK_IMPORTED_MODULE_0_vue__[\"default\"]({\n      el: '#app',\n      router: __WEBPACK_IMPORTED_MODULE_2__router__[\"a\" /* default */],\n      template: '<App/>',\n      components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a },\n      sockets: {\n        connect: function connect() {\n          console.log('socket connected');\n        },\n        'new message': function newMessage(data) {\n          console.log('new message ' + data);\n        },\n        'add user': function addUser(username) {\n          console.log('add user ' + username);\n        },\n        'user joined': function userJoined(username) {\n          console.log('user joined ' + username);\n        },\n        typing: function typing(val) {\n          console.log('this method was fired by the socket server. eg: io.emit(\"customEmit\", data)');\n        }\n      },\n      methods: {\n        clickButton: function clickButton(val) {\n          this.$socket.emit('new message', val);\n        }\n      }\n    });\n    vm.$sockets.emit('add user', 'toto');\n  }\n};\n\nphoneGap.initialize();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvbWFpbi5qcz8xYzkwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBWdWUgYnVpbGQgdmVyc2lvbiB0byBsb2FkIHdpdGggdGhlIGBpbXBvcnRgIGNvbW1hbmRcbi8vIChydW50aW1lLW9ubHkgb3Igc3RhbmRhbG9uZSkgaGFzIGJlZW4gc2V0IGluIHdlYnBhY2suYmFzZS5jb25mIHdpdGggYW4gYWxpYXMuXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXG5pbXBvcnQgcm91dGVyIGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IFZ1ZVNvY2tldGlvIGZyb20gJ3Z1ZS1zb2NrZXQuaW8nXG5cblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXG5WdWUudXNlKFZ1ZVNvY2tldGlvLCAnaHR0cDovL2lvLnBlaDQuY29tOjMwMDEnKVxuXG52YXIgcGhvbmVHYXAgPSB7XG4gIC8vIEFwcGxpY2F0aW9uIENvbnN0cnVjdG9yXG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmJpbmRFdmVudHMoKVxuICB9LFxuICAvLyBCaW5kIEV2ZW50IExpc3RlbmVyc1xuICAvL1xuICAvLyBCaW5kIGFueSBldmVudHMgdGhhdCBhcmUgcmVxdWlyZWQgb24gc3RhcnR1cC4gQ29tbW9uIGV2ZW50cyBhcmU6XG4gIC8vICdsb2FkJywgJ2RldmljZXJlYWR5JywgJ29mZmxpbmUnLCBhbmQgJ29ubGluZScuXG4gIGJpbmRFdmVudHM6IGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2VyZWFkeScsIHRoaXMub25EZXZpY2VSZWFkeSwgZmFsc2UpXG4gIH0sXG4gIC8vIGRldmljZXJlYWR5IEV2ZW50IEhhbmRsZXJcbiAgLy9cbiAgLy8gVGhlIHNjb3BlIG9mICd0aGlzJyBpcyB0aGUgZXZlbnQuIEluIG9yZGVyIHRvIGNhbGwgdGhlICdyZWNlaXZlZEV2ZW50J1xuICAvLyBmdW5jdGlvbiwgd2UgbXVzdCBleHBsaWNpdGx5IGNhbGwgJ2FwcC5yZWNlaXZlZEV2ZW50KC4uLiknXG4gIG9uRGV2aWNlUmVhZHk6IGZ1bmN0aW9uICgpIHtcbiAgICBwaG9uZUdhcC5yZWNlaXZlZEV2ZW50KCdkZXZpY2VyZWFkeScpXG4gIH0sXG4gIC8vIFVwZGF0ZSBET00gb24gYSBSZWNlaXZlZCBFdmVudFxuICByZWNlaXZlZEV2ZW50OiBmdW5jdGlvbiAoaWQpIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1uZXcgKi9cbiAgICB2YXIgdm0gPSBuZXcgVnVlKHtcbiAgICAgIGVsOiAnI2FwcCcsXG4gICAgICByb3V0ZXIsXG4gICAgICB0ZW1wbGF0ZTogJzxBcHAvPicsXG4gICAgICBjb21wb25lbnRzOiB7IEFwcCB9LFxuICAgICAgc29ja2V0czoge1xuICAgICAgICBjb25uZWN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3NvY2tldCBjb25uZWN0ZWQnKVxuICAgICAgICB9LFxuICAgICAgICAnbmV3IG1lc3NhZ2UnOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCduZXcgbWVzc2FnZSAnICsgZGF0YSlcbiAgICAgICAgfSxcbiAgICAgICAgJ2FkZCB1c2VyJzogZnVuY3Rpb24gKHVzZXJuYW1lKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2FkZCB1c2VyICcgKyB1c2VybmFtZSlcbiAgICAgICAgfSxcbiAgICAgICAgJ3VzZXIgam9pbmVkJzogZnVuY3Rpb24gKHVzZXJuYW1lKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3VzZXIgam9pbmVkICcgKyB1c2VybmFtZSlcbiAgICAgICAgfSxcbiAgICAgICAgdHlwaW5nOiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMgbWV0aG9kIHdhcyBmaXJlZCBieSB0aGUgc29ja2V0IHNlcnZlci4gZWc6IGlvLmVtaXQoXCJjdXN0b21FbWl0XCIsIGRhdGEpJylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgY2xpY2tCdXR0b246IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAvLyAkc29ja2V0IGlzIHNvY2tldC5pby1jbGllbnQgaW5zdGFuY2VcbiAgICAgICAgICB0aGlzLiRzb2NrZXQuZW1pdCgnbmV3IG1lc3NhZ2UnLCB2YWwpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIHZtLiRzb2NrZXRzLmVtaXQoJ2FkZCB1c2VyJywgJ3RvdG8nKVxuICB9XG59XG5cbnBob25lR2FwLmluaXRpYWxpemUoKVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL21haW4uanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQWlCQTtBQUNBO0FBRUE7QUFDQTtBQUpBO0FBdEJBO0FBNkJBO0FBQ0E7QUFwREE7QUFDQTtBQXNEQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})