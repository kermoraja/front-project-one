<template>
  <div>
    <v-main>
      <v-container>
        <v-row>
          <v-col md="6" xs="12">
            <v-card>
              <v-img height="300px" src="https://www.nordicexperience.com/wp-content/uploads/2014/04/Vanalinna-ekskursioon-2h-vaike.jpg"></v-img>
              <v-col md="6" xs="12"><v-card-title>Tallinn Private Panoramic Drive</v-card-title></v-col>

            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col md="6" xs="12">
            <v-card
                class="mx-auto"
                max-width="450"
            >
              <v-img
                  class="white--text align-end"
                  height="200px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-card-title>Top 10 Australian beaches</v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0">
                Number 10
              </v-card-subtitle>

              <v-card-text class="text--primary">
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
              </v-card-text>

              <v-card-actions>
                <v-btn
                    color="orange"
                    text
                >
                  Share
                </v-btn>

                <v-btn
                    color="orange"
                    text
                >
                  Explore
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col md="6" xs="12">
            <v-card
                class="mx-auto"
                max-width="450"
            >
              <v-img
                  class="white--text align-end"
                  height="200px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-card-title>Top 10 Australian beaches</v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0">
                Number 10
              </v-card-subtitle>

              <v-card-text class="text--primary">
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
              </v-card-text>

              <v-card-actions>
                <v-btn
                    color="orange"
                    text
                >
                  Share
                </v-btn>

                <v-btn
                    color="orange"
                    text
                >
                  Explore
                </v-btn>
              </v-card-actions>
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

export default {
data: function (){
return {
  page: 1,
}
},

}
</script>
