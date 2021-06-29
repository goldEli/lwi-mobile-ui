import React, { useState } from "react";
import { View, Swiper } from "@tarojs/components";
import { SwiperProps } from "@tarojs/components/types/Swiper";
import "./index.scss";
interface ISwiperProps extends SwiperProps {
  disableDot?: boolean;
  pageNum?: number;
  skin: string
}
const LwjSwiper: React.FC<ISwiperProps> = (props) => {
  const { disableDot, pageNum = 1, children, skin } = props;
  const [currentPage, setCurrentPage] = useState(0);
  const onChange = (e) => {
    setCurrentPage(e.detail?.current);
  };
  return (
    <View className={`${skin} banner`}>
      <Swiper {...props} onChange={onChange} indicatorDots={false}>
        {children}
      </Swiper>
      {/* 自定义dot */}
      {!disableDot && pageNum > 1 && (
        <View className={"dots"}>
          {new Array(pageNum).fill("").map((_, index) => {
            return (
              <View
                key={index}
                className={`${currentPage === index && "bg-active"} dot`}
              ></View>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default LwjSwiper;
