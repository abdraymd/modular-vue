import router from '../../router';
import AdminLayout from '../../layouts/AdminLayout.vue';

router.addRoute({
	path: '/admin',
	component: () => import('./views/AdminMain.vue'),
	meta: { layout: AdminLayout }
});
