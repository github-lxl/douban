<template>
  <div id="zhuce">
    <el-row>
      <el-col :span="24">
        <h1 class="weclome">欢迎加入豆瓣</h1>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="22" :offset="1">
        <el-input v-model="uId" placeholder="手机号/邮箱"></el-input>
        <el-input v-model="uPwd" placeholder="密码/组少6位" type="password"></el-input>
        <el-input v-model="uName" placeholder="昵称"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="22" :offset="1">
        <div class="l-btn">
          <el-button type="success" class="btn" @click="fun">下一步</el-button>
        </div>
        <p class="cente">
          点击「下一步」代表你已阅读并同意
          <a href>用户使用协议</a>
        </p>
        <p class="cente don">下载豆瓣App</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uId: "",
      uPwd: "",
      uName: ""
    };
  },
  methods: {
    fun() {
      if (this.uId.length <= 0) {
        alert("请填写手机号和邮箱!");
      } else if (this.uPwd.length < 6 || this.uPwd.length > 18) {
        alert("请填写符合规范的密码!");
      } else if (this.uName.length > 2) {
        alert("请填写昵称!(大于两位字符)");
      }
    }
  }
};
</script>

<style scoped>
a {
  color: rebeccapurple;
}
.btn {
  width: 100%;
}
.weclome {
  text-align: center;
  color: #42bd56;
  font-size: 40px;
  margin: 10% 0 9%;
  font-weight: 300;
}
.cente {
  margin: 40px 0 0 0;
  text-align: center;
  font-size: 14px;
}

.don {
  font-size: 14px;
  color: #42bd56;
  margin: 30px 0 0 0;
}
.l-btn {
  margin: 20px 0 0 0;
}
</style>
