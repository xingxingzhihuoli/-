<template>
    <div id="food-list">
        <template>
            <el-table
                    :data="tableData"
                    style="width: 100%">
                <el-table-column type="expand">
                    <template slot-scope="props">
                        <el-form label-position="left" inline class="demo-table-expand">
                            <el-form-item label="食品名称">
                                <span>{{ props.row.name }}</span>
                            </el-form-item>
                            <el-form-item label="餐馆名称">
                                <span>{{ props.row.shop }}</span>
                            </el-form-item>
                            <el-form-item label="食品 ID">
                                <span>{{ props.row.item_id }}</span>
                            </el-form-item>
                            <el-form-item label="餐馆 ID">
                                <span>{{ props.row.restaurant_id }}</span>
                            </el-form-item>
                            <el-form-item label="食品介绍">
                                <span>{{ props.row.description }}</span>
                            </el-form-item>
                            <el-form-item label="餐馆地址">
                                <span>{{ props.row.address }}</span>
                            </el-form-item>
                            <el-form-item label="食品评分">
                                <span>{{ props.row.rating }}</span>
                            </el-form-item>
                            <el-form-item label="食品分类">
                                <span>{{ props.row.desc }}</span>
                            </el-form-item>
                            <el-form-item label="月销量">
                                <span>{{ props.row.rating_count}}</span>
                            </el-form-item>
                        </el-form>
                    </template>
                </el-table-column>
                <el-table-column
                        label="食品名称"
                        prop="name"
                        width="360">
                </el-table-column>
                <el-table-column
                        label="食品介绍"
                        width="360"
                        prop="description">
                </el-table-column>
                <el-table-column
                        label="评分"
                        width="360"
                        prop="rating">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                                @click="dialogFormVisible = true">编辑
                        </el-button>
                        <el-dialog title="修改食品信息" :visible.sync="dialogFormVisible">
                            <el-form :model="form">
                                <el-form-item label="食品名称" :label-width="formLabelWidth">
                                    <el-input v-model="form.name" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="食品介绍" :label-width="formLabelWidth">
                                    <el-input v-model="form.name" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="食品分类" :label-width="formLabelWidth">
                                    <el-select v-model="form.region" placeholder="请选择">
                                        <!--<el-option label="区域一" value="shanghai"></el-option>-->
                                        <!--<el-option label="区域二" value="beijing"></el-option>-->
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="食品照片" :label-width="formLabelWidth">
                                    <el-upload
                                            class="avatar-uploader"
                                            action="https://jsonplaceholder.typicode.com/posts/"
                                            :show-file-list="false"
                                            :on-success="handleAvatarSuccess"
                                            :before-upload="beforeAvatarUpload">
                                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                    </el-upload>
                                </el-form-item>
                            </el-form>
                            <div slot="footer" class="dialog-footer">
                                <el-button @click="dialogFormVisible = false">取 消</el-button>
                                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                            </div>
                        </el-dialog>
                        <el-button
                                size="mini"
                                type="danger"
                                >删除
                        </el-button>
                    </template>
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
    import {getFood, getFoodList,getShoop,getFoodInfo} from '../api/getData'

    export default {
        data() {
            return {
                tableData: [],
                num: 0,
                currentPage1: 1,
                dialogTableVisible: false,
                dialogFormVisible: false,
                imageUrl: '',
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                formLabelWidth: '120px'
            }
        },
        created() {
            this.getFoodList();
            this.getFoodCount()
        },
        methods: {
            async getFoodList(num,number) {
                let {data} = await getFoodList(num,number);
                this.tableData = data;
                this.tableData.forEach(item=>{
                    getShoop(item.restaurant_id).then(res=>{
                        item.shop = res.data.name;
                        item.address = res.data.address;
                    });
                    // getFoodInfo(item.item_id).then(res=>{
                    //     // console.log(res);
                    //     // console.log(res.data);
                    //     // item.id = res.id;
                    //     // item.description = res.description
                    // })
                })
            },
            async getFoodCount(){
                let {data} = await getFood();
                this.num = data.count
            },
            handleCurrentChange(val) {
                this.getFoodList(20 * (val - 1), 20);
            },
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            }
        }
    }
</script>

<style lang="less">
    #food-list {
        border: 1px solid #eef1f6;
        .el-table__body-wrapper{
            .el-table__row{
                height: 30px;
            }
            tr{
                td{
                    .cell{
                        display: flex;
                        .el-button{
                            margin-right: 6px;
                        }
                    }
                }
            }
        }
        .block {
            height: 50px;
            display: flex;
            padding-top: 20px;
        }
        .el-table__header-wrapper {
            tr {
                th {
                    background: #eef1f6;
                    .cell {
                        color: black;
                    }
                }
            }
        }
        .demo-table-expand {
            font-size: 0;
        }
        .el-upload{
            width: 120px;
            height: 120px;
            .el-icon-plus{
                width: 100%;
                height: 100%;
                line-height: 120px;
            }
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
        .avatar-uploader .el-upload {
            border: 1px dashed #d9d9d9;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }
        .avatar-uploader .el-upload:hover {
            border-color: #409EFF;
        }
        .avatar-uploader-icon {
            font-size: 28px;
            color: #8c939d;
            width: 178px;
            height: 178px;
            line-height: 178px;
            text-align: center;
        }
        .avatar {
            width: 178px;
            height: 178px;
            display: block;
        }
    }
</style>