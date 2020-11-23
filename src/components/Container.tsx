import React, { ReactNode } from "react";
/* eslint-disable prettier/prettier */
import {
    Dimensions, Image, StyleSheet,
    StatusBar
} from "react-native";

import theme, { Box } from "./Theme";

const { width } = Dimensions.get("window");
export const assets = [require("./assets/patterns/1.png")];

const aspectRatio = (2400 / 3200);
const height = width * aspectRatio;

const styles = StyleSheet.create({
    patterns: {
        borderBottomLeftRadius: theme.borderRadii.xl,
        height: height * 0.61,
        overflow: "hidden",
    },
    img: {
        width,
        height,
        borderBottomLeftRadius: theme.borderRadii.xl,
    },
});

interface ContainerProps {
    children: ReactNode;
    footer: ReactNode;
}

const Container = ({ children, footer }: ContainerProps) => {

    return (

        <Box flex={1} backgroundColor="title">
            <StatusBar barStyle="light-content" />
            <Box backgroundColor="white">
                <Box style={styles.patterns}>
                    <Image source={assets[0]} style={styles.img} />
                </Box>
            </Box>
            <Box flex={1} overflow="hidden">
                <Image
                    source={assets[0]}
                    style={[styles.img, { ...StyleSheet.absoluteFillObject, top: -height * 0.61 }]}
                />
                <Box flex={1} borderRadius="xl" borderTopLeftRadius={0} backgroundColor="white">
                    {children}
                </Box>
            </Box>
            <Box backgroundColor="title" paddingTop="m">
                {footer}
                <Box />
            </Box>
        </Box>
    );
};

export default Container;
