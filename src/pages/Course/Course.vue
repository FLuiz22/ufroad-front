<template>
    <div class="home">
        <div class="header">
            <div class="lhead">
                <el-image class="logo" :src="logo" />
                <p class="htex">UF Road</p>
            </div>

            <div class="rhead">
                <el-image class="back" :src="back" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import './Course.scss';
</style>

<script lang="ts">
    import scriptModule from './Course.ts';

    export default {
        name: scriptModule.name,
        mounted: scriptModule.mounted,
        data: scriptModule.data,
        methods: scriptModule.methods
    }
</script>