import React from "react";
import { Swiper, SwiperItem, View, Image } from "@tarojs/components";

interface IImgUrlItem {
  uid: string;
  name: string;
  status: string;
  url: string;
}

interface IImgListItem {
  id: string;
  title: string;
  desc: string;
  link: string;
  type?: number;
  clickHref?: string;
  openType?: string;
  wxapplink?: string;

  imgUrl: IImgUrlItem[];
}

export interface IPhotoAdsProps {
  template?: "carousel" | "oneInARow";
  borderRadius?: number;
  paddingX?: number;
  imgList?: IImgListItem[];
  autoplay?: boolean;
}

const PhotoAds: React.FC<IPhotoAdsProps> = (props) => {
  return (
    <View
      className="lwj-photo-ads"
      style={{
        width: "100%",
        padding: `0 ${props.paddingX}px`,
      }}
    >
      {props.template === "carousel" ? (
        <Swiper
          indicatorColor="#999"
          indicatorActiveColor="#333"
          circular
          indicatorDots
          autoplay={props.autoplay}
        >
          {props?.imgList?.map((item) => {
            return (
              <SwiperItem key={item.id}>
                <Image
                  style={{
                    borderRadius: `${props.borderRadius}px`,
                    width: "100%",
                    height: "auto",
                  }}
                  // mode="aspectFit"
                  src={item.imgUrl[0].url}
                />
              </SwiperItem>
            );
          })}
        </Swiper>
      ) : (
        <View style={{ display: "flex", flexDirection: "column" }}>
          {props?.imgList?.map((item) => {
            return (
              <Image
                style={{
                  borderRadius: `${props.borderRadius}px`,
                  width: "100%",
                  height: "auto",
                }}
                key={item.id}
                src={item.imgUrl[0].url}
              />
            );
          })}
        </View>
      )}
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
  autoplay: false,
};

export default PhotoAds;
