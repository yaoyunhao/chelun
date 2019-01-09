<template>
    <canvas ref="canvas"></canvas>
</template>

<script>
import Bg from "../assets/bg.jpg";
export default {
  computed: {
    canvas() {
      return this.$refs.canvas;
    },
    context() {
      return this.$refs.canvas.getContext("2d");
    }
  },
  mounted() {
    let img        = new Image();
        img.src    = Bg;
        img.onload = () => {
      this.canvas.width  = img.width;
      this.canvas.height = img.height;
      this.context.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        0,
        0,
        img.width,
        img.height
      );
      let smilImg     = new Image();
          smilImg.src = 
        "https://avatars0.githubusercontent.com/u/42823783?s=460&v=4";
      smilImg.width  = "70px";
      smilImg.height = "70px";
      smilImg.onload = () => {
        // this.context.drawImage(smilImg, 110, 750, 70, 70);
        
        this.context.font = "25px Arial";
        this.context.fillText("姚冲", 130, 875);
        this.circleImg(this.context,smilImg,115,760,40);
        // this.context.arc(100, 100, 50, 0, 2 * Math.PI);
        // // 从画布上裁剪出这个圆形
        // this.context.clip();
        // this.context.drawImage(smilImg, 50, 50, 100, 100);
     
      };
      console.log(this.canvas.toDataURL());
    };
  },
  methods:{
      circleImg(ctx,img,x,y,r){
          var d= 2 *r;
          var cx=x+r;
          var cy =y+r;
          ctx.arc(cx,cy,r,0,2*Math.PI);
          ctx.clip();
          ctx.drawImage(img,x,y,d,d);
      }
  }
};
</script>

<style>
canvas {
  width: 100%;
}
</style>
