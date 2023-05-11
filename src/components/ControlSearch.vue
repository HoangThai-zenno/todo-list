<template>
    <b-col cols="12">
        <div class="input-group">
            <input v-bind:value="strSearch"
                    v-on:input="handleSearch"    type="text" class="form-control" placeholder="Search for..." />
            <span class="input-group-append">
                <button v-on:click="handleClearSearch" class="btn btn-info" type="button">Clear!</button>
            </span>
        </div>
    </b-col>
</template>

<script>
export default {
    name: 'control-search',
    props: {
        strSearch: { type: String, default: '' }
    },
    methods: {
        handleSearch(e){
            this.$emit('handleSearch', e.target.value);
        },
        handleClearSearch(){
            this.$emit('handleSearch','');
        }
    }
}
</script>

<style></style>