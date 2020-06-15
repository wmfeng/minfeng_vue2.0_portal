<template>
  <div class="content">首页</div>
</template>
<script>
import { getFrost } from "@/api/requestMethods";
export default {
  data() {
    return {};
  },
  methods: {
    // Degree Days Index - Daily - 15 Day（生长度日，热度日冷度日，积温）
    agriculturalMeteorology() {
      let url =
        "/v2/indices/degreeDays/daily/15day?geocode=34.350846,108.952789&language=zh-CN&format=json&apiKey=715688a3fb624aec9688a3fb624aecce";
      getFrost(url).then(res => {
        console.log("生长度日，热度日冷度日，积温", res);
      });
    }
  },
  mounted() {
    this.agriculturalMeteorology();
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/style/common.scss";
.content {
}
</style>
