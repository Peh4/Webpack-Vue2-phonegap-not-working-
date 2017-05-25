webpackHotUpdate(0,{

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(16);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(9);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_socket_io__ = __webpack_require__(21);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_socket_io__);\n\n\n\n\n\n\n__WEBPACK_IMPORTED_MODULE_0_vue__[\"default\"].config.productionTip = false;\n\nvar socket = __webpack_require__(67)('http://io.peh4.com:3001');\nsocket.on('connect', function () {});\nsocket.on('event', function (data) {});\nsocket.on('disconnect', function () {});\n\nvar phoneGap = {\n  initialize: function initialize() {\n    this.bindEvents();\n  },\n\n  bindEvents: function bindEvents() {\n    document.addEventListener('deviceready', this.onDeviceReady, false);\n  },\n\n  onDeviceReady: function onDeviceReady() {\n    phoneGap.receivedEvent('deviceready');\n  },\n\n  receivedEvent: function receivedEvent(id) {\n    __WEBPACK_IMPORTED_MODULE_0_vue__[\"default\"].use(__WEBPACK_IMPORTED_MODULE_3_vue_socket_io___default.a, 'http://io.peh4.com:3001');\n    var vm = new __WEBPACK_IMPORTED_MODULE_0_vue__[\"default\"]({\n      el: '#app',\n      router: __WEBPACK_IMPORTED_MODULE_2__router__[\"a\" /* default */],\n      template: '<App/>',\n      components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a },\n      sockets: {\n        connect: function connect() {\n          console.log('socket connectedqsxqs');\n        },\n        'new message': function newMessage(data) {\n          console.log('new message ' + data);\n        },\n        'add user': function addUser(username) {\n          console.log('add user ' + username);\n        },\n        'user joined': function userJoined(username) {\n          console.log('user joined ' + username);\n        },\n        typing: function typing(val) {\n          console.log('this method was fired by the socket server. eg: io.emit(\"customEmit\", data)');\n        }\n      },\n      methods: {\n        clickButton: function clickButton(val) {\n          this.$socket.emit('new message', val);\n        }\n      }\n    });\n    vm.$socket.emit('add user', 'toto');\n  }\n};\n\nphoneGap.initialize();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvbWFpbi5qcz8xYzkwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBWdWUgYnVpbGQgdmVyc2lvbiB0byBsb2FkIHdpdGggdGhlIGBpbXBvcnRgIGNvbW1hbmRcbi8vIChydW50aW1lLW9ubHkgb3Igc3RhbmRhbG9uZSkgaGFzIGJlZW4gc2V0IGluIHdlYnBhY2suYmFzZS5jb25mIHdpdGggYW4gYWxpYXMuXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXG5pbXBvcnQgcm91dGVyIGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IFZ1ZVNvY2tldGlvIGZyb20gJ3Z1ZS1zb2NrZXQuaW8nXG5cblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXG5cbnZhciBzb2NrZXQgPSByZXF1aXJlKCdzb2NrZXQuaW8tY2xpZW50JykoJ2h0dHA6Ly9pby5wZWg0LmNvbTozMDAxJylcbnNvY2tldC5vbignY29ubmVjdCcsIGZ1bmN0aW9uICgpIHt9KVxuc29ja2V0Lm9uKCdldmVudCcsIGZ1bmN0aW9uIChkYXRhKSB7fSlcbnNvY2tldC5vbignZGlzY29ubmVjdCcsIGZ1bmN0aW9uICgpIHt9KVxuXG4vLyBpbXBvcnQgc29ja2V0aW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCdcbi8vIHZhciBpb0luc3RhbmNlID0gc29ja2V0aW8oJ2h0dHA6Ly9pby5wZWg0LmNvbTozMDAxJylcbi8vIFZ1ZS51c2UoVnVlU29ja2V0aW8sIGlvSW5zdGFuY2UpIC8vIGJpbmQgY3VzdG9tIHNvY2tldGlvIGluc3RhbmNlXG5cbnZhciBwaG9uZUdhcCA9IHtcbiAgLy8gQXBwbGljYXRpb24gQ29uc3RydWN0b3JcbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYmluZEV2ZW50cygpXG4gIH0sXG4gIC8vIEJpbmQgRXZlbnQgTGlzdGVuZXJzXG4gIC8vXG4gIC8vIEJpbmQgYW55IGV2ZW50cyB0aGF0IGFyZSByZXF1aXJlZCBvbiBzdGFydHVwLiBDb21tb24gZXZlbnRzIGFyZTpcbiAgLy8gJ2xvYWQnLCAnZGV2aWNlcmVhZHknLCAnb2ZmbGluZScsIGFuZCAnb25saW5lJy5cbiAgYmluZEV2ZW50czogZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZXJlYWR5JywgdGhpcy5vbkRldmljZVJlYWR5LCBmYWxzZSlcbiAgfSxcbiAgLy8gZGV2aWNlcmVhZHkgRXZlbnQgSGFuZGxlclxuICAvL1xuICAvLyBUaGUgc2NvcGUgb2YgJ3RoaXMnIGlzIHRoZSBldmVudC4gSW4gb3JkZXIgdG8gY2FsbCB0aGUgJ3JlY2VpdmVkRXZlbnQnXG4gIC8vIGZ1bmN0aW9uLCB3ZSBtdXN0IGV4cGxpY2l0bHkgY2FsbCAnYXBwLnJlY2VpdmVkRXZlbnQoLi4uKSdcbiAgb25EZXZpY2VSZWFkeTogZnVuY3Rpb24gKCkge1xuICAgIHBob25lR2FwLnJlY2VpdmVkRXZlbnQoJ2RldmljZXJlYWR5JylcbiAgfSxcbiAgLy8gVXBkYXRlIERPTSBvbiBhIFJlY2VpdmVkIEV2ZW50XG4gIHJlY2VpdmVkRXZlbnQ6IGZ1bmN0aW9uIChpZCkge1xuICAgIFZ1ZS51c2UoVnVlU29ja2V0aW8sICdodHRwOi8vaW8ucGVoNC5jb206MzAwMScpIC8vIEF1dG9tYXRpY2x5IHNvY2tldCBjb25uZWN0IGZyb20gdXJsIHN0cmluZ1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLW5ldyAqL1xuICAgIHZhciB2bSA9IG5ldyBWdWUoe1xuICAgICAgZWw6ICcjYXBwJyxcbiAgICAgIHJvdXRlcixcbiAgICAgIHRlbXBsYXRlOiAnPEFwcC8+JyxcbiAgICAgIGNvbXBvbmVudHM6IHsgQXBwIH0sXG4gICAgICBzb2NrZXRzOiB7XG4gICAgICAgIGNvbm5lY3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnc29ja2V0IGNvbm5lY3RlZHFzeHFzJylcbiAgICAgICAgfSxcbiAgICAgICAgJ25ldyBtZXNzYWdlJzogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnbmV3IG1lc3NhZ2UgJyArIGRhdGEpXG4gICAgICAgIH0sXG4gICAgICAgICdhZGQgdXNlcic6IGZ1bmN0aW9uICh1c2VybmFtZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdhZGQgdXNlciAnICsgdXNlcm5hbWUpXG4gICAgICAgIH0sXG4gICAgICAgICd1c2VyIGpvaW5lZCc6IGZ1bmN0aW9uICh1c2VybmFtZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCd1c2VyIGpvaW5lZCAnICsgdXNlcm5hbWUpXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGluZzogZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIG1ldGhvZCB3YXMgZmlyZWQgYnkgdGhlIHNvY2tldCBzZXJ2ZXIuIGVnOiBpby5lbWl0KFwiY3VzdG9tRW1pdFwiLCBkYXRhKScpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBtZXRob2RzOiB7XG4gICAgICAgIGNsaWNrQnV0dG9uOiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgLy8gJHNvY2tldCBpcyBzb2NrZXQuaW8tY2xpZW50IGluc3RhbmNlXG4gICAgICAgICAgdGhpcy4kc29ja2V0LmVtaXQoJ25ldyBtZXNzYWdlJywgdmFsKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICB2bS4kc29ja2V0LmVtaXQoJ2FkZCB1c2VyJywgJ3RvdG8nKVxuICB9XG59XG5cbnBob25lR2FwLmluaXRpYWxpemUoKVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL21haW4uanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUFpQkE7QUFDQTtBQUVBO0FBQ0E7QUFKQTtBQXRCQTtBQTZCQTtBQUNBO0FBckRBO0FBQ0E7QUF1REEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})