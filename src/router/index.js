import Vue from 'vue';
import Router from 'vue-router';
import StudentDetails from '../components/StudentDetails';
import NewSkill from '../components/NewSkill';
import EIManagement from '../components/EIManagement';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'student-details', component: StudentDetails },
    { path: '/new-skill', name: 'new-skill', component: NewSkill },
    { path: '/ei-management', name: 'ei-management', component: EIManagement },
  ],
});
