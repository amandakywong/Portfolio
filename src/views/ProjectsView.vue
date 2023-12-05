<template>
  <div class="projects">
    <Navbar></Navbar>
    <div class="container">
      <p>This is the Projects view</p>
      <Showcase></Showcase>
    </div>
  </div>
</template>

<script>
import Showcase from "@/components/Showcase.vue";
import Navbar from "@/components/Navbar.vue";
export default {
  name: "ProjectsView",
  components: {
    Showcase,
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
.projects {
  background-color: #0c0d0f;
  height: 100vh;
}
.container {
  padding: 10vh;
}
</style>
