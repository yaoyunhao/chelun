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
            <input type="text" placeholder="请输入联系电话" ref="input" @blur="getVal">
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
                    <button @click="shares">果断分享</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "../scss/two.css";
import Bus from "./bus.js";
import { share } from "../api/index";
export default {
  name: "two",
  data() {
    return {
      flag: false,
      city: ["北京", "北京市", "东城区"]
    };
  },
  mounted() {},
  methods: {
    showMask(val) {
      if (val == "hide") {
        this.flag = false;
      } else {
        this.flag = true;
        share();
      }
    },
    getVal() {
      var myreg = /^[1][3,4,5,6,7,8][0-9]{9}$/;
      if (myreg.test(this.$refs.input.value)) {
        console.log("验证成功");
      } else {
        console.log("请输入正确手机号");
      }
    },
    shares() {
      window["CHELUN_SHARE_DATA_WXMESSAGE"] = {
        title: "分享标题",
        desc : "分享描述",
        link : 
          "https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1419317332&token=&lang=zh_CN",
        imgUrl: 
          "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4027265438,186816642&fm=173&app=25&f=JPEG?w=640&h=641&s=381121D08A422CD6C81D4C13030080DA"
      };
      window["CHELUN_SHARE_DATA_WXTIMELINE"] = {
        title : "分享标题",
        desc  : "分享描述",
        type  : "photo",
        imgUrl: 
          "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4027265438,186816642&fm=173&app=25&f=JPEG?w=640&h=641&s=381121D08A422CD6C81D4C13030080DA"
      };
      share();
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
