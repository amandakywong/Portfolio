<template>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: Writer;
  src: url("../src/assets/fonts/PPWriter-Thin.otf");
}
@font-face {
  font-family: NeueMontreal;
  src: url("../src/assets/fonts/PPNeueMontreal-Thin.otf");
}
@font-face {
  font-family: NeueMontrealBold;
  src: url("../src/assets/fonts/PPNeueMontreal-Medium.otf");
}
@font-face {
  font-family: NeueMontrealRegular;
  src: url("../src/assets/fonts/PPNeueMontreal-Book.otf");
}
</style>
