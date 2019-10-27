<script src="vue-youtube/dist/vue-youtube.js"></script>
<template id="">
  <div class="mt-5">
    <b-container>
      <h1>HOME</h1>
      <youtube :video-id="videoId" :player-vars="playerVars" @playing="playing"></youtube>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoId: 'lG0Ys-2d4MA',
      playerVars: {
        autoplay: 1
      }
    }
  },
  methods: {
    playing() {
      console.log('\o/ we are watching!!!')
    }
  }
}
</script>
