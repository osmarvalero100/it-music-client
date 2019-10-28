<template>
<div class="">
  <youtube :video-id="videoId" :player-vars="playerVars" @playing="playing"></youtube>
</div>
</template>

<script>
export default {
  name: 'Video',
  data() {
    return {
      videoId: 'D6eWFYVf5l4',
      playerVars: {
        autoplay: 1
      }
    }
  },
  methods: {
    playing() {
      console.log('We are watching!!!')
    }
  }
}
</script>
