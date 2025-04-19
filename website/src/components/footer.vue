<template>
  <div class="component-footer">
    <div class="footer-sections">
      <div class="footer-section navigation">
        <div class="section-title">Navigation</div>
        <div class="section-links">
          <!-- <RouterLink to="/about" @click.native="ScrollToTop()">About</RouterLink> -->
          <!-- <RouterLink to="/projects" @click.native="ScrollToTop()">Projects</RouterLink> -->
          <RouterLink to="/services" @click.native="ScrollToTop()">Service</RouterLink>
          <RouterLink to="/careers" @click.native="ScrollToTop()">Careers</RouterLink>
          <!-- <RouterLink to="/employees" @click.native="ScrollToTop()">Employees</RouterLink> -->
          <RouterLink to="/contact" @click.native="ScrollToTop()">Contact</RouterLink>
        </div>
      </div>

      <div class="footer-section connect">
        <div class="section-title">Connect With Us</div>
        <div class="section-links">
          <a href="https://www.linkedin.com/company/lumanation/?viewAsMember=true" target="_blank">LinkedIn</a>
          <a href="https://www.facebook.com/LumaNationLED" target="_blank">Facebook</a>
          <a href="https://g.co/kgs/YZA8dJT" target="_blank">Google Profile</a>
          <!-- <a href="https://twitter.com/lumanation" target="_blank">X/Twitter</a> -->
        </div>
      </div>

      <div class="footer-section privacy">
        <div class="section-title">Privacy and Use</div>
        <div class="section-links">
          <RouterLink to="/privacy" @click.native="ScrollToTop()">Privacy</RouterLink>
          <RouterLink to="/terms" @click.native="ScrollToTop()">Terms</RouterLink>
          <RouterLink to="/do-not-sell" @click.native="ScrollToTop()">Do Not Sell</RouterLink>
        </div>
      </div>

      <div class="footer-section contact-info">
        <div class="section-title">Contact Us</div>
        <div class="expand">
          <div class="object-container-2">
            <div class="top">
              <div class="icon"><svgOffice /></div>
              <div class="text">Office/Mailing</div>
            </div>
            <div class="bot">
              <div class="text">3400 Eldorado Pkwy</div>
              <div class="text">Suite 3</div>
              <div class="text">McKinney, TX 75070</div>
            </div>
          </div>

          <div class="object-container-2">
            <div class="top">
              <div class="icon"><svgWarehouse /></div>
              <div class="text">Warehouse</div>
            </div>
            <div class="bot">
              <div class="text">1822 County Road 88</div>
              <div class="text">Celina, TX 75009</div>
            </div>
          </div>

          <div class="object-container-2">
            <div class="top">
              <div class="icon"><svgMail /></div>
              <div class="text">Email</div>
            </div>
            <div class="bot">
              <div class="text">info@LumanationElectric.com</div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-section phone-numbers">
        <div class="section-title">Phone Numbers</div>
        <div class="phone-list">
          <div class="phone-item">
            <div class="phone-label">Main Line</div>
            <div class="phone-number">(972) 528-0512</div>
          </div>
          <div class="phone-item">
            <div class="phone-label">Service</div>
            <div class="phone-number">(972) 777-4207</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      {{ currentYear }} LumaNation Commercial TDLR #37412
    </div>
  </div>
</template>

<script setup lang="ts">
  import svgLocationDot from "@/assets/svg/location-dot.vue";
  import svgPhone from "@/assets/svg/phone.vue";
  import svgMail from "@/assets/svg/mail.vue";
  import svgOffice from "@/assets/svg/office.vue";
  import svgWarehouse from "@/assets/svg/warehouse.vue";

  function ScrollToTop () {
    window.scrollTo(0, 0);
  }

  const currentYear = new Date().getFullYear();
</script>

<style scoped lang="scss">
$--accent-1: #253472;
$--accent-2: #ffc300;
$--accent-3: #2ecc71;

.component-footer {
  display: flex;
  flex-direction: column;
  box-shadow: 0px -2px 10px 0px rgba(0, 0, 0, 0.75);
  font-family: "RobotoFlex";
  background-color: hsl(200, 15%, 25%);
  color: #fff;

  .footer-sections {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    padding: 2rem 4rem;
  }

  .footer-section {
    width: 100%;
    max-width: 600px;
    // margin-bottom: 1.5rem;

    .section-title {
      font-weight: bold;
      margin-bottom: 1rem;
      text-transform: uppercase;
      font-size: 1rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid rgba(255,255,255,0.2);
      text-align: left;
    }

    .section-links {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 1rem;

      a {
        color: $--accent-3;
        margin-bottom: 0.75rem;
        text-decoration: none;
        transition: color 0.3s ease;
        padding: 0 0.5rem;

        &:hover {
          text-decoration: underline;
          color: lighten($--accent-3, 10%);
        }
      }
    }
  }

  .contact-info {
    .expand {
      display: flex;
      justify-content: flex-start;
      width: 100%;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .object-container-2 {
      flex: 0 1 auto;
      text-align: left;
      margin-bottom: 1rem;

      .top {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 0.5rem;

        .icon {
          height: 24px;
          width: 24px;
          margin-right: 0.5rem;
          fill: $--accent-3;
        }

        .text {
          font-weight: bold;
          font-size: 0.9rem;
        }
      }

      .bot {
        font-size: 0.85rem;
        color: rgba(255,255,255,0.8);
      }
    }
  }

  .phone-numbers {
    .phone-list {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.75rem;

      .phone-item {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
        width: 100%;
        max-width: 360px;

        .phone-label {
          font-weight: bold;
          color: $--accent-3;
          flex: 0 0 auto;
          text-align: left;
          min-width: 175px;
        }

        .phone-number {
          flex: 1;
          text-align: left;
          color: rgba(255,255,255,0.8);
        }
      }
    }
  }

  .footer-copyright {
    width: 100%;
    text-align: left;
    padding: 1rem 4rem;
    font-size: 0.85rem;
    opacity: 0.7;
    background-color: rgba(0,0,0,0.1);
    border-top: 1px solid rgba(255,255,255,0.1);
  }

  @media only screen and (max-width: 768px) {
    .footer-sections {
      padding: 2rem 1rem;
      align-items: center;
    }

    .footer-section {
      max-width: 100%;

      .section-title {
        text-align: center;
      }

      .section-links {
        justify-content: center;
      }
    }

    .contact-info {
      .expand {
        justify-content: center;
      }

      .object-container-2 {
        text-align: center;

        .top {
          justify-content: center;
        }
      }
    }

    .phone-numbers {
      .phone-list {
        align-items: center;

        .phone-item {
          flex-direction: column;
          text-align: center;

          .phone-label {
            text-align: center;
            min-width: auto;
          }

          .phone-number {
            text-align: center;
          }
        }
      }
    }

    .footer-copyright {
      text-align: center;
      padding: 1rem;
    }
  }
}
</style>
