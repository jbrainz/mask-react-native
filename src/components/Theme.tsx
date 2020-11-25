/* eslint-disable prettier/prettier */
import { createBox, createText, useTheme as useReTheme } from "@shopify/restyle"
import { ImageStyle, TextStyle, ViewStyle } from "react-native";


export const theme = {
    colors: {
        primary: "#2cb9b0",
        primaryLight: "#e7f9f7",
        title: "#0c0d34",
        body: "rgba(12, 13, 52, 0.7)",
        white: "white",
        grey: "rgba(12, 13,52, 0.05)",
        lightGray: "#f4f0ef",
        transparentButton: "#0c0d34",
        darkgrey: "#8a8d90",
        danger: "#ff0744",
        violet: "#7F00FF",
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    borderRadii: {
        s: 4,
        m: 10,
        l: 25,
        xl: 75,
    },
    textVariants: {
        hero: {
            fontSize: 80,
            lineHeight: 80,
            fontFamily: "SFProText-Bold",
            color: "white",
            textAlign: "center",
        },
        title1: {
            fontSize: 28,
            fontFamily: "SFProText-Semibold",
            color: "title",
        },
        title2: {
            fontSize: 24,
            lineHeight: 30,
            fontFamily: "SFProText-Semibold",
            color: "title"
        },
        body: {
            fontSize: 16,
            lineHeight: 24,
            fontFamily: "SFProText-Regular",
            color: "body",
        },
        button: {
            fontSize: 15,
            fontFamily: "SFProText-Regular",
            color: "body",
        }
    },
    breakpoints: {}
};

export type Theme = typeof theme;
export const Text = createText<Theme>();
export const Box = createBox<Theme>();
export const useTheme = () => useReTheme<Theme>();
//export default theme;
type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const makeStyles = <T extends NamedStyles<T>>(
    styles: (theme: Theme) => T
) => () => {
    const currentTheme = useTheme();
    return styles(currentTheme);
};
