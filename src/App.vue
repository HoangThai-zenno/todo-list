<template>
	<div id="app">
		<b-container>
			<title-header />
			<b-row>
				<control-comp v-bind:strSearch="strSearch" v-on:handleSearch="handleSearch" />
				<form-comp v-bind:isShowForm="isShowForm" v-on:toggleForm="toggleForm" v-bind:orderBy="orderBy" v-bind:orderDir="orderDir" />
			</b-row>
			<list-tasks v-bind:listTasks="listTaskSearch" />
		</b-container>
	</div>
</template>

<script>
import TitleHeader from './components/TitleHeader.vue';
import ControlComp from './components/ControlComp.vue';
import FormComp from './components/FormComp.vue';
import ListTasks from './components/ListTaskTodo.vue';

import Tasks from './assets/mocks/taskList'
export default {
	name: 'App',
	data() {
		return {
			listTasks: Tasks,
			isShowForm: false,
			strSearch: '',
			orderBy: 'name',
			orderDir: 'asc'
		}
	},
	components: {
		TitleHeader,
		ControlComp,
		FormComp,
		ListTasks
	},
	computed: {
		listTaskSearch() {
			const { strSearch } = this;
			var newItems = this.listTasks.filter(item => {
				return item.taskName.toLowerCase().includes(strSearch.toLowerCase())
			});
			// this.listTasks.forEach(function(item) {
			// 	if(item.taskName.toLowerCase().includes(strSearch.toLowerCase())) {
			// 		newItems.push(item);
			// 	}
			// })
			return newItems

		}
	},
	methods: {
		toggleForm() {
			this.isShowForm = !this.isShowForm
		},
		handleSearch(data) {
			this.strSearch = data;
		}
	}
}
</script>

<style>
body {
	padding: 100px 0;
}

.table>tbody>tr>td,
.table>tbody>tr>th,
.table>tfoot>tr>td,
.table>tfoot>tr>th,
.table>thead>tr>td,
.table>thead>tr>th {
	vertical-align: middle;
}

.container>.row {
	margin-top: 20px;
	margin-bottom: 30px;
}

span.badge-medium {
	padding: 11px 10px;
	margin: 0px 8px;
	font-size: 16px;
	display: inline-block;
	vertical-align: top;
}

@media (max-width: 992px) {
	.add-task {
		margin-top: 50px;
	}
}

.btn.btn-warning {
	margin-right: 10px;
}

.level {
	cursor: pointer;
}
</style>
