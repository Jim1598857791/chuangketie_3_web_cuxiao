<template>
  <div class="page">
    <lt-button @click="show1 = true">支付弹窗</lt-button>
    <lt-modal v-model="show1">
      <div class="container">
        <div class="content">
          <img class="content_head_img" src="./img/pay_head_img.png" alt="我来组成头部">

          <div class="pay_contents">
            <div class="pay_content">
              <div class="pay_content_tag">加送1年</div>
              <div class="pay_content_detail" style="background-position: -252px -313px;">
                <div class="pay_content_detail_title">5人版本/年</div>
                <div class="pay_content_detail_price">
                  <div class="pay_content_detail_price_icon">￥</div>
                  <div class="pay_content_detail_price_num">1600</div>
                </div>
              </div>
            </div>
          </div>
          <div class="pay_way">
            <div class="pay_way_btns">
              <div
                class="pay_way_btn"
                v-on:click="quick_pay_fun"
                v-bind:class="{ pay_way_btn_chosed: quick_pay_show }"
              >快捷支付</div>
              <div
                class="pay_way_btn"
                v-on:click="balance_pay_fun"
                v-bind:class="{ pay_way_btn_chosed: balance_pay_show }"
              >余额支付</div>
              <div
                class="pay_way_btn"
                v-on:click="company_pay_fun"
                v-bind:class="{ pay_way_btn_chosed: company_pay_show }"
              >对公转账</div>
              <div class="pay_way_btn"></div>
            </div>

            <!-- 快捷支付 -->
            <div v-if="quick_pay_show" class="quick_pay_detail">
              <img src="./img/qrcode_1.png" class="quick_pay_detail_QR_code" alt="二维码">

              <div class="quick_pay_detail_info">
                <div class="quick_pay_detail_info_price">
                  <div class="quick_pay_detail_info_price_icon">￥</div>
                  <div class="quick_pay_detail_info_price_num">1600.00</div>
                </div>
                <div class="quick_pay_detail_info_des">使用支付宝/微信付款</div>
                <div class="quick_pay_detail_info_imgs">
                  <!-- 支付宝 -->
                  <div
                    class="quick_pay_detail_info_img"
                    style="background-position: -377px -245px;"
                  ></div>
                  <!-- 微信 -->
                  <div
                    class="quick_pay_detail_info_img"
                    style=" margin-left: 15px; background-position: -416px -245px;"
                  ></div>
                </div>
              </div>
            </div>

            <!-- 余额支付 -->
            <div v-if="balance_pay_show" class="balance_pay_detail">
              <div class="balance_pay_detail_info">
                <div class="balance_pay_detail_info_txt">账户余额：</div>
                <div class="balance_pay_detail_info_price_icon">￥</div>
                <div class="balance_pay_detail_info_price_num">0.00</div>
                <div class="balance_pay_detail_info_txt">应付金额：</div>
                <div class="balance_pay_detail_info_price_icon">￥</div>
                <div class="balance_pay_detail_info_price_num">1600.00</div>
              </div>
              <div class="balance_pay_btn">立即购买</div>
            </div>
            <!-- 对公支付 -->
            <div v-if="company_pay_show" class="company_pay_detail">
              <div class="company_pay_detail_info1">
                <div class="company_pay_detail_info1_1">收款公司名</div>
                <div class="company_pay_detail_info1_2">北京艺源酷科技有限公司</div>
              </div>
              <div class="company_pay_detail_info1">
                <div class="company_pay_detail_info1_1">收款账户</div>
                <div class="company_pay_detail_info1_2">1373 6151 6010 0012 45</div>
              </div>
              <div class="company_pay_detail_info1">
                <div class="company_pay_detail_info1_1">开户行名称</div>
                <div class="company_pay_detail_info1_2">广发银行股份有限公司北京海淀支行</div>
              </div>

              <div class="company_pay_detail_info2">
                <div class="company_pay_detail_info2_1">共计：</div>
                <div class="company_pay_detail_info2_2">1600.00</div>
                <div class="company_pay_detail_info2_3">元</div>
              </div>
              <div class="company_pay_detail_info3">
                <div class="company_pay_detail_info_btn">确认使用对公转账</div>
                <div class="company_pay_detail_info_btn_des">到账时间：广发1~2天，跨行3~5天</div>
              </div>
              <div class="company_pay_detail_info4">线下汇款请直接向您在创客贴的专属账户汇款，系统会将汇款直接匹配到您的创客贴订单。</div>
            </div>
          </div>

          <div class="pay_power">
            <div class="pay_power_title">专享权益：</div>
            <div class="pay_power_area">
              <div class="pay_power_item">
                <div class="pay_power_item_img" style="background-position: -53px -241px;"></div>
                <div class="pay_power_item_txt" style="width: 75px;">1000款字体</div>
              </div>
              <div class="pay_power_item">
                <div class="pay_power_item_img" style="background-position: -105px -241px;"></div>
                <div class="pay_power_item_txt" style="width: 59px;">40万图片</div>
              </div>
              <div class="pay_power_item">
                <div class="pay_power_item_img" style="background-position: -157px -241px;"></div>
                <div class="pay_power_item_txt" style="width: 70px;">商业授权书</div>
              </div>
              <div class="pay_power_item">
                <div class="pay_power_item_img" style="background-position: -209px -241px;"></div>
                <div class="pay_power_item_txt" style="width: 51px;">印刷9折</div>
              </div>
              <div class="pay_power_item">
                <div class="pay_power_item_img" style="background-position: -261px -241px;"></div>
                <div class="pay_power_item_txt" style="width: 56px;">16G上传</div>
              </div>
              <div class="pay_power_item">
                <div class="pay_power_item_img" style="background-position: -313px -241px;"></div>
                <div class="pay_power_item_txt" style="width: 56px;">企业管理</div>
              </div>
            </div>
          </div>
          <a
            href="http://edu.chuangkit.com/forum.php?mod=viewthread&tid=959&extra="
            class="vip_agreement"
          >会员协议</a>
        </div>

        <div class="close_btn" @click="show1 = false" v-on:click="close_pay">
          <lt-icon type="close"></lt-icon>
        </div>
      </div>
    </lt-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      business_empower_form: {
        company_name: "",
        telphone: "",
        conpany_mail: "",
        industry: "", //行业
        scale: "", //规模
        adddress: ""
      },
      show1: false,
      show2: false,
      quick_pay_show: true,
      balance_pay_show: false,
      company_pay_show: false
    };
  },
  methods: {
    quick_pay_fun: function() {
      this.quick_pay_show = true;
      this.balance_pay_show = false;
      this.company_pay_show = false;
    },
    balance_pay_fun: function() {
      this.quick_pay_show = false;
      this.balance_pay_show = true;
      this.company_pay_show = false;
    },
    company_pay_fun: function() {
      this.quick_pay_show = false;
      this.balance_pay_show = false;
      this.company_pay_show = true;
    },
    close_pay: function() {
      console.log("关闭支付弹窗");
    },
    close_form: function() {
      console.log("关闭，申请表单");
    }
  }
};
</script>

<style lang="less" scoped>
@import "pay";
</style>
