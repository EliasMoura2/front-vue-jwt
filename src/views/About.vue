<template>
  <div class="about">
    <h1>Ruta protegida</h1>
    {{ token }}
  </div>
</template>
// <script>
  import { mapState } from 'vuex';

  export default {
    computed: {
      ...mapState(['token'])
    }, //deberia estar en vuex
    methods:{
      async dataProtected(){
        try{
          const res = await fetch('https://api-bluu-jwt.herokuapp.com/api/admin', {
            headers: {
              'Content-Type': 'appliaction/json',
              'auth-token': this.token
            }
          })
          const dataBack = await res.json()
          console.log(dataBack)
        }catch(error){
          console.log(error)
        }
      }
    },
    created(){
      this.dataProtected()
    }
  };
</script>
