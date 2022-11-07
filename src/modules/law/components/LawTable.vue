<template>
	<table class="law-table">
		<thead>
			<tr>
				<td>№</td>
				<td>Тип заявки</td>
				<td>Инициатор</td>
				<td>Исполнитель</td>
			</tr>
		</thead>
		<tbody>
			<tr v-for="i in 5" :key="i">
				<td>{{ i }}</td>
				<td>Example</td>
				<td>Example</td>
				<td>Example</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
export default {
	name: 'LawTable'
};
</script>

<style lang="scss" scoped>
.law-table {
	width: 100%;
	border-collapse: collapse;

	thead {
		color: #fff;
		background: #34d2eb;
	}

	td {
		padding: 0.5rem;
	}
}
</style>
