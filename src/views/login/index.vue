<template>
  <div class="login-container">
    <el-card class="login-box">
      <img src="../../assets/images/logo_index.png" alt />
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        class="demo-ruleForm"
        :status-icon="true"
      >
        <el-form-item prop="mobile">
          <el-input v-model="ruleForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="ruleForm.code" placeholder="请输入验证码" style="width:240px"></el-input>
          <el-button style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox :checked="true" label="我已阅读并同意用户协议和隐私条款" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item>
          <el-button style="width:100%" type="primary" @click="submitForm('ruleForm')">立即登陆</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  data () {
    // 自定义校验函数
    const checkMobile = (rule, value, callback) => {
      if (/^1[3-9]\d{9}$/.test(value)) {
        callback()
      } else {
        callback(new Error('请输入正确格式手机号'))
      }
    }
    return {
      ruleForm: {
        mobile: '13785616506',
        code: '246810',
        type: []
      },
      rules: {
        mobile: [
          { required: true, message: '请输入电话号码', trigger: 'blur' },
          { validator: checkMobile, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '请输入六位验证码', trigger: 'blur' }
        ],
        type: [
          {
            type: 'array',
            required: true,
            message: '请阅读并同意用户协议和隐私条款',
            trigger: 'change'
          }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$http
            .post(
              'http://ttapi.research.itcast.cn/mp/v1_0/authorizations',
              this.ruleForm
            )
            .then(res => {
              if (res.status === 201) {
                // 存储json对象数据
                window.sessionStorage.setItem('bhhl', JSON.stringify(res.data.data))
                this.$router.push('/')
              } else if (res.status === 400) {
                this.$message.error('手机号或验证码输入有误，请重新输入')
              } else if (res.status === 403) {
                this.$message.error('用户非实名认证用户，无权限登录')
              } else if (res.status === 507) {
                this.$message.error('服务器数据库异常')
              }
            }).catch(() => {
              this.$message.error('手机号或验证码输入有误，请重新输入')
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="less">
.login-container {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: url("../../assets/images/login_bg.jpg") no-repeat center / cover;
  .login-box {
    width: 400px;
    height: 360px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    img {
      display: block;
      padding-left: 50px;
      padding-bottom: 20px;
    }
  }
}
</style>
