web项目记录

一、安装饿了么插件
1、安装
        命令：npm i element-ui -S

2、main.js 里面引用element
        import ElementUI from 'element-ui';
        import 'element-ui/lib/theme-chalk/index.css';
        Vue.use(ElementUI);


3、设置element主题
    安装命令：npm i element-theme -g
    安装白垩主题：npm i element-theme-chalk -D
    初始化变量文件：et -i
    修改变量：element-variables.scss  ，修改主题颜色，$--color-primary: red;
    调用et编译


4、网路框架vueresource
安装：npm install vue-resource --save-dev
/*引入资源请求插件*/
import VueResource from 'vue-resource'

/*使用VueResource插件*/
Vue.use(VueResource)



二、适配手机
参考链接：https://blog.csdn.net/huangxiaoguo1/article/details/80284484
1、下载lib-flexible
    npm i lib-flexible --save

2、在main.js中引入lib-flexible
    import 'lib-flexible/flexible'

3、查看index.html有没有添加meta标签
