<template>
  <div>
    <v-main>
      <v-container>
        <v-row>
          <v-col md="3" xs="12">
            <v-text-field v-model="input_image.photo_title" label="Image Title"></v-text-field>
          </v-col>
          <v-col md="3" xs="12">
            <v-text-field v-model="input_image.photo_url" label="Image Url"></v-text-field>
          </v-col>
          <v-col md="3" xs="12">
            <v-text-field v-model="input_image.tour_id" label="Tour ID"></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="space-around">
          <v-col md="1" xs="12">
            <v-btn depressed v-on:click = "uploadPhotos()">
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
     photo_title:"",
    photo_url:"",
      tour_id:0,
      input_image:{},
      images_crated:"",
      tour_created: "",
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 1) || 'Min 3 characters',
      ],
      alignments: [
        'center',
      ],
      items: [1, 2, 3]
      ,
    }
  },

  mounted() {
    this.$http.get('/api/tour/' + this.$route.params.id)
        .then(response => this.tour_created = response.data)
    console.log(this.$route.params)
  },

  methods:{
    uploadPhotos: function () {

      this.$http.post('/api/addphoto', + this.input_image)

          .then(response => {
            this.images_crated = response.data
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