<template>
  <div class="about">
    <div class="container">
      WIP: About Page

      <!--
        Company Overview and History
        Details of how we do business and work WITH general contractors to fit their needs (basically outlining our relationship process)
        Detailed Bio’s of various team members/executives/office/field leads.
      -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
});
</script>

<style scoped lang="scss">
.about {
  display: flex;
  flex-grow: 1;

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
