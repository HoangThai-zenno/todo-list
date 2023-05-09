<template>
    <div class="card ">
        <div class="card-header">List Task</div>
        <table class="table table-hover ">
            <thead>
                <tr>
                    <th style="width: 10%" class="text-center">#</th>
                    <th>Task</th>
                    <th style="width: 20%" class="text-center">Level</th>
                    <th style="width: 160px">Action</th>
                </tr>
            </thead>
            <tbody>

                <list-task-item v-bind:list="list" v-bind:index="index+1" v-for="(list,index) in listTasks" v-bind:key="list.id"/>

            </tbody>


        </table>
    </div>
</template>

<script>
import ListTaskItem from './ListTaskItem.vue';
export default {
    name: 'list-tasks',
    props:{
        listTasks:{
            type: Array,
            defaultValue: []
        }
    },
    components: {
        ListTaskItem
    }
}
</script>

<style></style>