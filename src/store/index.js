import Vue from 'vue'
import Vuex from 'vuex'
import Api from '@/service/api.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    videos:[]
  },
  mutations: {
    SET_VIDEOS(state , response){
      state.videos = response;
    }
  },
  actions: {
    async setVideos({commit}){
      let result = await Api().get('/videos');
      console.log('result' , result);
      commit ('SET_VIDEOS', result.data);
      
    }
  },
  modules: {
  }
})
