import { createRouter, createWebHistory } from "vue-router";
import AppLayout from "../layouts/AppLayout.vue";
import HelloWorld from "../components/HelloWorld.vue";

export const router  = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [{
                path: '/hello',
                component: HelloWorld
            }]
        }
    ]
})