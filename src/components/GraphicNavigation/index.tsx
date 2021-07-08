import React from "react";
import { View, Image, Text } from "@tarojs/components";
import { IImgListItem } from "../type";
import JumpToPageWapper from "../JumpToPageWapper";

type TFn = () => void;
export interface IGraphicNavigationProps {
  enableCustomizedGoods?: boolean;
  enableMyOrder?: boolean;
  enableShareMoney?: boolean;
  enableMemberInvitation?: boolean;
  enableStareBusinessCard?: boolean;
  enableAIDesigner?: boolean;
  paddingX?: number;
  imgList?: IImgListItem[];
  isShowSystemNav: boolean;
  action?: {
    goToAI?: TFn;
    goToCustomizedGoods?: TFn;
    goToMyOrder?: TFn;
    goToShareMoney?: TFn;
    goToMemberInvitation?: TFn;
    goToStareBusinessCard?: TFn;
  };
}

const GraphicNavigation: React.FC<IGraphicNavigationProps> = (props) => {
  const len = props?.imgList?.length || 0;
  const systemNavs: {
    src: string;
    text: string;
    show?: boolean;
    clickFn?: () => void;
  }[] = [
    {
      src:
        "https://static.liweijia.com/sales/wx_app/assets/images/6799FF/index/index_ai_icon.png",
      text: "AI设计师",
      show: props.enableAIDesigner,
      clickFn: props?.action?.goToAI,
    },
    {
      src:
        "https://static.liweijia.com/sales/wx_app/assets/images/6799FF/index/index_qianbao_icon.png",
      text: "定制商品",
      show: props.enableCustomizedGoods,
      clickFn: props?.action?.goToCustomizedGoods,
    },
    {
      src:
        "https://static.liweijia.com/sales/wx_app/assets/images/6799FF/index/index_order_icon.png",
      text: "我的订单",
      show: props.enableMyOrder,
      clickFn: props?.action?.goToMyOrder,
    },
    {
      src:
        "https://static.liweijia.com/sales/wx_app/assets/images/6799FF/index/index_fenxiang_icon.png",
      text: "分享赚钱",
      show: props.enableShareMoney,
      clickFn: props?.action?.goToShareMoney,
    },
    {
      src:
        "https://static.liweijia.com/sales/wx_app/assets/images/6799FF/index/index_kaidian_icon.png",
      text: "会员邀请",
      show: props.enableMemberInvitation,
      clickFn: props?.action?.goToMemberInvitation,
    },
    {
      src:
        "https://static.liweijia.com/sales/wx_app/assets/images/6799FF/index/index_mingpian_icon.png",
      text: "店铺名片",
      show: props.enableStareBusinessCard,
      clickFn: props?.action?.goToStareBusinessCard,
    },
  ].filter((item) => props.isShowSystemNav && item.show);

  const spaceBetween = len + systemNavs.length <= 4;
  return (
    <View
      style={{
        padding: `0 ${props.paddingX}px`,
      }}
      className="lwj-graphic-naviation"
    >
      <View
        className="list"
        style={{
          justifyContent: spaceBetween ? "space-around" : "start",
          overflow: spaceBetween ? "hidden" : "scroll",
        }}
      >
        {systemNavs.map((item) => {
          return (
            <View
              className="list-item"
              onClick={() => {
                item.clickFn?.();
              }}
            >
              <View className="list-item-img-box">
                <Image
                  className="list-item-img"
                  mode="widthFix"
                  src={item.src}
                />
              </View>
              <View className="list-item-title">
                <Text>{item.text}</Text>
              </View>
            </View>
          );
        })}
        {props?.imgList?.map((img) => {
          return (
            <View className="list-item">
              <View className="list-item-img-box">
                <JumpToPageWapper
                  clickHref={img.clickHref}
                  wxapplink={img.wxapplink}
                >
                  <Image
                    className="list-item-img"
                    mode="widthFix"
                    src={img?.imgUrl[0]?.url}
                  />
                </JumpToPageWapper>
              </View>
              <View className="list-item-title">
                {img.title}
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const imgList = Array(40)
  .fill(0)
  .map((item, idx) => {
    return {
      id: idx + "",
      title: "首页发生了对方就开了阿斯顿福建安老师开发收到了放假啊老师" + idx,
      desc: "首页banner" + idx,
      link: "http://www.liweijia.com",
      wxapplink: "http://www.liweijia.com",
      imgUrl: [
        {
          uid: "001" + idx,
          name: "image.png" + idx,
          status: "done",
          url:
            "https://www.businessinsider.in/thumb/msid-80010616,width-640,resizemode-4,imgsize-409906/Happy-New-Year-2021-Images-for-Whatsapp-and-Facebook-profile-picture.jpg",
        },
      ],
    };
  });

GraphicNavigation.defaultProps = {
  // bgColor: "black",
  paddingX: 20,
  imgList,
  enableAIDesigner: false,
  enableCustomizedGoods: false,
  enableMemberInvitation: false,
  enableMyOrder: false,
  enableShareMoney: false,
  enableStareBusinessCard: false,
  isShowSystemNav: true,
};

export default GraphicNavigation;
