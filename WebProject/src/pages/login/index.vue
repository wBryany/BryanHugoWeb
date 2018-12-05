<template>

  <div class="main_login">

    <div class="login_layout">

      <el-input v-model="login_name" class="input_style_username" placeholder="请输入用户名"></el-input>

      <el-input v-model="login_pwd" class="input_style_pwd" placeholder="请输入密码"></el-input>

      <br/>
      <el-button class="login_btn" v-on:click="tologin">登录</el-button>

    </div>
  </div>

</template>

<script>
  import bridge from '../../jsbridge/bridge-v2'
  export default {
    name: "index",
    data() {
      return {
        login_name: "",
        login_pwd: "",
        login_url:"http://192.168.0.192:8080/LoginServlet",
      }
    },
    created(){

    },
    methods: {
      tologin () {
        console.log("login_name:" + this.login_name);
        console.log("login_pwd:" + this.login_pwd);
        this.jumptomainpage();
        // this.$http.get(this.login_url,"asdfas", {
        //   before: function() {
        //     console.log("before:");
        //   }
        // })
        //   .then(function(response) {
        //     console.log("then:");
        //
        //     let data_return = response.body;
        //     if (data_return.respcd == '0000') {
        //       alert("登录成功");
        //
        //       this.jumptomainpage();
        //     }else {
        //       alert("登录失败");
        //     }
        //
        //
        //
        //   }, function(response) {
        //     console.log("function:");
        //   })
        //   .catch(function(response) {
        //     console.log("catch:");
        //   });
        //



      },

      jumptomainpage:function () {
        this.$router.replace({
          path: '/mainpage'
        });

      }
    }
  }
</script>

<style scoped>

  .main_login {
    width: 100%;
    height: 100%;
    background-color: #409eff;
  }

  .login_layout {
    width: 480px;
    height: 300px;
    background-color: #85ce61;
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 16px;
  }

  .input_style_username {
    margin-top: 48px;
    width: 80%;
  }

  .input_style_pwd {
    margin-top: 32px;
    width: 80%;
  }

  .login_btn {
    margin-top: 48px;
  }
</style>
