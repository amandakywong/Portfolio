<template>
  <div class="Market_Project">
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
        Market Project
      </p>
      <div class="overview has-text-centered">
        <p class="is-size-4">Project Overview</p>
        <p>
          This project was amongst my first in using frameworks and databases
          and proved to be the most rewarding. As a lover of all kinds of
          markets and inspired by the lack of accessible information about
          various markets around Melbourne, I created the website that could
          fulfill this need. It was a rewarding challenge that taught me how to
          utilise components, routes, databases and API integration. I was able
          to practice my front-end skills in creating responsive, accessible and
          clean user interface whilst also understanding integration to back-end
          programming including database requests and utilising Amazon Web
          Services (AWS) Relational Database Service to reduce security risks.
          <br /><br />
          Interact with web app here:
          <a href="https://melbournemarkets.netlify.app/home"
            >melbournemarkets.netlify.app/home</a
          >
        </p>
      </div>
      <div class="screenshots section">
        <p class="is-size-4">Screenshots</p>
        <div class="columns is-mobile is-multiline">
          <div class="item column is-6 is-clickable">
            <img id="item1" src="../assets/img/MarketProject/home.png" />
          </div>
          <div class="item column is-6 is-clickable">
            <img id="item2" src="../assets/img/MarketProject/filter.png" />
          </div>
          <div class="item column is-6 is-clickable">
            <img id="item3" src="../assets/img/MarketProject/cards.png" />
          </div>
          <div class="item column is-6 is-clickable">
            <img id="item4" src="../assets/img/MarketProject/details.png" />
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
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="javascript"
              width="40"
              height="40"
            />
            <figurecaption>Javascript</figurecaption>
          </figure>
          <figure>
            <img
              src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
              alt="tailwind"
              width="40"
              height="40"
            />
            <figurecaption>Tailwind</figurecaption>
          </figure>
          <figure>
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
              alt="postgresql"
              width="40"
              height="40"
            />
            <figurecaption>PostGreSQL</figurecaption>
          </figure>
          <figure>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
              alt="svelte"
              width="35"
              height="35"
            />
            <figurecaption>Svelte</figurecaption>
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
        <p style="font-weight: bolder">On market list page: <br /></p>
        <p>
          • Display responsive cards for each market for different browser
          sizes<br />
          • Filter list of markets via category and/or location <br /><br />
        </p>
        <p style="font-weight: bolder">On market details page: <br /></p>
        <p>
          • Market details page dynamically loaded via PostGreSQL database
          <br />
          • Image carousel on market details page<br />
          • Integrate Google Maps API for interactive map location
        </p>
      </div>
      <div class="challenges section">
        <p class="is-size-4">Challenges</p>
        <p>
          Navigating the intricacies of asynchronous functions proved
          challenging in developing this web application, particularly when
          fetching data from a database and creating an accessible information
          object. Employing techniques like Promises and async/await syntax, I
          coordinated the creation of the information object, ensuring it relied
          on completed database requests. Overcoming this challenge was a
          valuable learning experience, refining my ability to handle
          asynchronous operations effectively in real-world applications.
        </p>
      </div>
      <div class="lessons section">
        <p class="is-size-4">Lessons Learned</p>
        <p>
          • Employing best practice organising of code files, documenting via
          comments, minimising excessive code by utilising reusable
          components<br />
          • Setting up and fetching neat and accessible data through requests to
          database<br />
          • Deploying a database on AWS to reduce security risk to my personal
          device from external access<br />
          • Utilising dynamic loading through SvelteKit's 'routes' to build a
          cohesive single page application <br />
          • Building user interface with css framework for more concise in-line
          styling<br />
          • Creating filter toggle function and developing underlying logic to
          create an array of filtered data to display and hide particular cards
          depending on user input. <br />
        </p>
      </div>

      <div class="code section">
        <p class="is-size-4">Code Snippets</p>
      </div>
      <div class="improvements section">
        <p class="is-size-4">Future Improvements</p>
        <p>
          • Add additional filter that allows user to search by date. <br />
          • Store data on refresh of market details page, so that reloads
          persist and display the same details previously viewed <br />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "Market_Project",
  components: {
    Navbar,
  },
  mounted() {
    this.zoomFunction();
  },
  methods: {
    zoomFunction() {
      let items = document.querySelectorAll(".item");
      console.log(items);
      items.forEach((item) => {
        item.addEventListener("click", function () {
          this.classList.toggle("active");
          console.log(this);
          items.forEach((item) => {
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
.Market_Project {
  background-color: #19202b;
  height: 540vh;
}
.active {
  width: 100% !important;
  height: auto;
}

.hidden {
  display: none;
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
  padding-left: 12vh;
  padding-right: 12vh;
  @media screen and (max-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
.section {
  padding: 0 1rem 1.5vh 1rem;
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
</style>
