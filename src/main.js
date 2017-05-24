// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueSocketio from 'vue-socket.io'

Vue.config.productionTip = false

var phoneGap = {
  // Application Constructor
  initialize: function () {
    this.bindEvents()
  },
  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  bindEvents: function () {
    document.addEventListener('deviceready', this.onDeviceReady, false)
  },
  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicitly call 'app.receivedEvent(...)'
  onDeviceReady: function () {
    phoneGap.receivedEvent('deviceready')
  },
  // Update DOM on a Received Event
  receivedEvent: function (id) {
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      router,
      template: '<App/>',
      components: { App },
      sockets: {
        connect: function () {
          console.log('socket connected')
        },
        customEmit: function (val) {
          console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
        }
      },
      methods: {
        clickButton: function (val) {
          // $socket is socket.io-client instance
          this.$socket.emit('emit_method', val)
        }
      }
    })
  }
}

phoneGap.initialize()
Vue.use(VueSocketio, 'http://io.peh4.com:3001')
