<template>
	<button class="button">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'UiButton'
};
</script>

<style lang="scss" scoped>
.button {
	padding: 1rem 0.5rem;
	font-size: 1rem;
	background: #34ebb4;
	border-radius: 0.5rem;
}
</style>
