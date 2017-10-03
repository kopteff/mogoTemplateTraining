<template>
  <div class="app-service-list">
    <div class="wrapper">
      <h3>{{ headings.with }}</h3>
      <h2>{{ mainHeading | toUpperCase }}</h2>
      <ul>
        <li v-for="service in services">
          <img :src="service.imagePath" :alt="service.name" />
          <h4>{{ service.name | toUpperCase}}</h4>
          <p> {{ service.description }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
          mainHeading: 'amazing services',
          services: [{name: 'photography', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.' +
                            ' Aenean commodo ligula eget dolor. Aenean massa. ', imagePath: '/dist/alarm.png'},
                     {name: 'web design', description: 'Cum sociis natoque penatibus et magnis dis parturient montes, ' +
                            ' nascetur ridiculus mus. ', imagePath: '/dist/lineGraph.png'},
                     {name: 'creativity', description: 'Donec quam felis, ultricies nec, pellentesque eu, ' +
                            ' pretium quis, sem. ', imagePath: '/dist/compOk.png'},
                     {name: 'SEO', description: 'Nulla consequat massa quis enim. Donec pede justo, ' +
                            ' fringilla vel, aliquet nec, vulputate eget, arcu.', imagePath: '/dist/book.png'},
                     {name: 'CSS/HTML', description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
                            imagePath: '/dist/home.png'},
                     {name: 'digital', description: 'Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
                            imagePath: '/dist/imageQ.png'}]
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

.app-service-list {
  color: $textBlack;
  text-align: center;
  padding: 100px 0;

  .wrapper {
    @include wrapper;

    h3 {
      @include KaushanScript;
      font-size: 1.5rem;
    }
    h2 {
      @include Montserrat;
      font-size: 1.875rem;

      &::after {
        @include separationLine;
        background-color: $scrollLineColor;
        margin: 40px 47.5% 57px;
      }
    }
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      color: $textBlack;

      li {
        width: (100% / 3) - 7.5%;
        margin-left: 7.5%;
        text-align: left;
        position: relative;

        h4 {
          @include Montserrat;
          font-size: .875rem;
        }
        p {
          @include Roboto;
          font-size: .9375rem;
          color: $textGray;
        }
        img {
          position: absolute;
          top: 25px;
          left: -60px;
        }
      }
    }
  }
}
</style>
