<template>
  <div class="Contactpage">
    <div class="columns is-mobile">
      <div class="column is-narrow curlybrac">
        <p>{</p>
      </div>
      <div class="column content">
        <p class="reach-out">Reach out to me</p>
        <div class="email-details">
          <span class="email icon"><i class="fa-solid fa-envelope"></i></span>
          <p>amandakywong@gmail.com</p>
        </div>
        <div class="contact-icons">
          <span class="linkedin icon">
            <a href="www.linkedin.com/in/amanda-wong-aw121"
              ><i class="fa-brands fa-linkedin"></i
            ></a>
          </span>
          <span class="github icon">
            <a href="https://github.com/amandakywong">
              <i class="fa-brands fa-square-github"></i>
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped lang="scss">
.Contactpage {
  position: absolute;
  height: 75vh;
  width: 100vw;
  top: 100vh;
  background-color: #07070d;
  p {
    color: whitesmoke;
    font-size: 2vw;
    font-family: NeueMontreal, sans-serif;
  }
  // @media screen and (max-width: 768px) {
  //   position: relative;
  //   top: 0px;
  // }
}
.columns {
  padding: 15vh;
  @media screen and (max-width: 768px) {
    padding-left: 6vh;
  }
}
.contact-icons {
  a {
    color: #8c8c8c;
    :hover {
      color: #d7d7d7;
    }
  }
  span {
    font-size: 3rem;
    margin: 1rem;
    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
      margin: 0.5rem;
    }
  }
}
.email-details {
  margin: 1rem;
  @media screen and (max-width: 768px) {
    margin: 0.5rem;
  }
  span {
    color: #8c8c8c;
    font-size: 2.5rem;
    margin-right: 2rem;
    @media screen and (max-width: 768px) {
      font-size: 1.25rem;
      margin-right: 1rem;
    }
  }
  p {
    display: inline-block;
    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }
}
.curlybrac {
  p {
    font-size: 28vw;
    margin-top: -12vw;
    color: #11111e;
  }
}
.content {
  align-items: center;
}
.reach-out {
  align-self: center;
}
</style>
