<template>
  <div id="app">

    <div class="routerlayout" :class="{routerlayout_full:show_full_flag,routerlayout_no_full:show_not_full_flag }" >
      <router-view/>
    </div>
    <div v-show="is_login" class="tablayouy">
      <tab></tab>
    </div>


  </div>


</template>

<script>
  import tab from "./pages/tabbar/tabbar";

  export default {

    name: 'App',
    components: {
      tab
    },
    data() {

      return {
        is_login: true,
        show_full_flag:false ,
        show_not_full_flag:true
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

  .routerlayout {
    width: 100%;
  }
  .routerlayout_no_full{
    height: 92%;
  }
  .routerlayout_full{
    height: 100%;
  }
  .tablayouy{
    height: 8%;
  }
</style>
