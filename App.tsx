/* eslint-disable prettier/prettier */
import * as React from "react";
import { ThemeProvider } from "@shopify/restyle";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import {
  assets as authenticationAssets,
  AuthenticationNavigator,
} from "./src/Authentication";
import { LoadAssets } from "./src/components";
import { theme } from "./src/components/Theme";
import { HomeNavigator, assets as drawerAsset } from "./src/Home";
import { AppRoutes } from "./src/components/Navigation";

const assets = [...authenticationAssets, ...drawerAsset];

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};


const AppStack = createStackNavigator<AppRoutes>();

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts, assets }}>
        <SafeAreaProvider>
          <AppStack.Navigator headerMode="none">
            <AppStack.Screen name="Authentication" component={AuthenticationNavigator} />
            <AppStack.Screen name="Home" component={HomeNavigator} />
          </AppStack.Navigator>
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}
