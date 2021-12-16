<template>
  <div>
    <v-main>
      <v-container></v-container>
      <v-container>
        <v-row>
          <v-col>
            <v-card elevation="3" max-width="600">
              <div class="bgDiv"><h1>{{ tours.title }}</h1></div>
              <v-divider></v-divider>
              <v-row>
                <v-col class="celSheet" >
                    <div><h6>City: {{ tours.city }}</h6></div>
                </v-col>
                <v-col class="celSheet">
                    <div><h6>Duration: {{ tours.duration }}</h6></div>
                </v-col>
              </v-row>
              <v-container></v-container>
              <v-divider></v-divider>
              <v-row>
                <v-container><h3>{{ tours.desc_long }}</h3></v-container>
              </v-row>
            </v-card>
          </v-col>
          <v-col>
            <v-card elevation="3" max-width="600">
              <div class="bgDiv"><h1>Tour Photos</h1></div>
              <v-divider></v-divider>
              <v-carousel hide-delimiters>
                <v-carousel-item
                    v-for="(item,i) in photos"
                    :key="i"
                    :src="item.photo_url"
                    style="width:600px;height:auto;"

                ></v-carousel-item>
              </v-carousel>
            </v-card>
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
      photos: [],
      tours: [],
      id: 0,
      title: "",
      desc_short: "",
      desc_long: "",
      duration: "",
      city: 0,
      page: 1,
      item: "",
      toursCity: "",
      photo_url:""

    }
  },
  icons: {
    iconfont: 'mdiSvg',
  },
  mounted: function () {
    this.getTour();
    this.getTourPictures()
  },
  methods: {
    getTourPictures: function () {
      this.$http.get('/api/public/gallery/' + this.$route.params.id)
          .then(response => {
            this.photos = response.data
            console.log(this.photos)
          })
    },
    getTour() {
      this.$http.get('/api/public/tour/' + this.$route.params.id)
          .then(response => {
            this.tours = response.data
            console.log(this.tours);
            if (this.tours.city === 1) {
              this.tours.city = "Tallinn"
            } else {
              this.tours.city = this.tours.city;
            }
            if (this.tours.city === 2) {
              this.tours.city = "Tartu"
            } else {
              this.tours.city = this.tours.city
            }
            if (this.tours.city === 3) {
              this.tours.city = "Riga"
            } else {
              this.tours.city = this.tours.city
            }
          })
    },
    getCity() {
      this.$http.get('/api/public/tourlist' + this.$route.params.id)
          .then(response => {
            this.toursCity = response.data
          })
    }
  }
}

</script>
<style>
h1 {
  padding-top: 10px;
  padding-bottom: 20px;
  font-family: 'Caveat', cursive;
  text-align: center;
  color: #FFFFFF;
}
.bgDiv{
  background-image: url("../assets/gradient1.jpg");
  background-size: 600px;
}

h3 {
  margin-left: 1%;
  margin-right: 3%;
  padding-top: 10px;
  font-weight: lighter;
  font-family: 'Caveat', cursive;
  text-align: justify;
  white-space: pre-line;

}

h4 {
  margin-left: 1%;
  padding-top: 10px;
  font-family: 'Caveat', cursive;
}

h6 {
  font-weight: lighter;
  font-size: x-large;
  font-family: 'Caveat', cursive;
}

.celSheet {
  margin-left: 10%;
  padding-top: 20px;
}
.vCardSpacingBelow{
  margin-top:25px;
}

/*.titleColor {*/
/*  background-color: rgba(255, 255, 255, 0.5);*/
/*}*/

/*.textBold {*/
/*  font-weight: bold;*/
/*}*/

/*.titleUp {*/
/*  margin-left: 75%;*/
/*  background-color: rgba(255, 255, 255, 0.7);*/

/*}*/
</style>
