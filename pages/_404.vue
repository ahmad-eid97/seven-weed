<template>
  <div class="error-area">
    <div class="d-table">
      <div class="d-table-cell">
        <div class="error-content">
          <img src="/assets/images/404-error.jpg" alt="Image" />
          <h3>Oops! Page Not Found</h3>
          <p>
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>
          <router-link to="" class="btn btn-primary">
            Return To Home Page
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>

<style>
.error-area {
  height: 100%;
  padding-top: 50px;
  padding-bottom: 70px;
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
.error-area .error-content {
  text-align: center;
  position: relative;
}
.error-area .error-content img {
  max-width: 100%;
}
.error-area .error-content h3 {
  max-width: 600px;
  color: #252525;
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
.error-area .error-content p {
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 18px;
  max-width: 520px;
  margin-left: auto;
  margin-right: auto;
  color: #444;
}
.error-area .btn,
.error-area .btn:hover {
  padding: 13px 29px;
  color: #fff;
  margin: 15px 0;
  background-color: var(--main-color);
  border-radius: 6px;
  letter-spacing: 2px;
  border: none;
  font-size: 14px;
  line-height: 18px;
  font-weight: 800;
}
</style>
