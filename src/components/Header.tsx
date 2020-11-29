/* eslint-disable prettier/prettier */
import React from "react";

import { Box, Text } from "./Theme";
import RoundedIconButton from "./RoundedIconButton";


interface HeaderProps {
    left: {
        icon: string;
        onPress: () => void;
    },
    title: string;
    right: {
        icon: string;
        onPress: () => void;
    };
    dark: boolean;
}

const Header = ({ title, left, right, dark }: HeaderProps) => {
    const color = dark ? "white" : "title";
    const backgroundColor = dark ? "title" : "greyLight";
    return (
        <Box
            paddingHorizontal="m"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            marginTop="l">
            <RoundedIconButton
                size={44}
                name={left.icon}
                {...{ color, backgroundColor }}
                onPress={left.onPress}
                iconRatio={0.4}
            />
            <Text variant="header" {...{ color }}>{title.toUpperCase()}</Text>
            <RoundedIconButton
                size={44}
                name={right.icon}
                {...{ color, backgroundColor }}
                onPress={right.onPress}
                iconRatio={0.4}
            />
        </Box>
    );
};

Header.defaultProps = {
    dark: false,
};

export default Header;
