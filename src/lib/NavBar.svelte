<script>
  let showSidebar = false;
  let width;
  let sWidth;

  function toggleSidebar() {
    showSidebar = !showSidebar;
  }
</script>

<div class="navBar" class:open={showSidebar} style="width:{width}px">
  <a id="logo" href="/#">R.This</a>

  <div class="hamburger" class:open={showSidebar} on:click={toggleSidebar}>
    <div class="bar" />
    <div class="bar" />
    <div class="bar" />
  </div>

  <div class="links" class:open={showSidebar} bind:clientWidth={sWidth}>
    <div class="link"><a href="#about">#about</a></div>
    <div class="link"><a href="#skills">#skills</a></div>
    <div class="link"><a href="#work">#work</a></div>
    <div class="link"><a href="#contact">#contact</a></div>
  </div>
</div>

<div
  class="mainContent"
  class:open={showSidebar}
  bind:clientWidth={width}
  style="margin-right:{sWidth}px"
>
  <slot />
</div>

<style lang="scss">
  #logo {
    transition: 0.5s;
    &:hover {
      color: #3142d8;
    }
  }

  .mainContent {
    margin-top: 5em;
    @media only screen and (min-width: 1200px) {
      margin-right: 0 !important;
    }
  }
  .navBar {
    position: fixed;
    top: 0;
    background-color: white;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5em;
    .hamburger {
      display: none;
      @media only screen and (max-width: 1200px) {
        display: flex;
        gap: 5px;
        flex-direction: column;
        cursor: pointer;
        .bar {
          height: 3px;
          width: 25px;
          background-color: #000;
          transition: 0.5s;
        }
        &.open {
          .bar:first-child {
            -webkit-transform: rotate(-45deg) translate(-3px, 8px);
            transform: rotate(-45deg) translate(-3px, 8px);
          }
          .bar:nth-child(2) {
            opacity: 0;
          }
          .bar:nth-child(3) {
            -webkit-transform: rotate(45deg) translate(-3px, -8px);
            transform: rotate(45deg) translate(-3px, -8px);
          }
        }
      }
    }
    a {
      color: black;
      text-decoration: none;
    }
    .links {
      display: flex;
      gap: 2em;
      .link {
        color: black;
        text-decoration: none;
        box-sizing: border-box;
        line-height: 1.2rem;
        font-size: 1.2rem;
        transform: scale(0.8);
        transition: 0.5s ease;
        &::after {
          content: "";
          position: absolute;
          height: 4px;
          width: 0;
          background-color: #3142d8;
          bottom: -8px;
          left: 0;
          transition: 0.5s ease;
        }
        &:hover {
          transform: scale(1);
          transition: 0.5s ease;
          position: relative;
          &::after {
            transition: 0.5s ease;
            width: 100%;
          }
        }
      }
      @media only screen and (max-width: 1200px) {
        position: fixed;
        flex-direction: column;
        overflow-x: hidden;
        top: 0;
        right: 0;
        height: 100vh;
        background-color: black;
        width: 0;
        padding: 2em 0em;
        transition: 0.5s;
        a {
          color: white;
        }
        &.open {
          width: 30vw;
          padding: 2em;
          a::after {
            content: "";
            position: absolute;
            height: 4px;
            width: 0;
            bottom: -8px;
            left: 0;
            transition: 0.5s;
          }
          a:hover {
            transform: scale(1.1);
            transition: 0.5s;
            position: relative;
            &::after {
              width: 90%;
              background-color: #3142d8;
            }
          }
        }
      }
    }
  }
</style>
