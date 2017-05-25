// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueSocketio from 'vue-socket.io'

Vue.config.productionTip = false

// import socketio from 'socket.io-client'
// var ioInstance = socketio('http://io.peh4.com:3001')
// Vue.use(VueSocketio, ioInstance) // bind custom socketio instance

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
    Vue.use(VueSocketio, 'http://io.peh4.com:3001') // Automaticly socket connect from url string

    var $ = require('jquery')

    /* eslint-disable no-new */
    var vm = new Vue({
      el: '#app',
      router,
      template: '<App/>',
      components: { App },
      data: {
        join: false,
        name: null,
        users: [],
        message: null,
        messages: {}
      },
      watch: {
        messages: function () {
          setTimeout(function () {
            $('.messages ul').scrollTop(999999999)
          }, 100)
        }
      },
      sockets: {
        connect: function () {
          console.log('socket conected')
        },
        'add user': function (data) {
          this.users.push(data)
          console.log(data.name)
        }
      }
    })

    console.log(vm.users)
  }
}

phoneGap.initialize()

