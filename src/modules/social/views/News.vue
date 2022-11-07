<template>
	<section class="news">
		<article v-for="(article, i) in news" :key="i" class="news-article">
			<div class="news-article__title">{{ article.title }}</div>
			<p class="news-article__text">{{ article.text }}</p>
		</article>
	</section>
</template>

<script>
export default {
	name: 'News',
	setup() {
		return {
			news: [
				{ title: 'Title', text: 'text' },
				{ title: 'Title 2', text: 'text 2' },
				{ title: 'Title 3', text: 'text 3' }
			]
		};
	}
};
</script>

<style lang="scss" scoped>
.news {
	display: flex;
	justify-content: space-between;
}

.news-article {
	width: 30%;
	padding: 2rem;
	border: 1px solid black;

	&__title {
		font-size: 2rem;
		margin-bottom: 1rem;
	}
}
</style>
