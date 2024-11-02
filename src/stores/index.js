// src/store/index.js
import { createStore } from 'vuex'

export default createStore({
  state: {
    projects: {
      1: {
        id: 1,
        name: 'PG&E Real-Time Electricity Status',
        description:
          'A web app for real-time electricity status updates, improving communication during emergencies.',
        stack: 'Vue 3, Pinia, TailwindCSS, RESTful API',
      },
      2: {
        id: 2,
        name: 'Music Deployment Platform',
        description:
          'An automated music release platform with real-time approval, boosting deployment efficiency.',
        stack: 'Vue 3, TailwindCSS, Vuex, Node.js, AWS',
      },
    },
    selectedProject: {},
  },
  mutations: {
    SET_PROJECT(state, project) {
      state.selectedProject = project
    },
  },
  actions: {
    fetchProject({ commit, state }, projectId) {
      const project = state.projects[projectId]
      commit('SET_PROJECT', project)
    },
  },
})
