import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/page/HelloWorld';
import notficTest from '@/page/notficTest';

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/notficTest',
      name: 'notficTest',
      component: notficTest
    }
  ]
});
