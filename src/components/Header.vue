<!-- src/components/Header.vue -->
<template>
  <header class="bg-gray-800 text-white p-4">
    <nav class="flex justify-between items-center max-w-4xl mx-auto">
      <h1 class="text-2xl font-semibold">Woobin Huh's Portfolio</h1>
      <ul class="flex space-x-4">
        <li>
          <router-link to="/vue_portfolio/" class="hover:text-gray-300">Home</router-link>
        </li>
        <li>
          <router-link to="/vue_portfolio/projects" class="hover:text-gray-300"
            >Projects</router-link
          >
        </li>
        <li>
          <router-link to="/vue_portfolio/tech-stack" class="hover:text-gray-300"
            >Tech Stack</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>
  
  <script>
export default {
  name: 'Header',
}
</script>
  