<script>
    export let links;
    import SidebarToggle from "./SidebarToggle.svelte";
    const media = {
       phone: "(max-width: 480px)",
       tablet: "(min-width: 481px) and (max-width: 1280px)",
       desktop: "(min-width: 1281px)"
    }

</script>
<div class="header_bar">
   <div class="color-decoration"></div>
   <nav>
      <a id="logo" href="/"><img src="/Logo.svg" alt="&lt;R&gt;"/></a>
      <span class="links">
         {#each links as link (links.text)}
            <a href={link.href}>{link.text}</a>
         {/each}
      </span>
      <SidebarToggle {links} client:visible/>
   </nav>
</div>

<style lang="scss">
   .header_bar {
      position: fixed;
      width: 100vw;
   }
   .color-decoration {
      height: 20px;
      background-color: var(--color-main);
   }
   nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin:auto;
      width: 70vw;
      padding: 2rem;
      letter-spacing: 2px;
      a#logo {
         text-decoration: none;
         font-family: Anurati, sans-serif;
         font-weight:700;
         font-size: 1.3rem;
         color: var(--color-main);
      }
      .links {
         display: flex;
         gap: 2em;
         align-items: center;
         @media only screen and (max-width: 1280px) {
            display: none;
         }
         a {
            text-decoration: none;
            font-weight: bolder;
            font-size: 1.1rem;
            color: var(--color-main);
            &:hover {
               text-shadow: 1px 2px 0px var(--color-accent);
               color: white;
               transition: ease-in 0.1s;
            }
         }
      }
   }
</style>