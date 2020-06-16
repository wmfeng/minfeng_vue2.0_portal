<template>
  <div class="layout">
    <div class="layout_top">
      <logoBar></logoBar>
      <div style="width:100%;background-color:#1d976c;">
        <navBar class="layout_navBar" mode="horizontal"></navBar>
      </div>
    </div>
    <div class="layout_body">
      <tabsBar singleAlive></tabsBar>
    </div>
    <!-- <foot></foot>  -->
  </div>
</template>
<script>
import logoBar from "@/views/layout/logoBar";
import navBar from "@/views/layout/navBar";
import breadCrumb from "@/views/layout/breadCrumb";
import tabsBar from "@/views/layout/tabsBar";
import foot from "@/views/layout/foot"
export default {
  name: "layout",
  components: {
    logoBar,
    navBar,
    breadCrumb,
    tabsBar,
    foot
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/style/variable.scss";
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-width: 1000px;
  .layout_top {
    background-color: #7ecd62;
  }
  .layout_navBar {
    height: $navHeight;
    border-bottom: none;
    width: 62%;
    margin: 0 auto;
  }
  .layout_body {
    flex: 1;
    height: 0;
    background-color: #eef6f4;
  }
}
</style>
<style lang="scss">
@import "../../assets/style/style.scss";
</style>
