import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Signup from "../views/SignupView.vue";
import LoginView from "../views/HomeView.vue";
import LogoutView from "../views/LogoutView.vue";
import ForgotPassword from "../views/ForgotPassword.vue";


const routes = [
  { path: "/forgot_password", name: "forgot password", component: ForgotPassword },
  { path: "/logout", name: "logout", component: LogoutView },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/login", name: "login", component: LoginView },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
