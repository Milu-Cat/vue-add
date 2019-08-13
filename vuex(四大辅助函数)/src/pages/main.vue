<template>
  <div>
    <button @click="change">在mian修改状态</button>
    <input type="text" v-model="userInfo">
  </div>
</template>
<script>
import store from '../store'
export default {
  name:'Main',
  computed:{
    userInfo:{
      get(){
        return store.state.userInfo
      },
      set(v){
        return store.commit('changeState',v)
      }
    }
  },
  methods:{
    change(){
       this.$router.push({ path:'/'})
    }
  }

}
</script>
