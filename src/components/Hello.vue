<template>
  <div class="hello">
    <h1 v-html="title"></h1>
    <connected></connected>
    <thread id="thread"></thread>
    <inputfield></inputfield>
  </div>
</template>

<script>

import Thread from './Thread.vue'
import Inputfield from './Inputfield.vue'
import Connected from './Connected.vue'
var jquery = require('jquery')

export default {
  name: 'hello',
  components: {
    Thread,
    Inputfield,
    Connected
  },
  data () {
    return {
      title: 'loading'
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
    }
  },
  sockets: {
    'on join': function (data) {
      this.users = data.users
      console.log('on join')
    },
    erreur: function (data) {
      console.log('ERROR ' + data)
    }
  },
  mounted: function () {
    console.log('test')
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
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    margin: 0 auto;
    max-width: 500px;
    position: relative;

  }
  #thread {
    height: 500px;
    padding: 2px 2px 5px 20px;
    overflow-y: auto;
  }

  
</style>
