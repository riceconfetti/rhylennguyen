<script>
  import "@fontsource/lato";
  import NavBar from "./lib/NavBar.svelte";
  import Card from "./lib/Card.svelte";
</script>

<main>
  <NavBar>
    <div class="hero">
      <p class="subtitle">Hello, I am</p>
      <a href="#about"><p class="title">Rhylen</p></a>
    </div>

    <Card name="about">
      <div class="lato">
        <p>
          Hi, I'm Rhylen and I have a passion for creating novel experiences on the web. I started my journey in the digital world when I was 10 and picked up the book "How to build your own website." Since then I've been around the internet with Greasemonkey userscripts and Tumblr theme customizations and fell in love with programming.
        </p>
        <p>
          Now, just starting my career as a front-end developer and I'm still just as passisionate about computers as I was at 12 years old. Over the years I've become experienced in a wide variety of web technologies and languages. My main focus is building easy to navigate front-end experiences and making technology intuitive.
        </p>
        <p>
          <strong>When I'm not coding,</strong> I love dancing, reading, and playing board and table-top role playing games.
        </p>
      </div>
    </Card>
  </NavBar>
</main>

<style lang="scss">
  main {
    height: 100%;
    width: 100%;
  }

  .hero {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    font-size: 2em;
    width: 100%;
    margin-top: -113px;
    p {
      margin: 0;
    }
    a {
      transition-duration: .5s;
      text-decoration:none;
      &:hover {
         transition: .5s ease;
      }
    }
    .title {
      font-size: 1.5em;
      color: #3142d8;
      font-weight: bold;
      position: relative;
      &::before {
        content: "rhylen";
        font-weight: 500;
        position: absolute;
        top: -3px;
        left: -3px;
      }
    }
  }

  .lato {
    font-family: "Lato";
  }
</style>
