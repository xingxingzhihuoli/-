<template>
    <div class="header">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item v-for="item in levelList">{{}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                levelList: []
            }
        },
        watch:{
            route() {
                this.getBreadcrumb()
            }
        },
        created(){
            this.getBreadcrumb()
        },
        methods:{
            getBreadcrumb() {

            }
        }

    }
</script>

<style scoped lang="less">
    .header{
        background: #eff2f7;
        height: 60px;
        padding-left: 20px;
        line-height: 60px;
        .el-breadcrumb{
            height: 60px;
            line-height: 60px;
            .el-breadcrumb__inner{
                cursor: pointer;
            }
        }
    }
</style>