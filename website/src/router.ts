import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/home.vue";
import About from "./views/about.vue";
import Projects from "./views/projects.vue";
import Services from "./views/services.vue";
import Careers from "./views/careers.vue";
import Contact from "./views/contact.vue";

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
    }
  ]
})

export default router;
