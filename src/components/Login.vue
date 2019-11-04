<template>
  <div>
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group id="input-group-1" label="Email" label-for="email">
        <b-form-input id="email" v-model="form.email" type="email" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Contraseña" label-for="password">
        <b-form-input type="password" id="password" v-model="form.password" required></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Iniciar Sesión</b-button>
    </b-form>
    <!--
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  -->
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        form: {
          email: '',
          password: ''
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      }
    }
  }
</script>
