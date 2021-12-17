<template>
  <div>
    <v-main>
      <div>
        <v-container>
          <div v-if="!token">
          <h1>ADMIN LOG IN PAGE</h1>
          </div>
        </v-container>
      </div>
      <div v-if="token">
        <v-container>
          <v-row>
<!--            <v-col md="1" xs="2">-->
<!--              <v-btn depressed v-on:click="addTour()">-->
<!--                Add Tour-->
<!--              </v-btn>-->
<!--            </v-col>-->
<!--            <v-col md="1" xs="2"></v-col>-->
<!--            <v-col md="1" xs="2">-->
<!--              <v-btn depressed v-on:click="addCity()">-->
<!--                Add City-->
<!--              </v-btn>-->
<!--            </v-col>-->
<!--            <v-col md="1" xs="2"></v-col>-->
<!--            <v-col md="1" xs="2">-->
<!--              <v-btn depressed v-on:click="addGuide()">-->
<!--                Add Guide-->
<!--              </v-btn>-->
<!--            </v-col>-->
<!--            <v-col md="1" xs="2"></v-col>-->
<!--            <v-col md="1" xs="2">-->
<!--              <v-btn depressed v-on:click="addDriver()">-->
<!--                Add Driver-->
<!--              </v-btn>-->
<!--            </v-col>-->
<!--            <v-col md="1" xs="2"></v-col>-->
<!--            <v-col md="1" xs="2">-->
<!--              <v-btn depressed v-on:click="tourList()">-->
<!--                Tour List-->
<!--              </v-btn>-->
<!--            </v-col>-->
<!--            <v-col md="1" xs="12"></v-col>-->
<!--            <v-col md="1" xs="12">-->
<!--              <v-btn depressed v-on:click="addGallery()">-->
<!--                Add Photos-->
<!--              </v-btn>-->
<!--            </v-col>-->
            <v-col md="1" xs="12"></v-col>
            <v-col md="1" xs="12">
              <v-btn depressed v-on:click="logout()">
                Logout
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </div>
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
<!--          <v-col md="1" xs="12">-->
<!--            <v-btn depressed v-on:click="logout()">Log out</v-btn>-->
<!--          </v-col>-->
        </v-row>
      </div>
    </v-main>
  </div>
</template>
<script>
import router from "../router";

export default {
  data: function () {
    return {
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
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 1) || 'Min 3 characters',
      ],
      alignments: [
        'center',
      ],
      items: [1, 2, 3]
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
    // addGallery: function(){
    //   router.push({name: 'Add Gallery', path: '/add-gallery'})
    // },
    login() {
      this.$http.post('api/public/login', this.user)
          .then(result => {
            localStorage.setItem('user-token', result.data)
            this.token = result.data
            this.$http.defaults.headers.common['Authorization'] = "Bearer " + this.token
            // location.reload();
            router.push({name: 'Tour List',path: '/tour-list'})
          })
    },
    logout() {
      localStorage.removeItem('user-token');
      alert("You have been logged out")
      router.push({name: 'Home', path: '/'})

    }

  }, mounted() {
    this.token = localStorage.getItem('user-token')
  }
}
</script>
<style>
/*div {*/
/*  display: flex;*/
/*  justify-content: center*/
/*}*/
</style>