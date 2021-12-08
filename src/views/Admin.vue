<template>
  <div>
    <v-main>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 md3>
            <v-row
                :align="align"
                no-gutters
                style="height: 150px;">
              <v-col>
                <v-text-field
                    label="Tour Title"
                    :rules="rules"
                    hide-details="auto"
                    v-model="input_tour.title"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12 md3>
            <v-row
                :align="align"
                no-gutters
                style="height: 150px;">
              <v-col>
                <v-textarea
                    name="input-7-1"
                    label="Long description"
                    value=""
                    hint="Hint text"
                    v-model="input_tour.desc_long"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12 md3>
            <v-row
                :align="align"
                no-gutters
                style="height: 150px;">
              <v-col>
                <v-text-field v-model="input_tour.desc_short" :rules="rules" label="Short Description"></v-text-field>
              </v-col>
            </v-row>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12 md3>
            <v-row>
              <v-col>
                <v-text-field v-model="input_tour.duration" :rules="rules" label="Duration"></v-text-field>
              </v-col>
            </v-row>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12 md3>
            <v-row>
              <v-col>
                <v-text-field v-model="input_tour.city" :rules="rules" label="City"></v-text-field>
              </v-col>
            </v-row>
          </v-flex>
        </v-layout>
<!--        <v-layout>-->
<!--          <v-flex xs12 md3>-->
<!--            <v-row>-->
<!--              <v-col>-->
<!--                <v-text-field v-model="input_tour.img_url" :rules="rules" label="Images"></v-text-field>-->
<!--              </v-col>-->
<!--            </v-row>-->
<!--          </v-flex>-->
<!--        </v-layout>-->
        <v-layout>
          <v-flex xs12 md1>
            <v-row justify="space-around">
              <v-col>
                <v-btn depressed v-on:click = "createTour()">
                  Submit
                </v-btn>
              </v-col>
            </v-row>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </div>
</template>
<script>
import router from "../router";

export default {
  data: function () {
    return {
      title:"",
      desc_short:"",
      desc_long:"",
      duration:"",
      city:"",
      img_url:"",
      input_tour: {},
      tour_created: ""
    }
  },
  rules: [
    value => !!value || 'Required.',
    value => (value && value.length >= 3) || 'Min 3 characters',
  ],
  alignments: [
    'center',
  ],
  methods:{
    createTour: function () {

      this.$http.post('/api/tour', this.input_tour)
          .then(response => {
            this.tour_created = response.data
            console.log(this.tour_created)
          })
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