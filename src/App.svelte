<script>
  import NavBar from "./lib/NavBar.svelte";
  import { onMount, onDestroy } from "svelte";
  let scrollNavBar;
  $: show = false;
  onMount(() => {
    window.onscroll = () => {
      if (window.scrollY > scrollNavBar) {
        show = true;
      } else {
        show = false;
      }
    };
  });

  onDestroy(() => {
    window.onscroll = () => {};
  });
</script>

<svelte:window bind:innerHeight={scrollNavBar} />

<main>
  <NavBar showNav={show} />

  <div class="landing">
    <div class="hero">
      <h1>Hi, I'm <span style="color: #ffc700">Rhylen,</span></h1>
      <h1>I'm a <span class="underline">Front-End Developer</span></h1>
    </div>
    <div class="landing-links">
      <a href="#about">about.</a>
      <a href="#skills">skills.</a>
      <a href="#portfolio">portfolio.</a>
      <a href="#contact">contact.</a>
    </div>
  </div>
</main>

<style lang="scss">
  .landing {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    box-sizing: border-box;
    padding: 15rem;
    color: white;
    overflow-x: hidden;
    position: relative;
    &::before {
      content: "";
      z-index: -99;
      background-color: #ffc700;
      height: 100%;
      aspect-ratio: 1;
      border-radius: 100%;
      position: absolute;
      right: 0;
      transform: translateX(50%);
      overflow-x: hidden;
    }
    .hero {
      display: flex;
      flex-direction: column;
      height: min-content;

      h1 {
        font-size: 3rem;
      }

      .underline {
        position:relative;
        &::after {
          content: "";
          width: 100%;
          height: 0.75rem;
          background-color: #ffc700;
          display: block;
          position: absolute;
          bottom: -1rem;
          right: 0;
        }
      }
    }

    .landing-links {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 5rem;
      a {
        color: black;
        font-weight: bold;
        text-decoration: none;
        font-size: 2.25rem;
      }
    }
  }
</style>
