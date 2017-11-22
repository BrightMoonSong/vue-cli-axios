// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import '@/api/interceptors.js';
import BaiduMap from 'vue-baidu-map';

import Kiko from 'kiko-rascalhao';
// import iView from 'iview';
// import 'iview/dist/styles/iview.css';

Vue.use(Kiko);
// Vue.use(iView);
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'L0EcRkZ9YBaGTOH5X1mpQqC7SVvDhmKL'
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
