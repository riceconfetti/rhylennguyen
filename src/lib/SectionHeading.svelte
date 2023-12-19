<script>
   export let theme;
</script>

<h2 class={theme}><slot /></h2>

<style lang="scss">
  h2 {
    position: absolute;
    font-size: 8vh;
    line-height: 77%;
    text-transform: uppercase;
    letter-spacing: 26.88px;
    top: 0;
    right: 0;
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    height: 100%;
    text-align: center;

    @media only screen and (max-width: 1024px){
      font-size: 32px;
      font-weight: 900;
    }

    &.light {
      color: black;
    }

    &.dark {
      color: white;
    }
  }
</style>
