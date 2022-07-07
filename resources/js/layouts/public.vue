<template>
  <v-app class="layout-bg">
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: "PublicLayout"
  };
</script>

<style scoped>
  .layout-bg {
    background: #eff3ff;
  }
</style>