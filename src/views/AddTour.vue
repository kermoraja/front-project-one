<template>
  <div>
    <v-main>
      <v-container>
        <v-row>
          <v-col md="1" xs="12">
            <v-btn depressed v-on:click="addTour()">
              Add Tour
            </v-btn>
          </v-col>
          <v-col md="1" xs="12"></v-col>
          <v-col md="1" xs="12">
            <v-btn depressed v-on:click="addCity()">
              Add City
            </v-btn>
          </v-col>
          <v-col md="1" xs="12"></v-col>
          <v-col md="1" xs="12">
            <v-btn depressed v-on:click="addGuide()">
              Add Guide
            </v-btn>
          </v-col>
          <v-col md="1" xs="12"></v-col>
          <v-col md="1" xs="12">
            <v-btn depressed v-on:click="addDriver()">
              Add Driver
            </v-btn>
          </v-col>
          <v-col md="1" xs="12"></v-col>
          <v-col md="1" xs="12">
            <v-btn depressed v-on:click="tourList()">
              Tour List
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row>
          <v-col md="6" xs="12">
            <v-text-field
                label="Tour Title"
                v-model="input_tour.title"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="8" xs="12">
            <v-text-field v-model="input_tour.desc_short" label="Short Description"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="8" xs="12">
            <v-textarea
                name="input"
                label="Long description"
                v-model="input_tour.desc_long">

            </v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="3" xs="12">
            <v-text-field v-model="input_tour.duration" label="Duration"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col xs="12" md="3">
            <v-text-field v-model="input_tour.city" label="Insert City(1=Tallinn)"></v-text-field>
          </v-col>

        </v-row>
        <v-row justify="space-around">
          <v-col md="1" xs="12">
            <v-btn depressed v-on:click = "createTour()">
              Submit
            </v-btn>
          </v-col>
          <v-col md="2" xs="12">
            Tour ID: {{tour_created}}
          </v-col>
          <v-col md="1" xs="12">
            <v-btn depressed v-on:click = "addPhotos(tour_created)">
              Add Photos
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
    }
  },



  methods:{
    createTour: function () {

      this.$http.post('/api/tour', this.input_tour)
          .then(response => {
            this.tour_created = response.data
            console.log(this.tour_created)
          })
    },

    addPhotos:function() {
      console.log(this.tour_created)
      router.push({name: 'Add-photo', params: {id: this.tour_created}})
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
    }
    }

  }
</script>
<style>
/*div {*/
/*  display: flex;*/
/*  justify-content: center*/
/*}*/
</style>