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
          <h4>{{ headings.blogs }}</h4>
          <ul>
            <li></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>{{ headings.photos }}</h4>
          <ul>
            <li></li>
          </ul>
          <span>View more photos</span>
        </div>
      </div>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      logo: 'MoGo',
      headings: {blogs: 'Blogs', photos: 'Instagram'},
      content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ' +
               ' Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ',
      indicators: {name: 'followers', counter: 15},
      button: 'Subscribe'
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
        color: $textBlack;

        h2 {
          margin: 0;
          padding: 0;
        }
        p {

        }
        span {

          b {

          }
        }
        .social-links {

          i {

          }
          ul {
            margin: 0;
            padding: 0;

            li {

            }
          }
        }
        .subscribe {

        }
        h4 {

        }
        ul {
          margin: 0;
          padding: 0;

          li {

          }
        }
      }
    }
    p {
      margin: 0;
    }
  }
}
</style>
