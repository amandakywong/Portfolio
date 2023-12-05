<template>
  <div class="home">
    <Navbar />
    <HelloWorld />
  </div>
  <div class="rotatingcontainer">
    <img class="rotate" src="../assets/img/rotatingelement.png" />
  </div>
  <div class="contact">
    <Contact></Contact>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Navbar from "@/components/Navbar.vue";
import Contact from "@/components/Contact.vue";
export default {
  name: "HomeView",
  components: {
    HelloWorld,
    Navbar,
    Contact,
  },
};
</script>

<style scoped>
.home {
  background-image: url(../assets/img/background.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
}
.rotatingcontainer {
  margin: auto;
  width: 100%;
  position: absolute;
  top: 100vh;
  z-index: 1;
}
.rotate {
  width: 80px;
  margin-top: -40px;
  margin-left: -40px;
  left: 50%;
  position: absolute;
  animation: rotation 4s infinite linear;

  @media screen and (max-width: 768px) {
    width: 40px;
    margin-top: -20px;
    margin-left: -20px;
  }
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
