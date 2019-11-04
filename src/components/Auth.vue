<template>
  <div>
    <b-tabs content-class="mt-3" align="center">
      <b-tab title="Iniciar Sesión" active>
        <Login/>
      </b-tab>
      <b-tab title="Regístrate">
        <Register/>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
  import Login from '@/components/Login.vue'
  import Register from '@/components/Register'

  export default {
    name: 'Auth',
    components: {
      Login,
      Register
    }
  }
</script>
