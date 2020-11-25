/* eslint-disable prettier/prettier */
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { HomeRoutes } from "../components/Navigation";

import OutfitIdeas from "./OutfitIdeas";


const Drawer = createDrawerNavigator<HomeRoutes>();

export const HomeNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
        </Drawer.Navigator>
    );
};