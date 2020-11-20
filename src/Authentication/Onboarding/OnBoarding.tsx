/* eslint-disable prettier/prettier */
import React, { useRef } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Animated, { divide, multiply } from "react-native-reanimated";
import { interpolateColor, useScrollHandler } from "react-native-redash";

import Slide, { SLIDER_HEIGHT, BORDER_RADIUS } from "./Slide";
import Subslide from "./Subslide";
import Dot from "./Dot";

const { width } = Dimensions.get("window");


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDER_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  }
});
const slides = [
  {
    title: "Relaxed",
    color: "#F9A51E",
    subtitle: "Find Your outfits",
    description:
      "Confused about your outfit? Don't worry! Find the best outfit here!",
    picture: require("../../../assets/img/fashion1.jpg"),
  },
  {
    title: "Playful",
    color: "#B0B1B6",
    subtitle: "Heat it First, Wear it First'",
    description:
      "Hating the clothes in your wardrobe? Explore hundreds of outfit ideas",
    picture: require("../../../assets/img/fashion2.jpg"),

  },
  {
    title: "Excentric",
    color: "#DAD8D9",
    subtitle: "Find Your outfits",
    description:
      "Confused about your outfit? Don't worry! Find the best outfit here!",
    picture: require("../../../assets/img/fashion4.jpg"),
  },
  {
    title: "Funky",
    color: "#FAE9E1",
    subtitle: "Love Fun?",
    description:
      "Create your individual & unique style and look amazing everyday",
    picture: require("../../../assets/img/fashion.jpg"),
  },
];

const OnBoarding = () => {
  const scroll = useRef<Animated.ScrollView>(null);
  //TODO: scrollHandler useScrollHandler?
  const { scrollHandler, x } = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...scrollHandler}
        >
          {/* <Slide title="Relaxed" />
          <Slide title="Playful" right />
          <Slide title="Excentric" />
          <Slide title="Funky" right /> */}
          {slides.map(({ title, picture }, index) => (
            <Slide key={index} {...{ title, picture }} right={!!(index % 2)} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <View style={styles.footerContent}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (<Dot key={index} currentIndex={divide(x, width)}
              {...{ index }} />))}
          </View>
          <Animated.View
            style={{
              flex: 1,
              flexDirection: "row",
              transform: [{ translateX: multiply(x, -1) }],
              width: width * slides.length,
            }}
          >
            {slides.map(({ subtitle, description }, index) => (
              <Subslide
                key={index}
                onPress={() => {
                  if (scroll.current) {
                    scroll.current
                      .getNode()
                      .scrollTo({ x: width * (index + 1), animated: true });
                  }
                }}
                last={index === slides.length - 1}
                {...{ subtitle, description }}
              />
            ))}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default OnBoarding;
