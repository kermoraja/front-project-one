<template>
  <div>
    <v-main>
      <v-container>
        <v-row
            :align="align"
            no-gutters
            style="height: 150px;"
        >
          <v-text-field
              label="Tour Title"
              :rules="rules"
              hide-details="auto"
              v-model="title"
          ></v-text-field>
          <v-text-field v-model="desc_long" :rules="rules" label="Long Description"></v-text-field>
          <v-text-field v-model="desc_short" :rules="rules" label="Short Description"></v-text-field>
          <v-text-field v-model="duration"  :rules="rules" label="Duration"></v-text-field>
          <v-text-field v-model="city"  :rules="rules" label="City"></v-text-field>
        </v-row>



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
  }),

}
</script>
<style>
div{
  display: flex;
  justify-content: center
}
</style>