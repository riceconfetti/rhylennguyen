<script>
  import Section from "../layout/Section.svelte";
  import SectionHeading from "../lib/SectionHeading.svelte";
</script>

<Section id="contact">
  <div class="stuff">
    <SectionHeading theme="light">Contact</SectionHeading>
    <div class="text-box">
      <p>
        I'm available for freelance work! If you're interested in my work (or if
        you have fun pictures of your cat), I would love to chat!
      </p>
      <a href="mailto:me@rhylennguyen.com"
        >me<span class="at">@</span>rhylennguyen.com</a
      >
    </div>
  </div>
</Section>

<style lang="scss">
  .stuff {
    background-color: #ffc700;
    display: flex;
    height: 80%;
    align-items: center;
    position: relative;
    @media only screen and (max-width: 1024px) {
      padding-block: 2rem;
    }

    .text-box {
      display: flex;
      position: relative;
      width: 80%;
      flex-direction: column;
      gap: 5rem;
      align-items: center;

      p {
        color: #000;
        font-family: "Open Sans";
        font-size: 1.2rem;
        font-weight: 700;
        line-height: 168.184%; /* 40.364px */
        width: 70%;
        @media only screen and (max-width: 1024px) {
          font-size: 1rem;
        }
      }

      a {
        color: #000;
        align-self: center;
        font-family: "Open Sans";
        font-size: 2rem;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 0.132px;
        text-decoration: none;
        @media only screen and (max-width: 1024px) {
          font-size: 1.5rem;
        }
        .at {
          transition: all ease-in-out 0.2s;
        }

        &:hover {
          .at {
            color: white;
            font-size: 2.2rem;
            transition: all ease-in-out 0.2s;
            @media only screen and (max-width: 1024px) {
              font-size: 1.6rem;
            }
          }
        }
      }
    }
  }
</style>
