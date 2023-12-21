<script>
</script>

<footer>
  <div class="socials">
    <a href="https://github.com/riceconfetti">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="37"
        height="36"
        viewBox="0 0 37 36"
        fill="none"
      >
        <g clip-path="url(#clip0_7606_340)">
          <path
            d="M13.7878 28.3996C6.36597 30.6262 6.36597 24.6887 3.39722 23.9465M24.1785 32.8528V27.1082C24.2341 26.4004 24.1385 25.6889 23.8979 25.0209C23.6574 24.3529 23.2773 23.7438 22.7832 23.234C27.4441 22.7145 32.3425 20.9481 32.3425 12.8434C32.3421 10.7709 31.545 8.77798 30.116 7.27698C30.7926 5.46382 30.7448 3.45968 29.9824 1.68088C29.9824 1.68088 28.2308 1.16135 24.1785 3.87776C20.7763 2.9557 17.19 2.9557 13.7878 3.87776C9.7355 1.16135 7.98394 1.68088 7.98394 1.68088C7.22153 3.45968 7.17368 5.46382 7.85034 7.27698C6.41069 8.78911 5.61268 10.8001 5.62378 12.8879C5.62378 20.9332 10.5222 22.6996 15.1832 23.2785C14.6948 23.7832 14.3182 24.385 14.0778 25.0448C13.8374 25.7047 13.7386 26.4077 13.7878 27.1082V32.8528"
            stroke="white"
            stroke-width="3.39286"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_7606_340">
            <rect
              width="35.625"
              height="35.625"
              fill="white"
              transform="translate(0.428467 0.196533)"
            />
          </clipPath>
        </defs>
      </svg>
    </a>
    <a href="https://www.linkedin.com/in/rhylen-n-886592139/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
      >
        <path
          d="M24.0178 12.0715C26.3799 12.0715 28.6452 13.0099 30.3155 14.6801C31.9857 16.3504 32.9241 18.6157 32.9241 20.9778V31.3684H26.9866V20.9778C26.9866 20.1904 26.6738 19.4353 26.117 18.8786C25.5603 18.3218 24.8052 18.009 24.0178 18.009C23.2305 18.009 22.4753 18.3218 21.9186 18.8786C21.3619 19.4353 21.0491 20.1904 21.0491 20.9778V31.3684H15.1116V20.9778C15.1116 18.6157 16.0499 16.3504 17.7202 14.6801C19.3904 13.0099 21.6557 12.0715 24.0178 12.0715V12.0715Z"
          stroke="white"
          stroke-width="3.39286"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.17407 13.5559H3.23657V31.3684H9.17407V13.5559Z"
          stroke="white"
          stroke-width="3.39286"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.20532 9.10278C7.84492 9.10278 9.17407 7.77363 9.17407 6.13403C9.17407 4.49444 7.84492 3.16528 6.20532 3.16528C4.56573 3.16528 3.23657 4.49444 3.23657 6.13403C3.23657 7.77363 4.56573 9.10278 6.20532 9.10278Z"
          stroke="white"
          stroke-width="3.39286"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </a>
  </div>
  <p>Copyright © 2023 Rhylen Nguyen. All Rights Reserved.</p>
</footer>

<style lang="scss">
  footer {
   position: absolute;
   bottom: 2rem;
    height: max-content;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .7rem;
    @media only screen and (max-width: 1024px){
      gap: .5rem;
      bottom: -2rem;
      padding-bottom: 1rem;
    }

    .socials {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      svg {
        width: 24px;
      }
      @media only screen and (max-width: 1024px){
      gap: 1rem;
      svg {
        width: 24px;
      }
    }
    }
    p {
      font-size: 1rem;
      color: white;
      @media only screen and (max-width: 1024px){
      font-size: 12px;
    }
    }
  }
</style>
