<template>
  <div class="do-not-sell">
    <div class="container">
      <div class="title-1 blue">Do Not Sell My Personal Information</div>

      <div class="text-1">Effective Date: 2025</div>

      <div class="text-1">At LumaNation Commercial, we respect your privacy rights under the California Consumer Privacy Act (CCPA). This page provides information about your right to opt-out of the sale of personal information.</div>

      <div class="title-2 red">1. Your CCPA Rights</div>

      <div class="text-1">As a California resident, you have the following rights:</div>

      <ul>
        <li>Right to know what personal information is collected about you</li>
        <li>Right to request deletion of your personal information</li>
        <li>Right to opt-out of the sale of your personal information</li>
        <li>Right to non-discrimination for exercising these rights</li>
      </ul>

      <div class="title-2 blue">2. What Information We May Collect</div>

      <div class="text-1">We may collect the following types of personal information:</div>

      <ul>
        <li>Contact information (name, email, phone number)</li>
        <li>Demographic information</li>
        <li>Browsing and usage data</li>
        <li>Device and browser information</li>
      </ul>

      <div class="title-2 red">3. Information Sharing and Sales</div>

      <div class="text-1">We do not sell your personal information in the traditional sense. However, under the broad CCPA definition, certain data sharing might be considered a "sale".</div>

      <div class="title-2 blue">4. How to Opt-Out</div>

      <div class="text-1">You can submit a request to opt-out of the sale of your personal information through the following methods:</div>

      <ul>
        <li>Email: privacy@lumanationcommercial.com</li>
        <li>Phone: (972) 528-0512</li>
        <li>Mail: Written request to the address below</li>
      </ul>

      <div class="title-2 red">5. Verification Process</div>

      <div class="text-1">To protect your privacy, we will verify your identity before processing any request. We may require additional information to confirm your identity.</div>

      <div class="title-2 blue">6. Protection of Your Information</div>

      <div class="text-1">We implement various security measures to protect your personal information, including:</div>

      <ul>
        <li>Encryption of sensitive data</li>
        <li>Secure server networks</li>
        <li>Limited access to personal information</li>
        <li>Regular security audits</li>
      </ul>

      <div class="title-2 red">7. Changes to This Notice</div>

      <div class="text-1">We may update this notice periodically. Changes will be posted on this page with an updated effective date. Please review it regularly to stay informed.</div>

      <div class="title-2 blue">8. Contact Us</div>

      <div class="text-1">If you have any questions about this notice or your privacy rights, please contact us:</div>

      <div class="text-1">
        <div>LumaNation Commercial</div>
      </div>

      <div class="text-1">
        <div>
          <div>2750 S Preston Road</div>
          <div>Suite 116-259</div>
          <div>Celina, TX 75009</div>
        </div>
      </div>

      <div class="text-1">
        <div>(972) 528-0512</div>
        <div>privacy@lumanationcommercial.com</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  metaInfo: {
    title: 'Do Not Sell My Personal Information - LumaNation Commercial',
    meta: [
      { 
        name: 'description', 
        content: 'Your privacy rights under the California Consumer Privacy Act (CCPA). Learn how to opt-out of data sales and protect your personal information.' 
      }
    ]
  }
});
</script>

<style scoped lang="scss">
.do-not-sell {
  display: flex;
  justify-content: center;
  flex-grow: 1;
  padding: 0 1rem 1rem 1rem;

  > .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 1000px;
    margin-top: 96px;
    font-weight: bold;
    font-size: 2rem;

    .title-1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      
      &.blue {
        color: #253472;
      }
    }

    .title-2 {
      font-size: 1.5rem;
      margin-top: 1.5rem;
      margin-bottom: 0.5rem;
      
      &.blue {
        color: #253472;
      }

      &.red {
        color: #ae1f24;
      }
    }

    .text-1 {
      font-size: 1rem;
      font-weight: normal;
      margin-bottom: 1rem;
      line-height: 1.6;
    }

    ul, ol {
      font-size: 1rem;
      font-weight: normal;
      margin-bottom: 1rem;
      padding-left: 2rem;
      line-height: 1.6;
    }
  }
}
</style>
