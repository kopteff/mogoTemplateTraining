<template>
  <div class="app-samples">
    <div class="wrapper">
      <h3>{{ headings.what }}</h3>
      <h2>{{ mainHeading | toUpperCase }}</h2>
      <p> {{ moreAbout }}</p>
    </div>
    <section class="gallery">
      <div class="bg-gradient" v-for="n in 7">
        <div class="img">
          <div class="hoverContent">
            <img src="../assets/images/pictureSmall.png" alt="picture">
            <h5>{{ hover.heading | toUpperCase }}</h5>
            <p>{{ hover.content }}</p>
          </div>
        </div>
      </div>
    </section>
    <div class="wrapper">
      <div class="quotes">
        <span class="left-arrow" v-on:click="nextQuote"></span>
        <div>
          <img :src="images.quote" alt="girl">
        </div>
        <blockquote>
          <p>{{ quotes[0].content }}</p>
          <h4>{{ quotes[0].author }}</h4>
        </blockquote>
        <span class="right-arrow" v-on:click="nextQuote"></span>
      </div>
    </div>
  </div>
</template>

<script>
import imgEllipseQuote from '../assets/images/Ellipse.png';

export default {
  data () {
    return {
      mainHeading: 'Some of our work',
      moreAbout: 'Lorem ipsum dolor sit amet, fuisset ponderum deterruisset an vel, qui an paulo iuvaret suavitate.'
      + 'Cu tale antiopam intellegam usu, sumo saepe petentium id vis. Quas quando duo an, facilisis voluptatum eos in.',
      quotes: [{content: '"Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. '+
                        'Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."',
               author: 'Joshua Earl'},
              {content: '"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ' +
                        ' Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ' +
                        'ridiculus mus."', author: 'Jane Doe'}],
      quotesNum: 0,
      images: {quote: imgEllipseQuote},
      hover: {heading: 'creatively designed', content: 'Lorem ipsum dolor'}
    }
  },
  computed: {
      headings() {
          return this.$store.state.headings;
      }
  },
  methods: {
    nextQuote() {
      const quoteContent = document.querySelector('.app-samples .quotes blockquote p');
      const quoteAuthor = document.querySelector('.app-samples .quotes blockquote h4');
      if (this.quotesNum === 0) {
        quoteContent.textContent = this.quotes[1].content;
        quoteAuthor.textContent = this.quotes[1].author;
        this.quotesNum = 1;
      } else if (this.quotesNum === 1) {
        quoteContent.textContent = this.quotes[0].content;
        quoteAuthor.textContent = this.quotes[0].author;
        this.quotesNum = 0;
      }
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

.app-samples {
  margin: 100px 0px 0px;

  .wrapper {
    @include wrapper;
    color: $textBlack;
    text-align: center;


    h2 {
      @include Montserrat;
      font-size: 1.875rem;

      &::after {
        @include separationLine;
        background-color: $scrollLineColor;
        margin: 40px 47.5% 42px;
      }
    }
    h3 {
      @include KaushanScript;
      font-size: 1.5rem;
      margin-bottom: 20px;
    }
    p {
      @include Roboto;
      font-size: .9375rem;
      margin: 0 130px 100px;
      color: $textGray;
    }
    .quotes {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 130px 30px;
      text-align: left;

      blockquote {
        width: 70%;

        p {
          margin: 0;
          @include Roboto;
          font-size: 1.5rem;
          color: $textDarkGray;
        }
        h4 {
          margin: 0;
          margin-top: 10px;
          @include KaushanScript;
          font-size: 1.5rem;
          color: $textBlack;
          padding-left: 80px;
          position: relative;

          &::before {
            @include separationLine;
            position: absolute;
            left: 0px;
            top: 1rem;
            background-color: $scrollLineColor;
          }
        }
      }
      span {
        @include arrow;
      }
      span.left-arrow {
        transform: rotate(315deg);

        &:hover {
          transform: scale(1.5) rotate(315deg);
        }
      }
      span.right-arrow {
        transform: rotate(135deg);

        &:hover {
          transform: scale(1.5) rotate(135deg);
        }
      }
    }
  }
  section {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    height: 780px;

    .bg-gradient {
      width: 25%;
      height: 390px;

      .img {
        width: 100%;
        height: 100%;

        .hoverContent {
          visibility: hidden;

          h5 {
            @include Montserrat;
            font-size: .875rem;
          }
          p {
            @include Roboto;
            font-size: .9375rem;
          }
        }
      }
      &:first-of-type {
        background: url('../assets/images/imgMansBack.png') no-repeat;
      }
      &:nth-of-type(2) {
        background: url('../assets/images/imgBridge.png') no-repeat;
      }
      &:nth-of-type(3) {
        background: url('../assets/images/imgArcRoof.png') no-repeat;
      }
      &:nth-of-type(4) {
        background: url('../assets/images/imgRoundBuilding.png') no-repeat;
      }
      &:nth-of-type(5){
        height: 780px;
        background: url('../assets/images/imgMedusa.png') no-repeat;
      }
      &:nth-of-type(6) {
        background: url('../assets/images/imgGlassCeiling.png') no-repeat;
      }
      &:last-of-type {
        background: url('../assets/images/imgSkyscraper.png') no-repeat;
      }
      &:hover {

        .img {
          @include imgHoverGradient;
          display: flex;
          justify-content: center;
          align-items: center;

          .hoverContent {
            visibility: visible;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
