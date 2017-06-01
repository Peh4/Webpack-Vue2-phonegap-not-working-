<template>
    <ul class="messages">
      <li class="message" v-for="message in messages" :class="[message.team, {isay: message.me}, {samePreviousAuthor: message.samePreviousAuthor}]">
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
  export default {
    name: 'messages',
    props: ['messages']
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
