import router from '../../router';
import AdminMain from './views/AdminMain.vue';
import AdminLayout from '../../layouts/AdminLayout.vue';

router.addRoute({
	path: '/admin',
	component: AdminMain,
	meta: { layout: AdminLayout }
});
