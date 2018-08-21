<template>
  <div class="ps-login">
    <div class="ps-login__title">登录</div>
    <div class="ps-login__content">
      <div class="ps-login__box">
        <el-form :model="loginForm" :rules="rules" ref="loginForm" class="demo-ruleForm">
          <el-form-item prop="phone">
            <el-input placeholder="请输入您的手机号" type="tel" prefix-icon="iconfont icon-tianxieshoujihao" v-model="loginForm.phone"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              placeholder="请输入密码" :type="inputType" prefix-icon="iconfont icon-mimasuo"
              @keyup.enter.native="signIn" v-model="loginForm.password" maxlength="16" onpaste="return false;">
            </el-input>
            <i class="iconfont icon-chakan" @click="changeInputType">查看</i>
          </el-form-item>
        </el-form>
      </div>
      <el-button type="primary" :loading="isLoading" @click="signIn">登录</el-button>
      <div class="ps-login__router">
        <router-link to="/register">
          <p>没有账号，请<span>注册</span></p>
        </router-link>
        <router-link to="/forget">
          <p>忘记密码?</p>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import {isPhone} from '../../utils/validate'
  export default {
    data() {
      const checkPhone = (rule, value, callback) => {
        if (!value.length) {
          callback(new Error('请输入手机号'));
        }else if (!isPhone(value)) {
          callback(new Error('请输入正确的手机号'));
        } else {
          callback();
        }
      };
      const checkPassword = (rule, value, callback) => {
        if (!value.length) {
          callback(new Error('请输入密码'));
        }else if (value.length < 6) {
          callback(new Error('密码不能小于6位'));
        } else {
          callback();
        }
      };

      return{
        loginForm:{
          phone: '',
          password: ''
        },
        rules: {
          phone: [
            { validator: checkPhone, trigger: 'blur' }
          ],
          password: [
            { validator: checkPassword, trigger: 'blur' }
          ]
        },
        isLoading: false,
        inputType: 'password'
      }
    },
    created() {

    },
    computed: {},
    methods: {
      signIn() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.isLoading = true;
            user.login(this.loginForm).then((data)=>{
              this.isLoading = false;
              this.$router.push('/');
            }).catch((data) => {
              this.isLoading = false;
            })
          } else {
            console.log('用户信息校验不通过');
          }
        })
      },
      changeInputType() {
        this.inputType = this.inputType === 'password' ? 'tel' : 'password';
      }

    },
    components: {},
    mounted() {

    }
  }
</script>

<style lang="scss" type="text/scss" scoped>

</style>
