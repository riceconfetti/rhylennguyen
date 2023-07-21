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
    <a href="#about">#about</a>
    <a href="#skills">#skills</a>
    <a href="#work">#work</a>
    <a href="#contact">#contact</a>
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
    position: relative;
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
      color: rgb(0, 0, 0);
      text-decoration: none;
    }
    .links {
      display: flex;
      gap: 2em;
      padding: 1rem;
      a {
        position: relative;
        color: rgb(0, 0, 0);
        text-decoration: none;
        box-sizing: border-box;
        transition: 0.5s ease;

        &::before {
          content: "";
          background-color: #ffffff;
          position: absolute;
          mix-blend-mode: difference;
          left: 0.5rem;
          bottom: .15rem;
          width: 100%;
          height: .4rem;
          z-index: 1;
          transition: all 0.3s ease-in-out;
        }

        &::after {
          content: "";
          background-color: #cebd27;
          position: absolute;
          left: 0.5rem;
          bottom: .15rem;
          width: 100%;
          height: .4rem;
          z-index: -11;
          transition: all 0.3s ease-in-out;
        }

        &:hover::before, &:hover::after{
          left: -5px;
          bottom: 0;
          height: 100%;
          width: calc(100% + 10px);
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
          a:hover {
            transform: scale(1.1);
            transition: 0.5s;
            position: relative;

          }
        }
      }
    }
  }
</style>
