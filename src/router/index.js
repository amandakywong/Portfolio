import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import Market_Project from "../views/Market_Project.vue";
import LIFX_Project from "../views/LIFX_Project.vue";
import Portfolio_Project from "../views/Portfolio_Project.vue";
import Data_Visualisation_Project from "../views/Data_Visualisation_Project";
import Resume from "../views/Resume.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/projectsView",
    name: "ProjectsView",
    component: ProjectsView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/Market_Project",
    name: "Market_Project",
    component: Market_Project,
  },
  {
    path: "/LIFX_Project",
    name: "LIFX_Project",
    component: LIFX_Project,
  },
  {
    path: "/Portfolio_Project",
    name: "Portfolio_Project",
    component: Portfolio_Project,
  },
  {
    path: "/Data_Visualisation_Project",
    name: "Data_Visualisation_Project",
    component: Data_Visualisation_Project,
  },
  {
    path: "/resume",
    name: "resume",
    component: Resume,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "is-active",
});

export default router;
