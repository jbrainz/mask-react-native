/* eslint-disable prettier/prettier */
import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";

import { Box, RoundedIconButton, Text } from "../../components";
import { theme } from "../../components/Theme";

import DrawerItem, { DrawerItemProps } from "./DrawerItem";

const { width } = Dimensions.get("window");
export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = (2400 / 3200);
const height = DRAWER_WIDTH * aspectRatio;

const items: DrawerItemProps[] = [
    {
        icon: "zap",
        color: "primary",
        label: "Outfit ideas",
        screen: "OutfitIdeas",
    },
    {
        icon: "heart",
        color: "danger",
        label: "Favorites",
        screen: "Favorites",
    },
    {
        icon: "user",
        color: "title",
        label: "Profile",
        screen: "Profile",
    },
    {
        icon: "activity",
        color: "violet",
        label: "Transaction History",
        screen: "Transaction",
    },
    {
        icon: "settings",
        color: "primary",
        label: "Notification",
        screen: "Notification",
    },
    {
        icon: "log-out",
        color: "darkgrey",
        label: "Logout",
        screen: "Logout",
    },

];

const DrawerContent = () => {
    return (
        <Box flex={1}>
            <Box flex={0.2} backgroundColor="white">
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    borderBottomRightRadius="xl"
                    backgroundColor="title"
                    flexDirection="row"
                    paddingTop="xl"
                    justifyContent="space-between"
                    paddingHorizontal="m"
                >
                    <RoundedIconButton
                        size={24}
                        name="x"
                        color="white"
                        backgroundColor="title"
                        onPress={() => true}
                    />
                    <Text color="white">MY PROFILE</Text>
                    <RoundedIconButton
                        size={24}
                        name="shopping-bag"
                        color="white"
                        backgroundColor="title"
                        onPress={() => true}
                    />
                </Box>
            </Box>
            <Box flex={0.8}>
                <Box flex={1} backgroundColor="title" />
                <Box flex={1} />
                <Image
                    source={require("../../components/assets/patterns/3.png")}
                    style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: -height * 0.61,
                        width: DRAWER_WIDTH,
                        height: height,
                    }} />
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    borderTopLeftRadius="xl"
                    borderBottomRightRadius="xl"
                    backgroundColor="white"
                    justifyContent="center"
                    padding="xl"
                >
                    <Box
                        backgroundColor="primary"
                        position="absolute"
                        top={-50}
                        left={(DRAWER_WIDTH / 2) - 50}
                        width={100}
                        height={100}
                        style={{ borderRadius: 50 }}
                    />
                    <Box marginVertical="m">
                        <Text variant="title1" textAlign="center">Pius John</Text>
                        <Text variant="body" textAlign="center">piusunimke@gmail.com</Text>
                    </Box>
                    {items.map((item) => (<DrawerItem key={item.screen} {...item} />))}
                </Box>
            </Box>
            <Box backgroundColor="white"
                width={DRAWER_WIDTH}
                height={height * 0.61}
                overflow="hidden"
            >
                <Image
                    source={require("../../components/assets/patterns/3.png")}
                    style={{
                        ...StyleSheet.absoluteFillObject,
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: -height * (1 - 0.61),
                        width: DRAWER_WIDTH,
                        height,
                        borderTopLeftRadius: theme.borderRadii.xl,
                    }}
                />
            </Box>
        </Box>
    );
};

export default DrawerContent;
