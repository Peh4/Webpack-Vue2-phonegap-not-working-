webpackHotUpdate(0,{

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(51);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(18);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_socket_io__ = __webpack_require__(56);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_socket_io__);\n\n\n\n\n\n\n__WEBPACK_IMPORTED_MODULE_0_vue__[\"default\"].config.productionTip = false;\n\nvar phoneGap = {\n  initialize: function initialize() {\n    this.bindEvents();\n  },\n\n  bindEvents: function bindEvents() {\n    document.addEventListener('deviceready', this.onDeviceReady, false);\n  },\n\n  onDeviceReady: function onDeviceReady() {\n    phoneGap.receivedEvent('deviceready');\n  },\n\n  receivedEvent: function receivedEvent(id) {\n    new __WEBPACK_IMPORTED_MODULE_0_vue__[\"default\"]({\n      el: '#app',\n      router: __WEBPACK_IMPORTED_MODULE_2__router__[\"a\" /* default */],\n      template: '<App/>',\n      components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a },\n      data: {\n        join: false,\n        name: null,\n        users: [],\n        message: null,\n        messages: {}\n      },\n      mounted: function mounted() {\n        __WEBPACK_IMPORTED_MODULE_0_vue__[\"default\"].use(__WEBPACK_IMPORTED_MODULE_3_vue_socket_io___default.a, 'http://io.peh4.com:3001');\n      },\n      sockets: {\n        connect: function connect() {\n          console.log('socket conected');\n        },\n        'add user': function addUser(data) {\n          this.users.push(data);\n          console.log(data.name);\n        }\n      }\n    });\n  }\n};\n\nphoneGap.initialize();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL21haW4uanM/MWM5MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgVnVlIGJ1aWxkIHZlcnNpb24gdG8gbG9hZCB3aXRoIHRoZSBgaW1wb3J0YCBjb21tYW5kXG4vLyAocnVudGltZS1vbmx5IG9yIHN0YW5kYWxvbmUpIGhhcyBiZWVuIHNldCBpbiB3ZWJwYWNrLmJhc2UuY29uZiB3aXRoIGFuIGFsaWFzLlxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJ1xuaW1wb3J0IHJvdXRlciBmcm9tICcuL3JvdXRlcidcbmltcG9ydCBWdWVTb2NrZXRpbyBmcm9tICd2dWUtc29ja2V0LmlvJ1xuXG5WdWUuY29uZmlnLnByb2R1Y3Rpb25UaXAgPSBmYWxzZVxuXG4vLyBpbXBvcnQgc29ja2V0aW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCdcbi8vIHZhciBpb0luc3RhbmNlID0gc29ja2V0aW8oJ2h0dHA6Ly9pby5wZWg0LmNvbTozMDAxJylcbi8vIFZ1ZS51c2UoVnVlU29ja2V0aW8sIGlvSW5zdGFuY2UpIC8vIGJpbmQgY3VzdG9tIHNvY2tldGlvIGluc3RhbmNlXG5cbnZhciBwaG9uZUdhcCA9IHtcbiAgLy8gQXBwbGljYXRpb24gQ29uc3RydWN0b3JcbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYmluZEV2ZW50cygpXG4gIH0sXG4gIC8vIEJpbmQgRXZlbnQgTGlzdGVuZXJzXG4gIC8vXG4gIC8vIEJpbmQgYW55IGV2ZW50cyB0aGF0IGFyZSByZXF1aXJlZCBvbiBzdGFydHVwLiBDb21tb24gZXZlbnRzIGFyZTpcbiAgLy8gJ2xvYWQnLCAnZGV2aWNlcmVhZHknLCAnb2ZmbGluZScsIGFuZCAnb25saW5lJy5cbiAgYmluZEV2ZW50czogZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZXJlYWR5JywgdGhpcy5vbkRldmljZVJlYWR5LCBmYWxzZSlcbiAgfSxcbiAgLy8gZGV2aWNlcmVhZHkgRXZlbnQgSGFuZGxlclxuICAvL1xuICAvLyBUaGUgc2NvcGUgb2YgJ3RoaXMnIGlzIHRoZSBldmVudC4gSW4gb3JkZXIgdG8gY2FsbCB0aGUgJ3JlY2VpdmVkRXZlbnQnXG4gIC8vIGZ1bmN0aW9uLCB3ZSBtdXN0IGV4cGxpY2l0bHkgY2FsbCAnYXBwLnJlY2VpdmVkRXZlbnQoLi4uKSdcbiAgb25EZXZpY2VSZWFkeTogZnVuY3Rpb24gKCkge1xuICAgIHBob25lR2FwLnJlY2VpdmVkRXZlbnQoJ2RldmljZXJlYWR5JylcbiAgfSxcbiAgLy8gVXBkYXRlIERPTSBvbiBhIFJlY2VpdmVkIEV2ZW50XG4gIHJlY2VpdmVkRXZlbnQ6IGZ1bmN0aW9uIChpZCkge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLW5ldyAqL1xuICAgIG5ldyBWdWUoe1xuICAgICAgZWw6ICcjYXBwJyxcbiAgICAgIHJvdXRlcixcbiAgICAgIHRlbXBsYXRlOiAnPEFwcC8+JyxcbiAgICAgIGNvbXBvbmVudHM6IHsgQXBwIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGpvaW46IGZhbHNlLFxuICAgICAgICBuYW1lOiBudWxsLFxuICAgICAgICB1c2VyczogW10sXG4gICAgICAgIG1lc3NhZ2U6IG51bGwsXG4gICAgICAgIG1lc3NhZ2VzOiB7fVxuICAgICAgfSxcbiAgICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgVnVlLnVzZShWdWVTb2NrZXRpbywgJ2h0dHA6Ly9pby5wZWg0LmNvbTozMDAxJykgLy8gQXV0b21hdGljbHkgc29ja2V0IGNvbm5lY3QgZnJvbSB1cmwgc3RyaW5nXG4gICAgICB9LFxuICAgICAgc29ja2V0czoge1xuICAgICAgICBjb25uZWN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3NvY2tldCBjb25lY3RlZCcpXG4gICAgICAgIH0sXG4gICAgICAgICdhZGQgdXNlcic6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgdGhpcy51c2Vycy5wdXNoKGRhdGEpXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YS5uYW1lKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5waG9uZUdhcC5pbml0aWFsaXplKClcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9tYWluLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQWZBO0FBeUJBO0FBL0NBO0FBQ0E7QUFpREEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})