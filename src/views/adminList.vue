<template>
    <div id="admin-list">
        <template>
            <el-table
                    :data="tableData"
                    style="width: 100%">
                <el-table-column
                        prop="user_name"
                        label="姓名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="create_time"
                        label="注册日期"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="city"
                        label="地址">
                </el-table-column>
                <el-table-column
                        prop="admin"
                        label="权限">
                </el-table-column>
            </el-table>
            <div class="block">
                <el-pagination
                        @current-change="handleCurrentChange"
                        :current-page.sync="currentPage1"
                        background
                        :page-size='20'
                        layout="total, prev, pager, next"
                        :total='num'>
                </el-pagination>
            </div>
        </template>
    </div>
</template>

<script>
    import {getAdminList,getAdminListAll} from '../api/getData'
    export default {
        data() {
            return {
                tableData: [],
                currentPage1: 1,
                num:0
            }
        },
        created() {
            this.getAdmin();
            this.getAdminAll();
        },
        methods: {
            async getAdmin(offset,num) {
                let {data} = await getAdminList(offset,num);
                this.tableData = data.data
            },
            async getAdminAll(){
              let {data} = await getAdminListAll();
              this.num = data.count
            },
            handleCurrentChange(val) {
                this.getAdmin(20*(val-1),20);
            }
        }
    }
</script>

<style lang="less">
    #admin-list{
        border: 1px solid #eef1f6;
        .has-gutter{
            color: black;
        }
        .el-table__header-wrapper {
            height: 50px;
            line-height: 25px;
            border-bottom: 1px solid #dfe6ec;
            tr{
                th{
                    background: #eef1f6;
                }
            }
        }
        .block{
            height: 50px;
            display: flex;
            padding-top: 20px;

        }
    }
</style>