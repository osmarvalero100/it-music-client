<template>
  <div class="">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-container>
        <b-navbar-brand :to="{name: 'home'}">It Music</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{name: 'home'}" exact>Inicio</b-nav-item>
            <b-nav-item :to="{name: 'about'}">About</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Nombre del grupo"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item-dropdown text="Grupo" right>

              <b-dropdown-item :to="{name: 'home'}">Home</b-dropdown-item>
              <b-dropdown-item :to="{name: 'about'}">About</b-dropdown-item>
            </b-nav-item-dropdown>
<!--
            <b-nav-item-dropdown right>
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
-->
            <b-nav-item aria-role="listitem" v-b-modal.modal-auth>Ingresa o Regístrate</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>
<script>
  export default {
    name: 'Menu'
  }
</script>
