<template>
  <div class="columns">
    <div class="column intro is-mobile">
      <p class="name">Amanda Wong</p>
      <p class="title is-size-4-desktop is-size-5-tablet is-size-6-mobile">
        Developer & Pharmacist
      </p>
      <p class="location is-size-4-desktop is-size-5-tablet is-size-6-mobile">
        Melbourne, Australia
      </p>
    </div>
    <div class="column about is-mobile is-two-fifths">
      <p
        class="description is-size-4-desktop is-size-5-tablet is-size-6-mobile"
      >
        Committed to creating technology-driven solutions that advance
        healthcare accessibility and experiences.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.intro {
  padding-left: 10vh;
  @media screen and (max-width: 768px) {
    padding-left: 6vh;
  }
}

.name {
  padding-top: 52vh;
  color: whitesmoke;
  font-size: 8vh;
  font-family: Writer, serif;

  @media screen and (max-width: 768px) {
    padding-top: 3vh;
  }
}

.title,
.location {
  color: grey;
  font-family: NeueMontreal, sans-serif;
}
.title {
  @media screen and (max-width: 768px) {
    padding-top: 25vh;
  }
}
.location {
  @media screen and (max-width: 768px) {
    margin-top: -14px;
  }
}
.description {
  padding-top: 55vh;
  padding-right: 5rem;
  color: whitesmoke;
  position: relative;
  text-align: right;
  font-family: NeueMontreal, sans-serif;

  @media screen and (max-width: 768px) {
    padding-top: 1vh;
    padding-left: 5vh;
    padding-right: 5vh;
    text-align: left;
  }
}
</style>
