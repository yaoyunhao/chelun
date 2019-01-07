<template>
    <div class="two">
        <div class="twoTitle">
            <span>收货地址</span>
        </div>
        <div class="twoTitle1">
            <span>联系城市</span>
            <p>
                <span v-for="(val,ind) in city" :key="ind">{{val}}</span>
            </p>
        </div>
        <div class="twoTitle1">
            <span>详细地址</span>
            <input type="text" placeholder="请输入详细地址">
        </div>
        <div class="twoTitle1">
            <span>联系电话</span>
            <input type="text" placeholder="请输入联系电话">
        </div>
        <div class="twoTitle1">
            <span>联系人</span>
            <input type="text" placeholder="请输入联系人">
        </div>
        <button class="buttons">确认</button>
        <img src="../assets/hongbao.png" alt="" class="hongbao" @click="showMask">
        <img src="../assets/kefu.png" alt="" id="cc">
        <div class="twoMask" v-if="flag">
            <div class="maskBox">
                <img src="../assets/coupon.png" alt="">
                <div class="twoButtons">
                    <button @click="showMask('hide')">给钱都不要</button>
                    <button>果断分享</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "../scss/two.css";
import Bus from "./bus.js";
export default {
  name: "two",
  data() {
    return {
      flag: false,
      city: ["北京", "北京市", "东城区"]
    };
  },
  methods: {
    showMask(val) {
      if (val == "hide") {
        this.flag = false;
      } else {
        this.flag = true;
      }
    }
  },
  beforeMount() {
    Bus.$on("msg", res => {
      this.city = res;
    });
  }
};
</script>

<style>
</style>
