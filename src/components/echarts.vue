<template>
  <div id="myChart"></div>
</template>

<script>
let echarts = require("echarts/lib/echarts");
// 引入柱状图组件
require("echarts/lib/chart/bar");
// 引入提示框和title组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
export default {
  name : "echarts",
  props: ["EachartsData"],
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: this.EachartsData
        },
        grid: {
          left        : "3%",
          right       : "4%",
          bottom      : "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type       : "category",
          boundaryGap: false,
          data       : ["Jan/18", "Mar/18", "May/18", "Jul/18", "Sep/18", "Nov/18"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name : this.EachartsData[0].name,
            type : "line",
            stack: "总量",
            data : [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name : this.EachartsData[1].name,
            type : "line",
            stack: "总量",
            data : [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name : this.EachartsData[2].name,
            type : "line",
            stack: "总量",
            data : [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name : this.EachartsData[3].name,
            type : "line",
            stack: "总量",
            data : [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name : this.EachartsData[4].name,
            type : "line",
            stack: "总量",
            data : [820, 932, 901, 934, 1290, 1330, 1320]
          },
          {
            name : this.EachartsData[5].name,
            type : "line",
            stack: "总量",
            data : [820, 932, 901, 934, 1290, 1330, 1320]
          },
          {
            name : this.EachartsData[6].name,
            type : "line",
            stack: "总量",
            data : [820, 932, 901, 934, 1290, 1330, 1320]
          },
          {
            name : this.EachartsData[7].name,
            type : "line",
            stack: "总量",
            data : [820, 932, 901, 934, 1290, 1330, 1320]
          },
          {
            name : this.EachartsData[8].name,
            type : "line",
            stack: "总量",
            data : [820, 932, 901, 934, 1290, 1330, 1320]
          },
          {
            name : this.EachartsData[9].name,
            type : "line",
            stack: "总量",
            data : [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      });
    }
  }
};
</script>

<style>
#myChart {
  width : 600px;
  height: 400px;
}
</style>
