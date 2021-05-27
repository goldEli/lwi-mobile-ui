import React from "react";
import { View, Image, Text } from "@tarojs/components";
import { IImgListItem } from "../type";
import "../../styles/components/ProductRecommendation.scss";
import classnames from "classnames";

export interface IProductRecommendationProps {
  enableProductDesc: boolean;
  enableProductPrice: boolean;
  enableProductSales: boolean;
  enableProductTitle: boolean;
  borderRadius?: number;
  imgList?: IImgListItem[];
  template?: "twoInARow" | "horizontalScrolling";
}

const ProductRecommendation: React.FC<IProductRecommendationProps> = (
  props
) => {
  const classes = classnames("list", {
    wrap: props.template === "twoInARow",
    "scroll-x": props.template === "horizontalScrolling",
  });
  return (
    <View className="lwj-product-recommendation">
      <View className={classes}>
        {props?.imgList?.map((img) => {
          return (
            <View className="list-item">
              <View
                className="list-item-img"
                style={{ borderRadius: `${props.borderRadius}px` }}
              >
                <Image
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  src={img?.imgUrl[0]?.url}
                />
              </View>
              <View className="list-item-info">
                {props.enableProductTitle && (
                  <View className="title">{img.title}</View>
                )}
                {props.enableProductDesc && (
                  <View className="desc">{img.desc}</View>
                )}
                {props.enableProductPrice && (
                  <View className="price">{`￥ ${img?.data?.price}`}</View>
                )}
                {props.enableProductSales && (
                  <View className="sales_volume">{`已售 ${img?.data?.sales_volume}`}</View>
                )}
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const imgList = Array(6)
  .fill(0)
  .map((item, idx) => {
    return {
      id: idx + "",
      title: "首页" + idx,
      desc: "首页banner" + idx,
      link: "http://www.liweijia.com",
      data: {
        price: 1 + idx,
        sales_volume: 100 + idx,
      },
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

ProductRecommendation.defaultProps = {
  borderRadius: 3,
  imgList,
  template: "twoInARow",
  enableProductDesc: true,
  enableProductPrice: true,
  enableProductSales: true,
  enableProductTitle: true,
};

export default ProductRecommendation;
