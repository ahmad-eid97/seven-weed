<template>
    <div class="side-bar-widget">
        <h3 class="title">Latest Blog</h3>
        <div class="widget-popular-post">
          <article class="item">
            <a href="#" target="_blank" class="blog-thumb">
              <img class="full-image cover bg1" role="img" src="/assets/images/blog-details.jpg">
            </a>
            <div class="info">
              <h4 class="title-text">
                <a href="#" target="_blank">
                10 Ways to Get Efficient Result &amp; Benefits
                </a>
              </h4>
              <p>Nov 05, 2020</p>
            </div>
          </article>
          <article class="item">
            <a href="#" target="_blank" class="blog-thumb">
              <img class="full-image cover bg1" role="img" src="/assets/images/blog-img2.jpg">
            </a>
            <div class="info">
              <h4 class="title-text">
                <a href="#" target="_blank">
                  New Device Invention for Digital Platform
                </a>
              </h4>
              <p>13 October, 2020</p>
            </div>
          </article>
          <article class="item">
            <a href="#" target="_blank" class="blog-thumb">
              <img class="full-image cover bg1" role="img" src="/assets/images/blog-img3.jpg">
            </a>
            <div class="info">
              <h4 class="title-text">
                <a href="#" target="_blank">
                  Idea For New 5 App Design
                </a>
              </h4>
              <p>17 October, 2020</p>
            </div>
          </article>
          <article class="item">
            <a href="#" target="_blank" class="blog-thumb">
              <img class="full-image cover bg1" role="img" src="/assets/images/blog-img1.jpg">
            </a>
            <div class="info">
              <h4 class="title-text">
                <a href="#" target="_blank">
                  Product Idea Solution For New Generation
                </a>
              </h4>
              <p>17 October, 2020</p>
            </div>
          </article>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppBlogSideBlogs'

}
</script>

<style>
.side-bar-widget .title {
  font-size: 20px;
  color: #212529;
  padding: 0;
  font-weight: 600;
  position: relative;
  display: inline-block;
  margin-bottom: 10px;
  background-color: transparent;
  width: 100%;
}
.side-bar-widget .widget-popular-post {
  position: relative;
  overflow: hidden;
  padding: 0;
  margin-top: 10px;
  margin-bottom: 20px;
}
.side-bar-widget .widget-popular-post .item {
  overflow: hidden;
  margin-bottom: 13px;
  padding-bottom: 8px;
  border-bottom: 1px solid #e2e2e2;
}
.side-bar-widget .widget-popular-post .item .blog-thumb {
  float: left;
  overflow: hidden;
  position: relative;
  margin-right: 15px;
}
.side-bar-widget .widget-popular-post .item .blog-thumb .full-image {
  width: 80px;
  height: 80px;
  display: inline-block;
  background-size: cover !important;
  background-repeat: no-repeat;
  background-position: center center !important;
  position: relative;
  background-color: transparent;
  border-radius: 12px;
}
.side-bar-widget .widget-popular-post .item .info {
  overflow: hidden;
  padding: 0;
}
.side-bar-widget .widget-popular-post .item .info .title-text {
  margin-bottom: 0;
  line-height: 1.5;
  font-size: 18px;
  font-weight: 500;
  max-width: 210px;
}
.side-bar-widget .widget-popular-post .item .info .title-text a {
  display: inline-block;
  color: #252525;
  margin-bottom: 5px;
}
.side-bar-widget .widget-popular-post .item .info p {
  font-size: 15px;
  margin-bottom: 0;
  max-width: 180px;
  color: var(--main-color);
}
</style>