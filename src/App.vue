<template>
  <v-app>
    <v-container>
      <!--      <v-card class="overflow-hidden">-->
      <v-app-bar
          height="95"
          elevation="3"
          fixed
          color="white"
          scroll-target="#scrolling-techniques-7"
      >

        <img src="https://i.ibb.co/8Ngf6y5/logo.png" height="85" width="271"/>
        <v-row
            align="center"
            justify="space-around">
          <v-col md="1" xs="12">
            <v-btn text to="/">
              Home
            </v-btn>
          </v-col>
          <v-col md="1" xs="12">
            <v-btn text to="/about">
              About US
            </v-btn>
          </v-col>
          <v-col md="1" xs="12">
            <v-btn text to="/contact">
              CONTACT
            </v-btn>
          </v-col>
          <v-col md="1" xs="12">
            <v-btn text to="/admin">
              ADMIN
            </v-btn>
          </v-col>

        </v-row>
        <v-spacer></v-spacer>

        <!--          <v-btn icon>-->
        <!--            <v-icon>mdi-magnify</v-icon>-->
        <!--          </v-btn>-->

        <!--          <v-btn icon>-->
        <!--            <v-icon>mdi-heart</v-icon>-->
        <!--          </v-btn>-->

        <!--          <v-btn icon>-->
        <!--            <v-icon>mdi-dots-vertical</v-icon>-->
        <!--          </v-btn>-->
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
      <!--      </v-card>-->
      <v-container>
      </v-container>
      <v-container>
      </v-container>
      <v-container>
      </v-container>
      <v-container>
        <router-view/>
      </v-container>
    </v-container>
  </v-app>
</template>

<script>

export default {
  name: 'App',


  data: () => ({
    //
  }),
  methods: {},


}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
h1 {
  font-family: 'Caveat', cursive;
  display: block;
  font-size: 2em;
  font-weight: bold;
}

</style>