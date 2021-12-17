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
<!--            <v-btn depressed v-on:click="logout()">-->
<!--              Logout-->
<!--            </v-btn>-->
<!--          </v-col>-->
<!--          <v-col md="1" xs="12"></v-col>-->
<!--          <v-col md="1" xs="12">-->
<!--            <v-btn depressed v-on:click="guideList()">-->
<!--              Guide List-->
<!--            </v-btn>-->
<!--          </v-col>-->
<!--        </v-row>-->
<!--      </v-container>-->
      <v-container>
        <v-data-table
            :headers="headers"
            :items="tours"
            :expanded.sync="expanded"
            show-expand
            sort-by="id"
            class="elevation-3"
        >
          <template v-slot:top>
            <v-toolbar
                flat
            >
              <v-toolbar-title>Tour List</v-toolbar-title>
              <v-divider
                  class="mx-10"
                  inset
                  vertical
              ></v-divider>
              <v-spacer></v-spacer>
              <!--              <v-switch-->
              <!--                  v-model="singleExpand"-->
              <!--                  label="Single expand"-->
              <!--                  class="mt-2"-->
              <!--              ></v-switch>-->
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
                      v-on:click="addTour()"
                  >
                    New Item
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
                            md="4"
                        >
                          <v-text-field
                              v-model="editedItem.name"
                              label="Title"
                          ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                          <v-text-field
                              v-model="editedItem.calories"
                              label="Calories"
                          ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                          <v-text-field
                              v-model="editedItem.fat"
                              label="Fat (g)"
                          ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                          <v-text-field
                              v-model="editedItem.carbs"
                              label="Carbs (g)"
                          ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                          <v-text-field
                              v-model="editedItem.protein"
                              label="Protein (g)"
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
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
              {{ item.desc_long }}
            </td>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon
                class="ml-3"
                small
                @click="editItem(item.id)"
            >
              mdi-pencil
            </v-icon>
            <v-icon
                @click="deleteItem(item.id)"
            >
              mdi-delete
            </v-icon>
            <v-icon
                class="mr-3"
                @click="addGallery(item.id)"
            >
              mdi-file-image-outline
            </v-icon>
          </template>
        </v-data-table>
      </v-container>
    </v-main>
  </div>
</template>
<script>
import router from "../router";

export default {
  data: function () {
    return {
      expanded: [],
      // singleExpand: false,
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'ID',
          align: 'start',
          value: 'id',
        },
        {text: 'Tour Title', value: 'title'},
        {text: 'Short Desc.', value: 'desc_short', sortable: false},
        {text: 'Long Desc.', value: 'long_text', sortable: false},
        {text: '', value: 'data-table-expand'},
        {text: 'Duration', value: 'duration'},
        {text: 'City', value: 'city'},
        {text: 'Actions', value: 'actions', sortable: false},

      ],
      tours: [],
      editedIndex: -1,
      editedItem: {
        id: 0,
        title: "",
        desc_short: "",
        desc_long: "",
        duration: "",
        city: 0,
        long_text: "Show more"
      },
      defaultItem: {
        id: 0,
        title: "",
        desc_short: "",
        desc_long: "",
        duration: "",
        city: 0,
        long_text:"Show more"
      }
    }
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },

  created() {
    this.initialize()
  },


  methods: {

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
    initialize() {
      this.$http.get('/api/public/tourlist')
          .then(response => {
            this.tours = response.data
          })

      // this.tours = []
    },

    editItem (item) {
      this.defaultIndex = this.tours.indexOf(item)
      this.defaultItem = Object.assign({}, item)
      this.dialog = true
      router.push({name: 'Edit Tour', params: {id: item}})
    },

    deleteItem (item) {
      this.defaultItem = this.tours.indexOf(item)
      this.defaultItem = Object.assign({}, item)
      this.$http.delete('/api/deletetour/' + item)
          .then(() => {
            this.initialize()
          })


    },

    deleteItemConfirm (item) {


      this.tours.splice(this.editedIndex, 1)
      this.closeDelete()


    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.tours[this.editedIndex], this.editedItem)
      } else {
        this.tours.push(this.editedItem)
      }
      this.close()
    },
  logout(){
    localStorage.removeItem('user-token');
    alert("You have been logged out")
    router.push({name: 'Home', path: '/'})

  },
    addGallery(){
      router.push({name: 'Add Gallery', path: '/add-gallery'})
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