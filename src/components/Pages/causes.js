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




function Causes(){
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
                <h2>Causes</h2>
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
            As this conflict unfolds, our Ukraine crisis response aims to reach 3.5 million vulnerable children and their families
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="cause-item">
              <div className="cause-top">
                <div className="cause-img">
                  <img src={`https://media-exp1.licdn.com/dms/image/C4D12AQHE32ZHiTlhPA/article-cover_image-shrink_600_2000/0/1646233332713?e=1652918400&v=beta&t=Emi1fAbTkuGeJjS6tE5fSIkLCSU3vrxysJ_ClCLMWcQ`} alt="" />
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
                    <a href="#">GOAL : 109,860</a>
                  </li>
                  <li>
                    <a href="#">RISED : $10,060</a>
                  </li>
                </ul>
                <h3>
                  <a href="causes.html">Financial Help</a>
                </h3>
                <p>
                Distributing essential supplies and winter kits of clothing and blankets.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="cause-item">
              <div className="cause-top">
                <div className="cause-img">
                  <img src={`https://reliefweb.int/sites/reliefweb.int/files/styles/attachment-large/public/report-images/UNI18451.jpg?itok=HT4KZVIf`} alt="" />
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
                    <a href="#">GOAL : $19,100</a>
                  </li>
                  <li>
                    <a href="#">RISED : $900</a>
                  </li>
                </ul>
                <h3>
                  <a href="causes.html">Access to Education </a>
                </h3>
                <p>
                Providing access to safe, inclusive, quality education.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="cause-item">
              <div className="cause-top">
                <div className="cause-img">
                  <img src={`https://cdn.vox-cdn.com/thumbor/iABdwUEdWUMuXvTt4cYoSah0Am8=/0x0:7802x5204/1200x800/filters:focal(3277x1978:4525x3226)/cdn.vox-cdn.com/uploads/chorus_image/image/70566385/GettyImages_1238785426.0.jpg`} alt="" />
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
                    <a href="#">GOAL : $25,000</a>
                  </li>
                  <li>
                    <a href="#">RISED : $1000</a>
                  </li>
                </ul>
                <h3>
                  <a href="causes.html">Support</a>
                </h3>
                <p>
                Offering vital mental health and psychosocial support to children and their families.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="cause-item">
              <div className="cause-top">
                <div className="cause-img">
                  <img src={`https://www.ctvnews.ca/polopoly_fs/1.2870684.1461337950!/httpImage/image.jpg_gen/derivatives/landscape_1020/image.jpg`} alt="" />
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
                    <a href="#">GOAL : $12,000</a>
                  </li>
                  <li>
                    <a href="#">RISED : $768</a>
                  </li>
                </ul>
                <h3>
                  <a href="causes.html">Food And Home for Children</a>
                </h3>
                <p>
                Providing cash and vouchers assistance to families to meet basic needs like food, rent and medicines.
                </p>
              </div>
            </div>
          </div>
         
          
        </div>
      </div>
    </div>
    {/* case-area-end */}
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

export default Causes;