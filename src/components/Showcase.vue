<template>
  <div class="projects">
    <p class="page-title">Projects</p>
    <div class="cardcontainer">
      <div class="card market">
        <div class="card-image image">
          <img src="../assets/img/market-icon.png" />
        </div>
        <div class="info">
          <p class="title has-text-centered">Market finder</p>
          <p class="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa labore
            et cum quae nihil itaque autem. Itaque blanditiis dolorum sunt?
          </p>
        </div>
      </div>
      <div class="card lifx">
        <div class="card-image image">
          <img src="../assets/img/lifx-icon.png" />
        </div>
        <div class="info">
          <p class="title has-text-centered">LIFX automated</p>
          <p class="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa labore
            et cum quae nihil itaque autem. Itaque blanditiis dolorum sunt?
          </p>
        </div>
      </div>
      <div class="card portfolio">
        <div class="card-image image">
          <img src="../assets/img/portfolio-icon.png" />
        </div>
        <div class="info">
          <p class="title has-text-centered">Portfolio</p>
          <p class="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa labore
            et cum quae nihil itaque autem. Itaque blanditiis dolorum sunt?
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects {
  height: 90vh;
  padding-left: 5vw;
  padding-right: 5vw;
}
.page-title {
  font-family: Writer, serif;
  color: whitesmoke;
  font-size: 5vw;
  text-align: center;
  padding: 3rem;
}
.card {
  display: inline-block;
  justify-self: center;
  margin: 2vw;
  width: 27%;
  border-radius: 5px;
  background-color: #2b303d;
  box-shadow: inset 0 0px 10px 3px #242430, 0 0 10px 9px #111318;
  transition: 0.4s ease-in-out;
  &:hover {
    transform: translateY(15px);
    filter: opacity(0.7);
  }
}
.content {
  font-size: 1vw;
  font-family: NeueMontreal, sans-serif;
  color: rgb(237, 237, 237);
  position: absolute;
  left: 1vw;
  bottom: 1vw;
  width: 90%;
  @media screen and (max-width: 768px) {
    display: none;
  }
}
.title {
  font-size: 2.5vw;
  font-family: NeueMontrealBold, sans-serif;
  color: rgb(237, 237, 237);
  position: absolute;
  width: 100%;
  text-align: center;
  top: 5vw;
  @media screen and (max-width: 768px) {
    top: 10vw;
  }
}

.info {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0.5vw;
  opacity: 0;
  &:hover {
    opacity: 1;
    transform: translateY(-5px);
    transition: 0.4s ease-in-out;
  }
}
.card-content {
  margin-top: -1rem;
}
.card-image {
  padding: 4vw;
}
</style>
