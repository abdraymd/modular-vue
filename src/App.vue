<template>
	<div>
		<component :is="layout">
			<router-view></router-view>
		</component>
	</div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import DefaultLayout from './layouts/DefaultLayout.vue';

export default {
	name: 'App',
	setup() {
		const route = useRoute();
		const layout = computed(() => route.meta.layout || DefaultLayout);

		return {
			layout
		};
	}
};
</script>
