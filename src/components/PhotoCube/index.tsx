import React from "react";
import { View, Image } from "@tarojs/components";
import { IImgListItem } from "../type";
import "../../styles/components/PhotoCube.scss";
import GridBox from "./GridBox";

export interface IPhotoCubeProps {
  /**
    | "twoInARow" 一行二个
    | "threeInARow" 一行三个
    | "fourInARow" 一行四个
    | "upOneDownThree" 上一下三
    | "leftTwoRightTwo" 左二右二
    | "leftOneRightTwo" 左一右二
    | "leftOneIRightThree" 左一右三
   */
  template?:
    | "twoInARow"
    | "threeInARow"
    | "fourInARow"
    | "upOneDownThree"
    | "leftTwoRightTwo"
    | "leftOneRightTwo"
    | "leftOneIRightThree";
  borderRadius?: number;
  paddingX?: number;
  imgList?: IImgListItem[];
  imagePadding?: number;
}

const PhotoCube: React.FC<IPhotoCubeProps> = (props) => {
  return (
    <View
      className="lwj-photo-cube"
      style={{
        padding: `0 ${props.paddingX}px`,
      }}
    >
      <GridBox
        template={props.template}
        imgList={props.imgList}
        imagePadding={props.imagePadding || 0}
      />
    </View>
  );
};

const imgList = Array(10)
  .fill(0)
  .map((_, idx) => {
    return {
      id: "1" + idx,
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
    };
  });
PhotoCube.defaultProps = {
  template: "twoInARow",
  borderRadius: 3,
  paddingX: 20,
  imagePadding: 30,
  imgList,
};

export default PhotoCube;
