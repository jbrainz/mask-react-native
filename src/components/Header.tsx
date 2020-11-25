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
    }

}

const Header = ({ title, left, right }: HeaderProps) => {
    return (
        <Box
            paddingHorizontal="m"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            marginTop="l">
            <RoundedIconButton
                size={24}
                name={left.icon}
                color="white"
                backgroundColor="title"
                onPress={left.onPress}
            />
            <Text variant="header" color="white">{title.toUpperCase()}</Text>
            <RoundedIconButton
                size={24}
                name={right.icon}
                color="white"
                backgroundColor="title"
                onPress={right.onPress}
            />
        </Box>
    );
};

export default Header;
