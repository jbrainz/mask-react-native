/* eslint-disable max-len */
import React from "react";
import { Image, View } from "react-native";

import { useTheme } from "../../components";
/* eslint-disable prettier/prettier */

const SIZE = 44;


// interface SocialIconProps {
//     childeren: ReactNode;
// }
const google = [require("./assets/img/facebook.png"),
require("./assets/img/g.png"), require("./assets/img/ios.png")];

const Facebook = () => {
    return (
        <Image source={google[0]} style=
            {{
                backgroundColor: "white",
                width: SIZE,
                height: SIZE,
                borderRadius: 22,
                justifyContent: "center",
                alignItems: "center",
            }}
        />

    )
}
const IOS = () => {
    return (
        <Image source={google[2]} style=
            {{
                backgroundColor: "white",
                width: SIZE,
                height: SIZE,
                borderRadius: 22,
                justifyContent: "center",
                alignItems: "center",
            }}
        />

    )
}
const Google = () => {
    return (
        <Image source={google[1]} style=
            {{
                backgroundColor: "white",
                width: SIZE,
                height: SIZE,
                borderRadius: 22,
                justifyContent: "center",
                alignItems: "center",
            }}
        />
    );
};

const SocialLogin = () => {
    const theme = useTheme();
    return (
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <View style={{ marginHorizontal: theme.spacing.s }}>
                <Facebook />
            </View>
            <View style={{ marginHorizontal: theme.spacing.s }}>
                <Google />
            </View>
            <View style={{ marginHorizontal: theme.spacing.s }}>
                <IOS />
            </View>
        </View>
    );
};

export default SocialLogin;
