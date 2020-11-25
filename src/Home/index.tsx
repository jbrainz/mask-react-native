/* eslint-disable prettier/prettier */
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { HomeRoutes } from "../components/Navigation";

import OutfitIdeas from "./OutfitIdeas";
import DrawerContents, { DRAWER_WIDTH } from "./Drawer/Drawer";

const Drawer = createDrawerNavigator<HomeRoutes>();

export const HomeNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={DrawerContents} drawerStyle={{ width: DRAWER_WIDTH }}>
            <Drawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
        </Drawer.Navigator>
    );
};
