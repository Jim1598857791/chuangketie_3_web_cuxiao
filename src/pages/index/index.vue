<template>
  <!-- <div class="demo-page">
    <p>如需新增页面，在 pages 文件夹下新建文件夹，文件结构仿照 index 文件夹：</p>
    <img src="./img/index_tree_example.png" alt="页面文件结构">
    <p>如有其他问题与建议，请联系该 <a href="https://github.com/ssfe-team/lantern-template">项目</a> 维护者</p>
  </div>-->
  <div class="container">
    <div class="head">
      <div class="head_1">
        <img class="head_1_img" src="./img/banner_title.png" alt="头部标题图片">
        <div class="head_1_des">
          <div class="head_1_des_1"></div>
          <div class="head_1_des_txt">模板、字体、图片的全方位版权保障</div>
          <div class="head_1_des_2"></div>
        </div>
      </div>
      <div class="head_2">
        <div class="head_2_btn" style="margin-left:360px;">
          <div class="head_2_btn_img" style="background-position: -40px -40px;"></div>
          <div class="head_2_btn_des_1" style="width:92px;">10万模板</div>
          <div class="head_2_btn_des_2">全部解锁</div>
        </div>

        <div class="head_2_btn">
          <div class="head_2_btn_img" style="background-position: -150px -40px;"></div>
          <div class="head_2_btn_des_1" style="width:118px;">1000款字体</div>
          <div class="head_2_btn_des_2">企业专属</div>
        </div>

        <div class="head_2_btn">
          <div class="head_2_btn_img" style="background-position: -260px -40px;"></div>
          <div class="head_2_btn_des_1" style="width:94px;">40万图片</div>
          <div class="head_2_btn_des_2" style="width:105px;">可免费商用</div>
        </div>

        <div class="head_2_btn">
          <div class="head_2_btn_img" style="background-position: -40px -130px;"></div>
          <div class="head_2_btn_des_1" style="width:110px;">商业授权书</div>
          <div class="head_2_btn_des_2">法律保障</div>
        </div>

        <div class="head_2_btn">
          <div class="head_2_btn_img" style="background-position: -150px -130px;"></div>
          <div class="head_2_btn_des_1" style="width:80px;">印刷9折</div>
          <div class="head_2_btn_des_2">品质保证</div>
        </div>

        <div class="head_2_btn">
          <div class="head_2_btn_img" style="background-position: -260px -130px;"></div>
          <div class="head_2_btn_des_1" style="width:39px;">16G</div>
          <div class="head_2_btn_des_2" style="width:108px;">上传空间扩容</div>
        </div>

        <div class="head_2_btn" style="margin-right:370px;">
          <div class="head_2_btn_img" style="background-position: -370px -130px;"></div>
          <div class="head_2_btn_des_1" style="width:88px;">企业管理</div>
          <div class="head_2_btn_des_2">高效安全</div>
        </div>
      </div>

      <div class="head_3">
        <!-- 小块 -->
        <div class="head_3_1">
          <div class="head_3_1_top">加送1年</div>
          <div class="head_3_1_mid">企业版权VIP/1人</div>
          <div class="head_3_1_price">
            <div class="head_3_1_price_icon">￥</div>
            <div class="head_3_1_price_num">1200</div>
            <div class="head_3_1_price_unit">元/年</div>
          </div>
          <div class="head_3_1_btn" @click="pay_fun('vip_1_1200')">立即开通</div>
        </div>

        <!-- 小块 -->
        <div class="head_3_1" style="  position: relative;  left: 450px;">
          <div class="head_3_1_top">加送1年</div>
          <div class="head_3_1_mid">企业版权VIP/10人</div>
          <div class="head_3_1_price">
            <div class="head_3_1_price_icon">￥</div>
            <div class="head_3_1_price_num">2400</div>
            <div class="head_3_1_price_unit">元/年</div>
          </div>
          <div class="head_3_1_btn" @click="pay_fun('vip_10_2400')">立即开通</div>
        </div>

        <!-- 大块-->
        <div class="head_3_2_area">
          <div class="head_3_2">
            <div class="head_3_2_top">加送1年</div>
            <div class="head_3_2_tag">超值特惠</div>
            <div class="head_3_2_mid">企业版权VIP/5人</div>
            <div class="head_3_2_price">
              <div class="head_3_2_price_icon">￥</div>
              <div class="head_3_2_price_num">1600</div>
              <div class="head_3_2_price_unit">元/年</div>
            </div>
            <div class="head_3_2_btn" @click="pay_fun('vip_5_1600')">立即开通</div>
          </div>
        </div>
      </div>
      <!-- 按钮 -->
      <div class="head_buttons">
        <div class="head_button2">
          <img src="./img/222.png" class="head_btn_img" alt>
          <!-- <lt-icon class="head_btn_img" type="ios-arrow-up"></lt-icon> -->
          <div class="head_button2_txt">客服</div>
        </div>
        <div class="head_button1">
          <lt-icon class="head_btn_img" type="ios-arrow-up"></lt-icon>
        </div>
      </div>

      <div class="head_4_border">
        <div class="head_4">
          <div class="head_4_1s">
            <div class="head_4_1_icon" style="background-position: -37px -313px;">
              <div class="head_4_1_icon_txt">其他套餐</div>
            </div>
            <div class="head_4_1">
              <div class="head_4_1_top">加送2年</div>
              <div class="head_4_1_mid">企业版权VIP/1人</div>
              <div class="head_4_1_price">
                <div class="head_4_1_price_icon">￥</div>
                <div class="head_4_1_price_num">1920</div>
                <div class="head_4_1_price_unit">元/2年</div>
              </div>
              <div class="head_4_1_btn" @click="pay_fun('vip_1_1920')">立即开通</div>
            </div>
            <div class="head_4_1">
              <div class="head_4_1_top">加送2年</div>
              <div class="head_4_1_mid">企业版权VIP/5人</div>
              <div class="head_4_1_price">
                <div class="head_4_1_price_icon">￥</div>
                <div class="head_4_1_price_num">2560</div>
                <div class="head_4_1_price_unit">元/2年</div>
              </div>
              <div class="head_4_1_btn" @click="pay_fun('vip_5_2560')">立即开通</div>
            </div>
            <div class="head_4_1">
              <div class="head_4_1_top">加送2年</div>
              <div class="head_4_1_mid">企业版权VIP/10人</div>
              <div class="head_4_1_price">
                <div class="head_4_1_price_icon">￥</div>
                <div class="head_4_1_price_num">4200</div>
                <div class="head_4_1_price_unit">元/2年</div>
              </div>
              <div class="head_4_1_btn" @click="pay_fun('vip_10_4200')">立即开通</div>
            </div>
          </div>

          <div class="head_4_2s">
            <div class="head_4_1">
              <div class="head_4_1_top">加送1年</div>
              <div class="head_4_1_mid">企业版权VIP/25人</div>
              <div class="head_4_1_price">
                <div class="head_4_1_price_icon">￥</div>
                <div class="head_4_1_price_num">4500</div>
                <div class="head_4_1_price_unit">元/年</div>
              </div>
              <div class="head_4_1_btn" @click="pay_fun('vip_1_1200')">立即开通</div>
            </div>
            <div class="head_4_1">
              <div class="head_4_1_top">加送1年</div>
              <div class="head_4_1_mid">企业版权VIP/50人</div>
              <div class="head_4_1_price">
                <div class="head_4_1_price_icon">￥</div>
                <div class="head_4_1_price_num">6000</div>
                <div class="head_4_1_price_unit">元/年</div>
              </div>
              <div class="head_4_1_btn" @click="pay_fun('vip_50_6000')">立即开通</div>
            </div>
            <div class="head_4_1">
              <div class="head_4_1_top">加送2年</div>
              <div class="head_4_1_mid">企业版权VIP/25人</div>
              <div class="head_4_1_price">
                <div class="head_4_1_price_icon">￥</div>
                <div class="head_4_1_price_num">8000</div>
                <div class="head_4_1_price_unit">元/2年</div>
              </div>
              <div class="head_4_1_btn" @click="pay_fun('vip_25_8000')">立即开通</div>
            </div>
            <div class="head_4_1">
              <div class="head_4_1_top">加送2年</div>
              <div class="head_4_1_mid">企业版权VIP/50人</div>
              <div class="head_4_1_price" style="width:190px;">
                <div class="head_4_1_price_icon">￥</div>
                <div class="head_4_1_price_num" style="width:107px;">10000</div>
                <div class="head_4_1_price_unit">元/2年</div>
              </div>
              <div class="head_4_1_btn" @click="pay_fun('vip_50_10000')">立即开通</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ——-----------middle------middle-------middle-----------middle------middle ----------middle--------  -->
    <div class="middle">
      <img class="middle_title_img" src="./img/vip_quanyi.png" alt>
      <!-- 会员模板全部免费 -->
      <div class="middle_1" style="height: 552px; padding-bottom:30px;">
        <div class="middle_1_left"  >
          <div class="middle_1_left_title">
            <div class="middle_1_left_title_1">会员模板全部</div>
            <div class="middle_1_left_title_2">免费</div>
          </div>
          <div class="middle_1_left_des">满足所有营销、新媒体场景需求</div>
          <div class="middle_1_left_btn" @click="pay_fun('vip_666')">开通立享</div>
        </div>

        <video
          class="middle_1_right" 
          :src="videoSrc[0]"
          :poster="videoImg"
          :muted="muteStatus"
          :autoplay="true"
          :loop="loopPlay"
        >your browser does not support the video tag</video>
      </div>

      <!-- 300款专属商用字体 -->
      <div class="middle_2">
        <div class="middle_2_left_font">
          <img src="./img/font_backgroung.png" alt="背景" class="middle_2_left_font_background">
          <video
            class="middle_2_left_font_video"
            :src="videoSrc[1]"
            :poster="videoImg"
            :muted="muteStatus"
            autoplay="true"
            :loop="loopPlay"
          >your browser does not support the video tag</video>
        </div>

        <div class="middle_2_right" style=" width: 339px; ">
          <div class="middle_2_right_title" style=" width: 339px;">
            <div class="middle_2_right_title_2" style=" width: 107px; margin-left: 0px;">300款</div>
            <div class="middle_2_right_title_1" style=" width: 228px;margin-left:4px;">专属商用字体</div>
          </div>
          <div class="middle_2_right_des">高端大气，正版版权，展现企业形象</div>
          <div class="middle_2_right_btn" @click="pay_fun('vip_666')">开通立享</div>
        </div>
      </div>
      <div class="middle_1">
        <div class="middle_1_left" style=" width: 350px;">
          <div class="middle_1_left_title" style=" width: 350px;">
            <div class="middle_1_left_title_2" style="width: 84px;text-align: right;">40万</div>
            <div class="middle_1_left_title_1" style="width: 266px;">专属可商用图片</div>
          </div>
          <div class="middle_1_left_des">满足所有营销、新媒体场景需求</div>
          <div class="middle_1_left_btn" @click="pay_fun('vip_666')">开通立享</div>
        </div>

        <video
          class="middle_1_right"
          :src="videoSrc[2]"
          :poster="videoImg"
          :muted="muteStatus"
          :autoplay="playStatus"
          :loop="loopPlay"
         
        >your browser does not support the video tag</video>
      </div>
      <div class="middle_2"  >
        <img
          class="middle_2_left_2"
          style=" width: 645.8px;   height: 350px;
             position: relative; left: -170px;"
          src="./img/copyright_protect.png"
          alt="版权保障"
        >

        <div class="middle_2_right" style="width:360px;">
          <div class="middle_2_right_title">
            <div class="middle_2_right_title_1" style="width:152px;">版权保障</div>
          </div>
          <div class="middle_2_right_des" style="width:360px;">带有企业版权标识的作品均在国家版权局登记</div>
          <div class="middle_2_right_btn" @click="pay_fun('vip_666')">开通立享</div>
        </div>
      </div>
      <div class="middle_1"  >
        <div class="middle_1_left" style="width:266px;">
          <div class="middle_1_left_title" style="width:266px;">
            <div class="middle_1_left_title_1" style="width:266px;">签订商业授权书</div>
          </div>
          <div class="middle_1_left_des" style="width:234px;">提供法律保障，彻底避免侵权</div>
          <div class="middle_1_left_btn" @click="pay_fun('vip_666')">开通立享</div>
        </div>

        <img
          class="middle_1_right"
          style=" width: 580px; height: 322px;"
          src="./img/business_enpower.png"
          alt="商业授权"
        >
      </div>
      <div class="middle_2" >
        <div class="middle_2_left_2">
          <img
            class="middle_1_right"
            style=" width: 684px; height: 330px;"
            src="./img/company_manage.png"
            alt="企业管理"
          >
        </div>
        <div class="middle_2_right" style="width:256px; ">
          <div class="middle_2_right_title" style="width:256px;">
            <div class="middle_2_right_title_1" style="width:152px;">企业管理</div>
          </div>
          <div class="middle_2_right_des" style="width:256px;">管理设计和成员，成本直降50%</div>
          <div class="middle_2_right_btn" @click="pay_fun('vip_666')">开通立享</div>
        </div>
      </div>

      <div class="middle_1" >
        <div class="middle_1_left" style="width:328px;">
          <div class="middle_1_left_title" style="width:328px;">
            <div class="middle_1_left_title_1" style="width:76px;">印刷</div>
            <div class="middle_1_left_title_2" style="width:61px;">9折</div>
          </div>
          <div class="middle_1_left_des" style="width:328px;">名片、易拉宝等46种精选品类，品质保障</div>
          <div class="middle_1_left_btn" @click="pay_fun('vip_666')">开通立享</div>
        </div>

        <video
          class="middle_1_right"
        
          :src="videoSrc[3]"
          :poster="videoImg"
          :muted="muteStatus"
          :autoplay="playStatus"
          :loop="loopPlay"
        >your browser does not support the video tag</video>
      </div>
      <div class="middle_2"  >
        <video
          style="width:640px; height:304px;"
          class="middle_2_left_2"
          :src="videoSrc[4]"
          :poster="videoImg"
          :muted="muteStatus"
          :autoplay="playStatus"
          :loop="loopPlay"
        >your browser does not support the video tag</video>
        <div class="middle_2_right" style="width:288px; ">
          <div class="middle_2_right_title" style="width:233px;">
            <div class="middle_2_right_title_1" style="width:155px;">上传空间</div>
            <div class="middle_2_right_title_2" style="width:72px;margin-left:8px;">16G</div>
          </div>
          <div class="middle_2_right_des" style="width:288px;">团队全员标配，更大空间，更多自由</div>
          <div class="middle_2_right_btn" @click="pay_fun('vip_666')">开通立享</div>
        </div>
      </div>
    </div>
    <!----------bottom--------bottom---------bottom----------bottom-----------bottom----------bottom  -->
    <div class="bottom">
      <div class="bottom_ques">
        <img class="bottom_ques_title_img" src="./img/common_problem.png" alt>
        <div class="bottom_ques_conts">
          <div class="bottom_ques_cont">
            <h4 class="bottom_ques_cont_q" style="width:309px">企业版权VIP和个人VIP的区别是什么？</h4>
            <div class="bottom_ques_cont_a">额外的1000款可商用字体，40万可商用图片，签订商业授权书，缩减设计成本80%以上，避免侵权。</div>
          </div>
          <div class="bottom_ques_cont" style="margin-left:80px;">
            <h6 class="bottom_ques_cont_q" style="width:421px">已经是个人VIP, 添加企业版权VIP权限, 有什么影响？</h6>
            <div
              class="bottom_ques_cont_a"
            >没有影响，被添加的企业用户会直接变成企业版权VIP的权限。退出企业版权VIP后，依旧是个人VIP。企业版权VIP包含个人VIP的所有权益。</div>
          </div>
          <div class="bottom_ques_cont">
            <h6 class="bottom_ques_cont_q" style="width:504px;">怎么申请发票？申请成功后一般几天能收到？发票类型是什么？</h6>
            <div
              class="bottom_ques_cont_a"
            >鼠标移动至右上角头像，点击订单中心，可以开具发票。申请成功后的15个工作日内为您开出。发票类型为：增值税普通发票。</div>
          </div>
          <div class="bottom_ques_cont" style="margin-left:80px;">
            <h6 class="bottom_ques_cont_q" style="width:378px;">公司成员离职了，账号里面的设计会被删除吗？</h6>
            <div class="bottom_ques_cont_a">删除成员后，该成员在团队内的设计会被保留，不受影响。</div>
          </div>
          <div class="bottom_ques_cont">
            <h6 class="bottom_ques_cont_q" style="width:317px;">充值企业版权VIP后，成员在哪里添加？</h6>
            <div class="bottom_ques_cont_a">进入企业主页（右上角头像下拉框中），在团队管理页面中，将邀请链接发送给公司成员进行申请，同意申请，即可添加。</div>
          </div>
          <div class="bottom_ques_cont" style="margin-left:80px;">
            <h6 class="bottom_ques_cont_q" style="width:342px;">团队内的成员都可以创建并且删除设计吗？</h6>
            <div
              class="bottom_ques_cont_a"
            >团队内的成员都可以创建团队设计。团队内仅有管理员和设计师可以删除设计，主账号管理者可以通过团队管理，为成员添加权限。</div>
          </div>
        </div>
      </div>

      <div class="bottom_rule">
        <img class="bottom_rule_title_img" src="./img/activity_rules.png" alt>
        <div class="bottom_rule_conts">
          <div class="bottom_rule_cont">1、本次活动为企业版权VIP优惠活动，价格为促销价格，支付后不予退款，请仔细核对后购买；</div>
          <div class="bottom_rule_cont">2、本次活动不会对活动外的支付行为予以退款及额外赔偿；</div>
          <div class="bottom_rule_cont">3、商业授权仅限单一企业使用，请确认好后在申请商业授权书时填写；</div>
          <div
            class="bottom_rule_cont"
            style="display:flex;flex-direction:row;justify-content: flex-start;"
          >
            <div class="bottom_rule_cont_1">4、购买企业版权VIP后,添加微信号：</div>
            <div class="bottom_rule_cont_2">Chuangkit007</div>
            <div class="bottom_rule_cont_1">，即可享受尊贵VIP级别客服服务；</div>
          </div>
          <div class="bottom_rule_cont">5、在法律允许的范围内，本活动的最终解释权归创客贴所有。</div>
        </div>
      </div>
    </div>
    <img class="bottom_xuanfu" src="./img/bottom_xuanfu.png" alt="底部悬浮框">

    <!-- --------支付弹窗！！！-------支付弹窗！！！----支付弹窗！！！--------支付弹窗！！！------支付弹窗！！！-- -->
    <lt-modal v-model="show1">
      <div class="container1">
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
      videoSrc: [
        "../../../static/vedio/template.mp4",
        "../../../static/vedio/font.mp4",
        "../../../static/vedio/pic.mp4",
        "../../../static/vedio/yinshua.mp4",
        "../../../static/vedio/upload.mp4"
      ],
      videoImg: "",
      playStatus: "",
      loopPlay: true,
      muteStatus: true,
      isMute: true,
      isPlay: false,
      show1: false,
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
    pay_fun: function(event) {
      console.log("pay_fun传入参数：", event);
      this.show1 = true;
    },
    close_pay: function() {
      console.log("关闭支付弹窗");
    }
  }
};
</script>

<style lang="less" scoped>
@import "index";
</style>
