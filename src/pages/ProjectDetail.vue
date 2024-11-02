<!-- src/pages/ProjectDetail.vue -->
<template>
  <div class="p-6">
    <h2 class="text-2xl font-semibold mb-4">{{ project.name }}</h2>
    <p class="mb-2"><strong>Description:</strong> {{ project.description }}</p>
    <p class="mb-2"><strong>Tech Stack:</strong> {{ project.stack }}</p>
  </div>
</template>
  
  <script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const project = computed(() => store.state.selectedProject)
    return { project }
  },
  created() {
    this.$store.dispatch('fetchProject', this.$route.params.id)
  },
}
</script>
  