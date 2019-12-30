import React from "react";
import { Image, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default class MyCarousel extends React.Component {
  _renderItem({ item, index }) {
    return (
      <View>
        <Image
          style={{ width: wp("35%"), height: hp("20%") }}
          source={item.src}
        />
      </View>
    );
  }

  render() {
    return (
      <Carousel
        ref={c => {
          this._carousel = c;
        }}
        data={this.props.entries}
        renderItem={this._renderItem}
        sliderWidth={wp("100%")}
        itemWidth={wp("40%")}
        loop={true}
        autoplay={true}
        loopClonesPerSide={5}
      />
    );
  }
}
