<template>
    <div class="wrap">
        <div class="header">
            <img src="../static/img/logo.png" alt="">
            <ul class="headerUl">
                <li>产品</li>
                <li>关于我们</li>
                <li>大数据</li>
                <li>新闻</li>
                <li>招聘</li>
                <li>商城</li>
                <li>登陆/注册</li>
            </ul>
        </div>
        <header class="m-header">
            <img src="../static/img/m-logo.png" alt="" class="headerImg">
            <img src="../static/img/headerRight.png" alt="" @click="changeFlag">
        </header>
        <section class="b-section">
            <div class="banner">
                <img src="../static/img/banner.png" alt="">
            </div>
            <div class="sectionTop">
                <ul class="sectionTopUl">
                    <li
                          v-for  = "(val,ind) in sectionTopUlData"
                        :key     = "ind"
                          @click = "changeLi(ind)"
                        :class   = "sectionTopUlLiInd==ind ? 'liActive' : null"
                    >{{val}}</li>
                </ul>
            </div>
            <div class="sectionCenterTwo" v-if="sectionTopUlLiInd==0">SUV TOP11</div>
            <div class="sectionCenterOne" v-if="sectionTopUlLiInd==1">
                <div class="Eacharts">
                    <Eacharts :EachartsData="EachartsDataOne"></Eacharts>
                    <div class="Eacharts-Left">
                        <ul>
                            <li v-for="(val,ind) in EachartsDataOne" :key="ind">
                                <p>
                                    <span class="ind">{{ind+1}}</span>
                                    <span class="names">{{val.name}}</span>
                                </p>
                                <span class="nums">{{val.num}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="sectionCenterThree" v-if="sectionTopUlLiInd==2">SUV TOP10as33</div>
        </section>
        <section class="m-section">
            <div class="m-banner">
                <img src="../static/img/banner.png" alt="">
            </div>
            <div class="m-sectionTop">
                <ul class="m-sectionTopUl">
                    <li
                          v-for  = "(val,ind) in sectionTopUlData"
                        :key     = "ind"
                          @click = "changeLi(ind)"
                        :class   = "sectionTopUlLiInd==ind ? 'liActive' : null"
                    >{{val}}</li>
                </ul>
            </div>
            <div class="sectionCenterTwo" v-if="sectionTopUlLiInd==0">SUV TOP11</div>
            <div class="sectionCenterOne" v-if="sectionTopUlLiInd==1">
                <div class="Eacharts">
                    <Eacharts :EachartsData="EachartsDataOne"></Eacharts>
                    <div class="Eacharts-Left">
                        <ul>
                            <li v-for="(val,ind) in EachartsDataOne" :key="ind">
                                <p>
                                    <span class="ind">{{ind+1}}</span>
                                    <span class="names">{{val.name}}</span>
                                </p>
                                <span class="nums">{{val.num}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="sectionCenterThree" v-if="sectionTopUlLiInd==2">SUV TOP10as33</div>
        </section>
        <div class="mask" v-show="flag">
            <div class="maskHeader">
                <img src="../static/img/maskLog.png" alt="" class="logosImg">
                <img src="../static/img/X.png" alt="" @click="changeFlag('close')">
            </div>
            <div class="maskSection">
                <ul>
                    <li>首页</li>
                    <li>产品</li>
                    <li>关于我们</li>
                    <li>车轮大数据</li>
                    <li>最新动态</li>
                    <li>加入车轮</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import "../scss/home.css";
import Eacharts from "../components/echarts";
export default {
  name: "home",
  data() {
    return {
      sectionTopUlData : ["分析评论", "趋势榜单", "研究报告"],
      sectionTopUlLiInd: 1,
      flag             : false,
      EachartsDataOne  : [
        { name: "吉利博越", num: "138,279" },
        { name: "冠道", num: "70,198" },
        { name: "本田XR-V", num: "70,131" },
        { name: "哈佛H6", num: "66,711" },
        { name: "途观", num: "57,266" },
        { name: "全新途胜", num: "53,937" },
        { name: "本田CR-V", num: "50,745" },
        { name: "缤智", num: "48,990" },
        { name: "奔驰GLA级", num: "48,871" },
        { name: "汉兰达", num: "45,529" }
      ]
    };
  },
  components: {
    Eacharts
  },
  methods: {
    changeLi(ind) {
      this.sectionTopUlLiInd = ind;
    },
    changeFlag(val) {
      if (val == "close") {
        this.flag = false;
      } else {
        this.flag = true;
      }
    }
  }
};
</script>

<style>
</style>
