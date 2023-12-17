<script>
  export let img;
  export let name;
  export let width = 0;
</script>

<div class="project" bind:clientWidth={width} on:click on:keydown>
  <img class="showcase" src={img} alt={name + " Screenshot"} />
  <h2>{name}<span class="yellow">.</span></h2>
</div>

<style lang="scss">
  .project {
    width: 20vw;
    height: max-content;
    position: relative;
    &:hover {
      cursor: pointer;
    }

    img {
      width: 100%;
      filter: brightness(0.8);
    }
    h2 {
      position: absolute;
      height: min-content;
      right: -1.2rem;
      bottom: -1.3rem;
      color: #fff;
      font-size: 2.4rem;
      font-weight: 700;
      line-height: normal;

      .yellow {
        color: #ffc700;
      }
    }
  }
</style>
