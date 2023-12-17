<script>
  export let level;
</script>

<div class="skill">
  <p class="name"><slot /></p>
  <div class="progress-bar">
    <div class="progress" style="width: {(level / 5) * 100}%">
      {level} years
    </div>
  </div>
</div>

<style lang="scss">
  .skill {
    display: flex;
    width: 100%;
    justify-content: space-between;
    p {
      color: #fff;
      font-size: 20px;
      font-weight: 700;
      text-transform: lowercase;
    }
    .progress-bar {
      position: relative;
      height: 21px;
      background: rgba(255, 255, 255, 0.07);
      width: calc(70%);
      .progress {
        background: #ffc700;
        box-sizing: border-box;
        right: 0;
        padding-right: 1rem;
        position: absolute;
        text-align: right;
        color: #000;
        font-weight: 700;
      }
    }
  }
</style>
