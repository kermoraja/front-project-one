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
<!--            <v-btn depressed v-on:click="guideList()">-->
<!--              Guide List-->
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
          <v-col md="3" xs="12">
            <v-text-field v-model="input_guide.name" label="Insert guide's name"></v-text-field>
          </v-col>
        </v-row>
         <v-row>
          <v-col md="3" xs="12">
            <v-text-field v-model="input_guide.phone" label="Insert guide's phone"></v-text-field>
          </v-col>
        </v-row>
         <v-row>
          <v-col md="3" xs="12">
            <v-text-field v-model="input_guide.email" label="Insert guide's email"></v-text-field>
          </v-col>
        </v-row>
         <v-row>
          <v-col md="3" xs="12">
            <v-text-field v-model="input_guide.city_id" label="Insert guide's location (Tallinn = 1 etc)"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="3" xs="12">
            <v-text-field v-model="input_guide.hourRate" label="Insert guide's hour rate"></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="space-around">
          <v-col md="1" xs="12">
            <v-btn depressed v-on:click = "edit_Guide()">
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
      name:"",
      phone:0,
      email:"",
      city:0,
      hourRate:0,
      input_guide: {},
      guide_created: {},
      guide_changed:{},
    }
  },
  mounted() {
    this.$http.get('/api/guide/'+ this.$route.params.id)
        .then(response => this.input_guide = response.data)
  },



  methods:{

    edit_Guide: function () {
      this.$http.put('/api/public/editguide', this.input_guide)
          .then(response => {
                this.guide_changed = response.data
            router.push({name: 'Guide List', path: '/guide-list'})
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
    },
    guideList: function () {
      router.push({name: 'Guide List', path: '/guide-list'})
    },
    logout(){
      localStorage.removeItem('user-token');
      alert("You have been logged out")
      router.push({name: 'Home', path: '/'})

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