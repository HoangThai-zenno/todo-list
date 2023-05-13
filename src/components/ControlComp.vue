<template>
	<b-col cols="12" lg="6">
		<b-row>
			<!-- SORT : START -->
			<control-sort v-bind:orderBy="orderBy" v-bind:orderDir="orderDir" v-on:handleSort="handleSort"/>
			<!-- SORT : END -->

			<!-- SEARCH : START -->
			<control-search v-bind:strSearch="strSearch" v-on:handleSearch="handleSearch" />
			<!-- SEARCH : END -->
		</b-row>
	</b-col>
</template>

<script>
import ControlSearch from './ControlSearch.vue';
import ControlSort from './ControlSort.vue';
export default {
	name: 'control-comp',
	props: {
		strSearch: { type: String, default: '' },
		orderBy: { type: String, default: 'name' },
		orderDir: { type: String, default: 'asc' }
	},
	components: {
		ControlSearch,
		ControlSort
	},
	methods: {
		handleSearch(data) {
			this.$emit('handleSearch', data)

		},
		handleSort(orderBy, orderDir) {
			this.$emit('handleSort', orderBy, orderDir)
		}
	}
}
</script>

<style></style>