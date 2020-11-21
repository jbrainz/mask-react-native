import React from "react";
import { View } from "react-native";
/* eslint-disable prettier/prettier */

import { Button, Container, Text } from "../../components";
import SocialLogin from "../components";

const Login = () => {
    const footer = (
        <>
            <SocialLogin />
            <View style={{ alignItems: "center" }}>
                <Button variant="transparent" onPress={() => alert("Yup!")}>
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <Text variant="button" color="white"> Don't have an Account?</Text>
                        <Text variant="button" color="primary" marginLeft="s">Sign up here</Text>
                    </View>
                </Button>
            </View>
        </>
    );
    return (
        <Container {...{ footer }}>
            <View />
        </Container>
    );
};

export default Login;
