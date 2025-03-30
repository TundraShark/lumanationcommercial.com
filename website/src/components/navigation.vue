<template>
  <div class="component-navigation" :style="{backgroundColor: 'hsla(0, 0%, 90%, ' + navigationOpacity + ')'}">
    <div class="left">
      <RouterLink to="/">
        <div class="logo">
          <img src="/logo.png">
        </div>
      </RouterLink>
    </div>

    <div class="right desktop-nav">
      <RouterLink to="/service"  active-class="active"><div class="item">Service</div></RouterLink>
      <RouterLink to="/projects" active-class="active"><div class="item">Projects</div></RouterLink>
      <RouterLink to="/careers"  active-class="active"><div class="item">Careers</div></RouterLink>
      <RouterLink to="/contact"  active-class="active"><div class="item">Contact</div></RouterLink>
    </div>

    <div class="mobile-nav-toggle" @click="toggleMobileMenu">
      <div class="hamburger" :class="{ 'is-active': isMobileMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="mobile-nav" :class="{ 'is-open': isMobileMenuOpen }">
      <div class="mobile-nav-backdrop" @click="toggleMobileMenu"></div>
      <div class="mobile-nav-menu">
        <div class="mobile-links">
          <RouterLink to="/service" active-class="active" @click="toggleMobileMenu">Service</RouterLink>
          <RouterLink to="/projects" active-class="active" @click="toggleMobileMenu">Projects</RouterLink>
          <RouterLink to="/careers" active-class="active" @click="toggleMobileMenu">Careers</RouterLink>
          <RouterLink to="/contact" active-class="active" @click="toggleMobileMenu">Contact</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data: function () {
    return {
      navigationOpacity: "0.6",
      isMobileMenuOpen: false
    }
  },
  mounted: function () {
    this.Scroll();
    window.addEventListener("scroll", this.Scroll);
    window.addEventListener("resize", this.handleResize);
  },
  unmounted: function () {
    window.removeEventListener("scroll", this.Scroll);
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    Scroll: function () {
      if (window.scrollY < 200) this.navigationOpacity = "0.6";
      else this.navigationOpacity = "1";
    },
    toggleMobileMenu: function () {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;

      // Prevent body scrolling when menu is open
      if (this.isMobileMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    },
    handleResize: function () {
      // Close mobile menu if screen becomes larger
      if (window.innerWidth > 768) {
        this.isMobileMenuOpen = false;
        document.body.style.overflow = 'auto';
      }
    }
  }
});
</script>

<style scoped lang="scss">
.component-navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background-color 0.3s ease;
  font-family: "Oswald";
  font-size: 1.25rem;

  .left {
    .logo {
      img {
        height: 50px;
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
    gap: 8px;

    a {
      color: inherit;
      border-radius: 8px;
      text-decoration: inherit;
      transition: all 0.2s ease-out;
      position: relative;

      &:hover {
        background-color: hsla(0, 0%, 50%, 0.3);
        transform: translateY(-2px);
      }

      .item {
        padding: 10px 16px;
        font-weight: normal;
        user-select: none;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      &.active {
        background-color: hsla(0, 0%, 50%, 0.65);
      }
    }
  }

  .mobile-nav-toggle {
    display: none;
    cursor: pointer;
  }

  .mobile-nav {
    display: none;
  }

  @media screen and (max-width: 768px) {
    .desktop-nav {
      display: none;
    }

    .mobile-nav-toggle {
      display: block;
      z-index: 1001;

      .hamburger {
        width: 30px;
        height: 20px;
        position: relative;
        transform: rotate(0deg);
        transition: .5s ease-in-out;
        cursor: pointer;

        span {
          display: block;
          position: absolute;
          height: 3px;
          width: 100%;
          background: #333;
          border-radius: 9px;
          opacity: 1;
          left: 0;
          transform: rotate(0deg);
          transition: .25s ease-in-out;
        }

        span:nth-child(1) {
          top: 0px;
        }

        span:nth-child(2) {
          top: 10px;
        }

        span:nth-child(3) {
          top: 20px;
        }

        &.is-active span:nth-child(1) {
          top: 10px;
          transform: rotate(135deg);
        }

        &.is-active span:nth-child(2) {
          opacity: 0;
          left: -60px;
        }

        &.is-active span:nth-child(3) {
          top: 10px;
          transform: rotate(-135deg);
        }
      }
    }

    .mobile-nav {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1000;
      visibility: hidden;
      opacity: 0;
      transition: visibility 0.3s, opacity 0.3s;

      &.is-open {
        visibility: visible;
        opacity: 1;
      }

      .mobile-nav-backdrop {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.5);
      }

      .mobile-nav-menu {
        position: absolute;
        top: 0;
        right: 0;
        width: 250px;
        height: 100%;
        background: white;
        padding: 2rem;
        transform: translateX(100%);
        transition: transform 0.3s;
        display: flex;
        flex-direction: column;
        font-family: "Oswald";
        justify-content: flex-start;
        padding-top: 4rem;

        .mobile-links {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;

          a {
            text-decoration: none;
            color: #333;
            font-size: 1.2rem;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            padding: 0.5rem 0;
            border-bottom: 1px solid rgba(0,0,0,0.1);
            transition: color 0.3s ease;

            &.active {
              color: #2ecc71;
            }

            &:hover {
              color: #2ecc71;
            }

            &:last-child {
              border-bottom: none;
            }
          }
        }
      }

      &.is-open .mobile-nav-menu {
        transform: translateX(0);
      }
    }
  }
}
</style>
