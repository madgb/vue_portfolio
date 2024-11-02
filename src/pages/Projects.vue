<!-- src/pages/Projects.vue -->
<template>
  <div class="p-6">
    <h2 class="text-3xl font-semibold mb-4">Projects</h2>
    <div v-for="project in projects" :key="project.id" class="mb-4">
      <router-link
        :to="`/projects/${project.id}`"
        class="text-blue-500 underline"
      >
        <h3 class="text-2xl">{{ project.name }}</h3>
      </router-link>
      <p>{{ project.description }}</p>
    </div>
  </div>
</template>
  
  <script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const projects = computed(() => Object.values(store.state.projects))
    return { projects }
  },
}
</script>
  