<template>
    <div class="service-article">
        <div class="service-article-img">
            <img src="/assets/images/service-details.jpg" alt="Images">
        </div>
        <div class="service-article-content">
            <h2>Cloud Computing</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. cu
            sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies ne,
            pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet n,
            vu eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis
            pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aen
            li, porttitor eu, consequat vitae, eleifend ac, enim.
            </p>
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <ul class="service-article-list service-article-rs">
                        <li>
                            <font-awesome-icon icon="fa-solid fa-circle-check" />
                            Cost of Supplies and Equipment
                        </li>
                        <li>
                            <font-awesome-icon icon="fa-solid fa-circle-check" />
                            Bribed Autor Nisi Elit Volume
                        </li>
                        <li>
                            <font-awesome-icon icon="fa-solid fa-circle-check" />
                            Cost of Supplies and Equipment
                        </li>
                    </ul>
                </div>
                <div class="col-lg-6 col-md-6">
                    <ul class="service-article-list">
                        <li>
                            <font-awesome-icon icon="fa-solid fa-circle-check" />
                            Change the Volume of Expected
                        </li>
                        <li>
                            <font-awesome-icon icon="fa-solid fa-circle-check" />
                            Easy to Customer Services
                        </li>
                        <li>
                            <font-awesome-icon icon="fa-solid fa-circle-check" />
                            Good Quality Products Services
                        </li>
                    </ul>
                </div>
            </div>
            <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. cu
            sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies ne,
            pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet n,
            vu eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis
            pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aen
            li, porttitor eu, consequat vitae, eleifend ac, enim.
            </p>
        </div>
        <div class="service-article-another">
            <h2>What Benefit You Will Get</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. cu
            sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies ne,
            pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet n,
            vu eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis
            pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aen
            li, porttitor eu, consequat vitae, eleifend ac, enim.
            </p>
            <div class="row">
                <div class="col-lg-6 col-sm-6">
                    <div class="service-article-another-img">
                        <img src="/assets/images/service-details-img1.jpg" alt="Images">
                    </div>
                </div>
                <div class="col-lg-6 col-sm-6">
                    <div class="service-article-another-img">
                        <img src="/assets/images/service-details-img2.jpg" alt="Images">
                    </div>
                </div>
            </div>
            <p>
            Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed
            odio sit amet.Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
            Duis sed odio sit amet.Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh
            id elit. Duis sed odio sit amet. li, porttitor eu, consequat vitae, eleifend ac, enim.
            </p>
        </div>
        <div class="service-work-process">
            <h2>Our Working Proccess</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. cu
            sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies ne,
            pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet n,
            vu eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis
            pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aen
            li, porttitor eu, consequat vitae, eleifend ac, enim.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppServiceBody'
}
</script>

<style>
.service-article .service-article-img {
  margin-bottom: 25px;
}
.service-article .service-article-img img {
  border-radius: 0;
}
.service-article h2 {
  font-size: 26px;
  margin-bottom: 15px;
  color: var(--main-color);
}
.service-article .service-article-content p {
  margin-bottom: 20px;
}
.service-article .service-article-content .service-article-list {
  list-style: none;
  margin: 0 0 25px;
  padding: 0;
}
.service-article .service-article-content .service-article-list li {
  display: block;
  color: var(--main-color);
  margin-bottom: 10px;
  font-weight: 600;
  -webkit-transition: .7s;
  transition: .7s;
  padding-left: 35px;
  position: relative;
  -webkit-transition: .5s;
  transition: .5s;
}
.service-article .service-article-content .service-article-list li svg {
  font-size: 26px;
  color: var(--main-color);
  position: absolute;
  left: 0;
  top: -2px;
  margin-right: 5px;
  -webkit-transition: .5s;
  transition: .5s;
}
.service-article .service-article-another .service-article-another-img {
  margin-bottom: 25px;
  margin-top: 10px;
}
.service-article .service-article-another .service-article-another-img img {
  border-radius: 0;
}
</style>