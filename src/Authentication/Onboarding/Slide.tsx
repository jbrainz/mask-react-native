/* eslint-disable prettier/prettier */
import React from "react";
import { View, Text, Dimensions, StyleSheet, Image } from "react-native";

const { width, height } = Dimensions.get("window");
export const SLIDER_HEIGHT = 0.61 * height;
export const BORDER_RADIUS = 75;
const styles = StyleSheet.create({
    container: {
        width: width,
    },
    titleContainer: {
        height: 100,
        justifyContent: "center",
    },
    titleStyle: {
        fontSize: 80,
        lineHeight: 80,
        fontFamily: "SFProText-Bold",
        color: "white",
        textAlign: "center",
    },
    picture: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined,
        borderBottomRightRadius: BORDER_RADIUS
    },
    underlay: { ...StyleSheet.absoluteFillObject, justifyContent: "flex-end" }
});
interface SlideProps {
    title: string;
    right?: boolean;
    picture: number;
}

const Slide = ({ title, right, picture }: SlideProps) => {
    const transform = [
        { translateY: (SLIDER_HEIGHT - 100) / 2 },
        { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
        { rotate: right ? "-90deg" : "90deg" }
    ]
    return (
        <View style={styles.container}>
            <View style={styles.underlay}>
                <Image source={picture} style={styles.picture} />
            </View>
            <View style={[styles.titleContainer, { transform }]}>
                <Text style={styles.titleStyle}>{title}</Text>
            </View>
        </View>
    );
};

export default Slide;
