const moduleRoute = {
    path: "/",
    component: () => import('../skeleton/Module.vue'),
    children: [
        {
            path: "/dashboard",
            name: 'dashboard',
            component: () => import('./views/dashboard.vue')
        },
    ]
};

export default router => {
    router.addRoute(moduleRoute);
};
