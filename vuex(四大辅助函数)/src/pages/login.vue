<template>
  <div>
    <button @click="change">在login修改状态</button>
    <input type="text" v-model="userInfo">
    <h1 @click="changeCont">{{cont}}</h1>
    <div>
      <button @click="changeText">加{{num}}</button>
      <span>{{getText}}</span>
      <button @click="downText">减1</button>
    </div>
    <div>
      <button @click="getServe">点击后台获取列表数据</button>
      <ul v-for="item in serve" :key="item">
        <li>{{item}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import store from '../store'
import {mapState} from 'vuex'
import {mapMutations} from 'vuex'
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
export default {
  name:'Login',
  data(){
    return {
      num:2,
    }
  },
  computed:{
    // mapGetters辅助函数可以映射到获取state的方法
    ...mapGetters(['getText']),
    // 使用mapState()辅助函数可以直接获取到state里面数据
      ...mapState({
        // cont: state => state.cont //第一种写法
        cont:'cont',  //第二种写法
        serve: state => state.serve
      }),
    // vuex绑定组件，并改变state，需要get和set
    userInfo:{
      get(){
        return this.$store.state.userInfo;
      },
      set(v){
        return this.$store.commit('changeState',v)
      }
    },

  },
  methods:{
    // mapActions辅助函数作用是把this.getServe映射到store.dispatch('serve'),通过dispatch分发mutations中处理函数
    ...mapActions({getServe:'serve'}),
    // mapMutations辅助函数可以将修改state的方法映射出来，可以直接使用this调用
    ...mapMutations({jianText:'jianText'}),
    change(){
      this.$router.push({path:'/main'}
       );
    },
    changeCont(){
       store.commit('changeCont', '罗斯福')
    },
    changeText(){
      store.commit('addText',this.num);
    },
    downText(){
      this.jianText(1)
    },
    getServe(){
      store.dispatch('serve')
    }
  },
  mounted(){
    
  }
}
</script>
