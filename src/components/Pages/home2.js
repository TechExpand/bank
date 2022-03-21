import React, { useState } from 'react';
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



// import {logo} from "../assets/images/logo/logo.png";
import logo from "../assets/images/logo/logo.png";
import shape from "../assets/images/shape/shape.png";
import slide2 from "../assets/images/slider/slide-2.jpeg";
import slide3 from "../assets/images/slider/slide-3.jpeg";
import img1feature from "../assets/images/features/img-1.png";
import img2feature from "../assets/images/features/img-2.png";
import img3feature from "../assets/images/features/img-3.png";
import img4feature from "../assets/images/features/img-4.png";
import i1team from "../assets/images/team/1.png";
import i2team from "../assets/images/team/2.png";
import i3team from "../assets/images/team/3.png";
import i4team from "../assets/images/team/4.png";
import img3test from "../assets/images/testimonials/img-3.png";
import about from "../assets/images/about.jpg";
import i1about from "../assets/images/about/1.png";
import i2about from "../assets/images/about/2.png";
import ts from "../assets/images/ts.png";
import i1insta from "../assets/images/instragram/1.jpg";
import i2insta from "../assets/images/instragram/2.jpg";
import i3insta from "../assets/images/instragram/3.jpg";
import i4insta from "../assets/images/instragram/4.jpg";
import i5insta from "../assets/images/instragram/5.jpg";
import i6insta from "../assets/images/instragram/6.jpg";
import { Link } from 'react-router-dom';
import Drawer from './Drawer';






function Home2(){






  const blogs = [
    { 
     excerpt: "By sharing a flower, you can send a simple, powerful message of solidarity.", 
     picture:  "https://www.savethechildren.org.uk/content/dam/global/images/countries/peru/alix-venezuela-peru-ch1422538-hero.jpg/jcr:content/renditions/cq5dam.webp_thumbnail.1536.1536.webp",
     date: "Monday 14th March 2022",
     title: 'STAND WITH CHILDREN IN CONFLICT',
     description: `FLOWER POWER
    Sharing flowers is a simple act we can all do – children and adults alike. By sharing a flower, you can send a simple, powerful message of solidarity to the children living through the horrors of war.
    
Flowers can express our feelings when words fail. Feelings of love, grief and new beginnings. 
    
    In our child-friendly spaces – where children get the chance to play, learn, feel safe and regain a sense of normality amid conflict – children often draw, paint and photograph flowers as symbols of hope and peace.
    
    “Every time [a flower] falls, it springs up again” Yara*, 17, Syrian refugee
    
    EVERY WAR IS A WAR AGAINST CHILDREN
    But the grim truth is, children’s lives are in danger in countries around the world right now from conflict. And their futures are under threat.
    
    Today, a record number of children – 1 in 6 – are living in war zones around the world.
    
    Here’s an update on how war is devastating the lives of children and families in three countries – Syria, Ukraine and Yemen.
    
    And how our teams on the ground and local partners we support are helping children get life-saving care – and the chance of the future they deserve.
    
    SYRIA: 11 YEARS OF WAR
    Half of Syria’s children have grown up knowing nothing but conflict.
    
    Since the war started in 2011, an estimated 470,000 people have been killed, including 55,000 children.
    
    Three-quarters of the population has been forced from their homes. In what used to be a middle-income country, four out of five people are now living in poverty. Hunger is widespread: almost 60% of people don’t have enough to eat.
    
    More than 2 million children are out of school – robbed of the chance to learn, grow and build a better future.
    
    Our response: Our teams and local partners we support have reached 4.2 million people, including 2.6 million children.
    
    We support health clinics and school to help children keep healthy and learning. We provide critical psychosocial support for children who have been through traumatic experiences and help reunite separated children with their families.
    
    YEMEN: “THE WORLD’S WORST HUMANITARIAN CRISIS”
    In Yemen, children are struggling every day to survive the triple threat of bombs, starvation and disease. Thousands of children have been killed and maimed in seven years of conflict. Today, more than 10 million children don’t have enough food to eat. 2 million children are out of school.
    
    With more than 20 million people – two-thirds of the population – in need of assistance, the UN has described the situation in Yemen as “the world’s worst humanitarian crisis”.
    
    Our response: As one of the biggest aid organisations on the ground, we distribute food and support health clinics and schools to help children keep healthy and learning. We’ve established safe spaces for children to play and learn.  
    
    We’re also lobbying governments and politicians to help save lives and protect the futures of children in Yemen.
    
    UKRAINE: 7.5 MILLION CHILDREN IN DANGER
    War in Ukraine has put 7.5 million children in grave danger of physical harm, severe emotional distress and displacement.
    
    In freezing temperatures, children and families under siege or forced from their homes are facing long days and nights exposed to brutal conditions. More than 1.7 million people have now fled Ukraine and are in urgent need of support.
    
    In eastern Ukraine, children and families have already lived through 8 years of conflict. Children have endured violence, shelling and displacement. Some are showing signs of extreme distress.
    
    Our response: Save the Children has worked in Ukraine since 2014. Our teams are responding where they can and are ready to do much more to support children and their families. In the worst-affected areas of eastern Ukraine, we're working through partners to meet the needs of children.
    
    We’re also responding in Romania and Poland, helping refugees arriving from Ukraine with clothes and other essential. Our appeal will reach 3.5 million children in their families that are in danger across the region.
    
    HOPE AND SOLIDARITY
    Right now, children around the world are facing the devastating impact of war. Will you help spread a message of hope and solidarity to children caught up in conflicts around the world?
    
    Take a simple action to show that you stand with children in conflict.
    
    Share a Flower for Children on your social media.`},


    { 
     excerpt: "The impact of Russia's use of explosive weapons on children in Ukraine.", 
     picture:  "https://www.savethechildren.org.uk/content/dam/global/images/countries/ukraine/ukraine-hero-2562x846-ch1118971.jpg/jcr:content/renditions/cq5dam.webp_thumbnail.1536.1536.webp",
     date: "Friday 11th March 2022",
     title: 'WHY CHILDREN ARE MOST AT RISK FROM EXPLOSIVE WEAPONS?',
     description: `WHAT’S GOING ON IN UKRAINE?

     Two weeks ago, the majority of Ukraine’s 7.5 million children woke up to an entirely new reality. Their schools were closed, their playgrounds inaccessible and the sounds of bombs and missiles were the new normal. 
     
     During the last fortnight we’ve witnessed images that seemed like a relic of European history. Russia’s military operations in Ukraine has put images of terrified children fleeing the country or dying in the back of ambulances onto the front pages of our newspapers. 
     
     As the BBC’s Lyse Doucet poignantly put it; “war is measured not just in troops and tanks, but the tears of terrified children.”
     
     WHY ARE CHILDREN MOST VULNERABLE TO EXPLOSIVE WEAPONS
     
     As I write the confirmed number of children killed is thirty-seven. Thirty-seven lives cut so brutally and unnecessarily short. This number is almost certainly a huge underestimate. The UN has verified that most of these casualties were caused by explosive weapons.
     
     Explosive weapons are designed to destroy military targets, to pierce the thick armour of tanks; imagine what they do to the bodies of small children.
     
     Children under two have thinner skin than older children and adults. They are more likely to suffer severe burns with resultant rapid loss of heat, fluid, and protein. Which can be deadly and impact a child much more than an adult.
     
     There are many unique characteristics and vulnerabilities that make children more susceptible to blast wound injuries than adults. Current data reveals that 80% of children injured by blasts have experienced penetrating injuries to the head. By comparison, only 31% of adult blast patients experienced the same injury.
     
     A study published by the Lancet found that in Syria children were seven times more likely to die from blast injuries than adults involved in the fighting.
     
     HOW ARE WE HELPING? 
     
     Treating children who have suffered from blast injury is a huge challenge for all medical staff —from first responders, surgeons, and physiotherapists to medical researchers, humanitarians, and policy makers. 
     
     Save the Children are proud to partner with Imperial College London to better support children who’ve been injured in conflict. Together we’ve developed a practical field manual which we are distributing to first responders, doctors and surgeons and those providing aftercare for children in the most dangerous places in the world. 
     
     Originally produced for medics in Syria the manual is now used in over thirteen conflict zones in five languages. We’re urgently having it translated into Russian and Ukrainian.
     
     This manual is a comprehensive guide for local medical teams who are often forced to operate on and treat children in difficult circumstances with limited specialist training.
     
     It provides evidence-based practices to help medical staff look after children right from the point of injury through to rehabilitation.
     
     HOW CAN YOU HELP? 
     
     Children in the East of Ukraine have already lived through eight years of conflict and now, as air strikes devastate homes, hospitals and schools, children across the country are on the frontline of the war. Right now, they face ever-present danger – of being killed, injured or suffering severe emotional distress. 
     
     `},


      { 
     excerpt: "Children are more at risk in conflict now than at any point in the last 20 years.", 
     picture:  "https://www.savethechildren.org.uk/content/dam/global/images/countries/ukraine/olha-ch1118961-hero2.jpg/jcr:content/renditions/cq5dam.webp_thumbnail.1536.1536.webp",
     date: "Friday 4th March 2022",
     title: "HOW WE'RE PROTECTING CHILDREN IN CONFLICT",
     description: `THE SITUATION FOR CHILDREN
     Our latest Stop The War on Children report, published in 2020, sheds light on a worrying trend of increased brutality against children in conflict – especially in the last few years. The number of UN-verified cases of killing and maiming of children has increased by nearly 300% since 2010.
     
     A staggering one in six children live in areas impacted by conflict – that’s about 426 million. And  the number of children living near to the most intense conflict zones rose significantly between 2018-19 alone – from 4 million to 9 million.
     
     And right now, the situation is critical. At least 15 children have already been killed in Ukraine; in Afghanistan, millions are cut off from life-saving services; in Yemen, almost seven years of war has left over 12 million children needing help - yet now, of all times, the UK government has cut its aid budget to Yemen by more than half.
     
     Find out more in our most recent report on the war on children: ‘Killed and Maimed: A generation of violations against children’
     
     WHAT ARE WE DOING TO PROTECT CHILDREN RIGHT NOW?
     Gareth Owen, our Humanitarian Director, breaks it down: 
     
     
     In Ukraine – where we’ve been working for over 7 years - we’re planning to deliver lifesaving aid to over 3 million children and their families. And we’re calling on the UK Government to make sure that they put Ukraine’s children at the heart of their response. 
     
     In Afghanistan, Yemen and Syria, donations from amazing people like you means we can reach children with the lifesaving aid they need – from something as small as a face mask or a first-aid kit, to something as large as a safe learning space for children in refugee camps.  
     
     You can find out more about the children behind the stats, and our work to help them, further down this blog.
     
     HOW CAN YOU HELP PROTECT CHILDREN?
     No matter how much time or money you’re able to spare, you can make an incredible difference for children living in conflict.
     
     A monthly donation of just £3 is enough to provide 18 food paste sachets for severely malnourished children.
     
     Or you can sign our petition calling directly on the UK Government to ensure Ukraine’s children aren’t forgotten, and that the UK can be a safe sanctuary for those fleeing.
     
     We’ve also got resources to help you, your friends and family stay informed:
     
     Our most recent report on children in conflict, ‘Killed and Maimed: A Generation of Violations Against Children’
     
     Our guide on how to talk to children about war
     
     THE CHILDREN BEHIND THE NUMBERS
     Every year, the UN publishes a report ‘naming and shaming’ warring parties who have perpetrated six grave violations of children’s rights in conflict. Here’s the six violations, and how they’re impacting children:
     
     1.     KILLING AND MAIMING OF CHILDREN IN CONFLICT
     More than one-third of killing and maiming violations were caused by explosive weapons – with the number dramatically higher in Afghanistan, Iraq and Syria.
     
     Afghanistan accounts for the greatest number, with 874 children killed and 2,275 children maimed in 2019 – 30% of the total number of children killed and maimed across all the conflict situations covered in the report.
     
     One of the greatest increases of verified incidents of killing and maiming in 2019 was in Mali, where there was a 130% rise. The number of children killed rose more sharply than those maimed - more than doubling from 77 to 185 between 2018 and 2019.`},



    { 
      excerpt: "Taking action: How we can help support mothers, caregivers and families.", 
      picture:  "https://www.savethechildren.org.uk/content/dam/gb/images/ruby-hs-mari-bloguseonly.jpg/jcr:content/renditions/cq5dam.webp_thumbnail.1536.1536.webp",
      date: "Friday 4th March 2022",
      title: 'FROM ONE MOTHER TO ANOTHER',
      description: `LUCK IS THE ONLY THING WHICH DETERMINES WHAT MAKES YOUR CHILD RUN INTO YOUR ARMS FROM FEAR 
      For my baby, its loud noises. For too many others, its bombs. 1 in 6 children live in conflict zones these days. When my baby is sick, she’s usually teething, or caught a bug at playgroup. For too many others, it’s because they haven’t eaten anything but bread for days, and their stomach hurts. Or maybe they drank dirty water, because that’s all there was.
      
      It's just luck that separates us, and geography.
      
      It’s easy to feel guilty about that, and helpless. I read somewhere the other day that ‘If you’re able to tuck a healthy child into a warm bed in a safe home, you’ve won the lottery of life’ and I thought, yes.
      
      PRIVILEGE, AND GRATITUDE
      No matter what your family’s situation, you go to the end of every limit you have for your kids, and then keep going. Every mother – every caregiver for a child they love – knows those moments.  
      
      Gratitude is so important, as is acknowledging the huge privilege mothers and caregivers like me have.
      
      But what use is that, to them? What use are these feelings as they hold their terrified children, surrounded by impossible choices? 
      
      They need action.
      
      So, if you feel the same, please join me. Let’s take action together, with solidarity of mothers and caregivers everywhere.
      
      EDUCATE YOURSELF
      Here are the main crises for children going on in the world, and the UK. You can also read one woman's account of her own struggles as a mother facing poverty, here in the UK.
      
      GET POLITICAL
      It can be easy to forget our government works for us – and it’s our duty to tell them what needs to be on the agenda. Raise your hand, and keep raising it. Help create the world we want for our children, and for children everywhere.
      
      GIVE MONTHLY DONATIONS
      Find a charity you support – and set up a monthly donation. It’s what enables charities to do arguably their most important work. The kind of work that goes on after a family's immediate needs have been taken care of.  Giving in emergencies is vital – but supporting charities long term projects transform children’s lives.
      
      They deserve more than the basic needs of warmth and shelter. They deserve to have a shot at their own dreams, just like anyone else. Just like we hope for the children we love.
      
      TALK TO YOUR CHILDREN
      They are the next generation – they will be the ones to truly make a change and their capacity for understanding and compassion is incredible. You can help them understand conflict too, with these tips from a psychologist and child counsellor at Save the Children. 
      
      TAKE CARE OF YOURSELF
      It’s ok – necessary even – at times to feel the weight of all this pain. The world feels like it’s in a terrible mess and it can be a frightening place to have babies and raise your children.
      
      A fellow mum at work the other day reminded me about how on airplanes they tell you to put your own mask on first, and it’s true. You can’t help your kids if you can’t even take a breath yourself. So, take that breath. Hold the people you love tightly, and put down the weight of responsibility you feel for even just a minute or two. 
      
      MOVING FORWARDS
      With strength and resilience we can channel our anger into action – and action is what these families need.  We need to fight the overwhelming trio of climate, conflict, Covid. Sometimes when I lie awake I worry that there’s too much, that we will never sort it out. But what I know from working here is that there are people everywhere who will never stop trying.
      
      And just like those nights that feel they’ll never end, when your babies need you and you ache for rest and for them to be okay, you keep going, because you have to.`},
  
  ];





  const [isMenuOpen, setMenuOpen] = useState(false)
 



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
    {/* start of hero */}
    <section className="hero-slider hero-style-1 hero-style-v2">
      <div className="swiper-container">
        <div className="swiper-wrapper">


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
                  <h2>Help children of war in Ukraine.</h2>
                </div>
                <div data-swiper-parallax={400} className="slide-text">
                  <p>
                  The conflict in Ukraine is forcing children and families in major cities into basements and bomb shelters to escape explosions.  
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
    <section className="about-section about-section-s2 section-padding p-t-0">
      <div className="container">
        <div className="row">
          <div className="col col-md-5">
            <div className="video-area">
              <img src={`${about}`} alt="" />
              <div className="video-holder">
                <a
                  href="https://youtu.be/v5aMyjeYuLI"
                  // className="video-btn"
                  // data-type="iframe"
                  // tabIndex={0}
                >
                 <i className="fi flaticon-play" />
                  {/* <i className="fi flaticon-play" /> */}
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
    <div className="features-area features-area2">
      <div className="container">
        <div className="col-12"></div>
        <div className="row">
          <div className="col-md-12">
            <div className="features-wrap">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
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
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
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
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
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
                        <a href="causes-single.html">Food &amp; Safe Home</a>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
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
    {/* cta-area start */}
    <div className="cta-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12 col-12">
            <div className="cta-left">
              <h2>
                If You Want To Join With Us As a Volunteer. Contact Us Today!
              </h2>
            </div>
          </div>
          <div className="col-lg-6 col-lg-offset-1 col-md-12 col-12">
            <div className="cta-wrap">
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
    {/* <div className="event-area section-padding">
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
        <img src={`${i1event}`} alt="" />
      </div>
      <div className="shape2">
        <img src={`${i2event}`} alt="" />
      </div>
    </div> */}
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
              <h2>Our Great Volunteers</h2>
              <p>
              Giving your time means giving children a chance to live their best lives.
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
                {/* <div className="test-img">
                  <img src={`${img1test}`} alt="" />
                </div>
                <div className="test-img">
                  <img src={`${img6cause}`} alt="" />
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
                  <div className="info">
                    {/* <h5>Tawana Blackman</h5>
                    <p>Volunteer</p> */}
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
        <img src={`${ts}`}alt="" />
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
              {/* <p>
                It is a long established fact that reader distracted by the the
                readable content off page looking at its layout point.
              </p> */}
            </div>
          </div>
        </div>
        <div className="blog-wrap">
          <div className="row">

       {blogs.map((e, index)=>{
         return (
           
 <div className="col col-md-6 col-12" key={index}>
            <Link
                to={"/detail"}
                state={{
                                            data: e,
                                          }} 
                >
              <div className="blog-item">
                
                <div className="blog-img">
                  <img src={`${e.picture}`} alt="" />
                </div>
                <div className="blog-content">
                  <ul>
                    <li>{e.date}</li>
                    <li>
                      <i className="fa fa-heart" aria-hidden="true" />
                      56
                    </li>
                    <li>
                      <i className="fa fa-comments-o" aria-hidden="true" /> 78
                    </li>
                  </ul>
                  <h2>
                  <Link
                to={"/detail"}
                state={{
                                            data: e,
                                          }} 
                >
                    <a href="">
                     {e.excerpt}
                    </a>
                    </Link>
                  </h2>
                </div>
              </div>
              </Link>
            </div>
          
         )
       })}
           



          </div>
        </div>
      </div>
    </div>
    {/* blog-area start */}

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

export default Home2;