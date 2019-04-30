<template>
  <div>
    <p style="margin: 0; height: 20px; color: red;"></p>
    <LtForm ref="formInline" :show-message="false" :model="formInline" :rules="ruleInline">
      <LtFormItem prop="user">
        <LtInput type="text" v-model="formInline.user" placeholder="Username"></LtInput>
      </LtFormItem>
      <LtFormItem prop="password">
        <LtInput
          :type="passwordShow ? 'text' : 'password' "
          v-model="formInline.password"
          placeholder="Password"
        ></LtInput>
      </LtFormItem>
      <LtFormItem>
        <LtButton type="primary" @click="handleSubmit('formInline')">Signin</LtButton>
      </LtFormItem>
      <button @click="passwordShow = !passwordShow">显示 密码</button>
    </LtForm>

    <lt-poptip trigger="hover" title="Title" content="content">
      <lt-button>hover 激活</lt-button>
    </lt-poptip>
    <lt-poptip trigger="click" title="Title" content="content">
      <lt-button>click 激活</lt-button>
    </lt-poptip>
    <lt-poptip trigger="focus" title="Title" content="content">
      <lt-button>focus 激活</lt-button>
    </lt-poptip>
    <lt-poptip trigger="focus" title="Title" content="content">
      <input placeholder="输入框的 focus">
    </lt-poptip>
  </div>
</template>

<script>
import { LtForm } from "lantern-ui";
export default {
  components: {
    LtForm
  },
  data() {
    return {
      formInline: {
        user: "",
        password: ""
      },
      passwordShow: "",
      msg: "index page",
      ruleInline: [{}, {}]
    };
  },
  methods: {
    handleSubmit: function(params) {
      console.log("表单提交");
    }
  }
};
</script>

<style lang="less" scoped>
@import "form";
</style>
