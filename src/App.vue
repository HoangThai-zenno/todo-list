<template>
	<div id="app">
		<b-container>
			<title-header />
			<b-row>
				<control-comp 
					v-bind:strSearch = "strSearch" 
					v-on:handleSearch = "handleSearch" 
					v-bind:orderBy = "orderBy"
					v-bind:orderDir = "orderDir" 
					v-on:handleSort = "handleSort" 
				/>

				<form-comp 
					v-on:handleEditTask = "handleEditTask" 
					v-bind:taskSelected = "taskSelected"
					v-bind:isShowForm = "isShowForm" 
					v-on:handelToggleForm = "handelToggleForm"
					v-on:handelAddnew = "handelAddnew" 
				/>
			</b-row>

			<list-tasks 
				v-on:handleDelete = "handleDelete" 
				v-bind:listTasks = "listTasksSort" 
				v-on:handleEdit = "handleEdit" 
			/>
		</b-container>
	</div>
</template>

<script>
import TitleHeader from './components/TitleHeader.vue';
import ControlComp from './components/ControlComp.vue';
import FormComp from './components/FormComp.vue';
import ListTasks from './components/ListTaskTodo.vue';

export default {
	name: 'App',

	data() {
		return {
			listTasks: [],
			isShowForm: false,
			strSearch: '',
			orderBy: "name",
			orderDir: "asc",
			taskSelected: null
		}
	},

	components: {
		TitleHeader,
		ControlComp,
		FormComp,
		ListTasks
	},

	watch: {
		listTasks: function (newTasks) {
			var tasksString = JSON.stringify(newTasks);
			localStorage.setItem('tasks', tasksString);
		}
	},

	computed: {
		listTaskSearch() {
			const { strSearch } = this;
			var newItems = this.listTasks.filter(item => {
				return item.taskName.toLowerCase().includes(strSearch.toLowerCase())
			});
			return newItems;
		},
		listTasksSort() {
			var listTask = [...this.listTaskSearch];
			if (this.orderBy === 'name') {
				listTask.sort(this.compareName);
			} else if (this.orderBy === 'level') {
				listTask.sort(this.compareLevel);
			}
			return listTask;
		}

	},
	created() {
		let tasks = localStorage.getItem('tasks');
		if (tasks !== null) {
			this.listTasks = JSON.parse(tasks);
		}
		else {
			this.listTasks = [];
		}
	},

	methods: {
		handleEditTask(objTask) {
			let index = this.listTasks.findIndex(item => item.id === objTask.id);
			if (index != -1) {
				this.listTasks.splice(index, 1, objTask);
				this.handelToggleForm();
			}
		},
		handelAddnew(taskNew) {
			this.listTasks.push(taskNew);
		},
		handleEdit(taskEdit) {
			this.isShowForm = true;
			this.taskSelected = taskEdit;
			console.log(this, 'appVue');
		},
		handleDelete(taskDel) {
			this.listTasks = this.listTasks.filter(item => item.id !== taskDel.id);
		},
		compareName(a, b) {
			var numberSort = this.orderDir === 'asc' ? -1 : 1;
			if (a.taskName.toLowerCase() < b.taskName.toLowerCase()) return numberSort;
			else if (a.taskName.toLowerCase() > b.taskName.toLowerCase()) return numberSort * (-1);
			return 0;
		},
		compareLevel(a, b) {
			var numberSort = this.orderDir === 'asc' ? -1 : 1;
			if (a.level < b.level) return numberSort;
			else if (a.level > b.level) return numberSort * (-1);
			return 0;
		},
		handelToggleForm() {
			if (this.isShowForm) this.taskSelected = null;
			this.isShowForm = !this.isShowForm;
		},
		handleSearch(data) {
			this.strSearch = data;
		},
		handleSort(orderBy, orderDir) {
			this.orderBy = orderBy;
			this.orderDir = orderDir;
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
