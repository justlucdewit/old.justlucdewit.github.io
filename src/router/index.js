import Home from "../Views/Home.vue";
import Projects from "../Views/Projects.vue";
import CV from "../Views/CV.vue";
import Blog from "../Views/Blog.vue";

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', component: Home, name: 'Home' },
    { path: '/about', component: Projects, name: 'Projects' },
    { path: '/blog', component: Blog, name: 'Blog' },
    { path: '/CV', component: CV, name: 'CV' }
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});