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
import { Link } from 'react-router-dom';
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




function Home(){
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
    <header id="header" className="tp-site-header header-style-3">
      <div className="topbar">
        <div className="container">
          <div className="row">
            <div className="col col-sm-5">
              <p>
                <i className="ti-location-pin" /> 27 Division St, New York, NY
                10002
              </p>
            </div>
            <div className="col col-sm-7">
              <div className="social">
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
                      <i className="ti-vimeo-alt" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* end container */}
      </div>{" "}
      {/* end topbar */}
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
                <a className="active" href="#">
                  Home +
                </a>
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
                <a href="#">Event +</a>
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
    {/* start of hero */}
    <section className="hero-slider hero-style-1">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div
              className="slide-inner slide-bg-image"
              style={{backgroundImage: `url("${slide1}")`}}

             
            >
              <div className="container">
                <div data-swiper-parallax={200} className="slide-thumb">
                  <span>GO FOR HELP</span>
                </div>
                <div data-swiper-parallax={300} className="slide-title">
                  <h2>They Are Wait For Some Food.</h2>
                </div>
                <div data-swiper-parallax={400} className="slide-text">
                  <p>
                    It is a long established fact that a reader will be
                    distracted the readable content of a page when looking at
                    its layout point of using of letters, as opposed.
                  </p>
                </div>
                <div className="clearfix" />
                <div data-swiper-parallax={500} className="slide-btns"> <Link
              to={"/donate"}
              >
                  <a href="#" className="theme-btn">
                    Donate Now
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    />
                  </a>
                  </Link>
                </div>
              </div>
              <div className="slide-shape">
                <img src={`${shape}`} alt="" />
              </div>
            </div>{" "}
            {/* end slide-inner */}
          </div>{" "}
          {/* end swiper-slide */}
          <div className="swiper-slide">
            <div
              className="slide-inner slide-bg-image"
              style={{backgroundImage: `url("${slide2}")`}}
            >
              <div className="container">
                <div data-swiper-parallax={200} className="slide-thumb">
                  <span>GO FOR HELP</span>
                </div>
                <div data-swiper-parallax={300} className="slide-title">
                  <h2>They Are Wait For Some Food.</h2>
                </div>
                <div data-swiper-parallax={400} className="slide-text">
                  <p>
                    It is a long established fact that a reader will be
                    distracted the readable content of a page when looking at
                    its layout point of using of letters, as opposed.
                  </p>
                </div>
                <div className="clearfix" />
                <div data-swiper-parallax={500} className="slide-btns">
                <Link
              to={"/donate"}
              >
                  <a href="#" className="theme-btn">
                    Donate Now
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    />
                  </a>
                  </Link>
                </div>
              </div>
              <div className="slide-shape">
                <img src={`${shape}`} alt="" />
              </div>
            </div>{" "}
            {/* end slide-inner */}
          </div>{" "}
          {/* end swiper-slide */}
          <div className="swiper-slide">
            <div
              className="slide-inner slide-bg-image"
              style={{backgroundImage: `url("${slide3}")`}}
            >
              <div className="container">
                <div data-swiper-parallax={200} className="slide-thumb">
                  <span>GO FOR HELP</span>
                </div>
                <div data-swiper-parallax={300} className="slide-title">
                  <h2>They Are Wait For Some Food.</h2>
                </div>
                <div data-swiper-parallax={400} className="slide-text">
                  <p>
                    It is a long established fact that a reader will be
                    distracted the readable content of a page when looking at
                    its layout point of using of letters, as opposed.
                  </p>
                </div>
                <div className="clearfix" />
                <div data-swiper-parallax={500} className="slide-btns">
                <Link
              to={"/donate"}
              >
                  <a href="#" className="theme-btn">
                    Donate Now
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    />
                  </a>
                  </Link>
                </div>
              </div>
              <div className="slide-shape">
                <img src={`${shape}`} alt="" />
              </div>
            </div>{" "}
            {/* end slide-inner */}
          </div>{" "}
          {/* end swiper-slide */}
        </div>
        {/* end swiper-wrapper */}
        {/* swipper controls */}
        <div className="swiper-pagination" />
      </div>
    </section>
    {/* end of hero slider */}
    {/* about-area start */}
    <div className="about-area">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-12  grid col-12">
            <div className="about-cercle">
              <div className="about-img">
                <img src={`${img1}`} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-md-offset-1 grid  col-sm-12 col-12">
            <div className="about-text">
              <div className="section-title">
                <div className="thumb-text">
                  <span>ABOUT US</span>
                </div>
                <h2>
                  Khairah is <span>Nonprofit</span> Organization{" "}
                  <span>For Help</span> Children.
                </h2>
              </div>
              <p>
                It is a long established fact that a reader will be distracted
                by thethe readable content off a page when looking at its layout
                point using Lorem Ipsum is that it has.
              </p>
              <div className="ab-icon-area">
                <div className="about-icon-wrap">
                  <div className="about-icon-item">
                    <div className="ab-icon">
                      <img
                        draggable="false"
                        src={`${i1}`}
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
                        src={`${i2}`}
                        alt=""
                      />
                    </div>
                    <div className="ab-text">
                      <h2>
                        <a href="causes-single.html">
                          Fresh And <br /> Clean Water.
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ab-shape">
        <img src={`${shape2}`} alt="" />
      </div>
    </div>
    {/* about-area end */}
    {/* features-area start */}
    <div className="features-area">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="features-text">
              <div className="section-title">
                <div className="thumb-text">
                  <span>FEATURES</span>
                </div>
              </div>
              <h2>
                The great journey to end poverty for good begins with a child.
              </h2>
              <p>
                It is a long established fact that reader distracted by the the
                readable content off page looking at its layout point that it
                has.
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
                        <a href="causes-single.html">Cancer Treatment</a>
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
                        <a href="causes-single.html">Environtment Recyle</a>
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
                        <a href="causes-single.html">Food &amp; Build Home</a>
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
    {/* case-area-start */}
    <div className="case-area section-padding">
      <div className="container">
        <div className="col-md-6 col-md-offset-3">
          <div className="section-title section-title2 text-center">
            <div className="thumb-text">
              <span>CAUSES</span>
            </div>
            <h2>Latest Caused of Khairah.</h2>
            <p>
              It is a long established fact that reader distracted by the the
              readable content off page looking at its layout point.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="cause-item">
              <div className="cause-top">
                <div className="cause-img">
                  <img src={`${img1cause}`} alt="" />
                  <div className="case-btn">
                  <Link
              to={"/donate"}
              >
                    <a href="donate.html" className="theme-btn">
                      Donate Now
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                    </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="cause-text">
                <ul>
                  <li>
                    <a href="#">GOAL : $9860</a>
                  </li>
                  <li>
                    <a href="#">RISED : $768</a>
                  </li>
                </ul>
                <h3>
                  <a href="causes.html">Financial Help for Poor Families</a>
                </h3>
                <p>
                  It is a long established fact that a reader will be
                  distracted.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="cause-item">
              <div className="cause-top">
                <div className="cause-img">
                  <img src={`${img2cause}`} alt="" />
                  <div className="case-btn">
                  <Link
              to={"/donate"}
              >
                    <a href="donate.html" className="theme-btn">
                      Donate Now
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                    </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="cause-text">
                <ul>
                  <li>
                    <a href="#">GOAL : $9860</a>
                  </li>
                  <li>
                    <a href="#">RISED : $768</a>
                  </li>
                </ul>
                <h3>
                  <a href="causes.html">Education for Poor Children</a>
                </h3>
                <p>
                  It is a long established fact that a reader will be
                  distracted.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="cause-item">
              <div className="cause-top">
                <div className="cause-img">
                  <img src={`${img3cause}`} alt="" />
                  <div className="case-btn">
                  <Link
              to={"/donate"}
              >
                    <a href="donate.html" className="theme-btn">
                      Donate Now
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                    </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="cause-text">
                <ul>
                  <li>
                    <a href="#">GOAL : $9860</a>
                  </li>
                  <li>
                    <a href="#">RISED : $768</a>
                  </li>
                </ul>
                <h3>
                  <a href="causes.html">Send Child to School for a Year</a>
                </h3>
                <p>
                  It is a long established fact that a reader will be
                  distracted.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            wrap"&gt;
            <div className="cta-call">
              <span>Call Us!</span>
              <h3>00 968 469 876</h3>
            </div>
            <div className="cta-call">
              <span>E-mail Us!</span>
              <h3>support@gmail.com</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* cta-area start */}
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
                  <a href="event.html">
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
                  <a href="event.html">
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
                  <a href="event.html">
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
      <img src={`${i1pngevent}`} alt="" />
    </div>
    <div className="shape2">
      <img src={`${i2pngevent}`} alt="" />
    </div>
  </div>
  {/* event-area start */}
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
            <p>
              It is a long established fact that reader distracted by the the
              readable content off page looking at its layout point.
            </p>
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
              <div className="test-img">
                <img src={`${img1test}`} alt="" />
              </div>
              <div className="test-img">
                <img src={`${img2test}`} alt="" />
              </div>
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
                  “ There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text all the loss.
                </p>
                <div className="info">
                  <h5>Tawana Blackman</h5>
                  <p>Volunteer</p>
                </div>
              </div>
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
                  “Dicture that he had recently cut out of an illustrated
                  magazine and housed in a nice, gilded frame It showed a lady
                  fitted out with a fur hat and fur boa who sat upright, raising
                  a heavy fur muff that covered”
                </p>
                <div className="info">
                  <h5>Michel Jhone</h5>
                  <p>Volunteer</p>
                </div>
              </div>
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
  {/* blog-area start */}
  <div className="blog-area section-padding">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <div className="section-title section-title2 text-center">
            <div className="thumb-text">
              <span>Blog</span>
            </div>
            <h2>Our Latest News</h2>
            <p>
              It is a long established fact that reader distracted by the the
              readable content off page looking at its layout point.
            </p>
          </div>
        </div>
      </div>
      <div className="blog-wrap">
        <div className="row">
          <div className="col col-md-6 col-12">
            <div className="blog-item">
              <div className="blog-img">
                <img src={`${img1blog}`} alt="" />
              </div>
              <div className="blog-content">
                <ul>
                  <li>22 June, 2020</li>
                  <li>
                    <i className="fa fa-heart" aria-hidden="true" />
                    56
                  </li>
                  <li>
                    <i className="fa fa-comments-o" aria-hidden="true" /> 78
                  </li>
                </ul>
                <h2>
                  <a href="blog.html">
                    Best and less published their supplier lists.
                  </a>
                </h2>
              </div>
            </div>
          </div>
          <div className="col col-md-6 col-12">
            <div className="blog-item">
              <div className="blog-content">
                <ul>
                  <li>22 June, 2020</li>
                  <li>
                    <i className="fa fa-heart" aria-hidden="true" />
                    56
                  </li>
                  <li>
                    <i className="fa fa-comments-o" aria-hidden="true" /> 78
                  </li>
                </ul>
                <h2>
                  <a href="blog.html">
                    Best and less published their supplier lists.
                  </a>
                </h2>
              </div>
              <div className="blog-img">
                <img src={`${img2blog}`} alt="" />
              </div>
            </div>
          </div>
          <div className="col col-md-6 col-12">
            <div className="blog-item">
              <div className="blog-content">
                <ul>
                  <li>22 June, 2020</li>
                  <li>
                    <i className="fa fa-heart" aria-hidden="true" />
                    56
                  </li>
                  <li>
                    <i className="fa fa-comments-o" aria-hidden="true" /> 78
                  </li>
                </ul>
                <h2>
                  <a href="blog.html">
                    Best and less published their supplier lists.
                  </a>
                </h2>
              </div>
              <div className="blog-img">
                <img src={`${img3blog}`} alt="" />
              </div>
            </div>
          </div>
          <div className="col col-md-6 col-12">
            <div className="blog-item">
              <div className="blog-img">
                <img src={`${img4blog}`} alt="" />
              </div>
              <div className="blog-content">
                <ul>
                  <li>22 June, 2020</li>
                  <li>
                    <i className="fa fa-heart" aria-hidden="true" />
                    56
                  </li>
                  <li>
                    <i className="fa fa-comments-o" aria-hidden="true" /> 78
                  </li>
                </ul>
                <h2>
                  <a href="blog.html">
                    Best and less published their supplier lists.
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* blog-area start */}
  {/* start partners-section */}
  <section className="partners-section section-padding">
    <h2 className="hidden">Partners</h2>
    <div className="container">
      <div className="row">
        <div className="col col-xs-12">
          <div className="partner-grids partners-slider">
            <div className="grid">
              <img src={`${i1partner}`} alt="" />
            </div>
            <div className="grid">
              <img src={`${i2partner}`} alt="" />
            </div>
            <div className="grid">
              <img src={`${i3partner}`} alt="" />
            </div>
            <div className="grid">
              <img src={`${i4partner}`} alt="" />
            </div>
            <div className="grid">
              <img src={`${i5partner}`} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>{" "}
    {/* end container */}
  </section>
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
                    <img src={`${i2insta}`}  alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={`${i3insta}`}  alt="" />
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
  {/* end of page-wrapper */}
  {/* All JavaScript files
    ================================================== */}
  {/* Plugins for this template */}
  {/* Custom script for this template */}
</>

    );

}

export default Home;