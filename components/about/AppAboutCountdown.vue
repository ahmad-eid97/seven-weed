<template>
  <section class="pb-70 pt-100 counter-area">
    <div class="container">
      <div class="section-title text-center">
        <span class="sp-color2">Numbers Are Talking</span>
        <h2>Let’s Check Our Business Growth and Success Story</h2>

        <p>
          Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat
          ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh
          vulputate cursus a sit amet mauris Morbi accumsan ipsum velit.
        </p>
      </div>
      <div class="row pt-45">
        <div class="col-sm-6 col-lg-3 col-md-3">
          <div class="counter-another-content">
            <font-awesome-icon icon="fa-solid fa-laptop-code" />
            <div>
              <h3>
                <VueJsCounter
                  class="d-inline"
                  :startVal="0"
                  :endVal="4205"
                  separator=","
                ></VueJsCounter
                >+
              </h3>
              <span>Delivered Goods</span>
            </div>
          </div>
        </div>

        <div class="col-sm-6 col-lg-3 col-md-3">
          <div class="counter-another-content">
            <font-awesome-icon icon="fa-solid fa-person-dots-from-line" />
            <div>
              <h3>
                <VueJsCounter
                  class="d-inline"
                  :startVal="0"
                  :endVal="245"
                  separator=","
                ></VueJsCounter
                >+
              </h3>
              <span>IT Consulting</span>
            </div>
          </div>
        </div>

        <div class="col-sm-6 col-lg-3 col-md-3">
          <div class="counter-another-content">
            <font-awesome-icon icon="fa-solid fa-shuttle-space" />
            <div>
              <h3>
                <VueJsCounter
                  class="d-inline"
                  :startVal="0"
                  :endVal="3550"
                  separator=","
                ></VueJsCounter
                >+
              </h3>
              <span>Fully Launched</span>
            </div>
          </div>
        </div>

        <div class="col-sm-6 col-lg-3 col-md-3">
          <div class="counter-another-content">
            <font-awesome-icon icon="fa-solid fa-folder-open" />
            <div>
              <h3>
                <VueJsCounter
                  class="d-inline"
                  :startVal="0"
                  :endVal="6545"
                  separator=","
                ></VueJsCounter
                >+
              </h3>
              <span>Project Completed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueJsCounter from "vue-count-to";
export default {
  name: "AppHomeCountdown",
  components: {
    VueJsCounter,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss">
.counter-area .section-title {
  margin: 0;
}
.counter-area .section-title span {
  margin-bottom: 8px;
  font-weight: 600;
  display: block;
}
.counter-area .sp-color2 {
  color: var(--main-color);
}
.counter-area .section-title h2 {
  max-width: 600px;
  color: #212934;
  font-size: 35px;
  font-weight: 800;
  letter-spacing: -1px;
  line-height: 42px;
  text-align: left;
  margin-top: 10px;
  margin-right: auto;
  margin-bottom: 15px;
  margin-left: auto;
  text-align: center;
}
.counter-area .seprator img {
  width: 70px;
  margin-top: 5px;
  margin-bottom: 20px;
}
.counter-area .section-title p {
  margin-left: auto;
  margin-right: auto;
  max-width: 720px;
}
.section-title p {
  padding-top: 10px;
  margin-bottom: 0;
  max-width: 530px;
  color: #444;
}
.pt-45 {
  padding-top: 45px;
}
.counter-another-content {
  margin-bottom: 25px;
  padding-left: 90px;
  position: relative;
}
.counter-another-content h3 {
  color: var(--main-color);
  font-size: 35px;
  line-height: 1;
  margin-bottom: 8px;
}
.counter-another-content h3 span {
  color: var(--main-color);
  font-size: 35px;
  line-height: 1;
  margin-bottom: 8px;
}
.counter-another-content span {
  font-size: 17px;
  color: #444;
  margin-bottom: 0;
  font-weight: 600;
}
.counter-another-content svg {
  position: absolute;
  line-height: 1;
  font-size: 60px;
  top: 3px;
  left: 0;
  color: var(--main-color);
}
@include md {
  .counter-another-content {
    padding: 0 !important;
  }
  .counter-another-content h3 span {
    font-size: 25px;
  }
  .counter-another-content svg {
    font-size: 50px;
    position: relative;
  }
}

@include sm {
  .counter-another-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 0 !important;
  }
  .counter-another-content h3 span {
    font-size: 27px;
  }
  .counter-another-content svg {
    font-size: 50px;
    position: relative;
  }
}

@include xs {
  .counter-another-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 0 !important;
  }
  .counter-another-content h3 span {
    font-size: 20px;
  }
  .counter-another-content svg {
    font-size: 40px;
    position: relative;
  }
}
</style>
