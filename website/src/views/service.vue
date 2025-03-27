<template>
  <!--
    2. We are a full service electrical contracting company, offering competitive rates for new construction, service, maintenance, and repair, offering rapid response times by our reliable and knowledgeable electricians. Contact us today for any of your electrical needs.
    3. 24/7 Emergency Response (delete) & input:

    Our Service Process: (a way to outline our process so people know what they’re getting into up front)!
    Easy as 1 – 2 – 3 ... (steps)
      1. Request Service – A member of our team will contact you promptly to schedule and dispatch our technicians to your location.
      2. Quote – Receive a comprehensive quote outlining your service options, giving you the opportunity to approve or adjust the details to fit your needs.
      3. Completion of Work – After the job is done, you’ll have a walkthrough with our technicians to review the work completed, sign off on approval, and enjoy convenient payment options and flexible invoicing.
        - What Our Clients Say: Either input well crafted reviews in place from actual clients, or just replace this part with google review widget
  -->
  <div class="services">
    <div class="hero-banner">
      <div class="overlay">
        <div class="container">
          <h1>Service & Maintenance</h1>
          <p>Service You Can Count On</p>
        </div>
      </div>
    </div>

    <div class="form-container">
      <div class="form-header">
        <h2>Request Service</h2>
        <p>Fill out the form below to request service or schedule maintenance for your facility</p>
      </div>
      <div class="container">
        <JobberForm />
      </div>
    </div>

    <div class="content">
      <div class="container">
        <div class="service-intro">
          <h2>Dedicated to Your Service Needs</h2>
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

        <div class="service-offerings">
          <h2>Our Service Offerings</h2>
          <div class="offerings-grid">
            <div class="offering-item">
              <h4>Electrical Troubleshooting & Repair</h4>
              <p>Quick diagnosis and repair of electrical issues to minimize downtime for your business.</p>
            </div>

            <div class="offering-item">
              <h4>Lighting Maintenance & Upgrades</h4>
              <p>Maintenance, repair, and energy-efficient upgrades for all commercial lighting systems.</p>
            </div>

            <div class="offering-item">
              <h4>Panel Upgrades & Replacements</h4>
              <p>Modernization of electrical panels to meet current codes and business demands.</p>
            </div>

            <div class="offering-item">
              <h4>Power Quality Analysis</h4>
              <p>Comprehensive testing and solutions for power quality issues affecting your equipment.</p>
            </div>

            <div class="offering-item">
              <h4>EV Charging Stations</h4>
              <p>LumaNation Electric is here to power up your electric vehicle charging needs. Our team of licensed and state-certified electricians is equipped to deliver high-quality installation services for your EV charging stations.</p>
            </div>

            <div class="offering-item">
              <h4>Generator Service & Testing</h4>
              <p>Maintenance and testing of backup power systems to ensure reliability when needed.</p>
            </div>
          </div>
        </div>

        <div class="service-commitment">
          <h2>Our Commitment to Excellence</h2>
          <p>On every project, Lumanation's Service Team commits to providing the highest level of workmanship and exceptional customer service. We strive for excellence through innovation, quality focus, and attention to detail. Our commitment to our clients has resulted in an exceptional customer retention rate—nearly 100% of our new customers become repeat customers.</p>

          <div class="testimonials">
            <h3>What Our Clients Say</h3>
            <div class="testimonial">
              <p>"Lumanation's response time and quality of work is unmatched. Their team was professional, knowledgeable, and went above and beyond to solve our electrical issues quickly."</p>
              <span class="client-name">— John Smith, Facility Manager</span>
            </div>
            <div class="testimonial">
              <p>"We've been working with Lumanation for all our electrical service needs for years. Their technicians are always prompt, courteous, and deliver exceptional results every time."</p>
              <span class="client-name">— Sarah Johnson, Operations Director</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import JobberForm from "@/components/JobberForm.vue";

export default defineComponent({
  components: {
    JobberForm
  }
});
</script>

<style scoped lang="scss">
.services {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 100px);
  font-family: "RobotoFlex";

  .hero-banner {
    position: relative;
    height: 500px;
    background-image: url("/DJI_20241107062834_0005_D.JPG");
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
        max-width: 800px;
        margin: 0 auto;
        line-height: 1.6;
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
          background-color: #f9f9f9;
          padding: 25px;
          border-radius: 5px;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;

          &:hover {
            transform: translateY(-5px);
          }

          h4 {
            font-size: 1.3rem;
            margin-bottom: 15px;
            color: #253472;
          }

          p {
            font-size: 1rem;
            color: #666;
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
</style>
