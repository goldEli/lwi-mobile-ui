import React from "react";
// import { AtButton } from "taro-ui";
// import { View } from "@tarojs/components/dist-h5/react";
// import "taro-ui/dist/style/components/button.scss";
import Taro, { Component } from "@tarojs/taro";
// 引入 Swiper, SwiperItem 组件
import { Swiper, SwiperItem, View, Image } from "@tarojs/components";

interface IImgUrlItem {
  uid: string;
  name: string;
  status: "done";
  url: string;
}

interface IImgListItem {
  id: string;
  title: string;
  desc: string;
  link: string;
  imgUrl: IImgUrlItem[];
}

export interface IPhotoAdsProps {
  template?: "carousel" | "oneInARow";
  borderRadius?: number;
  paddingX?: number;
  imgList?: IImgListItem[];
}

const PhotoAds: React.FC<IPhotoAdsProps> = (props) => {
  return (
    <View
      style={{
        width: "100%",
        margin: `0 ${props.paddingX}px`,
      }}
    >
      <Swiper
        indicatorColor="#999"
        indicatorActiveColor="#333"
        circular
        indicatorDots
        autoplay
      >
        {props?.imgList?.map((item) => {
          return (
            <SwiperItem>
              <Image
                style={{
                  borderRadius: `${props.borderRadius}px`,
                }}
                mode="aspectFit"
                src={item.imgUrl[0].url}
              />
            </SwiperItem>
          );
        })}
      </Swiper>
    </View>
  );
};

PhotoAds.defaultProps = {
  template: "carousel",
  imgList: [
    {
      id: "1",
      title: "首页banner",
      desc: "首页banner",
      link: "http://www.liweijia.com",
      imgUrl: [
        {
          uid: "001",
          name: "image.png",
          status: "done",
          url: "http://49.234.61.19/uploads/1_1740c6fbcd9.png",
        },
      ],
    },
    {
      id: "2",
      title: "专题推荐",
      desc: "专题推荐",
      link: "http://www.liweijia.com",
      imgUrl: [
        {
          uid: "001",
          name: "image.png",
          status: "done",
          url: "http://49.234.61.19/uploads/1_1740c6fbcd9.png",
        },
      ],
    },
  ],
  borderRadius: 3,
  paddingX: 30,
};

export default PhotoAds;
