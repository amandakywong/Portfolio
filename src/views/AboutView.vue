<template>
  <div class="about">
    <Navbar></Navbar>
    <div class="container">
      <div class="columns">
        <div class="column is-two-thirds">
          <h1 class="is-size-7-mobile">
            Hello! I'm Amanda, an aspiring developer with a background in
            pharmacy and public health, now transitioning into healthcare
            technology. My goal is to leverage my skills to drive innovation and
            efficiency in healthcare.<br /><br />
            I am highly motivated and self-driven and thrive in dynamic
            environments where I can build on my soft and hard skills. I
            strongly believe in working with passionate individuals and teams
            that tackle challenges with a diverse set of minds.
            <br /><br />
            I am dedicated to continually expanding my skills and knowledge via
            a wide range of projects and staying curious about everything!
            <br /><br />
            I am excited at the opportunity to connect with like-minded people
            and create impactful solutions together!
            <br /><br />
            Find my contact details below
          </h1>
          <img id="morethan" src="../assets/img/light.png" />
        </div>
        <div class="column profile-column">
          <img src="../assets/img/profile.png" alt="profile" id="profile" />
        </div>
      </div>
    </div>
    <div class="contact">
      <Contact></Contact>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Contact from "@/components/Contact.vue";
export default {
  name: "AboutView",
  components: {
    Navbar,
    Contact,
  },
};
</script>
<style scoped>
.about {
  background-image: url(../assets/img/bg-about.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 110vh;
}
.container {
  padding-top: 10vh;
  padding-left: 10vh;
  padding-right: 10vh;
  height: 95vh;
  color: white;
  @media screen and (max-width: 768px) {
    padding-top: 5vh;
    padding-left: 5vh;
    padding-right: 5vh;
  }
}
#profile {
  display: flex;
  height: auto;
  width: auto;
  padding-top: 20vh;
  filter: drop-shadow(5px 0px 12px #bf6d49);
  @media (max-width: 768px) {
    height: 29vh;
    margin-left: 20vh;
    padding-top: 0vh;
  }
}
.profile-column {
  @media screen and (max-width: 768px) {
    margin-top: -10vh;
  }
}
#morethan {
  width: 6vh;
}
</style>
