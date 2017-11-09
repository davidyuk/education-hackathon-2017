import Vue from 'vue';
import Router from 'vue-router';
import MainComponent from '@/components/MainComponent.vue';
import InstitutionalComponent from '@/components/InstitutionalComponent.vue';
import AdminComponent from '@/components/AdminComponent.vue';
import AddInstitutionComponent from '@/components/AddInstitutionComponent.vue';


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
    {
      path: '/admin',
      name: 'AdminComponent',
      component: AdminComponent,
    },
    {
      path: '/add_institution',
      name: 'AddInstitutionComponent',
      component: AddInstitutionComponent,
    },
  ],
});
