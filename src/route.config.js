import index from './pages/index/index.vue';
import pay from './pages/pay/pay.vue';
import form from './pages/form/form.vue';
export default [
  {
    path: '/',
    component: index
  }, {
    path: '/pay_url',
    component: pay
  }, {
    path: '/from_url',
    component: form
  }


]
