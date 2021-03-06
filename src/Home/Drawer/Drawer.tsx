/* eslint-disable prettier/prettier */
import { DrawerActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";

import { Box, Header, Text } from "../../components";
import { theme } from "../../components/Theme";

import DrawerItem, { DrawerItemProps } from "./DrawerItem";

const { width } = Dimensions.get("window");
export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = (2400 / 3200);
const height = DRAWER_WIDTH * aspectRatio;
export const assets = [require("../../components/assets/patterns/3.png")];

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

//({ navigation }: HomeNavigationProps< "OutfitIdeas">)

const DrawerContent = () => {
    const navigation = useNavigation();
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
                >
                    <Header title="my profile" left={{
                        icon: "x",
                        onPress: () => navigation.dispatch(DrawerActions.closeDrawer()),
                    }}
                        right={{ icon: "shopping-bag", onPress: () => true }} dark={true} />
                </Box>
            </Box>
            <Box flex={0.8}>
                <Box flex={1} backgroundColor="title" />
                <Box flex={1} backgroundColor="title" />
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
                    {items.map((item) => (<DrawerItem key={item.icon} {...item} />))}
                </Box>
            </Box>
            <Box backgroundColor="white"
                width={DRAWER_WIDTH}
                height={height * 0.61}
                overflow="hidden"
            >
                <Image
                    source={assets[0]}
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
