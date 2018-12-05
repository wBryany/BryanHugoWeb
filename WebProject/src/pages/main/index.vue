<template>

  <div>

    main
    <el-button v-on:click="test">点我
    </el-button>
  </div>

</template>

<script>
  import bridge from '../../jsbridge/bridge-v2'

  export default {

    name: "index",
    components: {},
    methods: {
      test: function () {
        // alert("hello");

        bridge.openUri({
          uri:"http://192.168.0.141:8080/#/mine"
        },function (cb) {
          console.log(cb)
        })
      }
    }
  }
</script>
<style scoped>

</style>
