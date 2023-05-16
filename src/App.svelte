<script>
   import "@fontsource/lato";
  import NavBar from "./lib/NavBar.svelte";
  import Card from "./lib/Card.svelte";
</script>

<main>
  <NavBar>
    <div class="hero">
      <p class="subtitle">Hello, I am</p>
      <p class="title">Rhylen</p>
      <a href="#about">About</a>
   </div>

   <Card name="about">
      <div class="lato">
         <p>Hi, I'm Rhylen and I have a passion for creating novel experiences on the web. I started my journey in
            the digital world when I was 10 and picked up the book "How to build your own website." Since then I've
            been been around the internet with Greasemonkey userscripts and Tumblr theme customizations and fell in
            love with programming.</p>
         <p>Now, I'm graduating August 2022 and I'm still just as passisionate about computers as I was at 12 years
            old. Over the years I've become experienced in a wide variety of web technologies and languages. My main
            focus is building easy to navigate front-end experiences and making technology intuitive.</p>
         <p><strong>When I'm not coding,</strong> I love dancing, reading, and playing board and table-top role playing games.</p>
      </div>
   </Card>
      
  </NavBar>
</main>

<style>
  .lato {
   font-family: "Lato";
  }
</style>
