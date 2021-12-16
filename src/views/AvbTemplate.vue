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
        <h2>Add availability</h2>
        <v-row>
          <v-col>
            <v-select v-model="avbRow.selectedStartTime" :items="startTimes" label="Select start time" title="Start time">
            </v-select>
          </v-col>
          <!--          <v-col>{{selectedStartTime}}</v-col>-->

          <v-checkbox v-model="avbRow.weekDays" label="Mon" value="1"></v-checkbox>

          <v-checkbox v-model="avbRow.weekDays" label="Tue" value="2"></v-checkbox>
          <v-checkbox v-model="avbRow.weekDays" label="Wed" value="3"></v-checkbox>

          <v-checkbox v-model="avbRow.weekDays" label="Thu" value="4"></v-checkbox>
          <v-checkbox v-model="avbRow.weekDays" label="Fri" value="5"></v-checkbox>
          <v-checkbox v-model="avbRow.weekDays" label="Sat" value="6"></v-checkbox>
          <v-checkbox v-model="avbRow.weekDays" label="Sun" value="0"></v-checkbox>

          <!--          <v-col>{{weekDays}}</v-col>-->
          <v-col>
            <v-text-field v-model="avbRow.groupSize" label="Group size"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field v-model="avbRow.priceRegular" label="Regular price"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field v-model="avbRow.priceReduced" label="Reduced price"></v-text-field>
          </v-col>
          <v-col>
            <v-btn color="primary"
                   v-on:click="addAvb()"> Submit
            </v-btn>
          </v-col>
        </v-row>
<!--        <h3>Show data</h3>-->
<!--        {{ avbRow }}-->
<!--        <br><br>-->
<!--        <v-divider></v-divider>-->
<!--        <v-row>-->
<!--          <v-col>Start time</v-col>-->
<!--          <v-col>Weekdays</v-col>-->
<!--          <v-col>Group size</v-col>-->
<!--          <v-col>Regular price</v-col>-->
<!--          <v-col>Reduced price</v-col>-->
<!--        </v-row>-->
<!--        <v-row v-for="item in avbRow">-->
<!--          <v-col>{{item.startTime}}</v-col>-->
<!--          <v-col>{{item.weekDays}}</v-col>-->
<!--          <v-col>{{item.groupSize}}</v-col>-->
<!--          <v-col>{{item.priceRegular}}</v-col>-->
<!--          <v-col>{{item.priceReduced}}</v-col>-->
<!--        </v-row>-->


        <!--        <v-row justify="space-around">-->
        <!--          <v-col md="1" xs="12">-->
        <!--            <v-btn depressed v-on:click = "add_City()">-->
        <!--              Submit-->
        <!--            </v-btn>-->
        <!--          </v-col>-->
        <!--          <v-col md="1" xs="12">-->
        <!--            <v-btn depressed v-on:click="logout()">-->
        <!--              Logout-->
        <!--            </v-btn>-->
        <!--          </v-col>-->
        <!--        </v-row>-->
      </v-container>
    </v-main>
  </div>
</template>
<script>
import router from "../router";

export default {
  data: function () {
    return {
      city: "",
      tourId: 1,
      input_city: {},
      city_created: "",
      weekDays: [],
      startTimes: ['8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00'],
      selectedStartTime: "",
      groupSize: "",
      priceRegular: "",
      priceReduced: "",
      avbRow: {}, // siin on info ühe availability rea kohta ehk 1 tuur, 1 kellaaeg ja kõik nädalapäevad
      avbTemplate: [], //siin ühe tuuri kõik availability väärtused
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
    addAvb: function () {
      this.avbRow.tourId = 1;
      this.avbRow.startDate = "2021-01-01"
      this.avbRow.endDate = "2021-31-12"
      this.$http.post('api/avbTemplate', this.avbRow)
    },

    // add_City: function () {
    //   this.$http.post('/api/city', this.input_city)
    //       .then(response => {
    //         this.city_created = response.data
    //       })
    // },
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
    logout() {
      localStorage.removeItem('user-token');
      alert("You have been logged out")
      location.reload();

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