<template lang="html">
  <div class="register-wrapper">
    <div class="ps-register">
      <div class="ps-register__title">注册</div>
      <div class="ps-register__content">
        <div class="progress">
          <div class="progress__box" v-for="(item, index) in stepArr">
            <span class="progress__title" :class="{active: (stepIndex === (index + 1))}">{{ item.index }}</span>
            <span class="progress__content" :class="{active: (stepIndex === (index + 1))}">{{ item.message }}</span>
          </div>
        </div>

        <div class="ps-container">
          <div class="ps-wrapper" :style="{transform: 'translateX(-'+ stepStatus +'px)'}">

            <div class="ps-slide">
              <el-form :model="verifyForm" :rules="verifyRules" ref="verifyForm" class="verify-ruleForm">
                <el-form-item prop="phone">
                  <el-input placeholder="请输入您的手机号" prefix-icon="iconfont icon-tianxieshoujihao" v-model="verifyForm.phone"></el-input>
                </el-form-item>
                <el-form-item prop="code">
                  <div class="row-between-center">
                    <el-input
                    placeholder="输入验证码" prefix-icon="iconfont icon-shuruyanzhengma"
                    @keyup.enter.native="verify" v-model="verifyForm.code">
                    </el-input>
                    <countdown-button :tel="verifyForm.phone"></countdown-button>
                  </div>
                </el-form-item>
              </el-form>
              <el-button type="primary" :loading="verifyLoading" @click="verify">下一步</el-button>
              <p class="tip">已有账号，<router-link to="/login">登录</router-link></p>
            </div>
            <div class="ps-slide">
              <el-form :model="userForm" :rules="userRules" ref="userForm" label-width="44px" label-position="left" class="user-ruleForm">
                <el-form-item prop="nickname" label="姓名" label-width="54px">
                  <el-input v-model="userForm.nickname"></el-input>
                </el-form-item>
                <el-form-item prop="city" label="地区" label-width="54px">
                  <area-cascader type="text" v-model="selectedCity"></area-cascader>
                </el-form-item>
                <el-form-item prop="password" label="密码" label-width="54px">
                  <el-input @keyup.enter.native="register" type="password" onpaste="return false;" v-model="userForm.password" maxlength="16">
                  </el-input>
                </el-form-item>
              </el-form>
              <el-button type="primary" :loading="registerLoading" @click="register">完成注册</el-button>
              <p class="tip">点击注册表示您已阅读并同意<router-link to="/agreement" target="_blank">服务条款</router-link></p>
            </div>

          </div>
        </div>
      </div>
    </div>

    <recommond-dialog v-if="isShowRecommondDialog" @hideRecommondDialog="hideRecommondDialog" append-to-body></recommond-dialog>

  </div>
</template>

<script>
import { isPhone } from '@/utils/validate'
import { Message } from 'element-ui'
import md5 from 'js-md5'
import countdownButton from 'components/Common/countdownbutton'
import AreaCascader from '@/utils/component/area-cascader.vue'
import recommondDialog from 'components/Common/recommondDialog'
import { checkPhoneAndCode, registers, getProfile } from 'api/api'
import { USER_INFO } from '@/store/mutation-types'
const assignIn = _.assignIn
const refer = document.referrer // 来源

const websiteKey = window.location.href.split('?')[1] ? window.location.href.split('?')[1].split('=')[0] : '';
const websiteValue = window.location.href.split('?')[1] ? window.location.href.split('?')[1].split('=')[1] : '';
const userInfo = JSON.parse(localStorage.getItem('USER_INFO'));

export default {
  components: {
    'countdown-button': countdownButton,
    'area-cascader':AreaCascader,
    'recommond-dialog': recommondDialog
  },
  created() {
    if (websiteKey == 'key' && userInfo && userInfo.companyId) {
      this.$router.push({path: `/company/${userInfo.companyId}/purchase`, query: {key: `${websiteValue}`}});
    }
  },
  data() {
    const checkPhone = (rule, value, callback) => {
      if (!isPhone(value)) {
        callback(new Error('请输入正确的手机号'));
      } else {
        callback();
      }
    };
    const checkCode = (rule, value, callback) => {
      if (!value.length) {
        callback(new Error('请输入验证码'));
      } else if (value.length < 4) {
        callback(new Error('验证码错误'));
      } else {
        callback();
      }
    };
    const checkPass = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能小于6位'));
      } else {
        callback()
      }
    };
    const checkName = (rule, value, callback) => {
      if (!value) {
        callback(new Error('名称不能为空'));
      } else {
        callback()
      }
    }

    return {
      verifyForm: {
        phone: '',
        code: ''
      },
      userForm: {
        nickname: '',
        city: '北京市 朝阳区',
        password: ''
      },
      verifyRules: {
        phone: [
          { validator: checkPhone, trigger: 'blur' }
        ],
        code: [
          { validator: checkCode, trigger: 'change' }
        ]
      },
      userRules: {
        name: [
          { validator: checkName, trigger: 'blur' }
        ],
        password: [
          { validator: checkPass, trigger: 'blur' }
        ]
      },
      canGetCode: false,
      selectedCity: ['北京市', '朝阳区'],
      stepArr: [{index: 1, message: '手机号码注册'}, {index: 2, message: '完善个人信息'}],
      stepIndex: 1,
      stepStatus: 0,
      stepDistance: 335,
      verifyLoading: false,
      registerLoading: false,

      isShowRecommondDialog: false,
    }
  },
  methods: {
    verify() {
      this.$refs.verifyForm.validate(valid => {
        if (valid) {
          this.verifyLoading = true;
          checkPhoneAndCode(this.verifyForm).then((data) => {
            if (data.result === 1007) {
              Message.error('用户已注册');
            } else {
              this.stepNext();
            }
            this.verifyLoading = false;
          }).catch(() => {
            this.verifyLoading = false;
          });

        } else {
          console.log('校验信息有误');
        }
      })
    },
    register() {
      this.$refs.userForm.validate(valid => {
        if (valid) {
          this.registerLoading = true;
          var userForm = assignIn(this.userForm, this.verifyForm);
          var params = _.clone(userForm);
          params.password = md5(this.userForm.password);
          // userForm = JSON.parse(JSON.stringify(userForm));
          registers(params).then((data) => {
            Message.success('注册成功');
            this.registerLoading = false;
            getProfile().then((res) => {
              this.$store.commit(USER_INFO, res.result);
              this.showRecommondDialog();
            })
          }).catch(() => {
            this.registerLoading = false;
          });
        } else {

        }
      })
    },
    showRecommondDialog() {
      this.isShowRecommondDialog = true;
    },
    hideRecommondDialog() {
      this.isShowRecommondDialog = false;
    },
    stepNext() {
      this.stepStatus += this.stepDistance;
      this.stepIndex++;
    }
  }
}
</script>

<style lang="scss">
@import 'src/assets/sass/var.scss';
@import 'src/assets/sass/mixins/mixins.scss';

@include b(register) {
  width: 371px;
  position: fixed;
  left: 50%;
  bottom: 79px;
  transform: translate(-36px);
  // overflow-x: hidden;
  // 公共覆盖
  input {
    @include placeholder() {
      color: #b3b3b3;
    }
  }
  @include e(title) {
    width: 100%;
    height: 48px;
    background: rgba(255, 255, 255, .4);
    color: #333;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @include e(content) {
    padding: 36px 36px 25px;
    background: rgba(255,255,255,1);
  }
  .el-button {
    width: 100%;
  }
}

.ps-container {
  width: 100%;
  overflow-x: hidden;
  .ps-wrapper {
    width: 100%;
    margin: 25px 0 0;
    transition: all .2s ease-out;
    display: flex;
    .ps-slide {
      flex: 0 0 auto;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      &:not(:last-child) {
        margin-right: 36px;
      }
      .tip {
        font-size: 14px;
        color: #333;
        margin: 15px 0 0;
        a {
          color: $brown;
        }
      }
    }
  }
}

.progress {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 11px;
  .progress__box {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    &:not(:last-child) {
      margin: 0 54px 0 0;
      &:after {
        content: '';
        width: 19px;
        height: 1px;
        background: #E2E2E5;
        position: absolute;
        right: -36px;
        bottom: 9px;
      }
    }
    .progress__title {
      width: 33px;
      height: 33px;
      font-size: 16px;
      border-radius: 50%;
      color: #fff;
      font-weight: 600;
      background: #C6C6CC;
      margin: 0 0 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      &.active {
        background: $brown;
        color: #fff;
      }
    }
    .progress__content {
      color: #7D7D8B;
      line-height: 19px;
      &.active {
        color: $brown;
      }
    }
  }
}

.el-form {
  width: 100%;
}

// 验证手机号 覆盖
.ps-slide {
  &:nth-child(1) {
    .el-form {
      margin-bottom: 8px;
      .el-form-item {
        margin-bottom: 28px;
        .el-input--prefix {
          .el-input__inner {
            padding-left: 37px;
            height: 44px;
            background: #F5F5FA;
            color: #333;
            font-weight: 700;
            border-color: #E1E1E6;
            &:hover {
              border-color: $brown;
            }
            &:focus {
              border-color: $brown;
            }
          }
          .el-input__prefix {
            left: 12px;
            .el-input__icon {
              line-height: 45px;
              color: #c4c4c4;
              font-size: 18px;
            }
          }
        }
      }
    }
  }
  &:nth-child(2) {
    // 完善信息 覆盖
    .el-form-item__label {
      color: #000;
    }
    .el-form-item__content {
      .el-input__inner {
        padding-left: 15px;
        height: 40px;
        background: #f5f5f5;
        color: #333;
        font-weight: 700;
        border-color: #e1e1e6;
        &:hover {
          border-color: $brown;
        }
        &:focus {
          border-color: $brown;
        }
      }
    }
    .el-cascader {
      width: 100%;
      .el-cascader__label {
        color: #333;
        line-height: 40px;
        font-weight: 700;
        span {
          color: #333;
        }
      }
    }
  }
}

.el-cascader-menu__item {
  &.is-active {
    color: #c57c43;
    background: transparent;
    &:hover {
      background: transparent !important;
    }
  }
}


@media screen and (max-width: 768px) {
  .register-wrapper {
    @include b(register) {
      left: 50%;
      top: 100px;
      transform: translate(-50%, 0%);
    }
    .el-dialog__footer {
      .el-button {
        width: 90px;
      }
    }
  }
  .ps-container {
    .ps-wrapper {
      margin: 10px 0 0;
    }
  }
  .ps-slide {
    &:nth-child(1) {
      .el-form {
        margin-bottom: 0;
        .el-form-item {
          margin-bottom: 10px;
        }
      }
    }
  }
  .ps-register {
    width: 100%;
  }
  .ps-register__content {
    padding: 20px 10px;
  }
}
.row-between-center {
  display: flex;
  justify-content: space-between;
}

</style>
