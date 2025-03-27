<template>
  <div class="careers">
    <div class="container">
      WIP: Careers Page

      <!--
        - Description company and Culture
        - List of benefits, bullet point out
        - Body Layout:
          - Option A: 4 posted Jobs either in a quadrant/brick layered format
          - Option B: Have buttons that have the Job title that can be clicked to populate the job description same page.
            - Have button at the bottom of job description that says “apply here” linking the applicant to a pre-populated email subject matching the job title – and allowing them to formulate a basic email (or prepopulated body text and ask for them to add their {name} and to attach their resume pdf/word/etc.
          - (Future additions):
            - Video about the company and career opportunities and hitting on culture and advancement, etc. (some really good AI voice over videos we could utilize, or do the voiceover myself and edit). Example of other company: https://www.tricityelectric.com/careers/
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
.careers {
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
