<!--
 * @Description: 
 * @Autor: Leon
 * @Date: 2020-02-07 00:09:45
 * @LastEditors  : Leon
 * @LastEditTime : 2020-02-08 14:23:06
 -->
<template>
  <div id="app">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/test">About</router-link> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
