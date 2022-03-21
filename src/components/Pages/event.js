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

import author from "../assets/images/blog-details/author.jpg";
import img1com from "../assets/images/blog-details/comments-author/img-1.jpg";
import img2com from "../assets/images/blog-details/comments-author/img-2.jpg";
import img3com from "../assets/images/blog-details/comments-author/img-3.jpg";


import imgeventdetails1 from "../assets/images/event-details.jpg";
import imgeventdetails2 from "../assets/images/event-details2.jpg";
// import i6insta from "../assets/images/instragram/6.jpg";






function Event(){
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
    <header id="header" className="tp-site-header header-style-2">
      <nav className="navigation navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="open-btn">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="index.html">
              <img src={`${logo}`} alt="logo" />
              Khai<span>rah.</span>
            </a>
          </div>
          <div
            id="navbar"
            className="navbar-collapse collapse navigation-holder"
          >
            <button className="close-navbar">
              <i className="ti-close" />
            </button>
            <ul className="nav navbar-nav">
              <li className="menu-item-has-children">
                <a href="#">Home +</a>
                <ul className="sub-menu">
                  <li>
                    <a href="index.html">Home style 1</a>
                  </li>
                  <li>
                    <a href="index-2.html">Home style 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Causes +</a>
                <ul className="sub-menu">
                  <li>
                    <a href="causes.html">Causes</a>
                  </li>
                  <li>
                    <a href="causes-single.html">Causes Single</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a className="active" href="#">
                  Event +
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="event.html">Event</a>
                  </li>
                  <li>
                    <a href="event-single.html">Event Single</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Pages +</a>
                <ul className="sub-menu">
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="donate.html">Donate</a>
                  </li>
                  <li>
                    <a href="volunteer.html">Volunteer</a>
                  </li>
                  <li>
                    <a href="error.html">404 Page</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Blog +</a>
                <ul className="sub-menu">
                  <li>
                    <a href="blog.html">Blog right sidebar</a>
                  </li>
                  <li>
                    <a href="blog-left.html">Blog left sidebar</a>
                  </li>
                  <li>
                    <a href="blog-fulwidth.html">Blog fullwidth</a>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Blog details</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="blog-single.html">
                          Blog details right sidebar
                        </a>
                      </li>
                      <li>
                        <a href="blog-single-left.html">
                          Blog details left sidebar
                        </a>
                      </li>
                      <li>
                        <a href="blog-single-fluid.html">
                          Blog details fullwidth
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
          {/* end of nav-collapse */}
          <div className="cart-search-contact">
            <div className="mini-cart">
              <button className="cart-toggle-btn">
                {" "}
                <i className="fi flaticon-shopping-bag" />{" "}
                <span className="cart-count">02</span>
              </button>
              <div className="mini-cart-content">
                <div className="mini-cart-title">
                  <p>Shopping Cart</p>
                </div>
                <div className="mini-cart-items">
                  <div className="mini-cart-item clearfix">
                    <div className="mini-cart-item-image">
                      <a href="#">
                        <img
                          src={`${img1}`}
                          alt="Hoodie with zipper"
                        />
                      </a>
                    </div>
                    <div className="mini-cart-item-des">
                      <a href="#">Hoodie with zipper</a>
                      <span className="mini-cart-item-price">$25.15</span>
                      <span className="mini-cart-item-quantity">x 1</span>
                    </div>
                  </div>
                  <div className="mini-cart-item clearfix">
                    <div className="mini-cart-item-image">
                      <a href="#">
                        <img
                          src={`${img2}`}
                          alt="Hoodie with zipper"
                        />
                      </a>
                    </div>
                    <div className="mini-cart-item-des">
                      <a href="#">Hoodie with zipper</a>
                      <span className="mini-cart-item-price">$12.99</span>
                      <span className="mini-cart-item-quantity">x 2</span>
                    </div>
                  </div>
                </div>
                <div className="mini-cart-action clearfix">
                  <span className="mini-checkout-price">$255.12</span>
                  <a href="" className="theme-btn">
                    View Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="header-search-form-wrapper">
              <button className="search-toggle-btn">
                <i className="fi flaticon-magnifying-glass" />
              </button>
              <div className="header-search-form">
                <form>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search here..."
                    />
                    <button type="submit">
                      <i className="fi flaticon-magnifying-glass" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="vollenter-btn">
              <a className="theme-btn-s2" href="volunteer.html">
                Join a volunteer
              </a>
            </div>
          </div>
        </div>
        {/* end of container */}
      </nav>
    </header>
    {/* end of header */}
    {/* start page-title */}
    <section className="page-title">
      <div className="page-title-container">
        <div className="page-title-wrapper">
          <div className="container">
            <div className="row">
              <div className="col col-xs-12">
                <h2>Our Events</h2>
                <ol className="breadcrumb">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Events</li>
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
    {/* event-area start */}
    <div className="event-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="section-title section-title2 text-center">
              <div className="thumb-text">
                <span>EVENTS</span>
              </div>
              <h2>Our Upcoming Events</h2>
              <p>
                It is a long established fact that reader distracted by the the
                readable content off page looking at its layout point.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="event-item">
              <div className="event-img">
                <img src={`${i1event}`} alt="" />
              </div>
              <div className="event-text">
                <div className="event-left">
                  <div className="event-l-text">
                    <span>MAR</span>
                    <h4>28</h4>
                  </div>
                </div>
                <div className="event-right">
                  <ul>
                    <li>
                      <i className="ti-location-pin" /> 9:00 AM - 10:00 AM
                    </li>
                    <li>
                      <i className="ti-location-pin" /> 968, Mudkarim, Pakistan.
                    </li>
                  </ul>
                  <h2>
                    <a href="event-single.html">
                      Fundrising event that could change some poor children.
                    </a>
                  </h2>
                  <p>
                    It is long estblished fact that a reader will be distracted
                    aliquip exea commodo consequat velit esse cillum fugiat.
                  </p>
                </div>
              </div>
            </div>
            <div className="event-item">
              <div className="event-img">
                <img src={`${i2event}`} alt="" />
              </div>
              <div className="event-text">
                <div className="event-left">
                  <div className="event-l-text">
                    <span>MAR</span>
                    <h4>28</h4>
                  </div>
                </div>
                <div className="event-right">
                  <ul>
                    <li>
                      <i className="ti-location-pin" /> 9:00 AM - 10:00 AM
                    </li>
                    <li>
                      <i className="ti-location-pin" /> 968, Mudkarim, Pakistan.
                    </li>
                  </ul>
                  <h2>
                    <a href="event-single.html">
                      Many Children are suffering a lot for food.
                    </a>
                  </h2>
                  <p>
                    It is long estblished fact that a reader will be distracted
                    aliquip exea commodo consequat velit esse cillum fugiat.
                  </p>
                </div>
              </div>
            </div>
            <div className="event-item">
              <div className="event-img">
                <img src={`${i3event}`} alt="" />
              </div>
              <div className="event-text">
                <div className="event-left">
                  <div className="event-l-text">
                    <span>MAR</span>
                    <h4>28</h4>
                  </div>
                </div>
                <div className="event-right">
                  <ul>
                    <li>
                      <i className="ti-location-pin" /> 9:00 AM - 10:00 AM
                    </li>
                    <li>
                      <i className="ti-location-pin" /> 968, Mudkarim, Pakistan.
                    </li>
                  </ul>
                  <h2>
                    <a href="event-single.html">
                      Be kind for the poor people and the kids.
                    </a>
                  </h2>
                  <p>
                    It is long estblished fact that a reader will be distracted
                    aliquip exea commodo consequat velit esse cillum fugiat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape1">
        <img src={`${i1event}`} alt="" />
      </div>
      <div className="shape2">
        <img src={`${i2event}`} alt="" />
      </div>
    </div>
    {/* event-area start */}
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
                  Build and Earn with your online store with lots of cool and
                  exclusive tp-features{" "}
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
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="causes.html">Our Causes</a>
                  </li>
                  <li>
                    <a href="volunteer.html">Our Volunteer</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                  <li>
                    <a href="event.html">Our Event</a>
                  </li>
                </ul>{" "}
              </div>
            </div>
            <div className="col col-lg-3 col-lg-offset-1 col-md-3 col-sm-6">
              <div className="widget market-widget tp-service-link-widget">
                <div className="widget-title">
                  <h3>Contact </h3>
                </div>
                <p>online store with lots of cool and exclusive tp-features</p>
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
              <p className="copyright">© 2020 Khairah. All rights reserved</p>
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

export default Event;