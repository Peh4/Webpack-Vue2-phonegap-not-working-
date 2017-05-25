<template>
  <div class="hello">
    <h1 v-html="msg"></h1>
    <ul>
      <li v-for="user in userList">
        {{user.name}}
      </li>
    </ul>
    <form action="">
      <input id="m" autocomplete="off" /><button @click="joinChat">Send</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'hello',
  data () {
    return {
      msg: '',
      userList: []
    }
  },
  sockets: {
    'add user': function (data) {
      this.userList = data.users
      console.log(data)
    },
    'on join': function (data) {
      this.userList = data.users
      console.log(data.users)
    }
  },
  mounted: function () {
    var jquery = require('jquery')
    var salons = 'http://bazarettes.peh4.com/wp-json/wp/v2/posts'
    var vm = this
    jquery.when(
      jquery.getJSON(salons),
      jquery.ready
    ).done(function (data) {
      vm.msg = data[0][0].title.rendered
    }).fail(function (err) {
      console.log('JSON load fail' + err)
    })
  },
  methods: {
    joinChat: function (name) {
      if (name.target.previousSibling.value) {
        this.$socket.emit('join', {
          'name': name.target.previousSibling.value,
          'id': null,
          'team': null
        })
        console.log('join ' + name.target.previousSibling.value)
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
