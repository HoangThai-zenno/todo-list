<template>
	<b-col cols="12" lg="6">
		<b-row>
			<!-- SORT : START -->
			<control-sort />
			<!-- SORT : END -->

			<!-- SEARCH : START -->
			<control-search v-bind:strSearch="strSearch" v-on:handleSearch = "handleSearch"/>
			<!-- SEARCH : END -->
		</b-row>
	</b-col>
</template>

<script>
import ControlSearch from './ControlSearch.vue';
import ControlSort from './ControlSort.vue';
export default {
	name: 'control-comp',
	props:{
		strSearch:{type: String, default: ''}
	},
	components: {
		ControlSearch,
		ControlSort
	},
	methods: {
		handleSearch(data){
			this.$emit('handleSearch', data)

		}
	}
}
</script>

<style></style>