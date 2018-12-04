<template>
  <div id="app">
    <!--<router-view/>-->

    <div class="div_layout">

      <ul>
        <li class="li1">
          <img src="./assets/collect_icon.png">
          <span>主页</span>
        </li>
        <li class="li2">
          <img src="./assets/msg_icon.png">
          <span>主页</span>
        </li>
        <li class="li3">
          <img src="./assets/trans_icon.png">
          <span>主页</span>
        </li>
        <li class="li4">
          <img src="./assets/mine_icon.png">
          <span>主页</span>
        </li>
      </ul>
    </div>
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
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  html, body, #app {
    height: 100%;
  }

  .div_layout {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: white;
    border-top: 1px solid lightgrey;
  }

  .li1 {
    height: 100px;
    float: left;
    width: 25%;
    text-align: center;
    padding: 8px 0;
  }

  .li2 {
    height: 100px;
    float: left;
    width: 25%;
    text-align: center;

  }

  .li3 {
    height: 100px;
    float: left;
    width: 25%;
    text-align: center;
  }

  .li4 {
    height: 100px;
    float: left;
    width: 25%;
    text-align: center;
  }

  ul {
    list-style: none;
    width: 100%;
  }
  span{
    display: block;
    width: 100%;
    text-align: center;
    line-height: 40px;
    font-size: 24px;
  }
  img{
    width: 44px;
    height: 44px;
  }

</style>
