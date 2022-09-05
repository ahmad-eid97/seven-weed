<template>
  <div class="about-area ptb-100">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="about-play">
            <img src="/assets/images/about-img1.jpg" alt="About Images" />
            <div class="about-play-content">
              <span>Watch Our Intro Video</span>
              <h2>Perfect Solution for It Services!</h2>
              <div class="play-on-area">
                <CoolLightBox
                  :items="media"
                  :index="index"
                  @close="index = null"
                >
                </CoolLightBox>
                <a class="play-on popup-btn" @click="openGallery()">
                  <font-awesome-icon icon="fa-solid fa-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="about-content ml-25">
            <div class="section-title">
              <span class="sp-color2">15 Years of Experience</span>
              <h2>Right Partner for Software Innovation</h2>

              <p>
                Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
                consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio
                sit amet.
              </p>
            </div>
            <div class="row">
              <div class="col-lg-6 col-md-6">
                <ul class="about-list text-start">
                  <li>
                    <font-awesome-icon icon="fa-solid fa-circle-check" />Cost of
                    Supplies and Equipment
                  </li>
                  <li>
                    <font-awesome-icon icon="fa-solid fa-circle-check" />Bribed
                    Autor Nisi Elit Volume
                  </li>
                  <li>
                    <font-awesome-icon icon="fa-solid fa-circle-check" />Cost of
                    Supplies and Equipment
                  </li>
                </ul>
              </div>
              <div class="col-lg-6 col-md-6">
                <ul class="about-list about-list-2 text-start">
                  <li>
                    <font-awesome-icon icon="fa-solid fa-circle-check" />Change
                    the Volume of Expected
                  </li>
                  <li>
                    <font-awesome-icon icon="fa-solid fa-circle-check" />Easy to
                    Customer Services
                  </li>
                  <li>
                    <font-awesome-icon icon="fa-solid fa-circle-check" />Good
                    Quality Products Services
                  </li>
                </ul>
              </div>
            </div>
            <p class="about-content-text">
              Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
              consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit
              amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
              velit.
            </p>
          </div>
        </div>
      </div>
    </div>
    <ModalVideo
      channel="youtube"
      videoId="tUP5S4YdEJo"
      :isOpen.sync="videoIsOpen"
    />
  </div>
</template>

<script>
import ModalVideo from "../ModalVideo";
export default {
  name: "AppAboutExperiance",
  components: {
    ModalVideo,
  },
  data() {
    return {
      media: [
        {
          type: "youtube",
          thumb: "https://img.youtube.com/vi/WsptdUFthWI/hqdefault.jpg",
          id: "tUP5S4YdEJo",
        },
      ],
      videoIsOpen: false,
      index: "",
    };
  },
  methods: {
    openGallery() {
      this.videoIsOpen = !this.videoIsOpen;
    },
  },
};
</script>

<style>
.about-area {
  padding-top: 100px;
  padding-bottom: 100px;
}
.about-play {
  position: relative;
  border-radius: 0;
}
.about-play img {
  border-radius: 0;
}
.about-play .about-play-content {
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  max-width: 470px;
  background-color: #25252538;
  border-bottom-left-radius: 0px;
  border-top-right-radius: 70%;
  padding: 100px 40px 70px 25px;
  text-align: start;
}
.about-play .about-play-content::before {
  content: "";
  position: absolute;
  z-index: -1;
  bottom: 0;
  right: 30px;
  width: 91.7%;
  height: 90.1%;
  background-color: var(--main-color);
  border-bottom-left-radius: 0;
  border-top-right-radius: 70%;
}
.about-play .about-play-content span {
  color: #fff;
}
.about-play .about-play-content h2 {
  color: #fff;
  font-size: 35px;
  max-width: 300px;
  margin-bottom: 0;
}
.about-play .about-play-content .play-on-area {
  position: absolute;
  z-index: 1;
  bottom: 175px;
  left: 200px;
}
.about-play .about-play-content .play-on-area .play-on {
  width: 80px;
  height: 80px;
  color: var(--main-color);
  background-color: #fff;
  text-align: center;
  font-size: 40px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.about-area .section-title {
  margin: 0 auto;
  padding: 0;
  position: relative;
  text-align: start;
}
.about-area .section-title span {
  margin-bottom: 8px;
  font-weight: 600;
  display: block;
  color: var(--main-color);
}
.about-area .section-title h2 {
  color: #212934;
  font-size: 35px;
  font-weight: 800;
  letter-spacing: -1px;
  line-height: 42px;
  text-align: left;
  margin-top: 10px;
  margin-right: 0px;
  margin-bottom: 15px;
  margin-left: 0px;
}
.about-content .seprator img {
  width: 70px;
  margin-top: 5px;
  margin-bottom: 20px;
}
.about-area .section-title p {
  padding-top: 10px;
  margin-bottom: 0;
  max-width: 530px;
  color: #444;
  margin-bottom: 20px;
}
.about-area .about-content .about-list {
  list-style: none;
  margin: 20px 0 0;
  padding: 0;
  text-align: start !important;
}
.about-area .about-content .about-list li {
  display: block;
  color: #252525;
  margin-bottom: 10px;
  font-weight: 500;
  -webkit-transition: 0.7s;
  transition: 0.7s;
  padding-left: 35px;
  position: relative;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  font-size: 15px;
}
.about-area .about-content .about-list li svg {
  font-size: 26px;
  color: var(--main-color);
  position: absolute;
  left: 0;
  top: -2px;
  margin-right: 5px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}
.about-area .about-content .about-content-text {
  margin-top: 20px;
  margin-bottom: 0;
}
</style>
