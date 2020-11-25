import React from "react";
import { Dimensions, Image, View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
/* eslint-disable prettier/prettier */

import { useTheme, Text } from "../components/Theme";
import { Button } from "../components";
import { AuthNavigationProps } from "../components/Navigation";


const { width } = Dimensions.get("window");
const picture = {
    src: require("../../assets/img/5.jpg"),
    width: 3383,
    height: 5074,
};
export const assets = [picture.src];
const Welcome = ({ navigation }: AuthNavigationProps<"Welcome">) => {
    const theme = useTheme();
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{
                borderBottomRightRadius: theme.borderRadii.xl,
                backgroundColor: "white",
                justifyContent: "flex-end",
                alignItems: "center",
            }}>
                <Image
                    source={picture.src}
                    style={{
                        width,
                        height: ((width - theme.borderRadii.xl) * picture.height) / picture.width,
                        borderBottomRightRadius: theme.borderRadii.xl,
                    }}
                />
            </View>
            <View style={{
                flex: 1,
                borderTopRightRadius: theme.borderRadii.xl,
                backgroundColor: "transparent",
            }} >
                <View
                    style=
                    {{

                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}>
                    <View style={{
                        flex: 1,
                        justifyContent: "space-evenly",
                        backgroundColor: "white",
                        alignItems: "center",
                        borderTopLeftRadius: theme.borderRadii.xl,
                        padding: 30,
                    }}>
                        <Text variant="title2">Let's Get Started</Text>
                        <Text textAlign="center" variant="body">
                            Login to your account below or signup for an amazing experience
                        </Text>
                        <Button label="Have an acount? Login"
                            variant="primary"
                            onPress={() => navigation.navigate("Login")}
                        />
                        <Button label="Join us It's free"
                            variant="default"
                            onPress={() => navigation.navigate("SignUp")}
                        />
                        <BorderlessButton rippleColor="transparent"
                            onPress={() => navigation.navigate("ForgotPassword")}>
                            <Text variant="button" color="body">Forgot password?</Text>
                        </BorderlessButton>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Welcome;
