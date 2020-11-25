import React, { ReactNode } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
/* eslint-disable prettier/prettier */
import {
    Dimensions, Image, StyleSheet,
    Platform
} from "react-native";
import Constants from "expo-constants";

import { Box, useTheme } from "./Theme";



const { width, height: wHeight } = Dimensions.get("window");
export const assets = [
    require("./assets/patterns/1.png"),
    require("./assets/patterns/2.png"),
    require("./assets/patterns/3.png")
] as const;


const aspectRatio = (2400 / 3200);
const height = width * aspectRatio;

interface ContainerProps {
    children: ReactNode;
    footer: ReactNode;
    pattern: 0 | 1 | 2;
}

const Container = ({ children, footer, pattern }: ContainerProps) => {
    const theme = useTheme();
    const asset = assets[pattern];
    return (
        <KeyboardAwareScrollView scrollEnabled={false}>
            <Box height={wHeight + (Platform.OS === "android" ? Constants.statusBarHeight : 0)} backgroundColor="title">
                <Box backgroundColor="white">
                    <Box borderBottomLeftRadius="xl" height={height * 0.61} overflow="hidden">
                        <Image source={asset}
                            style={{ width, height, borderBottomLeftRadius: theme.borderRadii.xl }} />
                    </Box>
                </Box>
                <Box flex={1} overflow="hidden">
                    <Image
                        source={asset}
                        style={{
                            width, height,
                            borderBottomLeftRadius: theme.borderRadii.xl,
                            ...StyleSheet.absoluteFillObject, top: -height * 0.61,
                        }}
                    />
                    <Box flex={1} borderRadius="xl" borderTopLeftRadius={0}
                        justifyContent="center" padding="xl" backgroundColor="white">
                        <KeyboardAwareScrollView style={{ flex: 1 }}>
                            {children}
                        </KeyboardAwareScrollView>
                    </Box>
                </Box>
                <Box backgroundColor="title" paddingTop="s">
                    {footer}
                    <Box />
                </Box>
            </Box>
        </KeyboardAwareScrollView>
    );
};

export default Container;
