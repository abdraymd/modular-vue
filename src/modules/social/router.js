import router from '../../router';

router.addRoute({
	path: '/news',
	component: () => import('../social/views/News.vue')
});
