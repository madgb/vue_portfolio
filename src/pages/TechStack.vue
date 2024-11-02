<!-- src/pages/TechStack.vue -->
<template>
  <div class="p-6">
    <h2 class="text-3xl font-semibold mb-4">Current Tech Stack</h2>
    <ul class="space-y-4">
      <li>
        <h3 class="text-2xl font-semibold">Vue 3</h3>
        <p>
          Vue 3 is the main framework for this portfolio, allowing for a
          modular, component-based structure. It provides reactivity and
          flexibility, making development smooth and scalable.
        </p>
      </li>
      <li>
        <h3 class="text-2xl font-semibold">Vuex</h3>
        <p>
          Used for state management, Vuex centralizes and simplifies the
          management of global state across the application, especially in
          handling project data. It provides a reliable structure for state
          mutations and actions, making it easier to maintain complex state
          dependencies throughout the app.
        </p>
      </li>
      <li>
        <h3 class="text-2xl font-semibold">TailwindCSS</h3>
        <p>
          TailwindCSS offers a utility-first approach to styling, allowing rapid
          and responsive UI development without writing custom CSS. This setup
          keeps the styling consistent and easy to maintain.
        </p>
      </li>
      <li>
        <h3 class="text-2xl font-semibold">Vue Router</h3>
        <p>
          Vue Router provides seamless navigation within the application,
          handling routes like Home, Projects, and Project Details. This enables
          a single-page application (SPA) experience with dynamic content
          loading.
        </p>
      </li>
      <li>
        <h3 class="text-2xl font-semibold">GitHub Pages</h3>
        <p>
          The site is deployed on GitHub Pages for a fast, reliable, and free
          hosting solution for static sites.
        </p>
      </li>
    </ul>
  </div>
</template>
  
  <script>
export default {
  name: 'TechStack',
}
</script>
  
  <style scoped>
/* Optional styling for the Tech Stack page */
</style>
  