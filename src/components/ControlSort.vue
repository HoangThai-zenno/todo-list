<template>
    <b-col cols="12">
        <div class="form-group">
            <b-dropdown id="dropdown-1" text="Sort By">
                <b-dropdown-item>Name ASC</b-dropdown-item>
                <b-dropdown-item>Name DESC</b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item>Level ASC</b-dropdown-item>
                <b-dropdown-item>Level DESC</b-dropdown-item>
            </b-dropdown>
            <span class="badge badge-success badge-medium">NAME - DESC</span>
        </div>
    </b-col>
</template>

<script>
export default {
    name: 'control-sort'
}
</script>

<style></style>