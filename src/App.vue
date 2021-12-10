<template>
  <v-app>
    <container class="hero">
      <v-card class="overflow-hidden">
        <v-app-bar
            elevation="3"
            fixed
            color="white"
            scroll-target="#scrolling-techniques-7"

        >
          <v-row
              align="center"
              justify="space-around">
            <cel md="1" xs="12">
              <v-btn text to="/">
                Home
              </v-btn>
            </cel>
            <cel md="1" xs="12">
              <v-btn text to="/about">
                About US
              </v-btn>
            </cel>
            <cel md="1" xs="12">
              <v-btn text to="/contact">
                CONTACT
              </v-btn>
            </cel><cel md="1" xs="12">
              <v-btn text to="/admin">
                ADMIN
              </v-btn>
            </cel>

          </v-row>
          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-app-bar>
        <v-sheet
            id="scrolling-techniques-7"
            class="overflow-y-auto"

        >
          <v-container>
            <v-main>
            </v-main>
          </v-container>
        </v-sheet>
      </v-card>
    <v-container>
    </v-container>
    <v-container>
      <router-view/>
    </v-container>
    </container>
  </v-app>
</template>

<script>

export default {
  name: 'App',


  data: () => ({
    //
  }),
  methods: {


  },


}
</script>
<style>
h1 {
  font-family: "Roboto", sans-serif;
  display: block;
  font-size: 2em;
  font-weight: bold;
}

</style>