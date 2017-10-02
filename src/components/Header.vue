<template>
  <div class="app-header">
    <div class="wrapper">
      <header>
        <h1 class="logo">{{ logo }}</h1>
        <nav>
          <ul>
            <li v-for="nav in navigation">{{ nav | toUpperCase }}</li>
            <li>
              <a href="#">
                <img src="../assets/images/shoppingCart.png" alt="Shopping Cart" width="16px" height="14px">
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../assets/images/magnifyingGlass.png" alt="Magnifying Glass" width="16px" height="14px">
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h3>{{ templateHeading }}</h3>
        <h2> {{ greeting[0] | toUpperCase }}</h2>
        <h2> {{ greeting[1] | toUpperCase }}</h2>
        <button>{{ button.learnMore | toUpperCase }}</button>
      </main>
      <footer>
        <ul>
          <li v-for="(val, key) in navigationBar">
            <span>{{ key | toNeededNumber }} </span> {{ val | toUpperCase }}
            <div class="scrollLine" v-if="isKey(key)"></div>
          </li>
        </ul>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
      return {
        logo: 'MoGo',
        greeting: ['Welcome', 'to MoGo'],
        templateHeading: 'Creative Template',
        button: {
          learnMore: 'Learn More'
        }
      }
  },
  computed: {
      navigation() {
          return this.$store.state.navigation;
      },
      navigationBar() {
          return this.$store.state.navigationBar;
      }
  },
  methods: {
      isKey(key) {
        if (+key === 0) {
          return true;
        }
        return false;
      }
  },
  filters: {
      toUpperCase(value) {
          return value.toUpperCase();
      },
      toNeededNumber(value) {
          return `0${value + 1}`;
      }
    }
}
</script>

<style lang="scss" scoped>

@import '../scss/variables.scss';
@import '../scss/mixins.scss';
@import '../scss/fonts.scss';

.app-header {
  background: url('../assets/images/bannerEagle2.png') no-repeat;

  .wrapper {
    @include wrapper;

    header {
      display: flex;
      justify-content: space-between;

      h1 {
        @include Montserrat;
        font-size: 1.875rem;
        color: $headerColor;
        margin: 25px 10px 10px;
      }

      nav {
        width: 52%;
        margin: 25px 10px 10px;

        ul {
          display: flex;
          justify-content: space-between;

          li {
            display: inline-block;
            margin-right: 5%;
            @include Montserrat;
            font-size: 0.875rem;
            line-height: 2.75rem;
            cursor: pointer;

            &::after {
              content: "";
              display: block;
              height: 2px;
              width: 0%;
              background-color: $headerHoverColor;
              transition: width .3s ease-in-out;
            }
            &:hover,
            &:active {
              color: $headerHoverColor;

              &::after {
                width: 100%;
              }
            }
          }
        }
      }
    }
    main {
      margin: 130px 0 0;
      text-align: center;

      h3 {
        @include KaushanScript;
        font-size: 4.5rem;
        text-align: center;
        margin: 0;
        margin-bottom: 30px;
      }
      h2 {
        @include Montserrat;
        font-size: 9.375rem;
        text-align: center;
        margin: 0;
        line-height: 8.775rem;
        position: relative;

        &:last-of-type {

          &::after {
            content: "";
            display: block;
            height: 3px;
            width: 60px;
            background-color: $headerColor;
            position: absolute;
            left: 47.5%;
            top: 140%;
          }
        }
      }
      button {
        margin: 130px auto 127px;
        height: 40px;
        width: 160px;
        border: 3px solid $headerColor;
        color: #fff;
        background-color: transparent;
        text-align: center;
        cursor: pointer;

        &:hover,
        &:active {
          border: 3px solid $headerHoverColor;
          color: $headerHoverColor;
          text-shadow: 1px 1px 2px black;
          box-shadow: 0px 1px 2px darken($headerHoverColor, 30deg);
        }
      }
    }
    footer {
      min-width: 100%;

      ul {
        margin: 0;
        padding: 0;
        min-width: 100%;

        li {
          display: inline-block;
          width: (100% / 4) - 2%;
          margin-bottom: 25px;
          margin-right: 2%;
          color: $headerColor;
          font-size: 1rem;
          @include Montserrat;
          position: relative;

          span {
            font-size: 1.25rem;
            @include Montserrat;
          }

          &::before {
            content: "";
            display: block;
            height: 3px;
            width: 100%;
            background-color: $headerColor;
          }
          .scrollLine {
            display: block;
            position: absolute;
            top: 0;
            height: 3px;
            width: 25%;
            background-color: $scrollLineColor;
          }
        }
      }
    }
  }
}

</style>
