<template>
  <div class="home-page">
    <div class="video-container">
      <video autoplay nocontrols muted playsinline loop :style="{left: videoLeft}">
        <source src="/site-1.mp4" type="video/mp4">
      </video>
      <div class="video-dark" />
      <div class="text-container">
        <div class="top">
          <!-- <div class="title">Crafting<br>Excellence</div> -->
          <!-- <div class="title">Bringing<br>buildings to life</div> -->
          <div class="title">Bringing<br>Buildings to life</div>
           <!-- to life -->
          <div class="subtitle">Bringing buildings to life</div>
        </div>
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
      <div class="mission-statement-container">
        <div class="left title">Mission</div>
        <div class="divider" />
        <div class="right">
          <div class="card">To be the preferred "go to" resource for our clients for all electrical service initiatives. Embodied through a collaborative relationship that is effective, efficient and continually produces the desired results. Less about the transaction, but more about understanding our business partners' needs and demands, overcoming challenges and exceeding their daily expectations.</div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="title">Recent Projects</div>

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
      <div class="mission-statement-container">
        <div class="left title">Statement</div>
        <div class="divider" />
        <div class="right">
          <div class="card">
            <!-- It is our belief that every satisfied client is a potential partner for future opportunities and our employees contribute directly to the success and growth of this company. We take pride in our associates and make every effort to provide an educational development program customized to maximize the succession plan and opportunity desire of each person. -->
            Here at LumaNation Commercial LLC our mission is to uphold the highest standards of quality, integrity, teamwork, and safety. We are dedicated to delivering exceptional services while maintaining unwavering commitment and support in all our interactions. Through collaboration and teamwork, we strive to exceed expectations, fostering an environment where innovation and excellence thrive. Our values form the foundation of our commitment to excellence, guiding every aspect of our operations as we work together to achieve shared success.
          </div>
        </div>
      </div>
    </div>

    <!-- Meet our Team, have a couple of faces, so when you click on them it will go to the person? -->
    <div class="section">
      <div class="title">Meet Our Team</div>

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

    <div class="section-2">
      <div class="mission-statement-container">
        <div class="left title">Culture</div>
        <div class="divider" />
        <div class="right">
          <div class="card">
            <!-- It is our belief that every satisfied client is a potential partner for future opportunities and our employees contribute directly to the success and growth of this company. We take pride in our associates and make every effort to provide an educational development program customized to maximize the succession plan and opportunity desire of each person. -->
            Text for culture goes here
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="title">Career Path</div>

      <div class="career-path-container">
        <Timeline :value="careerPath" align="alternate" class="customized-timeline">
          <template #opposite="slotProps">
            <div class="card">
              <div class="title">{{ slotProps.item.title }}</div>
              <div class="divider" />
              <div class="text">{{ slotProps.item.text }}</div>
            </div>
          </template>
          <template #marker="slotProps">
            <div class="icon">
              <component :is="slotProps.item.icon" />
            </div>
            <div v-if="slotProps.index + 1 === careerPath.length" class="p-timeline-event-connector final" />
          </template>
        </Timeline>
      </div>
    </div>

    <div class="section-2">
      <div class="title">We are always hiring!</div>

      <RouterLink to="/careers">
        <div class="button-1">Check Open Positions</div>
      </RouterLink>
    </div>

    <!-- For the clients, it will be specific companies, so it will contain the logo. We could also have carsoluell of all of the companies -->
    <!-- Clients: -->
    <!-- https://coopergencon.com/ -->
    <div class="section-carousel">
      <div class="title">Our Clients</div>

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
  </div>
</template>

<script lang="ts">
  import "@fancyapps/ui/dist/carousel/carousel.thumbs.css";
  import "@fancyapps/ui/dist/carousel/carousel.css";
  import "@fancyapps/ui/dist/fancybox/fancybox.css";
  import "@fancyapps/ui/dist/carousel/carousel.autoplay.css";
  import { defineComponent } from "vue";
  import { Autoplay } from "@fancyapps/ui/dist/carousel/carousel.autoplay.esm.js";
  import { Carousel } from "@fancyapps/ui/dist/carousel/carousel.esm.js";
  import { Fancybox } from "@fancyapps/ui/dist/fancybox/fancybox.esm.js";
  import Timeline from "primevue/timeline";
  import svgClipboard from "@/assets/svg/clipboard.vue";
  import svgToolbox from "@/assets/svg/toolbox.vue";
  import svgUserTie from "@/assets/svg/user-tie.vue";
  import svgWrench from "@/assets/svg/wrench.vue";

  export default defineComponent({
    components: {
      Timeline: Timeline as any,
      svgClipboard,
      svgToolbox,
      svgUserTie,
      svgWrench
    },
    data: function () {
      return {
        videoLeft: "0",
        mouseScrollOpacity: "1",
        projects: [
          {
            title: "BMW McKinney",
            description: "Placholder text.",
            imageUrl: "/projects/bmw-mckinney.jpg"
          },
          {
            title: "Goddard Princeton",
            description: "Placeholder text.",
            imageUrl: "/projects/goddard-school-princeton.jpg"
          },
          {
            title: "Wash Masters - Lynn Creek",
            description: "Placholder text.",
            imageUrl: "/projects/washmasters.png"
          },
          {
            title: "Prosper Campus",
            description: "Placeholder text.",
            imageUrl: "/projects/prosper-campus.png"
          },
          {
            title: "New Haven Apartments",
            description: "Placholder text.",
            imageUrl: "/projects/project-5.jpg"
          },
          {
            title: "Urban Garages - McKinney",
            description: "Placeholder text.",
            imageUrl: "/projects/urban-garages-mckinney.jpg"
          }
        ],
        meetOurTeam: [
          {
            title: "Gary Dunn",
            description: "CEO of LumaNation Commercial, has led the company to rapid growth, reaching over $8 million in revenue and solidifying its role as a top electrical contracting provider. With 25+ years of executive experience, including positions at a Fortune 5 company and in government LED manufacturing, Gary champions quality, safety, and client satisfaction. His Christian values guide his leadership, fostering trusted partnerships and innovative solutions for commercial and industrial clients.",
            imageUrl: "/clients/gary-dunn.jpg"
          },
          {
            title: "John Kingsolver",
            description: "A fourth-generation Master Electrician with over 25 years in the trade, began in a family-owned Colorado business before advancing in telecommunications across several states. Rising from apprentice to project manager, he earned a reputation for quality, client commitment, and collaboration. Now, as Vice President of Operations at LumaNation, he brings his expertise and dedication to drive successful project outcomes.",
            imageUrl: "/clients/unknown.png"
            // imageUrl: "/clients/client-2.jpg"
          },
          {
            title: "Shane Steiger",
            description: "A seasoned Electrical Project Manager with over 30 years of experience, excels in managing complex projects from commercial developments to industrial installations. Known for his technical expertise and leadership, he coordinates teams, meets timelines, and upholds safety and quality standards. Dedicated to client satisfaction, Shane uses advanced tools, clear communication, and a proactive approach to deliver each project on time and within budget.",
            imageUrl: "/clients/shane-steiger.jpg"
          },
          {
            title: "Jesenia Torres",
            description: "Jesenia, an accomplished HR professional with 13 years of experience, specializes in Talent Acquisition and excels in leadership, employee relations, and strategic development. Known for her proactive problem-solving, she thrives in collaborative settings, consistently exceeding performance goals. A Top Performer at Dedicated Senior Medical Center, Jesenia is highly regarded for her leadership and strategic insight by doctors, clinical teams, and management.",
            imageUrl: "/clients/Jesenia-Torres.jpg"
          },
          {
            title: "Aida PLACEHOLDER",
            description: "Placeholder text",
            imageUrl: "/clients/unknown.png"
            // imageUrl: "/clients/client-5.jpg"
          },
          {
            title: "Michael Speer",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            imageUrl: "/clients/unknown.png"
            // imageUrl: "/clients/client-6.jpg"
          }
        ],
        companyLogos: [
          "/company-logos/wash-masters-car-wash.webp",
          "/company-logos/dhs.jpg",
          "/company-logos/ardagh-group.png",
          "/company-logos/bmw.png",
          "/company-logos/dynacraft.png",
          "/company-logos/exxon-mobil.png",
          "/company-logos/first-mckinney-baptist-church.png",
          "/company-logos/logo.png",
          "/company-logos/logo_CaliberCarWash.png",
          "/company-logos/one-community-church.png",
          "/company-logos/sms-infocomm-corporation.png",
          "/company-logos/united-states-marine-corps.png",
          "/company-logos/cooper-general-contractors.webp",
          "/company-logos/haven-durant.webp",
          "/company-logos/MEDART INC 4K LOGO web.webp",
          "/company-logos/snap-clean-car-wash.webp",
          "/company-logos/splash-brands.webp",
          "/company-logos/urban-garages.webp"
        ],
        currentSlide: 0,
        previousSlide: -1,
        fancyboxOptions: {
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
              this.previousSlide = this.currentSlide;
            },
            shouldClose: (unused: unknown, event: Event) => {
              if (this.previousSlide !== this.currentSlide) {
                this.previousSlide = this.currentSlide;
                (event).preventDefault();
              }
            }
          }
        },
        careerPath: [
          {
            title: "Electrician",
            text: "Start as an apprentice or trainee, gaining hands-on experience in basic construction tasks. Learn essential safety protocols and tools used on job sites. TODO: Small button to learn more about this position",
            icon: "svgClipboard"
          },
          {
            title: "Lead Electrician",
            text: "Progress to a skilled trade, such as electrician, welder, or equipment operator. Continue developing technical expertise and begin taking on more responsibilities.",
            icon: "svgToolbox"
          },
          {
            title: "Foreman",
            text: "Move into a leadership role, overseeing teams and managing projects. Focus on safety, quality, and efficiency while mentoring less experienced workers.",
            icon: "svgUserTie"
          },
          {
            title: "Superintendent",
            text: "Advance to project management or executive-level roles. Lead entire construction projects, from planning to completion, while managing budgets, timelines, and client relationships.",
            icon: "svgWrench"
          }
        ]
      };
    },
    mounted: function () {
      this.Resize();
      window.addEventListener("resize", this.Resize);
      window.addEventListener("scroll", this.Scroll);

      const container = document.getElementById("carousel");
      const carouselOptions = {
        Autoplay: {
          showProgress: false,
          timeout: 3000
          // timeout: 999_999
        },
        dots: true,
        infinite: true,
        // dragFree: true,
        slidesPerPage: 3,
        transition: "slide",
        on: {
          change: (instance: { page: number; }) => {
            this.currentSlide = instance.page;
          }
        }
      };

      new Carousel(container, carouselOptions, { Autoplay });
      Fancybox.bind(container, "[data-fancybox]", this.fancyboxOptions);
    },
    unmounted: function () {
      window.removeEventListener("resize", this.Resize);
      window.removeEventListener("scroll", this.Scroll);
    },
    methods: {
      Resize: function () {
        if (window.innerWidth >= 650) {
          this.videoLeft = `-${window.innerWidth}px`;
        } else {
          const newLeft = 2/5 * window.innerWidth - 960;
          this.videoLeft = `${newLeft}px`;
        }
      },
      Scroll: function () {
        if (window.scrollY < 200) this.mouseScrollOpacity = "1";
        else                      this.mouseScrollOpacity = "0";
      }
    }
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
$--accent-1: #fa052b;
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
    transform: translatez(0);

    > video {
      position: absolute;
      transform: translatez(0);
      top: -100%;
      bottom: -100%;
      right: -100%;
      margin: auto;

      min-width: 100%;
      min-height: 100%;
    }

    > .video-dark {
      width: 100%;
      height: 100%;
      background-color: hsla(0, 0%, 0%, 0.7);
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

  > .panel-1 {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-family: "RobotoFlex";
    background-color: hsl(200, 15%, 19%);
    color: #fff;
  }
}

.mission-statement-container {
  display: flex;
  width: 100%;
  height: 100%;

  > .left {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    min-width: calc(50% - 18px);
    max-width: calc(50% - 18px);
  }

  > .right {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-width: calc(50% - 18px);
    max-width: calc(50% - 18px);
  }

  > .title {
    font-size: 5rem;
    font-family: "Oswald";
    letter-spacing: 4px;
    color: $--accent-3;
    filter: drop-shadow(0px 0px 2px hsl(145.44deg 63.2% 59.02%));
  }

  > .divider {
    display: flex;
    min-width: 4px;
    max-width: 4px;
    min-height: 90%;
    margin: 8px 8px;
    background-color: $--accent-3;
    filter: drop-shadow(0px 0px 2px hsl(145.44deg 63.2% 59.02%));
  }

  .card {
    margin: 16px;
    padding: 8px;
    // background-color: hsl(200 15% 26% / 1);
    border-radius: 16px;
    // filter: drop-shadow(0 0 5px $--accent-3);
    font-size: 1.2rem;
    font-family: "RobotoFlex";
    line-height: 1.4;
    // font-size: 1.1em;
    color: #E0E0E0;
    margin-bottom: 32px;
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
  font-family: "Oswald";
  max-width: 1400px;

  > .client {
    background-color: $--primary-3;
    color: $--neutral-1;
    border: 2px solid $--accent-2;
    margin: 0.5rem;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0px 4px 8px 2px rgb(0 0 0 / 30%);
  }
}

@media only screen and (min-width: 500px) {
  .team-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    > .client {
      display: flex;
      align-items: center;
      width: 400px;

      > .portrait-container {
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
        flex-direction: column;
        // width: 2100px;

        > .name {
          display: flex;
          margin: 8px;
          text-align: center;
          font-size: 1.5rem;
          font-weight: bold;
        }

        > .bio {
          display: flex;
          // text-align: center;
          padding: 0 16px 16px 16px;
          // font-size: 0.8rem;
        }
      }
    }
  }
}

@media only screen and (max-width: 500px) {
  .team-container {
    display: flex;
    flex-wrap: wrap;

    > .client {
      display: flex;
      flex-direction: column;

      > .portrait-container {
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
          font-size: 1.5rem;
          font-weight: bold;
        }

        > .bio {
          display: flex;
          text-align: center;
          padding: 0 16px 16px 16px;
          // font-size: 0.8rem;
        }
      }
    }
  }
}
</style>

<style lang="scss">
// 1. Primary Colors:
$--primary-1: #4b4b4b;
$--primary-2: #2c2c2c;
$--primary-3: #1c2a3e;
$--primary-4: hsl(0 0% 90% / 1);

// 2. Accent Colors:
$--accent-1: #fa052b;
$--accent-2: #ffc300;
$--accent-3: #2ecc71;

$--neutral-1: hsl(0, 0%, 90%);
$--neutral-2: hsl(0, 0%, 95%);

.career-path-container {
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
        border-bottom: 2px solid $--accent-3;
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
      color: $--accent-3;
    }

    > .description {
      display: flex;
      text-align: center;
      padding: 0 16px 16px 16px;
      font-family: "RobotoFlex";
    }
  }
}
</style>
