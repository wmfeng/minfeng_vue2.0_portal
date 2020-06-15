<template>
  <div class="footer">
    <p>技术支持：北京中农信达信息技术有限公司</p>
  </div>
</template>

<script>
export default {
  name: "foot",
  props: {},
  components: {},
  watch: {},
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/variable.scss";
.footer {
  height: $footHeight;
  background-color: #555660;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 16px;
}
</style>
