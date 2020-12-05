/* eslint-disable prettier/prettier */
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "@shopify/restyle";
import React from "react";
import { RectButton } from "react-native-gesture-handler";

import { RoundedIcon } from "../../components";
import { HomeRoutes } from "../../components/Navigation";
import { Box, Theme, Text } from "../../components/Theme";


export interface DrawerItemProps {
    icon: string;
    color: keyof Theme["colors"];
    screen: keyof HomeRoutes;
    label: string;
}

const DrawerItem = ({ icon, color, screen, label }: DrawerItemProps) => {
    const theme = useTheme();
    const { navigate } = useNavigation<DrawerNavigationProp<HomeRoutes, "OutfitIdeas">>();
    return (
        <RectButton
            onPress={() => navigate(screen)}
            style={{ borderRadius: theme.borderRadii.m }}>
            <Box flexDirection="row" alignItems="center" padding="s">
                <RoundedIcon
                    iconRatio={0.5}
                    name={icon}
                    size={36}
                    backgroundColor={color}
                    color={"white"}
                />
                <Text variant="button" color="title" marginLeft="m">{label}</Text>
            </Box>
        </RectButton>
    )
}

export default DrawerItem;
