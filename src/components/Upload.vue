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

<style lang="scss" scoped>
ul {
  display        : flex;
  align-items    : center;
  justify-content: space-around;
}
li {
  display        : flex;
  flex-direction : column;
  align-items    : center;
  justify-content: center;
  img {
    border-radius: 0.15rem;
    width        : 0.9rem;
    height       : 0.7rem;
    border       : 1px solid #c0c0c0;
  }
  p {
    font-size : 0.26rem;
    padding   : 0.1rem 0.3rem;
    text-align: center;
  }
}
.add {
  width  : 0.5rem;
  height : 0.5rem;
  padding: 0.1rem 0.2rem;
}
.mask {
  position       : fixed;
  top            : 0;
  left           : 0;
  width          : 100%;
  height         : 100%;
  background     : rgba(0, 0, 0, 0.5);
  display        : flex;
  flex-direction : column;
  align-items    : center;
  justify-content: space-between;
  img {
    width     : 90%;
    margin-top: 20%;
  }
  div {
    display       : flex;
    width         : 90%;
    flex-direction: column;
    align-items   : center;
    button {
      width         : 100%;
      height        : 0.9rem;
      font-size     : 0.4rem;
      letter-spacing: 0.1rem;
      border-radius : 0.15rem;
      color         : #3aafc0;
    }
    button:first-child {
      border-radius: 0.15rem 0.15rem 0 0;
    }
    button:nth-child(2) {
      border-radius: 0 0 0.15rem 0.15rem;
    }
    button:last-child {
      margin: 0.15rem 0;
    }
  }
}

.van-popup {
  width        : 100%;
  border-radius: 30px;
  text-align   : center;
  span {
    font-size: 30px;
    color    : red;
  }
  img {
    width: 100%;
  }
}
</style>
