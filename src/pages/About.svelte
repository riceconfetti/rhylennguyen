<script>
  import SectionHeading from "../lib/SectionHeading.svelte";
  import Section from "../layout/Section.svelte";
</script>

<Section id="about">
  <div class="stuff">
    <SectionHeading theme="light">About</SectionHeading>
    <p>
      Hello! This is the block for my personal statement. A small biography
      about why I'm a front-end developer. It needs to be fun and catchy and
      help me get a new job. Talk about why I started in this career and my main
      achievements. Mention career goals and side projects.
    </p>
  </div>
</Section>

<style lang="scss">
  .stuff {
    background-color: #ffc700;
    display: flex;
    padding: 15rem;
    padding-block: 20rem;
    position: relative;

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
