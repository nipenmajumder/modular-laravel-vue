import './bootstrap';
import {createApp} from 'vue';
import {registerModules} from "./register-module.js";
import Skeleton from "./modules/skeleton"
import Dashboard from "./modules/dashboard";
import router from "./router.js";

const app = createApp({});

registerModules({
    skeleton: Skeleton,
    dashboard: Dashboard,
});

app.use(router);
app.mount('#app');
