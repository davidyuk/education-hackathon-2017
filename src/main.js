// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { Button, Select, Row, Col, Table, Form, FormItem, Input, TableColumn, Option, Switch } from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Select);
Vue.use(Row);
Vue.use(Col);
Vue.use(Table);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(TableColumn);
Vue.use(Option);
Vue.use(Switch);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
