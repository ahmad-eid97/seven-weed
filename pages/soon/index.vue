<template>
  <div class="coming-soon-area">
    <div class="d-table">
      <div class="d-table-cell">
        <div class="container">
          <div class="coming-soon-content">
            <h1>Coming Soon</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices.
            </p>

            <div id="timer" :data-date="new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000)">
              <div id="days">{{ countDownDate.days }} <span>Days</span></div>
              <div id="hours">{{ countDownDate.hours }} <span>Hours</span></div>
              <div id="minutes">{{ countDownDate.minutes }} <span>Minutes</span></div>
              <div id="seconds">{{ countDownDate.seconds }} <span>Seconds</span></div>
            </div>

            <form
              class="newsletter-form"
              data-toggle="validator"
              novalidate="true"
            >
              <input
                type="email"
                class="input-newsletter"
                placeholder="Enter email address"
                name="EMAIL"
                required=""
                autocomplete="off"
              />
              <button
                type="submit"
                class="btn"
                style="pointer-events: all; cursor: pointer"
              >
                Notify Me
              </button>
              <div id="validator-newsletter" class="form-result"></div>
            </form>
            <ul class="header-content-right">
              <li>
                <a href="https://www.facebook.com/" target="_blank">
                  <font-awesome-icon icon="fa-brands fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/?lang=en" target="_blank">
                  <font-awesome-icon icon="fa-brands fa-twitter" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/" target="_blank">
                  <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <font-awesome-icon icon="fa-brands fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Soon",
  data() {
    return {
      countDownDate: {
        time: 0,
        days: 0,
        hours: 0,
        seconds: 0,
        minutes: 0
      }
    }
  },
  mounted() {
    var timer = document.getElementById("timer");

    setInterval(() => {
      this.countDownDate.time = new Date(timer.getAttribute('data-date')).getTime();

      var now = new Date().getTime();
      var distance = this.countDownDate.time - now;
      this.countDownDate['days'] = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.countDownDate['hours'] = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.countDownDate['minutes'] = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.countDownDate['seconds'] = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        this.countDownDate['days'] = 0;
        this.countDownDate['hours'] = 0;
        this.countDownDate['minutes'] = 0;
        this.countDownDate['seconds'] = 0;
      }
    }, 1000);
  }
};
</script>

<style lang="scss">
.coming-soon-area {
  position: relative;
  height: 100vh;
  overflow: hidden;
  background-color: #fff;
}
.d-table {
  width: 100%;
  height: 100%;
}
.d-table-cell {
  display: table-cell;
  vertical-align: middle;
}
@media only screen and (min-width: 1200px) {
  .container {
    max-width: 1170px;
  }
}
.coming-soon-area .coming-soon-content {
  text-align: center;
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 2;
  padding: 50px 30px;
  border-radius: 0px;
  background-color: #f8f8f8;
  border: 3px solid var(--main-color);
  border-radius: 15px;
}
.coming-soon-area .coming-soon-content h1 {
  margin-bottom: 0;
  color: #212934;
  font-size: 50px;
}

@include xs {
  .coming-soon-area .coming-soon-content h1 {
    font-size: 30px;
  }
}

.coming-soon-area .coming-soon-content p {
  font-size: 16px;
  max-width: 600px;
  margin-top: 15px;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  color: #444;
}
.coming-soon-area .coming-soon-content #timer {
  margin-top: 40px;
  display: block;
}

#days {
  margin-bottom: 10px !important;
}

.coming-soon-area .coming-soon-content #timer div:first-child {
  margin-left: 0;
}
.coming-soon-area .coming-soon-content #timer div {
  display: inline-block;
  color: #fff;
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 10px;
  margin-left: 10px;
  font-size: 35px;
  font-weight: 700;
  background-color: var(--main-color);
  border-radius: 10px;
}

@include xs {
  .coming-soon-area .coming-soon-content #timer div {
    margin: 5px 10px !important;
    margin-left: 0px !important;
  }
}

.coming-soon-area .coming-soon-content #timer div span {
  display: block;
  font-size: 10px;
}
.coming-soon-area .coming-soon-content .newsletter-form {
  position: relative;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
}
.coming-soon-area .coming-soon-content .newsletter-form .input-newsletter {
  display: block;
  width: 100%;
  height: 60px;
  border: none;
  background-color: #fff;
  padding-left: 15px;
  color: #fff;
  outline: 0;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  border-radius: 0;
  border: 1px solid var(--main-color);
  color: #5d5d5d;
}
.coming-soon-area .coming-soon-content ul {
  list-style: none;
  margin-top: 30px;
  padding: 0;
}
.coming-soon-area .coming-soon-content ul li {
  display: inline-block;
  width: 45px;
  height: 45px;
  line-height: 50px;
  font-size: 18px;
  background-color: var(--main-color);
  color: #fff;
  border-radius: 50px;
  margin-right: 10px;
}
.coming-soon-area .coming-soon-content ul li a {
  color: #fff;
}
.coming-soon-area .coming-soon-content .newsletter-form button {
  position: absolute;
  right: 0;
  top: 0;
  height: 60px;
  padding: 0 30px;
  text-transform: uppercase;
  outline: 0;
  color: #fff;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
}
.coming-soon-area .btn,
.coming-soon-area .btn:hover {
  background-color: var(--main-color);
  border-radius: 0;
  color: #fff;
  padding: 10px 16px;
  font-weight: bold;
  border: none;
}
</style>
