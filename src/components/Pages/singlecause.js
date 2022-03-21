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
import { Link } from 'react-router-dom';

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






function SingleCauses(){
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
                <a className="active" href="#">
                  Causes +
                </a>
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
    {/* start page-title */}
    <section className="page-title">
      <div className="page-title-container">
        <div className="page-title-wrapper">
          <div className="container">
            <div className="row">
              <div className="col col-xs-12">
                <h2>Single Causes</h2>
                <ol className="breadcrumb">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Causes</li>
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
    {/* tp-event-details-area start */}
    <div className="tp-case-details-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col col-md-8">
            <div className="tp-case-details-wrap">
              <div className="tp-case-details-text">
                <div id="Description">
                  <div className="tp-case-details-img">
                    <img src={`${imgeventdetails1}`} alt="" />
                  </div>
                  <div className="tp-case-content">
                    <div className="tp-case-text-top">
                      <h2>Ensure Education for every poor children</h2>
                      <div className="progress-section">
                        <div className="process">
                          <div className="progress">
                            <div className="progress-bar">
                              <div className="progress-value">
                                <span>65.5</span>%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ul>
                        <li>
                          <span>Raised:</span> $7,000.00
                        </li>
                        <li>
                          <span>Goal:</span> $8,000.00
                        </li>
                        <li>
                          <span>Donar:</span> 380
                        </li>
                      </ul>
                      <div className="case-b-text">
                        <p>
                          On the other hand, we denounce with righteous
                          indignation and dislike men who are so beguiled and
                          demoralized by the charms of pleasure of the moment,
                          so blinded by desire, that they cannot foresee the
                          pain and trouble that are bound to ensue and equal
                          blame belongs to those who fail in their duty through
                          weakness of will, which is the same as saying through
                          shrinking from toil and pain.
                        </p>
                        <p>
                          These cases are perfectly simple and easy to
                          distinguish. In a free hour, when our power of choice
                          is untrammelled and when nothing prevents our being
                          able to do what we like best, every pleasure is to be
                          welcomed and every pain avoided.
                        </p>
                        <p>
                          But in certain circumstances and owing to the claims
                          of duty or the obligations of business it will
                          frequently occur that pleasures have to be repudiated
                          and annoyances accepted. The wise man therefore always
                          holds in these matters to this principle of selection:
                          he rejects pleasures.
                        </p>
                      </div>
                      <div className="case-bb-text">
                        <h3>We want to ensure the education for the kids.</h3>
                        <p>
                          These cases are perfectly simple and easy to
                          distinguish. In a free hour, when our power of choice
                          is untrammelled and when nothing prevents our being
                          able to do what we like best, every pleasure.
                        </p>
                        <ul>
                          <li>
                            The wise man therefore always holds in these
                            matters.
                          </li>
                          <li>
                            In a free hour, when our power of choice and when
                            nothing.
                          </li>
                          <li>Else he endures pains to avoid worse pains.</li>
                          <li>
                            We denounce with righteous indignation and dislike
                            men.{" "}
                          </li>
                          <li>Which is the same as saying through.</li>
                        </ul>
                      </div>
                      <div className="submit-area sub-btn">
                      <Link
              to={"/donate"}
              >
                        <a href="donate.html" className="theme-btn submit-btn">
                          Donate Now
                        </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tp-blog-single-section wrap-even">
                  <div className="comments-area">
                    <div className="comments-section">
                      <h3 className="comments-title">Comments</h3>
                      <ol className="comments">
                        <li
                          className="comment even thread-even depth-1"
                          id="comment-1"
                        >
                          <div id="div-comment-1">
                            <div className="comment-theme">
                              <div className="comment-image">
                                <img
                                  src={`${img1com}`}
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="comment-main-area">
                              <div className="comment-wrapper">
                                <div className="comments-meta">
                                  <h4>
                                    John Abraham{" "}
                                    <span className="comments-date">
                                      Octobor 28,2018 At 9.00am
                                    </span>
                                  </h4>
                                </div>
                                <div className="comment-area">
                                  <p>
                                    I will give you a complete account of the
                                    system, and expound the actual teachings of
                                    the great explorer of the truth,{" "}
                                  </p>
                                  <div className="comments-reply">
                                    <a className="comment-reply-link" href="#">
                                      <i
                                        className="fa fa-reply"
                                        aria-hidden="true"
                                      />
                                      <span>Reply</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <ul className="children">
                            <li className="comment">
                              <div>
                                <div className="comment-theme">
                                  <div className="comment-image">
                                    <img
                                      src={`${img2com}`}
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div className="comment-main-area">
                                  <div className="comment-wrapper">
                                    <div className="comments-meta">
                                      <h4>
                                        Lily Watson{" "}
                                        <span className="comments-date">
                                          Octobor 28,2018 At 9.00am
                                        </span>
                                      </h4>
                                    </div>
                                    <div className="comment-area">
                                      <p>
                                        I will give you a complete account of
                                        the system, and expound the actual
                                        teachings of the great explorer of the
                                        truth,{" "}
                                      </p>
                                      <div className="comments-reply">
                                        <a
                                          className="comment-reply-link"
                                          href="#"
                                        >
                                          <span>
                                            <i
                                              className="fa fa-reply"
                                              aria-hidden="true"
                                            />{" "}
                                            Reply
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <ul>
                                <li className="comment">
                                  <div>
                                    <div className="comment-theme">
                                      <div className="comment-image">
                                        <img
                                          src={`${img3com}`}
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="comment-main-area">
                                      <div className="comment-wrapper">
                                        <div className="comments-meta">
                                          <h4>
                                            John Abraham{" "}
                                            <span className="comments-date">
                                              Octobor 28,2018 At 9.00am
                                            </span>
                                          </h4>
                                        </div>
                                        <div className="comment-area">
                                          <p>
                                            I will give you a complete account
                                            of the system, and expound the
                                            actual teachings of the great
                                            explorer of the truth,{" "}
                                          </p>
                                          <div className="comments-reply">
                                            <a
                                              className="comment-reply-link"
                                              href="#"
                                            >
                                              <span>
                                                <i
                                                  className="fa fa-reply"
                                                  aria-hidden="true"
                                                />{" "}
                                                Reply
                                              </span>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ol>
                    </div>{" "}
                    {/* end comments-section */}
                  </div>{" "}
                  {/* end comments-area */}
                  <div className="comment-respond">
                    <h3 className="comment-reply-title">Leave a Comment</h3>
                    <form
                      method="post"
                      id="commentform"
                      className="comment-form"
                    >
                      <div className="form-inputs">
                        <input placeholder="Name" type="text" />
                        <input placeholder="Email" type="email" />
                        <input placeholder="Website" type="url" />
                      </div>
                      <div className="form-textarea">
                        <textarea
                          id="comment"
                          placeholder="Write Your Comments..."
                          defaultValue={""}
                        />
                      </div>
                      <div className="form-submit">
                        <input id="submit" defaultValue="Reply" type="submit" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-md-4 col-sm-12">
            <div className="tp-blog-sidebar">
              <div className="widget search-widget">
                <h3>Search Here</h3>
                <form>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Post.."
                    />
                    <button type="submit">
                      <i className="ti-search" />
                    </button>
                  </div>
                </form>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* tp-event-details-area end */}
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

export default SingleCauses;