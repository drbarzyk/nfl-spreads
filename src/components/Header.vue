<script lang="ts">
import { defineComponent } from 'vue';

import { UserCircleIcon } from '@heroicons/vue/24/solid'

export default defineComponent({
	components: {
		UserCircleIcon
	},
	data() {
		return {
			navRoutes: ['Games', 'Picks', 'Standings']
		}
	}
});
</script>

<template>
	<div class="relative flex items-center h-40 p-20 text-accent">
		<nav class="flex w-full space-x-10">
			<router-link v-for="route in navRoutes" :to="{ name: route }" :key="route">
				<span>{{ route.toLocaleLowerCase() }}</span>
			</router-link>
		</nav>
		<router-link :to="{ name: 'Account' }" class="flex items-center">
			<UserCircleIcon class="h-6" />
		</router-link>
	</div>
</template>


<style scoped>

</style>
