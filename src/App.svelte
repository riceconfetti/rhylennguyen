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
      <h1>Hi, I'm Rhylen</h1>
      <h1>I'm a <span>Front-End Developer</span></h1>
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
    padding: 2rem;
    color: white;
    overflow-x: hidden;
    .hero {
      display: flex;
      flex-direction: column;
      height: min;
    }
    
    .landing-links {
      background-color: #ffc700;
      height: 100%;
      aspect-ratio: 1;
      left:0;
      border-radius: 100%;
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: center;
      right: -50%;
    }
  }
</style>
