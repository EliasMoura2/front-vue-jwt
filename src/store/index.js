import { createStore } from 'vuex'

export default createStore({
  state: {
    token: null
  },
  mutations: {
    setToken(state, payload){
      state.token = payload
    }
  },
  actions: {
    async login({commit}, usuario){
      console.log(usuario)
      try{
        const res = await fetch('https://api-bluu-jwt.herokuapp.com/api/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(usuario)
        })
        const userDB = await res.json()
        // console.log(userDB)
        // console.log(userDB.token)
        commit('setToken', userDB.token)

        localStorage.setItem('token', userDB.token)
      }catch(error){
        console.log(error)
      }
    },
    readToken({commit}){
      if(localStorage.getItem('token')){
        commit('setToken', localStorage.getItem('token'))
      }else{
        commit('setToken', null)
      }
    },
    closeSession({commit}){
      commit('setToken', null)
      localStorage.removeItem('token')
    }
  },
  modules: {
  }
})
