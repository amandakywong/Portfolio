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
        Pursuing the creation of engaging and accessible interfaces. With a
        mission to innovate solutions that bridge health and technology.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.intro {
  padding-left: 10vh;
}
.name {
  padding-top: 50vh;
  color: whitesmoke;
  font-size: 8vh;
  font-family: Writer, serif;

  @media screen and (max-width: 768px) {
    padding-top: 6vh;
  }
}

.title,
.location {
  color: grey;
  font-family: NeueMontreal, sans-serif;
}
.description {
  padding-top: 45vh;
  padding-right: 5rem;
  color: whitesmoke;
  position: relative;
  text-align: right;
  font-family: NeueMontreal, sans-serif;

  @media screen and (max-width: 768px) {
    padding-top: 17vh;
    padding-left: 10vh;
    padding-right: 30vh;
    text-align: left;
  }
}
</style>
