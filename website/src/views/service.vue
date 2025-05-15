<template>
  <div class="services">
    <div class="hero-banner">
      <div class="overlay" />
    </div>

    <div class="form-container" style="padding-bottom: 0;">
      <div class="form-header">
        <div class="container">
          <p>We are a full service electrical contracting company, offering competitive rates for new construction, service, maintenance, and repair, offering rapid response times by our reliable and knowledgeable electricians. Contact us today for any of your electrical needs.</p>
        </div>
      </div>
    </div>

    <div class="form-container" style="padding-top: 0;">
      <div class="form-header">
        <h2 class="section-heading">Send Us a Message</h2>
        <p>Fill out the form below to request service or schedule maintenance for your facility</p>
      </div>
      <div class="container">
        <JobberForm />
      </div>
    </div>

    <div class="content">
      <div class="container">
        <div class="service-intro">
          <h2 class="section-heading">Dedicated to Your Service Needs</h2>
          <p>At Lumanation Commercial, we understand that electrical issues don't follow a 9-to-5 schedule. That's why our expert service team is available around the clock to handle all your commercial electrical service and maintenance needs. From emergency repairs to preventative maintenance, we're committed to keeping your business running smoothly.</p>
        </div>

        <div class="service-highlights">
          <div class="highlight-item">
            <div class="icon">
              <i class="fas fa-bolt"></i>
            </div>
            <h3>Quick & Easy Communication</h3>
            <p>When electrical emergencies arise, our team is prepared to respond swiftly. We ensure clear and dependable communication, keeping you informed every step of the way—before, during, and after the job is completed. Experience a seamless and stress-free process!</p>
          </div>

          <div class="highlight-item">
            <div class="icon">
              <i class="fas fa-tools"></i>
            </div>
            <h3>Preventative Maintenance</h3>
            <p>Avoid costly downtime with our comprehensive preventative maintenance programs. Our certified technicians will identify and address potential issues before they become major problems.</p>
          </div>

          <div class="highlight-item">
            <div class="icon">
              <i class="fas fa-hard-hat"></i>
            </div>
            <h3>Expert Technicians</h3>
            <p>Our service team consists of highly trained, licensed electricians with extensive experience in commercial electrical systems. We invest in ongoing education to ensure our team stays at the forefront of industry advancements.</p>
          </div>
        </div>

        <div class="steps-process" style="display: flex; flex-direction: column;">
          <div style="display: flex; justify-content: center">
            <h2 class="section-heading">Three Steps - One Goal</h2>
          </div>

          <div class="steps-container">
            <div class="step-item">
              <div class="step-number-container">
                <div class="step-number">1</div>
              </div>
              <div class="step-content">
                <h3>Request Service</h3>
                <p>A member of our team will contact you promptly to schedule and dispatch our technicians to your location.</p>
              </div>
            </div>

            <div class="step-item">
              <div class="step-number-container">
                <div class="step-number">2</div>
              </div>
              <div class="step-content">
                <h3>Quote</h3>
                <p>Receive a comprehensive quote outlining your service options, giving you the opportunity to approve or adjust the details to fit your needs.</p>
              </div>
            </div>

            <div class="step-item">
              <div class="step-number-container">
                <div class="step-number">3</div>
              </div>
              <div class="step-content">
                <h3>Completion of Work</h3>
                <p>After the job is done, you'll have a walkthrough with our technicians to review the work completed, sign off on approval, and enjoy convenient payment options and flexible invoicing.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="service-offerings">
          <div style="display: flex; justify-content: center">
            <h2 class="section-heading">Our Service Offerings</h2>
          </div>

          <div class="offerings-grid">
            <div class="offering-item" style="background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80') center/cover;">
              <h4>Electrical Troubleshooting & Repair</h4>
              <p>Quick diagnosis and repair of electrical issues to minimize downtime for your business.</p>
            </div>

            <div class="offering-item" style="background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80') center/cover;">
              <h4>Lighting Maintenance & Upgrades</h4>
              <p>Regular maintenance and upgrades of lighting systems to improve efficiency and reduce energy costs.</p>
            </div>

            <div class="offering-item" style="background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1599619585752-c3edb42a414c?auto=format&fit=crop&w=800&q=80') center/cover;">
              <h4>Panel Upgrades & Replacements</h4>
              <p>Modernization of electrical panels to meet current safety standards and power demands.</p>
            </div>

            <div class="offering-item" style="background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=800&q=80') center/cover;">
              <h4>Power Quality Analysis</h4>
              <p>Comprehensive analysis of power systems to identify and resolve issues affecting equipment performance.</p>
            </div>

            <div class="offering-item" style="background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=800&q=80') center/cover;">
              <h4>EV Charging Stations</h4>
              <p>Installation and maintenance of electric vehicle charging stations for your facility.</p>
            </div>

            <div class="offering-item" style="background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80') center/cover;">
              <h4>Generator Service & Testing</h4>
              <p>Maintenance and testing of backup power systems to ensure reliability when needed.</p>
            </div>
          </div>
        </div>

        <div class="service-commitment">
          <div style="display: flex; justify-content: center">
            <h2 class="section-heading">Our Commitment to Excellence</h2>
          </div>

          <p>On every project, Lumanation's Service Team commits to providing the highest level of workmanship and exceptional customer service. We strive for excellence through innovation, quality focus, and attention to detail. Our commitment to our clients has resulted in an exceptional customer retention rate—nearly 100% of our new customers become repeat customers.</p>

          <div class="testimonials">
            <h3>What Our Clients Say</h3>
            <GoogleReviews />

            <!-- <div v-for="testimonial in testimonials" :key="testimonial.name" class="testimonial">
              <p v-for="quote in testimonial.quote" :key="quote">{{ quote }}</p>
              <span class="client-name">— {{ testimonial.name }}</span>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import JobberForm from "@/components/JobberForm.vue";
  import GoogleReviews from "@/components/GoogleReviews.vue";

  const testimonials = [
    {
      quote: [
        "Our business hired Lumen Lighting to replace all of the lights in our new warehouse and run power for a gate and garage door opener.",
        "While they were there, they noticed a Federal electrical panel which is a tremendous fire hazard. They were able to correct this issue as well in a timely and cost effective manner.",
        "These guys do outstanding work at a fair price. Give them a call!"
      ],
      name: "Nathan McGregor"
    },
    {
      quote: [
        "Working with these guys was simple and easy. As a long time veteran of the construction industry, it's nice to find a company and people like Ben who are trustworthy and reliable. Highly recommend."
      ],
      name: "Jordan Forrester"
    },
    {
      quote: [
        "They were great and easy to deal with. Added lighting in my upper cabinets. Treated us like family and recommended to everyone!"
      ],
      name: "Sam Hogue"
    },
    {
      quote: [
        "Great service and great work for a great price! We've had Lumen out for two very different jobs (Installing lighting in a new commercial building and renovating the electric system in a turn-of-the-century farmhouse) and both were handled with care and efficiency, with impressive follow-up to make sure everything was working correctly. I work with a lot of contractors and they're among the best in any field."
      ],
      name: "JMW Powell"
    },
    {
      quote: [
        "We called Lumen to come out and give us a bid to hang ceiling fans and add dimer switches in our home. Gave us a great price and was super flexible and easy to work with! Was grateful to have done business with them!"
      ],
      name: "Aubree Widener"
    }
  ];

  export default defineComponent({
    components: {
      JobberForm,
      GoogleReviews
    },
    data() {
      return {
        testimonials
      };
    }
  });
</script>

<style scoped lang="scss">
  @import "@/style.scss";

  .services {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 100px);
    font-family: "RobotoFlex";
    padding: 8rem 0 4rem 0;

    .hero-banner {
      position: relative;
      height: 500px;
      background-image: url("@/assets/service-page-banner.jpg");
      background-size: cover;
      background-position: center;
      text-align: center;

      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          color: #ffffff;

          h1 {
            font-size: 3.5rem;
            margin-bottom: 20px;
            font-weight: 700;
          }

          p {
            font-size: 1.5rem;
            max-width: 600px;
          }
        }
      }
    }

    .form-container {
      background-color: #f5f5f5;
      padding: 60px 0;

      .form-header {
        text-align: center;
        margin-bottom: 30px;

        h2 {
          font-size: 2.5rem;
          margin-bottom: 15px;
          color: #333;
        }

        p {
          font-size: 1.1rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
        }
      }

      .container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 0 20px;
        display: flex;
        justify-content: center;
      }
    }

    .content {
      padding: 60px 0;

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
      }

      .service-intro {
        text-align: center;
        margin-bottom: 60px;

        h2 {
          font-size: 2.5rem;
          margin-bottom: 20px;
          color: #333;
        }

        p {
          font-size: 1.1rem;
          color: #666;
          line-height: 1.6;
          margin-bottom: 40px;
          text-align: center;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
      }

      .service-highlights {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: 60px;

        .highlight-item {
          flex: 0 0 calc(33.333% - 30px);
          margin-bottom: 40px;
          text-align: center;
          padding: 0 15px;

          @media (max-width: 768px) {
            flex: 0 0 100%;
          }

          .icon {
            font-size: 3rem;
            color: #253472;
            margin-bottom: 20px;
          }

          h3 {
            font-size: 1.5rem;
            margin-bottom: 15px;
            color: #333;
          }

          p {
            font-size: 1rem;
            color: #666;
            line-height: 1.5;
          }
        }
      }

      .steps-process {
        margin: 60px auto;
        max-width: 800px;
        padding: 0 20px;
        background-color: transparent;

        h2 {
          font-size: 2.5rem;
          margin-bottom: 40px;
          text-align: center;
          color: #333;
        }

        .steps-container {
          position: relative;
          padding: 20px 0;

          &::before {
            display: none; /* Hide the continuous line */
          }

          .vertical-line {
            display: none; /* Hide the separate vertical lines */
          }

          .step-item {
            display: flex;
            margin-bottom: 30px;
            position: relative;
            padding-bottom: 0;

            &:not(:last-child)::after {
              content: '';
              position: absolute;
              top: 21px; /* Align with the center of the number */
              left: 20px;
              height: calc(100% + 30px); /* Extend to properly connect to the next number */
              width: 2px;
              background-color: #253472;
              z-index: 1;
            }

            &:last-child {
              margin-bottom: 0;
            }

            .step-number-container {
              position: relative;
              width: 60px;
              flex-shrink: 0;
              z-index: 2;

              .step-number {
                width: 42px;
                height: 42px;
                background-color: #253472;
                color: white;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.5rem;
                font-weight: bold;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
                position: absolute;
                left: 0;
                top: 5px;
              }
            }

            .step-content {
              flex: 1;
              padding-top: 0;
              padding-left: 15px;
              padding-bottom: 30px;

              h3 {
                font-size: 1.5rem;
                margin-bottom: 10px;
                color: #333;
                font-weight: 600;
                margin-top: 8px;
              }

              p {
                font-size: 1rem;
                color: #666;
                line-height: 1.5;
              }
            }
          }
        }

        @media (max-width: 768px) {
          .steps-container {
            .step-item {
              .step-number-container {
                width: 50px;

                .step-number {
                  width: 38px;
                  height: 38px;
                  font-size: 1.3rem;
                }
              }
            }
          }
        }
      }

      .service-offerings {
        margin-bottom: 60px;

        h2 {
          font-size: 2.5rem;
          margin-bottom: 30px;
          text-align: center;
          color: #333;
        }

        .offerings-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 30px;

          .offering-item {
            flex: 0 0 calc(33.333% - 30px);
            margin-bottom: 40px;
            text-align: center;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            color: #ffffff;

            h4 {
              text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
              position: relative;
              z-index: 1;
            }

            p {
              text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
              position: relative;
              z-index: 1;
            }

            &:hover {
              transform: translateY(-5px);
              box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
            }

            h4 {
              font-size: 1.3rem;
              margin-bottom: 15px;
              color: #ffffff;
              font-weight: 600;
            }

            p {
              font-size: 1rem;
              color: rgba(255, 255, 255, 0.9);
              line-height: 1.5;
            }
          }
        }
      }

      .service-commitment {
        h2 {
          font-size: 2.5rem;
          margin-bottom: 20px;
          color: #333;
          text-align: center;
        }

        p {
          font-size: 1.1rem;
          color: #666;
          line-height: 1.6;
          margin-bottom: 40px;
          text-align: center;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        .testimonials {
          h3 {
            font-size: 1.8rem;
            margin-bottom: 30px;
            text-align: center;
            color: #333;
          }

          .testimonial {
            background-color: #f9f9f9;
            padding: 30px;
            border-radius: 5px;
            margin-bottom: 30px;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);

            p {
              font-size: 1.1rem;
              font-style: italic;
              margin-bottom: 15px;
              text-align: left;
            }

            .client-name {
              display: block;
              text-align: right;
              font-weight: 600;
              color: #253472;
            }
          }
        }
      }
    }
  }

  .loading-spinner {
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 3px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    border-top-color: #253472;
    animation: spin 1s ease-in-out infinite;
    margin: 30px auto;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .form-container .container > div {
    width: 100% !important;
    margin: 0 16px;
    position: relative;
  }

  @media (max-width: 768px) {
    .services .hero-banner {
      height: 350px;
    }

    .services .hero-banner .overlay .container h1 {
      font-size: 2.5rem;
    }

    .services .hero-banner .overlay .container p {
      font-size: 1.2rem;
    }

    .services .form-container .form-header h2 {
      font-size: 2rem;
    }

    .services .content .service-intro h2,
    .services .content .service-offerings h2,
    .services .content .service-commitment h2 {
      font-size: 2rem;
    }
  }

  .section-heading {
    font-size: 2rem;
    color: $--primary-3;
    margin-bottom: 0.5rem;
    font-family: "Oswald";
    position: relative;
    padding-bottom: 0.5rem;
    display: inline-block;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: $--accent-3;
    }
  }
</style>

<style>
  iframe {
    width: 100%;
  }
</style>
