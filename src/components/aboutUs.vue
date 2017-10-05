<template>
  <div class="app-about-us">
    <section>
      <div class="wrapper">
        <h3>{{ headings.what}}</h3>
        <h2>{{ mainHeading | toUpperCase }}</h2>
        <p>{{ moreAbout }}</p>
        <ul>
          <li v-for="data in hoverText">
            <div class="bg-gradient">
              <img :src="data.path" :alt="data.name"/>
              <span>{{ data.text | toUpperCase }}</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <aside>
      <div class="wrapper">
        <ul>
          <li v-for="indicator in indicators">
            <span>{{ indicator.indicator }}</span>
            <p>{{ indicator.name | toUpperCase }}</p>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script>
import imgUsers from '../assets/images/users.png';

export default {
    data () {
        return {
          mainHeading: 'Story about us',
          moreAbout: 'Lorem ipsum dolor sit amet, fuisset ponderum deterruisset an vel, qui an paulo iuvaret suavitate.'
          + 'Cu tale antiopam intellegam usu, sumo saepe petentium id vis. Quas quando duo an, facilisis voluptatum eos in.',
          indicators: [{name: 'web design projects', indicator: 42}, {name: 'happy client', indicator: 123},
                       {name: 'award winner', indicator: 15}, {name: 'cup of coffee', indicator: 99},
                       {name: 'members', indicator: 24}],
          hoverText: [{text: 'super team', path: imgUsers},
                      {text: 'lorem ipsum', path: imgUsers},
                      {text: 'lorem ipsum', path: imgUsers}]
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

.app-about-us {

  section {
    color: black;
    text-align: center;
    padding: 90px 0;

    .wrapper {
      @include wrapper;

      h3 {
        @include KaushanScript;
        font-size: 1.5rem;
        margin-bottom: 20px;
      }
      h2 {
        @include Montserrat;
        font-size: 1.875rem;

        &::after {
          @include separationLine;
          background-color: $scrollLineColor;
          margin: 40px 47.5% 42px;
        }
      }
      p {
        @include Roboto;
        font-size: .9375rem;
        margin: 0 130px 100px;
        color: $textGray;
      }
      ul {
        margin: 0;
        padding: 0 20px;
        list-style: none;

        li {
          display: inline-block;
          width: (100% / 3) - 2.5%;
          height: 250px;
          margin-right: 2.5%;
          background: url('../assets/images/imgComp.png') no-repeat;

          &:nth-of-type(2) {
            background: url('../assets/images/imgGoods.png') no-repeat;
          }
          &:last-of-type {
            background: url('../assets/images/imgWorkplace.png') no-repeat;
            margin-right: 0;
          }
          &:hover {
            @include imgTranslation;

            .bg-gradient {
              visibility: visible;
              @include imgHoverGradient;
            }
          }
          .bg-gradient {
            height: 100%;
            width: 100%;
            visibility: hidden;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            span {
              @include Montserrat;
              font-size: 1.125rem;
              margin-top: 5px;
            }
          }
        }
      }
    }
  }
  aside {
    background-color: $bgTurquoise;
    text-align: center;

    .wrapper {
      @include wrapper;

      ul {
        margin: 0;
        padding: 0;
        list-style: none;

        li {
          margin: 0;
          padding: 70px 5px 70px 0;
          display: inline-block;
          width: (100% / 5) - .83%;
          border-left: 2px solid $borderTurquoise;
          border-right: 2px solid $borderTurquoise;

          span {
            @include Montserrat;
            font-size: 4.5rem;
          }
          p {
            @include Montserrat;
            font-size: .875rem;
          }
        }
      }
    }
  }
}

</style>
