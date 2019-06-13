<template>
    <div class="login">
        <div class="form-container">
            <div class="login-title">
                <p class="el-title">后台管理系统</p>
            </div>
            <el-form action="">
                <el-form-item>
                    <el-input placeholder="用户名" v-model="logindata.username"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="密码" v-model="logindata.password" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button placeholder="" class="submit-btn" @click="submitForm">登陆</el-button>
                </el-form-item>
            </el-form>
            <p>温馨提示：</p>
            <p>用户名：admin 密码：123456</p>
            <p>用户名：weixiao 密码：123456weixiao</p>
        </div>
    </div>
</template>

<script>
    import {mapActions,mapState} from 'vuex'
    export default {
        data() {
            return {
                logindata: {
                    username: '',
                    password: ''
                },

            }
        },
        created(){
          this.getData();
        },
        computed:{
            ...mapState(['data'])
        },
        methods: {
            ...mapActions(['getData']),
            async submitForm() {
                for (let i=0;i<this.data.length;i++){
                    const {username, password} = this.data[i];
                    if (this.logindata.username === username && this.logindata.password === password) {
                        this.$router.push('/homePage')
                    }else {
                        this.$router.push('/')
                    }
                }
            }
        }
    }
</script>
<style scoped lang="less">
    .login {
        width: 100%;
        height: 100%;
        background-color: #324057;
        .login-title {
            width: 100%;
            position: absolute;
            top: -100px;
            left: 0;
            padding: 10px;
            .el-title {
                color: #fff;
                font-size: 30px;
                text-align: center;
            }
        }
        .form-container {
            width: 370px;
            height: 260px;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -105px;
            margin-left: -160px;
            background-color: #fff;
            padding: 25px;
            border-radius: 5px;
            p {
                font-size: 12px;
                width: 100%;
                color: red;
                text-align: center;
            }
            .submit-btn {
                width: 100%;
                background-color: #20a0ff;
                color: #fff;
            }
        }
    }
</style>