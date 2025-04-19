<template>
  <div class="home-page">
    <div class="video-container" :style="{height: videoHeight}">
      <video autoplay nocontrols muted playsinline loop :style="{left: (videoFullSize ? videoLeft : '0')}" :class="(videoFullSize ? 'fullsize' : '')">
        <source src="/home-page-montage.mp4" type="video/mp4">
      </video>
      <div class="video-dark" />
      <div class="text-container">
        <div class="bot">
          <div class="mouse-scroll" :style="{opacity: mouseScrollOpacity}">
            <div class="mouse">
              <div class="wheel"></div>
            </div>
            <div class="m-scroll-arrow-container">
              <span class="m-scroll-arrows one"></span>
              <span class="m-scroll-arrows two"></span>
              <span class="m-scroll-arrows three"></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section-2">
      <bigInfo :data="mission" />
    </div>

    <div class="section">
      <div class="title-green">Recent Projects</div>

      <div class="projects-container">
        <template v-for="(obj, i) of projects" :key="i">
          <div class="project">
            <div class="image">
              <img :src="obj.imageUrl" :style="{filter: 'brightess(1.7)'}">
            </div>
            <div class="title">{{ obj.title }}</div>
            <div class="description">{{ obj.description }}</div>
          </div>
        </template>
      </div>
    </div>

    <div class="section-2">
      <bigInfo :data="statement" />
    </div>

    <div class="section-carousel">
      <div class="title-green">Our Clients</div>

      <div id="gallery-carousel-container">
        <div id="carousel" class="f-carousel">
          <template v-for="(obj, i) of companyLogos" :key="i">
            <div class="f-carousel__slide" :data-thumb-src="obj">
              <img :data-lazy-src="obj">
            </div>
          </template>
        </div>
      </div>
    </div>

    <!-- We may or may not use this section later, so keep it commented out for now -->
    <!--
      <div class="section">
        <div class="title-green">Meet Our Team</div>

        <div class="team-container">
          <template v-for="(obj, i) of meetOurTeam" :key="i">
            <div class="client">
              <div class="portrait-container">
                <img :src="obj.imageUrl">
              </div>

              <div class="text-container">
                <div class="name">{{ obj.title }}</div>
                <div class="bio">{{ obj.description }}</div>
              </div>
            </div>
          </template>
        </div>
      </div>
    -->

    <div class="section-2">
      <bigInfo :data="values" />
    </div>

    <div class="section">
      <div class="title-green">We're always hiring!</div>

      <a href="https://forms.monday.com/forms/2508cf20417e001e8c04ec60a52e4945" target="_blank">
        <div class="button-1">Check Open Positions</div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
  import "@fancyapps/ui/dist/carousel/carousel.thumbs.css";
  import "@fancyapps/ui/dist/carousel/carousel.css";
  import "@fancyapps/ui/dist/fancybox/fancybox.css";
  import "@fancyapps/ui/dist/carousel/carousel.autoplay.css";
  import { ref, onMounted, onUnmounted } from "vue";
  import { Autoplay } from "@fancyapps/ui/dist/carousel/carousel.autoplay.esm.js";
  import { Carousel } from "@fancyapps/ui/dist/carousel/carousel.esm.js";
  import { Fancybox } from "@fancyapps/ui/dist/fancybox/fancybox.esm.js";
  import Timeline from "primevue/timeline";
  import svgClipboard from "@/assets/svg/clipboard.vue";
  import svgToolbox from "@/assets/svg/toolbox.vue";
  import svgUserTie from "@/assets/svg/user-tie.vue";
  import svgWrench from "@/assets/svg/wrench.vue";
  import bigInfo from "@/components/big-info.vue";

  // Data properties
  const videoHeight = ref("100vh");
  const videoFullSize = ref(true);
  const videoLeft = ref("0");
  const mouseScrollOpacity = ref("1");
  const currentSlide = ref(0);
  const previousSlide = ref(-1);

  const mission = {
    title: "Mission",
    text: [`To be the preferred "go to" resource for our clients for all electrical service initiatives. Embodied through a collaborative relationship that is effective, efficient and continually produces the desired results. Less about the transaction, but more about understanding our business partners' needs and demands, overcoming challenges and exceeding their daily expectations.`]
  };

  const statement = {
    title: "Statement",
    text: [`Here at LumaNation Commercial LLC our mission is to uphold the highest standards of quality, integrity, teamwork, and safety. We are dedicated to delivering exceptional services while maintaining unwavering commitment and support in all our interactions. Through collaboration and teamwork, we strive to exceed expectations, fostering an environment where innovation and excellence thrive. Our values form the foundation of our commitment to excellence, guiding every aspect of our operations as we work together to achieve shared success.`]
  };

  const values = {
    title: "Values",
    text: [
      `God: We view our work as a calling to reflect Christ's love and integrity, striving for excellence to glorify Him and serve others.`,
      `Commitment: We are dedicated to exceeding expectations through hard work, perseverance, and building long-term client relationships.`,
      `Integrity: We prioritize honesty, transparency, and doing what is morally upright, fostering trust and creating a positive, reliable environment.`,
      `Trust: We build strong, lasting relationships by honoring commitments, delivering quality work, and ensuring transparency.`,
      `Communication: We value clear, timely, and open communication to foster trust, collaboration, and precision in all projects.`
    ]
  };

  const culture = {
    title: "Culture",
    text: [`At LumaNation, we value our people as our greatest asset and are committed to fostering a culture of respect, collaboration, and growth. Built on integrity, innovation, and excellence, we encourage open communication and accountability to support our team's development. Balancing work and life is essential to us, fueling a shared purpose to make a positive impact within our company and beyond.`]
  };

  const projects = [
    {
      title: "BMW McKinney",
      description: "This project involved the construction of a new BMW dealership by Hendrix Motorsports, located off Highway 75 in Wilmouth. The scope of work included providing power and lighting throughout the dealership and service areas, as well as installing 99 light poles to illuminate the parking lot. Additionally, electrical controls and lighting were installed for a detached car wash facility. Showroom lighting was designed to enhance the customer experience, while all HVAC units, including air conditioning and heating systems, were wired for full functionality.",
      imageUrl: "/projects/bmw-mckinney.jpg"
    },
    {
      title: "Wash Masters - Lynn Creek",
      description: "Victron Group’s Grand Prairie flagship convenience store and car wash features a 6,000 sq. ft. Gateway store with Dunkin’ Donuts and Jimmy John’s, custom lighting, a beer cave, and six fuel dispensers. The adjacent 6,400 sq. ft. Wash Masters Car Wash includes a 125’ automated tunnel, 50+ motors, and ambiance lighting for its 17-vacuum stall area. LumaNation handled all lighting, power, fire alarm, low-voltage/security conduit, and complete fuel system wiring for the project.",
      imageUrl: "/projects/washmasters.jpg"
    },
    {
      title: "Haven Apartments",
      description: "The Haven, a premier residential development in Durant, Oklahoma, spans 6.94 acres between the Choctaw Nation headquarters and Choctaw Casino & Resort. Phase One, opening in October 2024, introduces 216 modern multi-family units with amenities like a clubhouse, pool, and playground, fostering a vibrant, community-centered environment. This initial phase launches a multi-phase project enhancing residential comfort near local landmarks, making The Haven a desirable living option for individuals and families in Durant.",
      imageUrl: "/projects/project-5.jpg"
    },
    {
      title: "Goddard Princeton",
      description: "The Goddard School daycare center in Princeton, Texas, involved the construction of a new facility with electrical power and lighting for classrooms, a gymnasium, and a kitchen, providing safe and efficient illumination for daily activities. The project also included the installation of a parking lot and exterior lighting to enhance safety and visibility for staff and parents. All electrical systems met industry standards for safety, functionality, and energy efficiency. Successful completion required careful coordination with other trades to ensure the project was finished on time and to the highest quality standards.",
      imageUrl: "/projects/goddard-school-princeton.jpg"
    },
    {
      title: "Prosper Campus",
      description: "The project involves the expansion of One Community Church in Prosper, Texas, with the addition of a 13,000 square foot student center. The scope includes providing power, lighting, and electrical services to support the new space, ensuring adequate illumination and functionality. A new DMX-controlled theatrical lighting system will be integrated, compatible with the church's existing system. Additionally, dedicated power will be supplied for theatrical lighting equipment and other specialized setups. High-base lighting will be installed in the gymnasium, and new power and lighting will be added for an expanded parking lot to enhance safety and visibility. The project will require coordination across various trades to meet all design and functional requirements.",
      imageUrl: "/projects/prosper-campus.png"
    },
    {
      title: "Urban Garages - McKinney",
      description: "This construction project involved the development of four commercial buildings for lease spaces in McKinney, Texas. The scope of work included installing underground infrastructure for 800-amp services and site lighting to serve four commercial units in each building. Key tasks included setting 200-amp electrical panels for each unit, running electrical piping and wiring for interior house lighting and HVAC systems, and installing light poles and exterior building lighting for enhanced visibility. Additionally, conduit was provided for low-voltage systems within each unit, and fire riser rooms were wired and terminated in each building to meet safety requirements.",
      imageUrl: "/projects/urban-garages-mckinney.jpg"
    }
  ];

  const meetOurTeam = [
    {
      title: "Gary Dunn",
      description: "CEO of LumaNation Commercial, has led the company to rapid growth, reaching over $8 million in revenue and solidifying its role as a top electrical contracting provider. With 25+ years of executive experience, including positions at a Fortune 5 company and in government LED manufacturing, Gary champions quality, safety, and client satisfaction. His Christian values guide his leadership, fostering trusted partnerships and innovative solutions for commercial and industrial clients.",
      imageUrl: "/clients/gary-dunn.jpg"
    },
    {
      title: "John Kingsolver",
      description: "A fourth-generation Electrical Foreman with over 25 years in the trade, began in a family-owned Colorado business before advancing in telecommunications across several states. Rising from apprentice to project manager, he earned a reputation for quality, client commitment, and collaboration. Now, as Vice President of Operations at LumaNation, he brings his expertise and dedication to drive successful project outcomes.",
      imageUrl: "/clients/john-kingsolver.jpg"
    },
    {
      title: "Shane Steiger",
      description: "A seasoned Electrical Project Manager with over 30 years of experience, excels in managing complex projects from commercial developments to industrial installations. Known for his technical expertise and leadership, he coordinates teams, meets timelines, and upholds safety and quality standards. Dedicated to client satisfaction, Shane uses advanced tools, clear communication, and a proactive approach to deliver each project on time and within budget.",
      imageUrl: "/clients/shane-steiger.jpg"
    }
  ];

  const companyLogos = [
    "/company-logos/cooper-general-contractors.webp",
    "/company-logos/dhs.png",
    "/company-logos/haven-durant.webp",
    "/company-logos/wash-masters-car-wash.webp",
    "/company-logos/bmw.png",
    "/company-logos/one-community-church.png",
    "/company-logos/logo.png",
    "/company-logos/exxon-mobil.png",
    "/company-logos/first-mckinney-baptist-church.png",
    "/company-logos/logo_CaliberCarWash.png",
    "/company-logos/ardagh-group.png",
    "/company-logos/sms-infocomm-corporation.png",
    "/company-logos/dynacraft.png",
    "/company-logos/MEDART INC 4K LOGO web.webp",
    "/company-logos/united-states-marine-corps.png",
    "/company-logos/splash-brands.webp",
    "/company-logos/snap-clean-car-wash.webp",
    "/company-logos/urban-garages.webp",
    "/company-logos/abg.png",
    "/company-logos/jimmy-johns.png",
    "/company-logos/dunkin-donuts.png"
  ];

  const fancyboxOptions = {
    // Carousel: {
    //   infinite: false,
    //   center: true,
    //   dragFree: true
    // },
    // contentClick: "close",
    // click: false,
    // Toolbar: {
    //   display: {
    //     left: ["infobar"],
    //     middle: [],
    //     right: ["thumbs", "download", "close"]
    //   }
    // },
    // Thumbs: {
    //   showOnStart: true
    // },
    on: {
      init: () => {
        previousSlide.value = currentSlide.value;
      },
      shouldClose: (unused: unknown, event: Event) => {
        if (previousSlide.value !== currentSlide.value) {
          previousSlide.value = currentSlide.value;
          (event).preventDefault();
        }
      }
    }
  };

  const careerPath = [
    {
      title: "Electrician",
      text: "Start as an apprentice or trainee, gaining hands-on experience in basic construction tasks. Learn essential safety protocols and tools used on job sites.",
      icon: "svgWrench"
    },
    {
      title: "Lead Electrician",
      text: "Progress to a skilled trade as an electrician or equipment operator. Continue developing technical expertise and the electrician trade, and assisting with leading projects.",
      icon: "svgToolbox"
    },
    {
      title: "Foreman",
      text: "Move into a leadership role, overseeing teams and managing projects. Focus on safety, quality, and efficiency while mentoring less experienced workers.",
      icon: "svgClipboard"
    },
    {
      title: "Superintendent",
      text: "Advance to project management or executive-level roles. Lead entire construction projects, from planning to completion, while managing budgets, timelines, and client relationships.",
      icon: "svgUserTie"
    }
  ];

  const Resize = () => {
    if (window.innerWidth / 1.75 > window.innerHeight) {
      videoHeight.value = "100vh";
      videoFullSize.value = true;
    } else {
      videoHeight.value = `${window.innerWidth / 1.75}px`;
      videoFullSize.value = false;
    }

    if (window.innerWidth >= 650) {
      videoLeft.value = `-${window.innerWidth}px`;
    } else {
      const newLeft = 2/5 * window.innerWidth - 960;
      videoLeft.value = `${newLeft}px`;
    }
  };

  const Scroll = () => {
    if (window.scrollY < 200) mouseScrollOpacity.value = "1";
    else                      mouseScrollOpacity.value = "0";
  };

  onMounted(() => {
    Resize();
    window.addEventListener("resize", Resize);
    window.addEventListener("scroll", Scroll);

    // Carousel
    const container = document.getElementById("carousel");
    if (!container) return;

    const carouselOptions = {
      Autoplay: {
        showProgress: false,
        timeout: 3000
      },
      dots: true,
      infinite: true,
      // dragFree: true,
      slidesPerPage: 3,
      transition: "slide",
      on: {
        change: (instance: { page: number; }) => {
          currentSlide.value = instance.page;
        }
      }
    };

    new Carousel(container, carouselOptions, { Autoplay });
    Fancybox.bind(container, "[data-fancybox]", fancyboxOptions);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", Resize);
    window.removeEventListener("scroll", Scroll);
  });
</script>

<style lang="scss">
  @media only screen and (min-width: 600px) {
    #carousel {
      .f-carousel__slide {
        width: 50%;

        > img {
          height: 100px;
          max-width: 48%;
          object-fit: contain;
        }
      }
    }
  }

  @media only screen and (min-width: 800px) {
    #carousel {
      .f-carousel__slide {
        width: 33.33%;

        > img {
          height: 100px;
          max-width: 32%;
          object-fit: contain;
        }
      }
    }
  }

  @media only screen and (max-width: 600px) {
    #carousel {
      .f-carousel__slide {
        width: 100%;

        > img {
          height: 100px;
          max-width: 90%;
          object-fit: contain;
        }
      }
    }
  }

  #carousel {
    .f-carousel__slide {
      display: flex;
      justify-content: center;

      img {
        height: 100px;
      }
    }
  }
</style>

<style scoped lang="scss">
  // 1. Primary Colors:
  $--primary-1: #4b4b4b;
  $--primary-2: #2c2c2c;
  $--primary-3: #1c2a3e;

  // 2. Accent Colors:
  $--accent-1: #253472;
  $--accent-2: #ffc300;
  $--accent-3: #2ecc71;

  // 3. Neutral Colors:
  $--neutral-1: hsl(0, 0%, 90%);
  $--neutral-2: hsl(0, 0%, 95%);

  .carousel-img-container {
    display: flex;
  }

  .home-page {
    > .video-container {
      margin: auto;
      width: 100%;
      height: 100vh;
      overflow: hidden;
      transform: translateZ(0);

      > video {
        position: absolute;
        transform: translateZ(0);
        top: -100%;
        bottom: -100%;
        margin: auto;
        min-width: 100%;
        min-height: 100%;

        &:not(.fullsize) {
          height: 100%;
        }

        &.fullsize {
          right: -100%;
        }
      }

      > .video-dark {
        width: 100%;
        height: 100%;
        background-color: hsla(0, 0%, 0%, 0.2);
        // background-color: hsla(0, 0%, 0%, 0.7);
        transform: translatez(1px);
      }

      > .text-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        // height: 100px;
        bottom: 0;
        position: absolute;
        transform: translatez(2px);
        font-family: "Oswald";

        > .top {
          > .title {
            color: $--neutral-1;
            filter: drop-shadow(0px 0px 5px $--accent-1);
            font-size: 5rem;
            font-weight: bold;
            letter-spacing: 1px;
            margin: 0 16px 16px 16px;
            line-height: 96px;
          }

          > .subtitle {
            color: #fff;
            font-size: 1.25rem;
            margin: 0 16px 16px 16px;
            letter-spacing: 1px;
          }
        }

        > .bot {
          display: flex;
          flex-direction: column;

          > .mouse-scroll {
            margin: 16px auto;
            transition: opacity 0.8s ease-out;

            > .mouse {
              height: 42px;
              width: 24px;
              border-radius: 14px;
              transform: none;
              border: 2px solid white;
              top: 170px;

              > .wheel {
                height: 5px;
                width: 2px;
                display: block;
                margin: 5px auto;
                background: white;
                position: relative;

                height: 4px;
                width: 4px;
                border: 2px solid #fff;
                border-radius: 8px;
                -webkit-border-radius: 8px;
                -webkit-animation: mouse-wheel 0.6s linear infinite;
                -moz-animation: mouse-wheel 0.6s linear infinite;
                animation: mouse-wheel 0.6s linear infinite;
              }
            }

            > .m-scroll-arrow-container {
              > .m-scroll-arrows {
                display: block;
                width: 5px;
                height: 5px;
                -ms-transform: rotate(45deg); /* IE 9 */
                -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */
                transform: rotate(45deg);
                border-right: 2px solid white;
                border-bottom: 2px solid white;
                margin: 0 0 3px 4px;
                width: 16px;
                height: 16px;
              }

              > .one, > .two, > .three {
                -webkit-animation: mouse-scroll 1s infinite;
                -moz-animation: mouse-scroll 1s infinite;
                animation: mouse-scroll 1s infinite;
              }

              > .one {
                margin-top: 1px;
              }

              > .one {
                -webkit-animation-delay: .1s;
                -moz-animation-delay: .1s;
                -webkit-animation-direction: alternate;
                animation-direction: alternate;
                animation-delay: alternate;
              }

              > .two {
                -webkit-animation-delay: .2s;
                -moz-animation-delay: .2s;
                -webkit-animation-direction: alternate;
                animation-delay: .2s;
                animation-direction: alternate;
                margin-top: -6px;
              }

              > .three {
                -webkit-animation-delay: .3s;
                -moz-animation-delay: .3s;
                -webkit-animation-direction: alternate;
                animation-delay: .3s;
                animation-direction: alternate;
                margin-top: -6px;
              }
            }
          }
        }
      }
    }

    /*
    > .video-container {
      margin: auto;
      width: 100%;
      height: 100vh;
      overflow: hidden;
      transform: translatez(0);

      > video {
        width: 100%;

        &.fullsize {
          height: 100%;

          position: absolute;
          top: -100%;
          bottom: -100%;
          right: -100%;
          margin: auto;

          min-width: 100%;
          min-height: 100%;

          transform: translatez(0);
        }
      }

      > .video-dark {
        width: 100%;
        height: 100%;
        background-color: hsla(0, 0%, 0%, 0.2);
        // background-color: hsla(0, 0%, 0%, 0.7);
        transform: translatez(1px);
      }

      > .text-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        // height: 100px;
        bottom: 0;
        position: absolute;
        transform: translatez(2px);
        font-family: "Oswald";

        > .top {
          > .title {
            color: $--neutral-1;
            filter: drop-shadow(0px 0px 5px $--primary-1);
            font-size: 5rem;
            font-weight: bold;
            letter-spacing: 1px;
            margin: 0 16px 16px 16px;
            line-height: 96px;
          }

          > .subtitle {
            color: #fff;
            font-size: 1.25rem;
            margin: 0 16px 16px 16px;
            letter-spacing: 1px;
          }
        }

        > .bot {
          display: flex;
          flex-direction: column;

          > .mouse-scroll {
            margin: 16px auto;
            transition: opacity 0.8s ease-out;

            > .mouse {
              height: 42px;
              width: 24px;
              border-radius: 14px;
              transform: none;
              border: 2px solid white;
              top: 170px;

              > .wheel {
                height: 5px;
                width: 2px;
                display: block;
                margin: 5px auto;
                background: white;
                position: relative;

                height: 4px;
                width: 4px;
                border: 2px solid #fff;
                border-radius: 8px;
                -webkit-border-radius: 8px;
                -webkit-animation: mouse-wheel 0.6s linear infinite;
                -moz-animation: mouse-wheel 0.6s linear infinite;
                animation: mouse-wheel 0.6s linear infinite;
              }
            }

            > .m-scroll-arrow-container {
              > .m-scroll-arrows {
                display: block;
                width: 5px;
                height: 5px;
                -ms-transform: rotate(45deg);
                -webkit-transform: rotate(45deg);
                transform: rotate(45deg);
                border-right: 2px solid white;
                border-bottom: 2px solid white;
                margin: 0 0 3px 4px;
                width: 16px;
                height: 16px;
              }

              > .one, > .two, > .three {
                -webkit-animation: mouse-scroll 1s infinite;
                -moz-animation: mouse-scroll 1s infinite;
                animation: mouse-scroll 1s infinite;
              }

              > .one {
                margin-top: 1px;
              }

              > .one {
                -webkit-animation-delay: .1s;
                -moz-animation-delay: .1s;
                -webkit-animation-direction: alternate;
                animation-direction: alternate;
                animation-delay: alternate;
              }

              > .two {
                -webkit-animation-delay: .2s;
                -moz-animation-delay: .2s;
                -webkit-animation-direction: alternate;
                animation-delay: .2s;
                animation-direction: alternate;
                margin-top: -6px;
              }

              > .three {
                -webkit-animation-delay: .3s;
                -moz-animation-delay: .3s;
                -webkit-animation-direction: alternate;
                animation-delay: .3s;
                animation-direction: alternate;
                margin-top: -6px;
              }
            }
          }
        }
      }
    }
    */

    > .panel-1 {
      display: flex;
      flex-direction: column;
      width: 100%;
      font-family: "RobotoFlex";
      background-color: hsl(200, 15%, 19%);
      color: #fff;
    }
  }

  @-webkit-keyframes mouse-wheel{
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
      transform: translateY(0);
    }

    100% {
      opacity: 0;
      -webkit-transform: translateY(6px);
      -ms-transform: translateY(6px);
      transform: translateY(6px);
    }
  }

  @-moz-keyframes mouse-wheel {
    0%   { top: 1px; }
    25%  { top: 2px; }
    50%  { top: 3px; }
    75%  { top: 2px; }
    100% { top: 1px; }
  }

  @-o-keyframes mouse-wheel {
    0%   { top: 1px; }
    25%  { top: 2px; }
    50%  { top: 3px; }
    75%  { top: 2px; }
    100% { top: 1px; }
  }

  @keyframes mouse-wheel {
    0%   { top: 1px; }
    25%  { top: 2px; }
    50%  { top: 3px; }
    75%  { top: 2px; }
    100% { top: 1px; }
  }

  @-webkit-keyframes mouse-scroll {
    0%   { opacity: 0;  }
    50%  { opacity: .5; }
    100% { opacity: 1;  }
  }

  @-moz-keyframes mouse-scroll {
    0%   { opacity: 0;  }
    50%  { opacity: .5; }
    100% { opacity: 1;  }
  }

  @-o-keyframes mouse-scroll {
    0%   { opacity: 0;  }
    50%  { opacity: .5; }
    100% { opacity: 1;  }
  }

  @keyframes mouse-scroll {
    0%   { opacity: 0;  }
    50%  { opacity: .5; }
    100% { opacity: 1;  }
  }

  .team-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-family: "Oswald";
    max-width: 1400px;

    > .client {
      display: flex;
      flex-direction: column;
      background-color: $--primary-3;
      color: $--neutral-1;
      border: 2px solid $--accent-2;
      max-width: 400px;
      margin: 0.5rem;
      padding: 1rem;
      border-radius: 0.5rem;
      box-shadow: 0px 4px 8px 2px rgb(0 0 0 / 30%);

      > .portrait-container {
        display: flex;
        justify-content: center;

        > img {
          width: 133px;
          height: 133px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid silver;
        }
      }

      > .text-container {
        display: flex;
        align-items: center;
        flex-direction: column;

        > .name {
          display: flex;
          margin: 8px;
          text-align: center;
          font-size: 2.5rem;
          font-weight: bold;
        }

        > .bio {
          display: flex;
          text-align: center;
          padding: 0 16px 16px 16px;
          font-size: 1.2rem;
        }
      }
    }
  }
</style>

<style scoped lang="scss">
  // 1. Primary Colors:
  $--primary-1: #4b4b4b;
  $--primary-2: #2c2c2c;
  $--primary-3: #1c2a3e;
  $--primary-4: hsl(0 0% 90% / 1);

  // 2. Accent Colors:
  $--accent-1: #253472;
  $--accent-2: #ffc300;
  $--accent-3: #2ecc71;

  $--neutral-1: hsl(0, 0%, 90%);
  $--neutral-2: hsl(0, 0%, 95%);

  .career-path-container {
    &.desktop {
      .p-timeline {
        .p-timeline-event {
          height: 18rem;

          &:nth-child(odd) .card {
            transform: translateX(-1rem);
          }

          &:nth-child(even) .card {
            transform: translateX(1rem);
          }

          .p-timeline-event-content {
            width: 25rem;
          }

          .p-timeline-event-separator {
            justify-content: center;
            // min-height: 10rem !important;

            .icon {
              display: flex;
              z-index: 1;
              background-color: #e6e6e6;
              padding: 0.25rem 0;
              fill: $--primary-3;
              width: 2rem
            }

            .p-timeline-event-connector {
              position: absolute;
              width: 2px;
              background-color: $--accent-3;
              height: 100%;

              &.final {
                height: 50%;
                top: 0;
              }
            }
          }

          .p-timeline-event-opposite {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 10rem;

            .card {
              position: absolute;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              border: 2px solid $--primary-3;
              border-radius: 0.5rem;
              width: 100%;
              height: 100%;
              padding: 0.5rem;
              box-shadow: 0px 0px 20px 2px hsl(0deg 0% 0% / 30%);

              > .title {
                text-align: center;
                font-family: "Oswald";
                font-size: 1.6rem;
                margin: 0.5rem 0;
                letter-spacing: 0.5px;
              }

              > .divider {
                width: 80%;
                height: 2px;
                background-color: $--accent-3;
              }

              > .text {
                text-align: center;
                font-family: "RobotoFlex";
                font-size: 1.2rem;
                margin: 0.5rem 0;
              }
            }
          }
        }
      }
    }

    &.mobile {
      .p-timeline {
        .p-timeline-event {
          height: 18rem;
          padding-bottom: 1rem;

          // &:nth-child(odd) .card {
          //   // transform: translateX(-1rem);
          // }

          // &:nth-child(even) .card {
          //   // transform: translateX(1rem);
          // }

          .p-timeline-event-content {
            // width: 0rem;
            // flex-shrink: 999999;
            flex: 0;
          }

          .p-timeline-event-separator {
            justify-content: center;

            .icon {
              display: flex;
              z-index: 1;
              background-color: #e6e6e6;
              padding: 0.25rem 0;
              fill: $--primary-3;
              width: 2rem
            }

            .p-timeline-event-connector {
              position: absolute;
              width: 2px;
              background-color: $--accent-3;
              height: 100%;

              &.final {
                height: 50%;
                top: -1rem;
              }
            }
          }

          .p-timeline-event-opposite {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 16rem;
            margin-right: 1rem;

            .card {
              position: absolute;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              border: 2px solid $--primary-3;
              border-radius: 0.5rem;
              width: 100%;
              height: 100%;
              padding: 0.5rem;
              box-shadow: 0px 0px 20px 2px hsl(0deg 0% 0% / 30%);

              > .title {
                text-align: center;
                font-family: "Oswald";
                font-size: 1.6rem;
                margin: 0.5rem 0;
                letter-spacing: 0.5px;
              }

              > .divider {
                width: 80%;
                height: 2px;
                background-color: $--accent-3;
              }

              > .text {
                text-align: center;
                font-family: "RobotoFlex";
                font-size: 1.2rem;
                margin: 0.5rem 0;
              }
            }
          }
        }
      }
    }
  }

  .projects-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1200px;

    > .project {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-between;
      border-radius: 8px;
      background-color: $--primary-3;
      color: $--neutral-1;
      box-shadow: 0px 4px 8px 2px rgb(0 0 0 / 30%);
      width: 300px;
      margin: 8px;

      > .image {
        display: flex;
        max-width: 300px;
        max-height: 200px;

        > img {
          width: 300px;
          height: 200px;
          object-fit: cover;
          border-bottom: 2px solid $--accent-2;
          border-radius: 8px 8px 0 0;
        }
      }

      > .title {
        display: flex;
        margin: 8px;
        text-align: center;
        font-size: 1.5rem;
        font-weight: bold;
        font-family: "Oswald";
        color: $--accent-2;
      }

      > .description {
        display: flex;
        flex-grow: 1;
        text-align: center;
        padding: 0 16px 16px 16px;
        font-family: "RobotoFlex";
      }
    }
  }
</style>

<style scoped lang="scss">
  @media only screen and (min-width: 700px) {
    .career-path-container.desktop { display: flex; }
    .career-path-container.mobile  { display: none; }
  }

  @media only screen and (max-width: 700px) {
    .career-path-container.desktop { display: none; }
    .career-path-container.mobile  { display: flex; }
  }
</style>
