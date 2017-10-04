<template>
  <div class="app-service-description">
    <div class="wrapper">
      <h3>{{ headings.service }}</h3>
      <h2>{{ mainHeading | toUpperCase }}</h2>
      <p>{{ moreAbout }}</p>
      <div class="service">
        <img src="../assets/images/imgMan.png" alt="Man with photo" width="570px" height="380px;">
        <section>
          <ul>
            <li v-for="service in services">
              <div>
                <img :src="service.path" alt="" />
                <h4>{{ service.name | toUpperCase }}</h4>
                <span v-on:click.target="makeActive"></span>
              </div>
              <article class="serviceDescription">
                <p>{{ service.description }}</p>
              </article>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mainHeading: 'what we do',
      moreAbout: 'Lorem ipsum dolor sit amet, fuisset ponderum deterruisset an vel, qui an paulo iuvaret suavitate.'
      + 'Cu tale antiopam intellegam usu, sumo saepe petentium id vis. Quas quando duo an, facilisis voluptatum eos in.',
      services: [{name: 'photography', description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.' +
                  'Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. ' +
                  'Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. '+
                  'Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. '+
                  'Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.', path: '../assets/images/picture.png'},
                 {name: 'creativity', description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.' +
                        'Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. ' +
                        'Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. '+
                        'Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.', path: '../assets/images/equalizer.png'},
                 {name: 'web design', description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.' +
                        'Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. ' +
                        'Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. '+
                        'Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.', path: '../assets/images/bullsEye.png'}],
      active: 1

    }
  },
  computed: {
      headings() {
          return this.$store.state.headings;
      }
  },
  methods: {
      makeActive(el) {
        if (el.target.classList.value === 'active') {
          el.target.classList.value = '';
          el.target.parentElement.parentElement.lastChild.style.display = 'none';
          this.active--;
        }
        else if (el.target.classList.value === '' && this.active <= 0) {
          el.target.classList.add('active');
          el.target.parentElement.parentElement.lastChild.style.display = 'block';
          this.active++;
        }
      }
  },
  filters: {
      toUpperCase(value) {
          return value.toUpperCase();
      }
  },
  mounted() {
    const firstServiceSpan = document.querySelector('.app-service-description .service section li span');
    const firstServiceArticle = document.querySelector('.app-service-description .service section li article');

    firstServiceSpan.classList.add('active');
    firstServiceArticle.style.display = 'block';
  }
}
</script>

<style lang="scss" scoped>

@import '../scss/variables.scss';
@import '../scss/mixins.scss';
@import '../scss/fonts.scss';

.app-service-description {
  color: $textBlack;
  text-align: center;
  padding: 100px 0 120px;

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
        margin: 40px 47.5% 42px;
      }
    }
    h3 {
      @include KaushanScript;
      font-size: 1.5rem;
    }
    p {
      @include Roboto;
      font-size: .9375rem;
      color: $textGray;
      margin: 0 130px;
    }
    .service {
      margin: 95px 10px 0;
      display: flex;
      flex-direction: row;

      img {
        margin-right: 30px;
        width: 50%;
      }
      section {
        width: 50%;

        ul {
          margin: 0;
          padding: 0;

          li {
            margin-bottom: 10px;

            div {
              padding: 15px;
              border: 1px solid $borderGray;
              height: 45px;

              img {
                display: inline-block;
                float: left;
              }
              h4 {
                display: inline-block;
                float: left;
                @include Montserrat;
                font-size: .9375rem;
                color: $textBlack;
                margin: 0 10px;
                padding: 0;
                line-height: 3rem;
              }
              span {
                display: inline-block;
                float: right;
                position: relative;
                top: 10px;
                height: 10px;
                width: 10px;
                border: 3px solid $borderTurquoise;
                border-right: 3px solid transparent;
                border-bottom: 3px solid transparent;
                border-radius: 5px;
                transform: rotate(225deg);
                cursor: pointer;
                transition-property: all;
                transition-duration: .5s;

                &.active {
                  top: 20px;
                  height: 10px;
                  width: 10px;
                  border: 3px solid $borderTurquoise;
                  border-right: 3px solid transparent;
                  border-bottom: 3px solid transparent;
                  border-radius: 5px;
                  transform: rotate(45deg);
                  transition-property: all;
                  transition-duration: .5s;
                }
              }
            }
            article {
              display: none;
              border: 1px solid $borderTurquoise;
              border-top: 0px solid transparent;
              height: 89px;
              padding: 20px;

              p {
                color: $textGray;
                text-align: left;
                overflow: auto;
                margin: 0;
                padding: 0;
                padding-right: 20px;
                width: 95%;
                height: 100%;
                @include customScrollBar;
              }
            }
          }
        }
      }
    }
  }
}
</style>
