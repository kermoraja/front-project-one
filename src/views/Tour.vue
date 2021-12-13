<template>
  <div>
    <v-main>
      <v-container>

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

    directTour: function (id) {
      router.push({name: 'Tour', params: {id: id}})
    },

    getTour: function (){
      this.$http.get('/api/public/tourlist')
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
