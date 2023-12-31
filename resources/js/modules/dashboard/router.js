const moduleRoute = {
    path: "/",
    name: 'dashboard',
    component: () => import('./views/dashboard.vue'),
};

export default router => {
    if (router.hasRoute("skeleton")){
        router.addRoute("skeleton",moduleRoute);
    }
};
