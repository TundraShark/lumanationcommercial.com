<template>
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
        <div id="04894617-4b71-40e8-805a-00fc98174962"></div>
      </div>
    </div>

    <div class="content">
      <div class="container">
        <div class="service-intro">
          <h2>Dedicated to Your 24/7 Service Needs</h2>
          <p>At Lumanation Commercial, we understand that electrical issues don't follow a 9-to-5 schedule. That's why our expert service team is available around the clock to handle all your commercial electrical service and maintenance needs. From emergency repairs to preventative maintenance, we're committed to keeping your business running smoothly.</p>
        </div>

        <div class="service-highlights">
          <div class="highlight-item">
            <div class="icon">
              <i class="fas fa-bolt"></i>
            </div>
            <h3>24/7 Emergency Response</h3>
            <p>When electrical emergencies strike, our team is ready to respond. With our 24-hour dispatch service, you'll always reach a live person who can quickly deploy our technicians to your location.</p>
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
              <h4>Infrared Thermography</h4>
              <p>Non-invasive detection of potential electrical issues before they cause failures.</p>
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
  import { defineComponent, onMounted } from "vue";

  export default defineComponent({
    setup() {
      onMounted(() => {
        // Add stylesheet
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css";
        link.media = "screen";
        document.head.appendChild(link);

        // Add script
        const script = document.createElement("script");
        script.src = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";
        script.setAttribute("clienthub_id", "04894617-4b71-40e8-805a-00fc98174962");
        script.setAttribute("form_url", "https://clienthub.getjobber.com/client_hubs/04894617-4b71-40e8-805a-00fc98174962/public/work_request/embedded_work_request_form");
        document.body.appendChild(script);

        // Add Font Awesome for icons
        const fontAwesome = document.createElement("link");
        fontAwesome.rel = "stylesheet";
        fontAwesome.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
        document.head.appendChild(fontAwesome);
      });
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
    background-image: url('/DJI_20241107062834_0005_D.JPG');
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

  > .form-container {
    background-color: #f1f1f1;
    padding-top: 16px;

    > .form-header {
      display: flex;
      flex-direction: column;
      text-align: center;

      // max-width: 1200px;
      // margin: 0 auto;
      // padding: 0 20px;

      h2 {
        font-size: 2.5rem;
        margin-bottom: 20px;
        color: #333;
      }

      p {
        font-size: 1.2rem;
        margin-bottom: 40px;
      }
    }

    > div {
      display: flex;
      justify-content: center;
      // width: 100% !important;
      height: auto;

      > iframe {
        margin: 0 16px;
      }
    }
  }

  .content {
    padding: 80px 0;

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
        font-size: 1.2rem;
        max-width: 800px;
        margin: 0 auto;
        line-height: 1.6;
      }
    }

    .service-highlights {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-bottom: 80px;

      .highlight-item {
        flex: 0 0 calc(33.333% - 30px);
        margin-bottom: 40px;
        text-align: center;

        @media (max-width: 992px) {
          flex: 0 0 calc(50% - 20px);
        }
        
        @media (max-width: 992px) and (min-width: 577px) {
          &:last-child:nth-child(3n) {
            margin-left: auto;
            margin-right: auto;
          }
        }

        @media (max-width: 576px) {
          flex: 0 0 100%;
        }

        .icon {
          margin-bottom: 20px;

          i {
            font-size: 3rem;
            color: #0056b3;
          }
        }

        h3 {
          font-size: 1.5rem;
          margin-bottom: 15px;
          color: #333;
        }

        p {
          font-size: 1rem;
          line-height: 1.5;
        }
      }
    }

    .service-offerings {
      margin-bottom: 80px;

      h2 {
        font-size: 2.5rem;
        margin-bottom: 40px;
        text-align: center;
        color: #333;
      }

      .offerings-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;

        @media (max-width: 768px) {
          grid-template-columns: 1fr;
        }

        .offering-item {
          background-color: #f8f8f8;
          padding: 30px;
          border-radius: 5px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

          h4 {
            font-size: 1.3rem;
            margin-bottom: 15px;
            color: #333;
          }

          p {
            font-size: 1rem;
            line-height: 1.5;
            color: #666;
          }
        }
      }
    }

    .service-commitment {
      h2 {
        font-size: 2.5rem;
        margin-bottom: 20px;
        text-align: center;
        color: #333;
      }

      p {
        font-size: 1.1rem;
        line-height: 1.6;
        margin-bottom: 40px;
        text-align: center;
        max-width: 900px;
        margin-left: auto;
        margin-right: auto;
      }

      .testimonials {
        background-color: #f8f8f8;
        padding: 50px;
        border-radius: 5px;

        h3 {
          font-size: 1.8rem;
          margin-bottom: 30px;
          text-align: center;
          color: #333;
        }

        .testimonial {
          margin-bottom: 30px;
          padding: 20px;
          background-color: #fff;
          border-radius: 5px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

          p {
            font-size: 1.1rem;
            font-style: italic;
            margin-bottom: 10px;
            text-align: left;
          }

          .client-name {
            display: block;
            text-align: right;
            font-weight: 600;
            color: #333;
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
.services > .form-container > .container > div {
  width: 100% !important;
  margin: 0 16px;
}
.services > .form-container > .container > div > iframe {
  // margin: 0 16px;
}
</style>
