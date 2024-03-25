<template>
  <div class="about">
    <Navbar></Navbar>
    <div class="container">
      <div class="columns">
        <div class="column text is-two-thirds">
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
            Please don't hesitate to reach out if you'd like more details. I am
            excited at the opportunity to connect with like-minded people and
            create impactful solutions together!
          </h1>
          <img id="morethan" src="../assets/img/light.png" />
        </div>
        <div class="column profile-column">
          <img src="../assets/img/profile.png" alt="profile" id="profile" />
        </div>
      </div>
      <div class="columnsabout is-mobile">
        <div class="column content">
          <div class="email-details">
            <span class="email icon"><i class="fa-solid fa-envelope"></i></span>
            <p>amandakywong@gmail.com</p>
          </div>
          <div class="contact-icons">
            <span class="linkedin icon">
              <a href="www.linkedin.com/in/amanda-wong-aw121"
                ><i class="fa-brands fa-linkedin"></i
              ></a>
            </span>
            <span class="github icon">
              <a href="https://github.com/amandakywong">
                <i class="fa-brands fa-square-github"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="contact">
      <Contact></Contact>
    </div> -->
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
// import Contact from "@/components/Contact.vue";
export default {
  name: "AboutView",
  components: {
    Navbar,
    // Contact,
  },
};
</script>
<style scoped>
.about {
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
  height: 45vh;
  @media screen and (max-width: 768px) {
    padding-top: 5vh;
    padding-left: 5vh;
    padding-right: 5vh;
  }
}
.text {
  color: white;
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
/* Contact section */
p {
  color: rgb(216, 216, 216);
  font-size: 2vw;
  font-family: NeueMontreal, sans-serif;
  display: inline-block;
  margin-left: 1rem;
  @media screen and (max-width: 768px) {
    font-size: 3vw;
  }
}
a {
  color: #4a4a4a;
  :hover {
    color: #cbcbcb;
  }
}
.icon {
  font-size: 3rem;
  margin: 1rem;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    margin: 0.5rem;
  }
}

.email-details {
  @media screen and (min-width: 768px) {
    padding-top: 9rem;
  }
  span {
    color: #dcdcdc;
    font-size: 2.5rem;
    margin-right: 2rem;
    @media screen and (max-width: 768px) {
      font-size: 1.25rem;
      margin-right: 1rem;
    }
  }
  p {
    display: inline-block;
    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }
}
.content {
  align-items: center;
}
.reach-out {
  align-self: center;
}
</style>
