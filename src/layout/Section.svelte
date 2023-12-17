<script>
  export let id;
  export let width = 0;
</script>

<section {id} bind:clientWidth={width}><slot /></section>

<style lang="scss">
  section {
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 100%;
    padding-block: 5rem;
    position: relative;
  }
</style>
