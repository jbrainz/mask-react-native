/* eslint-disable prettier/prettier */
import React from "react";
import { Feather as Icon } from "@expo/vector-icons";

import { Box, Theme, Text } from "./Theme";

export interface RoundedIconProps {
    name: string;
    size: number;
    color: keyof Theme["colors"];
    backgroundColor: keyof Theme["colors"];
    iconRatio: number;
}

const RoundedIcon = ({ name, size, color, backgroundColor, iconRatio }: RoundedIconProps) => {
    const iconSize = size * iconRatio;
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

RoundedIcon.defaultProps = {
    iconRatio: 0.7,
};

export default RoundedIcon;
