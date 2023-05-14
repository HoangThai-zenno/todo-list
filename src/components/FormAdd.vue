<template>
    <div class="form-group add-task">
        <button v-on:click="onCLickAdd" type="button" class="btn btn-info btn-block">
            {{ isShowForm ? 'Close Form' : 'Add Task' }}
        </button>
    </div>
</template>

<script>
export default {
    name: 'form-add',

    props:{
        isShowForm:{type: Boolean, defaultValue: false}
    },

    methods: {
        onCLickAdd(){
            this.$emit('handelToggleForm');
        }
    }
}
</script>

<style></style>