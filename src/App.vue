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
            <div v-if="!token">
            <v-btn text to="/admin">
              ADMIN
            </v-btn>
            </div>
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
      <v-container>
      </v-container>
      <v-container>
      </v-container>
      <v-container>
      </v-container>

      <v-sheet
          id="scrolling-techniques-7"
          class="overflow-y-auto"

      >
        <v-container>
          <v-main>
          </v-main>
        </v-container>
      </v-sheet>
      <v-row>
      <v-col class="navMargin" md="2" sm="6">
        <div v-if="token">
          <v-container>
            <v-card
                height="400"
                width="200"
                elevation="3"
                prominent
                left
            >
              <v-navigation-drawer
                  class="white"

                  color="white"
                  scroll-target="#scrolling-techniques-7"
              >
                <v-list>
                  <v-list-item
                      v-for="item in items"
                      :key="item.title"
                      link
                  >
                    <v-list-item-icon>
                      <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>

                <template v-slot:append>
                  <div class="pa-2">
                    <v-btn block v-on:click="login()">
                      Log in
                    </v-btn>
                  </div>
                  <div class="pa-2">
                    <v-btn block v-on:click="logout()">
                      Logout
                    </v-btn>
                  </div>
                </template>
              </v-navigation-drawer>
            </v-card>
          </v-container>
        </div>
      </v-col>

      <!--      </v-card>-->
        <v-col md="10" xs="12">

      <v-container>
        <router-view/>
      </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>

import router from "./router";

export default {
  name: 'App',
  data: function () {
    return {
      items: [
        {title: 'Add Tour', icon: 'mdi-map'},
        {title: 'Add City', icon: 'mdi-folder-marker'},
        {title: 'Add Guide', icon: 'mdi-account-edit'},
        {title: 'Add Driver', icon: 'mdi-van-passenger'},
        {title: 'Tour List', icon: 'mdi-format-list-bulleted'},
      ],
      user: {},
      token: "",
      userName: "",
      password: "",


      //
    }
  },
  methods: {

    login() {
      this.$http.post('api/public/login', this.user)
          .then(result => {
            localStorage.setItem('user-token', result.data)
            this.token = result.data
            this.$http.defaults.headers.common['Authorization'] = "Bearer " + this.token
            location.reload();
            // router.push({name: 'Admin'})
          })
    },
    logout() {
      localStorage.removeItem('user-token');
      alert("You have been logged out")
      router.push({name: 'Home', path: '/'})

    }
  },
  mounted() {
    this.token = localStorage.getItem('user-token')


  },
  addTour: function () {
    router.push({name: 'Add Tour', path: '/add-tour'})
  },
  addGuide: function () {
    router.push({name: 'Add Guide', path: '/add-guide'})
  },
  addDriver: function () {
    router.push({name: 'Add Driver', path: '/add-driver'})
  },
  addCity: function () {
    router.push({name: 'Add City', path: '/add-city'})
  },
  tourList: function () {
    router.push({name: 'Tour List', path: '/tour-list'})
  },
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
.navMargin{
  margin-left: -70px;
  margin-top: 100px;
}

</style>