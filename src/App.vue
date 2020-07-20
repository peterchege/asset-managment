<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="APA Insurance"
          class="shrink mr-2 "
          contain
          src="https://apainsurance.org/img/logon.png"
          transition="scale-transition"
          width="70"
        />

      </div>

    </v-app-bar>

    <v-content class="accent">
      <v-container align="center" justify="center" class="mt-10">
          <app-form/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
    appForm:() => import ('@/views/ApplicationForm'),
  },

  data: () => ({
    
  }),
};
</script>
