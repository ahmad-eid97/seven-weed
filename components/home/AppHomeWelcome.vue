<template>
  <section class="welcome">
    <div class="row m-0">
      <h4>State licensed recreational & medical cannabis dispensary</h4>
      <h2>
        Welcome to Seven Weed – one of the oldest & most trusted cannabis dispensaries in Los Angeles, California
      </h2>
    </div>
    <div class="row align-items-center m-0">
      <div class="col-lg-6">
        <h3>
          Proin ollicitudin nibh interdum - mollis dolor auctor dolor pretium, nec faucibus turpis eleifend.
        </h3>
        <p>
          Duis auctor at lorem ipsum dolor nulla glavriadac – nibh interdum s interdum vel sollicitudin nibhlod. Suspendisse auctor volutpat turpis, vel sollicitudin nibh interdum non. Praesent quis tortor et est finibus dignissim quis id leo. Suspendisse tempor consectetur odio!
        </p>
        <div>
          <a href="#" class="btn">
            Visit dispensary
            <font-awesome-icon icon="fa-solid fa-shop" />
          </a>
          <a href="#" class="btn">
            Buy online
            <font-awesome-icon icon="fa-solid fa-basket-shopping" />
          </a>
        </div>
      </div>
      <div class="col-lg-6">
        <img class="img-fluid" src="https://the7.io/weed/wp-content/uploads/sites/51/2019/01/weed031.jpg" alt="">
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: "AppHomeWelcome",

}
</script>

<style lang="scss">
  .welcome {
    padding: 70px 50px;
  }
  @include sm {
    .welcome {
      padding: 50px 10px;
    }
  }
  .welcome h4 {
    color: rgb(117, 179, 37);
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    margin-bottom: 10px;
    text-align: center;
  }
  .welcome h2 {
    color: rgb(51, 51, 51);
    font-size: 34px;
    font-weight: 700;
    line-height: 44px;
    text-align: center;
    padding: 0 25px 70px;
  }
  @include sm {
    .welcome h2 {
      font-size: 25px;
      line-height: 35px;
    }
  }
  .welcome h3 {
    color: rgb(51, 51, 51);
    font-size: 20px;
    font-weight: 700;
    line-height: 26px;
    margin-bottom: 15px;
    text-align: left;
  }
  .welcome p {
    color: rgb(133, 134, 140);
    font-size: 15px;
    font-weight: 400;
    line-height: 25.5px;
    margin-bottom: 20px;
    text-align: left;
  }
  .welcome .btn{
    background-color: rgb(117, 179, 37);
    border-radius: 3px;
    border: none;
    color: rgb(255, 255, 255);
    cursor: pointer;
    font-size: 15px;
    font-weight: 700;
    height: 50px;
    line-height: 20px;
    padding-bottom: 15px;
    padding-left: 35px;
    padding-right: 35px;
    padding-top: 15px;
    margin-bottom: 10px;
    margin-left: 0px;
    margin-right: 10px;
    margin-top: 0px;
    min-width: 200px;
  }
  .welcome .btn:hover{
      background-color: rgb(160, 209, 95);
      color: rgb(255, 255, 255);

  }
</style>