<template>
  <nav class="navbar p-5">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/"></router-link>
    </div>
    <div class="navbar-menu">
      <div class="navbar-end">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/about" class="navbar-item">About</router-link>
        <router-link to="/projectsView" class="navbar-item"
          >Projects</router-link
        >
      </div>
    </div>
    <div id="burger">
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        @click="isOpen = !isOpen"
        v-bind:class="{ 'is-active': isOpen }"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div
      id="burgermenu"
      class="navbar-menu"
      v-bind:class="{ 'is-active': isOpen }"
    >
      <div class="navbar-end is-boxed is-pulled-right">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/about" class="navbar-item">About</router-link>
        <router-link to="/projectsView" class="navbar-item"
          >Projects</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: function () {
    return {
      isOpen: false,
    };
  },
};
</script>

<style lang="scss">
@media (min-width: 1024px) {
  #burgermenu {
    display: none;
  }
}

.navbar-brand {
  position: absolute;
  padding-left: 2vw;
  height: 5vw;
  width: 10vw;
  align-items: center;
  .navbar-item {
    background: url(../assets/img/AWwhite_rigot-removebg-preview.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
  }
}
.navbar {
  background-color: transparent;
  font-family: NeueMontrealBold, sans-serif;
}
#burgermenu {
  background-color: transparent;
}
.navbar-end a:hover {
  background-color: transparent;
  color: #bb7457;
}
.navbar-item {
  color: #9ddcfd;
}

a.navbar-item.is-active {
  background-color: transparent;
}
a.navbar-item.is-active {
  color: #bb7457;
}
</style>
