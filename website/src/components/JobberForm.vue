<template>
  <div id="jobber-form-container">
    <div v-if="!formLoaded" class="loading-spinner"></div>
    <div ref="formContainer" id="04894617-4b71-40e8-805a-00fc98174962"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onActivated } from "vue";

// Create a global variable to track if the form has been initialized
let isFormInitialized = false;

export default defineComponent({
  setup() {
    const formContainer = ref<HTMLElement | null>(null);
    const formLoaded = ref(false);
    let jobberScript: HTMLScriptElement | null = null;

    // Function to clean up any existing Jobber elements
    const cleanupExistingElements = () => {
      // Remove any existing Jobber scripts
      document.querySelectorAll('script[src*="work_request_embed_snippet.js"]').forEach(script => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });

      // Remove any duplicate iframes
      const iframes = document.querySelectorAll('.jobber-work-request');
      if (iframes && iframes.length > 1) {
        // Keep only the first iframe
        for (let i = 1; i < iframes.length; i++) {
          if (iframes[i].parentNode) {
            iframes[i].parentNode.removeChild(iframes[i]);
          }
        }
      }
    };

    // Function to initialize the form
    const initializeForm = () => {
      if (isFormInitialized) {
        formLoaded.value = true;
        return;
      }

      // Clean up any existing elements first
      cleanupExistingElements();

      // Set loading state
      formLoaded.value = false;

      // Add the Jobber script
      jobberScript = document.createElement("script");
      jobberScript.src = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";
      jobberScript.setAttribute("clienthub_id", "04894617-4b71-40e8-805a-00fc98174962");
      jobberScript.setAttribute("form_url", "https://clienthub.getjobber.com/client_hubs/04894617-4b71-40e8-805a-00fc98174962/public/work_request/embedded_work_request_form");

      // Set loaded state when script loads
      jobberScript.onload = () => {
        formLoaded.value = true;
        isFormInitialized = true;
      };

      document.body.appendChild(jobberScript);
    };

    onMounted(() => {
      // Initialize the form when the component is first mounted
      initializeForm();
    });

    // When the component is reactivated (due to keep-alive)
    onActivated(() => {
      // Just make sure we don't have duplicates
      cleanupExistingElements();
    });

    return {
      formContainer,
      formLoaded
    };
  }
});
</script>

<style scoped>
#jobber-form-container {
  width: 100%;
  position: relative;
  min-height: 200px;
}

.loading-spinner {
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: #253472;
  animation: spin 1s ease-in-out infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 30px auto;
}

@keyframes spin {
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
