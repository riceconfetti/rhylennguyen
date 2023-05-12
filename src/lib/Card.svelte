<script>
   import Header from "../components/Header.svelte";
   export let name;
   let w;
</script>

<svelte:window bind:innerWidth={w}/>

<div class="section" id={name}>
   <Header {w} {name} />
   <div class="main">
      <slot />
   </div>
</div>

<style lang="scss">
   .main {
      margin: 3em 0em;
   }
</style>
