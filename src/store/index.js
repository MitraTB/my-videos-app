import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    videos:[
      {
        "id":1,
        "name":"Every Thing About Solar System",
        "description":"It was an astronomy book, and I poured over that thing for hours on end, and it was a combination of all these...",
        "thumbnail":"https://www.seyedrezabazyar.com/fa/files/2017/06/Solar-systems.png",
        "videoUrl" : "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
      },
      {
        "id":2,
        "name":"Black Holes",
        "description":"From asteroids capable of destroying entire species to supernovae that could exterminate life on Earth, outer space has no shortage of forces that could wreak havoc on our planet. But there's something in space that is even more terrifying than any of these -- something that wipes out everything it comes near. Fabio Pacucci examines the probability of Earth being gobbled up by a black hole.",
        "thumbnail":"https://www.nasa.gov/sites/default/files/thumbnails/image/simulated_bh.jpg",
        "videoUrl":"https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
