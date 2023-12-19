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
    flex-shrink: 1;
    justify-content: space-between;
    @media only screen and (max-width: 1024px) {
      width: 49%;
    }
    p {
      color: #fff;
      font-size: 16px;
      font-weight: 700;
      width: 10rem;
      text-transform: lowercase;
      @media only screen and (max-width: 1024px) {
        font-size: 16px;
      }
    }
    .progress-bar {
      position: relative;
      height: 21px;
      background: rgba(255, 255, 255, 0.07);
      width: 100%;
      @media only screen and (max-width: 1024px) {
        height: 16px;
      }
      .progress {
        background: #ffc700;
        box-sizing: border-box;
        right: 0;
        padding-right: 1rem;
        position: absolute;
        text-align: right;
        color: #000;
        font-weight: 700;
        height: 100%;
        @media only screen and (max-width: 1024px) {
          font-size: 12px;
        }
      }
    }
  }
</style>
