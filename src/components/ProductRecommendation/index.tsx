import React from "react";
import { View, Image, Text } from "@tarojs/components";
import { IProductListItem } from "../type";
import "../../styles/components/ProductRecommendation.scss";
import classnames from "classnames";

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
                className="list-item-img"
                style={{ borderRadius: `${props.borderRadius}px` }}
              >
                <Image
                  style={{
                    width: "100%",
                    height: "auto",
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

// const imgList = Array(6)
//   .fill(0)
//   .map((item, idx) => {
//     return {
//       id: idx + "",
//       title: "首页" + idx,
//       desc: "首页banner" + idx,
//       link: "http://www.liweijia.com",
//       data: {
//         price: 1 + idx,
//         sales_volume: 100 + idx,
//       },
//       imgUrl: [
//         {
//           uid: "001" + idx,
//           name: "image.png" + idx,
//           status: "done",
//           url:
//             "https://www.businessinsider.in/thumb/msid-80010616,width-640,resizemode-4,imgsize-409906/Happy-New-Year-2021-Images-for-Whatsapp-and-Facebook-profile-picture.jpg",
//         },
//       ],
//     };
//   });
const productList = [
  {
    id: "10408784",
    name: "zmf租户在供应商列表修改商品价格，未同步到销售商品",
    cover_path:
      "https://static.liweijia.com/site-php/upload/commodity-goods/3ba67429651a838f0b87ecdce8d1c8e0.png",
    price: 100,
    sales_volume: 3,
    description: "",
  },
  {
    id: "10357209",
    name: "发票相关商品",
    cover_path:
      "http://webimg-handle.liweijia.com/lwj_shop/upload/commodity-goods/406348ddabd678f3fdb01f9fc104062e.jpg",
    price: 200,
    sales_volume: 4,
    description: "",
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
