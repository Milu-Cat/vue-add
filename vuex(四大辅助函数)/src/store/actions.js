export default {
    serve({commit}){
        setTimeout(()=>{
            commit('changeServe',['林肯','罗斯福','肯尼迪'])
        },300)

    }
}