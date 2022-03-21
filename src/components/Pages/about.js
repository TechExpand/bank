import React from 'react';
// import "../assets/css/themify-icons.css";
// import "../assets/css/font-awesome.min.css";
import "../assets/css/flaticon.css";
import "../assets/css/odometer-theme-default.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/animate.css";
import "../assets/css/owl.carousel.css";
import "../assets/css/owl.theme.css";
import "../assets/css/slick.css";
import "../assets/css/slick-theme.css";
import "../assets/css/swiper.min.css";
import "../assets/css/owl.transitions.css";
import "../assets/css/jquery.fancybox.css";
import "../assets/css/style.css";
import Drawer from './Drawer';

// import {logo} from "../assets/images/logo/logo.png";
import logo from "../assets/images/logo/logo.png";
import img1 from "../assets/images/shop/mini/img-1.jpg";
import slide1 from "../assets/images/slider/slide-1.jpeg";
import img2 from "../assets/images/shop/mini/img-2.jpg";
import shape from "../assets/images/shape/shape.png";
import shape2 from "../assets/images/shape/shape2.png";
import slide2 from "../assets/images/slider/slide-2.jpeg";
import slide3 from "../assets/images/slider/slide-3.jpeg";
import i1 from "../assets/images/about/1.png";
import i2 from "../assets/images/about/2.png";
import img1feature from "../assets/images/features/img-1.png";
import img2feature from "../assets/images/features/img-2.png";
import img3feature from "../assets/images/features/img-3.png";
import img4feature from "../assets/images/features/img-4.png";

import img1cause from "../assets/images/cause/img-1.png";
import img2cause from "../assets/images/cause/img-2.jpg";
import img3cause from "../assets/images/cause/img-3.jpg";
import img4cause from "../assets/images/cause/img-4.jpg";
import img5cause from "../assets/images/cause/img-5.jpg";
import img6cause from "../assets/images/cause/img-6.jpg";

import i1pngevent from "../assets/images/event/1.jpg";
import i2pngevent from "../assets/images/event/2.jpg";



import i1event from "../assets/images/event/1.jpg";
import i2event from "../assets/images/event/2.jpg";
import i3event from "../assets/images/event/3.jpg";
// import {i1event} from "../assets/images/event/1.jpg";
// import {i2event} from "../assets/images/event/2.jpg";
import i1team from "../assets/images/team/1.png";
import i2team from "../assets/images/team/2.png";
import i3team from "../assets/images/team/3.png";
import i4team from "../assets/images/team/4.png";
import img1test from "../assets/images/testimonials/img-1.png";
import img2test from "../assets/images/testimonials/img-2.png";
import img3test from "../assets/images/testimonials/img-3.png";
import about from "../assets/images/about.jpg";


import i1about from "../assets/images/about/1.png";
import i2about from "../assets/images/about/2.png";
import imgabout from "../assets/images/about/img-1.jpg";


import ts from "../assets/images/ts.png";
import img1blog from "../assets/images/blog/img-1.jpg";
import img2blog from "../assets/images/blog/img-2.jpg";
import img3blog from "../assets/images/blog/img-3.jpg";
import img4blog from "../assets/images/blog/img-4.jpg";
import i1partner from "../assets/images/partners/1.png";
import i2partner from "../assets/images/partners/2.png";
import i3partner from "../assets/images/partners/3.png";
import i4partner from "../assets/images/partners/4.png";
import i5partner from "../assets/images/partners/5.png";
import i1insta from "../assets/images/instragram/1.jpg";
import i2insta from "../assets/images/instragram/2.jpg";
import i3insta from "../assets/images/instragram/3.jpg";
import i4insta from "../assets/images/instragram/4.jpg";
import i5insta from "../assets/images/instragram/5.jpg";
import i6insta from "../assets/images/instragram/6.jpg";
import { Link } from 'react-router-dom';




function About(){
    return (
<>
  {/* start page-wrapper */}
  <div className="page-wrapper">
    {/* start preloader */}
    {/* <div className="preloader">
      <div className="sk-cube-grid">
        <div className="sk-cube sk-cube1" />
        <div className="sk-cube sk-cube2" />
        <div className="sk-cube sk-cube3" />
        <div className="sk-cube sk-cube4" />
        <div className="sk-cube sk-cube5" />
        <div className="sk-cube sk-cube6" />
        <div className="sk-cube sk-cube7" />
        <div className="sk-cube sk-cube8" />
        <div className="sk-cube sk-cube9" />
      </div>
    </div> */}
    {/* end preloader */}
    {/* Start header */}
    <Drawer></Drawer>
    {/* end of header */}
    {/* start page-title */}
    <section className="page-title">
      <div className="page-title-container">
        <div className="page-title-wrapper">
          <div className="container">
            <div className="row">
              <div className="col col-xs-12">
                <h2>About Us</h2>
                <ol className="breadcrumb">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>About</li>
                </ol>
              </div>
            </div>{" "}
            {/* end row */}
          </div>{" "}
          {/* end container */}
        </div>
      </div>
    </section>
    {/* end page-title */}
    {/* end of hero slider */}
    <section className="about-section about-section-s2 section-padding p-t-0">
      <div className="container">
        <div className="row">
          <div className="col col-md-5">
            <div className="video-area">
              <img src={`${about}`}alt="" />
              <div className="video-holder">
                <a
                  href="https://youtu.be/v5aMyjeYuLI"
                  className="video-btn"
                  data-type="iframe"
                  tabIndex={0}
                >
                  <i className="fi flaticon-play" />
                </a>
              </div>
            </div>
          </div>
          <div className="col col-md-7">
            <div className="about-text">
              <div className="section-title">
                <div className="thumb-text">
                  <span>ABOUT US</span>
                </div>
                <h2>
                  Khairah is <span>Nonprofit</span> Organization{" "}
                  <span>That Help</span> Children.
                </h2>
              </div>
              <p>
              War trauma reflects the life of a child for decades. Helping such children in time, we contribute to healthier development of a whole society in the prospect for decades.
              </p>
              <div className="ab-icon-area">
                <div className="about-icon-wrap">
                  <div className="about-icon-item">
                    <div className="ab-icon">
                      <img
                        draggable="false"
                        src={`${i1about}`}
                        alt=""
                      />
                    </div>
                    <div className="ab-text">
                      <h2>
                        <a href="causes-single.html">
                          Save <br /> Children.
                        </a>
                      </h2>
                    </div>
                  </div>
                  <div className="about-icon-item">
                    <div className="ab-icon ab-icon2">
                      <img
                        draggable="false"
                        src={`${i2about}`}
                        alt=""
                      />
                    </div>
                    <div className="ab-text">
                      <h2>
                        <a href="causes-single.html">
                        Reduce Child Hunger
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* end container */}
    </section>
    {/* end about-section */}
    {/* features-area start */}
    <div className="features-area">
      <div className="container">
        <div className="col-12"></div>
        <div className="row">
          <div className="col-md-5">
            <div className="features-text">
              <div className="section-title">
                <div className="thumb-text">
                  <span>END WAR</span>
                </div>
              </div>
              <h2>
              Giving children a chance to live their best lives in times like this.
              </h2>
              <p>
              As this conflict unfolds, our Ukraine crisis response aims to reach 3.5 million vulnerable children and their families
              </p>
              <Link
              to={"/donate"}
              >
              <a href="#" className="theme-btn">
                Donate Now
                <i className="fa fa-angle-double-right" aria-hidden="true" />
              </a>
              </Link>
             
            </div>
          </div>
          <div className="col-md-7">
            <div className="features-wrap">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="features-item">
                    <div className="features-icon">
                      <img
                        draggable="false"
                        src={`${img1feature}`}
                        alt=""
                      />
                    </div>
                    <div className="features-content">
                      <h2>
                        <a href="causes-single.html">Treatment</a>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="features-item-2">
                    <div className="features-icon">
                      <img
                        draggable="false"
                        src={`${img2feature}`}
                        alt=""
                      />
                    </div>
                    <div className="features-content">
                      <h2>
                        <a href="causes-single.html">Hospital Build</a>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="features-item-2 active">
                    <div className="features-icon">
                      <img
                        draggable="false"
                        src={`${img3feature}`}
                        alt=""
                      />
                    </div>
                    <div className="features-content">
                      <h2>
                        <a href="causes-single.html">Food &amp; Safe Home</a>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="features-item">
                    <div className="features-icon">
                      <img
                        draggable="false"
                        src={`${img4feature}`}
                        alt=""
                      />
                    </div>
                    <div className="features-content">
                      <h2>
                        <a href="causes-single.html">Safety Education</a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* features-area end */}
    {/* volunteer-area start */}
    <div className="volunteer-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="section-title section-title2 text-center">
              <div className="thumb-text">
                <span>Volunteer</span>
              </div>
              <h2>Our Great Volunteer</h2>
              {/* <p>
                It is a long established fact that reader distracted by the the
                readable content off page looking at its layout point.
              </p> */}
            </div>
          </div>
        </div>
        <div className="volunteer-wrap">
          <div className="row">
            <div className="col col-md-3 col-sm-6 custom-grid col-12">
              <div className="volunteer-item">
                <div className="volunteer-img">
                  <img src={`${i1team}`} alt="" />
                </div>
                <div className="volunteer-content">
                  <h2>
                    <a href="volunteer.html">Adriane Newby</a>
                  </h2>
                  <span>Volunteer</span>
                </div>
              </div>
            </div>
            <div className="col col-md-3 col-sm-6 custom-grid col-12">
              <div className="volunteer-item">
                <div className="volunteer-img">
                  <img src={`${i2team}`} alt="" />
                </div>
                <div className="volunteer-content">
                  <h2>
                    <a href="volunteer.html">Allene Castaneda</a>
                  </h2>
                  <span>Volunteer</span>
                </div>
              </div>
            </div>
            <div className="col col-md-3 col-sm-6 custom-grid col-12">
              <div className="volunteer-item">
                <div className="volunteer-img">
                  <img src={`${i3team}`} alt="" />
                </div>
                <div className="volunteer-content">
                  <h2>
                    <a href="volunteer.html">Malinda Willoughby</a>
                  </h2>
                  <span>Volunteer</span>
                </div>
              </div>
            </div>
            <div className="col col-md-3 col-sm-6 custom-grid col-12">
              <div className="volunteer-item">
                <div className="volunteer-img">
                  <img src={`${i4team}`} alt="" />
                </div>
                <div className="volunteer-content">
                  <h2>
                    <a href="volunteer.html">Wilburn Hatfield</a>
                  </h2>
                  <span>Volunteer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* volunteer-area start */}
    {/* start testimonials-section-s2 */}
    <section className="testimonials-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="testimonials-slider">
              <div className="testimonial-thumb-active">
                {/* <div className="test-img">
                  <img src={`${img1test}`} alt="" />
                </div>
                <div className="test-img">
                  <img src={`${img2test}`} alt="" />
                </div> */}
              </div>
              <div className="testimonial-content-active text-center">
                <div className="grid">
                  <ul>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <span>
                        <i className="fa fa-star" />
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fa fa-star" />
                      </span>
                    </li>
                  </ul>
                  <p>
                  Thank you for your generous support which will help children like Dmytrus* and Sasha*.

They’ve both been through a living nightmare. But now, thankfully, they’re safe. “I don’t want anyone else to feel like we’re feeling.” Says their dad, Artem*.

When their hometown in Ukraine came under attack, the family grabbed what they could – documents, money, a few clothes – and fled for their lives. At the Romanian boarder, in snow and sub-zero temperatures, they had to wait 15 hours before they could cross.

Once over the border, the family was met by our emergency team, who have set up a distribution centre giving out food, water, blankets and children’s toys.

Thanks to the support of people like you, we’re going to help many more children get life-saving care – and a chance of the future they deserve
                  </p>
                  {/* <div className="info">
                    <h5>Tawana Blackman</h5>
                    <p>Volunteer</p>
                  </div> */}
                </div>
                {/* <div className="grid">
                  <ul>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <span>
                        <i className="fa fa-star" />
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fa fa-star" />
                      </span>
                    </li>
                  </ul>
                  <p>
                    “Dicture that he had recently cut out of an illustrated
                    magazine and housed in a nice, gilded frame It showed a lady
                    fitted out with a fur hat and fur boa who sat upright,
                    raising a heavy fur muff that covered”
                  </p>
                  <div className="info">
                    <h5>Michel Jhone</h5>
                    <p>Volunteer</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* end container */}
      <div className="testi-shape">
        <img src={`${img3test}`} alt="" />
      </div>
      <div className="testi-shape2">
        <img src={`${ts}`} alt="" />
      </div>
    </section>
    {/* end testimonials-section-s2 */}
    {/* .tp-counter-area start */}
    <div className="tp-counter-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-counter-grids">
              <div className="grid">
                <div>
                  <h2>
                    <span className="odometer" data-count={6200}>
                    6200
                    </span>
                    +
                  </h2>
                </div>
                <p>Donation</p>
              </div>
              <div className="grid">
                <div>
                  <h2>
                    <span className="odometer" data-count={80}>
                    9000
                    </span>
                    k
                  </h2>
                </div>
                <p>Fund Raised</p>
              </div>
              <div className="grid">
                <div>
                  <h2>
                    <span className="odometer" data-count={245}>
                    245
                    </span>
                    +
                  </h2>
                </div>
                <p>Volunteers</p>
              </div>
              <div className="grid">
                <div>
                  <h2>
                    <span className="odometer" data-count={605}>
                    40
                    </span>
                    +
                  </h2>
                </div>
                <p>Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* .tp-counter-area end */}
    {/* start partners-section */}
 
    {/* end partners-section */}
    {/* start tp-site-footer */}
    <footer className="tp-site-footer">
      <div className="tp-upper-footer">
        <div className="container">
          <div className="row">
            <div className="col col-lg-3 col-md-3 col-sm-6">
              <div className="widget about-widget">
                <div className="footer-logo widget-title">
                  <a href="index.html">
                    <img src={`${logo}`} alt="logo" />
                    Khai<span>rah.</span>
                  </a>
                </div>
                <p>
                Khairah is Nonprofit Organization That Help Children.
                </p>
                <ul>
                  <li>
                    <a href="#">
                      <i className="ti-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-twitter-alt" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-google" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-2 col-md-3 col-sm-6">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                  <Link to={"/about"}>
                    <a href="about.html">About Us</a>
                    </Link>
                  </li>
                  <li>
                  <Link to={"/cause"}>
                    <a href="about.html">Our Causes</a>
                    </Link>
                  </li>
                  <li>
                  <Link to={"/volunteer"}>
                    <a href="about.html">Our Volunteers</a>
                    </Link>
                  </li>
                  <li>
                  <Link to={"/contact"}>
                    <a href="about.html">Contact Us</a>
                    </Link>
                  </li>
                 
                </ul>{" "}
              </div>
            </div>
            <div className="col col-lg-3 col-lg-offset-1 col-md-3 col-sm-6">
              <div className="widget market-widget tp-service-link-widget">
                <div className="widget-title">
                  <h3>Contact </h3>
                </div>
                {/* <p>Khairah is Nonprofit Organization That Help Children.</p> */}
                <div className="contact-ft">
                  <ul>
                    <li>
                      <i className="fi flaticon-pin" />
                      28 Street, New York City, USA
                    </li>
                    <li>
                      <i className="fi flaticon-call" />
                      +000123456789
                    </li>
                    <li>
                      <i className="fi flaticon-envelope" />
                      khairah@gmail.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col col-lg-3 col-md-3 col-sm-6">
              <div className="widget instagram">
                <div className="widget-title">
                  <h3>Instagram</h3>
                </div>
                <ul className="d-flex">
                  <li>
                    <a href="#">
                      <img src={`${i1insta}`} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={`${i2insta}`} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={`${i3insta}`} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={`${i4insta}`} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={`${i5insta}`} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={`${i6insta}`} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* end container */}
      </div>
      <div className="tp-lower-footer">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <p className="copyright">© 2022 Khairah. All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    {/* end tp-site-footer */}
  </div>
  {/* end of page-wrapper */}
  {/* All JavaScript files
    ================================================== */}
  {/* Plugins for this template */}
  {/* Custom script for this template */}
</>


    );

}

export default About;