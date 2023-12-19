<script>
  import Section from "../layout/Section.svelte";
  import SectionHeading from "../lib/SectionHeading.svelte";
  import Skill from "../lib/Skill.svelte";
</script>

<Section id="skills">
  <SectionHeading theme="dark">Skills</SectionHeading>
  <div class="skills-box">
    <Skill level={5}>html</Skill>
    <Skill level={5}>css</Skill>
    <Skill level={5}>javascript</Skill>
    <Skill level={5}>sass</Skill>
    <Skill level={4}>java</Skill>
    <Skill level={4}>c++</Skill>
    <Skill level={3}>python</Skill>
    <Skill level={2}>svelte</Skill>
    <Skill level={2}>vue</Skill>
  </div>
</Section>

<style lang="scss">
  .skills-box {
    display: flex;
    max-height: 65vh;
    flex-direction: column;
    flex-wrap: wrap;
    flex-shrink: 1;
    padding: 0 5rem;
    gap: 2rem;
    @media only screen and (max-width: 1024px){
      padding: 1rem;
    }
  }
</style>
