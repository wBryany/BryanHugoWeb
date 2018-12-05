<template>
  <div id="app">
    <router-view/>
</div>

</template>

<script>
  export default {
    name: 'App',
    data() {

      return {
        is_login: false
      }
    },
    methods: {
      login_state: function () {
        this.is_login = false;

      },
    }
  }
</script>

<style>
  @import "./common/common.less";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  html, body, #app {
    height: 100%;
    margin: 0;
    padding: 0;
  }



</style>
