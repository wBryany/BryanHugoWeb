<template>
  <div class="div_layout">
    <ul>
      <li v-on:click="tochangepage(main_page)">
        <img src="../../assets/collect_icon.png">
        <span>主页</span>
      </li>
      <li v-on:click="tochangepage(ls_page)">
        <img src="../../assets/msg_icon.png">
        <span>流水</span>
      </li>
      <li v-on:click="tochangepage(zd_page)">
        <img src="../../assets/trans_icon.png">
        <span>账单</span>
      </li>
      <li v-on:click="tochangepage(mine_page)">
        <img src="../../assets/mine_icon.png">
        <span>我的</span>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
      name: "tabbar",

      data(){
        return{
          main_page:"main_page",
          ls_page:"ls_page",
          zd_page:"zd_page",
          mine_page:"mine_page",
        }

      },


      methods:{
        tochangepage:function (pagename) {
          console.log(pagename);
         // alert(pagename);

          if(pagename==this.main_page){
            this.$router.replace({
              path: '/mainpage'
            });
          }else if(pagename==this.ls_page){
            this.$router.replace({
              path: '/liushui'
            });

          }else if(pagename==this.zd_page){
            this.$router.replace({
              path: '/zhangdan'
            });
          }else if(pagename==this.mine_page){
            this.$router.replace({
              path: '/mine'
            });
          }
        }
      }
    }
</script>

<style scoped>
  .div_layout {
    bottom: 0;
    width: 100%;
    position: absolute;
    border-top: 1px solid lightgrey;
  }

  ul {
    height: 100%;
    width: 100%;
    list-style: none;
  }

  li {

    width: 25%;
    float: left;
    text-align: center;
    position: relative;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  img {
    width: 44px;
    height: 44px;
  }

  span {
    display: block;
    text-align: center;
  }
</style>
