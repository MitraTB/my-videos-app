<template>

  <div class="video-box">
    <img :src="video.thumbnail">
    <h2>{{video.name}}</h2>
    <p>{{video.description}}</p>
  </div>

</template>
<script>
export default {
    computed:{
        video(){
           return this.$store.state.videos.find(vid => vid.id == this.$route.params.id);
        }
    }
}
</script>
<style scoped>

.video-box{
    width:100%;
    height: 400px;
}
img{
    width:40%;
    height:100%;
    justify-content: center;
}
</style>