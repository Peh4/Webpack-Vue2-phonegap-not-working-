<template>
    <ul class="messages">
      <li class="message" v-for="message in messages" :class="message.team">
        <p v-if="sameLastAuthor" class="user"> {{message.username}} </p>
        <p class="content"> {{message.content}} </p>
      </li>
    </ul>
</template>
<script>
  export default {
    name: 'messages',
    props: ['messages']
  }
</script>

<style scoped>
  li {
      list-style: none;
    }
  .message {
    clear: both;
    padding: 2px;

  }
  .user {
    width: 30px;
    height: 30px;
    background: #fff4ff;
    float:left;
    margin-right: 7px; 
  }
  .content {
    float:left;
    background: #fff none;
    color: #212522;
    border-radius: 10px;
    padding: 5px 8px; 

  }
</style>
