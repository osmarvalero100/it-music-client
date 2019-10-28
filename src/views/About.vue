<template>
  <div class="mt-5">
    <b-container>
      <h1>This is an about page</h1>
      <b-button v-b-modal.modal-1>Launch demo modal</b-button>

      <b-modal id="modal-1" title="BootstrapVue">
        <p class="my-4">Hello from modal!</p>
        <Video/>
      </b-modal>
    </b-container>
  </div>
</template>

<script>
  import Video from '@/components/Video.vue'
  export default {
    components: {
      Video
    }
  }
</script>
