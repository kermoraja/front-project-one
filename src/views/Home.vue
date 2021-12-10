<template>
  <div>
    <v-main>
      <v-container>
        <v-row>
          <v-col><v-btn @click="getTour()">Show tours</v-btn></v-col>
        </v-row>
        <v-row>
          <v-col md="6" xs="12">
            <v-card v-for="item in tours" @click="addTour()">
              <v-img height="300px"
                     src="https://www.nordicexperience.com/wp-content/uploads/2014/04/Vanalinna-ekskursioon-2h-vaike.jpg">
                <v-row>
                  <v-col class="titleUp" md="3">

                    <v-card-title class="textBold">{{ item.duration }}</v-card-title>
                  </v-col>
                </v-row>

              </v-img>
              <v-card-title class="titleColor">{{ item.title }}</v-card-title>
              <v-card-text>{{item.desc_short}}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6" xs="12">
          </v-col>
        </v-row>
        <v-row>
          <v-col md="12" xs="12">
            <div class="text-center">
              <v-pagination
                  v-model="page"
                  :length="6"
              ></v-pagination>
            </div>
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
      tours:[],
      id:0,
      title:"",
      desc_short:"",
      desc_long:"",
      duration:"",
      city:0,
      page: 1,
    }
  },
  icons: {
    iconfont: 'mdiSvg',
  },
  methods: {

    addTour: function () {
      router.push({name: 'Add Tour', path: '/add-tour'})
    },

    getTour: function (){
      this.$http.get('/api/tourlist')
          .then(response => {
            this.tours = response.data
          })
    },
    mounted(){
      this.getTour();
      }
    }
  }

</script>
<style>
.titleColor {
  background-color: rgba(255, 255, 255, 0.5);
}

.textBold {
  font-weight: bold;
}

.titleUp {
  margin-left: 75%;
  background-color: rgba(255, 255, 255, 0.7);

}
</style>
