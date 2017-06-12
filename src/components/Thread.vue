<template>
    <ul class="thread">
      <li class="message" v-for="message in thread" :class="[message.team, {isay: message.me}, {samePreviousAuthor: message.samePreviousAuthor}]">
        <p class="name">{{message.username}} : {{message.team}}</p>
        <div>
          <div class="user"> <span class="team"></span> </div>
          <div class="content"> 
            <p>{{message.content}}</p> 
          </div>
        </div>
      </li>
    </ul>
</template>
<script>
  import { mapState } from 'vuex'

  export default {
    name: 'thead',
    computed: mapState([
      'thread',
      'previousAuthor'
    ]),
    sockets: {
      'on message': function (socketData) {
        console.log(socketData.username + '/' + this.previousAuthor)
        if (this.previousAuthor === socketData.username) {
          socketData.samePreviousAuthor = true
        }
        this.$store.commit('addMessage', socketData)
        this.$store.commit('setPreviousAuthor', socketData.username)
      }
    }
  }
  
</script>

<style lang="scss" rel='stylesheet/scss' scoped>
  ul {
    padding-left: 0;
  }
  li {
      list-style: none;
  }
  .message {
    clear: both;
    padding: 2px;

  }
  .name {
      display: block;
      text-align: left;
      font-size: 0.8em;
  }
  .user {
    float:left;
    text-align: left;
    width: 10%;
    display: block;
    .team{
      display: block;
      width: 30px;
      height: 30px;
      background: #fff4ff;
      margin-right: 7px; 
    }
  }
  .content {
    float:left;
    width: 89%;
     p {
      background: #fff none;
      color: #212522;
      border-radius: 5px;
      padding: 5px 8px; 
      box-shadow: 0.5px 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.2);
      text-align: left;
      float: left;
     }
  }
  .samePreviousAuthor {
    .name {
      display: none;
    }
    .user {
      visibility: hidden;
    }
  }
  .isay {
    .content, .content p  {
      float: right;
    }
    .user, .name {
      display: none;
    }
  }
</style>
