import React from "react";
import { Swiper, SwiperItem, View, Image } from "@tarojs/components";
import { IImgListItem } from "../type";
import Taro from "@tarojs/taro";
import JumpToPageWapper from "../JumpToPageWapper";

export interface IPhotoAdsProps {
  template?: "carousel" | "oneInARow";
  borderRadius?: number;
  paddingX?: number;
  imgList?: IImgListItem[];
  autoplay?: boolean;
  skin: string;
}

const PhotoAds: React.FC<IPhotoAdsProps> = (props) => {
  return (
    <View
      className="lwj-photo-ads"
      style={{
        width: "100%",
        padding: `0 ${props.paddingX}px`,
        boxSizing: "border-box",
      }}
    >
      {props.template === "carousel" ? (
        <Swiper
          circular
          autoplay={props.autoplay}
        >
          {props?.imgList?.map((item) => {
            return (
              <SwiperItem key={item.id}>
                <JumpToPageWapper
                  wxapplink={item.wxapplink}
                  clickHref={item.clickHref}
                >
                  <Image
                    className="swiper-img"
                    style={{
                      borderRadius: `${props.borderRadius}px`,
                    }}
                    mode="widthFix"
                    src={item?.imgUrl[0]?.url}
                  />
                </JumpToPageWapper>
              </SwiperItem>
            );
          })}
        </Swiper>
      ) : (
        <View style={{ display: "flex", flexDirection: "column" }}>
          {props?.imgList?.map((item) => {
            return (
              <JumpToPageWapper
                wxapplink={item.wxapplink}
                clickHref={item.clickHref}
              >
                <Image
                  className="normal-img"
                  style={{
                    borderRadius: `${props.borderRadius}px`,
                  }}
                  mode="widthFix"
                  key={item.id}
                  src={item?.imgUrl[0]?.url}
                  onClick={() => {
                    item?.wxapplink &&
                      Taro.navigateTo({
                        url: item?.wxapplink,
                      });
                  }}
                />
              </JumpToPageWapper>
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
  autoplay: true,
};

export default PhotoAds;
