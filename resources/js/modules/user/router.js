const moduleRoute = {
    path: "/user",
    name: 'user',
    component: () => import('./views/UserList.vue'),
};

export default router => {
    if (router.hasRoute("skeleton")){
        router.addRoute("skeleton",moduleRoute);
    }
};
