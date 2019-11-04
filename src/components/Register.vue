<template>
  <div>
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group id="input-group-1" label="Email" label-for="email">
        <b-form-input id="email" v-model="form.email" type="email" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Nombre DJ" label-for="dj_name">
        <b-form-input id="dj_name" v-model="form.dj_name" type="text" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Soy:" label-for="input-3">
        <b-form-select
          id="gender"
          v-model="form.gender"
          :options="genders"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4" label="Contraseña" label-for="password">
        <b-form-input type="password" id="password" v-model="form.password" required></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Crear Cuenta</b-button>
    </b-form>
    <!--
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  -->
  </div>
</template>

<script>
import * as CONFIG from '@/config.js';
import axios from 'axios';

  export default {
    name: 'Register',
    data() {
      return {
        form: {
          email: '',
          password: '',
          dj_name: '',
          gender: null
        },
        genders: [{ text: '---', value: null }, 'Hombre', 'Mujer'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        console.log(JSON.stringify(this.form))
        axios.post(CONFIG.API_DOMAIN+'/users', this.form)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    }
  }
</script>
