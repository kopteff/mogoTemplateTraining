<template>
  <div class="app-clients">
    <div class="wrapper">
      <h3>{{ headings.clients }}</h3>
      <h2>{{ mainHeading | toUpperCase }}</h2>
      <ul>
        <li v-for="client in clients">
          <img :src="client.path" :alt="client.name">
          <div class="description">
            <h4>{{ client.name | toUpperCase }}</h4>
            <i>{{ client.job }}</i>
            <p>{{ client.description }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import imgEllipseDix from '../assets/images/EllipseDix.png';
import imgEllipseNick from '../assets/images/EllipseNick.png';
import imgEllipseJaelynn from '../assets/images/EllipseJaelynn.png';
import imgEllipseMike from '../assets/images/EllipseMike.png';

export default {
  data () {
    return {
      mainHeading: 'What people say',
      clients: [{name: 'Matthew Dix', job: 'Graphic Design', description: 'Lorem ipsum dolor sit amet, ' +
                ' consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                path: imgEllipseDix},
                {name: 'Nick Karvounis', job: 'Graphic Design', description: 'Lorem ipsum dolor sit amet, ' +
                ' consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                path: imgEllipseNick},
                {name: 'Jaelynn Castillo', job: 'Graphic Design', description: 'Lorem ipsum dolor sit amet, ' +
                ' consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                path: imgEllipseJaelynn},
                {name: 'Mike Petrucci', job: 'Graphic Design', description: 'Lorem ipsum dolor sit amet, ' +
                ' consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                path: imgEllipseMike}]
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

.app-clients {
  color: $textBlack;
  text-align: center;
  background: url('../assets/images/bannerRock.png') no-repeat;
  padding: 100px 0 45px;

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
    ul {
      color: $textBlack;
      text-align: left;
      padding: 0px 50px;
      display: flex;
      flex-wrap: wrap;

      li {
        display: flex;
        align-items: flex-start;
        width: 50%;
        margin-bottom: 70px;

        img {
          margin-left: 30px;
          margin-right: 30px;
        }
        div {
          width: 70%;

          h4 {
            @include Montserrat;
            font-size: .875rem;
            margin: 10px 0;
          }
          i {
            @include Roboto;
            font-size: .9375rem;
            color: $textGray;

            &::after {
              @include separationLine;
              background-color: $scrollLineColor;
              margin: 20px 0 22px;
            }
          }
          p {
            @include Roboto;
            font-size: .9375rem;
            color: $textGray2;
          }
        }
      }
    }
  }
}
</style>
