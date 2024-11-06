<template>
  <div class="component-footer">
    <div class="text-container">
      <div class="icon"><svgLocationDot /></div>
      <div class="text">3400 Eldorado Pkwy. McKinney, TX</div>
    </div>

    <div class="text-container">
      <div class="icon"><svgPhone /></div>
      <div class="text">(972) 698-5227</div>
    </div>

    <div class="text-container">
      <div class="text"><RouterLink to="/privacy">Privacy</RouterLink> · <RouterLink to="/terms">Terms</RouterLink> · <RouterLink to="/sitemap">Sitemap</RouterLink></div>
    </div>

    <div class="text-container">
      <div class="text">2024 © LumaNation Commercial</div>
    </div>

    <!-- Info, Sales, stuff at the very top. Address, telephone number -->
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

<script lang="ts">
  import { defineComponent } from "vue";
  import svgLocationDot from "@/assets/svg/location-dot.vue";
  import svgPhone from "@/assets/svg/phone.vue";

  export default defineComponent({
    components: {
      svgLocationDot,
      svgPhone
    }
  });
</script>

<style scoped lang="scss">
$--accent-1: #fa052b;
$--accent-2: #ffc300;
$--accent-3: #2ecc71;

.component-footer {
  display: flex;
  flex-direction: column;
  // height: 100px;
  box-shadow: 0px -2px 10px 0px rgba(0, 0, 0, 0.75);
  font-family: "RobotoFlex";
  background-color: hsl(200, 15%, 25%);
  color: #fff;
  padding: 2rem;

  > .text-container {
    display: flex;
    align-items: center;

    > .icon {
      width: 32px;
      height: 32px;
      margin-right: 0.5rem;
      fill: $--accent-3;
    }

    &:not(:last-child) {
      margin-bottom: 0.75rem;
    }
  }

  a {
    color: $--accent-3;

    &:hover { text-decoration: underline; }
  }
}
</style>
