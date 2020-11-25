/* eslint-disable prettier/prettier */
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { HomeRoutes } from "../components/Navigation";

import OutfitIdeas from "./OutfitIdeas";
import DrawerContents, { DRAWER_WIDTH, assets as drawerAsset } from "./Drawer/Drawer";

export const assets = [...drawerAsset];

const Drawer = createDrawerNavigator<HomeRoutes>();

export const HomeNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={DrawerContents} drawerStyle={{ width: DRAWER_WIDTH }}>
            <Drawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
        </Drawer.Navigator>
    );
};
