<template>
  <v-container>
    <v-app>
      <v-row>
        <v-col>
          <router-link to="/">Home</router-link>
          <router-link to="/contact">Contact</router-link>
        </v-col>
      </v-row>

      <v-main>
        <router-view></router-view>
      </v-main>
    </v-app>
  </v-container>
</template>

<script>
  export default {
    name: "App"
  }
</script>

<style scoped>

</style>