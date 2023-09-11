import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CompanyView from '../views/Company/CompanyView.vue'
import CreateCompanyView from '../views/Company/CreateCompanyView.vue'
import EditCompanyView from '../views/Company/EditCompanyView.vue'
import EmployeeView from '../views/Employee/EmployeeView.vue'
import CreateEmployeeView from '../views/Employee/CreateEmployeeView.vue'
import EditEmployeeView from '../views/Employee/EditEmployeeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/company',
      name: 'company',
      component: CompanyView
    },
    {
      path: '/company/create',
      name: 'createCompany',
      component: CreateCompanyView
    },
    {
      path: '/company/:id/edit',
      name: 'editCompany',
      component: EditCompanyView
    },
    {
      path: '/employee',
      name: 'employee',
      component: EmployeeView
    },
    {
      path: '/employee/create',
      name: 'employeeCreate',
      component: CreateEmployeeView
    },
    {
      path: '/employee/:id/edit',
      name: 'employeeEdit',
      component: EditEmployeeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
