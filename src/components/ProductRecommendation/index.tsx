import React from "react";
import { View, Image, Text } from "@tarojs/components";
import { IProductListItem } from "../type";
import "../../styles/components/ProductRecommendation.scss";
import classnames from "classnames";
import Taro from "@tarojs/taro";

export interface IProductRecommendationProps {
  enableProductDesc?: boolean;
  enableProductPrice?: boolean;
  enableProductSales?: boolean;
  enableProductTitle?: boolean;
  borderRadius?: number;
  productList?: IProductListItem[];
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
        {props?.productList?.map((img) => {
          return (
            <View className="list-item">
              <View
                className="list-item-img-box"
                style={{ borderRadius: `${props.borderRadius}px` }}
              >
                <Image
                  className="list-item-img"
                  mode="heightFix"
                  onClick={() => {
                    img?.wxapplink &&
                      Taro.navigateTo({
                        url: img?.wxapplink,
                      });
                  }}
                  src={img.cover_path}
                />
              </View>
              <View className="list-item-info">
                {props.enableProductTitle && (
                  <View className="title">{img.name}</View>
                )}
                {props.enableProductDesc && (
                  <View className="desc">{img.description}</View>
                )}
                {props.enableProductPrice && (
                  <View className="price">{`￥ ${img.price}`}</View>
                )}
                {props.enableProductSales && (
                  <View className="sales_volume">{`已售 ${img.sales_volume}`}</View>
                )}
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const productList = [
  {
    id: "10408784",
    name: "zmf租户在供应商列表修改商品价格，未同步到销售商品",
    cover_path:
      "https://static.liweijia.com/site-php/upload/commodity-goods/3ba67429651a838f0b87ecdce8d1c8e0.png",
    price: 100,
    sales_volume: 3,
    description: "",
    wxapplink: "",
  },
  {
    id: "10357209",
    name: "发票相关商品",
    cover_path:
      "http://webimg-handle.liweijia.com/lwj_shop/upload/commodity-goods/406348ddabd678f3fdb01f9fc104062e.jpg",
    price: 200,
    sales_volume: 4,
    description: "",
    wxapplink: "",
  },
];

ProductRecommendation.defaultProps = {
  borderRadius: 3,
  productList,
  template: "twoInARow",
  enableProductDesc: true,
  enableProductPrice: true,
  enableProductSales: true,
  enableProductTitle: true,
};

export default ProductRecommendation;
