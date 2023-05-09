<template>
	<div id="app">
		<b-container>

			<!-- TITLE : START -->
				<title-header/>
			<!-- TITLE : END -->


			<b-row>
				<!-- CONTROL (SEARCH + SORT + ADD) : START -->
				<control-comp/>
				<!-- CONTROL (SEARCH + SORT + ADD) : END -->

				<!-- FORM : START -->
				<form-comp/>
				<!-- FORM : END -->
			</b-row>

			<!-- LIST : START -->
			<list-tasks/>
			
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
	components: {
		TitleHeader,
		ControlComp,
		FormComp,
		ListTasks
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
