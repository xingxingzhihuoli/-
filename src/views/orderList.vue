<template>
    <div id="order-list">
        <template>
            <el-table
                    :data="tableData"
                    style="width: 100%">
                <el-table-column type="expand">
                    <template slot-scope="props">
                        <el-form label-position="left" inline class="demo-table-expand">
                            <el-form-item label="用户名">
                                <span></span>
                            </el-form-item>
                            <el-form-item label="店铺名称">
                                <span>{{props.row.restaurant_name}}</span>
                            </el-form-item>
                            <el-form-item label="收获地址">
                                <span>{{props.row.addressDetail}}</span>
                            </el-form-item>
                            <el-form-item label="店铺 ID">
                                <span>{{props.row.restaurant_id}}</span>
                            </el-form-item>
                            <el-form-item label="店铺地址">
                                <span>{{props.row.address}}</span>
                            </el-form-item>
                        </el-form>
                    </template>
                </el-table-column>
                <el-table-column
                        label="订单 ID"
                        prop="id">
                </el-table-column>
                <el-table-column
                        label="总价格"
                        prop="total_amount">
                </el-table-column>
                <el-table-column
                        label="订单状态"
                        prop="status_bar.title">
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
    import {getOrderList, getOrderListAll, getOrderListD, getOrderListA} from '../api/getData'

    export default {
        data() {
            return {
                tableData: [],
                currentPage1: 1,
                num: 0,
            }
        },
        created() {
            this.getOrder();
            this.getOrderAll();
        },
        methods: {
            async getOrder(offset, num) {
                let {data} = await getOrderList(offset, num);
                this.tableData = data;
                this.tableData.forEach(item=>{
                    getOrderListD(item.user_id, item.id).then(res=>{
                        let {addressDetail} = res.data;
                        item.addressDetail=addressDetail
                    });
                    getOrderListA(item.restaurant_id).then(res=>{
                        let {address} = res.data;
                        item.address = address;
                    })
                })
            },
            async getOrderAll() {
                let {data} = await getOrderListAll();
                this.num = data.count
            },
            // async expandSelec(row) {
            //     if (!row.user_id && !row.id) {
            //         return;
            //     }
            //     let {data} = await getOrderListD(row.user_id, row.id);
            //     let a =await getOrderListA(row.restaurant_id);
            //     row.address = a.data.address;
            //     row.addressDetail = data.addressDetail
            // },
            handleCurrentChange(val) {
                this.getOrder(20 * (val - 1), 20);
            }
        }
    }
</script>

<style lang="less">
    #order-list {
        border: 1px solid #eef1f6;

        .block {
            height: 50px;
            display: flex;
            padding-top: 20px;
        }
        .el-table__header-wrapper {
            height: 50px;
            line-height: 25px;
            border-bottom: 1px solid #dfe6ec;
            tr {
                th {
                    background: #eef1f6;
                    .cell {
                        color: black;
                    }
                }
            }
        }
        .el-table__expanded-cell {
            padding: 10px;
            .el-form {
                display: flex;
                flex-wrap: wrap;
                .el-form-item {
                    width: 50%;
                    display: flex;
                }
            }
        }
        .demo-table-expand {
            font-size: 0;
        }
        .demo-table-expand label {
            width: 90px;
            color: #99a9bf;
        }
        .demo-table-expand .el-form-item {
            margin-right: 0;
            margin-bottom: 0;
            width: 50%;
        }
    }
</style>