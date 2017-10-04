<template>
  <div class="app-design-template">
    <div class="wrapper">
      <h3>{{ headings.for }}</h3>
      <h2>{{ mainHeading | toUpperCase }}</h2>
      <div class="imgs">
        <img src="../assets/images/displayBG.png" alt="tablet">
        <img src="../assets/images/White.png" alt="smartphone">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mainHeading: 'unique design'
    }
  },
  computed: {
      headings() {
          return this.$store.state.headings;
      }
  },
  filters: {
      toUpperCase(value) {
          return value.toUpperCase();
      }
  }
}
</script>

<style lang="scss" scoped>

@import '../scss/variables.scss';
@import '../scss/mixins.scss';
@import '../scss/fonts.scss';

.app-design-template {
  background: #fff url('../assets/images/bannerNature.png') no-repeat;
  color: $textBlack;
  text-align: center;
  padding-top: 80px;

  .wrapper {
    @include wrapper;

    h2 {
      @include Montserrat;
      font-size: 1.875rem;
      line-height: 1.5rem;
      margin: 0;

      &::after {
        @include separationLine;
        background-color: $scrollLineColor;
        margin: 40px 47.5% 0px;
      }
    }
    h3 {
      @include KaushanScript;
      font-size: 1.5rem;
    }
    .imgs {
      position: relative;

      img:last-child {
        position: absolute;
        bottom: -90px;
        right: 205px;
      }
    }
  }
}
</style>
