<script src="vue-youtube/dist/vue-youtube.js"></script>
<template id="">
  <div class="mt-5">
    <b-container>
    <!--  <h1>HOME</h1> -->
      <b-row>
        <b-col>
          <Video/>
        </b-col>
        <b-col>
          <PlayList/>
        </b-col>
      </b-row>
      <b-modal id="modal-auth" title=""  hide-footer>
        <Auth/>
      </b-modal>
    </b-container>
  </div>
</template>
<style media="screen">
  body {
    background-color: #f4f4f4;
  }
</style>

<script>
import Video from '@/components/Video.vue'
import Auth from '@/components/Auth.vue'
import PlayList from '@/components/PlayList'

export default {
  components: {
    Video,
    Auth,
    PlayList
  }
}
</script>
