<template>
    <div class="security-area pt-100 pb-70">
        <div class="container">
            <div class="section-title text-center">
                <span class="sp-color2">IT Security &amp; Computing</span>
                <h2>Searching for a Solution! We Provide Truly Prominent IT Solutions</h2>
                
            </div>
            <div class="row pt-45">
                <div class="col-lg-4 col-sm-6">
                <div class="security-card">
                    <div class="icon">
                        <font-awesome-icon icon="fa-solid fa-building-lock" />
                    </div>
                    <h3>
                        <a href="#">Business Security</a>
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit scelerisque ullamcorper proin scelerisque tortor odio.</p>
                </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="security-card">
                        <div class="icon">
                            <font-awesome-icon icon="fa-solid fa-computer" />
                        </div>
                        <h3>
                            <a href="#">Manage IT Service</a>
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit scelerisque ullamcorper proin scelerisque tortor odio.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="security-card">
                        <div class="icon">
                            <font-awesome-icon icon="fa-solid fa-magnifying-glass-chart" />
                        </div>
                        <h3>
                            <a href="#">Product Analysis</a>
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit scelerisque ullamcorper proin scelerisque tortor odio.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="security-card">
                        <div class="icon">
                            <font-awesome-icon icon="fa-solid fa-file-circle-check" />
                        </div>
                        <h3>
                            <a href="case-details.html">Analytic Solution</a>
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit scelerisque ullamcorper proin scelerisque tortor odio.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="security-card">
                        <div class="icon">
                            <font-awesome-icon icon="fa-solid fa-award" />
                        </div>
                        <h3>
                            <a href="case-details.html">Finest Quality</a>
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit scelerisque ullamcorper proin scelerisque tortor odio.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="security-card">
                        <div class="icon">
                            <font-awesome-icon icon="fa-solid fa-cubes" />
                        </div>
                        <h3>
                            <a href="case-details.html">Risk Management</a>
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit scelerisque ullamcorper proin scelerisque tortor odio.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.section-title {
    margin: 0 auto;
    padding: 0;
    position: relative;
    text-align: center;
}
.security-area .section-title span {
    margin-bottom: 8px;
    font-weight: 600;
    display: block;
    color: var(--main-color);
}
.security-area .section-title h2 {
    max-width: 800px;
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
.security-area .seprator img {
  width: 70px;
  margin-top: 5px;
  margin-bottom: 20px;
}
.security-card {
    box-shadow: 0px 0px 8px rgba(0,0,0,.3);
    padding: 40px 30px 35px;
    border-radius: 0px;
    background-color: #fff;
    position: relative;
    z-index: 1;
    margin-bottom: 30px;
    color: #212934;
}
.security-card h3 a {
    color: #212934;
}
.security-card p{
    margin-bottom: 8px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
.security-card:hover h3 a,
.security-card:hover p {
    color: #fff;
}
.security-card::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 40px;
    left: 30px;
    width: 80px;
    height: 80px;
    background-color:var(--main-color);
    border-radius: 0;
    opacity: 1;
    -webkit-transition: .7s;
    transition: .7s;
}

.security-card::after {

    content: '';
    position: absolute;
    z-index: -1;
    bottom: 0;
    right: 0;
    width: 0;
    height: 0;
    background-color:var(--main-color);
    border-radius: 0;
    opacity: .1;
    -webkit-transition: .7s;
    transition: .7s;
}
.security-card:hover::before {
    width: 100%;
    height: 100%;
    border-radius: 0;
    opacity: 1;
    top: 0;
    left: 0;
}
.security-card .icon {
    font-size: 45px;
    width: 80px;
    height: 80px;
    line-height: 80px;
    color: #fff;
    background-color:var(--main-color);
    border-radius: 0px;
    display: inline-block;
    text-align: center;
    margin-bottom: 12px;
    -webkit-transition: .5s;
    transition: .5s;
}
.security-card:hover .icon {
    font-size: 45px;
    width: 80px;
    height: 80px;
    line-height: 80px;
    color: #fff;
    background-color: transparent;
    border-radius: 0px;
    display: inline-block;
    text-align: center;
    margin-bottom: 12px;
    -webkit-transition: .5s;
    transition: .5s;
}
</style>