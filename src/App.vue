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
        <div>
          <img v-if="!mobile" src="https://i.ibb.co/8Ngf6y5/logo.png" height="85" width="271"/>
        </div>
        <div>
          <img v-if="mobile" src="https://i.ibb.co/LnFMNp9/logo-small.png" height="85" width="91"/>
        </div>

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
              {{token}}
            </v-btn>
          </v-col>
          <!--          <v-col md="1" xs="12">-->
          <!--            <div v-if="!token">-->
          <!--              <v-btn text to="/admin">-->
          <!--                ADMIN-->
          <!--              </v-btn>-->
          <!--            </div>-->
          <!--          </v-col>-->

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
        <v-col v-if="token" class="navMargin" md="2" sm="6">
          <v-container>
            <v-card
            >
              <v-navigation-drawer
                  color="white"
                  scroll-target="#scrolling-techniques-7"

                  expand-on-hover
                  clipped
                  app
              >
                <v-container></v-container>
                <v-container></v-container>
                <v-list class="mt-16">
                  <v-list-item
                      v-for="item in items"
                      :key="item.title"
                      :to="item.link"
                  >
                    <v-list-item-icon>
                      <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                <v-list v-if="!token" class="mt-16">
                  <v-list-item
                      v-for="item in items2"
                      :key="item.title"
                      :to="item.link"
                  >
                    <v-list-item-icon>
                      <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                <v-list v-if="token" class="mt-16">
                  <v-list-item
                      v-for="item in items3"
                      :key="item.title"
                      :to="item.link"
                  >
                    <v-list-item-icon>
                      <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-navigation-drawer>
            </v-card>
          </v-container>
        </v-col>
        <v-col md="15" xs="4">

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
        {title: 'Add Tour', icon: 'mdi-map', link: '/add-tour'},
        {title: 'City List', icon: 'mdi-folder-marker', link: '/city-list'},
        {title: 'Guide List', icon: 'mdi-account-edit', link: '/guide-list'},
        {title: 'Driver List', icon: 'mdi-van-passenger', link: '/driver-list'},
        {title: 'Tour List', icon: 'mdi-format-list-bulleted', link: '/tour-list'},
      ],
      items2: [
        {title: 'Login', icon: 'mdi-login', link: '/login'}],
      items3:
          [
            {title: 'Logout', icon: 'mdi-logout', link: '/logout'},
          ],
      user: {},
      token: "",
      userName: "",
      password: "",


      //
    }
  },
  computed: {
    mobile() {
      return this.$vuetify.breakpoint.sm
    },

  },
  methods: {

    login() {
      this.$http.post('api/public/login', this.user)
          .then(result => {
            localStorage.setItem('user-token', result.data)
            this.token = result.data
            this.$http.defaults.headers.common['Authorization'] = "Bearer " + this.token
            location.reload();
          })
    }
  },
  mounted() {
    console.log("here");
    this.token = localStorage.getItem('user-token')
    console.log(this.token);

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
@import url('https://fonts.googleapis.com/css2?family=Caveat&family=Source+Sans+Pro:wght@300&display=swap');

h1 {
  font-family: 'Caveat', cursive;
  display: block;
  font-size: 2em;
  font-weight: bold;
}

.navMargin {
  margin-left: -180px;
  margin-top: 100px;
}

</style>