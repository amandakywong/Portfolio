<template>
  <div class="LIFX_Project">
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
        LIFX Automation Project
      </p>
      <div class="overview has-text-centered">
        <p class="is-size-4">Project Overview</p>
        <p>
          This app I developed with JavaScript automates my LIFX smart lights at
          home to coordinate with sunrise, sunset times and my daily movements.
          I deployed the app on an EC2 instance using Amazon Web Services (AWS)
          to ensure continuous operation on a remote server. Leveraging multiple
          asynchronous functions, the app interfaces with the LIFX API to
          control the smart lights seamlessly.
        </p>
      </div>
      <div class="screenshots section">
        <p class="is-size-4">Screenshots</p>
        <div class="columns is-multiline is-mobile">
          <div class="lifxItem column is-6 is-clickable">
            <p class="imgcap">
              API accessing sunrise and sunset times for today
            </p>
            <img src="../assets/img/LIFX/sun api access.png" />
          </div>
          <div class="lifxItem column is-6 is-clickable">
            <p class="imgcap">Logic for changing light settings at sunset</p>
            <img src="../assets/img/LIFX/Sunset function.png" />
          </div>
          <div class="lifxItem column is-6 is-clickable">
            <p class="imgcap">
              Functions to get current time and reformat into consistent format
            </p>
            <img src="../assets/img/LIFX/Helper function.png" />
          </div>
          <div class="lifxItem column is-6 is-clickable">
            <p class="imgcap">
              Functions to fetch sunrise and sunset data and if matching
              requirements then triggers functions to change light settings.
            </p>
            <img src="../assets/img/LIFX/run functions time interval.png" />
          </div>
        </div>
      </div>
      <div class="tech section">
        <p class="is-size-4">Technologies Used</p>
        <div
          class="tech-icons"
          style="display: flex; width: 20%; justify-content: space-between"
        >
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
          • Synchronising lights to specific locations, brightness and colours
          at sunrise and sunset times<br />
          • Create work and bedtime theme ambiance lighting at defined times of
          the day<br />
          • Deployed on AWS remote server for uninterrupted operation
        </p>
      </div>
      <div class="challenges section">
        <p class="is-size-4">Challenges</p>
        <p>
          I found optimising the code to be most efficient a challenge. Due to
          the continuous nature of the application, it was important to minimise
          memory usage while ensuring the app functionality remained precise.<br />
          Managing multiple asynchronous functions for fetching sunrise and
          sunset times and communicating with the LIFX API required careful
          orchestration to prevent errors and ensure smooth operation. <br />
          Testing the app thoroughly to validate its functionality and
          reliability was also a complex task, considering the diverse scenarios
          involved in controlling smart lights based on dynamic time data.
        </p>
      </div>
      <div class="lessons section">
        <p class="is-size-4">Lessons Learned</p>
        <p>
          • Cloud deployment: Successfully deployed the application on AWS.
          Acquired skills in remote server management, ensuring continuous
          operation.
          <br />
          • Asynchronous programming: Practiced asynchronous techniques for
          continuous functionality. Implementing error handling using try catch
          notation to ensure error logging for effective troubleshooting<br />
          • Modular code development: Utilised modules to enhance readable and
          maintainability. Practiced efficient importing and exporting of data
          and functions across modules, facilitating code reuse.<br />
          • Testing: thorough testing of the application to validate
          functionality using dummy inputs and testing results.<br />
          • API integration: Integrated external APIs into application.
          Successfully interpreting and documentation and syntax.<br />
        </p>
      </div>
      <div class="improvements section">
        <p class="is-size-4">Future Improvements</p>
        <p>
          • Further optimise efficiency of code by using AWS Lambda and Cloud
          Watch rules to run piece of code at a particular time of day rather
          than using a set time interval currently in place. <br />
          • Create front end interface that allows user input to adjust and
          customise settings e.g. time, colour, brightness.
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
      let lifxItems = document.querySelectorAll(".lifxItem");
      console.log(lifxItems);
      lifxItems.forEach((item) => {
        item.addEventListener("click", function () {
          this.classList.toggle("active");
          console.log(this);
          lifxItems.forEach((item) => {
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
.LIFX_Project {
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
