<template>
  <ul>
    <li v-for="user in connected">
      {{user.name}}
    </li>
  </ul>  
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    name: 'connected',
    computed: mapState([
      'connected'
    ])
  }
</script>
