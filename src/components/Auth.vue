<template>
  <div>
    <b-tabs content-class="mt-3" align="center">
      <b-tab title="Iniciar Sesión" active>
        <Login/>
      </b-tab>
      <b-tab title="Registrarse">
        <p>I'm the second tab</p>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
  import Login from '@/components/Login.vue'

  export default {
    name: 'Auth',
    components: {
      Login
    }
  }
</script>
