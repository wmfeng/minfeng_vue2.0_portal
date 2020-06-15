<template>
  <div class="logoBar">
    <div class="logo">
      <div class="login">登录</div>
    </div>
    <!-- <headDrop class="drop"></headDrop> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import headDrop from "./headDrop";

export default {
  name: "logoBar",
  components: { headDrop }
};
</script>
<style lang="scss" scoped>
@import "../../assets/style/variable.scss";
.logoBar {
  height: $logoHeight;
  // background-color: $color;
  .logo {
    float: right;
    padding-right: 40vh;
    font-size: 16px;
    font-weight: bold;
    .login {
      width: 80px;
      height: 30px;
      color: #15986c;
      text-align: center;
      background-color: #fff;
      line-height: 30px;
      border-radius: 35px;
      margin-top: 30px;
      cursor: pointer;
    }
  }
}
</style>
