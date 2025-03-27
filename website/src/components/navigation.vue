<template>
  <div class="component-navigation" :style="{backgroundColor: 'hsla(0, 0%, 90%, ' + navigationOpacity + ')'}">
    <div class="left">
      <RouterLink to="/">
        <div class="logo">
          <img src="/logo.png">
        </div>
      </RouterLink>
      <!-- <RouterLink to="/"><div class="company">LumaNation Commercial</div></RouterLink> -->
    </div>

    <div class="right">
      <RouterLink to="/about"    active-class="active"><div class="item">About</div></RouterLink>
      <!-- <RouterLink to="/projects" active-class="active"><div class="item">Projects</div></RouterLink> -->
      <RouterLink to="/service" active-class="active"><div class="item">Service</div></RouterLink>
      <RouterLink to="/careers"  active-class="active"><div class="item">Careers</div></RouterLink>
      <!-- <RouterLink to="/contact"  active-class="active"><div class="item">Contact</div></RouterLink> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data: function () {
    return {
      navigationOpacity: "0.6"
    }
  },
  mounted: function () {
    this.Scroll();
    window.addEventListener("scroll", this.Scroll);
  },
  unmounted: function () {
    window.removeEventListener("scroll", this.Scroll);
  },
  methods: {
    Scroll: function () {
      if (window.scrollY < 200) this.navigationOpacity = "0.6";
      else                      this.navigationOpacity = "0.85";
    }
  }
});
</script>

<style scoped lang="scss">
.component-navigation {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 16px;
  left: 16px;
  width: calc(100% - 32px);
  height: 64px;
  border-radius: 16px;
  transition: background-color 0.8s ease-out;
  // font-family: "RobotoFlex";
  font-family: "Oswald";
  font-size: 1.25rem;
  z-index: 1000;

  > .left {
    display: flex;
    align-items: center;
    height: 100%;

    > a {
      display: flex;
      align-items: center;
      height: 100%;
      color: inherit;
      text-decoration: inherit;
      transition: transform 0.12s ease-out;

      &:hover { transform: scale(1.075); }

      > .logo {
        height: 100%;
        margin-left: 16px;

        > img {
          position: relative;
          top: 8px;
          height: calc(100% - 16px);
          // padding: 8px 0;
        }
      }

      > .company {
        margin-left: 16px;
        font-weight: bold;
        font-size: 1.2rem;
      }
    }
  }

  > .right {
    display: flex;
    margin-right: 16px;
    gap: 8px;

    > a {
      color: inherit;
      border-radius: 8px;
      text-decoration: inherit;
      transition: all 0.2s ease-out;
      position: relative;

      &:hover {
        background-color: hsla(0, 0%, 50%, 0.3);
        transform: translateY(-2px);
      }

      &.active {
        background-color: hsla(0, 0%, 50%, 0.65);
      }

      > .item {
        padding: 10px 16px;
        font-weight: normal;
        user-select: none;
        cursor: pointer;
        letter-spacing: 0.5px;
      }
    }
  }
}
</style>
