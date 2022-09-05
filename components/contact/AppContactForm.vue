<template>
    <div class="contact-form-area pt-100 pb-70">
        <div class="container">
            <div class="section-title text-center">
                <h2>Let's Send Us a Message Below</h2>
            </div>
            <div class="row pt-45">
                <div class="col-lg-4">
                    <div class="contact-info mr-20">
                        <span>Contact Info</span>
                        <h2>Let's Connect With Us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet varius mi, ut hendrerit magna mollis ac. </p>
                        <ul>
                            <li>
                                <div class="content">
                                    <div class="icon">
                                        <font-awesome-icon icon="fa-solid fa-phone-volume" />
                                    </div>
                                    <i class="bx bx-phone-call"></i>
                                    <h3>Phone Number</h3>
                                    <a href="tel:+1(212)-255-5511">+1 (212) 255-5511</a>
                                </div>
                            </li>
                            <li>
                                <div class="content">
                                    <div class="icon">
                                        <font-awesome-icon icon="fa-solid fa-location-dot" />
                                    </div>
                                    <h3>Address</h3>
                                    <a href="#">124 Virgil A Virginia, USA</a>
                                </div>
                            </li>
                            <li>
                                <div class="content">
                                    <div class="icon">
                                        <font-awesome-icon icon="fa-regular fa-message" />
                                    </div>
                                    <h3>Contact Info</h3>
                                    <a href="mailto:hello@techex.com">hello@techex.com</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="contact-form">
                        <form id="contactForm" novalidate="true">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-group has-error">
                                        <label>Your Name <span>*</span></label>
                                        <input type="text" name="name" id="name" class="form-control" required="" data-error="Please Enter Your Name" placeholder="Name">
                                        
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label>Your Email <span>*</span></label>
                                        <input type="email" name="email" id="email" class="form-control" required="" data-error="Please Enter Your Email" placeholder="Email">
                                        
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label>Phone Number <span>*</span></label>
                                        <input type="text" name="phone_number" id="phone_number" required="" data-error="Please Enter Your number" class="form-control" placeholder="Phone Number">
                                        
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label>Your Subject <span>*</span></label>
                                        <input type="text" name="msg_subject" id="msg_subject" class="form-control" required="" data-error="Please Enter Your Subject" placeholder="Your Subject">
                                        
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                    <div class="form-group">
                                        <label>Your Message <span>*</span></label>
                                        <textarea name="message" class="form-control" id="message" cols="30" rows="8" required="" data-error="Write your message" placeholder="Your Message"></textarea>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                    <div class="agree-label">
                                        <input type="checkbox" id="chb1">
                                        <label for="chb1">
                                            Accept <a href="terms-condition.html">Terms &amp; Conditions</a> And <a href="privacy-policy.html">Privacy Policy.</a>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12 text-center">
                                    <button type="submit" class="default-btn btn-bg-two border-radius-50 disabled" style="pointer-events: all; cursor: pointer;">
                                        Send Message <i class="bx bx-chevron-right"></i>
                                    </button>
                                    <div id="msgSubmit" class="h3 text-center hidden"></div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        </form>
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
.contact-form-area .section-title h2 {
    max-width: 600px;
    color: #212529;
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

.contact-form-area h2 {
    font-size: 35px;
    font-weight: 600;
    margin-top: 0;
    line-height: 1.2;
    color:#212529;
    margin-bottom: 0;
}
.contact-info::before {
  content: '';
  position: absolute;
  opacity: .1;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-image: url(/assets/images/call-shap1.png);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
.contact-form-area .contact-info {
    margin-bottom: 30px;
    background-color:var(--main-color);
    padding: 52px 35px 22px;
    border-radius: 12px;
    position: relative;
    z-index: 1;
}
.contact-form-area .contact-info span {
    color: #ffefe6;
    display: block;
    margin-bottom: 5px;
}
.contact-form-area .contact-info h2 {
  color: #fff;
  font-size: 26px;
  margin-bottom: 15px;
}
.contact-form-area .contact-info p {
  color: #fff;
  margin-bottom: 20px;
}
.contact-form-area .contact-info ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.contact-form-area .contact-info ul li {
  display: block;
  margin-bottom: 30px;
  padding-left: 60px;
  position: relative;
}
.contact-info ul li .content .icon {
  width: 45px;
  height: 45px;
  line-height: 45px;
  background-color: #fff;
  font-size: 20px;
  color:var(--main-color);
  border-radius: 50px;
  border: 1px solid #fff;
  margin-bottom: 10px;
  text-align: center;
  position: absolute;
  left: 0;
  top: 0;
}
.contact-info ul li .content h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #fff;
  display: block;
}
.contact-form-area .contact-info ul li .content a {
  color: #fff;
  display: block;
  font-weight: 400;
  font-size: 15px;
}
.contact-form .form-group label {
  color: #212529;
  font-size: 15px;
  margin-bottom: 15px;
  font-weight: 500;
}
.contact-form .form-group label span {
  color: var(--main-color);
}
.contact-form .form-group .form-control {
  height: 50px;
  color: #212529;
  border: 1px solid var(--main-color);
  background-color: #fff;
  font-size: 15px;
  padding: 10px 20px;
  width: 100%;
  border-radius: 0;
  font-weight: 500;
}
.contact-form .form-group {
  margin-bottom: 20px;
  position: relative;
}
.contact-form .agree-label {
  margin-bottom: 15px;
  position: relative;
}
.contact-form .agree-label input#chb1 {
  position: absolute;
  top: 5px;
  left: 0;
  width: auto;
height: auto;
}
.contact-form .agree-label label {
  font-weight: 500;
  color: #252525;
  margin-left: 25px;
}
.contact-form .agree-label label a,
.contact-form  a {
  color: var(--main-color);
}

.contact-form .default-btn, .contact-form .default-btn:hover {
  background-color: var(--main-color);
  border-radius: 25px;
  color: #fff;
  padding: 10px 16px;
  font-weight: bold;
  border: none;
}
</style>