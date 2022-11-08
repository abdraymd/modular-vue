<template>
	<section class="law-main">
		<div class="law-main__counter">
			<div>count: {{ count }}</div>
			<UiButton class="law-main__btn" @click="increment">Increment</UiButton>
		</div>

		<LawTable />
	</section>
</template>

<script>
import { computed } from 'vue';
import LawTable from '../components/LawTable.vue';
import UiButton from '@/modules/shared/components/UiButton.vue';
import { useStoreLaw } from '../store';

export default {
	name: 'LawMain',
	components: {
		LawTable,
		UiButton
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
