<template>
  <div class="statusPage">
    <headerPage/>
    <div class="body-infoPage">
      <div class="hotBar" v-for="(item, index) in hotData" :key="index">
        <div class="tipsBar">
          <span class="tipsMonth">{{item.month}}月</span>
          <span class="tipsInfo">100%</span>
        </div>
        <div
          class="hotItem"
          v-for="(itm, idx) in item.data"
          :key="idx"
          :style="(itm == 0 && 'background: #fff') || (itm == 1 && 'background: #ff6844') || (itm == 2 && 'background: #ffbf33') || (itm == 3 && 'background: #7ed321') || 'background: #d3d3d3'"
        >
          <!-- {{itm}} -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerPage from "./header.vue";
import axios from "axios";
const req = new axios.create({
  baseURL: "https://status-api.authing.cn/authing/"
})
export default {
  name: "statusPage",
  components: {
    headerPage
  },
  data() {
    return {
      hotData: []
    };
  },
  mounted() {
    this.getFullYearData();
  },
  methods: {
    getWeek(day) {
      var arys1 = new Array();
      arys1 = day.split("-");
      var ssdate = new Date(arys1[0], parseInt(arys1[1] - 1), arys1[2]);
      var week1 = String(ssdate.getDay());
      return week1;
    },

    getDayByMonth(year, month) {
      var thisDate = new Date(year, month, 0); //当天数为0 js自动处理为上一月的最后一天
      return thisDate.getDate();
    },

    randomNumber(lowerValue, upperValue) {
      return Math.floor(
        Math.random() * (upperValue - lowerValue + 1) + lowerValue
      );
    },

    getRandomData(count, emptyCount = 0, dayHeader) {
      let arr = [];
      for (var i = 0; i < count; i++) {
        if (new Date(dayHeader + '-' + (i + 1)).valueOf() > new Date().valueOf()) {
          arr.push(-1);  //这样显示的格子就是灰色
        } else {
          arr.push(this.randomNumber(1, 3));
        }
      }
      for (var ii = 0; ii < emptyCount; ii++) {
        arr.unshift(0);
      }
      return arr;
    },

    getFullYearData() {
      //准备测试数据
      // let year = new Date().getFullYear();
      // let array = [];
      // for (var i = 0; i < 12; i++) {
      //   let day = year + "-" + (i + 1) + "-1";
      //   let emptyDay = this.getWeek(day);
      //   if (new Date().getMonth() >= i) {
      //     //月份不得超过当前月，不然没意义嗷
      //     array.push({
      //       month: i + 1,
      //       days: this.getDayByMonth(year, i + 1),
      //       emptyDay: emptyDay,
      //       data: this.getRandomData(
      //         this.getDayByMonth(year, i + 1),
      //         emptyDay * 1,
      //         year + '-' + (i + 1)
      //       )
      //     });
      //   }
      // }
      // array.reverse();
      // if (array.length > 8) {
      //   //只显示前 8 个月
      //   array = array.slice(0, 7);
      // }
      // this.hotData = array;
      // console.log(array);
      req.get('status').then(e => {
        console.log(e);
        this.hotData = e.data;
      })
    }
  }
};
</script>

<style>
.body-infoPage {
  width: 100vw;
  padding: 66px 130px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
}

.hotBar {
  width: 140px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 30px;
  margin-bottom: 40px;
}

.hotItem {
  width: 16px;
  height: 16px;
  margin-right: 4px;
  margin-bottom: 4px;
  border-radius: 2px;
  transition: all .2s;
}

.hotItem:hover {
  opacity: 0.6;
}

.tipsBar {
  width: 140px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  margin-bottom: 16px;
  border-bottom: 1px solid #f3f3f3;
}

.tipsBar .tipsMonth {
  font-size: 14px;
  font-weight: bold;
  color: #212121;
}

.tipsBar .tipsInfo {
  font-size: 12px;
  font-weight: normal;
  color: #919191;
}

@media screen and (max-width: 480px) {
  .body-infoPage {
    padding: 22px;
  }
}
</style>
