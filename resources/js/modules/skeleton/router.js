const moduleRoute = {
    path: "/",
    name: "skeleton" ,
    component: () => import('./Module.vue'),
};

export default router => {
    router.addRoute(moduleRoute);
};
