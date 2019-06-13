<template>
    <el-container style="height: 100%">
        <el-aside width="200px" style="background-color: #48576a" id="home-list">
            <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    background-color="#48576a"
                    text-color="#bfcbd9"
                    active-text-color="#ffd04b">
                <!--@open="handleOpen"-->
                <!--@close="handleClose"-->
                <el-menu-item index="0" style="text-align: left" @click="$router.push('/homePage/home')" data-type="home">
                    <i class="el-icon-setting"></i>
                    <span slot="title">首页</span>
                </el-menu-item>
                <el-submenu index="1" style="text-align: left" class="el-mySubmenu">
                    <template slot="title">
                        <i class="el-icon-document"></i>
                        <span>数据管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1" @click="$router.push('/homePage/userList')">用户列表</el-menu-item>
                        <el-menu-item index="1-2" @click="$router.push('/homePage/merchantList')">商家列表</el-menu-item>
                        <el-menu-item index="1-3" @click="$router.push('/homePage/foodList')">食品列表</el-menu-item>
                        <el-menu-item index="1-4" @click="$router.push('/homePage/orderList')">订单列表</el-menu-item>
                        <el-menu-item index="1-5" @click="$router.push('/homePage/adminList')">管理员列表</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2" style="text-align: left">
                    <template slot="title" style="background-color: rgb(50, 64, 87)">
                        <i class="el-icon-plus"></i>
                        <span>添加数据</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1">添加商品</el-menu-item>
                        <el-menu-item index="1-2">添加商铺</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3" style="text-align: left">
                    <template slot="title" style="background-color: rgb(50, 64, 87)">
                        <i class="el-icon-star-off"></i>
                        <span>图表</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1">用户分布</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="4" style="text-align: left">
                    <template slot="title" style="background-color: rgb(50, 64, 87)">
                        <i class="el-icon-edit"></i>
                        <span>编辑</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1">文本编辑</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="5" style="text-align: left">
                    <template slot="title" style="background-color: rgb(50, 64, 87)">
                        <i class="el-icon-setting"></i>
                        <span>设置</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1">管理员设置</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="6" style="text-align: left">
                    <template slot="title" style="background-color: rgb(50, 64, 87)">
                        <i class="el-icon-warning"></i>
                        <span>说明</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1">说明</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header style="background-color: #EFF2F7">
                <Header>这是头</Header>
            </el-header>
            <el-main style="background-color: #fff">
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import Header from "@/components/header-top"

    export default {
        components: {
            Header
        },
        mounted() {

        }

    }

</script>

<style lang="less">
    #home-list {
        .active{
            color: blue;
        }
        .el-mySubmenu{
            .home-list-item{
                background-color: red;
            }
        }
        .el-menu-item-group__title {
            height: 0;
            display: none;
        }
        .el-header, .el-footer {
            background-color: #B3C0D1;
            color: #333;
            text-align: center;
            line-height: 60px;
        }
        .el-aside {
            background-color: rgb(50, 64, 87);
            color: #333;
            text-align: center;
            height: 100%;
        }
        .el-main {
            background-color: #E9EEF3;
            color: #333;
            text-align: center;
            line-height: 160px;
        }
    }

    body > .el-container {
        margin-bottom: 40px;
    }
</style>