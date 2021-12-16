<template>
  <div>
    <v-main>
      <div v-if="!token">
        <v-row>
          <v-col md="2" xs="12">
            <v-text-field v-model="user.userName" label="Username"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="2" xs="12">
            <v-text-field type="password" v-model="user.password" label="Password"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="1" xs="12">
            <v-btn depressed v-on:click="login()"> Log in</v-btn>
          </v-col>
          <v-col md="1" xs="12">
            <v-btn depressed v-on:click="logout()">Log out</v-btn>
          </v-col>
        </v-row>
      </div>
      <div v-if="token">
        <v-container>
          <v-card
              height="400"
              width="200"
              elevation="3"
          >
            <v-navigation-drawer
                class="grey"
                dark
                permanent
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
                  <v-btn block>
                    Logout
                  </v-btn>
                </div>
              </template>
            </v-navigation-drawer>
          </v-card>
        </v-container>
      </div>
    </v-main>
  </div>
</template>
<script>
import router from "../router";

export default {
  data() {
    return {
      items: [
        {title: 'Add Tour', icon: 'mdi-view-dashboard'},
        {title: 'Add City', icon: 'mdi-account-box'},
        {title: 'Add Guide', icon: 'mdi-gavel'},
        {title: 'Add Driver', icon: 'mdi-gavel'},
        {title: 'Tour List', icon: 'mdi-gavel'},
      ],
      user: {},
      token: "",
      userName: "",
      password: "",
      title: "",
      desc_short: "",
      desc_long: "",
      duration: "",
      city: 0,
      img_url: "",
      input_tour: {},
      input_image: {},
      tour_created: "",
    }
  },
  methods: {
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
    login() {
      this.$http.post('api/public/login', this.user)
          .then(result => {
            localStorage.setItem('user-token', result.data)
            this.token = result.data
            this.$http.defaults.headers.common['Authorization'] = "Bearer " + this.token
            location.reload();
            router.push({name: 'Home'})
          })
    },
    logout() {
      localStorage.removeItem('user-token');
      alert("You have been logged out")
      location.reload();
      router.push({name: 'Home', path: '/'})

    },
    mounted() {
      this.token = localStorage.getItem('user-token')
    }
  }
}
</script>