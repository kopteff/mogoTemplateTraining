<template>
  <div class="app-footer">
    <div class="wrapper">
      <div class="footer-wrapper">
        <div class="footer-column">
          <h2 class="logo">{{ logo }}</h2>
          <p>{{ content }}</p>
          <span><b>{{ indicators.counter }}k </b>{{ indicators.name }}</span>
          <div class="social-links">
            <i>Follow Us</i>
            <ul>
              <li></li>
            </ul>
          </div>
          <div class="subscribe">
            <input type="email" placeholder="Your Email..."/>
            <button type="submit" name="button">{{ button | toUpperCase }}</button>
          </div>
        </div>
        <div class="footer-column">
          <h4>{{ headings.blogs | toUpperCase }}</h4>
          <ul class="blogs">
            <li v-for="blog in blogs">
              <img :src="blog.img" alt="blog.content">
              <div class="blog">
                <h5>{{ blog.content | toUpperCase }}</h5>
                <i>{{ blog.date }}</i>
              </div>
            </li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>{{ headings.photos | toUpperCase }}</h4>
          <div class="photos">
            <ul>
              <li v-for="photo in photos">
                <img :src="photo" alt="photo">
              </li>
            </ul>
            <span>View more photos</span>
          </div>
        </div>
      </div>
      <p>{{copyright}}<a href="https://www.behance.net/laaqiq" target="_blank">Laaqiq</a></p>
    </div>
  </div>
</template>

<script>
import imgBlogs1 from '../assets/images/blogs1.png';
import imgBlogs2 from '../assets/images/blogs2.png';
import imgBlogs3 from '../assets/images/blogs3.png';
//import instagram photos
import imgGal1 from '../assets/images/gal1.png';
import imgGal2 from '../assets/images/gal2.png';
import imgGal3  from '../assets/images/gal3.png';
import imgGal4  from '../assets/images/gal4.png';
import imgGal5  from '../assets/images/gal5.png';
import imgGal6  from '../assets/images/gal6.png';
import imgGal7  from '../assets/images/gal7.png';
import imgGal8  from '../assets/images/gal8.png';
import imgGal9  from '../assets/images/gal9.png';


export default {
  data () {
    return {
      logo: 'MoGo',
      headings: {blogs: 'Blogs', photos: 'Instagram'},
      content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ' +
               ' Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ',
      indicators: {name: 'followers', counter: 15},
      button: 'Subscribe',
      blogs: [{img: imgBlogs1, content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', date: 'Jan 9, 2016'},
              {img: imgBlogs2, content: 'Consectetuer adipiscing elit. Cum sociis natoque penatibus', date: 'Jan 9, 2016'},
              {img: imgBlogs3, content: 'Magnis dis parturient montes, nascetur ridiculus mus.', date: 'Jan 9, 2016'}],
      photos: [ imgGal1, imgGal2, imgGal3, imgGal4, imgGal5, imgGal6, imgGal7, imgGal8, imgGal9],
      copyright: '© 2016 MoGo free PSD template by '
    }
  },
  computed: {
      headings() {
          return this.$store.state.headings;
      },
      blogs() {
          return this.$store.state.blogs;
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

.app-footer {
  background-color: $bgFooter;

  .wrapper {
    @include wrapper;

    .footer-wrapper {
      padding: 70px;
      display: flex;
      width: 100%;

      .footer-column {
        display: flex;
        flex-direction: column;
        width: (100% / 3) - 3.33%;
        margin-right: 3.33%;
        color: $textBlack;

        &:first-child {
          width: 40% - 3.33%;
        }
        h2 {
          margin: 0;
          padding: 0;
          @include Montserrat;
          font-size: 2.875rem;
          font-weight: bold;
          color: $textGray3;
        }
        p {
          margin: 20px 0;
          @include Roboto;
          font-size: .9375rem;
          text-align: left;
          color: $textDarkGray;
        }
        span {
          padding: 0;
          padding-bottom: 20px;
          border-bottom: 1px solid $borderGray;
          @include Montserrat;
          font-size: .9375rem;
          color: $textLightBlack;
          font-weight: bold;

          b {
            font-size: 1.5rem;
          }
        }
        .social-links {
          margin: 20px 0px 40px;

          i {
            @include Roboto;
            font-size: .9375rem;
            color: $textDarkGray;
          }
          ul {
            margin: 0;
            padding: 0;

            li {

            }
          }
        }
        .subscribe {
          display: flex;

          input {
            padding: 10px 5px;
            margin: 0;
            border: 1px solid $borderGray2;
            @include Roboto;
            font-size: .9375rem;
            font-style: italic;
            color: $textGray3;
          }
          button {
            padding: 10px 30px;
            margin: 0;
            @include Montserrat;
            font-size: .875rem;
            color: $textWhite;
            background-color: $bgTurquoise;
            border: 1px solid $borderTurquoise2;

            &:hover {
              cursor: pointer;
            }
          }
        }
        h4 {
          margin: 10px 0;
          padding: 0;
          @include Montserrat;
          font-size: .875rem;
          color: $textLightBlack;
        }
        .blogs {
          margin: 0;
          padding: 0;

          li {
            color: $textLightBlack;
            display: flex;
            margin: 30px 0;

            img {
                float: left;
            }
            div {
              margin-left: 20px;
              display: flex;
              flex-direction: column;

              h5 {
                margin: 0;
                margin-bottom: auto;
                padding: 0;
                @include Montserrat;
                font-size: .75rem;
              }
              i {
                @include Roboto;
                font-size: .8125rem;
                color: $textDarkGray;
              }
            }
          }
        }
        .photos {
          margin: 30px 0;
          display: flex;
          flex-direction: column;

          ul {
            margin: 0;
            padding: 0;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;

            li {
              width: (80% / 3);
            }
          }
          span {
            margin-top: 20px;
            @include Roboto;
            font-size: .8125rem;
            font-style: italic;
            color: $textLightBlack;
            border: none;
          }
        }
      }
    }
    p {
      margin: 0;
      padding: 20px 0;
      border-top: $borderGray2;
      @include Montserrat;
      font-size: .875rem;
      color: $textLightBlack;
      text-align: center;

      a {
        @include Montserrat;
        font-size: .875rem;
        color: $textRed;
      }
    }
  }
}
</style>
