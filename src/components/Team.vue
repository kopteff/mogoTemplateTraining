<template>
  <div class="app-team">
    <header>
      <div class="wrapper">
        <span class="left-arrow" v-on:click="nextQuote"></span>
        <div>
          <img :src="images.quotes" alt="quote">
        </div>
        <blockquote>
          <p>{{ quotes[0].content }}</p>
          <h4>{{ quotes[0].author }}</h4>
        </blockquote>
        <span class="right-arrow" v-on:click="nextQuote"></span>
      </div>
    </header>
    <main>
      <div class="wrapper">
        <h3>{{ headings.who }}</h3>
        <h2>{{ mainHeading | toUpperCase }}</h2>
        <p>{{ moreAbout }}</p>
        <ul>
          <li v-for="member in team">
            <div class="bgImg">
              <div class="bg-gradient">
                <button class="social"></button>
                <button class="social"></button>
                <button class="social"></button>
                <button class="social"></button>
              </div>
            </div>
            <h5>{{ member.name | toUpperCase }}</h5>
            <p>{{ member.job }}</p>
          </li>
        </ul>
      </div>
    </main>
    <footer>
      <div class="wrapper">
        <img :src="images.logos" alt="projects" />
      </div>
    </footer>
  </div>
</template>

<script>
import imgSpeech from '../assets/images/speech.png';
import imgLogos from '../assets/images/logos.png';

export default {
  data () {
    return {
      images: {quotes: imgSpeech, logos: imgLogos},
      quotes: [{content: '"Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. '+
                        'Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."',
               author: 'Jon Doe'},
              {content: '"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ' +
                        ' Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ' +
                        'ridiculus mus."', author: 'Jane Doe'}],
      quotesNum: 0,
      mainHeading: 'Meet our team',
      moreAbout: 'Lorem ipsum dolor sit amet, fuisset ponderum deterruisset an vel, qui an paulo iuvaret suavitate.'
      + 'Cu tale antiopam intellegam usu, sumo saepe petentium id vis. Quas quando duo an, facilisis voluptatum eos in.',
      team: [{name: 'Matthew Dix', job: 'Graphic Design'}, {name: 'Christopher Campbell',  job: 'Branding/UX design'},
             {name: 'Michael Fertig', job: 'Developer'}]
    }
  },
  computed: {
      headings() {
          return this.$store.state.headings;
      }
  },
  methods: {
    nextQuote() {
      const quoteContent = document.querySelector('.app-team blockquote p');
      const quoteAuthor = document.querySelector('.app-team blockquote h4');
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

.app-team {

  header {
    background-color: $bgGray;
    color: $textBlack;
    text-align: left;

    .wrapper {
      @include wrapper;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 70px 30px;

      div {
        width: 60px;
        padding: 30px;
        border: 3px solid $borderTurquoise;
      }
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
  main {
    background-color: $bgWhite;
    color: $textBlack;
    text-align: center;
    padding: 100px 0 110px;

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
        margin: 0 130px 90px;
        color: $textGray;
      }
      ul {
        margin: 0;
        padding: 0;
        list-style: none;

        li {
          display: inline-block;
          width: (100% /3) - 2.5%;
          margin: 0;
          margin-right: 30px;

          .bgImg {
            height: 470px;
            background: url('../assets/images/imgDix.png') no-repeat;

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
              flex-direction: row;
              justify-content: center;
              align-items: center;

              button {
                padding: 24px;
                background-color: $bgYellow;
                background-image: url('../assets/images/facebook3.png');
                background-repeat: no-repeat;
                background-position: center;
                border: 1px solid $borderOrange;

                &:hover {
                  background-color: $bgRed;
                  background-image: url('../assets/images/facebook.png');
                  border: 1px solid $borderRed;
                  cursor: pointer;
                }
                &:nth-child(2) {
                  background-image: url('../assets/images/twitter.png');

                  &:hover {
                    background-image: url('../assets/images/twitter3.png');
                  }
                }
                &:nth-child(3) {
                  background-image: url('../assets/images/pinterest.png');

                  &:hover {
                    background-image: url('../assets/images/pinterest3.png');
                  }
                }
                &:last-of-type {
                  background-image: url('../assets/images/instagram.png');

                  &:hover {
                    background-image: url('../assets/images/instagram3.png');
                  }
                }
              }
            }
          }
          &:nth-of-type(2) {
            .bgImg {
              background: url('../assets/images/imgChris.png') no-repeat;
            }
          }
          &:last-of-type {
            margin-right: 0px;
            .bgImg {
              background: url('../assets/images/imgMichael.png') no-repeat;
            }
          }
          p {
            margin: 0;
            margin-top: 15px;
            @include Roboto;
            font-size: .9375rem;
            color: $textGray;
          }
          h5 {
            margin: 0;
            margin-top: 30px;
            @include Montserrat;
            font-size: .875rem;
            color: $textBlack;
          }
        }
      }
    }
  }
  footer {
    background-color: $bgGray;
    padding: 50px 0;

    .wrapper {
      @include wrapper;
    }
  }
}
</style>
