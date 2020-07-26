import Vue from 'vue'
import VueRouter from 'vue-router'
import Forum from '../views/Forum.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Exit from '../views/Exit.vue'
import User from '../views/UserCenter.vue'

Vue.use(VueRouter)

const routes = [
  {path: "/", name: "home", component: Home},
  {path: "/forum", name: "forum", component: Forum},
  {path: "/login", name: "login", component: Login},
  {path: "/register", name: "register", component: Register},
  {path: "/exit", name: "exit", component: Exit},
  {path: "/user", name: "user", component: User}
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
