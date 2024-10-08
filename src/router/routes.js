import {createRouter, createWebHashHistory} from "vue-router";
import ClientsPage from "@/components/Clients/ClientsPage.vue"
import InstallationPage from "@/components/Installation/InstallationPage.vue"
import MeasuringPage from "@/components/Measuring/MeasuringPage.vue"
import KanbanPage from "@/components/Kanban/KanbanPage.vue"
import StatisticsPage from "@/components/Statistic/StatisticsPage.vue"

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/clients', component: ClientsPage
        },
        {
            path: '/installation', component: InstallationPage
        },
        {
            path: '/measuring', component: MeasuringPage
        },
        {
            path: '/kanban', component: KanbanPage
        },
        {
            path: '/statistics', component: StatisticsPage
        }
    ]
})

export default router