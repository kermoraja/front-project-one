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
                    v-model="title"
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
                <v-text-field v-model="desc_short" :rules="rules" label="Short Description"></v-text-field>
              </v-col>
            </v-row>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12 md3>
            <v-row>
              <v-col>
                <v-text-field v-model="duration" :rules="rules" label="Duration"></v-text-field>
              </v-col>
            </v-row>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12 md3>
            <v-row>
              <v-col>
                <v-text-field v-model="desc_short" :rules="rules" label="City"></v-text-field>
              </v-col>
            </v-row>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12 md3>
            <v-row>
              <v-col>
                <v-text-field v-model="img_url" :rules="rules" label="Images"></v-text-field>
              </v-col>
            </v-row>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs15 md1>
            <v-row justify="space-around">
              <v-col>
                <v-btn depressed>
                  Sumbit
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
export default {
  data: () => ({
    rules: [
      value => !!value || 'Required.',
      value => (value && value.length >= 3) || 'Min 3 characters',
    ],
    alignments: [
      'center',
    ],
  }),

}
</script>
<style>
/*div {*/
/*  display: flex;*/
/*  justify-content: center*/
/*}*/
</style>