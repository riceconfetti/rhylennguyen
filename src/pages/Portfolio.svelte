<script>
  import SectionHeading from "../lib/SectionHeading.svelte";
  import Section from "../layout/Section.svelte";
  import Project from "../lib/Project.svelte";
  import projects from "../assets/project.json";
  let projectWidth;
  let viewWidth;
  let isOverlay = false;

  $: calcMaxWidth = Math.trunc((viewWidth / (projectWidth+96)))*(projectWidth+96);
  $: currentProject = {
    img: "./the-daily-drip.png",
    name: "the daily drip",
    link: "the-daily-drip.onrender.com",
    description:
      "Project writeup/case study. Problem to be solved, pros and cons, challenges about the project, structure, technologies adopted and implemented. What was learned from this project. What you bring from doing this. What you would change if you were to do it again",
    tags: ["tag", "tag", "tag", "tag"],
  };
</script>

<Section id="portfolio" bind:width={viewWidth}>
  <SectionHeading theme="dark">Portfolio</SectionHeading>
  <div class="project-box" style="width: {calcMaxWidth}px">
    {#each projects as project}
      <Project
        img={project.img}
        name={project.name}
        bind:width={projectWidth}
        on:click={()=>{currentProject = project; isOverlay = true;}}
      />
    {/each}
  </div>

  <div class="overlay" class:display={isOverlay} on:click={()=>{isOverlay=false}} on:keydown={()=>{isOverlay=false}}>
    <div class="content">
      <img src={currentProject.img} alt="{currentProject.name} Showcase" />
      <div class="box">
        <div class="text-group">
          <div class="title">
            <h2>{currentProject.name}.</h2>
            <a href="https://{currentProject.link}">| {currentProject.link} |</a>
          </div>
          <p class="description">
            {currentProject.description}
          </p>
        </div>
        <div class="tags">
          {#each currentProject.tags as tag}
            <li>#{tag}</li>
          {/each}
        </div>
      </div>
    </div>
  </div>
</Section>

<style lang="scss">
  .project-box {
    position: absolute;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 5rem;
    align-content: flex-start;
    justify-content: space-between;
    box-sizing: border-box;
    height: 85%;
    gap: 6rem;
    overflow-x: auto;
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    &.display {
      display: flex;
    }
    .content {
      display: flex;
      width: max-content;
      align-content: center;
      position: relative;
      .box {
        position: absolute;
        display: flex;
        flex-direction: column;
        padding: 5rem;
        box-sizing: border-box;
        width: 50%;
        height: 100%;
        background: #00000090;
        backdrop-filter: blur(2px);
        right: 0;
        justify-content: space-between;

        .text-group {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        h2 {
          color: #fff;
          font-size: 32px;
          font-style: normal;
          text-transform: capitalize;
          font-weight: 700;
          line-height: 179.5%; /* 57.44px */
        }

        a {
          color: #ffc700;

          text-decoration: none;
          font-size: 15px;
          font-style: normal;
          font-weight: 700;
          line-height: 179.5%; /* 26.925px */
        }

        p {
          color: #fff;
          font-size: 16px;
          font-style: normal;
          font-weight: 700;
          line-height: 179.5%; /* 28.72px */
        }

        .tags {
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
          li {
            color: #fff;
            font-size: 16px;
            font-weight: 700;
            line-height: 179.5%; /* 28.72px */
            list-style: none;
          }
        }
      }
    }
  }
</style>
