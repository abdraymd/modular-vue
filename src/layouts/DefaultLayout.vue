<template>
	<header class="default-header">
		<div class="container">
			<nav class="default-nav">
				<ul class="default-nav__list">
					<li v-for="link in links" :key="link.path" class="default-nav__item">
						<router-link
							:to="link.path"
							exact-active-class="default-nav__link--active"
							class="default-nav__link"
						>
							{{ link.title }}
						</router-link>
					</li>
				</ul>
			</nav>
		</div>
	</header>

	<main class="default-main">
		<div class="container">
			<slot></slot>
		</div>
	</main>
</template>

<script>
import links from '../utils/nav-links';

export default {
	name: 'DefaultLayout',
	setup() {
		return {
			links
		};
	}
};
</script>

<style lang="scss" scoped>
.default-header {
	padding: 1.5rem 0;
	background: pink;
}

.default-nav {
	&__list {
		display: flex;
	}

	&__item {
		margin-right: 1rem;

		&:last-child {
			margin-right: 0;
		}
	}

	&__link {
		font-size: 1.5rem;
		color: #fff;

		&--active {
			color: blue;
		}
	}
}

.default-main {
	padding: 2rem 0;
}
</style>
