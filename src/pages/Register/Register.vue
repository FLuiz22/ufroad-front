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
                        <el-button class="page_sel page_log" @click="logPage()">
                            <el-text class="btn-text">Login</el-text>
                        </el-button>
                        <el-button class="page_sel page_cad">
                            <el-text class="btn-text">Cadastrar</el-text>
                        </el-button>
                    </div>
                </template>

                <div class="input_box">
                    <el-input class="input_fields" v-model="data.name" placeholder="Nome">
                        <template #suffix>
                            <el-icon class="input_icon">
                                <User />
                            </el-icon>
                        </template>
                    </el-input>
                    <div class="line" />
                </div>

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
                
                <div class="input_box">
                    <el-select class="select_field" v-model="data.course" placeholder="Curso" />
                    <div class="line" />
                </div>

                <div class="btn">
                    <el-button class="btn-enter" round>
                        <el-text class="btn-text">Cadastrar</el-text>
                    </el-button>
                </div>
            </el-card>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './Register.scss';
</style>

<script lang="ts">
    import scriptModule from './Register.ts';

    export default {
        name: scriptModule.name,
        data: scriptModule.data,
        methods: scriptModule.methods
    }
</script>