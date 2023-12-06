<template>
  <div class="Market_Project">
    <Navbar></Navbar>
    <div class="container">
      <!-- <nav class="breadcrumb" aria-label="breadcrumb">
        <ul>
          <li>
            <router-link to="/ProjectsView" style="color: #9ddcfd"
              >Projects</router-link
            >
          </li>
          <li class="is-active">
            <router-link to="">Market Project</router-link>
          </li>
        </ul>
      </nav> -->
      <p
        class="is-size-3 has-text-centered pb-6"
        style="font-family: NeueMontrealRegular"
      >
        Market Project
      </p>
      <div class="overview has-text-centered">
        <p class="is-size-4">Project Overview</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
          numquam soluta dolor repellendus incidunt omnis! Ut cupiditate
          inventore blanditiis beatae minus voluptas optio sunt unde facere.
          Perferendis labore iusto atque at excepturi nostrum sint sapiente
          saepe voluptas, distinctio, porro cupiditate non suscipit asperiores
          cumque iste rerum deserunt eligendi optio eveniet.
        </p>
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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis,
          ipsum!
        </p>
      </div>
      <div class="features section">
        <p class="is-size-4">Features</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          natus est earum cum consectetur laudantium doloremque ab reiciendis
          eveniet aliquid.
        </p>
      </div>
      <div class="challenges section">
        <p class="is-size-4">Challenges</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          nobis eius earum iusto odit mollitia numquam incidunt nulla
          perspiciatis, ad cumque autem dolor, ullam sunt debitis et inventore.
        </p>
      </div>
      <div class="lessons section">
        <p class="is-size-4">Lessons Learned</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
          necessitatibus?
        </p>
      </div>
      <div class="screenshots section">
        <p class="is-size-4">Screenshots</p>
        <div class="columns is-multiline is-mobile">
          <div class="column is-half">
            <img src="../assets/img/MarketProject/home.png" />
          </div>
          <div class="column is-half">
            <img src="../assets/img/MarketProject/filter.png" />
          </div>
          <div class="column is-half">
            <img src="../assets/img/MarketProject/cards.png" />
          </div>
          <div class="column">
            <img src="../assets/img/MarketProject/details.png" />
          </div>
        </div>
      </div>
      <div class="code section">
        <p class="is-size-4">Code Snippets</p>
      </div>
      <div class="improvements section">
        <p class="is-size-4">Future Improvements</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          sapiente distinctio, commodi ullam ratione corporis nemo laborum, non
          ipsa error incidunt ad possimus necessitatibus facere veniam expedita
          cupiditate assumenda rerum consectetur similique explicabo culpa aut
          porro vero? Vero, iure? Nemo consequuntur est, dicta dolor nesciunt
          architecto vero vitae a molestias?
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
};
</script>

<style scoped>
.Market_Project {
  background-color: #19202b;
  height: 540vh;
}
p {
  font-family: NeueMontreal, sans-serif;
  color: whitesmoke;
  margin: 1vw;
}
.container {
  padding-left: 12vh;
  padding-right: 12vh;
}
.section {
  padding-bottom: 1.5vh;
}
.is-size-4 {
  text-decoration: underline;
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
</style>
