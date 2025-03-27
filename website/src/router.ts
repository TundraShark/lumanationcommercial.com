import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/home.vue";
import About from "./views/about.vue";
import Projects from "./views/projects.vue";
import Service from "./views/service.vue";
import Careers from "./views/careers.vue";
import Contact from "./views/contact.vue";
import PrivacyPolicy from "./views/privacy-policy.vue";
import TermsOfService from "./views/terms-of-service.vue";
import NotFound from "./views/not-found.vue";
import Secret from "./views/secret.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    }, {
      path: "/secret",
      name: "Secret",
      component: Secret
    }, {
      path: "/about",
      name: "About",
      component: About
    }, {
      path: "/projects",
      name: "Projects",
      component: Projects
    }, {
      path: "/service",
      name: "Service",
      component: Service
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
    }, {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound
    }
  ]
})

export default router;
