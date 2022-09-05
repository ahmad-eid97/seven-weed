<template>
    <div class="side-bar-widget">
        <h3 class="title">Our Services</h3>
        <div class="side-bar-categories">
            <ul>
                <li>
                    <div class="line-circle"></div>
                    <a href="#" target="_blank">IT Services</a>
                </li>
                <li>
                    <div class="line-circle"></div>
                    <a href="#" target="_blank">Cloud Computing</a>
                </li>
                <li>
                    <div class="line-circle"></div>
                    <a href="#" target="_blank">Web Development</a>
                </li>
                <li>
                    <div class="line-circle"></div>
                    <a href="#" target="_blank">Business Reform</a>
                </li>
                <li>
                    <div class="line-circle"></div>
                    <a href="#" target="_blank">Infrastructure</a>
                </li>
                <li>
                    <div class="line-circle"></div>
                    <a href="#" target="_blank">Data Analysis</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppServiceSideServices'

}
</script>

<style>
.side-bar-widget .title {
  font-size: 20px;
  color: var(--main-color);
  padding: 0;
  font-weight: 600;
  position: relative;
  display: inline-block;
  margin-bottom: 10px;
  background-color: transparent;
  width: 100%;
}
.side-bar-widget .side-bar-categories {
  margin-bottom: 15px;
}
.side-bar-widget .side-bar-categories ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}
.side-bar-widget .side-bar-categories ul li {
  position: relative;
  font-size: 15px;
  font-weight: 500;
}
.side-bar-widget .side-bar-categories ul li .line-circle {
  position: absolute;
  top: 10px;
  left: 0;
  width: 13px;
  height: 13px;
  background-color: transparent;
  border: 1px solid var(--main-color);
  border-radius: 50px;
}
.side-bar-widget .side-bar-categories ul li .line-circle::before {
  content: '';
  position: absolute;
  top: 1px;
  left: 1px;
  right: 1px;
  margin: 0 auto;
  width: 9px;
  height: 9px;
  background-color: var(--main-color);
  border-radius: 50px;
}
.side-bar-widget .side-bar-categories ul li a {
  display: inline-block;
  color: #444;
  font-weight: 400;
  padding: 5px 0 5px 25px;
  font-weight: 600;
  position: relative;
  width: 100%;
}
.side-bar-widget .side-bar-categories ul li a:hover {
  color: var(--main-color);
}
</style>