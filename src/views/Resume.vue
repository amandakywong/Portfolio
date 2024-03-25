<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "resume",
  components: {
    Navbar,
  },
};
</script>

<template>
  <div class="resume">
    <Navbar />
    <div class="container">
      <img src="../assets/img/Generic tech.png" />
    </div>
  </div>
</template>

<style scoped>
.resume {
  background-image: url(../assets/img/bg-about.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 120vh;
}
.container {
  padding-top: 10vh;
  padding-left: 10vh;
  padding-right: 10vh;
  @media screen and (max-width: 768px) {
    padding-top: 5vh;
    padding-left: 5vh;
    padding-right: 5vh;
  }
}
img {
  width: 80%;
  height: auto;
  margin: auto;
  display: block;
}
</style>
