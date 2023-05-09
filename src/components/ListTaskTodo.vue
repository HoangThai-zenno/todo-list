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

                <list-task-item />
                <list-task-item />
                <list-task-item />

            </tbody>


        </table>
    </div>
</template>

<script>
import ListTaskItem from './ListTaskItem.vue';
export default {
    name: 'list-tasks',
    components: {
        ListTaskItem
    }
}
</script>

<style></style>