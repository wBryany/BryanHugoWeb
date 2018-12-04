<template>

  <div>

    <el-header class="heder_layout">头</el-header>
    <el-main class="main_layout">内容</el-main>
    <el-footer class="footer_layout">尾</el-footer>
  </div>

</template>

<script>
  import 'lib-flexible'
  export default {

    name: "index"
  }
</script>

<style scoped>
.heder_layout{
  background-color: red;

}
.main_layout{
  background-color: #409eff;

}
.footer_layout{
  background-color: yellow;

}
</style>
