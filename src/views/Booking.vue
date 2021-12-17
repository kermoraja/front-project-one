<template>
  <div>
    <v-main>
      <v-container>
        <v-row>
          <v-col class="pa-md-7 mx-lg-auto">
            <v-card elevation="3" max-width="900">
              <div class="bgDiv"><h1>{{ heading }}</h1></div>
              <v-divider></v-divider>
              <v-row>
                <v-col>
                  <div class="subheading">{{ subheading1 }}</div>
                </v-col>
                <v-col>
                  <div class="subheading">{{ subheading2 }}</div>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-row>
                <v-col>
                  <div class="celSheet">Tours Title:</div>
                  <div class="celSheet">Date & Time:</div>
                  <div class="celSheet">City:</div>
                  <div class="celSheet">Starting point:</div>
                  <div class="celSheet">Standard price:</div>
                  <div class="celSheet">Reduced price:</div>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col>
                  <v-row>
                    <v-col md="8">
                      <v-text-field
                          value=""
                          label="First Name"
                          dense
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col md="8">
                      <v-text-field
                          value=""
                          label="Last Name"
                          dense
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col md="8">
                      <v-text-field
                          value=""
                          label="Phone number"
                          dense
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col md="8">
                      <v-text-field
                          value=""
                          label="E-mail address"
                          dense
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col md="8">
                      <v-select
                          :items="groupsizeitems"
                          label="Group size for regular price"
                      ></v-select>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col md="8">
                      <v-select
                          :items="groupsizeitems"
                          label="Group size for reduced price"
                      ></v-select>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col md="8">
                      <v-select
                          :items="startinglocation"
                          label="Starting Location"
                      ></v-select>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col md="8">
                      <v-textarea
                          name="input-7-1"
                          label="Additional information"
                          value=""
                      ></v-textarea>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-row>
                <v-col>
                </v-col>
                <v-col>
                  <div class="celSheet">Total Price for Regular:</div>
                  <div class="celSheet">Total Price for Reduced:</div>
                  <div class="celSheetTotal">Total Price:</div>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <div class="text-center">
                    <v-btn
                        rounded
                        color="primary"
                        dark
                    >
                      BOOK
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      heading: "TITLE FOR BOOKING",
      subheading1: "TOUR INFO",
      subheading2: "BOOKING DETAILS",
      groupsizeitems: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'],
      priceselect: ['Regular', 'Reduced'],
      startinglocation: ['Place1', 'Place2', 'Place3'],
    }
  },
  icons: {
    iconfont: 'mdiSvg',
  },
  mounted: function () {
    this.getTour();
    this.getTourPictures()
    this.getDayOfWeek()
  },
  methods: {
    getTourPictures: function () {
      this.$http.get('/api/public/gallery/' + this.$route.params.id)
          .then(response => {
            this.photos = response.data
            console.log(this.photos)
          })
    },
    getDayOfWeek: function () {
      const d = new Date(2022, 0, 1);
      this.dayOfWeek = d.getDay()
      console.log(this.dayOfWeek);

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
    },
    reserve() {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
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

.bgDiv {
  background-image: url("../assets/gradient1.jpg");
  background-size: 900px;
}

h3 {
  margin-left: 1%;
  margin-right: 3%;
  padding-top: 10px;
  /*font-weight: lighter;*/
  font-family: 'Source Sans Pro', sans-serif;
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

.subheading {
  font-size: large;
  font-family: 'Source Sans Pro', sans-serif;
  text-align: center;
}

.celSheet {
  padding-left: 10px;
  padding-top: 20px;
}

.celSheetTotal {
  padding-left: 10px;
  padding-top: 20px;
  font-weight: bold;
}

.vCardSpacingBelow {
  margin-top: 25px;
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
