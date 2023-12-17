<script>
  import NavBar from "./lib/NavBar.svelte";
  import Landing from "./pages/Landing.svelte";
  import About from "./pages/About.svelte";
  import Skills from "./pages/Skills.svelte";
  import Portfolio from "./pages/Portfolio.svelte";
  import Contact from "./pages/Contact.svelte";
  import Footer from "./lib/Footer.svelte";
  import { onMount, onDestroy } from "svelte";
  let scrollNavBar;
  $: show = false;
  onMount(() => {
    window.onscroll = () => {
      if (window.scrollY > scrollNavBar-1) {
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
  <Landing/>
  <About/>
  <Skills/>
  <Portfolio/>
  <Contact/>
  <Footer/>
</main>

<style lang="scss">
  main {
    width: 100%;
    position: relative;
  }
</style>