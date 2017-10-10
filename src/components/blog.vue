<template>
  <div class="app-blog">
    <div class="wrapper">
      <h3>{{ headings.stories }}</h3>
      <h2>{{ mainHeading | toUpperCase }}</h2>
      <ul>
        <li v-for="blog in blogs">
          <img :src="blog.img" :alt="blog.heading">
          <div class="date">
            <span>{{ blog.date.day }}</span>
            <i>{{ blog.date.month }}</i>
          </div>
          <h4>{{ blog.heading | toUpperCase }}</h4>
          <p>{{ blog.content }}</p>
          <div class="views">
            <img src="../assets/images/view.png" alt="views">
            <span>{{ blog.views }}</span>
            <img src="../assets/images/speechBubble.png" alt="comments">
            <span>{{ blog.comments }}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="map">
      <img src="../assets/images/mapPin.png" alt="pin">
      <h2>{{ mapHeading | toUpperCase }}</h2>
    </div>
  </div>
</template>

<script>
import imgGirl from '../assets/images/imgGirl.png';
import imgLaptop from '../assets/images/imgLaptop.png';
import imgTablet from '../assets/images/imgTablet.png';

export default {
  data () {
    return {
      mainHeading: 'Latest blog',
      blogs: [{heading: 'Lorem ipsum dolor sit amet', content: 'Consectetuer adipiscing elit. Aenean commodo ligula ' +
                        'eget dolor. Aenean massa.', date: {month: 'Jan', day: '15'}, views: 542, comments: 17,
                        img: imgGirl},
              {heading: ' Donec pede justo, fringilla vel', content: 'Cum sociis natoque penatibus et magnis dis parturient ' +
              ' montes, nascetur ridiculus mus. ', date: {month: 'Jan', day: '14'}, views: 992, comments: 42, img: imgLaptop},
              {heading: 'Aenean vulputate eleifend tellus', content: 'Etiam sit amet orci eget eros faucibus tincidunt.',
               date: {month: 'Jan', day: '12'}, views: 1560, comments: 98, img: imgTablet}],
      mapHeading: 'open map'
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

.app-blog {
  color: $textBlack;
  text-align: center;

  .wrapper {
    padding: 110px 0;
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
      margin: 0;
      padding: 0 10px;
      display: flex;
      color: $textBlack;

      li {
        position: relative;
        display: flex;
        flex-direction: column;
        text-align: left;
        width: (100% / 3) - 2.5%;
        margin-right: 2.5%;

        .date {
          position: absolute;
          top: 160px;
          left: -3%;
          width: 60px;
          height: 70px;
          background-color: $bgTurquoise;
          text-align: center;
          @include Montserrat;
          color: $textWhite;
          font-weight: bold;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-content: center;

          span {
            font-size: 2rem;
          }
          i {
            @include Roboto;
            font-weight: normal;
            font-size: .875rem;
          }
        }
        h4 {
          margin: 20px 0;
          padding: 0;
          @include Montserrat;
          font-size: .875rem;
        }
        p {
          margin: 0;
          margin-bottom: auto;
          padding: 0;
          padding-bottom: 20px;
          @include Roboto;
          font-size: .9375;
          color: $textDarkGray;
        }
        .views {
          margin: 0;
          padding-top: 20px;
          border-top: 1px solid $borderGray;

          span {
            @include Roboto;
            font-size: .9375;
            color: $textDarkGray;
            margin-right: 20px;
          }
        }
      }
    }
  }
  .map {
    padding: 55px;
    background: url('../assets/images/bannerMap.png') no-repeat;

    h2 {
      margin: 0;
      margin-top: 10px;
      padding: 0;
      @include Montserrat;
      font-size: 1.5rem;
      color: $textRed;

      &::after {
        @include separationLine;
        background-color: $scrollLineColor;
        margin: 19px 48.5% 0;
      }
    }
  }
}
</style>
