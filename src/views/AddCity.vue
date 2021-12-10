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
          <v-col md="3" xs="12">
            <v-text-field v-model="input_city.city" label="Insert City"></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="space-around">
          <v-col md="1" xs="12">
            <v-btn depressed v-on:click = "add_City()">
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
      city:"",
      input_city: {},
      city_created: "",
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



  methods:{

    add_City: function () {
      this.$http.post('/api/city', this.input_city)
          .then(response => {
            this.city_created = response.data
          })
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