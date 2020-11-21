import React, { ReactNode } from "react";
/* eslint-disable prettier/prettier */
import { Dimensions, Image, View, StyleSheet, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";


import theme from "./Theme";

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
    childeren: ReactNode;
    footer: ReactNode;
}

const Container = ({ childeren, footer }: ContainerProps) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.title }}>
            <StatusBar barStyle="light-content" />
            <View style={{ backgroundColor: "white" }}>
                <View style={styles.patterns}>
                    <Image source={assets[0]} style={styles.img} />
                </View>
            </View>
            <View
                style={{
                    flex: 1,
                    overflow: "hidden",
                }}
            >
                <Image
                    source={assets[0]}
                    style={[styles.img, { ...StyleSheet.absoluteFillObject, top: -height * 0.61 }]}
                />
                <View
                    style={{
                        flex: 1,
                        borderRadius: theme.borderRadii.xl,
                        borderTopLeftRadius: 0,
                        backgroundColor: "white",
                    }}
                >{childeren}
                </View>
            </View>
            <View style={{ backgroundColor: theme.colors.title, paddingTop: theme.spacing.m }}>
                {footer}
                <View style={{ height: insets.bottom }} />
            </View>
        </View>
    );
};

export default Container;
