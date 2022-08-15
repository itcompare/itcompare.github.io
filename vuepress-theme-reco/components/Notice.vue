<template>
  <div>
    <div class="textBox">
      <transition name="slide">
        <p class="text" :key="text.id">
          <i class="el-icon-bell"></i>
          {{text.val.title}}
        </p>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notice",
  data () {
    return {
      textArr: [
        {tag:'精彩推荐',title:'1 第一条公告111111111111111'},
        {tag:'热门推荐',title:'1 第23条公告嘎嘎嘎嘎嘎嘎灌灌灌灌灌'},
        {tag:'精彩推荐',title:'1 第3条公告嘎嘎嘎嘎嘎嘎灌灌灌灌灌'},
        {tag:'公司公告',title:'1 第2条公告嘎嘎嘎嘎嘎嘎灌灌灌灌灌'},
        {tag:'热门推荐',title:'1 第2333条公告嘎嘎嘎嘎嘎嘎灌灌灌灌灌'},
      ],
    number: 0
  }
  },
  computed: {
    text () {
      return {
        id: this.number,
        val: this.textArr[this.number]
      }
    }
  },
  mounted () {
    this.startMove()
  },
  methods: {
    startMove () {
      // eslint-disable-next-line
      let timer = setTimeout(() => {
        if (this.number === this.textArr.length) {
          this.number = 0;
        } else {
          this.number += 1;
        }
        this.startMove();
      }, 2500); // 滚动不需要停顿则将2000改成动画持续时间
    }
  }
}
</script>

<style scoped>
.textBox {
  width: 100%;
  height: 20px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  text-align: left;
  background-color: beige;
}
.text {
  width: 100%;
  position: absolute;
  bottom: -12px;
  line-height: 20px;
  height: 20px;
}
.slide-enter-active, .slide-leave-active {
  transition: all 0.5s linear;
}
.slide-enter{
  transform: translateY(-10px) scale(0.8);
  opacity: 0;
}
.slide-leave-to {
  transform: translateY(10px) scale(1);
  opacity: 1;
}
</style>
