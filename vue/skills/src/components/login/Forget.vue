<template lang="html">
  <div class="ps-forget">
    <div class="ps-forget__title">重设密码</div>
    <div class="ps-forget__content">
      <div class="ps-forget__outer" :style="{transform: 'translateX(-'+ blockStatus +'px)'}">
        <div class="ps-forget__inner">
          <div class="progress">
            <div class="progress__box" v-for="(item, index) in stepArr">
              <span class="progress__title" :class="{active: (stepIndex === (index + 1))}">{{ item.index }}</span>
              <span class="progress__content" :class="{active: (stepIndex === (index + 1))}">{{ item.message }}</span>
            </div>
          </div>
          <div class="progress-wrapper__outer">
            <div class="progress-wrapper__inner" :style="{transform: 'translateX(-'+ stepStatus +'px)'}">
              <!-- 验证手机号 -->
              <div class="ps-verify ps-step">
                <div class="ps-forget__box">
                  <el-form :model="verifyForm" :rules="verifyRules" ref="verifyForm" class="forget-ruleForm">
                    <el-form-item prop="phone">
                      <el-input placeholder="请输入您的手机号" type="tel" prefix-icon="iconfont icon-tianxieshoujihao" v-model="verifyForm.phone"></el-input>
                    </el-form-item>
                    <el-form-item prop="code">
                      <div class="row-between-center">
                        <el-input
                        placeholder="输入验证码" type="tel" prefix-icon="iconfont icon-shuruyanzhengma"
                        @keyup.enter.native="verify" v-model="verifyForm.code">
                        </el-input>
                        <countdown-button :tel="verifyForm.phone"></countdown-button>
                      </div>
                    </el-form-item>
                  </el-form>
                </div>
                <el-button type="primary" :loading="verifyLoading" @click="verify">下一步</el-button>
              </div>

              <!-- 重置密码 -->
              <div class="ps-reset ps-step">
                <div class="ps-forget__box">
                  <el-form :model="resetForm" :rules="resetRules" ref="resetForm" label-width="72px" label-position="left" class="forget-ruleForm">
                    <el-form-item prop="newPwd" label="新密码">
                      <el-input v-model="resetForm.newPwd" type="password" onpaste="return false;" maxlength="16"></el-input>
                    </el-form-item>
                    <el-form-item prop="confirmPwd" label="再次输入">
                      <el-input @keyup.enter.native="resetPass" v-model="resetForm.confirmPwd" type="password"  onpaste="return false;" maxlength="16">
                      </el-input>
                    </el-form-item>
                  </el-form>
                </div>
                <el-button type="primary" :loading="resetLoading" @click="resetPass">下一步</el-button>
              </div>

            </div>
          </div>
        </div>

        <div class="ps-forget__inner">
          <!-- 重置成功 -->
          <div class="ps-resetsuccess">
            <i class="iconfont icon-gongxinichenggonggoumai"></i>
            <p class="success-word">您的新密码已经设置完成！</p>
            <router-link to='/login'>
              <el-button type="primary">去登录</el-button>
            </router-link>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import countdownButton from '../Common/countdownbutton'
import { Message } from 'element-ui'
import { isPhone } from '@/utils/validate'
import md5 from 'js-md5'
import { checkPhoneAndCode, resetPwd } from 'api/api'
import _ from 'lodash'
var assignIn = _.assignIn

export default {
  components: {
    'countdown-button': countdownButton
  },
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
    const checkCode = (rule, value, callback) => {
      if (!value.length) {
        callback(new Error('请输入验证码'));
      }else if (value.length < 4) {
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
    const checkPassAgain = (rule, value, callback) => {
      if (value !== this.resetForm.newPwd) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };

    return {
      verifyForm: {
        phone: '',
        code: ''
      },
      resetForm: {
        newPwd: '',
        confirmPwd: ''
      },
      verifyRules: {
        phone: [
          { validator: checkPhone, trigger: 'blur' }
        ],
        code: [
          { validator: checkCode, trigger: 'change' }
        ]
      },
      resetRules: {
        newPwd: [
          { validator: checkPass, trigger: 'blur' }
        ],
        confirmPwd: [
          { validator: checkPassAgain, trigger: 'blur' }
        ]
      },
      canGetCode: false,
      stepArr: [{index: 1, message: '手机验证'}, {index: 2, message: '重设密码'}, {index: 3, message: '完成修改'}],
      stepIndex: 1,
      stepStatus: 0,
      stepDistance: 335,
      blockStatus: 0,
      blockDistance: 371,
      verifyLoading: false,
      resetLoading: false
    }
  },
  methods: {
    verify() {
      this.$refs.verifyForm.validate(valid => {
        if (valid) {
          this.verifyLoading = true;
          checkPhoneAndCode(this.verifyForm).then((data) => {
            if (data.result === 1006) {
              Message.error('用户未注册');
            } else {
              this.stepNext();
            }
            this.verifyLoading = false;
          }).catch((data) => {
            this.verifyLoading = false;
          });

        } else {
          console.log('校验信息有误');
        }
      })
    },
    resetPass() {
      this.$refs.resetForm.validate(valid => {
        if (valid) {
          this.resetLoading = true;
          var resetForm = assignIn(this.resetForm, this.verifyForm);
          var params  = _.clone(resetForm);
          params.newPwd = md5(this.resetForm.newPwd);
          params.confirmPwd = md5(this.resetForm.confirmPwd);
          resetPwd(params).then((data) => {
            console.log('true');
            this.blockNext();
            this.resetLoading = false;
          }).catch(() => {
            console.log('false');
            this.resetLoading = false;
          })
        } else {

        }
      })
    },
    stepNext() {
      this.stepStatus += this.stepDistance;
      this.stepIndex++;
    },
    blockNext() {
      this.blockStatus += this.blockDistance;
    }
  },
}
</script>

<style lang="scss">
@import 'src/assets/sass/var.scss';
@import 'src/assets/sass/mixins/mixins.scss';

@include b(forget) {
  width: 371px;
  position: fixed;
  left: 50%;
  bottom: 79px;
  transform: translate(-36px);
  overflow-x: hidden;
  // 公共覆盖
  input {
    @include placeholder() {
      color: #b3b3b3;
    }
  }
}
@media screen and (max-width: 768px) {
  @include b(forget) {
    left: 50%;
    top: 100px;
    transform: translate(-50%, 0%);
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
  background: #fff;
}
@include e(outer) {
  display: flex;
  transition: all .2s ease-out;
}
@include e(inner) {
  width: 100%;
  padding: 35px 36px 42px;
  background: rgba(255,255,255,.1);
  overflow-x: hidden;
  flex: 0 0 auto;
  &:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}
.progress-wrapper__outer {
  width: 100%;
  margin: 31px 0 0;
  overflow-x: hidden;
}
.progress-wrapper__inner {
  width: 100%;
  transition: all .2s ease-out;
  display: flex;
}
@include b(step) {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:not(:last-child) {
    margin-right: 36px;
  }
  &:nth-child(1) {
    .el-button {
      width: 100%;
    }
    .el-form-item {
      &:last-child {
        margin: 0;
      }
    }
    // 覆盖饿了么
    .el-input--prefix {
      .el-input__inner {
        padding-left: 37px;
        height: 44px;
        background: #f5f5fa;
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
  &:nth-child(2) {
    .el-button {
      width: 100%;
    }
    .el-form-item {
      &:last-child {
        margin: 0;
      }
    }
    // 重设密码 覆盖
    .el-form-item__label {
      color: #000;
    }
    .el-form-item__content {
      .el-input__inner {
        padding-left: 15px;
        height: 40px;
        background: #f5f5fa;
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
        background: #e2e2e5;
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
      color: rgba(255,255,255,1);
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

.ps-resetsuccess {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  a {
    width: 100%;
    .el-button {
      width: 100%;
    }
  }
  .success-word {
    font-size: 18px;
    color: #000;
    margin: 25px 0 45px;
  }
}


.ps-forget__box {
  width: 100%;
  margin: 0 0 36px;
}


.icon-gongxinichenggonggoumai {
  font-size: 68px;
  color: $brown;
}
.row-between-center {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
