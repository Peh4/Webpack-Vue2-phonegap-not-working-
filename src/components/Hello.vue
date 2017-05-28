<template>
  <div class="hello">
    <h1 v-html="title"></h1>
    <ul>
      <li v-for="user in users">
        {{user.name}}
      </li>
    </ul>
    <messages :messages="messages"></messages>
    <p v-if="isWriting">Quelqu'un écrit un message…</p>
    <form id="text" action="">
      <input v-model="inputBar" autocomplete="off" /><button @click="joinChat">{{btn}}</button>
    </form>
  </div>
</template>

<script>
import Messages from './Messages.vue'
var jquery = require('jquery')
export default {
  name: 'hello',
  components: {
    Messages
  },
  data () {
    return {
      title: 'loading',
      inputBar: '',
      btn: 'name',
      messages: [],
      users: {},
      typing: false,
      isWriting: false,
      usersTyping: {},
      name: '',
      team: ''
    }
  },
  watch: {
    inputBar: function (data) {
      if (data && !this.typing) {
        this.$socket.emit('typing on')
        // pour signaler une seule fois
        this.typing = true
      } else if (!data && this.typing) {
        this.$socket.emit('typing off')
        this.typing = false
      }
    },
    messages: function () {
      setTimeout(function () {
        jquery('.messages').scrollTop(99999999999)
        console.log('scroll')
      }, 100)
    }
  },
  sockets: {
    'on join': function (data) {
      this.users = data.users
      console.log('on join')
    },
    'joined': function (data) {
      this.users = data.users
      this.btn = 'message'
    },
    'on leave': function (data) {
    },
    'on message': function (data) {
      this.messages.push(data)
      console.log(this.messages)
    },
    'on typing on': function (data) {
      this.usersTyping[data.username] = data.username
      console.log(data.username + ' strat typing')
      if (Object.keys(this.usersTyping).length) {
        this.isWriting = true
      }
    },
    'on typing off': function (data) {
      delete this.usersTyping[data.username]
      console.log(data.username + ' stop typing')
      if (!Object.keys(this.usersTyping).length) {
        this.isWriting = false
      }
    },
    erreur: function (data) {
      console.log(data)
    }
  },
  mounted: function () {
    var salons = 'http://bazarettes.peh4.com/wp-json/wp/v2/posts'
    var vm = this
    jquery.when(
      jquery.getJSON(salons),
      jquery.ready
    ).done(function (data) {
      vm.title = data[0][0].title.rendered
    }).fail(function (err) {
      console.log('JSON load fail' + err)
    })
  },
  methods: {
    resetInput: function () {
      this.inputBar = ''
    },
    joinChat: function (entry) {
      var input = entry.target.previousSibling.value
      if (input) {
        if (!this.name) {
          this.name = input
          this.btn = 'équipe'
          this.resetInput()
        } else if (!this.team) {
          this.team = input
          this.inputBar = ''
          this.$socket.emit('join', {
            'name': this.name,
            'id': null,
            'team': this.team
          })
          this.btn = 'message'
          console.log('join ' + this.name + ' de la team ' + this.team)
        } else {
          this.$socket.emit('message', input)
          this.messages.push({username: this.name, team: this.team, content: input})
          this.inputBar = ''
        }
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    margin: 0 auto;
    width: 500px;
    border: 1px solid #ff4;
    position: relative;

  }
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
