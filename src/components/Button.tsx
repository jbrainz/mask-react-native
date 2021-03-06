/* eslint-disable prettier/prettier */
// eslint-disable- prettier/prettier
import { useTheme } from "@shopify/restyle";
import React from "react";
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { Theme, Text } from "./Theme";


const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        height: 50,
        width: 245,
        justifyContent: "center",
        alignItems: "center",
    },
    label: {
        fontFamily: "SFProText-Semibold",
        fontSize: 15,
        textAlign: "center",

    },
});

interface ButtonProps {
    variant: "default" | "primary";
    label?: string;
    onPress: () => void;
}

const Button = ({ variant, label, onPress }: ButtonProps) => {
    const theme = useTheme<Theme>();
    const backgroundColor =
        variant === "primary" ? theme.colors.primary : theme.colors.grey;
    const color = variant === "primary" ? theme.colors.white : theme.colors.transparentButton;
    return (
        <RectButton style={[styles.container, { backgroundColor }]} {...{ onPress }}>
            {(
                <Text variant="button" style={[styles.label, { color }]}>{label}</Text>
            )}
        </RectButton>
    );
};

Button.defaultProps = { variant: "default" };

export default Button;
