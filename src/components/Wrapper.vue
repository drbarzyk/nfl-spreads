<script lang="ts">
import { defineComponent } from 'vue';
import Header from './Header.vue';

export default defineComponent({
	components: {
		Header
	},
	data() {
		return {

		}
	}
});
</script>

<template>
	<div class="flex flex-col relative h-screen font-playfair">
		<Header class="max-md:hidden" />
		<router-view />
	</div>
</template>

<style scoped>

</style>
