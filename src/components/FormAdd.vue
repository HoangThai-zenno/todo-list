<template>
    <div class="form-group add-task">
        <button v-on:click="onCLickAdd" type="button" class="btn btn-info btn-block">Add Task</button>
    </div>
</template>

<script>
export default {
    name: 'form-add',
    methods: {
        onCLickAdd(){
            this.$emit('handelAddTask')
        }
    }
}
</script>

<style></style>