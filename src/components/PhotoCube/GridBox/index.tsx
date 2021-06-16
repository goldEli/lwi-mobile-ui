import React from "react";
import { View, Image } from "@tarojs/components";
import { IImgListItem } from "../../type";
import classnames from "classnames";
import { IPhotoCubeProps } from "../index";
import Taro from "@tarojs/taro";


type TTemplate = Required<IPhotoCubeProps>["template"];
interface IGridBoxProps {
  imagePadding?: number;
  imgList?: IImgListItem[];
  template?: TTemplate;
  borderRadius?: number;
}

const NUM_MAP: { [key in TTemplate]: number } = {
  twoInARow: 2,
  threeInARow: 3,
  fourInARow: 4,
  upOneDownThree: 4,
  leftTwoRightTwo: 4,
  leftOneRightTwo: 3,
  leftOneIRightThree: 4,
};

const GridBox: React.FC<IGridBoxProps> = (props) => {
  const classes = classnames({
    two_in_a_row: props.template === "twoInARow",
    three_in_a_row: props.template === "threeInARow",
    four_in_a_row: props.template === "fourInARow",
    up_one_down_three: props.template === "upOneDownThree",
    left_two_right_two: props.template === "leftTwoRightTwo",
    left_one_right_two: props.template === "leftOneRightTwo",
    left_one_right_three: props.template === "leftOneIRightThree",
  });
  const isTowRow =
    props.template &&
    [
      "upOneDownThree",
      "leftTwoRightTwo",
      "leftOneRightTwo",
      "leftOneIRightThree",
    ].includes(props.template);
  const columnGap = `${props.imagePadding}px`;
  const rowGap = `${isTowRow ? props.imagePadding : 0}px`;
  const num = props.template ? NUM_MAP[props.template] : 0;
  return (
    <View
      style={{
        columnGap,
        rowGap,
      }}
      className={classes}
    >
      {props?.imgList?.slice(0, num)?.map((item, idx) => {
        return (
          <Image
            style={{
              overflow: "hidden",
              borderRadius: `${props.borderRadius}px`,
            }}
            mode="aspectFit"
            onClick={() => {
              item?.wxapplink && Taro.navigateTo({
                url: item?.wxapplink 
              });
            }}
            key={item.id}
            className={"item-img item" + idx}
            src={item?.imgUrl[0]?.url}
          />
        );
      })}
    </View>
  );
};

GridBox.defaultProps = {
  template: "twoInARow",
  imagePadding: 0,
  borderRadius: 3,
};

export default GridBox;
