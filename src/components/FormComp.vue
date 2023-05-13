<template>
    <b-col cols="12" lg="6">
        <!-- ADD : START -->
        <form-add v-on:handelToggleForm="handelToggleForm" v-bind:isShowForm="isShowForm" />
        <!-- ADD : END -->

        <form v-if="isShowForm" action="" method="POST" class="form-inline justify-content-between">
            <div class="form-group">
                <label class="sr-only" for="">label</label>
                <input v-model="taskName" type="text" class="form-control" placeholder="Task Name" />
            </div>
            <div class="form-group">
                <label class="sr-only" for="">label</label>
                <select v-model="level" name="ds" class="form-control level" required="required">
                    <option value="0">Small</option>
                    <option value="1">Medium</option>
                    <option value="2">High</option>
                </select>
            </div>

            <button v-if="taskSelected === null" @click="handleAddnew" type="button" class="btn btn-primary">Submit</button>
            <button v-else @click="handleEditTask" type="button" class="btn btn-primary">Update</button>

            <button v-on:click="handleCancle" type="button" class="btn btn-secondary">Cancel</button>
        </form>
    </b-col>
</template>

<script>
import FormAdd from './FormAdd.vue';
import { v4 as uuidv4 } from 'uuid';

export default {
    name: 'form-comp',
    props: {
        isShowForm: { type: Boolean, defaultValue: false },
        taskSelected: { type: Object, defaultValue: null }
    },
    data() {
        return {
            taskName: '',
            level: 0
        }
    },
    components: {
        FormAdd
    },
    watch: {
        taskSelected: function (newData, oldData) {
            if (newData !== null) {
            this.taskName = newData.taskName;
            this.level = newData.level;
        }
            console.log(newData,oldData);
        }

    },
    beforeUpdate() {
        
    },
    methods: {
        handleEditTask(){
            let objTask = {
				id: this.taskSelected.id,
                taskName: this.taskName,
                level: parseInt(this.level)
			}
            this.$emit('handleEditTask',objTask)
            this.handleResetData()
        },
        handleAddnew() {
            let obj = {
                id: uuidv4(),
                taskName: this.taskName,
                level: parseInt(this.level)
            }
            if (this.taskName !== '') {
                this.$emit('handelAddnew', obj);
                this.handleCancle();
            } else alert('Task name is required !');
        },
        handelToggleForm() {
            this.$emit('handelToggleForm')
        },
        handleCancle() {
            this.$emit('handelToggleForm')
            this.handleResetData()
        },
        handleResetData() {
            this.taskName = '',
                this.level = 0
        }
    }
}
</script>

<style></style>