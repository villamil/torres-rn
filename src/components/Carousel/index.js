import React from "react";
import { Image, View } from "react-native";
import Carousel from "react-native-snap-carousel";

export default class MyCarousel extends React.Component {
  _renderItem({ item, index }) {
    return (
      <View>
        <Image style={{ width: 140, height: 140 }} source={item.src} />
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
        sliderWidth={500}
        itemWidth={150}
        loop={true}
        autoplay={true}
        loopClonesPerSide={5}
      />
    );
  }
}
