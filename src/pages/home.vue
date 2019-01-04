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
             <img src="../static/img/headerRight.png" alt="">
        </header>
        <section class="b-section">
            <div class="banner">
                <img src="../static/img/banner.png" alt="">
            </div>
            <div class="sectionTop">
                <ul class="sectionTopUl">
                    <li v-for="(val,ind) in sectionTopUlData" :key='ind' @click="changeLi(ind)" :class="sectionTopUlLiInd==ind ? 'liActive' : null">
                        {{val}}
                    </li>
                </ul>
            </div>
            <div class="sectionCenterTwo" v-if="sectionTopUlLiInd==0">
                SUV TOP11
            </div>
            <div class="sectionCenterOne" v-if="sectionTopUlLiInd==1">
                SUV TOP1022
            </div>
            <div class="sectionCenterThree" v-if="sectionTopUlLiInd==2">
                SUV TOP10as33
            </div>
        </section>
        <section class="m-section">
            <div class="m-banner">
                <img src="../static/img/banner.png" alt="">
            </div>
             <div class="m-sectionTop">
                <ul class="m-sectionTopUl">
                    <li v-for="(val,ind) in sectionTopUlData" :key='ind' @click="changeLi(ind)" :class="sectionTopUlLiInd==ind ? 'liActive' : null">
                        {{val}}
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script>
import '../scss/home.css';
export default {
    name: "home",
    data(){
        return {
            sectionTopUlData : ['分析评论','趋势榜单','研究报告'],
            sectionTopUlLiInd: 1
        }
    },
    methods:{
        changeLi(ind){
            this.sectionTopUlLiInd = ind;
        }
    }
}
</script>

<style>

</style>
