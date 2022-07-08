<script>
   export let links;

   function toggleNav() {

   }

</script>

<span>
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" on:click={toggleNav}>
      <path fill="none" d="M0 0h24v24H0z"/>
      <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"/>
   </svg>
   <span class="links">
      {#each links as link (links.text)}
         <a href={link.href}>{link.text}</a>
      {/each}
   </span>
</span>

<style lang="scss">
   span {
      display:none;
      @media only screen and (max-width: 1280px) {
         display: block;
      }
      .links {
         height: 100vh;
         background-color: #f8f8f8;
         display: none;
      }
   }
</style>