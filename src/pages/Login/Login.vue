<template>
    <div class="home">
        <div class="header">
            <el-image class="logo" :src="logo" />
            <el-image class="back" :src="back" />
        </div>

        <div class="content">
            <el-card class="login">
                <el-text class="page_indicator">Login</el-text>
                <div class="input_box">
                    <el-input class="input_fields" v-model="data.email" placeholder="Email" />
                    <div class="line" />
                </div>

                <div class="input_box">
                    <el-input class="input_fields" v-model="data.password" type="password" placeholder="Senha" />
                    <div class="line" />

                </div>
    
                <div>
                    <el-checkbox class="checkbox" v-model="data.keeploged" label="Manter-me conectado" size="small" />
                    <el-text class="forgotPass">Esqueci a senha</el-text>
                </div>

                <el-button class="enter" round>Entrar</el-button>

            </el-card>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './Login.scss';
</style>

<script lang="ts">
    import scriptModule from './Login.ts';

    export default {
        name: scriptModule.name,
        data: scriptModule.data,
    }
</script>