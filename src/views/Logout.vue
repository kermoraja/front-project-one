<template>
  <div class="about">

  </div>
</template>
<script>
import router from "../router";

export default {
  data: function () {
    return {
      token: ""

          }
    },
  mounted: function () {
    localStorage.removeItem('user-token');
    alert("You have been logged out")
    router.push({name: 'Home', path: '/'})
    location.reload()
      }
    }

</script>
