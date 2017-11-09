import Vue from 'vue';
import Router from 'vue-router';
import MainComponent from '@/components/MainComponent';
import InstitutionalComponent from '@/components/InstitutionalComponent';
import AdminComponent from '@/components/AdminComponent';
import AddInstitutionComponent from '@/components/AddInstitutionComponent';


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
