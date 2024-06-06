import {createRouter, createWebHistory } from 'vue-router';
import Login from '../pages/Login/Login.vue';
import Register from '../pages/Register/Register.vue';
import Course from '../pages/Course/Course.vue';
import HelloWorld from '../components/HelloWorld.vue';

const routes = [
    {
        name: 'VTest',
        path: '/',
        component: HelloWorld
    },
    {
        name: 'Login',
        path: '/login',
        component: Login      
    },
    {
        name: 'Register',
        path: '/register',
        component: Register
    },
    {
        name: 'Course',
        path: '/course',
        component: Course
    }
];

const router = createRouter({
    history: createWebHistory('/'),
    routes
});

export default router;