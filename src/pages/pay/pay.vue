<template>
  <div class="page">
    <lt-button @click="show1 = true">点我显示弹框</lt-button>
    <lt-modal v-model="show1" style="background-color: blue;">
      <div class="container">
        <div class="content">
          <img class="content_head_img" src="./img/pay_head_img.png" alt>

          <div class="pay_contents">
            <div class="pay_content">
              <div class="pay_content_tag">加送1年</div>
              <div class="pay_content_detail">
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
              <div class="quick_pay_detail_QR_code">二维码</div>
              <div class="quick_pay_detail_info">
                <div class="quick_pay_detail_info_price">
                  <div class="quick_pay_detail_info_price_icon">￥</div>
                  <div class="quick_pay_detail_info_price_num">1600.00</div>
                </div>
                <div class="quick_pay_detail_info_des">使用支付宝/微信付款</div>
                <div class="quick_pay_detail_info_imgs">
                  <div class="quick_pay_detail_info_img">支付宝</div>
                  <div class="quick_pay_detail_info_img">微信</div>
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
                <div class="pay_power_item_img"></div>
                <div class="pay_power_item_txt" style="width: 75px;">1000款字体</div>
              </div>
              <div class="pay_power_item">
                <div class="pay_power_item_img"></div>
                <div class="pay_power_item_txt" style="width: 59px;">40万图片</div>
              </div>
              <div class="pay_power_item">
                <div class="pay_power_item_img"></div>
                <div class="pay_power_item_txt" style="width: 70px;">商业授权书</div>
              </div>
              <div class="pay_power_item">
                <div class="pay_power_item_img"></div>
                <div class="pay_power_item_txt" style="width: 51px;">印刷9折</div>
              </div>
              <div class="pay_power_item">
                <div class="pay_power_item_img"></div>
                <div class="pay_power_item_txt" style="width: 56px;">16G上传</div>
              </div>
              <div class="pay_power_item">
                <div class="pay_power_item_img"></div>
                <div class="pay_power_item_txt" style="width: 56px;">企业管理</div>
              </div>
            </div>
          </div>
          <div class="vip_agreement">会员协议</div>
        </div>

        <div class="close_btn">
          <lt-icon type="close"></lt-icon>
        </div>
      </div>
    </lt-modal>

    <lt-button @click="show2 = true">点我显示弹框</lt-button>
    <lt-modal v-model="show2" style="background-color: blue;">
      <div class="business_empower">
        <div class="business_title">商业授权状况</div>
        <div class="business_des">填写企业信息，为公司获取商业授权，避免版权风险。</div>
        <div
          class="business_des"
          style="width: 450px; margin-top: 6px;"
        >个人用户请在“公司名称”处填写“姓名”,“社会信用代码”处填写“身份证号码”.</div>

        <form class="form_area" action :model="business_empower_form" rules="rules">
          <div class="form_item">
            <div class="form_item_icon">*</div>
            <input class="form_item_input" type="text" placeholder="公司  名称（即是授权主体，不可更改）">
          </div>
          <div class="form_item">
            <div class="form_item_icon">*</div>
            <input class="form_item_input" type="text" placeholder="手机号码">
          </div>
          <div class="form_item">
            <div class="form_item_icon">*</div>
            <input class="form_item_input" type="text" placeholder="企业邮箱">
          </div>
          <div class="form_item">
            <select
              class="form_item_input selec_txt"
              name="aaq"
              id="aa1"
              style="width: 156px; margin-left: 12px;"
            >
              <option class="selec_txt" value disabled selected hidden>所在行业</option>
              <option class="selec_txt" value="0">行业一</option>
              <option class="selec_txt" value="1">行业二</option>
              <option class="selec_txt" value="2">行业三</option>
              <option class="selec_txt" value="3">行四一</option>
            </select>
            <select
              class="form_item_input selec_txt"
              name="aas"
              id="aa2"
              style="width: 156px; "
              placeholder=" "
            >
              <option value disabled selected hidden>企业规模</option>
              <option value="0">规模一</option>
              <option value="1">规模二</option>
              <option value="2">规模三</option>
              <option value="3">规模一</option>
            </select>
          </div>
          <div class="form_item">
            <div class="form_item_icon">*</div>
            <input class="form_item_input" type="text" placeholder="联系地址">
          </div>
          <div
            class="form_item"
            style="display: flex; 
            flex-direction: row; 
            justify-content: center"
          >
            <div class="form_item_icon"></div>
            <div class="form_item_btn_download" style="margin-left:1px;">下载商业授权书</div>
          </div>
        </form>

        <div class="form_item_btn_close">关闭</div>
      </div>
    </lt-modal>
  </div>
</template>

<script>
export default {
  name: "index",
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
      msg: "index page",
      show1: false,
      show2: false,
      quick_pay_show: true,
      balance_pay_show: false,
      company_pay_show: false,
      rules: {
        selectedOptions: [
          {
            type: "array",
            required: true,
            message: "请选择故障所在区域",
            trigger: "change"
          }
        ],
        detailAdd: [
          { required: true, message: "请输入详细地址", trigger: "change" }
        ]
      }
    };
  },
  methods: {
    quick_pay_fun: function(event) {
      this.quick_pay_show = true;
      this.balance_pay_show = false;
      this.company_pay_show = false;
      console.log(
        this.quick_pay_show,
        this.balance_pay_show,
        this.company_pay_show
      );
    },
    balance_pay_fun: function(event) {
      this.quick_pay_show = false;
      this.balance_pay_show = true;
      this.company_pay_show = false;
      console.log(
        this.quick_pay_show,
        this.balance_pay_show,
        this.company_pay_show
      );
    },
    company_pay_fun: function(event) {
      this.quick_pay_show = false;
      this.balance_pay_show = false;
      this.company_pay_show = true;
      console.log(
        this.quick_pay_show,
        this.balance_pay_show,
        this.company_pay_show
      );
    },
    showOtherVideo() {
      // 原文：https://blog.csdn.net/u011613356/article/details/77449868
      let _this = this;
      setTimeout(function() {
        _this.flag = _this._dom.paused;
        if (!_this.flag) {
          _this.showOtherVideo();
          console.log(_this.flag);
        }
      }, 1000);
    }
  }
};
</script>

<style lang="less" scoped>
@import "pay";
</style>
