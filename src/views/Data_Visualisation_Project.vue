<template>
  <div class="Data_Project">
    <Navbar></Navbar>
    <div class="container">
      <!-- Back button -->
      <div style="padding-top: 3rem; margin-left: -2rem; padding-left: 1rem">
        <router-link to="/projectsView" class="backbutton">
          <img style="width: 4%; min-width: 2rem" src="../assets/img/back.png"
        /></router-link>
      </div>
      <p
        class="is-size-3 has-text-centered pb-6"
        style="font-family: NeueMontrealRegular"
      >
        Data Visualisation Project
      </p>
      <div class="overview has-text-centered">
        <p class="is-size-4">Project Overview</p>
        <p>
          This collaborative project focuses on developing a web application for
          users to explore financial data and trends. At the core is a dynamic
          dashboard that provides visual representations through interactive
          charts, allowing users to explore an extensive database of
          information. While a work in progress, we are dedicated to
          implementing numerous features in the coming months to enhance the
          application’s functionality.
        </p>
      </div>
      <div class="screenshots section">
        <p class="is-size-4">Screenshots</p>
        <div class="columns is-multiline is-mobile">
          <div class="screenshotItem column is-6 is-clickable">
            <p class="imgcap">Dashboard</p>
            <img src="../assets/img/Data_Visualisation/dashboard.png" />
          </div>
          <div class="screenshotItem column is-6 is-clickable">
            <p class="imgcap">Articles Page</p>
            <img src="../assets/img/Data_Visualisation/articles.png" />
          </div>
        </div>
      </div>
      <div class="code section">
        <p class="is-size-4">Code Snippets</p>
        <div class="columns is-multiline is-mobile">
          <div class="codeItem column is-6 is-clickable">
            <p class="imgcap pt-5">Fetch data from database</p>
            <img src="../assets/img/Data_Visualisation/fetchdata.png" />
          </div>
          <div class="codeItem column is-6 is-clickable">
            <p class="imgcap pt-5">Render chart via accessing object values</p>
            <img src="../assets/img/Data_Visualisation/renderchart.png" />
          </div>
        </div>
      </div>
      <div class="tech section">
        <p class="is-size-4">Technologies Used</p>
        <div
          class="tech-icons"
          style="display: flex; width: 80%; justify-content: space-around"
        >
          <figure>
            <img
              src="https://cdn.worldvectorlogo.com/logos/django.svg"
              alt="django"
              width="30"
              height="30"
            />
            <figurecaption>Django</figurecaption>
          </figure>
          <figure>
            <img
              src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
              alt="bootstrap"
              width="40"
              height="40"
            />
            <figurecaption>Bootstrap</figurecaption>
          </figure>
          <figure>
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
              alt="python"
              width="40"
              height="40"
            />
            <figurecaption>Python</figurecaption>
          </figure>
          <figure>
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="javascript"
              width="40"
              height="40"
            />
            <figurecaption>Javascript</figurecaption>
          </figure>
          <figure style="padding-left: 1rem">
            <img
              src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
              alt="git"
              width="40"
              height="40"
            />
            <figurecaption>Git</figurecaption>
          </figure>
        </div>
        <p>
          <!-- Can add information about technologies used -->
        </p>
      </div>
      <div class="features section">
        <p class="is-size-4">Features</p>
        <p>
          • Comprehensive dashboard to give insights into financial data over
          time<br />
          • Dynamic, interactive charts that retrieve data from database<br />
          • Customisable dark and light themes that persist user choice across
          sessions
        </p>
      </div>
      <div class="challenges section">
        <p class="is-size-4">Challenges</p>
        <p>
          • Navigating complexities of concurrent development with collaborator
          through git merges and branches.<br />
          Deciphering and refactoring existing code to optimise efficiency and
          reduce redundant code. <br />
        </p>
      </div>
      <div class="lessons section">
        <p class="is-size-4">Lessons Learned</p>
        <p>
          • Working as a team with project collaborator enhanced my
          communication and teamwork skills. Frequently summarising my work and
          asking for feedback helped me gain confidence in my work and honed my
          ability to implement continuous improvement practices based on
          feedback.
          <br />
          • Working through a larger existing codebase helped me develop a keen
          eye for optimisation, discerning patterns and leveraging object data
          to streamline operations and enhance maintainability. <br />
          • Developing a methodical approach to tackle problems by breaking them
          down into manageable tasks and refining solutions.<br />
        </p>
      </div>
      <div class="improvements section">
        <p class="is-size-4">Future Improvements</p>
        <p>
          We are envisioning several enhancements to the web app to improve
          functionality and usability. We aim to curate an array of resources
          from market analyses to trading strategies to be accessible by users
          through a user-friendly interface. I imagine this to be somewhat of a
          rewarding challenge to organise a large amount of dense content in a
          readable way.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "LIFX_Project",
  components: {
    Navbar,
  },
  mounted() {
    this.zoomFunction();
  },
  methods: {
    zoomFunction() {
      let codeItems = document.querySelectorAll(".codeItem");

      codeItems.forEach((item) => {
        item.addEventListener("click", function () {
          this.classList.toggle("active");

          codeItems.forEach((item) => {
            if (item !== this) {
              item.classList.toggle("hidden");
            }
          });
        });
      });
      let screenshotItems = document.querySelectorAll(".screenshotItem");
      screenshotItems.forEach((item) => {
        item.addEventListener("click", function () {
          this.classList.toggle("active");

          screenshotItems.forEach((item) => {
            if (item !== this) {
              item.classList.toggle("hidden");
            }
          });
        });
      });
    },
  },
};
</script>
<style scoped>
.Data_Project {
  background-color: #19202b;
  height: 100%;
}
p {
  font-family: NeueMontreal, sans-serif;
  color: whitesmoke;
  margin: 1vw;
  font-size: 1.3rem;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    margin: 0;
  }
}
.container {
  padding-left: 10vh;
  padding-right: 10vh;
  @media screen and (max-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
.section {
  padding: 0 2rem 1.5vh 2rem;
  @media screen and (max-width: 768px) {
    padding: 0 1rem 1.5vh 1rem;
  }
}
.active {
  width: 100% !important;
  height: auto;
}

.hidden {
  display: none;
}
.is-size-4 {
  font-weight: bold;
  margin: 2vh;
  padding-top: 3rem;
  @media screen and (max-width: 768px) {
    margin: 1rem;
  }
}
figurecaption {
  display: flex;
  flex-direction: row;
  margin: 2vh;
  font-size: 0.8rem;
  color: whitesmoke;
}
figure {
  display: block;
}
.tech-icons img {
  display: block;
  margin: auto;
}
.tech-icons {
  @media screen and (max-width: 768px) {
    margin: auto;
  }
}
.columns {
  margin-left: -6vw;
  margin-right: -6vw;
}
.imgcap {
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(180, 178, 178);
}
</style>
