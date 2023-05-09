<template>
    <tr>
        <td class="text-center">{{ index }}</td>
        <td>{{ list.taskName }}</td>
        <td class="text-center"><span class="badge" v-bind:class="classLevel">{{ getLevelName }}</span></td>
        <td>
            <button type="button" class="btn btn-warning">Edit</button>
            <button type="button" class="btn btn-danger">Delete</button>
        </td>
    </tr>
</template>

<script>
export default {
    name: 'list-task-item',
    props: {
        list: { type: Object, defaultValue: null },
        index: { type: Number }
    },
    computed: {
        getLevelName() {
            switch (this.list.level) {
                case 0:
                    return 'Small';
                case 1:
                    return 'Medium';
                case 2:
                    return 'Hight';
                default:
                    return ''
            }
        },
        classLevel(){
            switch (this.list.level) {
                case 0:
                    return {'badge-info': true};
                case 1:
                    return {'badge-warning': true};
                case 2:
                    return {'badge-danger': true};
                default:
                    return ''
            }

        }
    }
}
</script>

<style></style>