import "./style.scss";
import "./primevue-styles.css"; // Import custom PrimeVue styles
import "./checkbox-styles.css"; // Import custom Checkbox styles
import "./primevue-override.css"; // Import PrimeVue component overrides
import "./white-checkmark.css"; // Import white checkmark styles
import "./fileupload-styles.css"; // Import file upload styles
import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import App from "./app.vue";
import router from "./router";

// Import PrimeVue components
import Calendar from "primevue/calendar";
import Checkbox from "primevue/checkbox";
import FileUpload from "primevue/fileupload";

const app = createApp(App);

// Register PrimeVue components globally
app.component("Calendar", Calendar);
app.component("Checkbox", Checkbox);
app.component("FileUpload", FileUpload);

app
  .use(router)
  .use(PrimeVue, {
    preset: Aura,
    ripple: true
    // unstyled: true
  })
  .mount("#app");
