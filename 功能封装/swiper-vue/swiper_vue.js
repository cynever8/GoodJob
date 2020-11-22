/*
 * @Description: 此函数必须要依赖swiper
 * @Autor: Leon
 * @Date: 2019-12-07 21:09:38
 * @LastEditors: Leon
 * @LastEditTime: 2019-12-08 18:56:26
 */
/**
* @description: 
    1. list 是要遍历的数组
    2. primary = "需要遍历的数据的主键(id)"     
       v-slot:[item = "需要遍历的数据的主键(id)"]

    <!-- Swiper -->
    <Swiper :items="list" primary="id">
      <template v-for="item of list" v-slot:[item.id] >
        {{item.name}}
      </template>
    </Swiper>
* @param {items:要遍历的数据, primary:遍历数据的主键} 
* @author: Leon
*/
Vue.component("Swiper", {
    props: ['items', 'primary'],
    template: `
    <div ref="selector" class="swiper-container">
        <div class="swiper-wrapper">
            <div v-for="item of items" class="swiper-slide">
            <slot :name="item[primary]"></slot>
            </div>
        </div>
        
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
    </div>
    `,
    mounted() {
        let selectorName= this.$refs.selector;
        var swiper = new Swiper(selectorName, {
            pagination: {
                el: '.swiper-pagination',
            },
        });
    },
})