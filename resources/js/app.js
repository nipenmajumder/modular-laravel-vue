import './bootstrap';
import {createApp} from 'vue';
import {registerModules} from "./register-module.js";
import Skeleton from "./modules/skeleton"
import router from "./router.js";

const app = createApp({});

registerModules({
    skeleton: Skeleton,
});

app.use(router);
app.mount('#app');
