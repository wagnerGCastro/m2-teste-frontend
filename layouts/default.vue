<template>
  <div class="wrapper">
    <notifications></notifications>
    <div class="main-panel">
      <zoom-center-transition :duration="200" mode="out-in">
        <!-- your content here -->
        <nuxt></nuxt>
      </zoom-center-transition>
    </div>
  </div>
</template>
<script>
  /* eslint-disable no-new */
  import 'perfect-scrollbar/css/perfect-scrollbar.css';

  import { SlideYDownTransition, ZoomCenterTransition } from 'vue2-transitions';

  export default {
    components: {
      SlideYDownTransition,
      ZoomCenterTransition,
    }
  };
</script>
<style lang="scss">
  $scaleSize: 0.95;
  @keyframes zoomIn95 {
    from {
      opacity: 0;
      transform: scale3d($scaleSize, $scaleSize, $scaleSize);
    }
    to {
      opacity: 1;
    }
  }

  .main-panel .zoomIn {
    animation-name: zoomIn95;
  }

  @keyframes zoomOut95 {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: scale3d($scaleSize, $scaleSize, $scaleSize);
    }
  }

  .main-panel .zoomOut {
    animation-name: zoomOut95;
  }
</style>
