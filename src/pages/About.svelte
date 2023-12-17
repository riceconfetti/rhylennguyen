<script>
  import SectionHeading from "../lib/SectionHeading.svelte";
  import Section from "../layout/Section.svelte";
</script>

<Section id="about">
  <div class="stuff">
    <SectionHeading theme="light">About</SectionHeading>
    <div>
      <p>
        Hi, I'm Rhylen and I have a passion for creating novel experiences on the
        web. I started my journey in the digital world when I was 10 and picked up
        the book "How to build your own website." Since then I've been been around
        the internet with Greasemonkey userscripts and Tumblr theme customizations
        and fell in love with programming.
      </p>
      <p>
        These days, I'm still just as passisionate about computers as I was at 12
        years old. Over the years I've become experienced in a wide variety of web
        technologies and languages. My main focus is building easy to navigate
        front-end experiences and making technology intuitive. When I'm not
        coding, I love dancing, reading, and playing board and table-top role
        playing games.
      </p>
    </div>
  </div>
</Section>

<style lang="scss">
  .stuff {
    background-color: #ffc700;
    display: flex;
    padding: 15rem;
    padding-block: 20rem;
    position: relative;

    div {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    p {
      color: #000;
      font-family: Open Sans;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 168.184%; /* 40.364px */
      width: 70%;
    }
  }
</style>
