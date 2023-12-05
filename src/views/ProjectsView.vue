<template>
  <div class="projects">
    <Navbar></Navbar>
    <Showcase></Showcase>
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
  background-color: #191f2c;
  height: 190vh;
}
</style>
