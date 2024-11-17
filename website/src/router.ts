import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/home.vue";
import About from "./views/about.vue";
import Projects from "./views/projects.vue";
import Services from "./views/services.vue";
import Careers from "./views/careers.vue";
import Contact from "./views/contact.vue";
import PrivacyPolicy from "./views/privacy-policy.vue";
import TermsOfService from "./views/terms-of-service.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    }, {
      path: "/about",
      name: "About",
      component: About
    }, {
      path: "/projects",
      name: "Projects",
      component: Projects
    }, {
      path: "/services",
      name: "Services",
      component: Services
    }, {
      path: "/careers",
      name: "Careers",
      component: Careers
    }, {
      path: "/contact",
      name: "Contact",
      component: Contact
    }, {
      path: "/privacy",
      name: "PrivacyPolicy",
      component: PrivacyPolicy
    }, {
      path: "/terms",
      name: "TermsOfService",
      component: TermsOfService
    }
  ]
})

export default router;
