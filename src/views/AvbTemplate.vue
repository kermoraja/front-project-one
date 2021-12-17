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
            <v-select v-model="avbRow.time" :items="startTimes" label="Select start time" title="Start time">
            </v-select>
          </v-col>
          <!--          <v-col>{{selectedStartTime}}</v-col>-->

          <v-checkbox v-model="avbRow.dayOfWeek" label="Mon" value="1"></v-checkbox>

          <v-checkbox v-model="avbRow.dayOfWeek" label="Tue" value="2"></v-checkbox>
          <v-checkbox v-model="avbRow.dayOfWeek" label="Wed" value="3"></v-checkbox>

          <v-checkbox v-model="avbRow.dayOfWeek" label="Thu" value="4"></v-checkbox>
          <v-checkbox v-model="avbRow.dayOfWeek" label="Fri" value="5"></v-checkbox>
          <v-checkbox v-model="avbRow.dayOfWeek" label="Sat" value="6"></v-checkbox>
          <v-checkbox v-model.number="avbRow.dayOfWeek" label="Sun" value="0"></v-checkbox>

          <!--          <v-col>{{weekDays}}</v-col>-->
          <v-col>
            <v-text-field v-model.number="avbRow.maxGroup" label="Group size"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field v-model.number="avbRow.regularPrice" label="Regular price"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field v-model.number="avbRow.reducedPrice" label="Reduced price"></v-text-field>
          </v-col>
          <v-col>
            <v-btn color="primary"
                   v-on:click="addAvb()"> Submit
            </v-btn>
          </v-col>
        </v-row>
        <h3>All availabilities</h3><v-btn color="primary" v-on:click="genAvailabilities()">Generate</v-btn>
        <br><br>

        <v-row>
          <v-col>ID</v-col>
          <v-col>Tour ID</v-col>
          <v-col>Starting time</v-col>
          <v-col>Weekday</v-col>
          <v-col>Group size</v-col>
          <v-col>Regular Price</v-col>
          <v-col>Reduced Price</v-col>
        </v-row>
        <v-table v-for="item in avbTemplates">
          <v-row>
            <v-col >{{item.id}}</v-col>
            <v-col >{{item.tourId}}</v-col>
            <v-col >{{item.time}}</v-col>
            <v-col  >{{item.dayOfWeek}}</v-col>
            <v-col >{{item.maxGroup}}</v-col>
            <v-col >{{item.regularPrice}}</v-col>
            <v-col >{{item.reducedPrice}}</v-col>
          </v-row>
        </v-table>
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
      dayOfWeek:0,
      weekDays: [],
      startTimes: ['8:00:00', '8:30:00', '9:00:00', '9:30:00', '10:00:00', '10:30:00', '11:00:00', '11:30:00', '12:00:00'],
      selectedStartTime: "",
      maxGroup: 0,
      regularPrice: 0,
      reducedPrice: 0,
      avbRow: {}, // siin on info ühe availability rea kohta ehk 1 tuur, 1 kellaaeg ja kõik nädalapäevad
      avbTemplates: [], //siin ühe tuuri kõik availability väärtused
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
  mounted() {
    this.showAvbList()

  },

  methods: {
    addAvb: function () {
      this.avbRow.tourId = 1;
      this.avbRow.startDate = "2021-01-01"
      this.avbRow.endDate = "2021-12-31"
      this.$http.post('api/avbTemplate', this.avbRow)
      .then(() => {
        this.showAvbList()
      })
    },
    showAvbList: function() {
      this.$http.get("api/avbTourTemplates/" + 1)
          .then(response => {
            this.avbTemplates = response.data

            if (this.avbTemplates.dayOfWeek === 0) {
              this.avbTemplates.dayOfWeek = "Sun"
            }
            if (this.avbTemplates.dayOfWeek === 1) {
              this.avbTemplates.dayOfWeek = "Mon"
            }else{
              this.avbTemplates.dayOfWeek = this.avbTemplates.dayOfWeek
            }
            if (this.avbTemplates.dayOfWeek === 2) {
              this.avbTemplates.dayOfWeek = "Tue"
            }
            if (this.avbTemplates.dayOfWeek === 3) {
              this.avbTemplates.dayOfWeek = "Wed"
            }
            if (this.avbTemplates.dayOfWeek === 4) {
              this.avbTemplates.dayOfWeek = "Thu"
            }
            if (this.avbTemplates.dayOfWeek === 5) {
              this.avbTemplates.dayOfWeek = "Fri"
            }
            if (this.avbTemplates.dayOfWeek === 6) {
              this.avbTemplates.dayOfWeek = "Sat"
            }
          })
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