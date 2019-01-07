<template>
    <div>
        <div class="title1">
            <img src="../static/img/1.png" alt="">
        </div>
        <div class="title2">
            <p v-for="(val,ind) in list" :key="ind" @click="click(val)">
                <img v-if="val.src" :src="val.src" alt="">
                <img v-else :src="addImg" alt="">
                <span>{{val.desc}}</span>
            </p>
        </div>
        <div class="title3">
            <p v-for="(val,ind) in listArr" :key="ind" @click="changeJz(val.left)">
                <span @click="showTypes">{{val.left}} {{val.center}}</span>
                <span @click="clickRight(val.right)">{{val.right}}</span>
            </p>
        </div>
        <div class="title4">
            <span>优惠</span>
            <span>登陆后查看优惠卷</span>
        </div>
        <div class="title5">
            <router-link to="/ccwt">常见问题</router-link>
        </div>
        <div class="title6">
            <button @click="pay">去支付</button>
        </div>
        <div class="popup">
            <van-popup v-model="show" position="bottom">
                <van-picker
                    show-toolbar
                                        title    = "服务类型"
                                      :columns   = "columns"
                                        @cancel  = "cancelType"
                                        @confirm = "confirmType"
                />
            </van-popup>
            <van-popup v-model="showType">
                <img src="../assets/licence.png">
                <span>不同签发城市价格不同,车轮保证全国通用.</span>
            </van-popup>
            <van-popup v-model="showCity" position="bottom">
                <van-picker
                                        title  = "当前签发城市"
                                      :columns = "cityColumns"
                    show-toolbar
                    ref      = "cityPicker"
                    @change  = "cityChange"
                    @cancel  = "cityCancel"
                    @confirm = "cityConfirm"
                />
            </van-popup>
            <van-popup v-model="showCost" position="bottom">
                <van-picker
                                        title  = "可补换城市"
                                      :columns = "costColumns"
                                        ref    = "costPicker"
                    show-toolbar
                    @change  = "costChange"
                    @cancel  = "costCancel"
                    @confirm = "costConfirm"
                />
            </van-popup>
        </div>
        <section v-show="showMask" class="mask">
            <img :src="current.demo">
            <div>
                <button @click="upload(1)">拍照</button>
                <button @click="upload(2)">相册</button>
                <button @click="cancel">取消</button>
            </div>
        </section>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import add from "@/assets/add.png";
import { uploadImg, goPay } from "@/api/index";
import bus from "./bus.js";

export default {
  name: "one",
  data() {
    return {
      listArr: [
        { left: "服务类型", right: "换驾照" },
        { left: "当前驾照签发城市", center: "?", right: "请选择签发地" },
        { left: "可补换的签发城市", center: "?", right: "请选择补换地" },
        { left: "服务费", right: "$399" }
      ],
      current    : {},
      showMask   : false,
      show       : false,
      showType   : false,
      showCity   : false,
      showCost   : false,
      columns    : ["换驾照", "补驾照"],
      cityColumns: [],
      costColumns: []
    };
  },
  computed: {
    ...mapState({
      list    : state => state.upload.list,
      cityList: state => state.upload.cityList,
      costList: state => state.upload.costList,
      city    : state => state.upload.city,
      cost    : state => state.upload.cost
    }),
    addImg() {
      return add;
    }
  },
  methods: {
    ...mapMutations({
      updataList : "upload/updataList",
      updateCity : "upload/updateCity",
      updateCost : "upload/updateCost",
      updateCosts: "upload/updateCosts"
    }),
    ...mapActions({
      getCityList: "upload/getCityList",
      getCostList: "upload/getCostList"
    }),

    click(val) {
      this.current  = val;
      this.showMask = true;
    },
    cancel() {
      this.showMask = false;
    },
    async upload(type) {
      // let res   = await uploadImg(type);
      let index = this.list.findIndex(item => item == this.current);
      this.updataList({
        index,
        src: 
          "http://picture.eclicks.cn/g2/l/2019/01/03/ae553f69e2215f66_640_853.jpg"
        // src: res.data.url
      });
      this.showMask = false;
    },
    changeJz(msg) {
      if (msg == "服务类型") {
        this.show = true;
      }
    },
    cancelType() {
      this.show = false;
    },
    confirmType(value) {
      this.listArr[0].right = value;
      this.cancelType();
    },
    showTypes() {
      this.showType = true;
    },
    clickRight(val) {
      if (val == this.listArr[1].right) {
        this.clickCity();
      } else if (val == this.listArr[2].right) {
        this.clickCost();
      }
    },
    clickCity() {
      this.showCity = true;
    },
    clickCost() {
      if (!this.city.length) {
        alert("请先选择签发地");
      } else {
        this.showCost = true;
        console.log(this.costList, "costList");
        this.getCostList().then(res => {
          this.costColumns = [
            {
              values: [],
              values: this.costList.map(item => item.name)
            },
            {
              values: [],
              values: this.costList[0].list.map(item => item.name)
            }
          ];
        });
      }
    },
    cityChange(picker, vals) {
      let index = this.cityList.findIndex(item => item.name == vals[0]);
      this.$refs.cityPicker.setColumnValues(
        1,
        this.cityList[index].list.map(item => item.name)
      );
    },
    costChange(picker, vals) {
      let index = this.costList.findIndex(item => item.name == vals[0]);
      this.$refs.costPicker.setColumnValues(
        1,
        this.costList[index].list.map(item => item.name)
      );
    },
    cityCancel() {
      this.showCity = false;
    },
    costCancel() {
      this.showCost = false;
    },
    cityConfirm(val) {
      this.cityCancel();
      this.updateCity(val);
      this.listArr[1].right = this.city.join(" ");
    },
    costConfirm(val) {
      this.costCancel();
      this.updateCosts(val);
      // console.log(val,'...vals');
      this.listArr[2].right = this.cost.join(" ");
    },
    pay() {
      goPay();
    }
  },
  mounted() {
    this.getCityList().then(res => {
      this.cityColumns = [
        {
          values: [],
          values: this.cityList.map(item => item.name)
        },
        {
          values: [],
          values: this.cityList[0].list.map(item => item.name)
        }
      ];
    });
  },
  beforeDestroy() {
    bus.$emit('msg',this.city)
  }
};
</script>
