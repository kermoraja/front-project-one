<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
            alt="Logo"
            class="shrink mr-2"
            contain
            src="https://i.ibb.co/YL8S2DG/logo.png"
            transition="scale-transition"
            width="200"
        />

      </div>
      <div>
        <v-container>

              <v-btn depressed v-on:click="">
                Submit
              </v-btn>

        </v-container>

      </div>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
