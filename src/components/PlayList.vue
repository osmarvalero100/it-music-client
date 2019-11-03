<template>
  <div class="playlist">
    <b-card>
       <b-card-text>
        <b-row>
          <b-col>
            A CONTINUACIÓN
          </b-col>
          <b-col class="text-right icons">
            <font-awesome-icon icon="fast-forward" />
            <font-awesome-icon icon="plus-square" />

          </b-col>
        </b-row>
       </b-card-text>

       <ul class="list-unstyled">
        <b-media tag="li">
          <template v-slot:aside>
            <b-img blank blank-color="#abc" width="64" alt="placeholder"></b-img>
          </template>
          <h5 class="mt-0 mb-1">List-based media object</h5>
          <p class="mb-0">
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
            Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
            ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
          <div class="actions text-center">
            <font-awesome-icon icon="angry" size="2x" :style="{ color: 'gray' }" />
            <font-awesome-icon icon="heart" size="2x" :style="{ color: 'gray' }" />
            <font-awesome-icon icon="trash-alt" size="2x" :style="{ color: 'gray' }" />
          </div>
        </b-media>

        <b-media tag="li" class="my-4">
          <template v-slot:aside>
           <b-img blank blank-color="#cba" width="64" alt="placeholder"></b-img>
          </template>

          <h5 class="mt-0 mb-1">List-based media object</h5>
          <p class="mb-0">
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
            Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
            ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
          <div class="actions text-center">
            <font-awesome-icon icon="angry" size="2x" :style="{ color: 'gray' }" />
            <font-awesome-icon icon="heart" size="2x" :style="{ color: 'gray' }" />
            <font-awesome-icon icon="trash-alt" size="2x" :style="{ color: 'gray' }" />
          </div>
        </b-media>

        <b-media tag="li">
          <template v-slot:aside>
            <b-img blank blank-color="#bac" width="64" alt="placeholder"></b-img>
          </template>

          <h5 class="mt-0 mb-1">List-based media object</h5>
          <p class="mb-0">
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
            Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
            ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
        </b-media>
      </ul>

     </b-card>
  </div>
</template>
<style>
  .playlist .card {
    min-height: 360px !important;
  }
  .playlist .icons svg {
    margin-left: 12px;
    cursor: pointer;
  }
  .playlist .card ul {
    height: 270px;
    overflow-y: scroll;
    scrollbar-color: white white;
    scrollbar-width: thin;
  }
  .playlist .card ul svg {
    margin-left: 20px;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 7px;
    height: 50px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: white;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: white;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: white;
  }
</style>
<script>
  export default {
    name: 'PlayList'
  }
</script>
