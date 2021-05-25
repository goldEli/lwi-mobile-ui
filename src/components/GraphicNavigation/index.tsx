import React from "react";
import { View, Image, Text } from "@tarojs/components";
import { IImgListItem } from "../type";
import "../../styles/components/GraphicNavigation.scss";

export interface IGraphicNavigationProps {
  enableCustomizedGoods?: boolean;
  enableMyOrder?: boolean;
  enableShareMoney?: boolean;
  enableMemberInvitation?: boolean;
  enableStareBusinessCard?: boolean;
  enableAIDesigner?: boolean;
  paddingX?: number;
  imgList?: IImgListItem[];
}

const GraphicNavigation: React.FC<IGraphicNavigationProps> = (props) => {
  const len = props?.imgList?.length || 0;
  const spaceBetween = len <= 4;
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
        {props?.imgList?.map((img) => {
          return (
            <View className="list-item">
              <View className="list-item-img">
                <Image
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  src={img?.imgUrl[0]?.url}
                />
              </View>
              <View className="list-item-title">
                <Text>{img.title}</Text>
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
      title: "首页" + idx,
      desc: "首页banner" + idx,
      link: "http://www.liweijia.com",
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
};

export default GraphicNavigation;
