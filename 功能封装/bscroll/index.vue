<!--
 * @Description: 
 * @Autor: Leon
 * @Date: 2019-12-19 16:37:22
 * @LastEditors: Leon
 * @LastEditTime: 2019-12-20 00:15:17
 -->

<template>
  <div class="scroll_container">
    <van-loading type="spinner" v-if="flag" style="text-align: center;" />
    <div class="wrapper" ref="wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// better-scroll 二次封装
import BScroll from "better-scroll";
import { Loading } from "vant";
export default {
  name: "My-scroll",
  components: {
    [Loading.name]: Loading
  },
  data() {
    return {
      flag: false
    };
  },
  mounted() {
    // FIXME: 在使用BScroll时不要忘了实例化
    this.scroll = new BScroll(this.$refs.wrapper, {
      //滚动优化
      probeType: 1,
      //下拉刷新
      pullDownRefresh: {
        threshold: 30
      }
    });
  },
  methods: {
    //满足条件出现loading
    handleScroll() {
      this.scroll.on("scroll", pro => {
        if (pro.y > 30) {
          this.flag = true;
        }
      });
    },
    // 1. 下拉刷新获取数据-----------------------------------------------
    // callback让外部返回一个方法来实现这个方法
    handlepullingDown(callback) {
      this.scroll.on("pullingDown", () => {
        callback();
      });
    },

    // 2. 当数据请求成功后需要执行的方法
    handleRefreshDown() {
      // 重新计算better-scroll
      this.scroll.refresh();
      // 防止用户多次频繁下拉刷新做的防抖
      this.scroll.finishPullDown();
      setTimeout(() => {
        this.flag = false;
      }, 1000);
    },

    // 1. 上拉加载更多----------------------------------------------
    handlepullingUp(callback) {
      this.scroll.on("pullingUp", () => {
        callback();
      });
    },
    // 2. 当上拉加载等多请求数据完毕后,通知可以进行下一次请求
    handlefinishPullUp() {
      // 重新计算better-scroll
      this.scroll.refresh();
      // 防止用户多次频繁下拉刷新做的防抖
      this.scroll.finishPullUp();
      setTimeout(() => {
        this.flag = false;
      }, 1000);
    }
  }
};
</script>

<style lang="scss">
.wrapper {
  height: 100%;
}
.scroll_container {
  height: 100%;
}
</style>