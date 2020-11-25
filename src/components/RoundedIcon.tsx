/* eslint-disable prettier/prettier */
import React from "react";
import { Feather as Icon } from "@expo/vector-icons";

import { Box, Theme, Text } from "./Theme";

export interface RoundedIconProps {
    name: string;
    size: number;
    color: keyof Theme["colors"];
    backgroundColor: keyof Theme["colors"];
}

const RoundedIcon = ({ name, size, color, backgroundColor }: RoundedIconProps) => {
    const iconSize = size * 0.7;
    return (
        <Box
            marginRight="s"
            borderRadius="m"
            height={size}
            width={size}
            justifyContent="center"
            alignItems="center"
            style={{ borderRadius: size / 2 }}
            {...{ backgroundColor }}
        >
            <Text style={{ height: iconSize, width: iconSize, textAlign: "center" }} {...{ color }}>
                <Icon
                    {...{ name }}
                    size={iconSize}
                />
            </Text>
        </Box>
    );
};

export default RoundedIcon;
