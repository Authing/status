<template>
  <div class="headerPage">
    <div class="header-logoBar">
      <div class="header-left">
        <img src="../assets/authing.png">
        <span>Authing</span>
        <span class="tips">服务健康状态</span>
      </div>
      <div class="header-right">中文</div>
    </div>

    <div class="header-now_info">
      <div class="header-data_img">
        <img class="data" src="../assets/data.png">
      </div>
      <div class="header-data">
        <div class="header-data_item_">
          <div class="header-data_item">
            <svg
              t="1558450644369"
              class="icon"
              style
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3605"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              :width="iconWidth"
              :height="iconWidth"
            >
              <path
                d="M800 835.328l-574.496 0.032A2.464 2.464 0 0 1 224 834.656v-118.656c0-5.856 5.92-14.944 12.096-17.44 1.056-0.448 69.408-30.272 149.952-50.464 41.248-10.336 85.632-18.208 125.952-18.208 36.64 0 76.736 6.496 114.816 15.456a1061.6 1061.6 0 0 1 161.856 53.536c5.312 2.176 11.328 11.296 11.328 17.12v119.36zM400.992 326.88A103.136 103.136 0 0 1 504.16 224a103.168 103.168 0 0 1 103.2 102.88v123.104a103.168 103.168 0 0 1-103.2 102.88 103.136 103.136 0 0 1-103.168-102.88v-123.104zM813.728 640c-3.904-1.728-58.56-25.6-129.312-45.76a883.616 883.616 0 0 0-72.608-17.6c36.096-30.592 59.552-75.68 59.552-126.656v-123.104A167.168 167.168 0 0 0 504.192 160c-92.16 0-167.2 74.72-167.2 166.88v123.104c0 52.352 24.768 98.624 62.72 129.28-25.472 5.376-50.112 11.872-72.8 18.656a1098.656 1098.656 0 0 0-115.648 41.664C182.016 651.328 160 684.192 160 716v131.68l1.696 4.992c9.504 27.936 35.136 46.72 63.808 46.72h572.992a65.536 65.536 0 0 0 64.96-56.96l0.544-126.4c0-31.616-21.952-64.416-50.272-76.032z"
                p-id="3606"
                fill="#009fea"
              ></path>
            </svg>
            <div class="tipsBar">
              <span>状态良好</span>
              <div>用户服务</div>
            </div>
          </div>

          <div class="header-data_bar">
            <div :style="'width:' + user + '%'"></div>
          </div>
        </div>

        <div class="header-data_item_">
          <div class="header-data_item">
            <svg
              t="1558450722726"
              class="icon"
              style
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3928"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              :width="iconWidth"
              :height="iconWidth"
            >
              <path
                d="M736 352h-192a32 32 0 1 0 0 64h192a32 32 0 1 0 0-64M736 480h-128a32 32 0 1 0 0 64h128a32 32 0 1 0 0-64M736 608h-128a32 32 0 1 0 0 64h128a32 32 0 1 0 0-64"
                p-id="3929"
                fill="#009fea"
              ></path>
              <path
                d="M831.936 768L192 768.224 192.096 256 832 255.776l0.224 512.192-0.32 0.032m0-576H192.128A64.032 64.032 0 0 0 128 255.776v512.448C128 803.36 156.768 832 192.096 832h639.84A64 64 0 0 0 896 768.224V255.776A64 64 0 0 0 831.936 192"
                p-id="3930"
                fill="#009fea"
              ></path>
              <path
                d="M480 622.144H288v-20.736c20.64-8.32 63.84-23.04 96-23.04 31.744 0 74.656 14.496 96 23.072v20.704zM355.36 441.6c0-14.368 11.232-25.6 25.504-25.6a25.6 25.6 0 0 1 25.504 25.6v41.92a25.28 25.28 0 0 1-25.504 25.632 25.6 25.6 0 0 1-25.504-25.6V441.6z m157.088 104a483.2 483.2 0 0 0-53.664-18.88c7.168-12.864 11.584-27.456 11.584-43.2V441.6c0-49.408-40.16-89.6-89.504-89.6a89.664 89.664 0 0 0-89.504 89.6v41.92c0 16.352 4.736 31.52 12.416 44.736-26.56 8-46.272 16.512-47.296 16.992A53.152 53.152 0 0 0 224 593.6v55.904l1.696 4.992c6.464 18.976 24.032 31.68 43.712 31.68h229.184a45.44 45.44 0 0 0 45.28-42.016L544 593.6c0-20.576-13.28-40.416-31.552-47.968z"
                p-id="3931"
                fill="#009fea"
              ></path>
            </svg>
            <div class="tipsBar">
              <span>状态良好</span>
              <div>SSO 服务</div>
            </div>
          </div>

          <div class="header-data_bar">
            <div :style="'width:' + sso + '%'"></div>
          </div>
        </div>

        <div class="header-data_item_">
          <div class="header-data_item">
            <svg
              t="1558448214133"
              class="icon"
              style
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2911"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              :width="iconWidth"
              :height="iconWidth"
            >
              <path
                d="M831.936 768L192 768.192V378.304l302.816 192.704a32.096 32.096 0 0 0 34.4 0L832 378.304 831.936 768zM192 255.776L192.096 256 832 255.776v46.656l-320 203.616L192 302.432V255.776zM831.936 192H192.096A64 64 0 0 0 128 255.776v512.416C128 803.36 156.768 832 192.096 832h639.84A64 64 0 0 0 896 768.192V255.776A64 64 0 0 0 831.936 192z"
                p-id="2912"
                data-spm-anchor-id="a313x.7781069.0.i0"
                class="selected"
                fill="#009fea"
              ></path>
            </svg>
            <div class="tipsBar">
              <span>状态良好</span>
              <div>邮件服务</div>
            </div>
          </div>

          <div class="header-data_bar">
            <div :style="'width:' + email + '%'"></div>
          </div>
        </div>

        <div class="header-data_item_">
          <div class="header-data_item">
            <svg
              t="1558450613774"
              class="icon"
              style
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3282"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              :width="iconWidth"
              :height="iconWidth"
            >
              <path
                d="M800.256 281.6h-128c0-88.064-71.68-159.744-159.744-159.744S352.256 193.536 352.256 281.6h-128c-35.328 0-63.488 28.672-64 64v476.672c0 35.328 28.672 64 64 64h576.512c35.328 0 63.488-28.672 64-64V345.6c-1.024-35.328-29.184-64-64.512-64zM512 180.224c52.736 0 96.256 43.008 96.256 96.256H415.744c0-52.736 43.52-96.256 96.256-96.256zM224.256 826.88v-486.4h128v80.384c-19.456 11.264-32.768 32.256-32.768 56.32 0 35.84 29.184 64.512 64.512 64.512s64.512-29.184 64.512-64.512c0-24.064-13.312-45.056-32.768-56.32V340.48h192v80.384c-19.456 11.264-32.768 32.256-32.768 56.32 0 35.84 29.184 64.512 64.512 64.512s64.512-29.184 64.512-64.512c0-24.064-13.312-45.056-32.768-56.32V340.48h128v486.4H224.256z"
                p-id="3283"
                fill="#009fea"
              ></path>
            </svg>
            <div class="tipsBar">
              <span>状态良好</span>
              <div>支付服务</div>
            </div>
          </div>

          <div class="header-data_bar">
            <div :style="'width:' + pay + '%'"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "headerPage",
  data() {
    return {
      iconWidth: 81,
      screenWidth: document.body.clientWidth,

      user: 0,
      sso: 0,
      email: 0,
      pay: 0
    };
  },
  props: {
    nowStatus: {
      type: Number,
      default: 200
    }
  },
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    };
    setTimeout(() => {
      this.user = 100;
      this.sso = 80;
      this.email = 60;
      this.pay = 80;
    }, 400);
  },
  watch: {
    screenWidth: function(val) {
      this.screenWidth = val;
      if (val < 480) {
        this.iconWidth = 60;
      } else {
        this.iconWidth = 81;
      }
    }
  }
};
</script>

<style>
.headerPage {
  width: 100vw;
  background: #f5f5f5;
  overflow-x: hidden;
}

.header-logoBar {
  font-family: fakt-web, Helvetica Neue, Hevetica, sans-serif;
  font-weight: 500;
  color: #515151;
  letter-spacing: 2px;
  font-size: 22px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 33px 66px;
}

.header-left {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.header-now_info {
  padding: 33px 66px;
}

.header-logoBar .tips {
  color: gray;
  font-weight: 400;
  font-size: 18px;
}

.header-logoBar span {
  margin-left: 11px;
}

.header-logoBar img {
  width: 60px;
  height: 60px;
}

.header-right {
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
}

.header-now_info {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}

.header-now_info img {
  width: 420px;
}

.header-data {
  width: calc(100% - 500px);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
}

.header-logoBar {
  width: 100%;
  height: 40%;
}

.header-data_item {
  width: 100%;
  padding: 10px 12px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}

.header-data_item .tipsBar {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 10px;
  padding-top: 4px;
}

.tipsBar span {
  color: #5cb85c;
  font-weight: 700;
  font-size: 32px;
  margin-top: 0;
  line-height: 1;
  font-family: "Open Sans", sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin-bottom: 4px;
}

.tipsBar div {
  font-size: 16px;
  font-weight: 500;
  color: #8a8a8a;
  letter-spacing: 0.5px;
}

.header-data_item_ {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 20px;
}

.header-data_bar {
  width: 65%;
  margin-left: 20px;
  height: 8px;
  border-radius: 4px;
  background: #fdfdfd;
  margin-top: 10px;
}

.header-data_bar div {
  transition: all 1.5s;
  border-radius: 4px;
  height: 8px;
  width: 0px;
  background: linear-gradient(-45deg, #2196f3, #00bcd4);
}

@media screen and (max-width: 768px) {
  .tipsBar span {
    color: #5cb85c;
    font-weight: 800;
    font-size: 24px;
    margin-top: 0;
    line-height: 1;
    font-family: "Open Sans", sans-serif;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    margin-bottom: 4px;
  }

  .tipsBar div {
    font-size: 18px;
    font-weight: 500;
    color: #8a8a8a;
    letter-spacing: 0.5px;
  }

  .header-now_info {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .header-data {
    width: 100%;
    justify-content: center;
  }
}

@media screen and (max-width: 480px) {
  .header-data_bar {
    width: 85%;
    margin-left: 20px;
    height: 8px;
    border-radius: 4px;
    background: #fdfdfd;
  }

  .headerPage {
    background: #f5f5f5;
  }

  .header-logoBar,
  .header-logoBar span.tips {
    font-size: 12px;
  }

  .header-logoBar,
  .header-now_info {
    padding: 22px;
  }

  .header-logoBar img {
    width: 40px;
    height: 40px;
  }

  .header-right {
      font-size: 12px;
  }

  .header-now_info {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .header-now_info img {
    width: 100%;
  }

  .header-data {
    width: 100%;
    justify-content: center;
  }

  .tipsBar span {
    color: #5cb85c;
    font-weight: 800;
    font-size: 14px;
    margin-top: 0;
    line-height: 1;
    font-family: "Open Sans", sans-serif;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    margin-bottom: 4px;
  }

  .tipsBar div {
    font-size: 11px;
    font-weight: 500;
    color: #8a8a8a;
    letter-spacing: 0.5px;
  }
}
</style>
