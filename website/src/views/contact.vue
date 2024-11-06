<template>
  <div class="contact">
    <div class="container">
      WIP: Contact Page
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
});
</script>

<style scoped lang="scss">
.contact {
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
