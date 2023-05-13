<template>
    <tr>
        <td class="text-center">{{ index }}</td>
        <td>{{ list.taskName }}</td>
        <td class="text-center"><span class="badge" v-bind:class="classLevel">{{ getLevelName }}</span></td>
        <td>
            <button @click="handleEdit" type="button" class="btn btn-warning">Edit</button>
            <button @click="handleDelete" type="button" class="btn btn-danger">Delete</button>
        </td>
    </tr>
</template>

<script>
import mapLevel from '../assets/mocks/levelTask'
export default {
    name: 'list-task-item',
    
    props: {
        list: { type: Object, defaultValue: null },
        index: { type: Number }
    },

    computed: {
        getLevelName() {
            return mapLevel[this.list.level].name;
        },
        classLevel() {
            return mapLevel[this.list.level].class;

        }
    },

    methods: {
        handleDelete() {
            if (confirm("Are you sure you want to delete Task " +"' "+ this.list.taskName + " ' ?")) {
                this.$emit('handleDelete', this.list)
            }
        },
        handleEdit(){
            this.$emit('handleEdit', this.list)
        }
    }
}
</script>

<style></style>