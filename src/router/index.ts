import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const constantRoutes: RouteRecordRaw[] = [
    {
        path: "/404",
        component: () => import("@/pages/error-page/404.vue"),
        meta: {
            hidden: true
        },
        alias: "/:pathMatch(.*)*"
    },
    {
        path: "/login",
        component: () => import("@/pages/login/index.vue"),
        meta: {
            hidden: true
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: constantRoutes,
})

export default router;