<template>
  <div id="text">
    <p v-if="someoneWrite">Quelqu'un écrit un message…</p>
    <form action="">
      <input v-model="inputBar" autocomplete="off" /><button @click="joinChat">{{btn}}</button>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'hello',
  data () {
    return {
      meTyping: false,
      someoneWrite: false,
      usersTyping: {},
      btn: 'name',
      inputBar: ''
    }
  },
  computed: mapState([
    'me'
  ]),
  sockets: {
    'joined': function (socketData) {
      this.$store.commit('updateConnected', socketData.users)
      this.btn = 'message'
      console.log(socketData)
    },
    'on typing on': function (socketData) {
      this.usersTyping[socketData.username] = socketData.username
      this.someoneWrite = true
    },
    'on typing off': function (socketData) {
      delete this.usersTyping[socketData.username]
      console.log(socketData.username + ' stop typing')
      if (!Object.keys(this.usersTyping).length) {
        this.someoneWrite = false
      }
    }
  },
  methods: {
    resetInput: function () {
      this.inputBar = ''
    },
    joinChat: function (entry) {
      var input = entry.target.previousSibling.value
      if (input) {
        if (!this.me.username) {
          this.$store.commit('setMyName', input)
          this.btn = 'équipe'
          this.resetInput()
        } else if (!this.me.team) {
          this.$store.commit('setMyTeam', input)
          this.resetInput()
          this.$socket.emit('join', this.me)
          console.log('join ' + this.me.username + ' de la team ' + this.me.team)
        } else {
          this.$socket.emit('message', input)
          this.previousAuthor = 'me'
          this.$store.commit('addMessage', {username: this.me.name, team: this.me.team, content: input, samePreviousAuthor: false, me: true})
          this.resetInput()
        }
      }
    }
  },
  watch: {
    inputBar: function (data) {
      if (data && !this.meTyping) {
        this.$socket.emit('typing on')
        // pour signaler une seule fois
        this.meTyping = true
      } else if (!data && this.meTyping) {
        this.$socket.emit('typing off')
        this.meTyping = false
      }
      console.log(this.meTyping)
    }
  }
}
</script>

<style>
  #text {
    position: fixed;
    bottom: 2px;
    left: 2px;
    width: 100%;
    text-align: center;
    box-shadow: none;
  }
  #text input {
      background: #fff none;
      border: none;
      padding: 4px;
  }
</style>
