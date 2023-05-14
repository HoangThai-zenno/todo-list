<template>
    <div class="card">
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

            <tbody v-if="listTasks.length !== 0">
                <list-task-item 
                v-bind:list="list" 
                v-bind:index="index+1" 
                v-for="(list,index) in listTasks" 
                v-bind:key="list.id"
                v-on:handleDelete="handleDelete"
                v-on:handleEdit="handleEdit"
                />
            </tbody>

            <tbody v-else>
                <tr>
                    <td colspan="4" style="text-align: center; color: rgb(189, 41, 41);">
                        <h3>List Emty</h3>
                    </td>
                </tr>
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
    },

    methods:{
        handleDelete(taskDel){           
            this.$emit('handleDelete',taskDel);
        },
        handleEdit(taskEdit){
            this.$emit('handleEdit',taskEdit);
        }
    }
}
</script>

<style></style>