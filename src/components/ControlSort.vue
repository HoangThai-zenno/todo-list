<template>
    <b-col cols="12">
        <div class="form-group">
            <b-dropdown id="dropdown-1" text="Sort By">
                <b-dropdown-item @click="handleSort('name', 'asc')">Name ASC</b-dropdown-item>
                <b-dropdown-item @click="handleSort('name', 'desc')">Name DESC</b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item @click="handleSort('level', 'asc')">Level ASC</b-dropdown-item>
                <b-dropdown-item @click="handleSort('level', 'desc')">Level DESC</b-dropdown-item>
            </b-dropdown>
            <span class=" oder badge badge-success badge-medium">{{ orderBy }} - {{ orderDir }}</span>
        </div>
    </b-col>
</template>

<script>
export default {
    name: 'control-sort',
    props: {
        orderBy: { type: String, default: 'name' },
        orderDir: { type: String, default: 'asc' }
    },
    methods:{
        handleSort(orderBy, orderDir) {
            console.log(orderBy, orderDir);
            this.$emit('handleSort', orderBy, orderDir);
        }
    }
}
</script>

<style>
.oder{
    text-transform: uppercase;
}
</style>