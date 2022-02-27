import Home from "../Views/Home.vue";
import Projects from "../Views/Projects.vue";
import CV from "../Views/CV.vue";
import Blog from "../Views/Blog.vue";

import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    { path: '/', component: Home, name: 'Home' },
    //{ path: '/projects', component: Projects, name: 'Projects' },
    { path: '/CV', component: CV, name: 'CV' },
    { path: '/blog', component: Blog, name: 'Blog' },
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes
});