<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- componente -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App made for Elias"/> -->

    <h1>Login</h1>
    <form @submit.prevent="login(usuario)">
      <input type="email" placeholder="email" v-model="usuario.email">
      <input type="password" placeholder="password" name="" id="" v-model="usuario.password">
      <button type="submit">Acceder</button>
    </form>
    {{ usuario }}
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import { mapActions } from 'vuex'

export default {
  // name: 'Home',
  // components: {
  //   HelloWorld
  // }
  data(){
    return{
      usuario : {
        email: 'elias@moura.com',
        password: '123456'
      }
    }
  },
  methods:{
    ...mapActions([`login`])
  }
}
</script>
