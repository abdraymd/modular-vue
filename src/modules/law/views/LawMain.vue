<template>
	<section class="law-main">
		<div class="law-main__counter">
			<div>count: {{ count }}</div>
			<button class="law-main__btn" @click="increment">Increment</button>
		</div>

		<LawTable />
	</section>
</template>

<script>
import { computed } from 'vue';
import LawTable from '../components/LawTable.vue';
import { useStoreLaw } from '../store';

export default {
	name: 'LawMain',
	components: {
		LawTable
	},
	setup() {
		const store = useStoreLaw();

		return {
			count: computed(() => store.count),
			increment: store.increment
		};
	}
};
</script>

<style lang="scss" scoped>
.law-main {
	&__counter {
		display: flex;
		align-items: center;
		padding: 1rem 0;
	}

	&__btn {
		margin-left: 2.5rem;
		padding: 1rem 0.5rem;
		font-size: 1rem;
		background: #34ebb4;
		border-radius: 0.5rem;
	}
}
</style>
