import './bootstrap';

import.meta.glob([
    '../../backend/**',
]);

import {createApp} from 'vue';
import {registerModules} from "./register-module.js";
import Skeleton from "./modules/skeleton"
import Dashboard from "./modules/dashboard";
import router from "./router.js";
import User from "./modules/user";
const app = createApp({});
import route from 'ziggy-js';
registerModules({
    skeleton: Skeleton,
    dashboard: Dashboard,
    user: User,
});
app.use(router);


app.mount('#app');

app.config.globalProperties.$ziggyRoute = route
