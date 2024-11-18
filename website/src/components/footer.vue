<template>
  <div class="component-footer">
    <div class="expand">
      <div class="object-container-2">
        <div class="top">
          <div class="icon"><svgOffice /></div>
          <div class="text">Office</div>
        </div>
        <div class="bot">
          <div class="text">3400 Eldorado Pkwy</div>
          <div class="text">Suite 3</div>
          <div class="text">McKinney, TX 75070</div>
        </div>
      </div>

      <div class="object-container-2">
        <div class="top">
          <div class="icon"><svgMail /></div>
          <div class="text">Mailing</div>
        </div>
        <div class="bot">
          <div class="text">2750 S Preston Road</div>
          <div class="text">Suite 116-259</div>
          <div class="text">Celina, TX 75009</div>
        </div>
      </div>

      <div class="object-container-2">
        <div class="top">
          <div class="icon"><svgWarehouse /></div>
          <div class="text">Warehouse</div>
        </div>
        <div class="bot">
          <div class="text">1829 Choate Pkwy</div>
          <div class="text">Celina, TX 75009</div>
        </div>
      </div>

      <!--
        <div class="object-container">
          <div class="icon-container">
            <div class="icon"><svgOffice /></div>
          </div>
          <div class="text-container">
            <div style="font-weight: bold;">Office</div>
            <div>3400 Eldorado Pkwy</div>
            <div>Suite 3</div>
            <div>McKinney, TX 75070</div>
          </div>
        </div>

        <div class="object-container">
          <div class="icon-container">
            <div class="icon"><svgMail /></div>
          </div>
          <div class="text-container">
            <div style="font-weight: bold;">Mailing</div>
            <div>2750 S Preston Road</div>
            <div>Suite 116-259</div>
            <div>Celina, TX 75009</div>
          </div>
        </div>

        <div class="object-container">
          <div class="icon-container">
            <div class="icon"><svgWarehouse /></div>
          </div>
          <div class="text-container">
            <div style="font-weight: bold;">Warehouse</div>
            <div>1829 Choate Pkwy</div>
            <div>Celina, TX 75009</div>
          </div>
        </div>
      -->
    </div>

    <div class="object-container">
      <div class="icon-container">
        <div class="icon"><svgPhone /></div>
      </div>
      <div class="text-container">
        <div class="text">(972) 698-5227</div>
        <!-- <div class="text">(972) 528-0512</div> -->
      </div>
    </div>

    <div class="object-container">
    </div>

    <div class="object-container">
      <div class="text">
        2024 © LumaNation Commercial
        · <RouterLink to="/privacy" @click.native="ScrollToTop()">Privacy</RouterLink>
        · <RouterLink to="/terms" @click.native="ScrollToTop()">Terms</RouterLink>
        · <a href="/sitemap.xml" target="_blank">Sitemap</a>
      </div>
    </div>

    <!--
      Addresses:
      Office: 3400 Eldorado Pkwy
      Suite 3
      McKinney, TX 75070

      Mailing: 2750 S Preston Road
      Suite 116-259
      Celina, TX 75009

      Warehouse: 1829 Choate Pkwy
      Celina, TX 75009

      Main Phone Line: 972-528-0512
      info@luma-nation.com
      sales@luma-nation.com
    -->
  </div>

  <!--
    Info at bottom of website footer home page
    -Navigation links

    Addresses:
    Office: 3400 Eldorado Pkwy
    Suite 3
    McKinney, TX 75070

    Mailing: 2750 S Preston Road
    Suite 116-259
    Celina, TX 75009

    Warehouse: 1829 Choate Pkwy
    Celina, TX 75009

    Main Phone Line: 972-528-0512
    info@luma-nation.com
    sales@luma-nation.com
  -->
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
</script>

<style scoped lang="scss">
$--accent-1: #fa052b;
$--accent-2: #ffc300;
$--accent-3: #2ecc71;

.component-footer {
  display: flex;
  flex-direction: column;
  box-shadow: 0px -2px 10px 0px rgba(0, 0, 0, 0.75);
  font-family: "RobotoFlex";
  background-color: hsl(200, 15%, 25%);
  color: #fff;
  padding: 2rem;

  .expand {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 0.75rem;
  }

  .object-container-2 {
    display: flex;
    flex-direction: column;

    > .top {
      display: flex;
      margin-bottom: 0.25rem;

      > .icon {
        height: 32px;
        margin-right: 0.5rem;
        fill: $--accent-3;
      }

      > .text {
        display: flex;
        align-items: center;
        font-weight: bold;
      }
    }

    > .bot {
      display: flex;
      flex-direction: column;
    }
  }

  .object-container {
    display: flex;
    align-items: center;

    > .icon-container {
      // width: 40px;

      > .icon {
        // width: 32px;
        height: 32px;
        margin-right: 0.5rem;
        fill: $--accent-3;
      }

      // > .icon-text {}
    }

    // > .text-container {
    //   > div {}
    // }

    &:not(:last-child) {
      margin-bottom: 0.75rem;
    }
  }

  a {
    color: $--accent-3;

    &:hover { text-decoration: underline; }
  }
}

@media only screen and (max-width: 600px) {
  .component-footer {
    .expand {
      display: flex;
      flex-direction: column;

      .object-container-2 {
        &:not(:last-child) {
          margin-bottom: 0.75rem;
        }
      }
    }
  }
}

@media only screen and (min-width: 800px) {
}
</style>
