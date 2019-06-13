<template>
    <div id="user-list">
        <template>
            <el-table
                    :data="tableData"
                    style="width: 100%">
                <el-table-column
                        label="Id"
                        type="index"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="registe_time"
                        label="日期"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="username"
                        label="姓名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="city"
                        label="地址">
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
    import {getUserList,getUserListAll} from '../api/getData'
    export default {
        data() {
            return {
                tableData: [],
                currentPage1: 1,
                num:0
            }
        },
        created() {
            this.getUserListDate();
            this.getUserListDateAll();
        },
        methods: {
            async getUserListDate(offset,num) {
                let a = await getUserList(offset,num);
                this.tableData = a.data
            },
            async getUserListDateAll(){
              let {data} = await getUserListAll();
                this.num = data.count
            },
            handleCurrentChange(val) {
                this.getUserListDate(20*(val-1),20);
            },
        }
    }
</script>

<style lang="less">
    #user-list{
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