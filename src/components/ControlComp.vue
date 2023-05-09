<template>
	<b-col cols="12" lg="6">
		<b-row>
			<!-- SORT : START -->
			<control-sort />
			<!-- SORT : END -->

			<!-- SEARCH : START -->
			<control-search />
			<!-- SEARCH : END -->
		</b-row>
	</b-col>
</template>

<script>
import ControlSearch from './ControlSearch.vue';
import ControlSort from './ControlSort.vue';
export default {
	name: 'control-comp',
	components: {
		ControlSearch,
		ControlSort
	}
}
</script>

<style></style>