<template>
  <div class="services">
    <div class="container">
      WIP: Services Page
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
});
</script>

<style scoped lang="scss">
.services {
  display: flex;
  min-height: calc(100vh - 100px);

  > .container {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 96px;
    font-weight: bold;
    font-size: 2rem;
    font-family: "RobotoFlex";
  }
}
</style>
