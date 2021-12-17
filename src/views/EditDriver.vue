<template>
  <div>
    <v-main>
<!--      <v-container>-->
<!--        <v-row>-->
<!--          <v-col md="1" xs="12">-->
<!--            <v-btn depressed v-on:click="addTour()">-->
<!--              Add Tour-->
<!--            </v-btn>-->
<!--          </v-col>-->
<!--          <v-col md="1" xs="12"></v-col>-->
<!--          <v-col md="1" xs="12">-->
<!--            <v-btn depressed v-on:click="addCity()">-->
<!--              Add City-->
<!--            </v-btn>-->
<!--          </v-col>-->
<!--          <v-col md="1" xs="12"></v-col>-->
<!--          <v-col md="1" xs="12">-->
<!--            <v-btn depressed v-on:click="addGuide()">-->
<!--              Add Guide-->
<!--            </v-btn>-->
<!--          </v-col>-->
<!--          <v-col md="1" xs="12"></v-col>-->
<!--          <v-col md="1" xs="12">-->
<!--            <v-btn depressed v-on:click="addDriver()">-->
<!--              Add Driver-->
<!--            </v-btn>-->
<!--          </v-col>-->
<!--          <v-col md="1" xs="12"></v-col>-->
<!--          <v-col md="1" xs="12">-->
<!--            <v-btn depressed v-on:click="tourList()">-->
<!--              Tour List-->
<!--            </v-btn>-->
<!--          </v-col>-->
<!--          <v-col md="1" xs="12"></v-col>-->
<!--          <v-col md="1" xs="12">-->
<!--            <v-btn depressed v-on:click="logout()">-->
<!--              Logout-->
<!--            </v-btn>-->
<!--          </v-col>-->
<!--        </v-row>-->
<!--      </v-container>-->
      <v-container>
        <v-row>
          <v-col md="3" xs="12" >
            <v-text-field v-model="input_driver.firstName" label="Insert driver's first name"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="3" xs="12">
            <v-text-field v-model="input_driver.lastName" label="Insert driver's last name"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="3" xs="12">
            <v-text-field v-model="input_driver.phone" label="Insert driver's phone"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="3" xs="12">
            <v-text-field v-model="input_driver.email" label="Insert driver's email"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="3" xs="12">
            <v-text-field v-model="input_driver.city_id" label="Insert driver's location"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="3" xs="12">
            <v-text-field v-model="input_driver.car_size" label="Insert driver's car size"></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="space-around">
          <v-col md="1" xs="12">
            <v-btn depressed v-on:click = "add_Driver()">
              Submit
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>
<script>
import router from "../router";

export default {
  data: function () {
    return {
      firstName:"",
      lastName:"",
      phone:"",
      email:"",
      city_id:1,
      car_size:0,
      input_driver: {},
      driver_created: "",

    }
  },
  mounted() {
    this.$http.get('/api/driver/'+ this.$route.params.id)
        .then(response => this.input_driver = response.data)
  },


  methods:{

    add_Driver: function () {
      this.$http.put('/api/editdriver', this.input_driver)
          .then(response => {
            this.driver_created = response.data
          })
      router.push({name: 'Driver List', path: '/driver-list'})
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
    logout(){
      localStorage.removeItem('user-token');
      alert("You have been logged out")
      router.push({name: 'Home', path: '/'});

    }
  }

}
</script>
<style>
v-col{
  font-family: sans-serif Calibri;
  color: #FFFFFF;

}
</style>