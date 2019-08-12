<template>
  <div id="app">
     <com :value='value'></com>
     <com1 :params='params'></com1>
  </div>
</template>

<script>
// import  Form from './components/form'
import Vue from 'vue'
export default {
  name: 'app',
  data(){
    return {
       value:'给公共组件传参',
       params:'再给另一个公共组件传一个参数'
    }
  },
  mounted(){
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
