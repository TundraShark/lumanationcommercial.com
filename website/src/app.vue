<template>
  <Navigation />
  <keep-alive>
    <RouterView />
  </keep-alive>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navigation from "./components/navigation.vue";
import Footer from "./components/footer.vue";

export default defineComponent({
  components: {
    Navigation,
    Footer
  }
});
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
