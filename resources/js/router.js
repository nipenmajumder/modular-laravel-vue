import {createRouter, createWebHistory} from 'vue-router';
import routes from './routes';
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return {x: 0, y: 0};
    },
});

export  default router;
