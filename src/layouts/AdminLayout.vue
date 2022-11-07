<template>
	<div class="admin-wrapper">
		<header class="admin-header">
			<div class="container">
				<nav class="admin-nav">
					<ul class="admin-nav__list">
						<li v-for="link in links" :key="link.path" class="admin-nav__item">
							<router-link
								:to="link.path"
								exact-active-class="admin-nav__link--active"
								class="admin-nav__link"
							>
								{{ link.title }}
							</router-link>
						</li>
					</ul>
				</nav>
			</div>
		</header>

		<main class="admin-main">
			<div class="container">
				<slot></slot>
			</div>
		</main>
	</div>
</template>

<script>
import links from '../utils/nav-links';

export default {
	name: 'AdminLayout',
	setup() {
		return {
			links
		};
	}
};
</script>

<style lang="scss" scoped>
.admin-wrapper {
	display: flex;
}

.admin-header {
	width: 250px;
	min-height: 100vh;
	padding: 1.5rem 2rem;
	background: #34ebb4;
}

.admin-nav {
	&__item {
		margin-bottom: 1rem;

		&:last-child {
			margin-bottom: 0;
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

.admin-main {
	padding: 2rem;
}
</style>
