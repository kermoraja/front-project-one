<template>
  <div>
    <v-main>
      <v-container>
        <v-row>
          <v-col><v-btn @click="getTour()">Show tours</v-btn></v-col>
        </v-row>
        <v-row>
          <v-col md="6" xs="12">
            <v-card v-for="item in tours" @click="directTour(item.id)">
              <v-img height="300px" src="https://www.nordicexperience.com/wp-content/uploads/2014/10/tll-tours-768x350.jpg">
                <v-row>
                  <v-col md="3" xs="12">
                    <v-chip
                        class="ma-2"
                        color="red"
                        text-color="white"
                    >
                      <v-icon
                          small
                          color="white"
                      >
                        mdi-fire
                      </v-icon>
                      HOT
                    </v-chip>
                  </v-col>
                  <v-col class="titleUp" md="3" xs="12">

                    <v-card-title class="textBold">
                      <v-icon
                          small
                          color="blue"
                      >
                        mdi-clock
                      </v-icon>{{ item.duration }}</v-card-title>
                  </v-col>
                </v-row>

              </v-img>
              <v-card-title class="titleColor">{{ item.title }}</v-card-title>
              <v-card-text>{{item.desc_short}}</v-card-text>
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
                  :length="2"
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
      item:"",
    }
  },
  icons: {
    iconfont: 'mdiSvg',
  },
  methods: {

    directTour: function () {
      router.push({name: 'Tour', params: {id: this.item.id}})
    },

    getTour: function (){
      this.$http.get('/api/public/tourwithphotos')
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
  margin-left: 50%;
  background-color: rgba(255, 255, 255, 0.7);

}
</style>
