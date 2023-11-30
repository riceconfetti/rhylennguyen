<script>
  let showSidebar = false;
  let width;
  let sWidth;

  function toggleSidebar() {
    showSidebar = !showSidebar;
  }
</script>

<div class="navBar" class:open={showSidebar} style="width:{width}">
  <p>rhylen<span>.</span> n</p>
  <div class="hamburger" on:click={toggleSidebar} on:keydown={toggleSidebar}>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>
  <div class="links">
    <a href="#about">about.</a>
    <a href="#skills">skills.</a>
    <a href="#portfolio">portfolio.</a>
    <a href="#contact">contact.</a>
  </div>
</div>

<style lang="scss">
  .navBar {
    display: flex;
    color: white;
    font-weight: bold;
    align-items: center;
    padding: 1rem 1.5rem;
    justify-content: space-between;

    .hamburger {
      display: none;
    }

    span {
      color: #ffc700;
    }

    .links {
      display: flex;
      gap: 1rem;
      a {
        font-weight: bold;
        color: white;
        text-decoration: none;
      }
    }

    @media only screen and (max-width: 800px) {
      .hamburger {
        display: flex;
        flex-direction: column;
        width: 20px;
        gap: 4px;
        transition-duration: ease-in-out 0.5s;

        .bar {
          width: 100%;
          height: 3px;
          background-color: white;
          transition: 0.5s;
        }
      }

      .links {
        position: absolute;
        top: 0;
        bottom: 0;
        aspect-ratio: 1;
        border-radius: 100%;
        background-color: #ffc700;
        display: none;
        align-items: left;
        justify-content: center;
        flex-direction: column;
        padding: 3rem;

        a {
          color: black;
          font-size: 2rem;
        }
      }

      &.open {
        .hamburger {
          display: block;
          z-index: 2;
          transition: 0.5s;
          .bar:first-child {
            transform: rotate(45deg) translate(4px, 0);
            transition: 0.5s;
          }
          .bar:nth-child(2) {
            transition: 0.5s;
            opacity: 0;
          }
          .bar:last-child {
            transition: 0.5s;
            transform: rotate(-45deg) translate(4px, 0);
          }
        }

        .links {
        }
      }
    }
  }
</style>
