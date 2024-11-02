// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Projects from '../pages/Projects.vue'
import ProjectDetail from '../pages/ProjectDetail.vue'
import TechStack from '@/pages/TechStack.vue'

const routes = [
  {
    path: '/vue_portfolio',
    name: 'Home',
    component: Home,
  },
  {
    path: '/vue_portfolio/projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/vue_portfolio/projects/:id',
    name: 'ProjectDetail',
    component: ProjectDetail,
    props: true,
  },
  {
    path: '/vue_portfolio/tech-stack',
    name: 'TechStack',
    component: TechStack,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
})

export default router
