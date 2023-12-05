<template>
  <div class="about">
    <Navbar></Navbar>
    <div class="container">
      <div class="columns">
        <div class="column is-two-thirds">
          <h1 class="is-size-7-mobile">
            This is an about page <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, sed
            minima amet sit mole`stiae minus corporis ea repellat. Quaerat quam
            perferendis consequatur natus est quae dolor distinctio dignissimos,
            consequuntur quia iste atque incidunt excepturi? Repellat esse,
            omnis similique, laboriosam odio nesciunt tempore hic cumque maiores
            sapiente necessitatibus! Maxime, tempora aliquid?<br /><br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            dolor atque a nobis temporibus veritatis odit error eaque
            exercitationem eos vel neque ea autem, rerum suscipit explicabo.
          </h1>
          <img id="morethan" src="../assets/img/light.png" />
        </div>
        <div class="column">
          <img src="../assets/img/profile.png" alt="profile" id="profile" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "AboutView",
  components: {
    Navbar,
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
  padding: 10vh;
  color: white;
}
#profile {
  display: flex;
  height: auto;
  width: auto;
  padding-top: 20vh;
  filter: drop-shadow(7px 1px 2px #bf6d49);
  @media (max-width: 768px) {
    height: 16rem;
    padding-top: 5vh;
    margin-left: 30vh;
  }
}
#morethan {
  width: 6vh;
}
</style>
