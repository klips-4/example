import {createRouter, createWebHistory} from "vue-router";
import ClientsPage from "@/components/Clients/ClientsPage.vue"
import InstallationPage from "@/components/Installation/InstallationPage.vue"
import MeasuringPage from "@/components/Measuring/MeasuringPage.vue"
import KanbanPage from "@/components/Kanban/KanbanPage.vue"
import StatisticsPage from "@/components/Statistic/StatisticsPage.vue"


import MainPage from "@/views/MainPage.vue";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout.vue";
import UnAuthenticatedLayout from "@/layouts/UnAuthenticatedLayout.vue";
import {useAuthStore} from "@/stores/authStore";


export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/clients',
            meta: AuthenticatedLayout,
            component: ClientsPage
        },
        {
            path: '/installation',
            component: InstallationPage
        },
        {
            path: '/measuring',
            component: MeasuringPage
        },
        {
            path: '/kanban',
            component: KanbanPage
        },
        {
            path: '/statistics',
            component: StatisticsPage
        },
        {
            path: '/main',
            component: MainPage
        },
        {
            path: '/login',
            name: 'login',
            meta: {layout: UnAuthenticatedLayout},
            component: UnAuthenticatedLayout
        }

    ]
})

router.beforeEach((to, from, next) => {
    const publicPage = ['/login'];
    const authRequired = !publicPage.includes(to.path);
    const auth = useAuthStore()

    if (authRequired && !auth.accessToken) {
        next('/login');
    } else {
        next();
    }
})

export default router