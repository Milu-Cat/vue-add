export default {
   changeState (state, v){
     state.userInfo = v
   },
    changeCont(state, v){
       state.cont = v
    },
    addText(state,v){
       state.text+=v
    },
    jianText(state,v){
       state.text-=v
    },
    changeServe(state, v){
        state.serve = v
    }
}