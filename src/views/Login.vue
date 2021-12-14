<template>
  <div>
    <v-main>
      <v-container>
    <h1>ADMIN LOG IN PAGE</h1>
    <v-row>
      <v-col md="2" xs="12" >
        <v-text-field v-model="user.userName" label="Username"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="2" xs="12" >
        <v-text-field type="password" v-model="user.password" label="Password"></v-text-field>
      </v-col>
    </v-row>
    <row>
      <v-col md="1" xs="12">
        <v-btn depressed v-on:click="login()"> Log in</v-btn>
      </v-col>
      <v-col md="1" xs="12">
      <v-btn depressed v-on:click="logout()">Log out</v-btn>
      </v-col>
    </row>
      </v-container>
    </v-main>
  </div>
</template>
<script>
import router from "../router";
export default {
  data: () => ({
    user: {},
    token: "",
    userName:"",
    password:"",
  }),
  methods: {
    login() {
      this.$http.post('api/public/login', this.user)
          .then(result => {
            localStorage.setItem('user-token', result.data)
            this.$http.defaults.headers.common['Authorization'] = "Bearer" + this.token
            // router.push({name: 'Admin'})
          });

    }

  }
};
</script>
<style>

</style>