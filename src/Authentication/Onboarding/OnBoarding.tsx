/* eslint-disable prettier/prettier */
import React, { useRef } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import Animated, { divide, Extrapolate, interpolate, multiply } from "react-native-reanimated";
import { interpolateColor, useScrollHandler } from "react-native-redash";

import { useTheme } from "../../components";
import { AuthNavigationProps } from "../../components/Navigation";
import { Theme, makeStyles } from "../../components/Theme";

import Slide, { SLIDER_HEIGHT } from "./Slide";
import Subslide from "./Subslide";
import Dot from "./Dot";

const { width } = Dimensions.get("window");


const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDER_HEIGHT,
    borderBottomRightRadius: theme.borderRadii.xl,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: theme.borderRadii.xl,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  }, underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end"
    , alignItems: "center",
    borderBottomRightRadius: theme.borderRadii.xl,
  },
}));

const slides = [
  {
    title: "Relaxed",
    color: "#F9A51E",
    subtitle: "Find Your outfits",
    description:
      "Confused about your outfit? Don't worry! Find the best outfit here!",
    picture: {
      src: require("../../../assets/img/fashion1.jpg"),
      width: 2523,
      height: 3758,
    },
  },
  {
    title: "Playful",
    color: "#88898E",
    subtitle: "Heat it First, Wear it First'",
    description:
      "Hating the clothes in your wardrobe? Explore hundreds of outfit ideas",
    picture: {
      src: require("../../../assets/img/fashion2.jpg"),
      width: 2791,
      height: 3744,
    },

  },
  {
    title: "Excentric",
    color: "#DAD8D9",
    subtitle: "Find Your outfits",
    description:
      "Confused about your outfit? Don't worry! Find the best outfit here!",
    picture: {
      src: require("../../../assets/img/fashion4.jpg"),
      width: 2738,
      height: 3898,
    },
  },
  {
    title: "Funky",
    color: "#FADCE4",
    subtitle: "Love Fun?",
    description:
      "Create your individual & unique style and look amazing everyday",
    picture: {
      src: require("../../../assets/img/fashion.jpg"),
      width: 1757,
      height: 2181,
    },
  },
];

export const assets = slides.map(slide => slide.picture.src);

const OnBoarding = ({ navigation }: AuthNavigationProps<"Onboarding">) => {
  const theme = useTheme();
  const usestyles = useStyles();
  const scroll = useRef<Animated.ScrollView>(null);
  const { scrollHandler, x } = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });
  return (
    <View style={usestyles.container}>
      <Animated.View style={[usestyles.slider, { backgroundColor }]}>
        {slides.map(({ picture }, index) => {
          const opacity = interpolate(x, {
            inputRange: [(index - 0.5) * width, index * width, (index + 0.5) * width],
            outputRange: [0, 1, 0],
            extrapolate: Extrapolate.CLAMP,
          });
          return (
            <Animated.View style={[usestyles.underlay, { opacity }]} key={index}>
              <Image source={picture.src}
                style={{
                  borderTopLeftRadius: theme.borderRadii.xl,
                  borderBottomRightRadius: theme.borderRadii.xl,
                  width: width,
                  height: ((width - theme.borderRadii.xl) * picture.height) / picture.width
                }}
              />
            </Animated.View>
          )
        })}

        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...scrollHandler}
        >
          {slides.map(({ title, picture }, index) => (
            <Slide key={index} {...{ title, picture }} right={!!(index % 2)} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={usestyles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <View style={usestyles.footerContent}>
          <View style={usestyles.pagination}>
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
            {slides.map(({ subtitle, description }, index) => {
              const last = index === slides.length - 1;
              return (
                <Subslide
                  key={index}
                  onPress={() => {
                    if (last) {
                      navigation.navigate("Welcome");
                    } else {
                      scroll.current
                        ?.getNode()
                        .scrollTo({ x: width * (index + 1), animated: true });
                    }
                  }}
                  {...{ subtitle, description, last }}
                />);
            })}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default OnBoarding;
