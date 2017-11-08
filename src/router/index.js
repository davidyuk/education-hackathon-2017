import Vue from 'vue';
import Router from 'vue-router';
import MainComponent from '@/components/MainComponent.vue';
import InstitutionalComponent from '@/components/InstitutionalComponent.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: MainComponent,
    },
    {
      path: '/institution',
      name: 'InstitutionalComponent',
      component: InstitutionalComponent,
    },
  ],
});
