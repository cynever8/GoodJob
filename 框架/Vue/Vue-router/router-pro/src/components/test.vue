<!--
 * @Description: 
 * @Autor: Leon
 * @Date: 2020-02-06 16:56:02
 * @LastEditors  : Leon
 * @LastEditTime : 2020-02-08 00:00:58
 -->
<template>
  <div class="test">
    测试页面
    <!-- <p>{{c}}</p> -->
    <!-- <p>{{this.test.testa}}</p> -->
  </div>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: "Test",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  created() {
    console.log(this.test);
  },
};
</script>

<style lang='scss' scoped>
</style>