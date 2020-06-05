<template>
  <el-menu
    :class="['navBar',{'oneLevel':navOpen,'hori':mode!='vertical'}]"
    unique-opened
    router
    :mode="mode"
    :collapse="mode=='vertical'"
    :default-active="$route.path"
    background-color="#313437"
    text-color="#fff"
  >
    <el-menu-item index class="navBar_title" @click="collapse" v-if="mode=='vertical'">
      <i class="el-icon-menu menu_icon"></i>
      <span>功能菜单</span>
    </el-menu-item>
    
    <navbar-item v-for="item in navBar" :item="item" v-if="!item.hidden" :key="item.path"></navbar-item>
  </el-menu>
</template>

<script>
import { mapGetters } from "vuex";
import navbarItem from "./navBar_item";

export default {
  name: "navBar",
  components: { navbarItem },
  props: {
    mode: {
      default: "vertical"
    }
  },
  methods: {
    collapse() {
      this.$store.commit("SET_NAVOPEN");
    }
  },
  computed: {
    ...mapGetters(["navBar", "navOpen"])
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/style/variable.scss";
.navBar {
  transition: all 0.3s;
  height: 100%;
  &.hori {
    display: flex;
    justify-content: center;
    li {
      float: right;
    }
  }
}
.oneLevel {
  width: 200px;
  .el-menu-item span {
    height: auto;
    width: auto;
    overflow: hidden;
    visibility: visible;
    display: inline-block;
  }
}
.menu_icon {
  color: $color !important;
}
</style>
<style lang="scss">
@import "../../assets/style/variable.scss";
.navBar {
  .navBar_title {
    color: $color !important;
    border-bottom: 1px solid $color;
  }
  .navBar_dropdown {
    width: 170px;
    .el-dropdown {
      float: right;
    }
  }
}

.el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: 2px solid #00b09e;
    color: #fff;
}
.el-menu--popup-bottom-start {
    margin-top: 5px;
}
.el-menu--popup {
    z-index: 100;
    min-width: 117px;
    border: none;
    padding: 5px 0;
    border-radius: 2px;
    -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu .el-submenu__title {
    background-color: #FFFFFF;
    float: none;
    height: 36px;
    line-height: 36px;
    padding: 0 10px;
    color: #909399;
    text-align: center;
}
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover, .el-menu--horizontal .el-menu-item:not(.is-disabled):focus {
    outline: none;
    color: #fff;
}
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover,el-menu--horizontal .el-menu-item:not(.is-disabled):focus{
  outline: none;
  color: #fff;
}
</style>
