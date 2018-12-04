// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '../theme/index.css'
import ElementUI from 'element-ui'
import Vue from 'vue'
import App from './App'
import router from './router'
/*引入资源请求插件*/
import VueResource from 'vue-resource'
import 'lib-flexible/flexible'
/*使用VueResource插件*/
Vue.use(VueResource)
Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.http.interceptors.push((request, next) => {
  next((response) => {
    if (response.body.respcd == 1001) {
      router.replace({
        path: '/login'
      });
      return false
    } else {
      return response
    }
  });
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
