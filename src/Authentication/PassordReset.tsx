/* eslint-disable prettier/prettier */
import React from "react";

import { Container, Box, Button, Text, RoundedIconButton, RoundedIcon } from "../components";
import { AuthNavigationProps } from "../components/Navigation";

const SIZE = 80;

const PassordReset = ({ navigation }: AuthNavigationProps<"PasswordReset">) => {

    return (
        <Container pattern={0} footer={
            <Box flexDirection="row"
                justifyContent="center">
                <RoundedIconButton backgroundColor="white"
                    color="title" name="x" size={50} onPress={() => navigation.pop()} />
            </Box>}>
            <Box alignSelf="center">
                <RoundedIcon name="check" size={SIZE} color="primary" backgroundColor="primaryLight" />
            </Box>
            <Text variant="title1" textAlign="center" marginVertical="l">
                Your password was successfuully changed
                </Text>
            <Text variant="body" marginBottom="m" textAlign="center">
                Close the window and login again.
               </Text>
            <Box alignItems="center" marginTop="m">
                <Button
                    variant="primary"
                    label="Reset password"
                    onPress={() => navigation.navigate("Login")}
                />
            </Box>
        </Container>
    );
};

export default PassordReset;
