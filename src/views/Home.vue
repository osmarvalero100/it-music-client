<script src="vue-youtube/dist/vue-youtube.js"></script>
<template id="">
  <div class="mt-5">
    <b-container>
      <h1>HOME</h1>
      <Video/>
      <b-modal id="modal-auth" title=""  hide-footer>
        <Auth/>
      </b-modal>
    </b-container>
  </div>
</template>

<script>
import Video from '@/components/Video.vue'
import Auth from '@/components/Auth.vue'

export default {
  components: {
    Video,
    Auth
  }
}
</script>
