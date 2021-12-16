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
<!--          <v-col md="1" xs="12"></v-col>-->
<!--          <v-col md="1" xs="12">-->
<!--            <v-btn depressed v-on:click="addGallery()">-->
<!--              Add Photos-->
<!--            </v-btn>-->
<!--          </v-col>-->
          <v-col md="1" xs="12"></v-col>
          <v-col md="1" xs="12">
            <v-btn depressed v-on:click="logout()">
              Logout
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
      <v-data-table
          :headers="headers"
          :items="getGalleryPhotos"
          sort-by="calories"
          class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar
              flat
          >
            <v-toolbar-title>Gallery photos</v-toolbar-title>
            <v-divider
                class="mx-4"
                inset
                vertical
            ></v-divider>
            <v-spacer></v-spacer>
            <v-dialog
                v-model="dialog"
                max-width="500px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    color="primary"
                    dark
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                >
                  New Image
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                          cols="12"
                          sm="6"
                          md="8"
                      >
                        <!--                        <v-select v-model="input_image.tour_id"-->
                        <!--                                  :items="tlist.tour_id"-->
                        <!--                                  item-text="tour_id"-->
                        <!--                                  item-value="tour_id"-->
                        <!--                                  label="Select ID">-->
                        <!--                        </v-select>-->
                        <v-text-field
                            v-model="input_image.tour_id"
                            label="Tour ID"
                            :rules="rules.required"
                        ></v-text-field>
                      </v-col>
                      <v-col
                          cols="12"
                          sm="6"
                          md="8"
                      >
                        <v-text-field
                            v-model="input_image.photo_url"
                            label="Photo URL"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>

                  <v-spacer></v-spacer>
                  <v-btn
                      color="blue darken-1"
                      text
                      @click="close"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                      color="blue darken-1"
                      text
                      @click="save"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon
              small
              @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </template>
        <template v-slot:item.photo_url="{ item }">
          <div class="p-2">
            <v-img :src="item.photo_url" width="100px" height="auto" @click="selectedItem = item">
              <template v-slot:placeholder>
                <v-row align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-2"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <v-overlay v-if="selectedItem">
              <v-img :src="selectedItem? selectedItem.photo_url :''" contain @click="selectedItem = null"
                     max-height="800" max-width="auto"></v-img>
            </v-overlay>
          </div>
        </template>
      </v-data-table>
    </v-main>
  </div>
</template>
<script>
import router from "../router";

export default {
  data: function () {
    return {
      formTitle: "Add Photo to Gallery",
      // id:0,
      selected: "",
      // tlist: [],
      overlay: false,
      photo_title: "",
      photo_url: "",
      selectedItem: null,
      tour_id: 0,
      input_image: {},
      images_crated: "",
      tour_created: "",
      getGalleryPhotos: [],
      dialog: false,
      dialogDelete: false,
      editedIndex: -1,

      editedItem: {
        id: 0,
        tour_id: 0,
        photo_url: "",
      },

      headers: [
        {
          text: 'ID',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        {text: 'Tour ID', value: 'tour_id'},
        {text: 'Image', value: 'photo_url'},
        {text: 'Actions', value: 'actions', sortable: false},
      ],

      enteredImages: [],
      watch: {
        dialog(val) {
          val || this.close()
        },
        dialogDelete(val) {
          val || this.closeDelete()
        },
        overlay(val) {
          val && setTimeout(() => {
            this.overlay = false
          }, 2000)
        }
      },

      defaultItem: {
        id: 0,
        tour_id: 0,
        photo_url: "",
      },

      rules: {
        required: [value => !!value || "Required."]
      }
    }
    },
  created() {
    this.initialize()
  },
  methods: {
    initialize() {
      this.$http.get('api/public/gallery')
          .then(response => {
            this.getGalleryPhotos = response.data
          })
    },
    deleteItem(item) {

      this.defaultIndex = this.getGalleryPhotos.indexOf(item)
      this.defaultItem = Object.assign({}, item)
      this.$http.delete('api/public/deletegallery/' + item.id)
          .then(() => {
            this.initialize()
          })
    },
    deleteItemConfirm() {

      this.closeDelete()
    },
    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    closeDelete(item) {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    save() {
      this.$http.post('api/addgallery', this.input_image)

          .then(() => {
            this.close()
            this.initialize()

          })
    },
    // getToursList: function () {
    //   this.$http.get('api/public/tourwithphotos')
    //       .then(response => {
    //         this.tlist = response.data
    //         console.log(this.tlist)
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
    // addGallery: function () {
    //   router.push({name: 'Add Gallery', path: '/add-gallery'})
    // },

    logout() {
      localStorage.removeItem('user-token');
      alert("You have been logged out")
      router.push({name: 'Home', path: '/'})
      // location.reload();

    }

  }
}
</script>
<style>
</style>