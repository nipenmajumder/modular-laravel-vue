
const moduleRoute = {
    path: "/",
    component: import('./Module.vue'),
    children: [
        {
            path: "/",
            component: import('./views/partials/App.vue')
        },
    ]
};

export default router => {
    router.addRoute(moduleRoute);
};
