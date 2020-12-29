<template>
  <div>
    <div v-for="video in videos" :key="video.id" class="video-list">
      <router-link :to="{name:'Videos', params:{id : video.id}}">
        <div class="each-video-section">
          <div class="image">
            <img :src="video.thumbnail">
          </div>
          <div class=content>
            <h3>{{video.name}}</h3>
            <p>{{video.description}}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      videos:this.$store.state.videos
    }
  }
 }
</script>
<style scoped>
.video-list{
  display: flex;
  border: 5px outset ;
  margin-top:10px;
  border-radius: 10px;
}
.image{
  width: 15%;
  margin-right: 2px;
}
.each-video-section{
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  width: 100%;
  height: 150px;
}
img{
  width: 100%;
  height: 100%;
  
}

.content{
  padding:2px 10px;
  width: 80%;
  text-align: left;
}
a{
  text-decoration: none;
  color: black;
}
</style>
