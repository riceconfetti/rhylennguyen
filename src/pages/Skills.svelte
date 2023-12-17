<script>
  import Section from "../layout/Section.svelte";
  import SectionHeading from "../lib/SectionHeading.svelte";
  import Skill from "../lib/Skill.svelte";
</script>

<Section id="skills">
  <SectionHeading theme="dark">Skills</SectionHeading>
  <div class="skills-box">
    <Skill level={5}>html & css</Skill>
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
    padding: 0 15rem;
    flex-direction: column;
    gap: 2.5rem;
  }
</style>
