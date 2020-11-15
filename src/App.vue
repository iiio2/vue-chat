<template>
  <div id="app">
    <div class="container">
      <h2 class="text-center">Vue Chat</h2>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
