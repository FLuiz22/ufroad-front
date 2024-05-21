<template>
    <div class="home">
        <div class="header">
            <el-image class="logo" :src="logo" />
            <el-image class="back" :src="back" />
        </div>

        <div class="content">
            <el-card class="login">
                <template #header>
                    <div class="page_indicator">  
                        <el-button class="page_sel page_log">
                            <el-text class="btn-text">Login</el-text>
                        </el-button>
                        <el-button class="page_sel page_cad" @click="regPage()">
                            <el-text class="btn-text">Cadastrar</el-text>
                        </el-button>
                    </div>
                </template>
                <div class="input_box">
                    <el-input class="input_fields" v-model="data.email" placeholder="Email">
                        <template #suffix>
                            <el-icon class="input_icon">
                                <Message />
                            </el-icon>
                        </template>
                    </el-input>
                    <div class="line" />
                </div>

                <div class="input_box">
                    <el-input class="input_fields" v-model="data.password" type="password" placeholder="Senha">
                        <template #suffix>
                            <el-icon class="input_icon">
                                <Lock />
                            </el-icon>
                        </template>
                    </el-input>
                    <div class="line" />

                </div>
    
                <div class="util">
                    <el-checkbox class="checkbox" v-model="data.keeploged" size="small">
                        <span slot="label" class="checkbox-label">Manter-me conectado</span>
                    </el-checkbox>
                    <el-text class="forgotPass">Esqueci a senha</el-text>
                </div>

                <div class="btn">
                    <el-button class="btn-enter" round>
                        <el-text class="btn-text">Entrar</el-text>
                    </el-button>
                </div>
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
        methods: scriptModule.methods
    }
</script>