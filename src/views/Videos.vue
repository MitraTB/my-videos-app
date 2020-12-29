<template>
    <div class="video-box">
        <video-player  
            class="video-player-box"
            ref="videoPlayer"
            :options="playerOptions"
            >
        </video-player>
        <h2>{{video.name}}</h2>
        <p>{{video.description}}</p>
    </div>
</template>
<script> 
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'
export default {
    components: {
        videoPlayer
    },
    computed:{
        video(){
           return this.$store.state.videos.find(vid => vid.id == this.$route.params.id);
        },
        playerOptions() {
          return{
            language: 'en',
            playbackRates: [0.7, 1.0, 1.5, 2.0, 2.5, 3.0],
            sources: [{
                type: "video/mp4",
                src: this.video.videoUrl
            }],
            poster: this.video.thumbnail ,
            }
        }
    }
}
</script>
<style>


.video-player-box .video-js{
    margin: auto;
    width: 40%;
    height: 400px;
}

</style>