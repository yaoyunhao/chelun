<template>
  <div class="wrap">
    <header class="Upheader">
      <i class="iconfont icon-xiangzuo"></i>
      <span>补换驾照</span>
      <i class="iconfont icon-gengduo"></i>
    </header>
    <div class="title">
      <span
            v-for  = "(val,ind) in titleArr"
          :key     = "ind"
          :class   = "defaultIndex==ind ? 'active' : null "
            @click = "changeInd(ind)"
      >{{val}}</span>
    </div>
    <div v-if="defaultIndex==0">
      <One></One>
    </div>
    <div v-if="defaultIndex==1">
      <two></two>
    </div>
  </div>
</template>

<script>
import One from "../components/one";
import Two from "../components/two";
export default {
  name: "Upload",
  data() {
    return {
      titleArr    : ["订单提交", "填写收货地址", "正在办理", "办理完成"],
      defaultIndex: 0
    };
  },
  methods: {
    changeInd(ind) {
      this.defaultIndex = ind;
    }
  },
  components: {
    One,
    Two
  },
  mounted() {}
};
</script>


