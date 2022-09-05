<template>
    <div class="side-bar-widget">
        <h3 class="title">Tag Cloud</h3>
        <ul class="side-bar-widget-tag">
            <li><a href="#" target="_blank">Android</a></li>
            <li><a href="#" target="_blank">Creative</a></li>
            <li><a href="#" target="_blank">App</a></li>
            <li><a href="#" target="_blank">IOS</a></li>
            <li><a href="#" target="_blank">Business</a></li>
            <li><a href="#" target="_blank">Consulting</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'AppServiceSideTags'

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
.side-bar-widget .side-bar-widget-tag {
  list-style: none;
  padding: 0;
  margin-top: 10px;
  margin-bottom: 20px;
}
.side-bar-widget .side-bar-widget-tag li {
  display: inline-flex;
  margin: 5px;
  color: #fff;
}
.side-bar-widget .side-bar-widget-tag li a {
  color: var(--main-color);
  padding: 7px 15px;
  background-color: transparent;
  border: 2px solid var(--main-color);
  font-size: 14px;
  font-weight: 400;
  border-radius: 0;
  -webkit-transition: .7s;
  transition: .7s;
}
.side-bar-widget .side-bar-widget-tag li:hover a {
  color: #fff;
  background-color: var(--main-color);
}
</style>